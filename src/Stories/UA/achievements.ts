import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Images/UA/Backgrounds/Nova_Beginning.jpg'),
  title: 'Просыпайся, Солдат',
  text: 'Добро пожаловать в Нову',
  story: EStoriesEn.UA
})

achievementsManager.add({
  name: 'Brave',
  image: require('../../Images/UA/Objects/Fist.png'),
  title: 'Храбрец',
  text: 'Выбрать сильного соперника достойно звания Солдата',
  story: EStoriesEn.UA
})

achievementsManager.add({
  name: 'Japanese',
  image: require('../../Images/UA/Objects/Sticks.png'),
  title: 'Коренная японка',
  text: 'Не умеешь есть палочками — возьми вилку',
  story: EStoriesEn.UA
})

achievementsManager.add({
  name: 'Chapter01Part01Completed',
  image: require('../../Images/UA/Objects/Art.png'),
  title: 'Дом?',
  text: 'Одиночка-Солдат узнала, что такое семья',
  story: EStoriesEn.UA
})
