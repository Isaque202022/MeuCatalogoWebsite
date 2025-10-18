const produtos = [
  {
    marca: "cofap",
    referencia: "h123",
    pino: 17,
    lado: "esquerdo",
    descricao: "amortecedor palio traseiro"
  },
  {
    marca: "monroe",
    referencia: "a45",
    pino: 15,
    lado: "direito",
    descricao: "amortecedor civic dianteiro"
  },
  {
    marca: "nakata",
    referencia: "z99",
    pino: 18,
    lado: "esquerdo",
    descricao: "amortecedor corolla 2012"
  },
  {
    marca: "hipper",
    referencia: "x7",
    pino: 20,
    lado: "direito",
    descricao: "amortecedor uno fire"
  },
  {
    marca: "fabrini",
    referencia: "b12",
    pino: 14,
    lado: "esquerdo",
    descricao: "amortecedor gol g5 dianteiro"
  },
  {
    marca: "cofap",
    referencia: "c88",
    pino: 17,
    lado: "direito",
    descricao: "amortecedor siena traseiro"
  },
  {
    marca: "kayaba",
    referencia: "k32",
    pino: 19,
    lado: "esquerdo",
    descricao: "amortecedor hilux"
  },
  {
    marca: "nakata",
    referencia: "m55",
    pino: 16,
    lado: "direito",
    descricao: "amortecedor fiesta"
  },
  {
    marca: "hipper",
    referencia: "p70",
    pino: 17,
    lado: "esquerdo",
    descricao: "amortecedor palio economy"
  },
  {
    marca: "monroe",
    referencia: "q21",
    pino: 13,
    lado: "direito",
    descricao: "amortecedor focus 2008"
  }
];
produtos.forEach(produto  => produto.visible = true)
const filtros = {
  //marca: {value: 'nakata', ehInput: false},
  //referencia: {value: '2', ehInput: true},
  pino: {value: 17, ehInput: false},
  //lado: {value: 'esquerdo', ehInput: false},
  descricao: {value: 'palio', ehInput: true},
}

produtos.forEach(produto => {
  produto.visible = true
  Object.keys(filtros).forEach(chave => {
    let v_filtro = filtros[chave].value.toString()
    let v_produto = produto[chave].toString()

    
    v_filtro = v_filtro.replaceAll(' ','').toLowerCase()
    v_produto = v_produto.replaceAll(' ','').toLowerCase()
    
    if (filtros[chave].ehInput){
      if(!v_produto.includes(v_filtro)) produto.visible = false
    } else {
      if (v_produto != v_filtro) produto.visible = false
    }
  })
})


// renderizar
produtos.forEach((produto, indice) => {
  if (produto.visible) {
    console.log(`${indice+1} marca: ${produto.marca}     referencia: ${produto.referencia}        pino: ${produto.pino}      lado: ${produto.lado}      descricao: ${produto.descricao}\n`)
  }
})