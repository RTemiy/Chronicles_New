export default function (storiesNames: object): void {
  Object.keys(storiesNames).forEach(story => {
    require('../Stories/' + story + '/story')
    require('../Stories/' + story + '/achievements')
  })
}
