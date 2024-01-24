import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Respect',
  name: 'Уважение',
  image: require('../../Images/FOF/Effects/Respect.svg'),
  title: 'Уважение',
  description: 'Стат уважение показывает отношение персонажей к героине',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Effect',
  id: 'Constancy',
  name: 'Постоянство',
  image: require('../../Images/FOF/Effects/Constancy.svg'),
  title: 'Постоянство',
  description: 'Стат постоянство делает героиню упрямой, прямолинейной. Она не хочет принимать новую жизнь и теряется в том, что для нее неизвестно.',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Effect',
  id: 'Shift',
  name: 'Перемены',
  image: require('../../Images/FOF/Effects/Shift.svg'),
  title: 'Перемены',
  description: 'Стат перемены делает героиню более гибкой, она легко справляется с поворотами судьбы.',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Choice',
  id: 'RightQuestion',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Choice',
  id: 'ThrowBook',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Choice',
  id: 'WhoAreYou',
  story: EStoriesEn.FOF
})
