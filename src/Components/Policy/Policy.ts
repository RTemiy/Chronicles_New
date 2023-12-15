import CContainer from '../../Classes/CContainer'
import './Policy.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { route } from '../../Utils/TextConsts'

const Policy = new CContainer('policy',
	`
<div class='policy__container'>
	<a class='policy__link' href="${route}/privacy_policy.html" target="_blank">Политика конфиденциальности</a>
	<a class='policy__link' href="${route}/terms_conditions.html" target="_blank">Условия и положения</a>
	<button class='policy__button' type='button'>Принять</button>
</div>
`,
	{ name: 'button', selector: '.policy__button' })

export default Policy

export function showPolicy (): void {
  const isAccepted = loadData(['isPolicyAccepted']) !== null && loadData(['isPolicyAccepted']) !== 'false'
  if (!isAccepted) {
    Policy.self.style.display = 'flex'
  }
}

Policy.button.onclick = () => {
  saveData(['isPolicyAccepted'], [true])
  Policy.self.style.display = 'none'
}
