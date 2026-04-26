import CContainer from '../../Classes/CContainer'
import './Cards.scss'
import { cardsManager, tabManagerMenu } from '../../index'
import CElementManager from '../../Classes/CElementManager'
import { EStoriesAvailable, EStoriesEn, EStoriesRu } from '../../Utils/EStoriesNames';
import { Profile } from '../Profile/Profile'

const Cards = new CContainer('cards',
  `
<p class="tab__title">Коллекция</p>
<button class="cards__back-button"></button>
<div class="cards_block">
  <div class="cards__menu">
    <p class="cards__amount"></p>
    <div class="cards__buttons"></div>
  </div>
  <div class="cards__container"></div>
</div>
`,
  { name: 'amount', selector: '.cards__amount' },
  { name: 'container', selector: '.cards__container' },
  { name: 'buttonsContainer', selector: '.cards__buttons' },
  { name: 'backButton', selector: '.cards__back-button' }
)

export const renderCards = (story?: string): void => {
  Cards.amount.innerHTML = 'Получено достижений: ' + cardsManager.getCardsAmount(story)
  Cards.container.innerHTML = cardsManager.getCardsHTML(story)
}

function renderCardsButtons (): void {
  const storiesNames = Object.keys(EStoriesEn)
  let result = ''
  storiesNames.forEach(name => {
    EStoriesAvailable[name] === 1 && (result += `<button id="ab-${name}" type="button" class="cards__button story-${name}">${EStoriesRu[name]}</button>`)
  })
  Cards.buttonsContainer.innerHTML = result
  const allButtons = Cards.buttonsContainer.querySelectorAll('.cards__button')
  const cardsButtonsManager = new CElementManager()
  cardsButtonsManager.setCustomClassToChange('button-active')
  let index = 0
  storiesNames.forEach((name) => {
    if (EStoriesAvailable[name] === 1) {
      allButtons[index].onclick = () => {
        renderCards(name)
      }
      index++
    }
  })
}

Cards.backButton.onclick = () => {
  tabManagerMenu.open(Profile.self)
}

renderCardsButtons()

export default Cards
