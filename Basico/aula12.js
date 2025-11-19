// Array -> São listas onde podemos adicionar diversos dados.
//               0       1        2       3          4
let alunos = ['João', 'Maria', 'José', 'Mateus', 'Gustavo'];
console.log(alunos);

// Arrays são indexados, assim como as Strings.
console.log(alunos[0], alunos[2]); // João e José --> Os elementos que correspondem aos índices.

// Alterando valor de um índice.
alunos[0] = 'Eduardo';
console.log(alunos, alunos[0]);

// Adicionando índice específico
alunos[10] = 'Mariana'; // Adicionando elementos no índice 10. Obs.: isso não é recomendado.
console.log(alunos, alunos[10]);

// Tamanho do Array
console.log(alunos.length);

// Adicionando ao último elemento (método primitivo)
alunos[alunos.length] = 'Luiza';
console.log(alunos);

alunos.push('Enzo'); // Método do array para adicionar elemento ao último índice.
console.log(alunos);

// adicionando no começo
alunos.unshift('Anastácia');
console.log(alunos);

// removendo elemento do fim
alunos.pop();
// removendo do começo
alunos.shift();

console.log(alunos)

// Deletando índice especifíco
delete alunos[10];
console.log(alunos);

// undefined
console.log(alunos[50]);

alunos = ['Luiz', 'Maria', 'João'];
alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos[4]);

console.log(alunos.slice(0, 3)); // fatiando array

console.log(typeof alunos); // object -> sim, um array é um objeto na sua essência.
console.log(alunos instanceof Array); // True -> alunos é uma instância de Array.