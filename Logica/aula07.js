const nota = Math.round(Math.random() * (10 - 1) + 1);

switch (nota) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Nota péssima!');
        break;
    case 5:
    case 6:
    case 7:
            console.log('Nota mediana.');
        break;
    case 8:
    case 9:
    case 10:
        console.log('Você foi aprovado com excelência!');
        break;
    default:
        console.log('Nota inválida!');
        break;
}

console.log(nota);