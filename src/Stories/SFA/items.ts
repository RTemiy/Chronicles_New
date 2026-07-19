import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Pendant',
  name: 'Кулон',
  image: require('../../Media/Images/SFA/Items/Pendant.png'),
  title: 'Серебряное украшение — дар Кастиэля.',
  description: 'Символ его чувств, хрупкое напоминание о светлом будущем. Я буду беречь его как частицу надежды.',
  story: EStoriesEn.SFA
})

statsManager.add({
  category: 'Item',
  id: 'Key',
  name: 'Ключ',
  image: require('../../Media/Images/SFA/Items/Key.png'),
  title: 'Фамильная ценность, переданная Сильвией перед смертью.',
  description: 'Открывает тайник в кабинете отца — там спрятан его дневник с сокровенными тайнами.',
  story: EStoriesEn.SFA
})
