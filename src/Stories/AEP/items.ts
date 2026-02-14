import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Granny_Cigarettes',
  name: 'Сигареты',
  image: require('../../Media/Images/AEP/Items/Cigarettes.png'),
  title: 'Бабушкины сигареты',
  description: 'Она курит, сколько я себя помню. Никакой пропажи не заметит.',
  story: EStoriesEn.AEP
})

statsManager.add({
  category: 'Item',
  id: 'Taxi_Card',
  name: 'Визитка',
  image: require('../../Media/Images/AEP/Items/Taxi_Card.png'),
  title: 'Визитка Мигеля',
  description: 'Испанец любезно поделился своими контактами после того, что мы сделали.',
  story: EStoriesEn.AEP
})
