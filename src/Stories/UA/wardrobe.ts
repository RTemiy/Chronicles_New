import { wardrobe } from '../../index'

wardrobe.addEntity('UA_Eve', [{
  image: require('../../Media/Images/UA/Persons/Eve_Poor_skin.png'),
  title: 'Относительно чистое',
  description: 'Выглядит практичным. И пятен крови за волосами совсем не видно.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/UA/Persons/Eve_Medium_skin.png'),
  title: 'Байкерский прикид',
  description: 'Железо, молнии, кожа — так в Нове ходят все.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/UA/Persons/Eve_Rich_skin.png'),
  title: 'Кожаный экстаз',
  description: 'Больше поводов заглянуть в декольте — больше денег с самоуверенных идиотов.',
  cost: 'long',
  unlocked: () => { return true }
}
])

wardrobe.addEntity('UA_Eve_Part_2', [{
  image: require('../../Media/Images/UA/Persons/Eve_FirstThing_Skin.png'),
  title: 'Первое попавшееся',
  description: 'Мало футболок не бывает. Особенно, когда эта — третья по счету.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/UA/Persons/Eve_IsItTrendy_Skin.png'),
  title: 'А так точно сейчас модно?',
  description: 'Бабушка Юко слишком одобрительно смотрит. Надо брать.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/UA/Persons/Eve_Photo_Skin.png'),
  title: 'Образ с фотографии',
  description: 'Эта джинсовая куртка выглядит слишком знакомой…',
  cost: 'long',
  unlocked: () => { return true }
}
])

wardrobe.addEntity('UA_Eve_Part_2_Food', [{
  image: require('../../Media/Images/UA/Objects/Stew.png'),
  title: 'Рагу',
  description: 'Слишком вкусно, чтобы не взять еще.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/UA/Objects/Apple_Pie.png'),
  title: 'Пирог',
  description: 'Невозможно отказаться от десерта.',
  cost: 'short',
  unlocked: () => { return true }
}
])
