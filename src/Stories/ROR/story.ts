import { storiesManager } from '../../index'

storiesManager.add({
  name: 'ROR',
  image: require('../../Images/ROR/Covers/Story_Cover.png'),
  description: 'Страну Крейс поразила страшная болезнь - чума. В условиях эпидемии Генрих работает контрабандистом, переправляя нуждающихся за границу. Однажды к нему обратилась группа беженцев. Начавшееся приключение перевернет не только судьбы героев, но и всей страны.',
  genre: 'Фэнтези, Приключение',
  mature: true,
  status: 'Новая часть',
  chapters: [{
    name: 'Глава 1',
    image: require('../../Images/ROR/Backgrounds/City_Street.png'),
    parts: [{
      name: 'Пролог',
      code: '0',
      image: require('../../Images/ROR/Persons/Mortimer.png'),
      loadingImage: require('../../Images/ROR/Covers/Prologue.png'),
      event: () => {}
    }, {
      name: 'Часть 1',
      code: '0',
      image: require('../../Images/ROR/Backgrounds/City_Gates.png'),
      loadingImage: require('../../Images/ROR/Covers/Part01.png'),
      event: () => {}
    }]
  }]
})
