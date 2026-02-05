import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'TDP_Mortimer_Cabinet',
    image: require('../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'PrologueCompleted')
  },
  {
    id: 'TDP_Glaswer_Street_Evening',
    image: require('../../Images/TDP/Backgrounds/Glaswer_Street_Evening.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.TDP, 'Chapter01Part01Completed')
  }
])
