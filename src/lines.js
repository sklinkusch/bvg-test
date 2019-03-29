export default class Line {
  constructor() {
    this.addLines();
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
    this.addU9();
  }
  addBLine(line, directions) {
    let output = {};
    Object.keys(directions).forEach(direction => {
      output[direction] = { line: line, dir: directions[direction] };
    });
    return output;
  }
  addS1() {
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
  addS2() {
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
  addS25() {
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
  addS26() {
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
  addS3() {
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
  addS4() {
    this.S41 = { line: "S41", dir: null };
    this.S42 = { line: "S42", dir: null };
  }
  addS45() {
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
  addS46() {
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
  addS47() {
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
  addS5() {
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
  addS7() {
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
  addS75() {
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
  addS8() {
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
  addS85() {
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
  addS9() {
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
  addU1() {
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
  addU2() {
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
  addU3() {
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
  addU4() {
    this.U4 = this.addBLine("U4", {
      Nm: "Nollendorfplatz",
      V: "Viktoria-Luise-Platz",
      Bpo: "Bayerischer Platz",
      RS: "Rathaus Schöneberg",
      Ip: "Innsbrucker Platz",
      NULL: null
    });
  }
  addU5() {
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
  addU55() {
    this.U55 = this.addBLine("U55", {
      HBF: "Hauptbahnhof",
      BUN: "Bundestag",
      BRT: "Brandenburger Tor",
      NULL: null
    });
  }
  addU6() {
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
  addU7() {
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
  addU8() {
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
  addU9() {
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
}
