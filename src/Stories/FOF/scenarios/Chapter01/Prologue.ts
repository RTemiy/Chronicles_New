import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { redFlash, whiteFlash } from '../../../../Components/Slide/Slide'
import { firstChoiceMessage, previousSlideMessage } from '../../../../Utils/TextConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        Подумать только, этот день наконец настал! Мне так не терпится выступить на сегодняшней игре! 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/FOF/Whisper.mp3'),
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 1,
    text:
      `
        Я полностью разделяла мнение одноклассницы, ведь от финального танца зависела судьба команды, и, в большей степени — их капитана — сексуального красавчика Дерека Росса, моего парня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 2,
    text:
      `
        Нет, ну серьезно, исполнять роль болельщиц — это одно, а вот смотреть на парней — другое. Да и кто запретит? А еще все они в отличной форме. Нам ведь семнадцать, мы должны отрываться по полной. Тебе, конечно, повезло больше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 3,
    text:
      `
        Дерек без сомнения крутой. Именно такой мне и нужен. Какая королева будет встречаться с лузером?
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 4,
    text:
      `
        Ты что, совсем его не любишь? Говоришь так, будто тебе все равно на вас и ваши отношения. Или так и есть?
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 5,
    text:
      `
        Я закатила глаза, и, пройдя дальше по коридору, остановилась около женской раздевалки. Отвечать на такие глупые вопросы совершенно не хотелось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 6,
    text:
      `
        Тем более все прекрасно понимали и видели — Эйприл завидовала мне. Она пыталась копировать мой стиль и строила глазки Дереку, наивно считая, что я этого не замечаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 7,
    text:
      `
        Так и не дождавшись ответа, девушка фыркнула и зашла в раздевалку, оставляя меня одну. Я не расстроилась, ведь мы договорились встретиться перед матчем с Дереком, который уже спешил ко мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 8,
    text:
      `
        Парень, увидев меня, улыбнулся, и страстно поцеловал на виду растерянных учеников, спешащих по своим классам.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    message: 'Помимо прокачки отношений с персонажами, тебе доступен стат — Уважение. От этого зависит, как к героине относятся окружающие',
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 9,
    text:
      `
        Это определенно то, что мне нужно перед игрой. Ну что, готова сегодня выложиться на все сто? 
      `,
    buttons: [
      {
        text: 'Выложусь на все двести',
        goTo: 11
      },
      {
        text: 'Выложусь точно на сто',
        goTo: 14
      },
      {
        text: 'Это уж как пойдет',
        goTo: 17
      }],
    message: firstChoiceMessage,
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 11,
    text:
      `
        Обижаешь, милый, я всегда выкладываюсь на максимум, тебе ли это не знать?
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    message: 'Дерек не сомневается в твоих способностях. Он поражен рвением выступить и показать класс',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +2, category: 'Person', id: 'Derek' },
      { story: EStoriesEn.FOF, value: +2, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 12,
    text:
      `
        Тогда у меня нет никаких сомнений, что все пройдет отлично. Сегодня вечером мы отметим нашу победу с командой, и приводи девочек в клуб «Черная Лилия». Нас ожидает грандиозное веселье!
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 13,
    text:
      `
        Капитан ушел переодеваться, а я все еще продолжала ощущать вкус его губ, предвкушая нашу встречу вечером.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 14,
    text:
      `
        Наше выступление будет отличным. Я привыкла соответствовать моему капитану.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    message: 'Дерек не сомневается в тебе. Ты заслуживаешь уважения в его глазах',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Derek' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 15,
    text:
      `
        Тогда у меня нет никаких сомнений, что все пройдет отлично. Сегодня вечером мы отметим нашу победу с командой, и приводи девочек в клуб «Черная Лилия». Нас ожидает грандиозное веселье!
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 16,
    text:
      `
        Капитан ушел переодеваться, а я все еще продолжала ощущать вкус его губ, предвкушая нашу встречу вечером.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 17,
    text:
      `
        Тебе известно, что не все зависит от лидера. Я стараюсь как могу, а ты этого совсем не ценишь!
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    message: 'Дерек сомневается в тебе. Ты не заслуживаешь уважения в его глазах',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Derek' },
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 18,
    text:
      `
        Надеюсь, это была шутка? Очень неуместно, потому что я и мои парни не намерены проиграть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 19,
    text:
      `
        Сегодня вечером мы отметим нашу победу с парнями, и приводи девочек в клуб «Черная Лилия». Нас ожидает грандиозное веселье! И, я надеюсь, мы наконец-то сможем остаться наедине, моя чирлидерша.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 20,
    text:
      `
        «В прошлый раз тетя вернулась слишком рано с работы, поэтому мы не смогли провести время вместе. Надеюсь, сегодня мы наконец-то сделаем это». 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 0, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 21,
    text:
      `
        Войдя в раздевалку, мне пришлось остановиться: сладкие грезы разрушил запах пота, смешавшийся с парфюмом. Брезгливо поморщившись, я прокричала:
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        Эй, а разве сюда были приглашены свиньи? Что-то я этого не припоминаю. Если вы не знаете, что такое элементарная гигиена и уход за собой, душ, в конце концов — идите к парням. Хотя я не уверена, что от них воняет так, как от вас.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        По раздевалке прошла волна хохота, и униженные девушки быстро сбежали, не смея ничего возразить моему авторитету. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        «Все они были кучкой неотесанных простушек, и каждая ощущала себя ничтожной в сравнении со мной. Безусловно, я была единственной ученицей, которая претендовала на титул «королевы» — и никто не мог с этим поспорить».
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        Взяв бутылку с водой со стойки, я сделала пару глотков, и, сменив школьную форму на чирлидерский костюм, стала напоминать девочкам основные моменты выступления.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        Мы помним, Кэсси, и как всегда покажем класс. Просто расслабься, окей? 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        Мы шесть месяцев тренировались ради этого момента. И я лично ставила танец, угробив на это все свободное время последние два месяца!
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        И если что-то пойдет не так, поверьте мне, вы ни в один приличный колледж не попадете. Уж я вам это гарантирую.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 29,
    text:
      `
        Мое изменение настроения заметили все: в раздевалке сразу настала тишина. Девушки знали, что не стоило мне выходить из себя, именно поэтому Эйприл решила перевести тему.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        Расскажи лучше, как ты познакомилась с Дереком.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        «Любят они заговорить меня. Стоит ли рассказать и заодно снова пережить тот момент или сейчас не до этого?» 
      `,
    buttons: [
      {
        text: 'Рассказать, погрузившись в приятные воспоминания',
        goTo: 32
      },
      {
        text: 'Не рассказывать',
        goTo: 112
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 32,
    text:
      `
        Это случилось на первой тренировке, когда я только стала лидером болельщиц. Мы с девочками изучали новый трюк, и заметили, что за нами пристально наблюдают.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    message: 'Тебе приятно вспоминать первую встречу с Дереком. Ваши отношения улучшились',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 33,
    text:
      `
        Эй, извращенец!
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 34,
    text:
      `
        Тогда парень, осознав, что его раскрыли, поспешил быстренько покинуть спортзал, а я побежала следом, с твердым намерением проучить наглеца.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 35,
    text:
      `
        Побегав некоторое время по школе, мои поиски так и не увенчались успехом. Он будто испарился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 36,
    text:
      `
        Мне пришлось облокотиться о стену, чтобы отдышаться и принять поражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 37,
    text:
      `
        Я даже не заметила, не услышала приближение этого нахала. И когда он резко поравнялся со мной, то прижал к стене и жадно поцеловал.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 38,
    text:
      `
      `,
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/FOF/CutScenes/Prologue.mp4'), goTo: 39 },
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 39,
    text:
      `
        Буквально на пару секунд я поддалась, чувствуя себя парализованной из-за такой страсти. Когда его руки довольно смело начали блуждать по моему телу, то я оттолкнула его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 40,
    text:
      `
        Но его только раззадорила эта реакция. Минуту-другую мы смотрели друг на друга: он улыбался, я мечтала ему врезать, но так и не сделала этого. А затем, гордо усмехнувшись, он ушел, оставив меня в полной растерянности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 41,
    text:
      `
        Тогда я не могла даже возразить, потому что поцелуй словно околдовал меня. Раньше я не чувствовала подобного, но Дерек смог одним своим действием разбудить во мне желание.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 42,
    text:
      `
        На следующий день я узнала, что этот наглец — новый капитан нашей футбольной команды, лучший из лучших. И он доказал свое мастерство на первой же игре. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 43,
    text:
      `
        Дерек двигался с бешеной скоростью, каждый раз ловко забивая мяч в ворота соперника. Он был так неутомим, так ненасытен… Капитану было важно не просто победить, а показать всем, кто здесь главный.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 44,
    text:
      `
        Мокрая футболка только подчеркивала сексуальный рельеф его тела. Откинув волосы назад, парень поймал мой заинтересованный взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 45,
    text:
      `
        Да, я смутилась, но не хотела подавать вида, и так же, с вызовом, посмотрела на него. Парень медленно прошелся взглядом по моей фигуре, словно это был музейный экспонат, и, коварно улыбнувшись, вернулся к своей команде.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 46,
    text:
      `
        Я не видела смысла оставаться здесь, и решила отправиться домой. В конце концов, у меня были дела и поважнее, чем любоваться каким-то парнем.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Football_Field.jpg')
  },

  {
    id: 47,
    text:
      `
        По пути я разговорилась с девочками. Мы еще раз обсудили основные моменты, новые движения, предстоящие выходные, и, когда настала пора прощаться, мне снова пришлось столкнуться с ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 48,
    text:
      `
        Команда боготворила своего нового капитана. Они скандировали его имя и хлопали по плечам в знак признательности его авторитета.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 49,
    text:
      `
        ДЕРЕК! ДЕРЕК! ВПЕРЕД! С ДЕРЕКОМ МЫ ПОБЕДИМ! ДА!
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Команда',
    imageFront: require('../../../../Images/FOF/Objects/Crowd.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 50,
    text:
      `
        «Что за цирк они здесь устроили?! Мальчишки…»
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 51,
    text:
      `
        Я уже подходила к выходу, когда чужая рука открыла мне дверь, провожая вперед. Видимо, капитан не мог не заполучить еще один трофей — меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/School_Corridor.jpg')
  },

  {
    id: 52,
    text:
      `
        Мы вместе вышли на улицу, и, чтобы заполнить неловкое молчание, я первая начала диалог.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 53,
    text:
      `
        Не думала, что капитан будет таким.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 54,
    text:
      `
        Парень усмехнулся. Он вел себя непринужденно, самоуверенно, и, продолжая мою мысль, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 55,
    text:
      `
        Воспитанным?
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 56,
    text:
      `
        Наглым. Пробираться на закрытую тренировку и наблюдать за моими девочками без разрешения — недопустимо.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 200,
    text:
      `
        Дерек усмехнулся и с вызовом бросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 57,
    text:
      `
        Неужели? Я не видел недовольства, когда пробовал на вкус твои губы. Полагаю, что мы квиты: ведь ты тоже подсматривала за мной. И как тебе? Понравилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 58,
    text:
      `
        Можно было и лучше. Так каждый может.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 59,
    text:
      `
        Я соврала, потому что сейчас не собиралась нахваливать его навыки.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 60,
    text:
      `
        Именно поэтому ты так внимательно смотрела? Искала мои промахи или все-таки любовалась?
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 61,
    text:
      `
        Я остановилась, и, не желая продолжать этот разговор, спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 62,
    text:
      `
        Что тебе нужно?
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 63,
    text:
      `
        Прямолинейная? Мне нравится, что мы сразу приступаем к делу. Одно свидание.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 64,
    text:
      `
        Я задумалась, но лишь для того, чтобы потянуть время. Не хотелось сдаваться ему сразу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 65,
    text:
      `
        «Пускай попробует завоевать. Не все в этом мире дается так просто, капитан». 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 66,
    text:
      `
        Хотя бы дай нам шанс. Я новый капитан, а у тебя своя группа поддержки. Мы созданы друг для друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 67,
    text:
      `
        Мне, определенно, нравилось, что парень проявлял настойчивость. В наше время это редкость.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 68,
    text:
      `
         <p>Тот факт, что я капитан чирлидерш, не говорит о том, что мы должны встречаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 69,
    text:
      `
        Парень не сдавался и, сократив дистанцию между нами, прошептал:
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 70,
    text:
      `
        А тот факт, что я хочу тебя?
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 71,
    text:
      `
        Мой взгляд метался из стороны в сторону, а сердце забилось быстрее от его слов.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 72,
    text:
      `
        Это слишком нагло с твоей стороны, Дерек. Может, ты и хорош собой, но не настолько, чтобы я исполняла твои похотливые прихоти.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 73,
    text:
      `
        «И кто с кем играл?»
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 74,
    text:
      `
        Но тебе же это нравится, да?
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 75,
    text:
      `
        Его близость действовала опьяняюще: тело постепенно переставало слушать разум. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 76,
    text:
      `
        Ты хочешь одно свидание? 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 77,
    text:
      `
        Парень томно разглядывал мое лицо, пытаясь раскусить мои мотивы, увидеть подвох в словах. Но он тоже не хотел сдаваться, и не упустив возможности извлечь выгоду, прохрипел:
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 78,
    text:
      `
        Боюсь, ставки выросли, красавица. Одного уже мне будет мало.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 79,
    text:
      `
        Я решила подловить его, так как обратила внимание, что он ни разу не назвал меня по имени.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 80,
    text:
      `
        Я согласна. Два свидания, но с одним условием.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 81,
    text:
      `
        Удиви меня, лапочка.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 82,
    text:
      `
        Мы проведем время вместе, если ты знаешь, как меня зовут.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 83,
    text:
      `
        Парень усмехнулся, и, взглянув на меня серыми глазами, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 84,
    text:
      `
        Если что, я поверил, что ты пыталась сопротивляться.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 85,
    text:
      `
        Серьезно? Он даже не знал твоего имени? Какой наглец.
      `,
    beforeBegin: whiteFlash,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 86,
    text:
      `
        Я улыбнулась, заканчивая вспоминать наше знакомство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 87,
    text:
      `
        Он знал. И до самого конца сохранил интригу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 88,
    text:
      `
        Мы уже подошли к дому, и, с огромным сожалением в душе я произнесла:
      `,
    beforeBegin: whiteFlash,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/House_Facade.jpg')
  },

  {
    id: 89,
    text:
      `
        У тебя были все шансы, Дерек. Совет на будущее: если зовешь девушку на свидание, вначале узнай ее имя. Спокойной ночи.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/House_Facade.jpg')
  },

  {
    id: 90,
    text:
      `
        Парень остановил меня, взяв за руку, и медленно провел до локтя, изучая мою реакцию. Дерек ласково посмотрел в глаза, приблизился, чтобы поцеловать. Я не позволила — кем бы я была после этого? Но тело само просило снова ощутить эту эйфорию.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/House_Facade.jpg')
  },

  {
    id: 91,
    text:
      `
        Дерек не посмел сделать лишнего, он только аккуратно убрал пряди волос с моего лица и, приблизившись, прошептал, касаясь дыханием уха:
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/House_Facade.jpg')
  },

  {
    id: 92,
    text:
      `
        Доброй ночи, Кассандра.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/House_Facade.jpg')
  },

  {
    id: 93,
    text:
      `
        Я ожидала услышать вопросы, и девушки не заставили себя ждать.
      `,
    beforeBegin: whiteFlash,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 94,
    text:
      `
        И ты согласилась пойти с ним на свидание? 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Сара',
    imageFront: require('../../../../Images/FOF/Persons/Sarah.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 95,
    text:
      `
        Не сразу, но, да. Я ничего не теряла. К тому же, он правда зацепил меня своим упорством.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 96,
    text:
      `
        Ну на поле мы все видели его в действии, а что насчет того, какой он наедине? Понравилось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Сара',
    imageFront: require('../../../../Images/FOF/Persons/Sarah.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 150,
    text:
      `
      «Понравилось ли мне то свидание с Дереком?»
      `,
    buttons: [
      {
        text: 'Да, все было прекрасно',
        goTo: 97
      },
      {
        text: 'Нет, свидание было ошибкой',
        goTo: 101
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 97,
    text:
      `
        Дерек, как в лучших романтических фильмах отвез меня в самый дорогой ресторан, мы поужинали на балконе с видом на залив и ночной город. Парень был вежлив, ухаживал за мной, словно я уже была его королевой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    message: 'Дерек тоже с теплотой вспоминает о вашем первом свидании. Ты смогла впечатлить девушек. Твое уважение среди них выросло',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Derek' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 98,
    text:
      `
        Он пытался вести себя как джентльмен, но в его взгляде читалась страсть.  Дерек хотел только меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 99,
    text:
      `
        Казалось, что я затронула слишком щепетильную тему, но сейчас я должна была раз и навсегда показать, что Дерек — мой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 100,
    text:
      `
        «Эйприл, похоже, совсем одержима им. Да у нее чуть ли не слюнки текут. Надеюсь, она поняла, где ее место».
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 101,
    text:
      `
        Парень хоть и был обходителен, но я знала, зачем я здесь — только ради продолжения. Ему было не интересно понять меня. Таким, как Дерек, важны только красота и статус, а уж потом внутренний мир. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    message: 'Ты считаешь свидание пустой тратой времени. Ты смогла впечатлить девушек. Твое уважение среди них выросло ',
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Derek' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 102,
    text:
      `
        «Или же я ошибалась? Отличалась ли я чем-то от этого мышления?»
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 103,
    text:
      `
        И все же я пожалела, что мы так скоро пошли на свидание, еще не успев толком поговорить наедине, узнать друг друга. Из-за этого постоянно чувствовалась неловкость, так как не ощущались точки соприкосновения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 104,
    text:
      `
        Мы просто сидели и наслаждались вкусной едой.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 105,
    text:
      `
        Так, может, дело не в нем?
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 106,
    text:
      `
        «Совсем страх потеряла? Неужели, голосок созрел, перечить мне? Ну, ничего, я ей покажу, кто здесь королева».
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 107,
    text:
      `
        Если серая мышь хочет что-то сказать, пускай говорит громче, а не пищит в своей норке.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 108,
    text:
      `
        Прости, Кассандра, я не хотела тебя задеть, но ты же должна знать, что такие парни, как Дерек, слишком непостоянны. Ему нужен секс, иначе он быстро увлечется другой. У вас ведь так ничего и не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 109,
    text:
      `
        Казалось, девушки начали перешептываться, пока я поправляла прическу, и, закончив, я медленно подошла к ним, и выразительно сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 110,
    text:
      `
        Моя личная жизнь — не достояние общественности. И, к тому же, кто способен променять Королеву на серую мышь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 111,
    text:
      `
        Эйприл спасовала: опустила глаза, боясь встретиться с моим взглядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 112,
    text:
      `
        Сейчас нам незачем отвлекаться от выступления, лучше разомнитесь. Полезнее будет.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    message: 'Ты не хочешь сейчас вспоминать о том, как вы познакомились. Возможно, Дерек тебе не так дорог?',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Derek' },
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 113,
    text:
      `
        Пусть я и отвертелась от этого вопроса, но мои мысли не покидала истинная причину, почему я не хотела делиться этим воспоминанием. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    message: 'Ты не смогла впечатлить девушек, твое уважение среди них падает',
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 114,
    text:
      `
        «В глубине души я понимала, что такой парень как Дерек — не моя судьба. Да, сейчас мы были вместе, нас тянуло друг к другу, но общего будущего никто из нас не видел».
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 115,
    text:
      `
        «Наши отношения начались резко, также они и закончатся. Тем более через год, когда мы будем поступать в колледж, мы найдем более подходящих партнеров».
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 116,
    text:
      `
        «И по прошествию стольких лет, я с улыбкой буду вспоминать, какой мы были парой: капитан и чирлидерша, оба были богаты, популярны, но на этом наши сходства заканчивались».
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 117,
    text:
      `
        «Мы просто получали опыт, в подростковом возрасте отлично проводили время. Вероятно, я и ошибалась, потому что сама не знала, чего хочу от будущего».  
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 118,
    text:
      `
        Так, девочки, отдохнули и хватит. Сегодня мы должны показать все, на что способны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 119,
    text:
      `
        На что вы не способны — мне знать не нужно. Готовы?
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 120,
    text:
      `
        Девочки неохотно натянули улыбку, они переминались с ноги на ногу и воротили свой взгляд, не смотря в мою сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 121,
    text:
      `
        «Надеюсь, эти дуры идеально выучили движения».
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Locker_Room.jpg')
  },

  {
    id: 122,
    text:
      `
        Зал был заполнен целиком, и причина была ясна: сегодня вечером многие представители спортивных колледжей прибыли сюда, чтобы отметить успехи игроков и, возможно, предложить стипендию.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    music: require('../../../../Sounds/FOF/Show.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 123,
    text:
      `
        Все были на взводе — парни поддерживали боевой дух, а девушки поправляли макияж, пока я разминалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 124,
    text:
      `
        «Остались считанные минуты до того момента, как наших футболистов пригласят на поле. Тогда мы и выступим».
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 125,
    text:
      `
        Девушки, приготовьтесь, скоро наш выход.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 126,
    text:
      `
        Когда в зале заиграла музыка, все сомнения были отброшены. В дело вступил профессионализм. Изученными движениями мы растеклись по залу, зажигая каждый угол улыбкой и бешеной энергией. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 127,
    text:
      `
        Девушки блестяще справлялись с поддержкой, и от меня, как от лидера, требовалась большая отдача. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 128,
    text:
      `
        Нам было мало просто станцевать, мы должны были убедить зрителей, завладеть их вниманием, поэтому нам пришлось идти на риск.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 129,
    text:
      `
        В завершение танца, болельщицы подставили руки, создав из них лестницу. Они приглашали меня забраться, словно подкрепляя мой путь к триумфу. Мое возвышение. Мой успех.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 130,
    text:
      `
        Я не сомневалась, несмотря на то, что приходилось удерживать столь шаткое равновесие.  
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 131,
    text:
      `
        По условному сигналу болельщицы подкинули меня вверх для того, чтобы завершить выступление эффектным номером: кувырком.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 132,
    text:
      `
        Мир закружился перед глазами, и я уже была готова ощутить твердую поддержку девочек, но вместо этого я почувствовала быстрый удар, который унес меня в темноту.
      `,
    beforeBegin: redFlash,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('FOF', 'Глава 1', 'Часть 1', '0')
        }
      }],
    simple: require('../../../../Sounds/FOF/Prologue_Hit.mp3'),
    achievement: { story: EStoriesEn.FOF, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  }
])
