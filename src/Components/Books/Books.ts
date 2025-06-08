import CContainer from '../../Classes/CContainer'
import './Books.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { showMessage } from '../MenuMessage/MenuMessage'
import { DesktopMode, devMode } from '../../Utils/technicalConsts';
import { showAd } from '../../Functions/advertisement'

export const Books = new CContainer(
  'books',
  `
  <div class="books__container" ${DesktopMode && 'style="visibility: hidden;"'}>
    <img class="books__icon" src="${require('../../Images/UI/icon_stories_currency.svg')}"/>
    <p class="books__text"></p>
    <p class="books__help"></p>
  </div>
  <div class="ad_book" ${DesktopMode && 'style="visibility: hidden;"'}>
    <img class="books__icon" src="${require('../../Images/UI/icon_stories_currency_add.svg')}"/>
  </div>
  `,
  { name: 'books', selector: '.books__container' },
  { name: 'amount', selector: '.books__text' },
  { name: 'help', selector: '.books__help' },
  { name: 'adBook', selector: '.ad_book' }
)

export function addBook (): void {
  const booksAmount = parseInt(loadData(['Books_amount'])!)
  if (booksAmount >= 3) {
    devMode && saveData(['Books_amount'], [1000])
    DesktopMode && saveData(['Books_amount'], [1000])
  } else {
    hideAdBook()
    showMessage(`Вы получили<img class="books__icon" src="${require('../../Images/UI/icon_stories_currency.svg')}"/>`, 'Принять')
    saveData(['Books_amount'], [booksAmount + 1])
  }
  saveData(['Books_LastDate'], [new Date()])
}

export function wasteBook (approvedFunc: () => void): void {
  showAdBook()
  if (canWasteBooks()) {
    saveData(['Books_amount'], [parseInt(loadData(['Books_amount'])!) - 1])
    saveData(['Profile', 'BooksWasted'], [parseInt(loadData(['Profile', 'BooksWasted'])!) + 1])
    approvedFunc()
    !canWasteBooks() && showAdBook()
  } else {
    showAdBook()
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
      if (distance > 10800000) {
        addBook()
        addBook()
        addBook()
      }
      Books.amount.innerText = loadData(['Books_amount'])!
      const minutes = Math.floor((10800000 - distance) / 60000)
      Books.help.innerText = 'Осталось: ' + String(minutes) + ' мин'
    } else {
      saveData(['Books_amount'], ['3'])
      saveData(['Books_LastDate'], [new Date()])
    }
  }, 1000)
}

function showAdBook (): void {
  Books.adBook.style.display = 'block'
  Books.books.style.display = 'none'
}

function hideAdBook (): void {
  Books.books.style.display = 'flex'
  Books.adBook.style.display = 'none'
}

Books.adBook.onclick = () => {
  showAd('long', () => {
    hideAdBook()
    addBook()
  })
}
