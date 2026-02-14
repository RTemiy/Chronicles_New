import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { firstChoiceMessage, previousSlideMessage } from '../../../../Utils/textConsts'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.OTV, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    cutScene: { video: require('../../../../Media/Images/OTV/Cutscenes/Prologue.mp4'), goTo: 1 },
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 1,
    text:
      `
        Сейчас же я просто наслаждалась мрачной атмосферой заполненных улиц, украшенных зданий и концертом на главной площади города.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    music: require('../../../../Media/Audio/OTV/Prologue.mp3'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 2,
    text:
      `
        Надевать на себя смешные побрякушки в виде черепов и метел не хотелось, поэтому остановилась на классическом образе — черном платье с пышной юбкой, пальто, сапожках на каблуках, в макияже сделала акцент на глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 3,
    text:
      `
        «Ярко, но гармонично, для Хэллоуина вполне уместно».
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 4,
    text:
      `
        Я вышла с колледжа еще до концерта, чтобы любоваться декорациями и поглощать атмосферу любимого дня в году. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 5,
    text:
      `
        Улица была оживленная: тут и там ходили люди, большинство из которых были в масках или же с разрисованными лицами. Все по-своему прониклись праздником и веселились.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 6,
    text:
      `
        Смотря по сторонам, я удивлялась тому, как разнообразно украшены дома: в одном из окон «высовывались» щупальца осьминога, в другом — летали призраки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 7,
    text:
      `
        И это еще не все: свечи в виде мумий, призраки из воздушных шаров, змеи, что порхали в воздухе и куда же без тыквы? Повсюду стояли фонари Джека.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 8,
    text:
      `
        Конечно, попадались и хмурые люди, что закрывали окна и балконы, чтобы оградить себя от громкой музыки.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 9,
    text:
      `
        Так же находились индивидуумы, поддерживающие идеи о том, что данный праздник — это увеселение бесов и колдунов, праздник дьявольщины и исчадий ада.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 10,
    text:
      `
         «Ну и пусть. Чем же может жить человек, если в обыкновенном празднике видит негатив?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 11,
    text:
      `
         «Если выбор стоит между апатией и весельем, то почему бы не провести время с пользой, чтобы остались воспоминания?»
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 12,
    text:
      `
        Я направилась прямо в центр, где была сосредоточена основная масса «нечисти». 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 13,
    text:
      `
        На сцене появилась группа и начала исполнять свой хит, который взорвал все музыкальные чарты. Девушки кричали, привлекая внимание главного солиста.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    simple: require('../../../../Media/Audio/OTV/Scream_Girl.mp3'),
    imageFront: require('../../../../Media/Images/OTV/Persons/Artist.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 14,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/OTV/Cutscenes/Concert.mp4'), goTo: 15 },
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 15,
    text:
      `
        Мое внимание было полностью сосредоточено на сцене до тех пор, пока кто-то не задел меня плечом. Я пошатнулась и тут же выпалила:
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    music: require('../../../../Media/Audio/OTV/Concert.mp3'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 16,
    text:
      `
        Эй, а осторожнее можно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 17,
    text:
      `
        …
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Парень',
    imageFront: require('../../../../Media/Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 18,
    text:
      `
        Парень ничего не ответил, как будто и вовсе и не заметил. Прошел мимо, увлеченный своими мыслями и скрылся в толпе.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 19,
    text:
      `
        Зато я его запомнила. Среди людей он почти ничем не выделялся: высокий, средней длинны темные волосы, глаза карие.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 20,
    text:
      `
        Он был одет в кожаную черную куртку в такой прохладный вечер. Никаких украшений в честь Хэллоуина на нем не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 21,
    text:
      `
        Я не знаю, какие неведомые силы заставили последовать за ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 22,
    text:
      `
        Аккуратно протискиваясь сквозь «нечисть», я наблюдала, как его фигура удаляется от меня. Даже быстрый шаг не помог догнать цель, и вскоре парень был потерян из виду.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 23,
    text:
      `
        «И зачем я пошла за ним? Определенно не для того, чтобы продолжить беседу или услышать извинения». 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 24,
    text:
      `
        Я остановилась, поняла, что искать его бессмысленно и глупо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 25,
    text:
      `
        Часть меня сожалела о потерянной возможности увидеть незнакомца еще раз, а другая говорила о нелогичности данного желания и скрытой опасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 26,
    text:
      `
        Почувствовав себя неловко от этого наваждения, я пошла дальше. Выйдя из толпы и повернув за угол, свернула, оказавшись в переулке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Concert.jpg')
  },

  {
    id: 27,
    text:
      `
        Музыка была не так громко слышна, поэтому я решила позвонить однокурснице, чтобы вытащить ее из дома на праздник.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    music: require('../../../../Media/Audio/OTV/Concert_Blurred.mp3'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 28,
    text:
      `
        Я уже набрала номер и сбросила, так как мое внимание привлек негромкий разговор нескольких людей.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    stats: [
      { story: EStoriesEn.OTV, value: +1, category: 'Item', id: 'Phone' }],
    simple: require('../../../../Media/Audio/OTV/Phone_Call.mp3'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 29,
    text:
      `
        «Кажется, это за углом».
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 30,
    text:
      `
        Я тихо подошла к краю дома, прислушиваясь к словам.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 31,
    text:
      `
        Разговаривали два человека. Определенно, голос мужчины и женщины, даже, я бы сказала, парня и девушки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 32,
    text:
      `
        … здесь его точно нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Media/Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 33,
    text:
      `
        Я сам проверю. Ты могла его упустить.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Парень',
    imageFront: require('../../../../Media/Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 34,
    text:
      `
        С каких пор ты сомневаешься? Ты же понимаешь, что я люблю тебя. Не забывай, меня ЭТО тоже касается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Media/Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 35,
    text:
      `
        Интерес взял вверх, и я подсмотрела:
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 36,
    text:
      `
        Сегодня — это все, что у нас есть. Мы теряем время, стоит снова проверить.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Парень',
    imageFront: require('../../../../Media/Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 37,
    text:
      `
        Нет. Мы еще не готовы. Ты не готов, и ты это знаешь. Но я обещаю, мы найдем его. Он от нас точно не убежит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Media/Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 38,
    text:
      `
        Я сам найду ублюдка и убью. Возвращайся в Академию.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Парень',
    imageFront: require('../../../../Media/Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 39,
    text:
      `
        Это самоубийство!  Я не готова потерять еще и тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Media/Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 40,
    text:
      `
        Девушка нежно коснулась его руки в знак поддержки, а парень, казалось, с теплотой принял ее заботу.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 41,
    text:
      `
        «И почему разговор меня напугал? Как я приняла его взаправду? Не знаю. Но в этом моменте есть что-то жуткое, пробирающее до костей».
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 42,
    text:
      `
        «Убить?! Что?! Что я только что услышала?! Мне определенно пора уходить».
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 43,
    text:
      `
        Сердце бешено колотилось, а колени начали подгибаться. Обрушившаяся информация напугала, я прокляла себя за беспечность.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    ambient: require('../../../../Media/Audio/OTV/Heartbeat_01.mp3'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 44,
    text:
      `
        «Это не моё дело».
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 45,
    text:
      `
        Я стала уходить, пытаясь не стучать каблуками по асфальту. Бесшумно прошла несколько шагов, и мой телефон зазвонил, бесцеремонно выдав меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 46,
    text:
      `
        Черт, только не сейчас!
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speaker: 'Ники',
    simple: require('../../../../Media/Audio/OTV/Ring.mp3'),
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 47,
    text:
      `
        Тихо выругавшись, я быстро сбросила и, уже не пытаясь скрываться, побежала к оживленной улице. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    simple: require('../../../../Media/Audio/OTV/Heels.mp3'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 48,
    text:
      `
        Когда до поворота осталось пару шагов, чья-то тяжелая рука легла на мое плечо, а затем резко прижала к холодной стене.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    simple: require('../../../../Media/Audio/Common/Silence.mp3'),
    music: require('../../../../Media/Audio/OTV/Peril.mp3'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 49,
    text:
      `
        В этот момент я совершенно потеряла способность думать, кричать — страх испепелял изнутри, а дыхание сбилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 50,
    text:
      `
        Его взгляд встретился с моим. Эти холодные бездонные темные глаза пытались проникнуть в самую глубь, затуманивая разум.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 70,
    text:
      `
        Я как под гипнозом смотрела на него и не могла сопротивляться.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 51,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/OTV/Cutscenes/GuyGirl.mp4'), goTo: 52 },
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 52,
    text:
      `
        Он медленно убрал руку, давая мне мнимую свободу, и, немного отойдя, спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 53,
    text:
      `
        Зачем ты подслушала наш разговор? 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Парень',
    imageFront: require('../../../../Media/Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 54,
    text:
      `
        Нет, он точно не спрашивал. Он требовал ответа. Парень даже не пытался удерживать, был уверен в моей покорности.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    message: firstChoiceMessage,
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 55,
    text:
      `
        «Как спасаться?»
      `,
    buttons: [
      {
        text: 'Стоять',
        goTo: 56
      },
      {
        text: 'Молчать',
        goTo: 56
      },
      {
        text: 'Бежать',
        goTo: 57
      },
      {
        text: 'Ударить его',
        goTo: 59
      }],
    message: 'Помимо прокачки отношений с персонажами, тебе доступен стат — Признание. От него зависит, как к Ники относятся окружающие',
    speaker: 'Ники',
    imageFront: require('../../../../Media/Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 56,
    text:
      `
        Я не могла ни пошевелиться, ни сказать ни единого слова. Похоже, парень этого совсем не ожидал. Он озадаченно смотрел в мои испуганные глаза, ожидая хоть каких-то слов.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 57,
    text:
      `
        Когда паника захлестнула меня, я дернулась и попыталась бежать.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 58,
    text:
      `
        На секунду он потерял бдительность, что дало мне фору. Это было бесполезно — парень оказался проворнее. Он держал меня за запястье и смотрел непонимающими глазами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 59,
    text:
      `
        Когда паника захлестнула меня, я дернулась, наспех ударила его ногой в колено и попыталась бежать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    stats: [
      { story: EStoriesEn.OTV, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 60,
    text:
      `
        На секунду он потерял бдительность, что дало мне фору. Это было бесполезно — парень оказался проворнее. Он держал меня за запястье и смотрел непонимающими глазами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 61,
    text:
      `
        Пока я искала пути отступления, то увидела ту девушку. Она встала позади незнакомца, наблюдая за происходящим.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 62,
    text:
      `
        Напряжение достигло своего пика, и, что-то проанализировав в своих мыслях, парень сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 63,
    text:
      `
        Она не поддается гипнозу!
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('OTV', 'Глава 1', 'Часть 1', '0')
        }
      }],
    speaker: 'Парень',
    imageFront: require('../../../../Media/Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Media/Images/OTV/UI/Border.png'),
    achievement: { story: EStoriesEn.OTV, name: 'PrologueCompleted' },
    imageBack: require('../../../../Media/Images/OTV/Backgrounds/Dark_Street.jpg')
  }
])
