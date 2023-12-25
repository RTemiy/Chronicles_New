import { profileManager } from './Profile'

profileManager.addAvatars([
  {
    id: 'Default',
    image: require('../../Images/UI/icon_paint.svg'),
    condition: () => true
  },
  {
    id: 'User',
    image: require('../../Images/UI/icon_user.svg'),
    condition: () => true
  },
  {
    id: 'Favourites',
    image: require('../../Images/UI/icon_favourites.svg'),
    condition: () => true
  }
])
