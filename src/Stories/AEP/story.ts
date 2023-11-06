import { storiesManager } from '../../index'

storiesManager.add({
  name: 'AEP',
  image: require('../../Images/AEP/Covers/Story_Cover_Closed.png'),
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/AEP/Backgrounds/Col.png'),
    parts: [{
      name: 'Пролог',
      code: 'Prologue',
      image: require('../../Images/AEP/Backgrounds/Col.png'),
      event: () => {}
    }]
  }]
})
