import { wardrobe } from '../../index'

wardrobe.addPerson('UA_Eve', [{
  image: require('../../Images/UA/Persons/Eve_Poor_skin.png'),
  title: 'Относительно чистое',
  description: 'Выглядит практичным. И пятен крови за волосами совсем не видно.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/UA/Persons/Eve_Medium_skin.png'),
  title: 'Байкерский прикид',
  description: 'Железо, молнии, кожа — так в Нове ходят все.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/UA/Persons/Eve_Rich_skin.png'),
  title: 'Кожаный экстаз',
  description: 'Больше поводов заглянуть в декольте — больше денег с самоуверенных идиотов.',
  cost: 'long',
  unlocked: () => { return true }
}
])
