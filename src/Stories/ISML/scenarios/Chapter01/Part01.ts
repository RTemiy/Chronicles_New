import {
  achievementsManager,
  saveEndProgress,
  scenarioManager,
  soundManager,
  statsManager,
  wardrobe
} from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { musicPlayer } from '../../../../Functions/musicPlayer'
import { loadData, saveData } from '../../../../Functions/localStorageManager'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.ISML, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Кузнецкий мост пульсировал энергией, суетой и шумом.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: ' <i>Год назад ',
    music: require('../../../../Sounds/ISML/Main.mp3'),
    ambient: require('../../../../Sounds/ISML/City_Sounds.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 1,
    text:
      `
        Нина неслась по живым улицам.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 2,
    text:
      `
        В ее глазах играли искорки радости, а на губах сияла лучезарная улыбка, которая притягивала внимание окружающих.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 3,
    text:
      `
        Она была молода, красива и полна энергии — само воплощение счастья и возможностей.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 4,
    text:
      `
        — Прекрасно, что все идет по плану! Мне даже не нужно спешить на встречу с Марком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Нина ',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 5,
    text:
      `
        Проходя мимо площади я увидела, как играли уличные музыканты.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 6,
    text:
      `
        Замедляя шаг и постепенно останавливаясь, я наслаждалась мелодией.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 7,
    text:
      `
        Мысли были о друзьях, с которыми мы проводили много времени, слоняясь по городу и довольствуясь общением друг с другом.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/ISML/Music_Guitar.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Tabletop.jpg')
  },

  {
    id: 8,
    text:
      `
        Они всегда создавали атмосферу веселья и беззаботности, разговаривая о прошлых приключениях и планируя новые.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Tabletop.jpg')
  },

  {
    id: 9,
    text:
      `
        — Эти прогулки, наши шутки…
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Tabletop.jpg')
  },

  {
    id: 10,
    text:
      `
        — А еще та вечеринка, которую мы устроили летом! Она была такой… Незабываемой!
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Tabletop.jpg')
  },

  {
    id: 11,
    text:
      `
        — Как же я скучаю по нашим вечерам настольных игр!
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Tabletop.jpg')
  },

  {
    id: 12,
    text:
      `
        — Когда нибудь мы снова соберемся вместе и, как всегда, начнем спорить, с какой игры начать.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Tabletop.jpg')
  },

  {
    id: 13,
    text:
      `
        Эти встречи стали для меня святым обрядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Tabletop.jpg')
  },

  {
    id: 14,
    text:
      `
        В следующий момент сердце наполнилось лишь образами Марка.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Tabletop.jpg')
  },

  {
    id: 15,
    text:
      `
        Мысли о нем вспыхнули с новой силой: первый поцелуй, мгновение, когда между нами зародилась магия искренних чувств.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Date.jpg')
  },

  {
    id: 16,
    text:
      `
        Воспоминание о том, как он впервые взял меня за руку, разговоры до утра, отражение в его глазах, и обжигающее чувство в груди.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Date.jpg')
  },

  {
    id: 17,
    text:
      `
        Музыкальные звуки, обволакивающие теплым покрывалом тех эмоций, внезапно оборвались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    beforeBegin: whiteFlash,
    ambient: require('../../../../Sounds/ISML/City_Sounds.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 18,
    text:
      `
        Возвращение в реальность было чересчур резким, буквально ощутив каждой клеточкой своего тела, как воспоминания за мгновение улетучиваются под давлением окружающей суеты.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 19,
    text:
      `
        С сожалением осознавая, что время неумолимо движется вперед, я отвернулась от музыкантов.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 20,
    text:
      `
        Толпа восторженно провожала их возгласами благодарности, заполняя улицу звуками аплодисментов, пока я медленно продолжила свой путь к намеченной встрече.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    simple: require('../../../../Sounds/ISML/Applause.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 21,
    text:
      `
        В душе оставался теплый след от воспоминаний, напоминающий мне о близких для меня людях.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 22,
    text:
      `
        Из сумки я достала наушники, надев их на голову, мгновенно отключившись от шума вокруг.
      `,
    buttons: [
      {
        text: 'Я любила электронную музыку',
        func: () => {
          soundManager.play('music', musicPlayer.FavouriteNinaSong01)
          saveData(['ISML', 'Favourite', 'Music'], ['01'])
          saveData(['Achievement'], ['ChooseElectro'])
        },
        goTo: 23
      },
      {
        text: 'Я любила K-pop',
        func: () => {
          soundManager.play('music', musicPlayer.FavouriteNinaSong02)
          saveData(['ISML', 'Favourite', 'Music'], ['02'])
          saveData(['Achievement'], ['ChooseKpop'])
        },
        goTo: 23
      },
      {
        text: 'Я любила рок',
        func: () => {
          soundManager.play('music', musicPlayer.FavouriteNinaSong03)
          saveData(['ISML', 'Favourite', 'Music'], ['03'])
          saveData(['Achievement'], ['ChooseRock'])
        },
        goTo: 23
      }
    ],
    message: 'Получен предмет: наушники',
    parallax: 'left',
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    stats: [
      { story: EStoriesEn.ISML, value: 1, category: 'Item', id: 'Headphones' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 23,
    text:
      `
        Из сумки я извлекла наушники, надев их на голову, мгновенно отключившись от шума вокруг.
      `,
    buttons: [
      {
        text: 'Я любила электронную музыку',
        func: () => {
          soundManager.play('music', musicPlayer.FavouriteNinaSong01)
          saveData(['ISML', 'Favourite', 'Music'], ['01'])
          saveData(['Achievement'], ['ChooseElectro'])
        }
      },
      {
        text: 'Я любила K-pop',
        func: () => {
          soundManager.play('music', musicPlayer.FavouriteNinaSong02)
          saveData(['ISML', 'Favourite', 'Music'], ['02'])
          saveData(['Achievement'], ['ChooseKpop'])
        }
      },
      {
        text: 'Я любила рок',
        func: () => {
          soundManager.play('music', musicPlayer.FavouriteNinaSong03)
          saveData(['ISML', 'Favourite', 'Music'], ['03'])
          saveData(['Achievement'], ['ChooseRock'])
        }
      },
      {
        text: 'Выбрать прослушиваемую',
        goTo: 26
      }
    ],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 26,
    text:
      `
        Погрузившись с головой в музыку, я почувствовала, как мелодии становились неотъемлемой частью внутреннего мира.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    parallax: 'left',
    beforeBegin: () => {
      achievementsManager.unlock(EStoriesEn.ISML, loadData(['Achievement'])!)
    },
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 27,
    text:
      `
        Воздух был наполнен различными ароматами — резкий запах бензина, аромат кофе с булочками из кофеен и сладкий запах цветов, распускающихся в придорожных горшках.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 28,
    text:
      `
        Теплый ветер целовал щеки, словно прикосновения любимого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 29,
    text:
      `
        Сердце билось в унисон с ритмом музыки.
      `,
    buttons: [
      {
        text: 'Я достала сигарету и закурила',
        goTo: 30
      },
      {
        text: 'Я начала стучать по бедру в такт музыки',
        goTo: 34
      }],
    message: 'Сейчас вы сделаете свой первый выбор. Некоторые из них меняют сюжет незначительно, другие же ведут к серьезным переменам. Но помните, только Вам решать, какой вы видите свою главную героиню',
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 30,
    text:
      `
        Это было мгновение отдыха и удовольствия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    message: 'Получен предмет: пачка сигарет',
    parallax: 'left',
    stats: [
      { story: EStoriesEn.ISML, value: 1, category: 'Item', id: 'Cigarettes' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 31,
    text:
      `
        Вкус дыма заполнил рот, а ощущение тяжести и облегчения наполнило легкие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 32,
    text:
      `
        Это способ насладиться моментом, на фоне звуков.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 33,
    text:
      `
        Спокойствие растеклось по всем капиллярам, пока дым плыл в воздухе, унося за собой легкое напряжение.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 34,
    text:
      `
        Под влиянием мелодий я почувствовала, как все внутри меня превращается в настоящий концерт, где каждая мысль и каждое ощущение, становятся нотами моей собственной симфонии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 35,
    text:
      `
        Мелодии музыки сливались в одно целое с потоком сознания.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 36,
    text:
      `
        Я не могла удержаться и начала стучать по бедру в такт музыки, словно добавляя свой ритм к общей гармонии звуков.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 37,
    text:
      `
        Это было спонтанным проявлением радости и энергии, которые я испытывала.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 38,
    text:
      `
        Наконец, добравшись до места встречи с Марком, я переступила через порог, открыв холодную кованую дверь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    music: require('../../../../Sounds/ISML/Main.mp3'),
    parallax: 'right',
    imageBack: require('../../../../Images/ISML/Backgrounds/Street_Musicians.jpg')
  },

  {
    id: 39,
    text:
      `
        Кафе располагалось на пересечении двух улиц, будто бы приглашая всех, кто хотел найти убежище от суматохи.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 40,
    text:
      `
        Заведение было украшено множеством лампочек, которые освещали помещение рассеянным ярким светом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 41,
    text:
      `
        А воздух был пропитан ароматом цитрусов и ванили с успокаивающими нотками травяного чая.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 42,
    text:
      `
        Стоя у порога, я заметила Марка и помахала ему рукой.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 43,
    text:
      `
        В этот момент мое сердце застучало, а весь организм наполнился теплотой любви. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 44,
    text:
      `
        Наши взгляды встретились, и в тот же миг я ощутила, как мир вокруг замедляется, чтобы мы смогли насладиться этим мгновением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 45,
    text:
      `
        — Привет, Нина! 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ISML, value: 0, category: 'Person', id: 'Mark' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 46,
    text:
      `
        Не успев ответить, я бросилась к нему в объятия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 47,
    text:
      `
        — Привет!
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 48,
    text:
      `
        Чувствуя, как тепло его шеи согревает мои холодные руки, я прижалась к нему, вдыхая аромат парфюма, который опьянял меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 49,
    text:
      `
        — Я уже заказал для тебя кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Марк ',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 50,
    text:
      `
        После теплых приветствий мы сели за столик у окна, откуда открывался вид на город. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 51,
    text:
      `
        Марк с интересом смотрел на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 52,
    text:
      `
        — Расскажи мне о тех днях, когда мы не виделись.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Марк ',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 53,
    text:
      `
        — Я вижу по твоему лицу, тебе есть что рассказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Марк ',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 54,
    text:
      `
        Сделав глубокий вздох, я задумалась, что и правда из-за учебы, прочих заморочек, не удавалось уделять достаточно времени простым разговорам.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 55,
    text:
      `
        — Ну, начнем с того, что сегодня я проснулась в панике из-за предстоящего экзамена по анатомии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 56,
    text:
      `
        — Весь день не могла найти себе места, пытаясь запомнить билеты. Мне кажется, я схожу с ума. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 57,
    text:
      `
        — Ты ведь знаешь, как я нервничаю в периоды сессий.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 58,
    text:
      `
        Марк кивнул, сочувственно положив мне руку на плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 59,
    text:
      `
        — Конечно, понимаю. Но я уверен — ты справишься.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 60,
    text:
      `
        — Надеюсь...
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 61,
    text:
      `
        — А еще вчера я решила приготовить роллы с тунцом, чтобы отвлечься от всего этого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 62,
    text:
      `
         <p>— Первая попытка получилась далеко от идеала.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 63,
    text:
      `
        — Тунец был не свежим, а рис... ну, он разваливался. Но меня натолкнуло на занимательную идею.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 64,
    text:
      `
        — Собраться вместе и попробовать приготовить роллы. Ты точно затмишь меня своими кулинарными способностями.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 65,
    text:
      `
        — Давай попробуем. Но не принижай себя. Мы ведь команда. И нам есть чему друг у друга поучиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Марк ',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 66,
    text:
      `
        Пока мы болтали официант успел принести заказ.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 67,
    text:
      `
        — Кофе для очаровательной девушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Официант',
    imageFront: require('../../../../Images/ISML/Persons/Waiter.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 68,
    text:
      `
        Марк немного грозно посмотрел на мужчину, но все же быстро смягчился.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 69,
    text:
      `
        — Благодарю.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speaker: 'Марк ',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 70,
    text:
      `
        — Это кофе с необычным сиропом, который меняет цвет…
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'Марк ',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 71,
    text:
      `
        Я удивленно посмотрела на чашку, в которой напиток медленно изменял свои оттенки.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageFront: require('../../../../Images/ISML/Objects/Coffee.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 72,
    text:
      `
        От темно-коричневого он плавно перетекал в нежно-розовый, а потом, словно захватывая солнечные лучи, превращался в золотистый. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Images/ISML/Objects/Coffee.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 73,
    text:
      `
        — Ты что, волшебник?
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 74,
    text:
      `
        Марк ехидно посмотрел на меня, поигрывая ложечкой в чашке.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 75,
    text:
      `
        — Здешняя новинка. Сироп, который в нем используется, чувствителен к свету и именно это заставляет его менять цвета.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 76,
    text:
      `
        Марк сделал вид умного ученого и мы приступили к дегустации.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 77,
    text:
      `
        Вкус, к моему разочарованию, у него обыденный, как у любого кофе, но с нотками ореха и карамели.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 78,
    text:
      `
        — Знаешь, Нина, для меня всегда были важны такие моменты в жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 79,
    text:
      `
        — Порой, они кажутся более живыми, чем реальность сама по себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 80,
    text:
      `
        После милых посиделок, нас ждала прогулка по вечернему городу.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Cafe.jpg')
  },

  {
    id: 81,
    text:
      `
        Городские огни мерцали, похожие на маленькие звезды, освещая наш путь.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 82,
    text:
      `
        В этот вечер я осознала, что нашла в Марке не просто любовь, а человека, с которым каждый момент превращается в волшебство.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 83,
    text:
      `
        Мы плыли по волнам городского потока, находясь при этом в нашем собственном пузыре тишины.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 84,
    text:
      `
        — Помнишь, как мы встретились?
      `,
    buttons: [
      {
        text: 'Я окунулась в воспоминание',
        goTo: 86,
        gift: true
      },
      {
        text: 'Остаться в реальности',
        goTo: 112
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 86,
    text:
      `
        — Как могу забыть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 87,
    text:
      `
        То был первый год учебы. Я искала нужные материалы, чтобы подготовиться к зачету, но мое спокойствие было нарушено.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 88,
    text:
      `
        Симпатичный парень споткнулся об мою сумку и выронил все книги, которые он нес.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    simple: require('../../../../Sounds/ISML/Books_Falling.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 89,
    text:
      `
        — Прошу прощения… Как же я так.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 90,
    text:
      `
        — Ничего, — я опустилась вниз, чтобы помочь собрать литературу.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 91,
    text:
      `
        — Мне, однажды, посчастливилось зайти не в ту аудиторию и быть осмеянной неадекватными студентами.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 92,
    text:
      `
         — Это мелочи.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    speaker: 'Нина',
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 93,
    text:
      `
        Парень сочувственно посмотрел на меня и сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 94,
    text:
      `
        — Мир не без уродов. Я рад встретить такого понимающего человека.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 95,
    text:
      `
        — Кстати, твоего нарушителя покоя зовут Марк! Еще раз прошу прощения.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 96,
    text:
      `
         — Приятно познакомиться, Нина.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 97,
    text:
      `
        Эта случайная встреча стала началом чего-то большего. И кто знает, к чему это все придет, но мы рады быть друг для друга близкими людьми.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    message: 'Воспоминания делают вашу связь сильнее',
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Person', id: 'Mark' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Library.jpg')
  },

  {
    id: 98,
    text:
      `
        Марк неловко потеребил волосы, пока я заливалась смехом.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 99,
    text:
      `
        — Это был самый счастливый и неуклюжий случай в моей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 100,
    text:
      `
        — Я тогда подумал, что произвел на тебя самое ужасное первое впечатление.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 101,
    text:
      `
        — Нет, это было очаровательно и глупо. Мы с тобой оказались в ситуации, словно в подростковых фильмах.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 102,
    text:
      `
        — А потом пытались завести разговор о погоде и теплой осени.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 103,
    text:
      `
        Марк кивнул, погружаясь в воспоминания.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 104,
    text:
      `
        — О да, я говорил что-то вроде: — «Какая сегодня хорошая погода, да?» и думал, что ты сочтешь меня полным идиотом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 105,
    text:
      `
        — Я был так взволнован, не мог и двух слов связать.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 106,
    text:
      `
        — И когда я заметил твою помятую тетрадь, я переживал весь день, думая о том, как бы извиниться.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 107,
    text:
      `
        Я засмеялась.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 108,
    text:
      `
        — Ты сказал мне, что осень прекрасна для чтения книг на свежем воздухе. Предложил загладить вину, прогуляться в магазин.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 109,
    text:
      `
        — А помнишь, как мы потом обсуждали любимые книги? Я тогда поняла, что ты не просто милый парень, а действительно интересный человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 110,
    text:
      `
        Марк залился румянцем и смущенно опустил взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 111,
    text:
      `
        — А я тогда понял, что ты — та самая девушка, о которой я буду думать весь день и всю ночь. Я просто не мог выкинуть тебя из головы.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 112,
    text:
      `
        — Ты споткнулся об мою сумку в библиотеке и уронил все свои книги. Это было очень смешно!
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 113,
    text:
      `
        — А потом мы весь день переживали о случившемся, пока случайно не написали друг другу.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 114,
    text:
      `
        Прогулка привела нас к небольшому парку, где мы нашли уютную скамейку у пруда.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 115,
    text:
      `
        Сев, мы смотрели, как утки плавают по тихой воде, а ветер шелестит листьями деревьев.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 116,
    text:
      `
        Я задумалась, подходящий ли сейчас момент, чтобы взять его за руку, но мои мысли прервал голос Марка.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 117,
    text:
      `
        — Знаешь, Нина, я всегда размышлял, что жизнь полна неожиданностей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 118,
    text:
      `
        Я почувствовала, как мое сердце забилось быстрее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 119,
    text:
      `
        Слегка колеблясь, я потянулась к нему и осторожно взяла его за руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 120,
    text:
      `
        — Ты делаешь каждый день особенным, — его голос был тихим и нежным.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 121,
    text:
      `
        Мы провели в парке несколько часов, разговаривая обо всем на свете и наслаждаясь обществом друг друга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 122,
    text:
      `
        Я рассказывала о своих мечтах, а Марк делился своими планами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 123,
    text:
      `
        Ветер нежно касался лиц, а звуки вечернего города служили фоном разговору.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 124,
    text:
      `
        Постепенно он склонился ко мне, и я почувствовала, как его губы мягко касаются моих. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 125,
    text:
      `
        Это был нежный и легкий поцелуй, который казался таким естественным и правильным.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 126,
    text:
      `
        — Мне так нравится быть с тобой, — прошептал Марк, отстраняясь немного, но не отпуская моей руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 127,
    text:
      `
        Я сжала его руку сильнее, поглаживая большим пальцем обратную сторону ладони.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 128,
    text:
      `
        — Марк, как бы мне не хотелось, но нам пора прощаться. Мне еще нужно учить анатомию.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 129,
    text:
      `
        Марк встал и помог подняться. Он вздохнул, явно не желая, чтобы вечер заканчивался.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 130,
    text:
      `
        — Учеба — это важно. Не хочу мешать твоим занятиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 131,
    text:
      `
        — Спасибо, что понимаешь. Так бы я гуляла с тобой до самого утра.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 132,
    text:
      `
        Он нежно прикоснулся к моему лицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 133,
    text:
      `
        — Ладно, обещаю сильно не отвлекать, когда придешь домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 134,
    text:
      `
        — Но в следующий раз ты должна рассказать что-нибудь интересное.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 135,
    text:
      `
        — Договорились, — кивнула я, обнимая его напоследок.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 136,
    text:
      `
        Мы обменялись крепкими объятиями, после чего Марк направился в одну сторону, а я — в другую.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Pound.jpg')
  },

  {
    id: 137,
    text:
      `
        Пройдя немного, достала наушники и надела их, включив музыку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    music: musicPlayer[`FavouriteNinaSong${loadData(['ISML', 'Favourite', 'Music'])}`],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 138,
    text:
      `
        Ритмы заполнили сознание, создавая ощущение, что я героиня фильма или клипа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 139,
    text:
      `
        Несмотря на теплые воспоминания о вечере, настроение начало меняться.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 140,
    text:
      `
        Было ощущение странной смеси меланхолии и спокойствия.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 141,
    text:
      `
        Шаг не ощущался, пространство вокруг стало нереальным, не ощутимым.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 142,
    text:
      `
        Окружение начало терять контуры, как когда в кино камера фокусируется только на главном герое, оставляя все остальное в приятном размытии, создавая эффект боке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    message: 'Боке — это намеренная размытость фона фотографии, используемая для достижения художественного эффекта ',
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 143,
    text:
      `
        Я тихо направилась в сторону своего дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 144,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ISML, category: 'Item', id: 'Cigarettes' }) >= 1
        },
        goTo: 290
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ISML, category: 'Item', id: 'Cigarettes' }) <= 0
        },
        goTo: 146
      }
    ],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 290,
    text:
      `
         В кармане джинс нащупала пачку сигарет, достав одну медленно стала вдыхать.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 145,
    text:
      `
        Дым сигареты плыл в воздухе, растворяясь в ночной прохладе.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 146,
    text:
      `
        Каждый аккорд, каждая нота казались знакомыми и одновременно невероятно новыми. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 147,
    text:
      `
        Дойдя до дома, усталость резко обрушилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 148,
    text:
      `
        Открыв дверь и войдя в квартиру я механически сняла куртку и бросила сумку на диван. 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    music: require('../../../../Sounds/ISML/Main.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 149,
    text:
      `
        Оставив обувь у входа, я медленно прошла через прихожую, ощущая на себе тишину дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 150,
    text:
      `
        В квартире было уютно и тепло, но в то же время присутствовало липкое чувство одиночества.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 151,
    text:
      `
        Создавалось предчувствие того, что стены ждали рассказа о том, как прошел вечер.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 152,
    text:
      `
        Медленно шагая по комнате взгляд упал на компьютер.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 153,
    text:
      `
        «Давно я не играла».
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 154,
    text:
      `
        Я на мгновение задержалась, глядя на монитор, на котором мелькали иконки и ярлыки, но взгляд был направлен в пустоту, на самом деле не видя их.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 155,
    text:
      `
        На экране высветилась загрузка игры, которая всегда помогала расслабиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 156,
    text:
      `
        Это был приключенческий квест с великолепной графикой и захватывающим сюжетом, заставляющий полностью покинуть реальность внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageFront: require('../../../../Images/ISML/Objects/Computer.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 157,
    text:
      `
        Но сегодня что-то было не так. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: require('../../../../Images/ISML/Objects/Computer.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 158,
    text:
      `
        Игра, которая обычно приносила удовольствие и позволяла отвлечься от повседневных забот, сегодня казалась бессмысленной.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: require('../../../../Images/ISML/Objects/Computer.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 159,
    text:
      `
        Скучные персонажи и задания.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageFront: require('../../../../Images/ISML/Objects/Computer.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 160,
    text:
      `
        Выполнение миссий и прохождение уровней было автоматическим, действия механическими, а ум все еще затуманенным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: require('../../../../Images/ISML/Objects/Computer.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 161,
    text:
      `
        Вместо ожидаемого удовольствия и отдыха я испытывала лишь разочарование и чувство пустоты.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Images/ISML/Objects/Computer.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 162,
    text:
      `
        Отложив мышь в сторону и откинувшись на спинку стула, взгляд теперь скользил по комнате, от одного предмета к другому, не останавливаясь ни на чем-то конкретном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 163,
    text:
      `
        «Что если каждый клик мыши, каждое движение персонажа в игре — это всего лишь отражение наших желаний в реальной жизни?»
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 164,
    text:
      `
        Все эти квесты и задания казались теперь попыткой найти какой-то глубинный смысл в мире, где все больше царит хаос и непредсказуемость.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 165,
    text:
      `
        Я встала, прошлась босиком по прохладному полу, ощущая его каждую неровность под ступнями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 166,
    text:
      `
        Это напомнило о твердой почве под ногами, которая есть всегда, в отличие от виртуальных миров, где можно легко упасть в бездну или взлететь к небесам без каких-либо последствий.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 167,
    text:
      `
        Мысли были о том, как часто я стремлюсь к побегу, ищу утешение в виртуальных мирах, где можно быть кем угодно и делать все, что захочется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 168,
    text:
      `
        Но в конце концов, возвращение всегда кажется ударом, ведь здесь ждут не решенные проблемы, не проговоренные чувства и неизбежные обязанности.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 169,
    text:
      `
        «Может быть, весь смысл не в побеге, а в поиске гармонии между этими мирами?»
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 170,
    text:
      `
        «Возможно, ключ к пониманию себя и окружающего мира лежит не в отрыве от реальности, а в ее принятии со всеми ее несовершенствами и моментами красоты».
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 171,
    text:
      `
        В квартире внезапно воцарилась тишина, густая и осязаемая, как если бы она была изготовлена из того же материала, что и ночь за окном.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 172,
    text:
      `
        Я взяла в руки телефон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 173,
    text:
      `
        С его экрана мелькнуло уведомление. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    message: 'Получен предмет: мобильный телефон',
    imageFront: require('../../../../Images/ISML/Items/Phone.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ISML, value: 1, category: 'Item', id: 'Phone' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 174,
    text:
      `
        — Надеюсь, дошла домой без приключений. Скоро увидимся. М. 
      `,
    buttons: [
      {
        text: 'Я очень обрадовалась его сообщению',
        goTo: 175
      },
      {
        text: 'Не хочу сейчас отвечать',
        goTo: 181
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 175,
    text:
      `
        Довольная улыбка сразу расползлась по лицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    message: 'Теперь сон Марка будет крепче, благодаря вашим пожеланиям ',
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Person', id: 'Mark' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 176,
    text:
      `
        — Я дома, спасибо за беспокойство! С нетерпением жду, когда снова увижу тебя. А еще я люблю тебя <3
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 177,
    text:
      `
        Через пару мгновений на телефон пришло еще одно уведомление.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 178,
    text:
      `
        — Я тоже тебя люблю, малышка ❤
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 179,
    text:
      `
        — Спокойной ночи.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speaker: 'Марк',
    imageFront: require('../../../../Images/ISML/Persons/Mark.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 180,
    text:
      `
        — Споки❤
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 181,
    text:
      `
        Настроения не было, тем более мы и так провели весь день вместе.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 182,
    text:
      `
        Я убрала телефон, возвращаясь к потаенным мыслям.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 183,
    text:
      `
        В глубине души затаилась неразгаданная тревога, тонкая трещина на гладкой поверхности внутреннего мира.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 184,
    text:
      `
        Это было напоминанием о неизбежности завтрашнего дня, полного задач.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 185,
    text:
      `
        Среди них выделялась одна, требующая особого внимания — домашнее задание по топографической анатомии.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 186,
    text:
      `
        Рабочий стол был заставлен книгами и разнообразными учебными материалами, среди которых преобладали анатомические атласы и схемы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 187,
    text:
      `
        — Так, что тут?
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 188,
    text:
      `
        Я с интересом погрузилась с головой в изучение и конспектирование.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 189,
    text:
      `
        <i> Цветной атлас по топографической анатомии и патотопографической анатомии человека является фундаментальным и практически важным трудом для врачей всех специальностей и студентов медицинских вузов.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 190,
    text:
      `
        <i> В настоящее время в мире отсутствуют современные атласы по клинической, топографической и патотопографической анатомии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 191,
    text:
      `
        <i> Это объясняется несколькими причинами.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 192,
    text:
      `
        <i> Во-первых, этот предмет изучается только в России и Венгрии.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 193,
    text:
      `
        <i> В других странах он либо отсутствует, либо присутствует в смежных дисциплинах, например, в анатомии или хирургии.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 194,
    text:
      `
        <i> Глава 1. Топографическая анатомия головы.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 195,
    text:
      `
        <i> Голова отграничивается от шеи линией, которая начинается на возвышении подбородка, затем латерально продолжается по нижнему краю тела нижней челюсти, по нижней полуокружности наружного слухового прохода, верхней выйной линии.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 196,
    text:
      `
        В этих словах, полных профессионального жаргона и точных определений, нашелся неожиданный покой.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 197,
    text:
      `
        Страница за страницей, схема за схемой, все глубже погружаясь в исследования человека я открывала для себя новые горизонты понимания.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 198,
    text:
      `
        Однако с каждым часом концентрация внимания начала снижаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 199,
    text:
      `
        Глаза медленно заполнялись усталостью, слова сливались в единый поток, а буквы танцевали перед глазами в неразборчивом хаосе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 200,
    text:
      `
        Почувствовав, как тело начало требовать отдыха, как мысли стали более тяжелыми и медленными: я поняла, что пора делать перерыв.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 201,
    text:
      `
        Оставив учебу, я встала, потянулась, чувствуя каждый сустав и каждую мышцу своего тела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 202,
    text:
      `
        Легкий холодок от пола коснулся босых ног, вызывая мелкую дрожь по коже.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 203,
    text:
      `
        Я направилась в ванную, где, с легким нажатием на ручку, включила душ.  
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 204,
    text:
      `
        Теплая вода била по уставшему телу, смывая напряжение и тяжесть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    ambient: require('../../../../Sounds/ISML/Bath.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Bath.jpg')
  },

  {
    id: 205,
    text:
      `
        Я стояла под струями воды, закрыв глаза и позволив себе на мгновение забыть обо всем на свете.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Bath.jpg')
  },

  {
    id: 206,
    text:
      `
        Завершив процедуру и обернувшись в большое пушистое полотенце, вернулась в комнату. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Bath.jpg')
  },

  {
    id: 207,
    text:
      `
        Казалось, что теперь, когда тело расслабилось, а ум отстранился, получится сразу уснуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 208,
    text:
      `
        Но как только голова коснулась подушки, в сознании начали всплывать навязчивые мысли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 209,
    text:
      `
        Они кружились, образуя вихрь сомнений, воспоминаний и несбывшихся планов.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 210,
    text:
      `
        «А что если я не справлюсь с экзаменом? А как насчет той встречи?»
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 211,
    text:
      `
        «Надо было ответить по-другому... Марк точно не подумал, что я была слишком навязчива?»
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 212,
    text:
      `
        Подобные мысли беспокоили, не давая уснуть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 213,
    text:
      `
        Лежа в постели, я пыталась найти удобную позицию, которая помогла бы отключиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 214,
    text:
      `
        И чтобы точно уснуть я…
      `,
    buttons: [
      {
        text: 'Решила погрузиться в воспоминания',
        goTo: 215
      },
      {
        text: 'Вспомнила, чему меня учили на медитации',
        goTo: 227
      }],
    message: 'Следующие выборы повлияют на характер героини. По пути безысходности она станет более пессимистичной, тогда как по пути света ее характер будет отличаться верой в лучшее',
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 215,
    text:
      `
        Я старалась отогнать навязчивые мысли, но чем сильнее пыталась, тем глубже они проникали в сознание, раскрашивая тьму за закрытыми веками мрачными красками тревоги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    stats: [
      { story: EStoriesEn.ISML, value: +1, category: 'Effect', id: 'Despair' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 216,
    text:
      `
        С каждой минутой страхи становились все более осязаемыми, будто они могли материализоваться прямо в комнате. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 217,
    text:
      `
        Страх смерти, который обычно казался далеким и абстрактным, вдруг приобрел острые очертания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 218,
    text:
      `
        Казалось, что каждый удар сердца, слишком громкий и четкий в тишине ночи, может стать последним. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 219,
    text:
      `
        Этот бесконечный ритм напоминал о хрупкости жизни, бросая в дрожь.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 220,
    text:
      `
        «Надо было поступить по-другому…»
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 221,
    text:
      `
        Мучительно повторяла я себе, перебирая в уме все возможные варианты разговора, которые могли бы изменить исход. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 222,
    text:
      `
        Мысли о том, почему поступила именно так, а не иначе, казались загадкой без ответа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 223,
    text:
      `
        Эти размышления лишь усиливали ощущение беспокойства.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 224,
    text:
      `
        Пытаясь найти логическое объяснение своим действиям и чувствам, но чем больше копалась в себе, тем более запутанной казалась причинно-следственная связь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 225,
    text:
      `
        «Они неправильно поняли меня? Осуждали за спиной?»
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 226,
    text:
      `
        И вот, после часа беспокойного ворочания, поисков комфортной позиции и борьбы с внутренними демонами, измученный ум, наконец, нашел утешение в истощении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 227,
    text:
      `
        В конце концов, удобная поза, позволяющая максимально расслабиться, была найдена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    stats: [
      { story: EStoriesEn.ISML, value: 1, category: 'Effect', id: 'Light' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 228,
    text:
      `
        Спина ровно легла на матрас, руки сложились на животе, а дыхание стало более глубоким и ритмичным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 229,
    text:
      `
        — Как нас учили?
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 230,
    text:
      `
         «Вдох — заботы уходят на второй план, выдох — тело погружается в еще большее спокойствие».
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Нина',
    imageFront: require('../../../../Images/ISML/Persons/Nina_Purple.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 231,
    text:
      `
        Постепенно навязчивые мысли начали отступать, уступая место пустоте.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 232,
    text:
      `
        Тело перестало ощущаться, его не стало. Самоощущение уступило чувству погружения и в то же время невесомости.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 233,
    text:
      `
        На мгновение мир стал неопределенным, растворился в тумане. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 234,
    text:
      `
        Вокруг все тише, и звуки окружения превратились в далекие, едва уловимые эха.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 235,
    text:
      `
        Под моими веками начинает играть свет, неясные образы мягко скользят по периферии сознания, водоворот мыслей и воспоминаний нежно уносит меня в свои глубины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 236,
    text:
      `
        Чувство плавного падения уносит все глубже, где время и пространство переплетаются в необъяснимый узор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Night.jpg')
  },

  {
    id: 237,
    text:
      `
        Рассвет едва пробивался сквозь плотные занавески, когда жестокий звон будильника разорвал тишину комнаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    simple: require('../../../../Sounds/ISML/Alarm.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Day.jpg')
  },

  {
    id: 238,
    text:
      `
        Было 6:30 утра.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Day.jpg')
  },

  {
    id: 239,
    text:
      `
        Пробуждение казалось невыносимо тяжелым. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Day.jpg')
  },

  {
    id: 240,
    text:
      `
        Глаза, словно запечатанные свинцовыми печатями, отказывались подчиняться приказам сознания.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Day.jpg')
  },

  {
    id: 241,
    text:
      `
        Каждый шаг давался с трудом, а глаза, обманутые кратковременными сновидениями, слипались, стремясь вернуться к миру грез.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    ambient: require('../../../../Sounds/ISML/Bath.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Bath.jpg')
  },

  {
    id: 242,
    text:
      `
        Когда прохладная вода коснулась лица, по коже пробежали мурашки, а тело охватило нечто вроде озноба — жестокий контраст с теплом постели. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Bath.jpg')
  },

  {
    id: 243,
    text:
      `
        Но именно этот резкий переход и вернул к реальности, напомнив о непрекращающемся потоке обязанностей.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Bath.jpg')
  },

  {
    id: 244,
    text:
      `
        Я подготовила себе пару вещей.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Day.jpg')
  },

  {
    id: 245,
    text:
      `
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    wardrobe: { story: EStoriesEn.ISML, personId: 'Nina', goTo: 246 },
    imageBack: require('../../../../Images/ISML/Backgrounds/Hero_Room_Dry_Day.jpg')
  },

  {
    id: 246,
    text:
      `
        Завтрак складывался из простых и, казалось бы, сумбурных элементов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Kitchen.jpg')
  },

  {
    id: 247,
    text:
      `
        Я перебирала в уме материал по топографической анатомии, стараясь прогнать остатки сна из головы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Kitchen.jpg')
  },

  {
    id: 248,
    text:
      `
        Утренние мысли о предстоящих занятиях не внушали энтузиазма, скорее, они были наполнены легкой долей отчаяния.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Kitchen.jpg')
  },

  {
    id: 249,
    text:
      `
        «Сейчас поеду на учебу, а как же мне этого не хочется». 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Kitchen.jpg')
  },

  {
    id: 250,
    text:
      `
        Каждый кусок тоста сопровождался мыслями о многочисленных мускулах, сосудах и нервах, которые предстояло вспомнить.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Kitchen.jpg')
  },

  {
    id: 251,
    text:
      `
        Прохладное утро Москвы.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Sleeping_District.jpg')
  },

  {
    id: 252,
    text:
      `
        Путь до метро был быстрым, но в подземке, был час пик. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Sleeping_District.jpg')
  },

  {
    id: 253,
    text:
      `
        Толпы, толкающие со всех сторон, напомнили о том, почему метро вызывало столько отвращения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    music: musicPlayer[`FavouriteNinaSong${loadData(['ISML', 'Favourite', 'Music'])}`],
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 254,
    text:
      `
        Но даже любимые треки не могли заглушить мысли о том, как же сильно я ненавижу это место.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 255,
    text:
      `
        Музыкальные ноты смешивались со скрипом останавливающегося поезда, каждый толчок вагона напоминал о невозможности уйти от сюда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    simple: require('../../../../Sounds/ISML/Wagon_Stop.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 256,
    text:
      `
        Почему люди стоят так близко ко мне?
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 257,
    text:
      `
         «Уйдите!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 258,
    text:
      `
         «Не прикасайтесь». 
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 259,
    text:
      `
        Мое настроение переросло в настоящее отвращение, поймав себя на том, как считаю станции, будто мантры — одну за другой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 260,
    text:
      `
         «Красные ворота, Чистые пруды».
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 261,
    text:
      `
        Губы едва шевелились, произнося названия в тишине ума.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 262,
    text:
      `
         «Не прикасайтесь!»
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 263,
    text:
      `
        Хотелось кричать, но вместо этого я лишь пыталась минимизировать контакт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 264,
    text:
      `
        Подобно танцору, который вынужден исполнять свой номер в аду полного аншлага.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Metro.jpg')
  },

  {
    id: 266,
    text:
      `
        Выходя из метрополитена, я почувствовала удар холодного воздуха по лицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morning_Streets.jpg')
  },

  {
    id: 267,
    text:
      `
        Москва показалась даже освежающей, несмотря на все ее загрязнения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morning_Streets.jpg')
  },

  {
    id: 268,
    text:
      `
        Я вдохнула глубоко, до боли в легких.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morning_Streets.jpg')
  },

  {
    id: 269,
    text:
      `
        Пересекая перекресток, направилась к главному корпусу учебного заведения, где уже собирались студенты.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/Morning_Streets.jpg')
  },

  {
    id: 270,
    text:
      `
        Поднявшись по ступеням, быстро зашла в раздевалку, чтобы переодеться в лабораторную одежду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    music: require('../../../../Sounds/ISML/Main.mp3'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 271,
    text:
      `
        Среди белых халатов и разговоров студентов, я увидела свою однокурсницу и подругу Лену, которая взволнованно ждала у шкафчиков.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 272,
    text:
      `
        — Нина, привет! Как твои дела? Успела подготовиться к сегодняшнему практикуму? 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speaker: 'Лена ',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 273,
    text:
      `
        — Привет, Лена! Да, вроде бы да, — я усиленно старалась скрыть усталость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 274,
    text:
      `
        Лена внимательно посмотрела на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 275,
    text:
      `
        — Нина, ты слышала последние новости? — ее голос зазвучал настороженно.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ISML, value: 0, category: 'Person', id: 'Lena' }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 276,
    text:
      `
        — Нет, что случилось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 277,
    text:
      `
        Я нахмурилась, чувствуя, как напряжение вновь начинает нарастать.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 278,
    text:
      `
        — Дело в том, что один из наших профессоров, доктор Виктор Юрьевич, сегодня утром попал в больницу. Говорят, сердечный приступ... 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    speaker: 'Лена',
    imageFront: require('../../../../Images/ISML/Persons/Lena.png'),
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 279,
    text:
      `
        Я ошеломленно уставилась на Лену, пытаясь вместить в голову эту информацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 280,
    text:
      `
        Мир вокруг казался замедлившимся. Доктор Виктор Юрьевич был не просто преподавателем, он был моим научным руководителем и ментором.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 281,
    text:
      `
        — Это не может быть правдой...
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    speaker: 'Нина',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.ISML, 'Nina') },
    imageBorder: require('../../../../Images/ISML/UI/Border.png'),
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  },

  {
    id: 282,
    text:
      `
        Я прошептала это, ощущая, как в груди все сжимается от страха и волнения. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ISML', 'Глава 1', 'Часть 2', '0')
        }
      }],
    achievement: { story: EStoriesEn.ISML, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/ISML/Backgrounds/University.jpg')
  }
])
