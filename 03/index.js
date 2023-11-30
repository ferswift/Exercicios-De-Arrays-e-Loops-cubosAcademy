/*
Faça um programa que verifica se existe o número 10 nesse array. Caso exista, informa a posição (índice) em que o número 10 se encontra. Caso não exista, deverá ser impresso -1.
*/
const numeros = [54, 22, 14, 87, 10, 284];

let numeroEncontrado = -1; // Guarda o valor de -1 caso o numero 10 não seja encontrado.

for (let indice = 0; indice < numeros.length; indice++) {
  if (numeros[indice] === 10) {
    numeroEncontrado = indice;
  }
}
console.log(`O numero encontrado está no indice: ${numeroEncontrado}`);
