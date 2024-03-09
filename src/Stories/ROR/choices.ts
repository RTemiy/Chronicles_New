import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Choice',
  id: 'KillStranger',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Effect',
  id: 'Health',
  name: 'Здоровье',
  image: require('../../Images/ROR/Effects/Health.png'),
  title: '',
  description: '',
  story: EStoriesEn.ROR
})
