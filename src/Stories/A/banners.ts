import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'A_MasterRoom',
    image: require('../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.A, 'PrologueCompleted')
  },
  {
    id: 'A_Lighthouse',
    image: require('../../Media/Images/A/Backgrounds/Lighthouse.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.A, 'PrologueCompleted')
  }
])
