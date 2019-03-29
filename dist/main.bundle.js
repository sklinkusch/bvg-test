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

/***/ "./src/directions.js":
/*!***************************!*\
  !*** ./src/directions.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lines = _interopRequireDefault(__webpack_require__(/*! ./lines */ "./src/lines.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Direction =
/*#__PURE__*/
function (_Line) {
  _inherits(Direction, _Line);

  function Direction() {
    var _this;

    _classCallCheck(this, Direction);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Direction).call(this));

    _this.getDirection();

    return _this;
  }

  _createClass(Direction, [{
    key: "getDirection",
    value: function getDirection() {
      this.direction = {
        BALX: {
          stop: [900000100003, 900000100703, 900000100704, 900000100705, 900000100708, 900000100024, 900000100026, 900000100712, 900000100711, 900000100031, 900000100005, 900000100707, 900000100030],
          filter: [[this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"), this.getTerminus("RE2", "Wismar", "Bad Kleinen", "Schwerin", "Wittenberge"), this.getTerminus("RE7", "Dessau", "Bad Belzig"), this.getTerminus("RB14", "Nauen"), this.getTerminus("RE1", "Cottbus", "Eisenhüttenstadt", "Frankfurt"), this.getTerminus("RE2", "Cottbus"), this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"), this.getTerminus("RB14", "Schönefeld"), this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB")], [this.getStation(this.U2, "PA", "VIN", "Sh", "EB", "Sz", "Lu"), this.getStation(this.U2, "Fpo", "Hz", "Sno", "Au", "Rl", "Sd", "Nd", "Th", "Kd", "So", "Bmo", "Obi", "RP", "Zo", "Wt", "No", "BS", "Gu", "MB", "Pd", "MH", "Mi", "Hv", "Sp", "Mk", "Ko")], [[this.U5.NULL]], [this.getStation(this.U8, "WIU", "RR", "KB", "LD", "RE", "FN", "Olu", "Pk", "Gb", "Vo", "B", "Ro", "W"), this.getStation(this.U8, "HMS", "L", "Bo", "Hpo", "ST", "Kbu", "Mr", "He", "Jb")], [this.getTerminus("M48", "Busseallee", "Zehlendorf Eiche", "Rathaus Steglitz", "Potsdamer Platz"), this.getTerminus("TXL", "Flughafen Tegel"), this.getTerminus("100", "Zoologischer Garten"), this.getTerminus("200", "Zoologischer Garten", "Unter den Linden/Friedrichstr"), this.getTerminus("N5", "Hackescher Markt")], [this.getTerminus("M2", null)], [this.getTerminus("M4", "Hackescher Markt"), this.getTerminus("M5", "Hauptbahnhof", "Hackescher Markt"), this.getTerminus("M6", "Hackescher Markt"), this.getTerminus("M4", "Falkenberg", "Zingster Str", "Sulzfelder Str"), this.getTerminus("M5", "Zingster Str"), this.getTerminus("M6", "Riesaer Str", "Betriebshof Marzahn", "Marzahn")], [this.getTerminus("248", "Warschauer Str", "Ostbahnhof")], [this.getTerminus("248", "Breitenbachplatz", "Südkreuz", "Hallesches Tor")], [this.getTerminus("TXL", "Flughafen Tegel"), this.getTerminus("100", "Zoologischer Garten"), this.getTerminus("200", "Zoologischer Garten", "Unter den Linden/Friedrichstr"), this.getTerminus("N2", "Zoologischer Garten"), this.getTerminus("N5", "Hackescher Markt"), this.getTerminus("N42", "Theodor-Heuss-Platz"), this.getTerminus("TXL", "Memhardstr"), this.getTerminus("200", "Michelangelostr")], [this.getTerminus("M4", "Hackescher Markt"), this.getTerminus("M5", "Hauptbahnhof", "Hackescher Markt"), this.getTerminus("M6", "Hackescher Markt"), this.getTerminus("M4", "Falkenberg", "Zingster Str", "Sulzfelder Str"), this.getTerminus("M5", "Zingster Str"), this.getTerminus("M6", "Riesaer Str", "Betriebshof Marzahn", "Marzahn")], [this.getTerminus("N5", "Hackescher Markt"), this.getTerminus("N5", "Riesaer Str", "Wuhletal"), this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")], [this.getTerminus("M2", "Alexanderplatz"), this.getTerminus("M2", "Heinersdorf", "Am Steinberg"), this.getTerminus("N65", "Hackescher Markt")]]
        },
        BBEV: {
          stop: [900000003102],
          filter: [[this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF")]]
        },
        BBEU: {
          stop: [900000020202],
          filter: [[[this.S41], this.getStation(this.S46, "GB", "WED", "WH"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN", "WES", "JUN"), this.getTerminus("TXL", "Flughafen Tegel"), this.getTerminus("106", "Seestr"), this.getTerminus("123", "Mäckeritzwiesen", "Goebelplatz"), this.getTerminus("N26", "Seestr"), this.getTerminus("TXL", "Alexanderplatz", "Hauptbahnhof"), this.getTerminus("106", "Lindenhof", "Südkreuz", "Kurfüstenstr"), this.getTerminus("123", "Hauptbahnhof"), this.getTerminus("N26", "Zoologischer Garten")]]
        },
        BBUP: {
          stop: [900000044202],
          filter: [[[this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP"), this.getStation(this.U9, "Olo", "Np", "Lpu", "Am", "WF", "Bi", "Tm", "Ha", "Zu", "Kfu", "Snu", "Gt", "Beo"), this.getStation(this.U9, "Rzu", "Sl", "Wsg", "Fw"), this.getTerminus("248", "Warschauer Str", "Ostbahnhof", "Alexanderplatz", "Südkreuz"), this.getTerminus("N9", "Osloer Str", "Zoologischer Garten"), this.getTerminus("248", "Breitenbachplatz"), this.getTerminus("N9", "Rathaus Steglitz")]]
        },
        BFA: {
          stop: [900000120001],
          filter: [[[this.S41], this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK"), [this.S42], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO"), this.getStation(this.U5, "Hö", "LL", "HD", "C", "GK", "KL", "Wh", "E", "Bü", "Tk", "Fi", "Li", "Md"), this.getStation(this.U5, "Al", "Si", "Sr", "WR", "FT", "Sa"), this.getTerminus("M13", "Virchow-Klinikum", "Björnsonstr", "Betriebshof Indira-Gandhi-Str", "Degnerstr", "Betriebshof Lichtenberg"), this.getTerminus("16", "Ahrensfelde/Stadtgrenze"), this.getTerminus("M13", "S Warschauer Str", "Scharnweberstr./Weichselstr"), this.getTerminus("16", "Scharnweberstr./Weichselstr"), this.getTerminus("N5", "Riesaer Str", "Wuhletal"), this.getTerminus("N5", "Hackescher Markt")]]
        },
        BFST: {
          stop: [900000100001],
          filter: [[this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"), this.getTerminus("RE2", "Wismar", "Bad Kleinen", "Schwerin", "Wittenberge", "Nauen"), this.getTerminus("RE7", "Dessau", "Bad Belzig"), this.getTerminus("RB14", "Nauen"), this.getTerminus("RB21", "Wustermark", "Golm", "Potsdam"), this.getTerminus("RB22", "Königs Wusterhausen", "Schönefeld", "Golm", "Potsdam"), this.getTerminus("RE1", "Cottbus", "Eisenhüttenstadt", "Frankfurt"), this.getTerminus("RE2", "Cottbus"), this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"), this.getTerminus("RB14", "Schönefeld"), this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB", "ALX", "HKM"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB", "ALX", "HKM"), this.getStation(this.S1, "ORB", "LEN", "BOR", "BIW", "HN", "FOH", "HED", "WAI", "WIN", "WM", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS"), this.getStation(this.S2, "BER", "BRF", "ZEP", "RGT", "BU", "KRW", "BLB", "PHD", "PKW", "BOS", "GB", "HUM", "NB", "ORS"), this.getStation(this.S25, "HD", "HLS", "SZF", "TG", "EBD", "KBO", "ARF", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS"), this.getStation(this.S26, "WAI", "WIN", "WM", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS"), this.getStation(this.S1, "PDH", "BAB", "GRI", "WSS", "NIW", "SLS", "MEX", "ZD", "SDG", "LWE", "BGT", "RST", "FB", "FRU", "SGV", "JLB", "YOR", "AHU", "POP", "TOR"), this.getStation(this.S2, "BFD", "MAH", "LRD", "SC", "BCH", "MF", "ATS", "PRS", "SKV", "YOR", "AHU", "POP", "TOR"), this.getStation(this.S25, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS", "SKV", "YOR", "AHU", "POP", "TOR"), this.getStation(this.S26, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS", "SKV", "YOR", "AHU", "POP", "TOR"), this.getStation(this.U6, "Tg", "Bk", "Hh", "OTI", "Scha", "Sch", "Afr", "Rb", "Se", "Lpo", "We", "Ri", "SK", "NA", "Ob"), this.getStation(this.U6, "Mf", "Wl", "Ull", "Ka", "At", "Ts", "Ps", "PL", "Me", "Hu", "Ks", "Mic", "Fr"), this.getTerminus("M1", "Schillerstr", "Rosenthal Nord"), this.getTerminus("12", "Pasedagplatz"), this.getTerminus("M1", "Am Kupfergraben"), this.getTerminus("12", "Am Kupfergraben"), this.getTerminus("147", "Hauptbahnhof"), this.getTerminus("147", "Ostbahnhof", "Märkisches Museum", "Unter den Linden/Friedrichstr")]]
        },
        BGB: {
          stop: [900000007102],
          filter: [[this.getTerminus("RE3", "Schwedt", "Stralsund", "Prenzlau", "Angermünde", "Eberswalde"), this.getTerminus("RE5", "Rostock", "Stralsund"), this.getTerminus("RB54", "Rheinsberg"), this.getTerminus("RE66", null), this.getTerminus("RB27", null), this.getTerminus("RE3", "Wittenberg", "Falkenberg", "Halle"), this.getTerminus("RE5", "Elsterwerda", "Wünsdorf-Waldstadt"), this.getTerminus("RE6", null), this.getTerminus("RB54", "Lichtenberg"), this.getStation(this.S1, "ORB", "LEN", "BOR", "BIW", "HN", "FOH", "HED", "WAI", "WIN", "WM", "SNH", "WOK", "BOS"), this.getStation(this.S2, "BER", "BRF", "ZEP", "RGT", "BU", "KRW", "BLB", "PHD", "PKW", "BOS"), this.getStation(this.S25, "HD", "HLS", "SZF", "TG", "EBD", "KBO", "ARF", "SNH", "WOK", "BOS"), this.getStation(this.S26, "WAI", "WIN", "WM", "SNH", "WOK", "BOS"), [this.S41], this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS", "PLA", "SAL"), this.getStation(this.S1, "PDH", "BAB", "GRI", "WSS", "NIW", "SLS", "MEX", "ZD", "SDG", "LWE", "BGT", "RST", "FB", "FRU", "SGV", "JLB", "YOR", "AHU", "POP", "TOR", "FSTT", "ORS", "NB", "HUM"), this.getStation(this.S2, "BFD", "MAH", "LRD", "SC", "BCH", "MF", "ATS", "PRS", "SKV", "YOR", "AHU", "POP", "TOR", "FSTT", "ORS", "NB", "HUM"), this.getStation(this.S25, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS", "SKV", "YOR", "AHU", "POP", "TOR", "FSTT", "ORS", "NB", "HUM"), this.getStation(this.S26, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS", "SKV", "YOR", "AHU", "POP", "TOR", "FSTT", "ORS", "NB", "HUM"), [this.S42], [this.S46.NULL], this.getStation(this.S85, "NB", "HUM"), this.getStation(this.U8, "WIU", "RR", "KB", "LD", "PB", "RE", "FN", "Olu", "Pk"), this.getStation(this.U8, "HMS", "L", "Bo", "Hpo", "ST", "Kbu", "Mr", "He", "Jb", "Ap", "W", "Ro", "B", "Vo"), this.getTerminus("247", "Leopoldplatz"), this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"), this.getTerminus("247", "Nordbahnhof", "Bernauer Str"), this.getTerminus("N8", "Hermannstr", "Hermannplatz")]]
        },
        BGSS: {
          stop: [900000110003],
          filter: [[[this.S41], this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST"), [this.S42], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA"), this.getTerminus("M4", "Falkenberg", "Zingster Str", "Sulzfelder Str"), this.getTerminus("M4", "Hackescher Markt")]]
        },
        BHKM: {
          stop: [900000100002],
          filter: [[this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB", "ALX"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB", "ALX"), this.getTerminus("M1", "Rosenthal Nord", "Schillerstr"), this.getTerminus("M1", "Am Kupfergraben"), this.getTerminus("M4", null), this.getTerminus("M5", "Zingster Str", "Petersburger Str"), this.getTerminus("M6", null), this.getTerminus("M5", "Hauptbahnhof"), this.getTerminus("N2", "Pankow"), this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"), this.getTerminus("N40", "Turmstr"), this.getTerminus("N42", "Alexanderplatz"), this.getTerminus("N2", "Ruhleben", "Zoologischer Garten"), this.getTerminus("N5", "Riesaer Str", "Wuhletal"), this.getTerminus("N8", "Hermannstr", "Hermannplatz"), this.getTerminus("N40", "Wühlischplatz"), this.getTerminus("N42", "Theodor-Heuss-Platz"), this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")]]
        },
        BHAL: {
          stop: [900000040101],
          filter: [[[this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO"), this.getTerminus("M19", "Grunewald", "Hagenplatz", "Rathenauplatz"), this.getTerminus("M29", "Roseneck", "Rathenauplatz"), this.getTerminus("X10", "Teltow", "Andr#233ezeile"), this.getTerminus("104", "Brixplatz", "Theodor-Heuss-Platz", "Rathenauplatz"), this.getTerminus("N42", "Theodor-Heuss-Platz", "Rathenauplatz"), this.getTerminus("M19", "Mehringdamm"), this.getTerminus("M29", "Hermannplatz"), this.getTerminus("X10", "Zoologischer Garten"), this.getTerminus("104", "Tunnelstr", "Eichenstr./Puschkinallee", "Treptower Park"), this.getTerminus("N42", "Alexanderplatz")]]
        },
        BHBF: {
          stop: [900000003201, 900000003200],
          filter: [[this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"), this.getTerminus("RE2", "Wismar", "Bad Kleinen", "Schwerin", "Wittenberge"), this.getTerminus("RE7", "Dessau", "Bad Belzig"), this.getTerminus("RB14", "Nauen"), this.getTerminus("RB21", "Wustermark", "Golm", "Potsdam"), this.getTerminus("RB22", "Königs Wusterhausen", "Schönefeld", "Golm", "Potsdam"), this.getTerminus("RE1", "Cottbus", "Eisenhüttenstadt", "Frankfurt"), this.getTerminus("RE2", "Cottbus"), this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"), this.getTerminus("RB14", "Schönefeld"), this.getTerminus("RB21", "Friedrichstr"), this.getTerminus("RB22", "Friedrichstr"), this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB", "ALX", "HKM", "FST"), [this.U55.NULL], this.getTerminus("M5", "Zingster Str"), this.getTerminus("M8", "Ahrensfelde/Stadtgrenze", "Betriebshof", "Marzahn"), this.getTerminus("M10", "Warschauer Str"), this.getTerminus("M5", "Lüneburger Str"), this.getTerminus("M8", "Lüneburger Str"), this.getTerminus("M10", "Lüneburger Str"), this.getTerminus("M41", null), this.getTerminus("M85", null), this.getTerminus("TXL", "Flughafen Tegel"), this.getTerminus("120", "Seydlitzstr"), this.getTerminus("123", "Mäckeritzwiesen", "Goebelplatz"), this.getTerminus("142", "Leopoldplatz"), this.getTerminus("245", "Zoologischer Garten"), this.getTerminus("N40", "Turmstr"), this.getTerminus("TXL", "Alexanderplatz", "Brandenburger Tor"), this.getTerminus("120", "Wilhelmsruher Damm", "Wittenau", "Paracelsus-Bad", "Leopoldplatz"), this.getTerminus("142", "Ostbahnhof"), this.getTerminus("147", "Ostbahnhof", "Märkisches Museum", "Unter den Linden/Friedrichstr"), this.getTerminus("245", "Robert-Koch-Platz"), this.getTerminus("N20", "Hainbuchenstr"), this.getTerminus("N40", "Wühlischplatz")], [this.getTerminus("RE3", "Stralsund", "Prenzlau", "Angermünde", "Schwedt"), this.getTerminus("RE4", "Stendal", "Rathenow"), this.getTerminus("RE5", "Rostock", "Stralsund"), this.getTerminus("RB10", "Nauen"), this.getTerminus("RE3", "Wittenberg", "Falkenberg", "Halle"), this.getTerminus("RE4", "Jüterbog", "Luckenwalde", "Ludwigsfelde"), this.getTerminus("RE5", "Elsterwerda", "Wünsdorf-Waldstadt"), this.getTerminus("RB10", "Südkreuz")]]
        },
        BHEI: {
          stop: [900000045102],
          filter: [[[this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP"), this.getStation(this.U3, "WA", "S", "Gr", "Kbo", "Pr", "Ho", "Mo", "Go", "Kus", "N", "Wt", "Au", "Sno", "Hz", "Fpo"), this.getStation(this.U3, "K", "Ot", "Os", "T", "Dd", "Po", "Bt", "Rd"), this.getTerminus("249", "Roseneck"), this.getTerminus("310", "Wilmersdorfer Str"), this.getTerminus("N3", "Mexikoplatz"), this.getTerminus("249", "Zoologischer Garten"), this.getTerminus("310", "Blissestr"), this.getTerminus("N3", "Wittenbergplatz")]]
        },
        BHER: {
          stop: [900000079221, 900000079220],
          filter: [[[this.S41], this.getStation(this.S45, "SKR", "THF"), this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP", "SGR", "SKR", "THF"), [this.S42], this.getStation(this.S45, "FLH", "GBA", "AGL", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK"), this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK"), [this.S47.NULL], [this.U8.NULL], this.getTerminus("377", "Plänterwald"), this.getTerminus("N8", null), this.getTerminus("N79", "Plänterwald"), this.getTerminus("M44", null), this.getTerminus("246", null), this.getTerminus("277", null), this.getTerminus("370", "Neuköllnische Brücke"), this.getTerminus("377", "Kranoldstr"), this.getTerminus("N79", "Alt-Mariendorf")], [this.getTerminus("246", "Friedrich-Wilhelm-Platz", "Alt-Tempelhof"), this.getTerminus("370", "Neuköllnische Brücke")]]
        },
        BHO: {
          stop: [900000044101],
          filter: [[[this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI"), this.getTerminus("115", "Spanische Allee/Potsdamer Ch", "Neuruppiner Str", "Roseneck"), this.getTerminus("N3", "Mexikoplatz"), this.getTerminus("N10", "Sachtlebenstr"), this.getTerminus("115", "Fehrbelliner Platz"), this.getTerminus("N3", "Wittenbergplatz"), this.getTerminus("N10", "Zoologischer Garten")]]
        },
        BIP: {
          stop: [900000054105],
          filter: [[[this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR"), [this.U4.NULL], this.getTerminus("M48", "Alexanderplatz", "Mohrenstr"), this.getTerminus("M85", "Hauptbahnhof", "Potsdamer Platz"), this.getTerminus("187", "Turmstr", "Kurfürstenstr"), this.getTerminus("248", "Warschauer Str", "Ostbahnhof", "Alexanderplatz", "Hallesches Tor", "Südkreuz"), this.getTerminus("M48", "Busseallee", "Zehlendorf Eiche", "Rathaus Steglitz"), this.getTerminus("M85", "Lichterfelde Süd", "Rathaus Steglitz"), this.getTerminus("187", "Halbauer Weg", "Lankwitz Kirche", "Insulaner"), this.getTerminus("248", "Breitenbachplatz")]]
        },
        BJB: {
          stop: [900000100004],
          filter: [[this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB"), this.getStation(this.U8, "WIU", "RR", "KB", "LD", "PB", "RE", "FN", "Olu", "Pk", "Gb", "Vo", "B", "Ro", "W", "Ap"), this.getStation(this.U8, "HMS", "L", "Bo", "Hpo", "ST", "Kbu", "Mr", "He"), this.getTerminus("248", "Breitenbachplatz", "Südkreuz", "Hallesches Tor", "Alexanderplatz"), this.getTerminus("N40", "Turmstr"), this.getTerminus("Warschauer Str", "Ostbahnhof"), this.getTerminus("N40", "Wühlischplatz"), this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"), this.getTerminus("N65", "Hackescher Markt"), this.getTerminus("N8", "Hermannstr", "Hermannplatz"), this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")]]
        },
        BJUN: {
          stop: [900000020201, 900000020207],
          filter: [[this.getTerminus("RE4", "Stendal", "Rathenow"), this.getTerminus("RE6", "Wittenberge", "Neuruppin"), this.getTerminus("RB10", "Nauen"), this.getTerminus("RB13", "Wustermark"), this.getTerminus("RE4", "Jüterbog", "Luckenwalde", "Ludwigsfelde"), this.getTerminus("RE6", "Gesundbrunnen"), this.getTerminus("RB10", "Südkreuz"), [this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN", "WES"), this.getStation(this.U7, "R", "Zd", "Wk", "La", "Jt", "Br", "Pi", "Bl", "Gz", "Nk", "KM", "Rk", "Hpu", "Sü", "Gs", "Me", "Mu", "Y", "Kt", "Ei", "Bpu", "Beu", "Bli", "Ad", "Wd", "Bmu", "Rw", "Mp"), this.getStation(this.U7, "RSp", "AS", "Zi", "Hs", "P", "Rm", "Sie", "Hl", "JK"), this.getTerminus("M21", "Uhlandstr"), this.getTerminus("M21", "Goerdelersteg"), this.getTerminus("M27", "Pankow"), this.getTerminus("X9", "Zoologischer Garten"), this.getTerminus("N7", "Schönefeld"), this.getTerminus("M27", "Jungfernheide"), this.getTerminus("N7", "Rathaus Spandau")], [this.getTerminus("M27", "Jungfernheide"), this.getTerminus("X9", "Flughafen Tegel"), this.getTerminus("109", "Flughafen Tegel"), this.getTerminus("N7", "Rathaus Spandau"), this.getTerminus("109", "Zoologischer Garten")]]
        },
        BLST: {
          stop: [900000110004],
          filter: [[[this.S41], this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO"), [this.S42], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS"), this.getTerminus("M5", "Hauptbahnhof", "Hackescher Markt", "Landsberger Allee/Petersburger Str"), this.getTerminus("M6", "Hackescher Markt", "Landsberger Allee/Petersburger Str"), this.getTerminus("M8", "Hauptbahnhof", "Landsberger Allee/Petersburger Str"), this.getTerminus("M5", "Zingster Str"), this.getTerminus("M6", "Riesaer Str", "Betriebshof Marzahn", "Marzahn"), this.getTerminus("M8", "Ahrensfelde/Stadtgrenze", "Betriebshof Marzahn"), this.getTerminus("156", "Stadion Buschallee/Hansastr", "Große Seestr", "Pasedagplatz"), this.getTerminus("156", "Storkower Str")]]
        },
        BMN: {
          stop: [900000024106, 900000026204, 900000026202],
          filter: [[[this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR"), this.getTerminus("M49", "Nennhauser Damm", "Reimerweg", "Gatower Str"), this.getTerminus("X34", "Hottengrund", "Gutsstr", "Gatower Str"), this.getTerminus("X49", "Hahneberg", "Spektefeld", "Gatower Str"), this.getTerminus("139", "Werderstr"), this.getTerminus("218", "Pfaueninsel"), this.getTerminus("M49", "Zoologischer Garten", "Savignyplatz", "Wilmersdorfer Str"), this.getTerminus("X34", "Zoologischer Garten", "Savignyplatz", "Wilmersdorfer Str"), this.getTerminus("X49", "Wilmersdorfer Str")], [this.getTerminus("139", "Werderstr"), this.getTerminus("139", "Messe Nord/ICC")], [this.getStation(this.U2, "Rl", "Sd", "Nd", "Th"), this.getStation(this.U2, "PA", "VIN", "Sh", "EB", "Sz", "Lu", "A", "Ko", "Mk", "Sp", "Hv", "Mi", "MH", "Pd", "MB", "Gu", "BS", "No", "Wt", "Zo", "RP", "Obi", "Bmo", "So"), this.getTerminus("139", "Werderstr"), this.getTerminus("139", "Messe Nord/ICC"), this.getTerminus("N2", "Ruhleben"), this.getTerminus("N2", "Pankow", "Hackescher Markt", "Zoologischer Garten")]]
        },
        BNK: {
          stop: [900000078201, 900000078272, 900000078273, 900000078271],
          filter: [[[this.S41], this.getStation(this.S45, "SKR", "THF", "HER"), this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP", "SGR", "SKR", "THF", "HER"), [this.S47.HER], [this.S42], this.getStation(this.S45, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "KHD"), this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD"), this.getStation(this.S47, "SPF", "OSP", "SW", "BMW", "KHD")], [this.getStation(this.U7, "R", "Zd", "Wk", "La", "Jt", "Br", "Pi", "Bl", "Gz"), this.getStation(this.U7, "RSp", "AS", "Zi", "Hs", "P", "Rm", "Sie", "Hl", "JK", "Jh", "Mp", "Rw", "Bmu", "Wd", "Ad", "Kn", "Fpu", "Bli", "Beu", "Bpu", "Ei", "Kt", "Y", "Mu", "Me", "Gs", "Sü", "Hpu", "Rk", "KM")], [this.getTerminus("171", "Schönefeld", "Rudow"), this.getTerminus("N7", "Schönefeld"), this.getTerminus("N79", "Alt-Mariendorf"), this.getTerminus("171", "Hermannplatz", "Sonnenallee"), this.getTerminus("N7", "Rathaus Spandau"), this.getTerminus("N79", "Plänterwald")], [this.getTerminus("171", "Schönefeld", "Rudow"), this.getTerminus("N7", "Schönefeld"), this.getTerminus("370", "Neuköllnische Brücke"), this.getTerminus("377", "Plänterwald"), this.getTerminus("171", "Hermannplatz", "Sonnenallee"), this.getTerminus("N7", "Rathaus Spandau"), this.getTerminus("370", "Hermannstr"), this.getTerminus("377", "Hermannstr")]]
        },
        BOSB: {
          stop: [900000120005],
          filter: [[this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"), this.getTerminus("RE2", "Wismar", "Bad Kleinen", "Schwerin", "Wittenberge", "Nauen"), this.getTerminus("RE7", "Dessau", "Bad Belzig"), this.getTerminus("RB14", "Nauen"), this.getTerminus("RE1", "Cottbus", "Eisenhüttenstadt", "Frankfurt"), this.getTerminus("RE2", "Cottbus"), this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"), this.getTerminus("RB14", "Schönefeld"), this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS"), [this.S75.NULL], this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS"), this.getTerminus("142", "Leopoldplatz", "Hauptbahnhof"), this.getTerminus("248", "Breitenbachplatz", "Südkreuz", "Hallesches Tor", "Alexanderplatz"), this.getTerminus("N40", "Turmstr"), this.getTerminus("147", "Hauptbahnhof", "Unter den Linden/Friedrichstr", "Märkisches Museum"), this.getTerminus("240", "Storkower Str", "Betriebshof Lichtenberg"), this.getTerminus("248", "Warschauer Str"), this.getTerminus("347", "Tunnelstr", "Warschauer Str"), this.getTerminus("N40", "Wühlischplatz")]]
        },
        BOK: {
          stop: [900000120003],
          filter: [[this.getTerminus("RE1", "Cottbus", "Eisenhüttenstadt", "Frankfurt"), this.getTerminus("RE2", "Cottbus"), this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"), this.getTerminus("RB12", "Templin"), this.getTerminus("RB14", "Schönefeld"), this.getTerminus("RB24", "Eberswalde"), this.getTerminus("RB25", "Werneuchen"), this.getTerminus("RB26", "Gorz&#243;w", "Kostrzyn"), this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"), this.getTerminus("RE2", "Wismar", "Bad Kleinen", "Schwerin", "Wittenberge", "Nauen"), this.getTerminus("RE7", "Dessau", "Bad Belzig"), this.getTerminus("RB14", "Nauen"), this.getTerminus("RB24", "Senftenberg", "Cottbus"), this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS"), this.getStation(this.S75, "OSB", "WRS"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL"), this.getStation(this.S75, "WAB", "HH", "GSE", "SPH", "FFO", "LI", "NPL"), this.getStation(this.S9, "LI", "NPL"), [this.S41], this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP"), [this.S42], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA"), this.getTerminus("194", "Helene-Weigel-Platz", "Friedrichsfelde Ost", "Nöldnerplatz"), this.getTerminus("347", "Tunnelstr"), this.getTerminus("N94", "Magdalenenstr"), this.getTerminus("194", "Hermannplatz", "Treptower Park"), this.getTerminus("347", "Ostbahnhof", "Warschauer Str"), this.getTerminus("N94", "Hermannplatz")]]
        },
        BPWA: {
          stop: [900000191002, 900000191802],
          filter: [[[this.S45.TP], [this.S46.TP], [this.S47.TP], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA", "OK", "TP"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS", "TP"), this.getStation(this.S45, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW"), this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW"), this.getStation(this.S47, "SPF", "OSP", "SW", "BMW"), this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW"), this.getStation(this.S9, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW"), this.getTerminus("377", "Hermannstr"), this.getTerminus("N79", "Alt-Mariendorf")], [this.getTerminus("165", "Märkisches Museum", "Treptower Park"), this.getTerminus("166", "Boddinstr", "Treptower Park"), this.getTerminus("N65", "Hackescher Markt"), this.getTerminus("165", "Schöneweide", "Müggelschlößchenweg"), this.getTerminus("166", "Schöneweide"), this.getTerminus("377", "Hermannstr"), this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide"), this.getTerminus("N79", "Alt-Mariendorf")]]
        },
        BPLA: {
          stop: [900000110002],
          filter: [[[this.S41], this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS"), [this.S42], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL"), this.getTerminus("M2", "Heinersdorf", "Am Steinberg"), this.getTerminus("M2", "Alexanderplatz"), this.getTerminus("156", "Stadion Buschallee/Hansastr", "Große Seestr", "Pasedagplatz"), this.getTerminus("156", "Storkower Str", "Michelangelostr")]]
        },
        BSG: {
          stop: [900000054104],
          filter: [[this.getStation(this.S1, "ORB", "LEN", "BOR", "BIW", "HN", "FOH", "HED", "WAI", "WIN", "WM", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS", "FSTT", "TOR", "POP", "AHU", "YOR", "JLB"), this.getStation(this.S1, "PDH", "BAB", "GRI", "WSS", "NIW", "SLS", "MEX", "ZD", "SDG", "LWE", "BGT", "RST", "FB", "FRU"), [this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR"), this.getTerminus("M46", "Zoologischer Garten", "Wittenbergplatz"), this.getTerminus("248", "Breitenbachplatz"), this.getTerminus("M46", "Britz-Süd", "Alt-Tempelhof", "Südkreuz"), this.getTerminus("248", "Warschauer Str", "Ostbahnhof", "Alexanderplatz", "Hallesches Tor", "Südkreuz")]]
        },
        BSAL: {
          stop: [900000110001],
          filter: [[[this.S41], this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS", "PLA"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "OK", "FA", "STO", "LST", "GSS", "PLA"), [this.S42], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS"), this.getStation(this.U2, "PA", "VIN"), this.getStation(this.U2, "Fpo", "Hz", "Sno", "Au", "Rl", "Sd", "Nd", "Th", "Kd", "So", "Bmo", "Obi", "RP", "Zo", "Wt", "No", "BS", "Gu", "MB", "Pd", "MH", "Mi", "Hv", "Sp", "Mk", "Ko", "A", "Lu", "Sz", "EB"), this.getTerminus("M1", "Schillerstr", "Rosenthal Nord"), this.getTerminus("M1", "Am Kupfergraben", "Hackescher Markt")]]
        },
        BSO: {
          stop: [900000077106, 900000077110],
          filter: [[[this.S41], [this.S42], this.getTerminus("M41", "Hauptbahnhof", "Philharmonie", "Hallesches Tor", "Hermannplatz"), this.getTerminus("171", "Hermannplatz"), this.getTerminus("N79", "Alt-Mariendorf"), this.getTerminus("M41", "Sonnenallee/Baumschulenstr"), this.getTerminus("171", "Schönefeld", "Rudow"), this.getTerminus("N79", "Plänterwald")], [this.getTerminus("171", "Schönefeld", "Rudow"), this.getTerminus("N79", "Alt-Mariendorf"), this.getTerminus("171", "Hermannplatz", "Sonnenallee"), this.getTerminus("N79", "Plänterwald")]]
        },
        BSTO: {
          stop: [900000110012, 900000160504],
          filter: [[[this.S41], this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "TP", "OK", "FA"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "TP", "OK", "FA"), [this.S42], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST"), this.getTerminus("156", "Stadion Buschallee", "Große Seestr", "Pasedagplatz"), this.getTerminus("240", "Ostbahnhof", "Betriebshof Lichtenberg")], [this.getTerminus("156", "Stadion Buschallee", "Große Seestr", "Pasedagplatz"), this.getTerminus("156", "Storkower Str")]]
        },
        BSK: {
          stop: [900000058101, 900000058100],
          filter: [[this.getTerminus("RE3", "Schwedt", "Stralsund", "Prenzlau", "Angermünde", "Eberswalde"), this.getTerminus("RE4", "Stendal", "Rathenow"), this.getTerminus("RE5", "Rostock", "Stralsund"), this.getTerminus("RB10", "Nauen"), this.getTerminus("RE3", "Wittenberg", "Falkenberg", "Halle"), this.getTerminus("RE4", "Jüterbog", "Luckenwalde", "Ludwigsfelde"), this.getTerminus("RE5", "Elsterwerda", "Wünsdorf-Waldstadt"), this.getStation(this.S2, "BER", "BRF", "ZEP", "RGT", "BU", "KRW", "BLB", "PHD", "PKW", "BOS", "GB", "HUM", "NB", "ORS", "FSTT", "TOR", "POP", "AHU", "YOR"), this.getStation(this.S25, "HD", "HLS", "SZF", "TG", "EBD", "KBO", "ARF", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS", "FSTT", "TOR", "POP", "AHU", "YOR"), this.getStation(this.S26, "WAI", "WIN", "WM", "SNH", "WOK", "BOS", "GB", "HUM", "NB", "ORS", "FSTT", "TOR", "POP", "AHU", "YOR"), this.getStation(this.S2, "BFD", "MAH", "LRD", "SC", "BCH", "MF", "ATS", "PRS"), this.getStation(this.S25, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS"), this.getStation(this.S26, "TLS", "LIS", "OSS", "LIO", "LAK", "SDE", "PRS"), [this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP", "SGR"), [this.S42], [this.S45.NULL], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF"), this.getTerminus("M46", "Zoologischer Garten", "Wittenbergplatz"), this.getTerminus("106", "Seestr", "Kurfürstenstr"), this.getTerminus("204", "Zoologischer Garten"), this.getTerminus("M46", "Britz-Süd", "Alt-Tempelhof"), this.getTerminus("106", "Lindenhof")], [this.getTerminus("184", "Reichartstr"), this.getTerminus("248", "Breitenbachplatz"), this.getTerminus("184", "Warthestr", "Wismarer Str", "Saaleckstr", "Lichterfelde Ost"), this.getTerminus("248", "Warschauer Str", "Ostbahnhof", "Alexanderplatz", "Hallesches Tor")]]
        },
        BTHF: {
          stop: [900000068201, 900000068272],
          filter: [[[this.S41], [this.S45.SKR], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN", "WKRR", "HAL", "HO", "HEI", "BUP", "IP", "SGR", "SKR"), [this.S42], this.getStation(this.S45, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER"), this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER"), this.getStation(this.U6, "Tg", "Bk", "Hh", "OTI", "Scha", "Sch", "Afr", "Rb", "Se", "Lpo", "We", "Ri", "SK", "NA", "Ob", "F", "Fr", "Mic", "Ks", "Hu", "Me", "PL", "Ps"), this.getStation(this.U6, "Mf", "Wl", "Ull", "At"), this.getTerminus("184", "Südkreuz"), this.getTerminus("N6", "Alt-Tegel"), this.getTerminus("140", "Ostbahnhof", "Mehringdamm"), this.getTerminus("184", "Warthestr", "Wismarer Str", "Saaleckplatz", "Lichterfelde Ost"), this.getTerminus("N6", "Alt-Mariendorf"), this.getTerminus("N84", "Zehlendorf Eiche", "Alt-Tempelhof")], [this.getTerminus("184", "Südkreuz", "Tempelhof"), this.getTerminus("N6", "Alt-Tegel"), this.getTerminus("184", "Warthestr", "Wismarer Str", "Saaleckplatz", "Lichterfelde Ost"), this.getTerminus("N6", "Alt-Mariendorf")]]
        },
        BTGN: {
          stop: [900000003103],
          filter: [[this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV"), this.getTerminus("N9", "Osloer Str"), this.getTerminus("N9", "Rathaus Steglitz", "Zoologischer Garten")]]
        },
        BTP: {
          stop: [900000190001, 900000190701, 900000190702, 900000190100],
          filter: [[[this.S41], this.getStation(this.S45, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA"), this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA"), this.getStation(this.S47, "SPF", "OSP", "SW", "BMW", "PWA"), this.getStation(this.S8, "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "PWA"), this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW", "PWA"), this.getStation(this.S9, "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA"), [this.S42], this.getStation(this.S8, "BIW", "HN", "BFE", "SNF", "MM", "BLB", "PHD", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA", "OK"), this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL", "PLA", "GSS", "LST", "STO", "FA", "OK"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB", "WRS")], [this.getTerminus("165", "Märkisches Museum", "Treptower Park"), this.getTerminus("166", "Boddinstr", "Treptower Park"), this.getTerminus("265", "Stadtmitte", "Märkisches Museum", "Schlesisches Tor", "Treptower Park"), this.getTerminus("N65", "Hackescher Markt")], [this.getTerminus("104", "Brixplatz", "Theodor-Heuss-Platz", "Rathenauplatz", "Halensee", "Berliner Str", "Platz der Luftbrücke", "Boddinstr"), this.getTerminus("194", "Hermannplatz"), this.getTerminus("N94", "Hermannplatz"), this.getTerminus("104", "Tunnelstr"), this.getTerminus("194", "Helene-Weigel-Platz", "Friedrichsfelde Ost", "Nöldnerplatz"), this.getTerminus("N94", "Magdalenenstr")], [this.getTerminus("104", "Brixplatz", "Theodor-Heuss-Platz", "Rathenauplatz", "Halensee", "Berliner Str", "Platz der Luftbrücke", "Boddinstr"), this.getTerminus("165", "Müggelschlößchenweg", "Schöneweide"), this.getTerminus("166", "Boddinstr"), this.getTerminus("194", "Hermannplatz"), this.getTerminus("265", "Schöneweide", "Baumschulenstr"), this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide"), this.getTerminus("N94", "Hermannplatz"), this.getTerminus("104", "Eichenstr./Puschkinallee"), this.getTerminus("165", "Märkisches Museum"), this.getTerminus("265", "Stadtmitte", "Märkisches Museum", "Schlesisches Tor"), this.getTerminus("N65", "Hackescher Markt")]]
        },
        BWRS: {
          stop: [900000120004, 900000120011, 900000120020, 900000120021],
          filter: [[this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB"), [this.S75.OSB], this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS", "WKS", "CHS", "SAP", "ZOS", "TGN", "BEV", "HBF", "FST", "HKM", "ALX", "JB", "OSB"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS"), this.getStation(this.S75, "WAB", "HH", "GSE", "SPH", "FFO", "LI", "NPL", "OKS"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP"), [this.U1.NULL], [this.U3.NULL], this.getTerminus("M10", "Hauptbahnhof", "Friedrich-Ludwig-Jahn-Sportpark"), this.getTerminus("347", "Ostbahnhof"), this.getTerminus("N1", "Helsingforser Platz"), this.getTerminus("347", "Tunnelstr"), this.getTerminus("N1", "Zoologischer Garten"), this.getTerminus("248", "Breitenbachplatz", "Südkreuz", "Hallesches Tor", "Alexanderplatz", "Ostbahnhof")], [this.getTerminus("M10", "Hauptbahnhof", "Friedrich-Ludwig-Jahn-Sportpark"), this.getTerminus("M10", "Warschauer Str")], [this.getTerminus("347", "Ostbahnhof"), this.getTerminus("347", "Tunnelstr"), this.getTerminus("N1", "Zoologischer Garten")], [this.getTerminus("M10", "Hauptbahnhof", "Friedrich-Ludwig-Jahn-Sportpark"), this.getTerminus("M13", "Virchow-Klinikum", "Degnerstr", "Betriebshof Lichtenberg")]]
        },
        BWED: {
          stop: [900000009104, 900000008103],
          filter: [[[this.S41], [this.S46.GB], [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN", "WES", "JUN", "BEU", "WH"), this.getStation(this.U6, "Tg", "Bk", "Hh", "OTI", "Scha", "Sch", "Afr", "Rb", "Se", "Lpo"), this.getStation(this.U6, "Mf", "Wl", "Ull", "Ka", "At", "Ts", "Ps", "PL", "Me", "Ks", "Mic", "Fr", "F", "Ob", "NA", "SK", "Ri"), this.getTerminus("120", "Wilhelmsruher Damm", "Wittenau", "Paracelsus-Bad", "Leopoldplatz"), this.getTerminus("N6", "Alt-Tegel"), this.getTerminus("N20", "Hainbuchenstr")], [this.getTerminus("M27", "Jungfernheide"), this.getTerminus("247", "Leopoldplatz"), this.getTerminus("M27", "Pankow"), this.getTerminus("247", "Nordbahnhof", "Bernauer Str")]]
        },
        BWES: {
          stop: [900000026207, 900000020204],
          filter: [[[this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN"), this.getTerminus("M45", "Johannesstift", "Rathaus Spandau", "DRK-Kliniken Westend"), this.getTerminus("M45", "Zoologischer Garten")], [this.getTerminus("M45", "Johannesstift", "Rathaus Spandau", "DRK-Kliniken Westend"), this.getTerminus("309", "Schlosspark-Klinik"), this.getTerminus("M45", "Zoologischer Garten"), this.getTerminus("309", "Wilmersdorfer Str")]]
        },
        BWH: {
          stop: [900000001201],
          filter: [[[this.S41], [this.S46.GB, this.S46.WED], [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL", "WKRR", "MN", "WES", "JUN", "BEU"), this.getStation(this.U9, "Olo", "Np", "Lpu", "Am"), this.getStation(this.U9, "Rzu", "Sl", "Wsg", "Fw", "Bd", "Beo", "Gt", "Snu", "Kfu", "Zu", "Ha", "Tm", "Bi"), this.getTerminus("N9", "Osloer Str"), this.getTerminus("N9", "Rathaus Steglitz", "Zoologischer Garten")]]
        },
        BWK: {
          stop: [900000024102],
          filter: [[this.getStation(this.S3, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS"), this.getStation(this.S5, "GWD", "OLS", "HST", "MS"), this.getStation(this.S7, "OLS", "HST", "MS", "PDH", "BAB", "GRI", "WSS", "NIS", "GWD"), this.getStation(this.S9, "GWD", "SPA", "SRW", "PIC", "OLS", "HST", "MS"), this.getStation(this.S3, "E", "WIG", "RD", "FRH", "HIG", "KPK", "WHH", "KLH", "RB", "RH", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV", "TGN", "ZOS", "SAP", "CHS"), this.getStation(this.S5, "STN", "STR", "HGM", "STV", "PEN", "FD", "NG", "HPG", "BIS", "MDF", "KAD", "WT", "BDF", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV", "TGN", "ZOS", "SAP", "CHS"), this.getStation(this.S7, "AF", "MEA", "RW", "MAZ", "POE", "SPH", "FFO", "LI", "NPL", "OKS", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV", "TGN", "ZOS", "SAP", "CHS"), this.getStation(this.S9, "LI", "NPL", "OKS", "GAS", "FLH", "GBA", "AGL", "ADL", "SCF", "SW", "BMW", "PWA", "TP", "WRS", "OSB", "JB", "ALX", "HKM", "FST", "HBF", "BEV", "TGN", "ZOS", "SAP", "CHS"), [this.S41], this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES", "MN"), [this.S42], this.getStation(this.S46, "KW", "WI", "ZTH", "EIW", "GAS", "ADL", "SCF", "SW", "BMW", "KHD", "NK", "HER", "THF", "SKR", "SGR", "IP", "BUP", "HEI", "HO", "HAL"), this.getTerminus("104", "Brixplatz", "Theodor-Heuss-Platz"), this.getTerminus("N42", "Theodor-Heuss-Platz")]]
        },
        jov: {
          stop: [900000160541],
          filter: [[this.getTerminus("240", "Storkower Str"), this.getTerminus("N50", "Hugenottenplatz", "Betriebshof Indira-Gandhi-Str", "Pankow"), this.getTerminus("240", "Ostbahnhof", "Betriebshof Lichtenberg"), this.getTerminus("N50", "Tierpark", "Betriebshof Lichtenberg")]]
        },
        bae: {
          stop: [900000160509, 900000160010, 900000160710],
          filter: [[this.getTerminus("M5", "Landsberger Allee/Petersburger Str"), this.getTerminus("M8", "Hauptbahnhof", "Landsberger Allee/Petersburger Str"), this.getTerminus("21", "Schöneweide", "Treskowallee/Ehrlichstr", "Bersarinplatz"), this.getTerminus("M8", "Ahrensfelde/Stadtgrenze", "Betriebshof Marzahn"), this.getTerminus("21", "Lichtenberg/Gudrunstr")], [this.getTerminus("M13", "Warschauer Str", "Frankfurter Allee"), this.getTerminus("16", "Frankfurter Allee"), this.getTerminus("N50", "Hugenottenplatz", "Pankow", "Betriebshof Indira-Gandhi-Str"), this.getTerminus("M13", "Virchow-Klinikum", "Degnerstr"), this.getTerminus("16", "Ahrensfelde/Stadtgrenze"), this.getTerminus("N50", "Tierpark", "Betriebshof Lichtenberg")], [this.getTerminus("M5", "Landsberger Allee/Petersburger Allee"), this.getTerminus("M8", "Hauptbahnhof", "Landsberger Allee/Petersburger Str")]]
        },
        moe: {
          stop: [900000160014],
          filter: [[this.getTerminus("M13", "Warschauer Str", "Frankfurter Allee"), this.getTerminus("16", "Frankfurter Allee"), this.getTerminus("21", "Schöneweide", "Treskowallee/Ehrlichstr", "Bersarinplatz"), this.getTerminus("M13", "Virchow-Klinikum", "Degnerstr", "Betriebshof Lichtenberg"), this.getTerminus("16", "Ahrensfelde/Stadtgrenze"), this.getTerminus("21", "Lichtenberg/Gudrunstr"), this.getTerminus("240", "Storkower Str"), this.getTerminus("N50", "Hugenottenplatz", "Pankow", "Betriebshof Indira-Gandhi-Str"), this.getTerminus("240", "Ostbahnhof", "Betriebshof Lichtenberg"), this.getTerminus("N50", "Tierpark", "Betriebshof Lichtenberg")]]
        },
        gat: {
          stop: [900000032106],
          filter: [[this.getTerminus("M49", "Zoologischer Garten", "Savignyplatz", "Wilmersdorfer Str", "Haus des Rundfunks"), this.getTerminus("X34", "Zoologischer Garten", "Savignyplatz", "Wilmersdorfer Str"), this.getTerminus("X49", "Wilmersdorfer Str"), this.getTerminus("136", "Hennigsdorf", "Aalemannufer", "Werderstr", "Rathaus Spandau"), this.getTerminus("236", "Haselhorst", "Rathaus Spandau"), this.getTerminus("X34", "Hottengrund", "Gutsstr"), this.getTerminus("134", "Hottengrund", "Alt-Kladow", "Alt-Gatow"), this.getTerminus("N34", "Hottengrund"), this.getTerminus("M49", "Nennhauser Damm", "Reimerweg"), this.getTerminus("X49", "Hahneberg", "Im Spektefeld"), this.getTerminus("134", "Wasserwerk Spandau", "Kisseln", "Rathaus Spandau"), this.getTerminus("136", "Am Omnibushof"), this.getTerminus("236", "Am Omnibushof"), this.getTerminus("N34", "Aalemannufer")]]
        },
        wil: {
          stop: [900000032102],
          filter: [[this.getTerminus("135", "Rathaus Spandau", "Am Omnibushof"), this.getTerminus("638", "Rathaus Spandau"), this.getTerminus("M49", "Zoologischer Garten", "Savignyplatz", "Wilmersdorfer Str", "Haus des Rundfunks"), this.getTerminus("X49", "Wilmersdorfer Str"), this.getTerminus("135", "Hottengrund", "Alt-Kladow", "Landstadt Gatow"), this.getTerminus("338", "Havelpark"), this.getTerminus("638", "Potsdam", "Hauptbahnhof", "Campus Jungfernsee"), this.getTerminus("M49", "Nennhauser Damm", "Reimerweg"), this.getTerminus("X49", "Hahneberg", "Im Spektefeld")]]
        }
      };
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
  }]);

  return Direction;
}(_lines.default);

exports.default = Direction;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _directions = _interopRequireDefault(__webpack_require__(/*! ./directions */ "./src/directions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Station =
/*#__PURE__*/
function (_Direction) {
  _inherits(Station, _Direction);

  function Station() {
    var _this;

    _classCallCheck(this, Station);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Station).call(this));
    _this.container = document.querySelector("#container");
    _this._stop = _this.direction.jov.stop;
    _this._filter = _this.direction.jov.filter;

    _this.getData();

    _this.addEventListeners();

    return _this;
  }

  _createClass(Station, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this2 = this;

      var dropdown = document.querySelector("#dropdown");
      dropdown.addEventListener("input", function (e) {
        while (_this2.container.firstChild) {
          _this2.container.removeChild(_this2.container.firstChild);
        }

        var selectValue = e.target.value;
        _this2.stop = _this2.direction[selectValue].stop;
        _this2.filter = _this2.direction[selectValue].filter;

        _this2.getData();
      });
      document.querySelector("#refresh").addEventListener("click", function () {
        while (_this2.container.firstChild) {
          _this2.container.removeChild(_this2.container.firstChild);
        }

        _this2.getData();
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
      var _this3 = this;

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

                _this3.container.appendChild(subheader);

                subheader_ident = false;
              }

              var planTime = void 0,
                  realTime = void 0,
                  delay = void 0;

              if (array[i].when != null && array[i].delay != null) {
                realTime = array[i].when.substr(11, 5);
                delay = Math.floor(array[i].delay / 60);
                planTime = _this3.getPlanTime(realTime, delay);
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

              var mean = _this3.getMean(line);

              var target = array[i].direction;
              var remarks = array[i].remarks;

              var barrier = _this3.checkBarrier(remarks);

              var bike = _this3.checkBike(remarks);

              var warning = _this3.checkWarning(remarks);

              var state = _this3.checkState(remarks);

              var row = document.createElement("div");
              row.className = "row";
              row.innerHTML = "\n            <div class=\"planTime\">".concat(planTime, "</div>\n            <div class=\"realTime\">").concat(realTime, "</div>\n            <div class=\"delay\">").concat(delay, "</div>\n            <div class=\"transport\">").concat(mean, "</div>\n            <div class=\"line\">").concat(line, "</div>\n            <div class=\"direction\">").concat(target, "</div>\n            <div class=\"barrier\">").concat(barrier, "</div>\n            <div class=\"bike\">").concat(bike, "</div>\n            <div class=\"warning\">").concat(warning, "</div>\n            <div class=\"status\">").concat(state, "</div>\n            ");

              _this3.container.appendChild(row);
            }
          }
        });
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this4 = this;

      this.stop.forEach(function (stop, index) {
        var url = "https://1.bvg.transport.rest/stations/".concat(stop, "/departures?duration=60&includeRelatedStations=false");
        fetch(url).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this4.evalData(data, index);
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
}(_directions.default);

var jov = new Station();

/***/ }),

/***/ "./src/lines.js":
/*!**********************!*\
  !*** ./src/lines.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Line =
/*#__PURE__*/
function () {
  function Line() {
    _classCallCheck(this, Line);

    this.addLines();
  }

  _createClass(Line, [{
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
        HBF: "Berlin Hauptbahnhof",
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
        HBF: "Berlin Hauptbahnhof",
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
        HBF: "Berlin Hauptbahnhof",
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
        HBF: "Berlin Hauptbahnhof",
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
  }]);

  return Line;
}();

exports.default = Line;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map