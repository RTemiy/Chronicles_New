import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'MM_Margo',
    image: require('../../Images/MM/Persons/Margo_Form.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.MM, 'PrologueCompleted')
  },
  {
    id: 'MM_Dylan',
    image: require('../../Images/MM/Persons/Dylan.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.MM, 'PrologueCompleted')
  }
])
