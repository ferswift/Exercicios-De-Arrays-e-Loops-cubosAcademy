/*
Declare um array com alguns números quaisquer.

Depois, faça um programa que encontre o maior número desse array e o imprima no console.

Exemplo:

Para o array com os **numeros** abaixo:
*/

const numeros = [3, 24, 1, 8, 11, 7, 15];

let maiorNumero = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maiorNumero) {
    maiorNumero = numeros[i];
  }
}

console.log(maiorNumero);
