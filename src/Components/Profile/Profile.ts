import CContainer from '../../Classes/CContainer'
import './Profile.scss'
import './Avatars.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { achievementsManager, storiesManager, tabManagerMenu } from '../../index'
import Achievements from '../Achievements/Achievements'
import CProfile from '../../Classes/CProfile'
import { addBook } from '../Books/Books'
import checkPromoCode from '../../Functions/checkPromoCode'
import { showMessage } from '../MenuMessage/MenuMessage'

export const Profile = new CContainer(
  'profile',
	`
<p class="tab__title">Профиль</p>
<div class="profile__block">
	<img class="profile__banner">
	<div class="profile__container profile__container-profile">
		<img class="profile__image">
		<input class="profile__input" type="text" placeholder="Введите имя">
		<img class="profile__edit-banner" src="${require('../../Images/UI/icon_paint.svg')}">
	</div>
	<div class="profile__category">
		<div class="profile__container">
			<p class="profile__text"><img class="books__icon" src="${require('../../Images/UI/icon_exit.svg')}"/> Первый запуск:</p>
			<p id="firstLaunch" class="profile__text"></p>
		</div>
		<div class="profile__container">
			<p class="profile__text"><img class="books__icon" src="${require('../../Images/UI/icon_time.svg')}"/> Времени в игре:</p>
			<p id="spentTime" class="profile__text"></p>
		</div>
		<div class="profile__container">
			<p class="profile__text"><img class="books__icon" src="${require('../../Images/UI/icon_stories_currency.svg')}"/> Книжек потрачено:</p>
			<p id="wastedBooks" class="profile__text"></p>
		</div>
		<div class="profile__container">
			<p class="profile__text"><img class="books__icon" src="${require('../../Images/UI/icon_stories.svg')}"/> Частей пройдено:</p>
			<p id="completedParts" class="profile__text"></p>
		</div>
	</div>
	<div class="profile__container">
		<button id="achievementsButton" class="profile__button" type="button"></button>
	</div>
	<div class="profile__container">
		<input id="promoInput" class="profile__input" type="text" placeholder="Введите промокод"/>
		<button id="promoButton" class="profile__button">Активировать</button>
	</div>
</div>
<div class="avatars">
  <div class="avatars__container">
    <div class="avatars__info"></div>
	  <div class="avatars__block"></div>
	</div>
</div>
`,
	{ name: 'name', selector: '.profile__input' },
	{ name: 'firstLaunch', selector: '#firstLaunch' },
	{ name: 'completedParts', selector: '#completedParts' },
	{ name: 'spentTime', selector: '#spentTime' },
	{ name: 'wastedBooks', selector: '#wastedBooks' },
	{ name: 'achievementsButton', selector: '#achievementsButton' },
	{ name: 'avatar', selector: '.profile__image' },
	{ name: 'banner', selector: '.profile__banner' },
	{ name: 'editBanner', selector: '.profile__edit-banner' },
	{ name: 'avatars', selector: '.avatars' },
	{ name: 'avatarsInfo', selector: '.avatars__info' },
	{ name: 'avatarsContainer', selector: '.avatars__block' },
	{ name: 'promoInput', selector: '#promoInput' },
	{ name: 'promoButton', selector: '#promoButton' }
)

export function renderProfile (): void {
  loadData(['Profile', 'Name']) !== null && (Profile.name.value = loadData(['Profile', 'Name']))
  Profile.firstLaunch.innerHTML = loadData(['Profile', 'FirstLaunch'])
  const partsInfo = storiesManager.getPartsInfo()
  Profile.completedParts.innerHTML = String(partsInfo.completedParts) + '/' + String(partsInfo.allParts)
  Profile.achievementsButton.innerHTML = `<img class="books__icon" src="${require('../../Images/UI/icon_achievements.svg')}"/>` + 'Достижения: ' + achievementsManager.getAchievementsAmount()
  profileManager.setCurrentAvatar()
  profileManager.setCurrentBanner()
  Profile.spentTime.innerHTML = transformMinutes(parseInt(loadData(['Profile', 'TimeSpent'])!))
  Profile.wastedBooks.innerHTML = String(loadData(['Profile', 'BooksWasted'])!)
}

function transformMinutes (minutes: number): string {
  if (minutes < 60) {
    return String(minutes) + ' мин.'
  } else if (minutes > 60) {
    return String(Math.floor(minutes / 60)) + ' час.'
  } else if (minutes > 1440) {
    return String(Math.floor(minutes / 1440)) + ' день.'
  } else {
    return String(minutes) + ' мин.'
  }
}

Profile.name.oninput = () => {
  saveData(['Profile', 'Name'], [Profile.name.value])
}

Profile.achievementsButton.onclick = () => {
  tabManagerMenu.open(Achievements.self)
  achievementsManager.render()
}

Profile.avatar.onclick = () => {
  profileManager.showAvatars()
}

Profile.editBanner.onclick = () => {
  profileManager.showBanners()
}

let clicks = 0
Profile.wastedBooks.onclick = () => {
  clicks++
  if (clicks >= 10) {
    addBook()
    clicks = 0
  }
}

Profile.promoButton.onclick = () => {
  checkPromoCode(Profile.promoInput.value) ? showMessage('Промокод успешно применен', 'Принять') : showMessage('Такого промокода нет', 'Ок')
  Profile.promoInput.value = ''
}

export const profileManager = new CProfile(Profile)

require('./avatars')
require('./banners')
