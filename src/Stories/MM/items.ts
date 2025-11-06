import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'BurntMessage',
  name: 'Записка',
  image: require('../../Images/MM/Objects/Burnt_Letter.png'),
  title: 'Смятая записка с подозрительным содержанием',
  description: 'Какие тайны может скрывать безобидный клочок бумаги? И главное — насколько опасен тот, кто его подкинул?',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Item',
  id: 'Earring',
  name: 'Серьга',
  image: require('../../Images/MM/Objects/Silver_Earring.png'),
  title: 'Потеряшка, как ты тут оказалась?',
  description: 'Неизвестный использует мои личные вещи, чтобы привязать к делу.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Item',
  id: 'Jonathan_Report',
  name: 'Отчет',
  image: require('../../Images/MM/Items/Jonathan_Report.jpg'),
  title: 'Отчет Джонатана. Проснулся-поработал-поужинал-сон.',
  description: 'Пять листов текста, в которых пользы столько же, сколько в примитивном журнальчике с фейковой грязью о жизни звёзд. Отпечатки, снятые с поверхности документации, результатов не дали.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Item',
  id: 'Fingerprinting',
  name: 'Дактилоскопия',
  image: require('../../Images/MM/Items/Fingerprinting.jpg'),
  title: 'Отпечатки пальцев с серьги и записки.',
  description: 'В результате экспертизы установлено: все найденные отпечатки пальцев принадлежат одному лицу — самой Маргарите. Отпечатки зарегистрированы в дактилоскопической базе данных и соответствуют зарегистрированным образцам. ',
  story: EStoriesEn.MM
})
