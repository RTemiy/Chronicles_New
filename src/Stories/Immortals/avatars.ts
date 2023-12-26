import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'
import { loadData } from '../../Functions/localStorageManager'

profileManager.addAvatars([
  {
    id: 'Immortals_Hero',
    image: require('../../Images/Immortals/Persons/Hero.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'PrologueCompleted')
  },
  {
    id: 'Immortals_Guide',
    image: require('../../Images/Immortals/Persons/Guide.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'PrologueCompleted')
  },
  {
    id: 'Immortals_Scarlett',
    image: require('../../Images/Immortals/Persons/Scarlett.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Part01Completed')
  },
  {
    id: 'Immortals_Neitan',
    image: require('../../Images/Immortals/Persons/Neitan.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Part01Completed')
  },
  {
    id: 'Immortals_Cheryl_Key',
    image: require('../../Images/Immortals/Items/Key.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Part01Completed')
  },
  {
    id: 'Immortals_Cheryl',
    image: require('../../Images/Immortals/Persons/Cheryl.png'),
    condition: () => false
  },
  {
    id: 'Immortals_Hero_Clown',
    image: require('../../Images/Immortals/Persons/Hero_3.png'),
    style: `
        border: 0;
        outline: 0;
        box-shadow: inset 0 0 5px 2px fuchsia, 0 0 5px 2px fuchsia; 
        background-image: radial-gradient(#fafafa 20%, transparent 20%);
        background-color: #e53935;
        background-position: 40px 40px;
        background-size: 50px 50px;`,
    condition: () => loadData(['Promo', 'ClownAvatar']) === '1'
  }
])
