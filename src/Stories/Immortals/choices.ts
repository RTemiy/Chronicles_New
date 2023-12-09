import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'BrokenHand',
  name: 'Перелом',
  image: require('../../Images/Immortals/Effects/BrokenHand.png'),
  title: 'Перелом руки',
  description: 'И что мне делать дальше?',
  story: EStoriesEn.Immortals
})
