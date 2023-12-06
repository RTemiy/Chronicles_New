import { storiesManager } from '../../index'

storiesManager.add({
  name: 'AEP',
  image: require('../../Images/AEP/Covers/Story_Cover.png'),
  description:
    'Всего нужен миг, чтобы спокойная жизнь превратилась в хаос. Главная героиня попадает в водоворот интриг, страсти и криминала в самом сердце Италии. Опасность и предательства поджидают на каждом углу. Игра началась!',
  genre: 'Повседневность, Эротика',
  mature: true,
  status: 'В разработке',
  chapters: [
    {
      name: 'Глава 1',
      image: require('../../Images/AEP/Backgrounds/Col.png'),
      parts: [
        {
          name: 'Пролог',
          code: '0',
          image: require('../../Images/AEP/Backgrounds/Col.png'),
          loadingImage: require('../../Images/AEP/Covers/Prologue.png'),
          event: () => {}
        }
      ]
    }
  ]
})
