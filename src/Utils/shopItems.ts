import checkPromoCode from '../Functions/checkPromoCode'

export const shopItems = [
  {
    id: 1,
    category: 'Гардероб',
    title: 'Цветочная',
    description: 'Аврора <p>Глава 1 Часть 1.</p><p>⠀</p><i>Предпочитаешь свежесть и легкость</i>',
    cost: '39',
    image: require('../Images/Aurora/Persons/Aurora_Green_Dress.png'),
    free: true,
    action: () => { checkPromoCode('gjtlbntkmrjyrehcfhtgjcnjd') },
    available: true
  },
  {
    id: 4,
    category: 'Гардероб',
    title: 'Праздник',
    description: 'Amore e passione <p>Глава 1 Часть 1.</p><p>⠀</p><i>Я должна быть королевой, даже в повседневной жизни.</i>',
    cost: '39',
    image: require('../Images/AEP/Persons/Hero_Shop4.png'),
    free: true,
    action: () => { checkPromoCode('bvnghtdyt') },
    available: true
  },
  {
    id: 0,
    category: 'Гардероб',
    title: 'Костюм клоуна',
    description: 'Бессмертные: Последняя надежда. <p>Глава 1 Часть 1.</p><p>⠀</p><i>Иногда я провожу праздники с Шерил, это своеобразное хобби</i>',
    cost: '39',
    image: require('../Images/Immortals/Persons/Hero_Clown.png'),
    free: false,
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
    free: false,
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
    free: false,
    action: () => { checkPromoCode('sxychrstpr') },
    available: true
  },
  {
    id: 5,
    category: 'Гардероб',
    title: 'Нежная лилия',
    description: 'Осколки чужой судьбы <p>Глава 1 Часть 7.</p><p>⠀</p><i>Легкий макияж, женственный образ.</i>',
    cost: '39',
    image: require('../Images/FOF/Persons/Abigeil_SoftLily.png'),
    free: false,
    action: () => { checkPromoCode('adsdfhgbj') },
    available: true
  }
]
