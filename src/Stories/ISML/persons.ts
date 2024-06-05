import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Mark',
  name: 'Марк',
  image: require('../../Images/ISML/Persons/Mark.png'),
  title: 'Мой близкий человек.',
  description: 'Наше знакомство было чистой случайностью. И я благодарна ему за то счастье, что он мог подарить. Но время рассудит.',
  story: EStoriesEn.ISML
})

statsManager.add({
  category: 'Person',
  id: 'Lena',
  name: 'Лена',
  image: require('../../Images/ISML/Persons/Lena.png'),
  title: 'Однокурсница в университете, подруга.',
  description: 'С кем я еще могу поделиться тяжестью на душе, как не с ней? Она всегда рядом и готова поддержать. Надеюсь, нашу дружбу ничего не пошатнет.',
  story: EStoriesEn.ISML
})
