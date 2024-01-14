import { loadData, saveData } from '../../Functions/localStorageManager';

export const events = [
  {
    title: 'Выпуск глобального обновления 2024',
    code: '2024_Global_Update',
    achieve: true
  }
]

export function getEventsHTML (): string {
  let result = ''
  events.forEach(event => {
    if (event.achieve) {
      saveData([events[0].code], [1])
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
