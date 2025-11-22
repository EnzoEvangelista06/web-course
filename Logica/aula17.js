function retornaHora(data) {
    if (data && !(data instanceof Date)) throw new TypeError('Esperado instância de Date.');

    if (!data)
        data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora  = retornaHora(11);
    console.log(hora);
} catch(e) {
    // Tratar erro
    console.log(e);
} finally {
    // sempre irá chegar aqui!
    console.log('tenha um bom dia!');
}
