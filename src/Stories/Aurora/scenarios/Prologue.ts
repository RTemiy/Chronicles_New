import { saveEndProgress, scenarioManager } from '../../../index'
import { EStoriesEn } from '../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.Aurora, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
			`
        Моя дорогая Далия. Как у тебя дела? Ты все еще вспоминаешь меня? А наши беззаботные деньки, наполненные смехом и в одночасье тяжелым грузом бремени, что резко обрушилось на нас?
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../Sounds/Aurora/Aurora.mp3'),
    imageBorder: require('../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 1,
    text:
			`
        Знаешь, я все еще бережно храню подаренный тобой сборник стихов Эдгара Аллана По. Перечивая строки его произведений, каждый раз во мне откликаются те ощущения, что мы когда-то пережили.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageFront: require('../../../Images/Aurora/Items/Poe_Book.png'),
    imageBorder: require('../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 2,
    text:
			`
        Я все больше начинаю понимать тебя: твои мысли, твою печаль и страхи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageFront: require('../../../Images/Aurora/Items/Poe_Book.png'),
    imageBorder: require('../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 3,
    text:
			`
        <i>Я стою на берегу,<p><i>Бурю взором стерегу.<p><i>И держу в руках своих<p><i>Горсть песчинок золотых.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    message: 'Эдгар По — “Сон во сне”',
    imageFront: require('../../../Images/Aurora/Items/Poe_Book.png'),
    imageBorder: require('../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 4,
    text:
			`
        <i>Как их бег мне задержать,<p><i>Как сильнее руки сжать?<p><i>Сохранится ль хоть одна,<p><i>Или все возьмёт волна?<p><i>Или то, что зримо мне,<p><i>Всё есть только сон во сне?
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 5,
    text:
			`
        Мои мысли идут сплошным потоком. Я стольким хочу поделиться с тобой. Но торопиться некуда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageFront: require('../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: 0, category: 'Person', id: 'Aurora' }],
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 6,
    text:
			`
        Сейчас, сидя на любимой скамейке, обдуваемая морскими ветрами, я переношу свою жизнь на бумагу. Свое прошлое, настоящее, те моменты, что мы прожили бок о бок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: require('../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 7,
    text:
			`
        Цель очень проста — помнить. Помнить каждую деталь, каждую эмоцию и те выборы, которые привели нас к этому исходу. Я никогда не прощу себя, если хоть что-то упущу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 8,
    text:
			`
        Милая Далия, я безмерно счастлива писать в этом дневнике. Местами может быть сумбурно, но я остаюсь верна себе. Как ты меня когда-то учила — быть собой и не стараться выстраивать образ человека, которым я не являюсь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 9,
    text:
			`
        Ну, хватит лирики. Я думаю, ты запомнила меня как всегда улыбающейся девочкой, которая хотела покорить высокие горы. Ведь именно такой я стала благодаря тебе. Пусть так оно и будет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 10,
    text:
			`
        Начну издалека. Бушующая подростковая жизнь, затем завораживающая юность. <s>И будущее?
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },

  {
    id: 12,
    text:
      `
      `,
    buttons: [
      {
        text: ''
      }],
    cutScene: { image: require('../../../Images/Aurora/Backgrounds/Bench.jpg'), goTo: 13 },
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg')
  },
  {
    id: 13,
    text:
			`
        Твоя Аврора начинает свой рассказ. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 1', '0')
        }
      }],
    imageFront: require('../../../Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../Images/Aurora/UI/Border.png'),
    imageBack: require('../../../Images/Aurora/Backgrounds/Bench.jpg'),
    achievement: { story: EStoriesEn.Aurora, name: 'PrologueCompleted' }
  }
])
