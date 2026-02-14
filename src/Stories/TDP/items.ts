import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Item',
  id: 'Bag',
  name: 'Рюкзак',
  image: require('../../Media/Images/TDP/Items/Bag.png'),
  title: 'Потертый, небольшой, покрытый несколькими маленькими дырами.',
  description: 'Я путешествую с ним уже очень давно, и он сослужил мне хорошую службу.',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Item',
  id: 'Dagger',
  name: 'Кинжал',
  image: require('../../Media/Images/TDP/Items/Dagger.png'),
  title: 'Небольшое оружие из восточной стали.',
  description: 'Практичное. Досталось мне от отца. Благодаря ему я все еще жив.',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Item',
  id: 'Sugar',
  name: 'Сахар',
  image: require('../../Media/Images/TDP/Items/Sugar.png'),
  title: 'Прессованный сладкий кубик.',
  description: 'Используется как лакомство для лошадей. Я сладкое не очень люблю, а им нравится.',
  story: EStoriesEn.TDP
})

statsManager.add({
  category: 'Item',
  id: 'Money',
  name: 'Деньги',
  image: require('../../Media/Images/TDP/Items/Money.png'),
  title: 'Имперская крона.',
  description: 'Государственная валюта страны Крейс.',
  story: EStoriesEn.TDP
})
