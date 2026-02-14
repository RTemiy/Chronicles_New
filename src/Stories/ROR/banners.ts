import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'ROR_Candle',
    image: require('../../Media/Images/ROR/Backgrounds/Table_Candle.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Mortimer_Cabinet',
    image: require('../../Media/Images/ROR/Backgrounds/Mortimer_Cabinet.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Glaswer_Streets',
    image: require('../../Media/Images/ROR/Backgrounds/Glaswer_Streets.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Glaswer_Streets_Plague',
    image: require('../../Media/Images/ROR/Backgrounds/Glaswer_Streets_Plague.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Central_Square',
    image: require('../../Media/Images/ROR/Backgrounds/Central_Square.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Glaswer_Roadway',
    image: require('../../Media/Images/ROR/Backgrounds/Glaswer_Roadway.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Glaswer_Dirty_Streets',
    image: require('../../Media/Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Glaswer_Gates',
    image: require('../../Media/Images/ROR/Backgrounds/Glaswer_Gates.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  }
])
