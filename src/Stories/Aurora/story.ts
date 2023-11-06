import { storiesManager } from '../../index'

storiesManager.add({
  name: 'Aurora',
  image: require('../../Images/Aurora/Covers/Story_Cover.png'),
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/Aurora/Backgrounds/Lighthouse.png'),
    parts: [{
      name: 'Пролог',
      code: 'Prologue',
      image: require('../../Images/Aurora/Backgrounds/Writing.png'),
      event: () => {}
    }, {
      name: 'Часть 1',
      code: 'Part01',
      image: require('../../Images/Aurora/Backgrounds/House_Inside.png'),
      event: () => {}
    }, {
      name: 'Часть 2',
      code: 'Part02',
      image: require('../../Images/Aurora/Backgrounds/Univer.png'),
      event: () => {}
    }, {
      name: 'Часть 3',
      code: 'Part03',
      image: require('../../Images/Aurora/Backgrounds/SW_Streets.png'),
      event: () => {}
    }, {
      name: 'Часть 4',
      code: 'Part04',
      image: require('../../Images/Aurora/Backgrounds/Bakery.png'),
      event: () => {}
    }]
  }]
})
