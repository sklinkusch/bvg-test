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

const jov = new Station_nofilter(["#JOVStorkresults", "#JOVObfresults"], 900000160541, [900000160014, 900000160529]);
const bae = new Station_nofilter(["#BaeRoeresults", "#BaeHerresults"], 900000160509, [900000160710, 900000160518]);
const moe = new Station_nofilter(["#MoeRoeresults", "#MoeLoeresults"], 900000160014, [900000160010, 900000160017]);
const bsto = new Station_filter(["#BSTO_BFA", "#BSTO_BLST", "#BSTO_240"], 900000110012, [900000120001, 900000110004, 900000160014], [["S41", "S8", "S85"], ["S42", "S8", "S85"], []]);
const bmn = new Station_filter(["#BMN_BWES", "#BMN_BWKRR", "#BMN_Zoo", "#BMN_Spa"], 900000024106, [900000026207, 900000024102, 900000024104, 900000032402], [["S41", "S46"], ["S42", "S46"], [], []]);
const gat = new Station_nofilter(["#Gat_BHST", "#Gat_Kla", "#Gat_Sta", "#Gat_Spa", "#Gat_Pic"], 900000032106, [900000026105, 900000032251, 900000032102, 900000032104, 900000032451]);
const wil = new Station_nofilter(["#Wil_Spa", "#Wil_Kla", "#Wil_Pdm", "#Wil_See"], 900000032102, [900000032104, 900000039101, 900000220301, 900000220347]);