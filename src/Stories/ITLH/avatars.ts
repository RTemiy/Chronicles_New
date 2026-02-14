import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'
import { loadData } from '../../Functions/localStorageManager'

profileManager.addAvatars([
  {
    id: 'ITLH_Hero',
    image: require('../../Media/Images/ITLH/Persons/Hero_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'PrologueCompleted')
  },
  {
    id: 'ITLH_Clown',
    style: `
        border: 0;
        outline: 0;
        box-shadow: inset 0 0 5px fuchsia, 0 0 5px fuchsia; 
        background-image: radial-gradient(#fafafa 20%, transparent 20%);
        background-color: #e53935;
        background-position: 40px 40px;
        background-size: 50px 50px;`,
    image: require('../../Media/Images/ITLH/Persons/Hero_Clown_Avatar.png'),
    condition: () => { return loadData(['Promo', 'ClownAvatar']) === '1' }
  },
  {
    id: 'ITLH_Guide',
    image: require('../../Media/Images/ITLH/Persons/Guide_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'PrologueCompleted')
  },
  {
    id: 'ITLH_Hero_Pajamas',
    image: require('../../Media/Images/ITLH/Persons/Hero_Pajamas_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Sleeper')
  },
  {
    id: 'ITLH_Neitan',
    image: require('../../Media/Images/ITLH/Persons/Neitan_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Chapter01Part01Completed')
  },
  {
    id: 'ITLH_Scarlett',
    image: require('../../Media/Images/ITLH/Persons/Scarlett_Avatar.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Chapter01Part01Completed')
  }

])
