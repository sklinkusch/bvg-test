class Station {
  constructor(station, filterValues) {
    this.container = document.querySelector("#container");
    this._stop = station;
    this._neighboring = false;
    this._filter = filterValues;
    this.getData();
    this.addEventListeners();
  }
  addEventListeners() {
    const dropdown = document.querySelector("#dropdown");
    dropdown.addEventListener("input", (e) => {
      while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
      }
      const selectValue = e.target.value;
      switch (selectValue) {
        case "BBEU":
          this.stop = [900000020202];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "TXL", dir: "Flughafen Tegel" }], [{ line: "106", dir: "Seestr" }], [{ line: "123", dir: "Goebelplatz" }, { line: "123", dir: "Mäckeritzwiesen" }], [{ line: "N26", dir: "Seestr" }], [{ line: "TXL", dir: "Alexanderplatz" }, { line: "TXL", dir: "Hauptbahnhof" }], [{ line: "106", dir: "Lindenhof" }, { line: "106", dir: "Südkreuz" }, { line: "106", dir: "Kurfürstenstr" }], [{ line: "123", dir: "Hauptbahnhof" }], [{ line: "N26", dir: "Zoologischer Garten" }]]];
          break;
        case "BBUP":
          this.stop = [900000044202];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "U9", dir: "Osloer Str" }], [{ line: "U9", dir: "Steglitz" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Südkreuz" }], [{ line: "N9", dir: "Osloer Str" }, { line: "N9", dir: "Zoologischer Garten" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "N9", dir: "Steglitz" }]]];
          break;
        case "BFA":
          this.stop = [900000120001];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }, { line: "S8", dir: "Pankow" }], [{ line: "S85", dir: "Pankow" }, { line: "S85", dir: "Greifswalder Str" }], [{ line: "U5", dir: "Hönow" }, { line: "U5", dir: "Kaulsdorf-Nord" }, { line: "U5", dir: "Friedrichsfelde" }], [{ line: "U5", dir: "Alexanderplatz" }], [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Björnsonstr" }, { line: "M13", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "M13", dir: "Degnerstr" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "M13", dir: "S Warschauer Str" }, { line: "M13", dir: "Scharnweberstr./Weichselstr." }], [{ line: "16", dir: "Scharnweberstr./Weichselstr." }], [{ line: "N5", dir: "Riesaer Str" }, { line: "N5", dir: "Wuhletal" }], [{ line: "N5", dir: "Hackescher Markt" }]]];
          break;
        case "BGB":
          this.stop = [900000007102];
          this.neighboring = false;
          this.filter = [[[{ line: "RE3", dir: "Schwedt" }, { line: "RE3", dir: "Stralsund" }, { line: "RE3", dir: "Prenzlau" }, { line: "RE3", dir: "Angermünde" }, { line: "RE3", dir: "Eberswalde" }], [{ line: "RE5", dir: "Rostock" }, { line: "RE5", dir: "Stralsund" }], [{ line: "RB54", dir: "Rheinsberg" }], [{ line: "RE66", dir: "Szczecin" }], [{ line: "RB27", dir: null }], [{ line: "RE3", dir: "Wittenberg" }, { line: "RE3", dir: "Falkenberg" }, { line: "RE3", dir: "Halle" }], [{ line: "RE5", dir: "Elsterwerda" }, { line: "RE5", dir: "Wünsdorf" }], [{ line: "RE6", dir: "Wittenberge" }, { line: "RE6", dir: "Neuruppin" }], [{ line: "RB54", dir: "Lichtenberg" }], [{ line: "S1", dir: "Oranienburg" }, { line: "S1", dir: "Frohnau" }, { line: "S1", dir: "Waidmannslust" }, { line: "S1", dir: "Schönholz" }], [{ line: "S2", dir: "Bernau" }, { line: "S2", dir: "Buch" }, { line: "S2", dir: "Blankenburg" }], [{ line: "S25", dir: "Hennigsdorf" }, { line: "S25", dir: "Tegel" }, { line: "S25", dir: "Schönholz" }], [{ line: "S26", dir: "Waidmannslust" }], [{ line: "S41", dir: null }], [{ line: "S1", dir: "Wannsee" }, { line: "S1", dir: "Zehlendorf" }, { line: "S1", dir: "Schöneberg" }, { line: "S1", dir: "Potsdamer Platz" }, { line: "S1", dir: "Nordbahnhof" }], [{ line: "S2", dir: "Blankenfelde" }, { line: "S2", dir: "Lichtenrade" }, { line: "S2", dir: "Südkreuz" }, { line: "S2", dir: "Potsdamer Platz" }, { line: "S2", dir: "Nordbahnhof" }], [{ line: "S25", dir: "Teltow" }, { line: "S25", dir: "Lichterfelde" }, { line: "S25", dir: "Potsdamer Platz" }, { line: "S25", dir: "Nordbahnhof" }], [{ line: "S26", dir: "Teltow" }, { line: "S26", dir: "Lichterfelde" }, { line: "S26", dir: "Potsdamer Platz" }, { line: "S26", dir: "Nordbahnhof" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }], [{ line: "U8", dir: "Wittenau" }, { line: "U8", dir: "Paracelsus-Bad" }, { line: "U8", dir: "Osloer Str" }], [{ line: "U8", dir: "Hermannstr" }], [{ line: "247", dir: "Leopoldplatz" }], [{ line: "N8", dir: "Wilhelmsruher Damm" }, { line: "N8", dir: "Osloer Str" }], [{ line: "247", dir: "Nordbahnhof" }, { line: "247", dir: "Bernauer Str" }], [{ line: "N8", dir: "Hermannstr" }, { line: "N8", dir: "Hermannplatz" }]]];
          break;
        case "BGSS":
          this.stop = [900000110003];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }, { line: "S8", dir: "Pankow" }], [{ line: "S85", dir: "Pankow" }], [{ line: "M4", dir: "Falkenberg" }, { line: "M4", dir: "Zingster Str" }, { line: "M4", dir: "Sulzfelder Str" }], [{ line: "M4", dir: "Hackescher Markt" }]]];
          break;
        case "BHAL":
          this.stop = [900000040101];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Westend" }, { line: "S46", dir: "Gesundbrunnen" }], [{ line: "M19", dir: "Grunewald" }, { line: "M19", dir: "Halensee" }], [{ line: "M29", dir: "Roseneck" }], [{ line: "X10", dir: "Teltow" }, { line: "X10", dir: "Andr&#233;ezeile" }], [{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }], [{ line: "N42", dir: "Theodor-Heuss-Platz" }], [{ line: "M19", dir: "Mehringdamm" }], [{ line: "M29", dir: "Hermannplatz" }], [{ line: "X10", dir: "Zoologischer Garten" }], [{ line: "104", dir: "Tunnelstr" }, { line: "104", dir: "Treptower Park" }], [{ line: "N42", dir: "Alexanderplatz" }]]];
          break;
        case "BHEI":
          this.stop = [900000045102];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Westend" }, { line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "U3", dir: "Warschauer Str" }, { line: "U3", dir: "Nollendorfplatz" }, { line: "U3", dir: "Spichernstr" }], [{ line: "249", dir: "Roseneck" }], [{ line: "310", dir: "Wilmersdorfer Str" }], [{ line: "N3", dir: "Mexikoplatz" }], [{ line: "249", dir: "Zoologischer Garten" }], [{ line: "310", dir: "Blissestr" }], [{ line: "N3", dir: "Wittenbergplatz" }]]];
          break;
        case "BHER":
          this.stop = [900000079221, 900000079220];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S45", dir: "Südkreuz" }, { line: "S45", dir: "Tempelhof" }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }, { line: "S46", dir: "Südkreuz" }, { line: "S46", dir: "Tempelhof" }], [{ line: "S42", dir: null }], [{ line: "S45", dir: "Schönefeld" }, { line: "S45", dir: "Grünau" }, { line: "S45", dir: "Schöneweide" }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "S47", dir: "Spindlersfeld" }], [{ line: "U8", dir: "Wittenau" }, { line: "U8", dir: "Paracelsus-Bad" }, { line: "U8", dir: "Osloer Str" }], [{ line: "377", dir: "Plänterwald" }], [{ line: "N8", dir: "Wilhelmsruher Damm" }, { line: "N8", dir: "Osloer Str" }], [{ line: "N79", dir: "Plänterwald" }], [{ line: "M44", dir: "Stuthirtenweg" }, { line: "M44", dir: "Alt-Buckow" }], [{ line: "246", dir: "Friedrich-Wilhelm-Platz" }, { line: "246", dir: "Alt-Tempelhof" }], [{ line: "277", dir: "Stadtrandsiedlung" }, { line: "277", dir: "Nahmitzer Damm/Motzener Str" }, { line: "277", dir: "Daimlerstr" }], [{ line: "370", dir: "Neuköllnische Brücke" }], [{ line: "377", dir: "Kranoldstr" }], [{ line: "N79", dir: "Alt-Mariendorf" }]], [[{ line: "246", dir: "Friedrich-Wilhelm-Platz" }, { line: "246", dir: "Alt-Tempelhof" }], [{ line: "370", dir: "Neuköllnische Brücke" }]]];
          break;
        case "BHO":
          this.stop = [900000044101];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "115", dir: "Spanische Allee/Potsdamer Ch" }, { line: "115", dir: "Neuruppiner Str" }, { line: "115", dir: "Roseneck" }], [{ line: "N3", dir: "Mexikoplatz" }], [{ line: "N10", dir: "Sachtlebenstr" }], [{ line: "115", dir: "Fehrbelliner Platz" }], [{ line: "N3", dir: "Wittenbergplatz" }], [{ line: "N10", dir: "Zoologischer Garten" }]]];
          break;
        case "BIP":
          this.stop = [900000054105];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "U4", dir: "Nollendorfplatz" }], [{ line: "M48", dir: "Alexanderplatz" }, { line: "M48", dir: "Mohrenstr" }], [{ line: "M85", dir: "Hauptbahnhof" }, { line: "M85", dir: "Potsdamer Platz" }], [{ line: "187", dir: "Turmstr" }, { line: "187", dir: "Kurfürstenstr" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Hallesches Tor" }, { line: "248", dir: "Südkreuz" }], [{ line: "M48", dir: "Busseallee" }, { line: "M48", dir: "Zehlendorf Eiche" }, { line: "M48", dir: "Rathaus Steglitz" }], [{ line: "M85", dir: "Lichterfelde Süd" }, { line: "M85", dir: "Rathaus Steglitz" }], [{ line: "187", dir: "Halbauer Weg" }, { line: "187", dir: "Lankwitz Kirche" }, { line: "187", dir: "Insulaner" }], [{ line: "248", dir: "Breitenbachplatz" }]]];
          break;
        case "BJUN":
          this.stop = [900000020201, 900000020207];
          this.neighboring = false;
          this.filter = [[[{ line: "RE4", dir: "Stendal" }, { line: "RE4", dir: "Rathenow" }], [{ line: "RE6", dir: "Wittenberge" }, { line: "RE6", dir: "Neuruppin" }], [{ line: "RB10", dir: "Nauen" }], [{ line: "RB13", dir: "Wustermark" }], [{ line: "RE4", dir: "Jüterbog" }, { line: "RE4", dir: "Luckenwalde" }, { line: "RE4", dir: "Ludwigsfelde" }], [{ line: "RE6", dir: "Gesundbrunnen" }], [{ line: "RB10", dir: "Südkreuz" }], [{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "U7", dir: "Rudow" }], [{ line: "U7", dir: "Rathaus Spandau" }], [{ line: "M21", dir: "Uhlandstr" }], [{ line: "M21", dir: "Goerdelersteg" }], [{ line: "M27", dir: "Pankow" }], [{ line: "X9", dir: "Zoologischer Garten" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "M27", dir: "Jungfernheide" }], [{ line: "N7", dir: "Rathaus Spandau" }]], [[{ line: "M27", dir: "Jungfernheide" }], [{ line: "X9", dir: "Flughafen Tegel" }], [{ line: "109", dir: "Flughafen Tegel" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "109", dir: "Zoologischer Garten" }]]];
          break;
        case "BLST":
          this.stop = [900000110004];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }, { line: "S8", dir: "Pankow" }], [{ line: "S85", dir: "Pankow" }], [{ line: "M5", dir: "Hauptbahnhof" }, { line: "M5", dir: "Hackescher Markt" }, { line: "M5", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M6", dir: "Hackescher Markt" }, { line: "M6", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M8", dir: "Hauptbahnhof" }, { line: "M8", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M5", dir: "Zingster Str" }], [{ line: "M6", dir: "Riesaer Str" }, { line: "M6", dir: "Betriebshof Marzahn" }, { line: "M6", dir: "S Marzahn" }], [{ line: "M8", dir: "Ahrensfelde/Stadtgrenze" }, { line: "M8", dir: "Betriebshof Marzahn" }], [{ line: "156", dir: "Stadion Buschallee/Hansastr" }, { line: "156", dir: "Große Seestr." }, { line: "156", dir: "Pasedagplatz" }]]];
          break;
        case "BMN":
          this.stop = [900000024106];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Westend" }, { line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }, { line: "M49", dir: "Gatower Str" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }, { line: "X34", dir: "Gatower Str" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }, { line: "X49", dir: "Gatower Str" }], [{ line: "139", dir: "Werderstr" }], [{ line: "218", dir: "Pfaueninsel" }], [{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer" }], [{ line: "X49", dir: "Wilmersdorfer" }]]];
          break;
        case "BNK":
          this.stop = [900000078201, 900000078272, 900000078273, 900000078271];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S45", dir: "Südkreuz" }, { line: "S45", dir: "Tempelhof" }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }, { line: "S46", dir: "Südkreuz" }, { line: "S46", dir: "Tempelhof" }], [{ line: "S47", dir: "Hermannstr" }], [{ line: "S42", dir: null }], [{ line: "S45", dir: "Schönefeld" }, { line: "S45", dir: "Grünau" }, { line: "S45", dir: "Schöneweide" }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "S47", dir: "Spindlersfeld" }]], [[{ line: "U7", dir: "Rudow" }, { line: "U7", dir: "Britz-Süd" }], [{ line: "U7", dir: "Rathaus Spandau" }, { line: "U7", dir: "Rohrdamm" }, { line: "U7", dir: "Richard-Wagner-Platz" }, { line: "U7", dir: "Fehrbelliner Platz" }, { line: "U7", dir: "Hermannplatz" }]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "N79", dir: "Plänterwald" }]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "370", dir: "Neuköllnische Brücke" }], [{ line: "377", dir: "Plänterwald" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "370", dir: "Hermannstr" }], [{ line: "377", dir: "Hermannstr" }]]];
          break;
        case "BOK":
          this.stop = [900000120003];
          this.neighboring = false;
          this.filter = [[[{ line: "RE1", dir: "Cottbus" }, { line: "RE1", dir: "Eisenhüttenstadt" }, { line: "RE1", dir: "Frankfurt" }], [{ line: "RE2", dir: "Cottbus" }], [{ line: "RE7", dir: "Wünsdorf-Waldstadt" }, { line: "RE7", dir: "Schönefeld" }], [{ line: "RB12", dir: "Templin" }], [{ line: "RB14", dir: "Schönefeld" }], [{ line: "RB24", dir: "Eberswalde" }], [{ line: "RB25", dir: "Werneuchen" }], [{ line: "RB26", dir: "Gorz&#243;w" }, { line: "RB26", dir: "Kostrzyn" }], [{ line: "RE1", dir: "Magdeburg" }, { line: "RE1", dir: "Brandenburg" }, { line: "RE1", dir: "Potsdam" }], [{ line: "RE2", dir: "Wismar" }, { line: "RE2", dir: "Bad Kleinen" }, { line: "RE2", dir: "Schwerin" }, { line: "RE2", dir: "Wittenberge" }], [{ line: "RE7", dir: "Dessau" }, { line: "RE7", dir: "Bad Belzig" }], [{ line: "RB14", dir: "Nauen" }], [{ line: "RB24", dir: "Senftenberg" }, { line: "RB24", dir: "Cottbus" }], [{ line: "S3", dir: "Erkner" }, { line: "S3", dir: "Friedrichshagen" }, { line: "S3", dir: "Köpenick" }], [{ line: "S5", dir: "Strausberg" }, { line: "S5", dir: "Hoppegarten" }, { line: "S5", dir: "Mahlsdorf" }, { line: "S5", dir: "Lichtenberg" }], [{ line: "S7", dir: "Ahrensfelde" }, { line: "S7", dir: "Lichtenberg" }], [{ line: "S75", dir: "Wartenberg" }, { line: "S75", dir: "Hohenschönhausen" }], [{ line: "S75", dir: "Lichtenberg" }], [{ line: "S3", dir: "Grunewald" }, { line: "S3", dir: "Spandau" }, { line: "S3", dir: "Westkreuz" }, { line: "S3", dir: "Charlottenburg" }, { line: "S3", dir: "Ostbahnhof" }], [{ line: "S5", dir: "Grunewald" }, { line: "S5", dir: "Westkreuz" }, { line: "S5", dir: "Ostbahnhof" }], [{ line: "S7", dir: "Potsdam" }, { line: "S7", dir: "Wannsee" }, { line: "S7", dir: "Grunewald" }, { line: "S7", dir: "Westkreuz" }, { line: "S7", dir: "Charlottenburg" }, { line: "S7", dir: "Ostbahnhof" }], [{ line: "S75", dir: "Ostbahnhof" }, { line: "S75", dir: "Warschauer Str" }], [{ line: "S9", dir: "Spandau" }, { line: "S9", dir: "Westkreuz" }, { line: "S9", dir: "Ostbahnhof" }], [{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }, { line: "S8", dir: "Pankow" }], [{ line: "S85", dir: "Pankow" }], [{ line: "194", dir: "Helene-Weigel-Platz" }, { line: "194", dir: "Friedrichsfelde Ost" }, { line: "194", dir: "Nöldnerplatz" }], [{ line: "347", dir: "Tunnelstr" }], [{ line: "N94", dir: "Magdalenenstr" }], [{ line: "194", dir: "Hermannplatz" }, { line: "194", dir: "Treptower Park" }], [{ line: "347", dir: "Ostbahnhof" }, { line: "347", dir: "Warschauer Str" }], [{ line: "N94", dir: "Hermannplatz" }]]];
          break;
        case "BPLA":
          this.stop = [900000110002];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }, { line: "S8", dir: "Pankow" }], [{ line: "S85", dir: "Pankow" }], [{ line: "M2", dir: "Am Steinberg" }, { line: "M2", dir: "Heinersdorf" }], [{ line: "M2", dir: "Alexanderplatz" }], [{ line: "156", dir: "Stadion Buschallee/Hansastr" }, { line: "156", dir: "Große Seestr" }, { line: "156", dir: "Pasedagplatz" }], [{ line: "156", dir: "Storkower Str" }, { line: "156", dir: "Michelangelostr" }]]];
          break;
        case "BSG":
          this.stop = [900000054104];
          this.neighboring = false;
          this.filter = [[[{ line: "S1", dir: "Oranienburg" }, { line: "S1", dir: "Frohnau" }, { line: "S1", dir: "Waidmannslust" }, { line: "S1", dir: "Schönholz" }, { line: "S1", dir: "Gesundbrunnen" }, { line: "S1", dir: "Nordbahnhof" }, { line: "S1", dir: "Potsdamer Platz" }], [{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }, { line: "S46", dir: "Tempelhof" }, { line: "S46", dir: "Südkreuz" }], [{ line: "M46", dir: "Zoologischer Garten" }, { line: "M46", dir: "Wittenbergplatz" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "M46", dir: "Britz-Süd" }, { line: "M46", dir: "Alt-Tempelhof" }, { line: "M46", dir: "Südkreuz" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Hallesches Tor" }, { line: "248", dir: "Südkreuz" }]]];
          break;
        case "BSAL":
          this.stop = [900000110001];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }, { line: "S8", dir: "Pankow" }], [{ line: "S85", dir: "Pankow" }], [{ line: "U2", dir: "Pankow" }, { line: "U2", dir: "Vinetastr" }], [{ line: "U2", dir: "Ruhleben" }, { line: "U2", dir: "Olympia-Stadion" }, { line: "U2", dir: "Theodor-Heuss-Platz" }, { line: "U2", dir: "Deutsche Oper" }, { line: "U2", dir: "Zoologischer Garten" }, { line: "U2", dir: "Breitenbachplatz" }, { line: "U2", dir: "Fehrbelliner Platz" }, { line: "U2", dir: "Spichernstr" }, { line: "U2", dir: "Potsdamer Platz" }, { line: "U2", dir: "Spittelmarkt" }, { line: "U2", dir: "Alexanderplatz" }, { line: "U2", dir: "Rosa-Luxemburg-Platz" }], [{ line: "M1", dir: "Schillerstr" }, { line: "M1", dir: "Rosenthal Nord" }], [{ line: "M1", dir: "Am Kupfergraben" }, { line: "M1", dir: "Hackescher Markt" }]]];
          break;
        case "BSO":
          this.stop = [900000077106, 900000077110];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S42", dir: null }], [{ line: "M41", dir: "Hauptbahnhof" }, { line: "M41", dir: "Philharmonie" }, { line: "M41", dir: "Hallesches Tor" }, { line: "M41", dir: "Hermannplatz" }], [{ line: "171", dir: "Hermannplatz" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "M41", dir: "Sonnenallee/Baumschulenstr" }], [{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N79", dir: "Plänterwald" }]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N79", dir: "Plänterwald" }]]];
          break;
        case "BSTO":
          this.stop = [900000110012];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Grünau" }, { line: "S8", dir: "Zeuthen" }], [{ line: "S85", dir: "Schöneweide" }, { line: "S85", dir: "Grünau" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }], [{ line: "S85", dir: "Pankow" }], [{ line: "156", dir: "Stadion Buschallee" }, { line: "156", dir: "Große Seestr" }, { line: "156", dir: "Pasedagplatz" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }]]];
          break;
        case "BSK":
          this.stop = [900000058101, 900000058100];
          this.neighboring = false;
          this.filter = [[[{ line: "RE3", dir: "Schwedt" }, { line: "RE3", dir: "Stralsund" }, { line: "RE3", dir: "Prenzlau" }, { line: "RE3", dir: "Angermünde" }, { line: "RE3", dir: "Eberswalde" }], [{ line: "RE4", dir: "Stendal" }, { line: "RE4", dir: "Rathenow" }], [{ line: "RE5", dir: "Rostock" }, { line: "RE5", dir: "Stralsund" }], [{ line: "RB10", dir: "Nauen" }], [{ line: "RE3", dir: "Wittenberg" }, { line: "RE3", dir: "Falkenberg" }, { line: "RE3", dir: "Halle" }], [{ line: "RE4", dir: "Jüterbog" }, { line: "RE4", dir: "Luckenwalde" }, { line: "RE4", dir: "Ludwigsfelde" }], [{ line: "RE5", dir: "Elsterwerda" }, { line: "RE5", dir: "Wünsdorf" }], [{ line: "S2", dir: "Bernau" }, { line: "S2", dir: "Buch" }, { line: "S2", dir: "Blankenburg" }, { line: "S2", dir: "Gesundbrunnen" }, { line: "S2", dir: "Potsdamer Platz" }, { line: "S2", dir: "Anhalter Bahnhof" }], [{ line: "S25", dir: "Hennigsdorf" }, { line: "S25", dir: "Tegel" }, { line: "S25", dir: "Schönholz" }, { line: "S25", dir: "Nordbahnhof" }, { line: "S25", dir: "Potsdamer Platz" }, { line: "S25", dir: "Anhalter Bahnhof" }], [{ line: "S26", dir: "Waidmannslust" }, { line: "S26", dir: "Nordbahnhof" }, { line: "S26", dir: "Potsdamer Platz" }], [{ line: "S2", dir: "Blankenfelde" }, { line: "S2", dir: "Lichtenrade" }], [{ line: "S25", dir: "Teltow" }, { line: "S25", dir: "Lichterfelde" }], [{ line: "S26", dir: "Teltow" }, { line: "S26", dir: "Lichterfelde" }], [{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }], [{ line: "S42", dir: null }], [{ line: "S45", dir: "Schönefeld" }, { line: "S45", dir: "Grünau" }, { line: "S45", dir: "Schöneweide" }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "M46", dir: "Zoologischer Garten" }, { line: "M46", dir: "Wittenbergplatz" }], [{ line: "106", dir: "Seestr" }, { line: "106", dir: "Kurfürstenstr" }], [{ line: "204", dir: "Zoologischer Garten" }], [{ line: "M46", dir: "Britz-Süd" }, { line: "M46", dir: "Alt-Tempelhof" }], [{ line: "106", dir: "Lindenhof" }],], [[{ line: "184", dir: "Reichartstr" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckstr" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Hallesches Tor" }]]];
          break;
        case "BTHF":
          this.stop = [900000068201, 900000068272];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S45", dir: "Südkreuz" }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }, { line: "S46", dir: "Südkreuz" }], [{ line: "S42", dir: null }], [{ line: "S45", dir: "Schönefeld" }, { line: "S45", dir: "Grünau" }, { line: "S45", dir: "Schöneweide" }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "U6", dir: "Alt-Tegel" }, { line: "U6", dir: "Kurt-Schumacher-Platz" }, { line: "U6", dir: "Seestr" }, { line: "U6", dir: "Wedding" }, { line: "U6", dir: "Hallesches Tor" }, { line: "U6", dir: "Platz der Luftbrücke" }], [{ line: "U6", dir: "Alt-Mariendorf" }], [{ line: "184", dir: "Südkreuz" }], [{ line: "U6", dir: "Alt-Tegel" }], [{ line: "140", dir: "Ostbahnhof" }, { line: "140", dir: "Mehringdamm" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckplatz" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "N6", dir: "Alt-Mariendorf" }], [{ line: "N84", dir: "Zehlendorf Eiche" }, { line: "N84", dir: "Alt-Tempelhof" }]], [[{ line: "184", dir: "Südkreuz" }, { line: "184", dir: "Tempelhof" }], [{ line: "N6", dir: "Alt-Tegel" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckplatz" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "N6", dir: "Alt-Mariendorf" }]]];
          break;
        case "BTP":
          this.stop = [900000190001, 900000190701, 900000190702, 900000190100];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S8", dir: "Zeuthen" }, { line: "S8", dir: "Grünau" }], [{ line: "S85", dir: "Grünau" }, { line: "S85", dir: "Schöneweide" }], [{ line: "S9", dir: "Schönefeld" }, { line: "S9", dir: "Schöneweide" }], [{ line: "S42", dir: null }], [{ line: "S8", dir: "Birkenwerder" }, { line: "S8", dir: "Blankenburg" }, { line: "S8", dir: "Pankow" }], [{ line: "S85", dir: "Pankow" }], [{ line: "S9", dir: "Spandau" }, { line: "S9", dir: "Westkreuz" }, { line: "S9", dir: "Ostbahnhof" }]], [[{ line: "165", dir: "Märkisches Museum" }, { line: "165", dir: "Treptower Park" }], [{ line: "166", dir: "Boddinstr" }, { line: "166", dir: "Treptower Park" }], [{ line: "265", dir: "Stadtmitte" }, { line: "265", dir: "Märkisches Museum" }, { line: "265", dir: "Schlesisches Tor" }, { line: "265", dir: "Treptower Park" }], [{ line: "N65", dir: "Hackescher Markt" }]], [[{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }, { line: "104", dir: "Berliner Str" }, { line: "104", dir: "Platz der Luftbrücke" }, { line: "104", dir: "Boddinstr" }], [{ line: "194", dir: "Hermannplatz" }], [{ line: "N94", dir: "Hermannplatz" }], [{ line: "104", dir: "Tunnelstr" }], [{ line: "194", dir: "Helene-Weigel-Platz" }, { line: "194", dir: "Friedrichsfelde Ost" }, { line: "194", dir: "Nöldnerplatz" }], [{ line: "N94", dir: "Magdalenenstr" }]], [[{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }, { line: "104", dir: "Berliner Str" }, { line: "104", dir: "Platz der Luftbrücke" }, { line: "104", dir: "Boddinstr" }], [{ line: "165", dir: "Müggelschlößchenweg" }, { line: "165", dir: "Schöneweide" }], [{ line: "166", dir: "Boddinstr" }], [{ line: "194", dir: "Hermannplatz" }], [{ line: "265", dir: "Schöneweide" }, { line: "265", dir: "Baumschulenstr" }], [{ line: "N65", dir: "Müggelschlößchenweg" }, { line: "N65", dir: "Schöneweide" }], [{ line: "N94", dir: "Hermannplatz" }], [{ line: "165", dir: "Märkisches Museum" }], [{ line: "265", dir: "Stadtmitte" }, { line: "265", dir: "Märkisches Museum" }, { line: "265", dir: "Schlesisches Tor" }], [{ line: "N65", dir: "Hackescher Markt" }]]];
          break;
        case "BWED":
          this.stop = [900000009104, 900000008103];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "U6", dir: "Alt-Tegel" }, { line: "U6", dir: "Kurt-Schumacher-Platz" }, { line: "U6", dir: "Seestr" }], [{ line: "U6", dir: "Alt-Mariendorf" }, { line: "U6", dir: "Tempelhof" }, { line: "U6", dir: "Platz der Luftbrücke" }, { line: "U6", dir: "Hallesches Tor" }], [{ line: "120", dir: "Wilhelmsruher Damm" }, { line: "120", dir: "Wittenau" }, { line: "120", dir: "Paracelsus-Bad" }, { line: "120", dir: "Leopoldplatz" }], [{ line: "N6", dir: "Alt-Tegel" }], [{ line: "N20", dir: "Hainbuchenstr" }]], [[{ line: "M27", dir: "Jungfernheide" }], [{ line: "247", dir: "Leopoldplatz" }], [{ line: "M27", dir: "Pankow" }], [{ line: "247", dir: "Nordbahnhof" }, { line: "247", dir: "Bernauer Str" }]]];
          break;
        case "BWES":
          this.stop = [900000026207];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "M45", dir: "Johannesstift" }, { line: "M45", dir: "DRK-Kliniken Westend" }, { line: "M45", dir: "Rathaus Spandau" }], [{ line: "M45", dir: "Zoologischer Garten" }]]];
          break;
        case "BWH":
          this.stop = [900000001201];
          this.neighboring = false;
          this.filter = [[[{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "U9", dir: "Osloer Str" }], [{ line: "U9", dir: "Rathaus Steglitz" }, { line: "U9", dir: "Zoologischer Garten" }], [{ line: "N9", dir: "Osloer Str" }], [{ line: "N9", dir: "Rathaus Steglitz" }, { line: "N9", dir: "Zoologischer Garten" }]]];
          break;
        case "BWK":
          this.stop = [900000024102];
          this.neighboring = false;
          this.filter = [[[{ line: "S3", dir: "Grunewald" }, { line: "S3", dir: "Spandau" }], [{ line: "S5", dir: "Grunewald" }], [{ line: "S7", dir: "Potsdam" }, { line: "S7", dir: "Wannsee" }, { line: "S7", dir: "Grunewald" }], [{ line: "S9", dir: "Spandau" }], [{ line: "S3", dir: "Erkner" }, { line: "S3", dir: "Friedrichshagen" }, { line: "S3", dir: "Köpenick" }], [{ line: "S5", dir: "Strausberg" }, { line: "S5", dir: "Hoppegarten" }, { line: "S5", dir: "Mahlsdorf" }, { line: "S5", dir: "Lichtenberg" }], [{ line: "S7", dir: "Ahrensfelde" }, { line: "S7", dir: "Lichtenberg" }, { line: "S7", dir: "Ostbahnhof" }], [{ line: "S9", dir: "Schönefeld" }, { line: "S9", dir: "Schöneweide" }], [{ line: "S41", dir: null }], [{ line: "S46", dir: "Gesundbrunnen" }, { line: "S46", dir: "Westend" }], [{ line: "S42", dir: null }], [{ line: "S46", dir: "Königs Wusterhausen" }, { line: "S46", dir: "Grünau" }], [{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }], [{ line: "N42", dir: "Theodor-Heuss-Platz" }]]];
          break;
        case "jov":
          this.stop = [900000160541];
          this.neighboring = false;
          this.filter = [[[{ line: "240", dir: "Storkower Str" }], [{ line: "N50", dir: "Hugenottenplatz" }, { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "N50", dir: "Pankow" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }], [{ line: "N50", dir: "Tierpark" }, { line: "N50", dir: "Betriebshof Lichtenberg" }]]];
          break;
        case "bae":
          this.stop = [900000160509];
          this.neighboring = false;
          this.filter = [[[{ line: "M8", dir: "Hauptbahnhof" }, { line: "M8", dir: "Petersburger" }], [{ line: "M5", dir: "Petersburger" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M8", dir: "Ahrensfelde/Stadtgrenze" }, { line: "M8", dir: "Betriebshof Marzahn" }], [{ line: "21", dir: "Gudrunstr" }]]];
          break;
        case "moe":
          this.stop = [900000160014];
          this.neighboring = false;
          this.filter = [[[{ line: "M13", dir: "Warschauer" }, { line: "M13", dir: "Frankfurter" }], [{ line: "16", dir: "Frankfurter" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Degnerstr" }, { line: "M13", dir: "Betriebshof Lichtenberg" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "21", dir: "Gudrunstr" }], [{ line: "240", dir: "Storkower Str" }], [{ line: "N50", dir: "Hugenottenplatz" }, { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "N50", dir: "Pankow" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }], [{ line: "N50", dir: "Tierpark" }, { line: "N50", dir: "Betriebshof Lichtenberg" }]]];
          break;
        case "gat":
          this.stop = [900000032106];
          this.neighboring = false;
          this.filter = [[[{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }, { line: "M49", dir: "Haus des Rundfunks" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer Str" }], [{ line: "X49", dir: "Wilmersdorfer" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }], [{ line: "134", dir: "Hottengrund" }, { line: "134", dir: "Alt-Gatow" }, { line: "134", dir: "Alt-Kladow" }], [{ line: "N34", dir: "Hottengrund" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }], [{ line: "134", dir: "Wasserwerk Spandau" }, { line: "134", dir: "Kisseln" }, { line: "134", dir: "Rathaus Spandau" }], [{ line: "N34", dir: "Aalemannufer" }], [{ line: "136", dir: "Aalemannufer" }, { line: "136", dir: "Hennigsdorf" }, { line: "136", dir: "Werderstr" }, { line: "136", dir: "Rathaus Spandau" }], [{ line: "236", dir: "Haselhorst" }, { line: "236", dir: "Rathaus Spandau" }], [{ line: "136", dir: "Am Omnibushof" }], [{ line: "236", dir: "Am Omnibushof" }]]];
          break;
        case "wil":
          this.stop = [900000032102];
          this.neighboring = false;
          this.filter = [[[{ line: "135", dir: "Rathaus Spandau" }, { line: "135", dir: "Am Omnibushof" }], [{ line: "638", dir: "Rathaus Spandau" }], [{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }, { line: "M49", dir: "Haus des Rundfunks" }], [{ line: "X49", dir: "Wilmersdorfer Str" }], [{ line: "135", dir: "Alt-Kladow" }, { line: "135", dir: "Landstadt Gatow" }, { line: "135", dir: "Hottengrund" }], [{ line: "638", dir: "Hauptbahnhof" }, { line: "638", dir: "Campus Jungfernsee" }], [{ line: "338", dir: "Havelpark" }], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }]]];
          break;
      }
      this.getData();
    });
  }
  evalData(array, index) {
    if (array.length > 0) {
      const header = document.createElement('h2');
      header.innerHTML = `Abfahrten ab ${array[0].stop.name}`;
      this.container.appendChild(header);

      this.filter[index].forEach(filterSet => {
        var subheader_ident = true;
        for (let i = 0; i < array.length; i++) {
          let identifier = false;
          for (let j = 0; j < filterSet.length; j++) {
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
              const subheader = document.createElement('h3');
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
            const row = document.createElement('div');
            row.className = "row";
            row.innerHTML = `
            <div class="planTime">${planTime}</div>
            <div class="realTime">${realTime}</div>
            <div class="delay">${delay}</div>
            <div class="transport">${mean}</div>
            <div class="line">${line}</div>
            <div class="direction">${target}</div>
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
        }).then(data => {
          this.evalData(data, index);
        }).catch(err => console.log(err));
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
const jov = new Station([900000160541], [[[{ line: "240", dir: "Storkower" }], [{ line: "N50", dir: "Hugenottenplatz" }, { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "N50", dir: "Pankow" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }], [{ line: "N50", dir: "Tierpark" }, { line: "N50", dir: "Betriebshof Lichtenberg" }]]]);