import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Cassandra',
  name: 'Кассандра',
  image: require('../../Images/FOF/Persons/Cassandra.png'),
  title: '',
  description: '',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Person',
  id: 'Derek',
  name: 'Дерек',
  image: require('../../Images/FOF/Persons/Derek.png'),
  title: 'Дерек',
  description: 'Капитан школьной команды по футболу. Красавчик, который не теряет время зря. Он знает, чего хочет, и берет от жизни все.',
  story: EStoriesEn.FOF
})

statsManager.add({
  category: 'Person',
  id: 'April',
  name: 'Эйприл',
  image: require('../../Images/FOF/Persons/April.png'),
  title: '',
  description: '',
  story: EStoriesEn.FOF
})
