let montadoras = ["Volkswagen", "Toyota", "Renault", "Peugeot", "Nissan", "Mercedes-Benz", "Kia", "Jeep", "Honda", "Ford", "FIAT", "Citroen", "Chevrolet", "BYD", "BMW", "Audi", "Mitsubishi", "Land Rover", "DAEWOO", "CHRYSLER", "Chery", "Hyundai","Alfa Romeo","Suzuki","Volvo"]

// função para normalizar texto
function normalizar(str){
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g,'') // remove acentos
    .replace(/ /g,'')               // remove espaços
    .toLowerCase()
    .trim()
}

const resultado = {};

document.querySelectorAll('#table-aplicacao tbody tr').forEach(tr => {

  const td = tr.querySelectorAll('td');

  const montadoraHTML = td[0].innerText.trim();

  // procura equivalente na lista
  const montadoraLista = montadoras.find(m =>
    normalizar(m) === normalizar(montadoraHTML)
  );

  // se não existir, lança erro e PARA o script
  if (!montadoraLista){
    throw new Error(`A montadora "${montadoraHTML}" não está na lista de montadoras desse arquivo`);
  }

  const nome = td[1].innerText.trim();
  const modelo = '';

  const configMotor = td[3].innerText.trim() + ' ' + td[5].innerText.trim();

  let combustivel = td[6].innerText.trim().replace(/[^a-zA-Z]/g,'');

  if (combustivel){
    combustivel = "<img src='imagens/pagina/icone-fuel-3.png' style='height: 17px; margin-left: 4px;' title='Combustível'>: " + combustivel
  }

  const anoInicio = td[8].innerText.trim();
  const anoFim = td[9].innerText.trim();

  if (!resultado[montadoraLista]) {
    resultado[montadoraLista] = {
      montadora: montadoraLista,
      carros: []
    };
  }

  resultado[montadoraLista].carros.push({
    nome: nome,
    modelo: modelo,
    anoInicio: anoInicio,
    anoFim: anoFim,
    motor: configMotor,
    complemento: combustivel
  });

});
const lista = Object.values(resultado);

let string = lista
  .map(obj => JSON.stringify(obj, null, 2))
  .join(',\n');

string = string.replaceAll('"montadora"', 'montadora')
string = string.replaceAll('"carros"', "carros")
string = string.replaceAll('"nome"', "nome")
string = string.replaceAll('"modelo"', "modelo")
string = string.replaceAll('"anoInicio"', "anoInicio")
string = string.replaceAll('"anoFim"', "anoFim")
string = string.replaceAll('"motor"', "motor")
string = string.replaceAll('"complemento"', "complemento")

// juntar propriedades independente da quantidade de espaços
string = string.replace(/",\n\s*modelo/g, '", modelo')
string = string.replace(/",\n\s*anoInicio/g, '", anoInicio')
string = string.replace(/",\n\s*anoFim/g, '", anoFim')
string = string.replace(/",\n\s*motor/g, '", motor')

console.clear()
console.log(string)