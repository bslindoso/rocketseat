import { Speech, textToSpeechFirstMessage } from './speech.js'
import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { isNotANumber, calculateIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = form.querySelector('#weight')
const inputHeight = form.querySelector('#height')

textToSpeechFirstMessage()

form.oninput = () => AlertError.close()

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = isNotANumber(weight) || isNotANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Speech.textToSpeech = message
  Modal.message.innerText = message
  Modal.open()
}


