import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'
import { profileManager } from '../../Components/Profile/Profile'

profileManager.addAvatars([
  {
    id: 'Aurora_Aurora',
    image: require('../../Images/Aurora/Persons/Aurora.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'PrologueCompleted')
  },
  {
    id: 'Aurora_PoeBook',
    image: require('../../Images/Aurora/Objects/Poe_Book.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'PrologueCompleted')
  },
  {
    id: 'Aurora_Book',
    image: require('../../Images/Aurora/Objects/Book.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'ChooseWriter')
  },
  {
    id: 'Aurora_Album',
    image: require('../../Images/Aurora/Objects/Album.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'ChooseArtist')
  },
  {
    id: 'Aurora_Walkman',
    image: require('../../Images/Aurora/Objects/Walkman.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'ChooseMusician')
  },
  {
    id: 'Aurora_Dad',
    image: require('../../Images/Aurora/Persons/Dad.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_Arthur',
    image: require('../../Images/Aurora/Persons/Arthur.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  },
  {
    id: 'Aurora_Yan',
    image: require('../../Images/Aurora/Persons/Yan.png'),
    condition: () => achievementsManager.isUnlocked(EStoriesEn.Aurora, 'Chapter01Part01Completed')
  }
])
