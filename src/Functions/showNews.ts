import { showMessage } from '../Components/MenuMessage/MenuMessage'
import { loadData, saveData } from './localStorageManager'
import { news, newsDate } from '../Utils/newsData'

export function showNews (type: 'start' | 'settings'): void {
  switch (type) {
    case 'settings':
      showMessage(news[newsDate], 'Ок')
      break

    case 'start':
      if (loadData([newsDate]) !== '1') {
        showMessage(news[newsDate], 'Ок')
        saveData([newsDate], [1])
      }
      break
  }
}
