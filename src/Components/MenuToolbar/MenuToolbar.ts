import CContainer from '../../Classes/CContainer'
import './MenuToolbar.scss'
import Settings from '../Settings/Settings'
import { scenarioManager, soundManager, tabManagerMenu } from '../../index'
import Stories from '../Stories/Stories'
import CElementManager from '../../Classes/CElementManager'
import { Slide } from '../Slide/Slide'
import { loadData } from '../../Functions/localStorageManager'
import { Profile, renderProfile } from '../Profile/Profile'
import { renderShop, Shop } from '../Shop/Shop';
import { DesktopMode } from '../../Utils/technicalConsts';
import { setIsShowingLoadingScreenFalse } from '../LoadingScreen/LoadingScreen';

const MenuToolbar = new CContainer(
  'menu-toolbar',
	`
<div id="menu-toolbar_continue" class="menu-toolbar__item">
	<img src="${require('../../Images/UI/icon_continue.svg')}">
	<p>Продолжить</p>
</div>
<div id="menu-toolbar_favourites" class="menu-toolbar__item" style='display: none'>
	<img src="${require('../../Images/UI/icon_favourites.svg')}">
	<p>Фавориты</p>
</div>
<div id="menu-toolbar_stories" class="menu-toolbar__item">
	<img src="${require('../../Images/UI/icon_stories.svg')}">
	<p>Истории</p>
</div>
<div id="menu-toolbar_settings" class="menu-toolbar__item">
	<img src="${require('../../Images/UI/icon_settings.svg')}">
	<p>Настройки</p>
</div>
<div id="menu-toolbar_achievements"  style="display: none" class="menu-toolbar__item">
	<img src="${require('../../Images/UI/icon_achievements.svg')}">
	<p>Достижения</p>
</div>
<div id="menu-toolbar_basket" class="menu-toolbar__item">
	<img src="${require('../../Images/UI/icon_basket.svg')}">
	<p>Клеймы</p>
	</div>
<div id="menu-toolbar_profile" class="menu-toolbar__item">
	<img src="${require('../../Images/UI/icon_user.svg')}">
	<p>Профиль</p>
		</div>
	<div id="menu-toolbar_exit" class="menu-toolbar__item" ${!DesktopMode && 'style="display: none"'}>
	<img src="${require('../../Images/UI/icon_exit.svg')}">
	<p>Выход</p>

</div>
`,
	{ name: 'continueButton', selector: '#menu-toolbar_continue' },
	{ name: 'favouritesButton', selector: '#menu-toolbar_favourites' },
	{ name: 'storiesButton', selector: '#menu-toolbar_stories' },
	{ name: 'settingsButton', selector: '#menu-toolbar_settings' },
	{ name: 'achievementsButton', selector: '#menu-toolbar_achievements' },
	{ name: 'profileButton', selector: '#menu-toolbar_profile' },
	{ name: 'shopButton', selector: '#menu-toolbar_basket' },
	{ name: 'exitButton', selector: '#menu-toolbar_exit' }
)

const toolBarButtonsManager = new CElementManager(MenuToolbar.settingsButton, MenuToolbar.achievementsButton, MenuToolbar.storiesButton, MenuToolbar.profileButton, MenuToolbar.shopButton)

toolBarButtonsManager.setCustomClassToChange('button-bright')

MenuToolbar.settingsButton.onclick = () => {
  tabManagerMenu.open(Settings.self)
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.settingsButton)
}

MenuToolbar.storiesButton.onclick = () => {
  tabManagerMenu.open(Stories.self)
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.storiesButton)
}

MenuToolbar.profileButton.onclick = () => {
  tabManagerMenu.open(Profile.self)
  renderProfile()
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.profileButton)
}

MenuToolbar.shopButton.onclick = () => {
  tabManagerMenu.open(Shop.self)
  renderShop()
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.shopButton)
}

MenuToolbar.exitButton.onclick = () => {
  window.close()
}

loadData(['LastSave_ScenarioInfo']) === null && MenuToolbar.continueButton.setAttribute('style', 'display: none')

MenuToolbar.continueButton.onclick = () => {
  setIsShowingLoadingScreenFalse()
  scenarioManager.loadLastSave()
  soundManager.play('music', loadData(['LastSave_SoundInfo'])!)
  setTimeout(() => {
    MenuToolbar.self.style.display = 'none'
    tabManagerMenu.closeAll()
    Slide.self.style.display = 'grid'
  }, 500)
}

export default MenuToolbar
