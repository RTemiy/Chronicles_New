import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Respect',
  name: 'Признание',
  image: require('../../Media/Images/OTV/Effects/Respect.png'),
  title: 'От него зависит, как к Ники относятся окружающие.',
  description: 'Высокое признание покажет девушку в хорошем свете, к ней будут благосклонны, с ее мнением будут считаться. Низкое признание покажет девушку с плохой стороны, ее слова не будут никем услышаны. ',
  showValue: false,
  story: EStoriesEn.OTV
})

statsManager.add({
  category: 'Effect',
  id: 'Hereditary',
  name: 'Наследие',
  image: require('../../Media/Images/OTV/Effects/Hereditary.png'),
  title: 'Такая героиня чтит традиции, силу семьи, и идет по их пути несмотря ни на что. ',
  description: 'Всю свою жизнь она будет искать силу в своей семье, и никогда не свернет с пути правды. Достигнет желаемого любой ценой. Сила крови и родственная связь для нее все.',
  showValue: false,
  story: EStoriesEn.OTV
})

statsManager.add({
  category: 'Effect',
  id: 'Transformation',
  name: 'Трансформация',
  image: require('../../Media/Images/OTV/Effects/Transformation.png'),
  title: 'Ники, выбравшая этот путь, выбирает настоящее, не оглядывается на прошлое.',
  description: 'Такая героиня готова идти на некоторые уступки ради сохранения баланса. Для нее имеет большее значение только настоящее. Она пойдет на некоторые уступки, что покажет Ники с наилучшей стороны. ',
  showValue: false,
  story: EStoriesEn.OTV
})
