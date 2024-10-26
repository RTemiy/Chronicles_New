import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Alex',
  name: 'Алекс',
  image: require('../../Images/OTV/Persons/Alex_Prologue.png'),
  title: 'Парень, случайно толкнувший меня на концерте.',
  description: 'А он не так прост как кажется. Вначале точными и ловкими движениями удерживает, а затем добродушно ведет беседу и поступает как джентльмен. За уверенной осанкой, спокойной речью и темным взглядом скрывается своя история, и я должна ее разузнать!',
  showValue: true,
  story: EStoriesEn.OTV
})

statsManager.add({
  category: 'Person',
  id: 'Lina',
  name: 'Лина',
  image: require('../../Images/OTV/Persons/Lina_Streetwear.png'),
  title: 'Доброжелательная девушка.',
  description: 'Улыбчивая и миролюбивая брюнетка, и, к тому же, сестра Алекса. Ее отзывчивости нет предела, как и красоте. Посмотрим, что скрывается за миловидным лицом. ',
  showValue: true,
  story: EStoriesEn.OTV
})
