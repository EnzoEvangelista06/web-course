const numeros = [1, 2, 3,4, 5, 6, 7, 8, 9];

// Isso funciona em qualquer laço de repetição.
for (let numero of numeros) {
    // Aqui ele pula o valor.
    if (numero == 3) {
        console.log('Pulei');
        continue;
    };

    // Aqui ele quebra todo o laço.
    if (numero == 7) break;

    console.log(numero);
}