import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager'

wardrobe.addEntity('Margo_Sport', [
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_White.png'),
    title: 'Белый комплект',
    description: 'Главное преимущество этого сета — удобство.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_Color.png'),
    title: 'Цветной комплект',
    description: 'Любимая комбинация и свобода движений.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_Tracksuit.png'),
    title: 'Закрытый комплект',
    description: 'Спортивный костюм из премиального бутика стоимостью в ползарплаты.',
    cost: 'long',
    unlocked: () => { return loadData(['Shop', 'ShopId7']) === '1' }
  }
])

wardrobe.addVariation('Margo_Sport', [
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_White_Cringe.png'),
    variation: 'Cringe',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_White_Smile.png'),
    variation: 'Smile',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_White_Horny.png'),
    variation: 'Horny',
    originalId: 1,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_Color_Cringe.png'),
    variation: 'Cringe',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_Color_Smile.png'),
    variation: 'Smile',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_Color_Horny.png'),
    variation: 'Horny',
    originalId: 2,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_Tracksuit_Cringe.png'),
    variation: 'Cringe',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_Tracksuit_Smile.png'),
    variation: 'Smile',
    originalId: 3,
    unlocked: () => { return false }
  },
  {
    image: require('../../Media/Images/MM/Persons/Margo_Sport_Tracksuit_Horny.png'),
    variation: 'Horny',
    originalId: 3,
    unlocked: () => { return false }
  }
])

wardrobe.addEntity('Margo_Room', [
  {
    image: require('../../Media/Images/MM/Backgrounds/Margo_Room_Cofee.jpg'),
    title: 'Комфортный минимализм',
    description: 'Подойдёт ценителям пространства и чётких пропорций в дизайне.',
    cost: 'short',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/MM/Backgrounds/Margo_Room_Cream.jpg'),
    title: 'Уютное крем-брюле',
    description: 'Для любителей света и мягкой детализации интерьера.',
    cost: 'medium',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/MM/Backgrounds/Margo_Room_Chocolate.jpg'),
    title: 'Шоколадный шик',
    description: 'Гурманам, отдающим предпочтение комбинации из роскоши и комфорта.',
    cost: 'long',
    unlocked: () => { return true }
  },
  {
    image: require('../../Media/Images/MM/Backgrounds/Margo_Room_King.jpg'),
    title: 'Королевская',
    description: 'Гурманам, отдающим предпочтение комбинации из роскоши и комфорта.',
    cost: 'long',
    unlocked: () => { return loadData(['Shop', 'ShopId6']) === '1' }
  }
])
