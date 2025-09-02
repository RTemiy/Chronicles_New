import { showMessage } from '../Components/MenuMessage/MenuMessage'
import { loadData, saveData } from './localStorageManager'
import { news, newsDate } from '../Utils/newsData'

export function showNews (): void {
  if (loadData([newsDate]) !== '1') {
    showMessage(news[newsDate], 'Ок')
    saveData([newsDate], [1])
  }
}
