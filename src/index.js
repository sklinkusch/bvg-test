import Line from "./lines";

class Station extends Line {
  constructor(station, filterValues) {
    super();
    this.container = document.querySelector("#container");
    this._stop = station;
    this._filter = filterValues;
    this.getData();
    this.addEventListeners();
  }
  addEventListeners() {
    const dropdown = document.querySelector("#dropdown");
    dropdown.addEventListener("input", e => {
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }
      const selectValue = e.target.value;
      switch (selectValue) {
        case "BALX":
          this.stop = [
            900000100003,
            900000100703,
            900000100704,
            900000100705,
            900000100708,
            900000100024,
            900000100026,
            900000100712,
            900000100711,
            900000100031,
            900000100005,
            900000100707,
            900000100030
          ];
          this.filter = [
            [
              this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"),
              this.getTerminus(
                "RE2",
                "Wismar",
                "Bad Kleinen",
                "Schwerin",
                "Wittenberge"
              ),
              this.getTerminus("RE7", "Dessau", "Bad Belzig"),
              this.getTerminus("RB14", "Nauen"),
              this.getTerminus(
                "RE1",
                "Cottbus",
                "Eisenhüttenstadt",
                "Frankfurt"
              ),
              this.getTerminus("RE2", "Cottbus"),
              this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"),
              this.getTerminus("RB14", "Schönefeld"),
              this.getStation(
                this.S3,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM"
              ),
              this.getStation(
                this.S5,
                "GWD",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM"
              ),
              this.getStation(
                this.S7,
                "OLS",
                "HST",
                "MS",
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIS",
                "GWD",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM"
              ),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM"
              ),
              this.getStation(
                this.S3,
                "E",
                "WIG",
                "RD",
                "FRH",
                "HIG",
                "KPK",
                "WHH",
                "KLH",
                "RB",
                "RH",
                "OKS",
                "WRS",
                "OSB",
                "JB"
              ),
              this.getStation(
                this.S5,
                "STN",
                "STR",
                "HGM",
                "STV",
                "PEN",
                "FD",
                "NG",
                "HPG",
                "BIS",
                "MDF",
                "KAD",
                "WT",
                "BDF",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB",
                "JB"
              ),
              this.getStation(
                this.S7,
                "AF",
                "MEA",
                "RW",
                "MAZ",
                "POE",
                "SPH",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB",
                "JB"
              ),
              this.getStation(
                this.S9,
                "LI",
                "NPL",
                "OKS",
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "WRS",
                "OSB",
                "JB"
              )
            ],
            [
              this.getStation(this.U2, "PA", "VIN", "Sh", "EB", "Sz", "Lu"),
              this.getStation(
                this.U2,
                "Fpo",
                "Hz",
                "Sno",
                "Au",
                "Rl",
                "Sd",
                "Nd",
                "Th",
                "Kd",
                "So",
                "Bmo",
                "Obi",
                "RP",
                "Zo",
                "Wt",
                "No",
                "BS",
                "Gu",
                "MB",
                "Pd",
                "MH",
                "Mi",
                "Hv",
                "Sp",
                "Mk",
                "Ko"
              )
            ],
            [[this.U5.NULL]],
            [
              this.getStation(
                this.U8,
                "WIU",
                "RR",
                "KB",
                "LD",
                "RE",
                "FN",
                "Olu",
                "Pk",
                "Gb",
                "Vo",
                "B",
                "Ro",
                "W"
              ),
              this.getStation(
                this.U8,
                "HMS",
                "L",
                "Bo",
                "Hpo",
                "ST",
                "Kbu",
                "Mr",
                "He",
                "Jb"
              )
            ],
            [
              this.getTerminus(
                "M48",
                "Busseallee",
                "Zehlendorf Eiche",
                "Rathaus Steglitz",
                "Potsdamer Platz"
              ),
              this.getTerminus("TXL", "Flughafen Tegel"),
              this.getTerminus("100", "Zoologischer Garten"),
              this.getTerminus(
                "200",
                "Zoologischer Garten",
                "Unter den Linden/Friedrichstr"
              ),
              this.getTerminus("N5", "Hackescher Markt")
            ],
            [this.getTerminus("M2", null)],
            [
              this.getTerminus("M4", "Hackescher Markt"),
              this.getTerminus("M5", "Hauptbahnhof", "Hackescher Markt"),
              this.getTerminus("M6", "Hackescher Markt"),
              this.getTerminus(
                "M4",
                "Falkenberg",
                "Zingster Str",
                "Sulzfelder Str"
              ),
              this.getTerminus("M5", "Zingster Str"),
              this.getTerminus(
                "M6",
                "Riesaer Str",
                "Betriebshof Marzahn",
                "Marzahn"
              )
            ],
            [this.getTerminus("248", "Warschauer Str", "Ostbahnhof")],
            [
              this.getTerminus(
                "248",
                "Breitenbachplatz",
                "Südkreuz",
                "Hallesches Tor"
              )
            ],
            [
              this.getTerminus("TXL", "Flughafen Tegel"),
              this.getTerminus("100", "Zoologischer Garten"),
              this.getTerminus(
                "200",
                "Zoologischer Garten",
                "Unter den Linden/Friedrichstr"
              ),
              this.getTerminus("N2", "Zoologischer Garten"),
              this.getTerminus("N5", "Hackescher Markt"),
              this.getTerminus("N42", "Theodor-Heuss-Platz"),
              this.getTerminus("TXL", "Memhardstr"),
              this.getTerminus("200", "Michelangelostr")
            ],
            [
              this.getTerminus("M4", "Hackescher Markt"),
              this.getTerminus("M5", "Hauptbahnhof", "Hackescher Markt"),
              this.getTerminus("M6", "Hackescher Markt"),
              this.getTerminus(
                "M4",
                "Falkenberg",
                "Zingster Str",
                "Sulzfelder Str"
              ),
              this.getTerminus("M5", "Zingster Str"),
              this.getTerminus(
                "M6",
                "Riesaer Str",
                "Betriebshof Marzahn",
                "Marzahn"
              )
            ],
            [
              this.getTerminus("N5", "Hackescher Markt"),
              this.getTerminus("N5", "Riesaer Str", "Wuhletal"),
              this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")
            ],
            [
              this.getTerminus("M2", "Alexanderplatz"),
              this.getTerminus("M2", "Heinersdorf", "Am Steinberg"),
              this.getTerminus("N65", "Hackescher Markt")
            ]
          ];
          break;
        case "BBEU":
          this.stop = [900000020202];
          this.filter = [
            [
              [this.S41],
              this.getStation(this.S46, "GB", "WED", "WH"),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI",
                "HO",
                "HAL",
                "WKRR",
                "MN",
                "WES",
                "JUN"
              ),
              this.getTerminus("TXL", "Flughafen Tegel"),
              this.getTerminus("106", "Seestr"),
              this.getTerminus("123", "Mäckeritzwiesen", "Goebelplatz"),
              this.getTerminus("N26", "Seestr"),
              this.getTerminus("TXL", "Alexanderplatz", "Hauptbahnhof"),
              this.getTerminus("106", "Lindenhof", "Südkreuz", "Kurfüstenstr"),
              this.getTerminus("123", "Hauptbahnhof"),
              this.getTerminus("N26", "Zoologischer Garten")
            ]
          ];
          break;
        case "BBUP":
          this.stop = [900000044202];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL",
                "HO",
                "HEI"
              ),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP"
              ),
              this.getStation(
                this.U9,
                "Olo",
                "Np",
                "Lpu",
                "Am",
                "WF",
                "Bi",
                "Tm",
                "Ha",
                "Zu",
                "Kfu",
                "Snu",
                "Gt",
                "Beo"
              ),
              this.getStation(this.U9, "Rzu", "Sl", "Wsg", "Fw"),
              this.getTerminus(
                "248",
                "Warschauer Str",
                "Ostbahnhof",
                "Alexanderplatz",
                "Südkreuz"
              ),
              this.getTerminus("N9", "Osloer Str", "Zoologischer Garten"),
              this.getTerminus("248", "Breitenbachplatz"),
              this.getTerminus("N9", "Rathaus Steglitz")
            ]
          ];
          break;
        case "BFA":
          this.stop = [900000120001];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK"
              ),
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK"
              ),
              [this.S42],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST",
                "STO"
              ),
              this.getStation(
                this.S85,
                "NB",
                "HUM",
                "GB",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST",
                "STO"
              ),
              this.getStation(
                this.U5,
                "Hö",
                "LL",
                "HD",
                "C",
                "GK",
                "KL",
                "Wh",
                "E",
                "Bü",
                "Tk",
                "Fi",
                "Li",
                "Md"
              ),
              this.getStation(this.U5, "Al", "Si", "Sr", "WR", "FT", "Sa"),
              this.getTerminus(
                "M13",
                "Virchow-Klinikum",
                "Björnsonstr",
                "Betriebshof Indira-Gandhi-Str",
                "Degnerstr",
                "Betriebshof Lichtenberg"
              ),
              this.getTerminus("16", "Ahrensfelde/Stadtgrenze"),
              this.getTerminus(
                "M13",
                "S Warschauer Str",
                "Scharnweberstr./Weichselstr"
              ),
              this.getTerminus("16", "Scharnweberstr./Weichselstr"),
              this.getTerminus("N5", "Riesaer Str", "Wuhletal"),
              this.getTerminus("N5", "Hackescher Markt")
            ]
          ];
          break;
        case "BFST":
          this.stop = [900000100001];
          this.filter = [
            [
              this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"),
              this.getTerminus(
                "RE2",
                "Wismar",
                "Bad Kleinen",
                "Schwerin",
                "Wittenberge",
                "Nauen"
              ),
              this.getTerminus("RE7", "Dessau", "Bad Belzig"),
              this.getTerminus("RB14", "Nauen"),
              this.getTerminus("RB21", "Wustermark", "Golm", "Potsdam"),
              this.getTerminus(
                "RB22",
                "Königs Wusterhausen",
                "Schönefeld",
                "Golm",
                "Potsdam"
              ),
              this.getTerminus(
                "RE1",
                "Cottbus",
                "Eisenhüttenstadt",
                "Frankfurt"
              ),
              this.getTerminus("RE2", "Cottbus"),
              this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"),
              this.getTerminus("RB14", "Schönefeld"),
              this.getStation(
                this.S3,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF"
              ),
              this.getStation(
                this.S5,
                "GWD",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF"
              ),
              this.getStation(
                this.S7,
                "OLS",
                "HST",
                "MS",
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIS",
                "GWD",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF"
              ),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF"
              ),
              this.getStation(
                this.S3,
                "E",
                "WIG",
                "RD",
                "FRH",
                "HIG",
                "KPK",
                "WHH",
                "KLH",
                "RB",
                "RH",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX",
                "HKM"
              ),
              this.getStation(
                this.S5,
                "STN",
                "STR",
                "HGM",
                "STV",
                "PEN",
                "FD",
                "NG",
                "HPG",
                "BIS",
                "MDF",
                "KAD",
                "WT",
                "BDF",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX",
                "HKM"
              ),
              this.getStation(
                this.S7,
                "AF",
                "MEA",
                "RW",
                "MAZ",
                "POE",
                "SPH",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX",
                "HKM"
              ),
              this.getStation(
                this.S9,
                "LI",
                "NPL",
                "OKS",
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "WRS",
                "OSB",
                "JB",
                "ALX",
                "HKM"
              ),
              this.getStation(
                this.S1,
                "ORB",
                "LEN",
                "BOR",
                "BIW",
                "HN",
                "FOH",
                "HED",
                "WAI",
                "WIN",
                "WM",
                "SNH",
                "WOK",
                "BOS",
                "GB",
                "HUM",
                "NB",
                "ORS"
              ),
              this.getStation(
                this.S2,
                "BER",
                "BRF",
                "ZEP",
                "RGT",
                "BU",
                "KRW",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "GB",
                "HUM",
                "NB",
                "ORS"
              ),
              this.getStation(
                this.S25,
                "HD",
                "HLS",
                "SZF",
                "TG",
                "EBD",
                "KBO",
                "ARF",
                "SNH",
                "WOK",
                "BOS",
                "GB",
                "HUM",
                "NB",
                "ORS"
              ),
              this.getStation(
                this.S26,
                "WAI",
                "WIN",
                "WM",
                "SNH",
                "WOK",
                "BOS",
                "GB",
                "HUM",
                "NB",
                "ORS"
              ),
              this.getStation(
                this.S1,
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIW",
                "SLS",
                "MEX",
                "ZD",
                "SDG",
                "LWE",
                "BGT",
                "RST",
                "FB",
                "FRU",
                "SGV",
                "JLB",
                "YOR",
                "AHU",
                "POP",
                "TOR"
              ),
              this.getStation(
                this.S2,
                "BFD",
                "MAH",
                "LRD",
                "SC",
                "BCH",
                "MF",
                "ATS",
                "PRS",
                "SKV",
                "YOR",
                "AHU",
                "POP",
                "TOR"
              ),
              this.getStation(
                this.S25,
                "TLS",
                "LIS",
                "OSS",
                "LIO",
                "LAK",
                "SDE",
                "PRS",
                "SKV",
                "YOR",
                "AHU",
                "POP",
                "TOR"
              ),
              this.getStation(
                this.S26,
                "TLS",
                "LIS",
                "OSS",
                "LIO",
                "LAK",
                "SDE",
                "PRS",
                "SKV",
                "YOR",
                "AHU",
                "POP",
                "TOR"
              ),
              this.getStation(
                this.U6,
                "Tg",
                "Bk",
                "Hh",
                "OTI",
                "Scha",
                "Sch",
                "Afr",
                "Rb",
                "Se",
                "Lpo",
                "We",
                "Ri",
                "SK",
                "NA",
                "Ob"
              ),
              this.getStation(
                this.U6,
                "Mf",
                "Wl",
                "Ull",
                "Ka",
                "At",
                "Ts",
                "Ps",
                "PL",
                "Me",
                "Hu",
                "Ks",
                "Mic",
                "Fr"
              ),
              this.getTerminus("M1", "Schillerstr", "Rosenthal Nord"),
              this.getTerminus("12", "Pasedagplatz"),
              this.getTerminus("M1", "Am Kupfergraben"),
              this.getTerminus("12", "Am Kupfergraben"),
              this.getTerminus("147", "Hauptbahnhof"),
              this.getTerminus(
                "147",
                "Ostbahnhof",
                "Märkisches Museum",
                "Unter den Linden/Friedrichstr"
              )
            ]
          ];
          break;
        case "BGB":
          this.stop = [900000007102];
          this.filter = [
            [
              this.getTerminus(
                "RE3",
                "Schwedt",
                "Stralsund",
                "Prenzlau",
                "Angermünde",
                "Eberswalde"
              ),
              this.getTerminus("RE5", "Rostock", "Stralsund"),
              this.getTerminus("RB54", "Rheinsberg"),
              this.getTerminus("RE66", null),
              this.getTerminus("RB27", null),
              this.getTerminus("RE3", "Wittenberg", "Falkenberg", "Halle"),
              this.getTerminus("RE5", "Elsterwerda", "Wünsdorf-Waldstadt"),
              this.getTerminus("RE6", null),
              this.getTerminus("RB54", "Lichtenberg"),
              this.getStation(
                this.S1,
                "ORB",
                "LEN",
                "BOR",
                "BIW",
                "HN",
                "FOH",
                "HED",
                "WAI",
                "WIN",
                "WM",
                "SNH",
                "WOK",
                "BOS"
              ),
              this.getStation(
                this.S2,
                "BER",
                "BRF",
                "ZEP",
                "RGT",
                "BU",
                "KRW",
                "BLB",
                "PHD",
                "PKW",
                "BOS"
              ),
              this.getStation(
                this.S25,
                "HD",
                "HLS",
                "SZF",
                "TG",
                "EBD",
                "KBO",
                "ARF",
                "SNH",
                "WOK",
                "BOS"
              ),
              this.getStation(
                this.S26,
                "WAI",
                "WIN",
                "WM",
                "SNH",
                "WOK",
                "BOS"
              ),
              [this.S41],
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO",
                "LST",
                "GSS",
                "PLA",
                "SAL"
              ),
              this.getStation(
                this.S1,
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIW",
                "SLS",
                "MEX",
                "ZD",
                "SDG",
                "LWE",
                "BGT",
                "RST",
                "FB",
                "FRU",
                "SGV",
                "JLB",
                "YOR",
                "AHU",
                "POP",
                "TOR",
                "FSTT",
                "ORS",
                "NB",
                "HUM"
              ),
              this.getStation(
                this.S2,
                "BFD",
                "MAH",
                "LRD",
                "SC",
                "BCH",
                "MF",
                "ATS",
                "PRS",
                "SKV",
                "YOR",
                "AHU",
                "POP",
                "TOR",
                "FSTT",
                "ORS",
                "NB",
                "HUM"
              ),
              this.getStation(
                this.S25,
                "TLS",
                "LIS",
                "OSS",
                "LIO",
                "LAK",
                "SDE",
                "PRS",
                "SKV",
                "YOR",
                "AHU",
                "POP",
                "TOR",
                "FSTT",
                "ORS",
                "NB",
                "HUM"
              ),
              this.getStation(
                this.S26,
                "TLS",
                "LIS",
                "OSS",
                "LIO",
                "LAK",
                "SDE",
                "PRS",
                "SKV",
                "YOR",
                "AHU",
                "POP",
                "TOR",
                "FSTT",
                "ORS",
                "NB",
                "HUM"
              ),
              [this.S42],
              [this.S46.NULL],
              this.getStation(this.S85, "NB", "HUM"),
              this.getStation(
                this.U8,
                "WIU",
                "RR",
                "KB",
                "LD",
                "PB",
                "RE",
                "FN",
                "Olu",
                "Pk"
              ),
              this.getStation(
                this.U8,
                "HMS",
                "L",
                "Bo",
                "Hpo",
                "ST",
                "Kbu",
                "Mr",
                "He",
                "Jb",
                "Ap",
                "W",
                "Ro",
                "B",
                "Vo"
              ),
              this.getTerminus("247", "Leopoldplatz"),
              this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"),
              this.getTerminus("247", "Nordbahnhof", "Bernauer Str"),
              this.getTerminus("N8", "Hermannstr", "Hermannplatz")
            ]
          ];
          break;
        case "BGSS":
          this.stop = [900000110003];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO",
                "LST"
              ),
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO",
                "LST"
              ),
              [this.S42],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "SAL",
                "PLA"
              ),
              this.getStation(
                this.S85,
                "NB",
                "HUM",
                "GB",
                "PKW",
                "BOS",
                "SAL",
                "PLA"
              ),
              this.getTerminus(
                "M4",
                "Falkenberg",
                "Zingster Str",
                "Sulzfelder Str"
              ),
              this.getTerminus("M4", "Hackescher Markt")
            ]
          ];
          break;
        case "BHKM":
          this.stop = [900000100002];
          this.filter = [
            [
              this.getStation(
                this.S3,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST"
              ),
              this.getStation(
                this.S5,
                "GWD",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST"
              ),
              this.getStation(
                this.S7,
                "OLS",
                "HST",
                "MS",
                "PDH",
                "BAB",
                "WSS",
                "NIS",
                "GWD",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST"
              ),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST"
              ),
              this.getStation(
                this.S3,
                "E",
                "WIG",
                "RD",
                "FRH",
                "HIG",
                "KPK",
                "WHH",
                "KLH",
                "RB",
                "RH",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX"
              ),
              this.getStation(
                this.S5,
                "STN",
                "STR",
                "HGM",
                "STV",
                "PEN",
                "FD",
                "NG",
                "HPG",
                "BIS",
                "MDF",
                "KAD",
                "WT",
                "BDF",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX"
              ),
              this.getStation(
                this.S7,
                "AF",
                "MEA",
                "RW",
                "MAZ",
                "POE",
                "SPH",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX"
              ),
              this.getStation(
                this.S9,
                "LI",
                "NPL",
                "OKS",
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "WRS",
                "OSB",
                "JB",
                "ALX"
              ),
              this.getTerminus("M1", "Rosenthal Nord", "Schillerstr"),
              this.getTerminus("M1", "Am Kupfergraben"),
              this.getTerminus("M4", null),
              this.getTerminus("M5", "Zingster Str", "Petersburger Str"),
              this.getTerminus("M6", null),
              this.getTerminus("M5", "Hauptbahnhof"),
              this.getTerminus("N2", "Pankow"),
              this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"),
              this.getTerminus("N40", "Turmstr"),
              this.getTerminus("N42", "Alexanderplatz"),
              this.getTerminus("N2", "Ruhleben", "Zoologischer Garten"),
              this.getTerminus("N5", "Riesaer Str", "Wuhletal"),
              this.getTerminus("N8", "Hermannstr", "Hermannplatz"),
              this.getTerminus("N40", "Wühlischplatz"),
              this.getTerminus("N42", "Theodor-Heuss-Platz"),
              this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")
            ]
          ];
          break;
        case "BHAL":
          this.stop = [900000040101];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR"
              ),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI",
                "HO"
              ),
              this.getTerminus(
                "M19",
                "Grunewald",
                "Hagenplatz",
                "Rathenauplatz"
              ),
              this.getTerminus("M29", "Roseneck", "Rathenauplatz"),
              this.getTerminus("X10", "Teltow", "Andr#233ezeile"),
              this.getTerminus(
                "104",
                "Brixplatz",
                "Theodor-Heuss-Platz",
                "Rathenauplatz"
              ),
              this.getTerminus("N42", "Theodor-Heuss-Platz", "Rathenauplatz"),
              this.getTerminus("M19", "Mehringdamm"),
              this.getTerminus("M29", "Hermannplatz"),
              this.getTerminus("X10", "Zoologischer Garten"),
              this.getTerminus(
                "104",
                "Tunnelstr",
                "Eichenstr./Puschkinallee",
                "Treptower Park"
              ),
              this.getTerminus("N42", "Alexanderplatz")
            ]
          ];
          break;
        case "BHEI":
          this.stop = [900000045102];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL",
                "HO"
              ),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP"
              ),
              this.getStation(
                this.U3,
                "WA",
                "S",
                "Gr",
                "Kbo",
                "Pr",
                "Ho",
                "Mo",
                "Go",
                "Kus",
                "N",
                "Wt",
                "Au",
                "Sno",
                "Hz",
                "Fpo"
              ),
              this.getStation(
                this.U3,
                "K",
                "Ot",
                "Os",
                "T",
                "Dd",
                "Po",
                "Bt",
                "Rd"
              ),
              this.getTerminus("249", "Roseneck"),
              this.getTerminus("310", "Wilmersdorfer Str"),
              this.getTerminus("N3", "Mexikoplatz"),
              this.getTerminus("249", "Zoologischer Garten"),
              this.getTerminus("310", "Blissestr"),
              this.getTerminus("N3", "Wittenbergplatz")
            ]
          ];
          break;
        case "BHER":
          this.stop = [900000079221, 900000079220];
          this.filter = [
            [
              [this.S41],
              this.getStation(this.S45, "SKR", "THF"),
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL",
                "HO",
                "HEI",
                "BUP",
                "IP",
                "SGR",
                "SKR",
                "THF"
              ),
              [this.S42],
              this.getStation(
                this.S45,
                "FLH",
                "GBA",
                "AGL",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK"
              ),
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK"
              ),
              [this.S47.NULL],
              [this.U8.NULL],
              this.getTerminus("377", "Plänterwald"),
              this.getTerminus("N8", null),
              this.getTerminus("N79", "Plänterwald"),
              this.getTerminus("M44", null),
              this.getTerminus("246", null),
              this.getTerminus("277", null),
              this.getTerminus("370", "Neuköllnische Brücke"),
              this.getTerminus("377", "Kranoldstr"),
              this.getTerminus("N79", "Alt-Mariendorf")
            ],
            [
              this.getTerminus(
                "246",
                "Friedrich-Wilhelm-Platz",
                "Alt-Tempelhof"
              ),
              this.getTerminus("370", "Neuköllnische Brücke")
            ]
          ];
          break;
        case "BHO":
          this.stop = [900000044101];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL"
              ),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI"
              ),
              this.getTerminus(
                "115",
                "Spanische Allee/Potsdamer Ch",
                "Neuruppiner Str",
                "Roseneck"
              ),
              this.getTerminus("N3", "Mexikoplatz"),
              this.getTerminus("N10", "Sachtlebenstr"),
              this.getTerminus("115", "Fehrbelliner Platz"),
              this.getTerminus("N3", "Wittenbergplatz"),
              this.getTerminus("N10", "Zoologischer Garten")
            ]
          ];
          break;
        case "BIP":
          this.stop = [900000054105];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL",
                "HO",
                "HEI",
                "BUP"
              ),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR"
              ),
              [this.U4.NULL],
              this.getTerminus("M48", "Alexanderplatz", "Mohrenstr"),
              this.getTerminus("M85", "Hauptbahnhof", "Potsdamer Platz"),
              this.getTerminus("187", "Turmstr", "Kurfürstenstr"),
              this.getTerminus(
                "248",
                "Warschauer Str",
                "Ostbahnhof",
                "Alexanderplatz",
                "Hallesches Tor",
                "Südkreuz"
              ),
              this.getTerminus(
                "M48",
                "Busseallee",
                "Zehlendorf Eiche",
                "Rathaus Steglitz"
              ),
              this.getTerminus("M85", "Lichterfelde Süd", "Rathaus Steglitz"),
              this.getTerminus(
                "187",
                "Halbauer Weg",
                "Lankwitz Kirche",
                "Insulaner"
              ),
              this.getTerminus("248", "Breitenbachplatz")
            ]
          ];
          break;
        case "BJB":
          this.stop = [900000100004];
          this.filter = [
            [
              this.getStation(
                this.S3,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX"
              ),
              this.getStation(
                this.S5,
                "GWD",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX"
              ),
              this.getStation(
                this.S7,
                "OLS",
                "HST",
                "MS",
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIS",
                "GWD",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX"
              ),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX"
              ),
              this.getStation(
                this.S3,
                "E",
                "WIG",
                "RD",
                "FRH",
                "HIG",
                "KPK",
                "WHH",
                "KLH",
                "RB",
                "RH",
                "OKS",
                "WRS",
                "OSB"
              ),
              this.getStation(
                this.S5,
                "STN",
                "STR",
                "HGM",
                "STV",
                "PEN",
                "FD",
                "NG",
                "HPG",
                "BIS",
                "MDF",
                "KAD",
                "WT",
                "BDF",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB"
              ),
              this.getStation(
                this.S7,
                "AF",
                "MEA",
                "RW",
                "MAZ",
                "POE",
                "SPH",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB"
              ),
              this.getStation(
                this.S9,
                "LI",
                "NPL",
                "OKS",
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "WRS",
                "OSB"
              ),
              this.getStation(
                this.U8,
                "WIU",
                "RR",
                "KB",
                "LD",
                "PB",
                "RE",
                "FN",
                "Olu",
                "Pk",
                "Gb",
                "Vo",
                "B",
                "Ro",
                "W",
                "Ap"
              ),
              this.getStation(
                this.U8,
                "HMS",
                "L",
                "Bo",
                "Hpo",
                "ST",
                "Kbu",
                "Mr",
                "He"
              ),
              this.getTerminus(
                "248",
                "Breitenbachplatz",
                "Südkreuz",
                "Hallesches Tor",
                "Alexanderplatz"
              ),
              this.getTerminus("N40", "Turmstr"),
              this.getTerminus("Warschauer Str", "Ostbahnhof"),
              this.getTerminus("N40", "Wühlischplatz"),
              this.getTerminus("N8", "Wilhelmsruher Damm", "Osloer Str"),
              this.getTerminus("N65", "Hackescher Markt"),
              this.getTerminus("N8", "Hermannstr", "Hermannplatz"),
              this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide")
            ]
          ];
          break;
        case "BJUN":
          this.stop = [900000020201, 900000020207];
          this.filter = [
            [
              this.getTerminus("RE4", "Stendal", "Rathenow"),
              this.getTerminus("RE6", "Wittenberge", "Neuruppin"),
              this.getTerminus("RB10", "Nauen"),
              this.getTerminus("RB13", "Wustermark"),
              this.getTerminus(
                "RE4",
                "Jüterbog",
                "Luckenwalde",
                "Ludwigsfelde"
              ),
              this.getTerminus("RE6", "Gesundbrunnen"),
              this.getTerminus("RB10", "Südkreuz"),
              [this.S41],
              this.getStation(this.S46, "GB", "WED", "WH", "BEU"),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI",
                "HO",
                "HAL",
                "WKRR",
                "MN",
                "WES"
              ),
              this.getStation(
                this.U7,
                "R",
                "Zd",
                "Wk",
                "La",
                "Jt",
                "Br",
                "Pi",
                "Bl",
                "Gz",
                "Nk",
                "KM",
                "Rk",
                "Hpu",
                "Sü",
                "Gs",
                "Me",
                "Mu",
                "Y",
                "Kt",
                "Ei",
                "Bpu",
                "Beu",
                "Bli",
                "Ad",
                "Wd",
                "Bmu",
                "Rw",
                "Mp"
              ),
              this.getStation(
                this.U7,
                "RSp",
                "AS",
                "Zi",
                "Hs",
                "P",
                "Rm",
                "Sie",
                "Hl",
                "JK"
              ),
              this.getTerminus("M21", "Uhlandstr"),
              this.getTerminus("M21", "Goerdelersteg"),
              this.getTerminus("M27", "Pankow"),
              this.getTerminus("X9", "Zoologischer Garten"),
              this.getTerminus("N7", "Schönefeld"),
              this.getTerminus("M27", "Jungfernheide"),
              this.getTerminus("N7", "Rathaus Spandau")
            ],
            [
              this.getTerminus("M27", "Jungfernheide"),
              this.getTerminus("X9", "Flughafen Tegel"),
              this.getTerminus("109", "Flughafen Tegel"),
              this.getTerminus("N7", "Rathaus Spandau"),
              this.getTerminus("109", "Zoologischer Garten")
            ]
          ];
          break;
        case "BLST":
          this.stop = [900000110004];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO"
              ),
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO"
              ),
              [this.S42],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS"
              ),
              this.getStation(
                this.S85,
                "NB",
                "HUM",
                "GB",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS"
              ),
              this.getTerminus(
                "M5",
                "Hauptbahnhof",
                "Hackescher Markt",
                "Landsberger Allee/Petersburger Str"
              ),
              this.getTerminus(
                "M6",
                "Hackescher Markt",
                "Landsberger Allee/Petersburger Str"
              ),
              this.getTerminus(
                "M8",
                "Hauptbahnhof",
                "Landsberger Allee/Petersburger Str"
              ),
              this.getTerminus("M5", "Zingster Str"),
              this.getTerminus(
                "M6",
                "Riesaer Str",
                "Betriebshof Marzahn",
                "Marzahn"
              ),
              this.getTerminus(
                "M8",
                "Ahrensfelde/Stadtgrenze",
                "Betriebshof Marzahn"
              ),
              this.getTerminus(
                "156",
                "Stadion Buschallee/Hansastr",
                "Große Seestr",
                "Pasedagplatz"
              ),
              this.getTerminus("156", "Storkower Str")
            ]
          ];
          break;
        case "BMN":
          this.stop = [900000024106, 900000026204, 900000026202];
          this.filter = [
            [
              [this.S41],
              this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN", "WES"),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI",
                "HO",
                "HAL",
                "WKRR"
              ),
              this.getTerminus(
                "M49",
                "Nennhauser Damm",
                "Reimerweg",
                "Gatower Str"
              ),
              this.getTerminus("X34", "Hottengrund", "Gutsstr", "Gatower Str"),
              this.getTerminus("X49", "Hahneberg", "Spektefeld", "Gatower Str"),
              this.getTerminus("139", "Werderstr"),
              this.getTerminus("218", "Pfaueninsel"),
              this.getTerminus(
                "M49",
                "Zoologischer Garten",
                "Savignyplatz",
                "Wilmersdorfer Str"
              ),
              this.getTerminus(
                "X34",
                "Zoologischer Garten",
                "Savignyplatz",
                "Wilmersdorfer Str"
              ),
              this.getTerminus("X49", "Wilmersdorfer Str")
            ],
            [
              this.getTerminus("139", "Werderstr"),
              this.getTerminus("139", "Messe Nord/ICC")
            ],
            [
              this.getStation(this.U2, "Rl", "Sd", "Nd", "Th"),
              this.getStation(
                this.U2,
                "PA",
                "VIN",
                "Sh",
                "EB",
                "Sz",
                "Lu",
                "A",
                "Ko",
                "Mk",
                "Sp",
                "Hv",
                "Mi",
                "MH",
                "Pd",
                "MB",
                "Gu",
                "BS",
                "No",
                "Wt",
                "Zo",
                "RP",
                "Obi",
                "Bmo",
                "So"
              ),
              this.getTerminus("139", "Werderstr"),
              this.getTerminus("139", "Messe Nord/ICC"),
              this.getTerminus("N2", "Ruhleben"),
              this.getTerminus(
                "N2",
                "Pankow",
                "Hackescher Markt",
                "Zoologischer Garten"
              )
            ]
          ];
          break;
        case "BNK":
          this.stop = [900000078201, 900000078272, 900000078273, 900000078271];
          this.filter = [
            [
              [this.S41],
              this.getStation(this.S45, "SKR", "THF", "HER"),
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL",
                "HO",
                "HEI",
                "BUP",
                "IP",
                "SGR",
                "SKR",
                "THF",
                "HER"
              ),
              [this.S47.HER],
              [this.S42],
              this.getStation(
                this.S45,
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD"
              ),
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD"
              ),
              this.getStation(this.S47, "SPF", "OSP", "SW", "BMW", "KHD")
            ],
            [
              this.getStation(
                this.U7,
                "R",
                "Zd",
                "Wk",
                "La",
                "Jt",
                "Br",
                "Pi",
                "Bl",
                "Gz"
              ),
              this.getStation(
                this.U7,
                "RSp",
                "AS",
                "Zi",
                "Hs",
                "P",
                "Rm",
                "Sie",
                "Hl",
                "JK",
                "Jh",
                "Mp",
                "Rw",
                "Bmu",
                "Wd",
                "Ad",
                "Kn",
                "Fpu",
                "Bli",
                "Beu",
                "Bpu",
                "Ei",
                "Kt",
                "Y",
                "Mu",
                "Me",
                "Gs",
                "Sü",
                "Hpu",
                "Rk",
                "KM"
              )
            ],
            [
              this.getTerminus("171", "Schönefeld", "Rudow"),
              this.getTerminus("N7", "Schönefeld"),
              this.getTerminus("N79", "Alt-Mariendorf"),
              this.getTerminus("171", "Hermannplatz", "Sonnenallee"),
              this.getTerminus("N7", "Rathaus Spandau"),
              this.getTerminus("N79", "Plänterwald")
            ],
            [
              this.getTerminus("171", "Schönefeld", "Rudow"),
              this.getTerminus("N7", "Schönefeld"),
              this.getTerminus("370", "Neuköllnische Brücke"),
              this.getTerminus("377", "Plänterwald"),
              this.getTerminus("171", "Hermannplatz", "Sonnenallee"),
              this.getTerminus("N7", "Rathaus Spandau"),
              this.getTerminus("370", "Hermannstr"),
              this.getTerminus("377", "Hermannstr")
            ]
          ];
          break;
        case "BOSB":
          this.stop = [900000120005];
          this.filter = [
            [
              this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"),
              this.getTerminus(
                "RE2",
                "Wismar",
                "Bad Kleinen",
                "Schwerin",
                "Wittenberge",
                "Nauen"
              ),
              this.getTerminus("RE7", "Dessau", "Bad Belzig"),
              this.getTerminus("RB14", "Nauen"),
              this.getTerminus(
                "RE1",
                "Cottbus",
                "Eisenhüttenstadt",
                "Frankfurt"
              ),
              this.getTerminus("RE2", "Cottbus"),
              this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"),
              this.getTerminus("RB14", "Schönefeld"),
              this.getStation(
                this.S3,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB"
              ),
              this.getStation(
                this.S5,
                "GWD",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB"
              ),
              this.getStation(
                this.S7,
                "OLS",
                "HST",
                "MS",
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIS",
                "GWD",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB"
              ),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB"
              ),
              this.getStation(
                this.S3,
                "E",
                "WIG",
                "RD",
                "FRH",
                "HIG",
                "KPK",
                "WHH",
                "KLH",
                "RB",
                "RH",
                "OKS",
                "WRS"
              ),
              this.getStation(
                this.S5,
                "STN",
                "STR",
                "HGM",
                "STV",
                "PEN",
                "FD",
                "NG",
                "HPG",
                "BIS",
                "MDF",
                "KAD",
                "WT",
                "BDF",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS"
              ),
              this.getStation(
                this.S7,
                "AF",
                "MEA",
                "RW",
                "MAZ",
                "POE",
                "SPH",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS"
              ),
              [this.S75.NULL],
              this.getStation(
                this.S9,
                "LI",
                "NPL",
                "OKS",
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "WRS"
              ),
              this.getTerminus("142", "Leopoldplatz", "Hauptbahnhof"),
              this.getTerminus(
                "248",
                "Breitenbachplatz",
                "Südkreuz",
                "Hallesches Tor",
                "Alexanderplatz"
              ),
              this.getTerminus("N40", "Turmstr"),
              this.getTerminus(
                "147",
                "Hauptbahnhof",
                "Unter den Linden/Friedrichstr",
                "Märkisches Museum"
              ),
              this.getTerminus(
                "240",
                "Storkower Str",
                "Betriebshof Lichtenberg"
              ),
              this.getTerminus("248", "Warschauer Str"),
              this.getTerminus("347", "Tunnelstr", "Warschauer Str"),
              this.getTerminus("N40", "Wühlischplatz")
            ]
          ];
          break;
        case "BOK":
          this.stop = [900000120003];
          this.filter = [
            [
              this.getTerminus(
                "RE1",
                "Cottbus",
                "Eisenhüttenstadt",
                "Frankfurt"
              ),
              this.getTerminus("RE2", "Cottbus"),
              this.getTerminus("RE7", "Wünsdorf-Waldstadt", "Schönefeld"),
              this.getTerminus("RB12", "Templin"),
              this.getTerminus("RB14", "Schönefeld"),
              this.getTerminus("RB24", "Eberswalde"),
              this.getTerminus("RB25", "Werneuchen"),
              this.getTerminus("RB26", "Gorz&#243;w", "Kostrzyn"),
              this.getTerminus("RE1", "Magdeburg", "Brandenburg", "Potsdam"),
              this.getTerminus(
                "RE2",
                "Wismar",
                "Bad Kleinen",
                "Schwerin",
                "Wittenberge",
                "Nauen"
              ),
              this.getTerminus("RE7", "Dessau", "Bad Belzig"),
              this.getTerminus("RB14", "Nauen"),
              this.getTerminus("RB24", "Senftenberg", "Cottbus"),
              this.getStation(
                this.S3,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB",
                "WRS"
              ),
              this.getStation(
                this.S5,
                "GWD",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB",
                "WRS"
              ),
              this.getStation(
                this.S7,
                "OLS",
                "HST",
                "MS",
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIS",
                "GWD",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB",
                "WRS"
              ),
              this.getStation(this.S75, "OSB", "WRS"),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB",
                "WRS"
              ),
              this.getStation(
                this.S3,
                "E",
                "WIG",
                "RD",
                "FRH",
                "HIG",
                "KPK",
                "WHH",
                "KLH",
                "RB",
                "RH"
              ),
              this.getStation(
                this.S5,
                "STN",
                "STR",
                "HGM",
                "STV",
                "PEN",
                "FD",
                "NG",
                "HPG",
                "BIS",
                "MDF",
                "KAD",
                "WT",
                "BDF",
                "FFO",
                "LI",
                "NPL"
              ),
              this.getStation(
                this.S7,
                "AF",
                "MEA",
                "RW",
                "MAZ",
                "POE",
                "SPH",
                "FFO",
                "LI",
                "NPL"
              ),
              this.getStation(
                this.S75,
                "WAB",
                "HH",
                "GSE",
                "SPH",
                "FFO",
                "LI",
                "NPL"
              ),
              this.getStation(this.S9, "LI", "NPL"),
              [this.S41],
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP"
              ),
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP"
              ),
              [this.S42],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST",
                "STO",
                "FA"
              ),
              this.getStation(
                this.S85,
                "NB",
                "HUM",
                "GB",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST",
                "STO",
                "FA"
              ),
              this.getTerminus(
                "194",
                "Helene-Weigel-Platz",
                "Friedrichsfelde Ost",
                "Nöldnerplatz"
              ),
              this.getTerminus("347", "Tunnelstr"),
              this.getTerminus("N94", "Magdalenenstr"),
              this.getTerminus("194", "Hermannplatz", "Treptower Park"),
              this.getTerminus("347", "Ostbahnhof", "Warschauer Str"),
              this.getTerminus("N94", "Hermannplatz")
            ]
          ];
          break;
        case "BPWA":
          this.stop = [900000191002, 900000191802];
          this.filter = [
            [
              [this.S45.TP],
              [this.S46.TP],
              [this.S47.TP],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST",
                "STO",
                "FA",
                "OK",
                "TP"
              ),
              this.getStation(
                this.S85,
                "NB",
                "HUM",
                "GB",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST",
                "STO",
                "FA"
              ),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB",
                "WRS",
                "TP"
              ),
              this.getStation(
                this.S45,
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW"
              ),
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW"
              ),
              this.getStation(this.S47, "SPF", "OSP", "SW", "BMW"),
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW"
              ),
              this.getStation(this.S85, "GAS", "ADL", "SCF", "SW", "BMW"),
              this.getStation(
                this.S9,
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW"
              ),
              this.getTerminus("377", "Hermannstr"),
              this.getTerminus("N79", "Alt-Mariendorf")
            ],
            [
              this.getTerminus("165", "Märkisches Museum", "Treptower Park"),
              this.getTerminus("166", "Boddinstr", "Treptower Park"),
              this.getTerminus("N65", "Hackescher Markt"),
              this.getTerminus("165", "Schöneweide", "Müggelschlößchenweg"),
              this.getTerminus("166", "Schöneweide"),
              this.getTerminus("377", "Hermannstr"),
              this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide"),
              this.getTerminus("N79", "Alt-Mariendorf")
            ]
          ];
          break;
        case "BPLA":
          this.stop = [900000110002];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO",
                "LST",
                "GSS"
              ),
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO",
                "LST",
                "GSS"
              ),
              [this.S42],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "SAL"
              ),
              this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS", "SAL"),
              this.getTerminus("M2", "Heinersdorf", "Am Steinberg"),
              this.getTerminus("M2", "Alexanderplatz"),
              this.getTerminus(
                "156",
                "Stadion Buschallee/Hansastr",
                "Große Seestr",
                "Pasedagplatz"
              ),
              this.getTerminus("156", "Storkower Str", "Michelangelostr")
            ]
          ];
          break;
        case "BSG":
          this.stop = [900000054104];
          this.filter = [
            [
              this.getStation(
                this.S1,
                "ORB",
                "LEN",
                "BOR",
                "BIW",
                "HN",
                "FOH",
                "HED",
                "WAI",
                "WIN",
                "WM",
                "SNH",
                "WOK",
                "BOS",
                "GB",
                "HUM",
                "NB",
                "ORS",
                "FSTT",
                "TOR",
                "POP",
                "AHU",
                "YOR",
                "JLB"
              ),
              this.getStation(
                this.S1,
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIW",
                "SLS",
                "MEX",
                "ZD",
                "SDG",
                "LWE",
                "BGT",
                "RST",
                "FB",
                "FRU"
              ),
              [this.S41],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL",
                "HO",
                "HEI",
                "BUP",
                "IP"
              ),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR"
              ),
              this.getTerminus("M46", "Zoologischer Garten", "Wittenbergplatz"),
              this.getTerminus("248", "Breitenbachplatz"),
              this.getTerminus("M46", "Britz-Süd", "Alt-Tempelhof", "Südkreuz"),
              this.getTerminus(
                "248",
                "Warschauer Str",
                "Ostbahnhof",
                "Alexanderplatz",
                "Hallesches Tor",
                "Südkreuz"
              )
            ]
          ];
          break;
        case "BSAL":
          this.stop = [900000110001];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO",
                "LST",
                "GSS",
                "PLA"
              ),
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "OK",
                "FA",
                "STO",
                "LST",
                "GSS",
                "PLA"
              ),
              [this.S42],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS"
              ),
              this.getStation(this.S85, "NB", "HUM", "GB", "PKW", "BOS"),
              this.getStation(this.U2, "PA", "VIN"),
              this.getStation(
                this.U2,
                "Fpo",
                "Hz",
                "Sno",
                "Au",
                "Rl",
                "Sd",
                "Nd",
                "Th",
                "Kd",
                "So",
                "Bmo",
                "Obi",
                "RP",
                "Zo",
                "Wt",
                "No",
                "BS",
                "Gu",
                "MB",
                "Pd",
                "MH",
                "Mi",
                "Hv",
                "Sp",
                "Mk",
                "Ko",
                "A",
                "Lu",
                "Sz",
                "EB"
              ),
              this.getTerminus("M1", "Schillerstr", "Rosenthal Nord"),
              this.getTerminus("M1", "Am Kupfergraben", "Hackescher Markt")
            ]
          ];
          break;
        case "BSO":
          this.stop = [900000077106, 900000077110];
          this.filter = [
            [
              [this.S41],
              [this.S42],
              this.getTerminus(
                "M41",
                "Hauptbahnhof",
                "Philharmonie",
                "Hallesches Tor",
                "Hermannplatz"
              ),
              this.getTerminus("171", "Hermannplatz"),
              this.getTerminus("N79", "Alt-Mariendorf"),
              this.getTerminus("M41", "Sonnenallee/Baumschulenstr"),
              this.getTerminus("171", "Schönefeld", "Rudow"),
              this.getTerminus("N79", "Plänterwald")
            ],
            [
              this.getTerminus("171", "Schönefeld", "Rudow"),
              this.getTerminus("N79", "Alt-Mariendorf"),
              this.getTerminus("171", "Hermannplatz", "Sonnenallee"),
              this.getTerminus("N79", "Plänterwald")
            ]
          ];
          break;
        case "BSTO":
          this.stop = [900000110012, 900000160504];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "TP",
                "OK",
                "FA"
              ),
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "TP",
                "OK",
                "FA"
              ),
              [this.S42],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST"
              ),
              this.getStation(
                this.S85,
                "NB",
                "HUM",
                "GB",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST"
              ),
              this.getTerminus(
                "156",
                "Stadion Buschallee",
                "Große Seestr",
                "Pasedagplatz"
              ),
              this.getTerminus("240", "Ostbahnhof", "Betriebshof Lichtenberg")
            ],
            [
              this.getTerminus(
                "156",
                "Stadion Buschallee",
                "Große Seestr",
                "Pasedagplatz"
              ),
              this.getTerminus("156", "Storkower Str")
            ]
          ];
          break;
        case "BSK":
          this.stop = [900000058101, 900000058100];
          this.filter = [
            [
              this.getTerminus(
                "RE3",
                "Schwedt",
                "Stralsund",
                "Prenzlau",
                "Angermünde",
                "Eberswalde"
              ),
              this.getTerminus("RE4", "Stendal", "Rathenow"),
              this.getTerminus("RE5", "Rostock", "Stralsund"),
              this.getTerminus("RB10", "Nauen"),
              this.getTerminus("RE3", "Wittenberg", "Falkenberg", "Halle"),
              this.getTerminus(
                "RE4",
                "Jüterbog",
                "Luckenwalde",
                "Ludwigsfelde"
              ),
              this.getTerminus("RE5", "Elsterwerda", "Wünsdorf-Waldstadt"),
              this.getStation(
                this.S2,
                "BER",
                "BRF",
                "ZEP",
                "RGT",
                "BU",
                "KRW",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "GB",
                "HUM",
                "NB",
                "ORS",
                "FSTT",
                "TOR",
                "POP",
                "AHU",
                "YOR"
              ),
              this.getStation(
                this.S25,
                "HD",
                "HLS",
                "SZF",
                "TG",
                "EBD",
                "KBO",
                "ARF",
                "SNH",
                "WOK",
                "BOS",
                "GB",
                "HUM",
                "NB",
                "ORS",
                "FSTT",
                "TOR",
                "POP",
                "AHU",
                "YOR"
              ),
              this.getStation(
                this.S26,
                "WAI",
                "WIN",
                "WM",
                "SNH",
                "WOK",
                "BOS",
                "GB",
                "HUM",
                "NB",
                "ORS",
                "FSTT",
                "TOR",
                "POP",
                "AHU",
                "YOR"
              ),
              this.getStation(
                this.S2,
                "BFD",
                "MAH",
                "LRD",
                "SC",
                "BCH",
                "MF",
                "ATS",
                "PRS"
              ),
              this.getStation(
                this.S25,
                "TLS",
                "LIS",
                "OSS",
                "LIO",
                "LAK",
                "SDE",
                "PRS"
              ),
              this.getStation(
                this.S26,
                "TLS",
                "LIS",
                "OSS",
                "LIO",
                "LAK",
                "SDE",
                "PRS"
              ),
              [this.S41],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL",
                "HO",
                "HEI",
                "BUP",
                "IP",
                "SGR"
              ),
              [this.S42],
              [this.S45.NULL],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF"
              ),
              this.getTerminus("M46", "Zoologischer Garten", "Wittenbergplatz"),
              this.getTerminus("106", "Seestr", "Kurfürstenstr"),
              this.getTerminus("204", "Zoologischer Garten"),
              this.getTerminus("M46", "Britz-Süd", "Alt-Tempelhof"),
              this.getTerminus("106", "Lindenhof")
            ],
            [
              this.getTerminus("184", "Reichartstr"),
              this.getTerminus("248", "Breitenbachplatz"),
              this.getTerminus(
                "184",
                "Warthestr",
                "Wismarer Str",
                "Saaleckstr",
                "Lichterfelde Ost"
              ),
              this.getTerminus(
                "248",
                "Warschauer Str",
                "Ostbahnhof",
                "Alexanderplatz",
                "Hallesches Tor"
              )
            ]
          ];
          break;
        case "BTHF":
          this.stop = [900000068201, 900000068272];
          this.filter = [
            [
              [this.S41],
              [this.S45.SKR],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN",
                "WKRR",
                "HAL",
                "HO",
                "HEI",
                "BUP",
                "IP",
                "SGR",
                "SKR"
              ),
              [this.S42],
              this.getStation(
                this.S45,
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER"
              ),
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER"
              ),
              this.getStation(
                this.U6,
                "Tg",
                "Bk",
                "Hh",
                "OTI",
                "Scha",
                "Sch",
                "Afr",
                "Rb",
                "Se",
                "Lpo",
                "We",
                "Ri",
                "SK",
                "NA",
                "Ob",
                "F",
                "Fr",
                "Mic",
                "Ks",
                "Hu",
                "Me",
                "PL",
                "Ps"
              ),
              this.getStation(this.U6, "Mf", "Wl", "Ull", "At"),
              this.getTerminus("184", "Südkreuz"),
              this.getTerminus("N6", "Alt-Tegel"),
              this.getTerminus("140", "Ostbahnhof", "Mehringdamm"),
              this.getTerminus(
                "184",
                "Warthestr",
                "Wismarer Str",
                "Saaleckplatz",
                "Lichterfelde Ost"
              ),
              this.getTerminus("N6", "Alt-Mariendorf"),
              this.getTerminus("N84", "Zehlendorf Eiche", "Alt-Tempelhof")
            ],
            [
              this.getTerminus("184", "Südkreuz", "Tempelhof"),
              this.getTerminus("N6", "Alt-Tegel"),
              this.getTerminus(
                "184",
                "Warthestr",
                "Wismarer Str",
                "Saaleckplatz",
                "Lichterfelde Ost"
              ),
              this.getTerminus("N6", "Alt-Mariendorf")
            ]
          ];
          break;
        case "BTP":
          this.stop = [900000190001, 900000190701, 900000190702, 900000190100];
          this.filter = [
            [
              [this.S41],
              this.getStation(
                this.S45,
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA"
              ),
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA"
              ),
              this.getStation(this.S47, "SPF", "OSP", "SW", "BMW", "PWA"),
              this.getStation(
                this.S8,
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA"
              ),
              this.getStation(
                this.S85,
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA"
              ),
              this.getStation(
                this.S9,
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA"
              ),
              [this.S42],
              this.getStation(
                this.S8,
                "BIW",
                "HN",
                "BFE",
                "SNF",
                "MM",
                "BLB",
                "PHD",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST",
                "STO",
                "FA",
                "OK"
              ),
              this.getStation(
                this.S85,
                "NB",
                "HUM",
                "GB",
                "PKW",
                "BOS",
                "SAL",
                "PLA",
                "GSS",
                "LST",
                "STO",
                "FA",
                "OK"
              ),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB",
                "WRS"
              )
            ],
            [
              this.getTerminus("165", "Märkisches Museum", "Treptower Park"),
              this.getTerminus("166", "Boddinstr", "Treptower Park"),
              this.getTerminus(
                "265",
                "Stadtmitte",
                "Märkisches Museum",
                "Schlesisches Tor",
                "Treptower Park"
              ),
              this.getTerminus("N65", "Hackescher Markt")
            ],
            [
              this.getTerminus(
                "104",
                "Brixplatz",
                "Theodor-Heuss-Platz",
                "Rathenauplatz",
                "Halensee",
                "Berliner Str",
                "Platz der Luftbrücke",
                "Boddinstr"
              ),
              this.getTerminus("194", "Hermannplatz"),
              this.getTerminus("N94", "Hermannplatz"),
              this.getTerminus("104", "Tunnelstr"),
              this.getTerminus(
                "194",
                "Helene-Weigel-Platz",
                "Friedrichsfelde Ost",
                "Nöldnerplatz"
              ),
              this.getTerminus("N94", "Magdalenenstr")
            ],
            [
              this.getTerminus(
                "104",
                "Brixplatz",
                "Theodor-Heuss-Platz",
                "Rathenauplatz",
                "Halensee",
                "Berliner Str",
                "Platz der Luftbrücke",
                "Boddinstr"
              ),
              this.getTerminus("165", "Müggelschlößchenweg", "Schöneweide"),
              this.getTerminus("166", "Boddinstr"),
              this.getTerminus("194", "Hermannplatz"),
              this.getTerminus("265", "Schöneweide", "Baumschulenstr"),
              this.getTerminus("N65", "Müggelschlößchenweg", "Schöneweide"),
              this.getTerminus("N94", "Hermannplatz"),
              this.getTerminus("104", "Eichenstr./Puschkinallee"),
              this.getTerminus("165", "Märkisches Museum"),
              this.getTerminus(
                "265",
                "Stadtmitte",
                "Märkisches Museum",
                "Schlesisches Tor"
              ),
              this.getTerminus("N65", "Hackescher Markt")
            ]
          ];
          break;
        case "BWRS":
          this.stop = [900000120004, 900000120011, 900000120020, 900000120021];
          this.filter = [
            [
              this.getStation(
                this.S3,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB"
              ),
              this.getStation(
                this.S5,
                "GWD",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB"
              ),
              this.getStation(
                this.S7,
                "OLS",
                "HST",
                "MS",
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIS",
                "GWD",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB"
              ),
              [this.S75.OSB],
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS",
                "WKS",
                "CHS",
                "SAP",
                "ZOS",
                "TGN",
                "BEV",
                "HBF",
                "FST",
                "HKM",
                "ALX",
                "JB",
                "OSB"
              ),
              this.getStation(
                this.S3,
                "E",
                "WIG",
                "RD",
                "FRH",
                "HIG",
                "KPK",
                "WHH",
                "KLH",
                "RB",
                "RH",
                "OKS"
              ),
              this.getStation(
                this.S5,
                "STN",
                "STR",
                "HGM",
                "STV",
                "PEN",
                "FD",
                "NG",
                "HPG",
                "BIS",
                "MDF",
                "KAD",
                "WT",
                "BDF",
                "FFO",
                "LI",
                "NPL",
                "OKS"
              ),
              this.getStation(
                this.S7,
                "AF",
                "MEA",
                "RW",
                "MAZ",
                "POE",
                "SPH",
                "FFO",
                "LI",
                "NPL",
                "OKS"
              ),
              this.getStation(
                this.S75,
                "WAB",
                "HH",
                "GSE",
                "SPH",
                "FFO",
                "LI",
                "NPL",
                "OKS"
              ),
              this.getStation(
                this.S9,
                "LI",
                "NPL",
                "OKS",
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP"
              ),
              [this.U1.NULL],
              [this.U3.NULL],
              this.getTerminus(
                "M10",
                "Hauptbahnhof",
                "Friedrich-Ludwig-Jahn-Sportpark"
              ),
              this.getTerminus("347", "Ostbahnhof"),
              this.getTerminus("N1", "Helsingforser Platz"),
              this.getTerminus("347", "Tunnelstr"),
              this.getTerminus("N1", "Zoologischer Garten"),
              this.getTerminus(
                "248",
                "Breitenbachplatz",
                "Südkreuz",
                "Hallesches Tor",
                "Alexanderplatz",
                "Ostbahnhof"
              )
            ],
            [
              this.getTerminus(
                "M10",
                "Hauptbahnhof",
                "Friedrich-Ludwig-Jahn-Sportpark"
              ),
              this.getTerminus("M10", "Warschauer Str")
            ],
            [
              this.getTerminus("347", "Ostbahnhof"),
              this.getTerminus("347", "Tunnelstr"),
              this.getTerminus("N1", "Zoologischer Garten")
            ],
            [
              this.getTerminus(
                "M10",
                "Hauptbahnhof",
                "Friedrich-Ludwig-Jahn-Sportpark"
              ),
              this.getTerminus(
                "M13",
                "Virchow-Klinikum",
                "Degnerstr",
                "Betriebshof Lichtenberg"
              )
            ]
          ];
          break;
        case "BWED":
          this.stop = [900000009104, 900000008103];
          this.filter = [
            [
              [this.S41],
              [this.S46.GB],
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI",
                "HO",
                "HAL",
                "WKRR",
                "MN",
                "WES",
                "JUN",
                "BEU",
                "WH"
              ),
              this.getStation(
                this.U6,
                "Tg",
                "Bk",
                "Hh",
                "OTI",
                "Scha",
                "Sch",
                "Afr",
                "Rb",
                "Se",
                "Lpo"
              ),
              this.getStation(
                this.U6,
                "Mf",
                "Wl",
                "Ull",
                "Ka",
                "At",
                "Ts",
                "Ps",
                "PL",
                "Me",
                "Ks",
                "Mic",
                "Fr",
                "F",
                "Ob",
                "NA",
                "SK",
                "Ri"
              ),
              this.getTerminus(
                "120",
                "Wilhelmsruher Damm",
                "Wittenau",
                "Paracelsus-Bad",
                "Leopoldplatz"
              ),
              this.getTerminus("N6", "Alt-Tegel"),
              this.getTerminus("N20", "Hainbuchenstr")
            ],
            [
              this.getTerminus("M27", "Jungfernheide"),
              this.getTerminus("247", "Leopoldplatz"),
              this.getTerminus("M27", "Pankow"),
              this.getTerminus("247", "Nordbahnhof", "Bernauer Str")
            ]
          ];
          break;
        case "BWES":
          this.stop = [900000026207, 900000020204];
          this.filter = [
            [
              [this.S41],
              this.getStation(this.S46, "GB", "WED", "WH", "BEU", "JUN"),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI",
                "HO",
                "HAL",
                "WKRR",
                "MN"
              ),
              this.getTerminus(
                "M45",
                "Johannesstift",
                "Rathaus Spandau",
                "DRK-Kliniken Westend"
              ),
              this.getTerminus("M45", "Zoologischer Garten")
            ],
            [
              this.getTerminus(
                "M45",
                "Johannesstift",
                "Rathaus Spandau",
                "DRK-Kliniken Westend"
              ),
              this.getTerminus("309", "Schlosspark-Klinik"),
              this.getTerminus("M45", "Zoologischer Garten"),
              this.getTerminus("309", "Wilmersdorfer Str")
            ]
          ];
          break;
        case "BWH":
          this.stop = [900000001201];
          this.filter = [
            [
              [this.S41],
              [this.S46.GB, this.S46.WED],
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI",
                "HO",
                "HAL",
                "WKRR",
                "MN",
                "WES",
                "JUN",
                "BEU"
              ),
              this.getStation(this.U9, "Olo", "Np", "Lpu", "Am"),
              this.getStation(
                this.U9,
                "Rzu",
                "Sl",
                "Wsg",
                "Fw",
                "Bd",
                "Beo",
                "Gt",
                "Snu",
                "Kfu",
                "Zu",
                "Ha",
                "Tm",
                "Bi"
              ),
              this.getTerminus("N9", "Osloer Str"),
              this.getTerminus("N9", "Rathaus Steglitz", "Zoologischer Garten")
            ]
          ];
          break;
        case "BWK":
          this.stop = [900000024102];
          this.filter = [
            [
              this.getStation(
                this.S3,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS"
              ),
              this.getStation(this.S5, "GWD", "OLS", "HST", "MS"),
              this.getStation(
                this.S7,
                "OLS",
                "HST",
                "MS",
                "PDH",
                "BAB",
                "GRI",
                "WSS",
                "NIS",
                "GWD"
              ),
              this.getStation(
                this.S9,
                "GWD",
                "SPA",
                "SRW",
                "PIC",
                "OLS",
                "HST",
                "MS"
              ),
              this.getStation(
                this.S3,
                "E",
                "WIG",
                "RD",
                "FRH",
                "HIG",
                "KPK",
                "WHH",
                "KLH",
                "RB",
                "RH",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX",
                "HKM",
                "FST",
                "HBF",
                "BEV",
                "TGN",
                "ZOS",
                "SAP",
                "CHS"
              ),
              this.getStation(
                this.S5,
                "STN",
                "STR",
                "HGM",
                "STV",
                "PEN",
                "FD",
                "NG",
                "HPG",
                "BIS",
                "MDF",
                "KAD",
                "WT",
                "BDF",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX",
                "HKM",
                "FST",
                "HBF",
                "BEV",
                "TGN",
                "ZOS",
                "SAP",
                "CHS"
              ),
              this.getStation(
                this.S7,
                "AF",
                "MEA",
                "RW",
                "MAZ",
                "POE",
                "SPH",
                "FFO",
                "LI",
                "NPL",
                "OKS",
                "WRS",
                "OSB",
                "JB",
                "ALX",
                "HKM",
                "FST",
                "HBF",
                "BEV",
                "TGN",
                "ZOS",
                "SAP",
                "CHS"
              ),
              this.getStation(
                this.S9,
                "LI",
                "NPL",
                "OKS",
                "GAS",
                "FLH",
                "GBA",
                "AGL",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "PWA",
                "TP",
                "WRS",
                "OSB",
                "JB",
                "ALX",
                "HKM",
                "FST",
                "HBF",
                "BEV",
                "TGN",
                "ZOS",
                "SAP",
                "CHS"
              ),
              [this.S41],
              this.getStation(
                this.S46,
                "GB",
                "WED",
                "WH",
                "BEU",
                "JUN",
                "WES",
                "MN"
              ),
              [this.S42],
              this.getStation(
                this.S46,
                "KW",
                "WI",
                "ZTH",
                "EIW",
                "GAS",
                "ADL",
                "SCF",
                "SW",
                "BMW",
                "KHD",
                "NK",
                "HER",
                "THF",
                "SKR",
                "SGR",
                "IP",
                "BUP",
                "HEI",
                "HO",
                "HAL"
              ),
              this.getTerminus("104", "Brixplatz", "Theodor-Heuss-Platz"),
              this.getTerminus("N42", "Theodor-Heuss-Platz")
            ]
          ];
          break;
        case "jov":
          this.stop = [900000160541];
          this.filter = [
            [
              this.getTerminus("240", "Storkower Str"),
              this.getTerminus(
                "N50",
                "Hugenottenplatz",
                "Betriebshof Indira-Gandhi-Str",
                "Pankow"
              ),
              this.getTerminus("240", "Ostbahnhof", "Betriebshof Lichtenberg"),
              this.getTerminus("N50", "Tierpark", "Betriebshof Lichtenberg")
            ]
          ];
          break;
        case "bae":
          this.stop = [900000160509, 900000160010, 900000160710];
          this.filter = [
            [
              this.getTerminus("M5", "Landsberger Allee/Petersburger Str"),
              this.getTerminus(
                "M8",
                "Hauptbahnhof",
                "Landsberger Allee/Petersburger Str"
              ),
              this.getTerminus(
                "21",
                "Schöneweide",
                "Treskowallee/Ehrlichstr",
                "Bersarinplatz"
              ),
              this.getTerminus(
                "M8",
                "Ahrensfelde/Stadtgrenze",
                "Betriebshof Marzahn"
              ),
              this.getTerminus("21", "Lichtenberg/Gudrunstr")
            ],
            [
              this.getTerminus("M13", "Warschauer Str", "Frankfurter Allee"),
              this.getTerminus("16", "Frankfurter Allee"),
              this.getTerminus(
                "N50",
                "Hugenottenplatz",
                "Pankow",
                "Betriebshof Indira-Gandhi-Str"
              ),
              this.getTerminus("M13", "Virchow-Klinikum", "Degnerstr"),
              this.getTerminus("16", "Ahrensfelde/Stadtgrenze"),
              this.getTerminus("N50", "Tierpark", "Betriebshof Lichtenberg")
            ],
            [
              this.getTerminus("M5", "Landsberger Allee/Petersburger Allee"),
              this.getTerminus(
                "M8",
                "Hauptbahnhof",
                "Landsberger Allee/Petersburger Str"
              )
            ]
          ];
          break;
        case "moe":
          this.stop = [900000160014];
          this.filter = [
            [
              this.getTerminus("M13", "Warschauer Str", "Frankfurter Allee"),
              this.getTerminus("16", "Frankfurter Allee"),
              this.getTerminus(
                "21",
                "Schöneweide",
                "Treskowallee/Ehrlichstr",
                "Bersarinplatz"
              ),
              this.getTerminus(
                "M13",
                "Virchow-Klinikum",
                "Degnerstr",
                "Betriebshof Lichtenberg"
              ),
              this.getTerminus("16", "Ahrensfelde/Stadtgrenze"),
              this.getTerminus("21", "Lichtenberg/Gudrunstr"),
              this.getTerminus("240", "Storkower Str"),
              this.getTerminus(
                "N50",
                "Hugenottenplatz",
                "Pankow",
                "Betriebshof Indira-Gandhi-Str"
              ),
              this.getTerminus("240", "Ostbahnhof", "Betriebshof Lichtenberg"),
              this.getTerminus("N50", "Tierpark", "Betriebshof Lichtenberg")
            ]
          ];
          break;
        case "gat":
          this.stop = [900000032106];
          this.filter = [
            [
              this.getTerminus(
                "M49",
                "Zoologischer Garten",
                "Savignyplatz",
                "Wilmersdorfer Str",
                "Haus des Rundfunks"
              ),
              this.getTerminus(
                "X34",
                "Zoologischer Garten",
                "Savignyplatz",
                "Wilmersdorfer Str"
              ),
              this.getTerminus("X49", "Wilmersdorfer Str"),
              this.getTerminus(
                "136",
                "Hennigsdorf",
                "Aalemannufer",
                "Werderstr",
                "Rathaus Spandau"
              ),
              this.getTerminus("236", "Haselhorst", "Rathaus Spandau"),
              this.getTerminus("X34", "Hottengrund", "Gutsstr"),
              this.getTerminus("134", "Hottengrund", "Alt-Kladow", "Alt-Gatow"),
              this.getTerminus("N34", "Hottengrund"),
              this.getTerminus("M49", "Nennhauser Damm", "Reimerweg"),
              this.getTerminus("X49", "Hahneberg", "Im Spektefeld"),
              this.getTerminus(
                "134",
                "Wasserwerk Spandau",
                "Kisseln",
                "Rathaus Spandau"
              ),
              this.getTerminus("136", "Am Omnibushof"),
              this.getTerminus("236", "Am Omnibushof"),
              this.getTerminus("N34", "Aalemannufer")
            ]
          ];
          break;
        case "wil":
          this.stop = [900000032102];
          this.filter = [
            [
              this.getTerminus("135", "Rathaus Spandau", "Am Omnibushof"),
              this.getTerminus("638", "Rathaus Spandau"),
              this.getTerminus(
                "M49",
                "Zoologischer Garten",
                "Savignyplatz",
                "Wilmersdorfer Str",
                "Haus des Rundfunks"
              ),
              this.getTerminus("X49", "Wilmersdorfer Str"),
              this.getTerminus(
                "135",
                "Hottengrund",
                "Alt-Kladow",
                "Landstadt Gatow"
              ),
              this.getTerminus("338", "Havelpark"),
              this.getTerminus(
                "638",
                "Potsdam",
                "Hauptbahnhof",
                "Campus Jungfernsee"
              ),
              this.getTerminus("M49", "Nennhauser Damm", "Reimerweg"),
              this.getTerminus("X49", "Hahneberg", "Im Spektefeld")
            ]
          ];
          break;
      }
      this.getData();
    });
    document.querySelector("#refresh").addEventListener("click", () => {
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }
      this.getData();
    });
  }
  checkBarrier(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].code == "bf") {
        return `<span class="fas fa-wheelchair" title="barrier-free">&nbsp;</span>`;
      }
    }
    return "";
  }
  checkBike(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].code == "FB") {
        return `<span class="fas fa-bicycle" title="You can take your bike with you.">&nbsp;</span>`;
      }
    }
    return "";
  }
  checkState(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].type == "status") {
        return `<span class="fas fa-times" title="${
          array[i].text
        }">&nbsp;</span>`;
      }
    }
    return "";
  }
  checkWarning(array) {
    for (let i = 0; i < array.length; i++) {
      let summary, text;
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
        return `<span class="fas fa-exclamation-triangle" title="${
          array[i].validFrom
        } - ${array[i].validUntil}: ${summary}, ${text}">&nbsp;</span>`;
      }
    }
    return "";
  }
  evalData(array, index) {
    if (array.length > 0) {
      const header = document.createElement("h2");
      header.innerHTML = `Abfahrten ab ${array[0].stop.name}`;
      this.container.appendChild(header);

      this.filter[index].forEach(filterSet => {
        var subheader_ident = true;
        for (let i = 0; i < array.length; i++) {
          let identifier = false;
          for (let j = 0; j < filterSet.length; j++) {
            if (filterSet[j].line != null && filterSet[j].dir != null) {
              if (
                array[i].line.name == filterSet[j].line &&
                array[i].direction.includes(filterSet[j].dir)
              ) {
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
              const subheader = document.createElement("h3");
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
            const remarks = array[i].remarks;
            const barrier = this.checkBarrier(remarks);
            const bike = this.checkBike(remarks);
            const warning = this.checkWarning(remarks);
            const state = this.checkState(remarks);
            const row = document.createElement("div");
            row.className = "row";
            row.innerHTML = `
            <div class="planTime">${planTime}</div>
            <div class="realTime">${realTime}</div>
            <div class="delay">${delay}</div>
            <div class="transport">${mean}</div>
            <div class="line">${line}</div>
            <div class="direction">${target}</div>
            <div class="barrier">${barrier}</div>
            <div class="bike">${bike}</div>
            <div class="warning">${warning}</div>
            <div class="status">${state}</div>
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
    this.stop.forEach((stop, index) => {
      const url = `https://1.bvg.transport.rest/stations/${stop}/departures?duration=60&includeRelatedStations=false`;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.evalData(data, index);
        })
        .catch(err => console.log(err));
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
  getStation(line, ...stations) {
    return stations.map(station => line[station]);
  }
  getTerminus(line, ...stations) {
    return stations.map(station => {
      return { line: line, dir: station };
    });
  }
  replaceLinks(string) {
    const pattern = /<a.*href=\"(.*)\".*>(.*)<\/a>/g;
    const finalString = string.replace(pattern, "$2 ($1)");
    return finalString;
  }
  get stop() {
    return this._stop;
  }
  set stop(newStop) {
    this._stop = newStop;
  }
}
const jov = new Station(
  [900000160541],
  [
    [
      [{ line: "240", dir: "Storkower" }],
      [
        { line: "N50", dir: "Hugenottenplatz" },
        { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" },
        { line: "N50", dir: "Pankow" }
      ],
      [
        { line: "240", dir: "Ostbahnhof" },
        { line: "240", dir: "Betriebshof Lichtenberg" }
      ],
      [
        { line: "N50", dir: "Tierpark" },
        { line: "N50", dir: "Betriebshof Lichtenberg" }
      ]
    ]
  ]
);
