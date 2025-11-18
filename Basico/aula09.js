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