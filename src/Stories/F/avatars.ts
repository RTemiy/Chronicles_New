import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'F_Alice_Coat',
    image: require('../../Images/F/Persons/Alice_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'GoHigh')
  },
  {
    id: 'F_OldLady',
    image: require('../../Images/F/Persons/Witch_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'GoDarkDeep')
  },
  {
    id: 'F_Konstantin_Office',
    image: require('../../Images/F/Persons/Konstantin_Office_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'PrologueCompleted')
  },
  {
    id: 'F_Valeria_Office',
    image: require('../../Images/F/Persons/Valeria_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'PrologueCompleted')
  },
  {
    id: 'F_Alice_Skirt',
    image: require('../../Images/F/Persons/Alice_Skirt_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'PrologueCompleted')
  },
  {
    id: 'F_Irina_Brandnew',
    image: require('../../Images/F/Persons/Irina_Brandnew_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'PrologueCompleted')
  }
])
