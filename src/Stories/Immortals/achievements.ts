import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Images/Immortals/Backgrounds/Guides_World.jpg'),
  title: 'Начало начал',
  text: 'Пройти пролог',
  story: EStoriesEn.Immortals
})

achievementsManager.add({
  name: 'Sleeper',
  image: require('../../Images/Immortals/Backgrounds/Room.png'),
  title: 'Соня',
  text: 'Проспать занятия',
  story: EStoriesEn.Immortals,
  unlocked: true
})

achievementsManager.add({
  name: 'Comfort',
  image: require('../../Images/Immortals/Items/Money.png'),
  title: 'Я выбираю комфорт!',
  text: 'Потратить самое большое количество денег на транспорт',
  story: EStoriesEn.Immortals
})

achievementsManager.add({
  name: 'GoodGirl',
  image: require('../../Images/Immortals/Items/Study.png'),
  title: 'Правильная девочка',
  text: 'Не поддаваться искушению и не проспать пары',
  story: EStoriesEn.Immortals
})

achievementsManager.add({
  name: 'RightAnswers',
  image: require('../../Images/Immortals/Backgrounds/Lection.png'),
  title: 'Всезнайка',
  text: 'Ответить правильно на вопрос Нэйтана на паре',
  story: EStoriesEn.Immortals
})

achievementsManager.add({
  name: 'Part01Completed',
  image: require('../../Images/Immortals/Backgrounds/Uni.png'),
  title: 'Знакомство',
  text: 'Пройти первую часть',
  story: EStoriesEn.Immortals
})
