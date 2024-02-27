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
  },
  {
    id: 'UL_Street_Night',
    image: require('../../Images/UL/Backgrounds/Street_Night.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Big_House',
    image: require('../../Images/UL/Backgrounds/Big_House.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Kitchen',
    image: require('../../Images/UL/Backgrounds/Kitchen.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Flat_Enter',
    image: require('../../Images/UL/Backgrounds/Flat_Enter.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Flat_Livingroom',
    image: require('../../Images/UL/Backgrounds/Flat_Livingroom.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Cafe_Memory',
    image: require('../../Images/UL/Backgrounds/Cafe_Memory.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_Cafe_Night',
    image: require('../../Images/UL/Backgrounds/Cafe_Night.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part02Completed')
  },
  {
    id: 'UL_David_Home',
    image: require('../../Images/UL/Backgrounds/David_Home.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DavidEnding')
  },
  {
    id: 'UL_Car',
    image: require('../../Images/UL/Backgrounds/Car.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DavidEnding')
  },
  {
    id: 'UL_Paul_Home',
    image: require('../../Images/UL/Backgrounds/Paul_Home.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'PaulEnding')
  },
  {
    id: 'UL_Restaurant',
    image: require('../../Images/UL/Backgrounds/Restaurant.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'PaulEnding')
  },
  {
    id: 'UL_Doctor_Home',
    image: require('../../Images/UL/Backgrounds/Doctor_Home.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DoctorEnding')
  },
  {
    id: 'UL_Theatre',
    image: require('../../Images/UL/Backgrounds/Theatre.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DoctorEnding')
  },
  {
    id: 'UL_Garden',
    image: require('../../Images/UL/Backgrounds/Garden.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'DoctorEnding')
  },
  {
    id: 'UL_Publishing',
    image: require('../../Images/UL/Backgrounds/Publishing.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part03Completed')
  },
  {
    id: 'UL_Cinema',
    image: require('../../Images/UL/Backgrounds/Cinema.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.UL, 'Part03Completed')
  }
])
