/*
Declare um array com alguns números inteiros quaisquer.

Depois, faça um programa que calcule a maior diferença entre dois números desse array.

Deverá ser impresso no console:

10

Pois a maior diferença é `11 - 1 = 10`.

Teste também alterando os números. 

*/

const numeros = [8, 11, 4, 1];

let maiorNumero = 0;
let menorNumero = Infinity;

for (const numero of numeros) {
  if (maiorNumero < numero) {
    maiorNumero = numero;
  }
  if (menorNumero > numero) {
    menorNumero = numero;
  }
}

console.log(
  `Pois a maior diferença é ${maiorNumero} - ${menorNumero} = ${
    maiorNumero - menorNumero
  } `
);
