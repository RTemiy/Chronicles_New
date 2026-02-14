import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'FOF_Corridor',
    image: require('../../Media/Images/FOF/Backgrounds/School_Corridor.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Lockers',
    image: require('../../Media/Images/FOF/Backgrounds/Locker_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Gym',
    image: require('../../Media/Images/FOF/Backgrounds/Gym.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Football',
    image: require('../../Media/Images/FOF/Backgrounds/Football_Field.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Restaurant',
    image: require('../../Media/Images/FOF/Backgrounds/Restaurant.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_NightStreets',
    image: require('../../Media/Images/FOF/Backgrounds/Night_Streets.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Facade',
    image: require('../../Media/Images/FOF/Backgrounds/House_Facade.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Hospital_Room',
    image: require('../../Media/Images/FOF/Backgrounds/Hospital_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'Chapter01Part01Completed')
  },
  {
    id: 'FOF_Darkness',
    image: require('../../Media/Images/FOF/Backgrounds/Darkness.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'Chapter01Part01Completed')
  },
  {
    id: 'FOF_Fitness',
    image: require('../../Media/Images/FOF/Backgrounds/Fitness.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'Chapter01Part01Completed')
  },
  {
    id: 'FOF_Abigail_Room',
    image: require('../../Media/Images/FOF/Backgrounds/Abigail_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'Chapter01Part01Completed')
  }
])
