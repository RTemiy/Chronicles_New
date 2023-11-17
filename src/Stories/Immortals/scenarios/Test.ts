import { openProgressPart, scenarioManager } from '../../../index'
import { EStoriesEn } from '../../../Utils/EStoriesNames'

scenarioManager.addScenario(EStoriesEn.Immortals, 'Глава 1', 'Пролог', '0', [
  {
    text: `
    - Здравствуй! Мы снова встретились. Ты, наверное, меня и не помнишь.
    <p>В голосе незнакомца мелькнула усмешка. Он продолжил:
    <p>- Я проводник и пришел к тебе напомнить, что ты сделала с этим миром и почему являешься ключом. К спасению или уничтожению - решать только тебе. Полагаю, у тебя много вопросов. Задавай.
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(1) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Abstraction.png'),
    music: require('../../../Sounds/Immortals/Prologue.mp3')
  },
  {
    text: `
    Я медленно открыла глаза. Первое время мозг не мог воспринять место, в котором я очутилась. Странные свечения, пустота… Камни парили неестественно, не поддаваясь никаким законам физики. 
    <p>“Это не может быть реальностью!”
    <p>Я ощущала себя бестелесным существом, которое барахтается в просторах вселенной. Абсолютно беззащитна, будто бы любое дуновение скинет меня с возвышенности и моя жизнь оборвется.
`,
    buttons: [{ text: 'ГГ и Никола', func: () => { scenarioManager.beginScene(2) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Abstraction.png')
  },
  {
    text: `
    Взгляд зацепился за таинственную фигуру, укутанную в черный плащ. Я посмотрела на него, надеясь увидеть в нем спасителя. Того, кто расскажет все секреты этого мира и поможет выбраться отсюда. Однако ответом мне было продолжительное молчание. Незнакомец терпеливо ждал, пока я придумаю вопросы. 
    <p>Я попыталась вспомнить хоть какие-то фрагменты из своего прошлого, но пришла в ужас от осознания полного забвения. В голову приходили только самые банальные вопросы.
    `,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(3) } }],
    imageBack: require('../../../Images/Immortals/Persons/Stranger.png'),
    message: 'Привет',
    music: require('../../../Sounds/Immortals/Chair.mp3')
  },
  {
    text: `
    Я робко взглянула на него и спросила:
    `,
    buttons: [
      { text: 'Как меня зовут?', func: () => { scenarioManager.beginScene(0); scenarioManager.changeSceneButtonStatus(3, 1, true) } },
      { text: 'Сколько мне лет?', func: () => { scenarioManager.beginScene(0) }, isActive: false },
      { text: 'Где я родилась?', func: () => { scenarioManager.beginScene(4) } },
      { text: 'Я умерла?', func: () => { scenarioManager.beginScene(0); scenarioManager.resetSceneButtons(3) } }
    ],
    imageBack: require('../../../Images/Immortals/Persons/Stranger.png')
  },
  {
    text: `
    Это конец
    `,
    buttons: [{
      text: '',
      func: () => {
        openProgressPart('Immortals', 'Глава 1', 'Часть 1', '0')
      }
    }],
    imageBack: require('../../../Images/Immortals/Persons/Cheryl.png'),
    message: 'Все'
  }
])
