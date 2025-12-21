import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'GoHigh',
  image: require('../../Images/F/Achievements/GoHigh.png'),
  title: 'Взмыть вверх',
  text: 'Оттолкнувшись ногами о дно, взлететь',
  story: EStoriesEn.F
})

achievementsManager.add({
  name: 'GoDarkDeep',
  image: require('../../Images/F/Achievements/GoDarkDeep.png'),
  title: 'Провалиться в бездну',
  text: 'И позволить отчаянию себя поглотить',
  story: EStoriesEn.F
})

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Images/F/Achievements/PrologueCompleted.png'),
  title: 'В руках Господа',
  text: 'Найти силы и двигаться дальше',
  story: EStoriesEn.F
})
