import CContainer from '../../Classes/CContainer'
import './Stories.scss'
import '../Common/StoriesStyles.scss'
import { storiesManager, tabManagerMenu } from '../../index'
import Chapters, { renderChapters } from '../Chapters/Chapters'

const Stories = new CContainer('stories', `
<p class="tab__title">Истории</p>
<div class="stories__container"></div>
<div class="stories__slider-checkbox"></div>
`,
{ name: 'storiesContainer', selector: '.stories__container' },
{ name: 'sliderCheckbox', selector: '.stories__slider-checkbox' }
)

export const renderStories = (): void => {
  Stories.storiesContainer.innerHTML = storiesManager.getStoriesHTML()
  const storyElements = Stories.storiesContainer.querySelectorAll('.story')!
  storiesManager.getStoriesNames().forEach((story, index) => {
    storyElements[index].addEventListener('click', () => {
      renderChapters(story)
      tabManagerMenu.open(Chapters.self)
    })
  })
}

export default Stories
