import CContainer from '../../Classes/CContainer'
import './Settings.scss'
import './Switch.scss'
import './Select.scss'
import { soundManager, tabManagerMenu } from '../../index'
import { Credits } from '../Credits/Credits'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { route } from '../../Utils/textConsts'
import { MenuMessage, showMessage } from '../MenuMessage/MenuMessage'
import { showAd } from '../../Functions/advertisement'
import makeExplosion from '../../Functions/explosion'
import downloadProgress from '../../Functions/downloadProgress'
import { setWindowScale, toggleFullscreen } from '../../Functions/desktopFuncs'
import { ANDROIDMODE, DESKTOPMODE } from '../../Utils/technicalConsts'
import { SlideStatAlert } from '../SlideStatAlert/SlideStatAlert'
import { showNews } from '../../Functions/showNews'
import { doVibrate } from '../../Functions/doVibrate'

const Settings = new CContainer(
  'settings',
  `
<p class="tab__title">Настройки</p>
<div class="settings__container">
	<div class="settings__block">
		<p>Звук</p>
		<label class="switch">
	    <input type="checkbox" id="settings-sound" checked/>
	    <div class="slider round"></div> 
  	</label>
	</div>
	<div class="settings__block">
		<p>Музыка в меню</p>
		<select class='select' id="settings-music">
		  <option class="option" value='0'>Separation</option>
		  <option class="option" value='1'>Common Things</option>
		  <option class="option" value='2'>Tears of Loss</option>
    </select>
	</div>
	<div class="settings__block">
		<p>Скрыть подсказки</p>
		<label class="switch">
	    <input type="checkbox" id="settings-aha"/>
	    <div class="slider round"></div> 
  	</label>
	</div>
	<div class="settings__block">
		<p>Показывать нажатия</p>
		<label class="switch">
	    <input type="checkbox" id="settings-tap"/>
	    <div class="slider round"></div> 
  	</label>
	</div>
		<div class="settings__block" ${DESKTOPMODE && 'style="display: none"'}>
		<p>Вибрация</p>
		<label class="switch">
	    <input type="checkbox" id="settings-vibrate"/>
	    <div class="slider round"></div> 
  	</label>
	</div>
	<div class="settings__block" ${!DESKTOPMODE && 'style="display: none"'}>
		<p>Полноэкранный режим</p>
		<label class="switch">
	    <input type="checkbox" id="settings-fsm"/>
	    <div class="slider round"></div> 
  	</label>
	</div>
	<div class="settings__block">
		<p>Уменьшить масштаб</p>
		<label class="switch">
	    <input type="checkbox" id="settings-scale"/>
	    <div class="slider round"></div> 
  	</label>
	</div>
	<div class="settings__block">
		<p>Увеличить шрифт</p>
		<label class="switch">
	    <input type="checkbox" id="settings-bf"/>
	    <div class="slider round"></div> 
  	</label>
	</div>
</div>
<div class="settings__container" ${DESKTOPMODE && 'style="display: none"'}>
	<div class="settings__block">
		<a>Поддержите нас</a>
	</div>
	<div class="settings__block" ${DESKTOPMODE && 'style="display: none"'}>
		<a target="_blank" rel="external" style='display: none' id="support-button"><img class="settings__icon"  src="${require('../../Images/UI/icon_ad.png')}"></a>
		<a target="_blank" rel="external" href="https://vk.com/chroniclesgame"><img class="settings__icon"  src="${require('../../Images/UI/icon_vk.png')}"></a>
		<a target="_blank" rel="external" href="https://t.me/chronicles_game"><img class="settings__icon" src="${require('../../Images/UI/icon_tg.png')}"></a>
	</div>
	<div class="settings__block">
		<a id="req-01">Т-Банк</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
	<div class="settings__block">
		<a id="req-02">Сбербанк</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block">
		<a id="news-button">Последние новости</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
		<div class="settings__block">
		<a id="creators-button">Создатели</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
	<div class="settings__block">
		<a href="mailto:mvagamesofficial@gmail.com">Помощь | Сотрудничество</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
</div>
<div class="settings__container" ${DESKTOPMODE && 'style="display: none"'}>
	<div class="settings__block">
		<a href="${route}/privacy_policy.html" target="_blank">Политика конфиденциальности</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
	<div class="settings__block">
		<a href="${route}/terms_conditions.html" target="_blank">Условия и положения</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
</div>
<div class="settings__container" ${ANDROIDMODE && 'style="display: none"'}>
	<div class="settings__block">
		<a id="downloadFile">Скачать сохранение</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
	<div class="settings__block">
	  <a id="uploadFile">Установить сохранение</a>
	  <img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
		<input id="uploadInput" style='display: none' type="file"/>
	</div>
</div>
<div class="settings__container" >
	<div class="settings__block" ${DESKTOPMODE && 'style="display: none"'} ${ANDROIDMODE && 'style="display: none"'}>
		<a href=".">Проверить обновление</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
	<div class="settings__block">
		<a onclick='localStorage.clear(); window.location.reload();' >Удалить все сохранения и настройки</a>
		<img src="${require('../../Images/UI/icon_go-right.svg')}" class="icon_span_next"/>
	</div>
</div>
`,
  { name: 'checkBoxSound', selector: '#settings-sound' },
  { name: 'selectMusic', selector: '#settings-music' },
  { name: 'checkBoxAHA', selector: '#settings-aha' },
  { name: 'checkBoxTap', selector: '#settings-tap' },
  { name: 'checkBoxfullscreen', selector: '#settings-fsm' },
  { name: 'checkBoxScale', selector: '#settings-scale' },
  { name: 'checkBoxFont', selector: '#settings-bf' },
  { name: 'checkBoxVibrate', selector: '#settings-vibrate' },
  { name: 'creatorsButton', selector: '#creators-button' },
  { name: 'supportButton', selector: '#support-button' },
  { name: 'req01', selector: '#req-01' },
  { name: 'req02', selector: '#req-02' },
  { name: 'downloadButton', selector: '#downloadFile' },
  { name: 'uploadButton', selector: '#uploadFile' },
  { name: 'uploadInput', selector: '#uploadInput' },
  { name: 'newsButton', selector: '#news-button' }
)

Settings.checkBoxSound.addEventListener('click', () => {
  saveData(['Settings_Sound'], [Settings.checkBoxSound.checked])
  soundManager.setVolume(loadData(['Settings_Sound'])!)
})

Settings.selectMusic.addEventListener('change', () => {
  soundManager.changeMenuMusic(Settings.selectMusic.value)
  saveData(['Settings_MenuMusic'], [Settings.selectMusic.value])
})

Settings.checkBoxAHA.addEventListener('click', () => {
  saveData(['Settings_AHA'], [Settings.checkBoxAHA.checked])
  SlideStatAlert.self.style.display = Settings.checkBoxAHA.checked ? 'none' : 'flex'
})

Settings.checkBoxScale.addEventListener('click', () => {
  saveData(['Settings_Scale'], [Settings.checkBoxScale.checked])
  loadData(['Settings_Scale']) === 'true' && changeScale('small')
  loadData(['Settings_Scale']) === 'false' && changeScale('normal')
})

Settings.newsButton.addEventListener('click', () => {
  showNews('settings')
})

Settings.checkBoxfullscreen.addEventListener('click', () => {
  saveData(['Settings_FullScreen'], [Settings.checkBoxfullscreen.checked])
  toggleFullscreen()
})

Settings.checkBoxTap.addEventListener('click', () => {
  saveData(['Settings_ShowTap'], [Settings.checkBoxTap.checked])
})

Settings.checkBoxVibrate.addEventListener('click', () => {
  saveData(['Settings_Vibrate'], [Settings.checkBoxVibrate.checked])
  doVibrate('long')
})

Settings.checkBoxFont.addEventListener('click', () => {
  saveData(['Settings_Font'], [Settings.checkBoxFont.checked])
  setFontSize()
})

Settings.creatorsButton.addEventListener('click', () => {
  tabManagerMenu.open(Credits.self)
})

function loadSettings (): void {
  Settings.checkBoxSound.checked = loadData(['Settings_Sound']) === 'true' || loadData(['Settings_Sound']) === null

  Settings.checkBoxAHA.checked = loadData(['Settings_AHA']) === 'true'

  SlideStatAlert.self.style.display = Settings.checkBoxAHA.checked ? 'none' : 'flex'

  Settings.checkBoxfullscreen.checked = loadData(['Settings_FullScreen']) === 'true' || loadData(['Settings_FullScreen']) === null

  Settings.checkBoxTap.checked = loadData(['Settings_ShowTap']) === 'true' || loadData(['Settings_ShowTap']) === null

  Settings.checkBoxVibrate.checked = loadData(['Settings_Vibrate']) === 'true' || loadData(['Settings_Vibrate']) === null

  Settings.selectMusic.value = parseInt(loadData(['Settings_MenuMusic'])!)

  loadData(['Settings_FullScreen']) === 'false' && toggleFullscreen()

  Settings.checkBoxScale.checked = loadData(['Settings_Scale']) === 'true' || false

  loadData(['Settings_Scale']) === 'true' && changeScale('small')

  Settings.checkBoxFont.checked = loadData(['Settings_Font']) === 'true'

  setFontSize()
}

Settings.supportButton.onclick = () => {
  showAd('long', () => {
    makeExplosion(MenuMessage.self, [`<img src="${require('../../Images/UI/icon_achievements.svg')}" class="icon_span"/>`])
    showMessage('Спасибо за поддержку Chronicles', 'Принять')
  })
}

Settings.req01.onclick = () => {
  navigator.clipboard.writeText('5536910026463614').then(() => {
    showMessage('Реквизиты успешно скопированы!', 'Принять')
  })
}

Settings.req02.onclick = () => {
  navigator.clipboard.writeText('4276380119142763').then(() => {
    showMessage('Реквизиты успешно скопированы!', 'Принять')
  })
}

Settings.downloadButton.onclick = () => {
  downloadProgress()
}

function readFile (): void {
  const reader = new FileReader()
  reader.readAsText(Settings.uploadInput.files[0])
  reader.onload = () => {
    const SV = JSON.parse(String(reader.result))
    for (const prop in SV) {
      localStorage.setItem(prop, SV[prop])
    }
    location.reload()
  }
}

function changeScale (value: 'normal' | 'small'): void {
  switch (value) {
    case 'normal':
      !DESKTOPMODE && document.querySelector('meta[name="viewport"]')!.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0')
      DESKTOPMODE && setWindowScale(0)
      break
    case 'small':
      !DESKTOPMODE && document.querySelector('meta[name="viewport"]')!.setAttribute('content', 'width=device-width, initial-scale=0.75, maximum-scale=0.75, user-scalable=0')
      DESKTOPMODE && setWindowScale(-1)
  }
}

Settings.uploadButton.addEventListener('click', () => {
  Settings.uploadInput.click()
})

Settings.uploadInput.addEventListener('change', () => {
  readFile()
})

function setFontSize (): void {
  if (loadData(['Settings_Font']) === 'true') {
    document.body.style.setProperty('--bigtext', '3.55vh')
    document.body.style.setProperty('--mediumtext', '2.0vh')
    document.body.style.setProperty('--smalltext', '1.7vh')
    document.body.style.setProperty('--tinytext', '1.5vh')
  } else {
    document.body.style.setProperty('--bigtext', 'min(3.35vh, 27px)')
    document.body.style.setProperty('--mediumtext', 'min(1.8vh, 17px)')
    document.body.style.setProperty('--smalltext', 'min(1.5vh, 11px)')
    document.body.style.setProperty('--tinytext', 'min(1.3vh, 10px')
  }
}

loadSettings()

export default Settings
