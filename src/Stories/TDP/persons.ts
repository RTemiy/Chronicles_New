import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Mortimer',
  name: 'Мортимер',
  image: require('../../Images/TDP/Persons/Mortimer_Avatar.png'),
  title: 'Чумной доктор. Хочет найти источник распространения болезни.',
  description: 'Спокойный и рассудительный. Отличается рациональностью мышления и способностью находить оптимальные решения даже в сложных ситуациях.',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Person',
  id: 'Ditrich',
  name: 'Дитрих',
  image: require('../../Images/TDP/Persons/Ditrich_Avatar.png'),
  title: 'Ассистент доктора Дракена. Скептик, любитель выпить и обладатель острого языка.',
  description: 'Он часто поступает импульсивно, хватаясь за самое очевидное решение. Но несмотря на всю свою резкость и цинизм, каким-то необъяснимым образом остаётся верным спутником доктора Мортимера.',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Person',
  id: 'Martha',
  name: 'Марта',
  image: require('../../Images/TDP/Persons/Martha_Avatar.png'),
  title: 'Монахиня из монастыря Святого Бернарда.',
  description: 'Она живёт согласно высоким религиозным стандартам. Легко смущается даже от лёгкого намёка на греховность. Характер отличается удивительной смесью внутренней нежности и внешней неприступности. ',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Person',
  id: 'Vig',
  name: 'Виг',
  image: require('../../Images/TDP/Persons/Vig_Avatar.png'),
  title: 'Старший воспитанник Марты.',
  description: 'Он действует быстро, не думая о последствиях, полагаясь исключительно на интуицию и внутреннее ощущение правоты. Им движет своеобразное представление о справедливости, которое зачастую оказывается ошибочным.',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Person',
  id: 'Joanne',
  name: 'Джоанна',
  image: require('../../Images/TDP/Persons/Joanne_Avatar.png'),
  title: 'Младшая из воспитанников Марты.',
  description: 'Обычно тихая и застенчивая, она смотрит на мир с любопытством, осторожно наблюдая за происходящим издалека. Ей трудно выражать свои мысли вслух, предпочитает слушать разговоры старших и тихо улыбаться, прячась за спину воспитательницы. ',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Person',
  id: 'Jack',
  name: 'Джек',
  image: require('../../Images/TDP/Persons/Jack_Avatar.png'),
  title: 'Молодой бард, бегущий из города.',
  description: 'Легкий на подъем, он всегда спешит вперед, полагаясь на судьбу и собственную удачу. Шутливо отбрасывая трудности, порой недооценивает возможные риски и последствия своих поступков.',
  story: EStoriesEn.TDP
})
