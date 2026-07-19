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

profileManager.addBanners([
  {
    id: 'ITLH_HH',
    image: require('../../Media/Images/ITLH/Backgrounds/House_Hero.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Sleeper')
  },
  {
    id: 'ITLH_LH1',
    image: require('../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'IChooseComfort')
  },
  {
    id: 'ITLH_LH2',
    image: require('../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'GoodGirl')
  },
  {
    id: 'ITLH_UO',
    image: require('../../Media/Images/ITLH/Backgrounds/University.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'CorrectAnswer')
  },
  {
    id: 'ITLH_C1P1',
    image: require('../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Chapter01Part01Completed')
  }
])

profileManager.addBanners([
  {
    id: 'ITLH_C1P2',
    image: require('../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Chapter01Part02Completed')
  },
  {
    id: 'ITLH_C1P2G',
    image: require('../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.ITLH, 'Chapter01Part02Completed')
  }
])
