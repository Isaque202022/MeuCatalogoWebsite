let prodSelecionado = { obj: null, elemento: null }
const bodyTableProd = document.getElementById('table-produtos').querySelector('tbody')
const midiaEvidenciaSidebar = document.querySelector('.sidebar').querySelector('.img-container')
const menuMidiaSidebar = document.querySelector('.sidebar').querySelector('.menu-imgs')
const midiaEvidenciaModal = document.querySelector('.modal-midia').querySelector('.tela')
const menuMidiaModal = document.querySelector('.modal-midia').querySelector('.menu-imgs')
const indicadorImgSidebarAtual = document.getElementById('indicador-img-atual')
const indicadorImgSidebarLength = document.getElementById('length-lista-imgs')
let indiceImgSelecionada = 0
let gerarMenuImgs = true
let sequenciaParaOrdenar = ['descricao','marca','referencia']
const labelMarcaProduto = document.querySelector('.marca-th').querySelector('span')
const labelRefProduto = document.querySelector('.ref-th').querySelector('span')
const labelDescProduto = document.querySelector('.desc-th').querySelector('span')
let mostrarApenasProdutosFixados = false
const modalFiltrar = document.querySelector('.modal-filtrar')
const containerTableProd = document.querySelector('.table-container')
let quantFiltros = 0
const labelQuantItens = document.getElementById('total-itens-visiveis')
let quantOcorrenciaFiltros = 0


/* sidebar info */
//const marcaRef = document.querySelector('.marca-ref').querySelector('.valor-aqui')
const obs = document.querySelector('.sidebar').querySelector('.obs').querySelector('.valor-aqui')
const infoConteudoProd = document.querySelector('.sidebar').querySelector('.conteudo-emb').querySelector('.valor-aqui')
const infoProp = document.querySelector('.sidebar').querySelector('.propriedades').querySelector('.valor-aqui')

/* modal filtros */
const selectMarcas = document.querySelector('.modal-filtrar').querySelector('#select-marca')
const containerMarcasSelecionadas = document.querySelector('.modal-filtrar').querySelector('.marca-selecionadas')
let listaMarcasProd = []
let listaMarcasProdSelected = []
// montadora
const inputMontadoraHandcraft = document.querySelector('.select-montadora-handcraft').querySelector('input')
const dropMontadoraHandcraft = document.querySelector('.select-montadora-handcraft').querySelector('.drop')
const containerMontadorasSelecionadas = document.querySelector('.modal-filtrar').querySelector('.montadoras-selecionadas')
const inputMontadora = document.getElementById('input-montadora')
let listaMontadoras = []
let listaMontadorasSelecionadas = []
// veiculo
const inputVeiculoHandcraft = document.querySelector('.select-veiculo-handcraft').querySelector('input')
const dropVeiculoHandcraft = document.querySelector('.select-veiculo-handcraft').querySelector('.drop')
const containerVeiculosSelecionados = document.querySelector('.modal-filtrar').querySelector('.veiculos-selecionados')
const inputVeiculo = document.getElementById('input-veiculo')
let listaVeiculos = []
let listaVeiculosSelecionadas = []

/* elementos/campos do filtros modal */
const f_input_descricao1 = document.getElementById('campo-descricao1')
const f_input_descricao2 = document.getElementById('campo-descricao2')
const f_input_codCruzado = document.getElementById('campo-cod-cruzado')
const f_select_marca = document.getElementById('select-marca')
const f_select_ano = document.getElementById('select-ano-veiculo')
const f_select_encaixe = document.getElementById('select-encaixe')

// tabela de carros aplicacoes
const aplic_carros_tbody = document.querySelector('.aplic-carros-tb-container').querySelector('tbody')

// codigos similares
const conversoesListaContainer = document.querySelector('.conversoes').querySelector('.lista')


/* COLOCAR ID NOS PRODUTOS */
produtos.forEach((b,indice) => {
  produtos[indice].id = 'prod-'+indice
  produtos[indice].fixado = false
  produtos[indice].visivel = true
  produtos[indice].aplicacao.forEach(aplic =>{
    aplic.importancia = 0
    aplic.carros.forEach(carro =>{
      carro.importancia = 0
    })
  })
})