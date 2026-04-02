
/*
    -----  MODELO A SEGUIR  -----
{
  marca: '',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '',
  descricao: '',
  obs: '',
  componentes: '',
  imagens: [],
  propriedades:{
    tamanhos: ['']
  },
  aplicacao: [
    {
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
*/

const produtos = [
{
  marca: 'Dyna',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '15E',
  descricao: 'palheta parabrisa 15"',
  obs: 'palheta de ferro <br>Tamanho da trava: 4mm',
  componentes: '1 palheta',
  imagens: ['avx-34684.jpeg'],
  propriedades:{
    tamanhos: ['15"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '1330',
  descricao: 'palheta parabrisa 13"',
  obs: 'palheta de silicone <br>Tamanho da trava: 4mm',
  componentes: '1 palheta',
  imagens: ['giraparts-10010t-1.jpeg'],
  propriedades:{
    tamanhos: ['13"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '1350',
  descricao: 'palheta parabrisa 14"',
  obs: 'palheta de silicone <br>Tamanho da trava: 4mm',
  componentes: '1 palheta',
  imagens: ['giraparts-10010t-1.jpeg'],
  propriedades:{
    tamanhos: ['14"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'Gira Parts',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '100-14T',
  descricao: 'palheta parabrisa 14"',
  obs: 'palheta de silicone <br>Tamanho da trava: 3,5mm',
  componentes: '1 palheta',
  imagens: ['giraparts-10010t-1.jpeg'],
  propriedades:{
    tamanhos: ['14"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'Gira Parts',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '100-15T',
  descricao: 'palheta parabrisa 15"',
  obs: 'palheta de silicone <br>Tamanho da trava: 3,5mm',
  componentes: '1 palheta',
  imagens: ['giraparts-10010t-1.jpeg'],
  propriedades:{
    tamanhos: ['15"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'Gira Parts',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '100-10T',
  descricao: 'palheta parabrisa 10"',
  obs: 'palheta de silicone <br>Tamanho da trava: 4mm',
  componentes: '1 palheta',
  imagens: ['giraparts-10010t-1.jpeg'],
  propriedades:{
    tamanhos: ['10"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Sem marca"
  referencia: '10E',
  descricao: 'palheta parabrisa 10"',
  obs: 'palheta de ferro <br>Tamanho da trava: 4mm',
  componentes: '1 palheta',
  imagens: ['avx-34684.jpeg'],
  propriedades:{
    tamanhos: ['10"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'bosch',
      codigos: [ {valor: '3397011593', obs: ''} ]
    }
  ]
},
{
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Sem marca"
  referencia: '12E',
  descricao: 'palheta parabrisa 12"',
  obs: 'palheta de ferro <br>Tamanho da trava: 4mm',
  componentes: '1 palheta',
  imagens: ['avx-34684.jpeg'],
  propriedades:{
    tamanhos: ['12"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'bosch',
      codigos: [ 
        {valor: '3397011594', obs: ''},
       ]
    },
    
  ]
},
{
  marca: 'AVX',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Sem marca"
  referencia: '34684',
  descricao: 'palheta parabrisa 16"',
  obs: 'palheta de ferro <br>Tamanho da trava: 4mm',
  componentes: '1 palheta',
  imagens: ['avx-34684.jpeg'],
  propriedades:{
    tamanhos: ['16"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'AVX',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Sem marca"
  referencia: '32000',
  descricao: 'palheta parabrisa 12"',
  obs: 'palheta de ferro',
  componentes: '1 palheta',
  imagens: ['avx-32000.jpeg'],
  propriedades:{
    tamanhos: ['12"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'AVX',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Sem marca"
  referencia: '31569',
  descricao: 'palheta parabrisa 19"',
  obs: 'palheta de ferro',
  componentes: '1 palheta',
  imagens: ['avx-31569.jpeg'],
  propriedades:{
    tamanhos: ['19"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'AVX',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Sem marca"
  referencia: '34002',
  descricao: 'palheta parabrisa 10"',
  obs: 'palheta de plástico',
  componentes: '1 palheta',
  imagens: ['avx-34007-1.jpg'],
  propriedades:{
    tamanhos: ['10"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'FIAT', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: 'Uno',
          modelo: '', 
          anoInicio: '2011',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'AVX',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "AVX" "Sem marca"
  referencia: '34007',
  descricao: 'palheta parabrisa 11"',
  obs: 'palheta de plástico',
  componentes: '1 palheta',
  imagens: ['avx-34007-1.jpg'],
  propriedades:{
    tamanhos: ['11"'],
    posicao: 'ts' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'MQ',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: 'MQ0035',
  descricao: 'palheta parabrisa 20"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['20"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'MQ',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: 'MQ0033',
  descricao: 'palheta parabrisa 18"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['18"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'MQ',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: 'MQ0032',
  descricao: 'palheta parabrisa 16"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['16"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: '1500',
  descricao: 'palheta parabrisa 20"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['20"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: '1330',
  descricao: 'palheta parabrisa 13"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['13"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'Cinoy',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: 'YN-PS013',
  descricao: 'palheta parabrisa 13"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['13"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: '1380',
  descricao: 'palheta parabrisa 15"',
  obs: 'palheta de silicone <br>Tamanho da trava: 8mm',
  componentes: '1 palheta',
  imagens: ['mtf-1550-1.jpeg'],
  propriedades:{
    tamanhos: ['15"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'YMAX',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: '',
  descricao: 'palheta parabrisa 13"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['13"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: '1700',
  descricao: 'palheta parabrisa 28"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['28"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: 'AF26',
  descricao: 'palheta parabrisa 26"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['bosch-af056-1-removebg-preview.png'],
  propriedades:{
    tamanhos: ['26"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'bosch',
      codigos: [ {valor: '3397006899', obs: ''} ]
    }
  ]
},
{
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: '1600',
  descricao: 'palheta parabrisa 24"',
  obs: 'palheta de silicone <br>Código Sertaneja: 3500',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['24"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: '1600',
  descricao: 'palheta parabrisa 24"',
  obs: 'palheta de silicone <br>Tamanho da trava: 8mm <br>Código Sertaneja: 1064',
  componentes: '1 palheta',
  imagens: ['mtf-1600-1.jpeg'],
  propriedades:{
    tamanhos: ['24"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: "YMAX",  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "YMAX" "Sem marca"
  referencia: '',
  descricao: 'palheta parabrisa 21"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['21"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
  {
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: '1650',
  descricao: 'palheta parabrisa 26"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['26"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'MQ',
      codigos: [ {valor: 'MQ0039', obs: ''} ]
    }
  ]
},
{
  marca: 'MQ',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'MQ0039',
  descricao: 'palheta parabrisa 26"',
  obs: 'palheta de silicone',
  componentes: '1 palheta',
  imagens: ['tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['26"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'MTF',
      codigos: [ {valor: '1650', obs: ''} ]
    }
  ]
},
{
  marca: 'MTF',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: '1550',
  descricao: 'palheta parabrisa 22"',
  obs: 'palheta de silicone <br>Tamanho da trava: 8mm',
  componentes: '1 palheta',
  imagens: ['mtf-1550-1.jpeg'],
  propriedades:{
    tamanhos: ['22"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'Valeo',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'CX340',
  descricao: 'palheta parabrisa 21"/19"',
  obs: 'palheta de ferro',
  componentes: '2 palhetas',
  imagens: ['dyna-314-1.jpg','dyna-314-2.png','dyna-314-3.mp4'],
  propriedades:{
    tamanhos: ['21"','19"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'Dyna',
      codigos: [ {valor: '340', obs: ''} ]
    }
  ]
},
{
  marca: 'Dyna',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: '340',
  descricao: 'palheta parabrisa 21"/19"',
  obs: 'palheta de ferro',
  componentes: '2 palhetas',
  imagens: ['dyna-314-1.jpg','dyna-314-2.png','dyna-314-3.mp4'],
  propriedades:{
    tamanhos: ['21"','19"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'valeo',
      codigos: [ {valor: 'CX340', obs: ''} ]
    }
  ]
},
{
  marca: 'Dyna',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'S402',
  descricao: 'palheta parabrisa 24"/15"',
  obs: 'palheta de silicone <br>Tamanho da trava: 8mm',
  componentes: '2 palhetas',
  imagens: ['dyna-s402-1.jpg','dyna-s405-2.jpeg'],
  propriedades:{
    tamanhos: ['24"','15"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    } */
  ],
  referenciaCruzada: [
    /*{
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }*/
  ]
},  
{
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'AP16M',
  descricao: 'palheta parabrisa 16"',
  obs: `palheta de silicone <br>
  <a href="https://rb-aa.bosch.com/wiperblade-videos/1987435e00_1" target="_blank" style="cursor: pointer;">INFO trava_1</a>  <br>
  <a href="https://rb-aa.bosch.com/wiperblade-videos/1987435E00_2A" target="_blank" style="cursor: pointer;">INFO trava_2A</a> <br>
  <a href="https://rb-aa.bosch.com/wiperblade-videos/1987435E00_2B" target="_blank" style="cursor: pointer;">INFO trava_2B</a> <br>
  <a href="https://rb-aa.bosch.com/wiperblade-videos/1987435E00_2C" target="_blank" style="cursor: pointer;">INFO trava_2C</a> <br>` ,
  componentes: '1 palheta + 4 soquetes diferentes',
  imagens: ['bosch-ap15m-1.jpeg','bosch-ap15m-2.jpeg','bosch-ap15m-3.jpeg'],
  propriedades:{
    tamanhos: ['16"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'bosch',
      codigos: [ {valor: '3397013059', obs: ''} ]
    },
    {
      marca: 'VALEO',
      codigos: [ {valor: '578411', obs: ''} ]
    },
  ]
},
{
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'AP15M',
  descricao: 'palheta parabrisa 15"',
  obs: `palheta de silicone <br>
  <a href="https://rb-aa.bosch.com/wiperblade-videos/1987435e00_1" target="_blank" style="cursor: pointer;">INFO trava_1</a>  <br>
  <a href="https://rb-aa.bosch.com/wiperblade-videos/1987435E00_2A" target="_blank" style="cursor: pointer;">INFO trava_2A</a> <br>
  <a href="https://rb-aa.bosch.com/wiperblade-videos/1987435E00_2B" target="_blank" style="cursor: pointer;">INFO trava_2B</a> <br>
  <a href="https://rb-aa.bosch.com/wiperblade-videos/1987435E00_2C" target="_blank" style="cursor: pointer;">INFO trava_2C</a> <br>` ,
  componentes: '1 palheta + 4 soquetes diferentes',
  imagens: ['bosch-ap15m-1.jpeg','bosch-ap15m-2.jpeg','bosch-ap15m-3.jpeg'],
  propriedades:{
    tamanhos: ['15"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'Bosch',
      codigos: [ {valor: '3397013058', obs: ''} ]
    },
    {
      marca: 'DYNA',
      codigos: [ {valor: 'S38A', obs: ''} ]
    },
  ]
},
  {
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'AF323',
  descricao: 'palheta parabrisa 22"/18"',
  obs: 'palheta de silicone',
  componentes: '2 palhetas',
  imagens: ['bosch-af056-1-removebg-preview.png','tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['22"','18"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'Bosch',
      codigos: [ {valor: '3397007931', obs: ''} ]
    },
    {
      marca: 'VALEO',
      codigos: [ {valor: 'V508', obs: ''} ]
    },
  ]
},
{
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'SD10',
  descricao: 'palheta parabrisa 24"/16"',
  obs: 'palheta parabrisa <br>Trava tamanho 7,5mm',
  componentes: '',
  imagens: ['bosch-sd10-1.png','tipos-de-trava/trava1.jpg'],
  propriedades:{
    tamanhos: ['24"','16"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'Bosch',
      codigos: [ {valor: '3397016122', obs: ''} ]
    }
  ]
},
{
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'AF340',
  descricao: 'palheta parabrisa 21"/19"',
  obs: 'palheta de silicone',
  componentes: '2 palhetas',
  imagens: ['bosch-af056-1-removebg-preview.png','tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['21"','19"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    /*{
      montadora: '', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: '',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    }*/
  ],
  referenciaCruzada: [
    {
      marca: 'Bosch',
      codigos: [ {valor: '3397007928', obs: ''} ]
    },
    {
      marca: 'DYNA',
      codigos: [ {valor: 'S4', obs: ''} ]
    },
    {
      marca: 'VALEO',
      codigos: [ {valor: 'V504', obs: ''} ]
    },
  ]
},
{
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'AF056',
  descricao: 'palheta parabrisa 18"/18"',
  obs: 'palheta de silicone',
  componentes: '2 palhetas',
  imagens: ['bosch-af056-1-removebg-preview.png','tipos-de-trava/trava-gancho.jpg'],
  propriedades:{
    tamanhos: ['18"','18"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'Chevrolet', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: 'Astra', modelo: '', 
          anoInicio: '1994', anoFim: '1996', 
          motor: '2.0 MPFI', complemento: ''
        },
        {
          nome: 'Celta', modelo: '', 
          anoInicio: '', anoFim: '', 
          motor: '', complemento: 'Todos'
        },
        {
          nome: 'Corsa', modelo: '', 
          anoInicio: '', anoFim: '', 
          motor: '', complemento: 'Todos'
        },
        {
          nome: 'Grand Blazer', modelo: '', 
          anoInicio: '1998', anoFim: '1999', 
          motor: '', complemento: ''
        },
        {
          nome: 'Ipanema', modelo: '', 
          anoInicio: '1989', anoFim: '1997', 
          motor: '', complemento: ''
        },
        {
          nome: 'Kadett', modelo: '', 
          anoInicio: '1989', anoFim: '1997', 
          motor: '', complemento: ''
        },
        {
          nome: '', modelo: '', 
          anoInicio: '', anoFim: '', 
          motor: '', complemento: ''
        },
      ]
    },
    
  ],
  referenciaCruzada: [
    {
      marca: 'Bosch',
      codigos: [ {valor: '3397009823', obs: ''} ]
    },
    {
      marca: 'DYNA',
      codigos: [ {valor: 'S1', obs: ''} ]
    },
    {
      marca: 'VALEO',
      codigos: [ {valor: 'V501', obs: ''} ]
    },
  ]
},
{
  marca: 'Bosch',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'SD7',
  descricao: 'palheta parabrisa 22"/16"',
  obs: 'palheta de silicone <br>Tamanho da trava: 8mm',
  componentes: '2 palhetas',
  imagens: ['bosch-sd7-1.jpeg','tipos-de-trava/trava1.jpg'],
  propriedades:{
    tamanhos: ['22"','16"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'Volkswagen', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: 'Gol',
          modelo: '', 
          anoInicio: '2012',
          anoFim: '2023', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'Saveiro',
          modelo: '', 
          anoInicio: '2009',
          anoFim: '', 
          motor: '',  
          complemento: 'G5/G6...'
        },
        {
          nome: 'Voyage',
          modelo: '', 
          anoInicio: '2012',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'Bosch',
      codigos: [ {valor: '3397016121', obs: ''} ]
    },
    {
      marca: 'DYNA',
      codigos: [ {valor: 'SD7', obs: ''} ]
    },
    {
      marca: 'VALEO',
      codigos: [ {valor: 'VSD7', obs: ''} ]
    },
  ]
},
{
  marca: 'Vclear',  // "Vclear" "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: 'VL-VC2416B',
  descricao: 'palheta parabrisa 24"/16"',
  obs: 'palheta de silicone <br>Sistema da loja cadastrado com o código da DRAutoParts <strong style="color: red;">DR82149</strong> <br>Tamanho da trava: 8mm',
  componentes: '2 palhetas',
  imagens: ['vclear-vlvc2416b-1.png'],
  propriedades:{
    tamanhos: ['24"','16"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'FIAT', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Palio', modelo: '', 
          anoInicio: '2012', anoFim: '2017', 
          motor: '',  complemento: ''
        },
        {
          nome: 'Grand Siena', modelo: '', 
          anoInicio: '2012', anoFim: '2016', 
          motor: '',  complemento: ''
        },
      ]
    },
    {
      montadora: 'Chevrolet', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Onix', modelo: '', 
          anoInicio: '2019', anoFim: '2020', 
          motor: '',  complemento: ''
        },
        {
          nome: 'Tracker', modelo: '', 
          anoInicio: '2020', anoFim: '', 
          motor: '',  complemento: ''
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: "MTF",  // "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "MTF" "Sem marca"
  referencia: '1600 plug',
  descricao: 'palheta parabrisa 24"',
  obs: 'palheta de silicone <br>Tamanho da trava: 4mm <br>Código Sertaneja: 3844',
  componentes: '1 palheta',
  imagens: ['mtf-1600plug-1.jpeg'],
  propriedades:{
    tamanhos: ['24"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'FIAT', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Idea',
          modelo: '', 
          anoInicio: '2011',
          anoFim: '2014', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'Idea',
          modelo: 'Adventure', 
          anoInicio: '2011',
          anoFim: '2014', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Chevrolet', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Onix',
          modelo: '', 
          anoInicio: '2013',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'Prisma',
          modelo: '(modelo novo)', 
          anoInicio: '2013',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'Bosch',
      codigos: [ 
        {valor: 'SD6', obs: 'par'},
        {valor: '3397014475', obs: 'par'},
      ]
    }
  ]
},
{
  marca: 'Vetor',  // "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "Sem marca"
  referencia: 'PVF2416P',
  descricao: 'palheta parabrisa 24"/16"',
  obs: 'palheta de silicone <br>Motorista 24" / Passageiro 16" <br>Tamanho da trava: 8mm',
  componentes: '2 palhetas',
  imagens: ['vetor-pvf2416p-2.jpeg','vetor-pvf2416p-3.png','vetor-pvf2416p-1.jpg'],
  propriedades:{
    tamanhos: ['24"','16"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'BYD', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Song Pro',
          modelo: '', 
          anoInicio: '2024',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    },
    {
      montadora: 'Chery', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Arrizo',
          modelo: '5', 
          anoInicio: '2019',
          anoFim: '2021', 
          motor: '',  
          complemento: ''
        }
      ]
    },
    {
      montadora: 'Chevrolet', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Tracker',
          modelo: '', 
          anoInicio: '2020',
          anoFim: '', 
          motor: '',  
          complemento: ''
        }
      ]
    },
    {
      montadora: 'FIAT', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Grand Siena',
          modelo: '', 
          anoInicio: '2012',
          anoFim: '2020', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'Palio',
          modelo: 'Novo', 
          anoInicio: '2012',
          anoFim: '2017', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Peugeot', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: '208',
          modelo: '', 
          anoInicio: '2021',
          anoFim: '2026', 
          motor: '',  
          complemento: ''
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'Chevrolet',
      codigos: [ 
        {valor: '26249760', obs: ''},
        {valor: '26249758', obs: ''},
        {valor: '26433764', obs: ''},
        {valor: '26433760', obs: ''},
        {valor: '42772945', obs: ''},
        {valor: '42724844', obs: ''},
       ]
    },
    {
      marca: 'Fiat',
      codigos: [ 
        {valor: '7087697', obs: ''},
       ]
    },
    {
      marca: 'Peugeot',
      codigos: [ 
        {valor: '9829426680', obs: ''},
        {valor: '9829426780', obs: ''},
       ]
    },
    {
      marca: 'AUTOIMPACT',
      codigos: [ 
        {valor: 'PF24', obs: ''},
        {valor: 'PF16', obs: ''},
       ]
    },
    {
      marca: 'BOSCH',
      codigos: [ 
        {valor: 'AP16M', obs: '16"'},
        {valor: '3397013059', obs: '16"'},
        {valor: 'AP24M', obs: '24"'},
        {valor: '3397013066', obs: '24"'},
       ]
    },
    {
      marca: 'CINOY',
      codigos: [ 
        {valor: 'YN-PS1917D', obs: ''},
        {valor: 'YN-PS2416B', obs: ''},
       ]
    },
    {
      marca: 'DYNA',
      codigos: [ 
        {valor: 'S460', obs: ''},
        {valor: 'S440', obs: ''},
       ]
    },  
  ]
},
{
  marca: 'Vetor',  // "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "Sem marca"
  referencia: 'PVF2614H',
  descricao: 'palheta parabrisa 26"/14"',
  obs: 'palheta de silicone <br>Motorista 26" / Passageiro 14"',
  componentes: '2 palhetas',
  imagens: ['vetor-pvf2614h-2.jpeg','vetor-pvf2614h-1.jpg'],
  propriedades:{
    tamanhos: ['26"','14"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'Hyundai', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery" "Hyundai"
      carros: [
        {
          nome: 'HB20',
          modelo: '', 
          anoInicio: '2020',
          anoFim: '2026', 
          motor: '',  
          complemento: ''
        }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'Hyundai',
      codigos: [ 
        {valor: '98350R1000', obs: ''},
        {valor: '98360R1000', obs: ''},  
      ]
    },
    {
      marca: 'AUTOIMPACT',
      codigos: [ 
        {valor: 'PB26', obs: ''},
        {valor: 'PB14', obs: ''},  
      ]
    },
    {
      marca: 'DYNA',
      codigos: [ 
        {valor: 'S465', obs: ''},
        {valor: 'S435', obs: ''},  
      ]
    },
  ]
},
{
  marca: 'Dyna',  // "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "Sem marca"
  referencia: 'S405',
  descricao: 'palheta parabrisa 21"/20"',
  obs: 'palheta de silicone <br>Tamanho da trava: 8mm',
  componentes: '2 palhetas',
  imagens: ['dyna-s405-1.jpg','dyna-s405-2.jpeg'],
  propriedades:{
    tamanhos: ['21"','20"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'Renault', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "Chery"
      carros: [
        {
          nome: 'Logan',
          modelo: '', 
          anoInicio: '2013',
          anoFim: '2022', 
          motor: '',  
          complemento: 'Todas as versões: Zen, Life, Iconic, Intense, Dynamique, Exclusive, Expression, Authentique'
        },
        {
          nome: 'Sandero',
          modelo: '', 
          anoInicio: '2014',
          anoFim: '2022', 
          motor: '',  
          complemento: 'Incluindo versões Zen, Life, Intense, GT Line, Sport RS, S Edition, Stepway, e variações'
        },
      ]
    },
    {
      montadora: 'Jeep',
      carros: [
        {
          nome: 'Renegade',
          modelo: '', 
          anoInicio: '2015',
          anoFim: '2016', 
          motor: '',  
          complemento: 'Versões Sport, Longitude, Trailhawk'
        },
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'Dyna',  // "Dyna" "Vetor" "Valeo" "Bosch" "MQ" "Cinoy" "Sem marca"
  referencia: '314',
  descricao: 'palheta parabrisa 22"/16"',
  obs: 'palheta de ferro',
  componentes: '2 palhetas',
  imagens: ['dyna-314-1.jpg','dyna-314-2.png','dyna-314-3.mp4'],
  propriedades:{
    tamanhos: ['22"','16"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'Volkswagen', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER"
      carros: [
        {
          nome: 'Gol',
          modelo: 'G5', 
          anoInicio: '2008',
          anoFim: '2012', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'Gol',
          modelo: 'G6', 
          anoInicio: '2015',
          anoFim: '2017', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'Voyage',
          modelo: '', 
          anoInicio: '2008',
          anoFim: '2017', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'Saveiro',
          modelo: 'G5', 
          anoInicio: '2009',
          anoFim: '2012', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Kia', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER"
      carros: [
        {
          nome: 'Picanto',
          modelo: '', 
          anoInicio: '2006',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },

      ]
    },
    {
      montadora: 'JAC', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "JAC"
      carros: [
        {
          nome: 'J3',
          modelo: '', 
          anoInicio: '2011',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Chery', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "JAC" "Chery"
      carros: [
        {
          nome: 'Face',
          modelo: '', 
          anoInicio: '2010',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'S18',
          modelo: '', 
          anoInicio: '2010',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Nissan', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "JAC" "Chery"
      carros: [
        {
          nome: 'Tiida',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Ford', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER" "JAC" "Chery"
      carros: [
        {
          nome: 'Ecosport',
          modelo: '', 
          anoInicio: '',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'Cinoy',  // "Vetor" "Valeo" "bosch" "mq" "sem marca"
  referencia: 'YN-PS2615B',
  descricao: 'palheta parabrisa 26"/15"',
  obs: 'palhetas de silicone <br>Tamanho da trava: 8mm',
  componentes: '2 palhetas',
  imagens: ['cinoy-ynps2615b-1.png','cinoy-ynps2615b-4.png','cinoy-ynps2615b-2_6UZ1gW9j.mp4'],
  propriedades:{
    tamanhos: ['26"','15"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'Ford', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER"
      carros: [
        {
          nome: 'Fiesta',
          modelo: '', 
          anoInicio: '2011',
          anoFim: '2019', 
          motor: '',  
          complemento: ''
        }
      ]
    },
    {
      montadora: 'Honda', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER"
      carros: [
        {
          nome: 'Civic',
          modelo: '', 
          anoInicio: '2017',
          anoFim: '2025', 
          motor: '',  
          complemento: ''
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'Original',
      codigos: [ 
        {valor: 'PE8Z17528A', obs: ''},
        {valor: 'PE8Z17528B', obs: ''},
      ]
    }
  ]
},
{
  marca: 'Bosch',  // "Vetor" "Valeo" "Bosch" "MQ" "Sem marca"
  referencia: 'SD6',
  descricao: 'palheta parabrisa 24"/14"',
  obs: 'palhetas de silicone <br>Tamanho da trava: 4mm',
  componentes: '2 palhetas',
  imagens: ['bosch-sd6-1.jpg'],
  propriedades:{
    tamanhos: ['24"','14"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'Chevrolet', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover" "DAEWOO" "CHRYSLER"
      carros: [
        {
          nome: 'Onix',
          modelo: '', 
          anoInicio: '10/2012',
          anoFim: '01/2020', 
          motor: '1.0 flex',  
          complemento: ''
        },
        {
          nome: 'Onix',
          modelo: '', 
          anoInicio: '10/2012',
          anoFim: '01/2019',
          motor: '1.4 Flex',  
          complemento: ''
        },
        {
          nome: 'Prisma',
          modelo: '', 
          anoInicio: '03/2013',
          anoFim: '12/2019', 
          motor: '1.0 Flex',  
          complemento: ''
        },
        {
          nome: 'Prisma',
          modelo: '', 
          anoInicio: '03/2013',
          anoFim: '12/2019', 
          motor: '1.4 Flex',  
          complemento: ''
        }
      ]
    },
    
  ],
  referenciaCruzada: [
    {
      marca: 'Bosch',
      codigos: [ {valor: '3397014475', obs: ''} ]
    },
    {
      marca: 'MTF',
      codigos: [ {valor: '1600 plug', obs: '24"'} ]
    },
    {
      marca: 'DYNA',
      codigos: [ {valor: 'SD6', obs: ''} ]
    },
    {
      marca: 'VALEO',
      codigos: [ {valor: 'VSD6', obs: ''} ]
    }
  ]
},
  {
  marca: 'Valeo',  // "Vetor" "Valeo" "bosch" "mq" "sem marca"
  referencia: 'V402',
  descricao: 'palheta parabrisa 24"/15"',
  obs: 'palheta de silicone <br>Tamanho da trava: 7,5mm',
  componentes: '2 palhetas',
  imagens: ['Valeo-v402-1.png','Valeo-v402-2.png'],
  propriedades:{
    tamanhos: ['24"','15"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'FIAT', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi"
      carros: [
        {
          nome: 'ARGO',
          modelo: '', 
          anoInicio: '2017',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'CRONOS',
          modelo: '', 
          anoInicio: '2018',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },{
          nome: 'GRAND SIENA',
          modelo: '', 
          anoInicio: '2012',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },{
          nome: 'IDEA',
          modelo: '', 
          anoInicio: '2014',
          anoFim: '2017', 
          motor: '',  
          complemento: ''
        },{
          nome: 'PALIO',
          modelo: '', 
          anoInicio: '2012',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },{
          nome: 'PULSE',
          modelo: '', 
          anoInicio: '2021',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'UNO',
          modelo: '', 
          anoInicio: '2014',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Ford', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi"
      carros: [
        {
          nome: 'ECOSPORT',
          modelo: '', 
          anoInicio: '2017',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'RANGER',
          modelo: '', 
          anoInicio: '2017',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Chevrolet', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi"
      carros: [
        {
          nome: 'AGILE',
          modelo: '', 
          anoInicio: '2009',
          anoFim: '2011', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Jac', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Jac"
      carros: [
        {
          nome: 'J3',
          modelo: '', 
          anoInicio: '2011',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'J5',
          modelo: '', 
          anoInicio: '2010',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Jeep', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover"
      carros: [
        {
          nome: 'RENEGADE',
          modelo: '', 
          anoInicio: '2015',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: "Land Rover", // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "Land Rover"
      carros: [
        {
          nome: 'RANGE ROVER',
          modelo: '', 
          anoInicio: '1994',
          anoFim: '2002', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Toyota', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "DAEWOO"
      carros: [
        {
          nome: 'HILUX',
          modelo: 'PICKUP', 
          anoInicio: '2017',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'HILUX',
          modelo: 'SW4', 
          anoInicio: '2017',
          anoFim: '', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'DAEWOO', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "DAEWOO"
      carros: [
        {
          nome: 'NUBIRA',
          modelo: '', 
          anoInicio: '2003',
          anoFim: '2005', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'Citroen', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "DAEWOO" "CHRYSLER"
      carros: [
        {
          nome: 'AIRCROSS',
          modelo: '', 
          anoInicio: '2011',
          anoFim: '2014', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'AX',
          modelo: '', 
          anoInicio: '1988',
          anoFim: '1996', 
          motor: '',  
          complemento: ''
        },
        {
          nome: 'C3',
          modelo: '', 
          anoInicio: '2011',
          anoFim: '2014', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'CHRYSLER', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "DAEWOO" "CHRYSLER"
      carros: [
        {
          nome: '300C',
          modelo: '', 
          anoInicio: '2004',
          anoFim: '2010', 
          motor: '',  
          complemento: ''
        },
      ]
    },
    {
      montadora: 'BMW', // "Volkswagen" "Toyota" "Renault" "Peugeot" "Nissan" "Mercedes-Benz" "Kia" "Jeep" "Jeep" "Honda" "Ford" "FIAT" "Citroen" "Chevrolet" "BYD" "BMW" "Audi" "Mitsubishi" "DAEWOO"
      carros: [
        {
          nome: 'X5',
          modelo: '', 
          anoInicio: '1999',
          anoFim: '2006', 
          motor: '',  
          complemento: ''
        },
      ]
    },

  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [ {valor: '', obs: ''} ]
    }
  ]
},
{
  marca: 'Vetor',
  referencia: 'PVF2724',
  descricao: 'palheta parabrisa 27"/24"',
  obs: 'palhetas de silicone <br>Motorista 27" / Passageiro 24"',
  componentes: '2 palhetas',
  imagens: ['vetor-pvf2724-1.png','vetor-pvf2724-2.png'],
  propriedades:{
    tamanhos: ['27"','24"'],
    posicao: 'dt' // "dt" "ts" ou ""
  },
  aplicacao: [
    {
      montadora: 'Honda',
      carros: [
        {
          nome: 'Civic',
          modelo: '',
          anoInicio: '2007',
          anoFim: '2011',
          motor: '',
          complemento: ''
        },
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'Honda',
      codigos: [
        {valor: '76620SNJM03/LE', obs: ''},
        {valor: '76630SNJM03/LD', obs: ''},
      ]
    },
    {
      marca: 'AUTOIMPACT',
      codigos: [
        {valor: 'PF27/PF24', obs: ''},
      ]
    },
    {
      marca: 'BOSCH ',
      codigos: [
        {valor: 'AP24M', obs: ''},
        {valor: 'AP26M', obs: ''},
      ]
    },
    {
      marca: 'CINOY',
      codigos: [
        {valor: 'YN-PS2623F', obs: ''},
      ]
    },
    {
      marca: 'DYNA',
      codigos: [
        {valor: 'S404', obs: ''},
      ]
    },

  ]
},
]