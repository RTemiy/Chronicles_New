import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'Aurora_Beach',
    image: require('../../Media/Images/Aurora/Backgrounds/Bench.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'PrologueCompleted')
  },
  {
    id: 'Aurora_Lighthouse',
    image: require('../../Media/Images/Aurora/Backgrounds/Lighthouse.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_Suburbs_Bath',
    image: require('../../Media/Images/Aurora/Backgrounds/Suburbs_Bath.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_Suburbs_Room',
    image: require('../../Media/Images/Aurora/Backgrounds/Suburbs_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_Suburbs_Streets',
    image: require('../../Media/Images/Aurora/Backgrounds/Suburbs_Streets.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_School',
    image: require('../../Media/Images/Aurora/Backgrounds/School.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_Funeral',
    image: require('../../Media/Images/Aurora/Backgrounds/Funeral.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_Lighthouse_House',
    image: require('../../Media/Images/Aurora/Backgrounds/House_Lighthouse.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_Observation',
    image: require('../../Media/Images/Aurora/Backgrounds/Observation.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  }
])
