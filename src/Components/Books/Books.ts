import CContainer from '../../Classes/CContainer'
import './Books.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'

export const Books = new CContainer(
  'books',
  `
  <div class="books__container">
  <img class="books__icon" src="${require('../../Images/UI/icon_stories.svg')}"/>
  <p class="books__text"></p>
  <p class="books__help"></p>
  </div>
  `,
  { name: 'amount', selector: '.books__text' },
  { name: 'help', selector: '.books__help' }
)

function addBook (): void {
  saveData(['Books_amount'], [parseInt(loadData(['Books_amount'])!) + 1])
  saveData(['Books_LastDate'], [new Date()])
}

export function wasteBook (approvedFunc: () => void): void {
  if (canWasteBooks()) {
    saveData(['Books_amount'], [parseInt(loadData(['Books_amount'])!) - 1])
    approvedFunc()
  }
}

export function canWasteBooks (): boolean {
  return parseInt(loadData(['Books_amount'])!) >= 1
}

export function startBooksTimer (): void {
  setInterval(() => {
    if (loadData(['Books_LastDate']) !== null) {
      const distance = +new Date() - +new Date(loadData(['Books_LastDate'])!)
      distance > 7200000 && addBook()
      Books.amount.innerText = loadData(['Books_amount'])!
      const minutes = Math.floor((7200000 - distance) / 60000)
      Books.help.innerText = 'Осталось: ' + String(minutes) + ' мин'
    } else {
      saveData(['Books_amount'], ['3'])
      saveData(['Books_LastDate'], [new Date()])
    }
  }, 1000)
}
