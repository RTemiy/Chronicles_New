import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { saveData } from '../../../../Functions/localStorageManager'
import { whiteFlash } from '../../../../Components/Slide/Slide'
import { askForInput } from '../../../../Components/TextInput/TextInput'
import { firstChoiceMessage, inventoryMessage, previousSlideMessage } from '../../../../Utils/textConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.ITLH, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        — Здравствуй! Мы снова встретились. Полагаю, ты меня не помнишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/ITLH/Theme_Guide.mp3'),
    speakerR: 'Неизвестный',
    blurredSilhouette: true,
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World_Blurred.jpg')
  },

  {
    id: 1,
    text:
      `
        В голосе незнакомца мелькнула усмешка. Он продолжил:
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World_Blurred.jpg')
  },

  {
    id: 2,
    text:
      `
        — Я проводник и явился, чтобы напомнить об участи этого мира и почему твои решения определят его судьбу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    blurredSilhouette: true,
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World_Blurred.jpg')
  },

  {
    id: 3,
    text:
      `
        — Будь то спасение или уничтожение — выбор только за тобой. Думаю, нам есть что обсудить. Можешь задать любые вопросы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speakerR: 'Проводник',
    blurredSilhouette: true,
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World_Blurred.jpg')
  },

  {
    id: 80,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    parallax: 'left',
    interruptiveFrame: { goTo: 4 },
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 4,
    text:
      `
        Я медленно открыла глаза. Первое время мозг не мог воспринять место, в котором очутился. Мистические свечения, давящая пустота, пробирающая до мурашек.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 5,
    text:
      `
        Вокруг неестественно парили каменные глыбы, не поддаваясь никаким законам физики.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 6,
    text:
      `
        Я ощущала себя бестелесным существом, которое барахтается в просторах вселенной. Абсолютно беззащитна, будто бы любое дуновение сбросит с вершины, и жизнь оборвется.  
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 81,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 7 },
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 7,
    text:
      `
        Взгляд зацепился за таинственную фигуру, укутанную в серый плащ. В голове строились логические цепочки, основанные на его высказываниях — он наблюдатель. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 8,
    text:
      `
        Тот, кто расскажет все секреты этого мира и поможет выбраться отсюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 9,
    text:
      `
        Однако проводник ничего не предпринимал, видимо, терпеливо дожидаясь, пока я решусь завязать разговор.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 10,
    text:
      `
        Попытавшись вспомнить хоть какие-то фрагменты своей жизни, ужаснулась от осознания полного забвения.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero_Scared.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 11,
    text:
      `
        Пришлось начать с малого и задать до боли простой вопрос:
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 12,
    text:
      `
         Как меня зовут?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          askForInput('Как меня зовут?', 'Лора', (value) => {
            scenarioManager.beginScene(13)
            saveData([EStoriesEn.ITLH, 'Name'], [value])
          })
        }
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 13,
    text:
      `
        Из-под капюшона продолжала проглядывать ухмылка. Возникало ощущение, что собеседника забавляет происходящее.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide_Smirk.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 14,
    text:
      `
        — Тебя зовут $Имя Игрока$. И почему всем всегда так важно помнить свое имя…
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 15,
    text:
      `
        Я задумалась. Во мне заиграло любопытство или страх потерять личность? 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 16,
    text:
      `
        — Это же часть тебя… поэтому…
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 17,
    text:
      `
        Проводник выставил ладонь вперед, перебивая высказывание.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 18,
    text:
      `
        — Брось! У меня, например, нет имени. Чтобы что-то из себя представлять, за нас должны говорить деяния, а не придуманные клички.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 19,
    text:
      `
        «Кажется, или я слышу в его голосе надменность? К черту, все равно нахожусь в довольно безвыходном положении. Не хочу ничего доказывать».
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 20,
    text:
      `
        Становилось страшно. На первый взгляд <i>сказочная картина</i> начала разрушаться под натиском скрытой от взора фигуры проводника.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 21,
    text:
      `
        «У него образ средневекового монаха. К тому же ведет себя как преисполнившееся в познании существо».
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 22,
    text:
      `
        И тут мое тело дернулось, словно его прошиб небольшой разряд тока.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 23,
    text:
      `
        «А если я столкнулась с Богом?»
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero_Scared.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 24,
    text:
      `
        «Нужно перебороть себя и продолжить беседу. Это шанс понять, как отсюда выбраться и что происходит». 
      `,
    buttons: [
      {
        text: 'Сколько мне лет?',
        goTo: 25,
        func: () => {
          scenarioManager.changeSceneButtonStatus(24, 0, false)
          scenarioManager.manageDialog(24, [0, 1, 2], [3])
        }
      },
      {
        text: 'Где я родилась?',
        goTo: 34,
        func: () => {
          scenarioManager.changeSceneButtonStatus(24, 1, false)
          scenarioManager.manageDialog(24, [0, 1, 2], [3])
        }
      },
      {
        text: 'Я умерла?',
        goTo: 43,
        func: () => {
          scenarioManager.changeSceneButtonStatus(24, 2, false)
          scenarioManager.manageDialog(24, [0, 1, 2], [3])
        }
      },
      {
        text: 'Продолжить',
        goTo: 50,
        isActive: false
      }],
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(24)
    },
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 25,
    text:
      `
        Всего на секунду проводник задумался, а затем уверенно ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 26,
    text:
      `
        — Двадцать два. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 27,
    text:
      `
        Но сознание не реагировало на новую информацию. Будто на него навесили черный заслон, и все, что я могла — слепо верить словам неизвестного.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 28,
    text:
      `
        — Откуда ты располагаешь знаниями обо мне?
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 29,
    text:
      `
        — Таково предназначение. Знать и видеть обо всем, что происходит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 30,
    text:
      `
        — Не веришь? Вот несколько хаотичных фактов о тебе: пытаешься бросить курить, есть собака по имени Чарли, любимый цвет — фиолетовый, мать изменяет отцу…
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide_Smirk.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 31,
    text:
      `
        Хотелось буквально взорваться от переполнявших эмоций. И я сорвалась на крик:
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 32,
    text:
      `
        — Прекрати! Не может быть правдой! Таких воспоминания у меня нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero_Scared.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 33,
    text:
      `
        — Это пока…
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(24, 33)
    },
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 34,
    text:
      `
        Фигура в плаще развела руками и проговорила:
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 35,
    text:
      `
        — В Обычном городе, в обычном доме, в обычной семье. К чему это? Ты уже нафантазировала себе, что дочь серафима? Или, быть может, принцесса?
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    message: 'Серафим — высший ангельский чин, наиболее приближенный к Богу.',
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 36,
    text:
      `
        Я ожидала большей конкретики, но, видимо, проводник решил иначе.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 37,
    text:
      `
        «Испытывает мое терпение?»
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 38,
    text:
      `
        — Что это за место?
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 39,
    text:
      `
        — Место, где все началось. Место, где все закончится. Я надеюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 40,
    text:
      `
        Обреченно вздохнув, подняла руки вверх, показывая, что сдаюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 41,
    text:
      `
        — Ты всегда будешь говорить загадками?
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 42,
    text:
      `
        — Нет, только когда это уместно.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(24, 42)
    },
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 43,
    text:
      `
        Проводник разразился смехом.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 44,
    text:
      `
        — Бинго! Никогда еще не ошибался. Вопрос всегда актуален.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide_Smirk.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 45,
    text:
      `
        — А какой еще вопрос может быть тут уместен? Когда кажется, что ты выглядишь как жнец, готовящийся отправить меня в преисподнюю.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 46,
    text:
      `
        — Настолько ли я страшен?
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 47,
    text:
      `
        — Что мне ожидать от… От существа, которое скрывает лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 48,
    text:
      `
        — О! Так в этом дело. Поумерь любопытство и перестань выдумывать. Все несколько иначе. А вероятно даже — проще.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 49,
    text:
      `
        Проводник скрестил руки на груди, как бы давая понять, что тема закрыта, и стоит перейти к другой.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(24, 49)
    },
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 50,
    text:
      `
        — Предлагаю закончить. Понимаю, тебе хочется спросить о многом, но время не ждет. Готова продолжить?
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 51,
    text:
      `
        Я кивнула, немного поежившись. Неожиданно смогла почувствовать… холод?  Или это были ощущения, которые когда-то переживала? 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 52,
    text:
      `
        Загадочный собеседник заметил мое состояние и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 53,
    text:
      `
        — Ты не можешь здесь мерзнуть, постарайся отпустить человеческое восприятие.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 54,
    text:
      `
        И я…
      `,
    buttons: [
      {
        text: 'Послушалась его',
        goTo: 55
      },
      {
        text: 'Продолжала замерзать',
        goTo: 62
      }],
    message: firstChoiceMessage,
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 55,
    text:
      `
        По совету нового знакомого, попыталась абстрагироваться, представляя себя бесформенным нечто, не способным воспринимать прежние эмоции и чувства.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 56,
    text:
      `
        Проводник удовлетворительно кивнул и проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 57,
    text:
      `
        — Здесь нам ничто не может угрожать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    message: 'Проводнику приятна ваша вера в его слова.',
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Guide' }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 58,
    text:
      `
        — Только если бренное существование…
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 59,
    text:
      `
        Когда он произносил фразу, его голос дрогнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 60,
    text:
      `
        «Не похоже на очередной спектакль. Должно быть ему правда одиноко».
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 61,
    text:
      `
        — Но не стоит об этом.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 62,
    text:
      `
        Не смогла бороться с собой. Забытые чувства брали верх. Тело стало еще сильнее дрожать, и я начала осознавать, как теряюсь в темном, мрачном хаосе.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 63,
    text:
      `
        — Не могу…  Не понимаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero_Scared.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 64,
    text:
      `
        Проводник, до этого стоявший на одном месте, подошел и положил ладонь мне на плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 65,
    text:
      `
        «Тепло…»
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 66,
    text:
      `
        Постепенно контроль над ситуацией возвращался, и я смогла облегченно вздохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 67,
    text:
      `
        — Люди такие люди… Теперь, позволь, покажу дорогу к твоему прошлому.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: 0, category: 'Person', id: 'Guide' }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Guides_World.jpg')
  },

  {
    id: 68,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 69 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 69,
    text:
      `
        Проводник развел руками и перед нами возникла потрепанная временем арка с дверными створками, которая периодически мерцала.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    message: inventoryMessage,
    imageBack: require('../../../../Images/ITLH/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 70,
    text:
      `
        Свет отвлекал, я не могла заглянуть внутрь и разглядеть, куда ведет проход. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 71,
    text:
      `
        Однако на миг показалось, что там кипит настоящая жизнь: звонкий мужской голос со странным акцентом ведет споры про выпечку, грохот колес по каменной мостовой; одним словом — звуки большого города.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/ITLH/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 72,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    cutScene: { video: require('../../../../Images/ITLH/Cutscenes/FaceTheFaith.mp4'), goTo: 73 },
    imageBack: require('../../../../Images/ITLH/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 73,
    text:
      `
        — Ты готова?
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speakerR: 'Проводник',
    fullscreenObjectR: require('../../../../Images/ITLH/Persons/Guide.png'),
    imageBack: require('../../../../Images/ITLH/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 74,
    text:
      `
        Я неуверенно кивнула, следуя за таинственным гостем в неизвестность.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ITLH', 'Глава 1', 'Часть 1', '0')
        }
      }],
    fullscreenObjectL: require('../../../../Images/ITLH/Persons/Hero.png'),
    achievement: { story: EStoriesEn.ITLH, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/ITLH/Backgrounds/Tesla_Door.jpg')
  }
])
