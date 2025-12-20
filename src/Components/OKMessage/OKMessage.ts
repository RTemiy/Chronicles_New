import './OKMessage.scss'
import CContainer from '../../Classes/CContainer'
import { loadData } from '../../Functions/localStorageManager'

export const OKMessage = new CContainer('okmessage',
	`
    	<div class='okmessage__container'>
    	  <img class="okmessage-image">
    	  <button class="okmessage-button"></button>
			</div>
`,
	{ name: 'container', selector: '.okmessage__container' },
	{ name: 'image', selector: '.okmessage-image' },
	{ name: 'button', selector: '.okmessage-button' })

export function showOKMessage (OKMessageInfo: { image: string, buttonText: string, goTo: () => void }): void {
  OKMessage.self.style.display = 'flex'
  setTimeout(() => {
    OKMessage.image.src = OKMessageInfo.image
    OKMessage.button.innerText = OKMessageInfo.buttonText
    OKMessage.self.classList.add('okmessage_show')
  }, 100)
  setTimeout(() => {
    OKMessage.container.style.display = 'grid'
    setTimeout(() => {
      OKMessage.container.classList.add('okmessage__container_show')
    }, 100)
  }, 2000)
  OKMessage.button.onclick = () => {
    setTimeout(() => { OKMessageInfo.goTo() }, 2000)
  }
}

OKMessage.button.addEventListener('click', () => {
  OKMessage.container.classList.remove('okmessage__container_show')
  setTimeout(() => {
    OKMessage.container.style.display = 'none'
    OKMessage.self.classList.remove('okmessage_show')
  }, 1000)
  setTimeout(() => {
    OKMessage.self.style.display = 'none'
  }, 3000)
})
