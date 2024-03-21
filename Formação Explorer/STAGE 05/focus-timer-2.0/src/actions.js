import * as sound from './sounds.js'
export function playMusic(eventClickButton) {

  const musicId = eventClickButton.querySelector('svg').id
  const bodyBG = document.querySelector('body')
  bodyBG.style.backgroundSize = 'cover'; // ajusta a imagem para cobrir todo o elemento
  bodyBG.style.backgroundPosition = 'center';
  switch (musicId) {
    case 'floresta':
      sound.cafeteria.pause()
      sound.chuva.pause()
      sound.lareira.pause()
      sound.floresta.play()
      bodyBG.style.backgroundImage = 'url(./assets/floresta.jpg)'
      break
    case 'cafeteria':
      sound.cafeteria.play()
      sound.floresta.pause()
      sound.chuva.pause()
      sound.lareira.pause()
      bodyBG.style.backgroundImage = 'url(./assets/cafeteria.jpg)'
      break
    case 'chuva':
      sound.floresta.pause()
      sound.cafeteria.pause()
      sound.lareira.pause()
      sound.chuva.play()
      bodyBG.style.backgroundImage = 'url(./assets/chuva.jpg)'
      break
    case 'lareira':
      sound.floresta.pause()
      sound.cafeteria.pause()
      sound.chuva.pause()
      sound.lareira.play()
      bodyBG.style.backgroundImage = 'url(./assets/lareira.jpg)'
      break
    default:
      break
  }
  document.documentElement.classList.add('dark')

}