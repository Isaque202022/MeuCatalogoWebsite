ordenarProdutos()
renderizarTabelaProd()

selecionarProduto(document.getElementById('table-produtos').querySelector('tbody').firstElementChild)

document.addEventListener('keyup', (event)=>{
  if (event.key == 'Escape' && !modalFiltrar.classList.contains('esconder')){
    toggleModalFiltrar()
    containerTableProd.focus()
  } 
  const viewer = document.getElementById("viewer")
  if (event.key == 'Escape' && !viewer.style.display==''){
    fecharViewer()
    containerTableProd.focus()
  } 
  
  if (event.key.toLowerCase()=='w' && (viewer.style.display=='' || viewer.style.display=='none') && modalFiltrar.classList.contains('esconder')){
    abrirMidia(document.querySelector('.img-container'))
  }

  if (event.key.toLowerCase()=='f' && (viewer.style.display=='' || viewer.style.display=='none') && modalFiltrar.classList.contains('esconder')){
    /*
    if (prodSelecionado.elemento){
      selecionarProduto(prodSelecionado.elemento)
    } else {
      if (bodyTableProd.firstElementChild){
        selecionarProduto(bodyTableProd.firstElementChild.id)
      }
    }*/
    for (let p of produtos){
      if (p.id == prodSelecionado.obj.id){
        if (p.fixado) p.fixado = false
        else p.fixado = true
      }
    }
    renderizarTabelaProd()
    if (prodSelecionado.elemento){
      selecionarProduto(prodSelecionado.elemento)
    } else {
      if (bodyTableProd.firstElementChild){
        selecionarProduto(bodyTableProd.firstElementChild.id)
      }
    }
  }
})


/* evento de click para toggle de filtros montadora e veiculo 
document.addEventListener('click', (event)=> {
  // montadora
  if (event.target == inputMontadoraHandcraft && dropMontadoraHandcraft.classList.contains('esconder')){
    dropMontadoraHandcraft.classList.remove('esconder')    
  }
  else if (event.target != inputMontadoraHandcraft && !dropMontadoraHandcraft.classList.contains('esconder')){
    dropMontadoraHandcraft.classList.add('esconder')    
  }
  // veiculo
  if (event.target == inputVeiculoHandcraft && dropVeiculoHandcraft.classList.contains('esconder')){
    dropVeiculoHandcraft.classList.remove('esconder')    
  }
  else if (event.target != inputMontadoraHandcraft && !dropVeiculoHandcraft.classList.contains('esconder')){
    dropVeiculoHandcraft.classList.add('esconder')    
  }
})*/
