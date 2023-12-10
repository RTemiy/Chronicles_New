import { scenarioManager, slide, timer } from '../../../index'
import { EStoriesEn } from '../../../Utils/EStoriesNames'
import { askForInput } from '../../../Components/TextInput/TextInput'

scenarioManager.addScenario(EStoriesEn.Immortals, 'Глава 1', 'Пролог', '0', [
  {
    text: `
    — Здравствуй! Мы снова встретились. Ты, наверное, меня и не помнишь.
    <p>В голосе незнакомца мелькнула усмешка. Он продолжил.
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(1) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.png'),
    music: require('../../../Sounds/Immortals/Prologue.mp3')
  },
  {
    text: `
    — Я проводник и пришел, чтобы напомнить о судьбе этого мира и почему твои решения определят его судьбу. Будь то спасение или уничтожение — выбор только за тобой. Полагаю, есть ряд вопросов, которые стоит обсудить. Задавай.
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(2) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.png')
  },
  {
    text: `
    Я медленно открыла глаза. Первое время мозг не мог воспринять место, в котором я очутилась. Странные свечения, пустота… Вокруг неестественно парили камни, не поддаваясь никаким законам физики.
    <p>“Это не может быть реальностью!”
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(3); timer.set(10, () => { slide.message('Провал') }) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.png'),
    stats: [
      { category: 'Person', id: 'Hero', story: EStoriesEn.Immortals, value: 0 },
      { category: 'Person', id: 'Guide', story: EStoriesEn.Immortals, value: 0 },
      { category: 'Person', id: 'Cheryl', story: EStoriesEn.Immortals, value: 0 },
      { category: 'Item', id: 'Key', story: EStoriesEn.Immortals, value: 1 },
      { category: 'Effect', id: 'BrokenHand', story: EStoriesEn.Immortals, value: 1 }
    ]
  },
  {
    text: `
    Я ощущала себя бестелесным существом, которое барахтается в просторах вселенной. Абсолютно беззащитна, будто бы любое дуновение скинет меня с возвышенности, и моя жизнь оборвется.  
`,
    buttons: [
      { text: 'Правильно', func: () => { scenarioManager.beginScene(4); timer.stop() } },
      { text: 'Неправильно', func: () => { slide.message('О, нет! Выбери другой вариант!') } }
    ],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.png'),
    imageFront: require('../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png')
  },
  {
    text: `
    Взгляд зацепился за таинственную фигуру, укутанную в черный плащ. Я посмотрела на нее, надеясь увидеть спасителя. Того, кто расскажет все секреты этого мира и поможет выбраться отсюда. 
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(5) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.png'),
    imageLeft: require('../../../Images/Immortals/Persons/Guide.png'),
    imageRight: require('../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png')
  },
  {
    text: `
    Однако ответом мне было продолжительное молчание. Незнакомец терпеливо ждал, пока я решусь задать свои вопросы.
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(6) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.png'),
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png')
  },
  {
    text: `
    Я попыталась вспомнить хоть какие-то фрагменты из своей жизни, но пришла в ужас от осознания полного забвения. В голову приходили только самые банальные вопросы. 
    <p>Робко взглянув на него, тихий голос спросил.
`,
    buttons: [{ text: '', func: () => { askForInput('Как меня зовут?', (value) => { scenarioManager.beginScene(7); localStorage.setItem(EStoriesEn.Immortals + '_Name', value) }) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.png'),
    imageFront: require('../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png')
  },
  {
    text: `
    Из-под капюшона продолжала проглядывать ухмылка. Возникало ощущение, что собеседника забавляет этот вопрос.
    <p>— Тебя зовут $Имя Игрока$. И почему всем всегда так важно помнить свое имя…
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(8) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.png'),
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png')
  },
  {
    text: `
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(0) } }],
    imageBack: require('../../../Images/Immortals/Cards/RobertAdHero.jpg')
  }
])
