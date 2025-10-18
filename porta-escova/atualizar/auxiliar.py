import re

def encontrar_indices(texto, letra):
    return [i for i, c in enumerate(texto) if c == letra]

string = 12
print(len(str(string)))