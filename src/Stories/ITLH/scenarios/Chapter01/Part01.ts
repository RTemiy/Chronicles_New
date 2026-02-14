import { whiteFlash } from '../../../../Components/Slide/Slide'
import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.ITLH, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Утреннее солнце пробивалось сквозь шторы, пытаясь разбудить. Я лениво потянулась, надеясь на возможность еще поваляться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Nowadays.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 1,
    text:
      `
        «Немного… Ничего же не случится?»
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas_Eyes.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 2,
    text:
      `
        Сонное сознание подсказывало: нужно ехать в университет. А разум пытался вспомнить, насколько сегодня важные лекции.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 3,
    text:
      `
        «Хотя какие лекции не важные? Все преподаватели будут пытаться набивать значимость своему предмету».
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas_Eyes.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 4,
    text:
      `
        Я открыла глаза и осмотрела комнату.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 5,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    wardrobe: { story: EStoriesEn.ITLH, personId: 'Hero_Room', goTo: 6 },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 6,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 7 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 7,
    text:
      `
        «С годами ничего не меняется».
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 8,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 9,
        condition: () => {
          return wardrobe.getCurrentEntityImageTitle(EStoriesEn.ITLH, 'Hero_Room') === 'Путешественник'
        }
      },
      {
        goTo: 13,
        condition: () => {
          return wardrobe.getCurrentEntityImageTitle(EStoriesEn.ITLH, 'Hero_Room') === 'Морской бриз'
        }
      },
      {
        goTo: 17,
        condition: () => {
          return wardrobe.getCurrentEntityImageTitle(EStoriesEn.ITLH, 'Hero_Room') === 'Вдохновение'
        }
      },
      {
        goTo: 22,
        condition: () => {
          return wardrobe.getCurrentEntityImageTitle(EStoriesEn.ITLH, 'Hero_Room') === 'Уединение'
        }
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 9,
    text:
      `
        Скромные зеленые тона вот уже как десять лет стали моими незаменимыми спутниками.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 10,
    text:
      `
        «Кажется, года два назад я затеяла ремонт и добавила карту мира».
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 11,
    text:
      `
        Родители были не против. К тому же они поддерживали мое стремление к путешествиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 12,
    text:
      `
        «Может быть пока возможности нет, но я обязательно исполню мечту и увижу мир за пределами нашего маленького городка».
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 13,
    text:
      `
        Скромные сиреневые тона вот уже как десять лет стали моими незаменимыми спутниками.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 14,
    text:
      `
        «Кажется, года два назад я повесила картину с маяком».
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 15,
    text:
      `
        Увидев ее на гаражной распродаже, просто не смогла пройти мимо.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 16,
    text:
      `
        «И хотя всего на несколько минут, мне удается погрузиться в фантазии и насладиться прекрасным видом, который так далек».
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 17,
    text:
      `
        Скромные голубо-серые тона вот уже как десять лет стали моими незаменимыми спутниками.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 18,
    text:
      `
        На стенах висели различные фрагменты газетных вырезок: статьи, фотографии.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 19,
    text:
      `
        «Мама частенько ругается за это. Но таким образом я черпаю вдохновение и работаю над поделками или написанием собственных рассказов».
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 20,
    text:
      `
        Это мое маленькое творческое пространство, дарящее свободу мыслям и простор для воплощения фантазий.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 22,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 23, buttonText: 'Взглянуть', image: require('../../../../Media/Images/ITLH/Objects/Mobile.png') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 23,
    text:
      `
        Взяв в руки телефон, стало ясно, что будильник не прозвенел, а значит в запасе были сладостные минуты сна.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 24,
    text:
      `
        «Так как же лучше поступить?»
      `,
    buttons: [
      {
        text: 'Поспать еще',
        goTo: 25
      },
      {
        text: 'Встать',
        goTo: 177
      }
    ],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 25,
    text:
      `
        «Легко принимать решения, но не их последствия».
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: 1, category: 'Choice', id: 'GoSleep' }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 26,
    text:
      `
        Убрав мобильник, я завернулась в одеяло, чтобы спрятаться от назойливых солнечных лучей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 27,
    text:
      `
        Мне приснился необычный сон. Я чувствовала, что являюсь частью происходящего.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    beforeBegin: whiteFlash,
    ambient: require('../../../../Media/Audio/ITLH/Ambient/Wind.mp3'),
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Garden_NewYork_1885.jpg')
  },

  {
    id: 28,
    text:
      `
        Это не было видением, готовым вот-вот раствориться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Garden_NewYork_1885.jpg')
  },

  {
    id: 29,
    text:
      `
        Капли воды от фонтана отскакивали на тело. Я слышала звенящую тишину, а гул ветра пробирал до мурашек.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Garden_NewYork_1885.jpg')
  },

  {
    id: 30,
    text:
      `
        Неожиданно мужские руки коснулись талии, смело двигаясь к плечам, чтобы заключить в объятия и не дать вырваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Garden_NewYork_1885.jpg')
  },

  {
    id: 31,
    text:
      `
        Несмотря на незнакомые прикосновения, чувство отвращения не возникло. Меня тянуло к таинственной фигуре, словно к стражу, охраняющему покой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Garden_NewYork_1885.jpg')
  },

  {
    id: 32,
    text:
      `
        Он отстранился. Я не могла разглядеть лица, хоть и стояла совсем близко. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Garden_NewYork_1885.jpg')
  },

  {
    id: 33,
    text:
      `
        Голова закружилась, однако мужчина нежно взял меня за руку и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Garden_NewYork_1885.jpg')
  },

  {
    id: 34,
    text:
      `
        — Ты должна выбрать сторону…
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Alexander.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Garden_NewYork_1885.jpg')
  },

  {
    id: 35,
    text:
      `
        Я подскочила с кровати, до сих пор ощущая прикосновения незнакомца.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Nowadays.mp3'),
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 36,
    text:
      `
        «Со мной такое впервые. Будто я видела не сон, а уже переживала нечто подобное».
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 37,
    text:
      `
        Однако неожиданные сюрпризы утреннего пробуждения сменились тревогой. Взглянув на время, я поняла, что опаздываю на занятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 38,
    text:
      `
        «Мягкая кровать и теплое одеяло — ловушка дьявола!»
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    achievement: { story: EStoriesEn.ITLH, name: 'Sleeper' },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 39,
    text:
      `
        Я начала бегать по комнате в поисках рюкзака. Мысли путались из-за резкого подъема, поэтому не удавалось особо рассмотреть, что кладу.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 40,
    text:
      `
        «Так… Не поеду же я в пижаме в университет…»
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 41,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.ITLH, personId: 'Hero_Chapter01_Part01', goTo: 42 },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 42,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 43 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 43,
    text:
      `
        После переодевания я стремительно спустилась вниз. Времени завтракать не было, поэтому пришлось сразу выбежать на улицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Item', id: 'Phone' },
      { story: EStoriesEn.ITLH, value: +700, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 44,
    text:
      `
        «Должно быть мама и папа уже уехали. Интересно, не проспи я, могли бы мы поговорить с утра?»
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 45,
    text:
      `
        «Не об этом сейчас. И вечером сможем».
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 46,
    text:
      `
        «Как добраться до университета? Поехать на такси? Так я точно не опоздаю и попаду на первую лекцию. Или все-таки автобус? Денег у меня не очень много, можно сэкономить для более важных вещей». 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 47,
    text:
      `
        «Но, когда приедет моя карета — вот, что волнует». 
      `,
    buttons: [
      {
        text: 'Поехать на такси <span style="color: #ff8b8b">(-200)</span>',
        goTo: 48
      },
      {
        text: 'Поехать на автобусе <span style="color: #ff8b8b">(-50)</span>',
        goTo: 96
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 48,
    text:
      `
        Недолго думая, я заказала такси в приложении и через пару минут уже ехала в сторону университета.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Car_Goes.mp3'),
    stats: [
      { story: EStoriesEn.ITLH, value: -200, category: 'Item', id: 'Money' },
      { story: EStoriesEn.ITLH, value: 1, category: 'Choice', id: 'Taxi' }],
    achievement: { story: EStoriesEn.ITLH, name: 'IChooseComfort' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Taxi.jpg')
  },

  {
    id: 49,
    text:
      `
        Мне попался общительный водитель. Он пытался что-то рассказать, задавал кучу вопросов, на которые спросонья не хотелось отвечать.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Taxi.jpg')
  },

  {
    id: 50,
    text:
      `
        Я вежливо отказалась от беседы, вставила наушники, сделала музыку погромче и закрыла глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Taxi.jpg')
  },

  {
    id: 51,
    text:
      `
        Сон подступил незаметно, но от этого он был еще приятнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Taxi.jpg')
  },

  {
    id: 52,
    text:
      `
        Из дремоты меня вытащила вибрация телефона, пришло сообщение от Шерил — подруги детства. Мы с ней вместе, сколько я себя помню.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    message: 'Не со всеми персонажами отношения выстраиваются благодаря положительным статам. Читайте внимательно подсказки и сюжет, чтобы выйти на нужный вам уровень взаимоотношений.',
    simple: require('../../../../Media/Audio/ITLH/Sounds/Vibro.mp3'),
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Taxi.jpg')
  },

  {
    id: 53,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    smartphone: { goTo: 54, chatId: 'ChatWithCheryl' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Taxi.jpg')
  },

  {
    id: 54,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    interruptiveFrame: { goTo: 55 },
    simple: require('../../../../Media/Audio/ITLH/Sounds/Car_Close.mp3'),
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 55,
    text:
      `
        Я вышла из такси и спокойным шагом направилась в сторону входа. До начала лекции оставалось около пятнадцати минут.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_University.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 56,
    text:
      `
        Университет, в котором я училась уже несколько лет, был одним из ведущих учебных заведений в нашем небольшом городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 57,
    text:
      `
        На территории всегда было свежо и просторно: много ветвистых деревьев, аккуратно постриженный газон, скамейки, пользующиеся популярностью у прогульщиков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 58,
    text:
      `
        Порой мы собирались на них с друзьями, чтобы обсудить прошедший день или повторить материал перед занятиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 59,
    text:
      `
        «Но это было раньше — сейчас все стали слишком заняты, и время ценится иначе». 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 60,
    text:
      `
        Я не стала долго задерживаться и поспешила на лекцию по психологии.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 61,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    interruptiveFrame: { goTo: 62 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 62,
    text:
      `
        Первая пара не славилась популярностью по посещениям, поэтому аудитория была заполнена лишь наполовину.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 63,
    text:
      `
        «А ведь и я могла не ходить. К тому же это не отразится на успеваемости, но сбережет нервы, поскольку характер профессора оставляет желать лучшего».
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 64,
    text:
      `
        За минут пять до начала лекции ко мне подсел Хью. Не сказать, что мы тесно дружили, но участвовали в нескольких мероприятиях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 65,
    text:
      `
        Хотя он и был по-своему талантлив, но жутко ленив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 66,
    text:
      `
        «Надеюсь, Хью не будет опять просить дать переписать лекцию».
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 67,
    text:
      `
        — Вот она, моя замечательная $Имя Игрока$! Как дела?
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 68,
    text:
      `
        — Вполне себе, не считая того, что практически была готова опоздать и не приходить.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 69,
    text:
      `
        — Зная характер профессора Оливии, я бы сказал — сиди дома и кайфуй.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 70,
    text:
      `
        — Потом будет пара профессора Нэйтана. А ты знаешь, как он относится к прогулам.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 71,
    text:
      `
        — Давай не будем притворяться. Просто признай, что вы все туда ходите из-за желания переспать с ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh_Smirk.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 72,
    text:
      `
        Я не успела возразить, так как преподаватель вошел в лекционный зал, и все моментально замолчали.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 73,
    text:
      `
        Женщина была в возрасте, с серьёзным лицом и сухим взглядом, устремлённым в никуда.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 74,
    text:
      `
        Ее занятия славились почти механическим изложением материала без особого энтузиазма.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 75,
    text:
      `
        Иногда она любила навязывать исключительно свою верную точку зрения на вопрос. А те смельчаки, кто решался поспорить с ней, попадали у нее в немилость и были завалены на экзамене.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 76,
    text:
      `
        — Записываем тему сегодняшней лекции: <i>«Трансгенерационные травмы и паттерны поведения».</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Whiteboard.mp3'),
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 77,
    text:
      `
        — Трансгенерационная травма формируется в поколениях членов семьи, родственников в результате воздействия травмирующих событий и обстоятельств жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 78,
    text:
      `
        — А затем передается потомкам и…
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 79,
    text:
      `
        Я внимательно слушала преподавателя и старалась записывать ключевые понятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 80,
    text:
      `
        К середине лекции профессор стала рассказывать о том, как мы бессознательно копируем скандалы родителей, а затем разбирать схему циклов конфликтов.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 81,
    text:
      `
        Из-за сосредоточенности я подскочила, увидев несколько сообщений на телефоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Vibro.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 82,
    text:
      `
        «Только не это!»
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 83,
    text:
      `
        Семейный чат, который ранее служил для обсуждения простых бытовых вопросов, превратился в вечные склоки.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 84,
    text:
    '',
    buttons: [
      {
        text: ''
      }],
    smartphone: { goTo: 85, chatId: 'FamilyArguing' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 85,
    text:
      `
        Неожиданно профессор Оливия затихла, вынуждая меня поднять глаза на доску.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 86,
    text:
      `
        — Самое страшное — не сам конфликт, а когда двадцатилетний ребенок чувствует себя обязанным быть миротворцем.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 87,
    text:
      `
        — Вы не спасатели своих родителей, вы — их жертвы в этот момент.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 88,
    text:
      `
        Сердце замерло. Ладонь невольно легла на экран мобильного телефона, желая скрыть от посторонних душевные переживания.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 89,
    text:
      `
        В голове крутился вихрь мыслей, который был прерван шепотом Хью.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 90,
    text:
      `
        — Слушай, я вдруг вспомнил, что для нашего волонтерства нужно было купить для сценки материалы.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 91,
    text:
      `
        — Можешь перечень перекинуть? Не могу никак найти.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 92,
    text:
      `
        — Секунду.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 93,
    text:
      `
        Взяв телефон в руки, я быстро нашла документ.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 94,
    text:
      `
        — И чтобы я без тебя делал!
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 95,
    text:
      `
        Лекция подошла к концу, и я поспешила в буфет, где должна была встретиться с еще одной лучшей подругой — Скарлетт.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 96,
    text:
      `
        Я решила спокойно дождаться общественного транспорта.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 97,
    text:
      `
        «В конце концов еще неизвестно, когда будет возможность подзаработать. Лучше уж поберечь средства. А с учебой как-нибудь разберусь». 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 98,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    interruptiveFrame: { goTo: 99 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 99,
    text:
      `
        Автобус приехал через двадцать минут, но хотя бы без большого количества людей. Я прошла в конец салона, чтобы никто не отвлекал меня от мыслей и заняла место около окна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: -50, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Bus.jpg')
  },

  {
    id: 100,
    text:
      `
        Включив любимую музыку, я стала наблюдать за проносившимися скучными пейзажами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Bus.jpg')
  },

  {
    id: 101,
    text:
      `
        Стандартные дома, вечно куда-то торопящиеся люди, но под музыку все казалось не таким серым и обыденным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Bus.jpg')
  },

  {
    id: 102,
    text:
      `
        Поездку скрасила переписка с Шерил, моей подругой детства. Мы с ней вместе, сколько я себя помню.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    message: 'Не со всеми персонажами отношения выстраиваются благодаря положительным статам. Читайте внимательно подсказки и сюжет, чтобы выйти на нужный вам уровень взаимоотношений.',
    simple: require('../../../../Media/Audio/ITLH/Sounds/Vibro.mp3'),
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Bus.jpg')
  },

  {
    id: 103,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    smartphone: { goTo: 104, chatId: 'ChatWithCheryl' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Bus.jpg')
  },

  {
    id: 104,
    text:
      `
        Когда автобус подъехал к остановке, я увидела, что лекция началась еще пять минут назад.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Bus.jpg')
  },

  {
    id: 105,
    text:
      `
        «Все же опоздала.  Не буду пытаться пойти на занятие, так как профессор Оливия сделает выговор. С ней спорить бесполезно. Да и не велика потеря». 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Bus.jpg')
  },

  {
    id: 106,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    interruptiveFrame: { goTo: 107 },
    simple: require('../../../../Media/Audio/ITLH/Sounds/Car_Close.mp3'),
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 107,
    text:
      `
        Университет, в котором я училась уже несколько лет, был одним из ведущих учебных заведений в нашем небольшом городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_University.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 108,
    text:
      `
        На территории всегда было свежо и просторно: много ветвистых деревьев, аккуратно постриженный газон, скамейки, пользующиеся популярностью у прогульщиков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 109,
    text:
      `
        Порой мы собирались на них с друзьями, чтобы обсудить прошедший день или повторить материал перед занятиями
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 110,
    text:
      `
        «Но это было раньше — сейчас все стали слишком заняты, и время ценится иначе».
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 111,
    text:
      `
        До следующего занятия оставалось более двух часов.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 112,
    text:
      `
        «Надо было просто пропустить лекцию и остаться дома. Но раз уж приехала, неплохо проветриться или что-нибудь поделать».
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 113,
    text:
      `
        «Только вот куда пойти?»
      `,
    buttons: [
      {
        text: 'Библиотека',
        goTo: 114
      },
      {
        text: 'Парк',
        goTo: 132
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 114,
    text:
      `
        «Можно и поучиться, пока есть такая возможность».
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    stats: [
      { story: EStoriesEn.ITLH, value: 1, category: 'Choice', id: 'Library' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 115,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    interruptiveFrame: { goTo: 116 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 116,
    text:
      `
        В библиотеке оказалось всего несколько человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 117,
    text:
      `
        «Это и логично, ведь еще слишком рано».
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 118,
    text:
      `
        Заняв свободный столик, я открыла рюкзак и начал перебирать содержимое.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 119,
    text:
      `
        Меня пробил холодный пот. В спешке не заметила, как забыла положить домашнее задание для предстоящей лекции профессора Нэйтана.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 120,
    text:
      `
        «Только не по его предмету. Нельзя так ошибаться. Нужно срочно исправлять ситуацию».
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 121,
    text:
      `
        Я включила компьютер в библиотеке и смогла зайти в свое облачное хранилище, на которое своевременно сохранила материал.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 122,
    text:
      `
        «Отлично! Надо перечитать и можно печатать». 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 123,
    text:
      `
        Дополнив эссе, я положила его в рюкзак.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Item', id: 'Essay' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 124,
    text:
      `
        «Даже не хочу думать о другом исходе».
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    achievement: { story: EStoriesEn.ITLH, name: 'RecoverEssay' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 125,
    text:
      `
        Оставшееся время я провела за компьютером, повторяя материал.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 126,
    text:
      `
        Из-за сосредоточенности я подскочила, увидев несколько сообщений на телефоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Vibro.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 127,
    text:
      `
        «Только не это!»
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 128,
    text:
      `
        Семейный чат, который ранее служил для обсуждения простых бытовых вопросов, превратился в вечные склоки.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 129,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    smartphone: { goTo: 130, chatId: 'FamilyArguing' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 130,
    text:
      `
        «Когда же это прекратится…»
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 131,
    text:
      `
        Время двигалось вперед, поэтому вскоре я поспешила в буфет, где должна была встретиться с еще одной лучшей подругой — Скарлетт.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 132,
    text:
      `
        «Возьму какую-нибудь вкусняшку и посижу на лавочке, наслаждаясь природой».
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Library.jpg')
  },

  {
    id: 133,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    interruptiveFrame: { goTo: 134 },
    ambient: require('../../../../Media/Audio/ITLH/Ambient/Birds.mp3'),
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 134,
    text:
      `
        Парк находился в десяти минутах от университета. Ухоженный, в центре размещался небольшой пруд.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 135,
    text:
      `
        «Давно здесь не была. Последний раз, кажется, мы с Леоном пили кофе. Давно его не видела, стоит написать на днях».
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 136,
    text:
      `
        Прогуливаясь по дорожкам, я увидела, как на скамейке сидел профессор Нэйтан и увлеченно читал книгу.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 137,
    text:
      `
        Он был одет в классическую белую рубашку и черные брюки.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 138,
    text:
      `
        Профессор всегда держал голову высоко, а спину — прямо. Многие студентки неоднократно пытались флиртовать, но преподаватель всегда держался холодно и отстраненно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 139,
    text:
      `
        Для него гораздо важнее было передать знания, научить чему-то полезному. Нэйтан всегда подчеркивал важность учебы и негативно относился к невыполнению требований к занятиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 140,
    text:
      `
        Пройти мимо не получилось, преподаватель поднял взгляд и доброжелательно улыбнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 141,
    text:
      `
        — $Имя Игрока$! Не ожидал тебя тут увидеть.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 142,
    text:
      `
        Он посмотрел на наручные часы.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 143,
    text:
      `
        — Прогуливаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Upset.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 144,
    text:
      `
        Не хотелось оправдываться или врать. Я была поймана с поличным.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 145,
    text:
      `
        «Но мы и не в школе, чтобы бояться подобных инцидентов. Нужно уметь нести ответственность за свои поступки».
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 146,
    text:
      `
        — Так вышло не специально. Я проспала.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 147,
    text:
      `
        Нэйтан неодобрительно покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 148,
    text:
      `
        — И все же необходимо поддерживать дисциплину. Подумай над этим. Ты прежде всего работаешь на свое будущее.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    message: 'Преподаватель недоволен вашим отношением к учебе.',
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Upset.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: -1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 149,
    text:
      `
        Я робко кивнула, и повисла неловкая пауза.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 150,
    text:
      `
        В надежде отвлечься, посмотрела на книгу, которая лежала рядом с профессором.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 151,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 152, buttonText: 'Взглянуть', image: require('../../../../Media/Images/ITLH/Objects/Book.png') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 152,
    text:
      `
        «Красивая обложка и трагичная история».
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 153,
    text:
      `
        Нэйтан, увидев мой заинтересованный взгляд, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 154,
    text:
      `
        — Нашел у себя в библиотеке, решил освежить знания.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 155,
    text:
      `
        — Подумываю написать научную статью.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 156,
    text:
      `
        — Желаю вам удачи! А почему выбрали именно этот период?
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 157,
    text:
      `
        — Личный интерес.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 158,
    text:
      `
        Мы немного поговорили об той эпохе, а затем разговор свелся к повседневным темам.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 159,
    text:
      `
        — Кстати, ты еще общаешься с Хью? Вы, кажется, вместе занимаетесь волонтерством.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 160,
    text:
      `
        Не сказать, что мы тесно дружили, но участвовали в нескольких мероприятиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 161,
    text:
      `
        Хотя он и был по-своему талантлив, но жутко ленив.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 162,
    text:
      `
        — Да, а что такое?
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 163,
    text:
      `
        — Он избегает мои пары. Можешь, пожалуйста, напомнить ему, что такими темпами я не допущу его к экзамену.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 164,
    text:
      `
        — В своем репертуаре. Постараюсь поймать!
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 165,
    text:
      `
        Из-за сосредоточенности на разговоре я подскочила, увидев несколько сообщений на телефоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Vibro.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 166,
    text:
      `
        Семейный чат, который ранее служил для обсуждения простых бытовых вопросов, превратился в вечные склоки.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 167,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    smartphone: { goTo: 168, chatId: 'FamilyArguing' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 168,
    text:
      `
        Сердце замерло. Ладонь невольно легла на экран мобильного телефона, желая скрыть от посторонних душевные переживания.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 169,
    text:
      `
        В голове крутился вихрь мыслей, который был прерван вопросом Нэйтана.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 170,
    text:
      `
        — Все в порядке?
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 171,
    text:
      `
        — Да, просто небольшие размолвки в семье.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 172,
    text:
      `
        Бросив взгляд на время, я встала со скамейки.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 173,
    text:
      `
        — Простите, мне пора бежать.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 174,
    text:
      `
        — Заговорились мы с тобой. Тоже буду выдвигаться в сторону университета, чтобы подготовиться к паре.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 175,
    text:
      `
        На душе было тепло от прошедшей беседы. На какое-то время это помогло отвлечься от переживаний, преследующих в реальности.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 176,
    text:
      `
        Но время двигалось вперед, поэтому я поспешила в буфет, где должна была встретиться с еще одной лучшей подругой — Скарлетт.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 177,
    text:
      `
        Я не поддалась на это искушение, встала с кровати и начала собирать рюкзак.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    achievement: { story: EStoriesEn.ITLH, name: 'GoodGirl' },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 178,
    text:
      `
        «Чуть не забыла! Домашнее задание к паре профессора Нэйтана…»
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 179,
    text:
      `
        «Хорошо, что встала заранее. Иначе бы наверняка забыла его, получив заслуженный нагоняй от преподавателя».
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Hero_Pajamas.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Item', id: 'Essay' }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 180,
    text:
      `
        Покрутившись перед зеркалом, выбрала наряд для поездки в университет.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 181,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.ITLH, personId: 'Hero_Chapter01_Part01', goTo: 182 },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 182,
    text:
      `
        «Отлично! Что за…»
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 183,
    text:
      `
        Внизу послышался звук, будто бы что-то разбилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Mug_Crash.mp3'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 184,
    text:
      `
        «Неужели они опять ругаются? Я должна спуститься вниз и проверить обстановку».
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 185,
    text:
      `
        Кухня была наполнена ароматом завтрака.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 186,
    text:
      `
        За столом сидела мама. Она пила кофе и читала утреннюю газету.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 187,
    text:
      `
        Отец подметал осколки некогда любимой кружки.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 188,
    text:
      `
        Увидев, что я спускаюсь, мама встала и обняла меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 189,
    text:
      `
        — Доброе утро, дорогая! Чего хочешь на завтрак?
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 190,
    text:
      `
        Поделившись с мамой своими мыслями, я бросила обеспокоенный взгляд на папу и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 191,
    text:
      `
        — Пап, что случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 192,
    text:
      `
        — Ничего, солнышко. Просто небольшое недоразумение.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father_Sad.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 193,
    text:
      `
        По его выражению лица этого не скажешь. Кажется, кружку отец купил на бейсбольном матче команды, за которую рьяно болеет.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 194,
    text:
      `
        «И она дорога как память».
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 195,
    text:
      `
        — Давай попробуем собрать осколки и склеить. Необязательно же пить из нее, пусть стоит как сувенир.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 196,
    text:
      `
        — Я уже сказал, что она отправится на помойку.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 197,
    text:
      `
        — Брось, пап. Не расстраивайся. Мама дело говорит.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 198,
    text:
      `
        — Закрыли тему. Лучше не трать время и поешь. У меня есть время перед работой, отвезу тебя в университет.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 199,
    text:
      `
        Я кивнула и задумалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 200,
    text:
      `
        «В последнее время мы стали не такими дружными. Раньше устраивали семейные посиделки».
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 201,
    text:
      `
        «Играли в настольные игры, рубились в приставку, гуляли — а теперь что…»
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 202,
    text:
      `
        «Хотелось бы поговорить с ними. Но не сделаю ли хуже своим вмешательством?»
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 203,
    text:
      `
        Отогнав неудобные мысли, я сосредоточилась на выборе еды.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 204,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    wardrobe: { story: EStoriesEn.ITLH, personId: 'Breakfast_Chapter01_Part01', goTo: 205 },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 205,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 208,
        condition: () => {
          return wardrobe.getCurrentEntityImageTitle(EStoriesEn.ITLH, 'Breakfast_Chapter01_Part01') === 'Блины'
        }
      },
      {
        goTo: 207,
        condition: () => {
          return wardrobe.getCurrentEntityImageTitle(EStoriesEn.ITLH, 'Breakfast_Chapter01_Part01') === 'Бутерброды'
        }
      },
      {
        goTo: 206,
        condition: () => {
          return wardrobe.getCurrentEntityImageTitle(EStoriesEn.ITLH, 'Breakfast_Chapter01_Part01') === 'Фруктовый салат'
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 206,
    text:
      `
        Свежие фрукты в сочетании с йогуртом оказались очень питательными и вкусными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 207,
    text:
      `
        Старая классика. Хлеб, сыр и колбаса, что может быть проще и вкуснее?
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 208,
    text:
      `
        Я подогрела несколько блинов в микроволновке. Они оказались с мясом.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 209,
    text:
      `
        Во время трапезы каждый был занят своими делами. Из‑за угнетающей тишины хотелось скорее выйти из‑за стола.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 210,
    text:
      `
        Первым это сделал папа, чтобы завести машину и проверить, все ли в порядке.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 211,
    text:
      `
        «Хорошо, что он решил подвезти меня. Не пришлось ждать автобус или тратить деньги на такси».
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 212,
    text:
      `
        Попрощавшись с мамой, я села в машину отца.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Kitchen.png')
  },

  {
    id: 213,
    text:
      `
        Я стала рассматривать окружающие виды, как вдруг папа спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Car_Goes.mp3'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Item', id: 'Phone' },
      { story: EStoriesEn.ITLH, value: +700, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 214,
    text:
      `
        — Что-то давно Леона не видно. С ним все хорошо?
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 215,
    text:
      `
        «Мы действительно в последнее время перестали общаться. Повод задуматься и написать».
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 216,
    text:
      `
        — Он, как всегда, в своих делах. Надеюсь, что все нормально.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 217,
    text:
      `
        — Хороший же парень. К тому же я все хотел посоветоваться с ним на счет машины…
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 218,
    text:
      `
        Оставшуюся часть пути мы молчали, наслаждаясь музыкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 219,
    text:
      `
        Сон подступил незаметно, но от этого он был еще приятнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 220,
    text:
      `
        Из дремоты меня вытащила вибрация телефона, пришло сообщение от Шерил — подруги детства. Мы с ней вместе, сколько я себя помню.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    message: 'Не со всеми персонажами отношения выстраиваются благодаря положительным статам. Читайте внимательно подсказки и сюжет, чтобы выйти на нужный вам уровень взаимоотношений.',
    simple: require('../../../../Media/Audio/ITLH/Sounds/Vibro.mp3'),
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 221,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    smartphone: { goTo: 222, chatId: 'ChatWithCheryl' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Car_Father.jpg')
  },

  {
    id: 222,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    interruptiveFrame: { goTo: 223 },
    simple: require('../../../../Media/Audio/ITLH/Sounds/Car_Close.mp3'),
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 223,
    text:
      `
        Поблагодарив папу, я вышла из машины и спокойным шагом направилась в сторону входа. До начала лекции оставалось около двадцати минут.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_University.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 224,
    text:
      `
        Университет, в котором я училась уже несколько лет, был одним из ведущих учебных заведений в нашем небольшом городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 225,
    text:
      `
        На территории всегда было свежо и просторно: много ветвистых деревьев, аккуратно постриженный газон, скамейки, пользующиеся популярностью у прогульщиков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 226,
    text:
      `
        Порой мы собирались на них с друзьями, чтобы обсудить прошедший день или повторить материал перед занятиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 227,
    text:
      `
        «Но это было раньше — сейчас все стали слишком заняты, и время ценится иначе». 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 228,
    text:
      `
        Я не стала долго задерживаться и поспешила на лекцию по психологии.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University.jpg')
  },

  {
    id: 229,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    interruptiveFrame: { goTo: 230 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 230,
    text:
      `
        Первая пара не славилась популярностью по посещениям, поэтому аудитория была заполнена лишь наполовину.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 231,
    text:
      `
        «А ведь и я могла не ходить. К тому же это не отразится на успеваемости, но сбережет нервы, так как характер профессора оставляет желать лучшего».
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 232,
    text:
      `
        За минут пять до начала лекции ко мне подсел Хью. Не сказать, что мы тесно дружили, но участвовали в нескольких мероприятиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 233,
    text:
      `
        Хотя он и был по-своему талантлив, но жутко ленив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 234,
    text:
      `
        «Надеюсь, Хью не будет опять просить дать переписать лекцию».
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 235,
    text:
      `
        — Вот она, моя замечательная $Имя Игрока$! Как дела?
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 236,
    text:
      `
        — Вполне себе, не считая того, что не горю желанием здесь находиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 237,
    text:
      `
        — Зная характер профессора Оливии, я бы сказал — сиди дома и кайфуй.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 238,
    text:
      `
        — Потом будет пара профессора Нэйтана. А ты знаешь, как он относится к прогулам.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 239,
    text:
      `
        — Давай не будем притворяться. Просто признай, что вы все туда ходите из-за желания переспать с ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh_Smirk.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 240,
    text:
      `
        Я не успела возразить, так как преподаватель вошел в лекционный зал, и все моментально замолчали.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 241,
    text:
      `
        Женщина была в возрасте, с серьёзным лицом и сухим взглядом, устремленным в никуда.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 242,
    text:
      `
        Ее занятия славились почти механическим изложением материала без особого энтузиазма. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 243,
    text:
      `
        Иногда она любила навязывать исключительно свою верную точку зрения на вопрос. А те смельчаки, кто решался поспорить с ней, попадали у нее в немилость и были завалены на экзамене.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 244,
    text:
      `
        — Записываем тему сегодняшней лекции: <i>«Трансгенерационные травмы и паттерны поведения».</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Whiteboard.mp3'),
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 245,
    text:
      `
        — Трансгенерационная травма формируется в поколениях членов семьи, родственников в результате воздействия травмирующих событий и обстоятельств жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 246,
    text:
      `
        — А затем передается потомкам и…
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 247,
    text:
      `
        Я внимательно слушала преподавателя и старалась записывать ключевые понятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 248,
    text:
      `
        К середине лекции профессор стала рассказывать о том, как мы бессознательно копируем скандалы родителей, а затем разбирать схему циклов конфликтов.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 249,
    text:
      `
        Из-за сосредоточенности я подскочила, увидев несколько сообщений на телефоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Vibro.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 250,
    text:
      `
        «Только не это!»
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 251,
    text:
      `
        Семейный чат, который ранее служил для обсуждения простых бытовых вопросов, превратился в вечные склоки.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 252,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    smartphone: { goTo: 253, chatId: 'FamilyArguing' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 253,
    text:
      `
        Неожиданно профессор Оливия затихла, вынуждая меня поднять глаза на доску.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 254,
    text:
      `
        — Самое страшное — не сам конфликт, а когда двадцатилетний ребенок чувствует себя обязанным быть миротворцем.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 255,
    text:
      `
        — Вы не спасатели своих родителей, вы — их жертвы в этот момент.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    speakerR: 'Оливия',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Olivia.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 256,
    text:
      `
        Сердце замерло. Ладонь невольно легла на экран мобильного телефона, желая скрыть от посторонних душевные переживания.
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 257,
    text:
      `
        В голове крутился вихрь мыслей, который был прерван шепотом Хью.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 258,
    text:
      `
        — Слушай, я вдруг вспомнил, что для нашего волонтерства нужно было купить для сценки материалы.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 259,
    text:
      `
        — Можешь перечень перекинуть? Не могу никак найти.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 260,
    text:
      `
        — Секунду.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 261,
    text:
      `
        Взяв телефон в руки, я быстро нашла документ.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 262,
    text:
      `
        — И чтобы я без тебя делал!
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 263,
    text:
      `
        Лекция подошла к концу, и я поспешила в буфет, где должна была встретиться с еще одной лучшей подругой — Скарлетт.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_01.jpg')
  },

  {
    id: 264,
    text:
      `
        Столовая, как обычно, была заполнена студентами, которые громко разговаривали, создавая гул.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    ambient: require('../../../../Media/Audio/ITLH/Ambient/Canteen.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 265,
    text:
      `
        «Как мне найти ее в таком хаосе?»
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 266,
    text:
      `
        Взяв поднос, я выбрала несколько подходящих блюд и стала искать Скарлетт.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 267,
    text:
      `
        К счастью, мы быстро нашли друг друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 268,
    text:
      `
        — $Имя Игрока$, приветик! Наконец-то.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 269,
    text:
      `
        Подруга, как всегда, выглядела хорошо. Про нее в университете ходили только позитивные слухи: отличница, помощница, всегда все делает вовремя и без ошибок.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 270,
    text:
      `
        — Извини за задержку, длинная очередь.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 271,
    text:
      `
        — Выглядишь замечательно! Готова к паре профессора Нэйтана?
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 272,
    text:
      `
        — К ней невозможно подготовиться. Он всегда способен удивить чем-то новым.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 273,
    text:
      `
        — Я про домашнее задание. Ты принесла эссе?
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 274,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 275,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Item', id: 'Essay' }) >= 1
        }
      },
      {
        goTo: 282,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Item', id: 'Essay' }) >= 0
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 275,
    text:
      `
        Облегченно вздохнув, я не стала вдаваться в подробности, зная, как тяжело мне это далось.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 276,
    text:
      `
        «Вдохновение бывает очень капризным».
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 277,
    text:
      `
        — Конечно! Не принеси я задание, профессор бы опять начал читать нотации.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 278,
    text:
      `
        — Да и на успеваемости точно негативно отразится.
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 279,
    text:
      `
        — Дело не только в этом. Но и в ответственности, и в дисциплине.
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 280,
    text:
      `
        «Кого-то мне это напоминает…»
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 281,
    text:
      `
        — Горжусь! Рада, что ты стала более благоразумна в плане учебы.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    message: 'Скарлетт довольна, что вы сделали домашнюю работу.',
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 282,
    text:
      `
        Что-то во мне оборвалось, нарастало чувство тревоги. Я начала лихорадочно копаться в рюкзаке, выбрасывая все вещи на стол.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 283,
    text:
      `
         Опустошив всю сумку, окончательно убедилась, что забыла работу дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 284,
    text:
      `
        «Как же так…»
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 285,
    text:
      `
        — Судя по твоему лицу, ты не принесла домашнюю работу.
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 286,
    text:
      `
        — У тебя было много времени, и ты опять решила отложить задание до последнего?
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 287,
    text:
      `
        — Нет, клянусь! Я сделала, просто забыла дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 288,
    text:
      `
        — Не уверена, что профессора Нэйтана удовлетворит такое оправдание.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    message: 'Скарлетт расстроена, что вы не принесли домашнюю работу.',
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Sad.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: -1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 289,
    text:
      `
        И она была права. Преподаватель был довольно строг в отношении учебы. Мне оставалось только просить отсрочку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 290,
    text:
      `
        «И просить как можно убедительнее!»
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 291,
    text:
      `
        Скарлетт всегда переживала и поддерживала меня. Не сказать, что по началу я была прилежной ученицей.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 292,
    text:
      `
        Возможно, именно благодаря подруге, я стала больше стараться. Пусть и не всегда получалось как надо.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 293,
    text:
      `
        — Что ж… А как твои дела?
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 294,
    text:
      `
        Скарлетт рассказала об очередной домашней ссоре. У ее семьи были совершенно другие взгляды на будущее дочери. И в их планы не входило, чтобы она связывала свою жизнь с историей.
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 295,
    text:
      `
        — Ты представляешь, $Имя Игрока$, я заявила, что хочу работать в архивах, а она все снова про свой бизнес. Плевать ей на мои желания! 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Angry.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 296,
    text:
      `
        — А отец? 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 297,
    text:
      `
        — Ушел рано, у него собеседование. 
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 298,
    text:
      `
        — Есть шансы, что он устроится на работу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 299,
    text:
      `
        — Не знаю. Хоть папа и всегда меня поддерживал, но сейчас он больше походит на зомби, чем на человека. Мама окончательно достала его придирками.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Sad.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 300,
    text:
      `
        Я была мало посвящена в семейные проблемы подруги. Скарлетт будто возводила стену, редко рассказывая о переживаниях. А может она просто боялась показаться уязвимой. Мне же…
      `,
    buttons: [
      {
        text: 'Были понятны ее чувства',
        goTo: 301
      },
      {
        text: 'Было все равно',
        goTo: 310
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 301,
    text:
      `
        Семья — это важно, но каждый вправе жить и делать выбор, опираясь на свои желания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 302,
    text:
      `
        — Думаю, они беспокоятся, что подобный род деятельности не будет приносить доход, которого ты заслуживаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 303,
    text:
      `
        — Я не дура. И прекрасно понимаю, какая там зарплата. Суть не в деньгах. А в том, что мне нужен опыт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Angry.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 304,
    text:
      `
        — Который впоследствии поможет при реализации дальнейших планов.
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 305,
    text:
      `
        — Понимаю, Скар. И мне жаль, что тебе приходится все это выслушивать. Надеюсь, когда-нибудь, они смогут принять это.
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 306,
    text:
      `
        — Главное не сдавайся. Раз выбрала, двигайся до конца!
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 307,
    text:
      `
        Она смущенно улыбнулась и взяла меня за руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 308,
    text:
      `
        — Твой оптимизм бодрит. Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    message: 'Скарлетт дорожит вашей дружбой.',
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 309,
    text:
      `
        Понемногу Скарлетт открывалась мне, и я хотела быть на ее стороне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 310,
    text:
      `
        Каждый жил своей жизнью. Нужно было фокусироваться на своих проблемах, а не лезть в чужие. И все же я решила немного поддержать разговор.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 311,
    text:
      `
        — Думаю, они беспокоятся, что подобный род деятельности не будет приносить доход, которого ты заслуживаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 312,
    text:
      `
        — Я не дура. И прекрасно понимаю, какая там зарплата. Суть не в деньгах. А в том, что мне нужен опыт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Angry.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 313,
    text:
      `
        — Который впоследствии поможет при реализации дальнейших планов.
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 314,
    text:
      `
        — Твои родные не желают тебе зла. Пока этого не понять. Но возможно все не так плохо? И тебе стоит прислушаться?
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 315,
    text:
      `
        Подруга расстроилась и опустила взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 316,
    text:
      `
        — Может быть. Но давай, пожалуйста, закроем эту тему.
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    message: 'Вы со Скарлетт не такие уж и близкие подруги.',
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Sad.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: -1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 317,
    text:
      `
        У Скарлетт была возможность не усложнять себе жизнь, она же выбрала иной путь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Canteen.jpg')
  },

  {
    id: 319,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 320 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 320,
    text:
      `
        Вскоре мы со Скарлетт сидели и ждали начала лекции. Перед занятием было время, поэтому я повторяла материал, который мог пригодиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 321,
    text:
      `
        Я смогла запомнить Вильгельма Рентгена, который совершил прорыв в медицине и открыл рентген; Александра Флеминга — изобретателя пенициллина; Бориса Розинга — создателя более ста двадцати схем и систем для телевизионных устройств.
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 322,
    text:
      `
        Когда в лекционный зал вошел профессор Нэйтан, гул, стоявший от болтовни студентов, сразу же стих.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 323,
    text:
      `
        Это была одна из немногих пар, на которые учащиеся приходили с чувством заинтересованности.  
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 324,
    text:
      `
        Время пролетало мгновенно, в силу того что профессор был необычайно талантлив и умел грамотно преподавать материал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 325,
    text:
      `
        — Давайте начнем, думаю, все, кто хотел присутствовать сегодня — уже пришли.
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 326,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 327,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Library' }) >= 1
        }
      },
      {
        goTo: 330,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Library' }) <= 0
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 327,
    text:
      `
        Нэйтан был одет в классическую белую рубашку и черные брюки.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 328,
    text:
      `
        Профессор всегда держал голову высоко, а спину — прямо. Многие студентки неоднократно пытались флиртовать, но преподаватель всегда держался холодно и отстраненно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 329,
    text:
      `
        Для него гораздо важнее было передать знания, научить чему-то полезному. Нэйтан всегда подчеркивал важность учебы и негативно относился к невыполнению требований к занятиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 330,
    text:
      `
        Профессор нашел меня взглядом и незаметно подмигнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 331,
    text:
      `
        «Я была рада поговорить с ним до занятия. Здорово, что и он это оценил».
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 332,
    text:
      `
        — Тема сегодняшней лекции:  <i>«Великие открытия человечества XIX - XX веков». </i>
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 333,
    text:
      `
        — Попрошу вас сдать эссе, которое я задавал неделю назад. Передайте с задних рядов вперед.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    message: 'Знание — накопительный стат. Чем выше его значение, тем лучше вы будете разбираться в исторических эпохах и узнавать дополнительные сведения, влияющие на сюжет.',
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 334,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 335,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Item', id: 'Essay' }) >= 1
        }
      },
      {
        goTo: 337,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Item', id: 'Essay' }) >= 0
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 335,
    text:
      `
        Я передала свою работу вместе со всеми. Профессор удовлетворительно кивнул и перешел к основной теме занятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Effect', id: 'Knowledge' },
      { story: EStoriesEn.ITLH, value: -1, category: 'Item', id: 'Essay' },
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 336,
    text:
      `
        «Чувствую, что и преподаватель мной доволен».
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 337,
    text:
      `
        Я раскраснелась, так как была среди немногих, кто не сдал работу. Профессор недовольно покачал головой и перешел к основной теме занятия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: -1, category: 'Effect', id: 'Knowledge' },
      { story: EStoriesEn.ITLH, value: -1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 338,
    text:
      `
        «Ох, сама виновата… Чувствую, что мне еще достанется от Нэйтана».
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 339,
    text:
      `
        Профессор рассказывал об удивительных гениях, чьи открытия совершили в свою эпоху прорыв, оказавший огромное влияние на современный мир.
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 340,
    text:
      `
        Его лекция не была монологом, Нэйтан часто обращался к студентам и спрашивал их мнение по тому или иному вопросу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 341,
    text:
      `
        Он упомянул, что все совершают ошибки, а также как ничтожна известность без настоящего рвения и знаний.  
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 342,
    text:
      `
        — Потенциал многих ученых смог полностью раскрыться только в информационный век. Не стоит гоняться за бессмысленной славой и уж тем более мечтать о легких деньгах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 343,
    text:
      `
        Я же…
      `,
    buttons: [
      {
        text: 'Продолжала слушать лекцию',
        goTo: 344
      },
      {
        text: 'Засматривалась на профессора',
        goTo: 346
      },
      {
        text: 'Перешёптывалась со Скарлетт',
        goTo: 348
      }],
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 344,
    text:
      `
        Профессор вел не нудную, а увлекательную лекцию, словно пытаясь достучаться до каждого в этом зале.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Effect', id: 'Knowledge' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 345,
    text:
      `
        Хотя он местами и говорил очевидные вещи, его харизма и обаяние заставляли вслушиваться в каждое слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 346,
    text:
      `
        Преподаватель казался интереснее, чем учеба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 347,
    text:
      `
        Его глаза и сосредоточенный взгляд захватили все внимание. Я, не отрываясь, смотрела на Нэйтана, любуясь привлекательной внешностью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 348,
    text:
      `
        Я забеспокоилась, когда подруге пришло сообщение, от которого она побледнела. Решила поддержать ее.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 349,
    text:
      `
        В конечном итоге, всегда можно у кого-нибудь переписать материал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 350,
    text:
      `
        Когда большая часть лекции была позади, профессор объявил:
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 351,
    text:
      `
        — Отвлекитесь от своих тетрадей — или чем вы там занимались. Проведем небольшой устный опрос. Один вопрос каждому желающему, если ответите верно, поставлю плюсик к вашей оценке. Кто попробует рискнуть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 352,
    text:
      `
        Я колебалась. Не сказать, что хорошо знала материал, но и шанс повысить успеваемость глупо было упускать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 353,
    text:
      `
        И я решила: 
      `,
    buttons: [
      {
        text: 'Поднять руку',
        goTo: 354
      },
      {
        text: 'Не поднимать руку',
        goTo: 366
      }],
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 354,
    text:
      `
        «Была не была!»
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 355,
    text:
      `
        Я резко подняла руку, чем вызвала удивление Скарлетт. Нэйтан, напротив, улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 356,
    text:
      `
        «Наверное подумал, наконец-то, его непутевая студентка решила взяться за учебу». 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 357,
    text:
      `
        — $Имя Игрока$, скажите, кто изобрел пенициллин? 
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 358,
    text:
      `
        «Должно быть легко, вспоминай…»
      `,
    buttons: [
      {
        text: 'Вильгельм Рентген',
        goTo: 359
      },
      {
        text: 'Александр Флеминг',
        goTo: 362
      },
      {
        text: 'Борис Розинг',
        goTo: 363
      }],
    beforeBegin: () => {
      timer.set(7, () => { scenarioManager.beginScene(359) })
    },
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 359,
    text:
      `
        Преподаватель разочарованно вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 360,
    text:
      `
        — Нет, это был Александр Флеминг. В 1928 году он обнаружил воздействие плесени на бактерии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 361,
    text:
      `
        — И лишь к 1943-му лекарство стали широко использовать в медицинских учреждениях. Но ты все равно молодец, за смелость, я не буду снижать оценку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 362,
    text:
      `
        — Отлично, лекцию ты слушала. И действительно, в 1928 году он обнаружил воздействие плесени на бактерии. И лишь к 1943-му лекарство стали широко использовать в медицинских учреждениях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    beforeBegin: () => { timer.stop() },
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Effect', id: 'Knowledge' }],
    achievement: { story: EStoriesEn.ITLH, name: 'CorrectAnswer' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 363,
    text:
      `
        Преподаватель разочарованно вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 364,
    text:
      `
        — Нет, это был Александр Флеминг. В 1928 году он обнаружил воздействие плесени на бактерии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 365,
    text:
      `
        — И лишь к 1943-му лекарство стали широко использовать в медицинских учреждениях. Но ты все равно молодец, за смелость, я не буду снижать оценку.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 366,
    text:
      `
        Несколько ребят попытали удачу, в том числе и Скарлетт. Вопросы были не из легких, и я даже облегченно вздохнула, радуясь, что решила не отвечать.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 367,
    text:
      `
        Лекция подходила к концу, когда я ощутила нарастающую боль в области виска. Моя рука невольно прикоснулась к лицу, и я почувствовала что-то мокрое на руке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 368,
    text:
      `
        Это была кровь, которая, по всей видимости, струилась у меня из носа. Я неуверенно поднялась из-за парты, начала проходить между рядами, чтобы поскорее покинуть помещение. Перед глазами стало все расплываться.
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 369,
    text:
      `
        Последнее, что отложилось в памяти — крепкие объятия. А затем, давящая темнота поглотила меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Lectionhall_02.jpg')
  },

  {
    id: 370,
    text:
      `
        Большое количество громких звуков заставило меня прийти в себя и попытаться открыть глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Media/Audio/ITLH/Music/Theme_NY.mp3'),
    ambient: require('../../../../Media/Audio/ITLH/Ambient/NY_Humble.mp3'),
    message: '<i> Нью-Йорк 1885 год.',
    stats: [
      { story: EStoriesEn.ITLH, value: -100500, category: 'Item', id: 'Money' },
      { story: EStoriesEn.ITLH, value: -100500, category: 'Item', id: 'Phone' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 371,
    text:
      `
        Череда ярких вспышек, перетекающих в головокружение, не давали мне окончательно сосредоточиться на происходящем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 372,
    text:
      `
        Незнакомое окружение проступало сквозь затуманенное сознание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 373,
    text:
      `
        Одетые во фраки мужчины, с причудливыми тростями в руках. Лошади, тянущие за собой кареты. Невиданные мною ранее здания, которые были увешаны завлекающими вывесками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 374,
    text:
      `
        Впереди, на крыше одного из домов, развевался американский флаг. Суетились люди, не обращая внимания на мою растерянность.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 375,
    text:
      `
        Возникало ощущение, что я чудесным образом попала в прошлое. Однако я не была историком или прилежной ученицей, чтобы точно определить эпоху.
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 376,
    text:
      `
        «Машин нет, старомодная одежда… Наверно это XIX или XX век». 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 377,
    text:
      `
        Я неспешно подошла к магазину, торговавшему ювелирными изделиями, и, всматриваясь в стеклянную витрину, увидела своё отражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 400,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/ITLH/Cutscenes/MeetKatarina.mp4'), goTo: 378 },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 378,
    text:
      `
        Это была я? Мои каштановые волосы, лицо… Но некоторые черты все же отличались. Например, форма глаз или бровей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 379,
    text:
      `
        В остальном, девушка была моей копией. Словно я нашла двойника, здесь, в другом времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 380,
    text:
      `
        Я бездумно смотрела вперед: щипая себя за руки, хлопая по щекам… Ощущения были реальными, но я все равно подсознательно отрицала происходящее.
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 381,
    text:
      `
        «Как такое может быть правдой?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 382,
    text:
      `
        Меня немного трясло, поэтому я облокотилась на витрину, закрыла глаза в надежде, что, ощутив опору, состояние улучшится.
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 383,
    text:
      `
        Через некоторое время кто-то легонько тронул за плечо. А затем взволнованный мужской голос произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 384,
    text:
      `
        — Катарина? Все в порядке?
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 385,
    text:
      `
        На мгновение все затихло. Лишь эхо звучащего сердцебиения возвращало в реальность.
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Heartbeat.mp3'),
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 386,
    text:
      `
        «Куда я попала?»
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ITLH', 'Глава 1', 'Часть 2', '0')
        }
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    achievement: { story: EStoriesEn.ITLH, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  }
])
