const resultado = {};

const tabela = document.querySelector('table[aria-label="Produtos similares"]');

tabela.querySelectorAll('tbody tr').forEach(tr => {

  const td = tr.querySelectorAll('td');
  if (td.length < 2) return;

  const marca = td[0].innerText.trim();
  const codigo = td[1].innerText.trim();

  if (!resultado[marca]) {
    resultado[marca] = {
      marca: marca,
      codigos: []
    };
  }

  resultado[marca].codigos.push({
    valor: codigo,
    obs: ''
  });

});

const lista = Object.values(resultado);

let string = lista.map(m => {

  const codigos = m.codigos
    .map(c => `{ valor: "${c.valor}", obs: "${c.obs}"}`)
    .join(",\n    ");

  return `{
  marca: "${m.marca}",
  codigos: [
    ${codigos}
  ]
}`;

}).join(",\n");

console.clear();
console.log(string);