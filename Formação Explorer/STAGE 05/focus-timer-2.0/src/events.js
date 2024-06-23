import { themes } from "./elements.js"
// import * as sound from './sounds.js'
import { playMusic } from "./actions.js"

themes.addEventListener('click', (event) => {
  const activeButton = document.querySelector('#themes .active')
  const eventClickButton = event.target.closest('button')
  if (activeButton) {
    activeButton.classList.toggle('active')
  }

  eventClickButton.classList.toggle('active')


  playMusic(eventClickButton)


  // continue logic
})

