import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'TDP_Mortimer',
    image: require('../../Images/TDP/Persons/Mortimer_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'PrologueCompleted')
  },
  {
    id: 'TDP_Henriech',
    image: require('../../Images/TDP/Persons/Henriech_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'KeepBag')
  },
  {
    id: 'TDP_Ditrich',
    image: require('../../Images/TDP/Persons/Ditrich_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'ResponseDitrich')
  },
  {
    id: 'TDP_Joanne',
    image: require('../../Images/TDP/Persons/Joanne_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'Zoo')
  },
  {
    id: 'TDP_Martha',
    image: require('../../Images/TDP/Persons/Martha_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'Zoo')
  },
  {
    id: 'TDP_Vig',
    image: require('../../Images/TDP/Persons/Vig_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'Zoo')
  },
  {
    id: 'TDP_Jack',
    image: require('../../Images/TDP/Persons/Jack_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'TakeJacksMoney')
  },
])
