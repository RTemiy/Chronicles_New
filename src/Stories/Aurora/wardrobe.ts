import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager'

wardrobe.addPerson('Aurora_City', [{
  image: require('../../Images/Aurora/Persons/Aurora_Dog.png'),
  title: 'Ребенок',
  description: 'Ты не любишь выделяться',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Aurora/Persons/Aurora_Coat_Blue.png'),
  title: 'Деловая',
  description: 'Ты серьезно подходишь к делу',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Aurora/Persons/Aurora_Dress.png'),
  title: 'Леди',
  description: 'Тобой правит элегантность',
  cost: 'long',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Aurora/Persons/Aurora_Dress.png'),
  title: '<p style="color: lawngreen">Цветочная',
  description: 'Предпочитаешь свежесть и легкость',
  cost: 'short',
  unlocked: () => { return loadData(['Promo', 'RepostVKCompetition']) === '1' }
}
])
