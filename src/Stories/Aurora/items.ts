import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  name: 'Пропуск',
  id: 'Pass01',
  title: 'Временный пропуск',
  description: 'Пропуск, который любезно дал мне Артур, чтобы я могла посещать университет',
  image: require('../../Images/Aurora/Items/Trial_Pass.png'),
  story: EStoriesEn.Aurora
})
