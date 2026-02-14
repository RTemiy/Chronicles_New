import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'PFT_Corridor',
    image: require('../../Media/Images/PFT/Backgrounds/Viktor_Corridor.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.PFT, 'PrologueCompleted')
  },
  {
    id: 'PFT_Chamber',
    image: require('../../Media/Images/PFT/Backgrounds/Chamber.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.PFT, 'PrologueCompleted')
  }
])
