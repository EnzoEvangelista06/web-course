let i = 0;

while (i <= 10) {
    console.log(i);
    // se não incrementarmos a variável I, o laço torna-se infinito.
    i++;
}

console.log('Fora do laço.');

//
i = 0;
const nome = 'Luiz';
while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

//
function aleatorio(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

let rand = aleatorio(1, 50);

while (rand !== 10) {
    rand = aleatorio(1, 50);
    console.log(rand);
}

// do While --> executa e depois checa.
console.log('####');

rand = 10;
do {
    console.log(rand);
    rand = aleatorio(1, 50);
} while (rand !== 10);