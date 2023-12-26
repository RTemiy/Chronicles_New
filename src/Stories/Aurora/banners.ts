import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'Aurora_Beach',
    image: require('../../Images/Aurora/Backgrounds/Bench.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'PrologueCompleted')
  },
  {
    id: 'Aurora_Lighthouse',
    image: require('../../Images/Aurora/Backgrounds/Lighthouse.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Part01Completed')
  },
  {
    id: 'Aurora_Suburbs_Bath',
    image: require('../../Images/Aurora/Backgrounds/Suburbs_Bath.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Part01Completed')
  },
  {
    id: 'Aurora_Suburbs_Room',
    image: require('../../Images/Aurora/Backgrounds/Suburbs_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Part01Completed')
  },
  {
    id: 'Aurora_Suburbs_Streets',
    image: require('../../Images/Aurora/Backgrounds/Suburbs_Streets.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Part01Completed')
  },
  {
    id: 'Aurora_School',
    image: require('../../Images/Aurora/Backgrounds/School.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Part01Completed')
  },
  {
    id: 'Aurora_Funeral',
    image: require('../../Images/Aurora/Backgrounds/Funeral.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Part01Completed')
  },
  {
    id: 'Aurora_Lighthouse_House',
    image: require('../../Images/Aurora/Backgrounds/House_Lighthouse.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Part01Completed')
  },
  {
    id: 'Aurora_Observation',
    image: require('../../Images/Aurora/Backgrounds/Observation.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Part01Completed')
  }
])
