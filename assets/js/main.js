class Station_nofilter {
  constructor(domSelectors, station, directions) {
    this.containers = domSelectors.map(domSelector => document.querySelector(domSelector));
    this.stop = station;
    this.directions = directions;
    this.getData();
  }
  evalData(array, dirIndex) {
    if (array.length > 0) {
      let header;
      if (dirIndex == 0) {
        header = `<h2>Abfahrten ab ${array[0].stop.name}</h2>`;
      } else {
        header = "";
      }
      const subheader = `<h3>Richtung ${array[0].direction}</h3>`;
      const innerString = array.map(route => {
        let planTime, realTime, delay;
        if (route.when != null && route.delay != null) {
          realTime = route.when.substr(11, 5);
          delay = Math.floor(route.delay / 60);
          planTime = this.getPlanTime(realTime, delay);
        } else if (route.when != null) {
          realTime = route.when.substr(11, 5);
          delay = "?";
          planTime = realTime;
        } else {
          realTime = "Ausfall";
          delay = "X";
          planTime = route.formerScheduledWhen.substr(11, 5);
        }
        const line = route.line.name;
        const target = route.direction;
        return `
        <div class="row">
        <div class="planTime">${planTime}</div>
      <div class="realTime">${realTime}</div>
      <div class="delay">${delay}</div>
      <div class="line">${line}</div>
      <div class="target">${target}</div>
        </div>
        `;
      }).join("");
      this.containers[dirIndex].innerHTML = `${header}${subheader}${innerString}`;
    }
  }
  getData() {
    this.directions.forEach((direction, index) => {
      const url = `https://1.bvg.transport.rest/stations/${this.stop}/departures?direction=${direction}&duration=60`;
      fetch(url)
        .then(response => {
          return response.json();
        }).then(data => {
          this.evalData(data, index);
        }).catch(function (err) {
          console.log(err);
        });
    });
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
}

class Station {
  constructor(domSelector, station, direction, filterValues) {
    this.container = document.querySelector(domSelector);
    this.stop = station;
    this.direction = direction;
    this.filter = filterValues;
    this.getData();
  }

  displayData(data) {
    if (data.length > 0) {
      const stopName = data[0].stop.name;
      const directionName = data[0].direction;
      const header = `<h2>Abfahrten ab ${stopName}</h2>`;
      const subheader = `<h3>Richtung ${directionName}</h3>`;
      const dataString = data.map(route => {
        let planTime, realTime, delay;
        if (route.when != null && route.delay != null) {
          realTime = route.when.substr(11, 5);
          delay = Math.floor(route.delay / 60);
          planTime = this.getPlanTime(realTime, delay);
        } else if (route.when != null) {
          realTime = route.when.substr(11, 5);
          delay = "?";
          planTime = realTime;
        } else {
          realTime = "Ausfall";
          delay = "X";
          planTime = route.formerScheduledWhen.substr(11, 5);
        }
        const line = route.line.name;
        const target = route.direction;
        return `
        <div class="row">
        <div class="planTime">${planTime}</div>
      <div class="realTime">${realTime}</div>
      <div class="delay">${delay}</div>
      <div class="line">${line}</div>
      <div class="target">${target}</div>
        </div>
        `;
      }).join("");
      const html = header + subheader + dataString;
      this.container.innerHTML = html;
    }
  }

  filterArray(data) {
    const filtered = data.filter(route => {
      let identifier = false;
      this.filter.forEach(filterValue => {
        if (route.line.name.includes(filterValue) || route.direction.includes(filterValue)) {
          identifier = true;
        }
      });
      if (identifier == true) {
        return route;
      }
    });
    return filtered;
  }

  getData() {
    const url = `https://1.bvg.transport.rest/stations/${this.stop}/departures?direction=${this.direction}&duration=60`;
    fetch(url)
      .then(response => {
        return response.json();
      }).then(data => {
        if (this.filter.length > 0) {
          const filteredData = this.filterArray(data);
          this.displayData(filteredData);
        } else {
          this.displayData(data);
        }
      }).catch(function (err) {
        console.log(`Something went wrong. ${err}`);
      });
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
}

const jov = new Station_nofilter(["#JOVStorkresults", "#JOVObfresults"], 900000160541, [900000160014, 900000160529]);
const bae = new Station_nofilter(["#BaeRoeresults", "#BaeHerresults"], 900000160509, [900000160710, 900000160518]);
const moe = new Station_nofilter(["#MoeRoeresults", "#MoeLoeresults"], 900000160014, [900000160010, 900000160017]);
const bstobfa = new Station("#BSTO_BFA", 900000110012, 900000120001, ["S41", "S8", "S85"]);
const bstoblst = new Station("#BSTO_BLST", 900000110012, 900000110004, ["S42", "S8", "S85"]);
const bstobus = new Station("#BSTO_240", 900000110012, 900000160014, []);
const bmnbwes = new Station("#BMN_BWES", 900000024106, 900000026207, ["S41", "S46"]);
const bmnbwkrr = new Station("#BMN_BWKRR", 900000024106, 900000024102, ["S42", "S46"]);
const bmnzoo = new Station("#BMN_Zoo", 900000024106, 900000024104, []);
const bmnspa = new Station("#BMN_Spa", 900000024106, 900000032402, []);
const gat = new Station_nofilter(["#Gat_BHST", "#Gat_Kla", "#Gat_Sta", "#Gat_Spa"], 900000032106, [900000026105, 900000032251, 900000032102, 900000032104]);