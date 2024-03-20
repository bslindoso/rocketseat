import './toggle-mode.js'

// TESTA A MUDANÇA ACTIVE
const themes = document.querySelector('#themes')
console.log(themes)

themes.addEventListener('click', (event) => {
  const activeButton = document.querySelector('#themes .active')
  if (activeButton) {
    activeButton.classList.toggle('active')
  }

  const sameButtonClick = activeButton != event.target.closest('button')
  if (sameButtonClick) {
    event.target.closest('button').classList.toggle('active')
  }

  // continue logic


})