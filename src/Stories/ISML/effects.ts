import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Despair',
  name: 'Безысходность',
  image: require('../../Images/ISML/Effects/Despair.jpg'),
  title: 'Отображает уровень отчаяния и пессимизм Нины.',
  description: 'Влияет на восприятие ситуаций в безвыходную сторону, преобладает чувство, что все идет не так, как хотелось бы.',
  story: EStoriesEn.ISML
})

statsManager.add({
  category: 'Effect',
  id: 'Light',
  name: 'Свет',
  image: require('../../Images/ISML/Effects/Light.jpg'),
  title: 'Символизирует надежду, оптимизм и внутреннюю силу Нины.',
  description: 'Героиня видит больше положительные стороны ситуации, преодолевает трудности с верой в лучшее.',
  story: EStoriesEn.ISML
})
