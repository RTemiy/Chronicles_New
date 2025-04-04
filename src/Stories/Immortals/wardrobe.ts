import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager'

wardrobe.addPerson('Hero_Room', [{
  image: require('../../Images/Immortals/Backgrounds/Hero_Room.jpg'),
  title: 'Путешественник',
  description: 'Светлое и просторное помещение с минималистичным дизайном.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Backgrounds/Hero_Room_Medium.jpg'),
  title: 'Невинность',
  description: 'Чистая и ухоженная комната с милой атмосферой для отдыха и учебы.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Backgrounds/Hero_Room_Wealthy.jpg'),
  title: 'Лофт',
  description: 'Гармоничное сочетание домашнего тепла и современного комфорта.',
  cost: 'long',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Backgrounds/Hero_Room_Shop_1.jpg'),
  title: 'Уединение',
  description: 'Спальня-кабинет с изысканным изображением леса, создающим спокойствие.',
  cost: 'short',
  unlocked: () => { return loadData(['Shop', 'ShopId1']) === '1' }
}
])

wardrobe.addPerson('Hero', [{
  image: require('../../Images/Immortals/Persons/Hero.png'),
  title: 'Удобная кофта',
  description: 'Просто и со вкусом. В черном всегда чувствуешь себя увереннее',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Persons/Hero_Shirt.png'),
  title: 'Вечная классика',
  description: 'Любимая рубашка, которая прошла со мной через огонь и воду',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Persons/Hero_Purple.png'),
  title: 'Милый свитер',
  description: 'Нет ничего лучше и красивее вещи твоего любимого цвета',
  cost: 'long',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Persons/Hero_Clown.png'),
  title: '<p style="color: fuchsia">Клоун',
  description: 'Иногда я провожу праздники с Шерил, это своеобразное хобби',
  cost: 'short',
  unlocked: () => { return loadData(['Promo', 'ClownAvatar']) === '1' }
}
])

wardrobe.addPerson('Katarina_Ball', [{
  image: require('../../Images/Immortals/Persons/Katarina_LowCost.png'),
  title: 'Неопытная леди',
  description: 'Нет смысла прихорашиваться ради дурацкого приема',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Persons/Katarina_MediumCost.png'),
  title: 'Уважаемая дама',
  description: 'Милое платье, вписывающееся в атмосферу вечера',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Persons/Katarina_HighCost.png'),
  title: 'Аристократка',
  description: 'Роскошный наряд достойный «жены» Роберта',
  cost: 'long',
  unlocked: () => { return true }
}
])
