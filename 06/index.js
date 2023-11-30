/*
Declare um array com alguns números inteiros quaisquer.

Depois, percorra este array e calcule a **soma dos números pares** presentes nesse array.

Exemplo:

Para o array **numeros** abaixo
*/

const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let soma = 0;

let pares = []; // array contendo números pares

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
    soma += numeros[i];
  }
}

console.log(pares, soma);
