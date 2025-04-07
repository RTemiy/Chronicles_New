import CContainer from '../../Classes/CContainer'
import './Parts.scss'
import { statsManager, storiesManager, tabManagerMenu } from '../../index'
import MenuToolbar from '../MenuToolbar/MenuToolbar'
import Chapters from '../Chapters/Chapters'
import { Slide } from '../Slide/Slide'
import { LoadingScreen, renderLoadingScreen } from '../LoadingScreen/LoadingScreen'
import { wasteBook } from '../Books/Books'
import { loadData } from '../../Functions/localStorageManager'
import { sendActivity } from '../../Functions/GSAPI'
import { showAd } from '../../Functions/advertisement'

const Parts = new CContainer(
  'parts',
  `
<p class="tab__title">Части</p>
<button class="parts__back-button"></button>
<div class="parts__container"></div>
`,
  { name: 'backButton', selector: '.parts__back-button' },
  { name: 'container', selector: '.parts__container' }
)

export const renderParts = (storyName: string, chapterName: string): void => {
  const partData = storiesManager.getPartsHTML(storyName, chapterName)
  Parts.container.innerHTML = partData.innerHTML
  const partElements = Parts.container.querySelectorAll('.part')
  partElements.forEach(() => {
    storiesManager.getPartNames(storyName, chapterName).forEach((partName, index) => {
      const partUnlocked = loadData([storyName, chapterName, partName, storiesManager.getPartProp(storyName, chapterName, partName, 'code'), 'Unlocked'])
      const addListener = (): void => {
        partElements[index].onclick = () => {
          showAd('short', () => {
            wasteBook(() => {
              MenuToolbar.self.style.display = 'none'
              MenuToolbar.continueButton.setAttribute('style', 'display: block')
              tabManagerMenu.closeAll()
              LoadingScreen.continueButton.style.display = 'none'
              setTimeout(() => { LoadingScreen.continueButton.style.display = 'block' }, 3000)
              sendActivity(`Начинает ${storyName}: ${chapterName} ${partName}`)
              storiesManager.getPartProp(storyName, chapterName, partName, 'event')(storyName, chapterName, partName, storiesManager.getPartProp(storyName, chapterName, partName, 'code'))
              renderLoadingScreen(storiesManager.getPartProp(storyName, chapterName, partName, 'loadingImage'), () => {
                Slide.self.style.display = 'grid'
                LoadingScreen.self.style.display = 'none'
              })
            })
          })
        }
      }
      if (partUnlocked !== null && partUnlocked === '1') {
        addListener()
      } else if (partData.index === 0 && index === 0) {
        statsManager.resetStats()
        addListener()
        partElements[index].querySelector('.part__tick').style.display = 'none'
        partElements[index].querySelector('.part__tick').src = require('../../Images/UI/icon_notick.svg')
      } else {
        partElements[index].style.filter = 'grayscale(100%)'
        partElements[index].querySelector('.part__tick').style.display = 'none'
        partElements[index].querySelector('.part__tick').src = require('../../Images/UI/icon_notick.svg')
      }
    })
  })
  const tickElements = Parts.container.querySelectorAll('.part__tick')
  tickElements.forEach((tickElement: any, index: number) => {
    if (index < tickElements.length - 1) {
      console.log(tickElements[index].style)
      tickElements[index + 1].style.display === 'none' && (tickElement.src = require('../../Images/UI/icon_notick.svg'))
    }
  })
}

Parts.backButton.onclick = () => {
  tabManagerMenu.open(Chapters.self)
}

export default Parts
