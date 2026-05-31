import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Knowledge',
  name: 'Знание',
  image: require('../../Media/Images/ITLH/Effects/Knowledge.png'),
  title: 'Чем лучше учусь, тем шире возможности.',
  description: 'Повышая успеваемость, я могу глубже погрузиться в исторические эпохи, открывать новые грани и обрести способность изменять окружающий мир.',
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Effect',
  id: 'Help',
  story: EStoriesEn.ITLH,
  name: 'Помощь',
  image: require('../../Media/Images/ITLH/Effects/Help.png'),
  title: 'Я могу повлиять на действия Николы Теслы в прошлом?',
  description: 'Если у меня будут уверенные знания об эпохе и хорошие отношения с великим ученым, можно попытаться помочь ему преодолеть игровую зависимость.',
  idDescription: ''
})

statsManager.add({
  category: 'Effect',
  id: 'Addiction',
  story: EStoriesEn.ITLH,
  name: 'Зависимость',
  image: require('../../Media/Images/ITLH/Effects/Addiction.png'),
  title: 'Запретный плод — сладок.',
  description: 'Чем больше я соглашаюсь на вредные привычки, тем охотнее буду выбирать их впоследствии.',
  idDescription: ''
})

statsManager.add({
  category: 'Effect',
  id: 'Family',
  story: EStoriesEn.ITLH,
  name: 'Семья',
  image: require('../../Media/Images/ITLH/Effects/Family.png'),
  title: 'Отношения родителей трещат по швам.',
  description: 'Есть шанс предотвратить распад семьи — нужно лишь найти слова, которые помогут маме и папе услышать друг друга.',
  idDescription: ''
})


