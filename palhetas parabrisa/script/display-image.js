


function parseDataFlexible(dataStr) {
  // Se for null, undefined ou string vazia
  if (!dataStr || dataStr.trim() === "") {
    return null;
  }

  const partes = dataStr.split("/").map(p => p.trim());

  let dia = 1;
  let mes = 1;
  let ano;

  if (partes.length === 1) {
    ano = Number(partes[0]);
  } 
  else if (partes.length === 2) {
    mes = Number(partes[0]);
    ano = Number(partes[1]);
  } 
  else if (partes.length === 3) {
    dia = Number(partes[0]);
    mes = Number(partes[1]);
    ano = Number(partes[2]);
  } 
  else {
    throw new Error("Formato de data inválido");
  }

  if (!ano || isNaN(ano)) {
    throw new Error("Ano inválido");
  }

  return new Date(ano, mes - 1, dia);
}

let datas = ['01/05/2002','01/06/2001','4/02/1998',null]

for (let x=0; x<datas.length; x++){
  datas[x] = parseDataFlexible(datas[x])
}

datas.sort((a,b) => new Date(a) - new Date(b))


/* DISPLAY DE IMAGEM 
const imgSidebarContainer = document.querySelector('.img-container')
const imgModalContainer = document.querySelector('.modal-midia').querySelector('.tela')
let imgSelecionada = 0

function gerarMidia(arq) {
  let tipo = null
  let midia = null

  if (arq.includes('.png') || arq.includes('.jpg')) tipo = 'imagem';
  else if (arq.includes('.mp4')) tipo = 'video'
  else throw new Error('extensao de midia invalido:',arq)

  if (tipo=='video'){
    midia = document.createElement('video')
    midia.controls = true
    midia.autoplay = true
    midia.loop = true
    midia.muted = true
  } 
  else if (tipo=='imagem'){
    midia = document.createElement('img')
  }
  midia.src = 'imagens/produtos/'+arq
  midia.classList.add('midia-tela-display')
  return midia
}

function selecionarImg(indice) {
  
  imgSidebarContainer.innerHTML = ''
  imgModalContainer.innerHTML = ''
  
  if (primeiraFoto) {
    imgSidebarContainer.appendChild(gerarMidia(primeiraFoto))
    imgModalContainer.appendChild(gerarMidia(primeiraFoto))
  }
}

*/


/* MENU DE IMAGENS 
function fazerImgMiniatura(arq,id) {
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
    item.innerHTML += '<img class="playicon" src="imagens/pagina/play-icon.png">'
  }
  item.appendChild(midia)
  item.id = id
  item.classList.add('midia-miniatura')

  item.addEventListener('click', ()=> {
    imgSelecionada = id
    selecionarImg()

    const minis = Array.from(document.querySelectorAll('.midia-miniatura'))
    minis.forEach(mini => {
      mini.classList.remove('img-selecionada')
    })
    item.classList.add('img-selecionada')
    minis.forEach(mini => {
      if (mini.innerHTML == item.innerHTML) mini.classList.add('img-selecionada')
      console.log(mini.innerHTML)
      console.log(item.innerHTML)
      console.log(mini.innerHTML == item.innerHTML)
    })
  })
  return item
}

function criarMenuImgs() {
  const prodSelecionadoObj = produtos[prodSelecionado.id.replace('prod-','')]
  
  console.log('prod '+prodSelecionadoObj.id+': '+prodSelecionadoObj.imagens)
  
  // criar as miniaturas das imagens do display do sidebar e do modal
  const menuImgSidebar = document.querySelector('.sidebar').querySelector('.menu-imgs')
  menuImgSidebar.innerHTML = ''
  if (prodSelecionadoObj.imagens.length != 0){
    for (let x in prodSelecionadoObj.imagens){
      const item = fazerImgMiniatura(prodSelecionadoObj.imagens[x], 'sidebar-'+x)
      if (x==0) item.classList.add('img-selecionada')
      menuImgSidebar.appendChild(item)
    }
  }
  
  const menuImgModal = document.querySelector('.modal-midia').querySelector('.menu-imgs')
  menuImgModal.innerHTML = ''
  if (prodSelecionadoObj.imagens.length != 0){
    for (let x in prodSelecionadoObj.imagens){
      const item = fazerImgMiniatura(prodSelecionadoObj.imagens[x],'modal-'+x)
      if (x==0) item.classList.add('img-selecionada')
      menuImgModal.appendChild(item)
    }
  }
}
*/

