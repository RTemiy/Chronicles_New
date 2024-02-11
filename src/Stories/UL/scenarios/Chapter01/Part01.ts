import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { redPulsating, redPulsatingStop, whiteFlash } from '../../../../Components/Slide/Slide'
import { saveData } from '../../../../Functions/localStorageManager'

scenarioManager.addScenario({ storyName: EStoriesEn.UL, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Только стоя на краю, можно осознать потерю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/UL/Thinking.mp3'),
    ambient: require('../../../../Sounds/UL/Wind.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop.jpg')
  },

  {
    id: 1,
    text:
      `
        Думала ли я когда-нибудь, что моя повседневность превратится в детективную историю, в которой станет расследоваться собственная жизнь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop.jpg')
  },

  {
    id: 2,
    text:
      `
        Нет. И я никому не желаю это испытать.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop.jpg')
  },

  {
    id: 3,
    text:
      `
        Когда у тебя есть близкие люди: заботливый молодой человек, преданная подруга, любящие родители — ты не задумываешься о проблемах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop.jpg')
  },

  {
    id: 4,
    text:
      `
        До тех пор, пока они сами тебя не настигают.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Rooftop.jpg')
  },

  {
    id: 5,
    text:
      `
        Прохладный зимний ветерок обдувал лицо, пока мы шли до одного из самых ярких мероприятий этого сезона. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/UL/Main.mp3'),
    ambient: require('../../../../Sounds/UL/Street.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Far.jpg')
  },

  {
    id: 6,
    text:
      `
        Моя близкая подруга Валентина решила пригласить меня на каток, чтобы отдохнуть от повседневной рутины и просто весело провести время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Far.jpg')
  },

  {
    id: 7,
    text:
      `
        Несколько лет назад мы познакомились на собрании молодых авторов, где единомышленники делились своими работами, которым пока не удалось обрести известность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Library.jpg')
  },

  {
    id: 8,
    text:
      `
        Валентина была одна из немногих, кто не побоялся выступить и заявить о себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Library.jpg')
  },

  {
    id: 9,
    text:
      `
        Ее рвение откликнулось во мне легкой завистью, ведь смелости мне однозначно не хватало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Library.jpg')
  },

  {
    id: 10,
    text:
      `
        Это и было поводом начала нашего общения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Library.jpg')
  },

  {
    id: 11,
    text:
      `
        Вскоре мы стали регулярно видеться, нашли общие точки соприкосновения и стали по-настоящему доверять друг другу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe.jpg')
  },

  {
    id: 12,
    text:
      `
        Я познакомилась с ее окружением, а она — с моим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe.jpg')
  },

  {
    id: 13,
    text:
      `
        Особенно часто мы стали проводить время втроем. Мой парень Пол был не против такой компании.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe.jpg')
  },

  {
    id: 14,
    text:
      `
        Нам удавалось поддерживать непринужденные беседы, играть в настолки — чувствовать себя настоящими друзьями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe.jpg')
  },

  {
    id: 15,
    text:
      `
        Особенно мы любили собираться в кафе после работы и делиться яркими впечатлениями прошедшего дня, а после — гулять по парку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Cafe.jpg')
  },

  {
    id: 16,
    text:
      `
        И вот сегодня, нам в очередной раз выдалась возможность встретиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    ambient: require('../../../../Sounds/UL/Street.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Far.jpg')
  },

  {
    id: 17,
    text:
      `
        К сожалению, Пол не смог пойти с нами из-за работы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Far.jpg')
  },

  {
    id: 18,
    text:
      `
        «А ведь мог бы взять отгул. Но ничего, в следующий раз обязательно вытащу его». 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Far.jpg')
  },

  {
    id: 19,
    text:
      `
        Амелия, купишь билет и мне? Дурацкий банк снова не позволяет оплатить. Что у них происходит?
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Far.jpg')
  },

  {
    id: 20,
    text:
      `
        Я все понимаю! Вернешь должок в следующий раз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Far.jpg')
  },

  {
    id: 21,
    text:
      `
        Лед, скольжение коньков, плавные движения. Мне этого не хватало и я наслаждалась этим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 22,
    text:
      `
        Мне показалось, что Валентина выглядела несколько отстраненно. В последнее время она часто жаловалась на проблемы с работой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 23,
    text:
      `
        Она была не из тех, кто делится своими тревогами при каждом удобном случае. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 24,
    text:
      `
        Поэтому я решила поддержать ее. Улыбка не спадала с моего лица, а тело танцевало на ледяной поверхности.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 25,
    text:
      `
        В какой-то момент я настолько увлеклась, что потеряла Валентину из виду среди всех собравшихся людей.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 26,
    text:
      `
        Быстрыми резкими движениями я впопыхах пересекала каток. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 27,
    text:
      `
        Я неплохо держалась на коньках. Однако это не спасло меня от блужданий в огромной толпе.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 28,
    text:
      `
        Обеспокоенный взгляд ловил каждого незнакомца в попытках отыскать подругу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 29,
    text:
      `
        Попытавшись выбраться и снова набрав скорость, неожиданно мир для меня замер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Icerink_Near.jpg')
  },

  {
    id: 30,
    text:
      `
        Острая боль резко пронзила все тело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    beforeBegin: redPulsating,
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    music: require('../../../../Sounds/UL/Abstraction.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 31,
    text:
      `
        Собственный голос пытался прохрипеть слова о спасении, однако разум стремительно ослабевал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 32,
    text:
      `
        Я перестала понимать, где сейчас нахожусь, что происходит вокруг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 33,
    text:
      `
        <p>Голоса. Нет. Шепот? 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    ambient: require('../../../../Sounds/UL/Whisper.mp3'),
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 34,
    text:
      `
        Как я здесь оказалась?
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 35,
    text:
      `
        Тепло. Кто-то поднял меня на руки? 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 36,
    text:
      `
        Догадки строились на ощущениях. Неожиданное чувство защищенности поддерживало меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 37,
    text:
      `
        «Я не пропаду здесь!»
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Outdoor.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 38,
    text:
      `
        Через некоторое время связь с реальностью окончательно прервалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    beforeBegin: redPulsatingStop,
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },

  {
    id: 39,
    text:
      `
        Яркий свет ослепил меня, стоило мне только приоткрыть глаза. Тело плохо слушалось, поэтому я еле как смогла приподняться, чтобы осмотреть окружение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/UL/Awakening.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 40,
    text:
      `
        «Я в больнице? Как я здесь оказалась?»
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 41,
    text:
      `
        В голове спутались все мысли. При попытках что-то вспомнить голова начинала нещадно болеть, заставляя корчиться от боли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 42,
    text:
      `
        Я зажмурилась, чтобы ненадолго прийти в себя, приложив руки к вискам.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 43,
    text:
      `
        В палату вошел доктор, который тут же обеспокоенно взглянул на меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 44,
    text:
      `
        Вам не стоит сейчас делать резких движений. Пожалуйста, прилягте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 45,
    text:
      `
        Отчего-то я не смогла сдержать слез и с мольбой взглянула на мужчину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 46,
    text:
      `
        Что происходит?  
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 47,
    text:
      `
        Он ободряюще взял меня за руку и присел на кровать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 48,
    text:
      `
        Прошу вас успокоиться. Вы пережили большой стресс и вам необходим покой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 49,
    text:
      `
        Доктор, скажите, где я и почему здесь нахожусь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 50,
    text:
      `
        Он тяжело вздохнул, не переставая глядеть на меня с сочувствием. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 51,
    text:
      `
        Что последнее вы помните перед потерей сознания? 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 52,
    text:
      `
        «Как я здесь очутилась? Что произошло? Я определенно должна что-то помнить...»
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 53,
    text:
      `
        Очередная попытка попробовать докопаться до истины закончилась болью, от которой я невольно зажмурилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 54,
    text:
      `
        Тише-тише...
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 55,
    text:
      `
        Доктор стал гладить меня по спине, продолжая говорить: 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 56,
    text:
      `
        Позволю предположить, что вы ничего не можете вспомнить, верно?
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 57,
    text:
      `
        Меня сковал страх. Боль. Отчаяние. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 58,
    text:
      `
        «Кто я?»
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 59,
    text:
      `
        Видя мою реакцию, доктор встал и сказал то, что я больше всего боялась услышать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 60,
    text:
      `
        Боюсь, вы временно потеряли память. Необходимо провести дополнительное обследование для постановки более точного диагноза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 61,
    text:
      `
        Его слова обескуражили меня. Я не помнила ни кто я такая, ни как здесь очутилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 62,
    text:
      `
        Но как же так? Как мне теперь быть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 63,
    text:
      `
        Прежде всего беречь себя. Любое проявление стресса негативно влияет на здоровье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 64,
    text:
      `
        Я оставлю вас на некоторое время для обхода других пациентов. Не волнуйтесь, одна вы не будете. С вами был молодой человек, наверняка он хочет с вами побеседовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 65,
    text:
      `
        Мне оставалось только кивнуть и наблюдать, как доктор покидает палату.  
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 66,
    text:
      `
        «Кто сейчас войдет сюда? Смогу ли я его узнать? Он мой друг? Парень?»
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 67,
    text:
      `
        Странное чувство тревоги и ненависти одновременно стали завладевать мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 68,
    text:
      `
        Почему я должна проходить через это? Да кто я такая?
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 69,
    text:
      `
        В помещение вошел улыбчивый милый парень, держа в руках рюкзак. Он положил его рядом с мобильным телефоном на прикроватную тумбочку и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 70,
    text:
      `
        Я не представляю, что ты сейчас испытываешь. Все произошло так сумбурно, так стремительно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 71,
    text:
      `
        А что произошло? 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 72,
    text:
      `
        Я не собиралась терять надежду все выяснить. Может быть он знает меня? Знает хотя бы имя... Малейший кусочек информации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 73,
    text:
      `
        Мы были на катке. Точнее, ты была. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 74,
    text:
      `
        Он немного замялся, растерянно всматриваясь в мои глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 75,
    text:
      `
        В общем, катались на коньках, а затем я увидел переполох и тебя лежащую на льду без сознания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 76,
    text:
      `
        Не понимаю. Как это вышло? Мы знакомы?
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 77,
    text:
      `
        Так диагноз доктора подтвердился... Нет. Мы не знакомы. Я всего лишь помог добраться до больницы вместе с твоей подругой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 78,
    text:
      `
        Несмотря на потерянность, я все равно нашла в себе силы поблагодарить этого человека. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 79,
    text:
      `
        Спасибо...
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 80,
    text:
      `
        Не стоит.  В первую очередь надо поблагодарить подругу, которая смогла скоординировать действия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 81,
    text:
      `
        Ты же мог просто пройти мимо, но остался и теперь даже в палате сидишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: '...',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 82,
    text:
      `
        Я привык доводить дело до конца. Да и не в моих принципах оставлять девушку в беде. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 83,
    text:
      `
        Впервые за время этого хаоса, я смогла найти в себе силы и улыбнуться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 84,
    text:
      `
        Неловкую тишину между нами нарушила девушка, буквально влетевшая в палату.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 85,
    text:
      `
        О, боже, Амелия! Мне так жаль! Я совсем не понимаю, как это произошло! Мы же катались, все было хорошо, а потом...
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Подруга?',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 86,
    text:
      `
        «Амелия? Мое имя? Красивое».
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 87,
    text:
      `
        Глаза девушки наполнились слезами и она резко обняла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 88,
    text:
      `
        Посмотрев на нее, я поняла, что также не узнавала девушку, которая так распиналась передо мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 89,
    text:
      `
        Не получив от меня ответа, она обратилась к парню:
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 90,
    text:
      `
        Она совсем ничего не помнит? Смотрит на меня, будто видит впервые.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Подруга?',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 91,
    text:
      `
        Я думаю, не стоит давить на нее сейчас. Ей и так не сладко пришлось.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 92,
    text:
      `
        Незнакомка вмиг изменилась в лице. Казалось, она была готова накинуться на парня и поколотить, но что-то ее удержало.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 93,
    text:
      `
        Мне хорошо известно, как разговаривать с лучшей подругой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Подруга?',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 94,
    text:
      `
        Так мы и правда подруги?
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 95,
    text:
      `
        Да! Я — Валентина. Мы познакомились на собрании авторов. Припоминаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UL, value: 0, category: 'Person', id: 'Valentina' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 96,
    text:
      `
        Нет. Прости.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 97,
    text:
      `
        Я хотела задать ей вопросы, но мое рвение прервал сигнал телефона.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    simple: require('../../../../Sounds/UL/Mobile.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 98,
    text:
      `
        Подруга моментально схватила его, и, быстро прочитав уведомление, сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 99,
    text:
      `
        Прости, Амелия. Мне срочно нужно на работу. Но я не могу оставить тебя здесь одну. Что же мне делать? Скажу, что б нашли замену...
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 100,
    text:
      `
        Был ли смысл удерживать человека, которого я вижу первый раз? Здесь все для меня чужие. На кого мне рассчитывать, кроме как на себя? 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 101,
    text:
      `
        Все нормально, ты можешь идти.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 102,
    text:
      `
        Эмоции Валентины казались мне недосягаемыми. Отчего-то я не ощущала от нее тепло, которое отчетливо исходило от молодого человека, сидящего рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 103,
    text:
      `
        Я чувствовала равнодушие. Волнение. Может быть это все стресс?
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 104,
    text:
      `
        «Почему она покидает меня?»
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 105,
    text:
      `
        Я могла возразить. Могла сказать, что это нечестно. Но и у нее есть своя жизнь и дела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 106,
    text:
      `
        «Она спасла меня. Я должна быть благодарна».
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 107,
    text:
      `
        Правда? А как же ты?
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: 'Валентина',
    imageFront: require('../../../../Images/UL/Persons/Valentina_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 108,
    text:
      `
        Я все еще здесь, дамы. И, пока не удостоверюсь, что с ней все впорядке — никуда не уйду.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Неизвестный',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 109,
    text:
      `
        Валентина с досадой взглянула на меня и поспешила покинуть палату. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 110,
    text:
      `
        Парень первый решил заговорить. Встал со стула и подошел ко мне, сказав:
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 111,
    text:
      `
         Мы так и не успели познакомиться. Меня зовут Дэвид. А ты, как я понял, Амелия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UL, value: 0, category: 'Person', id: 'David' }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 112,
    text:
      `
        Да, наверное. Приятно познакомиться!
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 113,
    text:
      `
        Мы обменялись рукопожатиями и Дэвид снова вернулся на свое место. Затем, закинув ногу на ногу, завел беседу:
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 114,
    text:
      `
        Тебе нравятся животные?
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 115,
    text:
      `
        Животные? Какие?
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 116,
    text:
      `
        Да любые: кошки, собаки, а, может быть, лошади? Еноты? 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 117,
    text:
      `
        «Что я думаю насчет животных?»
      `,
    buttons: [
      {
        text: 'Мне нравятся кошки',
        goTo: 118
      },
      {
        text: 'Собаки — вот моя любовь',
        goTo: 126
      },
      {
        text: 'Лошади',
        goTo: 134
      },
      {
        text: 'Мне не нравятся животные',
        goTo: 144
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 118,
    text:
      `
        «Удивительно, но я хотя бы помню, как они выглядят...»
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 119,
    text:
      `
        Они красивые, гордые и самостоятельные животные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 120,
    text:
      `
        Моя бабушка просто обожает кошек. Кажется, в ее квартире их с десяток. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 121,
    text:
      `
        Как она с ними справляется? 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 122,
    text:
      `
        Нас всех очень удивляет эта ее сила воли. В свои семьдесят ухаживать за собственным огородом, так еще с животными ладит. Все чистые и ухоженные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 123,
    text:
      `
        Похоже, она тебе дорога.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 124,
    text:
      `
        А есть ли у меня родственники? Мама, папа? Бабушка, Дедушка? 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 125,
    text:
      `
        У нас большая и дружная семья. Каждый друг за друга горой. А бабушка — ее центр. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 126,
    text:
      `
        «Удивительно, но я хотя бы помню, как они выглядят...»
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 127,
    text:
      `
        Они энергичные, задорные и очень преданные животные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 128,
    text:
      `
        Это ты попала в точку. Еще с детства я мечтал об этом питомце и представляешь? Несколько недель назад завел щенка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Дэвид',
    stats: [{ story: EStoriesEn.UL, value: 1, category: 'Person', id: 'David' }],
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 129,
    text:
      `
        А какой породы? 
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 130,
    text:
      `
        Померанский шпиц! Я не хотел большую собаку, так как у меня не очень-то подходящая квартира. Да и с маленькими проще. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 131,
    text:
      `
        Очень хороший выбор. Уверена, ты отлично справляешься со своими обязанностями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 132,
    text:
      `
        Едва ли... Недавно пакостник умудрился написать на диван. Мне еще предстоит с ним серьезно заниматься. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 133,
    text:
      `
        А был ли у меня кто-то, о ком необходимо бережно заботиться? 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 134,
    text:
      `
        «Удивительно, но я хотя бы помню, как они выглядят...»
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 135,
    text:
      `
        Они ассоциируются у меня со свободой. Гордые и статные животные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 136,
    text:
      `
        В детстве мы с мамой часто катались на лошадях. Она была буквально одержима ими. Уход, тренировки, сбережение средств для покупки собственного бизнеса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 137,
    text:
      `
        А чем ее одержимость была вызвана? 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 138,
    text:
      `
        Ни я, ни папа так и не смогли сформулировать четкий ответ. Будто бы мама сама до конца не понимала. Ей это просто нравилось и этого было достаточно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 139,
    text:
      `
        Значит, у вас есть бизнес?
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 140,
    text:
      `
        Нет. Мама она...
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 141,
    text:
      `
        На секунду он переменился. Легкий холодок скользнул по лицу, но Дэвид быстро вернул самообладание и как ни в чем не бывало продолжил:
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 142,
    text:
      `
        Все хорошо! Нет причин для грусти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 143,
    text:
      `
        Я задумалась о том: а есть ли у меня близкие? 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 144,
    text:
      `
        «Совершенно не хочется о чем-то подобном думать. Голова забита другим».
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 145,
    text:
      `
        Никогда в жизни в это не поверю!
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 146,
    text:
      `
        Полагаю, что сейчас не самое подходящее время обсуждать такое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 147,
    text:
      `
        А оно хоть когда-нибудь бывает подходящим? Жизнь и состоит из таких мелочей, на которые мы зачастую не обращаем внимание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 148,
    text:
      `
        Иногда полезно просто расслабиться. Поговорить ни о чем, отвлечься...
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 149,
    text:
      `
        Может ты и прав. Да только где найти эти поводы, чтобы расслабиться? 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 150,
    text:
      `
        Я перестала вникать в суть разговора, ведь все мои мысли были уже далеко.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 151,
    text:
      `
        И что мне теперь делать с этим? Как мне жить? Куда идти?
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 152,
    text:
      `
        Я не хотела портить столь милую беседу. Однако эмоции в очередной раз взяли вверх и я поддалась чувствам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 153,
    text:
      `
        Дэвид осмелился немного приобнять меня. Без каких-либо лишних намеков. Просто поддержать человека, который оказался в сложной ситуации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 154,
    text:
      `
        Я не могла шевельнуться. Просто уткнулась в крепкое плечо, чувствуя его запах, пропитывая одежду своими слезами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 155,
    text:
      `
        Извини, я... Я ничего не имел в виду.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 156,
    text:
      `
        Он отстранился, смущенно глядя в пол. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 157,
    text:
      `
        Я тебе никто и позволил такую вольность. Но я не мог по-другому. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 158,
    text:
      `
        Ты кажешься мне такой ранимой, такой беззащитной. Уж не знаю, по воле какого случая я сижу сейчас здесь, но жалеть мне не о чем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 159,
    text:
      `
        Все в порядке. Здесь только я жалею себя. И это явно никак не поможет мне вспомнить.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 160,
    text:
      `
        В палату вернулся врач вместе с медицинской карточкой. Он приблизился и обратился ко мне:
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 161,
    text:
      `
        Как вы себя чувствуете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 162,
    text:
      `
        Я в растерянности, но готова следовать любым вашим указаниям, чтобы вылечиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 163,
    text:
      `
        Отличный настрой! Тогда давайте проследуем на физиопроцедуры, и после вы уже сможете отправиться домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 164,
    text:
      `
        Док, а вы не торопите события?
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 165,
    text:
      `
        Процедуры покажут. При первичном осмотре осложнений не было выявлено. У пациента травма головы, но она никак не угрожает здоровью. Держать вас здесь нет смысла.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 166,
    text:
      `
        Сейчас самое главное — это комфорт и спокойная обстановка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 167,
    text:
      `
        Указывая пальцем на Дэвида, доктор продолжил:
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 168,
    text:
      `
        Мисс, ваша подруга или парень смогут же вас проводить до дома? 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 169,
    text:
      `
        Нет, я... 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 170,
    text:
      `
        Сомнение в голосе выдавало легкое волнение. Но Дэвид быстро собрался с мыслями и спросил меня:
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 171,
    text:
      `
        Амелия, где ты живешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 172,
    text:
      `
        Я не помню. Валентина... Она так быстро убежала, что забыла мне об этом сообщить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 173,
    text:
      `
        В разговор вмешался доктор, который уточнил у Дэвида:
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 174,
    text:
      `
        А, вы, стало быть, не родственник? 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 175,
    text:
      `
        Так получилось, что я стал случайным очевидцем ее падения и помог добраться до больницы. При ней был рюкзак и вроде бы все. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 176,
    text:
      `
        Я потянулась к тумбочке и взяла рюкзак, положив его на колени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 177,
    text:
      `
        Внутри я обнаружила: несколько сладостей, ключи, кошелек и наушники.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageFront: require('../../../../Images/UL/Objects/Bag.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 178,
    text:
      `
        И документы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageFront: require('../../../../Images/UL/Objects/Bag.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 179,
    text:
      `
        Благодаря паспорту мне удалось узнать, где я живу. И впервые я вздохнула с облегчением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageFront: require('../../../../Images/UL/Objects/Bag.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 180,
    text:
      `
        Все в порядке. Теперь я не потеряюсь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 181,
    text:
      `
        Я провожу тебя до дома. Так я точно буду уверен, что с тобой ничего не случится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 182,
    text:
      `
        Видя добрые намерения парня, я не могла сдержать улыбки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 183,
    text:
      `
        Спасибо! 
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 184,
    text:
      `
        Но все же перед тем, как покинуть больницу, предстояло понять мое текущее состояние здоровья.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 185,
    text:
      `
        Скажите, доктор, у меня голова болит, когда я пытаюсь что-либо вспомнить. Это нормально?
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 186,
    text:
      `
        Это лишь последствие травмы, как я и сказал ранее, вам ничего не угрожает.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 187,
    text:
      `
        Встав с кровати, я последовала за ним на процедуры. От яркого света пульсировала голова, и я, то и дело, закрывала глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    beforeBegin: redPulsating,
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 188,
    text:
      `
        Потирая виски, я ненароком врезалась в грудь своего врача. Мужчина, не ожидавший такого, вначале растерялся. Положив руку на плечо, он вглядывался в мое лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 189,
    text:
      `
        Извините...
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 190,
    text:
      `
        Я невольно схватилась за голову, чувствуя легкое пошатывание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 191,
    text:
      `
        Голова от света болит, и я закрыла их, и совсем не увидела вас... Мне так неловко...
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 192,
    text:
      `
        Вам не нужно извиняться. Все хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    beforeBegin: redPulsatingStop,
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 193,
    text:
      `
        Врач добродушно улыбнулся и предложил опереться об его локоть в знак поддержки. Мы прошли в кабинет, где мне предстояли физиопроцедуры.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 194,
    text:
      `
        Благополучно дойдя до места назначения, доктор аккуратно посадил меня в кресло и стал крепить непонятные присоски на голову. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 195,
    text:
      `
        Не волнуйтесь. Данная процедура называется электростимуляцией коры головного мозга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 196,
    text:
      `
        Я совершенно не понимала, о чем он говорил, и доктор решил пояснить:
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 197,
    text:
      `
        Она направлена на то, чтобы активировать ваши нейроны и стимулировать мозг быстрее вернуть воспоминания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 198,
    text:
      `
        Процедуру нужно будет повторять регулярно. Я назначу следующий прием на завтра. Также пришли результаты с вашими анализами крови. Все в пределах нормы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 199,
    text:
      `
        Разве что показатель железа низковат. Я напишу список необходимых лекарств и поставлю печать.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 200,
    text:
      `
        Хоть это и была его работа, но его забота обо мне не могла не трогать.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 201,
    text:
      `
        Спасибо... Вы очень хороший врач, ваше спокойствие и учтивость вселяют надежду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 202,
    text:
      `
        Он отвернулся, скрывая легкое смущение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 203,
    text:
      `
        Благодарность пациента — лучшая похвала для меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 204,
    text:
      `
        Может быть, вас это несколько утешит. Зимой подобные травмы встречаются чаще, чем хотелось бы, но вы первая, кто с достоинством отнесся к такому повороту судьбы.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 205,
    text:
      `
        Да? А как реагировали другие?
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 206,
    text:
      `
        Это долгая история, но, если говорить кратко, то многие пациенты решают, что это божий промысел. Знак начала новой жизни. Далеко не все здраво мыслят. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 207,
    text:
      `
        Так я одна из немногих, кто пытается вспомнить то, что утратила?
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 208,
    text:
      `
        Доктор немного переменился в лице, однако пытался сохранять улыбку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 209,
    text:
      `
        Кому-то есть, что терять.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 210,
    text:
      `
        «И кого же потеряли вы?»
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 211,
    text:
      `
        На сегодня все. Напоминаю, встречаемся завтра здесь же.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 212,
    text:
      `
        И как долго мне нужно лечиться, доктор?
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 213,
    text:
      `
        До того момента, как не начнет восстанавливаться память. Обычно хватает семь — четырнадцать процедур. В редких случаях может быть более затяжное лечение. Но не будем терять веры, что воспоминания вернутся быстро.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 214,
    text:
      `
        Хорошо. Еще раз спасибо вам.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speaker: 'Амелия',
    imageFront: require('../../../../Images/UL/Persons/Amelia_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 215,
    text:
      `
        Давайте я провожу вас до палаты, что бы вы ненароком не врезались в санитарку.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Procedural.jpg')
  },

  {
    id: 216,
    text:
      `
        Когда мы вернулись,  Дэвид выглядел несколько скучающе, но, при виде нас оживился и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 217,
    text:
      `
        Ну что, готова идти?
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 218,
    text:
      `
        Я хотела ответить, но врач опередил меня:
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 219,
    text:
      `
        Насколько мне известно, вы не родственник и не знакомый. Я не могу допустить, чтобы вы провожали пациентку до дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 220,
    text:
      `
        Теперь он обратился ко мне и добавил:
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 221,
    text:
      `
        В каком районе вы живете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 222,
    text:
      `
        Я показала ему свои документы, ведь в такой ситуации глупо было намеренно что-то скрывать.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 223,
    text:
      `
        Я понимаю, что вы врач, но я же сам спас Амелию. Мне нет причин ей вредить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speaker: 'Дэвид',
    imageFront: require('../../../../Images/UL/Persons/David_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 224,
    text:
      `
        Доктор, казалось, намеренно игнорировал Дэвида и продолжал вести со мной диалог:
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 225,
    text:
      `
        Я живу немного дальше, и все равно прохожу по той же улице. Моя смена закончена, так что, если хотите, я сам проведу вас. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speaker: 'Врач',
    imageFront: require('../../../../Images/UL/Persons/Doctor_Casual.png'),
    imageBorder: require('../../../../Images/UL/UI/Border.png'),
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 226,
    text:
      `
        Я в растерянности стала смотреть на мужчин, совершенно не понимая, как мне поступить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 227,
    text:
      `
        Оба были настолько чуткими, что мое сердце невольно забилось, а щеки запылали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 228,
    text:
      `
        Я хотела протянуть руку и доктору, и Дэвиду, ведь видела искреннее желание помочь. Не оставаться в стороне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 229,
    text:
      `
        В тишине больничной палаты время будто бы замерло, оставляя легкое завывание ветра из открытого окна. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UL', 'Глава 1', 'Часть 2', '0')
          saveData(['2024_February_14'], [1])
        }
      }],
    achievement: { story: EStoriesEn.UL, name: 'Part01Completed' },
    imageBack: require('../../../../Images/UL/Backgrounds/Hospital_Room.jpg')
  }
])
