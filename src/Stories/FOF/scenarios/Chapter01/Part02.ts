import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'
import { choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Солнечные лучи нежно касались моего лица, и, потянувшись, я стала нащупывать свой телефон.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Morning.jpg')
  },

  {
    id: 1,
    text:
      `
        «Почему будильник не сработал? Неужели, какой-то сбой?»
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    darkSilhouette: true,
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Morning.jpg')
  },

  {
    id: 2,
    text:
      `
        Следующее предположение разозлило меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Morning.jpg')
  },

  {
    id: 3,
    text:
      `
        «Или новая домработница вместо уборки посмела тронуть мой телефон?»
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    darkSilhouette: true,
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Morning.jpg')
  },

  {
    id: 4,
    text:
      `
        «Я ей устрою. Только открою глаза…»
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    darkSilhouette: true,
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Morning.jpg')
  },

  {
    id: 5,
    text:
      `
        Стоило мне отойти ото сна, как я осознала, что находилась не дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Morning.jpg')
  },

  {
    id: 6,
    text:
      `
        «Я так надеялась, что все это будет сном, но я ошиблась. Все произошедшее со мной — чистая правда».
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    music: require('../../../../Sounds/FOF/Space.mp3'),
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        Больной и истощенный разум пытался вновь и вновь отыскать разумную причину, оправдание, но не смог.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        Новая жизнь. Запомни: ты больше не будешь Кассандрой. Ты должна измениться.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Незнакомец',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 9,
    text:
      `
        Теперь у тебя новое имя — Эбигейл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Незнакомец',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 10,
    text:
      `
        Старой жизни больше нет — есть только новая жизнь и цель. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speaker: 'Незнакомец',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 280,
    text:
      `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Choice', id: 'RightQuestion' }) >= 1
        },
        goTo: 11
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Choice', id: 'RightQuestion' }) < 1
        },
        goTo: 12
      }
    ],
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        Распорядиться чужой судьбой. И лишь от тебя зависит — справишься или нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Незнакомец',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    stats: [{ story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Shift' }) > statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Constancy' })
        },
        goTo: 13
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Shift' }) < statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Constancy' })
        },
        goTo: 15
      }
    ],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        Казалось, что мое подсознание постепенно привыкало к мысли о том, что магия и все то, во что я ранее не верила — реально. Сейчас я была частью чего-то большего.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    beforeBegin: whiteFlash,
    message: 'Путь перемен',
    music: require('../../../../Sounds/FOF/Main.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        И пусть меня пугает произошедшее, но я справлюсь. Это ведь не труднее интенсивной тренировки.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 15,
    text:
      `
        Мое подсознание все еще пыталось бороться с чужим телом, ведь я не могла просто надеть его, как новый наряд.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    message: 'Путь постоянства',
    music: require('../../../../Sounds/FOF/Main.mp3'),
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        «Кто вообще мог полагать, что я справлюсь, если даже не могу привыкнуть к новому телу? И почему именно я?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        «Но что вообще все это значит? Как я, простая чирлидерша, могу изменить чью-то судьбу? Нет, Ник ошибся». 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 18,
    text:
      `
        «Возможно, если он поймет, что я не подхожу, просто вернет мне мою жизнь? Или попробовать кардинально испортить представление о себе?»
      `,
    buttons: [
      {
        text: 'Быть собой',
        goTo: 19
      },
      {
        text: 'Принять новую жизнь',
        goTo: 22
      },
      {
        text: 'Быть хуже',
        goTo: 25
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        «Я не должна идти против себя, и буду делать то, что посчитаю нужным».
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    message: 'Ты не ценишь сделку, на которую сама согласилась',
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Aunt' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        «Всегда считала, что сделки приносят много проблем. И тетя мне это показала на своем примере».
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 21,
    text:
      `
        «Я покажу этому Нику, кто я такая». 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        «Смириться с новой жизнью трудно, но ведь и я не простая девчонка».
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    message: 'Ты ценишь сделку, на которую сама согласилась',
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Aunt' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        «Тетя меня научила брать ответственность за каждую сделку».
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        «Я не стану распускать нюни, и, если нужно, дам отпор». 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        «Меня окружает много людей, которые избегают сделок. А что такого?»
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    message: 'Неужели ты настолько отчаялась, что готова предать себя?',
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 2, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -2, category: 'Person', id: 'Aunt' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        «Надо просто быть как все. Такой же безответственной и легкомысленной. Это же проще простого!»
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        «Неужели я готова так низко пасть, потерять себя из-за временной трудности?»
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        Стоило хорошенько это обдумать, и я погрузилась в мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 29,
    text:
      `
        «Нет. Я так не могу. Не в моем характере сдаваться и бросать. Я должна смириться, должна. Иначе и быть не может».
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        «Интересно, Кристофер тоже находится в доме? Мне стоит его найти. Но уж точно не в таком виде».
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        Я подошла к шкафу и открыла его в надежде, что мне подготовили что-то подходящее.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 32,
    text:
      `
        И не ошиблась. Там было несколько вещей. Взяв первый попавшийся наряд, я взглянула на него и произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 33,
    text:
      `
        Что это за одежда? Да я бы никогда не купила подобного.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Эбигейл',
    parallax: 'left',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 34,
    text:
      `
        Но какой выбор у меня был? Я не могла снова показаться перед парнем в таком, полуобнаженном виде. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 35,
    text:
      `
        Преодолевая огромное отвращение, я выбрала самое нормальное из того, что висело на вешалке.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 36,
    text:
      `
        В любых обстоятельствах я должна быть красивой.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Эбигейл',
    parallax: 'left',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 37,
    text:
      `
        
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    wardrobe: { story: EStoriesEn.FOF, personId: 'Abigeil', goTo: 38 },
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 38,
    text:
      `
        Так значительно лучше. Теперь я готова исследовать дом.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 39,
    text:
      `
        Открыв дверь своей комнаты, я оказалась в коридоре. Интуитивно стало понятно, куда следует двигаться, чтобы прийти в главный зал.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 40,
    text:
      `
        Мой коттедж отличался от этого дома. Родители, как и тетя, привили мне вкус к изысканным вещам, дорогому ремонту и стилю минимализм. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 41,
    text:
      `
        Поэтому сейчас, глядя на гостиную, наполненную лишним визуальным шумом, мне стало неприятно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 42,
    text:
      `
        Я привыкла отдыхать от обилия информации, но перебор текстиля, картин и статуэток мозолили взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 43,
    text:
      `
        Казалось, они хранили свою историю и торопились рассказать мне больше о своем владельце.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 44,
    text:
      `
        «Так, значит, это дом Кристофера».
      `,
    buttons: [
      {
        text: 'Осмотреть дом',
        goTo: 45,
        gift: true
      },
      {
        text: 'Не осматривать',
        goTo: 58
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 45,
    text:
      `
        Уверена, Кристофер поймет мой интерес и не сильно разозлится, когда узнает, что я немного прогулялась тут.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' },
      { story: EStoriesEn.FOF, value: +1, category: 'Choice', id: 'SeeHouse' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 46,
    text:
      `
        «Я ведь должна знать, где нахожусь». 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 47,
    text:
      `
        «Интересно, какие тайны хранит его дом?»
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 48,
    text:
      `
        Быстро пробежав глазами по большой комнате, я решила подойти к книжной полке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Shelves_Books.jpg')
  },

  {
    id: 49,
    text:
      `
        Там стояли такие шедевры, как: «Белый клык», «Зов предков», «Портрет Дориана Грея», «Война и мир», и прочие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Shelves_Books.jpg')
  },

  {
    id: 50,
    text:
      `
        «Он определенно любит читать качественную литературу».
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Shelves_Books.jpg')
  },

  {
    id: 51,
    text:
      `
        «Ну а чего я ждала от парня из другого мира? Что он будет читать женские романы и фанфики в интернете? Вроде все логично».
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Shelves_Books.jpg')
  },

  {
    id: 52,
    text:
      `
        Я подошла к стеллажу, на котором лежали непонятные камни. Решив рискнуть, взяла один из них в руки, и ощутила холодок вместе со слабым ударом тока.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Shelves_Stones.jpg')
  },

  {
    id: 53,
    text:
      `
        Поспешно осмотрела руку на предмет повреждений, но она оказалась невредимой.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Shelves_Stones.jpg')
  },

  {
    id: 54,
    text:
      `
        «Это что было?»
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Shelves_Stones.jpg')
  },

  {
    id: 55,
    text:
      `
        Решив больше не трогать чужие вещи, я положила его на место. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Shelves_Stones.jpg')
  },

  {
    id: 56,
    text:
      `
        «Наверное не стоит ничего здесь трогать без Криса, а то вдруг здесь хранится какая-то ядреная вещь из другого мира, которая убьет меня?»
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 57,
    text:
      `
        Мысль, конечно, была шуткой, но часть меня ощущала себя здесь не очень уютно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 58,
    text:
      `
        «Наверное не стоит ничего здесь трогать без Криса, а то вдруг здесь хранится какая-то ядреная вещь из другого мира, которая убьет меня?»
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 59,
    text:
      `
        Мысль, конечно, была шуткой, но часть меня ощущала себя здесь не очень уютно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 60,
    text:
      `
        «Правильно говорят, что дом — отражение хозяина. Мой — в разы чище».
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 61,
    text:
      `
        «Хотя, мне ведь и не приходилось убирать. За меня все делает наша домработница, которая приходит к семи утра каждый день».
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 62,
    text:
      `
        Заканчивая осматривать зал, я направилась в соседнюю комнату, чтобы найти Кристофера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 63,
    text:
      `
        Я обошла весь дом, потратив на это пару минут, но парня нигде не было. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 64,
    text:
      `
        «Это к лучшему. Осталось понять, где я нахожусь и покинуть это место».
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 65,
    text:
      `
        «Пусть я и согласилась на сделку, но жить с незнакомцем в доме в непонятном стиле ранчо я уж точно не собираюсь».
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 66,
    text:
      `
        Я подошла к двери, и, с некоторым опасением открыла ее, выходя на улицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 67,
    text:
      `
        «Действительно, этот дом, как и изнутри был деревянным, напоминая, скорее, старый безвкусный сарай. Только панорамные окна придавали хоть какой-то приличный вид». 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 68,
    text:
      `
        «Стоит поскорее убраться отсюда».
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 69
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 69,
    text:
      `
        К счастью, дом находился в черте города, и я без проблем узнала, как добраться до центра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 70,
    text:
      `
        Но основное мое переживание заключалось вовсе не в этом…
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 71,
    text:
      `
        «Куда идти? Дома я показаться не могла, а друзей у меня не было. Что мне оставалось делать?»
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 281,
    text:
      `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) >= 3
        },
        goTo: 72
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) < 3
        },
        goTo: 76
      }
    ],
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 72,
    text:
      `
        «Я даже не могла остаться у Дерека». 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 73,
    text:
      `
        «Ну ничего. Когда-нибудь, надеюсь, я смогу намекнуть ему о том, что со мной произошло». 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 74,
    text:
      `
        «Возможно, расскажу об ужасном кошмаре, где я была в чужом теле…»
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 75,
    text:
      `
        «Но точно не сейчас».
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 76,
    text:
      `
        «Стоило держать при себе то, что со мной случилось. Тем более, мне никто не поверит. Сразу же запрут в психушку».
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 77,
    text:
      `
        И где я могла временно отвлечься, забыть о проблемах? Где я могла снова ощутить себя на высоте, если не в школе?
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Facade.jpg')
  },

  {
    id: 78,
    text:
      `
        Стоя в коридоре школы, я в ступоре смотрела на чужое лицо в зеркале.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    music: require('../../../../Sounds/FOF/Sad.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 79,
    text:
      `
        «Кто эта потерянная девушка?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 80,
    text:
      `
        Теперь она не прежняя Кассандра, которая входила в стены школы, и все замирали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 81,
    text:
      `
        А сейчас все школьники торопились по классам, даже не обращая внимания на ту, кого и без всякого голосования признали своей королевой.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 82,
    text:
      `
        «Моего появления никто не заметил. Словно меня больше не было здесь». 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 83,
    text:
      `
        «Кто ты теперь? Кто я теперь?»
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 84,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/FOF/CutScenes/Part02.mp4'), goTo: 85 },
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 85,
    text:
      `
        В этот момент сзади появился секретарь. Он держал в руках планшет, и, прочистив горло, спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    music: require('../../../../Sounds/FOF/Whisper.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 86,
    text:
      `
        Простите, но я не могу вспомнить ваше лицо. Напомните имя и фамилию, а я сверю данные.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 87,
    text:
      `
        «Я совершенно не была готова к этому. Что я должна сказать?»
      `,
    buttons: [
      {
        text: 'Я случайно оказалась здесь',
        goTo: 88,
        func: () => { timer.stop() }
      },
      {
        text: 'Я здесь учусь вообще-то',
        goTo: 92,
        func: () => { timer.stop() }
      },
      {
        text: 'Я ищу сестру',
        goTo: 98,
        func: () => { timer.stop() }
      },
      {
        text: 'Я новенькая',
        goTo: 103,
        func: () => { timer.stop() }
      }],
    speaker: 'Эбигейл',
    beforeBegin: () => { timer.set(7, () => { scenarioManager.beginScene(88) }) },
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 88,
    text:
      `
        Похоже, я сказала глупость, о чем моментально пожалела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    message: 'Тебе стоило лучше подумать, что ответить',
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 89,
    text:
      `
        Совершенно не умея врать, я выкручивалась как могла.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 90,
    text:
      `
        Искала уборную и заблудилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 91,
    text:
      `
        И почему вы все еще здесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 92,
    text:
      `
        Меня зовут Кас…
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    message: 'Тебе стоило лучше подумать, что ответить',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 93,
    text:
      `
        Я не смогла продолжить, запнулась, уставившись на свое отражение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 94,
    text:
      `
        «Черт, Черт… Я же больше не Кассандра…»
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 95,
    text:
      `
        «И как я могла об этом забыть?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 96,
    text:
      `
        Секретарь смотрел на меня, ожидая ответа.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 97,
    text:
      `
        И почему вы все еще здесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 98,
    text:
      `
        Она забыла тетрадь дома, а у нее сегодня контрольная. Понимаете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    message: 'Тебе стоило лучше подумать, что ответить',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 99,
    text:
      `
        Я должна была выручить сестру, она мне ни раз приносила учебники, когда я их забывала.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 100,
    text:
      `
        И что-то я не вижу у вас тетради.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 101,
    text:
      `
        Так я уже отдала ее.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 102,
    text:
      `
        И почему вы все еще здесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 103,
    text:
      `
        В связи с несчастным случаем на игре, команда ищет новую чирлидершу.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    message: 'Ты смогла подобрать верные слова',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 104,
    text:
      `
        Так ты новенькая?
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 105,
    text:
      `
        Этот мужик меня бесил. Хотелось ответить то, что я думала.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 106,
    text:
      `
        «А ты глухой что-ли?»
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 107,
    text:
      `
        Но, сдержав свои порывы, я произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 108,
    text:
      `
        Да, именно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 109,
    text:
      `
        Я поняла, что иду в нужном направлении и продолжила гораздо смелее:
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 110,
    text:
      `
        Я перевелась из другой школы. Мои документы уже должны были прислать.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 111,
    text:
      `
        Сведений из вашей старой школы нам не поступало.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 112,
    text:
      `
        Какая жалость, видимо, какой-то сбой. Странно, мне сказали, что с сегодняшнего дня я смогу приступить к учебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 113,
    text:
      `
        Секретарь колебался, и, чтобы разжалобить его еще больше, я сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 114,
    text:
      `
        Тогда я подожду. Только жаль, что я пропущу важные предметы и первую тренировку. Какое недоразумение!
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 115,
    text:
      `
        Мои слова возымели нужный эффект, и, глубоко вздохнув, секретарь сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 116,
    text:
      `
        Это совершенно ни к чему. Вы не должны пропускать дисциплины, чтобы потом не наверстывать упущенное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 117,
    text:
      `
        Уверен, ваши данные прибудут с минуты на минуту.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 118,
    text:
      `
        «Да, конечно. Придут».
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 119,
    text:
      `
        Эта ситуация настолько развеселила меня, что я не могла скрывать улыбку на лице, и, закусив губу, продолжила стоять.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 120,
    text:
      `
        Как ваше имя? 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 121,
    text:
      `
        Эбигейл.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 122,
    text:
      `
        Добро пожаловать, Эбигейл. Проходите.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 123,
    text:
      `
        «Пронесло». 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg'),
    beforeBegin: () => {
      resetChoices()
    }
  },

  {
    id: 124,
    text:
      `
        «И что мне делать дальше?» 
      `,
    buttons: [
      {
        text: 'Идти на урок',
        goTo: 125,
        func: () => {
          choiceDone(0)
        }
      },
      {
        text: 'Идти в зал',
        goTo: 135,
        func: () => {
          choiceDone(1)
        }
      },
      {
        text: 'Навестить Дерека',
        goTo: 180,
        func: () => {
          choiceDone(2)
        }
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg'),
    beforeBegin: () => {
      scenarioManager.changeSceneButtonStatus(124, 0, getChoice(0))
      scenarioManager.changeSceneButtonStatus(124, 1, getChoice(1))
      scenarioManager.changeSceneButtonStatus(124, 2, getChoice(2))
    }
  },

  {
    id: 125,
    text:
      `
        Даже не знаю, что я забыла в кабинете географии. Ноги сами привели меня сюда, словно для того, чтобы я могла вспомнить свое прошлое.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    music: require('../../../../Sounds/FOF/Lesson.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 126,
    text:
      `
        Устроившись на предпоследней парте, я решила остаться, хотя это был даже не мой класс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 127,
    text:
      `
        Когда пришел учитель, он энергично начал показывать на экране территории, записывая на доску их географические особенности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 128,
    text:
      `
        Я пыталась отвлечься, но голос с третьих парт и косые взгляды в мою сторону привлекли внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 129,
    text:
      `
        Да ты ее видела?
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'Ученица 1',
    imageFront: require('../../../../Images/FOF/Persons/Girl_Classmate_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 130,
    text:
      `
        Кто она такая? 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Ученица 2',
    imageFront: require('../../../../Images/FOF/Persons/Girl_Classmate_02.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 131,
    text:
      `
        Что она вообще у нас забыла? Класс перепутала?
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Ученица 1',
    imageFront: require('../../../../Images/FOF/Persons/Girl_Classmate_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 132,
    text:
      `
        Новенькая, может?
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Ученица 2',
    imageFront: require('../../../../Images/FOF/Persons/Girl_Classmate_02.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 133,
    text:
      `
        Деревенщина какая-то. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Ученица 1',
    music: require('../../../../Sounds/Common/Silence.mp3'),
    imageFront: require('../../../../Images/FOF/Persons/Girl_Classmate_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 134,
    text:
      `
        Я еле дотерпела до конца урока и вышла из кабинета первая.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Classroom.jpg')
  },

  {
    id: 135,
    text:
      `
        Оказавшись здесь, я снова вспомнила свой последний день, и к каким последствиям он меня привел. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 136,
    text:
      `
        Но мои размышления прервались, когда я увидела на своем месте Эйприл.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 137,
    text:
      `
        Так, девочки, энергичнее, давайте! 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 138,
    text:
      `
        Чарли, ты что, переела? Костюм скоро по швам треснет!  На диету, срочно!
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 139,
    text:
      `
        Сара, ты совсем одеревенела? Где грация?
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 140,
    text:
      `
        Когда тренировка подошла к концу, новоиспеченный лидер сказала, подводя итог:
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 141,
    text:
      `
        Вы справляетесь, но не идеально! Все должно быть на высшем уровне и без осечек. Парням дали второй шанс, и мы просто обязаны поддержать их. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 142,
    text:
      `
        «Вот же сучка! Добилась своего!»
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 143,
    text:
      `
        Кэсси подвела даже своего парня, не говоря уже о команде, но я этого не допущу. Я проконтролирую, чтобы на этот раз все было идеально!
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 144,
    text:
      `
        Только сейчас она обернулась и увидела меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 145,
    text:
      `
        Эй, а ты что здесь забыла? Проваливай. Это частная тренировка.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 146,
    text:
      `
        Кто ты вообще такая? Новая чирлидерша? 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 147,
    text:
      `
        «Стоит ли мне станцевать, чтобы поставить эту мелкую дрянь на место? Или стоит намекнуть? А, может, все же уйти?»
      `,
    buttons: [
      {
        text: 'Остаться и станцевать',
        goTo: 148
      },
      {
        text: 'Намекнуть',
        goTo: 157
      },
      {
        text: 'Уйти',
        goTo: 173
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 148,
    text:
      `
        «Пытается быть мной, но у нее не выйдет».
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    music: require('../../../../Sounds/FOF/Show.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 300,
    text:
      `
        Включив музыкальный центр, я начала повторять ранее изученные движения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 149,
    text:
      `
        «Я учила их полгода, и ни о каких ошибках и речи быть не может».
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 150,
    text:
      `
        Но это тело подводило меня, и, вместо плавных движений у меня получались резкие, оборванные моменты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 151,
    text:
      `
        Вместо привычных аплодисментов я услышала смех девушек, которые смотрели на меня как на посмешище.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    music: require('../../../../Sounds/FOF/Whisper.mp3'),
    simple: require('../../../../Sounds/FOF/Laugh_Girls.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 152,
    text:
      `
        «И почему я раньше об этом не подумала?»
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 153,
    text:
      `
        Эйприл сама не сдержала эмоций, и рассмеялась, сказав:
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 154,
    text:
      `
        Вот, девочки, что происходит с теми, кто мало занимается спортом. Такие парни как Дерек ценят гибкость не только в уме, но и в теле. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    simple: require('../../../../Sounds/FOF/Laugh_Girls.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 155,
    text:
      `
        Команда снова рассмеялась, а я поспешила убраться, испытав дикое унижение.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    simple: require('../../../../Sounds/FOF/Laugh.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 156,
    text:
      `
        «Дура! Дура! Какая же я идиотка! Как же я могла забыть о том, что я больше не Кассандра! В чем теперь мои преимущества?».  
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    achievement: { story: EStoriesEn.FOF, name: 'Loser' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 157,
    text:
      `
        Нет, я не чирлидерша. Навряд ли я должна вступать в команду после того, что я о вас слышала.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    message: 'Похоже, девушки еще долго будут сплетничать о том, кто ты такая',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 158,
    text:
      `
        И что же ты слышала?
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 159,
    text:
      `
        Вы уронили своего капитана.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 160,
    text:
      `
        Девушки начали шептаться, а Эйприл, гордо задрав нос, ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 161,
    text:
      `
        Увы, как лидер нас тренировала, то и получила. Но я не подведу никого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 162,
    text:
      `
        «Она еще смеет обвинять меня в некомпетентности этих идиоток?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 163,
    text:
      `
        «Раньше бы она никогда не посмела так нагло выражаться при мне. Неужели, голосок прорезался?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 164,
    text:
      `
        «Сейчас мы и посмотрим, чего ты стоишь».
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 165,
    text:
      `
        Ты долго забиралась на вершину, но падать будешь еще быстрее, Эйприл.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 166,
    text:
      `
        Не знаю, кто ты такая и чего хочешь, но тебе стоит убраться отсюда. Здесь не проходной двор.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 167,
    text:
      `
        Кто она такая? 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speaker: 'Болельщица 1',
    imageFront: require('../../../../Images/FOF/Persons/Girl_Classmate_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 168,
    text:
      `
        Откуда она знает?
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Болельщица 2',
    imageFront: require('../../../../Images/FOF/Persons/Girl_Classmate_02.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 169,
    text:
      `
        Чтобы хоть как-то напомнить девушкам о своем присутствии, Эйприл хлопнула в ладоши и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 170,
    text:
      `
        Все, девушки. Отдохнули и хватит. Пора вернуться к тренировке.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 171,
    text:
      `
        Я покинула зал, а за спиной еще раздавались сплетни и вопросы, касательно моей персоны.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 172,
    text:
      `
        «Похоже, я начинаю привыкать к тому, что я — больше не прежняя я. Хотя соблазн старой жизни все еще заставляет ощутить вкус победы над такими недоумками, как Эйприл».
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 173,
    text:
      `
        Нет. Ошиблась поворотом.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    music: require('../../../../Sounds/FOF/Whisper.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 174,
    text:
      `
        Вот и правильно. Устроили здесь проходной двор. Стоит поговорить с тренером по этому поводу.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 175,
    text:
      `
        Эйприл хлопнула в ладоши и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 176,
    text:
      `
        Все, девушки. Отдохнули и хватит. Пора вернуться к тренировке.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 177,
    text:
      `
        Я покинула зал, оставшись незамеченной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 178,
    text:
      `
        «Похоже, я начинаю привыкать к тому, что я — больше не прежняя я. Хотя соблазн старой жизни все еще заставляет ощутить вкус победы над такими недоумками, как Эйприл».
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 179,
    text:
      `
        Я снова оказалась в коридоре.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    simple: require('../../../../Sounds/FOF/Whisper.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 180,
    text:
      `
        Я долго думала, где могу его найти, и на ум пришло одно место. 
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 181,
    text:
      `
        «Возможно, он на поле?»
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 182,
    text:
      `
        Я была права: Дерек был вместе с футболистами.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    music: require('../../../../Sounds/FOF/FootballField.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 183,
    text:
      `
        Передо мной мелькнула блондинистая голова, и Эйприл, пробежав мимо, начала вешаться на парня.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    music: require('../../../../Sounds/FOF/FootballField.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 184,
    text:
      `
        «Как же она готова унижаться, лишь бы окончательно заполучить мою жизнь». 
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 185,
    text:
      `
        Дерек мимолетно провел уставшим взглядом по мне, и принял заботу Эйприл.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 186,
    text:
      `
        Я знаю, как тебе сейчас тяжело, милый, но мы вместе, не забывай.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 187,
    text:
      `
        Мои девочки созданы для того, чтобы помогать тебе и твоим парням.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 188,
    text:
      `
        Мы обязательно покажем класс на игре в конце учебного года. Обещаю, милый.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April_Form.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 189,
    text:
      `
        Она вешалась на нем, как ручная обезьянка, пока он, словно отрешенный, принимал ее объятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 190,
    text:
      `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) <= 2
        },
        goTo: 191
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) >= 3
        },
        goTo: 193
      }
    ],
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 191,
    text:
      `
        «Наверное, после того, как он подло бросил меня прямо в больнице, это ожидаемый итог». 
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 192,
    text:
      `
        «Они определенно друг друга стоят». 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 193,
    text:
      `
        «Как он может терпеть ее? Я же помню, что он поддерживал меня в больнице. Как он может сейчас искать утешения в ее руках?»
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    music: require('../../../../Sounds/FOF/Sad.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 194,
    text:
      `
        «Неужели, пока я в коме, ему позволено развлекаться с другими? Как он мог так поступить с нами?»
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 301,
    text:
      `
        Это был больной удар под дых. Грудь сковала обида, я не могла вдохнуть, видя то, что Дерек не отталкивает мою соперницу.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 195,
    text:
      `
        Я осознала, что вернуться в школу было ошибкой: многое теперь не зависело от меня. Пробираясь через учеников, я ненароком стала свидетелем разговора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    music: require('../../../../Sounds/FOF/Sad.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 196,
    text:
      `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Respect' }) >= 14
        },
        goTo: 197
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Respect' }) <= 13
        },
        goTo: 201
      }
    ],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 197,
    text:
      `
        Жаль Дерека, он ведь убит морально.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    message: 'Путь высокого уважения',
    speaker: 'Ученик 1',
    imageFront: require('../../../../Images/FOF/Persons/Boy_Classmate_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 198,
    text:
      `
        Да, ему трудно пришлось. Он никак не может прийти в себя после того инцидента. Да и с девушкой проблемы.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Ученик 2',
    imageFront: require('../../../../Images/FOF/Persons/Boy_Classmate_02.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 199,
    text:
      `
        Их отношения — даже если они были настоящие — не наше дело. Но Кассандра и правда сделала все на высшем уровне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Ученик 1',
    imageFront: require('../../../../Images/FOF/Persons/Boy_Classmate_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 200,
    text:
      `
        Да, ее выступление никто не переплюнет. Жаль, девушки не справились с поддержкой. Неизвестно, что ждет команду теперь.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Ученик 2',
    imageFront: require('../../../../Images/FOF/Persons/Boy_Classmate_02.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 201,
    text:
      `
        Жаль Дерека, он ведь убит морально.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    message: 'Путь низкого уважения',
    speaker: 'Ученик 1',
    imageFront: require('../../../../Images/FOF/Persons/Boy_Classmate_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 202,
    text:
      `
        Да, ему трудно пришлось. Он никак не может прийти в себя после того инцидента. Да и с девушкой проблемы.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speaker: 'Ученик 2',
    imageFront: require('../../../../Images/FOF/Persons/Boy_Classmate_02.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 203,
    text:
      `
        Их отношения — даже если они были настоящие — не наше дело. Но Кассандра и правда перечеркнула всю судьбу Дерека.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Ученик 1',
    imageFront: require('../../../../Images/FOF/Persons/Boy_Classmate_01.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 204,
    text:
      `
        Да, выступление было отстой. Лидером она была никаким. Вот ее команда и не справилась с поддержкой. Кто знает, может новая чирлидерша лучше себя проявит?
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Ученик 2',
    imageFront: require('../../../../Images/FOF/Persons/Boy_Classmate_02.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 205,
    text:
      `
        Я поспешила уйти в уборную, чтобы остаться одной. Этот день был наполнен самыми ужасными событиями, от которых я не могла отойти.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 206,
    text:
      `
        «Одноклассницы обсуждали меня, обозвали деревенщиной даже не подозревая о том, что вырыли себе яму!»
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    music: require('../../../../Sounds/FOF/Sad.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 207,
    text:
      `
        «Да кто они такие, чтобы так разговаривать со своей королевой?»
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 208,
    text:
      `
        Сейчас я была зла. Моя жизнь рушилась на осколки, а я никак не могла это исправить.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 209,
    text:
      `
        «Я наивно думала, когда вернусь к своей жизни, то все будет хорошо. Как же я ошиблась!»
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 210,
    text:
      `
        Ошиблась…
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 211,
    text:
      `
        Чужое присутствие за спиной не осталось незамеченным и я быстро пришла в себя, готовясь выставить любую идиотку за дверь, лишь бы сейчас побыть одной…
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 212,
    text:
      `
        Скрыть свои подростковые изменения кожи лица пудрой сможешь и в зеркале у входа, а сейчас…
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 213,
    text:
      `
        Я развернулась, чтобы одним взглядом унизить нахалку, как это было и раньше, и увидела…
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 214,
    text:
      `
        Что ты вообще здесь делаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 215,
    text:
      `
        Я прокричала от горя, которое захлестнуло меня с головой: 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 216,
    text:
      `
        А что мне еще делать, а?
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 217,
    text:
      `
        На удивление, он был спокоен. Даже чересчур. И, не поддаваясь эмоциям, холодно ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 218,
    text:
      `
        Не кричи, а то сочтут сумасшедшей. Только ты можешь меня видеть.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    stats: [
      { story: EStoriesEn.FOF, value: 0, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 219,
    text:
      `
        Не могу поверить! Виновник моих кошмаров наяву.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 220,
    text:
      `
        Так вот ты. Появился наконец.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 221,
    text:
      `
        Я не мог оставить тебя одну. Как ты? 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 222,
    text:
      `
        Его холодный взгляд голубых глаз и такой же равнодушный голос вызывали во мне волну негодования.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 223,
    text:
      `
        Как я? 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 224,
    text:
      `
        «Стоит ли сказать правду или показать слабость, соврав? Или стоит вообще сменить тему?»
      `,
    buttons: [
      {
        text: 'Сказать правду',
        goTo: 225
      },
      {
        text: 'Соврать',
        goTo: 234
      },
      {
        text: 'Сменить тему',
        goTo: 245
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 225,
    text:
      `
        Меня переселили в чужое тело, я очнулась в совершенно незнакомом месте, полуобнаженная, с парнем, который пялился на меня, словно похотливое животное!
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    message: 'Твое самообладание приятно удивляет. Ник ценит твою искренность',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 226,
    text:
      `
        Я… я…
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 227,
    text:
      `
        Паника овладевала мной, дыхание сбивалось от пережитых эмоций, пока я старалась глубоко дышать.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 228,
    text:
      `
        Призрак смотрел на меня с нескрываемым сочувствием, и мне было приятно, что он хотя бы не издевается как Крис.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 229,
    text:
      `
        Я даже не могу представить, что ты сейчас чувствуешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 230,
    text:
      `
        Но теперь я буду рядом. Я помогу тебе справиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 231,
    text:
      `
        Поможешь?
      `,
    buttons: [
      {
        text: 'Спасибо, Ник',
        goTo: 232
      },
      {
        text: 'Здесь ты и себе не в состоянии помочь',
        goTo: 233
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 232,
    text:
      `
        Ты ведь и не обязан помогать, не обязан говорить теплые слова. Но спасибо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 233,
    text:
      `
        Справлялась сама, и сейчас — не исключение. Я разберусь без помощи призрака.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 234,
    text:
      `
        Я справляюсь. Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    message: 'Ник разочарован в тебе. Он рассчитывал, что ты сможешь все понять без истерик',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick' },
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 235,
    text:
      `
        Казалось, та стена, которую я построила, защищаясь от мира, не позволяла мне самой выплеснуть эмоции.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 236,
    text:
      `
        Я пытаюсь помочь, почему ты не хочешь довериться мне?
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 237,
    text:
      `
        Его слова стали волной, которые вызвали во мне цунами.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 238,
    text:
      `
        Именно из-за тебя я здесь! Ты виноват в том, что моя жизнь теперь похожа на игру на выживание.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 239,
    text:
      `
        Я не могу даже домой пойти! А ты просишь меня довериться тебе? Призраку? Ну уж нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 240,
    text:
      `
        Я даже не могу представить, что ты сейчас чувствуешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 241,
    text:
      `
        Но теперь я буду рядом. Я помогу тебе справиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 242,
    text:
      `
        Поможешь?
      `,
    buttons: [
      {
        text: 'Спасибо, Ник',
        goTo: 243
      },
      {
        text: 'Здесь ты и себе не в состоянии помочь',
        goTo: 244
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 243,
    text:
      `
        Ты ведь и не обязан помогать, не обязан говорить теплые слова. Но спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 244,
    text:
      `
        Справлялась сама, и сейчас — не исключение. Я разберусь без помощи призрака.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 245,
    text:
      `
        Я не хочу говорить о том, что я испытываю. Думаю, ты и сам понимаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 246,
    text:
      `
        Тебе нужно выговориться. Не стоит держать все в себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 247,
    text:
      `
        Уж поверь мне, Ник, если я выговорюсь, ты вообще исчезнешь!
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 248,
    text:
      `
        Я могу помочь тебе выплеснуть эмоции.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 249,
    text:
      `
        Помочь?
      `,
    buttons: [
      {
        text: 'Спасибо, Ник',
        goTo: 250
      },
      {
        text: 'Здесь ты и себе не в состоянии помочь',
        goTo: 251
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 250,
    text:
      `
        Ты ведь и не обязан помогать, не обязан говорить теплые слова. Но спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 251,
    text:
      `
        Справлялась сама, и сейчас — не исключение. Я разберусь без помощи призрака.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 252,
    text:
      `
        Мне было не по силам держать все в себе, но я не могла позволить себе плакать. Я пыталась сдержаться и закрыла глаза, до боли впиваясь ногтями в ладонь.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 253,
    text:
      `
        Почувствовав, что слабость отступает, а на ее место приходит злость, я открыла глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 254,
    text:
      `
        Казалось, взгляд Ника изменился, и, подойдя в плотную ко мне, он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 255,
    text:
      `
        Мы должны как можно быстрее покинуть это место. Здесь небезопасно находиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  },

  {
    id: 256,
    text:
      `
        О чем ты говоришь? Мне угрожает опасность?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('FOF', 'Глава 1', 'Часть 3', '0')
        }
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    achievement: { story: EStoriesEn.FOF, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Women_Toilet.jpg')
  }
])
