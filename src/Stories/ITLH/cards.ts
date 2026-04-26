import { EStoriesEn } from '../../Utils/EStoriesNames'
import { achievementsManager, cardsManager } from '../../index'

cardsManager.add({
  name: 'PrologueCompleted',
  story: EStoriesEn.ITLH,
  image: require('../../Media/Images/ITLH/Cards/Prologue.png'),
  title: 'Прохождение пролога',
  text: 'Пройти пролог',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.ITLH, ['PrologueCompleted']) }
})

cardsManager.add({
  name: 'Chapter01Part01Completed',
  story: EStoriesEn.ITLH,
  image: require('../../Media/Images/ITLH/Cards/Chapter01Part01.png'),
  title: 'Глава 1 Часть 1 профессионал',
  text: 'Пройти глава 1 часть 1 получив все достижения',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.ITLH, ['Sleeper', 'IChooseComfort', 'RecoverEssay', 'GoodGirl', 'CorrectAnswer', 'Chapter01Part01Completed']) }
})
