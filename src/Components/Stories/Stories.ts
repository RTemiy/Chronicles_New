import CContainer from '../../Classes/CContainer'
import './Stories.scss'
import './Slider.scss'
import '../Common/StoriesStyles.scss'
import { storiesManager, tabManagerMenu } from '../../index'
import Chapters, { renderChapters } from '../Chapters/Chapters'
import { showMessage } from '../MenuMessage/MenuMessage'
import { DesktopMode } from '../../Utils/technicalConsts'

const Stories = new CContainer(
  'stories',
  `
<p class="tab__title">Истории<img src="${require('../../Images/UI/icon_info.svg')}" class="icon_span" ${DesktopMode && 'style="display: none;"'}/></p>
<div class="stories__container"></div>
<div class="stories__slider-checkbox" ></div>
`,
  { name: 'storiesContainer', selector: '.stories__container' },
  { name: 'sliderCheckbox', selector: '.stories__slider-checkbox' },
  { name: 'infoButton', selector: '.icon_span' }
)

export const renderStories = (): void => {
  Stories.storiesContainer.innerHTML = storiesManager.getStoriesHTML()
  const storyElements = Stories.storiesContainer.querySelectorAll('.story')!
  storiesManager.getStoriesNames().forEach((story, index) => {
    storyElements[index].onclick = () => {
      renderChapters(story)
      tabManagerMenu.open(Chapters.self)
    }
  })
}

Stories.infoButton.onclick = () => {
  showMessage(`
  <p>Когда вы начинаете новую часть, тратится одна книжка.
  <p>Книжки возобновляются каждые 2 часа, нажмите на иконку книжки в правом верхнем углу и узнайте сколько времени осталось.
  <p>Максимальное количество — 3.
  
`, 'Принять')
}

export default Stories
