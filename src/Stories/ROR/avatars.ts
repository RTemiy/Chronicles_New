import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'ROR_Mortimer',
    image: require('../../Media/Images/ROR/Persons/Mortimer.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Ditrich',
    image: require('../../Media/Images/ROR/Persons/Ditrich.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'PrologueCompleted')
  },
  {
    id: 'ROR_Mortimer_Mask',
    image: require('../../Media/Images/ROR/Persons/Mortimer_Mask.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Martha',
    image: require('../../Media/Images/ROR/Persons/Martha.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Joanne',
    image: require('../../Media/Images/ROR/Persons/Joanne.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Vig',
    image: require('../../Media/Images/ROR/Persons/Vig.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Jack',
    image: require('../../Media/Images/ROR/Persons/Jack.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Otto',
    image: require('../../Media/Images/ROR/Persons/Otto.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Horse',
    image: require('../../Media/Images/ROR/Objects/Horse.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Carete',
    image: require('../../Media/Images/ROR/Objects/Carete.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  },
  {
    id: 'ROR_Moneybag',
    image: require('../../Media/Images/ROR/Objects/Moneybag.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ROR, 'Chapter01Part01Completed')
  }
])
