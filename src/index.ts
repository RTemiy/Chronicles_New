import CElementManager from './Classes/CElementManager'
import Settings from './Components/Settings/Settings'
import Achievements, { renderAchievements } from './Components/Achievements/Achievements'
import Stories, { renderStories } from './Components/Stories/Stories'
import Chapters from './Components/Chapters/Chapters'
import Parts from './Components/Parts/Parts'
import CStoriesManager from './Classes/CStoriesManager'
import CAchievementsManager from './Classes/CAchievementsManager'
import './index.scss'
import loadStories from './Functions/loadStories'
import { EStoriesEn } from './Utils/EStoriesNames'
import CSlider from './Classes/CSlider'
import {
  hideLoadingScreen,
  LoadingScreen,
  renderLoadingScreen,
  showBlurredBackground
} from './Components/LoadingScreen/LoadingScreen'
import MenuToolbar from './Components/MenuToolbar/MenuToolbar'
import preCacheImages from './Functions/preCache'
import CSoundSystem from './Classes/CSoundSystem'
import { Credits } from './Components/Credits/Credits'
import CStatsManager from './Classes/CStatsManager'
import CScenarioManager from './Classes/CScenarioManager'
import { Books, startBooksTimer } from './Components/Books/Books'
import CTimer from './Classes/CTimer'
import CSlide from './Classes/CSlide'
import { hideToolbar, Slide, slideEffects } from './Components/Slide/Slide'
import { Inventory, renderInventory } from './Components/Inventory/Inventory'
import { animateBackForth } from './Functions/animateBackForth'
import { showPolicy } from './Components/Policy/Policy'
import hideDisclaimer from './Components/Disclaimer/Disclaimer'
import CWardrobe from './Classes/CWardrobe'
import { showCutscene } from './Components/CutScene/CutScene'
import { Wardrobe } from './Components/Wardrobe/Wardrobe'
import { Profile } from './Components/Profile/Profile'
import { showRate } from './Components/Rate/Rate'
import { checkURL } from './Functions/checkURL'
import { Journal, renderJournal } from './Components/Journal/Journal'
import CJournal from './Classes/CJournal'
import { Shop } from './Components/Shop/Shop'
import { ANDROIDMODE, DESKTOPMODE, DEVMODE } from './Utils/technicalConsts'
import { addlistenerandroidbackbutton, changeState } from './Functions/backEventActions'
import { showNews } from './Functions/showNews'
import { Smartphone } from './Components/Smartphone/Smartphone'
import { CSmartphone } from './Classes/CSmartphone'
import { initTapTap } from './Functions/tapTap'
import { showOKMessage } from './Components/OKMessage/OKMessage'
import { getCurrentEventImageJPG } from './Utils/eventManager'
import menuToolbar from './Components/MenuToolbar/MenuToolbar'
import { makeDevErrorAlerts } from './Functions/devErrorsAlert'
import Collection, { renderCollection } from './Components/Collection/Collection'
import CCollectionManager from './Classes/CCollectionManager'
import { Auth, handleSuccessfulLogin } from './Components/Auth/Auth'
import { checkAuthStatus, getGameDataFromLocalStorage, updateUserData } from './Functions/chroniclesServerAPI'

require('./service-worker')
document.addEventListener('contextmenu', e => { e.preventDefault() })
addlistenerandroidbackbutton()

export const tabManagerMenu = new CElementManager(Settings.self, Achievements.self, Stories.self, Chapters.self, Parts.self, Credits.self, Profile.self, Shop.self, Collection.self)
tabManagerMenu.addElementTo(Chapters.self, Books.self)
tabManagerMenu.addElementTo(Stories.self, Books.self)
tabManagerMenu.addElementTo(Parts.self, Books.self)
tabManagerMenu.open(Stories.self)

export const storiesManager = new CStoriesManager(renderStories)
export const achievementsManager = new CAchievementsManager(renderAchievements)
export const cardsManager = new CCollectionManager(renderCollection)
export const statsManager = new CStatsManager()
export const soundManager = new CSoundSystem(require('./Media/Audio/Common/Silence.mp3'), require('./Media/Audio/Common/Notification.mp3'), [require('./Media/Audio/Common/Menu01.mp3'), require('./Media/Audio/Common/Menu02.mp3'), require('./Media/Audio/Common/Menu03.mp3'), require('./Media/Audio/Common/Menu04.mp3')])
export const wardrobe = new CWardrobe(Wardrobe)
export const smartphone = new CSmartphone(Smartphone)
export const slide = new CSlide(Slide, showBlurredBackground, soundManager, tabManagerMenu, Stories.self, MenuToolbar.self, Inventory.self, Journal.self, hideToolbar, animateBackForth, renderInventory, renderJournal, showCutscene, showOKMessage)
export const scenarioManager = new CScenarioManager(statsManager, soundManager, achievementsManager, slide, slideEffects, wardrobe, smartphone)
export const timer = new CTimer(soundManager, Slide.timer, Slide.timerLeft)
export const journal = new CJournal()

loadStories(EStoriesEn)

hideDisclaimer()

renderLoadingScreen(getCurrentEventImageJPG('loadingscreen'), () => {})

// achievementsManager.updateAchievementsInfo(achievementsData)

preCacheImages(LoadingScreen.loadingPercent, () => {
  storiesManager.render()
  new CSlider(
    Stories.storiesContainer,
    Stories.sliderCheckbox,
    'story',
    'slider__check',
    'story__image',
    Stories.sliderButtonLeft,
    Stories.sliderButtonRight
  )
  LoadingScreen.continueButton.style.display = 'block'
  LoadingScreen.loadingPercent.style.display = 'none'
  setTimeout(() => {
    LoadingScreen.logo.classList.add('shimmering_image')
    LoadingScreen.self.onclick = () => {
      MenuToolbar.self.style.display = 'flex'
      hideLoadingScreen()
      showPolicy()
      soundManager.play('menu')
      checkURL()
      showNews('start')
      LoadingScreen.tapButton.classList.remove('loading-screen__tapImage_start')
      LoadingScreen.tapButton.classList.add('loading-screen__tapImage_after')
      menuToolbar.storiesButton.click()
      handleDailySync()
    }
  }, DEVMODE ? 1000 : 9000)
})

export function saveEndProgress (storyName: string, chapterName: string, partName: string, code: string): void {
  statsManager.saveStats(false, storyName, chapterName, partName, code)
  Slide.self.style.display = 'none'
  MenuToolbar.self.style.display = 'flex'
  tabManagerMenu.open(Stories.self)
  soundManager.play('menu')
  !DESKTOPMODE && !DEVMODE && !ANDROIDMODE && showRate(storyName + chapterName + partName + code)
  localStorage.removeItem('LastSave_ScenarioInfo')
  MenuToolbar.continueButton.setAttribute('style', 'display: none')
  hideLoadingScreen()
  changeState('menu')
  menuToolbar.storiesButton.click()
  setTimeout(() => { hideLoadingScreen() }, 1100)
}

startBooksTimer()
initTapTap()

/**
 * Проверяет, нужно ли синхронизировать данные, и выполняет синхронизацию или предлагает авторизоваться.
 */
async function handleDailySync (): Promise<void> {
  const LAST_SYNC_KEY = 'lastDataSyncTimestamp'
  const now = new Date().getTime()
  const lastSync = localStorage.getItem(LAST_SYNC_KEY)
  const oneDay = 24 * 60 * 60 * 1000 // 24 часа в миллисекундах

  // Синхронизируемся, если записи нет или прошел день
  if (!lastSync || (now - parseInt(lastSync, 10)) > oneDay) {
    console.log('Требуется ежедневная синхронизация данных.')

    const authData = await checkAuthStatus()

    if (authData) {
      // Пользователь авторизован, отправляем данные в фоне
      console.log('Пользователь авторизован. Синхронизация данных...')
      const localData = getGameDataFromLocalStorage()
      const success = await updateUserData(localData)
      if (success) {
        localStorage.setItem(LAST_SYNC_KEY, now.toString())
        console.log('Синхронизация завершена успешно.')
      }
      // Инициализируем данные пользователя в любом случае
      handleSuccessfulLogin(authData)
    } else {
      // Пользователь не авторизован, показываем окно входа с флагом для синхронизации
      console.log('Пользователь не авторизован. Отображение окна входа для синхронизации.')
      Auth.self.dataset.shouldSync = 'true' // Устанавливаем флаг
      document.body.appendChild(Auth.self)
      Auth.self.style.display = 'flex'
    }
  } else {
    // Синхронизация не требуется, просто проверяем статус входа
    // const authData = await checkAuthStatus()
    // if (authData){
    handleSuccessfulLogin({})
    // }
  }
}

DESKTOPMODE && document.body.classList.add('main-bg-anim')
DESKTOPMODE && document.body.style.setProperty('--desktopmode', 'true')

DEVMODE && makeDevErrorAlerts()
