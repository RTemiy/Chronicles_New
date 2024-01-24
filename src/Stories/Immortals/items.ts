import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Homework',
  name: 'Тетрадки',
  image: require('../../Images/Immortals/Items/Notebook.png'),
  title: 'Домашнее задание',
  description: 'Мне чудом удалось вспомнить и взять работу для пары профессора Нэйтана.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Item',
  id: 'Money',
  name: 'Деньги',
  image: require('../../Images/Immortals/Items/Money.png'),
  title: 'Кошелек',
  description: 'Мои денежные сбережения, которые я могу потратить на себя или на близких.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Item',
  id: 'Key',
  name: 'Ключ',
  image: require('../../Images/Immortals/Items/Key.png'),
  title: 'Неизвестный ключ',
  description: 'Я нашла его на сиденье после переписки с Шерил, наверное кто-то забыл. Этот ключ переливается необычным синим оттенком. Интересно, что он открывает...',
  story: EStoriesEn.Immortals
})
