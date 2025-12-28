import CContainer from '../../Classes/CContainer'

import './Slide.scss'
import './Images.scss'
import './Text.scss'
import './Buttons.scss'
import './Message.scss'
import './Toolbar.scss'
import './Timer.scss'
import './Achievement.scss'
import './Effects.scss'
import './Console.scss'
import { animateBackForth } from '../../Functions/animateBackForth'
import { doCommand } from '../../Functions/console'
import { doVibrate } from '../../Functions/doVibrate';
import { loadData } from '../../Functions/localStorageManager';

export const Slide = new CContainer('slide',
  `
    <div class="console">
      <input class="console__input" type="text">
      <p class="console__slide-id"></p>
    </div>
    
    <div class="slide__image-container">
        <img class="slide__imageLeft"/>
        <img class="slide__imageMiddle"/>
        <img class="slide__imageRight"/>
        <img class="slide__imageFront"/>
        <img class="slide__border" src="${require('../../Images/UI/border_invisible.png')}"/>
    </div>
    <div class="slide__text-container">
    	<p class="slide__speaker"></p>
	    <div class="slide__text"></div>
    </div>
    <div class="slide__buttons">
        <button class="slide__button"></button>
        <button class="slide__button"></button>
        <button class="slide__button"></button>
        <button class="slide__button"></button>
        <button class="slide__button"></button>
    </div>
    <img class="slide__background" src="${require('../../Images/UI/transparent.png')}"/>
    <img class="slide__backgroundFullscreenObjectLeft" src="${require('../../Images/UI/transparent.png')}"/>
    <img class="slide__backgroundFullscreenObjectRight" src="${require('../../Images/UI/transparent.png')}"/>
    <img class="slide__backgroundFullscreenObjectCenter" src="${require('../../Images/UI/transparent.png')}"/>
    <img class="slide__backgroundHelper"/>
    <div class="slide__message">
        <div class="slide__message-text"></div>
    </div>
    <div class="slide__toolbar">
        <button type="button" class="slide__inventory-button"></button>
        <button type="button" class="slide__journal-button"></button>
        <button type="button" class="slide__previous-button"></button>
        <button type="button" class="slide__exit-button"></button>
        <button type="button" class="slide__hide-button"></button>
    </div>
    <div class="pie" style="--duration: 10s;">
    <p class="pie__leftTime">0</p>
    </div>
    <div class='slide__achievement'>
    	<div class="achievement">
        <img class="achievement__image">
        <p class="achievement__title"></p>
        <p class="achievement__text"></p>
      </div>
		</div>
`,
  { name: 'console', selector: '.console' },
  { name: 'consoleInput', selector: '.console__input' },
  { name: 'consoleSlideId', selector: '.console__slide-id' },
  { name: 'imageLeft', selector: '.slide__imageLeft' },
  { name: 'imageMiddle', selector: '.slide__imageMiddle' },
  { name: 'imageRight', selector: '.slide__imageRight' },
  { name: 'imageFront', selector: '.slide__imageFront' },
  { name: 'border', selector: '.slide__border' },
  { name: 'text', selector: '.slide__text' },
  { name: 'buttons', selector: '.slide__buttons' },
  { name: 'backgroundImage', selector: '.slide__background' },
  { name: 'backgroundImageHelper', selector: '.slide__backgroundHelper' },
  { name: 'fullscreenObject', selector: '.slide__backgroundFullscreenObjectCenter' },
  { name: 'fullscreenObjectL', selector: '.slide__backgroundFullscreenObjectLeft' },
  { name: 'fullscreenObjectR', selector: '.slide__backgroundFullscreenObjectRight' },
  { name: 'message', selector: '.slide__message' },
  { name: 'messageText', selector: '.slide__message-text' },
  { name: 'toolBar', selector: '.slide__toolbar' },
  { name: 'inventoryButton', selector: '.slide__inventory-button' },
  { name: 'journalButton', selector: '.slide__journal-button' },
  { name: 'previousSlideButton', selector: '.slide__previous-button' },
  { name: 'exitSlideButton', selector: '.slide__exit-button' },
  { name: 'hideToolbarButton', selector: '.slide__hide-button' },
  { name: 'timer', selector: '.pie' },
  { name: 'timerLeft', selector: '.pie__leftTime' },
  { name: 'cutScene', selector: '.cut-scene' },
  { name: 'achievement', selector: '.slide__achievement' },
  { name: 'achievementImage', selector: '.achievement__image' },
  { name: 'achievementTitle', selector: '.achievement__title' },
  { name: 'achievementText', selector: '.achievement__text' },
  { name: 'speaker', selector: '.slide__speaker' }
)

export function whiteFlash (): void {
  animateBackForth(Slide.self, 'slide_whiteFlash', 2000)
}

export function blackFlash (): void {
  animateBackForth(Slide.self, 'slide_blackFlash', 2000)
}

export function purpleFlash (): void {
  animateBackForth(Slide.self, 'slide_purpleFlash', 2000)
}

export function redPulsating (): void {
  Slide.self.classList.add('slide_redPulseInfinite')
}

export function redPulsatingStop (): void {
  Slide.self.classList.remove('slide_redPulseInfinite')
}

export function redFlash (): void {
  animateBackForth(Slide.self, 'slide_redFlash', 2000)
  doVibrate('long')
}

export function discoFlash01 (): void {
  animateBackForth(Slide.self, 'slide_disco-1', 2000)
}

export function discoFlash02 (): void {
  animateBackForth(Slide.self, 'slide_disco-2', 2000)
}

export function discoFlash03 (): void {
  animateBackForth(Slide.self, 'slide_disco-3', 2000)
}

export function vhs (): void {
  animateBackForth(Slide.self, 'slide_vhs', 2000)
}

Slide.consoleInput.addEventListener('keypress', (evt: { key: string, value: string }) => {
  if (evt.key === 'Enter') {
    doCommand(Slide.consoleInput.value)
    Slide.consoleInput.value = ''
  }
})

export function setCurrentSlideId (id: number): void {
  Slide.consoleSlideId.innerText = id
}

Slide.hideToolbarButton.onclick = () => {
  Slide.toolBar.classList.toggle('slide__toolbar_hidden')
}

export function hideToolbar (): void {
  loadData(['Settings_HideToolbar']) === 'true' && Slide.toolBar.classList.add('slide__toolbar_hidden')
}
