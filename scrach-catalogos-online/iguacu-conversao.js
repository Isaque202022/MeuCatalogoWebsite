let linhas = document.querySelectorAll('#GridReferencia tbody tr')
linhas = Array.from(linhas).slice(1) // remove cabeçalho

const mapa = {}

for (let l of linhas){

  const tds = l.querySelectorAll('td')

  const marca = tds[1].textContent.trim()
  const codigo = tds[2].textContent.trim()

  if (!mapa[marca]){
    mapa[marca] = {
      marca: marca,
      codigos: []
    }
  }

  // evitar duplicado
  if (!mapa[marca].codigos.some(c => c.valor === codigo)){
    mapa[marca].codigos.push({
      valor: codigo,
      obs: ''
    })
  }

}

const lista = Object.values(mapa)

console.clear()

let string = ''

for (let item of lista){

  string += `{
  marca: "${item.marca}",
  codigos: [\n`

  for (let c of item.codigos){

    let linha = `    { valor: "${c.valor}", obs: "${c.obs}" },\n`

    if (c.obs.length > 30){
      linha = `    {
      valor: "${c.valor}", obs: "${c.obs}"
    },\n`
    }

    string += linha
  }

  string += `  ]
},\n`
}

string = string.replaceAll('"marca"', "marca")
string = string.replaceAll('"codigos"', "codigos")
string = string.replaceAll('"valor"', "valor")
string = string.replaceAll('"obs"', "obs")

console.log(string)