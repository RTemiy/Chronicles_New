export default function typingText (element: HTMLElement): void {
  const text = element.innerHTML
  const MSPerLetter = 7
  const lettersArray = text.split('')
  element.innerHTML = ''
  let resultString = ''
  lettersArray.forEach((letter, index) => {
    resultString += letter
    if (letter === '<' || letter === '/' || letter === '>' || letter === 'p') {

    } else {
      lettersDoQueue(resultString, index)
    }
  })

  function lettersDoQueue (textLetters: string, multiplier: number): void {
    setTimeout(() => {
      element.innerHTML = textLetters
    }, MSPerLetter * multiplier)
  }
}
