function criarTd(chave, produto){
  const td = document.createElement('td')
  if (typeof(produto[chave]) == 'string') produto[chave]=produto[chave].toUpperCase()
  td.textContent = produto[chave]
  return td
}

function renderizarTabela(){
  tableBody.innerHTML = ''
  produtos.forEach((produto,indice) => {
    if (!produto.visible) return
    const linha = document.createElement('tr')

    // escolher quais chaves do produto serao colocadas no table
    // é passado o nome da chave do produto para criar o th da linha
    // na ordem exata dos th de thead
    linha.appendChild(criarTd('marca', produto)) 
    linha.appendChild(criarTd('referencia', produto)) 
    linha.appendChild(criarTd('pino', produto)) 
    linha.appendChild(criarTd('lado', produto)) 
    linha.appendChild(criarTd('descricao', produto)) 
    linha.id = indice
    tableBody.appendChild(linha)
  }); 

  
  document.querySelector('tbody').querySelectorAll('tr').forEach((linha,indice) => {
    if (indice==0) {
      linha_selecionada = linha
      linha_selecionada.classList.add('linha-selecionada')
      i_produto_selecinado = Number(linha_selecionada.id)
      indice_imagem = 0
      setImage()
      mostrarTextoProduto()
    }
    linha.addEventListener('click', () => {
      if (linha_selecionada){
        linha_selecionada.classList.remove('linha-selecionada')
      }
      linha_selecionada = linha
      i_produto_selecinado = Number(linha_selecionada.id)
      linha_selecionada.classList.add('linha-selecionada')
      indice_imagem = 0
      setImage()
      mostrarTextoProduto()
    })
  })
  
  tableBody.focus();
  tableContainer.scrollTop = 0 // Tem que ser depois do foco, senao nao funciona
}

function setImage(){
  
  imgView.src = pegarImagem()
  imgFullscreen.src = imgView.src

  imgView.onerror = function() {
    imgView.src = 'imagens/img-not-found.png'
  }
  
  
  // fracao
  document.getElementById('fracao1-2').textContent = indice_imagem+1
  document.getElementById('fracao2-2').textContent = produtos[i_produto_selecinado].imagens.length
}

function pegarImagem(){
  if (!linha_selecionada) return 'imagens/img-not-found.png'

  const imgs = produtos[Number(linha_selecionada.id)].imagens

  if (imgs.length == 0) {
    return 'imagens/sem-imagem.png'
  }
  else if (imgs[indice_imagem].replaceAll(' ','') == ''){
    return 'imagens/sem-imagem.png'
  }
  else {
    return `imagens/${imgs[indice_imagem]}`
  }
}

function clicarParaAmplicarImg(){
  fullscreen.classList.remove('esconder')
}

function cliqueNaImagemAmpliada(event, fullscreen){
  const btnE = fullscreen.querySelector('.btn-esq').querySelector('div')
  const iE = btnE.querySelector('i')
  const btnD = fullscreen.querySelector('.btn-dir').querySelector('div')
  const iD = btnD.querySelector('i')
  const img = fullscreen.querySelector('img')
  if (
    event.target == btnE || 
    event.target == iE || 
    event.target == btnD || 
    event.target == iD || 
    event.target == img){} else {
      fullscreen.classList.add('esconder')
      tableBody.focus();
    } 
}

function trocarImagem(x){
  indice_imagem += x
  if (indice_imagem < 0 || indice_imagem >= produtos[i_produto_selecinado].imagens.length){
    indice_imagem -= x
  }
  
  setImage()


}

function mostrarTextoProduto(){
  const marca = produtos[i_produto_selecinado].marca.toUpperCase()
  const ref = produtos[i_produto_selecinado].referencia.toUpperCase()
  document.querySelector('.marca-ref').textContent = `${marca} ${ref}`

  const obs = produtos[i_produto_selecinado].observacao
  document.querySelector('.observacoes').textContent = obs

  // filtrar as aplicacoes por filtro de montadoras e modelos
  produtos[i_produto_selecinado].aplicacoes.sort((a,b) => {
    if (a.montadora == b.montadora){
      return a.modelo.localeCompare(b.modelo)
    }
    return a.montadora.localeCompare(b.montadora)
  })
  document.querySelector('.aplicacoes').innerHTML = ''

  produtos[i_produto_selecinado].aplicacoes.forEach((aplicacao, indice) => {
    const divMontadora = document.createElement('div')
    divMontadora.classList.add('nome-montadora')
    const divModelo = document.createElement('div')

    divMontadora.textContent = aplicacao.montadora.toUpperCase()
    divModelo.innerHTML = `
    <span class='${modeloDestaque.toUpperCase()==aplicacao.modelo.toUpperCase()?"modelo-destaque":""}'>
     ${aplicacao.modelo.toUpperCase()}</span>
     ${aplicacao.complemento.toUpperCase()}`
    
    if (indice == 0){
      document.querySelector('.aplicacoes').appendChild(divMontadora)
    }
    if (indice>0){
      if (produtos[i_produto_selecinado].aplicacoes[indice].montadora != 
          produtos[i_produto_selecinado].aplicacoes[indice-1].montadora) {
        document.querySelector('.aplicacoes').appendChild(divMontadora)
      }
    }
    
    document.querySelector('.aplicacoes').appendChild(divModelo)
  })


}

function ordenarPor(filtro){
  produtos.sort((a,b) => {
    if (typeof(a[filtro]) == 'string') return a[filtro].localeCompare(b[filtro])
    if (typeof(a[filtro]) == 'number') return a[filtro] - b[filtro]
  })
  renderizarTabela()
}

function colocarEventosNosInputsRadio(){
  document.querySelectorAll('.radio').forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.id == 'radio-marca')      ordenarPor('marca')
      if (radio.id == 'radio-referencia') ordenarPor('referencia')
      if (radio.id == 'radio-pino')       ordenarPor('pino')
      if (radio.id == 'radio-lado')       ordenarPor('lado')
      if (radio.id == 'radio-descricao')  ordenarPor('descricao')
    })
    
  })
}

function alimentarTableSelect(id, chave){ // ('select-marca','marca')

  const select = document.getElementById(id)
  select.innerHTML = '<option value=""></option>'
  let lista = []
  
  produtos.forEach(produto => {
    if (!produto.visible) return
    let valor = produto[chave] // 'cofap'
    if (typeof(valor)=='string'){
      valor = valor.replaceAll(' ','').toLowerCase()
    }
    if(!lista.includes(valor)){
      lista.push(valor)
    }
  })
  if (typeof(lista[0])=='string') lista.sort((a,b) => a.localeCompare(b))
  else lista.sort((a,b) => a - b)

  lista.forEach(item => {
    const option = document.createElement('option')
    option.value = item
    option.textContent = typeof(item)=='string'? item.toUpperCase() : item
    select.appendChild(option)
  })
}

function filtrarProdutos(){
  
  produtos.forEach(produto => {
    produto.visible = true
    Object.keys(filtros).forEach(chave => {

      if (chave=='aplicacoes'){
        produto.visible = filtrarPorAplicacoes(produto)
        return
      }

      let v_filtro = filtros[chave].value.toString()
      let v_produto = produto[chave].toString()

      
      v_filtro = v_filtro.toLowerCase()
      v_produto = v_produto.toLowerCase()
      
      if (filtros[chave].ehInput){
        if(!v_produto.includes(v_filtro)) produto.visible = false
      } else {
        if (v_produto != v_filtro) produto.visible = false
      }

      
    })
  })

  renderizarTabela()

  // atualizar/alimentar table selects
  selects.forEach(item => {
    const select = document.getElementById(item.id)
    const salvarValor = select.value

    alimentarTableSelect(item.id, item.chave)

    select.value = salvarValor
    if (salvarValor == '') delete filtros[item.chave]
  })
}

function eventoChangeInputSelect(elemento, chave, ehInput){
  if (elemento.value == '') delete filtros[chave]
  else filtros[chave] = {value:elemento.value, ehInput:ehInput}
  
  filtrarProdutos()
}

function alimentarSelectMontadoraModelo(){
  const selectA = document.getElementById('select-marca-carro')
  selectA.innerHTML = '<option value=""></option>'
  const selectB = document.getElementById('select-modelo-carro')
  selectB.innerHTML = '<option value=""></option>'
  
  let listaMontadoras = []
  let listaModelos = []

  produtos.forEach(produto => {
    produto.aplicacoes.forEach(aplicacao => {
      const t_montadora = aplicacao.montadora.replaceAll(' ','').toLowerCase()
      if (!listaMontadoras.includes(t_montadora)){
        listaMontadoras.push(t_montadora)
      }
      const t_modelo = aplicacao.modelo.replaceAll(' ','').toLowerCase()
      if (!listaModelos.includes(t_modelo)){
        listaModelos.push(t_modelo)
      }
    })
  })

  listaMontadoras.sort((a,b) => a.localeCompare(b))
  listaModelos.sort((a,b) => a.localeCompare(b))

  listaMontadoras.forEach(item => {
    const option = document.createElement('option')
    option.value = item
    option.textContent = item.toUpperCase()
    selectA.appendChild(option)
  })
  listaModelos.forEach(item => {
    const option = document.createElement('option')
    option.value = item
    option.textContent = item.toUpperCase()
    selectB.appendChild(option)
  })
}

function atualizarCarrosEspecificosDaMarca(marca){
  let lista = []

  produtos.forEach(produto => {
    produto.aplicacoes.forEach(aplicacao => {
      if (aplicacao.montadora.replaceAll(' ','').toLowerCase() == marca){
        const modelo = aplicacao.modelo.toLowerCase()
        if (!lista.includes(modelo)){
          lista.push(modelo)
        }
      }
    })
  })
  lista.sort((a,b) => a.localeCompare(b))
  const selectModelo = document.getElementById('select-modelo-carro')
  selectModelo.innerHTML = '<option value=""></option>'
  lista.forEach(item => {
    const option = document.createElement('option')
    option.value = item
    option.textContent = item.toUpperCase()
    selectModelo.appendChild(option)
  })
}

function procurarCarroPorMontadora(select){
  const value = select.value.replaceAll(' ','').toLowerCase()
  if (value=='') alimentarSelectMontadoraModelo()
  else {
    atualizarCarrosEspecificosDaMarca(value)
  }

  filtros.aplicacoes = {montadora: value, modelo: ''}
  filtrarProdutos()
}

function filtrarModeloCarro(select) {
  
  filtros.aplicacoes.modelo = select.value
  modeloDestaque = select.value
  filtrarProdutos()
}

function filtrarPorAplicacoes(produto){
  for (let aplicacao of produto.aplicacoes){
    if(filtros.aplicacoes.montadora && filtros.aplicacoes.modelo==''){
      console.log('filtros.aplicacoes.montadora')
      let p_montadora = aplicacao.montadora.replaceAll(' ','').toLowerCase()
      if (filtros.aplicacoes.montadora == p_montadora) return true
    }
    if (filtros.aplicacoes.modelo){
      console.log('filtros.aplicacoes.modelo')
      let p_modelo = aplicacao.modelo.toLowerCase()
      if (filtros.aplicacoes.modelo == p_modelo) return true
    } 
  }
  if (filtros.aplicacoes.modelo == '' && filtros.aplicacoes.montadora=='') {
    return true
  }
  else {
    return false
  }
}

function percorrerLinhasComTeclado() {

  tableContainer.scrollTop = 0 // vai para o inicio do scroll
  tableBody.addEventListener('keydown', (e) => {
    
    
    //elemento.getBoundingClientRect().top 
    // pega a distancia do topo do elemento até o topo da pagina
    // o body da pagina por exemplo retornaria 0

    if (e.key == 'ArrowUp'){
      e.preventDefault()
      if (!linha_selecionada.previousElementSibling) return
      linha_selecionada.classList.remove('linha-selecionada')
      linha_selecionada = linha_selecionada.previousElementSibling
      linha_selecionada.classList.add('linha-selecionada')

      // colocar imagem no view
      i_produto_selecinado = Number(linha_selecionada.id)
      indice_imagem = 0
      setImage()
      mostrarTextoProduto()

      // calculo para subir a barra de rolagem apenas o necessario
      const thead = document.querySelector('thead')
      h_thead = tableContainer.getBoundingClientRect().top + thead.getBoundingClientRect().height 
      h_linha = linha_selecionada.getBoundingClientRect().top
      console.log(h_thead, h_linha)
      if (h_linha<h_thead){
        tableContainer.scrollTop -= h_thead - h_linha
      }
    }
    
    if (e.key == 'ArrowDown'){
      e.preventDefault()
      if (!linha_selecionada.nextElementSibling) return
      linha_selecionada.classList.remove('linha-selecionada')
      linha_selecionada = linha_selecionada.nextElementSibling
      linha_selecionada.classList.add('linha-selecionada')

      // colocar imagem no view
      i_produto_selecinado = Number(linha_selecionada.id)
      indice_imagem = 0
      setImage()
      mostrarTextoProduto()

      // calculo para descer a barra de rolagem apenas o necessário
      h_container = tableContainer.getBoundingClientRect().top + tableContainer.getBoundingClientRect().height
      h_linha = linha_selecionada.getBoundingClientRect().top + linha_selecionada.getBoundingClientRect().height
      if (h_linha>h_container){
        tableContainer.scrollTop += h_linha-h_container
      }
    }
  })
}