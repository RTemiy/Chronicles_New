import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'AEP_Col',
    image: require('../../Images/AEP/Backgrounds/Col.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.AEP, 'PrologueCompleted')
  }
])
