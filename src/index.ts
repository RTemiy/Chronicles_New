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
import { LoadingScreen, renderLoadingScreen } from './Components/LoadingScreen/LoadingScreen'
import MenuToolbar from './Components/MenuToolbar/MenuToolbar'
import preCacheImages from './Functions/preCache'
import CSoundSystem from './Classes/CSoundSystem'
import { Credits } from './Components/Credits/Credits'
import CStatsManager from './Classes/CStatsManager'
import CScenarioManager from './Classes/CScenarioManager'
import { Books, startBooksTimer } from './Components/Books/Books'
import CTimer from './Classes/CTimer'
import CSlide from './Classes/CSlide'
import { Slide } from './Components/Slide/Slide'
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
import { achievementsData } from './Utils/achievementsData';

require('./sevice-worker')
document.addEventListener('contextmenu', e => { e.preventDefault() })

export const tabManagerMenu = new CElementManager(Settings.self, Achievements.self, Stories.self, Chapters.self, Parts.self, Credits.self, Profile.self)
tabManagerMenu.addElementTo(Chapters.self, Books.self)
tabManagerMenu.addElementTo(Stories.self, Books.self)
tabManagerMenu.addElementTo(Parts.self, Books.self)
tabManagerMenu.open(Stories.self)

export const storiesManager = new CStoriesManager(renderStories)
export const achievementsManager = new CAchievementsManager(renderAchievements)
export const statsManager = new CStatsManager()
export const soundManager = new CSoundSystem(require('./Sounds/Common/Silence.mp3'), require('./Sounds/Common/Notification.mp3'), require('./Sounds/Common/Menu.mp3'))
export const wardrobe = new CWardrobe(Wardrobe)
export const slide = new CSlide(Slide, soundManager, tabManagerMenu, Stories.self, MenuToolbar.self, Inventory.self, animateBackForth, renderInventory, showCutscene)
export const scenarioManager = new CScenarioManager(statsManager, soundManager, achievementsManager, slide, wardrobe)
export const timer = new CTimer(soundManager, Slide.timer, Slide.timerLeft)

loadStories(EStoriesEn)

hideDisclaimer()

renderLoadingScreen(require('./Images/UI/loadingscreen.png'), () => {})

achievementsManager.updateAchievementsInfo(achievementsData)

preCacheImages(LoadingScreen.loadingPercent, () => {
  storiesManager.render()
  new CSlider(Stories.storiesContainer, Stories.sliderCheckbox, 'story', 'slider__check', 'story__image')
  LoadingScreen.continueButton.style.display = 'block'
  LoadingScreen.loadingPercent.style.display = 'none'
  LoadingScreen.self.onclick = () => {
    MenuToolbar.self.style.display = 'flex'
    LoadingScreen.self.style.display = 'none'
    showPolicy()
    soundManager.play('menu')
    checkURL()
  }
})

export function saveEndProgress (storyName: string, chapterName: string, partName: string, code: string): void {
  statsManager.saveStats(false, storyName, chapterName, partName, code)
  Slide.self.style.display = 'none'
  MenuToolbar.self.style.display = 'flex'
  tabManagerMenu.open(Stories.self)
  soundManager.play('menu')
  showRate(storyName + chapterName + partName + code)
  localStorage.removeItem('LastSave_ScenarioInfo')
  MenuToolbar.continueButton.setAttribute('style', 'display: none')
}

startBooksTimer()
