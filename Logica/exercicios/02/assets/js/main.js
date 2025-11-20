const saida = document.querySelector('section.container h1');

const data = new Date();

const mesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let diaSemana;
switch (data.getDay()) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-feira';
        break;

    case 2:
        diaSemana = 'Terça-feira';
        break;

    case 3:
        diaSemana = 'Quarta-feira';
        break;
    case 4:
        diaSemana = 'Quinta-feira';
        break;
    case 5:
        diaSemana = 'Sexta-feira';
        break;
    case 6:
        diaSemana = 'Sábado';
        break;
    default:
        break;
}

saida.innerText = `${diaSemana}, ${data.getDate()} de ${mesAno[data.getMonth()]} de ${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
