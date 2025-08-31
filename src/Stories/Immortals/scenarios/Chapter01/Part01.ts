import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { blackFlash, redFlash, whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.Immortals, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Утреннее солнце пробивалось сквозь шторы, пытаясь разбудить меня. Я лениво потянулась, надеясь, что еще есть возможность поваляться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    music: require('../../../../Sounds/Immortals/Nowadays.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Room_Curtains.jpg')
  },

  {
    id: 300,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.Immortals, personId: 'Hero_Room', goTo: 1 },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Room_Curtains.jpg')
  },

  {
    id: 1,
    text:
      `
        Взглянув на телефон, стало ясно, что будильник еще не прозвенел, а значит в запасе были сладостные минуты сна.
      `,
    buttons: [
      {
        text: 'Поспать еще',
        goTo: 2
      },
      {
        text: 'Встать',
        goTo: 112
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 2,
    text:
      `
        Я убрала телефон и завернулась в одеяло, чтобы спрятаться от назойливых лучей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 3,
    text:
      `
        Мне снились странные сны. Один из них я запомнила отчетливее других. Мужские руки крепко обнимали меня, не давая вырваться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 4,
    text:
      `
        Но мне это нравилось. Я чувствовала тягу к нему, будто бы в этих объятиях заключался скрытый смысл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 5,
    text:
      `
        Он отстранился. Я не могла разглядеть его лицо, хоть и стояла совсем близко. Мне что-то мешало... Мужчина нежно взял меня за руку и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 6,
    text:
      `
        — Ты должна выбрать сторону...
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 7,
    text:
      `
        Через некоторое время я открыла глаза, до сих пор ощущая прикосновения.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    beforeBegin: whiteFlash,
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 8,
    text:
      `
        Однако радость утреннего пробуждения сменилась тревогой. Взглянув на настенные часы, я поняла, что опаздываю на занятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 9,
    text:
      `
        «Мягкая кровать и теплое одеяло — ловушка дьявола!»
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    achievement: { story: EStoriesEn.Immortals, name: 'Sleeper' },
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 10,
    text:
      `
        Я начала метаться по квартире в поисках необходимых мне вещей для занятий. И, разумеется, подходящей одежды.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 11,
    wardrobe: { story: EStoriesEn.Immortals, personId: 'Hero', goTo: 12 },
    text: '',
    buttons: [
      {
        text: ''
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 12,
    text:
      `
        После переодевания я стремительно спустилась вниз. Времени завтракать не было, поэтому мне пришлось сразу выбежать на улицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    stats: [{ story: EStoriesEn.Immortals, category: 'Item', id: 'Money', value: 700 }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 13,
    text:
      `
        «Может мне поехать на такси? Так я точно не опоздаю и у меня не будет проблем в учебе. Или все-таки выбрать автобус? К тому же денег у меня совсем немного, нужно экономить для чего-то действительно важного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 14,
    text:
      `
        Но когда приедет моя карета — вот, что меня волнует». 
      `,
    buttons: [
      {
        text: 'Поехать на такси',
        goTo: 15
      },
      {
        text: 'Поехать на автобусе',
        goTo: 72
      }
    ],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 15,
    text:
      `
        Не долго думая, я заказала такси в приложении и через минуту уже ехала в сторону университета.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -200, category: 'Item', id: 'Money' },
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'GoTaxi' }
    ],
    achievement: { story: EStoriesEn.Immortals, name: 'Comfort' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 16,
    text:
  `
        Мне попался общительный водитель. Он все пытался что-то рассказать, задавал мне кучу вопросов, на которые спросонья не хотелось отвечать.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 17,
    text:
  `
        Я деликатно отказалась от общения, вставила наушники, сделала музыку погромче и закрыла глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 18,
    text:
  `
        Сон подступил незаметно, но от этого он был еще приятнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 19,
    text:
  `
        Из дремы меня вытащила вибрация телефона, пришло сообщение от Шерил — моей подруги детства, мы с ней вместе сколько я себя помню.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 20,
    text:
  `
        Она жаловалась, что ее приемный отец в очередной раз напился и угрожал сделать страшные вещи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 21,
    text:
  `
        Я давно советовала ей подать заявление в полицию, съехать от него, но некая привязанность удерживала ее в этом доме ужасов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    darkSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 22,
    text:
  `
        Что сказать, девушка была со странностями. Любила фантазировать, могла часами пропадать в своем выдуманном мире. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    darkSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 23,
    text:
  `
        Но все же, это тот человек, про которого я с уверенностью могу сказать «и в горе, и в радости, несмотря ни на что». 
      `,
    buttons: [
      {
        text: 'Я посочувствовала ей и нашла нужные слова поддержки',
        goTo: 24
      },
      {
        text: 'Я сказала Шерил быть решительнее',
        goTo: 26
      }],
    darkSilhouette: true,
    message: 'Не со всеми персонажами отношения выстраиваются благодаря положительным статам. Читайте внимательно подсказки и сюжет, чтобы выйти на нужный вам уровень взаимоотношений',
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 24,
    text:
  `
        Шерил скинула мне смайлик в виде сердечка и поблагодарила за то, что не даю ей унывать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    message: 'Шерил знает, что может полагаться на вас',
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 25,
    text:
  `
        Мы переписывались до самого моего приезда в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 26,
    text:
  `
        Осознав, что я устала терпеть ее нытье, я сказала Шерил прямо. Если она хочет изменить свою жизнь, то пусть прекращает жить в этом доме и возьмет себя в руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 27,
    text:
  `
        Ранимая душа подруги не оценила такой резкости. Она отправила мне плачущий смайлик и под предлогом, что у неё появились неотложные дела, прекратила переписку.  
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    message: 'Шерил считает, что вы не воспринимаете ее всерьез и не оказываете поддержки',
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Taxi.jpg')
  },

  {
    id: 29,
    text:
  `
        Я вышла из такси и спокойным шагом направилась в сторону входа. До начала пар оставалось около пятнадцати минут.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Item', id: 'Key' }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 30,
    text:
  `
        Университет, в котором я училась уже несколько лет, был одним из ведущих учебных заведений в нашем небольшом городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 31,
    text:
  `
        На его территории всегда было свежо и просторно: много ветвистых деревьев, аккуратно постриженный газон, скамейки, пользующиеся популярностью у прогульщиков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 32,
    text:
  `
        Порой, мы собирались на них с друзьями, чтобы обсудить прошедший день или повторить материал перед занятиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 33,
    text:
  `
        Но это было раньше — сейчас все стали слишком заняты, и время ценится иначе.      
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 34,
    text:
  `
        Вдруг, сзади послышались быстро приближающиеся шаги, переходящие на бег. Я уловила знакомый запыхавшийся, но воодушевленный женский голос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 35,
    text:
  `
        — $Имя Игрока$, привет! Еле догнала. Необычно встречать тебя до начала занятий, а не на второй паре, — с ухмылкой проговорила девушка. — Ну, что, успела закончить домашнее задание? 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 36,
    text:
  `
         Что-то во мне оборвалось, нарастало чувство тревоги.  Я начала лихорадочно копаться в рюкзаке, выбрасывая все вещи в руки своей подруги.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 37,
    text:
  `
         Опустошив всю сумку, я окончательно убедилась, что забыла работу дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 38,
    text:
  `
        «Если бы я только снова не уснула...» 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 39,
    text:
  `
        Обреченно запихивая вещи обратно в рюкзак, я проговорила:<p>— Профессор Нэйтан убьёт меня... Как же я могла так облажаться. Всю ночь сидела и писала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 40,
    text:
  `
        — У тебя было много времени и ты опять решила отложить работу до последнего?
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 41,
    text:
  `
        Я сделала мою фирменную грустную моську с щенячьими глазками, и Скарлетт ничего не оставалось, кроме как перестать читать мне нотации и пожалеть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 42,
    text:
  `
        — Ладно, уверена, что учитель войдет в твое положение, — Скарлетт приободряюще обняла меня. — Завтра сдашь.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 43,
    text:
  `
         Ее оптимизм не придал мне уверенности, что все закончится хорошо, так как профессор был довольно строг в отношении учебы. Мне оставалось только просить отсрочку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 44,
    text:
  `
        «И просить как можно убедительнее!»
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 45,
    text:
  `
        — Я тебя догоню. Мне нужно зайти в «тайную комнату». Займи мне место. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 46,
    text:
  `
        — Хорошо, $Имя Игрока$, — не сдерживая смех, сказала Скарлетт. — Не задерживайся! 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 47,
    text:
  `
        В уборной никого не было, поэтому я смогла спокойно воспользоваться зеркалом и привести себя в порядок. Мне была необходима передышка после сумбурного утра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 48,
    text:
  `
         Я поправила небрежные локоны и взглянула в свои глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 49,
    text:
  `
        «Нужно больше спать... Чертовы мешки под глазами!»
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 50,
    text:
  `
        Я подкрасила брови и ресницы. Мне больше нравилась естественная красота, поэтому косметика не была моей близкой подругой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 51,
    text:
  `
        Я еще немного поколдовала над собой и вышла в коридор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 52,
    text:
  `
        На пару я пришла вовремя и села рядом со Скарлетт. До начала занятий, она успела поведать мне немного о своих проблемах с мамой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 53,
    text:
  `
        У них не сходились интересы. Родные девушки не могли представить свою дочь в роли историка.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 54,
    text:
  `
        — Ты представляешь, $Имя Игрока$, я заявила, что хочу работать в архивах, а она все снова про свой бизнес. Плевать ей на мои желания! 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 55,
    text:
  `
        — А отец? — спросила я, пока раскладывала учебные принадлежности на парте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 56,
    text:
  `
        — Ушел рано, у него собеседование. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 57,
    text:
  `
        — Есть шансы, что он устроится на работу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 58,
    text:
  `
        — Не знаю. Хоть папа и всегда меня поддерживал, но сейчас он больше походит на зомби, чем на человека. Мама в конец достала его пилить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 59,
    text:
  `
        Я была мало посвящена в семейные проблемы подруги. Скарлетт была довольно закрытым человеком. А может она просто боялась показаться уязвимой. Мне же...
      `,
    buttons: [
      {
        text: 'Были понятны ее чувства',
        goTo: 60
      },
      {
        text: 'Было все равно',
        goTo: 62
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 60,
    text:
  `
        Семья — это важно, но каждый вправе жить и делать выбор, опираясь на свои желания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 61,
    text:
  `
        Понемногу, но Скарлетт открывалась мне и я хотела быть на ее стороне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    message: 'Скарлетт дорожит вашей дружбой',
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 62,
    text:
  `
        Каждый жил своей жизнью. Нужно было фокусироваться на своих проблемах, а не лезть в чужие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 63,
    text:
  `
        У Скарлетт была возможность не усложнять себе жизнь, она же выбрала иной путь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    message: 'Вы со Скарлетт не такие уж и близкие подруги',
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 65,
    text:
  `
         В лекционный зал вошел профессор Нэйтан. Гул, стоявший от болтовни студентов, сразу же стих. Вместо него появились звуки шуршания в рюкзаках и перелистывания страниц учебников. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 66,
    text:
  `
        Все были готовы к началу лекции. Это была одна из немногих пар, на которые учащиеся приходили с чувством заинтересованности.   
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 67,
    text:
  `
        Время пролетало мгновенно, в силу того, что профессор был необычайно талантлив и умел грамотно преподавать материал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 68,
    text:
  `
        — Давайте начнем, думаю, все, кто хотел присутствовать сегодня — уже пришли, — его голос звучал размеренно и спокойно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    message: 'Профессор рад, что никто не опоздал ',
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 69,
    text:
  `
        Нэйтан был одет в черный костюм: пиджак, рубашка, приталенные брюки — ничего лишнего. Он всегда выглядел соответствующе тому, на кого было приковано много внимания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 70,
    text:
  `
        Профессор всегда держал голову высоко, а спину прямо. Многие студентки не раз предпринимали попытки флирта, но преподаватель всегда держался холодно и отстраненно.   
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 71,
    text:
  `
        Гораздо важнее для него — передать знания и научить чему-то полезному. Нэйтан всегда подчеркивал важность учебы и негативно относился к невыполнению требований к занятиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 72,
    text:
  `
        Я решила терпеливо дождаться общественного транспорта.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'GoBus' }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 73,
    text:
  `
        «Буду надеяться, что мой сон стоил того, чтобы в очередной раз опоздать и получить выговор от профессора».
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 74,
    text:
  `
        Автобус приехал не сразу, но хотя бы полупустой. Я прошла в конец салона, чтобы никто не отвлекал меня от моих мыслей и заняла место около окна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    stats: [{ story: EStoriesEn.Immortals, value: -50, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 75,
    text:
  `
        Включив любимую музыку, я стала наблюдать за проносившимися скучными пейзажами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 76,
    text:
  `
        Стандартные дома, вечно куда-то торопящиеся люди, но под музыку все казалось не таким серым и обыденным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 77,
    text:
  `
        Мою поездку скрасила переписка с Шерил — подругой из соседнего дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 78,
    text:
  `
        Она жаловалась, что ее приемный отец в очередной раз напился и угрожал сделать страшные вещи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 79,
    text:
  `
        Я давно советовала ей подать заявление в полицию, съехать от него, но некая привязанность удерживала ее в этом доме ужасов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    darkSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 80,
    text:
  `
        Что сказать, девушка была со странностями. Любила фантазировать, могла часами пропадать в своем выдуманном мире.  
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    darkSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 81,
    text:
  `
        Но все же, это тот человек, про которого я с уверенностью могу сказать «и в горе, и в радости, несмотря ни на что». 
      `,
    buttons: [
      {
        text: 'Я посочувствовала ей и нашла нужные слова поддержки',
        goTo: 82
      },
      {
        text: 'Я сказала Шерил быть решительнее',
        goTo: 84
      }],
    darkSilhouette: true,
    message: 'Не со всеми персонажами отношения выстраиваются благодаря положительным статам. Читайте внимательно подсказки и сюжет, чтобы выйти на нужный вам уровень взаимоотношений',
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [{ story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 82,
    text:
  `
        Шерил скинула мне смайлик в виде сердечка и поблагодарила за то, что не даю ей унывать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    message: 'Шерил знает, что может полагаться на вас',
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 83,
    text:
  `
        Мы переписывались до самого моего приезда в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 84,
    text:
  `
        Осознав, что я устала терпеть ее нытье, я сказала Шерил прямо. Если она хочет изменить свою жизнь, то пусть прекращает жить в этом доме и возьмет себя в руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 85,
    text:
  `
        Ранимая душа подруги не оценила такой резкости. Она отправила мне плачущий смайлик и под предлогом, что у неё появились неотложные дела, прекратила переписку.  
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    message: 'Шерил считает, что вы не воспринимаете ее всерьез и не оказываете поддержки',
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 87,
    text:
  `
        Когда автобус подъехал к остановке, до начала пары оставалось пять минут. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Item', id: 'Key' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 88,
    text:
  `
        Университет, в котором я училась уже несколько лет, был одним из ведущих учебных заведений в нашем небольшом городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 89,
    text:
  `
        На его территории всегда было свежо и просторно: много ветвистых деревьев, аккуратно постриженный газон, скамейки, пользующиеся популярностью у прогульщиков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 90,
    text:
  `
        Порой, мы собирались на них с друзьями, чтобы обсудить прошедший день или повторить материал перед занятиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 91,
    text:
  `
        Я стала настраиваться на предстоящее занятие, как вдруг что-то во мне оборвалось, нарастало чувство тревоги.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 92,
    text:
  `
        Я начала лихорадочно копаться в рюкзаке, выбрасывая все вещи на соседнее сидение. Опустошив всю сумку, я окончательно убедилась, что забыла работу дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 93,
    text:
  `
        «Если бы я только снова не уснула...» 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 94,
    text:
  `
        Обреченно запихивая вещи обратно в рюкзак, я подумала:<p>«Профессор Нэйтан убьёт меня... Как же я могла так облажаться. Всю ночь ведь сидела и писала». 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Bus.jpg')
  },

  {
    id: 95,
    text:
  `
        Я быстро выбежала из транспорта, предварительно забежав в уборную. 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 96,
    text:
  `
        В уборной никого не было, поэтому я смогла спокойно воспользоваться зеркалом и привести себя в порядок. Мне была необходима передышка после сумбурного утра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 97,
    text:
  `
         Я поправила небрежные локоны и взглянула в свои глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 98,
    text:
  `
        «Нужно больше спать... Чертовы мешки под глазами!»
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 99,
    text:
  `
        Я подкрасила брови и ресницы. Мне больше нравилась естественная красота, поэтому косметика не была моей близкой подругой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 100,
    text:
  `
        Я еще немного поколдовала над собой и вышла в коридор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Toilet.jpg')
  },

  {
    id: 101,
    text:
  `
        Я опоздала на пару и вбежала в аудиторию во время увлекательного рассказа профессора Нэйтана.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 102,
    text:
  `
        Все обернулись на меня и я прочитала в их глазах недовольство.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 103,
    text:
  `
        Взгляд учителя мельком скользнул по мне, он знаком показал на свободное место рядом с моей подругой Скарлетт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 104,
    text:
  `
        Из-за опоздания, мне пришлось нагонять материал и в спешке переписывать конспект у одногруппницы.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 105,
    text:
  `
        Не было времени даже на перешептывание, так как профессор Нэйтан изредка бросал на меня строгий взгляд, чтобы удостовериться в том, что я действительно занимаюсь делом.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 106,
    text:
  `
        Среди студентов и других преподавателей у него была хорошая репутация для молодого профессора. И не зря, ведь это была одна из немногих пар, на которые учащиеся приходили с чувством заинтересованности.     
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 107,
    text:
  `
        Время пролетало мгновенно, в силу того, что профессор был необычайно талантлив и умел грамотно преподавать материал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 108,
    text:
  `
        — Давайте продолжим, думаю, все уже пришли, — его голос звучал размеренно, но недовольно.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    message: 'Профессор недоволен вашим опозданием',
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 109,
    text:
  `
        Нэйтан был одет в черный костюм: пиджак, рубашка, приталенные брюки — ничего лишнего. Он всегда выглядел соответствующе тому, на кого было приковано много внимания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 110,
    text:
  `
        Профессор всегда держал голову высоко, а спину прямо. Многие студентки не раз предпринимали попытки флирта, но преподаватель всегда держался холодно и отстраненно.   
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 111,
    text:
  `
        Гораздо важнее для него — передать знания и научить чему-то полезному. Нэйтан всегда подчеркивал важность учебы и негативно относился к невыполнению требований к занятиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 112,
    text:
  `
        Я не поддалась на это искушение, встала с кровати и начала собираться, вовремя вспомнив про домашнее задание к паре профессора Нэйтана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    stats: [{ story: EStoriesEn.Immortals, category: 'Choice', id: 'WakeUp', value: 1 }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    achievement: { story: EStoriesEn.Immortals, name: 'GoodGirl' },
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 113,
    text:
  `
        «Я почти его забыла. Моя успеваемость и так оставляет желать лучшего...»
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    stats: [{ story: EStoriesEn.Immortals, category: 'Item', id: 'Homework', value: 1 }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero_Room') }
  },

  {
    id: 114,
    text:
  `
        Когда последние приготовления были сделаны, я заглянула в ванную, чтобы привести себя в порядок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 115,
    text:
  `
        Я поправила небрежные локоны и взглянула в свои глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 116,
    text:
  `
        «Нужно больше спать... Чертовы мешки под глазами!»
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 117,
    text:
  `
        Я подкрасила брови и ресницы. Мне больше нравилась естественная красота, поэтому косметика не была моей близкой подругой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 118,
    text:
  `
        Я еще немного поколдовала над собой и выбрала подходящий наряд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 119,
    wardrobe: { story: EStoriesEn.Immortals, personId: 'Hero', goTo: 120 },
    text:
  `
      `,
    buttons: [
      {
        text: ''
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/House_Toilet.jpg')
  },

  {
    id: 120,
    text:
  `
        Я спустилась вниз, откуда раздавался чудесный аромат чего-то съестного. За столом сидел отец, который что-то нервно печатал в телефоне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    stats: [{ story: EStoriesEn.Immortals, category: 'Item', id: 'Money', value: 700 }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 121,
    text:
  `
        — Доброе утро, пап! — я нежно поцеловала его в щечку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 122,
    text:
  `
        — Привет, милая. Ты сегодня рано. <p>Отец выглядел сонным и расстроенным, но все равно улыбался мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 123,
    text:
  `
        — Все в порядке? — я решила спросить, хотя понимала, что он вряд ли скажет правду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 124,
    text:
  `
        — Конечно, не бери в голову. Будешь кушать? Мама не оставила нас голодными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 125,
    text:
  `
        «В последнее время он стал совсем отстраненным. Раньше мы могли часами проводить время вместе: играть в настольные игры, рубиться в приставку, гулять — а теперь для него, словно, перестали существовать все прелести жизни». 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 126,
    text:
  `
        «Почему же он не откроется мне? В глубине души я как будто бы знала причину, но не хотела этого признавать».
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 127,
    text:
  `
        — О, да! Она у нас трудяга, — сейчас мне лишь оставалось продолжить разговор в привычном русле.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 128,
    text:
  `
        Я решила покушать...
      `,
    buttons: [
      {
        text: 'Фруктовый салат',
        goTo: 129
      },
      {
        text: 'Бутерброды',
        goTo: 130
      },
      {
        text: 'Блины',
        goTo: 131
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 129,
    text:
  `
        Свежие фрукты в сочетании с йогуртом оказались очень питательными и вкусными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Fruit_Salad.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 130,
    text:
  `
        Старая классика. Хлеб, сыр и колбаса, что может быть проще и вкуснее?
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Butik.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 131,
    text:
  `
        Я подогрела несколько блинов в микроволновке. Они оказались с мясом.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Blini.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 133,
    text:
  `
        Во время трапезы, мы еще немного переговорили с отцом о мелочах связанных с бытом, а затем он предложил довести меня до университета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 134,
    text:
  `
        Я охотно согласилась, чтобы не ждать автобус и не тратить деньги на такси. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Kitchen.jpg')
  },

  {
    id: 135,
    text:
  `
        Всю дорогу мы молчали, наслаждаясь музыкой и окружающими видами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 136,
    text:
  `
        Мою поездку скрасила переписка с Шерил — подругой из соседнего дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 137,
    text:
  `
        Она жаловалась, что ее приемный отец в очередной раз напился и угрожал сделать страшные вещи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 138,
    text:
  `
        Я давно советовала ей подать заявление в полицию, съехать от него, но некая привязанность удерживала ее в этом доме ужасов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    darkSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 139,
    text:
  `
        Что сказать, девушка была со странностями. Любила фантазировать, могла часами пропадать в своем выдуманном мире.  
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    darkSilhouette: true,
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 140,
    text:
  `
        Но все же, это тот человек, про которого я с уверенностью могу сказать «и в горе, и в радости, несмотря ни на что». 
      `,
    buttons: [
      {
        text: 'Я посочувствовала ей и нашла нужные слова поддержки',
        goTo: 141
      },
      {
        text: 'Я сказала Шерил быть решительнее',
        goTo: 143
      }],
    darkSilhouette: true,
    message: 'Не со всеми персонажами отношения выстраиваются благодаря положительным статам. Читайте внимательно подсказки и сюжет, чтобы выйти на нужный вам уровень взаимоотношений',
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 141,
    text:
  `
        Шерил скинула мне смайлик в виде сердечка и поблагодарила за то, что не даю ей унывать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    message: 'Шерил знает, что может полагаться на вас',
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 142,
    text:
  `
        Мы переписывались до самого моего приезда в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 143,
    text:
  `
        Осознав, что я устала терпеть ее нытье, я сказала Шерил прямо. Если она хочет изменить свою жизнь, то пусть прекращает жить в этом доме и возьмет себя в руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 144,
    text:
  `
        Ранимая душа подруги не оценила такой резкости. Она отправила мне плачущий смайлик и под предлогом, что у неё появились неотложные дела, прекратила переписку.  
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    message: 'Шерил считает, что вы не воспринимаете ее всерьез и не оказываете поддержки',
    imageFront: require('../../../../Images/Immortals/Objects/Telephone.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Cheryl', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Father_Car.jpg')
  },

  {
    id: 146,
    text:
  `
        Поездка не заняла много времени, когда мы подъезжали, я еще раз поблагодарила папу и вышла из машины.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Item', id: 'Key' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 147,
    text:
  `
        Времени оставалось еще много, поэтому, выдохнув, я спокойным шагом направилась в сторону входа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 148,
    text:
  `
        Университет, в котором я училась уже несколько лет, был одним из ведущих учебных заведений в нашем небольшом городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 149,
    text:
  `
        На его территории всегда было свежо и просторно: много ветвистых деревьев, аккуратно постриженный газон, скамейки, пользующиеся популярностью у прогульщиков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 150,
    text:
  `
        Порой, мы собирались на них с друзьями, чтобы обсудить прошедший день или повторить материал перед занятиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 151,
    text:
  `
        Но это было раньше — сейчас все стали слишком заняты, и время ценится иначе.      
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University.jpg')
  },

  {
    id: 152,
    text:
  `
        Лекционный зал потихоньку заполнялся студентами. Я села на свободное место и скучающе открыла учебник, чтобы повторить материал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 153,
    text:
  `
        Я смогла запомнить: Вильгельма Рентгена, который совершил прорыв в медицине и открыл рентген, Александра Флеминга, изобретателя пенициллина, Бориса Розинга, создателя более ста двадцати схем и систем для телевизионных устройств.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 154,
    text:
  `
        Но вдруг я услышала знакомый воодушевленный женский голос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 155,
    text:
  `
        — $Имя Игрока$, привет! Необычно встречать тебя до начала занятий, а не на второй паре, — с ухмылкой проговорила девушка. — Ну, что, успела закончить домашнее задание?
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 156,
    text:
  `
        — Привет-привет, — я нежно обняла свою подругу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 157,
    text:
  `
        Я победоносно улыбнулась. <p>— Да! 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 158,
    text:
  `
        — Отлично, — она похлопала меня по плечу. — А то я думала, что опять придется давать тебе списывать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 159,
    text:
  `
        — Я не часто к этому прибегаю, ладно уж тебе...
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 160,
    text:
  `
        До начала занятий, она успела поведать мне немного о своих проблемах с мамой. У них не сходились интересы. Родные девушки не могли представить свою дочь в роли историка.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 161,
    text:
  `
        — Ты представляешь, $Имя Игрока$, я заявила, что хочу работать в архивах, а она все снова про свой бизнес. Плевать ей на мои желания! 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 162,
    text:
  `
        — А отец? — спросила я, пока раскладывала учебные принадлежности на парте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 163,
    text:
  `
        — Ушел рано, у него собеседование. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 164,
    text:
  `
        — Есть шансы, что он устроится на работу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 165,
    text:
  `
        — Не знаю. Хоть папа и всегда меня поддерживал, но сейчас он больше походит на зомби, чем на человека. Мама в конец достала его пилить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 166,
    text:
  `
        Я была мало посвящена в семейные проблемы подруги. Скарлетт была довольно закрытым человеком. А может она просто боялась показаться уязвимой. Мне же...
      `,
    buttons: [
      {
        text: 'Были понятны ее чувства',
        goTo: 167
      },
      {
        text: 'Было все равно',
        goTo: 169
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 167,
    text:
  `
        Семья — это важно, но каждый вправе жить  и делать выбор, опираясь на свои желания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 168,
    text:
  `
        Понемногу, но Скарлетт открывалась мне и я хотела быть на ее стороне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    message: 'Скарлетт дорожит вашей дружбой',
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 169,
    text:
  `
        Каждый жил своей жизнью. Нужно было фокусироваться на своих проблемах, а не лезть в чужие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 170,
    text:
  `
        У Скарлетт была возможность не усложнять себе жизнь, она же выбрала иной путь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    message: 'Вы со Скарлетт не такие уж и близкие подруги',
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 172,
    text:
  `
         В лекционный зал вошел профессор Нэйтан. Гул, стоявший от болтовни студентов, сразу же стих. Вместо него появились звуки шуршания в рюкзаках и перелистывания страниц учебников. 
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 173,
    text:
  `
        Все были готовы к началу лекции. Это была одна из немногих пар, на которые учащиеся приходили с чувством заинтересованности.   
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 174,
    text:
  `
        Время пролетало мгновенно, в силу того, что профессор был необычайно талантлив и умел грамотно преподавать материал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 175,
    text:
  `
        — Давайте начнем, думаю, все, кто хотел присутствовать сегодня — уже пришли, — его голос звучал размеренно и спокойно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    message: 'Профессор рад, что никто не опоздал ',
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 176,
    text:
  `
        Нэйтан был одет в черный костюм: пиджак, рубашка, приталенные брюки — ничего лишнего. Он всегда выглядел соответствующе тому, на кого было приковано много внимания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 177,
    text:
  `
        Профессор всегда держал голову высоко, а спину прямо. Многие студентки не раз предпринимали попытки флирта, но преподаватель всегда держался холодно и отстраненно.   
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 178,
    text:
  `
        Гораздо важнее для него — передать знания и научить чему-то полезному. Нэйтан всегда подчеркивал важность учебы и негативно относился к невыполнению требований к занятиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 180,
    text:
  `
        Профессор написал на доске мелом название сегодняшней лекции.<p><i>«Великие открытия человечества XIX - XX веков». 
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 181,
    text:
  `
        Он отряхнул руки и внимательно посмотрел на студентов.<p>— Попрошу вас сдать эссе, которое я задавал неделю назад. Передайте с задних рядов вперед. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: 3, category: 'Effect', id: 'Study' }
    ],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 179,
    text:
      `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 183,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Item', id: 'Homework' }) <= 0
        }
      },
      {
        goTo: 182,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Item', id: 'Homework' }) >= 1
        }
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 182,
    text:
  `
        Я передала свою работу вместе со всеми. Профессор удовлетворительно кивнул и перешел к основной теме занятия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    message: 'Ваша текущая успеваемость «4» ',
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Study' },
      { story: EStoriesEn.Immortals, value: -1, category: 'Item', id: 'Homework' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Neitan' }
    ],
    afterAll: () => {
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) > 4 && statsManager.change({ story: EStoriesEn.Immortals, value: -1, category: 'Effect', id: 'Study' })
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 183,
    text:
  `
        Я раскраснелась, так как была среди немногих, кто не сдал работу. Профессор недовольно покачал головой и перешел к основной теме занятия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    message: 'Ваша текущая успеваемость «3» ',
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 185,
    text:
  `
        Профессор рассказывал об удивительных гениях, чьи открытия сделали в свою эпоху прорыв, который оказал огромное влияние на современный мир. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 186
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 186,
    text:
  `
        Его лекция не была монологом, Нэйтан часто обращался к студентам и спрашивал их мнение по тому или иному вопросу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 187,
    text:
  `
        Преподаватель старался не только дать полезный материал, но и выступить в роли наставника, поделиться своим опытом и наблюдениями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 188,
    text:
  `
        Он упомянул, что все совершают ошибки, а также как ничтожна известность без настоящего рвения и знаний.  
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 189,
    text:
  `
        — Потенциал многих ученых смог полностью раскрыться только в информационный век. Не стоит гоняться за бессмысленной славой и уж тем более мечтать о легких деньгах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 190,
    text:
  `
        Я же...
      `,
    buttons: [
      {
        text: 'Продолжала слушать лекцию',
        goTo: 191
      },
      {
        text: 'Засматривалась на профессора',
        goTo: 193
      },
      {
        text: 'Разговаривала со Скарлетт',
        goTo: 195
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 191,
    text:
  `
        Профессор вел не нудную лекцию, а как будто бы пытался достучаться до каждого в этом зале. 
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Study' }],
    afterAll: () => {
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) > 4 && statsManager.change({ story: EStoriesEn.Immortals, value: -1, category: 'Effect', id: 'Study' })
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 192,
    text:
  `
        Хоть он и местами говорил очевидные вещи, но его харизма и обаяние заставляли вслушиваться в каждое слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 193,
    text:
  `
        Преподаватель казался мне интереснее, чем учеба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 194,
    text:
  `
        Его голубые глаза и сосредоточенный взгляд захватили все мое внимание. Я не отрываясь смотрела на Нэйтана, любуясь им. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 195,
    text:
  `
        Мне было гораздо интереснее обсудить с подругой последние сплетни, чем слушать лекцию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 196,
    text:
  `
        В конечном итоге, всегда можно у кого-нибудь переписать материал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 198,
    text:
  `
        Когда большая часть лекции была позади, профессор объявил:
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 199,
    text:
  `
        — Давайте, вы отвлечетесь от своих тетрадей или чем вы там занимались. Проведем небольшой устный опрос. Один вопрос каждому желающему, если ответите верно, поставлю плюсик к вашей оценке. Кто попробует рискнуть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 200,
    text:
  `
        Я колебалась. Не сказать, что я хорошо знала материал, но и шанс повысить успеваемость не хотелось упускать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 201,
    text:
  `
        И я решила: 
      `,
    buttons: [
      {
        text: 'Поднять руку',
        goTo: 202
      },
      {
        text: 'Не поднимать руку',
        goTo: 212
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 202,
    text:
  `
        «Была не была!»
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 203,
    text:
  `
        Я резко подняла руку, чем вызвала удивление Скарлетт. Нэйтан, напротив, улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 204,
    text:
  `
        «Наверное подумал, наконец-то, его непутевая студентка решила взяться за учебу». 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 205,
    text:
  `
        — $Имя Игрока$, скажите, кто изобрел пенициллин? 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 206,
    text:
  `
        «Это должно быть легко, вспоминай...»
      `,
    beforeBegin: () => {
      timer.set(7, () => { scenarioManager.beginScene(207) })
    },
    buttons: [
      {
        text: 'Вильгельм Рентген',
        goTo: 207
      },
      {
        text: 'Александр Флеминг',
        goTo: 209
      },
      {
        text: 'Борис Розинг',
        goTo: 210
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 207,
    beforeBegin: () => { timer.stop() },
    text:
  `
        Преподаватель разочарованно вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 208,
    text:
  `
        — Нет, это был Александр Флеминг. В 1928 году он обнаружил воздействие плесени на бактерии. И лишь к 1943-му лекарство стали широко использовать в медицинских учреждениях. Но ты все равно молодец, за смелость, я не буду снижать оценку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 209,
    beforeBegin: () => { timer.stop() },
    text:
  `
        — Отлично, лекцию ты слушала. И действительно, в 1928 году он обнаружил воздействие плесени на бактерии. И лишь к 1943-му лекарство стали широко использовать в медицинских учреждениях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Study' }],
    afterAll: () => {
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) > 4 && statsManager.change({ story: EStoriesEn.Immortals, value: -1, category: 'Effect', id: 'Study' })
    },
    achievement: { story: EStoriesEn.Immortals, name: 'RightAnswers' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 210,
    text:
  `
        Преподаватель разочарованно вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    beforeBegin: () => { timer.stop() },
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 211,
    text:
  `
        — Нет, это был Александр Флеминг. В 1928 году он обнаружил воздействие плесени на бактерии. И лишь к 1943-му лекарство стали широко использовать в медицинских учреждениях. Но ты все равно молодец, за смелость, я не буду снижать оценку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 212,
    text:
  `
        Несколько ребят попытали удачу, в том числе и Скарлетт. Вопросы были не из легких, и я даже облегченно вздохнула, радуясь, что решила не отвечать.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 214,
    text:
  `
        Лекция подходила к концу, когда я ощутила нарастающую боль в области виска. Моя рука невольно прикоснулась к лицу и я почувствовала что-то мокрое на руке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 215,
    text:
  `
        Это была кровь, которая, по всей видимости, струилась у меня из носа. Я неуверенно поднялась из-за парты, начала проходить между рядами, чтобы поскорее покинуть помещение. Перед глазами стало все расплываться.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  },

  {
    id: 216,
    text:
  `
        Последнее, что отложилось у меня в памяти — крепкие объятия. А затем, давящая темнота поглотила меня. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Immortals', 'Глава 1', 'Часть 2', '0')
        }
      }],
    beforeBegin: blackFlash,
    achievement: { story: EStoriesEn.Immortals, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Lection_Hall.jpg')
  }
])
