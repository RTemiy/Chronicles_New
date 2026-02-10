import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Choice',
  id: 'GoSleep',
  story: EStoriesEn.ITLH,
  idDescription: 'Поспать еще'
})

statsManager.add({
  category: 'Choice',
  id: 'Library',
  story: EStoriesEn.ITLH,
  idDescription: 'Библиотека'
})

statsManager.add({
  category: 'Choice',
  id: 'Taxi',
  story: EStoriesEn.ITLH,
  idDescription: 'Поехать на такси'
})
