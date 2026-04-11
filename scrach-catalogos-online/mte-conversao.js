let linhas = document.getElementById('GridOEM_DXMainTable').querySelectorAll('tr')
linhas = Array.from(linhas)
for (let i=0; i<linhas.length; i++){
  if (!linhas[i].id.toLowerCase().includes('datarow')){
    linhas.splice(i,1)
    i -=1
  }
}

const mapa = {};

linhas.forEach(tr => {
  const tds = tr.querySelectorAll('td');

  const marca = tds[0].innerText.trim();
  const codigo = tds[1].innerText.trim();

  if (!mapa[marca]) {
    mapa[marca] = {
      marca: marca,
      codigos: []
    };
  }

  mapa[marca].codigos.push({
    valor: codigo,
    obs: ''
  });
});

const lista = Object.values(mapa);


console.clear();

let string = ''

for (let item of lista){
  string += JSON.stringify(item, null, 2)+',\n'
}
string = string.replaceAll('"marca"', "marca");
string = string.replaceAll('"codigos"', "codigos");
string = string.replaceAll('"valor"', "valor");
string = string.replaceAll('"obs"', "obs");

console.log(string)