import CContainer from '../../Classes/CContainer'
import './Settings.scss'
import './Switch.scss'
import GP from '../../Images/UI/gp.png'
import TG from '../../Images/UI/tg.png'
import { soundManager, tabManagerMenu } from '../../index'
import { Credits } from '../Credits/Credits'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { route } from '../../Utils/TextConsts'

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
  { name: 'creatorsButton', selector: '#creators-button' }
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

loadSettings()

export default Settings
