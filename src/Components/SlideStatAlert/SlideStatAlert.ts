import CContainer from '../../Classes/CContainer'
import './SlideStatAlert.scss'

export const SlideStatAlert = new CContainer('statAlert', '')

export function showStatAlert (image: string, text: string, value: number): void {
  const fixedText = transformValue(value)
  addToQueue(`
    <img class="statAlert__image" src="${image}">
    <p class="statAlert__text">${text}</p>
    ${fixedText.includes('+') ? '<p class="statAlert__value statAlert__value-add">' + String(fixedText) + '</p>' : fixedText !== 'new!' ? '<p class="statAlert__value statAlert__value-minus">' + fixedText + '</p>' : '<p class="statAlert__value statAlert__value-new">' + fixedText + '</p>'}
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

function transformValue (value: number): string {
  if (value === 0) {
    return 'new!'
  } else if (value > 0) {
    return `+${value}`
  } else {
    return `${value}`
  }
}
