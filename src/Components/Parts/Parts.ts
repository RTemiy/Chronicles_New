import CContainer from '../../Classes/CContainer'
import './Parts.scss'
import { storiesManager, tabManagerMenu } from '../../index'
import MenuToolbar from '../MenuToolbar/MenuToolbar'
import Chapters from '../Chapters/Chapters'
import { Slide } from '../Slide/Slide'

const Parts = new CContainer(
  'parts',
  `
<button class="parts__back-button"></button>
<div class="parts__container"></div>
`,
  { name: 'backButton', selector: '.parts__back-button' },
  { name: 'container', selector: '.parts__container' }
)

export const renderParts = (storyName: string, chapterName: string): void => {
  Parts.container.innerHTML = storiesManager.getPartsHTML(storyName, chapterName)
  const partElements = Parts.container.querySelectorAll('.part')
  partElements.forEach(() => {
    storiesManager.getPartNames(storyName, chapterName).forEach((partName, index) => {
      partElements[index].addEventListener('click', () => {
        MenuToolbar.self.style.display = 'none'
        Slide.self.style.display = 'grid'
        tabManagerMenu.closeAll()
        storiesManager.getPartEvent(storyName, chapterName, partName)
      })
    })
  })
}

Parts.backButton.onclick = () => {
  tabManagerMenu.open(Chapters.self)
}

export default Parts
