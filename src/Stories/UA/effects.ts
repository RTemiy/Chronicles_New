import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Killer',
  name: 'Киллер',
  image: require('../../Images/UA/Effects/Killer.svg'),
  title: 'Для желающих использовать навыки быстрого обнуления.',
  description: 'Киллер связан с предпочтением EVE-13C ювелирных убийств, быстрыми и тихими обезвреживаниями противника.',
  showValue: true,
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Effect',
  id: 'Butcher',
  name: 'Мясник',
  image: require('../../Images/UA/Effects/Butcher.svg'),
  title: 'Если слишком любишь кровь.',
  description: 'Мясник связан с более кровавыми и эмоциональными способами зачистки, получением удовольствия от нанесения тяжелых увечий.',
  showValue: true,
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Effect',
  id: 'Health',
  name: 'Здоровье',
  image: require('../../Images/UA/Effects/Health.svg'),
  title: 'Показатель состояния организма',
  description: 'Если значение стремится к нулю, значит, ты умираешь.',
  showValue: true,
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Effect',
  id: 'Humanity',
  name: 'Человечность',
  image: require('../../Images/UA/Effects/Humanity.svg'),
  title: 'Кто ты? Человек или Машина?',
  description: 'Осторожнее. Иногда быть Человеком больно. А оставаться Машиной слишком холодно и одиноко.',
  showValue: true,
  story: EStoriesEn.UA
})
