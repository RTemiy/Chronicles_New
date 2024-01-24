// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { showMessage } from '../Components/MenuMessage/MenuMessage'

type ad = 'short' | 'medium' | 'long'

export function showAd (type: ad, onAccepted: () => void): void {
  let resCode = ''
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

/*  window.yaContextCb.push(() => {
    Ya.Context.AdvManager.render({
      blockId: resCode,
      type: 'rewarded',
      platform: 'touch',
      onRewarded: (isRewarded: boolean) => {
        if (isRewarded) {*/
          onAccepted()
/*        } else {
          showMessage('Вы прервали просмотр рекламы', 'Принять')
        }
      }
    })
  })*/
}
