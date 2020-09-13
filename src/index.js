const unsortedStopObject = require("vbb-stations/full.json")
import train from "./images/express.svg"
import regional from "./images/regional.svg"
import suburban from "./images/suburban.svg"
import subway from "./images/subway.svg"
import metrotram from "./images/metro-tram.svg"
import tram from "./images/tram.svg"
import metrobus from "./images/metro-bus.svg"
import expressbus from "./images/express-bus.svg"
import specialbus from "./images/special-bus.svg"
import nightbus from "./images/night-bus.svg"
import ferry from "./images/ferry.svg"

class Station {
  constructor() {
    this.container = document.querySelector("#container")
    this.getStops()
    this.getDirection()
    this._stop = this.direction["900000100011"]
    this.getDropdown("")
    this.getData()
    this.addEventListeners()
  }
  addEventListeners() {
    const filter = document.querySelector("#filter")
    const dropdown = document.querySelector("#dropdown")
    const refresh = document.querySelector("#refresh")
    filter.addEventListener("input", (e) => {
      const filterValue = e.target.value
      this.getDropdown(filterValue)
    })
    dropdown.addEventListener("input", (e) => {
      const selectValue = e.target.value
      this._stop = this.direction[selectValue]
      this.getData()
      this.getDropdown("")
      filter.value = ""
    })
    refresh.addEventListener("click", () => {
      this.getData()
    })
  }
  checkBarrier(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].code == "bf") {
        return `<span class="fas fa-wheelchair" title="barrier-free">&nbsp;</span>`
      }
    }
    return ""
  }
  checkBike(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].code == "FB") {
        return `<span class="fas fa-bicycle" title="You can take your bike with you.">&nbsp;</span>`
      }
    }
    return ""
  }
  checkState(array) {
    const stateText =
      array
        .filter((a) => a.type === "status")
        .map((a) => a.text)
        .join("\n") || ""
    if (stateText !== "") {
      return `<span class="fas fa-times" title="${stateText}">&nbsp;</span>`
    }
    return ""
  }
  checkWarning(array) {
    const warnArray = array.filter((a) => a.type === "warning")
    const arrayWithoutLinks = warnArray.map((a) => ({
      summary: /<a.*href=".*".*>.*<\/a>/.test(a.summary)
        ? this.replaceLinks(a.summary)
        : a.summary,
      text: /<a.*href=".*".*>.*<\/a>/.test(a.text)
        ? this.replaceLinks(a.text)
        : a.text,
      validFrom: a.validFrom,
      validUntil: a.validUntil,
    }))
    const warnText =
      arrayWithoutLinks
        .map((a) => `${a.validFrom} - ${a.validUntil}: ${a.summary}, ${a.text}`)
        .join("\n") || ""
    if (warnText !== "") {
      return `<span class="fas fa-exclamation-triangle" title="${warnText}">&nbsp;</span>`
    }
    return ""
  }
  evalData(array) {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild)
    }
    if (array.length > 0) {
      const sortedArray = array.sort((a, b) => {
        if (a.stop.name.toLowerCase() < b.stop.name.toLowerCase()) {
          return -1
        } else if (b.stop.name.toLowerCase() < a.stop.name.toLowerCase()) {
          return +1
        } else {
          const sortingArray = [
            "express",
            "regional",
            "suburban",
            "subway",
            "tram",
            "bus",
            "ferry",
          ]
          if (
            sortingArray.indexOf(a.line.product) <
            sortingArray.indexOf(b.line.product)
          ) {
            return -1
          } else if (
            sortingArray.indexOf(b.line.product) <
            sortingArray.indexOf(a.line.product)
          ) {
            return +1
          } else {
            return 0
          }
        }
      })
      let splitArray = []
      let lowestValue = 0
      while (lowestValue < sortedArray.length) {
        let lowestResult = sortedArray[lowestValue].stop.name
        let highestValue
        let filtered
        for (let i = lowestValue; i < sortedArray.length; i++) {
          if (sortedArray[i].stop.name !== lowestResult) {
            highestValue = i
            break
          }
        }
        filtered = sortedArray.slice(lowestValue, highestValue)
        splitArray.push(filtered)
        lowestValue = highestValue
      }
      splitArray.forEach((singleStop) => {
        const header = document.createElement("h2")
        header.innerHTML = `Abfahrten ab ${singleStop[0].stop.name}`
        this.container.appendChild(header)

        singleStop.forEach((trip) => {
          let planTime, realTime, delay
          if (trip.when != null && trip.delay != null) {
            realTime = trip.when.substr(11, 5)
            delay = Math.floor(trip.delay / 60)
            planTime = this.getPlanTime(realTime, delay)
          } else if (trip.when != null) {
            planTime = trip.when.substr(11, 5)
            delay = "?"
            realTime = ""
          } else {
            realTime = "Ausfall"
            delay = "X"
            planTime = trip.formerScheduledWhen.substr(11, 5)
          }
          const line = trip.line.name
          const mean = this.getMean(trip.line)
          const target = trip.direction
          const remarks = trip.remarks
          const track = trip.platform || ""
          const barrier = this.checkBarrier(remarks)
          const bike = this.checkBike(remarks)
          const warning = this.checkWarning(remarks)
          const state = this.checkState(remarks)
          const row = document.createElement("div")
          row.className = "row"
          row.innerHTML = `
            <div class="planTime">${planTime}</div>
            <div class="realTime">${realTime}</div>
            <div class="delay">${delay}</div>
            <div class="transport">${mean}</div>
            <div class="line">${line}</div>
            <div class="direction">${target}</div>
            <div class="track">${track}</div>
            <div class="barrier">${barrier}</div>
            <div class="bike">${bike}</div>
            <div class="warning">${warning}</div>
            <div class="status">${state}</div>
          `
          this.container.appendChild(row)
        })
      })
    }
  }
  getData() {
    const url = `https://sklinkusch-vbbmicro.now.sh/?station=${this._stop.id}&duration=20`
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.evalData(data)
      })
      .catch((err) => console.log(err))
  }
  getDirection() {
    const stopsRawBerlin = this.allStops
    const stopsObjectBerlin = stopsRawBerlin.reduce((acc, stop) => {
      const newObject = {}
      newObject[stop.id] = stop
      return Object.assign(acc, newObject)
    }, {})
    this.direction = stopsObjectBerlin
  }
  getDropdown(filterValue) {
    if (this._stop) {
      const remainingStops = this.allStops.filter(
        (stop) => stop.id !== this._stop.id
      )
      const filteredStops =
        filterValue !== ""
          ? remainingStops.filter((stop) =>
              stop.name.toLowerCase().includes(filterValue.toLowerCase())
            )
          : remainingStops
      const sortedRemainingStops = filteredStops.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (b.name < a.name) {
          return +1
        } else {
          return 0
        }
      })
      const dropDownStops = [this._stop, ...sortedRemainingStops]
      document.getElementById("dropdown").innerHTML = dropDownStops
        .map((stop) => `<option value="${stop.id}">${stop.name}</option>`)
        .join("")
    } else {
      document.getElementById("dropdown").innerHTML = stopsRawBerlin
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1
          } else if (b.name < a.name) {
            return +1
          } else {
            return 0
          }
        })
        .map((stop) => `<option value="${stop.id}">${stop.name}</option>`)
        .join("")
    }
  }
  getMean(line) {
    const { express, metro, name, night, product } = line
    switch (product) {
      case "express":
        return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/express.svg" alt="express" /></div>`
      case "regional":
        return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/regional.svg" alt="regional"/></div>`
      case "suburban":
        return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/suburban.svg" alt="suburban railway (S-Bahn)"/></div>`
      case "subway":
        return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/subway.svg" alt="subway (U-Bahn)"/></div>`
      case "tram":
        if (metro) {
          return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/metro-tram.svg" alt="metro tram"/></div>`
        } else {
          return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/tram.svg" alt="tramway"/></div>`
        }
      case "bus":
        if (express) {
          return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/express-bus.svg" alt="express bus"/></div>`
        } else if (metro) {
          return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/metro-bus.svg" alt="metro bus"/></div>`
        } else if (night) {
          return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/bus.svg" alt="night bus"/></div>`
        } else if (name === "A05") {
          return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/special-bus.svg" alt="special-bus"/></div>`
        } else {
          return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/bus.svg" alt="bus"/></div>`
        }
      case "ferry":
        return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/ferry.svg" alt="ferry"/></div>`
      default:
        return `<div class="mean"><img src="https://raw.githubusercontent.com/sklinkusch/bvg-test/master/dist/assets/fonts/bus.svg" alt="bus"/></div>`
    }
  }
  getPlanTime(realtime, delay) {
    let hours = Number(realtime.substr(0, 2))
    let minutes = Number(realtime.substr(3, 2))
    minutes -= delay
    if (minutes < 0) {
      minutes += 60
      hours -= 1
    }
    if (minutes > 59) {
      minutes -= 60
      hours += 1
    }
    if (hours < 0) {
      hours += 24
    }
    if (hours > 23) {
      hours -= 24
    }
    let hourString = hours < 10 ? `0${hours}` : `${hours}`
    let minuteString = minutes < 10 ? `0${minutes}` : `${minutes}`
    return `${hourString}:${minuteString}`
  }
  replaceLinks(string) {
    const pattern = /<a.*href=\"(.*)\".*>(.*)<\/a>/g
    const finalString = string.replace(pattern, "$2 ($1)")
    return finalString
  }
  getStops() {
    unsortedStopObject["900000470117"].name = "Cottbus, Beuchstr."
    unsortedStopObject["900000210600"].name = "Wustermark, Brunnenplatz"
    const stopsUnsorted = Object.keys(unsortedStopObject).map((key) => {
      return {
        id: unsortedStopObject[key].id,
        name: unsortedStopObject[key].name,
      }
    })
    // Berlin
    const stopsFilterBerlin = stopsUnsorted.filter(
      (stop) =>
        stop.name.includes("(Berlin)") ||
        stop.name.includes("(Bln)") ||
        stop.name.startsWith("Berlin,") ||
        stop.name.includes("Berlin Hauptbahnhof") ||
        stop.name === "U Stadtmitte/Krausenstr." ||
        stop.name === "U Alexanderplatz [Bus]" ||
        stop.name === "S Rahnsdorf [Tram]"
    )
    const stopsRawBerlin = stopsFilterBerlin.map((stop) => {
      if (stop.name.startsWith("Berlin,")) {
        return { id: stop.id, name: stop.name.substr(8) }
      } else if (stop.name.endsWith("(Berlin)")) {
        return {
          id: stop.id,
          name: stop.name.substring(0, stop.name.length - 9),
        }
      } else if (stop.name.includes("(Bln)")) {
        const newName = stop.name.replace("(Bln)", "")
        return { id: stop.id, name: newName }
      } else if (stop.name.includes("(Berlin)")) {
        const newName = stop.name.replace("(Bln)", "")
        return { id: stop.id, name: newName }
      }
      return { id: stop.id, name: stop.name }
    })
    this.allStops = stopsRawBerlin
  }
  get stop() {
    return this._stop
  }
  set stop(newStop) {
    this._stop = newStop
  }
}
const jov = new Station()
