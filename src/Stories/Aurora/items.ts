import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  name: 'Пропуск',
  id: 'Pass01',
  title: 'Временный пропуск',
  description: 'Пропуск, который любезно дал мне Артур, чтобы я могла посещать университет',
  image: require('../../Media/Images/Aurora/Items/Trial_Pass.png'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Item',
  name: 'Фото',
  id: 'MotherPhoto',
  title: 'Потерянная фотография',
  description: 'Возможно, это обронил Калеб? На ней изображена красивая девушка и подпись: «Моя семья»',
  image: require('../../Media/Images/Aurora/Items/Mother_Photo.png'),
  story: EStoriesEn.Aurora
})
