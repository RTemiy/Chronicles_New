import { promoCodes } from '../Utils/promoCodes'

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
