import { storiesManager } from '../../index'

storiesManager.add({
  name: 'ROR',
  image: require('../../Images/ROR/Covers/Story_Cover.png'),
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/ROR/Backgrounds/City_Street.png'),
    parts: [{
      name: 'Пролог',
      code: 'Prologue',
      image: require('../../Images/ROR/Persons/Mortimer.png'),
      event: () => {}
    }, {
      name: 'Часть 1',
      code: 'Part01',
      image: require('../../Images/ROR/Backgrounds/City_Gates.png'),
      event: () => {}
    }]
  }]
})
