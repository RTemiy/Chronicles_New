import CWindowManager from './Classes/CWindowManager'
import Settings from './Components/Settings/Settings'
import Achievements, { renderAchievements } from './Components/Achievements/Achievements'
import Stories, { renderStories } from './Components/Stories/Stories'
import Chapters from './Components/Chapters/Chapters'
import Parts from './Components/Parts/Parts'
import CStoriesManager from './Classes/CStoriesManager'
import CAchievementsManager from './Classes/CAchievementsManager'
import './index.css'

require('./Components/MenuToolbar/MenuToolbar')
require('./Components/Settings/Settings')
require('./Components/Stories/Stories')
require('./Components/Chapters/Chapters')
require('./Components/Parts/Parts')

export const tabManagerMenu = new CWindowManager(Settings.self, Achievements.self, Stories.self, Chapters.self, Parts.self)
tabManagerMenu.open(Stories.self)

export const storiesManager = new CStoriesManager(renderStories)
require('./Stories/ROR/story')
require('./Stories/AEP/story')
require('./Stories/Aurora/story')
require('./Stories/Immortals/story')
storiesManager.renderStories()

export const achievementsManager = new CAchievementsManager(renderAchievements)
require('./Stories/Immortals/achievements')
achievementsManager.render()
