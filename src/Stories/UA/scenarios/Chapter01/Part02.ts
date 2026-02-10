import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.UA, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Сегодня бой у Смэшера. Я не могу пойти с тобой в кино!
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Audio/UA/Calm_Theme.mp3'),
    speaker: 'Громкий посетитель',
    imageFront: require('../../../../Images/UA/Persons/Huckster.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 1,
    text:
      `
        Кажется, Бабушка Юко называла это «милые бранятся, да только тешатся».
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 2,
    text:
      `
        Опять ты со своим боксом! Я же просила у тебя всего один день на нас!
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Громкая посетительница',
    imageFront: require('../../../../Images/UA/Persons/Huckster_Girl.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 3,
    text:
      `
        Какой к черту бокс! Мы столько встречаемся, а ты даже запомнить не можешь, чем я интересуюсь! Это Арена юнитов, а не гребанный бокс.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Громкий посетитель',
    imageFront: require('../../../../Images/UA/Persons/Huckster.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 4,
    text:
      `
        Солдат заинтересованно повернула голову в сторону говорящего. Прищурилась, мысленно пробуя название.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 5,
    text:
      `
        «А-ре-на. С боями. Где-то в городе. Интересно».
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 6,
    text:
      `
        Сладкая парочка тем временем продолжала превышать приемлемый уровень децибелов втрое.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    parallax: 'left',
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 7,
    text:
      `
        Что там мордобой, что здесь! Еще и деньги туда постоянно тратишь! Я же просила тебя, не делай ставки. Раз нравится — смотри, я не запрещаю. Но зачем ты уносишь туда всю зарплату?!
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speaker: 'Громкая посетительница',
    imageFront: require('../../../../Images/UA/Persons/Huckster_Girl.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 8,
    text:
      `
        За победную ставку на Смешера я свозил тебя на море! А тебе вообще на все плевать! Деньги-деньги-деньги. Только они тебя и интересуют.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Громкий посетитель',
    imageFront: require('../../../../Images/UA/Persons/Huckster.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 9,
    text:
      `
        Девушка охнула, дергаясь, словно от удара. Пока парень багровел с каждым вздохом, явно готовый разбрасываться не только ментальными пощечинами.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 10,
    text:
      `
        Бабушка Юко высунулась из окошка раздачи, смеряя недовольным взглядом раскричавшихся. EVE-13C шагнула к их столу, чтобы ей потом не прилетело.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 11,
    text:
      `
        Настоятельно прошу вас прекратить проверять выносливость барабанных перепонок других гостей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 12,
    text:
      `
        Под тяжелым взглядом вскинувшийся парень неожиданно сдулся, сверкая глазами в сторону Солдата. У которой на лице было по пунктам расписано, в каком порядке будут ломаться его кости при непослушании.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 13,
    text:
      `
        Извиняемся.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Громкий посетитель',
    imageFront: require('../../../../Images/UA/Persons/Huckster.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 14,
    text:
      `
        EVE-13C пожевала губами, не имея ни малейшего желания принимать извинения. Правда, потом увидев, какие чаевые этот столик оставил, решила поддаться благоразумию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 15,
    text:
      `
        Что за ссора, $Имя Игрока$?
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 16,
    text:
      `
        Пара что-то не поделила.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 17,
    text:
      `
        Молодая кровь…
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 18,
    text:
      `
        Девушка бухнула поднос. Голова гудела от роящихся мыслей с оглавлением «Арена юнитов».
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 19,
    text:
      `
        Бабушка Юко…
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 20,
    text:
      `
        Вороненок? Посудомойка не включается?
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 21,
    text:
      `
        Нет. Что такое Арена юнитов?
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 22,
    text:
      `
        Женщина скривилась, едва название достигло ушей.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 23,
    text:
      `
        Арена с боями без правил. Злачное место, учрежденное безбожником.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 24,
    text:
      `
        Интерес вскинул голову. Солдату нравилось, что происходило с ее жизнью сейчас. Однако старые инстинкты заставляли чувствовать себя львицей с повязанным бантом.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 25,
    text:
      `
        Вроде бы одомашненной, но все еще смертоносной.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 26,
    text:
      `
        Зачем тебе?
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 27,
    text:
      `
        Не кривя глазом, соврала:
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 28,
    text:
      `
        Пара ругалась из-за того, что парень ставки делает.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 29,
    text:
      `
        И правильно. У Августы старший постоянно на какого-то Смэшера ставит, и дело скоро обещает кончиться тем, что с них долги выбивать придут.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 30,
    text:
      `
        Много?
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 31,
    text:
      `
        Что много?
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 32,
    text:
      `
        Денег ставит.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 33,
    text:
      `
        Достаточно, чтобы проигрыши были в три раза больше, чем выигрыши. Августа уже готовится дом свой закладывать.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 34,
    text:
      `
        Солдат под мерный стук половника в кастрюле прикинула обороты.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 35,
    text:
      `
        «Если тот парень на море свозил… Хм, а море — это дорого?»
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 36,
    text:
      `
        Бабушка Юко, сколько стоит на море съездить?
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 37,
    text:
      `
        Половник замер, женщина нахмурила седые брови.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 38,
    text:
      `
        В мое время — дорого, но подъемно. Сейчас… Вопиюще неприлично. Туда теперь могут ездить только самые сливки, у которых куры денег не клюют.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 39,
    text:
      `
        Поддержка экологии в некоторых туристических местах обходится владельцам в хорошие суммы, поэтому и путевки все подорожали раз в десять.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 40,
    text:
      `
        Раньше можно было на озеро съездить, к речушке какой ноги помочить, а сейчас…
      `,
    buttons: [
      {
        text: '',
        goTo: 650
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 650,
    text:
      `
        Только ноги опустишь, у тебя уже кожа слезет от химикатов.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 41,
    text:
      `
        Старушка что-то еще бормотала под нос, поминая былые времена, какую-то зеленую траву и чужие огороды, но Солдат не слушала.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 42,
    text:
      `
        «Дом, наверное, стоит много. Море — еще дороже».
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 43,
    text:
      `
        «Может, стоит… Деньги немаленькие, ей точно пригодятся».
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 44,
    text:
      `
        Бабушка Юко, может, мне сходить на…
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 45,
    text:
      `
        Вороненок, вот это на десятый столик. Чего стоишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 46,
    text:
      `
        Тарелка рамена дымилась на подносе, пока женщина потрясала огромным половником, подгоняя.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/UA/Objects/Ramen.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 47,
    text:
      `
        У нас сегодня полная посадка, не время прохлаждаться!
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 48,
    text:
      `
        Громадная медная поварешка выглядела достаточной угрожающей, чтобы свернуть все разговоры и вернуться к работе.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Images/UA/Objects/Ramen.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 49,
    text:
      `
        «В другой раз спрошу».
      `,
    buttons: [
      {
        text: '',
        goTo: 600
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 600,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 50 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 50,
    text:
      `
        Лезвие бликовало под прямым светом ламп. Пропустить рукоятку между пальцев, раскрутить на самом кончике, чуть ниже подушечки.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    message: 'Через два дня.',
    music: require('../../../../Audio/UA/Idyll_Theme.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 51,
    text:
      `
        Нож застыл, баланс установился, лезвие в последний раз мигнуло отражением.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: require('../../../../Images/UA/Objects/Knife.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 52,
    text:
      `
        Отработка нескольких ударов по несуществующей цели: в бедро, замах и скользящее движение для разреза горла, укол в область глаза — доставили невыносимое удовольствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageFront: require('../../../../Images/UA/Objects/Knife.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 53,
    text:
      `
        Что ты делаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 54,
    text:
      `
        Нож хороший. Балансировка, соотношение длины рукояти и лезвия, вес…
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 55,
    text:
      `
        Солдат повторила проверку, протянув вытянутую ладонь женщине. Раскрученный волчком нож упорно продолжал раскачиваться на кончике пальца, не теряя равновесия.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 56,
    text:
      `
        $Имя Игрока$! Не играйся так с ножом! Это же опасно. Порежешься, уронишь, в ногу воткнешь, да что угодно!
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 57,
    text:
      `
        Солдат сморщила нос, но послушалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 58,
    text:
      `
        Подкинув нож в воздух, перехватила за лезвие и бросила в сторону магнитной ленты, вернув на место.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 59,
    text:
      `
        Нас научили пользоваться ножами раньше, чем мы прошли сложение дробей. Не волнуйтесь, я не порежусь.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 60,
    text:
      `
        Иногда я забываю, что ты не просто сиротка… 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 61,
    text:
      `
        Нечитаемый взгляд женщины отчего-то закручивал в груди колючую проволоку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 62,
    text:
      `
        И вправду говорят: сколько волка ни корми, все равно в лес смотрит.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 63,
    text:
      `
        Хотелось скукожиться, уменьшиться, чтобы это чувство не царапало ребра.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 64,
    text:
      `
        Теплая ладонь зарылась в волосы на макушке.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 65,
    text:
      `
        Не волнуйся. Все беды позади. У нас все с тобой будет хорошо, веришь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 66,
    text:
      `
        Солдат кивнула, зажмуриваясь. Была бы кошкой — прижала бы уши, начав мурчать.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 67,
    text:
      `
        И тебе больше не надо будет применять свои навыки на остальных. Скоро нож для тебя станет просто инструментом для приготовления вкусных блюд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 68,
    text:
      `
        Я научу тебя всему. И даже рецепту твоих любимых моти.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 69,
    text:
      `
        Внутри и снаружи стало тепло: мягкие слова, нежные касания, умиротворение, умостившееся в груди, дрогнувшие в желании что-то сделать руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 70,
    text:
      `
        Впервые дрогнувшие не с целью разрушать. А созидать.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 71,
    text:
      `
        Ладно, я чего спустилась-то. Я старые вещи Коджи разобрала, посмотри, может, тебе что подойдет.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 72,
    text:
      `
        Солдат кивнула, поднимаясь наверх.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 73,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    wardrobe: { story: EStoriesEn.UA, personId: 'UA_Eve_Part_2', goTo: 74 },
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 74,
    text:
      `
        Рынок гудел множеством голосов, зазываний и взрывами хохота. Солдат поморщилась от какофонии звука, но послушно следовала за снующей между лотками бабушкой Юко.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    simple: require('../../../../Audio/UA/Crowd.mp3'),
    music: require('../../../../Audio/UA/Calm_Theme.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 75,
    text:
      `
        Здесь, вороненок, самые лучшие продукты. А главное — полезные! Никакой тебе химии, заменителей, синтетики и прочего, что продают в нынешних магазинах. Смотри, какая зелень!
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 76,
    text:
      `
        Женщина восторженно ткнула пучком кинзы девушке в нос, оглушив резким запахом.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 77,
    text:
      `
        У Паулы здесь самые лучшие травы. Джессика торгует такими овощами, морковь толщиной с руку! А Августа… Где же она?
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 78,
    text:
      `
        Упоительный рассказ прервался, пока женщина сканировала ряды прилавков в поисках одной конкретной Августы.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 79,
    text:
      `
        Августа! Ты когда успела переехать?
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 80,
    text:
      `
        Черная женщина скалилась, опираясь крепкими руками на ящики с фруктами.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 81,
    text:
      `
        В этот понедельник. Сынок расстарался, выторговал мне эту точку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 82,
    text:
      `
        Солдат благоразумно держалась в стороне от прямого захвата: от таких рук глазные яблоки за секунду вылетят из орбит.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 83,
    text:
      `
        Августа, это — моя покановая помощница. $Имя Игрока$ — Августа. Если рай существует, то там кормят только ее фруктами!
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 84,
    text:
      `
        Девушка коротко кивнула, не переставая держать обстановку под контролем. Солдат ненавидела скопления людей — мало места для маневра, много возможностей для удара со спины.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 85,
    text:
      `
        Это где же ты такого ангелочка откопала? Ты глянь какая: красавица, да еще и работящая. Свататься к вам когда можно? У меня три лоботряса — отдам любого.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 86,
    text:
      `
        Женщины хором рассмеялись, пока девушка обрабатывала информацию. Если все три сына этой женщины с таким же телосложением, то Солдат возьмет любого. А лучше всех.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 87,
    text:
      `
        Одного, какого-нибудь повыше, в охрану на вход. Следующего в грузчики, другого можно на кухню или к ней в зал.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 88,
    text:
      `
        А всех можно? За сколько отдадите?
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 89,
    text:
      `
        Ха! А девчонка-то у тебя не промах! Торг приветствуется, что можешь предложить?
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 90,
    text:
      `
        $Имя Игрока$! Августа их не на работу к нам предлагает. У них своей полно.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 91,
    text:
      `
        А…
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 92,
    text:
      `
        Вы чего пришли-то? Что-то закончилось, Юко? 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 93,
    text:
      `
        Женщина заглянула под прилавок, сверяясь со сводными таблицами.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 94,
    text:
      `
        Следующая поставка же в понедельник?
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 95,
    text:
      `
        Нет, все в порядке, мы просто прогуляться решили. И на ужин зелени взять для салата.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 96,
    text:
      `
        Мне новую клубнику привезли. Ягодка к ягодке, пара коробок есть размером с яблоко. Хочешь посмотреть?
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 97,
    text:
      `
        Юко оживилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 98,
    text:
      `
        Кислая?
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 100,
    text:
      `
        Обижаешь. Слаще сахара. Еще белая есть, но ее осталась только коробка. Смели за один день, представляешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 101,
    text:
      `
        Ящик за ящиком с грохотом появлялись на широком столе. Шуршал пластик обертки, восторженные шепотки женщин едва слышно доносились из-за гула толпы вокруг.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 102,
    text:
      `
        Белая клубника?..
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 103,
    text:
      `
        Солдат вклинилась, выглядывая из-за плеча бабушки Юко. Спелая клубника — красная. Если красная, значит, вкусная. Если белая, значит, недоспелая и будет хрустеть. Это она знала.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 104,
    text:
      `
        «Зачем продавать то, что еще не дозрело?»
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 105,
    text:
      `
        Это такой сорт особенный, вороненок. Возьмем? Мне кажется, для украшения моти в самый раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 106,
    text:
      `
        В мягких желтых чехлах лежала белая с красными вкраплениями ягода. Выглядела неаппетитно  — сугубо мнение Солдата.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Images/UA/Objects/White_Strawberry.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 107,
    text:
      `
        Она какая-то странная.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 108,
    text:
      `
        Потому что белая.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 109,
    text:
      `
        Хмыкнула Августа, вынимая крупную ягоду, но в ее руке размером кажущуюся с малину.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 110,
    text:
      `
        На, попробуй.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 111,
    text:
      `
        Солдат с сомнением посмотрела на странный плод.
      `,
    buttons: [
      {
        text: 'Взять',
        goTo: 112
      },
      {
        text: 'Отказаться',
        goTo: 117
      }],
    imageFront: require('../../../../Images/UA/Objects/White_Strawberry.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 112,
    text:
      `
        Но все-таки взяла, под требовательным взглядом старушки потерев об рукав.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 113,
    text:
      `
        «Потому что немытое есть нельзя».
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 114,
    text:
      `
        Ну как?
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 115,
    text:
      `
        Сладкая.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 116,
    text:
      `
        $Имя Игрока$ кивнула, подтверждая слова торговки. И с жадностью смотря на оставшиеся странные, но вкусные ягоды в коробке.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 117,
    text:
      `
        Девушка замотала головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 118,
    text:
      `
        Она же хрустеть будет. И рот вязать.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 119,
    text:
      `
        Юко рассмеялась, покачав головой. Забрала сама предложенную ягоду и, отерев ее о рукав, засунула в рот.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 120,
    text:
      `
        Потом не таскай втихушку из коробки, если распробуешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 121,
    text:
      `
        Давай нам всю коробку белой. И три крупной.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 122,
    text:
      `
        С тобой приятно иметь дело, Юко.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 123,
    text:
      `
        С одобрительным хмыканьем Августа выстроила башенку из картона на прилавке, пока Юко что-то нажимала в телефоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 124,
    text:
      `
        Может, еще яблочек? Самый сезон.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 125,
    text:
      `
        Ты лучше мне юзу привези, я у тебя сразу грузовик выкуплю.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    message: 'Юзу — цитрусовый фрукт, распространен в юго-восточной Азии.',
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 126,
    text:
      `
        Ты мне со своим юзу всю плешь проела. У меня руки хоть и длинные, но до поставок с другого континента еще не дотянулись.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 127,
    text:
      `
        Женщины принялись разбрасываться названиями фруктов и ягод: Юко требовала одно, Августа парировала и предлагала другое. Солдат рассеянно ковыряла степлерную скобу на коробке, не слушая.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 128,
    text:
      `
        Ма! Там еще тридцать ящиков привезли!
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Сын Августы',
    imageFront: require('../../../../Images/UA/Persons/Augusta_Small_Son.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 129,
    text:
      `
        Августа обернулась на крик и гаркнула хорошо поставленным голосом:
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 130,
    text:
      `
        Какие к духам тридцать ящиков?! Они должны быть послезавтра! Я еще предыдущие не распродала!
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 131,
    text:
      `
        Ма, ну я уже расписался! Куда нести?
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Сын Августы',
    imageFront: require('../../../../Images/UA/Persons/Augusta_Small_Son.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 132,
    text:
      `
        Я тебе что говорила?! Не расписывайся за поставки без моего ведома! А если гниль привезли? Кто брать это будет? Или ты все тридцать ящиков сожрешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 133,
    text:
      `
        Сын женщины пристыженно затих, пока Августа, оглушительно пыхча, направлялась к нему.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 134,
    text:
      `
        Кто их будет проверять, идиот? Первый ящик — уже все битое!
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 135,
    text:
      `
        Раздался приглушенный шлепок, сдавленный «ох» и ускорившийся шорох вскрываемых коробок.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 136,
    text:
      `
        «Такую женщину лучше не злить».
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 137,
    text:
      `
        Мы закончили?
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 138,
    text:
      `
        Солдат повернулась к старушке, готовая нагружаться коробками и по команде выдвигаться восвояси. Юко покачала головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 139,
    text:
      `
        Нет. Последи за прилавком, я пойду помогу ей проверить товар. Не чужие же.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 140,
    text:
      `
        Солдат подчинилась, обходя стол и заглядывая в прилавок с изнанки. Растерянно оглядела кучу коробок, пакетов, неизвестную технику и плоский блин весов.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    music: require('../../../../Audio/UA/Tension_Theme.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 141,
    text:
      `
        Приказ был недостаточно конкретен, и что входило в команду «последи» она не понимала. Поэтому напряженно вглядывалась в выложенный товар и волком смотрела на проходящих мимо людей — чтобы даже мысль не возникла подойти.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 142,
    text:
      `
        Работало безотказно, пробирало и убеждало держаться подальше всех, кроме одного.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 143,
    text:
      `
        В образовавшийся вакуум рядом с ней шатаясь шагнул замызганный мальчонка. Утер грязным рукавом не менее грязный нос и прошепелявил:
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 144,
    text:
      `
        Тетенька, помогите моей маме. Она вон там упала.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 145,
    text:
      `
        Испачканный в земле и соплях палец ткнул куда-то в толпу. Солдат не сдвинулась с места, продолжая взглядом приваривать пацаненка к асфальту.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 146,
    text:
      `
        Тот разнервничался, не получив привычной реакции. Забегали глаза в попытке придумать продолжение.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 147,
    text:
      `
        У нее… Она… Пена ртом пошла! И кровь еще на волосах была! Помогите моей маме, тетенька!
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 148,
    text:
      `
        Он хлюпнул носом. Солдат не двигалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 149,
    text:
      `
        П-п-пожалуйста, тетенька! Моя мама-а-а-а!
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 150,
    text:
      `
        Мальчишка взвыл на самой высокой ноте, по чумазому личику потекли слезы. Крокодильи или нет, ее не волновало. Приказ был отдан.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 151,
    text:
      `
        Ребенок драл горло еще три секунды. Приоткрыл один глаз и, увидев, что девушка так и стоит, резко замолк. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 152,
    text:
      `
        Ну и дура седая.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 153,
    text:
      `
        Обиженно пробурчал и отточенным движением уличной жизни в охапку сгреб содержимое ближайшей к нему коробки.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 154,
    text:
      `
        Рука Солдата схватила за шкирку быстрее, чем он успел дать деру. Распластавшись грудью на поверхности прилавка, девушка вздернула его, как щенка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 155,
    text:
      `
        Румяные яблоки покатились по столу, застучали по пыльному асфальту под аккомпанемент воя и криков извивающегося пацана.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 156,
    text:
      `
        А-а-а! Убивают! Помогите!
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 157,
    text:
      `
        Галдящая толпа на рынке осталась безразлична к его завываниям.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 158,
    text:
      `
        $Имя Игрока$ подняла его повыше, ещё раз тряхнув, чтоб заткнулся. Скрипнула зубами — он помешал ей выполнить приказ. Такую помеху выучка требовала убрать.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 159,
    text:
      `
        Оживленная территория рынка усложняла выполнение задачи чисто и без свидетелей. Оттащить в подворотню и там ликвидировать — нарушит приказ Юко. Оставить, как есть — значит, показать старушке, что она не справилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 160,
    text:
      `
        Тетенька. Я больше так не буду, отпустите. Пожалуйста. Честно-честно.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 161,
    text:
      `
        Видимо, внимательный взгляд притихшему мальчишке не понравился.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 162,
    text:
      `
        Друзья твои где? Которые должны были обчистить прилавок, если бы я пошла за тобой.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 163,
    text:
      `
        Но у меня правда мама упала!
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 164,
    text:
      `
        За ложь она еще раз тряхнула его, да посильнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 165,
    text:
      `
        А ворованными яблоками ты ей как помогать собирался?
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 166,
    text:
      `
        Ну, я…
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 167,
    text:
      `
        Друзья твои где?
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 168,
    text:
      `
        Мальчишка перестал дергаться и размахивать руками, повиснув тряпочкой в воспитательном захвате кулака. Молча.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 169,
    text:
      `
        Многих уже так обчистили?
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 170,
    text:
      `
        Сколько вас?
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 171,
    text:
      `
        Кому относите украденное?
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 172,
    text:
      `
        Ребенок опустил глаза в пол, продолжая партизанить. Допрос — не самая сильная сторона Солдата. EVE-13C предпочитала пытки разговорам.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 173,
    text:
      `
        «Дать подзатыльник или сдать Августе на руки?»
      `,
    buttons: [
      {
        text: 'Отпустить',
        goTo: 174
      },
      {
        text: 'Связать',
        goTo: 179
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 174,
    text:
      `
        Проваливай.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Effect', id: 'Humanity' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 175,
    text:
      `
        Солдат разжала пальцы, роняя пацаненка с высоты своего роста. Тот шмякнулся на зад, по-тараканьи засучил конечностями, отползая подальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 176,
    text:
      `
        EVE-13C изловчилась, снова вздернула его, на этот раз ставя на ноги. Секунда — мальчишка пошатнулся от крепкой затрещины, почти поцеловав лбом поверхность прилавка.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 177,
    text:
      `
        Будешь рядом тереться — переломаю ноги.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 178,
    text:
      `
        Теперь взаправду рыдающего ребенка сдуло, как ветром. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 179,
    text:
      `
        Если возможности скрыть ошибку и прикопать ее на три метра от земли нет, то Солдат предпочтет выслужиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    stats: [
      { story: EStoriesEn.UA, value: -1, category: 'Effect', id: 'Humanity' },
      { story: EStoriesEn.UA, value: 1, category: 'Choice', id: 'Tie' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 180,
    text:
      `
        Схватив моток скотча с полки по соседству с весами, девушка прижала коленом пацаненка к земле.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 181,
    text:
      `
        Тот брыкался, плевался, огрызался, в миг лишившись всей напускной невинности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 182,
    text:
      `
        Сбрендившая дура! Отпусти! Че ты делаешь, идиотка?!
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 183,
    text:
      `
        Да че я сделал?! Тебе пять яблок жалко, что ли?!
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Мальчишка',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 184,
    text:
      `
        Первым делом она залепила ему рот — как раз перед тем, как он попытался в неё харкнуть. Останься больше времени да меньше свидетелей, просто выбила бы зубы.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 185,
    text:
      `
        Дальше — туже скрутила руки и ноги, под веселый треск скотча не жалея слоёв.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 186,
    text:
      `
        Будь возможность — сделала бы из него пластиковый кокон. Так точно не вырвется.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 187,
    text:
      `
        Молчишь и не дергаешься. Тогда, возможно, развяжу. Пискнешь — замотаю до самой головы. А там уже тебе будет без разницы. Развяжу я тебя, в коробку засуну или просто скину в люк.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 188,
    text:
      `
        Испугавшийся пацаненок зыркал на нее красными зареванными глазами, но не двигался. Солдат ногой задвинула его поглубже под прилавок и внимательнее осмотрела толпу.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 189,
    text:
      `
        «Придут спасать или нет?»
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 190,
    text:
      `
        На горизонте не проскочила ни одна макушка хоть кого-то схожего возраста или замызганно-грязного вида.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 191,
    text:
      `
        «Привлекла слишком много внимания. Не сунутся».
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 192,
    text:
      `
        Девушка на свой страх и риск отшагнула от ящиков с фруктами, ушла в тень и для убедительности повернулась спиной к связанному мальчишке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 193,
    text:
      `
        Сделала вид, что что-то ищет в стоящих поодаль пустых коробках. Громкий топот и сдавленное шиканье не заставили себя долго ждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 194,
    text:
      `
        Тише! По моей команде вы вдвоем его оттаскиваете. А я на стреме.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 195,
    text:
      `
        А че ты отсиживаешься? Иди сам, я на шухере постою.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Мальчишка 2',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_2.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 196,
    text:
      `
        Я хотя бы до пяти считать умею.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 197,
    text:
      `
        Да не трогай ты ничего! Видишь же, она лютая! Это тебе не бабки-артритницы, девка быстрая, догонит.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 198,
    text:
      `
        Я жрать хочу.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Мальчишка 3',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_0.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 199,
    text:
      `
        Судя по звукам и шороху у фруктов, банда сопляков засела с передней стороны прилавка. Солдат завозилась в коробках громче, вытаскивая самую большую и плотную.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 200,
    text:
      `
        Щас! Пока она не видит!
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 201,
    text:
      `
        По отмашке умеющего считать до пяти стартанули и остальные мальчишки, и EVE-13C.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 202,
    text:
      `
        Первого она хлопнула коробкой, накрывая сверху, как обнаглевшую мышь. Второго цапнула по-старинке, за шкирку, не особо церемонясь о мнении оглядывающихся людей.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 203,
    text:
      `
        Предводителя, очень по-мужски сверкающего пятками, догнало прицельно брошенное яблоко. Словив в затылок на полной скорости, мальчишка брякнулся на землю, пропахав носом асфальт.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 204,
    text:
      `
        Бабушка Юко вернулась минут десять спустя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 205,
    text:
      `
        Вороненок, поможешь коробки перенести? Там много, Августа с сыном до вечера не управятся. А я пока тебя у прилавка заменю.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 206,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Tie' }) <= 0
        },
        goTo: 252
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Tie' }) >= 1
        },
        goTo: 207
      }
    ],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 207,
    text:
      `
        Старушка осеклась, увидев у ног Солдата четырех замотанных скотчем мальчишек.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 208,
    text:
      `
        Вороненок, это что такое?!
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 209,
    text:
      `
        Неудачливые воришки.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 210,
    text:
      `
        $Имя Игрока$!!!
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 211,
    text:
      `
        Кажется, попытка выслужиться не увенчалась успехом.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 212,
    text:
      `
        Юко, ты своей скажи, что если она пить хочет, то там целый графин воды.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 213,
    text:
      `
        Женщина, вывернув из-за угла, замерла с удивленно распахнутыми глазами. Но, в отличие от Юко, ругаться не спешила.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 214,
    text:
      `
        Я вам что говорила, банда соплежуев? Дома сидеть и мультики смотреть, а к моим товарам и близко не подходить!
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 215,
    text:
      `
        Замотанная ребятня усиленно вращала глазами, мычала и с самым невинным видом кивала.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 216,
    text:
      `
        Ты их сама скрутила или кто помог?
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 217,
    text:
      `
        Нет. Сама.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 218,
    text:
      `
        Под одобрительным взглядом Августы сразу же развернуло плечи, и выгнулась колесом грудь.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 219,
    text:
      `
        Молодец. Эти поганцы мне крови попили знатно.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 220,
    text:
      `
        Рты им залепила, чтобы не горланили?
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 221,
    text:
      `
        Наклеенные полоски скотча она снимала резко, звонко отдирая и ни капли не жалея.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 222,
    text:
      `
        Плевались. Пытались кусаться. Кричать перестали после первого подзатыльника.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 223,
    text:
      `
        Первый освобожденный злобно зыркал из-под бровей и уже набирал в грудь воздуха.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 224,
    text:
      `
        Вот сейчас и проверим, поможет ли во второй раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 225,
    text:
      `
        От крепкого удара у пацаненка мотнулась голова. Набранный воздух с шипением и заглушенным воем вышел сквозь стиснутые зубы.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 226,
    text:
      `
        Еще сюда со своей шайкой-лейкой придешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 227,
    text:
      `
        Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 228,
    text:
      `
        Воровать будешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 229,
    text:
      `
        Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 230,
    text:
      `
        Друзей своих на дно тащить будешь, зазывая воровать?
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 231,
    text:
      `
        Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 232,
    text:
      `
        А сам бедокурить?
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 233,
    text:
      `
        Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 234,
    text:
      `
        Ребенок цедил сквозь зубы, блестели непролитые слезы, которые он по-мальчишески пытался сдерживать, но подрагивающая губа выдавала его с головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 235,
    text:
      `
        Отпусти их, Августа. Дети все-таки.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 236,
    text:
      `
        Дьявольские отродья, а не дети. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 237,
    text:
      `
        Остальная ватага помалкивала, стараясь не отсвечивать и избегать крепких рук торговки.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 238,
    text:
      `
        Еще раз здесь вас увижу — руки переломаю. И даже если меня за прилавком не будет: узнаю, найду и все, что своровать пытались, затолкаю с обратной стороны. Уловили?
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 239,
    text:
      `
        Освобожденные юные преступники судорожно кивали опущенными головами.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 240,
    text:
      `
        Простите нас. Мы больше так не будем.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    speaker: 'Мальчишка 2',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_0.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 241,
    text:
      `
        Кушать просто хочется.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speaker: 'Мальчишка 3',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_2.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 242,
    text:
      `
        А денег никак не заработать.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: 'Мальчишка 2',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 243,
    text:
      `
        А у меня вообще мамы нет…
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speaker: 'Мальчишка 1',
    imageFront: require('../../../../Images/UA/Persons/Small_Guy_Leader.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 244,
    text:
      `
        Предводитель горе-ОПГ жалостливым голоском пищал оправдание. Августа замахнулась на него зажатыми в руке ножницами.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    message: 'ОПГ — организованная преступная группа.',
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 245,
    text:
      `
        Ух, подлец какой, живую мать похоронил! Ходит твоя мамка в соседнюю лавку за рыбой, вчера видела! Иди отсюда, пока за уши не притащила к ней на порог, бесстыдника такого!
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 246,
    text:
      `
        Ватаге второго приглашения и не надо было: прыснули в разные стороны, как тараканы при включенном свете.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 247,
    text:
      `
        И куда этот мир только катится…
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 248,
    text:
      `
        Вздохнула Августа, отбрасывая ножницы. Юко отозвалась таким же обреченным вздохом.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 249,
    text:
      `
        И не говори. В наше время все по домам сидели, уроки учили.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 250,
    text:
      `
        Солдат скучающе оглядывала безликую и неизменную толпу. Разговоры о былом ее не трогали, цвет травы и подавно не волновал.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 251,
    text:
      `
        Ладно, за работу. Спасибо еще раз, что урок им преподала. Такую выволочку они точно надолго запомнят. Воду будешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 252,
    text:
      `
        Я какого-то ребенка на воровстве поймала.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 253,
    text:
      `
        Юко нахмурилась и обернулась, пропуская Августу вперед.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 254,
    text:
      `
        Часто у тебя воруют?
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 255,
    text:
      `
        Августа скривилась, как от зубной боли, и махнула рукой.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 256,
    text:
      `
        Знаю я этих. Сколько ни гоняй — без толку. Много стащил?
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 257,
    text:
      `
        Нет. Не успел.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 258,
    text:
      `
        Что, прям за руку поймала?
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 259,
    text:
      `
        Да. Яблоки правда раскатились и помялись, я их под прилавок убрала. А этому…
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 260,
    text:
      `
        Она с сомнением скосила глаза на Юко. Солдату можно только защищаться, а не нападать — этот приказ она помнила. Но не выполнила.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 261,
    text:
      `
        Юко, принеси своей девочке воды. А я пока оценю масштаб проблемы.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 262,
    text:
      `
        Старушка подчинилась, явно не желая знать, что ее вороненок могла сделать с воришкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 263,
    text:
      `
        Не стесняйся, рассказывай.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 264,
    text:
      `
        Ну, пара подзатыльников.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 265,
    text:
      `
        И все? Они от меня больше получали.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 266,
    text:
      `
        Осмелевшая EVE-13C продолжила.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 267,
    text:
      `
        По земле поваляла. Воспитательную беседу провела, пока висел. Еще один подзатыльник, потом поджопник и настоятельные просьбы здесь больше не появляться.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 268,
    text:
      `
        Про обещание переломать ноги решила промолчать.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 269,
    text:
      `
        Молодец. Хорошая работа. Мои оболтусы их даже поймать не могут, позорники.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 270,
    text:
      `
        А за яблоки не беспокойся. Пирог из них сделаю и дело с концом.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 271,
    text:
      `
        Держи, вороненок. Осторожно только, холодная.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 272,
    text:
      `
        Бабушка Юко вывернула из-за угла со стаканом воды, рассматривая заговорщицки улыбающуюся Августу.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 273,
    text:
      `
        За прилавком посмотришь? О сопляках этих не беспокойся, сегодня точно не придут. А мы пока все ящики на склад разгрузим.
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 274,
    text:
      `
        Солдат в два глотка выхлебала воду, с неудовольствием ощущая голод. Поморщилась от сосущей пустоты и отставила стакан.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 275,
    text:
      `
        Я есть хочу.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 276,
    text:
      `
        Мы же два часа назад обедали, вороненок!
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 277,
    text:
      `
        Пенсионерка всплеснула руками, закачала головой. Зато Августа забавлялась.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 278,
    text:
      `
        О, как мне это знакомо. Я своих кормить не успеваю, а они снова в рот тычут. 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 279,
    text:
      `
        Надо же мне как-то вас отблагодарить за помощь? Вот и покормлю, как с работой закончим. Рагу ешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 280,
    text:
      `
        Солдат болванчиком закивала.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 281,
    text:
      `
        Она все ест, Августа…
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 282,
    text:
      `
        Ну, значит, и от яблочного пирога не откажется. Надо же куда-то попорченный товар девать.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 283,
    text:
      `
        На том и порешили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Market.jpg')
  },

  {
    id: 284,
    text:
      `
        Аппетит у нее хороший. Вон, мои оболтусы уже на третьей тарелке отпали. А она все наворачивает.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    music: require('../../../../Audio/UA/Idyll_Theme.mp3'),
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 285,
    text:
      `
        Под смешливым взглядом женщины Солдат отодвинула четвертую тарелку. Похлопала себя по животу, удовлетворенно вздыхая. Хорошо…
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 286,
    text:
      `
        Все? Больше не будешь? Там еще половина кастрюли осталась.
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 287,
    text:
      `
        Вороненок, ну что ты как из голодного края? Будто я тебя дома не кормлю…
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 288,
    text:
      `
        Пусть-пусть. Мне не жалко. Здоровее будет, а то худющая, как спичка. Куда в тебя только влазит-то?
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 289,
    text:
      `
        Девушка пожала плечами, гипнотизируя кастрюлю вкусного рагу. Хотелось еще. Но как же десерт?...
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 290,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    wardrobe: { story: EStoriesEn.UA, personId: 'UA_Eve_Part_2_Food', goTo: 291 },
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 291,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return wardrobe.getCurrentClothesImageTitle('UA', 'UA_Eve_Part_2_Food') === 'Рагу'
        },
        goTo: 292
      },
      {
        condition: () => {
          return wardrobe.getCurrentClothesImageTitle('UA', 'UA_Eve_Part_2_Food') !== 'Рагу'
        },
        goTo: 317
      }
    ],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 292,
    text:
      `
        «Может быть, положить с собой попросить? Или бабушка Юко обидится?»
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 293,
    text:
      `
        А можно еще?
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 294,
    text:
      `
        Вороненок! Да ты же лопнешь!
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 295,
    text:
      `
        Августа крякнула, с усмешкой хлопая себя по колену.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 296,
    text:
      `
        Да как она тебя еще не объела, Юко? Я думала, это мне тяжело троих прокормить. А у тебя $Имя Игрока$ одна за троих.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 297,
    text:
      `
        Тарелка новой порции стукнулась о стол перед Солдатом.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 298,
    text:
      `
        Ешь, дорогуша.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Objects/Stew.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 299,
    text:
      `
        Спасибо. Правда очень вкусно. Ни на что не похоже, я такого не пробовала раньше
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 300,
    text:
      `
        Конечно, не пробовала! Мало кто умеет в наше время готовить хорошую африканскую еду. А это еще рецепт моей бабули, который достался ей от ее бабули…
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 301,
    text:
      `
        И там дальше в таком же порядке еще пять поколений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 302,
    text:
      `
        Солдат, оправдываясь, виновато смотрела на бабушку Юко. Мол, она не виновата! Правда вкусно и необычно! Но женщина шокировано качала головой. Неверяще как-то даже.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 303,
    text:
      `
        Даже если вкусно, вороненок, так ведь и до разрыва желудка не далеко. Соглашусь с Августой, куда в тебя только лезет…
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 304,
    text:
      `
        Так, может, у нее глисты? Едят за нее, а она вечно голодная.
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 305,
    text:
      `
        У меня не может быть паразитов. Нас ежегодно проверяли в доме Отреченных на…
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 306,
    text:
      `
        Продолжение потонуло в восклицании пенсионерки.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 307,
    text:
      `
        Дак ты же у меня рыбу сырую любишь! Постоянно заготовки на суши таскаешь!
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 308,
    text:
      `
        Девушка, обвиненная по факту и за дело, попыталась оправдаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 309,
    text:
      `
        Не таскаю я, бабушка Юко. Всего раз такое было…
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 310,
    text:
      `
        За руку ее и правда поймали всего один раз. Нераскрытых инцидентов было, естественно, больше.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 311,
    text:
      `
        Ох, точно надо тебя в больницу сводить. По глазам вижу, что не один раз такое было и не два.
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 312,
    text:
      `
        Солдат скорбно отправила в рот последнюю ложку и вздохнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 313,
    text:
      `
        «Нет у меня никаких паразитов. Наверное…»
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 314,
    text:
      `
        Не кукси мордашку, держи пирог.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 315,
    text:
      `
        Солдат, едва увидев кусок на тарелке, сыто икнула, прикладывая руку к животу. В желудке места не осталось. От досады икнула еще.
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 316,
    text:
      `
        Ну вот!
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    achievement: { story: EStoriesEn.UA, name: 'IronCold' },
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 317,
    text:
      `
        Солдат даже при выборе между десертом и добавкой остается Солдатом.
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 318,
    text:
      `
        «Если возьму еще тарелку, десерт не влезет. Если съем пирог, на добавку места не останется».
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 319,
    text:
      `
        «Целесообразность добавки ниже десерта».
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 320,
    text:
      `
        А можно десерт?
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 321,
    text:
      `
        Пенсионерки расхохотались, едва задумавшаяся Солдат прервала напряженное — вопрос-то важный! — молчание.
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 322,
    text:
      `
        Я бы подумала, что ты заболела, если бы попросила добавки вместо сладкого.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 323,
    text:
      `
        Трудный выбор, понимаю. Держи.
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 324,
    text:
      `
        Большой кусок, намного больше, чем отрезанные остальным, опустился перед ней на тарелку.
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageFront: require('../../../../Images/UA/Objects/Apple_Pie.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 325,
    text:
      `
        Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Home.jpg')
  },

  {
    id: 327,
    text:
      `
        Спустя одну кружку чая Солдат сбежала на кухню от разговоров о ценах на крупу, счетах за воду и обнаглевших работниках регистратуры. Мыть посуду интереснее, чем глядеть в пустую тарелку.
      `,
    buttons: [
      {
        text: '',
        goTo: 800
      }],
    simple: require('../../../../Audio/UA/Breaking_Dishes.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 800,
    text:
      `
        Но стоило ей погрузить руки в мыльную пену, как вектор разговора неожиданно сменился.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 328,
    text:
      `
        Ты сдурела? Зачем ты в это ввязалась?
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    music: require('../../../../Audio/UA/Alert_Theme.mp3'),
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 329,
    text:
      `
        Горячий шепот Августы сложно было не услышать даже за дребезгом посуды.
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 330,
    text:
      `
        Мне ее жалко, Августа! Она все еще маленький ребенок, несмотря на свои способности. Наивная, совершенно невинная…
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 331,
    text:
      `
        Ее невинность закончится на первой вспышке гнева! Либо вообще…
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 332,
    text:
      `
        Тарелка выскользнула из руки, заглушив продолжение.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 333,
    text:
      `
        …за ней. Ты думаешь, она сбежала и все? Можно начинать новую жизнь?
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 334,
    text:
      `
        А что ты предлагаешь? Выгнать и обречь на голодную смерть? Она меня спасла!
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 335,
    text:
      `
        Не появись вороненок тогда, мне бы эта шайка молокососов руки переломала!
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 336,
    text:
      `
        Юко, ты… Она опасна, ты меня слышишь? Подарили же тебе Боги испытание — подобрала подопытного кролика. И какого!..
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 337,
    text:
      `
        Солдат вздохнула, потерла занывшую голову. Не слышать то, что они говорили, не получалось. Да и сделать вид, что ее это не касается…
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 338,
    text:
      `
        «Жалко… У Августы вкусное рагу».
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 339,
    text:
      `
        Она опасна только для тех, кто желает ей зла. В наше время это полезный навык.
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 340,
    text:
      `
        Да ты себя вообще слышишь?! Ты не котенка подобрала, а чертову девку-киборга! Еще и в бегах!
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 341,
    text:
      `
        Ходишь с ней, гуляешь, ко мне домой притащила. Хочешь, чтобы нас всех грохнули за контакт со сбежавшим экспериментом?!
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 342,
    text:
      `
        Разговор из обычного обсуждения неожиданно принял повышенные тона и горячую температуру.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 343,
    text:
      `
        Августа! Прекрати так о ней говорить!
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 344,
    text:
      `
        Солдат скривила лицо, закончив мыть посуду. Августа была права, если смотреть на ситуацию со стороны. Но то, как бабушка Юко ее защищала…
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 345,
    text:
      `
        Юко, ты на себя накличешь беду. Если она тебя не прикончит, то те, кто ее ищут! Либо по соседству с ней в клетку посадят, тебе оно надо на старую задницу?!
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 346,
    text:
      `
        Все, я не хочу больше об этом ничего слышать. За мной придут с меньшей вероятностью, чем за тобой! Амбалы с Арены юнитов долги твоего старшего придут выбивать!
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 347,
    text:
      `
        Юко!
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 348,
    text:
      `
        А что, ты думаешь, мы здесь в игрушки играем? Вороненок, какой бы ты ее плохой и опасной не считала, залог моей безопасности. Я впервые после похорон смогла поспать до утра!
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 349,
    text:
      `
        Юко, помяни мои слова. И не приведи Бог, что я окажусь права…
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 350,
    text:
      `
        Ай, да прекрати ты уже. Воздух сотрясаешь только, лучше бы о челюсти своей вставной так беспокоилась!
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 351,
    text:
      `
        Ах ты старая кашолка!
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 352,
    text:
      `
        Девушка, упавшая было на кресло, подскочила на ноги. Мыслительный процесс буксовал, подтормаживая принятие правильного решения ненужными эмоциями.
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 353,
    text:
      `
        «Августа — угроза? Бабушке Юко нужна защита?»
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 354,
    text:
      `
        Солдат дернулась из кухни в коридор, готовая отбивать хрупкую бабушку Юко у танкоподобной Августы. Но…
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 355,
    text:
      `
        Ха-ха-ха! Ну ты сегодня в ударе!
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    speaker: 'Августа',
    imageFront: require('../../../../Images/UA/Persons/Augusta.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 356,
    text:
      `
        Ой, а сама-то! Ха-ха!
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 357,
    text:
      `
        Взрывы хохота вынудили затормозить в коридоре.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 358,
    text:
      `
        «Они странные».
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve_Part_2') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Augusta_Kitchen.jpg')
  },

  {
    id: 359,
    text:
      `
        Сенсорный экран кассы отказывался реагировать на любое нажатие.
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    message: 'Неделя спустя.',
    music: require('../../../../Audio/UA/Calm_Theme.mp3'),
    imageFront: require('../../../../Images/UA/Objects/Cash_register.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 360,
    text:
      `
        EVE-13C, едва сдерживая злость, с силой продавливала кнопку «завершить смену». Которая упорно продолжала гореть красным, не издав ни намека на ответ системы.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 361,
    text:
      `
        Бабушка Юко!
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 362,
    text:
      `
        Солдат хлопнула по несносному куску металла ладонью. Не помогло.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    simple: require('../../../../Audio/UA/Metal_hit.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 363,
    text:
      `
        Касса опять не работает!
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 364,
    text:
      `
        Чего говоришь? Снова сломалась? Да что же с этими технологиями делать…
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 365,
    text:
      `
        Вопреки всем стереотипам, с техникой в ресторане «Кадзоку» разбиралась бабушка Юко. EVE-13C по вопросам бытового опыта была беспомощна, как котенок.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 366,
    text:
      `
        «Иронично: я знаю ровно восемь вариантов обхода привязки к биометрии на огнестреле, включая полное вскрытие корпуса и возню с проводами». 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 367,
    text:
      `
        «Но не знаю ни одного способа, как заставить кассу работать».
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 368,
    text:
      `
        Нужно звонить мастеру.
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 369,
    text:
      `
        Аппарат под уговоры и мягкие касания знающих рук женщины тоже не поддался. Строптиво продолжая светить красным квадратом «закрыть смену».
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 370,
    text:
      `
        Выключи табличку на входе, вороненок. Выручку потом как-нибудь посчитаем.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 371,
    text:
      `
        Солдат кивнула, выученным движением склоняя голову. Низенькая старушка доставала своей рукой до ее макушки только с прыжка.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 372,
    text:
      `
        Молодец-молодец, моя хорошая. Сегодня хорошо поработали.
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 373,
    text:
      `
        Не расстраивайся, этому аппарату уже много лет. Да вот денег все никак не найду, чтобы заказать новый.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 374,
    text:
      `
        Морщинистая ладонь легонько коснулась волос, похлопывая. $Имя Игрока$ продолжала стоять неподвижно, требуя еще.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 375,
    text:
      `
        Что такое? Устала за сегодня?
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 376,
    text:
      `
        Вроде бы ничего. Касса эта только…
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 377,
    text:
      `
        Уничижительный взгляд не помог аппарату войти в строй. Нелестные мысленные обращения тоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    imageFront: require('../../../../Images/UA/Objects/Cash_register.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 378,
    text:
      `
        Обещали опять вспышки на солнце, может, ты так на погоду реагируешь. Все, выдыхай и готовься к ужину.
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 379,
    text:
      `
        Женщина напоследок оставила сухой поцелуй у лба, с легкой улыбкой подталкивая Солдата ко входу.
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 380,
    text:
      `
        Закрывай ресторан и иди перекуси немного. Там тайяки остались.
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    message: 'Тайяки — японское печенье в форме рыбки, традиционно со сладкой начинкой из бобов анко.',
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 381,
    text:
      `
        Скорости к передвижению это прибавило. Как и уменьшило всколыхнувшуюся злость на несносную технику.
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 382,
    text:
      `
        Колокольчик – или как его важно обзывала бабушка Юко «музыка ветра» — звякнул, оповещая о приходе гостя.
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 383,
    text:
      `
        Мы закрыты.
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 384,
    text:
      `
        О. Ты новенькая?
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 385,
    text:
      `
        Незнакомое молодое лицо уставилось на Солдата с приевшейся улыбкой. Изучал, оценивал, почти облизывал. Будто бы этим изгибом губ мог смягчить отвращение от касаний взглядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 386,
    text:
      `
        Солдат потеряла всякую доброжелательность, из последних сил сдерживая скрип зубов.
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 387,
    text:
      `
        Да. Но мы закрыты. Приходите завтра.
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 388,
    text:
      `
        Мышцы спины напряглись, готовые к атаке. Инстинкт и выучка не прощали Солдату быт простого человека. И заставляли видеть в каждом угрозу.
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 389,
    text:
      `
        Неспроста, конечно. Прецеденты продолжали случаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 390,
    text:
      `
        С каких пор «Кадзоку» закрывается в шесть?
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 391,
    text:
      `
        С тех самых, когда касса перестала работать. Мы закрыты. Откроемся завтра.
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 392,
    text:
      `
        Повтор с нажимом не помог выпроводить гостя. Который с твердолобостью барана пытался шагнуть глубже в зал.
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 393,
    text:
      `
        Бабушка Юко где, красавица?
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 394,
    text:
      `
        Солдат за «красавицу» захотела разорвать ему рот. Но, прикрыв глаза, стерпела. Потому что отмывать порог от чужой крови придется ей.
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 395,
    text:
      `
        Мы. Закрыты.
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 396,
    text:
      `
        Позови ее. Я просто поговорить хочу.
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 397,
    text:
      `
        Он попытался протиснуться мимо нее. Его шаг — и девушка руками и ногами схватилась за косяк.
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 398,
    text:
      `
        Как у охранной собаки, инстинкт защищать прибил ее к двери, приговаривая: помрешь тут, но к бабушке Юко он не пройдет.
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 399,
    text:
      `
        Ты кто?
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 400,
    text:
      `
        А ты кто?
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 401,
    text:
      `
        Видимо, оскал зубов вместо ответа ему не пришелся по душе.
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 402,
    text:
      `
        Ты чего такая воинственная, эй. Не зыркай на меня так, я с миром пришел в любимый ресторан. Просто поесть и поболтать со старой знакомой.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 403,
    text:
      `
        Поднятые вверх ладони не убедили EVE-13C в мирных намерениях пришельца. Она его знать не знала, следовательно, его мотивы сразу же воспринимались как угрожающие бабушке Юко.
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 404,
    text:
      `
        Мы закрыты. Ешьте и болтайте в другом месте.
      `,
    buttons: [
      {
        text: 'Вышвырнуть',
        goTo: 405
      },
      {
        text: 'Последнее предупреждение',
        goTo: 405
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 405,
    text:
      `
        Я сказала, мы закрыты.
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Effect', id: 'Butcher' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 406,
    text:
      `
        Солдат отцепила одну руку от косяка, без предупреждения хватая парня за шиворот.
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 407,
    text:
      `
        Раз не понимаешь словами через рот, то так точно поймешь. Завтра приходи.
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 408,
    text:
      `
        Что ты делаешь?! Отпусти!
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 409,
    text:
      `
        Ростом в сравнении с ним она не вышла, но для придания скорости сил должно было хватить. А если еще и пинком под зад помочь…
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 410,
    text:
      `
        Если не уйдете по-хорошему, я буду вынуждена применить силу.
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Effect', id: 'Killer' },
      { story: EStoriesEn.UA, value: +1, category: 'Choice', id: 'LastWarning' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 411,
    text:
      `
        Ты-то? Силу? От такой хрупкой девчонки я еще подобного не слышал.
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 412,
    text:
      `
        EVE-13C ухмыльнулась. Предпочитая повестись на провокацию, ведь руки так и чесались.
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 413,
    text:
      `
        Спасибо за разрешение.
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 414,
    text:
      `
        Видимо, бравады в нем было больше, чем мозгов. Солдат с непередаваемым удовольствием схватила его за футболку, рывком прижимая к себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 415,
    text:
      `
        Ну что? Проверим, как далеко ты полетишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 416,
    text:
      `
        Стой! Что ты делаешь?!
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 417,
    text:
      `
        Спесь мгновенно слетела с его лица, едва он почувствовал силу хватки «хрупкой девчонки».
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 418,
    text:
      `
        $Имя Игрока$! Что за возня? Что… 
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 419,
    text:
      `
        Бабушка Юко вывернула из кухни, забрасывая полотенце на плечо. Поседевшие брови вздернулись от красочности картины.
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 420,
    text:
      `
        Вороненок! Отпусти его! Я его знаю!
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 421,
    text:
      `
        Повинуясь приказу, она расцепила пальцы. Пришелец неловко пошатнулся, но устоял. К превеликому неудовольствию Солдата.
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 422,
    text:
      `
        Бабушка Юко, откуда у вас такой цербер? Сначала глаз отвести не можешь, а потом…
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 423,
    text:
      `
        Я вырвать могу, если с этим проблемы имеются.
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 424,
    text:
      `
        Парень благоразумно сделал шаг назад, теперь уже поверив в ее способности.
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 425,
    text:
      `
        Вы двое! Успокоились, пока сырым полотенцем по причинному месту не отходила каждого!
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 426,
    text:
      `
        Каждому досталось — бабушка надавила им на головы руками, склоняя в поклоне друг перед другом.
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 427,
    text:
      `
        Извинились!
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 428,
    text:
      `
        За что мне извиняться, бабушка Юко? Это он ломился внутрь, хотя я ему кучу раз сказала, что мы закрыты!
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 429,
    text:
      `
        $Имя Игрока$!!!
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 430,
    text:
      `
        Голова опустилась еще на пару сантиметров под резким толчком.
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 431,
    text:
      `
        А мне за что извиняться? Я к вам в гости пришел, а она!
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 432,
    text:
      `
        Кей!!!
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 433,
    text:
      `
        Голова гостя опустилась на тот же уровень, что у Солдата. Но только от хорошего, по-матерински тяжелого, подзатыльника.
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 434,
    text:
      `
        Жуя губами, девушка все-таки подчинилась. Хотя от несправедливости пекло в носу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 435,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'LastWarning' }) <= 0
        },
        goTo: 436
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'LastWarning' }) >= 1
        },
        goTo: 438
      }
    ],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 436,
    text:
      `
        Извиняюсь за то, что хотела тебя вышвырнуть. И дать тебе хорошего пинка под зад.
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 437,
    text:
      `
        Ты хотела что?!
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 438,
    text:
      `
        Извиняюсь за то, что попыталась тебя выставить за дверь. После твоего разрешения на это.
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 439,
    text:
      `
        Я не разрешал!
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 440,
    text:
      `
        Ты усомнился в моей способности к применению силы. Я тебе ее показала.
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 441,
    text:
      `
        То, как они продолжали пререкаться даже с опущенными головами, тушило огонь раздражения внутри бабушки Юко. И заставляло сдавленно фыркать.
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 442,
    text:
      `
        Но воспитательный процесс не был окончен.
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 443,
    text:
      `
        Кей, теперь твоя очередь.
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 444,
    text:
      `
        Прости меня за то, что я хотел увидеться со своей старой знакомой и пытался пройти, а ты меня не пускала.
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 445,
    text:
      `
        Кей, нормальные извинения! Это вообще твоя вина, что ты даже позвонить мне не можешь! Предупредил бы о своем приходе, так проблем бы не было!
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 446,
    text:
      `
        А она что, на всех клиентов так кидается?
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 447,
    text:
      `
        Слова про сырое полотенце все еще в силе. Извиняйся быстро перед вороненком, и за последние слова тоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 448,
    text:
      `
        Хорошо-хорошо. Прости за это. И за то. Прости за все.
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 449,
    text:
      `
        То-то же. Несносные дети.
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 450,
    text:
      `
        Ладонь с затылков пропала, разрешая выпрямиться. Произнесенные слова извинений не помешали зыркать друг на друга исподлобья.
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 451,
    text:
      `
        Как же с вами сложно, даже знакомство — и то шиворот-навыворот. Давайте заново, с правильной ноты.
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 452,
    text:
      `
        Кей, это $Имя Игрока$. Мой вороненок и помощница. Живет здесь, со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 453,
    text:
      `
        С вами? Я думал, это новая официантка. Откуда ты? Приезжая?
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 454,
    text:
      `
        Он снова окатил ее с головы до ног заинтересованным взглядом. Солдат дернула губой.
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 455,
    text:
      `
        Так! Хватит. Ей не нравится, когда на нее так смотрят. Думаешь, ты первый такой озабоченный?! 
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 456,
    text:
      `
        Я не приезжая. Я отсюда. Если можно так сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 457,
    text:
      `
        Женщина покачала головой, останавливая Солдата, и рукой указала на гостя.
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 458,
    text:
      `
        $Имя Игрока$, это Кей. Они раньше с Коджи дружили.
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UA, value: 0, category: 'Person', id: 'Cerberus' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 459,
    text:
      `
        Да, было дело…
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 460,
    text:
      `
        Оба застыли со странным выражением лица; в глазах у Юко снова появился тот влажный отблеск на посеревшей радужке.
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 461,
    text:
      `
        Что удивительно — Кей состроил то же лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 462,
    text:
      `
        Солдат по-птичьи склонила голову к плечу. Потеребила низ фартука, привычно войдя в режим ожидания, когда бабушка Юко вынырнет из воспоминаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 463,
    text:
      `
        В этот раз потребовалось две минуты. Хлопок ладоней и улыбка рывками натянулась на морщинистое лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 464,
    text:
      `
        Ну, все. Хватит хандрить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 465,
    text:
      `
         $Имя Игрока$, иди на кухню. Я его обслужу. Попей чай, поешь. Банка с печеньем на холодильнике. 
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 466,
    text:
      `
        И еще за бульоном на плите посмотри, пожалуйста!
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 467,
    text:
      `
        Про бульон женщина кричала уже вслед Солдату, беспрекословно подчинившейся приказу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 468,
    text:
      `
        «Печенье все-таки поинтереснее, чем нависать над этим гаденышем в надежде, что он подавится».
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 469,
    text:
      `
        Что еще не работает? Сервера я на коленке вам не подниму, но с другой техникой…
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 470,
    text:
      `
        Солдат лениво перевела взгляд на вошедших. Содержимое теперь пустой банки из-под печенья медленно переваривалось, одаривая сонливостью.
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 471,
    text:
      `
        Плита у нас барахлит. Ставишь одну температуру, только отвернешься, а там уже другая.
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 472,
    text:
      `
        Я не работаю с… Кхм.
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 473,
    text:
      `
        Возражение заглохло под зажеванной губой.
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 474,
    text:
      `
         Хорошо. Плита так плита.
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    speaker: 'Гость',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 475,
    text:
      `
        Чайник еще, бабушка Юко. И касса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 476
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 476,
    text:
      `
        Точно! Самое важное это касса. Вечно тормозит, а сейчас и вовсе перестала реагировать на нажатие.
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 477,
    text:
      `
        Кей задавленно выдохнул, сжав переносицу пальцами.
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 478,
    text:
      `
        Что-то еще? Может быть, связанное с компьютерами, а, бабушка Юко? Я же работаю не совсем с бытовой техникой, больше с технологиями как таковыми.
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 479,
    text:
      `
        Ты ремонтник?
      `,
    buttons: [
      {
        text: '',
        goTo: 480
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 480,
    text:
      `
        Солдат жадно подтянула к себе тарелку с тайяки, в которой от пристального взгляда ремонтника обещала появиться дырка.
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 481,
    text:
      `
        Нет. Я, м-м-м… Пусть будет программист. Обойдемся без усложнений.
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 482,
    text:
      `
        Бабушка Юко, вам с чем-то помочь?
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 483,
    text:
      `
        Да, прибери стол, пожалуйста. А мы к кассе сходим.
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 484,
    text:
      `
        Я таких старых моделей давненько не видел. Хотя нет, видел, но неработающие и на барахолке. Удивительно, что ваш прослужил столько лет.
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 485,
    text:
      `
        Конечно, я его протирала, заботилась о нем, мастера иногда вызывала. Пока он не умер от старости…
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 486,
    text:
      `
        Боюсь, ваша касса следом за мастером отправится.
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 487,
    text:
      `
        Может быть, его просто от пыли почистить надо? Или какой-нибудь проводок отсоединился?
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 488,
    text:
      `
        Женщина с надеждой взглянула на Кея, будто тот командовал причинами поломки и мог изменять их по щелчку пальца.
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 489,
    text:
      `
        Думаю, там пыль уже свою экосистему построила.
      `,
    buttons: [
      {
        text: '',
        goTo: 490
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 490,
    text:
      `
        С натужным щелчком парень откинул металлическую крышку, из-под которой взвились клубы пыли. Аккурат ему в лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 491,
    text:
      `
        И касса только благодаря ей столько... Кх-а, кх-а... Прожила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    speaker: 'Кей',
    simple: require('../../../../Audio/UA/Cough.mp3'),
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 492,
    text:
      `
        Солдат с мстительным удовольствием усмехнулась, заполняя поднос грязной посудой.
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 493,
    text:
      `
        Когда, говорите, мастер тот умер?
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 494,
    text:
      `
        Он отмахивался от витающих частичек, благоразумно шагнув в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 495
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 495,
    text:
      `
        Дак лет пять, наверное, как его кремировали.
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 496,
    text:
      `
        Ага, и, видимо, останки мастера перебрались сюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 497
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 497,
    text:
      `
        Ладно, я допускаю, что проблема может быть в пыли. Особенно если не работает только сенсор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 498,
    text:
      `
        Касание к пушистым серым проводам было ошибкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 499,
    text:
      `
        На его контактах тут... Кх-х-а. 
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    speaker: 'Кей',
    simple: require('../../../../Audio/UA/Cough.mp3'),
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 500,
    text:
      `
        Нет, я сюда без противогаза не полезу.
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 501,
    text:
      `
        Касса два часа мучений спустя ожила. Скорее от вредности и настойчивости ремонтника.
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 502,
    text:
      `
        Бабушка Юко предпринимала попытку попрощаться с ним, но все никак не отпускала Кея с порога.
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 503,
    text:
      `
        Подожди, я тебе с собой еды дам. Знаю я тебя, одной лапшой быстрозавариваемой питаешься да всякими синтетическими пиццами.
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 504,
    text:
      `
        Несмотря на свой уважаемый возраст женщина пролетела мимо Солдата почти бегом.
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 505,
    text:
      `
        Бабушка Юко, все хорошо, не надо!
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 506,
    text:
      `
        Цыц! Попробуй только отказаться от домашней стряпни, я вороненка попрошу тебе ее за шиворот затолкать!
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 507,
    text:
      `
        Солдат кровожадно усмехнулась, в упор разглядывая побелевшего Кея. Тому явно такая перспектива не понравилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 508
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 508,
    text:
      `
        Не смотри на меня так. У меня когнитивный диссонанс.
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 509,
    text:
      `
        Когни - что?
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 510,
    text:
      `
        Ты выглядишь, как модель. Но ведешь себя, как стероидный вышибала из клуба. Это странно.
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 511,
    text:
      `
        Пожатие плечами было ему ответом. Солдат помнила, как бабушка не дала ей рассказать о себе. Значит, пришельцу этот секрет не доверяла.
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 512,
    text:
      `
        Слушай, ты прости за сегодняшнее. Мы с тобой вспылили, и оба были не правы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 513,
    text:
      `
        Ты был не прав. Я просто выполняла свою работу.
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 514,
    text:
      `
        Какая ты… Окей, хорошо, я был не прав. Надеюсь, ты довольна.
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 515,
    text:
      `
        Солдат кивнула, продолжая посматривать в сторону кухни. Судя по звукам, бабушка Юко упаковывала программисту с собой десятилитровую кастрюлю мисо-супа.
      `,
    buttons: [
      {
        text: '',
        goTo: 516
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 516,
    text:
      `
        Почему вороненок?
      `,
    buttons: [
      {
        text: '',
        goTo: 517
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 517,
    text:
      `
        Прозвище, произнесенное чужими губами, резануло по ушам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 518
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 518,
    text:
      `
        Не знаю. Но тебе так меня звать нельзя.
      `,
    buttons: [
      {
        text: '',
        goTo: 519
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 519,
    text:
      `
        Кей хмыкнул, неловко почесав затылок.
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 520,
    text:
      `
        Тебя надо было не вороненком называть, а ежом. Колючая, кусаешься.
      `,
    buttons: [
      {
        text: '',
        goTo: 521
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 521,
    text:
      `
        Ежи не кусаются.
      `,
    buttons: [
      {
        text: '',
        goTo: 522
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 522,
    text:
      `
        Зато ты еще как зубы показываешь. Я же к тебе с миром, всю душу открываю, а ты…
      `,
    buttons: [
      {
        text: '',
        goTo: 523
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 523,
    text:
      `
        На театральную постановку, которую разыгрывал перед ней Кей, EVE-13C отреагировала только вздернутой бровью.
      `,
    buttons: [
      {
        text: '',
        goTo: 524
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 524,
    text:
      `
        Мне тебя надо укусить, чтобы ты успокоился?
      `,
    buttons: [
      {
        text: '',
        goTo: 525
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 525,
    text:
      `
        Ха, к такому быстрому развитию событий я не был готов.
      `,
    buttons: [
      {
        text: '',
        goTo: 526
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 526,
    text:
      `
        Едва Солдат шагнула к нему, улыбка пропала с лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 527
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 527,
    text:
      `
        Стой-стой, это просто шутка!
      `,
    buttons: [
      {
        text: '',
        goTo: 528
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 528,
    text:
      `
        Да уж, сложно с тобой…
      `,
    buttons: [
      {
        text: '',
        goTo: 529
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 529,
    text:
      `
        На кухне загрохотало. Раздался треск тарелок, металлический звон покатившейся крышки. Видимо, от той самой десятилитровой кастрюли с мисо-супом.
      `,
    buttons: [
      {
        text: '',
        goTo: 530
      }],
    simple: require('../../../../Audio/UA/Breaking_Metal.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 530,
    text:
      `
        Солдат дернулась к кухне.
      `,
    buttons: [
      {
        text: '',
        goTo: 531
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 531,
    text:
      `
        Вороненок, Кей, все хорошо! Не волнуйтесь!
      `,
    buttons: [
      {
        text: '',
        goTo: 532
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 532,
    text:
      `
        Бабушка Юко, вам точно не надо помочь?
      `,
    buttons: [
      {
        text: '',
        goTo: 533
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 533,
    text:
      `
        Бабушка Юко, пожалуйста, не надо мне с собой давать половину холодильника!
      `,
    buttons: [
      {
        text: '',
        goTo: 534
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 534,
    text:
      `
        Все в порядке, я же сказала! Сейчас приду!
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 535,
    text:
      `
        Солдат замялась в сомнении. Приказ кристально чист и ясен, но все равно…
      `,
    buttons: [
      {
        text: '',
        goTo: 536
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 536,
    text:
      `
        $Имя Игрока$, спасибо тебе, что заботишься о бабушке Юко.
      `,
    buttons: [
      {
        text: '',
        goTo: 537
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 537,
    text:
      `
        Необычайно тихие и непривычно искренние слова заставили обернуться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 538
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 538,
    text:
      `
        Она дала мне крышу над головой, работу, подарила семью. Это мой долг, как С…
      `,
    buttons: [
      {
        text: '',
        goTo: 539
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 539,
    text:
      `
        Едва соскользнувшую с губ информацию пришлось прикусить вместе с языком.
      `,
    buttons: [
      {
        text: '',
        goTo: 540
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 540,
    text:
      `
        Я рад, что теперь ей не одиноко и ничего не угрожает. И что ты можешь защитить ее. Держи.
      `,
    buttons: [
      {
        text: '',
        goTo: 541
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 541,
    text:
      `
        Он протягивал измятую салфетку с расплывшимися цифрами.
      `,
    buttons: [
      {
        text: '',
        goTo: 542
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 542,
    text:
      `
        Мой номер телефона. Один из. Только не звони, а напиши кодовое слово, чтобы я понял, что это ты.
      `,
    buttons: [
      {
        text: '',
        goTo: 543
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 543,
    text:
      `
        С обратной стороны грязновато-белой салфетки из букв складывалось родное. «Кадзоку».
      `,
    buttons: [
      {
        text: '',
        goTo: 544
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 544,
    text:
      `
        У меня нет телефона.
      `,
    buttons: [
      {
        text: 'Взять',
        goTo: 545
      },
      {
        text: 'Отказаться',
        goTo: 548
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 545,
    text:
      `
        Солдат забрала салфетку, засунув в карман фартука.
      `,
    buttons: [
      {
        text: '',
        goTo: 546
      }],
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Person', id: 'Cerberus' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 546,
    text:
      `
        «Только, чтобы он отстал».
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 547,
    text:
      `
        Впервые слышу, чтобы в наше время у кого-то не было телефона… Возьмешь у бабушки Юко, у нее точно есть.
      `,
    buttons: [
      {
        text: '',
        goTo: 551
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 548,
    text:
      `
        Лучше бабушке Юко свой номер дай, а не мне. Ей он точно нужнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 549
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 549,
    text:
      `
        Солдат покачала головой, сразу же отворачиваясь от него. 
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 550,
    text:
      `
        Боюсь, она будет переживать, когда не сможет до меня дозвониться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 551
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 551,
    text:
      `
        Ты кто? Кодовые слова, несколько телефонов…
      `,
    buttons: [
      {
        text: '',
        goTo: 552
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 552,
    text:
      `
        Это простой вопрос безопасности. Не более.
      `,
    buttons: [
      {
        text: '',
        goTo: 553
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 553,
    text:
      `
        Солдат прищурилась, пытаясь считать с его лица правду. То, что он лгал, было ясно как день.
      `,
    buttons: [
      {
        text: '',
        goTo: 554
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 554,
    text:
      `
        Ну вот и все, а вы переживали больше всех. Всего-то пакетик гостинцев.
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 555,
    text:
      `
        Бабушка Юко прервала попытку допроса Кея. А Солдат уже последовательность до паяльника продумала…
      `,
    buttons: [
      {
        text: '',
        goTo: 556
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 556,
    text:
      `
        Всего-то?!
      `,
    buttons: [
      {
        text: '',
        goTo: 557
      }],
    speaker: 'Керберус',
    imageFront: require('../../../../Images/UA/Objects/Shop_Bag.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 557,
    text:
      `
        Судя по тому, как оттянуло его руки вниз, едва старушка передала свою ношу, десятилитровая кастрюля в пакете присутствовала.
      `,
    buttons: [
      {
        text: '',
        goTo: 558
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 558,
    text:
      `
        Зачем вы такую тяжесть тащили, бабушка Юко? Я бы помогла…
      `,
    buttons: [
      {
        text: '',
        goTo: 559
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 559,
    text:
      `
        Девушка потянулась к ручкам, готовая тягать что-то тяжелее ящика с картошкой. Но взлетевший вверх пакет говорил об обратном.
      `,
    buttons: [
      {
        text: '',
        goTo: 560
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 560,
    text:
      `
        «Слабак».
      `,
    buttons: [
      {
        text: '',
        goTo: 561
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 561,
    text:
      `
        С усмешкой EVE-13C всучила гостинцы Кею в руку, держа на одном указательном пальце.
      `,
    buttons: [
      {
        text: '',
        goTo: 562
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 562,
    text:
      `
        Бабушка Юко, она надо мной издевается!
      `,
    buttons: [
      {
        text: '',
        goTo: 563
      }],
    speaker: 'Кей',
    imageFront: require('../../../../Images/UA/Persons/Cerberus.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 563,
    text:
      `
        Не издевается, а просто подшучивает.
      `,
    buttons: [
      {
        text: '',
        goTo: 564
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 564,
    text:
      `
        Ладно, уже темнеет. Осторожнее на улице и заходи еще. Не смей пропадать опять на столько месяцев!
      `,
    buttons: [
      {
        text: '',
        goTo: 565
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 565,
    text:
      `
        Женщина махала ему рукой, пока парень удалялся по улице в темноту.
      `,
    buttons: [
      {
        text: '',
        goTo: 566
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 566,
    text:
      `
        Почему вы не сказали ему, кто я? Августа же знает.
      `,
    buttons: [
      {
        text: '',
        goTo: 567
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 567,
    text:
      `
        Плечи пенсионерки дрогнули.
      `,
    buttons: [
      {
        text: '',
        goTo: 568
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 568,
    text:
      `
        Слышала? Прости, я не думала тогда, что она может так отреагировать.
      `,
    buttons: [
      {
        text: '',
        goTo: 569
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 569,
    text:
      `
        Вас сложно было не подслушать, но я пыталась. Так почему?
      `,
    buttons: [
      {
        text: '',
        goTo: 570
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 570,
    text:
      `
        Женщина прикрыла глаза, сжав переносицу пальцами.
      `,
    buttons: [
      {
        text: '',
        goTo: 571
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 571,
    text:
      `
        Кей, он…
      `,
    buttons: [
      {
        text: '',
        goTo: 572
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 572,
    text:
      `
        Он хороший, но…
      `,
    buttons: [
      {
        text: '',
        goTo: 573
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 573,
    text:
      `
        Вы ему не доверяете? Мне его убрать?
      `,
    buttons: [
      {
        text: '',
        goTo: 574
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 574,
    text:
      `
        Солдат дернулась к двери, хватая первое попавшееся под руку — медный половник из сушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 575
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 575,
    text:
      `
        Он не мог далеко уйти, я попробую…
      `,
    buttons: [
      {
        text: '',
        goTo: 576
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 576,
    text:
      `
        Вороненок, нет!
      `,
    buttons: [
      {
        text: '',
        goTo: 577
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 577,
    text:
      `
        Окрик заставил замереть у двери. Половник вернулся обратно на сушилку.
      `,
    buttons: [
      {
        text: '',
        goTo: 578
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 578,
    text:
      `
        Еще во время дружбы с Коджи, Кей постоянно вляпывался в неприятности. А когда повзрослел, неприятности стали еще больше.
      `,
    buttons: [
      {
        text: '',
        goTo: 579
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 579,
    text:
      `
        Значит, он опасен.
      `,
    buttons: [
      {
        text: '',
        goTo: 580
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 580,
    text:
      `
        Нет, не опасен. Просто он отличается особым везением. И проблемы от этого только больше.
      `,
    buttons: [
      {
        text: '',
        goTo: 581
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 581,
    text:
      `
        Лучше не болтать направо и налево о твоем прошлом. Сейчас ты — мой вороненок $Имя Игрока$, самая лучшая помощница и просто хороший человек. Поняла?
      `,
    buttons: [
      {
        text: '',
        goTo: 582
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 582,
    text:
      `
        Пахнущая бытовой химией рука коснулась щеки, смахнув невесть откуда взявшуюся пыль. В груди стало тепло-тепло.
      `,
    buttons: [
      {
        text: '',
        goTo: 583
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 583,
    text:
      `
        Поняла.
      `,
    buttons: [
      {
        text: '',
        goTo: 584
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 584,
    text:
      `
        Доверчиво прикрытые глаза так и не открыла, ткнувшись старушке в плечо.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UA', 'Глава 1', 'Часть 3', '0')
        }
      }],
    achievement: { story: EStoriesEn.UA, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  }
])
