import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Knowledge',
  name: 'Знание',
  image: require('../../Images/ITLH/Effects/Knowledge.png'),
  title: 'Чем лучше учусь, тем шире возможности.',
  description: 'Повышая успеваемость, я могу глубже погрузиться в исторические эпохи, открывать новые грани и обрести способность изменять окружающий мир.',
  story: EStoriesEn.ITLH
})
