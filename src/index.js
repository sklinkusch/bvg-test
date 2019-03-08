class Station {
  constructor(station, filterValues) {
    this.addLines();
    this.container = document.querySelector("#container");
    this._stop = station;
    this._neighboring = false;
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
        case "BBEU":
          this.stop = [900000020202];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN, this.S46.WES, this.S46.JUN], [{ line: "TXL", dir: "Flughafen Tegel" }], [{ line: "106", dir: "Seestr" }], [{ line: "123", dir: "Goebelplatz" }, { line: "123", dir: "Mäckeritzwiesen" }], [{ line: "N26", dir: "Seestr" }], [{ line: "TXL", dir: "Alexanderplatz" }, { line: "TXL", dir: "Hauptbahnhof" }], [{ line: "106", dir: "Lindenhof" }, { line: "106", dir: "Südkreuz" }, { line: "106", dir: "Kurfürstenstr" }], [{ line: "123", dir: "Hauptbahnhof" }], [{ line: "N26", dir: "Zoologischer Garten" }]]];
          break;
        case "BBUP":
          this.stop = [900000044202];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP], [{ line: "U9", dir: "Osloer Str" }], [{ line: "U9", dir: "Steglitz" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Südkreuz" }], [{ line: "N9", dir: "Osloer Str" }, { line: "N9", dir: "Zoologischer Garten" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "N9", dir: "Steglitz" }]]];
          break;
        case "BFA":
          this.stop = [900000120001];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA, this.S8.TP, this.S8.OK], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA, this.S85.TP, this.S85.OK], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS, this.S8.LST, this.S8.STO], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS, this.S85.LST, this.S85.STO], [{ line: "U5", dir: "Hönow" }, { line: "U5", dir: "Kaulsdorf-Nord" }, { line: "U5", dir: "Friedrichsfelde" }], [{ line: "U5", dir: "Alexanderplatz" }], [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Björnsonstr" }, { line: "M13", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "M13", dir: "Degnerstr" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "M13", dir: "S Warschauer Str" }, { line: "M13", dir: "Scharnweberstr./Weichselstr." }], [{ line: "16", dir: "Scharnweberstr./Weichselstr." }], [{ line: "N5", dir: "Riesaer Str" }, { line: "N5", dir: "Wuhletal" }], [{ line: "N5", dir: "Hackescher Markt" }]]];
          break;
        case "BGB":
          this.stop = [900000007102];
          this.neighboring = false;
          this.filter = [[[{ line: "RE3", dir: "Schwedt" }, { line: "RE3", dir: "Stralsund" }, { line: "RE3", dir: "Prenzlau" }, { line: "RE3", dir: "Angermünde" }, { line: "RE3", dir: "Eberswalde" }], [{ line: "RE5", dir: "Rostock" }, { line: "RE5", dir: "Stralsund" }], [{ line: "RB54", dir: "Rheinsberg" }], [{ line: "RE66", dir: null }], [{ line: "RB27", dir: null }], [{ line: "RE3", dir: "Wittenberg" }, { line: "RE3", dir: "Falkenberg" }, { line: "RE3", dir: "Halle" }], [{ line: "RE5", dir: "Elsterwerda" }, { line: "RE5", dir: "Wünsdorf" }], [{ line: "RE6", dir: null }], [{ line: "RB54", dir: "Lichtenberg" }], [this.S1.ORB, this.S1.LEN, this.S1.BOR, this.S1.BIW, this.S1.HN, this.S1.FOH, this.S1.HED, this.S1.WAI, this.S1.WIN, this.S1.WM, this.S1.SNH, this.S1.WOK, this.S1.BOS], [this.S2.BER, this.S2.BRF, this.S2.ZEP, this.S2.RGT, this.S2.BU, this.S2.KRW, this.S2.BLB, this.S2.PHD, this.S2.PKW, this.S2.BOS], [this.S25.HD, this.S25.HLS, this.S25.SZF, this.S25.TG, this.S25.EBD, this.S25.KBO, this.S25.ARF, this.S25.SNH, this.S25.WOK, this.S25.BOS], [this.S26.WAI, this.S26.WIN, this.S26.WM, this.S26.SNH, this.S26.WOK, this.S26.BOS], [this.S41], [this.S1.PDH, this.S1.BAB, this.S1.GRI, this.S1.WSS, this.S1.NIW, this.S1.SLS, this.S1.MEX, this.S1.ZD, this.S1.SDG, this.S1.LWE, this.S1.BGT, this.S1.RST, this.S1.FB, this.S1.FRU, this.S1.SGV, this.S1.JLB, this.S1.YOR, this.S1.AHU, this.S1.POP, this.S1.TOR, this.S1.FSTT, this.S1.ORS, this.S1.NB, this.S1.HUM], [this.S2.BFD, this.S2.MAH, this.S2.LRD, this.S2.SC, this.S2.BCH, this.S2.MF, this.S2.ATS, this.S2.PRS, this.S2.SKV, this.S2.YOR, this.S2.AHU, this.S2.POP, this.S2.TOR, this.S2.FSTT, this.S2.ORS, this.S2.NB, this.S2.HUM], [this.S25.TLS, this.S25.LIS, this.S25.OSS, this.S25.LIO, this.S25.LAK, this.S25.SDE, this.S25.PRS, this.S25.SKV, this.S25.YOR, this.S25.AHU, this.S25.POP, this.S25.TOR, this.S25.FSTT, this.S25.ORS, this.S25.NB, this.S25.HUM], [this.S26.TLS, this.S26.LIS, this.S26.OSS, this.S26.LIO, this.S26.LAK, this.S26.SDE, this.S26.PRS, this.S26.SKV, this.S26.YOR, this.S26.AHU, this.S26.POP, this.S26.TOR, this.S26.FSTT, this.S26.ORS, this.S26.NB, this.S26.HUM], [this.S42], [this.S46.NULL], [{ line: "U8", dir: "Wittenau" }, { line: "U8", dir: "Paracelsus-Bad" }, { line: "U8", dir: "Osloer Str" }], [{ line: "U8", dir: "Hermannstr" }], [{ line: "247", dir: "Leopoldplatz" }], [{ line: "N8", dir: "Wilhelmsruher Damm" }, { line: "N8", dir: "Osloer Str" }], [{ line: "247", dir: "Nordbahnhof" }, { line: "247", dir: "Bernauer Str" }], [{ line: "N8", dir: "Hermannstr" }, { line: "N8", dir: "Hermannplatz" }]]];
          break;
        case "BGSS":
          this.stop = [900000110003];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA, this.S8.TP, this.S8.OK, this.S8.FA, this.S8.STO, this.S8.LST], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA, this.S85.TP, this.S85.OK, this.S85.FA, this.S85.STO, this.S85.LST], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA], [{ line: "M4", dir: "Falkenberg" }, { line: "M4", dir: "Zingster Str" }, { line: "M4", dir: "Sulzfelder Str" }], [{ line: "M4", dir: "Hackescher Markt" }]]];
          break;
        case "BHAL":
          this.stop = [900000040101];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO], [{ line: "M19", dir: "Grunewald" }, { line: "M19", dir: "Hagenplatz" }, { line: "M19", dir: "Rathenauplatz" }], [{ line: "M29", dir: "Roseneck" }, { line: "M29", dir: "Rathenauplatz" }], [{ line: "X10", dir: "Teltow" }, { line: "X10", dir: "Andr&#233;ezeile" }], [{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }, { line: "104", dir: "Rathenauplatz" }], [{ line: "N42", dir: "Theodor-Heuss-Platz" }], [{ line: "M19", dir: "Mehringdamm" }], [{ line: "M29", dir: "Hermannplatz" }], [{ line: "X10", dir: "Zoologischer Garten" }], [{ line: "104", dir: "Tunnelstr" }, { line: "104", dir: "Treptower Park" }], [{ line: "N42", dir: "Alexanderplatz" }]]];
          break;
        case "BHEI":
          this.stop = [900000045102];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP], [{ line: "U3", dir: "Warschauer Str" }, { line: "U3", dir: "Nollendorfplatz" }, { line: "U3", dir: "Spichernstr" }], [{ line: "U3", dir: "Krumme Lanke" }, { line: "U3", dir: "Breitenbachplatz" }], [{ line: "249", dir: "Roseneck" }], [{ line: "310", dir: "Wilmersdorfer Str" }], [{ line: "N3", dir: "Mexikoplatz" }], [{ line: "249", dir: "Zoologischer Garten" }], [{ line: "310", dir: "Blissestr" }], [{ line: "N3", dir: "Wittenbergplatz" }]]];
          break;
        case "BHER":
          this.stop = [900000079221, 900000079220];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S45.SKR, this.S45.THF], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP, this.S46.IP, this.S46.SGR, this.S46.SKR, this.S46.THF], [this.S42], [this.S45.FLH, this.S45.GBA, this.S45.AGL, this.S45.GAS, this.S45.ADL, this.S45.SCF, this.S45.SW, this.S45.BMW, this.S45.KHD, this.S45.NK], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK], [this.S47.NULL], [{ line: "U8", dir: null }], [{ line: "377", dir: "Plänterwald" }], [{ line: "N8", dir: null }], [{ line: "N79", dir: "Plänterwald" }], [{ line: "M44", dir: null }], [{ line: "246", dir: null }], [{ line: "277", dir: null }], [{ line: "370", dir: "Neuköllnische Brücke" }], [{ line: "377", dir: "Kranoldstr" }], [{ line: "N79", dir: "Alt-Mariendorf" }]], [[{ line: "246", dir: "Friedrich-Wilhelm-Platz" }, { line: "246", dir: "Alt-Tempelhof" }], [{ line: "370", dir: "Neuköllnische Brücke" }]]];
          break;
        case "BHO":
          this.stop = [900000044101];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI], [{ line: "115", dir: "Spanische Allee/Potsdamer Ch" }, { line: "115", dir: "Neuruppiner Str" }, { line: "115", dir: "Roseneck" }], [{ line: "N3", dir: "Mexikoplatz" }], [{ line: "N10", dir: "Sachtlebenstr" }], [{ line: "115", dir: "Fehrbelliner Platz" }], [{ line: "N3", dir: "Wittenbergplatz" }], [{ line: "N10", dir: "Zoologischer Garten" }]]];
          break;
        case "BIP":
          this.stop = [900000054105];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR], [{ line: "U4", dir: null }], [{ line: "M48", dir: "Alexanderplatz" }, { line: "M48", dir: "Mohrenstr" }], [{ line: "M85", dir: "Hauptbahnhof" }, { line: "M85", dir: "Potsdamer Platz" }], [{ line: "187", dir: "Turmstr" }, { line: "187", dir: "Kurfürstenstr" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Hallesches Tor" }, { line: "248", dir: "Südkreuz" }], [{ line: "M48", dir: "Busseallee" }, { line: "M48", dir: "Zehlendorf Eiche" }, { line: "M48", dir: "Rathaus Steglitz" }], [{ line: "M85", dir: "Lichterfelde Süd" }, { line: "M85", dir: "Rathaus Steglitz" }], [{ line: "187", dir: "Halbauer Weg" }, { line: "187", dir: "Lankwitz Kirche" }, { line: "187", dir: "Insulaner" }], [{ line: "248", dir: "Breitenbachplatz" }]]];
          break;
        case "BJUN":
          this.stop = [900000020201, 900000020207];
          this.neighboring = false;
          this.filter = [[[{ line: "RE4", dir: "Stendal" }, { line: "RE4", dir: "Rathenow" }], [{ line: "RE6", dir: "Wittenberge" }, { line: "RE6", dir: "Neuruppin" }], [{ line: "RB10", dir: "Nauen" }], [{ line: "RB13", dir: "Wustermark" }], [{ line: "RE4", dir: "Jüterbog" }, { line: "RE4", dir: "Luckenwalde" }, { line: "RE4", dir: "Ludwigsfelde" }], [{ line: "RE6", dir: "Gesundbrunnen" }], [{ line: "RB10", dir: "Südkreuz" }], [this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN, this.S46.WES], [{ line: "U7", dir: "Rudow" }], [{ line: "U7", dir: "Rathaus Spandau" }], [{ line: "M21", dir: "Uhlandstr" }], [{ line: "M21", dir: "Goerdelersteg" }], [{ line: "M27", dir: "Pankow" }], [{ line: "X9", dir: "Zoologischer Garten" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "M27", dir: "Jungfernheide" }], [{ line: "N7", dir: "Rathaus Spandau" }]], [[{ line: "M27", dir: "Jungfernheide" }], [{ line: "X9", dir: "Flughafen Tegel" }], [{ line: "109", dir: "Flughafen Tegel" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "109", dir: "Zoologischer Garten" }]]];
          break;
        case "BLST":
          this.stop = [900000110004];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA, this.S8.TP, this.S8.OK, this.S8.FA, this.S8.STO], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA, this.S85.TP, this.S85.OK, this.S85.FA, this.S85.STO], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS], [{ line: "M5", dir: "Hauptbahnhof" }, { line: "M5", dir: "Hackescher Markt" }, { line: "M5", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M6", dir: "Hackescher Markt" }, { line: "M6", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M8", dir: "Hauptbahnhof" }, { line: "M8", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M5", dir: "Zingster Str" }], [{ line: "M6", dir: "Riesaer Str" }, { line: "M6", dir: "Betriebshof Marzahn" }, { line: "M6", dir: "S Marzahn" }], [{ line: "M8", dir: "Ahrensfelde/Stadtgrenze" }, { line: "M8", dir: "Betriebshof Marzahn" }], [{ line: "156", dir: "Stadion Buschallee/Hansastr" }, { line: "156", dir: "Große Seestr." }, { line: "156", dir: "Pasedagplatz" }]]];
          break;
        case "BMN":
          this.stop = [900000024106];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }, { line: "M49", dir: "Gatower Str" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }, { line: "X34", dir: "Gatower Str" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }, { line: "X49", dir: "Gatower Str" }], [{ line: "139", dir: "Werderstr" }], [{ line: "218", dir: "Pfaueninsel" }], [{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer" }], [{ line: "X49", dir: "Wilmersdorfer" }]]];
          break;
        case "BNK":
          this.stop = [900000078201, 900000078272, 900000078273, 900000078271];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S45.SKR, this.S45.THF, this.S45.HER], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP, this.S46.IP, this.S46.SGR, this.S46.SKR, this.S46.THF, this.S46.HER], [this.S47.HER], [this.S42], [this.S45.FLH, this.S45.GBA, this.S45.AGL, this.S45.GAS, this.S45.ADL, this.S45.SCF, this.S45.SW, this.S45.BMW, this.S45.KHD], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD], [this.S47.SPF, this.S47.OSP, this.S47.SW, this.S47.BMW, this.S47.KHD]], [[{ line: "U7", dir: "Rudow" }, { line: "U7", dir: "Britz-Süd" }], [{ line: "U7", dir: "Rathaus Spandau" }, { line: "U7", dir: "Rohrdamm" }, { line: "U7", dir: "Richard-Wagner-Platz" }, { line: "U7", dir: "Fehrbelliner Platz" }, { line: "U7", dir: "Hermannplatz" }]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "N79", dir: "Plänterwald" }]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "370", dir: "Neuköllnische Brücke" }], [{ line: "377", dir: "Plänterwald" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "370", dir: "Hermannstr" }], [{ line: "377", dir: "Hermannstr" }]]];
          break;
        case "BOK":
          this.stop = [900000120003];
          this.neighboring = false;
          this.filter = [[[{ line: "RE1", dir: "Cottbus" }, { line: "RE1", dir: "Eisenhüttenstadt" }, { line: "RE1", dir: "Frankfurt" }], [{ line: "RE2", dir: "Cottbus" }], [{ line: "RE7", dir: "Wünsdorf-Waldstadt" }, { line: "RE7", dir: "Schönefeld" }], [{ line: "RB12", dir: "Templin" }], [{ line: "RB14", dir: "Schönefeld" }], [{ line: "RB24", dir: "Eberswalde" }], [{ line: "RB25", dir: "Werneuchen" }], [{ line: "RB26", dir: "Gorz&#243;w" }, { line: "RB26", dir: "Kostrzyn" }], [{ line: "RE1", dir: "Magdeburg" }, { line: "RE1", dir: "Brandenburg" }, { line: "RE1", dir: "Potsdam" }], [{ line: "RE2", dir: "Wismar" }, { line: "RE2", dir: "Bad Kleinen" }, { line: "RE2", dir: "Schwerin" }, { line: "RE2", dir: "Wittenberge" }], [{ line: "RE7", dir: "Dessau" }, { line: "RE7", dir: "Bad Belzig" }], [{ line: "RB14", dir: "Nauen" }], [{ line: "RB24", dir: "Senftenberg" }, { line: "RB24", dir: "Cottbus" }], [this.S3.E, this.S3.WIG, this.S3.RD, this.S3.FRH, this.S3.HIG, this.S3.KPK, this.S3.WHH, this.S3.KLH, this.S3.RB, this.S3.RH], [this.S5.STN, this.S5.STR, this.S5.HGM, this.S5.STV, this.S5.PEN, this.S5.FD, this.S5.NG, this.S5.HPG, this.S5.BIS, this.S5.MDF, this.S5.KAD, this.S5.WT, this.S5.BDF, this.S5.FFO, this.S5.LI, this.S5.NPL], [this.S7.AF, this.S7.MEA, this.S7.RW, this.S7.MAZ, this.S7.POE, this.S7.SPH, this.S7.FFO, this.S7.LI, this.S7.NPL], [this.S75.WAB, this.S75.HH, this.S75.GSE, this.S75.SPH, this.S75.FFO, this.S75.LI, this.S75.NPL], [this.S9.LI, this.S9.NPL], [this.S3.GWD, this.S3.SPA, this.S3.SRW, this.S3.PIC, this.S3.OLS, this.S3.HST, this.S3.MS, this.S3.WKS, this.S3.CHS, this.S3.SAP, this.S3.ZOS, this.S3.TGN, this.S3.BEV, this.S3.HBF, this.S3.FST, this.S3.HKM, this.S3.ALX, this.S3.JB, this.S3.OSB, this.S3.WRS], [this.S5.GWD, this.S5.OLS, this.S5.HST, this.S5.MS, this.S5.WKS, this.S5.CHS, this.S5.SAP, this.S5.ZOS, this.S5.TGN, this.S5.BEV, this.S5.HBF, this.S5.FST, this.S5.HKM, this.S5.ALX, this.S5.JB, this.S5.OSB, this.S5.WRS], [this.S7.PDH, this.S7.BAB, this.S7.GRI, this.S7.WSS, this.S7.NIS, this.S7.GWD, this.S7.WKS, this.S7.CHS, this.S7.SAP, this.S7.ZOS, this.S7.TGN, this.S7.BEV, this.S7.HBF, this.S7.FST, this.S7.HKM, this.S7.ALX, this.S7.JB, this.S7.OSB, this.S7.WRS], [this.S75.OSB, this.S75.WRS], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS, this.S9.WKS, this.S9.CHS, this.S9.SAP, this.S9.ZOS, this.S9.TGN, this.S9.BEV, this.S9.HBF, this.S9.FST, this.S9.HKM, this.S9.ALX, this.S9.JB, this.S9.OSB, this.S9.WRS], [this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA, this.S8.TP], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S8.SW, this.S85.BMW, this.S85.PWA, this.S85.TP], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS, this.S8.LST, this.S8.STO, this.S8.FA], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS, this.S85.LST, this.S85.STO, this.S85.FA], [{ line: "194", dir: "Helene-Weigel-Platz" }, { line: "194", dir: "Friedrichsfelde Ost" }, { line: "194", dir: "Nöldnerplatz" }], [{ line: "347", dir: "Tunnelstr" }], [{ line: "N94", dir: "Magdalenenstr" }], [{ line: "194", dir: "Hermannplatz" }, { line: "194", dir: "Treptower Park" }], [{ line: "347", dir: "Ostbahnhof" }, { line: "347", dir: "Warschauer Str" }], [{ line: "N94", dir: "Hermannplatz" }]]];
          break;
        case "BPWA":
          this.stop = [900000191002, 900000191802];
          this.neighboring = false;
          this.filter = [[[this.S45.TP],[this.S46.TP],[this.S47.TP],[this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS, this.S8.LST, this.S8.STO, this.S8.FA, this.S8.OK, this.S8.TP], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS, this.S85.LST, this.S85.STO, this.S85.FA], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS, this.S9.WKS, this.S9.CHS, this.S9.SAP, this.S9.ZOS, this.S9.TGN, this.S9.BEV, this.S9.HBF, this.S9.FST, this.S9.HKM, this.S9.ALX, this.S9.JB, this.S9.OSB, this.S9.WRS, this.S9.TP],[this.S45.GAS, this.S45.FLH, this.S45.GBA, this.S45.AGL, this.S45.ADL, this.S45.SCF, this.S45.SW, this.S45.BMW], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW], [this.S47.SPF, this.S47.OSP, this.S47.SW, this.S47.BMW], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW], [this.S9.GAS, this.S9.FLH, this.S9.GBA, this.S9.AGL, this.S9.ADL, this.S9.SCF, this.S9.SW, this.S9.BMW], [{line: "377", dir: "Hermannstr"}], [{line: "N79", dir: "Alt-Mariendorf"}]], [[{line: "165", dir: "Märkisches Museum"}, {line: "165", dir: "Treptower Park"}], [{line: "166", dir: "Boddinstr"}, {line: "166", dir: "Treptower Park"}], [{line: "N65", dir: "Hackescher Markt"}], [{line: "165", dir: "Schöneweide"}, {line: "165", dir: "Müggelschlößchenweg"}], [{line: "166", dir: "Schöneweide"}], [{line: "377", dir: "Hermannstr"}], [{line: "N65", dir: "Müggelschlößchenweg"}, {line: "N65", dir: "Schöneweide"}], [{line: "N79", dir: "Alt-Mariendorf"}]]];
          break;
        case "BPLA":
          this.stop = [900000110002];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA, this.S8.TP, this.S8.OK, this.S8.FA, this.S8.STO, this.S8.LST, this.S8.GSS], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA, this.S85.TP, this.S85.OK, this.S85.FA, this.S85.STO, this.S85.LST, this.S85.GSS], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL], [{ line: "M2", dir: "Am Steinberg" }, { line: "M2", dir: "Heinersdorf" }], [{ line: "M2", dir: "Alexanderplatz" }], [{ line: "156", dir: "Stadion Buschallee/Hansastr" }, { line: "156", dir: "Große Seestr" }, { line: "156", dir: "Pasedagplatz" }], [{ line: "156", dir: "Storkower Str" }, { line: "156", dir: "Michelangelostr" }]]];
          break;
        case "BSG":
          this.stop = [900000054104];
          this.neighboring = false;
          this.filter = [[[this.S1.ORB, this.S1.LEN, this.S1.BOR, this.S1.BIW, this.S1.HN, this.S1.FOH, this.S1.HED, this.S1.WAI, this.S1.WIN, this.S1.WM, this.S1.SNH, this.S1.WOK, this.S1.BOS, this.S1.GB, this.S1.HUM, this.S1.NB, this.S1.ORS, this.S1.FSTT, this.S1.TOR, this.S1.POP, this.S1.AHU, this.S1.YOR, this.S1.JLB], [this.S1.PDH, this.S1.BAB, this.S1.GRI, this.S1.WSS, this.S1.NIW, this.S1.SLS, this.S1.MEX, this.S1.ZD, this.S1.SDG, this.S1.LWE, this.S1.BGT, this.S1.RST, this.S1.FB, this.S1.FRU], [this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP, this.S46.IP], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR], [{ line: "M46", dir: "Zoologischer Garten" }, { line: "M46", dir: "Wittenbergplatz" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "M46", dir: "Britz-Süd" }, { line: "M46", dir: "Alt-Tempelhof" }, { line: "M46", dir: "Südkreuz" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Hallesches Tor" }, { line: "248", dir: "Südkreuz" }]]];
          break;
        case "BSAL":
          this.stop = [900000110001];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA, this.S8.TP, this.S8.OK, this.S8.FA, this.S8.STO, this.S8.LST, this.S8.GSS, this.S8.PLA], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA, this.S85.TP, this.S85.OK, this.S85.FA, this.S85.STO, this.S85.LST, this.S85.GSS, this.S85.PLA], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS], [{ line: "U2", dir: "Pankow" }, { line: "U2", dir: "Vinetastr" }], [{ line: "U2", dir: "Ruhleben" }, { line: "U2", dir: "Olympia-Stadion" }, { line: "U2", dir: "Theodor-Heuss-Platz" }, { line: "U2", dir: "Deutsche Oper" }, { line: "U2", dir: "Zoologischer Garten" }, { line: "U2", dir: "Breitenbachplatz" }, { line: "U2", dir: "Fehrbelliner Platz" }, { line: "U2", dir: "Spichernstr" }, { line: "U2", dir: "Potsdamer Platz" }, { line: "U2", dir: "Spittelmarkt" }, { line: "U2", dir: "Alexanderplatz" }, { line: "U2", dir: "Rosa-Luxemburg-Platz" }], [{ line: "M1", dir: "Schillerstr" }, { line: "M1", dir: "Rosenthal Nord" }], [{ line: "M1", dir: "Am Kupfergraben" }, { line: "M1", dir: "Hackescher Markt" }]]];
          break;
        case "BSO":
          this.stop = [900000077106, 900000077110];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S42], [{ line: "M41", dir: "Hauptbahnhof" }, { line: "M41", dir: "Philharmonie" }, { line: "M41", dir: "Hallesches Tor" }, { line: "M41", dir: "Hermannplatz" }], [{ line: "171", dir: "Hermannplatz" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "M41", dir: "Sonnenallee/Baumschulenstr" }], [{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N79", dir: "Plänterwald" }]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N79", dir: "Plänterwald" }]]];
          break;
        case "BSTO":
          this.stop = [900000110012];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.TP, this.S8.OK, this.S8.FA], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.TP, this.S85.OK, this.S85.FA], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS, this.S8.LST], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS, this.S85.LST], [{ line: "156", dir: "Stadion Buschallee" }, { line: "156", dir: "Große Seestr" }, { line: "156", dir: "Pasedagplatz" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }]]];
          break;
        case "BSK":
          this.stop = [900000058101, 900000058100];
          this.neighboring = false;
          this.filter = [[[{ line: "RE3", dir: "Schwedt" }, { line: "RE3", dir: "Stralsund" }, { line: "RE3", dir: "Prenzlau" }, { line: "RE3", dir: "Angermünde" }, { line: "RE3", dir: "Eberswalde" }], [{ line: "RE4", dir: "Stendal" }, { line: "RE4", dir: "Rathenow" }], [{ line: "RE5", dir: "Rostock" }, { line: "RE5", dir: "Stralsund" }], [{ line: "RB10", dir: "Nauen" }], [{ line: "RE3", dir: "Wittenberg" }, { line: "RE3", dir: "Falkenberg" }, { line: "RE3", dir: "Halle" }], [{ line: "RE4", dir: "Jüterbog" }, { line: "RE4", dir: "Luckenwalde" }, { line: "RE4", dir: "Ludwigsfelde" }], [{ line: "RE5", dir: "Elsterwerda" }, { line: "RE5", dir: "Wünsdorf" }], [this.S2.BER, this.S2.BRF, this.S2.ZEP, this.S2.RGT, this.S2.BU, this.S2.KRW, this.S2.BLB, this.S2.PHD, this.S2.PKW, this.S2.BOS, this.S2.GB, this.S2.HUM, this.S2.NB, this.S2.ORS, this.S2.FSTT, this.S2.TOR, this.S2.POP, this.S2.AHU, this.S2.YOR], [this.S25.HD, this.S25.HLS, this.S25.SZF, this.S25.TG, this.S25.EBD, this.S25.KBO, this.S25.ARF, this.S25.SNH, this.S25.WOK, this.S25.BOS, this.S25.GB, this.S25.HUM, this.S25.NB, this.S25.ORS, this.S25.FSTT, this.S25.TOR, this.S25.POP, this.S25.AHU, this.S25.YOR], [this.S26.WAI, this.S26.WIN, this.S26.WM, this.S26.SNH, this.S26.WOK, this.S26.BOS, this.S26.GB, this.S26.HUM, this.S26.NB, this.S26.ORS, this.S26.FSTT, this.S26.TOR, this.S26.POP, this.S26.AHU, this.S26.YOR], [this.S2.BFD, this.S2.MAH, this.S2.LRD, this.S2.SC, this.S2.BCH, this.S2.MF, this.S2.ATS, this.S2.PRS], [this.S25.TLS, this.S25.LIS, this.S25.OSS, this.S25.LIO, this.S25.LAK, this.S25.SDE, this.S25.PRS], [this.S26.TLS, this.S26.LIS, this.S26.OSS, this.S26.LIO, this.S26.LAK, this.S26.SDE, this.S26.PRS], [this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP, this.S46.IP, this.S46.SGR], [this.S42], [this.S45.NULL], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF], [{ line: "M46", dir: "Zoologischer Garten" }, { line: "M46", dir: "Wittenbergplatz" }], [{ line: "106", dir: "Seestr" }, { line: "106", dir: "Kurfürstenstr" }], [{ line: "204", dir: "Zoologischer Garten" }], [{ line: "M46", dir: "Britz-Süd" }, { line: "M46", dir: "Alt-Tempelhof" }], [{ line: "106", dir: "Lindenhof" }],], [[{ line: "184", dir: "Reichartstr" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckstr" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Hallesches Tor" }]]];
          break;
        case "BTHF":
          this.stop = [900000068201, 900000068272];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S45.SKR], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP, this.S46.IP, this.S46.SGR, this.S46.SKR], [this.S42], [this.S45.GAS, this.S45.FLH, this.S45.GBA, this.S45.AGL, this.S45.ADL, this.S45.SCF, this.S45.SW, this.S45.BMW, this.S45.KHD, this.S45.NK, this.S45.HER], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER], [{ line: "U6", dir: "Alt-Tegel" }, { line: "U6", dir: "Kurt-Schumacher-Platz" }, { line: "U6", dir: "Seestr" }, { line: "U6", dir: "Wedding" }, { line: "U6", dir: "Hallesches Tor" }, { line: "U6", dir: "Platz der Luftbrücke" }], [{ line: "U6", dir: "Alt-Mariendorf" }], [{ line: "184", dir: "Südkreuz" }], [{ line: "U6", dir: "Alt-Tegel" }], [{ line: "140", dir: "Ostbahnhof" }, { line: "140", dir: "Mehringdamm" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckplatz" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "N6", dir: "Alt-Mariendorf" }], [{ line: "N84", dir: "Zehlendorf Eiche" }, { line: "N84", dir: "Alt-Tempelhof" }]], [[{ line: "184", dir: "Südkreuz" }, { line: "184", dir: "Tempelhof" }], [{ line: "N6", dir: "Alt-Tegel" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckplatz" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "N6", dir: "Alt-Mariendorf" }]]];
          break;
        case "BTP":
          this.stop = [900000190001, 900000190701, 900000190702, 900000190100];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S45.GAS, this.S45.FLH, this.S45.GBA, this.S45.AGL, this.S45.ADL, this.S45.SCF, this.S45.SW, this.S45.BMW, this.S45.PWA], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.PWA], [this.S47.SPF, this.S47.OSP, this.S47.SW, this.S47.BMW, this.S47.PWA], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA], [this.S9.GAS, this.S9.FLH, this.S9.GBA, this.S9.AGL, this.S9.ADL, this.S9.SCF, this.S9.SW, this.S9.BMW, this.S9.PWA], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS, this.S8.LST, this.S8.STO, this.S8.FA, this.S8.OK], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS, this.S85.LST, this.S85.STO, this.S85.FA, this.S85.OK], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS, this.S9.WKS, this.S9.CHS, this.S9.SAP, this.S9.ZOS, this.S9.TGN, this.S9.BEV, this.S9.HBF, this.S9.FST, this.S9.HKM, this.S9.ALX, this.S9.JB, this.S9.OSB, this.S9.WRS]], [[{ line: "165", dir: "Märkisches Museum" }, { line: "165", dir: "Treptower Park" }], [{ line: "166", dir: "Boddinstr" }, { line: "166", dir: "Treptower Park" }], [{ line: "265", dir: "Stadtmitte" }, { line: "265", dir: "Märkisches Museum" }, { line: "265", dir: "Schlesisches Tor" }, { line: "265", dir: "Treptower Park" }], [{ line: "N65", dir: "Hackescher Markt" }]], [[{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }, { line: "104", dir: "Berliner Str" }, { line: "104", dir: "Platz der Luftbrücke" }, { line: "104", dir: "Boddinstr" }], [{ line: "194", dir: "Hermannplatz" }], [{ line: "N94", dir: "Hermannplatz" }], [{ line: "104", dir: "Tunnelstr" }], [{ line: "194", dir: "Helene-Weigel-Platz" }, { line: "194", dir: "Friedrichsfelde Ost" }, { line: "194", dir: "Nöldnerplatz" }], [{ line: "N94", dir: "Magdalenenstr" }]], [[{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }, { line: "104", dir: "Berliner Str" }, { line: "104", dir: "Platz der Luftbrücke" }, { line: "104", dir: "Boddinstr" }], [{ line: "165", dir: "Müggelschlößchenweg" }, { line: "165", dir: "Schöneweide" }], [{ line: "166", dir: "Boddinstr" }], [{ line: "194", dir: "Hermannplatz" }], [{ line: "265", dir: "Schöneweide" }, { line: "265", dir: "Baumschulenstr" }], [{ line: "N65", dir: "Müggelschlößchenweg" }, { line: "N65", dir: "Schöneweide" }], [{ line: "N94", dir: "Hermannplatz" }], [{ line: "165", dir: "Märkisches Museum" }], [{ line: "265", dir: "Stadtmitte" }, { line: "265", dir: "Märkisches Museum" }, { line: "265", dir: "Schlesisches Tor" }], [{ line: "N65", dir: "Hackescher Markt" }]]];
          break;
        case "BWED":
          this.stop = [900000009104, 900000008103];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN, this.S46.WES, this.S46.JUN, this.S46.BEU, this.S46.WH], [{ line: "U6", dir: "Alt-Tegel" }, { line: "U6", dir: "Kurt-Schumacher-Platz" }, { line: "U6", dir: "Seestr" }], [{ line: "U6", dir: "Alt-Mariendorf" }, { line: "U6", dir: "Tempelhof" }, { line: "U6", dir: "Platz der Luftbrücke" }, { line: "U6", dir: "Hallesches Tor" }], [{ line: "120", dir: "Wilhelmsruher Damm" }, { line: "120", dir: "Wittenau" }, { line: "120", dir: "Paracelsus-Bad" }, { line: "120", dir: "Leopoldplatz" }], [{ line: "N6", dir: "Alt-Tegel" }], [{ line: "N20", dir: "Hainbuchenstr" }]], [[{ line: "M27", dir: "Jungfernheide" }], [{ line: "247", dir: "Leopoldplatz" }], [{ line: "M27", dir: "Pankow" }], [{ line: "247", dir: "Nordbahnhof" }, { line: "247", dir: "Bernauer Str" }]]];
          break;
        case "BWES":
          this.stop = [900000026207];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN], [{ line: "M45", dir: "Johannesstift" }, { line: "M45", dir: "DRK-Kliniken Westend" }, { line: "M45", dir: "Rathaus Spandau" }], [{ line: "M45", dir: "Zoologischer Garten" }]]];
          break;
        case "BWH":
          this.stop = [900000001201];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN, this.S46.WES, this.S46.JUN, this.S46.BEU], [{ line: "U9", dir: "Osloer Str" }], [{ line: "U9", dir: "Rathaus Steglitz" }, { line: "U9", dir: "Zoologischer Garten" }], [{ line: "N9", dir: "Osloer Str" }], [{ line: "N9", dir: "Rathaus Steglitz" }, { line: "N9", dir: "Zoologischer Garten" }]]];
          break;
        case "BWK":
          this.stop = [900000024102];
          this.neighboring = false;
          this.filter = [[[this.S3.GWD, this.S3.SPA, this.S3.SRW, this.S3.PIC, this.S3.OLS, this.S3.HST, this.S3.MS], [this.S5.GWD, this.S5.OLS, this.S5.HST, this.S5.MS], [this.S7.PDH, this.S7.BAB, this.S7.GRI, this.S7.WSS, this.S7.NIS, this.S7.GWD], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS], [this.S3.E, this.S3.WIG, this.S3.RD, this.S3.FRH, this.S3.HIG, this.S3.KPK, this.S3.WHH, this.S3.KLH, this.S3.RB, this.S3.RH, this.S3.OKS, this.S3.WRS, this.S3.OSB, this.S3.JB, this.S3.ALX, this.S3.HKM, this.S3.FST, this.S3.HBF, this.S3.BEV, this.S3.TGN, this.S3.ZOS, this.S3.SAP, this.S3.CHS], [this.S5.STN, this.S5.STR, this.S5.HGM, this.S5.STV, this.S5.PEN, this.S5.FD, this.S5.NG, this.S5.HPG, this.S5.BIS, this.S5.MDF, this.S5.KAD, this.S5.WT, this.S5.BDF, this.S5.FFO, this.S5.LI, this.S5.NPL, this.S5.OKS, this.S5.WRS, this.S5.OSB, this.S5.JB, this.S5.ALX, this.S5.HKM, this.S5.FST, this.S5.HBF, this.S5.BEV, this.S5.TGN, this.S5.ZOS, this.S5.SAP, this.S5.CHS], [this.S7.AF, this.S7.MEA, this.S7.RW, this.S7.MAZ, this.S7.POE, this.S7.SPH, this.S7.FFO, this.S7.LI, this.S7.NPL, this.S7.OKS, this.S7.WRS, this.S7.OSB, this.S7.JB, this.S7.ALX, this.S7.HKM, this.S7.FST, this.S7.HBF, this.S7.BEV, this.S7.TGN, this.S7.ZOS, this.S7.SAP, this.S7.CHS], [this.S9.LI, this.S9.NPL, this.S9.OKS, this.S9.FLH, this.S9.GBA, this.S9.AGL, this.S9.GAS, this.S9.ADL, this.S9.SCF, this.S9.SW, this.S9.BMW, this.S9.PWA, this.S9.TP, this.S9.WRS, this.S9.OSB, this.S9.JB, this.S9.ALX, this.S9.HKM, this.S9.FST, this.S9.HBF, this.S9.BEV, this.S9.TGN, this.S9.ZOS, this.S9.SAP, this.S9.CHS], [this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL], [{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }], [{ line: "N42", dir: "Theodor-Heuss-Platz" }]]];
          break;
        case "jov":
          this.stop = [900000160541];
          this.neighboring = false;
          this.filter = [
            [
              [{ line: "240", dir: "Storkower Str" }],
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
          ];
          break;
        case "bae":
          this.stop = [900000160509];
          this.neighboring = false;
          this.filter = [
            [
              [
                { line: "M8", dir: "Hauptbahnhof" },
                { line: "M8", dir: "Petersburger" }
              ],
              [{ line: "M5", dir: "Petersburger" }],
              [
                { line: "21", dir: "Schöneweide" },
                { line: "21", dir: "Bersarinplatz" },
                { line: "21", dir: "Treskowallee/Ehrlichstr" }
              ],
              [
                { line: "M8", dir: "Ahrensfelde/Stadtgrenze" },
                { line: "M8", dir: "Betriebshof Marzahn" }
              ],
              [{ line: "21", dir: "Gudrunstr" }]
            ]
          ];
          break;
        case "moe":
          this.stop = [900000160014];
          this.neighboring = false;
          this.filter = [
            [
              [
                { line: "M13", dir: "Warschauer" },
                { line: "M13", dir: "Frankfurter" }
              ],
              [{ line: "16", dir: "Frankfurter" }],
              [
                { line: "21", dir: "Schöneweide" },
                { line: "21", dir: "Bersarinplatz" },
                { line: "21", dir: "Treskowallee/Ehrlichstr" }
              ],
              [
                { line: "M13", dir: "Virchow-Klinikum" },
                { line: "M13", dir: "Degnerstr" },
                { line: "M13", dir: "Betriebshof Lichtenberg" }
              ],
              [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }],
              [{ line: "21", dir: "Gudrunstr" }],
              [{ line: "240", dir: "Storkower Str" }],
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
          ];
          break;
        case "gat":
          this.stop = [900000032106];
          this.neighboring = false;
          this.filter = [
            [
              [
                { line: "M49", dir: "Zoologischer Garten" },
                { line: "M49", dir: "Savignyplatz" },
                { line: "M49", dir: "Wilmersdorfer Str" },
                { line: "M49", dir: "Haus des Rundfunks" }
              ],
              [
                { line: "X34", dir: "Zoologischer Garten" },
                { line: "X34", dir: "Savignyplatz" },
                { line: "X34", dir: "Wilmersdorfer Str" }
              ],
              [{ line: "X49", dir: "Wilmersdorfer" }],
              [
                { line: "X34", dir: "Hottengrund" },
                { line: "X34", dir: "Gutsstr" }
              ],
              [
                { line: "134", dir: "Hottengrund" },
                { line: "134", dir: "Alt-Gatow" },
                { line: "134", dir: "Alt-Kladow" }
              ],
              [{ line: "N34", dir: "Hottengrund" }],
              [
                { line: "M49", dir: "Nennhauser Damm" },
                { line: "M49", dir: "Reimerweg" }
              ],
              [
                { line: "X49", dir: "Hahneberg" },
                { line: "X49", dir: "Spektefeld" }
              ],
              [
                { line: "134", dir: "Wasserwerk Spandau" },
                { line: "134", dir: "Kisseln" },
                { line: "134", dir: "Rathaus Spandau" }
              ],
              [{ line: "N34", dir: "Aalemannufer" }],
              [
                { line: "136", dir: "Aalemannufer" },
                { line: "136", dir: "Hennigsdorf" },
                { line: "136", dir: "Werderstr" },
                { line: "136", dir: "Rathaus Spandau" }
              ],
              [
                { line: "236", dir: "Haselhorst" },
                { line: "236", dir: "Rathaus Spandau" }
              ],
              [{ line: "136", dir: "Am Omnibushof" }],
              [{ line: "236", dir: "Am Omnibushof" }]
            ]
          ];
          break;
        case "wil":
          this.stop = [900000032102];
          this.neighboring = false;
          this.filter = [
            [
              [
                { line: "135", dir: "Rathaus Spandau" },
                { line: "135", dir: "Am Omnibushof" }
              ],
              [{ line: "638", dir: "Rathaus Spandau" }],
              [
                { line: "M49", dir: "Zoologischer Garten" },
                { line: "M49", dir: "Savignyplatz" },
                { line: "M49", dir: "Wilmersdorfer Str" },
                { line: "M49", dir: "Haus des Rundfunks" }
              ],
              [{ line: "X49", dir: "Wilmersdorfer Str" }],
              [
                { line: "135", dir: "Alt-Kladow" },
                { line: "135", dir: "Landstadt Gatow" },
                { line: "135", dir: "Hottengrund" }
              ],
              [
                { line: "638", dir: "Hauptbahnhof" },
                { line: "638", dir: "Campus Jungfernsee" }
              ],
              [{ line: "338", dir: "Havelpark" }],
              [
                { line: "M49", dir: "Nennhauser Damm" },
                { line: "M49", dir: "Reimerweg" }
              ],
              [
                { line: "X49", dir: "Hahneberg" },
                { line: "X49", dir: "Spektefeld" }
              ]
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
  addLines() {
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
  }
  addS1() {
    this.S1 = { PDH: { line: "S1", dir: "Potsdam" }, BAB: { line: "S1", dir: "Babelsberg" }, GRI: { line: "S1", dir: "Griebnitzsee" }, WSS: { line: "S1", dir: "Wannsee" }, NIW: { line: "S1", dir: "Nikolassee" }, SLS: { line: "S1", dir: "Schlachtensee" }, MEX: { line: "S1", dir: "Mexikoplatz" }, ZD: { line: "S1", dir: "Zehlendorf" }, SDG: { line: "S1", dir: "Sundgauer Str" }, LWE: { line: "S1", dir: "Lichterfelde West" }, BGT: { line: "S1", dir: "Botanischer Garten" }, RST: { line: "S1", dir: "Rathaus Steglitz" }, FB: { line: "S1", dir: "Feuerbachstr" }, FRU: { line: "S1", dir: "Friedenau" }, SGV: { line: "S1", dir: "Schöneberg" }, JLB: { line: "S1", dir: "Julius-Leber-Brücke" }, YOR: { line: "S1", dir: "Yorckstr" }, AHU: { line: "S1", dir: "Anhalter Bahnhof" }, POP: { line: "S1", dir: "Potsdamer Platz" }, TOR: { line: "S1", dir: "Brandenburger Tor" }, FSTT: { line: "S1", dir: "Friedrichstr" }, ORS: { line: "S1", dir: "Oranienburger Str" }, NB: { line: "S1", dir: "Nordbahnhof" }, HUM: { line: "S1", dir: "Humboldthain" }, GB: { line: "S1", dir: "Gesundbrunnen" }, BOS: { line: "S1", dir: "Bornholmer Str" }, WOK: { line: "S1", dir: "Wollankstr" }, SNH: { line: "S1", dir: "Schönholz" }, WM: { line: "S1", dir: "Wilhelmsruh" }, WIN: { line: "S1", dir: "Wittenau" }, WAI: { line: "S1", dir: "Waidmannslust" }, HED: { line: "S1", dir: "Hermsdorf" }, FOH: { line: "S1", dir: "Frohnau" }, HN: { line: "S1", dir: "Hohen Neuendorf" }, BIW: { line: "S1", dir: "Birkenwerder" }, BOR: { line: "S1", dir: "Borgsdorf" }, LEN: { line: "S1", dir: "Lehnitz" }, ORB: { line: "S1", dir: "Oranienburg" }, NULL: { line: "S1", dir: null } };
  }
  addS2() {
    this.S2 = { BFD: { line: "S2", dir: "Blankenfelde" }, MAH: { line: "S2", dir: "Mahlow" }, LRD: { line: "S2", dir: "Lichtenrade" }, SC: { line: "S2", dir: "Schichauweg" }, BCH: { line: "S2", dir: "Buckower Chaussee" }, MF: { line: "S2", dir: "Marienfelde" }, ATS: { line: "S2", dir: "Attilastr" }, PRS: { line: "S2", dir: "Priesterweg" }, SKV: { line: "S2", dir: "Südkreuz" }, YOR: { line: "S2", dir: "Yorckstr" }, AHU: { line: "S2", dir: "Anhalter Bahnhof" }, POP: { line: "S2", dir: "Potsdamer Platz" }, TOR: { line: "S2", dir: "Brandenburger Tor" }, FSTT: { line: "S2", dir: "Friedrichstr" }, ORS: { line: "S2", dir: "Oranienburger Str" }, NB: { line: "S2", dir: "Nordbahnhof" }, HUM: { line: "S2", dir: "Humboldthain" }, GB: { line: "S2", dir: "Gesundbrunnen" }, BOS: { line: "S2", dir: "Bornholmer Str" }, PKW: { line: "S2", dir: "Pankow" }, PHD: { line: "S2", dir: "Pankow-Heinersdorf" }, BLB: { line: "S2", dir: "Blankenburg" }, KRW: { line: "S2", dir: "Karow" }, BU: { line: "S2", dir: "Buch" }, RGT: { line: "S2", dir: "Röntgental" }, ZEP: { line: "S2", dir: "Zepernick" }, BRF: { line: "S2", dir: "Bernau-Friedenstal" }, BER: { line: "S2", dir: "Bernau" }, NULL: { line: "S2", dir: null } };
  }
  addS25() {
    this.S25 = {
      TLS: { line: "S25", dir: "Teltow Stadt" }, LIS: { line: "S25", dir: "Lichterfelde Süd" }, OSS: { line: "S25", dir: "Osdorfer Str" }, LIO: { line: "S25", dir: "Lichterfelde Ost" }, LAK: { line: "S25", dir: "Lankwitz" }, SDE: { line: "S25", dir: "Südende" }, PRS: { line: "S25", dir: "Priesterweg" }, SKV: { line: "S25", dir: "Südkreuz" }, YOR: { line: "S25", dir: "Yorckstr" }, AHU: { line: "S25", dir: "Anhalter Bahnhof" }, POP: { line: "S25", dir: "Potsdamer Platz" }, TOR: { line: "S25", dir: "Brandenburger Tor" }, FSTT: { line: "S25", dir: "Friedrichstr" }, ORS: { line: "S25", dir: "Oranienburger Str" }, NB: { line: "S25", dir: "Nordbahnhof" }, HUM: { line: "S25", dir: "Humboldthain" }, GB: { line: "S25", dir: "Gesundbrunnen" }, BOS: { line: "S25", dir: "Bornholmer Str" }, WOK: { line: "S25", dir: "Wollankstr" }, SNH: { line: "S25", dir: "Schönholz" }, ARF: { line: "S25", dir: "Alt-Reinickendorf" }, KBO: { line: "S25", dir: "Karl-Bonhoeffer-Nervenklinik" }, EBD: { line: "S25", dir: "Eichborndamm" }, TG: { line: "S25", dir: "Tegel" }, SZF: { line: "S25", dir: "Schulzendorf" }, HLS: { line: "S25", dir: "Schulzendorf" }, HD: { line: "S25", dir: "Hennigsdorf" }, NULL: { line: "S25", dir: null }
    };
  }
  addS26() {
    this.S26 = { TLS: { line: "S26", dir: "Teltow Stadt" }, LIS: { line: "S26", dir: "Lichterfelde Süd" }, OSS: { line: "S26", dir: "Osdorfer Str" }, LIO: { line: "S26", dir: "Lichterfelde Ost" }, LAK: { line: "S26", dir: "Lankwitz" }, SDE: { line: "S26", dir: "Südende" }, PRS: { line: "S26", dir: "Priesterweg" }, SKV: { line: "S26", dir: "Südkreuz" }, YOR: { line: "S26", dir: "Yorckstr" }, AHU: { line: "S26", dir: "Anhalter Bahnhof" }, POP: { line: "S26", dir: "Potsdamer Platz" }, TOR: { line: "S26", dir: "Brandenburger Tor" }, FSTT: { line: "S26", dir: "Friedrichstr" }, ORS: { line: "S26", dir: "Oranienburger Str" }, NB: { line: "S26", dir: "Nordbahnhof" }, HUM: { line: "S26", dir: "Humboldthain" }, GB: { line: "S26", dir: "Gesundbrunnen" }, BOS: { line: "S26", dir: "Bornholmer Str" }, WOK: { line: "S26", dir: "Wollankstr" }, SNH: { line: "S26", dir: "Schönholz" }, WM: { line: "S26", dir: "Wilhelmsruh" }, WIN: { line: "S26", dir: "Wittenau" }, WAI: { line: "S26", dir: "Waidmannslust" }, NULL: { line: "S26", dir: null } };
  }
  addS3() {
    this.S3 = { E: { line: "S3", dir: "Erkner" }, WIG: { line: "S3", dir: "Wilhelmshagen" }, RD: { line: "S3", dir: "Rahnsdorf" }, FRH: { line: "S3", dir: "Friedrichshagen" }, HIG: { line: "S3", dir: "Hirschgarten" }, KPK: { line: "S3", dir: "Köpenick" }, WHH: { line: "S3", dir: "Wuhlheide" }, KLH: { line: "S3", dir: "Karlshorst" }, RB: { line: "S3", dir: "Betriebsbahnhof Rummelsburg" }, RH: { line: "S3", dir: "Rummelsburg" }, OKS: { line: "S3", dir: "Ostkreuz" }, WRS: { line: "S3", dir: "Warschauer Str" }, OSB: { line: "S3", dir: "Ostbahnhof" }, JB: { line: "S3", dir: "Jannowitzbrücke" }, ALX: { line: "S3", dir: "Alexanderplatz" }, HKM: { line: "S3", dir: "Hackescher Markt" }, FST: { line: "S3", dir: "Friedrichstr" }, HBF: { line: "S3", dir: "Hauptbahnhof" }, BEV: { line: "S3", dir: "Bellevue" }, TGN: { line: "S3", dir: "Tiergarten" }, ZOS: { line: "S3", dir: "Zoologischer Garten" }, SAP: { line: "S3", dir: "Savignyplatz" }, CHS: { line: "S3", dir: "Charlottenburg" }, WKS: { line: "S3", dir: "Westkreuz" }, GWD: { line: "S3", dir: "Grunewald" }, MS: { line: "S3", dir: "Messe Süd" }, HST: { line: "S3", dir: "Heerstr" }, OLS: { line: "S3", dir: "Olympiastadion" }, PIC: { line: "S3", dir: "Pichelsberg" }, SRW: { line: "S3", dir: "Stresow" }, SPA: { line: "S3", dir: "Spandau" }, NULL: { line: "S3", dir: null } };
  }
  addS4() {
    this.S41 = { line: "S41", dir: null };
    this.S42 = { line: "S42", dir: null };
  }
  addS45() {
    this.S45 = { FLH: { line: "S45", dir: "Flughafen Berlin-Schönefeld" }, GBA: { line: "S45", dir: "Grünbergallee" }, AGL: { line: "S45", dir: "Altglienicke" }, GAS: { line: "S45", dir: "Grünau" }, ADL: { line: "S45", dir: "Adlershof" }, SCF: { line: "S45", dir: "Betriebsbahnhof Schöneweide" }, SW: { line: "S45", dir: "Schöneweide" }, BMW: { line: "S45", dir: "Baumschulenweg" }, PWA: { line: "S45", dir: "Plänterwald" }, TP: { line: "S45", dir: "Treptower Park" }, KHD: { line: "S45", dir: "Köllnische Heide" }, NK: { line: "S45", dir: "Neukölln" }, HER: { line: "S45", dir: "Hermannstr" }, THF: { line: "S45", dir: "Tempelhof" }, SKR: { line: "S45", dir: "Südkreuz" }, NULL: { line: "S45", dir: null } };
  }
  addS46() {
    this.S46 = { KW: { line: "S46", dir: "Königs Wusterhausen" }, WI: { line: "S46", dir: "Wildau" }, ZTH: { line: "S46", dir: "Zeuthen" }, EIW: { line: "S46", dir: "Eichwalde" }, GAS: { line: "S46", dir: "Grünau" }, ADL: { line: "S46", dir: "Adlershof" }, SCF: { line: "S46", dir: "Betriebsbahnhof Schöneweide" }, SW: { line: "S46", dir: "Schöneweide" }, BMW: { line: "S46", dir: "Baumschulenweg" }, PWA: { line: "S46", dir: "Plänterwald" }, TP: { line: "S46", dir: "Treptower Park" }, KHD: { line: "S46", dir: "Köllnische Heide" }, NK: { line: "S46", dir: "Neukölln" }, HER: { line: "S46", dir: "Hermannstr" }, THF: { line: "S46", dir: "Tempelhof" }, SKR: { line: "S46", dir: "Südkreuz" }, SGR: { line: "S46", dir: "Schöneberg" }, IP: { line: "S46", dir: "Innsbrucker Platz" }, BUP: { line: "S46", dir: "Bundesplatz" }, HEI: { line: "S46", dir: "Heidelberger Platz" }, HO: { line: "S46", dir: "Hohenzollerndamm" }, HAL: { line: "S46", dir: "Halensee" }, WKRR: { line: "S46", dir: "Westkreuz" }, MN: { line: "S46", dir: "Messe Nord/ICC" }, WES: { line: "S46", dir: "Westend" }, JUN: { line: "S46", dir: "Jungfernheide" }, BEU: { line: "S46", dir: "Beusselstr" }, WH: { line: "S46", dir: "Westhafen" }, WED: { line: "S46", dir: "Wedding" }, GB: { line: "S46", dir: "Gesundbrunnen" }, NULL: { line: "S46", dir: null } };
  }
  addS47() {
    this.S47 = { SPF: { line: "S47", dir: "Spindlersfeld" }, OSP: { line: "S47", dir: "Oberspree" }, SW: { line: "S47", dir: "Schöneweide" }, BMW: { line: "S47", dir: "Baumschulenweg" }, PWA: { line: "S47", dir: "Plänterwald" }, TP: { line: "S47", dir: "Treptower Park" }, KHD: { line: "S47", dir: "Köllnische Heide" }, NK: { line: "S47", dir: "Neukölln" }, HER: { line: "S47", dir: "Hermannstr" }, NULL: { line: "S47", dir: null } };
  }
  addS5() {
    this.S5 = { STN: { line: "S5", dir: "Strausberg Nord" }, STR: { line: "S5", dir: "Strausberg Stadt" }, HGM: { line: "S5", dir: "Hegermühle" }, STV: { line: "S5", dir: "Strausberg" }, PEN: { line: "S5", dir: "Petershagen Nord" }, FD: { line: "S5", dir: "Fredersdorf" }, NG: { line: "S5", dir: "Neuenhagen" }, HPG: { line: "S5", dir: "Hoppegarten" }, BIS: { line: "S5", dir: "Birkenstein" }, MDF: { line: "S5", dir: "Mahlsdorf" }, KAD: { line: "S5", dir: "Kaulsdorf" }, WT: { line: "S5", dir: "Wuhletal" }, BDF: { line: "S5", dir: "Biesdorf" }, FFO: { line: "S5", dir: "Friedrichsfelde Ost" }, LI: { line: "S5", dir: "Lichtenberg" }, NPL: { line: "S5", dir: "Nöldnerplatz" }, OKS: { line: "S5", dir: "Ostkreuz" }, WRS: { line: "S5", dir: "Warschauer Str" }, OSB: { line: "S5", dir: "Ostbahnhof" }, JB: { line: "S5", dir: "Jannowitzbrücke" }, ALX: { line: "S5", dir: "Alexanderplatz" }, HKM: { line: "S5", dir: "Hackescher Markt" }, FST: { line: "S5", dir: "Friedrichstr" }, HBF: { line: "S5", dir: "Hauptbahnhof" }, BEV: { line: "S5", dir: "Bellevue" }, TGN: { line: "S5", dir: "Tiergarten" }, ZOS: { line: "S5", dir: "Zoologischer Garten" }, SAP: { line: "S5", dir: "Savignyplatz" }, CHS: { line: "S5", dir: "Charlottenburg" }, WKS: { line: "S5", dir: "Westkreuz" }, MS: { line: "S5", dir: "Messe Süd" }, HST: { line: "S5", dir: "Heerstr" }, OLS: { line: "S5", dir: "Olympiastadion" }, GWD: { line: "S5", dir: "Grunewald" }, NULL: { line: "S5", dir: null } };
  }
  addS7() {
    this.S7 = { AF: { line: "S7", dir: "Ahrensfelde" }, MEA: { line: "S7", dir: "Mehrower Allee" }, RW: { line: "S7", dir: "Raoul-Wallenberg-Str" }, MAZ: { line: "S7", dir: "Marzahn" }, POE: { line: "S7", dir: "Poelchaustr" }, SPH: { line: "S7", dir: "Springpfuhl" }, FFO: { line: "S7", dir: "Friedrichsfelde Ost" }, LI: { line: "S7", dir: "Lichtenberg" }, NPL: { line: "S7", dir: "Nöldnerplatz" }, OKS: { line: "S7", dir: "Ostkreuz" }, WRS: { line: "S7", dir: "Warschauer Str" }, OSB: { line: "S7", dir: "Ostbahnhof" }, JB: { line: "S7", dir: "Jannowitzbrücke" }, ALX: { line: "S7", dir: "Alexanderplatz" }, HKM: { line: "S7", dir: "Hackescher Markt" }, FST: { line: "S7", dir: "Friedrichstr" }, HBF: { line: "S7", dir: "Hauptbahnhof" }, BEV: { line: "S7", dir: "Bellevue" }, TGN: { line: "S7", dir: "Tiergarten" }, ZOS: { line: "S7", dir: "Zoologischer Garten" }, SAP: { line: "S7", dir: "Savignyplatz" }, CHS: { line: "S7", dir: "Charlottenburg" }, WKS: { line: "S7", dir: "Westkreuz" }, GWD: { line: "S7", dir: "Grunewald" }, NIS: { line: "S7", dir: "Nikolassee" }, WSS: { line: "S7", dir: "Wannsee" }, GRI: { line: "S7", dir: "Griebnitzsee" }, BAB: { line: "S7", dir: "Babelsberg" }, PDH: { line: "S7", dir: "Potsdam" }, NULL: { line: "S7", dir: null } };
  }
  addS75() {
    this.S75 = { WAB: { line: "S75", dir: "Wartenberg" }, HH: { line: "S75", dir: "Hohenschönhausen" }, GSE: { line: "S75", dir: "Gehrenseestr" }, SPH: { line: "S75", dir: "Springpfuhl" }, FFO: { line: "S75", dir: "Friedrichsfelde Ost" }, LI: { line: "S75", dir: "Lichtenberg" }, NPL: { line: "S75", dir: "Nöldnerplatz" }, OKS: { line: "S75", dir: "Ostkreuz" }, WRS: { line: "S75", dir: "Warschauer Str" }, OSB: { line: "S75", dir: "Ostbahnhof" }, NULL: { line: "S75", dir: null } };
  }
  addS8() {
    this.S8 = { ZTH: { line: "S8", dir: "Zeuthen" }, EIW: { line: "S8", dir: "Eichwalde" }, GAS: { line: "S8", dir: "Grünau" }, ADL: { line: "S8", dir: "Adlershof" }, SCF: { line: "S8", dir: "Betriebsbahnhof Schöneweide" }, SW: { line: "S8", dir: "Schöneweide" }, BMW: { line: "S8", dir: "Baumschulenweg" }, PWA: { line: "S8", dir: "Plänterwald" }, TP: { line: "S8", dir: "Treptower Park" }, OK: { line: "S8", dir: "Ostkreuz" }, FA: { line: "S8", dir: "Frankfurter Allee" }, STO: { line: "S8", dir: "Storkower Str" }, LST: { line: "S8", dir: "Landsberger Allee" }, GSS: { line: "S8", dir: "Greifswalder Str" }, PLA: { line: "S8", dir: "Prenzlauer Allee" }, SAL: { line: "S8", dir: "Schönhauser Allee" }, BOS: { line: "S8", dir: "Bornholmer Str" }, PKW: { line: "S8", dir: "Pankow" }, PHD: { line: "S8", dir: "Pankow-Heinersdorf" }, BLB: { line: "S8", dir: "Blankenburg" }, MM: { line: "S8", dir: "Mühlenbeck-Mönchmühle" }, SNF: { line: "S8", dir: "Schönfließ" }, BFE: { line: "S8", dir: "Bergfelde" }, HN: { line: "S8", dir: "Hohen Neuendorf" }, BIW: { line: "S8", dir: "Birkenwerder" }, NULL: { line: "S8", dir: null } };
  }
  addS85() {
    this.S85 = { GAS: { line: "S85", dir: "Grünau" }, ADL: { line: "S85", dir: "Adlershof" }, SCF: { line: "S85", dir: "Betriebsbahnhof Schöneweide" }, SW: { line: "S85", dir: "Schöneweide" }, BMW: { line: "S85", dir: "Baumschulenweg" }, PWA: { line: "S85", dir: "Plänterwald" }, TP: { line: "S85", dir: "Treptower Park" }, OK: { line: "S85", dir: "Ostkreuz" }, FA: { line: "S85", dir: "Frankfurter Allee" }, STO: { line: "S85", dir: "Storkower Str" }, LST: { line: "S85", dir: "Landsberger Allee" }, GSS: { line: "S85", dir: "Greifswalder Str" }, PLA: { line: "S85", dir: "Prenzlauer Allee" }, SAL: { line: "S85", dir: "Schönhauser Allee" }, BOS: { line: "S85", dir: "Bornholmer Str" }, PKW: { line: "S85", dir: "Pankow" }, GB: { line: "S85", dir: "Gesundbrunnen" }, HUM: { line: "S85", dir: "Humboldthain" }, NB: { line: "S85", dir: "Nordbahnhof" }, NULL: { line: "S85", dir: null } };
  }
  addS9() {
    this.S9 = { FLH: { line: "S9", dir: "Flughafen Berlin-Schönefeld" }, GBA: { line: "S9", dir: "Grünbergallee" }, AGL: { line: "S9", dir: "Altglienicke" }, GAS: { line: "S9", dir: "Grünau" }, ADL: { line: "S9", dir: "Adlershof" }, SCF: { line: "S9", dir: "Betriebsbahnhof Schöneweide" }, SW: { line: "S9", dir: "Schöneweide" }, BMW: { line: "S9", dir: "Baumschulenweg" }, PWA: { line: "S9", dir: "Plänterwald" }, TP: { line: "S9", dir: "Treptower Park" }, WRS: { line: "S9", dir: "Warschauer Str" }, OSB: { line: "S9", dir: "Ostbahnhof" }, JB: { line: "S9", dir: "Jannowitzbrücke" }, ALX: { line: "S9", dir: "Alexanderplatz" }, HKM: { line: "S9", dir: "Hackescher Markt" }, FST: { line: "S9", dir: "Friedrichstr" }, HBF: { line: "S9", dir: "Hauptbahnhof" }, BEV: { line: "S9", dir: "Bellevue" }, TGN: { line: "S9", dir: "Tiergarten" }, ZOS: { line: "S9", dir: "Zoologischer Garten" }, SAP: { line: "S9", dir: "Savignyplatz" }, CHS: { line: "S9", dir: "Charlottenburg" }, WKS: { line: "S9", dir: "Westkreuz" }, GWD: { line: "S9", dir: "Grunewald" }, MS: { line: "S9", dir: "Messe Süd" }, HST: { line: "S9", dir: "Heerstr" }, OLS: { line: "S9", dir: "Olympiastadion" }, PIC: { line: "S9", dir: "Pichelsberg" }, SRW: { line: "S9", dir: "Stresow" }, SPA: { line: "S9", dir: "Spandau" }, OKS: { line: "S9", dir: "Ostkreuz" }, NPL: { line: "S9", dir: "Nöldnerplatz" }, LI: { line: "S9", dir: "Lichtenberg" }, NULL: { line: "S9", dir: null } };
  }
  addU1(){
    this.U1 = {U: {line: "U1", dir: "Uhlandstr"}, Kfo: {line: "U1", dir: "Kurfürstendamm"}, Wt: {line: "U1", dir: "Wittenbergplatz"}, N: {line: "U1", dir: "Nollendorfplatz"}, Kus: {line: "U1", dir: "Kurfürstenstr"}, Go: {line: "U1", dir: "Gleisdreieck"}, Mo: {line: "U1", dir: "Mehringdamm"}, Ho: {line: "U1", dir: "Hallesches Tor"}, Pr: {line: "U1", dir: "Prinzenstr"}, Kbo: {line: "U1", dir: "Kottbusser Tor"}, Gr: {line: "U1", dir: "Görlitzer Bahnhof"}, S: {line: "U1", dir: "Schlesisches Tor"}, WA: {line: "U1", dir: "Warschauer Str"}, NULL: {line: "U1", dir: null}};
  }
  addU2(){
    this.U2 = {PA: {line: "U2", dir: "Pankow"}, VIN: {line: "U2", dir: "Vinetastr"}, Sh: {line: "U2", dir: "Schönhauser Allee"}, EB: {line: "U2", dir: "Eberswalder Str"}, Sz: {line: "U2", dir: "Senefelderplatz"}, Lu: {line: "U2", dir: "Rosa-Luxemburg-Platz"}, A: {line: "U2", dir: "Alexanderplatz"}, Ko: {line: "U2", dir: "Klosterstr"}, Mk: {line: "U2", dir: "Märkisches Museum"}, Sp: {line: "U2", dir: "Spittelmarkt"}, Hv: {line: "U2", dir: "Hausvogteiplatz"}, Mi: {line: "U2", dir: "Stadtmitte"}, MH: {line: "U2", dir: "Mohrenstr"}, Pd: {line: "U2", dir: "Potsdamer Platz"}, MB: {line: "U2", dir: "Mendelssohn-Bartholdy-Park"}, Gu: {line: "U2", dir: "Gleisdreieck"}, BS: {line: "U2", dir: "Bülowstr"}, No: {line: "U2", dir: "Nollendorfplatz"}, Wt: {line: "U2", dir: "Wittenbergplatz"}, Zo: {line: "U2", dir: "Zoologischer Garten"}, RP: {line: "U2", dir: "Ernst-Reuter-Platz"}, Obi: {line: "U2", dir: "Deutsche Oper"}, Bmo: {line: "U2", dir: "Bismarckstr"}, So: {line: "U2", dir: "Sophie-Charlotte-Platz"}, Kd: {line: "U2", dir: "Kaiserdamm"}, Th: {line: "U2", dir: "Theodor-Heuss-Platz"}, Nd: {line: "U2", dir: "Neu-Westend"}, Sd: {line: "U2", dir: "Olympia-Stadion"}, Rl: {line: "U2", dir: "Ruhleben"}, Au: {line: "U2", dir: "Augsburger Str"}, Sno: {line: "U2", dir: "Spichernstr"}, Hz: {line: "U2", dir: "Hohenzollernplatz"}, Fpo: {line: "U2", dir: "Fehrbelliner Platz"}, NULL: {line: "U2", dir: null}};
  }
  addU3(){
    this.U3 = {K: {line: "U3", dir: "Krumme Lanke"}, Ot: {line: "U3", dir: "Onkel Toms Hütte"}, Os: {line: "U3", dir: "Oskar-Helene-Heim"}, T: {line: "U3", dir: "Freie Universität"}, Dd: {line: "U3", dir: "Dahlem-Dorf"}, Po: {line: "U3", dir: "Podbielskiallee"}, Bt: {line: "U3", dir: "Breitenbachplatz"}, Rd: {line: "U3", dir: "Rüdesheimer Platz"}, Hb: {line: "U3", dir: "Heidelberger Platz"}, Fpo: {line: "U3", dir: "Fehrbelliner Platz"}, Hz: {line: "U3", dir: "Hohenzollernplatz"}, Sno: {line: "U3", dir: "Spichernstr"}, Au: {line: "U3", dir: "Augsburger Str"}, Wt: {line: "U3", dir: "Wittenbergplatz"}, N: {line: "U3", dir: "Nollendorfplatz"}, Kus: {line: "U3", dir: "Kurfürstenstr"}, Go: {line: "U3", dir: "Gleisdreieck"}, Mo: {line: "U3", dir: "Möckernbrücke"}, Ho: {line: "U3", dir: "Hallesches Tor"}, Pr: {line: "U3", dir: "Prinzenstr"}, Kbo: {line: "U3", dir: "Kottbusser Tor"}, Gr: {line: "U3", dir: "Görlitzer Bahnhof"}, S: {line: "U3", dir: "Schlesisches Tor"}, WA: {line: "U3", dir: "Warschauer Str"}, NULL: {line: "U3", dir: null}};
  }
  addU4(){
    this.addU4 = {Nm: {line: "U4", dir: "Nollendorfplatz"}, V: {line: "U4", dir: "Viktoria-Luise-Platz"}, Bpo: {line: "U4", dir: "Bayerischer Platz"}, RS: {line: "U4", dir: "Rathaus Schöneberg"}, Ip: {line: "U4", dir: "Innsbrucker Platz"}, NULL: {line: "U4", dir: null}};
  }
  addU5(){
    this.U5 = {Hö: {line: "U5", dir: "Hönow"}, LL: {line: "U5", dir: "Louis-Lewin-Str"}, HD: {line: "U5", dir: "Hellersdorf"}, C: {line: "U5", dir: "Cottbusser Platz"}, GK: {line: "U5", dir: "Kienberg"}, KL: {line: "U5", dir: "Kaulsdorf-Nord"}, Wh: {line: "U5", dir: "Wuhletal"}, E: {line: "U5", dir: "Elsterwerdaer Platz"}, Bü: {line: "U5", dir: "Biesdorf-Süd"}, Tk: {line: "U5", dir: "Tierpark"}, Fi: {line: "U5", dir: "Friedrichsfelde"}, Li: {line: "U5", dir: "Lichtenberg"}, Md: {line: "U5", dir: "Magdalenenstr"}, Ff: {line: "U5", dir: "Frankfurter Allee"}, Sa: {line: "U5", dir: "Samariterstr"}, FT: {line: "U5", dir: "Frankfurter Tor"}, WR: {line: "U5", dir: "Weberwiese"}, Sr: {line: "U5", dir: "Strausberger Platz"}, Si: {line: "U5", dir: "Schillingstr"}, Al: {line: "U5", dir: "Alexanderplatz"}, NULL: {line: "U5", dir: null}};
  }
  addU55(){
    this.U55 = {HBF: {line: "U55", dir: "Hauptbahnhof"}, BUN: {line: "U55", dir: "Bundestag"}, BRT: {line: "U55", dir: "Brandenburger Tor"}, NULL: {line: "U55", dir: null}};
  }
  addU6(){
    this.U6 = {Tg: {line: "U6", dir: "Alt-Tegel"}, Bk: {line: "U6", dir: "Borsigwerke"}, Hh: {line: "U6", dir: "Holzhauser Str"}, OTI: {line: "U6", dir: "Otisstr"}, Scha: {line: "U6", dir: "Scharnweberstr"}, Sch: {line: "U6", dir: "Kurt-Schumacher-Platz"}, Afr: {line: "U6", dir: "Afrikanische Str"}, Rb: {line: "U6", dir: "Rehberge"}, Se: {line: "U6", dir: "Seestr"}, Lpo: {line: "U6", dir: "Leopoldplatz"}, We: {line: "U6", dir: "Wedding"}, Ri: {line: "U6", dir: "Reinickendorfer Str"}, SK: {line: "U6", dir: "Schwartzkopffstr"}, NA: {line: "U6", dir: "Naturkundemuseum"}, Ob: {line: "U6", dir: "Oranienburger Tor"}, F: {line: "U6", dir: "Friedrichstr"}, Fr: {line: "U6", dir: "Französische Str"}, Mic: {line: "U6", dir: "Stadtmitte"}, Ks: {line: "U6", dir: "Kochstr"}, Hu: {line: "U6", dir: "Hallesches Tor"}, Me: {line: "U6", dir: "Mehringdamm"}, PL: {line: "U6", dir: "Platz der Luftbrücke"}, Ps: {line: "U6", dir: "Paradestr"}, Ts: {line: "U6", dir: "Tempelhof"}, At: {line: "U6", dir: "Alt-Tempelhof"}, Ka: {line: "U6", dir: "Kaiserin-Augusta-Str"}, Ull: {line: "U6", dir: "Ullsteinstr"}, Wl: {line: "U6", dir: "Westphalweg"}, Mf: {line: "U6", dir: "Alt-Mariendorf"}, NULL: {line: "U6", dir: null}};
  }
  addU7(){
    this.U7 = {R: {line: "U7", dir: "Rudow"}, Zd: {line: "U7", dir: "Zwickauer Damm"}, Wk: {line: "U7", dir: "Wutzkyallee"}, La: {line: "U7", dir: "Lipschitzallee"}, Jt: {line: "U7", dir: "Johannisthaler Chaussee"}, Br: {line: "U7", dir: "Britz-Süd"}, Pi: {line: "U7", dir: "Parchimer Allee"}, Bl: {line: "U7", dir: "Blaschkoallee"}, Gz: {line: "U7", dir: "Grenzallee"}, Nk: {line: "U7", dir: "Neukölln"}, KM: {line: "U7", dir: "Karl-Marx-Allee"}, Rk: {line: "U7", dir: "Rathaus Neukölln"}, Hpu: {line: "U7", dir: "Hermannplatz"}, Sü: {line: "U7", dir: "Südstern"}, Gs: {line: "U7", dir: "Gneisenaustr"}, Me: {line: "U7", dir: "Mehringdamm"}, Mu: {line: "U7", dir: "Möckernbrücke"}, Y: {line: "U7", dir: "Yorckstr"}, Kt: {line: "U7", dir: "Kleistpark"}, Ei: {line: "U7", dir: "Eisenacher Str"}, Bpu: {line: "U7", dir: "Bayerischer Platz"}, Beu: {line: "U7", dir: "Berliner Str"}, Bli: {line: "U7", dir: "Blissestr"}, Fpu: {line: "U7", dir: "Fehrbelliner Platz"}, Kn: {line: "U7", dir: "Konstanzer Str"}, Ad: {line: "U7", dir: "Adenauerplatz"}, Wd: {line: "U7", dir: "Wilmersdorfer Str"}, Bmu: {line: "U7", dir: "Bismarckstr"}, Rw: {line: "U7", dir: "Richard-Wagner-Platz"}, Mp: {line: "U7", dir: "Mierendorffplatz"}, Jh: {line: "U7", dir: "Jungfernheide"}, JK: {line: "U7", dir: "Jakob-Kaiser-Platz"}, Hl: {line: "U7", dir: "Halemweg"}, Sie: {line: "U7", dir: "Siemensdamm"}, Rm: {line: "U7", dir: "Rohrdamm"}, P: {line: "U7", dir: "Paulsternstr"}, Hs: {line: "U7", dir: "Haselhorst"}, Zi: {line: "U7", dir: "Zitadelle"}, AS: {line: "U7", dir: "Altstadt Spandau"}, RSp: {line: "U7", dir: "Rathaus Spandau"}, NULL: {line: "U7", dir: null}};
  }
  addU8(){
    this.U8 = {WIU: {line: "U8", dir: "Wittenau"}, RR: {line: "U8", dir: "Rathaus Reinickendorf"}, KB: {line: "U8", dir: "Karl-Bonhoeffer-Nervenklinik"}, LD: {line: "U8", dir: "Lindauer Allee"}, PB: {line: "U8", dir: "Paracelsus-Bad"}, RE: {line: "U8", dir: "Residenzstr"}, FN: {line: "U8", dir: "Franz-Neumann-Platz"}, Olu: {line: "U8", dir: "Osloer Str"}, Pk: {line: "U8", dir: "Pankstr"}, Gb: {line: "U8", dir: "Gesundbrunnen"}, Vo: {line: "U8", dir: "Voltastr"}, B: {line: "U8", dir: "Bernauer Str"}, Ro: {line: "U8", dir: "Rosenthaler Platz"}, W: {line: "U8", dir: "Weinmeisterstr"}, Ap: {line: "U8", dir: "Alexanderplatz"}, Jb: {line: "U8", dir: "Jannowitzbrücke"}, He: {line: "U8", dir: "Heinrich-Heine-Str"}, Mr: {line: "U8", dir: "Moritzplatz"}, Kbu: {line: "U8", dir: "Kottbusser Tor"}, ST: {line: "U8", dir: "Schönleinstr"}, Hpo: {line: "U8", dir: "Hermannplatz"}, Bo: {line: "U8", dir: "Boddinstr"}, L: {line: "U8", dir: "Leinestr"}, HMS: {line: "U8", dir: "Hermannstr"}, NULL: {line: "U8", dir: null}};
  }
  checkBarrier(array){
    for(let i = 0; i < array.length; i++){
      if(array[i].code == "bf"){
        return `<span class="fas fa-wheelchair" title="barrier-free">&nbsp;</span>`;
      }
    }
    return "";
  }
  checkBike(array){
    for(let i = 0; i < array.length; i++){
      if(array[i].code == "FB"){
        return `<span class="fas fa-bicycle" title="You can take your bike with you.">&nbsp;</span>`;
      }
    }
    return "";
  }
  checkState(array){
    for(let i = 0; i < array.length; i++){
      if(array[i].type == "status"){
        return `<span class="fas fa-times" title="${array[i].text}">&nbsp;</span>`;
      }
    }
    return "";
  }
  checkWarning(array){
    for(let i = 0; i < array.length; i++){
      if(array[i].type == "warning"){
        return `<span class="fas fa-exclamation-triangle" title="${array[i].validFrom} - ${array[i].validUntil}: ${array[i].summary}, ${array[i].text}">&nbsp;</span>`
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
  get neighboring() {
    return this._neighboring;
  }
  set neighboring(newValue) {
    this._neighboring = newValue;
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
