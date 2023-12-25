import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addBanners([
  {
    id: 'FOF_Corridor',
    image: require('../../Images/FOF/Backgrounds/School_Corridor.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Lockers',
    image: require('../../Images/FOF/Backgrounds/Locker_Room.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Gym',
    image: require('../../Images/FOF/Backgrounds/Gym.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Football',
    image: require('../../Images/FOF/Backgrounds/Football_Field.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Restaurant',
    image: require('../../Images/FOF/Backgrounds/Restaurant.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_NightStreets',
    image: require('../../Images/FOF/Backgrounds/Night_Streets.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  },
  {
    id: 'FOF_Facade',
    image: require('../../Images/FOF/Backgrounds/House_Facade.jpg'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.FOF, 'PrologueCompleted')
  }
])
