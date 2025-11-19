let numero = 1; // number -> int
let outroNumero = 2.5; // number -> float

// transformando um número em uma string. Desta forma, ocorre a concatenação e não a adição.
console.log(numero.toString() + outroNumero);
console.log(typeof numero); // A conversão foi feita apenas naa linha 5, não em todo o código.

numero = 1500;
console.log(numero.toString(2)); // representação binária do valor passado.

let numeroGrande = 10.8756242
// Limitando as casas decimais
console.log(numeroGrande.toFixed(2));

numero = 5;
// Verificando se o núemro é inteiro.
console.log(Number.isInteger(numero), numero); // True -> É inteiro.
console.log(Number.isInteger(outroNumero), outroNumero); // False -> Não é inteiro.

// Verificando se é um NaN
let temp = numero * 'Olá';
console.log(Number.isNaN(temp), temp); // True -> Isto é um NaN.

temp = numero * '10';
console.log(Number.isNaN(temp), temp); // False -> Isto não é um NaN.


// IEEE 754-2008
numero = 0.7;
outroNumero = 0.1;

console.log(numero + outroNumero);

// numero += outroNumero;
// numero += outroNumero;
// numero += outroNumero;

console.log(numero);
console.log(numero.toFixed(2)); // Retorna 1.00, só que não é um valor real.


// Aqui resolve tudo.
numero = ((numero * 100) + (outroNumero * 100))/ 100;
console.log(numero);