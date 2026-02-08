import makeExplosion from './explosion'
import { loadData } from './localStorageManager'
import { getCurrentEventImageSVG } from '../Utils/eventManager';

export function initTapTap (): void {
  document.body.onclick = (event) => {
    if (loadData(['Settings', 'ShowTap']) === 'true' || loadData(['Settings', 'ShowTap']) === null) {
      const placeholder = document.createElement('div')
      placeholder.style.position = 'absolute'
      placeholder.style.top = event.pageY - 5 + 'px'
      placeholder.style.left = event.pageX - 10 + 'px'
      placeholder.style.width = '1px'
      placeholder.style.height = '1px'
      placeholder.style.pointerEvents = 'none'
      document.body.appendChild(placeholder)
      makeExplosion(placeholder, [`<img src="${getCurrentEventImageSVG('tap')}" class="icon_span"/>`], 0.7, 10, 8, 30)
      setTimeout(() => { placeholder.remove() }, 1000)
    }
  }
}
