import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Flyer',
  name: 'Листовка',
  image: require('../../Images/F/Items/Flyer.png'),
  title: 'Реклама, рассказывающая о возможности купить музыкальную шкатулку.',
  description: 'Необходимо прийти на новогоднюю ярмарку, чтобы найти настоящее счастье. Звучит неправдоподобно, но возможно, именно такая необычная вещь станет прекрасным подарком моему сыну.',
  story: EStoriesEn.F
})

statsManager.add({
  category: 'Item',
  id: 'Box',
  name: 'Шкатулка',
  image: require('../../Images/F/Items/Closed_Box.png'),
  title: 'Старинная резная музыкальная шкатулка ручной работы, таящая тайну внутри.',
  description: 'Внешне — безобидная антикварная штучка, на деле — коварный предмет, заставляющий задуматься о природе настоящего счастья и опасностях иллюзорных мечтаний.',
  story: EStoriesEn.F
})
