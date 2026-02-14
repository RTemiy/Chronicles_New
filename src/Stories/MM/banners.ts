import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'MM_London_Street',
    image: require('../../Media/Images/MM/Backgrounds/London_Street.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.MM, 'PrologueCompleted')
  },
  {
    id: 'MM_Detective_Cabinet',
    image: require('../../Media/Images/MM/Backgrounds/Detective_Cabinet.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.MM, 'PrologueCompleted')
  },
  {
    id: 'MM_Dark_Entrance',
    image: require('../../Media/Images/MM/Backgrounds/Dark_Entrance.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.MM, 'PrologueCompleted')
  }
])
