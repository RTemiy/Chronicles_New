import CContainer from '../../Classes/CContainer'
import './Debugger.scss'
import { scenarioManager, statsManager } from '../../index'

const Debugger = new CContainer('debugger', `
  <button class="debugger__close-button"></button>
  <div class="debugger__window">
  
  </div>
`,
{ name: 'window', selector: '.debugger__window' },
{ name: 'closeButton', selector: '.debugger__close-button' }
)

export default function showDebugger (): void {
  Debugger.self.style.display = 'flex'
  const currentScenario = scenarioManager.getAllScenarioSlides()
  let result = ''
  const allStoryStats = statsManager.getAllStoryStats(scenarioManager.getCurrentStoryName())
  result += '<h2>Статы:</h2>'
  allStoryStats.forEach(stat => {
    result += `
    <div class="debugger__stat">
      <p class="debugger__stat-text">${stat.category}_${stat.id} ${stat.name !== undefined ? '<i>(' + stat.name + ') </i>' : ''}: ${stat.value}</p>
      ${stat.name === undefined && stat.idDescription !== undefined ? '<p class="debugger__stat-text"><i>(' + stat.idDescription + ')</i></p>' : ''}
    </div>
    `
  })
  result += '<h2>Слайды:</h2>'
  currentScenario.forEach(slide => {
    result += `
    <div class="debugger__slide">
      <p class="debugger__slide-id">Слайд № ${slide.id}</p>
      <p class="debugger__slide-text">${slide.text}</p>
      <p class="debugger__slide-goTo"><div class="debugger__buttons">${slide.buttons.map(button => {
        return `<p class="debugger__button">| ${button.text} | переход на ${button.goTo}</p>`
      }).join(' ')}</div></p>
      <p class="debugger__stats">${slide.stats
  ? slide.stats.map(stat => {
        return `<p>- Стат: ${stat.id} ${stat.value}</p>`
      }).join(' ')
  : ''}</p>
    </div>
    `
  })
  Debugger.window.innerHTML = result
}

Debugger.closeButton.onclick = () => {
  Debugger.self.style.display = 'none'
}
