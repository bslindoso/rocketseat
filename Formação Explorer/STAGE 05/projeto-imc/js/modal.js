import { textToSpeechFirstMessage } from './speech.js'

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title'),
  buttonClose: document.querySelector('button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },

  close() {
    Modal.wrapper.classList.remove('open')
    textToSpeechFirstMessage()
  }
}

Modal.buttonClose.onclick = () => Modal.close()

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    Modal.close()
  }
})