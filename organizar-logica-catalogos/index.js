function criarTH(objeto){
  if (!objeto.label && objeto.ordenarCrescente){
    const message = "Voce quer criar um input radio mas nao colocou label(label) na tabela.\nFuncao 'criarTH'\nO id de radio, para qual label vai se direcionado, eh a juncao da palavra 'radio'+objeto.label"
    throw new Error(message)
  }

  const radioLabelContainer = document.createElement('div')

  const label = document.createElement('label')
  label.textContent = objeto.label
  label.setAttribute('for','radio-'+objeto.label)

  const radio = document.createElement('input')
  if (objeto.ordenarCrescente){
    radio.type = 'radio'
    radio.name = 'ordem-crescente'
    radio.id = 'radio-'+objeto.label
    radioLabelContainer.appendChild(radio)
  }
  radioLabelContainer.appendChild(label)
  
  let EleFiltro = null
  if (objeto.filtroElemento)  {
    EleFiltro = document.createElement(objeto.filtroElemento)
    EleFiltro.id = objeto.filtroElemento+'-'+objeto.chave
    EleFiltro.chave = objeto.chave
    EleFiltro.classList.add('elemento-filtro')
    EleFiltro.setAttribute('autocomplete','off')
  }

  const th = document.createElement('th')
  th.appendChild(radioLabelContainer)
  if (objeto.filtroElemento) th.appendChild(EleFiltro)
  
  // coloca a coluna no thead
  thead.appendChild(th)

  // se filtroElemento for select preencha com options
  if (objeto.filtroElemento == 'select'){
    preencherSelect(EleFiltro.id, objeto.chave)
  }
  
  // colocar evento no elemento de filtrar
  let evento = null
  if (objeto.filtroElemento == 'select') evento = 'change'
  if (objeto.filtroElemento == 'input') evento = 'keyup'
  EleFiltro.addEventListener(evento, (e) => {
    const valor = e.target.value.replaceAll(' ','').toLowerCase() // especialmente para o input text

    if (valor == '') {
      delete filtros[objeto.chave]
    } else {
      filtros[objeto.chave] = {}
      filtros[objeto.chave].value = valor
      if (evento == 'change') filtros[objeto.chave].comoValidar = 'igual'
      if (evento == 'keyup') filtros[objeto.chave].comoValidar = 'contem'
    }
    filtrarProdutos()
    atualizarSelects()
  })

  // colocar evento no input radio para deixar em ordem crescente
  radio.addEventListener('change', () => {
    // para evitar erros logicos, deixe o localeCompare primeiro, porque se der
    // erro ele pula para o outro.
    // porque o inverso nao dá erro, mas não ordena se for string
    try {
      produtos.sort((a,b) => a[objeto.chave].localeCompare(b[objeto.chave]))
    } catch {
      produtos.sort((a,b) => a[objeto.chave] - b[objeto.chave])
    }
    renderizarTabela()
  })  
}

function preencherSelect(id, chave, salvarValor){
  const select = document.getElementById(id)
  select.innerHTML = '<option value=""></option>'

  //pegar valores na lista de produtos
  let valores = []
  produtos.forEach(produto => {
    let valor = produto[chave]
    valor = valor.toString()
    valor = valor.replaceAll(' ','').toLowerCase()
    if (!valores.includes(valor) && produto.visible) valores.push(valor)
  });
  if (valores.length==0 && salvarValor) valores.push(salvarValor)

  valores.sort((a,b) => a.localeCompare(b))

  valores.forEach(valor => {
    const option = document.createElement('option')
    option.value = valor
    option.textContent = valor.toUpperCase()
    select.appendChild(option)
  })
}

function atualizarSelects(){
  const selects = thead.querySelectorAll('select')

  selects.forEach(select => {
    const salvarValor = select.value
    preencherSelect(select.id, select.chave, salvarValor)
    select.value = salvarValor
  })
}

function filtrarProdutos(){

  produtos.forEach(produto => {
    produto.visible = true
    Object.keys(filtros).forEach(chave => {
      if (filtros[chave].comoValidar == 'igual'){
        if (filtros[chave].value != produto[chave]) produto.visible = false
      }
      if (filtros[chave].comoValidar == 'contem'){
        if (!produto[chave].replaceAll(' ','').toLowerCase().includes(filtros[chave].value)) produto.visible = false
      }
    })
  })

  renderizarTabela()
}

function renderizarTabela(){
  tbody.innerHTML = ''
  produtos.forEach(produto => {
    const tr = document.createElement('tr')
    colunas.forEach(coluna => {
      const td = document.createElement('td')
      console.log(produto)
      console.log(coluna.chave)
      td.textContent = produto[coluna.chave].toString().toUpperCase()
      tr.appendChild(td)
    })

    if (produto.visible) tbody.appendChild(tr)
  })
}