produtos.sort((a,b) => {
    if (a.marca == b.marca){
        return a.referencia.localeCompare(b.referencia)
    }
    return a.marca.localeCompare(b.marca)
})
console.clear()
let texto = ''
produtos.forEach(produto =>{
    texto += `${produto.marca.toUpperCase()} ${produto.referencia.toUpperCase()}` 
    if (produto.imagens.some(s => s==='')){
        texto += ' sem_img'
    }
    texto += '\n'
})
console.log(texto)