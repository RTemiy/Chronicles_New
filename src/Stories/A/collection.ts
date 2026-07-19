import { EStoriesEn } from '../../Utils/EStoriesNames'
import { achievementsManager, cardsManager } from '../../index'

cardsManager.add({
  name: 'PrologueCompleted',
  story: EStoriesEn.A,
  image: require('../../Media/Images/A/Collection/Memories.jpg'),
  title: 'Драгоценные воспоминания',
  text: 'Пройти Пролог, получив все достижения',
  description: 'Мое солнце, мой лучик света. Мама всегда была рядом, указывала верный путь, смотрела на мир яркими, горящими глазами. Ее любовь к чтению стала опорой и тихим семейным единением.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.A, ['PrologueCompleted', 'SmallVictory']) }
})
