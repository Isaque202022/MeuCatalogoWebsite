const produtos = [
  {
    descricao: 'CELTA/FIESTA/KA ',
    referencia: '5516',
    marca: 'ATE',
    arqImagem: '1830 - ate - 005516.jpg',
    linksExternos: [
      { 
        url: 'https://autoexperts.parts/pt/br/product/24abc4f9-518e-92314cc6-2fb6-50cc2a73-0b52',
        titulo:'Auto Experts'
      }
    ]
  },
  {
    descricao: 'CELTA/FIESTA/KA ',
    referencia: 'C3439',
    marca: 'CONTROIL',
    arqImagem: 'c3439-controil.avif',
    linksExternos: [
      { 
        url: 'https://autoexperts.parts/pt/br/product/24abc4f9-518e-92314cc6-2fb6-50cc2a73-0b52',
        titulo:'Auto Experts'
      }
    ]
  },
  {
    descricao: 'CELTA/FIESTA/KA ',
    referencia: 'RCCR01910',
    marca: 'TRW',
    arqImagem: 'c3439-controil.avif',
    linksExternos: [
      { 
        url: 'https://autoexperts.parts/pt/br/product/24abc4f9-518e-92314cc6-2fb6-50cc2a73-0b52',
        titulo:'Auto Experts'
      }
    ]
  },
  {
    descricao: 'CHEVETTE/MARAJO 80/95 ',
    referencia: '5795',
    marca: 'ATE',
    arqImagem: '516- ate - 005795.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'CLIO 1.0/1.6 ',
    referencia: '6446',
    marca: 'ATE',
    arqImagem: '6446-ate.jpeg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'CLIO 1.0/1.6 ',
    referencia: 'RCCR0291',
    marca: 'TRW',
    arqImagem: '5302 - trw - rccr02910.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'CORSA/ASTRA/VECTRA/AGILE ',
    referencia: 'K1080',
    marca: 'KATHO',
    arqImagem: 'k1080-katho.png',
    linksExternos: [{url:'https://www.kathobr.com.br/produtos/detalhes/52',titulo:'KATHO'}]
  },
  {
    descricao: 'CORSA/ASTRA/VECTRA/AGILE ',
    referencia: 'RCCR01305',
    marca: 'TRW',
    arqImagem: 'RCCR01305-TRW.png',
    linksExternos: [{url:'https://autoexperts.parts/pt/br/product/2e00adb2-aef2-92314cc6-2fb6-50cc2a73-0b52',titulo:'auto experts'}]
  },
  {
    descricao: 'CORSA/ASTRA/VECTRA/AGILE ',
    referencia: 'C3410',
    marca: 'CONTROIL',
    arqImagem: 'RCCR01305-TRW.png',
    linksExternos: [{url:'https://autoexperts.parts/pt/br/product/2e00adb2-aef2-92314cc6-2fb6-50cc2a73-0b52',titulo:'auto experts'}]
  },
  {
    descricao: 'COURIER/ECOSPORT 98/... ',
    referencia: 'C3470',
    marca: 'CONTROIL',
    arqImagem: '5953 - controil - c3470.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'FIESTA/PALIO/SIENA/UNO WAY ',
    referencia: 'C3472',
    marca: 'CONTROIL',
    arqImagem: 'c3472-controil.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'FOX/POLO ',
    referencia: 'RCCR02930',
    marca: 'TRW',
    arqImagem: '167 - trw - rccr02930.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'GOL/SANTANA/PASSAT ',
    referencia: '5345',
    marca: 'ATE',
    arqImagem: '5345-ATE.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'GOL/SANTANA/PASSAT ',
    referencia: 'C3356',
    marca: 'CONTROIL',
    arqImagem: '3356-controil.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'GOL/SANTANA/PASSAT ',
    referencia: 'K1002',
    marca: 'KATHO',
    arqImagem: 'KATHO1002.jpg',
    linksExternos: [{url:'https://www.kathobr.com.br/produtos/detalhes/4',titulo:'KATHO'}]
  },
  {
    descricao: 'GOL/VOYAGE G5 S/ABS ',
    referencia: '7600',
    marca: 'ATE',
    arqImagem: '7600-ate.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'GOL/VOYAGE G5 S/ABS ',
    referencia: 'RCCR01390',
    marca: 'TRW',
    arqImagem: '1288 - trw - rccr01390.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'GOL/VOYAGE G5 S/ABS ',
    referencia: 'RCCR03510',
    marca: 'TRW',
    arqImagem: '6598 - rccr03510.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'GRAND SIENA/PUNTO/PALIO ',
    referencia: 'C3478',
    marca: 'CONTROIL',
    arqImagem: '2918 - controil - c3478.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'GRAND SIENA/PUNTO/PALIO ',
    referencia: 'RCCR02860',
    marca: 'TRW',
    arqImagem: 'rccr02860-trw.jpeg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'LOGAN/SANDERO/SYMBOL ',
    referencia: 'CIR0601',
    marca: 'PERFECT',
    arqImagem: 'cir0601-perfect.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'MONTANA/ASTRA/VECTRA/ZAFIRA ',
    referencia: 'C3521',
    marca: 'CONTROIL',
    arqImagem: '3564 - controil - c3521.jpg',
    linksExternos: [{url:'https://autoexperts.parts/pt/br/product/d5b8730b-4230-92314cc6-2fb6-50cc2a73-0b52',titulo:'controil'}]
  },
  {
    descricao: 'MONZA/IPANEMA/CORSA PICK-UP DIR ',
    referencia: '3370',
    marca: 'CONTROIL',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'MONZA/IPANEMA/CORSA PICK-UP DIR ',
    referencia: '5821',
    marca: 'ATE',
    arqImagem: '6673 - ate - 005821.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'MONZA/IPANEMA/CORSA PICK-UP ESQ ',
    referencia: '3369',
    marca: 'CONTROIL',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'MONZA/IPANEMA/CORSA PICK-UP ESQ ',
    referencia: '5820',
    marca: 'ATE',
    arqImagem: '2480- ate - 005820.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'ONIX/PRISMA/COBALT/SONIC ',
    referencia: 'BWD6000',
    marca: 'TRW',
    arqImagem: '7193 - trw - bwk6000.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'ONIX/PRISMA/COBALT/SONIC ',
    referencia: 'C3426',
    marca: 'CONTROIL',
    arqImagem: '7141 - controil - c3426.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'PALIO WEEK/STRADA/DOBLO ',
    referencia: '5780',
    marca: 'ATE',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'PALIO WEEK/STRADA/DOBLO ',
    referencia: 'RCCR02120',
    marca: 'TRW',
    arqImagem: '2395 - trw - rccr02120.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'PALIO/SIENA 96/... ',
    referencia: 'C3437',
    marca: 'CONTROIL',
    arqImagem: '13 - controil - c3437.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'PUNTO/PALIO/UNO VIVACE ALM ',
    referencia: 'K1035',
    marca: 'KATHO',
    arqImagem: '6191 - katho -k1035.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'S10 12/... ',
    referencia: 'BWK6000',
    marca: 'TRW',
    arqImagem: '7193 - trw - bwk6000.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'S10/BLAZER 95/11 ',
    referencia: 'BWH6001',
    marca: 'TRW',
    arqImagem: 'bwh6001-trw.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'S10/BLAZER 95/11 ',
    referencia: 'C3456',
    marca: 'CONTROIL',
    arqImagem: '3456-controil.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'TS AMAROK 11/... ',
    referencia: 'CIR0809',
    marca: 'PERFECT',
    arqImagem: '6840 - perfect - cir0809.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'TS LOGAN/SANDERO 14/... ',
    referencia: '7412',
    marca: 'ATE',
    arqImagem: '7412-ate.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'TS TORO 16/20 ',
    referencia: 'MDCR035',
    marca: 'MIDE',
    arqImagem: 'mdcr035-mide.jpeg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'UNO/ELBA/FIORINO 84/08 ',
    referencia: '5760',
    marca: 'ATE',
    arqImagem: '14 - ate - 005760.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'UNO/ELBA/FIORINO 84/08 ',
    referencia: 'C3353',
    marca: 'CONTROIL',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'UNO/PALIO/SIENA/FIESTA ALM ',
    referencia: 'C3496',
    marca: 'CONTROIL',
    arqImagem: '3003 - controil - c3496.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'UNO/PALIO/SIENA/FIESTA ',
    referencia: 'RCCR03440',
    marca: 'TRW',
    arqImagem: '5161 - trw - rccr03440.jpeg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    descricao: 'CELTA 03/.../PRISMA 09/...',
    referencia: 'C3500',
    marca: 'CONTROIL',
    arqImagem: 'CONTROIL-C3500.jpg',
    linksExternos: [{url:'https://autoexperts.parts/pt/br/product/f8217791-feb8-92314cc6-2fb6-50cc2a73-0b52',titulo:'Auto Experts'}]
  },
  {
    descricao: 'CELTA 03/.../PRISMA 09/...',
    referencia: 'RCCR02890',
    marca: 'TRW',
    arqImagem: 'CONTROIL-C3500.jpg',
    linksExternos: [
      {url:'https://autoexperts.parts/pt/br/product/f8217791-feb8-92314cc6-2fb6-50cc2a73-0b52',
        titulo:'Auto Experts'
      }
    ]
  },
  {
    descricao: 'CELTA 03/.../PRISMA 09/...',
    referencia: 'K1081',
    marca: 'KATHO',
    arqImagem: 'KATHO1081.jpg',
    linksExternos: [{url:'https://www.kathobr.com.br/produtos/detalhes/53',titulo:'KATHO'}]
  },
]