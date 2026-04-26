import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { askedAmount, choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.F, chapterName: 'Спешл', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Лучи солнца, падая за горизонт, нежно согревали кожу. По морю бежали лёгкие волны, солёный ветер щекотал нос.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    effect: 'Желтое сияние',
    music: require('../../../../Media/Audio/F/Music/Theme_Romantic.mp3'),
    ambient: require('../../../../Media/Audio/F/Ambients/Waves.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 1,
    text:
      `
        Мы сидели в обнимку.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 2,
    text:
      `
        И ничего больше не существовало в эту секунду. Лишь я и она.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 3,
    text:
      `
        Моя Ирина.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 4,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/F/Cutscenes/Hero_Ira_Beach.mp4'), goTo: 5 },
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 5,
    text:
      `
        — Не замёрзла? Хочешь, вернёмся в отель?
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 6,
    text:
      `
        Ира только сильнее прижалась, укладывая голову мне на плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 7,
    text:
      `
        Её причёску трепал южный ветер, раскидывая пряди в разные стороны: волосы лезли в глаза, пару раз умудрились хлестнуть меня по лицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 8,
    text:
      `
        В сказках ведь их не бывает? Маленьких неудобств. Лишь тотальное разрушение или вышколенный абсолют. Либо-либо. Без мелких пятен на полотне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 9,
    text:
      `
        Вот и я не обращал внимания ни на что, кроме ощущения тихого счастья, наполняющего изнутри. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 10,
    text:
      `
        — Давай ещё немного посидим? Пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit_Smile.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 11,
    text:
      `
        Прошло полгода с тех пор, как мы стали парой. Всё началось молниеносно, стремительно.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 12,
    text:
      `
        Чувства вспыхнули как по щелчку, мы добровольно утонули друг в друге.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 13,
    text:
      `
        И именно это стало отправной точкой в принятии осознания, что Ира — та самая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 14,
    text:
      `
        Я ведь держал все под контролем, не позволял терять голову. С ней же вышло иначе.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 15,
    text:
      `
        В её компании хотелось забыться. Сбежать от рутины. Наслаждаться моментом... 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 16,
    text:
      `
        Без планов и мыслей о возможных последствиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 17,
    text:
      `
        — Иди сюда…
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers_Smile.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 18,
    text:
      `
        Я чмокнул её в макушку, не отрывая взгляда от горизонта, который сливал море и небо в единое. Также как в единое слились мы с Ириной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 19,
    text:
      `
        «Никакой рутины. Никаких обязательств. Только тепло и нежность».
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 20,
    text:
      `
        Я был доволен собой. У меня получилось накопить деньги и привести возлюбленную на отдых. Это было таким незначительным, но всё-таки достижением.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 21,
    text:
      `
        Вышло спонтанно и оттого особенно увлекательно.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 22,
    text:
      `
        — Сейчас особенно ощущаю, как я…
      `,
    buttons: [
      {
        text: 'Спокоен',
        goTo: 23
      },
      {
        text: 'Люблю тебя',
        goTo: 37
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 23,
    text:
      `
        — Наконец, никакой суеты, нет вечной погони в поисках решений каких-то проблем. Лишь ты и я. Далеко-далеко…
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 24,
    text:
      `
        Взгляд Ирины, полный нежности, встретился с моим, она мягко кивнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 25,
    text:
      `
        — Я чувствую то же самое. Но тебе не кажется, что наши отношения развиваются слишком стремительно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 26,
    text:
      `
        — Это плохо? Нам же хорошо друг с другом.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 27,
    text:
      `
        — Безусловно.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 28,
    text:
      `
        Она слегка отстранилась, переводя взгляд на бескрайнее море, и отстранённо продолжила:
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 29,
    text:
      `
        — Просто боюсь наделать поспешных решений.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 30,
    text:
      `
        — Мы ещё не узнали друг друга с разных сторон, и я беспокоюсь, как бы это не аукнулось в будущем.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 31,
    text:
      `
        — Милая, я не думаю, что подобные мысли должны становиться помехой искренним чувствам.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 32,
    text:
      `
        — Разумеется, переживания не беспочвенны, и я понимаю, почему тебя это беспокоит, но если всегда думать о плохом… 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 33,
    text:
      `
        — Проще говоря, всему своё время.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers_Smile.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 34,
    text:
      `
        — Ты как всегда прав... Не бери в голову, просто мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit_Smile.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 35,
    text:
      `
        Крайне редко можно верно интерпретировать мысли в голове у девушки до тех пор, пока она сама не объяснит прямым текстом. И даже тогда не факт, что ты сможешь понять её правильно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 36,
    text:
      `
        Возможно, это действительно не имело смысла. Или же я упустил нечто важное?
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 37,
    text:
      `
        — Меня переполняют чувства. Хочется сжать тебя крепко-крепко и никогда не отпускать.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers_Smile.png'),
    stats: [
      { story: EStoriesEn.F, value: 1, category: 'Choice', id: 'LoveYou' }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 38,
    text:
      `
        Ирина отвернулась, скрывая заалевшие щёки.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 39,
    text:
      `
        — Ох и умеешь же ты… как скажешь…
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit_Confused.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 40,
    text:
      `
        От души рассмеявшись, я аккуратно уложил девушку на песок, нависнув на вытянутых руках сверху.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 41,
    text:
      `
        — Никуда ты от меня не денешься… не отвертишься…
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers_Smile.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 42,
    text:
      `
        Чувственный, неспешный поцелуй дразнил, побуждая каждую клеточку моего тела напрячься. От невыносимого желания обладать.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 43,
    text:
      `
        Я ощущал, как меня переполняют силы и желание свернуть горы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 44,
    text:
      `
        Но эта функция работала в полную силу лишь рядом с ней.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 45,
    text:
      `
        — Кость, ну, волосы же все в песке будут!
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit_Confused.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 46,
    text:
      `
        — Не волнуйся, я составлю тебе компанию в душе. Отмоемся…
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers_Smile.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 47,
    text:
      `
        Секунда, минута. Время остановилось, давая возможность насладиться вниманием друг друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 48,
    text:
      `
        Пляж был пуст. Шум волн и редкие крики чаек утонули, стали лишь фоном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 49,
    text:
      `
        Я слышал её сбившееся дыхание. И собственный ускоренный пульс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 50,
    text:
      `
        Рука забралась под лиф, Ирина смущённо застыла, накрыв мои пальцы своими. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 51,
    text:
      `
        — Продолжим в номере? Боюсь, что кто-то увидит…
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit_Confused.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 52,
    text:
      `
        Я улыбнулся, спокойно кивнув. Помог Ире сесть, стряхнув со спины и волос песчинки.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 53,
    text:
      `
        С лица девушки не сходило счастливое выражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 54,
    text:
      `
        — Вот бы этот миг длился вечно.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    message: 'Ирина никогда не забудет этот волнительный момент.',
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Irina' }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 55,
    text:
      `
        Вскоре стало совсем прохладно. Я поднялся на ноги, лениво потягиваясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 56,
    text:
      `
        Ира неожиданно схватила меня за руку и без слов вложила в неё ракушку.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 57,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 58, image: require('../../../../Media/Images/F/Objects/Shell.png'), buttonText: 'Рассмотреть' },
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 58,
    text:
      `
        Раковина бело-оранжевого цвета легла в ладонь, слегка царапая кожу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 59,
    text:
      `
        — Мама говорила, если приложить её к уху, то можно услышать шум моря.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 60,
    text:
      `
        Я по-доброму рассмеялся, умиляясь очаровательной наивности.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 61,
    text:
      `
        — Ириш, это не море. Научно доказано: мы слышим отфильтрованный шум окружающего мира, который резонирует раковина.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 62,
    text:
      `
        — А наш мозг интерпретирует звуки как знакомый шум моря. Здесь нет никакой магии, увы.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 63,
    text:
      `
        Девушка немного поникла.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 64,
    text:
      `
        — Да, я слышала об этом… Но ведь необязательно всему искать научное объяснение!  К тому же, до этой поездки я никогда не была на море. Дай подурачиться!
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 65,
    text:
      `
        Она забрала у меня ракушку и приложила к своему уху, блаженно опустив веки.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    effect: 'Желтое сияние',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 66,
    text:
      `
        — Вы все ошибаетесь! Это море шумит, точно тебе говорю… 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 67,
    text:
      `
        — … мужик.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Glitch.mp3'),
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Swimsuit.png'),
    effect: 'VHS',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 68,
    text:
      `
        — Мужик…
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Glitch.mp3'),
    speakerR: 'Неизвестный',
    effect: 'VHS',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 69,
    text:
      `
        Голос искажался, становился грубее и ниже. Я было потянулся к Ирине: в груди закопошилось неприятное чувство тревоги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 70,
    text:
      `
        Ощущение, что если не поймаю её сейчас, то она исчезнет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 71,
    text:
      `
        Я подался вперёд с большим запалом, но натолкнулся на странный барьер, мешающий приблизиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 72,
    text:
      `
        — А чистого платка у меня с собой нет…
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Glitch.mp3'),
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    darkSilhouette: true,
    effect: 'VHS',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 73,
    text:
      `
        — Да что происходит… Мне нужно к жене. Я должен её обнять.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 74,
    text:
      `
        Жену? А разве тогда мы были женаты?
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 75,
    text:
      `
        Сквозь пелену в пространстве начали проступать очертания реальности, размазывая идеальную картинку.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 76,
    text:
      `
        — Нет… Нет! 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Trousers.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Sunset_Sea.jpg')
  },

  {
    id: 77,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 78 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 78,
    text:
      `
        — ИРИНА!
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Dramatic.mp3'),
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Shock.png'),
    effect: 'Белая вспышка',
    ambient: require('../../../../Media/Audio/F/Ambients/BusAmbient.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 79,
    text:
      `
        Я схватился за сердце, жадно глотая воздух. Возвращение в реальность было пугающе резким и как будто неправильным.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Hard_Man_Breath.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 80,
    text:
      `
        «Всё ещё на побережье. Всё еще с ней…»
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 81,
    text:
      `
        Автобус, не торопясь, следовал по маршруту. А я пытался вспомнить, как оказался здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 82,
    text:
      `
        «Ничего. Всё как в тумане. Разве я не у церкви был?»
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 83,
    text:
      `
        Отголоски сознания поймали церковное звучание и образ Божьей обители.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    simple: require('../../../../Media/Audio/F/Sounds/ChurchBells.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 84,
    text:
      `
        «Что было потом? Почему я здесь? Куда собирался ехать?»
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Shock.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 85,
    text:
      `
        Я глубоко вздохнул. Мои размышления были прерваны удушающим запахом алкоголя.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 86,
    text:
      `
        Повернув голову вправо, увидел своего попутчика.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 87,
    text:
      `
        — Наконец-то обратил внимание. Я говорю, платка чистого нет, извиняй, мужик.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 88,
    text:
      `
        До меня не сразу дошло, о чём речь. Лишь когда коснулся дрожащей ладонью своей щеки, то ощутил влагу.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 89,
    text:
      `
        — И не надо…
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 90,
    text:
      `
        На вид собеседник мало чем отличался от бездомного. Желания тратить на него своё время не было никакого.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 91,
    text:
      `
        «Других забот по горло».
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 92,
    text:
      `
        — Понимаю. Знаешь, я столько живу на свете… Даже Брежневу руку жал!
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 93,
    text:
      `
        — Бывший член коммунистической партии, между прочим!
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 94,
    text:
      `
        — И сразу могу определить… мужик, сердце тебе разбили. Вот как пить дать.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 95,
    text:
      `
        После этих слов он демонстративно достал чекушку и отхлебнул содержимое.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Slurp.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 96,
    text:
      `
        «Начинается… За что мне всё это?»
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 97,
    text:
      `
        «И как себя вести?»
      `,
    buttons: [
      {
        text: 'Поговорить',
        goTo: 98
      },
      {
        text: 'Отстраниться',
        goTo: 152
      },
      {
        text: 'Проигнорировать',
        goTo: 170
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 98,
    text:
      `
        «Вряд ли станет хуже».
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 99,
    text:
      `
        — С чего Вы взяли?
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 100,
    text:
      `
        Собеседник вмиг оживился. Он развалился на сиденье поудобнее и запричитал.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 101,
    text:
      `
        — Потому что причин, почему мужики плачут, всегда лишь две: война и женщины.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 102,
    text:
      `
        — Я прошёл все круги ада и, учитывая текущую обстановку, едва ли могу отнести тебя к военнослужащему.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 103,
    text:
      `
        — Ну а в сердечных делах… ты, похоже, свой фронт просрал.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 104,
    text:
      `
        Я устало поморщился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 105,
    text:
      `
        — Это вам Брежнев с того света шепнул?
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 106,
    text:
      `
        Пьяница не обратил внимания на язвительные слова. Он погрузился в мысли и отчаянно желал донести свою точку зрения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 107,
    text:
      `
        — Вот я с Ольгой почти тридцать лет прожил. Какая была женщина, эх! Нигде такую не встретить…
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 108,
    text:
      `
        — Да и перевелись они, настоящие женщины. Искренние… Сейчас куда ни глянь — что бабам надо? Сумочки, ноготочки. Уходят с первыми сложностями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 109,
    text:
      `
        — Моя Оленька за двоих пахала! 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 110,
    text:
      `
        — И куда подевалась Ваша ненаглядная?
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 111,
    text:
      `
        — Да никуда не девалась, это я бестолковый. Пропил своё счастье, сбежала она от меня к соседу нашему, Витьке. Офицер, как-никак!
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 112,
    text:
      `
        Последнюю фразу он выплюнул с брезгливой горечью. Вновь приложился к горлышку, заливая боль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Slurp.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 113,
    text:
      `
        — Жизнь скатилась на дно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 114,
    text:
      `
        Отчего-то эти слова спровоцировали всплеск неподконтрольной ярости. На эмоциях выпалил:
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 115,
    text:
      `
        — Вы не знаете, что такое дно! И даже представить себе не можете, с чем я столкнулся!
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 116,
    text:
      `
        — Жизнь стёрлась подчистую. Меня больше нет...
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 117,
    text:
      `
        Горло сдавило, но слова продолжали литься, обгоняя мысли:
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 118,
    text:
      `
        — Жена делит постель с незнакомцем. Смотрит на меня, как на бродягу, которого впору только жалеть.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 119,
    text:
      `
        Пьяница вдруг повернул ко мне голову и демонстративно закатил глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 120,
    text:
      `
        — Молодой и бестолковый.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 121,
    text:
      `
        — И я совсем не удивлён! Что ты сделал, чтобы удержать ее?
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 122,
    text:
      `
        «Что я сделал…»
      `,
    buttons: [
      {
        text: 'Возразить',
        goTo: 123
      },
      {
        text: 'Согласиться',
        goTo: 137
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 123,
    text:
      `
        «Да уж поболее тебя в этой жизни!»
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 124,
    text:
      `
        — Любил, заботился и отдавал себя семье!
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 125,
    text:
      `
        — Мы вместе воспитывали прекрасного сына, счастливыми были.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 126,
    text:
      `
        — Хоть мне-то не заливай, счастьем от тебя и не пахнет. Выглядишь как жалкий лгун. У таких, как ты, обычно всегда один финал.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 127,
    text:
      `
        — Что это значит? Какой финал?! 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 128,
    text:
      `
        — Одиночество.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 129,
    text:
      `
        Я вздрогнул. Хоть умом понимал, что бред пьяного неудачника — последнее, что стоит воспринимать всерьёз, но никак не мог отделаться от ощущения…
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 130,
    text:
      `
        «Он может быть… прав?»
      `,
    buttons: [
      {
        text: '',
        goTo: 1103
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Shock.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 1103,
    text:
      `
        Слова ядом вливались в уши, отравляя меня изнутри. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 131,
    text:
      `
        С другой стороны, где он, а где я? 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 132,
    text:
      `
        Ведь невзирая на сложности, я всегда жаждал быть рядом. И был готов бороться за счастье до последнего вздоха.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 133,
    text:
      `
        Взяв себя в руки, я уверенно заявил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 134,
    text:
      `
        — Ещё не все потеряно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 135,
    text:
      `
        — Я буду бороться.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    message: 'Обстоятельства продолжают загонять в угол, но ты отчаянно сопротивляешься им. ',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 136,
    text:
      `
        Собеседник хлопнул в ладоши и довольно кивнул, завершая сие представление.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Clap.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 137,
    text:
      `
        «Кажется, у меня поехала крыша, раз я не хочу возражать».
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 138,
    text:
      `
        — Наши поступки определяют жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 139,
    text:
      `
        — А я слишком устал, чтобы пытаться как-то разрулить всё это.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 140,
    text:
      `
        Рука бродяги сочувственно сжала моё плечо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 141,
    text:
      `
        — Таков удел неудачников.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 142,
    text:
      `
        — Я встречал подобных тебе уж тыщу раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 143,
    text:
      `
        — Эти жалкие потуги, когда люди бьют себя в грудь и вопят: мы изменим судьбу!
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 144,
    text:
      `
        — Не измените.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 145,
    text:
      `
        — Да…
      `,
    buttons: [
      {
        text: '',
        goTo: 1300
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 1300,
    text:
      `
        Принять собственную беспомощность оказалось на удивление просто. Суровая реальность, что с неё взять?
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 146,
    text:
      `
        — И я в ней просто никто. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    message: 'Не каждому дано быть героем в собственном фильме. Но массовка тоже важна.',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: -1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 147,
    text:
      `
        — Но ты всё равно интересный.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 148,
    text:
      `
        Мужик икнул и тоскливо поморщился: 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Hic.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 149,
    text:
      `
        — Жаль только, пойло закончилось. Без этой дряни я сам не свой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 150,
    text:
      `
        — Так бы рассказал, как мы с Машкой моей ездили в Грузию…
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 151,
    text:
      `
        «Машкой? Последние мозги уже пропил, старик…»
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    achievement: { story: EStoriesEn.F, name: 'Soulmate' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 152,
    text:
      `
        Я демонстративно придвинулся ближе к окну, не желая контактировать с пьяницей.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 153,
    text:
      `
        Тот, по всей видимости, не особо расстроился и продолжил болтать сам с собой.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 154,
    text:
      `
        Слушать его сумасшедшие бредни быстро осточертело. Мысли вернулись ко сну.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 155,
    text:
      `
        «Почему мне приснилось именно это? Наша первая совместная поездка…»
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 156,
    text:
      `
        Проделки коварной судьбы? Расплата за отношение к её чувствам?
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 157,
    text:
      `
        «Не только её. Я не замечал ничего вокруг».
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 158,
    text:
      `
        «Стоит ли верить в судьбу? Или пора повзрослеть и стать выше этого?»
      `,
    buttons: [
      {
        text: 'Верю',
        goTo: 159
      },
      {
        text: 'Нет',
        goTo: 164
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 159,
    text:
      `
        «Разумеется».
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 160,
    text:
      `
        А что ещё мне делать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 161,
    text:
      `
        Та листовка с ярмаркой, шатёр, бабка...
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 162,
    text:
      `
        Всё это — звенья одного механизма, которые в итоге привели меня туда, где я есть.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 163,
    text:
      `
        «Я не мог поступить иначе».
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    message: 'Каков толк барахтаться посреди бескрайнего океана? Сдавайся. ',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: -1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 164,
    text:
      `
        «Вот еще!»
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 165,
    text:
      `
        Бредовые события — не судьба, а следствие невнимательности, расхлябанности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 166,
    text:
      `
        Необходимо собраться, чтобы решить, как действовать дальше. Я просто обязан покинуть этот беспросветный кошмар. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 167,
    text:
      `
        Не отдам свою жизнь просто так. Ни за что.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 168,
    text:
      `
        «Я обязательно выберусь».
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    message: 'Обстоятельства продолжают загонять в угол, но ты отчаянно сопротивляешься им.',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 169,
    text:
      `
        Размышления прервал пьяница, неожиданно ткнувший пальцем в моё плечо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 170,
    text:
      `
        «Господи, отцепись ты уже от меня. Я не готов терпеть ещё и это...»
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 171,
    text:
      `
        Бездомный сидел, обсуждая что-то сам с собой настолько увлечённо, что я против воли усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 172,
    text:
      `
        — Машка моя, чертовка такая, тоже сердце разбила.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 173,
    text:
      `
        — Я ради неё на войну пошёл, чтоб потом не нуждались ни в чём. Калекой вернулся. А ей калека-то не нужен оказался, к здоровенькому умыкнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 174,
    text:
      `
        — Не устраивало её, видите ли, постельное дело со мной. Не активный я. Как ж тут активным быть, когда бедро прострелили и половина ноги не рабочая!
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 175,
    text:
      `
        — Смех и грех! 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 176,
    text:
      `
        Я жестом прервал говорящего. Меня переполняли эмоции.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 177,
    text:
      `
        «Всё, пора заканчивать этот цирк!»
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 178,
    text:
      `
        — Вы не знаете, что такое дно! И даже представить себе не можете, с чем я столкнулся!
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 179,
    text:
      `
        — Жизнь стёрлась подчистую. Меня больше нет…
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 180,
    text:
      `
        Горло сдавило, но слова продолжали литься, обгоняя мысли:
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 181,
    text:
      `
        — Жена делит постель с незнакомцем. Смотрит на меня, как на бродягу, которого впору только жалеть.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 182,
    text:
      `
        Пьяница вдруг повернул ко мне голову и демонстративно закатил глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 183,
    text:
      `
        — Молодой и бестолковый.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 184,
    text:
      `
        — И я совсем не удивлён! Что ты сделал, чтобы удержать ее?
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 185,
    text:
      `
        «Что я сделал…»
      `,
    buttons: [
      {
        text: 'Возразить',
        goTo: 186
      },
      {
        text: 'Согласиться',
        goTo: 201
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 186,
    text:
      `
        «Да уж поболее тебя в этой жизни!»
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 187,
    text:
      `
        — Любил, заботился и отдавал себя семье!
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 188,
    text:
      `
        — Мы вместе воспитывали прекрасного сына, счастливыми были.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 189,
    text:
      `
        — Хоть мне-то не заливай, счастьем от тебя и не пахнет. Выглядишь как жалкий лгун. У таких, как ты, обычно всегда один финал.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 190,
    text:
      `
        — Что это значит? Какой финал?! 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 191,
    text:
      `
        — Одиночество.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 192,
    text:
      `
        Я вздрогнул. Хоть умом понимал, что бред пьяного неудачника — последнее, что стоит воспринимать всерьёз, но никак не мог отделаться от ощущения…
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 193,
    text:
      `
        «Он может быть… прав?»
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Shock.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 194,
    text:
      `
        Слова ядом вливались в уши, отравляя меня изнутри. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 195,
    text:
      `
        С другой стороны, где он, а где я? 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 196,
    text:
      `
        Ведь невзирая на сложности, я всегда жаждал быть рядом. И был готов бороться за счастье до последнего вздоха.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 197,
    text:
      `
        Взяв себя в руки, я уверенно заявил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 198,
    text:
      `
        — Ещё не все потеряно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 199,
    text:
      `
        — Я буду бороться.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    message: 'Обстоятельства продолжают загонять в угол, но ты отчаянно сопротивляешься им. ',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 200,
    text:
      `
        Собеседник хлопнул в ладоши и довольно кивнул, завершая сие представление.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Clap.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 201,
    text:
      `
        «Кажется, у меня поехала крыша, раз я не хочу возражать».
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 202,
    text:
      `
        — Наши поступки определяют жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 203,
    text:
      `
        — А я слишком устал, чтобы пытаться как-то разрулить всё это.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 204,
    text:
      `
        Рука бродяги сочувственно сжала моё плечо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 205,
    text:
      `
        — Таков удел неудачников.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 206,
    text:
      `
        — Я встречал подобных тебе уж тыщу раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 207,
    text:
      `
        — Эти жалкие потуги, когда люди бьют себя в грудь и вопят: мы изменим судьбу!
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 208,
    text:
      `
        — Не измените.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 209,
    text:
      `
        — Да…
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 210,
    text:
      `
        Принять собственную беспомощность оказалось на удивление просто. Суровая реальность, что с неё взять?
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 211,
    text:
      `
        — И я в ней просто никто. 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    message: 'Не каждому дано быть героем в собственном фильме. Но массовка тоже важна.',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: -1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 212,
    text:
      `
        — Но ты всё равно интересный.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 213,
    text:
      `
        Мужик икнул и тоскливо поморщился: 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 214,
    text:
      `
        — Жаль только, пойло закончилось. Без этой дряни я сам не свой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 215,
    text:
      `
        — Так бы рассказал, как мы с Ольгой моей ездили в Грузию…
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 216,
    text:
      `
        «Ольгой? Последние мозги уже пропил, старик…»
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    achievement: { story: EStoriesEn.F, name: 'Soulmate' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 217,
    text:
      `
        — В общем, что хочу сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 218,
    text:
      `
        — Беги ты от этого всего. Уходи и больше не возвращайся.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 219,
    text:
      `
        — Не получается залечить разбитое сердце, так обратись к новому!
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 220,
    text:
      `
        Автобус остановился, чуть буксуя из-за наледи и сугробов у остановки.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    simple: require('../../../../Media/Audio/F/Sounds/BusStops.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 221,
    text:
      `
        — Бывай, мужик. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 222,
    text:
      `
        И бездомный покинул транспорт, освобождая меня от своего удушливого амбре, давая тем самым возможность вдохнуть полной грудью.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 223,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 224 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 224,
    text:
      `
        Я не имел представления, сколько прошло времени. Панорама города за окном слилась в сплошную полосу, лишь изредка разбавляемую мерцанием встречных фар.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 225,
    text:
      `
        Транспорт двигался, а я оставался на месте. Скованный дикими обстоятельствами и невыносимой печалью.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 226,
    text:
      `
        «Боже, почему это случилось?»
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 227,
    text:
      `
        «Неужели ничего нельзя сделать?»
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 228,
    text:
      `
        — Не получается залечить разбитое сердце, так обратись к новому!
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speakerR: 'Пьяница',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Homeless.png'),
    ghostSilhouette: true,
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 229,
    text:
      `
        «Как же это… Он намекнул, что я должен оставить семью и двигаться дальше?»
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 230,
    text:
      `
        «Разве я могу… спустя столько лет?»
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 231,
    text:
      `
        И тут, как по заказу, в памяти всплыли недавние события: счастливая улыбка жены, нежные глаза незнакомца, обнимающий её силуэт.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 232,
    text:
      `
        Схватившись за голову, я сжал волосы на затылке, отчаянно размышляя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 233,
    text:
      `
        «От телефона толку ноль. Но вдруг есть кто-то, кто меня не забыл?»
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 234,
    text:
      `
        «Я должен рискнуть, должен попробовать вернуться в…»
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 235,
    text:
      `
        Слишком очевидная мысль.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 236,
    text:
      `
        «Шатер!»
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 237,
    text:
      `
        — Ступай себе с миром. Порадуй дитя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    ghostSilhouette: true,
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 238,
    text:
      `
        — Ещё заплатишь…
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 239,
    text:
      `
        «Чертова старуха! Это точно она что-то намутила! Понять бы ещё, как всё исправить…»
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Angry.png'),
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 240,
    text:
      `
        Я вновь взял в руки шкатулку, со злостью сжимая предмет уставшими пальцами. Вдавливал ногти в дерево, отчаянно желая раскрошить её в щепки.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 241,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 1102
      }],
    OKMessage: { goTo: 242, image: require('../../../../Media/Images/F/Items/Closed_Box.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 1102,
    text:
      `
         Внимательно изучив всё от замочка до аккуратной резьбы, я так ничего примечательного и не нашёл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 242,
    text:
      `
        «Просто побрякушка. Всё изменилось после того, как я её открыл? Но она ведь больше не светится…»
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 243,
    text:
      `
        Автобус остановился. Из кабины вышел уставший водитель.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 244,
    text:
      `
        Окинув взглядом салон, он вздохнул и нехотя подошёл ко мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 245,
    text:
      `
        — Смена закончилась. Я всё понимаю, не беспокоил, маршрут не очень популярный. Видимо, Вам это было нужно.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speakerR: 'Водитель',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Bus_Driver.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 246,
    text:
      `
        — Но настала пора покинуть транспорт.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speakerR: 'Водитель',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Bus_Driver.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 247,
    text:
      `
        Я с благодарностью улыбнулся водителю и, вежливо попрощавшись, вышел из тёплого салона на зимнюю улицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bus_Inside_Night.jpg')
  },

  {
    id: 248,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 249 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 249,
    text:
      `
        Холодный воздух отрезвил голову: медленно, по кусочкам возвращая сердцу покой.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Daily.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 250,
    text:
      `
        Водитель выключил свет в автобусе и, заглушив транспорт, покинул его. Он подошёл ко мне, на ходу вытаскивая сигарету из белой пачки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 251,
    text:
      `
        — Будете?
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speakerR: 'Водитель',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Bus_Driver.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 252,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Effect', id: 'PersonalGrowth' }) < 0,
        goTo: 254
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Effect', id: 'PersonalGrowth' }) >= 0,
        goTo: 258
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 253,
    text:
      `
        — Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 254,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 253, image: require('../../../../Media/Images/F/Objects/Cigarettes.png'), buttonText: 'Взять' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 255,
    text:
      `
        Никотин забил лёгкие, заполняя душевную пустоту. Тело обмякло, расслабилось. Мысли замедлились, стали фоном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 256,
    text:
      `
        Я задрал голову, вглядываясь в тёмное небо. В бледные звёзды, перемигивающиеся на мрачном полотне.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Inhale.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 257,
    text:
      `
        — Спасибо, но я не курю.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 258,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 257, image: require('../../../../Media/Images/F/Objects/Cigarettes.png'), buttonText: 'Отказаться' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 259,
    text:
      `
        Водитель кивнул и, чиркнув зажигалкой, медленно затянулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Lighter.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 260,
    text:
      `
        Я задрал голову, вглядываясь в тёмное небо. В бледные звёзды, перемигивающиеся на мрачном полотне.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 261,
    text:
      `
        — Красиво, да? Обещал дочке сегодня сходить в обсерваторию, посмотреть на какую-то комету. Она говорила, эта штука пролетает раз в век. 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speakerR: 'Водитель',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Bus_Driver.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 262,
    text:
      `
        Мужчина грустно вздохнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 263,
    text:
      `
        — Короче, не вышло. Вызвали на ночной рейс, коллега заболел и… 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    speakerR: 'Водитель',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Bus_Driver.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 264,
    text:
      `
        Он махнул рукой, обрывая себя на полуслове. Я задумчиво кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 265,
    text:
      `
        — Но ведь у вас был практически единственный пассажир. Могли выгнать меня и вернуться домой пораньше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 266,
    text:
      `
        Водитель затушил сигарету, бережно убирая окурок в пачку.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 267,
    text:
      `
        — Ну, у нас есть расписание как-никак. Да и времени ещё достаточно, чтобы загладить вину перед Полей.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    speakerR: 'Водитель',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Bus_Driver.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 268,
    text:
      `
        Раньше я бы охотно согласился с тем, что времени у нас неисчерпаемый запас буквально на всё и вся, и со спокойной душой вышел на очередную переработку.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 269,
    text:
      `
        Куда семья может деться? Казалось бы, никуда, да? Ну, разумеется…
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 270,
    text:
      `
        «А теперь это звучит так неправильно, что аж страшно».
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 271,
    text:
      `
        «Ведь может потом исправлять будет нечего».
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 272,
    text:
      `
        — Спасибо за Вашу доброту.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 273,
    text:
      `
        Водитель скромно отмахнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 274,
    text:
      `
        — Да брось. Новый год скоро. Не вешайте нос и не хмурьтесь. Чудеса случаются, всё будет хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    speakerR: 'Водитель',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Bus_Driver.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 275,
    text:
      `
        Затем вдруг предложил:
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 276,
    text:
      `
        — Может, Вас подбросить куда?
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speakerR: 'Водитель',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Bus_Driver.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 277,
    text:
      `
        — Нет, спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 278,
    text:
      `
        Не хотелось больше его задерживать. Пусть как можно скорее вернётся к семье. К тому же, идти мне всё равно некуда.
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 279,
    text:
      `
        Да и прогулка не помешает, а вместе с ней кофе, мозговой штурм над дальнейшим планом действий.
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Buses_Night.jpg')
  },

  {
    id: 280,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 281 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 281,
    text:
      `
        Не было смысла оттягивать неизбежное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 282,
    text:
      `
        Ярмарка работала с самого утра, но антураж был не тот. Ночью за счёт огней всё смотрелось куда выигрышнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 283,
    text:
      `
        «Но свои плюсы у этого всё-таки есть: людей мало».
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 284,
    text:
      `
        Пестрящие зелёно-красным новогодние атрибуты меня совершенно не волновали. Задача была одна:
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 285,
    text:
      `
        «Найти чёртов шатёр!»
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Angry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 286,
    text:
      `
        Я с облегчением выдохнул, когда заметил ярко-красную ткань вдалеке. Теперь она казалась дьявольской, отнюдь не праздничной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 287,
    text:
      `
        Перед самым входом я помедлил, а когда отбросил ткань и переступил порог — ощутил, как по спине пробежал холодок от звона проклятых колокольчиков.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    simple: require('../../../../Media/Audio/F/Sounds/JingleBells.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 288,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 289 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 289,
    text:
      `
        Взгляд моментально выловил сгорбленный силуэт. Иссохшие губы старухи растянулись в ехидной улыбке — она сразу узнала меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Witch.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 290,
    text:
      `
        — Быстро вернулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 291,
    text:
      `
        — Неужто счастье оказалось не таким, каким ты его представлял?
      `,
    buttons: [
      {
        text: '',
        goTo: 1101
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch_Angry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 1101,
    text:
      `
        Я напрягся. Инстинкты внезапно забили тревогу. Тело вопило: отсюда следует убираться, и как можно скорее.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 292,
    text:
      `
        Бабка глядела довольно: как хищник, загнавший в угол невинную жертву и предвкушающий скорый пир.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 293,
    text:
      `
        «Если отступлю, рискую вариться в этом до конца дней своих. Давай, Костя! Не проклянет же она тебя, в самом деле…»
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Shock.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 294,
    text:
      `
        Последняя мысль казалась мне… сомнительной? Я ощущал, что произойти может что угодно. Но, осознавая собственное бессилие, рявкнул, с презрением ощущая дрожь в голосе:
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 295,
    text:
      `
        — Верните всё как было! Сейчас же!
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Angry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 296,
    text:
      `
        В шатре, словно гром перед страшной грозой, разлился противный надменный хохот.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Witch_Laugh.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 297,
    text:
      `
        — Ты слеп, юнец. Упускаешь возможность разглядеть то, что всегда было перед самым носом.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch_Angry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 298,
    text:
      `
        — Твоя жизнь ничтожна. Судьба дарит ещё один шанс, а ты, упорно сопротивляясь, потакаешь своим жалким слабостям.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch_Angry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 299,
    text:
      `
        — И я докажу. Тяни!
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 300,
    text:
      `
        Она протянула потёртые карты рубашкой вниз. Дряхлые руки уверенно держали веер.
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 301,
    text:
      `
        — Не собираюсь больше играть в эти игры!
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 302,
    text:
      `
        — Мало того, что я уже пережил? Хотите окончательно уничтожить меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 303,
    text:
      `
        — Тяни! Иначе разговор на этом и закончится.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 304,
    text:
      `
        «Чёртова шантажистка!»
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Angry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 305,
    text:
      `
        Она давила. Не оставляла выбора. А я, как безвольная марионетка, потакал каждому её действию.
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 306,
    text:
      `
        Рука потянулась к ней — навстречу неизвестному. Шанс? Или неминуемый провал? 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 307,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.F, personId: 'Tarot', goTo: 308 },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 308,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => wardrobe.getCurrentEntityImageTitle(EStoriesEn.F, 'Tarot') === 'Карта 1',
        goTo: 310
      },
      {
        condition: () => wardrobe.getCurrentEntityImageTitle(EStoriesEn.F, 'Tarot') === 'Карта 2',
        goTo: 317
      },
      {
        condition: () => wardrobe.getCurrentEntityImageTitle(EStoriesEn.F, 'Tarot') === 'Карта 3',
        goTo: 323
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 310,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Card.mp3'),
    OKMessage: { goTo: 311, image: require('../../../../Media/Images/F/Objects/Card_01.png'), buttonText: 'Взглянуть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 311,
    text:
      `
        — Ты боишься двигаться дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 312,
    text:
      `
        — Застрял в своей рутине, проблемах.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 313,
    text:
      `
        — Думаешь, что контроля достаточно?
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 314,
    text:
      `
        — Не предпринимаешь никаких шагов.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 315,
    text:
      `
        — А сейчас тебе выпала возможность изменить положение. Но сомнения убивают инициативу обрести счастье.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 317,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Card.mp3'),
    OKMessage: { goTo: 318, image: require('../../../../Media/Images/F/Objects/Card_02.png'), buttonText: 'Взглянуть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 318,
    text:
      `
        — Куда движется твоя жизнь?
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 319,
    text:
      `
        — Думаешь, выбираешь правильный путь? Работа, семья, стабильность.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 320,
    text:
      `
        — Спроси себя: а что правильно?
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 321,
    text:
      `
        — И насколько счастливы твои близкие.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 323,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Card.mp3'),
    OKMessage: { goTo: 324, image: require('../../../../Media/Images/F/Objects/Card_03.png'), buttonText: 'Взглянуть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 324,
    text:
      `
        — Ты так глубоко погряз в житейских проблемах. Замкнулся в себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 325,
    text:
      `
        — Одиночество съедает изнутри, ведь даже некогда любимая женщина смотрит иначе: без прежнего обожания, уважения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 326,
    text:
      `
        — Механическими действиями счастье не удержишь. Всё должно идти от души. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 327,
    text:
      `
        — А твой внутренний мир кричит о помощи.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 328,
    text:
      `
        Слова старухи задели за живое. Подковырнули что-то изнутри, вынуждая сердце забиться от страха. Она продолжала взваливать мне на плечи проблемы, которых я неосознанно избегал всю свою жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 329,
    text:
      `
        «Но и обманываться нельзя. Все эти гадалки и маги — обычные шарлатаны. Психологи-любители, у которых одна лишь цель — вытрясти деньги».
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 330,
    text:
      `
        Бабка ненадолго пропала из виду, затем откуда-то сбоку послышался мерзкий скрип. Она волочила ко мне большое обшарпанное зеркало.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Sqeak.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 331,
    text:
      `
        — Взгляни.
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 332,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/F/Cutscenes/Hero_Mirror.mp4'), goTo: 333 },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 333,
    text:
      `
        Уставший взгляд, помятое и осунувшееся лицо. Полное неприятие реальности — вот что отражало старое стекло.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 334,
    text:
      `
        Перемены, о которых говорила бабка, случились. Однако осознать и принять их в развернувшемся хаосе казалось практически невозможно.
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 335,
    text:
      `
        — Я не могу говорить, как правильно надо поступать.
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 336,
    text:
      `
        — Все ответы найдешь, как в себе разберешься.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 337,
    text:
      `
        Сказав это, она медленно развернулась и скрылась в недрах шатра, оставляя меня в полном недоумении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Inside_Tent_Morning.jpg')
  },

  {
    id: 338,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 339 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 339,
    text:
      `
        На улице заиграла мелодия, ознаменовавшая начало ярмарки. Все лавки вновь развернулись, продавцы приветливо зазывали покупателей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_JingleBells.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 340,
    text:
      `
        Я чувствовал себя опустошённым. Чужим среди этого праздника жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 341,
    text:
      `
        Мысли вернулись к последнему разговору.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 342,
    text:
      `
        «Пустая болтовня и никакой конкретики».
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 343,
    text:
      `
        Отстранённо шатаясь между рядами, я вдруг услышал женский голос, окликнувший меня. Следом путь преградила знакомая улыбчивая физиономия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 344,
    text:
      `
        — Не ошиблась! Вот и Константин, собственной персоной! 
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 345,
    text:
      `
        — Я… Погоди, ты меня помнишь?!
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 346,
    text:
      `
        Взгляд яростно впился в удивленную девчонку. От вспыхнувшей в сердце надежды затряслись руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 347,
    text:
      `
        — Алиса, пожалуйста, не молчи.
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 348,
    text:
      `
        Она вмиг опустила голову и виновато прикусила губу.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 349,
    text:
      `
        — Ой, вспомнила! Бабушка просила помочь… Мне лучше вернуться, пока она не разозлилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Sad.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 350,
    text:
      `
        Я машинально схватился за её локоть, точно утопающий — за соломинку. Не мог упустить последнюю возможность выплыть из творящегося вокруг кошмара.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 351,
    text:
      `
        — Ты не представляешь, как я тебе рад! Пожалуйста, не уходи.
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 352,
    text:
      `
        Пальцы невольно коснулись губ. В груди сжалось от странного чувства: неужто до сих пор не разучился улыбаться?
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 353,
    text:
      `
        — Я только что поговорил с бабушкой. Она отпускает, не переживай.
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 354,
    text:
      `
        — Уже говорил с ней? Понятно…
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Sad.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 355,
    text:
      `
        — Ты ведь знаешь, что происходит? Можешь помочь? Умоляю, я всего лишь прошу ответов!
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 356,
    text:
      `
        Девушка неуверенно разомкнула губы, но тут же поникла, отчаянно замотав головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 357,
    text:
      `
        — Я не могу дать то, что ты просишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Sad.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 358,
    text:
      `
        — Однако…
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 359,
    text:
      `
        В её глазах вдруг вспыхнул ставший привычным, по-детски игривый задор.
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 360,
    text:
      `
        — Предлагаю испытание! Продержись день в моём обществе, так и быть. Один вопрос, один ответ.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 361,
    text:
      `
        Губы вновь расплылись в улыбке. После всего пережитого эта просьба казалась невинной, и злости попросту не осталось места. Меня переполняла надежда.
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 362,
    text:
      `
        «Она помнит. И я существую».
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 363,
    text:
      `
        — Чем бы хотела заняться?
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 364,
    text:
      `
        — Оу… Так ты не против. Не думала, если честно, что так быстро согласишься.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 365,
    text:
      `
        — Я тоже. Но после прошедшего дня мне пришлось многое переосмыслить.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 366,
    text:
      `
        — И дать себе передышку будет верным решением.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 367,
    text:
      `
        — Ярмарка в нашем распоряжении. Оставляю выбор за тобой.
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 368,
    text:
      `
        «Вокруг много разных активностей. Думаю, интереснее всего будет посетить… »
      `,
    buttons: [
      {
        text: 'Аттракционы',
        goTo: 369
      },
      {
        text: 'Спектакль',
        goTo: 416
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 369,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 370 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 370,
    text:
      `
        Так как народ только подтягивался, мы смогли без проблем купить билет на карусель.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 371,
    text:
      `
        — Я думала, пойдём к скамейкам, кормить голубей.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 372,
    text:
      `
        — А ты, оказывается, умеешь веселиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 373,
    text:
      `
        — Голубей? Мне, по-твоему, пятьдесят?
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 374,
    text:
      `
        Девушка хихикнула и с радостным кличем оседлала ближайшую лошадь.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 375,
    text:
      `
        — Красивая, правда? Черная, прямо как глубокая неприступная ночь.
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 376,
    text:
      `
        — Необычное сравнение. Предпочитаешь тёмное время суток?
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 377,
    text:
      `
        — Угу. Можно не притворяться.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 378,
    text:
      `
        — Имею в виду, что под покровом тьмы ты предоставлен сам себе. А за день иногда и секунду расслабиться нет возможности.
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 379,
    text:
      `
        Тут было невозможно не согласиться. Частенько пренебрегал режимом, чтобы сделать работу или побыть наедине со своими мыслями именно ночью.
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 380,
    text:
      `
        «Полагаю, каждому нужно такое время».
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 381,
    text:
      `
        Я занял лошадь позади Алисы, и карусель начала движение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 382,
    text:
      `
        Медленное, неторопливое движение по кругу. Плавность происходящего придавала моменту определённой изюминки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 383,
    text:
      `
        Холодный ветер бил прямо в лицо. Распахнутые глаза поглощали каждую деталь, чтобы запечатлеть, обернуть тёплым воспоминанием.
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 384,
    text:
      `
        Усталое сознание отпустило тревоги, позволяя наконец отдохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 385,
    text:
      `
        Глаза уткнулись в силуэт впереди. Волосы Алисы подхватывал ветер, красиво развевая пряди, разбрасывая их по хрупким плечам и прямой спине. Девушка раскинула руки по сторонам, давая возможность чувствам вырваться на свободу.
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 386,
    text:
      `
        — …
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 387,
    text:
      `
        Когда мы покинули карусель, Алиса произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 388,
    text:
      `
        — Было здорово. Бабушка редко разрешает мне отдыхать — на уме лишь работа: сделай то, сделай это.
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 389,
    text:
      `
        — Не помню, когда мы в последний раз просто гуляли или спокойно обедали вместе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 390,
    text:
      `
        Её задумчивое лицо покрыл прелестный румянец. Я в очередной раз отметил, насколько она юна и красива.
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 391,
    text:
      `
        — Я думал, тебе нравится то, чем ты занимаешься.
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 392,
    text:
      `
        Прикусил язык в самый последний момент. Но мысль уже была озвучена. Девушка поникла, повернув голову в сторону ближней лавки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 393,
    text:
      `
        — Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Sad.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 394,
    text:
      `
        Я не совсем понимал, чем они занимаются. Но, отдавая мне ту листовку, она выглядела счастливой, искренней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 395,
    text:
      `
        «Или то было притворством?»
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 396,
    text:
      `
        «Бессмысленно заниматься допросом. Хочется поддержать и…»
      `,
    buttons: [
      {
        text: 'Обнять',
        goTo: 397
      },
      {
        text: 'Положить руку на плечо',
        goTo: 411
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 397,
    text:
      `
        Секундный порыв обернулся теплым прикосновением.
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    stats: [
      { story: EStoriesEn.F, value: 1, category: 'Choice', id: 'Hug' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 398,
    text:
      `
        Её стройная фигура обмякла в моих руках.
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 399,
    text:
      `
        Алиса не удивилась. Казалось, ей это было необходимо. Она считывала мои эмоции и подсознательное желание защитить. Но от кого? 
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 400,
    text:
      `
        Два потерянных, сбитых с жизненного пути человека стояли посреди оживленной ярмарки, насыщаясь чужим теплом. И ощущение правильности момента не покидало меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 401,
    text:
      `
        — Как много сюрпризов в тебе сокрыто?
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 402,
    text:
      `
        — Не меньше, чем в тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 403,
    text:
      `
        Она осторожно положила голову мне на плечо, руки обвили торс крепким хватом.
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 404,
    text:
      `
        — Вкусно пахнешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 405,
    text:
      `
        Я сам не понял, зачем и как, но моё лицо словно бы против воли потянулось к изящной девичьей шее.
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 406,
    text:
      `
        Губы почти прикоснулись к коже, но я немного отпрянул, задевая одним лишь дыханием. Ко мне донёсся ощутимый аромат ванили и вишни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 407,
    text:
      `
        — А ты сладко.
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 408,
    text:
      `
        Она ненадолго застыла, но вдруг резко вздрогнула и засмеялась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 409,
    text:
      `
        — Костя, щекотно же!
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 410,
    text:
      `
        Мы продолжили смущенно изучать реакции друг друга, пока воздух наполнялся запахами сладких булочек и глинтвейна, смешиваясь с нашими ароматами.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    message: 'Сладость вкуса затмевает разум. ',
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Alice' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 411,
    text:
      `
        — Знаю, временами жизнь кажется дрянью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 412,
    text:
      `
        — И ладить с близкими — задачка не из лёгких. 
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 413,
    text:
      `
        — Но не позволяй этому лишить себя возможности наслаждаться жизнью.
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 414,
    text:
      `
        Удивлённый взгляд девушки остановился на моём лице. Помолчав с секунду, она вдруг усмехнулась:
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 415,
    text:
      `
        — Буду стараться!
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Attraction.jpg')
  },

  {
    id: 416,
    text:
     '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 1500 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 1500,
    text:
      `
        Ярмарка постепенно заполнялась людьми, но мы успели урвать билеты вне очереди и занять лучшие места. 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 417,
    text:
      `
        На сцену вышли актёры. Алиса бросила на меня радостный взгляд, и мои губы в очередной раз за вечер тронула мягкая полуулыбка.
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 418,
    text:
      `
        «Какой-то человек-зажигалка. Её энергии с лихвой хватит на то, чтобы осветить целый город».
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 419,
    text:
      `
        На сцене разворачивался сюжет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 420,
    text:
      `
        Героиня по имени Таня бежала домой, чтобы успеть к курантам и отпраздновать Новый год в кругу близких. 
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 421,
    text:
      `
        Но на её пути возникла старушка. Прикинувшись слабой и одинокой, она обратилась к девушке за помощью.
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 422,
    text:
      `
        Алиса, увлечённо наклонившись к моему уху, прошептала:
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 423,
    text:
      `
        — А ты бы помог?
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 424,
    text:
      `
        Я повернул к ней голову, задумчиво вскинув бровь. Наконец, определившись с ответом, неуверенно кивнул:
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 425,
    text:
      `
        — Скорее всего. Мне всегда было… сложно отказывать людям в просьбах. Даже в ущерб себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 426,
    text:
      `
        — Но ведь так ты лишь истощаешься. Чем больше выбираешь других — тем сильнее предаёшь себя. Как можно помочь, когда внутри пусто? 
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 427,
    text:
      `
        Не отрываясь от сцены, я согласно кивнул. Почему-то эта истина начала подбираться ко мне лишь в последние дни.
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 428,
    text:
      `
        — Я понимаю. Но раньше действовал иначе. И это… 
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 429,
    text:
      `
        «Разрушило меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 430,
    text:
      `
        — О, смотри!
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 431,
    text:
      `
        Я решил не зацикливаться на плохом и обратил внимание Алисы на сюжет. Женщина, игравшая ведьму, заковала несчастную Таню в лёд и утащила к остальным жертвам. Новый год оборачивался трагедией. 
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 432,
    text:
      `
        «Снова бабка, снова беда в канун праздника. Издевательство какое-то…»
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 433,
    text:
      `
        Алиса восторженно ахнула, когда в конце вера и доброта Тани позволили ей разрушить оковы и вырваться на свободу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 434,
    text:
      `
        Героиня спектакля спасла всех заточённых, магия ведьмы обернулась против неё же. Хэппи-энд в чистом виде. 
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Market_Scene.jpg')
  },

  {
    id: 435,
    text:
      `
        Когда актёры покинули сцену, от души поклонившись зрителям, мы с Алисой встали со своих мест и вернулись на главную ярмарочную улицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 436,
    text:
      `
        — Было здорово. Бабушка редко разрешает мне отдыхать — на уме лишь работа: сделай то, сделай это.
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 437,
    text:
      `
        — Не помню, когда мы в последний раз просто гуляли или спокойно обедали вместе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 438,
    text:
      `
        Её задумчивое лицо покрыл прелестный румянец. Я в очередной раз отметил, насколько она юна и красива.
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 439,
    text:
      `
        — Я думал, тебе нравится то, чем ты занимаешься.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 440,
    text:
      `
        Прикусил язык в самый последний момент. Но мысль уже была озвучена. Девушка поникла, повернув голову в сторону ближней лавки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 441,
    text:
      `
        — Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 442,
    text:
      `
        Я не совсем понимал, чем они занимаются. Но, отдавая мне ту листовку, она выглядела счастливой, искренней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 443,
    text:
      `
        «Или то было притворством?»
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 444,
    text:
      `
        «Бессмысленно заниматься допросом. Хочется поддержать и…»
      `,
    buttons: [
      {
        text: 'Обнять',
        goTo: 445
      },
      {
        text: 'Положить руку на плечо',
        goTo: 459
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 445,
    text:
      `
        Секундный порыв обернулся теплым прикосновением.
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    stats: [
      { story: EStoriesEn.F, value: 1, category: 'Choice', id: 'Hug' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 446,
    text:
      `
        Её стройная фигура обмякла в моих руках.
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 447,
    text:
      `
        Алиса не удивилась. Казалось, ей это было необходимо. Она считывала мои эмоции и  подсознательное желание защитить. Но от кого? 
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 448,
    text:
      `
        Два потерянных, сбитых с жизненного пути человека стояли посреди оживленной ярмарки, насыщаясь чужим теплом. И ощущение правильности момента не покидало меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 449,
    text:
      `
        — Как много сюрпризов в тебе сокрыто?
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 450,
    text:
      `
        — Не меньше, чем в тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 451,
    text:
      `
        Она осторожно положила голову мне на плечо, руки обвили торс крепким хватом.
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 452,
    text:
      `
        — Вкусно пахнешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 453,
    text:
      `
        Я сам не понял, зачем и как, но моё лицо словно бы против воли потянулось к изящной девичьей шее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 454,
    text:
      `
        Губы почти прикоснулись к коже, но я немного отпрянул, задевая одним лишь дыханием. Ко мне донёсся ощутимый аромат ванили и вишни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 455,
    text:
      `
        — А ты сладко.
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 456,
    text:
      `
        Она ненадолго застыла, но вдруг резко вздрогнула и засмеялась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 457,
    text:
      `
        — Костя, щекотно же!
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 458,
    text:
      `
        Мы продолжили смущенно изучать реакции друг друга, пока воздух наполнялся запахами сладких булочек и глинтвейна, смешиваясь с нашими ароматами.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    message: 'Сладость вкуса затмевает разум. ',
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Alice' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 459,
    text:
      `
        — Знаю, временами жизнь кажется дрянью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 460,
    text:
      `
        — И ладить с близкими — задачка не из лёгких. 
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 461,
    text:
      `
        — Но не позволяй этому лишить себя возможности наслаждаться жизнью.
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 462,
    text:
      `
        Удивлённый взгляд девушки остановился на моём лице. Помолчав с секунду, она вдруг усмехнулась:
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 463,
    text:
      `
        — Буду стараться!
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 464,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 465 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 465,
    text:
      `
        Как следует насмеявшись и истоптав площадь вдоль и поперёк, мы изрядно проголодались. Решение было найдено моментально — вперёд, к ярмарочным лавкам! 
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 466,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.F, personId: 'Market_Food', goTo: 467 },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 467,
    text:
      `
        Я наблюдал за тем, как Алиса увлечённо трескает крендель, и  не мог перестать улыбаться. Меня переполняла благодарность. За то, что она оказалась рядом и помогла переключиться. Прикоснуться к другой жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 468,
    text:
      `
        Девушка оставалась максимально простой и понятной: хочет — смеётся, хочет — молчит или без конца заваливает вопросами.
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 469,
    text:
      `
        И пусть вопросы к ней и её связи с бабкой меня не отпускали, я до последнего оттягивал момент так называемого допроса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 470,
    text:
      `
        «Всего день. Один день. А завтра — возвращение к реальности».
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 471,
    text:
      `
        Параллельно жуя сладкое тесто, Алиса вдруг спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 472,
    text:
      `
        — Слушай, а тебе ночевать-то есть где, учитывая обстоятельства?
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 473,
    text:
      `
        Судьба решила иначе — конец отдыху, настало время решать проблемы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 474,
    text:
      `
        — Нет. Кажется, я не спал сутки. Дремал в автобусе, но помню смутно.
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 475,
    text:
      `
        Отложив остатки кренделя, девушка тяжело вздохнула и, не спуская с меня своих больших глаз, вдруг предложила:
      `,
    buttons: [
      {
        text: '',
        goTo: 476
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 476,
    text:
      `
        — Давай тогда к нам? Тут недалеко. Вижу, с ног уже валишься.
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 477,
    text:
      `
        От перспективы оказаться под одной крышей с мерзкой старухой меня передернуло.
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 478,
    text:
      `
        — Спасибо за предложение, но, думаю, твоя бабушка будет от него не в восторге. Как и я.
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 479,
    text:
      `
        — Не переживай. Её сегодня не будет, она задержится в шатре. Собирается всю ночь мастерить свои поделки.
      `,
    buttons: [
      {
        text: '',
        goTo: 480
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 480,
    text:
      `
        — К тому же, твоё обещание провести со мной день ещё не отработано в полной мере!
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 481,
    text:
      `
        — Ну пожа-алуйста! Позволь помочь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 482,
    text:
      `
        Алиса сложила ладони вместе, хлопая длинными ресницами.
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 483,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'Hug' }) > 0,
        goTo: 484
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'Hug' }) <= 0,
        goTo: 490
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 484,
    text:
      `
        — И ты обещаешь не докучать бесконечными вопросами?
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 485,
    text:
      `
        Хитро прищурившись, девушка загадочно улыбнулась:
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 486,
    text:
      `
        — Вопросами — обещаю. Но в остальном… не гарантирую.  
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    message: 'Между вами что-то происходит. Чувствуешь?',
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 487,
    text:
      `
        Я насмешливо вскинул брови, намереваясь смутить её одними глазами. Чёрта с два. Девчонка лишь задрала подбородок и, нацепив на лицо провокацию, скрестила на груди руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 488,
    text:
      `
        Мне понравилось это — внезапная дерзость. То, как она из милого и взбалмошного котёнка мгновенно превратилась в… тигрицу? Звучит как подкат умственно отсталого мужлана, но больше никакие характеристики не шли в голову. 
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 489,
    text:
      `
        Если по делу, меня завлёк резкий контраст. То, насколько разным и многогранным казался характер Алисы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 490,
    text:
      `
        — И ты обещаешь рассказать мне всё? 
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 491,
    text:
      `
        Растеряв весь пыл, Алиса резко выдохнула. Она отвела взгляд, но я успел уловить лёгкое раздражение, промелькнувшее на глубине её зрачков.
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    message: 'Алису начинают раздражать твои вопросы, а тебя — отсутствие ответов. ',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 492,
    text:
      `
        — Спать тебе в любом случае негде. Лавочка или диван? Реши сам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 493,
    text:
      `
        Решив, что выбора у меня действительно нет, я выбросил в урну бумажный пакет с салфетками и согласно кивнул:
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 494,
    text:
      `
        — Веди.
      `,
    buttons: [
      {
        text: '',
        goTo: 495
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 495,
    text:
      `
        Мои мысли совсем рассеялись — отсутствие отдыха дало о себе знать. Потребность во сне стала неконтролируемой, и весь путь до дома Алисы мы провели в абсолютном молчании.
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Christmas_Market_Morning.jpg')
  },

  {
    id: 496,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 497 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 497,
    text:
      `
        — Чувствуй себя как дома!
      `,
    buttons: [
      {
        text: '',
        goTo: 1100
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Daily.mp3'),
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 1100,
    text:
      `
        Когда мы вошли, Алиса провела коротенькую экскурсию: показала кухню, санузел и зал — место, где мне предстояло спать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 498,
    text:
      `
        Неизведанной оставалась одна комната, которая, по логике, принадлежала бабке.
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 499,
    text:
      `
        — Я сейчас быстренько приму душ, переоденусь и освобожу ванну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 500,
    text:
      `
        Девушка вышла из зала и через пару минут вернулась с подносом. Оставив меня наедине с чаем и бутербродами, она упорхнула мыться.
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 501,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 502, image: require('../../../../Media/Images/F/Objects/Tea_And_Sandwitch.png'), buttonText: 'Съесть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 502,
    text:
      `
        Рассеянно жуя, я боролся со сном. Глаза слипались, но засыпать в грязной одежде и немытым уже целые сутки не хотелось совершенно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 503,
    text:
      `
        Расправившись с незатейливым перекусом, я отнёс поднос с посудой на кухню. Помыв чашку с тарелкой, вернулся в зал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 504,
    text:
      `
        Не успел я упасть на диван, как из глубин квартиры раздался грохот, а следом — испуганный женский вскрик. Истощённые нервы забили тревогу, усидеть на месте не получилось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Person_Fall_Bath.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 505,
    text:
      `
        Я выбежал в коридор и замер у двери, ведущей в ванную. Помимо шума воды, других звуков не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 506,
    text:
      `
        — Алиса?! Ты в порядке?
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 507,
    text:
      `
        — Я… чёрт, кажется, сломала бедро. 
      `,
    buttons: [
      {
        text: '',
        goTo: 508
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 508,
    text:
      `
        Женский голос прозвучал сдавленно, через боль. Я заволновался сильнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 509,
    text:
      `
        — Встать сможешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 510,
    text:
      `
        — Сейчас попробую… 
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 511,
    text:
      `
        С минуту я вслушивался в непонятные шорохи, но в конце концов не выдержал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 512,
    text:
      `
        — Позволишь войти? Я помогу и выйду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 513,
    text:
      `
        Вновь тишина. Уверенность в том, что буду послан, крепла до тех пор, пока девушка не промолвила неуверенно:
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 514,
    text:
      `
        — Да…
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 515,
    text:
      `
        Обхватив ручку, я немного помедлил, но, набравшись смелости, открыл дверь и вошёл в залитое паром помещение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 516
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Door_Closed.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 516,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 517 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 517,
    text:
      `
        Девушка сидела в душевой, обхватив себя правой рукой. Волосы прикрывали грудь, бёдра крепко стиснуты. Свободная ладонь прижималась к бедру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 518
      }],
    effect: 'Дымка',
    ambient: require('../../../../Media/Audio/F/Ambients/Shower.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 518,
    text:
      `
        Она неловко улыбнулась сквозь боль и процедила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 519
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 519,
    text:
      `
        — Как всегда… 
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 520,
    text:
      `
        Наклонившись, я обхватил хрупкие плечи и, придерживая за талию, помог осторожно подняться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 521
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 521,
    text:
      `
        Носки насквозь промокли, но было не до этого. Упрямо всматриваясь в девичье лицо, уточнил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 522
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 522,
    text:
      `
        — Врача будем вызывать? Или могу отнести в спальню.
      `,
    buttons: [
      {
        text: '',
        goTo: 523
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 523,
    text:
      `
        Вцепившись влажными пальцами в мои плечи, Алиса покачала головой: 
      `,
    buttons: [
      {
        text: '',
        goTo: 524
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 524,
    text:
      `
        — Нет, кажется… проходит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 525
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 525,
    text:
      `
        Она осторожно переступила с ноги на ногу, прислушиваясь к ощущениям. Затем прикусила губу и неуверенно прошептала:
      `,
    buttons: [
      {
        text: '',
        goTo: 526
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 526,
    text:
      `
        — Всё в порядке. Думаю, просто ушиб. 
      `,
    buttons: [
      {
        text: '',
        goTo: 527
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 527,
    text:
      `
        — Хорошо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 528
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 528,
    text:
      `
        «А дальше-то что делать?»
      `,
    buttons: [
      {
        text: 'Осмотреть бедро',
        goTo: 529
      },
      {
        text: 'Выйти из ванной',
        goTo: 579
      }],
    message: 'Данный выбор повлияет на дальнейшие взаимодействия с персонажем. ',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 529,
    text:
      `
        Щёки залило румянцем, но я всё же выдавил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 530
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Romantic.mp3'),
    stats: [
      { story: EStoriesEn.F, value: 1, category: 'Choice', id: 'InspectThigh' }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 530,
    text:
      `
        — Дашь посмотреть?
      `,
    buttons: [
      {
        text: '',
        goTo: 531
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 531,
    text:
      `
        Глаза девушки округлились. Осознав, насколько двусмысленно это звучит, я поморщился и начал оправдываться: 
      `,
    buttons: [
      {
        text: '',
        goTo: 532
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 532,
    text:
      `
        — Место ушиба. Вдруг всё же трещина или вывих? Мало ли… 
      `,
    buttons: [
      {
        text: '',
        goTo: 533
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 533,
    text:
      `
        Алиса молчала. Обругав себя болваном, кретином, извращенцем, я уж было собрался её отпускать и возвращаться в зал, как девушка вдруг усмехнулась: 
      `,
    buttons: [
      {
        text: '',
        goTo: 534
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 534,
    text:
      `
        — А ты врач? 
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 535,
    text:
      `
        И вот оно — снова. Неожиданная реакция, которая ослабила моё внутреннее напряжение. Я сконфуженно улыбнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 536
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 536,
    text:
      `
        — Нет, но могу попробовать определить, насколько всё серьёзно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 537
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 537,
    text:
      `
        — Попробуй. 
      `,
    buttons: [
      {
        text: '',
        goTo: 538
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 538,
    text:
      `
        И вновь действия не по сценарию. Алиса смотрела на меня, ожидая, что будет дальше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 539
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 539,
    text:
      `
        Я мысленно проклинал себя за невесть откуда взявшуюся инициативность, но выглядеть неуверенным, смущённым мальчишкой перед этой девчонкой хотелось меньше всего. Она удивительным образом цепляла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 540
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 540,
    text:
      `
        Ладони медленно соскользнули со стройной талии, и я опустился на колени. Глаза на миг задержались на небольшой аккуратной груди, частично скрытой влажными прядями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 541
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 541,
    text:
      `
        Остановились на плоском подтянутом животе. Смотреть ниже не позволила совесть.
      `,
    buttons: [
      {
        text: '',
        goTo: 542
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 542,
    text:
      `
        «Да… В такой ситуации думать о ней иронично».
      `,
    buttons: [
      {
        text: '',
        goTo: 543
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 543,
    text:
      `
        Мягко обхватив бедро, я надавил пальцами, прощупывая ушиб. На коже появились вкрапления капилляров — формировался будущий синяк. 
      `,
    buttons: [
      {
        text: '',
        goTo: 544
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 544,
    text:
      `
        — Так больно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 545
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 545,
    text:
      `
        Я задрал голову, чтобы увидеть лицо Алисы. И столкнулся не с болью. Со странным, выворачивающим наизнанку томлением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 546
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 546,
    text:
      `
        И тут словно вихрем нахлынули воспоминания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 547,
    text:
      `
        Так на меня смотрела Ирина на заре наших отношений.
      `,
    buttons: [
      {
        text: '',
        goTo: 548
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 548,
    text:
      `
        Сердце заныло, когда перед глазами возник образ некогда родной женщины. А после — разбилось об её равнодушный и отчуждённый взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 549
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 549,
    text:
      `
        Я прикрыл веки, старательно отгоняя картину: Ирина, нежно улыбающаяся чужому мужчине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 550,
    text:
      `
        Сконцентрировался на той, что оказалась в моих руках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 551
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 551,
    text:
      `
        Искренность Алисы метала искры: в каждом действии, в каждом взгляде, до невозможности подкупая меня. Заставляя забыть обо всём на свете.
      `,
    buttons: [
      {
        text: '',
        goTo: 552
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 552,
    text:
      `
        — Ты весь вымок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 553
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 553,
    text:
      `
        Девушка поманила меня наверх, вынуждая подняться на ноги, и медленно потянула край свитера. Ткань соскользнула, обнажая покрытую мурашками кожу. Упала мне за спину, на пол холодного кафеля.
      `,
    buttons: [
      {
        text: '',
        goTo: 554
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 554,
    text:
      `
        Женские ладони огладили мои плечи. Она смущённо прикусила губу и осторожно убрала свои волосы за спину, открывая грудь. Такого явного намёка не смог бы распознать разве что полный кретин. 
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 555,
    text:
      `
        — С бедром порядок. До свадьбы заживёт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 556
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Pants.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 556,
    text:
      `
        — Мгм.
      `,
    buttons: [
      {
        text: '',
        goTo: 557
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel_Confused.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 557,
    text:
      `
        Алиса наклонила голову набок, продолжая сверлить меня взглядом. Странная пауза разгоняла жар, повышая температуру. Она стояла нагая, и не смотреть с каждой секундой оказывалось сложнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 558
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 558,
    text:
      `
        В конце концов, девушка приподнялась на носочки, осторожно коснулась губами моей щеки. Я повернул голову, ловя её губы. Искра вспыхнула моментально. 
      `,
    buttons: [
      {
        text: '',
        goTo: 559
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 559,
    text:
      `
        Вжав девушку в стену, я настойчиво впился в неё поцелуем. Ладони сжались на тонкой талии, язык Алисы вторгся в мой рот, углубляя поцелуй. 
      `,
    buttons: [
      {
        text: '',
        goTo: 560
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 560,
    text:
      `
        Руки скользнули дальше, исследуя, наслаждаясь мягкостью кожи и соблазнительными изгибами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 561
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 561,
    text:
      `
        — И всё же ты способен удивить…
      `,
    buttons: [
      {
        text: '',
        goTo: 562
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel_Confused.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 562,
    text:
      `
        Пока пальцы жадно сминали грудь, я целовал её шею, вдыхая аромат юности и головокружительной страсти.
      `,
    buttons: [
      {
        text: '',
        goTo: 563
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 563,
    text:
      `
        — Ты очень красива…
      `,
    buttons: [
      {
        text: '',
        goTo: 564
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Pants.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 564,
    text:
      `
        И это была абсолютная правда. Каждая клеточка моего тела жаждала узнать её ближе, насколько было возможно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 565
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 565,
    text:
      `
        — Люблю, когда мужчина доказывает слова действиями.
      `,
    buttons: [
      {
        text: '',
        goTo: 566
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel_Confused.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 566,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/F/CutScenes/Hero_Alice_Bathroom.mp4'), goTo: 567 },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 567,
    text:
      `
        Усмехнувшись, я резким движением развернул Алису лицом к стене, расставляя ладони возле её головы. Со спины она казалась особенно хрупкой: нежная светлая кожа, редкая россыпь мурашек вдоль плеч, ямочки на пояснице...
      `,
    buttons: [
      {
        text: '',
        goTo: 568
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 568,
    text:
      `
        Она повернула голову, вылавливая мой взгляд, и горящий огонёк глаз выдал её с потрохами: в них полыхало подобное моему, несдержанное желание — завладеть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 569
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 569,
    text:
      `
        Не желая томить нас обоих, я уверенно сжал женское бедро и, слегка надавив ладонью на поясницу, проник внутрь. Медленно, ощущая, как податливо её мышцы тянутся под моим натиском.
      `,
    buttons: [
      {
        text: '',
        goTo: 570
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 570,
    text:
      `
        Постепенно наращивая темп, я впился в её плечо поцелуем, оставляя на теле бледно-бордовый след. Помещение наполнилось стонами, рваным дыханием и бесстыжими звуками от прикосновения кожи к коже.
      `,
    buttons: [
      {
        text: '',
        goTo: 571
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 571,
    text:
      `
        В какой-то момент колени девушки подогнулись, и я сильнее вжал её в стену, не оставляя пространства между телами. Уперевшись ладонями в стену, она прижалась щекой к холодной плитке и только постанывала, периодически жмурясь от удовольствия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 572
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 572,
    text:
      `
        Её голос стал громче, движения — торопливее, ненасытнее. Чувствуя приближение неизбежного взрыва, я резко развернул Алису к себе и, подхватив под бёдра, снова вошёл, забрасывая длинные стройные ноги себе на пояс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 573
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 573,
    text:
      `
        Стоны оказались заглушены поцелуем. Алиса, сжимаясь внутри, в самый яркий момент впилась зубами мне в губы, прокусывая до крови, до дурманящей боли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 574
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 574,
    text:
      `
        Я отвлёкся и едва успел отпустить девушку, расслабляясь следом.
      `,
    buttons: [
      {
        text: '',
        goTo: 575
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 575,
    text:
      `
        Тяжело дыша, Алиса медленно соскользнула по стене на пол. Вода продолжала литься с угла, поливая наши остывающие тела.
      `,
    buttons: [
      {
        text: '',
        goTo: 576
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 576,
    text:
      `
        — Это…
      `,
    buttons: [
      {
        text: '',
        goTo: 577
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel_Confused.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 577,
    text:
      `
        — Тсс…
      `,
    buttons: [
      {
        text: '',
        goTo: 578
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Pants.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 578,
    text:
      `
        Я приобнял девушку, успокаивая неровный ритм наших сердец. Говорить не хотелось.
      `,
    buttons: [
      {
        text: '',
        goTo: 583
      }],
    message: 'Вы с Алисой перешли черту. Стоит ли игра свеч?',
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Alice' }],
    achievement: { story: EStoriesEn.F, name: 'Witch_Hug' },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 579,
    text:
      `
        — Тогда не буду мешать. Если понадобится помощь — зови, буду в зале.
      `,
    buttons: [
      {
        text: '',
        goTo: 580
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 580,
    text:
      `
        В глазах Алисы промелькнуло лёгкое разочарование.
      `,
    buttons: [
      {
        text: '',
        goTo: 581
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 581,
    text:
      `
        — Извини, что побеспокоила. Дальше справлюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 582
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Towel.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 582,
    text:
      `
        Кивнув, я оставил девушку одну.
      `,
    buttons: [
      {
        text: '',
        goTo: 583
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bathroom_Alice.jpg')
  },

  {
    id: 583,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 584 },
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 584,
    text:
      `
        После событий в ванной я дождался, пока Алиса приведёт себя в порядок, и после сам принял душ. Ощущения были невероятными — словно сбросил с себя тонну грязи. Дышать стало легче. 
      `,
    buttons: [
      {
        text: '',
        goTo: 585
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Daily.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 585,
    text:
      `
        — Я закинула твои вещи в стирку. К утру вряд ли высохнут, поэтому я подготовила несколько вариантов одежды. Осталось от дедушки. Думаю, это лучше, чем ходить в грязном…
      `,
    buttons: [
      {
        text: '',
        goTo: 586
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 586,
    text:
      `
        Я с благодарностью кивнул, смущённо потирая затылок.
      `,
    buttons: [
      {
        text: '',
        goTo: 587
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 587,
    text:
      `
        — Настало время вопросов?
      `,
    buttons: [
      {
        text: '',
        goTo: 588
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 588,
    text:
      `
        Алиса посмотрела на часы и довольно хохотнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 589
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 589,
    text:
      `
        — Уговор есть уговор. Один вопрос, один ответ.
      `,
    buttons: [
      {
        text: '',
        goTo: 590
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 590,
    text:
      `
        «Много ли она знает? Как правильно сформулировать…»
      `,
    buttons: [
      {
        text: 'Как вернуть прежнюю жизнь?',
        goTo: 591
      },
      {
        text: 'Почему меня никто не помнит?',
        goTo: 600
      },
      {
        text: 'Что это за шкатулка?',
        goTo: 609
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 591,
    text:
      `
        — Хм… Ну, ответ тут довольно банален: для начала реши, что ты хочешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 592
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 592,
    text:
      `
        Я устало потёр переносицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 593
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 593,
    text:
      `
        — Не перенимай черту своей бабушки говорить загадками.
      `,
    buttons: [
      {
        text: '',
        goTo: 594
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 594,
    text:
      `
        — Но это правда. Разве ты сам не видишь, насколько запутался?
      `,
    buttons: [
      {
        text: '',
        goTo: 595
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 595,
    text:
      `
        — Твоя жизнь идёт по правильному сценарию, как считаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 596
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 596,
    text:
      `
        — Только и слышу, что все вокруг знают, как я ДОЛЖЕН жить.
      `,
    buttons: [
      {
        text: '',
        goTo: 597
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 597,
    text:
      `
        — Вот только никто не спросил: хочу ли я этих перемен.
      `,
    buttons: [
      {
        text: '',
        goTo: 598
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 598,
    text:
      `
        Губы Алисы растянулись в сочувствующей улыбке, которую девушка быстро скрыла.
      `,
    buttons: [
      {
        text: '',
        goTo: 599
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 599,
    text:
      `
        — Возможно, ты пока просто не осознаёшь своё счастье. Ответы скрыты за крышкой шкатулки.
      `,
    buttons: [
      {
        text: '',
        goTo: 618
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 600,
    text:
      `
        — Тебе дана возможность начать жизнь с чистого листа.
      `,
    buttons: [
      {
        text: '',
        goTo: 601
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 601,
    text:
      `
        Эти слова вызвали раздражение. Не скрывая этого, я криво улыбнулся:
      `,
    buttons: [
      {
        text: '',
        goTo: 602
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 602,
    text:
      `
        — Это я уже понял.
      `,
    buttons: [
      {
        text: '',
        goTo: 603
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 603,
    text:
      `
        — Так зачем сопротивляться? Оставь ты свои сомнения и просто двигайся дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 604
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 604,
    text:
      `
        Алиса не поняла сарказма или сделала вид.
      `,
    buttons: [
      {
        text: '',
        goTo: 605
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 605,
    text:
      `
        — Но как я могу? Как могу нормально существовать, зная, что моя семья меня знать не знает? Что мой ребёнок называет отцом чужого человека и искренне в это верит?!
      `,
    buttons: [
      {
        text: '',
        goTo: 606
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 606,
    text:
      `
        На последних словах мой голос сорвался на раздражённый крик. Я тяжело выдохнул, обхватывая пальцами переносицу в жалкой попытке утихомирить эмоции.
      `,
    buttons: [
      {
        text: '',
        goTo: 607
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 607,
    text:
      `
        Губы Алисы растянулись в сочувствующей улыбке, которую девушка быстро скрыла.
      `,
    buttons: [
      {
        text: '',
        goTo: 608
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 608,
    text:
      `
        — Возможно, ты пока просто не осознаёшь своё счастье. Ответы скрыты за крышкой шкатулки.
      `,
    buttons: [
      {
        text: '',
        goTo: 618
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 609,
    text:
      `
        — Ручная работа моей бабушки. Каждый экземпляр уникален.
      `,
    buttons: [
      {
        text: '',
        goTo: 610
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 610,
    text:
      `
        Я рассчитывал на другой ответ. Поэтому лишь напряжённо вглядывался в невозмутимую Алису, ожидая продолжения.
      `,
    buttons: [
      {
        text: '',
        goTo: 611
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 611,
    text:
      `
        — Ты видишь в этом плохое. Советую взглянуть на ситуацию с разных сторон и ответить себе на вопрос: какую жизнь ты прожил?
      `,
    buttons: [
      {
        text: '',
        goTo: 612
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 612,
    text:
      `
        — В детстве бабушка говорила о том, как важно помогать людям, ведь не каждый способен раскрыть собственный потенциал.
      `,
    buttons: [
      {
        text: '',
        goTo: 613
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 613,
    text:
      `
        — Со временем её слова всё больше кажутся мне истиной.
      `,
    buttons: [
      {
        text: '',
        goTo: 614
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 614,
    text:
      `
        Выражения Алисы сбивали с толку. Мы словно говорили на разных языках, совершенно не понимая друг друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 615
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 615,
    text:
      `
        — Но я не просил о таких переменах.
      `,
    buttons: [
      {
        text: '',
        goTo: 616
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 616,
    text:
      `
        Губы Алисы растянулись в сочувствующей улыбке, которую девушка быстро скрыла.
      `,
    buttons: [
      {
        text: '',
        goTo: 617
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 617,
    text:
      `
        — Возможно, ты пока просто не осознаёшь своё счастье. Ответы скрыты за крышкой шкатулки.
      `,
    buttons: [
      {
        text: '',
        goTo: 618
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 618,
    text:
      `
        — Господи, какие ответы?! Ваша шкатулка — пустышка! Она разок засияла, и всё перевернулось вверх дном! Я открывал её несколько раз, больше ничего не происходит!
      `,
    buttons: [
      {
        text: '',
        goTo: 619
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 619,
    text:
      `
        Взгляд Алисы сменился. С неё схлынула юность, и она даже стала выглядеть старше. Хитро прищурившись, девушка вскинула бровь:
      `,
    buttons: [
      {
        text: '',
        goTo: 620
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 620,
    text:
      `
        — А это как посмотреть. Она выполнила свою функцию, тебе остался красивый предмет интерьера.
      `,
    buttons: [
      {
        text: '',
        goTo: 621
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 621,
    text:
      `
        — Который поможет обрести утраченное, если его разбить.
      `,
    buttons: [
      {
        text: '',
        goTo: 622
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 622,
    text:
      `
        — Оставишь как есть — обретёшь новый путь.
      `,
    buttons: [
      {
        text: '',
        goTo: 623
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 623,
    text:
      `
        В голове начал складываться пазл.
      `,
    buttons: [
      {
        text: '',
        goTo: 624
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 624,
    text:
      `
        «Так всё это время разгадка была… до смешного простой?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 625
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 625,
    text:
      `
        Выпустив из лёгких весь воздух, я устало опустился на диван. Помолчав с минуту, вновь обратился к девушке:
      `,
    buttons: [
      {
        text: '',
        goTo: 626
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 626,
    text:
      `
        — Почему именно я?
      `,
    buttons: [
      {
        text: '',
        goTo: 627
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 627,
    text:
      `
        Алиса опустила взгляд и вздохнула. Волнение выдали её руки, в которых наметилась дрожь.
      `,
    buttons: [
      {
        text: '',
        goTo: 628
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 628,
    text:
      `
        — Просто случайность. Но разве это не волшебство? Тебе нужна была помощь, ты её получил.
      `,
    buttons: [
      {
        text: '',
        goTo: 629
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 629,
    text:
      `
        Очередной ворох мыслей снова чуть не разрушил моё состояние. Усталость навалилась с новой силой.
      `,
    buttons: [
      {
        text: '',
        goTo: 630
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 630,
    text:
      `
        — Давай отдохнём? Утро вечера мудренее.
      `,
    buttons: [
      {
        text: '',
        goTo: 631
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 631,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'InspectThigh' }) > 0,
        goTo: 632
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'InspectThigh' }) <= 0,
        goTo: 640
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 632,
    text:
      `
        Девушка потянула меня за собой.
      `,
    buttons: [
      {
        text: '',
        goTo: 633
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 633,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 634 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 634,
    text:
      `
        Тёмное помещение окутывал дурманящий запах пряной вишни и табака.
      `,
    buttons: [
      {
        text: '',
        goTo: 635
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 635,
    text:
      `
        Я плюхнулся на кровать, притягивая Алису к себе. Человеческое тепло успокаивало.
      `,
    buttons: [
      {
        text: '',
        goTo: 636
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 636,
    text:
      `
        Отголоски близости всё ещё будоражили сладким послевкусием. Несмотря на всё, что она мне поведала, неприязни я не испытывал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 637
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 637,
    text:
      `
        Как бы там ни было, Алиса — не главный злодей в моей личной истории, в этом я был уверен на сто процентов.
      `,
    buttons: [
      {
        text: '',
        goTo: 638
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 638,
    text:
      `
        Девушка развернулась ко мне, игриво укусив за нос, и прижалась к груди, полностью расслабляясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 639
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 639,
    text:
      `
        Этот бесконечный день закончился на хорошей ноте.
      `,
    buttons: [
      {
        text: '',
        goTo: 643
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 640,
    text:
      `
        — Спокойной ночи!
      `,
    buttons: [
      {
        text: '',
        goTo: 641
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 641,
    text:
      `
        Мы разошлись, кивнув друг другу.
      `,
    buttons: [
      {
        text: '',
        goTo: 642
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 642,
    text:
      `
        Я плюхнулся на диван и, укутавшись в плед, не заметил, как отрубился.
      `,
    buttons: [
      {
        text: '',
        goTo: 643
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Bedroom_Alice.jpg')
  },

  {
    id: 643,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 644
      }],
    interruptiveFrame: { goTo: 644 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 644,
    text:
      `
        Утром, пока Алиса спала, я решил снова принять душ. Девушка сдержала своё обещание — в комнате меня ждало несколько комплектов свежей одежды.
      `,
    buttons: [
      {
        text: '',
        goTo: 645
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice.jpg')
  },

  {
    id: 645,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.F, personId: 'Konstantin_Part02', goTo: 646 },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice.jpg')
  },

  {
    id: 646,
    text:
      `
        «Более-менее по размеру. А у её деда неплохой вкус».
      `,
    buttons: [
      {
        text: '',
        goTo: 647
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice.jpg')
  },

  {
    id: 647,
    text:
      `
        Предоставленный сам себе, я решил воспользоваться возможностью изучить квартиру.
      `,
    buttons: [
      {
        text: '',
        goTo: 648
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice.jpg')
  },

  {
    id: 648,
    text:
      `
        «Вчера столько всего произошло… Я не могу сидеть сложа руки. Нужно найти что-то, что подтвердит или опровергнет слова Алисы!»
      `,
    buttons: [
      {
        text: '',
        goTo: 649
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice.jpg')
  },

  {
    id: 649,
    text:
      `
        Выбор пал на комнату, в которой мне не довелось находиться за всё время пребывания в квартире. На моё удивление, та оказалась не заперта.
      `,
    buttons: [
      {
        text: '',
        goTo: 650
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice.jpg')
  },

  {
    id: 650,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 651 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 651,
    text:
      `
        Сомнений в том, что я оказался в обители ведьмы, больше не осталось.
      `,
    buttons: [
      {
        text: '',
        goTo: 652
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 652,
    text:
      `
        Своим жутким дизайном помещение буквально кричало о связи с потусторонним.
      `,
    buttons: [
      {
        text: '',
        goTo: 653
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 653,
    text:
      `
        «У меня не так много времени. Что осмотреть в первую очередь?»
      `,
    buttons: [
      {
        text: 'Фотографии',
        goTo: 654,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(653, 0, getChoice(0))
          if (askedAmount(2)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Шкаф',
        goTo: 663,
        func: () => {
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(653, 1, getChoice(1))
          if (askedAmount(2)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Подоконник',
        goTo: 667,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(653, 2, getChoice(2))
          if (askedAmount(2)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Кровать',
        goTo: 673,
        func: () => {
          choiceDone(3)
          scenarioManager.changeSceneButtonStatus(653, 3, getChoice(3))
          if (askedAmount(2)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Далее',
        goTo: 679,
        isActive: false
      }],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(653)
    },
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 654,
    text:
      `
        На идеально вычищенных полках стояло несколько снимков в резных деревянных рамах.
      `,
    buttons: [
      {
        text: '',
        goTo: 655
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 655,
    text:
      `
        «Похоже на сборник семейных портретов».
      `,
    buttons: [
      {
        text: '',
        goTo: 656
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 656,
    text:
      `
        Вот изображение маленькой девочки, забавно стоящей на грядке с лопатой, ручка которой выше роста ребёнка. На следующем фото — пожилой мужчина с тростью, позирующий на театральной сцене. 
      `,
    buttons: [
      {
        text: '',
        goTo: 657
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 657,
    text:
      `
        Коллективное фото, чёрно-белый портрет красивой девушки в шляпе, молодая пара в поле среди колосьев…
      `,
    buttons: [
      {
        text: '',
        goTo: 658
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 658,
    text:
      `
        «На первый взгляд, ничего примечательного. Так, а это что?»
      `,
    buttons: [
      {
        text: '',
        goTo: 659
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 659,
    text:
      `
        Чуть поодаль стояла фотография, прикрытая марлей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 660
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 660,
    text:
      `
        Аккуратно стянув ткань, я обнаружил снимок с изображением трёх красивых женщин. Они сидели за круглым столом, склонившись над хрустальным шаром.
      `,
    buttons: [
      {
        text: '',
        goTo: 661
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 661,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 662, image: require('../../../../Media/Images/F/Objects/Phoo_Witch.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 662,
    text:
      `
        «Ни разу не подозрительно…»
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(653)
      scenarioManager.manageDialog(653, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(653, 662)
    },
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 663,
    text:
      `
        Створки громоздкого шкафа со скрипом раскрылись.
      `,
    buttons: [
      {
        text: '',
        goTo: 664
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Sqeak.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 664,
    text:
      `
        «Копаться в нижнем белье старухи? До чего я докатился…»
      `,
    buttons: [
      {
        text: '',
        goTo: 665
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 665,
    text:
      `
        На вешалках покоились скромные цветочные платья, несколько соболиных шуб и домашний халат.
      `,
    buttons: [
      {
        text: '',
        goTo: 666
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 666,
    text:
      `
        «Верхняя одежда выглядит свежей, совсем не поношенной. Семья явно не бедствует, раз имеет возможность покупать подобные вещи».
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(653)
      scenarioManager.manageDialog(653, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(653, 666)
    },
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 667,
    text:
      `
        Отдёрнув в сторону занавеску, я впустил в комнату бледный свет и обнаружил перед собой… обыкновенное хобби каждой второй уважающей себя пенсионерки?
      `,
    buttons: [
      {
        text: '',
        goTo: 668
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 668,
    text:
      `
        «Она же всё-таки бабушка…»
      `,
    buttons: [
      {
        text: '',
        goTo: 669
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 669,
    text:
      `
        На потрескавшемся пластиковом подоконнике расположились разной формы горшки с рассадой.
      `,
    buttons: [
      {
        text: '',
        goTo: 670
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 670,
    text:
      `
        «Это вроде бы лук… А тут, кажись, пророщенная петрушка».
      `,
    buttons: [
      {
        text: '',
        goTo: 671
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 671,
    text:
      `
        Но определить некоторые виды растений я так и не смог.
      `,
    buttons: [
      {
        text: '',
        goTo: 672
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 672,
    text:
      `
        «Поди использует в своих ведьмовских обрядах!»
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(653)
      scenarioManager.manageDialog(653, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(653, 672)
    },
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 673,
    text:
      `
        Хозяйское ложе было аккуратно заправлено. Слегка стянув покрывало, я обнаружил на постельном белье странный предмет и испуганно отшатнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 674
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 674,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 675, image: require('../../../../Media/Images/F/Objects/Rune.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 675,
    text:
      `
        В центре кровати кто-то целенаправленно оставил деревянный… оберег? 
      `,
    buttons: [
      {
        text: '',
        goTo: 676
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 676,
    text:
      `
        «А оберег ли?»
      `,
    buttons: [
      {
        text: '',
        goTo: 677
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 677,
    text:
      `
        Я не был силён в славянской мифологии, шаманстве или чёрт знает, что всё это значит…
      `,
    buttons: [
      {
        text: '',
        goTo: 678
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 678,
    text:
      `
        Поэтому, боясь окончательно потерять себя или, упаси Боже, память и жизнь, я поспешил вернуть покрывало на место, в надежде, что ещё не успел навлечь на себя очередное проклятие.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(653)
      scenarioManager.manageDialog(653, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(653, 678)
    },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 679,
    text:
      `
        «Так, я просто роюсь в её вещах. Пользы от этого никакой. Нужно что-то другое».
      `,
    buttons: [
      {
        text: '',
        goTo: 680
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 680,
    text:
      `
        Вариантов оставалось не так много. Я бросился к столу у противоположной стены.
      `,
    buttons: [
      {
        text: '',
        goTo: 681
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 681,
    text:
      `
        Открыв выдвижной ящик, я потрясённо застыл, чувствуя, как тело прошибает холодный пот. 
      `,
    buttons: [
      {
        text: '',
        goTo: 682
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Tragic.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 682,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 683, image: require('../../../../Media/Images/F/Objects/Hero_Photo.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 683,
    text:
      `
        «Не может быть…»
      `,
    buttons: [
      {
        text: '',
        goTo: 684
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 684,
    text:
      `
        Пальцы соприкоснулись с глянцевой бумагой, которая обожгла кожу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 685
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 685,
    text:
      `
        Я схватился за сердце, из последних сил сдерживая рвущийся наружу крик. Ноги подвели — рухнул назад, больно ударившись копчиком, но фотокарточку из рук так и не выпустил.
      `,
    buttons: [
      {
        text: '',
        goTo: 686
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Hard_Man_Breath.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 686,
    text:
      `
        «Они знали! Это не просто случайность. Ведьмы следили, выискивали…»
      `,
    buttons: [
      {
        text: '',
        goTo: 687
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 687,
    text:
      `
        «Но я же ей доверял!»
      `,
    buttons: [
      {
        text: '',
        goTo: 688
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 688,
    text:
      `
        — Мужчина! Это то, что вам нужно! Не проходите мимо!
      `,
    buttons: [
      {
        text: '',
        goTo: 689
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    ghostSilhouette: true,
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 689,
    text:
      `
        — Если не придёте, многое упустите.
      `,
    buttons: [
      {
        text: '',
        goTo: 690
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 690,
    text:
      `
        — Так и знала, что не ошиблась в Вас!
      `,
    buttons: [
      {
        text: '',
        goTo: 691
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Coat.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 691,
    text:
      `
        — Просто случайность. Но разве это не волшебство? Тебе нужна была помощь, ты её получил.
      `,
    buttons: [
      {
        text: '',
        goTo: 692
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Livingroom_Alice_Night.jpg')
  },

  {
    id: 692,
    text:
      `
        Мелькнувший в памяти тёплый взгляд Алисы больше не успокаивал. Он ощущался, словно удар по сердцу. Красивые глаза девчонки — будто кулак, бьющий прямо в центр, отнимающий возможность дышать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 693
      }],
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 693,
    text:
      `
        «Я что, какой-то эксперимент? Подопытный, над которым можно так издеваться и гадать: сломается или выстоит?»
      `,
    buttons: [
      {
        text: '',
        goTo: 694
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 694,
    text:
      `
        Поднявшись на ноги, я не удержал равновесие и, уперевшись локтями в стол, сбил на пол несколько предметов.
      `,
    buttons: [
      {
        text: '',
        goTo: 695
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Items_Falling.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 695,
    text:
      `
        Звук разнёсся по комнате, отражаясь от стен в каждом углу комнаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 696
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 696,
    text:
      `
        — Костя? Всё в порядке?
      `,
    buttons: [
      {
        text: '',
        goTo: 697
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 697,
    text:
      `
        Обескураженный собственным открытием, я не понимал, как теперь взаимодействовать с этой девушкой. Как я мог верить ей после всего, что увидел?
      `,
    buttons: [
      {
        text: '',
        goTo: 698
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 698,
    text:
      `
        «Она такая же, как и её бабка. Это просто ловушка».
      `,
    buttons: [
      {
        text: '',
        goTo: 699
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 699,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'InspectThigh' }) > 0,
        goTo: 700
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'InspectThigh' }) <= 0,
        goTo: 702
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 700,
    text:
      `
        «Расставила сети, соблазнила меня. Чтобы управлять было легче. Безропотного телёнка всяко легче пустить на убой…»
      `,
    buttons: [
      {
        text: '',
        goTo: 701
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 701,
    text:
      `
        Мысль о том, что я для неё — лишь игрушка, вызвала странное чувство, схожее с… разочарованием? Болью?
      `,
    buttons: [
      {
        text: '',
        goTo: 702
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 702,
    text:
      `
        Вскоре в комнате показалась встревоженная Алиса. Я настойчиво впился в её глаза — она глядела цепко, но нервно: как хищник, осознающий, что её добыча вот-вот ускользнёт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 703
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 703,
    text:
      `
        Или я просто <i>хотел</i> так думать?
      `,
    buttons: [
      {
        text: '',
        goTo: 704
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 704,
    text:
      `
        — Что ты здесь делаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 705
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 705,
    text:
      `
        Её голос хлестнул, словно адская плеть.
      `,
    buttons: [
      {
        text: '',
        goTo: 706
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 706,
    text:
      `
        — Как ты могла... Я доверился тебе! Ты впустила меня в свой дом, мать твою! 
      `,
    buttons: [
      {
        text: '',
        goTo: 707
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 707,
    text:
      `
        — Я думал, это жест доброй воли. Человечность, в конце концов. А ты… Ты всё это время лгала! Притворялась! Смеялась надо мной!
      `,
    buttons: [
      {
        text: '',
        goTo: 708
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 708,
    text:
      `
        Я вцепился пальцами в свои волосы, бросая в сторону Алисы мимолётный взгляд. Девушка осталась стоять у двери и, обхватив себя руками, ответила, немного повысив голос:
      `,
    buttons: [
      {
        text: '',
        goTo: 709
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 709,
    text:
      `
        — Тебе надо успокоиться. Я тебе не врала.
      `,
    buttons: [
      {
        text: '',
        goTo: 710
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 710,
    text:
      `
        — Хватит! Я видел фотографию. Ты строила из себя невинную овечку, которая якобы ничего не знала. Про шкатулку тоже враньё? Часть вашего колдовского плана?!
      `,
    buttons: [
      {
        text: '',
        goTo: 711
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 711,
    text:
      `
        — Что будет, если я её разобью?
      `,
    buttons: [
      {
        text: '',
        goTo: 712
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 712,
    text:
      `
        — Ваша магия уничтожит меня? А? Что будет?! Отвечай!
      `,
    buttons: [
      {
        text: '',
        goTo: 713
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 713,
    text:
      `
        — Ты не понимаешь, о чём говоришь! Костя, пожалуйста, остановись… Я прошу у тебя прощения за то, что не могу сказать всей правды. Но я всегда старалась быть откровенной.
      `,
    buttons: [
      {
        text: '',
        goTo: 714
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Alice_Home.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 714,
    text:
      `
        — Грош цена твоим словам. Вот именно — старалась! Не была…
      `,
    buttons: [
      {
        text: '',
        goTo: 715
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 715,
    text:
      `
        Последняя фраза потерялась, смешалась с учащённым дыханием. Находиться рядом с этой лгуньей стало невыносимо.
      `,
    buttons: [
      {
        text: '',
        goTo: 716
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Hard_Man_Breath.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 716,
    text:
      `
        Алиса еле успела отступить в сторону, прежде чем я вылетел из спальни, а после и из квартиры, на ходу подхватив в прихожей ботинки и куртку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 717
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 717,
    text:
      `
        Обувался и одевался я уже в подъезде, до последнего игнорируя женский голос, бормочущий моё имя с лестничной клетки третьего этажа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 718
      }],
    simple: require('../../../../Media/Audio/F/Sounds/Door_Closed.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Room_Witch.jpg')
  },

  {
    id: 718,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 719 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 719,
    text:
      `
        Оказавшись на улице, я с облегчением вдохнул побольше свежего воздуха. Морозный питерский ветер ударил в лицо, точно пощёчина, моментально приводя в чувства.
      `,
    buttons: [
      {
        text: '',
        goTo: 720
      }],
    ambient: require('../../../../Media/Audio/F/Ambients/Wind_Powerfull.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 720,
    text:
      `
        И снова я оказался в безвыходном положении.
      `,
    buttons: [
      {
        text: '',
        goTo: 721
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 721,
    text:
      `
        Только казалось, поймал разгадку за хвост, как вдруг нарисовались очередные сложности и сомнения.
      `,
    buttons: [
      {
        text: '',
        goTo: 722
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 722,
    text:
      `
        Мной завладел поистине животный страх. Я стал чётче осознавать: это не просто глупый розыгрыш, совпадение или сон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 723
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 723,
    text:
      `
        «Я — часть спланированного плана».
      `,
    buttons: [
      {
        text: '',
        goTo: 724
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 724,
    text:
      `
        Всё ещё было неясно, по какой причине выбор пал на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 725
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 725,
    text:
      `
        «А какая к чёрту разница? Они уничтожили мою связь с дорогими людьми, вырвали образ из жизней близких с корнем, прикрываясь благими намерениями».
      `,
    buttons: [
      {
        text: '',
        goTo: 726
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat_Angry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 726,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'InspectThigh' }) > 0,
        goTo: 727
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'InspectThigh' }) <= 0,
        goTo: 732
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 727,
    text:
      `
        «Я грубо обошёлся с Алисой, учитывая нашу близость».
      `,
    buttons: [
      {
        text: '',
        goTo: 728
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 728,
    text:
      `
        «А как иначе? Если я стал ей дорог, почему бы просто не перестать меня мучить? Дать право самому выбрать, чего я хочу. Это же моя жизнь…»
      `,
    buttons: [
      {
        text: '',
        goTo: 729
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 729,
    text:
      `
        «Может, конечно, Алиса сама стала невольной заложницей всей ситуации».
      `,
    buttons: [
      {
        text: '',
        goTo: 730
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 730,
    text:
      `
        Мысли путались, вдруг перескочив на жену. В груди защемило. 
      `,
    buttons: [
      {
        text: '',
        goTo: 731
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 731,
    text:
      `
        «В этой «реальности» я предал тебя, Ирина».
      `,
    buttons: [
      {
        text: '',
        goTo: 732
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 732,
    text:
      `
        Я схватился за голову, пытаясь понять, что делать дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 733
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 733,
    text:
      `
        «Мне нечего терять. Если послушаю Алису и разобью шкатулку, есть шанс вернуть свою жизнь обратно».
      `,
    buttons: [
      {
        text: '',
        goTo: 734
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 734,
    text:
      `
        А вдруг не получится?
      `,
    buttons: [
      {
        text: '',
        goTo: 735
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 735,
    text:
      `
        Если же я окончательно уничтожу последний шанс или, того хуже, выпущу вселенское зло наружу?
      `,
    buttons: [
      {
        text: '',
        goTo: 736
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 736,
    text:
      `
        Я вымученно поморщился, осознавая абсурдность собственных мыслей. Какое, чёрт меня подери, «вселенское зло»?
      `,
    buttons: [
      {
        text: '',
        goTo: 737
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 737,
    text:
      `
        «Меня уже ничего не удивит».
      `,
    buttons: [
      {
        text: '',
        goTo: 738
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 738,
    text:
      `
        Сутулясь от холода, я поднял голову, перестав испепелять взглядом асфальт, и обратил внимание на окружающие меня здания.
      `,
    buttons: [
      {
        text: '',
        goTo: 739
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 739,
    text:
      `
        «Знакомый район. Кажется, в двух кварталах отсюда мой офис».
      `,
    buttons: [
      {
        text: '',
        goTo: 740
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 740,
    text:
      `
        Новая надежда кольнула в сердце: вдруг там меня вспомнят?
      `,
    buttons: [
      {
        text: '',
        goTo: 741
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 741,
    text:
      `
        «Бред. Но не попробовать глупо».
      `,
    buttons: [
      {
        text: '',
        goTo: 742
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 742,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 743 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 743,
    text:
      `
        Старательно сдерживая напряжение и рвущуюся наружу надежду, я пересёк порог офисного центра, где сразу нарвался на утреннюю суматоху.
      `,
    buttons: [
      {
        text: '',
        goTo: 744
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Daily.mp3'),
    ambient: require('../../../../Media/Audio/F/Ambients/Office_Noise.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 744,
    text:
      `
        «Попытаю удачу на ресепшене».
      `,
    buttons: [
      {
        text: '',
        goTo: 745
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 745,
    text:
      `
        Назвав сотруднице за стойкой свой внутренний номер, совсем не удивился, услышав фамилию другого человека.
      `,
    buttons: [
      {
        text: '',
        goTo: 746
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 746,
    text:
      `
        Я неловко улыбнулся, оправдываясь, что, скорее всего, перепутал цифры, и поспешил отойти к диванчикам для поиска якобы корректной информации.
      `,
    buttons: [
      {
        text: '',
        goTo: 747
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 747,
    text:
      `
        Сняв куртку, стал размышлять.
      `,
    buttons: [
      {
        text: '',
        goTo: 748
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 748,
    text:
      `
        «Идиот! Здесь нечего ловить. Нужно просто принять решение относительно шкатулки и покончить с хаосом».
      `,
    buttons: [
      {
        text: '',
        goTo: 749
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 749,
    text:
      `
        Офисная жизнь тем временем шла своим чередом. Мимо проходили деловитые сотрудники, попадались знакомые лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 750
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 750,
    text:
      `
        «Подумать только. Чувствую себя привидением».
      `,
    buttons: [
      {
        text: '',
        goTo: 751
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 751,
    text:
      `
        Наблюдения прервал ворвавшийся в холл доставщик с кипой воздушных шаров.
      `,
    buttons: [
      {
        text: '',
        goTo: 752
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 752,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 753, image: require('../../../../Media/Images/F/Objects/Balloons.png'), buttonText: 'Взглянуть' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 753,
    text:
      `
        Как нельзя кстати, украшения вышла забирать Лера, моя подруга и коллега по работе.
      `,
    buttons: [
      {
        text: '',
        goTo: 754
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 754,
    text:
      `
        «Удача не до конца покинула меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 755
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 755,
    text:
      `
        Я встал и поспешил к девушке.
      `,
    buttons: [
      {
        text: '',
        goTo: 756
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 756,
    text:
      `
        Её задумчивый взгляд скользнул по моей фигуре. Она нахмурилась, словно сама не понимала: знаком ей человек напротив, или же…?
      `,
    buttons: [
      {
        text: '',
        goTo: 757
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 757,
    text:
      `
        «Может, всё же узнала? Нет, кажется, Лера в замешательстве».
      `,
    buttons: [
      {
        text: '',
        goTo: 758
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 758,
    text:
      `
        — Простите…?
      `,
    buttons: [
      {
        text: '',
        goTo: 759
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 759,
    text:
      `
        — Я…
      `,
    buttons: [
      {
        text: '',
        goTo: 760
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 760,
    text:
      `
        — Лерочка!
      `,
    buttons: [
      {
        text: '',
        goTo: 761
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Eugene.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 761,
    text:
      `
        Мерзкий скрипучий голос начальника эхом отозвался в барабанных перепонках.
      `,
    buttons: [
      {
        text: '',
        goTo: 762
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 762,
    text:
      `
        — Забеспокоился, что ты тут не справишься. Нужна помощь?
      `,
    buttons: [
      {
        text: '',
        goTo: 763
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Eugene_Smirk.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 763,
    text:
      `
        Наши глаза пересеклись, но в них, как и в Лериных, не было и намёка на узнавание.
      `,
    buttons: [
      {
        text: '',
        goTo: 764
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 764,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Effect', id: 'PersonalGrowth' }) >= 0,
        goTo: 765
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Effect', id: 'PersonalGrowth' }) < 0,
        goTo: 768
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 765,
    text:
      `
        — Кто это? Наш новый сотрудник?
      `,
    buttons: [
      {
        text: '',
        goTo: 766
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 766,
    text:
      `
        Девушка перевела рассеянный взгляд на меня и неуверенно промолвила:
      `,
    buttons: [
      {
        text: '',
        goTo: 767
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 767,
    text:
      `
        — Нет… Вернее, не знаю. Вы что-то хотели?
      `,
    buttons: [
      {
        text: '',
        goTo: 771
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 768,
    text:
      `
        — Кто это? У нас что, охрана совсем не работает? Пускает всех подряд…
      `,
    buttons: [
      {
        text: '',
        goTo: 769
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 769,
    text:
      `
        Девушка перевела резкий взгляд на начальника, процедив сквозь зубы:
      `,
    buttons: [
      {
        text: '',
        goTo: 770
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 770,
    text:
      `
        — Евгений Владимирович, соблюдайте субординацию! Мужчина, что Вы хотели?
      `,
    buttons: [
      {
        text: '',
        goTo: 771
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 771,
    text:
      `
        Я ухмыльнулся такому повороту событий. Чувствовал подступающую бурю эмоций, которая копилась так долго, что начала рваться наружу.
      `,
    buttons: [
      {
        text: '',
        goTo: 772
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 772,
    text:
      `
        «А если просто перестать играть по правилам?»
      `,
    buttons: [
      {
        text: '',
        goTo: 773
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 773,
    text:
      `
        Ощущая собственное превосходство и не собираясь отдавать контроль, я дерзко выпалил:
      `,
    buttons: [
      {
        text: '',
        goTo: 774
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 774,
    text:
      `
        — Здравствуйте, Евгений Владимирович. Неужто не помните своего беспечного сотрудника?
      `,
    buttons: [
      {
        text: '',
        goTo: 775
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 775,
    text:
      `
        Начальник вылупился удивлёнными глазами сначала на меня, затем перевёл их на Леру. Оба выглядели, мягко говоря, шокированными.
      `,
    buttons: [
      {
        text: '',
        goTo: 776
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 776,
    text:
      `
        Лера попыталась разрядить обстановку:
      `,
    buttons: [
      {
        text: '',
        goTo: 777
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 777,
    text:
      `
        — Так Вы новенький? Что ж сразу не сказали, позвольте мне провести экскурсию и…
      `,
    buttons: [
      {
        text: '',
        goTo: 778
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 778,
    text:
      `
        Я прервал её предложение деликатным жестом, обратив всё внимание на жирную свинью, которая частенько отравляла мне жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 779
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 779,
    text:
      `
        — Забавно получается… Стоите весь такой важный.
      `,
    buttons: [
      {
        text: '',
        goTo: 780
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 780,
    text:
      `
        — Не узнаёте человека, который регулярно перерабатывал ради повышения доходности компании. Чтобы такие, как вы, обжирались как не в себя и стали в собственное кресло с трудом влезать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 781
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 781,
    text:
      `
        — А что получал взамен? Лишь нытьё и бесконечный негатив: это сделано не так, то переделай, «Лера, научи Костю уму разуму»…
      `,
    buttons: [
      {
        text: '',
        goTo: 782
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 782,
    text:
      `
        Услышав своё имя, девушка вздрогнула и пристально всмотрелась в моё лицо. Медленно, с расстановкой прошлась взглядом буквально с головы до ног.
      `,
    buttons: [
      {
        text: '',
        goTo: 783
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 783,
    text:
      `
        Непонимание застыло на ухоженном, слегка усталом лице. 
      `,
    buttons: [
      {
        text: '',
        goTo: 784
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 784,
    text:
      `
        — Да я тебя в первый раз вижу!
      `,
    buttons: [
      {
        text: '',
        goTo: 785
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 785,
    text:
      `
        — Продолжите так разговаривать, вызову охрану.
      `,
    buttons: [
      {
        text: '',
        goTo: 786
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 786,
    text:
      `
        Я искренне рассмеялся. Наблюдая за этим спектаклем со стороны, впервые ощутил собственное превосходство. Знание — поистине сила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 787
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 787,
    text:
      `
        — Вызывайте! И тогда весь офис узнает, как вы задерживались «на работе», тем временем без конца изменяя жене.
      `,
    buttons: [
      {
        text: '',
        goTo: 788
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 788,
    text:
      `
        — «Костя, закончи тут без меня. Срочные дела не ждут. Сам понимаешь, жёны в свои годы уже не так сладки. Не то, что молодые и прекрасные»… До сих пор в шоке, что на Вас кто-то вёлся.
      `,
    buttons: [
      {
        text: '',
        goTo: 789
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 789,
    text:
      `
        Я готов был отдать всё, что у меня было, чтобы запечатлеть бледное и испуганное лицо этого прохиндея. 
      `,
    buttons: [
      {
        text: '',
        goTo: 790
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 790,
    text:
      `
        Демонстративно схватившись за сердце, болван обратился к Лере:
      `,
    buttons: [
      {
        text: '',
        goTo: 791
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 791,
    text:
      `
        — Разберись с этими чёртовыми шарами и с ситуацией. Мне поплохело от этого сказочника. И работы полно…
      `,
    buttons: [
      {
        text: '',
        goTo: 792
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 792,
    text:
      `
        Начальник поспешил покинуть «тонущий корабль», что было абсолютно в его стиле — стиле натуральной крысы.
      `,
    buttons: [
      {
        text: '',
        goTo: 793
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 793,
    text:
      `
        «Перекладывай и дальше ответственность на других. Чтобы в будущем со мной не приключилось, добьюсь твоего увольнения, мерзкий червь».
      `,
    buttons: [
      {
        text: '',
        goTo: 794
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 794,
    text:
      `
        Я вернул взгляд на совсем переставшую что-либо понимать девушку. Виновато улыбнулся:
      `,
    buttons: [
      {
        text: '',
        goTo: 795
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 795,
    text:
      `
        — Приношу извинения за эту сцену. 
      `,
    buttons: [
      {
        text: '',
        goTo: 796
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 796,
    text:
      `
        Лера, отпустив курьера, обратилась ко мне:
      `,
    buttons: [
      {
        text: '',
        goTo: 797
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 797,
    text:
      `
        — То, что Вы говорили… правда? 
      `,
    buttons: [
      {
        text: '',
        goTo: 798
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 798,
    text:
      `
        Понимая, как всё выглядит со стороны, я решил больше не путать девушку:
      `,
    buttons: [
      {
        text: '',
        goTo: 799
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 799,
    text:
      `
        — Да. Довелось с ним работать в прошлом… так себе человек, мягко говоря. 
      `,
    buttons: [
      {
        text: '',
        goTo: 800
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 800,
    text:
      `
        Но девушку подобные объяснения не устроили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 801
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 801,
    text:
      `
        — Вы упомянули моё имя. Что-то про то, что я Вас учила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 802
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 802,
    text:
      `
        Она не спускала с меня настороженных глаз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 803
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 803,
    text:
      `
        «Боится, что нарвалась на душевнобольного?»
      `,
    buttons: [
      {
        text: '',
        goTo: 804
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 804,
    text:
      `
        — Забудьте. Вас это не касается. Главное было дать ему понять: он не пуп земли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 805
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 805,
    text:
      `
        И поспешил перевести тему:
      `,
    buttons: [
      {
        text: '',
        goTo: 806
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 806,
    text:
      `
        — Вам нужна помощь? С шарами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 807
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 807,
    text:
      `
        Девушка покачала головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 808
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 808,
    text:
      `
        — У нас корпоратив. Нужно лишь отнести на верхние этажи. Далее уж коллеги как-нибудь сами справятся.
      `,
    buttons: [
      {
        text: '',
        goTo: 809
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 809,
    text:
      `
        — Вы так и не ответили, почему подошли ко мне?
      `,
    buttons: [
      {
        text: '',
        goTo: 810
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 810,
    text:
      `
        Я улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 811
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 811,
    text:
      `
        И выпалил:
      `,
    buttons: [
      {
        text: 'Не хотите чаю?',
        goTo: 812
      },
      {
        text: 'До свидания',
        goTo: 921
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 812,
    text:
      `
        Лера, сжимая в руке связку шаров, вскинула бровь. Затем вдруг усмехнулась:
      `,
    buttons: [
      {
        text: '',
        goTo: 813
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 813,
    text:
      `
        — Кажется, я и так делаю сверх того, что входит в мои обязанности. А Ваша триумфальная речь ещё больше открыла глаза на происходящее. Пожалуй, до корпората больше не притронусь к рабочим делам…
      `,
    buttons: [
      {
        text: '',
        goTo: 814
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 814,
    text:
      `
        — У нас тут кафе наверху. Я договорюсь, чтобы Вас пропустили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 815
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 815,
    text:
      `
        Не ожидая такого поворота событий, я облегчённо выдохнул. Взаимодействие с теми, кто раньше так или иначе был вхож в мою жизнь, давало чувство контроля. 
      `,
    buttons: [
      {
        text: '',
        goTo: 816
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 816,
    text:
      `
        Я улыбнулся, не скрывая своей радости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 817
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 817,
    text:
      `
        Меня пропустили, мы прошли к лифтам. Я вышел на этаже кафетерия, девушка ушла передать шары и сообщить о своём уходе.
      `,
    buttons: [
      {
        text: '',
        goTo: 818
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 818,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 819 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 819,
    text:
      `
        Лера вернулась, быстро нашла столик, который я занял. Мы взяли чай и по десерту. В этот раз вызвался оплатить всё сам, на что девушка лишь пожала плечами, благодушно уступив.
      `,
    buttons: [
      {
        text: '',
        goTo: 820
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 820,
    text:
      `
        Моё исчезновение из памяти людей не повлияло на банковские счета. Карта осталась на имя Константина вместе с частью денег. 
      `,
    buttons: [
      {
        text: '',
        goTo: 821
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 821,
    text:
      `
        — Кажется, я больше не любимчик начальства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 822
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 822,
    text:
      `
        Невольная ухмылка против воли коснулась губ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 823
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 823,
    text:
      `
        — Сильно орал? 
      `,
    buttons: [
      {
        text: '',
        goTo: 824
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 824,
    text:
      `
        Лера отмахнулась, и мы заговорили о другом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 825
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 825,
    text:
      `
        Я рассказал о себе, слегка корректируя информацию, учитывая обстоятельства. Девушка общалась охотно, даже слишком открыто. В ходе диалога всплыли интересные детали, о которых ранее и не подозревал.
      `,
    buttons: [
      {
        text: '',
        goTo: 826
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 826,
    text:
      `
        «Откровенничать с незнакомцем всяко легче. Вероятность повторной встречи минимальна. Хоть и не равна нулю».
      `,
    buttons: [
      {
        text: '',
        goTo: 827
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 827,
    text:
      `
        Валерия отвлеклась на уведомление. Взглянув на экран, она вдруг потускнела. Тяжело вздохнув, девушка резким движением швырнула телефон в сумку и перевела взгляд на окно. Подобный порыв эмоций от неё я заметил впервые. 
      `,
    buttons: [
      {
        text: '',
        goTo: 828
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 828,
    text:
      `
        — Что-то случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 829
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 829,
    text:
      `
        Она повернула голову и уставилась в стол. И в этот момент я заметил промелькнувшее на её лице отчаяние. 
      `,
    buttons: [
      {
        text: '',
        goTo: 830
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 830,
    text:
      `
        — Жизнь случилась. Случились люди. И их недобросовестность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 831
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 831,
    text:
      `
        Девушка замолчала. Я почувствовал, что это мой шанс — копнуть глубже и выяснить, что скрывается за этой холёной, красивой внешностью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 832
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 832,
    text:
      `
        — Понимаю. Сам переживаю непростой период. Но, говорят, если высказаться, может стать легче… 
      `,
    buttons: [
      {
        text: '',
        goTo: 833
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 833,
    text:
      `
        Лера грустно усмехнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 834
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 834,
    text:
      `
        — Тебе правда интересно?
      `,
    buttons: [
      {
        text: '',
        goTo: 835
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 835,
    text:
      `
        Она незаметно перешла на «ты», и я счёл это зелёным светом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 836
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 836,
    text:
      `
        — Всегда интересно, какие могут быть проблемы у такой с виду успешной и привлекательной девушки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 837
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 837,
    text:
      `
        Лера поморщилась, буркнув:
      `,
    buttons: [
      {
        text: '',
        goTo: 838
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 838,
    text:
      `
        — Ключевое слово здесь «с виду». 
      `,
    buttons: [
      {
        text: '',
        goTo: 839
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 839,
    text:
      `
        Сделав глоток остывшего чая, она скрестила на груди руки и, откинувшись на спинку стула, решилась поделиться: 
      `,
    buttons: [
      {
        text: '',
        goTo: 840
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 840,
    text:
      `
        — У меня был… муж. Гражданский. Восемь лет отношений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 841
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 841,
    text:
      `
        Эта информация расставила всё по своим местам. Вот почему она всегда игнорировала знаки внимания от наших коллег. А бегало за ней немало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 842
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 842,
    text:
      `
        — Он не спешил узаконивать наши отношения. Не видел в этом смысла. А зачем? Если и так всё нормально. 
      `,
    buttons: [
      {
        text: '',
        goTo: 843
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 843,
    text:
      `
        Последняя фраза была сказана с неприкрытым сарказмом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 844
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 844,
    text:
      `
        — Я, дура, доверяла ему. Обещал ведь: как только с работой наладится, он накопит денег, и мы сыграем свадьбу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 845
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 845,
    text:
      `
        — Жили в моей квартире, но в какой-то момент в ней стало тесно. Я решила: пора расширяться, и бывший охотно поддержал идею. Только с условием: оформляем пополам. Обещал, что платить будет сам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 846
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 846,
    text:
      `
        — Я продала квартиру и этих денег нам хватило на первоначальный взнос. Мы переехали, но с платежами постоянно возникали сложности: «Лер, опять выплаты задерживают, закрой этот месяц сама». «Добавь, пожалуйста, половину, машина сломалась и я не рассчитал бюджет» и так на протяжении полугода. 
      `,
    buttons: [
      {
        text: '',
        goTo: 847
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 847,
    text:
      `
        — Когда подняла этот вопрос, он вспылил. Сказал, что я на него давлю и он вообще не хотел переезда. В общем, разругались, и муженёк поспешил съехать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 848
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 848,
    text:
      `
        Она замолчала. Но я начал догадываться, что произошло дальше… 
      `,
    buttons: [
      {
        text: '',
        goTo: 849
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 849,
    text:
      `
        — Сейчас мне пришло сообщение о необходимости явиться в суд из-за раздела имущества. Квартиру-то мы в итоге оформили на двоих. 
      `,
    buttons: [
      {
        text: '',
        goTo: 850
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 850,
    text:
      `
        Закончив печальный рассказ, девушка упёрлась локтями в стол и спрятала лицо в раскрытых ладонях. Она не плакала, но было заметно, как эта ситуация медленно разрушала её изнутри. Я не мог подобрать слов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 851
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 851,
    text:
      `
        В конце концов, Лера сама прервала молчание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 852
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 852,
    text:
      `
        — В общем, вывод один: самые страшные предатели — те, кто годами делят с тобой постель и едят из одной посуды. А раньше удивлялась очередным новостям, в которых внуки убили родных бабушек-дедушек за наследство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 853
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 853,
    text:
      `
        — Каким надо быть ублюдком, чтобы так поступить с любимым человеком?
      `,
    buttons: [
      {
        text: '',
        goTo: 854
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 854,
    text:
      `
        — Сама хороша. Мне далеко не восемнадцать годиков. Слепо доверять чувствам в наш век — высшей степени инфантилизм. 
      `,
    buttons: [
      {
        text: '',
        goTo: 855
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 855,
    text:
      `
        — Думала всё наладится, станет лучше. Но люди не меняются. А прикрывать плохое отношение фразами «он исправится», «у него просто судьба тяжёлая» и давать очередные шансы…
      `,
    buttons: [
      {
        text: '',
        goTo: 856
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 856,
    text:
      `
        — Может, и можно. Но не растягивать это на годы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 857
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 857,
    text:
      `
        Вот и всплыли причины всех её страхов касательно семьи. Скорее всего, она по-настоящему жаждала этого, но боялась нарваться на отказ и равнодушие со стороны гражданского мужа.
      `,
    buttons: [
      {
        text: '',
        goTo: 858
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 858,
    text:
      `
        — У меня есть хороший адвокат. Хочешь, поделюсь контактами?
      `,
    buttons: [
      {
        text: '',
        goTo: 859
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 859,
    text:
      `
        Девушка покачала головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 860
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 860,
    text:
      `
        — Отдам ему часть денег. Сбережения есть. Пусть делает с ними что хочет. Главное, чтобы оставил в покое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 861
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 861,
    text:
      `
        Она поднялась из-за стола. 
      `,
    buttons: [
      {
        text: '',
        goTo: 862
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 862,
    text:
      `
        — Мне пора домой. Нужно закончить кое-какие дела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 863
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 863,
    text:
      `
        Я тут же вскочил на ноги и выпалил, не подумав:
      `,
    buttons: [
      {
        text: '',
        goTo: 864
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 864,
    text:
      `
        — Я провожу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 865
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 865,
    text:
      `
        Её губы медленно растянулись в удивлённой улыбке. Недолго думая, Лера пожала плечами:
      `,
    buttons: [
      {
        text: '',
        goTo: 866
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 866,
    text:
      `
        — А проводи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 867
      }],
    message: 'Лера начинает доверять вам.',
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 867,
    text:
      `
        Мы неспешно брели по улицам города, не переставая общаться на разные темы. Ощущение чуждости между нами исчезло. Лера оказалась совсем другой: не такой, какой я её знал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 868
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Romantic.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 868,
    text:
      `
        Образ отстранённой, холодной леди рассыпался. Передо мной предстала милая, разговорчивая особа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 869
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 869,
    text:
      `
        — Так, мы пришли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 870
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 870,
    text:
      `
        Девушка сконфуженно улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 871
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 871,
    text:
      `
        — Наверное, это не слишком разумно: показывать первому встречному, где ты живёшь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 872
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 872,
    text:
      `
        Я усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 873
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 873,
    text:
      `
        — Наверное. Но обещаю: преследовать не буду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 874
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 874,
    text:
      `
        Переглянувшись, мы рассмеялись. Усталость сошла с симпатичного лица девушки, глаза засияли. Не сдержавшись, я протянул руку, коснувшись её ладони.
      `,
    buttons: [
      {
        text: '',
        goTo: 875
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 875,
    text:
      `
        — Это так странно. Ощущение, будто знакомы не первый год. С тобой так легко. Какую мысль бы ни озвучила — не осудишь, выслушаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 876
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 876,
    text:
      `
        От этих слов по сердцу разлилось неконтролируемое тепло, которое сопровождалось тихой тоской.
      `,
    buttons: [
      {
        text: '',
        goTo: 877
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 877,
    text:
      `
        «Ты видишь улучшенную версию меня…»
      `,
    buttons: [
      {
        text: '',
        goTo: 878
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 878,
    text:
      `
        Смена эмоций не ускользнула от внимательного взгляда девушки, она поспешила отстраниться.
      `,
    buttons: [
      {
        text: '',
        goTo: 879
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 879,
    text:
      `
        — Извини. Совсем потеряла голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 880
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 880,
    text:
      `
        Я понимал, что пройденные трудности Леры оставили на её душе шрамы.
      `,
    buttons: [
      {
        text: '',
        goTo: 881
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 881,
    text:
      `
        «Малейшее проявление заботы со стороны мужчины кажется ей чем-то необычным. А неизведанное всегда притягивает».
      `,
    buttons: [
      {
        text: '',
        goTo: 882
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 882,
    text:
      `
        «С какой же сволочью ты жила…»
      `,
    buttons: [
      {
        text: '',
        goTo: 883
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 883,
    text:
      `
        Взяв ситуацию под контроль, я приподнял её руку, губами коснувшись тыльной стороны изящной ладони.
      `,
    buttons: [
      {
        text: '',
        goTo: 884
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 884,
    text:
      `
        — Не за что извиняться. Ты у себя одна, и ты достойна большего. Достойна быть счастливой. Пусть мы только познакомились, но разве это помешает продолжить общение, если так велит сердце?
      `,
    buttons: [
      {
        text: '',
        goTo: 885
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 885,
    text:
      `
        Глаза Леры заблестели, в них спрятались сомнение и болезненная надежда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 886
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 886,
    text:
      `
        Девушка поспешила отвернуться, но я успел остановить её, нежно обхватив подбородок. Взгляд напротив переполнился замешательством.
      `,
    buttons: [
      {
        text: '',
        goTo: 887
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 887,
    text:
      `
        — Мне страшно. Когда раскрываешь своё сердце и душу — становишься заложником другого человека.
      `,
    buttons: [
      {
        text: '',
        goTo: 888
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat_Cry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 888,
    text:
      `
        — Я не хочу снова испытать эту боль.
      `,
    buttons: [
      {
        text: '',
        goTo: 889
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat_Cry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 889,
    text:
      `
        «Опасения не беспочвенны. Так хочется унять эти сомнения, доказать, что мир полон прекрасных моментов, и предложить разделить её тяготы вместе».
      `,
    buttons: [
      {
        text: '',
        goTo: 890
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 890,
    text:
      `
        Я заметил, как ладонь Леры легла на живот, пока сама девушка продолжала беззвучно плакать.
      `,
    buttons: [
      {
        text: '',
        goTo: 891
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 891,
    text:
      `
        «К чему бы это? Неужели она пережила ещё больший кошмар?»
      `,
    buttons: [
      {
        text: '',
        goTo: 892
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 892,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Person', id: 'Valeria' }) === +1,
        goTo: 893
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Person', id: 'Valeria' }) >= 2,
        goTo: 900
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Person', id: 'Valeria' }) <= 0,
        goTo: 900
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 893,
    text:
      `
        И тут осознание прошибло меня, словно током.
      `,
    buttons: [
      {
        text: '',
        goTo: 894
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 894,
    text:
      `
        «Когда мы сидели в кафе до всего этого бардака, её размышления о материнстве. Может ли…?»
      `,
    buttons: [
      {
        text: '',
        goTo: 895
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 895,
    text:
      `
        Лера стояла неподвижно, напоминая каменное изваяние. Казалось, она даже дышать перестала. И лишь трясущаяся рука, вжимаясь в живот как в нечто ценное, кричала о помощи.
      `,
    buttons: [
      {
        text: '',
        goTo: 896
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 896,
    text:
      `
        Я накрыл пальцами её холодную ладонь, слегка унимая дрожь.
      `,
    buttons: [
      {
        text: '',
        goTo: 897
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 897,
    text:
      `
        Девушка подняла на меня взгляд, и он сказал за неё всё. Она вдруг приблизилась, уткнувшись лбом мне в плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 898
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 898,
    text:
      `
        Лёгкие объятия, успокаивающие поглаживания — без каких-либо слов, чтобы не разрушить столь хрупкий момент.
      `,
    buttons: [
      {
        text: '',
        goTo: 899
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 899,
    text:
      `
        — Спасибо…
      `,
    buttons: [
      {
        text: '',
        goTo: 900
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat_Cry.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 900,
    text:
      `
        Вскоре Лера взяла себя в руки, быстро смахивая непослушные слёзы со щёк. 
      `,
    buttons: [
      {
        text: '',
        goTo: 901
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 901,
    text:
      `
        — Ты творишь что-то невероятное. Уж не думала, что так быстро ещё и мою плаксивую моську увидишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 902
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 902,
    text:
      `
        — Не переживай, я никому не скажу.
      `,
    buttons: [
      {
        text: '',
        goTo: 903
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 903,
    text:
      `
        Выплеснув негатив, мы вновь засияли, улыбаясь друг другу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 904
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 904,
    text:
      `
        «Мне так хорошо с ней. Не как с коллегой или женщиной, а как с простым человеком».
      `,
    buttons: [
      {
        text: 'Пригласить в кино',
        goTo: 905
      },
      {
        text: 'Улыбнуться',
        goTo: 917
      }],
    message: 'Данный выбор определит ваше отношение к Валерии — любовь или дружба?',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 905,
    text:
      `
        — Может, как-нибудь сходим в кино?
      `,
    buttons: [
      {
        text: '',
        goTo: 906
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: 1, category: 'Choice', id: 'LetsGoCinema' }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 906,
    text:
      `
        Прозвучало спонтанно, немного по-детски. Но я искренне хотел продолжить общение, вот и ляпнул первое, что пришло в голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 907
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 907,
    text:
      `
        — А может, лучше в театр?
      `,
    buttons: [
      {
        text: '',
        goTo: 908
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 908,
    text:
      `
        Я с улыбкой кивнул, и мы обменялись номерами. Прежде чем отпустить Леру, осторожно подался вперёд, собираясь обнять её на прощание и поблагодарить за доброе отношение.
      `,
    buttons: [
      {
        text: '',
        goTo: 909
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 909,
    text:
      `
        Но девушка сделала то, чего я совсем не ожидал: приподнявшись на носочки, коснулась губами моей щеки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 910
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 910,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/F/Cutscenes/Lera_Hero_Cheek_Kiss.mp4'), goTo: 911 },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 911,
    text:
      `
        Я приподнял ладони, осторожно касаясь её спины, чтобы задержать возле себя подольше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 912
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 912,
    text:
      `
        Слегка повернул голову, и её губы мимолётно коснулись моих. Но Лера быстро отстранилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 913
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 913,
    text:
      `
        — Не торопи события. Не хочу портить впечатление о тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 914
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat_Smile.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 914,
    text:
      `
        Примирительно вскинув руки, я усмехнулся:
      `,
    buttons: [
      {
        text: '',
        goTo: 915
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 915,
    text:
      `
        — Прошу прощения. Мне просто было слишком приятно побыть рядом с <i> такой</i> тобой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 916
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 916,
    text:
      `
        Прежде чем развернуться, она окинула меня пристальным взглядом. В этот момент показалось, будто на глубине её глаз что-то мелькнуло. Она словно бы на мгновение… узнала меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 928
      }],
    message: 'И хотя Лера не помнит, ваш образ до сих пор жив в её сердце.',
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Valeria' }],
    achievement: { story: EStoriesEn.F, name: 'Colleges' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 917,
    text:
      `
        — Мне было приятно с тобой познакомиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 918
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 918,
    text:
      `
        — Взаимно. И спасибо, что проводил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 919
      }],
    message: 'Вы произвели на Леру приятное впечатление.',
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Lera_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 919,
    text:
      `
        Я пожал плечами, мол, ерунда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 920
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 920,
    text:
      `
        Мы попрощались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 928
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Petersburg_Moring.jpg')
  },

  {
    id: 921,
    text:
      `
        — И спасибо Вам за уделённое время.
      `,
    buttons: [
      {
        text: '',
        goTo: 922
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Daily.mp3'),
    ambient: require('../../../../Media/Audio/F/Ambients/Office_Noise.mp3'),
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 922,
    text:
      `
        Лера, сжимая в руке связку шаров, вскинула бровь. Затем вдруг усмехнулась:
      `,
    buttons: [
      {
        text: '',
        goTo: 923
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 923,
    text:
      `
        — Моя помощь не требуется, я правильно понимаю? 
      `,
    buttons: [
      {
        text: '',
        goTo: 924
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 924,
    text:
      `
        Сгорая от неловкости и желания задержать её, я всё-таки качнул головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 925
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 925,
    text:
      `
        — Да, всё в порядке. Больше не смею беспокоить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 926
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 926,
    text:
      `
        Странно взглянув на меня, Валерия попрощалась и вместе с шарами двинулась в сторону лифтов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 927
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 927,
    text:
      `
        Я быстро оделся и, устав от офисного шума, спешно покинул здание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 928
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Office_Hall_Morning.jpg')
  },

  {
    id: 928,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 1501 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 1501,
    text:
      `
        И снова я остался один: без цели, без прошлого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 929
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Dramatic.mp3'),
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 929,
    text:
      `
        Ноги сами привели меня к дому. 
      `,
    buttons: [
      {
        text: '',
        goTo: 930
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 930,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Effect', id: 'PersonalGrowth' }) < 0,
        goTo: 931
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Effect', id: 'PersonalGrowth' }) >= 0,
        goTo: 934
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 931,
    text:
      `
        «Я жалок».
      `,
    buttons: [
      {
        text: '',
        goTo: 932
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 932,
    text:
      `
        Кожа ладоней потрескалась от мороза, но пальцы упрямо сжимали тлеющую сигарету. Я жадно вдыхал дым, не переставая всматриваться в окно. Окно собственной кухни, доступ в которую мне закрыт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 933
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 933,
    text:
      `
        Проклятая шкатулка прожигала карман, руки так и зудели от желания разбить её вдребезги, но страх не позволял этого сделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 936
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 934,
    text:
      `
        «Судьба даровала мне выбор. Решение остаётся за мной».
      `,
    buttons: [
      {
        text: '',
        goTo: 935
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 935,
    text:
      `
        Проклятая шкатулка прожигала карман, руки так и зудели от желания разбить её вдребезги, но страх не позволял этого сделать. Необходимо убедиться в том, что уничтожение предмета не приведёт к более негативным последствиям.  
      `,
    buttons: [
      {
        text: '',
        goTo: 936
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 936,
    text:
      `
        Со стороны послышался громкий детский голос, и моё сердце сжалось от боли и тоски. 
      `,
    buttons: [
      {
        text: '',
        goTo: 937
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 937,
    text:
      `
        — Мам, а давай приготовим печенье? Папино любимое, с шоколадом и миндалём? Ну пожа-алуйста! 
      `,
    buttons: [
      {
        text: '',
        goTo: 938
      }],
    speakerL: 'Марк',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Mark_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 938,
    text:
      `
        Я обернулся в сторону голосов, мысленно проклиная чужака, затесавшегося среди моих близких. Он украл не только семью, но и вкусы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 939
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 939,
    text:
      `
        Ведь шоколадно-ореховое печенье — мой любимый десерт, который Ирина всегда готовила по понедельникам на неделю вперёд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 940
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 940,
    text:
      `
        — Обязательно приготовим, Маркуш. Только сначала расправимся с ужином. 
      `,
    buttons: [
      {
        text: '',
        goTo: 941
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Coat_Packets.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 941,
    text:
      `
        Жена с сыном подошли к подъезду, обратив внимание на скамейку, где я провёл битый час. В руках Ирина держала два массивных пакета, Марк сжимал в пальцах пакетик поменьше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 942
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 942,
    text:
      `
        Сердце наполнилось гордостью — мой славный, взрослый малыш всегда стремился помогать маме и заботиться о ней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 943
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 943,
    text:
      `
        «В отличие от меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 944
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 944,
    text:
      `
        Поднявшись на ноги, я улыбнулся. Жена, приглядевшись, вдруг громко воскликнула:
      `,
    buttons: [
      {
        text: '',
        goTo: 945
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 945,
    text:
      `
        — Здравствуйте. А я же Вас помню! 
      `,
    buttons: [
      {
        text: '',
        goTo: 946
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Coat_Packets.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 946,
    text:
      `
        Моё сердце пропустило удар. Неужели…?
      `,
    buttons: [
      {
        text: '',
        goTo: 947
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 947,
    text:
      `
        — Вы тот мужчина, что приходил позавчера! С лестничной клетки…
      `,
    buttons: [
      {
        text: '',
        goTo: 948
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Coat_Packets.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 948,
    text:
      `
        Надежда рухнула. Но, спрятав горечь, я дружелюбно кивнул:
      `,
    buttons: [
      {
        text: '',
        goTo: 949
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 949,
    text:
      `
        — Да, я… э-э, ваш новый сосед. 
      `,
    buttons: [
      {
        text: '',
        goTo: 950
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 950,
    text:
      `
        Девушка заметно расслабилась. Марк не отрывал от меня любопытного взгляда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 951
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 951,
    text:
      `
        — О, правда? С новосельем Вас! 
      `,
    buttons: [
      {
        text: '',
        goTo: 952
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Coat_Packets.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 952,
    text:
      `
        Я кивнул, но вновь обратил внимание на тяжёлые пакеты и решил:
      `,
    buttons: [
      {
        text: 'Предложить помощь',
        goTo: 953
      },
      {
        text: 'Не задерживать',
        goTo: 1011
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 953,
    text:
      `
        — Позвольте помочь Вам? Пакеты ведь тяжёлые…
      `,
    buttons: [
      {
        text: '',
        goTo: 954
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 954,
    text:
      `
        Ирина взглянула на руку: сдвинув вниз скрутившийся в полосу полиэтилен, она увидела на коже красные следы.
      `,
    buttons: [
      {
        text: '',
        goTo: 955
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 955,
    text:
      `
        Немного подумав, девушка всё же кивнула, чем сильно порадовала меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 956
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 956,
    text:
      `
        Я тут же приблизился, забирая пакеты. Ощутив тяжесть, словил очередное чувство вины. Она ведь таскала их всю нашу семейную жизнь…
      `,
    buttons: [
      {
        text: '',
        goTo: 957
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 957,
    text:
      `
        Мы поднялись, и Ирина пригласила меня войти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1502
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1502,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 958 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 958,
    text:
      `
        Разувшись, я занёс пакеты на кухню и мельком огляделся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 959
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 959,
    text:
      `
        Всё было как прежде. Даже магнитики на холодильнике, которые мы привозили с курортов.
      `,
    buttons: [
      {
        text: '',
        goTo: 960
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 960,
    text:
      `
        «Только в её воспоминаниях она покупала их с другим».
      `,
    buttons: [
      {
        text: '',
        goTo: 961
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 961,
    text:
      `
        — Давайте Вашу куртку. Задержитесь у нас немного, выпьем чаю с конфетами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 962
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 962,
    text:
      `
        Я согласился, кивнув, точно безропотный щенок. Мне хотелось побыть рядом с семьёй как можно дольше. Стащив куртку, передал её девушке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 963
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 963,
    text:
      `
        — Сейчас переоденусь и вернусь. Располагайтесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 964
      }],
    speakerR: 'Ирина ',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 964,
    text:
      `
        Опустившись на стул, я устало прикрыл глаза, поглубже втягивая носом ароматы родного дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 965
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 965,
    text:
      `
        Ирина не заставила себя долго ждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 966
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 966,
    text:
      `
        — Какой чай предпочитаете? Или, быть может, кофе?
      `,
    buttons: [
      {
        text: '',
        goTo: 967
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 967,
    text:
      `
        — Чай. Благодарю.
      `,
    buttons: [
      {
        text: '',
        goTo: 968
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 968,
    text:
      `
        Моя жена выглядела иначе. Ухоженная, сияющая здоровьем и красотой. Без впалых щёк и потухшего взгляда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 969
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 969,
    text:
      `
        Ирина поставила чайник и принялась заваривать напиток, попутно задавая вопросы: нравится ли мне район, как давно переехал. Сочинять ответы пришлось на ходу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 970
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 970,
    text:
      `
        Наконец, девушка поставила чашки с конфетами на стол и присела напротив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 971
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 971,
    text:
      `
        — У Вас чудесный сын. 
      `,
    buttons: [
      {
        text: '',
        goTo: 972
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 972,
    text:
      `
        На лице Ирины возникла тёплая улыбка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 973
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 973,
    text:
      `
        — Благодарю. А вы, кстати, с семьёй переехали или один?
      `,
    buttons: [
      {
        text: '',
        goTo: 974
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 974,
    text:
      `
        Мой взгляд потух, и девушка заметила это. Её рука дрогнула, и чашка опустилась на стол громче положенного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 975
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 975,
    text:
      `
        — У меня была семья. Чудесная. Самая лучшая. Но я не ценил…
      `,
    buttons: [
      {
        text: '',
        goTo: 976
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 976,
    text:
      `
        — О, Боже… они…?
      `,
    buttons: [
      {
        text: '',
        goTo: 977
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 977,
    text:
      `
        — Нет-нет, всё в порядке. С ними всё хорошо. Они, кажется, счастливы. Но уже без меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 978
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 978,
    text:
      `
        Ирина пристально посмотрела на меня. Она всматривалась в моё лицо, и в её выражении отразилась глубокая задумчивость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 979
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 979,
    text:
      `
        — Уверена, Вы заслуживаете ещё один шанс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 980
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 980,
    text:
      `
        Эти слова зацепили. Сделав глоток, я грустно улыбнулся:
      `,
    buttons: [
      {
        text: '',
        goTo: 981
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 981,
    text:
      `
        — Вы пытаетесь меня успокоить или действительно в это верите? 
      `,
    buttons: [
      {
        text: '',
        goTo: 982
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 982,
    text:
      `
        — Смотрю на Вас и вижу хорошего человека. Я верю, каждый заслуживает право исправить свою ошибку. Но, увы, не каждый использует эту возможность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 983
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 983,
    text:
      `
        — Если Вам предоставится шанс, не упустите его…
      `,
    buttons: [
      {
        text: '',
        goTo: 984
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 984,
    text:
      `
        Показалось, или она напрямую связала эти слова с нашей ситуации? Ирина помогала, поддерживала, даже не помня меня частью этой семьи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 985
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 985,
    text:
      `
        Горло сдавило комом.
      `,
    buttons: [
      {
        text: '',
        goTo: 986
      }],
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Irina' }],
    message: 'Ирина, будучи в другой реальности, продолжает верить в вас. А ты?',
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 986,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'InspectThigh' }) >= 1,
        goTo: 987
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'InspectThigh' }) <= 0,
        goTo: 991
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 987,
    text:
      `
        «Ирина, ты действительно веришь в нас? Я не знаю, что делать, как быть. Так запутался…»
      `,
    buttons: [
      {
        text: '',
        goTo: 988
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 988,
    text:
      `
        В голове всплыла сцена из ванной, где я с жадной страстью ласкал другую...
      `,
    buttons: [
      {
        text: '',
        goTo: 989
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 989,
    text:
      `
        «Достоин ли я своей семьи? Имею ли право лишать Ирину улыбки и счастья, которого она так заслуживает?»
      `,
    buttons: [
      {
        text: '',
        goTo: 990
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 990,
    text:
      `
        «Ничтожество, потерявшее смысл».
      `,
    buttons: [
      {
        text: '',
        goTo: 991
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 991,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'LetsGoCinema' }) >= 1,
        goTo: 992
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'LetsGoCinema' }) <= 0,
        goTo: 995
      }
    ],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 992,
    text:
      `
        Поток мыслей унёс меня к встрече с Лерой, когда я охотно ждал продолжения нашей беседы.
      `,
    buttons: [
      {
        text: '',
        goTo: 993
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 993,
    text:
      `
        «Что я творю? Сам рою себе яму, отдаляясь от семьи».
      `,
    buttons: [
      {
        text: '',
        goTo: 994
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 994,
    text:
      `
        «Такого отношения заслуживает Ирина?»
      `,
    buttons: [
      {
        text: '',
        goTo: 995
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 995,
    text:
      `
        Чувствуя, что теряю контроль, я вскочил из-за стола. 
      `,
    buttons: [
      {
        text: '',
        goTo: 996
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 996,
    text:
      `
        — Большое спасибо за чай, но мне пора бежать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 997
      }],
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 997,
    text:
      `
        Девушка поднялась следом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 998
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 998,
    text:
      `
        — Я провожу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 999
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 999,
    text:
      `
        Мы вышли в прихожую. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1000
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1000,
    text:
      `
        — Ещё раз спасибо за гостеприимство. Позвольте оставить Вам свой номер. Если нужна будет помощь, звоните в любое время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1001
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Tragic.mp3'),
    speakerL: 'Константин',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.F, 'Konstantin_Part02') },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1001,
    text:
      `
        Жена растерянно замерла, ощутив неловкость: записать контакты чужого мужчины — это как-то… неправильно, наверное? 
      `,
    buttons: [
      {
        text: '',
        goTo: 1002
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1002,
    text:
      `
        Я уже рассчитывал на отрицательный ответ, как вдруг девушка живо кивнула:
      `,
    buttons: [
      {
        text: '',
        goTo: 1003
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1003,
    text:
      `
        — Диктуйте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1004
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1004,
    text:
      `
        Я оставил свои контакты и ещё раз улыбнулся. Прежде чем закрыть за мной дверь, Ирина промолвила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 1005
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1005,
    text:
      `
        — Что бы Вы ни натворили в прошлом, рискуйте. Выгрызайте себе возможности. Делайте что угодно, но верните свою семью. Если она Вам и вправду нужна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1006
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Media/Images/F/Persons/Irina_NoCoat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1006,
    text:
      `
        Сказав это, она продолжала смотреть глазами, в которых плескалось отчаяние. Или это было отражение моих собственных глаз?
      `,
    buttons: [
      {
        text: '',
        goTo: 1007
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1007,
    text:
      `
        Поджав губы, я с трудом выдавил улыбку. И, развернувшись, ушёл.
      `,
    buttons: [
      {
        text: '',
        goTo: 1008
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1008,
    text:
      `
        За спиной раздался голос моего сына, обращающегося к матери:
      `,
    buttons: [
      {
        text: '',
        goTo: 1009
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1009,
    text:
      `
        — Мам, а папа скоро вернётся?
      `,
    buttons: [
      {
        text: '',
        goTo: 1010
      }],
    speakerL: 'Марк',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Mark_Coat.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1010,
    text:
      `
        Ответа я не услышал… 
      `,
    buttons: [
      {
        text: '',
        goTo: 1013
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 1011,
    text:
      `
        — Не буду тратить Ваше время. Чудесного вечера! 
      `,
    buttons: [
      {
        text: '',
        goTo: 1012
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1012,
    text:
      `
        Девушка улыбнулась, и мы попрощались. Жена с сыном зашли в подъезд, я же вновь опустился на излюбленную скамейку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1013
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1013,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 1504 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 1504,
    text:
      `
        Вариантов было немного. Необходимо принять решение сию секунду, ибо дальше так продолжаться просто не может. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1014
      }],
    music: require('../../../../Media/Audio/F/Music/Theme_Tragic.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1014,
    text:
      `
        Пальцы сжимали шкатулку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1015
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1015,
    text:
      `
         «Разбить? Или нет? А если нет, то что делать дальше…»
      `,
    buttons: [
      {
        text: '',
        goTo: 1016
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1016,
    text:
      `
        Звук уведомления отвлёк от размышлений. Я достал из кармана мобильный и взглянул на экран. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1017
      }],
    simple: require('../../../../Media/Audio/F/Sounds/PhoneAlert.mp3'),
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1017,
    text:
      `
        Сердце пропустило удар. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1018
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1018,
    text:
      `
        Сообщение от неизвестного содержало одно‑единственное слово
      `,
    buttons: [
      {
        text: '',
        goTo: 1019
      }],
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1019,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    smartphone: { chatId: 'FPart02Unknown', goTo: 1020 },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  },

  {
    id: 1020,
    text:
      `
        «Что мне, чёрт возьми, со всем этим делать?!»
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('F', 'Спешл', 'Часть 3', '0')
        }
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Media/Images/F/Persons/Konstantin_Coat.png'),
    achievement: { story: EStoriesEn.F, name: 'NoTime' },
    imageBack: require('../../../../Media/Images/F/Backgrounds/Street_Near_Home_Day.jpg')
  }
])
