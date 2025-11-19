// função void (sem retorno)
function falarOi(nome) {
    console.log(`Olá, mundo. Bom dia, ${nome}!`);
}

falarOi(); // undefined
falarOi('Luiz'); // Luiz -> Isso é chamado de parâmetro da função.
falarOi('Maria');

// Função com retorno
function darTchau(nome) {
    return `Que pena, você irá sair. Tchau, ${nome}!`;
}

console.log(darTchau('Luiz'));

// Armazenando valor.
const despedida = darTchau('Ana');
console.log(despedida); 

// Outro exemplo
function servindoComida(nome, comida) {
    console.log(`Aqui está a sua comida, ${nome}.`);
    return comida;
}

const comida = servindoComida('Mário', 'Lasanha');
console.log(comida);

// Valores padrões. Se n forem passados valores, os padrões assumem
function somarNumeros(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

// Isso não dispara erro pq essa variável está em um escopo diferente da função.
const resultado = somarNumeros(2); // 3
console.log(resultado);


// função anônima
const funcaoAnonima = function(x) {
    return Math.sqrt(x);
};

console.log(funcaoAnonima(81));
 
// Arrow function -> com retorno implícito
const arrowFunction = (x, y) => x ** y;
console.log(arrowFunction(2, 8));