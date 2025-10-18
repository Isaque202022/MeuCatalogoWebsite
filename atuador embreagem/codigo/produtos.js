const produtos = [
  {
    tipo: 'ATUADOR',
    descricao: 'ASTRA/MONTANA',
    referencia: '318260011',
    marca: 'SACHS',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'CORSA/ONIX',
    referencia: '5100073100A1',
    marca: 'LUK REPSET',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'CORSA/ONIX/ASTRA COBALT MERIVA MONTANA PRISMA SPIN VECTRA ZAFIRA',
    referencia: '24591142',
    marca: 'PEÇAS GENUINAS GM',
    arqImagem: 'skf-VKCH3102.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'CORSA/ONIX/ASTRA COBALT MERIVA MONTANA PRISMA SPIN VECTRA ZAFIRA',
    referencia: 'VKCH3102',
    marca: 'SKF',
    arqImagem: 'skf-VKCH3102.jpg',
    linksExternos: [{url:'aplicacoes/skf-VKCH3102.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'COURIER/FIESTA',
    referencia: '51000651',
    marca: 'LUK REPSET',
    arqImagem: 'luk-51000651.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'COURIER/FIESTA',
    referencia: 'VKCH4750',
    marca: 'SKF',
    arqImagem: 'skf-vkch4750.jpg',
    linksExternos: [{url:'aplicacoes/skf-VKCH4750.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'DOBLO/STRADA etorq e gm',
    referencia: 'VKCH4896',
    marca: 'SKF',
    arqImagem: 'skf-vkch4896.jpg',
    linksExternos: [{url:'aplicacoes/skf-VKCH4896.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'DOBLO/STRADA etorq e gm',
    referencia: 'ZA3105532',
    marca: 'FTE',
    arqImagem: 'fte-za31055.3.2.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'VECTRA 96/05',
    referencia: '510000210',
    marca: 'LUK REPSET',
    arqImagem: 'luk-510000210.jpg',
    linksExternos: [{url:'aplicacoes/luk-510000210.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'ATUADOR',
    descricao: 'VECTRA/ZAFIRA',
    referencia: '5100038100A1',
    marca: 'LUK REPSET',
    arqImagem: 'luk-5100038100A1.jpg',
    linksExternos: [{url:'aplicacoes/luk-5100038100A1.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'CILINDRO AUXILIAR',
    descricao: 'FOX/GOL G5',
    referencia: '512001210',
    marca: 'LUK REPSET',
    arqImagem: 'luk-512001210.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO AUXILIAR',
    descricao: 'FOX/GOL G5',
    referencia: 'VKCH4748',
    marca: 'SKF',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO AUXILIAR',
    descricao: 'GRAND SIENA',
    referencia: '5120070100',
    marca: 'LUK REPSET',
    arqImagem: 'luk-5120070100.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO AUXILIAR',
    descricao: 'S10 95/11',
    referencia: '6283600175',
    marca: 'SACHS',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO AUXILIAR',
    descricao: 'S10 95/11',
    referencia: 'VKCH151017',
    marca: 'SKF',
    arqImagem: 'skf-VKCH151017.jpeg',
    linksExternos: [{url:'aplicacoes/skf-VKCH151017.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'CILINDRO AUXILIAR',
    descricao: 'STRADA/PALIO',
    referencia: '512017410',
    marca: 'LUK REPSET',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO AUXILIAR',
    descricao: 'STRADA/PALIO',
    referencia: 'VKCH4723',
    marca: 'SKF',
    arqImagem: 'indisa-AH354723.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO AUXILIAR',
    descricao: 'STRADA/PALIO ',
    referencia: 'AH354723',
    marca: 'INDISA',
    arqImagem: 'indisa-AH354723.jpg',
    linksExternos: [{url:'https://www.indisa.com.br/catalogo/ah354723/',titulo:'INDISA'}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'PALIO/GRAND SIENA EVO E E-TORQ',
    referencia: '5110329100',
    marca: 'LUK REPSET',
    arqImagem: 'luk-5110329100.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'ASTRA/VECTRA',
    referencia: 'RCCE00990',
    marca: 'TRW',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'ASTRA/VECTRA',
    referencia: 'VKCH4739',
    marca: 'SKF',
    arqImagem: 'skf-VKCH4739.jpg',
    linksExternos: [{url:'aplicacoes/skf-VKCH4739.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'CORSA/MONTAN',
    referencia: 'VKCH1503901',
    marca: 'SKF',
    arqImagem: 'genuina-93298712.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'CORSA/MONTANA',
    referencia: '93298712',
    marca: 'PEÇAS GENUINAS GM',
    arqImagem: 'genuina-93298712.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'DOBLO 1.8',
    referencia: '5110157100',
    marca: 'LUK REPSET',
    arqImagem: 'luk-5110157100.png',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'FIESTA/COURIER',
    referencia: 'VKCH4728',
    marca: 'SKF',
    arqImagem: 'skf-VKCH4728.jpg',
    linksExternos: [{url:'aplicacoes/skf-VKCH4728.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'FOX/SAV/GOL G5',
    referencia: 'VKCH4747',
    marca: 'SKF',
    arqImagem: 'skf-VKCH4747.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'KA 07/14',
    referencia: '5110027100',
    marca: 'LUK REPSET',
    arqImagem: 'luk-5110027100a1.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'LINEA/PUNTO',
    referencia: '5110159100',
    marca: 'LUK REPSET',
    arqImagem: 'luk-5110159100.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'ONIX/PRISMA',
    referencia: '24581803',
    marca: 'PEÇAS GENUINAS GM',
    arqImagem: 'genuina-24581803.jpeg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'PALIO/STRADA TDS',
    referencia: '5110155100',
    marca: 'LUK REPSET',
    arqImagem: 'luk-5110155100.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'PALIO/STRADA TDS',
    referencia: 'VKCH4726',
    marca: 'SKF',
    arqImagem: 'skf-VKCH4726.jpg',
    linksExternos: [{url:'aplicacoes/skf-VKCH4726.txt',titulo:'arquivo de texto'}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'S10/BLAZER 95/11',
    referencia: 'C2624',
    marca: 'CONTROIL',
    arqImagem: 'controil-c2624.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'ZAFIRA 01/12',
    referencia: 'VKCH4740',
    marca: 'SKF',
    arqImagem: '',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'ZETEC',
    referencia: '5110353100',
    marca: 'LUK REPSET',
    arqImagem: 'luk-5110353100a1.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'ZETEC',
    referencia: 'VKCH4729',
    marca: 'SKF',
    arqImagem: 'luk-5110353100a1.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'ZAFIRA 01/12 ',
    referencia: '93304911',
    marca: 'GENUINA',
    arqImagem: 'genuina-93304911.jpg',
    linksExternos: [{url:'',titulo:''}]
  },
  {
    tipo: 'CILINDRO MESTRE',
    descricao: 'ASTRA/VECTRA  ',
    referencia: '93304910',
    marca: 'GENUINA',
    arqImagem: 'genuina-93304911.jpg',
    linksExternos: [{url:'',titulo:''}]
  },

]