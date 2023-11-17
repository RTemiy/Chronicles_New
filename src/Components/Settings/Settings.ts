import CContainer from '../../Classes/CContainer'
import './Settings.scss'
import './Switch.scss'
import GP from '../../Images/UI/gp.png'
import TG from '../../Images/UI/tg.png'
import { soundManager, tabManagerMenu } from '../../index'
import { Credits } from '../Credits/Credits'

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
		<a target="_blank" rel="external" href="https://play.google.com/store/apps/details?id=com.mva.chronicles"><img class="settings__icon"  src="${GP}"></a>
		<a target="_blank" rel="external" href="https://t.me/chronicles_game"><img class="settings__icon" src="${TG}"></a>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block">
		<a>Политика конфиденциальности</a>
	</div>
	<div class="settings__block">
		<a>Условия и положения</a>
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
		<a>Удалить все сохранения и настройки</a>
	</div>
</div>
`,
	{ name: 'checkBoxSound', selector: '#settings-sound' },
	{ name: 'checkBoxAHA', selector: '#settings-aha' },
	{ name: 'creatorsButton', selector: '#creators-button' })

Settings.checkBoxSound.addEventListener('click', () => {
  localStorage.setItem('Settings_Sound', Settings.checkBoxSound.checked)
  soundManager.setVolume(localStorage.getItem('Settings_Sound')!)
})

Settings.checkBoxAHA.addEventListener('click', () => {
  localStorage.setItem('Settings_AHA', Settings.checkBoxAHA.checked)
})

Settings.creatorsButton.addEventListener('click', () => {
  tabManagerMenu.open(Credits.self)
})

function loadSettings (): void {
  Settings.checkBoxSound.checked = localStorage.getItem('Settings_Sound') === 'true'
  Settings.checkBoxAHA.checked = localStorage.getItem('Settings_AHA') === 'true'
}

loadSettings()

export default Settings
