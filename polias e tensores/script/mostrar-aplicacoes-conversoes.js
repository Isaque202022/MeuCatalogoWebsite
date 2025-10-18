function criarLinhaCarro(modelo, ano, complemento) {
  const tr = document.createElement('tr')
  const tdModelo = document.createElement('td')
  tdModelo.textContent = modelo

  modelo = modelo.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase()
  modelo.replaceAll(' ','')
  if (modelo.includes(filtros.carro) && filtros.carro != ""){
    tdModelo.style.color = '#c74e16'
    tdModelo.style.fontWeight = 'bold'
  }

  tr.appendChild(tdModelo)
  const tdAno = document.createElement('td')
  tdAno.textContent = ano
  tr.appendChild(tdAno)
  const tdComplemento = document.createElement('td')
  tdComplemento.textContent = complemento
  tr.appendChild(tdComplemento)
  return tr
}

function gerarBodyTabela(produto) {
  const tbody = document.createElement('tbody')
  produto.aplicacoes.forEach((aplic,i) => {
    let fazerTrMontadora = false
    if (i>0){
      const montadoraAnterior = produto.aplicacoes[i-1].montadora
      if (aplic.montadora != montadoraAnterior) {
        fazerTrMontadora = true
      }
    } else {fazerTrMontadora = true}
    if (fazerTrMontadora){
      const tr = document.createElement('tr')
      const td = document.createElement('td')
      td.textContent = aplic.montadora.toUpperCase()
      td.classList.add('display-montadora')
      td.colSpan = '3'
      tr.appendChild(td)
      tbody.appendChild(tr)
    }

    const trCarro = criarLinhaCarro(aplic.modelo, aplic.ano, aplic.complemento)
    tbody.appendChild(trCarro)
  });

  const body = document.getElementById('table-aplicacoes').querySelector('tbody')
  body.innerHTML = tbody.innerHTML
  const title = document.querySelector('.d-aplicacoes').querySelector('h3')
  title.textContent = `${produto.marca.toUpperCase()} ${produto.referencia.toUpperCase()}`
}

function gerarListaConversoes(lista) {
  const container = document.querySelector('.lista-conversoes')
  
  container.innerHTML = ''
  function criarDiv(texto, classe) {
    const div = document.createElement('div')
    div.textContent = texto.toUpperCase()
    div.classList.add(classe)

    texto = texto.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase()
    texto.replaceAll(' ','')
    if (classe=='codigo' && texto.includes(filtros.referencia) && filtros.referencia!=""){
      div.style.color = '#c74e16'
      div.style.fontWeight = 'bold'
    }

    container.appendChild(div)
  }
  for (let item of lista){
    criarDiv(item.marca, 'marca')
    for (let codigo of item.codigos){
      criarDiv(codigo, 'codigo')
    }
  }
}



// PARA QUANDO O DISPLAY MODAL ESTIVER SENDO VISTO
document.querySelectorAll('.modal').forEach(modal => {
  document.body.addEventListener('click',(e)=>{
    if (!modal.classList.contains('esconder')){
      const selecao = window.getSelection().toString();
      if (e.target == modal && selecao.length==0){
        modal.classList.add('esconder')
        document.body.style.overflow = 'visible'
      }
    }
  })
  document.body.addEventListener('keyup',(e)=>{
    if (!modal.classList.contains('esconder')){
      if (e.key == 'Escape') {
        modal.classList.add('esconder')
        document.body.style.overflow = 'visible'
      }
    }
  })
})


function mostrarAplicacoes(indice) {
  const displayAplicacoes = document.querySelector('.display-aplicacoes')
  displayAplicacoes.classList.remove('esconder')
  gerarBodyTabela(produtos[indice])
  gerarListaConversoes(produtos[indice].referenciasCruzadas)
  document.body.style.overflow = 'hidden'
}