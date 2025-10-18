const produtos = [
{
  marca: 'viemar',
  referencia: '503038',
  pino: 17, 
  lado: 'direito',
  descricao: 'gol pivo curvado',
  imagens: [
    'viemar-503038-1.jpg',
    'viemar-503038-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'g2 g3 g4 1997/2014',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: 'g2 g3 g4 1996/2014',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'g2 g3 g4 1998/2010',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi013',
  pino: 17, 
  lado: 'direito',
  descricao: 'gol pivo curvado',
  imagens: [
    'volda-pi013.png'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '1999/2010',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '1996/2008',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '1997/2009',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi010',
  pino: 17, 
  lado: 'esquerdo',
  descricao: 'gol pivo curvado',
  imagens: [
    'volda-pi010.png'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '1997/2010',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '1996/2008',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '1997/2009',
    },
  ],
  observacao: ''
},
{
  marca: 'W4',
  referencia: '1032P',
  pino: 15, 
  lado: 'ESQUERDO',
  descricao: 'GOL pivo curvado',
  imagens: [
    'w4-w41032p.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '86/94',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '86/94',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '86/94',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi111',
  pino: 0, 
  lado: 'direito',
  descricao: 'doblo adventure',
  imagens: [
    'volda-pi111-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'doblo',
      complemento: 'adventure gm e etorq',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi110',
  pino: 0, 
  lado: 'esquerdo',
  descricao: 'doblo adventure',
  imagens: [
    'volda-pi110-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'doblo',
      complemento: 'adventure gm e etorq',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi3397',
  pino: 0, 
  lado: 'd/e',
  descricao: 'focus',
  imagens: [
    'perfect-pvi3397-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'focus',
      complemento: '2008/2013',
    },
    {
      montadora: 'volvo',
      modelo: 'c30',
      complemento: '2006/2012',
    },
    {
      montadora: 'volvo',
      modelo: 'c70',
      complemento: '2004/2011',
    },
    {
      montadora: 'volvo',
      modelo: 's40',
      complemento: '2004/2011',
    },
    {
      montadora: 'volvo',
      modelo: 'v50',
      complemento: '2004/2011',
    },

  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps832',
  pino: 15, 
  lado: 'direito',
  descricao: 'gol pivo reto',
  imagens: [
    'trw-ps832-1.png',
    'trw-ps831-2.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '1980/1996',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '1982/1995',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '1982/1996',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '1981/1995',
    },
  ],
  observacao: 'pivo reto'
},
{
  marca: 'viemar',
  referencia: '503057',
  pino: 17, 
  lado: 'd/e',
  descricao: 'gol pivo reto',
  imagens: [
    'viemar-503057.jpg',
    'viemar-503057-2.png'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '1997/2014',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '1996/2014',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '1998/2010',
    },
  ],
  observacao: 'pivo reto'
},
{
  marca: 'VOLDA',
  referencia: 'PI055',
  pino: 16, 
  lado: 'd/e',
  descricao: 'corsa/montana',
  imagens: [
    'volda-pi055-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: '2002/2012',
    },
    {
      montadora: 'chevrolet',
      modelo: 'montana',
      complemento: '2003/2010',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi068',
  pino: 18, 
  lado: 'd/e',
  descricao: 'logan/sandero',
  imagens: [
    'volda-pi068-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'logan',
      complemento: '2006/2013',
    },
    {
      montadora: 'renault',
      modelo: 'megane',
      complemento: '2006/2012',
    },
    {
      montadora: 'renault',
      modelo: 'sandero',
      complemento: '2007...',
    },
    {
      montadora: 'renault',
      modelo: 'scenic',
      complemento: '2008/2009 direcao eletrica',
    },
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps4405',
  pino: 15, 
  lado: 'd/e',
  descricao: 'corsa/celta /10',
  imagens: [
    'trw-ps4405-1.png'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: '1995/2006',
    },
    {
      montadora: 'chevrolet',
      modelo: 'celta',
      complemento: '1999/2008',
    },
    {
      montadora: 'chevrolet',
      modelo: 'prisma',
      complemento: '2006/2009',
    },
    {
      montadora: 'chevrolet',
      modelo: 'tigra',
      complemento: '1997/1998',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi043',
  pino: 13.7, 
  lado: 'd/e',
  descricao: 'palio 99/00',
  imagens: [
    'volda-pi043-1.png'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: '1999/2000',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: 'weekend 1999/2000',
    },
    {
      montadora: 'fiat',
      modelo: 'siena',
      complemento: '1999/2000',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503009',
  pino: 14, 
  lado: 'd/e',
  descricao: 'palio 00/16',
  imagens: [
    'viemar--503009-1.jpg',
    'viemar--503009-2.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'doblo',
      complemento: '2000/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'fiorino',
      complemento: '2014/2025',
    },
    {
      montadora: 'fiat',
      modelo: 'grand siena',
      complemento: '2012/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'mobi',
      complemento: '2017/2025',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: '2001/2017',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: 'weekend 2001/2012',
    },
    {
      montadora: 'fiat',
      modelo: 'siena',
      complemento: '2001/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'strada',
      complemento: '2000/2012',
    },
    {
      montadora: 'fiat',
      modelo: 'uno',
      complemento: '2011/2021',
    },
    {
      montadora: 'peugeot',
      modelo: 'partner rapid',
      complemento: '2023/2025',
    },

  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503205',
  pino: 15.4, 
  lado: 'esquerdo',
  descricao: 'golf 14/',
  imagens: [
    'viemar-053205-1.jpg',
    'viemar-503205-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a3',
      complemento: '2003/2021',
    },
    {
      montadora: 'audi',
      modelo: 'q3',
      complemento: '2012/2019',
    },
    {
      montadora: 'volkswagen',
      modelo: 'eos',
      complemento: '2009/2011',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fusca',
      complemento: '2013/2016',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: '2014/2018',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: 'variant 2014/2018',
    },
    {
      montadora: 'volkswagen',
      modelo: 'jetta',
      complemento: '2006/2020',
    },
    {
      montadora: 'volkswagen',
      modelo: 'nivus',
      complemento: '2020/2025',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2018/2025',
    },
    {
      montadora: 'volkswagen',
      modelo: 't-cross',
      complemento: '2020/2025',
    },
    {
      montadora: 'volkswagen',
      modelo: 'tiguan',
      complemento: '2007/2017',
    },
    {
      montadora: 'volkswagen',
      modelo: 'virtus',
      complemento: '2018/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503206',
  pino: 15.4, 
  lado: 'direito',
  descricao: 'golf 14/',
  imagens: [
    'viemar-503206-1.jpg',
    'viemar-503205-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a3',
      complemento: '2003/2021',
    },
    {
      montadora: 'audi',
      modelo: 'q3',
      complemento: '2012/2019',
    },
    {
      montadora: 'volkswagen',
      modelo: 'eos',
      complemento: '2009/2011',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fusca',
      complemento: '2013/2016',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: '2014/2018',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: 'variant 2014/2018',
    },
    {
      montadora: 'volkswagen',
      modelo: 'jetta',
      complemento: '2006/2020',
    },
    {
      montadora: 'volkswagen',
      modelo: 'nivus',
      complemento: '2020/2025',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2018/2025',
    },
    {
      montadora: 'volkswagen',
      modelo: 't-cross',
      complemento: '2020/2025',
    },
    {
      montadora: 'volkswagen',
      modelo: 'tiguan',
      complemento: '2007/2017',
    },
    {
      montadora: 'volkswagen',
      modelo: 'virtus',
      complemento: '2018/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi070',
  pino: 16, 
  lado: 'd/e',
  descricao: 'punto/linea',
  imagens: [
    'volda-pi070-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'linea',
      complemento: '2008/2012',
    },
    {
      montadora: 'fiat',
      modelo: 'punto',
      complemento: '2007/2012',
    },
  ],
  observacao: 'acompanha 3 parafusos e 3 porcas'
},

{
  marca: 'viemar',
  referencia: '503193',
  pino: 15, 
  lado: 'd/e',
  descricao: 'gol g5 ver lado!',
  imagens: [
    'viemar-503193-1.jpg',
    'viemar-503193-2.tmp',
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a1',
      complemento: '2001/2018 esq dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2014/2022 esq dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '2009/2023 esquerdo dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '2009/2023 direito dm',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2012/2014 esquerdo dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '2010/2025 direito dm',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '2010/2025 esquerdo dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacefox',
      complemento: '2011/2019 esquerdo dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '2009/2023 esquerdo dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '2009/2023 direito dm',
    },
    {
      montadora: 'volkswagen',
      modelo: 'up',
      complemento: '2014/2021 esquerdo dir.elet.',
    },
  ],
  observacao: 'VER LADO!'
},
{
  marca: 'viemar',
  referencia: '503192',
  pino: 15, 
  lado: 'd/e',
  descricao: 'gol g5 ver lado!',
  imagens: [
    'viemar-503192-1.jpg',
    'viemar-503193-2.tmp',
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a1',
      complemento: '2001/2018 dir dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2014/2022 dir dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '2009/2023 direito dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '2009/2023 esquerdo dm',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2012/2014 direito dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '2010/2025 esquerdo dm',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '2010/2025 direito dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacefox',
      complemento: '2011/2019 direito dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '2009/2023 direito dh',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '2009/2023 esquerdo dm',
    },
    {
      montadora: 'volkswagen',
      modelo: 'up',
      complemento: '2014/2021 direito dir.elet.',
    },
  ],
  observacao: 'VER LADO!'
},

{
  marca: 'trw',
  referencia: 'ps962',
  pino: 13.4, 
  lado: 'd/e',
  descricao: 'palio 96',
  imagens: [
    'trw-ps962-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: '1996/2003',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: 'weekend 1997/2003',
    },
    {
      montadora: 'fiat',
      modelo: 'siena',
      complemento: '1997/2003',
    },
  ],
  observacao: ''
},
{
  marca: 'nakata',
  referencia: 'n1069',
  pino: 15.3, 
  lado: 'esquerdo',
  descricao: 'CROSSFOX',
  imagens: [
    'nakata-n1069-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'crossfox',
      complemento: '2005/2017',
    },
  ],
  observacao: ''
},
{
  marca: 'nakata',
  referencia: 'n1070',
  pino: 15.3, 
  lado: 'direito',
  descricao: 'CROSSFOX',
  imagens: [
    'nakata-n1070-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'crossfox',
      complemento: '2005/2017',
    },
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'jbj1322',
  pino: 21, 
  lado: 'd/e',
  descricao: 's10 12/ pivo inf',
  imagens: [
    'trw-jbj1322-1.webp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 's10',
      complemento: '2012/2017',
    },
    {
      montadora: 'chevrolet',
      modelo: 's10',
      complemento: '2021',
    },
    {
      montadora: 'chevrolet',
      modelo: 'trailblazer',
      complemento: '2012/2020',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503110',
  pino: 13, 
  lado: 'd/e',
  descricao: 'uno quadrado',
  imagens: [
    'viemar-503110-1.jpg',
    'viemar-503110-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: '147',
      complemento: '1977/1988',
    },
    {
      montadora: 'fiat',
      modelo: 'duna',
      complemento: '1990/1991',
    },
    {
      montadora: 'fiat',
      modelo: 'elba',
      complemento: '1986/1996',
    },
    {
      montadora: 'fiat',
      modelo: 'fiorino',
      complemento: '1981/2013',
    },
    {
      montadora: 'fiat',
      modelo: 'oggi',
      complemento: '1983/1985',
    },
    {
      montadora: 'fiat',
      modelo: 'panorama',
      complemento: '1980/1987',
    },
    {
      montadora: 'fiat',
      modelo: 'uno',
      complemento: '1985/2013',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503449',
  pino: 12.5, 
  lado: 'd/e',
  descricao: 'cruze',
  imagens: [
    'viemar-503449-1.jpg',
    'viemar-503449-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'cruze',
      complemento: '2016/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1029',
  pino: 25, 
  lado: 'd/e',
  descricao: 'd20 93/ pivo inf',
  imagens: [
    'perfect-pvi1029-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'a20',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a40',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'bonanza',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c10',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c20',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c40',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd10',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd20',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd40',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'silverado',
      complemento: '1997/2002',
    },
  ],
  observacao: ''
},
{
  marca: 'nakata',
  referencia: 'n319',
  pino: 19, 
  lado: 'd/e',
  descricao: 'd20 /92 pivo inf',
  imagens: [
    'nakata-n319-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'a10',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c10',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd10',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a14',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c14',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd14',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a15',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c15',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd15',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a20',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c20',
      complemento: '1964/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd20',
      complemento: '1964/1992',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi015',
  pino: 16, 
  lado: 'd/e',
  descricao: 'd20 /92 pivo sup',
  imagens: [
    'volda-pi015-1.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'a10',
      complemento: '1980/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a20',
      complemento: '1985/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'bonanza',
      complemento: '1989/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c10',
      complemento: '1964/1984',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c20',
      complemento: '1985/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd10',
      complemento: '1984/1994',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd20',
      complemento: '1985/1992',
    },
    {
      montadora: 'chevrolet',
      modelo: 'veraneiro',
      complemento: '1966/1995',
    },
  ],
  observacao: ''
},
{
  marca: 'VIEMAR',
  referencia: '503185',
  pino: 16, 
  lado: 'D/E',
  descricao: 'PUNTO/LINEA',
  imagens: [
    'viemar-503185-1.jpg',
    'viemar-503185-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'linea',
      complemento: '2008/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'punto',
      complemento: '2007/2017',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503389',
  pino: 17, 
  lado: 'd/e',
  descricao: 'duster/oroch',
  imagens: [
    'viemar-503389-1.jpg',
    'viemar-503389-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'duster',
      complemento: '2011/2020',
    },
    {
      montadora: 'renault',
      modelo: 'duster',
      complemento: 'oroch 2016/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'skf',
  referencia: 'vkds4740',
  pino: 20, 
  lado: 'd/e',
  descricao: 'd20 93/ pivo sup',
  imagens: [
    'skf-vkds4740.webp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'a20',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a40',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'bonanza',
      complemento: '1992/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c10',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c20',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd10',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd20',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'silverado',
      complemento: '1997/2002',
    },
    {
      montadora: 'chevrolet',
      modelo: 'veraneio',
      complemento: '1993/1996',
    },
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps703',
  pino: 20, 
  lado: 'd/e',
  descricao: 'd20 93/ pivo sup',
  imagens: [
    'trw-ps703.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'a10',
      complemento: '1980/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a20',
      complemento: '1985/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a40',
      complemento: '1985/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'bonanza',
      complemento: '1989/1995',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c10',
      complemento: '1964/1981',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c20',
      complemento: '1985/1996',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c40',
      complemento: '1985/1991',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd20',
      complemento: '',
    },
    {
      montadora: 'chevrolet',
      modelo: 'silverado',
      complemento: '',
    },
    {
      montadora: 'chevrolet',
      modelo: 'veraneio',
      complemento: '',
    },

  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503011',
  pino: 16.5, 
  lado: 'd/e',
  descricao: 'focus',
  imagens: [
    'viemar-503011-1.jpg',
    'viemar-503011-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'focus',
      complemento: '2000/2008',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503374',
  pino: 18, 
  lado: 'd/e',
  descricao: 'focus',
  imagens: [
    'viemar-503374-1.jpg',
    'viemar-503374-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'focus',
      complemento: '2009/2013',
    },
    {
      montadora: 'volvo',
      modelo: 'c30',
      complemento: '2007/2012',
    },
    {
      montadora: 'volvo',
      modelo: 'c70',
      complemento: '2006/2013',
    },
    {
      montadora: 'volvo',
      modelo: 's40',
      complemento: '2004/2012',
    },
    {
      montadora: 'volvo',
      modelo: 'v50',
      complemento: '2004/2012',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503320',
  pino: 18, 
  lado: 'd/e',
  descricao: 's10 17/ pivo inf',
  imagens: [
    'viemar-50320-1.jpg',
    'viemar-50320-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 's10',
      complemento: '2017/2025',
    },
    {
      montadora: 'chevrolet',
      modelo: 'trailblazer',
      complemento: '2017/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503120',
  pino: 15, 
  lado: 'direito',
  descricao: 'golf 99/',
  imagens: [
    'viemar-503120-1.jpg',
    'viemar-503120-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'bora',
      complemento: '2001/2011',
    },
    {
      montadora: 'audi',
      modelo: 'a3',
      complemento: '1996/2006',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: '1999/2014',
    },
    {
      montadora: 'volkswagen',
      modelo: 'new beetle',
      complemento: '1998/2010',
    },
  ],
  observacao: ''
},
{
  marca: 'nakata',
  referencia: 'n93094',
  pino: 16, 
  lado: 'd/e',
  descricao: 's10 17/ pivo sup',
  imagens: [
    'nakata-n93094.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 's10',
      complemento: '2017/2025',
    },
    {
      montadora: 'chevrolet',
      modelo: 'trailblazer',
      complemento: '2017/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503119',
  pino: 15, 
  lado: 'esquerdo',
  descricao: 'golf 99/',
  imagens: [
    'viemar-503119-1.jpg',
    'viemar-503120-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'bora',
      complemento: '2001/2011',
    },
    {
      montadora: 'audi',
      modelo: 'a3',
      complemento: '1996/2006',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: '1999/2014',
    },
    {
      montadora: 'volkswagen',
      modelo: 'new beetle',
      complemento: '1998/2010',
    },
  ],
  observacao: ''
},

{
  marca: 'viemar',
  referencia: '503172',
  pino: 18, 
  lado: 'd/e',
  descricao: 'logan/sandero',
  imagens: [
    'viemar-503172-1.jpg',
    'viemar-503172-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'grand scenic',
      complemento: '2007/2009',
    },
    {
      montadora: 'renault',
      modelo: 'logan',
      complemento: '2007/2013',
    },
    {
      montadora: 'renault',
      modelo: 'megane',
      complemento: '2006/2013',
    },
    {
      montadora: 'renault',
      modelo: 'SANDERO',
      complemento: '2007/2013',
    },
    {
      montadora: 'renault',
      modelo: 'megane',
      complemento: '2006/2013',
    },
  ],
  observacao: ''
},
{
  marca: 'VIEMAR',
  referencia: '503174',
  pino: 14, 
  lado: 'DIREITO',
  descricao: 'DOBLO adventure',
  imagens: [
    'viemar-503174-1.jpg',
    'viemar-503174-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'doblo',
      complemento: 'adventure 2003/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503173',
  pino: 14, 
  lado: 'esquerdo',
  descricao: 'doblo adventure',
  imagens: [
    'viemar-503173-1.jpg',
    'viemar-503173-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'doblo',
      complemento: 'adventure 2003/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'TRW',
  referencia: 'PS4442',
  pino: 15, 
  lado: 'DIREITO',
  descricao: 'FOX/POLO/SPACEFOX VER LADO!',
  imagens: [
    'trw-ps4442.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'SEAt',  
      modelo: 'ibiza',
      complemento: 'ap 1999/2009',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2003/2008'
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2002/2014'
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacefox',
      complemento: '2006/2014'
    },
  ],
  observacao: 'VER LADO!'
},
{
  marca: 'trw',
  referencia: 'ps4441',
  pino: 15, 
  lado: 'esquerdo',
  descricao: 'FOX/POLO/SPACEFOX VER LADO!',
  imagens: [
    'trw-4441.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2003/2008'
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2002/2014'
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacefox',
      complemento: '2006/2014'
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1030',
  pino: 13.6, 
  lado: 'd/e',
  descricao: 'ipanema/kadett',
  imagens: [
    'perfect-pvi1030.jpg',
    'perfect-pvi1030-2.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'ipanema',
      complemento: '1989/1998',
    },
    {
      montadora: 'chevrolet',
      modelo: 'kadett',
      complemento: '1989/1998',
    },
    {
      montadora: 'daewoo',
      modelo: 'cielo',
      complemento: '1994/1997',
    },
    {
      montadora: 'daewoo',
      modelo: 'espero',
      complemento: '1989/1999',
    },  
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503142',
  pino: 16, 
  lado: 'd/e',
  descricao: 'corsa/montana',
  imagens: [
    'viemar-503142-1.jpg',
    'viemar-503142-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: '2002/2012',
    },
    {
      montadora: 'chevrolet',
      modelo: 'montana',
      complemento: '2004/2010',
    },
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps959',
  pino: 14, 
  lado: 'd/e',
  descricao: 'palio 00/16',
  imagens: [
    'trw-ps959.webp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'doblo',
      complemento: '2001/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'fiorino',
      complemento: '2013/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'grand siena',
      complemento: '2012/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'mobi',
      complemento: '2016...',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: '2000(fire) /2017(evo, etorq)',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: 'weekend 2000/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'siena',
      complemento: '2000/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'strada',
      complemento: '2000/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'uno',
      complemento: '2010/2016',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503255',
  pino: 18, 
  lado: 'D/E',
  descricao: 'onix/prisma/cobalt',
  imagens: [
    'viemar-503255-1.jpg',
    'viemar-503255-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'cobalt',
      complemento: '2011/2020',
    },
    {
      montadora: 'chevrolet',
      modelo: 'joy',
      complemento: '2020/2021',
    },
    {
      montadora: 'chevrolet',
      modelo: 'joy',
      complemento: 'plus 2020/2021',
    },
    {
      montadora: 'chevrolet',
      modelo: 'onix',
      complemento: '2012/2019',
    },
    {
      montadora: 'chevrolet',
      modelo: 'prisma',
      complemento: '2013/2019',
    },
    {
      montadora: 'chevrolet',
      modelo: 'sonic',
      complemento: '2012/2014',
    },
    {
      montadora: 'chevrolet',
      modelo: 'spin',
      complemento: '2012/2025',
    },
    {
      montadora: 'chevrolet',
      modelo: 'tracker',
      complemento: '2013/2019',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi096',
  pino: 15, 
  lado: 'd/e',
  descricao: 'AGILE',
  imagens: [
    'volda-pi096.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'agile',
      complemento: '',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi165',
  pino: 15, 
  lado: 'd/e',
  descricao: 'hb20',
  imagens: [
    'volda-pi165.webp'
  ],
  aplicacoes: [
    {
      montadora: 'hyunday',
      modelo: 'creta',
      complemento: '2017...',
    },
    {
      montadora: 'hyunday',
      modelo: 'elantra',
      complemento: '2011...',
    },
    {
      montadora: 'hyunday',
      modelo: 'hb20',
      complemento: '2012...',
    },
    {
      montadora: 'hyunday',
      modelo: 'hb20',
      complemento: 's 2013...',
    },
    {
      montadora: 'hyunday',
      modelo: 'hb20',
      complemento: 'x 2017...',
    },
    {
      montadora: 'hyunday',
      modelo: 'i30',
      complemento: '2011...',
    },
    {
      montadora: 'hyunday',
      modelo: 'veloster',
      complemento: '2011...',
    },
    {
      montadora: 'kia',
      modelo: 'cerato',
      complemento: '2013...',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi139',
  pino: 15, 
  lado: 'd/e',
  descricao: 'corola 08/',
  imagens: [
    'volda-pi139.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'corola',
      complemento: '2007/2025 ...',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503235',
  pino: 15, 
  lado: 'd/e',
  descricao: 'corola 08/',
  imagens: [
    'viemar-503235-1.jpg',
    'viemar-503235-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'corola',
      complemento: '2008/2019',
    },
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps4446',
  pino: 18, 
  lado: 'd/e',
  descricao: 'logan/sandero',
  imagens: [
    'trw-ps4446.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'grand scenic',
      complemento: '2007/2009',
    },
    {
      montadora: 'renault',
      modelo: 'logan',
      complemento: '2007/2017',
    },
    {
      montadora: 'renault',
      modelo: 'megane',
      complemento: '2006/2012',
    },
    {
      montadora: 'renault',
      modelo: 'sandero',
      complemento: '2007/2020',
    },
    {
      montadora: 'renault',
      modelo: 'scenic',
      complemento: '2003/2009',
    },
  ],
  observacao: ''
},
{
  marca: 'PERFECT',
  referencia: 'PVI2003',
  pino: 17.6, 
  lado: 'esquerdo',
  descricao: 'inferior',
  imagens: [
    'perfect-pvi2003.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'honda',
      modelo: 'civic',
      complemento: 'new 2006/2011',
    },
  ],
  observacao: ''
},
{
  marca: 'w4',
  referencia: 'w49016p',
  pino: 16, 
  lado: 'd/e',
  descricao: 'hilux /04 pivo sup',
  imagens: [
    'w4-9016p.webp'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'hilux',
      complemento: 'pickup/sw4 95/04',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi004',
  pino: 15, 
  lado: 'd/e',
  descricao: 'corsa 94/02',
  imagens: [
    'volda-pi004.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: '1994/2002',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi178',
  pino: 15, 
  lado: 'esquerdo',
  descricao: 'gol pivo reto',
  imagens: [
    'volda-pi178.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '1980/1994',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '1982/1995',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '1982/1993',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '1981/1995',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503124',
  pino: 18, 
  lado: 'd/e',
  descricao: 'astra /11',
  imagens: [
    'viemar-503124-1.jpg',
    'viemar-503124-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'astra',
      complemento: '1999/2011',
    },
    {
      montadora: 'chevrolet',
      modelo: 'vectra',
      complemento: '1997/2011',
    },
    {
      montadora: 'chevrolet',
      modelo: 'zafira',
      complemento: '2001/2012',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi003',
  pino: 17, 
  lado: 'd/e',
  descricao: 'LOGUS/POINTER',
  imagens: [
    'volda-pi003.png'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'escort',
      complemento: '1992/2002',
    },
    {
      montadora: 'ford',
      modelo: 'verona',
      complemento: '1993/1994',
    },
    {
      montadora: 'volkswagen',
      modelo: 'pointer',
      complemento: '1993/1994',
    },
    {
      montadora: 'volkswagen',
      modelo: 'logus',
      complemento: '1993/1994',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi133',
  pino: 19, 
  lado: 'd/e',
  descricao: 'GOLF/POLO',
  imagens: [
    'volda-pi133.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chery',
      modelo: 'celer',
      complemento: '2013...',
    },
    {
      montadora: 'seat',
      modelo: 'corboda',
      complemento: '1994/2002',
    },
    {
      montadora: 'seat',
      modelo: 'ibiza',
      complemento: '1994/2002',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: '1994/1999',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: 'classic 1996/2003',
    },
    {
      montadora: 'volkswagen',
      modelo: 'van',
      complemento: '1998/2003',
    },
  ],
  observacao: 'acompanha paraf, porca e arruela'
},
{
  marca: 'trw',
  referencia: 'ps1020',
  pino: 18, 
  lado: 'd/e',
  descricao: 'hilux /04 pivo inf',
  imagens: [
    'trw-ps1020-1.jpg',
    'trw-ps1020-2.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'hilux',
      complemento: '1998/2005',
    },
  ],
  observacao: 'acompanha: 4paraf, 4arruela, 1contrapino, 1porca'
},
{
  marca: 'trw',
  referencia: 'jbj7539',
  pino: 17, 
  lado: 'd/e',
  descricao: 'hilux 05/ pivo inf',
  imagens: [
    'trw-jtsb7539.png'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'hilux',
      complemento: '2005/2018',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503271',
  pino: 17.6, 
  lado: 'd/e',
  descricao: 's10 12/ pivo sup',
  imagens: [
    'viemar-503271-1.jpg',
    'viemar-503271-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 's10',
      complemento: '2012/2016',
    },
    {
      montadora: 'chevrolet',
      modelo: 'trailblazer',
      complemento: '2013/2016',
    },
    {
      montadora: 'isuzu',
      modelo: 'dmax',
      complemento: '2002/2012',
    },
  ],
  observacao: ''
},
{
  marca: 'w4',
  referencia: 'w4207p',
  pino: 16, 
  lado: 'd/e',
  descricao: 'pivo superior l200',
  imagens: [
    'w4-w4207p.png'
  ],
  aplicacoes: [
    {
      montadora: 'Mitsubishi',
      modelo: 'l200',
      complemento: '1993/2008',
    },
  ],
  observacao: ''
},
{
  marca: 'w4',
  referencia: 'w4206p',
  pino: 20, 
  lado: 'd/e',
  descricao: 'pivo inferior l200',
  imagens: [
    'w4-w4206p-1.png',
    'w4-w4206p-2.png'
  ],
  aplicacoes: [
    {
      montadora: 'Mitsubishi',
      modelo: 'l200',
      complemento: '1993/2000',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1053',
  pino: 17, 
  lado: 'esquerdo',
  descricao: 'palio weekend adv',
  imagens: [
    'perfect-pvi1053.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'idea',
      complemento: 'adventure 2006/2017',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: 'weekend adventure 2009/2017',
    },
    {
      montadora: 'fiat',
      modelo: 'strada',
      complemento: 'adventure 2009/2017',
    },
  ],
  observacao: ''
},
{
  marca: 'w4',
  referencia: 'w44222p',
  pino: 18, 
  lado: 'd/e',
  descricao: 'ranger pivo inf',
  imagens: [
    'w4-w44222p.png'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'ranger',
      complemento: '1998/2012',
    },
    {
      montadora: 'ford',
      modelo: 'explorer',
      complemento: '1995/2003',
    },
  ],
  observacao: ''
},
{
  marca: 'VIEMAR',
  referencia: '503104',
  pino: 16.5, 
  lado: 'd/e',
  descricao: 'fiesta 03/',
  imagens: [
    'viemar-503104-1.jpg',
    'viemar-503104-2.tmp',
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'ka',
      complemento: '2008/2013',
    },
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: '2005/2014',
    },
    {
      montadora: 'ford',
      modelo: 'ecosport',
      complemento: '2003/2012',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1019',
  pino: 19, 
  lado: 'd/e',
  descricao: 'GOLF/POLO',
  imagens: [
    'perfect-pvi1019.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: '1993/1998 EXCETO 2.0 GTI, 2.8, 2.9 VR6',
    },
    {
      montadora: 'volkswagen',
      modelo: 'passat variant',
      complemento: '1991/1997 EXCETO 1.9TD , 2.0 16V, 2.8 VR6',
    },
    {
      montadora: 'volkswagen',
      modelo: 'passat',
      complemento: '1991/1997 EXCETO 1.9TD , 2.0 16V, 2.8 VR6',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: 'classic 1996/2002',
    },
    {
      montadora: 'volkswagen',
      modelo: 'van',
      complemento: '1998/2002',
    },
    {
      montadora: 'seat',
      modelo: 'cordoba',
      complemento: '1993/2002',
    },
    {
      montadora: 'seat',
      modelo: 'ibiza',
      complemento: '1993/2002',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1021',
  pino: 16.5, 
  lado: '',
  descricao: 'fiesta/courier',
  imagens: [
    'perfect-PVI1021-1.jpg',
    'perfect-PVI1021-2.jpg',
    'perfect-PVI1021-3.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: '1996/2004',
    },
    {
      montadora: 'ford',
      modelo: 'ka',
      complemento: '1997/2007',
    },
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: 'sedan/street 2001/2007',
    },
    {
      montadora: 'ford',
      modelo: 'courier',
      complemento: '1997/2014',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1026',
  pino: 15, 
  lado: 'd/e',
  descricao: 'corsa/celta /10',
  imagens: [
    'perfect-pvi1026.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'tigra',
      complemento: '1997/2000',
    },
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: '1998/2003 (corsinha e pickup)',
    },
    {
      montadora: 'chevrolet',
      modelo: 'celta',
      complemento: '2001/2011',
    },
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: 'classic 2002/2009',
    },
    {
      montadora: 'chevrolet',
      modelo: 'prisma',
      complemento: '2006/2009',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1031',
  pino: 13, 
  lado: 'd/e',
  descricao: 'uno quadrado',
  imagens: [
    'perfect-pvi1031.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'elba',
      complemento: '1987/1992',
    },
    {
      montadora: 'fiat',
      modelo: '147',
      complemento: '1976/1988',
    },
    {
      montadora: 'fiat',
      modelo: 'fiorino',
      complemento: '1985/2011',
    },
    {
      montadora: 'fiat',
      modelo: 'oggi',
      complemento: '1976/1984',
    },
    {
      montadora: 'fiat',
      modelo: 'panorama',
      complemento: '1976/1984',
    },
    {
      montadora: 'fiat',
      modelo: 'premio',
      complemento: '1986/1992',
    },
    {
      montadora: 'fiat',
      modelo: 'uno',
      complemento: '1984/2011',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1047',
  pino: 16, 
  lado: 'd/e',
  descricao: 'corsa/montana',
  imagens: [
    'perfect-pvi1047.png'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: '2002/2012',
    },
    {
      montadora: 'chevrolet',
      modelo: 'montana',
      complemento: '2004/2010',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1057',
  pino: 15, 
  lado: 'd/e',
  descricao: 'gol g5 ver lado!',
  imagens: [
    'perfect-pvi1057.png'
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a1',
      complemento: 'assist.eletrico 2016/2018 le',
    },
    {
      montadora: 'audi',
      modelo: 'a1',
      complemento: 'hidraulico 2010/2018 le',
    },
    {
      montadora: 'audi',
      modelo: 'q3',
      complemento: 'assist.eletrico 2010/2019 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'up',
      complemento: 'cross 2014/2021 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: 'assist.eletr 2015/2019 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: 'hidr 2013/2022 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: 'mec 2013/2021 ld',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'hidr 2009/2022 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'mec g5/g6/g7 2008/2022 ld',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2012/2014 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'hidr 2010/2022 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'mec 2010/2022 ld',
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacefox',
      complemento: 'hidr 2011/2015 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'up',
      complemento: '1.0 12v 2014/2021 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: 'HIDR 2009/2022 lD',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1056',
  pino: 15, 
  lado: 'd/e',
  descricao: 'gol g5 ver lado!',
  imagens: [
    'perfect-pvi1056.png'
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a1',
      complemento: 'assist.eletrico 2010/2018 lD',
    },
    {
      montadora: 'audi',
      modelo: 'a1',
      complemento: 'hidraulico 2010/2018 lD',
    },
    {
      montadora: 'audi',
      modelo: 'q3',
      complemento: 'assist.eletrico 2010/2019 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'up',
      complemento: 'cross 2014/2021 lD',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: 'assist.eletr 2013/2022 lD',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: 'hidr 2013/2022 lD',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: 'mec 2013/2022 lE',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'hidr 2009/2022 lD',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'mec g5/g6/g7 2008/2022 lE',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2012/2014 lD',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'hidr 2010/2022 le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'mec 2010/2022 lE',
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacefox',
      complemento: 'hidr 2011/2015 lD',
    },
    {
      montadora: 'volkswagen',
      modelo: 'up',
      complemento: '1.0 12v 2014/2021 lD',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: 'mec 2009/2022 le',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi3395',
  pino: 16.5, 
  lado: 'd/e',
  descricao: 'fiesta 03/',
  imagens: [
    'perfect-PVI3395-1.jpg',
    'perfect-PVI3395-2.png'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'ecosport',
      complemento: '2003/2013',
    },
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: '2002/2014',
    },
    {
      montadora: 'ford',
      modelo: 'ka',
      complemento: '2008/2014',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1032',
  pino: 14, 
  lado: 'd/e',
  descricao: 'palio 00/16',
  imagens: [
    'perfect-PVI1032.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'doblo',
      complemento: 'exceto adventure 2002/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'fiorino',
      complemento: '2014/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'grand siena',
      complemento: '2012/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'MOBI',
      complemento: '2016/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'PALIO',
      complemento: '2000/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'PALIO',
      complemento: 'WEEKEND 2000/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'SIENA',
      complemento: '2000/2012',
    },
    {
      montadora: 'fiat',
      modelo: 'STRADA',
      complemento: '2000/2021',
    },
    {
      montadora: 'fiat',
      modelo: 'UNO',
      complemento: 'VIVACE 2010/2021',
    },
    {
      montadora: 'PEUGEOT',
      modelo: 'PARTNER',
      complemento: 'RAPID 2023/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'PERFECT',
  referencia: 'PVI9159',
  pino: 18, 
  lado: 'd/e',
  descricao: 'hilux /04 pivo inf',
  imagens: [
    'perfect-PVI9159.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'hilux',
      complemento: '1991/2004',
    },
    {
      montadora: 'toyota',
      modelo: 'hilux',
      complemento: 'sw4 1991/1995',
    },
  ],
  observacao: 'acompanha contrapino'
},
{
  marca: 'perfect',
  referencia: 'pvs1029',
  pino: 19.5, 
  lado: 'd/e',
  descricao: 'd20 93/ pivo sup',
  imagens: [
    'perfect-PVS1029.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'a10',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a20',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'a40',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'bonanza',
      complemento: '1993/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c10',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c20',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'c40',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd10',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd20',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'd40',
      complemento: '1985/1997',
    },
    {
      montadora: 'chevrolet',
      modelo: 'silverado',
      complemento: '1997/2002',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi2184',
  pino: 18, 
  lado: 'd/e',
  descricao: 'logan/sandero',
  imagens: [
    'perfect-PVI2184_B.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'logan',
      complemento: '2007/2013',
    },
    {
      montadora: 'renault',
      modelo: 'sandero',
      complemento: '2007/2013',
    },
    {
      montadora: 'renault',
      modelo: 'grand scenic',
      complemento: '2007/2009',
    },
    {
      montadora: 'renault',
      modelo: 'megane',
      complemento: '2007/2013',
    },
    {
      montadora: 'renault',
      modelo: 'scenic',
      complemento: '1992/2012',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503379',
  pino: 16, 
  lado: 'd/e',
  descricao: 'montana 2011/',
  imagens: [
    'viemar-503379-1.webp',
    'viemar-503379-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'montana',
      complemento: '2011/2021',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503383',
  pino: 17.5, 
  lado: 'd/e',
  descricao: 'new fiesta',
  imagens: [
    'viemar-503383-1.jpg',
    'viemar-503383-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'ecosport',
      complemento: '2013/2021',
    },
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: '2011/2019 modelo new fiesta',
    },
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: 'sedan 2008/2017 modelo new fiesta',
    },
    {
      montadora: 'ford',
      modelo: 'ka',
      complemento: '2014/2021',
    },
  ],
  observacao: ''
},
{
  marca: 'PERFECT',
  referencia: 'PVI0609',
  pino: 18, 
  lado: 'D/E',
  descricao: 'logan/sandero 13/',
  imagens: [
    'perfect-PVI0609_B.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'kardian',
      complemento: '2023/2025',
    },
    {
      montadora: 'renault',
      modelo: 'logan',
      complemento: 'g2 2013/2019',
    },
    {
      montadora: 'renault',
      modelo: 'sandero',
      complemento: 'g2 2013/2019',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi0311',
  pino: 18, 
  lado: 'd/e',
  descricao: 'onix/prisma/cobalt',
  imagens: [
    'perfect-PVI0311.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'cobalt',
      complemento: '2011/2020',
    },
    {
      montadora: 'chevrolet',
      modelo: 'joy',
      complemento: '2019/2023',
    },
    {
      montadora: 'chevrolet',
      modelo: 'onix',
      complemento: '2012/2019',
    },
    {
      montadora: 'chevrolet',
      modelo: 'prisma',
      complemento: '2013/2019',
    },
    {
      montadora: 'chevrolet',
      modelo: 'sonic',
      complemento: '2012/2016',
    },
    {
      montadora: 'chevrolet',
      modelo: 'spin',
      complemento: '2012/2021',
    },
    {
      montadora: 'chevrolet',
      modelo: 'tracker',
      complemento: '2012/2020',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503035',
  pino: 17, 
  lado: 'esquerdo',
  descricao: 'gol pivo curvado',
  imagens: [
    'viemar-503035-1.jpg',
    'viemar-503035-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'g2 g3 g4 1997/2014',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: 'g2 g3 g4 1996/2014',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'g2 g3 g4 1998/2010',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503190',
  pino: 17, 
  lado: 'direito',
  descricao: 'palio weekend adv',
  imagens: [
    'viemar-503190-1.jpg',
    'viemar-503190-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'idea',
      complemento: 'adventure 2006/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: 'weekend adventure 2009/2020',
    },  
    {
      montadora: 'fiat',
      modelo: 'strada',
      complemento: 'adventure 2009/2020',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503189',
  pino: 17, 
  lado: 'esquerdo',
  descricao: 'palio weekend adv',
  imagens: [
    'viemar-503189-1.jpg',
    'viemar-503189-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'idea',
      complemento: 'adventure 2006/2016',
    },
    {
      montadora: 'fiat',
      modelo: 'palio',
      complemento: 'weekend adventure 2009/2020',
    },  
    {
      montadora: 'fiat',
      modelo: 'strada',
      complemento: 'adventure 2009/2020',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503078',
  pino: 17.5, 
  lado: 'd/e',
  descricao: 'fiesta/courier',
  imagens: [
    'viemar-503078-1.webp',
    'viemar-503078-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'ford',
      modelo: 'courier',
      complemento: '1997/2013',
    },
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: '1996/2001',
    },
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: 'sedan 2002/2004',
    },
    {
      montadora: 'ford',
      modelo: 'fiesta',
      complemento: 'street 2002/2007',
    },
    {
      montadora: 'ford',
      modelo: 'ka',
      complemento: '1996/2008',
    },
  ],
  observacao: 'pino com duas medidas'
},
{
  marca: 'nakata',
  referencia: 'n99194',
  pino: 15, 
  lado: 'd/e',
  descricao: 'corola 08/',
  imagens: [
    'nakata-n99194.webp'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'corola',
      complemento: '2008/2019',
    },
  ],
  observacao: 'vem contrapino'
},
{
  marca: 'trw',
  referencia: 'ps4448',
  pino: 15, 
  lado: 'direito',
  descricao: 'gol g5 ver lado!',
  imagens: [
    'trw-ps4448.png'
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a1',
      complemento: '2010/2018',
    },
    {
      montadora: 'audi',
      modelo: 'q3',
      complemento: '2011/2019',
    },
    {
      montadora: 'volkswagen',
      modelo: 'up',
      complemento: 'cross 2014/2017',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2009/2019',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '2008/2022',
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacecross',
      complemento: '2011/2018',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '2008/2022',
    },
    
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps4449',
  pino: 15, 
  lado: 'esquerdo',
  descricao: 'gol g5 ver lado!',
  imagens: [
    'trw-ps4449.png'
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a1',
      complemento: '2010/2018',
    },
    {
      montadora: 'audi',
      modelo: 'q3',
      complemento: '2011/2019',
    },
    {
      montadora: 'volkswagen',
      modelo: 'up',
      complemento: 'cross 2014/2017',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2009/2019',
    },
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '2008/2022',
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacecross',
      complemento: '2011/2018',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '2008/2022',
    },
    
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps831',
  pino: 15, 
  lado: 'esquerdo',
  descricao: 'gol pivo reto',
  imagens: [
    'trw-ps831-1.png',
    'trw-ps831-2.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '1980/1996',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '1982/1995',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '1982/1996',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '1981/1995',
    },
  ],
  observacao: 'pivo reto'
},
{
  marca: 'viemar',
  referencia: '503123',
  pino: 16, 
  lado: 'd/e',
  descricao: 'meriva',
  imagens: [
    'viemar-503123-1.jpg',
    'viemar-503123-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'meriva',
      complemento: '2002/2012',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503070',
  pino: 16, 
  lado: 'd/e',
  descricao: 'clio',
  imagens: [
    'viemar-503070-1.jpg',
    'viemar-503070-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: '19',
      complemento: '1994/2000',
    },
    {
      montadora: 'renault',
      modelo: 'clio',
      complemento: '2003/2025',
    },
    {
      montadora: 'renault',
      modelo: 'kangoo',
      complemento: '2003/2007',
    },
    {
      montadora: 'renault',
      modelo: 'scenic',
      complemento: '1999/2003',
    },
    {
      montadora: 'renault',
      modelo: 'symbol',
      complemento: '2009/2013',
    },
  ],
  observacao: 'pivo reto'
},
{
  marca: 'perfect',
  referencia: 'pvi1004',
  pino: 15, 
  lado: 'direito',
  descricao: 'gol pivo reto',
  imagens: [
    'perfect-pvi1004.png'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'g1 1980/1992',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: 'g1 1983/1992',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'g1 1980/1992',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '1981/1992',
    },
  ],
  observacao: 'pivo reto'
},
{
  marca: 'viemar',
  referencia: '503179',
  pino: 14, 
  lado: 'D/E',
  descricao: 'idea',
  imagens: [
    'viemar-503179-1.jpg',
    'viemar-503179-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'idea',
      complemento: '2006/2016',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1010',
  pino: 17, 
  lado: 'd/e',
  descricao: 'gol pivo reto',
  imagens: [
    'perfect-pvi1010.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'g2/g3/g4 dir.mec. 1997/2013',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: 'dir.mec. 1997/2012',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'dir.mec. 1997/2009',
    },
  ],
  observacao: 'pivo reto'
},
{
  marca: 'volda',
  referencia: 'pi138',
  pino: 15, 
  lado: 'd/e',
  descricao: 'corola /08',
  imagens: [
    'volda-pi138.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'byd',
      modelo: 'dolphin',
      complemento: '2023...',
    },
    {
      montadora: 'toyota',
      modelo: 'corola',
      complemento: '1998/2008',
    },
    {
      montadora: 'toyota',
      modelo: 'corola',
      complemento: '2019...',
    },
    {
      montadora: 'toyota',
      modelo: 'rav4',
      complemento: '2000/2005',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi019',
  pino: 14, 
  lado: 'd/e',
  descricao: 's10 95/ pivo sup',
  imagens: [
    'volda-pi019.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 's10',
      complemento: '1995/2012',
    },
    {
      montadora: 'chevrolet',
      modelo: 'blazer',
      complemento: '1995/2012',
    },
  ],
  observacao: 'pivo superior'
},
{
  marca: 'volda',
  referencia: 'pi067',
  pino: 17, 
  lado: 'd/e',
  descricao: 'hilux 05/ pivo inf',
  imagens: [
    'volda-pi067.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'hilux',
      complemento: '2005/2025...',
    },
    {
      montadora: 'toyota',
      modelo: 'hilux',
      complemento: 'sw4 2005/2025...',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi027',
  pino: 16, 
  lado: 'd/e',
  descricao: 'clio',
  imagens: [
    'volda-pi027.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'renault',
      modelo: 'clio',
      complemento: '1999/2013',
    },
    {
      montadora: 'renault',
      modelo: 'kangoo',
      complemento: '2002/2007',
    },
    {
      montadora: 'renault',
      modelo: 'r19',
      complemento: '1993/2000',
    },
    {
      montadora: 'renault',
      modelo: 'symbol',
      complemento: '2009...',
    },
  ],
  observacao: 'pivo reto'
},
{
  marca: 'nakata',
  referencia: 'n99250',
  pino: 19, 
  lado: 'd/e',
  descricao: 'toro/compass/renegade',
  imagens: [
    'nakata-n99250.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'toro',
      complemento: '2015/2019',
    },
    {
      montadora: 'jeep',
      modelo: 'compass',
      complemento: '2016/2025',
    },
    {
      montadora: 'jeep',
      modelo: 'renegade',
      complemento: '2015/2023',
    },
  ],
  observacao: 'serve no flex e diesel. Acompanha 3porc e 3paraf'
},
{
  marca: 'viemar',
  referencia: '503125',
  pino: 15, 
  lado: 'd/e',
  descricao: 'corsa/celta /10',
  imagens: [
    'viemar-503125-1.jpg',
    'viemar-503125-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'celta',
      complemento: '2001/2009',
    },
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: '1998/2009',
    },
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: 'pickup 19998/2002',
    },
    {
      montadora: 'chevrolet',
      modelo: 'prisma',
      complemento: '2007/2009',
    },
    {
      montadora: 'chevrolet',
      modelo: 'tigra',
      complemento: '1997/2000',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1012',
  pino: 15, 
  lado: 'direito',
  descricao: 'gol pivo curvado',
  imagens: [
    'perfect-pvi1012.png'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'dir.mec 1993/1994',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: 'dir.mec 1993/1994',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'dir.mec 1993/1997',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: 'dir.mec 1993/1995',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1011',
  pino: 15, 
  lado: 'ESQUERDO',
  descricao: 'gol pivo curvado',
  imagens: [
    'perfect-pvi1011.png'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: 'dir.mec 1993/1994',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: 'dir.mec 1993/1994',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: 'dir.mec 1993/1997',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: 'dir.mec 1993/1995',
    },
  ],
  observacao: ''
},
{
  marca: 'VOLDA',
  referencia: 'PI090',
  pino: 15, 
  lado: 'ESQUERDO',
  descricao: 'GOLF 99/',
  imagens: [
    'volda-pi090.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a3',
      complemento: '1999/2006',
    },
    {
      montadora: 'volkswagen',
      modelo: 'bora',
      complemento: '2000/2009',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: '1999/2016...',
    },
    {
      montadora: 'volkswagen',
      modelo: 'jetta',
      complemento: '2006/2010',
    },
    {
      montadora: 'volkswagen',
      modelo: 'new beetle',
      complemento: '1999/2010',
    },
  ],
  observacao: 'lados nao mudam o formato, muda a inclinacao'
},
{
  marca: 'VOLDA',
  referencia: 'PI092',
  pino: 15, 
  lado: 'direito',
  descricao: 'GOLF 99/',
  imagens: [
    'volda-pi090.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'audi',
      modelo: 'a3',
      complemento: '1999/2006',
    },
    {
      montadora: 'volkswagen',
      modelo: 'bora',
      complemento: '2000/2009',
    },
    {
      montadora: 'volkswagen',
      modelo: 'golf',
      complemento: '1999/2016...',
    },
    {
      montadora: 'volkswagen',
      modelo: 'jetta',
      complemento: '2006/2010',
    },
    {
      montadora: 'volkswagen',
      modelo: 'new beetle',
      complemento: '1999/2010',
    },
  ],
  observacao: 'lados nao mudam o formato, muda a inclinacao'
},
{
  marca: 'VOLDA',
  referencia: 'PI247',
  pino: 15.5, 
  lado: 'D/E',
  descricao: 'city/fit/wr-v',
  imagens: [
    'volda-pi247.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'honda',
      modelo: 'city',
      complemento: '2014...',
    },
    {
      montadora: 'honda',
      modelo: 'fit',
      complemento: '2014...',
    },
    {
      montadora: 'honda',
      modelo: 'wr-v',
      complemento: '2017...',
    },
  ],
  observacao: ''
},  
{
  marca: 'volda',
  referencia: 'pi107',
  pino: 15, 
  lado: 'd/e',
  descricao: 'bravo/stilo',
  imagens: [
    'volda-pi107.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'bravo',
      complemento: '2010... 1.8 1.4',
    },
    {
      montadora: 'fiat',
      modelo: 'stilo',
      complemento: '2002/2010 1.8 2.4',
    },
  ],
  observacao: `o pino na ponta é 15, mas é um cone, então em baixo é 17 .Acompanha 3porc e 3paraf`
},
{
  marca: 'perfect',
  referencia: 'pvi1065',
  pino: 15, 
  lado: 'direito',
  descricao: 'CROSSFOX',
  imagens: [
    'perfect-pvi1065.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'crossfox',
      complemento: '2005/2017',
    },
  ],
  observacao: ''
},
{
  marca: 'perfect',
  referencia: 'pvi1064',
  pino: 15, 
  lado: 'esquerdo',
  descricao: 'CROSSFOX',
  imagens: [
    'perfect-pvi1064.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'crossfox',
      complemento: '2005/2017',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503158',
  pino: 15, 
  lado: 'd/e',
  descricao: 'FOX/POLO/SPACEFOX ver lado!',
  imagens: [
    'viemar-503158.jpg',
    'viemar-503158-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2003/2013 dm ld',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2003/2013 dh le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2002/2014 dm ld',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2002/2014 dh le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacefox',
      complemento: '2006/2010 dh le',
    },
  ],
  observacao: 'ver lado!'
},
{
  marca: 'viemar',
  referencia: '503157',
  pino: 15, 
  lado: 'd/e',
  descricao: 'FOX/POLO/SPACEFOX ver lado!',
  imagens: [
    'viemar-503157.jpg',
    'viemar-503158-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2003/2013 dm le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'fox',
      complemento: '2003/2013 dh ld',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2002/2014 dm le',
    },
    {
      montadora: 'volkswagen',
      modelo: 'polo',
      complemento: '2002/2014 dh ld',
    },
    {
      montadora: 'volkswagen',
      modelo: 'spacefox',
      complemento: '2006/2010 dh ld',
    },
  ],
  observacao: 'ver lado!'
},
{
  marca: 'volda',
  referencia: 'pi095',
  pino: 13.5, 
  lado: 'd/e',
  descricao: 'astra /96',
  imagens: [
    'volda-pi095.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'astra',
      complemento: '1994/1996',
    },
    {
      montadora: 'chevrolet',
      modelo: 'monza',
      complemento: '1982/1996',
    },
    {
      montadora: 'chevrolet',
      modelo: 'vectra',
      complemento: '1993/1997',
    },
    {
      montadora: 'opel',
      modelo: 'calibra',
      complemento: '1993/1996',
    },
  ],
  observacao: 'acompanha 4porc e 3paraf'
},
{
  marca: 'PERFECT',
  referencia: 'PVI0127',
  pino: 16, 
  lado: 'D/E',
  descricao: 'corsa/celta 10/',
  imagens: [
    'perfect-pvi0127.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 'celta',
      complemento: '2010/2016',
    },
    {
      montadora: 'chevrolet',
      modelo: 'corsa',
      complemento: 'classic 2010/2015',
    },
    {
      montadora: 'chevrolet',
      modelo: 'prisma',
      complemento: '2010/2012',
    },
  ],
  observacao: ''
},
{
  marca: 'volda',
  referencia: 'pi167',
  pino: 14, 
  lado: 'd/e',
  descricao: 'etios/yaris',
  imagens: [
    'volda-pi167.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'etios',
      complemento: '2012...',
    },
    {
      montadora: 'toyota',
      modelo: 'etios',
      complemento: 'cross 2013...',
    },
    {
      montadora: 'toyota',
      modelo: 'yaris',
      complemento: '2018...',
    },
    {
      montadora: 'toyota',
      modelo: 'yaris',
      complemento: 'sedan 2018...',
    },
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'jbj1321',
  pino: 21, 
  lado: 'd/e',
  descricao: 's10 12/ pivo sup',
  imagens: [
    'trw-jbj1321.jpg'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 's10',
      complemento: '2012/2025...',
    },
    {
      montadora: 'chevrolet',
      modelo: 'trailblazer',
      complemento: '2012/2020',
    },
  ],
  observacao: 'acompanha 4paraf 4arruelas 5porcas 1contrapino' 
},
{
  marca: 'viemar',
  referencia: '503454',
  pino: 16, 
  lado: 'direito',
  descricao: 'ARGO/cronos/nova strada',
  imagens: [
    'viemar-503454-1.jpg',
    'viemar-503454-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'argo',
      complemento: '2018/2025',
    },
    {
      montadora: 'fiat',
      modelo: 'cronos',
      complemento: '2019/2025',
    },
    {
      montadora: 'fiat',
      modelo: 'strada',
      complemento: '2021/2025',
    },
    {
      montadora: 'fiat',
      modelo: 'strada',
      complemento: 'endurence 2021/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503274',
  pino: 14, 
  lado: 'd/e',
  descricao: 'etios/yaris',
  imagens: [
    'viemar-503274-1.jpg',
    'viemar-503274-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'toyota',
      modelo: 'etios',
      complemento: '2012/2021',
    },
    {
      montadora: 'toyota',
      modelo: 'yaris',
      complemento: '2019/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503052',
  pino: 17, 
  lado: 'd/e',
  descricao: 's10 95/ pivo inf',
  imagens: [
    'viemar-503052-1.jpg',
    'viemar-503052-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'chevrolet',
      modelo: 's10',
      complemento: '1995/2011',
    },
    {
      montadora: 'chevrolet',
      modelo: 'blazer',
      complemento: '1996/2011',
    },
  ],
  observacao: ''
},
{
  marca: 'viemar',
  referencia: '503453',
  pino: 16, 
  lado: 'esquerdo',
  descricao: 'ARGO/CRONOS/NOVA STRADA',
  imagens: [
    'viemar-503453-1.jpg',
    'viemar-503453-2.tmp'
  ],
  aplicacoes: [
    {
      montadora: 'fiat',
      modelo: 'argo',
      complemento: '2018/2025',
    },
    {
      montadora: 'fiat',
      modelo: 'cronos',
      complemento: '2019/2025',
    },
    {
      montadora: 'fiat',
      modelo: 'STRADA',
      complemento: '2021/2025',
    },
    {
      montadora: 'fiat',
      modelo: 'STRADA',
      complemento: 'ENDURANCE 2021/2025',
    },
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps833',
  pino: 15, 
  lado: 'direito',
  descricao: 'GOL PIVO CURVADO',
  imagens: [
    'perfect-pvi1012.png'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '1984/1996',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '1988/1995',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '1986/1997',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '1988/1995',
    },
  ],
  observacao: ''
},
{
  marca: 'trw',
  referencia: 'ps834',
  pino: 15, 
  lado: 'esquerdo',
  descricao: 'GOL PIVO CURVADO',
  imagens: [
    'perfect-pvi1011.png'
  ],
  aplicacoes: [
    {
      montadora: 'volkswagen',
      modelo: 'gol',
      complemento: '1984/1996',
    },
    {
      montadora: 'volkswagen',
      modelo: 'parati',
      complemento: '1988/1995',
    },
    {
      montadora: 'volkswagen',
      modelo: 'saveiro',
      complemento: '1986/1997',
    },
    {
      montadora: 'volkswagen',
      modelo: 'voyage',
      complemento: '1988/1995',
    },
  ],
  observacao: ''
},
/*
{
  marca: '',
  referencia: '',
  pino: 0, 
  lado: '',
  descricao: '',
  imagens: [
    ''
  ],
  aplicacoes: [
    {
      montadora: '',
      modelo: '',
      complemento: '',
    },
  ],
  observacao: ''
},
*/
]
