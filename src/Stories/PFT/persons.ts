import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Viktor',
  name: 'Виктор',
  image: require('../../Media/Images/PFT/Persons/Viktor_Avatar.png'),
  title: 'Почти бывший муж.',
  description: 'Волевой молодой человек, смог построить небольшой строительный бизнес с нуля в Литл-Роке. Отношения с Венди дали трещину из-за его одержимости контролем.',
  story: EStoriesEn.PFT
})

statsManager.add({
  category: 'Person',
  id: 'Priscilla',
  name: 'Присцилла',
  image: require('../../Media/Images/PFT/Persons/Priscilla_Avatar.png'),
  title: 'Лучшая подруга Венди, с которой они учились в университете.',
  description: 'Лингвист-переводчик с японского в Финиксе. Яркая и экспрессивная девушка, бросила учёбу и скрылась ото всех незадолго до знакомства Венди и Виктора.',
  story: EStoriesEn.PFT
})

statsManager.add({
  category: 'Person',
  id: 'Sharon',
  name: 'Шэрон',
  image: require('../../Media/Images/PFT/Persons/Sharon_Avatar.png'),
  title: 'Старшая сестра Виктора.',
  description: 'Давно наладила успешную систему по управлению «Психиатрической клиникой Святого Вита», уважаема в профессиональных кругах. Считает Венди недостойной своего брата.',
  story: EStoriesEn.PFT
})

/*statsManager.add({
  category: 'Person',
  id: 'Natan',
  name: 'Натан',
  image: require('../../Images/PFT/Persons/Natan_Avatar.png'),
  title: 'Новый, увлечённый своим делом, психиатр клиники Святого Вита.',
  description: 'Вернулся в Литл-Рок после стажировки в Европе по экспериментальной психиатрии. Во время прохождения клинического этапа обучения в медицинской школе имел связь с Шэрон.',
  story: EStoriesEn.PFT
})*/
