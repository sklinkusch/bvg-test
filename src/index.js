import Direction from "./directions";

class Station extends Direction {
  constructor() {
    super();
    this.container = document.querySelector("#container");
    this._stop = this.direction.jov.stop;
    this.getData();
    this.addEventListeners();
  }
  addEventListeners() {
    const dropdown = document.querySelector("#dropdown");
    dropdown.addEventListener("input", (e) => {
      const selectValue = e.target.value;
      this.stop = this.direction[selectValue].stop;
      this.getData();
    });
    document.querySelector("#refresh").addEventListener("click", () => {
      this.getData();
    });
  }
  checkBarrier(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].code == "bf") {
        return `<span class="fas fa-wheelchair" title="barrier-free">&nbsp;</span>`;
      }
    }
    return "";
  }
  checkBike(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].code == "FB") {
        return `<span class="fas fa-bicycle" title="You can take your bike with you.">&nbsp;</span>`;
      }
    }
    return "";
  }
  checkState(array) {
    const stateText =
      array
        .filter((a) => a.type === "status")
        .map((a) => a.text)
        .join("\n") || "";
    if (stateText !== "") {
      return `<span class="fas fa-times" title="${stateText}">&nbsp;</span>`;
    }
    return "";
  }
  checkWarning(array) {
    const warnArray = array.filter((a) => a.type === "warning");
    const arrayWithoutLinks = warnArray.map((a) => ({
      summary: /<a.*href=".*".*>.*<\/a>/.test(a.summary)
        ? this.replaceLinks(a.summary)
        : a.summary,
      text: /<a.*href=".*".*>.*<\/a>/.test(a.text)
        ? this.replaceLinks(a.text)
        : a.text,
      validFrom: a.validFrom,
      validUntil: a.validUntil,
    }));
    const warnText =
      arrayWithoutLinks
        .map((a) => `${a.validFrom} - ${a.validUntil}: ${a.summary}, ${a.text}`)
        .join("\n") || "";
    if (warnText !== "") {
      return `<span class="fas fa-exclamation-triangle" title="${warnText}">&nbsp;</span>`;
    }
    return "";
  }
  evalData(array, index) {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    if (array.length > 0) {
      const sortedArray = array.sort((a, b) => {
        if (a.stop.name.toLowerCase() < b.stop.name.toLowerCase()) {
          return -1;
        } else if (b.stop.name.toLowerCase() < a.stop.name.toLowerCase()) {
          return +1;
        } else {
          const sortingArray = [
            "express",
            "regional",
            "suburban",
            "subway",
            "tram",
            "bus",
            "ferry",
          ];
          if (
            sortingArray.indexOf(a.line.product) <
            sortingArray.indexOf(b.line.product)
          ) {
            return -1;
          } else if (
            sortingArray.indexOf(b.line.product) <
            sortingArray.indexOf(a.line.product)
          ) {
            return +1;
          } else {
            return 0;
          }
        }
      });
      let splitArray = [];
      let lowestValue = 0;
      while (lowestValue < sortedArray.length) {
        let lowestResult = sortedArray[lowestValue].stop.name;
        let highestValue;
        let filtered;
        for (let i = lowestValue; i < sortedArray.length; i++) {
          if (sortedArray[i].stop.name !== lowestResult) {
            highestValue = i;
            break;
          }
        }
        filtered = sortedArray.slice(lowestValue, highestValue);
        splitArray.push(filtered);
        lowestValue = highestValue;
      }
      splitArray.forEach((singleStop) => {
        const header = document.createElement("h2");
        header.innerHTML = `Abfahrten ab ${singleStop[0].stop.name}`;
        this.container.appendChild(header);

        singleStop.forEach((trip) => {
          let planTime, realTime, delay;
          if (trip.when != null && trip.delay != null) {
            realTime = trip.when.substr(11, 5);
            delay = Math.floor(trip.delay / 60);
            planTime = this.getPlanTime(realTime, delay);
          } else if (trip.when != null) {
            planTime = trip.when.substr(11, 5);
            delay = "?";
            realTime = "";
          } else {
            realTime = "Ausfall";
            delay = "X";
            planTime = trip.formerScheduledWhen.substr(11, 5);
          }
          const line = trip.line.name;
          const mean = this.getMean(line);
          const target = trip.direction;
          const remarks = trip.remarks;
          const barrier = this.checkBarrier(remarks);
          const bike = this.checkBike(remarks);
          const warning = this.checkWarning(remarks);
          const state = this.checkState(remarks);
          const row = document.createElement("div");
          row.className = "row";
          row.innerHTML = `
            <div class="planTime">${planTime}</div>
            <div class="realTime">${realTime}</div>
            <div class="delay">${delay}</div>
            <div class="transport">${mean}</div>
            <div class="line">${line}</div>
            <div class="direction">${target}</div>
            <div class="barrier">${barrier}</div>
            <div class="bike">${bike}</div>
            <div class="warning">${warning}</div>
            <div class="status">${state}</div>
          `;
          this.container.appendChild(row);
        });
      });
    }
  }
  getData() {
    this.stop.forEach((stop, index) => {
      //  const url = `https://1.bvg.transport.rest/stations/${stop}/departures?duration=60&includeRelatedStations=false`;
      const url = `https://sklinkusch-vbbmicro.now.sh/?station=${stop}&duration=20`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.evalData(data, index);
        })
        .catch((err) => console.log(err));
    });
  }
  getMean(line) {
    switch (true) {
      case /^ICE/.test(line):
        return `<span class="fas fa-train" title="Intercity Express train">&nbsp;</span>`;
        break;
      case /^IC/.test(line):
        return `<span class="fas fa-train" title="Intercity train">&nbsp;</span>`;
        break;
      case /^EC/.test(line):
        return `<span class="fas fa-train" title="Eurocity train">&nbsp;</span>`;
        break;
      case /^RJ/.test(line):
        return `<span class="fas fa-train" title="Austrian Railjet train">&nbsp;</span>`;
        break;
      case /^EN/.test(line):
        return `<span class="fas fa-train" title="EuroNight train">&nbsp;</span>`;
        break;
      case /^NJ/.test(line):
        return `<span class="fas fa-train" title="Austrian NightJet train">&nbsp;</span>`;
        break;
      case /^TGV/.test(line):
        return `<span class="fas fa-train" title="French Train &#224; grande vitesse">&nbsp;</span>`;
        break;
      case /^THA/.test(line):
        return `<span class="fas fa-train" title="European Thalys train">&nbsp;</span>`;
        break;
      case /^FLX/.test(line):
        return `<span class="fas fa-train" title="FlixTrain">&nbsp;</span>`;
        break;
      case /^HBX/.test(line):
        return `<span class="fas fa-train" title="Harz-Berlin Express train">&nbsp;</span>`;
        break;
      case /^IRE/.test(line):
        return `<span class="fas fa-train" title="InterRegio Express train">&nbsp;</span>`;
        break;
      case /^RE/.test(line):
        return `<span class="fas fa-train" title="Regional Express train">&nbsp;</span>`;
        break;
      case /^RB/.test(line):
        return `<span class="fas fa-train" title="Regional train">&nbsp;</span>`;
        break;
      case /^S/.test(line):
        return `<span class="fas fa-subway" title="suburban railway (S-Bahn)">&nbsp;</span>`;
      case /^U/.test(line):
        return `<span class="fas fa-subway" title="underground (U-Bahn)">&nbsp;</span>`;
        break;
      case /^M(1|2|4|5|6|8)$/.test(line):
      case /^M1(0|3|7)$/.test(line):
      case /^[1-9][0-9]$/.test(line):
        return `<span class="fas fa-tram" title="tramway">&nbsp;</span>`;
        break;
      case /^F/.test(line):
        return `<span class="fas fa-ship" title="ferry">&nbsp;</span>`;
        break;
      case /^[1-9][0-9]{2}$/.test(line):
      case /^M(11|19|21|27|29|32|37|41|44|45|46|48|49|76|77|82|85)$/.test(line):
      case /^X[0-9]{1,2}$/.test(line):
      case /^N[0-9]{1,2}$/.test(line):
      case /^TXL$/.test(line):
        return `<span class="fas fa-bus" title="bus">&nbsp;</span>`;
        break;
    }
  }
  getPlanTime(realtime, delay) {
    let hours = Number(realtime.substr(0, 2));
    let minutes = Number(realtime.substr(3, 2));
    minutes -= delay;
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (minutes > 59) {
      minutes -= 60;
      hours += 1;
    }
    if (hours < 0) {
      hours += 24;
    }
    if (hours > 23) {
      hours -= 24;
    }
    let hourString = hours < 10 ? `0${hours}` : `${hours}`;
    let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hourString}:${minuteString}`;
  }
  replaceLinks(string) {
    const pattern = /<a.*href=\"(.*)\".*>(.*)<\/a>/g;
    const finalString = string.replace(pattern, "$2 ($1)");
    return finalString;
  }
  get stop() {
    return this._stop;
  }
  set stop(newStop) {
    this._stop = newStop;
  }
}
const jov = new Station();
