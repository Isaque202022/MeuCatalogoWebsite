const linhas = document.getElementById('table-aplicacao').querySelector('tbody').querySelectorAll('tr')
let listaAplicacoes = []

linhas.forEach(linha => {
  const objeto = {}
  const tds = linha.querySelectorAll('td')
  objeto.montadora = tds[0].textContent
  objeto.modelo = tds[1].textContent
  objeto.ano = `${tds[7].textContent} - ${tds[8].textContent}`
  objeto.complemento = `${tds[3].textContent} ${tds[4].textContent}`
  listaAplicacoes.push(objeto)
})

console.clear();

let string = ''

for (let item of listaAplicacoes){
  string += JSON.stringify(item, null, 2)+',\n'
}
string = string.replaceAll('"montadora"', 'montadora');
string = string.replaceAll('"modelo"', 'modelo');
string = string.replaceAll('"ano"', 'ano');
string = string.replaceAll('"complemento"', 'complemento');

console.log(string)