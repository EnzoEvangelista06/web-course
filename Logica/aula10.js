const pessoa  = {
    nome: 'João',
    sobrenome: 'Miranda',
    idade: 20,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
let {nome, idade} = pessoa;
console.log(nome, idade);


// Valor padrão e alterando o nome de variável --> caso o valor não exista
pessoa.nome = '';

let {outroNome: nomeVariavel = 'José'} = pessoa;
console.log(nomeVariavel, idade); // Alteramos o nome da variável.

//
const {endereco: { rua: r, numero }, endereco, ...resto} = pessoa;
console.log(r, numero);
console.log(endereco, resto); // endereço completo 