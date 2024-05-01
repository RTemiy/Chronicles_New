import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Health',
  name: 'Здоровье',
  image: require('../../Images/ROR/Effects/Health.png'),
  title: 'Самочувствие Генриха Гарнера',
  description: 'Показатели жизни Генриха Гарнера, указывающие на его самочувствие.',
  story: EStoriesEn.ROR
})
