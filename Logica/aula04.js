// if e else
const aluno = {
    nome: 'Luiz',
    idade: 16,
    anoEscolar: '1º ano do Ensino Médio',
    notaEscolar() {
        return Math.random() * (10 - 1) + 1;
    }
}

if (aluno.idade > 18)
    console.log(`${aluno.nome} é maior de 18 anos.`);
else
    console.log(`${aluno.nome} é menor de 18 anos.`);

const notaEscolar = aluno.notaEscolar().toFixed(2);

if (notaEscolar <= 5) {
    console.log(`${aluno.nome} tirou nota inferior ou igual a 5. Ele foi reprovado.`);
} else if (notaEscolar > 5) {
    console.log(`${aluno.nome} foi aprovado. A nota foi superior a 5.`);
} else if (notaEscolar >= 8 && notaEscolar <= 10) {
    console.log(`O aluno ${aluno.nome} foi aprovado com excelência.`);
} else {
    console.log('Nota incompatível!');
}

console.log(notaEscolar);