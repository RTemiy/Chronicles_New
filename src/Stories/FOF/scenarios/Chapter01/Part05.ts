import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { redFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Часть 5', code: '0' }, [
  {
    id: 0,
    text:
      `
        Я не могла произнести ни слова, увидев его перед собой. Парень равнодушно прошелся взглядом по мне, словно пребывая в своих грезах.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    ambient: require('../../../../Sounds/FOF/Heartbeat.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 2,
    text:
      `
        …
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 3,
    text:
      `
        «Дерек?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 5,
    text:
      `
        «Раньше он оскорблял тех, кто врезался в него или ненароком толкнул, а теперь никак не отреагировал. Странно…»
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 6,
    text:
      `
        Что-то точно не так!
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 7,
    text:
      `
        И ответ пришел быстро. Дерек определенно был пьян. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 8,
    text:
      `
        От него сильно несло алкоголем. Потухшим взглядом он не замечал ничего вокруг. Сделав от меня шаг в сторону, парень направился в сторону выхода.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 9,
    text:
      `
        И это мгновение промедления стоило дорого: пьяница открыл дверь и, увидев меня, прокричал:
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 10,
    text:
      `
        Вот ты, сука, и попалась. А теперь тебе некуда бежать: я как следует оприходую тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 12,
    text:
      `
        «Здесь много людей, и есть шанс убежать. Что делать?»
      `,
    buttons: [
      {
        text: 'Смешаться с толпой',
        goTo: 13,
        func: () => { timer.stop() }
      },
      {
        text: 'Разобраться самой',
        goTo: 16,
        func: () => { timer.stop() }
      },
      {
        text: 'Позвать на помощь',
        goTo: 19,
        func: () => { timer.stop() }
      },
      {
        text: 'Найти Криса',
        goTo: 21,
        func: () => { timer.stop() }
      }],
    beforeBegin: () => {
      timer.set(7, () => { scenarioManager.beginScene(21) })
    },
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 14,
    text:
      `
        «Люди могут мне помочь. Да и на глазах у всех этот ублюдок не посмеет меня тронуть».
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 16,
    text:
      `
        «Я уже пыталась разобраться с ним одна, и у меня еле получилось спастись». 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    message: 'Произошедшее тебя ничему не учит',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -2, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 17,
    text:
      `
        Нет, это самое плохое решение в жизни. Лучше уж убраться отсюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 19,
    text:
      `
        «Думаю, люди не должны быть равнодушны. И в толпе этот урод меня не тронет». 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 21,
    text:
      `
        «Ему я доверяю куда больше, и, надеюсь, рядом с ним этот урод меня не тронет». 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 23,
    text:
      `
        «Так я и сделаю!»
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 24,
    text:
      `
        Я хотела действовать, но мужик схватил меня за волосы и грубо притянул к себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 26,
    text:
      `
        Набегалась, сладкая? Я как следует накажу тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Пьяный мужик ',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 27,
    text:
      `
        Отпусти!
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 29,
    text:
      `
        Его грязные руки обвили талию, продолжая кошмар наяву. Я не двигалась с места, пока он силой тянул меня обратно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 30,
    text:
      `
        Эй, урод, отпусти девушку. Или ты тупой?
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 31,
    text:
      `
        Дерек стоял позади нас, и, когда мужик развернулся, чтобы посмотреть на того, кто ему угрожал, то тряхнул меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 33,
    text:
      `
        Почувствовав боль, я вскрикнула:
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 34,
    text:
      `
        Ай!
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 35,
    text:
      `
        Я вцепились ему в руку, чтобы эта мразь не вырвала мне волосы, и старалась не противиться его движениям — волочилась за ним как безвольная кукла.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 36,
    text:
      `
        Молокосос, иди куда шёл. Мы сами разберемся.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 37,
    text:
      `
        Я же сказал. Отпусти её. Или такой тупица не понимает слов?
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Дерек ',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 38,
    text:
      `
        А, я понял. Тебе от неё перепадает, да? Но сейчас она моя. Вот «развлечемся», и тогда забирай.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Пьяный мужик',
    imageFront: require('../../../../Images/FOF/Persons/Man.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 39,
    text:
      `
        Он развернул меня, и, отпустив волосы, поднял за подбородок, грубо усмехнулся своим грязным мыслям, приближаясь омерзительными губами.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 40,
    text:
      `
        Я готова была плюнуть в него, но никогда бы не позволила этому случиться. Никогда! 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 41,
    text:
      `
        Но тут мужик упал от удара по лицу, я успела отбежать в сторону, а позади массивной туши стоял Дерек.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 42,
    text:
      `
        Парень небрежно поправил толстовку и сказал, глядя на мужика:
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 43,
    text:
      `
        Он скоро очнется. Не рекомендую оставаться здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 44,
    text:
      `
        Мы вышли на улицу вместе, но я не знала, зачем последовала за ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    music: require('../../../../Sounds/FOF/Sad.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 45,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) >= 4
        },
        goTo: 47
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) <= 3
        },
        goTo: 49
      }
    ],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 47,
    text:
      `
        Мне было больно видеть его разбитым, потерявшим надежду парнем. Тем, кто коротал свое время здесь — в клубе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 49,
    text:
      `
        Странно было видеть его здесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 51,
    text:
      `
        «Вначале он подло бросил меня в больнице, потом обнимался с Эйприл, а теперь строит из себя рыцаря?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 53,
    text:
      `
        Но все же я была рада, его присутствию. Страшно представить, как бы закончился вечер, не вступись Дерек за меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 54,
    text:
      `
        Если бы не ты…
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 55,
    text:
      `
        Я посмотрела на него: темные круги под глазами выделялись на молодом лице. Не чувствовалось и следа того максимализма, который преобладал в школе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 56,
    text:
      `
        Сейчас Дерек был другим, и открывался с новой стороны, что меня безусловно…
      `,
    buttons: [
      {
        text: 'Радовало',
        goTo: 58
      },
      {
        text: 'Не волновало',
        goTo: 60
      },
      {
        text: 'Напрягало',
        goTo: 62
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 58,
    text:
      `
        «И мне интересно, каким же еще может быть этот удивительный парень?»
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    message: 'Тебе нравится видеть настоящего Дерека',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 60,
    text:
      `
        «Все люди носят маски, и то, что Дерек меняется — неудивительно. Да и какое мне дело?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    message: 'Тебе все равно на Дерека',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 62,
    text:
      `
        «Это же странно. В школе он ведет себя одним образом, здесь — другим. Так какой же ты настоящий, Дерек? Или ты играешь в свою игру?»
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    message: 'Тебе не нравятся перемены в Дереке',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 65,
    text:
      `
        Вопреки своим мыслям, я нарушила тишину из любопытства и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 66,
    text:
      `
        Почему ты мне помог?
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 67,
    text:
      `
        Мне хотелось сказать, что тот Дерек, которого я знаю, никогда не был таким благородным. Но я не могла этого сделать, чтобы не выдать себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 68,
    text:
      `
        Не принимай на свой счёт, дни выдалось ужасные, и я хотел выплеснуть гнев. А этот ублюдок это заслужил.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 69,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) >= 5
        },
        goTo: 70
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) <= 4
        },
        goTo: 131
      }
    ],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 70,
    text:
      `
        Может, присядем?
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    message: 'Благодаря хорошим отношениям вам доступна уникальная сцена с Дереком',
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    parallax: 'left',
    achievement: { story: EStoriesEn.FOF, name: 'TeenageLove' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 71,
    text:
      `
        Тело ужасно трясло после происшествия, а Дерек, казалось, был совсем не в состоянии стоять ровно. Мы присели на ближайшую скамейку.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 72,
    text:
      `
        Мне так хотелось снова ощутить его тепло и поддержку, но я знала, что не могу этого сделать.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 73,
    text:
      `
        От этого осознания слезы застилали взор, но, переборов себя, я:
      `,
    buttons: [
      {
        text: 'Решила вернуться в клуб',
        goTo: 75
      },
      {
        text: 'Спросила, что произошло',
        goTo: 79
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 75,
    text:
      `
        «Это огромная ошибка. Сейчас я не хочу быть с ним».
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 77,
    text:
      `
        Спасибо тебе за помощь, но я здесь не одна. Пойду к знакомому.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 78,
    text:
      `
        Парень равнодушно проводил меня взглядом. Казалось, Дереку была необходима поддержка, но я знала, что не была той, кто должен дать ему тепло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 79,
    text:
      `
        А тебе какое дело?
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Дерек ',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 80,
    text:
      `
        Раз так произошло, и ты помог мне, может, и я могу ответить тебе тем же?
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 81,
    text:
      `
        Казалось, парень колебался. Я не стала давить на него, позволяя обдумать все и самому принять решение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 82,
    text:
      `
        Мы молча сидели пару минут, и тут Дерек сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 83,
    text:
      `
        Мое будущее в полной заднице. Семья разочарована, хоть в этом и нет моей вины. А девушка — в коме. И чем ты мне поможешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 84,
    text:
      `
        «Будущее? Насколько мне известно, им же дали шанс на другую игру? И почему семья разочарована?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 86,
    text:
      `
        «Девушка? Значит, он все-таки и правда любит меня, раз говорит обо мне в таком ключе с незнакомкой?»
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 87,
    text:
      `
        Непроизвольно улыбка коснулась моего лица. Надежда о нашем воссоединении все еще грела сердце.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 88,
    text:
      `
        Но слишком много вопросов остались без ответов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 89,
    text:
      `
        «Сомневаюсь, что Дерек откроет мне все свои переживания, хотя, раз он не трезвый, стоит попытаться».
      `,
    buttons: [
      {
        text: 'Стоит',
        goTo: 90
      },
      {
        text: 'Это не мое дело',
        goTo: 128
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 90,
    text:
      `
        Может, расскажешь подробнее, что происходит?
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 91,
    text:
      `
        Казалось, парень боролся с переживаниями, в конце концов, кто я такая, чтобы рассказывать мне свои мысли?
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 92,
    text:
      `
        «Надо его разговорить. Но такие как он не любят болтать просто так».
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 94,
    text:
      `
         «Стоит ли надавить? Парни могут и не уйти от прямых вопросов. Или предложить помощь?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 97,
    text:
      `
        «Скажу, что я психолог и могу помочь разобраться. Или действовать издалека? Может, начать рассказ о себе?»
      `,
    buttons: [
      {
        text: 'Надавить на него',
        goTo: 98,
        func: () => { timer.stop() }
      },
      {
        text: 'Предложить помощь',
        goTo: 103,
        func: () => { timer.stop() }
      },
      {
        text: 'Намекнуть',
        goTo: 112,
        func: () => { timer.stop() }
      },
      {
        text: 'Рассказать о себе',
        goTo: 122,
        func: () => { timer.stop() }
      }],
    beforeBegin: () => {
      timer.set(7, () => { scenarioManager.beginScene(98) })
    },
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 98,
    text:
      `
        Выговоришься — будет легче. На своем опыте знаю. Так что произошло?
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    message: 'Ты не смогла разговорить Дерека',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 100,
    text:
      `
        Дерек смутно посмотрел на меня и отвернулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 101,
    text:
      `
        «Вот черт. Не получилось».
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 103,
    text:
      `
        Я могу помочь. Стану отличным собеседником, дам совет.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    message: 'Ты не смогла разговорить Дерека',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 105,
    text:
      `
        Так ты психолог?
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 107,
    text:
      `
         Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 109,
    text:
      `
        Дерек шумно выдохнул, сцепил руки в замок и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 110,
    text:
      `
        Это тебе помощь нужна, а не мне. Мое состояние требует времени и смирения. Больше не хочу говорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 112,
    text:
      `
        Знаешь, я как никто другой понимаю, каково это, когда твоя жизнь рушится.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    message: 'Ты смогла разговорить Дерека',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 113,
    text:
      `
        Сомневаюсь. Ты же сейчас не с этим уродом.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 114,
    text:
      `
        Но разве только такие уроды ломают жизни? Ломают судьбы?
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 115,
    text:
      `
        Порой предают самые близкие, или те, кому ты доверяешь, а они элементарно не могут....
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 116,
    text:
      `
        ... поддержать в самый ответственный момент.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 117,
    text:
      `
        Когда ты как никогда нуждаешься в поддержке.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 119,
    text:
      `
        Дерек странно посмотрел на меня и кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 120,
    text:
      `
        Ты знаешь, о чем говоришь.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 121,
    text:
      `
        К сожалению, да.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 122,
    text:
      `
        Мне тоже трудно. Вот взять например этого урода…
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    message: 'Ты не смогла разговорить Дерека',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 123,
    text:
      `
        Воспоминания о произошедшем скрутили желудок. Тошнота подступила к горлу, но я заставила себя продолжить:
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 124,
    text:
      `
        Но сейчас я сижу здесь и пытаюсь вытащить информацию из тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 126,
    text:
      `
        Да тебе самой нужна помощь. Обратись к психологу. Я не лучший собеседник.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek_Sweatshot.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 128,
    text:
      `
         «Сомневаюсь, что он вообще будет беседовать с незнакомкой».
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 131,
    text:
      `
        «Я совсем позабыла про время! Надо найти Криса».
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 133,
    text:
      `
        Понимая, что пора вернуться, я встала и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 134,
    text:
      `
        Еще раз, спасибо тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 135,
    text:
      `
        Парень не ответил, и, когда он отвернулся, я прошептала ему вслед:
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 137,
    text:
      `
        Дерек...
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club_Street.jpg')
  },

  {
    id: 138,
    text:
      `
        Громкая музыка снова резала по слуху, и, боясь встретиться с тем ублюдком, быстро прошла через толпу.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    music: require('../../../../Sounds/FOF/Club_2.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 140,
    text:
      `
        Уже за несколько метров я увидела спину парня, и, приблизившись, остановилась от увиденного.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 141,
    text:
      `
        Девушка, обвив ногами Криса, прогнулась, не отрывая губ от парня. Кристофер держал ее за талию, грубо, почти животно целуя.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 142,
    text:
      `
        ! Кат-сцена: Кристофер и девушка на барной стойке
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 143,
    text:
      `
        Его руки страстно сжимали ягодицы незнакомки, отчего та стонала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 144,
    text:
      `
        Фу, как же это противно…
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 145,
    text:
      `
        Пусть увиденное и шокировало меня, но я не знала, как могла остаться здесь после того инцидента. Поэтому решила все-таки отвлечь Криса.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 146,
    text:
      `
        «Уверена, он с легкостью склеит кого-нибудь еще».
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 148,
    text:
      `
        Набравшись смелости, я прочистила горло, обращая внимание парня на себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 149,
    text:
      `
        Он не отреагировал, лишь продолжил лапать доступную шлюшку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 150,
    text:
      `
        «Ну нет уж. Если хотел поиметь кого-то, пускай делает это не в моем присутствии».
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 152,
    text:
      `
        Я толкнула его по плечу, стараясь не смотреть на его пассию.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 153,
    text:
      `
        Крис.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 154,
    text:
      `
        Парень был сильно увлечен происходящим, и, мельком взглянув на меня, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 155,
    text:
      `
        А, Эби. Это ты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 157,
    text:
      `
        Чего тебе?
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 159,
    text:
      `
        Так-так… Посмотрите-ка….
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/FOF/Persons/Girl_S.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 160,
    text:
      `
        Ее нетрезвый взгляд прошелся по мне, и, оценив то, что увидела, она добавила:
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 161,
    text:
      `
        Так ты уже выбрал себе развлечение на вечер.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/FOF/Persons/Girl_S.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 163,
    text:
      `
        Она оттолкнула его, встала, и, выпив оставленный коктейль, сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 164,
    text:
      `
        Не смей звонить мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/FOF/Persons/Girl_S.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 166,
    text:
      `
        Я никогда и не звоню.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 167,
    text:
      `
        Девушка бросила разъяренный взгляд на парня и бодро затерялась в толпе, чему я была рада. Обратив внимание на Криса, я поняла, что тот злился.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 168,
    text:
      `
        Ты хоть понимаешь, что сорвала мне свидание?
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 169,
    text:
      `
        Парень равнодушно облокотился о барную стойку спиной, едким взглядом прожигая меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 170,
    text:
      `
        Пока ты тут свидания назначаешь, на меня напали!
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 171,
    text:
      `
        И?
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 172,
    text:
      `
        И? Он... Меня…
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 173,
    text:
      `
        Я промолчала, не в силах выразить то, что он мог со мной сделать.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 174,
    text:
      `
        В голове лишь промелькнули эти моменты, и, глубоко вздохнув, я кое-как вернула спокойствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 175,
    text:
      `
        Опять драматизируешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 176,
    text:
      `
        Я быстро поняла, что рассказывать Крису о случившемся сейчас не самая лучшая идея.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 177,
    text:
      `
        «Он просто не поймет. Не поймет, каково быть девушкой, и каково, когда тебя воспринимают как средство удовлетворения». 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 179,
    text:
      `
        «Ведь Кристофер и сам готов был использовать ту девушку…»
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 181,
    text:
      `
        Парень допил остатки алкоголя из стакана, и, поставив его, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 182,
    text:
      `
        Смогла постоять за себя, как вижу?
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 183,
    text:
      `
        Нет. Мне помогли.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 184,
    text:
      `
        Кристофер мрачно глядел в толпу, и, переведя внимание на стакан вдруг что-то осознал. Он встал прямо и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 185,
    text:
      `
        Бестолковый вечер. Поехали домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Кристофер',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Chris_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 186,
    text:
      `
        Пускай наши мнения во многом и расходились, но эта мысль была единственной, которая могла вернуть спокойствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Club.jpg')
  },

  {
    id: 187,
    text:
      `
        По дороге домой мы молчали. Похоже, каждый думал о своем. Повезло: водитель не задавал нам вопросов, а бесшумно ехал, следя за дорогой.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    music: require('../../../../Sounds/FOF/Sad_2.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Taxi_City.jpg')
  },

  {
    id: 189,
    text:
      `
        Кристофер казался угнетенным, неестественно уставшим. Он медленно дышал, прикрыв веки.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Taxi_City.jpg')
  },

  {
    id: 190,
    text:
      `
        «Интересно, он так себя ведет из-за того, что я сорвала ему встречу с той потаскушкой? Или есть другая причина?»
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Taxi_City.jpg')
  },

  {
    id: 192,
    text:
      `
        Я отвернулась от парня, устремив взгляд в окно. Ничего не оставалось, кроме как примечать каждое здание, считать мимо проходящих людей, лишь бы отвлечься. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Taxi_City.jpg')
  },

  {
    id: 193,
    text:
      `
        Лишь бы не вспоминать этот ужас…
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Taxi_City.jpg')
  },

  {
    id: 194,
    text:
      `
        Совсем скоро высокие деревья сменили здания, и я поняла, что ехать осталось недолго. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Taxi_Forest.jpg')
  },

  {
    id: 196,
    text:
      `
        Когда водитель остановился, Кристофер молча передал деньги и вышел, я же последовала за ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Taxi_Forest.jpg')
  },

  {
    id: 197,
    text:
      `
        Придя домой, парень направился в гостиную, а следом я услышала, как он плюхнулся на диван. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor_Night.jpg')
  },

  {
    id: 199,
    text:
      `
        Я все еще чувствовала себя не в своей тарелке, и лучшим вариантом было закрыться в комнате, которая на какой-то период времени стала моим спасением.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor_Night.jpg')
  },

  {
    id: 200,
    text:
      `
        Моим личным пристанищем, где я могла быть собой. Быть в безопасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor_Night.jpg')
  },

  {
    id: 201,
    text:
      `
        Ненадолго я остановилась, размышляя, куда идти: туда, где я буду в тишине, или туда, откуда доносился тихое дыхание постороннего человека?
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor_Night.jpg')
  },

  {
    id: 202,
    text:
      `
        «Я так не могу. Если останусь одна, то мысли снова и снова будут возвращать меня в этот ужасный момент, который я пережила».
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Corridor_Night.jpg')
  },

  {
    id: 204,
    text:
      `
        Я тихо прошла в гостиную, и, пройдя мимо спящего Кристофера, аккуратно опустилась на другой конец дивана. Благо, его форма создавала иллюзию расстояния между нами.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 205,
    text:
      `
        Через панорамные окна на нас падал свет луны, а тихое дыхание Криса рядом дарило ощущение спокойствия и умиротворения.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 206,
    text:
      `
        Подтянув под голову мягкую подушку, я перевернулась на бок. Кулон с тихим звуком опустился рядом, словно напоминая о себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 207,
    text:
      `
        Руки сами потянулись к нему, и, ощутив его тепло в ладони, я закрыла глаза, пока в голове роились мысли:
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 208,
    text:
      `
        «Не слишком ли я грубо поступила с Ником? Возможно, он не заслуживает такого отношения?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 210,
    text:
      `
        Но в следующую секунду новая мысль отрезвила меня:
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 211,
    text:
      `
        Это по его вине я сейчас здесь, а не нежусь в теплой и мягкой кроватке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 213,
    text:
      `
        Горький комок возник в районе горла. Я вспоминала моменты из своей жизни, те, которые раньше были не столь важны.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 214,
    text:
      `
        Горячая ванна с солью, которую привезли партнеры тети из Израиля. Лосьоны для тела с их незабываемым дорогим ароматом, окутывающим, словно дымка.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 215,
    text:
      `
        Уход за кожей в СПА, где умелые руки специалистов ловко снимали стресс, массируя мышцы шеи и спины. И после тренировок это было спасением.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 216,
    text:
      `
        «А те моменты, когда я ходила по магазинам, подбирая шикарные образы?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 218,
    text:
      `
        Теперь все это казалось чем-то далеким от реальности. И ощущение опустошенности не хотело покидать мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  },

  {
    id: 219,
    text:
      `
        Долго размышлять не получилось: накатилась усталость сегодняшнего дня. Перевернувшись на другой бок, я закрыла глаза, пока сон не овладел мной полностью. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('FOF', 'Глава 1', 'Часть 5', '0')
        }
      }],
    achievement: { story: EStoriesEn.FOF, name: 'Chapter01Part05Completed' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Wooden_Hall_Night.jpg')
  }
])
