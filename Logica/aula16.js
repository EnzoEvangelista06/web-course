function soma(x, y) {
    if (typeof x !== 'number' ||  typeof y !== 'number') {
        throw new Error('Os valores passados não são do tipo esperado.');
    }

    return x + y;
}

try {
    console.log(soma('1', 5));
    
} catch(e) {
    // Não é interessante exibirmos problemas internos ao usuário.
    console.log('Ocorreu um erro ao tentarmos realizar a operação de adição.');

    // console.log(e); // exibindo o nosso erro.
}