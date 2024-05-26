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

wardrobe.addPerson('Abigeil_Club', [
  {
    image: require('../../Images/FOF/Persons/Abigeil_Brilliance.png'),
    title: 'Яркость',
    description: 'Сочетание красного и золотого смотрится интересно.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Abigeil_Desire.png'),
    title: 'Страсть',
    description: 'Красное соблазнительное платье.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Abigeil_Delicacy.png'),
    title: 'Изысканность',
    description: 'Маленькое черное платье. Что может быть лучше? (длинная реклама)',
    cost: 'long',
    unlocked: () => { return true }
  }
])

wardrobe.addPerson('Chris_Club', [
  {
    image: require('../../Images/FOF/Persons/Christopher.png'),
    title: 'Футболка',
    description: 'Подчеркивает его рельеф. Ничего лишнего.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/FOF/Persons/Christopher_Leather.png'),
    title: 'Кожанка',
    description: 'Выглядит отлично.',
    cost: 'long',
    unlocked: () => { return true }
  }
])
