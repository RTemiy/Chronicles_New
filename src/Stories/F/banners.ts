import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'F_Market',
    image: require('../../Images/F/Backgrounds/Christmas_Market.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'GoHigh')
  },
  {
    id: 'F_Tent',
    image: require('../../Images/F/Backgrounds/Inside_Tent.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'GoDarkDeep')
  },
  {
    id: 'F_Neva_Evening',
    image: require('../../Images/F/Backgrounds/Neva.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'PrologueCompleted')
  },
  {
    id: 'F_Church',
    image: require('../../Images/F/Backgrounds/Orthodox_Church.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'PrologueCompleted')
  }
])
