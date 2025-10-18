import re

def encontrar_indices(texto, letra):
    return [i for i, c in enumerate(texto) if c == letra]

string = ['a','b','a']
print(encontrar_indices(string, 'a'))