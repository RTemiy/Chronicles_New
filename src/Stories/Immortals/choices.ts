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
  category: 'Choice',
  id: 'TakeSerious',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Choice',
  id: 'DontBelieve',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Choice',
  id: 'RunAwayFromNicola',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Choice',
  id: 'TurnToSide',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Choice',
  id: 'HelpFromLeon',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Choice',
  id: 'TakeCigarette',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Choice',
  id: 'TellCherylTheTruth',
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
  id: 'SupportNicola',
  name: 'Помощь',
  image: require('../../Images/Immortals/Effects/addiction.svg'),
  title: '',
  description: '',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Effect',
  id: 'Family',
  name: 'Семья',
  image: require('../../Images/Immortals/Effects/family.svg'),
  title: '',
  description: '',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Effect',
  id: 'BrokenHand',
  name: 'Перелом',
  image: require('../../Images/Immortals/Effects/bone.svg'),
  title: 'Перелом руки',
  description: 'И что мне делать дальше?',
  story: EStoriesEn.Immortals
})
