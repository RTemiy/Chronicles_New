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


statsManager.add({
  category: 'Item',
  id: 'Ticket',
  story: EStoriesEn.ITLH,
  name: 'Билет',
  image: require('../../Media/Images/ITLH/Items/Ticket.png'),
  title: 'Билет в театр.',
  description: 'Название представления: «Хижина дяди Тома». Катарина любит посещать театры? Интересно, о чем эта постановка?',
  idDescription: ''
})

statsManager.add({
  category: 'Item',
  id: 'Poiton',
  story: EStoriesEn.ITLH,
  name: 'Лекарство',
  image: require('../../Media/Images/ITLH/Items/Poition.png'),
  title: 'Пузырек с неизвестными таблетками.',
  description: 'Хочется верить, что здоровью Катарины ничего не угрожает.',
  idDescription: ''
})

statsManager.add({
  category: 'Item',
  id: 'Cheryl_Key',
  story: EStoriesEn.ITLH,
  name: 'Ключ',
  image: require('../../Media/Images/ITLH/Items/Cheryl_Key.png'),
  title: 'Маленький интересный ключ.',
  description: 'Кажется, его обронила Шерил после нашей посиделки у меня дома. Что он может открывать?',
  idDescription: ''
})