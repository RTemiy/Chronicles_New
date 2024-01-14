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
  image: require('../../Images/Immortals/Backgrounds/Hero_Room.jpg'),
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
  image: require('../../Images/Immortals/Backgrounds/Lection_Hall.jpg'),
  title: 'Всезнайка',
  text: 'Ответить правильно на вопрос Нэйтана на паре',
  story: EStoriesEn.Immortals
})

achievementsManager.add({
  name: 'Chapter01Part01Completed',
  image: require('../../Images/Immortals/Backgrounds/University.jpg'),
  title: 'Знакомство',
  text: 'Пройти первую часть',
  story: EStoriesEn.Immortals
})
