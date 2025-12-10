import { loadData } from './localStorageManager';

export function doVibrate (type: 'long' | 'short' | 'double'): void {
  if (loadData(['Settings_Vibrate']) !== 'true') return
  switch (type) {
    case 'short':
      navigator.vibrate(50)
      break

    case 'double':
      navigator.vibrate([50, 30, 50])
      break

    case 'long':
      navigator.vibrate(500)
      break
  }
}
