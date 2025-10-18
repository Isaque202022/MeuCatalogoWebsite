const linhas = document.getElementById('original-code').querySelectorAll('.row')
let listaConversoes = []
let listaObjetos = []

linhas.forEach(linha => {
  const objeto = {}
  const marca = linha.querySelectorAll('div')[0].textContent
  const codigo = linha.querySelectorAll('div')[1].textContent

  objeto.marca = marca
  objeto.codigo = codigo
  listaConversoes.push(objeto)
})

listaConversoes.sort((a,b) => {
  return a.marca.localeCompare(b.marca)
})
console.log(listaConversoes)

let objeto = {
  marca: '',
  codigos: []
}
listaConversoes.forEach((convercao, index) => {
  if (objeto.marca != convercao.marca && objeto.marca){
    listaObjetos.push(objeto)
    objeto = {
      marca: '',
      codigos: []
    }
  }
  objeto.marca = convercao.marca
  objeto.codigos.push(convercao.codigo)
  if (index == listaConversoes.length-1) listaObjetos.push(objeto)
})


let string = ''

for (let item of listaObjetos){
  string += JSON.stringify(item)+',\n'
}
string = string.replaceAll('"marca"', 'marca');
string = string.replaceAll('"codigos"', 'codigos');

console.clear()
console.log(string)