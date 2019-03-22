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
          case "BALX":
            _this.stop = [900000100003, 900000100703, 900000100704, 900000100705, 900000100708, 900000100024, 900000100026, 900000100712, 900000100711, 900000100031, 900000100005, 900000100707, 900000100030];
            _this.filter = [[_this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"), _this.getTerminus("RE2", "Wismar", "Bad Kleinen", "Schwerin", "Wittenberge"), _this.getTerminus("RE7", "Dessau", "Bad Belzig"), _this.getTerminus("RB14", "Nauen"), _this.getTerminus("RE1", "Cottbus", "Eisenhüttenstadt", "Frankfurt"), _this.getTerminus("RE2", "Cottbus"), _this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"), _this.getTerminus("RB14", "Schönefeld"), _this.getStation(_this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM"), _this.getStation(_this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM"), _this.getStation(_this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM"), _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM"), _this.getStation(_this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB"), _this.getStation(_this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB"), _this.getStation(_this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB"), _this.getStation(_this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB")], [_this.getStation(_this.U2, "PA", "VIN", "Sh", "EB", "Sz", "Lu"), _this.getStation(_this.U2, "Fpo", "Hz", "Sno", "Au", "Rl", "Sd", "Nd", "Th", "Kd", "So", "Bmo", "Obi", "RP", "Zo", "Wt", "No", "BS", "Gu", "MB", "Pd", "MH", "Mi", "Hv", "Sp", "Mk", "Ko")], [[_this.U5.NULL]], [_this.getStation(_this.U8, "WIU", "RR", "KB", "LD", "RE", "FN", "Olu", "Pk", "Gb", "Vo", "B", "Ro", "W"), _this.getStation(_this.U8, "HMS", "L", "Bo", "Hpo", "ST", "Kbu", "Mr", "He", "Jb")], [_this.getTerminus("M48", "Busseallee", "Zehlendorf Eiche", "Rathaus Steglitz", "Potsdamer Platz"), _this.getTerminus("TXL", "Flughafen Tegel"), _this.getTerminus("100", "Zoologischer Garten"), _this.getTerminus("200", "Zoologischer Garten", "Unter den Linden/Friedrichstr"), _this.getTerminus("N5", "Hackescher Markt")], [_this.getTerminus("M2", null)], [_this.getTerminus("M4", "Hackescher Markt"), _this.getTerminus("M5", "Hauptbahnhof", "Hackescher Markt"), _this.getTerminus("M6", "Hackescher Markt"), _this.getTerminus("M4", "Falkenberg", "Zingster Str", "Sulzfelder Str"), _this.getTerminus("M5", "Zingster Str"), _this.getTerminus("M6", "Riesaer Str", "Betriebshof Marzahn", "Marzahn")], [_this.getTerminus("248", "Warschauer Str", "Ostbahnhof")], [_this.getTerminus("248", "Breitenbachplatz", "Südkreuz", "Hallesches Tor")], [_this.getTerminus("TXL", "Flughafen Tegel"), _this.getTerminus("100", "Zoologischer Garten"), _this.getTerminus("200", "Zoologischer Garten", "Unter den Linden/Friedrichstr"), _this.getTerminus("N2", "Zoologischer Garten"), _this.getTerminus("N5", "Hackescher Markt"), _this.getTerminus("N42", "Theodor-Heuss-Platz"), _this.getTerminus("TXL", "Memhardstr"), _this.getTerminus("200", "Michelangelostr")], [_this.getTerminus("M4", "Hackescher Markt"), _this.getTerminus("M5", "Hauptbahnhof", "Hackescher Markt"), _this.getTerminus("M6", "Hackescher Markt"), _this.getTerminus("M4", "Falkenberg", "Zingster Str", "Sulzfelder Str"), _this.getTerminus("M5", "Zingster Str"), _this.getTerminus("M6", "Riesaer Str", "Betriebshof Marzahn", "Marzahn")], [_this.getTerminus("N5", "Hackescher Markt"), _this.getTerminus("N5", "Riesaer Str", "Wuhletal"), _this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")], [_this.getTerminus("M2", "Alexanderplatz"), _this.getTerminus("M2", "Heinersdorf", "Am Steinberg"), _this.getTerminus("N65", "Hackescher Markt")]];
            break;

          case "BBEU":
            _this.stop = [900000020202];
            _this.filter = [[[_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN", "WES", "JUN"), _this.getTerminus("TXL", "Flughafen Tegel"), _this.getTerminus("106", "Seestr"), _this.getTerminus("123", "Mäckeritzwiesen", "Goebelplatz"), _this.getTerminus("N26", "Seestr"), _this.getTerminus("TXL", "Alexanderplatz", "Hauptbahnhof"), _this.getTerminus("106", "Lindenhof", "Südkreuz", "Kurfüstenstr"), _this.getTerminus("123", "Hauptbahnhof"), _this.getTerminus("N26", "Zoologischer Garten")]];
            break;

          case "BBUP":
            _this.stop = [900000044202];
            _this.filter = [[[_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP"), _this.getStation(_this.U9, "Olo", "Np", "Lpu", "Am", "WF", "Bi", "Tm", "Ha", "Zu", "Kfu", "Snu", "Gt", "Beo"), _this.getStation(_this.U9, "Rzu", "Sl", "Wsg", "Fw"), _this.getTerminus("248", "Warschauer Str", "Ostbahnhof", "Alexanderplatz", "Südkreuz"), _this.getTerminus("N9", "Osloer Str", "Zoologischer Garten"), _this.getTerminus("248", "Breitenbachplatz"), _this.getTerminus("N9", "Rathaus Steglitz")]];
            break;

          case "BFA":
            _this.stop = [900000120001];
            _this.filter = [[[_this.S41], _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK"), [_this.S42], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO"), _this.getStation(_this.U5, "Hö", "LL", "HD", "C", "GK", "KL", "Wh", "E", "Bü", "Tk", "Fi", "Li", "Md"), _this.getStation(_this.U5, "Al", "Si", "Sr", "WR", "FT", "Sa"), _this.getTerminus("M13", "Virchow-Klinikum", "Björnsonstr", "Betriebshof Indira-Gandhi-Str", "Degnerstr", "Betriebshof Lichtenberg"), _this.getTerminus("16", "Ahrensfelde/Stadtgrenze"), _this.getTerminus("M13", "S Warschauer Str", "Scharnweberstr./Weichselstr"), _this.getTerminus("16", "Scharnweberstr./Weichselstr"), _this.getTerminus("N5", "Riesaer Str", "Wuhletal"), _this.getTerminus("N5", "Hackescher Markt")]];
            break;

          case "BGB":
            _this.stop = [900000007102];
            _this.filter = [[_this.getTerminus("RE3", "Schwedt", "Stralsund", "Prenzlau", "Angermünde", "Eberswalde"), _this.getTerminus("RE5", "Rostock", "Stralsund"), _this.getTerminus("RB54", "Rheinsberg"), _this.getTerminus("RE66", null), _this.getTerminus("RB27", null), _this.getTerminus("RE3", "Wittenberg", "Falkenberg", "Halle"), _this.getTerminus("RE5", "Elsterwerda", "Wünsdorf-Waldstadt"), _this.getTerminus("RE6", null), _this.getTerminus("RB54", "Lichtenberg"), _this.getStation(_this.S1, "ORB", "LEN", "BOR", "BIW", "HN", "FOH", "HED", "WAI", "WIN", "WM", "SNH", "WOK", "BOS"), _this.getStation(_this.S2, "BER", "BRF", "ZEP", "RGT", "BU", "KRW", "BLB", "PHD", "PKW", "BOS"), _this.getStation(_this.S25, "HD", "HLS", "SZF", "TG", "EBD", "KBO", "ARF", "SNH", "WOK", "BOS"), _this.getStation(_this.S26, "WAI", "WIN", "WM", "SNH", "WOK", "BOS"), [_this.S41], _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS", "PLA", "SAL"), _this.getStation(_this.S1, "PDH", "BAB", "GRI", "WSS", "NIW", "SLS", "MEX", "ZD", "SDG", "LWE", "BGT", "RST", "FB", "FRU", "SGV", "JLB", "YOR", "AHU", "POP", "TOR", "FSTT", "ORS", "NB", "HUM"), _this.getStation(_this.S2, "BFD", "MAH", "LRD", "SC", "BCH", "MF", "ATS", "PRS", "SKV", "YOR", "AHU", "POP", "TOR", "FSTT", "ORS", "NB", "HUM"), _this.getStation(_this.S25, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS", "SKV", "YOR", "AHU", "POP", "TOR", "FSTT", "ORS", "NB", "HUM"), _this.getStation(_this.S26, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS", "SKV", "YOR", "AHU", "POP", "TOR", "FSTT", "ORS", "NB", "HUM"), [_this.S42], [_this.S46.NULL], _this.getStation(_this.S85, "NB", "HUM"), _this.getStation(_this.U8, "WIU", "RR", "KB", "LD", "PB", "RE", "FN", "Olu", "Pk"), _this.getStation(_this.U8, "HMS", "L", "Bo", "Hpo", "ST", "Kbu", "Mr", "He", "Jb", "Ap", "W", "Ro", "B", "Vo"), _this.getTerminus("247", "Leopoldplatz"), _this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"), _this.getTerminus("247", "Nordbahnhof", "Bernauer Str"), _this.getTerminus("N8", "Hermannstr", "Hermannplatz")]];
            break;

          case "BGSS":
            _this.stop = [900000110003];
            _this.filter = [[[_this.S41], _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST"), [_this.S42], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA"), _this.getTerminus("M4", "Falkenberg", "Zingster Str", "Sulzfelder Str"), _this.getTerminus("M4", "Hackescher Markt")]];
            break;

          case "BHKM":
            _this.stop = [900000100002];
            _this.filter = [[_this.getStation(_this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST"), _this.getStation(_this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST"), _this.getStation(_this.S7, "OLS", "HST", "MS", "PDH", "BAB", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST"), _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST"), _this.getStation(_this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB", "ALX"), _this.getStation(_this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX"), _this.getStation(_this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX"), _this.getStation(_this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB", "ALX"), _this.getTerminus("M1", "Rosenthal Nord", "Schillerstr"), _this.getTerminus("M1", "Am Kupfergraben"), _this.getTerminus("M4", null), _this.getTerminus("M5", "Zingster Str", "Petersburger Str"), _this.getTerminus("M6", null), _this.getTerminus("M5", "Hauptbahnhof"), _this.getTerminus("N2", "Pankow"), _this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"), _this.getTerminus("N40", "Turmstr"), _this.getTerminus("N42", "Alexanderplatz"), _this.getTerminus("N2", "Ruhleben", "Zoologischer Garten"), _this.getTerminus("N5", "Riesaer Str", "Wuhletal"), _this.getTerminus("N8", "Hermannstr", "Hermannplatz"), _this.getTerminus("N40", "Wühlischplatz"), _this.getTerminus("N42", "Theodor-Heuss-Platz"), _this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")]];
            break;

          case "BHAL":
            _this.stop = [900000040101];
            _this.filter = [[[_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO"), _this.getTerminus("M19", "Grunewald", "Hagenplatz", "Rathenauplatz"), _this.getTerminus("M29", "Roseneck", "Rathenauplatz"), _this.getTerminus("X10", "Teltow", "Andr#233ezeile"), _this.getTerminus("104", "Brixplatz", "Theodor-Heuss-Platz", "Rathenauplatz"), _this.getTerminus("N42", "Theodor-Heuss-Platz", "Rathenauplatz"), _this.getTerminus("M19", "Mehringdamm"), _this.getTerminus("M29", "Hermannplatz"), _this.getTerminus("X10", "Zoologischer Garten"), _this.getTerminus("104", "Tunnelstr", "Eichenstr./Puschkinallee", "Treptower Park"), _this.getTerminus("N42", "Alexanderplatz")]];
            break;

          case "BHEI":
            _this.stop = [900000045102];
            _this.filter = [[[_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP"), _this.getStation(_this.U3, "WA", "S", "Gr", "Kbo", "Pr", "Ho", "Mo", "Go", "Kus", "N", "Wt", "Au", "Sno", "Hz", "Fpo"), _this.getStation(_this.U3, "K", "Ot", "Os", "T", "Dd", "Po", "Bt", "Rd"), _this.getTerminus("249", "Roseneck"), _this.getTerminus("310", "Wilmersdorfer Str"), _this.getTerminus("N3", "Mexikoplatz"), _this.getTerminus("249", "Zoologischer Garten"), _this.getTerminus("310", "Blissestr"), _this.getTerminus("N3", "Wittenbergplatz")]];
            break;

          case "BHER":
            _this.stop = [900000079221, 900000079220];
            _this.filter = [[[_this.S41], _this.getStation(_this.S45, "SKR", "THF"), _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP", "SGR", "SKR", "THF"), [_this.S42], _this.getStation(_this.S45, "FLH", "GBA", "AGL", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK"), _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK"), [_this.S47.NULL], [_this.U8.NULL], _this.getTerminus("377", "Plänterwald"), _this.getTerminus("N8", null), _this.getTerminus("N79", "Plänterwald"), _this.getTerminus("M44", null), _this.getTerminus("246", null), _this.getTerminus("277", null), _this.getTerminus("370", "Neuköllnische Brücke"), _this.getTerminus("377", "Kranoldstr"), _this.getTerminus("N79", "Alt-Mariendorf")], [_this.getTerminus("246", "Friedrich-Wilhelm-Platz", "Alt-Tempelhof"), _this.getTerminus("370", "Neuköllnische Brücke")]];
            break;

          case "BHO":
            _this.stop = [900000044101];
            _this.filter = [[[_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI"), _this.getTerminus("115", "Spanische Allee/Potsdamer Ch", "Neuruppiner Str", "Roseneck"), _this.getTerminus("N3", "Mexikoplatz"), _this.getTerminus("N10", "Sachtlebenstr"), _this.getTerminus("115", "Fehrbelliner Platz"), _this.getTerminus("N3", "Wittenbergplatz"), _this.getTerminus("N10", "Zoologischer Garten")]];
            break;

          case "BIP":
            _this.stop = [900000054105];
            _this.filter = [[[_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR"), [_this.U4.NULL], _this.getTerminus("M48", "Alexanderplatz", "Mohrenstr"), _this.getTerminus("M85", "Hauptbahnhof", "Potsdamer Platz"), _this.getTerminus("187", "Turmstr", "Kurfürstenstr"), _this.getTerminus("248", "Warschauer Str", "Ostbahnhof", "Alexanderplatz", "Hallesches Tor", "Südkreuz"), _this.getTerminus("M48", "Busseallee", "Zehlendorf Eiche", "Rathaus Steglitz"), _this.getTerminus("M85", "Lichterfelde Süd", "Rathaus Steglitz"), _this.getTerminus("187", "Halbauer Weg", "Lankwitz Kirche", "Insulaner"), _this.getTerminus("248", "Breitenbachplatz")]];
            break;

          case "BJB":
            _this.stop = [900000100004];
            _this.filter = [[_this.getStation(_this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX"), _this.getStation(_this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX"), _this.getStation(_this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX"), _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX"), _this.getStation(_this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB"), _this.getStation(_this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB"), _this.getStation(_this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB"), _this.getStation(_this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB"), _this.getStation(_this.U8, "WIU", "RR", "KB", "LD", "PB", "RE", "FN", "Olu", "Pk", "Gb", "Vo", "B", "Ro", "W", "Ap"), _this.getStation(_this.U8, "HMS", "L", "Bo", "Hpo", "ST", "Kbu", "Mr", "He"), _this.getTerminus("248", "Breitenbachplatz", "Südkreuz", "Hallesches Tor", "Alexanderplatz"), _this.getTerminus("N40", "Turmstr"), _this.getTerminus("Warschauer Str", "Ostbahnhof"), _this.getTerminus("N40", "Wühlischplatz"), _this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"), _this.getTerminus("N65", "Hackescher Markt"), _this.getTerminus("N8", "Hermannstr", "Hermannplatz"), _this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")]];
            break;

          case "BJUN":
            _this.stop = [900000020201, 900000020207];
            _this.filter = [[_this.getTerminus("RE4", "Stendal", "Rathenow"), _this.getTerminus("RE6", "Wittenberge", "Neuruppin"), _this.getTerminus("RB10", "Nauen"), _this.getTerminus("RB13", "Wustermark"), _this.getTerminus("RE4", "Jüterbog", "Luckenwalde", "Ludwigsfelde"), _this.getTerminus("RE6", "Gesundbrunnen"), _this.getTerminus("RB10", "Südkreuz"), [_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN", "WES"), _this.getStation(_this.U7, "R", "Zd", "Wk", "La", "Jt", "Br", "Pi", "Bl", "Gz", "Nk", "KM", "Rk", "Hpu", "Sü", "Gs", "Me", "Mu", "Y", "Kt", "Ei", "Bpu", "Beu", "Bli", "Ad", "Wd", "Bmu", "Rw", "Mp"), _this.getStation(_this.U7, "RSp", "AS", "Zi", "Hs", "P", "Rm", "Sie", "Hl", "JK"), _this.getTerminus("M21", "Uhlandstr"), _this.getTerminus("M21", "Goerdelersteg"), _this.getTerminus("M27", "Pankow"), _this.getTerminus("X9", "Zoologischer Garten"), _this.getTerminus("N7", "Schönefeld"), _this.getTerminus("M27", "Jungfernheide"), _this.getTerminus("N7", "Rathaus Spandau")], [_this.getTerminus("M27", "Jungfernheide"), _this.getTerminus("X9", "Flughafen Tegel"), _this.getTerminus("109", "Flughafen Tegel"), _this.getTerminus("N7", "Rathaus Spandau"), _this.getTerminus("109", "Zoologischer Garten")]];
            break;

          case "BLST":
            _this.stop = [900000110004];
            _this.filter = [[[_this.S41], _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO"), [_this.S42], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS"), _this.getTerminus("M5", "Hauptbahnhof", "Hackescher Markt", "Landsberger Allee/Petersburger Str"), _this.getTerminus("M6", "Hackescher Markt", "Landsberger Allee/Petersburger Str"), _this.getTerminus("M8", "Hauptbahnhof", "Landsberger Allee/Petersburger Str"), _this.getTerminus("M5", "Zingster Str"), _this.getTerminus("M6", "Riesaer Str", "Betriebshof Marzahn", "Marzahn"), _this.getTerminus("M8", "Ahrensfelde/Stadtgrenze", "Betriebshof Marzahn"), _this.getTerminus("156", "Stadion Buschallee/Hansastr", "Große Seestr", "Pasedagplatz"), _this.getTerminus("156", "Storkower Str")]];
            break;

          case "BMN":
            _this.stop = [900000024106, 900000026204, 900000026202];
            _this.filter = [[[_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR"), _this.getTerminus("M49", "Nennhauser Damm", "Reimerweg", "Gatower Str"), _this.getTerminus("X34", "Hottengrund", "Gutsstr", "Gatower Str"), _this.getTerminus("X49", "Hahneberg", "Spektefeld", "Gatower Str"), _this.getTerminus("139", "Werderstr"), _this.getTerminus("218", "Pfaueninsel"), _this.getTerminus("M49", "Zoologischer Garten", "Savignyplatz", "Wilmersdorfer Str"), _this.getTerminus("X34", "Zoologischer Garten", "Savignyplatz", "Wilmersdorfer Str"), _this.getTerminus("X49", "Wilmersdorfer Str")], [_this.getTerminus("139", "Werderstr"), _this.getTerminus("139", "Messe Nord/ICC")], [_this.getStation(_this.U2, "Rl", "Sd", "Nd", "Th"), _this.getStation(_this.U2, "PA", "VIN", "Sh", "EB", "Sz", "Lu", "A", "Ko", "Mk", "Sp", "Hv", "Mi", "MH", "Pd", "MB", "Gu", "BS", "No", "Wt", "Zo", "RP", "Obi", "Bmo", "So"), _this.getTerminus("139", "Werderstr"), _this.getTerminus("139", "Messe Nord/ICC"), _this.getTerminus("N2", "Ruhleben"), _this.getTerminus("N2", "Pankow", "Hackescher Markt", "Zoologischer Garten")]];
            break;

          case "BNK":
            _this.stop = [900000078201, 900000078272, 900000078273, 900000078271];
            _this.filter = [[[_this.S41], _this.getStation(_this.S45, "SKR", "THF", "HER"), _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP", "SGR", "SKR", "THF", "HER"), [_this.S47.HER], [_this.S42], _this.getStation(_this.S45, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "KHD"), _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD"), _this.getStation(_this.S47, "SPF", "OSP", "SW", "BMW", "KHD")], [_this.getStation(_this.U7, "R", "Zd", "Wk", "La", "Jt", "Br", "Pi", "Bl", "Gz"), _this.getStation(_this.U7, "RSp", "AS", "Zi", "Hs", "P", "Rm", "Sie", "Hl", "JK", "Jh", "Mp", "Rw", "Bmu", "Wd", "Ad", "Kn", "Fpu", "Bli", "Beu", "Bpu", "Ei", "Kt", "Y", "Mu", "Me", "Gs", "Sü", "Hpu", "Rk", "KM")], [_this.getTerminus("171", "Schönefeld", "Rudow"), _this.getTerminus("N7", "Schönefeld"), _this.getTerminus("N79", "Alt-Mariendorf"), _this.getTerminus("171", "Hermannplatz", "Sonnenallee"), _this.getTerminus("N7", "Rathaus Spandau"), _this.getTerminus("N79", "Plänterwald")], [_this.getTerminus("171", "Schönefeld", "Rudow"), _this.getTerminus("N7", "Schönefeld"), _this.getTerminus("370", "Neuköllnische Brücke"), _this.getTerminus("377", "Plänterwald"), _this.getTerminus("171", "Hermannplatz", "Sonnenallee"), _this.getTerminus("N7", "Rathaus Spandau"), _this.getTerminus("370", "Hermannstr"), _this.getTerminus("377", "Hermannstr")]];
            break;

          case "BOSB":
            _this.stop = [900000120005];
            _this.filter = [[_this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"), _this.getTerminus("RE2", "Wismar", "Bad Kleinen", "Schwerin", "Wittenberge", "Nauen"), _this.getTerminus("RE7", "Dessau", "Bad Belzig"), _this.getTerminus("RB14", "Nauen"), _this.getTerminus("RE1", "Cottbus", "Eisenhüttenstadt", "Frankfurt"), _this.getTerminus("RE2", "Cottbus"), _this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"), _this.getTerminus("RB14", "Schönefeld"), _this.getStation(_this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB"), _this.getStation(_this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB"), _this.getStation(_this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB"), _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB"), _this.getStation(_this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS"), _this.getStation(_this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS"), _this.getStation(_this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS"), [_this.S75.NULL], _this.getStation(_this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS"), _this.getTerminus("142", "Leopoldplatz", "Hauptbahnhof"), _this.getTerminus("248", "Breitenbachplatz", "Südkreuz", "Hallesches Tor", "Alexanderplatz"), _this.getTerminus("N40", "Turmstr"), _this.getTerminus("147", "Hauptbahnhof", "Unter den Linden/Friedrichstr", "Märkisches Museum"), _this.getTerminus("240", "Storkower Str", "Betriebshof Lichtenberg"), _this.getTerminus("248", "Warschauer Str"), _this.getTerminus("347", "Tunnelstr", "Warschauer Str"), _this.getTerminus("N40", "Wühlischplatz")]];
            break;

          case "BOK":
            _this.stop = [900000120003];
            _this.filter = [[_this.getTerminus("RE1", "Cottbus", "Eisenhüttenstadt", "Frankfurt"), _this.getTerminus("RE2", "Cottbus"), _this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"), _this.getTerminus("RB12", "Templin"), _this.getTerminus("RB14", "Schönefeld"), _this.getTerminus("RB24", "Eberswalde"), _this.getTerminus("RB25", "Werneuchen"), _this.getTerminus("RB26", "Gorz&#243;w", "Kostrzyn"), _this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"), _this.getTerminus("RE2", "Wismar", "Bad Kleinen", "Schwerin", "Wittenberge", "Nauen"), _this.getTerminus("RE7", "Dessau", "Bad Belzig"), _this.getTerminus("RB14", "Nauen"), _this.getTerminus("RB24", "Senftenberg", "Cottbus"), _this.getStation(_this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS"), _this.getStation(_this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS"), _this.getStation(_this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS"), _this.getStation(_this.S75, "OSB", "WRS"), _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS"), _this.getStation(_this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH"), _this.getStation(_this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL"), _this.getStation(_this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL"), _this.getStation(_this.S75, "WAB", "HH", "GSE", "SPH", "FFO", "LI", "NPL"), _this.getStation(_this.S9, "LI", "NPL"), [_this.S41], _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP"), [_this.S42], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA"), _this.getTerminus("194", "Helene-Weigel-Platz", "Friedrichsfelde Ost", "Nöldnerplatz"), _this.getTerminus("347", "Tunnelstr"), _this.getTerminus("N94", "Magdalenenstr"), _this.getTerminus("194", "Hermannplatz", "Treptower Park"), _this.getTerminus("347", "Ostbahnhof", "Warschauer Str"), _this.getTerminus("N94", "Hermannplatz")]];
            break;

          case "BPWA":
            _this.stop = [900000191002, 900000191802];
            _this.filter = [[[_this.S45.TP], [_this.S46.TP], [_this.S47.TP], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA", "OK", "TP"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA"), _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS", "TP"), _this.getStation(_this.S45, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW"), _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW"), _this.getStation(_this.S47, "SPF", "OSP", "SW", "BMW"), _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW"), _this.getStation(_this.S9, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW"), _this.getTerminus("377", "Hermannstr"), _this.getTerminus("N79", "Alt-Mariendorf")], [_this.getTerminus("165", "Märkisches Museum", "Treptower Park"), _this.getTerminus("166", "Boddinstr", "Treptower Park"), _this.getTerminus("N65", "Hackescher Markt"), _this.getTerminus("165", "Schöneweide", "Müggelschlößchenweg"), _this.getTerminus("166", "Schöneweide"), _this.getTerminus("377", "Hermannstr"), _this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide"), _this.getTerminus("N79", "Alt-Mariendorf")]];
            break;

          case "BPLA":
            _this.stop = [900000110002];
            _this.filter = [[[_this.S41], _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS"), [_this.S42], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL"), _this.getTerminus("M2", "Heinersdorf", "Am Steinberg"), _this.getTerminus("M2", "Alexanderplatz"), _this.getTerminus("156", "Stadion Buschallee/Hansastr", "Große Seestr", "Pasedagplatz"), _this.getTerminus("156", "Storkower Str", "Michelangelostr")]];
            break;

          case "BSG":
            _this.stop = [900000054104];
            _this.filter = [[_this.getStation(_this.S1, "ORB", "LEN", "BOR", "BIW", "HN", "FOH", "HED", "WAI", "WIN", "WM", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS", "FSTT", "TOR", "POP", "AHU", "YOR", "JLB"), _this.getStation(_this.S1, "PDH", "BAB", "GRI", "WSS", "NIW", "SLS", "MEX", "ZD", "SDG", "LWE", "BGT", "RST", "FB", "FRU"), [_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR"), _this.getTerminus("M46", "Zoologischer Garten", "Wittenbergplatz"), _this.getTerminus("248", "Breitenbachplatz"), _this.getTerminus("M46", "Britz-Süd", "Alt-Tempelhof", "Südkreuz"), _this.getTerminus("248", "Warschauer Str", "Ostbahnhof", "Alexanderplatz", "Hallesches Tor", "Südkreuz")]];
            break;

          case "BSAL":
            _this.stop = [900000110001];
            _this.filter = [[[_this.S41], _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS", "PLA"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS", "PLA"), [_this.S42], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS"), _this.getStation(_this.U2, "PA", "VIN"), _this.getStation(_this.U2, "Fpo", "Hz", "Sno", "Au", "Rl", "Sd", "Nd", "Th", "Kd", "So", "Bmo", "Obi", "RP", "Zo", "Wt", "No", "BS", "Gu", "MB", "Pd", "MH", "Mi", "Hv", "Sp", "Mk", "Ko", "A", "Lu", "Sz", "EB"), _this.getTerminus("M1", "Schillerstr", "Rosenthal Nord"), _this.getTerminus("M1", "Am Kupfergraben", "Hackescher Markt")]];
            break;

          case "BSO":
            _this.stop = [900000077106, 900000077110];
            _this.filter = [[[_this.S41], [_this.S42], _this.getTerminus("M41", "Hauptbahnhof", "Philharmonie", "Hallesches Tor", "Hermannplatz"), _this.getTerminus("171", "Hermannplatz"), _this.getTerminus("N79", "Alt-Mariendorf"), _this.getTerminus("M41", "Sonnenallee/Baumschulenstr"), _this.getTerminus("171", "Schönefeld", "Rudow"), _this.getTerminus("N79", "Plänterwald")], [_this.getTerminus("171", "Schönefeld", "Rudow"), _this.getTerminus("N79", "Alt-Mariendorf"), _this.getTerminus("171", "Hermannplatz", "Sonnenallee"), _this.getTerminus("N79", "Plänterwald")]];
            break;

          case "BSTO":
            _this.stop = [900000110012, 900000160504];
            _this.filter = [[[_this.S41], _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "TP", "OK", "FA"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "TP", "OK", "FA"), [_this.S42], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST"), _this.getTerminus("156", "Stadion Buschallee", "Große Seestr", "Pasedagplatz"), _this.getTerminus("240", "Ostbahnhof", "Betriebshof Lichtenberg")], [_this.getTerminus("156", "Stadion Buschallee", "Große Seestr", "Pasedagplatz"), _this.getTerminus("156", "Storkower Str")]];
            break;

          case "BSK":
            _this.stop = [900000058101, 900000058100];
            _this.filter = [[_this.getTerminus("RE3", "Schwedt", "Stralsund", "Prenzlau", "Angermünde", "Eberswalde"), _this.getTerminus("RE4", "Stendal", "Rathenow"), _this.getTerminus("RE5", "Rostock", "Stralsund"), _this.getTerminus("RB10", "Nauen"), _this.getTerminus("RE3", "Wittenberg", "Falkenberg", "Halle"), _this.getTerminus("RE4", "Jüterbog", "Luckenwalde", "Ludwigsfelde"), _this.getTerminus("RE5", "Elsterwerda", "Wünsdorf-Waldstadt"), _this.getStation(_this.S2, "BER", "BRF", "ZEP", "RGT", "BU", "KRW", "BLB", "PHD", "PKW", "BOS", "GB", "HUM", "NB", "ORS", "FSTT", "TOR", "POP", "AHU", "YOR"), _this.getStation(_this.S25, "HD", "HLS", "SZF", "TG", "EBD", "KBO", "ARF", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS", "FSTT", "TOR", "POP", "AHU", "YOR"), _this.getStation(_this.S26, "WAI", "WIN", "WM", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS", "FSTT", "TOR", "POP", "AHU", "YOR"), _this.getStation(_this.S2, "BFD", "MAH", "LRD", "SC", "BCH", "MF", "ATS", "PRS"), _this.getStation(_this.S25, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS"), _this.getStation(_this.S26, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS"), [_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP", "SGR"), [_this.S42], [_this.S45.NULL], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF"), _this.getTerminus("M46", "Zoologischer Garten", "Wittenbergplatz"), _this.getTerminus("106", "Seestr", "Kurfürstenstr"), _this.getTerminus("204", "Zoologischer Garten"), _this.getTerminus("M46", "Britz-Süd", "Alt-Tempelhof"), _this.getTerminus("106", "Lindenhof")], [_this.getTerminus("184", "Reichartstr"), _this.getTerminus("248", "Breitenbachplatz"), _this.getTerminus("184", "Warthestr", "Wismarer Str", "Saaleckstr", "Lichterfelde Ost"), _this.getTerminus("248", "Warschauer Str", "Ostbahnhof", "Alexanderplatz", "Hallesches Tor")]];
            break;

          case "BTHF":
            _this.stop = [900000068201, 900000068272];
            _this.filter = [[[_this.S41], [_this.S45.SKR], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP", "SGR", "SKR"), [_this.S42], _this.getStation(_this.S45, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER"), _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER"), _this.getStation(_this.U6, "Tg", "Bk", "Hh", "OTI", "Scha", "Sch", "Afr", "Rb", "Se", "Lpo", "We", "Ri", "SK", "NA", "Ob", "F", "Fr", "Mic", "Ks", "Hu", "Me", "PL", "Ps"), _this.getStation(_this.U6, "Mf", "Wl", "Ull", "At"), _this.getTerminus("184", "Südkreuz"), _this.getTerminus("N6", "Alt-Tegel"), _this.getTerminus("140", "Ostbahnhof", "Mehringdamm"), _this.getTerminus("184", "Warthestr", "Wismarer Str", "Saaleckplatz", "Lichterfelde Ost"), _this.getTerminus("N6", "Alt-Mariendorf"), _this.getTerminus("N84", "Zehlendorf Eiche", "Alt-Tempelhof")], [_this.getTerminus("184", "Südkreuz", "Tempelhof"), _this.getTerminus("N6", "Alt-Tegel"), _this.getTerminus("184", "Warthestr", "Wismarer Str", "Saaleckplatz", "Lichterfelde Ost"), _this.getTerminus("N6", "Alt-Mariendorf")]];
            break;

          case "BTP":
            _this.stop = [900000190001, 900000190701, 900000190702, 900000190100];
            _this.filter = [[[_this.S41], _this.getStation(_this.S45, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA"), _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA"), _this.getStation(_this.S47, "SPF", "OSP", "SW", "BMW", "PWA"), _this.getStation(_this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA"), _this.getStation(_this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA"), _this.getStation(_this.S9, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA"), [_this.S42], _this.getStation(_this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA", "OK"), _this.getStation(_this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA", "OK"), _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS")], [_this.getTerminus("165", "Märkisches Museum", "Treptower Park"), _this.getTerminus("166", "Boddinstr", "Treptower Park"), _this.getTerminus("265", "Stadtmitte", "Märkisches Museum", "Schlesisches Tor", "Treptower Park"), _this.getTerminus("N65", "Hackescher Markt")], [_this.getTerminus("104", "Brixplatz", "Theodor-Heuss-Platz", "Rathenauplatz", "Halensee", "Berliner Str", "Platz der Luftbrücke", "Boddinstr"), _this.getTerminus("194", "Hermannplatz"), _this.getTerminus("N94", "Hermannplatz"), _this.getTerminus("104", "Tunnelstr"), _this.getTerminus("194", "Helene-Weigel-Platz", "Friedrichsfelde Ost", "Nöldnerplatz"), _this.getTerminus("N94", "Magdalenenstr")], [_this.getTerminus("104", "Brixplatz", "Theodor-Heuss-Platz", "Rathenauplatz", "Halensee", "Berliner Str", "Platz der Luftbrücke", "Boddinstr"), _this.getTerminus("165", "Müggelschlößchenweg", "Schöneweide"), _this.getTerminus("166", "Boddinstr"), _this.getTerminus("194", "Hermannplatz"), _this.getTerminus("265", "Schöneweide", "Baumschulenstr"), _this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide"), _this.getTerminus("N94", "Hermannplatz"), _this.getTerminus("104", "Eichenstr./Puschkinallee"), _this.getTerminus("165", "Märkisches Museum"), _this.getTerminus("265", "Stadtmitte", "Märkisches Museum", "Schlesisches Tor"), _this.getTerminus("N65", "Hackescher Markt")]];
            break;

          case "BWRS":
            _this.stop = [900000120004, 900000120011, 900000120020, 900000120021];
            _this.filter = [[_this.getStation(_this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB"), _this.getStation(_this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB"), _this.getStation(_this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB"), [_this.S75.OSB], _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB"), _this.getStation(_this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS"), _this.getStation(_this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS"), _this.getStation(_this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS"), _this.getStation(_this.S75, "WAB", "HH", "GSE", "SPH", "FFO", "LI", "NPL", "OKS"), _this.getStation(_this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP"), [_this.U1.NULL], [_this.U3.NULL], _this.getTerminus("M10", "Hauptbahnhof", "Friedrich-Ludwig-Jahn-Sportpark"), _this.getTerminus("347", "Ostbahnhof"), _this.getTerminus("N1", "Helsingforser Platz"), _this.getTerminus("347", "Tunnelstr"), _this.getTerminus("N1", "Zoologischer Garten"), _this.getTerminus("248", "Breitenbachplatz", "Südkreuz", "Hallesches Tor", "Alexanderplatz", "Ostbahnhof")], [_this.getTerminus("M10", "Hauptbahnhof", "Friedrich-Ludwig-Jahn-Sportpark"), _this.getTerminus("M10", "Warschauer Str")], [_this.getTerminus("347", "Ostbahnhof"), _this.getTerminus("347", "Tunnelstr"), _this.getTerminus("N1", "Zoologischer Garten")], [_this.getTerminus("M10", "Hauptbahnhof", "Friedrich-Ludwig-Jahn-Sportpark"), _this.getTerminus("M13", "Virchow-Klinikum", "Degnerstr", "Betriebshof Lichtenberg")]];
            break;

          case "BWED":
            _this.stop = [900000009104, 900000008103];
            _this.filter = [[[_this.S41], [_this.S46.GB], [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN", "WES", "JUN", "BEU", "WH"), _this.getStation(_this.U6, "Tg", "Bk", "Hh", "OTI", "Scha", "Sch", "Afr", "Rb", "Se", "Lpo"), _this.getStation(_this.U6, "Mf", "Wl", "Ull", "Ka", "At", "Ts", "Ps", "PL", "Me", "Ks", "Mic", "Fr", "F", "Ob", "NA", "SK", "Ri"), _this.getTerminus("120", "Wilhelmsruher Damm", "Wittenau", "Paracelsus-Bad", "Leopoldplatz"), _this.getTerminus("N6", "Alt-Tegel"), _this.getTerminus("N20", "Hainbuchenstr")], [_this.getTerminus("M27", "Jungfernheide"), _this.getTerminus("247", "Leopoldplatz"), _this.getTerminus("M27", "Pankow"), _this.getTerminus("247", "Nordbahnhof", "Bernauer Str")]];
            break;

          case "BWES":
            _this.stop = [900000026207, 900000020204];
            _this.filter = [[[_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN"), _this.getTerminus("M45", "Johannesstift", "Rathaus Spandau", "DRK-Kliniken Westend"), _this.getTerminus("M45", "Zoologischer Garten")], [_this.getTerminus("M45", "Johannesstift", "Rathaus Spandau", "DRK-Kliniken Westend"), _this.getTerminus("309", "Schlosspark-Klinik"), _this.getTerminus("M45", "Zoologischer Garten"), _this.getTerminus("309", "Wilmersdorfer Str")]];
            break;

          case "BWH":
            _this.stop = [900000001201];
            _this.filter = [[[_this.S41], [_this.S46.GB, _this.S46.WED], [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN", "WES", "JUN", "BEU"), _this.getStation(_this.U9, "Olo", "Np", "Lpu", "Am"), _this.getStation(_this.U9, "Rzu", "Sl", "Wsg", "Fw", "Bd", "Beo", "Gt", "Snu", "Kfu", "Zu", "Ha", "Tm", "Bi"), [{
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
            _this.stop = [900000024102];
            _this.filter = [[_this.getStation(_this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS"), _this.getStation(_this.S5, "GWD", "OLS", "HST", "MS"), _this.getStation(_this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD"), _this.getStation(_this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS"), _this.getStation(_this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV", "TGN", "ZOS", "SAP", "CHS"), _this.getStation(_this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV", "TGN", "ZOS", "SAP", "CHS"), _this.getStation(_this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV", "TGN", "ZOS", "SAP", "CHS"), _this.getStation(_this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV", "TGN", "ZOS", "SAP", "CHS"), [_this.S41], _this.getStation(_this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN"), [_this.S42], _this.getStation(_this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL"), [{
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
            _this.stop = [900000160509, 900000160010, 900000160710];
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
            }]], [[{
              line: "M13",
              dir: "Warschauer"
            }, {
              line: "M13",
              dir: "Frankfurter"
            }], [{
              line: "16",
              dir: "Frankfurter"
            }], [{
              line: "N50",
              dir: "Hugenottenplatz"
            }, {
              line: "N50",
              dir: "Pankow"
            }, {
              line: "N50",
              dir: "Betriebshof Indira-Gandhi-Str"
            }], [{
              line: "M13",
              dir: "Virchow-Klinikum"
            }, {
              line: "M13",
              dir: "Degnerstr"
            }], [{
              line: "16",
              dir: "Ahrensfelde/Stadtgrenze"
            }], [{
              line: "N50",
              dir: "Tierpark"
            }, {
              line: "N50",
              dir: "Betriebshof Lichtenberg"
            }]], [[{
              line: "M8",
              dir: "Hauptbahnhof"
            }, {
              line: "M8",
              dir: "Petersburger"
            }], [{
              line: "M5",
              dir: "Petersburger"
            }]]];
            break;

          case "moe":
            _this.stop = [900000160014];
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
    key: "addBLine",
    value: function addBLine(line, directions) {
      var output = {};
      Object.keys(directions).forEach(function (direction) {
        output[direction] = {
          line: line,
          dir: directions[direction]
        };
      });
      return output;
    }
  }, {
    key: "addS1",
    value: function addS1() {
      this.S1 = this.addBLine("S1", {
        PDH: "Potsdam",
        BAB: "Babelsberg",
        GRI: "Griebnitzsee",
        WSS: "Wannsee",
        NIW: "Nikolassee",
        SLS: "Schlachtensee",
        MEX: "Mexikoplatz",
        ZD: "Zehlendorf",
        SDG: "Sundgauer Str",
        LWE: "Lichterfelde West",
        BGT: "Botanischer Garten",
        RST: "Rathaus Steglitz",
        FB: "Feuerbachstr",
        FRU: "Friedenau",
        SGV: "Schöneberg",
        JLB: "Julius-Leber-Brücke",
        YOR: "Yorckstr",
        AHU: "Anhalter Bahnhof",
        POP: "Potsdamer Platz",
        TOR: "Brandenburger Tor",
        FSTT: "Friedrichstr",
        ORS: "Oranienburger Str",
        NB: "Nordbahnhof",
        HUM: "Humboldthain",
        GB: "Gesundbrunnen",
        BOS: "Bornholmer Str",
        WOK: "Wollankstr",
        SNH: "Schönholz",
        WM: "Wilhelmsruh",
        WIN: "Wittenau",
        WAI: "Waidmannslust",
        HED: "Hermsdorf",
        FOH: "Frohnau",
        HN: "Hohen Neuendorf",
        BIW: "Birkenwerder",
        BOR: "Borgsdorf",
        LEN: "Lehnitz",
        ORB: "Oranienburg",
        NULL: null
      });
    }
  }, {
    key: "addS2",
    value: function addS2() {
      this.S2 = this.addBLine("S2", {
        BFD: "Blankenfelde",
        MAH: "Mahlow",
        LRD: "Lichtenrade",
        SC: "Schichauweg",
        BCH: "Buckower Chaussee",
        MF: "Marienfelde",
        ATS: "Attilastr",
        PRS: "Priesterweg",
        SKV: "Südkreuz",
        YOR: "Yorckstr",
        AHU: "Anhalter Bahnhof",
        POP: "Potsdamer Platz",
        TOR: "Brandenburger Tor",
        FSTT: "Friedrichstr",
        ORS: "Oranienburger Str",
        NB: "Nordbahnhof",
        HUM: "Humboldthain",
        GB: "Gesundbrunnen",
        BOS: "Bornholmer Str",
        PKW: "Pankow",
        PHD: "Pankow-Heinersdorf",
        BLB: "Blankenburg",
        KRW: "Karow",
        BU: "Buch",
        RGT: "Röntgental",
        ZEP: "Zepernick",
        BRF: "Bernau-Friedenstal",
        BER: "Bernau",
        NULL: null
      });
    }
  }, {
    key: "addS25",
    value: function addS25() {
      this.S25 = this.addBLine("S25", {
        TLS: "Teltow Stadt",
        LIS: "Lichterfelde Süd",
        OSS: "Osdorfer Str",
        LIO: "Lichterfelde Ost",
        LAK: "Lankwitz",
        SDE: "Südende",
        PRS: "Priesterweg",
        SKV: "Südkreuz",
        YOR: "Yorckstr",
        AHU: "Anhalter Bahnhof",
        POP: "Potsdamer Platz",
        TOR: "Brandenburger Tor",
        FSTT: "Friedrichstr",
        ORS: "Oranienburger Str",
        NB: "Nordbahnhof",
        HUM: "Humboldthain",
        GB: "Gesundbrunnen",
        BOS: "Bornholmer Str",
        WOK: "Wollankstr",
        SNH: "Schönholz",
        ARF: "Alt-Reinickendorf",
        KBO: "Karl-Bonhoeffer-Nervenklinik",
        EBD: "Eichborndamm",
        TG: "Tegel",
        SZF: "Schulzendorf",
        HLS: "Heiligensee",
        HD: "Hennigsdorf",
        NULL: null
      });
    }
  }, {
    key: "addS26",
    value: function addS26() {
      this.S26 = this.addBLine("S26", {
        TLS: "Teltow Stadt",
        LIS: "Lichterfelde Süd",
        OSS: "Osdorfer Str",
        LIO: "Lichterfelde Ost",
        LAK: "Lankwitz",
        SDE: "Südende",
        PRS: "Priesterweg",
        SKV: "Südkreuz",
        YOR: "Yorckstr",
        AHU: "Anhalter Bahnhof",
        POP: "Potsdamer Platz",
        TOR: "Brandenburger Tor",
        FSTT: "Friedrichstr",
        ORS: "Oranienburger Str",
        NB: "Nordbahnhof",
        HUM: "Humboldthain",
        GB: "Gesundbrunnen",
        BOS: "Bornholmer Str",
        WOK: "Wollankstr",
        SNH: "Schönholz",
        WM: "Wilhelmsruh",
        WIN: "Wittenau",
        WAI: "Waidmannslust",
        NULL: null
      });
    }
  }, {
    key: "addS3",
    value: function addS3() {
      this.S3 = this.addBLine("S3", {
        E: "Erkner",
        WIG: "Wilhelmshagen",
        RD: "Rahnsdorf",
        FRH: "Friedrichshagen",
        HIG: "Hirschgarten",
        KPK: "Köpenick",
        WHH: "Wuhlheide",
        KLH: "Karlshorst",
        RB: "Betriebsbahnhof Rummelsburg",
        RH: "Rummelsburg",
        OKS: "Ostkreuz",
        WRS: "Warschauer Str",
        OSB: "Ostbahnhof",
        JB: "Jannowitzbrücke",
        ALX: "Alexanderplatz",
        HKM: "Hackescher Markt",
        FST: "Friedrichstr",
        HBF: "Hauptbahnhof",
        BEV: "Bellevue",
        TGN: "Tiergarten",
        ZOS: "Zoologischer Garten",
        SAP: "Savignyplatz",
        CHS: "Charlottenburg",
        WKS: "Westkreuz",
        GWD: "Grunewald",
        MS: "Messe Süd",
        HST: "Heerstr",
        OLS: "Olympiastadion",
        PIC: "Pichelsberg",
        SRW: "Stresow",
        SPA: "Spandau",
        NULL: null
      });
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
      this.S45 = this.addBLine("S45", {
        FLH: "Flughafen Berlin-Schönefeld",
        GBA: "Grünbergallee",
        AGL: "Altglienicke",
        GAS: "Grünau",
        ADL: "Adlershof",
        SCF: "Betriebsbahnhof Schöneweide",
        SW: "Schöneweide",
        BMW: "Baumschulenweg",
        PWA: "Plänterwald",
        TP: "Treptower Park",
        KHD: "Köllnische Heide",
        NK: "Neukölln",
        HER: "Hermannstr",
        THF: "Tempelhof",
        SKR: "Südkreuz",
        NULL: null
      });
    }
  }, {
    key: "addS46",
    value: function addS46() {
      this.S46 = this.addBLine("S46", {
        KW: "Königs Wusterhausen",
        WI: "Wildau",
        ZTH: "Zeuthen",
        EIW: "Eichwalde",
        GAS: "Grünau",
        ADL: "Adlershof",
        SCF: "Betriebsbahnhof Schöneweide",
        SW: "Schöneweide",
        BMW: "Baumschulenweg",
        PWA: "Plänterwald",
        TP: "Treptower Park",
        KHD: "Köllnische Heide",
        NK: "Neukölln",
        HER: "Hermannstr",
        THF: "Tempelhof",
        SKR: "Südkreuz",
        SGR: "Schöneberg",
        IP: "Innsbrucker Platz",
        BUP: "Bundesplatz",
        HEI: "Heidelberger Platz",
        HO: "Hohenzollerndamm",
        HAL: "Halensee",
        WKRR: "Westkreuz",
        MN: "Messe Nord/ICC",
        WES: "Westend",
        JUN: "Jungfernheide",
        BEU: "Beusselstr",
        WH: "Westhafen",
        WED: "Wedding",
        GB: "Gesundbrunnen",
        NULL: null
      });
    }
  }, {
    key: "addS47",
    value: function addS47() {
      this.S47 = this.addBLine("S47", {
        SPF: "Spindlersfeld",
        OSP: "Oberspree",
        SW: "Schöneweide",
        BMW: "Baumschulenweg",
        PWA: "Plänterwald",
        TP: "Treptower Park",
        KHD: "Köllnische Heide",
        NK: "Neukölln",
        HER: "Hermannstr",
        NULL: null
      });
    }
  }, {
    key: "addS5",
    value: function addS5() {
      this.S5 = this.addBLine("S5", {
        STN: "Strausberg Nord",
        STR: "Strausberg Stadt",
        HGM: "Hegermühle",
        STV: "Strausberg",
        PEN: "Petershagen Nord",
        FD: "Fredersdorf",
        NG: "Neuenhagen",
        HPG: "Hoppegarten",
        BIS: "Birkenstein",
        MDF: "Mahlsdorf",
        KAD: "Kaulsdorf",
        WT: "Wuhletal",
        BDF: "Biesdorf",
        FFO: "Friedrichsfelde Ost",
        LI: "Lichtenberg",
        NPL: "Nöldnerplatz",
        OKS: "Ostkreuz",
        WRS: "Warschauer Str",
        OSB: "Ostbahnhof",
        JB: "Jannowitzbrücke",
        ALX: "Alexanderplatz",
        HKM: "Hackescher Markt",
        FST: "Friedrichstr",
        HBF: "Hauptbahnhof",
        BEV: "Bellevue",
        TGN: "Tiergarten",
        ZOS: "Zoologischer Garten",
        SAP: "Savignyplatz",
        CHS: "Charlottenburg",
        WKS: "Westkreuz",
        GWD: "Grunewald",
        MS: "Messe Süd",
        HST: "Heerstr",
        OLS: "Olympiastadion",
        NULL: null
      });
    }
  }, {
    key: "addS7",
    value: function addS7() {
      this.S7 = this.addBLine("S7", {
        AF: "Ahrensfelde",
        MEA: "Mehrower Allee",
        RW: "Raoul-Wallenberg-Str",
        MAZ: "Marzahn",
        POE: "Poelchaustr",
        SPH: "Springpfuhl",
        FFO: "Friedrichsfelde Ost",
        LI: "Lichtenberg",
        NPL: "Nöldnerplatz",
        OKS: "Ostkreuz",
        WRS: "Warschauer Str",
        OSB: "Ostbahnhof",
        JB: "Jannowitzbrücke",
        ALX: "Alexanderplatz",
        HKM: "Hackescher Markt",
        FST: "Friedrichstr",
        HBF: "Hauptbahnhof",
        BEV: "Bellevue",
        TGN: "Tiergarten",
        ZOS: "Zoologischer Garten",
        SAP: "Savignyplatz",
        CHS: "Charlottenburg",
        WKS: "Westkreuz",
        GWD: "Grunewald",
        NIS: "Nikolassee",
        WSS: "Wannsee",
        GRI: "Griebnitzsee",
        BAB: "Babelsberg",
        PDH: "Potsdam",
        MS: "Messe Süd",
        HST: "Heerstr",
        OLS: "Olympiastadion",
        NULL: null
      });
    }
  }, {
    key: "addS75",
    value: function addS75() {
      this.S75 = this.addBLine("S75", {
        WAB: "Wartenberg",
        HH: "Hohenschönhausen",
        GSE: "Gehrenseestr",
        SPH: "Springpfuhl",
        FFO: "Friedrichsfelde Ost",
        LI: "Lichtenberg",
        NPL: "Nöldnerplatz",
        OKS: "Ostkreuz",
        WRS: "Warschauer Str",
        OSB: "Ostbahnhof",
        NULL: null
      });
    }
  }, {
    key: "addS8",
    value: function addS8() {
      this.S8 = this.addBLine("S8", {
        ZTH: "Zeuthen",
        EIW: "Eichwalde",
        GAS: "Grünau",
        ADL: "Adlershof",
        SCF: "Betriebsbahnhof Schöneweide",
        SW: "Schöneweide",
        BMW: "Baumschulenweg",
        PWA: "Plänterwald",
        TP: "Treptower Park",
        OK: "Ostkreuz",
        FA: "Frankfurter Allee",
        STO: "Storkower Str",
        LST: "Landsberger Allee",
        GSS: "Greifswalder Str",
        PLA: "Prenzlauer Allee",
        SAL: "Schönhauser Allee",
        BOS: "Bornholmer Str",
        PKW: "Pankow",
        PHD: "Pankow-Heinersdorf",
        BLB: "Blankenburg",
        MM: "Mühlenbeck-Mönchmühle",
        SNF: "Schönfließ",
        BFE: "Bergfelde",
        HN: "Hohen Neuendorf",
        BIW: "Birkenwerder",
        NULL: null
      });
    }
  }, {
    key: "addS85",
    value: function addS85() {
      this.S85 = this.addBLine("S85", {
        GAS: "Grünau",
        ADL: "Adlershof",
        SCF: "Betriebsbahnhof Schöneweide",
        SW: "Schöneweide",
        BMW: "Baumschulenweg",
        PWA: "Plänterwald",
        TP: "Treptower Park",
        OK: "Ostkreuz",
        FA: "Frankfurter Allee",
        STO: "Storkower Str",
        LST: "Landsberger Allee",
        GSS: "Greifswalder Str",
        PLA: "Prenzlauer Allee",
        SAL: "Schönhauser Allee",
        BOS: "Bornholmer Str",
        PKW: "Pankow",
        GB: "Gesundbrunnen",
        HUM: "Humboldthain",
        NB: "Nordbahnhof",
        NULL: null
      });
    }
  }, {
    key: "addS9",
    value: function addS9() {
      this.S9 = this.addBLine("S9", {
        FLH: "Flughafen Berlin-Schönefeld",
        GBA: "Grünbergallee",
        AGL: "Altglienicke",
        GAS: "Grünau",
        ADL: "Adlershof",
        SCF: "Betriebsbahnhof Schöneweide",
        SW: "Schöneweide",
        BMW: "Baumschulenweg",
        PWA: "Plänterwald",
        TP: "Treptower Park",
        WRS: "Warschauer Str",
        OSB: "Ostbahnhof",
        JB: "Jannowitzbrücke",
        ALX: "Alexanderplatz",
        HKM: "Hackescher Markt",
        FST: "Friedrichstr",
        HBF: "Hauptbahnhof",
        BEV: "Bellevue",
        TGN: "Tiergarten",
        ZOS: "Zoologischer Garten",
        SAP: "Savignyplatz",
        CHS: "Charlottenburg",
        WKS: "Westkreuz",
        GWD: "Grunewald",
        MS: "Messe Süd",
        HST: "Heerstr",
        OLS: "Olympiastadion",
        PIC: "Pichelsberg",
        SRW: "Stresow",
        SPA: "Spandau",
        OKS: "Ostkreuz",
        NPL: "Nöldnerplatz",
        LI: "Lichtenberg",
        NULL: null
      });
    }
  }, {
    key: "addU1",
    value: function addU1() {
      this.U1 = this.addBLine("U1", {
        U: "Uhlandstr",
        Kfo: "Kurfürstendamm",
        Wt: "Wittenbergplatz",
        N: "Nollendorfplatz",
        Kus: "Kurfürstenstr",
        Go: "Gleisdreieck",
        Mo: "Mehringdamm",
        Ho: "Hallesches Tor",
        Pr: "Prinzenstr",
        Kbo: "Kottbusser Tor",
        Gr: "Görlitzer Bahnhof",
        S: "Schlesisches Tor",
        WA: "Warschauer Str",
        NULL: null
      });
    }
  }, {
    key: "addU2",
    value: function addU2() {
      this.U2 = this.addBLine("U2", {
        PA: "Pankow",
        VIN: "Vinetastr",
        Sh: "Schönhauser Allee",
        EB: "Eberswalder Str",
        Sz: "Senefelderplatz",
        Lu: "Rosa-Luxemburg-Platz",
        A: "Alexanderplatz",
        Ko: "Klosterstr",
        Mk: "Märkisches Museum",
        Sp: "Spittelmarkt",
        Hv: "Hausvogteiplatz",
        Mi: "Stadtmitte",
        MH: "Mohrenstr",
        Pd: "Potsdamer Platz",
        MB: "Mendelssohn-Bartholdy-Park",
        Gu: "Gleisdreieck",
        BS: "Bülowstr",
        No: "Nollendorfplatz",
        Wt: "Wittenbergplatz",
        Zo: "Zoologischer Garten",
        RP: "Ernst-Reuter-Platz",
        Obi: "Deutsche Oper",
        Bmo: "Bismarckstr",
        So: "Sophie-Charlotte-Platz",
        Kd: "Kaiserdamm",
        Th: "Theodor-Heuss-Platz",
        Nd: "Neu-Westend",
        Sd: "Olympia-Stadion",
        Rl: "Ruhleben",
        Au: "Augsburger Str",
        Sno: "Spichernstr",
        Hz: "Hohenzollernplatz",
        Fpo: "Fehrbelliner Platz",
        NULL: null
      });
    }
  }, {
    key: "addU3",
    value: function addU3() {
      this.U3 = this.addBLine("U3", {
        K: "Krumme Lanke",
        Ot: "Onkel Toms Hütte",
        Os: "Oskar-Helene-Heim",
        T: "Freie Universität",
        Dd: "Dahlem-Dorf",
        Po: "Podbielskiallee",
        Bt: "Breitenbachplatz",
        Rd: "Rüdesheimer Platz",
        Hb: "Heidelberger Platz",
        Fpo: "Fehrbelliner Platz",
        Hz: "Hohenzollernplatz",
        Sno: "Spichernstr",
        Au: "Augsburger Str",
        Wt: "Wittenbergplatz",
        N: "Nollendorfplatz",
        Kus: "Kurfürstenstr",
        Go: "Gleisdreieck",
        Mo: "Möckernbrücke",
        Ho: "Hallesches Tor",
        Pr: "Prinzenstr",
        Kbo: "Kottbusser Tor",
        Gr: "Görlitzer Bahnhof",
        S: "Schlesisches Tor",
        WA: "Warschauer Str",
        NULL: null
      });
    }
  }, {
    key: "addU4",
    value: function addU4() {
      this.U4 = this.addBLine("U4", {
        Nm: "Nollendorfplatz",
        V: "Viktoria-Luise-Platz",
        Bpo: "Bayerischer Platz",
        RS: "Rathaus Schöneberg",
        Ip: "Innsbrucker Platz",
        NULL: null
      });
    }
  }, {
    key: "addU5",
    value: function addU5() {
      this.U5 = this.addBLine("U5", {
        Hö: "Hönow",
        LL: "Louis-Lewin-Str",
        HD: "Hellersdorf",
        C: "Cottbusser Platz",
        GK: "Kienberg",
        KL: "Kaulsdorf-Nord",
        Wh: "Wuhletal",
        E: "Elsterwerdaer Platz",
        Bü: "Biesdorf-Süd",
        Tk: "Tierpark",
        Fi: "Friedrichsfelde",
        Li: "Lichtenberg",
        Md: "Magdalenenstr",
        Ff: "Frankfurter Allee",
        Sa: "Samariterstr",
        FT: "Frankfurter Tor",
        WR: "Weberwiese",
        Sr: "Strausberger Platz",
        Si: "Schillingstr",
        Al: "Alexanderplatz",
        NULL: null
      });
    }
  }, {
    key: "addU55",
    value: function addU55() {
      this.U55 = this.addBLine("U55", {
        HBF: "Hauptbahnhof",
        BUN: "Bundestag",
        BRT: "Brandenburger Tor",
        NULL: null
      });
    }
  }, {
    key: "addU6",
    value: function addU6() {
      this.U6 = this.addBLine("U6", {
        Tg: "Alt-Tegel",
        Bk: "Borsigwerke",
        Hh: "Holzhauser Str",
        OTI: "Otisstr",
        Scha: "Scharnweberstr",
        Sch: "Kurt-Schumacher-Platz",
        Afr: "Afrikanische Str",
        Rb: "Rehberge",
        Se: "Seestr",
        Lpo: "Leopoldplatz",
        We: "Wedding",
        Ri: "Reinickendorfer Str",
        SK: "Schwartzkopffstr",
        NA: "Naturkundemuseum",
        Ob: "Oranienburger Tor",
        F: "Friedrichstr",
        Fr: "Französische Str",
        Mic: "Stadtmitte",
        Ks: "Kochstr",
        Hu: "Hallesches Tor",
        Me: "Mehringdamm",
        PL: "Platz der Luftbrücke",
        Ps: "Paradestr",
        Ts: "Tempelhof",
        At: "Alt-Tempelhof",
        Ka: "Kaiserin-Augusta-Str",
        Ull: "Ullsteinstr",
        Wl: "Westphalweg",
        Mf: "Alt-Mariendorf",
        NULL: null
      });
    }
  }, {
    key: "addU7",
    value: function addU7() {
      this.U7 = this.addBLine("U7", {
        R: "Rudow",
        Zd: "Zwickauer Damm",
        Wk: "Wutzkyallee",
        La: "Lipschitzallee",
        Jt: "Johannisthaler Chaussee",
        Br: "Britz-Süd",
        Pi: "Parchimer Allee",
        Bl: "Blaschkoallee",
        Gz: "Grenzallee",
        Nk: "Neukölln",
        KM: "Karl-Marx-Allee",
        Rk: "Rathaus Neukölln",
        Hpu: "Hermannplatz",
        Sü: "Südstern",
        Gs: "Gneisenaustr",
        Me: "Mehringdamm",
        Mu: "Möckernbrücke",
        Y: "Yorckstr",
        Kt: "Kleistpark",
        Ei: "Eisenacher Str",
        Bpu: "Bayerischer Platz",
        Beu: "Berliner Str",
        Bli: "Blissestr",
        Fpu: "Fehrbelliner Platz",
        Kn: "Konstanzer Str",
        Ad: "Adenauerplatz",
        Wd: "Wilmersdorfer Str",
        Bmu: "Bismarckstr",
        Rw: "Richard-Wagner-Platz",
        Mp: "Mierendorffplatz",
        Jh: "Jungfernheide",
        JK: "Jakob-Kaiser-Platz",
        Hl: "Halemweg",
        Sie: "Siemensdamm",
        Rm: "Rohrdamm",
        P: "Paulsternstr",
        Hs: "Haselhorst",
        Zi: "Zitadelle",
        AS: "Altstadt Spandau",
        RSp: "Rathaus Spandau",
        NULL: null
      });
    }
  }, {
    key: "addU8",
    value: function addU8() {
      this.U8 = this.addBLine("U8", {
        WIU: "Wittenau",
        RR: "Rathaus Reinickendorf",
        KB: "Karl-Bonhoeffer-Nervenklinik",
        LD: "Lindauer Allee",
        PB: "Paracelsus-Bad",
        RE: "Residenzstr",
        FN: "Franz-Neumann-Platz",
        Olu: "Osloer Str",
        Pk: "Pankstr",
        Gb: "Gesundbrunnen",
        Vo: "Voltastr",
        B: "Bernauer Str",
        Ro: "Rosenthaler Platz",
        W: "Weinmeisterstr",
        Ap: "Alexanderplatz",
        Jb: "Jannowitzbrücke",
        He: "Heinrich-Heine-Str",
        Mr: "Moritzplatz",
        Kbu: "Kottbusser Tor",
        ST: "Schönleinstr",
        Hpo: "Hermannplatz",
        Bo: "Boddinstr",
        L: "Leinestr",
        HMS: "Hermannstr",
        NULL: null
      });
    }
  }, {
    key: "addU9",
    value: function addU9() {
      this.U9 = this.addBLine("U9", {
        Olo: "Osloer Str",
        Np: "Nauener Platz",
        Lpu: "Leopoldplatz",
        Am: "Amrumer Str",
        WF: "Westhafen",
        Bi: "Birkenstr",
        Tm: "Turmstr",
        Ha: "Hansaplatz",
        Zu: "Zoologischer Garten",
        Kfu: "Kurfürstendamm",
        Snu: "Spichernstr",
        Gt: "Güntzelstr",
        Beo: "Berliner Str",
        Bd: "Bundesplatz",
        Fw: "Friedrich-Wilhelm-Platz",
        Wsg: "Walther-Schreiber-Platz",
        Sl: "Schloßstr",
        Rzu: "Rathaus Steglitz",
        NULL: null
      });
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
        var summary = void 0,
            text = void 0;

        if (/<a.*href=".*".*>.*<\/a>/.test(array[i].summary)) {
          summary = this.replaceLinks(array[i].summary);
        } else {
          summary = array[i].summary;
        }

        if (/<a.*href=".*".*>.*<\/a>/.test(array[i].text)) {
          text = this.replaceLinks(array[i].text);
        } else {
          text = array[i].text;
        }

        if (array[i].type == "warning") {
          return "<span class=\"fas fa-exclamation-triangle\" title=\"".concat(array[i].validFrom, " - ").concat(array[i].validUntil, ": ").concat(summary, ", ").concat(text, "\">&nbsp;</span>");
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
    key: "getStation",
    value: function getStation(line) {
      for (var _len = arguments.length, stations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        stations[_key - 1] = arguments[_key];
      }

      return stations.map(function (station) {
        return line[station];
      });
    }
  }, {
    key: "getTerminus",
    value: function getTerminus(line) {
      for (var _len2 = arguments.length, stations = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        stations[_key2 - 1] = arguments[_key2];
      }

      return stations.map(function (station) {
        return {
          line: line,
          dir: station
        };
      });
    }
  }, {
    key: "replaceLinks",
    value: function replaceLinks(string) {
      var pattern = /<a.*href=\"(.*)\".*>(.*)<\/a>/g;
      var finalString = string.replace(pattern, "$2 ($1)");
      return finalString;
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