import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Headphones',
  name: 'Наушники',
  image: require('../../Images/ISML/Items/Headphones.png'),
  title: 'Без них никуда не выхожу.',
  description: 'Только благодаря музыке можно найти успокоение и погрузиться в мир размышлений.',
  story: EStoriesEn.ISML
})

statsManager.add({
  category: 'Item',
  id: 'Cigarettes',
  name: 'Сигареты',
  image: require('../../Images/ISML/Items/Cigarettes.png'),
  title: 'Пачка сигарет.',
  description: 'Эта отрава помогает временно снять стресс.',
  story: EStoriesEn.ISML
})

statsManager.add({
  category: 'Item',
  id: 'Phone',
  name: 'Телефон',
  image: require('../../Images/ISML/Items/Cigarettes.png'),
  title: 'Для связи с друзьями и родственниками.',
  description: 'Полезная вещь, чтобы скоротать время.',
  story: EStoriesEn.ISML
})
