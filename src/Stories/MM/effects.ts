import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Investigation',
  name: 'Нить расследования',
  image: require('../../Images/MM/Effects/Investigation.png'),
  title: 'Нить расследования',
  description: 'Лишь отточенные действия и слаженная работа помогут по крохотным крупицам информации раскрыть дело.',
  story: EStoriesEn.MM
})
