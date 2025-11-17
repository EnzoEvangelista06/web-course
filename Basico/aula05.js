// Diferença entre VAR e LET
// Redeclaração de variáveis

var nome = 'Luiz';
var nome = 'Gustavo';

// Isso não oferece erros
console.log(nome);

let outroNome = 'Pedro';
// Isso dá erro! // let outroNome = 'Lucas';

// Problema de Escopo
{
    var idade =  50;
}

console.log(idade);

{
    let outraIdade = 19;
    console.log(outraIdade);
}
// Isso dá problema!
// console.log(outraIdade);