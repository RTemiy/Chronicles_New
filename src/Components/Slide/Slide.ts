import CContainer from '../../Classes/CContainer'
import './Slide.scss'
import { type IButton } from '../../Types/IScene'
import { soundManager, tabManagerMenu } from '../../index'
import { Inventory, renderInventory } from '../Inventory/Inventory'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { animateBackForth } from '../../Functions/animateBackForth'
import Stories from '../Stories/Stories'
import MenuToolbar from '../MenuToolbar/MenuToolbar';

export const Slide = new CContainer('slide',
  `
    <div class="slide__image-container">
        <img class="slide__imageLeft"/>
        <img class="slide__imageMiddle"/>
        <img class="slide__imageRight"/>
        <img class="slide__imageFront"/>
        <img class="slide__border"/>
    </div>
    <div class="slide__text">
    </div>
    <div class="slide__buttons">
        <button class="slide__button"></button>
        <button class="slide__button"></button>
        <button class="slide__button"></button>
        <button class="slide__button"></button>
        <button class="slide__button"></button>
    </div>
    <img class="slide__background"/>
    <div class="slide__message">
        <div class="slide__message-text"></div>
    </div>
    <div class="slide__toolbar">
        <button type="button" class="slide__inventory-button"></button>
        <button type="button" class="slide__previous-button"></button>
        <button type="button" class="slide__exit-button"></button>
    </div>
    
`,
  { name: 'imageLeft', selector: '.slide__imageLeft' },
  { name: 'imageMiddle', selector: '.slide__imageMiddle' },
  { name: 'imageRight', selector: '.slide__imageRight' },
  { name: 'imageFront', selector: '.slide__imageFront' },
  { name: 'border', selector: '.slide__border' },
  { name: 'text', selector: '.slide__text' },
  { name: 'buttons', selector: '.slide__buttons' },
  { name: 'backgroundImage', selector: '.slide__background' },
  { name: 'message', selector: '.slide__message' },
  { name: 'messageText', selector: '.slide__message-text' },
  { name: 'inventoryButton', selector: '.slide__inventory-button' },
  { name: 'previousSlideButton', selector: '.slide__previous-button' },
  { name: 'exitSlideButton', selector: '.slide__exit-button' }
)

export function changeSlideImage (backImage?: string, leftImage?: string, middleImage?: string, rightImage?: string, frontImage?: string, borderImage?: string): void {
  if (backImage !== undefined && backImage !== '') {
    Slide.backgroundImage.src = backImage
  } else if (backImage === undefined) {
    Slide.backgroundImage.display = 'none'
    Slide.backgroundImage.src = ''
  }
  if (leftImage !== undefined && leftImage !== '') {
    if (!Slide.imageLeft.src.includes(leftImage)) {
      animateBackForth(Slide.imageLeft, 'fade-in-left-left', 550)
    }
    Slide.imageLeft.src = leftImage
    Slide.imageLeft.style.display = 'block'
  } else if (leftImage === undefined) {
    Slide.imageLeft.src = ''
    Slide.imageLeft.display = 'none'
  }
  if (middleImage !== undefined && middleImage !== '') {
    if (!Slide.imageMiddle.src.includes(middleImage)) {
      animateBackForth(Slide.imageMiddle, 'fade-in-left', 550)
    }
    Slide.imageMiddle.src = middleImage
    Slide.imageMiddle.style.display = 'block'
  } else if (middleImage === undefined) {
    Slide.imageMiddle.display = 'none'
    Slide.imageMiddle.src = ''
  }
  if (rightImage !== undefined && rightImage !== '') {
    if (!Slide.imageRight.src.includes(rightImage)) {
      animateBackForth(Slide.imageRight, 'fade-in-left-right', 550)
    }
    Slide.imageRight.src = rightImage
    Slide.imageRight.style.display = 'block'
  } else if (rightImage === undefined) {
    Slide.imageRight.display = 'none'
    Slide.imageRight.src = ''
  }
  if (frontImage !== undefined && frontImage !== '') {
    if (!Slide.imageFront.src.includes(frontImage)) {
      animateBackForth(Slide.imageFront, 'fade-in-left', 550)
    }
    Slide.imageFront.src = frontImage
    Slide.imageFront.style.display = 'block'
  } else if (frontImage === undefined) {
    Slide.imageFront.display = 'none'
    Slide.imageFront.src = ''
  }
  if (borderImage !== undefined && borderImage !== '') {
    Slide.border.src = borderImage
    Slide.border.style.display = 'block'
  } else if (borderImage === undefined) {
    Slide.border.src = require('../../Images/UI/border_invisible.png')
  }
}

export function changeSlideText (text: string): void {
  previousSlideText = Slide.text.innerHTML
  Slide.text.style.display = 'none'
  Slide.text.innerHTML = '<p>' + text
  setTimeout(() => { Slide.text.style.display = 'block' }, 10)
}

function forEachButton (func: (button: HTMLElement) => void): void {
  getButtonsArray().forEach(button => {
    func(button)
  })
}

function getButtonsArray (): HTMLElement[] {
  return Array.from(Slide.buttons.children)
}

function resetButtonValues (): void {
  Slide.text.onclick = () => {}
  forEachButton((button: HTMLElement) => {
    button.onclick = () => {}
    button.style.display = 'none'
    button.innerText = ''
  })
}

export function setButtonValues (buttons: IButton[]): void {
  resetButtonValues()
  if (buttons.length <= 1) {
    Slide.text.onclick = () => {
      buttons[0].func()
    }
    Slide.backgroundImage.onclick = () => {
      buttons[0].func()
    }
    forEachButton((button: HTMLElement) => {
      button.style.display = 'none'
    })
  } else {
    Slide.backgroundImage.onclick = () => {}
    const buttonsArray = getButtonsArray()
    buttons.forEach((button, index) => {
      buttonsArray[index].onclick = () => { buttons[index].func() }
      if (buttons[index].isActive === undefined || buttons[index].isActive!) buttonsArray[index].style.display = 'block'
      else buttonsArray[index].style.display = 'none'
      buttonsArray[index].innerText = buttons[index].text
    })
  }
}

Slide.message.onclick = () => { Slide.message.style.display = 'none' }

export function slideMessage (text: string, noSound?: boolean): void {
  if (noSound === false || noSound === undefined) soundManager.play('simple', require('../../Sounds/Common/Notification.mp3'))
  Slide.messageText.innerHTML = text
  Slide.message.style.display = 'flex'
}

Slide.inventoryButton.onclick = () => {
  renderInventory(EStoriesEn.Immortals); Inventory.self.style.display = 'flex'
}

let previousSlideText = 'Нет предыдущего слайда'

Slide.previousSlideButton.onclick = () => {
  if (previousSlideText.length >= 1) slideMessage(previousSlideText, true)
}

Slide.exitSlideButton.onclick = () => {
  tabManagerMenu.open(Stories.self)
  Slide.self.style.display = 'none'
  MenuToolbar.self.style.display = 'flex'
  soundManager.play('menu')
}
