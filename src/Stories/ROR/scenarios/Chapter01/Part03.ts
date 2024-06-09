import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { redFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.ROR, chapterName: 'Глава 1', partName: 'Часть 3', code: '0' }, [
  {
    id: 0,
    text:
      `
        С каждым часом ночь становилась всё холоднее. Прохлада снаружи перетекла и внутрь повозки. По просьбе Мортимера я зажег больше огня, но это мало чем помогло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    parallax: 'right',
    music: require('../../../../Sounds/ROR/City.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 1,
    text:
      `
        Страшно уставшая Джоанна начала сильнее замерзать. Марта пыталась ее успокоить, согревая объятиями, но дрожь никуда не уходила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 2,
    text:
      `
        «Лучше ее больше не изматывать, а дать ей уснуть. План можно обсудить после». 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 3,
    text:
      `
         Вздохнув, я отправился к сундуку, где было сложено запасное постельное белье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 4,
    text:
      `
        — Вот, укройте ее. Меховое одеяло, с востока.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 5,
    text:
      `
        «Генрих, ты как будто хвастаешься этим».
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 6,
    text:
      `
        Монашка благодарно кивнула и укрыла девочку. Джоанна громко зевнула, бросила на меня короткий взгляд, но затем постаралась спрятаться за своей воспитательницей. Такая пугливая...
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 7,
    text: '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Person', id: 'Joanne' }) >= 1
        },
        goTo: 8
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Person', id: 'Joanne' }) <= 0
        },
        goTo: 9
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 8,
    text:
      `
        «Странно, чего она так. Вроде даже улыбалась, когда я дал ей погладить Арауна. Всё ещё боится? Хотя, о чем это я, беспризорники на весь мир смотрят, как на один большой источник угрозы».
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 9,
    text:
      `
        Я дал девочке время заснуть. Хотелось бы, чтобы и Виг тоже лег спать, пусть не лезет в дальнейший разговор. Но рыжий паренек все продолжал сверлить меня взглядом, сидя в уголке. Как будто давал понять, что он так может просидеть всю ночь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 10,
    text:
      `
        Я прекрасно помнил, как он пререкался с нами по поводу будущего плана. Парень уже не маленький, почти совершеннолетний, неужели мозгов не хватает, чтобы понять: и без него разберутся? 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 11,
    text:
      `
        Решив всё-таки перейти к делу, я продолжил обсуждение, уже на полутонах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 12,
    text:
      `
        Остальные собравшиеся сидели за рабочим столом Мортимера и попивали какую-то настойку на травах. Джеку от нее становилось легче, по крайней мере больше он не дрожал как невротик.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 13,
    text:
      `
        — Так, господа. С идеей мы определились, теперь нужно обговорить детали. После нашей ночной прогулки с доктором, у нас могут возникнуть проблемы на празднике. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 14,
    text:
      `
        Все молча закивали соглашаясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 15,
    text:
      `
        Даже Дитрих не отпустил ни одного едкого комментария. Его пока больше интересовало близкое знакомство с содержимым своего стакана, куда он постоянно подливал несколько капель спирта.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 16,
    text:
      `
        — А что, собственно, там было? Вы не упомянули детали.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 17,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Choice', id: 'KillStranger' }) >= 1
        },
        goTo: 18
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Choice', id: 'KillStranger' }) <= 0
        },
        goTo: 33
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 18,
    text:
      `
        Я поморщился и прочистил горло кашлем, отведя взгляд в сторону. Мортимер поступил схожим образом, мрачно уставившись в свой стакан и осушив его одним глотком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 19,
    text:
      `
        Джек несколько секунд переводил взгляд то на меня, то на доктора. На его лице вновь проявилась прежняя тревожность.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 20,
    text:
      `
        — Это как-то связано с тем пожаром, что был в нескольких кварталах от повозки? 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 21,
    text:
      `
        — Зришь в самый корень, — мрачно прошептал я, — мы хотели осмотреть тело последнего погибшего, дабы понять, что вообще в городе происходит. Скажем так... нам не оказали радушного приема.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 22,
    text:
      `
        — И мне пришлось принять меры, чтобы весточка о нас не дошла, кому не надо.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 23,
    text:
      `
        — О боже... — еле слышно прошептал бард, — но... как это связано с пожаром?
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 24,
    text:
      `
        — Возник в процессе борьбы. И унес с собой часовню, переделанную под госпиталь. Нас не должны были заметить.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 25,
    text:
      `
        Монашка как будто очнулась после длительного сна и с ужасом осветила себя святым знамением. Она явно собиралась что-то добавить к разговору, но побоялась разбудить Джоанну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 26,
    text:
      `
        Впрочем, было бы не тяжело догадаться, что именно хочет сказать Марта, а потому я сам взял слово.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 27,
    text:
      `
        — Послушайте, я сделал, что должно. Мне жаль то святилище и всех, кто там остался. Но сейчас речь идет о нашем выживании. Иногда приходится идти на жертвы. Сейчас мы в безопасности, и это главное.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 28,
    text:
      `
        — Если «хвоста» и правда не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 29,
    text:
      `
        — Впоследствии мы наткнулись на одного уличного торговца, но это было в нескольких кварталах от места пожара. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 30,
    text:
      `
        — Вряд ли он бы что-то заподозрил и сообщил куда надо. И вообще... давайте переходить ближе к делу, меня до сих пор воротит от произошедшего.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 31,
    text:
      `
        Громко вздохнув, я кивнул. Хьюго вряд ли мог бы стать свидетелем в расследовании о пожаре. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 32,
    text:
      `
        Будь на улице зеваки, они, разумеется, могли начать вопить от увиденного. Таковых не было, по крайней мере, когда мы с Мортимером убегали. Тем не менее, городские власти будут настороже. И это может создать проблемы.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 33,
    text:
      `
        Я нахмурился и опустил взгляд в пол. До сих пор не был уверен, правильно ли я поступил, дав тому мальчишке уйти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 34,
    text:
      `
        Кто знает, какие могли быть последствия от драки. Может, шум бы привлек других? А то и хуже... зато, наверно, я не чувствовал себя зверем, забредающим на территорию хищника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 35,
    text:
      `
        — Мы хотели обследовать местную часовню, оборудованную под госпиталь. Там начали изучать тело последнего погибшего... ну, чтобы понять, что именно происходит в городе. И нас заметили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 36,
    text:
      `
        — Что? — бард чуть было не вскрикнул от испуга.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 37,
    text:
      `
        — Был парень... служка при храме. Он убежал, чтобы предупредить охрану о нарушителях. Когда мы покидали часовню, за нами никто не погнался.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 38,
    text:
      `
        — Но он вас видел. И мог разглядеть лицо Генриха. Или мужика в маске чумного доктора. Так что выбранный костюмчик для бала может стать опасным решением.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 39,
    text:
      `
        — Костюм — это чепуха. Мало ли в городе, да и в стране чумных докторов? А вот моя внешность... да, заметная. И эти раны. Я обращаю на себя больше нежелательных взглядов, чем того хотелось.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 40,
    text:
      `
        Джек уставился на меня так, как будто хотел что-то сказать, но очень боялся.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 41,
    text:
      `
        — Я разбил стекло и порезался об осколки при побеге, — вздохнул я, отвечая на его немой вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 42,
    text:
      `
        — Нет гарантий, что тот господин будет присутствовать на... кхм... «празднике». Как и гарантий о его связи со всем этим происходящим безумием.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 43,
    text:
      `
        — Да и потом... он подвергся панике, раз сразу убежал. В таких случаях мало кто будет вглядываться в детали внешности. Своя шкура важнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 44,
    text:
      `
        Я молча кивнул, соглашаясь с доводами остальных. Не стоило бояться последствий того, что уже не исправить. Мы и так сильно рисковали, начав собственное расследование. Всё или ничего. А иного пути, кроме как пойти на этот бал — теперь нет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 45,
    text:
      `
        «Если буду всё время мучить себя догадками, то начну сам нервничать и точно выдам себя перед теми психами. Лучше просто забыть об инциденте».
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 46,
    text:
      `
        Дитрих кашлянул после очередной стопки зелья, а затем продолжил разговор:
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 47,
    text:
      `
        — Допустим, наш певец знает, где проходит вечеринка, и что на ней будет. Но как конкретно нам это поможет с побегом из города? Если вы там собираетесь просто побухать и поучаствовать в оргиях, то я с удовольствием составлю вам компанию.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 48,
    text:
      `
        Доктор приставил ладонь к лицу и устало вздохнул, но все же поддержал своего протеже. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 49,
    text:
      ' ',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Letter01' }) >= 1
        },
        goTo: 50
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Letter01' }) <= 0
        },
        goTo: 63
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 50,
    text:
      `
        — Мой коллега мог высказаться более... прилично, но вопрос он задал верный. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 51,
    text:
      `
        — Док, не вы ли тогда подбивали меня забрать конверт у того типа?
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 52,
    text:
      `
        — Постойте, какой конверт? 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 53,
    text:
      `
        — Когда я поговорил со своим знакомым стражником у ворот, он назначил встречу с неизвестным, кто видимо много знает...
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 54,
    text:
      `
        — Ошибки быть не может. Джек, вы слышали, чтобы гости тех мероприятий говорили фразу: «Не подведите ваши желания»? 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 55,
    text:
      `
        Бард на этих словах побледнел и нервно кивнул:
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 56,
    text:
      `
        — Да... приходилось. И не раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 57,
    text:
      `
        — Возвращаясь к вопросу господина Гарнера... я импровизировал. Посчитал, что нельзя отказываться от хоть какой-то зацепки. Но к счастью или нет, я в подобного рода игрищах никогда не участвовал. И смутно представляю, как это сможет нам помочь на их «празднике».
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 58,
    text:
      `
        — Хм... кажется, у меня есть мысль. Если там собираются все знатные лица города, а значит и сам бургомистр. Немного удачи — заведете нужные знакомства среди аристократии. Они вам с ним и устроят встречу. И тогда останется только придумать причину, зачем нужно покидать город.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 59,
    text:
      `
        Я почесал подбородок, поросший щетиной. А бард-то и в самом деле сказал умную вещь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 60,
    text:
      `
        — Вполне здравая мысль. Причину можно придумать завтра. Сейчас нам всем надо отдохнуть. До вечера разберемся.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 61,
    text:
      `
        Окружающие утвердительно закивали головами, пока что на этом вопрос о том, чем заняться на балу, был закрыт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 62,
    text:
      `
        «Просто выйду на связь с бургомистром и попытаюсь убедить его в своей дружбе, и что им позарез надо выехать из охваченного чумой города. Пообещаю ему что угодно».
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 63,
    text:
      `
        — Мы понятия не имеем, где проходят эти развлечения... и потом, сомневаюсь, что мы сможем пройти просто так, без приглашения.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 64,
    text:
      `
        — Место-то я знаю... но да. Должно быть приглашение. Двойное. Их выдают связные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 65,
    text:
      `
        Я скрестил руки и уставился на Джека. Бард так любит ходить вокруг да около, неужели из него нужно всю информацию щипцами вытаскивать?
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 66,
    text:
      `
        — Ну... и где это? 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 67,
    text:
      `
        Джек ссутулился, осознав свою недальновидность, после чего ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 68,
    text:
      `
        — Таверна... «Дорога в забвение». Там есть отдельное ложе, ведущее в подземные катакомбы. Некогда там располагались руины старой империи, которые переделали под свои нужды. Перед входом всегда стоят охранники.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 69,
    text:
      `
        — Знаю это место, там хороший эль. Все, чем ты не отравишься в этом регионе, уже можно назвать отменным пойлом.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 70,
    text:
      `
        — Да-да, господин Дитрих, мы поняли ваши предпочтения. Что ж... если есть охранник, значит, его можно отвлечь. Внутри-то никто не проверяет приглашения?
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 71,
    text:
      `
        В ответ на это бард отрицательно покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 72,
    text:
      `
        — Раз господин Дитрих в тех местах вхож, он может отвлечь охрану какой-нибудь буйной выходкой. Допустим, можно начать драку по глупому поводу? Или заставить его погнаться за вами на улицу?
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 73,
    text:
      `
        — Ага, а потом он меня кинжалом пырнет. Великолепный план, однако.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 74,
    text:
      `
        — Да, драка не самый лучший вариант, коли мы имеем дело с безумными психами. Тем более нетрезвая потасовка никогда ничем хорошим не заканчивается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 75,
    text:
      `
        — С поста он не уйдет. Но что если Дитрих притворится одним из этих уродов? Наденет мантию, скажет, мол, иди, нужно встретиться в закоулке, принять товар какой-нибудь для праздника.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 76,
    text:
      `
        — А если спросят пароль? Сомневаюсь, что они каждому встречному верят на слово.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 77,
    text:
      `
        — У них один условный знак — фраза: «Не подведите своих желаний». Должно сработать.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 78,
    text:
      `
        После этого повисла тишина. Собеседники обменялись взглядами и утвердительно закивали. По всей видимости, на сей раз план всех устраивал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 79,
    text:
      `
        — Но есть один нюанс. Мы до сих пор не знаем, как нам конкретно воспользоваться обществом аристократов, чтобы выбраться из города. И я всё-таки бы попросил вас, Генрих, не откладывать вопрос на завтра.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 80,
    text:
      `
        — Хмм... ну, попробую сейчас сымпровизировать. Встречусь с бургомистром, притворюсь безумным торговцем, у которого есть связи снаружи.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 81,
    text:
      `
        — А там уже наобещаю ему либо новые жертвы, либо новые товары для увеселений. Изучим их по ситуации... пообещаем им что угодно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 82,
    text:
      `
        — Даже если это у тебя выйдет, город то на карантине. Какие у него будут основания выпустить тебя одного?
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 83,
    text:
      `
        Я слегка выпятил грудь, а на лице блеснула самодовольная ухмылка.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 84,
    text:
      `
        — Тут уже проще... если под городом имеются подземные ходы... то явно они не ограничиваются канализацией и древними руинами. На случай осады всегда предусмотрен проход, созданный для поставок провианта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 85,
    text:
      `
        Чумной доктор медленно кивнул, в его глазах блеснуло уважение.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 86,
    text:
      `
        — У вас глубокие познания в данном вопросе, господин Гарнер. Опыт работы? 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 87,
    text:
      `
        — Семейный опыт... давайте не об этом.  Я смогу убедить его, что проверну всё тайно. Официально ему наверняка скоро кормушку перекроют, когда в столице поймут, по какой причине город закрыт на карантин. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 88,
    text:
      `
        — Зная таких... он никогда не остановится в своем веселье, пока не умрет либо от алкоголя, либо от чумы. И он всегда будет хотеть больше и больше. На этом и сыграю.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 89,
    text:
      `
        На сей раз вопросов по плану более не последовало. Собравшиеся за столом господа утвердительно закивали головами, не произнеся ни слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 90,
    text:
      `
        Но как бы мне того не хотелось, отправиться спать, так и не получилось. Со своего места вскочил Виг, который скрестил руки и уставился мне прямо в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 91,
    text:
      `
        Я приподнял бровь, скрестив руки в ответ. Между нами будто бы возникла безмолвная дуэль, где каждый принимал наиболее вызывающий вид. Но я решил покончить с этим цирком несколько пораньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 92,
    text:
      `
        — Что-то не так? — устало вздохнул я.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 93,
    text:
      `
        — Много чего. Что ты имел в виду, когда говорил, что готов обещать этим психам «что угодно»? Как это будет касаться Марты?
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 94,
    text:
      `
        Это был вопрос времени, когда сосунок полезет со своими комментариями. Я ожидал сего момента с самого начала разговора. Однако, лишь только он настал, то понял, что по-настоящему не был к нему готов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 95,
    text:
      `
        Та наглость, с которой он ко мне обратился, эта смелая дерзость... очень уж хотелось сбить с него спесь, а сдерживаться становилось всё тяжелее.
      `,
    buttons: [
      {
        text: 'Поставить Вига на место',
        goTo: 96
      },
      {
        text: 'Сдержаться и спокойно поговорить',
        goTo: 106
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 96,
    text:
      `
        «К черту всё, пусть знает свое место».
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [{ value: 1, category: 'Choice', id: 'ThreatVig' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 97,
    text:
      `
        Я начал медленно приближаться к Вигу. Окружающие насторожились, Марта уже было протянула руку ко мне, пытаясь остановить, но я проигнорировал жест и заставил подростка упереться спиной к стене.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 98,
    text:
      `
        — Не припомню, чтобы мы переходили «на ты», малец. Не забывайся, когда говоришь со старшими. Если твой папаша тебя не научил нормам общения, это будут делать окружающие. И за острый язык в большом мире могут и кровь пустить. Урок на будущее.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 99,
    text:
      `
        Повисло тревожное молчание. Но, похоже, все в данном разговоре были на моей стороне. Даже Марта с укором смотрела на своего воспитанника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 100,
    text:
      `
        Что же до него самого, то он на мгновение потерял свою былую смелость во взгляде. Его глаза нервно забегали из стороны в сторону, но чтобы до конца угомонить мальца —- потребуется не один серьезный разговор.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 101,
    text:
      `
        — Возвращаясь к твоему вопросу. Я пожил на земле порядком больше и прекрасно осознаю риски, на которые иду. Иначе бы работал сапожником, а не перевозчиком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 102,
    text:
      `
        — Так что слушай сюда. Если я обещал, что не позволю Марте пострадать, то будь добр, не пытайся казаться умнее, чем ты есть по факту и прими мои слова на веру. Это ясно?
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 103,
    text:
      `
        Мальчишка нахмурился. Его первоначальный испуг отступил перед нарастающей обидой и злобой. Он сжал кулаки и уставился на меня так, будто собирался врезать по лицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 104,
    text:
      `
        Но тут же краем глаза поймал на себе осуждающий взгляд Марты и опустил голову, выдохнув. После этого Виг посмотрел на меня исподлобья и молча вернулся на свое место.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 105,
    text:
      `
        Я же встал на старое место, осмотрев присутствующих. Все отвели взгляды в сторону, как будто предпочли бы забыть случившийся разговор. Инцидент исчерпан. По крайней мере мне так казалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    message: 'Виг обижен на вас, отношения с ним ухудшились',
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Vig' }],
    achievement: { story: EStoriesEn.ROR, name: 'ThreatWig' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 106,
    text:
      `
        И все же я смог взять себя в руки. Все и так были на нервах, а подростки бывают слишком тупы, чтобы как раз и выкинуть какую-нибудь глупость в самый неподходящий момент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 107,
    text:
      `
        «Лучше обсудить все сейчас, а не когда наступят действительно серьезные мероприятия вроде похода на праздник».
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 108,
    text:
      `
        Я покачал головой и тихим спокойным голосом произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 109,
    text:
      `
        — Парень, неужели я похож на того, кто позволил бы себе заставить твою воспитательницу проходить через низкие вещи? Достаточно и того, что ей в принципе доведется посетить то место, о большем я бы и не стал просить.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 110,
    text:
      `
        — Откуда мне знать, что это всё не пустые слова, чтобы меня успокоить?
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 111,
    text:
      `
        — Гарантий нет. Только мое честное слово. И то, что мне самому было бы невыгодно так поступать, чтобы нас не раскрыли. При всем уважении к госпоже Марте, я понимаю, что она не сможет в полной мере сыграть падшую аристократку.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 112,
    text:
      `
        — Виг, господин Генрих прав. Я доверяю ему, как и ты должен. Пока меня не будет, у тебя есть задача поважнее — присмотреть за Джоанной. И я надеюсь, что ты меня не подведешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 113,
    text:
      `
        Слова воспитательницы на мальчишку подействовали куда сильнее. Он поочередно посмотрел на нее, потом на меня, затем сокрушенно вздохнул и слабо кивнул, признавая поражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 114,
    text:
      `
        В его взгляде я больше не видел вызова и неприязни по отношению ко мне, значит, будет сидеть смирно. На это мне хотелось надеяться.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 115,
    text:
      `
        Краем глаза я заметил, что монашка покраснела и слабо улыбнулась, отворачиваясь в сторону. Неужели моя вера в ее стойкость и желание защитить так подействовали? Странно, но от ее улыбки я почувствовал некое облегчение на душе.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    message: 'Виг доверился вам, ваши отношения с ним улучшены',
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Vig' },
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 116,
    text:
      `
        День выдался на редкость утомительным, а на улице все еще играла темень. Я уже было настроился отправиться в свой уголок, чтобы вздремнуть, как вдруг услышал тихое нарочное покашливание. Обернувшись, я заметил, что это Дитрих пытался привлечь к себе внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 117,
    text:
      `
        — Есть еще один момент. Может вызвать проблемы. Вы костюмчик нашей святой леди видели? — ухмыльнулся алхимик с ехидством в тоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 118,
    text:
      `
        Монашка нервно дернулась и растерянно уставилась на Дитриха, приподняв бровь. Да и я тоже не слишком понял, к чему этот тип ведет. Впрочем, тот вскоре сам поспешил пояснить свои слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 119,
    text:
      `
        — Вам не кажется странным, что вот эта птичья маска не слишком с формой монашек сочетается? Напомню, что эта одежонка-то на рынке не продается. Они поймут, что никакая она не аристократка. Нужно прикупить нормальное платье.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 120,
    text:
      `
        — К сожалению, костюм у меня имеется только на мужчину. Мой ассистент прав, хотя я бы попросил впредь его выбирать выражения.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 121,
    text:
      `
        — Значит, придется покупать. Только стоит такое удовольствие наверняка немало.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 122,
    text:
      `
        — Никто не просит брать платье, которое в столице намалеванные аристократки носят. Это Гласвер, в конце концов. Крон двадцать должно хватить.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 123,
    text:
      `
        Я устало выдохнул и проверил сбережения.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 124,
    text:
      `
        «Я с этими перевозками скорее в минусе останусь, нежели в плюсе. Я же делаю всё это не по доброте душевной. С чего я должен платить за ее платье? Хотя... сейчас это вопрос выживания, да и... по-человечески нехорошо получится, если я с нее деньги потребую».
      `,
    buttons: [
      {
        text: 'Купить Марте платье',
        goTo: 125
      },
      {
        text: 'Отказаться платить за платье',
        goTo: 139
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 125,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) >= 20
        },
        goTo: 126
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) < 20
        },
        goTo: 131
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 126,
    text:
      `
        Я отсчитал деньги и коротко кивнул. Должно хватить на покупку. Значит, сегодня и завтра побуду настоящим джентльменом.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    stats: [{ value: 1, category: 'Choice', id: 'SaveMarthaDress' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 127,
    text:
      `
        — Денег хватает. А завтра по ситуации посмотрим. Возьму эти расходы на себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 128,
    text:
      `
        Монахиня ахнула и даже приставила ладони ко рту, страшно смущаясь. Но затем на ее лице скользнула приятная улыбка. Она уже было хотела встать и подойти ко мне, но помешала Джоанна, спящая у нее на руках.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 129,
    text:
      `
        — Господин Гарнер, ваша доброта достойна отцов нашей церкви.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 130,
    text:
      `
        — Пустое это. Давайте лучше ко сну готовиться. Я ужасно устал.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    message: 'Марта крайне признательна вам за щедрость',
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +2, category: 'Person', id: 'Martha' }],
    achievement: { story: EStoriesEn.ROR, name: 'BuyMarthaDress' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 131,
    text:
      `
        Я уже было собирался заплатить за платье для монашки, но отсчитав монеты, убедился, что последние несколько дней обчистили меня досуха со всеми взятками и прочими покупками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    message: 'У вас оказалось недостаточно средств для покупки',
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [{ value: 1, category: 'Choice', id: 'SaveMarthaDress' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 132,
    text:
      `
        — К сожалению, у меня недостаточно средств.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 133,
    text:
      `
        Я готов был поклясться, что краем глаза заметил язвительную ухмылку Дитриха в ответ на мои слова, но сама Марта сохраняла хладнокровное спокойствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 134,
    text:
      `
        — Я понимаю. Я готова заплатить за себя. В конце концов, именно мне будет суждено его носить. Но... господин Гарнер, у меня просьба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 135,
    text:
      `
        — Слушаю... — проговорил я с ноткой любопытства
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 136,
    text:
      `
        — Я хочу, чтобы эта сумма была вычтена из моей дальнейшей оплаты за перевозку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 137,
    text:
      `
        Я коротко кивнул и пожал плечами.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 138,
    text:
      `
        — Справедливо. Согласен. Теперь, когда со всем разобрались, давайте готовиться ко сну.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 139,
    text:
      `
        Уже было собравшись отсчитать нужное количество денег, я всё же решил не платить за чужие покупки. В конце концов, это была идея того придурка Дитриха. 
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 140,
    text:
      `
        Может, и без этого платья всё получится? Может, сочтут они этот наряд монашки за смешную шутку, коли они там все поехавшие содомиты?
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 141,
    text:
      `
        — Я не вижу в этом смысла. Просто будут деньги на ветер, а плату за перевозку я беру еще и чтобы нам продовольствие покупать. И платье уж точно не является обязательной вещью.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 142,
    text:
      `
        Собравшиеся посмотрели на меня с явным неодобрением, да и я сам понимал, что поступаю не слишком хорошо с моральной точки зрения. Но я действую справедливо. А справедливость не всегда бывает приятной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 143,
    text:
      `
        — Я всё же соглашусь с господином Дитрихом... и лучше куплю себе платье сама. Но, господин Гарнер... вынуждена оспорить ваши слова. Сейчас мы действуем не ради чьей-то прихоти, а ради нашего же выживания. Поэтому я бы настояла на одном условии.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 144,
    text:
      `
        — Слушаю... — проговорил я с ноткой любопытства.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 145,
    text:
      `
        — Я хочу, чтобы эта сумма была вычтена из моей дальнейшей оплаты за перевозку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 146,
    text:
      `
        Я коротко кивнул и пожал плечами.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 147,
    text:
      `
        — Справедливо. Я согласен. Теперь, когда со всем разобрались, давайте готовиться ко сну.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 148,
    text:
      `
        Все молча закивали и расположились на спальных местах, однако я понимал, что мое решение пришлось им, мягко говоря, не по душе. И в большей степени это касалось Марты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    message: 'Марта разочарована вашей жадностью',
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 149,
    text:
      `
        Перед сном меня одолевали мысли, что путешествие по Крейсу во время эпидемии чумы очевидно не будет простым, но чтобы я уже в первый день не мог выехать из Гласвера — это что-то новое.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 150,
    text:
      `
        «Если бы мне удалось договориться о поездке на день раньше, то избежали бы кучи проблем».
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 151,
    text:
      `
        Вероятнее всего именно поэтому поспать нормально у меня не вышло. Общая тревожность и стресс давали о себе знать. А вместе с ними приходили и кошмары. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 152,
    text:
      `
        Ночные образы жуткой часовни, трупа, освещенного тусклым пламенем свечи, зачумленные улочки, двери со знаком креста. Куда не посмотри, везде царит смерть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    beforeBegin: redFlash,
    ambient: require('../../../../Sounds/ROR/Small_Whisper.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Nightmare.jpg')
  },

  {
    id: 153,
    text:
      `
        Со временем ты начинаешь привыкать к ней. Вероятно так себя чувствуют горцы. Ты знаешь, что в любой момент может пойти что-то не так, оступишься или камень выскочит из породы... и всё. 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Nightmare.jpg')
  },

  {
    id: 154,
    text:
      `
        В мгновение ока все твои планы обращаются в ничто, как и ты скоро станешь не более, чем ошметком на утесах внизу. Жизнь перемолола нас так же, разве что процесс был более длительным.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Nightmare.jpg')
  },

  {
    id: 155,
    text:
      `
        — Я отправляюсь к маме, Генрих... скоро увидимся.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Sister.png'),
    ghostSilhouette: true,
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Nightmare.jpg')
  },

  {
    id: 156,
    text:
      `
        Писклявый голос девочки из воспоминаний пронзил меня как кинжал в самое сердце.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Nightmare.jpg')
  },

  {
    id: 157,
    text:
      `
        Я резко раскрыл глаза и осмотрелся. Всё ещё было темно, мои пассажиры спали. Попытаться уснуть снова? Нет... не хочу возвращения этого голоса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 158,
    text:
      `
        Всё дальнейшее утро я провел в ожидании пробуждения остальных. Долго ждать не пришлось. Марта проснулась с первыми лучами солнца, как и Джоанна.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 159,
    text:
      `
        Доктор Мортимер тоже вскоре пробудился и сразу принялся за дела, проверяя что-то в своих инструментах и микстурах. Лишь Виг, Джек и Дитрих решили поспать подольше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 160,
    text:
      `
        Быстро поприветствовав друг друга, мы разделили совместный завтрак, освободив стол, у которого ночью и проходило бурное обсуждение наших планов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: require('../../../../Images/ROR/Objects/Porridge.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 161,
    text:
      `
        Я не произнес ни слова, молча хрустя сухарями. Лишь только после того, как с трапезой было покончено, я выглянул в окно. Солнце уже взошло достаточно высоко. Скоро лавки должны открыться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Images/ROR/Objects/Porridge.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 162,
    text:
      `
        — Сестра Марта, нам пора выдвигаться, пока на улице не стало слишком многолюдно.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 163,
    text:
      `
        Монахиня коротко кивнула, после чего сопроводила Джоанну на их место сна. Что-то прошептав ей на ухо, она погладила ее по макушке и отправилась за ширму.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 164,
    text:
      `
        — Доктор Мортимер. Я могу временно одолжить вашу мантию? Мои монашеские одеяния привлекут ненужное внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 165,
    text:
      `
        — Да, можете примерить мой уличный плащ. Должен подойти.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 166,
    text:
      `
        И действительно, спустя некоторое время Марта вновь появилась, уже в новой одежде. Плащ для нее был несколько великоват, но это не сильно бросалось в глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Coat.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 167,
    text:
      `
        Откровенно говоря, ей так больше шло. Она напоминала теперь скорее лесного следопыта, нежели чахнущую святошу. Даже движения ее стали более уверенными, как и выражение лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Coat.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 168,
    text:
      `
        Мы выдвинулись сразу же. Солнце не решалось почтить нас своим присутствием, вместо этого ограничившись слабым свечением из-за серых туч. Мы старались держаться подальше от домов.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 169,
    text:
      `
        Пару раз было видно как на носилках выносят тела из нескольких жилищ. В такие моменты Марта отворачивалась, да и я сам старался отвести взгляд. Из головы все не выходила та картина в часовне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 170,
    text:
      `
        Они там лежали, понимая, что им осталось не больше нескольких дней. Наверняка были и зараженные, просто я не заметил. Я-то там провел мало времени, а они валялись с зачумленными, осознавая, что их счет идет на дни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 171,
    text:
      `
        И никуда не убежать. Впрочем, мы сейчас мало от них отличаемся, разве что наша камера куда просторнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 172,
    text:
      `
        «Была бы живописнее, если бы солнце в кои-то веки вышло».
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 173,
    text:
      `
        Мы шагали молча, на улице начало холодать. Я постарался унять дрожь и краем глаза взглянул на Марту. Плащ дока вроде достаточно плотный, но меня всё равно не покидала тревога, что она замерзнет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Coat.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 174,
    text:
      `
        «Вроде бы не дрожит. Ладно, осталось недолго».
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 175,
    text:
      `
        Лавка располагалась в конце улицы, на входе висела табличка, на которой красовалось изображение платья, а рядом с ней — надпись: «Ателье братьев Дамьен».
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 176,
    text:
      `
        Войдя внутрь, я еле подавил сильное желание закашляться. На меня как будто дыхнул дракон, всю жизнь питавшийся исключительно чесноком и пахучими травами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 177,
    text:
      `
        И в самом деле, на окнах висели связки чеснока, как будто хозяева пытались отогнать вампиров. Хотя и было очевидно, что их беспокоит другое чудовище, невидимое, разносимое крысами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 178,
    text:
      `
        Марта кашель сдержать не смогла, прикрыв ладонью рот. На этот шум вышел щуплый человечек, лицом напоминавший скорее стервятника. Худой как жердь, сутулый и постоянно перебиравший в руках четки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/ROR/Persons/Damien.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 179,
    text:
      `
        Владелец с недоверием покосился на монашку, после чего попытался придать своей персоне максимально важный вид.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 180,
    text:
      `
        Он взял с прилавка очки, спешно надел их, заморгав. Выпрямившись и скрестив руки за спиной, он заговорил скрипучим голосом, противным подобно скрежету стекла. Хотя при этом звучал он несколько комично из-за картавости от западного акцента.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 181,
    text:
      `
        — Чем могу быть полезен? Хочу заметить, что мы не принимаем больных. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 182,
    text:
      `
        «Черт, ну только этого не хватало». 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 183,
    text:
      `
        Я покачал головой и повернулся к Марте. Она выглядела страшно напуганной, была готова выйти наружу, и тогда я взял ситуацию в свои руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 184,
    text:
      `
        — Мы полностью здоровы, уважаемый. Если вас смутил кашель, то он из-за специфических ароматов.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 185,
    text:
      `
        — Все так говорят. Пожалуйте показать руку, госпожа, — проворчал хозяин, пояснив причину столь странной просьбы, — хочу убедиться, что нет бубонов.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 186,
    text:
      `
        Монашка потопталась на месте, как будто ее просили оголить не только ладонь, но и все тело. Впрочем, зная нравы нашего духовенства, не удивлюсь, если для нее эти понятия равнозначны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Coat.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 187,
    text:
      `
        Тем не менее она осмелилась завернуть рукава плаща вплоть до локтей. На предплечьях было ни следа заразы.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Coat.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 188,
    text:
      `
        — Всю, пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 189,
    text:
      `
        Тут уже не выдержал я и вышел вперед, забирая все внимание на себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 190,
    text:
      `
        — Да что вы себе позволяете? Моя дама сердца не будет показывать вам свои руки. Это что такое? Я на вас жаловаться буду! 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 191,
    text:
      `
        Я старался придать своему голосу интонацию, с которой обычно говорят аристократы, но она явно не впечатлила владельца ателье. Да и мой внешний вид вряд ли у кого-либо мог бы ассоциироваться с выходцем из высшего света.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 192,
    text:
      `
        Но мои слова передали Марте уверенность, несмотря на очевидное смущение. Девушка едва улыбнулась, принимая правила не слишком хорошей игры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Coat.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 193,
    text:
      `
        Пробубнив себе что-то под нос, этот доходяга сдался.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 194,
    text:
      `
        — Прошу прощения, милейший. Меры предосторожности не бывают излишними. Так чем я могу быть полезен?
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 195,
    text:
      `
        Я оставил без ответа его извинения, хотел сделать вид оскорбленного джентльмена.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 196,
    text:
      `
        — Нужен костюм для леди. Выход в свет.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 197,
    text:
      `
        У продавца чуть ли не глаза на лоб полезли. Но затем в его взгляде начало скользить нескрываемое отвращение. Наверняка думает про себя: «На улицах болезнь, а эти еще на какие-то приемы шастают». 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 198,
    text:
      `
        Впрочем, желание заработать перевесило в нем моралиста.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 199,
    text:
      `
        — Очень хорошо. Прошу в ту комнату для снятия мерки. Костюм такого класса будет готов в течение недели.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 200,
    text:
      `
        Я протянул вперед руку, жестом прося мастера не торопиться. Еще не хватало двух недель ждать, нет у нас столько времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 201,
    text:
      `
        — Нет, господин. Мы бы хотели приобрести готовые платья. У вас как раз вывешено несколько экземпляров. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 202,
    text:
      `
        Продавец прищурился и понимающе закивал. Еще раз уточнив хотя бы примерные размеры, он удалился внутрь лавки, а через некоторое время пригласил нас последовать за ним. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 203,
    text:
      `
        По пути я заметил висящую на стене картину. Там этот щуплый мужчина стоял с более рослым и улыбчивым господином. Да и сам этот тип в очках выглядел несколько счастливее.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 204,
    text:
      `
        «Похоже, это и есть второй брат Дамьен? Теперь еще более понятно, чего этот так трясется насчет мер предосторожности».
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 205,
    text:
      `
        Вдруг я почувствовал как моей ладони кто-то коснулся. Долго выяснять, кто это был, не пришлось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 206,
    text:
      `
        Рыжая монашка стеснительно приблизилась ко мне и прошептала на ухо:
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 207,
    text:
      `
        — Спасибо... и извините, что вам пришлось назваться моим спутником жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Coat.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 208,
    text:
      `
        «Она что, настолько мнительная?»
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 209,
    text:
      `
        Я слабо улыбнулся и кивнул, пытаясь успокоить ее. Интересно, есть ли на свете вещи из-за которых она не стесняется? 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 210,
    text:
      `
        — Всё в порядке. Это же ради дела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Atelier.jpg')
  },

  {
    id: 211,
    text:
      `
        Наконец, мы дошли до небольшого участка склада, заполненного разного рода нарядами. Неподалеку красовалось рабочее место, где наверняка и проводит большую часть дня оставшийся из братьев Дамьен. Сам же продавец указал на деревянное сооружение, огороженное ширмой.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 212,
    text:
      `
        — Прошу, вот примерочная. Я пока подготовлю некоторые из вариантов. Какой цвет предпочитаете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 213,
    text:
      `
        И опять монашка запнулась. Хотя здесь я мог ее понять, она ничего кроме своей сутаны и не носила. Девушка умоляюще взглянула на меня, как будто просила принять решение за нее. Что-то с ее самостоятельностью нужно делать.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Coat.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 214,
    text:
      `
        — Черный. Он ей к лицу, — проговорил я со слабой ухмылкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 215,
    text:
      `
        Дамьен коротко кивнул, и принялся снимать некоторые платья с вешалок. Марта же удалилась за ширму, ожидая примерки.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 216,
    text:
      `
        Продавец не заставил себя ждать. Он быстро протянул мне несколько вариантов, а затем попросил позвать его, когда мы определимся.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 217,
    text:
      `
        «Лучше бы воров он так боялся, как зачумленных». 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 218,
    text:
      `
        Так я и остался стоять, ожидая, когда Марта определится с выбором. Из опыта общения с прекрасным полом, я был готов к тому, что это может занять не один час.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 219,
    text:
      `
        Правда и девушки, с которыми мне доводилось иметь отношения, были выходцами из других сословий, где за внешним видом следили с некой маниакальной одержимостью.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 220,
    text:
      `
        Я уже было думал, чтобы отправиться на улицу, запах местных трав и чеснока был просто невыносим. Однако вскоре Марта тихим голосом позвала меня к себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 221,
    text:
      `
        Я удивленно приподнял брови, но повиновался. Разумеется, девушка стояла ко мне спиной, полураздетая. Закрыв за нами ширму, я тихо проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 222,
    text:
      `
        — Что случилось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 223,
    text:
      `
        — У меня... не получается застегнуться. Застежки на спине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Back.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 224,
    text:
      `
        Марта наглядно продемонстрировала, как ее руки физически не достают до разных концов раскрытого платья, чтобы затем их нормально закрепить друг с другом. Я почесал затылок, проговорив:
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 225,
    text:
      `
        — Мне нужно вам помочь их застегнуть? Так это... у вас же сан.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 226,
    text:
      `
        Марта прыснула, после чего заговорила с таким раздражением, какого я от нее никогда не слышал... да и, честно говоря, не ожидал услышать.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 227,
    text:
      `
        — Помолюсь всевышнему за этот грех. Я не собираюсь тут месяц стоять вот так. 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Back.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 228,
    text:
      `
        Откровенно говоря, в этот момент у меня перехватило дыхание. Я почувствовал себя шкодливым учеником, на которого впервые в жизни прикрикнули старшие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 229,
    text:
      `
        Потому я несколько пристыженный принялся помогать. Признаться честно, выходило у меня не очень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 230,
    text:
      `
        Я понятия не имел, как это осознать, но застегивание пуговиц на собственной рубахе и этих мелких застежек на чужой спине — вообще не одно и то же. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 231,
    text:
      `
        Пару раз я неправильно их застегивал, то на деление выше, то на одно ниже. Я чувствовал себя так неловко, поэтому был просто неимоверно рад тому факту, что сейчас мы с девушкой наедине.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 232,
    text:
      `
        Однако недовольные вздохи и даже шипение Марты, когда я пару раз слегка поцарапал ее металлическими стежками, делу совершенно не помогали. В один момент девушка не выдержала и проговорила:
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 233,
    text:
      `
        — Вы вообще никогда с дамами не общались, господин Генрих?
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Back.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 234,
    text:
      `
        — Обычно дело доходило только до раздеваний, с этим как-то проще всё было, — отшутился я.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 235,
    text:
      `
        К удивлению для самого себя, я услышал не вздох от шока, а тихий смешок, за которым, однако, последовали не самые приятные слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 236,
    text:
      `
        — Стыдитесь своих слов и поведения, господин Гарнер. Всевышний бдит! 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Back.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 237,
    text:
      `
        Мне показалось, что она это проговорила не совсем искренне. Сегодня ее поведение очень отличается от привычного. Начинает входить в роль? В любом случае, кое-как с застежками мне совладать удалось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 238,
    text:
      `
        — Мне это... выйти?
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 239,
    text:
      `
        — Как я выгляжу в нем? Ну... то есть, я имею в виду, поверят ли эти заблудшие души, что я из их числа?
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 240,
    text:
      `
        Сейчас ничего в ней не напоминало ту испуганную тихоню, которую я знал с самого момента нашего знакомства. Она больше напоминала чародейку при королевском дворе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 241,
    text:
      `
        Ни одну из них не видел, но всегда казалось, что именно так они и ведут себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 242,
    text:
      `
        Сменив образ, она предстала передо мной совершенно другой личностью. Ее бледность теперь не говорила о тяжелой жизни в темном монастыре, скорее напоминала о жизни в каком-нибудь дворце. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 243,
    text:
      `
        — Вы... вы обворожительны, — выпалил я, продолжая осматривать девушку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 244,
    text:
      `
        Блуждающий взгляд невольно зацепился за часть некоего черного пятна, едва проглядывающегося на тыльной стороне запястья.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 245,
    text:
      `
        — Правда, у вас тут что-то... 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 246,
    text:
      `
        Я уже было потянулся к ее руке, чтобы посмотреть поближе, но Марта отпрянула от меня, на лице ее был выражен подлинный испуг.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 247,
    text:
      `
        — Не стоит... я потом сама посмотрю. А теперь выйдите, дайте мне переодеться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 248,
    text:
      `
        — Вам точно больше не нужна помощь?
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 249,
    text:
      `
        — Ну... эм... знаете что, я пойду именно так. Меня полностью устраивает это платье. Пока оставьте меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 250,
    text:
      `
        Я растерянно кивнул и вышел наружу, где меня уже поджидал хозяин ателье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 251,
    text:
      `
        — Ну что? Что-нибудь приглянулось вашей светлости? — проговорил он, казалось, всеми силами выдавливая из себя вежливый тон.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 252,
    text:
      `
        — Да. Мы берем платье, — проговорила Марта, выходя из-за ширмы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 253,
    text:
      `
        — Отличный выбор, миледи. Это обойдется вам в двадцать крон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageFront: require('../../../../Images/ROR/Persons/Damien_Glasses.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 254,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Choice', id: 'SaveMarthaDress' }) >= 1
        },
        goTo: 255
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Choice', id: 'SaveMarthaDress' }) <= 0
        },
        goTo: 256
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) < 20
        },
        goTo: 258
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 255,
    text:
      `
        Быстро расплатившись с владельцем ателье, я прихватил с собой походный плащ Мортимера и вывел Марту на улицу. Не хотелось останавливаться здесь надолго, от этого запаха меня уже воротит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageFront: require('../../../../Images/ROR/Objects/Moneybag.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [{ story: EStoriesEn.ROR, value: -20, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 256,
    text:
      `
        Как и было условлено, Марта заплатила за себя. После этого мы даже взглядами не обменялись. Явно всё ещё обижена на меня за проявленную скупость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageFront: require('../../../../Images/ROR/Objects/Moneybag.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 257,
    text:
      `
        Мне самому было не по душе принятое решение, но что сделано, то сделано. Быстро расплатившись с Дамьеном, Марта последовала на выход. Я направился следом.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 258,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Letter01' }) <= 0
        },
        goTo: 400
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Letter01' }) >= 1
        },
        goTo: 259
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 400,
    text:
      `
        К сожалению, даже при всем моем желании, я бы не смог заплатить за Марту. А потому, как мы и договорились ранее, она заплатила за себя сама. 
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageFront: require('../../../../Images/ROR/Objects/Moneybag.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },
  {
    id: 259,
    text:
      `
        Мне было немного паршиво на душе от такого расклада, но увы, деньги из воздуха я пока добывать не научился. Когда дело было сделано, мы двинулись на улицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Dressingroom.jpg')
  },

  {
    id: 260,
    text:
      `
        Дорога не заняла слишком много времени. Вскоре мы оказались у повозки. Осмотревшись, я удостоверился, что слежки за нами не было. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    music: require('../../../../Sounds/ROR/Jack_Theme.mp3'),
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 261,
    text:
      `
        Единственная странность, которая привлекла мое внимание, заключалась в музыке, что доносилась изнутри моего транспорта.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 262,
    text:
      `
        Бард сидел на пустом ящике, наигрывая простенькую, но веселую мелодию. Сам он выглядел куда более живым, нежели вчера. Возможно, убедился, что мы сможем предоставить ему защиту от старых знакомых. 
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 263,
    text:
      `
        Или же просто отдавался музыке как того велит его долг. Я никогда не увлекался искусством, но слышал, что такие люди во время творчества — ничего не замечают вокруг себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 264,
    text:
      `
        Казалось, что его единственная слушательница также чересчур увлеклась мелодией. Она улыбалась так редко, что каждый из моментов, когда это всё же происходило, становился только приятнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 265,
    text:
      `
        Не знаю, что пережила эта девочка, но выглядела она частенько очень печальной. Скорее всего, ее родители умерли у нее на глазах, в последнее время это самое распространенное событие в жизни детей.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 266,
    text:
      `
        Это могло вполне объяснить, почему Виг был таким озлобленным и дерзким. В его возрасте хочется бросить вызов всему миру, который кажется непомерно враждебным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 267,
    text:
      `
        Вспоминая себя в его возрасте, я все же не позволял себе грубить старшим или настаивать на своем, но мне самому хотелось всколыхнуть скучные будни жителей Крейса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 268,
    text:
      `
        Джоанна была еще слишком юна, чтобы больше доверять чувствам, нежели голосу разуму, что происходило со многими подростками лет в тринадцать.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 269,
    text:
      `
        Я не стал им мешать, как и Марта. Мы уселись на койке, наблюдая за картиной. После мрачных и темных улиц Гласвера увидеть такую умиротворенную атмосферу было приятно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 270,
    text:
      `
        Я закинул руки за голову и облокотился о стену. Марта же сложила ладони на коленях, не сводя глаз со своей воспитанницы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 271,
    text:
      `
        «Черт возьми, если бы у меня в детстве были такие няньки, может, из меня действительно толк бы вышел, как хотел папаша».
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 272,
    text:
      `
        От увиденного я немного расслабился и решил слегка пообщаться с Мартой. Ранее я как-то старался ее сторониться, не слишком люблю святош. 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 273,
    text:
      `
        Но теперь у меня закрадывалось подозрение, что за маской этой «правильной» особой могла скрываться подлинная «ведьмочка». 
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 274,
    text:
      `
        — Мило выглядят, — прошептал я.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 275,
    text:
      `
        — А? Что? А... да. И правда. Она так давно не улыбалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 276,
    text:
      `
        — Даже не обратили внимание на ваш новый привлекательный наряд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 277,
    text:
      `
        Девушка отвернулась, стараясь не смотреть мне в глаза. Решив больше не мучить ее, я перевел тему. 
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 278,
    text:
      `
        — А откуда они с Вигом? Они же брат и сестра?
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 279,
    text:
      `
        — Д-да. Да. Их мать была колдуньей. После того как ее поймали, детей определили к нам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 280,
    text:
      `
        Я поежился. Был у меня неприятный опыт общения с охотниками на ведьм, как и примерное представление, кого и за что могли записать в неверных чародеев. Да и Марте судя по всему это было не слишком приятно вспоминать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 281,
    text:
      `
        — И давно вы за ними присматриваете?
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 282,
    text:
      `
        — Ох, господин Гарнер, я и не считала. Джоанна тогда была еще совсем крошкой, а Виг был таким же пугливым как она.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 283,
    text:
      `
        — Хе-хе... честно говоря, верится с трудом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 284,
    text:
      `
        — Он взрослеет. И в такие моменты опирается не на мораль, лишь идет по зову сердца. Это благородно, но может быть опасно.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 285,
    text:
      `
        — Угу. Первые сорок лет в жизни мальчика — самые тяжелые. Кстати, а где он? И Мортимера с Дитрихом я не вижу.
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 286,
    text:
      `
        Но вскоре алхимик сам дал о себе знать. Он вышел из-за ширмы, за которой находилась его койка, равно как и рабочее место. Недовольно зарычав, грубиян направился прямиком к Джеку, протягивая руки к его лютне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    music: require('../../../../Sounds/ROR/City.mp3'),
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 287,
    text:
      `
        Джоанна испуганно ахнула и убежала к Марте, казалось, что она действительно заметила ее только сейчас.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 288,
    text:
      `
        Монахиня прижала малышку ближе, в то время как та ее крепко обняла и зарылась носиком в ее новое платье.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 289,
    text:
      `
        Что же до барда, то тот быстро отвел свою лютню в сторону, испуганно уставившись на Дитриха. Алхимик был просто взбешен, даже волосы у него встали дыбом. Джек поспешил спросить, чем вызвано столь странное поведение.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 290,
    text:
      `
        — Что это значит, сэр?
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 291,
    text:
      `
        — Какого черта ты, соплежуй, свою пиликалку завел?! Я пытаюсь поспать, башка просто раскалывается! Для тебя что, улицы не существует? Там бы мог денег заработать хоть! А то толку от тебя как от кобылы с одной ногой! 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 292,
    text:
      `
        Марта ахнула и закрыла Джоанне уши. И не зря, далее посыпались ругательства, на которые несчастный Джек ответить никак не мог. Похоже, ситуацию придется разрешать мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 293,
    text:
      `
        С одной стороны, алхимик был прав, нечего было барду заниматься своей музыкой здесь, особенно, если это мешает пассажирам. С другой — этот алкоголик слишком много себе позволял, и мне не терпелось преподать ему урок.
      `,
    buttons: [
      {
        text: 'Встать на сторону Дитриха',
        goTo: 294
      },
      {
        text: 'Угомонить Дитриха',
        goTo: 310
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 294,
    text:
      `
        — А ну успокоились! Оба! Ребенка запугали уже. Так, Джек, больше в повозке не играть!
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 295,
    text:
      `
        — Но на улице меня могут заметить! А я хотел сделать Джоанне приятно.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 296,
    text:
      `
        — Это похвально, но ты об остальных-то подумай. А ты, Дитрих, постарайся больше не устраивать таких сцен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 297,
    text:
      `
        Я ожидал язвительного комментария, но по всей видимости, похмелье доконало его так сильно, что у него на это не хватало желания.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 298,
    text:
      `
        — Да, ладно... я постараюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 299,
    text:
      `
        После этих слов Дитрих откашлялся и направился к себе за рабочее место, начав что-то смешивать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    message: 'Дитрих благодарен вам, что вы встали на его сторону. Джек обиделся на ваше решение',
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [{ story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Ditrich' }],
    achievement: { story: EStoriesEn.ROR, name: 'SilenceLover' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 300,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Person', id: 'Ditrich' }) >= 1
        },
        goTo: 301
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Person', id: 'Ditrich' }) <= 0
        },
        goTo: 323
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 301,
    text:
      `
        Спустя минут пять он вылил содержимое одной из склянок в маленький флакон и незамедлительно осушил его. Алхимика передернуло, однако через несколько мгновений стало видно, что ему полегчало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 302,
    text:
      `
        Заметив, что я за ним наблюдаю, он взглянул на колбу и приподнял над столом.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 303,
    text:
      `
        — Надо? 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 304,
    text:
      `
        Я приподнял бровь и подошел ближе, приняв зелье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 305,
    text:
      `
        — Что это? 
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 306,
    text:
      `
        — От похмелья. Меня часто выручает, главное, с дозировкой не переусердствовать.  Если выпить немного больше нужного, может и сердце прихватить. Три капли, не больше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 307,
    text:
      `
        Похмелья у меня не было, но отказываться от столь полезного снадобья не стал. Положив подарок во внутренний карман, я кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 308,
    text:
      `
        — Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Item', id: 'Antihangover' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 309,
    text:
      `
        Алхимик только отмахнулся от меня, после чего уселся поудобнее на своей койке и потер виски пальцами.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 310,
    text:
      `
        Я подскочил и приблизился к Дитриху, встав чуть ли не в упор. От него воняло перегаром, отчего у меня даже начался приступ кашля.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 311,
    text:
      `
        Алхимик ничуть не испугался и со злобой смерил взглядом. Меня это только сильнее разозлило. 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 312,
    text:
      `
        — Иди проветрись, алкаш. Ты только и делаешь, что другим жизнь отравляешь. Никто против этой музыки кроме тебя ничего не высказал, так что умолкни и перестань пить, если не хочешь, чтобы было похмелье.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 313,
    text:
      `
        — Нихрена ты умный нашелся, Гарнер, а вот это видал? — после этого Дитрих показал мне неприличный жест средним пальцем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 314,
    text:
      `
        Марта и Джоанна испуганно уставились на нас, да и Джек запаниковал, уже потянувшись, чтобы нас разнять.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 315,
    text:
      `
        Но я среагировал раньше. Я схватил Дитриха за палец, которым тот продолжал размахивать передо мной и вывернул его . 
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 316,
    text:
      `
        От этого алхимик закричал. Никакой стойкости у него не было, больше бахвальства.
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 317,
    text:
      `
        — Давай, может, мы с тобой поговорим за ширмой? Чтобы до тебя дошло всё понятнее?
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 318,
    text:
      `
        — Не-не... я понял, всё... отпусти, больно! 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 319,
    text:
      `
        Я оттолкнул Дитриха от себя. Тот прижал ближе пострадавшую руку, смерил ненавидящим взглядом и скрылся с моего поля зрения.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 320,
    text:
      `
        Бард растерянно посмотрел на меня, но затем с улыбкой кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 321,
    text:
      `
        — Спасибо, сэр Гарнер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 322,
    text:
      `
        Я отвернулся, пока бард не осыпал меня словами благодарности. Оставалось только надеяться, что Дитрих мне ничего в еду потом не подмешает.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    message: 'Джек благодарен вам, что вы приняли его сторону. Дитрих затаил на вас обиду',
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Jack' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 323,
    text:
      `
        — Так... раз с этим разобрались, может, кто-нибудь мне объяснит, где Мортимер и Виг? 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 324,
    text:
      `
        — Мэтр отправился за покупками. А Виг сказал, что пойдет за ним. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 325,
    text:
      `
        Марта недовольно покачала головой. Видимо, ее не очень порадовал тот факт, что парниша нарушил свое слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 326,
    text:
      `
        — Чего это доктору там понадобилось? На местных рынках ничего уже нормального нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 327,
    text:
      `
        Вскоре Мортимер сам дал о себе знать. Постучавшись, он открыл дверь, держа в руке некую сумку. По нему было видно, что мэтр находился в приподнятом настроении. Сзади него тащился Виг с угрюмым видом.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 328,
    text:
      `
        — А, вы уже вернулись. Сестра Марта, вы бесподобно выглядите.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 329,
    text:
      `
        Монашка стеснительно покраснела и поклонилась доктору. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 330,
    text:
      `
        — Благодарю, мэтр, но мне не терпится снять этот мирской наряд и вернуться в мое старое облачение.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 331,
    text:
      `
        — Тогда не обессудьте, если я немного подсоблю в вашей маскировке.
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 332,
    text:
      `
        После этих слов док достал из сумки несколько флаконов. На сей раз я безошибочно определил их содержимое: макияж.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 333,
    text:
      `
        — Право, не стоило! Что вы? Это же, наверно, сейчас стоит огромных денег.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 334,
    text:
      `
        — Не переживайте, это мне досталось задаром от одной старой клиентки. Дай ей всевышний еще больше здоровья при творящемся безумии.
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 335,
    text:
      `
        По лицу монашки было видно, что она слишком стеснялась принимать подарок от доктора, но в конечном итоге не устояла. Сердечно отблагодарив Мортимера за его доброту, она осмотрела флакон.
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 336,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Person', id: 'Martha' }) >= 2
        },
        goTo: 337
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Person', id: 'Martha' }) <= 2
        },
        goTo: 347
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 337,
    text:
      `
        — Позвольте я.
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 338,
    text:
      `
        Я осторожно взял пузырек из рук Марты и нанес немного мази на ладони, а затем нежно провел ею по щекам девушки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 339,
    text:
      `
        Ее румянец стал только ярче, а я не сдержал улыбки. Она сейчас выглядела очень милой, напоминала мою сестру, когда та собиралась на первое свидание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 340,
    text:
      `
        Остальные присутствующие, казалось, старались нас не замечать. Мортимер отошел к своему рабочему столу, Дитрих пытался отойти после пьянки, Джек смущенно отвернулся, только Джоанна и Виг не сводили с нас глаз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 341,
    text:
      `
        И если лицо маленькой девочки не выражало ничего, кроме любопытства, то вот на лице Вига четко читалась неприязнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 342,
    text:
      `
        Потому я решил с этим не сильно затягивать, совсем скоро кожа девушки стала гладкой, у нее появился приятный бледный оттенок. Я слабо ухмыльнулся и кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 343,
    text:
      `
        — Неплохо выглядите, сестра.
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 344,
    text:
      `
        Девушка хихикнула, прикрыв рот ладонью, после чего отвела взгляд и отмахнулась от меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 345,
    text:
      `
        — Спасибо, но это всё ради дела, не забывайте.
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 346,
    text:
      `
        — А как иначе?
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 347,
    text:
      `
        Смотря на Марту и ее подарок я задумался о кое-чем. Все эти новомодные средства для ухода за кожей неплохо справляются с ранами. По крайней мере ускоряют заживление. 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 348,
    text:
      `
        Ну во всяком случае, все торгаши мира об этом наперебой твердили. А после вчерашнего «приключения» лицо у меня перестало быть презентабельным. Потому я решил попросить даму об услуге. 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 349,
    text:
      `
        — Сестра Марта, можно вас попросить на время одолжить эту штуку? Убрать царапины.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 350,
    text:
      `
        Растерянно посмотрев то на меня, то на свой подарок, она нервно закивала и протянула мне крем.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 351,
    text:
      `
        — Д-да, конечно.
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 352,
    text:
      `
        Я быстро нанес прозрачную субстанцию на лицо, от нее неприятно пахло какими-то маслами, смешанными... с молоком что ли? В любом случае, результат действительно оказался что надо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 353,
    text:
      `
        Спустя короткое время царапины действительно перестали быть заметны. Со словами благодарности я вернул вещичку Марте.
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 354,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Perfume' }) >= 1
        },
        goTo: 355
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Perfume' }) <= 0
        },
        goTo: 358
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 355,
    text:
      `
        К слову о ней. Меня не покидало ощущение, что кое-чего в образе Марты недоставало. Тут же мне вспомнились духи, что я выкупил у того уличного торговца, Хьюго. Может, предложить их Марте? Хотя... у меня есть идея получше.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 356,
    text:
      `
        «Коли я там буду притворяться торговцем, и если с бургомистром дело не выгорит, может удаться кому-нибудь толкнуть эту дрянь как нечто редкое?»
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 357,
    text:
      `
        «Я такой орнамент на флаконе видел только среди восточной контрабанды. А местные могут оказаться на такое падки. Надо бы взять эту штуку с собой».
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 358,
    text:
      `
        Дальнейшая часть дня, вплоть до позднего вечера, проходила достаточно тихо. Мы перекусили тем немногим, что у нас осталось из еды. Корма для лошадей тоже недоставало, но хотелось верить, что до первой остановки они протянут. 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 359,
    text:
      `
        И когда на Гласвер начали спускаться сумерки, мы начали выдвигаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 360,
    text:
      `
        Я принял решение оставить повозку в одном из переулков, что неподалеку. На всякий случай будет тайное место, куда отступать. Теперь пришла пора переодеваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 361,
    text:
      `
        У меня это не заняло много времени. Костюм доктора сидел на мне неплохо, благо, что их шили немного просторнее, чем требовалось носителю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 362,
    text:
      `
        Поскольку я был несколько выше и сильнее щуплого доктора, этот наряд был мне чуть ли не впритык. Но дискомфорта не вызывал. Маска также неплохо села, правда запах от нее был неприятный. Но я достаточно быстро с ним свыкся.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 363,
    text:
      `
        Но вот приготовления Марты заняли куда больше времени. Мне казалось, что хотя бы монахиня не будет укладывать волосы целую вечность. Но результат того стоил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 364,
    text:
      `
        Когда она вышла из-за ширмы, все встретили ее радостными улыбками. Было видно, что она крайне нервничала, наверно поэтому подготовка и заняла столько времени. Впрочем, по нашим довольным лицам она скорее всего поняла, что опасения были напрасны.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha_Dress.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 365,
    text:
      `
        Наиболее живо свое восхищение выразил Джек, совершенно неприлично и широко раскрыв рот. Тут уже пришлось вмешаться доктору Мортимеру, который аккуратно прикрыл его, надавив на подбородок.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 366,
    text:
      `
        Любование девушкой прекратилось громким кашлем доктора Мортимера, который скрестил руки за спиной и проговорил.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 367,
    text:
      `
        — Что ж, теперь все готовы. Давайте обсудим план отступления еще раз. Мне он не слишком ясен.
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 368,
    text:
      `
        — Нет смысла особо долго размусоливать. Когда пойму, что дело пахнет жареным — хватаю Марту и бегу стремглав к вам, пока они не сообразят. А дальше хоть тараном эти стены снесем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 369,
    text:
      `
        — Почему бы так не сделать сразу?
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 370,
    text:
      `
        — Я предпочитаю начать с более безопасных вариантов.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Costume_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 371,
    text:
      `
        — Сомневаюсь, что участие в той вакханалии можно назвать хоть сколь-нибудь безопасной. Как по мне, обе предложенные идеи — две стороны одной монеты.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 372,
    text:
      `
        — Впервые за все эти дни наш певец сказал что-то умное.
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 373,
    text:
      `
        — Давайте не спорить. Раньше об этом надо было думать. Принимаемся за дело.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 374,
    text:
      `
        Мы подвезли телегу в укромное место возле таверны, как и условились. Само место встречи ничем особо не выделялось на фоне города. Обычная деревянная постройка. Но это только снаружи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 375,
    text:
      `
        Внутри здания ничего не напоминало о том, что на улице бушует чума. Напротив, тут было приятное теплое освещение, многие смеялись и веселились. Между столиками проходили пышногрудые дамы, носящие с собой на подносе крупные пивные кружки.
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    ambient: require('../../../../Sounds/ROR/Small_Crowd.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 376,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) >= 100
        },
        goTo: 377
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) < 100
        },
        goTo: 388
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 377,
    text:
      `
        Мы решили с Мартой зайти немного раньше Дитриха, дабы не привлекать внимание еще и к нам. Мы присели с ней за столиком, маски мы еще надеть не решились. 
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 378,
    text:
      `
        Это уж точно привлечет ненужное внимание раньше времени. Впрочем, подобного хватало сполна. Не один я оценил прекрасный внешний вид Марты в новом платье.
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 379,
    text:
      `
        За соседним столиком сидела компания пьяниц, которая то и дело бросала на зад девушки похотливые взгляды. Они о чем-то тихо переговаривались, после чего уже громко гоготали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 380,
    text:
      `
        Это заметила и сама Марта. Я заскрипел зубами и хотел было поставить уродов на место, но сдержался.
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 381,
    text:
      `
        «Не привлекай внимания. Нельзя позволить всему пойти на самотек».
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Costume.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 382,
    text:
      `
        И тут же появилась наша звезда. Дитрих явно решил оторваться по полной со своей ролью пьяного смутьяна. Вальяжной походкой он прошел вглубь таверны, тут же наградив официантку хлопком по пятой точке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 383,
    text:
      `
        Довольно заулыбавшись, что не получил отпор от девушки, чьи руки были заняты подносами, алхимик поспешил к трактирщику, попросив у него чего-то покрепче. 
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 384,
    text:
      `
        Мгновенно осушив рюмку какого-то пойла, он минут пять посидел возле стойки трактирщика, болтая с ним о чем-то. Отсюда не было слышно.
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 385,
    text:
      `
        Наконец, выждав достаточно времени, Дитрих направился к парню в капюшоне, что караулил у одной из шторок. Всю его разнузданную веселость будто рукой сняло. Он о чем-то тихо заговорил с охранником в черном, после чего оба они направились на выход.
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 386,
    text:
      `
        Уж не знаю, что он там ему сказал, но было ясно, что времени тратить нельзя. Кивнув Марте, мы направились в сторону предполагаемого входа.
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 387,
    text:
      `
        Я опасался, что его будет охранять не один человек, но всё обошлось. Откинув шторку, мы вошли в небольшую комнату, откуда уже шла лестница вниз.
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 388,
    text:
      `
        Долго искать, куда следовать — не пришлось. В отдалении сидела уже знакомая фигура в темном плаще. Я кивнул Марте в сторону незнакомца. На нас уже были надеты маски, но охранник меня сразу узнал. Он поклонился мне и проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 389,
    text:
      `
        — Добро пожаловать, господин. Надеюсь, вы не забыли ваше приглашение?
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    imageFront: require('../../../../Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 390,
    text:
      `
        Без лишних слов я протянул незнакомцу письмо, тот окинул его быстрым взглядом и отворил для нас ширму. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Item', id: 'Letter01' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 391,
    text:
      `
        — Прошу, следуйте вниз по лестнице, а дальше по прямой. Не подведите своих желаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    imageFront: require('../../../../Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Tavern.jpg')
  },

  {
    id: 392,
    text:
      `
        Мы оказались в темном коридоре, лишь в паре мест освещаемых темным факелом. Из глубин тоннеля шел сквозняк, отчего плащ моего костюма развевался как у колдуна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Underground.jpg')
  },

  {
    id: 393,
    text:
      `
        Уже издали стали доноситься другие голоса и музыка, приятные на слух... но почему-то от них в душе зарождалась только угроза.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ROR', 'Глава 1', 'Часть 4', '0')
        }
      }],
    achievement: { story: EStoriesEn.ROR, name: 'Chapter01Part03Completed' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Underground.jpg')
  }
])
