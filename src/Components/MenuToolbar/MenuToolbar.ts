import CContainer from '../../Classes/CContainer'
import './MenuToolbar.scss'
import iconContinue from '../../Images/UI/icon_continue.png'
import iconFavourites from '../../Images/UI/icon_favourites.png'
import iconStories from '../../Images/UI/icon_stories.png'
import iconSettings from '../../Images/UI/icon_settings.png'
import iconAchievements from '../../Images/UI/icon_achievements.png'
import Settings from '../Settings/Settings'
import { achievementsManager, tabManagerMenu } from '../../index'
import Achievements from '../Achievements/Achievements'
import Stories from '../Stories/Stories'
import CElementManager from '../../Classes/CElementManager'

const MenuToolbar = new CContainer(
  'menu-toolbar',
	`
<div id="menu-toolbar_continue" class="menu-toolbar__item">
	<img src="${iconContinue}">
	<!--<p>Продолжить</p>-->
</div>
<div id="menu-toolbar_favourites" class="menu-toolbar__item">
	<img src="${iconFavourites}">
	<!--<p>Фавориты</p>-->
</div>
<div id="menu-toolbar_stories" class="menu-toolbar__item">
	<img src="${iconStories}">
	<!--<p>Истории</p>-->
</div>
<div id="menu-toolbar_settings" class="menu-toolbar__item">
	<img src="${iconSettings}">
	<!--<p>Настройки</p>-->
</div>
<div id="menu-toolbar_achievements" class="menu-toolbar__item">
	<img src="${iconAchievements}">
	<!--<p>Достижения</p>-->
</div>
`,
	{ name: 'continueButton', selector: '#menu-toolbar_continue' },
	{ name: 'favouritesButton', selector: '#menu-toolbar_favourites' },
	{ name: 'storiesButton', selector: '#menu-toolbar_stories' },
	{ name: 'settingsButton', selector: '#menu-toolbar_settings' },
	{ name: 'achievementsButton', selector: '#menu-toolbar_achievements' }
)

const toolBarButtonsManager = new CElementManager(MenuToolbar.settingsButton, MenuToolbar.achievementsButton, MenuToolbar.storiesButton)

toolBarButtonsManager.setCustomClassToChange('button-bright')

MenuToolbar.settingsButton.onclick = () => {
  tabManagerMenu.open(Settings.self)
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.settingsButton)
}

MenuToolbar.achievementsButton.onclick = () => {
  tabManagerMenu.open(Achievements.self)
  achievementsManager.render()
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.achievementsButton)
}

MenuToolbar.storiesButton.onclick = () => {
  tabManagerMenu.open(Stories.self)
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.storiesButton)
}

export default MenuToolbar
