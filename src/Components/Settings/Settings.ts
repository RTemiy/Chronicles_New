import CContainer from '../../Classes/CContainer'
import './Settings.scss'
import './Switch.scss'
import GP from '../../Images/UI/gp.png'
import TG from '../../Images/UI/tg.png'

const Settings = new CContainer(
  'settings',
	`
<div class="settings__container">
	<div class="settings__block">
		<p>Звук</p>
		<label class="switch">
	    <input type="checkbox" id="settings-sound" checked/>
	    <div class="slider round"></div> 
  	</label>
	</div>
	<div class="settings__block">
		<p>Автоматически прятать подсказки</p>
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
		<img class="settings__icon" src="${GP}">
		<img class="settings__icon" src="${TG}">
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
		<a>Помощь | Сотрудничество</a>
	</div>
</div>
`, { name: 'checkBoxSound', selector: '#settings-sound' },
	{ name: 'checkBoxAHA', selector: '#settings-aha' })

Settings.checkBoxSound.addEventListener('click', () => {
  localStorage.setItem('Settings_Sound', Settings.checkBoxSound.checked)
})

Settings.checkBoxAHA.addEventListener('click', () => {
  localStorage.setItem('Settings_AHA', Settings.checkBoxAHA.checked)
})

function loadSettings (): void {
  Settings.checkBoxSound.checked = localStorage.getItem('Settings_Sound') === 'true'
  Settings.checkBoxAHA.checked = localStorage.getItem('Settings_AHA') === 'true'
}

loadSettings()

export default Settings
