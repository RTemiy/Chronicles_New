import { loadData, saveData } from '../../Functions/localStorageManager'
import { DesktopMode } from '../../Utils/technicalConsts'

export const events = [
  {
    title: 'Выпуск глобального обновления 2024',
    code: '2024_Global_Update',
    achieve: false
  },
  {
    title: 'День всех влюблённых 2024',
    code: '2024_February_14',
    achieve: false
  },
  {
    title: 'Владелец ПК версии ',
    code: 'Purchased_PC_Version',
    achieve: DesktopMode
  }
]

export function getEventsHTML (): string {
  let result = ''
  events.forEach(event => {
    if (event.achieve) {
      saveData([event.code], [1])
    }
    if (loadData([event.code]) === '1') {
      result += `
      <div class="profile__event">
        <img class="profile__event-image" src="${require('../../Images/Events/' + event.code + '.png')}">
        <p class="profile__event-title">${event.title}</p>
      </div>
      `
    }
  })
  return result
}
