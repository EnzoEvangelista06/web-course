//** Uma função chamada ePaisagem que recebe
//* dois argumentos, largura e altura de uma imagem (number).
//* Retorne true se a imagem estiver em modo paisagem. */

const ePaisagem = (largura, altura) => largura > altura ? true : false;

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));