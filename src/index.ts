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
import { Slide } from './Components/Slide/Slide'

require('./sevice-worker')

export const tabManagerMenu = new CElementManager(Settings.self, Achievements.self, Stories.self, Chapters.self, Parts.self, Credits.self)
tabManagerMenu.open(Stories.self)

export const storiesManager = new CStoriesManager(renderStories)
export const achievementsManager = new CAchievementsManager(renderAchievements)
export const statsManager = new CStatsManager()
export const scenarioManager = new CScenarioManager(statsManager)

loadStories(EStoriesEn)

export const soundManager = new CSoundSystem(require('./Sounds/Common/Silence.mp3'), require('./Sounds/Common/Notification.mp3'), require('./Sounds/Common/Menu.mp3'))

renderLoadingScreen(require('./Images/UI/loadingscreen.png'), () => {})

preCacheImages(LoadingScreen.loadingPercent, () => {
  storiesManager.render()
  new CSlider(Stories.storiesContainer, Stories.sliderCheckbox, 'story', 'slider__check')
  LoadingScreen.continueButton.style.display = 'block'
  LoadingScreen.loadingPercent.style.display = 'none'
  LoadingScreen.self.onclick = () => {
    MenuToolbar.self.style.display = 'flex'
    LoadingScreen.self.style.display = 'none'
    soundManager.play('menu')
  }
})

export function openProgressPart (storyName: string, chapterName: string, partName: string, code: string): void {
  statsManager.saveStats(false, storyName, chapterName, partName, code)
  Slide.self.style.display = 'none'
  MenuToolbar.self.style.display = 'flex'
  tabManagerMenu.open(Stories.self)
  soundManager.play('menu')
}
