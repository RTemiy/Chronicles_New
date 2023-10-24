import { storiesManager } from '../../index'
import storyCover from '../../Images/Covers/AEP/Story_Cover_Closed.png'
import chapter01Cover from '../../Images/AEP/Backgrounds/Col.png'

storiesManager.add({
  name: 'AEP',
  image: storyCover,
  chapters: [{
    name: 'Глава 1',
    image: chapter01Cover,
    parts: [{
      name: 'Пролог',
      code: 'Prologue',
      image: chapter01Cover,
      event: () => {}
    }]
  }]
})
