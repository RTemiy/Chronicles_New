import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { askForInput } from '../../../../Components/TextInput/TextInput'
import { saveData } from '../../../../Functions/localStorageManager'
import { firstChoiceMessage, inventoryMessage, previousSlideMessage } from '../../../../Utils/TextConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.Immortals, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        — Здравствуй! Мы снова встретились. Ты, наверное, меня и не помнишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/Immortals/Guide.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 1,
    text:
      `
        В голосе незнакомца мелькнула усмешка. Он продолжил.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 2,
    text:
      `
        — Я проводник и пришел, чтобы напомнить о судьбе этого мира и почему твои решения определят его судьбу. Будь то спасение или уничтожение — выбор только за тобой. Полагаю, есть ряд вопросов, которые стоит обсудить. Задавай.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 3,
    text:
      `
        Я медленно открыла глаза. Первое время мозг не мог воспринять место, в котором я очутилась. Странные свечения, пустота… Вокруг неестественно парили камни, не поддаваясь никаким законам физики.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    message: inventoryMessage,
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Hero' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 4,
    text:
      `
        «Это не может быть реальностью!»
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 5,
    text:
      `
        Я ощущала себя бестелесным существом, которое барахтается в просторах вселенной. Абсолютно беззащитна, будто бы любое дуновение скинет меня с возвышенности, и моя жизнь оборвется.  
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 6,
    text:
      `
        Взгляд зацепился за таинственную фигуру, укутанную в черный плащ. Я посмотрела на нее, надеясь увидеть спасителя. Того, кто расскажет все секреты этого мира и поможет выбраться отсюда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 7,
    text:
      `
        Однако ответом мне было продолжительное молчание. Незнакомец терпеливо ждал, пока я решусь задать свои вопросы.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 8,
    text:
      `
        Я попыталась вспомнить хоть какие-то фрагменты из своей жизни, но пришла в ужас от осознания полного забвения. В голову приходили только самые банальные вопросы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 9,
    text:
      `
        Робко взглянув на него, тихий голос спросил:
      `,
    buttons: [
      {
        text: '',
        func: () => {
          askForInput('Как меня зовут?', (value) => {
            scenarioManager.beginScene(11)
            saveData([EStoriesEn.Immortals, 'Name'], [value])
          })
        }
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 11,
    text:
      `
        Из-под капюшона продолжала проглядывать ухмылка. Возникало ощущение, что собеседника забавляет этот вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 12,
    text:
      `
        — Тебя зовут $Имя Игрока$. И почему всем всегда так важно помнить свое имя…
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 13,
    text:
      `
        Я задумалась. Во мне заиграло любопытство или страх потерять себя?
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 14,
    text:
      `
        — Это же часть тебя… я…
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 15,
    text:
      `
        — Брось, — перебил проводник, — у меня, например, нет имени. Но я вездесущ. Я всегда и везде, а мои деяния говорят сами за себя. Необязательно носить эти придуманные клички, чтобы что-то из себя представлять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 16,
    text:
      `
        Стало ясно, что у него слишком большое самомнение. И я решила ничего не доказывать, в своем беззащитном положении.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 17,
    text:
      `
        Его скрытая фигура, надменный голос вызывали странные ощущения. Неужели я действительно столкнулась с вездесущим богом?
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 18,
    text:
      `
        «Нужно было продолжать беседу. Это мой шанс понять, как отсюда выбраться и что происходит».
      `,
    buttons: [
      {
        text: 'Сколько мне лет',
        func: () => {
          scenarioManager.changeSceneButtonStatus(18, 0, false)
          scenarioManager.manageDialog(18, [0, 1, 2], [3])
        },
        goTo: 19
      },
      {
        text: 'Где я родилась?',
        func: () => {
          scenarioManager.changeSceneButtonStatus(18, 1, false)
          scenarioManager.manageDialog(18, [0, 1, 2], [3])
        },
        goTo: 25
      },
      {
        text: 'Я умерла?',
        func: () => {
          scenarioManager.changeSceneButtonStatus(18, 2, false)
          scenarioManager.manageDialog(18, [0, 1, 2], [3])
        },
        goTo: 31
      },
      {
        text: 'Продолжить',
        goTo: 38,
        isActive: false
      }],
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(18)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 19,
    text:
      `
        Всего на секунду проводник задумался, а затем уверенно ответил:<p>— Двадцать два. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 20,
    text:
      `
        Я хотела вспомнить, хоть что-нибудь о своей жизни, но сознание не отзывалось. Как будто на него навесили черный заслон, и все что я могла — это слепо верить его словам, хватать остатки былых ощущений.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 21,
    text:
      `
        — Ты меня знаешь… Откуда?
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 22,
    text:
      `
        — Таково мое предназначение. Знать и видеть все, что происходит. Если тебе все еще интересно прошлое, то вот несколько хаотичных фактов о нем: пытаешься бросить курить, собака по имени Чарли, любимый цвет — фиолетовый, мать изменяет отцу…
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 23,
    text:
      `
        — Прекрати! — я сорвалась на крик. — Это все не может быть правдой. Свою жизнь я не помню.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 24,
    text:
      `
        — Это пока…
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(18, 24)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 25,
    text:
      `
        Фигура в плаще развела руками и проговорила:<p>— В Обычном городе, в обычном доме, в обычной семье. К чему это? Ты уже нафантазировала себе, что ты дочь серафима? Или, быть может, принцесса?
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    message: 'Серафим — высший ангельский чин, наиболее приближенный к Богу',
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 26,
    text:
      `
        Я ожидала большей конкретики, но, видимо, проводник решил, что делать на этом акцент бессмысленно.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 27,
    text:
      `
        — Что это за место?
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 28,
    text:
      `
        — Место, где все началось. Место, где все закончится, я надеюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 29,
    text:
      `
        — Ты всегда будешь говорить загадками? — я обреченно вздохнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 30,
    text:
      `
        — Нет, только когда это уместно.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(18, 30)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 31,
    text:
      `
        Проводник разразился смехом.<p>— Бинго! Я всегда жду, когда зададут этот вопрос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 32,
    text:
      `
        — Но ты не ответил… А я и не знаю, что думать. Ты выглядишь как жнец, готовящийся отправить меня в преисподнюю.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 33,
    text:
      `
        — Настолько ли я страшен?
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 34,
    text:
      `
        — Что мне ожидать от… — я помедлила, — от существа, которое скрывает свое лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 35,
    text:
      `
        — О! Так в этом дело. Поумерь любопытство и перестань выдумывать. Все несколько иначе. А вероятно даже — проще.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 36,
    text:
      `
        — Я…
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 37,
    text:
      `
        Проводник скрестил руки на груди, как бы давая понять, что эта тема закрыта, и стоит перейти к другой.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(18, 37)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 38,
    text:
      `
        — На этом мы закончим. Я понимаю, тебе важно вспомнить многое, но время не ждет. Готова ли ты продолжить?
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 39,
    text:
      `
        Я кивнула, немного поежившись. Я вдруг смогла почувствовать… холод?  Или это были ощущения, которые я когда-то переживала? Мой загадочный собеседник заметил это и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 40,
    text:
      `
        — Ты не можешь здесь замерзнуть, постарайся отпустить свои человеческие чувства.<p>И я…
      `,
    buttons: [
      {
        text: 'Послушалась его',
        goTo: 41
      },
      {
        text: 'Продолжала замерзать',
        goTo: 43
      }],
    message: firstChoiceMessage,
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 41,
    text:
      `
        Я попыталась максимально абстрагироваться, внушая себе, что сейчас я бесформенное нечто, не способное воспринимать прежние эмоции и ощущения.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    message: 'Проводнику приятно, что вы послушались его',
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Guide' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 42,
    text:
      `
        Проводник удовлетворительно кивнул и проговорил:<p>— Здесь нам ничто не может угрожать. Быть может только бренное существование… Одинокое… — с грустью в голосе сказал неизвестный. — Но не стоит об этом.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 43,
    text:
      `
        Мои забытые ощущения брали вверх. Тело стало еще сильнее дрожать, и я начала осознавать, как начинаю теряться в этом темном и мрачном хаосе.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    message: 'Проводник другого и не ожидал…',
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Guide' }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 44,
    text:
      `
        — Я не могу…  Я не понимаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 45,
    text:
      `
        Проводник, до этого стоявший на одном месте, подошел ко мне и положил ладонь мне на плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 46,
    text:
      `
        Постепенно дрожь прошла, а чувства возвращались в норму. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 47,
    text:
      `
        — Люди такие люди, — он отошел от меня, оставив приятное чувство тепла от прикосновения. — Теперь позволь, я покажу тебе дорогу к твоему прошлому.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 48,
    text:
      `
         Проводник развел руками и перед нами возникла потрепанная временем дверь, которая периодически мерцала, словно вспышка. Свет отвлекал, я не могла заглянуть внутрь и разглядеть, куда ведет проход. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 49,
    text:
      `
        Однако на миг мне показалось, что за деревянными створками кипит настоящая жизнь: звонкий мужской голос со странным акцентом что-то говорит про выпечку, грохот колес по каменной мостовой; одним словом — звуки большого города. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 50,
    text:
      `
        — Ты готова?
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Tesla_Door.jpg')
  },

  {
    id: 51,
    text:
      `
        Я неуверенно кивнула, следуя за таинственным гостем в неизвестность.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Immortals', 'Глава 1', 'Часть 1', '0')
        }
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'PrologueCompleted' },
    imageFront: require('../../../../Images/Immortals/Persons/Hero.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Tesla_Door.jpg')
  }
])
