import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Dylan',
  name: 'Дилан',
  image: require('../../Images/MM/Persons/Dylan.png'),
  title: 'Близкий друг, напарник, с недавнего времени — подчинённый.',
  description: 'Совместная работа сблизила нас, и человека порядочнее я в своей жизни ещё не встречала. Есть у него один недостаток… юмор, за который иногда хочется пристрелить.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Person',
  id: 'Arthur',
  name: 'Артур',
  image: require('../../Images/MM/Persons/Arthur.png'),
  title: 'Руководитель детективного бюро в районе Илинг.',
  description: 'Человек, в профессионализме которого я не сомневалась ни секунды своей рабочей практики. Артур ругает и хвалит с одинаковым выражением на лице. Проф этика или особенности характера?',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Person',
  id: 'Mike',
  name: 'Майк',
  image: require('../../Images/MM/Persons/Mike.png'),
  title: 'Полицейский, коллега.',
  description: 'Майк частенько просит меня о помощи: найти информацию, поделиться контактом. Я спокойно позволяю копу пользоваться своими навыками: пусть должок копится.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Person',
  id: 'Jonathan',
  name: 'Джонатан',
  image: require('../../Images/MM/Persons/Jonathan.png'),
  title: 'Сын убитого бизнесмена Томаса Брауна.',
  description: 'Из записной книжки Маргариты: «Единственный наследник. Ощущает себя хозяином положения. Соблюдает эмоциональную дистанцию, крайне недоступен. Кто же ты такой, Джонатан? Потерпевший? Или всё-таки главный подозреваемый…?»',
  story: EStoriesEn.MM
})
