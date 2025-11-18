let numero = 1; // number -> int
let outroNumero = 2.5; // number -> float

// transformando um número em uma string. Desta forma, ocorre a concatenação e não a adição.
console.log(numero.toString() + outroNumero);
console.log(typeof numero); // A conversão foi feita apenas naa linha 5, não em todo o código.

numero = 1500;
console.log(numero.toString(2)); // representação binária do valor passado.