
/*
    -----  MODELO A SEGUIR  -----
{
  marca: ,  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '',
  descricao: '',
  obs: '',
  componentes: '',
  imagens: [],
  propriedades:{
    quantTerminais: 0
  },
  aplicacao: [
    {
      montadora: , // "Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo", "Seat", "Troller", "Lada", "Ferrari","Suzuki,"Volvo"
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
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '755.92/81',
  descricao: 'interruptor radiador 92°C',
  obs: '',
  componentes: '1 interruptor, 1 arruela de papel',
  imagens: ['mte-755.jpg','mte-755-2.jpg'],
  propriedades:{
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1996",
          motor: "1.0 L4  V",
          complemento: ""
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1994",
          motor: "1.6 L4  V",
          complemento: ""
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "1.6 L4  V",
          complemento: ""
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "1.6 L4 8V",
          complemento: "AP"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1996",
          motor: "1.8 L4  V",
          complemento: ""
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2003",
          motor: "1.8 L4  V",
          complemento: ""
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1995",
          motor: "2.0 L4 8V",
          complemento: "AP"
        }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2005",
          motor: "1.0 L4  V",
          complemento: ""
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.0 L4 8V",
          complemento: "CHT"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1997",
          motor: "1.0 L4 8V",
          complemento: "EA111 AT <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.0 L4 8V",
          complemento: "EA111 AT"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.0 L4 8V",
          complemento: "EA111 AT"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1995",
          anoFim: "2000",
          motor: "1.6 L4 8V",
          complemento: "AP 1600"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2005",
          motor: "1.6 L4 8V",
          complemento: "AP 1600"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1994",
          anoFim: "2004",
          motor: "1.8 L4 8V",
          complemento: "AP 1800"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1993",
          motor: "1.6 L4 8V",
          complemento: ""
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1997",
          motor: "1.6 L4 8V",
          complemento: "AP 1600"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1997",
          motor: "1.8 L4 8V",
          complemento: "AP 1800"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "1.0 L4 16V",
          complemento: "EA111 AT <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2000",
          motor: "1.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2001",
          motor: "1.0 L4 16V",
          complemento: "EA111 AT <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2002",
          motor: "1.0 L4 16V",
          complemento: "EA111 AT <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2004",
          motor: "1.0 L4 16V",
          complemento: "EA111 AT <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2004",
          motor: "1.6 L4 8V",
          complemento: "AP 1600"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1994",
          anoFim: "2004",
          motor: "1.8 L4 8V",
          complemento: "AP 1800"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1997",
          motor: "1.8 L4 8V",
          complemento: "AP 1800 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1997",
          motor: "1.8 L4 8V",
          complemento: "AP 1800 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2004",
          motor: "1.6 L4 8V",
          complemento: ""
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1997",
          motor: "1.8 L4 8V",
          complemento: "AP 1800"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2004",
          motor: "1.8 L4 8V",
          complemento: "AP 1800"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FORD",
      codigos: [
        {
          valor: "547959481",
          obs: ""
        }
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        {
          valor: "547959481",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "AJE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: 'TS1899',
  descricao: 'interruptor radiador',
  obs: '',
  componentes: '1 interruptor, 1 arruela',
  imagens: ['aje-ts1899.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo",
      carros: [
        { nome: '145', modelo: '', anoInicio: '1992', anoFim: '', motor: '1.4L, 1.6L, 1.7L, 1.8L, 2.0L, 2.5L', complemento: '' },
        { nome: '146', modelo: '', anoInicio: '1992', anoFim: '', motor: '1.4L, 1.6L, 1.7L, 1.8L, 2.0L, 2.5L', complemento: '' },
        { nome: '155', modelo: '', anoInicio: '1992', anoFim: '', motor: '1.4L, 1.6L, 1.7L, 1.8L, 2.0L, 2.5L', complemento: '' }
      ]
    },
    {
      montadora: "Citroen",
      carros: [
        { nome: 'C25', modelo: '', anoInicio: '1992', anoFim: '', motor: '1.8L, 2.0L', complemento: '' }
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        { nome: 'BRAVA', modelo: '', anoInicio: '1995', anoFim: '', motor: '1.4L, 1.6L, 1.8L, 1.9L, 2.0L', complemento: '' },
        { nome: 'BRAVO', modelo: '', anoInicio: '1995', anoFim: '', motor: '1.4L, 1.6L, 1.8L, 1.9L, 2.0L', complemento: '' },
        { nome: 'CROMA', modelo: '', anoInicio: '1986', anoFim: '1989', motor: '1.6L, 2.0L', complemento: '' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1994', anoFim: '', motor: '2.0L', complemento: '' },
        { nome: 'FIORINO', modelo: 'FURGÃO', anoInicio: '1996', anoFim: '1996', motor: '1.0L SPI BV', complemento: '' },
        { nome: 'FIORINO', modelo: 'PICK-UP', anoInicio: '1996', anoFim: '1996', motor: '1.0L SPI 8V', complemento: '' },
        { nome: 'FIORINO', modelo: 'PICK-UP', anoInicio: '1989', anoFim: '1993', motor: '1.1L, 1.3L, 1.5L', complemento: '' },
        { nome: 'MAREA', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.4L, 1.6L. 1.8L, 2.0L', complemento: '' },
        { nome: 'PALIO', modelo: '16V', anoInicio: '1996', anoFim: '2000', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'PALIO', modelo: '6 MARCHAS', anoInicio: '2002', anoFim: '2002', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'CITYMATIC', anoInicio: '2002', anoFim: '2002', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'ED', anoInicio: '1996', anoFim: '1998', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'EDX', anoInicio: '1996', anoFim: '1999', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'EL', anoInicio: '1998', anoFim: '1999', motor: '1.6L SPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'EL', anoInicio: '1996', anoFim: '1998', motor: '1.5L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.6L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'ELX', anoInicio: '2004', anoFim: '2004', motor: '1.3L MPI FIRE 16V', complemento: '' },
        { nome: 'PALIO', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.5L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'ELX 500 ANOS', anoInicio: '1999', anoFim: '2000', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'EX', anoInicio: '1998', anoFim: '2000', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'EX', anoInicio: '2003', anoFim: '2004', motor: '1.3L MPI FIRE 16V', complemento: '' },
        { nome: 'PALIO', modelo: 'FIRE', anoInicio: '2005', anoFim: '', motor: '1.3L MPI FIRE 16V', complemento: '' },
        { nome: 'PALIO', modelo: 'SX', anoInicio: '2003', anoFim: '2004', motor: '1.3L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND', anoInicio: '1999', anoFim: '1999', motor: '1.5L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND', anoInicio: '1997', anoFim: '1999', motor: '1.5L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND 16V', anoInicio: '1997', anoFim: '1998', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND 6 MARCHAS', anoInicio: '1999', anoFim: '2000', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND ADVENTURE', anoInicio: '2002', anoFim: '2002', motor: '1.6L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND CITY', anoInicio: '1999', anoFim: '2000', motor: '1.6L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND ELX', anoInicio: '1999', anoFim: '2000', motor: '1.5L MPI 8V, 1.6L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND ELX', anoInicio: '2004', anoFim: '', motor: '1.7L 8V Turbo', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Diesel" },
        { nome: 'PALIO', modelo: 'WEEKEND EX', anoInicio: '1999', anoFim: '1999', motor: '1.5L MPI 8V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND SPORT', anoInicio: '1997', anoFim: '2000', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'PALIO', modelo: 'WEEKEND STILE', anoInicio: '1997', anoFim: '2000', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'PALIO', modelo: 'YOUNG', anoInicio: '2001', anoFim: '2002', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'PANDA', modelo: '', anoInicio: '1987', anoFim: '1992', motor: '0.75L, 0.9L, 1.0L, 1.1L', complemento: '' },
        { nome: 'PUNTO', modelo: '', anoInicio: '1994', anoFim: '', motor: 'Todos', complemento: '' },
        { nome: 'SIENA', modelo: '6 MARCHAS', anoInicio: '1999', anoFim: '2000', motor: '1.0L MPI 8V', complemento: '' },
        { nome: 'SIENA', modelo: 'EL', anoInicio: '1998', anoFim: '1999', motor: '1.5L MPI 8V, 1.6L SPI 8V', complemento: '' },
        { nome: 'SIENA', modelo: 'EL 16V', anoInicio: '1998', anoFim: '1998', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'SIENA', modelo: 'ELX', anoInicio: '2004', anoFim: '2006', motor: '1.3L MPI FIRE 16V', complemento: '' },
        { nome: 'SIENA', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.6L MPI 8V', complemento: '' },
        { nome: 'SIENA', modelo: 'HL', anoInicio: '1998', anoFim: '1998', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'SIENA', modelo: 'SPORT MTV', anoInicio: '1998', anoFim: '1998', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'SIENA', modelo: 'STILE', anoInicio: '1998', anoFim: '1999', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'STRADA', modelo: 'FIRE', anoInicio: '2004', anoFim: '2004', motor: '1.3L MPI FIRE 8V', complemento: '' },
        { nome: 'STRADA', modelo: 'LX', anoInicio: '1999', anoFim: '2000', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'STRADA', modelo: 'LX ESTENDIDA', anoInicio: '2000', anoFim: '2001', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'STRADA', modelo: 'TREKKING', anoInicio: '1999', anoFim: '2000', motor: '1.6L MPI 8V', complemento: '' },
        { nome: 'STRADA', modelo: 'WORKING', anoInicio: '1999', anoFim: '2002', motor: '1.5L MPI 8V', complemento: '' },
        { nome: 'STRADA', modelo: 'WORKING EST.', anoInicio: '2001', anoFim: '2001', motor: '1.6L MPI 16V', complemento: '' },
        { nome: 'STRADA', modelo: 'WORKING EST.', anoInicio: '2000', anoFim: '2002', motor: '1.5L MPI 8V', complemento: '' },
        { nome: 'TEMPRA', modelo: '', anoInicio: '1990', anoFim: '', motor: '1.4L, 1.6L, 1.8L', complemento: '' },
        { nome: 'TEMPRA', modelo: 'SW SLX', anoInicio: '1994', anoFim: '1997', motor: '2.0L MPI 8V', complemento: '' },
        { nome: 'TIPO', modelo: '', anoInicio: '1996', anoFim: '1997', motor: '1.6L MPI 8V', complemento: '' },
        { nome: 'TIPO', modelo: '', anoInicio: '1993', anoFim: '1995', motor: '1.6L SPI 8V', complemento: '' },
        { nome: 'TIPO', modelo: '', anoInicio: '1988', anoFim: '', motor: '1.4L, 1.6L 1.8L, 2.0L', complemento: '' },
        { nome: 'UNO', modelo: 'MILLE EP', anoInicio: '1996', anoFim: '1996', motor: '1.0L SPI 8V', complemento: '' },
        { nome: 'UNO', modelo: 'MILLE EX', anoInicio: '1998', anoFim: '2000', motor: '1.0L SPI 8V', complemento: '' },
        { nome: 'UNO', modelo: 'MILLE IE', anoInicio: '1996', anoFim: '1996', motor: '1.0L SPI 8V', complemento: '' },
        { nome: 'UNO', modelo: 'MILLE SMART', anoInicio: '2000', anoFim: '2001', motor: '1.0L SPI 8V', complemento: '' },
        { nome: 'UNO', modelo: 'MILLE SX', anoInicio: '1997', anoFim: '1998', motor: '1.0L SPI 8V', complemento: '' },
        { nome: 'UNO', modelo: 'MILLE SX YOUNG', anoInicio: '1998', anoFim: '1999', motor: '1.0L SPI 8V', complemento: '' }
      ]
    },
    {
      montadora: "Peugeot",
      carros: [
        { nome: 'BOXER', modelo: '', anoInicio: '1994', anoFim: '', motor: '2.0L', complemento: '' },
        { nome: 'J5', modelo: '', anoInicio: '1992', anoFim: '', motor: '1.8L, 2.0L', complemento: '' }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [{ valor: '', obs: '' }]
    }
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '201.0843',
  descricao: 'sensor temperatura',
  obs: 'Sensor cor marrom',
  componentes: '1 sensor, 1 arruela',
  imagens: ['valclei-2010843.jpeg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "DOBLO", modelo: "", anoInicio: "2006", anoFim: "2010", motor: "1.8 8V",
          complemento: "INJ. MPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "DOBLO", modelo: "", anoInicio: "2006", anoFim: "2006", motor: "1.8 8V",
          complemento: "INJ. MPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "IDEA", modelo: "", anoInicio: "2006", anoFim: "2010", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "2006", anoFim: "2010", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "2007", anoFim: "2010", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PUNTO", modelo: "", anoInicio: "2008", anoFim: "2010", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "2007", anoFim: "2010", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STILO", modelo: "", anoInicio: "2007", anoFim: "2011", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "2007", anoFim: "2010", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
      ]
    },
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "MERIVA", modelo: "", anoInicio: "2009", anoFim: "2012", motor: "1.4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2003", anoFim: "2009", motor: "1.8 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MERIVA", modelo: "", anoInicio: "2005", anoFim: "2008", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MERIVA", modelo: "", anoInicio: "2003", anoFim: "2004", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2007", anoFim: "2010", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2003", anoFim: "2007", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FIAT",
      codigos: [
        { valor: "7085083", obs: "" },
        { valor: "93313156", obs: "" },
      ]
    },
    {
      marca: "GM",
      codigos: [
        { valor: "93313156", obs: "" },
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '4160',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring, 1 trava',
  imagens: ['mte-4160.png', 'mte-4160-2.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "CRUZE",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2016",
          motor: "1.8 L4 16V",
          complemento: "ECOTEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CRUZE",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2016",
          motor: "1.8 L4 16V",
          complemento: "ECOTEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "CRUZE",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2016",
          motor: "1.8 L4 16V",
          complemento: "ECOTEC 6 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "S10",
          modelo: "",
          anoInicio: "2015",
          anoFim: "2021",
          motor: "2.5 L4 16V",
          complemento: "ECOTEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SONIC",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2014",
          motor: "1.6 L4 16V",
          complemento: "ECOTEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SONIC",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2015",
          motor: "1.6 L4 16V",
          complemento: "ECOTEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "TRACKER",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "1.8 L4 16V",
          complemento: "ECOTEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "TRACKER",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "1.8 L4 16V",
          complemento: "ECOTEC 6 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "TRACKER",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "1.8 L4 16V",
          complemento: "ECOTEC 6 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "BUICK",
      codigos: [
        {
          valor: "12636534",
          obs: ""
        },
        {
          valor: "55353807",
          obs: ""
        },
        {
          valor: "55591002",
          obs: ""
        }
      ]
    },
    {
      marca: "CADILLAC",
      codigos: [
        {
          valor: "12636534",
          obs: ""
        },
        {
          valor: "55353807",
          obs: ""
        }
      ]
    },
    {
      marca: "FIAT",
      codigos: [
        {
          valor: "55353807",
          obs: ""
        }
      ]
    },
    {
      marca: "GENERAL MOTORS",
      codigos: [
        {
          valor: "12636534",
          obs: ""
        },
        {
          valor: "12641368",
          obs: ""
        },
        {
          valor: "12656444",
          obs: ""
        },
        {
          valor: "12656493",
          obs: ""
        },
        {
          valor: "55353807",
          obs: ""
        },
        {
          valor: "55563530",
          obs: ""
        },
        {
          valor: "55591002",
          obs: ""
        },
        {
          valor: "55591401",
          obs: ""
        },
        {
          valor: "89019319",
          obs: ""
        }
      ]
    },
    {
      marca: "OPEL",
      codigos: [
        {
          valor: "1338246",
          obs: ""
        },
        {
          valor: "1338369",
          obs: ""
        },
        {
          valor: "1338370",
          obs: ""
        },
        {
          valor: "1338407",
          obs: ""
        },
        {
          valor: "6338045",
          obs: ""
        }
      ]
    },
    {
      marca: "SATURN",
      codigos: [
        {
          valor: "55353807",
          obs: ""
        }
      ]
    },
    {
      marca: "VAUXHALL",
      codigos: [
        {
          valor: "12636534",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "Marflex",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '9037',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor',
  imagens: ['marflex-9037.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        { nome: 'COURIER', modelo: '', anoInicio: '1999', anoFim: '1999', motor: ' 1.3 8V ENDURA', complemento: '' },
        { nome: 'COURIER', modelo: '', anoInicio: '1997', anoFim: '1999', motor: '1.4 16V ZETEC', complemento: '' },
        { nome: 'ESCORT', modelo: 'HATCH', anoInicio: '1996', anoFim: '2000', motor: '1.8 16V ZETEC', complemento: 'COM-A/C' },
        { nome: 'ESCORT', modelo: 'SW', anoInicio: '1996', anoFim: '2002', motor: '1.8 16V ZETEC', complemento: 'SEM-A/C' },
        { nome: 'EXPLORER', modelo: '', anoInicio: '1995', anoFim: '1997', motor: '4.0 V6', complemento: '' },
        { nome: 'FIESTA', modelo: '', anoInicio: '1996', anoFim: '1999', motor: '1.0-1.3 8V ENDURA', complemento: '' },
        { nome: 'FIESTA', modelo: '', anoInicio: '1996', anoFim: '1999', motor: '1.4 16V ZETEC', complemento: '' },
        { nome: 'KA', modelo: '', anoInicio: '1997', anoFim: '1999', motor: '1.0 8V ZETEC ROCAM', complemento: '1º FABRICADO' },
        { nome: 'KA', modelo: '', anoInicio: '1997', anoFim: '1999', motor: '1.3 8V ENDURA', complemento: '1º FABRICADO' },
        { nome: 'MONDEO', modelo: '', anoInicio: '1998', anoFim: '2001', motor: '2.5 24V V6', complemento: 'DOHC' },
        { nome: 'MONDEO', modelo: 'SW', anoInicio: '1998', anoFim: '2001', motor: '2.0 16V ZETEC', complemento: '' },
        { nome: 'RANGER', modelo: '', anoInicio: '1996', anoFim: '1997', motor: '2.3', complemento: '' },
        { nome: 'RANGER', modelo: '', anoInicio: '1997', anoFim: '2003', motor: '2.5 8V', complemento: '' },
        { nome: 'RANGER', modelo: '', anoInicio: '1995', anoFim: '1997', motor: '4.0 V6', complemento: '' },
        { nome: 'RANGER', modelo: '', anoInicio: '1997', anoFim: '2001', motor: '4.0 V6 OHV', complemento: '' },
        { nome: 'TAURUS', modelo: '', anoInicio: '1996', anoFim: '1997', motor: '3.0 12V V6', complemento: '' },
        { nome: 'VERONA', modelo: '', anoInicio: '1996', anoFim: '2002', motor: '1.8 16V ZETEC', complemento: '' },
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'Ford',
      codigos: [
        { valor: 'FSAF-12A648-AA', obs: '' },
        { valor: 'F5AF-12A648-AA', obs: '' },
      ]
    },
    {
      marca: 'IGUAÇU',
      codigos: [{ valor: '201.0809', obs: '' }]
    },
    {
      marca: 'Marilia',
      codigos: [{ valor: 'IM44037', obs: '' }]
    },
    {
      marca: 'MTE',
      codigos: [{ valor: '4037', obs: '' }]
    },
  ]
},
{
  marca: "Marflex",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '9076',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor',
  imagens: ['marflex-9076.png'],
  propriedades: {
    quantTerminais: 4
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo",
      carros: [
        {
          nome: '147',
          modelo: '',
          anoInicio: '2000',
          anoFim: '',
          motor: '1.6 16v',
          complemento: 'Gasolina'
        }
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        {
          nome: 'Brava',
          modelo: '',
          anoInicio: '2002',
          anoFim: '2003',
          motor: '1.6 16v MPI',
          complemento: 'Gasolina'
        },
        {
          nome: 'Doblo',
          modelo: '',
          anoInicio: '2002',
          anoFim: '2003',
          motor: '1.6 16v MPI',
          complemento: 'Gasolina'
        },
        {
          nome: 'Marea',
          modelo: '',
          anoInicio: '2006',
          anoFim: '',
          motor: '1.6 16v MPI',
          complemento: 'Flex'
        },
        {
          nome: 'Palio',
          modelo: '',
          anoInicio: '2000',
          anoFim: '',
          motor: '1.3 Fire 16v',
          complemento: 'Gasolina'
        },
        {
          nome: 'Siena',
          modelo: '',
          anoInicio: '2000',
          anoFim: '',
          motor: '1.3 Fire 16v',
          complemento: 'Gasolina'
        },
        {
          nome: 'Stilo',
          modelo: 'Abarth',
          anoInicio: '2003',
          anoFim: '',
          motor: '1.8 16v / 2.4 20v',
          complemento: 'Gasolina'
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'IGUAÇU',
      codigos: [{ valor: '201.0882', obs: '' }]
    },
    {
      marca: 'MTE',
      codigos: [{ valor: '4076', obs: '' }]
    },
    {
      marca: 'Original',
      codigos: [{ valor: '46753479', obs: '' }]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '203.2018',
  descricao: 'sensor temperatura (painel)',
  obs: '',
  componentes: '1 sensor',
  imagens: ['iguacu-2032018.jpeg'],
  propriedades: {
    quantTerminais: 1
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "UNO", modelo: "MILLE", anoInicio: "1998", anoFim: "2000", motor: "1.0 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "MILLE", anoInicio: "1996", anoFim: "1999", motor: "1.0 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "MILLE", anoInicio: "1996", anoFim: "2001", motor: "1.0 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "MILLE", anoInicio: "1994", anoFim: "1995", motor: "1.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.0 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.3 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1988", motor: "1.3 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.4 8V TURBO",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1996", anoFim: "1996", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1996", anoFim: "1996", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.5 8V",
          complemento: "E201 / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1986", anoFim: "1989", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1986", anoFim: "1989", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1996", anoFim: "1996", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1996", anoFim: "1996", motor: "1.5 8V",
          complemento: "INJ. SPI/ COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1996", anoFim: "1996", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "1.5 8V",
          complemento: "E201 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1986", anoFim: "1989", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1986", anoFim: "1989", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1997", anoFim: "1998", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1997", anoFim: "1998", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1998", anoFim: "1999", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1998", anoFim: "1999", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1997", anoFim: "1998", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1997", anoFim: "1998", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.5 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.5 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1988", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1999", anoFim: "1999", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.5 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1989", anoFim: "1989", motor: "1.5 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1987", anoFim: "1989", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1987", anoFim: "1989", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1989", anoFim: "1989", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1989", anoFim: "1989", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BRAVA", modelo: "", anoInicio: "2000", anoFim: "2001", motor: "1.6 16V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BRAVA", modelo: "", anoInicio: "2000", anoFim: "2001", motor: "1.6 16V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.6 16V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.6 16V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 16V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 16V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "2001", anoFim: "2003", motor: "1.6 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1997", anoFim: "2000", motor: "1.6 16V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1997", anoFim: "2000", motor: "1.6 16V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1998", anoFim: "1998", motor: "1.6 16V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1998", anoFim: "1998", motor: "1.6 16V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.6 16V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.6 16V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "DUNA", modelo: "", anoInicio: "1995", anoFim: "1995", motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "DUNA", modelo: "", anoInicio: "1995", anoFim: "1995", motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. SPI/ SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1990", anoFim: "1994", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1990", anoFim: "1994", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "COM A/C / INJ. MPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "COM A/C / INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "SEM A/C / INJ. MPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "SEM A/C / INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1990", anoFim: "1993", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1990", anoFim: "1993", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "1990", anoFim: "1994", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "1990", anoFim: "1994", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "1.6 8V",
          complemento: "INJ. SPI/ COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "1990", anoFim: "1993", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "1990", anoFim: "1993", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "INJ. MPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.6 8V",
          complemento: "INJ. SPI/ SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.6 8V",
          complemento: "INJ. MPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1990", anoFim: "1993", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1990", anoFim: "1991", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1990", anoFim: "1993", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1990", anoFim: "1991", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "COUPE", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA", modelo: "", anoInicio: "1993", anoFim: "1998", motor: "2.0 16V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 16V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MAREA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "2.0 20V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MAREA ", modelo: "WEEKEND", anoInicio: "1999", anoFim: "2000", motor: "2.0 20V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "2.0 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "TEMPRA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "TEMPRA", modelo: "", anoInicio: "1995", anoFim: "1999", motor: "2.0 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA ", modelo: "SW", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "2.0 8V TURBO",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },

  ],
  referenciaCruzada: [
    {
      marca: "FIAT",
      codigos: [
        { valor: "7588802", obs: "" },
        { valor: "", obs: "" },
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '4246',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring, 1 trava',
  imagens: ['mte-4246.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "ARGO",
          modelo: "",
          anoInicio: "2017",
          anoFim: "2023",
          motor: "1.0 L3 6V",
          complemento: "FIREFLY <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ARGO",
          modelo: "",
          anoInicio: "2017",
          anoFim: "2023",
          motor: "1.3 L4 8V",
          complemento: "FIREFLY <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CRONOS",
          modelo: "",
          anoInicio: "2018",
          anoFim: "2023",
          motor: "1.3 L4 8V",
          complemento: "FIREFLY <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MOBI",
          modelo: "",
          anoInicio: "2017",
          anoFim: "2023",
          motor: "1.0 L3 6V",
          complemento: "FIREFLY <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PULSE",
          modelo: "",
          anoInicio: "2021",
          anoFim: "2023",
          motor: "1.3 L4 8V",
          complemento: "FIREFLY <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2020",
          anoFim: "2023",
          motor: "1.3 L4 8V",
          complemento: "FIREFLY <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2023",
          motor: "1.0 L3 6V",
          complemento: "FIREFLY <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2023",
          motor: "1.3 L4 8V",
          complemento: "FIREFLY <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FIAT",
      codigos: [
        {
          valor: "55265789",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "NGK" "Sem marca" 
  referencia: '4138',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor',
  imagens: ['mte-4138-1.jpg', 'mte-4138-2.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Suzuki",
      carros: [
        {
          nome: "BANDIT ",
          modelo: "1250 S",
          anoInicio: "2010",
          anoFim: "2012",
          motor: "1.3 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "BANDIT ",
          modelo: "650 S",
          anoInicio: "2010",
          anoFim: "2012",
          motor: "0.7 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "BANDIT ",
          modelo: "N 1250",
          anoInicio: "2009",
          anoFim: "2010",
          motor: "1.2 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "BANDIT ",
          modelo: "N 1250",
          anoInicio: "2010",
          anoFim: "2015",
          motor: "1.3 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "BANDIT ",
          modelo: "N 650",
          anoInicio: "2007",
          anoFim: "2012",
          motor: "0.7 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "BURGMAN ",
          modelo: "650",
          anoInicio: "2017",
          anoFim: "2017",
          motor: "0.6 L2 4V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "BURGMAN ",
          modelo: "650",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "0.6 L2 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "BURGMAN",
          modelo: "650 E",
          anoInicio: "2013",
          anoFim: "2013",
          motor: "0.6 L2 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "BURGMAN",
          modelo: "650 E",
          anoInicio: "2015",
          anoFim: "2015",
          motor: "0.6 L2 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "DL V-STROM",
          modelo: "1000",
          anoInicio: "2014",
          anoFim: "2014",
          motor: "1.0 L2 8V",
          complemento: "V-TWIN 90 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "DL V-STROM",
          modelo: "1000",
          anoInicio: "2015",
          anoFim: "2017",
          motor: "1.0 L2 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "DL V-STROM",
          modelo: "1000",
          anoInicio: "2016",
          anoFim: "2016",
          motor: "1.0 L2 8V",
          complemento: "V-TWIN 90 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "DL V-STROM",
          modelo: "650",
          anoInicio: "2012",
          anoFim: "2015",
          motor: "0.6 L2 8V",
          complemento: "V-TWIN 90 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "DL V-STROM",
          modelo: "650",
          anoInicio: "2016",
          anoFim: "2018",
          motor: "0.6 L2 8V",
          complemento: "V-TWIN 90 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GLADIUS",
          modelo: "650",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "0.6 L2 8V",
          complemento: "V-TWIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSR ",
          modelo: "750",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "0.8 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSR ",
          modelo: "750 A",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "0.8 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX ",
          modelo: "1250 F",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "1.3 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX ",
          modelo: "1300 B-KING",
          anoInicio: "2010",
          anoFim: "2010",
          motor: "1.3 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX ",
          modelo: "1300 R HAYABUSA",
          anoInicio: "2008",
          anoFim: "2015",
          motor: "1.3 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX ",
          modelo: "650 F",
          anoInicio: "2009",
          anoFim: "2012",
          motor: "0.7 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX",
          modelo: "-R 1000",
          anoInicio: "2009",
          anoFim: "2014",
          motor: "1.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX",
          modelo: "-R 1000",
          anoInicio: "2015",
          anoFim: "2016",
          motor: "1.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX",
          modelo: "-R 750",
          anoInicio: "2011",
          anoFim: "2017",
          motor: "0.8 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX",
          modelo: "-R 750",
          anoInicio: "2015",
          anoFim: "2017",
          motor: "0.8 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX",
          modelo: "-S 1000 A",
          anoInicio: "2016",
          anoFim: "2016",
          motor: "1.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX",
          modelo: "-S 1000 A",
          anoInicio: "2019",
          anoFim: "2021",
          motor: "1.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX",
          modelo: "-S 1000 F",
          anoInicio: "2017",
          anoFim: "2018",
          motor: "1.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GSX",
          modelo: "-S 750",
          anoInicio: "2017",
          anoFim: "2021",
          motor: "0.7 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "INAZUMA ",
          modelo: "250",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "0.2 L2 4V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "INAZUMA ",
          modelo: "250",
          anoInicio: "2018",
          anoFim: "2019",
          motor: "0.2 L2 4V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "SV ",
          modelo: "650 A",
          anoInicio: "2018",
          anoFim: "2020",
          motor: "0.6 L2 4V",
          complemento: "V-TWIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        }
      ]
    },
    {
      montadora: "Toyota",
      carros: [
        {
          nome: "COROLLA",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2007",
          motor: "1.6 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "COROLLA",
          modelo: "",
          anoInicio: "1992",
          anoFim: "2000",
          motor: "1.6 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "COROLLA",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "1.6 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "COROLLA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2002",
          motor: "1.6 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "COROLLA",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2018",
          motor: "2.0 L4 16V",
          complemento: "2.0 DUAL VVT-I <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "COROLLA",
          modelo: "",
          anoInicio: "2010",
          anoFim: "2015",
          motor: "2.0 L4 16V",
          complemento: "VVT-I <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ETIOS",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2016",
          motor: "1.3 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ETIOS",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2017",
          motor: "1.5 L4 16V",
          complemento: "2NR-FBE <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ETIOS ",
          modelo: "CROSS",
          anoInicio: "2013",
          anoFim: "2017",
          motor: "1.5 L4 16V",
          complemento: "2NR-FBE <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ETIOS ",
          modelo: "SEDAN",
          anoInicio: "2012",
          anoFim: "2017",
          motor: "1.5 L4 16V",
          complemento: "2NR-FBE <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "HILUX",
          modelo: "",
          anoInicio: "2009",
          anoFim: "2009",
          motor: "2.7 L4 16V",
          complemento: "VVT-I <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "HILUX",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2005",
          motor: "3.0 L4 16V",
          complemento: "D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        }
      ]
    },
    {
      montadora: "Volvo",
      carros: [
        {
          nome: "S60",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2021",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "S60",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2021",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "S90",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2016",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GAS/ELET"
        },
        {
          nome: "S90",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2022",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GAS/ELET"
        },
        {
          nome: "V40",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2020",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "V40",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2020",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "V60",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2018",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "V60",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2018",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC60",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2021",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC60",
          modelo: "",
          anoInicio: "2023",
          anoFim: "2023",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC60",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2021",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC60",
          modelo: "",
          anoInicio: "2023",
          anoFim: "2023",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC60",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2021",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC60",
          modelo: "",
          anoInicio: "2023",
          anoFim: "2023",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC60",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2021",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2017",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2017",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GAS/ELET"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2022",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GAS/ELET"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2022",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2017",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2017",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GAS/ELET"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2022",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GAS/ELET"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2022",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2021",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "XC90",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2007",
          motor: "4.4 L8 32V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        }
      ]
    },

  ],
  referenciaCruzada: [
    {
      marca: "CITROEN",
      codigos: [
        {
          valor: "1920KP",
          obs: ""
        },
        {
          valor: "1920RJ",
          obs: ""
        }
      ]
    },
    {
      marca: "DAIHATSU",
      codigos: [
        {
          valor: "8942233030",
          obs: ""
        }
      ]
    },
    {
      marca: "GENERAL MOTORS",
      codigos: [
        {
          valor: "88975489",
          obs: ""
        },
        {
          valor: "88975490",
          obs: ""
        }
      ]
    },
    {
      marca: "LEXUS",
      codigos: [
        {
          valor: "894220D010",
          obs: ""
        },
        {
          valor: "8942233030",
          obs: ""
        }
      ]
    },
    {
      marca: "MAZDA",
      codigos: [
        {
          valor: "SH0118840",
          obs: ""
        },
        {
          valor: "ZYE918840",
          obs: ""
        }
      ]
    },
    {
      marca: "PEUGEOT",
      codigos: [
        {
          valor: "1920KP",
          obs: ""
        },
        {
          valor: "1920RJ",
          obs: ""
        }
      ]
    },
    {
      marca: "SUBARU",
      codigos: [
        {
          valor: "22630AA17A",
          obs: ""
        },
        {
          valor: "22630KA140",
          obs: ""
        }
      ]
    },
    {
      marca: "SUZUKI",
      codigos: [
        {
          valor: "1365049X00",
          obs: ""
        }
      ]
    },
    {
      marca: "TOYOTA",
      codigos: [
        {
          valor: "8942206010",
          obs: ""
        },
        {
          valor: "894220H010",
          obs: ""
        },
        {
          valor: "8942233030",
          obs: ""
        },
        {
          valor: "89422WB001",
          obs: ""
        },
        {
          valor: "89422WB002",
          obs: ""
        },
        {
          valor: "8942947010",
          obs: ""
        }
      ]
    },
    {
      marca: "VOLVO",
      codigos: [
        {
          valor: "306367130",
          obs: ""
        },
        {
          valor: "30646713",
          obs: ""
        },
        {
          valor: "306467130",
          obs: ""
        },
        {
          valor: "31339941",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "NGK",
  referencia: 'CTN3-A006',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['nkg-ctn3a006.jpeg'],
  propriedades: {
    quantTerminais: 3
  },
  aplicacao: [
    {
      montadora: "Nissan",
      carros: [
        {
          nome: 'March',
          modelo: '',
          anoInicio: '11/2013',
          anoFim: '2015',
          motor: '1.0 16v (D4D)',
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
    {
      montadora: "Renault",
      carros: [
        { nome: 'Clio', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.0 16v (D4D)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX" },
        { nome: 'Clio', modelo: '', anoInicio: '1998', anoFim: '2008', motor: '1.0 8v (D7D)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA" },
        { nome: 'Clio', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.6 16v (K4M)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX" },
        { nome: 'Clio', modelo: '', anoInicio: '2000', anoFim: '2005', motor: '1.6 16v (K4M)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA" },
        { nome: 'Clio', modelo: '', anoInicio: '1996', anoFim: '2002', motor: '1.6 8v (K7M)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA" },

        { nome: 'Kangoo', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.0 16v (D4D)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX" },
        { nome: 'Kangoo', modelo: '', anoInicio: '2000', anoFim: '2005', motor: '1.0 16v (D4D)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA" },
        { nome: 'Kangoo', modelo: '', anoInicio: '2000', anoFim: '2005', motor: '1.0 8v (D7D)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA" },
        { nome: 'Kangoo', modelo: '', anoInicio: '2013', anoFim: '2013', motor: '1.6 16v (K4M)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX" },
        { nome: 'Kangoo', modelo: '', anoInicio: '1998', anoFim: '', motor: '1.6 8v (K7M)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA" },

        { nome: 'Logan', modelo: '', anoInicio: '2007', anoFim: '2016', motor: '1.0 16v (D4D)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX" },
        { nome: 'Logan', modelo: '', anoInicio: '2007', anoFim: '2017', motor: '1.6 8v (K7M)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX" },
        { nome: 'Sandero', modelo: '', anoInicio: '2008', anoFim: '2016', motor: '1.0 16v (D4D)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX" },
        { nome: 'Sandero', modelo: '', anoInicio: '2008', anoFim: '2017', motor: '1.6 8v (K7M)', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX" },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'Iguaçu',
      codigos: [{ valor: '201.0831', obs: '' }]
    }
  ]
},
{
  marca: "Wahler",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '411284',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['wahler-411284.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "BLAZER", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "GM FAMILIA II 2.2 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BLAZER", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "GM FAMILIA II 2.2 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BLAZER", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "GM FAMILIA II 2.2 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CELTA", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "VHC 1.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CELTA", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "VHC 1.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CELTA", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "VHC 1.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1996", anoFim: "2003", motor: "SOHC MPFI 1.6 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1996", anoFim: "2002", motor: "SOHC MPFI 1.6 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "SOHC EFI 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1995", anoFim: "2002", motor: "SOHC MPFI 1.6 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1996", anoFim: "2003", motor: "SOHC MPFI 1.6 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2002", anoFim: "2003", motor: "SOHC MPFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2002", anoFim: "2003", motor: "SOHC MPFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1996", anoFim: "2002", motor: "SOHC MPFI 1.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "SOHC EFI 1.6 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1996", anoFim: "2003", motor: "SOHC MPFI 1.6 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1996", anoFim: "2002", motor: "SOHC MPFI 1.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1997", anoFim: "2002", motor: "SOHC MPFI 1.6 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "SOHC EFI 1.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1996", anoFim: "2002", motor: "SOHC MPFI 1.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "SOHC EFI 1.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "B18YZ 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1989", anoFim: "1994", motor: "B18YZ 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MERIVA", modelo: "", anoInicio: "2002", anoFim: "2009", motor: "DOHC SFI 1.8 L 16V DOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MERIVA", modelo: "", anoInicio: "2002", anoFim: "2009", motor: "SOHC MPFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MERIVA", modelo: "", anoInicio: "2004", anoFim: "2005", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MERIVA", modelo: "", anoInicio: "2004", anoFim: "2005", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2010", anoFim: "2010", motor: "ECONOFLEX 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2007", anoFim: "2010", motor: "X14YFH 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2005", anoFim: "2007", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2009", anoFim: "2010", motor: "X14YFH 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2007", anoFim: "2010", motor: "ECONOFLEX 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2003", anoFim: "2005", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2005", anoFim: "2007", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2003", anoFim: "2005", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2010", anoFim: "2023", motor: "X14YFH 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2013", anoFim: "2014", motor: "ECONOFLEX 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2023", anoFim: "2026", motor: "ECOTEC 1.2 L 12V DOHC L3",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2005", anoFim: "2007", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2005", anoFim: "2007", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2009", anoFim: "2010", motor: "ECONOFLEX 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2005", anoFim: "2009", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2010", anoFim: "2014", motor: "X14YFH 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2009", anoFim: "2010", motor: "X14YFH 1.4 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2003", anoFim: "2005", motor: "FLEXPOWER 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "SOHC EFI 1.8 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "SOHC EFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1993", anoFim: "1997", motor: "SOHC MPFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1992", anoFim: "1998", motor: "SOHC MPFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1994", anoFim: "1998", motor: "SOHC MPFI 2.2 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "S10", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "SOHC MPFI 2.2 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "S10", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "SOHC MPFI 2.2 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "SOHC MPFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "SOHC MPFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "SOHC MPFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "SOHC MPFI 2.2 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "SOHC MPFI 2.0 L 8V SOHC L4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: "IGUAÇU",
      codigos: [
        { valor: "201.0801", obs: "" },
      ]
    },
    {
      marca: "MTE-THOMSON",
      codigos: [
        { valor: "4050", obs: "" }
      ]
    },
    {
      marca: "ORIGINAL OEM",
      codigos: [
        { valor: "12146897", obs: "" },
        { valor: "12191170", obs: "" },
        { valor: "15336564", obs: "" },
        { valor: "25036898", obs: "" },
        { valor: "93247291", obs: "" }
      ]
    },
    {
      marca: "VALCLEI",
      codigos: [
        { valor: "44050", obs: "" }
      ]
    }
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '1725.92-97',
  descricao: 'interruptor radiador',
  obs: 'Cor azul ou preto é o mesmo.',
  componentes: '1 interruptor, 1 arruela de alumínio',
  imagens: ['valclei-1725-9297.jpeg'],
  propriedades: {
    quantTerminais: 3
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo",
      carros: [
        { nome: '145', modelo: '', anoInicio: '1996', anoFim: '1997', motor: '2.0 MPI TWIN SPARK 16V', complemento: 'IMP' },
        { nome: '145', modelo: 'QV', anoInicio: '1996', anoFim: '1999', motor: '2.0 MPI TWIN SPARK 16V', complemento: 'IMP' },
        { nome: '145', modelo: 'S', anoInicio: '1998', anoFim: '1999', motor: '1.8 TWIN SPARK 16V', complemento: 'IMP' },
        { nome: '155', modelo: '', anoInicio: '1995', anoFim: '1998', motor: '2.0 MPI TWIN SPARK 16V', complemento: 'IMP' },
        { nome: '155', modelo: '', anoInicio: '1993', anoFim: '', motor: '2.5', complemento: 'IMP' },
        { nome: '155', modelo: 'SUPER', anoInicio: '1995', anoFim: '1998', motor: '2.0 MPI TWIN SPARK 16V', complemento: 'IMP' }
      ]
    },
    {
      montadora: "Citroen",
      carros: [
        { nome: 'JUMPER', modelo: '', anoInicio: '1994', anoFim: '', motor: '2.0', complemento: 'IMP' }
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        { nome: 'BRAVA', modelo: 'HGT', anoInicio: '2000', anoFim: '2003', motor: '1.8 MPI 16V', complemento: 'BR Clar' },
        { nome: 'COUPE', modelo: '', anoInicio: '1995', anoFim: '1997', motor: '2.0 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1999', anoFim: '1999', motor: '2.8 Turbo', complemento: 'BR' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1994', anoFim: '', motor: '2.0', complemento: 'BR C/ ar' },
        { nome: 'DUCATO', modelo: '15', anoInicio: '', anoFim: '2002', motor: '2.8 8V Turbo Interc. Diesel', complemento: 'BR Clar' },
        { nome: 'DUCATO', modelo: '15', anoInicio: '2001', anoFim: '2002', motor: '2.8 8V Turbo Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: '15 VETRATO', anoInicio: '', anoFim: '2002', motor: '2.8 8V Turbo Interc. Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: '15 VETRATO', anoInicio: '2000', anoFim: '2002', motor: '2.8 8V Turbo Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'CARGO', anoInicio: '2003', anoFim: '', motor: '2.8 8V Turbo Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'CARGO', anoInicio: '2003', anoFim: '2005', motor: '2.8 8V Turbo Interc. Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'COMBINATO', anoInicio: '1999', anoFim: '', motor: '2.8 8V Turbo Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'COMBINATO', anoInicio: '2002', anoFim: '2005', motor: '2.8 8V Turbo Interc, Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'MAXI', anoInicio: '', anoFim: '2002', motor: '2.8 8V Turbo Interc. Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'MAXI', anoInicio: '1999', anoFim: '2002', motor: '2.8 8V Turbo Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'MAXICARGO', anoInicio: '2003', anoFim: '', motor: '2.8 8V Turbo Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'MAXICARGO', anoInicio: '2003', anoFim: '2005', motor: '2.8 8V Turbo Interc. Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'MAXICARGO', anoInicio: '2003', anoFim: '2005', motor: '2.8 Turbo Interc. 8V', complemento: 'BR <img src=\'imagens/pagina/icone-fuel-3.png\' style=\'height: 17px; margin-left: 4px;\' title=\'Combustível\'>: Diesel' },
        { nome: 'DUCATO', modelo: 'MINIBUS', anoInicio: '1999', anoFim: '2005', motor: '2.8 8V Turbo Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'MINIBUS', anoInicio: '2001', anoFim: '2005', motor: '2.8 8V Turbo Interc. Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'MULTI', anoInicio: '2003', anoFim: '', motor: '2.8 8V Turbo Diesel', complemento: 'BR C/ar' },
        { nome: 'DUCATO', modelo: 'MULTI', anoInicio: '2003', anoFim: '2005', motor: '2.8 8V Turbo Interc. Diesel', complemento: 'BR C/ar' },
        { nome: 'FIORINO', modelo: 'PICK-UP', anoInicio: '1993', anoFim: '', motor: '1.6', complemento: 'BR' },
        { nome: 'MAREA', modelo: '', anoInicio: '1998', anoFim: '', motor: '2.0', complemento: 'BR C/ar' },
        { nome: 'MAREA', modelo: 'CITY', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 142CV 20V', complemento: 'BR C/ar' },
        { nome: 'MAREA', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '2.0 MPI 142CV 20V', complemento: 'BR Clar' },
        { nome: 'MAREA', modelo: 'HLX', anoInicio: '1999', anoFim: '2000', motor: '2.0 MPI 142CV 20V', complemento: 'BR C/ar' },
        { nome: 'MAREA', modelo: 'SX', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 142CV 20V', complemento: 'BR C/ar' },
        { nome: 'MAREA', modelo: 'WEEKEND CITY', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 142CV 20V', complemento: 'BR C/ar' },
        { nome: 'MAREA', modelo: 'WEEKEND ELX', anoInicio: '1999', anoFim: '2000', motor: '2.0 MPI 142CV 20V', complemento: 'BR C/ar' },
        { nome: 'MAREA', modelo: 'WEEKEND HLX', anoInicio: '1999', anoFim: '2000', motor: '2.0 MPI 142CV 20V', complemento: 'BR C/ar' },
        { nome: 'MAREA', modelo: 'WEEKEND SX', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 142CV 20V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: '', anoInicio: '2003', anoFim: '2004', motor: '1.5 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: '', anoInicio: '1996', anoFim: '2000', motor: '1.6 MPI 16V', complemento: 'BR Clar' },
        { nome: 'PALIO', modelo: '6 MARCHAS', anoInicio: '', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'CITY', anoInicio: '1999', anoFim: '1999', motor: '1.6 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'CITY', anoInicio: '1999', anoFim: '2000', motor: '1.0 MPI 8V, 1.5 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'CITY', anoInicio: '1999', anoFim: '2000', motor: '1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'CITYMATIC', anoInicio: '', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'ED', anoInicio: '1996', anoFim: '1998', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'EDX', anoInicio: '1996', anoFim: '1999', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'EL', anoInicio: '1996', anoFim: '1999', motor: '1.5 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'EL', anoInicio: '1998', anoFim: '1999', motor: '1.6 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.0 MPI 8V, 1.5 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'ELX 500 ANOS', anoInicio: '1999', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'EX', anoInicio: '', anoFim: '2003', motor: '1.3 MPI FIRE 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'EX', anoInicio: '1998', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'SX', anoInicio: '2003', anoFim: '2004', motor: '1.3 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND', anoInicio: '1999', anoFim: '1999', motor: '1.5 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND', anoInicio: '2003', anoFim: '2004', motor: '1.5 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND', anoInicio: '1997', anoFim: '1998', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND 6 MARCHAS', anoInicio: '1999', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND', anoInicio: '', anoFim: '2000', motor: '1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND CITY', anoInicio: '1999', anoFim: '2000', motor: '1.5 MPI 8V, 1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND ELX', anoInicio: '1999', anoFim: '2000', motor: '1.5 MPI 8V, 1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND EX', anoInicio: '1999', anoFim: '1999', motor: '1.5 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND SPORT', anoInicio: '1997', anoFim: '2000', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'WEEKEND STILE', anoInicio: '1997', anoFim: '2000', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'PALIO', modelo: 'YOUNG', anoInicio: '2001', anoFim: '2002', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'PUNTO', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.1', complemento: 'IMP' },
        { nome: 'SIENA', modelo: '', anoInicio: '2003', anoFim: '2004', motor: '1.5 MPI 8V', complemento: 'BR Clar' },
        { nome: 'SIENA', modelo: '500 ANOS', anoInicio: '', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'SIENA', modelo: '6 MARCHAS', anoInicio: '1999', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'SIENA', modelo: 'CITY', anoInicio: '1999', anoFim: '1999', motor: '1.6 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'SIENA', modelo: 'CITY', anoInicio: '1999', anoFim: '2000', motor: '1.5 MPI 8V, 1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'SIENA', modelo: 'EL', anoInicio: '1998', anoFim: '1998', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'SIENA', modelo: 'EL', anoInicio: '1998', anoFim: '1999', motor: '1.5 MPI 8V, 1.6 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'SIENA', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.5 MPI 8V, 1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'SIENA', modelo: 'HL', anoInicio: '1998', anoFim: '1998', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'SIENA', modelo: 'SPORT MTV', anoInicio: '1998', anoFim: '1998', motor: '1.6 MPI 16V', complemento: 'BR Clar' },
        { nome: 'SIENA', modelo: 'STILE', anoInicio: '1998', anoFim: '1999', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'STRADA', modelo: 'ADVENTURE', anoInicio: '', anoFim: '2000', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'STRADA', modelo: 'FIRE', anoInicio: '', anoFim: '2004', motor: '1.3 MPI FIRE 8V', complemento: 'BR C/ar' },
        { nome: 'STRADA', modelo: 'LX', anoInicio: '1999', anoFim: '2000', motor: '1.6 MPI 16V', complemento: 'BR Clar' },
        { nome: 'STRADA', modelo: 'LX ESTENDIDA', anoInicio: '2000', anoFim: '2002', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'STRADA', modelo: 'TREKKING', anoInicio: '1999', anoFim: '2000', motor: '1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'STRADA', modelo: 'WORKING', anoInicio: '', anoFim: '2000', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'STRADA', modelo: 'WORKING', anoInicio: '1999', anoFim: '2004', motor: '1.5 MPI BV', complemento: 'BR C/ar' },
        { nome: 'STRADA', modelo: 'WORKING EST.', anoInicio: '', anoFim: '2001', motor: '1.6 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'STRADA', modelo: 'WORKING EST.', anoInicio: '2000', anoFim: '2004', motor: '1.5 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: '', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: '', anoInicio: '1999', anoFim: '1999', motor: '2.0 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'BÁSICO', anoInicio: '1992', anoFim: '1994', motor: '2.0 8V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'BÁSICO', anoInicio: '1995', anoFim: '1996', motor: '2.0 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'CITY', anoInicio: '1999', anoFim: '1999', motor: '2.0 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'HLX', anoInicio: '1997', anoFim: '1998', motor: '2.0 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'OURO', anoInicio: '1992', anoFim: '1994', motor: '2.0 8V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'OURO 16V', anoInicio: '1993', anoFim: '1996', motor: '2.0 MPI 16V', complemento: 'BR Clar' },
        { nome: 'TEMPRA', modelo: 'STILE', anoInicio: '1995', anoFim: '1996', motor: '2.0 MPI 8V Turbo', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'SX', anoInicio: '1997', anoFim: '1998', motor: '2.0 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'SX', anoInicio: '1997', anoFim: '1998', motor: '2.0 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'TEMPRA', modelo: 'TURBO', anoInicio: '1995', anoFim: '1995', motor: '2.0 MPI 8V Turbo', complemento: 'BR Clar' },
        { nome: 'TEMPRA', modelo: 'TURBO STILE', anoInicio: '1997', anoFim: '1998', motor: '2.0 MPI 8V Turbo', complemento: 'BR C/ar' },
        { nome: 'TIPO', modelo: '', anoInicio: '1996', anoFim: '1997', motor: '1.6 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'TIPO', modelo: '', anoInicio: '1993', anoFim: '1995', motor: '1.6 SPI 8V', complemento: 'BR C/ar' },
        { nome: 'TIPO', modelo: '', anoInicio: '1994', anoFim: '1995', motor: '2.0 MPI 16V', complemento: 'BR C/ar' },
        { nome: 'TIPO', modelo: 'SLX', anoInicio: '1994', anoFim: '1995', motor: '2.0 MPI 8V', complemento: 'BR C/ar' },
        { nome: 'UNO', modelo: '', anoInicio: '1992', anoFim: '', motor: '1.4', complemento: 'BR Clar' }
      ]
    },
    {
      montadora: "Peugeot",
      carros: [
        { nome: 'BOXER', modelo: '', anoInicio: '1994', anoFim: '', motor: '2.0', complemento: 'IMP' }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'ORIGINAL',
      codigos: [{ valor: '46477717', obs: '' }]
    }
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '1757.95-102',
  descricao: 'interruptor radiador 95°C',
  obs: 'cor preta',
  componentes: '1 interruptor, 1 arruela',
  imagens: ['valclei-1757-95102.jpeg'],
  propriedades: {
    quantTerminais: 3
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        { nome: 'ESCORT', modelo: '', anoInicio: '1993', anoFim: '', motor: '1.6 AP, 1.8, 2.0', complemento: 'C/ Ar' },
        { nome: 'VERONA', modelo: '', anoInicio: '1993', anoFim: '', motor: '1.6 AP, 1.8, 2.0', complemento: 'C/ Ar' },
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        { nome: 'GOL', modelo: 'G3', anoInicio: '2002', anoFim: '2005', motor: '1.0 MI AT 8/16V', complemento: 'C/ Ar' },
        { nome: 'GOL', modelo: 'G3', anoInicio: '2002', anoFim: '2005', motor: '1.6, 1.8, 1.8L, 2.0', complemento: 'C/ Ar' },
        { nome: 'GOL', modelo: 'G3', anoInicio: '2002', anoFim: '2005', motor: '1.9L Diesel', complemento: 'C/ Ar' },
        { nome: 'GOL', modelo: 'G4', anoInicio: '2005', anoFim: '', motor: '1.9L Diesel', complemento: 'C/ Ar' },
        { nome: 'GOL', modelo: 'ESPECIAL G2', anoInicio: '1995', anoFim: '2002', motor: '1.6L AP', complemento: 'C/ Ar' },
        { nome: 'LOGUS', modelo: '', anoInicio: '1993', anoFim: '', motor: '1.6 AP, 1.8', complemento: 'C/ Ar' },
        { nome: 'POINTER', modelo: '', anoInicio: '1993', anoFim: '', motor: '1.6 AP, 1.8', complemento: 'C/ Ar' },
        { nome: 'PARATI', modelo: 'G2', anoInicio: '1997', anoFim: '2001', motor: '1.0 MI AT 16V EFI', complemento: 'C/ Ar' },
        { nome: 'PARATI', modelo: 'G3', anoInicio: '2002', anoFim: '2004', motor: '1.6, 1.8, 2.0', complemento: 'C/ Ar' },
        { nome: 'SAVEIRO', modelo: 'G3', anoInicio: '2002', anoFim: '2005', motor: '1.6, 1.8, 2.0', complemento: 'C/ Ar' },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'ORIGINAL',
      codigos: [{ valor: '547.959.481.A', obs: '' }]
    },
    {
      marca: 'Wahler',
      codigos: [{ valor: '6025.95', obs: '' }]
    },
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44014',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring, 1 trava',
  imagens: ['valclei-44014.jpeg'],
  propriedades: {
    quantTerminais: 4
  },
  aplicacao: [
    {
      montadora: "Audi",
      carros: [
        { nome: 'A2', modelo: '', anoInicio: '2000', anoFim: '', motor: '1.4', complemento: "IMP " },
        { nome: 'A3', modelo: '', anoInicio: '', anoFim: '2000', motor: '1.9L Turbo Diesel', complemento: "IMP " },
        { nome: 'A3', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.6L 4cil.', complemento: "BR " },
        { nome: 'A3', modelo: '', anoInicio: '2002', anoFim: '2005', motor: '1.6L (EA111)', complemento: "IMP " },
        { nome: 'A3', modelo: '', anoInicio: '1999', anoFim: '2000', motor: '1.6L 8V 4cil.', complemento: "IMP " },
        { nome: 'A3', modelo: '', anoInicio: '1999', anoFim: '2005', motor: '1.8 20V Turbo 4cil.', complemento: "IMP " },
        { nome: 'A3', modelo: '', anoInicio: '1999', anoFim: '2005', motor: '1.8 4cil.', complemento: "IMP " },
        { nome: 'A4', modelo: '', anoInicio: '1999', anoFim: '', motor: '2.5, 2.8', complemento: "IMP " },
        { nome: 'A6', modelo: '', anoInicio: '1997', anoFim: '', motor: '2.5, 4.2', complemento: "IMP " },
        { nome: 'A8', modelo: '', anoInicio: '1998', anoFim: '', motor: '2.5, 3.7, 4.2', complemento: "IMP " }
      ]
    },
    {
      montadora: "Seat",
      carros: [
        { nome: 'AROSA', modelo: '', anoInicio: '1999', anoFim: '', motor: '1.0, 1.4', complemento: "IMP " },
        { nome: 'CORDOBA', modelo: '', anoInicio: '2000', anoFim: '2002', motor: '1.6L (EA113) 4cil.', complemento: "ARG <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA " },
        { nome: 'CORDOBA', modelo: '', anoInicio: '2000', anoFim: '2002', motor: '1.9L SDI 4cil.', complemento: "ARG <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Diesel " },
        { nome: 'CORDOBA', modelo: '', anoInicio: '2000', anoFim: '2002', motor: '1.9L TDI (EA150) 4cil.', complemento: "ARG <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Diesel " },
        { nome: 'CORDOBA', modelo: '', anoInicio: '1999', anoFim: '', motor: '1.4', complemento: "IMP " },
        { nome: 'CORDOBA', modelo: '', anoInicio: '1999', anoFim: '2003', motor: '1.6 8V 4cil.', complemento: "IMP " },
        { nome: 'IBIZA', modelo: '', anoInicio: '2000', anoFim: '2003', motor: '1.0 16V EFI', complemento: "IMP " },
        { nome: 'IBIZA', modelo: '', anoInicio: '1999', anoFim: '', motor: '1.4', complemento: "IMP " },
        { nome: 'IBIZA', modelo: '', anoInicio: '1999', anoFim: '2003', motor: '1.6 8V 4cil.', complemento: "IMP " },
        { nome: 'LEON', modelo: '', anoInicio: '1999', anoFim: '', motor: '1.4, 1.6, 1.8', complemento: "IMP " },
        { nome: 'TOLEDO', modelo: '', anoInicio: '1998', anoFim: '', motor: '1.4, 1.6, 1.8', complemento: "IMP " },
        { nome: 'VARIO', modelo: '', anoInicio: '1999', anoFim: '2003', motor: '1.6 8V 4cil.', complemento: "IMP " }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        { nome: 'BORA', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.8 20V Turbo 4cil.', complemento: "IMP " },
        { nome: 'BORA', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.8L 4cil., 2.0L 4cil.', complemento: "IMP " },
        { nome: 'BORA', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.9L 4cil.', complemento: "IMP <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Diesel " },
        { nome: 'BORA', modelo: '', anoInicio: '2000', anoFim: '2004', motor: '2.0 8V 4cil.', complemento: "IMP " },
        { nome: 'FOX', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.0 4cil. Total Flex', complemento: "BR " },
        { nome: 'FOX', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.0 4cil., 1.6 4cil.', complemento: "BR " },
        { nome: 'FOX', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.6 4cil. Total Flex', complemento: "BR " },
        { nome: 'GOL', modelo: '', anoInicio: '2001', anoFim: '2002', motor: '1.0 MI AT 8/16V EFI', complemento: "BR " },
        { nome: 'GOL', modelo: '(GIII)', anoInicio: '2002', anoFim: '', motor: '1.0 MI AT 8/16V', complemento: "BR " },
        { nome: 'GOL', modelo: '(GIII)', anoInicio: '2002', anoFim: '', motor: '1.0 MI AT 8V Total Flex', complemento: "BR " },
        { nome: 'GOL', modelo: '(GIV)', anoInicio: '2005', anoFim: '', motor: '1.0 MI AT 8V', complemento: "BR " },
        { nome: 'GOL', modelo: '(GIV)', anoInicio: '2005', anoFim: '', motor: '1.0 MI AT 8V Total Flex', complemento: "BR " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '2001', anoFim: '', motor: '1.6 4cil.', complemento: "BR " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '2002', anoFim: '', motor: '1.6 4cil. Total Flex', complemento: "BR " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '2002', anoFim: '', motor: '1.6 4cil., 1.8L 4cil.', complemento: "BR " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '1999', anoFim: '2001', motor: '1.6 L (EA111)', complemento: "BR " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '2002', anoFim: '', motor: '1.8 20V Turbo 4cil.', complemento: "BR " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '2002', anoFim: '', motor: '2.0L 8V 4cil.', complemento: "BR " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '2002', anoFim: '', motor: '2.8L 24V 6cil.', complemento: "BR " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '1998', anoFim: '1999', motor: '1.6 8V 4cil.', complemento: "IMP " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '1998', anoFim: '1999', motor: '1.8 Turbo 20V 4cil.', complemento: "IMP " },
        { nome: 'GOLF', modelo: 'A4', anoInicio: '2002', anoFim: '', motor: '1.9L 4cil.', complemento: "IMP <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Diesel " },
        { nome: 'KOMBI', modelo: '1.4', anoInicio: '2006', anoFim: '', motor: '1.4', complemento: "BR USE A FLANGE VC-163 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Refrig. Água " },
        { nome: 'NEW BEETLE', modelo: '', anoInicio: '1999', anoFim: '', motor: '2.0 8V 4cil. 115CV', complemento: "IMP " },
        { nome: 'PARATI', modelo: '', anoInicio: '2001', anoFim: '2002', motor: '1.0 MI AT 16V EFI', complemento: "BR " },
        { nome: 'PARATI', modelo: '(GIII)', anoInicio: '2002', anoFim: '', motor: '1.0 MI AT 16V', complemento: "BR " },
        { nome: 'PASSAT', modelo: '', anoInicio: '1999', anoFim: '2001', motor: '1.8 4cil., 2.8 6cil.', complemento: "IMP " },
        { nome: 'PASSAT', modelo: '', anoInicio: '1999', anoFim: '2001', motor: '1.8 Turbo 4cil.', complemento: "IMP " },
        { nome: 'PASSAT', modelo: '', anoInicio: '2002', anoFim: '2005', motor: '1.8L 4cil., 2.8L 6cil.', complemento: "IMP " },
        { nome: 'PASSAT', modelo: '', anoInicio: '2001', anoFim: '2002', motor: '1.8L, 2.0L, 2.8L', complemento: "IMP " },
        { nome: 'POLO', modelo: 'CLASSIC', anoInicio: '2000', anoFim: '', motor: '1.9L Diesel', complemento: "ARG " },
        { nome: 'POLO', modelo: 'CLASSIC', anoInicio: '2001', anoFim: '2003', motor: '1.0L 16V EFI', complemento: "BR " },
        { nome: 'VARIANT', modelo: '', anoInicio: '2002', anoFim: '2005', motor: '1.8L 4cil., 2.8L 6cil.', complemento: "IMP " },
        { nome: 'VARIANT', modelo: '', anoInicio: '2001', anoFim: '2002', motor: '1.8L, 2.0L, 2.8L', complemento: "IMP " },
        { nome: 'VARIANT', modelo: '', anoInicio: '1999', anoFim: '2001', motor: '1.8Turbo 4cil, 1.8 4cil, 2.8 6cil', complemento: "IMP " }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'ORIGINAL',
      codigos: [{ valor: '059.919.501.A', obs: '' }]
    },
    {
      marca: 'Iguaçu',
      codigos: [{ valor: '201.0830', obs: '' }]
    },
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44147',
  descricao: 'sensor temperatura',
  obs: 'Sensor cor marrom',
  componentes: '1 sensor, 1 arruela',
  imagens: ['valclei-44147.jpeg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        { nome: '500', modelo: '', anoInicio: '2010', anoFim: '2014', motor: '1.4 EVO 8/16 V', complemento: '' },
        { nome: 'GRAND SIENA', modelo: '', anoInicio: '2012', anoFim: '2020', motor: '1.4 EVO', complemento: '' },
        { nome: 'LINEA', modelo: '', anoInicio: '2012', anoFim: '', motor: '1.4 16V T-JET', complemento: '' },
        { nome: 'FIORINO', modelo: '(NOVA)', anoInicio: '2014', anoFim: '2020', motor: '1.4 EVO', complemento: '' },
        { nome: 'UNO', modelo: '(NOVO)', anoInicio: '2012', anoFim: '', motor: '1.0-1.4', complemento: '' },
        { nome: 'PALIO', modelo: '', anoInicio: '2012', anoFim: '', motor: '1.0-1.4', complemento: '' },
        { nome: 'PUNTO', modelo: '', anoInicio: '2011', anoFim: '', motor: '1.4 16V', complemento: '' },
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'MARFLEX',
      codigos: [{ valor: '9147', obs: '' }]
    },
    {
      marca: 'ORIGINAL',
      codigos: [{ valor: '55190791', obs: '' }]
    },
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44046',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['valclei-44046.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: 'GOL', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.6, 1.8 CFI / AP', complemento: ''
        },
        {
          nome: 'LOGUS', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.6, 1.8 AP CFI', complemento: ''
        },
        {
          nome: 'PARATI', modelo: '', anoInicio: '1995', anoFim: '1997', motor: '1.6AP 8V, 1.8AP 8V', complemento: ''
        },
        {
          nome: 'PARATI', modelo: '', anoInicio: '1995', anoFim: '1997', motor: '2.0AP 8V', complemento: ''
        },
        {
          nome: 'POINTER', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.6, 1.8 AP CFI', complemento: ''
        },
        {
          nome: 'QUANTUM', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.8, 2.0 CFI', complemento: ''
        },
        {
          nome: 'SANTANA', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.8, 2.0 CFI', complemento: ''
        },
        {
          nome: 'SAVEIRO', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.6, 1.8 CFI / AP', complemento: ''
        },
      ]
    },
    {
      montadora: "Ford",
      carros: [
        {
          nome: 'ESCORT', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.8, 2.0 CFI', complemento: ''
        },
        {
          nome: 'VERONA', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.8 - 2.0 CFI', complemento: ''
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'ORIGINAL',
      codigos: [{ valor: '026.906.161.4', obs: '' }]
    },
    {
      marca: 'Iguaçu',
      codigos: [{ valor: '201.0811', obs: '' }]
    },
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44051',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['valclei-44051.jpeg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo",
      carros: [
        { nome: '155', modelo: '', anoInicio: '1992', anoFim: '', motor: '1.7, 1.8, 2.0', complemento: 'IMP' },
        { nome: '164', modelo: '', anoInicio: '1987', anoFim: '', motor: '2.0, 3.0', complemento: 'IMP' },
        { nome: '164', modelo: '', anoInicio: '1990', anoFim: '', motor: '3.0 V6 12V', complemento: 'IMP' },
        { nome: '33', modelo: '', anoInicio: '1990', anoFim: '1995', motor: '1.5, 2.7', complemento: 'IMP' }
      ]
    },
    {
      montadora: "BMW",
      carros: [
        { nome: '316', modelo: '', anoInicio: '1988', anoFim: '1994', motor: '1.6', complemento: 'IMP' },
        { nome: '318', modelo: '', anoInicio: '1990', anoFim: '1994', motor: '1.8', complemento: 'IMP' },
        { nome: '323', modelo: '', anoInicio: '1984', anoFim: '1988', motor: '2.3', complemento: 'EUR' },
        { nome: '325', modelo: '', anoInicio: '1985', anoFim: '', motor: '2.5', complemento: 'IMP' },
        { nome: '518', modelo: '', anoInicio: '1988', anoFim: '1993', motor: '1.8, 2.0, 2.5', complemento: 'IMP' },
        { nome: '520', modelo: '', anoInicio: '1988', anoFim: '1993', motor: '1.8, 2.0, 2.5', complemento: 'IMP' },
        { nome: '525', modelo: '', anoInicio: '1988', anoFim: '1993', motor: '1.8, 2.0, 2.5', complemento: 'IMP' },
        { nome: '528', modelo: '', anoInicio: '1988', anoFim: '1993', motor: '1.8, 2.0, 2.5', complemento: 'IMP' },
        { nome: '535', modelo: '', anoInicio: '1988', anoFim: '1993', motor: '1.8, 2.0, 2.5', complemento: 'IMP' },
      ]
    },
    {
      montadora: "Citroen",
      carros: [
        { nome: 'AX', modelo: '', anoInicio: '1988', anoFim: '1992', motor: '1.1, 1.4', complemento: 'IMP' },
        { nome: 'BX', modelo: '', anoInicio: '1986', anoFim: '', motor: '1.4, 1.6, 1.9', complemento: 'IMP' },
        { nome: 'VISA', modelo: '', anoInicio: '1985', anoFim: '1991', motor: '1.6', complemento: 'IMP' },
        { nome: 'XM', modelo: '', anoInicio: '1990', anoFim: '', motor: '2.0, 3.0', complemento: 'IMP' },
        { nome: 'XSARA', modelo: '', anoInicio: '1998', anoFim: '1998', motor: '1.8 16V', complemento: 'IMP' },
        { nome: 'ZX', modelo: '', anoInicio: '1991', anoFim: '', motor: '1.4, 1.6, 1.8, 1.9', complemento: 'IMP' }
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        { nome: 'CROMA', modelo: '', anoInicio: '1986', anoFim: '', motor: '2.0, 2.5', complemento: 'IMP' },
        { nome: 'ELBA', modelo: 'CSL TOP', anoInicio: '1994', anoFim: '1994', motor: '1.6 MPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'PICK-UP LX', anoInicio: '1995', anoFim: '1996', motor: '1.6 MPI 8V', complemento: 'BR' },
        { nome: 'MAREA', modelo: 'CITY', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 142CV 20V', complemento: 'BR' },
        { nome: 'MAREA', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '2.0 MPI 142CV 20V', complemento: 'BR' },
        { nome: 'MAREA', modelo: 'HLX', anoInicio: '1999', anoFim: '2000', motor: '2.0 MPI 142CV 20V', complemento: 'BR' },
        { nome: 'MAREA', modelo: 'SX', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 142CV 20V', complemento: 'BR' },
        { nome: 'MAREA', modelo: 'WEEKEND CITY', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 142CV 20V', complemento: 'BR' },
        { nome: 'MAREA', modelo: 'WEEKEND ELX', anoInicio: '1999', anoFim: '2000', motor: '2.0 MPI 142CV 20V', complemento: 'BR' },
        { nome: 'MAREA', modelo: 'WEEKEND HLX', anoInicio: '1999', anoFim: '2000', motor: '2.0 MPI 142CV 20V', complemento: 'BR' },
        { nome: 'MAREA', modelo: 'WEEKEND SX', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 142CV 20V', complemento: 'BR' },
        { nome: 'PANDA', modelo: '', anoInicio: '1987', anoFim: '1991', motor: '1.0', complemento: 'IMP' },
        { nome: 'REGATA', modelo: '', anoInicio: '1987', anoFim: '1990', motor: '1.5', complemento: 'IMP' },
        { nome: 'TEMPRA', modelo: 'STILE', anoInicio: '1995', anoFim: '1996', motor: '2.0 MPI TURBO 8V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'TURBO', anoInicio: '1995', anoFim: '1995', motor: '2.0 MPI TURBO 8V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'TURBO STILE', anoInicio: '1997', anoFim: '1998', motor: '2.0 MPI TURBO 8V', complemento: 'BR' },
        { nome: 'TIPO', modelo: '', anoInicio: '1996', anoFim: '1997', motor: '1.6 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: '', anoInicio: '1985', anoFim: '1992', motor: '1.0, 1.1. 1.3.1.4', complemento: 'BR' },
        { nome: 'UNO', modelo: '', anoInicio: '1995', anoFim: '1996', motor: '1.6 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'TURBO', anoInicio: '1994', anoFim: '1996', motor: '1.4 8V Turbo', complemento: 'BR' }
      ]
    },
    {
      montadora: "Chevrolet",
      carros: [
        { nome: 'ASTRA', modelo: 'GL, GLS', anoInicio: '2001', anoFim: '', motor: '1.8L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Alc." },
        { nome: 'ASTRA', modelo: 'GL, GLS', anoInicio: '1999', anoFim: '2001', motor: '1.8L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'ASTRA', modelo: 'GL, GLS', anoInicio: '1999', anoFim: '', motor: '2.0L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'ASTRA', modelo: 'GL, GLS', anoInicio: '2003', anoFim: '', motor: '2.0L MPFI 8V FLEX', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Flex Fuel" },
        { nome: 'ASTRA', modelo: 'GL, GLS', anoInicio: '2004', anoFim: '', motor: '2.4L MPFI 16V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'ASTRA', modelo: 'GLS', anoInicio: '1995', anoFim: '1996', motor: '1.8 8V, 2.0 8V', complemento: "IMP \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'ASTRA', modelo: 'GLS', anoInicio: '2001', anoFim: '', motor: '2.0L MPFI 16V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'BLAZER', modelo: '', anoInicio: '1998', anoFim: '2000', motor: '2.2L MPFI (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'BLAZER', modelo: '', anoInicio: '2001', anoFim: '', motor: '2.4L MPFI (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'C20', modelo: '', anoInicio: '1997', anoFim: '', motor: '4.1', complemento: 'BR' },
        { nome: 'CORSA', modelo: '', anoInicio: '1995', anoFim: '', motor: '1.0L MPFI 16V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'CORSA', modelo: '', anoInicio: '1994', anoFim: '1996', motor: '1.0L, 1.4L EFI 8V', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'CORSA', modelo: '', anoInicio: '1994', anoFim: '', motor: '1.6L MPFI 16V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'CORSA', modelo: 'NOVO', anoInicio: '2006', anoFim: '', motor: '1.0L MPFI 8V FLEX', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Flex Fuel" },
        { nome: 'IPANEMA', modelo: '', anoInicio: '1996', anoFim: '', motor: '2.0 MPFI', complemento: 'BR' },
        { nome: 'KADETT', modelo: '', anoInicio: '1996', anoFim: '', motor: '2.0 MPFI', complemento: 'BR' },
        { nome: 'MONZA', modelo: '', anoInicio: '', anoFim: '1991', motor: 'Classic MPFI', complemento: 'BR' },
        { nome: 'OMEGA', modelo: 'CD', anoInicio: '1993', anoFim: '1994', motor: '3.0L MPFI (6cil)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'OMEGA', modelo: 'CD, GLS', anoInicio: '1995', anoFim: '1995', motor: '4.1L MPFI (6cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'OMEGA', modelo: 'GL, GLS', anoInicio: '1993', anoFim: '1995', motor: '2.0L MPFI (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Álc." },
        { nome: 'OMEGA', modelo: 'GL, GLS', anoInicio: '1993', anoFim: '1995', motor: '2.0L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'S10', modelo: '', anoInicio: '1998', anoFim: '2000', motor: '2.2L MPFI (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'S10', modelo: '', anoInicio: '2001', anoFim: '', motor: '2.4L MPFI (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'SUPREMA', modelo: 'CD', anoInicio: '1993', anoFim: '1994', motor: '3.0L MPFI (6cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'SUPREMA', modelo: 'CD, GLS', anoInicio: '1995', anoFim: '1995', motor: '4.1L MPFI (6cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'SUPREMA', modelo: 'GL, GLS', anoInicio: '1993', anoFim: '1995', motor: '2.0L MPFI (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Álc." },
        { nome: 'SUPREMA', modelo: 'GL, GLS', anoInicio: '1993', anoFim: '1995', motor: '2.0L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'VECTRA', modelo: 'CD', anoInicio: '1997', anoFim: '2005', motor: '2.0L, 2.2L MPFI 8/16V', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'VECTRA', modelo: 'CD, GLS', anoInicio: '1994', anoFim: '1996', motor: '2.0L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'VECTRA', modelo: 'GL, GLS', anoInicio: '1997', anoFim: '2005', motor: '2.0L, 2.2L MPFI 8/16V', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'VECTRA', modelo: 'GSI', anoInicio: '1994', anoFim: '1996', motor: '1.8L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'VECTRA', modelo: 'NOVO', anoInicio: '2006', anoFim: '', motor: '2.0L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'VECTRA', modelo: 'NOVO', anoInicio: '2006', anoFim: '', motor: '2.0L MPFI 8V FLEX', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Flex Fuel" },
        { nome: 'VECTRA', modelo: 'NOVO', anoInicio: '2006', anoFim: '', motor: '2.4L MPFI 16V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'VECTRA', modelo: 'NOVO', anoInicio: '2006', anoFim: '', motor: '2.4L MPFI 16V FLEX', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Flex Fuel" },
        { nome: 'ZAFIRA', modelo: '', anoInicio: '2001', anoFim: '', motor: '1.8L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Álc./Gas." },
        { nome: 'ZAFIRA', modelo: '', anoInicio: '2001', anoFim: '', motor: '2.0L MPFI 16V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'ZAFIRA', modelo: '', anoInicio: '2001', anoFim: '', motor: '2.0L MPFI 8V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." },
        { nome: 'ZAFIRA', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0L MPFI 8V FLEX', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Flex Fuel" },
        { nome: 'ZAFIRA', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.4L MPFI 16V (4cil.)', complemento: "BR \<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'\>: Gas." }
      ]
    },
    {
      montadora: "Hyundai",
      carros: [
        { nome: 'ASCENT', modelo: '', anoInicio: '1996', anoFim: '1998', motor: '1.5', complemento: 'IMP' },
        { nome: 'ELANTRA', modelo: '', anoInicio: '1993', anoFim: '1995', motor: '1.5', complemento: 'IMP' },
        { nome: 'SCOUPE', modelo: '', anoInicio: '1996', anoFim: '1998', motor: '1.8', complemento: 'IMP' }
      ]
    },
    {
      montadora: "Peugeot",
      carros: [
        { nome: '106', modelo: '', anoInicio: '1991', anoFim: '', motor: '1.0', complemento: 'IMP' },
        { nome: '305', modelo: '', anoInicio: '1986', anoFim: '', motor: '1.6, 1.8', complemento: 'IMP' },
        { nome: '309', modelo: '', anoInicio: '1985', anoFim: '1990', motor: '1.6, 1.9', complemento: 'EUR' },
        { nome: '505', modelo: '', anoInicio: '1990', anoFim: '1993', motor: '2.2', complemento: 'IMP' }
      ]
    },
    {
      montadora: "Renault",
      carros: [
        { nome: 'R19', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.6', complemento: 'IMP' }
      ]
    },
    {
      montadora: "Seat",
      carros: [
        { nome: 'IBIZA', modelo: '', anoInicio: '1991', anoFim: '1992', motor: '1.6', complemento: 'IMP' }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'ORIGINAL',
      codigos: [{ valor: '60.513.205', obs: '' }]
    }
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44092',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring',
  imagens: ['valclei-44092.jpeg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: 'Audi',
      carros: [
        { nome: 'A2', modelo: '', anoInicio: '2002', anoFim: '2005', motor: '1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.6 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: '', anoInicio: '2003', anoFim: '', motor: '2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: '', anoInicio: '2003', anoFim: '', motor: '2.0 TDI 8/16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.0 TDI quattro 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: '', anoInicio: '2006', anoFim: '', motor: '2.0 TDI quattro 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.0 TFSI quattro 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: '', anoInicio: '2003', anoFim: '', motor: '3.2 V6 quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: '', anoInicio: '2006', anoFim: '', motor: 'S3 quattro 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2004', anoFim: '', motor: '1.6 8V, 1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2004', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2004', anoFim: '', motor: '2.0 TDI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2006', anoFim: '', motor: '2.0 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2005', anoFim: '', motor: '2.0 TDI quattro 8/16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2004', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2004', anoFim: '', motor: '2.0 TFSI quattro 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2004', anoFim: '', motor: '3.2 V6 quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A3', modelo: 'SPORTBACK', anoInicio: '2004', anoFim: '', motor: '2.0 FSI 16V', complemento: 'MP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2000', anoFim: '2004', motor: '1.6 8V, 1.8T 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2000', anoFim: '2004', motor: '1.8T quattro 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2000', anoFim: '2004', motor: '2.0 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2002', anoFim: '2004', motor: '2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.0 TDI 16V, 2.7 TDI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: '', anoInicio: '2006', anoFim: '', motor: '2.0 TDI quattro 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.0 TFSI quattro 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2001', anoFim: '2004', motor: '2.4 30V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2000', anoFim: '2004', motor: '3.0 30V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2000', anoFim: '2004', motor: '3.0 quattro 30V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2004', anoFim: '', motor: '3.0 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: '', anoInicio: '2005', anoFim: '', motor: '3.2 FSI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: '', anoInicio: '2005', anoFim: '', motor: '3.2 FSI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2001', anoFim: '2004', motor: '1.6 8V, 1.8T 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2001', anoFim: '2004', motor: '1.8T quattro 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2001', anoFim: '2004', motor: '2.0 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2002', anoFim: '2004', motor: '2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2004', anoFim: '', motor: '2.0 TDI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2006', anoFim: '', motor: '2.0 TDI quattro 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2004', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2004', anoFim: '', motor: '2.0 TFSI quattro 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2001', anoFim: '2004', motor: '2.4 30V, 3.0 30V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2006', anoFim: '', motor: '2.7 TDI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2001', anoFim: '2004', motor: '3.0 quattro 30V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2004', anoFim: '', motor: '3.0 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '3.2 FSI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '3.2 FSI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2002', anoFim: '', motor: '1.8T 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2002', anoFim: '', motor: '1.8T quattro 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2004', anoFim: '', motor: '2.0 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2005', anoFim: '', motor: '2.0 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2006', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2006', anoFim: '', motor: '2.7 TDI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2005', anoFim: '', motor: '3.0 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2005', anoFim: '', motor: '3.2 FSI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A4', modelo: 'CONVERTIBLE', anoInicio: '2005', anoFim: '', motor: '3.2 FSI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: '', anoInicio: '2001', anoFim: '2005', motor: '2.0 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.0 TDI 16V, 2.7 TDI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.4 24V, 2.4 quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: '', anoInicio: '2004', anoFim: '', motor: '2.7 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: '', anoInicio: '2004', anoFim: '', motor: '3.0 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: '', anoInicio: '2004', anoFim: '', motor: '3.2 FSI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: '', anoInicio: '2004', anoFim: '', motor: '3.2 FSI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: '', anoInicio: '2006', anoFim: '', motor: '4.2 FSI quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: '', anoInicio: '2004', anoFim: '', motor: '4.2 quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: '', anoInicio: '2006', anoFim: '', motor: 'S6 quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'ALLROAD', anoInicio: '2006', anoFim: '', motor: '2.7 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: 'ALLROAD', anoInicio: '2006', anoFim: '', motor: '3.0 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: 'ALLROAD', anoInicio: '2006', anoFim: '', motor: '3.2 FSI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'ALLROAD', anoInicio: '2006', anoFim: '', motor: '4.2 FSI quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2001', anoFim: '2005', motor: '2.0 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '2.0 TDI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '2.4 24V, 2.4 quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '2.7 TDI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '2.7 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '3.0 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '3.2 FSI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '3.2 FSI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2006', anoFim: '', motor: '4.2 FSI quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2005', anoFim: '', motor: '4.2 quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A6', modelo: 'AVANT', anoInicio: '2006', anoFim: '', motor: 'S6 quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A8', modelo: '', anoInicio: '2003', anoFim: '', motor: '3.0 30V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A8', modelo: '', anoInicio: '2003', anoFim: '', motor: '3.0 TDI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A8', modelo: '', anoInicio: '2005', anoFim: '', motor: '3.2 FSI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A8', modelo: '', anoInicio: '2005', anoFim: '', motor: '3.2 FSI quattro 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A8', modelo: '', anoInicio: '2002', anoFim: '', motor: '3.7 quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A8', modelo: '', anoInicio: '2003', anoFim: '', motor: '4.0 TDI quattro 32V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A8', modelo: '', anoInicio: '2006', anoFim: '', motor: '4.2 FSI quattro 32V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A8', modelo: '', anoInicio: '2002', anoFim: '', motor: '4.2 quattro 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A8', modelo: '', anoInicio: '2005', anoFim: '', motor: '4.2 TDI quattro 32V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'A8', modelo: '', anoInicio: '2003', anoFim: '', motor: '6.0 W12 quattro 48V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'A8', modelo: '', anoInicio: '2006', anoFim: '', motor: 'S8 quattro 40V', complemento: ' <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'Q7', modelo: '', anoInicio: '2006', anoFim: '', motor: '3.0 TDI quattro 24V', complemento: ' <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'Q7', modelo: '', anoInicio: '2006', anoFim: '', motor: '3.6 FSI quattro 24V', complemento: ' <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'Q7', modelo: '', anoInicio: '2006', anoFim: '', motor: '4.2 FSI quattro 32V', complemento: ' <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'TT', modelo: '', anoInicio: '2006', anoFim: '', motor: '2.0 TFSI 16V', complemento: ' <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'TT', modelo: '', anoInicio: '2006', anoFim: '', motor: '3.2 V6 quattro 24V', complemento: ' <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'TT', modelo: 'ROADSTER', anoInicio: '2007', anoFim: '', motor: '2.0 TFSI 16V', complemento: ' <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'TT', modelo: 'ROADSTER', anoInicio: '2007', anoFim: '', motor: '3.2 V6 quattro 24V', complemento: '' }
      ]
    },
    {
      montadora: 'Mercedes-Benz',
      carros: [
        { nome: 'V 280', modelo: '', anoInicio: '1997/', anoFim: '', motor: 'M104.900', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
      ],
    },
    {
      montadora: 'Seat',
      carros: [
        { nome: 'ALHAMBRA', modelo: '', anoInicio: '1997/', anoFim: '', motor: '1.8T 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'ALHAMBRA', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'ALHAMBRA', modelo: '', anoInicio: '2001', anoFim: '', motor: '1.9 TDI 8V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'ALHAMBRA', modelo: '', anoInicio: '1996', anoFim: '', motor: '2.0i 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'ALHAMBRA', modelo: '', anoInicio: '2000', anoFim: '', motor: '2.8 V6 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'ALHAMBRA', modelo: '', anoInicio: '2000', anoFim: '', motor: '2.8 V6 24V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'ALTEA', modelo: '', anoInicio: '2004', anoFim: '', motor: '1.6 8V, 2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'ALTEA', modelo: '', anoInicio: '2004', anoFim: '', motor: '1.9 TDI 8V, 2.0 TDI 8/16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'ALTEA', modelo: '', anoInicio: '2006', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'CORDOBA', modelo: '', anoInicio: '1999', anoFim: '2002', motor: '1.0 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'CORDOBA', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.2 12V, 1.4 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'CORDOBA', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.4 TDI 6V. 1.9 SDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'CORDOBA', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.6 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'CORDOBA', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'CORDOBA', modelo: '', anoInicio: '2002', anoFim: '', motor: '2.0 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'IBIZA', modelo: 'III', anoInicio: '1999', anoFim: '2002', motor: '1.0 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'IBIZA', modelo: 'IV', anoInicio: '2002', anoFim: '', motor: '1.2 12V, 1.4 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'IBIZA', modelo: 'IV', anoInicio: '2002', anoFim: '', motor: '1.4 TDI 6V, 1.9 SDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'IBIZA', modelo: 'IV', anoInicio: '2003', anoFim: '', motor: '1.6 8V, 1.8T FR 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'IBIZA', modelo: 'IV', anoInicio: '2004', anoFim: '', motor: '1.8T Cupra R 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'IBIZA', modelo: 'IV', anoInicio: '2002', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'IBIZA', modelo: 'IV', anoInicio: '2004', anoFim: '', motor: '1.9 TDI Cupra R 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'LEON', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.6 8V, 1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'LEON', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'LEON', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0 TDI 8/16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'LEON', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0 TFSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'TOLEDO', modelo: 'III', anoInicio: '2004', anoFim: '', motor: '1.6 8V, 2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'TOLEDO', modelo: 'III', anoInicio: '2004', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'TOLEDO', modelo: 'III', anoInicio: '2004', anoFim: '', motor: '2.0 TDI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
      ],
    },
    {
      montadora: 'Volkswagen',
      carros: [
        { nome: 'AMAROK', modelo: '', anoInicio: '2010', anoFim: '2018', motor: '2.0 16V EA-189', complemento: 'CINZA 2 TERMINAIS <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: TURBO DIESEL TDI' },
        { nome: 'BORA', modelo: '', anoInicio: '1998', anoFim: '2005', motor: '1.6 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'BORA', modelo: '', anoInicio: '2002', anoFim: '2005', motor: '1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'BORA', modelo: 'ESTATE', anoInicio: '1999', anoFim: '2005', motor: '1.6 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'BORA', modelo: 'ESTATE', anoInicio: '2002', anoFim: '2005', motor: '1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'IV', anoInicio: '1997', anoFim: '2005', motor: '1.6 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'IV', anoInicio: '2002', anoFim: '2005', motor: '1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'IV VARIANT', anoInicio: '1999', anoFim: '', motor: '1.6 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'IV VARIANT', anoInicio: '2002', anoFim: '', motor: '1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2003', anoFim: '', motor: '1.4 16V, 1.4 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2004', anoFim: '', motor: '1.6 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2003', anoFim: '', motor: '1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2003', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2003', anoFim: '', motor: '1.9 TDI 8V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2004', anoFim: '', motor: '2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2004', anoFim: '', motor: '2.0 FSI 16V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2005', anoFim: '', motor: '2.0 GTD 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2004', anoFim: '', motor: '2.0 GTI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2003', anoFim: '', motor: '2.0 SDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2003', anoFim: '', motor: '2.0 TDI 8/16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2004', anoFim: '', motor: '2.0 TDI 8/16V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'GOLF', modelo: 'V', anoInicio: '2005', anoFim: '', motor: '3.2 R32 24V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V PLUS', anoInicio: '2005', anoFim: '', motor: '1.4 16V, 1.6 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V PLUS', anoInicio: '2005', anoFim: '', motor: '1.4 TSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V PLUS', anoInicio: '2005', anoFim: '', motor: '1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V PLUS', anoInicio: '2005', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'GOLF', modelo: 'V PLUS', anoInicio: '2005', anoFim: '', motor: '2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'GOLF', modelo: 'V PLUS', anoInicio: '2005', anoFim: '', motor: '2.0 TDI 8/16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.6 8V, 1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2005', anoFim: '', motor: '1.9 TDI 8V, 2.0 TDI 8/16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0 FSI 16V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0 TDI 8/16V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2005', anoFim: '', motor: '2.0 TFSI 16V, 3.2 FSI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2000', anoFim: '2005', motor: '2.3 V5 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2000', anoFim: '2005', motor: '2.3 V5 20V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2005', anoFim: '', motor: '3.2 FSI 24V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2007', anoFim: '', motor: '3.6 R36 24V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: '', anoInicio: '2001', anoFim: '2005', motor: '4.0 W8 32V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2005', anoFim: '', motor: '1.6 8V, 1.6 FSI 16V, 2.0 TFSI', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2005', anoFim: '', motor: '1.9 TDI 8V, 2.0 TDI 8/16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2005', anoFim: '', motor: '2.0 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2005', anoFim: '', motor: '2.0 FSI 16V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2005', anoFim: '', motor: '2.0 TDI 8/16V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2000', anoFim: '2005', motor: '2.3 VR5 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2000', anoFim: '2005', motor: '2.3 VR5 20V 4 motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2005', anoFim: '', motor: '3.2 FSI 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2005', anoFim: '', motor: '3.2 FSI 24V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2007', anoFim: '', motor: '3.6 R36 24V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PASSAT', modelo: 'VARIANT', anoInicio: '2001', anoFim: '2005', motor: '4.0 WB 32V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PHAETON', modelo: '', anoInicio: '2002', anoFim: '', motor: '3.2 V6 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PHAETON', modelo: '', anoInicio: '2004', anoFim: '', motor: '3.2 V6 24V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PHAETON', modelo: '', anoInicio: '2003', anoFim: '', motor: '4.2 V8 40V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'PHAETON', modelo: '', anoInicio: '2002', anoFim: '', motor: '5.0 V10 TDI 20V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'PHAETON', modelo: '', anoInicio: '2002', anoFim: '', motor: '6.0 W12 48V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'POLO', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.4L 16V', complemento: 'BR <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'POLO', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.6 Flex', complemento: 'BR <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'POLO', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.0 MI AT 16V', complemento: 'BR <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'POLO', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.4L 8V, 1.6', complemento: 'BR <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'POLO', modelo: '', anoInicio: '2002', anoFim: '', motor: '2.0L', complemento: 'BR <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'POLO', modelo: '', anoInicio: '2001', anoFim: '', motor: '1.2 6/12V, 1.4 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'POLO', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.4 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'POLO', modelo: '', anoInicio: '2001', anoFim: '', motor: '1.4 TDI 6V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'POLO', modelo: '', anoInicio: '2001', anoFim: '', motor: '1.9 SDI 8V, 1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'POLO', modelo: 'SALOON', anoInicio: '2003', anoFim: '', motor: '1.4 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'POLO', modelo: 'SALOON', anoInicio: '2003', anoFim: '', motor: '1.4 TDI 6V, 1.9 SDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'POLO', modelo: 'SEDAN', anoInicio: '2002', anoFim: '', motor: '1.6 Flex', complemento: 'BR <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'POLO', modelo: 'SEDAN', anoInicio: '2002', anoFim: '', motor: '1.4L 16V, 1.6', complemento: 'BR <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'SHARAN', modelo: '', anoInicio: '1997', anoFim: '', motor: '1.8T 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'SHARAN', modelo: '', anoInicio: '1995', anoFim: '', motor: '1.9 TDI 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'SHARAN', modelo: '', anoInicio: '2000', anoFim: '', motor: '1.9 TDI 8V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'SHARAN', modelo: '', anoInicio: '1995', anoFim: '', motor: '2.0 8V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'SHARAN', modelo: '', anoInicio: '2000', anoFim: '', motor: '2.8 V6 24V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'SHARAN', modelo: '', anoInicio: '2000', anoFim: '', motor: '2.8 V6 24V 4motion', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'TOUAREG', modelo: '', anoInicio: '2002', anoFim: '', motor: '3.2 V6 24V, 4.2 V8 40V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'TOUAREG', modelo: '', anoInicio: '2002', anoFim: '', motor: '5.0 V10 TDI 20V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
        { nome: 'TOURAN', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.6 8V, 1.6 FSI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Gas.' },
        { nome: 'TOURAN', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.6i, 1.6 FSI, 1.9 TDI', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: ' },
        { nome: 'TOURAN', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.9 TDI 8V, 2.0 TDI 16V', complemento: 'IMP <img src="imagens/pagina/icone-fuel-3.png" style="height: 17px; margin-left: 4px;" title="Combustível">: Diesel' },
      ],
    },
  ],
  referenciaCruzada: [
    {
      marca: 'Wahler',
      codigos: [{ valor: '412308', obs: '' }]
    }
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44099',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela, 1 carcaça do sensor, 1 borracha vedação',
  imagens: ['valclei-44099.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao:
    [
      {
        montadora: "FIAT",
        carros: [
          { nome: 'DOBLO', modelo: '', anoInicio: '2001', anoFim: '', motor: '1.2', complemento: 'C/ carc. plast. Importado' },
          { nome: 'FIORINO', modelo: 'FIRE', anoInicio: '2004', anoFim: '', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'FIORINO', modelo: 'FIRE AMBULANCIA', anoInicio: '2004', anoFim: '', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'FIORINO', modelo: 'FIRE FURGÃO', anoInicio: '2004', anoFim: '', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'FIORINO', modelo: 'FURGÃO', anoInicio: '2003', anoFim: '2004', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'IDEA', modelo: 'ELX', anoInicio: '2006', anoFim: '', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: '', anoInicio: '2001', anoFim: '', motor: '1.2', complemento: 'c/ carc plast Importado' },
          { nome: 'PALIO', modelo: 'ELX', anoInicio: '2004', anoFim: '2005', motor: '1.0 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'ELX', anoInicio: '2006', anoFim: '', motor: '1.0 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'ELX', anoInicio: '2004', anoFim: '2005', motor: '1.3 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'ELX', anoInicio: '2006', anoFim: '', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'ELX', anoInicio: '2005', anoFim: '', motor: '1.3 MPI FIRE 16V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'ELX (FASE III)', anoInicio: '2008', anoFim: '', motor: '1.0 MPI FIRE FLEX 8V', complemento: 'Flex BR' },
          { nome: 'PALIO', modelo: 'ELX (FASE III)', anoInicio: '2018', anoFim: '2018', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'Flex BR' },
          { nome: 'PALIO', modelo: 'EX', anoInicio: '2003', anoFim: '2003', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'EX', anoInicio: '2001', anoFim: '2005', motor: '1.0 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'EX', anoInicio: '2006', anoFim: '', motor: '1.0 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'FIRE', anoInicio: '2003', anoFim: '2006', motor: '1.0 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'FIRE', anoInicio: '2006', anoFim: '', motor: '1.0 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'PENTA', anoInicio: '2003', anoFim: '2003', motor: '1.0 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'PALIO ', modelo: 'WEEKEND ELX', anoInicio: '2005', anoFim: '2005', motor: '1.3 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'PALIO ', modelo: 'WEEKEND ELX', anoInicio: '2006', anoFim: '', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'PALIO ', modelo: 'WEEKEND EX', anoInicio: '2003', anoFim: '2004', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'PALIO', modelo: 'YOUNG', anoInicio: '2002', anoFim: '2002', motor: '1.0 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'PANDA', modelo: '', anoInicio: '2003', anoFim: '', motor: '1.1, 1.2', complemento: 'c/ carc plast Importado' },
          { nome: 'PANDA', modelo: '', anoInicio: '2004', anoFim: '', motor: '1.2 4x4', complemento: 'c/ carc plast Importado' },
          { nome: 'PANDA', modelo: '', anoInicio: '2000', anoFim: '', motor: '1100 i.e.', complemento: 'C/ carc. plast. Importado' },
          { nome: 'PUNTO', modelo: '', anoInicio: '2008', anoFim: '', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'Flex BR' },
          { nome: 'PUNTO', modelo: 'ELX', anoInicio: '2008', anoFim: '', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'Flex BR' },
          { nome: 'SEICENTO', modelo: '', anoInicio: '1998', anoFim: '', motor: '1.1', complemento: 'C/ carc. plast. Importado' },
          { nome: 'SIENA', modelo: '', anoInicio: '2002', anoFim: '', motor: '1.2', complemento: 'C/ carc. plast. Importado' },
          { nome: 'SIENA', modelo: 'ELX', anoInicio: '2005', anoFim: '2005', motor: '1.0 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'SIENA', modelo: 'ELX', anoInicio: '2005', anoFim: '2005', motor: '1.3 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'SIENA', modelo: 'ELX', anoInicio: '2006', anoFim: '', motor: '1.0 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'SIENA', modelo: 'ELX', anoInicio: '2006', anoFim: '', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'SIENA', modelo: 'ELX', anoInicio: '2005', anoFim: '', motor: '1.3 MPI FIRE 16V', complemento: 'BR' },
          { nome: 'SIENA', modelo: 'ELX (FASE III)', anoInicio: '2018', anoFim: '2018', motor: '1.0 MPI FIRE FLEX 8V', complemento: 'Flex BR' },
          { nome: 'SIENA', modelo: 'ELX (FASE III)', anoInicio: '2018', anoFim: '2018', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'Flex BR' },
          { nome: 'SIENA', modelo: 'ELX (FASE III)', anoInicio: '2008', anoFim: '', motor: '1.4 MPI TETRAFUEL 8V', complemento: 'TetraFuel BR' },
          { nome: 'SIENA', modelo: 'EX', anoInicio: '2003', anoFim: '2004', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'SIENA', modelo: 'FIRE', anoInicio: '2002', anoFim: '2006', motor: '1.0 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'SIENA', modelo: 'FIRE', anoInicio: '2006', anoFim: '', motor: '1.0 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'STRADA', modelo: 'FIRE', anoInicio: '2003', anoFim: '2005', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'STRADA', modelo: 'FIRE', anoInicio: '2006', anoFim: '', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'STRADA', modelo: 'TREKKING', anoInicio: '2006', anoFim: '', motor: '1.4 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'UNO', modelo: 'FIRE', anoInicio: '2004', anoFim: '', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'UNO', modelo: 'FIRE FURGONETA', anoInicio: '2004', anoFim: '2007', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'UNO', modelo: 'FIRE FURGONETA', anoInicio: '2007', anoFim: '', motor: '1.3 MPI FIRE FLEX 8V', complemento: 'BR' },
          { nome: 'UNO', modelo: 'FURGONETA', anoInicio: '2003', anoFim: '2004', motor: '1.3 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'UNO', modelo: 'MILLE', anoInicio: '2002', anoFim: '2004', motor: '1.0 MPI FIRE 8V', complemento: 'BR' },
          { nome: 'UNO', modelo: 'MILLE FIRE', anoInicio: '2006', anoFim: '', motor: '1.0 MPI FIRE FLEX BV', complemento: 'BR' },
          { nome: 'UNO', modelo: 'MILLE FIRE', anoInicio: '2004', anoFim: '2006', motor: '1.0 MPI FIRE 8V', complemento: 'BR' }
        ]
      }
    ],
  referenciaCruzada: [
    {
      marca: '',
      codigos: [{ valor: '', obs: '' }]
    }
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44222',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring',
  imagens: ['valclei-44222.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford", // "Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo", "Seat", "Troller", "Lada", "Ferrari"
      carros: [
        {
          nome: 'KA', modelo: '', anoInicio: '2014', anoFim: '', motor: '1.0 12V TIVCT 3 CIL 85 CV', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: 'FIESTA', modelo: '(NEW)', anoInicio: 'JUN/2016', anoFim: '', motor: '1.0 GDI ECOBOOST 12V', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: 'RANGER', modelo: '', anoInicio: '2012', anoFim: '', motor: '2.2 16V / 3.2 20V DURATORQ', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: 'TRANSIT', modelo: '', anoInicio: 'JUN/2012', anoFim: 'DEZ/2013', motor: '2.2 16V / 3.2 20V DURATORQ', complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'ORIGINAL',
      codigos: [{ valor: '7M5112A648BA', obs: '' }]
    }
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44053',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['valclei-44053.jpeg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo", // "Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo", "Seat", "Troller", "Lada"
      carros: [
        {
          nome: '145', modelo: '', anoInicio: '1996', anoFim: '1999', motor: '1.9',
          complemento: 'Importado'
        },
        {
          nome: '146', modelo: '', anoInicio: '1996', anoFim: '1999', motor: '1.9',
          complemento: 'Importado'
        },
        {
          nome: '155', modelo: '', anoInicio: '1996', anoFim: '1997', motor: '1.9',
          complemento: 'Turbo Diesel / Importado'
        },
        {
          nome: '155', modelo: '', anoInicio: '1992', anoFim: '', motor: '2.0 16V',
          complemento: 'Turbo / Importado'
        },
        {
          nome: '155', modelo: '', anoInicio: '1992', anoFim: '1996', motor: '2.0i',
          complemento: 'Importado'
        },
      ]
    },
    {
      montadora: "Audi", // "Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo", "Seat", "Troller", "Lada"
      carros: [
        {
          nome: 'A6',
          modelo: '',
          anoInicio: '1994',
          anoFim: '1997',
          motor: '2.6i V6, 2.8i V6',
          complemento: 'Importado'
        }
      ]
    },
    {
      montadora: "Ferrari", // "Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo", "Seat", "Troller", "Lada", "Ferrari"
      carros: [
        {
          nome: 'F-40',
          modelo: '',
          anoInicio: '1991',
          anoFim: '',
          motor: '3.0',
          complemento: 'Importado'
        }
      ]
    },

    {
      montadora: "FIAT",
      carros: [
        { nome: 'BRAVA', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.9', complemento: 'Turbo Diesel Importado' },
        { nome: 'BRAVO', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.9', complemento: 'Turbo Diesel Importado' },
        { nome: 'CINQUECENTO', modelo: '', anoInicio: '1998', anoFim: '1998', motor: '1.11', complemento: 'Importado' },
        { nome: 'CINQUECENTO', modelo: '', anoInicio: '1992', anoFim: '1994', motor: '900', complemento: 'Importado' },
        { nome: 'CINQUECENTO', modelo: '', anoInicio: '1992', anoFim: '1998', motor: 'SPI', complemento: 'Importado' },
        { nome: 'COUPE', modelo: '', anoInicio: '1995', anoFim: '1997', motor: '2.0 MPI 16V', complemento: 'Importado' },
        { nome: 'COUPE', modelo: '', anoInicio: '1994', anoFim: '', motor: '2.0i 16V', complemento: 'Turbo Importado' },
        { nome: 'CROMA', modelo: '', anoInicio: '1985', anoFim: '1996', motor: '2.0i.e.', complemento: 'Importado' },
        { nome: 'CROMA', modelo: '', anoInicio: '1991', anoFim: '1996', motor: '2.5', complemento: 'Turbo Diesel Importado' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1999', anoFim: '2000', motor: '2.8 8V', complemento: 'Diesel BR' },
        { nome: 'DUCATO', modelo: '', anoInicio: '2004', anoFim: '2005', motor: '2.8 8V', complemento: 'Diesel BR' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1994', anoFim: '1998', motor: '1.9, 2.5', complemento: 'Turbo Diesel Importado' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1998', anoFim: '', motor: '2.8', complemento: 'Turbo Diesel Importado' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1998', anoFim: '1998', motor: '2.8', complemento: 'Turbo Diesel Importado' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1999', anoFim: '2000', motor: '2.8 8V', complemento: 'Diesel(10Lug.) BR' },
        { nome: 'DUCATO', modelo: '', anoInicio: '1999', anoFim: '2000', motor: '2.8 8V', complemento: 'Diesel(15Lug). BR' },
        { nome: 'DUNA', modelo: '', anoInicio: '1995', anoFim: '1995', motor: '1.6 i.e., 1.6 SPI 8V', complemento: 'Importado' },
        { nome: 'ELBA', modelo: 'CSL', anoInicio: '1994', anoFim: '1994', motor: '1.6 SPI 8V', complemento: 'BR' },
        { nome: 'ELBA', modelo: 'WEEKEND', anoInicio: '1992', anoFim: '1996', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'FURGÃO', anoInicio: '2003', anoFim: '2004', motor: '1.3 MPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'FURGÃO', anoInicio: '1997', anoFim: '2004', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'FURGÃO', anoInicio: '1994', anoFim: '1996', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'PICK-UP', anoInicio: '1994', anoFim: '1995', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'PICK-UP LX', anoInicio: '1994', anoFim: '1994', motor: '1.6 SPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'PICK-UP TREK MTV', anoInicio: '1997', anoFim: '1997', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'PICK-UP TREKKING', anoInicio: '1996', anoFim: '1996', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'PICK-UP TREKKING', anoInicio: '1997', anoFim: '1998', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'PICK-UP WORKING', anoInicio: '1996', anoFim: '1996', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'FIORINO', modelo: 'PICK-UP WORKING', anoInicio: '1997', anoFim: '1999', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'MAREA', modelo: '', anoInicio: '1996', anoFim: '1999', motor: '1.9', complemento: 'Importado' },
        { nome: 'MAREA', modelo: '75', anoInicio: '1999', anoFim: '', motor: '1.9', complemento: 'Turbo Diesel Importado' },
        { nome: 'PALIO', modelo: '', anoInicio: '1996', anoFim: '2000', motor: '1.0, 1.5, 1.6 MPI', complemento: 'BR' },
        { nome: 'PALIO', modelo: '70', anoInicio: '1997', anoFim: '', motor: 'Turbo Diesel', complemento: 'Importado' },
        { nome: 'PALIO', modelo: '75', anoInicio: '1971', anoFim: '1971', motor: '1.21', complemento: 'Importado' },
        { nome: 'PALIO', modelo: 'CITY', anoInicio: '1999', anoFim: '2000', motor: '1.6 SPI 8V, 1.6 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO', modelo: 'ED', anoInicio: '1996', anoFim: '1998', motor: '1.0 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO', modelo: 'EDX', anoInicio: '1996', anoFim: '1999', motor: '1.0 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO', modelo: 'EL', anoInicio: '1996', anoFim: '1998', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO', modelo: 'EL', anoInicio: '1998', anoFim: '1999', motor: '1.6 SPI 8V', complemento: 'BR' },
        { nome: 'PALIO', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.6 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO', modelo: 'ELX', anoInicio: '2004', anoFim: '', motor: '1.7 8V Turbo', complemento: 'Diesel Importado' },
        { nome: 'PALIO', modelo: 'EX', anoInicio: '1998', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO ', modelo: 'WEEKEND', anoInicio: '1997', anoFim: '1999', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO ', modelo: 'WEEKEND 6 MARCHAS', anoInicio: '1999', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO ', modelo: 'WEEKEND CITY', anoInicio: '1999', anoFim: '2000', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO ', modelo: 'WEEKEND ELX', anoInicio: '1999', anoFim: '2000', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'PALIO ', modelo: 'WEEKEND ELX', anoInicio: '2004', anoFim: '', motor: '1.7 8V TURBO', complemento: 'Diesel Importado' },
        { nome: 'PALIO ', modelo: 'WEEKEND EX', anoInicio: '1999', anoFim: '1999', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'PANDA', modelo: '', anoInicio: '1991', anoFim: '', motor: '1000i.e., 1100i.e', complemento: 'Importado' },
        { nome: 'PANDA', modelo: '', anoInicio: '1991', anoFim: '', motor: '900, 1000 4X4', complemento: 'Importado' },
        { nome: 'PANDA', modelo: 'VAN', anoInicio: '1991', anoFim: '', motor: '1000i.e., 1100i.e', complemento: 'Importado' },
        { nome: 'PREMIO', modelo: '', anoInicio: '1993', anoFim: '1994', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'PREMIO', modelo: 'CSL', anoInicio: '1994', anoFim: '1994', motor: '1.6 SPI 8V', complemento: 'BR' },
        { nome: 'PREMIO', modelo: 'S', anoInicio: '1992', anoFim: '1993', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'PREMIO', modelo: 'SL', anoInicio: '1992', anoFim: '1992', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'SEICENTO', modelo: '', anoInicio: '1998', anoFim: '', motor: '900i, 1.11', complemento: 'Importado' },
        { nome: 'SIENA', modelo: '', anoInicio: '1998', anoFim: '', motor: '1.2i', complemento: 'Importado' },
        { nome: 'SIENA', modelo: '', anoInicio: '1997', anoFim: '', motor: '1.41', complemento: 'Importado' },
        { nome: 'SIENA', modelo: '', anoInicio: '1999', anoFim: '', motor: '1.7', complemento: 'Turbo Diesel Importado' },
        { nome: 'SIENA', modelo: '6 MARCHAS', anoInicio: '1999', anoFim: '2000', motor: '1.0 MPI 8V', complemento: 'BR' },
        { nome: 'SIENA', modelo: 'CITY', anoInicio: '1999', anoFim: '1999', motor: '1.6 SPI 8V', complemento: 'BR' },
        { nome: 'SIENA', modelo: 'CITY', anoInicio: '1999', anoFim: '2000', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'SIENA', modelo: 'EL', anoInicio: '1999', anoFim: '1999', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'SIENA', modelo: 'EL', anoInicio: '1998', anoFim: '1999', motor: '1.6 SPI 8V', complemento: 'BR' },
        { nome: 'SIENA', modelo: 'ELX', anoInicio: '1999', anoFim: '2000', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'SIENA', modelo: 'ELX', anoInicio: '2004', anoFim: '', motor: '1.7 8V TURBO', complemento: 'Diesel BR' },
        { nome: 'STRADA', modelo: 'WORKING', anoInicio: '1999', anoFim: '2001', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'STRADA', modelo: 'WORKING', anoInicio: '2004', anoFim: '', motor: '1.7 8V TURBO', complemento: 'Diesel Importado' },
        { nome: 'STRADA', modelo: 'WORKING EST.', anoInicio: '2004', anoFim: '', motor: '1.7 8V TURBO', complemento: 'Diesel Importado' },
        { nome: 'TEMPRA', modelo: '', anoInicio: '1990', anoFim: '1996', motor: '1.8i.e, 2.0i.e.', complemento: 'Importado' },
        { nome: 'TEMPRA', modelo: '16V', anoInicio: '1999', anoFim: '1999', motor: '2.0 MPI 16V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: '8V', anoInicio: '1999', anoFim: '1999', motor: '2.0 SPI 8V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'BÁSICO', anoInicio: '1995', anoFim: '1996', motor: '2.0 SPI 8V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'CITY', anoInicio: '1999', anoFim: '1999', motor: '2.0 SPI 8V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'HLX 16V', anoInicio: '1997', anoFim: '1998', motor: '2.0 MPI 16V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'OURO 16V', anoInicio: '1993', anoFim: '1996', motor: '2.0 MPI 16V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'SW SLX', anoInicio: '1997', anoFim: '1997', motor: '2.0 MPI 8V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'SX 16V', anoInicio: '1997', anoFim: '1998', motor: '2.0 MPI 16V', complemento: 'BR' },
        { nome: 'TEMPRA', modelo: 'SX 8V', anoInicio: '1997', anoFim: '1998', motor: '2.0 SPI 8V', complemento: 'BR' },
        { nome: 'TIPO', modelo: '', anoInicio: '1989', anoFim: '1995', motor: '1.8i.e, 2.0i.e.', complemento: 'Importado' },
        { nome: 'TIPO', modelo: '', anoInicio: '1994', anoFim: '1995', motor: '2.0i.e. MPI', complemento: 'Importado' },
        { nome: 'TIPO', modelo: '16V', anoInicio: '1994', anoFim: '1995', motor: '2.0 MPI 16V', complemento: 'BR' },
        { nome: 'TIPO', modelo: 'SLX', anoInicio: '1994', anoFim: '1995', motor: '2.0 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: '', anoInicio: '1989', anoFim: '1994', motor: '1.0i.e', complemento: 'Importado' },
        { nome: 'UNO', modelo: 'CS', anoInicio: '1992', anoFim: '1996', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'FURGONETA', anoInicio: '1997', anoFim: '2004', motor: '1.5 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'FURGONETA', anoInicio: '1994', anoFim: '1996', motor: '1.5 SPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE', anoInicio: '2002', anoFim: '2004', motor: '1.0 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE CITY', anoInicio: '1999', anoFim: '2000', motor: '1.0 SPI 8V, 1.0 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE EP', anoInicio: '1996', anoFim: '1996', motor: '1.0 SPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE EX', anoInicio: '1998', anoFim: '2000', motor: '1.0 SPI 8V, 1.0 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE IE', anoInicio: '1996', anoFim: '1996', motor: '1.0 SPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE SMART', anoInicio: '2000', anoFim: '2001', motor: '1.0 SPI 8V, 1.0 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE SMART CITY', anoInicio: '2000', anoFim: '2001', motor: '1.0 SPI 8V, 1.0 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE SX', anoInicio: '1997', anoFim: '1998', motor: '1.0 SPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MILLE SX YOUNG', anoInicio: '1998', anoFim: '1999', motor: '1.0 SPI 8V, 1.0 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'MONDO', anoInicio: '1996', anoFim: '', motor: '1.2i.e', complemento: 'Importado' },
        { nome: 'UNO', modelo: 'S', anoInicio: '2001', anoFim: '2003', motor: '1.3 MPI 8V', complemento: 'BR' },
        { nome: 'UNO', modelo: 'S', anoInicio: '1992', anoFim: '1994', motor: '1.5 SPI 8V', complemento: 'BR' }
      ]
    },
    {
      montadora: "Renault",
      carros: [
        { nome: 'CLIO', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.6', complemento: 'Importado' },
        { nome: 'R19', modelo: '', anoInicio: '1992', anoFim: '', motor: '1.8', complemento: 'Importado' }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        { nome: 'GOL', modelo: '', anoInicio: '1996', anoFim: '2002', motor: '1.6, 1.8, 2.0 MI', complemento: 'BR' },
        { nome: 'GOL', modelo: '(GIII)', anoInicio: '2002', anoFim: '2005', motor: '1.6, 1.8, 2.0L', complemento: 'BR' },
        { nome: 'GOL', modelo: '(GIII)', anoInicio: '2002', anoFim: '2005', motor: '1.8 Flex, 1.6 Flex', complemento: 'BR' },
        { nome: 'GOL', modelo: '(GIV)', anoInicio: '2005', anoFim: '', motor: '1.6L MPI Flex, 1.8 Flex', complemento: 'BR' },
        { nome: 'GOL', modelo: '(GIV)', anoInicio: '2005', anoFim: '', motor: '1.6, 1.8, 1.8L', complemento: 'BR' },
        { nome: 'GOL', modelo: 'SPECIAL (GII)', anoInicio: '1902', anoFim: '1902', motor: '1.6L AP', complemento: 'BR' }, // Nota: O PDF diz ano '102', interpretado como literal
        { nome: 'LOGUS', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.6, 1.8 MI', complemento: 'BR' },
        { nome: 'PARATI', modelo: '', anoInicio: '1996', anoFim: '2002', motor: '1.6AP 8V, 1.8AP BV', complemento: 'EFI BR' },
        { nome: 'PARATI', modelo: '', anoInicio: '1996', anoFim: '2002', motor: '2.0AP BV', complemento: 'EFI BR' },
        { nome: 'PARATI', modelo: '(GIII)', anoInicio: '2002', anoFim: '2004', motor: '1.6L MPI Flex, 1.8 Flex', complemento: 'BR' },
        { nome: 'PARATI', modelo: '(GIII)', anoInicio: '2002', anoFim: '2004', motor: '1.6, 1.8, 1.8L, 2.0', complemento: 'BR' },
        { nome: 'PARATI', modelo: '(GIV)', anoInicio: '2005', anoFim: '', motor: '1.6L MPI Flex, 1.8 Flex', complemento: 'BR' },
        { nome: 'PARATI', modelo: '(GIV)', anoInicio: '2005', anoFim: '', motor: '1.6', complemento: 'BR' },
        { nome: 'POINTER', modelo: '', anoInicio: '1996', anoFim: '', motor: '1.6, 1.8 MI', complemento: 'BR' },
        { nome: 'POLO', modelo: 'CLASSIC', anoInicio: '2000', anoFim: '2003', motor: '1.8L EFI', complemento: 'BR' },
        { nome: 'POLO', modelo: 'CLASSIC', anoInicio: '1996', anoFim: '2000', motor: '1.6, 1.8-EFI', complemento: 'BR' },
        { nome: 'POLO', modelo: 'CLASSIC', anoInicio: '1996', anoFim: '', motor: '1.8', complemento: 'Importado' },
        { nome: 'QUANTUM', modelo: '', anoInicio: '1998', anoFim: '', motor: '1.8, 2.0 MI', complemento: 'BR' },
        { nome: 'SANTANA', modelo: '', anoInicio: '1998', anoFim: '', motor: '1.8, 2.0 MI', complemento: 'BR' },
        { nome: 'SAVEIRO', modelo: '', anoInicio: '1996', anoFim: '2002', motor: '1.6, 1.8, 2.0 MI', complemento: 'BR' },
        { nome: 'SAVEIRO', modelo: '(GIII)', anoInicio: '2002', anoFim: '2005', motor: '1.6L MPI Flex, 1.8L Flex', complemento: 'BR' },
        { nome: 'SAVEIRO', modelo: '(GIII)', anoInicio: '2002', anoFim: '2005', motor: '1.6, 1.8, 1.8L, 2.0', complemento: 'BR' },
        { nome: 'SAVEIRO', modelo: '(GIV)', anoInicio: '2005', anoFim: '', motor: '1.6L MPI Flex, 1.8 Flex', complemento: 'BR' },
        { nome: 'SAVEIRO', modelo: '(GIV)', anoInicio: '2005', anoFim: '', motor: '1.8L', complemento: 'BR' },
        { nome: 'VAN', modelo: '', anoInicio: '1998', anoFim: '2003', motor: '1.6L EFI', complemento: 'BR' }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'ORIGINAL',
      codigos: [{ valor: '4850371', obs: '' }]
    },
    {
      marca: 'Iguaçu',
      codigos: [{ valor: '201.0802', obs: '' }]
    },
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44034',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 trava, 1 oring',
  imagens: ['valclei-44034.jpeg'],
  propriedades: {
    quantTerminais: 4
  },
  aplicacao: [
    {
      montadora: "Volkswagen", // "Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo", "Seat", "Troller", "Lada"
      carros: [
        {
          nome: 'GOL',
          modelo: '(GIII)',
          anoInicio: '2002',
          anoFim: '2005',
          motor: '1.0 MI AT Turbo 16V',
          complemento: 'BR'
        },
        {
          nome: 'GOL',
          modelo: 'SPECIAL (GII)',
          anoInicio: '',
          anoFim: '2002',
          motor: '1.0 MI AT 8/16V',
          complemento: 'BR'
        },
        {
          nome: 'GOLF',
          modelo: '',
          anoInicio: '1992',
          anoFim: '',
          motor: '1.8',
          complemento: 'BR'
        },
        {
          nome: 'PARATI',
          modelo: '',
          anoInicio: '2000',
          anoFim: '2002',
          motor: '1.0 MI AT 16V Turbo',
          complemento: 'EFI / BR'
        },
        {
          nome: 'PARATI',
          modelo: '',
          anoInicio: '1997',
          anoFim: '2001',
          motor: '1.0 MI AT 8/16V',
          complemento: 'EFI / BR'
        },
        {
          nome: 'PARATI',
          modelo: '(GIII)',
          anoInicio: '2002',
          anoFim: '2004',
          motor: '1.0L MI AT 16V Turbo',
          complemento: 'BR'
        },
        {
          nome: 'PASSAT',
          modelo: '',
          anoInicio: '1992',
          anoFim: '',
          motor: '1.8, 2.0, 2.8 VR6',
          complemento: 'IMPORTADO'
        },
        {
          nome: 'SAVEIRO',
          modelo: '',
          anoInicio: '1998',
          anoFim: '',
          motor: '1.0 MI AT 8/16V',
          complemento: 'BR'
        },
      ]
    },
    {
      montadora: "Seat", // "Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo", "Seat", "Troller", "Lada"
      carros: [
        {
          nome: 'CORDOBA',
          modelo: '',
          anoInicio: '1993',
          anoFim: '',
          motor: '1.9',
          complemento: 'IMPORTADO'
        },
        {
          nome: 'INCA',
          modelo: '',
          anoInicio: '1996',
          anoFim: '',
          motor: '1.4, 1.6',
          complemento: 'IMPORTADO'
        },
        {
          nome: 'TOLEDO',
          modelo: '',
          anoInicio: '1994',
          anoFim: '',
          motor: '1.8, 1.9, 2.0',
          complemento: 'IMPORTADO'
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'VOLKSWAGEN',
      codigos: [
        { valor: '030919501', obs: '' },
        { valor: '030919501A', obs: '' },
        { valor: '6U0919501B', obs: '' },
      ]
    },
    {
      marca: 'Iguaçu',
      codigos: [
        { valor: '201.0810', obs: '' },
      ]
    },
  ]
},
{
  marca: "Valclei",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '44218',
  descricao: 'sensor temperatura',
  obs: 'Sensor cor preta',
  componentes: '1 sensor, 1 arruela',
  imagens: ['valclei-44218.jpeg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: 'DUCATO',
          modelo: '',
          anoInicio: '2026',
          anoFim: '',
          motor: '2.2',
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: 'TORO',
          modelo: '',
          anoInicio: '2016',
          anoFim: '2016',
          motor: '2.0 16V 170CV',
          complemento: ''
        },
      ]
    },
    {
      montadora: "Jeep",
      carros: [
        {
          nome: 'COMPASS',
          modelo: '',
          anoInicio: '2016',
          anoFim: '2016',
          motor: '2.0 16V',
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: 'RAMPAGE',
          modelo: '',
          anoInicio: '2023',
          anoFim: '',
          motor: '2.0 16V DOHC MULTIJET II',
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: 'RENEGADE',
          modelo: '',
          anoInicio: '2015',
          anoFim: '',
          motor: '2.0 16V',
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'original',
      codigos: [{ valor: '55203964', obs: '' }]
    }
  ]
},
{
  marca: "Marilia",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: 'IM44067',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring',
  imagens: ['marilia-IM44067.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: 'COURIER', modelo: '', anoInicio: '1999 ', anoFim: '2013', motor: '1.6 ',
          complemento: ''
        },
        {
          nome: 'ECOSPORT ', modelo: '', anoInicio: '2003 ', anoFim: '2006 ', motor: '1.0',
          complemento: 'SUPERCHARGER '
        },
        {
          nome: 'ECOSPORT ', modelo: '', anoInicio: '2005', anoFim: '2012', motor: '1.6 8v FLEX',
          complemento: ''
        },
        {
          nome: 'ESCORT ', modelo: '', anoInicio: '2000 ', anoFim: '2003', motor: '1.6',
          complemento: ''
        },
        {
          nome: 'FIESTA ', modelo: '', anoInicio: '2000 ', anoFim: '2014', motor: '1.0/1.6 8V',
          complemento: ''
        },
        {
          nome: 'FOCUS ', modelo: '', anoInicio: '2003 ', anoFim: '2011', motor: '1.6 8V',
          complemento: ''
        },
        {
          nome: 'FOCUS', modelo: '', anoInicio: '2000', anoFim: '2004', motor: '1.8 16V',
          complemento: ''
        },
        {
          nome: 'KA ', modelo: '', anoInicio: '2000 ', anoFim: '2014', motor: '1.0',
          complemento: ''
        },
        {
          nome: 'KA', modelo: '', anoInicio: '2001', anoFim: '2013', motor: '1.6',
          complemento: ''
        },

      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'original ford',
      codigos: [{ valor: 'XS6E12A648BA', obs: '' }]
    }
  ]
},
{
  marca: "Wahler",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '6010.75',
  descricao: 'interruptor radiador 75°C',
  obs: '',
  componentes: '1 interruptor, 1 arruela de papel',
  imagens: ['wahler-6010-75.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "CHEVETTE", modelo: "", anoInicio: "1982", anoFim: "1994", motor: "16A 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CHEVETTE", modelo: "", anoInicio: "1974", anoFim: "1987", motor: "14L 1.4 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "18A 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1984", anoFim: "1991", motor: "18L 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1986", anoFim: "1991", motor: "B20NE 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1986", anoFim: "1991", motor: "B20NE 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1981", anoFim: "1992", motor: "151 2.5 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1984", anoFim: "1992", motor: "250 4.1 L 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1981", anoFim: "1992", motor: "151 2.5 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1981", anoFim: "1992", motor: "250 4.1 L 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "147", modelo: "", anoInicio: "1978", anoFim: "1984", motor: "FIASA 1.3 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "147", modelo: "", anoInicio: "1978", anoFim: "1984", motor: "FIASA 1.3 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
      ]
    },
    {
      montadora: "Ford",
      carros: [
        {
          nome: "BELINA", modelo: "DEL REY", anoInicio: "1990", anoFim: "1991", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BELINA", modelo: "DEL REY", anoInicio: "1990", anoFim: "1991", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "BELINA", modelo: "DEL REY", anoInicio: "1983", anoFim: "1986", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BELINA", modelo: " II", anoInicio: "1979", anoFim: "1986", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORCEL", modelo: " II", anoInicio: "1979", anoFim: "1983", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BELINA", modelo: "DEL REY", anoInicio: "1986", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BELINA", modelo: "DEL REY", anoInicio: "1986", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1990", anoFim: "1994", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1989", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },
    {
      montadora: "Lada",
      carros: [
        {
          nome: "LAIKA", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "1.6 L 8V 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LAIKA", modelo: "", anoInicio: "1991", anoFim: "1995", motor: "1.6 L 8V 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "NIVA", modelo: "", anoInicio: "1991", anoFim: "1997", motor: "1.5 L 8V 1.5 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "NIVA", modelo: "", anoInicio: "2000", anoFim: "2000", motor: "1.7 8V 1.7 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "NIVA", modelo: "", anoInicio: "1998", anoFim: "1998", motor: "1.6 L 8V 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAMARA", modelo: "", anoInicio: "1991", anoFim: "1995", motor: "1.5 L 8V 1.5 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "APOLLO", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "APOLLO", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1989", anoFim: "1993", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1989", anoFim: "1993", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "CHT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1982", anoFim: "1989", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1982", anoFim: "1989", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1984", anoFim: "1989", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1979", anoFim: "1982", motor: "AP 1500 1.5 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1982", anoFim: "1989", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1985", anoFim: "1993", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1985", anoFim: "1993", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1984", anoFim: "1993", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1984", anoFim: "1993", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1986", anoFim: "1989", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1981", anoFim: "1982", motor: "AP 1500 1.5 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1986", anoFim: "1989", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1981", anoFim: "1982", motor: "AP 1500 1.5 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1986", anoFim: "1993", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1986", anoFim: "1993", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: "iguaçu",
      codigos: [
        { valor: "301.0405-75", obs: "" },
      ]
    },
    {
      marca: "ORIGINAL OEM",
      codigos: [
        { valor: "75091200", obs: "" },
        { valor: "94621028", obs: "" }
      ]
    },
    {
      marca: "VALCLEI",
      codigos: [
        { valor: "170575", obs: "" }
      ]
    }
  ]
},
{
  marca: "Wahler",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '6026.92',
  descricao: 'interruptor radiador 92°C',
  obs: '',
  componentes: '1 interruptor, 1 arruela de papel',
  imagens: ['wahler-6026-92.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "CHT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "AP 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1990", anoFim: "1994", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1989", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "CHT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2002", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1988", anoFim: "1994", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "1999", motor: "EA111 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "EA111 AT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "CHT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "EA111 AT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "EA111 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2002", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: "ORIGINAL OEM",
      codigos: [
        { valor: "547959481", obs: "" }
      ]
    }
  ]
},
{
  marca: "Wahler",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '6025.95',
  descricao: 'interruptor radiador 95°C',
  obs: '',
  componentes: '1 interruptor, 1 arruela de papel',
  imagens: ['wahler-6025-95.png'],
  propriedades: {
    quantTerminais: 3
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "AP 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1990", anoFim: "1994", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1983", anoFim: "1989", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1989", anoFim: "1993", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "CHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "1999", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2002", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "1999", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1988", anoFim: "1994", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "1999", motor: "EA111 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "EA111 AT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "CHT 1.0 L 8V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "EA111 AT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2004", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "EA111 AT 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2004", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "EA111 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "EA111 AT 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2002", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "EA111 AT 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "CHT 1.6 L 8V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "EA111 AT 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "1999", motor: "EA111 AT 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "EA111 AT 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "EA111 AT 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "EA111 AT 1.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2005", motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2005", motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: "IGUAÇU",
      codigos: [
        { valor: "301.0457-95/102", obs: "" }
      ]
    },
    {
      marca: "MTE-THOMSON",
      codigos: [
        { valor: "757.95", obs: "" }
      ]
    },
    {
      marca: "ORIGINAL OEM",
      codigos: [
        { valor: "547959481A", obs: "" }
      ]
    },
    {
      marca: "VALCLEI",
      codigos: [
        { valor: "1757.95-102", obs: "" }
      ]
    }
  ]
},
{
  marca: "Wahler",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '411376',
  descricao: 'sensor temperatura (painel)',
  obs: '',
  componentes: '1 sensor',
  imagens: ['wahler-411376.jpg'],
  propriedades: {
    quantTerminais: 1
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1989",
          anoFim: "1992",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1989",
          anoFim: "1992",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1995",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1989",
          anoFim: "1992",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1989",
          anoFim: "1992",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1994",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1994",
          motor: "AP 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1994",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA",
          modelo: "",
          anoInicio: "1989",
          anoFim: "1993",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "CHT 1.0 L 8V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2002",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2003",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1997",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1997",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2002",
          motor: "AP 2000 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1988",
          anoFim: "1994",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1999",
          motor: "AP 2000 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1999",
          motor: "AP 2000 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1999",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "EA111 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2002",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "EA111 AT 1.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1993",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1982",
          anoFim: "1989",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1995",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2012",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2005",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2006",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1988",
          anoFim: "1995",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1989",
          anoFim: "1995",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "AP 2000 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2000",
          motor: "AP 2000 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2012",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2006",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2006",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2012",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1982",
          anoFim: "1989",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1995",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2012",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2011",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2005",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2012",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2006",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2005",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1994",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1994",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1994",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "CLASSIC",
          anoInicio: "1998",
          anoFim: "2003",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "CLASSIC",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2000",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1988",
          anoFim: "1993",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2006",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2006",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2006",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1984",
          anoFim: "1993",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1984",
          anoFim: "1994",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1984",
          anoFim: "1994",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1990",
          anoFim: "1993",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1996",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2006",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2006",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2006",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2000",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "AP 2000 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1986",
          anoFim: "1989",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1996",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2000",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1997",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1989",
          anoFim: "1996",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1996",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1985",
          anoFim: "1989",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2003",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2005",
          motor: "AP 1800 1.8 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VAN",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2003",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: "IGUAÇU",
      codigos: [
        { valor: "203.2002", obs: "" }
      ]
    },
    {
      marca: "MTE-THOMSON",
      codigos: [
        { valor: "3018", obs: "" }
      ]
    },
    {
      marca: "ORIGINAL OEM",
      codigos: [
        { valor: "0279195011", obs: "" }
      ]
    },
    {
      marca: "VALCLEI",
      codigos: [
        { valor: "33018", obs: "" }
      ]
    }
  ]
},
{
  marca: "Wahler",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '412308',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring, 1 trava',
  imagens: ['wahler-412308.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [

    {
      montadora: "Audi",
      carros: [
        {
          nome: "A3",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2012",
          motor: "MW6 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A3",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2014",
          motor: "D2L 2.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A3",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2013",
          motor: "EA888 2.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A3",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2007",
          motor: "EA113 2.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A3",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2007",
          motor: "EA113 2.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A3",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2013",
          motor: "EA888 2.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A4",
          modelo: "",
          anoInicio: "2004",
          anoFim: "2008",
          motor: "EA113 1.8 L 20V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A4",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2013",
          motor: "EA888 2.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A4",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "EA113 2.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A4",
          modelo: "AVANT",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "EA113 2.0 L 16V ",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A4",
          modelo: "AVANT",
          anoInicio: "2009",
          anoFim: "2016",
          motor: "EA888 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A4",
          modelo: "AVANT",
          anoInicio: "1998",
          anoFim: "2001",
          motor: "EA113 1.8 L 20V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A4",
          modelo: "AVANT",
          anoInicio: "2002",
          anoFim: "2004",
          motor: "EA113 1.8 L 20V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A6",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2006",
          motor: "AUDI V6 3.0 L 30V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A6",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2011",
          motor: "D12 3.0 L 30V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A6",
          modelo: "",
          anoInicio: "2009",
          anoFim: "2011",
          motor: "D6W 3.2 L 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A6",
          modelo: "",
          anoInicio: "2004",
          anoFim: "2008",
          motor: "AUDI V6 3.2 L 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A6",
          modelo: "AVANT",
          anoInicio: "2001",
          anoFim: "2005",
          motor: "AUDI V6 2.4 L 30V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A6 ",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2013",
          motor: "D12 3.0 L 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A8",
          modelo: "",
          anoInicio: "2009",
          anoFim: "2011",
          motor: "AUDI V8 4.2 L 32V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A8",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "AUDI V8 4.2 L 40V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A8",
          modelo: "",
          anoInicio: "2004",
          anoFim: "2010",
          motor: "AUDI W12 6.0 L 48V SOHC V12",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A8",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2012",
          motor: "CDRA 4.2 L 32V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ALLROAD",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2005",
          motor: "AUDI V6 2.7 L 30V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "Q7",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2018",
          motor: "D 08 3.0 L 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "Q7",
          modelo: "",
          anoInicio: "2010",
          anoFim: "2023",
          motor: "EA837 3.0 L 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "Q7",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2010",
          motor: "D3B 3.6 L 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "Q7",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2010",
          motor: "T8T 4.2 L 32V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TT",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2010",
          motor: "D2L 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TT",
          modelo: "",
          anoInicio: "2010",
          anoFim: "2014",
          motor: "D2D 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TT",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2014",
          motor: "D14 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "BORA",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2009",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2009",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2009",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2007",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2007",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2007",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2007",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2007",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "AP 1600 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2007",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2008",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2014",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2009",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2007",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2008",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2013",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2007",
          motor: "EA111 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2001",
          motor: "EA113 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2015",
          motor: "EA888 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT",
          modelo: "",
          anoInicio: "2015",
          anoFim: "2026",
          motor: "EA888 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2010",
          motor: "BVY 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2005",
          motor: "BLY 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2010",
          motor: "BVY 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT",
          modelo: "",
          anoInicio: "2015",
          anoFim: "2026",
          motor: "EA888 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT",
          modelo: "",
          anoInicio: "2010",
          anoFim: "2015",
          motor: "CCZB 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT ",
          modelo: "VARIANT",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "BWA 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT ",
          modelo: "VARIANT",
          anoInicio: "2007",
          anoFim: "2010",
          motor: "D2L 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT ",
          modelo: "VARIANT",
          anoInicio: "2010",
          anoFim: "2013",
          motor: "EA888 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT ",
          modelo: "VARIANT",
          anoInicio: "2006",
          anoFim: "2008",
          motor: "BWA 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT ",
          modelo: "VARIANT",
          anoInicio: "2014",
          anoFim: "2015",
          motor: "D2D 2.0 L 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "SEDAN",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "SEDAN",
          anoInicio: "2006",
          anoFim: "2008",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "SEDAN",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "SEDAN",
          anoInicio: "2006",
          anoFim: "2008",
          motor: "EA113 2.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SPACEFOX",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2018",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SPACEFOX",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2018",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SPACEFOX",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2010",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SPACEFOX",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2010",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "TOUAREG",
          modelo: "",
          anoInicio: "2004",
          anoFim: "2006",
          motor: "BMV 3.2 L 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TOUAREG",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2006",
          motor: "BHX 4.2 L 40V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TOUAREG",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2010",
          motor: "BAR 4.2 L 32V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TOUAREG",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2014",
          motor: "DH3 4.2 L 32V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2012",
          motor: "EA111 VHT 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VOYAGE",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2012",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VOYAGE",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2012",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VOYAGE",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2012",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VOYAGE",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2014",
          motor: "EA111 TEC 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VOYAGE",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2015",
          motor: "EA111 TEC 1.0 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VOYAGE",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2012",
          motor: "EA111 VHT 1.6 L 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    }

  ],
  referenciaCruzada: [
    {
      marca: "IGUAÇU",
      codigos: [
        { valor: "201.0850", obs: "" }
      ]
    },
    {
      marca: "MTE-THOMSON",
      codigos: [
        { valor: "4092", obs: "" }
      ]
    },
    {
      marca: "ORIGINAL OEM",
      codigos: [
        { valor: "06A919501", obs: "" },
        { valor: "06A919501A", obs: "" }
      ]
    },
    {
      marca: "VALCLEI",
      codigos: [
        { valor: "44092", obs: "" }
      ]
    }
  ]
},
{
  marca: "AJE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '087206',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 carcaça, 1 arruela, 1 borracha de vedação',
  imagens: ['aje-087206.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT", // "Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo", "Seat", "Troller"
      carros: [
        {
          nome: 'DOBLO', modelo: '', anoInicio: '2008', anoFim: '2016', motor: '1.4 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'FIORINO', modelo: '', anoInicio: '2003', anoFim: '2013', motor: '1.3 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'IDEA', modelo: '', anoInicio: '2004', anoFim: '2016', motor: '1.4 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'PALIO', modelo: '', anoInicio: '2002', anoFim: '2017', motor: '1.0 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'PALIO', modelo: '', anoInicio: '2003', anoFim: '2008', motor: '1.3 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'PALIO', modelo: '', anoInicio: '2005', anoFim: '2010', motor: '1.4 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'PALIO', modelo: 'WEEKEND', anoInicio: '2002', anoFim: '2008', motor: '1.3 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'PALIO', modelo: 'WEEKEND', anoInicio: '2004', anoFim: '2020', motor: '1.4 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'PUNTO', modelo: '', anoInicio: '2006', anoFim: '2017', motor: '1.4 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'SIENA', modelo: '', anoInicio: '2002', anoFim: '2016', motor: '1.0 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'SIENA', modelo: '', anoInicio: '2003', anoFim: '2005', motor: '1.3 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'SIENA', modelo: '', anoInicio: '2004', anoFim: '2016', motor: '1.4 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'UNO', modelo: '', anoInicio: '2013', anoFim: '2016', motor: '1.4 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'UNO', modelo: '', anoInicio: '2001', anoFim: '2013', motor: '1.0 FIRE',
          complemento: '8 V / FLEX'
        },
        {
          nome: 'UNO', modelo: '', anoInicio: '2002', anoFim: '2013', motor: '1.3 FIRE',
          complemento: '8 V / FLEX'
        },
      ]
    }
  ],
  referenciaCruzada: [
    {
      marca: 'DELPHI',
      codigos: [{ valor: 'TS1023512B1', obs: '' }]
    },
    {
      marca: 'FIAT',
      codigos: [
        { valor: '46824133', obs: '' },
        { valor: '55214054', obs: '' },
        { valor: '55214055', obs: '' },
        { valor: '71716685', obs: '' },
        { valor: '71719393', obs: '' },
      ]
    },
    {
      marca: 'IGUAÇU',
      codigos: [{ valor: '2010844', obs: '' }]
    },
    {
      marca: 'MTE Thomson',
      codigos: [{ valor: '4099', obs: '' }]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '301.0405-86',
  descricao: 'interruptor radiador 86°C',
  obs: '',
  componentes: '1 interruptor, 1 arruela de papel',
  imagens: ['iguacu-0405.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        { nome: "147", modelo: "", anoInicio: "1974", anoFim: "1984", motor: "1.3 8V", complemento: "" },
      ]
    },
    {
      montadora: "Ford",
      carros: [
        { nome: "BELINA", modelo: "", anoInicio: "2000", anoFim: "2000", motor: "1.4", complemento: "" },
        {
          nome: "CORCEL", modelo: "", anoInicio: "2000", anoFim: "2000", motor: "1.4",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "BELINA", modelo: "", anoInicio: "2000", anoFim: "2000", motor: "1.6", complemento: "" },
        {
          nome: "CORCEL", modelo: "", anoInicio: "2000", anoFim: "2000", motor: "1.6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1986", anoFim: "1986", motor: "1.6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1986", anoFim: "1986", motor: "1.6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "CHEVETTE", modelo: "", anoInicio: "1981", anoFim: "1982", motor: "1.4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CHEVETTE", modelo: "", anoInicio: "1974", anoFim: "1982", motor: "1.4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CHEVETTE", modelo: "", anoInicio: "1982", anoFim: "1993", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CHEVETTE", modelo: "", anoInicio: "1982", anoFim: "1993", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CHEVY 500", modelo: "", anoInicio: "1984", anoFim: "1995", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CHEVY 500", modelo: "", anoInicio: "1984", anoFim: "1995", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MARAJO", modelo: "", anoInicio: "1982", anoFim: "1989", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MARAJO", modelo: "", anoInicio: "1981", anoFim: "1989", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1983", anoFim: "1986", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1982", anoFim: "1983", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1982", anoFim: "1986", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1987", anoFim: "1991", motor: "1.8 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1983", anoFim: "1986", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1987", anoFim: "1991", motor: "1.8 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1983", anoFim: "1986", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "2.0 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "2.0 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "2.0 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "2.0 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1987", anoFim: "1991", motor: "2.0 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1990", anoFim: "1993", motor: "2.0 8V",
          complemento: "MPFI S/ IGN. MAPEADA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1987", anoFim: "1991", motor: "2.0 8V",
          complemento: "CARBURADO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CARAVAN", modelo: "", anoInicio: "1980", anoFim: "1990", motor: "2.5 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CARAVAN", modelo: "", anoInicio: "1975", anoFim: "1992", motor: "2.5 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1980", anoFim: "1990", motor: "2.5 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1969", anoFim: "1992", motor: "2.5 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CARAVAN", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "4.1 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CARAVAN", modelo: "", anoInicio: "1985", anoFim: "1990", motor: "4.1 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CARAVAN", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "4.1 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CARAVAN", modelo: "", anoInicio: "1976", anoFim: "1990", motor: "4.1 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "4.1 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1985", anoFim: "1990", motor: "4.1 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "4.1 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OPALA", modelo: "", anoInicio: "1976", anoFim: "1990", motor: "4.1 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.0 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1982", anoFim: "1982", motor: "1.5",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1974", anoFim: "1982", motor: "1.5",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1981", anoFim: "1985", motor: "1.5 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1985", anoFim: "1988", motor: "1.6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1982", anoFim: "1983", motor: "1.6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1976", anoFim: "1985", motor: "1.6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1983", anoFim: "1985", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1982", anoFim: "1985", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1982", anoFim: "1985", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1982", anoFim: "1983", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KOMBI", modelo: "", anoInicio: "1981", anoFim: "1986", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1983", anoFim: "1986", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1982", anoFim: "1983", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1981", anoFim: "1985", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1989", anoFim: "1994", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1989", anoFim: "1994", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1989", anoFim: "1993", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1989", anoFim: "1993", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1989", anoFim: "1993", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1986", anoFim: "1989", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1985", anoFim: "1994", motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1983", anoFim: "1985", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1987", anoFim: "1988", motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1986", anoFim: "1986", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1985", anoFim: "1995", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1985", anoFim: "1987", motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1989", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1985", anoFim: "1992", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1990", anoFim: "1995", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1985", anoFim: "1991", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1985", anoFim: "1987", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "1984", anoFim: "1988", motor: "1.8",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1984", anoFim: "1985", motor: "1.8 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1983", anoFim: "1986", motor: "1.8 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1982", anoFim: "1983", motor: "1.8 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "APOLLO", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1991", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1986", anoFim: "1989", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1984", anoFim: "1985", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1989", anoFim: "1992", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1987", anoFim: "1988", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1986", anoFim: "1986", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1991", anoFim: "1992", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1985", anoFim: "1991", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V AP",
          complemento: "SEMA/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1984", anoFim: "1989", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1991", anoFim: "1992", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1991", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1990", anoFim: "1991", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1989", anoFim: "1991", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1985", anoFim: "1987", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1988", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1991", anoFim: "1992", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1985", anoFim: "1991", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1990", anoFim: "1991", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1984", anoFim: "1990", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },

  ],
  referenciaCruzada: [
    {
      marca: "FIAT",
      codigos: [
        { valor: "4318331", obs: "" },
      ]
    },
    {
      marca: "FORD",
      codigos: [
        { valor: "81NU14806A", obs: "" },
        { valor: "ZBA959481", obs: "" },
      ]
    },
    {
      marca: "Chevrolet",
      codigos: [
        { valor: "94621028", obs: "" },
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        { valor: "ZBA959481", obs: "" },
        { valor: "", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '301.0405-75',
  descricao: 'interruptor radiador 75°C',
  obs: '',
  componentes: '1 interruptor, 1 arruela de papel',
  imagens: ['iguacu-0405.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "PARATI", modelo: "", anoInicio: "1984", anoFim: "1989", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1984", anoFim: "1997", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1984", anoFim: "1989", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "Wahler",
      codigos: [
        { valor: "6010.75", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '301.0455-92',
  descricao: 'interruptor radiador 92°C',
  obs: '',
  componentes: '1 interruptor',
  imagens: ['iguacu-0455-92.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        { nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.6", complemento: "SEM A/C" },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "ESCORT", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8", complemento: "SEM A/C" },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1990", anoFim: "1992", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "INJ EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "1.0 16V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2002", motor: "1.0 16V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "1.0 16V AT",
          complemento: "COM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "1.0 16V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "1.0 16V AT",
          complemento: "INJ. DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "1.0 16V AT",
          complemento: "INJ. DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.0 16V TURBO AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2004", motor: "1.0 16V TURBO AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.0 16V TURBO AT",
          complemento: "COM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.0 16V TURBO AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.0 16V TURBO AT",
          complemento: "INJ. DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "2006", motor: "1.0 8V",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.0 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.0 8V AT",
          complemento: "COM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.0 8V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.0 8V AT",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "2005", motor: "1.0 8V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.0 8V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.0 8V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.0 8V AT",
          complemento: "COM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.0 8V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "", motor: "1.0 8V AT",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "1.6 8V",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "1.6 8V AP",
          complemento: "SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INYE. EFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INYE. CFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2002", anoFim: "2012", motor: "1.6 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2005", anoFim: "2008", motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INYE. EFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INYE. CFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "TLDZ / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2002", anoFim: "2012", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "2000", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2005", anoFim: "2008", motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "2002", motor: "2.0 16V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 16V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "2.0 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "2.0 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "1998", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "2000", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2001", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FORD",
      codigos: [
        { valor: "547959481", obs: "" },
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        { valor: "", obs: "" },
        { valor: "547959481", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0813',
  descricao: 'sensor temperatura',
  obs: 'Sensor cor azul',
  componentes: '1 sensor, 1 arruela',
  imagens: ['iguacu-813.jpg'],
  propriedades: {
    quantTerminais: 3
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2002", motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2002", motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2001", motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2001", motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1999", anoFim: "2000", motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1999", anoFim: "2000", motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "2004", anoFim: "2004", motor: "1.5 8V",
          complemento: "INJ. MPI/ COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "2004", anoFim: "2004", motor: "1.5 8V",
          complemento: "INJ. MPI/ SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "2003", anoFim: "2004", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "2003", anoFim: "2004", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1999", anoFim: "2000", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1999", anoFim: "2000", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "2003", anoFim: "2004", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "2003", anoFim: "2004", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1998", anoFim: "1999", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1998", anoFim: "1999", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "2003", anoFim: "2004", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "2003", anoFim: "2004", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "2000", anoFim: "2004", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "2000", anoFim: "2004", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "1999", anoFim: "2001", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "1999", anoFim: "2001", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "2002", anoFim: "2002", motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "2002", anoFim: "2002", motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "INJ. MPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ", modelo: "WEEKEND", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FIAT",
      codigos: [
        { valor: "46474600", obs: "" },
        { valor: "A390269346", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '203.2019',
  descricao: 'sensor temperatura (painel)',
  obs: '',
  componentes: '1 sensor',
  imagens: ['iguacu-2019.jpg'],
  propriedades: {
    quantTerminais: 1
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "UNO", modelo: "MILLE", anoInicio: "1991", anoFim: "1993", motor: "1.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "147", modelo: "", anoInicio: "1974", anoFim: "", motor: "1.3 8V", complemento: "" },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1991", motor: "1.3 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1991", motor: "1.3 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1991", motor: "1.3 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO", modelo: "", anoInicio: "1985", anoFim: "1989", motor: "1.3 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1988", anoFim: "1991", motor: "1.3 8V",
          complemento: "FURGONETA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1985", anoFim: "1991", motor: "1.3 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FIAT",
      codigos: [
        { valor: "", obs: "" },
        { valor: "7504272", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '203.2002',
  descricao: 'sensor temperatura (painel)',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['iguacu-2002.jpg'],
  propriedades: {
    quantTerminais: 1
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.6 8V CHT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.6 8V CHT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Seat",
      carros: [
        {
          nome: "CADDY", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CADDY", modelo: "", anoInicio: "2002", anoFim: "", motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "INCA", modelo: "", anoInicio: "1998", anoFim: "2003", motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Troller",
      carros: [
        {
          nome: "T4", modelo: "", anoInicio: "2002", anoFim: "", motor: "MWM 2.8",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.0 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1984", anoFim: "1989", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1984", anoFim: "1989", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "1998", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1984", anoFim: "1997", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1984", anoFim: "1989", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.6 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "1.6 8V AP",
          complemento: "CON A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "1.6 8V AP",
          complemento: "SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INYE. EFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INYE. CFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO", modelo: "CLASSIC", anoInicio: "1996", anoFim: "1998", motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO", modelo: "CLASSIC", anoInicio: "1996", anoFim: "2003", motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VAN", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VAN", modelo: "", anoInicio: "2002", anoFim: "2003", motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INYE. EFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INYE. CFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "TLDZ / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "TLDZ / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "TLDZ / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO", modelo: "CLASSIC", anoInicio: "1996", anoFim: "1998", motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO", modelo: "CLASSIC", anoInicio: "1996", anoFim: "2003", motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "2000", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "2000", anoFim: "2001", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "2002", motor: "2.0 16V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "2002", motor: "2.0 16V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 16V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 16V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "1998", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "1998", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "2000", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "2000", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2001", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2001", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1991", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "2000", anoFim: "2006", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1997", anoFim: "2000", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },

  ],
  referenciaCruzada: [
    {
      marca: "WAHELER",
      codigos: [
        { valor: "411376", obs: "" },
      ]
    },
    {
      marca: "FORD",
      codigos: [
        { valor: "0279195011", obs: "" },
      ]
    },
    {
      marca: "SEAT",
      codigos: [
        { valor: "0279195011", obs: "" },
      ]
    },
    {
      marca: "TROLLER",
      codigos: [
        { valor: "0279195011", obs: "" },
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        { valor: "0279195011", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0808',
  descricao: 'sensor temperatura',
  obs: 'Sensor cor preta',
  componentes: '1 sensor, 1 arruela',
  imagens: ['iguacu-0808.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo",
      carros: [
        {
          nome: "164", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "3.0 V6 24V",
          complemento: "INJ. MPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "UNO", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "3500", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "4.1 12V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GRAND BLAZER", modelo: "", anoInicio: "1997", anoFim: "1999", motor: "4.1 12V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GRAND BLAZER", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "4.1 12V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "4.1 12V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SILVERADO", modelo: "", anoInicio: "1997", anoFim: "1999", motor: "4.1 12V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SILVERADO", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "4.1 12V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "4.1 12V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Peugeot",
      carros: [
        { nome: "505", modelo: "", anoInicio: "1986", anoFim: "1993", motor: "2.8 V6", complemento: "" },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "ALFA ROMEO",
      codigos: [
        { valor: "0280130032", obs: "" },
      ]
    },
    {
      marca: "FIAT",
      codigos: [
        { valor: "0280130032", obs: "" },
      ]
    },
    {
      marca: "Chevrolet",
      codigos: [
        { valor: "0280130032", obs: "" },
      ]
    },
    {
      marca: "PEUGEOT",
      codigos: [
        { valor: "0280130032", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0868',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor',
  imagens: ['iguacu-0868.png'],
  propriedades: {
    quantTerminais: 3
  },
  aplicacao: [
    {
      montadora: "Hyundai",
      carros: [
        {
          nome: "HB20", modelo: "", anoInicio: "2013", anoFim: "", motor: "1.0 12V",
          complemento: "MOTOR SERIE KAPPA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "HB20 ", modelo: "S", anoInicio: "2013", anoFim: "", motor: "1.0 12V",
          complemento: "MOTOR SERIE KAPPA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "HB20 ", modelo: "X", anoInicio: "2013", anoFim: "", motor: "1.0 12V",
          complemento: "MOTOR SERIE KAPPA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CRETA", modelo: "", anoInicio: "2016", anoFim: "", motor: "1.6 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "HB20", modelo: "", anoInicio: "2013", anoFim: "", motor: "1.6 16V",
          complemento: "MOTOR SERIE GAMMA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "I30", modelo: "", anoInicio: "2013", anoFim: "", motor: "1.6 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "TUCSON", modelo: "", anoInicio: "2016", anoFim: "", motor: "1.6 16V",
          complemento: "NEW TUCSON TURBO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VELOSTER", modelo: "", anoInicio: "2012", anoFim: "", motor: "1.6 16V",
          complemento: "MOTOR SERIE GAMMA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELANTRA", modelo: "", anoInicio: "2011", anoFim: "", motor: "1.8 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "I30", modelo: "", anoInicio: "2006", anoFim: "2012", motor: "1.8 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CRETA", modelo: "", anoInicio: "2017", anoFim: "", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ELANTRA", modelo: "", anoInicio: "2008", anoFim: "", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "I30", modelo: "", anoInicio: "2008", anoFim: "2013", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IX35", modelo: "", anoInicio: "2012", anoFim: "", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "TUCSON", modelo: "", anoInicio: "2012", anoFim: "", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "TUCSON", modelo: "", anoInicio: "2006", anoFim: "2012", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TUCSON", modelo: "", anoInicio: "2004", anoFim: "", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTA FE", modelo: "", anoInicio: "2000", anoFim: "", motor: "2.7 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TUCSON", modelo: "", anoInicio: "2004", anoFim: "2010", motor: "2.7 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Kia",
      carros: [
        {
          nome: "PICANTO", modelo: "", anoInicio: "2011", anoFim: "", motor: "1.0 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CERATO", modelo: "", anoInicio: "2013", anoFim: "", motor: "1.6 16V",
          complemento: "MOTOR SERIE GAMMA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CERATO", modelo: "", anoInicio: "2006", anoFim: "2013", motor: "1.6 16V",
          complemento: "MOTOR SERIE GAMMA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SOUL", modelo: "", anoInicio: "2011", anoFim: "", motor: "1.6 16V",
          complemento: "MOTOR SERIE GAMMA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SOUL", modelo: "", anoInicio: "2009", anoFim: "2010", motor: "1.6 16V",
          complemento: "MOTOR SERIE GAMMA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SPORTAGE", modelo: "", anoInicio: "2004", anoFim: "2010", motor: "2.0",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SPORTAGE", modelo: "", anoInicio: "2004", anoFim: "2006", motor: "2.0",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SPORTAGE", modelo: "", anoInicio: "2011", anoFim: "", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BONGO", modelo: "", anoInicio: "2001", anoFim: "2006", motor: "2.5",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "BONGO", modelo: "", anoInicio: "2001", anoFim: "2006", motor: "2.7",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "BONGO", modelo: "", anoInicio: "2001", anoFim: "2004", motor: "2.7",
          complemento: "INJ. INDIRETA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "SPORTAGE", modelo: "", anoInicio: "2004", anoFim: "2011", motor: "2.7",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "OPIRUS", modelo: "", anoInicio: "2006", anoFim: "2009", motor: "3.8 V6", complemento: "MOTOR SERIE LAMBDA" },
        { nome: "SORENTO", modelo: "", anoInicio: "2006", anoFim: "2008", motor: "3.8 V6", complemento: "MOTOR SERIE LAMBDA" },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "HYUNDAI",
      codigos: [
        { valor: "3922038030", obs: "" },
        { valor: "3922038020", obs: "" },
        { valor: "", obs: "" },
      ]
    },
    {
      marca: "KIA",
      codigos: [
        { valor: "3922038020", obs: "" },
        { valor: "", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0810',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring, 1 trava de plástico',
  imagens: ['iguacu-0810.jpg'],
  propriedades: {
    quantTerminais: 4
  },
  aplicacao: [
    {
      montadora: "Audi",
      carros: [
        {
          nome: "A3", modelo: "", anoInicio: "2002", anoFim: "", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Seat",
      carros: [
        {
          nome: "CADDY", modelo: "", anoInicio: "2002", anoFim: "", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORDOBA", modelo: "", anoInicio: "1995", anoFim: "1999", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORDOBA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IBIZA", modelo: "", anoInicio: "1995", anoFim: "1999", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IBIZA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2002", motor: "1.0 16V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "1.0 16V AT",
          complemento: "COM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "1.0 16V AT",
          complemento: "INJ. DIG. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2001", motor: "1.0 16V AT",
          complemento: "INJ. DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.0 16V TURBO AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2004", motor: "1.0 16V TURBO AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.0 16V TURBO AT",
          complemento: "COM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.0 16V TURBO AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.0 16V TURBO AT",
          complemento: "INJ. DIG. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.0 16V TURBO AT",
          complemento: "INJ. DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.0 8V AT",
          complemento: "COM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.0 8V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.0 8V AT",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.0 8V AT",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "2005", motor: "1.0 8V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.0 8V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.0 8V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.0 8V AT",
          complemento: "COM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "1.0 8V AT",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "", motor: "1.0 8V AT",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "", motor: "1.0 8V AT",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1999", anoFim: "1999", motor: "1.0 8V AT",
          complemento: "INYE. EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF", modelo: "", anoInicio: "2002", anoFim: "", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF", modelo: "", anoInicio: "1994", anoFim: "1998", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF", modelo: "", anoInicio: "1994", anoFim: "1998", motor: "2.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "PASSAT", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V", complemento: "INJ. EFI" },
        { nome: "PASSAT ", modelo: "VARIANT", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V", complemento: "INJ. EFI" },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "AUDI",
      codigos: [
        { valor: "357919501A", obs: "" },
      ]
    },
    {
      marca: "SEAT",
      codigos: [
        { valor: "357919501A", obs: "" },
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        { valor: "357919501A", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0811',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['iguacu-0811.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PAMPA", modelo: "", anoInicio: "1997", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PAMPA", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "CFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI /SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGITAL / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIG. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIG. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.0 8V AE",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "INJ. CFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "EFI DIGI. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FORD",
      codigos: [
        { valor: "F32F12A648AA", obs: "" },
        { valor: "", obs: "" },
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        { valor: "F32F12A648AA", obs: "" },
        { valor: "0269061614", obs: "" },
      ]
    },
    {
      marca: "Valclei",
      codigos: [
        { valor: "44046", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0830',
  descricao: 'sensor temperatura',
  obs: 'Conector <a href="https://rainhadassete.com.br/produtos/chicotes-diversos-4-vias/1640/ete-chicote-sensor-de-temperatura-audi-vw-fox-cilindro-mestre-up-femea-16mm-ete-5767" title="Catálogo online" target="_blank">Rainha das Sete RE5767</a>',
  componentes: '1 sensor, 1 oring, 1 trava de plástico',
  imagens: ['iguacu-830.png'],
  propriedades: {
    quantTerminais: 4
  },
  aplicacao: [
    {
      montadora: "Audi",
      carros: [
        { nome: "A3", modelo: "", anoInicio: "1996", anoFim: "", motor: "1.6 8V", complemento: "" },
        {
          nome: "A3", modelo: "", anoInicio: "1999", anoFim: "2002", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A3", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A3", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "1.6 8V EA111",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "A3", modelo: "", anoInicio: "1996", anoFim: "", motor: "1.8", complemento: "" },
        {
          nome: "A3", modelo: "", anoInicio: "1999", anoFim: "2006", motor: "1.8",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "A4", modelo: "", anoInicio: "1995", anoFim: "", motor: "1.8", complemento: "" },
        {
          nome: "A3", modelo: "", anoInicio: "1999", anoFim: "2002", motor: "1.8 20V TURBO",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "A3", modelo: "", anoInicio: "2002", anoFim: "2007", motor: "1.8 20V TURBO",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "A4", modelo: "", anoInicio: "1995", anoFim: "", motor: "2.4", complemento: "" },
        { nome: "A3", modelo: "", anoInicio: "1997", anoFim: "", motor: "2.5", complemento: "" },
        { nome: "A6", modelo: "", anoInicio: "1997", anoFim: "", motor: "2.5", complemento: "" },
        { nome: "A8", modelo: "", anoInicio: "1998", anoFim: "", motor: "2.5", complemento: "" },
        { nome: "A4", modelo: "", anoInicio: "1995", anoFim: "", motor: "2.8", complemento: "" },
        { nome: "A4", modelo: "", anoInicio: "1995", anoFim: "", motor: "3.0", complemento: "" },
        { nome: "A8", modelo: "", anoInicio: "1998", anoFim: "", motor: "3.7", complemento: "" },
        { nome: "A3", modelo: "", anoInicio: "1997", anoFim: "", motor: "4.2", complemento: "" },
        { nome: "A6", modelo: "", anoInicio: "1997", anoFim: "", motor: "4.2", complemento: "" },
        { nome: "A8", modelo: "", anoInicio: "1998", anoFim: "", motor: "4.2", complemento: "" },
      ]
    },
    {
      montadora: "Seat",
      carros: [
        {
          nome: "IBIZA", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "1.0 16V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "CORDOBA", modelo: "", anoInicio: "1999", anoFim: "", motor: "1.4", complemento: "" },
        { nome: "IBIZA", modelo: "", anoInicio: "1999", anoFim: "", motor: "1.4", complemento: "" },
        { nome: "IBIZA", modelo: "", anoInicio: "1999", anoFim: "", motor: "1.6", complemento: "" },
        {
          nome: "CORDOBA", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IBIZA", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VARIO", modelo: "", anoInicio: "1999", anoFim: "2003", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "1.0 16V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "1.0 16V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.0 16V AT",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "1.0 16V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "1.0 16V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "1.0 16V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2002", anoFim: "2004", motor: "1.0 16V AT",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "1.0 16V AT",
          complemento: "INJ. DIG. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO", modelo: "CLASSIC", anoInicio: "2001", anoFim: "2003", motor: "1.0 16V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2002", anoFim: "2004", motor: "1.0 16V TURBO AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "2006", motor: "1.0 8V",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "1.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2003", anoFim: "2006", motor: "1.0 8V",
          complemento: "SEM AR QUENTE <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "2003", anoFim: "2004", motor: "1.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "2004", motor: "1.0 8V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "1.0 8V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "1.0 8V AT",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FOX", modelo: "", anoInicio: "2004", anoFim: "2010", motor: "1.0 8V EA-111",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "FOX", modelo: "", anoInicio: "2004", anoFim: "2004", motor: "1.0 8V EA-111",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2005", anoFim: "2008", motor: "1.0 8V EA-111",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2005", anoFim: "2008", motor: "1.0 8V EA-111",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "2008", motor: "1.0 8V EA-111",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2003", anoFim: "2008", motor: "1.0 8V EA-111",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "KOMBI", modelo: "", anoInicio: "2006", anoFim: "2013", motor: "1.4 8V EA111",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        { nome: "BORA", modelo: "", anoInicio: "1998", anoFim: "", motor: "1.6", complemento: "" },
        {
          nome: "GOLF", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "BORA", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "1.6 8V", complemento: "" },
        {
          nome: "CROSSFOX", modelo: "", anoInicio: "2005", anoFim: "2010", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "FOX", modelo: "", anoInicio: "2004", anoFim: "2010", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "1.6 8V",
          complemento: "SEM AQ. INTERNO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "GOLF", modelo: "", anoInicio: "2007", anoFim: "2013", motor: "1.6 8V", complemento: "" },
        {
          nome: "GOLF", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "NEW BEETLE", modelo: "", anoInicio: "2000", anoFim: "2000", motor: "1.6 8V", complemento: "" },
        {
          nome: "SPACEFOX", modelo: "", anoInicio: "2006", anoFim: "2010", motor: "1.6 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "FOX", modelo: "", anoInicio: "2004", anoFim: "2010", motor: "1.6 8V EA-111",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "FOX", modelo: "", anoInicio: "2004", anoFim: "2004", motor: "1.6 8V EA-111",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF", modelo: "", anoInicio: "2001", anoFim: "2007", motor: "1.6 8V EA-111",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "BORA", modelo: "", anoInicio: "1998", anoFim: "", motor: "1.8", complemento: "" },
        {
          nome: "BORA", modelo: "", anoInicio: "2005", anoFim: "2007", motor: "1.8",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "1.8",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT ", modelo: "VARIANT", anoInicio: "1999", anoFim: "2002", motor: "1.8",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "1999", anoFim: "", motor: "1.8 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "GOLF", modelo: "", anoInicio: "1999", anoFim: "2001", motor: "1.8 20V TURBO", complemento: "" },
        { nome: "GOLF", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "1.8 20V TURBO", complemento: "" },
        {
          nome: "GOLF", modelo: "", anoInicio: "1998", anoFim: "1999", motor: "1.8 20V TURBO",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "1999", anoFim: "", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF", modelo: "", anoInicio: "2004", anoFim: "", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF", modelo: "", anoInicio: "2004", anoFim: "", motor: "1.8 TURBO",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "PASSAT ", modelo: "VARIANT", anoInicio: "1999", anoFim: "2001", motor: "1.8 TURBO", complemento: "" },
        { nome: "BORA", modelo: "", anoInicio: "1998", anoFim: "", motor: "2.0", complemento: "" },
        {
          nome: "GOLF", modelo: "", anoInicio: "1998", anoFim: "2002", motor: "2.0",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF", modelo: "", anoInicio: "2004", anoFim: "", motor: "2.0",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "NEW BEETLE", modelo: "", anoInicio: "1999", anoFim: "2005", motor: "2.0",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "PASSAT", modelo: "", anoInicio: "1994", anoFim: "1997", motor: "2.0", complemento: "INJ. EFI" },
        {
          nome: "PASSAT", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "2.0",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "PASSAT ", modelo: "VARIANT", anoInicio: "1994", anoFim: "1997", motor: "2.0", complemento: "INJ. EFI" },
        {
          nome: "PASSAT ", modelo: "VARIANT", anoInicio: "2001", anoFim: "2002", motor: "2.0",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "1999", anoFim: "", motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "2007", anoFim: "2011", motor: "2.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "1999", anoFim: "", motor: "2.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "2005", anoFim: "2007", motor: "2.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "2002", anoFim: "2007", motor: "2.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "2002", anoFim: "2004", motor: "2.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "2.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BORA", modelo: "", anoInicio: "2000", anoFim: "2002", motor: "2.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "NEW BEETLE", modelo: "", anoInicio: "2000", anoFim: "2000", motor: "2.0 8V", complemento: "" },
        {
          nome: "POLO", modelo: "", anoInicio: "2002", anoFim: "2006", motor: "2.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT", modelo: "", anoInicio: "2001", anoFim: "2002", motor: "2.8",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOLF", modelo: "", anoInicio: "2000", anoFim: "2007", motor: "2.8 24V V6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PASSAT ", modelo: "VARIANT", anoInicio: "1999", anoFim: "2002", motor: "2.8 V6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "Valclei",
      codigos: [
        { valor: "44014", obs: "" },
      ]
    },
    {
      marca: "AUDI",
      codigos: [
        { valor: "059919501A", obs: "" },
      ]
    },
    {
      marca: "SEAT",
      codigos: [
        { valor: "059919501A", obs: "" },
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        { valor: "059919501A", obs: "" },
        { valor: "", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0803',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['iguacu-0803-1.jpg', 'iguacu-0803-2.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PAMPA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PAMPA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ESCORT", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ROYALE", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERONA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "CARB. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VERSAILLES", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "KOMBI", modelo: "", anoInicio: "1998", anoFim: "2005", motor: "1.6 8V",
          complemento: "A AR / INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KOMBI", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "1.6 8V",
          complemento: "A AR / INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.6 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "TLDZ / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "TLDZ / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "LOGUS", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "TLDZ / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO", modelo: "", anoInicio: "1992", anoFim: "1996", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1993", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VOYAGE", modelo: "", anoInicio: "1992", anoFim: "1995", motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "2002", motor: "2.0 16V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1995", anoFim: "2002", motor: "2.0 16V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 16V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI", modelo: "", anoInicio: "1996", anoFim: "2000", motor: "2.0 16V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1988", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL", modelo: "", anoInicio: "1988", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POINTER", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },

  ],
  referenciaCruzada: [
    {
      marca: "FORD",
      codigos: [
        { valor: "", obs: "" },
        { valor: "026906161", obs: "" },
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        { valor: "026906161", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0801',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor',
  imagens: ['iguacu-0801.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "STILO", modelo: "", anoInicio: "2003", anoFim: "2006", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "CELTA", modelo: "", anoInicio: "2006", anoFim: "2009", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CELTA", modelo: "", anoInicio: "2001", anoFim: "2005", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "CLASSIC", anoInicio: "2002", anoFim: "2006", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CORSA", modelo: "CLASSIC", anoInicio: "2006", anoFim: "2009", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA", modelo: "CLASSIC", anoInicio: "2002", anoFim: "2009", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1994", anoFim: "2007", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1996", anoFim: "2005", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1994", anoFim: "1998", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.0 8V",
          complemento: "INJ. EFI / C/S A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2002", anoFim: "2005", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PRISMA", modelo: "", anoInicio: "2007", anoFim: "2009", motor: "1.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "AGILE", modelo: "", anoInicio: "2010", anoFim: "", motor: "1.4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CELTA", modelo: "", anoInicio: "2007", anoFim: "2009", motor: "1.4 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CELTA", modelo: "", anoInicio: "2001", anoFim: "2007", motor: "1.4 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "COBALT", modelo: "", anoInicio: "2012", anoFim: "2015", motor: "1.4 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.4 8V",
          complemento: "INJ. EFI / C/S A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONTANA", modelo: "", anoInicio: "2007", anoFim: "2015", motor: "1.4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PRISMA", modelo: "", anoInicio: "2007", anoFim: "2009", motor: "1.4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA", modelo: "CLASSIC", anoInicio: "2002", anoFim: "2006", motor: "1.6 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1995", anoFim: "2006", motor: "1.6 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "1994", anoFim: "2002", motor: "1.6 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2010", anoFim: "2011", motor: "1.7 16V TD",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "MERIVA", modelo: "", anoInicio: "2003", anoFim: "2005", motor: "1.8 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "COBALT", modelo: "", anoInicio: "2013", anoFim: "2015", motor: "1.8 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "COBALT", modelo: "", anoInicio: "2012", anoFim: "2012", motor: "1.8 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2003", anoFim: "2009", motor: "1.8 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2002", anoFim: "2003", motor: "1.8 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "1.8 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SPIN", modelo: "", anoInicio: "2013", anoFim: "2015", motor: "1.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1992", anoFim: "1997", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1993", anoFim: "1996", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1992", anoFim: "1993", motor: "2.0 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BLAZER", modelo: "", anoInicio: "1995", anoFim: "1999", motor: "2.2 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BLAZER", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.2 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.2 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.2 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "S10", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.2 8V",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.2 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "2.2 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1999", anoFim: "2004", motor: "3.8 V6",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BLAZER", modelo: "", anoInicio: "1996", anoFim: "2004", motor: "4.3 12V V6",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BLAZER", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "4.3 12V V6",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "S10", modelo: "", anoInicio: "1996", anoFim: "2004", motor: "4.3 12V V6",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "S10", modelo: "", anoInicio: "1996", anoFim: "2001", motor: "4.3 12V V6",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "Wahler",
      codigos: [
        { valor: "411284", obs: "" },
      ]
    },
    {
      marca: "FIAT",
      codigos: [
        { valor: "7083448", obs: "" },
      ]
    },
    {
      marca: "Chevrolet",
      codigos: [
        { valor: "12191170", obs: "" },
        { valor: "15326386", obs: "" },
        { valor: "25036898", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0805	',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['iguacu-0805-1.png'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo",
      carros: [
        { nome: "155", modelo: "", anoInicio: "1992", anoFim: "", motor: "1.7", complemento: "" },
        { nome: "155", modelo: "", anoInicio: "1992", anoFim: "", motor: "1.8", complemento: "" },
        { nome: "155", modelo: "", anoInicio: "1992", anoFim: "", motor: "2.0", complemento: "" },
        { nome: "164", modelo: "", anoInicio: "1990", anoFim: "", motor: "2.0", complemento: "" },
        { nome: "164", modelo: "", anoInicio: "1990", anoFim: "", motor: "3.0", complemento: "" },
      ]
    },
    {
      montadora: "BMW",
      carros: [
        { nome: "318", modelo: "", anoInicio: "1990", anoFim: "1994", motor: "1.8 M20B18", complemento: "INJ. MPFI" },
        { nome: "325", modelo: "", anoInicio: "1990", anoFim: "1990", motor: "2.5 M20B25", complemento: "INJ. MPFI" },
      ]
    },
    {
      montadora: "Citroen",
      carros: [
        {
          nome: "AX", modelo: "", anoInicio: "1988", anoFim: "1996", motor: "1.4",
          complemento: "INJ. ELETRONICA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "ZX", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.4", complemento: "INJ. SPI" },
        { nome: "VISA", modelo: "", anoInicio: "1985", anoFim: "1991", motor: "1.6", complemento: "" },
        { nome: "BX", modelo: "", anoInicio: "2000", anoFim: "2000", motor: "1.6 16V", complemento: "" },
        { nome: "BX", modelo: "", anoInicio: "1986", anoFim: "", motor: "1.9", complemento: "" },
        { nome: "ZX", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.9 16V", complemento: "" },
        {
          nome: "XM", modelo: "", anoInicio: "1989", anoFim: "1994", motor: "2.0",
          complemento: "MOTOR TURBO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "CX", modelo: "", anoInicio: "1983", anoFim: "1992", motor: "2.5", complemento: "" },
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "UNO", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.4 8V TURBO",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "COM A/C / INJ. MPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "SEM A/C / INJ. MPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO", modelo: "", anoInicio: "1996", anoFim: "1997", motor: "1.6 8V",
          complemento: "INJ. MPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "1.6 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MAREA", modelo: "", anoInicio: "1999", anoFim: "2000", motor: "2.0 20V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MAREA ", modelo: "WEEKEND", anoInicio: "1999", anoFim: "2000", motor: "2.0 20V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA", modelo: "", anoInicio: "1995", anoFim: "1996", motor: "2.0 8V TURBO",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "CORSA", modelo: "", anoInicio: "1999", anoFim: "2002", motor: "1.0 16V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CELTA", modelo: "", anoInicio: "2009", anoFim: "2015", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA", modelo: "CLASSIC", anoInicio: "2009", anoFim: "2015", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2005", anoFim: "2012", motor: "1.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PRISMA", modelo: "", anoInicio: "2010", anoFim: "2012", motor: "1.0 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CELTA", modelo: "", anoInicio: "2009", anoFim: "2015", motor: "1.4 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA", modelo: "", anoInicio: "2009", anoFim: "2012", motor: "1.4 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MERIVA", modelo: "", anoInicio: "2009", anoFim: "2012", motor: "1.4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PRISMA", modelo: "", anoInicio: "2010", anoFim: "2012", motor: "1.4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CALIBRA", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 16V",
          complemento: "INJ. SFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CALIBRA", modelo: "", anoInicio: "1994", anoFim: "1995", motor: "2.0 16V",
          complemento: "INJ. SFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VECTRA", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "2.0 16V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VECTRA", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "2.0 16V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VECTRA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 16V",
          complemento: "INJ. SFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VECTRA", modelo: "", anoInicio: "1994", anoFim: "1996", motor: "2.0 16V",
          complemento: "INJ. SFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ASTRA", modelo: "", anoInicio: "2005", anoFim: "2012", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ASTRA", modelo: "", anoInicio: "2004", anoFim: "2006", motor: "2.0 8V",
          complemento: "MPFI / MULTIPOWER <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: TRI-FUEL"
        },
        {
          nome: "IPANEMA", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KADETT", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MONZA", modelo: "", anoInicio: "1990", anoFim: "1993", motor: "2.0 8V",
          complemento: "MPFI S/ IGN. MAPEADA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "2.0 8V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VECTRA", modelo: "", anoInicio: "2005", anoFim: "2011", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ZAFIRA", modelo: "", anoInicio: "2005", anoFim: "2012", motor: "2.0 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VECTRA", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "2.2 16V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "VECTRA", modelo: "", anoInicio: "1997", anoFim: "2005", motor: "2.2 16V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ZAFIRA", modelo: "", anoInicio: "2001", anoFim: "2005", motor: "2.2 16V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VECTRA", modelo: "", anoInicio: "2005", anoFim: "2009", motor: "2.4 16V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ZAFIRA", modelo: "", anoInicio: "2004", anoFim: "2012", motor: "2.4 16V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "BLAZER", modelo: "", anoInicio: "2007", anoFim: "2011", motor: "2.4 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "BLAZER", modelo: "", anoInicio: "2001", anoFim: "2004", motor: "2.4 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "S10", modelo: "", anoInicio: "2007", anoFim: "2016", motor: "2.4 8V",
          complemento: "INJ. MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "3.0 12V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1993", anoFim: "1994", motor: "3.0 12V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "OMEGA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "4.1 12V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SUPREMA", modelo: "", anoInicio: "1995", anoFim: "1998", motor: "4.1 12V",
          complemento: "INJ. MPFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
      ]
    },
    {
      montadora: "Hyundai",
      carros: [
        {
          nome: "ATOS PRIME", modelo: "", anoInicio: "2000", anoFim: "2003", motor: "1.0 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "ACENT", modelo: "", anoInicio: "1994", anoFim: "1999", motor: "1.3 12V", complemento: "" },
        { nome: "ACENT", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.5", complemento: "" },
        { nome: "ACENT", modelo: "", anoInicio: "1994", anoFim: "1999", motor: "1.5 12V", complemento: "INJ. ELETRONICA" },
        { nome: "ELANTRA", modelo: "", anoInicio: "1996", anoFim: "1998", motor: "1.8", complemento: "" },
      ]
    },
    {
      montadora: "Peugeot",
      carros: [
        {
          nome: "106", modelo: "", anoInicio: "1996", anoFim: "", motor: "1.0",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.0",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.0",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "205", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.0", complemento: "" },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.1",
          complemento: "INJ. ELE. / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "306", modelo: "", anoInicio: "1993", anoFim: "1997", motor: "1.1", complemento: "INJ. BOSCH / MOTOR TU3M" },
        { nome: "205", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.4", complemento: "" },
        { nome: "306", modelo: "", anoInicio: "1993", anoFim: "1997", motor: "1.4", complemento: "INJ. BOSCH / MOTOR TU3MC" },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "1.4 8V TU3MC",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "1.4 8V TU3MC",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "205", modelo: "", anoInicio: "1983", anoFim: "", motor: "1.6", complemento: "" },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "1996", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "106", modelo: "", anoInicio: "1991", anoFim: "", motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "306", modelo: "", anoInicio: "1993", anoFim: "1997", motor: "1.6 8V",
          complemento: "INJ. BOSCH <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "205", modelo: "", anoInicio: "1983", anoFim: "", motor: "1.9", complemento: "" },
        {
          nome: "405", modelo: "", anoInicio: "1987", anoFim: "1992", motor: "1.9",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "605", modelo: "", anoInicio: "1989", anoFim: "", motor: "2.0",
          complemento: "BVA / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        { nome: "505", modelo: "", anoInicio: "1982", anoFim: "1993", motor: "2.2", complemento: "INJ. ELETRONICA" },
      ]
    },
    {
      montadora: "Seat",
      carros: [
        { nome: "IBIZA", modelo: "", anoInicio: "1991", anoFim: "1992", motor: "1.6", complemento: "" },
      ]
    },

  ],
  referenciaCruzada: [
    {
      marca: "ALFA ROMEO",
      codigos: [
        { valor: "0280130026", obs: "" },
      ]
    },
    {
      marca: "BMW",
      codigos: [
        { valor: "0280130026", obs: "" },
      ]
    },
    {
      marca: "CITRÖEN",
      codigos: [
        { valor: "0280130026", obs: "" },
        { valor: "024246", obs: "" },
      ]
    },
    {
      marca: "FIAT",
      codigos: [
        { valor: "5972332", obs: "" },
        { valor: "7770239", obs: "" },
        { valor: "0280130026", obs: "" },
      ]
    },
    {
      marca: "Chevrolet",
      codigos: [
        { valor: "0280130026", obs: "" },
        { valor: "93358883", obs: "" },
        { valor: "0280130107", obs: "" },
      ]
    },
    {
      marca: "HYUNDAI",
      codigos: [
        { valor: "3922022010", obs: "" },
      ]
    },
    {
      marca: "PEUGEOT",
      codigos: [
        { valor: "024246", obs: "" },
        { valor: "0280130026", obs: "" },
      ]
    },
    {
      marca: "SEAT",
      codigos: [
        { valor: "0280130107", obs: "" },
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0802	',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['iguacu-802.jpg', 'iguacu-802-2.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo",
      carros: [
        {
          nome: "155",
          modelo: "",
          anoInicio: "1992",
          anoFim: "",
          motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: --"
        }
      ]
    },
    {
      montadora: "Citroen",
      carros: [
        {
          nome: "JUMPER",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2000",
          motor: "2.8 8V HDI",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        }
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "UNO",
          modelo: "MILLE",
          anoInicio: "1999",
          anoFim: "2004",
          motor: "1.0 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO",
          modelo: "MILLE",
          anoInicio: "1999",
          anoFim: "2004",
          motor: "1.0 8V",
          complemento: "INJ. MPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO",
          modelo: "MILLE",
          anoInicio: "1999",
          anoFim: "2004",
          motor: "1.0 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "MILLE",
          anoInicio: "1999",
          anoFim: "2004",
          motor: "1.0 8V",
          complemento: "INJ. MPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "MILLE",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "1.0 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "MILLE",
          anoInicio: "1997",
          anoFim: "2001",
          motor: "1.0 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "MILLE",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "1.0 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "MILLE",
          anoInicio: "1996",
          anoFim: "2001",
          motor: "1.0 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2002",
          motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2002",
          motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1997",
          motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1997",
          motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.0 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.0 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2001",
          motor: "1.0 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.0 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "1.0 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2001",
          motor: "1.0 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "INJ. SPI/ COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1995",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1993",
          motor: "1.5 8V",
          complemento: "MOTOR E201 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2004",
          motor: "1.5 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2002",
          motor: "1.5 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2000",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2000",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2004",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2004",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1997",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1997",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1998",
          anoFim: "2000",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1994",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PREMIO",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "1999",
          anoFim: "1999",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.5 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.5 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2004",
          anoFim: "2004",
          motor: "1.5 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2004",
          motor: "1.5 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2004",
          motor: "1.5 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.5 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2002",
          motor: "1.5 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2002",
          motor: "1.5 8V",
          complemento: "INJ. MPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1996",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1994",
          motor: "1.5 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "DUNA",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1995",
          motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "DUNA",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1995",
          motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "DUNA",
          modelo: "",
          anoInicio: "",
          anoFim: "1995",
          motor: "1.6 8V",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.6 8V",
          complemento: "INJ. SPI/ SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.6 8V",
          complemento: "COM A/C / INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "ELBA",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1996",
          motor: "1.6 8V",
          complemento: "SEM A/C / INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1995",
          motor: "1.6 8V",
          complemento: "INJ. SPI/ COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2000",
          motor: "1.6 8V",
          complemento: "INJ. MPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.6 8V",
          complemento: "INJ. SPI/ SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.6 8V",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PALIO ",
          modelo: "WEEKEND",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.6 8V",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1994",
          motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PREMIO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1994",
          motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.6 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.6 8V",
          complemento: "INJ. SPI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "STILO",
          modelo: "",
          anoInicio: "2004",
          anoFim: "2007",
          motor: "1.8 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "COUPE",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1997",
          motor: "2.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA",
          modelo: "",
          anoInicio: "1993",
          anoFim: "1998",
          motor: "2.0 16V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1995",
          motor: "2.0 16V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1996",
          motor: "2.0 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "TEMPRA",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1999",
          motor: "2.0 8V",
          complemento: "INJ. SPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TEMPRA",
          modelo: "SW",
          anoInicio: "1994",
          anoFim: "1997",
          motor: "2.0 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TIPO",
          modelo: "",
          anoInicio: "1994",
          anoFim: "1995",
          motor: "2.0 8V",
          complemento: "INJ. MPI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "DUCATO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2000",
          motor: "2.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "DUCATO",
          modelo: "",
          anoInicio: "2004",
          anoFim: "2005",
          motor: "2.8 8V",
          complemento: "T / C/S INTERCOOLER <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        }
      ]
    },
    {
      montadora: "Peugeot",
      carros: [
        {
          nome: "BOXER",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2000",
          motor: "2.8 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        }
      ]
    },
    {
      montadora: "Renault",
      carros: [
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "",
          motor: "1.6",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: --"
        },
        {
          nome: "R19",
          modelo: "",
          anoInicio: "1992",
          anoFim: "",
          motor: "1.8",
          complemento: "INJ. SPI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: --"
        }
      ]
    },
    {
      montadora: "Seat",
      carros: [
        {
          nome: "CADDY",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CADDY",
          modelo: "",
          anoInicio: "2002",
          anoFim: "",
          motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "INCA",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2003",
          motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2005",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2008",
          motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2005",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2003",
          motor: "1.6 8V AP",
          complemento: "CON A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2003",
          motor: "1.6 8V AP",
          complemento: "SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1997",
          motor: "1.6 8V AP",
          complemento: "INYE. EFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1997",
          motor: "1.6 8V AP",
          complemento: "INYE. CFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2012",
          motor: "1.6 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "CLASSIC",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "CLASSIC",
          anoInicio: "1996",
          anoFim: "2003",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1996",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VAN",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2002",
          motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "VAN",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2003",
          motor: "1.6 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2005",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2008",
          motor: "1.8 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2005",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1997",
          motor: "1.8 8V AP",
          complemento: "INYE. EFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1997",
          motor: "1.8 8V AP",
          complemento: "INYE. CFI / SIN A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2012",
          motor: "1.8 8V AP",
          complemento: "COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "CLASSIC",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "POLO ",
          modelo: "CLASSIC",
          anoInicio: "1996",
          anoFim: "2003",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2001",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2001",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1996",
          motor: "1.8 8V AP",
          complemento: "INJ. CFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2001",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2001",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2001",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2001",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1992",
          anoFim: "1996",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "1.8 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2005",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2008",
          motor: "2.0 8V AP",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2005",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1998",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "PARATI",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2001",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2001",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2001",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2001",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1997",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2001",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "QUANTUM",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2001",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2001",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2001",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANTANA",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: ETANOL"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2000",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2006",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / COM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2002",
          motor: "2.0 8V AP",
          complemento: "INJ. EFI / SEM A/C <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },

  ],
  referenciaCruzada: [
    {
      marca: "Valclei",
      codigos: [
        {
          valor: "44053",
          obs: ""
        }
      ]
    },
    {
      marca: "ALFA ROMEO",
      codigos: [
        {
          valor: "50009755",
          obs: ""
        }
      ]
    },
    {
      marca: "CITRÖEN",
      codigos: [
        {
          valor: "1338A5",
          obs: ""
        }
      ]
    },
    {
      marca: "FIAT",
      codigos: [
        {
          valor: "50009755",
          obs: ""
        },
        {
          valor: "4850371",
          obs: ""
        }
      ]
    },
    {
      marca: "PEUGEOT",
      codigos: [
        {
          valor: "1338A5",
          obs: ""
        }
      ]
    },
    {
      marca: "RENAULT",
      codigos: [
        {
          valor: "7702087460",
          obs: ""
        }
      ]
    },
    {
      marca: "SEAT",
      codigos: [
        {
          valor: "02690616112",
          obs: ""
        }
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        {
          valor: "02690616112",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0831',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['iguacu-831-1.png', 'iguacu-931-2.png'],
  propriedades: {
    quantTerminais: 3
  },
  aplicacao: [
    {
      montadora: "Nissan",
      carros: [
        {
          nome: "MARCH",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2015",
          motor: "1.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "LIVINA", modelo: "", anoInicio: "2008", anoFim: "", motor: "1.6 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
      ]
    },
    {
      montadora: "Peugeot",
      carros: [
        {
          nome: "206",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2006",
          motor: "1.0 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        }
      ]
    },
    {
      montadora: "Renault",
      carros: [
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "2013",
          anoFim: "",
          motor: "1.0 16V",
          complemento: "MOTOR D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2013",
          motor: "1.0 16V",
          complemento: "MOTOR D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2003",
          motor: "1.0 16V",
          complemento: "MOTOR D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2005",
          motor: "1.0 16V",
          complemento: "MOTOR D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KANGOO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2005",
          motor: "1.0 16V",
          complemento: "MOTOR D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGAN",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2007",
          motor: "1.0 16V",
          complemento: "MOTOR D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SANDERO",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2013",
          motor: "1.0 16V",
          complemento: "MOTOR D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "TWINGO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2001",
          motor: "1.0 16V",
          complemento: "MOTOR D4D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "1.0 8V",
          complemento: "MOTOR D7D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2008",
          motor: "1.0 8V",
          complemento: "MOTOR D7D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KANGOO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2005",
          motor: "1.0 8V",
          complemento: "MOTOR D7D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "TWINGO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2001",
          motor: "1.0 8V",
          complemento: "MOTOR D7D <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2009",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "DUSTER",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2016",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "FLUENCE",
          modelo: "",
          anoInicio: "2011",
          anoFim: "",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "KANGOO",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2011",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "KANGOO",
          modelo: "",
          anoInicio: "2000",
          anoFim: "2007",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGAN",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2012",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MEGANE",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2011",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MEGANE",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2000",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SANDERO",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2012",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SCENIC",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2011",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SCENIC",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2005",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SYMBOL",
          modelo: "",
          anoInicio: "2009",
          anoFim: "2013",
          motor: "1.6 16V",
          complemento: "MOTOR K4M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CLIO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "2002",
          motor: "1.6 8V",
          complemento: "MOTOR K7M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "EXPRESS",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2003",
          motor: "1.6 8V",
          complemento: "MOTOR K7M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "KANGOO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2003",
          motor: "1.6 8V",
          complemento: "MOTOR K7M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "LOGAN",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2012",
          motor: "1.6 8V",
          complemento: "MOTOR K7M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SANDERO",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2012",
          motor: "1.6 8V",
          complemento: "MOTOR K7M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SYMBOL",
          modelo: "",
          anoInicio: "2009",
          anoFim: "2011",
          motor: "1.6 8V",
          complemento: "MOTOR K7M <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "DUSTER",
          modelo: "",
          anoInicio: "2012",
          anoFim: "",
          motor: "2.0 16V",
          complemento: "MOTOR F4RC4D4 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GRAN SCENIC",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2009",
          motor: "2.0 16V",
          complemento: "MOTOR F4R <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MEGANE",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2011",
          motor: "2.0 16V",
          complemento: "MOTOR F4R <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "SCENIC",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2009",
          motor: "2.0 16V",
          complemento: "MOTOR F4R <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: GASOLINA"
        },
        {
          nome: "MASTER",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2007",
          motor: "2.8 8V",
          complemento: "MOTOR SW9 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        },
        {
          nome: "MASTER",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2004",
          motor: "2.8 8V",
          complemento: "MOTOR SW9 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: DIESEL"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "NGK",
      codigos: [
        {
          valor: "CTN3-A006",
          obs: ""
        },
      ]
    },
    {
      marca: "NISSAN",
      codigos: [
        {
          valor: "2263000Q1C",
          obs: ""
        },
        {
          valor: "8200561449",
          obs: ""
        }
      ]
    },
    {
      marca: "PEUGEOT",
      codigos: [
        {
          valor: "7700101968",
          obs: ""
        }
      ]
    },
    {
      marca: "RENAULT",
      codigos: [
        {
          valor: "8200561449",
          obs: ""
        },
        {
          valor: "7700101968",
          obs: ""
        },
        {
          valor: "",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "Iguaçu",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '201.0860',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor',
  imagens: ['iguacu-860-1.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "GRAND SIENA",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2015",
          motor: "1.6 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "IDEA",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.6 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2017",
          motor: "1.6 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "WEEKEND",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.6 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.6 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "2011",
          anoFim: "",
          motor: "1.6 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2015",
          motor: "1.6 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "BRAVO",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.8 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "DOBLO",
          modelo: "",
          anoInicio: "2010",
          anoFim: "2015",
          motor: "1.8 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "IDEA",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.8 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "LINEA",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.8 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "WEEKEND",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.8 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.8 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2015",
          motor: "1.8 16V",
          complemento: "MOTOR E.TORQ <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FIAT",
      codigos: [
        {
          valor: "55223506",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '4057',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 oring',
  imagens: ['mte-4057-1.jpg', 'mte-4057-2.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Ford",
      carros: [
        {
          nome: "ECOSPORT",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2012",
          motor: "2.0 L4 16V",
          complemento: "DURATEC HE"
        },
        {
          nome: "ECOSPORT",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "2.0 L4 16V",
          complemento: "DURATEC"
        },
        {
          nome: "MONDEO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1998",
          motor: "2.0 L4 16V",
          complemento: "ZETEC-E <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "MONDEO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "1999",
          motor: "2.0 L4 16V",
          complemento: "ZETEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "MONDEO",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2003",
          motor: "2.5 L6 24V",
          complemento: "DURATEC"
        },
        {
          nome: "RANGER",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2015",
          motor: "2.5 L4 16V",
          complemento: "DURATEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "RANGER",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2017",
          motor: "2.5 L4 16V",
          complemento: "DURATEC <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FORD",
      codigos: [
        {
          valor: "1047284",
          obs: ""
        },
        {
          valor: "3329104",
          obs: ""
        },
        {
          valor: "3929104",
          obs: ""
        },
        {
          valor: "4537712",
          obs: ""
        },
        {
          valor: "5072891",
          obs: ""
        },
        {
          valor: "8E5A12A648AA",
          obs: ""
        },
        {
          valor: "978F12A648AA",
          obs: ""
        },
        {
          valor: "F62F12A648AA",
          obs: ""
        },
        {
          valor: "F62Z12A648A",
          obs: ""
        },
        {
          valor: "F62Z12A648AA",
          obs: ""
        },
        {
          valor: "F67Z12A648AA",
          obs: ""
        },
        {
          valor: "F7712A648AA",
          obs: ""
        },
        {
          valor: "F77F12A648AA",
          obs: ""
        },
        {
          valor: "F77Z12A648AA",
          obs: ""
        },
        {
          valor: "F8CZ12A648AA",
          obs: ""
        },
        {
          valor: "F8CZ12A648B",
          obs: ""
        },
        {
          valor: "XU3F12A648AA",
          obs: ""
        }
      ]
    },
    {
      marca: "JAGUAR",
      codigos: [
        {
          valor: "LRA1600BA",
          obs: ""
        }
      ]
    },
    {
      marca: "KIA",
      codigos: [
        {
          valor: "MFSB918840",
          obs: ""
        }
      ]
    },
    {
      marca: "LAND ROVER",
      codigos: [
        {
          valor: "4537712",
          obs: ""
        },
        {
          valor: "4557904",
          obs: ""
        },
        {
          valor: "LR019736",
          obs: ""
        },
        {
          valor: "LR020008",
          obs: ""
        }
      ]
    },
    {
      marca: "MAZDA",
      codigos: [
        {
          valor: "FS1518840",
          obs: ""
        },
        {
          valor: "FSB918840",
          obs: ""
        },
        {
          valor: "L35G18840",
          obs: ""
        },
        {
          valor: "LF0118840",
          obs: ""
        },
        {
          valor: "LF0118840A",
          obs: ""
        }
      ]
    },
    {
      marca: "VOLVO",
      codigos: [
        {
          valor: "30658181",
          obs: ""
        },
        {
          valor: "30777334",
          obs: ""
        },
        {
          valor: "31460287",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca" 
  referencia: '4008',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['mte-4008-1.jpg', 'mte-4008-2.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "CORSA",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2009",
          motor: "1.4 L4 8V",
          complemento: "ECONOFLEX <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CORSA",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2003",
          motor: "1.8 L4 8V",
          complemento: "SOHC MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "CORSA",
          modelo: "",
          anoInicio: "2004",
          anoFim: "2009",
          motor: "1.8 L4 8V",
          complemento: "FLEXPOWER <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MERIVA",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2012",
          motor: "1.4 L4 8V",
          complemento: "ECONOFLEX <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MERIVA",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2009",
          motor: "1.8 L4 8V",
          complemento: "SOHC MPFI <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "MERIVA",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2012",
          motor: "1.8 L4 8V",
          complemento: "FLEXPOWER <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA",
          modelo: "",
          anoInicio: "2003",
          anoFim: "2010",
          motor: "1.8 L4 8V",
          complemento: "FLEXPOWER <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "DOBLO",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2012",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "IDEA",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2011",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "2006",
          anoFim: "2007",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2010",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "WEEKEND",
          anoInicio: "2006",
          anoFim: "2007",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "WEEKEND",
          anoInicio: "2008",
          anoFim: "2011",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2010",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2010",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STILO",
          modelo: "",
          anoInicio: "2005",
          anoFim: "2011",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2008",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2007",
          anoFim: "2008",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2009",
          anoFim: "2010",
          motor: "1.8 L4 8V",
          complemento: "POWERTRAIN <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "FIAT",
      codigos: [
        {
          valor: "7085083",
          obs: ""
        }
      ]
    },
    {
      marca: "GENERAL MOTORS",
      codigos: [
        {
          valor: "93313156",
          obs: ""
        }
      ]
    },
    {
      marca: "VAUXHALL",
      codigos: [
        {
          valor: "93313156",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '3071',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor',
  imagens: ['mte-3071.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Alfa Romeo",
      carros: [
        {
          nome: "145",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.8 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "145",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "155",
          modelo: "",
          anoInicio: "1995",
          anoFim: "1998",
          motor: "2.0 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "156",
          modelo: "",
          anoInicio: "1998",
          anoFim: "2004",
          motor: "2.5 L6 24V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        }
      ]
    },
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "2004",
          motor: "1.5 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>:"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1999",
          motor: "1.0 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "1996",
          anoFim: "1998",
          motor: "1.5 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PALIO",
          modelo: "WEEKEND",
          anoInicio: "1999",
          anoFim: "2000",
          motor: "1.0 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PALIO",
          modelo: "WEEKEND",
          anoInicio: "1997",
          anoFim: "1999",
          motor: "1.5 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2001",
          motor: "1.0 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "2002",
          anoFim: "2008",
          motor: "1.0 L4 8V",
          complemento: "FIRE <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>:"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1999",
          anoFim: "2004",
          motor: "1.0 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>:"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1997",
          anoFim: "1997",
          motor: "1.5 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>:"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "1998",
          anoFim: "1999",
          motor: "1.5 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>:"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2001",
          anoFim: "2002",
          motor: "1.5 L4 8V",
          complemento: "FIASA <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>:"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "ALFA ROMEO",
      codigos: [
        {
          valor: "60806378",
          obs: ""
        },
        {
          valor: "60811250",
          obs: ""
        },
        {
          valor: "7762300",
          obs: ""
        }
      ]
    },
    {
      marca: "FIAT",
      codigos: [
        {
          valor: "60809521",
          obs: ""
        },
        {
          valor: "7553258",
          obs: ""
        },
        {
          valor: "7670548",
          obs: ""
        },
        {
          valor: "7762300",
          obs: ""
        },
        {
          valor: "7762301",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '4221',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['mte-4221-1.jpg', 'mte-4221-2.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Chevrolet",
      carros: [
        {
          nome: "CORSA",
          modelo: "CLASSIC",
          anoInicio: "2016",
          anoFim: "2016",
          motor: "1.0 L4 8V",
          complemento: "VHC-E <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "COBALT",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2018",
          motor: "1.4 L4 8V",
          complemento: "NLEV <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "COBALT",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2018",
          motor: "1.8 L4 8V",
          complemento: "NLEV <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "MONTANA",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2018",
          motor: "1.4 L4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ONIX",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2018",
          motor: "1.0 L4 8V",
          complemento: "SPE/4 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ONIX",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2013",
          motor: "1.4 L4 8V",
          complemento: "SPE/4 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "ONIX",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2018",
          motor: "1.4 L4 8V",
          complemento: "SPE/4 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PRISMA",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2018",
          motor: "1.0 L4 8V",
          complemento: "SPE/4 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PRISMA",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2013",
          motor: "1.4 L4 8V",
          complemento: "SPE/4 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PRISMA",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2018",
          motor: "1.4 L4 8V",
          complemento: "SPE/4 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SPIN",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2023",
          motor: "1.8 L4 8V",
          complemento: "NLEV <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "GENERAL MOTORS",
      codigos: [
        {
          valor: "25186240",
          obs: ""
        }
      ]
    },
    {
      marca: "OPEL",
      codigos: [
        {
          valor: "1338378",
          obs: ""
        },
        {
          valor: "25186240",
          obs: ""
        }
      ]
    },
    {
      marca: "VAUXHALL",
      codigos: [
        {
          valor: "25186240",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '4147',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, 1 arruela',
  imagens: ['mte-4147-1.jpg', 'mte-4147-2.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "500",
          modelo: "",
          anoInicio: "2008",
          anoFim: "2016",
          motor: "1.4 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "500",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2016",
          motor: "1.4 L4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "FIORINO",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2022",
          motor: "1.4 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GRAND SIENA",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2020",
          motor: "1.4 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GRAND SIENA",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2016",
          motor: "1.4 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX/GNV"
        },
        {
          nome: "LINEA",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2012",
          motor: "1.4 L4 16V",
          complemento: "T-JET <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "MOBI",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2023",
          motor: "1.0 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2017",
          motor: "1.0 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2017",
          motor: "1.4 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2009",
          anoFim: "2016",
          motor: "1.4 L4 16V",
          complemento: "T-JET <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2011",
          anoFim: "2017",
          motor: "1.4 L4 16V",
          complemento: "T-JET <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "1.4 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SIENA",
          modelo: "",
          anoInicio: "2012",
          anoFim: "2016",
          motor: "1.4 L4 8V",
          complemento: "FIRE <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2020",
          anoFim: "2023",
          motor: "1.4 L4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2020",
          anoFim: "2023",
          motor: "1.4 L4 8V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2010",
          anoFim: "2017",
          motor: "1.0 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "UNO",
          modelo: "",
          anoInicio: "2010",
          anoFim: "2016",
          motor: "1.4 L4 8V",
          complemento: "FIRE EVO <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "ABARTH",
      codigos: [
        {
          valor: "55190791",
          obs: ""
        }
      ]
    },
    {
      marca: "ALFA ROMEO",
      codigos: [
        {
          valor: "55190791",
          obs: ""
        }
      ]
    },
    {
      marca: "CHRYSLER",
      codigos: [
        {
          valor: "55190791",
          obs: ""
        }
      ]
    },
    {
      marca: "FIAT",
      codigos: [
        {
          valor: "55190791",
          obs: ""
        },
        {
          valor: "77363465",
          obs: ""
        }
      ]
    },
    {
      marca: "FORD",
      codigos: [
        {
          valor: "1535412",
          obs: ""
        },
        {
          valor: "9S5112A648AA",
          obs: ""
        }
      ]
    },
    {
      marca: "GENERAL MOTORS",
      codigos: [
        {
          valor: "55190791",
          obs: ""
        },
        {
          valor: "55190792",
          obs: ""
        }
      ]
    },
    {
      marca: "JEEP",
      codigos: [
        {
          valor: "55190791",
          obs: ""
        },
        {
          valor: "68070744AA",
          obs: ""
        },
        {
          valor: "K68070744AA",
          obs: ""
        },
        {
          valor: "K68070744AB",
          obs: ""
        }
      ]
    },
    {
      marca: "LANCIA",
      codigos: [
        {
          valor: "55190791",
          obs: ""
        },
        {
          valor: "77363465",
          obs: ""
        }
      ]
    },
    {
      marca: "OPEL",
      codigos: [
        {
          valor: "1338270",
          obs: ""
        },
        {
          valor: "55190791",
          obs: ""
        }
      ]
    },
    {
      marca: "VAUXHALL",
      codigos: [
        {
          valor: "55190791",
          obs: ""
        }
      ]
    },
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '4217',
  descricao: 'sensor temperatura',
  obs: 'Sensor cor marrom',
  componentes: '1 sensor, 1 trava, 1 oring',
  imagens: ['mte-4217-1.jpg', 'mte-4217-2.jpg', 'mte-4217-3.jpeg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "FIAT",
      carros: [
        {
          nome: "ARGO",
          modelo: "",
          anoInicio: "2017",
          anoFim: "2022",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "BRAVO",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "CRONOS",
          modelo: "",
          anoInicio: "2018",
          anoFim: "2022",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "DOBLO",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2021",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "GRAND SIENA",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2020",
          motor: "1.6 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "GRAND SIENA",
          modelo: "",
          anoInicio: "2022",
          anoFim: "2022",
          motor: "1.6 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "IDEA",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2018",
          motor: "1.6 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "IDEA",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2019",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "LINEA",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "LINEA",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2019",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "PALIO",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2019",
          motor: "1.6 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2017",
          motor: "1.6 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2019",
          motor: "1.6 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "PUNTO",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2017",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "1.6 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2019",
          motor: "1.6 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "STRADA",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2021",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        },
        {
          nome: "TORO",
          modelo: "",
          anoInicio: "2022",
          anoFim: "2023",
          motor: "1.3 L4 16V",
          complemento: "FLEX"
        },
        {
          nome: "TORO",
          modelo: "",
          anoInicio: "2015",
          anoFim: "2021",
          motor: "1.8 L4  V",
          complemento: "E-TORQ EVO FLEX"
        }
      ]
    },
    {
      montadora: "Jeep",
      carros: [
        {
          nome: "COMPASS",
          modelo: "",
          anoInicio: "2021",
          anoFim: "2023",
          motor: "1.3 L4 16V",
          complemento: "FLEX"
        },
        {
          nome: "RENEGADE",
          modelo: "",
          anoInicio: "2022",
          anoFim: "2023",
          motor: "1.3 L4 16V",
          complemento: "FLEX"
        },
        {
          nome: "RENEGADE",
          modelo: "",
          anoInicio: "2015",
          anoFim: "2021",
          motor: "1.8 L4 16V",
          complemento: "E-TORQ FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: 'Original',
      codigos: [{ valor: '55261955', obs: '' }]
    }
  ]
},
{
  marca: "MTE",  // "AJE" "Iguaçu" "Marflex" "Marilia" "MTE" "Valclei" "Wahler" "MTF" "YMAX" "AVX" "Gira Parts" "Sem marca"
  referencia: '4259',
  descricao: 'sensor temperatura',
  obs: '',
  componentes: '1 sensor, acompanha 2 anéis de vedação',
  imagens: ['mte-4259-1.jpg', 'mte-4259-2.jpg', 'mte-4259-3.jpg'],
  propriedades: {
    quantTerminais: 2
  },
  aplicacao: [
    {
      montadora: "Audi",
      carros: [
        {
          nome: "A1",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2017",
          motor: "1.4 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "A1",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2019",
          motor: "1.4 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "A3",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2020",
          motor: "1.4 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "A3",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "1.4 L4 16V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "Q3",
          modelo: "",
          anoInicio: "2017",
          anoFim: "2019",
          motor: "1.4 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
    {
      montadora: "Volkswagen",
      carros: [
        {
          nome: "UP",
          modelo: "CROSS",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "1.0 L3 12V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "CROSSFOX",
          modelo: "",
          anoInicio: "2015",
          anoFim: "2016",
          motor: "1.6 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "FOX",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2018",
          motor: "1.0 L3 12V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "FOX",
          modelo: "",
          anoInicio: "2015",
          anoFim: "2016",
          motor: "1.6 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2018",
          motor: "1.0 L3 12V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOL",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2015",
          motor: "1.6 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2013",
          anoFim: "2016",
          motor: "1.4 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: Gasolina"
        },
        {
          nome: "GOLF",
          modelo: "",
          anoInicio: "2016",
          anoFim: "2016",
          motor: "1.6 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "JETTA",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2021",
          motor: "1.4 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "NIVUS",
          modelo: "",
          anoInicio: "2020",
          anoFim: "2024",
          motor: "1.0 L3 12V",
          complemento: "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "POLO",
          modelo: "",
          anoInicio: "2017",
          anoFim: "2020",
          motor: "1.0 L3 12V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SAVEIRO",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2016",
          motor: "1.6 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "SPACEFOX",
          modelo: "",
          anoInicio: "2015",
          anoFim: "2016",
          motor: "1.6 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "T-CROSS",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2023",
          motor: "1.0 L3 12V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "T-CROSS",
          modelo: "",
          anoInicio: "2019",
          anoFim: "2023",
          motor: "1.4 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "UP",
          modelo: "",
          anoInicio: "2014",
          anoFim: "2020",
          motor: "1.0 L3 12V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VIRTUS",
          modelo: "",
          anoInicio: "2017",
          anoFim: "2025",
          motor: "1.0 L3 12V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        },
        {
          nome: "VIRTUS",
          modelo: "",
          anoInicio: "2018",
          anoFim: "2024",
          motor: "1.6 L4 16V",
          complemento: "EA211 <img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: FLEX"
        }
      ]
    },
  ],
  referenciaCruzada: [
    {
      marca: "AUDI",
      codigos: [
        {
          valor: "03F919501B",
          obs: ""
        }
      ]
    },
    {
      marca: "SEAT",
      codigos: [
        {
          valor: "03F919501B",
          obs: ""
        }
      ]
    },
    {
      marca: "SKODA",
      codigos: [
        {
          valor: "03F919501B",
          obs: ""
        },
        {
          valor: "04E919501C",
          obs: ""
        }
      ]
    },
    {
      marca: "VOLKSWAGEN",
      codigos: [
        {
          valor: "03F919501",
          obs: ""
        },
        {
          valor: "03F919501A",
          obs: ""
        },
        {
          valor: "03F919501B",
          obs: ""
        }
      ]
    },
  ]
},
] 