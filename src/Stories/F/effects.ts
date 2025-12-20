import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'PersonalGrowth',
  name: 'Путь',
  image: require('../../Images/F/Effects/PG.png'),
  title: 'Личностный рост. Определяет вектор дальнейших шагов.',
  description: 'Позволяет выбирать стратегию жизни: предпринять шаги по её улучшению или плыть по течению.  Положительные характеристики способствуют развитию и улучшению, при отрицательных герой перестает видеть смысл бороться.',
  showValue: false,
  story: EStoriesEn.F
})
