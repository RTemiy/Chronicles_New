import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Analyse',
  name: 'Анализ',
  image: require('../../Images/MM/Effects/Analyse.jpg'),
  title: 'Расследование ведётся путём анализирования фактов.',
  description: 'Подход Маргариты основывается на логике и фактических доказательствах.',
  story: EStoriesEn.MM
})

statsManager.add({
  category: 'Effect',
  id: 'Instinct',
  name: 'Инстинкт',
  image: require('../../Images/MM/Effects/Instinct.jpg'),
  title: 'Расследование проводится с упором на чувства и опыт.',
  description: 'Маргарита полагается на интуицию и чаще прислушивается к голосу подсознания.',
  story: EStoriesEn.MM
})
