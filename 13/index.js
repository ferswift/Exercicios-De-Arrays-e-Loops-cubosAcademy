/*
Precisamos verificar em uma caixa de disjuntores quais estão ligados.

A caixa de disjuntores é representada por um array onde, cada item do array é um disjuntor. Nesse array o índice do item é a identificação do disjuntor (começando em 0) e o valor do item, um `boolean`, é a indicação se o disjuntor está ligado ou não. Imprima no console a posição **apenas dos disjuntores que estão ligados**, se possível, utilizar o conceito de **_truthiness_**.
*/
const disjuntores = [false, false, true, false, false, true, false, false];

let disjuntoresLigados = [];
let disjuntoresDesligados = [];

for (let i = 0; i < disjuntores.length; i++) {
  if (disjuntores[i] === true) {
    disjuntoresLigados.push(i);
  } else {
    disjuntoresDesligados.push(i);
  }
}

console.log(`Disjuntores ligados no indice ${disjuntoresLigados}`);
console.log(`Disjuntores desligados no indice ${disjuntoresDesligados}`);
