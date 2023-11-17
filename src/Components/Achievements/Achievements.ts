import CContainer from '../../Classes/CContainer'
import './Achievements.scss'
import { achievementsManager } from '../../index'
import CElementManager from '../../Classes/CElementManager'

const Achievements = new CContainer('achievements',
  `
<p class="tab__title">Достижения</p>
<div class="achievements_block">
  <p class="achievements__amount"></p>
  <div class="achievements__buttons">
    <button id="ab-immortals" type="button" class="achievements__button">Бессмертные</button>
    <button id="ab-aurora" type="button" class="achievements__button">Аврора</button>
    <button id="ab-aep" type="button" class="achievements__button">Аморе</button>
    <button id="ab-ror" type="button" class="achievements__button">Время крыс</button>
  </div>
  <div class="achievements__container"></div>
</div>
`,
  { name: 'amount', selector: '.achievements__amount' },
  { name: 'container', selector: '.achievements__container' },
  { name: 'buttonImmortals', selector: '#ab-immortals' },
  { name: 'buttonAurora', selector: '#ab-aurora' },
  { name: 'buttonAEP', selector: '#ab-aep' },
  { name: 'buttonROR', selector: '#ab-ror' }
)

export const renderAchievements = (story?: string): void => {
  Achievements.amount.innerHTML = 'Получено достижений ' + achievementsManager.getAchievementsAmount(story)
  Achievements.container.innerHTML = achievementsManager.getAchievementsHTML(story)
}

const achievementButtonsManager = new CElementManager(Achievements.buttonImmortals, Achievements.buttonAurora, Achievements.buttonAEP, Achievements.buttonROR)

achievementButtonsManager.setCustomClassToChange('button-active')

Achievements.buttonImmortals.onclick = () => {
  renderAchievements('Immortals')
  achievementButtonsManager.setCustomClassOnlyTo(Achievements.buttonImmortals)
}

Achievements.buttonAurora.onclick = () => {
  renderAchievements('Aurora')
  achievementButtonsManager.setCustomClassOnlyTo(Achievements.buttonAurora)
}

Achievements.buttonAEP.onclick = () => {
  renderAchievements('AEP')
  achievementButtonsManager.setCustomClassOnlyTo(Achievements.buttonAEP)
}

Achievements.buttonROR.onclick = () => {
  renderAchievements('ROR')
  achievementButtonsManager.setCustomClassOnlyTo(Achievements.buttonROR)
}

export default Achievements
