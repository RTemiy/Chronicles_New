// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { showMessage } from '../Components/MenuMessage/MenuMessage'
import { devMode } from '../Utils/technicalConsts'

type ad = 'short' | 'medium' | 'long'

export function showAd (type: ad, onAccepted: () => void): void {
  !window.navigator.onLine && showMessage('Отсутствует подключение к интернету!', 'Принять')
  if (devMode) {
    onAccepted()
  } else {
    let resCode = ''
    let platform = ''
    if (Ya.Context.AdvManager.getPlatform() === 'desktop') {
      platform = 'desktop'
      switch (type) {
        case 'short':
          resCode = 'R-A-5361625-4'
          break
        case 'medium':
          resCode = 'R-A-5361625-5'
          break
        case 'long':
          resCode = 'R-A-5361625-6'
          break
      }
    } else {
      platform = 'touch'
      switch (type) {
        case 'short':
          resCode = 'R-A-5361625-3'
          break
        case 'medium':
          resCode = 'R-A-5361625-1'
          break
        case 'long':
          resCode = 'R-A-5361625-2'
          break
      }
    }

    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: resCode,
        type: 'rewarded',
        platform,
        onRewarded: (isRewarded: boolean) => {
          if (isRewarded) {
            onAccepted()
          } else {
            showMessage('Вы прервали просмотр рекламы', 'Принять')
          }
        }
      })
    })
  }
}
