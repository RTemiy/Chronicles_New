import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Hero',
  name: '',
  image: require('../../Media/Images/ITLH/Persons/Hero_Avatar.png'),
  title: 'В последнее время происходит множество странных событий. Получится ли у меня справиться?',
  description: 'Про себя сложнее всего писать… Студентка, живу с мамой и папой, работаю, пытаясь обеспечить самостоятельную жизнь.',
  showValue: false,
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Person',
  id: 'Guide',
  name: 'Проводник',
  image: require('../../Media/Images/ITLH/Persons/Guide_Avatar.png'),
  title: 'Его цели и мотивы неясны, но я думаю, он не желает мне зла. Время покажет. ',
  description: 'Загадочное существо, которое не отвечает прямо на мои вопросы. Однако именно он должен помочь мне в этом путешествии.',
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Person',
  id: 'Cheryl',
  name: 'Шерил',
  image: require('../../Media/Images/ITLH/Persons/Cheryl_Avatar.png'),
  title: 'Она стала все реже улыбаться… Ее жизни что-то угрожает?',
  description: 'Подруга, живущая в соседнем доме. Настоящая мечтательница, участвует в волонтерских проектах. Ее образ мыслей порой кажется необычным, но именно эта уникальность сближает нас еще больше.',
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Person',
  id: 'Scarlett',
  name: 'Скарлетт',
  image: require('../../Media/Images/ITLH/Persons/Scarlett_Avatar.png'),
  title: 'Похоже, в последнее время она сама не своя. Могу ли я помочь?',
  description: 'Лучшая подруга, сокурсница. Умная и энергичная, четко знает, чего хочет добиться в жизни. Не упустит возможность читать нотации о важности учебы.',
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Person',
  id: 'Neitan',
  name: 'Нэйтан',
  image: require('../../Media/Images/ITLH/Persons/Neitan_Avatar.png'),
  title: 'Мы часто общаемся вне занятий благодаря моей дружбе с его братом, однако Нэйтан держит дистанцию.',
  description: 'Обаятельный и харизматичный профессор истории, который преподает в нашем университете. Строго следит за выполнением поставленных задач и поддерживает студентов в их начинаниях.',
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Person',
  id: 'Nicola',
  name: 'Никола',
  image: require('../../Media/Images/ITLH/Persons/Nicola_Avatar.png'),
  title: 'Неужели это он — великий ученый?',
  description: 'Инженер и физик-изобретатель в области электротехники и радиотехники. В прошлом был другом Катарины и имеет определенное отношение к происходящим событиям.',
  story: EStoriesEn.ITLH
})

statsManager.add({
  category: 'Person',
  id: 'Leon',
  name: 'Леон',
  image: require('../../Media/Images/ITLH/Persons/Leon_Avatar.png'),
  title: 'Я рада, что Леон вернулся, и мы снова общаемся.',
  description: 'Лучший друг и брат профессора Нэйтана. Авантюрист с отличным чувством юмора. Внешне легкомыслен, но внутренне сдержан. Всегда готов поддержать близких, независимо от обстоятельств.',
  story: EStoriesEn.ITLH
})


/*

statsManager.add({
  category: 'Person',
  id: 'Robert',
  name: 'Роберт',
  image: require('../../Images/ITLH/Persons/Robert.png'),
  title: 'Фиктивный муж Катарины. Называет себя охотником на монстров.',
  description: 'Этот мужчина определенно играет не последнюю роль во всем происходящем. Возможно только он сможет защитить меня в эпохе Теслы. Хотелось бы надеяться, что он друг…',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Alexander',
  name: 'Александр',
  image: require('../../Images/ITLH/Persons/Antagonist_Mask.png'),
  title: 'Странный мужчина, который одержим Катариной.',
  description: 'Я ничего о нем не знаю. Он определенно внушает страх, но я не могу избавиться от чувства заинтересованности. Мне хочется докопаться до его мотивов. Что я найду в общении с ним? Ответы или только боль?',
  story: EStoriesEn.Immortals
})
*/
