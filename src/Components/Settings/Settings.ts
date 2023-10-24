import CContainer from '../../Classes/CContainer'
import './Settings.css'
import GP from './gp.png'
import TG from './tg.png'

const Settings = new CContainer(
  'settings show',
	`
<div class="settings__container">
	<div class="settings__block styled-background styled-border">
		<p>Звук</p>
		<input type="checkbox">
	</div>
	<div class="settings__block styled-background styled-border">
		<p>Автоматически прятать подсказки</p>
		<input type="checkbox">
	</div>
</div>
<div class="settings__container">
	<div class="settings__block styled-background styled-border">
		<a>Поддержите нас</a>
	</div>
	<div class="settings__block styled-background styled-border">
		<img class="settings__icon" src="${GP}">
		<img class="settings__icon" src="${TG}">
	</div>
</div>
<div class="settings__container">
	<div class="settings__block styled-background styled-border">
		<a>Политика конфиденциальности</a>
	</div>
	<div class="settings__block styled-background styled-border">
		<a>Условия и положения</a>
	</div>
</div>
<div class="settings__container">
	<div class="settings__block styled-background styled-border">
		<a>Помощь | Сотрудничество</a>
	</div>
</div>
`)

export default Settings
