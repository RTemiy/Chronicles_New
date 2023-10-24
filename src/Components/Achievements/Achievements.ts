import CContainer from '../../Classes/CContainer'
import './Achievements.css'
import { achievementsManager } from '../../index'

const Achievements = new CContainer('achievements show',
  `
<p class="achievements__amount"></p>
<div class="achievements__buttons">
  <button id="ab-immortals" type="button" class="achievements__button styled-border styled-background">Бессмертные</button>
  <button id="ab-aurora" type="button" class="achievements__button styled-border styled-background">Аврора</button>
  <button id="ab-amore" type="button" class="achievements__button styled-border styled-background">Аморе</button>
  <button id="ab-ror" type="button" class="achievements__button styled-border styled-background">Время крыс</button>
</div>
<div class="achievements__container"></div>
`,
  { name: 'amount', selector: '.achievements__amount' },
  { name: 'container', selector: '.achievements__container' },
  { name: 'buttonImmortals', selector: '#ab-immortals' },
  { name: 'buttonAurora', selector: '#ab-aurora' },
  { name: 'buttonAmore', selector: '#ab-amore' },
  { name: 'buttonROR', selector: '#ab-ror' }
)

export const renderAchievements = (story?: string): void => {
  Achievements.amount.innerHTML = 'Получено достижений ' + achievementsManager.getAchievementsAmount()
  Achievements.container.innerHTML = achievementsManager.getAchievementsHTML(story)
}

Achievements.buttonImmortals.onclick = () => { renderAchievements('Immortals') }
Achievements.buttonAurora.onclick = () => { renderAchievements('Aurora') }
Achievements.buttonAmore.onclick = () => { renderAchievements('Amore') }
Achievements.buttonROR.onclick = () => { renderAchievements('ROR') }

export default Achievements
