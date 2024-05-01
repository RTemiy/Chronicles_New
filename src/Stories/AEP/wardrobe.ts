import { wardrobe } from '../../index'

wardrobe.addPerson('AEP_Hero', [
  {
    image: require('../../Images/AEP/Persons/Hero_Stripes_Sweater.png'),
    title: 'Зебра',
    description: 'Сегодня нет настроения думать над образом',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/AEP/Persons/Hero_Jeans_Shirt.png'),
    title: 'Классика',
    description: 'Зачем заморачиваться? Надену черное',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/AEP/Persons/Hero_Wealthy.png'),
    title: 'Подарок',
    description: 'Нужно выглядеть как полагается и вручить этому миру красоту',
    cost: 'long',
    unlocked: () => { return true }
  }
])
