import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

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
    id: 'Immortals_Cheryl',
    image: require('../../Images/Immortals/Persons/Cheryl.png'),
    condition: () => false
  },
  {
    id: 'Immortals_Scarlett',
    image: require('../../Images/Immortals/Persons/Scarlett.png'),
    condition: () => false
  },
  {
    id: 'Immortals_Neitan',
    image: require('../../Images/Immortals/Persons/Neitan.png'),
    condition: () => false
  }
])
