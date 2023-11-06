import CContainer from '../../Classes/CContainer'
import './Slide.scss'

export const Slide = new CContainer('slide',
  `
    <div class="slide__image-container">
        <img class="slide__image" src="${require('../../Images/Immortals/Backgrounds/Abstraction.png')}"/>
        <img class="slide__border"/>
    </div>
    <div class="slide__text">
    Привет пупсик
    </div>
    <div class="slide__buttons">
        <button class="slide__button">1</button>
        <button class="slide__button">2</button>
        <button class="slide__button">3</button>
        <button class="slide__button">4</button>
        <button class="slide__button">5</button>
    </div>
    <img src="${require('../../Images/UI/back.png')}" class="slide__background"/>
`,
  { name: 'image', selector: '.slide__image' },
  { name: 'border', selector: '.slide__border' },
  { name: 'text', selector: '.slide__text' },
  { name: 'buttons', selector: '.slide__buttons' },
  { name: 'backgroundImage', selector: '.slide__background' }
)
