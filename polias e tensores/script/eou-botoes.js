
function eouClickBtn(botao) {
  botao.parentElement.querySelectorAll('.eou-btn').forEach(filho => {
    filho.classList.remove('selecionado')
  })
  botao.classList.add('selecionado')
  const valor = botao.dataset.valor
  const categoria = botao.dataset.categoria
  filtros.eouBtns[categoria] = valor
  filtrarProdutos()
}
