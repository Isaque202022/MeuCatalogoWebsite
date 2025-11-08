const produtos = [
{
  externo: 72,
  interno: 0,
  altura: 0,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['metal'],

  marca: 'zen',
  referencia: '13291',
  imagens: ['schadek-30264-1.png','schadek-30264-2.png'],

  descricao: 'bora/golf /06',
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'A3',
      ano: '1996 - 2007',
      complemento: '1.6',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Bora',
      ano: '1999 - 2011',
      complemento: '2.0',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Golf',
      ano: '1998 - 2001',
      complemento: '1.6 8v EA113',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Golf',
      ano: '1999 - 2013',
      complemento: '2.0 8v EA113',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Jetta',
      ano: '2010 - ',
      complemento: '2.0 8v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'New Beetle',
      ano: '1999 - 2010',
      complemento: '2.0 8v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Passat',
      ano: '2001',
      complemento: '2.0 8v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Polo',
      ano: '2002 - ',
      complemento: '2.0 8v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Vento',
      ano: '',
      complemento: '2.0 8v',
    },
    {
      montadora: 'seat',
      modelo: 'Cordoba',
      ano: '',
      complemento: '1.6 8v',
    },
    {
      montadora: 'seat',
      modelo: 'Ibiza',
      ano: '',
      complemento: '1.6 8v',
    },
  ],
  referenciasCruzadas: [
    {
      marca: "zen",
      codigos: ["13291"]
    },
    {
      marca: "SCHADEK",
      codigos: ["30264",'90001604 ']
    },
    {
      marca: "Audi - Seat - Volkswagen",
      codigos: ["06A109479","06A109479A","06A109479B","06A109479C","06A109479F"]
    },
    {
      marca: "Cobra",
      codigos: ["9479"]
    },
    {
      marca: "Dayco",
      codigos: ["ATB2088"]
    },
    {
      marca: "Gueparts",
      codigos: ["5629"]
    },
    {
      marca: "Ina",
      codigos: ["531020320","F123814"]
    },
    {
      marca: "Nytron",
      codigos: ["7787"]
    },
    {
      marca: "Ranalle",
      codigos: ["r4108"]
    },
    {
      marca: "Rolt",
      codigos: ["1628"]
    },
    {
      marca: "Roltens",
      codigos: ["rt7035"]
    },
    {
      marca: "skf",
      codigos: ["vkm11113"]
    },
    {
      marca: "Vetor",
      codigos: ["vt8128"]
    },
  ]
},
{
  externo: 74,
  interno: 0,
  altura: 22,
  correia: ['dentada'],
  parede: ['liso','sem-aba',],
  material: ['plastico','metal'],

  marca: 'schadek',
  referencia: '30194',
  imagens: ['schadek-30194-1.jpg', 'schadek-30194-2.png'],

  descricao: 'kangoo/clio/logan/sandero 1.6',
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'Clio',
      ano: '2009 - ',
      complemento: '1.6',
    },
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '2009 - ',
      complemento: '1.6',
    },
    {
      montadora: 'renault',
      modelo: 'Logan',
      ano: '2009 - ',
      complemento: '1.6',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '2009 - ',
      complemento: '1.6',
    },

  ],
  referenciasCruzadas: [
    {
      marca: "schadek",
      codigos: ["30194",'90001534']
    },
    {
      marca: "zen",
      codigos: ["13284"]
    },
    {
      marca: "nytron",
      codigos: ["7693"]
    },
    {
      marca: "renault",
      codigos: ["8200908180"]
    },
    {
      marca: "dayco",
      codigos: ["atb2572"]
    },
    {
      marca: "ranalle",
      codigos: ["r4625"]
    },
    {
      marca: "roltens",
      codigos: ["rt8427"]
    },
    {
      marca: "indisa",
      codigos: ["t707693"]
    },
    {
      marca: "continental",
      codigos: ["v55635"]
    },
    {
      marca: "skf",
      codigos: ["vkm41018"]
    },
  ],
},
{
  externo: 65,
  interno: 12,
  altura: 31,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'schadek',
  referencia: '30173',
  imagens: ['schadek-30173-1.jpg','schadek-30173-2.jpg'],

  descricao: 'palio 1.6 argentino / linea 1.9',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Brava',
      ano: '2009 - ',
      complemento: '1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '2002 - ',
      complemento: '1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Linea',
      ano: '2009 - ',
      complemento: '1.9',
    },
    {
      montadora: 'fiat',
      modelo: 'Marea',
      ano: '1996 - 2003',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '1996 - 2003',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '1996 - 2003',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '1996 - 2003',
      complemento: '1.6 16v',
    },
  ],
  referenciasCruzadas: [
    {
      marca: "schadek",
      codigos: ["30173",'90001513 ']
    },
    {
      marca: "zen",
      codigos: ["12823"]
    },
    {
      marca: "nytron",
      codigos: ["2054"]
    },
    {
      marca: "fiat",
      codigos: ["71748866",'55211287','46554826','464000054']
    },
    {
      marca: "dayco",
      codigos: ["atb2019","dyt242"]
    },
    {
      marca: "ranalle",
      codigos: ["r4455"]
    },
    {
      marca: "roltens",
      codigos: ["rt6539"]
    },
    {
      marca: "indisa",
      codigos: ["t352054"]
    },
    {
      marca: "continental",
      codigos: ["v558833"]
    },
    {
      marca: "skf",
      codigos: ["vkm22242a"]
    },
  ],
},  
{
  externo: 72,
  interno: 0,
  altura: 0,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['metal'],

  marca: 'schadek',
  referencia: '30264',
  imagens: ['schadek-30264-1.png','schadek-30264-2.png'],

  descricao: 'bora/golf /06',
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'A3',
      ano: '1999 - 2001',
      complemento: '1.6 8v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Bora',
      ano: '1998 - 2006',
      complemento: '2.0 8v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Golf',
      ano: '1998 - 2006',
      complemento: '1.6 8v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Golf',
      ano: '1998 - 2006',
      complemento: '2.0 8v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'New Beetle',
      ano: '1998 - 2010',
      complemento: '2.0 8v',
    },
    
  ],
  referenciasCruzadas: [
    {
      marca: "Schadek",
      codigos: ["30264",'90001604']
    },
    {
      marca: "Audi - Volkswagen",
      codigos: ["06a109479","06a109479a","06a109479b","06a109479c","06a109479f"]
    },
    {
      marca: "Zen",
      codigos: ["13291"]
    },
    {
      marca: "Nytron",
      codigos: ["7787"]
    },
    {
      marca: "Dayco",
      codigos: ["atb2088"]
    },
    {
      marca: "Ranalle",
      codigos: ["R4108"]
    },
    {
      marca: "Roltens",
      codigos: ["RT7035"]
    },
    {
      marca: "Indisa",
      codigos: ["T457787"]
    },
    {
      marca: "Skf",
      codigos: ["VKM11113"]
    },
  ],
},
{
  externo: 59,
  interno: 8,
  altura: 28,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'skf',
  referencia: 'vkm16002',
  imagens: ['skf-vkm16002-1.png','skf-vkm16002-2.jpg'],

  descricao: 'march/206/clio/sandero 1.0 16v',
  aplicacoes: [
    {
      montadora: 'nissan',
      modelo: 'March',
      ano: '2014 - 2020',
      complemento: '1.0 16v motor D4D',
    },
    {
      montadora: 'peugeot',
      modelo: '206',
      ano: '2001 - 2005',
      complemento: '1.0 16v motor D4D',
    },
    {
      montadora: 'renault',
      modelo: 'Clio',
      ano: '2000 - 2015',
      complemento: '1.0 16v motor D4D',
    },
    {
      montadora: 'renault',
      modelo: 'Logan',
      ano: '2007 - 2020',
      complemento: '1.0 16v motor D4D',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '2007 - 2020',
      complemento: '1.0 16v motor D4D',
    },
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '2002 - 2005',
      complemento: '1.0 16v motor D4D',
    },
    {
      montadora: 'renault',
      modelo: 'Twingo',
      ano: '1993 - 1999',
      complemento: '1.2 16v motor D4D',
    },
  ],
  referenciasCruzadas: [
    {
      marca: "skf",
      codigos: ["vkm16002","antigo vkm4617"]
    },
    {
      marca: "contitech",
      codigos: ["v55572"]
    },
    {
      marca: "dayco",
      codigos: ["atb2219"]
    },
    {
      marca: "gates",
      codigos: ["t43126"]
    },
    {
      marca: "ina",
      codigos: ["531040410"]
    },
    {
      marca: "nissan",
      codigos: ['13077-00q0a','13077-00q0b','13077-00qag','13077-00qal']
    },
    {
      marca: "nytron",
      codigos: ["7769"]
    },
    {
      marca: "peugeot",
      codigos: ["082986"]
    },
    {
      marca: "renault",
      codigos: ["130701564r",'130705295r','8200035827','8200103069','8200454895','8200704394']
    },
  ],
},
{
  externo: 63,
  interno: 8,
  altura: 24,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['metal'],

  marca: 'zen',
  referencia: '12857',
  imagens: ['zen-12857-1.png','zen-12857-2.png','zen-12857-3.png'],

  descricao: 'STILO/CORSA/MERIVA 1.0/6/8 8V/16V',
  aplicacoes: [
    {
      montadora: 'FIAT',
      modelo: 'Stilo',
      ano: '2002 - 2007',
      complemento: '1.8 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: ' - 2002',
      complemento: '1.0 1.6 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Meriva',
      ano: '',
      complemento: '1.8 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Montana',
      ano: '',
      complemento: '',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Tigra',
      ano: '1998 - 1999',
      complemento: '1.6 16v',
    },
  ],
  referenciasCruzadas: [
    {
      marca: "zen",
      codigos: ['12857']
    },
    {
      marca: "cobra",
      codigos: ['1730']
    },
    {
      marca: "contitech",
      codigos: ['v55312']
    },
    {
      marca: "dayco",
      codigos: ['dyt304']
    },
    {
      marca: "fiat",
      codigos: ['7083385']
    },
    {
      marca: "chevrolet",
      codigos: ['09128739','90412730']
    },
    {
      marca: "nytron",
      codigos: ['2039']
    },
    {
      marca: "ranalle",
      codigos: ['r4353']
    },
    {
      marca: "rolt",
      codigos: ['1512']
    },
    {
      marca: "roltens",
      codigos: ['rt6730']
    },
    {
      marca: "skf",
      codigos: ['vkm25152h']
    },
    {
      marca: "vetor",
      codigos: ['vt7097']
    },
  ],
}, 
{
  externo: 61,
  interno: 0,
  altura: 27,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'mide',
  referencia: 'mdte021',
  imagens: ['mide-mdte021-1.png','mide-mdte021-2.jpg'],

  descricao: 'gol mi 16v',
  aplicacoes: [
    {
      montadora: 'seat',
      modelo: 'Cordoba',
      ano: '2001 - 2003',
      complemento: '1.0 16v AT',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '1997 - 2001',
      complemento: '1.0 16v AT',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Parati',
      ano: '',
      complemento: '1.0 16v AT',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Polo Classic',
      ano: '',
      complemento: '1.0 16v AT',
    },
  ],
  referenciasCruzadas: [
    {marca:"mide",      codigos:["mdte021"]},
    {marca:"contitech", codigos:["v55430"]},
    {marca:"dayco",     codigos:["atb2322"]},
    {marca:"ina",       codigos:["531056430"]},
    {marca:"kit & cia", codigos:["70021-kit"]},
    {marca:"nytron",    codigos:["7743"]},
    {marca:"skf",       codigos:["vkm60003l"]},
  ],
}, 
{
  externo: 55,
  interno: 10,
  altura: 22,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'skf',
  referencia: 'vkm16003h',
  imagens: ['skf-vkm16003h-1.jpg','skf-vkm16003h-2.png'],

  descricao: 'clio/logan 1.6 8v',
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'Clio',
      ano: '1996 - 1999',
      complemento: '1.6 8v motor K7M',
    },
    {
      montadora: 'renault',
      modelo: 'Logan',
      ano: '2007 - 2011',
      complemento: '1.6 8v motor K7M',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '2007 - 2011',
      complemento: '1.6 8v motor K7M',
    },
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '1999 - 2003',
      complemento: '1.6 8v motor K7M',
    },
    {
      montadora: 'renault',
      modelo: 'Megane',
      ano: '1997 - 2001',
      complemento: '1.6 8v motor K7M',
    },
    {
      montadora: 'renault',
      modelo: 'Symbol',
      ano: '2009 - 2011',
      complemento: '1.6 8v motor K7M',
    },
  ], 
  referenciasCruzadas: [
    {marca:"skf",       codigos:["vkm16003h",'antigo vkm4773']},
    {marca:"ina",       codigos:["531081810"]},
    {marca:"nytron",       codigos:["1148"]},
    {marca:"renault",       codigos:['7700273277','8200102612','8200211784']},
  ]
},
{
  externo: 59,
  interno: 0,
  altura: 26,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'skf',
  referencia: 'vkm15202l',
  imagens: ['skf-15202l-1.jpg','skf-15202l-2.jpg'],

  descricao: 'astra/vectra 16v',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'Astra',
      ano: '1998 - 2011',
      complemento: '2.0 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Vectra',
      ano: '1997 - 2020',
      complemento: '2.0 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Vectra',
      ano: '2006 - 2020',
      complemento: '2.4 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Calibra',
      ano: '1993 - 1997',
      complemento: '2.0 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Zafira',
      ano: '2001 - 2012',
      complemento: '2.0 16v',
    },
    
  ],
  referenciasCruzadas: [
    {marca:"skf",   codigos:["vkm15202l"]},
    {marca:"dayco", codigos:["dyt309"]},
    {marca:"gates", codigos:["t43040"]},
    {marca:"gm",    codigos:['43353848','5636738','636726','636737','90411774','90530125','9158004']},
    {marca:"ina",   codigos:["531005430"]},
    {marca:"nytron",codigos:["7797"]},
    {marca:"perfect",codigos:["50312"]},
  ]
},
{
  externo: 61,
  interno: 8,
  altura: 32,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal','plastico'],

  marca: 'zen',
  referencia: '12782',
  imagens: ['zen-12782-1.png','zen-12782-2.png'],

  descricao: 'clio/logan 1.6 16v',
  aplicacoes: [
    {
      montadora: 'nissan',
      modelo: 'Livina',
      ano: '2010 - ',
      complemento: '1.6 16v',
    },
    {
      montadora: 'nissan',
      modelo: 'Platina',
      ano: '',
      complemento: '1.6 K4M',
    },
    {
      montadora: 'renault',
      modelo: 'Citius',
      ano: '',
      complemento: '1.4',
    },
    {
      montadora: 'renault',
      modelo: 'Clio',
      ano: '',
      complemento: '1.4 1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Duster',
      ano: '2012 - ',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Express',
      ano: '',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Fluence',
      ano: '',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Logan',
      ano: '',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Megane',
      ano: '',
      complemento: '1.4 1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '2007 - ',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Scala',
      ano: '',
      complemento: '1.6',
    },
    {
      montadora: 'renault',
      modelo: 'Scenic',
      ano: '',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Symbol',
      ano: '',
      complemento: '1.4 1.6 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",   codigos:["12782"]},
    {marca:"cobra",   codigos:["6017lh"]},
    {marca:"contitech",   codigos:["v55566"]},
    {marca:"dayco",   codigos:["atb2246","dyt330"]},
    {marca:"gueparts",   codigos:["5599"]},
    {marca:"ina",   codigos:['531040930','f550228']},
    {marca:"nissan",   codigos:['1307000qab','130701192r']},
    {marca:"nytron",   codigos:["7759"]},
    {marca:"ranalle",   codigos:["r4619"]},
    {marca:"renault",   codigos:['130701192r','7700108117','8200244615','8200585576']},
    {marca:"rolt",   codigos:["1420"]},
    {marca:"roltens",   codigos:["rt8405"]},
    {marca:"skf",   codigos:["vkm16020l"]},
    {marca:"vetor",   codigos:["vt8099"]},
  ],
},
{
  externo: 72,
  interno: 0,
  altura: 22,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'zen',
  referencia: '12884',
  imagens: ['zen-12884-1.png','zen-12884-2.png'],

  descricao: 'kadett/monza/vectra 1.8/2.0 8v ...95',
  aplicacoes: [
    {
      montadora: 'daewoo',
      modelo: 'Espero',
      ano: '1995 - 1997',
      complemento: '1.8 2.0 8v',
    },
    {
      montadora: 'daewoo',
      modelo: 'Lacetti Kombi',
      ano: '',
      complemento: '1.8',
    },
    {
      montadora: 'daewoo',
      modelo: 'Nexia',
      ano: '1998 - ',
      complemento: '1.8',
    },
    {
      montadora: 'daewoo',
      modelo: 'Nubira',
      ano: '',
      complemento: '1.8',
    },
    {
      montadora: 'daewoo',
      modelo: 'Prince Ace',
      ano: '1994 - 1995',
      complemento: '2.0',
    },
    {
      montadora: 'daewoo',
      modelo: 'Super Salon',
      ano: '1994 - 1995',
      complemento: '2.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Ipanema',
      ano: '1989 - 1995',
      complemento: '1.8 2.0 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Kadett',
      ano: '1989 - 1995',
      complemento: '1.8 2.0 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Monza',
      ano: '1987 - 1995',
      complemento: '1.8 2.0 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Omega',
      ano: '1995',
      complemento: '2.0 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Vectra',
      ano: '1995 - 1996',
      complemento: '2.0 8v',
    },
  ],
  referenciasCruzadas: [
    {marca: "zen", codigos: ["12884"]},
    {marca: "cobra", codigos: ["6006lh"]},
    {marca: "contitech", codigos: ["v59000"]},
    {marca: "daewoo - chevrolet", codigos: ["93202400"]},
    {marca: "dayco", codigos: ['atb2247','dyt312']},
    {marca: "gueparts", codigos: ["5630"]},
    {marca: "ina", codigos: ['531011330','f550461']},
    {marca: "nytron", codigos: ["7790"]},
    {marca: "ranalle", codigos: ["r4300"]},
    {marca: "rolt", codigos: ["1520"]},
    {marca: "roltens", codigos: ["rt6006"]},
    {marca: "skf", codigos: ["vkm6007a"]},
    {marca: "vetor", codigos: ["vt7082"]},
  ],
},
{
  externo: 50,
  interno: 10,
  altura: 22,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'zen',
  referencia: '12817',
  imagens: ['skf-vkm16003h-1.jpg','skf-vkm16003h-2.png'],

  descricao: 'CLIO 1.0 8V',
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'Clio',
      ano: '1998 - 1999',
      complemento: '1.0 8v',
    },
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '1999 - 2005',
      complemento: '1.0 8v',
    },
    {
      montadora: 'renault',
      modelo: 'Megane',
      ano: '1998 - 2000',
      complemento: '1.6 8v Motor K7M',
    },
    {
      montadora: 'renault',
      modelo: 'Twingo',
      ano: '',
      complemento: '8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12817"]},
    {marca:"cobra",codigos:["6085"]},
    {marca:"contitech",codigos:["v55500"]},
    {marca:"dayco",codigos:['atb2091','dyt340']},
    {marca:"gates",codigos:["t41154"]},
    {marca:"gueparts",codigos:["5305"]},
    {marca:"ina",codigos:['531005510','f123958']},
    {marca:"nissan",codigos:["1307700qad"]},
    {marca:"nytron",codigos:["1149"]},
    {marca:"ranalle",codigos:["r4612"]},
    {marca:"renault",codigos:["7700736085"]},
    {marca:"rolt",codigos:["1406"]},
    {marca:"roltens",codigos:["rt8411"]},
    {marca:"ruville",codigos:["55500"]},
    {marca:"skf",codigos:["vkm16000h"]},
    {marca:"vetor",codigos:["vt8102"]},
  ],
},
{
  externo: 60,
  interno: 8,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'zen',
  referencia: '12774',
  imagens: ['zen-12774-1.png','zen-12774-2.png'],

  descricao: 'fire 1.0/1.3 16v',
  aplicacoes: [
    {
      montadora: 'alfa romeo',
      modelo: 'Mito',
      ano: '',
      complemento: '1.4 Turbo T-Jet 16v',
    },
    {
      montadora: 'fiat',
      modelo: '500',
      ano: '',
      complemento: '1.4 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Bravo',
      ano: '2012 - ',
      complemento: '1.4 16v T-Jet',
    },
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '',
      complemento: '1.3 16v / 1.4 16v Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Linea',
      ano: '2009 - ',
      complemento: '1.4 16v T-Jet',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio / Weekend',
      ano: '',
      complemento: '1.0 16v / 1.3 16v Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '',
      complemento: '1.0 16v / 1.3 16v Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Punto',
      ano: '2009 - ',
      complemento: '1.4 16v T-Jet',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12774"]},
    {marca:"cobra",codigos:["4640"]},
    {marca:"dayco",codigos:['atb1002','dyt241']},
    {marca:"fiat",codigos:['04892695ab','46403679','46817666','55248394','73503128','k04892695ab']},
    {marca:"gates",codigos:["t43055"]},
    {marca:"gueparts",codigos:["5582"]},
    {marca:"ina",codigos:["531041430"]},
    {marca:"nytron",codigos:["7742"]},
    {marca:"ranalle",codigos:["r4456"]},
    {marca:"rolt",codigos:["1183"]},
    {marca:"roltens",codigos:["rt6366"]},
    {marca:"skf",codigos:["vkm12201l"]},
    {marca:"vetor",codigos:["vt7063"]},
  ],
},
{
  externo: 63,
  interno: 0,
  altura: 24,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '7786',
  imagens: ['nytron-7786-1.png','nytron-7786-2.png'],

  descricao: 'uno/elba/fiorino',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: '147',
      ano: '1976 - 1986',
      complemento: '1050 8v',
    },
    {
      montadora: 'fiat',
      modelo: '147',
      ano: '1981 - 1983',
      complemento: '1.3 8v (alcool)',
    },
    {
      montadora: 'fiat',
      modelo: 'Elba',
      ano: '1987 - 1991',
      complemento: '1.3 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Oggi',
      ano: '1976 - 1986',
      complemento: '1050 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Oggi',
      ano: '1983 - 1985',
      complemento: '1.3 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Panorama',
      ano: '1976 - 1986',
      complemento: '1050 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Panorama',
      ano: '1981 - 1986',
      complemento: '1.3 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Premio',
      ano: '1986 - 1991',
      complemento: '1.3 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Spazio',
      ano: '1976 - 1986',
      complemento: '1050 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno',
      ano: '1985 - 1993',
      complemento: '1.0 1.5 Fiasa',
    },
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '1987 - 1994',
      complemento: '1.3 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7786"]},
    {marca:"dayco",codigos:["atb2577","antigo dyt232"]},
    {marca:"fiat",codigos:["4427069"]},
    {marca:"gueparts",codigos:["5626"]},
  ],
},
{
  externo: 86,
  interno: 0,
  altura: 30,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'skf',
  referencia: 'vkm14210',
  imagens: ['skf-vkm14210-1.png',"skf-vkm14210-2.png"],

  descricao: 'focus zetec 16v',
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'Escort',
      ano: '1997 - 2003',
      complemento: '1.8 16v Zetec',
    },
    {
      montadora: 'ford',
      modelo: 'Mondeo',
      ano: '1993 - 1996',
      complemento: '1.8 16v Zetec',
    },
    {
      montadora: 'ford',
      modelo: 'Mondeo',
      ano: '1994 - 1998',
      complemento: '2.0 16v Zetec',
    },
  ],
  referenciasCruzadas: [
    {marca:"skf",codigos:["vkm14210"]},
    {marca:"contitech",codigos:["v55249"]},
    {marca:"dayco",codigos:["atb2269"]},
    {marca:"ford",codigos:["6635941",'928m6k254ac','948m6k254ac']},
    {marca:"gates",codigos:["t41008"]},
    {marca:"ina",codigos:["531002110"]},
    {marca:"nytron",codigos:["1258"]},
    {marca:"perfect",codigos:["50287"]},
  ],
},
{
  externo: 60,
  interno: 8,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal','plastico'],

  marca: 'zen',
  referencia: '12881',
  imagens: ['zen-12881-1.png','zen-12881-2.png'],

  descricao: 'palio/strada 1.6 16v',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Brava',
      ano: '1999 - ',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Bravo',
      ano: '',
      complemento: '1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '2002 - ',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Linea',
      ano: '2003 - ',
      complemento: '1.9 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Marea',
      ano: '2006 - ',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio / weekend',
      ano: '1996 - 2003',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '1996 - 2003',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '1996 - 2003',
      complemento: '1.6 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12881"]},
    {marca:"cobra",codigos:["6016lh"]},
    {marca:"contitech",codigos:["V55832"]},
    {marca:"Dayco",codigos:["ATB1006",'DYT240']},
    {marca:"Fiat",codigos:["46416489",'46515744','46742985','46792898','55222606','552249860','71734799']},
    {marca:"Gueparts",codigos:["5557"]},
    {marca:"INA",codigos:["531028010",'F23312701']},
    {marca:"Nytron",codigos:["7724",'7735']},
    {marca:"Ranalle",codigos:["R4425"]},
    {marca:"Rolt",codigos:["1170",'1180']},
    {marca:"Roltens",codigos:["RT6633"]},
    {marca:"SKF",codigos:["VKM12242",'VKM12242L']},
    {marca:"Vetor",codigos:["VT7077"]},
  ],
},
{
  externo: 62,
  interno: 8,
  altura: 26,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'schadek',
  referencia: '30195',
  imagens: ['schadek-30195-1.png','schadek-30195-2.png'],

  descricao: 'fiesta/ecosport sigma',
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'Ecosport',
      ano: '2011 - ',
      complemento: '1.6',
    },
    {
      montadora: 'ford',
      modelo: 'Fiesta',
      ano: '2011 - ',
      complemento: '1.6',
    },
    {
      montadora: 'ford',
      modelo: 'Focus',
      ano: '2011 - ',
      complemento: '1.6',
    },
    {
      montadora: 'ford',
      modelo: 'Ka',
      ano: '2014 - ',
      complemento: '1.6',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30195",'90001535']},
    {marca:"ZEN",codigos:["13286"]},
    {marca:"FORD",codigos:["1361983",'1376164','30750905','5M5G6K254AB','BE826K254A','C40112500']},
    {marca:"NYTRON",codigos:["7699"]},
    {marca:"DAYCO",codigos:["ATB1017"]},
    {marca:"RANALLE",codigos:["R4256"]},
    {marca:"ROLTENS",codigos:["RT6851"]},
    {marca:"INDISA",codigos:["T207699"]},
    {marca:"SKF",codigos:["VKM14224A"]},
  ],
},
{
  externo: 59,
  interno: 0,
  altura: 22,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'continental',
  referencia: 'v55342',
  imagens: ['continental-v55342.jpg'],

  descricao: 'corsa/tigra 1.6 16v',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '.../ 2004',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '.../ 2004',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio Weekend',
      ano: '.../ 2004',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '.../ 2004',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '.../ 2004',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Stilo',
      ano: '.../ 2004',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Stilo',
      ano: '2003 /...',
      complemento: '1.8 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: '1995 / 2002',
      complemento: '1.0 1.6 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: '2002 / 2004',
      complemento: '1.8 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Meriva',
      ano: '2003 / 2004',
      complemento: '1.8 8v 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Tigra',
      ano: '1994 / 1998',
      complemento: '1.6 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"continental",codigos:["v55342"]},
    {marca:"original",codigos:['07.083.589','09.128.516','09.128.656','90.530.126','93.304.891']},
    {marca: 'nytron',codigos: ['7723CP']},
    {marca: 'skf',codigos: ['VKM 15216L']},
  ],
},
{
  externo: 67,
  interno: 0,
  altura: 32,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'zen',
  referencia: '13203',
  imagens: ['zen-13203-1.png','zen-13203-2.png'],

  descricao: 'captur/duster/fluence',
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'Captur',
      ano: '',
      complemento: '2.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Duster',
      ano: '',
      complemento: '2.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Duster Oroch',
      ano: '',
      complemento: '2.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Fluence',
      ano: '',
      complemento: '2.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Laguna',
      ano: '',
      complemento: '2.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Megane',
      ano: '',
      complemento: '2.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '',
      complemento: '2.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Scenic',
      ano: '',
      complemento: '2.0 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13203"]},
    {marca:'cobra',codigos:['6021lh']},
    {marca:'contitech',codigos:['v55555']},
    {marca:'dacia',codigos:['130706246R','130706246T','7700114860R']},
    {marca:'dayco',codigos:['atb2223']},
    {marca:'gueparts',codigos:['5606']},
    {marca:'ina',codigos:['531063030']},
    {marca:'nissan',codigos:[
      '1307000Q0B',
      '1307000Q0C',
      '1307000Q0H',
      '1307000Q1D'
    ]},
    {marca:'nytron',codigos:['7768']},
    {marca:'opel',codigos:[
      '4409959',
      '4430896',
      '4433629',
      '4449588',
      '93160130',
      '93161482',
      '93198125',
      '93198653'
    ]},
    {marca:'ranalle',codigos:['r4616']},
    {marca:'renault',codigos:[
      '7700108920',
      '7700114860',
      '8200045127',
      '8200061345',
      '8200061697',
      '8200086697',
      '8200222092',
      '8200499908',
      '8200499909',
      '8200676403',
      '8200676404',
      '8200989169',
      '8200989172'
    ]},
    {marca:'rolt',codigos:['1423']},
    {marca:'roltens',codigos:['rt8406']},
    {marca:'skf',codigos:['vkm16550a']},
    {marca:'vetor',codigos:['vt8100']},
  ],
},
{
  externo: 56,
  interno: 8,
  altura: 26,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'zen',
  referencia: '13114',
  imagens: ['zen-13114-1.png','zen-13114-2.png'],

  descricao: 'fire 1.4',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: '500',
      ano: '2012 /...',
      complemento: '1.4 Fire e Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '2010 /...',
      complemento: '1.4 Fire e Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '',
      complemento: '1.3 1.4 Fire e Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Grand Siena',
      ano: '2012 /...',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Idea',
      ano: '',
      complemento: '1.4 Fire e Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Mobi',
      ano: '',
      complemento: 'Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '',
      complemento: '1.4 Fire e Evo 1.0 1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '',
      complemento: '1.4 Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '',
      complemento: '1.4 Fire e Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno',
      ano: '',
      complemento: '1.3 Fire e Evo 1.0 1.4',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13114"]},
    {marca:"skf",codigos:["VKM12206H",'vkm4964']},
    {marca:"nytron",codigos:["7704"]},
    {marca:'cobra',codigos:['6887']},
    {marca:'contitech',codigos:['v56015']},
    {marca:'dayco',codigos:['atb2308','dyt090']},
    {marca:'fiat',codigos:['55183497','55224645','55226056']},
    {marca:'gates',codigos:['t43156']},
    {marca:'gueparts',codigos:['5538']},
    {marca:'ina',codigos:['531077810','f574537']},
    {marca:'ranalle',codigos:['r4460']},
    {marca:'rolt',codigos:['1800']},
    {marca:'roltens',codigos:['rt6367']},
    {marca:'vetor',codigos:['vt8220']},
  ],
},
{
  externo: 56,
  interno: 8,
  altura: 26,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'skf',
  referencia: 'vkm12206h',
  imagens: ['zen-13114-1.png','zen-13114-2.png'],

  descricao: 'fire 1.4',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: '500',
      ano: '2009 - ',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '2010 - 2020',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Grand Siena',
      ano: '2012 - ',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Idea',
      ano: '2008 - 2020',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno',
      ano: '2010 - 2020',
      complemento: '1.0 1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '2008 - 2020',
      complemento: '1.4 Fire 1.0 1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '2008 - 2020',
      complemento: '1.4 Fire 1.0 1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '2008 - 2020',
      complemento: '1.4 Fire',
    },
  ],
  referenciasCruzadas: [
    {marca:"skf",codigos:["vkm12206h",'vkm4964']},
    {marca:"zen",codigos:["13114"]},
    {marca:"dayco",codigos:["atb2308"]},
    {marca:"fiat",codigos:["55183497",'55224645','55226056','55233759']},
    {marca:"gates",codigos:["t43156"]},
    {marca:"ina",codigos:["531077810"]},
    {marca:"nytron",codigos:["7704"]},
  ],
},
{
  externo: 82,
  interno: 8,
  altura: 22,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'NYTRON',
  referencia: '7784',
  imagens: ['nytron-7784-1.png','nytron-7784-2.png'],

  descricao: 'MONZA/KADETT/BLAZER',
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'F1000',
      ano: '1993 - 1998',
      complemento: '2.5 8v Turbo Diesel',
    },
    {
      montadora: 'ford',
      modelo: 'Ranger',
      ano: '1998 - 2001',
      complemento: '2.5 Maxion',
    },
    {
      montadora: 'ford',
      modelo: 'Ranger',
      ano: '2002 - 2006',
      complemento: '2.5 8v Turbo Diesel',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Blazer',
      ano: '1994 - 2001',
      complemento: '2.2 EFI / 2.5 8v Turbo Diesel',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Kadett',
      ano: '1989 - 1998',
      complemento: '1.8 2.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Monza',
      ano: '1989 - 1998',
      complemento: '1.8 2.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'S10',
      ano: '1994 - 1998',
      complemento: '2.5 2.5 8v Turbo Diesel',
    },
    {
      montadora: 'chevrolet',
      modelo: 'S10',
      ano: '1996 -',
      complemento: '2.2 EFI',
    },
    {
      montadora: 'mercedes benz',
      modelo: 'Sprinter',
      ano: '1997 -',
      complemento: '310/312/412 2.5',
    },
  ],
  referenciasCruzadas: [
    {marca:"NYTRON",codigos:["7784"]},
    {marca:"cobra",codigos:["8182"]},
    {marca:"contitech",codigos:["v58618"]},
    {marca:"dayco",codigos:["apv2886",'dyv774']},
    {marca:"ford",codigos:["bf5t19w629a",'f87a6a228aa']},
    {marca:"gueparts",codigos:["5624"]},
    {marca:"indisa",codigos:["257784"]},
    {marca:"ranalle",codigos:["r4303"]},
    {marca:"roltens",codigos:["rt6818"]},
    {marca:"schadek",codigos:["30262",'90001602']},
    {marca:"skf",codigos:["vkm60005a"]},
    {marca:"vetor",codigos:["vto6821s1"]},
    {marca:"zen",codigos:["12854"]},
  ],
},
{
  externo: 62,
  interno: 0,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7791',
  imagens: ['nytron-7791-1.png','nytron-7791-2.png'],

  descricao: 'hilux 3.0 05/',
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'HILUX',
      ano: '2005/...',
      complemento: '2.5 D 16V D4D / 3.0 D 16V 1KZ',
    },
    {
      montadora: 'toyota',
      modelo: 'LAND CRUISER',
      ano: '2003/2009',
      complemento: '3.0 D 16V TDI',
    },
    {
      montadora: 'toyota',
      modelo: 'SW4',
      ano: '2005/...',
      complemento: '2.5 D 16V D4D / 3.0 D 16V 1KZ',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7791"]},
    {marca:"schadek",codigos:["30268",'90001608']},
    {marca:'BREDA',codigos:['CR5163']},
    {marca:'COBRA',codigos:['4041']},
    {marca:'CONTITECH',codigos:['V56939']},
    {marca:'DAYCO',codigos:['ATB2266','DYT2266']},
    {marca:'GATES',codigos:['T41183']},
    {marca:'GUEPARTS',codigos:['5713']},
    {marca:'INA',codigos:['531021520']},
    {marca:'INDISA',codigos:['907791']},
    {marca:'RANALLE',codigos:['R4730']},
    {marca:'TOYOTA',codigos:['135050L010','1350567040','1350567041','1350567042']},
    {marca:'ZEN',codigos:['13287']},
  ],
},
{
  externo: 70,
  interno: 10,
  altura: 21,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['metal'],

  marca: 'schadek',
  referencia: '30260',
  imagens: ['schadek-30260-1.png','schadek-30260-2.png'],

  descricao: 'gol ap',
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'Del Rey',
      ano: '1990 - 1997',
      complemento: '1.8 AP',
    },
    {
      montadora: 'ford',
      modelo: 'Escort',
      ano: '1990 - 1996',
      complemento: '1.6 1.8 2.0 AP',
    },
    {
      montadora: 'ford',
      modelo: 'Pampa',
      ano: '1990 - 1997',
      complemento: '1.8 AP',
    },
    {
      montadora: 'ford',
      modelo: 'Royale',
      ano: '1991 - 1996',
      complemento: '1.8 2.0 AP',
    },
    {
      montadora: 'ford',
      modelo: 'Scala',
      ano: '1990 - 1997',
      complemento: '1.8 AP',
    },
    {
      montadora: 'ford',
      modelo: 'Versailles',
      ano: '1990 - 1996',
      complemento: '1.8 2.0 AP',
    },
    {
      montadora: 'seat',
      modelo: 'Cordoba',
      ano: '1994 - 1999',
      complemento: '1.8 AP',
    },
    {
      montadora: 'seat',
      modelo: 'Ibiza',
      ano: '1994 - 1999',
      complemento: '1.8 AP',
    },
    {
      montadora: 'seat',
      modelo: 'Inca',
      ano: '1999 - 2002',
      complemento: '1.6 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '1984 - ',
      complemento: '1.6 1.8 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Golf',
      ano: '1993 - 1997',
      complemento: '1.8 2.0 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Logus',
      ano: '1991 - 1996',
      complemento: '1.6 1.8 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Parati',
      ano: '1984 -',
      complemento: '1.6 1.8 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Passat',
      ano: '1974 - 1989',
      complemento: '1.5 1.6 1.8 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Pointer',
      ano: '1991 - 1996',
      complemento: '1.6 1.8 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Polo Classic',
      ano: '1999 -',
      complemento: '1.8 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Santana',
      ano: '1985 -',
      complemento: '1.8 2.0 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Saveiro',
      ano: '1984 -',
      complemento: '1.6 1.8 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Variant',
      ano: '1984 -',
      complemento: '1.8 AP',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Voyage',
      ano: '1984 -',
      complemento: '1.6 1.8 AP',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30260",'90001600']},
    {marca:"FORD - SEAT - VOLKSWAGEN",codigos:[
      "026109243A",'026109243C','026109243E','026109243F','026109243L','026109246E','26109243'
    ]},
    {marca:"zen",codigos:["12808"]},
    {marca:"NYTRON",codigos:["7782"]},
    {marca:"DAYCO",codigos:["ATB2178",'DYT206']},
    {marca:"RANALLE",codigos:["R4140"]},
    {marca:"ROLTENS",codigos:["RT6243"]},
    {marca:"INDISA",codigos:["T457782"]},
    {marca:"CONTINENTAL",codigos:["V55400"]},
    {marca:"SKF",codigos:["VKM11000H"]},
  ],
},
{
  externo: 61,
  interno: 8,
  altura: 27,
  correia: ['dentada'],
  parede: ['liso','sem-saba'],
  material: ['metal'],

  marca: 'NYTRON',
  referencia: '2035',
  imagens: ['nytron-2035-1.png','nytron-2035-2.png'],

  descricao: 'CRUZE 1.8 16V',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'CRUZE',
      ano: '2012/...',
      complemento: '1.8 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'SONIC',
      ano: '2011/...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'TRACKER',
      ano: '2014/...',
      complemento: '1.8 16V',
    },
  ],
  referenciasCruzadas: [
    {marca:"NYTRON",codigos:["2035"]},
    {marca:'ALFA ROMEO - FIAT',codigos:['71739801']},
    {marca:'BREDA',codigos:['PDI3686']},
    {marca:'CONTITECH',codigos:['V55356']},
    {marca:'DAYCO',codigos:['ATB2342']},
    {marca:'GATES',codigos:['T42151']},
    {marca:'GUEPARTS',codigos:['5193']},
    {marca:'INA',codigos:['532047210']},
    {marca:'OPEL',codigos:['5636978']},
    {marca:'SCHADEK',codigos:['90001504','30164']},
    {marca:'VAUXHALL',codigos:['24436052']},
    {marca:'ZEN',codigos:['13270']},
  ],
},
{
  externo: 59,
  interno: 0,
  altura: 22,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'ina',
  referencia: '5310273300a1',
  imagens: ['ina-5310273300a1-1.png','ina-5310273300a1-2.png'],

  descricao: 'CORSA/MERIVA 1.8 8v',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'Agile',
      ano: '2009 - 2014',
      complemento: '1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Astra',
      ano: '1998 - 2009',
      complemento: '1.8 2.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Celta',
      ano: '2002 - 2015',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: '2002 - 2016',
      complemento: '1.0 1.4 1.8 modelo novo e antigo',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Cobalt',
      ano: '2011 - 2016',
      complemento: '1.4 1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Colorado',
      ano: '2007 - 2012',
      complemento: '2.4 flex',
    },
    {
      montadora: 'chevrolet',
      modelo: 'S10',
      ano: '1995 - 2012',
      complemento: '2.2 2.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Blazer',
      ano: '1995 - 2012',
      complemento: '2.2 2.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Ipanema',
      ano: '1991 - 1997',
      complemento: '1.8 2.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Kadett',
      ano: '1991 - 1997',
      complemento: '1.8 2.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Montana',
      ano: '2003 - 2015',
      complemento: '1.4 1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Monza',
      ano: '1991 - 1996',
      complemento: '2.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Omega / Suprema',
      ano: '1992 - 1995',
      complemento: '2.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Onix / Sedan',
      ano: '2012 - 2019',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Prisma',
      ano: '2006 - 2019',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Spin',
      ano: '2012 - 2016',
      complemento: '1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Vectra',
      ano: '1996 - 2011',
      complemento: '1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Zafira',
      ano: ' - 2008',
      complemento: '2.0',
    },
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: ' - 2010',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Punto',
      ano: ' - 2010',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Idea',
      ano: ' - 2010',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio / Weekend',
      ano: ' - 2010',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: ' - 2010',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Stilo',
      ano: ' - 2010',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: ' - 2010',
      complemento: '1.8',
    },
  ],
  referenciasCruzadas: [
    {marca:"ina",codigos:["5310273300a1"]},
    {marca:"nytron",codigos:["7796"]},
    {marca:"DAEWOO",codigos:["91580003",'9158003']},
    {marca:"FIAT",codigos:['7085784','7086687']},
    {marca:"chevrolet",codigos:["90411769",'90528200','90530124','91580003']},
    {marca:"opel - VAUXHALL",codigos:["5636429",'636727','636738','636746','90411769','90528200','90530124','9158003','91580003']},
  ],
},
{
  externo: 66,
  interno: 8,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'zen',
  referencia: '13239',
  imagens: ['zen-13239-1.png','zen-13239-2.png'],

  descricao: 'cruze/sonic',
  aplicacoes: [
    {
      montadora: 'Alfa Romeo',
      modelo: '159',
      ano: '2005 - 2011',
      complemento: '1.8',
    },
    {
      montadora: 'Fiat',
      modelo: 'Stilo',
      ano: '2005 - 2006',
      complemento: '1.6',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Astra',
      ano: '2006 - 2013',
      complemento: '1.8',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Chevy',
      ano: '',
      complemento: '1.4',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Cruze',
      ano: '',
      complemento: '1.6 1.8',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Optra',
      ano: '',
      complemento: '1.8',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Sail',
      ano: '',
      complemento: '1.4 ',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Sonic',
      ano: '',
      complemento: '1.6',
    },
    {
      montadora: 'Opel',
      modelo: 'Corsa',
      ano: '2006 / 2014',
      complemento: '1.6',
    },
    {
      montadora: 'Opel',
      modelo: 'Meriva',
      ano: '2006 / 2010',
      complemento: '1.6',
    },
    {
      montadora: 'Opel',
      modelo: 'Vectra',
      ano: '2005 / 2008.',
      complemento: '1.6 1.8',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13239"]},
    {marca: 'Cobra', codigos: ['6035LH']},
    {marca: 'Dayco', codigos: ['ATB2506']},
    {marca: 'Gates', codigos: ['T43143']},
    {marca: 'Chevrolet', codigos: [
      '24447794',
      '55555653',
      '55560082',
      '55562217',
      '55562218',
      '55570289',
      '55570290',
      '55574864',
      '5636130',
      '5636131',
      '5636451',
      '5636469',
      '5636486',
      '5636725',
      '636160',
      '636929',
    ]},
    {marca: 'INA', codigos: ['531077910']},
    {marca: 'Ranalle', codigos: ['R4309']},
    {marca: 'Roltens', codigos: ['RT6014']},
    {marca: 'SKF', codigos: ['VKM15260']},
    {marca: 'Vetor', codigos: ['VT8490']},
  ],
},
{
  externo: 60,
  interno: 8,
  altura: 24,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'zen',
  referencia: '12864',
  imagens: ['zen-12864-1.png','zen-12864-2.png'],

  descricao: 'uno/strada/fiorino',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '1994 - 1997',
      complemento: '1.0 1.5 Fiasa',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '1996 - 2002',
      complemento: '1.0 1.5 Fiasa',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '1996 - 2002',
      complemento: '1.0 1.5 Fiasa',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12864"]},
    {marca: 'Cobra', codigos: ['6341']},
    {marca: 'ContiTech', codigos: ['V58620']},
    {marca: 'Fiat', codigos: ['46557953']},
    {marca: 'Gueparts', codigos: ['5565']},
    {marca: 'Nytron', codigos: ['7730']},
    {marca: 'Ranalle', codigos: ['R4428']},
    {marca: 'Rolt', codigos: ['1177']},
    {marca: 'Roltens', codigos: ['RT6635']},
    {marca: 'Vetor', codigos: ['VT7083']},
  ],
},
{
  externo: 60,
  interno: 0,
  altura: 19,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'zen',
  referencia: '13200',
  imagens: ['zen-13200-1.png','zen-13200-2.png'],

  descricao: 'power 16v',
  aplicacoes: [
    {
      montadora: 'seat',
      modelo: 'Cordoba',
      ano: '',
      complemento: '',
    },
    {
      montadora: 'seat',
      modelo: 'Ibiza',
      ano: '',
      complemento: '',
    },
    {
      montadora: 'seat',
      modelo: 'Inca',
      ano: '',
      complemento: '',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Bora',
      ano: '1998 - 2005',
      complemento: '',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Derby',
      ano: '1995 - 2006',
      complemento: '',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '',
      complemento: '1.0 16v Power',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Golf',
      ano: '1997 - 2013',
      complemento: 'IV, V, VI',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Jetta V Combi',
      ano: '2007 - 2009',
      complemento: '',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Novo Fusca',
      ano: '1998 - 2010',
      complemento: '',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Parati',
      ano: '',
      complemento: '1.0 16v Power',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Polo',
      ano: '',
      complemento: '1.6',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13200"]},
    {marca:"cobra",codigos:["6000lh"]},
    {marca:"contitech",codigos:["v55461"]},
    {marca:"dayco",codigos:["atb2277"]},
    {marca:"ina",codigos:["531033910","f23420301"]},
    {marca:"nytron",codigos:["7753"]},
    {marca:"ranalle",codigos:["r4153"]},
    {marca:"rolt",codigos:["1621"]},
    {marca:"roltens",codigos:["rt6000lh"]},
    {marca:"ruville",codigos:["55461"]},
    {marca:"volkswagen",codigos:["036109243ac"]},
    {marca:"seat",codigos:["036109243ac","036109243ae","036109243ag","036109243k","036109243s",]},
    {marca:"skf",codigos:["vkm4762"]},
    {marca:"vetor",codigos:["vt8117"]},
  ],
},
{
  externo: 56,
  interno: 8,
  altura: 26,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7704',
  imagens: ['zen-13114-1.png','zen-13114-2.png'],

  descricao: 'fire 1.4',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: '500',
      ano: '2010 - ',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '2010 - ',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '2014 - ',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Grand Siena',
      ano: '2012 - ',
      complemento: '1.4 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Idea',
      ano: '2008 - ',
      complemento: '1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'Mobi',
      ano: '2016 - ',
      complemento: '1.0 Evo',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '2008 - ',
      complemento: '1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'Punto',
      ano: '2008 - ',
      complemento: '1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '2008 - ',
      complemento: '1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '2008 - ',
      complemento: '1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno',
      ano: '2008 - ',
      complemento: '1.0 1.4 Evo',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7704"]},
    {marca:"bosch",codigos:["1987949958"]},
    {marca:"breda",codigos:["cr1678",'tdi1678']},
    {marca:"cobra",codigos:["6887"]},
    {marca:"contitech",codigos:["v56015"]},
    {marca:"dayco",codigos:["atb2308",'dyt090']},
    {marca:"fiat",codigos:["55183497",'55224645','55233759','552337590']},
    {marca:"ford",codigos:["1535439",'9s516k255aa']},
    {marca:"gates",codigos:["t43156"]},
    {marca:"gueparts",codigos:["5538"]},
    {marca:"ina",codigos:["5210077810"]},
    {marca:"indisa",codigos:["357704"]},
    {marca:"ranalle",codigos:["r4460"]},
    {marca:"roltens",codigos:["rt6367"]},
    {marca:"schadek",codigos:["90001538",'30198']},
    {marca:"skf",codigos:["vkm4964",'VKM12206H']},
    {marca:"vetor",codigos:["vto8220"]},
    {marca:"zen",codigos:["13114"]},
  ],
},
{
  externo: 59,
  interno: 0,
  altura: 22,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7796',
  imagens: ['ina-5310273300a1-1.png','ina-5310273300a1-2.png'],

  descricao: 'CORSA/MERIVA 1.8 8v',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '2004 - ',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Idea',
      ano: '2006 - ',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '2004 - ',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Punto',
      ano: '2008 - ',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '2004 - ',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Stilo',
      ano: '2004 - ',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '2004 - ',
      complemento: '1.8 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Agile',
      ano: '2009 - ',
      complemento: '1.4 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Astra',
      ano: '1994 - 2011',
      complemento: '1.8 2.0 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Blazer',
      ano: '1995 - 2013',
      complemento: '2.2 2.4 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Celta',
      ano: '',
      complemento: '1.0 1.4 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Cobalt',
      ano: '',
      complemento: '1.4 1.8 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: '',
      complemento: '1.0 1.4 1.6 1.8 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Kadett',
      ano: '1996 - 1998',
      complemento: '1.8 2.0 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Meriva',
      ano: '',
      complemento: '1.0 1.4 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Montana',
      ano: '',
      complemento: '1.4 1.8 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Monza',
      ano: '2009 - ',
      complemento: '1.8 2.0 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Omega',
      ano: '',
      complemento: '2.0 2.2 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Onix',
      ano: '',
      complemento: '1.0 1.4 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Prisma',
      ano: '2006 - ',
      complemento: '1.0 1.4 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'S10',
      ano: '',
      complemento: '2.2 2.4 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Spin',
      ano: '',
      complemento: '1.8 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Vectra',
      ano: '',
      complemento: '2.0 2.2 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Zafira',
      ano: '',
      complemento: '2.0 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7796"]},
    {marca:"bosch",codigos:["1987949300"]},
    {marca:"Breda",codigos:["cr1802"]},
    {marca:"cobra",codigos:["6009lh"]},
    {marca:"contitech",codigos:["v55315"]},
    {marca:"daewoo",codigos:["91580003",'9158003']},
    {marca:"dayco",codigos:["atb2216",'antigo dyt303']},
    {marca:"gates",codigos:["t43053"]},
    {marca:"chevrolet",codigos:["93353848"]},
    {marca:"gueparts",codigos:["5636"]},
    {marca:"ina",codigos:["5310273300a1"]},
    {marca:"indisa",codigos:["257796"]},
    {marca:"opel",codigos:["5636429",'636727','636738','636746','9158003']},
    {marca:"ranalle",codigos:["r4305"]},
    {marca:"roltens",codigos:["rt6009"]},
    {marca:"schadek",codigos:["90001613",'30273']},
    {marca:"skf",codigos:["vkm15402l"]},
    {marca:"vouxhall",codigos:["90411769",'90528200','90530124','9158003']},
    {marca:"vetor",codigos:["vto8127"]},
    {marca:"zen",codigos:["12770"]},
  ],
},
{
  externo: 56,
  interno: 8,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'skf',
  referencia: 'vkm12299h',
  imagens: ['skf-vkm1229h-2.jpg','skf-vkm1229h-1.jpg'],

  descricao: 'fire 1.0 8v',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '1985 - 2013',
      complemento: '1.3 8v Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Idea',
      ano: '2005 - 2008',
      complemento: '1.4 8v Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '1996 - 2012',
      complemento: '1.0 1.3 8v Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '1996 - 2013',
      complemento: '1.0 1.3 8v Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '2003 - 2005',
      complemento: '1.3 8v Fire',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno (Mille)',
      ano: ' - 2013',
      complemento: '1.0 1.3 8v Fire',
    },
  ],
  referenciasCruzadas: [
    {marca:"skf",codigos:["vkm12299h"]},
    {marca:"dayco",codigos:["dyt231"]},
    {marca:"fiat",codigos:["46736886",'55183497','55226056']},
    {marca:"gates",codigos:["t42125"]},
    {marca:"ina",codigos:["531081610"]},
    {marca:"nytron",codigos:["7741"]},
    {marca:"perfect",codigos:["50332"]},
  ],
},
{
  externo: 57,
  interno: 30,
  altura: 24,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'skf',
  referencia: 'vkm12200h',
  imagens: ['skf-vkm12200h.jpg'],

  descricao: 'uno/palio mpi',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Elba',
      ano: '1990 - 1996',
      complemento: '1.5 1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '1993 - 2020',
      complemento: '1.0 1.3 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '1996 - 2000',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Prêmio',
      ano: '1990 - 1996',
      complemento: '1.5 1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '1997 - 2000',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '1997 - 2004',
      complemento: '1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Tipo',
      ano: '1993 - 1997',
      complemento: '1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno',
      ano: '1990 - 2001',
      complemento: '1.0 1.4 1.6',
    },
  ],
  referenciasCruzadas: [
    {marca:"skf",codigos:["vkm12200h"]},
    {marca:'Dayco',codigos:['DYT233']},
    {marca:'Fiat',codigos:['50008108','5972277','71740977']},
    {marca:'Gates',codigos:['T 42147']},
    {marca:'INA',codigos:['531 0349 10']},
    {marca:'Nytron',codigos:['7732']},
    {marca:'Perfect',codigos:['50325']},
  ],
},
{
  externo: 59,
  interno: 8,
  altura: 19,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7792',
  imagens: ['nytron-7792-1.png','nytron-7792-2.png'],

  descricao: 'corsa/celta 1.0 8v',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'CELTA',
      ano: '2001/2006',
      complemento: '1.0 1.4 8V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CORSA',
      ano: '1994/...',
      complemento: '1.0 1.4 1.6 8V',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7792"]},
    {marca:'BREDA',codigos:['CR1885']},
    {marca:'COBRA',codigos:['6004LH']},
    {marca:'CONTITECH',codigos:['V55302']},
    {marca:'DAEWOO - chevrolet',codigos:['90353176','90498401','90499401','9202478']},
    {marca:'DAYCO',codigos:['ATB2201','DYT302']},
    {marca:'GATES',codigos:['T43038']},
    {marca:'GUEPARTS',codigos:['5632']},
    {marca:'INA',codigos:['531010130']},
    {marca:'INDISA',codigos:['257792']},
    {marca:'OPEL - VAUXHALL',codigos:['5636721','5636722','636722','636734','636740','636748','636749','90353176','90499101','90499401','90570525','9117695','9192178','9202478']},
    {marca:'RANALLE',codigos:['R4310']},
    {marca:'ROLTENS',codigos:['RT6004']},
    {marca:'SCHADEK',codigos:['90001609','30269']},
    {marca:'SKF',codigos:['VKM 15121 L']},
    {marca:'VETOR',codigos:['VTO 7081']},
    {marca:'ZEN',codigos:['12747']},
  ],
},
{
  externo: 65,
  interno: 0,
  altura: 26,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '1297',
  imagens: ['nytron-1297-1.png','nytron-1297-2.png'],

  descricao: 'strada/punto/doblo etorq',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'ARGO',
      ano: '2016/...',
      complemento: 'E-TORQ',
    },
    {
      montadora: 'fiat',
      modelo: 'IDEA',
      ano: '2011/2016',
      complemento: 'E-TORQ',
    },
    {
      montadora: 'fiat',
      modelo: 'PALIO / WEEKEND',
      ano: '2011/...',
      complemento: 'E-TORQ',
    },
    {
      montadora: 'fiat',
      modelo: 'PUNTO',
      ano: '2011/2017',
      complemento: 'E-TORQ',
    },
    {
      montadora: 'fiat',
      modelo: 'SIENA',
      ano: '',
      complemento: 'E-TORQ',
    },
    {
      montadora: 'fiat',
      modelo: 'STRADA',
      ano: '2012/2017',
      complemento: 'E-TORQ',
    },
    {
      montadora: 'fiat',
      modelo: 'TORO',
      ano: '2016/...',
      complemento: 'E-TORQ',
    },
    {
      montadora: 'JEEP',
      modelo: 'RENEGADE',
      ano: '2016/...',
      complemento: 'E-TORQ',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1297"]},
    {marca:'ALFA ROMEO - FIAT',codigos:['51776566','55193358','71743963']},
    {marca:'BREDA',codigos:['TOA3719']},
    {marca:'CHRYSLER',codigos:['4627091AA']},
    {marca:'CONTITECH',codigos:['V85525']},
    {marca:'DAYCO',codigos:['APV1157']},
    {marca:'GATES',codigos:['T36260']},
    {marca:'GUEPARTS',codigos:['5179']},
    {marca:'INA',codigos:['532050510']},
    {marca:'OPEL',codigos:['1204295','55562251','6340555','6340572']},
    {marca:'SAAB - VAUXHALL',codigos:['55190811','55562251','95511417']},
    {marca:'SCHADEK',codigos:['90001489','30149']},
    {marca:'SUZUKI',codigos:['1753079J60']},
  ],
},
{
  externo: 80,
  interno: 20,
  altura: 24,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'schadek',
  referencia: '30038',
  imagens: ['schadek-30038-1.png','schadek-30038-2.png'],

  descricao: 'palio/brava 1.6 16v',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Brava',
      ano: '',
      complemento: '1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '',
      complemento: '1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '1998 - ',
      complemento: '1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Tipo',
      ano: '1998 - ',
      complemento: '1.6',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno',
      ano: '2002 -',
      complemento: '1.4',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30038",'90001368']},
    {marca:"NYTRON",codigos:["1142"]},
    {marca:"ZEN",codigos:["12861"]},
    {marca:"FIAT",codigos:["46424716",'60811823','60812645','7635678','7641011','7650925','7796283','7797142']},
    {marca:"DAYCO",codigos:["DYV642",'APV1032','APV2142']},
    {marca:"RANALLE",codigos:["R4442"]},
    {marca:"ROLTENS",codigos:["RT6524"]},
    {marca:"INDISA",codigos:["T351142"]},
    {marca:"CONTINENTAL",codigos:["V55860"]},
    {marca:"SKF",codigos:["VKM32009"]},
  ],
},
{
  externo: 70,
  interno: 17,
  altura: 24,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'mide',
  referencia: 'mdpo008',
  imagens: ['mide-mdpo008-1.jpg'],

  descricao: 'gol/corsa',
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'A3',
      ano: '1996 - 2007',
      complemento: '1.6 8v',
    },
    {
      montadora: 'audi',
      modelo: 'A4',
      ano: '2002 - 2006',
      complemento: '3.0 30v V6',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '2000 - 2003',
      complemento: '1.0 16V TURBO',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'Gol',
      ano: '1997 - 2005',
      complemento: '1.0 16V',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'Gol',
      ano: '1997 /...',
      complemento: 'LONGITUDINAL 1.0 8V MT',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'Golf',
      ano: '1998 - 2001',
      complemento: 'EA113 1.6 8V',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'Parati',
      ano: '1997 - 2003',
      complemento: '1.0 16V',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'Parati',
      ano: '2000 - 2005',
      complemento: 'TURBO 1.0 16V',
    },

  ],
  referenciasCruzadas: [
    {marca:"mide",codigos:["mdpo008"]},
    {marca:"nytron",codigos:["1129",'1114']},
    {marca: 'aplic', codigos: ['509']},
    {marca: 'CONTITECH', codigos: ['V85562']},
    {marca: 'DAYCO', codigos: ['APV3077']},
    {marca: 'SKF', codigos: ['VKM4837']},
  ],
},
{
  externo: 56,
  interno: 9,
  altura: 21,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'skf',
  referencia: 'vkm4808',
  imagens: ['skf-vkm4808-1.png','skf-vkm4808-2.png'],

  descricao: 'clio/sandero',
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '2000 - 2007',
      complemento: '1.0 8v 1.6 8/16v',
    },
    {
      montadora: 'renault',
      modelo: 'Logan',
      ano: '2007 - 2020',
      complemento: '1.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '2007 - 2020',
      complemento: '1.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Twingo',
      ano: '1996 - 2001',
      complemento: '1.2 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"skf",codigos:["vkm4808"]},
    {marca:'dayco',codigos:['dyv802']},
    {marca:'gates',codigos:['t39056']},
    {marca:'ina',codigos:['531085410']},
    {marca:'nytron',codigos:['1154']},
    {marca:'renault',codigos:['8200136224']},
  ],
},
{
  externo: 70,
  interno: 17,
  altura: 25,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'zen',
  referencia: '12906',
  imagens: ['zen-12906.png'],

  descricao: 'polo/astra',
  aplicacoes: [
    {
      montadora: 'Audi',
      modelo: 'A3',
      ano: '',
      complemento: '1.6 20V',
    },
    {
      montadora: 'Audi',
      modelo: 'A3',
      ano: '2001...2007',
      complemento: '1.6 8V EA111',
    },
    {
      montadora: 'Audi',
      modelo: 'A3',
      ano: '1997...2006',
      complemento: '1.8 20V',
    },
    {
      montadora: 'Audi',
      modelo: 'A3',
      ano: '1999...2000',
      complemento: '1.8 20V Turbo',
    },
    {
      montadora: 'Audi',
      modelo: 'A3',
      ano: '2007...2008',
      complemento: 'Motor BLR / BLY / BVY / BVZ 2.0 16V TFSI',
    },
    {
      montadora: 'Audi',
      modelo: 'A4',
      ano: '2008...',
      complemento: '2.0 16V FSI/TFSI Motor CAEA/CDNB/CDZA',
    },
    {
      montadora: 'Audi',
      modelo: 'A5',
      ano: '2010...',
      complemento: '2.0 16V FSI',
    },
    {
      montadora: 'Audi',
      modelo: 'Q5',
      ano: '2009...',
      complemento: '2.0 16V FSI',
    },
    {
      montadora: 'Audi',
      modelo: 'S3',
      ano: '1999...2003',
      complemento: '1.8 20V Turbo',
    },
    {
      montadora: 'Audi',
      modelo: 'TT',
      ano: '1998...2006',
      complemento: '1.8 20V Turbo',
    },
    {
      montadora: 'Citroen',
      modelo: 'Berlingo',
      ano: '',
      complemento: '1.8 Com Ar Condicionado',
    },
    {
      montadora: 'Fiat',
      modelo: 'Brava',
      ano: '2000...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'Fiat',
      modelo: 'Bravo',
      ano: '2011...',
      complemento: '1.8 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Doblo',
      ano: '2012...',
      complemento: '1.8 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Grand Siena',
      ano: '2012...',
      complemento: '1.6 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Idea',
      ano: '2011...',
      complemento: '1.6 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Idea',
      ano: '2011...',
      complemento: '1.8 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Linea',
      ano: '2011...',
      complemento: '1.8 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Palio',
      ano: '2000...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'Fiat',
      modelo: 'Palio',
      ano: '2011...',
      complemento: '1.6 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Punto',
      ano: '2011...',
      complemento: '1.6 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Punto',
      ano: '2011...',
      complemento: '1.8 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Siena',
      ano: '2000...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'Fiat',
      modelo: 'Siena',
      ano: '2011...',
      complemento: '1.6 16V Motor E-Torq',
    },
    {
      montadora: 'Fiat',
      modelo: 'Strada',
      ano: '2000...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'Fiat',
      modelo: 'Strada',
      ano: '2011...',
      complemento: '1.6 16V Motor E-Torq',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Astra',
      ano: '1998...2005',
      complemento: '2.0 16V',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Astra',
      ano: '1994...2011',
      complemento: '2.0 8V',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Astra',
      ano: '1998...',
      complemento: 'com DH',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Corsa',
      ano: '1999...',
      complemento: '16V Sem Ar condicionado e Direção Hidráulica',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Vectra',
      ano: '2006...2011',
      complemento: '2.0 8V',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Zafira',
      ano: '2001...2005',
      complemento: '2.0 16V',
    },
    {
      montadora: 'Chevrolet',
      modelo: 'Zafira',
      ano: '1998...',
      complemento: 'com DH',
    },
    {
      montadora: 'Iveco',
      modelo: 'Daily',
      ano: '',
      complemento: '3.0',
    },
    {
      montadora: 'Jeep',
      modelo: 'Renegade',
      ano: '2015...',
      complemento: '1.8 16V',
    },
    {
      montadora: 'Jeep',
      modelo: 'Renegade',
      ano: '',
      complemento: '1.8 16V MT 4X2 E-Torq Evo Nafta',
    },
    {
      montadora: 'Jeep',
      modelo: 'Renegade',
      ano: '',
      complemento: '1.8 16V E-Torq Evo AT Nafta',
    },
    {
      montadora: 'Seat',
      modelo: 'Cordoba',
      ano: '1999...2002',
      complemento: '1.6 8V',
    },
    {
      montadora: 'Seat',
      modelo: 'Cordoba',
      ano: '1999...',
      complemento: '1.8 8V',
    },
    {
      montadora: 'Seat',
      modelo: 'Ibiza',
      ano: '2000...2002',
      complemento: '1.6 8V Motor EA113',
    },
    {
      montadora: 'Seat',
      modelo: 'Ibiza',
      ano: '1999...',
      complemento: '1.8 8V',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Amarok',
      ano: '2010...',
      complemento: '2.0 16V TDI',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Beetle',
      ano: '1998...',
      complemento: '',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Bora',
      ano: '1998...',
      complemento: '',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Bora',
      ano: '1999...2011',
      complemento: '2.0 8V',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Golf',
      ano: '1999...2013',
      complemento: '1.6 8V EA111',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Golf',
      ano: '1998...2009',
      complemento: '1.8 20V Turbo',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Golf',
      ano: '1998...',
      complemento: '2.0',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Golf',
      ano: '1999...2013',
      complemento: '2.0 8V',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'New Beetle',
      ano: '1998...2010',
      complemento: '2.0 8V',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Polo',
      ano: '1998...',
      complemento: '',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Polo',
      ano: '2002...',
      complemento: '2.0 8V',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Polo GTI',
      ano: '2007',
      complemento: '1.8T 20V',
    },
    {
      montadora: 'Volvo',
      modelo: 'C70',
      ano: '1999...2005',
      complemento: '2.0 20V',
    },
    {
      montadora: 'Volvo',
      modelo: 'C70',
      ano: '1998...2005',
      complemento: '2.3 20V',
    },
    {
      montadora: 'Volvo',
      modelo: 'S40',
      ano: '1999...2000',
      complemento: '1.8 16V Motor B4184S2',
    },
    {
      montadora: 'Volvo',
      modelo: 'S40',
      ano: '1997...2000',
      complemento: '1.8 16V Motor B4184S3',
    },
    {
      montadora: 'Volvo',
      modelo: 'S40',
      ano: '1996...2003',
      complemento: '2.0 16V Motor B4204S2',
    },
    {
      montadora: 'Volvo',
      modelo: 'S60',
      ano: '2001...2010',
      complemento: '2.0 2.3 2.4 2.5 20V Turbo',
    },
    {
      montadora: 'Volvo',
      modelo: 'S70',
      ano: '1999...',
      complemento: '2.3 20V Turbo',
    },
    {
      montadora: 'Volvo',
      modelo: 'S70',
      ano: '1999...2000',
      complemento: '2.5 10V',
    },
    {
      montadora: 'Volvo',
      modelo: 'S80',
      ano: '1999...',
      complemento: '2.8 24V',
    },
    {
      montadora: 'Volvo',
      modelo: 'S80',
      ano: '1999',
      complemento: '2.8 24V Turbo',
    },
    {
      montadora: 'Volvo',
      modelo: 'S80',
      ano: '1999',
      complemento: '2.9 24V',
    },
    {
      montadora: 'Volvo',
      modelo: 'V40',
      ano: '1997...2003',
      complemento: '1.8 2.0 16V',
    },
    {
      montadora: 'Volvo',
      modelo: 'V70',
      ano: '1999...2007',
      complemento: '2.3 20V Turbo 2.4 2.5',
    },
    {
      montadora: 'Volvo',
      modelo: 'XC70',
      ano: '2000...2007',
      complemento: '2.4 2.5 3.0 20V',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12906"]},
    {marca:"indisa",codigos:["T201160"]},
    {marca: 'Audi', codigos: [
      '06A903315D',
      '06A903315E',
      '06A903315F',
      '06H903133F',
      '06H903133G',
    ]},
    {marca: 'Citroen', codigos: ['575137']},
    {marca: 'Cobra', codigos: ['LH177024','LH177025','LH177025ES']},
    {marca: 'ContiTech', codigos: ['V85542']},
    {marca: 'Dayco', codigos: [
      'APV2214',
      'APV3080',
      'DYV646',
      'DYV754',
      'DYV776',
    ]},
    {marca: 'Fiat', codigos: ['46537101','55224352','55246632']},
    {marca: 'Gates', codigos: ['T36249']},
    {marca: 'Chevrolet', codigos: ['90412884','90530764']},
    {marca: 'Gueparts', codigos: ['5051']},
    {marca: 'Iveco', codigos: ['504086948']},
    {marca: 'Nytron', codigos: ['1161','1163','1165','1180']},
    {marca: 'Ranalle', codigos: ['R4116','R4123','R4318','R4319','R4447']},
    {marca: 'Rolt', codigos: ['1117','1124','1157','1504']},
    {marca: 'Roltens', codigos: ['RT6024','RT6024FE','RT6025','RT6724','RT6725','RT7076','RT9026']},
    {marca: 'Ruville', codigos: ['55444','55716']},
    {marca: 'Seat', codigos: ['06A903315D','06A903315E','06A903315F']},
    {marca: 'Vetor', codigos: ['VT7030','VT7084']},
    {marca: 'Volkswagen', codigos: [
      '038903315AD',
      '038903315AG',
      '038903315AH',
      '038903315AJ',
      '038903315T',
      '06A903315D',
      '06A903315E',
      '06A903315F',
      '06A903325E',
    ]},
    {marca: 'Volvo', codigos: [
      '30637141',
      '30757057',
      '31251250',
      '9125571',
      '9497331',
    ]},
  ],
},
{
  externo: 60,
  interno: 10,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'authomix',
  referencia: 'ro4251',
  imagens: ['authomix-ro4251-1.png','authomix-ro4251-2.png'],

  descricao: 'zetec 1.8 2.0 16v',
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'Escort',
      ano: '1996 - 2002',
      complemento: '1.8 16v',
    },
    {
      montadora: 'ford',
      modelo: 'Mondeo',
      ano: '1993 - 1998',
      complemento: '1.8 2.0 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"authomix",codigos:["ro4251"]},
    {marca: 'original', codigos: ['928M6M250BC']},
    {marca: 'dayco', codigos: ['ATB2278']},
    {marca: 'ina', codigos: ['5320016100']},
    {marca: 'nytron', codigos: ['1260']},
    {marca: 'skf', codigos: ['VKM24210H']},
  ],
},
{
  externo: 46,
  interno: 10,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'AUTHOMIX',
  referencia: 'RO4250',
  imagens: ['authomix-ro4250-1.png','authomix-ro4250-2.png'],

  descricao: 'zetec 1.8 2.0 16v',
  aplicacoes: [
    {
      montadora: "FORD",
      modelo: " ESCORT ",
      ano: " 1996  -  2002 ",
      complemento: " ZETEC-S   1.8 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " ESCORT ",
      ano: " 1996  -  2002 ",
      complemento: " ZETEC-S   1.8 L 16V SOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " ESCORT ",
      ano: " 1996  -  2002 ",
      complemento: " ZETEC-S   1.8 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " ESCORT ",
      ano: " 1996  -  2002 ",
      complemento: " ZETEC-S   1.8 L 16V SOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " ESCORT ",
      ano: " 1996  -  2002 ",
      complemento: " ZETEC-S   1.8 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " ESCORT ",
      ano: " 1996  -  2002 ",
      complemento: " ZETEC-S   1.8 L 16V SOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " ESCORT ",
      ano: " 1996  -  2002 ",
      complemento: " ZETEC-S   1.8 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " MONDEO ",
      ano: " 1993  -  1996 ",
      complemento: " ZETEC   1.8 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " MONDEO ",
      ano: " 1996  -  1997 ",
      complemento: " ZETEC   1.8 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " MONDEO ",
      ano: " 1993  -  1996 ",
      complemento: " ZETEC   1.8 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " MONDEO ",
      ano: " 1993  -  1996 ",
      complemento: " NGA   2.0 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " MONDEO ",
      ano: " 1993  -  1996 ",
      complemento: " ZETEC-E   2.0 L 16V DOHC L4 "
    },
    {
      montadora: "FORD",
      modelo: " MONDEO ",
      ano: " 1993  -  1996 ",
      complemento: " ZETEC-E   2.0 L 16V DOHC L4 "
    },
  ],
  referenciasCruzadas: [
    {marca:"AUTHOMIX",codigos:["RO4250"]},
    {marca:"CONTITECH",codigos:["V55211"]},
    {marca:"DAYCO",codigos:["ATB2289"]},
    {marca:"GATES",codigos:["T42033"]},
    {marca:"INA",codigos:["5320093100"]},
    {marca:"NYTRON",codigos:["1259"]},
    {marca:"SKF",codigos:["VKM24211H"]},
  ],
},
{
  externo: 53,
  interno: 8,
  altura: 24,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '2040',
  imagens: ['nytron-2040-1.png','nytron-2040-2.png'],

  descricao: 'corsa 16v',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: '1996 /...',
      complemento: '1.0 1.6 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Meriva',
      ano: '2002 /...',
      complemento: '1.8 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Tigra',
      ano: '1998 / 1999',
      complemento: '1.6 16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Stilo',
      ano: '2002 /...',
      complemento: '1.8 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["2040"]},
    {marca:'bosch',codigos:['1987949353']},
    {marca:'breda',codigos:['cr1898']},
    {marca:'cobra',codigos:['1731']},
    {marca:'contitech',codigos:['v55313']},
    {marca:'dayco',codigos:['atb2190','dyt305']},
    {marca:'gates',codigos:['t42076']},
    {marca:'chevrolet',codigos:['90412731','90570913','9128740']},
    {marca:'gueparts',codigos:['5199']},
    {marca:'ina',codigos:['532003410']},
    {marca:'indisa',codigos:['252040']},
    {marca:'opel',codigos:[
      '5636415',
      '5636419',
      '5636427',
      '90411273',
      '904112731',
      '90570913',
      '91128740',
      '9128740'
    ]},
    {marca:'ranalle',codigos:['r4352']},
    {marca:'roltens',codigos:['rt6731']},
    {marca:'schadek',codigos:['90001508','30168']},
    {marca:'skf',codigos:['vkm25150h']},
    {marca:'vauxhall',codigos:['90412731','90570913','9128740']},
    {marca:'vetor',codigos:['vto7096']},
    {marca:'zen',codigos:['12858']},
  ],
},
{
  externo: 56,
  interno: 8,
  altura: 21,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'schadek',
  referencia: '30045',
  imagens: ['schadek-30045-1.png','schadek-30045-2.png'],

  descricao: 'clio/sandero 1.6 16v',
  aplicacoes: [
    {
      montadora: 'peugeot',
      modelo: '206',
      ano: '2001 - 2006',
      complemento: '1.0 16v com D/H',
    },
    {
      montadora: 'renault',
      modelo: 'Clio',
      ano: '2000 -',
      complemento: '1.0',
    },
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '2002 - 2005',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '2007 -',
      complemento: '1.0',
    },
    {
      montadora: 'renault',
      modelo: 'Twingo',
      ano: '1993 - 1999',
      complemento: '1.2 8V - COM A/C E D/H',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30045",'90001375']},
    {marca:"NYTRON",codigos:["1150"]},
    {marca:"ZEN",codigos:["12809"]},
    {marca:"PEUGEOT - RENAULT",codigos:["4003A4",'8200040161','8200041061','8200901288','96411499','9641149980']},
    {marca:"DAYCO",codigos:["APV2164",'DYV800']},
    {marca:"RANALLE",codigos:["R4611"]},
    {marca:"ROLTENS",codigos:["RT8408"]},
    {marca:"INDISA",codigos:["T951150"]},
    {marca:"CONTINENTAL",codigos:["V55578"]},
    {marca:"SKF",codigos:["VKM4807"]},
  ],
},
{
  externo: 62,
  interno: 0,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'schadek',
  referencia: '30268',
  imagens: ['nytron-7791-1.png','nytron-7791-2.png'],

  descricao: 'hilux 3.0 05/',
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'Hilux',
      ano: '2005 - ',
      complemento: '2.5 3.0',
    },
    {
      montadora: 'toyota',
      modelo: 'SW4',
      ano: '2005 - ',
      complemento: '2.5 3.0',
    },
    {
      montadora: 'toyota',
      modelo: 'Land Cruiser',
      ano: '2003 - 2009',
      complemento: '3.0',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30268",'90001608']},
    {marca: 'ZEN', codigos: ['13287']},
    {marca: 'TOYOTA', codigos: ['135050L010','1350567040','1350567041','1350567042']},
    {marca: 'NYTRON', codigos: ['7791']},
    {marca: 'DAYCO', codigos: ['ATB2266']},
    {marca: 'RANALLE', codigos: ['R4730']},
    {marca: 'ROLTENS', codigos: ['RT6413']},
    {marca: 'INDISA', codigos: ['T907791']},
    {marca: 'SKF', codigos: ['VKM71014']},
  ],
},
{
  externo: 80,
  interno: 10,
  altura: 28,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'schadek',
  referencia: '30040',
  imagens: ['schadek-30040-1.png','schadek-30040-2.png'],

  descricao: 'uno/fiorino/strada 96/',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '1998 - 2005',
      complemento: '1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '1999 -',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '2004 -',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '1999 -',
      complemento: '1.0 1.5',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30040",'90001370']},
    {marca:"NYTRON",codigos:["1144"]},
    {marca:"ZEN",codigos:["12763"]},
    {marca:"FIAT",codigos:["46440604"]},
    {marca:"DAYCO",codigos:["DYV641",'APV2157']},
    {marca:"RANALLE",codigos:["R4444"]},
    {marca:"ROLTENS",codigos:["RT6525"]},
    {marca:"INDISA",codigos:["T351144"]},
    {marca:"CONTINENTAL",codigos:["V55846"]},
    {marca:"SKF",codigos:["VKM32005H"]},
  ],
},
{
  externo: 80,
  interno: 10,
  altura: 28,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'NYTRON',
  referencia: '1144',
  imagens: ['schadek-30040-1.png','schadek-30040-2.png'],

  descricao: 'uno/fiorino/strada 96/',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '1998 - 2005',
      complemento: '1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '1999 -',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '2004 -',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '1999 -',
      complemento: '1.0 1.5',
    },
  ],
  referenciasCruzadas: [
    {marca:"NYTRON",codigos:["1144"]},
    {marca:"schadek",codigos:["30040",'90001370']},
    {marca:"ZEN",codigos:["12763"]},
    {marca:"FIAT",codigos:["46440604"]},
    {marca:"DAYCO",codigos:["DYV641",'APV2157']},
    {marca:"RANALLE",codigos:["R4444"]},
    {marca:"ROLTENS",codigos:["RT6525"]},
    {marca:"INDISA",codigos:["T351144"]},
    {marca:"CONTINENTAL",codigos:["V55846"]},
    {marca:"SKF",codigos:["VKM32005H"]},
  ],
},
{
  externo: 70,
  interno: 17,
  altura: 26,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'indisa',
  referencia: 't201160',
  imagens: ['zen-12906.png'],

  descricao: 'fox/polo/onix',
  aplicacoes: [
  {
    montadora: "CHEVROLET", 
    modelo: "COBALT/1.8 AT FLEX (PCD)", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2019/2020" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "COBALT/ELITE", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2017/2019" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "COBALT/LTZ", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2017/2020" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "ONIX/ACTIV", 
    complemento: "1.4 L 8V SOHC L4", 
    ano: "2017/2019" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "ONIX/ADVANTAGE", 
    complemento: "1.4 L 8V SOHC L4", 
    ano: "2018/2019" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "ONIX/EFFECT", 
    complemento: "1.4 L 8V SOHC L4", 
    ano: "2017/2019" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "ONIX/JOY", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2017/2019" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "ONIX/LT", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2017/2019" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "ONIX/LT", 
    complemento: "1.4 L 8V SOHC L4", 
    ano: "2017/2019" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "ONIX/LTZ", 
    complemento: "1.4 L 8V SOHC L4", 
    ano: "2017/2019" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/ACTIV AT", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2017/2018" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/ACTIV7 AT", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2018/2024" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/ADVANTAGE", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2017/2018" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/LS 1.8", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2017/2024" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/LT", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2017/2022" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/LT AT G2", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2017/2018" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/LTZ", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2017/2022" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/PREMIER", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2019/2024" 
  },
  {
    montadora: "CHEVROLET", 
    modelo: "SPIN/PREMIER AT", 
    complemento: "1.8 L 8V SOHC L4", 
    ano: "2019/2024" 
  },
  {
    montadora: "FORD", 
    modelo: "COURIER (C/ DH)", 
    complemento: "1.3 8V ENDURA", 
    ano: "94/99" 
  },
  {
    montadora: "FORD", 
    modelo: "COURIER/L", 
    complemento: "1.3 L 8V SOHC L4", 
    ano: "1997/1999" 
  },
  {
    montadora: "FORD", 
    modelo: "ESCORT", 
    complemento: "1.8 16V ZETEC", 
    ano: "96/02" 
  },
  {
    montadora: "FORD", 
    modelo: "ESCORT/GL", 
    complemento: "1.8 L 16V DOHC L4", 
    ano: "1996/2002" 
  },
  {
    montadora: "FORD", 
    modelo: "ESCORT/GL", 
    complemento: "1.8 L 16V SOHC L4", 
    ano: "1996/2002" 
  },
  {
    montadora: "FORD", 
    modelo: "ESCORT/GL 16V NEW", 
    complemento: "1.8 L 16V DOHC L4", 
    ano: "1996/2002" 
  },
  {
    montadora: "FORD", 
    modelo: "ESCORT/GL NEW", 
    complemento: "1.8 L 16V SOHC L4", 
    ano: "1996/2002" 
  },
  {
    montadora: "FORD", 
    modelo: "ESCORT/GLX", 
    complemento: "1.8 L 16V DOHC L4", 
    ano: "1996/2002" 
  },
  {
    montadora: "FORD", 
    modelo: "ESCORT/GLX NEW", 
    complemento: "1.8 L 16V SOHC L4", 
    ano: "1996/2002" 
  },
  {
    montadora: "FORD", 
    modelo: "ESCORT/RS 16V NEW", 
    complemento: "1.8 L 16V DOHC L4", 
    ano: "1996/2002" 
  },
  {
    montadora: "FORD", 
    modelo: "FIESTA", 
    complemento: "1.0 8V ENDURA", 
    ano: "94/99" 
  },
  {
    montadora: "FORD", 
    modelo: "FIESTA (C/ DH)", 
    complemento: "1.3 8V ENDURA", 
    ano: "94/99" 
  },
  {
    montadora: "FORD", 
    modelo: "FIESTA/CLASS", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "1996/1999" 
  },
  {
    montadora: "FORD", 
    modelo: "FIESTA/CLX", 
    complemento: "1.3 L 8V SOHC L4", 
    ano: "1996/1999" 
  },
  {
    montadora: "FORD", 
    modelo: "FIESTA/GL", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "1996/1999" 
  },
  //FORD: FUSION - 3.0 V6
  {
    montadora: "FORD", 
    modelo: "FUSION/SEL V6", 
    complemento: "3.0 L 24V DOHC V6", 
    ano: "2009/2012" 
  },
  {
    montadora: "FORD", 
    modelo: "KA (C/ AR)", 
    complemento: "1.0 8V ENDURA", 
    ano: "97/99" 
  },
  {
    montadora: "FORD", 
    modelo: "KA/IMAGE", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "1997/1999" 
  },
  {
    montadora: "Chevrolet", 
    modelo: "COBALT", 
    complemento: "1.8 8V", 
    ano: "17/..." 
  },
  {
    montadora: "Chevrolet", 
    modelo: "ONIX", 
    complemento: "1.0 8V", 
    ano: "17/..." 
  },
  {
    montadora: "Chevrolet", 
    modelo: "ONIX", 
    complemento: "1.4 8V", 
    ano: "17/..." 
  },
  {
    montadora: "Chevrolet", 
    modelo: "PRISMA", 
    complemento: "1.8 8V", 
    ano: "17/..." 
  },
  {
    montadora: "Chevrolet", 
    modelo: "SPIN", 
    complemento: "1.8 8V", 
    ano: "17/..." 
  },
  {
    montadora: "SEAT", 
    modelo: "IBIZA", 
    complemento: "1.0 8V", 
    ano: "00/03" 
  },
  {
    montadora: "SEAT", 
    modelo: "IBIZA", 
    complemento: "1.6 8V", 
    ano: "00/03" 
  },
  {
    montadora: "SEAT", 
    modelo: "IBIZA/GLX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2000/2003" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX", 
    complemento: "1.6 8V EA111", 
    ano: "02/..." 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX (S/ AR)", 
    complemento: "1.0 8V EA111", 
    ano: "02/..." 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/BLUEMOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2012/2013" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/CITY", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2003/2005" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/CITY TOTAL FLEX", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2003/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/COMFORTLINE", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2014/2015" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/COMFORTLINE", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2014/2018" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/COMFORTLINE I-MOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2014/2018" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/CONNECT", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2017/2021" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/CONNECT I-MOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2017/2019" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/CROSSFOX TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2005/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/EXTREME", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2008/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/HIGHLINE I-MOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2009/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/I-MOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2009/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/MI", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2003/2004" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/MI TOTAL FLEX", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2003/2005" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/NOVO CROSSFOX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2009/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/NOVO PRIME", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2009/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/NOVO TOTAL FLEX", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2009/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/NOVO TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2009/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/PLUS", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2003/2005" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/PLUS", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2003/2004" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/PLUS", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2008/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/PLUS TOTAL FLEX", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2003/2008" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/PLUS TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2003/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/PLUS TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2013/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/ROCK IN RIO", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2013/2013" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/ROCK IN RIO", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2015/2016" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/ROCK IN RIO TOTALFLEX II", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2009/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/ROUTE", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2008/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/ROUTE TOTAL FLEX", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2005/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/ROUTE TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2005/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/RUN", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2016/2017" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/SELEÇÃO", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2013/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/SELEÇÃO", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2013/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/SELEÇÃO I-MOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2013/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/SPORTLINE", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2003/2004" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/SPORTLINE TOTAL FLEX", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2003/2008" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/SPORTLINE TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2003/2008" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/SUNRISE", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2008/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/TRENDLINE", 
    complemento: "1.0 L 8V SOHC L4", 
    ano: "2014/2015" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/TRENDLINE", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2014/2018" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "FOX/XTREME", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2017/2021" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF", 
    complemento: "1.0 8V EA111", 
    ano: "02/..." 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF", 
    complemento: "1.6 8V EA111", 
    ano: "02/..." 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/BLACK & SILVER", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2007" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/COMFORTLINE", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2007" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/FLASH", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2007" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/FLASH TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2006/2007" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/GENERATION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2007" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/SPORT", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2007" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/SPORTLINE", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2008/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/SPORTLINE TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2007/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/TECH", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2008/2009" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2006/2013" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "GOLF/TRIP", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2007" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO", 
    complemento: "1.0 8V EA111", 
    ano: "02/..." 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO", 
    complemento: "1.6 8V EA111", 
    ano: "02/..." 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/BLUEMOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2010/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/CFL TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2004/2006" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/CITY", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2006" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/COMFORTLINE", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2006" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/E-FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2010/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/EVIDENCE TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2004/2006" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/I-MOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2013/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/MI", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2006" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/MID", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2008/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/NEXT", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2006" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/SPORT", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2002/2006" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/SPORT FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2004/2008" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/SPORT.I-MOTION", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2010/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/SPORTLINE TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2006/2014" 
  },
  {
    montadora: "VOLKSWAGEN", 
    modelo: "POLO/TOTAL FLEX", 
    complemento: "1.6 L 8V SOHC L4", 
    ano: "2004/2014" 
  },
  ],

  referenciasCruzadas: [
    {marca:"indisa",codigos:["t201160"]},
    {marca:"zen",codigos:["12906"]},
  ],
},
{
  externo: 74,
  interno: 0,
  altura: 20,
  correia: ['alternador','polia'],
  parede: ['com-aba','5pk'],
  material: ['plastico'],

  marca: 'zen',
  referencia: '13348',
  imagens: ['zen-13348-1.png','zen-13348-2.png'],

  descricao: 'corsa/celta s/ar',
  aplicacoes: [
    {
      montadora: "Chevrolet",
      modelo: "Agile",
      ano: "2009...",
      complemento: "1.4 8V  Sem Ar Condicionado com Direção Hidráulica"
    },
    {
      montadora: "Chevrolet",
      modelo: "Astra",
      ano: "",
      complemento: "C14NZ Gasolina"
    },
    {
      montadora: "Chevrolet",
      modelo: "Celta",
      ano: "2009...",
      complemento: "1.0 8V Sem Ar Condicionado com Direção Hidráulica"
    },
    {
      montadora: "Chevrolet",
      modelo: "Celta",
      ano: "",
      complemento: "1.4 8V C14SE Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "2009...",
      complemento: "1.0 8V Sem Ar Condicionado com Direção Hidráulica"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "2009...",
      complemento: "1.4 8V Sem Ar Condicionado com Direção Hidráulica"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "",
      complemento: "1.6 8V C16NE SOHC Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "2009...",
      complemento: "1.8 8V Sem Ar Condicionado com Direção Hidráulica"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "",
      complemento: "C16NE SOHC Gasolina"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "",
      complemento: "GL C16N Gasolina"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "",
      complemento: "GLS C16N Gasolina"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "",
      complemento: "L C16N Gasolina"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "",
      complemento: "Power C16N Gasolina"
    },
    {
      montadora: "Chevrolet",
      modelo: "Montana",
      ano: "2009...",
      complemento: "1.4 8V  Sem Ar Condicionado com Direção Hidráulica"
    },
    {
      montadora: "Chevrolet",
      modelo: "Prisma",
      ano: "2009...",
      complemento: "1.0 8V  Sem Ar Condicionado com Direção Hidráulica"
    },
    {
      montadora: "Chevrolet",
      modelo: "Prisma",
      ano: "",
      complemento: "1.4 8V C14SE Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Prisma",
      ano: "2009...",
      complemento: "1.4 8V Sem Ar Condicionado com Direção Hidráulica"
    },
    {
      montadora: "Suzuki",
      modelo: "Fun",
      ano: "",
      complemento: "1.4 8V C14SE Nafta"
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13348"]},
    {marca:"Cobra",codigos:["5286"]},
    {marca:"Chevrolet",codigos:["94702967"]},
    {marca:"Gueparts",codigos:["5011"]},
    {marca:"Nytron",codigos:["1119"]},
    {marca:"Ranalle",codigos:["R4396"]},
    {marca:"Rolt",codigos:["1711"]},
    {marca:"Roltens",codigos:["RT9008"]},
  ],
},
{
  externo: 50,
  interno: 17,
  altura: 23,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '1298',
  imagens: ['nytron-1298-1.png'],

  descricao: 'hb20/picanto 1.0 12v',
  aplicacoes: [
    {
      montadora: 'hyundai',
      modelo: 'HB20',
      ano: '2012/...',
      complemento: '1.0 12V',
    },
    {
      montadora: 'KIA',
      modelo: 'PICANTO',
      ano: '2012/...',
      complemento: '1.0 12V',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1298"]},
    {marca:'GUEPARTS',codigos:['5180']},
    {marca:'HYUNDAI',codigos:['2528604050']},
    {marca:'ORIGINAL',codigos:['25286 04000']},
  ],
},
{
  externo: 61,
  interno: 17,
  altura: 26,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'skf',
  referencia: 'vkm36031',
  imagens: ['zen-12906.png'],

  descricao: 'logan/kangoo 1.6 8v',
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'Clio',
      ano: '1996 - 2009',
      complemento: '1.6 8/16v',
    },
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '1999 - 2000',
      complemento: '1.6 8/16v',
    },
    {
      montadora: 'renault',
      modelo: 'Laguna',
      ano: '1995 - 2003',
      complemento: '2.0 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Logan',
      ano: '2007 - 2020',
      complemento: '1.6 8/16v',
    },
    {
      montadora: 'renault',
      modelo: 'Megane',
      ano: '1996 - 2020',
      complemento: '1.6 8/16v',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '2007 - 2020',
      complemento: '1.6 8/16v',
    },
    {
      montadora: 'renault',
      modelo: 'Scenic',
      ano: '1999 - 2010',
      complemento: '2.0 8v',
    },
    {
      montadora: 'renault',
      modelo: 'Scenic',
      ano: '1999 - 2010',
      complemento: '1.6 16v',
    },
    {
      montadora: 'renault',
      modelo: 'Symbol',
      ano: '2009 - 2020',
      complemento: '1.6 8/16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"skf",codigos:["vkm36031",'VKM 4802']},
    {marca:'Dayco',codigos:['APV2159']},
    {marca:'Gates',codigos:['T36176']},
    {marca:'GM',codigos:['44 10 595','93160256']},
    {marca:'INA',codigos:['532 0243 10']},
    {marca:'Mitsubishi',codigos:['M883834']},
    {marca:'Nissan',codigos:['11925-00QAF','11927-00QAA']},
    {marca:'Nytron',codigos:['1151']},
    {marca:'Renault',codigos:[
      '77 00 102 872',
      '77 00 102 931',
      '77 00 104 092',
      '82 00 104 754',
      '82 00 277 606',
      '82 00 603 359',
      '82 00 905 328',
      '82 00 933 753',
    ]},
    {marca:'Suzuki',codigos:['49170-84A80']},
    {marca:'Volvo',codigos:['30883834']},
  ],
},
{
  externo: 53,
  interno: 17,
  altura: 29,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'gates',
  referencia: 't42140',
  imagens: ['gates-t42140-1.png','gates-t42140-2.png'],

  descricao: 'toro/renegade 2.0 diesel',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Toro',
      ano: '',
      complemento: 'Diesel',
    },
    {
      montadora: 'jeep',
      modelo: 'Commander',
      ano: '',
      complemento: 'Diesel',
    },
    {
      montadora: 'jeep',
      modelo: 'Compass',
      ano: '',
      complemento: 'Diesel',
    },
    {
      montadora: 'jeep',
      modelo: 'Renegade',
      ano: '',
      complemento: 'Diesel',
    },
    {
      montadora: 'ram',
      modelo: 'Rampage',
      ano: '',
      complemento: 'Diesel',
    },
  ],
  referenciasCruzadas: [
    {marca:"gates",codigos:["t42140"]},
  ],
},
{
  externo: 62,
  interno: 0,
  altura: 23,
  correia: ['alternador','polia'],
  parede: ['6pk'],
  material: ['plastico'],

  marca: 'roltens',
  referencia: 'rt6537',
  imagens: ['roltens-rt6537-1.png','roltens-rt6537-2.png'],

  descricao: 'compass/toro diesel',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Toro',
      ano: '2016 - ',
      complemento: '2.0 16v Diesel',
    },
    {
      montadora: 'Jeep',
      modelo: 'Compass',
      ano: '2016 - ',
      complemento: '2.0 16v Diesel',
    },
    {
      montadora: 'Dodge',
      modelo: 'Rampage',
      ano: '2023 - ',
      complemento: '2.0 16v Diesel',
    },
  ],
  referenciasCruzadas: [
    {marca:"roltens",codigos:["rt6537"]},
    {marca:"original",codigos:["51856150"]},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 30,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['ferro'],

  marca: 'zen',
  referencia: '12826',
  imagens: ['zen-12826-1.png','zen-12826-2.png'],

  descricao: 'f250/frontier mwm',
  aplicacoes: [
    {
      montadora: 'agrale',
      modelo: 'Volare',
      ano: '',
      complemento: '',
    },
    {
      montadora: 'ford',
      modelo: 'F250',
      ano: '2000 /...',
      complemento: '4.2 MWM',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Blazer',
      ano: '2000 /...',
      complemento: '2.8 Turbo Diesel',
    },
    {
      montadora: 'chevrolet',
      modelo: 'S10',
      ano: '2000 /...',
      complemento: '2.8 Turbo Diesel',
    },
    {
      montadora: 'nissan',
      modelo: 'Frontier',
      ano: '2002 - 2008',
      complemento: '2.8 MWM Turbo Diesel',
    },
    {
      montadora: 'nissan',
      modelo: 'XTerra',
      ano: '2002 - 2008',
      complemento: '2.8 MWM Turbo Diesel',
    },
    {
      montadora: 'troller',
      modelo: 'T4',
      ano: '2001 - 2005',
      complemento: '2.8 Turbo Diesel',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12826"]},
    {marca: 'agrale', codigos: ['940703800044']},
    {marca: 'cobra', codigos: ['fe177026pp']},
    {marca: 'contitech', codigos: ['v58612']},
    {marca: 'dayco', codigos: ['APV2868','DYV705']},
    {marca: 'ford', codigos: ['BF9T19A216BA']},
    {marca: 'chevrolet', codigos: ['940703800024']},
    {marca: 'gueparts', codigos: ['5019']},
    {marca: 'nissan', codigos: ['940703800024']},
    {marca: 'nytron', codigos: ['1128']},
    {marca: 'ranalle', codigos: ['r4288']},
    {marca: 'rolt', codigos: ['1101']},
    {marca: 'roltens', codigos: ['rt6026cp']},
    {marca: 'skf', codigos: ['vkm4834']},
    {marca: 'troller', codigos: ['940703800024']},
    {marca: 'vetor', codigos: ['vt7001']},
  ],
},
{
  externo: 56,
  interno: 0,
  altura: 25,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'schadek',
  referencia: '30202',
  imagens: ['schadek-30202-1.png','schadek-30202-2.png'],

  descricao: 'POLIA DIRECAO CORSA',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '2003 em diante',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Idea',
      ano: '2006 em diante',
      complemento: '1.8',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30202",'90001542']},
    {marca:"zen",codigos:["12761"]},
    {marca:"fiat",codigos:["55210364"]},
    {marca:"nytron",codigos:["7709"]},
    {marca:"dayco",codigos:["APV2863"]},
    {marca:"ranalle",codigos:["R4390"]},
    {marca:"roltens",codigos:["RT6762"]},
    {marca:"skf",codigos:["VKM4754"]},
  ],
},
{
  externo: 59,
  interno: 8,
  altura: 28,
  correia: ['dentada'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'schadek',
  referencia: '30251',
  imagens: ['skf-vkm16002-1.png','skf-vkm16002-2.jpg'],

  descricao: 'march/206/clio/sandero 1.0 16v',
  aplicacoes: [
    {
      montadora: 'nissan',
      modelo: 'March',
      ano: '2014 /',
      complemento: '1.0',
    },
    {
      montadora: 'peugeot',
      modelo: '206',
      ano: '1999 /',
      complemento: '1.0',
    },
    {
      montadora: 'renault',
      modelo: 'Clio',
      ano: '2000 /',
      complemento: '1.0',
    },
    {
      montadora: 'renault',
      modelo: 'Logan',
      ano: '2007 /',
      complemento: '1.0',
    },
    {
      montadora: 'renault',
      modelo: 'Sandero',
      ano: '2007 /',
      complemento: '1.0',
    },
    {
      montadora: 'renault',
      modelo: 'Kangoo',
      ano: '2002 /',
      complemento: '1.0',
    },
    {
      montadora: 'renault',
      modelo: 'Twingo',
      ano: '1993 - 1999',
      complemento: '1.2 16v motor D4D',
    },
  ],
  referenciasCruzadas: [
    {
      marca: "schadek",
      codigos: ["30251","90001591"]
    },
    {marca: "zen",codigos: ["12783"]},
    {
      marca: "nissan - peugeot - renault",
      codigos: [
        '082986','130701564R','130705295R','1307700Q0A','1307700Q0B','1307700Q0L','1307700QAG','7711115394','8200035827','8200103069','8200454895','8200704394'
      ]},
    {marca: "NYTRON",codigos: ['7769']},
    {marca: "dayco",codigos: ['ATB2219','DYT352']},
    {marca: "RANALLE",codigos: ['R4615']},
    {marca: "ROLTENS",codigos: ['RT8319']},
    {marca: "INDISA",codigos: ['T707769']},
    {marca: "CONTINENTAL",codigos: ['V55572']},
    {marca: "SKF",codigos: ['VKM16002']},
  ],
},
{
  externo: 80.5,
  interno: 17,
  altura: 26,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'zen',
  referencia: '12818',
  imagens: ['zen-12906.png'],

  descricao: 'PALIO/SIENA/FIORINO',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '1997 - 2005',
      complemento: '1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '1998 - 2002',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '1998 - 2002',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '1999 - 2004',
      complemento: '1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno',
      ano: '1999 /...',
      complemento: '1.0 8v 1.3 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12818"]},
    {marca:"nytron",codigos:["1167"]},
    {marca: 'cobra', codigos: ['LH178026']},
    {marca: 'contitech', codigos: ['V58611']},
    {marca: 'dayco', codigos: ['DYV643','APV2860']},
    {marca: 'fiat', codigos: ['46524820']},
    {marca: 'gueparts', codigos: ['5057']},
    {marca: 'ranalle', codigos: ['R4453']},
    {marca: 'rolt', codigos: ['1158']},
    {marca: 'roltens', codigos: ['RT6526']},
    {marca: 'skf', codigos: ['VKM4592']},
    {marca: 'vetor', codigos: ['VT7058']},
  ],
},
{
  externo: 90,
  interno: 0,
  altura: 32,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '1274',
  imagens: ['nytron-1274-1.png','nytron-1274-2.png'],

  descricao: 'blazer/s10',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'Blazer',
      ano: '1995 /...',
      complemento: '2.2 2.4 4.3',
    },
    {
      montadora: 'chevrolet',
      modelo: 'S10',
      ano: '1995 /...',
      complemento: '2.2 2.4 4.3',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1274"]},
    {marca:"dayco",codigos:['apv2905','dyv778']},
    {marca:"chevrolet",codigos:['10327366','12557819']},
    {marca:"gueparts",codigos:['5157']},
  ],
},
{
  externo: 70,
  interno: 12,
  altura: 29,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'roltens',
  referencia: 'rt6410',
  imagens: ['roltens-rt6410-1.png','roltens-rt6410-2.png'],

  descricao: 'hilux 2.8 3.0 05/',
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'Hilux',
      ano: '2006 /...',
      complemento: '2.5 2.7 3.0 16v',
    },
    {
      montadora: 'toyota',
      modelo: 'SW4',
      ano: '2006 /...',
      complemento: '2.7 3.0 16v',
    },
  ],
  referenciasCruzadas: [
    {marca: 'roltens',codigos: ['rt6410']},
    {marca:"original",codigos:["884400K040",'884400K041','8844025070','8844035140']},
    {marca:"nytron",codigos:["2061"]},
    {marca:"skf",codigos:["VKM4940"]},
    {marca:"vetor",codigos:["VT8194"]},
    {marca:"zen",codigos:["12945"]},
  ],
},
{
  externo: 56,
  interno: 8,
  altura: 27,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['plastico','metal'],

  marca: 'zen',
  referencia: '12810',
  imagens: ['zen-12810-1.png','zen-12810-2.png'],

  descricao: 'gol mi 16v',
  aplicacoes: [
    {
      montadora: 'SEAT',
      modelo: 'Ibiza',
      ano: '2001 - 2003',
      complemento: '1.0 16v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '1997 / 2001',
      complemento: '1.0 16v Mi',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Parati',
      ano: '1997 / 2001',
      complemento: '1.0 16v Mi',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Polo',
      ano: '1997 /...',
      complemento: '1.0 16v Mi',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12810"]},
    {marca:"SKF",codigos:["VKM21122H"]},
    {marca:'cobra',codigos:['2180']},
    {marca:'contitech',codigos:['v55431']},
    {marca:'dayco',codigos:['atb2529','dyt204']},
    {marca:'gueparts',codigos:['5225']},
    {marca:'ina',codigos:['532018210','f227244']},
    {marca:'nytron',codigos:['2092']},
    {marca:'ranalle',codigos:['r4145']},
    {marca:'rolt',codigos:['1605']},
    {marca:'roltens',codigos:['rt6180']},
    {marca:'seat',codigos:['036109244']},
    {marca:'skf',codigos:['vkm21122h']},
    {marca:'vetor',codigos:['vt7089']},
    {marca:'volkswagen',codigos:['036109244','036109244g']},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 26,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'schadek',
  referencia: '30069',
  imagens: ['schadek-30069-1.png','schadek-30069-2.png'],

  descricao: 'fiesta/ecosport/courier',
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'Courier',
      ano: '1997 - 2000',
      complemento: '1.3 Endura',
    },
    {
      montadora: 'ford',
      modelo: 'Courier',
      ano: '1997 - 2000',
      complemento: '1.4 Zetec',
    },
    {
      montadora: 'ford',
      modelo: 'Ecosport',
      ano: '2009 -',
      complemento: '1.6',
    },
    {
      montadora: 'ford',
      modelo: 'Escort',
      ano: '1994 - 1999',
      complemento: '1.8 16v',
    },
    {
      montadora: 'ford',
      modelo: 'Fiesta',
      ano: '1996 - 2000',
      complemento: '1.0 1.3 Endura',
    },
    {
      montadora: 'ford',
      modelo: 'Fiesta',
      ano: '1997 - 2000',
      complemento: '1.4 16v Zetec',
    },
    {
      montadora: 'ford',
      modelo: 'Focus',
      ano: '1999 - 2005',
      complemento: '1.8 2.0 16v',
    },
    {
      montadora: 'ford',
      modelo: 'Ka',
      ano: '1997 - 1999',
      complemento: '1.0 1.3 Endura',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30069",'90001400']},
    {marca:"FORD",codigos:["1072321",'1112807','1139951','1763647','7109163','95WF19A216AC','95WF19A216AD','YS4E19A216AA','YS4E19A216AB']},
    {marca:"NYTRON",codigos:["1177"]},
    {marca:"ZEN",codigos:["12897"]},
    {marca:"DAYCO",codigos:["APV2815"]},
    {marca:"RANALLE",codigos:["R4228CP"]},
    {marca:"ROLTENS",codigos:["RT6824"]},
    {marca:"INDISA",codigos:["T201177"]},
    {marca:"SKF",codigos:["VKM4918"]},
  ],
},
{
  externo: 80,
  interno: 12,
  altura: 29,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'roltens',
  referencia: 'rt6411',
  imagens: ['roltens-rt6410-1.png','roltens-rt6410-2.png'],

  descricao: 'hilux 2.8 3.0 05/',
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'Hilux',
      ano: '2005 / 2016',
      complemento: '2.8 3.0',
    },
    {
      montadora: 'toyota',
      modelo: 'SW4',
      ano: '2006 /...',
      complemento: '3.0 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"roltens",codigos:["rt6411"]},
    {marca:"original",codigos:["884400K0170"]},
    {marca:"Nytron",codigos:["2062"]},
    {marca:"Skf",codigos:["VKM4941"]},
    {marca:"Vetor",codigos:["VT8175"]},
    {marca:"Zen",codigos:["12944"]},
  ],
},
{
  externo: 56,
  interno: 0,
  altura: 25,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7795',
  imagens: ['nytron-7795-1.png','nytron-7795-2.png'],

  descricao: 'polia direcao corsa',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'Agile',
      ano: '2009 /...',
      complemento: '1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Astra',
      ano: '1997 /...',
      complemento: '1.8 2.0 8v/16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: '2009 /...',
      complemento: '1.8 (Novo Corsa)',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Meriva',
      ano: '2004 /...',
      complemento: '1.8 8v/16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Montana',
      ano: '2002 /...',
      complemento: '1.8 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Prisma',
      ano: '2004 /...',
      complemento: '1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Spin',
      ano: '2009 /...',
      complemento: '1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Vectra',
      ano: '1997 /...',
      complemento: '2.0 8v/16v',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '2004 /...',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Punto',
      ano: '2008 /...',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '2004 /...',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Stilo',
      ano: '2004 /...',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '2004 /...',
      complemento: '1.8 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7795"]},
    {marca:'cobra',codigos:['9330']},
    {marca:'contitech',codigos:['v58608']},
    {marca:'dayco',codigos:['apv2864','dyv751']},
    {marca:'fiat',codigos:['93302612']},
    {marca:'gueparts',codigos:['5241']},
    {marca:'indisa',codigos:['257795']},
    {marca:'ranalle',codigos:['r4390']},
    {marca:'roltens',codigos:['rt6735']},
    {marca:'schadek',codigos:['90001612','30272']},
    {marca:'vetor',codigos:['vto8058']},
    {marca:'zen',codigos:['12761']},
  ],
},
{
  externo: 74,
  interno: 0,
  altura: 20,
  correia: ['alternador','polia'],
  parede: ['com-aba','5pk'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '1229',
  imagens: ['zen-13348-1.png','zen-13348-2.png'],

  descricao: 'gol/parati/saveiro',
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '',
      complemento: '',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Parati',
      ano: '',
      complemento: '',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Saveiro',
      ano: '',
      complemento: '',
    },
  ],
  referenciasCruzadas: [
    {marca:"NYTRON",codigos:["1229"]},
    {marca:"zen",codigos:["13348"]},
    {marca:"cobra",codigos:["5285"]},
    {marca:"contitech",codigos:["v58642"]},
    {marca:"dayco",codigos:["apv2921",'dyv609']},
    {marca:"gueparts",codigos:["5118"]},
    {marca:"ranalle",codigos:["r4101"]},
    {marca:"roltens",codigos:["rt7629"]},
    {marca:"vetor",codigos:["vto8114"]},
    {marca:"volkswagen",codigos:['0281452991','5x0145285']},
    {marca:"zen",codigos:["12927"]},
  ],
},
{
  externo: 76,
  interno: 17,
  altura: 31,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'schadek',
  referencia: '30014',
  imagens: ['schadek-30014-1.png','schadek-30014-2.png'],

  descricao: 's10/gol/hb20',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'Blazer',
      ano: '2000 - ',
      complemento: '2.2 2.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'S10',
      ano: '2000 - ',
      complemento: '2.2 2.4',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Gol',
      ano: '1993',
      complemento: '1.0 8v',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Saveiro',
      ano: '1993 - 1996',
      complemento: '1.6 8v',
    },
    {
      montadora: 'Volkswagen',
      modelo: 'Voyage',
      ano: '1993 - 1996',
      complemento: '1.6 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30014",'90001343']},
    {marca:"VOLKSWAGEN",codigos:["068145299RS",'377145299B']},
    {marca:"NYTRON",codigos:["1111"]},
    {marca:"ZEN",codigos:["12776"]},
    {marca:"CHEVROLET",codigos:["92082702",'93258289','94722019']},
    {marca:"DAYCO",codigos:["APV2922"]},
    {marca:"RANALLE",codigos:["R4117"]},
    {marca:"ROLTENS",codigos:["RT7530"]},
    {marca:"INDISA",codigos:["T251111"]},
    {marca:"CONTINENTAL",codigos:["V58613"]},
    {marca:"SKF",codigos:["VKM4901"]},
  ],
},
{
  externo: 53,
  interno: 8,
  altura: 28,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '2041',
  imagens: ['nytron-2040-1.png','nytron-2040-2.png'],

  descricao: 'vectra 16v',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'CALIBRA',
      ano: '1994/1996',
      complemento: '2.0 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'VECTRA',
      ano: '1994/1998',
      complemento: '2.0 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'VECTRA',
      ano: '1998/2005',
      complemento: '2.2 16V',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["2041"]},
    {marca:'BOSCH',codigos:['1987949351']},
    {marca:'BREDA',codigos:['CR1801','PDI1801']},
    {marca:'COBRA',codigos:['1782']},
    {marca:'CONTITECH',codigos:['V55314']},
    {marca:'DAYCO',codigos:['ATB2207','DYT308']},
    {marca:'GATES',codigos:['T42084']},
    {marca:'INA',codigos:['532003910']},
    {marca:'OPEL',codigos:['5636425','636415','90411782','9128738','93307189']},
    {marca:'RANALLE',codigos:['R4354']},
    {marca:'ROLTENS',codigos:['RT6782']},
    {marca:'SCHADEK',codigos:['90001509','30169']},
    {marca:'SKF',codigos:['VKM 25212 H']},
    {marca:'VAUXHALL',codigos:['90411782']},
    {marca:'VETOR',codigos:['VTO 7098']},
    {marca:'ZEN',codigos:['12859']},
  ],
},
{
  externo: 70,
  interno: 17,
  altura: 26,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'zen',
  referencia: '13177',
  imagens: ['zen-12906.png'],

  descricao: 'corola/sprinter',
  aplicacoes: [
    {
      montadora: 'bmw',
      modelo: '540 / 740 / x5',
      ano: '',
      complemento: '4.4 32v V8',
    },
    {
      montadora: 'jeep',
      modelo: 'Grand Cherokee',
      ano: '',
      complemento: '2.7 10v Diesel',
    },
    {
      montadora: 'Mercedes Benz',
      modelo: 'Accelo 715C',
      ano: '',
      complemento: '',
    },
    {
      montadora: 'Mercedes Benz',
      modelo: 'Sprinter',
      ano: '2001 - 2012',
      complemento: '',
    },
    {
      montadora: 'Toyota',
      modelo: 'Corola',
      ano: '2000 / 2010',
      complemento: '1.6 16v',
    },
    {
      montadora: 'Toyota',
      modelo: 'Corola',
      ano: '2003 /...',
      complemento: '1.8 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13177"]},
    {marca:"nytron",codigos:["1188",'1313']},
    {marca:"bmw",codigos:['11281433502','11287503424','11287515865']},
    {marca:"jeep",codigos:['68001798AB']},
    {marca:"Mercedes Benz",codigos:['6112000270','6112000370', '6112000470','6112000570','6462000270']},
    {marca:"original",codigos:[
      '11281.247.647',
      '11281.427.252',
      '11281.432.104',
      '11281.433.571', 
      '11281.735.899',
      '11281.784.832'
    ]},
  ],
},
{
  externo: 80.5,
  interno: 17,
  altura: 26,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '1167',
  imagens: ['zen-12906.png'],

  descricao: 'palio/siena/fiorino',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Fiorino',
      ano: '1997 - 2005',
      complemento: '1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '1998 - 2002',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '1998 - 2002',
      complemento: '1.0 1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '1999 - 2004',
      complemento: '1.5',
    },
    {
      montadora: 'fiat',
      modelo: 'Uno',
      ano: '1999 /...',
      complemento: '1.0 8v 1.3 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1167"]},
    {marca:"zen",codigos:["12818"]},
    {marca: 'cobra', codigos: ['LH178026']},
    {marca: 'contitech', codigos: ['V58611']},
    {marca: 'dayco', codigos: ['DYV643','APV2860']},
    {marca: 'fiat', codigos: ['46524820']},
    {marca: 'gueparts', codigos: ['5057']},
    {marca: 'ranalle', codigos: ['R4453']},
    {marca: 'rolt', codigos: ['1158']},
    {marca: 'roltens', codigos: ['RT6526']},
    {marca: 'skf', codigos: ['VKM4592']},
    {marca: 'vetor', codigos: ['VT7058']},
  ],
},
{
  externo: 77,
  interno: 17,
  altura: 23,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '1178',
  imagens: ['zen-12906.png'],

  descricao: 'corsa/meriva/stilo',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'stilo',
      ano: '2002 /...',
      complemento: '1.8 8/16v 2.4 20v',
    },
    {
      montadora: 'fiat',
      modelo: 'Astra',
      ano: '2002 /...',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Cobalt',
      ano: '2012 /...',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Corsa',
      ano: '2002 /...',
      complemento: '1.0 1.4 1.8 (Corsão)',
    },
    {
      montadora: 'fiat',
      modelo: 'Meriva',
      ano: '2002 /...',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Spin',
      ano: '2005 /...',
      complemento: '1.8',
    },
    {
      montadora: 'fiat',
      modelo: 'Montana',
      ano: '2002 /...',
      complemento: '1.8',
    },
    {
      montadora: 'mercedes benz',
      modelo: 'A160 / A190',
      ano: '',
      complemento: '1.6 1.9',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1178"]},
    {marca: 'breda', codigos: ['cr3324']},
    {marca: 'cobra', codigos: ['lh177622']},
    {marca: 'contitech', codigos: ['v85547']},
    {marca: 'dayco', codigos: ['apv2085','dyv766']},
    {marca: 'gates', codigos: ['t36183']},
    {marca: 'gueparts', codigos: ['5068']},
    {marca: 'ina', codigos: ['531067730']},
    {marca: 'indisa', codigos: ['351178']},
    {marca: 'mercedes benz', codigos: ['1662020219','1662020519','1662020619','2662550619','6682020219']},
    {marca: 'ranalle', codigos: ['r4325']},
    {marca: 'roltens', codigos: ['rt6622']},
    {marca: 'schadek', codigos: ['90001401','30070']},
    {marca: 'skf', codigos: ['vkm4810']},
    {marca: 'vetor', codigos: ['vto7017']},
    {marca: 'zen', codigos: ['12896']},
  ],
},
{
  externo: 76,
  interno: 17,
  altura: 25,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '1115',
  imagens: ['schadek-30014-1.png','schadek-30014-2.png'],

  descricao: 'fiesta/ecosport',
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'Ecosport',
      ano: '2003 / 2006',
      complemento: '1.0 Supercharger',
    },
    {
      montadora: 'ford',
      modelo: 'Fiesta',
      ano: '2003 / 2006',
      complemento: '1.0 Supercharger',
    },
    {
      montadora: 'honda',
      modelo: 'City',
      ano: '2010 /...',
      complemento: '1.5 16v',
    },
    {
      montadora: 'honda',
      modelo: 'Fit',
      ano: '2009 /...',
      complemento: '1.4 1.5 16v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1115"]},
    {marca: 'cobra', codigos: ['fe177025']},
    {marca: 'contitech', codigos: ['v58637']},
    {marca: 'dayco', codigos: ['apv2867','dyv703']},
    {marca: 'ford', codigos: ['zn1u10k018ba']},
    {marca: 'gueparts', codigos: ['5007']},
    {marca: 'honda', codigos: ['31170rb0j01','38942phm004','38942pwa004']},
    {marca: 'indisa', codigos: ['201115']},
    {marca: 'ranalle', codigos: ['r4228']},
    {marca: 'roltens', codigos: ['rt6819']},
    {marca: 'schadek', codigos: ['90001348','30018']},
    {marca: 'vetor', codigos: ['vto8035']},
    {marca: 'zen', codigos: ['12853']},
  ],
},
{
  externo: 76,
  interno: 17,
  altura: 24,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '1152',
  imagens: ['mide-mdpo008-1.jpg'],

  descricao: 'gol mi 16v',
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '1997 /...',
      complemento: '1.0 8/16v Mi e Power',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Parati',
      ano: '1997 /...',
      complemento: '1.0 8/16v Mi e Power',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1152"]},
    {marca: 'cobra', codigos: ['fe177624']},
    {marca: 'contitech', codigos: ['v58609']},
    {marca: 'dayco', codigos: ['apv2917','dyv602']},
    {marca: 'gueparts', codigos: ['5043']},
    {marca: 'ina', codigos: ['f567276']},
    {marca: 'indisa', codigos: ['451152']},
    {marca: 'ranalle', codigos: ['r4112']},
    {marca: 'roltens', codigos: ['rt6027']},
    {marca: 'skf', codigos: ['vkm4838']},
    {marca: 'vetor', codigos: ['vto7087']},
    {marca: 'zen', codigos: ['13290']},
  ],
},
{
  externo: 65,
  interno: 8,
  altura: 24,
  correia: ['alternador','polia'],
  parede: ['liso','com-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7794',
  imagens: ['nytron-7794-1.png','nytron-7794-2.png'],

  descricao: 'polia direcao corsa 1.8',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: '2002 /...',
      complemento: '1.8 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Meriva',
      ano: '2002 /...',
      complemento: '1.8 8v 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Montana',
      ano: '2002 /...',
      complemento: '1.8 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7794"]},
    {marca:"Cobra",codigos:["7256"]},
    {marca:"contitech",codigos:["v58626"]},
    {marca:"dayco",codigos:["apv2890",'dyv752']},
    {marca:"chevrolet",codigos:["93304691",'93397256']},
    {marca:"gueparts",codigos:["5640"]},
    {marca:"ranalle",codigos:["r4398"]},
    {marca:"roltens",codigos:["rt7256"]},
    {marca:"schadek",codigos:["30271",'90001611']},
    {marca:"vetor",codigos:["vto8055"]},
    {marca:"zen",codigos:["13056"]},
  ],
},
{
  externo: 70,
  interno: 17,
  altura: 24,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'schadek',
  referencia: '30054',
  imagens: ['zen-12906.png'],

  descricao: 'polo/astra',
  aplicacoes: [
    {
      montadora: "Audi",
      modelo: "A3",
      ano: "1999 - 2000",
      complemento: "1.6 8V"
    },
    {
      montadora: "Audi",
      modelo: "A3",
      ano: "1999 - 2000",
      complemento: "1.8 20V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Astra",
      ano: "1998 - EM DIANTE",
      complemento: "2.0 "
    },
    {
      montadora: "Chevrolet",
      modelo: "Zafira",
      ano: "1998 - EM DIANTE",
      complemento: "2.0 "
    },
    {
      montadora: "Seat",
      modelo: "Cordoba",
      ano: "1998 - EM DIANTE",
      complemento: "1.8 "
    },
    {
      montadora: "Seat",
      modelo: "Ibiza",
      ano: "1998 - EM DIANTE",
      complemento: "1.8 "
    },
    {
      montadora: "Volkswagen",
      modelo: "Bora",
      ano: "1998 - EM DIANTE",
      complemento: "2.0 "
    },
    {
      montadora: "Volkswagen",
      modelo: "Golf",
      ano: "1998 - EM DIANTE",
      complemento: "1.8 "
    },
    {
      montadora: "Volkswagen",
      modelo: "Golf",
      ano: "1998 - EM DIANTE",
      complemento: "2.0 "
    },
    {
      montadora: "Volkswagen",
      modelo: "New Beetle",
      ano: "1998 - EM DIANTE",
      complemento: "2.0 "
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: "1998 - EM DIANTE",
      complemento: "2.0 "
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30054",'90001385']},
    {marca:"AUDI - CHEVROLET - SEAT - VOLKSWAGEN",codigos:["06A903315D","06A903315E","06A903325E","55224352","90530764"]},
    {marca:"CONTINENTAL",codigos:["V85542"]},
    {marca:"DAYCO",codigos:["APV2241","APV3080","DYV754"]},
    {marca:"INDISA",codigos:["T451161"]},
    {marca:"NYTRON",codigos:["1161"]},
    {marca:"RANALLE",codigos:["R4319"]},
    {marca:"ROLTENS",codigos:["RT6724"]},
    {marca:"SKF",codigos:["VKM4909"]},
    {marca:"ZEN",codigos:["12906"]},
  ],
},
{
  externo: 74,
  interno: 8,
  altura: 23,
  correia: ['alternador','polia'],
  parede: ['6pk'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '1223',
  imagens: ['nytron-1223-1.png','nytron-1223-2.png'],

  descricao: 'corsa/celta c/ar',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'CELTA',
      ano: '2001/2016',
      complemento: '1.0 1.4 C/AR',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CORSA',
      ano: '1994/2002',
      complemento: '1.0 1.4 C/AR',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CORSA',
      ano: '2002/...',
      complemento: '1.6 C/AR',
    },
    {
      montadora: 'chevrolet',
      modelo: 'OMEGA',
      ano: '2002/...',
      complemento: '3.0 12V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'PRISMA',
      ano: '2006/...',
      complemento: '1.0 1.4 C/AR',
    },

  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1223"]},
    {marca:'BREDA',codigos:['CR1487']},
    {marca:'COBRA',codigos:['LH088030']},
    {marca:'CONTITECH',codigos:['V55318']},
    {marca:'DAYCO',codigos:['APV2122','DYV750']},
    {marca:'chevrolet - OPEL - SAAB - VAUXHALL',codigos:['1340513','1340535','90409238']},
    {marca:'GUEPARTS',codigos:['5111']},
    {marca:'INA',codigos:['532010910']},
    {marca:'INDISA',codigos:['251223']},
    {marca:'RANALLE',codigos:['R4392']},
    {marca:'ROLTENS',codigos:['RT6798']},
    {marca:'SCHADEK',codigos:['90001437','30097']},
    {marca:'SKF',codigos:['VKM 35002 L']},
    {marca:'VETOR',codigos:['VTO 7090']},
    {marca:'ZEN',codigos:['12765']},
  ],
},
{
  externo: 70,
  interno: 17,
  altura: 25,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '1129',
  imagens: ['mide-mdpo008-1.jpg'],

  descricao: 'gol/corsa',
  aplicacoes: [
    {
      montadora: 'AGRALE',
      modelo: 'VOLARE',
      ano: '',
      complemento: '2.8 TURBO DIESEL - 4CILS. MWM SPRINT',
    },
    {
      montadora: 'AGRALE',
      modelo: 'VOLARE',
      ano: '',
      complemento: '4.0 MWM SPRINT',
    },
    {
      montadora: 'FIAT',
      modelo: 'DUCATO',
      ano: '1999/...',
      complemento: '2.8 DIESEL',
    },
    {
      montadora: 'FORD',
      modelo: 'ESCORT',
      ano: '1996/2002',
      complemento: '1.8 16V ZETEC',
    },
    {
      montadora: 'FORD',
      modelo: 'F-250',
      ano: '2000/...',
      complemento: '6.0 MWM / 4.2 MWM',
    },
    {
      montadora: 'FORD',
      modelo: 'F-350',
      ano: '2000/...',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'FORD',
      modelo: 'F-4000',
      ano: '2000/...',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'FORD',
      modelo: 'RANGER',
      ano: '2000/...',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'chevrolet',
      modelo: 'AGILE',
      ano: '2010/2014',
      complemento: '1.4 8V C/AR',
    },
    {
      montadora: 'chevrolet',
      modelo: 'ASTRA',
      ano: '1998/2011',
      complemento: '1.8 2.0 8/16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'BLAZER',
      ano: '2001/...',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CALIBRA',
      ano: '1993/...',
      complemento: '2.0 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CELTA',
      ano: '2000/...',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CORSA',
      ano: '1994/...',
      complemento: '1.0 1.4 1.6 1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'MONTANA (NOVA)',
      ano: '2011/...',
      complemento: '1.4 8V S/AR C/DH',
    },
    {
      montadora: 'chevrolet',
      modelo: 'OMEGA',
      ano: '1994/2006',
      complemento: '2.2 8V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'ONIX',
      ano: '2012/...',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'PRISMA',
      ano: '2001/2016',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'S10',
      ano: '2001/...',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'chevrolet',
      modelo: 'VECTRA',
      ano: '1996/...',
      complemento: '2.0 2.2 2.4 8/16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'ZAFIRA',
      ano: '1999/2012',
      complemento: '2.0 8/v16',
    },
    {
      montadora: 'nissan',
      modelo: 'FRONTIER',
      ano: '2001/...',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'nissan',
      modelo: 'XTERRA',
      ano: '2001/...',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'TROLLER',
      modelo: 'T-4',
      ano: '2001/...',
      complemento: '2.8 TURBO DIESEL',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1129",'1114']},
    {marca:"mide",codigos:['MDPO008']},
    {marca:'COBRA',codigos:['FE177026']},
    {marca:'CONTITECH',codigos:['V85588']},
    {marca:'DAYCO',codigos:['APV2856','DYV700']},
    {marca:'GUEPARTS',codigos:['5020']},
    {marca:'INA',codigos:['F575833']},
    {marca:'INDISA',codigos:['201129']},
    {marca:'RANALLE',codigos:['R4229']},
    {marca:'ROLTENS',codigos:['RT6026']},
    {marca:'SKF',codigos:['VKM 60001 A']},
    {marca:'VETOR',codigos:['VTO 7080']},
    {marca:'ZEN',codigos:['13212']},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 25,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '1128',
  imagens: ['nytron-1128-1.png','nytron-1128-2.png'],

  descricao: 'gol/corsa/s10',
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'F-250',
      ano: '2002/2008',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'NISSAN',
      modelo: 'FRONTIER',
      ano: '2002/2008',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'NISSAN',
      modelo: 'XTERRA',
      ano: '2002/2008',
      complemento: '2.8 TURBO DIESEL',
    },
    {
      montadora: 'TROLLER',
      modelo: 'T-4',
      ano: '2001/2005',
      complemento: '2.8 TURBO DIESEL',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1128"]},
    {marca: 'COBRA', codigos: ['FE177026PP']},
    {marca: 'CONTITECH', codigos: ['V58612']},
    {marca: 'DAYCO', codigos: ['APV2868','DYV705']},
    {marca: 'FORD', codigos: ['BF9T19A216BA']},
    {marca: 'GUEPARTS', codigos: ['5019']},
    {marca: 'RANALLE', codigos: ['R4288']},
    {marca: 'ROLTENS', codigos: ['RT6026CP']},
    {marca: 'SKF', codigos: ['VKM 4834']},
    {marca: 'VETOR', codigos: ['VTO 7001']},
    {marca: 'ZEN', codigos: ['12826']},
  ],
},
{
  externo: 70.5,
  interno: 17,
  altura: 26,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '1165',
  imagens: ['zen-12906.png'],

  descricao: 'palio/doblo 1.6 16v 00/',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'BRAVA',
      ano: '2000/...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'fiat',
      modelo: 'DOBLO',
      ano: '2000/...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'fiat',
      modelo: 'MAREA',
      ano: '2000/...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'fiat',
      modelo: 'PALIO',
      ano: '2000/...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'fiat',
      modelo: 'SIENA',
      ano: '2000/...',
      complemento: '1.6 16V',
    },
    {
      montadora: 'fiat',
      modelo: 'STRADA',
      ano: '2000/...',
      complemento: '1.6 16V',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1165"]},
    {marca: 'BREDA', codigos: ['CR1480P']},
    {marca: 'CHRYSLER', codigos: ['04792835AA','04891720AA','53013928AA','68061368AA']},
    {marca: 'COBRA', codigos: ['LH177024']},
    {marca: 'CONTITECH', codigos: ['V85542']},
    {marca: 'DAYCO', codigos: ['APV2214','DYV646']},
    {marca: 'FIAT', codigos: ['46537101']},
    {marca: 'GATES', codigos: ['T36249']},
    {marca: 'GUEPARTS', codigos: ['5055']},
    {marca: 'INA', codigos: ['531 0760 10','532043610']},
    {marca: 'INDISA', codigos: ['351165']},
    {marca: 'LADA', codigos: ['1041056100','2123104105610']},
    {marca: 'LANCIA', codigos: ['46537101']},
    {marca: 'RANALLE', codigos: ['R4318']},
    {marca: 'ROLTENS', codigos: ['RT6024']},
    {marca: 'SCHADEK', codigos: ['90001389','30058','90001403','30072']},
    {marca: 'TATA MOTORS', codigos: ['279023120142']},
    {marca: 'VETOR', codigos: ['VTO7030']},
  ],
},
{
  externo: 70,
  interno: 17,
  altura: 25,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '1114',
  imagens: ['mide-mdpo008-1.jpg'],

  descricao: 'gol/corsa',
  aplicacoes: [
    {
      montadora: 'AUDI',
      modelo: 'A3',
      ano: '2000/...',
      complemento: '1.6 8V C/ ACD E C/ DH',
    },
    {
      montadora: 'volkswagen',
      modelo: 'FOX',
      ano: '2002/...',
      complemento: '1.6 8V (EA111)',
    },
    {
      montadora: 'volkswagen',
      modelo: 'GOL',
      ano: '1996/2002',
      complemento: '1.0 8/16v',
    },
    {
      montadora: 'volkswagen',
      modelo: 'GOLF',
      ano: '2002/...',
      complemento: '1.6 8V (EA111)',
    },
    {
      montadora: 'volkswagen',
      modelo: 'PARATI',
      ano: '1997/2003',
      complemento: '1.0 16V',
    },
    {
      montadora: 'volkswagen',
      modelo: 'POLO',
      ano: '2002/...',
      complemento: '1.6 8V (EA111)',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1129",'1114']},
    {marca:"mide",codigos:['MDPO008']},
    {marca: 'COBRA', codigos: ['FE177024']},
    {marca: 'DAYCO', codigos: ['APV3077','DYV600']},
    {marca: 'GUEPARTS', codigos: ['5006']},
    {marca: 'INDISA', codigos: ['451114']},
    {marca: 'RANALLE', codigos: ['R4114']},
    {marca: 'ROLTENS', codigos: ['RT7023']},
    {marca: 'ZEN', codigos: ['13381']},
  ],
},
{
  externo: 66,
  interno: 17,
  altura: 24,
  correia: ['alternador','polia'],
  parede: ['liso','sem-aba'],
  material: ['plastico'],

  marca: 'nytron',
  referencia: '1143',
  imagens: ['zen-12906.png'],

  descricao: 'fire',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: '500',
      ano: '1999/2004',
      complemento: '1.4 16V',
    },
    {
      montadora: 'fiat',
      modelo: '500 ABARTH',
      ano: '2012/...',
      complemento: '1.4 16V TURBO',
    },
    {
      montadora: 'fiat',
      modelo: '500 C/ AR E DH',
      ano: '2012/2017',
      complemento: '1.4 8V EVO',
    },
    {
      montadora: 'fiat',
      modelo: 'BRAVO T-JET',
      ano: '2014/...',
      complemento: '1.4 16V',
    },
    {
      montadora: 'fiat',
      modelo: 'DOBLO C/ AR E DH',
      ano: '2012/...',
      complemento: '1.3 16V FIRE',
    },
    {
      montadora: 'fiat',
      modelo: 'DOBLO C/ AR E DH',
      ano: '1999/2004',
      complemento: '1.4 8V FIRE',
    },
    {
      montadora: 'fiat',
      modelo: 'FIORINO C/ AR E DH',
      ano: '2010/...',
      complemento: '1.3 8V FIRE',
    },
    {
      montadora: 'fiat',
      modelo: 'FIORINO C/ AR E DH',
      ano: '2002/...',
      complemento: '1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'GRAND SIENA C/ AR E DH',
      ano: '2014/...',
      complemento: '1.4 8V EVO',
    },
    {
      montadora: 'fiat',
      modelo: 'IDEA C/ AR E DH',
      ano: '2012/...',
      complemento: '1.4 8V FIRE',
    },
    {
      montadora: 'fiat',
      modelo: 'LINEA T-JET',
      ano: '2005/2010',
      complemento: '1.4 16V TURBO',
    },
    {
      montadora: 'fiat',
      modelo: 'MOBI C/ AR E DH',
      ano: '2009/...',
      complemento: '1.0 8V EVO',
    },
    {
      montadora: 'fiat',
      modelo: 'PALIO',
      ano: '',
      complemento: '1.0 1.3 1.4 8/16V',
    },
    {
      montadora: 'fiat',
      modelo: 'PUNTO T-JET',
      ano: '2009/2016',
      complemento: '1.4 16V TURBO',
    },
    {
      montadora: 'fiat',
      modelo: 'SIENA',
      ano: '',
      complemento: '1.0 1.3 1.4 8/16V',
    },
    {
      montadora: 'fiat',
      modelo: 'STRADA',
      ano: '',
      complemento: '1.3 1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'UNO',
      ano: '2002/...',
      complemento: '1.0 1.4 8V FIRE',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1143"]},
    {marca: 'COBRA', codigos: ['LH176523']},
    {marca: 'CONTITECH', codigos: ['V55889']},
    {marca: 'DAYCO', codigos: ['APV1068']},
    {marca: 'FIAT', codigos: ['46756937','55204392']},
    {marca: 'GATES', codigos: ['T36082']},
    {marca: 'GUEPARTS', codigos: ['5035']},
    {marca: 'INA', codigos: ['532029710']},
    {marca: 'INDISA', codigos: ['351143']},
    {marca: 'RANALLE', codigos: ['R4445']},
    {marca: 'ROLTENS', codigos: ['RT6523']},
    {marca: 'SCHADEK', codigos: ['90001369','30039','90001681','30341']},
    {marca: 'SKF', codigos: ['VKM 4806']},
    {marca: 'VETOR', codigos: ['VTO 7061']},
    {marca: 'ZEN', codigos: ['12762']},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 25,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7816',
  imagens: ['nytron-7816-1.png','nytron-7816-2.png','nytron-7816-3.png'],

  descricao: 'CORSA/astra',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'VECTRA',
      ano: '2006/2011',
      complemento: '2.0 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'VECTRA',
      ano: '2005/...',
      complemento: '2.4 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'VECTRA COM ALTER. 120 AMP',
      ano: '1996/1997',
      complemento: '2.0 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'ZAFIRA',
      ano: '2001/2005',
      complemento: '2.0 16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'ZAFIRA COM ALTER 120 AMP',
      ano: '2001/2012',
      complemento: '2.0 8V',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7816",'1129']},
    {marca:'COBRA',codigos:['5229']},
    {marca:'CONTITECH',codigos:['V85544']},
    {marca:'ORIGINAL',codigos:['90.502.129','93.375.464']},
    {marca:'RANALLE',codigos:['R4320']},
    {marca:'ROLTENS',codigos:['RT7129']},
    {marca:'VETOR',codigos:['VTO8048']},
    {marca:'ZEN',codigos:['12928']},
  ],
},
{
  externo: 76,
  interno: 0,
  altura: 31,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7801',
  imagens: ['nytron-7801-1.png','nytron-7801-2.png'],
  tituloImg: 'As duas polias tem a mesma medida',

  descricao: 'gol ap',
  aplicacoes: [
    {
      montadora: 'FORD',
      modelo: 'ROYALLE',
      ano: '1996/...',
      complemento: '1.8 2.0 8V AP C/ACD',
    },
    {
      montadora: 'FORD',
      modelo: 'VERSAILLES',
      ano: '1996/...',
      complemento: '1.8 2.0 8V AP C/ACD',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'GOL',
      ano: '1996/...',
      complemento: '1.8 2.0 8V AP C/ACD',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'PARATI',
      ano: '1996/...',
      complemento: '1.8 2.0 8V AP C/ACD',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'SANTANA',
      ano: '1996/...',
      complemento: '1.8 2.0 8V AP C/ACD',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'SAVEIRO',
      ano: '1996/...',
      complemento: '1.8 2.0 8V AP C/ACD',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7801",'1112']},
    {marca:'COBRA',codigos:['9701']},
    {marca:'CONTITECH',codigos:['V55792']},
    {marca:'DAYCO',codigos:['APV2715','DYV601']},
    {marca:'GATES',codigos:['38389']},
    {marca:'GUEPARTS',codigos:['5642']},
    {marca:'INA',codigos:['F559583']},
    {marca:'INDISA',codigos:['457801']},
    {marca:'RANALLE',codigos:['R4110']},
    {marca:'ROLTENS',codigos:['RT7001']},
    {marca:'SCHADEK',codigos:['90001617','30277']},
    {marca:'SKF',codigos:['VKM 60008 L']},
    {marca:'VETOR',codigos:['VTO 8000']},
    {marca:'VOLKSWAGEN',codigos:['377260299']},
    {marca:'ZEN',codigos:['12784']},
  ],
},
{
  /* falta colocar a polia 6pk 
    76 externo
    22 altura
    0 interno
  */
  externo: 76,
  interno: 0,
  altura: 31,
  correia: ['alternador','tensor'],
  parede: ['liso', '6pk'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7802',
  imagens: ['nytron-7802-1.png','nytron-7802-2.png'],
  tituloImg: `
    polia lisa 76ext-31alt / 
polia 6pk 76ext-22alt
  `,

  descricao: 'gol ap',
  aplicacoes: [
    {
      montadora: 'FORD',
      modelo: 'ROYALLE',
      ano: '1996/...',
      complemento: '1.8 2.0 8V S/AR',
    },
    {
      montadora: 'FORD',
      modelo: 'VERSAILLES',
      ano: '1995/1997',
      complemento: '1.8 2.0 8V S/AR',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'GOL',
      ano: '1994/...',
      complemento: '1.8 2.0 8V S/AR',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'PARATI',
      ano: '1994/...',
      complemento: '1.8 2.0 8V S/AR',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'SANTANA',
      ano: '1996/...',
      complemento: '1.8 2.0 8V S/AR',
    },
    {
      montadora: 'VOLKSWAGEN',
      modelo: 'SAVEIRO',
      ano: '1996/...',
      complemento: '1.8 2.0 8V S/AR',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7802",'1113']},
    {marca:'COBRA',codigos:['9702']},
    {marca:'CONTITECH',codigos:['V55791']},
    {marca:'DAYCO',codigos:['APV2919','DYV604']},
    {marca:'GUEPARTS',codigos:['5643']},
    {marca:'INA',codigos:['F559584']},
    {marca:'INDISA',codigos:['457802']},
    {marca:'RANALLE',codigos:['R4115']},
    {marca:'ROLTENS',codigos:['RT7002']},
    {marca:'SCHADEK',codigos:['90001346','30016','90001618','30278']},
    {marca:'SKF',codigos:['VKM 60009 L']},
    {marca:'VETOR',codigos:['VTO 8001']},
    {marca:'VOLKSWAGEN',codigos:['377145299']},
    {marca:'ZEN',codigos:['12785']},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 26,
  correia: ['alternador','tensor'],
  parede: ['liso'],
  material: ['plastico','metal'],

  marca: 'zen',
  referencia: '13444',
  imagens: ['zen-13444-1.png','zen-13444-2.png'],

  descricao: 'fox/polo/golf',
  aplicacoes: [
    {
      montadora: "Seat",
      modelo: "Ibiza",
      ano: "2000...2003",
      complemento: "1.0 16VCom Direção hidraulica e sem Ar Condicionado"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "",
      complemento: "1.6 16V MSI EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "2005...2008",
      complemento: "1.6 8V  Com Direção hidraulica e sem Ar Condicionado"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "",
      complemento: "1.6 8V EA111 BAH/CFZ Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "",
      complemento: "1.6L CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "",
      complemento: "EA111 BAH/CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "2004...2008",
      complemento: "1.0 8V  Com Direção hidraulica e sem Ar Condicionado"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "",
      complemento: "1.6 16V MSI EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "2004...2008",
      complemento: "1.6 8V Com Direção hidraulica e sem Ar Condicionado"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "",
      complemento: "1.6 8V EA111 BAH/CFZ Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "",
      complemento: "1.6 8V MSI EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "",
      complemento: "Xtreme CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "2008",
      complemento: "1.0 8V Com Direção hidraulica e sem Ar Condicionado"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "",
      complemento: "1.0 MI EA111 AFZ Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "",
      complemento: "1.4 8V MI EA111 CNBA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "2008",
      complemento: "1.6 8V Com Direção hidraulica e sem Ar Condicionado"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Trend",
      ano: "",
      complemento: "1.6 8V EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Trend",
      ano: "",
      complemento: "1.6 8V MSI AT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Trend",
      ano: "",
      complemento: "1.6 8V MSI EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Trend",
      ano: "",
      complemento: "CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Golf",
      ano: "1999...2013",
      complemento: "1.6 8V Com Direção hidraulica e sem Ar Condicionado Motor EA111"
    },
    {
      montadora: "Volkswagen",
      modelo: "Golf",
      ano: "",
      complemento: "1.6 8V EA111 BAH Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: "2002...2014",
      complemento: "1.6 8V  Com Direção Elétro Hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: "",
      complemento: "1.6 MSI AT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: "",
      complemento: "1.6 MSI MT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Saveiro",
      ano: "",
      complemento: "1.6 8V EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Space Fox",
      ano: "2004...2008",
      complemento: "1.6 8V Sem Ar Condicionado com Direção hidraulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran",
      ano: "",
      complemento: "1.6 16V MSI EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran",
      ano: "",
      complemento: "1.6 16V MSI I-Motion EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran",
      ano: "",
      complemento: "1.6 8V EA111 BAH/CFZ Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran",
      ano: "",
      complemento: "1.6 8V MSI EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran Cross",
      ano: "",
      complemento: "1.6 8V EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "T-Cross",
      ano: "",
      complemento: "1.6L 110 CV AT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "T-Cross",
      ano: "",
      complemento: "1.6L 110 CV MT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "T-Cross",
      ano: "",
      complemento: "Trendline EA111 CWSA Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Virtus",
      ano: "",
      complemento: "1.6 16V MSI AT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Virtus",
      ano: "",
      complemento: "1.6 16V MSI MT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Voyage",
      ano: "",
      complemento: "1.6 8V EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Voyage",
      ano: "",
      complemento: "1.6 8V MSI EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Voyage",
      ano: "",
      complemento: "1.6 EA111 CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Voyage",
      ano: "",
      complemento: "1.6 EA111 CFZA Gasolina"
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13444"]},
    {marca:"Cobra",codigos:["7765"]},
    {marca:"Dayco",codigos:["APV2306"]},
    {marca:"Gates",codigos:["T38214"]},
    {marca:"INA",codigos:["534012320"]},
    {marca:"Nytron",codigos:["7799"]},
    {marca:"Ranalle",codigos:["R4103"]},
    {marca:"Rolt",codigos:["1624"]},
    {marca:"Roltens",codigos:["RT7531"]},
    {marca:"Seat",codigos:["030145299C","030145299F"]},
    {marca:"SKF",codigos:["VKM31015"]},
    {marca:"Vetor",codigos:["VT8109"]},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 25,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7817',
  imagens: ['nytron-7817-1.png','nytron-7817-2.png','nytron-7817-3.png'],

  descricao: 'corsa/celta 95/',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'AGILE',
      ano: '2010/2014',
      complemento: '1.4 8V C/AR',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CELTA',
      ano: '2001/2016',
      complemento: '1.0 1.4 8V S/AR C/DH',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CORSA',
      ano: '2002/2008',
      complemento: '1.0 1.4 8V S/AR C/DH',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CORSA',
      ano: '1996/...',
      complemento: '1.6 8V S/AR C/DH',
    },
    {
      montadora: 'chevrolet',
      modelo: 'MONTANA (NOVA)',
      ano: '2011/...',
      complemento: '1.4 8V S/AR C/DH',
    },
    {
      montadora: 'chevrolet',
      modelo: 'ONIX',
      ano: '2013/...',
      complemento: '1.0 1.4 8V C/AR S/DH',
    },
    {
      montadora: 'chevrolet',
      modelo: 'PRISMA',
      ano: '2001/2016',
      complemento: '1.0 1.4 8V C/AR S/DH',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7817",'1129']},
    {marca:'DAYCO',codigos:['APV2296','DYV757']},
    {marca:'GATES',codigos:['T38213']},
    {marca:'chevrolet - OPEL',codigos:['1340533','90411025']},
    {marca:'INA',codigos:['534010230']},
    {marca:'SCHADEK',codigos:['90001633','30293']},
    {marca:'VAUXHALL',codigos:['90411025']},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 24,
  correia: ['alternador','tensor'],
  parede: ['liso','com-aba'],
  material: ['metal'],

  marca: 'NYTRON',
  referencia: '7813',
  imagens: ['nytron-7813-1.png','nytron-7813-2.png','nytron-7813-3.png'],

  descricao: 'CORSA/STRADA/IDEA 1.8',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'Doblo',
      ano: '2004 /...',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Idea',
      ano: '2006 / 2010',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Palio',
      ano: '2003 / 2010',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Punto',
      ano: '2008 / 2010',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Siena',
      ano: '2003 / 2010',
      complemento: '1.8 8v',
    },
    {
      montadora: 'fiat',
      modelo: 'Strada',
      ano: '2003 / 2010',
      complemento: '1.8 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7813",'1133 (refil)']},
    {marca:'COBRA',codigos:['5519']},
    {marca:'DAYCO',codigos:['APV2862','DYV654']},
    {marca:'FIAT',codigos:['55193730']},
    {marca:'RANALLE',codigos:['R4462']},
    {marca:'ROLTENS',codigos:['RT6764']},
    {marca:'VETOR',codigos:['VTO 7052']},
    {marca:'ZEN',codigos:['13159']},
  ],
},
{
  externo: 70,
  interno: 17,
  altura: 22,
  correia: ['alternador','polia'],
  parede: ['liso','com-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '1139',
  imagens: ['nytron-1139.png'],

  descricao: 'gol/corsa',
  aplicacoes: [
    {
      montadora: 'FIAT',
      modelo: 'MAREA',
      ano: '1998/...',
      complemento: '2.0 20V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'AGILE',
      ano: '2010/2014',
      complemento: '1.4 8V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CELTA',
      ano: '2001/...',
      complemento: '1.0 8V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'COBALT',
      ano: '2012/...',
      complemento: '1.4 1.8 8V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CORSA',
      ano: '1998/...',
      complemento: '1.0 1.4 1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'MERIVA',
      ano: '2002/...',
      complemento: '1.4 1.8 8/16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'MONTANA',
      ano: '2002/...',
      complemento: '1.8 8V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'ONIX',
      ano: '2012/...',
      complemento: '1.0 1.4 8V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'PRISMA',
      ano: '2006/...',
      complemento: '1.0 1.4 8V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'SPIN',
      ano: '2012/...',
      complemento: '1.8',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["1139"]},
    {marca:'COBRA',codigos:['FE177725']},
    {marca:'CONTITECH',codigos:['V58625']},
    {marca:'DAYCO',codigos:['APV2892','DYV755']},
    {marca:'GUEPARTS',codigos:['5031']},
    {marca:'INDISA',codigos:['251139']},
    {marca:'RANALLE',codigos:['R4316']},
    {marca:'ROLTENS',codigos:['RT6729']},
    {marca:'SKF',codigos:['VKM 4794']},
    {marca:'VETOR',codigos:['VTO 8062']},
    {marca:'ZEN',codigos:['13175']},
  ],
},
{
  externo: 70.5,
  interno: 0,
  altura: 24,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'schadek',
  referencia: '30376',
  imagens: ['schadek-30376-1.png','schadek-30376-2.png'],

  descricao: 'palio/punto/strada etorq',
  aplicacoes: [
    {
      montadora: "Fiat",
      modelo: "Idea",
      ano: "2010 /...",
      complemento: "1.6 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Idea",
      ano: "2010 /...",
      complemento: "1.8 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Palio",
      ano: "2010 /...",
      complemento: "1.6 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Palio",
      ano: "2010 /...",
      complemento: "1.8 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Punto",
      ano: "2010 /...",
      complemento: "1.6 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Punto",
      ano: "2010 /...",
      complemento: "1.8 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Siena",
      ano: "2010 /...",
      complemento: "1.6 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Siena",
      ano: "2010 /...",
      complemento: "1.8 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Strada",
      ano: "2010 /...",
      complemento: "1.6 Etorq"
    },
    {
      montadora: "Fiat",
      modelo: "Strada",
      ano: "2010 /...",
      complemento: "1.8 Etorq"
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30376",'90001820']},
    {marca:"FIAT",codigos:["55224352"]},
    {marca:"RANALLE",codigos:["R4464"]},
    {marca:"ROLTENS",codigos:["RT6774"]},
    {marca:"SKF",codigos:["VKM32081A"]},
    {marca:"ZEN",codigos:["13400"]},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 24,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'zen',
  referencia: '13251',
  imagens: ['zen-13251-1.png','zen-13251-2.png'],

  descricao: 'golf/a3',
  aplicacoes: [
    {
      montadora: "Audi",
      modelo: "A3",
      ano: "1996...2007",
      complemento: "1.6 8V"
    },
    {
      montadora: "Volkswagen",
      modelo: "Golf",
      ano: "1998...2001",
      complemento: "1.6 8V  Motor EA113"
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13251"]},
    {marca:"Audi",codigos:["032145299A"]},
    {marca:"Cobra",codigos:["3214"]},
    {marca:"Dayco",codigos:["APV2320","DYV613"]},
    {marca:"Gates",codigos:["T38232"]},
    {marca:"INA",codigos:["534013830"]},
    {marca:"Nytron",codigos:["7806"]},
    {marca:"Ranalle",codigos:["R4126"]},
    {marca:"Rolt",codigos:["1123"]},
    {marca:"Roltens",codigos:["RT7027"]},
    {marca:"Ruville",codigos:["55738"]},
    {marca:"Vetor",codigos:["VT7027"]},
  ],
},
{
  externo: 66,
  interno: 0,
  altura: 23,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'nytron',
  referencia: '7785',
  imagens: ['nytron-7785-1.png','nytron-7785-2.png'],
  alerta: 'A polia desse tensor está medindo 66mm (ext) \n\nMas no catálogo da Nytron e equivalentes como Zen, a polia é para ser 80mm \n\nA ZEN-12818 e a NYTRON-1167 são o refil desse tensor',

  descricao: 'palio/siena/strada',
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'FIORINO',
      ano: '1997/1999',
      complemento: '1.5 8V',
    },
    {
      montadora: 'fiat',
      modelo: 'PALIO',
      ano: '1997/1999',
      complemento: '1.0 8V',
    },
    {
      montadora: 'fiat',
      modelo: 'SIENA',
      ano: '1997/1999',
      complemento: '1.5 8V',
    },
    {
      montadora: 'fiat',
      modelo: 'STRADA',
      ano: '1997/1999',
      complemento: '1.5 8V',
    },
    {
      montadora: 'fiat',
      modelo: 'UNO',
      ano: '1997/1999',
      complemento: '1.0 1.3 8V',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7785",'1167 (refil)']},
    {marca:'DAYCO',codigos:['APV3037','DYV661']},
    {marca:'GUEPARTS',codigos:['5625']},
    {marca:'ZEN',codigos:['13280','12818 (refil)']},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 24.5,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7815',
  imagens: ['nytron-7816-1.png','nytron-7816-2.png','nytron-7816-3.png'],

  descricao: 'CORSA/astra',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'Astra',
      ano: '1998 - 2011',
      complemento: '1.8 2.0 8/16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Calibra',
      ano: '1993 - 1997',
      complemento: '2.0 16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Celta',
      ano: '2001 - 2016',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Corsa',
      ano: '1994 /...',
      complemento: '1.0 1.4 1.6 1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Omega',
      ano: '1994 - 2006',
      complemento: '1.8 2.0 8/16v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Onix',
      ano: '2012 /...',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Prisma',
      ano: '2009 - 2013',
      complemento: '1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Vectra',
      ano: '1996 /...',
      complemento: '2.0 2.2 8v',
    },
    {
      montadora: 'chevrolet',
      modelo: 'Zafira',
      ano: '1999 - 2012',
      complemento: '2.0 8v',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7815",'1129']},
    {marca:'chevrolet - opel',codigos:[
      '96435137',
      '96435138',
      '1340534',
      '1340541',
      '1340542',
      '1340544',
      '24412292',
      '6340532',
      '90412430',
      '90448220',
      '90500229',
      '90502129'
    ]},
    {marca:'cobra',codigos:['5229']},
    {marca:'contitech',codigos:['v85544']},
    {marca:'daewoo',codigos:[
      '25190645',
      '96184932',
      '96298799',
      '96352818',
      '96435138',
      '96459042'
    ]},
    {marca:'dayco',codigos:['apv2303','dyv770']},
    {marca:'gates',codigos:['t38154']},
    {marca:'ina',codigos:['524011820']},
    {marca:'indisa',codigos:['257815']},
    {marca:'isuzu',codigos:['8-90500-229-0']},
    {marca:'ranalle',codigos:['r4320']},
    {marca:'roltens',codigos:['rt7130']},
    {marca:'schadek',codigos:['90001680','30340','90001631','30291','90001360','30030']},
    {marca:'SUZUKI',codigos:['95160-85200','95160-85Z00','95160-85Z01']},
    {marca:'VAUXHALL',codigos:['24412292','90412430','90448220','90500229','90502129']},
    {marca:'VETOR',codigos:['VTO8048']},
    {marca:'ZEN',codigos:['12928']},
  ],
},
{
  externo: 70,
  interno: 0,
  altura: 22,
  correia: ['alternador','tensor'],
  parede: ['liso','com-aba'],
  material: ['metal'],

  marca: 'nytron',
  referencia: '7814',
  imagens: ['nytron-7814-1.png','nytron-7814-2.png','nytron-7814-3.png'],

  descricao: 'corsa/montana/meriva 1.8',
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'AGILE',
      ano: '2010/2014',
      complemento: '1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CELTA',
      ano: '2001/...',
      complemento: '1.0',
    },
    {
      montadora: 'chevrolet',
      modelo: 'COBALT',
      ano: '2012/...',
      complemento: '1.4 1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'CORSA',
      ano: '2001/...',
      complemento: '1.0 1.4 1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'MERIVA',
      ano: '2002/...',
      complemento: '1.4 1.8 8/16V',
    },
    {
      montadora: 'chevrolet',
      modelo: 'MONTANA',
      ano: '2002/...',
      complemento: '1.4 1.8',
    },
    {
      montadora: 'chevrolet',
      modelo: 'ONIX',
      ano: '2012/...',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'PRISMA',
      ano: '2006/...',
      complemento: '1.0 1.4',
    },
    {
      montadora: 'chevrolet',
      modelo: 'SPIN',
      ano: '2012/...',
      complemento: '1.8',
    },
  ],
  referenciasCruzadas: [
    {marca:"NYTRON",codigos:["7814",'1139']},
    {marca:'COBRA',codigos:['4496']},
    {marca:'DAYCO',codigos:['APV2897','DYV763']},
    {marca:'CHEVROLET',codigos:['93374496']},
    {marca:'INDISA',codigos:['257814']},
    {marca:'RANALLE',codigos:['R4322']},
    {marca:'ROLTENS',codigos:['RT7231']},
    {marca:'SCHADEK',codigos:['90001365','30035']},
    {marca:'SKF',codigos:['VKM4752']},
    {marca:'VETOR',codigos:['VTO8046']},
    {marca:'ZEN',codigos:['13157']},
  ],
},
{
  externo: 56,
  interno: 0,
  altura: 22,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['plastico','metal'],

  marca: 'nytron',
  referencia: '2053',
  imagens: ['nytron-2053-1.png','nytron-2053-2.png'],

  descricao: 'gol power 16 02/',
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'GOL',
      ano: '2002/...',
      complemento: '1.0 16V POWER',
    },
    {
      montadora: 'volkswagen',
      modelo: 'POLO (NOVO)',
      ano: '2002/...',
      complemento: '1.0 16V',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["2053"]},
    {marca:'AUDI - SEAT - SKODA - VOLKSWAGEN',codigos:['036109244C','036109244D','036109244J']},
    {marca:'BOSCH',codigos:['1987949849']},
    {marca:'BREDA',codigos:['CR3145']},
    {marca:'COBRA',codigos:['2181']},
    {marca:'CONTITECH',codigos:['V55455']},
    {marca:'DAYCO',codigos:['ATB2195','DYT203']},
    {marca:'GATES',codigos:['T42048']},
    {marca:'GUEPARTS',codigos:['5207']},
    {marca:'INA',codigos:['532016710']},
    {marca:'RANALLE',codigos:['R4148']},
    {marca:'ROLTENS',codigos:['RT6181']},
    {marca:'SCHADEK',codigos:['90001512','30172']},
    {marca:'SKF',codigos:['VKM 21120 H']},
    {marca:'VETOR',codigos:['VTO8112']},
    {marca:'ZEN',codigos:['12867']},
  ],
},
{
  externo: 56,
  interno: 8,
  altura: 27,
  correia: ['dentada'],
  parede: ['liso','com-aba'],
  material: ['plastico','metal'],

  marca: 'skf',
  referencia: 'vkm21122h',
  imagens: ['zen-12810-1.png','zen-12810-2.png'],

  descricao: 'gol mi 16v',
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '1997/2020',
      complemento: '1.0 16v Mi',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Parati',
      ano: '1997/2020',
      complemento: '1.0 16v Mi',
    },
  ],
  referenciasCruzadas: [
    {marca:"skf",codigos:["vkm21122h"]},
    {marca:'Dayco',codigos:['DYT204']},
    {marca:'Gates',codigos:['T 42132']},
    {marca:'INA',codigos:['532 0182 10']},
    {marca:'Nytron',codigos:['2092']},
    {marca:'Perfect',codigos:['50304']},
    {marca:'Seat - Volkswagen',codigos:['036 109 244']},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '12927',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: " ",
      complemento: "1.9 Diesel"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Special",
      ano: "2001...",
      complemento: "1.0 8V com AC,DH"
    },
    {
      montadora: "Volkswagen",
      modelo: "Parati",
      ano: " ",
      complemento: "1.9 Diesel"
    },
    {
      montadora: "Volkswagen",
      modelo: "Saveiro",
      ano: " ",
      complemento: "1.9 Diesel"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["12927"]},
    {marca:"Cobra",codigos:["5285"]},
    {marca:"ContiTech",codigos:["V58642"]},
    {marca:"Dayco",codigos:["APV2921","DYV609"]},
    {marca:"Gueparts",codigos:["5118"]},
    {marca:"Nytron",codigos:["1229"]},
    {marca:"Ranalle",codigos:["R4101"]},
    {marca:"Rolt",codigos:["1603"]},
    {marca:"Roltens",codigos:["RT7629"]},
    {marca:"Vetor",codigos:["VT8114"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '12809',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Nissan",
      modelo: "Platina",
      ano: "",
      complemento: "1.6 K4M-742 Gasolina"
    },
    {
      montadora: "Peugeot",
      modelo: "206",
      ano: "2001...2006",
      complemento: "1.0 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Citius",
      ano: "",
      complemento: "1.4 K4J712 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "2000...",
      complemento: "1.0 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "1998...2009",
      complemento: "1.0 8V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "1.2 16V D4F-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "1.2 16V D4F-728 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "2000...",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "1.6 16V K4M-740 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "1.6 16V K4M-748 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "D4F Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "K4J780 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "K4M800 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "Campus D4F728 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.II Dynamique K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.II Expression K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.II Racing K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.IV Expression K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.IV RS Serie GP K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "MTV K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "RTE K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "RXT K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio III",
      ano: "",
      complemento: "Express D4F728 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio III",
      ano: "",
      complemento: "Style CA D4F728 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio III",
      ano: "",
      complemento: "Style U D4F728 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "1.6 16V K4M-690 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "1.6 16V K4M-842 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "Expression K4M842 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "K4M-690 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "K4M-842 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Duster PH2",
      ano: "",
      complemento: "1.6 16V K4M-842 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Express",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Fluence",
      ano: "",
      complemento: "1.6 16V K4M-838 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Fluence",
      ano: "",
      complemento: "Confort K4M838 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "2000...2005",
      complemento: "1.0 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "2000...2005",
      complemento: "1.0 8V Com Ar condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "2000...",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "",
      complemento: "1.6 16V K4M-730 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "",
      complemento: "Sportway K4M730 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "2008...",
      complemento: "1.0 16V Com Ar condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "",
      complemento: "1.6 16V K4M-842 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "",
      complemento: "Privilege/Intens K4M700 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.4L K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.6 16V K4M-762 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.6L K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "K4M-706 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "Unique K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "Unique K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "2008...",
      complemento: "1.0 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "1.6 16V K4M-842 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "Dynamique K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "GT LINE K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "Intens/AT K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "K4M-706 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Scala",
      ano: "",
      complemento: "1.6L K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Scenic",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Scenic",
      ano: "",
      complemento: "K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Scenic",
      ano: "",
      complemento: "RXE K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Stepway",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Stepway",
      ano: "",
      complemento: "1.6L K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Stepway",
      ano: "",
      complemento: "Dynamique K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "Authentique K4J712 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "Expression Fase IV K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "Expression K4J712 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol II",
      ano: "",
      complemento: "Confort K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol II",
      ano: "",
      complemento: "Luxe K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Twingo",
      ano: "2002",
      complemento: "1.0 16V Com Ar Condicionado e Direção Hidráulica"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["12809"]},
    {marca:"Citroën",codigos:["9641149980"]},
    {marca:"Cobra",codigos:["LH085621"]},
    {marca:"ContiTech",codigos:["V55578"]},
    {marca:"Dayco",codigos:["APV2164","DYV800"]},
    {marca:"Gates",codigos:["T36122"]},
    {marca:"Gueparts",codigos:["5041"]},
    {marca:"INA",codigos:["532026010"]},
    {marca:"Nissan",codigos:["1175000Q0M","1175000QAF"]},
    {marca:"Nytron",codigos:["1150"]},
    {marca:"Peugeot",codigos:["4003A3","9641149980"]},
    {marca:"Ranalle",codigos:["R4611"]},
    {marca:"Renault",codigos:["119239050R","8200040161"]},
    {marca:"Rolt",codigos:["1374"]},
    {marca:"Roltens",codigos:["RT8311","RT8408"]},
    {marca:"Ruville",codigos:["55578"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '12765',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Chevrolet",
      modelo: "Agile",
      ano: "",
      complemento: "1.4 8V X14YX Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Celta",
      ano: "2001...2009",
      complemento: "1.0 8V com AC"
    },
    {
      montadora: "Chevrolet",
      modelo: "Celta",
      ano: "2001...2009",
      complemento: "1.4 8V com AC"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "1994...1999",
      complemento: "1.0 / 1,4 / 1,6 8V com AC"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "",
      complemento: "1.4 8V X14Y Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Montana",
      ano: "",
      complemento: "1.8 8V X14Y Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Omega",
      ano: "1993...1994",
      complemento: "3.0"
    },
    {
      montadora: "Chevrolet",
      modelo: "Prisma",
      ano: "2001...2009",
      complemento: "1.0, 1.4 8V Com AC"
    },
    {
      montadora: "Chevrolet",
      modelo: "Suprema",
      ano: "1992...1994",
      complemento: "3.0 12V"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["12765"]},
    {marca:"Cobra",codigos:["LH088030"]},
    {marca:"ContiTech",codigos:["V55318"]},
    {marca:"Dayco",codigos:["APV2122","DYV750"]},
    {marca:"Gates",codigos:["T36038"]},
    {marca:"CHEVROLET",codigos:["1340513","1340535","90409238","93297272"]},
    {marca:"Gueparts",codigos:["5111"]},
    {marca:"INA",codigos:["532010910","F1108112"]},
    {marca:"Nytron",codigos:["1223"]},
    {marca:"Ranalle",codigos:["R4392"]},
    {marca:"Rolt",codigos:["1507"]},
    {marca:"Roltens",codigos:["RT6798"]},
    {marca:"SKF",codigos:["VKM35002H"]},
  ],
  
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '13212',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Agrale",
      modelo: "Volare",
      ano: "...2003",
      complemento: "2.8 Turbo Diesel MWM 4 Cil."
    },
    {
      montadora: "Agrale",
      modelo: "Volare A5",
      ano: "2003...2004",
      complemento: "MWM Sprint 4.07TCA"
    },
    {
      montadora: "Agrale",
      modelo: "Volare A6",
      ano: "2003...2004",
      complemento: "MWM Sprint 4.07TCA"
    },
    {
      montadora: "Agrale",
      modelo: "Volare V5",
      ano: "2006...2008",
      complemento: "Eletrônico MWM Sprint 4.07TCE"
    },
    {
      montadora: "Agrale",
      modelo: "Volare V6",
      ano: "2006...2008",
      complemento: "Eletrônico MWM Sprint 4.07TCE"
    },
    {
      montadora: "Agrale",
      modelo: "Volare V6",
      ano: "2005...2010",
      complemento: "MWM Sprint 4.07TCA"
    },
    {
      montadora: "Agrale",
      modelo: "Volare V6 GIII",
      ano: "2011",
      complemento: "MWM Sprint 4.07TCA"
    },
    {
      montadora: "Fiat",
      modelo: "Ducato",
      ano: "1999...",
      complemento: "2.8"
    },
    {
      montadora: "Fiat",
      modelo: "Ducato",
      ano: "1999...",
      complemento: "2.8 TD"
    },
    {
      montadora: "Ford",
      modelo: "Escort",
      ano: "1996...2002",
      complemento: "1.8 16V Zetec"
    },
    {
      montadora: "Ford",
      modelo: "F250",
      ano: "10/2000...",
      complemento: "4.2 MWM"
    },
    {
      montadora: "Chevrolet",
      modelo: "Agile",
      ano: "",
      complemento: "1.4 8V X14YX Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Astra",
      ano: " ",
      complemento: "2.0 16v"
    },
    {
      montadora: "Chevrolet",
      modelo: "Blazer",
      ano: "",
      complemento: "2.8 TD Electronic MWM Sprint 4.07 TCE Diesel"
    },
    {
      montadora: "Chevrolet",
      modelo: "Blazer",
      ano: "",
      complemento: "2.8 TD MWM 4.07 TCA Diesel"
    },
    {
      montadora: "Chevrolet",
      modelo: "Calibra",
      ano: "1994...1996",
      complemento: "2.0 16v"
    },
    {
      montadora: "Chevrolet",
      modelo: "Celta",
      ano: "2004...2008",
      complemento: "1.0/1.4/1.6 Com Ar Condicionado"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "1996...",
      complemento: "1.0/1.4/1.6 Com Ar Condicionado"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "",
      complemento: "1.4 8V X14Y Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Montana",
      ano: "",
      complemento: "1.8 8V X14Y Nafta"
    },
    {
      montadora: "Chevrolet",
      modelo: "Omega",
      ano: "1995...2000",
      complemento: "2.2 8v"
    },
    {
      montadora: "Chevrolet",
      modelo: "S10",
      ano: "",
      complemento: "2.8 TDI Electronic MWM Sprint 4.07 TCE Diesel"
    },
    {
      montadora: "Chevrolet",
      modelo: "S10",
      ano: "",
      complemento: "2.8 TDI MWM 4.07 TCA Diesel"
    },
    {
      montadora: "Chevrolet",
      modelo: "Silverado",
      ano: "",
      complemento: "4.2 TD MWM 6.07T Diesel"
    },
    {
      montadora: "Nissan",
      modelo: "Frontier",
      ano: "2002...2008",
      complemento: "2.8 TD 4cil MWM Sprint"
    },
    {
      montadora: "Nissan",
      modelo: "Frontier",
      ano: "",
      complemento: "2.8 TDI Electronic MWM Sprint 4.07 TCE Diesel"
    },
    {
      montadora: "Nissan",
      modelo: "XTerra",
      ano: "2002...2008",
      complemento: "2.8 TD 4cil MWM Sprint"
    },
    {
      montadora: "Nissan",
      modelo: "XTerra",
      ano: "",
      complemento: "2.8 TDI MWM Sprint - 4.07 TC Diesel"
    },
    {
      montadora: "Troller",
      modelo: "T4",
      ano: "jan/05",
      complemento: "2.8 TD 4cil"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["13212"]},
    {marca:"Cobra",codigos:["FE177026"]},
    {marca:"ContiTech",codigos:["V85588"]},
    {marca:"Dayco",codigos:["APV2856","DYV700"]},
    {marca:"Fiat",codigos:["500344132"]},
    {marca:"Ford",codigos:["928F6A228AB","BF9T10B300AA"]},
    {marca:"CHEVROLET",codigos:["90500229","90502129"]},
    {marca:"Gueparts",codigos:["5020"]},
    {marca:"Nytron",codigos:["1129"]},
    {marca:"Ranalle",codigos:["R4229"]},
    {marca:"Rolt",codigos:["1102"]},
    {marca:"Roltens",codigos:["RT6026"]},
    {marca:"SKF",codigos:["VKM60001H"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '13175',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Chevrolet",
      modelo: "Agile",
      ano: "2009...",
      complemento: "1.4 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Celta",
      ano: "2001...",
      complemento: "1.0 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Cobalt",
      ano: "2012...",
      complemento: "1.4 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Cobalt",
      ano: "2013...",
      complemento: "1.8 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "2001...",
      complemento: "1.0 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "2009...",
      complemento: "1.4 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Corsa",
      ano: "2002...2009",
      complemento: "1.8 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Meriva",
      ano: "2006...2012",
      complemento: "1.4 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Meriva",
      ano: "2002...2004",
      complemento: "1.8 16V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Meriva",
      ano: "2002...2012",
      complemento: "1.8 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Montana",
      ano: "2007...",
      complemento: "1.4 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Montana",
      ano: "2002...2010",
      complemento: "1.8 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Onix",
      ano: "2012...",
      complemento: "1.0 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Onix",
      ano: "2012...",
      complemento: "1.4 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Prisma",
      ano: "2007...2012",
      complemento: "1.0 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Prisma",
      ano: "2006...",
      complemento: "1.4 8V"
    },
    {
      montadora: "Chevrolet",
      modelo: "Spin",
      ano: "2012...",
      complemento: "1.8 8V"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["13175"]},
    {marca:"Cobra",codigos:["FE177725"]},
    {marca:"ContiTech",codigos:["V58625"]},
    {marca:"Dayco",codigos:["APV2892","DYV755"]},
    {marca:"CHEVROLET",codigos:["93374496"]},
    {marca:"Gueparts",codigos:["5031"]},
    {marca:"Nytron",codigos:["1139"]},
    {marca:"Ranalle",codigos:["R4316"]},
    {marca:"Rolt",codigos:["1502"]},
    {marca:"Roltens",codigos:["RT6729"]},
    {marca:"SKF",codigos:["VKM4794"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'zen',
  referencia: '13290',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "1997...2005",
      complemento: "1.0 16V Com Ar condicionado e Direção hidráulica ou só Direção hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "1997...2003",
      complemento: "1.0 16V Turbo Com Ar condicionado e Direção hidráulica ou só Direção hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "1997...2013",
      complemento: "1.0 8V Motor Longitudinal Com ar condicionado e D.H.ou só D.H."
    },
    {
      montadora: "Volkswagen",
      modelo: "Parati",
      ano: "1997...2005",
      complemento: "1.0 16V Turbo Com Ar condicionado e Direção hidráulica ou só Direção hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Parati",
      ano: "2000...2005",
      complemento: "1.0 16V Turbo Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13290"]},
    {marca:"Cobra",codigos:["FE177626"]},
    {marca:"ContiTech",codigos:["V58609"]},
    {marca:"Gueparts",codigos:["5043"]},
    {marca:"Nytron",codigos:["1152"]},
    {marca:"Ranalle",codigos:["R4112"]},
    {marca:"Rolt",codigos:["1602"]},
    {marca:"Roltens",codigos:["RT6027"]},
    {marca:"Vetor",codigos:["VT7087"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'zen',
  referencia: '13381',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Audi",
      modelo: "A3",
      ano: "1996...2007",
      complemento: "1.6 8V "
    },
    {
      montadora: "Audi",
      modelo: "A4",
      ano: "2002...2006",
      complemento: "3.0 30V V6"
    },
    {
      montadora: "Audi",
      modelo: "A6",
      ano: "2001...2007",
      complemento: "3.0 30V V6 "
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "1997...2005",
      complemento: "1.0 16V Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "2000...2003",
      complemento: "1.0 16V Turbo Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "1997... ",
      complemento: "1.0 8V Motor Longitudinal Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Golf",
      ano: "1998...2001",
      complemento: "1.6 8V  Motor EA113"
    },
    {
      montadora: "Volkswagen",
      modelo: "Parati",
      ano: "1997...2003",
      complemento: "1.0 16V Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Parati",
      ano: "2000...2005",
      complemento: "1.0 16V Turbo Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["13381"]},
    {marca:"Audi",codigos:["032145299A","06C903133A","06C903133B"]},
    {marca:"Cobra",codigos:["FE177024"]},
    {marca:"Dayco",codigos:["APV3077"]},
    {marca:"Gueparts",codigos:["5006"]},
    {marca:"Nytron",codigos:["1114"]},
    {marca:"Ranalle",codigos:["R4114"]},
    {marca:"Rolt",codigos:["1115"]},
    {marca:"Vetor",codigos:["VT7031"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'zen',
  referencia: '12838',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Nissan",
      modelo: "Livina",
      ano: "2010...",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Nissan",
      modelo: "March",
      ano: "2012...",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Nissan",
      modelo: "Platina",
      ano: "",
      complemento: "1.6 K4M-742 Gasolina"
    },
    {
      montadora: "Nissan",
      modelo: "Tiida",
      ano: "2010...",
      complemento: "16 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Citius",
      ano: "",
      complemento: "1.4 K4J712 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "2000...2008",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "1.6 16V K4M-740 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "1.6 16V K4M-748 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "1996...2002",
      complemento: "1.6 8V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "K4J780 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio",
      ano: "",
      complemento: "K4M800 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.II Dynamique K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.II Expression K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.II Racing K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.IV Expression K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "F.IV RS Serie GP K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "MTV K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "RTE K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Clio II",
      ano: "",
      complemento: "RXT K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "2011...",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "1.6 16V K4M-690 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "1.6 16V K4M-842 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "Expression K4M842 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "K4M-690 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Duster",
      ano: "",
      complemento: "K4M-842 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Duster PH2",
      ano: "",
      complemento: "1.6 16V K4M-842 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Express",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Fluence",
      ano: "2013",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Fluence",
      ano: "",
      complemento: "1.6 16V K4M-838 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Fluence",
      ano: "",
      complemento: "Confort K4M838 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "2001...",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "",
      complemento: "1.6 16V K4M-730 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "2000...2011",
      complemento: "1.6 8V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Kangoo",
      ano: "",
      complemento: "Sportway K4M730 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Laguna",
      ano: "2000...2001",
      complemento: "2.0 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Laguna",
      ano: "1993...",
      complemento: "2.0 8V Com Ar condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "2008...2013",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "",
      complemento: "1.6 16V K4M-842 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "2007...",
      complemento: "1.6 8V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Logan",
      ano: "",
      complemento: "Privilege/Intens K4M700 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Master",
      ano: "2008...2009",
      complemento: "2.5 Eletrônico"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.4L K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "1998...2007",
      complemento: "1.6 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.6 16V K4M-762 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "1.6L K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "2003..2005",
      complemento: "2.0 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "1999...",
      complemento: "2.0 8V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "K4M-706 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "Unique K4J750 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Megane",
      ano: "",
      complemento: "Unique K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "1.6 16V K4M-842 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "2007...",
      complemento: "1.6 8V/16V Com Ar Condicionado e Direção Hidrálica"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "Dynamique K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "GT LINE K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "Intens/AT K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Sandero",
      ano: "",
      complemento: "K4M-706 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Scala",
      ano: "",
      complemento: "1.6L K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Scenic",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Scenic",
      ano: "2001...",
      complemento: "1.6/2.0 16V Com Ar Condicionado e Direção Hidráulica"
    },
    {
      montadora: "Renault",
      modelo: "Scenic",
      ano: "",
      complemento: "K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Scenic",
      ano: "",
      complemento: "RXE K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Stepway",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Stepway",
      ano: "",
      complemento: "1.6L K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Stepway",
      ano: "",
      complemento: "Dynamique K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "1.6 16V K4M-706 Nafta"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "2009...2013",
      complemento: "1.6 8V/16V Com Ar Condicionado e Direção Hidrálica"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "1.6 K4M"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "Authentique K4J712 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "Expression Fase IV K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol",
      ano: "",
      complemento: "Expression K4J712 Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol II",
      ano: "",
      complemento: "Confort K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Symbol II",
      ano: "",
      complemento: "Luxe K4M Gasolina"
    },
    {
      montadora: "Renault",
      modelo: "Trafic",
      ano: "2000...",
      complemento: "2.0 8V Com Ar condicionado e Direção Hidráulica"
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12838"]},
    {marca:"Cobra",codigos:["LH176026"]},
    {marca:"ContiTech",codigos:["V85519"]},
    {marca:"Dayco",codigos:["APV2159","DYV801"]},
    {marca:"Gates",codigos:["T36176"]},
    {marca:"CHEVROLET",codigos:["9198527","93160256"]},
    {marca:"Gueparts",codigos:["5042"]},
    {marca:"INA",codigos:["532024310","F124059"]},
    {marca:"Mitsubishi",codigos:["M883834","MB883834","MD883834"]},
    {marca:"Nissan",codigos:["1192500QAF","1192700QAA"]},
    {marca:"Nytron",codigos:["1151"]},
    {marca:"Opel",codigos:["4410595","4506194","9198527","93160256"]},
    {marca:"Ranalle",codigos:["R4610"]},
    {marca:"Renault",codigos:["7700102872","7700102931","7700104092","8200104754","8200277606","8200403954","8200603359"]},
    {marca:"Rolt",codigos:["1408","2179"]},
    {marca:"Roltens",codigos:["RT8392","RT8414"]},
    {marca:"Ruville",codigos:["55571"]},
    {marca:"SKF",codigos:["VKM4802"]},
    {marca:"Suzuki",codigos:["1752284A00","4917084A80","4917084A80000"]},
    {marca:"Vauxhall",codigos:["9198527","93160256"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'zen',
  referencia: '12861',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Fiat",
      modelo: "Brava",
      ano: "1998...2000",
      complemento: "1.6 16V"
    },
    {
      montadora: "Fiat",
      modelo: "Doblo",
      ano: "2002...",
      complemento: "1.6 16V"
    },
    {
      montadora: "Fiat",
      modelo: "Duna",
      ano: "1994...1995",
      complemento: "1.6 8V Motor Sevel Com Ar Condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Elba",
      ano: "1995...1996",
      complemento: "1.6 8V Com Ar Condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Fiorino",
      ano: "1995...1998",
      complemento: "1.6 8V Com Ar Condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Palio",
      ano: "1996...2000",
      complemento: "1.6 16V Com Ar Condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Palio",
      ano: "1998...2000",
      complemento: "1.6 8V Com Ar Condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Premio",
      ano: "1995...1996",
      complemento: "1.6 8V Com Ar condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Siena",
      ano: "1996...2000",
      complemento: "1.6 16V Com Ar Condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Siena",
      ano: "1998...2000",
      complemento: "1.6 8V"
    },
    {
      montadora: "Fiat",
      modelo: "Strada",
      ano: "1996...2000",
      complemento: "1.6 16V Com Ar Condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Strada",
      ano: "1998...2000",
      complemento: "1.6 8V Com Ar Condicionado"
    },
    {
      montadora: "Fiat",
      modelo: "Tipo",
      ano: "1993...1997",
      complemento: "1.6 8v"
    },
    {
      montadora: "Fiat",
      modelo: "Uno",
      ano: "1994...1996",
      complemento: "1.4 MPI Turbo"
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12861"]},
    {marca:"Alfa Romeo",codigos:["60805460","60812645"]},
    {marca:"Cobra",codigos:["LH208025"]},
    {marca:"ContiTech",codigos:["V55860"]},
    {marca:"Dayco",codigos:["APV1032","APV2142","DYV642"]},
    {marca:"Fiat",codigos:["46424716","60805460","60812645","7635678","7641011","7650925","7702173","7796283","7796288","7797142","97055254"]},
    {marca:"Gates",codigos:["T36208"]},
    {marca:"Gueparts",codigos:["5034"]},
    {marca:"Nytron",codigos:["1142"]},
    {marca:"Ranalle",codigos:["R4442"]},
    {marca:"Rolt",codigos:["1154"]},
    {marca:"Roltens",codigos:["RT6524"]},
    {marca:"SKF",codigos:["VKM32009"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'zen',
  referencia: '12762',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Audi",
      modelo: "RS3 ",
      ano: "2011...",
      complemento: "2.5 20V TFSI "
    },
    {
      montadora: "Audi",
      modelo: "TT",
      ano: "2011...",
      complemento: "2.5 20V TFSI"
    },
    {
      montadora: "Fiat",
      modelo: "500",
      ano: "2010...",
      complemento: "1.4, 16V, Fire Evo"
    },
    {
      montadora: "Fiat",
      modelo: "Argo",
      ano: "2017",
      complemento: "1.0 6V e 1.3 8V"
    },
    {
      montadora: "Fiat",
      modelo: "Cronos",
      ano: "2018",
      complemento: "1.3 "
    },
    {
      montadora: "Fiat",
      modelo: "Doblo",
      ano: "2002...",
      complemento: "1.0 1.3 16V 1.4 8v Fire"
    },
    {
      montadora: "Fiat",
      modelo: "Fiorino",
      ano: "2002...",
      complemento: "1.0 1.3 16V 1.4 8v Fire"
    },
    {
      montadora: "Fiat",
      modelo: "Grand Siena",
      ano: "2012...",
      complemento: "1.4, Fire Evo"
    },
    {
      montadora: "Fiat",
      modelo: "Idea",
      ano: "2002...",
      complemento: "1.0 1.3 16V 1.4 8v Fire"
    },
    {
      montadora: "Fiat",
      modelo: "Linea",
      ano: "2009...2014",
      complemento: "1.4, 16V, T-Jet"
    },
    {
      montadora: "Fiat",
      modelo: "Mobi",
      ano: "2017",
      complemento: "1.0"
    },
    {
      montadora: "Fiat",
      modelo: "Nova Strada  ",
      ano: "2020...",
      complemento: "1.3"
    },
    {
      montadora: "Fiat",
      modelo: "Palio",
      ano: "2012...",
      complemento: "1.0 1.3 8/16v 1.4 Fire 1.0 Evo "
    },
    {
      montadora: "Fiat",
      modelo: "Pulse ",
      ano: "2022...",
      complemento: "1.3 8V Flex"
    },
    {
      montadora: "Fiat",
      modelo: "Punto",
      ano: "2002...",
      complemento: "1.0 1.3 8/16V 1.4 8v Fire"
    },
    {
      montadora: "Fiat",
      modelo: "Siena",
      ano: "2002...",
      complemento: "1.0 1.3 8/16V 1.4 8v Fire"
    },
    {
      montadora: "Fiat",
      modelo: "Strada",
      ano: "2002...",
      complemento: "1.0 1.3 8/16V 1.4 8v Fire"
    },
    {
      montadora: "Fiat",
      modelo: "Novo Uno",
      ano: "2016...2021",
      complemento: "1.0 e 1.3"
    },
    {
      montadora: "Fiat",
      modelo: "Uno",
      ano: "2002...",
      complemento: "1.0 1.3 8/16V 1.4 8v Fire"
    },
    {
      montadora: "Ford",
      modelo: "Fiesta",
      ano: "2016...",
      complemento: "1.0 12V Ecoboost"
    },
    {
      montadora: "Ford",
      modelo: "Ka",
      ano: "2015...",
      complemento: "Hatch e Sedan 1.0 12V "
    },
    {
      montadora: "Mercedes Benz",
      modelo: "A200",
      ano: "2006...2010",
      complemento: "2.0 8V "
    },
    {
      montadora: "Mercedes Benz",
      modelo: "B170",
      ano: "2009",
      complemento: "1.7 8V"
    },
    {
      montadora: "Mercedes Benz",
      modelo: "B180",
      ano: "2010...2011",
      complemento: "1.7 8V"
    },
    {
      montadora: "Mercedes Benz",
      modelo: "B200",
      ano: "2006...2010",
      complemento: "2.0 8V"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: " ",
      complemento: "1.0 8V com ACD, DH"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: " ",
      complemento: "1.6 8V com ACD, DH"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: " ",
      complemento: "1.0 8V com ACD, DH"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: " ",
      complemento: "1.6 8V com ACD, DH"
    },
    {
      montadora: "Volkswagen",
      modelo: "Jetta",
      ano: "2007...2011",
      complemento: "2.5 20V"
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: " ",
      complemento: "1.0 8V com ACD, DH"
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: " ",
      complemento: "1.6 8V com ACD, DH"
    },
    {
      montadora: "Volkswagen",
      modelo: "SpaceFox",
      ano: " ",
      complemento: "1.0 8V com ACD, DH"
    },
    {
      montadora: "Volkswagen",
      modelo: "SpaceFox",
      ano: " ",
      complemento: "1.6 8V com ACD, DH"
    },
  ],
  referenciasCruzadas: [
    {marca:"zen",codigos:["12762"]},
    {marca:"Audi",codigos:["07K145172B","07K903315AB","07K903315G","07K903315J","07K903315N","07K903315S","07K903315T"]},
    {marca:"Cobra",codigos:["LH176522","LH176523","LH176624"]},
    {marca:"ContiTech",codigos:["V55889","V58623"]},
    {marca:"Dayco",codigos:["APV2924","DYV615"]},
    {marca:"Fiat",codigos:["46756937","55236521","55267954"]},
    {marca:"Ford",codigos:["1761930","CM5Q6A2228BA","CM5Q6A228BA"]},
    {marca:"Gueparts",codigos:["5032","5245"]},
    {marca:"INA",codigos:["F565353"]},
    {marca:"Mercedes Benz",codigos:["6402020419","6682020119","6682020419"]},
    {marca:"Nytron",codigos:["1140","1143"]},
    {marca:"Ranalle",codigos:["R4111","R4445"]},
    {marca:"Rolt",codigos:["1155","1601"]},
    {marca:"Roltens",codigos:["RT3044","RT6523","RT6623"]},
    {marca:"SKF",codigos:["VKM4806"]},
    {marca:"Vetor",codigos:["VT7061","VT8121"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '12858',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Fiat",
      modelo: "Stilo",
      ano: "2003...2007",
      complemento: "1.8 16V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "1998...2002",
      complemento: "1.0 16V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "1995...2001",
      complemento: "1.6 16v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "",
      complemento: "1.8 8V CE18NE Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "",
      complemento: "C18NE1 Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa Evolution",
      ano: "",
      complemento: "GLS CE18NE Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa Sedan",
      ano: "1998...",
      complemento: "1.0 16v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa Sedan",
      ano: "1995...2001",
      complemento: "1.6 16v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa Wagon",
      ano: "1998...",
      complemento: "1.0 16v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa Wagon",
      ano: "1995...2001",
      complemento: "1.6 16v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "2002...2012",
      complemento: "1.8 16V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "",
      complemento: "1.8 16V C18SEL Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "",
      complemento: "1.8 8V C18NE1 Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Montana",
      ano: "",
      complemento: "C18X2 Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Tigra",
      ano: "1998...1999",
      complemento: "1.6 16v"
    },
    {
      montadora: "Opel",
      modelo: "Astra",
      ano: "01/2005...12/2005",
      complemento: " "
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["12858"]},
    {marca:"Cobra",codigos:["1731"]},
    {marca:"ContiTech",codigos:["V55313"]},
    {marca:"Dayco",codigos:["ATB2190","DYT305"]},
    {marca:"Fiat",codigos:["7083591","7083886","90412731","90570913","9128740"]},
    {marca:"Gates",codigos:["T42076"]},
    {marca:"CHEVROLET",codigos:["09128740","7083591","7083886","90412731","90570913"]},
    {marca:"Gueparts",codigos:["5199"]},
    {marca:"INA",codigos:["532003410","F2187404","F224967"]},
    {marca:"Nytron",codigos:["2040"]},
    {marca:"Opel",codigos:["09128740","5636415","5636419","5636427","90412731","90570913"]},
    {marca:"Ranalle",codigos:["R4352"]},
    {marca:"Rolt",codigos:["1513"]},
    {marca:"Roltens",codigos:["RT6731"]},
    {marca:"Ruville",codigos:["55313"]},
    {marca:"SKF",codigos:["VKM25150H"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '12761',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Fiat",
      modelo: "Idea",
      ano: "2003...",
      complemento: "1.8 16V"
    },
    {
      montadora: "Fiat",
      modelo: "Idea",
      ano: "2003...",
      complemento: "1.8 8V"
    },
    {
      montadora: "Fiat",
      modelo: "Punto",
      ano: "2003...",
      complemento: "1.8 16V"
    },
    {
      montadora: "Fiat",
      modelo: "Punto",
      ano: "2003...",
      complemento: "1.8 8V"
    },
    {
      montadora: "Fiat",
      modelo: "Stilo",
      ano: "2003...",
      complemento: "1.8 16v"
    },
    {
      montadora: "Fiat",
      modelo: "Stilo",
      ano: "2003...",
      complemento: "1.8 8v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "2004...",
      complemento: "1.8 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "2004...",
      complemento: "2.0 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "2002...",
      complemento: "1.8 8v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "2004...",
      complemento: "1.8 16V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "2004...",
      complemento: "1.8 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Montana",
      ano: "2003...",
      complemento: "1.8 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Vectra",
      ano: "1997...",
      complemento: "2.0 16V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Vectra",
      ano: "1997...",
      complemento: "2.0 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Vectra",
      ano: "1997...",
      complemento: "2.2 16V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Vectra",
      ano: "1997...",
      complemento: "2.2 8V"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["12761"]},
    {marca:"Cobra",codigos:["9330"]},
    {marca:"ContiTech",codigos:["V58608"]},
    {marca:"Dayco",codigos:["APV2864","DYV751"]},
    {marca:"Fiat",codigos:["55192018","55201364","93302612","94700296"]},
    {marca:"CHEVROLET",codigos:["93302612","93384813","94700296"]},
    {marca:"Gueparts",codigos:["5227"]},
    {marca:"Nytron",codigos:["7709","7795"]},
    {marca:"Ranalle",codigos:["R4390"]},
    {marca:"Rolt",codigos:["1173","1524"]},
    {marca:"Roltens",codigos:["RT6735","RT6762"]},
    {marca:"SKF",codigos:["VKM4753"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '12928',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Daewoo",
      modelo: "Nubira",
      ano: "",
      complemento: "C20NED Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Agile",
      ano: "",
      complemento: "1.4 8V X14YX Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "1999...",
      complemento: "1.8 16V com DH"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "1999...",
      complemento: "1.8 8V com DH"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "",
      complemento: "2.0 16V C20SEL Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "1999...",
      complemento: "2.0 16V com DH"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "",
      complemento: "2.0 8V C20NE Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "",
      complemento: "2.0 8V C20SE Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Astra",
      ano: "1999...",
      complemento: "2.0 8V com DH"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Calibra",
      ano: "1994...1995",
      complemento: "2.0 16v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Celta",
      ano: "1994...",
      complemento: "1.0 com AC"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Celta",
      ano: "1994...",
      complemento: "1.4 com AC"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Celta",
      ano: "1994...",
      complemento: "1.6 com AC"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "1994...",
      complemento: "1.0 com AC"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "",
      complemento: "1.4 8V X14Y Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "1994...",
      complemento: "1.4 com AC"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "1994...",
      complemento: "1.6 com AC"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "",
      complemento: "1.8 8V CE18NE Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "",
      complemento: "C18NE1 Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa Evolution",
      ano: "",
      complemento: "GLS CE18NE Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Epica I",
      ano: "",
      complemento: "2.0L C20SE Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "",
      complemento: "1.8 16V C18SEL Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "",
      complemento: "1.8 8V C18NE1 Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Montana",
      ano: "",
      complemento: "1.8 8V X14Y Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Montana",
      ano: "",
      complemento: "C18X2 Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Omega",
      ano: "1992...1998",
      complemento: "2.2 8v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Vectra",
      ano: "1997...2003",
      complemento: "2.0"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Vectra",
      ano: "",
      complemento: "2.0 16V C20SEL Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Vectra",
      ano: "",
      complemento: "2.0 8V C20NE Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Vectra",
      ano: "1997...2003",
      complemento: "2.2"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Zafira",
      ano: "",
      complemento: "2 C20S Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Zafira",
      ano: "",
      complemento: "2.0 16V C20SEL Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Zafira",
      ano: "2001...",
      complemento: "2.0 8v"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Zafira",
      ano: "",
      complemento: "2.0 8V C20NE Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Zafira",
      ano: "",
      complemento: "2.0 Manual 4X2 C20SE Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Zafira",
      ano: "",
      complemento: "C20SEL Gasolina"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["12928",'13212 (REFIL)']},
    {marca:"Cobra",codigos:["5229"]},
    {marca:"ContiTech",codigos:["V85544"]},
    {marca:"Dayco",codigos:["APV2303","DYV770"]},
    {marca:"CHEVROLET",codigos:["90500229","90502129","93375464"]},
    {marca:"INA",codigos:["F235784"]},
    {marca:"Nytron",codigos:["7815","7816"]},
    {marca:"Ranalle",codigos:["R4320"]},
    {marca:"Rolt",codigos:["1528","1529"]},
    {marca:"Roltens",codigos:["RT7129","RT7130"]},
    {marca:"SKF",codigos:["VKM35009L"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '13157',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "CHEVROLET",
      modelo: "Agile",
      ano: "2009...",
      complemento: "1.4 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Celta",
      ano: "2001...",
      complemento: "1.0 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Cobalt",
      ano: "2012...",
      complemento: "1.4 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Cobalt",
      ano: "2013...",
      complemento: "1.8 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "2001...",
      complemento: "1.0 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "2009...",
      complemento: "1.4 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Corsa",
      ano: "2002...2009",
      complemento: "1.8 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "2006...2012",
      complemento: "1.4 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "2002...2004",
      complemento: "1.8 16V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Meriva",
      ano: "2002...2012",
      complemento: "1.8 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Montana",
      ano: "2007...",
      complemento: "1.4 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Montana",
      ano: "2002...2010",
      complemento: "1.8 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Onix",
      ano: "2012...",
      complemento: "1.0 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Onix",
      ano: "2012...",
      complemento: "1.4 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Onix",
      ano: "",
      complemento: "1.4 8V AT SPE-4 Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Onix",
      ano: "",
      complemento: "1.4 8V MT SPE-4 Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Onix",
      ano: "",
      complemento: "1.4 8V SPE-4 Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Onix",
      ano: "",
      complemento: "LTZ 1-4 SPE-4 Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Onix",
      ano: "",
      complemento: "LTZ SPE Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Prisma",
      ano: "2007...2012",
      complemento: "1.0 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Prisma",
      ano: "2006...",
      complemento: "1.4 8V"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Prisma",
      ano: "",
      complemento: "1.4 8V AT SPE-4 Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Prisma",
      ano: "",
      complemento: "1.4 8V MT SPE-4 Nafta"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Prisma",
      ano: "",
      complemento: "LT SPE-4 Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Prisma",
      ano: "",
      complemento: "LTZ/1.4 SPE-4 Gasolina"
    },
    {
      montadora: "CHEVROLET",
      modelo: "Spin",
      ano: "2012...",
      complemento: "1.8 8V"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["13157"]},
    {marca:"Cobra",codigos:["4496"]},
    {marca:"Dayco",codigos:["APV2897","DYV763"]},
    {marca:"CHEVROLET",codigos:["93374496","93384813"]},
    {marca:"Nytron",codigos:["7814"]},
    {marca:"Ranalle",codigos:["R4322"]},
    {marca:"Rolt",codigos:["1527"]},
    {marca:"Roltens",codigos:["RT7231"]},
    {marca:"SKF",codigos:["VKM4752"]},
  ],
},
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: 'ZEN',
  referencia: '12778',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "",
      complemento: "1.6 16V MSI EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "",
      complemento: "1.6 8V EA111 BAH/CFZ Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "",
      complemento: "1.6L CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "CrossFox",
      ano: "",
      complemento: "EA111 BAH/CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "",
      complemento: "1.6 16V MSI EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "",
      complemento: "1.6 8V EA111 BAH/CFZ Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "",
      complemento: "1.6 8V MSI EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "",
      complemento: "Xtreme CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "1997...2005",
      complemento: "1.0 16V (EA111) Com Ar Condicionado e Direção Hidráulica ou só Direção"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "2000...2003",
      complemento: "1.0 16V Turbo Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "1997...2013",
      complemento: "1.0 8V (EA111) Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "",
      complemento: "1.0 MI EA111 AFZ Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol",
      ano: "",
      complemento: "1.4 8V MI EA111 CNBA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Trend",
      ano: "",
      complemento: "1.6 8V EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Trend",
      ano: "",
      complemento: "1.6 8V MSI AT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Trend",
      ano: "",
      complemento: "1.6 8V MSI EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Gol Trend",
      ano: "",
      complemento: "CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Golf",
      ano: "",
      complemento: "1.6 8V EA111 BAH Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Parati",
      ano: "1997...2005",
      complemento: "1.0 16V (EA111) Com Ar Condicionado e Direção Hidráulica ou só Direção"
    },
    {
      montadora: "Volkswagen",
      modelo: "Parati",
      ano: "2000...2005",
      complemento: "1.0 16V Turbo Com Ar Condicionado e Direção Hidráulica ou só Direção Hidráulica"
    },
    {
      montadora: "Volkswagen",
      modelo: "Parati",
      ano: "2002...",
      complemento: "1.0 8v (EA111)"
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: "",
      complemento: "1.6 MSI AT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: "",
      complemento: "1.6 MSI MT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Saveiro",
      ano: "",
      complemento: "1.6 8V EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran",
      ano: "",
      complemento: "1.6 16V MSI EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran",
      ano: "",
      complemento: "1.6 16V MSI I-Motion EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran",
      ano: "",
      complemento: "1.6 8V EA111 BAH/CFZ Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran",
      ano: "",
      complemento: "1.6 8V MSI EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Suran Cross",
      ano: "",
      complemento: "1.6 8V EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "T-Cross",
      ano: "",
      complemento: "1.6L 110 CV AT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "T-Cross",
      ano: "",
      complemento: "1.6L 110 CV MT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "T-Cross",
      ano: "",
      complemento: "Trendline EA111 CWSA Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Virtus",
      ano: "",
      complemento: "1.6 16V MSI AT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Virtus",
      ano: "",
      complemento: "1.6 16V MSI MT EA111 CWSA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Voyage",
      ano: "",
      complemento: "1.6 8V EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Voyage",
      ano: "",
      complemento: "1.6 8V MSI EA111 CFZA Nafta"
    },
    {
      montadora: "Volkswagen",
      modelo: "Voyage",
      ano: "",
      complemento: "1.6 EA111 CFZ Gasolina"
    },
    {
      montadora: "Volkswagen",
      modelo: "Voyage",
      ano: "",
      complemento: "1.6 EA111 CFZA Gasolina"
    },
  ],
  referenciasCruzadas: [
    {marca:"ZEN",codigos:["12778",'13290 (REFIL)']},
    {marca:"Cobra",codigos:["145299"]},
    {marca:"ContiTech",codigos:["V58610"]},
    {marca:"Dayco",codigos:["APV2918","DYV603"]},
    {marca:"INA",codigos:["534017610"]},
    {marca:"Nytron",codigos:["7798"]},
    {marca:"Ranalle",codigos:["R4100"]},
    {marca:"Rolt",codigos:["1623"]},
    {marca:"Roltens",codigos:["RT7000"]},
    {marca:"Ruville",codigos:["56313"]},
    {marca:"SKF",codigos:["VKM4774"]},
    {marca:"Vetor",codigos:["VT8122"]},
  ],
},
{
  externo: 65,
  interno: 0,
  altura: 24,
  correia: ['alternador','tensor'],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'schadek',
  referencia: '30306',
  imagens: ['schadek-30306-1.png','schadek-30306-2.png'],

  descricao: 'polo/fox',
  aplicacoes: [
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "2004 - 2008",
      complemento: "1.0 8V (EA111)"
    },
    {
      montadora: "Volkswagen",
      modelo: "Fox",
      ano: "2004 - 2008",
      complemento: "1.6 8V (EA111)"
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: "ATÉ - 2003",
      complemento: "1.0 "
    },
    {
      montadora: "Volkswagen",
      modelo: "Polo",
      ano: "2002 - 2009",
      complemento: "1.6 8V (EA111) - COM A/C"
    },
  ],
  referenciasCruzadas: [
    {marca:"schadek",codigos:["30306",'90001646']},
    {marca:"DAYCO",codigos:["APV2923"]},
    {marca:"INDISA",codigos:["T457831"]},
    {marca:"NYTRON",codigos:["7831"]},
    {marca:"RANALLE",codigos:["R4121"]},
    {marca:"ROLTENS",codigos:["RT7532"]},
    {marca:"SKF",codigos:["VKM4780"]},
    {marca:"VOLKSWAGEN",codigos:["030145299H"]},
    {marca:"ZEN",codigos:["13384"]},
  ],
},
{
  externo: 62,
  interno: 0,
  altura: 22,
  correia: ['dentada',],
  parede: ['liso','sem-aba'],
  material: ['plastico','metal'],

  marca: 'nytron',
  referencia: '7737',
  imagens: ['mide-mdte021-1.png','mide-mdte021-2.jpg'],

  descricao: 'gol mi/power 8v',
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'Gol',
      ano: '1996 / 2002',
      complemento: '1.0 8v AT',
    },
    {
      montadora: 'volkswagen',
      modelo: 'Parati',
      ano: '1996 / 2002',
      complemento: '1.0 8v AT',
    },
  ],
  referenciasCruzadas: [
    {marca:"nytron",codigos:["7737"]},
    {marca:'AUDI',codigos:['030.109.243 L']},
    {marca:'BREDA',codigos:['CR 3467']},
    {marca:'COBRA',codigos:['6003LH']},
    {marca:'CONTITECH',codigos:['V55428']},
    {marca:'DAYCO',codigos:['ATB2205','DYT214']},
    {marca:'GATES',codigos:['T43061']},
    {marca:'GUEPARTS',codigos:['5575']},
    {marca:'INA',codigos:['531052530']},
    {marca:'INDISA',codigos:['457737']},
    {marca:'RANALLE',codigos:['R4150']},
    {marca:'ROLTENS',codigos:['RT1609']},
    {marca:'SCHADEK',codigos:['90001563','30223','90001564','30224','90001694','30353']},
    {marca:'SEAT',codigos:['030109243M','030109243N','030109243P']},
    {marca:'SKF',codigos:['VKM 11106 L']},
    {marca:'VETOR',codigos:['VTO 7078']},
    {marca:'VOLKSWAGEN',codigos:['030109243L','030109243M','030109243N','030109243P','30109243R']},
    {marca:'ZEN',codigos:['12772']},
  ],
},
/*
{
  externo: 0,
  interno: 0,
  altura: 0,
  correia: [''],
  parede: [''],
  material: [''],

  marca: '',
  referencia: '',
  imagens: [''],

  descricao: '',
  aplicacoes: [
    {
      montadora: '',
      modelo: '',
      ano: '',
      complemento: '',
    },
  ],
  referenciasCruzadas: [
    {marca:"",codigos:[""]},
  ],
},
*/
]
