/*
Depois, crie um novo array a partir do primeiro que contenha apenas os nomes que começam com a letra "A" ou "a"(maiúscula ou minúscula).
Ao final, imprima a variável que guarda o array.
*/

const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesComA = [];
for (const nome of nomes) {
  if (nome[0].toLowerCase() === "a") {
    nomesComA.push(nome);
  }
}

console.log(nomesComA);