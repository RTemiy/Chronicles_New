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
  },
  {
    code: 'demoBanner',
    func: () => { saveData(['Promo', 'DemoBanner'], ['1']) }
  },
  {
    code: 'qly52axc',
    func: () => { saveData(['Promo', 'Competition', '2024', 'February', '14'], ['1']) }
  }
]
