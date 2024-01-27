import CContainer from '../../Classes/CContainer'
import './Settings.scss'
import './Switch.scss'
import { soundManager, tabManagerMenu } from '../../index'
import { Credits } from '../Credits/Credits'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { route } from '../../Utils/TextConsts'
import { showMessage } from '../MenuMessage/MenuMessage'
import { showAd } from '../../Functions/advertisement'

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
		<p>Прятать подсказки</p>
		<label class="switch">
	    <input type="checkbox" id="settings-aha"/>
	    <div class="slider round"></div> 
  	</label>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block">
		<a>Поддержите нас</a>
	</div>
	<div class="settings__block">
		<a target="_blank" rel="external" id="support-button"><img class="settings__icon"  src="${require('../../Images/UI/icon_ad.png')}"></a>
		<a target="_blank" rel="external" href="https://t.me/chronicles_game"><img class="settings__icon" src="${require('../../Images/UI/icon_tg.png')}"></a>
	</div>
	<div class="settings__block">
		<a id="req-01">Тинькофф</a>
	</div>
	<div class="settings__block">
		<a id="req-02">Сбербанк</a>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block">
		<a href="${route}/privacy_policy.html" target="_blank">Политика конфиденциальности</a>
	</div>
	<div class="settings__block">
		<a href="${route}/terms_conditions.html" target="_blank">Условия и положения</a>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block">
		<a href="mailto:mvagamesofficial@gmail.com">Помощь | Сотрудничество</a>
	</div>
	<div class="settings__block">
		<a id="creators-button">Создатели</a>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block">
		<a href=".">Проверить обновление</a>
	</div>
	<div class="settings__block">
		<a onclick='localStorage.clear()' href='.' >Удалить все сохранения и настройки</a>
	</div>
</div>
`,
  { name: 'checkBoxSound', selector: '#settings-sound' },
  { name: 'checkBoxAHA', selector: '#settings-aha' },
  { name: 'creatorsButton', selector: '#creators-button' },
  { name: 'supportButton', selector: '#support-button' },
  { name: 'req01', selector: '#req-01' },
  { name: 'req02', selector: '#req-02' }
)

Settings.checkBoxSound.addEventListener('click', () => {
  saveData(['Settings_Sound'], [Settings.checkBoxSound.checked])
  soundManager.setVolume(loadData(['Settings_Sound'])!)
})

Settings.checkBoxAHA.addEventListener('click', () => {
  saveData(['Settings_AHA'], [Settings.checkBoxAHA.checked])
})

Settings.creatorsButton.addEventListener('click', () => {
  tabManagerMenu.open(Credits.self)
})

function loadSettings (): void {
  Settings.checkBoxSound.checked =
    loadData(['Settings_Sound']) === 'true' || loadData(['Settings_Sound']) === null
  Settings.checkBoxAHA.checked =
    loadData(['Settings_AHA']) === 'true'
}

Settings.supportButton.onclick = () => {
  showAd('long', () => {
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

loadSettings()

export default Settings
