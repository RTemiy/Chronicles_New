import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Images/MM/Objects/Burnt_Letter.png'),
  title: 'Записка незнакомца',
  text: 'Получить необычное письмо. Или ценную улику?',
  story: EStoriesEn.MM
})

achievementsManager.add({
  name: 'DetectiveActress',
  image: require('../../Images/MM/Achievements/DetectiveActress.png'),
  title: 'Детектив-актриса',
  text: 'Проявить лучшие умения в стрессовой обстановке ',
  story: EStoriesEn.MM
})

achievementsManager.add({
  name: 'Chapter01Part01Completed',
  image: require('../../Images/MM/Achievements/Chapter01Part01Completed.jpg'),
  title: '«Удачное» знакомство',
  text: 'Побеседовать с не самым приятным подозреваемым',
  story: EStoriesEn.MM
})
