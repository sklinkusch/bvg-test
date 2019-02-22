function getData(station, direction, container) {
  const url = `https://1.bvg.transport.rest/stations/${station}/departures?direction=${direction}&duration=60`;
  fetch(url)
    .then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      console.log(data);
      DisplayData(data, container);
    }).catch(function (err) {
      console.log(`Something went wrong: ${err}`);
    });
}

function DisplayData(data, container) {
  const containerTag = document.querySelector(container);
  if (data) {
    const stopName = data[0].stop.name;
    const directionName = data[0].direction;
    const header = `<h2>Abfahrten ab ${stopName}</h2>`;
    const subheader = `<h3>Richtung ${directionName}</h3>`;
    const dataString = data.map(route => {
      const realtime = route.when.substr(11, 5);
      const delay = Math.floor(route.delay / 60);
      const plantime = getPlanTime(realtime, delay);
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

getData(900000160541, 900000160014, "#JOVStorkresults");
getData(900000160541, 900000160529, "#JOVObfresults");
getData(900000160509, 900000160710, "#BaeRoeresults");
getData(900000160509, 900000160518, "#BaeHerresults");
getData(900000160014, 900000160010, "#MoeRoeresults");
getData(900000160014, 900000160017, "#MoeLoeresults");