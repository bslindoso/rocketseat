// Minha versão antes de assistir a solução do vídeo

let guess;

const number = parseInt(Math.round(Math.random() * 10));

let tries = 0;
while (number !== guess) {
  tries++;
  guess = parseInt(prompt('Adivinhe qual o número que estou pensando? Está entre 0 e 10.'));
  alert(number === guess ? `Parabéns! Você adivinhou o número ${number} em ${tries} tentativas` : `Erro, tente novamente`);
}