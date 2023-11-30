/*
Uma empresa de delivery de comida está com dificuldades para organizar a ordem dos pedidos e precisa criar uma rotina que organize seus pedidos em uma fila por odem de prioridade.

Sabendo que a fila atualmente está da seguinte ordem:

a) Adicione um novo pedido `"pedido 15"` ao **final** da fila.

b) Retire o **primeiro** pedido `"pedido 12"` da fila.

c) Imprima no console a `filaDePedidos`

Ao final, deverá ser impresso no console:


["pedido 13", "pedido 14", "pedido 15"];
*/

const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

filaDePedidos.push("Pedido 15"); // Adicionando um elemento ao final da fila.
filaDePedidos.shift(); // Retirando o primeiro elemento

console.log(filaDePedidos);
