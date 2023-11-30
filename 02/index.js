const letras = ["A", "a", "B", "C", "E", "e"];

let soma = 0;

for (const letra of letras) {
  if (letra.toLowerCase() === "e") {
    soma++;
  }
}

if (soma > 0) {
  console.log(`Foram encontradas ${soma} letras "E" ou "e"`);
} else {
  console.log('Não foram encontradas letras "E" ou "e" ');
}

// const ternario =
//   soma > 0
//     ? console.log(`Foram encontradas ${soma} letras "E" ou "e"`)
//     : console.log('Não foram encontradas letras "E" ou "e"');