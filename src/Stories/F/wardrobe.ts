import { wardrobe } from '../../index'

wardrobe.addEntity('Konstantin_Part02', [
  {
    image: require('../../Media/Images/F/Persons/Konstantin_Minimalism_Loose.png'),
    title: 'Минимализм (распущенные)',
    description: 'Расслабленный и стильный образ для повседневной жизни.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Persons/Konstantin_Minimalism_Ponytail.png'),
    title: 'Минимализм (хвост)',
    description: 'Расслабленный и стильный образ для повседневной жизни.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Persons/Konstantin_Modern_Loose.png'),
    title: 'Современный шик (распущенные)',
    description: 'Идеальное сочетание элегантности и комфорта.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Persons/Konstantin_Modern_Ponytail.png'),
    title: 'Современный шик (хвост)',
    description: 'Идеальное сочетание элегантности и комфорта.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Persons/Konstantin_Retro_Loose.png'),
    title: 'Ретро-стиль (распущенные)',
    description: 'Харизматичность и утончённость с нотками винтажа…',
    cost: 'long',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Persons/Konstantin_Retro_Ponytail.png'),
    title: 'Ретро-стиль (хвост)',
    description: 'Харизматичность и утончённость с нотками винтажа…',
    cost: 'long',
    unlocked: () => { return true }
  }
])

wardrobe.addEntity('Market_Food', [
  {
    image: require('../../Media/Images/F/Objects/Pancakes.png'),
    title: 'Блины',
    description: 'Традиционная сладкая выпечка.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Objects/Pie.png'),
    title: 'Пирог',
    description: 'Сочное мясное лакомство.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Objects/Fish.png'),
    title: 'Рыба',
    description: 'Запечёная форель с картошкой.',
    cost: 'short',
    unlocked: () => { return true }
  }
])

wardrobe.addEntity('Tarot', [
  {
    image: require('../../Media/Images/F/Objects/Deck.png'),
    title: 'Карта 1',
    description: 'Узнай свою судьбу...',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Objects/Deck.png'),
    title: 'Карта 2',
    description: 'Узнай свою судьбу...',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/F/Objects/Deck.png'),
    title: 'Карта 3',
    description: 'Узнай свою судьбу...',
    cost: 'short',
    unlocked: () => { return true }
  }
])