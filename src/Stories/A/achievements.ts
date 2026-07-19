import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'SmallVictory',
  image: require('../../Media/Images/A/Achievements/PrologueCompleted.png'),
  title: 'Маленькая победа',
  text: 'Одержите победу в прятках',
  story: EStoriesEn.A
})

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Media/Images/A/Achievements/PrologueCompleted.png'),
  title: 'Долгая дорога',
  text: 'Вступите на тропу судьбы, отправившись на маяк',
  story: EStoriesEn.A
})
