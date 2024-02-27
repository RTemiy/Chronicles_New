import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'Part01Completed',
  image: require('../../Images/UL/Backgrounds/Hospital_Room.jpg'),
  title: 'Несломленная',
  text: 'Начало лечения',
  story: EStoriesEn.UL
})

achievementsManager.add({
  name: 'Part02Completed',
  image: require('../../Images/UL/Backgrounds/Street_Night.jpg'),
  title: 'Откровение',
  text: 'Выясните, кто виновник',
  story: EStoriesEn.UL
})

achievementsManager.add({
  name: 'DavidEnding',
  image: require('../../Images/UL/Backgrounds/David_Home.jpg'),
  title: 'В добрый путь',
  text: 'Откройте концовку с Дэвидом',
  story: EStoriesEn.UL
})

achievementsManager.add({
  name: 'PaulEnding',
  image: require('../../Images/UL/Backgrounds/Paul_Home.jpg'),
  title: 'Дом, милый дом',
  text: 'Откройте концовку с Полом',
  story: EStoriesEn.UL
})

achievementsManager.add({
  name: 'DoctorEnding',
  image: require('../../Images/UL/Backgrounds/Doctor_Home.jpg'),
  title: 'Прекрасный сад',
  text: 'Откройте концовку с Джозефом',
  story: EStoriesEn.UL
})

achievementsManager.add({
  name: 'Part03Completed',
  image: require('../../Images/UL/Backgrounds/Cinema.jpg'),
  title: 'Автор бестселлера',
  text: 'Завершите историю одиночкой. Или нет?',
  story: EStoriesEn.UL
})
