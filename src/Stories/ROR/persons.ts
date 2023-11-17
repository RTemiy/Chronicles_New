import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Henrich',
  name: 'Генрих Гарнер',
  image: require('../../Images/ROR/Persons/Henrich.png'),
  title: 'Я объездил множество мест этой богом забытой страны. Казалось, повидал уже всё.',
  description: 'Надеюсь, что в новом приключении так оно и останется.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Person',
  id: 'Mortimer',
  name: 'Мортимер Дракен',
  image: require('../../Images/ROR/Persons/Mortimer.png'),
  title: 'Пожилой доктор, один из первых, кто нанял меня для поездки к восточным границам.',
  description: 'Спокойный и рассудительный, однако почему-то рядом с ним я ощущаю некую тревогу.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Person',
  id: 'Martha',
  name: 'Марта Тиссен',
  image: require('../../Images/ROR/Persons/Martha.png'),
  title: 'Монахиня из монастыря Святого Бернарда, что близ Гласвера. Воспитательница Вига и Джоанны.',
  description: 'Типичная святоша, готовая упасть в обморок только от одного ругательства. Хотя бы платит исправно. Да и глазу есть за что зацепиться.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Person',
  id: 'Ditrich',
  name: 'Дитрих Гросс',
  image: require('../../Images/ROR/Persons/Ditrich.png'),
  title: 'Ассистент доктора Мортимера, пьяница и угрюмый тип.',
  description: 'Лучше избегать с ним общения. Мало того, что от него несет перегаром, так он еще и постоянно хамит.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Person',
  id: 'Joanne',
  name: 'Джоанна',
  image: require('../../Images/ROR/Persons/Joanne.png'),
  title: 'Младшая из воспитанников Марты, маленькая девочка с длинными светлыми волосами.',
  description: 'Застенчивая девочка, практически не разговаривает. Хочется верить, что путешествие выдержит спокойно.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Person',
  id: 'Vig',
  name: 'Виг',
  image: require('../../Images/ROR/Persons/Vig.png'),
  title: 'Старший из воспитанников Марты, рыжеволосый пятнадцатилетний парень.',
  description: 'Молчаливый, но взгляд выдает в нем задиру и бунтаря. Для его же блага ему не следует чинить мне проблем в дороге.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Person',
  id: 'Jack',
  name: 'Джек Рейнер',
  image: require('../../Images/ROR/Persons/Jack.png'),
  title: 'Молодой бард, скрывающийся от закона. Готов был отдать все деньги за возможность побыстрее уехать из Гласвера.',
  description: 'Ветреный и беспокойный юноша, как и все барды, явно не умеет держать язык за зубами, о чем потом жалеет.',
  story: EStoriesEn.ROR
})
