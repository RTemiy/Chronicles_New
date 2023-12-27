import CContainer from '../../Classes/CContainer'
import './Achievements.scss'
import { achievementsManager } from '../../index'
import CElementManager from '../../Classes/CElementManager'
import { EStoriesEn, EStoriesRu } from '../../Utils/EStoriesNames'

const Achievements = new CContainer('achievements',
  `
<p class="tab__title">Достижения</p>
<div class="achievements_block">
  <p class="achievements__amount"></p>
  <div class="achievements__buttons">
  </div>
  <div class="achievements__container"></div>
</div>
`,
  { name: 'amount', selector: '.achievements__amount' },
  { name: 'container', selector: '.achievements__container' },
  { name: 'buttonsContainer', selector: '.achievements__buttons' }
)

export const renderAchievements = (story?: string): void => {
  Achievements.amount.innerHTML = 'Получено достижений: ' + achievementsManager.getAchievementsAmount(story)
  Achievements.container.innerHTML = achievementsManager.getAchievementsHTML(story)
}

function renderAchievementsButtons (): void {
  const storiesNames = Object.keys(EStoriesEn)
  let result = ''
  storiesNames.forEach(name => {
    result += `<button id="ab-${name}" type="button" class="achievements__button">${EStoriesRu[name]}</button>`
  })
  Achievements.buttonsContainer.innerHTML = result
  const allButtons = Achievements.buttonsContainer.querySelectorAll('.achievements__button')
  const achievementButtonsManager = new CElementManager()
  achievementButtonsManager.setCustomClassToChange('button-active')
  storiesNames.forEach((name, index) => {
    allButtons[index].onclick = () => {
      renderAchievements(name)
    }
  })
}

renderAchievementsButtons()

export default Achievements
