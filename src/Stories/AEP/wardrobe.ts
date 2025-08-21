import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager';

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
  },
  {
    image: require('../../Images/AEP/Persons/Hero_Shop4.png'),
    title: 'Клейм',
    description: 'Описание',
    cost: 'long',
    unlocked: () => { return loadData(['Shop', 'ShopId4']) === '1' }
  }
])

wardrobe.addPerson('AEP_Hero_Part_2', [
  {
    image: require('../../Images/AEP/Persons/Hero_Low_P2.png'),
    title: 'Бабушкин кошмар',
    description: 'Серость и обыкновенность. Она это ненавидит.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/AEP/Persons/Hero_Medium_P2.png'),
    title: 'Бабушкино равнодушие',
    description: 'Джинса ей не нравится. Но она признает, что мне идет.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Images/AEP/Persons/Hero_High_P2.png'),
    title: 'Бабушкина гордость',
    description: 'Она подарила мне на день рождения. Выглядит очень даже.',
    cost: 'long',
    unlocked: () => { return true }
  }
])
