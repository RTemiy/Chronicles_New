import CContainer from '../../Classes/CContainer'
import './Policy.scss'

const Policy = new CContainer('policy',
	`
<div class='policy__container'>
	<a class='policy__link' href="/privacy_policy.html" target="_blank">Политика конфиденциальности</a>
	<a class='policy__link' href="/terms_conditions.html" target="_blank">Условия и положения</a>
	<button class='policy__button' type='button'>Принять</button>
</div>
`,
	{ name: 'button', selector: '.policy__button' })

export default Policy

export function showPolicy (): void {
  const isAccepted = localStorage.getItem('isPolicyAccepted') !== null && localStorage.getItem('isPolicyAccepted') !== 'false'
  if (!isAccepted) {
    Policy.self.style.display = 'flex'
  }
}

Policy.button.onclick = () => {
  localStorage.setItem('isPolicyAccepted', 'true')
  Policy.self.style.display = 'none'
}
