import { loadData, saveData } from '../../Functions/localStorageManager'
import { profileEvents } from '../../Utils/eventManager'

export function getEventsHTML (): string {
  let result = ''
  profileEvents.forEach(event => {
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
