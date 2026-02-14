import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager'

wardrobe.addEntity('Aurora_City', [{
  image: require('../../Media/Images/Aurora/Persons/Aurora_Dog.png'),
  title: 'Ребенок',
  description: 'Ты не любишь выделяться',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/Aurora/Persons/Aurora_Coat_Blue.png'),
  title: 'Деловая',
  description: 'Ты серьезно подходишь к делу',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/Aurora/Persons/Aurora_Dress.png'),
  title: 'Леди',
  description: 'Тобой правит элегантность',
  cost: 'long',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/Aurora/Persons/Aurora_Green_Dress.png'),
  title: '<p style="color: lawngreen">Цветочная',
  description: 'Предпочитаешь свежесть и легкость',
  cost: 'short',
  unlocked: () => { return loadData(['Promo', 'RepostVKCompetition']) === '1' }
}
])

wardrobe.addEntity('Aurora_Part04', [{
  image: require('../../Media/Images/Aurora/Persons/Aurora_Purple_Sweater.png'),
  title: 'Простота',
  description: 'Ты не хочешь думать над образом',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/Aurora/Persons/Aurora_Suit.png'),
  title: 'Строгость',
  description: 'Тебе нравится легкость',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Media/Images/Aurora/Persons/Aurora_Checkered.png'),
  title: 'Милота',
  description: 'Ты даришь этому миру яркость',
  cost: 'long',
  unlocked: () => { return true }
}
])
