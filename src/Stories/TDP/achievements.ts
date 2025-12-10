import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Images/TDP/Achievements/PrologueCompleted.png'),
  title: 'История болезни',
  text: 'С чего все начиналось...',
  story: EStoriesEn.TDP
})
