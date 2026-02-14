import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Pendant',
  name: 'Кулон',
  image: require('../../Media/Images/FOF/Objects/Pendant.png'),
  title: 'Кулон',
  description: 'По словам Криса, он может скрывать меня от Ника. Очень практично.',
  story: EStoriesEn.FOF
})
