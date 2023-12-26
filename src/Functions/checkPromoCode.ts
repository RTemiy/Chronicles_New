import { saveData } from './localStorageManager'

export default function checkPromoCode (code: string): boolean {
  let result = false
  promoCodes.forEach(el => {
    if (el.code === code) {
      el.func()
      result = true
    }
  })
  return result
}

const promoCodes = [
  {
    code: 'ghbdtngegcbr',
    func: () => { saveData(['Promo', 'ClownAvatar'], ['1']) }
  }
]
