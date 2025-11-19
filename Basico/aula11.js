// Objeto Math
let numero = 9.45842;

console.log(Math.floor(numero)); // Arredondando número para baixo.
console.log(Math.ceil(numero)); // Arredondando o número para cima.
console.log(Math.round(numero)); // Arredondando para o número mais próximo (antecessor ou sucessor).

// Recuperando o maior número.
console.log(Math.max(-78, 0, 91, 293, 103, 45, 67, 7, 4, 1, 90));

// Gerando número aleatório
console.log(Math.random());

// Gerando número aleatório com range
const aleatorio = Math.random() * (10 - 5) + 5;
console.log(Math.round(aleatorio));

// Raiz quadrada
console.log(Math.sqrt(Math.round(numero))); // 3 -> Raiz quadrada de 9.
// ou...
console.log(Math.round(numero) ** (1/2)); // 3 -> Raiz quadrada de 9.

// infinity
console.log(100 / 0);