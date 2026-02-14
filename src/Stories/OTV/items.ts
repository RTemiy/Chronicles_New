import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Phone',
  name: 'Телефон',
  image: require('../../Media/Images/OTV/Items/Telephone.png'),
  title: 'Просто смартфон, который всегда со мной.',
  description: 'Он запечатлел столько радостных событий: ни один праздник не обходится без него. А еще брат постоянно забирает его и делает прикольные селфи, и, когда я их обнаруживаю, мое настроение поднимается.',
  story: EStoriesEn.OTV
})

statsManager.add({
  category: 'Item',
  id: 'Lina_Number',
  name: 'Листок',
  image: require('../../Media/Images/OTV/Items/Card.png'),
  title: 'Визитка в стиле минимализм.',
  description: 'Лина написала мне свой номер в надежде, что я позвоню. Стоит воспользоваться этим шансом когда-нибудь.',
  story: EStoriesEn.OTV
})
