import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.AEP, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Новый день встретил меня теплыми лучами солнца. Так не хотелось вставать! Но брошенный взгляд на часы заставил передумать.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: '<i>На следующий день…',
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 1,
    text:
      `
        — Я проспала!
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        Следующие пару минут я бегала из стороны в сторону, пытаясь как можно скорее привести себя в нормальный вид, мысленно ругая за проступок.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        — Молодец, $Имя Игрока$, уже облажалась. В следующий раз поставлю несколько будильников, что б уж наверняка проснуться.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        Впопыхах вспоминая, какие предметы ждут сегодня, я закинула все нужное в рюкзак, даже больше. На всякий случай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 5,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'DrinkAtParty' }) === 2
          },
          goTo: 6
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'DrinkAtParty' }) === 1
          },
          goTo: 8
        },       
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'GoToParty' }) === 0
          },
          goTo: 12
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 1
          },
          goTo: 11
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'DrinkAtParty' }) === 0
          },
          goTo: 9
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 0
          },
          goTo: 12
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        — Черт… Произошедшее вчера… Это огромная ошибка. Надеюсь, Мэтт не собирается трепаться на каждом углу про то, что между нами был секс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        Голова была тяжелая, мне явно не стоило столько пить. И чувствовала я себя паршиво.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        «Хоть и немного выпила вчера, но этот поцелуй… Черт бы побрал этого Мэтта!»
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 9,
    text:
      `
        «Я благодарна, что вчера смогла держать себя в руках, и не делать поспешных решений. Надеюсь, мне это зачтется».
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 10,
    text:
      `
        «Но стоило ли идти на эту вечеринку? Не потеряла ли я время зря? Еще и этот Мэтт…»
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        «Мы неплохо провели время с Мигелем. Уж точно лучше, чем пьяные студенты, обжимающиеся на каждом углу».
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: '$Имя Игрока$ ',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        «Как же я могла проспать, учитывая, что ничем таким не занималась?»
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        «Может, бабушка права и мне стоит больше времени уделять своей дисциплине?»
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        Отбросив лишние мысли, я немедленно открыла шкаф и выбрала наряд.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 15,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    wardrobe: { story: EStoriesEn.AEP, personId: 'AEP_Hero_Part_2', goTo: 16 },
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        «И все же, я расслабилась… А было ли что-то задано? Что за путаница в голове…»
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: '$Имя Игрока$ ',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        Осознав, что время безвозвратно утеряно, я вызвала такси и спустилась вниз. Аппетитные блинчики, которые приготовила бабушка, лежали на столе, ожидая меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 18,
    text:
      `
        «В последнее время она меня часто балует. Не к добру это».
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 19,
    text:
      `
        Укусив край блина и запив его уже остывшим кофе, я увидела, что подъехала машина и, взяв рюкзак, выбежала из дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 20,
    text:
      `
        К моему счастью, преподаватель продолжил вести лекцию, не отвлекаясь. Мне удалось незамеченной пробраться к парте, и, заняв место, достать весь материал.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 21,
    text:
      `
        «Вроде бы нормально. Меня не ругают, не выставляют посмешищем, значит, на этот раз удалось избежать неприятностей».
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 22,
    text:
      `
        Я то и дело ловила на себе отвратительные мысли однокурсников, и, закатив глаза, полностью расслабилась, погрузившись в изучение новой темы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 23,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniLanguage' }) === 1
          },
          goTo: 24
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniPolitics' }) === 1
          },
          goTo: 54
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniArchitecture' }) === 1
          },
          goTo: 70
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 24,
    text:
      `
        Лекция проходила ненапряженно, и, когда занятие подходило к концу, преподаватель сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 25,
    text:
      `
        — Задание вам будет выслано на почту, так что не пытайтесь сделать вид, что вы не услышали или забыли.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 26,
    text:
      `
        Собрав все вещи с парты, я встала, направляясь к выходу, но не тут-то было. Виктор сделал пару шагов ко мне и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 27,
    text:
      `
        — $Имя Игрока$, если опаздываете на пару, значит ли это, что вы усердно готовили домашнюю работу?
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 28,
    text:
      `
        Он взял тетрадь с парты, и, взглянув на содержимое, произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 29,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'GoToParty' }) === 1
          },
          goTo: 35
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 1
          },
          goTo: 35
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 0
          },
          goTo: 30
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 30,
    text:
      `
        — Вижу, что вы старались, и это не останется незамеченным. Ставлю «отлично» за проделанную работу.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    message: 'Ваш вечер проходил дома, поэтому вы успели сделать домашнюю работу',
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 31,
    text:
      `
        — Спасибо! Простите, профессор, за опоздание. Я постараюсь такого больше не допускать.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 32,
    text:
      `
        В глазах Виктора не читалась злость, скорее понимание. Но сделав вид строго учителя, он произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 33,
    text:
      `
        — И все же, у меня есть правило, касательно таких ситуаций. Хоть ваша успеваемость на достойном уровне, но вы должны остаться после пар и решить несколько задач. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 34,
    text:
      `
        — Это будет вам поучительным уроком.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 35,
    text:
      `
        — Вижу, что вы пытались впопыхах что-то написать. Ставлю «удовлетворительно» только за то, что здесь не пустой лист, а непонятные каракули.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    message: 'Вы были заняты другими делами и не успели закончить домашнюю работу',
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 36,
    text:
      `
        — У вас всегда будут дела важнее: вечеринки, встречи, свидания и прочее. Но не стоит пренебрегать учебой, раз смогли поступить сюда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 37,
    text:
      `
        — Я не буду закрывать глаза на ваши оценки, и, если не хотите вылететь, стоит хотя бы начать стараться.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 38,
    text:
      `
        Опустив взгляд вниз, я ощущала, как горит мое лицо, и тихо ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 39,
    text:
      `
        — Простите, профессор, за опоздание. Я постараюсь такого больше не допускать.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 40,
    text:
      `
        — И все же, у меня есть правило, касательно таких ситуаций. Тем более ваша успеваемость оставляет желать лучшего.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 41,
    text:
      `
        — Останетесь после пар и решите несколько задач. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 42,
    text:
      `
        — Это будет вам поучительным уроком.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 43,
    text:
      `
        Мое настроение стремительно поползло вниз, в то время как сбоку наметилось движение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 44,
    text:
      `
        Веселая толстушка Карлота, услышав про наказание, растолкала собравшихся вокруг профессора студентов в стороны.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 45,
    text:
      `
        Оказавшись перед Виктором, она выпятила грудь вперед, и произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 46,
    text:
      `
        — Профессор, я не подготовилась к сегодняшним занятиям. Мне тоже стоит остаться после пар? 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speaker: 'Карлота',
    imageFront: require('../../../../Images/AEP/Persons/Carlotte.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 47,
    text:
      `
        Я еле сдержалась от колкого замечания. Как же меня бесила эта пампушка, привыкшая забирать все внимание себе, но следующая мысль повеселила меня:
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 48,
    text:
      `
        «Где ж ты была раньше, Карлота? Если б преподаватель так усердно изучал твои прелести во время лекции, то, возможно, не обратил бы внимания на мою оплошность».
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 49,
    text:
      `
        — В этом совсем нет необходимости. Я уверен, что вы успеете сделать все до следующей пары, иначе придется поставить вам плохую оценку.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 50,
    text:
      `
        Казалось, она готова была раздавить всех, кто препятствовал ей, и, метнув на меня гневный взгляд, взяла свой рюкзак, и, откинув волосы на спину, гордо ушла.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 51,
    text:
      `
        Преподаватель посмотрел на меня, и, продолжив мысль, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 52,
    text:
      `
        — Буду ждать всех провинившихся после последней пары.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 53,
    text:
      `
        Виктор ушел к своему столу, а я, взяв свои вещи, медленно поплелась в сторону выхода. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 54,
    text:
      `
        Преподаватель исписал всю доску, привлекая внимание студентов к теме лекции. Его голос звучал то монотонно, то слишком резко, и, когда пара подошла к окончанию, он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 55,
    text:
      `
        — Ваше домашнее задание — в вашей лекции. Ответственно подготовьтесь к следующей паре. Спрашивать буду всех и каждого без исключений. И никаких пропусков.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 56,
    text:
      `
        Я почти собрала все вещи и собралась уходить, но профессор оказался рядом со мной, и, нависая грозной тенью, спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 57,
    text:
      `
        — Я преподаю здесь половину своей жизни, и за все это время только несколько человек осмелились опоздать на мою пару. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 58,
    text:
      `
        — Чем же вы были так заняты? Что важнее моего предмета?
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 59,
    text:
      `
        Он быстро перехватил мою тетрадь, а я не стала препираться и позволила ему изучить содержимое. Преподаватель пролистал пару страниц и угрюмо сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 60,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'GoToParty' }) === 1
          },
          goTo: 63
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 1
          },
          goTo: 63
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 0
          },
          goTo: 61
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 61,
    text:
      `
        — Домашняя работа есть. Но здесь от вас меньшего и не ждут.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    message: 'Ваш вечер проходил дома, поэтому вы успели сделать домашнюю работу',
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 62,
    text:
      `
        «Специально унижаешь перед всеми? Зачем тогда открыл мою тетрадь? Надеялся поймать на том, что не сделала домашку? Обломись!»
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 63,
    text:
      `
        — Пусто, как и в вашей голове. Зачем же тогда выбирать такой глубокий предмет, если вы не готовы получать знания? Ждете исключения?
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    message: 'Вы были заняты другими делами и не успели закончить домашнюю работу',
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 64,
    text:
      `
        «Специально унижаешь перед всеми? Обломись, я тебе так просто так не сдамся, мерзкий старикашка!»
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 65,
    text:
      `
        Довольная собой, я немного усмехнулась, и это не осталось незамеченным. Преподаватель вернул мне тетрадь и громко произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 66,
    text:
      `
        — Ваше поколение совсем потеряло все границы. Может быть, благодаря наказанию, вы поймете, что значит уважать профессора. Жду вас после пар. Отработаете опоздание.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 67,
    text:
      `
        Я только открыла рот, чтобы возразить, но поняла, что препирательства с профессором ни к чему меня не приведут.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 68,
    text:
      `
        «Средневековый тиран!»
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 69,
    text:
      `
        Собрав свои вещи, я ушла, зная, что еще предстоит вернуться.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 70,
    text:
      `
        Пара проходила непринужденно: преподаватель зачитывала лекцию, голосом выделяя особо важные моменты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 71,
    text:
      `
        Ожидая окончания, все начали собирать вещи, и я не осталась в стороне.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 72,
    text:
      `
        — Изучите дополнительную литературу, чтобы быть подкованными в изученных темах. На следующем занятии обязательно разберем новые нюансы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 73,
    text:
      `
        Ритмичный звук каблуков приблизился ко мне, и, подняв голову, я осознала: меня все таки заметили! 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 74,
    text:
      `
        — Мне известно, что большинство молодых людей представляют студенческие годы как в американских фильмах: выпивка, тусовки, веселье. Но в жизни все иначе, $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 75,
    text:
      `
        — В жизни каждого может случиться такое обстоятельство, когда, например, человек не слышит будильник или просто просыпает.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 76,
    text:
      `
        — И как бы мне не хотелось войти в положение, работа есть работа. Я взгляну на ваше домашнее задание? 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 77,
    text:
      `
        Преподаватель протянула руку к моей тетрадке, и я послушно отдала ее. Изабелла внимательно изучила содержимое и подвела итог:
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 78,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'GoToParty' }) === 1
          },
          goTo: 83
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 1
          },
          goTo: 83
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 0
          },
          goTo: 79
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 79,
    text:
      `
        — Вижу, что вы досконально изучили тему и все красиво законспектировали. Это не может не радовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    message: 'Ваш вечер проходил дома, поэтому вы успели сделать домашнюю работу',
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 80,
    text:
      `
        — Спасибо! Простите, профессор, за опоздание. Я постараюсь такого больше не допускать.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 81,
    text:
      `
        Изабелла вернула мне тетрадь, и добавила:
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 82,
    text:
      `
        — Тем не менее, я не могу закрыть глаза на ваше опоздание, $Имя Игрока$. Вы останетесь после пары: сможете здесь выполнить работу.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 83,
    text:
      `
        — Вижу, что вы совсем безответственно подошли к изучению моего предмета. Вам не интересно?
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    message: 'Вы были заняты другими делами и не успели закончить домашнюю работу',
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 84,
    text:
      `
        — Интересно. Просто у меня было мало времени, и первый день выдался тяжелее, чем я думала.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 85,
    text:
      `
        Изабелла вернула мне тетрадь, и добавила:
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 86,
    text:
      `
        — Понимаю. Но я не могу закрыть глаза на ваше опоздание, $Имя Игрока$. Вы останетесь после пары: сможете здесь выполнить домашнюю работу.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 87,
    text:
      `
        Преподаватель ушла к своему столу, пока я быстро закинула оставшиеся вещи в рюкзак и вышла из аудитории совершенно подавленная.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 88,
    text:
      `
        День тянулся мучительно долго, а веселые лица беззаботных студентов — раздражали. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 89
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 89,
    text:
      `
        Я чувствовала себя неудачницей, которая умудрилась облажаться даже на подготовительных занятиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 90,
    text:
      `
        «Почему у других получается легко, а у меня все через жопу?»
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 91,
    text:
      `
        «И почему только мне так не повезло? Что за несправедливость! Уже на второй день обучения остаться после пар, теряя личное время среди одиноких парт и унылых профессоров, которые словно живут в универе!»
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 92,
    text:
      `
        «Неужели им так трудно понять, что бывают разные обстоятельства. Что ж за отстой!»
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 93,
    text:
      `
        «Почему?! Ну почему именно я?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 94,
    text:
      `
        «Может быть не одной мне придется сидеть там? Мысль успокаивает».
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 95,
    text:
      `
        Продолжая рассуждать, я перекусила батончиком с чаем и направилась навстречу своему наказанию.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 96,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniLanguage' }) === 1
          },
          goTo: 97
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniPolitics' }) === 1
          },
          goTo: 131
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniArchitecture' }) === 1
          },
          goTo: 187
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 97,
    text:
      `
        В аудитории было пусто, только Виктор сидел за своим столом и что-то помечал в ежедневнике. Увидев меня, он легко улыбнулся и, указав на парту, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 98,
    text:
      `
        — Вы пришли. Отлично. Присаживайтесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 99,
    text:
      `
        Здесь было слишком тихо: я слышала, как ручка преподавателя двигалась по бумаге. От этого мне стало не по себе. Бесшумно заняв место, я ожидала указаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 100,
    text:
      `
        «Может, он даст мне тест? Контрольную? Или завалит вопросами по теме?»
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 101,
    text:
      `
        Преподаватель закончил писать, отложил ежедневник, и, выбрав нужный листок из папки, передал мне. Я приняла его с опаской, и, осмотрев, выдохнула. Виктор тут же пояснил:
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 102,
    text:
      `
        — Я не собираюсь долго держать вас тут, лишая личного времени. Но, раз все равно нужно плодотворно провести этот час, то, почему бы вам просто не законспектировать немного дополнительной информации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 103,
    text:
      `
        «Так он только красовался перед другими учениками, поднимая авторитет?»
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 104,
    text:
      `
        — Это все? — с опаской спросила я, ожидая подвоха.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 105,
    text:
      `
        — Многие студенты и так относятся к преподавателям предвзято, считая, что наша задача — валить учеников. Так зачем же тратить ваше и мое свободное время, чтобы укреплять ненависть?
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 106,
    text:
      `
        Преподаватель радушно улыбнулся и кивнул, вернувшись к своим делам.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 107,
    text:
      `
        «Не такой уж он и козел, как я считала». 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 108,
    text:
      `
        «Даже, наоборот. Достаточно симпатичный». 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 109,
    text:
      `
        Оторвав взгляд от листка, я пристально изучила Виктора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 110,
    text:
      `
        «Он такой необычный… В смысле… Не ведет себя как тиран, не пытается валить. Или все это в силу его возраста?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 111,
    text:
      `
        «Нет, не имею в виду, что он старый, скорее, перерос подростковые трудности и стал понимающим мужчиной».
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 112,
    text:
      `
        Гадая, какие же секреты хранит преподаватель, я совсем не уследила за тем, что Виктор поймал мой взгляд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 113,
    text:
      `
        — Вам что-то непонятно? Нужно пояснить?
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 114,
    text:
      `
        «Он будто бы читает мои мысли. Воспользоваться шансом?»
      `,
    buttons: [
      {
        text: 'Да, нужна ваша помощь',
        goTo: 115,
        gift: true
      },
      {
        text: 'Нет, все понятно',
        goTo: 129
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 115,
    text:
      `
        Преподаватель встал с места и, подойдя ко мне сзади, склонился над листком, спрашивая:
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    music: require('../../../../Sounds/AEP/Ero.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 116,
    text:
      `
        — Да, тема не совсем легкая, но я готов все вам объяснить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 117,
    text:
      `
        Терпкий парфюм шлейфом окутывал его, отчего я напряглась. Ощущая запах Виктора, мое сознание рисовало грязные картинки: на парте, на полу, на столе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 118,
    text:
      `
        …
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 119,
    text:
      `
        Поправив волосы, я ненароком коснулась преподавателя, и тут же подпрыгнула на месте.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 120,
    text:
      `
        — С вами все хорошо? Вы слишком напряжены. Не бойтесь, я не кусаюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 121,
    text:
      `
        — Да я и не думала…
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 122,
    text:
      `
        Волнение достигло максимума, отчего я выронила карандаш. Нелепо улыбнувшись, потянулась за ним, и, подняв, сконцентрировалась на листке.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 123,
    text:
      `
        Виктор профессионально объяснял тему конспекта, и под его чутким руководством я быстро оставила важные пометки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 124,
    text:
      `
        Между нами чувствовалось напряжение, и, когда профессор активно жестикулировал рукой, нечаянно дотронулся до моего плеча. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 125,
    text:
      `
        Он поспешно убрал руку, но я видела, чего ему это стоило. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 126,
    text:
      `
        «Что за фигня? Я однозначно хочу своего профессора… Бред… Или нет?»
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    message: 'Кто знает, что чувствует Виктор. Возможно, это взаимно?',
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Viktor' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 127,
    text:
      `
        Однако я не могла избавиться от навязчивых мыслей, как бы ни пыталась.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 128,
    text:
      `
        Профессор почти сразу же удалился за свой стол, а я продолжила наказание, ощущая дикую пустоту внизу живота. 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 129,
    text:
      `
        Виктор спокойно кивнул, и, шумно выдохнув, продолжил писать в ежедневнике.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 130,
    text:
      `
        Я молча опустила взгляд на лист и быстро оставила заметки, решив, что позже сама разберусь с темой. Терять много времени здесь мне совсем не хотелось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 131,
    text:
      `
        В аудитории было пусто, только Маттео сидел за своим столом и что-то помечал в ежедневнике. Увидев меня, он даже не отложил свои дела, и, указав на парту, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 132,
    text:
      `
        — Занимайте место.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 133,
    text:
      `
        Здесь было слишком тихо: я слышала, как ручка преподавателя двигалась по бумаге. От этого мне стало не по себе. Бесшумно сев, я ожидала указаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 134,
    text:
      `
        «Может, он даст мне тест? Контрольную? Или завалит вопросами по теме?»
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 135,
    text:
      `
        Преподаватель закончил писать, отложил ежедневник, и, выбрав нужный листок из папки, повторил действие. В итоге, он собрал из них небольшую стопку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 136,
    text:
      `
        Перепроверил, передал мне. Я приняла это с опаской, и, осмотрев, выдохнула. Маттео тут же пояснил:
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 137,
    text:
      `
        — Законспектируйте.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 138,
    text:
      `
        — Да тут же несколько тем!
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 139,
    text:
      `
        Ворчливый преподаватель улыбнулся, будто наслаждаясь, ответив:
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 140,
    text:
      `
        — Может быть после этого у вас напрочь отобьет желание опаздывать.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 141,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'LoveViktor' }) === 1
          },
          goTo: 142
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'CallMiguel' }) === 0
          },
          goTo: 185
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 142,
    text:
      `
        Делать было нечего. Но что-то меня определенно тревожило… Он казался…
      `,
    buttons: [
      {
        text: 'Сексуальным',
        goTo: 143,
        gift: true
      },
      {
        text: 'Извергом',
        goTo: 183
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 143,
    text:
      `
        «Я помню его похотливый взгляд, и за этим точно кроется связь…»
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    music: require('../../../../Sounds/AEP/Ero.mp3'),
    speaker: '$Имя Игрока$',
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'MatteoIsSexy' },
      { story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'SexCounter' }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 144,
    text:
      `
        Посмотрев на преподавателя, низ живота заныл, требуя опасной близости. Трусливо опустив глаза, я сделала вид, что пишу, но мысли снова и снова путали разум.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 145,
    text:
      `
        «Вокруг столько горячих парней, а мое тело выражает желание покувыркаться со старым преподом? Здесь?! Я определенно ударилась головой».
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 146,
    text:
      `
        Подняв взгляд на него, я изучила то, с каким пристрастием он читал заметки. Как твердо и непоколебимо было его лицо, и как хмурились брови. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 147,
    text:
      `
        «А если я ошиблась? Меня же исключат… Тогда ба точно убьет. Но его похотливое изучение моего тела. Это не могло быть выдумкой».
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 148,
    text:
      `
        — В чем проблема? Вы желаете продлить наказание?
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 149,
    text:
      `
        Сердце бешено колотилось, но я приняла решение рискнуть, и, в упор посмотрев на преподавателя, гордо ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 150,
    text:
      `
        — Да, хочу.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 151,
    text:
      `
        Он отложил ежедневник в сторону, и, пока я сгорала от стыда, Маттео просто смотрел на меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 152,
    text:
      `
        — Хотите чего?
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 153,
    text:
      `
        — Наказания.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 154,
    text:
      `
        Взгляд старика изменился. Он облизнул губы, и, поманив меня одним пальцем, пригласил подойти. Я не смела сопротивляться, и, на негнущихся ногах подошла к профессору. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 155,
    text:
      `
        Маттео изучил меня снизу вверх, и, встав из-за стола, хищно усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 156,
    text:
      `
        — И как далеко вы готовы зайти, $Имя Игрока$?
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 157,
    text:
      `
        — Очень далеко, профессор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 158,
    text:
      `
        — Вы к этому готовы? Потому что я не позволю вам прохлаждаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 159,
    text:
      `
        — Готова.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 160,
    text:
      `
        — И осознаете всю серьезность ситуации? 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 161,
    text:
      `
        — Да. Я никому не скажу.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 162,
    text:
      `
        Маттео приблизился, и, убрав прядь волос с моего лица, провел тыльной стороной ладони по щеке. Ощутив опасное и столь желанное прикосновение, мои колени затряслись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 163,
    text:
      `
        Опершись рукой о стол преподавателя, я подняла глаза, следуя за его рукой. Он довольно холодно держал меня за подбородок, изучая. Маттео молчал, пока его пальцы блуждали по моему лицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 164,
    text:
      `
        Щеки горели, и, боясь продолжения, я хотела отвернуться, но он не позволил.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 165,
    text:
      `
        — Ну что же вы. Не нужно стесняться, $Имя Игрока$. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 166,
    text:
      `
        Его руки опустились на мои плечи, и, нажав на них, он заставил меня опуститься. Понимая, чего он хочет, я последовала его желаниям, оказавшись на коленях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 167,
    text:
      `
        Профессор взял меня за подбородок снова, отчего мне пришлось задрать голову вверх. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 168,
    text:
      `
        — Ты должна проявить себя. Покажи все, на что способна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 470,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/AEP/CutScenes/Matteo and Hero.mp4'), goTo: 169 },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 169,
    text:
      `
        Он отпустил меня, и, сев в кресло, кивнул, давая разрешение. Сейчас я не могла думать, насколько это было аморально: бугорок на его штанах притягивал меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 170,
    text:
      `
        Откинув посторонние мысли, я протянула руки к брюкам, и, расстегнув их, без стыда спустила его трусы вниз, оголяя достоинство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 171,
    text:
      `
        Маттео шумно выдохнул, а я, не смея сопротивляться, обхватила его рукой, начиная двигаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 172,
    text:
      `
        Преподаватель напрягся, и, схватив меня за шею, опустил лицо вниз. Теперь мои губы делали основное.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 173,
    text:
      `
        Я продвинулась дальше, и, продолжая ритмичные движения головой, вводила профессора в негу.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 174,
    text:
      `
        Чувствовала, как его ноги напрягаются, а рука, лежащая на моей голове, следовала за движениями. Маттео шумно вздыхал, пока я выполняла свою работу на отлично.  
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 175,
    text:
      `
        Мужчина ускорился, будто ему было мало тех усилий, что были приложены. Надавив на мою голову до упора, он заставил убрать руку и ощутить всю длину.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 176,
    text:
      `
        До боли собрав волосы на кулаке, он без осторожности ускорял меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 177,
    text:
      `
        Его власть надо мной возбуждала, и, постанывая, я начала издавать звуки. Профессор откинулся на кресло, позволяя мне продолжать в том же темпе, и, сжав подлокотники, шумно задышал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 178,
    text:
      `
        Когда все закончилось, я отстранилась и посмотрела на Маттео. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 179,
    text:
      `
        От вечно ноющего старика не осталось и следа, и, протянув мне салфетку, он быстро застегнул ширинку, произнеся:
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 180,
    text:
      `
        — Отлично постаралась. Теперь будешь задерживаться почаще.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 181,
    text:
      `
        — Да, профессор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 182,
    text:
      `
        Я вернулась за парту, пребывая в замешательстве и одновременном удовлетворении.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Matteo' }],
    achievement: { story: EStoriesEn.AEP, name: 'CrimeAndPunishment' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 183,
    text:
      `
        «Ну серьезно. Кто в здравом уме будет так наказывать?! Я всего лишь опоздала, а не провалила экзамены». 
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 184,
    text:
      `
        Преподаватель, видимо, довольный собой спокойно сидел, занимаясь делами. У меня не оставалось выбора, и, не тратя время на бесполезное нытье, начала переписывать лекцию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 185,
    text:
      `
        Закончив писать конспект, я сообщила об этом преподавателю. Он долго проверял написанное, придираясь к каждому слову. 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 186,
    text:
      `
        В итоге заставил переписать материал. Мне пришлось повиноваться и покорно вернуться на место.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 187,
    text:
      `
        В аудитории было пусто, только Изабелла сидела за своим столом и что-то помечала в ежедневнике. Увидев меня, она легко улыбнулась, говоря:
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 188,
    text:
      `
        — Рада, что вы появились. 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 189,
    text:
      `
        Здесь было слишком тихо: я слышала, как ручка преподавателя двигалась по бумаге. От этого мне стало не по себе. Бесшумно заняв место, я ожидала указаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 190,
    text:
      `
        «Может, она даст мне тест? Контрольную? Или завалит вопросами по теме?»
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 191,
    text:
      `
        Изабелла передала мне листок и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 192,
    text:
      `
        — Здесь новая информация. Просто законспектируй и можешь быть свободна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 193,
    text:
      `
        Тема была очень короткой и, с сомнением взглянув на преподавательницу, наши взгляды встретились.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 194,
    text:
      `
        — У вас есть вопросы?
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 195,
    text:
      `
        — Не сочтите это грубостью, но, я думала, будет что-то большее, чем немного текста. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 196,
    text:
      `
        Изабелла, поправив волосы, с улыбкой отметила:
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 197,
    text:
      `
        — Оставим это между нами. Мое рабочее время — лекции. А «наказания» никто не оплачивает, поэтому какой мне смысл мучить студентов?
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 198,
    text:
      `
        — Да и откровенно говоря, зачем в свободное время заниматься формальностями? Ненавидеть меня можно во время трудных тестов или экзаменов, но уж точно не сейчас. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 199,
    text:
      `
        — Не хочу, чтобы ученики относились ко мне как к злой преподше с неудовлетворением. Так ведь вы обычно говорите про нудных училок?
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 200,
    text:
      `
        Не сдержав усмешки, я посмотрела на нее с пониманием и уважением за честные слова. Похоже, ей понравилась моя дерзость, и она продолжила:
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 201,
    text:
      `
        — Я ведь и сама была студенткой, и не самой приличной. Опоздание на лекцию — это были еще цветочки в сравнении с остальными моими проказами.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 202,
    text:
      `
        «Стоит ли поинтересоваться или не нужно лезть в чужие дела?»
      `,
    buttons: [
      {
        text: 'Спросить',
        goTo: 203,
        gift: true
      },
      {
        text: 'Не спрашивать',
        goTo: 231
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 203,
    text:
      `
        — Не расскажете?
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 204,
    text:
      `
        — Да это мы так можем до самого утра сидеть, — она искренне рассмеялась, а в глазах читалась гордость за свои поступки.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 205,
    text:
      `
        — Из банального набора: курение, вечеринки.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 206,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'DrinkAtParty' }) === 2
          },
          goTo: 207
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'DrinkAtParty' }) <= 1
          },
          goTo: 210
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 207,
    text:
      `
        — Тебе, кстати, совет на будущее. Если много выпиваешь, запасись жвачкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 208,
    text:
      `
        — А то аромат от тебя, конечно… Все сразу становится ясно, — говорила она без злобы, скорее как подруга, которая дает полезный совет.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 209,
    text:
      `
        Я стыдливо посмотрела на пол, пытаясь унять неловкость.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 210,
    text:
      `
        — А так, однажды меня обвинили в ношении оружия и хотели исключить.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 211,
    text:
      `
        Я поежилась, пытаясь разгадать правду ли она говорила.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 212,
    text:
      `
        — Не бойся, я не настолько отчаянная, — Изабелла буквально упивалась своими откровениями.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 213,
    text:
      `
        — Запомни одно, это место пропитано злобой и всякими коварствами.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 214,
    text:
      `
        — Каждый хочет использовать другого в своих целях. Будь осторожна и не теряй бдительность.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 215,
    text:
      `
        На секунду мне показалось, что я стала героиней странного сериала, где у каждого есть своя роль.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 216,
    text:
      `
        И Изабелла здесь скорее как добрый наставник.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 217,
    text:
      `
        «Может быть она ничем и не отличается от злодеев? Но по крайне мере сейчас ей хотелось доверять».
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 218,
    text:
      `
        — Слушай, а у тебя не будет сигареты? Извини, что так внезапно, свои забыла дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 219,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Item', id: 'Granny_Cigarettes' }) >= 1
          },
          goTo: 220
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Item', id: 'Granny_Cigarettes' }) <= 0
          },
          goTo: 227
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 220,
    text:
      `
        «Сигареты то есть. А вот хочу ли я поделиться ими?»
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 221,
    text:
      `
        Прокрутив пачку в кармане, я решила:
      `,
    buttons: [
      {
        text: 'Дать',
        goTo: 222
      },
      {
        text: 'Не отдавать',
        goTo: 225
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 222,
    text:
      `
        — Возьмите, профессор.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 223,
    text:
      `
        Я протянула сигарету, отчего Изабелла радостно захлопала в ладоши.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 224,
    text:
      `
        — Великодушно благодарю.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Item', id: 'Granny_Cigarettes' },
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Isabelle' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 225,
    text:
      `
        — Простите, профессор, не курю.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 226,
    text:
      `
        — Что ж, жаль. Но и похвально, что себя не губишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 227,
    text:
      `
        — Простите, профессор, не курю.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 228,
    text:
      `
        — Что ж, жаль. Но и похвально, что себя не губишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 229,
    text:
      `
        — Ладно, пора возвращаться к делам. Спасибо тебе за разговор, надеюсь, еще получится нормально поболтать.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 230,
    text:
      `
        Она подмигнула мне, а я села за парту с легким сердцем.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    message: 'Профессор не против вашей компании',
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Isabelle' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 231,
    text:
      `
        «Это не мое дело. Не хочу навязываться».
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 232,
    text:
      `
        — Спасибо, профессор, пожалуй, пора вернуться к своим делам.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 233,
    text:
      `
        — Хорошо, удачи!
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speaker: 'Изабелла',
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 234,
    text:
      `
        Я села за парту и приступила к переписыванию темы.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 235,
    text:
      `
        Через некоторое время преподаватель отлучился по срочным делам.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 236,
    text:
      `
        Я смиренно продолжила работу, как вдруг, в аудиторию вошел молодой человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 237,
    text:
      `
        Вызывающая внешность, татуировки. Он словно вышел из карикатурных романов про плохих мальчиков.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 238,
    text:
      `
        Сев рядом, парень обвел мою фигуру с ног до головы и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 239,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return wardrobe.getCurrentClothesImageTitle(EStoriesEn.AEP, 'AEP_Hero_Part_2') === 'Бабушкин кошмар'
        },
        goTo: 240
      },
      {
        condition: () => {
          return wardrobe.getCurrentClothesImageTitle(EStoriesEn.AEP, 'AEP_Hero_Part_2') === 'Бабушкино равнодушие'
        },
        goTo: 244
      },
      {
        condition: () => {
          return wardrobe.getCurrentClothesImageTitle(EStoriesEn.AEP, 'AEP_Hero_Part_2') === 'Бабушкина гордость'
        },
        goTo: 248
      }
    ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 240,
    text:
      `
        — Ты совсем не ценишь свою внешность.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    speaker: 'Вызывающий студент',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 241,
    text:
      `
        Я опешила от такого заявления, настороженно взглянула на незнакомца.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 242,
    text:
      `
        — Можешь же одеваться лучше и подчеркивать свои достоинства. Почему этого не делаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: 'Вызывающий студент',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 243,
    text:
      `
        — Это тебя не касается.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    message: 'Ваш наряд не впечатлил незнакомца',
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Person', id: 'Leonardo', silent: true }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 244,
    text:
      `
        — Неплохо.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speaker: 'Вызывающий студент',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 245,
    text:
      `
        Я опешила от такого заявления, настороженно взглянула на незнакомца.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 246,
    text:
      `
        — У тебя есть чувство стиля и понимание, как и что носить. Но можно лучше.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speaker: 'Вызывающий студент',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 247,
    text:
      `
        — Это тебя не касается.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    message: 'Ваш наряд кажется незнакомцу приемлемым',
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: 1, category: 'Person', id: 'Leonardo', silent: true }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 248,
    text:
      `
        — У тебя отличный вкус, подчеркивающий достоинства.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speaker: 'Вызывающий студент',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 249,
    text:
      `
        Я опешила от такого заявления, настороженно взглянула на незнакомца.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 250,
    text:
      `
        — Есть чувство стиля и понимание, как и что лучше носить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speaker: 'Вызывающий студент',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 251,
    text:
      `
        — Это тебя не касается.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    message: 'Ваш наряд кажется незнакомцу привлекательным',
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: 2, category: 'Person', id: 'Leonardo', silent: true }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 252,
    text:
      `
        Для него, видимо, это казалось обычным делом оценивать кого-то. Он сидел в спокойной позе, скучающе глядя в потолок.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 253,
    text:
      `
        — Я — Леонардо. Извини, если показался грубым. Просто привык говорить, как оно есть.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 254,
    text:
      `
        — $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 255,
    text:
      `
        Неловкая тишина продолжилась, но я решила попробовать поговорить со странным студентом, чтобы скоротать время.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 256,
    text:
      `
        — Зачем ты сюда пришел? Тоже опоздал?
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 257,
    text:
      `
        — Типа того. 
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 258,
    text:
      `
        — Чем занимаешься в свободное время?
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 259,
    text:
      `
        — Работаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 260,
    text:
      `
        Разговор не клеился. Леонардо будто бы пребывал в своих мыслях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 261,
    text:
      `
        — Дурацкий день. Поссорился с сестрой. Все утро мне месила мозги и испортила настроение.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 262,
    text:
      `
        — А все из-за дурацкого мужика. Как можно мыслить так узко? Не развиваться, быть просто рабыней влечения?
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 263,
    text:
      `
        — Возраст. Приоритеты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 264,
    text:
      `
        — Да понятно. Пусть не жалуется. Приведет все это к нежелательной беременности, потом брошенка и можно ставить крест на своей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 265,
    text:
      `
        — Если только брат не будет рядом и не поможет образумиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 266,
    text:
      `
        Леонардо посмотрел на меня и кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 267,
    text:
      `
        — Сдаваться нельзя? Что ж…
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 268,
    text:
      `
        — Спасибо! 
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 269,
    text:
      `
        — Я же ничего не сделала…
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 270,
    text:
      `
        — Аура вокруг тебя такая, притягательная, успокаивающая. Ты будто бы способна внушить людям любую мысль и они последуют.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    speaker: 'Леонардо',
    imageFront: require('../../../../Images/AEP/Persons/Leonardo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 271,
    text:
      `
        Я сочла это комплиментом и улыбнулась. Затем приступила к дальнейшей работе.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 272,
    text:
      `
        Закончив выполнять задание, я положила листок на стол и покинула аудиторию. Впереди оставалось не так много свободного времени, и я размышляла, чем же можно заняться.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 273,
    text:
      `
        «Может быть сразу поехать домой?»
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 274,
    text:
      `
        Но ответ пришел сам собой, как только я увидела Мэтта на горизонте. Он активно жестикулировал руками, привлекая мое внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 275,
    text:
      `
        — Ну, здравствуй, $Имя Игрока$. Как поживаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 276,
    text:
      `
        — Хотя можешь не отвечать. Про тебя я и так все знаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 277,
    text:
      `
        Напряжение волнами прошлось по телу. Я обеспокоенно взглянула на Мэтта, пытаясь понять суть представления.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 278,
    text:
      `
        — Что тебе нужно?
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 279,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'MatteoIsSexy' }) === 1
          },
          goTo: 286
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'GoToParty' }) === 1
          },
          goTo: 287
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'GoToParty' }) === 0
          },
          goTo: 303
        }
      ],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 280,
    text:
      `
        Он достал мобильный телефон и показал часть видео, на котором я находилась под учительским столом Маттео.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 281,
    text:
      `
        Я растерянно взглянула на Мэтта, не понимая, как это могло произойти. Как он мог так поступить? 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 282,
    text:
      `
        — И что это? — я старалась унять дрожь в голосе. — Здесь не видно лица. Ты никак не докажешь мою причастность.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 283,
    text:
      `
        — Вынужден тебя расстроить, но в конце четко видно, как ты встаешь и оказываешься рядом с профессором.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 284,
    text:
      `
        — Ложь… 
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 285,
    text:
      `
        — Думаю, ты понимаешь, к чему это все ведет.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 286,
    text:
      `
        — Думал, ты прилежная ученица, но такое…
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 287,
    text:
      `
        — Думаешь, я не знаю, как ты любишь отрываться?
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 288,
    text:
      `
        «Неужели все претензии сейчас будут строиться из-за долбанного похода на долбанную вечеринку?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 289,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'DrinkAtParty' }) === 2
          },
          goTo: 290
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'DrinkAtParty' }) === 1
          },
          goTo: 299
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'DrinkAtParty' }) === 0
          },
          goTo: 303
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 290,
    text:
      `
        — Как ты прыгаешь в постель к первому встречному.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 291,
    text:
      `
        Злость закипала во мне, вспоминая то, как он со мной обошелся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 292,
    text:
      `
        Я не собиралась уповать на алкоголь, ведь ошибки надо признавать.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 293,
    text:
      `
        — Ты поступил как кусок дерьма и еще смеешь появляться передо мной?
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 294,
    text:
      `
        — Ну-ну… Я и не обещал тебе ничего. Повелась на возможность? Но все не так просто.
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 295,
    text:
      `
        Он достал мобильный телефон и показал часть видео, на котором мы лежим с ним в обнимку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 296,
    text:
      `
        Наши тела были едины, а лица горели от страсти.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 297,
    text:
      `
        Я растерянно взглянула на Мэтта, не понимая, как это могло произойти. Как он мог так поступить? 
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 298,
    text:
      `
        — Думаю, ты понимаешь, к чему это все ведет.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 299,
    text:
      `
        — Такие, как ты, строят из себя невинных, а на деле не пренебрегают веществами.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 300,
    text:
      `
        — Совсем рехнулся? Да кем ты себя возомнил?
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 301,
    text:
      `
        — Пару подложенных таблеточек и твоя жизнь будет кончена.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 302,
    text:
      `
        — Думаю, ты понимаешь, к чему это все ведет.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 303,
    text:
      `
        — Такие как ты, строят из себя невинных, а на деле не пренебрегают веществами.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 304,
    text:
      `
        — Совсем рехнулся? Да кем ты себя возомнил?
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 305,
    text:
      `
        — Пару подложенных таблеточек и твоя жизнь будет кончена.
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 306,
    text:
      `
        — Думаю, ты понимаешь, к чему это все ведет.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 307,
    text:
      `
        Мэтт прижал меня к колонне и приблизился к губам. Я ощущала его свежее дыхание, руку, что скользила по шее.
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 308,
    text:
      `
        — Я всегда получаю желаемое. И ты будешь принадлежать мне. Служить и слушаться. Иначе я превращу твою жизнь в ад.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 309,
    text:
      `
        Он не шутил. Чтобы там ни было, он придумает, расскажет, подставит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 310,
    text:
      `
        Я ощущала себя загнанным зверем, неспособным противостоять хищнику.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 311,
    text:
      `
        «По крайне мере без должного плана».
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 312,
    text:
      `
        — Молчание в знак согласия? Не сомневался в твоих интеллектуальных способностях.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 313,
    text:
      `
        — А теперь следуй за мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 314,
    text:
      `
        Он начал тянуть меня, а я будто бы застыла, не понимая, как поступить.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 315,
    text:
      `
        «Если начну противиться, не обернется ли это против меня? Но я не хочу быть его секс рабыней или того хуже…»
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 316,
    text:
      `
        «Что же мне делать?»
      `,
    buttons: [
      {
        text: 'Подчиниться',
        goTo: 317
      },
      {
        text: 'Сопротивляться',
        goTo: 361
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 317,
    text:
      `
        Я испугалась, не могла, не хотела. Тело не слушалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 318,
    text:
      `
        — Хорошая девочка, вот так…
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 319,
    text:
      `
        Мэтт привел меня в каморку, заваленную всяким хламом. Дышать становилось труднее не только из-за тесного помещения, но и нависшего напряжения.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 320,
    text:
      `
        — Раздевайся.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 321,
    text:
      `
        — Да я…
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 322,
    text:
      `
        Он смерил меня грозным взглядом, заставляя оставить гордость и выполнить требование.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 323,
    text:
      `
        Одежда нехотя оказалась на полу, обнажая меня перед парнем.
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 324,
    text:
      `
        — Доволен?
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 325,
    text:
      `
        Мэтт определенно был доволен. Он буквально упивался властью надо мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 326,
    text:
      `
        Медленно подошел, дотрагиваясь до груди, затем спустил руку к талии, легонько сжал, будто бы убеждался в реальности происходящего.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 327,
    text:
      `
        Я поймала себя на мысли, что мне это…
      `,
    buttons: [
      {
        text: 'Нравилось',
        goTo: 328,
        gift: true
      },
      {
        text: 'Было омерзительно',
        goTo: 352
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 328,
    text:
      `
        Безумие овладевало разумом.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    stats: [
      { story: EStoriesEn.AEP, value: 1, category: 'Choice', id: 'LikeMadMatt' }],
    music: require('../../../../Sounds/AEP/Ero.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 329,
    text:
      `
        «Я совсем себя не уважаю?»
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 330,
    text:
      `
        «К черту… Он так близко. Будь что будет».
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 331,
    text:
      `
        Я не показывала отвращение, напротив, по моему лицу блуждала улыбка, а голос издавал томные вздохи.
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 332,
    text:
      `
        — Вот так. Молодец. Отдайся мне…
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 333,
    text:
      `
        Мэтт, одной рукой обхватил меня за талию, другой опустил лифчик и впился губами в грудь.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 334,
    text:
      `
        Я начала таять в его руках. Моя нога обхватила его тело, соединяя нас в страстном танце похоти.
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 335,
    text:
      `
        Парень целовал мою шею, вдыхал запах, наслаждаясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 336,
    text:
      `
        — Что ты со мной делаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 337,
    text:
      `
        — Хотела задать тебе тот же вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 338,
    text:
      `
        Наши губы соприкоснулись. Несколько минут томного экстаза, полное отключение всех мыслей.
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 339,
    text:
      `
        Чувство жертвы. Чувство бедной, загнанной в угол девушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 340,
    text:
      `
        Он владел мной, шантажировал, пытался заставить ему прислуживать.
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 341,
    text:
      `
        «И мне это нравится?»
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 342,
    text:
      `
        Тело отвечало на этот немой вопрос. Так же как и растущее желание.
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 344,
    text:
      `
        Парень вдруг отстранился, посмотрел в мои горящие глаза и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 345,
    text:
      `
        — Я в тебе не ошибся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 346,
    text:
      `
        — Не представляю, к чему это может привести, но мне нравится твой подход.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    message: 'Мэтт доволен вашим покорством',
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Matt' },
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 347,
    text:
      `
        — А теперь собирайся. Мне пора на самолет. Увидимся через несколько месяцев, когда начнутся основные занятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 348,
    text:
      `
        В растерянности я стала одеваться, смотря на удаляющуюся фигуру.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 349,
    text:
      `
        «Что же я творю?»
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 350,
    text:
      `
        Выбежав из каморки, мне стало стыдно и одновременно больно.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 351,
    text:
      `
        «Он опять не довел дело до конца».
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    achievement: { story: EStoriesEn.AEP, name: 'Blackmail' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 352,
    text:
      `
        Страшно, невыносимо холодно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 353,
    text:
      `
        Всем своим видом я показывала, как неприятна ситуация, в которой я оказалась по своей глупости.
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 354,
    text:
      `
        «Мне не стоило с ним даже разговаривать!»
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 355,
    text:
      `
        Мэтт без интереса стал смотреть на меня, убрав руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 356,
    text:
      `
        — Ничего… — его ладонь нежно погладила меня по голове. — Ты покоришься.
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    message: 'Вы сохранили достоинство и не прогнулись под Мэттом',
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 357,
    text:
      `
        — А теперь собирайся. Мне пора на самолет. Увидимся через несколько месяцев, когда начнутся основные занятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 358,
    text:
      `
        В растерянности я стала одеваться, смотря на удаляющуюся фигуру.
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 359,
    text:
      `
        «Он же не отстанет так просто!»
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 360,
    text:
      `
        Выбежав из каморки, я поспешила покинуть университет.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lumber.jpg')
  },

  {
    id: 361,
    text:
      `
        — Я никуда с тобой не пойду! 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    stats: [
      { story: EStoriesEn.AEP, value: 1, category: 'Choice', id: 'RefuseMatt' }],
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 362,
    text:
      `
        Сильно отдернув руку, мне на миг показалось, что я даже поцарапала Мэтта.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 363,
    text:
      `
        — Решила по-плохому? Думаешь, я шучу про ужасы в твоей жизни?
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 364,
    text:
      `
        — Тебе никто не поверит! Едва ли моя персона может быть замешана в чем-то таком.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 365,
    text:
      `
        — Деньги зато заставят. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 366,
    text:
      `
        Он смерил меня грозным взглядом и начал что-то обдумывать.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 367,
    text:
      `
        — Мне пора на самолет, не хочу больше терять с тобой время. Решим этот вопрос через несколько месяцев, когда начнутся занятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 368,
    text:
      `
        — Я еще заставлю тебя покориться.
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    message: 'Мэтт зол на вас и не собирается так просто сдаваться',
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Person', id: 'Matt' },
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 369,
    text:
      `
        Он ушел, оставив меня стоять в полной растерянности.
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 370,
    text:
      `
        «Он же не отстанет так просто!»
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 371,
    text:
      `
        Я поспешила покинуть университет, пытаясь поскорее забыть этот кошмар.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 372,
    text:
      `
        Новый день казался безумнее предыдущего. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 373
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 373,
    text:
      `
        Я обратила внимание, что на парковке образовалось столпотворение студенток.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 374,
    text:
      `
        Подойдя чуть ближе, я увидела, не буду лукавить, достаточно привлекательного мужчину, который мило улыбался и разговаривал с девушками.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageFront: require('../../../../Images/AEP/Persons/Salvatore_Shirt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 375,
    text:
      `
        — Вы что же наш новый преподаватель?
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speaker: 'Поклонницы',
    imageFront: require('../../../../Images/AEP/Persons/Girl_S.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 376,
    text:
      `
        — Нет же, глупая, он вроде знакомый декана этого университета.
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    speaker: 'Поклонницы',
    imageFront: require('../../../../Images/AEP/Persons/Girl_S_2.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 377,
    text:
      `
        — Да врешь ты все. 
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    speaker: 'Поклонницы',
    imageFront: require('../../../../Images/AEP/Persons/Girl_S.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 378,
    text:
      `
        Неожиданно его взгляд зацепился за меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    imageFront: require('../../../../Images/AEP/Persons/Salvatore_Shirt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 379,
    text:
      `
        Но быстро потеряв интерес, вернулся к своим воздыхательницам.
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    imageFront: require('../../../../Images/AEP/Persons/Salvatore_Shirt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 380,
    text:
      `
        «Любопытно, кто он?»
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 381,
    text:
      `
        Но узнавать не хотелось. Усталой походкой я отправилась домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/AEP/Backgrounds/University.jpg')
  },

  {
    id: 382,
    text:
      `
        Наконец, наступил тот самый знаменательный день, когда начинается учеба и можно приступить к полноценным занятиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    beforeBegin: whiteFlash,
    message: '<i>Спустя два месяца…',
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 383,
    text:
      `
        Эти месяцы были наполнены тревогами и ожиданиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 384,
    text:
      `
        Ведь этот университет, словно испытывал меня каждый раз на прочность.
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 385,
    text:
      `
        «И дальше не будет легче. Будто бы меня все сильнее затягивает в этот водоворот интриг».
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 386,
    text:
      `
        «Только вот устраивает ли меня такое положение?»
      `,
    buttons: [
      {
        text: 'Вполне',
        goTo: 387
      },
      {
        text: 'Никогда не приму действительность',
        goTo: 389
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 387,
    text:
      `
        «Университет должен был стать началом новой жизни».
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 388,
    text:
      `
        Я обещала себе и хочу сдержать слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 389,
    text:
      `
        «Шантаж, эта озабоченность…»
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 390,
    text:
      `
        «Я могла оступиться, но еще не поздно свернуть с этой скользкой дорожки».
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 391,
    text:
      `
        За это время и в учебе произошли перемены.
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 392,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Effect', id: 'Karma' }) >= 4
          },
          goTo: 397
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Effect', id: 'Karma' }) >= -3
          },
          goTo: 395
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Effect', id: 'Karma' }) <= -4
          },
          goTo: 393
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 393,
    text:
      `
        «А вот с ней все далеко не гладко».
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 394,
    text:
      `
        «Хорошо, что бабушка пока этого не знает. Надо как можно дольше держать в секрете и попытаться все исправить».
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    message: 'Из-за низкой кармы, вы предпочитаете заниматься другими делами',
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 395,
    text:
      `
        «А вот с ней все довольно неплохо».
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 396,
    text:
      `
        «Бабушку, правда, удовлетворят только высокие результаты, но хоть что-то. Может, будет возможность повысить успеваемость?»
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    message: 'Из-за средней кармы, вы успеваете уделять учебе достаточно времени',
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 397,
    text:
      `
        «А вот с ней все отлично».
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 398,
    text:
      `
        «Бабушка даже не может докопаться на меня. Какова красота!»
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    message: 'Из-за высокой кармы, вы уделяете учебе большую часть времени',
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 399,
    text:
      `
        Я встала с кровати и сладко потянулась, ведь проснулась вовремя.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 400,
    text:
      `
        «Настроение надеть тот же наряд, что в тот злополучный день».
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 401,
    text:
      `
        Закончив дела в комнате, я спустилась на кухню.
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 402,
    text:
      `
        Бабушка сидела за столом, читая газету и попивая кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 403,
    text:
      `
        — Доброе утро, $Имя Игрока$! Как спалось?
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 404,
    text:
      `
        — Неплохо. Что-то случилось? Ты буквально светишься от счастья.
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 405,
    text:
      `
        — Я встретила одного интересного мужчину в кофейне.
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 406,
    text:
      `
        — Интеллигентный, умный. Кто бы мог подумать, что такие еще остались в этом проклятом мире.
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 407,
    text:
      `
        — И что же? — я потянулась за йогуртом. — Чем закончилось ваше общение?
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 408,
    text:
      `
        Бабушка поставила кружку и томно вздохнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 409,
    text:
      `
        — А чем оно могло закончиться? Каждый разошелся по своим делам.
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 410,
    text:
      `
        Возможно, она лукавила. Но допытываться мне совсем не хотелось. Сейчас между нами было негласное перемирие. Пусть так и продолжается.
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 411,
    text:
      `
        Сев за стол, я наслаждалась утренней рутиной. Как вдруг на телефон пришло уведомление.
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 412,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition:
      [
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Item', id: 'Taxi_Card' }) === 1
          },
          goTo: 413
        },
        {
          condition: () => {
            return statsManager.get({ story: EStoriesEn.AEP, category: 'Item', id: 'Taxi_Card' }) === 0
          },
          goTo: 424
        }
      ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 413,
    text:
      `
        Пришло смс от Мигеля. Он интересовался, как я себя чувствую и пожелал удачи в учебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 414,
    text:
      `
        Мы изредка переписывались, парень не переставал пытаться загладить вину.
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 415,
    text:
      `
        Он казался тихой гаванью в этом бушующем водовороте. И не сказать, что его общение доставляло дискомфорт.
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 416,
    text:
      `
        «Он хочет встретить меня после занятий».
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 417,
    text:
      `
        «Хочу ли я продолжать общение? Позволю ему приехать?»
      `,
    buttons: [
      {
        text: 'Согласиться',
        goTo: 418
      },
      {
        text: 'Отказаться',
        goTo: 421
      }
    ],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 418,
    text:
      `
        «Он действительно хороший парень. Пусть наша связь и началась так резко, но может быть этой мой шанс закончить кошмар?»
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'MeetMiguel' }],
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 419,
    text:
      `
        Я отправила свое согласие и получила в ответ несколько сердечек.
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 420,
    text:
      `
        «Милый он все же…»
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Miguel' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 421,
    text:
      `
        «Вряд ли он отстанет после одного отказа. Да и не было настроения с ним видеться».
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 422,
    text:
      `
        Я отправила сообщение с отказом, на что Мигель грустно отреагировал.
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 423,
    text:
      `
        «Не хочу давать ему ложных надежд».
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Person', id: 'Miguel' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 424,
    text:
      `
        Пришла рассылка от назойливой рекламы.
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 425,
    text:
      `
        «Я же вроде отказывалась…»
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 426,
    text:
      `
        Предлагали купить по очень хорошей скидке ванные принадлежности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 427,
    text:
      `
        Я вздрогнула, услышав гудок машины рядом с нашим домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    simple: require('../../../../Sounds/AEP/Car_Alarm.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 428,
    text:
      `
        «Джон уже приехал? Отлично!»
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 429,
    text:
      `
        — Пусть так больше не делает. Какой стыд! Что подумают соседи?
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 430,
    text:
      `
        — С каких пор тебя волнует чужое мнение?
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 431,
    text:
      `
        — Дорогая моя, $Имя Игрока$, мы все зависим от чужого мнения. Говори, что хочешь, но это так.
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 432,
    text:
      `
        Я кивнула, не желая вступать в бессмысленную дискуссию.
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 433,
    text:
      `
        — Хорошего дня!
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 434,
    text:
      `
        Бабушка кивнула и я поспешила покинуть дом.
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 435,
    text:
      `
        — Ну наконец-то. Просил же тебя не задерживаться!
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 436,
    text:
      `
        — Не ворчи. Всего две минуты. Мы же успеваем?
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 437,
    text:
      `
        — Ты знаешь такое понять как: приехать заранее?
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 438,
    text:
      `
        Я улыбнулась и мы двинулись в путь.
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 439,
    text:
      `
        С Джоном мы познакомились месяц назад в библиотеке. Не знаю, как так вышло, но довольно быстро нашли общий язык и стали дружить.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 440,
    text:
      `
        Он волнительный, вечно параноит без повода и без. Однако при этом искренен и честен со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 441,
    text:
      `
        Мне хочется верить в эти отношения и стараться продолжать поддерживать их.
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 442,
    text:
      `
        — Волнуешься?
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 443,
    text:
      `
        — Я волнуюсь только за тебя. Твоя способность попадать в неприятности может ой как дорого стоить.
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: 0, category: 'Person', id: 'John' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 444,
    text:
      `
        — Не начинай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 445,
    text:
      `
        — Слышала, кстати, про поездку потока? Руководство хочет сплотить студентов на природе.
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 446,
    text:
      `
        — Нет. А это обязательно?
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 447,
    text:
      `
        — По желанию, разумеется. Я сам сомневаюсь, но скорее всего отец заставит поехать.
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    speaker: 'Джон',
    imageFront: require('../../../../Images/AEP/Persons/John.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 448,
    text:
      `
        Мы говорили о всяких мелочах, пока не приехали до университета.
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/John_Car.jpg')
  },

  {
    id: 449,
    text:
      `
        Сев за парту, я ощутила волнение, ведь знала, что ничего хорошего меня здесь ждать не будет.
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 450,
    text:
      `
        Студенты шептались, перебирая тетради и учебники.
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 451,
    text:
      `
        Когда занятие должно было начаться, в лекционный зал зашел вовсе не профессор, а некий мужчина.
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 452,
    text:
      `
        — Кто не знает, я декан вашего университета.
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/AEP/Persons/Dekan.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 453,
    text:
      `
        — И я не хотел бы опускаться до такого… Это просто уму непостижимо!
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    speaker: 'Декан',
    imageFront: require('../../../../Images/AEP/Persons/Dekan.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 454,
    text:
      `
        — Вынужден объявить, что в нашем элитном университете есть студент, который занимается проституцией…
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    speaker: 'Декан',
    imageFront: require('../../../../Images/AEP/Persons/Dekan.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 455,
    text:
      `
        — Личность не установлена, но мы делаем все возможное, чтобы найти и исключить.
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    speaker: 'Декан',
    imageFront: require('../../../../Images/AEP/Persons/Dekan.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 456,
    text:
      `
        — Будут приняты все меры. Если вы знаете о ком идет речь, мы поощрим за любые сведения.
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    speaker: 'Декан',
    imageFront: require('../../../../Images/AEP/Persons/Dekan.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 457,
    text:
      `
        — А теперь приступайте к занятиям! 
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    speaker: 'Декан',
    imageFront: require('../../../../Images/AEP/Persons/Dekan.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 458,
    text:
      `
        В горле застрял ком. Кто мог на такое пойти? 
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 459,
    text:
      `
        «Главное, что я к этому не причастна».
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero_Part_2') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 460,
    text:
      `
        Но тревога так и не покидала меня до самого конца пары.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('AEP', 'Глава 1', 'Часть 3', '0')
        }
      }],
    achievement: { story: EStoriesEn.AEP, name: 'Chapter02Part01Completed' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  }
])
