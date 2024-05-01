import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'ChooseWriter',
  name: 'Писатель',
  title: 'Писатель',
  showValue: false,
  description: 'Ты не можешь жить без книг и собственных фантазий о будущих историях',
  image: require('../../Images/Aurora/Effects/Writer.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Художник',
  title: 'Художник',
  description: 'Тебе нравится рисовать и запечатлевать любимые образы на холсте.',
  showValue: false,
  id: 'ChooseArtist',
  image: require('../../Images/Aurora/Effects/Artist.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Музыкант',
  title: 'Музыкант',
  description: 'Ты грезишь о воплощении самых лиричных и задорных мелодий.',
  showValue: false,
  id: 'ChooseMusician',
  image: require('../../Images/Aurora/Effects/Musician.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Прагматик',
  title: 'Прагматик',
  description: 'Тобой правят логика и разум.',
  showValue: false,
  id: 'BePragmatic',
  image: require('../../Images/Aurora/Effects/Pragmatic.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Романтик',
  id: 'BeRomantic',
  showValue: false,
  title: 'Романтик',
  description: 'Тобой правят чувства и эмоции.',
  image: require('../../Images/Aurora/Effects/Romantic.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Дух Авроры',
  id: 'Spirit',
  title: 'Дух Авроры',
  description: 'Твоя решимость. Твое принятие ситуаций. Твое отношение к окружающему.',
  image: require('../../Images/Aurora/Effects/Spirit.svg'),
  story: EStoriesEn.Aurora
})
