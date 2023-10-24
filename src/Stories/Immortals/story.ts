import { storiesManager } from '../../index'
import storyCover from '../../Images/Covers/Immortals/Story_Cover.png'
import chapter01Cover from '../../Images/UI/Lock.png'

storiesManager.add({
  name: 'Immortals',
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
