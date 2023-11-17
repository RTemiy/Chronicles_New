export default function (storiesNames: object): void {
  Object.keys(storiesNames).forEach(story => {
    require('../Stories/' + story + '/story')
    require('../Stories/' + story + '/achievements')
    require('../Stories/' + story + '/persons')
    require('../Stories/' + story + '/items')
    require('../Stories/' + story + '/choices')
  })
}
