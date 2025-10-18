let tabelaAplicacoes = document.getElementById('detalhes').querySelectorAll('table')[3]
let listaAplicacoes = []
let objeto = {}
let montadoraAnterior = ''

tabelaAplicacoes.querySelectorAll('tr').forEach(linha =>{
  const montadora = linha.querySelector('th')
  
  if (montadora){
    montadoraAnterior = montadora.textContent 
  }
  if (linha.querySelector('td')){
    objeto.montadora = montadoraAnterior
    const dado = linha.querySelectorAll('td')
    objeto.modelo = dado[0].textContent
    objeto.ano = dado[2].textContent
    objeto.complemento = dado[1].textContent
    listaAplicacoes.push(objeto)
    objeto = {}
  }
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