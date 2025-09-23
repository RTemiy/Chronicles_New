import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Images/HF/Achievements/PrologueCompleted.jpg'),
  title: 'Инструктаж',
  text: 'Пройти инструктаж',
  story: EStoriesEn.HF
})
