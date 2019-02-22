const url = 'https://1.bvg.transport.rest/stations/900000160541/departures?direction=900000160014&duration=60';
fetch(url)
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(function (err) {
    console.log(`Something went wrong: ${err}`);
  });