import { storiesManager } from '../../index'
import storyCover from '../../Images/Covers/ROR/Story_Cover.png'
import chapter01 from '../../Images/ROR/Backgrounds/City_Street.png'
import prologue from '../../Images/ROR/Persons/Mortimer.png'
import part01 from '../../Images/ROR/Backgrounds/City_Gates.png'

storiesManager.add({
  name: 'ROR',
  image: storyCover,
  chapters: [{
    name: 'Глава 1',
    image: chapter01,
    parts: [{
      name: 'Пролог',
      code: 'Prologue',
      image: prologue,
      event: () => {}
    },
    {
      name: 'Часть 1',
      code: 'Part01',
      image: part01,
      event: () => {}
    }]
  }]
})
