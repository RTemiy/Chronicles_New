import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'UL_Cafe',
    image: require('../../Images/UL/Backgrounds/Cafe.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Rooftop',
    image: require('../../Images/UL/Backgrounds/Rooftop.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Icerink_Far',
    image: require('../../Images/UL/Backgrounds/Icerink_Far.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Icerink_Near',
    image: require('../../Images/UL/Backgrounds/Icerink_Near.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Library',
    image: require('../../Images/UL/Backgrounds/Library.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Fade',
    image: require('../../Images/UL/Backgrounds/Fade.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Hospital_Room',
    image: require('../../Images/UL/Backgrounds/Hospital_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Procedural',
    image: require('../../Images/UL/Backgrounds/Procedural.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  }
])
