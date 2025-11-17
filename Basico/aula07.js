/** Operadores Aritméticos
 * Adição/Concatenação: +
 * Subtração: -
 * Multiplicação: *
 * Divisão: /
 * Resto: %
 * Potenciação: **
 */

let numero = '5';
let outroNumero = 10;

// Concatenação: string + number
console.log(numero + outroNumero);

numero = 100;

// Adição
console.log(numero + outroNumero);

// Subtração
console.log(numero - outroNumero);

// Multilicação
console.log(numero * outroNumero)

// Divisão
console.log(numero / outroNumero);

// Resto da divisão
console.log(numero % outroNumero)

// Potenciação
console.log(numero ** outroNumero)

console.log('Alterando a ordem: ', (numero + outroNumero) / numero);


// Incremento/Decremento
numero++;
console.log(numero);

console.log(++numero); // 102: pré-incremento
console.log(numero++); // 102: pós-incremento

console.log(numero);

numero--;
console.log(numero);


// Operação com atribuição
let numeroAleatorio = 100;

numeroAleatorio += 5;
console.log(numeroAleatorio);

numeroAleatorio *= 5;
console.log(numeroAleatorio);


// NOT A NUMBER
console.log(5 * 'Enzo'); // Erro!


// `parseInt(number)`, `parseFloat(number)`, `Number(number)` -> Transformando valor em  número!
let decimal = '10.3';
console.log(typeof decimal);
console.log(typeof parseInt(decimal), parseInt(decimal));
console.log(typeof parseFloat(decimal), parseFloat(decimal));
console.log(typeof Number(decimal), Number(decimal));
