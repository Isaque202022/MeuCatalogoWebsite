

produtos.forEach(produto => { produto.visible = true })
//produtos.sort((a,b) => a.descricao.localeCompare(b.descricao))


function ordenarProdutos(valor) {
  if (valor == 'descricao'){
    produtos.sort((a,b) => {
      if (a.descricao === "" && b.descricao === "") return 0
      if (a.descricao === "") return 1
      if (b.descricao === "") return -1
      if (a.descricao === b.descricao) {
        return a.externo - b.externo
      } else {
        return a.descricao.localeCompare(b.descricao)
      }
    })
  }
  else {
    produtos.sort((a,b) => {
      if (a[valor] === 0 && b[valor] === 0) return 0
      if (a[valor] === 0) return 1
      if (b[valor] === 0) return -1
      if (a[valor] === b[valor]) {
        return a.descricao.localeCompare(b.descricao)
      } else {
        return a[valor] - b[valor]
      }
    })
  }
  renderizarProdutos()
}
ordenarProdutos(document.getElementById('ordenar-select').value)

const lightbox = document.querySelector('.imagem-ampliada')
const imgAmp = lightbox.querySelector('img')
let indexAtual = null

const inputsMedidas = document.getElementById('medidas').querySelectorAll('input')
const eraserMedidas = document.getElementById('eraser-medidas')
inputsMedidas.forEach(input => {
  input.addEventListener('keydown', e => {
    
    function inserirLetra(texto, posicao, letra) {
      return texto.slice(0, posicao) + letra + texto.slice(posicao);
    }

    const isNum = /\d/
    const is1Caracter = /^.$/
    let n = isNum.test(e.key)? inserirLetra(input.value, e.target.selectionStart, e.key) : input.value;
    
    if (is1Caracter.test(e.key) && !isNum.test(e.key)) e.preventDefault()
    if (n>200) e.preventDefault()
    
  })
})


// mostrar borracha ao preencher inputs
document.querySelectorAll('input').forEach(input => {
  let grupoInputs = []
  let borracha = null

  function colocarEventoAoPreencherInput(nomeEvento, parametro) {
    input.addEventListener(nomeEvento, ()=>{
      grupoInputs = input.closest('.filtro').querySelectorAll('input')
      borracha = input.closest('.filtro').querySelector('.fa-eraser')

      for (let i of grupoInputs){
        if (i[parametro]){
          borracha.style.visibility = 'visible'
          break
        } else { borracha.style.visibility = 'hidden' }
      }
    })
  }

  if (input.type == 'text') colocarEventoAoPreencherInput('keyup','value')
  if (input.type == 'checkbox') colocarEventoAoPreencherInput('change','checked')
  
})

// limpar inputs ao clicar no borracha
document.querySelectorAll('.fa-eraser').forEach(borracha =>{
  borracha.addEventListener('click', ()=>{
    if (!borracha.closest('.filtro').querySelector('input')) return
    borracha.closest('.filtro').querySelectorAll('input').forEach(input =>{
      if (input.type == 'text') {
        input.value = ''
        input.dispatchEvent(new Event('keyup'))
      }
      if (input.type == 'checkbox') {
        input.checked = false
        input.dispatchEvent(new Event('change'))
      }
      borracha.style.visibility = 'hidden'
    })
  })
})

// esconder opcoes ao clicar no titulo
document.querySelectorAll('.titulo').forEach(titulo => {
  titulo.addEventListener('click', () =>{
    const lista = titulo.parentElement.parentElement.querySelector('.indentacao')
    console.log(lista.style.display == '')
    if (!lista.classList.contains('esconder')) lista.classList.add('esconder')
    else lista.classList.remove('esconder')
  })
})

// essa funcao é uma alternativa de organizacao do grid
// ao filtrar, se aparece poucos itens, para que eles nao fiquem muito separados 
// criase itens com visibility hidden para preencher o espaço vazio e juntar mais os poucos itens filtrados
function adicionarItemFantasma(quant) {
  const container = document.querySelector('.content')
  for (let n=0; n<quant; n++){
    const itemContainer = document.createElement('div')
    itemContainer.classList.add('item-container')
    const item = document.createElement('div')
    item.style.width = '200px'
    item.style.height = '200px'
    item.style.visibility = 'hidden'
    item.classList.add('item')
    item.classList.add('preencher-vazio')
    itemContainer.appendChild(item)
    container.appendChild(itemContainer)
  }
}

function preencherEspacoGrid(){
  const container = document.querySelector('.content')
  // para evitar erro e travar 
  if (container.innerHTML == '') return
  const containerWidth = container.getBoundingClientRect().width

  let somaItens = 0
  let largura = 0
  const itens = document.querySelectorAll('.item-container')
  for (let i=0; i<itens.length; i++) {
    largura = Math.floor(itens[i].getBoundingClientRect().width)
    somaItens += largura
    if (somaItens > containerWidth) break
  }

  let quantosFalta = 0
  if (somaItens+largura<containerWidth){
    console.log(`${containerWidth}-${somaItens}>${largura}`)
    while (containerWidth-somaItens>largura) {
      quantosFalta += 1
      somaItens += largura
    }
    adicionarItemFantasma(quantosFalta)
  }
}

function mostrarMsgAlerta(indice){
  document.querySelector('.display-msg').classList.remove('esconder')
  document.getElementById('msg-aqui').innerText = produtos[indice].alerta
  document.getElementById('titulo-msg').textContent = `${produtos[indice].marca.toUpperCase()} ${produtos[indice].referencia.toUpperCase()}`
}

function renderizarProdutos() {
  const container = document.querySelector('.content')
  container.innerHTML = ''
  
  produtos.forEach((produto, indice) => {
    if (!produto.visible) return
    // containers
    const itemContainer = document.createElement('div')
    itemContainer.classList.add('item-container')
    itemContainer.id = 'pd'+indice
    const item = document.createElement('div')
    item.classList.add('item')

    // elemento imagem
    const imgDisplay = document.createElement('div')
    imgDisplay.classList.add('img-display')

    const btnEsq = document.createElement('div')
    btnEsq.classList.add('img-btn')
    btnEsq.id = 'btn-esq'
    btnEsq.addEventListener('click', ()=> passarImagemItem(-1, indice))
    let pBtn = document.createElement('p')
    pBtn.innerHTML = '&lt;'
    btnEsq.appendChild(pBtn)
    

    const btnDir = document.createElement('div')
    btnDir.classList.add('img-btn')
    btnDir.id = 'btn-dir'
    btnDir.addEventListener('click', ()=> passarImagemItem(1, indice))
    pBtn = document.createElement('p')
    pBtn.innerHTML = '&gt;'
    btnDir.appendChild(pBtn)
    
    
    const imagemE = document.createElement('img')
    imagemE.src = produto.imagens[0]? 'imagens/'+produto.imagens[0] : 'imagens/sem-imagem.png'
    imagemE.title = produto.tituloImg? produto.tituloImg : ''
    imagemE.addEventListener('click', ()=>{
      ampliarImagem(imagemE, indice)
    })

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    imgContainer.appendChild(imagemE)
    
    if (produto.imagens.length-1) imgDisplay.appendChild(btnEsq)
    imgDisplay.appendChild(imgContainer)
    if (produto.imagens.length-1) imgDisplay.appendChild(btnDir)

    // img menu

    const imgMenu = document.createElement('div')
    imgMenu.classList.add('img-menu')
    for (let i in produto.imagens){
      if (i==0) imgMenu.innerHTML += '<div id="maior"> <p>&#8226;</p> </div>'
      else imgMenu.innerHTML += '<div> <p>&#8226;</p> </div>'
    }

    

    // info
    const infoE = document.createElement('div')
    infoE.classList.add('info')
    
    // titulo = marca + referencia
    const infoTitulo = document.createElement('div')
    infoTitulo.classList.add('info-titulo')
    const pInfo = document.createElement('p')
    pInfo.textContent = produto.marca.toUpperCase()+" "+produto.referencia.toUpperCase()
    infoTitulo.appendChild(pInfo)
    infoE.appendChild(infoTitulo)

    pInfo.addEventListener('click',()=>{
      const selecao = window.getSelection().toString();
      if (selecao.length==0) mostrarAplicacoes(indice)
    })

    // detalhes e alerta-icon
    const detalhes = document.createElement('div')
    detalhes.classList.add('detalhes')
    const detalhesContainer = document.createElement('div')
    detalhesContainer.classList.add('detalhesContainer')
    detalhesContainer.appendChild(detalhes)
    const alerta = document.createElement('div')
    alerta.innerHTML = `<i class="fa-solid fa-triangle-exclamation" onclick="mostrarMsgAlerta(${indice})"></i>`
    alerta.classList.add('alerta')
    if (produto.alerta){
      detalhesContainer.appendChild(alerta)
    }

    // medidas
    const divMed = document.createElement('div')
    divMed.classList.add('medidas')
    const pMed = document.createElement('p')
    function createSpan (text, classe){
      const s = document.createElement('span')
      s.textContent = text
      if (classe) s.classList.add(classe)
      return s
    }
    if (produto.externo) { 
      pMed.appendChild(createSpan('EXT:'));  
      pMed.appendChild(createSpan(produto.externo, 'med'))
    }
    if (produto.interno) { 
      pMed.appendChild(createSpan('INT:'));  
      pMed.appendChild(createSpan(produto.interno, 'med'))
    }
    if (produto.altura) { 
      pMed.appendChild(createSpan('ALT:'));  
      pMed.appendChild(createSpan(produto.altura, 'med'))
    }

    divMed.appendChild(pMed)
    detalhes.appendChild(divMed)


    // descricao
    const divDes = document.createElement('div')
    divDes.classList.add('descricao')
    const pDes = document.createElement('p')
    pDes.textContent = produto.descricao.toUpperCase()
    divDes.appendChild(pDes)
    detalhes.appendChild(divDes)

    // outros filtros
    const outrosFiltros = document.createElement('div')
    outrosFiltros.classList.add('outros-filtros')
    function colocarNomeDosFiltros(lista){
      lista.forEach(item => {
        const p = document.createElement('p'); 
        p.textContent = item; 
        outrosFiltros.appendChild(p)
      })
    }
    colocarNomeDosFiltros(produto.correia)
    colocarNomeDosFiltros(produto.parede)
    colocarNomeDosFiltros(produto.material)
    detalhes.appendChild(outrosFiltros)

    infoE.appendChild(detalhesContainer)

    // juntar tudo
    item.appendChild(imgDisplay)
    item.appendChild(imgMenu)
    item.appendChild(infoE)
    itemContainer.appendChild(item)
    container.appendChild(itemContainer)
  });
  preencherEspacoGrid()
}
renderizarProdutos()

function passarImagemItem(n, index){
  const img = document.getElementById('pd'+index).querySelector('img')
  const listaImagens = produtos[index].imagens
  const pontos = document.getElementById('pd'+index).querySelector('.img-menu').querySelectorAll('div')
  
  function acharPosicaoAtualImagem() {
    for (let i=0; i<pontos.length; i++){
      if (pontos[i].id == 'maior') {
        pontos[i].id = ''
        return i
      }
    }
  }
  
  let posicaoAtualImagem = acharPosicaoAtualImagem()
  if (posicaoAtualImagem+n>=0 && posicaoAtualImagem+n<listaImagens.length){
    posicaoAtualImagem += n
    pontos[posicaoAtualImagem].id = 'maior'
    img.src = 'imagens/'+listaImagens[posicaoAtualImagem]
  } 
  else if (posicaoAtualImagem+n<0) {
    posicaoAtualImagem = listaImagens.length -1
    pontos[posicaoAtualImagem].id = 'maior'
    img.src = 'imagens/'+listaImagens[posicaoAtualImagem]
  }
  else if (posicaoAtualImagem+n==listaImagens.length) {
    posicaoAtualImagem = 0
    pontos[posicaoAtualImagem].id = 'maior'
    img.src = 'imagens/'+listaImagens[posicaoAtualImagem]
  }
  else {pontos[posicaoAtualImagem].id = 'maior'}
  imgAmp.src = img.src
}

function ampliarImagem(img, index){
  imgAmp.src = img.src
  imgAmp.title = produtos[index].tituloImg? produtos[index].tituloImg : ''
  lightbox.classList.remove('esconder')

  const btnEsq = lightbox.querySelector('#amp-btn-esq')
  const btnDir = lightbox.querySelector('#amp-btn-dir')

  if (produtos[index].imagens.length == 1) {
    btnEsq.classList.add('esconder')
    btnDir.classList.add('esconder')
  } else {
    btnEsq.classList.remove('esconder')
    btnDir.classList.remove('esconder')
  }

  btnEsq.onclick = function() {
    passarImagemItem(-1, index)
  }
  btnDir.onclick = function() {
    passarImagemItem(1, index)
  }

  indexAtual = index
  lightbox.focus()
  
  
}

function imgAmpKeybord(tecla) {
  if (lightbox.classList.contains('esconder')) return
  if (tecla == 'Escape'){
    lightbox.classList.add('esconder')
  }
  if (tecla == 'ArrowLeft') passarImagemItem(-1, indexAtual)
  if (tecla == 'ArrowRight') passarImagemItem(1, indexAtual)
}

lightbox.addEventListener('keyup', (e)=>{
  imgAmpKeybord(e.key)
})

lightbox.addEventListener('click', (e) => {
  if (e.target.classList.contains('amp-img-container')){
    lightbox.classList.add('esconder')
  }
})

// select montadora

function renderizarSelectMontadora() {
  listaMontadoras.sort()
  const select = document.getElementById('select-montadora')
  if (!listaMontadoras.includes('')) {
    select.innerHTML = '<option value=""></option>'
  }
  listaMontadoras.forEach(m => {
    const option = document.createElement('option')
    option.value = m.toLowerCase()
    option.textContent = m.toUpperCase()
    select.appendChild(option)
  })
}

function removerItemLista(item, lista){
  for (let i in lista){
    if (lista[i].toLowerCase() == item.toLowerCase()){
      lista.splice(i, 1)
    }
  }
  return lista
}

function renderizarMontadorasSelecionadas(){
  container.innerHTML = ''
  montadorasSelecionadas.forEach((item, indice) => {
    const div = document.createElement('div')
    div.innerHTML = `
      <span>${item.toUpperCase()}</span>
      <span class='xis' onclick="excluirMontadora(${indice})">x</span>
    `
    container.appendChild(div)
  })
  if (montadorasSelecionadas.length>0){
    borrachaMontadora.style.visibility = 'visible'
  } else {borrachaMontadora.style.visibility = 'hidden'}
  filtros.montadora = montadorasSelecionadas
  filtrarProdutos()
}
function excluirMontadora(indice){
  listaMontadoras.push(montadorasSelecionadas[indice])
  montadorasSelecionadas.splice(indice, 1)
  renderizarSelectMontadora()
  renderizarMontadorasSelecionadas()
}

function selecionarMontadora(select) {
  // remover item do select
  
  listaMontadoras = removerItemLista(select.value, listaMontadoras)
  montadorasSelecionadas.push(select.value)

  renderizarSelectMontadora()
  renderizarMontadorasSelecionadas()

}

function preencherListaMontadoras() {
  produtos.forEach(produto => {
    produto.aplicacoes.forEach(aplic => {
      if (!listaMontadoras.includes(aplic.montadora.toUpperCase())){
        listaMontadoras.push(aplic.montadora.toUpperCase())
      }
    });
  });
}


let listaMontadoras = []
preencherListaMontadoras()
let montadorasSelecionadas = []
const container = document.getElementById('select-montadora').nextElementSibling
const borrachaMontadora = document.getElementById('borracha-montadora')
renderizarSelectMontadora()

borrachaMontadora.addEventListener('click', ()=>{
  for (let i of montadorasSelecionadas) listaMontadoras.push(i);
  montadorasSelecionadas = []
  renderizarMontadorasSelecionadas()
  renderizarSelectMontadora()
  filtros.montadora = []
  filtrarProdutos()
})


