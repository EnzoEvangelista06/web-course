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
alunos[10] = 'Mariana'; // Adicionando elementos no índice 10.
console.log(alunos, alunos[10]);