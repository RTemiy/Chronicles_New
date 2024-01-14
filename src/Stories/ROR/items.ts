import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Money',
  name: 'Монеты',
  image: require('../../Images/ROR/Items/Money.png'),
  title: 'Сбережения',
  description: '',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Bag',
  name: 'Рюкзак',
  image: require('../../Images/ROR/Items/Bag_With_Hole.png'),
  title: 'Дырявый рюкзак',
  description: '',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Knife',
  name: 'Нож',
  image: require('../../Images/ROR/Items/Knife.png'),
  title: 'Нож',
  description: '',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Sugar',
  name: 'Сахар',
  image: require('../../Images/ROR/Items/Sugar.png'),
  title: 'Кубики сахара',
  description: '',
  story: EStoriesEn.ROR
})
