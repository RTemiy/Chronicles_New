import importAllIDirectory from './importAllIDirectory'

export default function (storiesNames: object): void {
  Object.keys(storiesNames).forEach((story) => {
    require('../Stories/' + story + '/story')
    require('../Stories/' + story + '/achievements')
    require('../Stories/' + story + '/persons')
    require('../Stories/' + story + '/items')
    require('../Stories/' + story + '/choices')
    require('../Stories/' + story + '/wardrobe')
    require('../Stories/' + story + '/avatars')
    require('../Stories/' + story + '/banners')
  })
  const allFiles = importAllIDirectory(
    require.context('../Stories', true, /\.ts$/)
  )
  for (const allFilesKey in allFiles) {
    if (
      !allFilesKey.includes('/story') ||
      !allFilesKey.includes('/achievements') ||
      !allFilesKey.includes('/persons') ||
      !allFilesKey.includes('/items') ||
      !allFilesKey.includes('/choices') ||
      !allFilesKey.includes('/wardrobe') ||
      !allFilesKey.includes('/avatars') ||
      !allFilesKey.includes('/banners')
    ) {
      require('../Stories/' + allFilesKey)
    }
  }
}
