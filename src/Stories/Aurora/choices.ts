import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'ChooseWriter',
  name: 'Писатель',
  title: 'Писатель',
  description: '',
  image: require('../../Images/Aurora/Objects/Book.png'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Художник',
  title: 'Художник',
  description: '',
  id: 'ChooseArtist',
  image: require('../../Images/Aurora/Objects/Album.png'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Меломан',
  title: 'Меломан',
  description: '',
  id: 'ChooseMusician',
  image: require('../../Images/Aurora/Objects/Walkman.png'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Прагматичная',
  title: 'Прагматичная',
  description: '',
  id: 'BePragmatic',
  image: require('../../Images/UI/icon_settings.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Романтичная',
  id: 'BeRomantic',
  title: 'Романтичная',
  description: '',
  image: require('../../Images/UI/icon_favourites.svg'),
  story: EStoriesEn.Aurora
})
