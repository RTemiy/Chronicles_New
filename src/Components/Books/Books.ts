import CContainer from '../../Classes/CContainer'
import './Books.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { showMessage } from '../MenuMessage/MenuMessage'

export const Books = new CContainer(
  'books',
  `
  <div class="books__container">
  <img class="books__icon" src="${require('../../Images/UI/icon_stories_currency.svg')}"/>
  <p class="books__text"></p>
  <p class="books__help"></p>
  </div>
  `,
  { name: 'amount', selector: '.books__text' },
  { name: 'help', selector: '.books__help' }
)


export function addBook (): void {
  const booksAmount = parseInt(loadData(['Books_amount'])!)
  if (booksAmount >= 3) {
    saveData(['Books_amount'], [3])
  } else {
    showMessage(`Вы получили<img class="books__icon" src="${require('../../Images/UI/icon_stories_currency.svg')}"/>`, 'Принять')
    saveData(['Books_amount'], [booksAmount + 1])
  }
  saveData(['Books_LastDate'], [new Date()])
}

export function wasteBook (approvedFunc: () => void): void {
  if (canWasteBooks()) {
    saveData(['Books_amount'], [parseInt(loadData(['Books_amount'])!) - 1])
    saveData(['Profile', 'BooksWasted'], [parseInt(loadData(['Profile', 'BooksWasted'])!) + 1])
    approvedFunc()
  } else {
    showMessage(`Недостаточно<img class="books__icon" src="${require('../../Images/UI/icon_stories_currency.svg')}"/>`, 'Принять')
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
