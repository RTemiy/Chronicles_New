import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'UL_Amelia',
    image: require('../../Media/Images/UL/Persons/Amelia_Casual.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Valentina',
    image: require('../../Media/Images/UL/Persons/Valentina_Casual.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Doctor',
    image: require('../../Media/Images/UL/Persons/Doctor_Casual.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_David',
    image: require('../../Media/Images/UL/Persons/David_Casual.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Paul',
    image: require('../../Media/Images/UL/Persons/Paul_Casual.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  }
])
