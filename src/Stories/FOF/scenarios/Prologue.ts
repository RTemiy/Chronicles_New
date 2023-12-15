import { scenarioManager } from '../../../index'
import { EStoriesEn } from '../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        Подумать только, этот день наконец настал! Мне так не терпится выступить на сегодняшней игре! 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../Sounds/FOF/Whisper.mp3'),
    speaker: 'Эйприл',
    imageLeft: require('../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 1,
    text:
      `
        Я полностью разделяла мнение одноклассницы, ведь от финального танца зависела судьба команды, и, в большей степени — их капитана — сексуального красавчика Дерека Росса, моего парня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 2,
    text:
      `
        Нет, ну серьезно, исполнять роль болельщиц — это одно, а вот смотреть на парней — другое. Да и кто запретит? А еще все они в отличной форме. Нам ведь семнадцать, мы должны отрываться по полной. Тебе, конечно, повезло больше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Эйприл',
    imageLeft: require('../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 3,
    text:
      `
        Дерек без сомнения крутой. Именно такой мне и нужен. Какая королева будет встречаться с лузером?
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 4,
    text:
      `
        Ты что, совсем его не любишь? Говоришь так, будто тебе все равно на вас и ваши отношения. Или так и есть?
      `,
    buttons: [
      {
        text: '',
        goTo: 0
      }],
    speaker: 'Эйприл',
    imageLeft: require('../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  }
])
