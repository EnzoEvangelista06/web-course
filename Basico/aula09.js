
let umaString = "Um \"texto\"";
console.log(umaString);

// Strings são indexadas.
//           01234567
umaString = 'Um texto';
console.log(umaString[4]); // e
console.log(umaString[-1]); // undefined
console.log(umaString[8]); // undefined

// charAt() -> A mesma coisa que vimos acima.
console.log(umaString.charAt(4)); // e

// concat() -> Faz a concatenação (inútil).
console.log(umaString.concat(' ', 'em', ' ','um lindo dia!'));
// Olha que simples:
console.log(`${umaString} em um lindo dia!`);

// IndexOf(texto) -> Buscando elemento específico (palavra ou letra)
console.log(umaString.indexOf('texto')); // 3
console.log(umaString.lastIndexOf('texto')); // 3 -> busca de trás para frente

console.log(umaString.lastIndexOf('o', 3)); // -1 -> Da posição 3 à 0, não existe a letra "o".
console.log(umaString.lastIndexOf('m', 3)); // 1 -> Da posição 3 à 0,  existe a letra "m".

// match(expressão regular) -> Ele retorna os valores correspondentes à expressão regular em seu parâmetro
console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minúsculas.

// search(expressão regular) -> Retorna a primeira correspondência entre a expressão regular e a string
console.log(umaString.search(/[a-z]/g));

// replace(antiga, nova) -> Substitui um elemento por outro
console.log(umaString.replace('Um', 'Outro'));

// Avançando mais...
umaString = 'O rato roeu a roupa do rei de roma.';

// replace() - com expressões regulares.
console.log(umaString.replace(/r/g, '#'));

// Pegando o tamanho da string
console.log(umaString.length);

// slice() -> fatiando uma string
console.log(umaString.slice(2, 6)); // rato
console.log(umaString.slice(-5, -1));  // roma

// substring() ->  retorna a parte da string entre os índices inicial e final, ou até o final da string.
console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // roma.

// split() -> separando uma string e transformando-a em array
console.log(umaString.split(' '));

// join() -> juntando um array em string
console.log(umaString.split(' ').join(','));

// toUpperCase() -> Tudo em maiúsculo
console.log(umaString.toUpperCase());

// toLowerCase() -> Tudo em minúsculo
console.log(umaString.toLocaleLowerCase());
