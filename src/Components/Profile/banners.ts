import { profileManager } from './Profile'

profileManager.addBanners([
  {
    id: 'Default',
    image: require('../../Images/UI/border_invisible.png'),
    condition: () => true
  }
])
