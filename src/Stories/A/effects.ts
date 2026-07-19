import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Effect',
  id: 'Moon',
  name: 'Луна',
  image: require('../../Media/Images/A/Effects/Moon.png'),
  title: 'Тень шепчет приказы.',
  description: 'Чем глубже тьма, тем выше ваша власть над древними созданиями.',
  story: EStoriesEn.A
})

statsManager.add({
  category: 'Effect',
  id: 'Sun',
  name: 'Солнце',
  image: require('../../Media/Images/A/Effects/Sun.png'),
  title: 'Свет рассеивает страх.',
  description: 'Пока рядом есть те, кому вы нужны, ваш щит крепок, а исцеление — чисто.',
  story: EStoriesEn.A
})
