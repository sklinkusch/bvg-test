function getData(station, direction, container, ...filterValues) {
  const url = `https://1.bvg.transport.rest/stations/${station}/departures?direction=${direction}&duration=60`;
  fetch(url)
    .then(response => {
      return response.json();
    }).then(data => {
      if (filterValues) {
        const filteredData = filterArray(data, filterValues);
        DisplayData(filteredData, container);
      } else {
        DisplayData(data, container);
      }
    }).catch(function (err) {
      console.log(`Something went wrong: ${err}`);
    });
}

function DisplayData(data, container) {
  console.log(data);
  const containerTag = document.querySelector(container);
  if (data) {
    const stopName = data[0].stop.name;
    const directionName = data[0].direction;
    const header = `<h2>Abfahrten ab ${stopName}</h2>`;
    const subheader = `<h3>Richtung ${directionName}</h3>`;
    const dataString = data.map(route => {
      let realtime, delay, plantime;
      if (route.when != null && route.delay != null) {
        realtime = route.when.substr(11, 5);
        delay = Math.floor(route.delay / 60);
        plantime = getPlanTime(realtime, delay);
      } else if (route.when != null) {
        realtime = route.when.substr(11, 5);
        delay = "?";
        plantime = realtime;
      } else {
        realtime = "Ausfall";
        delay = "X";
        plantime = route.formerScheduledWhen.substr(11, 5);
      }
      /*const realtime = route.when != null ? route.when.substr(11, 5) : "Ausfall";
      const delay = route.delay != null ? Math.floor(route.delay / 60) : "X";
      const plantime = route.when != null && route.delay != null ? getPlanTime(realtime, delay) : route.formerScheduledWhen.substr(11, 5);*/
      const line = route.line.name;
      const target = route.direction;
      return `
      <div class="row">
      <div class="planTime">${plantime}</div>
      <div class="realTime">${realtime}</div>
      <div class="delay">${delay}</div>
      <div class="line">${line}</div>
      <div class="target">${target}</div>
      </div>`
    }).join("");
    const html = header + subheader + dataString;
    containerTag.innerHTML = html;
  }
}

function getPlanTime(realtime, delay) {
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

function filterArray(array, filterValues) {
  const filtered = array.filter(route => {
    let identifier = false;
    filterValues.forEach(filterValue => {
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

getData(900000160541, 900000160014, "#JOVStorkresults", []);
getData(900000160541, 900000160529, "#JOVObfresults", []);
getData(900000160509, 900000160710, "#BaeRoeresults", []);
getData(900000160509, 900000160518, "#BaeHerresults", []);
getData(900000160014, 900000160010, "#MoeRoeresults", []);
getData(900000160014, 900000160017, "#MoeLoeresults", []);
getData(900000110012, 900000120001, "#BSTO_BFA", "S41", "Zeuthen", "Grünau", "Ostkreuz", "Schöneweide");
getData(900000110012, 900000110004, "#BSTO_BLST", "S42", "Birkenwerder", "Blankenburg", "Pankow", "Greifswalder");