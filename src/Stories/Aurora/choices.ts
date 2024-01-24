import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'ChooseWriter',
  name: 'Писатель',
  title: 'Писатель',
  description: 'Ты не можешь жить без книг и собственных фантазий о будущих историях',
  image: require('../../Images/Aurora/Effects/Writer.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Художник',
  title: 'Художник',
  description: 'Тебе нравится рисовать и запечатлевать любимые образы на холсте.',
  id: 'ChooseArtist',
  image: require('../../Images/Aurora/Effects/Artist.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Музыкант',
  title: 'Музыкант',
  description: 'Ты грезишь о воплощении самых лиричных и задорных мелодий.',
  id: 'ChooseMusician',
  image: require('../../Images/Aurora/Effects/Musician.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Прагматик',
  title: 'Прагматик',
  description: 'Тобой правят логика и разум.',
  id: 'BePragmatic',
  image: require('../../Images/Aurora/Effects/Pragmatic.svg'),
  story: EStoriesEn.Aurora
})

statsManager.add({
  category: 'Effect',
  name: 'Романтик',
  id: 'BeRomantic',
  title: 'Романтик',
  description: 'Тобой правят чувства и эмоции.',
  image: require('../../Images/Aurora/Effects/Romantic.svg'),
  story: EStoriesEn.Aurora
})
