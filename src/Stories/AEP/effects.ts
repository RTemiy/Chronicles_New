import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Karma',
  name: 'Карма',
  image: require('../../Media/Images/AEP/Effects/Karma.svg'),
  title: 'Карма',
  description: 'Деяния и поступки влияют на нашу жизнь. Каков же будет итог моих выборов?',
  story: EStoriesEn.AEP
})
