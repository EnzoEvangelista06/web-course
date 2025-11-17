// As variáveis constantes são variáveis cujo valor não pode ser alterado após sua atribuição inicial.

const pi = 3.14159;
console.log("O valor de pi é:", pi);

// Tentando alterar o valor de uma variável constante resultará em um erro
// pi = 3.14; // Isso causará um erro: TypeError: Assignment to constant variable.

const nome = "João";
console.log("O nome é:", nome);

// Mesmo que o valor da variável constante não possa ser alterado, 
// se a constante for um objeto ou array, suas propriedades ou elementos podem ser modificados.

const pessoa = {
    nome: "Maria",
    idade: 30
};

console.log("Antes da modificação:", pessoa);

// Modificando as propriedades do objeto constante
pessoa.idade = 31;
console.log("Depois da modificação:", pessoa);

// No entanto, não podemos reatribuir a variável constante para um novo objeto
// pessoa = { nome: "Ana", idade: 25 }; // Isso causará um erro: TypeError: Assignment to constant variable.