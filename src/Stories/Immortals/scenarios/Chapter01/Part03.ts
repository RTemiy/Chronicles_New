import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { redFlash, whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.Immortals, chapterName: 'Глава 1', partName: 'Часть 3', code: '0' }, [
  {
    id: 0,
    text:
      `
        Открыв глаза, я снова увидела это таинственное пространство, что находилось вне законов нашего привычного мира. 
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
        Мне еще предстояло выяснить, почему я то и дело перемещаюсь в различные временные промежутки не по своему желанию. 
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
        «Через сон? Воля проводника?»
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 3,
    text:
      `
        Такое скорое возвращение сюда — удивляло. Казалось, что пока я не разберусь в эпохе Теслы, мои шансы еще раз обратиться к проводнику с вопросами — крайне малы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 4,
    text:
      `
        Однако я ошибалась и теперь, оказавшись здесь, я могу попытаться узнать хоть какую-то важную информацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 5,
    text:
      `
        Оглядевшись, я поняла, что кроме меня здесь никого нет. Это место выглядело совсем безжизненно и пугало своими размерами. Было боязно от мысли, что я могу остаться здесь навсегда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 6,
    text:
      `
        «Нет… Глупости. Ему это не нужно, никому это не нужно. Здесь должна быть лазейка, мне лишь необходимо ее найти!»
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 7,
    text:
      `
        И я пошла: 
      `,
    buttons: [
      {
        text: 'Прямо',
        goTo: 8
      },
      {
        text: 'Налево',
        goTo: 13
      },
      {
        text: 'Направо',
        goTo: 18
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 8,
    text:
      `
        Самым простым решением мне виделось просто пойти вперед. Я шла по извилистым дорожкам, наблюдая одни и те же парящие камни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 9,
    text:
      `
        «Я хожу по кругу?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 10,
    text:
      `
        И действительно, я вновь оказалась в самом начале своего пути. Пришлось снова выбирать маршрут. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 13,
    text:
      `
        Я шла по каменным дорожкам довольно долго, пока не почувствовала легкий сладостный аромат, заставивший меня остановиться и внимательнее рассмотреть прекрасный пейзаж. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    parallax: 'left',
    stats: [{ value: 1, category: 'Choice', id: 'GoLeftGuidesWorld' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 14,
    text:
      `
        Передо мной раскинулось поле, усеянное цветами. Это было необычайно красивое зрелище, которое вселяло в этот мир новые удивительные краски. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    ambient: require('../../../../Sounds/Immortals/Flowerfield.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Flowerfield.jpg')
  },

  {
    id: 15,
    text:
      `
        Я прилегла и почувствовала, как десятки растений приятно щекочут кожу.  
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Flowerfield.jpg')
  },

  {
    id: 16,
    text:
      `
        Эта минутная передышка помогла мне расслабиться. Было так спокойно и легко, что мне хотелось остаться тут подольше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Flowerfield.jpg')
  },

  {
    id: 17,
    text:
      `
        «Но время не ждет, нужно идти дальше». 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Flowerfield.jpg')
  },

  {
    id: 18,
    text:
      `
        Я шла по каменным дорожкам довольно долго, пока впереди не заметила еще одну развилку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 19,
    text:
      `
        В этом бесконечном блуждании я решила, что…
      `,
    buttons: [
      {
        text: 'Поверну налево',
        goTo: 20
      },
      {
        text: 'Поверну направо',
        goTo: 22
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 20,
    text:
      `
        «Что за лабиринт…» 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 21,
    text:
      `
        Какое-то время спустя, мне удалось пройти дальше. На секунду я остановилась, чтобы переварить происходящее, но решила долго не задерживаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 22,
    text:
      `
        Дорога привела меня к крутому обрыву, ознаменовавшему конец пути. Взглянув на открывшийся мне вид, я увидела нечто похожее на бурлящий водоворот. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Waterfall.jpg')
  },

  {
    id: 23,
    text:
      `
        С каждой секундой он будто бы затягивал меня, гипнотизировал, завлекая познакомиться с бездной ближе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Waterfall.jpg')
  },

  {
    id: 24,
    text:
      `
        Я быстро перевела взгляд на небо, но и оно было неспокойным, а сильные порывы ветра устрашали, пытались сбить с ног.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Waterfall.jpg')
  },

  {
    id: 25,
    text:
      `
        Немедленно развернувшись, я убежала прочь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Waterfall.jpg')
  },

  {
    id: 26,
    text:
      `
        Вскоре я нашла узенькую дорожку, которая пролегала между скал. Было немного тесновато, но на мое счастье путь занял немного времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World.jpg')
  },

  {
    id: 27,
    text:
      `
        И снова бескрайние просторы предстали перед моим взором. Это было похоже на лабиринт, где нет выхода, а мои блуждания — это лишь попытка скоротать время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 28,
    text:
      `
        Кое-что все же изменилось. Я увидела странное зеленое свечение. На миг мне послышался отчетливый звук приближающейся грозы.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    simple: require('../../../../Sounds/Immortals/Thunder.mp3'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 29,
    text:
      `
        «Что же там такое…»
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 30,
    text:
      `
        Захотелось заглянуть туда, убедиться в своей безопасности, посмотреть на природу этого явления.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 31,
    text:
      `
        — Как там говорится? Любопытство — не порок? — знакомый голос заставил меня вздрогнуть и остановиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 32,
    text:
      `
        — Проводник, так ты все-таки здесь, — я была слишком зла на него, чтобы обмениваться любезностями, поэтому перешла сразу к сути. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 33,
    text:
      `
        — Что дальше? Ты показал отрывок из моего прошлого со странными событиями, и все эти люди… Слишком много информации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 34,
    text:
      `
        — Это только начало, дорогая моя, — снова ухмылка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 35,
    text:
      `
        — Я не смогу покинуть это место, пока все не вспомню, так?
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 36,
    text:
      `
        — Верно, — проводник начал ходить вокруг меня. — Я не тюремщик, не думай так обо мне. Ты всего лишь волею судьбы была втянута в конфликт, длящийся веками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 37,
    text:
      `
        — Но что по итогу я должна буду сделать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 38,
    text:
      `
        — Это сложно объяснить. В моих силах лишь помогать и направлять тебя. Остальное — в твоих руках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 39,
    text:
      `
        Все эти загадки сильно утомляли, но я не уловила в тоне его голоса издевку или безразличие. Как будто его самого это не забавляло, а, напротив, волновало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 40,
    text:
      `
        Возможно ли что он тоже заложник ситуации, как и я или все это просто притворство? Как мне к этому относиться?
      `,
    buttons: [
      {
        text: 'С пониманием',
        goTo: 41
      },
      {
        text: 'Устроить сцену',
        goTo: 45
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 41,
    text:
      `
        «Нам не стоит ругаться сейчас. Он единственный, кто понимает, что здесь происходит. Я не хочу рушить свое и без того шаткое положение». 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 42,
    text:
      `
        — Что ж, раз только в моих силах разобраться — принимаю этот вызов. Спасибо за помощь. Хоть какую-то.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 43,
    text:
      `
        Проводник ничего мне не ответил. Краем глаза я заметила лишь его улыбку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 569
      }],
    message: 'Общение с вами приятно проводнику',
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Guide' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 44,
    text:
      `
        Я решила продолжить нашу беседу и спросить:
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 45,
    text:
      `
        «Мне плевать, я не игрушка, которой можно вертеть, как всем вздумается!»
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 46,
    text:
      `
        — Я устала от твоих увиливаний. Ответь конкретно, что здесь происходит и почему я должна все это переживать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 47,
    text:
      `
        Проводник недовольно вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 48,
    text:
      `
        — Я же говорил, у меня нет такого права. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 49,
    text:
      `
        — Зато, я смотрю, у тебя есть право кидать меня куда попало без должной подготовки. Рисковать моей жизнью и нервами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 50,
    text:
      `
        — Я не ожидал, что ты поймешь мое положение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 51,
    text:
      `
        — А почему я вообще должна понимать тебя? Ты же ничего мне не объясняешь!
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    message: 'Общение с вами неприятно проводнику ',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Guide' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 52,
    text:
      `
        Немного успокоившись, я решила продолжить нашу беседу и спросить:
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 53,
    text:
      `
        — Это зеленое свечение как-то связано с моим следующим этапом? 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 54,
    text:
      `
        Проводник заметно переменился, подошел к этому месту и наклонился.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 55,
    text:
      `
        — Рано, — коротко, без объяснений, так похоже на него. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 56,
    text:
      `
        Он выдержал паузу, затем продолжил:
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 57,
    text:
      `
        — Но раз ты здесь, то я должен показать тебе кое-что, — тон его голоса изменился, стал более отстраненным.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 58,
    text:
      `
        Он протянул мне руку, как бы намекая, чтобы я подошла ближе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 59,
    text:
      `
        Когда мы соприкоснулись, мне впервые удалось почувствовать его теплоту. Длинные, немного шершавые пальцы аккуратно держали мою ладонь.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 60,
    text:
      `
        «Он не какой-то монстр, нет, он человек!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 61,
    text:
      `
        Затем мужчина другой рукой дотронулся до моего лба. При всем его уверенном виде, всего на миг, мне удалось уловить легкую дрожь в этих прикосновениях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 62,
    text:
      `
        Закрыв глаза, я ощутила лёгкий импульс, а потом увидела совершенно другую обстановку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 63,
    text:
      `
        Вид большой оживленной площади захлестнул меня новыми ощущениями.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    beforeBegin: whiteFlash,
    message: '<i> Помпеи 79 г. н.э',
    music: require('../../../../Sounds/Immortals/Pompeii.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 64,
    text:
      `
        Я огляделась вокруг и с нескрываемым удивлением смотрела на величественные колонны, подпирающие фасады зданий; людей, одетых в туники и явно куда-то спешивших. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 65,
    text:
      `
        Никто из них не стоял на месте — все они были словно винтики в одном большом механизме городской жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 66,
    text:
      `
        А я была лишь скромным зрителем, который стал невольным свидетелем совершенно новой эпохи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 67,
    text:
      `
        Несколько прохожих, которые несли длинную палку с висящими на ней кувшинами, уверенно направлялись в мою сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 68,
    text:
      `
        Я пыталась привлечь их внимание, но эти люди никак не реагировали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 69,
    text:
      `
        «Вот-вот они врежутся в меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 70,
    text:
      `
         Я была готова уворачиваться, однако прохожие прошли сквозь меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 71,
    text:
      `
        «Что за…?»
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 72,
    text:
      `
        Все, что мне удалось почувствовать — это легкое покалывание по всему телу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 73,
    text:
      `
        Я попробовала прикоснуться к постаменту, на котором возвышалась статуя героя этой эпохи — тот же эффект. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 74,
    text:
      `
        «Я словно призрак…»
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 75,
    text:
      `
        Мое внимание привлекла девушка, заметно отличающаяся ото всех остальных горожан. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 76,
    text:
      `
        Черные, как смоль волосы, бледная и чистая кожа. Изящная походка, движения были похожи на танец: плавные, грациозные и неторопливые. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Goddess.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 77,
    text:
      `
        Она целенаправленно двигалась к храму, игнорируя все препятствия на своем пути. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Goddess.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 78,
    text:
      `
        Вскоре она опустилась на колени и начала молиться, проговаривая: 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 79,
    text:
      `
        — Отец наш Юпитер, оберегай этот город и его жителей. Пусть твое милостивое правление озарит этих несчастных и защитит их в нужный момент!
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    message: 'Юпитер в древнеримской мифологии — отец всех богов',
    imageFront: require('../../../../Images/Immortals/Persons/Goddess.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 80,
    text:
      `
        «Она что, плачет? Что же происходит? Я должна наблюдать за ней?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 81,
    text:
      `
        Через некоторое время небо заволокло тучами. Люди засуетились и стали искать укрытие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 82,
    text:
      `
        Я единственная осталась стоять в центре площади за спиной у этой девушки, которая не шевелилась и продолжала повторять шепотом заветные слова. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square.jpg')
  },

  {
    id: 83,
    text:
      `
        Пошел дождь, окрашивая площадь в кроваво-красные тона. Со всех сторон стали слышны крики, люди падали на колени, умоляя богов не гневаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    ambient: require('../../../../Sounds/Immortals/Rain.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square_Rain.jpg')
  },

  {
    id: 84,
    text:
      `
        Среди всего этого хаоса, лишь одна фигура сохраняла спокойствие и хладнокровие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square_Rain.jpg')
  },

  {
    id: 85,
    text:
      `
        Белое одеяние таинственной незнакомки постепенно становилось алым, а на лице оставались красные капли. Возникало ощущение, будто бы из ее глаз лились кровавые слезы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square_Rain.jpg')
  },

  {
    id: 86,
    text:
      `
        В какой-то момент на площадь вышла фигура в черной мантии. Уверенным шагом незнакомец двигался к храму, где все еще сидела девушка и молилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square_Rain.jpg')
  },

  {
    id: 87,
    text:
      `
        Он подошел к ней и аккуратно поднял, взяв под руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square_Rain.jpg')
  },

  {
    id: 88,
    text:
      `
        Они спешно двинулись в толпу горожан и все, что я успела заметить прежде, чем они скрылись — как плавными и мягкими движениями мужчина накрыл спутницу своей мантией. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Pompei_Square_Rain.jpg')
  },

  {
    id: 89,
    text:
      `
        Вспышка и я снова оказалась лицом к лицу с проводником. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 90
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/Immortals/Guide.mp3'),
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 90,
    text:
      `
        То, что я видела было определенно древним периодом. Что спросить?
      `,
    buttons: [
      {
        text: 'Что это за эпоха?',
        goTo: 91,
        func: () => {
          scenarioManager.changeSceneButtonStatus(90, 0, false)
          scenarioManager.manageDialog(90, [0, 1, 2], [3])
        }
      },
      {
        text: 'Почему пошел кровавый дождь?',
        goTo: 99,
        func: () => {
          scenarioManager.changeSceneButtonStatus(90, 1, false)
          scenarioManager.manageDialog(90, [0, 1, 2], [3])
        }
      },
      {
        text: 'Кто эта девушка?',
        goTo: 104,
        func: () => {
          scenarioManager.changeSceneButtonStatus(90, 2, false)
          scenarioManager.manageDialog(90, [0, 1, 2], [3])
        }
      },
      {
        text: 'Завершить диалог',
        goTo: 108,
        isActive: false
      }],
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(90)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 91,
    text:
      `
        Мой собеседник вздохнул, а затем ответил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 92,
    text:
      `
        — Древний, некогда великий город — Помпеи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 93,
    text:
      `
        — Тот самый, который был уничтожен из-за извержения вулкана? 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 94,
    text:
      `
        — В точку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 95,
    text:
      `
        — Что же в этом времени особенного? Я не была там кем-то живым, скорее наоборот, как будто бы бестелесным существом… 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 96,
    text:
      `
        — Так и должно было быть. Тебе не нужно ничего делать, только смотреть, ведь это место имеет ключевое значение во всей истории. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 97,
    text:
      `
        — Но почему не рассказать мне все сразу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 98,
    text:
      `
        — Я связан по рукам и ногам… Все, что я могу — это помогать тебе маленькими шажками приближаться к истине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(90, 98)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 99,
    text:
      `
        — Это было первое из многих предзнаменований о конце. И та девушка, как никто другой, это чувствовала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 100,
    text:
      `
        — Все так запутано… Мне до сих пор не верится, что именно я стала участником этих событий.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 101,
    text:
      `
        Он улыбнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 102,
    text:
      `
        — И ты, разумеется, не скажешь почему? 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 103,
    text:
      `
        — Всему свое время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(90, 103)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 104,
    text:
      `
        Проводник стал еще отстраненнее. Сквозь капюшон я могла лишь догадываться о его эмоциях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 105,
    text:
      `
        — Эта богиня римского пантеона. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    message: 'Пантеон — группа богов, принадлежащих к одной религии или мифологии',
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 106,
    text:
      `
        — Но что божество делало среди людей? 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 107,
    text:
      `
        — Я покажу тебе в следующий раз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(90, 107)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 108,
    text:
      `
        Минуту мы смотрели друг на друга: обреченно, сочувственно. Пока проводник не произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 109,
    text:
      `
        — Тебе пора возвращаться, $Имя Игрока$. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 110,
    text:
      `
        — Как скоро мы увидимся вновь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 111,
    text:
      `
        — Это зависит от твоего продвижения и, — он немного помедлил, — от твоих выборов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 112,
    text:
      `
        — Подожди, — я хотела узнать больше об эпохе Теслы. — Почему именно Никола? Что я должна сделать? И почему на меня нападают какие-то монстры? 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 113,
    text:
      `
        — В прошлом есть много твоих соратников. Они помогут тебе узнать правду и докопаться до истины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 114,
    text:
      `
        — Но запомни одно. Есть и те, кто преследует исключительно свои цели. Будь осторожна с теми, кому хочешь довериться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 115,
    text:
      `
        Мужчина подошел ко мне, слегка прикоснулся к моему лбу и я увидела уже привычную мне темноту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  },

  {
    id: 116,
    text:
      `
        Я чувствовала себя разбитой и подавленной, поэтому проснулась уже после обеда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/Immortals/Nowadays.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 117,
    text:
      `
        Несмотря на то, что прошло всего несколько дней с начала учебы, у меня было ощущение непомерной усталости.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 118,
    text:
      `
        События развивались слишком стремительно и еще много всего предстояло понять. Раз уж выдалось свободное время, мне хотелось отдохнуть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 119,
    text:
      `
        С другой стороны, появилась возможность немного поработать удаленно. Деньги никогда не будут лишними. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 120,
    text:
      `
        Чем мне лучше всего заняться?
      `,
    buttons: [
      {
        text: 'Своими делами',
        goTo: 121
      },
      {
        text: 'Начать работать',
        goTo: 134
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 121,
    text:
      `
        Сегодня действительно был подходящий день, чтобы уделить время себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 122,
    text:
      `
        Я лениво потянулась, сходила на кухню и взяла с собой в комнату несколько вкусняшек. И:
      `,
    buttons: [
      {
        text: 'Порисовала ',
        goTo: 123
      },
      {
        text: 'Поиграла в новеллу',
        goTo: 125
      },
      {
        text: 'Поиграла в компьютерную игру',
        goTo: 129
      },
      {
        text: 'Почитала книгу',
        goTo: 131
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 123,
    text:
      `
        Ничто так не успокаивало, как отдаться вдохновению и набросать что-нибудь карандашом в альбоме. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Sketch_Grand.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 124,
    text:
      `
        Я не училась профессиональному рисованию, мне просто нравилось включать себе легкую музыку и воплощать на бумаге появляющиеся в голове образы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Sketch_Grand.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 125,
    text:
      `
        Удобно устроившись на кровати, я запустила мобильное приложение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Novel.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 126,
    text:
      `
        История повествовала о древней Японии и отважной девушке — гейше, которая через сложные испытания, смогла найти свое место в мире и обрести любовь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Novel.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 127,
    text:
      `
        Я получила удовольствие от игры и задумалась о своем положении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Novel.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 128,
    text:
      `
        Моя спокойная жизнь меняется, я чувствую себя главной героиней, но только своей истории. Так ли это все радужно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Novel.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 129,
    text:
      `
        Я села за стол и включила компьютер. Мне хотелось отвлечься от всего и погрузиться в другой мир, как бы иронично это не звучало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Computergame_W.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 130,
    text:
      `
        Сюжет игры повествовал об охотнике на чудовищ, который через политические войны, бесконечные поиски и множество опасностей — смог обрести свое заветное спокойствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Computergame_W.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 131,
    text:
      `
        Я открыла начатую ранее книжку про постапокалипсис. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Book.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 132,
    text:
      `
        Сюжет повествовал про отца и сына, которым приходится покинуть свой дом в поисках безопасного места. Во время путешествия они пытаются выжить в суровом новом мире. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Book.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 133,
    text:
      `
        История наполнена философскими мыслями, а слог автора краток и история не забита лишней «водой».
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Book.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 134,
    text:
      `
        Несмотря на свое самочувствие, я все же решила пересилить себя и поработать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Computer_Work.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 135,
    text:
      `
        В конце концов мне надо было продолжать зарабатывать на самостоятельную жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Computer_Work.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 136,
    text:
      `
        Я села за компьютер, открыла сайт для фрилансеров, которые выполняют школьные задания на заказ и написала несколько сочинений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    message: 'Вы заработали немного денег',
    imageFront: require('../../../../Images/Immortals/Objects/Computer_Work.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +150, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 137,
    text:
      `
        Так прошло несколько дней. Мне становилось гораздо лучше. Никаких перемещений, никаких загадок от проводника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 138,
    text:
      `
        Обычные дни, по которым я скучала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 139,
    text:
      `
        Но с другой стороны, во мне играло безмерное любопытство. Неужели я действительно смогу сделать что-то великое? А смогу ли? 
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 140,
    text:
      `
        Терзающие меня вопросы не давали крепко спать. В какой-то момент мне даже начало казаться, что стоит закрыть глаза и я исчезну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 141,
    text:
      `
        Затеряюсь в этих непонятных эпохах и никогда больше не увижу свою реальность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 142,
    text:
      `
        К счастью, все было тихо и спокойно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 143,
    text:
      `
        Ближе к вечеру родители сказали, что хотят сходить в кино и попросили присмотреть за порядком в доме. 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 144,
    text:
      `
        Я не поняла к чему, была сказана последняя фраза, но не придала этому большого значения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 145,
    text:
      `
        Когда мама с папой ушли, я решила помыть посуду. Мама, конечно, переживает за мое состояние, но я думаю, что уже достаточно окрепла для выполнения простых домашних дел. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 146,
    text:
      `
        Неожиданно раздался звонок в дверь.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    simple: require('../../../../Sounds/Immortals/Doorbell.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 147,
    text:
      `
        «Наверное родители забыли что-то».
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 148,
    text:
      `
        Я открыла входную дверь и очень удивилась. На пороге стояли Леон и Скарлетт с набитыми пакетами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 149,
    text:
      `
        — Ну, привет! — Леон обнял меня, похлопав по спине. — Как ты себя чувствуешь? Мы давно тебя не видели…
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 150,
    text:
      `
        —Вот-вот, — Скарлетт занесла несколько пакетов внутрь. — А если ты никуда не ходишь, значит, мы придем к тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 151,
    text:
      `
        — Ребята… — это искренне растрогало меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 152,
    text:
      `
        Я так и стояла около двери, пока Леон не потянул меня за руки в сторону кухни.  Затем он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 153,
    text:
      `
        — Тут немного алкоголя, — парень хитро улыбнулся, — а ты организуй нам что-нибудь поесть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 154,
    text:
      `
        — Как же хорошо, что завтра выходные, — Скарлетт плюхнулась на стул и открыла банку пива. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 155,
    text:
      `
        Атмосфера напоминала прежние времена, когда мы чаще были вместе. Я очень оценила их поддержку и эту спонтанность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 156,
    text:
      `
        Встречая ребят, я обратила внимание на дом Шерилл, в ее комнате горел свет.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 157,
    text:
      `
        «Интересно, как она там… Может, стоит пригласить ее к нам?» 
      `,
    buttons: [
      {
        text: 'Позвать Шерил',
        goTo: 158
      },
      {
        text: 'Продолжить общаться с друзьями',
        goTo: 163
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 158,
    text:
      `
        Уверена, Шерил обрадуется такому развитию событий. Я обратилась к ребятам: 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    stats: [{ value: 1, category: 'Choice', id: 'InviteCheryl' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 159,
    text:
      `
        — Вы не против, если я позову соседку, которая живет рядом?
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 160,
    text:
      `
        — Ты про Шерил? Хоть мы и редко видимся с ней, но надеюсь наша вечеринка и ей поднимет настроение, — сказала Скарлетт, искренне улыбаясь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 161,
    text:
      `
        — Конечно не против, чем больше народу, тем веселее, — Леон доставал несколько бутылок из пакета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 162,
    text:
      `
        Я набрала Шерил и через несколько минут, она уже стояла с нами на кухне и светилась от счастья. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    message: 'Шерил благодарна вам за хороший вечер',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Cheryl' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 163,
    text:
      `
        Я решила не беспокоить Шерил. К тому же недавно она говорила, что хотела больше времени посвятить учебе и разгрести долги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 164,
    text:
      `
        Я смотрела на Леона, который в это время ставил несколько бутылок спиртного на стол, и Скарлетт, мило устроившуюся на стуле, поджав ноги под себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 165,
    text:
      `
        Мне хотелось сосредоточиться на вечере с ними и забыть обо всех проблемах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 166,
    text:
      `
        Я решила заняться вопросом еды. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 167,
    text:
      `
        «Побаловать ребят чем-нибудь вкусненьким и заказать еду? Деньги вроде бы есть… Или ограничимся бутербродами?» 
      `,
    buttons: [
      {
        text: 'Заказать роллы (-200)',
        goTo: 168
      },
      {
        text: 'Заказать пиццу (-150)',
        goTo: 182
      },
      {
        text: 'Сделать бутерброды',
        goTo: 194
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 168,
    text:
      `
        Все же я давно не ела блюда азиатской кухни, поэтому заказала несколько наборов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 169,
    text:
      `
        Ребята с удовольствием накинулись на угощения, между делом благодаря меня за вкусный ужин. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Rolls.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -200, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 170,
    text:
      `
        
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) >= 1
        },
        goTo: 171
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) <= 0
        },
        goTo: 174
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 171,
    text:
      `
        Шерил сидела тихонько и смущалась. Несмотря на царящее вокруг веселье, она довольно долго привыкала к людям.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 172,
    text:
      `
        Конечно, ей и раньше приходилось видеть моих студенческих друзей, однако они особо не общались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 173,
    text:
      `
        Но все же она выглядела счастливой и сытой. В руке красовался бокал с коктейлем, а лицо выражало умиротворение и спокойствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    message: 'Ваши друзья обрадовались вкусной еде!',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 174,
    text:
      `
        Леон и Скарлетт одобрили мой выбор. Они с удовольствием накинулись на еду, попутно благодаря меня за такой вкусный ужин.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    message: 'Ваши друзья обрадовались вкусной еде!',
    imageFront: require('../../../../Images/Immortals/Objects/Rolls.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 175,
    text:
      `
        Я попыталась взять ролл палочками, но мои попытки были тщетны. В отчаянии я потянулась за вилкой, но меня остановил Леон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Rolls.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 176,
    text:
      `
        — За двадцать два года ты так и не научилась есть суши, неумеха? Давай покажу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 177,
    text:
      `
        Он подошел сзади и взял мои руки в свои. Аккуратно начал расставлять пальцы, чтобы я правильно держала палочки, попутно объясняя, что это целое искусство.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 178,
    text:
      `
        Меня бросило в жар, когда я почувствовала его дыхание на своей шее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 179,
    text:
      `
        Тем не менее с его поддержкой, трясущимися руками, у меня получилось схватить ролл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 180,
    text:
      `
        — Рыцарь, как всегда, подоспел вовремя, да? — отшутилась я, чтобы скрыть смущение.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 181,
    text:
      `
        Мы улыбнулись и продолжили вечеринку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'EverythingForFriends' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 182,
    text:
      `
        Сейчас мне очень хотелось горячую пиццу с тянущимся сыром, колбасками... 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 183,
    text:
      `
        Ребята с удовольствием накинулись на угощения, между делом благодаря меня за вкусный ужин.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Pizza.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -150, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 184,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) >= 1
        },
        goTo: 185
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) <= 0
        },
        goTo: 188
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 185,
    text:
      `
        Шерил сидела тихонько и смущалась. Несмотря на царящее вокруг веселье, она довольно долго привыкала к людям.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 186,
    text:
      `
        Конечно, ей и раньше приходилось видеть моих студенческих друзей, однако они особо не общались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 187,
    text:
      `
        Но все же она выглядела счастливой и сытой. В руке красовался бокал с коктейлем, а лицо выражало умиротворение и спокойствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    message: 'Ваши друзья обрадовались вкусной еде!',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 188,
    text:
      `
        Леон и Скарлетт одобрили мой выбор. Они с удовольствием накинулись на еду, попутно благодаря меня за такой вкусный ужин.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    message: 'Ваши друзья обрадовались вкусной еде!',
    imageFront: require('../../../../Images/Immortals/Objects/Pizza.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 189,
    text:
      `
        Во время трапезы Скарлетт взяла нож и вилку, чтобы нарезать кусок пиццы. Леон не смог на это смотреть, отвернулся и проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Pizza.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 190,
    text:
      `
        — Скарлетт, ты уничтожаешь во мне внутреннего итальянца… Кто ж так делает? 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 191,
    text:
      `
        — Какой из тебя итальянец, не смеши, — девушка демонстративно начала орудовать приборами. — Зато я не испачкаюсь, в отличие от некоторых. 
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 192,
    text:
      `
        — $Имя Игрока$, сделай с этим что-нибудь!
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 193,
    text:
      `
        Мне было очень весело наблюдать за ними. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 194,
    text:
      `
        Я решила не тратить деньги и сделала бутерброды из того, что нашла в холодильнике. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Sandwitches.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 195,
    text:
      `
        Все-таки лучше стараться экономить, где это возможно. Ребята были рады любой закуске, тем более, получилось довольно вкусно.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Sandwitches.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 196,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) >= 1
        },
        goTo: 197
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) <= 0
        },
        goTo: 200
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 197,
    text:
      `
        Шерил сидела тихонько и смущалась. Несмотря на царящее вокруг веселье, она довольно долго привыкала к людям.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 198,
    text:
      `
        Конечно, ей и раньше приходилось видеть моих студенческих друзей, однако они особо не общались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 199,
    text:
      `
        Но все же она выглядела счастливой и сытой. В руке красовался бокал с коктейлем, а лицо выражало умиротворение и спокойствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 200,
    text:
      `
        Леон и Скарлетт попросили меня достать что-нибудь сладенькое к нашему небольшому пиршеству. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Sandwitches.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 201,
    text:
      `
        На наше счастье, у меня было припасено шоколадное печенье. Я принесла закуску и мы продолжили общаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 202,
    text:
      `
        — Спасибо вам огромное за то, что пришли меня поддержать! Жаль у нас не так много времени… 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 203,
    text:
      `
        — Хотя после того, как вернутся родители, мы могли бы пойти в какой-нибудь бар или еще чего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 204,
    text:
      `
        — Совсем забыли тебе сказать, — проговорила Скарлетт. — Мы попросили твоего отца придумать какую-нибудь байку, чтобы устроить тебе сюрприз. Поэтому они сегодня не вернутся и вся ночь наша!
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 205,
    text:
      `
        — Да вы сумасшедшие! — я не смогла сдержать эмоций и тепло обняла каждого в этой комнате. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 206,
    text:
      `
        После того как с едой было покончено, мы отправились в гостиную и немного приукрасили ее, создав настоящую атмосферу вечеринки.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    music: require('../../../../Sounds/Immortals/Disco.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 207,
    text:
      `
        — Так, что, — Леон поставил несколько бутылок крепкого на стол. — Разгон кончился, пора начать настоящую движуху! 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 208,
    text:
      `
        Я: 
      `,
    buttons: [
      {
        text: 'Выпила алкоголь',
        goTo: 209
      },
      {
        text: 'Ограничилась соком',
        goTo: 211
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 209,
    text:
      `
        Мы выпили несколько рюмок. Алкоголь расслаблял, становилось веселее и задорнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 210,
    text:
      `
        Кто-то из ребят включил драйвовую музыку и все начали танцевать.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Addiction' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 211,
    text:
      `
        Пить алкоголь не хотелось. И без него было весело и хорошо. Я пила яблочный сок, мы включили драйвовую музыку и начали танцевать.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 212,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) >= 1
        },
        goTo: 213
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) <= 0
        },
        goTo: 276
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 213,
    text:
      `
        Шерил, Леон и Скарлетт чувствовали себя прекрасно. Они веселились, включали любимые треки и отрывались по полной. Мне же оставалось просто не отставать от них. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 214,
    text:
      `
        Чтобы немного передохнуть от танцев, мы решили поиграть в «Угадай мелодию», где неожиданно для всех победила Шерил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 215,
    text:
      `
        Она оказалась тем еще меломаном и утерла нос всем присутствующим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 216,
    text:
      `
        Леон продолжал нас радовать своими навыками бармена, делая из того, что у нас было, потрясающие и вкусные коктейли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 217,
    text:
      `
        — Леон, существует такое дело, которое тебе не дается идеально? — спросила я, подходя к нему за очередным напитком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 218,
    text:
      `
        — О, да, я не очень хорош в семейных делах, — с иронией проговорил парень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 219,
    text:
      `
        — Ладно тебе, все у вас с профессором наладится. Бывают же как и черные, так и белые полосы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 220,
    text:
      `
        В разговор вмешалась Шерил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 221,
    text:
      `
        — Ты еще не знаешь, что значат реальные семейные проблемы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 222,
    text:
      `
        Леон хотел было что-то уточнить, но Скарлетт не позволила это сделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 223,
    text:
      `
        — Отставить! Мы собрались не для того, чтобы грустить. Лучше поглядите, что я скачала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 224,
    text:
      `
        Эта была игра, где надо было повторять движения за персонажем на экране, держа телефон в руках. Мы вывели изображение на телевизор и решили устроить небольшой турнир. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 225,
    text:
      `
        Первая парой были Леон и Скар. Они танцевали наравне, пока в конце, парень не оступился, немного не рассчитав движения.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 226,
    text:
      `
        Тем самым он отдал победу Скарлетт, которая восторженно проговорила:
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 227,
    text:
      `
        — Ничего, в следующий раз я разрешу тебе отыграться, — ухмыльнулась девушка.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 228,
    text:
      `
        Мы с Шерил довольно быстро закончили. Подруга была не особо пластичной, поэтому победа досталась мне легко. 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 229,
    text:
      `
        — Ого, — Леон хлопал в ладоши. — $Имя Игрока$ и Скар, даже не знаю, кто круче…
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 230,
    text:
      `
        Я встала рядом с подругой, готовясь к финальной битве. Заиграла мелодия и я увидела движения:<b> вверх, вниз, вверх, влево. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 231,
    text:
      `
        В голову сразу пришла очевидная мысль: 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 232,
    text:
      `
        «Мне нельзя ошибаться, Скарлетт слишком хороша в этой игре. Надо собраться». 
      `,
    buttons: [
      {
        text: 'Вверх',
        goTo: 234
      },
      {
        text: 'Вправо',
        goTo: 236
      },
      {
        text: 'Вниз',
        goTo: 235
      },
      {
        text: 'Влево',
        goTo: 233
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(233) }) },
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 233,
    text:
      `
        Это было ошибкой, неуверенное движение руками влево стоило мне нескольких очков, благодаря чему впоследствии Скарлетт вырвалась вперед и обошла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 234,
    text:
      `
        Я подняла руки, следуя за движениями модельки. Меня ждал успех, но Скарлетт не собиралась сдаваться. Мне еще предстояло выбрать правильное движение дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 235,
    text:
      `
        Это было ошибкой, неуверенное движение руками вниз стоило мне нескольких очков, благодаря чему впоследствии Скарлетт вырвалась вперед и обошла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 236,
    text:
      `
        Это было ошибкой, неуверенное движение руками вправо стоило мне нескольких очков, благодаря чему впоследствии Скарлетт вырвалась вперед и обошла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 237,
    text:
      `
        — Не расстраивайся, $Имя Игрока$, в следующий раз будет лучше, — Скарлетт победоносно улыбалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 238,
    text:
      `
        Леон и Шерил похлопали нам и поблагодарили за интересную битву. 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 239,
    text:
      `
        Начало битвы было положено. У меня еще был шанс на победу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 240,
    text:
      `
        Это было ошибкой, неуверенное движение руками вверх стоило мне нескольких очков, благодаря чему впоследствии Скарлетт вырвалась вперед и обошла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },
  {
    id: 243,
    text:
      `
        И следующее движение: 
      `,
    buttons: [
      {
        text: 'Вверх',
        goTo: 240
      },
      {
        text: 'Вправо',
        goTo: 236
      },
      {
        text: 'Вниз',
        goTo: 246
      },
      {
        text: 'Влево',
        goTo: 233
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(233) }) },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 246,
    text:
      `
        Я тотчас присела и выполнила правильную комбинацию движений. Скарлетт замешкалась, а вероятность моей победы все возрастала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 252,
    text:
      `
        Я вошла во вкус. До победы осталось всего несколько правильных маневров. 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 254,
    text:
      `
        Следующее движение казалось мне очевидным: 
      `,
    buttons: [
      {
        text: 'Вверх',
        goTo: 255
      },
      {
        text: 'Вправо',
        goTo: 236
      },
      {
        text: 'Вниз',
        goTo: 235
      },
      {
        text: 'Влево',
        goTo: 233
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(236) }) },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 255,
    text:
      `
        Я подпрыгнула и водила сверху руками, делая круговые движения. Мне оставался последний рывок до заветной победы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 259,
    text:
      `
        Скарлетт уже заметно устала. Мы были все ближе к концу нашего танцевального батла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 265,
    text:
      `
        И финальное движение:
      `,
    buttons: [
      {
        text: 'Вверх',
        goTo: 240
      },
      {
        text: 'Вправо',
        goTo: 236
      },
      {
        text: 'Вниз',
        goTo: 235
      },
      {
        text: 'Влево',
        goTo: 266
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(235) }) },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 266,
    text:
      `
        Я наклонилась максимально влево, совершая полный оборот верхней части туловища. 
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 269,
    text:
      `
        Мои усилия привели к победе. Я радостно вскрикнула и обняла подругу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'BestDancer' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 270,
    text:
      `
        — Это было круто, — говорила Скарлетт, пытаясь отдышаться. — Наконец-то достойный соперник! 
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 271,
    text:
      `
        Леон и Шерил принялись поздравлять меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    message: 'Отношения с друзьями улучшились',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 276,
    text:
      `
        Леон и Скарлетт чувствовали себя прекрасно. Они с задором веселились, включали любимые треки и отрывались по полной. Мне же оставалось просто не отставать от них. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 277,
    text:
      `
        Чтобы немного передохнуть от танцев, мы решили поиграть в «Угадай мелодию», где неожиданно для всех победил Леон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 278,
    text:
      `
        Он оказался тем еще меломаном и утер нос всем присутствующим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 279,
    text:
      `
        Парень продолжал нас радовать своими навыками бармена, делая из того, что у нас было, потрясающие и вкусные коктейли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 280,
    text:
      `
        — Леон, существует такое дело, которое тебе не дается идеально? — спросила я, подходя к нему за очередным напитком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 281,
    text:
      `
        — О, да, я не очень хорош в семейных делах, — с иронией проговорил парень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 282,
    text:
      `
        — Ладно тебе, все у вас с профессором наладится. Бывают же как и черные, так и белые полосы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 283,
    text:
      `
        Вмешалась Скарлетт, которая сказала: 
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 284,
    text:
      `
        — Отставить! Мы собрались не для того, чтобы грустить. Лучше поглядите, что я скачала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 285,
    text:
      `
        Эта была игра, где надо было повторять движения за персонажем на экране, держа телефон в руках. Мы вывели изображение на телевизор и решили устроить небольшой турнир. 
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 286,
    text:
      `
        Первая парой были Леон и Скар. Они танцевали наравне, пока в конце, парень не оступился, немного не рассчитав движения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 287,
    text:
      `
        Тем самым он отдал победу Скарлетт, которая восторженно проговорила:
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 288,
    text:
      `
        — Ничего, в следующий раз я разрешу тебе отыграться, — ухмыльнулась девушка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 289,
    text:
      `
        — Ого, — Леон хлопал в ладоши. — $Имя Игрока$ и Скар, даже не знаю, кто круче…
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 290,
    text:
      `
        Я встала рядом с подругой, готовясь к финальной битве. Заиграла мелодия и я увидела движения: <b> вверх, вниз, вверх, влево. 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 291,
    text:
      `
        В голову сразу пришла очевидная мысль:
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 292,
    text:
      `
        Через несколько часов безудержного веселья, мы решили передохнуть и прийти в себя. Ребята захотели побыть наедине с собой и привести мысли в порядок.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    music: require('../../../../Sounds/Immortals/Nowadays.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 293,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) >= 1
        },
        goTo: 294
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) <= 0
        },
        goTo: 388
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 294,
    text:
      `
        Леон вышел на улицу, чтобы подышать свежим воздухом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 295,
    text:
      `
        Скарлетт устроилась на диване, включив телевизор, где шел какой-то романтический сериал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 296,
    text:
      `
        Шерил выразила желание помыть посуду и поэтому осталась на кухне.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 297,
    text:
      `
       Остаток вечера мне хотелось побыть с:
      `,
    buttons: [
      {
        text: 'Леоном ',
        goTo: 298
      },
      {
        text: 'Скарлетт ',
        goTo: 337
      },
      {
        text: 'Шерил ',
        goTo: 359
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 298,
    text:
      `
        Я вышла на улицу, где меня тут же обдало прохладным воздухом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 299,
    text:
      `
        Леон стоял недалеко от крыльца с задумчивым видом и сигаретой в руках. Он поглядывал на звезды, а увидев меня, тут же подошел и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 300,
    text:
      `
        — Холодно, может, накинешь что-нибудь, $Имя Игрока$?
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 301,
    text:
      `
        — Все в порядке, не простужусь, — я поежилась и продолжила. — Ты как? Под конец вечера твои мысли были совсем не здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 302,
    text:
      `
        — Знаю я твое «в порядке», держи.  
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 303,
    text:
      `
        Леон снял свою куртку и накинул мне на плечи. Я немного смутилась, однако спорить не стала и с благодарностью приняла его заботу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 304,
    text:
      `
        Он продолжил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 305,
    text:
      `
        — Да, как-то накатило немного… Будешь? — он протянул мне сигарету. 
      `,
    buttons: [
      {
        text: 'Взять сигарету',
        goTo: 306
      },
      {
        text: 'Не брать сигарету',
        goTo: 312
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 306,
    text:
      `
        — Да, спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 307,
    text:
      `
        Я сделала несколько затяжек. Благодаря этому мне стало гораздо легче. 
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 308,
    text:
      `
        — Я как самый настоящий демон, прям каждый раз соблазняю тебя на курение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Addiction' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 309,
    text:
      `
        — Ладно тебе, мне же не пять лет.
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 310,
    text:
      `
        — Ну-ну…
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 311,
    text:
      `
        Мы немного постояли. Молча, думая о своем. Пока Леон не сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 312,
    text:
      `
        — Нет, спасибо! 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 313,
    text:
      `
        Я наблюдала за тем, как Леон медленно вдыхал и выдыхал сигаретный дым, про себя думая, что мне и без этого нормально живется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 314,
    text:
      `
        «Может, моя зависимость проходит?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 315,
    text:
      `
        Мы немного постояли. Молча, думая о своем. Пока Леон не сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 316,
    text:
      `
        — Я много выпил, а опьянеть почти не удалось, что со мной не так? 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 317,
    text:
      `
        — Все так, даже лучше, ты по праву заслужил почетный статус алкоголика! 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 318,
    text:
      `
        — Не смешно, — Леон сделал моську обиженного кота, но увидев, как искренне я смеюсь — смягчился. — Я смотрю, вечеринка тебе понравилась? Полегчало?
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 319,
    text:
      `
        — Определенно. Мы будто бы вернулись на три года назад, тебе так не показалось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 320,
    text:
      `
        — Показалось, — парень подошел ко мне поближе. — Я сейчас хочу сделать кое-что довольно глупое, но на это определенно стоило решиться ещё тогда.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 321,
    text:
      `
        — Леон, что…
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 322,
    text:
      `
        Парень внимательно посмотрел на меня, а затем резко обнял, прервав мои попытки задать вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 323,
    text:
      `
        Мне ничего не оставалось, кроме как: 
      `,
    buttons: [
      {
        text: 'Принять эти объятия',
        goTo: 324
      },
      {
        text: 'Отстраниться',
        goTo: 333
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 324,
    text:
      `
        Было так тепло и уютно, будто бы мы нагоняли объятия за все пропущенные годы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    stats: [{ value: 1, category: 'Choice', id: 'HugLeon' }],
    music: require('../../../../Sounds/Immortals/Leon.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 325,
    text:
      `
        Я положила голову ему на грудь, вслушиваясь в томное дыхание, учащенное сердцебиение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 326,
    text:
      `
        Леон нежно поглаживал меня по спине и волосам, словно говоря: «я здесь, я рядом, все хорошо». 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 327,
    text:
      `
        Мы стояли так несколько минут, просто наслаждаясь ночной тишиной и друг другом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 328,
    text:
      `
        Леон, немного отстранившись, но не распустив объятий, произнес: 
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 329,
    text:
      `
        — Я действительно рад, что мы возобновили общение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 330,
    text:
      `
        — Возможно, нам стоило сделать это раньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 331,
    text:
      `
        — Согласен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 332,
    text:
      `
        Наконец у нас получилось отпустить друг друга. Мы постояли еще немного под покровом успокаивающего неба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    message: 'Ваша связь крепчает',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 333,
    text:
      `
        Я не ожидала такого развития событий и инстинктивно отошла в сторону. Леон не расстроился и сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 334,
    text:
      `
        — Прости… Это все алкоголь. Я просто счастлив, что мы снова вот так вот беззаботно проводим время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 335,
    text:
      `
        — Я тоже, — моя улыбка немного сгладила нарастающее напряжение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 336,
    text:
      `
        Я подождала, пока Леон докурит и мы вместе вернулись в дом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House_Night.jpg')
  },

  {
    id: 337,
    text:
      `
        Скарлетт лежала, закрыв глаза рукой. Изредка были слышны всхлипы под сериал, который все еще шел на фоне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 338,
    text:
      `
        Я аккуратно подсела к ней и приобняла. Мне показалось, что это будет наилучшей поддержкой в данный момент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 339,
    text:
      `
        — $Имя Игрока$, я устала… 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 340,
    text:
      `
        — Что случилось, мы же хорошо проводим время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 341,
    text:
      `
        — Проклятый алкоголь! 
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 342,
    text:
      `
        Она резко встала и направилась в сторону ванной комнаты. А я:
      `,
    buttons: [
      {
        text: 'Последовала за ней',
        goTo: 343
      },
      {
        text: 'Подождала ее в комнате',
        goTo: 354
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 343,
    text:
      `
        Мне было невыносимо видеть, как моему близкому другу плохо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    music: require('../../../../Sounds/Immortals/Scarlett.mp3'),
    stats: [{ value: 1, category: 'Choice', id: 'FollowScarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 344,
    text:
      `
        Я незамедлительно последовала за ней и нашла её сидящей на холодном полу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 345,
    text:
      `
        Присела на корточки перед подругой и сказала: 
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 346,
    text:
      `
        — Скар, я беспокоюсь. Ты сама не своя в последнее время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 347,
    text:
      `
        — Я устала, $Имя Игрока$. Устала от постоянной ругани родителей и неуважения к себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 348,
    text:
      `
        — Я как будто бы ничего не значу, как самостоятельная единица в этом мире. А мне ведь далеко не четырнадцать… 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 349,
    text:
      `
        — Понимаю, однако тебе никто не мешает, к примеру, съехать от них. Начать свою самостоятельную жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 350,
    text:
      `
        — Было бы славно, — она улыбнулась. — Но с моей нагрузкой — такое вряд ли когда-нибудь произойдет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 351,
    text:
      `
        — Звучит, как отговорка, если честно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 352,
    text:
      `
        Она вдруг резко посмотрела на меня. Не знаю, что происходило в ее голове в этот момент, но довольно продолжительное время мы молчали, пока она не проговорила:
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 353,
    text:
      `
        — Давай вернемся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    message: 'Ваш совет заставил Скарлетт задуматься',
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 354,
    text:
      `
        Я решила дать ей время побыть в одиночестве со своими тараканами. Возможно, ей действительно станет лучше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 355,
    text:
      `
        Когда Скарлетт вернулась, она выглядела загруженной и печальной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 356,
    text:
      `
        — Все в порядке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 357,
    text:
      `
        — Да, $Имя Игрока$. Я просто устала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 358,
    text:
      `
        Девушка была крайне отстраненной и, казалось, не хотела продолжать дальнейшее общение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    message: 'Вы не поддержали Скарлетт',
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 359,
    text:
      `
        Я решила помочь Шерил и заодно спросить, как обстоят дела дома. Девушка выглядела задумчиво, но при этом с ее лица не сходила улыбка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    music: require('../../../../Sounds/Immortals/Cheryl.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 360,
    text:
      `
        — Не скучаешь? — я села рядом с ней за кухонный столик. 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 361,
    text:
      `
        — Что ты… Кажется, мне было мало сегодняшнего вечера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 362,
    text:
      `
        — Мы всегда можем повторить, Шерил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 363,
    text:
      `
        — Думаешь? Ощущение такое, что все это мимолетно и никогда больше не повторится, — девушка вмиг осушила свой бокал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 364,
    text:
      `
        — Брось, не забивай себе голову. Я никуда не пропадаю, слышишь! Что тебя тревожит? 
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 365,
    text:
      `
        — Ты будешь смеяться, $Имя Игрока$...
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 366,
    text:
      `
        Я серьезно на нее посмотрела и еще раз повторила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 367,
    text:
      `
        — Что тебя тревожит? 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 368,
    text:
      `
        — Не одолжишь мне немного денег? Я обещаю, верну через несколько дней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 369,
    text:
      `
        Я ожидала услышать все что угодно. Накрутила себе самые ужасные мысли. Из-за этого невольно рассмеялась, чем немного расстроила Шерил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 370,
    text:
      `
        — Я же говорила… Все всегда смеются надо мной… 
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 371,
    text:
      `
        — Извини, просто в моей голове всплыли всевозможные дурацкие варианты, а тут… 
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 372,
    text:
      `
        Выдохнув, я:
      `,
    buttons: [
      {
        text: 'Одолжила Шерил денег (-100)',
        goTo: 373
      },
      {
        text: 'Не нашла такой суммы',
        goTo: 380
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 373,
    text:
      `
        — Держи. Ты всегда можешь обратиться ко мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    stats: [{ value: 1, category: 'Choice', id: 'GiveCherylMoney' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 374,
    text:
      `
        — Спасибо тебе огромное, — она обняла меня. — Без твоей помощи я бы пропала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -100, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 375,
    text:
      `
        — К чему такая срочность? 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 376,
    text:
      `
        — Отчим попросил кое-что купить, а зарплату задерживают. Я не хочу снова выслушивать: какая я плохая и неблагодарная дочь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 377,
    text:
      `
        — Но это же ненормально, Шерил! Жить в собственном доме в постоянном страхе сделать что-то не так. Мы столько раз это обсуждали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 378,
    text:
      `
        — Мне правда важна твоя поддержка, — девушка улыбалась. — Но и я тебе ни раз говорила, как важен этот дом и что никто не посмеет отнять эту драгоценность у меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 379,
    text:
      `
        «Упрямая, как и всегда».
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    message: 'Шерил знает, что нас вас можно положиться',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Cheryl' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 380,
    text:
      `
        — Прости, сейчас у меня нет такой суммы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 381,
    text:
      `
        Шерил отвернулась, было видно, насколько сильно она расстроилась от этой новости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 382,
    text:
      `
        — К чему такая срочность? — я решила уточнить, чтобы попытаться наладить дальнейшее общение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 383,
    text:
      `
        — Я должна купить продукты, иначе отчим будет злиться. Но зарплату задерживают, понимаешь? Всё против меня, опять повторится тот кошмар. 
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 384,
    text:
      `
        «Кошмар?»
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 385,
    text:
      `
        — Шерил, дорогая… — мне было нестерпимо грустно от того, что я не знала, как помочь ей. — Давай попросим у Скарлетт или Леона, я уверена, они не откажут. 
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 386,
    text:
      `
        — Да кто я такая, чтобы они помогали? — девушка начала злиться. — Даже тебе сложно мне помочь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 387,
    text:
      `
        — Видимо, мне не от кого ждать помощи. Пора уже научиться справляться со всем самостоятельно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    message: 'Шерил становится решительнее, возможно, именно это ей и нужно?',
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Cheryl' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 388,
    text:
      `
        Леон вышел на улицу, чтобы подышать свежим воздухом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 389,
    text:
      `
        Скарлетт устроилась на диване, включив телевизор, где шел какой-то романтический сериал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 390,
    text:
      `
        Остаток вечера мне хотелось побыть с:
      `,
    buttons: [
      {
        text: 'Леоном ',
        goTo: 298
      },
      {
        text: 'Скарлетт ',
        goTo: 337
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 391,
    text:
      `
        Уже под утро мы с ребятами прибрались в квартире, разложили диван и устало плюхнулись на него. 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    music: require('../../../../Sounds/Immortals/Nowadays.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 392,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) >= 1
        },
        goTo: 393
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'InviteCheryl' }) <= 0
        },
        goTo: 397
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 393,
    text:
      `
        Шерил решила не оставаться с нами на ночь, она попрощалась и направилась домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 394,
    text:
      `
        Я знала в чем, была причина такого решения, ведь ее ждали в доме «ужасов». Шерил всячески старалась лишний раз не накалять обстановку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 395,
    text:
      `
        Несмотря на дрожащие руки, она искренне улыбалась и светилась от счастья, когда уходила.
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 396,
    text:
      `
        — Все-таки мое решение позвать ее было правильным, — я сказала это вслух и вызвала одобрение у друзей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 397,
    text:
      `
        Перед тем как уснуть, я слышала крики из дома Шерил.
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 398,
    text:
      `
        Сегодня они были громче, чем обычно. Я написала Шерил сообщение, но она мне так и не ответила.
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 399,
    text:
      `
        «Мне стоило позвать ее…»
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 400,
    text:
      `
        Я хотела было выйти, но усталость, которая накопилась за несколько дней, обрушилась на меня, не давая подняться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 401,
    text:
      `
        «Шерил, в следующий раз, я точно буду рядом». 
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    message: 'Состояние Шерил ухудшается',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Cheryl' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 402,
    text:
      `
        Я немного поерзала и все же нашла удобную позу для сна. Я лежала между Леоном и Скарлетт, которые уже мирно посапывали. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 403
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 403,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'HugLeon' }) >= 1
        },
        goTo: 404
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'FollowScarlett' }) >= 1
        },
        goTo: 408
      },
      {
        condition: () => {
          if (statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'GiveCherylMoney' }) >= 1) {
            return true
          } else {
            return statsManager.get({
              story: EStoriesEn.Immortals,
              category: 'Choice',
              id: 'HugLeon'
            }) <= 0 && statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'FollowScarlett' }) <= 0
          }
        },
        goTo: 413
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 404,
    text:
      `
        Парень легонько меня приобнял, прижимая к себе. Возможно, Леон сделал это неосознанно, во сне, но я была рада еще раз ощутить его прикосновения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 405,
    text:
      `
        Я обратила внимание на его длинные ресницы, привлекательное лицо, которое, казалось, во сне выглядело еще притягательнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 406,
    text:
      `
        Его дыхание обжигало мне кожу, а крепкие мужские руки придавали то самое спокойствие, о котором я мечтала последние несколько дней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 407,
    text:
      `
        Я думала, что наконец нашла безопасность в этих объятиях, но я ошибалась…
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 408,
    text:
      `
        Девушка взяла меня за руки. Я ощутила небольшую дрожь в ее прикосновении и ответно сжала пальцы Скарлетт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 409,
    text:
      `
        В этот момент мне хотелось быть ее защитой ото всех печалей, быть тем самым щитом, который защищает героя в самые трудные и опасные для него моменты.
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 410,
    text:
      `
        Мы лежали так ещё некоторое время, изредка перешептываясь, и не заметили как уснули, так и держась за руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 411,
    text:
      `
        Это мгновение придавало то самое спокойствие, о котором я мечтала последние несколько дней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 412,
    text:
      `
        Я думала, что наконец нашла безопасность в этих прикосновениях, но я ошибалась…
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 413,
    text:
      `
        Я смотрела на лица друзей, с благодарностью вспоминая сегодняшний вечер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 414,
    text:
      `
        Эти мгновения придавали то самое спокойствие, о котором я мечтала последние несколько дней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 415,
    text:
      `
        Я думала, что находясь рядом с близкими, мне ничего не будет угрожать, но я ошибалась…
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 416,
    text:
      `
        Очнувшись ото сна, я ощутила характерный привкус крови во рту. Тело, казалось, было полностью разбито. 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    message: '<i> Нью-Йорк 1885 год',
    music: require('../../../../Sounds/Immortals/ChairThinking.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 417,
    text:
      `
        С трудом опустив голову ниже, я обнаружила, что сидела связанная на почти развалившемся деревянном стуле. 
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 418,
    text:
      `
        Вокруг было темно и прохладно, отовсюду слышался звук падающих капель, эхом разносящийся по всему помещению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 419,
    text:
      `
        «Больно… Меня похитили? Скарлетт и Леон не пострадали?»
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 420,
    text:
      `
        Но была еще одна деталь, которую я с опозданием осознала. Одежда. Та же, что была одета на Катарине в мое прошлое перемещение.
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 421,
    text:
      `
        Только сейчас она выглядела изодранной, грязной и была покрыта пятнами крови.
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 422,
    text:
      `
        «Это произошло вновь… Но где же я? Неужели тот монстр…»
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 423,
    text:
      `
        Я думала лишь о способе выбраться из этого места. Страшная мысль пришла сама собой: 
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 424,
    text:
      `
        «Что будет, если я погибну здесь? Умру ли я и в своем мире?»
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 425,
    text:
      `
        Но проверять не хотелось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 426,
    text:
      `
        Я чувствовала всю боль и отчаяние Катарины, ведь прямо сейчас я проживала ее жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 427,
    text:
      `
        «Что мне делать? Попытаться сбежать? А если этот ублюдок сюда заявится, не сделаю ли я только хуже?» 
      `,
    buttons: [
      {
        text: 'Попытаться  сбежать',
        goTo: 428
      },
      {
        text: 'Остаться сидеть на месте',
        goTo: 497
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 428,
    text:
      `
        Понять, где я находилась было практически невозможно из-за скудного освещения. Осознав, что связанными у меня были только руки, в голову пришли здравые мысли о попытке побега.
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    stats: [{ story: EStoriesEn.Immortals, value: +1, category: 'Choice', id: 'TryToEscape' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 429,
    text:
      `
        «Я могла бы встать и попробовать освободиться… нельзя уповать на случай и ждать спасения. Жизнь научила меня самостоятельно выбираться из трудностей!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 430,
    text:
      `
        Я медленно поднялась на дрожащие ноги, немного наклоняясь, чтобы не задевать стулом пол. Шла не торопясь, боком, боясь что-либо задеть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 431,
    text:
      `
        Размер комнаты было трудно оценить, но мне показалось, что это был небольшой подвал, может, размером с гостиную. 
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 432,
    text:
      `
        Глаза стали постепенно привыкать к темноте и я увидела столик.
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 433,
    text:
      `
        «Достаточно ли у меня времени, чтобы осмотреться?» 
      `,
    buttons: [
      {
        text: 'Идти к столу',
        goTo: 434
      },
      {
        text: 'Блуждать дальше',
        goTo: 442
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 434,
    text:
      `
        «Должно быть это лучшее решение…»
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 435,
    text:
      `
        Подойдя к нему, я обнаружила несколько хаотично-разбросанных бумаг, небольшой ножик, перо, шприц. 
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 436,
    text:
      `
        «Вот оно, я смогу попробовать разрезать эти веревки в лучших традициях шпионских фильмов».
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 437,
    text:
      `
       Взяв в рот грязный нож, я попыталась повернуть голову так, чтобы «мой спаситель» попал мне прямо в руки. И у меня:
      `,
    buttons: [
      {
        text: 'Не получилось',
        goTo: 438
      },
      {
        text: 'Не получилось',
        goTo: 438
      },
      {
        text: 'Получилось'
      },
      {
        text: 'Не получилось',
        goTo: 438
      }],
    beforeBegin: () => { timer.set(5, () => { scenarioManager.beginScene(438) }) },
    parallax: 'left',
    imageFront: require('../../../../Images/Immortals/Items/Knife.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 438,
    text:
      `
        Я и не ожидала, что с первого раза у меня получится. Нож со звоном упал. Мне пришлось сесть на колени и языком касаться холодного, мокрого пола, чтобы поддеть предмет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    beforeBegin: () => { timer.stop() },
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 439,
    text:
      `
        Взяв в рот грязный нож, я попыталась повернуть голову так, чтобы «мой спаситель» попал мне прямо в руки. И у меня:
      `,
    buttons: [
      {
        text: 'Не получилось',
        goTo: 439
      },
      {
        text: 'Не получилось',
        goTo: 439
      },
      {
        text: 'Получилось',
        goTo: 440
      },
      {
        text: 'Не получилось',
        goTo: 439
      }],
    parallax: 'left',
    imageFront: require('../../../../Images/Immortals/Items/Knife.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },
  {
    id: 440,
    text:
      `
        Каким-то чудом ножик попал мне в руки и я начала разрезать веревки. Хоть он был не шибко острым, через некоторое время веревки стали ослабевать и мне удалось освободиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 442,
    text:
      `
        В другом конце комнаты был едва различим высокий закрытый шкаф. Мне удалось поддеть ногой дверцу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 443,
    text:
      `
        Оттуда вывалилась детская фарфоровая кукла. Она мило улыбалась, несмотря на растрепанную прическу и несколько оторванных конечностей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    imageFront: require('../../../../Images/Immortals/Objects/China_Doll.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 444,
    text:
      `
        Однако самым страшным являлось вовсе не это. 
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    imageFront: require('../../../../Images/Immortals/Objects/China_Doll.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 445,
    text:
      `
        Сами стенки шкафа были залиты чем-то алым. Я искренне надеялась, что это все-таки краска, а не кровь. Но невыносимый удушающий запах говорил об обратном.
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 446,
    text:
      `
        «Боже…»
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 447,
    text:
      `
        Мне было даже страшно подумать о том, что могло тут твориться. Я незамедлительно решила вернуться к столу и снова попытаться найти выход. 
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 450,
    text:
      `
        Я размяла затекшие руки, голову. Быстренько осмотрела себя, потрогала ребра, так как именно в боку боль была сильнее всего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    message: 'За свою решимость, вы получили нож в инвентарь',
    parallax: 'left',
    stats: [
      { story: EStoriesEn.Immortals, value: 1, category: 'Item', id: 'Knife' }],
    achievement: { story: EStoriesEn.Immortals, name: 'CarryItCarefully' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 451,
    text:
      `
        «Как я и думала, при нажатии болит еще сильнее. Что же пережила Катарина? Неужели виновата… моя беспечность?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 452,
    text:
      `
        Я взяла себя в руки, и попыталась рассмотреть вещи на столе. Мое внимание привлекли небольшие листки, на которых были изображены каракули и не аккуратно нарисованные символы.
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 453,
    text:
      `
        Словно ребенок, не умеющий писать, взял в первый раз письменные принадлежности и попытался передать свои мысли на бумаге.
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 454,
    text:
      `
        Однако одно слово все же было различимо и повторялось несколько раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 455,
    text:
      `
        <i>Катарина
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 456,
    text:
      `
        Все внутри дрожало, я боялась сделать лишний шаг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 457,
    text:
      `
        «Неужели за мной все это время следили?»
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 458,
    text:
      `
        Единственная мысль, не дававшая мне сдаться — это выход, который, безусловно, должен быть где-то рядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 459,
    text:
      `
        Вскоре я увидела железную дверь. Она находилась в другом конце комнаты. Я приблизилась к ней и со всей силы дернула за ручку. Никакого результат не последовало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 460,
    text:
      `
        «Правильно, $Имя Игрока$, надежда умирает последней».
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 461,
    text:
      `
        Сверху на двери была решетка, а за ней виднелся освещенный длинный коридор.
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 462,
    text:
      `
        Я схватилась за железные прутья, пытаясь рассмотреть помещение вдалеке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 463,
    text:
      `
        Ничего такого, что могло бы мне помочь, я не увидела. Зато краем глаза я заметила искривленную тень, которая стремительно приближалась к моей камере.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 464,
    text:
      `
        «Черт… Что же мне делать? Защищаться? Притвориться связанной и выжидать?
      `,
    buttons: [
      {
        text: 'Обороняться с ножом',
        goTo: 465
      },
      {
        text: 'Притвориться связанной',
        goTo: 492
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(492) }) },
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    music: require('../../../../Sounds/Immortals/ChairStress.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 465,
    text:
      `
        Я достала нож и попыталась скрыться в тенях комнаты. Через некоторое время послышалось проворачивание замка и в помещение вошло нечто. 
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 466,
    text:
      `
        Уродливая тварь начала истошно кричать, осматривая каждый угол. 
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    simple: require('../../../../Sounds/Immortals/MonsterScream.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 467,
    text:
      `
        «Он вот-вот найдет меня… Как же страшно, что я могу?» 
      `,
    buttons: [
      {
        text: 'Замереть',
        goTo: 468
      },
      {
        text: 'Атаковать существо в горло',
        goTo: 476
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(468) }) },
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 468,
    text:
      `
        Я так и не решилась на открытое столкновение. Да и могла ли я что-то противопоставить этому существу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 469,
    text:
      `
        Монстр нашел меня довольно быстро. Он сильным рывком кинул меня в центр комнаты и навис надо мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 470,
    text:
      `
        — Ты думала, что сможешь сбежать? Как наивно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 471,
    text:
      `
        Из его пасти разило тухлятиной, глаза были красные, злобные. Я перестала дышать, тело дрожало, словно предчувствуя, что час мой близок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 472,
    text:
      `
        «Я сейчас погибну, выхода больше нет!»
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 473,
    text:
      `
        Тварь грубо схватила меня и снова усадила на стул, внимательно осматривая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 474,
    text:
      `
        — Тебе не сбежать, твоя кровь усилит наш род и мы наконец-то будем править! 
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 475,
    text:
      `
        Через некоторое время в помещение вошла еще одна фигура. На вид человек, высокий, лицо скрыто за маской. 
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 476,
    text:
      `
        Я сильно сжала оружие, готовясь к нападению. Адреналин кипел во мне, я видела лишь единственный исход своего спасения — сражение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    beforeBegin: () => { timer.stop() },
    stats: [{ value: 1, category: 'Choice', id: 'AttackMonster' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 477,
    text:
      `
        Когда монстр практически поравнялся со мной, я со всей силы воткнула нож в его шею и ринулась в сторону распахнутой двери. 
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 478,
    text:
      `
        Отдаленно я слышала его недовольное рычание, но не посмела обернуться, так как выйдя в коридор — побежала в случайном направлении.
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    simple: require('../../../../Sounds/Immortals/MonsterScream.mp3'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 479,
    text:
      `
        Однако моя свобода длилась недолго. Я практически сразу врезалась в кого-то.  
      `,
    buttons: [
      {
        text: '',
        goTo: 480
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 480,
    text:
      `
        Высокая фигура твердо стояла на месте. Блеклый свет едва помог мне разглядеть мужской силуэт. Он резко взял меня за руку и потянул обратно в комнату. 
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 481,
    text:
      `
        Раненое существо тут же подбежало ко мне, жадно оглядывая. В его глазах стало больше безумия и нескрываемой ненависти, изо рта текли слюни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 482,
    text:
      `
        — Научи нашу гостью манерам, я разрешаю, — голос незнакомца был спокойным, но с нотками заигрывания. Ему явно нравилось происходящее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 483,
    text:
      `
        Монстру не надо было повторять дважды. Он схватил меня и повалил на пол. 
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 484,
    text:
      `
        Его язык начал проходиться по моему лицу, его когтистые пальцы елозили по телу, он жадно облизывался. 
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 485,
    text:
      `
        — Прошу, перестаньте… 
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 486,
    text:
      `
        Тварь встала и надавила ногой на сгиб руки. Я инстинктивно стала его отталкивать, но он был слишком силен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 487,
    text:
      `
        С каждым его нажатием, по моему телу проходили колкие волны. Мгновение и боль стала настолько нестерпимой, что я начала терять сознание.
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 488,
    text:
      `
        Одно резкое движение — и вот я уже кричу во все горло. Никогда раньше я не испытывала такой боли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    simple: require('../../../../Sounds/Immortals/Scream.mp3'),
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 489,
    text:
      `
        «Пусть это закончится…»
      `,
    buttons: [
      {
        text: '',
        goTo: 490
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 490,
    text:
      `
        В какой-то момент в поле моего зрения вошла фигура незнакомца. Он улыбался, с наслаждением, буквально облизывался при виде моих мучений.
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 491,
    text:
      `
        В это время монстр громко смеялся, я с ужасом смотрела на неестественное положение своей руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    message: 'К сожалению, не всегда надо бросаться в атаку… Вы сильно ранены! ',
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [{ value: 1, category: 'Effect', id: 'BrokenHand' }],
    achievement: { story: EStoriesEn.Immortals, name: 'AttackMonster' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 492,
    text:
      `
        Мне казалось, это самый логичный и безопасный вариант. Вряд ли мне удастся что-то сделать с маленьким ножичком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 493,
    text:
      `
        Я быстро вернула стул в исходное положение, села, закинула руки за спину и стала ждать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 494,
    text:
      `
        Послышалось проворачивание замка и в помещение вошло нечто. Уродливая тварь улыбалась, медленно подходя ко мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 495
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 495,
    text:
      `
        — Мышка даже не попыталась сбежать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 496,
    text:
      `
        Следом за ним в помещение вошла еще одна фигура. На вид довольно высокий мужчина, лицо скрыто за маской.
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 497,
    text:
      `
        «Нет… кто-нибудь обязательно спасет меня. Ведь есть же люди, которым Катарина дорога… Я выживу!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 498,
    text:
      `
        Минуты длились бесконечно. Мне было холодно, страшно. В голову стали закрадываться самые ужасные мысли…
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 499,
    text:
      `
        До этого момента я была уверена, что это легкая игра, где я буду несомненным победителем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 500,
    text:
      `
        Но мне и представить было трудно, какой ценой я получу заветный выигрыш. А получится ли у меня? 
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 501,
    text:
      `
        В тяжелые моменты я думала о близких. 
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 502,
    text:
      `
        О родителях, которые, несомненно пришли бы мне на помощь, спасли бы меня, укутали в одеяло и дали бы по заслугам той твари, что сотворила со мной такое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 503,
    text:
      `
        Думала о:
      `,
    buttons: [
      {
        text: 'Леоне',
        goTo: 504,
        func: () => {
          scenarioManager.changeSceneButtonStatus(503, 0, false)
          scenarioManager.manageDialog(503, [0, 1, 2], [3])
        }
      },
      {
        text: 'Нэйтане ',
        goTo: 508,
        func: () => {
          scenarioManager.changeSceneButtonStatus(503, 1, false)
          scenarioManager.manageDialog(503, [0, 1, 2], [3])
        }
      },
      {
        text: 'Подругах',
        goTo: 511,
        func: () => {
          scenarioManager.changeSceneButtonStatus(503, 2, false)
          scenarioManager.manageDialog(503, [0, 1, 2], [3])
        }
      },
      {
        text: 'Продолжить',
        goTo: 515,
        isActive: false
      }],
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(503)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 504,
    text:
      `
        Почему-то представив его в роли полицейского, я ясно видела, как он вооружившись пистолетом убил бы наповал монстра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 505,
    text:
      `
        Затем обеспокоенно осматривал меня с ног до головы, приговаривая: 
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 506,
    text:
      `
        — Я опоздал, прости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    ghostSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 507,
    text:
      `
        Аккуратно поднял бы меня на руки и благополучно спас. 
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(503, 507)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 508,
    text:
      `
        Профессор поднял бы весь город на уши, созвал всех полицейских и они бы вместе ворвались меня спасать.
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 509,
    text:
      `
        Он сильно испугался за меня, поэтому был не в состоянии проронить хоть слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    ghostSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 510,
    text:
      `
        Аккуратно взяв меня под руку, мы бы выбрались из этого логова. 
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(503, 510)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 511,
    text:
      `
        Шерил и Скарлетт были бы как секретные агенты, которые тайно работали на правительство и смогли узнать мое местоположение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 512,
    text:
      `
        Шерил предпочитала огнестрельное оружие.
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    ghostSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 513,
    text:
      `
        Скарлет же охотно использовала холодное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    ghostSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 514,
    text:
      `
        Они бы выбили эту злосчастную дверь, убили вы всех монстров и вместе вытащили меня из этого кошмара. 
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(503, 514)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 515,
    text:
      `
        «Хоть книгу пиши… Что за фантазии, $Имя Игрока$?»
      `,
    buttons: [
      {
        text: '',
        goTo: 516
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 516,
    text:
      `
        Однако реальность была слишком сурова и пуста. Пока не послышался звук открывание двери, я все еще витала в своем мире грез. 
      `,
    buttons: [
      {
        text: '',
        goTo: 517
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 517,
    text:
      `
        Монстр вошел не спеша и удовлетворительно кивнул, проговорив: 
      `,
    buttons: [
      {
        text: '',
        goTo: 518
      }],
    music: require('../../../../Sounds/Immortals/ChairStress.mp3'),
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 518,
    text:
      `
        — Мышка даже не попыталась сбежать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 519
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 519,
    text:
      `
        Через некоторое время в помещение вошла еще одна фигура. На вид довольно высокий мужчина, лицо скрыто за маской.
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 520,
    text:
      `
        Неизвестный опустился на колени передо мной и проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 521
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 521,
    text:
      `
        — Милая, мне жаль, что так вышло, но это лишь процесс воспитания, — его рука прошлась по моим волосам, холодные губы коснулись моей горячей щеки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 522
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    achievement: { story: EStoriesEn.Immortals, name: 'EvilBeauty' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 522,
    text:
      `
        — Ты не представляешь, как долго я ждал нашей встречи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 523
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 523,
    text:
      `
        Я с ужасом попыталась отстраниться, но незнакомец сильно сжал мой подбородок, заставляя всматриваться в его глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 524
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 524,
    text:
      `
        — Подготовь пробирку, чудик, — он отдал приказ монстру. — Знаю, с тобой обращаются ужасно, но так надо. Иначе ты не научишься покоряться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 525
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 525,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 526
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'AttackMonster' }) >= 1
        },
        goTo: 526
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'AttackMonster' }) <= 0
        },
        goTo: 528
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 526,
    text:
      `
        Мне было нестерпимо больно, все вокруг пульсировало, я не могла сосредоточиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 527
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 527,
    text:
      `
        Но даже так, я должна задать вопрос этой твари. Пусть видит, что я все еще что-то могу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 528
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 528,
    text:
      `
        — Что во мне особенного? 
      `,
    buttons: [
      {
        text: '',
        goTo: 529
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 529,
    text:
      `
        Мужчина удивился и принялся рассматривать меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 530
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 530,
    text:
      `
        — Значит, ты все еще можешь говорить и не боишься? А я тебя, похоже, недооценил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 531
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 531,
    text:
      `
        — Скажи… 
      `,
    buttons: [
      {
        text: '',
        goTo: 532
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 532,
    text:
      `
        — Тихо, — он приложил палец к моим губам. — А если я отвечу, что ты очень ценный объект. Тебя устроит такое положение вещей? 
      `,
    buttons: [
      {
        text: '',
        goTo: 533
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 533,
    text:
      `
        — Ты особенная. Разве не об этом мечтает каждая девушка? Но я бы соврал, если бы не назвал еще одну причину. Ты просто нравишься мне, Катарина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 534
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 534,
    text:
      `
        Я не могла понять, шутит он или издевается? 
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 535,
    text:
      `
        Мужчина подошел к столу и взял оттуда шприц, который без слов воткнул мне в руку, набирая кровь.
      `,
    buttons: [
      {
        text: '',
        goTo: 536
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 536,
    text:
      `
        — Зачем? Что это? — я говорила из последних сил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 537
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 537,
    text:
      `
        — Вопросы, снова вопросы. Конечно же мы ставим на тебе эксперименты. В чем твоя ценность? Оставляю тебе пищу для размышлений... 
      `,
    buttons: [
      {
        text: '',
        goTo: 538
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 538,
    text:
      `
        Но вдруг послышался оглушительный взрыв, который поднял клубы дыма и пыли, заполняя все помещение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 539
      }],
    simple: require('../../../../Sounds/Immortals/Explosion.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 539,
    text:
      `
        — О, — незнакомец, казалось, был опечален. — Как быстро они нашли нас, не ожидал… 
      `,
    buttons: [
      {
        text: '',
        goTo: 540
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 540,
    text:
      `
        — Что ж, Катарина, в следующий раз я подготовлюсь лучше, будет ещё интереснее…
      `,
    buttons: [
      {
        text: '',
        goTo: 541
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 541,
    text:
      `
        Он подошел вплотную и жадно впился в мои губы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 542
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 542,
    text:
      `
        — Ты не представляешь, какое удовольствие я ощущаю, гоняясь за тобой, — он помахал наполненной пробиркой перед моими глазами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 543
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 543,
    text:
      `
        — И, да. Меня зовут Александр. Если теория подтвердится, мы скоро встретимся, милая моя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 544
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Mask.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 544,
    text:
      `
        Мужчина подозвал монстра и они вместе сбежали в коридоры подземелья. 
      `,
    buttons: [
      {
        text: '',
        goTo: 545
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 545,
    text:
      `
        Усталость, злость, негодование. Я чувствовала себя использованной и разбитой. Когда в помещение вошло много людей, у меня даже не оказалось сил взглянуть на них. 
      `,
    buttons: [
      {
        text: '',
        goTo: 546
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 546,
    text:
      `
        Один из спасителей подошел и заключил меня в трепетные объятия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    stats: [{ story: EStoriesEn.Immortals, value: -1, category: 'Item', id: 'Knife' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 547,
    text:
      `
        — Я рядом, это все закончилось, слышишь? — он гладил меня по голове. — Ты в безопасности, Катарина. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Immortals', 'Глава 1', 'Часть 4', '1')
        }
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    achievement: { story: EStoriesEn.Immortals, name: 'Chapter01Part03Completed' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Chair_Room.jpg')
  },

  {
    id: 550,
    text:
      `
        «Мне нельзя ошибаться, Скарлетт слишком хороша в этой игре. Надо собраться». 
      `,
    buttons: [
      {
        text: 'Вверх',
        goTo: 552
      },
      {
        text: 'Вправо',
        goTo: 554
      },
      {
        text: 'Вниз',
        goTo: 553
      },
      {
        text: 'Влево',
        goTo: 551
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(551) }) },
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 551,
    text:
      `
        Это было ошибкой, неуверенное движение руками влево стоило мне нескольких очков, благодаря чему впоследствии Скарлетт вырвалась вперед и обошла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 552,
    text:
      `
        Я подняла руки, следуя за движениями модельки. Меня ждал успех, но Скарлетт не собиралась сдаваться. Мне еще предстояло выбрать правильное движение дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 557
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 553,
    text:
      `
        Это было ошибкой, неуверенное движение руками вниз стоило мне нескольких очков, благодаря чему впоследствии Скарлетт вырвалась вперед и обошла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 554,
    text:
      `
        Это было ошибкой, неуверенное движение руками вправо стоило мне нескольких очков, благодаря чему впоследствии Скарлетт вырвалась вперед и обошла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 555,
    text:
      `
        — Не расстраивайся, $Имя Игрока$, в следующий раз будет лучше, — Скарлетт победоносно улыбалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 556
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 556,
    text:
      `
        Леон похлопал нам и поблагодарили за интересную битву. 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 557,
    text:
      `
        Начало битвы было положено. У меня еще был шанс на победу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 559
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 558,
    text:
      `
        Это было ошибкой, неуверенное движение руками вверх стоило мне нескольких очков, благодаря чему впоследствии Скарлетт вырвалась вперед и обошла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },
  {
    id: 559,
    text:
      `
        И следующее движение: 
      `,
    buttons: [
      {
        text: 'Вверх',
        goTo: 558
      },
      {
        text: 'Вправо',
        goTo: 554
      },
      {
        text: 'Вниз',
        goTo: 570
      },
      {
        text: 'Влево',
        goTo: 551
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(551) }) },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 570,
    text:
      `
        Я тотчас присела и выполнила правильную комбинацию движений. Скарлетт замешкалась, а вероятность моей победы все возрастала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 560
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 560,
    text:
      `
        Я вошла во вкус. До победы осталось всего несколько правильных маневров. 
      `,
    buttons: [
      {
        text: '',
        goTo: 561
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 561,
    text:
      `
        Следующее движение казалось мне очевидным: 
      `,
    buttons: [
      {
        text: 'Вверх',
        goTo: 562
      },
      {
        text: 'Вправо',
        goTo: 554
      },
      {
        text: 'Вниз',
        goTo: 553
      },
      {
        text: 'Влево',
        goTo: 551
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(554) }) },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 562,
    text:
      `
        Я подпрыгнула и водила сверху руками, делая круговые движения. Мне оставался последний рывок до заветной победы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 563
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 563,
    text:
      `
        Скарлетт уже заметно устала. Мы были все ближе к концу нашего танцевального батла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 564
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 564,
    text:
      `
        И финальное движение:
      `,
    buttons: [
      {
        text: 'Вверх',
        goTo: 558
      },
      {
        text: 'Вправо',
        goTo: 554
      },
      {
        text: 'Вниз',
        goTo: 553
      },
      {
        text: 'Влево',
        goTo: 565
      }],
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(553) }) },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 565,
    text:
      `
        Я наклонилась максимально влево, совершая полный оборот верхней части туловища. 
      `,
    buttons: [
      {
        text: '',
        goTo: 566
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 566,
    text:
      `
        Мои усилия привели к победе. Я радостно вскрикнула и обняла подругу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 567
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'BestDancer' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 567,
    text:
      `
        — Это было круто, — говорила Скарлетт, пытаясь отдышаться. — Наконец-то достойный соперник! 
      `,
    buttons: [
      {
        text: '',
        goTo: 568
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },

  {
    id: 568,
    text:
      `
        Леон стал радостно поздравлять меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    message: 'Отношения с друзьями улучшились',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom_Disco.jpg')
  },
  {
    id: 569,
    text:
      `
       «Мне кажется, он рад, что я начинаю спокойнее воспринимать его «туманные» высказывания. Может, это шаг к взаимопониманию между нами?»
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Guide.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Guides_World_Another.jpg')
  }
])
