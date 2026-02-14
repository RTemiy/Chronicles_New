import CContainer from '../../Classes/CContainer'
import './Smartphone.scss'

export const Smartphone = new CContainer('smartphone',
  `
	<div class="smartphone__container">
		<div class="smartphone__main">
		  <div class="smartphone-chat">
		    <div class="smartphone-chat__statusbar">
		      <p class='smartphone-chat__battery'></p>
		      <p class='smartphone-chat__time'></p>
        </div>
		    <div class="smartphone-chat__toolbar">
		      <img class="smartphone-chat__avatar">
          <div class="smartphone-chat__title-container">
            <p class="smartphone-chat__title"></p>
            <div class='smartphone-chat__typing-indicator'>
              <div class="dot"></div><div class="dot"></div><div class="dot"></div>
            </div>
          </div>
          <img class="smartphone-chat__close-button">
        </div>
        <div class='smartphone-chat__messages'></div>
      </div>
    </div>
	</div>
	`,
  { name: 'battery', selector: '.smartphone-chat__battery' },
  { name: 'time', selector: '.smartphone-chat__time' },
  { name: 'avatar', selector: '.smartphone-chat__avatar' },
  { name: 'toolbar', selector: '.smartphone-chat__toolbar' },
  { name: 'title', selector: '.smartphone-chat__title' },
  { name: 'messages', selector: '.smartphone-chat__messages' },
  { name: 'closeButton', selector: '.smartphone-chat__close-button' },
  { name: 'typingIndicator', selector: '.smartphone-chat__typing-indicator' }
)
