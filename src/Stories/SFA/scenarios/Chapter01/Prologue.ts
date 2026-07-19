import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { askForInput } from '../../../../Components/TextInput/TextInput'
import { saveData } from '../../../../Functions/localStorageManager'
import { firstChoiceMessage, inventoryMessage, previousSlideMessage } from '../../../../Utils/textConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.SFA, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        Солнечный свет мягко пробивался сквозь полупрозрачные шторы, ложась золотистыми полосами на ковер и белоснежные простыни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Media/Audio/SFA/Music/Theme_Morning.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 1,
    text:
      `
        Воздух в комнате был прохладным и наполненным тонким ароматом лилий с едва уловимыми нотками благовоний.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 2,
    text:
      `
        Я медленно встала с кровати, слегка покачиваясь — отголоски сна все еще цеплялись за сознание, но потоки свежего воздуха постепенно проясняли мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 3,
    text:
      '',
    buttons: [
      {
        text: '',
        func: () => {
          askForInput('Взгляд зацепился за собственный портрет, где внизу красовалось имя.', 'Эвелин', (value) => {
            scenarioManager.beginScene(4)
            saveData([EStoriesEn.SFA, 'Name'], [value])
          })
        }
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 4,
    text:
      `
        «Очередное прекрасное утро, полное света и надежд». 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
//  speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 5,
    text:
      `
        Не до конца отойдя от пробуждения, я неторопливо сделала несколько шагов от кровати к маленькому алтарю, расположившемуся на небольшом столике в углу комнаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 6,
    text:
      `
        — Да благословят Небеса мою семью, даруют им здоровье и процветание.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 7,
    text:
      `
        Молитва была привычным ритуалом веры в справедливый мировой порядок.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 8,
    text:
      `
        Подняв руку, я залюбовалась тем, как солнечные зайчики играют на тончайшем кружеве сорочки. И сейчас не было сомнений в том, что:
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 9,
    text:
      `
        «Весь этот мир принадлежал мне по праву рождения».
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 10,
    text:
      `
        Я росла в роскоши, укутанная в заботу родителей. Наша семья занимала почетное место в Совете Серебряного Града — оплоте чистоты, справедливости и векового порядка.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 11,
    text:
      `
        Я подошла к высокому стрельчатому окну, распахивая створки. В лицо ударил прохладный ветер.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Open_Window.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 12,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    parallax: 'left',
    interruptiveFrame: { goTo: 13 },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 13,
    text:
      `
        Отсюда, с вершины холма, где располагалось наше фамильное поместье, открывался захватывающий вид на Серебряный Град. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 14,
    text:
      `
        Белокаменные дворцы с высокими шпилями уходили высоко в лазурное небо, а золоченые купола храмов слепили своим блеском.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 15,
    text:
      `
        Внизу раскинулись ухоженные сады, площади с фонтанами и широкие аллеи, по которым неспешно прогуливались чистокровные ангелы — высшее общество, не ведающее тревог.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 16,
    text:
      `
        «Серебряный град... Обитель Ангелов, где каждый шаг выверен правилами этикета, а благородство считается главным законом». 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 17,
    text:
      `
        «Еще с детства нам говорили: мы — хранители мира и порядка на этих землях».
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 18,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 19 },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 19,
    text:
      `
        Мой взгляд невольно устремился к самому горизонту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 20,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    parallax: 'right',
    interruptiveFrame: { goTo: 21 },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 21,
    text:
      `
        Туда, где за грядой серых скал небо становилось тяжелым, багрово-черным, словно налитым запекшейся кровью.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 22,
    text:
      `
        «Далеко за великим каньоном и непрочным пактом о мире располагалась Пылающая Цитадель — логово демонов». 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 23,
    text:
      `
        «Мир пороков, лицемерия и жестокости, о котором благородной леди вроде меня не пристало даже думать».
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 24,
    text:
      `
        По спине пробежал легкий холодок, пронизавший все тело до кончиков пальцев.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 25,
    text:
      `
        Между нашими дворами шла холодная война, скрытая за блеском балов, масок и лицемерных улыбок дипломатов. Но здесь, под защитой отца, эта угроза казалась мне лишь далекой сказкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 26,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 27 },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 27,
    text:
      `
        «Зачем забивать себе голову политикой и чужими интригами, когда сегодня такой особенный день? День, когда моя жизнь изменится навсегда».
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/World.jpg')
  },

  {
    id: 28,
    text:
      `
        Я отошла от окна и повернулась к большому зеркалу в золотой раме. Из отражения на меня смотрела юная, хрупкая девушка с гордо вскинутой головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 29,
    text:
      `
        «Сегодня вечером во дворце состоится великий прием. Отец намекнул, что Регент Люциан лично объявит о моей помолвке с Кастиэлем. Моим верным, благородным рыцарем...»
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Embarassed.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 30,
    text:
      `
        Сердце сладко сжалось при мысли о женихе. Мы знали друг друга с самого детства — еще тогда, когда бегали по садам поместья, смеясь и строя планы на будущее.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 31,
    text:
      `
        Моя детская влюбленность со временем переросла в глубокое, чистое чувство, в котором нежность переплеталась с уважением. Он был моей опорой, моей защитой.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    message: firstChoiceMessage,
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 32,
    text:
      `
        И что мне хочется сделать?
      `,
    buttons: [
      {
        text: 'Поддаться мечтаниям',
        goTo: 33
      },
      {
        text: 'Сохранить аристократическую сдержанность',
        goTo: 36
      }],
    message: 'По ходу повествования вы можете определить характер главной героини. С помощью стата «Смирение» она более тихая, расчетливая. «Гордыня» будет показывать ее строгость и бунтарскую натуру.',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 33,
    text:
      `
        «Я стану его женой... Мы будем править нашим поместьем, устраивать самые пышные балы, а его любовь убережет меня от любых невзгод».
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Embarassed.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Humility' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 34,
    text:
      `
        Я с улыбкой прижала ладони к груди, чувствуя, как внутри разливается приятное тепло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 35,
    text:
      `
        «Жду не дождусь, когда увижу его прекрасное лицо, почувствую объятия».
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Embarassed.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 36,
    text:
      `
        «Этот союз укрепит положение нашей семьи в Совете». 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Pride' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 37,
    text:
      `
        «Кастиэль — блестящий офицер, к мнению которого нередко прислушиваются. Вместе мы станем одной из самых влиятельных пар Серебряного Града. Я буду достойной леди для него».
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 38,
    text:
      `
        Я расправила плечи и строго посмотрела на свое отражение. Моя любовь была глубокой, но гордость и осознание долга перед родом всегда шли впереди эмоций.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 39,
    text:
      `
        Тихий, деликатный стук прервал размышления. В комнату заглянула пожилая служанка, держа в руках поднос: на нем лежали свежие фрукты и стоял кувшин с прохладным нектаром.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    message: inventoryMessage,
    simple: require('../../../../Media/Audio/SFA/Sounds/Door_Knock.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 40,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 41, image: require('../../../../Media/Images/SFA/Objects/Fresh_Fruit.png'), buttonText: 'Взять' },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 41,
    text:
      `
        — Доброе утро, леди $Имя Игрока$. Ваш отец просил передать, что ждет вас внизу, в малом обеденном зале. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 42,
    text:
      `
        — И... молодой господин Кастиэль уже прибыл. Он будет ждать вас в саду после завтрака.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 43,
    text:
      `
        — Спасибо, Сильвия. Передай отцу, что я сейчас спущусь. И приготовь мое любимое прогулочное платье. То, что из нежно-зеленого шелка.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 44,
    text:
      `
        Служанка поклонилась и отправилась выполнять поручение. Я проводила ее взглядом, чувствуя, как легкое волнение перед грядущим вечером начинает нарастать.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 45,
    text:
      `
        «Интересно, Кастиэль также переживает?»
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Thinking.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 46,
    text:
      `
        «Хотя, вспоминая, как он сдавал экзамены и проходил отборочные поединки, чтобы заслужить свой титул… Должно быть его сердце сейчас бьется неровно от волнения».
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Thinking.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 47,
    text:
      `
        Неожиданно Сильвия, проходя мимо стола, неловко задела стопку тяжелых книг. Они с глухим стуком посыпались на пол.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Books_Falling.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 48,
    text:
      `
        Ее испуганный, дрожащий взгляд тут же скользнул по моему лицу. Служанка побледнела.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 49,
    text:
      `
        — Простите меня, моя госпожа! Какая оплошность... Я сейчас же все приберу!
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid_Afraid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 50,
    text:
      `
        Я знала Сильвию еще с самого рождения. Она всегда безупречно выполняла обязанности и искренне любила нашу семью. Однако возраст все чаще давал о себе знать.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 51,
    text:
      `
        «Сильвия уже слишком стара, чтобы так много работать. Стоит ли мне указать ей на это?»
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 52,
    text:
      `
        «Как благородная леди должна отреагировать на ошибку прислуги?»
      `,
    buttons: [
      {
        text: 'Отчитать',
        goTo: 53
      },
      {
        text: 'Поддержать',
        goTo: 57
      },
      {
        text: 'Проигнорировать',
        goTo: 60
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Thinking.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 53,
    text:
      `
        — Сильвия, будь аккуратнее. Внимательность — это первое правило хорошей служанки. Если ты роняешь книги в моих покоях, что же случится на вечернем приеме перед Регентом?
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Pride' },
      { story: EStoriesEn.SFA, value: 1, category: 'Choice', id: 'SayBad' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 54,
    text:
      `
        Пожилая женщина суетливо закивала, прижимая руки к груди. В ее глазах застыл глубокий страх обидеть молодую госпожу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 55,
    text:
      `
        — Вы абсолютно правы, леди $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid_Afraid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 56,
    text:
      `
        — Такого больше не повторится, уверяю вас. Я... я соберу все.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid_Afraid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 57,
    text:
      `
        — Все в порядке, Сильвия, не переживай так. Книги — не такая ценность, чтобы переживать из‑за них. Оставь, я соберу сама. Ты и так делаешь для нашего дома слишком много.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Smile.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Humility' },
      { story: EStoriesEn.SFA, value: 1, category: 'Choice', id: 'SaySupport' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 58,
    text:
      `
        Служанка удивленно моргнула, а затем ее лицо расплылось в благодарной, теплой улыбке. Напряжение, сковывающее плечи, исчезло.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 59,
    text:
      `
        — Ох, дитя... Да хранят Небеса ваше доброе и чистое сердце. Вы будете самой прекрасной и милосердной правительницей.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 60,
    text:
      `
        — Оставь это, Сильвия. Собери книги и можешь идти. Главное, подготовь платье к моему возвращению из сада.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    stats: [
      { story: EStoriesEn.SFA, value: 1, category: 'Choice', id: 'SayIgnore' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 61,
    text:
      `
        Я равнодушно отвернулась обратно к зеркалу, демонстрируя холодную аристократическую отстраненность. Ошибки слуг были ниже моего внимания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 62,
    text:
      `
        — Да, моя госпожа. Как прикажете.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 63,
    text:
      `
        Пожилая служанка быстро навела порядок в вещах и покинула спальню, тихо прикрыв за собой дверь. Я осталась наедине со своими мыслями.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 64,
    text:
      `
        «Пора одеваться. Нельзя заставлять отца и Кастиэля ждать. Этот день слишком важен, чтобы тратить его на пустые сборы». 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 65,
    text:
      `
        «Моя сказка начинается прямо сейчас. И никто во всей вселенной не сможет ее разрушить».
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Morning.jpg')
  },

  {
    id: 66,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 67 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 67,
    text:
      `
        Обеденный зал тонул в утреннем свете, струящемся сквозь витражные окна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 68,
    text:
      `
        Стол из белого дерева был уставлен серебряной посудой, фарфоровыми чашами с фруктами и кувшинами с прохладными напитками. Во главе, изучая какие-то свитки, сидел глава нашего рода.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 69,
    text:
      `
        Я собралась выйти и поприветствовать отца, как вдруг увидела приближающуюся фигуру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 70,
    text:
      `
        Спрятавшись за колонной, стала осторожно выглядывать из укрытия, напряженно вслушиваясь в каждое слово.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 71,
    text:
      `
        К отцу подошел его советник, давний доверенный приближенный — Рахаб. Его уверенная походка и прямая осанка выдавали человека, привыкшего к власти, но сейчас в его глазах читалась тревога.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Rahab.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 72,
    text:
      `
        — Да хранят вас Небеса, лорд Валериан. Как ваше самочувствие?
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speakerL: 'Рахаб',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Rahab.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 73,
    text:
      `
        Отец улыбнулся, откладывая бумаги в сторону. В его волосах уже серебрилась седина, а на лице залегла серьезная уверенность — следствие долгих лет тяжелой государственной службы в Совете.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 74,
    text:
      `
        — И тебе мир, Рахаб. Как всегда в добром здравии. Скажи, пожалуйста, ты принес те бумаги, о которых мы вчера говорили?
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 75,
    text:
      `
        Лицо Рахаба мгновенно стало серьезным, а брови слегка сдвинулись к переносице. Он протянул отцу несколько документов.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 76,
    text:
      `
        — Все сделано в лучшем виде, мой господин. Но позвольте нескромный вопрос?
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speakerL: 'Рахаб',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Rahab.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 77,
    text:
      `
        Отец внимательно посмотрел на советника и кротко кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 78,
    text:
      `
        — В Совете нынче ходят весьма противоречивые слухи. Многие лорды шепчутся о ваших радикальных высказываниях относительно политики молодого Регента.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speakerL: 'Рахаб',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Rahab.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 79,
    text:
      `
        Отец резко понизил голос, оглянувшись на двери зала, словно стены дворца могли подслушивать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Wind.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 80,
    text:
      `
        — Враг в шелках гораздо опаснее врага в доспехах. Люциан... У меня есть подозрения, что Регент ведет двойную игру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 81,
    text:
      `
        — И если под маской благодетеля и защитника Серебряного Града скрывается безжалостный тиран, одержимый силой, то его необходимо остановить.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 82,
    text:
      `
        Рахаб надолго замолчал, задумчиво поглаживая подбородок.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 83,
    text:
      `
        Безусловно, как приближенный отца, он догадывался о намерениях своего господина, но прекрасно понимал — открытое выступление против Регента не приведет Серебряный град к процветанию.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 84,
    text:
      `
        — Мой господин, позвольте… Обвинения слишком громогласны. Вы же должны понимать последствия таких высказываний.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speakerL: 'Рахаб',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Rahab.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 85,
    text:
      `
        Отец встал из‑за стола и начал расхаживать медленными, выверенными шагами по залу.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 86,
    text:
      `
        — Я собираю доказательства его заговора. Если Люциану удастся свершить задуманное, то пострадают не только демоны — оба двора утонут в крови. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 87,
    text:
      `
        Рахаб сдержанно кивнул, готовясь удалиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 88,
    text:
      `
        — Я подключу все силы к расследованию, если вы отдадите приказ.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speakerL: 'Рахаб',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Rahab.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 89,
    text:
      `
        — Спасибо. Приятно осознавать, что спустя столько лет мы стоим вместе, плечом к плечу.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 90,
    text:
      `
        Отец передал Рахабу некий сверток.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 91,
    text:
      `
        — Изучи эту информацию. Вскоре я отправлю слугу с письмом, где будут описаны более подробные инструкции дальнейших действий.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 92,
    text:
      `
        — Благодарю! Доброго здравия, лорд Валериан.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speakerL: 'Рахаб',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Rahab.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 93,
    text:
      `
        После этого Рахаб вышел из обеденного зала.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 94,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 95 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 95,
    text:
      `
        Сердце билось так, будто хотело вырваться из груди: услышанное не укладывалось в голове.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 96,
    text:
      `
        «Я давно не видела отца таким встревоженным. Неужели Регент Люциан настолько страшен?»
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Thinking.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 97,
    text:
      `
        Не собираясь больше откладывать встречу, я направилась к отцу.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 98,
    text:
      `
        — А, вот и моя дорогая дочь. Доброе утро, $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 99,
    text:
      `
        Отец быстро переключился с рабочих вопросов, бросая на меня восторженные взгляды.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 100,
    text:
      `
        — Выглядишь ослепительно. Этот оттенок тебе к лицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 101,
    text:
      `
        — Доброе утро, папа. Сильвия сказала, что ты искал меня. Надеюсь, государственные дела могут подождать хотя бы на время завтрака?
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 102,
    text:
      `
        Я мягко опустилась на стул напротив него, расправляя подол платья. Служанка тут же налила в мою чашу свежий нектар. Взгляд метался по блюдам, не в силах остановиться на чем‑то одном.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 103,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.SFA, personId: 'SFA_Aristocrat_Breakfast', goTo: 104 },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 104,
    text:
      `
        — Для тебя у меня всегда есть время, дитя. Особенно в такой день. Вечером на приеме Регент Люциан объявит о твоей помолвке с Кастиэлем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 105,
    text:
      `
        — Кастиэль — достойный юноша, преданный долгу. На днях я получил письмо от его семьи: они хотят встретиться для личных переговоров о свадьбе.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 106,
    text:
      `
        — Замечательные новости! Поскорее бы этот день настал.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 107,
    text:
      `
        — Ты права…
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 108,
    text:
      `
        Отец на мгновение замолчал, и его взгляд стал задумчивым, почти тревожным. Он посмотрел на свитки, которые только что изучал.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 109,
    text:
      `
        Я понимала, чем вызвана резкая смена настроения папы. Но все же решила спросить более уклончиво:
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 110,
    text:
      `
        — Папа…? Ты выглядишь обеспокоенным. Что-то случилось в Совете? Снова разногласия с Пылающей Цитаделью? 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Thinking.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 111,
    text:
      `
        — Демоны здесь ни при чем, $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 112,
    text:
      `
        Я посмотрела на него. Сердце отозвалось немой болью.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 113,
    text:
      `
        Взгляд отца стал отстраненным, пустым. Этой секунды хватило, чтобы в комнате сменилось настроение.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 114,
    text:
      `
        — Я хочу, чтобы ты была осторожна по отношению к Регенту Люциану.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 115,
    text:
      `
        — Если со мной что-то случится, $Имя Игрока$... Прошу, найди мой дневник. Он спрятан в моем кабинете.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 116,
    text:
      `
        — Регент не должен его заполучить. Обещай, что сохранишь дневник любой ценой. В нем — ключ ко всему.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 117,
    text:
      `
        Слова отца заставили руки тревожно сжать ткань платья. Как мне поступить? 
      `,
    buttons: [
      {
        text: 'Расспросить подробнее',
        goTo: 118
      },
      {
        text: 'Успокоить отца',
        goTo: 121
      }],
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 118,
    text:
      `
        — О чем ты говоришь, отец? Если речь идет о том, что Регент может как-то навредить Серебряному граду или нашей семьей… Мы должны быть готовы к этому.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Pride' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 119,
    text:
      `
        Отец строго, но с любовью посмотрел на меня и покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 120,
    text:
      `
        — Твоя решимость делает мне честь, дочь. Но Люциан слишком силен. Один неверный шаг и… Действовать нужно тонко. Пока просто будь настороже.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 121,
    text:
      `
        — Папа, не думай сейчас об этом. Сегодняшний вечер должен быть праздником. Регент Люциан уважает тебя, он не посмеет сделать ничего провокационного. Давай оставим интриги Совета хотя бы до завтра.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Humility' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 122,
    text:
      `
        Отец тяжело вздохнул, его лицо немного разгладилось, но в глазах осталась глубокая грусть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 123,
    text:
      `
        — Твоя чистота — это дар, дитя мое. Рад, что дворцовая грязь еще не коснулась твоей души. Пусть Небеса хранят твой покой как можно дольше.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 124,
    text:
      `
        — Но довольно о мрачном. Кастиэль уже заждался тебя. Иди к нему, $Имя Игрока$. Наслаждайся этим днем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 125,
    text:
      `
        Отец поднялся, подошел ко мне и нежно поцеловал в лоб. Его ладонь задержалась на моих волосах, словно он пытался запомнить это мгновение навсегда.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 126,
    text:
      `
        — Спасибо, папа. Обещаю вернуться к полудню, чтобы мы вместе подготовились к приему.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 127,
    text:
      `
        Я поднялась со своего места. Тревожные слова отца о Люциане и тайном дневнике все еще эхом отзывались в голове, но образ Кастиэля, ждущего меня в цветущем саду, быстро вытеснил мрачные мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Dining_Hall_Morning.jpg')
  },

  {
    id: 128,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 129 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 129,
    text:
      `
        Я вышла на залитую солнцем террасу. Воздух здесь был наполнен ароматом роз, а впереди, у хрустального фонтана, спиной ко мне стоял высокий ангел в белоснежном камзоле.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    music: require('../../../../Media/Audio/SFA/Music/Theme_Sun.mp3'),
    ambient: require('../../../../Media/Audio/SFA/Ambient/Garden.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 130,
    text:
      `
        Я сделала несколько шагов по гравию, пока Кастиэль задумчиво наблюдал за переливами воды. Услышав шуршание моего платья, он стремительно обернулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 131,
    text:
      `
        — $Имя Игрока$! Я уж думал, что ты решила спрятаться в своих покоях.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 132,
    text:
      `
        Молодой ангел подошел ближе. На его лице играла теплая, искренняя улыбка, а в глазах светилось чистое обожание.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 133,
    text:
      `
        — Кто сказал, что я прячусь, Кастиэль? Леди просто изволит наслаждаться утром. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 134,
    text:
      `
        — Или будущий глава стражи не способен отыскать свою невесту без приказа Регента?
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 135,
    text:
      `
        Я лукаво прищурилась, глядя на него снизу вверх. Кастиэль мягко рассмеялся, и этот знакомый, родной звук заставил мое сердце забиться чуть быстрее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 136,
    text:
      `
        — Ради тебя я готов пройти все круги Ада, если потребуется.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 137,
    text:
      `
        Он бережно взял мою ладонь в свои руки. Я почувствовала тепло его кожи — в его жестах сейчас не было и капли той суровости, которую накладывает на мужчин воинский долг.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 138,
    text:
      `
        — Наш брак одобрен Советом, $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 139,
    text:
      `
        — Это самый счастливый день в моей жизни. Обещай... что бы ни принесло нам будущее, мы встретим это вместе.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 140,
    text:
      `
        Я посмотрела в его чистые, полные надежды глаза. 
      `,
    buttons: [
      {
        text: 'Пообещать',
        goTo: 141
      },
      {
        text: 'Проявить девичью гордость',
        goTo: 143
      }],
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 141,
    text:
      `
        — Обещаю, Кастиэль. Мое сердце принадлежит тебе, и никакие бури этого мира не заставят отпустить твою руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Smile.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Humility' },
      { story: EStoriesEn.SFA, value: 1, category: 'Person', id: 'Castiel', silent: true },
      { story: EStoriesEn.SFA, value: 1, category: 'Choice', id: 'SayPromise' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 142,
    text:
      `
        Кастиэль с облегчением выдохнул, его улыбка стала еще шире. Он нежно коснулся губами моих пальцев, и в этот момент я верила каждому его слову.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 143,
    text:
      `
        — Ты слишком торопишь события, Кастиэль. Наберись терпения. Сначала докажи, что достоин руки дочери лорда Валериана на сегодняшнем приеме, а уже потом проси вечных клятв.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Pride' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 144,
    text:
      `
        Я гордо вскинула подбородок, но легкая улыбка выдавала мою благосклонность. Кастиэль лишь понимающе качнул головой, принимая правила игры.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 145,
    text:
      `
        — Я докажу это, леди $Имя Игрока$. Клянусь, за моей спиной ты никогда не узнаешь страха или нужды.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 146,
    text:
      `
        Кастиэль запустил руку в карман своего камзола и бережно достал оттуда изящный серебряный кулон в виде расправившего крылья ангела.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 147,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 148, image: require('../../../../Media/Images/SFA/Objects/Pendant_Box.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 148,
    text:
      `
        Тонкая, искусная ювелирная работа заставила металл ослепительно искриться на солнце.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 149,
    text:
      `
        — Я хочу, чтобы ты носила это. Пусть он станет твоей защитой и вечным знаком преданности, даже когда долг зовет меня на стены Цитадели.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 150,
    text:
      `
        Он аккуратно обошел меня и застегнул цепочку на шее. Прикосновение прохладного серебра к коже вызывало приятную дрожь.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 151,
    text:
      `
        — Он прекрасен, Кастиэль... Спасибо. Я обещаю никогда не снимать его.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Pendant_Smile.png'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Item', id: 'Pendant' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 152,
    text:
      `
        Торжественный, раскатистый звон колоколов, доносящийся со стороны главного собора Серебряного Града, нарушил уединение. Время, отведенное только для нас двоих, неумолимо истекало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Far_Bell_Ring.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 153,
    text:
      `
        — Нам пора возвращаться в дом. Лорд Валериан просил гвардию усилить посты перед вечером, да и мне нужно подготовить парадный мундир к выезду. Регент Люциан не терпит опозданий.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 154,
    text:
      `
        — Да, ты прав. Отец тоже просил меня не задерживаться. Нам обоим нужно подготовиться к тому, что ждет нас во дворце.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_GreenDress_Pendant.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 155,
    text:
      `
        Я в последний раз взглянула на залитый солнцем фонтан, сорвала раскрывшийся бутон белой розы и, подхватив подол платья, пошла рука об руку с Кастиэлем к дверям поместья.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Blooming_EstateGarden_Day.jpg')
  },

  {
    id: 156,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 157 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 157,
    text:
      `
        Время пролетело незаметно, уступив место мягким вечерним сумеркам. Перед зеркалом я стояла уже не в скромном прогулочном платье, а в великолепном бальном наряде.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 158,
    text:
      `
        Мысли все еще были заняты волшебной атмосферой, которую мы создали с Кастиэлем.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 159,
    text:
      `
        Однако слова отца о двойной игре Регента не выходили из головы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 160,
    text:
      `
        «Действительно ли под этим сияющим фасадом скрывается бездна?»
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 161,
    text:
      `
        На моей шее покоился подарок Кастиэля. Я бережно коснулась его пальцами, и это прикосновение вернуло мне былую уверенность.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 162,
    text:
      `
        «Хватит, $Имя Игрока$! Никакие политические интриги не смогут осквернить этот вечер».
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 163,
    text:
      `
        В комнату неожиданно вошла мама. Она одарила меня восторженным взглядом и подошла, положив руку на плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 164,
    text:
      `
        — Дорогая, $Имя Игрока$! Ты выглядишь просто потрясающе. Как ты себя чувствуешь? Готова к торжеству?
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speakerR: 'Леди Орелия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Orelia.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 165,
    text:
      `
        Теплые слова мамы действовали успокаивающе. Я действительно старалась отпустить все тревоги и сосредоточиться на предстоящем триумфе.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 166,
    text:
      `
        — Сегодня Небеса благоволят мне, мама. Я это чувствую.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 167,
    text:
      `
        Леди Орелия кротко кивнула, не отрывая взгляда от моего платья. Она слегка поправила его подол, подошла со спины, чтобы проверить, насколько оно идеально сидит.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 168,
    text:
      `
        — Мы с твоим отцом искренне считаем, что Кастиэль — достойный юноша.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speakerR: 'Леди Орелия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Orelia.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 169,
    text:
      `
        — Буду молиться Небесам, чтобы я дожила до того момента, когда сидя в саду, рядом будут бегать ваши прекрасные дети.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speakerR: 'Леди Орелия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Orelia.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 170,
    text:
      `
        — И наш род будет в зените своей славы.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speakerR: 'Леди Орелия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Orelia.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 171,
    text:
      `
        Ее слова заставили меня смущенно отвести взгляд и тихо вздохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 172,
    text:
      `
        — Мама…
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 173,
    text:
      `
        Леди Орелия рассмеялась — легким, сдержанным смехом.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 174,
    text:
      `
        — Извини, $Имя Игрока$. Мечты порой уносят меня далеко за пределы нашего мира. Но разве не в этом их прелесть?
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speakerR: 'Леди Орелия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Orelia.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 175,
    text:
      `
        Она подмигнула мне — совсем не по‑аристократически, но именно в этом была вся она: в умении сохранять в себе искру юности даже среди дворцовых условностей.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 176,
    text:
      `
        Она вышла из моей комнаты, оставив после себя легкий аромат лаванды и ощущение своей безграничной поддержки.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 177,
    text:
      `
        — Дети…
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 178,
    text:
      `
        Разумеется, каждая уважаемая женщина должна родить ребенка — это был тяжелый долг, который общество взваливало на плечи каждой особы.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 179,
    text:
      `
        И все же мое юное сознание упрямо отказывалось думать об этом всерьез, словно я могла отсрочить неизбежное хотя бы на один вечер, пока Небеса еще благосклонны, а сердце бьется в ритме предвкушения.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 180,
    text:
      `
        — Хватит мыслей… Пора на бал!
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Evening.jpg')
  },

  {
    id: 181,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 182 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 182,
    text:
      `
        Тронный зал поражал своим масштабом и ослепительной роскошью. Огромные хрустальные люстры располагались под расписными сводами, проливая потоки света на сотни танцующих пар. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    music: require('../../../../Media/Audio/SFA/Music/Theme_Ball.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 183,
    text:
      `
        Музыка взлетала к потолку, смешиваясь со звоном бокалов и смехом аристократии.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 184,
    text:
      `
        Все взгляды были устремлены на нас. Гости расступались с почтением, лорды склоняли головы перед моим отцом, признавая его неоспоримое влияние в Совете.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 185,
    text:
      `
        Отец шел рядом, расправив плечи. Его лицо излучало строгое величие благородного ангела. Мама мягко улыбалась, держа его под руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 186,
    text:
      `
        Мы были идеальным воплощением чистоты и силы Серебряного Града.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 187,
    text:
      `
        — Держись гордо, $Имя Игрока$. Пусть наш свет озаряет присутствующих!
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 188,
    text:
      `
        «Как я должна преподнести себя высшему обществу в этот момент?»
      `,
    buttons: [
      {
        text: 'Гордо вскинуть подбородок',
        goTo: 189
      },
      {
        text: 'Очаровательно улыбнуться гостям',
        goTo: 191
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 189,
    text:
      `
        Я расправила плечи и окинула залу холодным, уверенным взглядом. Я знала цену своему титулу, и никто здесь не посмел бы усомниться в моем превосходстве.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Pride' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 190,
    text:
      `
         «Я рождена для этой роскоши. Это мой дом, и я заставлю этот двор преклонить колени перед моим величием».
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 191,
    text:
      `
        Я мягко улыбнулась проходящим мимо лордам, слегка склонив голову в знак приветствия. Мое изящество и мягкие манеры всегда располагали к себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Humility' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 192,
    text:
      `
        «Истинная сила аристократки — в ее умении дарить свет и благосклонность тем, кто смотрит на нее с восхищением».
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 193,
    text:
      `
        Громкие, торжественные звуки фанфар заставили на мгновение замолчать присутствующих. Сотни ангелов склонились в глубоком поклоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Fanfair.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 194,
    text:
      `
        — Его Величество Регент Серебряного Града, Властелин Люциан!
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speakerR: 'Глашатай',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 195,
    text:
      `
        На вершине мраморной лестницы появился правитель ангелов. Он был безупречен, с величественной осанкой, а за его спиной покоились красные крылья.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 196,
    text:
      `
         «Хоть он и ангел, но здесь играются контрасты: кровавые крылья и светлое лидерство».
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 197,
    text:
      `
        Он — архитектор нашей эпохи. В его фигуре было столько неоспоримого величия и харизмы, что даже воздух вокруг него казался наэлектризованным.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 198,
    text:
      `
        Он медленно спустился по ступеням, направляясь прямиком к нашей семье. Гости провожали его почетными взглядами.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 199,
    text:
      `
        Люциан остановился перед моим отцом и склонил голову в вежливом, уважительном приветствии.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 200,
    text:
      `
        — Лорд Валериан. Ваша преданность Совету — это то, на чем держится мир в наших чертогах. Серебряный Град в неоплатном долгу перед вашими заслугами.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 201,
    text:
      `
        — Благодарю, Ваше Величество.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 202,
    text:
      `
        Взгляд Люциана плавно переместился на меня. Его темные, пронзительные глаза словно заглянули в самую глубину моей души, заставив оцепенеть. В этом взгляде была пугающая, магнетическая сила.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 203,
    text:
      `
        — А это, должно быть, прекрасная леди, $Имя Игрока$. Жемчужина сегодняшнего вечера. Позволите ли украсть вас на один танец, дитя мое, прежде чем Совет заберет все мое внимание?
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 204,
    text:
      `
        Он грациозно протянул мне руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 205,
    text:
      `
         «Его вежливость безупречна, но почему от этого жеста у меня по спине пробежал едва заметный холодок? Предупреждение отца… Нужно быть начеку».
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress_Thinking.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 206,
    text:
      `
        Я вложила свою ладонь в руку Регента. Ощущение его пальцев было странным — крепким, властным, не терпящим возражений.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 207,
    text:
      `
        Люциан уверенно вывел меня в центр залы. Мы закружились в ритме вальса, и весь остальной мир, включая отца и ждущего в гвардейском оцеплении Кастиэля, перестал существовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 208,
    text:
      `
        — Вы прекрасно держитесь, $Имя Игрока$. Но больше всего меня восхищает не ваша грация, а ваш взгляд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 209,
    text:
      `
        — В нем есть редкая для молодых дев гордость и непокорность. Израненный мир нуждается в лидерах с таким сильным внутренним стержнем.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 210,
    text:
      `
        Его шепот раздавался у самого моего уха, обволакивая и заставляя верить каждому слову. В его интонациях не было фальши — лишь искреннее, пугающее восхищение.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 211,
    text:
      `
        — Вы льстите мне, Ваше Величество. Моя гордость — это лишь отражение воспитания моего отца.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 212,
    text:
      `
        — Порой великие люди слишком сильно цепляются за старые догмы, забывая, что для построения нового, идеального порядка иногда приходится... сжигать старые мосты.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 213,
    text:
      `
        — Сжигать мосты?
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 214,
    text:
      `
        Его пальцы сжали мою ладонь чуть крепче, и этот жест показался мне не танцевальным па, а захватом капкана.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 215,
    text:
      `
        — Наслаждайтесь этим балом, леди. Пейте нектар, общайтесь с аристократией. Подобные ночи слишком быстротечны.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 216,
    text:
      `
        Он развернулся и величественной походкой направился к лордам Совета. Я осталась стоять посреди зала, пытаясь унять внезапную дрожь.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 217,
    text:
      `
        Пока я приходила в себя после пугающе гипнотизирующего танца с Регентом, сквозь плотную завесу гостей ко мне решительно прорывался высокий силуэт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 218,
    text:
      `
        Гвардейцы расступились перед ним, отдавая честь.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 219,
    text:
      `
        — $Имя Игрока$! Люциан наконец отпустил тебя. Я едва сдерживался, чтобы не прервать ваш танец. Ты выглядишь невероятно. Это платье… ты затмила всех леди Серебряного Града.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 220,
    text:
      `
        В его глазах горел такой искренний, чистый восторг, что все мои страхи перед Регентом мгновенно испарились.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 221,
    text:
      `
        — Ты преувеличиваешь, Кастиэль. Отец сказал, что гвардия сегодня начеку?
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 222,
    text:
      `
        — Да, Регент приказал утроить посты. Но сегодня я не хочу думать о службе. Сегодня — только наш день.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 223,
    text:
      `
        Кастиэль медленно коснулся моей ладони, очерчивая небольшой круг своим большим пальцем.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 224,
    text:
      `
        — Дорогая, $Имя Игрока$. Не окажешь мне честь и потанцуешь со мной?
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 225,
    text:
      `
        Мир на секунду замер, оставляя нас в центре сцены. Только он и я, а вокруг — вихрь света, музыки и чужих взглядов, которые больше не имели значения.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 226,
    text:
      `
        «Мои мысли могут быть далеко… но… Это же Кастиэль. Как я должна ответить?»
      `,
    buttons: [
      {
        text: 'Согласиться на танец',
        goTo: 227
      },
      {
        text: 'Отказаться',
        goTo: 245
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 227,
    text:
      `
        — Если ты обещаешь крепко держать меня… Я окажу тебе такую честь.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress_Smile.png'),
    stats: [
      { story: EStoriesEn.SFA, value: 1, category: 'Person', id: 'Castiel', silent: true }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 228,
    text:
      `
        Выражение лица Кастиэля на миг расслабилось. Он уверенными движениями подхватил меня за талию, начиная танец.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 229,
    text:
      `
        Музыка обволакивала, сплетая нас с ритмом и превращая хаос из аристократических пар в единый, живой узор.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 230,
    text:
      `
        Движения Кастиэля были четкими, выверенными до совершенства, словно каждый шаг был отрепетирован ради этого мгновения.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 231,
    text:
      `
        Он крепко держал меня, и в этой надежной хватке не имело место ни капли грубости — только уверенность, которая позволяла мне не бояться оступиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 232,
    text:
      `
        Я мельком заметила, как его взгляд на долю секунды скользнул по залу — привычный, профессиональный жест, когда он незаметно отслеживал все, что происходило вокруг.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 233,
    text:
      `
        Он склонился ниже, шепча мне на ухо:
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 234,
    text:
      `
        — Если бы я мог остановить время, $Имя Игрока$...
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 235,
    text:
      `
        — То остался бы в этом моменте навсегда.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 236,
    text:
      `
        Мои щеки слегка порозовели от его близости и интимного шепота.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 237,
    text:
      `
        Кастиэль заметил это, но не отстранился, а, напротив, прижал наши тела еще ближе, не оставляя воздуха между ними.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 238,
    text:
      `
        — Ты — само очарование, $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 239,
    text:
      `
        — И я клянусь всеми Небесами, что пока мое сердце бьется, твоя улыбка будет сиять.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 240,
    text:
      `
        Он осторожно приблизился, оставляя мягкий след своих губ на моей щеке — легкий, трепетный поцелуй, в котором не было страсти, но была бесконечная преданность.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 241,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/SFA/Cutscenes/Castiel_Kiss.mp4'), goTo: 242 },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 242,
    text:
      `
        Я позволила чувствам вести меня и блаженно закрыла глаза, все еще чувствуя сладкое ощущение на коже.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 243,
    text:
      `
        — Кастиэль…
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress_Smile.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 244,
    text:
      `
        Слова были излишни. Мы продолжали кружиться в плавном танце, пока играла музыка.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 245,
    text:
      `
        — Прости, но… Танец с Регентом не оставил мне сил для еще одного представления…
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 246,
    text:
      `
        — Ты не против, если мы просто постоим рядом, вдали от этой суеты?
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_BallDress.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 247,
    text:
      `
        Кастиэль на мгновение словно потух, но тут же вернул на лицо теплую улыбку — не ту, что надевают для вида, а ту, что рождается из желания защитить и не огорчить.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 248,
    text:
      `
        — Конечно, $Имя Игрока$. Как скажешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 249,
    text:
      `
        Спустя немного времени музыка постепенно стихла, растворяясь в густом воздухе зала. Кастиэль тихо произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 250,
    text:
      `
        — Смотри, Люциан поднимается к престолу.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 251,
    text:
      `
        Зал мгновенно затих. Регент Люциан встал на возвышении перед золотым троном, обводя притихшую толпу величественным взглядом. Его голос разнесся под сводами замка.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Wand_Knock.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 252,
    text:
      `
        — Верные дети Серебряного Града! Сегодня мы празднуем не только мир в наших чертогах. Сегодня я с гордостью объявляю о союзе двух великих семей.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 253,
    text:
      `
        — Род верховного советника Валериана и род начальника стражи Кастиэля отныне скреплены союзом! Пусть Небеса благословят их помолвку!
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 254,
    text:
      `
        Зал взорвался оглушительными аплодисментами и приветственными криками. Мой отец издалека одобрительно кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 255,
    text:
      `
        Кастиэль крепко, но бережно сжал мою ладонь, и в его глазах вспыхнуло такое чистое, почти мальчишеское счастье.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 256,
    text:
      `
        Я стояла, окруженная сиянием всеобщего внимания. Моя семья была на вершине величия — и эта вершина ослепляла.
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 257,
    text:
      `
        Кастиэль был рядом, и казалось, ничто во вселенной не способно разрушить эту сказку.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Throne_Hall_Ball.jpg')
  },

  {
    id: 258,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 259 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 259,
    text:
      `
        Но сказки в Серебряном Граде умирают первыми.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Darkness.jpg')
  },

  {
    id: 260,
    text:
      `
        Они сгорают в холодном блеске дворцовых зеркал, не оставляя после себя даже пепла.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Darkness.jpg')
  },

  {
    id: 261,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 262 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 262,
    text:
      `
        Я резко распахнула глаза, закашлявшись от едкого, густого дыма, который обжигал горло и царапал легкие.
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    ambient: require('../../../../Media/Audio/SFA/Ambient/Fire_Evil.mp3'),
    simple: require('../../../../Media/Audio/SFA/Sounds/Scream_Sounds.mp3'),
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    effect: 'Красная пульсация',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 263,
    text:
      `
        Безмятежная ночь была разорвана дикими, полными ужаса криками слуг и звоном скрещивающихся клинков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 264,
    text:
      `
        В спальне начал разгораться пожар. Я медленно встала с кровати, прикрывая рот рукой, чтобы не вдыхать едкого воздуха.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 265,
    text:
      `
        «Что происходит?! На нас напали демоны?! Пылающая Цитадель нарушила пакт?»
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 266,
    text:
      `
        Дверь в спальню с грохотом распахнулась. На пороге стояла бледная, окровавленная Сильвия. Ее руки дрожали.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 267,
    text:
      `
        — Леди, $Имя Игрока$! Бегите... умоляю, бегите через потайной ход! Это не демоны... Это королевская гвардия! Они убивают всех…
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid_Blood_Afraid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 268,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 269,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.SFA, category: 'Choice', id: 'SayBad' }) >= 1
        }
      },
      {
        goTo: 269,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.SFA, category: 'Choice', id: 'SayIgnore' }) >= 1
        }
      },
      {
        goTo: 271,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.SFA, category: 'Choice', id: 'SaySupport' }) >= 1
        }
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 269,
    text:
      `
        Сильвия тяжело дышала, и каждый вдох давался ей с мучительным усилием; силы стремительно угасали, но в ее потускневших глазах всё ещё горел упрямый огонь долга.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 270,
    text:
      `
        — Спасайтесь! Я задержу их, сколько смогу... О Небеса, за что нам это?! Бегите же…
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid_Blood_Afraid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 271,
    text:
      `
        — Я... я успела добежать до кабинета вашего отца, когда начался этот кошмар. Он отбивался... Господин крикнул, чтобы я спасала вас. Возьмите... возьмите это!
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid_Blood_Afraid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 272,
    text:
      `
        Из последних сил служанка вложила в мою ладонь тяжелый, испачканный в крови фамильный ключ с гравировкой нашего рода.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Item', id: 'Key' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 273,
    text:
      `
        — Это от тайника в его кабинете... там дневник. Люциан ищет его. Спрячьте ключ... Живите, моя дорогая госпожа! Живите ради...
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speakerR: 'Сильвия',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Elderly_Maid_Blood_Afraid.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 274,
    text:
      `
        Договорить она не успела: из темноты коридора вырвалось лезвие клинка и пронзило старую служанку насквозь.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Sword_Scream.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 275,
    text:
      `
        Сильвия на мгновение застыла, а после замертво повалилась на ковер, оставляя на ворсе темные, влажные пятна.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 276,
    text:
      `
        За ее спиной стоял гвардеец в белоснежном доспехе Серебряного Града. На его броне была эмблема Регента.
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 277,
    text:
      `
        Солдат замахнулся мечом, заметив меня.
      `,
    buttons: [
      {
        text: 'Напасть на гвардейца',
        goTo: 278
      },
      {
        text: 'Замереть в ужасе',
        goTo: 280
      },
      {
        text: 'Сбежать в коридор',
        goTo: 282
      }],
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty_Fear.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 278,
    text:
      `
        Схватив с прикроватного столика тяжелый серебряный подсвечник, я с яростным криком бросилась вперед, наотмашь ударив убийцу по шлему.
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Heavy_Knock.mp3'),
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Pride' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 279,
    text:
      `
        Металл звеняще встретился с металлом. Гвардеец покачнулся от неожиданности, и этого мига мне хватило, чтобы выскочить в полыхающий коридор.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 280,
    text:
      `
        Страх сковал мои конечности, шелк сорочки прилип к холодному от пота телу. Я не могла пошевелиться, глядя на тело Сильвии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Humility' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 281,
    text:
      `
        Лишь в последний момент, когда гвардеец сделал шаг, инстинкт выживания заставил меня рвануть в сторону и выбежать в двери.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 282,
    text:
      `
        Не теряя ни секунды на крики, я перепрыгнула через упавший комод и проскочила мимо замахнувшегося солдата, моля Небеса лишь о том, чтобы у меня хватило скорости.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Bedroom_Evelyn_Fire.jpg')
  },

  {
    id: 283,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    interruptiveFrame: { goTo: 284 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 284,
    text:
      `
        Я бежала по некогда величественным коридорам, где теперь бушевал огненный ад.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    music: require('../../../../Media/Audio/SFA/Music/Theme_Requiem.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 285,
    text:
      `
        Каждый шаг отзывался острой болью в груди. Стены, украшенные старинными гобеленами с историей нашего рода, пожирало безжалостное пламя.
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 286,
    text:
      `
        Портреты предков один за другим вспыхивали, рассыпаясь не просто пеплом, а прахом забытых клятв. Потолок трещал, угрожая похоронить меня под обломками.
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 287,
    text:
      `
        Дом, бывший когда‑то моей крепостью и тихой гаванью, теперь умирал у меня на глазах.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 288,
    text:
      `
        «Этого не может быть… О, Небеса, как такое могло произойти?»
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty_Fear.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 289,
    text:
      `
        Впереди прогремел взрыв. Дым на мгновение рассеялся, и я замерла, прижав ладонь к губам.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Exploison.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 290,
    text:
      `
        На коленях, тяжело дыша, сидел Гилберт — мой учитель дипломатии.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 291,
    text:
      `
        Его белоснежные крылья были опалены и испачканы сажей, а из глубокой раны на боку хлестала кровь, стремительно пропитывая праздничную одежду.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 292,
    text:
      `
        — $Имя Игрока$...
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    speakerR: 'Гилберт',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 293,
    text:
      `
        Он с трудом поднял на меня взгляд, и в этих глазах, когда‑то учивших меня видеть суть вещей, теперь плескалась боль и горькое облегчение.
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 294,
    text:
      `
        — Слава Небесам, ты жива...
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speakerR: 'Гилберт',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 295,
    text:
      `
        Я рванулась к нему, но он вскинул ладонь, останавливая меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 296,
    text:
      `
        — Не подходи! Сзади... они идут по моему следу. Гвардия Люциана прорвала оборону.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    speakerR: 'Гилберт',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 297,
    text:
      `
        — Тебе нужно бежать в главный зал, твои родители... они еще там. Но я... я уже не смогу идти.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    speakerR: 'Гилберт',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 298,
    text:
      `
        — Учитель… Нет…. Нет…
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty_Fear.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 299,
    text:
      `
        Из-за поворота коридора уже слышался тяжелый, синхронный топот кованых сапог гвардейцев Регента. У меня были считанные секунды.
      `,
    buttons: [
      {
        text: 'Помочь дойти до укрытия',
        goTo: 300
      },
      {
        text: 'Выслушать последнее наставление',
        goTo: 309
      },
      {
        text: 'Оставить его и побежать к родителям',
        goTo: 318
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 300,
    text:
      `
        Смирив страх перед нагоняющими нас гвардейцами, я опустилась рядом с ним и подставила плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Humility' },
      { story: EStoriesEn.SFA, value: 1, category: 'Choice', id: 'HelpHide' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 301,
    text:
      `
        Гилберт глухо застонал от боли, но нашел в себе силы опереться на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 302,
    text:
      `
        Вместе, задыхаясь от дыма, мы преодолели несколько метров и скрылись в узкой нише за полуобгоревшим гобеленом, где начинался потайной ход для слуг.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 303,
    text:
      `
        — Спасайтесь учитель!
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 304,
    text:
      `
        — Глупая…
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speakerR: 'Гилберт',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 305,
    text:
      `
        Он прошептал, оседая на пол тайного прохода, но в его глазах блеснула слабая надежда.
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 306,
    text:
      `
        — Спасибо. Береги себя, дитя. Беги. Спаси отца и мать!
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speakerR: 'Гилберт',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 307,
    text:
      `
        Я оставила его в темноте прохода и выскочила обратно в пылающий коридор.
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 308,
    text:
      `
        Огонь обжигал не только кожу, но и душу.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 309,
    text:
      `
        Я понимала, что не смогу утащить его с собой — рана была слишком глубокой, а враги — слишком близко.
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    stats: [
      { story: EStoriesEn.SFA, value: +1, category: 'Effect', id: 'Pride' },
      { story: EStoriesEn.SFA, value: 1, category: 'Choice', id: 'ListenAdvice' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 310,
    text:
      `
        Но уважение к учителю не позволяло мне просто трусливо пробежать мимо. Я опустилась на одно колено, перехватив его слабеющую ладонь.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 311,
    text:
      `
        — Учитель, Гилберт…
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 312,
    text:
      `
        Гилберт из последних сил потянул меня к себе, прижимаясь к моему уху.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 313,
    text:
      `
        — $Имя Игрока$... Среди Совета есть предатель… Люциан действует не один…
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speakerR: 'Гилберт',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 314,
    text:
      `
        Сердце пропустило удар, но учитель не дал вставить и слова, крепче сжав мои пальцы.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 315,
    text:
      `
        — Выживи, дитя! Ищи гильдию «Пепельных крыльев» в нижнем городе. Найди их главу. Скажи ему: «Закат окрасит перья в сталь»... Он поможет. А теперь — беги!
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    speakerR: 'Гилберт',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Gilbert.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 316,
    text:
      `
        Его рука бессильно упала на окровавленный паркет, а взгляд остекленел. Спрятав его страшную тайну и спасительный пароль глубоко в сердце, я поднялась.
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 317,
    text:
      `
        Внутри меня выросла холодная, гордая решимость.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 318,
    text:
      `
       Каждая секунда промедления могла стоить жизни моим родителям. Сердце разрывалось от вида раненого учителя, но я понимала: я не успею спасти всех.
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    stats: [
      { story: EStoriesEn.SFA, value: 1, category: 'Choice', id: 'LeftAndRun' }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 319,
    text:
      `
        Вместо того чтобы «заглушить эмоции», я позволила им на миг пронзить меня насквозь — чтобы использовать эту боль как топливо.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 320,
    text:
      `
        — Простите меня, учитель... Простите!
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty_Fear.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 321,
    text:
      `
        Я кричала сквозь слезы, пробегая мимо раненого наставника.
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 322,
    text:
      `
        Гилберт не вскрикнул вдогонку и не успел ничего сказать. Он лишь закрыл глаза и бессильно опустил голову, оставаясь позади в дыму пожара.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Estate_Corridors_Fire.jpg')
  },

  {
    id: 323,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    interruptiveFrame: { goTo: 324 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 324,
    text:
      `
        Когда я вбежала в главный зал, повсюду лежали тела вассалов нашего рода и верных слуг.
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 325,
    text:
      `
        Шелк занавесей горел, золоченые статуи рушились, погребая под собой остатки наследия моей семьи.
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 326,
    text:
      `
        Задыхаясь от дыма, я вдруг застыла в абсолютном, леденящем ужасе, глядя в центр зала.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 327,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/SFA/Cutscenes/Parents_On_Knees_Lucian.mp4'), goTo: 328 },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 328,
    text:
      `
        Посреди зала, на коленях в луже собственной крови, стояли мои израненные родители. Их крылья были истерзаны, перья смешаны с кровью и пеплом.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 329,
    text:
      `
        А перед ними, возвышаясь словно карающий бог, стоял Регент Люциан. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 330,
    text:
      `
        Его идеальный камзол, в котором он еще три часа назад танцевал со мной, был густо забрызган свежей кровью. В руке он держал обнаженный клинок.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 331,
    text:
      `
        — ...на основании вышеизложенного, род лорда Валериана признается виновным в государственной измене, шпионаже в пользу Пылающей Цитадели и попытке свержения власти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian_Blood.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 332,
    text:
      `
        — Приговор Совета — истребление.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian_Blood.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 333,
    text:
      `
        — Лжец! Ты чудовище, Люциан!
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father_Smile_Blood.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 334,
    text:
      `
        Отец харкал кровью, но продолжал кричать, глядя тирану прямо в глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 335,
    text:
      `
        — Ты уничтожаешь нас не ради закона! Совет узнает правду!
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    speakerR: 'Лорд Валериан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Father_Smile_Blood.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 336,
    text:
      `
        — Совет никогда ничего не узнает, старик. Порядок требует жертв. А твоя правда умрет вместе с твоим именем.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian_Blood.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 337,
    text:
      `
        На какую-то долю секунды я заметила, как папа пытается заслонить своим телом маму.
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 338,
    text:
      `
        Люциан сделал едва заметный, ленивый жест рукой.
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 339,
    text:
      `
        — НЕТ!!!
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Sword_Knock.mp3'),
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty_Fear.png'),
    effect: 'Красная вспышка',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 340,
    text:
      `
        Мой истошный, сорванный крик эхом разнесся по горящему залу.
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 341,
    text:
      `
        Но было поздно. Клинки двух палачей одновременно опустились, и тела моих родителей безжизненно рухнули на окровавленный мрамор.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 342,
    text:
      `
        Мой мир, моя жизнь, мое будущее — все было уничтожено за одну секунду.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 343,
    text:
      `
        Не помня себя, я рванулась к телам родителей, и шелк ночной сорочки мгновенно пропитался их кровью, став не тканью, а печатью утраты.
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 344,
    text:
      `
        Сильные руки в железных перчатках грубо рванули меня назад, оттаскивая от тел. Я отчаянно билась в их хватке, чувствуя, как ногти ломаются о холодный металл..
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Heavy_Soldiers_Steps.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 345,
    text:
      `
        В зал, тяжело дыша, ворвался отряд гвардейцев под предводительством Кастиэля.
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Knocked_Doors.mp3'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 346,
    text:
      `
        Его парадный мундир был разорван, а на клинке виднелись следы свежей крови — он пробивался сюда, сквозь ряды тех, кого еще вчера называл соратниками.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 347,
    text:
      `
        — Нет... О Небеса, нет! Люциан, что здесь произошло?! Лорд Валериан не мог быть предателем! Отпустите ее! Немедленно отпустите леди, $Имя Игрока$!
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform_Blood_Fear.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 348,
    text:
      `
        Кастиэль сделал шаг вперед. Он был готов пойти против собственного Регента, чтобы защитить меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 349,
    text:
      `
        Но Люциан даже не повернул головы. Он лишь медленно вытер окровавленное лезвие своего клинка белоснежным платком.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 350,
    text:
      `
        — Стой, где стоишь, мальчишка.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian_Blood.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 351,
    text:
      `
        Голос Регента прозвучал тише шелеста стали, но заставил весь зал замереть.
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 352,
    text:
      `
        — Их род уничтожен за измену. Приговор приведен в исполнение. Ты ведь не хочешь, чтобы твой род разделил их участь из-за твоей глупой юношеской привязанности?
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian_Blood.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 353,
    text:
      `
        — Она ни в чем не виновата... Люциан, умоляю, пощади ее! Казнить ее — это безумие!
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform_Blood_Fear.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 354,
    text:
      `
        — Казнь?
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian_Blood.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 355,
    text:
      `
        Люциан наконец повернулся и окинул меня леденящим, расчетливым взглядом. На его губах заиграла садистская усмешка.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 356,
    text:
      `
        — Нет. Казнь — слишком милосердно для ее гордыни. Сорвите с нее шелка. Отныне ее имя — ничто, а ее дом — пепел.
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian_Blood_Smirk.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 357,
    text:
      `
        Регент сделал шаг ко мне. Гвардейцы, державшие меня, прижали к полу, заставляя встать на колени перед тираном. Люциан взглянул на мои белоснежные, трепещущие от страха крылья.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 358,
    text:
      `
        — Ты так гордилась своей аристократкой ангельской семьей, дитя. Посмотрим, как ты запоешь, когда лишишься неба. Палач.
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speakerR: 'Люциан',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Lucian_Blood_Smirk.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 359,
    text:
      `
        — Нет... Нет! Люциан, нет! Только не это! Кастиэль!
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Dirty_Fear.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 360,
    text:
      `
        — ОСТАНОВИТЕСЬ!!! 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    speakerR: 'Кастиэль',
    fullscreenObjectR: require('../../../../Media/Images/SFA/Persons/Castiel_Uniform_Blood_Fear.png'),
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 361,
    text:
      `
        Боль не пришла волной — она ударила сразу, пронзив каждую клетку тела.
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    simple: require('../../../../Media/Audio/SFA/Sounds/Heavy_Axe_Hit_Flesh.mp3'),
    effect: 'Красная вспышка',
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 362,
    text:
      `
        На миг мир исчез, и осталась только огненная вспышка, разрывающая не только плоть, но и саму связь с небом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 363,
    text:
      `
        Сталь палача безжалостно отсекла мои крылья, отнимая последнюю привилегию древнего рода.
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 364,
    text:
      `
        Я захлебнулась собственным криком, падая ничком на окровавленный мрамор.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 365,
    text:
      `
        Сквозь пелену слез и подступающий обморок я видела, как Люциан холодно развернулся и пошел к выходу. Гвардейцы силой потащили Кастиэля прочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 366,
    text:
      `
        В самый последний миг, у самого порога, наши взгляды пересеклись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 367,
    text:
      `
        В его глазах застыли слезы и удушающая вина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 368,
    text:
      `
        В моих — не просто крушение мира, а ледяная пустота, где не осталось ни надежды, ни прошлого, ни имени.
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  },

  {
    id: 369,
    text:
      `
        «В ту ночь благородная леди умерла в огне собственного дома. А из ее пепла родилась невидимая тень, копящая леденящую ярость...»
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('SFA', 'Глава 1', 'Часть 1', '0')
        }
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/SFA/Persons/Evelyn_NightDress_Bloody_NoWings.png'),
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    achievement: { story: EStoriesEn.SFA, name: 'PrologueCompleted' },
    imageBack: require('../../../../Media/Images/SFA/Backgrounds/Main_EstateHall_Fire.jpg')
  }
])
