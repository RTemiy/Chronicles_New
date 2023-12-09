import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Key',
  name: 'Ключ',
  image: require('../../Images/Immortals/Items/Key.png'),
  title: 'Неизвестный ключ',
  description: 'Я нашла его на сиденье после переписки с Шерил, наверное кто-то забыл. Этот ключ переливается необычным синим оттенком. Интересно, что он открывает..?',
  story: EStoriesEn.Immortals
})
