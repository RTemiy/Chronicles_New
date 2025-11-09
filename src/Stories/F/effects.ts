import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'BrokenHand',
  name: 'Перелом',
  image: require('../../Images/Immortals/Effects/bone.svg'),
  title: 'Сломанная рука',
  description: 'Ранение, которое я получила после стычки с монстром при похищении.',
  showValue: false,
  story: EStoriesEn.Immortals
})
