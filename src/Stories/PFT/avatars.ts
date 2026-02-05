import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'PFT_Pris',
    image: require('../../Images/PFT/Persons/Priscilla_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.PFT, 'FriendshipKeeper')
  }
])
