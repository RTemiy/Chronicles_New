import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Choice',
  id: 'KillStranger',
  idDescription: 'Убить незнакомца',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Choice',
  id: 'ThreatVig',
  idDescription: 'Поставить Вига на место',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Choice',
  id: 'SaveMarthaDress',
  idDescription: 'Купить платье Марте',
  story: EStoriesEn.ROR
})
