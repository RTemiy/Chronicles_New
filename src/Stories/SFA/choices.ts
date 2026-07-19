import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Choice',
  id: 'SayBad',
  story: EStoriesEn.SFA,
  idDescription: 'Отчитать'
})

statsManager.add({
  category: 'Choice',
  id: 'SaySupport',
  story: EStoriesEn.SFA,
  idDescription: 'Поддержать'
})

statsManager.add({
  category: 'Choice',
  id: 'SayIgnore',
  story: EStoriesEn.SFA,
  idDescription: 'Проигнорировать'
})

statsManager.add({
  category: 'Choice',
  id: 'SayPromise',
  story: EStoriesEn.SFA,
  idDescription: 'Пообещать'
})

statsManager.add({
  category: 'Choice',
  id: 'HelpHide',
  story: EStoriesEn.SFA,
  idDescription: 'Помочь дойти до укрытия'
})

statsManager.add({
  category: 'Choice',
  id: 'ListenAdvice',
  story: EStoriesEn.SFA,
  idDescription: 'Выслушать последнее наставление'
})

statsManager.add({
  category: 'Choice',
  id: 'LeftAndRun',
  story: EStoriesEn.SFA,
  idDescription: 'Оставить его и побежать к родителям'
})
