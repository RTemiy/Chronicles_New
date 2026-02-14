import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Letter',
  name: 'Записка',
  image: require('../../Media/Images/PFT/Items/Letter.png'),
  title: 'От «любимого» Виктора.',
  description: 'Педантично сложенная бумажка, которая изменила планы Венди.',
  story: EStoriesEn.PFT
})
