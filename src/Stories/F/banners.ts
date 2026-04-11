import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'F_Market',
    image: require('../../Media/Images/F/Backgrounds/Christmas_Market.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'GoHigh')
  },
  {
    id: 'F_Tent',
    image: require('../../Media/Images/F/Backgrounds/Inside_Tent.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'GoDarkDeep')
  },
  {
    id: 'F_Neva_Evening',
    image: require('../../Media/Images/F/Backgrounds/Neva.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'PrologueCompleted')
  },
  {
    id: 'F_Church',
    image: require('../../Media/Images/F/Backgrounds/Orthodox_Church.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'PrologueCompleted')
  }
])

profileManager.addBanners([
  {
    id: 'F_BusPark',
    image: require('../../Media/Images/F/Backgrounds/Buses_Night.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'Soulmate')
  }
])

profileManager.addBanners([
  {
    id: 'F_AliceBedroom',
    image: require('../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'Witch_Hug')
  }
])

profileManager.addBanners([
  {
    id: 'F_PtrsbrgM',
    image: require('../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'Colleges')
  }
])

profileManager.addBanners([
  {
    id: 'F_WitchRoom',
    image: require('../../Media/Images/F/Backgrounds/Room_Witch.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.F, 'NoTime')
  }
])
