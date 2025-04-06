import checkPromoCode from '../Functions/checkPromoCode'

export const shopItems = [
  {
    id: 0,
    category: 'Гардероб',
    title: 'Костюм клоуна',
    description: 'Бессмертные: Последняя надежда. <p>Глава 1 Часть 1.</p><p>⠀</p><i>Иногда я провожу праздники с Шерил, это своеобразное хобби</i>',
    cost: '39',
    image: require('../Images/Immortals/Persons/Hero_Clown.png'),
    free: true,
    action: () => { checkPromoCode('ghbdtngegcbr') },
    available: true
  },
  {
    id: 2,
    category: 'Интерьер',
    title: 'Уединение',
    description: 'Бессмертные: Последняя надежда. <p>Глава 1 Часть 1.</p><p>⠀</p><i>Спальня-кабинет с изысканным изображением леса, создающим спокойствие.</i>',
    cost: '29',
    image: require('../Images/Immortals/Backgrounds/Hero_Room_Shop_1.jpg'),
    free: true,
    action: () => { checkPromoCode('vfufpbyid1') },
    available: true
  },
  {
    id: 3,
    category: 'Гардероб',
    title: 'Сексуальный',
    description: 'Осколки чужой судьбы <p>Глава 1 Часть 4.</p><p>⠀</p><i>Показывает его страсть и безразличие к правилам этого мира.</i>',
    cost: '39',
    image: require('../Images/FOF/Persons/Christopher_Sexy.png'),
    free: true,
    action: () => { checkPromoCode('sxychrstpr') },
    available: true
  },

  {
    id: 1,
    category: 'Гардероб',
    title: 'Цветочная',
    description: 'Аврора <p>Глава 1 Часть 1.</p><p>⠀</p><i>Предпочитаешь свежесть и легкость</i>',
    cost: '39',
    image: require('../Images/Aurora/Persons/Aurora_Green_Dress.png'),
    free: false,
    action: () => {},
    available: true
  }
]
