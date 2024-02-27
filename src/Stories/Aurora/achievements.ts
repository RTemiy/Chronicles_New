import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Images/Aurora/Objects/Book.png'),
  title: 'Дневник',
  text: 'Аврора начинает свой рассказ',
  story: EStoriesEn.Aurora
})

achievementsManager.add({
  name: 'ChooseArtist',
  image: require('../../Images/Aurora/Objects/Album.png'),
  title: 'Художник',
  text: 'Выберете в качестве основного хобби рисование',
  story: EStoriesEn.Aurora
})

achievementsManager.add({
  name: 'ChooseWriter',
  image: require('../../Images/Aurora/Objects/Book.png'),
  title: 'Писатель',
  text: 'Выберете в качестве основного хобби писательство',
  story: EStoriesEn.Aurora
})

achievementsManager.add({
  name: 'ChooseMusician',
  image: require('../../Images/Aurora/Objects/Walkman.png'),
  title: 'Музыкант',
  text: 'Выберете в качестве основного хобби музыку',
  story: EStoriesEn.Aurora
})

achievementsManager.add({
  name: 'Chapter01Part01Completed',
  image: require('../../Images/Aurora/Backgrounds/Lighthouse.jpg'),
  title: 'Новая жизнь',
  text: 'Отправьтесь с Авророй в неизвестное будущее',
  story: EStoriesEn.Aurora
})

achievementsManager.add({
  name: 'MusicLover',
  image: require('../../Images/Aurora/Backgrounds/Suburbs.jpg'),
  title: 'Меломан',
  text: 'Выберите музыку по вкусу',
  story: EStoriesEn.Aurora
})

achievementsManager.add({
  name: 'Chapter01Part02Completed',
  image: require('../../Images/Aurora/Backgrounds/University_Hall.jpg'),
  title: 'Студенческие будни',
  text: 'Завершите вторую часть интересной встречей',
  story: EStoriesEn.Aurora
})
