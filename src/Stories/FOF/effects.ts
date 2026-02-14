import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Respect',
  name: 'Уважение',
  image: require('../../Media/Images/FOF/Effects/Respect.svg'),
  title: 'Уважение',
  description: 'Стат уважение показывает отношение персонажей к героине',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Effect',
  id: 'Constancy',
  name: 'Постоянство',
  image: require('../../Media/Images/FOF/Effects/Constancy.svg'),
  title: 'Постоянство',
  description: 'Стат постоянство делает героиню упрямой, прямолинейной. Она не хочет принимать новую жизнь и теряется в том, что для нее неизвестно.',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Effect',
  id: 'Shift',
  name: 'Перемены',
  image: require('../../Media/Images/FOF/Effects/Shift.svg'),
  title: 'Перемены',
  description: 'Стат перемены делает героиню более гибкой, она легко справляется с поворотами судьбы.',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Effect',
  id: 'Power',
  name: 'Сила',
  image: require('../../Media/Images/FOF/Effects/Power.svg'),
  title: 'Сила',
  description: 'Стат сила определяет, готова ли героиня исполнить свою часть сделки и использовать магию.',
  story: EStoriesEn.FOF
})
