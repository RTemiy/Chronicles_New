import { promoCodes } from '../Utils/promoCodes'
import { showMessage } from '../Components/MenuMessage/MenuMessage'
import { sendActivity } from './GSAPI'
import { loadData, saveData } from './localStorageManager';

export default function checkPromoCode (code: string): void {
  let result = false
  let des = ''
  promoCodes.forEach(el => {
    if (el.code === code) {
      saveData([el.innerCode], [1])
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

export function getUsedPromoCodes (): string[] {
  const result: string[] = []
  promoCodes.forEach(el => {
    if (loadData([el.innerCode]) === '1') {
      result.push(el.description)
    }
  })
  return result
}
