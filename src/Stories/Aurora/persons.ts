import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Aurora',
  name: 'Аврора',
  image: require('../../Images/Aurora/Persons/Aurora.png'),
  title: 'В моей жизни происходит много значимых перемен.',
  description: 'Интересно, какие еще сюрпризы преподнесет судьба? Получится ли у меня преодолеть все трудности?',
  story: EStoriesEn.Aurora
})
