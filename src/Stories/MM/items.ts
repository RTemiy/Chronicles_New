import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'BurntMessage',
  name: 'Записка',
  image: require('../../Images/MM/Objects/Burnt_Letter.png'),
  title: 'Подгоревшая записка',
  description: 'Скомканный листок бумаги с размашистым почерком. Кто же стоит за этими словами? А главное, кто смог проникнуть в мою квартиру?',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Item',
  id: 'Earring',
  name: 'Серьга',
  image: require('../../Images/MM/Objects/Silver_Earring.png'),
  title: 'Серебряная сережка',
  description: 'Не заметила пропажи украшения. Как оно здесь оказалось? Преступник ведет меня, помогает, использует в своих целях? Как же много вопросов к этому маленькому предмету. Смогу ли я найти ответы на них?',
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
