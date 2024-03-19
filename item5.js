function inverterString(str) {
  let stringInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

// Exemplo
const stringOriginal = "Testando";
const stringInvertida = inverterString(stringOriginal);

console.log(stringInvertida);