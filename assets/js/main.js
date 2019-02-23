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
    if (hours < 0) {
      hours += 24;
    }
    let hourString = hours < 10 ? `0${hours}` : `${hours}`;
    let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hourString}:${minuteString}`;
  }
}

const jovStork = new Station("#JOVStorkresults", 900000160541, 900000160014, []);
const jovObf = new Station("#JOVObfresults", 900000160541, 900000160529, []);
const baeRoe = new Station("#BaeRoeresults", 900000160509, 900000160710, []);
const baeHer = new Station("#BaeHerresults", 900000160509, 900000160518, []);
const moeRoe = new Station("#MoeRoeresults", 900000160014, 900000160010, []);
const moeLoe = new Station("#MoeLoeresults", 900000160014, 900000160017, []);
const bstobfa = new Station("#BSTO_BFA", 900000110012, 900000120001, ["S41", "S8", "S85"]);
const bstoblst = new Station("#BSTO_BLST", 900000110012, 900000110004, ["S42", "S8", "S85"]);