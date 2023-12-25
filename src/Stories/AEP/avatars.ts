import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'AEP_Hero',
    image: require('../../Images/AEP/Persons/Hero.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.AEP, 'PrologueCompleted')
  },
  {
    id: 'AEP_John',
    image: require('../../Images/AEP/Persons/John.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.AEP, 'PrologueCompleted')
  },
  {
    id: 'AEP_Salvatore',
    image: require('../../Images/AEP/Persons/Salvatore.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.AEP, 'PrologueCompleted')
  },
  {
    id: 'AEP_Bandit_01',
    image: require('../../Images/AEP/Persons/Bandit_01.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.AEP, 'PrologueCompleted')
  },
  {
    id: 'AEP_Bandit_02',
    image: require('../../Images/AEP/Persons/Bandit_02.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.AEP, 'PrologueCompleted')
  }
])
