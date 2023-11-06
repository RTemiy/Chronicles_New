import CContainer from '../../Classes/CContainer'
import './Chapters.scss'
import { storiesManager, tabManagerMenu } from '../../index'
import Parts, { renderParts } from '../Parts/Parts'
import Stories from '../Stories/Stories'

const Chapters = new CContainer('chapters',
  `
  <button class="chapters__back-button"></button>
  <div class="chapters__container"></div>
`,
  { name: 'backButton', selector: '.chapters__back-button' },
  { name: 'container', selector: '.chapters__container' }
)

export const renderChapters = (storyName: string): void => {
  Chapters.container.innerHTML = storiesManager.getChaptersHTML(storyName)
  const chaptersElements = Chapters.container.querySelectorAll('.chapter')!
  chaptersElements.forEach(() => {
    storiesManager.getChapterNames(storyName).forEach((chapterName, index) => {
      chaptersElements[index].addEventListener('click', () => {
        renderParts(storyName, chapterName)
        tabManagerMenu.open(Parts.self)
      })
    })
  })
}

Chapters.backButton.onclick = () => {
  tabManagerMenu.open(Stories.self)
}

export default Chapters
