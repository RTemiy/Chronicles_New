import { promoCodes } from '../Utils/promoCodes'
import { showMessage } from '../Components/MenuMessage/MenuMessage'
import { sendActivity } from './GSAPI'

export default function checkPromoCode (code: string): void {
  let result = false
  promoCodes.forEach(el => {
    if (el.code === code) {
      el.func()
      result = true
    }
  })
  if (result) {
    sendActivity(`Применяет промокод ${code}`)
    showMessage('Промокод успешно применен', 'Принять')
  } else {
    showMessage('Такого промокода нет', 'Ок')
  }
}
