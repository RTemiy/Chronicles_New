import { EStoriesEn } from '../../Utils/EStoriesNames'
import { achievementsManager, cardsManager } from '../../index'

cardsManager.add({
  name: 'PrologueCompleted',
  story: EStoriesEn.PFT,
  image: require('../../Media/Images/PFT/Collection/Asylum.jpg'),
  title: '«Психиатрическая клиника святого Вита»',
  text: 'Пройти пролог',
  description: 'Имея более, чем вековую историю, здание основательно перестраивалось в тридцатые годы XX века. Госпиталь софинансируется за счёт частных инвестиций и государственных программ.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.PFT, ['GreenPlanet', 'Feministic', 'GoodMusicFan', 'FriendshipKeeper', 'PrologueCompleted']) }
})

cardsManager.add({
  name: 'Chapter01Part01Completed',
  story: EStoriesEn.PFT,
  image: require('../../Media/Images/PFT/Collection/New_Old.jpg'),
  title: 'Новая старая история',
  text: 'Пройти Главу 1 Часть 1, получив все достижения',
  description: 'Прошлое или будущее? И стоит ли выбирать?',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.PFT, ['Neighborgood', 'WarBehaviour', 'SafetyFirst', 'RestForSoul', 'Men', 'Chapter01Part01Completed']) }
})
