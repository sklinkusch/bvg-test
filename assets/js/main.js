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
    } else {
      this.containers[dirIndex].innerHTML = `<div class="error">Your search did not match any means of transport</div>`;
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

class Station_filter extends Station_nofilter {
  constructor(domSelectors, station, directions, filterValues) {
    super(domSelectors, station, directions);
    this.filter = filterValues;
    this.getData();
  }
  filterArray(data, dirIndex) {
    if (this.filter[dirIndex].length > 0) {
      const filtered = data.filter(route => {
        let identifier = false;
        this.filter[dirIndex].forEach(filterValue => {
          if (route.line.name.includes(filterValue) || route.direction.includes(filterValue)) {
            identifier = true;
          }
        });
        if (identifier == true) {
          return route;
        }
      });
      return filtered;
    } else {
      return data;
    }
  }
  getData() {
    this.directions.forEach((direction, index) => {
      const url = `https://1.bvg.transport.rest/stations/${this.stop}/departures?direction=${direction}&duration=60`;
      fetch(url)
        .then(response => {
          return response.json();
        }).then(data => {
          const filteredData = this.filterArray(data, index);
          this.evalData(filteredData, index);
        }).catch(function (err) {
          console.log(err);
        });
    });
  }
}

class Station {
  constructor(domSelector, station, filterValues) {
    this.container = document.querySelector(domSelector);
    this.stop = station;
    this.filter = filterValues;
    this.getData();
  }
  evalData(array) {
    if (array.length > 0) {
      const header = document.createElement('h2');
      header.innerHTML = `Abfahrten ab ${array[0].stop.name}`;
      this.container.appendChild(header);

      this.filter.forEach(filterSet => {
        var subheader_ident = true;
        for (let i = 0; i < array.length; i++) {
          let identifier = false;
          for (let j = 0; j < filterSet.length; j++) {
            if (array[i].line.name.includes(filterSet[j]) || array[i].direction.includes(filterSet[j])) {
              identifier = true;
              break;
            }
          }
          if (identifier == true) {
            if (subheader_ident == true) {
              const subheader = document.createElement('h3');
              subheader.innerHTML = `Richtung ${array[i].direction}`;
              this.container.appendChild(subheader);
              subheader_ident = false;
            }
            let planTime, realTime, delay;
            if (array[i].when != null && array[i].delay != null) {
              realTime = array[i].when.substr(11, 5);
              delay = Math.floor(array[i].delay / 60);
              planTime = this.getPlanTime(realTime, delay);
            } else if (array[i].when != null) {
              realTime = array[i].when.substr(11, 5);
              delay = "?";
              planTime = realTime;
            } else {
              realTime = "Ausfall";
              delay = "X";
              planTime = array[i].formerScheduledWhen.substr(11, 5);
            }
            const line = array[i].line.name;
            const target = array[i].direction;
            const row = document.createElement('div');
            row.className = "row";
            row.innerHTML = `
            <div class="planTime">${planTime}</div>
            <div class="realTime">${realTime}</div>
            <div class="delay">${delay}</div>
            <div class="line">${line}</div>
            <div class="direction">${target}</div>
            `;
            this.container.appendChild(row);
          }
        }
      });
    }
  }
  getData() {
    const url = `https://1.bvg.transport.rest/stations/${this.stop}/departures?duration=60&includeRelatedStations=false`;
    fetch(url)
      .then(response => {
        return response.json();
      }).then(data => {
        this.evalData(data);
      }).catch(function (err) {
        console.log(err);
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

const jov = new Station("#JOV", 900000160541, [["Storkower", "Hugenottenplatz"], ["Ostbahnhof", "Betriebshof", "Tierpark"]]);
const bae = new Station("#Bae", 900000160509, [["Hauptbahnhof", "Petersburger", "Schöneweide"], ["Ahrensfelde", "Marzahn", "Gudrunstr"]]);
const moe = new Station("#Moe", 900000160014, [["Warschauer", "Frankfurter", "Schöneweide"], ["Virchow", "Gudrunstr", "Riesaer"]]);
const bsto = new Station("#BSTO", 900000110012, [["S41", "Grünau", "Ostkreuz", "Schöneweide", "Zeuthen"], ["S42", "Birkenwerder", "Blankenburg", "Pankow", "Greifswalder"], ["Ostbahnhof", "Betriebshof"]]);
const bmn = new Station("#BMN", 900000024106, [["S41", "Westend", "Gesundbrunnen"], ["S42", "Halensee", "Wusterhausen"], ["Gatower", "Gutsstr", "Hottengrund", "Hahneberg", "Spektefeld", "Nennhauser", "Reimerweg"], ["Zoo", "Wilmersdorfer"]]);
const gat = new Station("#Gat", 900000032106, [["Zoo", "Wilmersdorfer"], ["Hottengrund", "Alt-Gatow", "Alt-Kladow", "Gutsstr"], ["Nennhauser", "Reimerweg", "Hahneberg", "Spektefeld"], ["Wasserwerk", "Kisseln"], ["Aalemannufer", "Hennigsdorf", "Werderstr", "Haselhorst"]]);
const wil = new Station("#Wil", 900000032102, [["Rathaus"], ["Alt-Kladow"], ["Potsdam", "Jungfernsee"], ["Seeburg", "Havelpark"]]);