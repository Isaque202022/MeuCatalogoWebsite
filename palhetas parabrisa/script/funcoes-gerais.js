

function filtrarProdutos(){
  for (let p of produtos) {
    p.visivel = true

    // descrição 1
    if (!p.descricao.toLowerCase().includes(filtros.descricao[0].toLowerCase())){
      p.visivel = false
      continue
    }
    // descrição 2
    if (!p.descricao.toLowerCase().includes(filtros.descricao[1].toLowerCase())){
      p.visivel = false
      continue
    }
    // codigo
    filtros.codCruzado = filtros.codCruzado.replace(/[^a-zA-Z0-9]/g,'')
    let encontradoPesqCod = false
    p.referenciaCruzada.forEach(ref => {
      ref.importancia = 0
      ref.codigos.forEach(cod => {
        if (cod.valor.toLowerCase().includes(filtros.codCruzado.toLowerCase())) {
          encontradoPesqCod = true
          cod.importancia = 1
          if (ref.marca.toLowerCase().trim() == p.marca.toLowerCase().trim()){
            ref.importancia = 3 // se for mesma marca e está incluso na pesquisa
          } else {
            ref.importancia = 1
          }
          
        } else {
          cod.importancia = 0
        }
      })
      if (ref.importancia == 0 && ref.marca.toLowerCase().trim() == p.marca.toLowerCase().trim()){
        ref.importancia = 2
      }
      
      ref.codigos = ordenarPorGrauDeImportancia(ref.codigos)
    })
    p.referenciaCruzada = ordenarPorGrauDeImportancia(p.referenciaCruzada)

    if (!encontradoPesqCod && filtros.codCruzado != '' && !p.referencia.toLowerCase().trim().includes(filtros.codCruzado.toLowerCase().trim())) {
      p.visivel = false
      continue
    }

    // marca
    let encontrado = false
    for (let m of filtros.marca){
      m = m.replace(/^ /g,'')
      m = m.replace(/ $/g,'').toLowerCase()
      let marcaProd = p.marca.replace(/^ /g,'')
      marcaProd = p.marca.replace(/ $/g,'').toLowerCase()
      if (m == marcaProd) encontrado = true
    }
    if (!encontrado && filtros.marca.length>0){
      p.visivel = false
      continue
    }
    
    // posição
    if (filtros.propriedades.posicao.trim().toLowerCase() != p.propriedades.posicao.trim().toLowerCase() && filtros.propriedades.posicao != ''){
      p.visivel = false
      continue
    }

    // tamanho
    encontrado = false
    for (let tm of p.propriedades.tamanhos){
      tm = Number(tm.replace(/[^\d+]/g,''))
      let boleano = {de:true,ate:true}
      if (filtros.propriedades.tamanho.de){
        if (tm < Number(filtros.propriedades.tamanho.de)) boleano.de = false
      }
      if (filtros.propriedades.tamanho.ate){
        if (tm > Number(filtros.propriedades.tamanho.ate)) boleano.ate = false
      }
      if (boleano.de && boleano.ate) {
        encontrado = true
        break
      }
    }
    if (!encontrado){
      p.visivel = false
      continue
    }

    // montadora
    encontrado = true
    if (filtros.aplicacao.montadoras[0]) {
      encontrado = false
      for (let aplic of p.aplicacao){
        aplic.importancia = 0
        let mp = aplic.montadora.trim().toLowerCase()
        let mf = filtros.aplicacao.montadoras[0].trim().toLowerCase()

        if (mp == mf) {
          aplic.importancia = 1
          encontrado = true
          break
        }
      }
      // produto universal
      if (p.aplicacao.length == 0) encontrado = true
      p.aplicacao = ordenarPorGrauDeImportancia(p.aplicacao)
    } else {
      for (let aplic of p.aplicacao){
        aplic.importancia = 0
      }
    }

    if (!encontrado){
      p.visivel = false
      continue
    }

    // veiculo
    let veiculoPesq = filtros.aplicacao.veiculos[0]
    encontrado = true
    if (veiculoPesq){
      encontrado = false
      veiculoPesq = veiculoPesq.toLowerCase().trim()
      for (let aplic of p.aplicacao){
        for (let carro of aplic.carros){
          carro.importancia = 0
          let veiculoLoop = carro.nome.toLowerCase().trim()
          if (veiculoLoop == veiculoPesq) {
            encontrado = true
            carro.importancia = 1
            aplic.importancia = 1 
          }
        }
      }
    } else {
      for (let aplic of p.aplicacao){
        for (let carro of aplic.carros){
          carro.importancia = 0
        }
      }
    }
    if (!encontrado){
      p.visivel = false
      continue
    } 
    p.aplicacao = ordenarListaDeAplicacoes(p.aplicacao)    

    // ANO
    // ANO
    encontrado = false

    if (filtros.aplicacao.ano){

      let anoFiltro = filtros.aplicacao.ano
      let veiculoPesq = listaVeiculosSelecionadas[0]?.toLowerCase().trim()

      for (let aplic of p.aplicacao){
        for (let carro of aplic.carros){

          let nome = carro.nome.toLowerCase().trim()

          if (!veiculoPesq || nome == veiculoPesq){

            if (anoDentroIntervalo(anoFiltro, carro.anoInicio, carro.anoFim)){
              encontrado = true
              break
            }

          }

        }
        if (encontrado) break
      }

    } else {
      encontrado = true
    }

    if (!encontrado){
      p.visivel = false
      continue
    }
    
  }

  

  renderizarTabelaProd()
  
  if (prodSelecionado.elemento && prodSelecionado.obj.visivel){
    selecionarProduto(prodSelecionado.elemento)
  } else {
    
    if (bodyTableProd.firstElementChild){
      selecionarProduto(bodyTableProd.firstElementChild)
    }
  }
  // ordenar a lista de veiculos e montadoras pesquisadas
  // para mostrar primeiro na tabela de aplicacoes
  
  carregarAplicacoes()
}
function anoDentroIntervalo(anoFiltro, anoInicio, anoFim){

  anoFiltro = Number(anoFiltro)

  let inicio = anoInicio ? Number((anoInicio.match(/\d{4}/) || [0])[0]) : 0
  let fim = anoFim ? Number((anoFim.match(/\d{4}/) || [0])[0]) : 0

  if (inicio && fim) return anoFiltro >= inicio && anoFiltro <= fim
  if (inicio && !fim) return anoFiltro >= inicio
  if (!inicio && fim) return anoFiltro <= fim

  return true
}
function ordenarPorGrauDeImportancia(lista){
  //return lista.sort((a,b)=> b.importancia - a.importancia)
  let listaCopia = []
  for (let i of lista){ // mesma marca + match
    if (i.importancia == 3){
      listaCopia.push(i)
    }
  }
  for (let i of lista){ // diferente marca porém dentro da pesquisa
    if (i.importancia == 1){
      listaCopia.push(i)
    }
  }
  for (let i of lista){ // mesma marca porém fora da pesquisa
    if (i.importancia == 2){
      listaCopia.push(i)
    }
  } 
  for (let i of lista){ // diferente marca e fora da pesquisa
    if (i.importancia == 0){
      listaCopia.push(i)
    }
  }

  return listaCopia
}
function ordenarListaDeAplicacoes(aplicacao){
  if (!aplicacao) return
  
  aplicacao.sort((a, b) => {
    // prioridade
    if (a.importancia !== b.importancia) {
      return b.importancia - a.importancia
    }
    // ordem alfabética
    return a.montadora.localeCompare(b.montadora)
  })
  for (let app of aplicacao) {
    app.carros.sort((a, b) => {
      // prioridade
      if (a.importancia !== b.importancia) {
        return b.importancia - a.importancia
      }
      // nome + modelo
      let carroA = (a.nome + ' ' + a.modelo).trim()
      let carroB = (b.nome + ' ' + b.modelo).trim()
      return carroA.localeCompare(carroB)
    })
  }

  return aplicacao
}

function ordenarFixados(){
  produtos.sort((a,b)=>{
    if (a.fixado && !b.fixado) return -1
    if (!a.fixado && b.fixado) return 1
    return 0
  })
}


function renderizarTabelaProd() {
  bodyTableProd.innerHTML = ''
  for (let p of produtos) {
    if (mostrarApenasProdutosFixados && !p.fixado) continue
    if (!p.visivel) continue
    

    const linha = document.createElement('tr')
    const fixar = document.createElement('td')
    const marca = document.createElement('td')
    const ref = document.createElement('td')
    const desc = document.createElement('td')

    fixar.classList.add('td-fixar')
    if (p.fixado){
      fixar.innerHTML = '<img src="imagens/pagina/icone-fixar-vermelho.png" class="icone-fixar fixar-vermelho">'
      fixar.title = 'Desafixar'
    } else {
      fixar.innerHTML = '<img src="imagens/pagina/icone-fixar-cinza.png" class="icone-fixar esconder">'
      fixar.title = 'Fixar'
    }
    
    fixar.addEventListener('click', ()=>{
      if (p.fixado) { // clicou porque quer desafixar
        p.fixado = false
      } else { // clicou porque quer fixar
        p.fixado = true
      }
      //ordenarFixados()
      ordenarProdutos()
      renderizarTabelaProd()
      
    })

    marca.classList.add('marca-td')
    ref.classList.add('ref-td')
    desc.classList.add('desc-td')

    p.marca = p.marca.replace(/^ /,'')
    p.marca = p.marca.replace(/ $/,'')
    marca.textContent = p.marca
    ref.textContent = p.referencia
    desc.textContent = p.descricao

    linha.appendChild(fixar)
    linha.appendChild(marca)
    linha.appendChild(ref)
    linha.appendChild(desc)
    linha.id = p.id
    bodyTableProd.appendChild(linha)

    

    linha.addEventListener('click', ()=> {
      selecionarProduto(linha)
    })
    
  }

  
  if (bodyTableProd.innerHTML == ''){
    limparInfosMidias()
    bodyTableProd.innerHTML = '<tr id="mensagem-tabela-prod-vazia" colspan="4"><td colspan="4" style="font-style: italic; text-align: center; padding: 20px;">Nenhum produto encontrado.</td><tr>'
    
  } 
}

function selecionarProduto(linhaProduto) {
  if (document.getElementById('mensagem-tabela-prod-vazia')) return
  
  prodSelecionado.elemento =  linhaProduto
  for (let p of produtos){
    if (p.id == linhaProduto.id){
      prodSelecionado.obj = p
    }
  }

  if (prodSelecionado.obj.fixado==false && mostrarApenasProdutosFixados){
    selecionarProduto(bodyTableProd.firstElementChild)
  }

  Array.from(bodyTableProd.children).forEach(linha => {
    linha.classList.remove('prod-selecionado')
    if (linha.id == prodSelecionado.obj.id) {
      linha.classList.add('prod-selecionado')
    }
  })

  indiceImgSelecionada = 0
  gerarMenuImgs = true
  
  carregarMidia()
  carregarInfo()
  carregarAplicacoes()
}

function carregarMidia() {
  function gerarMidia(indice,ehMenu,classe){
    const arq = imagens[indice]
    const item = document.createElement('div')
    let midia = null

    if (arq.includes('.mp4')) {
      midia = document.createElement('video')
      midia.disablePictureInPicture = true
    }
    else midia = document.createElement('img')
    midia.src = 'imagens/produtos/'+arq

    if (midia.tagName === 'VIDEO') {
      item.classList.add('video-menu')
      if (ehMenu) item.innerHTML += '<img class="playicon" src="imagens/pagina/play-icon.png">'
      else {
        midia.controls = true
        midia.autoplay = true
        midia.muted = true
      }
    }
    if (classe && !ehMenu) midia.classList.add(classe)
    if (classe && ehMenu) item.classList.add(classe)
    item.appendChild(midia)

    item.addEventListener('click', ()=> {
      if (ehMenu) {
        mudarImg(Number(indice))
        const miniaturas = document.querySelectorAll('.midia-miniatura')
        for (let mini of miniaturas){
          mini.classList.remove('img-selecionada')
        }
        item.classList.add('img-selecionada')
      }
    })

    if (indice==0 && gerarMenuImgs) item.classList.add('img-selecionada')
    

    if (ehMenu) return item
    else return midia
  }

  const imagens =  prodSelecionado.obj.imagens 
  midiaEvidenciaSidebar.innerHTML = ''
  //menuMidiaSidebar.innerHTML = ''
  midiaEvidenciaModal.innerHTML = ''
  if (gerarMenuImgs) menuMidiaModal.innerHTML = ''
  indicadorImgSidebarAtual.textContent = '#'
  indicadorImgSidebarLength.textContent = '0'
  
  
  if (imagens.length>0) {
    indicadorImgSidebarAtual.textContent = indiceImgSelecionada+1
    indicadorImgSidebarLength.textContent = imagens.length

    midiaEvidenciaSidebar.appendChild(gerarMidia(indiceImgSelecionada,false,'midia-tela-display'))
    midiaEvidenciaModal.appendChild(gerarMidia(indiceImgSelecionada, false,'midia-tela-display'))
    if (gerarMenuImgs){
      for(let x in imagens){
        menuMidiaModal.appendChild(gerarMidia(x,true,'midia-miniatura'))
        //menuMidiaSidebar.appendChild(gerarMidia(x,true,'midia-miniatura'))
      }
      gerarMenuImgs = false
    }
    
  }
  
}

function mudarImg(indiceAlvo){
  let imagensLength = prodSelecionado.obj.imagens.length
  if (indiceAlvo < imagensLength && indiceAlvo>=0 && imagensLength!=0) indiceImgSelecionada = indiceAlvo
  else if (indiceAlvo >= imagensLength) indiceImgSelecionada = 0
  else if (indiceAlvo < 0) indiceImgSelecionada = imagensLength-1
  carregarMidia()
}

function carregarInfo(){
  
  //const marca = prodSelecionado.obj.marca.toUpperCase()
  //const ref = prodSelecionado.obj.referencia.toUpperCase()
  
  //marcaRef.textContent = `${marca} ${ref}`
  obs.innerHTML =  prodSelecionado.obj.obs 
  infoConteudoProd.textContent =  prodSelecionado.obj.componentes 
  infoProp.innerHTML =  gerarHtmlEstruturado(prodSelecionado.obj.propriedades)
  
}
function destacarPesquisa(obj, pesquisa) {
  if (!obj || !obj.valor) return "";

  const valorOriginal = obj.valor;

  const pesquisaNorm = (pesquisa || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  if (!pesquisaNorm) {
    return obj.obs && obj.obs.trim() !== ""
      ? `${valorOriginal} (${obj.obs})`
      : valorOriginal;
  }

  let valorNorm = "";
  let mapaIndices = [];

  for (let i = 0; i < valorOriginal.length; i++) {
    const c = valorOriginal[i];
    if (/[a-z0-9]/i.test(c)) {
      valorNorm += c.toLowerCase();
      mapaIndices.push(i);
    }
  }

  const pos = valorNorm.indexOf(pesquisaNorm);
  let valorFinal = valorOriginal;

  if (pos !== -1) {
    const inicio = mapaIndices[pos];
    const fim = mapaIndices[pos + pesquisaNorm.length - 1] + 1;

    valorFinal =
      valorOriginal.slice(0, inicio) +
      "<span style='text-decoration: underline;'>" +
      valorOriginal.slice(inicio, fim) +
      "</span>" +
      valorOriginal.slice(fim);

    valorFinal = `<strong>${valorFinal}</strong>`;
  }

  let resultado = valorFinal;

  if (obj.obs && obj.obs.trim() !== "") {
    resultado += ` (${obj.obs})`;
  }

  return resultado;
}
function gerarLinhasAplicacao(aplicacoes) {
  aplicacoes = ordenarListaDeAplicacoes(aplicacoes)

  const veiculosFiltro = (filtros.aplicacao.veiculos || [])
    .map(v => v.toLowerCase())

  let html = ''

  aplicacoes.forEach(aplic => {

    html += `
      <tr>
        <td colspan="4" class="td-aplic-montadora">
          ${aplic.montadora.toUpperCase()}
        </td>
      </tr>
    `

    aplic.carros.forEach(carro => {

      const nome = `${carro.nome}${carro.modelo ? ' ' + carro.modelo : ''}`

      const negrito = veiculosFiltro.includes(carro.nome.toLowerCase())
      const estilo = negrito ? 'style="font-weight:bold"' : ''

      let data = ''
      const inicio = carro.anoInicio
      const fim = carro.anoFim

      if (inicio && fim) {
        data = inicio === fim ? inicio : `${inicio} - ${fim}`
      } else if (inicio) {
        data = `${inicio} >`
      } else if (fim) {
        data = `< ${fim}`
      }

      html += `
        <tr ${estilo}>
          <td>${nome}</td>
          <td>${carro.motor}</td>
          <td>${data}</td>
          <td>${carro.complemento || ''}</td>
        </tr>
      `
    })
  })

  return html
}
function carregarAplicacoes(){
  conversoesListaContainer.innerHTML = ''
  function criarItem(obj, ehMarca){
    const item = document.createElement('div')
    
    if (ehMarca) {
      item.textContent = obj.marca.toUpperCase()
      item.classList.add('marca')
    }
    else {
      item.innerHTML = destacarPesquisa(obj, filtros.codCruzado)
      //let obs = obj.obs.trim()? ' (' + obj.obs + ')' : ''
      //item.innerHTML = obj.valor.toUpperCase() + obs
      item.classList.add('codigo')
    }

    conversoesListaContainer.appendChild(item)
  }
  prodSelecionado.obj.referenciaCruzada.forEach(conv => {
    criarItem(conv, true)
    for (let cod of conv.codigos){
      criarItem(cod, false)
    }
  })
  // tabela de carros

  aplic_carros_tbody.innerHTML = gerarLinhasAplicacao(prodSelecionado.obj.aplicacao)
}

function gerarHtmlEstruturado(obj, nivel = 0) {
  const espacoPorNivel = 12; // ~ equivalente visual a 2 espaços
  let html = "";

  function formatar(valor, nivelAtual) {
    const padding = nivelAtual * espacoPorNivel;

    if (valor === null) {
      return `<div style="padding-left:${padding}px">null</div>`;
    }

    if (typeof valor === "string") {
      return `<div style="padding-left:${padding}px"> ${valor}</div>`;
    }

    if (typeof valor === "number" || typeof valor === "boolean") {
      return `<div style="padding-left:${padding}px">${valor}</div>`;
    }

    if (Array.isArray(valor)) {
      let arrayHtml = `<div style="padding-left:${padding}px">[</div>`;
      
      valor.forEach((item) => {
        arrayHtml += formatar(item, nivelAtual + 1);
      });

      return arrayHtml;
    }

    if (typeof valor === "object") {
      return gerarHtmlEstruturado(valor, nivelAtual);
    }

    return "";
  }

  Object.keys(obj).forEach((chave) => {
    const valor = obj[chave];
    const padding = nivel * espacoPorNivel;

    if (typeof valor === "object" && valor !== null && !Array.isArray(valor)) {
      html += `<div style="padding-left:${padding}px">${chave}: </div>`;
      html += gerarHtmlEstruturado(valor, nivel + 1);
    }
    else if (Array.isArray(valor)) {
      html += `<div style="padding-left:${padding}px">${chave}: [</div>`;
      valor.forEach((item) => {
        html += formatar(item, nivel + 1);
      });
    }
    else {
      if (valor === null) {
        html += `<div style="padding-left:${padding}px">${chave}: null</div>`;
      }
      else if (typeof valor === "string") {
        html += `<div style="padding-left:${padding}px">${chave}: "${valor}"</div>`;
      }
      else {
        html += `<div style="padding-left:${padding}px">${chave}: ${valor}</div>`;
      }
    }
  });

  return html;
}

/* FECHAR MODAL MIDIA */
function toggleModalMidia() {
  document.querySelector('.modal-midia').classList.toggle('esconder')

  const midia1 = midiaEvidenciaModal.firstElementChild
  if (midia1.tagName == 'VIDEO') midia1.muted = true

  const midia2 = midiaEvidenciaSidebar.firstElementChild
  if (midia2.tagName == 'VIDEO') midia2.muted = true
}

/* FECHAR MODAL FILTROS */
function toggleModalFiltrar() {
  document.querySelector('.modal-filtrar').classList.toggle('esconder')
  if (document.querySelector('.modal-filtrar').classList.contains('esconder')){
    containerTableProd.focus()
  }
}

/* gerar opcoes - modal filtros */

// montadora
produtos.forEach(p => {
  p.aplicacao.forEach(ap => {
    let montadora = ap.montadora.toUpperCase()
    if (!listaMontadoras.includes(montadora) && montadora.replace(' ','') != ''){
      listaMontadoras.push(montadora)
    }
  });
})
renderizarMontadoras()

function renderizarMontadoras() {
  listaMontadoras.sort()
  dropMontadoraHandcraft.innerHTML=''
  listaMontadoras.forEach(m => {
    if (!m.toLowerCase().includes(inputMontadora.value.toLowerCase())) return
    const option = document.createElement('option')
    option.textContent = m.toUpperCase()
    dropMontadoraHandcraft.appendChild(option)

    option.addEventListener('click', ()=> {
      selecionarMontadora(m)
    })
  })
}
function selecionarMontadora(texto) {
  if (listaMontadorasSelecionadas.length>0) return
  let indiceRetirar = null
  for (let x=0; x<listaMontadoras.length; x++){
    if (texto == listaMontadoras[x]) indiceRetirar = x
  }
  listaMontadoras.splice(indiceRetirar,1)
  listaMontadorasSelecionadas.push(texto)
  filtros.aplicacao.montadoras = listaMontadorasSelecionadas
  inputMontadora.value=''
  inputMontadora.focus()
  renderizarMontadoras()
  renderizarMontadorasSelecionadas()
  
  // atualizar os veiculos para as montadoras selecionadas
  if (listaVeiculosSelecionadas[0]) excluirVeiculo(listaVeiculosSelecionadas[0])
  carregarListaVeiculos()
  renderizarVeiculos()
  filtrarProdutos()
}
function renderizarMontadorasSelecionadas() {
  containerMontadorasSelecionadas.innerHTML = ''
  listaMontadorasSelecionadas.forEach(m =>{
    const item = document.createElement('div')
    item.innerHTML = `<p style='cursor: pointer;'>${m.toUpperCase()}</p><p><img style='width: 18px; cursor: pointer;' src='imagens/pagina/icone-lixeira.png'></p>`
    item.title = 'Excluir'
    containerMontadorasSelecionadas.appendChild(item)
    
    item.addEventListener('click', ()=>{
      excluirMontadora(m)
      carregarListaVeiculos()
      renderizarVeiculos()
      filtrarProdutos()
    })
  })
}
function excluirMontadora(texto) {
  texto = texto.replace(/^ /,'')
  texto = texto.replace(/ $/,'')
  texto = texto.toUpperCase()
  let indiceRetirar = null

  for (let x=0; x<listaMontadorasSelecionadas.length; x++){
    let m = listaMontadorasSelecionadas[x].replace(/^ /,'')
    m = m.replace(/ $/,'')
    m = m.toUpperCase()
    if (texto == m) indiceRetirar = x
  }
  listaMontadorasSelecionadas.splice(indiceRetirar,1)
  listaMontadoras.push(texto)

  // verificar se os veiculos selecionados fazem parte dessa montadora
  // se fizer removelos da lista
  excluirVeiculosSelecionadosDessaMontadora(texto)


  filtros.aplicacao.montadoras = listaMontadorasSelecionadas

  renderizarMontadoras()
  renderizarMontadorasSelecionadas()
}

function excluirVeiculosSelecionadosDessaMontadora(montadora){
  // ao excluir uma montadora, conferir se os veiculos selecionados pertencem a essa montadora
  // se sim, excluir esse veiculo selecionado
  for (let p of produtos) {
    for (let ap of p.aplicacao){
      let aplicMontadora = ap.montadora.replace(/^ /,'')
      aplicMontadora = aplicMontadora.replace(/ $/,'')
      aplicMontadora = aplicMontadora.toUpperCase()

      if (montadora == aplicMontadora){
        ap.carros.forEach(carro => {
          let nome = carro.nome.toUpperCase()
          nome =  nome.replace(/^ /,'')
          nome = nome.replace(/ $/,'')
          if (textoInclueNaLista(listaVeiculosSelecionadas, nome)){
            listaVeiculosSelecionadas = excluirTextoDessaLista(listaVeiculosSelecionadas, nome)
          }

          
        })
      }
      
      
      
    }
  }
  renderizarVeiculosSelecionadas()
}

function excluirTextoDessaLista(lista, texto){
  texto = texto.replace(/^ /,'')
  texto = texto.replace(/ $/,'')
  texto = texto.toUpperCase()
  for (x=0; x<lista.length; x++){
    lista[x] = lista[x].replace(/^ /,'')
    lista[x] = lista[x].replace(/ $/,'')
    lista[x] = lista[x].toUpperCase()
    if (lista[x]==texto){
      lista.splice(x,1)
      x -=1
    }
  }
  return lista
}

// veiculo
function carregarListaVeiculos(){
  listaVeiculos = []
  for (let p of produtos) {
    for (let ap of p.aplicacao){
      if (!textoInclueNaLista(listaMontadorasSelecionadas, ap.montadora) && listaMontadorasSelecionadas.length>0) {
        continue
      }
      
      ap.carros.forEach(carro => {
        let nome = carro.nome.toUpperCase()
        if (!listaVeiculos.includes(nome) && nome.replace(' ','') != ''){
          listaVeiculos.push(nome)
        }
      })
    }
  }
  // procurar nos selecionados se nao tem o mesmo carro na lista de nao selecionados
  for (let x=0; x<listaVeiculos.length; x++){
    if (textoInclueNaLista(listaVeiculosSelecionadas, listaVeiculos[x])) {
      listaVeiculos.splice(x,1)
      x -=1
    }
  }
  
}
carregarListaVeiculos()
renderizarVeiculos()

function textoInclueNaLista(lista, texto){
  texto = texto.replace(/^ /,'')
  texto = texto.replace(/ $/,'')
  texto = texto.toLowerCase()
  for(let x=0; x<lista.length; x++){
    lista[x] = lista[x].replace(/^ /,'')
    lista[x] = lista[x].replace(/ $/,'')
    lista[x] = lista[x].toLowerCase()
  }
  if (lista.includes(texto)) return true
  else return false
}

function renderizarVeiculos() {
  listaVeiculos.sort()
  dropVeiculoHandcraft.innerHTML=''
  listaVeiculos.forEach(v => {
    if (!v.toLowerCase().includes(inputVeiculo.value.toLowerCase())) return
    const option = document.createElement('option')
    option.textContent = v.toUpperCase()
    dropVeiculoHandcraft.appendChild(option)

    option.addEventListener('click', ()=> {
      selecionarVeiculo(v)
    })
  })
}
function selecionarVeiculo(texto) {
  if (listaVeiculosSelecionadas.length>0) return
  let indiceRetirar = null
  for (let x=0; x<listaVeiculos.length; x++){
    if (texto == listaVeiculos[x]) indiceRetirar = x
  }
  listaVeiculos.splice(indiceRetirar,1)
  listaVeiculosSelecionadas.push(texto)
  filtros.aplicacao.veiculos = listaVeiculosSelecionadas
  inputVeiculo.value=''
  inputVeiculo.focus()
  renderizarVeiculos()
  renderizarVeiculosSelecionadas()
  filtrarProdutos()
  if (listaVeiculosSelecionadas.length>0){
    f_select_ano.disabled = false
    preencherSelectAno()
  } 
  
  
}
function renderizarVeiculosSelecionadas() {
  containerVeiculosSelecionados.innerHTML = ''
  listaVeiculosSelecionadas.forEach(v =>{
    const item = document.createElement('div')
    item.innerHTML = `<p style='cursor: pointer;'>${v.toUpperCase()}</p><p><img style='width: 18px; cursor: pointer;' src='imagens/pagina/icone-lixeira.png'></p>`
    item.title = 'Excluir'
    containerVeiculosSelecionados.appendChild(item)
    
    item.addEventListener('click', ()=>{
      excluirVeiculo(v)
      filtrarProdutos()
    })
  })
}
function excluirVeiculo(texto) {
  let indiceRetirar = null
  for (let x=0; x<listaVeiculosSelecionadas.length; x++){
    if (texto == listaVeiculosSelecionadas[x]) indiceRetirar = x
  }
  listaVeiculosSelecionadas.splice(indiceRetirar,1)
  listaVeiculos.push(texto)

  filtros.aplicacao.veiculos = listaVeiculosSelecionadas

  renderizarVeiculos()
  renderizarVeiculosSelecionadas()
  if (listaVeiculosSelecionadas.length==0){
    f_select_ano.disabled = true
  }
}

function preencherSelectAno(){
  f_select_ano.innerHTML = '<option value="">Todos</option>'
  let menorAno = 0
  let maiorAno = 0
  let carroPesquisa = listaVeiculosSelecionadas[0].toLowerCase().trim()
  for (let p of produtos){
    for (let aplic of p.aplicacao){
      for (let carro of aplic.carros){
        let carroLoop = carro.nome.toLowerCase().trim()
        if (carroLoop == carroPesquisa){
          let anoinicio = carro.anoInicio.match(/(\d{4})$/)
          if (anoinicio){
            anoinicio = Number(anoinicio[0])
            if (menorAno == 0) menorAno = Number(anoinicio)
            else if (anoinicio<menorAno) menorAno = anoinicio
          } 
          let anofim = carro.anoFim.match(/(\d{4})$/)
          if (anofim){
            anofim = Number(anofim[0])
            if (maiorAno == 0) maiorAno = Number(anofim)
            else if (anofim>maiorAno) maiorAno = anofim
          }   
          
        }
        
      }
    }
  }
  if (menorAno==0 && maiorAno==0) return
  if (menorAno==0) menorAno = 1980
  if (maiorAno==0) maiorAno = new Date().getFullYear();
  while (menorAno <= maiorAno){
    const option = document.createElement('option')
    option.value = menorAno
    option.textContent = menorAno
    f_select_ano.appendChild(option)
    menorAno +=1
  }
}
let tamanhos = []
produtos.forEach(p =>{
  p.propriedades.tamanhos.forEach(tamanho =>{
    if (!tamanhos.includes(tamanho) && p.propriedades.tamanhos !== null){
      tamanhos.push(tamanho)
    }
  })
})

tamanhos.sort()
function renderizarTamanhos(select) {
  for (let t of tamanhos){
    const option = document.createElement('option')
    option.textContent = t
    option.value = t.replace(/[^\d+]/g,'')
    select.appendChild(option)
  }
}
renderizarTamanhos(f_select_tamanho_de)
renderizarTamanhos(f_select_tamanho_ate)
/*
for (let t of tamanhos){
  const option = document.createElement('option')
  option.textContent = t
  option.value = t
  f_select_tamanho_de.appendChild(option)
}
for (let t of tamanhos){
  const option = document.createElement('option')
  option.textContent = t
  option.value = t
  f_select_tamanho_ate.appendChild(option)
}*/
function verificarTamanhoPalhetas(numero, deAte) {
  numero = numero.trim()
  numero = numero.replace(/"/g, '')
  numero = Number(numero)
  if (deAte=='de'){
    for (let option of Array.from(f_select_tamanho_ate.children)){
      if (option.value =='') continue
      if (numero == 0) {
        option.disabled = false
        continue
      }
      let valor = Number(option.value.replace(/"/g,'').trim())
      if (valor < numero){
        option.disabled = true
      } else option.disabled = false
    }
  }
  if (deAte=='ate'){
    for (let option of Array.from(f_select_tamanho_de.children)){
      if (option.value =='') continue
      if (numero == 0) {
        option.disabled = false
        continue
      }
      let valor = Number(option.value.replace(/"/g,'').trim())
      if (valor > numero){
        option.disabled = true
      } else option.disabled = false
    }
  }

  /*
  let nD = Number(f_select_furo_de.value)
  let nA = Number(f_select_furo_ate.value)
  if (nD != 0 && nA != 0 && nD > nA){
    const aviso = 'Medidas incoerentes!! Furo "de" deve ser menor ou igual ao furo "até"'
    document.getElementById('aviso-furo').textContent = aviso
  } else {
    document.getElementById('aviso-furo').textContent = ''
  }*/
}


produtos.forEach(p => {
  if (!listaMarcasProd.includes(p.marca)){
    listaMarcasProd.push(p.marca)
  }
})
listaMarcasProd.sort()
preencherSelectMarcas()

function preencherSelectMarcas() {
  listaMarcasProd.sort()
  f_select_marca.innerHTML = '<option value=""></option>'
  for(let marca of listaMarcasProd){
    const option = document.createElement('option')
    option.textContent = marca.toUpperCase()
    option.value = marca
    f_select_marca.appendChild(option)
  }
}
function renderizarMarcasSelecionadas() {
  containerMarcasSelecionadas.innerHTML = ''
  listaMarcasProdSelected.forEach(m =>{
    const item = document.createElement('div')
    item.innerHTML = `<p style='cursor: pointer;'>${m.toUpperCase()}</p><p><img style='width: 18px; cursor: pointer;' src='imagens/pagina/icone-lixeira.png'></p>`
    item.title = 'Excluir'
    containerMarcasSelecionadas.appendChild(item)
    
    item.addEventListener('click', ()=>{
      excluirMarca(m)
      filtrarProdutos()
    })

    filtros.marca = listaMarcasProdSelected
  })
}
function excluirMarca(marca) {
  let indiceRetirar = null
  for (let x=0; x<listaMarcasProdSelected.length; x++){
    if (marca == listaMarcasProdSelected[x]) indiceRetirar = x
  }
  listaMarcasProdSelected.splice(indiceRetirar,1)
  listaMarcasProd.push(marca)

  preencherSelectMarcas()
  renderizarMarcasSelecionadas()
}
function excluirTodasAsMarcas(){
  for (let m of listaMarcasProdSelected){
    listaMarcasProd.push(m)
  }
  listaMarcasProdSelected = []
  filtros.marca = []
  preencherSelectMarcas()
  renderizarMarcasSelecionadas()
}

/* eventos para ordenar */
labelMarcaProduto.addEventListener('click', ()=>{
  sequenciaParaOrdenar = ['marca','referencia','descricao']
  ordenarProdutos()
  for (let t of document.querySelectorAll('.triangulo-ordenar')){t.classList.add('esconder')}
  document.getElementById('triangulo-ordenar-marca').classList.remove('esconder')
})
labelRefProduto.addEventListener('click', ()=>{
  sequenciaParaOrdenar = ['referencia','marca','descricao']
  ordenarProdutos()
  for (let t of document.querySelectorAll('.triangulo-ordenar')){t.classList.add('esconder')}
  document.getElementById('triangulo-ordenar-ref').classList.remove('esconder')
})
labelDescProduto.addEventListener('click', ()=>{
  sequenciaParaOrdenar = ['descricao','marca','referencia']
  ordenarProdutos()
  for (let t of document.querySelectorAll('.triangulo-ordenar')){t.classList.add('esconder')}
  document.getElementById('triangulo-ordenar-desc').classList.remove('esconder')
})
function ordenarProdutos() {
  for (x=sequenciaParaOrdenar.length-1; x>=0; x--){
    let campo = sequenciaParaOrdenar[x]
    produtos.sort((a,b) => a[campo].localeCompare(b[campo]))
  }
  renderizarTabelaProd()
  if (prodSelecionado.elemento) selecionarProduto(prodSelecionado.elemento)
  
}

function toggleProdutosFixados(botao){
  mostrarApenasProdutosFixados = mostrarApenasProdutosFixados? false:true
  

  if (mostrarApenasProdutosFixados){
    botao.querySelector('span').textContent = 'MOSTRAR TODOS OS PRODUTOS'
    botao.querySelector('img').src = 'imagens/pagina/icone-voltar-tabela.png'
  } else {
    botao.querySelector('span').textContent = 'MOSTRAR APENAS ITENS FIXADOS'
    botao.querySelector('img').src = 'imagens/pagina/icone-fixar-vermelho.png'
  }
  renderizarTabelaProd()
  let primeiraLinha = bodyTableProd.querySelectorAll('tr')[0]
  if (prodSelecionado.elemento) selecionarProduto(prodSelecionado.elemento)
  else if (primeiraLinha.id){
    selecionarProduto(primeiraLinha)
  } 
  containerTableProd.focus()
}
function limparInfosMidias() {
  if (midiaEvidenciaSidebar.firstElementChild){
    midiaEvidenciaSidebar.firstElementChild.remove()
  }
  document.getElementById('indicador-img-atual').textContent = '#'
  document.getElementById('length-lista-imgs').textContent = '0'
  obs.textContent = ''
  infoConteudoProd.textContent = ''
  infoProp.textContent = ''
  aplic_carros_tbody.innerHTML = ''
  conversoesListaContainer.innerHTML = ''
}

function limparTodosOsFiltros(){
  // ano
  if (!document.getElementById('select-ano-veiculo').disabled){
    document.getElementById('select-ano-veiculo').selectedIndex = 0
    filtros.aplicacao.ano = ''
  }
  // veiculo
  if (filtros.aplicacao.veiculos[0]){
    excluirVeiculo(filtros.aplicacao.veiculos[0])
  }
  // montadora
  if (filtros.aplicacao.montadoras[0]){
    excluirMontadora(filtros.aplicacao.montadoras[0]);
    carregarListaVeiculos();
    renderizarVeiculos();
  }
  // tamanho
  document.getElementById('select-tamanho-de').selectedIndex = 0
  document.getElementById('select-tamanho-ate').selectedIndex = 0
  verificarTamanhoPalhetas('','de')
  verificarTamanhoPalhetas('','ate')
  filtros.propriedades.tamanho.de = null
  filtros.propriedades.tamanho.ate = null
  // posicao
  document.getElementById('select-posicao').selectedIndex = 0;
  filtros.propriedades.posicao = '';
  // marcas
  excluirTodasAsMarcas()
  // codigo
  document.getElementById('campo-cod-cruzado').value = '';
  filtros.codCruzado = '';
  // descricao
  document.getElementById('campo-descricao1').value = ''; 
                  document.getElementById('campo-descricao2').value = '';
                  document.getElementById('campo-descricao1').focus();
                  filtros.descricao[0] = '';
                  filtros.descricao[1] = '';

  filtrarProdutos()
}