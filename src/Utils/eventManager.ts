import { ANDROIDMODE, DESKTOPMODE, DEVMODE } from './technicalConsts'

const currentEvent: 'default' | 'newYear' = 'default'

export function getCurrentEventImageSVG (imageName: string): string {
  switch (currentEvent) {
    case 'newYear':
      return require('../Images/UI/new_year/' + imageName + '.svg')
    default:
      return require('../Images/UI/' + imageName + '.svg')
  }
}

export function getCurrentEventImageJPG (imageName: string): string {
  switch (currentEvent) {
    case 'newYear':
      return require('../Images/UI/new_year/' + imageName + '.jpg')
    default:
      return require('../Images/UI/' + imageName + '.jpg')
  }
}

export const profileEvents = [
  {
    title: 'Выпуск глобального обновления 2024',
    code: '2024_Global_Update',
    achieve: false
  },
  {
    title: 'День всех влюблённых 2024',
    code: '2024_February_14',
    achieve: false
  },
  {
    title: 'Разработчик',
    code: 'Developer',
    achieve: DEVMODE
  },
  {
    title: 'Владелец ПК версии ',
    code: 'Purchased_PC_Version',
    achieve: DESKTOPMODE
  },
  {
    title: 'Владелец Android версии',
    code: 'Purchased_Android_Version',
    achieve: ANDROIDMODE
  },
  {
    title: 'Новый год 2025',
    code: '2025_New_Year',
    achieve: false
  }
]
