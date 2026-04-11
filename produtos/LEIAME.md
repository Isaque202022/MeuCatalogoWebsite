-----  COMO OS OBJETOS DEVEM SER PREENCHIDOS  ------
{
  id: string formado pelo nome do grupo + o proximo numero disponivel
	o nome do grupo será informado em cada arquivo
	ESSE ARQUIVO É O GRUPO "buchacoxim"
	ex.: 'buchacoxim2'

  marca: string. Não é case sensitive. Copie uma dessas marcas. Se não estiver nessa lista, adicione.
	'spaal','sabo','global juntas','brasmek','bastos'
	
  referencia: string
  descricao: string. Procure manter um padrão aos produtos semelhantes,
  obs: string. Exemplo: 'com abs' 'com ímã' 'vem anti-chama dentro da mangueira'
  grupo: string. O nome do grupo será informado no inicio do arquivo para ser copiado
  componentes: string, Ex.: '1-junta 1-retentor'  Use \n para pular de linha

  propriedades:{
    produto: string. OPÇÕES ABAIXO PARA COPIAR
      junta do cabecote
      junta da tampa de valvula
      junta do carter	
      junta do coletor de escape
      junta do coletor de admissao
      junta da saida do escapamento
    material: string. OPÇÕES ABAIXO PARA COPIAR
      amianto
      chapa
      papel
      cortiça
  },
  aplicacao: [
    {
      montadora: string. OPÇOES ABAIXO PARA COPIAR
        volkswagen    fiat    chevrolet    ford    renault    nissan    toyota    mitsubishi
        hyundai    jeep    honda    audi    kia    volvo    byd
      carros: [
        { AS SEGUINTES PROPRIEDADES SÃO OBRIGATÓRIAS, PORÉM PODE ADICIONAR MAIS EM UM OBJETO ESPECÍFICO A DEPENDER DA NECESSIDADE
          nome: 'gol', nao se preocupe com espaços, case sensitive, ou sinais 
          modelo: 'g5', 
          anoInicio: '2005', string ou null 
            Ex.: '1/05/2008' '9/1998' '2001' 
            dia e mes pode ter só um numero, mas ano tem que ter os 4 digitos   
          anoFim: null, number ou null
          motor:'1.0 8v flex', string
          complemento: 'com abs', string
        }
      ]
    }
  ],
  referenciaCruzada: [
	  NÃO É PRECISO COLOCAR A REFERENCIA DO PROPRIO PRODUTO
    {marca:'ab',codigos:['123 (refil)','456 (mesma medida)']}
  ]
}

A DESCRICAO EM BUCHA-ESTABILIZADOR ESTÁ PREENCHIDA AUTOMATICA NO JS
NA FUNCAO "renderizarTabelaProd()" 