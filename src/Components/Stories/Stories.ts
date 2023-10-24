import CContainer from '../../Classes/CContainer'
import './Stories.css'
import { storiesManager, tabManagerMenu } from '../../index'
import Chapters, { renderChapters } from '../Chapters/Chapters'

const Stories = new CContainer('stories show', '')

export const renderStories = (): void => {
  Stories.self.innerHTML = storiesManager.getStoriesHTML()
  const storyElements = Stories.self.querySelectorAll('.story')!
  storiesManager.getStoriesNames().forEach((story, index) => {
    storyElements[index].addEventListener('click', () => {
      renderChapters(story)
      tabManagerMenu.open(Chapters.self)
    })
  })
}

export default Stories
