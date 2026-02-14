import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'FOF_Cassandra',
    image: require('../../Media/Images/FOF/Persons/Cassandra.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_April',
    image: require('../../Media/Images/FOF/Persons/April.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Derek',
    image: require('../../Media/Images/FOF/Persons/Derek.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Sarah',
    image: require('../../Media/Images/FOF/Persons/Sarah.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Duke',
    image: require('../../Media/Images/FOF/Persons/Duke.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'Chapter01Part01Completed')
  },
  {
    id: 'FOF_Aunt',
    image: require('../../Media/Images/FOF/Persons/Aunt.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'Chapter01Part01Completed')
  },
  {
    id: 'FOF_Christopher',
    image: require('../../Media/Images/FOF/Persons/Christopher.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'Chapter01Part01Completed')
  }
])
