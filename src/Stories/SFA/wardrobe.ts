import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager'

wardrobe.addEntity('SFA_Aristocrat_Breakfast', [{
  image: require('../../Media/Images/SFA/Objects/Light_Of_Dawn.png'),
  title: '«Свет Зари»',
  description: 'Легкое, как облако, кондитерское изделие на тончайшей ажурной вафле.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/SFA/Objects/Ether_Sunrise.png'),
  title: '«Эфирный Рассвет»',
  description: 'Яйцо пашот, поданное в изящной серебряной посуде.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/SFA/Objects/Sky_Rose.png'),
  title: '«Небесная Роза»',
  description: 'Многослойный десерт из тончайших, почти прозрачных блинчиков.',
  cost: 'short',
  unlocked: () => { return true }
}
])

/* wardrobe.addEntity('Hero_Room', [{
  image: require('../../Media/Images/ITLH/Backgrounds/Hero_Room_Poor.jpg'),
  title: 'Путешественник',
  description: 'Интерьер, вдохновленный картой мира, создает атмосферу приключений и уюта.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Backgrounds/Hero_Room_Medium.jpg'),
  title: 'Морской бриз',
  description: 'Комната с картиной маяка, заставляющая мечтать о далеком.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Backgrounds/Hero_Room_Rich.jpg'),
  title: 'Вдохновение',
  description: 'Стены, увешанные различными материалами, дают свободу творческой мысли.',
  cost: 'long',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Backgrounds/Hero_Room_Shop_1.jpg'),
  title: 'Уединение',
  description: 'Комфортная спальня, наполненная мягкими оттенками спокойствия и окруженная книжным раем.',
  cost: 'short',
  unlocked: () => { return loadData(['Shop', 'ShopId1']) === '1' }
}
])

wardrobe.addVariation('Hero_Room', [
  {
    image: require('../../Media/Images/ITLH/Backgrounds/Hero_Room_Poor_Night.jpg'),
    variation: 'Night',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Backgrounds/Hero_Room_Medium_Night.jpg'),
    variation: 'Night',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Backgrounds/Hero_Room_Rich_Night.jpg'),
    variation: 'Night',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Backgrounds/Hero_Room_Shop_1_Night.jpg'),
    variation: 'Night',
    originalId: 4,
    unlocked: () => { return false }
  }
])

wardrobe.addEntity('Hero_Chapter01_Part01', [{
  image: require('../../Media/Images/ITLH/Persons/Hero_Comfort_Loose.png'),
  title: 'Удобство (распущенные)',
  description: 'Комфорт и стиль в одном образе — сочетание мягкого свитера и любимых кроссовок.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Persons/Hero_Comfort_Ponytail.png'),
  title: 'Удобство (коса)',
  description: 'Комфорт и стиль в одном образе — сочетание мягкого свитера и любимых кроссовок.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Persons/Hero_Classic_Loose.png'),
  title: 'Классика (распущенные)',
  description: 'Элегантность в простоте. Светлая рубашка и темные брюки создают образ, который всегда в моде.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Persons/Hero_Classic_Wavy.png'),
  title: 'Классика (волнистые)',
  description: 'Элегантность в простоте. Светлая рубашка и темные брюки создают образ, который всегда в моде.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Persons/Hero_Tender_Loose.png'),
  title: 'Нежность (распущенные)',
  description: 'Мягкий розовый свитер и строгая черная юбка создают гармоничный контраст, подчеркивая женственность.',
  cost: 'long',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Persons/Hero_Tender_Ponytail.png'),
  title: 'Нежность (хвост)',
  description: 'Мягкий розовый свитер и строгая черная юбка создают гармоничный контраст, подчеркивая женственность.',
  cost: 'long',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Persons/Hero_Clown.png'),
  title: '<p style="color: fuchsia">Клоун',
  description: 'Образ для сценки, которую мы сочинили вместе с Шерил. Надеюсь, детям она придется по душе.',
  cost: 'short',
  unlocked: () => { return loadData(['Promo', 'ClownAvatar']) === '1' }
}
])

wardrobe.addVariation('Hero_Chapter01_Part01', [
  {
    image: require('../../Media/Images/ITLH/Persons/Hero_Comfort_Loose_Thinking.png'),
    variation: 'Thinking',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Persons/Hero_Comfort_Ponytail_Thinking.png'),
    variation: 'Thinking',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Persons/Hero_Classic_Loose_Thinking.png'),
    variation: 'Thinking',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Persons/Hero_Classic_Wavy_Thinking.png'),
    variation: 'Thinking',
    originalId: 4,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Persons/Hero_Tender_Loose_Thinking.png'),
    variation: 'Thinking',
    originalId: 5,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Persons/Hero_Tender_Ponytail_Thinking.png'),
    variation: 'Thinking',
    originalId: 6,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/ITLH/Persons/Hero_Clown_Thinking.png'),
    variation: 'Thinking',
    originalId: 7,
    unlocked: () => { return false }
  }
])

wardrobe.addEntity('Hero_Chapter01_Part02', [{
  image: require('../../Media/Images/ITLH/Persons/Hero_Home_Cozy.png'),
  title: 'Домашний шик',
  description: 'Легкость и непринужденность: вязаный свитер кремового оттенка и свободные брюки с забавным рисунком.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Persons/Hero_Home_Lilac.png'),
  title: 'Сиреневая безмятежность',
  description: 'Свободный топ и шорты с изящной отделкой создают уютный, но стильный образ.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Persons/Hero_Home_Bordo.png'),
  title: 'Бордовая гармония',
  description: 'Укороченный топ и широкие брюки в едином оттенке создают цельный и комфортный лук.',
  cost: 'long',
  unlocked: () => { return true }
}
])

wardrobe.addEntity('CafeNy_Chapter01_Part02', [{
  image: require('../../Media/Images/ITLH/Objects/Brownie.png'),
  title: 'Брауни',
  description: 'Плотный шоколадный кекс, нарезанный на квадратные куски.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Objects/Parfe.png'),
  title: 'Парфе',
  description: 'Нежное фруктовое мороженое, чередующееся с воздушными слоями взбитых сливок.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/ITLH/Objects/Rainbow_Cookies.png'),
  title: 'Радужное печенье',
  description: 'Трехслойное кондитерское изделие со вкусом малинового джема и шоколадной глазури.',
  cost: 'short',
  unlocked: () => { return true }
}
]) */
