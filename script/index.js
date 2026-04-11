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

for (let p of produtos){
  for (let aplic of p.aplicacao){
    aplic.montadora = aplic.montadora.trim().replaceAll('  ',' ')
    for (let c of aplic.carros){
      c.nome = c.nome.trim().replaceAll('  ',' ')
      c.modelo = c.modelo.trim().replaceAll('  ',' ')
      c.motor = c.motor.trim().replaceAll('  ',' ')
      c.anoInicio = c.anoInicio.trim().replaceAll(' ','')
      c.anoFim = c.anoFim.trim().replaceAll(' ','')
      c.complemento = c.complemento.trim().replaceAll('  ',' ')
    }
  }
}