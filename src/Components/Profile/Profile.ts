import CContainer from '../../Classes/CContainer'
import './Profile.scss'
import './Avatars.scss'
import './Events.scss'
import { loadData, saveData } from '../../Functions/localStorageManager'
import { achievementsManager, storiesManager, tabManagerMenu } from '../../index'
import Achievements from '../Achievements/Achievements'
import CProfile from '../../Classes/CProfile'
import { addBook } from '../Books/Books'
import checkPromoCode from '../../Functions/checkPromoCode'
import { showMessage } from '../MenuMessage/MenuMessage'
import { getEventsHTML } from './events'
import { sendActivity } from '../../Functions/GSAPI'
import { Slide } from '../Slide/Slide'
import saveScreenshot from '../../Functions/screenshot'
import makeExplosion from '../../Functions/explosion'
import { transformMinutes } from '../../Functions/transformMinutes'

export const Profile = new CContainer(
  'profile',
	`
<p class="tab__title">Профиль <img src="${require('../../Images/UI/icon_info.svg')}" class="icon_span"/></p>
<img class="profile__screenshot" src="${require('../../Images/UI/icon_camera.svg')}">
<div class="profile__block" id='screen'>
	<img class="profile__banner">
	<div class="profile__container profile__container-profile">
		<img class="profile__image">
		<input class="profile__input" type="text" placeholder="Введите имя">
		<img class="profile__edit-banner" src="${require('../../Images/UI/icon_paint.svg')}">
	</div>
	<div class="profile__category">
	  <p class="profile__category-title">Общая статистика</p>
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
			<p class="profile__text"><img class="books__icon" src="${require('../../Images/UI/icon_stories.svg')}"/> Историй начато:</p>
			<p id="completedParts" class="profile__text"></p>
		</div>
	</div>
	<div class="profile__container">
		<button id="achievementsButton" class="profile__button" type="button"></button>
	</div>
	<div class="profile__category">
	  <p class="profile__category-title">Награды за события</p>
	  <div class="profile__events"></div>
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
	{ name: 'screenshotButton', selector: '.profile__screenshot' },
	{ name: 'editBanner', selector: '.profile__edit-banner' },
	{ name: 'avatars', selector: '.avatars' },
	{ name: 'avatarsInfo', selector: '.avatars__info' },
	{ name: 'avatarsContainer', selector: '.avatars__block' },
	{ name: 'events', selector: '.profile__events' },
	{ name: 'promoInput', selector: '#promoInput' },
	{ name: 'promoButton', selector: '#promoButton' },
	{ name: 'infoButton', selector: '.icon_span' }
)

export function renderProfile (): void {
  loadData(['Profile', 'Name']) !== null && (Profile.name.value = loadData(['Profile', 'Name']))
  Profile.firstLaunch.innerHTML = loadData(['Profile', 'FirstLaunch'])
  const partsInfo = storiesManager.getPartsInfo()
  Profile.completedParts.innerHTML = String(partsInfo.beginnedStories) + '/' + String(partsInfo.allStories)
  Profile.achievementsButton.innerHTML = `<img class="books__icon" src="${require('../../Images/UI/icon_achievements.svg')}"/>` + 'Достижения: ' + achievementsManager.getAchievementsAmount()
  profileManager.setCurrentAvatar()
  profileManager.setCurrentBanner()
  Profile.spentTime.innerHTML = transformMinutes(parseInt(loadData(['Profile', 'TimeSpent'])!))
  Profile.wastedBooks.innerHTML = String(loadData(['Profile', 'BooksWasted'])!)
  Profile.events.innerHTML = getEventsHTML()
}

Profile.name.oninput = () => {
  saveData(['Profile', 'Name'], [Profile.name.value])
}

Profile.name.onblur = () => {
  sendActivity(`Установил имя ${Profile.name.value}`)
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
    makeExplosion(Profile.wastedBooks, [`<img class="books__icon" src="${require('../../Images/UI/icon_stories_currency.svg')}"/>`], 1.2, 10, 25, 10)
    Slide.console.classList.add('console_activated')
  }
}

Profile.promoButton.onclick = () => {
  checkPromoCode(Profile.promoInput.value) ? showMessage('Промокод успешно применен', 'Принять') : showMessage('Такого промокода нет', 'Ок')
  Profile.promoInput.value = ''
}

Profile.infoButton.onclick = () => {
  showMessage(`
  <p>Нажмите на аватар, чтобы поменять его.
  <p>Иконка кисточки в правом верхнем углу профиля позволяет изменить фон.
  <p>Проходите истории и получайте новые изображения героев и их окружения!
  <p>В нашем 
  <a target="_blank" rel="external" href="https://t.me/chronicles_game" style="text-decoration: underline">Telegram канале</a> 
  мы будем делиться промокодами на уникальные картинки для профиля и не только!
`, 'Принять')
}

Profile.screenshotButton.onclick = () => {
  showMessage('Скриншот профиля сохранен', 'Принять')
  saveScreenshot(Profile.self.querySelector('#screen'))
}

export const profileManager = new CProfile(Profile)

require('./avatars')
require('./banners')
