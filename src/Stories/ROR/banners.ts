import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'ROR_Mortimer_Cabinet',
    image: require('../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Glaswer_Streets',
    image: require('../../Images/ROR/Backgrounds/Glaswer_Streets.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Glaswer_Streets_Plague',
    image: require('../../Images/ROR/Backgrounds/Glaswer_Streets_Plague.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Central_Square',
    image: require('../../Images/ROR/Backgrounds/Central_Square.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  }
])
