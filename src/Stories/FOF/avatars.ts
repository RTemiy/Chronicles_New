import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'FOF_Cassandra',
    image: require('../../Images/FOF/Persons/Cassandra.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_April',
    image: require('../../Images/FOF/Persons/April.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Derek',
    image: require('../../Images/FOF/Persons/Derek.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Sarah',
    image: require('../../Images/FOF/Persons/Sarah.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  }
])
