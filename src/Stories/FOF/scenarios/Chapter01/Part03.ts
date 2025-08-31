import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Часть 3', code: '0' }, [
  {
    id: 0,
    text:
      `
        И долго ты будешь молчать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/FOF/Forest.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 1,
    text:
      `
        Я терпела твое присутствие на людях, но теперь мы наконец можем поговорить, Ник.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 2,
    text:
      `
        Ты сказал, что там было опасно? Что ты имел в виду?
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 3,
    text:
      `
        Это тело…
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 4,
    text:
      `
        Призрак с нескрываемой грустью изучил меня взглядом, отчего мне стало…
      `,
    buttons: [
      {
        text: 'Любопытно',
        goTo: 5
      },
      {
        text: 'Все равно',
        goTo: 6
      },
      {
        text: 'Неприятно',
        goTo: 7
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 5,
    text:
      `
        «Интересно, почему он так смотрит? Неужели, она ему симпатична? Но мне приятно его внимание».
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    message: 'Тебе нравится внимание Ника',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 6,
    text:
      `
        «Мы просто незнакомцы. Вот и все. Поглядывание в мою сторону — это нормально, наверное».
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    message: 'Тебе безразлично внимание Ника',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 7,
    text:
      `
        «И почему он так пялится? Мне жутко некомфортно от его внимания».
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    message: 'Тебе неприятно внимание Ника',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 8,
    text:
      `
        Призрак, словно очнувшись ото сна, перевел взгляд перед собой и продолжил мысль:
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 9,
    text:
      `
        ...очень могущественное. И ты не представляешь, насколько.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 10,
    text:
      `
        То есть я опасна?
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 11,
    text:
      `
        В школе твои эмоции вышли из-под контроля, и я опасался, что ты можешь обрушить на учеников гнев.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 12,
    text:
      `
        Я усмехнулась, представляя эту картину, и подумала:
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 13,
    text:
      `
        «Если бы я была всесильной, то что я сделала бы?»
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 14,
    text:
      `
        «Неплохо было бы…»
      `,
    buttons: [
      {
        text: 'Поджечь волосы Эйприл',
        goTo: 15
      },
      {
        text: 'Вернуться домой, позабыв о сделке',
        goTo: 18
      },
      {
        text: 'Узнать больше о магии',
        goTo: 20
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 15,
    text:
      `
        «Да, с удовольствием воспользовалась бы силой и подожгла волосы Эйприл. Посмотрела бы я, как эта идиотка начала бегать и кричать». 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 16,
    text:
      `
        Мне даже удалось улыбнуться впервые за все это смутное время.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 17,
    text:
      `
        «Это было бы весело. Увидеть бы ее лицо после этого. А то в последнее время она слишком довольная».
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 18,
    text:
      `
        «Да, пожалуй, я бы разорвала сделку и вернулась в свое прекрасное тело. Мне надоело играть роль спасительницы. Это — не мое». 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 19,
    text:
      `
        «Если и использовать силу, то только ради себя и своей выгоды».
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 20,
    text:
      `
        «Раньше я не верила в магию, считая ее лишь фокусом в чужих ловких руках. Но теперь, столкнувшись с ней лицом к лицу, я понимаю, что магия есть». 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 21,
    text:
      `
        «Это так удивительно, интересно, что я смогу сделать? На что я способна?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 22,
    text:
      `
        Прежде всего, сила — это не игрушка, Кассандра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 23,
    text:
      `
        «Так странно… Раньше я не придавала значения своему имени, а теперь, услышав его, мне стало грустно». 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 24,
    text:
      `
        Что-то во мне всколыхнулось. Тоска по своей жизни?
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 25,
    text:
      `
        А сам говорил, что я больше не Кассандра. Так почему обращаешься так? 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 26,
    text:
      `
        Потому что в каком бы теле ты ни была, для меня ты лишь Кассандра. Эбигейл — притворство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 27,
    text:
      `
        Мы шли по лесной дороге, и призрак ловко выбирал удобную тропу для прогулки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 28,
    text:
      `
        «Раньше я бы никогда не пошла в подобное место с незнакомцем, а теперь иду в самую чащу леса с неосязаемым парнем». 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 29,
    text:
      `
        «Как необычно… Ему же без разницы, как идти, он же призрак. Старается ради меня?»
      `,
    buttons: [
      {
        text: 'Обойдусь без его заботы',
        goTo: 30
      },
      {
        text: 'Он обязан так поступать со мной',
        goTo: 31
      },
      {
        text: 'Предусмотрительно',
        goTo: 32
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 30,
    text:
      `
        «Мне все равно, пусть он хоть ведет по самым зарослям. Лишь бы мы быстрее пришли к этому чертову месту».
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    message: 'Похоже, тебе все равно на заботу, которую проявляет Ник',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 31,
    text:
      `
        «Он сам притащил меня сюда, так пусть и обеспечит мне комфорт и безопасность».
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    message: 'Похоже, ты слишком высокого мнения о себе',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick' },
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 32,
    text:
      `
        «Приятно, что он думает не только о себе».
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    message: 'Тебе не все равно на заботу, которую проявляет Ник',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 33,
    text:
      `
        Мы должны начать тренироваться, чтобы ты как можно быстрее открыла свою силу.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 34,
    text:
      `
        Да, и кстати, очень удобно, что ты не упомянул о том, что я попаду в тело ведьмы.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 35,
    text:
      `
        Время было ограничено.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 36,
    text:
      `
        Ну так теперь у нас его просто куча. Скажешь, наконец, что мне нужно сделать? Подробно, конкретно, если тебе известны эти слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 37,
    text:
      `
        Для начала, ты научишься колдовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 38,
    text:
      `
        «Похоже, он просто мастер слов».
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 39,
    text:
      `
        Как лаконично.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 40,
    text:
      `
        Прямо реально колдовать? Ты научишь меня? Звучит…
      `,
    buttons: [
      {
        text: 'Круто ',
        goTo: 41
      },
      {
        text: 'Как удел плохих фильмов',
        goTo: 42
      },
      {
        text: 'Ужасно',
        goTo: 43
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 41,
    text:
      `
        Всегда было интересно, каково это, быть ведьмой? Варить любовные зелья, наказывать обидчиков, иметь фамильяра — это весело.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 42,
    text:
      `
        Никогда не нравились фильмы, где люди лезут в потустороннее. От этого и начинаются все проблемы.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 43,
    text:
      `
        Никогда не понимала, как люди могут развивать это… ремесло? Сношения с дьяволом, жертвоприношения — это отвратительно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 44,
    text:
      `
        Ты мыслишь стереотипами. Магия, прежде всего — ответственность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 45,
    text:
      `
        Ты обратился по адресу. Перед тобой капитан чирлидерш.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 46,
    text:
      `
        Ник быстро взглянул на меня, и я поняла, что означал его взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 47,
    text:
      `
        Ладно, бывший капитан, но это не отменяет того факта, что я внимательная и ответственная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Forest.jpg')
  },

  {
    id: 48,
    text:
      `
        Мы остановились на поляне, неизвестно где. Я стала осматриваться, позабыв, откуда именно мы пришли.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 49,
    text:
      `
        «Ну и глушь. Надеюсь, одной мне не придется возвращаться». 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 50,
    text:
      `
        «Я даже не запомнила, куда идти. Черт».
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 51,
    text:
      `
        Призрак смотрел мне в глаза, и, растерявшись от его жеста, я отвернулась, рассматривая ближайшее дерево.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 52,
    text:
      `
        Его взгляд был слишком холодным, и раньше я не испытывала подобного. Кажется, он способен проникать в душу и выворачивать ее наизнанку.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 53,
    text:
      `
        «Если здесь он только призрак и уже способен одним взглядом провернуть такое, то на что он способен там, в другом мире?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 54,
    text:
      `
        «Боюсь даже представить…»
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 55,
    text:
      `
        Здесь я лишь призрак, тень, и я не смогу воздействовать на твою силу. Но я могу направлять тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 56,
    text:
      `
        Спрятав страх глубоко внутри, я оживилась и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 57,
    text:
      `
        Отлично, начнем?
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 58,
    text:
      `
        Вначале озвучу правила. Раньше ты была капитаном, и понимаешь, насколько важно, чтобы все слушали лидера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 59,
    text:
      `
        Я не хотела в очередной раз слышать то, что слушала ранее, когда только вступила в группу поддержки.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 60,
    text:
      `
        Именно поэтому я так отчаянно добивалась того, чтобы стать лидером.
      `,
    buttons: [
      {
        text: 'Вспомнить',
        goTo: 61,
        gift: true
      },
      {
        text: 'Не вспоминать',
        goTo: 112
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 61,
    text:
      `
        Тогда я была просто школьницей. И я сразу же претендовала на титул королевы бала, ведь это огромный плюс к самооценке и популярности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 62,
    text:
      `
        И все было под контролем, пока секретарь не пригласил меня к себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 63,
    text:
      `
        Здравствуйте. Вы хотели меня видеть?
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_Shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 64,
    text:
      `
        Мужчина медленно и несколько лениво отложил документы, и, положив руки на стол, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 65,
    text:
      `
        Кассандра Свон. Мы получили вашу заявку на титул «Королевы Бала».
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 66,
    text:
      `
        Да, все верно. Есть проблемы?
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_Shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 67,
    text:
      `
        Я стояла перед ним прямо, не показывая заинтересованности в нашем разговоре. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 68,
    text:
      `
        В соответствии с требованиями, на этот титул могут претендовать студентки, у которых средний балл не менее 4,6. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 69,
    text:
      `
        Мне было все равно, ведь успеваемость была одной из самых лучших в школе, пускай я и не была зубрилой в очках.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 70,
    text:
      `
        И те, кто имеют выдающуюся внешкольную деятельность.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 71,
    text:
      `
        Это ведь было необязательным требованием? Когда правила изменились?
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_Shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 72,
    text:
      `
        Школьный совет принял решение, что истинная «Королева бала» должна быть успешной девушкой, которая сможет наставлять юных учениц на верный путь.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 73,
    text:
      `
        Здесь мало быть красивой, Кассандра. Важно быть всесторонне развитой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 74,
    text:
      `
        То есть мой средний балл 4,6 — это уже недостаточно? Мои дипломы и благодарственные письма с олимпиад — это ничто?
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_Shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 75,
    text:
      `
        И теперь вы сообщаете, что какие-то внеклассные кружки встают между мной и моей мечтой?!
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_Shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 76,
    text:
      `
        Безусловно, они показывают, что вы очень способная девушка. Но без внешкольных занятий вы не сможете стать королевой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 77,
    text:
      `
        Он протянул мне листок, который лежал перед ним, и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 78,
    text:
      `
        Вот список доступных внешкольных кружков. Ознакомьтесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 79,
    text:
      `
        Я лениво пробежалась взглядом по написанному, не испытывая страсти ни к одному из предложенных вариантов.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Images/FOF/Objects/Paper.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 80,
    text:
      `
        Советую вам записаться в любой кружок, и развивать свои умения. Что вам больше подходит?
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Секретарь',
    imageFront: require('../../../../Images/FOF/Persons/Secretary.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 81,
    text:
      `
        Именно тогда я и выбрала для себя хобби. Мне было все равно, куда идти, ведь, как я раньше считала, что никогда не полюблю этот вид спорта.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Secretary_Cabinet.jpg')
  },

  {
    id: 82,
    text:
      `
        Так оно и было. На первой тренировке я познакомилась с Джессикой Милз — нашим капитаном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 83,
    text:
      `
        Эта девушка была мечтой всех парней: ее талия была настолько узкой, что многие сомневались в ее натуральности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 84,
    text:
      `
        Девушка была максимально гибкой, что парни просто восхищались, когда та делала сальто и приземлялась на шпагат.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 85,
    text:
      `
        Да, она была отличницей, с идеальной фигурой, ее родители владели известной фирмой. И, естественно, своей дочери ни в чем не отказывали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 86,
    text:
      `
        Она часто хвасталась летними путешествиями, фото со звездами на закрытых вечеринках, и многие девушки просто ненавидели ее.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 87,
    text:
      `
        Ненавидели, потому что в тайне каждая из них хотела быть ей — Джессикой Милз.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 88,
    text:
      `
        Она никогда не вступала в конфликт, но на всех смотрела свысока. Всякий раз могла подколоть из-за якобы лишнего веса, этим доводя девочек до голода и обмороков.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 89,
    text:
      `
        Ой, девочки, я так устала отдыхать… Знали бы вы, как это утомительно! Эти парни вообще непонятные, даже отдыхать спокойно не дают.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 90,
    text:
      `
        Вечно и норовили пялиться на грудь или залезть под юбку, а на нашем языке даже не говорят, представьте!
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 91,
    text:
      `
        Конечно, мой папочка быстро уладил эту проблему, поставив рядом со мной двух красивых телохранителей.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 92,
    text:
      `
        Хоть они и были сексуальными качками, но такая девушка как я, под охраной, как известная звезда, еще больше привлекали внимания. С этого момента мой отдых был разрушен.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 93,
    text:
      `
        Знаете, я даже завидую вам, девочки. За вами парни не следят, вы ведь ничем не примечательные…
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 94,
    text:
      `
        Хотя я не жалуюсь. Это очень круто, когда можно не заботиться ни о чем, а мои телохранители делают все, что я прикажу: от массажа стоп до похода по бутикам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 95,
    text:
      `
        Ну ладно, теперь я хочу узнать про вас.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 96,
    text:
      `
        И она не спрашивала. Только утверждала, выбирая, кого же на этот раз зацепить.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 97,
    text:
      `
        И вот пришла моя очередь…
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 98,
    text:
      `
        Касси, а ты как провела лето? Неужели, работала на тетю?
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 99,
    text:
      `
        Да, она намеренно забывала имена, чтобы этим унизить человека. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 100,
    text:
      `
        У тети важная сделка, поэтому, да, я была в городе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_Shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 101,
    text:
      `
        Ну да. Знаешь, я крутила роман с одним человеком, который, кстати, оказался известным детективом. Мой личный агент… Это так заводит…
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 102,
    text:
      `
        Ой, снова отвлеклась. Продолжим. Так вот, я попросила узнать про тебя побольше, а то ты совсем ничего не рассказываешь. И я узнала.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 103,
    text:
      `
        От ее слов я не могла пошевелиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 104,
    text:
      `
        «Как она могла узнать? Она затронула запретную тему, и теперь поплатится!»
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_Shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 105,
    text:
      `
        Лучше замолчи, Джессика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Images/FOF/Persons/Cassandra_Shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 106,
    text:
      `
        А то что ты мне сделаешь? Говорила, что отдыхала, но кроме одного острова в детстве нигде и не бывала. Лгунья ты!
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 107,
    text:
      `
        Когда девушки рассмеялись, я ощутила прилив гнева и ярости. Я не могла им позволить вот так влезать в мою жизнь и смеяться!
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    simple: require('../../../../Sounds/FOF/Girl_Giggle.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 108,
    text:
      `
        Касси, принеси мне бутылку с водой со стойки. А, может, стоит нанять тебя на работу? А то, видимо, твоя тетя не слишком богата…
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 109,
    text:
      `
        Не переживай, я не буду скупой: хорошо работай — хорошо заплачу. Глядишь, к лету и сможешь позволить себе отдых на Мальдивах.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speaker: 'Джессика',
    imageFront: require('../../../../Images/FOF/Persons/Jessica.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 110,
    text:
      `
        И я знала, что точно должна стать лидером, сместив эту наглую сучку. Чтобы никто больше не смел смеяться надо мной!
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    simple: require('../../../../Sounds/FOF/Girl_Giggle.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 111,
    text:
      `
        И, спустя пару недель, мне это удалось. Пришлось стать еще большим злом, чем была Джессика, но я заполучила свое место лидера.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    achievement: { story: EStoriesEn.FOF, name: 'DarkPast' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 112,
    text:
      `
        Сейчас я не хотела вспоминать то, что было раньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    music: require('../../../../Sounds/FOF/Forest.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 113,
    text:
      `
        Возможно, я просто скучала даже по тому нелегкому времени, когда я была лишь девушкой из группы поддержки?
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 114,
    text:
      `
        А сейчас? Кем я была? Потерянной душой, которая не может вернуться в свое тело, пока не выполнит сделку…
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 115,
    text:
      `
        Закатив глаза, я ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    music: require('../../../../Sounds/FOF/Forest.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 116,
    text:
      `
        Я понимаю, к чему ты ведешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 117,
    text:
      `
        Тебе нужно беспрекословно слушаться и выполнять то, что я прошу. Не нужно импровизировать.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 118,
    text:
      `
        Я тебя услышала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 119,
    text:
      `
        Хорошо. Тогда начнем. Сядь на землю, скрестив ноги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 120,
    text:
      `
        На траву? Здесь же грязно… С ума сошел?
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 121,
    text:
      `
        Он снова посмотрел на меня пронзительным взглядом и холодно ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 122,
    text:
      `
        Просто садись.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 123,
    text:
      `
        «Если я и дальше буду сопротивляться, это лишь потянет время. Надо быстрее закончить».
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 124,
    text:
      `
        Хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 125,
    text:
      `
        Я села на землю, предварительно выбрав более удачное место: небольшая возвышенность, покрытая мхом.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 126,
    text:
      `
        Ник повторил за мной, и сейчас мы оба сидели на земле, глядя друг на друга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 127,
    text:
      `
        Что дальше?
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 128,
    text:
      `
        Ты нетерпелива. Для начала, просто слушай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 129,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/FOF/CutScenes/Nick_Abi.mp4'), goTo: 130 },
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 130,
    text:
      `
        Казалось, Ник наслаждался этим, пока я просто медленно сходила с ума.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 131,
    text:
      `
        Я не могла просто сидеть и слушать звуки леса, мне нужно было двигаться.
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 247
      }],
    speaker: 'Эбигейл',
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 132,
    text:
      `
        Залог сильной магии —  холодный рассудок.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 133,
    text:
      `
        Наигранно улыбнувшись, я сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 134,
    text:
      `
        Теперь я понимаю, почему ты такой равнодушный. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 135,
    text:
      `
        Ник как-то по-особенному посмотрел на меня, но что кроется за этим взглядом — я не могла понять.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 136,
    text:
      `
        Какая же ты недалекая.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 137,
    text:
      `
        Разочарование! 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    music: require('../../../../Sounds/FOF/Sad.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 138,
    text:
      `
        Вот что я увидела в его взгляде. Возможно, он считал, что ошибся с выбором человека для сделки и сейчас жалел, но не мог ничего изменить?
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 139,
    text:
      `
        Да ты совсем охренел? Мало того, что в лес утащил на прогулку, так еще и глупой назвал?!
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 140,
    text:
      `
        Нет, это было слишком. Я не могла находиться рядом с тем, кто назвал меня недалекой!
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 141,
    text:
      `
        Единственная моя глупость — согласиться на гребаную сделку с тобой! И я бы поняла, если бы ты хоть попытался помочь — но ты будто тянешь время.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 142,
    text:
      `
        Призрак ничего не ответил.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 143,
    text:
      `
        Молчишь. Так я права? Ты тянешь время? Решил наблюдать за моими мучениями? 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 144,
    text:
      `
        Он шумно выдохнул и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 145,
    text:
      `
        Наверное ты и не такая недалекая, какой кажешься на первый взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 146,
    text:
      `
        «Он сознался! Я была здесь для того, чтобы порадовать его своей безысходностью». 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 147,
    text:
      `
        Ну зашибись! 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 148,
    text:
      `
        Встав на ноги, дрожащим голосом произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 149,
    text:
      `
        Мне не нужна больше твоя помощь!
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 150,
    text:
      `
        Что ты такое говоришь? Кассандра!
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 151,
    text:
      `
        Ощутив ком обиды в горле, я старалась часто дышать, чтобы слезы окончательно не сломили меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 152,
    text:
      `
        Я не знала, куда идти, и шла абсолютно наугад. Да меня это почти и не волновало, ведь везде я была чужой.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 153,
    text:
      `
        Самое ужасное, что я чувствовала его! Не знаю, что это было, но, черт возьми, я ощущала его приближение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 154,
    text:
      `
        Мы словно были магнитами, которые всегда найдут друг друга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 155,
    text:
      `
        Не нужно было оборачиваться, чтобы знать — он следует за мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 156,
    text:
      `
        Не иди за мной, я не хочу тебя видеть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 157,
    text:
      `
        Ты же знаешь, я должен быть рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 158,
    text:
      `
        Если ты и дальше будешь меня преследовать, то я найду способ избавиться от тебя. В конце концов, Крис, как и я можем быть здесь. А ты — лишь тень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 159,
    text:
      `
        Кассандра…
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 160,
    text:
      `
        Я все сказала, призрак. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 161,
    text:
      `
        Ты знаешь, что я не могу оставить тебя одну.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 162,
    text:
      `
        Везде, куда бы ты ни пошла — я буду рядом. Это для твоей же безопасности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 163,
    text:
      `
        Я шла вперед, не разбирая дороги, путаясь в траве и цепляясь обувью за коряги.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 164,
    text:
      `
        Когда окажешься в доме, то оставлю тебя. Позволь хотя бы покажу верную дорогу, иначе заблудишься.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Ник',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 165,
    text:
      `
        Я приняла его помощь, потому что в этом он был прав. Блуждание в неизвестности точно не прибавит настроения.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  },

  {
    id: 166,
    text:
      `
        Он молча провел меня до тропы, с которой виднелся дом.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Facade_Far.jpg')
  },

  {
    id: 167,
    text:
      `
        Я все еще надеялась, что он хотя бы извинится за сказанное ранее…
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Facade_Far.jpg')
  },

  {
    id: 168,
    text:
      `
        Но Ник молчал. Он не сказал мне ни слова, заставляя чувствовать себя идиоткой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Facade_Far.jpg')
  },

  {
    id: 169,
    text:
      `
        «Видимо, не стоило ожидать обыкновенной вежливости от парня из другого мира».
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Facade_Far.jpg')
  },

  {
    id: 170,
    text:
      `
        Больше нам не о чем было говорить, и, не теряя времени, ушла.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Facade_Far.jpg')
  },

  {
    id: 171,
    text:
      `
        Я перестала чувствовать его, и решила проверить, не обманывало ли меня чутье. Обернувшись, поняла, что призрак больше не следил за мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Facade_Far.jpg')
  },

  {
    id: 172,
    text:
      `
        Ощущая себя еще более паршиво, чем после школы, я направилась в дом, где в ванне, на первом этаже, привела себя в нормальный вид.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Facade_Far.jpg')
  },

  {
    id: 173,
    text:
      `
        Открыв дверь, сразу же увидела Кристофера. Веселый парень тут же спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 174,
    text:
      `
        Я уж решил, что ты сбежала.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 175,
    text:
      `
        Не разделяя его поднятого настроения, я ответила совершенно подавленно:
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 176,
    text:
      `
        Ты знаешь, что мне некуда идти.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 177,
    text:
      `
        Парень сощурился, вглядываясь в мое лицо, и уточнил:
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 178,
    text:
      `
        И почему так пессимистично? Что случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 179,
    text:
      `
        «Стоит ли рассказывать Кристоферу то, что произошло сегодня?»
      `,
    buttons: [
      {
        text: 'Рассказать',
        goTo: 180
      },
      {
        text: 'Не рассказывать',
        goTo: 183
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 180,
    text:
      `
        Я кратко пересказала события сегодняшнего дня парню, пока тот слушал с нескрываемой скукой.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    message: 'Крис оценил, что ты решила поговорить с ним',
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Person', id: 'Christopher' },
      { story: EStoriesEn.FOF, value: 1, category: 'Choice', id: 'TellAboutNick' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 181,
    text:
      `
        «Ну и зачем я рассказала ему, если он будто и не слушал?»
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 182,
    text:
      `
        Паршиво, но у меня были деньки и похуже. Как-нибудь потом расскажу.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 183,
    text:
      `
        Я не очень хочу говорить о том, что произошло. Но дело в Нике.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 184,
    text:
      `
        Парень недовольно хмыкнул и равнодушно ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 185,
    text:
      `
        Больно надо.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 186,
    text:
      `
        Пойду к себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 187,
    text:
      `
        Я уже развернулась и пошла в комнату, но Кристофер сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 188,
    text:
      `
        Ник, конечно, потрепал тебя. У меня есть кое-что, что поможет тебе скрыться от него. Хочешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 189,
    text:
      `
        Перспектива спрятаться от призрака меня привлекала.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 190,
    text:
      `
        Он смог заинтересовать меня. Оставив плохие мысли в стороне, я подошла и увидела, как он вертит в руках загадочным предметом.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 191,
    text:
      `
        «Не люблю, когда в любое время меня могут потревожить. Пусть знает свое место».
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 192,
    text:
      `
        Как скрыться? Расскажи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 193,
    text:
      `
        Парень прошел в гостиную, и, держа цепочку в руке, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor.jpg')
  },

  {
    id: 194,
    text:
      `
        Ник больше не сможет почувствовать тебя, пока этот амулет на твоей шее. Держи.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 195,
    text:
      `
        Кристофер ждал, а я не знала, чего он добивался. Но одним кивком головы парень убедил меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 196,
    text:
      `
        Я осторожно приняла украшение из его рук и осмотрела:
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageFront: require('../../../../Images/FOF/Objects/Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 197,
    text:
      `
        «Обыкновенная безделушка. И как он поможет мне спрятаться от Ника?»
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 198,
    text:
      `
        Я стала пытаться застегнуть кулон, но все попытки были тщетны: это тело меня подводило. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 199,
    text:
      `
        Да что же за черт! 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 200,
    text:
      `
        Увидев мои бесконечные попытки, Кристофер безэмоционально спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 201,
    text:
      `
        Тебе помочь?
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 202,
    text:
      `
        «Чертова застежка!»
      `,
    buttons: [
      {
        text: 'Я справлюсь сама',
        goTo: 203
      },
      {
        text: 'Помощь мне не помешает',
        goTo: 208
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 203,
    text:
      `
        Спасибо за предложение, но я справлюсь. Мне не повредит больше понять свое тело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    message: 'Кристофер оценил твое упорство',
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 204,
    text:
      `
        Иногда там невыносимые застежки. Ну как знаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 205,
    text:
      `
        Я никак не могла застегнуть кулон, но упрямо игнорировала помощь парня. Казалось, Кристофера это веселило, и он ждал, когда же я сдамся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 206,
    text:
      `
        Но итог был не в его пользу: я все же смогла застегнуть его, пускай и потратив на это несколько минут.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 207,
    text:
      `
        А ты упрямая. Мне нравится.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 208,
    text:
      `
        Боюсь, сама я не справлюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    message: 'Похоже, Кристофер привлекает тебя',
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' }],
    achievement: { story: EStoriesEn.FOF, name: 'VirginTouch' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 209,
    text:
      `
        Я протянула ему кулон. Парень аккуратно забрал его, проведя рукой по моей ладони.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    music: require('../../../../Sounds/FOF/Christopher.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 210,
    text:
      `
        Кристофер приблизился слишком быстро, и, переводя взгляд с глаз на губы, прошелся по телу, ухмыльнулся и, коснувшись моей шеи, произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 211,
    text:
      `
        Красивой девушке бывает трудно скрыться от назойливых воздыхателей, и я в этом помогу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 212,
    text:
      `
        Пытаясь не думать о том, что едва знакомый парень стоит так близко ко мне, я сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 213,
    text:
      `
        Чутье говорит мне, что ты не от доброты душевной это делаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 214,
    text:
      `
        Кристофер прошептал это слишком тихо, низким голосом, касаясь моего уха:
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 215,
    text:
      `
        Я не рыцарь, и не джентльмен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 216,
    text:
      `
        Парень медленно убирает мои волосы на одну стороны, не стесняясь касаться спины. Я ощущаю его руки на своей шее.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 217,
    text:
      `
        Совсем нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 218,
    text:
      `
        Дыхание сбивается. Я боюсь пошевелиться, чтобы не нарушить ту негу, что витает вокруг нас.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 219,
    text:
      `
        Тогда зачем помогаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 220,
    text:
      `
        Только ради себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 221,
    text:
      `
        Мое тело реагирует на его прикосновения: в мыслях путаются безобразные сценарии, от которых голова идет кругом.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 222,
    text:
      `
        «Что это такое? Почему я так реагирую на него?»
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 223,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) >= 3
        },
        goTo: 224
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) < 3
        },
        goTo: 226
      }
    ],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 224,
    text:
      `
        «А как же Дерек? Что будет с нами?»
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 225,
    text:
      `
        «Почему я чувствую вину перед ним? Или пытаюсь отомстить ему за объятия с Эйприл?»
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Attractive.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 226,
    text:
      `
        Его дыхание усугубляет ситуацию: оно касается моей шеи, вызывая во мне волну мурашек.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 227,
    text:
      `
        Я почти физически ощущаю, как Кристофер ухмыляется, намеренно тянет время, наслаждаясь этим мгновением.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 228,
    text:
      `
        Сердце предательски колотится, а взгляд стремительно бегает по углам комнаты, лишь бы отвлечься от этих ощущений.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 229,
    text:
      `
        Горячие руки парня еле касаются моей шеи, когда он заводит кулон передо мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 230,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/FOF/CutScenes/Chris_Abi.mp4'), goTo: 231 },
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 231,
    text:
      `
        Я ощущаю его приятный аромат, который впечатывается мне в память.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 232,
    text:
      `
        Холодный кулон ложится на грудь, отчего я шумно вздыхаю: контраст температур сводит с ума, и ловлю себя на ошеломляющей мысли:
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 233,
    text:
      `
        «Мне страшно быть рядом с ним, и я опасаюсь, что в один момент вместо кулона на моей шее будет нож в спине». 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 234,
    text:
      `
        «Что за идиотка? Как я могла подумать такое…»
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 235,
    text:
      `
        «Это все нервы».
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 236,
    text:
      `
        Ну вот. Отлично смотрится.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    music: require('../../../../Sounds/Common/Silence.mp3'),
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Item', id: 'Pendant' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 237,
    text:
      `
        И все же почему ты мне помогаешь? Какая тебе с этого выгода?
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 238,
    text:
      `
        Скажем так, не только твоя жизнь изменилась. Я не привык скучать.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 239,
    text:
      `
         Ник — полная зануда, который никогда не будет веселиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 240,
    text:
      `
        А я не люблю, когда мне кто-то мешает.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 241,
    text:
      `
        А вот ты интересный экземпляр. И что-то мне подсказывает, что в тебе есть что-то эдакое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 242,
    text:
      `
        Ты дал мне кулон, чтобы повеселиться?
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Images/FOF/Persons/Abigeil_Pendant.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 243,
    text:
      `
        Да. И чтобы никто нам морали не читал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speaker: 'Кристофер',
    simple: require('../../../../Sounds/FOF/Nick_Giggle.mp3'),
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 244,
    text:
      `
        Будет неприятно, если Ник испортит нам все веселье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 245,
    text:
      `
        Кристофер ухмыльнулся, и, сверкнув карими глазами, спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 246,
    text:
      `
        Что скажешь? Готова повеселиться со мной?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('FOF', 'Глава 1', 'Часть 4', '0')
        }
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    achievement: { story: EStoriesEn.FOF, name: 'Chapter01Part03Completed' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall.jpg')
  },

  {
    id: 247,
    text:
      `
        Птицы, лес, ветер ну и что? Что здесь особенного?
       `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Glade.jpg')
  }
])
