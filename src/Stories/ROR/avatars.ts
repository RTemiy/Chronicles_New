import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'ROR_Mortimer',
    image: require('../../Images/ROR/Persons/Mortimer.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Ditrich',
    image: require('../../Images/ROR/Persons/Ditrich.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  }
])
