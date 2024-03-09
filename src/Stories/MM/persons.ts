import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Dylan',
  name: 'Дилан Чейз',
  image: require('../../Images/MM/Persons/Dylan.png'),
  title: 'Смышленый детектив.',
  description: 'Совместная работа сделала нас неплохими напарниками, готовыми помочь друг другу в трудные минуты.',
  story: EStoriesEn.MM
})
