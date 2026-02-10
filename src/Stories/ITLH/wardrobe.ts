import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager'

wardrobe.addPerson('Hero_Room', [{
  image: require('../../Images/ITLH/Backgrounds/Hero_Room_Poor.png'),
  title: 'Путешественник',
  description: 'Интерьер, вдохновленный картой мира, создает атмосферу приключений и уюта.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Backgrounds/Hero_Room_Medium.png'),
  title: 'Морской бриз',
  description: 'Комната с картиной маяка, заставляющая мечтать о далеком.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Backgrounds/Hero_Room_Rich.png'),
  title: 'Вдохновение',
  description: 'Стены, увешанные различными материалами, дают свободу творческой мысли.',
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

wardrobe.addPerson('Hero_Chapter01_Part01', [{
  image: require('../../Images/ITLH/Persons/Hero_Comfort_Loose.png'),
  title: 'Удобство (распущенные)',
  description: 'Комфорт и стиль в одном образе — сочетание мягкого свитера и любимых кроссовок.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Persons/Hero_Comfort_Ponytail.png'),
  title: 'Удобство (коса)',
  description: 'Комфорт и стиль в одном образе — сочетание мягкого свитера и любимых кроссовок.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Persons/Hero_Classic_Loose.png'),
  title: 'Классика (распущенные)',
  description: 'Элегантность в простоте. Светлая рубашка и темные брюки создают образ, который всегда в моде.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Persons/Hero_Classic_Wavy.png'),
  title: 'Классика (волнистые)',
  description: 'Элегантность в простоте. Светлая рубашка и темные брюки создают образ, который всегда в моде.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Persons/Hero_Tender_Loose.png'),
  title: 'Нежность (распущенные)',
  description: 'Мягкий розовый свитер и строгая черная юбка создают гармоничный контраст, подчеркивая женственность.',
  cost: 'long',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Persons/Hero_Tender_Ponytail.png'),
  title: 'Нежность (хвост)',
  description: 'Мягкий розовый свитер и строгая черная юбка создают гармоничный контраст, подчеркивая женственность.',
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

wardrobe.addVariation('Hero_Chapter01_Part01', [
  {
    image: require('../../Images/ITLH/Persons/Hero_Comfort_Loose_Thinking.png'),
    variation: 'Thinking',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Images/ITLH/Persons/Hero_Comfort_Ponytail_Thinking.png'),
    variation: 'Thinking',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Images/ITLH/Persons/Hero_Classic_Loose_Thinking.png'),
    variation: 'Thinking',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Images/ITLH/Persons/Hero_Classic_Wavy_Thinking.png'),
    variation: 'Thinking',
    originalId: 4,
    unlocked: () => { return false }
  },
  {
    image: require('../../Images/ITLH/Persons/Hero_Tender_Loose_Thinking.png'),
    variation: 'Thinking',
    originalId: 5,
    unlocked: () => { return false }
  },
  {
    image: require('../../Images/ITLH/Persons/Hero_Tender_Ponytail_Thinking.png'),
    variation: 'Thinking',
    originalId: 6,
    unlocked: () => { return false }
  }
])

wardrobe.addPerson('Breakfast_Chapter01_Part01', [{
  image: require('../../Images/ITLH/Objects/Pancakes.png'),
  title: 'Блины',
  description: 'Сочная выпечка.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Objects/Sandwitch.png'),
  title: 'Бутерброды',
  description: 'Сытная закуска.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ITLH/Objects/Salad.png'),
  title: 'Фруктовый салат',
  description: 'Бодрящая свежесть.',
  cost: 'short',
  unlocked: () => { return true }
}
])
