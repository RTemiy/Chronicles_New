import { EStoriesEn } from '../../Utils/EStoriesNames'
import { achievementsManager, cardsManager } from '../../index'
import { getCollectionItemValue } from '../../Functions/saveToCollection'

cardsManager.add({
  name: 'PrologueCompleted',
  story: EStoriesEn.F,
  image: require('../../Media/Images/F/Collection/Strange_Tent.jpg'),
  title: 'Загадочная лавка',
  text: 'Пройти 1 Часть, собрав все достижения',
  description: 'Броская, огненно-красная ткань шатра, которую прохожие в упор не замечают… Отчего же Константина так тянет сюда? Вспомните рекламщицу на пути. Листовка — ключ в таинственную обитель.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.F, ['GoHigh', 'GoDarkDeep', 'PrologueCompleted']) }
})

cardsManager.add({
  name: 'AllGrannyChoices',
  story: EStoriesEn.F,
  image: require('../../Media/Images/F/Collection/Witch_Story.jpg'),
  title: 'История об одной ведьме',
  text: 'Во 2 Части осмотреть всё в комнате старушки',
  description: 'Бабушку, изготавливающую шкатулки, зовут Марьям. В её семье все женщины по линии матери были знахарками и владели способностью заговаривать предметы или болезни. У Алисы этого дара нет. ',
  unlockCondition: () => { return getCollectionItemValue(EStoriesEn.F, 'Photo') === 1 && getCollectionItemValue(EStoriesEn.F, 'Window') === 1 && getCollectionItemValue(EStoriesEn.F, 'Shelf') === 1 && getCollectionItemValue(EStoriesEn.F, 'Bed') === 1 }
})

cardsManager.add({
  name: 'Chapter01Part01Completed',
  story: EStoriesEn.F,
  image: require('../../Media/Images/F/Collection/Lets_Meet.jpg'),
  title: 'Познакомимся поближе?',
  text: 'Пройти 2 Часть, собрав все достижения',
  description: 'До брака Константин был очень амбициозным и трудолюбивым. Его отец воспитывал сына достаточно строго, и это помогло мужчине пробиться в рекламную компанию на неплохую ставку в период кризиса.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.F, ['Soulmate', 'Witch_Hug', 'Colleges', 'Chapter01Part01Completed']) }
})
