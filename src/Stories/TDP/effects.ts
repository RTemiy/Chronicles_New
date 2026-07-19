import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Health',
  name: 'Здоровье',
  image: require('../../Media/Images/TDP/Effects/Health.png'),
  title: 'Самочувствие Генриха.',
  description: 'Критическое снижение уровня здоровья грозит серьезными последствиями вплоть до гибели персонажа.',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Effect',
  id: 'Reputation',
  name: 'Репутация',
  image: require('../../Media/Images/TDP/Effects/Reputation.png'),
  title: 'Публичное отношение к Генриху.',
  description: 'Высокая — открывает доступ к новым возможностям, облегчает взаимодействие с окружающими, тогда как низкая осложняет негативно влияет на сюжетные события.',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Effect',
  id: 'Karma',
  name: 'Карма',
  image: require('../../Media/Images/TDP/Effects/Karma.png'),
  title: 'Отношение Генриха к окружающему миру.',
  description: 'Чем выше показатель — тем добрее и отзывчивее к окружающим относится Генрих, а при отрицательных значениях — наоборот.',
  story: EStoriesEn.TDP
})
