import { profileManager } from './Profile'
import { loadData } from '../../Functions/localStorageManager'
import { DEVMODE } from '../../Utils/technicalConsts'

profileManager.addBanners([
  {
    id: 'Demo',
    image: require('../../Media/Images/UI/loadingscreen.jpg'),
    style: 'box-shadow: 0 0 15px 5px #007769',
    condition: () => DEVMODE
  },
  {
    id: 'DEV_OLD_BACK',
    image: require('../../Media/Images/Events/DEV_Banner.png'),
    style: 'object-fit: fill;',
    condition: () => DEVMODE
  },
  {
    id: 'Default',
    image: require('../../Media/Images/UI/border_invisible.png'),
    condition: () => true
  },
  {
    id: 'Promo_Competition_2024_February_14_Banner',
    image: require('../../Media/Images/Events/2024_February_14_Banner.jpg'),
    style: 'box-shadow: 0 0 15px pink; border: 0;',
    condition: () => loadData(['Promo', 'Competition', '2024', 'February', '14']) === '1'
  }
])
