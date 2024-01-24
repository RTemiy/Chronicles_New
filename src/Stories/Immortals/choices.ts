import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Choice',
  id: 'WakeUp',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Choice',
  id: 'GoTaxi',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Choice',
  id: 'GoBus',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Effect',
  id: 'Study',
  name: 'Учеба',
  image: require('../../Images/Immortals/Items/Study.png'),
  title: 'Успеваемость в университете',
  description: 'Вопреки обстоятельствам не стоит забрасывать учебу, ведь от этого зависит мое будущее.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Effect',
  id: 'BrokenHand',
  name: 'Перелом',
  image: require('../../Images/Immortals/Effects/BrokenHand.png'),
  title: 'Перелом руки',
  description: 'И что мне делать дальше?',
  story: EStoriesEn.Immortals
})
