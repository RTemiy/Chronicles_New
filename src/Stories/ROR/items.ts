import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Money',
  name: 'Деньги',
  image: require('../../Images/ROR/Items/Money.png'),
  title: 'Небольшой мешок для хранения денег',
  description: 'Сбережения, что помогут выжить в нашем приключении.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Bag',
  name: 'Рюкзак',
  image: require('../../Images/ROR/Items/Bag_With_Hole.png'),
  title: 'Походный потрепанный рюкзак с несколькими небольшими дырками',
  description: 'Я решил оставить его. Он еще может мне пригодиться.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Knife',
  name: 'Нож',
  image: require('../../Images/ROR/Items/Knife.png'),
  title: 'Крупный нож из восточной стали',
  description: 'Практичное оружие, которое досталось мне от отца. Без него я не путешествую.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Sugar',
  name: 'Сахар',
  image: require('../../Images/ROR/Items/Sugar.png'),
  title: 'Заморский десерт, спрессованный в кубик',
  description: 'Небольшое количество лакомств для лошадей.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Letter01',
  name: 'Письмо',
  image: require('../../Images/ROR/Items/Envelope.png'),
  title: 'Таинственное приглашение',
  description: 'Полное описание: Конверт, в котором рассказывается о собрании странных незнакомцев.',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Perfume',
  name: 'Флакон',
  image: require('../../Images/ROR/Items/Perfume.png'),
  title: 'Синяя склянка чарующего запаха',
  description: 'Форма и содержимое вызывает вопросы. Правильно ли я поступил, купив этот предмет?',
  story: EStoriesEn.ROR
})

statsManager.add({
  category: 'Item',
  id: 'Antihangover',
  name: 'Зелье',
  image: require('../../Images/ROR/Objects/Antihangover.png'),
  title: 'Зелье от похмелья',
  description: 'Неприятно пахнущее средство, используемое для выветривания похмелья. ',
  story: EStoriesEn.ROR
})
