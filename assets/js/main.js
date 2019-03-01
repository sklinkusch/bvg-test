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
  constructor(domSelector, station, neighboring, filterValues) {
    this.container = document.querySelector(domSelector);
    this._stop = station;
    this._neighboring = neighboring;
    this._filter = filterValues;
    this.getData();
    this.addEventListeners();
  }
  addEventListeners() {
    const dropdown = document.querySelector("#dropdown");
    dropdown.addEventListener("input", (e) => {
      const selectValue = e.target.value;
      switch (selectValue) {
        case "BBEU":
          this.stop = [900000020202];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }], [{ line: "TXL", dir: "Flughafen Tegel" }], [{ line: "106", dir: "Seestr" }], [{ line: "123", dir: "Goebelplatz" }, { line: "123", dir: "Mäckeritzwiesen" }], [{ line: "N26", dir: "Seestr" }], [{ line: "TXL", dir: "Alexanderplatz" }, { line: "TXL", dir: "Hauptbahnhof" }], [{ line: "106", dir: "Lindenhof" }, { line: "106", dir: "Südkreuz" }, { line: "106", dir: "Kurfürstenstr" }], [{ line: "123", dir: "Hauptbahnhof" }], [{ line: "N26", dir: "Zoologischer Garten" }]]];
          break;
        case "BBUP":
          this.stop = [900000044202];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }], [{ line: "U9", dir: "Osloer Str" }], [{ line: "U9", dir: "Steglitz" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Südkreuz" }], [{ line: "N9", dir: "Osloer Str" }, { line: "N9", dir: "Zoologischer Garten" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "N9", dir: "Steglitz" }]]];
          break;
        case "BFA":
          this.stop = [900000120001];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }], [{ line: "S85", dir: "Pankow" }, { line: "S85", dir: "Greifswalder Str" }], [{ line: "U5", dir: "Hönow" }, { line: "U5", dir: "Kaulsdorf-Nord" }, { line: "U5", dir: "Friedrichsfelde" }], [{ line: "U5", dir: "Alexanderplatz" }], [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Björnsonstr" }, { line: "M13", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "M13", dir: "Degnerstr" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "M13", dir: "S Warschauer Str" }, { line: "M13", dir: "Scharnweberstr./Weichselstr." }], [{ line: "16", dir: "Scharnweberstr./Weichselstr." }], [{ line: "N5", dir: "Riesaer Str" }, { line: "N5", dir: "Wuhletal" }], [{ line: "N5", dir: "Hackescher Markt" }]]];
          break;
        case "BGB":
          this.stop = [900000007102];
          this.neighboring = false;
          this.filter = [[[{ line: "RE3", dir: "Schwedt" }, { line: "RE3", dir: "Stralsund" }, { line: "RE3", dir: "Prenzlau" }, { line: "RE3", dir: "Angermünde" }, { line: "RE3", dir: "Eberswalde" }], [{ line: "RE5", dir: "Rostock" }, { line: "RE5", dir: "Stralsund" }], [{ line: "RB54", dir: "Rheinsberg" }], [{ line: "RE66", dir: "Szczecin" }], [{ line: "RB27", dir: null }], [{ line: "RE3", dir: "Wittenberg" }, { line: "RE3", dir: "Falkenberg" }, { line: "RE3", dir: "Halle" }], [{ line: "RE5", dir: "Elsterwerda" }, { line: "RE5", dir: "Wünsdorf" }], [{ line: "RE6", dir: "Wittenberge" }, { line: "RE6", dir: "Neuruppin" }], [{ line: "RB54", dir: "Lichtenberg" }], [{ line: "S1", dir: "Oranienburg" }, { line: "S1", dir: "Frohnau" }, { line: "S1", dir: "Waidmannslust" }, { line: "S1", dir: "Schönholz" }], [{ line: "S2", dir: "Bernau" }, { line: "S2", dir: "Buch" }, { line: "S2", dir: "Blankenburg" }], [{ line: "S25", dir: "Hennigsdorf" }, { line: "S25", dir: "Tegel" }, { line: "S25", dir: "Schönholz" }], [{ line: "S26", dir: "Waidmannslust" }], [{ line: "S41", dir: null }], [{ line: "S1", dir: "Wannsee" }, { line: "S1", dir: "Zehlendorf" }, { line: "S1", dir: "Schöneberg" }, { line: "S1", dir: "Potsdamer Platz" }, { line: "S1", dir: "Nordbahnhof" }], [{ line: "S2", dir: "Blankenfelde" }, { line: "S2", dir: "Lichtenrade" }, { line: "S2", dir: "Südkreuz" }, { line: "S2", dir: "Potsdamer Platz" }, { line: "S2", dir: "Nordbahnhof" }], [{ line: "S25", dir: "Teltow" }, { line: "S25", dir: "Lichterfelde" }, { line: "S25", dir: "Potsdamer Platz" }, { line: "S25", dir: "Nordbahnhof" }], [{ line: "S26", dir: "Teltow" }, { line: "S26", dir: "Lichterfelde" }, { line: "S26", dir: "Potsdamer Platz" }, { line: "S26", dir: "Nordbahnhof" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }], [{ line: "U8", dir: "Wittenau" }, { line: "U8", dir: "Paracelsus-Bad" }], [{ line: "U8", dir: "Hermannstr" }], [{ line: "247", dir: "Leopoldplatz" }], [{ line: "N8", dir: "Wilhelmsruher Damm" }, { line: "N8", dir: "Osloer Str" }], [{ line: "247", dir: "Nordbahnhof" }, { line: "247", dir: "Bernauer Str" }], [{ line: "N8", dir: "Hermannstr" }, { line: "N8", dir: "Hermannplatz" }]]];
          break;
        case "BGSS":
          this.stop = [900000110003];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }, { line: "S8", dir: "Pankow" }], [{ line: "S85", dir: "Pankow" }], [{ line: "M4", dir: "Falkenberg" }, { line: "M4", dir: "Zingster Str" }, { line: "M4", dir: "Sulzfelder Str" }], [{ line: "M4", dir: "Hackescher Markt" }]]];
          break;
        case "BHAL":
          this.stop = [900000040101];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Westend" }, { line: "S46", dir: "Gesundbrunnen" }], [{ line: "M19", dir: "Grunewald" }, { line: "M19", dir: "Halensee" }], [{ line: "M29", dir: "Roseneck" }], [{ line: "X10", dir: "Teltow" }, { line: "X10", dir: "Andr&#233;ezeile" }], [{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }], [{ line: "N42", dir: "Theodor-Heuss-Platz" }], [{ line: "M19", dir: "Mehringdamm" }], [{ line: "M29", dir: "Hermannplatz" }], [{ line: "X10", dir: "Zoologischer Garten" }], [{ line: "104", dir: "Tunnelstr" }, { line: "104", dir: "Treptower Park" }], [{ line: "N42", dir: "Alexanderplatz" }]]];
          break;
        case "jov":
          this.stop = [900000160541];
          this.neighboring = false;
          this.filter = [[[{ line: "240", dir: "Storkower" }], [{ line: "N50", dir: "Hugenottenplatz" }, { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "N50", dir: "Pankow" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }], [{ line: "N50", dir: "Tierpark" }, { line: "N50", dir: "Betriebshof Lichtenberg" }]]];
          break;
        case "bae":
          this.stop = [900000160509];
          this.neighboring = false;
          this.filter = [[[{ line: "M8", dir: "Hauptbahnhof" }, { line: "M8", dir: "Petersburger" }], [{ line: "M5", dir: "Petersburger" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M8", dir: "Ahrensfelde/Stadtgrenze" }, { line: "M8", dir: "Betriebshof Marzahn" }], [{ line: "21", dir: "Gudrunstr" }]]];
          break;
        case "moe":
          this.stop = [900000160014];
          this.neighboring = false;
          this.filter = [[[{ line: "M13", dir: "Warschauer" }, { line: "M13", dir: "Frankfurter" }], [{ line: "16", dir: "Frankfurter" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Degnerstr" }, { line: "M13", dir: "Betriebshof Lichtenberg" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "21", dir: "Gudrunstr" }]]]
          break;
        case "gat":
          this.stop = [900000032106];
          this.neighboring = false;
          this.filter = [[[{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }, { line: "M49", dir: "Haus des Rundfunks" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer Str" }], [{ line: "X49", dir: "Wilmersdorfer" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }], [{ line: "134", dir: "Hottengrund" }, { line: "134", dir: "Alt-Gatow" }, { line: "134", dir: "Alt-Kladow" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }], [{ line: "134", dir: "Wasserwerk Spandau" }, { line: "134", dir: "Kisseln" }, { line: "134", dir: "Rathaus Spandau" }], [{ line: "136", dir: "Aalemannufer" }, { line: "136", dir: "Hennigsdorf" }, { line: "136", dir: "Werderstr" }, { line: "136", dir: "Rathaus Spandau" }], [{ line: "236", dir: "Haselhorst" }, { line: "236", dir: "Rathaus Spandau" }], [{ line: "136", dir: "Am Omnibushof" }], [{ line: "236", dir: "Am Omnibushof" }]]];
          break;
        case "wil":
          this.stop = [900000032102];
          this.neighboring = false;
          this.filter = [[[{ line: "135", dir: "Rathaus Spandau" }, { line: "135", dir: "Am Omnibushof" }], [{ line: "638", dir: "Rathaus Spandau" }], [{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }, { line: "M49", dir: "Haus des Rundfunks" }], [{ line: "X49", dir: "Wilmersdorfer Str" }], [{ line: "135", dir: "Alt-Kladow" }, { line: "135", dir: "Landstadt Gatow" }, { line: "135", dir: "Hottengrund" }], [{ line: "638", dir: "Hauptbahnhof" }, { line: "638", dir: "Campus Jungfernsee" }], [{ line: "338", dir: "Havelpark" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }]]];
          break;
      }
    });
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
              if (array[i].line.name == filterSet[j].line && array[i].direction.includes(filterSet[j].dir)) {
                identifier = true;
                break;
              }
            } else if (filterSet[j].line != null) {
              if (array[i].line.name == filterSet[j].line) {
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
            const mean = this.getMean(line);
            const target = array[i].direction;
            const row = document.createElement('div');
            row.className = "row";
            row.innerHTML = `
            <div class="planTime">${planTime}</div>
            <div class="realTime">${realTime}</div>
            <div class="delay">${delay}</div>
            <div class="transport">${mean}</div>
            <div class="line">${line}</div>
            <div class="direction">${target}</div>
            `;
            this.container.appendChild(row);
          }
        }
      });
    }
  }
  get filter() {
    return this._filter;
  }
  set filter(newFilter) {
    this._filter = newFilter;
  }
  getData() {
    const url = `https://1.bvg.transport.rest/stations/${this.stop}/departures?duration=60&includeRelatedStations=${this.neighboring}`;
    fetch(url)
      .then(response => {
        return response.json();
      }).then(data => {
        this.evalData(data);
      }).catch(function (err) {
        console.log(err);
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
  get neighboring() {
    return this._neighboring;
  }
  set neighboring(newValue) {
    this._neighboring = newValue;
  }
  get stop() {
    return this._stop;
  }
  set stop(newStop) {
    this._stop = newStop;
  }
}

const jov = new Station("#JOV", 900000160541, true, [[{ line: "240", dir: "Storkower" }], [{ line: "N50", dir: "Hugenottenplatz" }, { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "N50", dir: "Pankow" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }], [{ line: "N50", dir: "Tierpark" }, { line: "N50", dir: "Betriebshof Lichtenberg" }]]);
const bae = new Station("#Bae", 900000160509, false, [[{ line: "M8", dir: "Hauptbahnhof" }, { line: "M8", dir: "Petersburger" }], [{ line: "M5", dir: "Petersburger" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M8", dir: "Ahrensfelde/Stadtgrenze" }, { line: "M8", dir: "Betriebshof Marzahn" }], [{ line: "21", dir: "Gudrunstr" }]]);
const moe = new Station("#Moe", 900000160014, true, [[{ line: "M13", dir: "Warschauer" }, { line: "M13", dir: "Frankfurter" }], [{ line: "16", dir: "Frankfurter" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Degnerstr" }, { line: "M13", dir: "Betriebshof Lichtenberg" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "21", dir: "Gudrunstr" }]]);
const bsto = new Station("#BSTO", 900000110012, true, [[{ line: "S41", dir: null }], [{ line: "S8", dir: "Grünau" }, { line: "S8", dir: "Zeuthen" }], [{ line: "S85", dir: "Schöneweide" }, { line: "S85", dir: "Grünau" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }], [{ line: "S85", dir: "Pankow" }], [{ line: "156", dir: "Stadion Buschallee" }, { line: "156", dir: "Große Seestr" }, { line: "156", dir: "Pasedagplatz" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }]]);
const bmn = new Station("#BMN", 900000024106, false, [[{ line: "S41", dir: null }], [{ line: "S46", dir: "Westend" }, { line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }, { line: "M49", dir: "Gatower Str" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }, { line: "X34", dir: "Gatower Str" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }, { line: "X49", dir: "Gatower Str" }], [{ line: "139", dir: "Werderstr" }], [{ line: "218", dir: "Pfaueninsel" }], [{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer" }], [{ line: "X49", dir: "Wilmersdorfer" }]]);
const gat = new Station("#Gat", 900000032106, true, [[{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }, { line: "M49", dir: "Haus des Rundfunks" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer Str" }], [{ line: "X49", dir: "Wilmersdorfer" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }], [{ line: "134", dir: "Hottengrund" }, { line: "134", dir: "Alt-Gatow" }, { line: "134", dir: "Alt-Kladow" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }], [{ line: "134", dir: "Wasserwerk Spandau" }, { line: "134", dir: "Kisseln" }, { line: "134", dir: "Rathaus Spandau" }], [{ line: "136", dir: "Aalemannufer" }, { line: "136", dir: "Hennigsdorf" }, { line: "136", dir: "Werderstr" }, { line: "136", dir: "Rathaus Spandau" }], [{ line: "236", dir: "Haselhorst" }, { line: "236", dir: "Rathaus Spandau" }], [{ line: "136", dir: "Am Omnibushof" }], [{ line: "236", dir: "Am Omnibushof" }]]);
const wil = new Station("#Wil", 900000032102, true, [[{ line: "135", dir: "Rathaus Spandau" }, { line: "135", dir: "Am Omnibushof" }], [{ line: "638", dir: "Rathaus Spandau" }], [{ line: "135", dir: "Alt-Kladow" }, { line: "135", dir: "Landstadt Gatow" }, { line: "135", dir: "Hottengrund" }], [{ line: "638", dir: "Hauptbahnhof" }, { line: "638", dir: "Campus Jungfernsee" }], [{ line: "338", dir: "Havelpark" }]]);