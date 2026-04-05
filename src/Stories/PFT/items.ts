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

statsManager.add({
  category: 'Item',
  id: 'TalesBook',
  story: EStoriesEn.PFT,
  name: 'Книга',
  image: require('../../Media/Images/PFT/Items/Books_Of_Tales.png'),
  title: 'Издание сказок в старинном переплете.',
  description: 'Символ моста между реальностью и миром грёз.',
  idDescription: '-'
})
