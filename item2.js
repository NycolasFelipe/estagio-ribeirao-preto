function fibonacci(numero) {
  let a = 0;
  let b = 1;
  let sequencia = [a, b];

  while (b <= numero) {
    let proximoNumero = a + b;
    sequencia.push(proximoNumero);
    a = b;
    b = proximoNumero;
  }

  return sequencia;
}

function numeroPertenceFibonacci(numero) {
  const sequenciaFibonacci = fibonacci(numero);
  const resultado = sequenciaFibonacci.includes(numero);

  if (resultado) {
    return `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}

// Exemplo
const numeroInformado = 5;
const resultado = numeroPertenceFibonacci(numeroInformado);

console.log(resultado);