import CContainer from '../../Classes/CContainer'

import './Slide.scss'
import './Images.scss'
import './Text.scss'
import './Buttons.scss'
import './Message.scss'
import './Toolbar.scss'
import './Timer.scss'
import './CutScene.scss'
import './Achievement.scss'
import './Effects.scss'

export const Slide = new CContainer('slide',
  `
    <div class="slide__image-container">
        <img class="slide__imageLeft"/>
        <img class="slide__imageMiddle"/>
        <img class="slide__imageRight"/>
        <img class="slide__imageFront"/>
        <img class="slide__border"/>
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
    <img class="slide__background"/>
    <div class="slide__message">
        <div class="slide__message-text"></div>
    </div>
    <div class="slide__toolbar">
        <button type="button" class="slide__inventory-button"></button>
        <button type="button" class="slide__previous-button"></button>
        <button type="button" class="slide__exit-button"></button>
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
    <div class='cut-scene'>
    	<div class='cut-scene__container'>
    	<img class='cut-scene__image'/>
    	<button class='cut-scene__button'>Продолжить</button>
			</div>
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
  { name: 'exitSlideButton', selector: '.slide__exit-button' },
  { name: 'timer', selector: '.pie' },
  { name: 'timerLeft', selector: '.pie__leftTime' },
  { name: 'cutScene', selector: '.cut-scene' },
  { name: 'cutSceneContainer', selector: '.cut-scene__container' },
  { name: 'cutSceneImage', selector: '.cut-scene__image' },
  { name: 'cutSceneButton', selector: '.cut-scene__button' },
  { name: 'achievement', selector: '.slide__achievement' },
  { name: 'achievementImage', selector: '.achievement__image' },
  { name: 'achievementTitle', selector: '.achievement__title' },
  { name: 'achievementText', selector: '.achievement__text' },
  { name: 'speaker', selector: '.slide__speaker' }
)
