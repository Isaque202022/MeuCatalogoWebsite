let tabelaConversoes = document.getElementById('detalhes').querySelectorAll('table')[1]

let listaConversoes = []
let objeto = {
  marca: '',
  codigos: []
}
tabelaConversoes.querySelectorAll('tr').forEach(linha =>{
  
  let marca = linha.querySelector('th')
  if (marca) {
    if (objeto.marca) listaConversoes.push(objeto)
    objeto = {
      marca: '',
      codigos: []
    }
    objeto.marca = marca.textContent
  }
  let codigo = linha.querySelector('td')
  if (codigo) {
    objeto.codigos.push(codigo.textContent.replaceAll(' ',''))
  }

})

let string = ''

for (let item of listaConversoes){
  string += JSON.stringify(item)+',\n'
}
string = string.replaceAll('"marca"', 'marca');
string = string.replaceAll('"codigos"', 'codigos');

console.clear()
console.log(string)



