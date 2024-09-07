
export type Recipient = {
    name: string;
    salutation: string;
    chairman: string;
    postalCode: string;
    city: string;
    website: string;
};

/*
 * https://www.cdu-sachsen.de/partei/kreisverbaende
 */
export const cduSachsenRecipients : Array<Recipient> = [
  {
    "name": "Kreisverband Bautzen",
    "salutation": "Liebe Frau",
    "chairman": "Birgit Elsner",
    "postalCode": "02625",
    "city": "Bautzen",
    "website": "http://www.cdu-bautzen.de/kontakt"
  },
  {
    "name": "Kreisverband Chemnitz",
    "salutation": "Liebe Frau",
    "chairman": "Ines Saborowski MdL",
    "postalCode": "09111",
    "city": "Chemnitz",
    "website": "http://www.cdu-chemnitz.de/kontakt"
  },
  {
    "name": "Kreisverband Dresden",
    "chairman": "Christian Mumme",
    "salutation": "Lieber Herr",
    "postalCode": "01067",
    "city": "Dresden",
    "website": "http://www.cdu-dresden.de/kontakt"
  },
  {
    "name": "Kreisverband Erzgebirge",
    "chairman": "Daniela Findeisen",
    "salutation": "Liebe Frau",
    "postalCode": "09456",
    "city": "Annaberg-Buchholz",
    "website": "http://www.cdu-erzgebirge.de/kontakt"
  },
  {
    "name": "Kreisverband Görlitz",
    "chairman": "Kathrin Zippel",
    "salutation": "Liebe Frau",
    "postalCode": "02826",
    "city": "Görlitz",
    "website": "http://www.cdu-kreisverband-goerlitz.de/kontakt"
  },
  {
    "name": "Kreisverband Landkreis Leipzig",
    "chairman": "Georg-Ludwig von Breitenbuch",
    "salutation": "Lieber Herr",
    "postalCode": "04552",
    "city": "Borna",
    "website": "http://www.cdu-landkreis-leipzig.de/kontakt"
  },
  {
    "name": "Kreisverband Leipzig",
    "chairman": "Rainer Burgold",
    "salutation": "Lieber Herr",
    "postalCode": "04109",
    "city": "Leipzig",
    "website": "https://www.cdu-leipzig.de/kreisgeschaeftsstelle"
  },
  {
    "name": "Kreisverband Meißen",
    "chairman": "Bianca Wunderwald",
    "salutation": "Liebe Frau",
    "postalCode": "01558",
    "city": "Großenhain",
    "website": "http://www.cdu-meissen.de/kontakt"
  },
  {
    "name": "Kreisverband Mittelsachsen",
    "chairman": "Robert Sahm",
    "salutation": "Lieber Herr",
    "postalCode": "09599",
    "city": "Freiberg",
    "website": "http://www.cdu-mittelsachsen.de/kontakt"
  },
  {
    "name": "Kreisverband Nordsachsen",
    "chairman": "Björn Sitte",
    "salutation": "Lieber Herr",
    "postalCode": "04509",
    "city": "Delitzsch",
    "website": "http://www.cdu-nordsachsen.de/kontakt"
  },
  {
    "name": "Kreisverband Sächsische Schweiz-Osterzgebirge",
    "chairman": "Richard König",
    "salutation": "Lieber Herr",
    "postalCode": "01796",
    "city": "Pirna",
    "website": "http://www.cdu-soe.de/kontakt"
  },
  {
    "name": "Kreisverband Vogtland",
    "chairman": "Sören Voigt MdL",
    "salutation": "Lieber Herr",
    "postalCode": "08523",
    "city": "Plauen",
    "website": "http://www.cdu-vogtland.de/kontakt"
  },
  {
    "name": "Kreisverband Zwickau",
    "chairman": "Carsten Ehrig",
    "salutation": "Lieber Herr",
    "postalCode": "08056",
    "city": "Zwickau",
    "website": "http://www.cdu-zwickau.de/kontakt"
  }
];

/*
 * Thürigen from https://www.cdu-thueringen.de/partei/kreisverbaende
 */
export const thueringenRecipients : Array<Recipient> = [
  {
    "name": "CDU Altenburger Land",
    "chairman": "Christoph Zippel MdL",
    "salutation": "Lieber Herr",
    "postalCode": "04600",
    "city": "Altenburg",
    "website": "http://www.cdu-altenburger-land.de/kontakt"
  },
  {
    "name": "CDU Eichsfeld",
    "chairman": "Dr. Thadäus König MdL",
    "salutation": "Lieber Herr",
    "postalCode": "37308",
    "city": "Heilbad Heiligenstadt",
    "website": "http://www.cdu-eichsfeld.de/kontakt"
  },
  {
    "name": "CDU Erfurt",
    "chairman": "Dr. Wolfgang Weisskopf",
    "salutation": "Lieber Herr",
    "postalCode": "99084",
    "city": "Erfurt",
    "website": "http://www.cdu-erfurt.de/kontakt"
  },
  {
    "name": "CDU Gera",
    "chairman": "Christian Klein",
    "salutation": "Lieber Herr",
    "postalCode": "07545",
    "city": "Gera",
    "website": "http://www.cdu-gera.de/kontakt"
  },
  {
    "name": "CDU Gotha",
    "chairman": "Florian Hofmann",
    "salutation": "Lieber Herr",
    "postalCode": "99867",
    "city": "Gotha",
    "website": "http://www.cdu-gotha.de/kontakt"
  },
  {
    "name": "CDU Greiz", //???
    "chairman": "Dr. Ulli Schäfer",
    "salutation": "Lieber Herr",
    "postalCode": "07545",
    "city": "Gera",
    "website": "http://www.cdu-greiz.de/kontakt"
  },
  {
    "name": "CDU Hildburghausen",
    "chairman": "Christopher Other",
    "salutation": "Lieber Herr",
    "postalCode": "98646",
    "city": "Hildburghausen",
    "website": "http://www.cdu-hbn.de/kontakt"
  },
  {
    "name": "CDU Ilm-Kreis",
    "chairman": "Tankred Schipanski",
    "salutation": "Lieber Herr",
    "postalCode": "98693",
    "city": "Ilmenau",
    "website": "http://www.cdu-ilmkreis.de/kontakt"
  },
  {
    "name": "CDU Jena",
    "chairman": "Guntram Wothly",
    "salutation": "Lieber Herr",
    "postalCode": "07743",
    "city": "Jena",
    "website": "http://www.cdu-jena.de/kontakt"
  },
  {
    "name": "CDU Kyffhäuserkreis",
    "chairman": "Stefan Schard MdL",
    "salutation": "Lieber Herr",
    "postalCode": "99706",
    "city": "Sondershausen",
    "website": "http://www.cdu-kyffhaeuserkreis.de/kontakt"
  },
  {
    "name": "CDU Nordhausen",
    "chairman": "Stefan Nüßle",
    "salutation": "Lieber Herr",
    "postalCode": "99734",
    "city": "Nordhausen",
    "website": "http://www.cdu-nordhausen.de/kontakt"
  },
  {
    "name": "CDU Saale-Holzland-Kreis",
    "chairman": "Prof. Dr. Mario Voigt MdL",
    "salutation": "Lieber Herr",
    "postalCode": "07667",
    "city": "Eisenberg",
    "website": "http://www.cdu-shk.de/kontakt"
  },
  {
    "name": "CDU Saale-Orla-Kreis",
    "chairman": "Christian Herrgott MdL",
    "salutation": "Lieber Herr",
    "postalCode": "07907",
    "city": "Schleiz",
    "website": "http://www.cdu-sok.de/kontakt"
  },
  {
    "name": "CDU Saalfeld-Rudolstadt",
    "chairman": "Dr. Steffen Kania",
    "salutation": "Lieber Herr",
    "postalCode": "07318",
    "city": "Saalfeld",
    "website": "http://www.cdu-saalfeld-rudolstadt.de/kontakt"
  },
  {
    "name": "CDU Schmalkalden-Meiningen",
    "chairman": "Ralf Liebaug",
    "salutation": "Lieber Herr",
    "postalCode": "98617",
    "city": "Meiningen",
    "website": "http://www.cdu-sm.de/kontakt"
  },
  {
    "name": "CDU Sömmerda",
    "chairman": "Hendrik Blose",
    "salutation": "Lieber Herr",
    "postalCode": "99610",
    "city": "Sömmerda",
    "website": "http://www.cdu-soemmerda.de/kontakt"
  },
  {
    "name": "CDU Sonneberg",
    "chairman": "Beate Meißner MdL",
    "salutation": "Liebe Frau",
    "postalCode": "96515",
    "city": "Sonneberg",
    "website": "http://www.cdu-sonneberg.de/kontakt"
  },
  {
    "name": "CDU Suhl",
    "chairman": "André Knapp",
    "salutation": "Lieber Herr",
    "postalCode": "98527",
    "city": "Suhl",
    "website": "http://www.cdu-suhl.de/kontakt"
  },
  {
    "name": "CDU Unstrut-Hainich-Kreis",
    "chairman": "Jeremi Schmalz",
    "salutation": "Lieber Herr",
    "postalCode": "99947",
    "city": "Bad Langensalza",
    "website": "http://www.cdu-unstrut-hainich.de/kontakt"
  },
  {
    "name": "CDU Wartburgkreis",
    "chairman": "Dr. Michael Brodführer",
    "salutation": "Lieber Herr",
    "postalCode": "36433",
    "city": "Bad Salzungen",
    "website": "http://www.cdu-wartburgkreis.de/kontakt"
  },
  {
    "name": "CDU Weimar",
    "chairman": "Jörg Geibert",
    "salutation": "Lieber Herr",
    "postalCode": "99423",
    "city": "Weimar",
    "website": "http://www.cdu-weimar.de/kontakt"
  },
  {
    "name": "CDU Weimarer Land",
    "chairman": "Christiane Schmidt-Rose",
    "salutation": "Liebe Frau",
    "postalCode": "99510",
    "city": "Apolda",
    "website": "http://www.cdu-weimarerland.de/kontakt"
  }
];

/*
 * https://www.cdu-brandenburg.de/Kreisverbaende_p_40.html 
 */
export const cduBrandenburgRecipients : Array<Recipient> = [
  {
    "name": "CDU Barnim",
    "chairman": "Danko Jur",
    "salutation": "Lieber Herr",
    "postalCode": "16225",
    "city": "Eberswalde",
    "website": "http://www.cdu-barnim.de/kontakt"
  },
  {
    "name": "CDU Brandenburg an der Havel",
    "chairman": "Steffen Scheller",
    "salutation": "Lieber Herr",
    "postalCode": "14770",
    "city": "Brandenburg an der Havel",
    "website": "http://www.cdu-brb.de/kontakt"
  },
  {
    "name": "CDU Cottbus",
    "salutation": "Lieber Herr",
    "chairman": "Martin Ruske",
    "postalCode": "03046",
    "city": "Cottbus",
    "website": "http://www.cdu-cottbus.de/kontakt"
  },
  {
    "name": "CDU Dahme-Spreewald",
    "chairman": "Björn Lakenmacher MdL",
    "salutation": "Lieber Herr",
    "postalCode": "15907",
    "city": "Lübben",
    "website": "http://www.cdu-lds.de/kontakt"
  },
  {
    "name": "CDU Elbe-Elster",
    "chairman": "Christian Jaschinski",
    "salutation": "Lieber Herr",
    "postalCode": "03238",
    "city": "Finsterwalde",
    "website": "http://www.cdu-ee.de/kontakt"
  },
  {
    "name": "CDU Frankfurt (Oder)",
    "chairman": "Michael Möckel",
    "salutation": "Lieber Herr",
    "postalCode": "15230",
    "city": "Frankfurt (Oder)",
    "website": "http://www.cdu-frankfurt-oder.de/kontakt"
  },
  {
    "name": "CDU Havelland",
    "chairman": "Michael Koch",
    "salutation": "Lieber Herr",
    "postalCode": "14712",
    "city": "Rathenow",
    "website": "http://www.cdu-havelland.de/kontakt"
  },
  {
    "name": "CDU Märkisch-Oderland",
    "chairman": "Kristy Augustin MdL",
    "salutation": "Liebe Frau",
    "postalCode": "15344",
    "city": "Strausberg",
    "website": "http://www.cdumol.de/kontakt"
  },
  {
    "name": "CDU Oberhavel",
    "chairman": "Frank Bommert MdL",
    "salutation": "Lieber Herr",
    "postalCode": "16515",
    "city": "Oranienburg",
    "website": "http://www.cdu-oberhavel.de/kontakt"
  },
  {
    "name": "CDU Oberspreewald-Lausitz",
    "chairman": "Niko Gebel",
    "salutation": "Lieber Herr",
    "postalCode": "01968",
    "city": "Senftenberg",
    "website": "http://www.cduosl.de/kontakt"
  },
  {
    "name": "CDU Oder-Spree",
    "chairman": "André Schaller MdL",
    "salutation": "Lieber Herr",
    "postalCode": "15848",
    "city": "Beeskow",
    "website": "http://www.cdu-oderspree.de/kontakt"
  },
  {
    "name": "CDU Ostprignitz-Ruppin",
    "chairman": "Sebastian Steineke",
    "salutation": "Lieber Herr",
    "postalCode": "16816",
    "city": "Neuruppin",
    "website": "http://www.cdu-opr.de/kontakt"
  },
  {
    "name": "CDU Potsdam",
    "chairman": "Steeven Bretz MdL",
    "salutation": "Lieber Herr",
    "postalCode": "14469",
    "city": "Potsdam",
    "website": "http://www.cdu-potsdam.de/kontakt"
  },
  {
    "name": "CDU Potsdam-Mittelmark",
    "chairman": "Christian Große",
    "salutation": "Lieber Herr",
    "postalCode": "14542",
    "city": "Werder",
    "website": "http://www.cdu-pm.de/kontakt"
  },
  {
    "name": "CDU Prignitz",
    "chairman": "Gordon Hoffmann MdL",
    "salutation": "Lieber Herr",
    "postalCode": "19348",
    "city": "Perleberg",
    "website": "http://www.cdu-prignitz.de/kontakt"
  },
  {
    "name": "CDU Spree-Neiße",
    "chairman": "Julian Brüning MdL",
    "salutation": "Lieber Herr",
    "postalCode": "03149",
    "city": "Forst",
    "website": "http://www.cdu-spree-neisse.de/kontakt"
  },
  {
    "name": "CDU Teltow-Fläming",
    "chairman": "Danny Eichelbaum MdL",
    "postalCode": "14943",
    "salutation": "Lieber Herr",
    "city": "Luckenwalde",
    "website": "https://www.cdu-tf.de/index.php/schreiben-sie-uns.html"
  },
  {
    "name": "CDU Uckermark",
    "chairman": "Karina Dörk",
    "salutation": "Liebe Frau",
    "postalCode": "17291",
    "city": "Prenzlau",
    "website": "http://www.cdu-uckermark.de/kontakt"
  }
];

export const recipients : Array<Recipient> = Array.from(cduSachsenRecipients).concat(thueringenRecipients).concat(cduBrandenburgRecipients);