import './CutScene.scss'
import CContainer from '../../Classes/CContainer'
import { loadData, saveData } from '../../Functions/localStorageManager';
import Settings from '../Settings/Settings';

export const CutScene = new CContainer('cut-scene',
	`
    	<div class='cut-scene__container'>
    	<video autoplay loop name='media' class='cut-scene__image'>
    	  <source src="" id="cutSceneSource" type="video/mp4"><source/>
      </video>
    	<button class='cut-scene__button'></button>
			</div>
`,
	{ name: 'container', selector: '.cut-scene__container' },
	{ name: 'video', selector: '.cut-scene__image' },
	{ name: 'button', selector: '.cut-scene__button' },
	{ name: 'source', selector: '#cutSceneSource' })

export function showCutscene (cutSceneInfo: { video: string, goTo: () => void }): void {
  CutScene.self.style.display = 'flex'
  setTimeout(() => {
    CutScene.self.classList.add('cut-scene_show')
    CutScene.source.setAttribute('src', cutSceneInfo.video)
    if (loadData(['Settings_Sound']) === 'true') {
      CutScene.video.muted = false
    } else if (loadData(['Settings_Sound']) === 'false') {
      CutScene.video.muted = true
    }
    CutScene.video.load()
    CutScene.video.play()
  }, 100)
  setTimeout(() => {
    CutScene.container.style.display = 'flex'
    setTimeout(() => {
      CutScene.container.classList.add('cut-scene__container_show')
    }, 100)
  }, 2000)
  CutScene.button.onclick = () => {
    CutScene.video.pause()
    cutSceneInfo.goTo()
  }
}

CutScene.button.addEventListener('click', () => {
  CutScene.container.classList.remove('cut-scene__container_show')
  setTimeout(() => {
    CutScene.container.style.display = 'none'
    CutScene.self.classList.remove('cut-scene_show')
  }, 1000)
  setTimeout(() => {
    CutScene.self.style.display = 'none'
  }, 3000)
})
