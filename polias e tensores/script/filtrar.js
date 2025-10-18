const filtros = {
  externo: {}, 
  interno: {}, 
  altura: {},
  correia: [],
  parede: [],
  material: [],
  montadora: [],
  carro: '',
  referencia: '',
  eouBtns: {
    correia: "and",
    parede: "and",
    material: "and",
  }
}

function colocarEvento(el, valor, evento, objetos){
  el.addEventListener(evento, ()=> {
    if (!el[valor]) {
      if (objetos.length==2) delete filtros[objetos[0]][objetos[1]]
      if (objetos.length==1) delete filtros[objetos[0]]
    }
    else {
      if (objetos.length==2) filtros[objetos[0]][objetos[1]] = Number(el.value)
      if (objetos.length==1) filtros[objetos[0]] = Number(el.value)
    }
    filtrarProdutos()
  })
}

colocarEvento(document.getElementById('i-externo'),     'value', 'keyup', ['externo','de'])
colocarEvento(document.getElementById('i-externo-ate'), 'value', 'keyup', ['externo','ate'])
colocarEvento(document.getElementById('i-interno'),     'value', 'keyup', ['interno','de'])
colocarEvento(document.getElementById('i-interno-ate'), 'value', 'keyup', ['interno','ate'])
colocarEvento(document.getElementById('i-altura'),      'value', 'keyup', ['altura','de'])
colocarEvento(document.getElementById('i-altura-ate'),  'value', 'keyup', ['altura','ate'])

function colocarEventoCheckbox(el, string, nomeLista){
  el.addEventListener('change', (e) => {
    if (e.target.checked) filtros[nomeLista].push(string);
    else {
      const iRemove = filtros[nomeLista].indexOf(string)
      filtros[nomeLista].splice(iRemove, 1)
    }
    filtrarProdutos()
  })
  
}

colocarEventoCheckbox(document.getElementById('i-dentada'),     'dentada',    'correia')
colocarEventoCheckbox(document.getElementById('i-alternador'),  'alternador', 'correia')
colocarEventoCheckbox(document.getElementById('i-tensor'),      'tensor',     'correia')
colocarEventoCheckbox(document.getElementById('i-polia'),       'polia',      'correia')

colocarEventoCheckbox(document.getElementById('i-com-aba'), 'com-aba', 'parede')
colocarEventoCheckbox(document.getElementById('i-sem-aba'), 'sem-aba', 'parede')
colocarEventoCheckbox(document.getElementById('i-liso'),    'liso',    'parede')
colocarEventoCheckbox(document.getElementById('i-5pk'),     '5pk',     'parede')
colocarEventoCheckbox(document.getElementById('i-6pk'),     '6pk',     'parede')

colocarEventoCheckbox(document.getElementById('i-metal'),    'metal',    'material')
colocarEventoCheckbox(document.getElementById('i-plastico'), 'plastico', 'material')

function procurarCarro(input) {
  let pesquisa = input.value.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase()
  pesquisa.replaceAll(' ','')
  filtros.carro = pesquisa
  filtrarProdutos()
}

function procurarReferencia(input) {
  let pesquisa = input.value.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase()
  pesquisa.replaceAll(' ','')
  filtros.referencia = pesquisa
  filtrarProdutos()
}


function filtrarProdutos(){
  produtos.forEach(produto => {
    produto.visible = true
    
    function verificarMedidas(p, localMedida, deAte){
      if (filtros[localMedida][deAte]){
        if (deAte == 'de'){
          if (filtros[localMedida].de > p[localMedida]) return false
          else return true
        }
        else if (deAte == 'ate'){
          if (filtros[localMedida].ate < p[localMedida]) return false
          else return true
        }
      }
      else return true
    }

    
    produto.visible = verificarMedidas(produto, 'externo','de')
    if (!produto.visible) return
    produto.visible = verificarMedidas(produto, 'externo','ate')
    if (!produto.visible) return
    produto.visible = verificarMedidas(produto, 'interno','de')
    if (!produto.visible) return
    produto.visible = verificarMedidas(produto, 'interno','ate')
    if (!produto.visible) return
    produto.visible = verificarMedidas(produto, 'altura','de')
    if (!produto.visible) return
    produto.visible = verificarMedidas(produto, 'altura','ate')
    if (!produto.visible) return

    if (filtros.correia.length){
      if (filtros.eouBtns.correia == 'or'){
        produto.visible = produto.correia.some(item => filtros.correia.includes(item))
      }
      if (filtros.eouBtns.correia == 'and'){
        produto.visible = filtros.correia.every(item => produto.correia.includes(item))
      } 
      
    }
    if (!produto.visible) return

    if (filtros.parede.length){
      if (filtros.eouBtns.parede == 'or'){
        produto.visible = produto.parede.some(item => filtros.parede.includes(item))
      }
      if (filtros.eouBtns.parede == 'and'){
        produto.visible = filtros.parede.every(item => produto.parede.includes(item))
      }
    }
    if (!produto.visible) return

    if (filtros.material.length){
      if (filtros.eouBtns.material == 'or'){
        produto.visible = produto.material.some(item => filtros.material.includes(item))
      }
      if (filtros.eouBtns.material == 'and'){
        produto.visible = filtros.material.every(item => produto.material.includes(item))
      }
    }
    if (!produto.visible) return
    
    if (filtros.montadora.length){
      // percorrer filtros.montadora por cada montadora escolhida
      // se a montadora escolhida estiver dentre as aplicacoes do produto, 
      // entao produto é visible, senao nao é
      let compativel = false
      outer: for (let m of filtros.montadora){
        for (let aplic of produto.aplicacoes){
          if (aplic.montadora.toLowerCase() == m.toLowerCase()) {
            compativel = true
            break outer
          }
        }
      }
      produto.visible = compativel
    }
    if (!produto.visible) return

    if (filtros.carro){
      let compativel = false
      for (let aplic of produto.aplicacoes){
        let texto = aplic.modelo.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase()
        texto.replaceAll(' ','')
        if (texto.includes(filtros.carro)) {
          compativel = true
          break
        }
      }
      produto.visible = compativel
    }
    if (!produto.visible) return

    if (filtros.referencia){
      let compativel = false
      for (let marca of produto.referenciasCruzadas){

        for (let ref of marca.codigos){
          let texto = ref.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase()
          texto.replaceAll(' ','')
          if (texto.includes(filtros.referencia)) {
            compativel = true
            break
          } 
        }
        if (compativel) break
      }
      produto.visible = compativel
    }
    if (!produto.visible) return

  });

  
  renderizarProdutos()
}

