import CContainer from '../../Classes/CContainer'
import './MenuToolbar.css'
import iconContinue from './icon_continue.png'
import iconFavourites from './icon_favourites.png'
import iconStories from './icon_stories.png'
import iconSettings from './icon_settings.png'
import iconAchievements from './icon_achievements.png'
import Settings from '../Settings/Settings'
import { tabManagerMenu } from '../../index'
import Achievements from '../Achievements/Achievements'
import Stories from '../Stories/Stories';

const MenuToolbar = new CContainer(
  'menu-toolbar styled-background',
	`
<div id="menu-toolbar_continue" class="menu-toolbar__item">
	<img src="${iconContinue}">
	<p>Продолжить</p>
</div>
<div id="menu-toolbar_favourites" class="menu-toolbar__item">
	<img src="${iconFavourites}">
	<p>Фавориты</p>
</div>
<div id="menu-toolbar_stories" class="menu-toolbar__item">
	<img src="${iconStories}">
	<p>Истории</p>
</div>
<div id="menu-toolbar_settings" class="menu-toolbar__item">
	<img src="${iconSettings}">
	<p>Настройки</p>
</div>
<div id="menu-toolbar_achievements" class="menu-toolbar__item">
	<img src="${iconAchievements}">
	<p>Достижения</p>
</div>
`,
	{ name: 'continueButton', selector: '#menu-toolbar_continue' },
	{ name: 'favouritesButton', selector: '#menu-toolbar_favourites' },
	{ name: 'storiesButton', selector: '#menu-toolbar_stories' },
	{ name: 'settingsButton', selector: '#menu-toolbar_settings' },
	{ name: 'achievementsButton', selector: '#menu-toolbar_achievements' }
)

MenuToolbar.settingsButton.onclick = () => {
  tabManagerMenu.open(Settings.self)
}

MenuToolbar.achievementsButton.onclick = () => {
  tabManagerMenu.open(Achievements.self)
}

MenuToolbar.storiesButton.onclick = () => {
  tabManagerMenu.open(Stories.self)
}

export default MenuToolbar
