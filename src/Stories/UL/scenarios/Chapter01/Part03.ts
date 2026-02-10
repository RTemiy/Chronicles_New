import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { redFlash, whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.UL, chapterName: 'Глава 1', partName: 'Часть 3', code: '0' }, [
  {
    id: 0,
    text:
      `
        Открыв глаза после бессонной ночи, я вдруг осознала, что сегодняшний день может многое расставить на свои места. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Audio/UL/Main.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 1,
    text:
      `
        Я собралась, позавтракала тем, что нашла в холодильнике и отправилась на прием к врачу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 2,
    text:
      `
        Джозеф сразу же заприметил меня, и, тепло улыбнувшись, поприветствовал:
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    stats: [{ story: EStoriesEn.UL, value: 0, category: 'Person', id: 'Doctor' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 3,
    text:
      `
        Доброе утро, Амелия. Как ты себя чувствуешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 4,
    text:
      `
        Здравствуй, Джозеф. Память так и не вернулась, но я готова к новому дню.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 5,
    text:
      `
        Очень правильный настрой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Джозеф ',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 6,
    text:
      `
        Пока доктор снова повторял вчерашнюю процедуру, в дверь постучали. Не дожидаясь ответа, в палату ворвался санитар средних лет и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 7,
    text:
      `
        Джозеф, помнишь те билеты, которые ты с таким тру...
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speaker: 'Санитар',
    imageFront: require('../../../../Images/UL/Persons/Male_Nurse.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 8,
    text:
      `
        Только сейчас он увидел, что врач был не один. Санитар тут же стушевался и неловко продолжил:
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 9,
    text:
      `
        Простите, я зайду позже.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Санитар',
    darkSilhouette: true,
    imageFront: require('../../../../Images/UL/Persons/Male_Nurse.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 10,
    text:
      `
        «Такой забавный».
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 11,
    text:
      `
        Джозеф остановил его и строго произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 12,
    text:
      `
        Говори.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 13,
    text:
      `
        Те билеты, которые ты достал для меня и жены... В общем, она сегодня на работе задержится, и вместо театра я устрою ей ужин дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Санитар',
    darkSilhouette: true,
    imageFront: require('../../../../Images/UL/Persons/Male_Nurse.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 14,
    text:
      `
        Мы благодарны тебе за помощь. Извини, что так вышло. Сходи сам. Не пропадать же добру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'Санитар',
    darkSilhouette: true,
    imageFront: require('../../../../Images/UL/Persons/Male_Nurse.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 15,
    text:
      `
        Джозеф взял билеты, и санитар поспешно удалился.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 16,
    text:
      `
        Любишь театр?
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 17,
    text:
      `
        Да. Я очень избирателен в искусстве. А ты что скажешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 18,
    text:
      `
        Как я отношусь к такому роду мероприятий?
      `,
    buttons: [
      {
        text: 'Да, люблю ходить в театр',
        goTo: 19
      },
      {
        text: 'Это совершенно не мое',
        goTo: 21
      }
    ],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 19,
    text:
      `
        Я даже мечтаю как-нибудь съездить в Китай, чтобы посетить театр «Жемчужина на воде».
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    stats: [{ story: EStoriesEn.UL, value: +1, category: 'Person', id: 'Doctor' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 20,
    text:
      `
        Поразительно! Я бывал там дважды, и это определенно стоит увидеть. Каждый раз прихожу в восторг, словно мальчишка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 21,
    text:
      `
        Мне не удавалось насладиться зрелищем, да и если честно, все те маски, что носят герои — меня пугают.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 22,
    text:
      `
        Наверное, ты бывала в любительских театрах. Возможно, стоит дать ему еще один шанс? Вот я бывал в Китае, даже дважды, и видел «Жемчужину на воде».
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 23,
    text:
      `
        Поразительно! Каждый раз прихожу в восторг, словно мальчишка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 25,
    text:
      `
        Мне кажется, что ты слишком зациклен на возрасте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 26,
    text:
      `
        У меня есть причины.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 27,
    text:
      `
        Джозеф прочистил горло, и, взглянув на меня, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 28,
    text:
      `
        Знаю, что мы познакомились только вчера при таких ужасных обстоятельствах, но... чем не шутит судьба? Может, ты хочешь сходить со мной в театр? 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 29,
    text:
      `
        Только сейчас я обратила внимание на кольцо на безымянном пальце, и задалась немым вопросом. Доктор, похоже, смутился, но ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 30,
    text:
      `
        Я знаю, что ты думаешь, но я не женат. А кольцо — скорее напоминание о прошлом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 31,
    text:
      `
        Я буду ждать тебя сегодня в шесть вечера в Большом театре. Если ты придешь, то я пойму, что мои чувства взаимны. Если нет, то останемся хорошими знакомыми.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 32,
    text:
      `
        Я смутилась, ведь видела перед собой, как мне казалось, уязвимого мужчину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 33,
    text:
      `
        Мне нечего было ответить. Но того и не требовалось. Наше молчание о многом говорило за нас. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 34,
    text:
      `
        Моя процедура была закончена, и я ушла, чтобы обдумать происходящее. Размышления прервал гудок телефона, и, посмотрев на экран, я увидела звонок от Дэвида.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    simple: require('../../../../Audio/UL/Mobile.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 35,
    text:
      `
        Привет-привет! Вот решил позвонить, проверить, как ты? 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 36,
    text:
      `
        Привет, Дэвид. Я рада слышать твой голос. Все отлично.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 37,
    text:
      `
        Слушай, я подумал, а чего тебе дома сидеть? Может прогуляемся вместе?
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 38,
    text:
      `
        Отличная идея, когда?
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 39,
    text:
      `
        Да кого я обманываю... Знаю, что это не телефонный разговор, но если промолчу, то буду козлом.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 40,
    text:
      `
        Ты мне больше, чем нравишься, Амелия. Я долго не мог уснуть, а когда проснулся, то первые мысли были о тебе. Все думал, как ты?
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 41,
    text:
      `
        Боялся быть навязчивым, не хотел надоедать, учитывая то, что ты проходишь через переломный момент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 42,
    text:
      `
        Просто знай, что ты мне нравишься, Амелия. И я хочу, чтобы у нас все получилось.  Я настроен серьезно.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 43,
    text:
      `
        Поэтому я приглашаю тебя не просто погулять, а на настоящее свидание.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 44,
    text:
      `
        Сейчас я на работе, освобожусь в пять. Можем встретиться ближе к шести вечера у меня. Если ты не захочешь, то я все пойму, и постараюсь сохранить нашу дружбу.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 45,
    text:
      `
        Я скину адрес. Надеюсь, до встречи, Амелия!
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 46,
    text:
      `
        Он тут же сбросил звонок, оставив меня в полном недоумении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 47,
    text:
      `
        Моя жизнь изменилась в один момент, и что же мне делать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 48,
    text:
      `
        Я решила немного прогуляться. Подумать. Взвесить все «за» и «против».
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 49,
    text:
      `
        Отчего-то я вспомнила Валентину. Как она сейчас? Почему мне, собственно, это должно быть интересно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 50,
    text:
      `
        Оборвав свои мысли, я стала вспоминать все те немногие моменты, которые я разделила с новыми встретившими меня людьми. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 51,
    text:
      `
        Пол. Милый Пол, назвавший меня своей девушкой. Обаятельный парень, готовый ради меня на все. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    ghostSilhouette: true,
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 52,
    text:
      `
        Серьезный и немного замкнутый доктор с тяжелым грузом на сердце. Он очень заботливый, внимательный. С ним я чувствую себя как за каменной стеной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    ghostSilhouette: true,
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 53,
    text:
      `
        Добрый, забавный Дэвид. С ним никогда не бывает скучно, а без его поддержки мне было бы очень трудно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    ghostSilhouette: true,
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 54,
    text:
      `
        Каждый из них заслуживает быть счастливым, но кто мне нравится больше? С кем я готова попробовать строить серьезные отношения?
      `,
    buttons: [
      {
        text: 'Дэвид',
        goTo: 55
      },
      {
        text: 'Пол',
        goTo: 100
      },
      {
        text: 'Джозеф',
        goTo: 164
      },
      {
        text: 'Остаться одной',
        goTo: 204
      }
    ],
    music: require('../../../../Audio/UL/Thinking.mp3'),
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 55,
    text:
      `
        Я не хотела больше обманывать себя. Еще раз набрав Дэвида, мы договорились о встрече, и он скинул мне адрес. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 56,
    text:
      `
        Парень встретил меня трепетными объятиями, когда я пришла к нему в заветные шесть вечера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 57,
    text:
      `
        Уткнувшись в сильное мужское плечо, я обрела свое спокойствие и почувствовала, что сделала правильный выбор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 58,
    text:
      `
        Потому что рядом с ним мне было хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 59,
    text:
      `
        Дэвид взял меня на руки, аккуратно кладя на диван. Мы не разнимали взглядов, а наши руки были связаны друг с другом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 60,
    text:
      `
        Амелия, я так счастлив! Я обещаю, что сделаю все возможное, чтобы ты больше никогда не страдала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 61,
    text:
      `
        Теперь все будет хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 300,
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
          return statsManager.get({ story: EStoriesEn.UL, category: 'Person', id: 'David' }) >= 4
        },
        goTo: 62
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UL, category: 'Person', id: 'David' }) < 4
        },
        goTo: 77
      }
    ]
  },

  {
    id: 62,
    text:
      `
        Я бы хотел тебя еще кое с кем познакомить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 63,
    text:
      `
        В комнату вбежала маленькая собачка. Та самая, о которой Дэвид рассказал при первой нашей встрече. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    simple: require('../../../../Audio/UL/Dog.mp3'),
    imageFront: require('../../../../Images/UL/Persons/Dog.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 64,
    text:
      `
        Собачка настороженно смотрела на меня, но вскоре запрыгнула мне на колени, позволяя себя погладить.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Images/UL/Persons/Dog.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 65,
    text:
      `
        Я не смогла удержаться и затискала этот пушистый комочек шерсти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageFront: require('../../../../Images/UL/Persons/Dog.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 66,
    text:
      `
        Похоже, вы нашли общий язык быстрее, чем я предполагал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 67,
    text:
      `
        Ох, Дэвид. Он прелесть. Как его зовут? 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 68,
    text:
      `
        Бобби. 
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 69,
    text:
      `
        Дэвид стал гладить пса на моих коленях. В его глазах читалась искренняя привязанность к своему питомцу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 70,
    text:
      `
        Неожиданно его рука соскочила, оказавшись на моей ноге. Он стал водить ей нежными движениями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 71,
    text:
      `
        Я не сопротивлялась. Осмелилась взглянуть на него. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 72,
    text:
      `
        Все произошло стремительно. Бобби спрыгнул с моих колен, и в тот момент губы Дэвида соприкоснулись с моими. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 73,
    text:
      `
        Он был осторожен. Чуток. Но я чувствовала, как с каждой секундой он овладевал мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 74,
    text:
      `
        Мы пробыли в этой эйфории несколько минут. Наши руки не стеснялись исследовать друг друга, но все же, еще было рано переходить черту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 75,
    text:
      `
        Дэвид...
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 76,
    text:
      `
        В следующий раз я не сдержусь, дорогая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/David_Home.jpg')
  },

  {
    id: 77,
    text:
      `
        Несколько месяцев мы обживались на новом месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 78,
    text:
      `
        Я оборвала все, что связывало меня с прошлым. Уволилась из издательства, в котором, оказывается, работала год. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 79,
    text:
      `
        Больше ничего не держало меня в этом городе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 80,
    text:
      `
        Я ждала Дэвида с работы, сидя в уютном парке, наслаждаясь погодой.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 81,
    text:
      `
        Он не заставил себя долго ждать. Пришел с букетом милых ромашек. Подсев ко мне, задорно проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 82,
    text:
      `
        Заявление я отдал. Все кончено. Как говорится — мосты сожжены. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Shirt.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 83,
    text:
      `
        Я улыбнулась, принимая букет и объятия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 84,
    text:
      `
        Значит, мы можем отправляться? 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 85,
    text:
      `
        Да! Осталось совсем немного. Ты представляешь, мы сможем увидеть целый мир. Как я и обещал, я подарю тебе его. И только незабываемые ощущения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Shirt.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 86,
    text:
      `
        Я поцеловала его в щеку, чувствуя легкое покалывание от щетины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 87,
    text:
      `
        А она...? Ты все же сделал, что хотел?
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 88,
    text:
      `
        Я обнародую ее деяния. Пусть она знает, что ничего не остается безнаказанным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Shirt.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 89,
    text:
      `
        Может быть он и был прав. Но стоит ли все это того, чтобы и дальше продолжать этот порочный круг ненависти? 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 90,
    text:
      `
        Я доверяю тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 91,
    text:
      `
        После небольшой прогулки, мы отправились домой собирать вещи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 92,
    text:
      `
        Примерно через месяц, мы отправились в путешествие, длиною в жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Car.jpg')
  },

  {
    id: 93,
    text:
      `
        Я ни о чем не жалела. Моя жизнь наполнилась только яркими новыми воспоминаниями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Car.jpg')
  },

  {
    id: 94,
    text:
      `
        Вместе с Дэвидом, который сидел за рулем, крепко сжимая мою руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Car.jpg')
  },

  {
    id: 95,
    text:
      `
        Счастье было только в наших возможностях и желаниях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Car.jpg')
  },

  {
    id: 96,
    text:
      `
        И пусть по началу было тяжело, но без Валентины я бы никогда не обрела ту любовь, которую так трепетно имею. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Car.jpg')
  },

  {
    id: 97,
    text:
      `
        Наше путешествие только начинается, но моя история подходит к концу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Car.jpg')
  },

  {
    id: 98,
    text:
      `
        Спасибо моему валентину за возможность быть тем, кем я на самом деле желала быть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Car.jpg')
  },

  {
    id: 99,
    text:
      `
        Свободной и любящей девушкой. В объятиях самого дорого мне человека. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UL', 'Глава 1', 'Часть 4', '0')
        }
      }],
    achievement: { story: EStoriesEn.UL, name: 'DavidEnding' },
    imageBack: require('../../../../Images/UL/Backgrounds/Car.jpg')
  },

  {
    id: 100,
    text:
      `
        Я была уверена, что это верное решение. Взяв мобильный телефон, я прочитала смс от Пола, в котором говорилось о месте встрече. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 101,
    text:
      `
        Он сидел за одним из столиков, медленно попивая пузырьковую жидкость. Его взгляд казался слишком отрешенным.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 102,
    text:
      `
        Но при виде меня, он тут же встал, подошел и крепко обнял. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 103,
    text:
      `
        Амелия, дорогая, как же я рад тебя видеть. Я не сомневался, что этот вечер будет самым прекрасным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 104,
    text:
      `
        Пол...
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 105,
    text:
      `
        Я прижалась к нему, чувствуя, как бешено колотится его сердце. И как немного трясутся руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 106,
    text:
      `
        Давай присядем. Впереди долгий вечер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 107,
    text:
      `
        Он галантно отодвинул стул, приглашая меня сесть. Мы провели чудесный вечер, поедая аппетитные блюда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 301,
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
          return statsManager.get({ story: EStoriesEn.UL, category: 'Person', id: 'Paul' }) >= 2
        },
        goTo: 108
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UL, category: 'Person', id: 'Paul' }) < 2
        },
        goTo: 131
      }
    ]
  },

  {
    id: 108,
    text:
      `
        Сейчас ты здесь, и это многое значит для меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 109,
    text:
      `
        Амелия, есть еще кое-что, что я хотел бы тебе показать.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 110,
    text:
      `
        Он нежно взял мою руку и повел меня куда-то по крутым ступенькам вверх. 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Restaurant.jpg')
  },

  {
    id: 111,
    text:
      `
        Удивительный вечерний пейзаж раскинулся передо мной, заставляя всматриваться в любопытные детали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 112,
    text:
      `
        Милая Амелия... 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 113,
    text:
      `
        Его объятия продолжали согревать меня, вопреки прохладному ветру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 114,
    text:
      `
        Я не знаю, как мне выразить то, что я чувствую. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 115,
    text:
      `
        Ты всегда была центром моего мира. И как я ранее говорил — я хочу строить с тобой совместное будущее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 116,
    text:
      `
        Не буду скрывать, но потеря памяти и все произошедшее очень напугало меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 117,
    text:
      `
        Пол, но...
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 118,
    text:
      `
        Позволь мне договорить, Амелия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 119,
    text:
      `
        Его рука коснулась моей щеки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 120,
    text:
      `
        Но я больше не собираюсь убегать. Я люблю тебя. И всегда любил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 121,
    text:
      `
        Он встал на одно колено и открыл коробочку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 122,
    text:
      `
        Ты выйдешь за меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Objects/Ring.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 123,
    text:
      `
        Счастливые эмоции захлестнули меня вместе со слезами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 124,
    text:
      `
        Да, Пол, да! 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Objects/Ring.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 125,
    text:
      `
        В следующую секунду наши губы соприкоснулись, захлебываясь в бурной страсти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 126,
    text:
      `
        Наконец-то мы были едины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 127,
    text:
      `
        Не отрываясь от моих губ, Пол надел кольцо на мой палец. Он поднял меня и начал кружить вокруг себя, продолжая покрывать поцелуями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 128,
    text:
      `
        Амелия, я клянусь тебе, что всегда буду рядом. Поддержу любое твое решение. Заберу все твои страхи и печали. Мы начнем все сначала, с чистого листа.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 129,
    text:
      `
        Я улыбалась, располагаясь на его груди. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop_Restaurant.jpg')
  },

  {
    id: 131,
    text:
      `
        Следующие несколько месяцев мы обживались на новом месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 132,
    text:
      `
        Мне удалось восстановиться в должности, и я продолжила работать на издательство. Правда, дистанционно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 133,
    text:
      `
        Я ждала Пола с работы, сидя в уютном парке, наслаждаясь погодой.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 134,
    text:
      `
        Он не заставил себя долго ждать. Пришел с букетом белых роз. Подсев ко мне, проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 135,
    text:
      `
        Дорогая, мне удалось уладить все вопросы с документами. Теперь эта квартира официально наша!
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 136,
    text:
      `
        Я не верю, что ты решился перенести нашу жизнь в другую страну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 137,
    text:
      `
        Помнишь? Все с чистого листа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 138,
    text:
      `
        К тому же, мне и правда не слишком нравилась та квартира. Я думаю, что в этой нам будет гораздо комфортнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 139,
    text:
      `
        А она...? Ты все же сделал, что хотел?
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 140,
    text:
      `
        Я обнародую ее деяния. Пусть она знает, что ничего не остается безнаказанным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 141,
    text:
      `
        Может быть он и был прав. Но стоит ли все это того, чтобы и дальше продолжать этот порочный круг ненависти? 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 142,
    text:
      `
        Я доверяю тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 143,
    text:
      `
        Неожиданно я схватилась за голову. 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 144,
    text:
      `
        Странные образы. Боль. Суета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Memory.jpg')
  },

  {
    id: 145,
    text:
      `
        Она все разрушила! Но она и помогла оказаться мне здесь. Обрести истинную любовь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    simple: require('../../../../Audio/UL/Whisper.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Memory.jpg')
  },

  {
    id: 146,
    text:
      `
        Амелия, ты слышишь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe_Memory.jpg')
  },

  {
    id: 147,
    text:
      `
        Что... Пол? Так... Вот оно как. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    beforeBegin: whiteFlash,
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 148,
    text:
      `
        Опять боли? Может быть примешь лекарство? 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 149,
    text:
      `
        А то что? Мой лев отругает меня за непослушание? 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 150,
    text:
      `
        Он изрядно удивился такому смелому высказыванию.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 151,
    text:
      `
        Лев? Погоди. Ты не называла меня так с того момента, как... Неужели...?
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 152,
    text:
      `
        Ты вспомнила? 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 153,
    text:
      `
        Кажется, да. Но частично. Но мои чувства... Пол — это потрясающе. Я люблю тебя! 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 154,
    text:
      `
        Иди ко мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speaker: 'Пол',
    imageFront: require('../../../../Images/UL/Persons/Paul_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 155,
    text:
      `
        Мы обнялись, искренне любуясь друг другом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/England_Park.jpg')
  },

  {
    id: 156,
    text:
      `
        Примерно через месяц мы распаковали все коробки и зажили счастливо в новом доме. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Paul_Home.jpg')
  },

  {
    id: 157,
    text:
      `
        Я ни о чем не жалела. Моя жизнь наполнилась только яркими новыми воспоминаниями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Paul_Home.jpg')
  },

  {
    id: 158,
    text:
      `
        Вместе с Полом, который хранил верность своим словам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Paul_Home.jpg')
  },

  {
    id: 159,
    text:
      `
        Любовь и стремления двигали нас только вперед.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Paul_Home.jpg')
  },

  {
    id: 160,
    text:
      `
        И пусть по началу было тяжело, но без Валентины я бы никогда не обрела ту любовь, которую так трепетно имею. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Paul_Home.jpg')
  },

  {
    id: 161,
    text:
      `
        Наша жизнь только начинается, но моя история подходит к концу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Paul_Home.jpg')
  },

  {
    id: 162,
    text:
      `
        Спасибо моему валентину за возможность быть тем, кем я на самом деле желала быть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Paul_Home.jpg')
  },

  {
    id: 163,
    text:
      `
        Решительной и помнящей все девушкой. В объятиях самого дорого мне человека. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UL', 'Глава 1', 'Часть 4', '0')
        }
      }],
    achievement: { story: EStoriesEn.UL, name: 'PaulEnding' },
    imageBack: require('../../../../Images/UL/Backgrounds/Paul_Home.jpg')
  },

  {
    id: 164,
    text:
      `
        Почему-то внутренний голос говорил, что это правильный выбор. Джозеф был именно тем, кто был мне нужен.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 165,
    text:
      `
        Я увидела его издалека. Мужчина выглядел немного нервным, поглядывая на часы.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 166,
    text:
      `
        «Он так ожидает нашей встречи? Неужели, я ему и правда понравилась?»
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 167,
    text:
      `
        Мне было приятно видеть его с такой стороны, и, больше не оттягивая судьбу, я направилась к нему.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 168,
    text:
      `
        Джозеф сразу же выделил меня из толпы и не смог сопротивляться своим чувствам.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 169,
    text:
      `
        Амелия? Ты все-таки пришла.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 170,
    text:
      `
        Конечно пришла. Как я могла не прийти?
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 171,
    text:
      `
        Его взгляд по-доброму изучал меня, а мужские руки нежно обвили мою талию.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 172,
    text:
      `
        Решила дать театру еще один шанс?
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 173,
    text:
      `
        Я прекрасно поняла, что он говорил метафорой, и ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 174,
    text:
      `
        Возможно, я просто не пыталась понять суть. Но теперь я все вижу ясно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 175,
    text:
      `
        Я с улыбкой на лице смотрела на своего доктора, который с нескрываемой лаской и добротой любовался мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 176,
    text:
      `
        Сейчас ничто вокруг не имело значения, потому что нас захлестнуло счастье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 177,
    text:
      `
        Мы великолепно провели этот вечер: в компании Джозефа я наконец-то смогла ощутить любовь и увидеть, как умело актеры передавали свои чувства.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Theatre.jpg')
  },

  {
    id: 178,
    text:
      `
        За эти полгода мы с Джозефом сильно сблизились. Много времени проводили у него, часто выезжали на природу.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Doctor_Home.jpg')
  },

  {
    id: 302,
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
          return statsManager.get({ story: EStoriesEn.UL, category: 'Person', id: 'Doctor' }) >= 3
        },
        goTo: 179
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UL, category: 'Person', id: 'Doctor' }) < 3
        },
        goTo: 187
      }
    ]
  },

  {
    id: 179,
    text:
      `
        Джозеф ничего не скрывал от меня, и, пускай и не сразу, но открыл мне то, что очень долго тревожило его сердце и душу.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Doctor_Home.jpg')
  },

  {
    id: 180,
    text:
      `
        Мы часто навещали одну могилу на кладбище, куда Джозеф приносил белые гладиолусы.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Grave.jpg')
  },

  {
    id: 181,
    text:
      `
        Плита уже почти заросла мхом, но можно было прочитать пару словосочетаний: любимой жене.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Grave.jpg')
  },

  {
    id: 182,
    text:
      `
        И я наконец-то смогла по-настоящему понять его историю, потерю, ощутить всю боль его переживаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Grave.jpg')
  },

  {
    id: 183,
    text:
      `
        Я увидела его путь: от потери жены до спасения сотни жизней, чему была несказанно рада.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Grave.jpg')
  },

  {
    id: 184,
    text:
      `
        Пока он трепетно ухаживал за могилой, я стояла неподалеку, позволяя любимому побыть наедине со своими мыслями.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Grave.jpg')
  },

  {
    id: 185,
    text:
      `
        И меня нисколько не пугало то, что в его жизни я была не единственной любимой женщиной.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 187,
    text:
      `
        Красота и гармония царили не только в наших отношениях, но и в окружении.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 188,
    text:
      `
        Амелия! Ты здесь. А я тебя обыскался.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 189,
    text:
      `
        Мужчина ласково обнял меня, и, поцеловав в губы, осмотрел сад.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 190,
    text:
      `
        Ты смогла сделать невозможное: оживила эти цветы, как и меня. Понимаю, почему ты каждый раз уходишь именно сюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 191,
    text:
      `
        Это место благоухает ароматами роз, и нам здесь нравится.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 192,
    text:
      `
        Я погладила свой округлившийся животик, а Джозеф не смог сдержать улыбку.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 193,
    text:
      `
        Наша девочка уже выбрала себе имя? 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 194,
    text:
      `
        Роза?
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 195,
    text:
      `
        Прекрасная, восхитительная Лили.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Джозеф',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Indoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 196,
    text:
      `
        Я улыбнулась и прильнула к Джозефу, любуясь прекрасным садом.
      `,
    buttons: [
      {
        text: '',
        goTo: 650
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 650,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg'),
    cutScene: { video: require('../../../../Images/UL/CutScenes/AmeliaAndDoctor.mp4'), goTo: 197 }
  },

  {
    id: 197,
    text:
      `
        Я ни о чем не жалела. Моя жизнь наполнилась незабываемыми моментами и бесконечным счастьем.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 198,
    text:
      `
        Вместе с Джозефом, который стал моей поддержкой и любимым мужем, от которого я ждала прекрасную дочку.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 199,
    text:
      `
        Любовь и счастье стали нашей путеводной звездой.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 200,
    text:
      `
        И пусть по началу было тяжело, но без Валентины я бы никогда не обрела ту любовь, которую так трепетно имею. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 201,
    text:
      `
        И пускай наша жизнь только начинается, но моя история подходит к концу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 202,
    text:
      `
        Спасибо моему валентину за возможность быть тем, кем я на самом деле желала быть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 203,
    text:
      `
        В теплых объятиях любимого мужчины с его ребенком под моим сердцем.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UL', 'Глава 1', 'Часть 4', '0')
        }
      }],
    achievement: { story: EStoriesEn.UL, name: 'DoctorEnding' },
    imageBack: require('../../../../Images/UL/Backgrounds/Garden.jpg')
  },

  {
    id: 204,
    text:
      `
        Слишком много нужно было решить, слишком ко многому привыкнуть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 205,
    text:
      `
        Я не могла позволить себе никаких отношений, пока не разберусь с собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Street_Day.jpg')
  },

  {
    id: 206,
    text:
      `
        Вернувшись домой, я отправила всем парням сообщения, что не приду на встречу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 207,
    text:
      `
        Никто из них не стал ничего уточнять. Лишь только Джозеф напомнил про регулярный прием лекарств. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 208,
    text:
      `
        Мне казалось, что я наконец-то освободилась от оков обязательств перед кем-либо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 209,
    text:
      `
        Не нужно ничего вспоминать, что-то отдавать взамен, пытаться исцелить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 210,
    text:
      `
        Моя жизнь принадлежала только мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 211,
    text:
      `
        И я не собираюсь тратить ее попусту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 212,
    text:
      `
        Немного подремав, я взяла ноутбук и принялась писать свою историю.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Bedroom.jpg')
  },

  {
    id: 213,
    text:
      `
        Спустя несколько месяцев непрерывной работы, моя книга под названием «Непредсказуемая любовь» стала хитом продаж. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 214,
    text:
      `
        Никто, разумеется, не мог предполагать, что написанное там — чистая правда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 215,
    text:
      `
        Разве что одна сотрудница могла догадываться об этом.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 216,
    text:
      `
        Валентина все еще продолжала работать, несмотря на наши с ней взаимоотношения. По большей части она старалась не замечать меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 217,
    text:
      `
        Однажды я вышла попить кофе и случайно столкнулась с ней лицом к лицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 218,
    text:
      `
        Ну, привет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 219,
    text:
      `
        Привет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 220,
    text:
      `
        Ее незаинтересованность отторгала. Она буквально уничтожала все последние надежды на сохранение человечности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 221,
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
          return statsManager.get({ story: EStoriesEn.UL, category: 'Person', id: 'Valentina' }) >= 1
        },
        goTo: 222
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UL, category: 'Person', id: 'Valentina' }) < 0
        },
        goTo: 229
      }
    ]
  },

  {
    id: 222,
    text:
      `
        Сама себе удивляясь, но я просто отпустила ситуацию с ней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 223,
    text:
      `
        Знаешь, Валентина. Я просто хочу, чтобы ты знала. Я не держу на тебя зла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 224,
    text:
      `
        Мне плевать. Ничего никому я доказывать не собираюсь. Если мне потребуется уничтожить тебя, то я сделаю это через медийность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 225,
    text:
      `
        Как ты могла заметить — мой продукт пользуется популярностью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 226,
    text:
      `
        Тебе мало того, что ты сделала? Меня пытают вопросами, почему мы с тобой не общаемся. Они догадываются...
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 227,
    text:
      `
        Об этом тебе стоило подумать раньше. Прежде, чем ставить мне подножки.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 228,
    text:
      `
        А теперь прощай. Нужно раздать автографы моим фанатам.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 229,
    text:
      `
        И я не собиралась ее прощать. Ведь эта девушка хотела уничтожить мою жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 230,
    text:
      `
        Знаешь, Валентина. Я просто хочу, чтобы ты знала. Твое будущее в моих руках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 231,
    text:
      `
        И я не хочу забывать это, и настроена целиком и полностью уничтожить тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 232,
    text:
      `
        Как ты могла заметить — мой продукт пользуется популярностью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 233,
    text:
      `
        Тебе мало того, что ты сделала? Меня пытают вопросами, почему мы с тобой не общаемся. Они догадываются...
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 234,
    text:
      `
        Об этом тебе стоило подумать раньше. Прежде, чем ставить мне подножки.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 235,
    text:
      `
        А теперь мне пора идти. Нужно раздать автографы моим фанатам, и наконец-то намекнуть, что сюжет истории был основан на реальных событиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Publishing.jpg')
  },

  {
    id: 237,
    text:
      `
        И пускай сейчас я была одна, но я понимала, что для полного счастья мне не нужен валентин.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 238,
    text:
      `
        Я решила сходить на новый фильм, чтобы скрасить одинокий вечер,  и, купив попкорн, стала пробираться в нужный ряд.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 239,
    text:
      `
        В какой-то момент моя нога зацепилась о кресло, и, споткнувшись, я упала, рассыпав попкорн на незнакомого молодого человека.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 240,
    text:
      `
        Прости! Я тебя испачкала?
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 241,
    text:
      `
        Ничего страшного, кто же будет злиться на такую красивую девушку?
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speaker: 'Парень',
    imageFront: require('../../../../Images/UL/Persons/Victor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 242,
    text:
      `
        Я смущенно улыбнулась и быстро поднялась, приняв руку парня, и, пройдя мимо, нашла свое место.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 243,
    text:
      `
        Он не переставал поглядывать на меня. А через некоторое время осмелился подсесть и спросить:
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 244,
    text:
      `
        Ты Амелия? 
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speaker: 'Парень',
    imageFront: require('../../../../Images/UL/Persons/Victor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 245,
    text:
      `
        Да, это я.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 246,
    text:
      `
        Его глаза заблестели, и, улыбнувшись, он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 247,
    text:
      `
        Меня зовут Виктор. И я твой фанат. Книга «Непредсказуемая любовь» — это шедевр.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/UL/Persons/Victor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 248,
    text:
      `
        Благодарю, Виктор.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 249,
    text:
      `
        Я достаточно часто получала лестные отзывы от поклонников. Но в этот раз чувство было гораздо приятнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 250,
    text:
      `
        Не сочти меня маньяком, но я хотел бы как-нибудь встретиться с тобой, например, в кафе. Главное, чтобы твой молодой человек не возражал.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/UL/Persons/Victor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 251,
    text:
      `
        Я одна.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 252,
    text:
      `
        Неужели? В такой праздник? Тогда я просто обязан пригласить тебя на свидание. Что скажешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/UL/Persons/Victor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 253,
    text:
      `
        Я подумаю... 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_New.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 254,
    text:
      `
        Виктор улыбнулся, и, оглядев полупустой зал, занял кресло рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 255,
    text:
      `
        И пускай фильм был не очень интересный, зато прекрасный собеседник сумел скрасить мой вечер.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cinema.jpg')
  },

  {
    id: 256,
    text:
      `
        Мы стали часто гулять вместе, общаться, и оба, похоже, начали испытывать чувства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 257,
    text:
      `
        Мы долго их скрывали, пока, в один прекрасный момент, парень не поцеловал меня в красивом парке.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 258,
    text:
      `
        С этого момента больше не было смысла прятаться за маской дружбы.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 259,
    text:
      `
        Я ни о чем не жалела. Моя жизнь наполнилась веселыми моментами и счастьем рядом с Виктором.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 260,
    text:
      `
        Он стал единственным фанатом, который смог завоевать мое сердце. Парень поддерживал мою работу, а когда я выгорала, подбадривал мудрым словом.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 261,
    text:
      `
        Он никогда не позволял мне скучать, и с его любовью я ощущала себя нужной и самой желанной девушкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 262,
    text:
      `
        И пусть поначалу было тяжело, но без Валентины я бы никогда не обрела ту любовь, которую так трепетно имею. 
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 263,
    text:
      `
        И пускай наша жизнь только начинается, но моя история подходит к концу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 264,
    text:
      `
        Спасибо моему валентину за возможность быть тем, кем я на самом деле желала быть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  },

  {
    id: 265,
    text:
      `
        «Непредсказуемая любовь» становится первым бестселлером, который сделал меня популярным автором.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UL', 'Глава 1', 'Часть 4', '0')
        }
      }],
    achievement: { story: EStoriesEn.UL, name: 'Part03Completed' },
    imageBack: require('../../../../Images/UL/Backgrounds/Park.jpg')
  }
])
