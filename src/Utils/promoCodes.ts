import { saveData } from '../Functions/localStorageManager'

export const promoCodes = [
  {
    code: 'ghbdtngegcbr',
    func: () => { saveData(['Promo', 'ClownAvatar'], ['1']) }
  },
  {
    code: 'demoBanner',
    func: () => { saveData(['Promo', 'DemoBanner'], ['1']) }
  },
  {
    code: 'gjtlbntkmrjyrehcfhtgjcnjd',
    func: () => { saveData(['Promo', 'RepostVKCompetition'], ['1']) }
  }
  /* {
    code: 'qly52axc',
    func: () => { saveData(['Promo', 'Competition', '2024', 'February', '14'], ['1']) }
  } */
]
