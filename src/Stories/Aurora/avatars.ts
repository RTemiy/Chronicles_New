import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'Aurora_Aurora',
    image: require('../../Images/Aurora/Persons/Aurora.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'PrologueCompleted')
  },
  {
    id: 'Aurora_Book',
    image: require('../../Images/Aurora/Items/Poe_Book.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'PrologueCompleted')
  }
])
