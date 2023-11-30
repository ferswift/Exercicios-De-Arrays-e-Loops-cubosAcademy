/*
Declare um array contendo alguns números quaisquer.

Depois crie um novo array que contenha apenas os números do array original que estejam entre 10 e 20, incluindo esses números, ou que sejam maiores que 100. Ao final, imprima a variável que guarda o novo array.
*/

const original = [5, 7, 13, 17, 26, 34, 118, 245];

let numerosDentroDoIntervalo = []; // numeros entre 10 e 20 e maiores que 100;

for (const item of original) {
  if (item >= 10 && item <= 20) {
    numerosDentroDoIntervalo.push(item);
  }
  if (item > 100) {
    numerosDentroDoIntervalo.push(item);
  }
}

console.log(numerosDentroDoIntervalo);
