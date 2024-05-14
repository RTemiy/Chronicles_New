import { promoCodes } from '../Utils/promoCodes'
import { showMessage } from '../Components/MenuMessage/MenuMessage';

export default function checkPromoCode (code: string): void {
  let result = false
  promoCodes.forEach(el => {
    if (el.code === code) {
      el.func()
      result = true
    }
  })
  result ? showMessage('Промокод успешно применен', 'Принять') : showMessage('Такого промокода нет', 'Ок')
}
