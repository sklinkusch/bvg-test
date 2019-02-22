const url = 'https://1.bvg.transport.rest/stations/900000160541/departures?direction=900000160014&duration=60';
fetch(url)
  .then(response => {
    return response.json();
  }).then(data => {
    DisplayData(data, "#results");
  }).catch(function (err) {
    console.log(`Something went wrong: ${err}`);
  });

function DisplayData(data, container) {
  const containerTag = document.querySelector(container);
  if (data) {
    const stopName = data[0].stop.name;
    const header = `<h1>Abfahrten ab ${stopName}</h1>`;
    const dataString = data.map(route => {
      const time = route.when.substr(11, 5);
      const delay = Math.floor(route.delay / 60);
      const line = route.line.name;
      const target = route.direction;
      return `
      <div class="row">
      <div class="realTime">${time}</div>
      <div class="delay">${delay}</div>
      <div class="line">${line}</div>
      <div class="target">${target}</div>
      </div>`
    }).join("");
    const html = header + dataString;
    containerTag.innerHTML = html;
  }
}