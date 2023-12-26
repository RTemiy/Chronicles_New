import CContainer from '../../Classes/CContainer'
import './Policy.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { route } from '../../Utils/TextConsts'
import { showMessage } from '../MenuMessage/MenuMessage'

const Policy = new CContainer('policy',
	`
<div class='policy__container'>
	<a class='policy__link' href="${route}/privacy_policy.html" target="_blank">Политика конфиденциальности</a>
	<a class='policy__link' href="${route}/terms_conditions.html" target="_blank">Условия и положения</a>
	<button class='policy__button' type='button'>Принять</button>
</div>
`,
	{ name: 'button', selector: '.policy__button' })

export function showPolicy (): void {
  const isAccepted = loadData(['isPolicyAccepted']) !== null && loadData(['isPolicyAccepted']) !== 'false'
  setInterval(() => {
    saveData(['Profile', 'TimeSpent'], [parseInt(loadData(['Profile', 'TimeSpent'])!) + 1])
  }, 60000)
  if (!isAccepted) {
    Policy.self.style.display = 'flex'
  }
  if (!navigator.userAgent.includes('Chrome')) {
    console.log(navigator.userAgent)
    showMessage('При использовании браузеров кроме "Chrome" могут возникать ошибки в приложении!', 'Принять все риски и продолжить')
  }
}

Policy.button.onclick = () => {
  saveData(['isPolicyAccepted'], [true])
  const now = new Date()
  saveData(['Profile', 'FirstLaunch'], [String(now.getDate()) + '.' + String(now.getMonth()) + '.' + String(now.getFullYear())])
  saveData(['Profile', 'Avatar'], ['Default'])
  saveData(['Profile', 'Banner'], ['Default'])
  saveData(['Profile', 'TimeSpent'], [0])
  saveData(['Profile', 'BooksWasted'], [0])
  Policy.self.style.display = 'none'
}
