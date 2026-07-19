import { EStoriesEn } from '../../Utils/EStoriesNames'
import { achievementsManager, cardsManager } from '../../index'

cardsManager.add({
  name: 'PrologueCompleted',
  story: EStoriesEn.TDP,
  image: require('../../Media/Images/TDP/Collection/Plauge.jpg'),
  title: 'Мор',
  text: 'Пройти пролог',
  description: 'Чума, что поглощает город за городом. Лишь чумные доктора — таинственные врачеватели, способны остановить ее распространение.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.TDP, ['PrologueCompleted']) }
})

cardsManager.add({
  name: 'Chapter01Part01Completed',
  story: EStoriesEn.TDP,
  image: require('../../Media/Images/TDP/Collection/City.jpg'),
  title: 'Город болот',
  text: 'Пройти Главу 1 Часть 1, получив все достижения',
  description: 'Гласвер — приграничный город королевства Крейс. Раньше через него проходили торговые пути, но из-за постоянно растущих пошлин на товары, торговцы покинули это место.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.TDP, ['KeepBag', 'ResponseDitrich', 'Zoo', 'TakeJacksMoney', 'SpendMoney', 'Chapter01Part01Completed']) }
})

cardsManager.add({
  name: 'Chapter01Part02Completed',
  story: EStoriesEn.TDP,
  image: require('../../Media/Images/TDP/Collection/Secret_Wires.jpg'),
  title: 'Тайные связи',
  text: 'Пройти Главу 1 Часть 1, получив все достижения',
  description: 'Находясь далеко от имперской столицы, местная знать начала диктовать свои правила и устои, порой идя вразрез с законами страны. Постоянные заговоры и интриги в Гласвере — обычное дело.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.TDP, ['ChapelNoHelp', 'MiniGameExpert', 'KillChapel', 'MarthaPresent', 'NurseGarden', 'Chapter01Part02Completed']) }
})

cardsManager.add({
  name: 'NurseGarden',
  story: EStoriesEn.TDP,
  image: require('../../Media/Images/TDP/Collection/HumilityVow.jpg'),
  title: 'Обет смирения',
  text: 'Получить достижение: Монахиня в саду',
  description: 'Прекрасная молодая дева — сестра Марта, монахиня из монастыря Святого Бернарда. Скрываясь от прошлого, она посвятила себя служению господу и опеке своих воспитанников — Джоанны и Вига.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.TDP, ['NurseGarden']) }
})
