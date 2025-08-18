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
  image: require('../../Images/MM/Objects/Jonathan_Report.jpg'),
  title: 'Отчет Джонатана',
  description: 'Три страницы текста о том, что он делал в указанные дни. Рядом с местом убийства не оказывался. Отпечатки, снятые с поверхности бумаг, не дали положительного результата. Джонатан не убийца, как я и предполагала.',
  story: EStoriesEn.MM
})
