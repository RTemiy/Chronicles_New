import { saveEndProgress, scenarioManager, timer } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { firstChoiceMessage, inventoryMessage, previousSlideMessage } from '../../../../Utils/textConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.A, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        Холодные стены замка вот уже несколько столетий были пропитаны глубокой мрачной историей.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Media/Audio/A/Music/Gothic.mp3'),
    ambient: require('../../../../Media/Audio/A/Ambient/Fireplace.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 1,
    text:
      `
        Старинные гобелены вдоль стен, исхоженные ковровые дорожки, пыль на латунных доспехах — казалось, каждый предмет шептал о временах былой роскоши.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 2,
    text:
      `
        Хозяин этого места сидел в кресле неподвижно, руки замерли на подлокотниках. В его отстранённом взгляде ещё оставалась мягкость отголосков приятных воспоминаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 3,
    text:
      `
        — Мой господин, вы желаете вина?
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speakerR: 'Слуга',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 4,
    text:
      `
        — Да, будь так любезен.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 5,
    text:
      `
        Проводив взглядом слугу, скрывшегося за дверью, мужчина вдруг почувствовал лёгкий сквозняк, гуляющий по залу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Castle_Door_Sqeak.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 6,
    text:
      `
        Вместе с ним в комнату проник запах утренней свежести, резко контрастирующий с затхлостью замка.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 7,
    text:
      `
        — Прошу прощения за ожидание.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Slave_Steps.mp3'),
    speakerR: 'Слуга',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 8,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 9, image: require('../../../../Media/Images/A/Objects/Wine.png'), buttonText: 'Налить' },
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 9,
    text:
      `
        Благородный напиток едва коснулся губ, вызвав на лице мужчины улыбку.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Wine.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 10,
    text:
      `
        — Великолепно. В начале восемнадцатого века умели делать шедевры, не то, что сейчас.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 11,
    text:
      `
        — Позвольте не согласиться. Португальские современные вина очень даже ценятся на рынке.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speakerR: 'Слуга',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 12,
    text:
      `
        — Себастьян, это и близко не стояло с мастерами прошлого. Тогда люди вкладывали душу, искали решения. Сейчас всё производится с помощью бездушных машин.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 13,
    text:
      `
        — Помнишь небольшую деревушку во Франции? Где-то в регионе Бургундия. Кажется, ты тогда сомневался, стоит ли тратить время, но то вино оказалось неповторимым.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 14,
    text:
      `
        — Может быть и так. Но вы слишком категоричны к настоящему времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian_Puzzled.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 15,
    text:
      `
        — А что в нём хорошего?
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 16,
    text:
      `
        — Технологии заметно облегчают жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian_Puzzled.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 17,
    text:
      `
        Хозяин надменно прокомментировал высказывание коротким смешком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 18,
    text:
      `
        Себастьян знал, что сердце господина давно закрыто для всего нового, привязано лишь к застывшему во времени замку, ставшему его единственным пристанищем.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 19,
    text:
      `
        Тем временем дрова в камине практически догорели. Тени теряли чёткость, а отблески больше не скользили по металлическим доспехам.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 20,
    text:
      `
        — Лучше скажи, как продвигаются её поиски?
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 21,
    text:
      `
        Себастьян достал небольшой блокнот из кармана и зачитал написанное:
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 22,
    text:
      `
        — В ходе расследования мы обнаружили девочку, которая могла унаследовать силы Беатрис.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 23,
    text:
      `
        При упоминании имени пламя в камине дрогнуло и вытянулось вверх. По залу прокатилась волна ледяного холода.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Cold_Wave.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 24,
    text:
      `
        — Сейчас ей едва исполнилось десять лет. Никаких проявлений способностей не было обнаружено.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 25,
    text:
      `
        Себастьян подошёл к креслу и вложил в руки своего господина рисунок, выполненный карандашом.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 26,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 27, image: require('../../../../Media/Images/A/Objects/Sketch_Aurora.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 27,
    text:
      `
        Мужчина пристально разглядывал черты ребёнка.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 28,
    text:
      `
        — И почему вы решили, что это она?
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 29,
    text:
      `
        — Свидетельств рождения нет. Но точно известно: Беатрис провела последние годы жизни в этих краях.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 30,
    text:
      `
        — Девочка растёт в полной семье. Только вот положение у них незавидное, даже по нынешним меркам.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 31,
    text:
      `
        — Довольно скромный уклад. На грани бедности, ни о какой роскоши и речи быть не может.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 32,
    text:
      `
        Хозяин замка устало вздохнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 33,
    text:
      `
        — Если всё так, как ты говоришь, то её семья не примет подачек. Я хорошо знал Беатрис — она бы не доверила ребёнка кому попало.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 34,
    text:
      `
        — И любые попытки сблизиться ни к чему не приведут.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 35,
    text:
      `
        — Прошу простить, Хозяин. Один способ ваш покорный слуга знает. Он, конечно, жестокий, но… 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian_Puzzled.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 36,
    text:
      `
        — Мы можем просто выкрасть ребёнка.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian_Puzzled.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 37,
    text:
      `
        Красные глаза мужчины сверкнули в темноте, излучая неприкрытую злобу.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 38,
    text:
      `
        — Ребёнок должен жить обычную жизнь до совершеннолетия. Если мы вмешаемся в процесс взросления, силы Беатрис не проявятся.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 39,
    text:
      `
        — Таково условие. Чистая душа, живущая обычной человеческой жизнью.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 40,
    text:
      `
        — А когда придёт время — её потенциал будет безграничен.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 41,
    text:
      `
        Себастьян услужливо кивнул и отошёл в сторону, ожидая, когда его господин встанет с кресла.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 42,
    text:
      `
        — Куда вы направляетесь? Подготовить машину?
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speakerR: 'Себастьян',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Sebastian.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 43,
    text:
      `
        —  Нет, обойдусь своим ходом. Вмешиваться нельзя, но никто не запрещал наблюдать.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speakerL: 'Хозяин замка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 44,
    text:
      `
        На лице мужчины расцвела широкая улыбка, обнажившая острые клыки.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Castle_Room_Master.jpg')
  },

  {
    id: 45,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 46 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 46,
    text:
      `
        Сколько я себя помню, мир казался прекрасным и увлекательным. Даже несмотря на тяжёлые времена, выпавшие на долю нашей семьи, счастье и вера в лучшее перевешивали чашу весов.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    music: require('../../../../Media/Audio/A/Music/Daily.mp3'),
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 47,
    text:
      `
        «Так, где там мамина книга…»
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Smile.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 48,
    text:
      `
        Ещё с раннего возраста я умела читать. Пусть и не всегда понимала смысл строк так, как задумал автор.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 49,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 50, image: require('../../../../Media/Images/A/Objects/Book_Edgar.png'), buttonText: 'Читать' },
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 50,
    text:
      `
        — <i>Я стою на берегу,<p>Бурю взором стерегу.<p>И держу в руках своих<p>Горсть песчинок золотых.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    message: 'Эдгар По — «Сон во сне».',
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 51,
    text:
      `
        — <i>Как их бег мне задержать,<p>Как сильнее руки сжать?<p>Сохранится ль хоть одна,<p>Или все возьмёт волна?</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 52,
    text:
      `
        — <i>Или то, что зримо мне,<p>Всё есть только сон во сне?</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 53,
    text:
      `
        Стихотворение казалось грустным, загадочным.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 54,
    text:
      `
        «Словно автор сомневался в правильности происходящего».
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 55,
    text:
      `
        По крайней мере, так говорила мама, когда периодически читала отрывки своего любимого поэта.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 56,
    text:
      `
        Она часто обсуждала со мной и братом о самых разных вещах — от смысла прочитанных строк до красоты окружающего мира.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 57,
    text:
      `
        Я вытянула кулачок вперёд, представляя, как пытаюсь сжимать песчинки.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 58,
    text:
      `
        «И как можно долго держать в руках песок? Он же юркий, неприятный».
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 59,
    text:
      `
        «Неудивительно, что он так легко теряется».
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 60,
    text:
      `
        Отложив книгу в сторону, я взглянула на согревающее солнце.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 61,
    text:
      `
        «И зачем папа сказал надеть куртку, не так уж и холодно».
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 62,
    text:
      `
        Несколько детей бегали по площадке, пока я наслаждалась единением с собой и природой.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 63,
    text:
      `
        Но один ребёнок все же подошёл нарушить моё спокойствие. Он осторожно сел рядом на скамейку и стал любопытно смотреть.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 64,
    text:
      `
        — Почему ты одна?
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 65,
    text:
      `
        — Аврора, хватит тебе сидеть и грустить. Давай поиграем в прятки.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child_Smile.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 66,
    text:
      `
        Это был Артур — одноклассник, с которым мы любили проводить время вместе.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 67,
    text:
      `
        Я стеснялась много общаться с другими детьми и не всегда могла найти с ними общий язык, но с Артуром всё было иначе.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 68,
    text:
      `
        «Добрый, хороший. Стремится защитить от всего плохого».
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 69,
    text:
      `
        Мальчик опустил руку на моё плечо, ожидая услышать ответ на приглашение.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 70,
    text:
      `
        — Ты знаешь, я не очень умею играть…
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 71,
    text:
      `
        — Брось, всего один раунд!
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 72,
    text:
      `
        Я робко кивнула, чем вызвала улыбку на лице друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 73,
    text:
      `
        Когда все собрались, были обозначены правила. Вытянув жребий, оказалась той, кому предстояло прятаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 74,
    text:
      `
        «Обратный отсчёт пошёл, нужно решить, где затаиться».
      `,
    buttons: [
      {
        text: 'За машиной',
        goTo: 76
      },
      {
        text: 'За горкой',
        goTo: 117
      },
      {
        text: 'За скамейкой',
        goTo: 125
      },
      {
        text: 'За колонной',
        goTo: 132
      }],
    beforeBegin: () => {
      timer.set(12, () => { scenarioManager.beginScene(132) })
    },
    message: firstChoiceMessage,
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 76,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 77 },
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 77,
    text:
      `
        Я быстро побежала к ближайшей машине и с колотящимся сердцем спряталась, чтобы со стороны площадки меня не было видно.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 78,
    text:
      `
        «Надеюсь, хорошее место».
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 79,
    text:
      `
        Я услышала, как водящий объявил о начале игры. Неожиданно в моё укрытие забежал запыхавшийся Артур.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 80,
    text:
      `
        — Ой, не знал, что это место занято.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 81,
    text:
      `
        Он осмотрелся по сторонам и неловко почесал затылок.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 82,
    text:
      `
        — Могу выбрать другое, если тебе некомфортно.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 83,
    text:
      `
        — Тебе лучше…
      `,
    buttons: [
      {
        text: 'Уйти',
        goTo: 84
      },
      {
        text: 'Остаться',
        goTo: 101
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 84,
    text:
      `
        — Боюсь, так нас быстрее найдут.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 85,
    text:
      `
        На лице мальчика промелькнула досада, но он понимающе кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 86,
    text:
      `
        — Ты права.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 87,
    text:
      `
        После этих слов он поспешил занять другое укрытие, пожелав мне удачи.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 88,
    text:
      `
        «Глупая игра, почему сердце так колотится из-за страха быть пойманной?»
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 89,
    text:
      `
        Проходила минута за минутой. Вдруг я услышала приближающиеся шаги, но это был не водящий, а взрослая женщина, громко цокающая каблуками.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Cabli.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 90,
    text:
      `
        — Как же вы надоели со своими…
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 91,
    text:
      `
        Её взгляд вдруг стал пронзительным, когда она осмотрела меня с ног до головы.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 92,
    text:
      `
        — Милая девочка, что ты делаешь около моей машины?
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 93,
    text:
      `
        — Извините я…
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 94,
    text:
      `
        Меня одолела внутренняя дрожь. Разум подсказывал: нужно бежать.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 95,
    text:
      `
        — Нет-нет, понимаю. Желание выиграть важнее. Можешь залезть внутрь машины, так тебя точно никто не найдёт.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 96,
    text:
      `
        Я опешила от предложения и попятилась назад. В голове строгим голосом мамы пронеслось:
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 97,
    text:
      `
        «Не доверяй чужим людям».
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 98,
    text:
      `
        Страх сковал мысли, и, в страхе пятясь, я незаметно для себя вышла из укрытия, оказавшись пойманной в игре.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 99,
    text:
      `
        «Лучше так, чем связываться со странными личностями».
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 100,
    text:
      `
        Холодный взгляд женщины продолжал стоять перед глазами, заставляя сердце биться быстрее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    message: 'Вам не удалось победить в прятках. ',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 101,
    text:
      `
        — Игра уже началась. Не стоит рисковать быть пойманным.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    stats: [
      { story: EStoriesEn.A, value: 1, category: 'Choice', id: 'Stay' }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 102,
    text:
      `
        На лице мальчика засияла улыбка, он пристроился рядом со мной и стал настороженно прислушиваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 103,
    text:
      `
        Каждый раз при малейшем шорохе Артур поворачивался спиной к звуку, нависая надо мной и закрывая собой от опасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 104,
    text:
      `
        — Не дам нам проиграть. Что бы ни случилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child_Smile.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 105,
    text:
      `
        — Если вдруг что, беги. Я отвлеку их.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 106,
    text:
      `
        Храбрость юного мальчика вызвала у меня улыбку и разлившееся по груди тепло благодарности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 107,
    text:
      `
        Услышав едва различимый шорох, я обернулась, заметив водящего, который рассматривал укрытие под горкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 108,
    text:
      `
        — Он сейчас найдёт нас. Нужно срочно искать другое место.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 109,
    text:
      `
        — Ты молодец, Аврора. Есть шанс перебежать туда…
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 110,
    text:
      `
        В едином порыве мы с Артуром, держась за руки, рванули через дорогу в надежде, что в новом месте водящий нас не найдёт.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Car.jpg')
  },

  {
    id: 111,
    text:
      `
        Едва отдышавшись, мы затаили дыхание, ожидая результатов игры.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 112,
    text:
      `
        — Может, зря перебегали…
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 113,
    text:
      `
        — Тсс…
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 114,
    text:
      `
        Проходила минута за минутой. Мы боялись пошевелиться, прислушиваясь к каждому звуку. Но всё оставалось тихо и спокойно.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 115,
    text:
      `
        Вскоре игра закончилась, а я и Артур остались в ней единственными победителями.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    message: 'Вам удалось победить в прятках.',
    achievement: { story: EStoriesEn.A, name: 'SmallVictory' },
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 117,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 118 },
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 118,
    text:
      `
        Я решила схитрить, спрятавшись на довольно видном месте, скрываясь за пластиковой конструкцией.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Slide.jpg')
  },

  {
    id: 119,
    text:
      `
        «Надеюсь, хорошее место».
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Slide.jpg')
  },

  {
    id: 120,
    text:
      `
        Я услышала, как водящий объявил о начале игры, и с замиранием сердца застыла, ожидая результата своего выбора.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Slide.jpg')
  },

  {
    id: 121,
    text:
      `
        Всё складывалось удачно, пока неизвестный мальчик не увидел меня. Он начал тыкать в сторону горки и обиженно громко спрашивать у мамы: почему какой-то девочке можно тут лазать, а ему нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Slide.jpg')
  },

  {
    id: 122,
    text:
      `
        Шум привлёк внимание водящего, и я была найдена.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Slide.jpg')
  },

  {
    id: 123,
    text:
      `
        «Хитрость не удалась».
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    message: 'Вам не удалось победить в прятках.',
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Slide.jpg')
  },

  {
    id: 125,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 126 },
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 126,
    text:
      `
        В панике, я не придумала ничего лучше, чем спрятаться за довольно просвечивающейся конструкцией.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Bench.jpg')
  },

  {
    id: 127,
    text:
      `
        «Надеюсь, хорошее место».
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Bench.jpg')
  },

  {
    id: 128,
    text:
      `
        Я услышала, как водящий объявил о начале игры, и с замиранием сердца застыла, ожидая результата своего выбора.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Bench.jpg')
  },

  {
    id: 129,
    text:
      `
        Но уже через минуту водящий, окинув взглядом площадку, заметил моё ненадёжное укрытие.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Bench.jpg')
  },

  {
    id: 130,
    text:
      `
        «В следующий раз надо стараться лучше».
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    message: 'Вам не удалось победить в прятках.',
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Bench.jpg')
  },

  {
    id: 132,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => { timer.stop() },
    interruptiveFrame: { goTo: 133 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 133,
    text:
      `
        Я решила убежать немного дальше детской площадки и спрятаться около жилого дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 134,
    text:
      `
        «Надеюсь, хорошее место».
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 135,
    text:
      `
        Я услышала, как водящий объявил о начале игры, и с замиранием сердца застыла, ожидая результата своего выбора.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 136,
    text:
      `
        Проходила минута за минутой, но моё укрытие оставалось незамеченным.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 137,
    text:
      `
        «Неужели повезло?»
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 138,
    text:
      `
        Вдруг я услышала приближающиеся шаги, но это был не водящий, а взрослая женщина, громко цокающая каблуками.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Cabli.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 139,
    text:
      `
        Она что-то бормотала себе под нос, раздражающе всматриваясь вокруг.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 140,
    text:
      `
        Когда её взгляд зацепился за мою фигуру, женщина неожиданно улыбнулась и мягко произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 141,
    text:
      `
        — Ты потерялась, девочка? Может, нужна помощь?
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 142,
    text:
      `
        — Нет, всё в порядке.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 143,
    text:
      `
        Меня одолела внутренняя дрожь. Разум подсказывал: нужно бежать.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 144,
    text:
      `
        — Где твои родители? Здесь рядом моя машина, мы могли бы позвонить…
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 145,
    text:
      `
        В отдалении раздались крики ребят о завершении игры. Судорожно мотая головой, я попятилась к площадке, поспешив заверить женщину, что её помощь не требуется.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 146,
    text:
      `
        «Нужно быстрее вернуться к остальным».
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    message: 'Вам удалось победить в прятках.',
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    achievement: { story: EStoriesEn.A, name: 'SmallVictory' },
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground_Column.jpg')
  },

  {
    id: 147,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 148 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 148,
    text:
      `
        После занимательных игр площадка опустела. Только одинокие качели слегка покачивались на ветру, издавая жалобный скрип. Со мной остался Артур.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Metal_Sqeak.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 149,
    text:
      `
        — Давай я провожу тебя до дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child_Smile.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 150,
    text:
      `
        Его забота тронула меня, и на лице сама собой появилась улыбка.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 151,
    text:
      `
        Но нашим планам не суждено было сбыться. К скамейке быстрыми шагами приближалась женщина, которая с опаской озиралась по сторонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 152,
    text:
      `
        — Мама, что ты тут делаешь? Я же говорил, буду не поздно.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 153,
    text:
      `
        — Сынок, извини, нет времени. Нам нужно срочно уехать.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speakerR: 'Мама Артура',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthurs_Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 154,
    text:
      `
        Глаза ребёнка расширились от удивления.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 155,
    text:
      `
        — Куда? Что случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 156,
    text:
      `
        Я видела искреннее непонимание на лице друга. Сердце сжалось от волнения и тоски.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 157,
    text:
      `
        Женщина беспокойно переминалась с ноги на ногу, будто была готова сорваться с площадки в любой момент.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 158,
    text:
      `
        — Нет времени объяснять. Поговорим в дороге.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speakerR: 'Мама Артура',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthurs_Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 159,
    text:
      `
        Артур перевёл взгляд на меня и уверенным тоном сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 160,
    text:
      `
        — Всё в порядке. Мы обязательно ещё поговорим. Раз не получилось тебя проводить, то будь осторожна по дороге домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speakerR: 'Артур',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Arthur_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 161,
    text:
      `
        Я робко кивнула. Мне хотелось верить в искренность этих слов. Друг всегда исполнял обещания.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 162,
    text:
      `
        В глазах мамы Артура читалось презрение, едва она посмотрела на меня. Но женщина быстро отвела взгляд, сосредотачиваясь на сыне.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 163,
    text:
      `
        Они поспешили покинуть площадку. Я последовала их примеру, двигаясь в сторону дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Playground.jpg')
  },

  {
    id: 164,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 165 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 165,
    text:
      `
        Мне было не по себе от случившегося.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 166,
    text:
      `
        «Наверное, что-то случилось, раз она так его торопила…»
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 167,
    text:
      `
        «Почему не покидает ощущение, будто это были прощальные слова, и мы больше не увидимся?»
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 168,
    text:
      `
        «Надеюсь, всё будет хорошо, и завтра Артур придёт в школу».
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 169,
    text:
      `
        Я шла быстрым шагом, сердце предательски колотилось от малейшего шороха вокруг.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 170,
    text:
      `
        Неожиданно передо мной возникла фигура странной женщины, которая хищно всматривалась в моё лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    music: require('../../../../Media/Audio/A/Music/Tension.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 171,
    text:
      `
        От неё веяло холодом. Что странно, ведь летнее солнце продолжало по-вечернему греть.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 172,
    text:
      `
        — Я пристально наблюдала за тобой, девочка.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 173,
    text:
      `
        Незнакомка резко дернулась ко мне с отчетливым звуком втягиваемого воздуха.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 174,
    text:
      `
        — А вблизи ты ещё лучше пахнешь. Да, ошибки быть не может. Ты её дитя. Ты — дитя пророчества. 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 175,
    text:
      `
        Пугающий до дрожи в коленях и мороза вдоль позвонков смех отразился от асфальта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Woman_Laugh.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 176,
    text:
      `
        Женщина со страшной, но выразительной, счастливой улыбкой снова взглянула на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 177,
    text:
      `
        Колени задрожали, а тело будто окаменело. Страх парализовал, лишив способности соображать.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 178,
    text:
      `
        — Я не понимаю…
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 179,
    text:
      `
        — О, разумеется. Ведь живёшь в неведении собственной судьбы.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 180,
    text:
      `
        — Позволь показать тебе истину.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 181,
    text:
      `
        Она протянула свою ладонь. В этом жесте не было ничего дружелюбного, как на первый взгляд могло показаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 182,
    text:
      `
        Инстинкты кричали о недоверии, тело само ринулось прочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 183,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/A/Cutscenes/Escape.mp4'), goTo: 184 },
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 184,
    text:
      `
        Но маленькие ноги не могли обогнать взрослую женщину — она настигла меня в два шага.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 185,
    text:
      `
        — Пустите! 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 186,
    text:
      `
        Обидчица не спешила исполнять просьбу. Она наслаждалась моментом, триумфом, держа крошечное дрожащее тело в цепких холодных руках.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 187,
    text:
      `
        — Он будет доволен.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 188,
    text:
      `
        Я совершенно не понимала, как действовать в такой ситуации. Тщетно пыталась пихать её локтями и ногами.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 189,
    text:
      `
        «Как в страшных сказках. Она унесёт меня злым людям, и я больше никогда не увижу свою семью».
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 190,
    text:
      `
        Вокруг не было ни души. Город словно молча наблюдал за происходящим, подстраиваясь под неблагоприятные обстоятельства.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 191,
    text:
      `
        «Неужели это конец?»
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 192,
    text:
      `
        — <i>Не бойся, ей тебя не одолеть.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    ambient: require('../../../../Media/Audio/A/Ambient/Strange_Whisper.mp3'),
    speakerR: 'Загадочный голос',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 193,
    text:
      `
        Женский шёпот звучал внутри сознания, словно эхо.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 194,
    text:
      `
        «Кто здесь?»
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Scared.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 195,
    text:
      `
        Я видела перед собой только лицо своей похитительницы, но в округе кроме нас никого не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 196,
    text:
      `
        — <i>Услышь мой зов, раскрой потенциал. </i> 
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speakerR: 'Загадочный голос',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 197,
    text:
      `
        «Что делать?»
      `,
    buttons: [
      {
        text: 'Подчиниться',
        goTo: 198
      },
      {
        text: 'Воспротивиться',
        goTo: 209
      }],
    message: 'На протяжении истории Аврора может развивать силу и быть ближе к детям ночи с помощью стата «Луна», либо оставаться на человеческой, светлой стороне благодаря «Солнцу».',
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 198,
    text:
      `
        — <i>Вот так… Твоё тело ещё совсем юно. Но ты можешь за себя постоять. </i>
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speakerR: 'Загадочный голос',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 199,
    text:
      `
        Словно несколько электрических импульсов поразили тело, оставляя неприятные покалывания.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 200,
    text:
      `
        — <i>Обратись к тёмной стороне души. Сломай её волю. </i>
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speakerR: 'Загадочный голос',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 201,
    text:
      `
        Голос звучал уверенно, чётко. Я внимала каждому слову, стараясь выполнить сказанное.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 202,
    text:
      `
        «Чувствую… То, о чём она говорила».
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Red.png'),
    stats: [
      { story: EStoriesEn.A, value: +1, category: 'Effect', id: 'Moon' }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 203,
    text:
      `
        Рука, будто ведомая чужой волей, потянулась к виску похитительницы. Мои губы раскрылись и медленно произнесли:
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 204,
    text:
      `
        — Остановись.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Red.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 205,
    text:
      `
        Женщина рваным движением выпрямилась, застывая, будто её приковали невидимыми цепями.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 206,
    text:
      `
        — Поставь меня на землю.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Red.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 207,
    text:
      `
        Она продолжала повиноваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 208,
    text:
      `
        Но внезапно мой контроль перестал работать, я рухнула на ладони, давясь от рвотного позыва.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 209,
    text:
      `
        — <i>Дитя, к чему это? Неужели ты не чувствуешь, что я хочу помочь тебе?</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speakerR: 'Загадочный голос',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 210,
    text:
      `
        Было сложно поверить, что странный голос в моей голове может быть другом.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 211,
    text:
      `
        «Я не могу рисковать».
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 212,
    text:
      `
        Вместо этого попыталась прислушаться к иным ощущениям.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 213,
    text:
      `
        Голос перестал звучать, когда я неожиданно почувствовала разливающееся тепло, проходящее через каждую клеточку тела.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 214,
    text:
      `
        «Похоже на мамино прикосновение…»
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    effect: 'Желтое сияние',
    stats: [
      { story: EStoriesEn.A, value: +1, category: 'Effect', id: 'Sun' }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 215,
    text:
      `
        Оно разгоралось, окутывало, даруя чувство безопасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 216,
    text:
      `
        Из-за яркого свечения похитительница остановилась и резким движением отбросила меня на землю.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 217,
    text:
      `
        Но сияние угасло так же внезапно, как и появилось. Я рухнула на ладони, давясь от рвотного позыва.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 218,
    text:
      `
        Женщина злобно оскалилась, мельком я заметила странной формы зубы.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    message: inventoryMessage,
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 219,
    text:
      `
        — Мелкая дрянь, твои фокусы не пройдут.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 220,
    text:
      `
        Она схватила меня за горло, медленно сдавливая.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    effect: 'Красная вспышка',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 221,
    text:
      `
        — Без сознания будет проще транспортировать.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets.jpg')
  },

  {
    id: 222,
    text:
      `
        Мои маленькие ручки безжизненно повисли. Глаза видели размытые очертания окружения. И я сдалась, принимая жестокую судьбу.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 223,
    text:
      `
        — Хрупкое дитя, не бойся. Кошмар позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 224,
    text:
      `
        Резким движением я оказалась укрыта чьими-то большими, сильными руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 225,
    text:
      `
        — Я был уверен, что всех вас перебил. А вы лезете, как крысы, трогая её наследие.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 226,
    text:
      `
        — Не смог стать королём, теперь ищешь лазейку. Кто из нас тут жалкий?
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 227,
    text:
      `
        Но державший меня в руках мужчина даже не шелохнулся. Я чувствовала уверенность, исходящую от его массивной фигуры.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 228,
    text:
      `
        Резкий, сухой щелчок пальцев, словно удар хлыста, заставил похитительницу закричать.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    simple: require('../../../../Media/Audio/A/Sounds/Fingers_Snap.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 229,
    text:
      `
        — Ты будешь гореть в Аду. Вместе со всеми нами!
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speakerR: 'Женщина',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Strange_Lady.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 230,
    text:
      `
        Меня била дрожь. Тело практически не слушалось, и я слабо понимала происходящее.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 231,
    text:
      `
        Он нёс моё безвольное тело в неизвестном направлении, бормоча себе под нос:
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 232,
    text:
      `
        — Ещё слишком рано. Нельзя оставлять ей такие воспоминания.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/City_Streets_Blur.jpg')
  },

  {
    id: 233,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 234 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 234,
    text:
      `
        Я почувствовала знакомый уютный запах.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 235,
    text:
      `
        «Кажется, дома…»
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Eyes.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 236,
    text:
      `
        — Что ты сделал с моей дочерью, отродье?
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 237,
    text:
      `
        Рука мужчины чуть дрогнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 238,
    text:
      `
        «Он испугался? Не боялся похитительницы, но почему тогда при виде мамы напрягся?»
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child_Eyes.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 239,
    text:
      `
        — Так ты всё же жива… Я защитил её от опасности, которая могла забрать жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 240,
    text:
      `
        Мама забрала меня с чужих рук и прижала к сердцу.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 241,
    text:
      `
        — Этого не должно было произойти так рано.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 242,
    text:
      `
        — Нет смысла искать виноватых или праведных. Позволь я сотру болезненные воспоминания.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 243,
    text:
      `
        Мужчина стал подходить ближе, но мама попятилась назад.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 244,
    text:
      `
        — Ты сама знаешь, где будет лучше укрыться.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 245,
    text:
      `
        — Я слышал про трагичные события на маяке и буду помогать, обеспечивать её безопасность.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 246,
    text:
      `
        Мама громко фыркнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 247,
    text:
      `
        — Обойдёмся без твоей помощи.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 248,
    text:
      `
        — Ты слаба и одинока в своей борьбе. К чему эта гордость?
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 249,
    text:
      `
        — Потому что свет моей семьи сильнее тьмы.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 250,
    text:
      `
        — Делай, что должен, и убирайся из нашего дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 251,
    text:
      `
        Незнакомец подошел, своей холодной ладонью коснулся щеки, окутывая неприятные события непроглядной темной пеленой.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 252,
    text:
      `
        — До скорого, Аврора.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speakerR: 'Неизвестный',
    imageBack: require('../../../../Media/Images/A/Backgrounds/Home_Inside_Blurred.jpg')
  },

  {
    id: 253,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 254 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 254,
    text:
      `
        Я открыла глаза, когда машина отца остановилась на красном сигнале светофора.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    music: require('../../../../Media/Audio/A/Music/Daily.mp3'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 255,
    text:
      `
        Вокруг были сплошные леса и длинная дорога, которая, казалось, никогда не кончится.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 256,
    text:
      `
        — Аврора, долго же ты спала! Как себя чувствуешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 257,
    text:
      `
        Немного болела голова, но я не стала говорить правду. Вместо этого обеспокоенно посмотрела на маму.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 258,
    text:
      `
        — Всё хорошо. Но куда мы едем?
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 259,
    text:
      `
        Мама тепло улыбнулась, сохраняя спокойствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 260,
    text:
      `
        — Что последнее ты помнишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 261,
    text:
      `
        Я задумалась на мгновение.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 262,
    text:
      `
        — Мы играли с ребятами в прятки, затем пришла мама Артура и сказала, что им надо срочно уехать.
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 263,
    text:
      `
        На лице мамы отразилось сочувствие. Она погладила меня по голове и произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 264,
    text:
      `
        — Солнышко, ты упала, потеряла сознание. Врач осмотрел тебя и сказал, что нужен покой.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 265,
    text:
      `
        — Но ты же знаешь, у папы есть проблемы с поиском работы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 266,
    text:
      `
        — И сейчас подвернулся шанс, который нельзя было упускать.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 267,
    text:
      `
        — Мы давно думали о переезде. Эта возможность начать всё с чистого листа, отдохнуть от городской суеты.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Mom.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 268,
    text:
      `
        Я посмотрела вокруг. Моя брат Ян сидел с хмурым выражением лица, смотря в окно.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 269,
    text:
      `
        «Кажется, он не очень рад такому решению».
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 270,
    text:
      `
        Отец внимательно вёл машину, напевая задорную мелодию.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 271,
    text:
      `
        — Мы едем в замечательное место. Вам там обязательно понравится.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/A/Persons/Dad.png'),
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 272,
    text:
      `
        Дорога занимала приличное количество времени. Не хотелось ни о чём думать. Я прижималась к маме, стараясь унять волнение.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 273,
    text:
      `
        Когда машина остановилась, сердце замерло при виде восхитительного пейзажа.
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 274,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/A/Cutscenes/Lighthouse.mp4'), goTo: 275 },
    imageBack: require('../../../../Media/Images/A/Backgrounds/Car_Dad.jpg')
  },

  {
    id: 275,
    text:
      `
        «Я дома?»
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('A', 'Глава 1', 'Часть 1', '0')
        }
      }],
    speakerL: 'Аврора',
    fullscreenObjectL: require('../../../../Media/Images/A/Persons/Aurora_Child.png'),
    achievement: { story: EStoriesEn.A, name: 'PrologueCompleted' },
    imageBack: require('../../../../Media/Images/A/Backgrounds/Lighthouse.jpg')
  }
])
