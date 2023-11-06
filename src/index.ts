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
import { StoriesEn } from './Utils/StoriesNames'
import CSlider from './Classes/CSlider'
import { LoadingScreen, renderLoadingScreen } from './Components/LoadingScreen/LoadingScreen'
import MenuToolbar from './Components/MenuToolbar/MenuToolbar'
import preCacheImages from './Functions/preCache'

require('./sevice-worker')

export const tabManagerMenu = new CElementManager(Settings.self, Achievements.self, Stories.self, Chapters.self, Parts.self)
tabManagerMenu.open(Stories.self)

export const storiesManager = new CStoriesManager(renderStories)
export const achievementsManager = new CAchievementsManager(renderAchievements)
loadStories(StoriesEn)

renderLoadingScreen(require('./Images/UI/loadingscreen.png'), () => {})

preCacheImages(LoadingScreen.loadingPercent, () => {
  storiesManager.render()
  new CSlider(Stories.storiesContainer, Stories.sliderCheckbox)
  LoadingScreen.continueButton.style.display = 'block'
  LoadingScreen.loadingPercent.style.display = 'none'
  LoadingScreen.self.onclick = () => {
    MenuToolbar.self.style.display = 'flex'
    LoadingScreen.self.style.display = 'none'
  }
})
