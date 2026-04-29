import CContainer from '../../Classes/CContainer'
import './Collection.scss'
import { cardsManager, tabManagerMenu } from '../../index'
import CElementManager from '../../Classes/CElementManager'
import { EStoriesAvailable, EStoriesEn, EStoriesRu } from '../../Utils/EStoriesNames'
import { Profile } from '../Profile/Profile'
import { showMessage } from '../MenuMessage/MenuMessage'

const Collection = new CContainer('cards',
  `
<p class="tab__title">Коллекция<img src="${require('../../Media/Images/UI/icon_info.svg')}" class="icon_span"/></p>
<button class="cards__back-button"></button>
<div class="cards_block">
  <div class="cards__menu">
    <p class="cards__amount"></p>
    <div class="cards__buttons"></div>
  </div>
  <div class="cards__container"></div>
</div>
`,
  { name: 'infoButton', selector: '.icon_span' },
  { name: 'amount', selector: '.cards__amount' },
  { name: 'container', selector: '.cards__container' },
  { name: 'buttonsContainer', selector: '.cards__buttons' },
  { name: 'backButton', selector: '.cards__back-button' }
)

export const renderCollection = (story?: string): void => {
  Collection.amount.innerHTML = 'Получено: ' + cardsManager.getCardsAmount(story)
  Collection.container.innerHTML = cardsManager.getCardsHTML(story)
}

function renderCollectionButtons (): void {
  const storiesNames = Object.keys(EStoriesEn)
  let result = ''
  storiesNames.forEach(name => {
    EStoriesAvailable[name] === 1 && (result += `<button id="ab-${name}" type="button" class="cards__button story-${name}">${EStoriesRu[name]}</button>`)
  })
  Collection.buttonsContainer.innerHTML = result
  const allButtons = Collection.buttonsContainer.querySelectorAll('.cards__button')
  const cardsButtonsManager = new CElementManager()
  cardsButtonsManager.setCustomClassToChange('button-active')
  let index = 0
  storiesNames.forEach((name) => {
    if (EStoriesAvailable[name] === 1) {
      allButtons[index].onclick = () => {
        renderCollection(name)
      }
      index++
    }
  })
}

Collection.backButton.onclick = () => {
  tabManagerMenu.open(Profile.self)
}

Collection.infoButton.onclick = () => {
  showMessage(`
  <p>Коллекционные предметы можно получить, проходя истории и выполняя определенные условия в них.
  <p>Нажмите на картинку, чтобы увидеть её описание снизу.
`, 'Принять')
}

renderCollectionButtons()

export default Collection
