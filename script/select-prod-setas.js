let novoSelecionado = null
let descendo_subindo = '' 

containerTableProd.focus()

containerTableProd.addEventListener('keydown', (event)=>{
  
  if (event.key === 'ArrowDown'){
    selecionarNovoProduto(1)
    descendo_subindo = 'descendo'
  }
  else if (event.key === 'ArrowUp'){
    selecionarNovoProduto(-1)
    descendo_subindo = 'subindo'
  }
  if (event.key === 'ArrowRight'){
    mudarImg(indiceImgSelecionada+1)
  }
  if (event.key === 'ArrowLeft'){
    mudarImg(indiceImgSelecionada-1)
  }
  
  

  const teclasScroll = [
    "ArrowUp",
    "ArrowDown",
    "PageUp",
    "PageDown",
    "Home",
    "End",
    " "
  ];

  if (teclasScroll.includes(event.key)) {
    event.preventDefault();
  }
  
})

function selecionarNovoProduto(n){
  if (viewer.style.display=='flex') return
  for (let linha of Array.from(bodyTableProd.children)){
    if (linha.classList.contains('prod-selecionado')){
      if (n==1){
        novoSelecionado = linha.nextElementSibling
      } else if (n==-1){
        novoSelecionado = linha.previousElementSibling
      }
      if (novoSelecionado){
        selecionarProduto(novoSelecionado)
        calcularScroll()
      }
      break
    }
  }
}
/*
function calcularScroll(){
  if (descendo_subindo == 'descendo'){
    let l = novoSelecionado.getBoundingClientRect().top + novoSelecionado.getBoundingClientRect().height
    let c = containerTableProd.getBoundingClientRect().top + containerTableProd.getBoundingClientRect().height
    console.log('selecionado - (base ao topo):',l)
    console.log('container - (base ao topo):',c)
    console.log('**********************************')
    if (l > c) {
      let diferenca = l-c
      containerTableProd.scrollBy({top: diferenca})
    } 
    else if (l < containerTableProd.getBoundingClientRect().top){
      novoSelecionado.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
      console.log('scrollIntoView')
    }
    else if (novoSelecionado.getBoundingClientRect().top < containerTableProd.getBoundingClientRect().top){
      let diferenca = containerTableProd.getBoundingClientRect().top-novoSelecionado.getBoundingClientRect().top
      containerTableProd.scrollBy({top: diferenca})
    }
  } 
  else if (descendo_subindo == 'subindo'){
    let l = novoSelecionado.getBoundingClientRect().top 
    let c = containerTableProd.getBoundingClientRect().top
    if (l < c) {
      let diferenca = l-c
      containerTableProd.scrollBy({top: diferenca})
    } else if (novoSelecionado.getBoundingClientRect().top + novoSelecionado.getBoundingClientRect().height > containerTableProd.getBoundingClientRect().top + containerTableProd.getBoundingClientRect().height){
      novoSelecionado.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }
    if (!novoSelecionado.previousElementSibling){
      containerTableProd.scrollTop = 0
    }
  }
}*/
function calcularScroll(){

  const thead = document.querySelector('#table-produtos thead')
  const alturaThead = thead ? thead.offsetHeight : 0

  const containerTop = containerTableProd.scrollTop
  const containerBottom = containerTop + containerTableProd.clientHeight

  const itemTop = novoSelecionado.offsetTop
  const itemBottom = itemTop + novoSelecionado.offsetHeight

  // item acima da área visível
  if (itemTop < containerTop + alturaThead) {
    containerTableProd.scrollTop = itemTop - alturaThead
  }

  // item abaixo da área visível
  else if (itemBottom > containerBottom) {
    containerTableProd.scrollTop = itemBottom - containerTableProd.clientHeight
  }

  // se for a primeira linha
  if (!novoSelecionado.previousElementSibling){
    containerTableProd.scrollTop = 0
  }

}