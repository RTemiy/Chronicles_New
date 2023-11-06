import { storiesManager } from '../../index'

storiesManager.add({
  name: 'Immortals',
  image: require('../../Images/Immortals/Covers/Story_Cover.png'),
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/Immortals/Persons/Stranger.png'),
    parts: [{
      name: 'Пролог',
      code: 'Prologue',
      image: require('../../Images/Immortals/Backgrounds/Abstraction_Hero.png'),
      event: () => {}
    },
    {
      name: 'Часть 1',
      code: 'Part01',
      image: require('../../Images/Immortals/Backgrounds/Lection.png'),
      event: () => {}
    },
    {
      name: 'Часть 2',
      code: 'Part02',
      image: require('../../Images/Immortals/Backgrounds/NY.png'),
      event: () => {}
    },
    {
      name: 'Часть 3',
      code: 'Part03',
      image: require('../../Images/Immortals/Backgrounds/Pompeii.png'),
      event: () => {}
    },
    {
      name: 'Часть 4',
      code: 'Part04',
      image: require('../../Images/Immortals/Backgrounds/Ball.png'),
      event: () => {}
    },
    {
      name: 'Часть 5',
      code: 'Part05',
      image: require('../../Images/Immortals/Backgrounds/Lake.png'),
      event: () => {}
    },
    {
      name: 'Часть 6',
      code: 'Part06',
      image: require('../../Images/Immortals/Backgrounds/Camp_Morning.png'),
      event: () => {}
    }]
  }]
})
