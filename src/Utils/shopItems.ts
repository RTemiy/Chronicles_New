import checkPromoCode from '../Functions/checkPromoCode'

export const shopItems = [
  {
    id: 0,
    category: 'Гардероб',
    title: 'Клоун',
    description: 'Бессмертные: Последняя надежда. <p>Глава 1 Часть 1.</p><p>⠀</p><i>Образ для сценки, которую мы сочинили вместе с Шерил. Надеюсь, детям она придется по душе.</i>',
    cost: '39',
    image: require('../Media/Images/ITLH/Persons/Hero_Clown_Avatar.png'),
    free: true,
    action: () => { checkPromoCode('ghbdtngegcbr') },
    available: true
  },
  {
    id: 2,
    category: 'Интерьер',
    title: 'Уединение',
    description: 'Бессмертные: Последняя надежда. <p>Глава 1 Часть 1.</p><p>⠀</p><i>Комфортная спальня, наполненная мягкими оттенками спокойствия и окруженная книжным раем.</i>',
    cost: '29',
    image: require('../Media/Images/ITLH/Backgrounds/Hero_Room_Shop_1.jpg'),
    free: true,
    action: () => { checkPromoCode('vfufpbyid1') },
    available: true
  },
  {
    id: 1,
    category: 'Гардероб',
    title: 'Цветочная',
    description: 'Аврора <p>Глава 1 Часть 1.</p><p>⠀</p><i>Предпочитаешь свежесть и легкость</i>',
    cost: '39',
    image: require('../Media/Images/Aurora/Persons/Aurora_Green_Dress.png'),
    free: true,
    action: () => { checkPromoCode('gjtlbntkmrjyrehcfhtgjcnjd') },
    available: false
  },
  {
    id: 3,
    category: 'Гардероб',
    title: 'Сексуальный',
    description: 'Осколки чужой судьбы <p>Глава 1 Часть 4.</p><p>⠀</p><i>Показывает его страсть и безразличие к правилам этого мира.</i>',
    cost: '39',
    image: require('../Media/Images/FOF/Persons/Christopher_Sexy.png'),
    free: false,
    action: () => { checkPromoCode('sxychrstpr') },
    available: false
  },
  {
    id: 4,
    category: 'Гардероб',
    title: 'Праздник',
    description: 'Amore e passione <p>Глава 1 Часть 1.</p><p>⠀</p><i>Я должна быть королевой, даже в повседневной жизни.</i>',
    cost: '39',
    image: require('../Media/Images/AEP/Persons/Hero_Shop4.png'),
    free: false,
    action: () => { checkPromoCode('bvnghtdyt') },
    available: false
  },
  {
    id: 5,
    category: 'Гардероб',
    title: 'Нежная лилия',
    description: 'Осколки чужой судьбы <p>Глава 1 Часть 7.</p><p>⠀</p><i>Легкий макияж, женственный образ.</i>',
    cost: '39',
    image: require('../Media/Images/FOF/Persons/Abigeil_SoftLily.png'),
    free: false,
    action: () => { checkPromoCode('adsdfhgbj') },
    available: false
  },
  {
    id: 6,
    category: 'Интерьер',
    title: 'Королевская',
    description: 'Memento Mori. <p>Глава 1 Часть 2.</p><p>⠀</p><i>Покои для избранных. Подобному дизайну предпочтение отдала бы сама королева.</i>',
    cost: '39',
    image: require('../Media/Images/MM/Backgrounds/Margo_Room_King.jpg'),
    free: true,
    action: () => { checkPromoCode('jflrinfdkl') },
    available: false
  },
  {
    id: 7,
    category: 'Гардероб',
    title: 'Закрытый',
    description: 'Memento Mori. <p>Глава 1 Часть 2.</p><p>⠀</p><i>Спортивный костюм из премиального бутика стоимостью в ползарплаты.</i>',
    cost: '39',
    image: require('../Media/Images/MM/Persons/Margo_Sport_Tracksuit.png'),
    free: true,
    action: () => { checkPromoCode('vcbdfrtyhjk') },
    available: false
  },
]
