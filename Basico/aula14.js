const aluno = {
    // Atributos
    nome: 'João',
    idade: 16,
    anoEscolar: 1,
    // Por ser uma função dentro de um objeto, chamamos-a de método.
    foiAprovado(nota) {
        return nota > 8 ? true : false;
    }
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.foiAprovado(9));


//  Função que cria objetos
function criaPessoa(nome, idade) {
    return {
        nome,
        idade,
        fala() {
            return this.nome;
        }
    }
}

let pessoaAleatoria = criaPessoa('Luiz', 9);
console.log(pessoaAleatoria)

pessoaAleatoria = criaPessoa('Maria', 19);
console.log(pessoaAleatoria);
console.log(pessoaAleatoria.fala());