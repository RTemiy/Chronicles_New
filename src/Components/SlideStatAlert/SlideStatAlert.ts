import CContainer from '../../Classes/CContainer'
import './SlideStatAlert.scss'

export const SlideStatAlert = new CContainer('statAlert', '')

export function showStatAlert (image: string, text: string): void {
  const fixedText = fixText(text).split(' ')
  addToQueue(`
  <img class="statAlert__image" src="${image}">
    <p class="statAlert__text">${fixedText[0]}</p>
    ${fixedText[1].includes('+') ? '<p class="statAlert__value statAlert__value-add">' + String(fixedText[1]) + '</p>' : fixedText[1] !== '' ? '<p class="statAlert__value statAlert__value-minus">' + String(fixedText[1]) + '</p>' : '<p class="statAlert__value statAlert__value-new">new!</p>'}
  `)
}

function addToQueue (blockInner: string): void {
  const newBlock = document.createElement('div')
  newBlock.classList.add('statAlert__block')
  newBlock.innerHTML = blockInner
  newBlock.style.display = 'none'
  SlideStatAlert.self.appendChild(newBlock)
  setTimeout((): void => {
    newBlock.style.display = 'flex'
    newBlock.classList.add('slide-in-left')
    setTimeout((): void => {
      newBlock.classList.add('slide-out-left')
      setTimeout((): void => {
        newBlock.remove()
      }, 1000)
    }, 3000)
  }, 150 * SlideStatAlert.self.childElementCount)
}

function fixText (text: string): string {
  const textParts = text.split(' ')
  const firstPart = textParts[0]
  let secondPart = textParts[1]
  if (secondPart.includes('0') && secondPart.length === 1) {
    secondPart = ''
  } else if (!secondPart.includes('-')) {
    secondPart = '+' + secondPart
  }
  return firstPart + ' ' + secondPart
}
