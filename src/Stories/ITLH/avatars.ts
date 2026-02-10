import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'
import { loadData } from '../../Functions/localStorageManager'

profileManager.addAvatars([
  {
    id: 'ITLH_Hero',
    image: require('../../Images/ITLH/Persons/Hero_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'PrologueCompleted')
  },
  {
    id: 'ITLH_Guide',
    image: require('../../Images/ITLH/Persons/Guide_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'PrologueCompleted')
  },
  {
    id: 'ITLH_Hero_Pajamas',
    image: require('../../Images/ITLH/Persons/Hero_Pajamas_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Sleeper')
  },
  {
    id: 'ITLH_Neitan',
    image: require('../../Images/ITLH/Persons/Neitan_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Chapter01Part01Completed')
  },
  {
    id: 'ITLH_Scarlett',
    image: require('../../Images/ITLH/Persons/Scarlett_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Chapter01Part01Completed')
  }

])
