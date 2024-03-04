const tempoTotalElement = document.getElementById('total-time');
const tempoTotal = obterTempoTotalEmSegundos(tempoTotalElement.textContent.trim());
let tempoRestante = tempoTotal;

let playerEmAndamento = false; // Variável para rastrear o estado do player
const playPauseButton = document.getElementById('play-pause');
const playIcon = '<span class="ph-fill ph-play"></span>';
const pauseIcon = '<span class="ph-fill ph-pause"></span>';

// A depender do playerEmAndamento, mostramos o ícone de play ou pause
if (playerEmAndamento) {
  playPauseButton.innerHTML = pauseIcon;
} else {
  playPauseButton.innerHTML = playIcon;
}

function obterTempoTotalEmSegundos(tempoString) {
  const partesTempo = tempoString.split(':');
  const minutos = parseInt(partesTempo[0], 10);
  const segundos = parseInt(partesTempo[1], 10);
  return minutos * 60 + segundos;
}

function atualizarTempoRestante() {
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  // Atualizar o tempo restante na página
  document.getElementById('remaining-time').textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

  // Atualizar a barra de progresso
  const progresso = ((tempoTotal - tempoRestante) / tempoTotal) * 100;
  document.getElementById('progress-bar').style.width = `${progresso}%`;
}

function alternarPlayPause() {


  // Alternar entre play e pause
  if (playerEmAndamento) {
    playPauseButton.innerHTML = playIcon;
  } else {
    playPauseButton.innerHTML = pauseIcon;
  }

  // Alternar o estado do player
  playerEmAndamento = !playerEmAndamento;
}

// Adicionar um manipulador de eventos ao botão play-pause
document.getElementById('play-pause').addEventListener('click', function () {
  alternarPlayPause();
});

// Atualizar o tempo restante e a barra de progresso a cada segundo
setInterval(function () {
  if (playerEmAndamento && tempoRestante > 0) {
    tempoRestante--;
    atualizarTempoRestante();
  }

  if (tempoRestante == 0) {
    location.reload();
  }
}, 1000);
