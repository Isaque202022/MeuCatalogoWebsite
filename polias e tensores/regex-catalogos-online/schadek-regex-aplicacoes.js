const tabela = document.querySelector('tbody')
let listaAplicacoes = []

tabela.querySelectorAll('tr').forEach(linha => {
  let objeto = {}
  const dados = linha.querySelectorAll('td')
  objeto.montadora = dados[0].textContent
  objeto.modelo = dados[1].textContent
  objeto.ano = dados[3].textContent
  objeto.complemento = `${dados[2].textContent} ${dados[4].textContent}`
  listaAplicacoes.push(objeto)
})

let string = ''

for (let item of listaAplicacoes){
  string += JSON.stringify(item, null, 2)+',\n'
}
string = string.replaceAll('"montadora"', 'montadora');
string = string.replaceAll('"modelo"', 'modelo');
string = string.replaceAll('"ano"', 'ano');
string = string.replaceAll('"complemento"', 'complemento');

console.clear()
console.log(string)