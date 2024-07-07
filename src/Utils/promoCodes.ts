import { saveData } from '../Functions/localStorageManager'

export const promoCodes = [
  {
    code: 'ghbdtngegcbr',
    description: '<b>Бессмертные: Последняя надежда</b> <p>- <i>Костюм клоуна',
    func: () => { saveData(['Promo', 'ClownAvatar'], ['1']) }
  },
  {
    code: 'demoBanner',
    description: 'Тестовый баннер',
    func: () => { saveData(['Promo', 'DemoBanner'], ['1']) }
  },
  {
    code: 'gjtlbntkmrjyrehcfhtgjcnjd',
    description: '<b>Аврора</b> <p>- <i style="color: lawngreen">"Цветочный" наряд',
    func: () => { saveData(['Promo', 'RepostVKCompetition'], ['1']) }
  }
  /* {
    code: 'qly52axc',
    description: '',
    func: () => { saveData(['Promo', 'Competition', '2024', 'February', '14'], ['1']) }
  } */
]
