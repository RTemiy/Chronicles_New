import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'HintDavid',
  name: 'Клочок',
  image: require('../../Images/UL/Items/Hint.png'),
  title: 'Клочок бумаги с номером Дэвида.',
  description: 'Видимо, я забыла мобильник, поэтому Дэвид записал свой номер на листочке.',
  story: EStoriesEn.UL
})

statsManager.add({
  category: 'Item',
  id: 'HintDoctor',
  name: 'Клочок',
  image: require('../../Images/UL/Items/HintDoctor.png'),
  title: 'Клочок бумаги с номером Джозефа.',
  description: 'Видимо, я забыла мобильник, поэтому врач оставил мне свой номер на листочке.',
  story: EStoriesEn.UL
})

statsManager.add({
  category: 'Item',
  id: 'Bag',
  name: 'Рюкзак',
  image: require('../../Images/UL/Objects/Bag.png'),
  title: 'Рюкзак',
  description: 'Вещи, которые были при мне.',
  story: EStoriesEn.UL
})

statsManager.add({
  category: 'Item',
  id: 'Phone',
  name: 'Телефон',
  image: require('../../Images/UL/Items/Phone.png'),
  title: 'Мобильный телефон',
  description: 'Мой телефон, который стащила Валентина.',
  story: EStoriesEn.UL
})
