import { wardrobe } from '../../index'

wardrobe.addPerson('Nina', [{
  image: require('../../Images/ISML/Persons/Nina_Sweatshort.png'),
  title: 'Яркая личность',
  description: 'Свитшот с аниме, который я купила на игромире',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ISML/Persons/Nina_Leather.png'),
  title: 'Косуха',
  description: 'Мой протест против однообразной одежды',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/ISML/Persons/Nina_Dress.png'),
  title: 'Сама элегантность',
  description: 'Теплое и очень красивое осеннее платье',
  cost: 'long',
  unlocked: () => { return true }
},
])
