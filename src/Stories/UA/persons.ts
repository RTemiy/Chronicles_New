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
