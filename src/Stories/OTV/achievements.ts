import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Media/Images/OTV/Achievements/AfraidDesires.jpg'),
  title: 'Бойся своих желаний',
  text: 'Или ты не этого хотела?',
  story: EStoriesEn.OTV
})

achievementsManager.add({
  name: 'Chapter01Part01Completed',
  image: require('../../Media/Images/OTV/Achievements/LongDay.jpg'),
  title: 'Очень длинный день',
  text: 'День, который перевернул твою жизнь',
  story: EStoriesEn.OTV
})
