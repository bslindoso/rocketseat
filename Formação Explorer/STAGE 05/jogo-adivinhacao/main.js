const screen1 = document.querySelector('.screen1')
const inputNumber = document.querySelector('#inputNumber')
const buttonTry = screen1.querySelector('button')
const screen2 = document.querySelector('.screen2')
const buttonPlayAgain = screen2.querySelector('button')
let number = imagineANumber() // Gera o número aleatório
let tries = 0;

// EVENTS
document.addEventListener('DOMContentLoaded', inputFocus)
buttonTry.addEventListener('click', guessANumber)
buttonPlayAgain.addEventListener('click', playAgain)
document.addEventListener('keydown', playAgainEnterKeyDown)

// FUNCTIONS AND CALLBACKS
function imagineANumber() {
  return parseInt(Math.round(Math.random() * 10));
}

function guessANumber(event) {
  event.preventDefault()
  const guess = Number(inputNumber.value)

  if (guess < 0 || guess > 10 || inputNumber.value === '') {
    alert('O número está entre 0 e 10')
  } else if (guess === number) {
    tries++;
    toggleScreen()
    screen2.querySelector('h2').innerText = `Acertou o número ${number} em ${tries} tentativas`
  } else {
    tries++;
    inputNumber.focus()
  }

  inputNumber.value = ''
  console.log(`number: ${number} | tries: ${tries} | guess: ${guess}`)

}

function playAgain() {
  toggleScreen()
  number = imagineANumber()
  tries = 0
}

function playAgainEnterKeyDown(e) {
  if (e.key === 'Enter' && screen1.classList.contains('hide')) {
    playAgain()
    setTimeout(inputFocus, 400)
  }
}

function inputFocus() {
  inputNumber.focus()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}