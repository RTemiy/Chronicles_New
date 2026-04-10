import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'PFT_Pris',
    image: require('../../Media/Images/PFT/Persons/Priscilla_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.PFT, 'FriendshipKeeper')
  },
  {
    id: 'PFT_Wendy',
    image: require('../../Media/Images/PFT/Persons/Wendy_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.PFT, 'GreenPlanet') || achievementsManager.isUnlocked(EStoriesEn.PFT, 'Feministic') || achievementsManager.isUnlocked(EStoriesEn.PFT, 'GoodMusicFan')
  }
])
