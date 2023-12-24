import CContainer from '../../Classes/CContainer'
import './Profile.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { achievementsManager, storiesManager, tabManagerMenu } from '../../index'
import Achievements from '../Achievements/Achievements'

export const Profile = new CContainer(
  'profile',
	`
<p class="tab__title">Профиль</p>

<div class="profile__container">
	<input class="profile__input" type="text" placeholder="Введите имя">
</div>
<div class="profile__container">
	<p class="profile__text">Первый запуск игры:</p>
	<p id="firstLaunch" class="profile__text"></p>
</div>
<div class="profile__container">
	<p class="profile__text">Частей пройдено:</p>
	<p id="completedParts" class="profile__text"></p>
</div>
<div class="profile__container">
	<button id="achievementsButton" class="profile__button" type="button"></button>
</div>
`,
	{ name: 'name', selector: '.profile__input' },
	{ name: 'firstLaunch', selector: '#firstLaunch' },
	{ name: 'completedParts', selector: '#completedParts' },
	{ name: 'achievementsButton', selector: '#achievementsButton' }
)

export function renderProfile (): void {
  loadData(['Profile', 'Name']) !== null && (Profile.name.value = loadData(['Profile', 'Name']))
  Profile.firstLaunch.innerHTML = loadData(['Profile', 'FirstLaunch'])
  const partsInfo = storiesManager.getPartsInfo()
  Profile.completedParts.innerHTML = String(partsInfo.completedParts) + '/' + String(partsInfo.allParts)
  Profile.achievementsButton.innerHTML = `<img class="books__icon" src="${require('../../Images/UI/icon_achievements.svg')}"/>` + 'Достижения:' + achievementsManager.getAchievementsAmount()
}

Profile.name.oninput = () => {
  saveData(['Profile', 'Name'], [Profile.name.value])
}

Profile.achievementsButton.onclick = () => {
  tabManagerMenu.open(Achievements.self)
  achievementsManager.render()
}
