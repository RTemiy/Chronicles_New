import { wardrobe } from '../../index'

wardrobe.addPerson('Abigeil', [{
  image: require('../../Images/FOF/Persons/Abigeil_SimpleGirl.png'),
  title: 'Простушка',
  description: 'Выгляжу, будто из секонд-хенда, но выбирать не приходится.',
  cost: 'short',
  unlocked: () => { return true }
},
{
  image: require('../../Images/FOF/Persons/Abigeil_AsAll.png'),
  title: 'Как все',
  description: 'Ничего необычного, классический наряд серой массы.',
  cost: 'medium',
  unlocked: () => { return true }
},
{
  image: require('../../Images/FOF/Persons/Abigeil_Attractive.png'),
  title: 'Привлекательная',
  description: 'Даже на мой взгляд, это не самый плохой образ, а я привередливая.',
  cost: 'long',
  unlocked: () => { return true }
}
])
