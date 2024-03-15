// ===================================================================================================================
// SPEECH 
const Speech = {
  button: document.querySelector('button#speechTitle'),
  textToSpeech() {
    const titleText = document.querySelector('main h1.title').innerText
    const label01Text = document.querySelector('form .input-wrapper:first-of-type label').innerText.split('(')[0].trim()
    const label02Text = document.querySelector('form .input-wrapper:nth-of-type(2) label').innerText.split('(')[0].trim()
    return `${titleText}. \n Digite o ${label01Text} em kilograma e a ${label02Text} em centímetros.`

  },
  speakText() {
    const utterance = new SpeechSynthesisUtterance(Speech.textToSpeech())
    window.speechSynthesis.speak(utterance)
  }
}

Speech.button.onclick = Speech.speakText

// ===================================================================================================================
// VARIABLES
const form = document.querySelector('form')
const inputWeight = form.querySelector('#weight')
const inputHeight = form.querySelector('#height')

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title'),
  buttonClose: document.querySelector('button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },

  close() {
    Modal.wrapper.classList.remove('open')
  }
}

// const alertError = document.querySelector('.alert-error')

// EVENTS
form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const imc = IMC(weight, height)

  Modal.message.innerText = `Seu IMC é de ${imc}`
  Modal.open()

}

Modal.buttonClose.onclick = () => Modal.close()


// FUNCTIONS
function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}