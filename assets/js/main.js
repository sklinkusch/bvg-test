/*class Station_nofilter {
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
}*/

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
            if (filterSet[j].line != null && filterSet[j].dir != null) {
              if (array[i].line.name.includes(filterSet[j].line) && array[i].direction.includes(filterSet[j].dir)) {
                identifier = true;
                break;
              }
            } else if (filterSet[j].line != null) {
              if (array[i].line.name.includes(filterSet[j].line)) {
                identifier = true;
                break;
              }
            } else if (filterSet[j].dir != null) {
              if (array[i].direction.includes(filterSet[j].dir)) {
                identifier = true;
                break;
              }
            } else {
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
              planTime = array[i].when.substr(11, 5);
              delay = "?";
              realTime = "";
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

const jov = new Station("#JOV", 900000160541, [[{ line: "240", dir: "Storkower" }], [{ line: "N50", dir: "Hugenottenplatz" }, { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "N50", dir: "Pankow" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }], [{ line: "N50", dir: "Tierpark" }, { line: "N50", dir: "Betriebshof Lichtenberg" }]]);
const bae = new Station("#Bae", 900000160509, [[{ line: "M8", dir: "Hauptbahnhof" }, { line: "M8", dir: "Petersburger" }], [{ line: "M5", dir: "Petersburger" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M8", dir: "Ahrensfelde/Stadtgrenze" }, { line: "M8", dir: "Betriebshof Marzahn" }], [{ line: "21", dir: "Gudrunstr" }]]);
const moe = new Station("#Moe", 900000160014, [[{ line: "M13", dir: "Warschauer" }, { line: "M13", dir: "Frankfurter" }], [{ line: "16", dir: "Frankfurter" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Degnerstr" }, { line: "M13", dir: "Betriebshof Lichtenberg" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "21", dir: "Gudrunstr" }]]);
const bsto = new Station("#BSTO", 900000110012, [[{ line: "S41", dir: null }], [{ line: "S8", dir: "Grünau" }, { line: "S8", dir: "Zeuthen" }], [{ line: "S85", dir: "Schöneweide" }, { line: "S85", dir: "Grünau" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }], [{ line: "S85", dir: "Pankow" }], [{ line: "156", dir: "Stadion Buschallee" }, { line: "156", dir: "Große Seestr" }, { line: "156", dir: "Pasedagplatz" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }]]);
const bmn = new Station("#BMN", 900000024106, [[{ line: "S41", dir: null }], [{ line: "S46", dir: "Westend" }, { line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }, { line: "M49", dir: "Gatower Str" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }, { line: "X34", dir: "Gatower Str" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }, { line: "X49", dir: "Gatower Str" }], [{ line: "139", dir: "Werderstr" }], [{ line: "218", dir: "Pfaueninsel" }], [{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer" }], [{ line: "X49", dir: "Wilmersdorfer" }]]);
const gat = new Station("#Gat", 900000032106, [[{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }, { line: "M49", dir: "Haus des Rundfunks" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer Str" }], [{ line: "X49", dir: "Wilmersdorfer" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }], [{ line: "134", dir: "Hottengrund" }, { line: "134", dir: "Alt-Gatow" }, { line: "134", dir: "Alt-Kladow" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }], [{ line: "134", dir: "Wasserwerk Spandau" }, { line: "134", dir: "Kisseln" }, { line: "134", dir: "Rathaus Spandau" }], [{ line: "136", dir: "Aalemannufer" }, { line: "136", dir: "Hennigsdorf" }, { line: "136", dir: "Werderstr" }, { line: "136", dir: "Rathaus Spandau" }], [{ line: "236", dir: "Haselhorst" }, { line: "236", dir: "Rathaus Spandau" }], [{ line: "136", dir: "Am Omnibushof" }], [{ line: "236", dir: "Am Omnibushof" }]]);
const wil = new Station("#Wil", 900000032102, [[{ line: "135", dir: "Rathaus Spandau" }, { line: "135", dir: "Am Omnibushof" }], [{ line: "638", dir: "Rathaus Spandau" }], [{ line: "135", dir: "Alt-Kladow" }, { line: "135", dir: "Landstadt Gatow" }, { line: "135", dir: "Hottengrund" }], [{ line: "638", dir: "Hauptbahnhof" }, { line: "638", dir: "Campus Jungfernsee" }], [{ line: "338", dir: "Havelpark" }]]);