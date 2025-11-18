const nome = prompt('Informe o seu nome: ');

document.body.innerHTML += `O seu nome é: ${nome}<br />`;
document.body.innerHTML += `O seu nome tem ${nome.length} letras<br />`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br />`;
document.body.innerHTML += `O primeiro índice da letra A no seu nome: ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `O último índice da letra A no seu nome: ${nome.lastIndexOf('a')}<br />`;
document.body.innerHTML += `As três últimas letra do seu nome são: ${nome[-3]}<br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`;
document.body.innerHTML += `Seu nome em letras maiúsculas: ${nome.toUpperCase()}<br />`;
document.body.innerHTML += `Seu nome em letras minúsculas: ${nome.toLowerCase()}<br />`;
