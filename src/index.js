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
        case "BALX":
          this.stop = [900000100003,900000100703,900000100704,900000100705,900000100708,900000100024,900000100026,900000100712,900000100711,900000100031,900000100005,900000100707,900000100030];
          this.neighboring = false;
          this.filter = [[[{line: "RE1", dir: "Magdeburg"}, {line: "RE1", dir: "Brandenburg"}, {line: "RE1", dir: "Potsdam"}],[{line: "RE2", dir: "Wismar"}, {line: "RE2", dir: "Bad Kleinen"}, {line: "RE2", dir: "Schwerin"}, {line: "RE2", dir: "Wittenberge"}], [{line: "RE7", dir: "Dessau"}, {line: "RE7", dir: "Bad Belzig"}], [{line: "RB14", dir: "Nauen"}], [{line: "RE1", dir: "Cottbus"}, {line: "RE1", dir: "Eisenhüttenstadt"}, {line: "RE1", dir: "Frankfurt"}], [{line: "RE2", dir: "Cottbus"}], [{line: "RE7", dir: "Wünsdorf-Waldstadt"}, {line: "RE7", dir: "Schönefeld"}], [{line: "RB14", dir: "Schönefeld"}], this.getStation(this.S3, 'GWD', 'SPA', 'SRW', 'PIC', 'OLS', 'HST', 'MS', 'WKS', 'CHS', 'SAP', 'ZOS', 'TGN', 'BEV', 'HBF', 'FST', 'HKM'), this.getStation(this.S5, 'GWD', 'OLS', 'HST', 'MS', 'WKS', 'CHS', 'SAP', 'ZOS', 'TGN', 'BEV', 'HBF', 'FST', 'HKM'), this.getStation(this.S7, 'PDH', 'BAB', 'GRI', 'WSS', 'NIS', 'GWD', 'WKS', 'CHS','SAP','ZOS','TGN','BEV','HBF','FST','HKM'), this.getStation(this.S9, 'GWD', 'SPA', 'SRW', 'PIC', 'OLS', 'HST', 'MS', 'WKS', 'CHS', 'SAP', 'ZOS', 'TGN', 'BEV', 'HBF', 'FST', 'HKM'), this.getStation(this.S3,'E','WIG','RD','FRH','HIG','KPK','WHH','KLH','RB','RH','OKS','WRS','OSB','JB'), this.getStation(this.S5,'STN','STR','HGM','STV','PEN','FD','NG','HPG','BIS','MDF','KAD','WT','BDF','FFO','LI','NPL','OKS','WRS','OSB','JB'), this.getStation(this.S7,'AF','MEA','RW','MAZ','POE','SPH','FFO','LI','NPL','OKS','WRS','OSB','JB'), this.getStation(this.S9,'LI','NPL','OKS','GAS','FLH','GBA','AGL','ADL','SCF','SW','BMW','PWA','TP','WRS','OSB','JB')], [this.getStation(this.U2,'PA','VIN','Sh','EB','Sz','Lu'), this.getStation(this.U2,'Fpo','Hz','Sno','Au','Rl','Sd','Nd','Th','Kd','So','Bmo','Obi','RP','Zo','Wt','No','BS','Gu','MB','Pd','MH','Mi','Hv','Sp','Mk','Ko')], [[this.U5.NULL]], [this.getStation(this.U8,'WIU','RR','KB','LD','RE','FN','Olu','Pk','Gb','Vo','B','Ro','W'), this.getStation(this.U8,'HMS','L','Bo','Hpo','ST','Kbu','Mr','He','Jb')], [[{line: "M48", dir: "Busseallee"}, {line: "M48", dir: "Zehlendorf Eiche"}, {line: "M48", dir: "Rathaus Steglitz"}, {line: "M48", dir: "Potsdamer Platz"}], [{line: "TXL", dir: "Flughafen Tegel"}], [{line: "100", dir: "Zoologischer Garten"}], [{line: "200", dir: "Zoologischer Garten"}, {line: "200", dir: "Unter den Linden/Friedrichstr"}], [{line: "N5", dir: "Hackescher Markt"}]], [[{line: "M2", dir: null}]], [[{line: "M4", dir: "Hackescher Markt"}], [{line: "M5", dir: "Hauptbahnhof"}, {line: "M5", dir: "Hackescher Markt"}], [{line: "M6", dir: "Hackescher Markt"}], [{line: "M4", dir: "Falkenberg"}, {line: "M4", dir: "Zingster Str"}, {line: "M4", dir: "Sulzfelder Str"}], [{line: "M5", dir: "Zingster Str"}], [{line: "M6", dir: "Riesaer Str"}, {line: "M6", dir: "Betriebshof Marzahn"}, {line: "M6", dir: "Marzahn"}]], [[{line: "248", dir: "Warschauer Str"}, {line: "248", dir: "Ostbahnhof"}]], [[{line: "248", dir: "Breitenbachplatz"}, {line: "248", dir: "Südkreuz"}, {line: "Hallesches Tor"}]], [[{line: "TXL", dir: "Flughafen Tegel"}], [{line: "100", dir: "Zoologischer Garten"}], [{line: "200", dir: "Zoologischer Garten"}, {line: "200", dir: "Unter den Linden/Friedrichstr"}], [{line: "N2", dir: "Zoologischer Garten"}], [{line: "N5", dir: "Hackescher Markt"}], [{line: "N42", dir: "Theodor-Heuss-Platz"}], [{line: "TXL", dir: "Memhardstr"}], [{line: "200", dir: "Michelangelostr"}]], [[{line: "M4", dir: "Hackescher Markt"}], [{line: "M5", dir: "Hauptbahnhof"}, {line: "M5", dir: "Hackescher Markt"}], [{line: "M6", dir: "Hackescher Markt"}], [{line: "M4", dir: "Falkenberg"}, {line: "M4", dir: "Zingster Str"}, {line: "M4", dir: "Sulzfelder Str"}], [{line: "M5", dir: "Zingster Str"}], [{line: "M6", dir: "Riesaer Str"}, {line: "M6", dir: "Betriebshof Marzahn"}, {line: "M6", dir: "Marzahn"}]], [[{line: "N5", dir: "Hackescher Markt"}], [{line: "N5", dir: "Riesaer Str"}, {line: "N5", dir: "Wuhletal"}], [{line: "N65", dir: "Müggelschlößchenweg"}, {line: "N65", dir: "Schöneweide"}]], [[{line: "M2", dir: "Alexanderplatz"}], [{line: "M2", dir: "Heinersdorf"}, {line: "M2", dir: "Am Steinberg"}], [{line: "N65", dir: "Hackescher Markt"}]]];
          break;
        case "BBEU":
          this.stop = [900000020202];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S46,'GB','WED','WH'), [this.S42], this.getStation(this.S46,'KW','WI','ZTH','EIW','GAS','ADL','SCF','SW','BMW','KHD','NK','HER','THF','SKR','SGR','IP','BUP','HEI','HO','HAL','WKRR','MN','WES','JUN'), [{ line: "TXL", dir: "Flughafen Tegel" }], [{ line: "106", dir: "Seestr" }], [{ line: "123", dir: "Goebelplatz" }, { line: "123", dir: "Mäckeritzwiesen" }], [{ line: "N26", dir: "Seestr" }], [{ line: "TXL", dir: "Alexanderplatz" }, { line: "TXL", dir: "Hauptbahnhof" }], [{ line: "106", dir: "Lindenhof" }, { line: "106", dir: "Südkreuz" }, { line: "106", dir: "Kurfürstenstr" }], [{ line: "123", dir: "Hauptbahnhof" }], [{ line: "N26", dir: "Zoologischer Garten" }]]];
          break;
        case "BBUP":
          this.stop = [900000044202];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S46,'GB','WED','WH','BEU','JUN','WES','MN','WKRR','HAL','HO','HEI'), [this.S42], this.getStation(this.S46,'KW','WI','ZTH','EIW','GAS','ADL','SCF','SW','BMW','KHD','NK','HER','THF','SKR','SGR','IP'), this.getStation(this.U9,'Olo','Np','Lpu','Am','WF','Bi','Tm','Ha','Zu','Kfu','Snu','Gt','Beo'), this.getStation(this.U9,'Rzu','Sl','Wsg','Fw'), [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Südkreuz" }], [{ line: "N9", dir: "Osloer Str" }, { line: "N9", dir: "Zoologischer Garten" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "N9", dir: "Steglitz" }]]];
          break;
        case "BFA":
          this.stop = [900000120001];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S8,'ZTH','EIW','GAS','ADL','SCF','SW','BMW','PWA','TP','OK'), this.getStation(this.S85,'GAS','ADL','SCF','SW','BMW','PWA','TP','OK'), [this.S42], this.getStation(this.S8,'BIW','HN','BFE','SNF','MM','BLB','PHD','PKW','BOS','SAL','PLA','GSS','LST','STO'), this.getStation(this.S85,'NB','HUM','GB','PKW','BOS','SAL','PLA','GSS','LST','STO'), this.getStation(this.U5,'Hö','LL','HD','C','GK','KL','Wh','E','Bü','Tk','Fi','Li','Md'), this.getStation(this.U5,'Al','Si','Sr','WR','FT','Sa'), [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Björnsonstr" }, { line: "M13", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "M13", dir: "Degnerstr" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "M13", dir: "S Warschauer Str" }, { line: "M13", dir: "Scharnweberstr./Weichselstr." }], [{ line: "16", dir: "Scharnweberstr./Weichselstr." }], [{ line: "N5", dir: "Riesaer Str" }, { line: "N5", dir: "Wuhletal" }], [{ line: "N5", dir: "Hackescher Markt" }]]];
          break;
        case "BGB":
          this.stop = [900000007102];
          this.neighboring = false;
          this.filter = [[[{ line: "RE3", dir: "Schwedt" }, { line: "RE3", dir: "Stralsund" }, { line: "RE3", dir: "Prenzlau" }, { line: "RE3", dir: "Angermünde" }, { line: "RE3", dir: "Eberswalde" }], [{ line: "RE5", dir: "Rostock" }, { line: "RE5", dir: "Stralsund" }], [{ line: "RB54", dir: "Rheinsberg" }], [{ line: "RE66", dir: null }], [{ line: "RB27", dir: null }], [{ line: "RE3", dir: "Wittenberg" }, { line: "RE3", dir: "Falkenberg" }, { line: "RE3", dir: "Halle" }], [{ line: "RE5", dir: "Elsterwerda" }, { line: "RE5", dir: "Wünsdorf" }], [{ line: "RE6", dir: null }], [{ line: "RB54", dir: "Lichtenberg" }], this.getStation(this.S1,'ORB','LEN','BOR','BIW','HN','FOH','HED','WAI','WIN','WM','SNH','WOK','BOS'), this.getStation(this.S2,'BER','BRF','ZEP','RGT','BU','KRW','BLB','PHD','PKW','BOS'), this.getStation(this.S25,'HD','HLS','SZF','TG','EBD','KBO','ARF','SNH','WOK','BOS'), this.getStation(this.S26,'WAI','WIN','WM','SNH','WOK','BOS'), [this.S41], this.getStation(this.S85,'GAS','ADL','SCF','SW','BMW','PWA','TP','OK','FA','STO','LST','GSS','PLA','SAL'), this.getStation(this.S1,'PDH','BAB','GRI','WSS','NIW','SLS','MEX','ZD','SDG','LWE','BGT','RST','FB','FRU','SGV','JLB','YOR','AHU','POP','TOR','FSTT','ORS','NB','HUM'), this.getStation(this.S2,'BFD','MAH','LRD','SC','BCH','MF','ATS','PRS','SKV','YOR','AHU','POP','TOR','FSTT','ORS','NB','HUM'), this.getStation(this.S25,'TLS','LIS','OSS','LIO','LAK','SDE','PRS','SKV','YOR','AHU','POP','TOR','FSTT','ORS','NB','HUM'), this.getStation(this.S26,'TLS','LIS','OSS','LIO','LAK','SDE','PRS','SKV','YOR','AHU','POP','TOR','FSTT','ORS','NB','HUM'), [this.S42], [this.S46.NULL], this.getStation(this.S85,'NB','HUM'), this.getStation(this.U8,'WIU','RR','KB','LD','PB','RE','FN','Olu','Pk'), this.getStation(this.U8,'HMS','L','Bo','Hpo','ST','Kbu','Mr','He','Jb','Ap','W','Ro','B','Vo'), [{ line: "247", dir: "Leopoldplatz" }], [{ line: "N8", dir: "Wilhelmsruher Damm" }, { line: "N8", dir: "Osloer Str" }], [{ line: "247", dir: "Nordbahnhof" }, { line: "247", dir: "Bernauer Str" }], [{ line: "N8", dir: "Hermannstr" }, { line: "N8", dir: "Hermannplatz" }]]];
          break;
        case "BGSS":
          this.stop = [900000110003];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S8,'ZTH','EIW','GAS','ADL','SCF','SW','BMW','PWA','TP','OK','FA','STO','LST'), this.getStation(this.S85,'GAS','ADL','SCF','SW','BMW','PWA','TP','OK','FA','STO','LST'), [this.S42], this.getStation(this.S8,'BIW','HN','BFE','SNF','MM','BLB','PHD','PKW','BOS','SAL','PLA'), this.getStation(this.S85,'NB','HUM','GB','PKW','BOS','SAL','PLA'), [{ line: "M4", dir: "Falkenberg" }, { line: "M4", dir: "Zingster Str" }, { line: "M4", dir: "Sulzfelder Str" }], [{ line: "M4", dir: "Hackescher Markt" }]]];
          break;
        case "BHKM":
          this.stop = [900000100002];
          this.neighboring = false;
          this.filter = [[this.getStation(this.S3,'GWD','SPA','SRW','PIC','OLS','HST','MS','WKS','CHS','SAP','ZOS','TGN','BEV','HBF','FST'), this.getStation(this.S5,'GWD','OLS','HST','MS','WKS','CHS','SAP','ZOS','TGN','BEV','HBF','FST'), this.getStation(this.S7,'PDH','BAB','WSS','NIS','GWD','WKS','CHS','SAP','ZOS','TGN','BEV','HBF','FST'), this.getStation(this.S9,'GWD','SPA','SRW','PIC','OLS','HST','MS','WKS','CHS','SAP','ZOS','TGN','BEV','HBF','FST'), this.getStation(this.S3,'E','WIG','RD','FRH','HIG','KPK','WHH','KLH','RB','RH','OKS','WRS','OSB','JB','ALX'), this.getStation(this.S5,'STN','STR','HGM','STV','PEN','FD','NG','HPG','BIS','MDF','KAD','WT','BDF','FFO','LI','NPL','OKS','WRS','OSB','JB','ALX'), this.getStation(this.S7,'AF','MEA','RW','MAZ','POE','SPH','FFO','LI','NPL','OKS','WRS','OSB','JB','ALX'), this.getStation(this.S9,'LI','NPL','OKS','GAS','FLH','GBA','AGL','ADL','SCF','SW','BMW','PWA','TP','WRS','OSB','JB','ALX'), [{line: "M1", dir: "Rosenthal Nord"}, {line: "M1", dir: "Schillerstr"}], [{line: "M1", dir: "Am Kupfergraben"}], [{line: "M4", dir: null}], [{line: "M5", dir: "Zingster Str"}, {line: "M5", dir: "Petersburger Str"}], [{line: "M6", dir: null}], [{line: "M5", dir: "Hauptbahnhof"}], [{line: "N2", dir: "Pankow"}], [{line: "N8", dir: "Wilhelmsruher Damm"}, {line: "N8", dir: "Osloer Str"}], [{line: "N40", dir: "Turmstr"}], [{line: "N42", dir: "Alexanderplatz"}], [{line: "N2", dir: "Ruhleben"}, {line: "N2", dir: "Zoologischer Garten"}], [{line: "N5", dir: "Riesaer Str"}, {line: "N5", dir: "Wuhletal"}], [{line: "N8", dir: "Hermannstr"}, {line: "N8", dir: "Hermannplatz"}], [{line: "N40", dir: "Wühlischplatz"}], [{line: "N42", dir: "Theodor-Heuss-Platz"}], [{line: "N65", dir: "Müggelschlößchenweg"}, {line: "N65", dir: "Schöneweide"}]]];
          break;
        case "BHAL":
          this.stop = [900000040101];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S46,'GB','WED','WH','BEU','JUN','WES','MN','WKRR'), [this.S42], this.getStation(this.S46,'KW','WI','ZTH','EIW','GAS','ADL','SCF','SW','BMW','KHD','NK','HER','THF','SKR','SGR','IP','BUP','HEI','HO'), [{ line: "M19", dir: "Grunewald" }, { line: "M19", dir: "Hagenplatz" }, { line: "M19", dir: "Rathenauplatz" }], [{ line: "M29", dir: "Roseneck" }, { line: "M29", dir: "Rathenauplatz" }], [{ line: "X10", dir: "Teltow" }, { line: "X10", dir: "Andr&#233;ezeile" }], [{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }, { line: "104", dir: "Rathenauplatz" }], [{ line: "N42", dir: "Theodor-Heuss-Platz" }], [{ line: "M19", dir: "Mehringdamm" }], [{ line: "M29", dir: "Hermannplatz" }], [{ line: "X10", dir: "Zoologischer Garten" }], [{ line: "104", dir: "Tunnelstr" }, { line: "104", dir: "Treptower Park" }], [{ line: "N42", dir: "Alexanderplatz" }]]];
          break;
        case "BHEI":
          this.stop = [900000045102];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S46,'GB','WED','WH','BEU','JUN','WES','MN','WKRR','HAL','HO'), [this.S42], this.getStation(this.S46,'KW','WI','ZTH','EIW','GAS','ADL','SCF','SW','BMW','KHD','NK','HER','THF','SKR','SGR','IP','BUP'), this.getStation(this.U3,'WA','S','Gr','Kbo','Pr','Ho','Mo','Go','Kus','N','Wt','Au','Sno','Hz','Fpo'), this.getStation(this.U3,'K','Ot','Os','T','Dd','Po','Bt','Rd'), [{ line: "249", dir: "Roseneck" }], [{ line: "310", dir: "Wilmersdorfer Str" }], [{ line: "N3", dir: "Mexikoplatz" }], [{ line: "249", dir: "Zoologischer Garten" }], [{ line: "310", dir: "Blissestr" }], [{ line: "N3", dir: "Wittenbergplatz" }]]];
          break;
        case "BHER":
          this.stop = [900000079221, 900000079220];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S45,'SKR','THF'), this.getStation(this.S46,'GB','WED','WH','BEU','JUN','WES','MN','WKRR','HAL','HO','HEI','BUP','IP','SGR','SKR','THF'), [this.S42], this.getStation(this.S45,'FLH','GBA','AGL','GAS','ADL','SCF','SW','BMW','KHD','NK'), this.getStation(this.S46,'KW','WI','ZTH','EIW','GAS','ADL','SCF','SW','BMW','KHD','NK'), [this.S47.NULL], [this.U8.NULL], [{ line: "377", dir: "Plänterwald" }], [{ line: "N8", dir: null }], [{ line: "N79", dir: "Plänterwald" }], [{ line: "M44", dir: null }], [{ line: "246", dir: null }], [{ line: "277", dir: null }], [{ line: "370", dir: "Neuköllnische Brücke" }], [{ line: "377", dir: "Kranoldstr" }], [{ line: "N79", dir: "Alt-Mariendorf" }]], [[{ line: "246", dir: "Friedrich-Wilhelm-Platz" }, { line: "246", dir: "Alt-Tempelhof" }], [{ line: "370", dir: "Neuköllnische Brücke" }]]];
          break;
        case "BHO":
          this.stop = [900000044101];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S46,'GB','WED','WH','BEU','JUN','WES','MN','WKRR','HAL'), [this.S42], this.getStation(this.S46,'KW','WI','ZTH','EIW','GAS','ADL','SCF','SW','BMW','KHD','NK','HER','THF','SKR','SGR','IP','BUP','HEI'), [{ line: "115", dir: "Spanische Allee/Potsdamer Ch" }, { line: "115", dir: "Neuruppiner Str" }, { line: "115", dir: "Roseneck" }], [{ line: "N3", dir: "Mexikoplatz" }], [{ line: "N10", dir: "Sachtlebenstr" }], [{ line: "115", dir: "Fehrbelliner Platz" }], [{ line: "N3", dir: "Wittenbergplatz" }], [{ line: "N10", dir: "Zoologischer Garten" }]]];
          break;
        case "BIP":
          this.stop = [900000054105];
          this.neighboring = false;
          this.filter = [[[this.S41], this.getStation(this.S46,'GB','WED','WH','BEU','JUN','WES','MN','WKRR','HAL','HO','HEI','BUP'), [this.S42], this.getStation(this.S46,'KW','WI','ZTH','EIW','GAS','ADL','SCF','SW','BMW','KHD','NK','HER','THF','SKR','SGR'), [this.U4.NULL], [{ line: "M48", dir: "Alexanderplatz" }, { line: "M48", dir: "Mohrenstr" }], [{ line: "M85", dir: "Hauptbahnhof" }, { line: "M85", dir: "Potsdamer Platz" }], [{ line: "187", dir: "Turmstr" }, { line: "187", dir: "Kurfürstenstr" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Hallesches Tor" }, { line: "248", dir: "Südkreuz" }], [{ line: "M48", dir: "Busseallee" }, { line: "M48", dir: "Zehlendorf Eiche" }, { line: "M48", dir: "Rathaus Steglitz" }], [{ line: "M85", dir: "Lichterfelde Süd" }, { line: "M85", dir: "Rathaus Steglitz" }], [{ line: "187", dir: "Halbauer Weg" }, { line: "187", dir: "Lankwitz Kirche" }, { line: "187", dir: "Insulaner" }], [{ line: "248", dir: "Breitenbachplatz" }]]];
          break;
        case "BJB":
          this.stop = [900000100004];
          this.neighboring = false;
          this.filter = [[[this.S3.GWD, this.S3.SPA, this.S3.SRW, this.S3.PIC, this.S3.OLS, this.S3.HST, this.S3.MS, this.S3.WKS, this.S3.CHS, this.S3.SAP, this.S3.ZOS, this.S3.TGN, this.S3.BEV, this.S3.HBF, this.S3.FST, this.S3.HKM, this.S3.ALX], [this.S5.GWD, this.S5.OLS, this.S5.HST, this.S5.MS, this.S5.WKS, this.S5.CHS, this.S5.SAP, this.S5.ZOS, this.S5.TGN, this.S5.BEV, this.S5.HBF, this.S5.FST, this.S5.HKM, this.S5.ALX], [this.S7.PDH, this.S7.BAB, this.S7.GRI, this.S7.WSS, this.S7.NIS, this.S7.GWD, this.S7.WKS, this.S7.CHS, this.S7.SAP, this.S7.ZOS, this.S7.TGN, this.S7.BEV, this.S7.HBF, this.S7.FST, this.S7.HKM, this.S7.ALX], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS, this.S9.WKS, this.S9.CHS, this.S9.SAP, this.S9.ZOS, this.S9.TGN, this.S9.BEV, this.S9.HBF, this.S9.FST, this.S9.HKM, this.S9.ALX], [this.S3.E, this.S3.WIG, this.S3.RD, this.S3.FRH, this.S3.HIG, this.S3.KPK, this.S3.WHH, this.S3.KLH, this.S3.RB, this.S3.RH, this.S3.OKS, this.S3.WRS, this.S3.OSB], [this.S5.STN, this.S5.STR, this.S5.HGM, this.S5.STV, this.S5.PEN, this.S5.FD, this.S5.NG, this.S5.HPG, this.S5.BIS, this.S5.MDF, this.S5.KAD, this.S5.WT, this.S5.BDF, this.S5.FFO, this.S5.LI, this.S5.NPL, this.S5.OKS, this.S5.WRS, this.S5.OSB], [this.S7.AF, this.S7.MEA, this.S7.RW, this.S7.MAZ, this.S7.POE, this.S7.SPH, this.S7.FFO, this.S7.LI, this.S7.NPL, this.S7.OKS, this.S7.WRS, this.S7.OSB], [this.S9.LI, this.S9.NPL, this.S9.OKS, this.S9.GAS, this.S9.FLH, this.S9.GBA, this.S9.AGL, this.S9.ADL, this.S9.SCF, this.S9.SW, this.S9.BMW, this.S9.PWA, this.S9.TP, this.S9.WRS, this.S9.OSB], [this.U8.WIU, this.U8.RR, this.U8.KB, this.U8.LD, this.U8.PB, this.U8.RE, this.U8.FN, this.U8.Olu, this.U8.Pk, this.U8.Gb, this.U8.Vo, this.U8.B, this.U8.Ro, this.U8.W, this.U8.Ap], [this.U8.HMS, this.U8.L, this.U8.Bo, this.U8.Hpo, this.U8.ST, this.U8.Kbu, this.U8.Mr, this.U8.He], [{line: "248", dir: "Breitenbachplatz"}, {line: "248", dir: "Südkreuz"}, {line: "248", dir: "Hallesches Tor"}, {line: "248", dir: "Alexanderplatz"}], [{line: "N40", dir: "Turmstr"}], [{line: "248", dir: "Warschauer Str"}, {line: "248", dir: "Ostbahnhof"}], [{line: "N40", dir: "Wühlischplatz"}], [{line: "N8", dir: "Wilhelmsruher Damm"}, {line: "N8", dir: "Osloer Str"}], [{line: "N65", dir: "Hackescher Markt"}], [{line: "N8", dir: "Hermannstr"}, {line: "N8", dir: "Hermannplatz"}], [{line: "N65", dir: "Müggelschlößchenweg"}, {line: "N65", dir: "Schöneweide"}]]];
          break;
        case "BJUN":
          this.stop = [900000020201, 900000020207];
          this.neighboring = false;
          this.filter = [[[{ line: "RE4", dir: "Stendal" }, { line: "RE4", dir: "Rathenow" }], [{ line: "RE6", dir: "Wittenberge" }, { line: "RE6", dir: "Neuruppin" }], [{ line: "RB10", dir: "Nauen" }], [{ line: "RB13", dir: "Wustermark" }], [{ line: "RE4", dir: "Jüterbog" }, { line: "RE4", dir: "Luckenwalde" }, { line: "RE4", dir: "Ludwigsfelde" }], [{ line: "RE6", dir: "Gesundbrunnen" }], [{ line: "RB10", dir: "Südkreuz" }], [this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN, this.S46.WES], [this.U7.R, this.U7.Zd, this.U7.Wk, this.U7.La, this.U7.Jt, this.U7.Br, this.U7.Pi, this.U7.Bl, this.U7.Gz, this.U7.Nk, this.U7.KM, this.U7.Rk, this.U7.Hpu, this.U7.Sü, this.U7.Gs, this.U7.Me, this.U7.Mu, this.U7.Y, this.U7.Kt, this.U7.Ei, this.U7.Bpu, this.U7.Beu, this.U7.Bli, this.U7.Ad, this.U7.Wd, this.U7.Bmu, this.U7.Rw, this.U7.Mp], [this.U7.RSp, this.U7.AS, this.U7.Zi, this.U7.Hs, this.U7.P, this.U7.Rm, this.U7.Sie, this.U7.Hl, this.U7.JK], [{ line: "M21", dir: "Uhlandstr" }], [{ line: "M21", dir: "Goerdelersteg" }], [{ line: "M27", dir: "Pankow" }], [{ line: "X9", dir: "Zoologischer Garten" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "M27", dir: "Jungfernheide" }], [{ line: "N7", dir: "Rathaus Spandau" }]], [[{ line: "M27", dir: "Jungfernheide" }], [{ line: "X9", dir: "Flughafen Tegel" }], [{ line: "109", dir: "Flughafen Tegel" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "109", dir: "Zoologischer Garten" }]]];
          break;
        case "BLST":
          this.stop = [900000110004];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA, this.S8.TP, this.S8.OK, this.S8.FA, this.S8.STO], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA, this.S85.TP, this.S85.OK, this.S85.FA, this.S85.STO], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS], [{ line: "M5", dir: "Hauptbahnhof" }, { line: "M5", dir: "Hackescher Markt" }, { line: "M5", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M6", dir: "Hackescher Markt" }, { line: "M6", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M8", dir: "Hauptbahnhof" }, { line: "M8", dir: "Landsberger Allee/Petersburger Str" }], [{ line: "M5", dir: "Zingster Str" }], [{ line: "M6", dir: "Riesaer Str" }, { line: "M6", dir: "Betriebshof Marzahn" }, { line: "M6", dir: "S Marzahn" }], [{ line: "M8", dir: "Ahrensfelde/Stadtgrenze" }, { line: "M8", dir: "Betriebshof Marzahn" }], [{ line: "156", dir: "Stadion Buschallee/Hansastr" }, { line: "156", dir: "Große Seestr." }, { line: "156", dir: "Pasedagplatz" }]]];
          break;
        case "BMN":
          this.stop = [900000024106,900000026204,900000026202];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR], [{ line: "M49", dir: "Nennhauser Damm" }, { line: "M49", dir: "Reimerweg" }, { line: "M49", dir: "Gatower Str" }], [{ line: "X34", dir: "Hottengrund" }, { line: "X34", dir: "Gutsstr" }, { line: "X34", dir: "Gatower Str" }], [{ line: "X49", dir: "Hahneberg" }, { line: "X49", dir: "Spektefeld" }, { line: "X49", dir: "Gatower Str" }], [{ line: "139", dir: "Werderstr" }], [{ line: "218", dir: "Pfaueninsel" }], [{ line: "M49", dir: "Zoologischer Garten" }, { line: "M49", dir: "Savignyplatz" }, { line: "M49", dir: "Wilmersdorfer Str" }], [{ line: "X34", dir: "Zoologischer Garten" }, { line: "X34", dir: "Savignyplatz" }, { line: "X34", dir: "Wilmersdorfer" }], [{ line: "X49", dir: "Wilmersdorfer" }]],[[{line: "139", dir: "Werderstr"}],[{line: "139", dir: "Messe Nord/ICC"}]],[[this.U2.Rl, this.U2.Sd, this.U2.Nd, this.U2.Th],[this.U2.PA, this.U2.VIN, this.U2.Sh, this.U2.EB, this.U2.Sz, this.U2.Lu, this.U2.A, this.U2.Ko, this.U2.Mk, this.U2.Sp, this.U2.Hv, this.U2.Mi, this.U2.MH, this.U2.Pd, this.U2.MB, this.U2.Gu, this.U2.BS, this.U2.No, this.U2.Wt, this.U2.Zo, this.U2.RP, this.U2.Obi, this.U2.Bmo, this.U2.So]]];
          break;
        case "BNK":
          this.stop = [900000078201, 900000078272, 900000078273, 900000078271];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S45.SKR, this.S45.THF, this.S45.HER], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP, this.S46.IP, this.S46.SGR, this.S46.SKR, this.S46.THF, this.S46.HER], [this.S47.HER], [this.S42], [this.S45.FLH, this.S45.GBA, this.S45.AGL, this.S45.GAS, this.S45.ADL, this.S45.SCF, this.S45.SW, this.S45.BMW, this.S45.KHD], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD], [this.S47.SPF, this.S47.OSP, this.S47.SW, this.S47.BMW, this.S47.KHD]], [[this.U7.R, this.U7.Zd, this.U7.Wk, this.U7.La, this.U7.Jt, this.U7.Br, this.U7.Pi, this.U7.Bl, this.U7.Gz], [this.U7.RSp, this.U7.AS, this.U7.Zi, this.U7.Hs, this.U7.P, this.U7.Rm, this.U7.Sie, this.U7.Hl, this.U7.JK, this.U7.Jh, this.U7.Mp, this.U7.Rw, this.U7.Bmu, this.U7.Wd, this.U7.Ad, this.U7.Kn, this.U7.Fpu, this.U7.Bli, this.U7.Beu, this.U7.Bpu, this.U7.Ei, this.U7.Kt, this.U7.Y, this.U7.Mu, this.U7.Me, this.U7.Gs, this.U7.Sü, this.U7.Hpu, this.U7.Rk, this.U7.KM]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "N79", dir: "Plänterwald" }]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N7", dir: "Schönefeld" }], [{ line: "370", dir: "Neuköllnische Brücke" }], [{ line: "377", dir: "Plänterwald" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N7", dir: "Rathaus Spandau" }], [{ line: "370", dir: "Hermannstr" }], [{ line: "377", dir: "Hermannstr" }]]];
          break;
        case "BOSB":
          this.stop = [900000120005];
          this.neighboring = false;
          this.filter = [[[{line: "RE1", dir: "Magdeburg"}, {line: "RE1", dir: "Brandenburg"}, {line: "Potsdam"}], [{line: "RE2", dir: "Wismar"}, {line: "RE2", dir: "Bad Kleinen"}, {line: "RE2", dir: "Schwerin"}, {line: "RE2", dir: "Wittenberge"}], [{line: "RE7", dir: "Dessau"}, {line: "RE7", dir: "Bad Belzig"}], [{line: "RB14", dir: "Nauen"}], [{line: "RE1", dir: "Cottbus"}, {line: "RE1", dir: "Eisenhüttenstadt"}, {line: "RE1", dir: "Frankfurt"}], [{line: "RE2", dir: "Cottbus"}], [{line: "RE7", dir: "Wünsdorf-Waldstadt"}, {line: "RE7", dir: "Schönefeld"}], [{line: "RB14", dir: "Schönefeld"}], [this.S3.GWD, this.S3.SPA, this.S3.SRW, this.S3.PIC, this.S3.OLS, this.S3.HST, this.S3.MS, this.S3.WKS, this.S3.CHS, this.S3.SAP, this.S3.ZOS, this.S3.TGN, this.S3.BEV, this.S3.HBF, this.S3.FST, this.S3.HKM, this.S3.ALX, this.S3.JB], [this.S5.GWD, this.S5.OLS, this.S5.HST, this.S5.MS, this.S5.WKS, this.S5.CHS, this.S5.SAP, this.S5.ZOS, this.S5.TGN, this.S5.BEV, this.S5.HBF, this.S5.FST, this.S5.HKM, this.S5.ALX, this.S5.JB], [this.S7.PDH, this.S7.BAB, this.S7.GRI, this.S7.WSS, this.S7.NIS, this.S7.GWD, this.S7.WKS, this.S7.CHS, this.S7.SAP, this.S7.ZOS, this.S7.TGN, this.S7.BEV, this.S7.HBF, this.S7.FST, this.S7.HKM, this.S7.ALX, this.S7.JB], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS, this.S9.WKS, this.S9.CHS, this.S9.SAP, this.S9.ZOS, this.S9.TGN, this.S9.BEV, this.S9.HBF, this.S9.FST, this.S9.HKM, this.S9.ALX, this.S9.JB], [this.S3.E, this.S3.WIG, this.S3.RD, this.S3.FRH, this.S3.HIG, this.S3.KPK, this.S3.WHH, this.S3.KLH, this.S3.RB, this.S3.RH, this.S3.OKS, this.S3.WRS], [this.S5.STN, this.S5.STR, this.S5.HGM, this.S5.STV, this.S5.PEN, this.S5.FD, this.S5.NG, this.S5.HPG, this.S5.BIS, this.S5.MDF, this.S5.KAD, this.S5.WT, this.S5.BDF, this.S5.FFO, this.S5.LI, this.S5.NPL, this.S5.OKS, this.S5.WRS], [this.S7.AF, this.S7.MEA, this.S7.RW, this.S7.MAZ, this.S7.POE, this.S7.SPH, this.S7.FFO, this.S7.LI, this.S7.NPL, this.S7.OKS, this.S7.WRS], [this.S75.NULL], [this.S9.LI, this.S9.NPL, this.S9.OKS, this.S9.GAS, this.S9.FLH, this.S9.GBA, this.S9.AGL, this.S9.ADL, this.S9.SCF, this.S9.SW, this.S9.BMW, this.S9.PWA, this.S9.TP, this.S9.WRS], [{line: "142", dir: "Leopoldplatz"}, {line: "142", dir: "Hauptbahnhof"}], [{line: "248", dir: "Breitenbachplatz"}, {line: "248", dir: "Südkreuz"}, {line: "248", dir: "Hallesches Tor"}, {line: "248", dir: "Alexanderplatz"}], [{line: "N40", dir: "Turmstr"}], [{line: "147", dir: "Hauptbahnhof"}, {line: "147", dir: "Unter den Linden/Friedrichstr"}, {line: "147", dir: "Märkisches Museum"}], [{line: "240", dir: "Storkower Str"}, {line: "240", dir: "Betriebshof Lichtenberg"}], [{line: "248", dir: "Warschauer Str"}], [{line: "347", dir: "Tunnelstr"}, {line: "347", dir: "Warschauer Str"}], [{line: "N40", dir: "Wühlischplatz"}]]];
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
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA, this.S8.TP, this.S8.OK, this.S8.FA, this.S8.STO, this.S8.LST, this.S8.GSS, this.S8.PLA], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA, this.S85.TP, this.S85.OK, this.S85.FA, this.S85.STO, this.S85.LST, this.S85.GSS, this.S85.PLA], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS], [this.U2.PA, this.U2.VIN], [this.U2.Fpo, this.U2.Hz, this.U2.Sno, this.U2.Au, this.U2.Rl, this.U2.Sd, this.U2.Nd, this.U2.Th, this.U2.Kd, this.U2.So, this.U2.Bmo, this.U2.Obi, this.U2.RP, this.U2.Zo, this.U2.Wt, this.U2.No, this.U2.BS, this.U2.Gu, this.U2.MB, this.U2.Pd, this.U2.MH, this.U2.Mi, this.U2.Hv, this.U2.Sp, this.U2.Mk, this.U2.Ko, this.U2.A, this.U2.Lu, this.U2.Sz, this.U2.EB], [{ line: "M1", dir: "Schillerstr" }, { line: "M1", dir: "Rosenthal Nord" }], [{ line: "M1", dir: "Am Kupfergraben" }, { line: "M1", dir: "Hackescher Markt" }]]];
          break;
        case "BSO":
          this.stop = [900000077106, 900000077110];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S42], [{ line: "M41", dir: "Hauptbahnhof" }, { line: "M41", dir: "Philharmonie" }, { line: "M41", dir: "Hallesches Tor" }, { line: "M41", dir: "Hermannplatz" }], [{ line: "171", dir: "Hermannplatz" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "M41", dir: "Sonnenallee/Baumschulenstr" }], [{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N79", dir: "Plänterwald" }]], [[{ line: "171", dir: "Schönefeld" }, { line: "171", dir: "Rudow" }], [{ line: "N79", dir: "Alt-Mariendorf" }], [{ line: "171", dir: "Hermannplatz" }, { line: "171", dir: "Sonnenallee" }], [{ line: "N79", dir: "Plänterwald" }]]];
          break;
        case "BSTO":
          this.stop = [900000110012, 900000160504];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.TP, this.S8.OK, this.S8.FA], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.TP, this.S85.OK, this.S85.FA], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS, this.S8.LST], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS, this.S85.LST], [{ line: "156", dir: "Stadion Buschallee" }, { line: "156", dir: "Große Seestr" }, { line: "156", dir: "Pasedagplatz" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }]],[[{line: "156", dir: "Stadion Buschallee"}, {line: "156", dir: "Große Seestr"}, {line: "156", dir: "Pasedagplatz"}],[{line: "156", dir: "Storkower Str"}]]];
          break;
        case "BSK":
          this.stop = [900000058101, 900000058100];
          this.neighboring = false;
          this.filter = [[[{ line: "RE3", dir: "Schwedt" }, { line: "RE3", dir: "Stralsund" }, { line: "RE3", dir: "Prenzlau" }, { line: "RE3", dir: "Angermünde" }, { line: "RE3", dir: "Eberswalde" }], [{ line: "RE4", dir: "Stendal" }, { line: "RE4", dir: "Rathenow" }], [{ line: "RE5", dir: "Rostock" }, { line: "RE5", dir: "Stralsund" }], [{ line: "RB10", dir: "Nauen" }], [{ line: "RE3", dir: "Wittenberg" }, { line: "RE3", dir: "Falkenberg" }, { line: "RE3", dir: "Halle" }], [{ line: "RE4", dir: "Jüterbog" }, { line: "RE4", dir: "Luckenwalde" }, { line: "RE4", dir: "Ludwigsfelde" }], [{ line: "RE5", dir: "Elsterwerda" }, { line: "RE5", dir: "Wünsdorf" }], [this.S2.BER, this.S2.BRF, this.S2.ZEP, this.S2.RGT, this.S2.BU, this.S2.KRW, this.S2.BLB, this.S2.PHD, this.S2.PKW, this.S2.BOS, this.S2.GB, this.S2.HUM, this.S2.NB, this.S2.ORS, this.S2.FSTT, this.S2.TOR, this.S2.POP, this.S2.AHU, this.S2.YOR], [this.S25.HD, this.S25.HLS, this.S25.SZF, this.S25.TG, this.S25.EBD, this.S25.KBO, this.S25.ARF, this.S25.SNH, this.S25.WOK, this.S25.BOS, this.S25.GB, this.S25.HUM, this.S25.NB, this.S25.ORS, this.S25.FSTT, this.S25.TOR, this.S25.POP, this.S25.AHU, this.S25.YOR], [this.S26.WAI, this.S26.WIN, this.S26.WM, this.S26.SNH, this.S26.WOK, this.S26.BOS, this.S26.GB, this.S26.HUM, this.S26.NB, this.S26.ORS, this.S26.FSTT, this.S26.TOR, this.S26.POP, this.S26.AHU, this.S26.YOR], [this.S2.BFD, this.S2.MAH, this.S2.LRD, this.S2.SC, this.S2.BCH, this.S2.MF, this.S2.ATS, this.S2.PRS], [this.S25.TLS, this.S25.LIS, this.S25.OSS, this.S25.LIO, this.S25.LAK, this.S25.SDE, this.S25.PRS], [this.S26.TLS, this.S26.LIS, this.S26.OSS, this.S26.LIO, this.S26.LAK, this.S26.SDE, this.S26.PRS], [this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP, this.S46.IP, this.S46.SGR], [this.S42], [this.S45.NULL], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF], [{ line: "M46", dir: "Zoologischer Garten" }, { line: "M46", dir: "Wittenbergplatz" }], [{ line: "106", dir: "Seestr" }, { line: "106", dir: "Kurfürstenstr" }], [{ line: "204", dir: "Zoologischer Garten" }], [{ line: "M46", dir: "Britz-Süd" }, { line: "M46", dir: "Alt-Tempelhof" }], [{ line: "106", dir: "Lindenhof" }],], [[{ line: "184", dir: "Reichartstr" }], [{ line: "248", dir: "Breitenbachplatz" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckstr" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "248", dir: "Warschauer Str" }, { line: "248", dir: "Ostbahnhof" }, { line: "248", dir: "Alexanderplatz" }, { line: "248", dir: "Hallesches Tor" }]]];
          break;
        case "BTHF":
          this.stop = [900000068201, 900000068272];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S45.SKR], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN, this.S46.WKRR, this.S46.HAL, this.S46.HO, this.S46.HEI, this.S46.BUP, this.S46.IP, this.S46.SGR, this.S46.SKR], [this.S42], [this.S45.GAS, this.S45.FLH, this.S45.GBA, this.S45.AGL, this.S45.ADL, this.S45.SCF, this.S45.SW, this.S45.BMW, this.S45.KHD, this.S45.NK, this.S45.HER], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER], [this.U6.Tg, this.U6.Bk, this.U6.Hh, this.U6.OTI, this.U6.Scha, this.U6.Sch, this.U6.Afr, this.U6.Rb, this.U6.Se, this.U6.Lpo, this.U6.We, this.U6.Ri, this.U6.SK, this.U6.NA, this.U6.Ob, this.U6.F, this.U6.Fr, this.U6.Mic, this.U6.Ks, this.U6.Hu, this.U6.Me, this.U6.PL, this.U6.Ps], [this.U6.Mf, this.U6.Wl, this.U6.Ull, this.U6.At], [{ line: "184", dir: "Südkreuz" }], [{ line: "N6", dir: "Alt-Tegel"}], [{ line: "140", dir: "Ostbahnhof" }, { line: "140", dir: "Mehringdamm" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckplatz" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "N6", dir: "Alt-Mariendorf" }], [{ line: "N84", dir: "Zehlendorf Eiche" }, { line: "N84", dir: "Alt-Tempelhof" }]], [[{ line: "184", dir: "Südkreuz" }, { line: "184", dir: "Tempelhof" }], [{ line: "N6", dir: "Alt-Tegel" }], [{ line: "184", dir: "Warthestr" }, { line: "184", dir: "Wismarer Str" }, { line: "184", dir: "Saaleckplatz" }, { line: "184", dir: "Lichterfelde Ost" }], [{ line: "N6", dir: "Alt-Mariendorf" }]]];
          break;
        case "BTP":
          this.stop = [900000190001, 900000190701, 900000190702, 900000190100];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S45.GAS, this.S45.FLH, this.S45.GBA, this.S45.AGL, this.S45.ADL, this.S45.SCF, this.S45.SW, this.S45.BMW, this.S45.PWA], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.PWA], [this.S47.SPF, this.S47.OSP, this.S47.SW, this.S47.BMW, this.S47.PWA], [this.S8.ZTH, this.S8.EIW, this.S8.GAS, this.S8.ADL, this.S8.SCF, this.S8.SW, this.S8.BMW, this.S8.PWA], [this.S85.GAS, this.S85.ADL, this.S85.SCF, this.S85.SW, this.S85.BMW, this.S85.PWA], [this.S9.GAS, this.S9.FLH, this.S9.GBA, this.S9.AGL, this.S9.ADL, this.S9.SCF, this.S9.SW, this.S9.BMW, this.S9.PWA], [this.S42], [this.S8.BIW, this.S8.HN, this.S8.BFE, this.S8.SNF, this.S8.MM, this.S8.BLB, this.S8.PHD, this.S8.PKW, this.S8.BOS, this.S8.SAL, this.S8.PLA, this.S8.GSS, this.S8.LST, this.S8.STO, this.S8.FA, this.S8.OK], [this.S85.NB, this.S85.HUM, this.S85.GB, this.S85.PKW, this.S85.BOS, this.S85.SAL, this.S85.PLA, this.S85.GSS, this.S85.LST, this.S85.STO, this.S85.FA, this.S85.OK], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS, this.S9.WKS, this.S9.CHS, this.S9.SAP, this.S9.ZOS, this.S9.TGN, this.S9.BEV, this.S9.HBF, this.S9.FST, this.S9.HKM, this.S9.ALX, this.S9.JB, this.S9.OSB, this.S9.WRS]], [[{ line: "165", dir: "Märkisches Museum" }, { line: "165", dir: "Treptower Park" }], [{ line: "166", dir: "Boddinstr" }, { line: "166", dir: "Treptower Park" }], [{ line: "265", dir: "Stadtmitte" }, { line: "265", dir: "Märkisches Museum" }, { line: "265", dir: "Schlesisches Tor" }, { line: "265", dir: "Treptower Park" }], [{ line: "N65", dir: "Hackescher Markt" }]], [[{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }, { line: "104", dir: "Berliner Str" }, { line: "104", dir: "Platz der Luftbrücke" }, { line: "104", dir: "Boddinstr" }], [{ line: "194", dir: "Hermannplatz" }], [{ line: "N94", dir: "Hermannplatz" }], [{ line: "104", dir: "Tunnelstr" }], [{ line: "194", dir: "Helene-Weigel-Platz" }, { line: "194", dir: "Friedrichsfelde Ost" }, { line: "194", dir: "Nöldnerplatz" }], [{ line: "N94", dir: "Magdalenenstr" }]], [[{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }, { line: "104", dir: "Berliner Str" }, { line: "104", dir: "Platz der Luftbrücke" }, { line: "104", dir: "Boddinstr" }], [{ line: "165", dir: "Müggelschlößchenweg" }, { line: "165", dir: "Schöneweide" }], [{ line: "166", dir: "Boddinstr" }], [{ line: "194", dir: "Hermannplatz" }], [{ line: "265", dir: "Schöneweide" }, { line: "265", dir: "Baumschulenstr" }], [{ line: "N65", dir: "Müggelschlößchenweg" }, { line: "N65", dir: "Schöneweide" }], [{ line: "N94", dir: "Hermannplatz" }], [{ line: "165", dir: "Märkisches Museum" }], [{ line: "265", dir: "Stadtmitte" }, { line: "265", dir: "Märkisches Museum" }, { line: "265", dir: "Schlesisches Tor" }], [{ line: "N65", dir: "Hackescher Markt" }]]];
          break;
        case "BWRS":
          this.stop = [900000120004, 900000120011, 900000120020, 900000120021];
          this.neighboring = false;
          this.filter = [[[this.S3.GWD, this.S3.SPA, this.S3.SRW, this.S3.PIC, this.S3.OLS, this.S3.HST, this.S3.MS, this.S3.WKS, this.S3.CHS, this.S3.SAP, this.S3.ZOS, this.S3.TGN, this.S3.BEV, this.S3.HBF, this.S3.FST, this.S3.HKM, this.S3.ALX, this.S3.JB, this.S3.OSB], [this.S5.GWD, this.S5.OLS, this.S5.MS, this.S5.WKS, this.S5.CHS, this.S5.SAP, this.S5.ZOS, this.S5.TGN, this.S5.BEV, this.S5.HBF, this.S5.FST, this.S5.HKM, this.S5.ALX, this.S5.JB, this.S5.OSB], [this.S7.PDH, this.S7.BAB, this.S7.GRI, this.S7.WSS, this.S7.NIS, this.S7.GWD, this.S7.WKS, this.S7.CHS, this.S7.SAP, this.S7.ZOS, this.S7.TGN, this.S7.BEV, this.S7.HBF, this.S7.FST, this.S7.HKM, this.S7.ALX, this.S7.JB, this.S7.OSB], [this.S75.OSB], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS, this.S9.WKS, this.S9.CHS, this.S9.SAP, this.S9.ZOS, this.S9.TGN, this.S9.BEV, this.S9.HBF, this.S9.FST, this.S9.HKM, this.S9.ALX, this.S9.JB, this.S9.OSB], [this.S3.E, this.S3.WIG, this.S3.RD, this.S3.FRH, this.S3.HIG, this.S3.KPK, this.S3.WHH, this.S3.KLH, this.S3.RB, this.S3.RH, this.S3.OKS], [this.S5.STN, this.S5.STR, this.S5.HGM, this.S5.STV, this.S5.PEN, this.S5.FD, this.S5.NG, this.S5.HPG, this.S5.BIS, this.S5.MDF, this.S5.KAD, this.S5.WT, this.S5.BDF, this.S5.FFO, this.S5.LI, this.S5.NPL, this.S5.OKS], [this.S7.AF, this.S7.MEA, this.S7.RW, this.S7.MAZ, this.S7.POE, this.S7.SPH, this.S7.FFO, this.S7.LI, this.S7.NPL, this.S7.OKS], [this.S75.WAB, this.S75.HH, this.S75.GSE, this.S75.SPH, this.S75.FFO, this.S75.LI, this.S75.NPL, this.S75.OKS], [this.S9.LI, this.S9.NPL, this.S9.OKS, this.S9.GAS, this.S9.FLH, this.S9.GBA, this.S9.AGL, this.S9.ADL, this.S9.SCF, this.S9.SW, this.S9.BMW, this.S9.PWA, this.S9.TP], [this.U1.NULL], [this.U3.NULL], [{line: "M10", dir: "Hauptbahnhof"}, {line: "M10", dir: "Friedrich-Ludwig-Jahn-Sportpark"}], [{line: "347", dir: "Ostbahnhof"}], [{line: "N1", dir: "Helsingforser Platz"}], [{line: "347", dir: "Tunnelstr"}], [{line: "N1", dir: "Zoologischer Garten"}], [{line: "248", dir: "Breitenbachplatz"}, {line: "248", dir: "Südkreuz"}, {line: "248", dir: "Hallesches Tor"}, {line: "248", dir: "Alexanderplatz"}, {line: "248", dir: "Ostbahnhof"}]], [[{line: "M10", dir: "Hauptbahnhof"}, {line: "M10", dir: "Friedrich-Ludwig-Jahn-Sportpark"}], [{line: "M10", dir: "Warschauer Str"}]], [[{line: "347", dir: "Ostbahnhof"}], [{line: "347", dir: "Tunnelstr"}], [{line: "N1", dir: "Zoologischer Garten"}]], [[{line: "M10", dir: "Hauptbahnhof"}, {line: "M10", dir: "Friedrich-Ludwig-Jahn-Sportpark"}], [{line: "M13", dir: "Virchow-Klinikum"}, {line: "M13", dir: "Degnerstr"}, {line: "M13", dir: "Betriebshof Lichtenberg"}]]];
          break;
        case "BWED":
          this.stop = [900000009104, 900000008103];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN, this.S46.WES, this.S46.JUN, this.S46.BEU, this.S46.WH], [this.U6.Tg, this.U6.Bk, this.U6.Hh, this.U6.OTI, this.U6.Scha, this.U6.Sch, this.U6.Afr, this.U6.Rb, this.U6.Se, this.U6.Lpo], [this.U6.Mf, this.U6.Wl, this.U6.Ull, this.U6.Ka, this.U6.At, this.U6.Ts, this.U6.Ps, this.U6.PL, this.U6.Me, this.U6.Ks, this.U6.Mic, this.U6.Fr, this.U6.F, this.U6.Ob, this.U6.NA, this.U6.SK, this.U6.Ri], [{ line: "120", dir: "Wilhelmsruher Damm" }, { line: "120", dir: "Wittenau" }, { line: "120", dir: "Paracelsus-Bad" }, { line: "120", dir: "Leopoldplatz" }], [{ line: "N6", dir: "Alt-Tegel" }], [{ line: "N20", dir: "Hainbuchenstr" }]], [[{ line: "M27", dir: "Jungfernheide" }], [{ line: "247", dir: "Leopoldplatz" }], [{ line: "M27", dir: "Pankow" }], [{ line: "247", dir: "Nordbahnhof" }, { line: "247", dir: "Bernauer Str" }]]];
          break;
        case "BWES":
          this.stop = [900000026207,900000020204];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN], [{ line: "M45", dir: "Johannesstift" }, { line: "M45", dir: "DRK-Kliniken Westend" }, { line: "M45", dir: "Rathaus Spandau" }], [{ line: "M45", dir: "Zoologischer Garten" }]],[[{line: "M45", dir: "Johannesstift"},{line: "M45", dir: "Rathaus Spandau"},{line: "M45", dir: "DRK-Kliniken Westend"}], [{line: "309", dir: "Schlosspark-Klinik"}],[{line: "M45", dir: "Zoologischer Garten"}], [{line: "309", dir: "Wilmersdorfer"}]]];
          break;
        case "BWH":
          this.stop = [900000001201];
          this.neighboring = false;
          this.filter = [[[this.S41], [this.S46.GB, this.S46.WED], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL, this.S46.WKRR, this.S46.MN, this.S46.WES, this.S46.JUN, this.S46.BEU], [this.U9.Olo, this.U9.Np, this.U9.Lpu, this.U9.Am], [this.U9.Rzu, this.U9.Sl, this.U9.Wsg, this.U9.Fw, this.U9.Bd, this.U9.Beo, this.U9.Gt, this.U9.Snu, this.U9.Kfu, this.U9.Zu, this.U9.Ha, this.U9.Tm, this.U9.Bi], [{ line: "N9", dir: "Osloer Str" }], [{ line: "N9", dir: "Rathaus Steglitz" }, { line: "N9", dir: "Zoologischer Garten" }]]];
          break;
        case "BWK":
          this.stop = [900000024102];
          this.neighboring = false;
          this.filter = [[[this.S3.GWD, this.S3.SPA, this.S3.SRW, this.S3.PIC, this.S3.OLS, this.S3.HST, this.S3.MS], [this.S5.GWD, this.S5.OLS, this.S5.HST, this.S5.MS], [this.S7.PDH, this.S7.BAB, this.S7.GRI, this.S7.WSS, this.S7.NIS, this.S7.GWD], [this.S9.GWD, this.S9.SPA, this.S9.SRW, this.S9.PIC, this.S9.OLS, this.S9.HST, this.S9.MS], [this.S3.E, this.S3.WIG, this.S3.RD, this.S3.FRH, this.S3.HIG, this.S3.KPK, this.S3.WHH, this.S3.KLH, this.S3.RB, this.S3.RH, this.S3.OKS, this.S3.WRS, this.S3.OSB, this.S3.JB, this.S3.ALX, this.S3.HKM, this.S3.FST, this.S3.HBF, this.S3.BEV, this.S3.TGN, this.S3.ZOS, this.S3.SAP, this.S3.CHS], [this.S5.STN, this.S5.STR, this.S5.HGM, this.S5.STV, this.S5.PEN, this.S5.FD, this.S5.NG, this.S5.HPG, this.S5.BIS, this.S5.MDF, this.S5.KAD, this.S5.WT, this.S5.BDF, this.S5.FFO, this.S5.LI, this.S5.NPL, this.S5.OKS, this.S5.WRS, this.S5.OSB, this.S5.JB, this.S5.ALX, this.S5.HKM, this.S5.FST, this.S5.HBF, this.S5.BEV, this.S5.TGN, this.S5.ZOS, this.S5.SAP, this.S5.CHS], [this.S7.AF, this.S7.MEA, this.S7.RW, this.S7.MAZ, this.S7.POE, this.S7.SPH, this.S7.FFO, this.S7.LI, this.S7.NPL, this.S7.OKS, this.S7.WRS, this.S7.OSB, this.S7.JB, this.S7.ALX, this.S7.HKM, this.S7.FST, this.S7.HBF, this.S7.BEV, this.S7.TGN, this.S7.ZOS, this.S7.SAP, this.S7.CHS], [this.S9.LI, this.S9.NPL, this.S9.OKS, this.S9.FLH, this.S9.GBA, this.S9.AGL, this.S9.GAS, this.S9.ADL, this.S9.SCF, this.S9.SW, this.S9.BMW, this.S9.PWA, this.S9.TP, this.S9.WRS, this.S9.OSB, this.S9.JB, this.S9.ALX, this.S9.HKM, this.S9.FST, this.S9.HBF, this.S9.BEV, this.S9.TGN, this.S9.ZOS, this.S9.SAP, this.S9.CHS], [this.S41], [this.S46.GB, this.S46.WED, this.S46.WH, this.S46.BEU, this.S46.JUN, this.S46.WES, this.S46.MN], [this.S42], [this.S46.KW, this.S46.WI, this.S46.ZTH, this.S46.EIW, this.S46.GAS, this.S46.ADL, this.S46.SCF, this.S46.SW, this.S46.BMW, this.S46.KHD, this.S46.NK, this.S46.HER, this.S46.THF, this.S46.SKR, this.S46.SGR, this.S46.IP, this.S46.BUP, this.S46.HEI, this.S46.HO, this.S46.HAL], [{ line: "104", dir: "Brixplatz" }, { line: "104", dir: "Theodor-Heuss-Platz" }], [{ line: "N42", dir: "Theodor-Heuss-Platz" }]]];
          break;
        case "jov":
          this.stop = [900000160541];
          this.neighboring = false;
          this.filter = [[[{ line: "240", dir: "Storkower Str" }], [{ line: "N50", dir: "Hugenottenplatz" }, { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "N50", dir: "Pankow" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }], [{ line: "N50", dir: "Tierpark" }, { line: "N50", dir: "Betriebshof Lichtenberg" }]]];
          break;
        case "bae":
          this.stop = [900000160509,900000160010,900000160710];
          this.neighboring = false;
          this.filter = [
            [[{ line: "M8", dir: "Hauptbahnhof" }, { line: "M8", dir: "Petersburger" }],
              [{ line: "M5", dir: "Petersburger" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M8", dir: "Ahrensfelde/Stadtgrenze" }, { line: "M8", dir: "Betriebshof Marzahn" }], [{ line: "21", dir: "Gudrunstr" }]],[[{line: "M13", dir: "Warschauer"},{line: "M13", dir: "Frankfurter"}], [{line: "16", dir: "Frankfurter"}], [{line: "N50", dir: "Hugenottenplatz"}, {line: "N50", dir: "Pankow"}, {line: "N50", dir: "Betriebshof Indira-Gandhi-Str"}], [{line: "M13", dir: "Virchow-Klinikum"}, {line: "M13", dir: "Degnerstr"}],[{line: "16", dir: "Ahrensfelde/Stadtgrenze"}],[{line: "N50", dir: "Tierpark"}, {line: "N50", dir: "Betriebshof Lichtenberg"}]],[[{line: "M8", dir: "Hauptbahnhof"}, {line: "M8", dir: "Petersburger"}], [{line: "M5", dir: "Petersburger"}]]];
          break;
        case "moe":
          this.stop = [900000160014];
          this.neighboring = false;
          this.filter = [[[{ line: "M13", dir: "Warschauer" }, { line: "M13", dir: "Frankfurter" }], [{ line: "16", dir: "Frankfurter" }], [{ line: "21", dir: "Schöneweide" }, { line: "21", dir: "Bersarinplatz" }, { line: "21", dir: "Treskowallee/Ehrlichstr" }], [{ line: "M13", dir: "Virchow-Klinikum" }, { line: "M13", dir: "Degnerstr" }, { line: "M13", dir: "Betriebshof Lichtenberg" }], [{ line: "16", dir: "Ahrensfelde/Stadtgrenze" }], [{ line: "21", dir: "Gudrunstr" }], [{ line: "240", dir: "Storkower Str" }], [{ line: "N50", dir: "Hugenottenplatz" }, { line: "N50", dir: "Betriebshof Indira-Gandhi-Str" }, { line: "N50", dir: "Pankow" }], [{ line: "240", dir: "Ostbahnhof" }, { line: "240", dir: "Betriebshof Lichtenberg" }], [{ line: "N50", dir: "Tierpark" }, { line: "N50", dir: "Betriebshof Lichtenberg" }]]];
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
    this.addU9();
  }
  addBLine(line, directions){
    let output = {};
    Object.keys(directions).forEach(direction => {
      output[direction] = {line: line, dir: directions[direction]};
    });
    return output;
  }
  addS1() {
    this.S1 = this.addBLine("S1", {PDH: "Potsdam", BAB: "Babelsberg", GRI: "Griebnitzsee", WSS: "Wannsee", NIW: "Nikolassee", SLS: "Schlachtensee", MEX: "Mexikoplatz", ZD: "Zehlendorf", SDG: "Sundgauer Str", LWE: "Lichterfelde West", BGT: "Botanischer Garten", RST: "Rathaus Steglitz", FB: "Feuerbachstr", FRU: "Friedenau", SGV: "Schöneberg", JLB: "Julius-Leber-Brücke", YOR: "Yorckstr", AHU: "Anhalter Bahnhof", POP: "Potsdamer Platz", TOR: "Brandenburger Tor", FSTT: "Friedrichstr", ORS: "Oranienburger Str", NB: "Nordbahnhof", HUM: "Humboldthain", GB: "Gesundbrunnen", BOS: "Bornholmer Str", WOK: "Wollankstr", SNH: "Schönholz", WM: "Wilhelmsruh", WIN: "Wittenau", WAI: "Waidmannslust", HED: "Hermsdorf", FOH: "Frohnau", HN: "Hohen Neuendorf", BIW: "Birkenwerder", BOR: "Borgsdorf", LEN: "Lehnitz", ORB: "Oranienburg", NULL: null});
  }
  addS2() {
    this.S2 = this.addBLine("S2", {BFD: "Blankenfelde", MAH: "Mahlow", LRD: "Lichtenrade", SC: "Schichauweg", BCH: "Buckower Chaussee", MF: "Marienfelde", ATS: "Attilastr", PRS: "Priesterweg", SKV: "Südkreuz", YOR: "Yorckstr", AHU: "Anhalter Bahnhof", POP: "Potsdamer Platz", TOR: "Brandenburger Tor", FSTT: "Friedrichstr", ORS: "Oranienburger Str", NB: "Nordbahnhof", HUM: "Humboldthain", GB: "Gesundbrunnen", BOS: "Bornholmer Str", PKW: "Pankow", PHD: "Pankow-Heinersdorf", BLB: "Blankenburg", KRW: "Karow", BU: "Buch", RGT: "Röntgental", ZEP: "Zepernick", BRF: "Bernau-Friedenstal", BER: "Bernau", NULL: null});
  }
  addS25() {
    this.S25 = this.addBLine("S25", {TLS: "Teltow Stadt", LIS: "Lichterfelde Süd", OSS: "Osdorfer Str", LIO: "Lichterfelde Ost", LAK: "Lankwitz", SDE: "Südende", PRS: "Priesterweg", SKV: "Südkreuz", YOR: "Yorckstr", AHU: "Anhalter Bahnhof", POP: "Potsdamer Platz", TOR: "Brandenburger Tor", FSTT: "Friedrichstr", ORS: "Oranienburger Str", NB: "Nordbahnhof", HUM: "Humboldthain", GB: "Gesundbrunnen", BOS: "Bornholmer Str", WOK: "Wollankstr", SNH: "Schönholz", ARF: "Alt-Reinickendorf", KBO: "Karl-Bonhoeffer-Nervenklinik", EBD: "Eichborndamm", TG: "Tegel", SZF: "Schulzendorf", HLS: "Heiligensee", HD: "Hennigsdorf", NULL: null});
  }
  addS26() {
    this.S26 = this.addBLine("S26", {TLS: "Teltow Stadt", LIS: "Lichterfelde Süd", OSS: "Osdorfer Str", LIO: "Lichterfelde Ost", LAK: "Lankwitz", SDE: "Südende", PRS: "Priesterweg", SKV: "Südkreuz", YOR: "Yorckstr", AHU: "Anhalter Bahnhof", POP: "Potsdamer Platz", TOR: "Brandenburger Tor", FSTT: "Friedrichstr", ORS: "Oranienburger Str", NB: "Nordbahnhof", HUM: "Humboldthain", GB: "Gesundbrunnen", BOS: "Bornholmer Str", WOK: "Wollankstr", SNH: "Schönholz", WM: "Wilhelmsruh", WIN: "Wittenau", WAI: "Waidmannslust", NULL: null});
  }
  addS3() {
    this.S3 = this.addBLine("S3", {E: "Erkner", WIG: "Wilhelmshagen", RD: "Rahnsdorf", FRH: "Friedrichshagen", HIG: "Hirschgarten", KPK: "Köpenick", WHH: "Wuhlheide", KLH: "Karlshorst", RB: "Betriebsbahnhof Rummelsburg", RH: "Rummelsburg", OKS: "Ostkreuz", WRS: "Warschauer Str", OSB: "Ostbahnhof", JB: "Jannowitzbrücke", ALX: "Alexanderplatz", HKM: "Hackescher Markt", FST: "Friedrichstr", HBF: "Hauptbahnhof", BEV: "Bellevue", TGN: "Tiergarten", ZOS: "Zoologischer Garten", SAP: "Savignyplatz", CHS: "Charlottenburg", WKS: "Westkreuz", GWD: "Grunewald", MS: "Messe Süd", HST: "Heerstr", OLS: "Olympiastadion", PIC: "Pichelsberg", SRW: "Stresow", SPA: "Spandau", NULL: null});
  }
  addS4() {
    this.S41 = { line: "S41", dir: null };
    this.S42 = { line: "S42", dir: null };
  }
  addS45() {
    this.S45 = this.addBLine("S45", {FLH: "Flughafen Berlin-Schönefeld", GBA: "Grünbergallee", AGL: "Altglienicke", GAS: "Grünau", ADL: "Adlershof", SCF: "Betriebsbahnhof Schöneweide", SW: "Schöneweide", BMW: "Baumschulenweg", PWA: "Plänterwald", TP: "Treptower Park", KHD: "Köllnische Heide", NK: "Neukölln", HER: "Hermannstr", THF: "Tempelhof", SKR: "Südkreuz", NULL: null});
  }
  addS46() {
    this.S46 = this.addBLine("S46", {KW: "Königs Wusterhausen", WI: "Wildau", ZTH: "Zeuthen", EIW: "Eichwalde", GAS: "Grünau", ADL: "Adlershof", SCF: "Betriebsbahnhof Schöneweide", SW: "Schöneweide", BMW: "Baumschulenweg", PWA: "Plänterwald", TP: "Treptower Park", KHD: "Köllnische Heide", NK: "Neukölln", HER: "Hermannstr", THF: "Tempelhof", SKR: "Südkreuz", SGR: "Schöneberg", IP: "Innsbrucker Platz", BUP: "Bundesplatz", HEI: "Heidelberger Platz", HO: "Hohenzollerndamm", HAL: "Halensee", WKRR: "Westkreuz", MN: "Messe Nord/ICC", WES: "Westend", JUN: "Jungfernheide", BEU: "Beusselstr", WH: "Westhafen", WED: "Wedding", GB: "Gesundbrunnen", NULL: null});
  }
  addS47() {
    this.S47 = this.addBLine("S47", {SPF: "Spindlersfeld", OSP: "Oberspree", SW: "Schöneweide", BMW: "Baumschulenweg", PWA: "Plänterwald", TP: "Treptower Park", KHD: "Köllnische Heide", NK: "Neukölln", HER: "Hermannstr", NULL: null});
  }
  addS5() {
    this.S5 = this.addBLine("S5", {STN: "Strausberg Nord", STR: "Strausberg Stadt", HGM: "Hegermühle", STV: "Strausberg", PEN: "Petershagen Nord", FD: "Fredersdorf", NG: "Neuenhagen", HPG: "Hoppegarten", BIS: "Birkenstein", MDF: "Mahlsdorf", KAD: "Kaulsdorf", WT: "Wuhletal", BDF: "Biesdorf", FFO: "Friedrichsfelde Ost", LI: "Lichtenberg", NPL: "Nöldnerplatz", OKS: "Ostkreuz", WRS: "Warschauer Str", OSB: "Ostbahnhof", JB: "Jannowitzbrücke", ALX: "Alexanderplatz", HKM: "Hackescher Markt", FST: "Friedrichstr", HBF: "Hauptbahnhof", BEV: "Bellevue", TGN: "Tiergarten", ZOS: "Zoologischer Garten", SAP: "Savignyplatz", CHS: "Charlottenburg", WKS: "Westkreuz", GWD: "Grunewald", MS: "Messe Süd", HST: "Heerstr", OLS: "Olympiastadion", NULL: null});
  }
  addS7() {
    this.S7 = this.addBLine("S7", {AF: "Ahrensfelde", MEA: "Mehrower Allee", RW: "Raoul-Wallenberg-Str", MAZ: "Marzahn", POE: "Poelchaustr", SPH: "Springpfuhl", FFO: "Friedrichsfelde Ost", LI: "Lichtenberg", NPL: "Nöldnerplatz", OKS: "Ostkreuz", WRS: "Warschauer Str", OSB: "Ostbahnhof", JB: "Jannowitzbrücke", ALX: "Alexanderplatz", HKM: "Hackescher Markt", FST: "Friedrichstr", HBF: "Hauptbahnhof", BEV: "Bellevue", TGN: "Tiergarten", ZOS: "Zoologischer Garten", SAP: "Savignyplatz", CHS: "Charlottenburg", WKS: "Westkreuz", GWD: "Grunewald", NIS: "Nikolassee", WSS: "Wannsee", GRI: "Griebnitzsee", BAB: "Babelsberg", PDH: "Potsdam", NULL: null});
  }
  addS75() {
    this.S75 = this.addBLine("S75", {WAB: "Wartenberg", HH: "Hohenschönhausen", GSE: "Gehrenseestr", SPH: "Springpfuhl", FFO: "Friedrichsfelde Ost", LI: "Lichtenberg", NPL: "Nöldnerplatz", OKS: "Ostkreuz", WRS: "Warschauer Str", OSB: "Ostbahnhof", NULL: null});
  }
  addS8() {
    this.S8 = this.addBLine("S8", {ZTH: "Zeuthen", EIW: "Eichwalde", GAS: "Grünau", ADL: "Adlershof", SCF: "Betriebsbahnhof Schöneweide", SW: "Schöneweide", BMW: "Baumschulenweg", PWA: "Plänterwald", TP: "Treptower Park", OK: "Ostkreuz", FA: "Frankfurter Allee", STO: "Storkower Str", LST: "Landsberger Allee", GSS: "Greifswalder Str", PLA: "Prenzlauer Allee", SAL: "Schönhauser Allee", BOS: "Bornholmer Str", PKW: "Pankow", PHD: "Pankow-Heinersdorf", BLB: "Blankenburg", MM: "Mühlenbeck-Mönchmühle", SNF: "Schönfließ", BFE: "Bergfelde", HN: "Hohen Neuendorf", BIW: "Birkenwerder", NULL: null});
  }
  addS85() {
    this.S85 = this.addBLine("S85",{ GAS: "Grünau", ADL: "Adlershof", SCF: "Betriebsbahnhof Schöneweide", SW: "Schöneweide", BMW: "Baumschulenweg", PWA: "Plänterwald", TP: "Treptower Park", OK: "Ostkreuz", FA: "Frankfurter Allee", STO: "Storkower Str", LST: "Landsberger Allee", GSS: "Greifswalder Str", PLA: "Prenzlauer Allee", SAL: "Schönhauser Allee", BOS: "Bornholmer Str", PKW: "Pankow", GB: "Gesundbrunnen", HUM: "Humboldthain", NB: "Nordbahnhof", NULL: null});
  }
  addS9() {
    this.S9 = this.addBLine("S9", { FLH: "Flughafen Berlin-Schönefeld", GBA: "Grünbergallee", AGL: "Altglienicke", GAS: "Grünau", ADL: "Adlershof", SCF: "Betriebsbahnhof Schöneweide", SW: "Schöneweide", BMW: "Baumschulenweg", PWA: "Plänterwald", TP: "Treptower Park", WRS: "Warschauer Str", OSB: "Ostbahnhof", JB: "Jannowitzbrücke", ALX: "Alexanderplatz", HKM: "Hackescher Markt", FST: "Friedrichstr", HBF: "Hauptbahnhof", BEV: "Bellevue", TGN: "Tiergarten", ZOS: "Zoologischer Garten", SAP: "Savignyplatz", CHS: "Charlottenburg", WKS: "Westkreuz", GWD: "Grunewald", MS: "Messe Süd", HST: "Heerstr", OLS: "Olympiastadion", PIC: "Pichelsberg", SRW: "Stresow", SPA: "Spandau", OKS: "Ostkreuz", NPL: "Nöldnerplatz", LI: "Lichtenberg", NULL: null });
  }
  addU1(){
    this.U1 = this.addBLine("U1", { U: "Uhlandstr", Kfo: "Kurfürstendamm", Wt: "Wittenbergplatz", N: "Nollendorfplatz", Kus: "Kurfürstenstr", Go: "Gleisdreieck", Mo: "Mehringdamm", Ho: "Hallesches Tor", Pr: "Prinzenstr", Kbo: "Kottbusser Tor", Gr: "Görlitzer Bahnhof", S: "Schlesisches Tor", WA: "Warschauer Str", NULL: null});
  }
  addU2(){
    this.U2 = this.addBLine("U2", { PA: "Pankow", VIN: "Vinetastr", Sh: "Schönhauser Allee", EB: "Eberswalder Str", Sz: "Senefelderplatz", Lu: "Rosa-Luxemburg-Platz", A: "Alexanderplatz", Ko: "Klosterstr", Mk: "Märkisches Museum", Sp: "Spittelmarkt", Hv: "Hausvogteiplatz", Mi: "Stadtmitte", MH: "Mohrenstr", Pd: "Potsdamer Platz", MB: "Mendelssohn-Bartholdy-Park", Gu: "Gleisdreieck", BS: "Bülowstr", No: "Nollendorfplatz", Wt: "Wittenbergplatz", Zo: "Zoologischer Garten", RP: "Ernst-Reuter-Platz", Obi: "Deutsche Oper", Bmo: "Bismarckstr", So: "Sophie-Charlotte-Platz", Kd: "Kaiserdamm", Th: "Theodor-Heuss-Platz", Nd: "Neu-Westend", Sd: "Olympia-Stadion", Rl: "Ruhleben", Au: "Augsburger Str", Sno: "Spichernstr", Hz: "Hohenzollernplatz", Fpo: "Fehrbelliner Platz", NULL: null });
  }
  addU3(){
    this.U3 = this.addBLine("U3", { K: "Krumme Lanke", Ot: "Onkel Toms Hütte", Os: "Oskar-Helene-Heim", T: "Freie Universität", Dd: "Dahlem-Dorf", Po: "Podbielskiallee", Bt: "Breitenbachplatz", Rd: "Rüdesheimer Platz", Hb: "Heidelberger Platz", Fpo: "Fehrbelliner Platz", Hz: "Hohenzollernplatz", Sno: "Spichernstr", Au: "Augsburger Str", Wt: "Wittenbergplatz", N: "Nollendorfplatz", Kus: "Kurfürstenstr", Go: "Gleisdreieck", Mo: "Möckernbrücke", Ho: "Hallesches Tor", Pr: "Prinzenstr", Kbo: "Kottbusser Tor", Gr: "Görlitzer Bahnhof", S: "Schlesisches Tor", WA: "Warschauer Str", NULL: null });
  }
  addU4(){
    this.U4 = this.addBLine("U4", { Nm: "Nollendorfplatz", V: "Viktoria-Luise-Platz", Bpo: "Bayerischer Platz", RS: "Rathaus Schöneberg", Ip: "Innsbrucker Platz", NULL: null });
  }
  addU5(){
    this.U5 = this.addBLine("U5", { Hö: "Hönow", LL: "Louis-Lewin-Str", HD: "Hellersdorf", C: "Cottbusser Platz", GK: "Kienberg", KL: "Kaulsdorf-Nord", Wh: "Wuhletal", E: "Elsterwerdaer Platz", Bü: "Biesdorf-Süd", Tk: "Tierpark", Fi: "Friedrichsfelde", Li: "Lichtenberg", Md: "Magdalenenstr", Ff: "Frankfurter Allee", Sa: "Samariterstr", FT: "Frankfurter Tor", WR: "Weberwiese", Sr: "Strausberger Platz", Si: "Schillingstr", Al: "Alexanderplatz", NULL: null });
  }
  addU55(){
    this.U55 = this.addBLine("U55", { HBF: "Hauptbahnhof", BUN: "Bundestag", BRT: "Brandenburger Tor", NULL: null });
  }
  addU6(){
    this.U6 = this.addBLine("U6", { Tg: "Alt-Tegel", Bk: "Borsigwerke", Hh: "Holzhauser Str", OTI: "Otisstr", Scha: "Scharnweberstr", Sch: "Kurt-Schumacher-Platz", Afr: "Afrikanische Str", Rb: "Rehberge", Se: "Seestr", Lpo: "Leopoldplatz", We: "Wedding", Ri: "Reinickendorfer Str", SK: "Schwartzkopffstr", NA: "Naturkundemuseum", Ob: "Oranienburger Tor", F: "Friedrichstr", Fr: "Französische Str", Mic: "Stadtmitte", Ks: "Kochstr", Hu: "Hallesches Tor", Me: "Mehringdamm", PL: "Platz der Luftbrücke", Ps: "Paradestr", Ts: "Tempelhof", At: "Alt-Tempelhof", Ka: "Kaiserin-Augusta-Str", Ull: "Ullsteinstr", Wl: "Westphalweg", Mf: "Alt-Mariendorf", NULL: null });
  }
  addU7(){
    this.U7 = this.addBLine("U7", { R: "Rudow", Zd: "Zwickauer Damm", Wk: "Wutzkyallee", La: "Lipschitzallee", Jt: "Johannisthaler Chaussee", Br: "Britz-Süd", Pi: "Parchimer Allee", Bl: "Blaschkoallee", Gz: "Grenzallee", Nk: "Neukölln", KM: "Karl-Marx-Allee", Rk: "Rathaus Neukölln", Hpu: "Hermannplatz", Sü: "Südstern", Gs: "Gneisenaustr", Me: "Mehringdamm", Mu: "Möckernbrücke", Y: "Yorckstr", Kt: "Kleistpark", Ei: "Eisenacher Str", Bpu: "Bayerischer Platz", Beu: "Berliner Str", Bli: "Blissestr", Fpu: "Fehrbelliner Platz", Kn: "Konstanzer Str", Ad: "Adenauerplatz", Wd: "Wilmersdorfer Str", Bmu: "Bismarckstr", Rw: "Richard-Wagner-Platz", Mp: "Mierendorffplatz", Jh: "Jungfernheide", JK: "Jakob-Kaiser-Platz", Hl: "Halemweg", Sie: "Siemensdamm", Rm: "Rohrdamm", P: "Paulsternstr", Hs: "Haselhorst", Zi: "Zitadelle", AS: "Altstadt Spandau", RSp: "Rathaus Spandau", NULL: null });
  }
  addU8(){
    this.U8 = this.addBLine("U8", { WIU: "Wittenau", RR: "Rathaus Reinickendorf", KB: "Karl-Bonhoeffer-Nervenklinik", LD: "Lindauer Allee", PB: "Paracelsus-Bad", RE: "Residenzstr", FN: "Franz-Neumann-Platz", Olu: "Osloer Str", Pk: "Pankstr", Gb: "Gesundbrunnen", Vo: "Voltastr", B: "Bernauer Str", Ro: "Rosenthaler Platz", W: "Weinmeisterstr", Ap: "Alexanderplatz", Jb: "Jannowitzbrücke", He: "Heinrich-Heine-Str", Mr: "Moritzplatz", Kbu: "Kottbusser Tor", ST: "Schönleinstr", Hpo: "Hermannplatz", Bo: "Boddinstr", L: "Leinestr", HMS: "Hermannstr", NULL: null });
  }
  addU9(){
    this.U9 = this.addBLine("U9", { Olo: "Osloer Str", Np: "Nauener Platz", Lpu: "Leopoldplatz", Am: "Amrumer Str", WF: "Westhafen", Bi: "Birkenstr", Tm: "Turmstr", Ha: "Hansaplatz", Zu: "Zoologischer Garten", Kfu: "Kurfürstendamm", Snu: "Spichernstr", Gt: "Güntzelstr", Beo: "Berliner Str", Bd: "Bundesplatz", Fw: "Friedrich-Wilhelm-Platz", Wsg: "Walther-Schreiber-Platz", Sl: "Schloßstr", Rzu: "Rathaus Steglitz", NULL: null });
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
  getStation(line, ...stations){
    return stations.map(station => line[station]);
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
