import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Eve',
  name: 'EVE-13C',
  image: require('../../Images/UA/Persons/Eve.png'),
  title: 'Быть жертвой лабораторного эксперимента не страшно. Страшно быть ненужным и потерянным.',
  description: 'Про себя сложнее всего писать… Студентка, живу с мамой и папой, работаю, пытаясь обеспечить самостоятельную жизнь.',
  showValue: true,
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Person',
  id: 'Yuko',
  name: 'Юко Ямамото',
  image: require('../../Images/UA/Persons/Yuko.png'),
  title: 'Единственная, кто тронула что-то в душе Солдата.',
  description: 'Пожилая женщина, эмигрировавшая в Нову в поиске лучшей жизни. Этот город дал ей возможности, но взамен забрал мужа и сына.',
  showValue: true,
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Person',
  id: 'Lagard',
  name: 'Доктор Лагард',
  image: require('../../Images/UA/Persons/Lagard.png'),
  title: 'Для каждого Солдата он первый Хозяин, приказам которого надо внимать беспрекословно.',
  description: 'Полное имя — Грегори Лагард. EVE-13C его любимый венец творения, передовик группы 13.',
  showValue: true,
  story: EStoriesEn.UA
})
