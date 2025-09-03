import CContainer from '../../Classes/CContainer'
import './Settings.scss'
import './Switch.scss'
import './Select.scss'
import { soundManager, tabManagerMenu } from '../../index'
import { Credits } from '../Credits/Credits'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { route } from '../../Utils/TextConsts'
import { MenuMessage, showMessage } from '../MenuMessage/MenuMessage'
import { showAd } from '../../Functions/advertisement'
import makeExplosion from '../../Functions/explosion'
import downloadProgress from '../../Functions/downloadProgress'
import { setWindowScale, toggleFullscreen } from '../../Functions/desktopFuncs'
import { DesktopMode } from '../../Utils/technicalConsts'
import { SlideStatAlert } from '../SlideStatAlert/SlideStatAlert'

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
	<div class="settings__block" ${!DesktopMode && 'style="display: none"'}>
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
</div>
<div class="settings__container" ${DesktopMode && 'style="display: none"'}>
	<div class="settings__block">
		<a>Поддержите нас</a>
	</div>
	<div class="settings__block" ${DesktopMode && 'style="display: none"'}>
		<a target="_blank" rel="external" id="support-button"><img class="settings__icon"  src="${require('../../Images/UI/icon_ad.png')}"></a>
		<a target="_blank" rel="external" href="https://vk.com/chroniclesgame"><img class="settings__icon"  src="${require('../../Images/UI/icon_vk.png')}"></a>
		<a target="_blank" rel="external" href="https://t.me/chronicles_game"><img class="settings__icon" src="${require('../../Images/UI/icon_tg.png')}"></a>
	</div>
	<div class="settings__block">
		<a id="req-01">- Т-Банк -</a>
	</div>
	<div class="settings__block">
		<a id="req-02">- Сбербанк- </a>
	</div>
</div>
<div class="settings__container" ${DesktopMode && 'style="display: none"'}>
	<div class="settings__block">
		<a href="${route}/privacy_policy.html" target="_blank">- Политика конфиденциальности -</a>
	</div>
	<div class="settings__block">
		<a href="${route}/terms_conditions.html" target="_blank">- Условия и положения -</a>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block">
		<a href="mailto:mvagamesofficial@gmail.com">- Помощь | Сотрудничество -</a>
	</div>
	<div class="settings__block">
		<a id="creators-button">- Создатели -</a>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block">
		<a id="downloadFile">- Скачать сохранение -</a>
	</div>
	<div class="settings__block">
	  <a id="uploadFile">- Установить сохранение -</a>
		<input id="uploadInput" style='display: none' type="file"/>
	</div>
</div>
<div class="settings__container" >
	<div class="settings__block" ${DesktopMode && 'style="display: none"'}>
		<a href=".">- Проверить обновление -</a>
	</div>
	<div class="settings__block">
		<a onclick='localStorage.clear(); window.location.reload();' >- Удалить все сохранения и настройки -</a>
	</div>
</div>
`,
  { name: 'checkBoxSound', selector: '#settings-sound' },
  { name: 'selectMusic', selector: '#settings-music' },
  { name: 'checkBoxAHA', selector: '#settings-aha' },
  { name: 'checkBoxfullscreen', selector: '#settings-fsm' },
  { name: 'checkBoxScale', selector: '#settings-scale' },
  { name: 'creatorsButton', selector: '#creators-button' },
  { name: 'supportButton', selector: '#support-button' },
  { name: 'req01', selector: '#req-01' },
  { name: 'req02', selector: '#req-02' },
  { name: 'downloadButton', selector: '#downloadFile' },
  { name: 'uploadButton', selector: '#uploadFile' },
  { name: 'uploadInput', selector: '#uploadInput' }
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

Settings.checkBoxfullscreen.addEventListener('click', () => {
  saveData(['Settings_FullScreen'], [Settings.checkBoxfullscreen.checked])
  toggleFullscreen()
})

Settings.creatorsButton.addEventListener('click', () => {
  tabManagerMenu.open(Credits.self)
})

function loadSettings (): void {
  Settings.checkBoxSound.checked = loadData(['Settings_Sound']) === 'true' || loadData(['Settings_Sound']) === null

  Settings.checkBoxAHA.checked = loadData(['Settings_AHA']) === 'true'

  SlideStatAlert.self.style.display = Settings.checkBoxAHA.checked ? 'none' : 'flex'

  Settings.checkBoxfullscreen.checked = loadData(['Settings_FullScreen']) === 'true' || loadData(['Settings_FullScreen']) === null

  Settings.selectMusic.value = parseInt(loadData(['Settings_MenuMusic'])!)

  loadData(['Settings_FullScreen']) === 'false' && toggleFullscreen()

  Settings.checkBoxScale.checked = loadData(['Settings_Scale']) === 'true' || false

  loadData(['Settings_Scale']) === 'true' && changeScale('small')
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
      !DesktopMode && document.querySelector('meta[name="viewport"]')!.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0')
      DesktopMode && setWindowScale(0)
      break
    case 'small':
      !DesktopMode && document.querySelector('meta[name="viewport"]')!.setAttribute('content', 'width=device-width, initial-scale=0.75, maximum-scale=0.75, user-scalable=0')
      DesktopMode && setWindowScale(-1)
  }
}

Settings.uploadButton.addEventListener('click', () => {
  Settings.uploadInput.click()
})

Settings.uploadInput.addEventListener('change', () => {
  readFile()
})

loadSettings()

export default Settings
