let data = new Date();
console.log(data.toString()); // Data atual

data = new Date(2025, 5, 25, 16, 4);
console.log(data.toString());

data = new Date();

// get
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());

console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milissegundo', data.getMilliseconds());

console.log('Dia da semana', data.getDay()); // 0 - Domingo --> 06 - Sábado


// 
function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const milissegundos = data.getMilliseconds();
    const diaSemana = data.getDay();

    return `${dia}/${mes}/${ano} - ${hora}:${minutos}:${segundos}:${milissegundos}`;
}

data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);