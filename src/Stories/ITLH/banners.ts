import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'ITLH_GW',
    image: require('../../Media/Images/ITLH/Backgrounds/Guides_World.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'PrologueCompleted')
  },
  {
    id: 'ITLH_TS',
    image: require('../../Media/Images/ITLH/Backgrounds/Tesla_Door.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'PrologueCompleted')
  }

])
