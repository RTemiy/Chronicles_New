import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Phone',
  name: 'Телефон',
  image: require('../../Images/OTV/Items/Telephone.png'),
  title: 'Просто смартфон, который всегда со мной.',
  description: 'Он запечатлел столько радостных событий: ни один праздник не обходится без него. А еще брат постоянно забирает его и делает прикольные селфи, и, когда я их обнаруживаю, мое настроение поднимается.',
  story: EStoriesEn.OTV
})
