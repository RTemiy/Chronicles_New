import { wardrobe } from '../../index'
import { loadData } from '../../Functions/localStorageManager'

wardrobe.addPerson('Hero', [{
  image: require('../../Images/Immortals/Persons/Hero.png'),
  title: 'Удобная кофта',
  description: 'Просто и со вкусом. В черном всегда чувствуешь себя увереннее',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Persons/Hero_Shirt.png'),
  title: 'Вечная классика',
  description: 'Любимая рубашка, которая прошла со мной через огонь и воду',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Persons/Hero_Purple.png'),
  title: 'Милый свитер',
  description: 'Нет ничего лучше и красивее вещи твоего любимого цвета',
  unlocked: () => { return true }
},
{
  image: require('../../Images/Immortals/Persons/Hero_Clown.png'),
  title: '<p style="color: fuchsia">Клоун',
  description: 'Иногда я провожу праздники с Шерил, это своеобразное хобби',
  unlocked: () => { return loadData(['Promo', 'ClownAvatar']) === '1' }
}
])
