import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { redFlash, whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.Immortals, chapterName: 'Глава 1', partName: 'Часть 4', code: '1' }, [
  {
    id: 0,
    text:
      `
        — Она в порядке, доктор? — произнес взволнованный мужской голос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: '<i> Нью-Йорк 1885 год',
    music: require('../../../../Audio/Immortals/NY_Sad.mp3'),
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital_Dark.jpg')
  },

  {
    id: 1,
    text:
      `
        — Да, сэр. Мы сделали все возможное. Ее жизни больше ничего не угрожает. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Doctor_S.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital_Dark.jpg')
  },

  {
    id: 2,
    text:
      `
        — Благодарю вас! 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital_Dark.jpg')
  },

  {
    id: 3,
    text:
      `
        Послышалось хлопанье двери, а затем я почувствовала легкое прикосновение. Кто-то нежно проводил пальцами по ладони вверх-вниз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    simple: require('../../../../Audio/Immortals/Close_Door.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital_Dark.jpg')
  },

  {
    id: 4,
    text:
      `
        Эти осторожные движения успокаивали.  
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital_Dark.jpg')
  },

  {
    id: 5,
    text:
      `
        Мне не терпелось открыть глаза, чтобы разузнать о произошедшем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital_Dark.jpg')
  },

  {
    id: 6,
    text:
      `
        «Наверное, это мой спаситель?»
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital_Dark.jpg')
  },

  {
    id: 7,
    text:
      `
        Приложив больше усилий, я наконец смогла прийти в себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital_Dark.jpg')
  },

  {
    id: 8,
    text:
      `
        Яркие светлые стены, жесткая кушетка и размытый силуэт. Увидев, что я очнулась, мужской голос проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 9,
    text:
      `
        — Катарина, ты меня слышишь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 10,
    text:
      `
        «Слышу».
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 11,
    text:
      `
        Тишина. Меня словно парализовало от всего ранее пережитого. Захотелось перевернуться, но тело отказывалось подчиняться.  
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 12,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) >= 1
        },
        goTo: 13
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) <= 0
        },
        goTo: 17
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 13,
    text:
      `
        — Катарина, лежи спокойно, — незнакомец аккуратно придержал меня за плечо. — Ты серьезно ранена, рука… 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    beforeBegin: redFlash,
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 14,
    text:
      `
        В его голосе слышались нотки сожаления. Мне было неизвестно, кто передо мной, но я ощущала, что этот человек искренен в своих переживаниях.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 15,
    text:
      `
        Я почувствовала, как незнакомец сильнее надавил на мое плечо, а затем сменил тон на более агрессивный: 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 16,
    text:
      `
        — Я убью этих тварей, чего бы мне этого не стоило. Они ответят за содеянное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 17,
    text:
      `
        — Катарина, осторожнее, — его рука аккуратно легла мне на плечо. — Ты еще недостаточно окрепла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 18,
    text:
      `
        В его голосе слышались нотки сожаления. Мне было неизвестно, кто передо мной, но я ощущала, что этот человек искренен в своих переживаниях.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 19,
    text:
      `
        Я почувствовала, как незнакомец сильнее надавил на мое плечо, а затем сменил тон на более агрессивный: 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 20,
    text:
      `
         — Они ответят за содеянное. Прости, что не смог тебя защитить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 21,
    text:
      `
        Я все же нашла в себе силы сфокусироваться и рассмотреть собеседника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 22,
    text:
      `
        Светло-каштановые волосы до плеч. Голубые глаза. Мужчина выглядел статно, в нем легко можно было распознать аристократа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 23,
    text:
      `
        Его правую щеку украшало несколько шрамов. Они никак не влияли на его общий презентабельный вид, а, напротив, лишь подчеркивали его мужественность и готовность встретиться лицом к лицу с опасностью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 24,
    text:
      `
        «Интересно, откуда они у него. Когда-нибудь обязательно поинтересуюсь, а сейчас время поговорить о насущных делах». 
      `,
    buttons: [
      {
        text: 'Кто ты такой?',
        goTo: 25,
        func: () => {
          scenarioManager.changeSceneButtonStatus(24, 0, false)
          scenarioManager.manageDialog(24, [0, 1, 2], [3])
        }
      },
      {
        text: 'Что это за твари?',
        goTo: 32,
        func: () => {
          scenarioManager.changeSceneButtonStatus(24, 1, false)
          scenarioManager.manageDialog(24, [0, 1, 2], [3])
        }
      },
      {
        text: 'Где Никола?',
        goTo: 37,
        func: () => {
          scenarioManager.changeSceneButtonStatus(24, 2, false)
          scenarioManager.manageDialog(24, [0, 1, 2], [3])
        }
      },
      {
        text: 'Продолжить',
        goTo: 42,
        isActive: false
      }
    ],
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(24)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 25,
    text:
      `
        Вопрос сильно смутил незнакомца. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 26,
    text:
      `
        — Доктор предупреждал, что из-за сильного стресса может возникнуть проблема с памятью, — мужчина с грустью глядел на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 27,
    text:
      `
        — Я — Роберт, Катарина. Твой муж. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 28,
    text:
      `
        «Муж? Никола упоминал об этом человеке? Не могу вспомнить…»
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 29,
    text:
      `
        В любом случае эта новость звучала крайне неожиданно. Оказывается, в этом мире у Катарины есть любимый человек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 30,
    text:
      `
        — Прости, — я говорила очень тихо. — Все, правда, как в тумане. 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 31,
    text:
      `
        Роберт понимающе кивнул. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(24, 31)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 32,
    text:
      `
        Он вздохнул и ответил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 33,
    text:
      `
        — Нам лучше поговорить об этом в более приватной обстановке. Когда вокруг не будет «лишних ушей». 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 34,
    text:
      `
        — Да и тебе стоит отдохнуть, ты еще слишком слаба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 35,
    text:
      `
        Мужчина выглядел серьезно, поэтому я решила не спорить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 36,
    text:
      `
        К тому же, с моей стороны действительно было опрометчиво расспрашивать о подобных темах в общественном месте. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(24, 36)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 37,
    text:
      `
        — Дома, отдыхает. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 38,
    text:
      `
        — Мы с ним вроде бы виделись, он не пострадал? 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 39,
    text:
      `
        — Он, как и ты, не в лучшем состоянии. Дело может быть не только в стрессе. Не исключено, что эти твари могли что-то сделать с вами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 40,
    text:
      `
        — Я предупреждал тебя ранее о такой вероятности. Но доподлинно нам неизвестно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 41,
    text:
      `
        «Катарина знала об этом? Ничего не понимаю». 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(24, 41)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 42,
    text:
      `
        От новой информации голова готова была взорваться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 43,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) >= 1
        },
        goTo: 44
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) <= 0
        },
        goTo: 51
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 44,
    text:
      `
        Однако, меня волновал еще один вопрос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 45,
    text:
      `
        — Роберт, а что врачи говорили о моей руке?
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 46,
    text:
      `
        — Доктор сказал: у тебя нарушение целостности локтевой кости, поперечный перелом — и тебе повезло, что нет осколков. Поэтому достаточно было наложить фиксирующую повязку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 47,
    text:
      `
        — С помощью специальной жидкости твою руку зафиксировали до полного выздоровления. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 48,
    text:
      `
        — И сколько времени это займет? 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 49,
    text:
      `
        — Около двух месяцев. У всех по-разному.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 50,
    text:
      `
        «Бедная Катарина… И ведь это именно мои действия привели к этому».
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 51,
    text:
      `
        После вопросов наступила неловкая тишина. Я не знала, что на данный момент могу еще спросить, поэтому для начала решила обдумать все ранее сказанное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 52,
    text:
      `
        Отвернув голову в сторону, я закрыла глаза и попыталась собраться с мыслями.
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 53,
    text:
      `
        Разбитая, поломанная. От отчаяния хотелось выть, сбежать — все, лишь бы не видеть эти стены.
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 54,
    text:
      `
        Мы не особо разговаривали, но я видела его стремление поддержать меня в трудный момент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 55,
    text:
      `
        Даже Тесла приходил ко мне. В один из дней он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 56,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Nicola' }) >= 1
        },
        goTo: 57
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Nicola' }) <= 0
        },
        goTo: 69
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 57,
    text:
      `
        — Катарина, я хотел подарить тебе кое-что, в качестве извинений, и искренней признательности нашей дружбы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 58,
    text:
      `
        Он протянул мне небольшой золотой крестик с длинной цепочкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 59,
    text:
      `
        — Никола, я не могу принять…
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 60,
    text:
      `
        — Брось, просто возьми, без лишних слов, — Тесла не спеша вложил в мою ладонь вещицу и положил руку поверх. — Пусть он защитит тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 61,
    text:
      `
        — Спасибо, Никола, я буду беречь его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Item', id: 'Nicola_Cross' }],
    achievement: { story: EStoriesEn.Immortals, name: 'Hereditary' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 62,
    text:
      `
        Он улыбнулся и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },
  {
    id: 63,
    text:
      `
        — Ты находишь свой путь, но не забываешь наставлений Всевышнего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 64,
    text:
      `
        «Все это довольно неожиданно и немного странно… Но его семья… я читала про их набожность». 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    message: 'Благодаря хорошим отношениям с Теслой, вы узнаете его лучше',
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 65,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Nicola' }) >= 2
        },
        goTo: 66
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Nicola' }) <= 1
        },
        goTo: 69
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 66,
    text:
      `
        — Я бы также хотел выразить тебе признательность за интерес к моим трудам и исследованиям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 67,
    text:
      `
        — И чтобы тебе не было скучно, я принес несколько своих дневников с любопытными заметками. Надеюсь, ты оценишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 68,
    text:
      `
        «Не верю своим глазам, это результат моих выборов? Его доверие?»
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    message: 'Ваши знания крепчают',
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Study' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Nicola' }],
    afterAll: () => {
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) > 5 && statsManager.change({ story: EStoriesEn.Immortals, value: -1, category: 'Effect', id: 'Study' })
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 69,
    text:
      `
        — Катарина, еще раз прости меня, все произошло так стремительно, — Никола выглядел поникшим. — Проклятье, куда катится наш мир…
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 70,
    text:
      `
        Он часто извинялся, практически в каждый свой визит. Мне же оставалось лишь натягивать улыбку, чтобы успокаивать его.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 71,
    text:
      `
        В конце концов, здесь действительно нет его вины. Если уж и стоит винить кого-то, то только меня.  
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 72,
    text:
      `
        Прошла еще неделя. Долгая. Мучительная. Я не понимала, почему не могу вернуться в свой мир: к своим друзьям, к своей семье.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 73,
    text:
      `
        Я была готова даже стать самой прилежной ученицей, слушать нотации профессора Нэйтана, лишь бы ни секунды больше не проводить здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 74,
    text:
      `
        На следующий день, когда он вернулся, я уже сидела на кушетке в ожидании заветных слов.
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 75,
    text:
      `
        — Поедем в нашу квартиру и спокойно поговорим.
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 76,
    text:
      `
        «Не верю, что это наконец-то закончилось…»
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 77,
    text:
      `
        Вещей у меня с собой особо не было, поэтому собралась я довольно быстро. Роберт взял меня под руку и мы медленно вышли из здания. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 78
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 78,
    text:
      `
        Солнце слепило, а свежий воздух дурманил разум.
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 79,
    text:
      `
        «Хоть так. Раз не могу вернуться, то хотя бы больше не буду чувствовать запах лекарств, слушать злобных медсестер…»
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 80,
    text:
      `
        Я:
      `,
    buttons: [
      {
        text: 'Облокотилась на стену',
        goTo: 81
      },
      {
        text: 'Облокотилась на плечо Роберта',
        goTo: 85,
        gift: true
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 81,
    text:
      `
        Положив голову, мне удалось немного вздремнуть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 82,
    text:
      `
        Погружаясь в сон, я взглянула на Роберта. Мужчина сидел, закинув ногу на ногу, читал газету и не беспокоил меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 83,
    text:
      `
        Сны были очень тревожными. Ранее пережитое потрясение преследовало и уже глубоко проникло в самые недра подсознания.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 84,
    text:
      `
        Каждый раз закрывая глаза, казалось, что я вновь попаду в этот темный подвал и на этот раз мне никто не поможет.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 85,
    text:
      `
        Мне хотелось почувствовать себя защищенной. Я была уверена, что мужчина не будет против.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 86,
    text:
      `
        «Мы женаты, а значит такая близость для нас должна быть в порядке вещей». 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 87,
    text:
      `
        Роберт не удивился, напротив, он слегка улыбнулся, будто бы давно ожидая этого жеста.
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 88,
    text:
      `
        «Какие же отношения связывают их с Катариной?»
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 89,
    text:
      `
        Роберт был погружен в себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 90,
    text:
      `
        У меня промелькнула мысль: а что если он чувствует вину за произошедшее? Что если во время своих визитов или сейчас, мужчина просто делает должное?
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 91,
    text:
      `
        Мысли роились у меня в голове. К этому прибавились беспокойные сны, напоминающие мне о недавнем похищении.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 92,
    text:
      `
        Однако присутствие Роберта не дало окончательно погрузиться в пережитый ужас. Остаток пути прошел в относительном спокойствии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    message: 'Роберт всегда вас поддержит',
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Person', id: 'Robert', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 93,
    text:
      `
        Я не следила за временем и понятия не имела сколько мы уже находимся в пути. Едва проснувшись, я попыталась разглядеть новые для меня здания и людей.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 94,
    text:
      `
        Любопытство играло во мне, однако организм продолжал стоять на своем и меня клонило в сон.
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 95,
    text:
      `
        Всю дорогу к дому супруг не отпускал меня, помогая держать равновесие.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 96,
    text:
      `
        Мы вошли в светлую и просторную гостиную. Без сомнения это была богато обставленная квартира.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 97,
    text:
      `
        Однако в ней не нашлось места излишнему пафосу вроде выставления различных золотых предметов на видные места с целью показать свой высокий статус.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 98,
    text:
      `
        «Все белое и уютное… Ощущение, что это не особо вяжется с образом Роберта. Катарина постаралась?»
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 99,
    text:
      `
        Роберт усадил меня на диван и принес согревающий напиток. Сев рядом, мужчина проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 100,
    text:
      `
        — Ты что-нибудь вспомнила за то время, которое провела в больнице? 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 101,
    text:
      `
        Что мне было ответить? Ведь я действительно не знала ничего о Роберте или об этих монстрах.
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 102,
    text:
      `
        — Нет, я ничего не помню. Объясни мне, пожалуйста, что здесь происходит.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 103,
    text:
      `
        Роберт долго собирался с мыслями, а затем вздохнув, проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 104,
    text:
      `
        — Тебя зовут Катарина, ты моя, скажем так, не настоящая жена. Увлекаешься театральным искусством… 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 105,
    text:
      `
        — Погоди что? — мне пришлось перебить собеседника, так как озвученная информация не укладывалась у меня в голове. — Что значит «не настоящая»? 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 106,
    text:
      `
        — Мы заключили взаимовыгодный брак. Для поддержания социального статуса и отвода глаз, мы лишь играем роль супругов.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 107,
    text:
      `
        — Но зачем…? — в голове будто бы сам собой пришел нужный ответ.
     `,
    buttons: [
      {
        text: '',
        goTo: 516
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 108,
    text:
      `
        — Наверняка твоя работа связана с криминалом. И чтобы не вызывать лишних подозрений у посторонних, ты играешь роль примерного мужа, так?
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    message: 'Вы сделали неверное предположение',
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 109,
    text:
      `
        «Это самый логичный вывод. Он ни разу не удивлялся, когда я упоминала существ, к тому же лично грозился разобраться с ними».
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 110,
    text:
      `
        — Ты убиваешь этих монстров, так? И чтобы не вызывать лишних подозрений у посторонних, ты играешь роль примерного мужа…
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 111,
    text:
      `
        Роберт улыбнулся, утвердительно кивнув. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    message: 'Ваше предположение оказалось верным',
    parallax: 'right',
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Person', id: 'Robert', silent: true }],
    achievement: { story: EStoriesEn.Immortals, name: 'IKnew' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 112,
    text:
      `
        — Наверняка ты какой-нибудь детектив, выслеживающий всяких мафиози. И чтобы не вызывать лишних подозрений у посторонних, ты играешь роль примерного мужа, так?
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    message: 'Вы сделали неверное предположение',
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 113,
    text:
      `
        — Я предпочитаю, чтобы меня называли охотником. Это слово максимально передает смысл моей деятельности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Robert' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 114,
    text:
      `
        — Что им нужно?
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 115,
    text:
      `
        — Я не располагаю такими сведениями. Эта история, кажется, длится не одно столетие. Возможно, это как-то связано с их так называемой «матерью». 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 116,
    text:
      `
        Роберт погрузился в рассуждения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 117,
    text:
      `
        — Они могли произойти от нее. Но тогда каким образом? Или это некогда бывшие люди, которые подверглись опытам? Я пытаюсь это выяснить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 118,
    text:
      `
        «Ужасно… Я думала, такое может быть только в фильмах!»
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 119,
    text:
      `
        — А при чем тут я? Им что-то нужно от тебя и они хотели использовать меня для того, чтобы ты был более сговорчивым? Хотя нет, — еще раз вспомнив произошедшее, я невольно вздрогнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 120,
    text:
      `
        — Я кое-что припоминаю, мужчина, что был там. Он сказал, что им нужна моя кровь… 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 121,
    text:
      `
        — И про восстановление своего рода они тоже упоминали. Как я связана с этим, Роберт?
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 122,
    text:
      `
        Поведение Роберта заметно переменилось, он придвинулся ко мне почти вплотную и сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 123,
    text:
      `
        — Расскажи все, что помнишь! 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 124,
    text:
      `
        Роберт незаметно для себя повысил голос, а его взгляд стал выражать неподдельный интерес к моему рассказу. Словно он вот-вот узнает ответ на давно мучавшие его вопросы.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 125,
    text:
      `
        Я выложила все, что так долго пыталась забыть: шприц, монстр, загадочный человек, заточение.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 126,
    text:
      `
        Страшные картинки снова замелькали, но я старалась держать себя в руках, ведь без этой информации мы не сможем продвинуться дальше в понимании сложившейся ситуации.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 127,
    text:
      `
        Мужчина сидел некоторое время в тишине, видимо, обдумывая услышанное.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 128,
    text:
      `
        Затем он встал, достал из шкафчика бутылку крепкого алкоголя и налил немного в два стакана.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 129,
    text:
      `
        — Выпей — станет легче. 
      `,
    buttons: [
      {
        text: 'Согласиться',
        goTo: 130
      },
      {
        text: 'Отказаться',
        goTo: 132
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 130,
    text:
      `
        — Спасибо, это действительно то, что мне нужно.
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 131,
    text:
      `
        Я ощущала, как плохие мысли отступают. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    parallax: 'right',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Addiction' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 132,
    text:
      `
        — Нет, спасибо, не думаю, что мне сейчас это нужно.
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 133,
    text:
      `
        Мне было достаточно хорошей компании и минутной тишины. Я ощущала, как плохие мысли отступают. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 134,
    text:
      `
        После затяжной паузы я все же решила уточнить:
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 135,
    text:
      `
        — До этого тебя тоже похищали, — мужчина залпом осушил стакан. — Но тогда ты совсем ничего не помнила. Я сразу же предположил, что эти твари догадались шантажировать меня таким образом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 136,
    text:
      `
        — После твоего спасения, я строго-настрого запретил выходить куда-либо без сопровождения, поэтому в случае моего отсутствия, за тобой любезно согласился присмотреть Никола.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 137,
    text:
      `
        — Но он не знал подробностей?
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 138,
    text:
      `
        — Разумеется. Меньше знаешь, крепче спишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 139,
    text:
      `
        — Ты вполне можешь являться важным звеном в этой цепочке, Катарина. Иначе… Нет, у меня нет других догадок, почему они так одержимы тобой.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 140,
    text:
      `
        Он со всей серьезностью смотрел мне в глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 141,
    text:
      `
        — Если они сейчас так просто тебя отпустили, значит проверяют свою теорию. А тот человек — их лидер. Видел его пару раз. Мерзкий тип, умный. Так просто в ловушки не попадается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 142,
    text:
      `
        — Во что же я влипла…
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 143,
    text:
      `
        — Ты никогда так серьезно не спрашивала об этом. Даже после того инцидента. Что изменилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 144,
    text:
      `
        «Катарина не воспринимала это всерьез? Не понимаю. Ее жизнь висит на волоске, как можно быть такой беспечной».
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 145,
    text:
      `
        — Все зашло слишком далеко, под угрозой была моя жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 146,
    text:
      `
        — Ты изначально знала, на что соглашаешься. Наш контракт. Я говорил об этом ранее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 147,
    text:
      `
        «Стоило лишь догадываться о подробностях. Все риски были обозначены. С моей стороны глупо давить на жалость». 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 148,
    text:
      `
        «Но все-таки, мотивация Роберта на замужество мне понятна, но в чем же мотивация Катарины? Неужели она руководствовалась любовью?»
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 149,
    text:
      `
        — Ты прав, — я покорно приняла ситуацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 150,
    text:
      `
        — Мне пора на встречу, будь здесь и отдыхай.
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 151,
    text:
      `
        — Нет. Мне нужно увидеться с братом. Это очень важно, — мужчина даже не смотрел на меня, а просто суетился около входной двери.
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 152,
    text:
      `
        «Так это и есть настоящий Роберт? Холодный, отстраненный, сосредоточенный лишь на своей работе?»
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 153,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TryToEscape' }) >= 1
        },
        goTo: 154
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TryToEscape' }) <= 0
        },
        goTo: 159
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 154,
    text:
      `
        — Кстати, — он остановился перед выходом. — Я нашел это на полу рядом с тобой, может, он твой, не знаю. Решай сама.
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 155,
    text:
      `
        «Это должно закалить меня. Пусть служит мне каким никаким оружием». 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 156,
    text:
      `
        Я спрятала его в свою сумку, с которой всегда ходила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    message: 'Вы решили оставить нож при себе',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Item', id: 'Knife' }],
    achievement: { story: EStoriesEn.Immortals, name: 'KeepKnife' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 157,
    text:
      `
        «Мне это ни к чему. Не хочу все заново вспоминать. К тому же от этого оружия не будет никакого толку».
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 158,
    text:
      `
        Я положила его на верхнюю полку шкафа и благополучно постаралась забыть.  
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 159,
    text:
      `
        Когда Роберт ушел, я прилегла на диван и проспала до самого вечера.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 160,
    text:
      `
        Охотник вернулся еще более хмурым, чем был до этого. Он сел рядом и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 161,
    text:
      `
        — Катарина, я понимаю, что ты еще не выздоровела, но вынужден сообщить о приеме, на котором мы обязаны появиться сегодня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 162,
    text:
      `
        Еще сонным разумом я плохо понимала происходящее.
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 163,
    text:
      `
        — И сегодня я обязан присутствовать, так как некоторые гости будут представлять свои наработки. И я не могу появиться там без своей супруги, «они» точно заподозрят неладное.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 164,
    text:
      `
        От волнения сердце застучало быстрее.
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 165,
    text:
      `
        В реальности я лишь ограничилась коротким кивком. Затем пришло еще одно осознание, которое я невольно озвучила вслух. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 166,
    text:
      `
        — Ох, что же мне надеть… — я медленно встала и подошла к шкафу, где висела одежда.
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 167,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) >= 1
        },
        goTo: 168
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) <= 0
        },
        goTo: 179
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 168,
    text:
      `
        — Ничего что… — я показала ему свою руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 169,
    text:
      `
        — Не говори глупостей. Один лишь твой приход выставит тебя как героиню, которая преодолела себя и пришла на мероприятие, что, безусловно, только поднимет наш престиж.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 170,
    text:
      `
        — Но как ответить, если вдруг кто-то спросит о причине перелома?
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 171,
    text:
      `
        — Не думаю, что это может быть кому-то интересно, — он равнодушно пожал плечами. — Расскажи о случайном падении, сошлись на неосторожность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 172,
    text:
      `
        «Помощи от него не дождешься. Буду выкручиваться по ходу. А теперь лучше вернуться к выбору одежды».
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 173,
    text:
      `
        Одной рукой было довольно сложно управляться, поэтому вмешался Роберт:
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 174,
    text:
      `
        — Я помогу.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 175,
    text:
      `
        — Но ведь…      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 176,
    text:
      `
        Мои щеки покраснели, я старалась не смотреть на мужчину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 177,
    text:
      `
        Роберт постепенно начал одевать меня, словно куклу. Даже невольно касаясь интимных частей тела, он оставался беспристрастным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 178,
    text:
      `
        — Извини, если был чересчур настойчив, — он покинул комнату и я закончила сборы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 179,
    text:
      `
        Мужчина ушел в другую комнату, пока я выбирала подходящий для торжества наряд.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 180,
    text:
      `
        Покрутившись перед зеркалом, я удовлетворенно кивнула и попросила Роберта вернуться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 182,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    wardrobe: { story: EStoriesEn.Immortals, personId: 'Katarina_Ball', goTo: 183 },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 183,
    text:
      `
        — Как и всегда, изумительно, Катарина, — несмотря на свою отстраненность, мужчина старался поддерживать имидж джентльмена.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 184,
    text:
      `
        — Благодарю.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 185,
    text:
      `
        Я не могла про себя ни отметить его изменения. Черный костюм сидел великолепно, еще больше подчеркивая высокое положение.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 186,
    text:
      `
        «Не был бы колючкой, похвалила бы за выбор такого наряда. Но увы».
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 187,
    text:
      `
        Перед выходом Роберт что-то убрал во внутренний карман пиджака. Я заметила это, но не подала вида. Спустившись, мы сели в экипаж и отправились на прием. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 188
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 188,
    text:
      `
        Экипаж привез нас к роскошному особняку. Сад, ухоженные тропинки, просторные помещения с живым оркестром, играющим классическую музыку.
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    music: require('../../../../Audio/Immortals/Ball.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 189,
    text:
      `
        На их фоне мне казалось, что я выгляжу крайне нелепо. Однако я старалась идти спокойно и с высоко поднятой головой. К тому же близость Роберта придавала мне уверенности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 190,
    text:
      `
        — Катарина, не волнуйся, среди такого количества гостей, с тобой ничего не может случиться, — прошептал мне на ухо мужчина, попутно приветствуя гостей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 191,
    text:
      `
        — Зачем ты мне это говоришь?
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 192,
    text:
      `
         — Ты выглядишь крайне озадаченно, это не может не привлечь внимания, — Роберт был прав. Помимо страха за свою жизнь, я действительно ощущала себя не в своей тарелке.  
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 193,
    text:
      `
        — Я постараюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 194,
    text:
      `
        Я улыбалась, стараясь уделить должное внимание каждому встречному. На мое счастье, все были приветливы и не доставали надоедливыми расспросами.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 195,
    text:
      `
        Где-то к середине приема, я начала ощущать, что мне становится скучно. Многие пары танцевали, кто-то разговаривал с бокалом игристого.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 196,
    text:
      `
        «Даже телефона нет при себе, чтобы сыграть в игру какую-нибудь и отвлечься…»
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 197,
    text:
      `
        К тому же, Роберту пришлось отлучиться. Перед своим уходом, он напомнил, что в конце вечера предстоят доклады кандидатов.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 198,
    text:
      `
        Мужчина сделал акцент на том, что мне определенно не стоит пропускать это событие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 199,
    text:
      `
        — Я должен пообщаться с гостями в более приватной обстановке. Посиди еще тут, выпей шампанского. В конце концов пообщайся с другими женщинами.
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    parallax: 'left',
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 200,
    text:
      `
        «Я же здесь только ради него».
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 201,
    text:
      `
        — Роберт, — я поймала его за рукав пиджака. — Почему ты вечно норовишь бросить меня? Я не хочу оставаться здесь одна.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 202,
    text:
      `
        Мужчина сильно удивился, аккуратно взял мою руку и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 203,
    text:
      `
        — Прости, раньше тебе нравилось бывать на приемах. Раскрываться в общении с другими. Я же здесь чисто по деловым вопросам и не могу быть с тобой постоянно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    parallax: 'left',
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 204,
    text:
      `
        Такое откровение заставило меня немного смягчиться по отношению к Роберту.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 205,
    text:
      `
        «И действительно, перед ним же стоит не $Имя Игрока$, а Катарина. Девушка, к которой он привык, знал ее повадки, но не мои».
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 206,
    text:
      `
        Мужчина ушел, а я была предоставлена самой себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 207,
    text:
      `
        «Чем бы заняться?»
      `,
    buttons: [
      {
        text: 'Пойти на террасу',
        goTo: 208
      },
      {
        text: 'Дождаться Роберта',
        goTo: 241
      },
      {
        text: 'Прогуляться в саду',
        goTo: 276
      }],
    message: 'Вы можете выбрать только один вариант, чтобы скоротать время',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 208,
    text:
      `
        В помещении становилось очень душно, поэтому я решила сходить подышать свежим воздухом.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    parallax: 'left',
    stats: [{ story: EStoriesEn.Immortals, value: +1, category: 'Choice', id: 'GoToTerrace' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 209,
    text:
      `
        Терраса была просторной, с небольшими столиками, за одним из которых беседовало несколько знатных дам.
      `,
    buttons: [
      {
        text: '',
        goTo: 490
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 210,
    text:
      `
        «Я определенно не создана для таких приемов. Немного завидую Катарине в этом плане».
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 211,
    text:
      `
        Однако мне были не до конца понятны ее мотивы. Она так просто подвергает себя опасности, ради чего?
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 212,
    text:
      `
        Влюбленность в Роберта? Он, конечно, хорош собой, но вряд ли это настолько весомый аргумент…
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 213,
    text:
      `
        Через некоторое время на террасу пришел один из участников мероприятия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 214,
    text:
      `
        — Катарина, не ожидал тебя здесь увидеть.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 215,
    text:
      `
        Это был Тесла. Он выглядел немного взволнованно, но при этом держал голову высоко, будто бы назло всем обстоятельствам.
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 216,
    text:
      `
        — Я пришел совсем недавно. Мне не по душе все эти мероприятия. Пустая болтовня, танцы. Я здесь по другой причине.
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 217,
    text:
      `
        — Все верно.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 218,
    text:
      `
        Наступила неловкая пауза. Я до сих пор смутно помню наше взаимодействие с Николой, однако сейчас я точно уверена в реальности происходящего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 219,
    text:
      `
        «Я не схожу с ума, я действительно нахожусь в прошлом». 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 220,
    text:
      `
        И мне: 
      `,
    buttons: [
      {
        text: 'Нравится компания Теслы',
        goTo: 221,
        gift: true
      },
      {
        text: 'Не нравится компания Теслы',
        goTo: 233
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 221,
    text:
      `
        Его общение, манера поведения — все это привлекало меня. Я бы хотела больше времени проводить с ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 222,
    text:
      `
        В отличие от того же Роберта, он относится ко мне более тактично. Хотя и своих проблем ему хватает.
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 223,
    text:
      `
        Тесла был крайне удивлен моим словам. На его щеках показался красный румянец.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 224,
    text:
      `
        — Катарина, чего это ты вдруг…
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 225,
    text:
      `
        — Просто захотелось сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 226,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Nicola' }) >= 1
        },
        goTo: 227
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Nicola' }) <= -1
        },
        goTo: 230
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 227,
    text:
      `
        — Ты удивительная девушка, я горд и безмерно счастлив, что имею честь быть знакомым с тобой.
      `,
    buttons: [
      {
        text: '',
        goTo: 495
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 228,
    text:
      `
        Он не сжимал меня сильно, напротив, легко и непринужденно. Мне удалось уловить аромат, исходящий от него.
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 229,
    text:
      `
        Впервые я почувствовала себя хорошо в этом времени. Спокойно, без всяких напрягов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    message: 'Вы дорогой человек для Николы',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 230,
    text:
      `
        — Спасибо, Катарина, но это лишнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 231,
    text:
      `
        — Почему ты отталкиваешь меня? Я же просто выражаю тебе признательность…
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 232,
    text:
      `
        — Не думаю, что Роберт оценит весь наш диалог и встречу наедине.
      `,
    buttons: [
      {
        text: '',
        goTo: 497
      }],
    message: 'Вы недостаточно близки с Николой, чтобы он открылся',
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 233,
    text:
      `
        Мне было сложно мириться с его характером. К сожалению, этот человек был себе на уме и я не могла даже подобрать какой-нибудь фразы, чтобы продолжить диалог.
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 234,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) >= 1
        },
        goTo: 235
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) <= 0
        },
        goTo: 240
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 235,
    text:
      `
        — Я все хотел поинтересоваться, как рука? Не сильно болит?
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 236,
    text:
      `
        — Нет, что ты, все в порядке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 237,
    text:
      `
        — Это отличные новости. Ты героиня, Катарина. Не каждая девушка сможет вот так вот расхаживать после всего ранее пережитого.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 238,
    text:
      `
        — Это мой долг, я не могу подвести Роберта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 239,
    text:
      `
        Конечно, это не было в моих интересах. Но для поддержания роли, порой, приходилось говорить то, что от меня ожидали услышать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 240,
    text:
      `
        Мы немного постояли в тишине, просто наслаждаясь вечерней прохладой и приятным видом. А затем вернулись на мероприятие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 241,
    text:
      `
        Я решила никуда не ходить и просто подождать своего спутника на диване. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    stats: [{ story: EStoriesEn.Immortals, value: +1, category: 'Choice', id: 'WaitRobert' }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 242,
    text:
      `
        «Уверена, Роберт вернется быстрее, после сказанных мною слов». 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 243,
    text:
      `
        Несколько раз ко мне подсаживались знатные дамы, надеясь завести разговор. Но так как я не была из этой эпохи, мне было трудно поддерживать с ними беседу.
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 244,
    text:
      `
        Роберт не заставил себя долго ждать. Видя, как я скучающе сижу, он подсел ко мне и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 245,
    text:
      `
        — Обычно ты более активная, Катарина. Все еще плохо себя чувствуешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 246,
    text:
      `
        — Может и так, — равнодушно ответила я.
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 247,
    text:
      `
        — Потанцуем?
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 248,
    text:
      `
        Я: 
      `,
    buttons: [
      {
        text: 'Приняла предложение',
        goTo: 249,
        gift: true
      },
      {
        text: 'Отказалась',
        goTo: 266
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 249,
    text:
      `
        Не было причин отказываться. В конце концов я его супруга, а за вечер не произошло ничего интересного, поэтому немного развеяться было хорошей идеей.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Choice', id: 'DanceWithRobert' }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 250,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) >= 1
        },
        goTo: 251
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'BrokenHand' }) <= 0
        },
        goTo: 258
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 251,
    text:
      `
        Роберт был очень осторожен. Он аккуратно взял меня за талию и вывел в центр зала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    music: require('../../../../Audio/Immortals/Ball_Calm.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 252,
    text:
      `
        Заиграла медленная мелодия. Многие присутствующие просто прижались друг к другу, наслаждаясь приятным звучанием и теплотой своего партнера.
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 253,
    text:
      `
        Я ощущала крепкие и надежные мужские объятия. Роберт смотрел только на меня своими голубыми глазами, искренне улыбаясь, не переставая поддерживать.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 254,
    text:
      `
        Что-то завораживающее было в нем. Несмотря на свою отчужденность, он прекрасно справлялся с ролью примерного и заботливого мужа. Была ли это только игра на публику? Или он что-то испытывал к Катарине?
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 255,
    text:
      `
        «Мне еще предстоит раскусить его, а пока… Все не так плохо, как могло бы быть. Может, его настроение улучшил алкоголь или ему хочется женского тепла?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 256,
    text:
      `
        «Но его обходительность в такие моменты заставляет смягчиться…»
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 550,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    cutScene: { video: require('../../../../Images/Immortals/CutScenes/Ball.mp4'), goTo: 257 },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 257,
    text:
      `
        Роберт гладил меня по волосам, затем положил подбородок на мою макушку и продолжил медленные покачивания, заставляя позабыть обо всех тревогах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    message: 'Роберт запомнит ваш танец',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Robert' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 258,
    text:
      `
        Мне хотелось наконец-то выплеснуть накопившуюся энергию. Роберт видел мой азарт, он взял меня за руку и потянул в сторону зала, где танцевало несколько парочек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    music: require('../../../../Audio/Immortals/Ball_Fast.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 259,
    text:
      `
        Заиграла довольно ритмичная музыка, мы с Робертом пустились в пляс, поддаваясь общему игривому настрою. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 260,
    text:
      `
        Держась за руки, мы танцевали как ненормальные: кружились, прыгали, улыбались. В один момент, он обхватил меня за талию и наклонил чуть ли до пола, а затем резко поднял вверх, кружа вокруг себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 261,
    text:
      `
        Что-то завораживающее было в этом мужчине. Несмотря на свою отчужденность, он прекрасно справлялся с ролью примерного и заботливого мужа. Были ли это только игра на публику? 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 262,
    text:
      `
        Или он что-то испытывал к Катарине?
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 263,
    text:
      `
        «Мне еще предстоит раскусить его, а пока… Все не так плохо, как могло бы быть. Может, его настроение улучшил алкоголь или ему хочется женского тепла?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 264,
    text:
      `
        «Но его обходительность в такие моменты заставляет смягчиться…»
      `,
    buttons: [
      {
        text: '',
        goTo: 551
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 551,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    cutScene: { video: require('../../../../Images/Immortals/CutScenes/Ball.mp4'), goTo: 265 },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 265,
    text:
      `
        Танец подарил мне только позитивные эмоции. Я абсолютно забыла обо всех тревогах. А сердце стучало быстрее, видя искреннюю улыбку Роберта.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    message: 'Роберт запомнит ваш танец',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Robert' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 266,
    text:
      `
        Сейчас мне совершенно не хотелось танцевать. Тем более, возникало ощущение, будто бы я заставляю Роберта возиться со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 267,
    text:
      `
        «Не хочу его обременять».
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 268,
    text:
      `
        — Я не до конца выздоровела, поэтому давай спокойно поговорим о чем-нибудь.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 269,
    text:
      `
        — Как скажешь, — мужчина допил свой бокал и отставил его в сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 270,
    text:
      `
        Мы с Робертом решили еще немного посидеть на диване и дождаться финальной части мероприятия. Я решила поинтересоваться:
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    parallax: 'left',
    music: require('../../../../Audio/Immortals/Ball.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 271,
    text:
      `
        — Тебе нравятся подобные приемы?
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 272,
    text:
      `
        «Как всегда исчерпывающе». 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 273,
    text:
      `
        — Почему ты выбрал такой вид деятельности? 
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 274,
    text:
      `
        — Я всегда хотел служить во благо народа. Поэтому самым логичным было направить русло моей вечной жизни на борьбу, — мужчина смотрел на меня таким взглядом, будто бы я должна была понять смысл этих слов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 275,
    text:
      `
        «Что он имеет в виду? Ничего не понимаю, почему все вокруг просто не могут ответить прямо». 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 276,
    text:
      `
        Мне была невыносима компания этих аристократок, к тому же в зале было довольно душно. Я решила выйти прогуляться в сад.
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    parallax: 'left',
    stats: [{ story: EStoriesEn.Immortals, value: +1, category: 'Choice', id: 'WalkGarden' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 277,
    text:
      `
        «Если Роберт спокойно оставил меня одну, бояться нечего. К тому же территория хорошо охраняется».
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 278,
    text:
      `
        И все же приятный окружающий вид ухоженного сада действительно впечатлял. Ровно подстриженные растения, чистые дорожки.
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 279,
    text:
      `
        Внимание привлекал небольшой фонтан скромного вида.
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 280,
    text:
      `
        Очертаний лица было не различить, лишь отрывистые движения ноги из стороны в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 281,
    text:
      `
        «Да, напитков на этом приеме было предостаточно, наверное кому-то поплохело из-за алкоголя? Может стоит подойти?»
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 282,
    text:
      `
        Что мне сделать? 
      `,
    buttons: [
      {
        text: 'Остаться сидеть на месте',
        goTo: 283
      },
      {
        text: 'Подойти к незнакомцу',
        goTo: 505
      },
      {
        text: 'Покинуть сад',
        goTo: 386
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 283,
    text:
      `
        «Это не мое дело, если кто-то перепил и улегся на фонтан. Все — взрослые люди, нужно уметь себя контролировать».
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 284,
    text:
      `
        Я продолжила наслаждаться прохладой и тишиной. Через некоторое время мужчина приподнялся и сел на край. Я видела лишь его спину.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 285,
    text:
      `
        Затем незнакомец резко встал и увидел меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 286,
    text:
      `
        Мое сердце пропустило несколько ударов. Это был он! Тот ублюдок, что похитил меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    music: require('../../../../Audio/Immortals/Antagonist.mp3'),
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 287,
    text:
      `
        Мне ничего не оставалось, кроме как бежать обратно в зал, но похититель был проворнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 288,
    text:
      `
        Я подошла к человеку, и каково было мое удивление, когда ко мне повернулся тот самый ублюдок, который похитил меня и издевался.
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    music: require('../../../../Audio/Immortals/Antagonist.mp3'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 289,
    text:
      `
        Он схватил меня, зажал рукой рот и оттащил обратно к фонтану, усаживая на скамейку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 290,
    text:
      `
        — Катарина, не ожидал, что так скоро снова встречу тебя, — он прошептал мне это на ухо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 291,
    text:
      `
        — Отпусти меня или я буду кричать! — смогла проговорить я, вырвавшись из его хватки.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 292,
    text:
      `
        — Брось, у нас ведь с тобой такая приятная и неожиданная встреча. Мы, конечно, можем уединиться, если ты так хочешь покричать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 293,
    text:
      `
        — Но к большому сожалению, мне еще предстоит выступать на сцене. 
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 294,
    text:
      `
        — Зачем ты держишь меня? 
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 295,
    text:
      `
        — Я всего лишь хочу провести с тобой этот прекрасный вечер, не более. Я обещаю, что не причиню вреда.
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 296,
    text:
      `
        — Я ухожу! Отпусти меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 297,
    text:
      `
        Я быстро встала, но на этот раз незнакомец был грубее. Он сильно одернул меня за руку и уже более злым тоном проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 298,
    text:
      `
        — Я же сказал, сиди рядом. Я не говорил вставать, не говорил идти куда-то. Рядом!
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 299,
    text:
      `
        После этих слов стало совсем не по себе. Этот сумасшедший не дает отчет своим действиям. А что если он убьет меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 300,
    text:
      `
        — Послушай, Катарина, если бы ты просто делала то, что я прошу — проблем бы не было…
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 301,
    text:
      `
        Он замолчал на несколько секунд, а затем сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 302,
    text:
      `
        — Прости, если сделал больно, но ты вынуждаешь меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 303,
    text:
      `
        — Ты думаешь, я поверю в эту чушь? Засунь эти извинения куда-нибудь подальше!
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 304,
    text:
      `
        — Становишься смелее — это похвально, но не путай это со свободой. Ты все еще моя заложница и сидишь здесь со мной только потому, что «нашей Матери» пока не выгодна твоя смерть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 305,
    text:
      `
        — А само похищение — просто часть ее шутки, не более, — его рука проходилась по моей шее, я старалась отогнать его, но второй рукой он не позволял этого сделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 306,
    text:
      `
        — Хватит, остановись, мне неприятны твои прикосновения…
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 307,
    text:
      `
        — Почему? Я же так хочу тебя…
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 308,
    text:
      `
        «Да что с ним не так?»
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 309,
    text:
      `
        — Прекрати этот спектакль…
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 310,
    text:
      `
        Он проигнорировал очередную просьбу отпустить меня, достал из-за пазухи флакончик, что используют для хранения духов, и распылил его прямо перед моим носом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 311,
    text:
      `
        — Мне сказали, что люди благодаря этому средству становятся более разговорчивы, может быть и ты сможешь расслабиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 312,
    text:
      `
        Я тут же почувствовала аромат роз с примесью лаванды. 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 313,
    text:
      `
        «Что происходит?»
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 314,
    text:
      `
        Я попыталась прикрыть рукой нос, не дышать, но мужчина пресек все мои попытки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 315,
    text:
      `
        Через некоторое время я ощутила сильное головокружение. Все перед глазами плыло, тело бросало в жар. 
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 316,
    text:
      `
        — Что ты со мной сделал? — я вдруг почувствовала сильное влечение к этому мужчине, хоть и пыталась сопротивляться навязчивым мыслям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 317,
    text:
      `
        — О, это только начало. Теперь ты наконец можешь расслабиться у меня в руках, — он потянулся своими губами к моим. 
      `,
    buttons: [
      {
        text: 'Поддаться соблазну',
        goTo: 318,
        gift: true
      },
      {
        text: 'Противостоять',
        goTo: 346
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 318,
    text:
      `
        Это средство словно сняло внутренние ограничители. Я была не в силах ему сопротивляться. Губы незнакомца жадно впились в мои, а я ему охотно отвечала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 319,
    text:
      `
        Я чувствовала, как этот глубокий поцелуй нравится мне все больше. Мужчина аккуратно положил меня на скамейку, нависая, продолжая покрывать поцелуями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 320,
    text:
      `
        Его руки ловко проникли под одежду. Он не стесняясь трогал мои интимные места, словно, я всегда ему принадлежала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 321,
    text:
      `
        Когда он оторвался от моих губ, то облизнулся и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 322,
    text:
      `
        — Видишь? Тебе же самой нравится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 323,
    text:
      `
        — Это не так… — я произнесла эти три коротких слова тяжело дыша и все еще помня прикосновения мужчины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 324,
    text:
      `
        Он наклонился и прошептал:
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 325,
    text:
      `
        — Какая же ты сладкая… 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 326,
    text:
      `
        Незнакомец стал целовать мою шею, проходится языком вдоль, немного прикусывая. Я не удержалась и испустила громкий стон, чем только раззадорила мужчину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 327,
    text:
      `
        — Тише, милая, а вдруг нас кто-нибудь услышит, ты же не хочешь быть обнаруженной?
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 328,
    text:
      `
        Его руки стали расстегивать платье. Он справлялся с этим довольно умело и быстро. Мужчина обнажил мою грудь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 329,
    text:
      `
        «Это все неправильно… нет…»
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 330,
    text:
      `
        Головой я понимала то, что сейчас происходит — большая ошибка. Но телу было настолько хорошо, что я не могла с этим ничего поделать, только лишь полностью отдаться.  
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 331,
    text:
      `
        Незнакомец ласкал мою грудь, параллельно трогая нижнюю часть тела, доставляя неземное удовольствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 332,
    text:
      `
        Несколько пальцев беспрепятственно проникали внутрь меня, а я лишь крепче прижалась к нему всем телом, не в силах сдержать стоны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 333,
    text:
      `
        Я довольно быстро достигла пика удовольствия и обмякла в руках незнакомца, тяжело дыша. 
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 334,
    text:
      `
        — Хочешь большего? 
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 335,
    text:
      `
        — Я…
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 336,
    text:
      `
        Мне не удалось договорить, так как послышались голоса, идущие в нашу сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 337,
    text:
      `
        — Очень жаль, — мужчина поправил свой пиджак и встал. — Мне пора, советую незамедлительно привести себя в порядок и ни в коем случае не пропустить конец вечера.
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 338,
    text:
      `
        Мой разум начал приходить в норму и я стала быстро возвращать себе нормальный вид. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 339,
    text:
      `
        Напоследок мужчина посмотрел на меня и с ухмылкой проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 340,
    text:
      `
        — В следующий раз я доведу дело до конца. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    message: 'Мужчина держит свое слово',
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    stats: [
      { story: EStoriesEn.Immortals, value: 1, category: 'Person', id: 'Alexander', silent: true }],
    achievement: { story: EStoriesEn.Immortals, name: 'LoveEvil' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 341,
    text:
      `
        Когда он ушел, я продолжала сидеть на скамейке, обдумывая происходящее. Мимо прошла воркующая парочка, которая приветливо поздоровалась со мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 342,
    text:
      `
        А я толком и не обратила на них внимания, ведь сидела в полной растерянности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 343,
    text:
      `
        «Может, он не такой плохой….? Да, отлично, $Имя Игрока$. Давай оправдывать злодея, потому что он хорошо орудовал пальчиками».
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 344,
    text:
      `
        Мне было стыдно, но в то же время полученное удовольствие затмевало здравый смысл.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 345,
    text:
      `
        Пока я решила отпустить ситуацию и вернуться на мероприятие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 346,
    text:
      `
        Мне удалось найти в себе силы и отвернуться. Мое тело ныло от желания, но разум оставался чистым и непреклонным.
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 347,
    text:
      `
        — Почему именно я?
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 348,
    text:
      `
        — А что такого в том, что мужчина желает красивую женщину? 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 349,
    text:
      `
        Незнакомец прошелся рукой по моей шее, груди… 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 350,
    text:
      `
        — Соглашайся, Катарина! 
      `,
    buttons: [
      {
        text: 'Отдаться незнакомцу',
        goTo: 351,
        gift: true
      },
      {
        text: 'Оттолкнуть',
        goTo: 379
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 351,
    text:
      `
        Это средство словно сняло внутренние ограничители. Я была не в силах ему сопротивляться. Губы незнакомца жадно впились в мои, а я ему охотно отвечала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 352,
    text:
      `
        Я чувствовала, как этот глубокий поцелуй нравится мне все больше. Мужчина аккуратно положил меня на скамейку, нависая, продолжая покрывать поцелуями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 353,
    text:
      `
        Его руки ловко проникли под одежду. Он не стесняясь трогал мои интимные места, словно, я всегда ему принадлежала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 354,
    text:
      `
        Когда он оторвался от моих губ, то облизнулся и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 355,
    text:
      `
        — Видишь? Тебе же самой нравится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 356,
    text:
      `
        — Это не так… — я произнесла эти три коротких слова тяжело дыша и все еще помня прикосновения мужчины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 357,
    text:
      `
        Он наклонился и прошептал:
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 358,
    text:
      `
        — Какая же ты сладкая… 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 359,
    text:
      `
        Незнакомец стал целовать мою шею, проходится языком вдоль, немного прикусывая. Я не удержалась и испустила громкий стон, чем только раззадорила мужчину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 360,
    text:
      `
        — Тише, милая, а вдруг нас кто-нибудь услышит, ты же не хочешь быть обнаруженной?
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 361,
    text:
      `
        Его руки стали расстегивать платье. Он справлялся с этим довольно умело и быстро. Мужчина обнажил мою грудь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 362,
    text:
      `
        «Это все неправильно… нет…»
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 363,
    text:
      `
        Головой я понимала то, что сейчас происходит — большая ошибка. Но телу было настолько хорошо, что я не могла с этим ничего поделать, только лишь полностью отдаться.  
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 364,
    text:
      `
        Незнакомец ласкал мою грудь, параллельно трогая нижнюю часть тела, доставляя неземное удовольствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 365,
    text:
      `
        Несколько пальцев беспрепятственно проникали внутрь меня, а я лишь крепче прижалась к нему всем телом, не в силах сдержать стоны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 366,
    text:
      `
        Я довольно быстро достигла пика удовольствия и обмякла в руках незнакомца, тяжело дыша. 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 367,
    text:
      `
        — Хочешь большего? 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 368,
    text:
      `
        — Я…
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 369,
    text:
      `
        Мне не удалось договорить, так как послышались голоса, идущие в нашу сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 370,
    text:
      `
        — Очень жаль, — мужчина поправил свой пиджак и встал. — Мне пора, советую незамедлительно привести себя в порядок и ни в коем случае не пропустить конец вечера.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 371,
    text:
      `
        Мой разум начал приходить в норму и я стала быстро возвращать себе нормальный вид. 
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 372,
    text:
      `
        Напоследок мужчина посмотрел на меня и с ухмылкой проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 373,
    text:
      `
        — В следующий раз я доведу дело до конца. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    message: 'Мужчина держит свое слово',
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Person', id: 'Alexander', silent: true }],
    achievement: { story: EStoriesEn.Immortals, name: 'LoveEvil' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 374,
    text:
      `
        Когда он ушел, я продолжала сидеть на скамейке, обдумывая происходящее. Мимо прошла воркующая парочка, которая приветливо поздоровалась со мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 375,
    text:
      `
        А я толком и не обратила на них внимания, ведь сидела в полной растерянности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 376,
    text:
      `
        «Может, он не такой плохой….? Да, отлично, $Имя Игрока$. Давай оправдывать злодея, потому что он хорошо орудовал пальчиками».
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 377,
    text:
      `
        Мне было стыдно, но в то же время полученное удовольствие затмевало здравый смысл.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 378,
    text:
      `
        Пока я решила отпустить ситуацию и вернуться на мероприятие.
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 379,
    text:
      `
        — Иди к черту! 
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'PushAlexander' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 380,
    text:
      `
        — Жаль, — незнакомец сел рядом со мной и томно вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 381,
    text:
      `
        — Раз даже средство не сработало, значит, я совсем тебе не интересен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 382,
    text:
      `
        — Я не буду иметь ничего общего с похитителями-тиранами! 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 383,
    text:
      `
        — Что ж, буду надеяться на еще один шанс, милая моя, а пока что, лучше приведи себя в порядок и вернись на прием. 
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    message: 'Мужчина еще попытается добиться вас',
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 384,
    text:
      `
        Он насильно взял мою руку и поцеловал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 385,
    text:
      `
        «Нужно опасаться этого человека… Лучше сообщить Роберту о том, что этот негодяй здесь». 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 386,
    text:
      `
        «Мне совершенно не хочется искать приключений на свою голову, а вдруг это не простой человек?»
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    music: require('../../../../Audio/Immortals/Ball.mp3'),
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Choice', id: 'LeaveGarden' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 387,
    text:
      `
        Разыгравшаяся паранойя не позволила мне ни на минуту задержаться в этом саду. Я быстро встала и вернулась на мероприятие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 388,
    text:
      `
        В общем зале гости постепенно расходились, занимая места с лучшим обзором. Публика была в нетерпении. Оркестр уже складывал инструменты, освобождая сцену для будущих выступлений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    music: require('../../../../Audio/Immortals/Ball.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 389,
    text:
      `
        Я увидела, как Никола Тесла стоял у окна, сжимая в руках бумагу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 390,
    text:
      `
        — Никола, все в порядке? Волнуешься?
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 391,
    text:
      `
        — Не хочу видеть Эдисона. От одного его вида мне становится тошно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 392,
    text:
      `
        Я понимающе кивнула, осознавая несправедливость, с которой столкнулся Тесла. Ведь именно в этот период жизни Николы, Томас Эдисон отказывался выплачивать ему деньги за проделанную работу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 393,
    text:
      `
        Начало их затяжного конфликта было положено.
      `,
    buttons: [
      {
        text: '',
        goTo: 508
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 394,
    text:
      `
        Ученый улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 395,
    text:
      `
        — Все равно он не сможет лишить меня той малости, которую я заработал. Я обязательно отыграюсь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 396,
    text:
      `
        — Если не на работе, то в соответствующих клубах. И хоть я проиграл тогда, мне же просто не повезло…
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 397,
    text:
      `
        «Он снова про свою зависимость. Он будто бы просит помощи...»
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 398,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) >= 5
        },
        goTo: 399
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) <= 4
        },
        goTo: 406
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 399,
    text:
      `
        — Никола, послушай, тебе не стоит так тратить свое время и способности. Ты должен понимать, что этот досуг не привнесет в твою жизнь ничего хорошего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 400,
    text:
      `
        — Временная эйфория от выигрышей, на самом деле ничто по сравнению с тем, сколько ты теряешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 401,
    text:
      `
        — Я благодарен тебе за беспокойство, однако я в состоянии самостоятельно принять решение относительно своей жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 402,
    text:
      `
        — А как же твои исследования, — я не собиралась сдаваться. — Твои идеи на счет тока… Неужели ты просто готов сдаться и погрязнуть в долгах? Пойми же ты, твое время еще настанет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 403,
    text:
      `
        Тесла отвернулся, словно, что-то обдумывая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 404,
    text:
      `
        — Спасибо, Катарина, я непременно прислушаюсь к тебе. А сейчас извини, я хотел бы подготовиться к выступлению, — мужчина с задумавшимся видом отошел в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 405,
    text:
      `
        «Надеюсь, он прислушается к моим словам…»
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    message: 'Ваши знания помогают Тесле избавиться от зависимости',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Nicola' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'SupportNicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 406,
    text:
      `
        «Что мне ему сказать? Все равно он сам себе на уме…»
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 407,
    text:
      `
        — Никола, ты же можешь лучше! Я знаю…
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 408,
    text:
      `
        В голову не приходили конкретные примеры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 409,
    text:
      `
        «Нужно было больше уделять времени учебе и углубиться в биографию Теслы». 
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 410,
    text:
      `
        — Я прекрасно осознаю свои возможности, а вот ты не понимаешь, что мне нужны деньги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 411,
    text:
      `
        «Бесполезно, он же так всю жизнь проиграет!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 412,
    text:
      `
        — Спасибо за беспокойство, Катарина, я непременно услышал тебя. А сейчас извини, я хотел бы подготовиться к выступлению, — мужчина отошел в сторону с довольно грустным видом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    message: 'Ваших знаний недостаточно, чтобы помочь Тесле избавиться от зависимости ',
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 413,
    text:
      `
        Последние приготовления к выступлениям были завершены. 
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 414,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'PushAlexander' }) >= 1
        },
        goTo: 416
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'PushAlexander' }) <= 0
        },
        goTo: 418
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 416,
    text:
      `
        Я искала Роберта, чтобы рассказать о встрече с негодяем. Однако мужчины нигде не было. 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 417,
    text:
      `
        «Черт, а что если злодей что-то замышляет…»
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 418,
    text:
      `
        К зрителям вышел организатор мероприятия и наконец-то объявил о начале. 
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 419,
    text:
      `
        — Прошу выйти на сцену мистера Николу Теслу с его покровителем — Робертом Джонсоном!
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Ballkeeper.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 420,
    text:
      `
        Роберт и Никола держались довольно нейтрально. Их лица выражали абсолютное спокойствие и сосредоточенность на своей работе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 421,
    text:
      `
        Организатор объявил о еще нескольких претендентах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 422,
    text:
      `
        — И, наконец, за дополнительное финансирование и признание поборется Мистер Томас Эдисон вместе с Эдвардом Брауном.  
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Ballkeeper.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    darkSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 423,
    text:
      `
        Взгляд тут же зацепился за Эдисона. Высокий, стройный. Любимый всеми высокомерный взгляд и радушная улыбка при виде ликующих зрителей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 424,
    text:
      `
        А вот его коллега Эдвард казался мне смутно знакомым. 
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 425,
    text:
      `
        Я оцепенела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 426,
    text:
      `
        «Это не может быть правдой…»
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 427,
    text:
      `
        Я отчетливо видела лицо Нэйтана. Мужчина был практически один в один как мой профессор из современности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 428,
    text:
      `
        «Это невозможно!»
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 429,
    text:
      `
        Эдвард окинул зал взглядом и его взор упал на меня. Он довольно долго рассматривал мое лицо, не скрывая удивления, а затем сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 430,
    text:
      `
        — Также с недавнего времени к нам присоединился Александр Гончаров, прошу встретить его аплодисментами!
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    simple: require('../../../../Audio/Immortals/Applause.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 431,
    text:
      `
        Никто иной как «мистер зло» вальяжно вошел на сцену и поклонился гостям.
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Alexander' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 432,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'ResistAlexander' }) === 0
        },
        goTo: 433
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'PushAlexander' }) === 0
        },
        goTo: 433
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'PushAlexander' }) === 1
        },
        goTo: 436
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'GoToTerrace' }) === 1
        },
        goTo: 438
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'WaitRobert' }) === 1
        },
        goTo: 438
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'LeaveGarden' }) === 1
        },
        goTo: 438
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 433,
    text:
      `
        Меня невольно бросило в жар от воспоминаний о проведенном с ним времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 434,
    text:
      `
        Он смотрел на меня с жадностью, улыбался и даже осмелился подмигнуть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 435,
    text:
      `
        Это не скрылось от глаз Роберта, который выглядел взбешенным. Безусловно, он узнал его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 436,
    text:
      `
        Я тут же встретилась глазами с Робертом. Он выглядел взбешенным и готов был рвать и метать при виде моего испуганного взгляда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 437,
    text:
      `
        Тесла почувствовал неладное и положил другу на плечо руку, дабы разрядить обстановку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 438,
    text:
      `
        Его появление вызвало у меня одно лишь негодование. 
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 439,
    text:
      `
        «Значит, Эдисон спелся со злодеем? И при чем тут Эдвард или Нэйтан… Я ничего не понимаю!»
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 440,
    text:
      `
        После всех представлений, участники стали рассказывать про свои изобретения и возможное развитие будущего электричества. 
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 441,
    text:
      `
        Я понимала, что сейчас речь идет о переменном и постоянном токе. Эта основная суть конфликта Эдисона и Теслы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 442,
    text:
      `
        Но я не была сильна в этой области, поэтому если кратко: Эдисон разработал системы освещения, которые могли работать на дальних дистанциях, но с маленьким напряжением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Thomas.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 443,
    text:
      `
        Для равномерного распределения электричества, нужно было строить электростанции практически в каждом районе города. В связи с чем это обходилось правительству в кругленькую сумму. 
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 444,
    text:
      `
        Тесла вместе с известным предпринимателем по фамилии Вестингауз предлагали более дешевый метод освещения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 445,
    text:
      `
        Построить одну большую электростанцию и снижать напряжение путем передачи тока через провода и подстанции.
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 446,
    text:
      `
        Конфликт длился долго и каждый не стеснялся использовать грязные методы для победы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 447,
    text:
      `
        Выступления были ограничены по времени. Каждый оратор старался кратко и по сути рассказать о своих изобретениях и влиянии, которое они могут оказать в будущем.
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 448,
    text:
      `
        Я завороженно любовалась дебатами и с удовольствием слушала новую для меня информацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 449,
    text:
      `
        Когда все представили, что хотели и вечер подходил к концу, Роберт был рядом, так как волновался за мою безопасность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 450,
    text:
      `
        А меня не отпускала мысль, что я вижу Нэйтана или его предка…
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 451,
    text:
      `
        «Это не может быть совпадением. Как и в случае со мной. Очевидно, что Катарина мой двойник. Неужели и у Нэйтана также? Он путешественник? Или это действительно его родственник? Я должна выяснить!»
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 452,
    text:
      `
        Я облокотилась о стену, так как сильно закружилась голова. Тяжело было контролировать такой поток информации. Одно накладывалось на другое. Путаница. Хаос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 453,
    text:
      `
         Я потеряла сознание в руках Роберта. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Immortals', 'Глава 1', 'Часть 5', '0')
        }
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'Chapter01Part04Completed' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },
  {
    id: 454,
    text:
      `
        Роберт еще немного посидел со мной, но вскоре ушел. Для него жизнь шла своим размеренным ходом, мне же предстояло долгое лечение.
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 455,
    text:
      `
        Так прошло несколько дней моего пребывания в больнице. Меня не покидала надежда о скором возвращении в свой мир, однако я все еще была непрошенным гостем эпохи Теслы.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 456,
    text:
      `
        Были и позитивные моменты. К примеру, меня часто навещал Роберт. С цветами, радушной улыбкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 457,
    text:
      `
       — Я надеюсь, что тебе, как и мне однажды, Бог покажет нужные знаки. Но не забывай — он может только направлять. Все остальное зависит от стремлений и целей.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 458,
    text:
      `
       — Я с удовольствием!
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 459,
    text:
      `
      Никола вручил мне свои записи.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 460,
    text:
      `
        В отчаянии я попросила Роберта как-нибудь уговорить врачей на продолжение лечения дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 461,
    text:
      `
       — По твоей просьбе я убедил доктора выписать тебя раньше назначенного срока. Но он взял с меня слово, что я прослежу за тем, чтобы ты соблюдала режим и не забывала принимать лекарства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 462,
    text:
      `
        Я благодарно кивнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 463,
    text:
      `
        Нас уже ожидал небольшой экипаж и не слишком терпеливый кучер. Когда мы сели внутрь, я по-настоящему расслабилась, радуясь, что мне удалось сменить обстановку.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 464,
    text:
      `
       Транспорт медленно тронулся, однако из-за небольшой тряски и нестабильного самочувствия, я вдруг ощутила характерную сонливость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 465,
    text:
      `
        Вскоре экипаж остановился. Я самостоятельно попыталась встать, но Роберт не позволил этого сделать. Он подал мне руку и помог выбраться из транспорта.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 466,
    text:
      `
       «Надо продолжать делать вид, что от шока я потеряла часть воспоминаний. Мне нужна эта информация, пусть расскажет мне все от начала до конца».
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 467,
    text:
      `
       — Не совсем, — Роберта, казалось, позабавил мой вывод. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    message: 'Вы сделали неверное предположение',
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 468,
    text:
      `
      Ничего подобного до этого я не пила. Напиток на вкус был обжигающим, с нотками карамели и каких-то трав.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 469,
    text:
      `
      — Как знаешь, а вот я выпью, — сказал Роберт и сделал приличный глоток напитка.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 470,
    text:
      `
      — Так что, Роберт? Что все это значит?
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 471,
    text:
      `
      — И что ты теперь думаешь? Про кровь, про этого человека?
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 472,
    text:
      `
      Роберт сел передо мной на колени и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 473,
    text:
      `
     Роберт перевел взгляд на часы, встал, чтобы собрать некоторые вещи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 474,
    text:
      `
     Мне совершенно не хотелось оставаться сейчас одной. Особенно после всего этого неприятного разговора. Поэтому я набралась смелости и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 475,
    text:
      `
     — А ты не можешь перенести встречу?
      `,
    buttons: [
      {
        text: '',
        goTo: 476
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 476,
    text:
      `
   Роберт был удивлен вопросу. Видимо, до этого Катарина молча соглашалась с его постоянными разъездами и своим одиночеством.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 477,
    text:
      `
      От его заботы будто бы ни осталось и следа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 478,
    text:
      `
        Мужчина протянул мне тот самый нож, который служил защитой от монстра.
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    imageFront: require('../../../../Images/Immortals/Items/Knife.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 479,
    text:
      `
        «Эта вещь напоминание о произошедшем. Стоит ли его сохранить?»
      `,
    buttons: [
      {
        text: 'Оставить нож',
        goTo: 155
      },
      {
        text: 'Выбросить нож',
        goTo: 157
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 480,
    text:
      `
       — Что за прием?
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 481,
    text:
      `
        — Как ты уже поняла, моя основная деятельность — искать этих тварей и истреблять. Однако в обычной жизни я известный бизнесмен, который инвестирует в потенциально прибыльные проекты.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 482,
    text:
      `
       «Прием? Но как мне там вести себя? Как же хочется просто взять и отказаться».
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 483,
    text:
      `
         — Не слишком наряжайся, это не такое уж торжественное мероприятие, и времени у нас не так много, — Роберт скрестил руки, пристально наблюдая за мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 484,
    text:
      `
     — Что я там не видел… К тому же, мы опаздываем, так будет быстрее, — он принялся раздевать меня, словно делал это уже не раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 485,
    text:
      `
     Я осталась в одном нижнем белье. Хоть в это консервативное время оголенными были только мои руки, но я все равно чувствовала неловкость.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 486,
    text:
      `
        — За нами уже приехали, если ты готова, можно выходить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  },

  {
    id: 487,
    text:
      `
       Место напоминало замок, где множество гостей вели светские беседы. Все они были одеты богато, будто бы нарочно показывали свой статус посредством дорогих украшений и платьев.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    music: require('../../../../Audio/Immortals/Ball.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 488,
    text:
      `
       Мужчина кивнул и мы двинулись в центр зала.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 489,
    text:
      `
       От чего-то меня захлестнула обида. Почему он постоянно уходит, когда ему вздумается, совершенно игнорируя мое состояние? 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 490,
    text:
      `
        Я поздоровалась с ними и заняла свой тихий уголок вдали от них, наслаждаясь открывшимся видом.
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 491,
    text:
      `
        Прохладный воздух щекотал лицо, придавая чувство свежести и легкости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 492,
    text:
      `
        — Никола, я не видела тебя на приеме… 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 493,
    text:
      `
        — Ты, я полагаю, в числе выступающих?
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 494,
    text:
      `
        — Никола, спасибо, — я вдруг ощутила необходимость поделиться своими искренними чувствами. — Ты действительно удивительный человек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 495,
    text:
      `
        Никола радушно улыбнулся и развел руки в стороны, приглашая меня в свои объятия. Я прильнула к его груди и почувствовала размеренное дыхание.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 496,
    text:
      `
        «Запах сигар, алкоголя…»
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 497,
    text:
      `
       Спорить было бессмысленно, Никола слишком беспокоится о чести и прочих нюансах этого времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Terrace.jpg')
  },

  {
    id: 498,
    text:
      `
       Поэтому в скором времени я вновь наслаждалась только своим обществом.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 499,
    text:
      `
        Мужчина сидел ровно, попивая шампанское, как подобает человеку со статусом в рамках данного мероприятия. Он долгое время смотрел на зал, немного отстраненным взглядом. Затем обернувшись ко мне, спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 500,
    text:
      `
        В центр помещения стали выходить гости, ожидая когда же музыканты начнут свое выступление. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 501,
    text:
      `
        Роберт подошел ко мне на довольно близко, взял мою неповрежденную руку и стал медленно покачиваться в такт музыке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 502,
    text:
      `
       — Я отношусь к этому как к чему-то вынужденному, вот и все. 
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Robert_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 503,
    text:
      `
        Ночная прохлада действовала успокаивающе. К сожалению, небо заволокло тучами, поэтому звезд не было видно.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 504,
    text:
      `
        Я присела на скамейку, где смогла наконец насладиться тишиной и прохладой. Всматриваясь в темноту, я увидела фигуру, которая лежала на бортике фонтана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 505,
    text:
      `
        «А если ему нужна помощь? Я не могу его здесь просто бросить».
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 506,
    text:
      `
        «Он сумасшедший… То, что он сделал со мной… Как я могу».
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 507,
    text:
      `
        — Почему ты такая упрямая? — мужчина заметно погрустнел. — Это же всего лишь небольшая шалость. Давай же, я сделаю тебе очень хорошо! 
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    stats: [{ story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'ResistAlexander', silent: true }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 508,
    text:
      `
        — Это всего лишь этап, который ты должен пережить. Просто помни, что твои открытия значат для тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 509,
    text:
      `
       Зал зааплодировал. Мне удалось занять хорошее место, поэтому я смогла наблюдать за событиями в первых рядах.  
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },
  {
    id: 510,
    text:
      `
        Я не верила своим глазам. Одно потрясение за другим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    parallax: 'right',
    simple: require('../../../../Audio/Immortals/Applause.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },

  {
    id: 511,
    text:
      `
        «Видимо на данном этапе ему помогает Роберт. Странно, что о нем не было упоминания в известных мне биографиях Теслы».
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Katarina_Ball') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Ball_Hall.jpg')
  },
  {
    id: 512,
    text:
      `
        На нем была та же маска, выражение лица довольное понурое. На секунду мне показалось, что я вижу слезу на его щеке.
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    music: require('../../../../Audio/Immortals/Antagonist.mp3'),
    imageFront: require('../../../../Images/Immortals/Persons/Antagonist_Smoking.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 513,
    text:
      `
        Мужчина резко открыл глаза, увидев меня он расплылся в хитрой улыбке. Я же принялась бежать, однако похититель был проворнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    music: require('../../../../Audio/Immortals/Antagonist.mp3'),
    parallax: 'left',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Garden.jpg')
  },

  {
    id: 514,
    text:
      `
        Он положил руку мне на талию, не отвлекаясь от чтения утренней газеты. Его объятие было довольно сухим, тем не менее, рядом с ним я чувствовала себя спокойно.
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 515,
    text:
      `
        Я не испытывала иллюзий, ведь возникало ощущение, что все эти прикосновения он делал машинально, не вкладывая особый смысл.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Carete.jpg')
  },

  {
    id: 516,
    text:
      `
       — Ты…
      `,
    buttons: [
      {
        text: 'Занимаешься опасным бизнесом',
        goTo: 108,
        func: () => { timer.stop() }
      },
      {
        text: 'Выслеживаешь монстров',
        goTo: 109,
        func: () => { timer.stop() }
      },
      {
        text: 'Работаешь в полиции',
        goTo: 112,
        func: () => { timer.stop() }
      }],
    beforeBegin: () => {
      timer.set(5, () => { scenarioManager.beginScene(108) })
    },
    imageFront: require('../../../../Images/Immortals/Persons/Katarina_Ragged.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Robert_Katarina_Room.jpg')
  }
])
