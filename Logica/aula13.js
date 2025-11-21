const nome = 'Luiz Otávio';

for (let i of nome) {
    console.log(i);
}

const alunos = ['João', 'Maria', 'Luiza'];
for (let i of alunos) {
    console.log(i);
};

// Isso é um pouco mais avançado
alunos.forEach((valor, indice, array) => {
    // valor e o índice
    console.log(valor, indice, array);
})