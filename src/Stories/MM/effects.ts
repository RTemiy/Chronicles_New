import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Analyse',
  name: 'Анализ',
  image: require('../../Media/Images/MM/Effects/Analyse.jpg'),
  title: 'Расследование ведётся путём анализирования фактов.',
  description: 'Подход Маргариты основывается на логике и фактических доказательствах.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Effect',
  id: 'Instinct',
  name: 'Инстинкт',
  image: require('../../Media/Images/MM/Effects/Instinct.jpg'),
  title: 'Расследование проводится с упором на чувства и опыт.',
  description: 'Маргарита полагается на интуицию и чаще прислушивается к голосу подсознания.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Effect',
  id: 'Reputation',
  name: 'Репутация',
  image: require('../../Media/Images/MM/Effects/Reputation.jpg'),
  title: 'Высокая — способствует карьерному росту. Низкая — усложняет путь.',
  description: 'Отношение персонажей к главной героине зависит в том числе от количества репутации. Чем больше очков — тем легче Маргарите будет даваться работа и взаимодействия с участниками событий.',
  story: EStoriesEn.MM
})
