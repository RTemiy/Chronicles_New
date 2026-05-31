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

cardsManager.add({
  name: 'Katarina_Actress',
  story: EStoriesEn.ITLH,
  image: require('../../Media/Images/ITLH/Cards/Katarina_Actress.jpg'),
  title: 'Актриса одного театра',
  text: 'Сыграть роль Катарины, не вызвав подозрения у Николы и Уильяма',
  description: 'Потерянность и одиночество стали ее верными спутниками. На сцене Катарина оживляла чужих героинь, а свою судьбу все еще искала.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.ITLH, ['Actress']) }
})

cardsManager.add({
  name: 'ThankYou',
  story: EStoriesEn.ITLH,
  image: require('../../Media/Images/ITLH/Cards/ThankYou.jpg'),
  title: 'Благодарность',
  text: 'Помочь Хью получить допуск к экзамену профессора Нэйтана',
  description: 'Несмотря на то что Хью часто пренебрегает учебой ради собственных проектов, он искренне мечтает получить диплом. Ваша поддержка — очередное доказательство крепкой дружбы.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.ITLH, ['Helper']) }
})

cardsManager.add({
  name: 'Chapter01Part02Completed',
  story: EStoriesEn.ITLH,
  image: require('../../Media/Images/ITLH/Cards/NY1885.jpg'),
  title: 'Нью-Йорк 1885 год',
  text: ' Пройти Главу 1 Часть 2, получив все достижения',
  description: 'Город, где встречаются континенты, культуры и судьбы. Грохот конки, гомон порта, скрип пароходных швартовов. В гавани ждут сборки части Статуи Свободы, подаренной Францией. На Манхэттене растут стальные каркасы — будущее уже наступает.',
  unlockCondition: () => { return achievementsManager.isUnlockedSome(EStoriesEn.ITLH, ['Chapter01Part02Completed', 'KnowledgePower', 'Monster', 'WantBelieve', 'Helper', 'Actress']) }
})
