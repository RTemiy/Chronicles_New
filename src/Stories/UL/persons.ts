import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Valentina',
  name: 'Валентина',
  image: require('../../Media/Images/UL/Persons/Valentina_Casual.png'),
  title: 'Девушка, которая назвалась моей лучшей подругой.',
  description: 'Она кажется милой и заботливой. Я хотела бы больше узнать о наших прошлых взаимоотношениях. Поможет ли она вернуть утраченные воспоминания?',
  story: EStoriesEn.UL
})

statsManager.add({
  category: 'Person',
  id: 'David',
  name: 'Дэвид',
  image: require('../../Media/Images/UL/Persons/David_Casual.png'),
  title: 'Милый парень, назвавший себя моим спасителем.',
  description: 'Его доброта и отзывчивость вселяют надежду на хороший исход. Могу ли я доверять ему?',
  story: EStoriesEn.UL
})

statsManager.add({
  category: 'Person',
  id: 'Doctor',
  name: 'Джозеф',
  image: require('../../Media/Images/UL/Persons/Doctor_Casual.png'),
  title: 'Мой лечащий врач.',
  description: 'Заботливый мужчина, который проявляет ко мне чуть больше внимания, чем положено врачу. Испытывает ли он ко мне чувства?',
  story: EStoriesEn.UL
})

statsManager.add({
  category: 'Person',
  id: 'Paul',
  name: 'Пол',
  image: require('../../Media/Images/UL/Persons/Paul_Casual.png'),
  title: 'Ласковый незнакомец, утверждающий, что он мой парень.',
  description: 'Порой слишком ревнивый, смотрит на меня любящими глазами. Но почему он не торопился найти меня?',
  story: EStoriesEn.UL
})
