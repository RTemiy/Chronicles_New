import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Matter',
  name: 'Материя',
  image: require('../../Media/Images/PFT/Effects/Matter.png'),
  title: 'Голос разума.',
  description: 'Героиня идёт к поставленной цели, не углубляясь в фантазии.',
  story: EStoriesEn.PFT
})

statsManager.add({
  category: 'Effect',
  id: 'Ether',
  name: 'Эфир',
  image: require('../../Media/Images/PFT/Effects/Ether.png'),
  title: 'Шёпот мечты.',
  description: 'Венди приспосабливается к обстоятельствам, погружаясь в свой внутренний мир.',
  story: EStoriesEn.PFT
})