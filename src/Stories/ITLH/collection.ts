import { EStoriesEn } from '../../Utils/EStoriesNames'
import { achievementsManager, cardsManager } from '../../index'

cardsManager.add({
  name: 'PrologueCompleted',
  story: EStoriesEn.ITLH,
  image: require('../../Media/Images/ITLH/Cards/Prologue.jpg'),
  title: 'Таинственное пространство',
  text: 'Пройти пролог',
  description: 'Загадочное измерение, хранящее множество загадок, где каждый уголок пропитан древними секретами.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.ITLH, ['PrologueCompleted']) }
})

cardsManager.add({
  name: 'Chapter01Part01Completed',
  story: EStoriesEn.ITLH,
  image: require('../../Media/Images/ITLH/Cards/Chapter01Part01.jpg'),
  title: 'Где прошлое встречает настоящее',
  text: 'Пройти Главу 1 Часть 1, получив все достижения',
  description: 'Город сочетает современность с атмосферой «маленькой Америки»: кирпичные фасады, старинные витрины, мощёные тротуары.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.ITLH, ['Sleeper', 'IChooseComfort', 'RecoverEssay', 'GoodGirl', 'CorrectAnswer', 'Chapter01Part01Completed']) }
})
