import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Irina',
  name: 'Ирина',
  image: require('../../Media/Images/F/Persons/Irina_Avatar.png'),
  title: 'Жена, с которой мы несколько лет в браке. Но отношения постепенно утратили былую яркость и теплоту.',
  description: 'Что-то незаметно изменилось, и теперь наше общение приносит больше грусти, нежели радости. Однако несмотря ни на что, сердце по-прежнему хранит тепло и нежность к ней.',
  story: EStoriesEn.F
})

statsManager.add({
  category: 'Person',
  id: 'Valeria',
  name: 'Валерия',
  image: require('../../Media/Images/F/Persons/Valeria_Avatar.png'),
  title: 'Моя коллега по работе, преданная своему делу и всегда поддерживающая меня.',
  description: 'Чувствуется, что за внешней уверенностью скрывается внутренняя грусть. Она редко делится подробностями личной жизни, оставляя простор для догадок и сочувствия.',
  story: EStoriesEn.F
})

statsManager.add({
  category: 'Person',
  id: 'Alice',
  name: 'Алиса',
  image: require('../../Media/Images/F/Persons/Alice_Avatar.png'),
  title: 'Молоденькая девушка, полная энергии и энтузиазма, весело раздававшая рекламные листовки.',
  description: 'Похоже, она — внучка таинственной старухи, подарившей необычную шкатулку. Кто знает, какие секреты она таит и способна ли стать ключом к разгадкам моих вопросов?',
  story: EStoriesEn.F
})
