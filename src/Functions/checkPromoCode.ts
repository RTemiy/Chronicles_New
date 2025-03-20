import { promoCodes } from '../Utils/promoCodes'
import { showMessage } from '../Components/MenuMessage/MenuMessage'
import { sendActivity } from './GSAPI'

export default function checkPromoCode (code: string): void {
  let result = false
  let des = ''
  promoCodes.forEach(el => {
    if (el.code === code) {
      el.func()
      result = true
      des = el.description
    }
  })
  if (result) {
    sendActivity(`Применяет промокод ${code}`)
    showMessage(`Получилось!<p>${des}`, 'Принять')
  } else {
    showMessage('Такого промокода нет', 'Ок')
  }
}
