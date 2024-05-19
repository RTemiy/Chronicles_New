import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'BrokenHand',
  name: 'Перелом',
  image: require('../../Images/Immortals/Effects/bone.svg'),
  title: 'Сломанная рука руки',
  description: 'Ранение, которое я получила после стычки с монстром при похищении.',
  showValue: false,
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Effect',
  id: 'Study',
  name: 'Учеба',
  image: require('../../Images/UI/icon_stories.svg'),
  title: 'Успеваемость в университете',
  description: 'Вопреки обстоятельствам не стоит забрасывать учебу, ведь от этого зависит мое будущее.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Effect',
  id: 'SupportNicola',
  name: 'Помощь',
  image: require('../../Images/Immortals/Effects/addiction.svg'),
  title: 'Помощь Николе',
  description: 'Неужели мне подвластная такая сила? Неужели я могу помочь ему преодолеть любовь к азартным играм?',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Effect',
  id: 'Addiction',
  name: 'Зависимость',
  image: require('../../Images/Immortals/Effects/tablets.svg'),
  title: 'Зависимость',
  description: 'Разные пристрастия, которые вредят организму. Стоит быть осторожным в своих желаниях.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Effect',
  id: 'Family',
  name: 'Семья',
  image: require('../../Images/Immortals/Effects/family.svg'),
  title: 'Семья',
  description: 'Во всем этом хаосе важно не забывать о самых близких людях и помочь им сохранить любовь.',
  story: EStoriesEn.Immortals
})
