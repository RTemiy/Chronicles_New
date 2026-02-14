import { profileManager } from './Profile'
import { loadData } from '../../Functions/localStorageManager'

profileManager.addAvatars([
  {
    id: 'Default',
    image: require('../../Media/Images/UI/icon_paint.svg'),
    condition: () => true
  },
  {
    id: 'User',
    image: require('../../Media/Images/UI/icon_profile.svg'),
    condition: () => true
  },
  {
    id: 'Favourites',
    image: require('../../Media/Images/UI/icon_favourites.svg'),
    condition: () => true
  },
  {
    id: 'Promo_Competition_2024_February_14_Banner_Amelia',
    image: require('../../Media/Images/UL/Persons/Amelia_Outdoor.png'),
    condition: () => loadData(['Promo', 'Competition', '2024', 'February', '14']) === '1'
  },
  {
    id: 'Promo_Competition_2024_February_14_Banner_Valentina',
    image: require('../../Media/Images/UL/Persons/Valentina_Outdoor.png'),
    condition: () => loadData(['Promo', 'Competition', '2024', 'February', '14']) === '1'
  }
])
