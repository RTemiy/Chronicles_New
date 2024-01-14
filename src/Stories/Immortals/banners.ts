import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'Immortals_Guides_World',
    image: require('../../Images/Immortals/Backgrounds/Guides_World.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'PrologueCompleted')
  },
  {
    id: 'Immortals_Hero_Room',
    image: require('../../Images/Immortals/Backgrounds/Hero_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_Livingroom',
    image: require('../../Images/Immortals/Backgrounds/Livingroom.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_Hero_House',
    image: require('../../Images/Immortals/Backgrounds/Hero_House.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_House_Toilet',
    image: require('../../Images/Immortals/Backgrounds/House_Toilet.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_Kitchen',
    image: require('../../Images/Immortals/Backgrounds/Kitchen.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_Father_Car',
    image: require('../../Images/Immortals/Backgrounds/Father_Car.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_Bus',
    image: require('../../Images/Immortals/Backgrounds/Bus.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_Taxi',
    image: require('../../Images/Immortals/Backgrounds/Taxi.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_University',
    image: require('../../Images/Immortals/Backgrounds/University.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_University_Toilet',
    image: require('../../Images/Immortals/Backgrounds/University_Toilet.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  },
  {
    id: 'Immortals_Lection_Hall',
    image: require('../../Images/Immortals/Backgrounds/Lection_Hall.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Immortals, 'Chapter01Part01Completed')
  }
])
