import CContainer from '../../Classes/CContainer'
import './Slide.scss'
import { type IButton } from '../../Types/IScene'
import {soundManager} from '../../index';

export const Slide = new CContainer('slide',
  `
    <div class="slide__image-container">
        <img class="slide__imageBack"/>
        <img class="slide__imageLeft"/>
        <img class="slide__imageMiddle"/>
        <img class="slide__imageRight"/>
        <img class="slide__imageFront"/>
        <img class="slide__border"/>
    </div>
    <div class="slide__text">
    </div>
    <div class="slide__buttons">
        <button class="slide__button">1</button>
        <button class="slide__button">2</button>
        <button class="slide__button">3</button>
        <button class="slide__button">4</button>
        <button class="slide__button">5</button>
    </div>
    <img src="${require('../../Images/UI/back.png')}" class="slide__background"/>
    <div class="slide__message">
        <div class="slide__message-text"></div>
    </div>
`,
  { name: 'imageBack', selector: '.slide__imageBack' },
  { name: 'imageLeft', selector: '.slide__imageLeft' },
  { name: 'imageMiddle', selector: '.slide__imageMiddle' },
  { name: 'imageRight', selector: '.slide__imageRight' },
  { name: 'imageFront', selector: '.slide__imageFront' },
  { name: 'border', selector: '.slide__border' },
  { name: 'text', selector: '.slide__text' },
  { name: 'buttons', selector: '.slide__buttons' },
  { name: 'backgroundImage', selector: '.slide__background' },
  { name: 'message', selector: '.slide__message' },
  { name: 'messageText', selector: '.slide__message-text' }
)

export function changeSlideImage (backImage?: string, leftImage?: string, middleImage?: string, rightImage?: string, frontImage?: string): void {
  if (backImage !== undefined && backImage !== '') {
    Slide.imageBack.src = backImage
    Slide.imageBack.style.display = 'block'
    if (backImage === '-') Slide.imageBack.style.display = 'none'
  }
  if (leftImage !== undefined && leftImage !== '') {
    Slide.imageLeft.src = leftImage
    Slide.imageLeft.style.display = 'block'
    if (leftImage === '-') Slide.imageLeft.style.display = 'none'
  }
  if (middleImage !== undefined && middleImage !== '') {
    Slide.imageMiddle.src = middleImage
    Slide.imageMiddle.style.display = 'block'
    if (middleImage === '-') Slide.imageMiddle.style.display = 'none'
  }
  if (rightImage !== undefined && rightImage !== '') {
    Slide.imageRight.src = rightImage
    Slide.imageRight.style.display = 'block'
    if (rightImage === '-') Slide.imageRight.style.display = 'none'
  }
  if (frontImage !== undefined && frontImage !== '') {
    Slide.imageFront.src = frontImage
    Slide.imageFront.style.display = 'block'
    if (frontImage === '-') Slide.imageFront.style.display = 'none'
  }
}

export function changeSlideText (text: string): void {
  Slide.text.innerHTML = '<p>' + text
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
    Slide.text.onclick = () => { buttons[0].func() }
    forEachButton((button: HTMLElement) => {
      button.style.display = 'none'
    })
  } else {
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

export function slideMessage (text: string): void {
  soundManager.play('simple', require('../../Sounds/Common/Notification.mp3'))
  Slide.messageText.innerHTML = text
  Slide.message.style.display = 'flex'
}
