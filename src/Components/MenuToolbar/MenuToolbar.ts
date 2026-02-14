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
import { DESKTOPMODE } from '../../Utils/technicalConsts';
import { setIsShowingLoadingScreenFalse } from '../LoadingScreen/LoadingScreen';
import { changeState } from '../../Functions/backEventActions';
import { getCurrentEventImageSVG } from '../../Utils/eventManager';
import makeExplosion from '../../Functions/explosion';
import { MenuMessage } from '../MenuMessage/MenuMessage';

const MenuToolbar = new CContainer(
  'menu-toolbar',
	`
<div id="menu-toolbar_continue" class="menu-toolbar__item">
	<img src="${getCurrentEventImageSVG('icon_continue')}">
	<p>Продолжить</p>
</div>
<div id="menu-toolbar_favourites" class="menu-toolbar__item" style='display: none'>
	<img src="${require('../../Media/Images/UI/icon_favourites.svg')}">
	<p>Фавориты</p>
</div>
<div id="menu-toolbar_stories" class="menu-toolbar__item">
	<img src="${getCurrentEventImageSVG('icon_stories')}">
	<p>Истории</p>
</div>
<div id="menu-toolbar_achievements"  style="display: none" class="menu-toolbar__item">
	<img src="${getCurrentEventImageSVG('icon_achievements')}">
	<p>Достижения</p>
</div>
<div id="menu-toolbar_basket" class="menu-toolbar__item">
	<img src="${getCurrentEventImageSVG('icon_shop')}">
	<p>Клеймы</p>
	</div>
<div id="menu-toolbar_profile" class="menu-toolbar__item">
	<img src="${getCurrentEventImageSVG('icon_profile')}">
	<p>Профиль</p>
</div>
<div id="menu-toolbar_settings" class="menu-toolbar__item">
	<img src="${getCurrentEventImageSVG('icon_settings')}">
	<p>Настройки</p>
</div>
	<div id="menu-toolbar_exit" class="menu-toolbar__item" ${!DESKTOPMODE && 'style="display: none"'}>
	<img src="${getCurrentEventImageSVG('icon_exit')}">
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
  changeState('menu')
}

MenuToolbar.storiesButton.onclick = () => {
  tabManagerMenu.open(Stories.self)
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.storiesButton)
  changeState('menu')
}

MenuToolbar.profileButton.onclick = () => {
  tabManagerMenu.open(Profile.self)
  renderProfile()
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.profileButton)
  changeState('menu')
}

MenuToolbar.shopButton.onclick = () => {
  tabManagerMenu.open(Shop.self)
  renderShop()
  toolBarButtonsManager.setCustomClassOnlyTo(MenuToolbar.shopButton)
  changeState('menu')
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
    changeState('slide')
  }, 500)
}

export default MenuToolbar
