import { scenarioManager, slide, timer } from '../../../index'
import { EStoriesEn } from '../../../Utils/EStoriesNames'
import { askForInput } from '../../../Components/TextInput/TextInput'

scenarioManager.addScenario(EStoriesEn.Immortals, 'Глава 1', 'Пролог', '0', [
  {
    id: 0,
    text:
      `
        — Здравствуй! Мы снова встретились. Ты, наверное, меня и не помнишь.<p>В голосе незнакомца мелькнула усмешка. Он продолжил.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(1)
        }
      }],
    music: require('../../../Sounds/Immortals/Guide.mp3'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 1,
    text:
      `
        — Я проводник и пришел, чтобы напомнить о судьбе этого мира и почему твои решения определят его судьбу. Будь то спасение или уничтожение — выбор только за тобой. Полагаю, есть ряд вопросов, которые стоит обсудить. Задавай.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(2)
        }
      }],
    message: 'Внизу на панели нажмите на стрелочку, чтобы посмотреть текст предыдущего слайда',
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 2,
    text: `
    Я медленно открыла глаза. Первое время мозг не мог воспринять место, в котором я очутилась. Странные свечения, пустота… Вокруг неестественно парили камни, не поддаваясь никаким законам физики.
    <p>“Это не может быть реальностью!”
`,
    buttons: [{ text: '', func: () => { scenarioManager.beginScene(3); timer.set(10, () => { slide.message('Провал') }) } }],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg'),
    stats: [
      { category: 'Person', id: 'Hero', story: EStoriesEn.Immortals, value: 0 },
      { category: 'Person', id: 'Guide', story: EStoriesEn.Immortals, value: 0 },
      { category: 'Person', id: 'Cheryl', story: EStoriesEn.Immortals, value: 0 },
      { category: 'Person', id: 'Scarlett', story: EStoriesEn.Immortals, value: 0 },
      { category: 'Person', id: 'Neitan', story: EStoriesEn.Immortals, value: 0 },
      { category: 'Item', id: 'Key', story: EStoriesEn.Immortals, value: 1 },
      { category: 'Effect', id: 'BrokenHand', story: EStoriesEn.Immortals, value: 1 }
    ]
  },
  {
    id: 3,
    text: `
    Я ощущала себя бестелесным существом, которое барахтается в просторах вселенной. Абсолютно беззащитна, будто бы любое дуновение скинет меня с возвышенности, и моя жизнь оборвется.  
`,
    buttons: [
      { text: 'Правильно', func: () => { scenarioManager.beginScene(4); timer.stop() } },
      { text: 'Неправильно', func: () => { slide.message('О, нет! Выбери другой вариант!') } }
    ],
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg'),
    imageFront: require('../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png')
  },

  {
    id: 4,
    text:
      `
        Взгляд зацепился за таинственную фигуру, укутанную в черный плащ. Я посмотрела на нее, надеясь увидеть спасителя. Того, кто расскажет все секреты этого мира и поможет выбраться отсюда. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(5)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 5,
    text:
      `
        Однако ответом мне было продолжительное молчание. Незнакомец терпеливо ждал, пока я решусь задать свои вопросы.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(6)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 6,
    text:
      `
        Я попыталась вспомнить хоть какие-то фрагменты из своей жизни, но пришла в ужас от осознания полного забвения. В голову приходили только самые банальные вопросы. <p>Робко взглянув на него, тихий голос спросил.<p> Как меня зовут?
      `,
    buttons: [
      {
        text: '',
        func: () => { askForInput('Как меня зовут?', (value) => { scenarioManager.beginScene(7); localStorage.setItem(EStoriesEn.Immortals + '_Name', value) }) }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 7,
    text:
      `
        Из-под капюшона продолжала проглядывать ухмылка. Возникало ощущение, что собеседника забавляет этот вопрос.<p>— Тебя зовут $Имя Игрока$. И почему всем всегда так важно помнить свое имя…
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(8)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 8,
    text:
      `
        Я задумалась. Во мне заиграло любопытство или страх потерять себя?<p>— Это же часть тебя… я…
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(9)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 9,
    text:
      `
        — Брось, — перебил проводник, — у меня, например, нет имени. Но я вездесущ. Я всегда и везде, а мои деяния говорят сами за себя. Необязательно носить эти придуманные клички, чтобы что-то из себя представлять. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(10)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 10,
    text:
      `
        Стало ясно, что у него слишком большое самомнение. И я решила ничего не доказывать, в своем беззащитном положении.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(11)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 11,
    text:
      `
        Его скрытая фигура, надменный голос вызывали странные ощущения. Неужели я действительно столкнулась с вездесущим богом?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(12)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 12,
    text:
      `
        “Нужно было продолжать беседу. Это мой шанс понять, как отсюда выбраться и что происходит”.
      `,
    buttons: [
      {
        text: 'Сколько мне лет',
        func: () => {
          scenarioManager.changeSceneButtonStatus(12, 0, false)
          scenarioManager.manageDialog(12, [0, 1, 2], [3])
          scenarioManager.beginScene(13)
        }
      },
      {
        text: 'Где я родилась?',
        func: () => {
          scenarioManager.changeSceneButtonStatus(12, 1, false)
          scenarioManager.manageDialog(12, [0, 1, 2], [3])
          scenarioManager.beginScene(16)
        }
      },
      {
        text: 'Я умерла?',
        func: () => {
          scenarioManager.changeSceneButtonStatus(12, 2, false)
          scenarioManager.manageDialog(12, [0, 1, 2], [3])
          scenarioManager.beginScene(19)
        }
      },
      {
        text: 'Продолжить',
        func: () => {
          scenarioManager.beginScene(22)
        },
        isActive: false
      }
    ],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg'),
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(12)
    }
  },

  {
    id: 13,
    text:
      `
			Всего на секунду проводник задумался, а затем уверенно ответил:<p>— Двадцать два. 
      <p>Я хотела вспомнить, хоть что-нибудь о своей жизни, но сознание не отзывалось. Как будто на него навесили черный заслон, и все что я могла — это слепо верить его словам, хватать остатки былых ощущений.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(14)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 14,
    text:
      `
        — Ты меня знаешь… Откуда?<p>— Таково мое предназначение. Знать и видеть все, что происходит. Если тебе все еще интересно прошлое, то вот несколько хаотичных фактов о нем: пытаешься бросить курить, собака по имени Чарли, любимый цвет — фиолетовый, мать изменяет отцу…
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(15)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 15,
    text:
      `
        — Прекрати! — я сорвалась на крик. — Это все не может быть правдой. Свою жизнь я не помню.<p>— Это пока…<p>
      `,
    buttons: [
      {
        text: '',
        func: () => {}
      }],
    message: 'Серафим — высший ангельский чин, наиболее приближенный к Богу',
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg'),
    beforeBegin: () => {
      scenarioManager.copySceneButtons(12, 15)
    }
  },

  {
    id: 16,
    text:
      `
			Фигура в плаще развела руками и проговорила:<p>— В Обычном городе, в обычном доме, в обычной семье. К чему это? Ты уже нафантазировала себе, что ты дочь серафима? Или, быть может, принцесса?
      <p>Я ожидала большей конкретики, но, видимо, проводник решил, что делать на этом акцент бессмысленно.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(17)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 17,
    text:
      `
        — Что это за место?<p>— Место, где все началось. Место, где все закончится, я надеюсь.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(18)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 18,
    text:
      `
        — Ты всегда будешь говорить загадками? — я обреченно вздохнула.<p>— Нет, только когда это уместно.<p>
      `,
    buttons: [
      {
        text: '',
        func: () => {}
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg'),
    beforeBegin: () => {
      scenarioManager.copySceneButtons(12, 18)
    }
  },

  {
    id: 19,
    text:
      `
        <p>Проводник разразился смехом.<p>— Бинго! Я всегда жду, когда зададут этот вопрос. <p>— Но ты не ответил… А я и не знаю, что думать. Ты выглядишь как жнец, готовящийся отправить меня в преисподнюю.
        — Настолько ли я страшен?<p>— Что мне ожидать от… — я помедлила, — от существа, которое скрывает свое лицо.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(20)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 20,
    text:
      `
        — О! Так в этом дело. Поумерь любопытство и перестань выдумывать. Все несколько иначе. А вероятно даже — проще.<p>— Я…
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(21)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 21,
    text:
      `
        Проводник скрестил руки на груди, как бы давая понять, что эта тема закрыта, и стоит перейти к другой.
      `,
    buttons: [
      {
        text: '',
        func: () => {}
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg'),
    beforeBegin: () => {
      scenarioManager.copySceneButtons(12, 21)
    }
  },

  {
    id: 22,
    text:
      `
        <p>— На этом мы закончим. Я понимаю, тебе важно вспомнить многое, но время не ждет. Готова ли ты продолжить?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          scenarioManager.beginScene(0)
        }
      }],
    imageFront: require('../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../Images/UI/bottom_border.png'),
    imageBack: require('../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  }
])
