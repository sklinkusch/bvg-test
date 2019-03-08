/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Station =
/*#__PURE__*/
function () {
  function Station(station, filterValues) {
    _classCallCheck(this, Station);

    this.addLines();
    this.container = document.querySelector("#container");
    this._stop = station;
    this._neighboring = false;
    this._filter = filterValues;
    this.getData();
    this.addEventListeners();
  }

  _createClass(Station, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      var dropdown = document.querySelector("#dropdown");
      dropdown.addEventListener("input", function (e) {
        while (_this.container.firstChild) {
          _this.container.removeChild(_this.container.firstChild);
        }

        var selectValue = e.target.value;

        switch (selectValue) {
          case "BBEU":
            _this.stop = [900000020202];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI, _this.S46.HO, _this.S46.HAL, _this.S46.WKRR, _this.S46.MN, _this.S46.WES, _this.S46.JUN], [{
              line: "TXL",
              dir: "Flughafen Tegel"
            }], [{
              line: "106",
              dir: "Seestr"
            }], [{
              line: "123",
              dir: "Goebelplatz"
            }, {
              line: "123",
              dir: "Mäckeritzwiesen"
            }], [{
              line: "N26",
              dir: "Seestr"
            }], [{
              line: "TXL",
              dir: "Alexanderplatz"
            }, {
              line: "TXL",
              dir: "Hauptbahnhof"
            }], [{
              line: "106",
              dir: "Lindenhof"
            }, {
              line: "106",
              dir: "Südkreuz"
            }, {
              line: "106",
              dir: "Kurfürstenstr"
            }], [{
              line: "123",
              dir: "Hauptbahnhof"
            }], [{
              line: "N26",
              dir: "Zoologischer Garten"
            }]]];
            break;

          case "BBUP":
            _this.stop = [900000044202];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL, _this.S46.HO, _this.S46.HEI], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP], [_this.U9.Olo, _this.U9.Np, _this.U9.Lpu, _this.U9.Am, _this.U9.WF, _this.U9.Bi, _this.U9.Tm, _this.U9.Ha, _this.U9.Zu, _this.U9.Kfu, _this.U9.Snu, _this.U9.Gt, _this.U9.Beo], [_this.U9.Rzu, _this.U9.Sl, _this.U9.Wsg, _this.U9.Fw], [{
              line: "248",
              dir: "Warschauer Str"
            }, {
              line: "248",
              dir: "Ostbahnhof"
            }, {
              line: "248",
              dir: "Alexanderplatz"
            }, {
              line: "248",
              dir: "Südkreuz"
            }], [{
              line: "N9",
              dir: "Osloer Str"
            }, {
              line: "N9",
              dir: "Zoologischer Garten"
            }], [{
              line: "248",
              dir: "Breitenbachplatz"
            }], [{
              line: "N9",
              dir: "Steglitz"
            }]]];
            break;

          case "BFA":
            _this.stop = [900000120001];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW, _this.S8.PWA, _this.S8.TP, _this.S8.OK], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S85.SW, _this.S85.BMW, _this.S85.PWA, _this.S85.TP, _this.S85.OK], [_this.S42], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS, _this.S8.SAL, _this.S8.PLA, _this.S8.GSS, _this.S8.LST, _this.S8.STO], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS, _this.S85.SAL, _this.S85.PLA, _this.S85.GSS, _this.S85.LST, _this.S85.STO], [_this.U5.Hö, _this.U5.LL, _this.U5.HD, _this.U5.C, _this.U5.GK, _this.U5.KL, _this.U5.Wh, _this.U5.E, _this.U5.Bü, _this.U5.Tk, _this.U5.Fi, _this.U5.Li, _this.U5.Md], [_this.U5.Al, _this.U5.Si, _this.U5.Sr, _this.U5.WR, _this.U5.FT, _this.U5.Sa], [{
              line: "M13",
              dir: "Virchow-Klinikum"
            }, {
              line: "M13",
              dir: "Björnsonstr"
            }, {
              line: "M13",
              dir: "Betriebshof Indira-Gandhi-Str"
            }, {
              line: "M13",
              dir: "Degnerstr"
            }], [{
              line: "16",
              dir: "Ahrensfelde/Stadtgrenze"
            }], [{
              line: "M13",
              dir: "S Warschauer Str"
            }, {
              line: "M13",
              dir: "Scharnweberstr./Weichselstr."
            }], [{
              line: "16",
              dir: "Scharnweberstr./Weichselstr."
            }], [{
              line: "N5",
              dir: "Riesaer Str"
            }, {
              line: "N5",
              dir: "Wuhletal"
            }], [{
              line: "N5",
              dir: "Hackescher Markt"
            }]]];
            break;

          case "BGB":
            _this.stop = [900000007102];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "RE3",
              dir: "Schwedt"
            }, {
              line: "RE3",
              dir: "Stralsund"
            }, {
              line: "RE3",
              dir: "Prenzlau"
            }, {
              line: "RE3",
              dir: "Angermünde"
            }, {
              line: "RE3",
              dir: "Eberswalde"
            }], [{
              line: "RE5",
              dir: "Rostock"
            }, {
              line: "RE5",
              dir: "Stralsund"
            }], [{
              line: "RB54",
              dir: "Rheinsberg"
            }], [{
              line: "RE66",
              dir: null
            }], [{
              line: "RB27",
              dir: null
            }], [{
              line: "RE3",
              dir: "Wittenberg"
            }, {
              line: "RE3",
              dir: "Falkenberg"
            }, {
              line: "RE3",
              dir: "Halle"
            }], [{
              line: "RE5",
              dir: "Elsterwerda"
            }, {
              line: "RE5",
              dir: "Wünsdorf"
            }], [{
              line: "RE6",
              dir: null
            }], [{
              line: "RB54",
              dir: "Lichtenberg"
            }], [_this.S1.ORB, _this.S1.LEN, _this.S1.BOR, _this.S1.BIW, _this.S1.HN, _this.S1.FOH, _this.S1.HED, _this.S1.WAI, _this.S1.WIN, _this.S1.WM, _this.S1.SNH, _this.S1.WOK, _this.S1.BOS], [_this.S2.BER, _this.S2.BRF, _this.S2.ZEP, _this.S2.RGT, _this.S2.BU, _this.S2.KRW, _this.S2.BLB, _this.S2.PHD, _this.S2.PKW, _this.S2.BOS], [_this.S25.HD, _this.S25.HLS, _this.S25.SZF, _this.S25.TG, _this.S25.EBD, _this.S25.KBO, _this.S25.ARF, _this.S25.SNH, _this.S25.WOK, _this.S25.BOS], [_this.S26.WAI, _this.S26.WIN, _this.S26.WM, _this.S26.SNH, _this.S26.WOK, _this.S26.BOS], [_this.S41], [_this.S1.PDH, _this.S1.BAB, _this.S1.GRI, _this.S1.WSS, _this.S1.NIW, _this.S1.SLS, _this.S1.MEX, _this.S1.ZD, _this.S1.SDG, _this.S1.LWE, _this.S1.BGT, _this.S1.RST, _this.S1.FB, _this.S1.FRU, _this.S1.SGV, _this.S1.JLB, _this.S1.YOR, _this.S1.AHU, _this.S1.POP, _this.S1.TOR, _this.S1.FSTT, _this.S1.ORS, _this.S1.NB, _this.S1.HUM], [_this.S2.BFD, _this.S2.MAH, _this.S2.LRD, _this.S2.SC, _this.S2.BCH, _this.S2.MF, _this.S2.ATS, _this.S2.PRS, _this.S2.SKV, _this.S2.YOR, _this.S2.AHU, _this.S2.POP, _this.S2.TOR, _this.S2.FSTT, _this.S2.ORS, _this.S2.NB, _this.S2.HUM], [_this.S25.TLS, _this.S25.LIS, _this.S25.OSS, _this.S25.LIO, _this.S25.LAK, _this.S25.SDE, _this.S25.PRS, _this.S25.SKV, _this.S25.YOR, _this.S25.AHU, _this.S25.POP, _this.S25.TOR, _this.S25.FSTT, _this.S25.ORS, _this.S25.NB, _this.S25.HUM], [_this.S26.TLS, _this.S26.LIS, _this.S26.OSS, _this.S26.LIO, _this.S26.LAK, _this.S26.SDE, _this.S26.PRS, _this.S26.SKV, _this.S26.YOR, _this.S26.AHU, _this.S26.POP, _this.S26.TOR, _this.S26.FSTT, _this.S26.ORS, _this.S26.NB, _this.S26.HUM], [_this.S42], [_this.S46.NULL], [_this.U8.WIU, _this.U8.RR, _this.U8.KB, _this.U8.LD, _this.U8.PB, _this.U8.RE, _this.U8.FN, _this.U8.Olu, _this.U8.Pk], [_this.U8.HMS, _this.U8.L, _this.U8.Bo, _this.U8.Hpo, _this.U8.ST, _this.U8.Kbu, _this.U8.Mr, _this.U8.He, _this.U8.Jb, _this.U8.Ap, _this.U8.W, _this.U8.Ro, _this.U8.B, _this.U8.Vo], [{
              line: "247",
              dir: "Leopoldplatz"
            }], [{
              line: "N8",
              dir: "Wilhelmsruher Damm"
            }, {
              line: "N8",
              dir: "Osloer Str"
            }], [{
              line: "247",
              dir: "Nordbahnhof"
            }, {
              line: "247",
              dir: "Bernauer Str"
            }], [{
              line: "N8",
              dir: "Hermannstr"
            }, {
              line: "N8",
              dir: "Hermannplatz"
            }]]];
            break;

          case "BGSS":
            _this.stop = [900000110003];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW, _this.S8.PWA, _this.S8.TP, _this.S8.OK, _this.S8.FA, _this.S8.STO, _this.S8.LST], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S85.SW, _this.S85.BMW, _this.S85.PWA, _this.S85.TP, _this.S85.OK, _this.S85.FA, _this.S85.STO, _this.S85.LST], [_this.S42], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS, _this.S8.SAL, _this.S8.PLA], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS, _this.S85.SAL, _this.S85.PLA], [{
              line: "M4",
              dir: "Falkenberg"
            }, {
              line: "M4",
              dir: "Zingster Str"
            }, {
              line: "M4",
              dir: "Sulzfelder Str"
            }], [{
              line: "M4",
              dir: "Hackescher Markt"
            }]]];
            break;

          case "BHAL":
            _this.stop = [900000040101];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI, _this.S46.HO], [{
              line: "M19",
              dir: "Grunewald"
            }, {
              line: "M19",
              dir: "Hagenplatz"
            }, {
              line: "M19",
              dir: "Rathenauplatz"
            }], [{
              line: "M29",
              dir: "Roseneck"
            }, {
              line: "M29",
              dir: "Rathenauplatz"
            }], [{
              line: "X10",
              dir: "Teltow"
            }, {
              line: "X10",
              dir: "Andr&#233;ezeile"
            }], [{
              line: "104",
              dir: "Brixplatz"
            }, {
              line: "104",
              dir: "Theodor-Heuss-Platz"
            }, {
              line: "104",
              dir: "Rathenauplatz"
            }], [{
              line: "N42",
              dir: "Theodor-Heuss-Platz"
            }], [{
              line: "M19",
              dir: "Mehringdamm"
            }], [{
              line: "M29",
              dir: "Hermannplatz"
            }], [{
              line: "X10",
              dir: "Zoologischer Garten"
            }], [{
              line: "104",
              dir: "Tunnelstr"
            }, {
              line: "104",
              dir: "Treptower Park"
            }], [{
              line: "N42",
              dir: "Alexanderplatz"
            }]]];
            break;

          case "BHEI":
            _this.stop = [900000045102];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL, _this.S46.HO], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP], [_this.U3.WA, _this.U3.S, _this.U3.Gr, _this.U3.Kbo, _this.U3.Pr, _this.U3.Ho, _this.U3.Mo, _this.U3.Go, _this.U3.Kus, _this.U3.N, _this.U3.Wt, _this.U3.Au, _this.U3.Sno, _this.U3.Hz, _this.U3.Fpo], [_this.U3.K, _this.U3.Ot, _this.U3.Os, _this.U3.T, _this.U3.Dd, _this.U3.Po, _this.U3.Bt, _this.U3.Rd], [{
              line: "249",
              dir: "Roseneck"
            }], [{
              line: "310",
              dir: "Wilmersdorfer Str"
            }], [{
              line: "N3",
              dir: "Mexikoplatz"
            }], [{
              line: "249",
              dir: "Zoologischer Garten"
            }], [{
              line: "310",
              dir: "Blissestr"
            }], [{
              line: "N3",
              dir: "Wittenbergplatz"
            }]]];
            break;

          case "BHER":
            _this.stop = [900000079221, 900000079220];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S45.SKR, _this.S45.THF], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL, _this.S46.HO, _this.S46.HEI, _this.S46.BUP, _this.S46.IP, _this.S46.SGR, _this.S46.SKR, _this.S46.THF], [_this.S42], [_this.S45.FLH, _this.S45.GBA, _this.S45.AGL, _this.S45.GAS, _this.S45.ADL, _this.S45.SCF, _this.S45.SW, _this.S45.BMW, _this.S45.KHD, _this.S45.NK], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK], [_this.S47.NULL], [_this.U8.NULL], [{
              line: "377",
              dir: "Plänterwald"
            }], [{
              line: "N8",
              dir: null
            }], [{
              line: "N79",
              dir: "Plänterwald"
            }], [{
              line: "M44",
              dir: null
            }], [{
              line: "246",
              dir: null
            }], [{
              line: "277",
              dir: null
            }], [{
              line: "370",
              dir: "Neuköllnische Brücke"
            }], [{
              line: "377",
              dir: "Kranoldstr"
            }], [{
              line: "N79",
              dir: "Alt-Mariendorf"
            }]], [[{
              line: "246",
              dir: "Friedrich-Wilhelm-Platz"
            }, {
              line: "246",
              dir: "Alt-Tempelhof"
            }], [{
              line: "370",
              dir: "Neuköllnische Brücke"
            }]]];
            break;

          case "BHO":
            _this.stop = [900000044101];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI], [{
              line: "115",
              dir: "Spanische Allee/Potsdamer Ch"
            }, {
              line: "115",
              dir: "Neuruppiner Str"
            }, {
              line: "115",
              dir: "Roseneck"
            }], [{
              line: "N3",
              dir: "Mexikoplatz"
            }], [{
              line: "N10",
              dir: "Sachtlebenstr"
            }], [{
              line: "115",
              dir: "Fehrbelliner Platz"
            }], [{
              line: "N3",
              dir: "Wittenbergplatz"
            }], [{
              line: "N10",
              dir: "Zoologischer Garten"
            }]]];
            break;

          case "BIP":
            _this.stop = [900000054105];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL, _this.S46.HO, _this.S46.HEI, _this.S46.BUP], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR], [{
              line: "U4",
              dir: null
            }], [{
              line: "M48",
              dir: "Alexanderplatz"
            }, {
              line: "M48",
              dir: "Mohrenstr"
            }], [{
              line: "M85",
              dir: "Hauptbahnhof"
            }, {
              line: "M85",
              dir: "Potsdamer Platz"
            }], [{
              line: "187",
              dir: "Turmstr"
            }, {
              line: "187",
              dir: "Kurfürstenstr"
            }], [{
              line: "248",
              dir: "Warschauer Str"
            }, {
              line: "248",
              dir: "Ostbahnhof"
            }, {
              line: "248",
              dir: "Alexanderplatz"
            }, {
              line: "248",
              dir: "Hallesches Tor"
            }, {
              line: "248",
              dir: "Südkreuz"
            }], [{
              line: "M48",
              dir: "Busseallee"
            }, {
              line: "M48",
              dir: "Zehlendorf Eiche"
            }, {
              line: "M48",
              dir: "Rathaus Steglitz"
            }], [{
              line: "M85",
              dir: "Lichterfelde Süd"
            }, {
              line: "M85",
              dir: "Rathaus Steglitz"
            }], [{
              line: "187",
              dir: "Halbauer Weg"
            }, {
              line: "187",
              dir: "Lankwitz Kirche"
            }, {
              line: "187",
              dir: "Insulaner"
            }], [{
              line: "248",
              dir: "Breitenbachplatz"
            }]]];
            break;

          case "BJUN":
            _this.stop = [900000020201, 900000020207];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "RE4",
              dir: "Stendal"
            }, {
              line: "RE4",
              dir: "Rathenow"
            }], [{
              line: "RE6",
              dir: "Wittenberge"
            }, {
              line: "RE6",
              dir: "Neuruppin"
            }], [{
              line: "RB10",
              dir: "Nauen"
            }], [{
              line: "RB13",
              dir: "Wustermark"
            }], [{
              line: "RE4",
              dir: "Jüterbog"
            }, {
              line: "RE4",
              dir: "Luckenwalde"
            }, {
              line: "RE4",
              dir: "Ludwigsfelde"
            }], [{
              line: "RE6",
              dir: "Gesundbrunnen"
            }], [{
              line: "RB10",
              dir: "Südkreuz"
            }], [_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI, _this.S46.HO, _this.S46.HAL, _this.S46.WKRR, _this.S46.MN, _this.S46.WES], [{
              line: "U7",
              dir: "Rudow"
            }], [{
              line: "U7",
              dir: "Rathaus Spandau"
            }], [{
              line: "M21",
              dir: "Uhlandstr"
            }], [{
              line: "M21",
              dir: "Goerdelersteg"
            }], [{
              line: "M27",
              dir: "Pankow"
            }], [{
              line: "X9",
              dir: "Zoologischer Garten"
            }], [{
              line: "N7",
              dir: "Schönefeld"
            }], [{
              line: "M27",
              dir: "Jungfernheide"
            }], [{
              line: "N7",
              dir: "Rathaus Spandau"
            }]], [[{
              line: "M27",
              dir: "Jungfernheide"
            }], [{
              line: "X9",
              dir: "Flughafen Tegel"
            }], [{
              line: "109",
              dir: "Flughafen Tegel"
            }], [{
              line: "N7",
              dir: "Rathaus Spandau"
            }], [{
              line: "109",
              dir: "Zoologischer Garten"
            }]]];
            break;

          case "BLST":
            _this.stop = [900000110004];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW, _this.S8.PWA, _this.S8.TP, _this.S8.OK, _this.S8.FA, _this.S8.STO], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S85.SW, _this.S85.BMW, _this.S85.PWA, _this.S85.TP, _this.S85.OK, _this.S85.FA, _this.S85.STO], [_this.S42], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS, _this.S8.SAL, _this.S8.PLA, _this.S8.GSS], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS, _this.S85.SAL, _this.S85.PLA, _this.S85.GSS], [{
              line: "M5",
              dir: "Hauptbahnhof"
            }, {
              line: "M5",
              dir: "Hackescher Markt"
            }, {
              line: "M5",
              dir: "Landsberger Allee/Petersburger Str"
            }], [{
              line: "M6",
              dir: "Hackescher Markt"
            }, {
              line: "M6",
              dir: "Landsberger Allee/Petersburger Str"
            }], [{
              line: "M8",
              dir: "Hauptbahnhof"
            }, {
              line: "M8",
              dir: "Landsberger Allee/Petersburger Str"
            }], [{
              line: "M5",
              dir: "Zingster Str"
            }], [{
              line: "M6",
              dir: "Riesaer Str"
            }, {
              line: "M6",
              dir: "Betriebshof Marzahn"
            }, {
              line: "M6",
              dir: "S Marzahn"
            }], [{
              line: "M8",
              dir: "Ahrensfelde/Stadtgrenze"
            }, {
              line: "M8",
              dir: "Betriebshof Marzahn"
            }], [{
              line: "156",
              dir: "Stadion Buschallee/Hansastr"
            }, {
              line: "156",
              dir: "Große Seestr."
            }, {
              line: "156",
              dir: "Pasedagplatz"
            }]]];
            break;

          case "BMN":
            _this.stop = [900000024106];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI, _this.S46.HO, _this.S46.HAL, _this.S46.WKRR], [{
              line: "M49",
              dir: "Nennhauser Damm"
            }, {
              line: "M49",
              dir: "Reimerweg"
            }, {
              line: "M49",
              dir: "Gatower Str"
            }], [{
              line: "X34",
              dir: "Hottengrund"
            }, {
              line: "X34",
              dir: "Gutsstr"
            }, {
              line: "X34",
              dir: "Gatower Str"
            }], [{
              line: "X49",
              dir: "Hahneberg"
            }, {
              line: "X49",
              dir: "Spektefeld"
            }, {
              line: "X49",
              dir: "Gatower Str"
            }], [{
              line: "139",
              dir: "Werderstr"
            }], [{
              line: "218",
              dir: "Pfaueninsel"
            }], [{
              line: "M49",
              dir: "Zoologischer Garten"
            }, {
              line: "M49",
              dir: "Savignyplatz"
            }, {
              line: "M49",
              dir: "Wilmersdorfer Str"
            }], [{
              line: "X34",
              dir: "Zoologischer Garten"
            }, {
              line: "X34",
              dir: "Savignyplatz"
            }, {
              line: "X34",
              dir: "Wilmersdorfer"
            }], [{
              line: "X49",
              dir: "Wilmersdorfer"
            }]]];
            break;

          case "BNK":
            _this.stop = [900000078201, 900000078272, 900000078273, 900000078271];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S45.SKR, _this.S45.THF, _this.S45.HER], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL, _this.S46.HO, _this.S46.HEI, _this.S46.BUP, _this.S46.IP, _this.S46.SGR, _this.S46.SKR, _this.S46.THF, _this.S46.HER], [_this.S47.HER], [_this.S42], [_this.S45.FLH, _this.S45.GBA, _this.S45.AGL, _this.S45.GAS, _this.S45.ADL, _this.S45.SCF, _this.S45.SW, _this.S45.BMW, _this.S45.KHD], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD], [_this.S47.SPF, _this.S47.OSP, _this.S47.SW, _this.S47.BMW, _this.S47.KHD]], [[{
              line: "U7",
              dir: "Rudow"
            }, {
              line: "U7",
              dir: "Britz-Süd"
            }], [{
              line: "U7",
              dir: "Rathaus Spandau"
            }, {
              line: "U7",
              dir: "Rohrdamm"
            }, {
              line: "U7",
              dir: "Richard-Wagner-Platz"
            }, {
              line: "U7",
              dir: "Fehrbelliner Platz"
            }, {
              line: "U7",
              dir: "Hermannplatz"
            }]], [[{
              line: "171",
              dir: "Schönefeld"
            }, {
              line: "171",
              dir: "Rudow"
            }], [{
              line: "N7",
              dir: "Schönefeld"
            }], [{
              line: "N79",
              dir: "Alt-Mariendorf"
            }], [{
              line: "171",
              dir: "Hermannplatz"
            }, {
              line: "171",
              dir: "Sonnenallee"
            }], [{
              line: "N7",
              dir: "Rathaus Spandau"
            }], [{
              line: "N79",
              dir: "Plänterwald"
            }]], [[{
              line: "171",
              dir: "Schönefeld"
            }, {
              line: "171",
              dir: "Rudow"
            }], [{
              line: "N7",
              dir: "Schönefeld"
            }], [{
              line: "370",
              dir: "Neuköllnische Brücke"
            }], [{
              line: "377",
              dir: "Plänterwald"
            }], [{
              line: "171",
              dir: "Hermannplatz"
            }, {
              line: "171",
              dir: "Sonnenallee"
            }], [{
              line: "N7",
              dir: "Rathaus Spandau"
            }], [{
              line: "370",
              dir: "Hermannstr"
            }], [{
              line: "377",
              dir: "Hermannstr"
            }]]];
            break;

          case "BOK":
            _this.stop = [900000120003];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "RE1",
              dir: "Cottbus"
            }, {
              line: "RE1",
              dir: "Eisenhüttenstadt"
            }, {
              line: "RE1",
              dir: "Frankfurt"
            }], [{
              line: "RE2",
              dir: "Cottbus"
            }], [{
              line: "RE7",
              dir: "Wünsdorf-Waldstadt"
            }, {
              line: "RE7",
              dir: "Schönefeld"
            }], [{
              line: "RB12",
              dir: "Templin"
            }], [{
              line: "RB14",
              dir: "Schönefeld"
            }], [{
              line: "RB24",
              dir: "Eberswalde"
            }], [{
              line: "RB25",
              dir: "Werneuchen"
            }], [{
              line: "RB26",
              dir: "Gorz&#243;w"
            }, {
              line: "RB26",
              dir: "Kostrzyn"
            }], [{
              line: "RE1",
              dir: "Magdeburg"
            }, {
              line: "RE1",
              dir: "Brandenburg"
            }, {
              line: "RE1",
              dir: "Potsdam"
            }], [{
              line: "RE2",
              dir: "Wismar"
            }, {
              line: "RE2",
              dir: "Bad Kleinen"
            }, {
              line: "RE2",
              dir: "Schwerin"
            }, {
              line: "RE2",
              dir: "Wittenberge"
            }], [{
              line: "RE7",
              dir: "Dessau"
            }, {
              line: "RE7",
              dir: "Bad Belzig"
            }], [{
              line: "RB14",
              dir: "Nauen"
            }], [{
              line: "RB24",
              dir: "Senftenberg"
            }, {
              line: "RB24",
              dir: "Cottbus"
            }], [_this.S3.E, _this.S3.WIG, _this.S3.RD, _this.S3.FRH, _this.S3.HIG, _this.S3.KPK, _this.S3.WHH, _this.S3.KLH, _this.S3.RB, _this.S3.RH], [_this.S5.STN, _this.S5.STR, _this.S5.HGM, _this.S5.STV, _this.S5.PEN, _this.S5.FD, _this.S5.NG, _this.S5.HPG, _this.S5.BIS, _this.S5.MDF, _this.S5.KAD, _this.S5.WT, _this.S5.BDF, _this.S5.FFO, _this.S5.LI, _this.S5.NPL], [_this.S7.AF, _this.S7.MEA, _this.S7.RW, _this.S7.MAZ, _this.S7.POE, _this.S7.SPH, _this.S7.FFO, _this.S7.LI, _this.S7.NPL], [_this.S75.WAB, _this.S75.HH, _this.S75.GSE, _this.S75.SPH, _this.S75.FFO, _this.S75.LI, _this.S75.NPL], [_this.S9.LI, _this.S9.NPL], [_this.S3.GWD, _this.S3.SPA, _this.S3.SRW, _this.S3.PIC, _this.S3.OLS, _this.S3.HST, _this.S3.MS, _this.S3.WKS, _this.S3.CHS, _this.S3.SAP, _this.S3.ZOS, _this.S3.TGN, _this.S3.BEV, _this.S3.HBF, _this.S3.FST, _this.S3.HKM, _this.S3.ALX, _this.S3.JB, _this.S3.OSB, _this.S3.WRS], [_this.S5.GWD, _this.S5.OLS, _this.S5.HST, _this.S5.MS, _this.S5.WKS, _this.S5.CHS, _this.S5.SAP, _this.S5.ZOS, _this.S5.TGN, _this.S5.BEV, _this.S5.HBF, _this.S5.FST, _this.S5.HKM, _this.S5.ALX, _this.S5.JB, _this.S5.OSB, _this.S5.WRS], [_this.S7.PDH, _this.S7.BAB, _this.S7.GRI, _this.S7.WSS, _this.S7.NIS, _this.S7.GWD, _this.S7.WKS, _this.S7.CHS, _this.S7.SAP, _this.S7.ZOS, _this.S7.TGN, _this.S7.BEV, _this.S7.HBF, _this.S7.FST, _this.S7.HKM, _this.S7.ALX, _this.S7.JB, _this.S7.OSB, _this.S7.WRS], [_this.S75.OSB, _this.S75.WRS], [_this.S9.GWD, _this.S9.SPA, _this.S9.SRW, _this.S9.PIC, _this.S9.OLS, _this.S9.HST, _this.S9.MS, _this.S9.WKS, _this.S9.CHS, _this.S9.SAP, _this.S9.ZOS, _this.S9.TGN, _this.S9.BEV, _this.S9.HBF, _this.S9.FST, _this.S9.HKM, _this.S9.ALX, _this.S9.JB, _this.S9.OSB, _this.S9.WRS], [_this.S41], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW, _this.S8.PWA, _this.S8.TP], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S8.SW, _this.S85.BMW, _this.S85.PWA, _this.S85.TP], [_this.S42], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS, _this.S8.SAL, _this.S8.PLA, _this.S8.GSS, _this.S8.LST, _this.S8.STO, _this.S8.FA], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS, _this.S85.SAL, _this.S85.PLA, _this.S85.GSS, _this.S85.LST, _this.S85.STO, _this.S85.FA], [{
              line: "194",
              dir: "Helene-Weigel-Platz"
            }, {
              line: "194",
              dir: "Friedrichsfelde Ost"
            }, {
              line: "194",
              dir: "Nöldnerplatz"
            }], [{
              line: "347",
              dir: "Tunnelstr"
            }], [{
              line: "N94",
              dir: "Magdalenenstr"
            }], [{
              line: "194",
              dir: "Hermannplatz"
            }, {
              line: "194",
              dir: "Treptower Park"
            }], [{
              line: "347",
              dir: "Ostbahnhof"
            }, {
              line: "347",
              dir: "Warschauer Str"
            }], [{
              line: "N94",
              dir: "Hermannplatz"
            }]]];
            break;

          case "BPWA":
            _this.stop = [900000191002, 900000191802];
            _this.neighboring = false;
            _this.filter = [[[_this.S45.TP], [_this.S46.TP], [_this.S47.TP], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS, _this.S8.SAL, _this.S8.PLA, _this.S8.GSS, _this.S8.LST, _this.S8.STO, _this.S8.FA, _this.S8.OK, _this.S8.TP], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS, _this.S85.SAL, _this.S85.PLA, _this.S85.GSS, _this.S85.LST, _this.S85.STO, _this.S85.FA], [_this.S9.GWD, _this.S9.SPA, _this.S9.SRW, _this.S9.PIC, _this.S9.OLS, _this.S9.HST, _this.S9.MS, _this.S9.WKS, _this.S9.CHS, _this.S9.SAP, _this.S9.ZOS, _this.S9.TGN, _this.S9.BEV, _this.S9.HBF, _this.S9.FST, _this.S9.HKM, _this.S9.ALX, _this.S9.JB, _this.S9.OSB, _this.S9.WRS, _this.S9.TP], [_this.S45.GAS, _this.S45.FLH, _this.S45.GBA, _this.S45.AGL, _this.S45.ADL, _this.S45.SCF, _this.S45.SW, _this.S45.BMW], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW], [_this.S47.SPF, _this.S47.OSP, _this.S47.SW, _this.S47.BMW], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S85.SW, _this.S85.BMW], [_this.S9.GAS, _this.S9.FLH, _this.S9.GBA, _this.S9.AGL, _this.S9.ADL, _this.S9.SCF, _this.S9.SW, _this.S9.BMW], [{
              line: "377",
              dir: "Hermannstr"
            }], [{
              line: "N79",
              dir: "Alt-Mariendorf"
            }]], [[{
              line: "165",
              dir: "Märkisches Museum"
            }, {
              line: "165",
              dir: "Treptower Park"
            }], [{
              line: "166",
              dir: "Boddinstr"
            }, {
              line: "166",
              dir: "Treptower Park"
            }], [{
              line: "N65",
              dir: "Hackescher Markt"
            }], [{
              line: "165",
              dir: "Schöneweide"
            }, {
              line: "165",
              dir: "Müggelschlößchenweg"
            }], [{
              line: "166",
              dir: "Schöneweide"
            }], [{
              line: "377",
              dir: "Hermannstr"
            }], [{
              line: "N65",
              dir: "Müggelschlößchenweg"
            }, {
              line: "N65",
              dir: "Schöneweide"
            }], [{
              line: "N79",
              dir: "Alt-Mariendorf"
            }]]];
            break;

          case "BPLA":
            _this.stop = [900000110002];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW, _this.S8.PWA, _this.S8.TP, _this.S8.OK, _this.S8.FA, _this.S8.STO, _this.S8.LST, _this.S8.GSS], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S85.SW, _this.S85.BMW, _this.S85.PWA, _this.S85.TP, _this.S85.OK, _this.S85.FA, _this.S85.STO, _this.S85.LST, _this.S85.GSS], [_this.S42], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS, _this.S8.SAL], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS, _this.S85.SAL], [{
              line: "M2",
              dir: "Am Steinberg"
            }, {
              line: "M2",
              dir: "Heinersdorf"
            }], [{
              line: "M2",
              dir: "Alexanderplatz"
            }], [{
              line: "156",
              dir: "Stadion Buschallee/Hansastr"
            }, {
              line: "156",
              dir: "Große Seestr"
            }, {
              line: "156",
              dir: "Pasedagplatz"
            }], [{
              line: "156",
              dir: "Storkower Str"
            }, {
              line: "156",
              dir: "Michelangelostr"
            }]]];
            break;

          case "BSG":
            _this.stop = [900000054104];
            _this.neighboring = false;
            _this.filter = [[[_this.S1.ORB, _this.S1.LEN, _this.S1.BOR, _this.S1.BIW, _this.S1.HN, _this.S1.FOH, _this.S1.HED, _this.S1.WAI, _this.S1.WIN, _this.S1.WM, _this.S1.SNH, _this.S1.WOK, _this.S1.BOS, _this.S1.GB, _this.S1.HUM, _this.S1.NB, _this.S1.ORS, _this.S1.FSTT, _this.S1.TOR, _this.S1.POP, _this.S1.AHU, _this.S1.YOR, _this.S1.JLB], [_this.S1.PDH, _this.S1.BAB, _this.S1.GRI, _this.S1.WSS, _this.S1.NIW, _this.S1.SLS, _this.S1.MEX, _this.S1.ZD, _this.S1.SDG, _this.S1.LWE, _this.S1.BGT, _this.S1.RST, _this.S1.FB, _this.S1.FRU], [_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL, _this.S46.HO, _this.S46.HEI, _this.S46.BUP, _this.S46.IP], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR], [{
              line: "M46",
              dir: "Zoologischer Garten"
            }, {
              line: "M46",
              dir: "Wittenbergplatz"
            }], [{
              line: "248",
              dir: "Breitenbachplatz"
            }], [{
              line: "M46",
              dir: "Britz-Süd"
            }, {
              line: "M46",
              dir: "Alt-Tempelhof"
            }, {
              line: "M46",
              dir: "Südkreuz"
            }], [{
              line: "248",
              dir: "Warschauer Str"
            }, {
              line: "248",
              dir: "Ostbahnhof"
            }, {
              line: "248",
              dir: "Alexanderplatz"
            }, {
              line: "248",
              dir: "Hallesches Tor"
            }, {
              line: "248",
              dir: "Südkreuz"
            }]]];
            break;

          case "BSAL":
            _this.stop = [900000110001];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW, _this.S8.PWA, _this.S8.TP, _this.S8.OK, _this.S8.FA, _this.S8.STO, _this.S8.LST, _this.S8.GSS, _this.S8.PLA], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S85.SW, _this.S85.BMW, _this.S85.PWA, _this.S85.TP, _this.S85.OK, _this.S85.FA, _this.S85.STO, _this.S85.LST, _this.S85.GSS, _this.S85.PLA], [_this.S42], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS], [{
              line: "U2",
              dir: "Pankow"
            }, {
              line: "U2",
              dir: "Vinetastr"
            }], [{
              line: "U2",
              dir: "Ruhleben"
            }, {
              line: "U2",
              dir: "Olympia-Stadion"
            }, {
              line: "U2",
              dir: "Theodor-Heuss-Platz"
            }, {
              line: "U2",
              dir: "Deutsche Oper"
            }, {
              line: "U2",
              dir: "Zoologischer Garten"
            }, {
              line: "U2",
              dir: "Breitenbachplatz"
            }, {
              line: "U2",
              dir: "Fehrbelliner Platz"
            }, {
              line: "U2",
              dir: "Spichernstr"
            }, {
              line: "U2",
              dir: "Potsdamer Platz"
            }, {
              line: "U2",
              dir: "Spittelmarkt"
            }, {
              line: "U2",
              dir: "Alexanderplatz"
            }, {
              line: "U2",
              dir: "Rosa-Luxemburg-Platz"
            }], [{
              line: "M1",
              dir: "Schillerstr"
            }, {
              line: "M1",
              dir: "Rosenthal Nord"
            }], [{
              line: "M1",
              dir: "Am Kupfergraben"
            }, {
              line: "M1",
              dir: "Hackescher Markt"
            }]]];
            break;

          case "BSO":
            _this.stop = [900000077106, 900000077110];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S42], [{
              line: "M41",
              dir: "Hauptbahnhof"
            }, {
              line: "M41",
              dir: "Philharmonie"
            }, {
              line: "M41",
              dir: "Hallesches Tor"
            }, {
              line: "M41",
              dir: "Hermannplatz"
            }], [{
              line: "171",
              dir: "Hermannplatz"
            }], [{
              line: "N79",
              dir: "Alt-Mariendorf"
            }], [{
              line: "M41",
              dir: "Sonnenallee/Baumschulenstr"
            }], [{
              line: "171",
              dir: "Schönefeld"
            }, {
              line: "171",
              dir: "Rudow"
            }], [{
              line: "N79",
              dir: "Plänterwald"
            }]], [[{
              line: "171",
              dir: "Schönefeld"
            }, {
              line: "171",
              dir: "Rudow"
            }], [{
              line: "N79",
              dir: "Alt-Mariendorf"
            }], [{
              line: "171",
              dir: "Hermannplatz"
            }, {
              line: "171",
              dir: "Sonnenallee"
            }], [{
              line: "N79",
              dir: "Plänterwald"
            }]]];
            break;

          case "BSTO":
            _this.stop = [900000110012];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW, _this.S8.TP, _this.S8.OK, _this.S8.FA], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S85.SW, _this.S85.BMW, _this.S85.TP, _this.S85.OK, _this.S85.FA], [_this.S42], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS, _this.S8.SAL, _this.S8.PLA, _this.S8.GSS, _this.S8.LST], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS, _this.S85.SAL, _this.S85.PLA, _this.S85.GSS, _this.S85.LST], [{
              line: "156",
              dir: "Stadion Buschallee"
            }, {
              line: "156",
              dir: "Große Seestr"
            }, {
              line: "156",
              dir: "Pasedagplatz"
            }], [{
              line: "240",
              dir: "Ostbahnhof"
            }, {
              line: "240",
              dir: "Betriebshof Lichtenberg"
            }]]];
            break;

          case "BSK":
            _this.stop = [900000058101, 900000058100];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "RE3",
              dir: "Schwedt"
            }, {
              line: "RE3",
              dir: "Stralsund"
            }, {
              line: "RE3",
              dir: "Prenzlau"
            }, {
              line: "RE3",
              dir: "Angermünde"
            }, {
              line: "RE3",
              dir: "Eberswalde"
            }], [{
              line: "RE4",
              dir: "Stendal"
            }, {
              line: "RE4",
              dir: "Rathenow"
            }], [{
              line: "RE5",
              dir: "Rostock"
            }, {
              line: "RE5",
              dir: "Stralsund"
            }], [{
              line: "RB10",
              dir: "Nauen"
            }], [{
              line: "RE3",
              dir: "Wittenberg"
            }, {
              line: "RE3",
              dir: "Falkenberg"
            }, {
              line: "RE3",
              dir: "Halle"
            }], [{
              line: "RE4",
              dir: "Jüterbog"
            }, {
              line: "RE4",
              dir: "Luckenwalde"
            }, {
              line: "RE4",
              dir: "Ludwigsfelde"
            }], [{
              line: "RE5",
              dir: "Elsterwerda"
            }, {
              line: "RE5",
              dir: "Wünsdorf"
            }], [_this.S2.BER, _this.S2.BRF, _this.S2.ZEP, _this.S2.RGT, _this.S2.BU, _this.S2.KRW, _this.S2.BLB, _this.S2.PHD, _this.S2.PKW, _this.S2.BOS, _this.S2.GB, _this.S2.HUM, _this.S2.NB, _this.S2.ORS, _this.S2.FSTT, _this.S2.TOR, _this.S2.POP, _this.S2.AHU, _this.S2.YOR], [_this.S25.HD, _this.S25.HLS, _this.S25.SZF, _this.S25.TG, _this.S25.EBD, _this.S25.KBO, _this.S25.ARF, _this.S25.SNH, _this.S25.WOK, _this.S25.BOS, _this.S25.GB, _this.S25.HUM, _this.S25.NB, _this.S25.ORS, _this.S25.FSTT, _this.S25.TOR, _this.S25.POP, _this.S25.AHU, _this.S25.YOR], [_this.S26.WAI, _this.S26.WIN, _this.S26.WM, _this.S26.SNH, _this.S26.WOK, _this.S26.BOS, _this.S26.GB, _this.S26.HUM, _this.S26.NB, _this.S26.ORS, _this.S26.FSTT, _this.S26.TOR, _this.S26.POP, _this.S26.AHU, _this.S26.YOR], [_this.S2.BFD, _this.S2.MAH, _this.S2.LRD, _this.S2.SC, _this.S2.BCH, _this.S2.MF, _this.S2.ATS, _this.S2.PRS], [_this.S25.TLS, _this.S25.LIS, _this.S25.OSS, _this.S25.LIO, _this.S25.LAK, _this.S25.SDE, _this.S25.PRS], [_this.S26.TLS, _this.S26.LIS, _this.S26.OSS, _this.S26.LIO, _this.S26.LAK, _this.S26.SDE, _this.S26.PRS], [_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL, _this.S46.HO, _this.S46.HEI, _this.S46.BUP, _this.S46.IP, _this.S46.SGR], [_this.S42], [_this.S45.NULL], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF], [{
              line: "M46",
              dir: "Zoologischer Garten"
            }, {
              line: "M46",
              dir: "Wittenbergplatz"
            }], [{
              line: "106",
              dir: "Seestr"
            }, {
              line: "106",
              dir: "Kurfürstenstr"
            }], [{
              line: "204",
              dir: "Zoologischer Garten"
            }], [{
              line: "M46",
              dir: "Britz-Süd"
            }, {
              line: "M46",
              dir: "Alt-Tempelhof"
            }], [{
              line: "106",
              dir: "Lindenhof"
            }]], [[{
              line: "184",
              dir: "Reichartstr"
            }], [{
              line: "248",
              dir: "Breitenbachplatz"
            }], [{
              line: "184",
              dir: "Warthestr"
            }, {
              line: "184",
              dir: "Wismarer Str"
            }, {
              line: "184",
              dir: "Saaleckstr"
            }, {
              line: "184",
              dir: "Lichterfelde Ost"
            }], [{
              line: "248",
              dir: "Warschauer Str"
            }, {
              line: "248",
              dir: "Ostbahnhof"
            }, {
              line: "248",
              dir: "Alexanderplatz"
            }, {
              line: "248",
              dir: "Hallesches Tor"
            }]]];
            break;

          case "BTHF":
            _this.stop = [900000068201, 900000068272];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S45.SKR], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN, _this.S46.WKRR, _this.S46.HAL, _this.S46.HO, _this.S46.HEI, _this.S46.BUP, _this.S46.IP, _this.S46.SGR, _this.S46.SKR], [_this.S42], [_this.S45.GAS, _this.S45.FLH, _this.S45.GBA, _this.S45.AGL, _this.S45.ADL, _this.S45.SCF, _this.S45.SW, _this.S45.BMW, _this.S45.KHD, _this.S45.NK, _this.S45.HER], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER], [{
              line: "U6",
              dir: "Alt-Tegel"
            }, {
              line: "U6",
              dir: "Kurt-Schumacher-Platz"
            }, {
              line: "U6",
              dir: "Seestr"
            }, {
              line: "U6",
              dir: "Wedding"
            }, {
              line: "U6",
              dir: "Hallesches Tor"
            }, {
              line: "U6",
              dir: "Platz der Luftbrücke"
            }], [{
              line: "U6",
              dir: "Alt-Mariendorf"
            }], [{
              line: "184",
              dir: "Südkreuz"
            }], [{
              line: "U6",
              dir: "Alt-Tegel"
            }], [{
              line: "140",
              dir: "Ostbahnhof"
            }, {
              line: "140",
              dir: "Mehringdamm"
            }], [{
              line: "184",
              dir: "Warthestr"
            }, {
              line: "184",
              dir: "Wismarer Str"
            }, {
              line: "184",
              dir: "Saaleckplatz"
            }, {
              line: "184",
              dir: "Lichterfelde Ost"
            }], [{
              line: "N6",
              dir: "Alt-Mariendorf"
            }], [{
              line: "N84",
              dir: "Zehlendorf Eiche"
            }, {
              line: "N84",
              dir: "Alt-Tempelhof"
            }]], [[{
              line: "184",
              dir: "Südkreuz"
            }, {
              line: "184",
              dir: "Tempelhof"
            }], [{
              line: "N6",
              dir: "Alt-Tegel"
            }], [{
              line: "184",
              dir: "Warthestr"
            }, {
              line: "184",
              dir: "Wismarer Str"
            }, {
              line: "184",
              dir: "Saaleckplatz"
            }, {
              line: "184",
              dir: "Lichterfelde Ost"
            }], [{
              line: "N6",
              dir: "Alt-Mariendorf"
            }]]];
            break;

          case "BTP":
            _this.stop = [900000190001, 900000190701, 900000190702, 900000190100];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S45.GAS, _this.S45.FLH, _this.S45.GBA, _this.S45.AGL, _this.S45.ADL, _this.S45.SCF, _this.S45.SW, _this.S45.BMW, _this.S45.PWA], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.PWA], [_this.S47.SPF, _this.S47.OSP, _this.S47.SW, _this.S47.BMW, _this.S47.PWA], [_this.S8.ZTH, _this.S8.EIW, _this.S8.GAS, _this.S8.ADL, _this.S8.SCF, _this.S8.SW, _this.S8.BMW, _this.S8.PWA], [_this.S85.GAS, _this.S85.ADL, _this.S85.SCF, _this.S85.SW, _this.S85.BMW, _this.S85.PWA], [_this.S9.GAS, _this.S9.FLH, _this.S9.GBA, _this.S9.AGL, _this.S9.ADL, _this.S9.SCF, _this.S9.SW, _this.S9.BMW, _this.S9.PWA], [_this.S42], [_this.S8.BIW, _this.S8.HN, _this.S8.BFE, _this.S8.SNF, _this.S8.MM, _this.S8.BLB, _this.S8.PHD, _this.S8.PKW, _this.S8.BOS, _this.S8.SAL, _this.S8.PLA, _this.S8.GSS, _this.S8.LST, _this.S8.STO, _this.S8.FA, _this.S8.OK], [_this.S85.NB, _this.S85.HUM, _this.S85.GB, _this.S85.PKW, _this.S85.BOS, _this.S85.SAL, _this.S85.PLA, _this.S85.GSS, _this.S85.LST, _this.S85.STO, _this.S85.FA, _this.S85.OK], [_this.S9.GWD, _this.S9.SPA, _this.S9.SRW, _this.S9.PIC, _this.S9.OLS, _this.S9.HST, _this.S9.MS, _this.S9.WKS, _this.S9.CHS, _this.S9.SAP, _this.S9.ZOS, _this.S9.TGN, _this.S9.BEV, _this.S9.HBF, _this.S9.FST, _this.S9.HKM, _this.S9.ALX, _this.S9.JB, _this.S9.OSB, _this.S9.WRS]], [[{
              line: "165",
              dir: "Märkisches Museum"
            }, {
              line: "165",
              dir: "Treptower Park"
            }], [{
              line: "166",
              dir: "Boddinstr"
            }, {
              line: "166",
              dir: "Treptower Park"
            }], [{
              line: "265",
              dir: "Stadtmitte"
            }, {
              line: "265",
              dir: "Märkisches Museum"
            }, {
              line: "265",
              dir: "Schlesisches Tor"
            }, {
              line: "265",
              dir: "Treptower Park"
            }], [{
              line: "N65",
              dir: "Hackescher Markt"
            }]], [[{
              line: "104",
              dir: "Brixplatz"
            }, {
              line: "104",
              dir: "Theodor-Heuss-Platz"
            }, {
              line: "104",
              dir: "Berliner Str"
            }, {
              line: "104",
              dir: "Platz der Luftbrücke"
            }, {
              line: "104",
              dir: "Boddinstr"
            }], [{
              line: "194",
              dir: "Hermannplatz"
            }], [{
              line: "N94",
              dir: "Hermannplatz"
            }], [{
              line: "104",
              dir: "Tunnelstr"
            }], [{
              line: "194",
              dir: "Helene-Weigel-Platz"
            }, {
              line: "194",
              dir: "Friedrichsfelde Ost"
            }, {
              line: "194",
              dir: "Nöldnerplatz"
            }], [{
              line: "N94",
              dir: "Magdalenenstr"
            }]], [[{
              line: "104",
              dir: "Brixplatz"
            }, {
              line: "104",
              dir: "Theodor-Heuss-Platz"
            }, {
              line: "104",
              dir: "Berliner Str"
            }, {
              line: "104",
              dir: "Platz der Luftbrücke"
            }, {
              line: "104",
              dir: "Boddinstr"
            }], [{
              line: "165",
              dir: "Müggelschlößchenweg"
            }, {
              line: "165",
              dir: "Schöneweide"
            }], [{
              line: "166",
              dir: "Boddinstr"
            }], [{
              line: "194",
              dir: "Hermannplatz"
            }], [{
              line: "265",
              dir: "Schöneweide"
            }, {
              line: "265",
              dir: "Baumschulenstr"
            }], [{
              line: "N65",
              dir: "Müggelschlößchenweg"
            }, {
              line: "N65",
              dir: "Schöneweide"
            }], [{
              line: "N94",
              dir: "Hermannplatz"
            }], [{
              line: "165",
              dir: "Märkisches Museum"
            }], [{
              line: "265",
              dir: "Stadtmitte"
            }, {
              line: "265",
              dir: "Märkisches Museum"
            }, {
              line: "265",
              dir: "Schlesisches Tor"
            }], [{
              line: "N65",
              dir: "Hackescher Markt"
            }]]];
            break;

          case "BWED":
            _this.stop = [900000009104, 900000008103];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI, _this.S46.HO, _this.S46.HAL, _this.S46.WKRR, _this.S46.MN, _this.S46.WES, _this.S46.JUN, _this.S46.BEU, _this.S46.WH], [{
              line: "U6",
              dir: "Alt-Tegel"
            }, {
              line: "U6",
              dir: "Kurt-Schumacher-Platz"
            }, {
              line: "U6",
              dir: "Seestr"
            }], [{
              line: "U6",
              dir: "Alt-Mariendorf"
            }, {
              line: "U6",
              dir: "Tempelhof"
            }, {
              line: "U6",
              dir: "Platz der Luftbrücke"
            }, {
              line: "U6",
              dir: "Hallesches Tor"
            }], [{
              line: "120",
              dir: "Wilhelmsruher Damm"
            }, {
              line: "120",
              dir: "Wittenau"
            }, {
              line: "120",
              dir: "Paracelsus-Bad"
            }, {
              line: "120",
              dir: "Leopoldplatz"
            }], [{
              line: "N6",
              dir: "Alt-Tegel"
            }], [{
              line: "N20",
              dir: "Hainbuchenstr"
            }]], [[{
              line: "M27",
              dir: "Jungfernheide"
            }], [{
              line: "247",
              dir: "Leopoldplatz"
            }], [{
              line: "M27",
              dir: "Pankow"
            }], [{
              line: "247",
              dir: "Nordbahnhof"
            }, {
              line: "247",
              dir: "Bernauer Str"
            }]]];
            break;

          case "BWES":
            _this.stop = [900000026207];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI, _this.S46.HO, _this.S46.HAL, _this.S46.WKRR, _this.S46.MN], [{
              line: "M45",
              dir: "Johannesstift"
            }, {
              line: "M45",
              dir: "DRK-Kliniken Westend"
            }, {
              line: "M45",
              dir: "Rathaus Spandau"
            }], [{
              line: "M45",
              dir: "Zoologischer Garten"
            }]]];
            break;

          case "BWH":
            _this.stop = [900000001201];
            _this.neighboring = false;
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI, _this.S46.HO, _this.S46.HAL, _this.S46.WKRR, _this.S46.MN, _this.S46.WES, _this.S46.JUN, _this.S46.BEU], [{
              line: "U9",
              dir: "Osloer Str"
            }], [{
              line: "U9",
              dir: "Rathaus Steglitz"
            }, {
              line: "U9",
              dir: "Zoologischer Garten"
            }], [{
              line: "N9",
              dir: "Osloer Str"
            }], [{
              line: "N9",
              dir: "Rathaus Steglitz"
            }, {
              line: "N9",
              dir: "Zoologischer Garten"
            }]]];
            break;

          case "BWK":
            _this.stop = [900000024102];
            _this.neighboring = false;
            _this.filter = [[[_this.S3.GWD, _this.S3.SPA, _this.S3.SRW, _this.S3.PIC, _this.S3.OLS, _this.S3.HST, _this.S3.MS], [_this.S5.GWD, _this.S5.OLS, _this.S5.HST, _this.S5.MS], [_this.S7.PDH, _this.S7.BAB, _this.S7.GRI, _this.S7.WSS, _this.S7.NIS, _this.S7.GWD], [_this.S9.GWD, _this.S9.SPA, _this.S9.SRW, _this.S9.PIC, _this.S9.OLS, _this.S9.HST, _this.S9.MS], [_this.S3.E, _this.S3.WIG, _this.S3.RD, _this.S3.FRH, _this.S3.HIG, _this.S3.KPK, _this.S3.WHH, _this.S3.KLH, _this.S3.RB, _this.S3.RH, _this.S3.OKS, _this.S3.WRS, _this.S3.OSB, _this.S3.JB, _this.S3.ALX, _this.S3.HKM, _this.S3.FST, _this.S3.HBF, _this.S3.BEV, _this.S3.TGN, _this.S3.ZOS, _this.S3.SAP, _this.S3.CHS], [_this.S5.STN, _this.S5.STR, _this.S5.HGM, _this.S5.STV, _this.S5.PEN, _this.S5.FD, _this.S5.NG, _this.S5.HPG, _this.S5.BIS, _this.S5.MDF, _this.S5.KAD, _this.S5.WT, _this.S5.BDF, _this.S5.FFO, _this.S5.LI, _this.S5.NPL, _this.S5.OKS, _this.S5.WRS, _this.S5.OSB, _this.S5.JB, _this.S5.ALX, _this.S5.HKM, _this.S5.FST, _this.S5.HBF, _this.S5.BEV, _this.S5.TGN, _this.S5.ZOS, _this.S5.SAP, _this.S5.CHS], [_this.S7.AF, _this.S7.MEA, _this.S7.RW, _this.S7.MAZ, _this.S7.POE, _this.S7.SPH, _this.S7.FFO, _this.S7.LI, _this.S7.NPL, _this.S7.OKS, _this.S7.WRS, _this.S7.OSB, _this.S7.JB, _this.S7.ALX, _this.S7.HKM, _this.S7.FST, _this.S7.HBF, _this.S7.BEV, _this.S7.TGN, _this.S7.ZOS, _this.S7.SAP, _this.S7.CHS], [_this.S9.LI, _this.S9.NPL, _this.S9.OKS, _this.S9.FLH, _this.S9.GBA, _this.S9.AGL, _this.S9.GAS, _this.S9.ADL, _this.S9.SCF, _this.S9.SW, _this.S9.BMW, _this.S9.PWA, _this.S9.TP, _this.S9.WRS, _this.S9.OSB, _this.S9.JB, _this.S9.ALX, _this.S9.HKM, _this.S9.FST, _this.S9.HBF, _this.S9.BEV, _this.S9.TGN, _this.S9.ZOS, _this.S9.SAP, _this.S9.CHS], [_this.S41], [_this.S46.GB, _this.S46.WED, _this.S46.WH, _this.S46.BEU, _this.S46.JUN, _this.S46.WES, _this.S46.MN], [_this.S42], [_this.S46.KW, _this.S46.WI, _this.S46.ZTH, _this.S46.EIW, _this.S46.GAS, _this.S46.ADL, _this.S46.SCF, _this.S46.SW, _this.S46.BMW, _this.S46.KHD, _this.S46.NK, _this.S46.HER, _this.S46.THF, _this.S46.SKR, _this.S46.SGR, _this.S46.IP, _this.S46.BUP, _this.S46.HEI, _this.S46.HO, _this.S46.HAL], [{
              line: "104",
              dir: "Brixplatz"
            }, {
              line: "104",
              dir: "Theodor-Heuss-Platz"
            }], [{
              line: "N42",
              dir: "Theodor-Heuss-Platz"
            }]]];
            break;

          case "jov":
            _this.stop = [900000160541];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "240",
              dir: "Storkower Str"
            }], [{
              line: "N50",
              dir: "Hugenottenplatz"
            }, {
              line: "N50",
              dir: "Betriebshof Indira-Gandhi-Str"
            }, {
              line: "N50",
              dir: "Pankow"
            }], [{
              line: "240",
              dir: "Ostbahnhof"
            }, {
              line: "240",
              dir: "Betriebshof Lichtenberg"
            }], [{
              line: "N50",
              dir: "Tierpark"
            }, {
              line: "N50",
              dir: "Betriebshof Lichtenberg"
            }]]];
            break;

          case "bae":
            _this.stop = [900000160509];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "M8",
              dir: "Hauptbahnhof"
            }, {
              line: "M8",
              dir: "Petersburger"
            }], [{
              line: "M5",
              dir: "Petersburger"
            }], [{
              line: "21",
              dir: "Schöneweide"
            }, {
              line: "21",
              dir: "Bersarinplatz"
            }, {
              line: "21",
              dir: "Treskowallee/Ehrlichstr"
            }], [{
              line: "M8",
              dir: "Ahrensfelde/Stadtgrenze"
            }, {
              line: "M8",
              dir: "Betriebshof Marzahn"
            }], [{
              line: "21",
              dir: "Gudrunstr"
            }]]];
            break;

          case "moe":
            _this.stop = [900000160014];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "M13",
              dir: "Warschauer"
            }, {
              line: "M13",
              dir: "Frankfurter"
            }], [{
              line: "16",
              dir: "Frankfurter"
            }], [{
              line: "21",
              dir: "Schöneweide"
            }, {
              line: "21",
              dir: "Bersarinplatz"
            }, {
              line: "21",
              dir: "Treskowallee/Ehrlichstr"
            }], [{
              line: "M13",
              dir: "Virchow-Klinikum"
            }, {
              line: "M13",
              dir: "Degnerstr"
            }, {
              line: "M13",
              dir: "Betriebshof Lichtenberg"
            }], [{
              line: "16",
              dir: "Ahrensfelde/Stadtgrenze"
            }], [{
              line: "21",
              dir: "Gudrunstr"
            }], [{
              line: "240",
              dir: "Storkower Str"
            }], [{
              line: "N50",
              dir: "Hugenottenplatz"
            }, {
              line: "N50",
              dir: "Betriebshof Indira-Gandhi-Str"
            }, {
              line: "N50",
              dir: "Pankow"
            }], [{
              line: "240",
              dir: "Ostbahnhof"
            }, {
              line: "240",
              dir: "Betriebshof Lichtenberg"
            }], [{
              line: "N50",
              dir: "Tierpark"
            }, {
              line: "N50",
              dir: "Betriebshof Lichtenberg"
            }]]];
            break;

          case "gat":
            _this.stop = [900000032106];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "M49",
              dir: "Zoologischer Garten"
            }, {
              line: "M49",
              dir: "Savignyplatz"
            }, {
              line: "M49",
              dir: "Wilmersdorfer Str"
            }, {
              line: "M49",
              dir: "Haus des Rundfunks"
            }], [{
              line: "X34",
              dir: "Zoologischer Garten"
            }, {
              line: "X34",
              dir: "Savignyplatz"
            }, {
              line: "X34",
              dir: "Wilmersdorfer Str"
            }], [{
              line: "X49",
              dir: "Wilmersdorfer"
            }], [{
              line: "X34",
              dir: "Hottengrund"
            }, {
              line: "X34",
              dir: "Gutsstr"
            }], [{
              line: "134",
              dir: "Hottengrund"
            }, {
              line: "134",
              dir: "Alt-Gatow"
            }, {
              line: "134",
              dir: "Alt-Kladow"
            }], [{
              line: "N34",
              dir: "Hottengrund"
            }], [{
              line: "M49",
              dir: "Nennhauser Damm"
            }, {
              line: "M49",
              dir: "Reimerweg"
            }], [{
              line: "X49",
              dir: "Hahneberg"
            }, {
              line: "X49",
              dir: "Spektefeld"
            }], [{
              line: "134",
              dir: "Wasserwerk Spandau"
            }, {
              line: "134",
              dir: "Kisseln"
            }, {
              line: "134",
              dir: "Rathaus Spandau"
            }], [{
              line: "N34",
              dir: "Aalemannufer"
            }], [{
              line: "136",
              dir: "Aalemannufer"
            }, {
              line: "136",
              dir: "Hennigsdorf"
            }, {
              line: "136",
              dir: "Werderstr"
            }, {
              line: "136",
              dir: "Rathaus Spandau"
            }], [{
              line: "236",
              dir: "Haselhorst"
            }, {
              line: "236",
              dir: "Rathaus Spandau"
            }], [{
              line: "136",
              dir: "Am Omnibushof"
            }], [{
              line: "236",
              dir: "Am Omnibushof"
            }]]];
            break;

          case "wil":
            _this.stop = [900000032102];
            _this.neighboring = false;
            _this.filter = [[[{
              line: "135",
              dir: "Rathaus Spandau"
            }, {
              line: "135",
              dir: "Am Omnibushof"
            }], [{
              line: "638",
              dir: "Rathaus Spandau"
            }], [{
              line: "M49",
              dir: "Zoologischer Garten"
            }, {
              line: "M49",
              dir: "Savignyplatz"
            }, {
              line: "M49",
              dir: "Wilmersdorfer Str"
            }, {
              line: "M49",
              dir: "Haus des Rundfunks"
            }], [{
              line: "X49",
              dir: "Wilmersdorfer Str"
            }], [{
              line: "135",
              dir: "Alt-Kladow"
            }, {
              line: "135",
              dir: "Landstadt Gatow"
            }, {
              line: "135",
              dir: "Hottengrund"
            }], [{
              line: "638",
              dir: "Hauptbahnhof"
            }, {
              line: "638",
              dir: "Campus Jungfernsee"
            }], [{
              line: "338",
              dir: "Havelpark"
            }], [{
              line: "M49",
              dir: "Nennhauser Damm"
            }, {
              line: "M49",
              dir: "Reimerweg"
            }], [{
              line: "X49",
              dir: "Hahneberg"
            }, {
              line: "X49",
              dir: "Spektefeld"
            }]]];
            break;
        }

        _this.getData();
      });
      document.querySelector("#refresh").addEventListener("click", function () {
        while (_this.container.firstChild) {
          _this.container.removeChild(_this.container.firstChild);
        }

        _this.getData();
      });
    }
  }, {
    key: "addLines",
    value: function addLines() {
      this.addS1();
      this.addS2();
      this.addS25();
      this.addS26();
      this.addS3();
      this.addS4();
      this.addS45();
      this.addS46();
      this.addS47();
      this.addS5();
      this.addS7();
      this.addS75();
      this.addS8();
      this.addS85();
      this.addS9();
      this.addU1();
      this.addU2();
      this.addU3();
      this.addU4();
      this.addU5();
      this.addU55();
      this.addU6();
      this.addU7();
      this.addU8();
      this.addU9();
    }
  }, {
    key: "addS1",
    value: function addS1() {
      this.S1 = {
        PDH: {
          line: "S1",
          dir: "Potsdam"
        },
        BAB: {
          line: "S1",
          dir: "Babelsberg"
        },
        GRI: {
          line: "S1",
          dir: "Griebnitzsee"
        },
        WSS: {
          line: "S1",
          dir: "Wannsee"
        },
        NIW: {
          line: "S1",
          dir: "Nikolassee"
        },
        SLS: {
          line: "S1",
          dir: "Schlachtensee"
        },
        MEX: {
          line: "S1",
          dir: "Mexikoplatz"
        },
        ZD: {
          line: "S1",
          dir: "Zehlendorf"
        },
        SDG: {
          line: "S1",
          dir: "Sundgauer Str"
        },
        LWE: {
          line: "S1",
          dir: "Lichterfelde West"
        },
        BGT: {
          line: "S1",
          dir: "Botanischer Garten"
        },
        RST: {
          line: "S1",
          dir: "Rathaus Steglitz"
        },
        FB: {
          line: "S1",
          dir: "Feuerbachstr"
        },
        FRU: {
          line: "S1",
          dir: "Friedenau"
        },
        SGV: {
          line: "S1",
          dir: "Schöneberg"
        },
        JLB: {
          line: "S1",
          dir: "Julius-Leber-Brücke"
        },
        YOR: {
          line: "S1",
          dir: "Yorckstr"
        },
        AHU: {
          line: "S1",
          dir: "Anhalter Bahnhof"
        },
        POP: {
          line: "S1",
          dir: "Potsdamer Platz"
        },
        TOR: {
          line: "S1",
          dir: "Brandenburger Tor"
        },
        FSTT: {
          line: "S1",
          dir: "Friedrichstr"
        },
        ORS: {
          line: "S1",
          dir: "Oranienburger Str"
        },
        NB: {
          line: "S1",
          dir: "Nordbahnhof"
        },
        HUM: {
          line: "S1",
          dir: "Humboldthain"
        },
        GB: {
          line: "S1",
          dir: "Gesundbrunnen"
        },
        BOS: {
          line: "S1",
          dir: "Bornholmer Str"
        },
        WOK: {
          line: "S1",
          dir: "Wollankstr"
        },
        SNH: {
          line: "S1",
          dir: "Schönholz"
        },
        WM: {
          line: "S1",
          dir: "Wilhelmsruh"
        },
        WIN: {
          line: "S1",
          dir: "Wittenau"
        },
        WAI: {
          line: "S1",
          dir: "Waidmannslust"
        },
        HED: {
          line: "S1",
          dir: "Hermsdorf"
        },
        FOH: {
          line: "S1",
          dir: "Frohnau"
        },
        HN: {
          line: "S1",
          dir: "Hohen Neuendorf"
        },
        BIW: {
          line: "S1",
          dir: "Birkenwerder"
        },
        BOR: {
          line: "S1",
          dir: "Borgsdorf"
        },
        LEN: {
          line: "S1",
          dir: "Lehnitz"
        },
        ORB: {
          line: "S1",
          dir: "Oranienburg"
        },
        NULL: {
          line: "S1",
          dir: null
        }
      };
    }
  }, {
    key: "addS2",
    value: function addS2() {
      this.S2 = {
        BFD: {
          line: "S2",
          dir: "Blankenfelde"
        },
        MAH: {
          line: "S2",
          dir: "Mahlow"
        },
        LRD: {
          line: "S2",
          dir: "Lichtenrade"
        },
        SC: {
          line: "S2",
          dir: "Schichauweg"
        },
        BCH: {
          line: "S2",
          dir: "Buckower Chaussee"
        },
        MF: {
          line: "S2",
          dir: "Marienfelde"
        },
        ATS: {
          line: "S2",
          dir: "Attilastr"
        },
        PRS: {
          line: "S2",
          dir: "Priesterweg"
        },
        SKV: {
          line: "S2",
          dir: "Südkreuz"
        },
        YOR: {
          line: "S2",
          dir: "Yorckstr"
        },
        AHU: {
          line: "S2",
          dir: "Anhalter Bahnhof"
        },
        POP: {
          line: "S2",
          dir: "Potsdamer Platz"
        },
        TOR: {
          line: "S2",
          dir: "Brandenburger Tor"
        },
        FSTT: {
          line: "S2",
          dir: "Friedrichstr"
        },
        ORS: {
          line: "S2",
          dir: "Oranienburger Str"
        },
        NB: {
          line: "S2",
          dir: "Nordbahnhof"
        },
        HUM: {
          line: "S2",
          dir: "Humboldthain"
        },
        GB: {
          line: "S2",
          dir: "Gesundbrunnen"
        },
        BOS: {
          line: "S2",
          dir: "Bornholmer Str"
        },
        PKW: {
          line: "S2",
          dir: "Pankow"
        },
        PHD: {
          line: "S2",
          dir: "Pankow-Heinersdorf"
        },
        BLB: {
          line: "S2",
          dir: "Blankenburg"
        },
        KRW: {
          line: "S2",
          dir: "Karow"
        },
        BU: {
          line: "S2",
          dir: "Buch"
        },
        RGT: {
          line: "S2",
          dir: "Röntgental"
        },
        ZEP: {
          line: "S2",
          dir: "Zepernick"
        },
        BRF: {
          line: "S2",
          dir: "Bernau-Friedenstal"
        },
        BER: {
          line: "S2",
          dir: "Bernau"
        },
        NULL: {
          line: "S2",
          dir: null
        }
      };
    }
  }, {
    key: "addS25",
    value: function addS25() {
      this.S25 = {
        TLS: {
          line: "S25",
          dir: "Teltow Stadt"
        },
        LIS: {
          line: "S25",
          dir: "Lichterfelde Süd"
        },
        OSS: {
          line: "S25",
          dir: "Osdorfer Str"
        },
        LIO: {
          line: "S25",
          dir: "Lichterfelde Ost"
        },
        LAK: {
          line: "S25",
          dir: "Lankwitz"
        },
        SDE: {
          line: "S25",
          dir: "Südende"
        },
        PRS: {
          line: "S25",
          dir: "Priesterweg"
        },
        SKV: {
          line: "S25",
          dir: "Südkreuz"
        },
        YOR: {
          line: "S25",
          dir: "Yorckstr"
        },
        AHU: {
          line: "S25",
          dir: "Anhalter Bahnhof"
        },
        POP: {
          line: "S25",
          dir: "Potsdamer Platz"
        },
        TOR: {
          line: "S25",
          dir: "Brandenburger Tor"
        },
        FSTT: {
          line: "S25",
          dir: "Friedrichstr"
        },
        ORS: {
          line: "S25",
          dir: "Oranienburger Str"
        },
        NB: {
          line: "S25",
          dir: "Nordbahnhof"
        },
        HUM: {
          line: "S25",
          dir: "Humboldthain"
        },
        GB: {
          line: "S25",
          dir: "Gesundbrunnen"
        },
        BOS: {
          line: "S25",
          dir: "Bornholmer Str"
        },
        WOK: {
          line: "S25",
          dir: "Wollankstr"
        },
        SNH: {
          line: "S25",
          dir: "Schönholz"
        },
        ARF: {
          line: "S25",
          dir: "Alt-Reinickendorf"
        },
        KBO: {
          line: "S25",
          dir: "Karl-Bonhoeffer-Nervenklinik"
        },
        EBD: {
          line: "S25",
          dir: "Eichborndamm"
        },
        TG: {
          line: "S25",
          dir: "Tegel"
        },
        SZF: {
          line: "S25",
          dir: "Schulzendorf"
        },
        HLS: {
          line: "S25",
          dir: "Schulzendorf"
        },
        HD: {
          line: "S25",
          dir: "Hennigsdorf"
        },
        NULL: {
          line: "S25",
          dir: null
        }
      };
    }
  }, {
    key: "addS26",
    value: function addS26() {
      this.S26 = {
        TLS: {
          line: "S26",
          dir: "Teltow Stadt"
        },
        LIS: {
          line: "S26",
          dir: "Lichterfelde Süd"
        },
        OSS: {
          line: "S26",
          dir: "Osdorfer Str"
        },
        LIO: {
          line: "S26",
          dir: "Lichterfelde Ost"
        },
        LAK: {
          line: "S26",
          dir: "Lankwitz"
        },
        SDE: {
          line: "S26",
          dir: "Südende"
        },
        PRS: {
          line: "S26",
          dir: "Priesterweg"
        },
        SKV: {
          line: "S26",
          dir: "Südkreuz"
        },
        YOR: {
          line: "S26",
          dir: "Yorckstr"
        },
        AHU: {
          line: "S26",
          dir: "Anhalter Bahnhof"
        },
        POP: {
          line: "S26",
          dir: "Potsdamer Platz"
        },
        TOR: {
          line: "S26",
          dir: "Brandenburger Tor"
        },
        FSTT: {
          line: "S26",
          dir: "Friedrichstr"
        },
        ORS: {
          line: "S26",
          dir: "Oranienburger Str"
        },
        NB: {
          line: "S26",
          dir: "Nordbahnhof"
        },
        HUM: {
          line: "S26",
          dir: "Humboldthain"
        },
        GB: {
          line: "S26",
          dir: "Gesundbrunnen"
        },
        BOS: {
          line: "S26",
          dir: "Bornholmer Str"
        },
        WOK: {
          line: "S26",
          dir: "Wollankstr"
        },
        SNH: {
          line: "S26",
          dir: "Schönholz"
        },
        WM: {
          line: "S26",
          dir: "Wilhelmsruh"
        },
        WIN: {
          line: "S26",
          dir: "Wittenau"
        },
        WAI: {
          line: "S26",
          dir: "Waidmannslust"
        },
        NULL: {
          line: "S26",
          dir: null
        }
      };
    }
  }, {
    key: "addS3",
    value: function addS3() {
      this.S3 = {
        E: {
          line: "S3",
          dir: "Erkner"
        },
        WIG: {
          line: "S3",
          dir: "Wilhelmshagen"
        },
        RD: {
          line: "S3",
          dir: "Rahnsdorf"
        },
        FRH: {
          line: "S3",
          dir: "Friedrichshagen"
        },
        HIG: {
          line: "S3",
          dir: "Hirschgarten"
        },
        KPK: {
          line: "S3",
          dir: "Köpenick"
        },
        WHH: {
          line: "S3",
          dir: "Wuhlheide"
        },
        KLH: {
          line: "S3",
          dir: "Karlshorst"
        },
        RB: {
          line: "S3",
          dir: "Betriebsbahnhof Rummelsburg"
        },
        RH: {
          line: "S3",
          dir: "Rummelsburg"
        },
        OKS: {
          line: "S3",
          dir: "Ostkreuz"
        },
        WRS: {
          line: "S3",
          dir: "Warschauer Str"
        },
        OSB: {
          line: "S3",
          dir: "Ostbahnhof"
        },
        JB: {
          line: "S3",
          dir: "Jannowitzbrücke"
        },
        ALX: {
          line: "S3",
          dir: "Alexanderplatz"
        },
        HKM: {
          line: "S3",
          dir: "Hackescher Markt"
        },
        FST: {
          line: "S3",
          dir: "Friedrichstr"
        },
        HBF: {
          line: "S3",
          dir: "Hauptbahnhof"
        },
        BEV: {
          line: "S3",
          dir: "Bellevue"
        },
        TGN: {
          line: "S3",
          dir: "Tiergarten"
        },
        ZOS: {
          line: "S3",
          dir: "Zoologischer Garten"
        },
        SAP: {
          line: "S3",
          dir: "Savignyplatz"
        },
        CHS: {
          line: "S3",
          dir: "Charlottenburg"
        },
        WKS: {
          line: "S3",
          dir: "Westkreuz"
        },
        GWD: {
          line: "S3",
          dir: "Grunewald"
        },
        MS: {
          line: "S3",
          dir: "Messe Süd"
        },
        HST: {
          line: "S3",
          dir: "Heerstr"
        },
        OLS: {
          line: "S3",
          dir: "Olympiastadion"
        },
        PIC: {
          line: "S3",
          dir: "Pichelsberg"
        },
        SRW: {
          line: "S3",
          dir: "Stresow"
        },
        SPA: {
          line: "S3",
          dir: "Spandau"
        },
        NULL: {
          line: "S3",
          dir: null
        }
      };
    }
  }, {
    key: "addS4",
    value: function addS4() {
      this.S41 = {
        line: "S41",
        dir: null
      };
      this.S42 = {
        line: "S42",
        dir: null
      };
    }
  }, {
    key: "addS45",
    value: function addS45() {
      this.S45 = {
        FLH: {
          line: "S45",
          dir: "Flughafen Berlin-Schönefeld"
        },
        GBA: {
          line: "S45",
          dir: "Grünbergallee"
        },
        AGL: {
          line: "S45",
          dir: "Altglienicke"
        },
        GAS: {
          line: "S45",
          dir: "Grünau"
        },
        ADL: {
          line: "S45",
          dir: "Adlershof"
        },
        SCF: {
          line: "S45",
          dir: "Betriebsbahnhof Schöneweide"
        },
        SW: {
          line: "S45",
          dir: "Schöneweide"
        },
        BMW: {
          line: "S45",
          dir: "Baumschulenweg"
        },
        PWA: {
          line: "S45",
          dir: "Plänterwald"
        },
        TP: {
          line: "S45",
          dir: "Treptower Park"
        },
        KHD: {
          line: "S45",
          dir: "Köllnische Heide"
        },
        NK: {
          line: "S45",
          dir: "Neukölln"
        },
        HER: {
          line: "S45",
          dir: "Hermannstr"
        },
        THF: {
          line: "S45",
          dir: "Tempelhof"
        },
        SKR: {
          line: "S45",
          dir: "Südkreuz"
        },
        NULL: {
          line: "S45",
          dir: null
        }
      };
    }
  }, {
    key: "addS46",
    value: function addS46() {
      this.S46 = {
        KW: {
          line: "S46",
          dir: "Königs Wusterhausen"
        },
        WI: {
          line: "S46",
          dir: "Wildau"
        },
        ZTH: {
          line: "S46",
          dir: "Zeuthen"
        },
        EIW: {
          line: "S46",
          dir: "Eichwalde"
        },
        GAS: {
          line: "S46",
          dir: "Grünau"
        },
        ADL: {
          line: "S46",
          dir: "Adlershof"
        },
        SCF: {
          line: "S46",
          dir: "Betriebsbahnhof Schöneweide"
        },
        SW: {
          line: "S46",
          dir: "Schöneweide"
        },
        BMW: {
          line: "S46",
          dir: "Baumschulenweg"
        },
        PWA: {
          line: "S46",
          dir: "Plänterwald"
        },
        TP: {
          line: "S46",
          dir: "Treptower Park"
        },
        KHD: {
          line: "S46",
          dir: "Köllnische Heide"
        },
        NK: {
          line: "S46",
          dir: "Neukölln"
        },
        HER: {
          line: "S46",
          dir: "Hermannstr"
        },
        THF: {
          line: "S46",
          dir: "Tempelhof"
        },
        SKR: {
          line: "S46",
          dir: "Südkreuz"
        },
        SGR: {
          line: "S46",
          dir: "Schöneberg"
        },
        IP: {
          line: "S46",
          dir: "Innsbrucker Platz"
        },
        BUP: {
          line: "S46",
          dir: "Bundesplatz"
        },
        HEI: {
          line: "S46",
          dir: "Heidelberger Platz"
        },
        HO: {
          line: "S46",
          dir: "Hohenzollerndamm"
        },
        HAL: {
          line: "S46",
          dir: "Halensee"
        },
        WKRR: {
          line: "S46",
          dir: "Westkreuz"
        },
        MN: {
          line: "S46",
          dir: "Messe Nord/ICC"
        },
        WES: {
          line: "S46",
          dir: "Westend"
        },
        JUN: {
          line: "S46",
          dir: "Jungfernheide"
        },
        BEU: {
          line: "S46",
          dir: "Beusselstr"
        },
        WH: {
          line: "S46",
          dir: "Westhafen"
        },
        WED: {
          line: "S46",
          dir: "Wedding"
        },
        GB: {
          line: "S46",
          dir: "Gesundbrunnen"
        },
        NULL: {
          line: "S46",
          dir: null
        }
      };
    }
  }, {
    key: "addS47",
    value: function addS47() {
      this.S47 = {
        SPF: {
          line: "S47",
          dir: "Spindlersfeld"
        },
        OSP: {
          line: "S47",
          dir: "Oberspree"
        },
        SW: {
          line: "S47",
          dir: "Schöneweide"
        },
        BMW: {
          line: "S47",
          dir: "Baumschulenweg"
        },
        PWA: {
          line: "S47",
          dir: "Plänterwald"
        },
        TP: {
          line: "S47",
          dir: "Treptower Park"
        },
        KHD: {
          line: "S47",
          dir: "Köllnische Heide"
        },
        NK: {
          line: "S47",
          dir: "Neukölln"
        },
        HER: {
          line: "S47",
          dir: "Hermannstr"
        },
        NULL: {
          line: "S47",
          dir: null
        }
      };
    }
  }, {
    key: "addS5",
    value: function addS5() {
      this.S5 = {
        STN: {
          line: "S5",
          dir: "Strausberg Nord"
        },
        STR: {
          line: "S5",
          dir: "Strausberg Stadt"
        },
        HGM: {
          line: "S5",
          dir: "Hegermühle"
        },
        STV: {
          line: "S5",
          dir: "Strausberg"
        },
        PEN: {
          line: "S5",
          dir: "Petershagen Nord"
        },
        FD: {
          line: "S5",
          dir: "Fredersdorf"
        },
        NG: {
          line: "S5",
          dir: "Neuenhagen"
        },
        HPG: {
          line: "S5",
          dir: "Hoppegarten"
        },
        BIS: {
          line: "S5",
          dir: "Birkenstein"
        },
        MDF: {
          line: "S5",
          dir: "Mahlsdorf"
        },
        KAD: {
          line: "S5",
          dir: "Kaulsdorf"
        },
        WT: {
          line: "S5",
          dir: "Wuhletal"
        },
        BDF: {
          line: "S5",
          dir: "Biesdorf"
        },
        FFO: {
          line: "S5",
          dir: "Friedrichsfelde Ost"
        },
        LI: {
          line: "S5",
          dir: "Lichtenberg"
        },
        NPL: {
          line: "S5",
          dir: "Nöldnerplatz"
        },
        OKS: {
          line: "S5",
          dir: "Ostkreuz"
        },
        WRS: {
          line: "S5",
          dir: "Warschauer Str"
        },
        OSB: {
          line: "S5",
          dir: "Ostbahnhof"
        },
        JB: {
          line: "S5",
          dir: "Jannowitzbrücke"
        },
        ALX: {
          line: "S5",
          dir: "Alexanderplatz"
        },
        HKM: {
          line: "S5",
          dir: "Hackescher Markt"
        },
        FST: {
          line: "S5",
          dir: "Friedrichstr"
        },
        HBF: {
          line: "S5",
          dir: "Hauptbahnhof"
        },
        BEV: {
          line: "S5",
          dir: "Bellevue"
        },
        TGN: {
          line: "S5",
          dir: "Tiergarten"
        },
        ZOS: {
          line: "S5",
          dir: "Zoologischer Garten"
        },
        SAP: {
          line: "S5",
          dir: "Savignyplatz"
        },
        CHS: {
          line: "S5",
          dir: "Charlottenburg"
        },
        WKS: {
          line: "S5",
          dir: "Westkreuz"
        },
        MS: {
          line: "S5",
          dir: "Messe Süd"
        },
        HST: {
          line: "S5",
          dir: "Heerstr"
        },
        OLS: {
          line: "S5",
          dir: "Olympiastadion"
        },
        GWD: {
          line: "S5",
          dir: "Grunewald"
        },
        NULL: {
          line: "S5",
          dir: null
        }
      };
    }
  }, {
    key: "addS7",
    value: function addS7() {
      this.S7 = {
        AF: {
          line: "S7",
          dir: "Ahrensfelde"
        },
        MEA: {
          line: "S7",
          dir: "Mehrower Allee"
        },
        RW: {
          line: "S7",
          dir: "Raoul-Wallenberg-Str"
        },
        MAZ: {
          line: "S7",
          dir: "Marzahn"
        },
        POE: {
          line: "S7",
          dir: "Poelchaustr"
        },
        SPH: {
          line: "S7",
          dir: "Springpfuhl"
        },
        FFO: {
          line: "S7",
          dir: "Friedrichsfelde Ost"
        },
        LI: {
          line: "S7",
          dir: "Lichtenberg"
        },
        NPL: {
          line: "S7",
          dir: "Nöldnerplatz"
        },
        OKS: {
          line: "S7",
          dir: "Ostkreuz"
        },
        WRS: {
          line: "S7",
          dir: "Warschauer Str"
        },
        OSB: {
          line: "S7",
          dir: "Ostbahnhof"
        },
        JB: {
          line: "S7",
          dir: "Jannowitzbrücke"
        },
        ALX: {
          line: "S7",
          dir: "Alexanderplatz"
        },
        HKM: {
          line: "S7",
          dir: "Hackescher Markt"
        },
        FST: {
          line: "S7",
          dir: "Friedrichstr"
        },
        HBF: {
          line: "S7",
          dir: "Hauptbahnhof"
        },
        BEV: {
          line: "S7",
          dir: "Bellevue"
        },
        TGN: {
          line: "S7",
          dir: "Tiergarten"
        },
        ZOS: {
          line: "S7",
          dir: "Zoologischer Garten"
        },
        SAP: {
          line: "S7",
          dir: "Savignyplatz"
        },
        CHS: {
          line: "S7",
          dir: "Charlottenburg"
        },
        WKS: {
          line: "S7",
          dir: "Westkreuz"
        },
        GWD: {
          line: "S7",
          dir: "Grunewald"
        },
        NIS: {
          line: "S7",
          dir: "Nikolassee"
        },
        WSS: {
          line: "S7",
          dir: "Wannsee"
        },
        GRI: {
          line: "S7",
          dir: "Griebnitzsee"
        },
        BAB: {
          line: "S7",
          dir: "Babelsberg"
        },
        PDH: {
          line: "S7",
          dir: "Potsdam"
        },
        NULL: {
          line: "S7",
          dir: null
        }
      };
    }
  }, {
    key: "addS75",
    value: function addS75() {
      this.S75 = {
        WAB: {
          line: "S75",
          dir: "Wartenberg"
        },
        HH: {
          line: "S75",
          dir: "Hohenschönhausen"
        },
        GSE: {
          line: "S75",
          dir: "Gehrenseestr"
        },
        SPH: {
          line: "S75",
          dir: "Springpfuhl"
        },
        FFO: {
          line: "S75",
          dir: "Friedrichsfelde Ost"
        },
        LI: {
          line: "S75",
          dir: "Lichtenberg"
        },
        NPL: {
          line: "S75",
          dir: "Nöldnerplatz"
        },
        OKS: {
          line: "S75",
          dir: "Ostkreuz"
        },
        WRS: {
          line: "S75",
          dir: "Warschauer Str"
        },
        OSB: {
          line: "S75",
          dir: "Ostbahnhof"
        },
        NULL: {
          line: "S75",
          dir: null
        }
      };
    }
  }, {
    key: "addS8",
    value: function addS8() {
      this.S8 = {
        ZTH: {
          line: "S8",
          dir: "Zeuthen"
        },
        EIW: {
          line: "S8",
          dir: "Eichwalde"
        },
        GAS: {
          line: "S8",
          dir: "Grünau"
        },
        ADL: {
          line: "S8",
          dir: "Adlershof"
        },
        SCF: {
          line: "S8",
          dir: "Betriebsbahnhof Schöneweide"
        },
        SW: {
          line: "S8",
          dir: "Schöneweide"
        },
        BMW: {
          line: "S8",
          dir: "Baumschulenweg"
        },
        PWA: {
          line: "S8",
          dir: "Plänterwald"
        },
        TP: {
          line: "S8",
          dir: "Treptower Park"
        },
        OK: {
          line: "S8",
          dir: "Ostkreuz"
        },
        FA: {
          line: "S8",
          dir: "Frankfurter Allee"
        },
        STO: {
          line: "S8",
          dir: "Storkower Str"
        },
        LST: {
          line: "S8",
          dir: "Landsberger Allee"
        },
        GSS: {
          line: "S8",
          dir: "Greifswalder Str"
        },
        PLA: {
          line: "S8",
          dir: "Prenzlauer Allee"
        },
        SAL: {
          line: "S8",
          dir: "Schönhauser Allee"
        },
        BOS: {
          line: "S8",
          dir: "Bornholmer Str"
        },
        PKW: {
          line: "S8",
          dir: "Pankow"
        },
        PHD: {
          line: "S8",
          dir: "Pankow-Heinersdorf"
        },
        BLB: {
          line: "S8",
          dir: "Blankenburg"
        },
        MM: {
          line: "S8",
          dir: "Mühlenbeck-Mönchmühle"
        },
        SNF: {
          line: "S8",
          dir: "Schönfließ"
        },
        BFE: {
          line: "S8",
          dir: "Bergfelde"
        },
        HN: {
          line: "S8",
          dir: "Hohen Neuendorf"
        },
        BIW: {
          line: "S8",
          dir: "Birkenwerder"
        },
        NULL: {
          line: "S8",
          dir: null
        }
      };
    }
  }, {
    key: "addS85",
    value: function addS85() {
      this.S85 = {
        GAS: {
          line: "S85",
          dir: "Grünau"
        },
        ADL: {
          line: "S85",
          dir: "Adlershof"
        },
        SCF: {
          line: "S85",
          dir: "Betriebsbahnhof Schöneweide"
        },
        SW: {
          line: "S85",
          dir: "Schöneweide"
        },
        BMW: {
          line: "S85",
          dir: "Baumschulenweg"
        },
        PWA: {
          line: "S85",
          dir: "Plänterwald"
        },
        TP: {
          line: "S85",
          dir: "Treptower Park"
        },
        OK: {
          line: "S85",
          dir: "Ostkreuz"
        },
        FA: {
          line: "S85",
          dir: "Frankfurter Allee"
        },
        STO: {
          line: "S85",
          dir: "Storkower Str"
        },
        LST: {
          line: "S85",
          dir: "Landsberger Allee"
        },
        GSS: {
          line: "S85",
          dir: "Greifswalder Str"
        },
        PLA: {
          line: "S85",
          dir: "Prenzlauer Allee"
        },
        SAL: {
          line: "S85",
          dir: "Schönhauser Allee"
        },
        BOS: {
          line: "S85",
          dir: "Bornholmer Str"
        },
        PKW: {
          line: "S85",
          dir: "Pankow"
        },
        GB: {
          line: "S85",
          dir: "Gesundbrunnen"
        },
        HUM: {
          line: "S85",
          dir: "Humboldthain"
        },
        NB: {
          line: "S85",
          dir: "Nordbahnhof"
        },
        NULL: {
          line: "S85",
          dir: null
        }
      };
    }
  }, {
    key: "addS9",
    value: function addS9() {
      this.S9 = {
        FLH: {
          line: "S9",
          dir: "Flughafen Berlin-Schönefeld"
        },
        GBA: {
          line: "S9",
          dir: "Grünbergallee"
        },
        AGL: {
          line: "S9",
          dir: "Altglienicke"
        },
        GAS: {
          line: "S9",
          dir: "Grünau"
        },
        ADL: {
          line: "S9",
          dir: "Adlershof"
        },
        SCF: {
          line: "S9",
          dir: "Betriebsbahnhof Schöneweide"
        },
        SW: {
          line: "S9",
          dir: "Schöneweide"
        },
        BMW: {
          line: "S9",
          dir: "Baumschulenweg"
        },
        PWA: {
          line: "S9",
          dir: "Plänterwald"
        },
        TP: {
          line: "S9",
          dir: "Treptower Park"
        },
        WRS: {
          line: "S9",
          dir: "Warschauer Str"
        },
        OSB: {
          line: "S9",
          dir: "Ostbahnhof"
        },
        JB: {
          line: "S9",
          dir: "Jannowitzbrücke"
        },
        ALX: {
          line: "S9",
          dir: "Alexanderplatz"
        },
        HKM: {
          line: "S9",
          dir: "Hackescher Markt"
        },
        FST: {
          line: "S9",
          dir: "Friedrichstr"
        },
        HBF: {
          line: "S9",
          dir: "Hauptbahnhof"
        },
        BEV: {
          line: "S9",
          dir: "Bellevue"
        },
        TGN: {
          line: "S9",
          dir: "Tiergarten"
        },
        ZOS: {
          line: "S9",
          dir: "Zoologischer Garten"
        },
        SAP: {
          line: "S9",
          dir: "Savignyplatz"
        },
        CHS: {
          line: "S9",
          dir: "Charlottenburg"
        },
        WKS: {
          line: "S9",
          dir: "Westkreuz"
        },
        GWD: {
          line: "S9",
          dir: "Grunewald"
        },
        MS: {
          line: "S9",
          dir: "Messe Süd"
        },
        HST: {
          line: "S9",
          dir: "Heerstr"
        },
        OLS: {
          line: "S9",
          dir: "Olympiastadion"
        },
        PIC: {
          line: "S9",
          dir: "Pichelsberg"
        },
        SRW: {
          line: "S9",
          dir: "Stresow"
        },
        SPA: {
          line: "S9",
          dir: "Spandau"
        },
        OKS: {
          line: "S9",
          dir: "Ostkreuz"
        },
        NPL: {
          line: "S9",
          dir: "Nöldnerplatz"
        },
        LI: {
          line: "S9",
          dir: "Lichtenberg"
        },
        NULL: {
          line: "S9",
          dir: null
        }
      };
    }
  }, {
    key: "addU1",
    value: function addU1() {
      this.U1 = {
        U: {
          line: "U1",
          dir: "Uhlandstr"
        },
        Kfo: {
          line: "U1",
          dir: "Kurfürstendamm"
        },
        Wt: {
          line: "U1",
          dir: "Wittenbergplatz"
        },
        N: {
          line: "U1",
          dir: "Nollendorfplatz"
        },
        Kus: {
          line: "U1",
          dir: "Kurfürstenstr"
        },
        Go: {
          line: "U1",
          dir: "Gleisdreieck"
        },
        Mo: {
          line: "U1",
          dir: "Mehringdamm"
        },
        Ho: {
          line: "U1",
          dir: "Hallesches Tor"
        },
        Pr: {
          line: "U1",
          dir: "Prinzenstr"
        },
        Kbo: {
          line: "U1",
          dir: "Kottbusser Tor"
        },
        Gr: {
          line: "U1",
          dir: "Görlitzer Bahnhof"
        },
        S: {
          line: "U1",
          dir: "Schlesisches Tor"
        },
        WA: {
          line: "U1",
          dir: "Warschauer Str"
        },
        NULL: {
          line: "U1",
          dir: null
        }
      };
    }
  }, {
    key: "addU2",
    value: function addU2() {
      this.U2 = {
        PA: {
          line: "U2",
          dir: "Pankow"
        },
        VIN: {
          line: "U2",
          dir: "Vinetastr"
        },
        Sh: {
          line: "U2",
          dir: "Schönhauser Allee"
        },
        EB: {
          line: "U2",
          dir: "Eberswalder Str"
        },
        Sz: {
          line: "U2",
          dir: "Senefelderplatz"
        },
        Lu: {
          line: "U2",
          dir: "Rosa-Luxemburg-Platz"
        },
        A: {
          line: "U2",
          dir: "Alexanderplatz"
        },
        Ko: {
          line: "U2",
          dir: "Klosterstr"
        },
        Mk: {
          line: "U2",
          dir: "Märkisches Museum"
        },
        Sp: {
          line: "U2",
          dir: "Spittelmarkt"
        },
        Hv: {
          line: "U2",
          dir: "Hausvogteiplatz"
        },
        Mi: {
          line: "U2",
          dir: "Stadtmitte"
        },
        MH: {
          line: "U2",
          dir: "Mohrenstr"
        },
        Pd: {
          line: "U2",
          dir: "Potsdamer Platz"
        },
        MB: {
          line: "U2",
          dir: "Mendelssohn-Bartholdy-Park"
        },
        Gu: {
          line: "U2",
          dir: "Gleisdreieck"
        },
        BS: {
          line: "U2",
          dir: "Bülowstr"
        },
        No: {
          line: "U2",
          dir: "Nollendorfplatz"
        },
        Wt: {
          line: "U2",
          dir: "Wittenbergplatz"
        },
        Zo: {
          line: "U2",
          dir: "Zoologischer Garten"
        },
        RP: {
          line: "U2",
          dir: "Ernst-Reuter-Platz"
        },
        Obi: {
          line: "U2",
          dir: "Deutsche Oper"
        },
        Bmo: {
          line: "U2",
          dir: "Bismarckstr"
        },
        So: {
          line: "U2",
          dir: "Sophie-Charlotte-Platz"
        },
        Kd: {
          line: "U2",
          dir: "Kaiserdamm"
        },
        Th: {
          line: "U2",
          dir: "Theodor-Heuss-Platz"
        },
        Nd: {
          line: "U2",
          dir: "Neu-Westend"
        },
        Sd: {
          line: "U2",
          dir: "Olympia-Stadion"
        },
        Rl: {
          line: "U2",
          dir: "Ruhleben"
        },
        Au: {
          line: "U2",
          dir: "Augsburger Str"
        },
        Sno: {
          line: "U2",
          dir: "Spichernstr"
        },
        Hz: {
          line: "U2",
          dir: "Hohenzollernplatz"
        },
        Fpo: {
          line: "U2",
          dir: "Fehrbelliner Platz"
        },
        NULL: {
          line: "U2",
          dir: null
        }
      };
    }
  }, {
    key: "addU3",
    value: function addU3() {
      this.U3 = {
        K: {
          line: "U3",
          dir: "Krumme Lanke"
        },
        Ot: {
          line: "U3",
          dir: "Onkel Toms Hütte"
        },
        Os: {
          line: "U3",
          dir: "Oskar-Helene-Heim"
        },
        T: {
          line: "U3",
          dir: "Freie Universität"
        },
        Dd: {
          line: "U3",
          dir: "Dahlem-Dorf"
        },
        Po: {
          line: "U3",
          dir: "Podbielskiallee"
        },
        Bt: {
          line: "U3",
          dir: "Breitenbachplatz"
        },
        Rd: {
          line: "U3",
          dir: "Rüdesheimer Platz"
        },
        Hb: {
          line: "U3",
          dir: "Heidelberger Platz"
        },
        Fpo: {
          line: "U3",
          dir: "Fehrbelliner Platz"
        },
        Hz: {
          line: "U3",
          dir: "Hohenzollernplatz"
        },
        Sno: {
          line: "U3",
          dir: "Spichernstr"
        },
        Au: {
          line: "U3",
          dir: "Augsburger Str"
        },
        Wt: {
          line: "U3",
          dir: "Wittenbergplatz"
        },
        N: {
          line: "U3",
          dir: "Nollendorfplatz"
        },
        Kus: {
          line: "U3",
          dir: "Kurfürstenstr"
        },
        Go: {
          line: "U3",
          dir: "Gleisdreieck"
        },
        Mo: {
          line: "U3",
          dir: "Möckernbrücke"
        },
        Ho: {
          line: "U3",
          dir: "Hallesches Tor"
        },
        Pr: {
          line: "U3",
          dir: "Prinzenstr"
        },
        Kbo: {
          line: "U3",
          dir: "Kottbusser Tor"
        },
        Gr: {
          line: "U3",
          dir: "Görlitzer Bahnhof"
        },
        S: {
          line: "U3",
          dir: "Schlesisches Tor"
        },
        WA: {
          line: "U3",
          dir: "Warschauer Str"
        },
        NULL: {
          line: "U3",
          dir: null
        }
      };
    }
  }, {
    key: "addU4",
    value: function addU4() {
      this.addU4 = {
        Nm: {
          line: "U4",
          dir: "Nollendorfplatz"
        },
        V: {
          line: "U4",
          dir: "Viktoria-Luise-Platz"
        },
        Bpo: {
          line: "U4",
          dir: "Bayerischer Platz"
        },
        RS: {
          line: "U4",
          dir: "Rathaus Schöneberg"
        },
        Ip: {
          line: "U4",
          dir: "Innsbrucker Platz"
        },
        NULL: {
          line: "U4",
          dir: null
        }
      };
    }
  }, {
    key: "addU5",
    value: function addU5() {
      this.U5 = {
        Hö: {
          line: "U5",
          dir: "Hönow"
        },
        LL: {
          line: "U5",
          dir: "Louis-Lewin-Str"
        },
        HD: {
          line: "U5",
          dir: "Hellersdorf"
        },
        C: {
          line: "U5",
          dir: "Cottbusser Platz"
        },
        GK: {
          line: "U5",
          dir: "Kienberg"
        },
        KL: {
          line: "U5",
          dir: "Kaulsdorf-Nord"
        },
        Wh: {
          line: "U5",
          dir: "Wuhletal"
        },
        E: {
          line: "U5",
          dir: "Elsterwerdaer Platz"
        },
        Bü: {
          line: "U5",
          dir: "Biesdorf-Süd"
        },
        Tk: {
          line: "U5",
          dir: "Tierpark"
        },
        Fi: {
          line: "U5",
          dir: "Friedrichsfelde"
        },
        Li: {
          line: "U5",
          dir: "Lichtenberg"
        },
        Md: {
          line: "U5",
          dir: "Magdalenenstr"
        },
        Ff: {
          line: "U5",
          dir: "Frankfurter Allee"
        },
        Sa: {
          line: "U5",
          dir: "Samariterstr"
        },
        FT: {
          line: "U5",
          dir: "Frankfurter Tor"
        },
        WR: {
          line: "U5",
          dir: "Weberwiese"
        },
        Sr: {
          line: "U5",
          dir: "Strausberger Platz"
        },
        Si: {
          line: "U5",
          dir: "Schillingstr"
        },
        Al: {
          line: "U5",
          dir: "Alexanderplatz"
        },
        NULL: {
          line: "U5",
          dir: null
        }
      };
    }
  }, {
    key: "addU55",
    value: function addU55() {
      this.U55 = {
        HBF: {
          line: "U55",
          dir: "Hauptbahnhof"
        },
        BUN: {
          line: "U55",
          dir: "Bundestag"
        },
        BRT: {
          line: "U55",
          dir: "Brandenburger Tor"
        },
        NULL: {
          line: "U55",
          dir: null
        }
      };
    }
  }, {
    key: "addU6",
    value: function addU6() {
      this.U6 = {
        Tg: {
          line: "U6",
          dir: "Alt-Tegel"
        },
        Bk: {
          line: "U6",
          dir: "Borsigwerke"
        },
        Hh: {
          line: "U6",
          dir: "Holzhauser Str"
        },
        OTI: {
          line: "U6",
          dir: "Otisstr"
        },
        Scha: {
          line: "U6",
          dir: "Scharnweberstr"
        },
        Sch: {
          line: "U6",
          dir: "Kurt-Schumacher-Platz"
        },
        Afr: {
          line: "U6",
          dir: "Afrikanische Str"
        },
        Rb: {
          line: "U6",
          dir: "Rehberge"
        },
        Se: {
          line: "U6",
          dir: "Seestr"
        },
        Lpo: {
          line: "U6",
          dir: "Leopoldplatz"
        },
        We: {
          line: "U6",
          dir: "Wedding"
        },
        Ri: {
          line: "U6",
          dir: "Reinickendorfer Str"
        },
        SK: {
          line: "U6",
          dir: "Schwartzkopffstr"
        },
        NA: {
          line: "U6",
          dir: "Naturkundemuseum"
        },
        Ob: {
          line: "U6",
          dir: "Oranienburger Tor"
        },
        F: {
          line: "U6",
          dir: "Friedrichstr"
        },
        Fr: {
          line: "U6",
          dir: "Französische Str"
        },
        Mic: {
          line: "U6",
          dir: "Stadtmitte"
        },
        Ks: {
          line: "U6",
          dir: "Kochstr"
        },
        Hu: {
          line: "U6",
          dir: "Hallesches Tor"
        },
        Me: {
          line: "U6",
          dir: "Mehringdamm"
        },
        PL: {
          line: "U6",
          dir: "Platz der Luftbrücke"
        },
        Ps: {
          line: "U6",
          dir: "Paradestr"
        },
        Ts: {
          line: "U6",
          dir: "Tempelhof"
        },
        At: {
          line: "U6",
          dir: "Alt-Tempelhof"
        },
        Ka: {
          line: "U6",
          dir: "Kaiserin-Augusta-Str"
        },
        Ull: {
          line: "U6",
          dir: "Ullsteinstr"
        },
        Wl: {
          line: "U6",
          dir: "Westphalweg"
        },
        Mf: {
          line: "U6",
          dir: "Alt-Mariendorf"
        },
        NULL: {
          line: "U6",
          dir: null
        }
      };
    }
  }, {
    key: "addU7",
    value: function addU7() {
      this.U7 = {
        R: {
          line: "U7",
          dir: "Rudow"
        },
        Zd: {
          line: "U7",
          dir: "Zwickauer Damm"
        },
        Wk: {
          line: "U7",
          dir: "Wutzkyallee"
        },
        La: {
          line: "U7",
          dir: "Lipschitzallee"
        },
        Jt: {
          line: "U7",
          dir: "Johannisthaler Chaussee"
        },
        Br: {
          line: "U7",
          dir: "Britz-Süd"
        },
        Pi: {
          line: "U7",
          dir: "Parchimer Allee"
        },
        Bl: {
          line: "U7",
          dir: "Blaschkoallee"
        },
        Gz: {
          line: "U7",
          dir: "Grenzallee"
        },
        Nk: {
          line: "U7",
          dir: "Neukölln"
        },
        KM: {
          line: "U7",
          dir: "Karl-Marx-Allee"
        },
        Rk: {
          line: "U7",
          dir: "Rathaus Neukölln"
        },
        Hpu: {
          line: "U7",
          dir: "Hermannplatz"
        },
        Sü: {
          line: "U7",
          dir: "Südstern"
        },
        Gs: {
          line: "U7",
          dir: "Gneisenaustr"
        },
        Me: {
          line: "U7",
          dir: "Mehringdamm"
        },
        Mu: {
          line: "U7",
          dir: "Möckernbrücke"
        },
        Y: {
          line: "U7",
          dir: "Yorckstr"
        },
        Kt: {
          line: "U7",
          dir: "Kleistpark"
        },
        Ei: {
          line: "U7",
          dir: "Eisenacher Str"
        },
        Bpu: {
          line: "U7",
          dir: "Bayerischer Platz"
        },
        Beu: {
          line: "U7",
          dir: "Berliner Str"
        },
        Bli: {
          line: "U7",
          dir: "Blissestr"
        },
        Fpu: {
          line: "U7",
          dir: "Fehrbelliner Platz"
        },
        Kn: {
          line: "U7",
          dir: "Konstanzer Str"
        },
        Ad: {
          line: "U7",
          dir: "Adenauerplatz"
        },
        Wd: {
          line: "U7",
          dir: "Wilmersdorfer Str"
        },
        Bmu: {
          line: "U7",
          dir: "Bismarckstr"
        },
        Rw: {
          line: "U7",
          dir: "Richard-Wagner-Platz"
        },
        Mp: {
          line: "U7",
          dir: "Mierendorffplatz"
        },
        Jh: {
          line: "U7",
          dir: "Jungfernheide"
        },
        JK: {
          line: "U7",
          dir: "Jakob-Kaiser-Platz"
        },
        Hl: {
          line: "U7",
          dir: "Halemweg"
        },
        Sie: {
          line: "U7",
          dir: "Siemensdamm"
        },
        Rm: {
          line: "U7",
          dir: "Rohrdamm"
        },
        P: {
          line: "U7",
          dir: "Paulsternstr"
        },
        Hs: {
          line: "U7",
          dir: "Haselhorst"
        },
        Zi: {
          line: "U7",
          dir: "Zitadelle"
        },
        AS: {
          line: "U7",
          dir: "Altstadt Spandau"
        },
        RSp: {
          line: "U7",
          dir: "Rathaus Spandau"
        },
        NULL: {
          line: "U7",
          dir: null
        }
      };
    }
  }, {
    key: "addU8",
    value: function addU8() {
      this.U8 = {
        WIU: {
          line: "U8",
          dir: "Wittenau"
        },
        RR: {
          line: "U8",
          dir: "Rathaus Reinickendorf"
        },
        KB: {
          line: "U8",
          dir: "Karl-Bonhoeffer-Nervenklinik"
        },
        LD: {
          line: "U8",
          dir: "Lindauer Allee"
        },
        PB: {
          line: "U8",
          dir: "Paracelsus-Bad"
        },
        RE: {
          line: "U8",
          dir: "Residenzstr"
        },
        FN: {
          line: "U8",
          dir: "Franz-Neumann-Platz"
        },
        Olu: {
          line: "U8",
          dir: "Osloer Str"
        },
        Pk: {
          line: "U8",
          dir: "Pankstr"
        },
        Gb: {
          line: "U8",
          dir: "Gesundbrunnen"
        },
        Vo: {
          line: "U8",
          dir: "Voltastr"
        },
        B: {
          line: "U8",
          dir: "Bernauer Str"
        },
        Ro: {
          line: "U8",
          dir: "Rosenthaler Platz"
        },
        W: {
          line: "U8",
          dir: "Weinmeisterstr"
        },
        Ap: {
          line: "U8",
          dir: "Alexanderplatz"
        },
        Jb: {
          line: "U8",
          dir: "Jannowitzbrücke"
        },
        He: {
          line: "U8",
          dir: "Heinrich-Heine-Str"
        },
        Mr: {
          line: "U8",
          dir: "Moritzplatz"
        },
        Kbu: {
          line: "U8",
          dir: "Kottbusser Tor"
        },
        ST: {
          line: "U8",
          dir: "Schönleinstr"
        },
        Hpo: {
          line: "U8",
          dir: "Hermannplatz"
        },
        Bo: {
          line: "U8",
          dir: "Boddinstr"
        },
        L: {
          line: "U8",
          dir: "Leinestr"
        },
        HMS: {
          line: "U8",
          dir: "Hermannstr"
        },
        NULL: {
          line: "U8",
          dir: null
        }
      };
    }
  }, {
    key: "addU9",
    value: function addU9() {
      this.U9 = {
        Olo: {
          line: "U9",
          dir: "Osloer Str"
        },
        Np: {
          line: "U9",
          dir: "Nauener Platz"
        },
        Lpu: {
          line: "U9",
          dir: "Leopoldplatz"
        },
        Am: {
          line: "U9",
          dir: "Amrumer Str"
        },
        WF: {
          line: "U9",
          dir: "Westhafen"
        },
        Bi: {
          line: "U9",
          dir: "Birkenstr"
        },
        Tm: {
          line: "U9",
          dir: "Turmstr"
        },
        Ha: {
          line: "U9",
          dir: "Hansaplatz"
        },
        Zu: {
          line: "U9",
          dir: "Zoologischer Garten"
        },
        Kfu: {
          line: "U9",
          dir: "Kurfürstendamm"
        },
        Snu: {
          line: "U9",
          dir: "Spichernstr"
        },
        Gt: {
          line: "U9",
          dir: "Güntzelstr"
        },
        Beo: {
          line: "U9",
          dir: "Berliner Str"
        },
        Bd: {
          line: "U9",
          dir: "Bundesplatz"
        },
        Fw: {
          line: "U9",
          dir: "Friedrich-Wilhelm-Platz"
        },
        Wsg: {
          line: "U9",
          dir: "Walther-Schreiber-Platz"
        },
        Sl: {
          line: "U9",
          dir: "Schloßstr"
        },
        Rzu: {
          line: "U9",
          dir: "Rathaus Steglitz"
        },
        NULL: {
          line: "U9",
          dir: null
        }
      };
    }
  }, {
    key: "checkBarrier",
    value: function checkBarrier(array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].code == "bf") {
          return "<span class=\"fas fa-wheelchair\" title=\"barrier-free\">&nbsp;</span>";
        }
      }

      return "";
    }
  }, {
    key: "checkBike",
    value: function checkBike(array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].code == "FB") {
          return "<span class=\"fas fa-bicycle\" title=\"You can take your bike with you.\">&nbsp;</span>";
        }
      }

      return "";
    }
  }, {
    key: "checkState",
    value: function checkState(array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].type == "status") {
          return "<span class=\"fas fa-times\" title=\"".concat(array[i].text, "\">&nbsp;</span>");
        }
      }

      return "";
    }
  }, {
    key: "checkWarning",
    value: function checkWarning(array) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].type == "warning") {
          return "<span class=\"fas fa-exclamation-triangle\" title=\"".concat(array[i].validFrom, " - ").concat(array[i].validUntil, ": ").concat(array[i].summary, ", ").concat(array[i].text, "\">&nbsp;</span>");
        }
      }

      return "";
    }
  }, {
    key: "evalData",
    value: function evalData(array, index) {
      var _this2 = this;

      if (array.length > 0) {
        var header = document.createElement("h2");
        header.innerHTML = "Abfahrten ab ".concat(array[0].stop.name);
        this.container.appendChild(header);
        this.filter[index].forEach(function (filterSet) {
          var subheader_ident = true;

          for (var i = 0; i < array.length; i++) {
            var identifier = false;

            for (var j = 0; j < filterSet.length; j++) {
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
                var subheader = document.createElement("h3");
                subheader.innerHTML = "Richtung ".concat(array[i].direction);

                _this2.container.appendChild(subheader);

                subheader_ident = false;
              }

              var planTime = void 0,
                  realTime = void 0,
                  delay = void 0;

              if (array[i].when != null && array[i].delay != null) {
                realTime = array[i].when.substr(11, 5);
                delay = Math.floor(array[i].delay / 60);
                planTime = _this2.getPlanTime(realTime, delay);
              } else if (array[i].when != null) {
                planTime = array[i].when.substr(11, 5);
                delay = "?";
                realTime = "";
              } else {
                realTime = "Ausfall";
                delay = "X";
                planTime = array[i].formerScheduledWhen.substr(11, 5);
              }

              var line = array[i].line.name;

              var mean = _this2.getMean(line);

              var target = array[i].direction;
              var remarks = array[i].remarks;

              var barrier = _this2.checkBarrier(remarks);

              var bike = _this2.checkBike(remarks);

              var warning = _this2.checkWarning(remarks);

              var state = _this2.checkState(remarks);

              var row = document.createElement("div");
              row.className = "row";
              row.innerHTML = "\n            <div class=\"planTime\">".concat(planTime, "</div>\n            <div class=\"realTime\">").concat(realTime, "</div>\n            <div class=\"delay\">").concat(delay, "</div>\n            <div class=\"transport\">").concat(mean, "</div>\n            <div class=\"line\">").concat(line, "</div>\n            <div class=\"direction\">").concat(target, "</div>\n            <div class=\"barrier\">").concat(barrier, "</div>\n            <div class=\"bike\">").concat(bike, "</div>\n            <div class=\"warning\">").concat(warning, "</div>\n            <div class=\"status\">").concat(state, "</div>\n            ");

              _this2.container.appendChild(row);
            }
          }
        });
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this3 = this;

      this.stop.forEach(function (stop, index) {
        var url = "https://1.bvg.transport.rest/stations/".concat(stop, "/departures?duration=60&includeRelatedStations=false");
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this3.evalData(data, index);
        }).catch(function (err) {
          return console.log(err);
        });
      });
    }
  }, {
    key: "getMean",
    value: function getMean(line) {
      switch (true) {
        case /^ICE/.test(line):
          return "<span class=\"fas fa-train\" title=\"Intercity Express train\">&nbsp;</span>";
          break;

        case /^IC/.test(line):
          return "<span class=\"fas fa-train\" title=\"Intercity train\">&nbsp;</span>";
          break;

        case /^EC/.test(line):
          return "<span class=\"fas fa-train\" title=\"Eurocity train\">&nbsp;</span>";
          break;

        case /^RJ/.test(line):
          return "<span class=\"fas fa-train\" title=\"Austrian Railjet train\">&nbsp;</span>";
          break;

        case /^EN/.test(line):
          return "<span class=\"fas fa-train\" title=\"EuroNight train\">&nbsp;</span>";
          break;

        case /^NJ/.test(line):
          return "<span class=\"fas fa-train\" title=\"Austrian NightJet train\">&nbsp;</span>";
          break;

        case /^TGV/.test(line):
          return "<span class=\"fas fa-train\" title=\"French Train &#224; grande vitesse\">&nbsp;</span>";
          break;

        case /^THA/.test(line):
          return "<span class=\"fas fa-train\" title=\"European Thalys train\">&nbsp;</span>";
          break;

        case /^FLX/.test(line):
          return "<span class=\"fas fa-train\" title=\"FlixTrain\">&nbsp;</span>";
          break;

        case /^HBX/.test(line):
          return "<span class=\"fas fa-train\" title=\"Harz-Berlin Express train\">&nbsp;</span>";
          break;

        case /^IRE/.test(line):
          return "<span class=\"fas fa-train\" title=\"InterRegio Express train\">&nbsp;</span>";
          break;

        case /^RE/.test(line):
          return "<span class=\"fas fa-train\" title=\"Regional Express train\">&nbsp;</span>";
          break;

        case /^RB/.test(line):
          return "<span class=\"fas fa-train\" title=\"Regional train\">&nbsp;</span>";
          break;

        case /^S/.test(line):
          return "<span class=\"fas fa-subway\" title=\"suburban railway (S-Bahn)\">&nbsp;</span>";

        case /^U/.test(line):
          return "<span class=\"fas fa-subway\" title=\"underground (U-Bahn)\">&nbsp;</span>";
          break;

        case /^M(1|2|4|5|6|8)$/.test(line):
        case /^M1(0|3|7)$/.test(line):
        case /^[1-9][0-9]$/.test(line):
          return "<span class=\"fas fa-tram\" title=\"tramway\">&nbsp;</span>";
          break;

        case /^F/.test(line):
          return "<span class=\"fas fa-ship\" title=\"ferry\">&nbsp;</span>";
          break;

        case /^[1-9][0-9]{2}$/.test(line):
        case /^M(11|19|21|27|29|32|37|41|44|45|46|48|49|76|77|82|85)$/.test(line):
        case /^X[0-9]{1,2}$/.test(line):
        case /^N[0-9]{1,2}$/.test(line):
        case /^TXL$/.test(line):
          return "<span class=\"fas fa-bus\" title=\"bus\">&nbsp;</span>";
          break;
      }
    }
  }, {
    key: "getPlanTime",
    value: function getPlanTime(realtime, delay) {
      var hours = Number(realtime.substr(0, 2));
      var minutes = Number(realtime.substr(3, 2));
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

      var hourString = hours < 10 ? "0".concat(hours) : "".concat(hours);
      var minuteString = minutes < 10 ? "0".concat(minutes) : "".concat(minutes);
      return "".concat(hourString, ":").concat(minuteString);
    }
  }, {
    key: "filter",
    get: function get() {
      return this._filter;
    },
    set: function set(newFilter) {
      this._filter = newFilter;
    }
  }, {
    key: "neighboring",
    get: function get() {
      return this._neighboring;
    },
    set: function set(newValue) {
      this._neighboring = newValue;
    }
  }, {
    key: "stop",
    get: function get() {
      return this._stop;
    },
    set: function set(newStop) {
      this._stop = newStop;
    }
  }]);

  return Station;
}();

var jov = new Station([900000160541], [[[{
  line: "240",
  dir: "Storkower"
}], [{
  line: "N50",
  dir: "Hugenottenplatz"
}, {
  line: "N50",
  dir: "Betriebshof Indira-Gandhi-Str"
}, {
  line: "N50",
  dir: "Pankow"
}], [{
  line: "240",
  dir: "Ostbahnhof"
}, {
  line: "240",
  dir: "Betriebshof Lichtenberg"
}], [{
  line: "N50",
  dir: "Tierpark"
}, {
  line: "N50",
  dir: "Betriebshof Lichtenberg"
}]]]);

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map