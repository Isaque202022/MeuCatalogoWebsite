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
    quantTerminais: 0
  }
}

f_input_descricao1.addEventListener('keyup', ()=> {
  filtros.descricao[0] = f_input_descricao1.value
  filtrarProdutos()

  if (f_input_descricao1.value){
    f_input_descricao1.closest('tr').querySelector('.resetar-campo').classList.remove('invisivel')
  }
  else if(!filtros.descricao[0] && !filtros.descricao[1]){
    f_input_descricao1.closest('tr').querySelector('.resetar-campo').classList.add('invisivel')
  }
  
})
f_input_descricao2.addEventListener('keyup', ()=> {
  filtros.descricao[1] = f_input_descricao2.value
  filtrarProdutos()

  if (f_input_descricao2.value){
    f_input_descricao1.closest('tr').querySelector('.resetar-campo').classList.remove('invisivel')
  }
  else if(!filtros.descricao[0] && !filtros.descricao[1]){
    f_input_descricao2.closest('tr').querySelector('.resetar-campo').classList.add('invisivel')
  }
})
// f_input_referencia.addEventListener('keyup', ()=>{
//   filtros.referencia = f_input_referencia.value
//   filtrarProdutos()
// })  
f_input_codCruzado.addEventListener('keyup', ()=>{
  filtros.codCruzado = f_input_codCruzado.value
  filtrarProdutos()
  if (f_input_codCruzado.value){
    f_input_codCruzado.closest('tr').querySelector('.resetar-campo').classList.remove('invisivel')
  }
  else if(!f_input_codCruzado.value){
    f_input_codCruzado.closest('tr').querySelector('.resetar-campo').classList.add('invisivel')
  }
})  
f_select_encaixe.addEventListener('change', ()=>{
  filtros.propriedades.quantTerminais = Number(f_select_encaixe.value)
  filtrarProdutos()
  if (f_select_encaixe.value){
    f_select_encaixe.closest('tr').querySelector('.resetar-campo').classList.remove('invisivel')
  }
  else {
    f_select_encaixe.closest('tr').querySelector('.resetar-campo').classList.add('invisivel')
  }
})
f_select_ano.addEventListener('change', ()=>{
  filtros.aplicacao.ano = f_select_ano.value
  filtrarProdutos()
  if (f_select_ano.value){
    f_select_ano.closest('tr').querySelector('.resetar-campo').classList.remove('invisivel')
  } else {
    f_select_ano.closest('tr').querySelector('.resetar-campo').classList.add('invisivel')
  }
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
  if (listaMarcasProdSelected.length){
    f_select_marca.closest('tr').querySelector('.resetar-campo').classList.remove('invisivel')
  }
  
})

contarOcorrenciaFiltros()