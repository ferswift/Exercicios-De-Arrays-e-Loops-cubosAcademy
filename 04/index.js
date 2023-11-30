/*
Faça um programa que imprima na tela todos os múltiplos de 3 compreendidos entre 0 e 500.

Os múltiplos de 3 são: 0, 3, 6, 9, 12...

Portanto, deverá ser impresso o console da seguinte forma:
*/

for (let i = 0; i < 500; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
