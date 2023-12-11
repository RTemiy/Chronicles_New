import { scenarioManager } from '../../../index'
import { EStoriesEn } from '../../../Utils/EStoriesNames'

scenarioManager.addScenario(EStoriesEn.FOF, 'Глава 1', 'Пролог', '0', [
  {
    id: 0,
    text: `
    — Мне так не терпится выступить на игре, — сказала Эйприл, радостно улыбнувшись. 
    <p>Я полностью разделяла мнение одноклассницы, ведь от финального танца зависела судьба команды, и в большей степени — их капитана — сексуального красавчика Дерека Росса, моего парня. 
`,
    buttons: [
      {
        text: '',
        goTo: 1
      }
    ],
    imageBack: require('../../../Images/FOF/Backgrounds/School_Corridor.jpg'),
    music: require('../../../Sounds/FOF/Whisper.mp3')
  },
  {
    id: 1,
    text: `
   — Нет, ну серьезно, играть роль болельщиц — это одно, а вот смотреть на парней — другое. Да и кто запретит? А еще все они в отличной форме, — размечталась она. — Нам ведь семнадцать, мы должны отрываться по полной. Тебе, конечно, повезло больше. 
   <p>— Дерек без сомнения крутой. Именно такой мне и нужен. Какая королева будет встречаться с лузером?
`,
    buttons: [
      {
        text: '',
        goTo: 0
      }
    ],
    imageBack: require('../../../Images/FOF/Backgrounds/School_Corridor.jpg'),
    imageFront: require('../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png')
  }
])
