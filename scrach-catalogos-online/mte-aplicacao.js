let montadoras = ["Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo","Suzuki","Volvo"]

let linhas = document.querySelectorAll('.dxgvDataRow_mtethomson')
linhas = Array.from(linhas)

for (let i=0; i<linhas.length; i++){
    if (!linhas[i].id.toLowerCase().includes('gridaplicacao')){
        linhas.splice(i,1)
        i -=1
    }
}

let montadorasOnline = []

for (let l of linhas){
  let m = l.querySelectorAll('td')[0].textContent.toLowerCase().replace(' ','')
  if (!montadorasOnline.includes(m)) montadorasOnline.push(m)
}

let aplicacao = []
for (let mo of montadorasOnline){
  let tem = false
  let montadora = ''
  
  for (let m of montadoras){
    montadora = m
    m = m.toLowerCase().replace(' ','')
    if (mo == m) { 
      tem = true
      break
    }
  }
  if (!tem) throw new Error(`  \n----   AVISO   ----\n   Montadora "${mo}" encontrado nesse catálogo não está contido na sua lista de montadoras da lista de produtos   \n  Atualize a lista no comentario do arquivo de produtos.js e nesse arquivo`);
  
  aplicacao.push({['montadora']:montadora, carros:[]})
}


for (let l of linhas){
  let montOnl = l.querySelectorAll('td')[0].textContent
  let nomeCarro = l.querySelectorAll('td')[1].textContent
  let anoinicio = l.querySelectorAll('td')[6].textContent
  const anoAtual = new Date().getFullYear();
  let anofim = l.querySelectorAll('td')[7].textContent
  if (Number(anofim) == Number(anoAtual)) anofim = ''
  let motor = l.querySelectorAll('td')[2].textContent+' '+l.querySelectorAll('td')[4].textContent+'V'
  let fuel = l.querySelectorAll('td')[5].textContent
  if (fuel.replaceAll(/\s/g,'')){
    if (fuel.toLowerCase().replace(' ','') == 'gas') fuel = 'Gasolina'
    fuel = "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: "+fuel
  }
  
  let complemento = l.querySelectorAll('td')[3].textContent + ' '+fuel

  aplicacao[acharIndiceMontadora(montOnl)].carros.push({
    nome: nomeCarro.trim(),
    modelo: '', 
    anoInicio: anoinicio.trim(),
    anoFim: anofim.trim(), 
    motor: motor.trim(),  
    complemento: complemento.trim()
  })

}

function acharIndiceMontadora(montOnl) {
  montOnl = montOnl.toLowerCase().replace(' ','')
  for (let i=0; i<aplicacao.length; i++){
    let m = aplicacao[i].montadora.toLowerCase().replace(' ','')
    if (m == montOnl) return i
  }
}



console.clear();

let string = ''

for (let item of aplicacao){
  string += JSON.stringify(item, null, 2)+',\n'
}
string = string.replaceAll('"montadora"', 'montadora');
string = string.replaceAll('"carros"', "carros");
string = string.replaceAll('"nome"', "nome");
string = string.replaceAll('"modelo"', "modelo");
string = string.replaceAll('"anoInicio"', "anoInicio");
string = string.replaceAll('"anoFim"', "anoFim");
string = string.replaceAll('"motor"', "motor");
string = string.replaceAll('"complemento"', "complemento");

console.log(string)