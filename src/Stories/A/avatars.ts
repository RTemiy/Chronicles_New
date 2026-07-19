import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'
import { loadData } from '../../Functions/localStorageManager'

profileManager.addAvatars([
  {
    id: 'A_CAurora',
    image: require('../../Media/Images/A/Persons/Aurora_Child_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.A, 'SmallVictory')
  }
])
