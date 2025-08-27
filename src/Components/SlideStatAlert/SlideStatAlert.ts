import CContainer from '../../Classes/CContainer'
import './SlideStatAlert.scss'

export const SlideStatAlert = new CContainer('statAlert', '')

export function showStatAlert (image: string, text: string): void {
  addToQueue(`
  <img class="statAlert__image" src="${image}">
    <p class="statAlert__text">${text}</p>
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
      }, 3000)
    }, 3000)
  }, 500 * SlideStatAlert.self.childElementCount)
}
