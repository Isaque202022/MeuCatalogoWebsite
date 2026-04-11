let montadoras = ["Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo","Suzuki","Volvo"]

let linhas = document.querySelectorAll('#GridReferencia tbody tr')
linhas = Array.from(linhas).slice(1) // remove cabeçalho


function normalizar(txt){
  return txt
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,'')
    .trim()
}

let montadorasOnline = []

for (let l of linhas){
  let m = normalizar(l.querySelectorAll('td')[1].textContent)
  m = m.toLowerCase().replace(' ','')
  if (!montadorasOnline.includes(m)) montadorasOnline.push(m)
}


let aplicacao = []

for (let mo of montadorasOnline){

  let tem = false
  let montadora = ''

  for (let m of montadoras){
    montadora = m
    let mn = normalizar(m).toLowerCase().replace(' ','')
    if (mo == mn){
      tem = true
      break
    }
  }

  if (!tem) throw new Error(`
---- AVISO ----
Montadora "${mo}" encontrada no catálogo não está na sua lista de montadoras
Atualize a lista no produtos.js
`)

  aplicacao.push({montadora: montadora, carros: []})
}
function corrigirAno(a){

  const anoAtual = new Date().getFullYear().toString().slice(-2)
  a = a.trim()

  if (Number(a) > Number(anoAtual)){
    return '19' + a.padStart(2,'0')
  }

  return '20' + a.padStart(2,'0')
}

for (let l of linhas){

  let td = l.querySelectorAll('td')

  let montOnl = normalizar(td[1].textContent)
  let nomeCarro = normalizar(td[4].textContent)
  let motor = normalizar(td[5].textContent)
  let combustivel = normalizar(td[6].textContent)
  let obs = normalizar(td[7].textContent)
  let ano = td[8].textContent.trim()


  let anoInicio = ''
  let anoFim = ''
  let a = ano.replaceAll(' ','').trim()

  if (a.includes('-')){
    let p = a.split('-')
    // caso >-95
    if (p[0].includes('>')){
      anoInicio = ''
      anoFim = corrigirAno(p[1])
    }
    // caso 95->
    else if (p[1].includes('>')){
      anoInicio = corrigirAno(p[0])
      anoFim = ''
    }
    // caso normal 95-95
    else{
      anoInicio = corrigirAno(p[0])
      anoFim = corrigirAno(p[1])
    }

  }


  let complemento = ''

  if (obs) complemento += obs

  if (combustivel.replace(/[^a-zA-Z]/g,'')){
    if (complemento) complemento += ' '
    complemento += "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: " + combustivel
  }


  aplicacao[acharIndiceMontadora(montOnl)].carros.push({
    nome: nomeCarro,
    modelo: '',
    anoInicio: anoInicio,
    anoFim: anoFim,
    motor: motor,
    complemento: complemento.trim()
  })

}


function acharIndiceMontadora(montOnl){

  montOnl = normalizar(montOnl).toLowerCase().replace(' ','')

  for (let i=0;i<aplicacao.length;i++){
    let m = normalizar(aplicacao[i].montadora).toLowerCase().replace(' ','')
    if (m == montOnl) return i
  }

}



console.clear()

let string = ''

for (let item of aplicacao){

  string += `{
  montadora: "${item.montadora}",
  carros: [\n`

  for (let c of item.carros){

    let linha = `    { nome: "${c.nome}", modelo: "${c.modelo}", anoInicio: "${c.anoInicio}", anoFim: "${c.anoFim}", motor: "${c.motor}", complemento: "${c.complemento}" },\n`

    // se complemento for grande quebra linha
    if (c.complemento.length > 60){
      linha = `    {
      nome: "${c.nome}", modelo: "${c.modelo}", anoInicio: "${c.anoInicio}", anoFim: "${c.anoFim}", motor: "${c.motor}",
      complemento: "${c.complemento}"
    },\n`
    }

    string += linha
  }

  string += `  ]
},\n`
}

string = string.replaceAll('"montadora"', 'montadora')
string = string.replaceAll('"carros"', "carros")
string = string.replaceAll('"nome"', "nome")
string = string.replaceAll('"modelo"', "modelo")
string = string.replaceAll('"anoInicio"', "anoInicio")
string = string.replaceAll('"anoFim"', "anoFim")
string = string.replaceAll('"motor"', "motor")
string = string.replaceAll('"complemento"', "complemento")

console.log(string)