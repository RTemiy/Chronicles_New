import { achievementsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

achievementsManager.add({
  name: 'PrologueCompleted',
  image: require('../../Media/Images/PFT/Achievements/PrologueCompleted.png'),
  title: 'Крушение надежд',
  text: 'Вы нащупали дно. Теперь Вам есть, от чего оттолкнуться',
  story: EStoriesEn.PFT
})

achievementsManager.add({
  name: 'FriendshipKeeper',
  image: require('../../Media/Images/PFT/Achievements/FriendshipKeeper.png'),
  title: 'Хранитель дружбы',
  text: 'Друга легче потерять, чем найти',
  story: EStoriesEn.PFT
})
