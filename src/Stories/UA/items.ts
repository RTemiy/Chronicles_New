import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Neck',
  name: 'Заточка',
  image: require('../../Images/UA/Items/Neck.png'),
  title: '-',
  description: 'Поразительное доказательство способности человека создать смертоносное оружие из чего угодно.',
  story: EStoriesEn.UA
})

statsManager.add({
  category: 'Item',
  id: 'Pistol',
  name: 'Пистолет',
  image: require('../../Images/UA/Items/Pistol.png'),
  title: '-',
  description: 'Десятизарядный пистолет девятого калибра. В обойме осталось пять патронов. Сколько патронов, столько шансов на жизнь. Последний всегда предназначен для твоей головы.',
  story: EStoriesEn.UA
})
