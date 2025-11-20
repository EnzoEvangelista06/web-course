// Não podemos redeclarar
let nome = 'Luiz';
// let nome = 'Otávio' // erro
let outroNome = 'Otávio';

if (true) {
    let nome = 'Maria'; // Escopo diferente!
    console.log(nome, outroNome); // Se não encontrar a variável solicitada no escopo de bloco, ele irá buscar no escolo acima (explicação do pq a variável "outroNome" está sendo logada).
}

console.log(nome); // Busca no escopo global. Não entra no escopo de bloco para encontrar a variável.


console.log(sobrenome);
// let sobrenome = 'Evangelista'; // Aq dá erro
var sobrenome = 'Nascimento'; // Aq não. A variável é inicializada. Isso ocorre com funções. São içadas para o topo do código. (Hoisting)
