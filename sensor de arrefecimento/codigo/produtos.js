const produtos = [
  {
    tipo: 'sensor temperatura',
    descricao: 'STRADA/IDEA/GRAND SIENA E-TORQ ',
    pino: '2',
    referencia: 'IG860',
    marca: 'IGUAÇU',
    arqImagem: 'iguacu-860.png',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'STRADA/PALIO 1.6 16V/1.8 8V ',
    pino: '2',
    referencia: '44056',
    marca: 'VALCLEI',
    arqImagem: 'valclei-44056.png',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/a1b93281-ea4f-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'UNO/PALIO/STRADA FIRE 16V ',
    pino: '2',
    referencia: 'VC44098',
    marca: 'VALCLEI',
    arqImagem: 'valclei-44098.png',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/0bc47f00-3750-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'UNO/PALIO/STRADA FIRE 8V ',
    pino: '2',
    referencia: '087206',
    marca: 'AJE',
    arqImagem: 'aje-087206.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'UNO/PALIO/STRADA FIRE 8V ',
    pino: '2',
    referencia: 'VC44099',
    marca: 'VALCLEI',
    arqImagem: 'aje-087206.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'UP/GOL/GOLF/FOX 1.0 12V/1.6 16V ',
    pino: '2',
    referencia: '4259',
    marca: 'MTE-THOMPSON',
    arqImagem: 'MTE4259.jpg',
    linksExternos: [{url:'https://cate.mte-thomson.com.br/pt/br/produto/detalhes/4259/plug-eletronico--agua',titulo:'MTE'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'AP/CHT',
    pino: '2',
    referencia: '44046',
    marca: 'VALCLEI',
    arqImagem: 'valclei-44046.jpeg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/9371aa25-5683-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'CLIO/LOGAN/SANDERO ',
    pino: '3',
    referencia: '44058',
    marca: 'VALCLEI',
    arqImagem: 'valclei-44058.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/dd19fcd5-a1c9-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'CLIO/LOGAN/SANDERO/DUSTER ',
    pino: '3',
    referencia: '9058',
    marca: 'MARFLEX',
    arqImagem: '9058MARFLEX.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'CLIO/LOGAN/SANDERO/DUSTER ',
    pino: '',
    referencia: 'IG831',
    marca: 'IGUAÇU',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'FIAT/AP ',
    pino: '2',
    referencia: '44053',
    marca: 'VALCLEI',
    arqImagem: 'valclei-44053.png',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/bcae5fcf-3e23-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'FIAT/AP ',
    pino: '',
    referencia: 'IG802',
    marca: 'IGUAÇU',
    arqImagem: '',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'FIAT/GM (AZUL) ',
    pino: '',
    referencia: 'IG805',
    marca: 'IGUAÇU',
    arqImagem: '',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'FIAT/GM (AZUL) ',
    pino: '2',
    referencia: 'VC44051',
    marca: 'VALCLEI',
    arqImagem: 'valclei-44051.png',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/eb108f94-24fc-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'FIAT/GM (PRETO) ',
    pino: '',
    referencia: 'IG801',
    marca: 'IGUAÇU',
    arqImagem: '',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'FIAT/GM (PRETO) ',
    pino: '2',
    referencia: 'VC44050',
    marca: 'VALCLEI',
    arqImagem: 'valclei-44050.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/61b9c1b9-26f6-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'FIRE EVO ',
    pino: '2',
    referencia: 'R4147',
    marca: 'MTE-THOMSON',
    arqImagem: 'mte-4147.jpg',
    linksExternos: [{url:'https://cate.mte-thomson.com.br/pt/br/produto/detalhes/4147/plug-eletronico--agua',titulo:'MTE - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'FIRE EVO ',
    pino: '2',
    referencia: 'VC44147',
    marca: 'VALCLEI',
    arqImagem: 'mte-4147.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/bce197a7-25fa-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOL/ESCORT AP ',
    pino: '2',
    referencia: 'IG803',
    marca: 'IGUAÇU',
    arqImagem: 'iguacu-803.png',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOL/PARATI MI/POWER G4 ',
    pino: '4',
    referencia: '44014',
    marca: 'VALCLEI',
    arqImagem: '44014VALCLEI.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/35f74a3f-e640-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOL/PARATI MI/POWER G4 ',
    pino: '',
    referencia: 'IG830',
    marca: 'IGUAÇU',
    arqImagem: '',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOL/SANTANA AP TDS ',
    pino: '',
    referencia: 'IG811',
    marca: 'IGUAÇU',
    arqImagem: '',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOL/SANTANA AP TDS ',
    pino: '2',
    referencia: 'MX9046',
    marca: 'MARFLEX',
    arqImagem: 'marflex-9046.jpeg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOLF/GOL MI 1.0 ',
    pino: '4',
    referencia: '44034',
    marca: 'VALCLEI',
    arqImagem: 'valclei-44034.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/1dec1445-1886-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOLF/GOL MI 1.0 ',
    pino: '',
    referencia: 'IG810',
    marca: 'IGUAÇU',
    arqImagem: '',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOLF/POLO/GOL POWER G5 ',
    pino: '2',
    referencia: '412308',
    marca: 'WAHLER',
    arqImagem: 'wahler-412308.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'GOLF/POLO/GOL POWER G5 ',
    pino: '',
    referencia: 'VC44092',
    marca: 'VALCLEI',
    arqImagem: '',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/452921d0-1a63-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'HB20/TUCSON/I30/CERATO ',
    pino: '3',
    referencia: 'IG868',
    marca: 'IGUAÇU',
    arqImagem: 'iguacu-868.jpg',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'MONZA/KADETT/UNO ',
    pino: '2',
    referencia: 'IG808',
    marca: 'IGUAÇU',
    arqImagem: 'iguacu-808.png',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'ONIX/PRISMA/COBALT/SPIN ',
    pino: '2',
    referencia: 'R4221',
    marca: 'MTE-THOMSON',
    arqImagem: 'MTE4221.jpg',
    linksExternos: [{url:'https://cate.mte-thomson.com.br/pt/br/produto/detalhes/4221/plug-eletronico--agua',titulo:'MTE'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PAINEL FIAT/AP ',
    pino: '',
    referencia: 'MX8042',
    marca: 'MARFLEX',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PAINEL FORD/VW ',
    pino: '1',
    referencia: '411376',
    marca: 'WAHLER',
    arqImagem: 'wahler-411376.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/00ddd290-8a41-92314cc6-2fb6-a954acb1-326d',titulo:'valclei 33018'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PAINEL FORD/VW ',
    pino: '1',
    referencia: 'IG2002',
    marca: 'IGUACU',
    arqImagem: 'wahler-411376.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/00ddd290-8a41-92314cc6-2fb6-a954acb1-326d',titulo:'valclei 33018'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PAINEL PALIO/UNO MPI ',
    pino: '2',
    referencia: '3071',
    marca: 'MTE-THOMSON',
    arqImagem: '3071MTE.jpg',
    linksExternos: [{url:'https://cate.mte-thomson.com.br/pt/br/produto/detalhes/3071/sensor-duplex',titulo:'MTE'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PAINEL UNO 85/ ',
    pino: '1',
    referencia: 'IG2019',
    marca: 'IGUAÇU',
    arqImagem: 'iguacu-2019.jpg',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PAINEL UNO/SIENA ',
    pino: '1',
    referencia: '33041',
    marca: 'VALCLEI',
    arqImagem: 'valclei-33041.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/c63fddc4-601b-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PAINEL UNO/SIENA ',
    pino: '',
    referencia: '8041',
    marca: 'MARFLEX',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PALIO/SIENA/STRADA 99/ ',
    pino: '3',
    referencia: 'IG813',
    marca: 'IGUAÇU',
    arqImagem: 'iguacu-ig813.jpeg',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUACU'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PALIO/SIENA/STRADA 99/ ',
    pino: '',
    referencia: '9033',
    marca: 'MARFLEX',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PALIO/STILO/DOBLO 1.8 8V ',
    pino: '2',
    referencia: '4008',
    marca: 'MTE-THOMSON',
    arqImagem: 'mte-4008.jpeg',
    linksExternos: [{url:'https://cate.mte-thomson.com.br/pt/br/produto/detalhes/4008/plug-eletronico--agua',titulo:'MTE - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'PALIO/STILO/DOBLO 1.8 8V ',
    pino: '2',
    referencia: '44008',
    marca: 'VALCLEI',
    arqImagem: 'mte-4008.jpeg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/c4ce77a6-70b5-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'RANGER/ESCORT/COURIER/FIES ',
    pino: '2',
    referencia: '9037',
    marca: 'MARFLEX',
    arqImagem: 'marflex-9037.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'ZETEC 1.0/1.6 ',
    pino: '2',
    referencia: '4057',
    marca: 'MTE-THOMSON',
    arqImagem: 'mte-4057.jpg',
    linksExternos: [{url:'https://cate.mte-thomson.com.br/pt/br/produto/detalhes/4057/plug-eletronico--agua',titulo:'MTE - catalogo eletronico'}]
  },
  {
    tipo: 'sensor temperatura',
    descricao: 'ZETEC 1.0/1.6 ',
    pino: '2',
    referencia: '44067',
    marca: 'VALCLEI e MARÍLIA',
    arqImagem: 'valclei-44067.png',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/0023b269-5aad-92314cc6-2fb6-a954acb1-326d',titulo:'VALCLEI - catalogo eletronico'},
      {url:'MARILIA-44067.pdf',titulo:'MARILIA PDF'}
    ]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOL AP/MI C/AR ',
    pino: '3',
    referencia: '1757.95/102',
    marca: 'VALCLEI',
    arqImagem: 'valclei-1757-95-102.png',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/4af200bb-0532-92314cc6-2fb6-c41fccaa-b1da',titulo:'VALCLEI - catalogo eletronico'}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOL AP C/AR ',
    pino: '',
    referencia: '602595',
    marca: 'WAHLER',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOL/LOGUS S/AR ',
    pino: '2',
    referencia: '6026/92',
    marca: 'WAHLER',
    arqImagem: 'wahler-6026-92.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOL/LOGUS S/AR',
    pino: '',
    referencia: 'IG455-92',
    marca: 'IGUAÇU',
    arqImagem: '',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOL/UNO 75C ',
    pino: '2',
    referencia: '405-75',
    marca: 'IGUAÇU',
    arqImagem: 'iguacu-405-75.jpg',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOL/UNO 75C ',
    pino: '',
    referencia: '601075',
    marca: 'WAHLER',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOL/UNO 86C',
    pino: '2',
    referencia: '405-86',
    marca: 'IGUAÇU',
    arqImagem: 'iguacu-405-86.jpg',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOL/UNO 92C ',
    pino: '2',
    referencia: '405-92',
    marca: 'Não Cadastrado',
    arqImagem: 'iguacu-405-92.jpg',
    linksExternos: [{url:'https://www.iguacu.ind.br/busca',titulo:'IGUAÇU'}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOLF/BORA/POLO ',
    pino: '3',
    referencia: '1802/97-102',
    marca: 'VALCLEI',
    arqImagem: '1802-97-102.jpg',
    linksExternos: [{url:'https://valclei.catalogofraga.com.br/produto/8385e8c2-9d44-92314cc6-2fb6-c41fccaa-b1da',titulo:'VALCLEI'}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'GOLF/BORA/POLO ',
    pino: '',
    referencia: '302/97-102',
    marca: 'MARFLEX',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'PALIO/UNO/MAREA ',
    pino: '3',
    referencia: '1725-92/97',
    marca: 'VALCLEI',
    arqImagem: 'valclei-1725-92-97.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'interruptor radiador',
    descricao: 'TIPO/TEMPRA/SIENA ',
    pino: '2',
    referencia: 'TS1899',
    marca: 'MTE-THOMSON',
    arqImagem: 'aje-TS1899.jpeg',
    linksExternos: [{url:'',titulo:''}]
  },

]
