import CContainer from '../../Classes/CContainer'
import './Books.scss'

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
  localStorage.setItem('Books_amount', String(parseInt(localStorage.getItem('Books_amount')!) + 1))
  localStorage.setItem('Books_LastDate', String(new Date()))
}

export function wasteBook (approvedFunc: () => void): void {
  if (canWasteBooks()) {
    localStorage.setItem('Books_amount', String(parseInt(localStorage.getItem('Books_amount')!) - 1))
    approvedFunc()
  }
}

export function canWasteBooks (): boolean {
  return parseInt(localStorage.getItem('Books_amount')!) >= 1
}

export function startBooksTimer (): void {
  setInterval(() => {
    if (localStorage.getItem('Books_LastDate') !== null) {
      const distance = +new Date() - +new Date(localStorage.getItem('Books_LastDate')!)
      distance > 7200000 && addBook()
      Books.amount.innerText = localStorage.getItem('Books_amount')!
      const minutes = Math.floor((7200000 - distance) / 60000)
      Books.help.innerText = 'Осталось: ' + String(minutes) + ' мин'
    } else {
      localStorage.setItem('Books_amount', '3')
      localStorage.setItem('Books_LastDate', String(new Date()))
    }
  }, 1000)
}
