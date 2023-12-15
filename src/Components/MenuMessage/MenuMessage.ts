import CContainer from '../../Classes/CContainer'
import './MenuMessage.scss'

export const MenuMessage = new CContainer(
  'menu-message',
	`
	<div class="menu-message__container">
		<p class="menu-message__text"></p>
	  <button class="menu-message__button" type="button">Ок</button>
  </div>
	`,
	{ name: 'message', selector: '.menu-message__container' },
	{ name: 'messageText', selector: '.menu-message__text' },
	{ name: 'button', selector: '.menu-message__button' }
)

export function showMessage (messageText: string, buttonText: string): void {
  MenuMessage.self.style.display = 'flex'
  MenuMessage.button.innerText = buttonText
  MenuMessage.messageText.innerHTML = messageText
}

MenuMessage.button.onclick = () => {
  MenuMessage.self.style.display = 'none'
}
