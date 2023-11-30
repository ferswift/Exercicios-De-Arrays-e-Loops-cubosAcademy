/*
Declare um array com alguns números inteiros quaisquer.

Depois, percorra este array, filtrando apenas os números **pares** e os armazenando em um novo array.

Ao final, imprima a variável do array contendo apenas os números pares no console.

Exemplo:

Para o array **original** abaixo
*/

const original = [1, 4, 12, 21, 53, 88, 112];

let numerosPares = []; // armazenando os números pares

for (const item of original) {
  if (item % 2 === 0) {
    numerosPares.push(item);
  }
}

console.log(numerosPares);
