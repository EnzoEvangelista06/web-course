// Primitivos (imutáveis) -> string, number, boolean, undefined, null, bigint e symbol
// Referência (mutáveis) -> object, array e function
let a = [1, 2, 3];
let b = a;

console.log(a, b);

b.push(10);
console.log(a, b); // Como são atribuídos por referência, ambos os arrays recebem o novo valor.

// Maneira de burlar isso:
a = [1, 2, 3];
b = [...a];

b.push(10);
b.push(11,);
b.push(14);

console.log(a, b); // isso por que não refereciamos o B para o mesmo local de A. Apenas fizemos o spread de A em B.


// Objeto
let x = {
    nome: 'Luiz',
    sobrenome: 'Miranda'
}

let y = x;
y.nome = 'João';

console.log(x, y); // A mesma coisa ocorreu

y = {...x}
y.nome = 'Luiz';

console.log(x, y); // Agora sim...
