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
    image: require('../../Images/UI/loadingscreen.jpg'),
    style: 'box-shadow: 0 0 15px 5px #007769',
    condition: () => loadData(['Promo', 'DemoBanner']) === '1'
  },
  {
    id: 'Promo_Competition_2024_February_14_Banner',
    image: require('../../Images/Events/2024_February_14_Banner.jpg'),
    style: 'box-shadow: 0 0 15px pink; border: 0;',
    condition: () => loadData(['Promo', 'Competition', '2024', 'February', '14']) === '1'
  }
])
