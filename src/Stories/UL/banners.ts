import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'UL_Cafe',
    image: require('../../Media/Images/UL/Backgrounds/Cafe.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Rooftop',
    image: require('../../Media/Images/UL/Backgrounds/Rooftop.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Icerink_Far',
    image: require('../../Media/Images/UL/Backgrounds/Icerink_Far.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Icerink_Near',
    image: require('../../Media/Images/UL/Backgrounds/Icerink_Near.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Library',
    image: require('../../Media/Images/UL/Backgrounds/Library.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Fade',
    image: require('../../Media/Images/UL/Backgrounds/Fade.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Hospital_Room',
    image: require('../../Media/Images/UL/Backgrounds/Hospital_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Procedural',
    image: require('../../Media/Images/UL/Backgrounds/Procedural.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part01Completed')
  },
  {
    id: 'UL_Street_Night',
    image: require('../../Media/Images/UL/Backgrounds/Street_Night.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Big_House',
    image: require('../../Media/Images/UL/Backgrounds/Big_House.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Kitchen',
    image: require('../../Media/Images/UL/Backgrounds/Kitchen.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Flat_Enter',
    image: require('../../Media/Images/UL/Backgrounds/Flat_Enter.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Flat_Livingroom',
    image: require('../../Media/Images/UL/Backgrounds/Flat_Livingroom.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Cafe_Memory',
    image: require('../../Media/Images/UL/Backgrounds/Cafe_Memory.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Cafe_Night',
    image: require('../../Media/Images/UL/Backgrounds/Cafe_Night.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_David_Home',
    image: require('../../Media/Images/UL/Backgrounds/David_Home.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DavidEnding')
  },
  {
    id: 'UL_Car',
    image: require('../../Media/Images/UL/Backgrounds/Car.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DavidEnding')
  },
  {
    id: 'UL_Paul_Home',
    image: require('../../Media/Images/UL/Backgrounds/Paul_Home.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'PaulEnding')
  },
  {
    id: 'UL_Restaurant',
    image: require('../../Media/Images/UL/Backgrounds/Restaurant.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'PaulEnding')
  },
  {
    id: 'UL_Doctor_Home',
    image: require('../../Media/Images/UL/Backgrounds/Doctor_Home.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DoctorEnding')
  },
  {
    id: 'UL_Theatre',
    image: require('../../Media/Images/UL/Backgrounds/Theatre.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DoctorEnding')
  },
  {
    id: 'UL_Garden',
    image: require('../../Media/Images/UL/Backgrounds/Garden.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DoctorEnding')
  },
  {
    id: 'UL_Publishing',
    image: require('../../Media/Images/UL/Backgrounds/Publishing.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part03Completed')
  },
  {
    id: 'UL_Cinema',
    image: require('../../Media/Images/UL/Backgrounds/Cinema.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part03Completed')
  }
])
