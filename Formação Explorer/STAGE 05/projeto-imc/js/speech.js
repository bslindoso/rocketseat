export const Speech = {
  titleButton: document.querySelector('button#speechTitle'),
  resultButton: document.querySelector('button#speechResult'),
  textToSpeech: String(),
  speakText() {
    const utterance = new SpeechSynthesisUtterance(Speech.textToSpeech)
    window.speechSynthesis.speak(utterance)
  }
}

export function textToSpeechFirstMessage() {
  const titleText = document.querySelector('main h1.title').innerText
  const label01Text = document.querySelector('form .input-wrapper:first-of-type label').innerText.split('(')[0].trim()
  const label02Text = document.querySelector('form .input-wrapper:nth-of-type(2) label').innerText.split('(')[0].trim()

  Speech.textToSpeech = `${titleText}. \n Digite o ${label01Text} em kilograma e a ${label02Text} em centímetros.`
}

Speech.titleButton.onclick = Speech.speakText
Speech.resultButton.onclick = Speech.speakText