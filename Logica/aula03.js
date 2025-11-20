console.log('Luiz Otávio' && 0 && 'Maria'); // 0 --> Retornou o valor falso. 
console.log('Luiz Otávio' && 1 && 'Maria'); // Maria --> A última checada (true).

// FALSY --> Valores que retornam falso.
console.log(!!0);
console.log(!!'', !!"", !!``);
console.log(!!null, !!undefined);
console.log(!!NaN);

// Fora os FALSY, todos retornam verdadeiro.


console.log('Luiz' && 'Maria' && 'Ana'); // Ana --> Último valor verdadeiro.

//
function falaOi() {
    return 'oi';
}

// && --> AND
let vaiExecutar = false;
console.log(vaiExecutar && falaOi()); // se falso, não irá executar.

console.log(0 || false || null || 'Luiz Otávio' || true); // Luiz Otávio --> O primeiro valor verdadeiro.

// || -> OR
const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);

