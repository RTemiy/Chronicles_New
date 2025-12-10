const currentEvent: 'default' | 'newYear' = 'newYear'

export function getCurrentEventImage (imageName: string): string {
  switch (currentEvent) {
    case 'newYear':
      return require('../Images/UI/new_year/' + imageName + '.svg')
    default:
      return require('../Images/UI/' + imageName + '.svg')
  }
}
