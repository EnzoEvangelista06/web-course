let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

console.log(a, b, c);

// Desestruturação por array
[a, b, c] = [b, c, a];
console.log(a, b, c);


// 
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero);

// rest / spread
let [terceiroNumero, ...resto] = numeros;
console.log(terceiroNumero, resto);

// pulando
let [um, dois, , , cinco] = numeros;
console.log(um, dois, cinco);

const outrosNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [, [, quinto]] = outrosNumeros;
console.log(quinto); // meio complexo...