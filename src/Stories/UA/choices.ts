import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Choice',
  id: 'ComeToDoor',
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Choice',
  id: 'Obey',
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Choice',
  id: 'ChooseTarget',
  idDescription: 'Выбрать цель',
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Choice',
  id: 'ObeyCommand',
  idDescription: 'Подчиниться приказу',
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Choice',
  id: 'Body',
  idDescription: 'Тело',
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Choice',
  id: 'Tie',
  idDescription: 'Связать',
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Choice',
  id: 'LastWarning',
  idDescription: 'Последнее предупреждение',
  story: EStoriesEn.UA
})
