import { EStoriesEn } from '../../Utils/EStoriesNames'
import { achievementsManager, cardsManager } from '../../index'

cardsManager.add({
  name: 'PrologueCompleted',
  story: EStoriesEn.SFA,
  image: require('../../Media/Images/SFA/Collection/FakeWorld.jpg'),
  title: 'Фальшивый мир',
  text: 'Пройти пролог',
  description: 'Вековая война между Серебряным Градом и Пылающей Цитаделью замерла на краю Великого каньона. Хрупкий пакт прекратил открытые битвы, но истинная вражда никуда не исчезла.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.SFA, ['PrologueCompleted']) }
})
