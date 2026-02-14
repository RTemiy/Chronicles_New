import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Phone',
  name: 'Телефон',
  image: require('../../Media/Images/ITLH/Items/Phone.png'),
  title: 'Верный спутник на все случаи жизни.',
  description: 'Родители подарили его на прошлый день рождения. Компактный, удобный, производительный.',
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Item',
  id: 'Money',
  name: 'Деньги',
  image: require('../../Media/Images/ITLH/Items/Money.png'),
  title: 'Заработанные сбережения.',
  description: 'Редко на что-то трачу, но все же стоит поднапрячься, чтобы иметь больше возможностей себя баловать.',
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Item',
  id: 'Essay',
  name: 'Эссе',
  image: require('../../Media/Images/ITLH/Items/Essay.png'),
  title: 'Домашнее задание к паре профессора Нэйтана.',
  description: 'Написала работу про жизнь и характер Николы Теслы. Надеюсь, преподаватель оценит по достоинству.',
  story: EStoriesEn.ITLH
})
