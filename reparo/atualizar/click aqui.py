def encontrar_indices(texto, letra):
    return [i for i, c in enumerate(texto) if c == letra]

def procurar_em_lista_atualizada():
    with open(r"lista-atualizada.txt", 'r', encoding="utf-8") as file:
        linhas = file.readlines()
    import re

    lista_atualizada = []
    x = 1
    for texto in linhas:
        if texto == '\n':
            pass
        else:
            # penultimo espaço em diante
            texto = texto.replace('\n','')
            indices = encontrar_indices(texto, ' ')
            if len(indices)>1:
                texto = texto[indices[-2]+1:]

            # se tem inicio de parenteses ou nao
            i_parenteses = encontrar_indices(texto, '(')
            if len(i_parenteses) > 0:
                if len(i_parenteses) == 1: # tem apenas um parentese de abertura
                    i_espacos = encontrar_indices(texto, ' ')

                    # espaço seguido de parentese EX.: "44053 (IG802)"
                    if texto.find(' (') > -1: 
                        texto = texto[:i_espacos[0]]
                    # O parentese de abertura e o espaço estao distantes EX.: "AP/CHT 44046(IG811)"
                    # e o espaço vem antes do parenteses
                    elif texto.find(' ') < texto.find('('):
                        i_espaco = texto.find(' ')
                        texto = texto[i_espaco+1:]
                        i_parentese = texto.find('(')
                        texto = texto[:i_parentese]
                    elif texto.find(' ') > texto.find('('):
                        i_espaco = texto.find(' ')
                        texto = texto[i_espaco+1:]
            else:
                i_espaco = texto.find(' ')
                texto = texto[i_espaco+1:]
                texto = texto.replace(' ','')
            lista_atualizada.append(texto)
            x += 1
    return lista_atualizada, linhas
lista_atualizada, linhas = procurar_em_lista_atualizada()
def procurar_em_produtos_js():
    with open(r"..\codigo\produtos.js", 'r', encoding="utf-8") as file2:
        itens = file2.readlines()

    produtos_js = []
    for item in itens:
        try:
            if item.find('referencia')>-1:
                texto = item.replace('\n','')
                texto = texto.replace(' ','')
                if "'," in texto:
                    indices = encontrar_indices(texto,"'")
                elif '",' in texto:
                    indices = encontrar_indices(texto,'"')
                texto = texto[indices[0]+1:indices[1]]
                produtos_js.append(texto)
        except:
            print('algo deu errado')
            input('\nPressione qualquer tecla para sair...')
    return produtos_js
produtos_js = procurar_em_produtos_js()

def mostrar_lista(lista, nome_da_lista):
    try: 
        maior = lista[0]
        for item in lista:
            if len(item) > len(maior):
                maior = item
        quant_carac = len(maior)

        quant_colunas = 8
        quant_linhas = len(lista)/quant_colunas
        if quant_linhas-int(quant_linhas)>0:
            quant_linhas = int(quant_linhas) + 1
        else: 
            quant_linhas = int(quant_linhas)

        carac_indicador = len(str(len(lista)))
        for l in range(quant_linhas):
            inicio_linha = l
            for coluna in range(quant_colunas):
                try: 
                    print('{:{}} -{:<{}}'.format(
                        inicio_linha+1, 
                        carac_indicador,
                        lista[inicio_linha], 
                        quant_carac), 
                        end=' ')
                    inicio_linha += quant_linhas
                except IndexError:
                    pass
            print()
    except IndexError:
        print('Erro de index: verifique se o arquivo "{}" está vazio'.format(nome_da_lista))

print('QUANTIDADE ITENS DO ARQUIVO "lista-atualizada" = {}'.format(len(linhas)))
mostrar_lista(lista_atualizada, 'lista_atulizada')
print()
print('QUANTIDADE ITENS DO ARQUIVO "produtos.js" = {}'.format(len(produtos_js)))
mostrar_lista(produtos_js, 'produtos_js')

# COMPARACAO
print('\nCOMPARAÇÃO')
if len(lista_atualizada)>0 and len(produtos_js)>0:
    for indice, item in enumerate(produtos_js):
        if not item in lista_atualizada:
            print('produtos_js[{}]: {}'.format(indice+1, item))
            print('lista_atualizada: --\n')
    for indice, item in enumerate(lista_atualizada):
        if not item in produtos_js:
            print('lista_atualizada[{}]: {}'.format(indice+1, item))
            print('produtos_js: --\n')

# DUPLICADAS
print('\nDUPLICADAS')
print('produtos.js')
tem_duplicadas = False
for indice, item in enumerate(produtos_js):
    if produtos_js.count(item)>1:
        print('{} [{}]'.format(item, indice+1))
        tem_duplicadas = True
if not tem_duplicadas:
    print('    Não tem duplicadas')
tem_duplicadas = False
print('\nlista_atualizada')
for indice, item in enumerate(lista_atualizada):
    if lista_atualizada.count(item)>1:
        print('{} [{}]'.format(item, indice+1))
        tem_duplicadas = True
if not tem_duplicadas:
    print('    Não tem duplicadas')


input('\nPressione Enter para sair...')
