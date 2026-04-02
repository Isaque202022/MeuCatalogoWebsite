const filtros = {
  marca: [],
  referencia: '',
  codCruzado: '',
  descricao: ['',''],
  aplicacao: {
    montadoras: [],
    veiculos: [],
    ano: ''
  },
  propriedades: {
    posicao: '',
    tamanho: {de:null, ate:null}
  }
}

f_input_descricao1.addEventListener('keyup', ()=> {
  filtros.descricao[0] = f_input_descricao1.value
  filtrarProdutos()
})
f_input_descricao2.addEventListener('keyup', ()=> {
  filtros.descricao[1] = f_input_descricao2.value
  filtrarProdutos()
})
// f_input_referencia.addEventListener('keyup', ()=>{
//   filtros.referencia = f_input_referencia.value
//   filtrarProdutos()
// })  
f_input_codCruzado.addEventListener('keyup', ()=>{
  filtros.codCruzado = f_input_codCruzado.value
  filtrarProdutos()
})  
f_select_posicao.addEventListener('change', ()=> {
  filtros.propriedades.posicao = f_select_posicao.value
  filtrarProdutos()
})
f_select_tamanho_de.addEventListener('change', ()=>{
  filtros.propriedades.tamanho.de = f_select_tamanho_de.value
  verificarTamanhoPalhetas(f_select_tamanho_de.value, 'de')
  filtrarProdutos()
})
f_select_tamanho_ate.addEventListener('change', ()=>{
  filtros.propriedades.tamanho.ate = f_select_tamanho_ate.value
  verificarTamanhoPalhetas(f_select_tamanho_ate.value, 'ate')
  filtrarProdutos()
})
f_select_ano.addEventListener('change', ()=>{
  filtros.aplicacao.ano = f_select_ano.value
  filtrarProdutos()
})
f_select_marca.addEventListener('change', ()=>{
  let valor = f_select_marca.value
  let indiceRetirar = null
  for (let x=0; x<listaMarcasProd.length; x++){
    if (valor == listaMarcasProd[x]) indiceRetirar = x
  }
  listaMarcasProd.splice(indiceRetirar,1)
  listaMarcasProdSelected.push(valor)

  preencherSelectMarcas()
  renderizarMarcasSelecionadas()
  filtrarProdutos()
})