import { profileManager } from './Profile'
import { loadData } from '../../Functions/localStorageManager'

profileManager.addBanners([
  {
    id: 'Default',
    image: require('../../Images/UI/border_invisible.png'),
    condition: () => true
  },
  {
    id: 'Demo',
    image: require('../../Images/UI/loadingscreen.png'),
    style: 'box-shadow: 0 0 15px 5px #007769',
    condition: () => loadData(['Promo', 'DemoBanner']) === '1'
  }
])
