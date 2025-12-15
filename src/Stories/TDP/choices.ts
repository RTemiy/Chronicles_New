import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Choice',
  id: 'AskForHelp',
  story: EStoriesEn.TDP,
  idDescription: 'Попросить помощи'
})

statsManager.add({
  category: 'Choice',
  id: 'HideWagon',
  story: EStoriesEn.TDP,
  idDescription: 'Спрятать повозку'
})

statsManager.add({
  category: 'Choice',
  id: 'StayPut',
  story: EStoriesEn.TDP,
  idDescription: 'Остаться на месте'
})

statsManager.add({
  category: 'Choice',
  id: 'Pay',
  story: EStoriesEn.TDP,
  idDescription: 'Заплатить'
})

statsManager.add({
  category: 'Choice',
  id: 'BardPayNormal',
  story: EStoriesEn.TDP,
  idDescription: 'Взять с барда обычную плату'
})

statsManager.add({
  category: 'Choice',
  id: 'ResponseDitrich',
  story: EStoriesEn.TDP,
  idDescription: 'Ответить'
})