import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Choice',
  id: 'HugBack',
  story: EStoriesEn.PFT,
  idDescription: 'Обнять в ответ'
})

statsManager.add({
  category: 'Choice',
  id: 'SayYes',
  story: EStoriesEn.PFT,
  idDescription: 'Сказать да!'
})

statsManager.add({
  category: 'Choice',
  id: 'SayIDontCare',
  story: EStoriesEn.PFT,
  idDescription: 'Сказать плевать'
})

statsManager.add({
  category: 'Choice',
  id: 'SayNo',
  story: EStoriesEn.PFT,
  idDescription: 'Сказать нет!'
})
