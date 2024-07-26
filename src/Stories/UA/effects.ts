import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Killer',
  name: 'Киллер',
  image: require('../../Images/Immortals/Effects/bone.svg'),
  title: '-',
  description: 'Килер связан с предпочтением EVE-13C ювелирных убийств, быстрыми и тихими обезвреживаниями противника.',
  showValue: false,
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Effect',
  id: 'Butcher',
  name: 'Мясник',
  image: require('../../Images/Immortals/Effects/bone.svg'),
  title: '-',
  description: 'Мясник связан с более кровавыми и эмоциональными способами зачистки, получением удовольствия от нанесения тяжелых увечий.',
  showValue: false,
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Effect',
  id: 'Killer',
  name: 'Здоровье',
  image: require('../../Images/Immortals/Effects/bone.svg'),
  title: '-',
  description: 'Показатель состояния организма. Если значение стремится к нулю, значит, ты умираешь.',
  showValue: false,
  story: EStoriesEn.UA
})
