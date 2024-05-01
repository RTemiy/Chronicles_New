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

statsManager.add({
  category: 'Person',
  id: 'Arthur',
  name: 'Артур Нильсен',
  image: require('../../Images/MM/Persons/Arthur.png'),
  title: 'Начальник детективного отдела Илинга.',
  description: 'Пример моего подражания. Прекрасный учитель и наставник. Получить от него похвалу то еще достижение.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Person',
  id: 'Mike',
  name: 'Майк',
  image: require('../../Images/MM/Persons/Mike.png'),
  title: 'Полицейский, коллега.',
  description: 'Не могу сказать про него ничего особенного: часто видимся по работе, неплохой коп, знает свое дело.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Person',
  id: 'Jonathan',
  name: 'Джонатан',
  image: require('../../Images/MM/Persons/Jonathan.png'),
  title: 'Сын убитого бизнесмена Томаса Брауна. ',
  description: 'Еще одна загадка в этом деле. Кто же ты такой, Джонатан? Какие тайны скрываешь? Впервые не могу понять человека… Теряю сноровку?',
  story: EStoriesEn.MM
})
