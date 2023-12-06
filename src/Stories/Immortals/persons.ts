import { statsManager } from '../../index'
import { EStoriesEn } from '../../Utils/EStoriesNames'

statsManager.add({
  category: 'Person',
  id: 'Hero',
  name: '',
  image: require('../../Images/Immortals/Persons/Hero.png'),
  title:
    'В последнее время происходит множество странных событий. Получится ли у меня справится?',
  description:
    'Про себя сложнее всего писать… Студентка, живу с мамой и папой, работаю, пытаясь обеспечить самостоятельную жизнь. ',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Guide',
  name: 'Проводник',
  image: require('../../Images/Immortals/Persons/Stranger.png'),
  title:
    'Его цели и мотивы неясны, но я думаю, он не желает мне зла. Время покажет. ',
  description:
    'Загадочное существо, которое не отвечает прямо на мои вопросы. Однако именно он должен помочь мне в этом путешествии.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Cheryl',
  name: 'Шерил',
  image: require('../../Images/Immortals/Persons/Cheryl.png'),
  title: 'Шерил все реже улыбается… Ее жизни что-то угрожает? ',
  description:
    'Девушка живет в соседнем доме. Мы с ней довольно близко общаемся, часто проводим время вместе. Она мне как сестра.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Scarlett',
  name: 'Скарлетт',
  image: require('../../Images/Immortals/Persons/Scarlett.png'),
  title:
    'Кажется, что в последнее время Скар сама не своя. Могу ли я ей помочь?',
  description:
    'Моя подруга, с которой мы учимся в одном университете. Она умная и довольно активная. Никогда не упустит возможности читать мне нотации.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Neitan',
  name: 'Нэйтан',
  image: require('../../Images/Immortals/Persons/Neitan.png'),
  title: 'Он знаток своего дела и любитель повторять про “важность” учебы.',
  description:
    'Профессор, который уже несколько лет преподает историю в нашем университете. Его харизма и обаяние прекрасно сочетаются с его острым умом.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Nicola',
  name: 'Никола',
  image: require('../../Images/Immortals/Persons/Nicola.png'),
  title: 'Это он? Великий ученый? Я не схожу с ума?',
  description:
    ' Инженер и учёный-физик, изобретатель в области электротехники и радиотехники. “Я не тружусь более для настоящего, я тружусь для будущего.”',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Leon',
  name: 'Леон',
  image: require('../../Images/Immortals/Persons/Leon.png'),
  title: 'Мы снова общаемся с ним, как в старые добрые времена…',
  description:
    'Мой хороший друг, одногруппник, брат профессора Нэйтана. Леон всегда был очень заботлив и внимателен к окружающим. У него большие планы на жизнь, которые он хочет воплотить в ближайшее время.',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Alexander',
  name: 'Александр',
  image: require('../../Images/Immortals/Persons/Antagonist.png'),
  title: 'Странный мужчина, который одержим Катариной.',
  description:
    'Я ничего о нем не знаю. Он определенно внушает страх, но я не могу избавиться от чувства заинтересованности. Мне хочется докопаться до его мотивов. Что я найду в общении с ним? Ответы или только боль?',
  story: EStoriesEn.Immortals
})

statsManager.add({
  category: 'Person',
  id: 'Robert',
  name: 'Роберт',
  image: require('../../Images/Immortals/Persons/Robert.png'),
  title: 'Фиктивный муж Катарины. Называет себя охотником на монстров.',
  description:
    'Этот мужчина определенно играет не последнюю роль во всем происходящем. Возможно только он сможет защитить меня в эпохе Теслы. Хотелось бы надеяться, что он друг…',
  story: EStoriesEn.Immortals
})
