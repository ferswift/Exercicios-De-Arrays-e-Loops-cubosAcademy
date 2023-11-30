/*
Considerando que temos dois arrays do mesmo tamanho (mesma quantidade de itens) e que todos os itens de ambos os arrays são números, deveremos, para cada respectiva posição, imprimir o menor valor encontrado entre os dois arrays.

Inicialmente, ambos os arrays terão 5 itens.
*/
const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (let i = 0; i < arrayA.length; i++) {
  const itemA = arrayA[i];
  const itemB = arrayB[i];

  if (itemA > itemB) {
    console.log(`O item do arrayB é menor ${itemB}`);
  } else {
    console.log(`O item do arrayA é menor ${itemA}`);
  }
}
