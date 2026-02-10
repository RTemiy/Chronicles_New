import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { saveEndProgress, scenarioManager } from '../../../../index'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.OTV, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Она не поддается гипнозу!
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Audio/OTV/Peril.mp3'),
    speaker: 'Парень',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 1,
    text:
      `
        Незнакомец держал меня за запястье и обратился к девушке, которая была не меньше удивлена случившемуся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 2,
    text:
      `
        Это невозможно. Кто она?
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 3,
    text:
      `
        Я не понимала, что происходит, и не собиралась отвечать, а еще больше боялась вердикта. Может быть, от девушки и смогла бы убежать, но не от парня.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 4,
    text:
      `
        Колоритная парочка выглядела растерянными, а я в тайне надеялась, что они, наконец, посмеются. Скажут, что так играют на Хэллоуин и отпустят, так как это всего лишь часть глупого розыгрыша.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 5,
    text:
      `
        Очень жестокого и неудачного, между прочим.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 6,
    text:
      `
        Поглощенная страхом, я даже не заметила, что парень все это время продолжал держать меня за запястье, и только сейчас перевела взгляд на девушку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 7,
    text:
      `
        Словно уловив беззвучную мольбу о помощи, брюнетка неловко улыбнулась и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 8,
    text:
      `
        Отпусти, ты её совсем напугал.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 9,
    text:
      `
        Незнакомка подошла, протянула руку мне за спину, провожая за собой. Я уже хотела поскорее уйти, но девушка ответила, оправдываясь:
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    music: require('../../../../Audio/OTV/Secret.mp3'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 10,
    text:
      `
        Не обращай внимания, у нас выдался трудный день, но не бойся, мы не причиним тебе вреда, обещаю. Очевидно, что ты что-то слышала, и это тебя напугало.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 11,
    text:
      `
        Она говорила спокойно и была настроена дружелюбно. Я только сейчас взяла себя в руки и, решив подыграть в их игре, спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 12,
    text:
      `
        Похоже, что я не должна была это слышать и позже вы меня убьете?
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 13,
    text:
      `
        Девушке явно понравилось это предположение, она улыбнулась и рассмеялась звонко, тепло ответив:
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    simple: require('../../../../Audio/OTV/Lina_Laugh.mp3'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 14,
    text:
      `
        Нет, мы не убиваем людей, а если и случается подобный конфуз, то заставляем человека забыть. Стираем память. И всегда это работало. До сих пор. Кто ты?
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 15,
    text:
      `
        Ники.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 16,
    text:
      `
        Девушка изогнула бровь и я, отведя взгляд от нее, на эмоциях ответила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 17,
    text:
      `
        Я не понимаю, чего вы от меня хотите, и если не собираетесь убивать, то отпустите. Мне не до ваших игр.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 18,
    text:
      `
        Парень недовольно усмехнулся, а девушка отошла в сторону, жестом указав на дорогу. Сделав несколько шагов от нее, я развернулась и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    simple: require('../../../../Audio/OTV/Alex_Laugh.mp3'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 19,
    text:
      `
        Вот так просто?
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 20,
    text:
      `
        Вот так просто. Я найду тебя, когда это потребуется.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 21,
    text:
      `
        «Чего? Ну они и заигрались. Хотя, Хэллоуин явно вышел запоминающийся».
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 22,
    text:
      `
        Еще раз мельком посмотрела на парня, его мысли были устремлены куда-то вдаль, за горизонт. Он уловил взгляд и ответил на него, отчего меня словно ударили током, и я быстро отвернулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 23,
    text:
      `
        Не злоупотребляя своей свободой, я пошла прочь, не оглядываясь, оставив их позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 24,
    text:
      `
        Весь следующий день я провела, думая о встрече с этими двумя, и она казалась сном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    music: require('../../../../Audio/OTV/Ambient.mp3'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 25,
    text:
      `
        Из мыслей меня изредка отвлекали пары: забавный пухлый преподаватель оживленно рассказывал предмет, нередко прерываясь на интересные истории из своей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 26,
    text:
      `
        Мы уже несколько раз слушали о жене, детях и пушистом пожилом коте, жившем у его подъезда.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 27,
    text:
      `
        Я улыбнулась очередному рассказу, повседневности и рутине этого дня, и вновь погрузилась в раздумья.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 28,
    text:
      `
        В моей жизни всегда чего-то не хватало: опасностей и приключений, необычного и неземного. Я никогда не понимала себя, ведь каждый день носила маску смирения и ожидания.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 29,
    text:
      `
        Поэтому я решила учиться на психолога — чтобы лучше понять себя, постичь суть жизни человека, найти смысл моей жизни, узнать правду, но учебники и ежедневные лекции — не оправдали ожиданий.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 30,
    text:
      `
        «Ежедневная учеба, куча преподавателей, которые забивают рабочее время рассказами о себе, и ни одного ответа на мои вопросы. Скука». 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 31,
    text:
      `
        «Что я слышала там? Они хотели кого-то убить? Но, раз людей они не трогают, то кого? И почему отпустили меня?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    music: require('../../../../Audio/OTV/Secret.mp3'),
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 301,
    text:
      `
        Зато вчерашнее приключение заставило меня отвлечься.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    music: require('../../../../Audio/OTV/Secret.mp3'),
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 32,
    text:
      `
        «Я та, на кого не подействовал гипноз? Внушение? Все это и звучит странно, разве может это быть правдой?»
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 33,
    text:
      `
        «Они интересные, просто живут моментом, и мне это близко. Возможно ли, что это была просто роль, и я ошиблась? А если это правда?»
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 34,
    text:
      `
        «Хотя, какая разница, ведь это было вчера. Если бы я смогла их встретить еще раз…» 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 35,
    text:
      `
        Столько вопросов, и ни на один нет ответа. Полагаю, странно так думать, но это то, чего я хочу, точнее, всегда хотела.
      `,
    buttons: [
      {
        text: 'Думать о том парне',
        goTo: 36
      },
      {
        text: 'Вспомнить концерт',
        goTo: 42
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 36,
    text:
      `
        Я вспомнила того парня — определенно мой типаж. О таких пишут рассказы, и подобные мужчины выступают в роли таинственного и сильного рыцаря, спасающего девушек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    ghostSilhouette: true,
    stats: [{ story: EStoriesEn.OTV, value: 1, category: 'Person', id: 'Alex', silent: true }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 37,
    text:
      `
        Высокий, темноволосый, уверенный в себе, тело крепкое и спортивное, руки горячие, пронзительный взгляд, темные как смола глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 38,
    text:
      `
        «Мы увиделись лишь раз, но почему я почувствовала это?»
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 39,
    text:
      `
        Нет, это не чувства, я не верю в любовь с первого взгляда. Это ощущения — огонь, страсть, жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 40,
    text:
      `
        Если б не этот случай, то я, вероятно, охотно сама бы подошла и познакомилась. Кто знает, чем мог закончиться подобный роман.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 41,
    text:
      `
        Однако в реальности все прошло тревожно. Но все же, сколько неописуемых эмоций. Такое я точно не забуду.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 42,
    text:
      `
        Сконцентрироваться на лекции у меня не получилось: в голове снова и снова всплывали обрывки вчерашнего концерта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 43,
    text:
      `
        «Это было супер, нет слов, одни эмоции!»
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 44,
    text:
      `
        «А солист! Он же красавчик! А его песня? Это нечто…»
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 45,
    text:
      `
        Эй, Ви, не летай в облаках.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    music: require('../../../../Audio/OTV/Ambient.mp3'),
    speaker: 'Эми',
    imageFront: require('../../../../Images/OTV/Persons/Amy.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 46,
    text:
      `
        Я и правда несколько отключилась от лекции, и не сразу поняла, что она закончилась. Сзади подлетел однокурсник и, взяв Эми за плечо, рассмеялся и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 47,
    text:
      `
        Видимо, Вероника все же встретила солиста группы. Пошли.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Одногруппник',
    imageFront: require('../../../../Images/OTV/Persons/Guy.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 48,
    text:
      `
        Он наспех выманил Эмили из аудитории, а я пошла следом, и, попрощавшись с однокурсниками, вновь задумалась о встрече.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Lection.jpg')
  },

  {
    id: 49,
    text:
      `
        «А та брюнетка? Кто она? Девушка? Сестра? Знакомая?»
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 50,
    text:
      `
        Я вспомнила, как нежно она дотронулась до парня и улыбнулась своей наивности.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 302,
    text:
      `
        Резко спустившись в реальность, поняла: думать о вчерашнем было глупо, но вновь и вновь мои мысли поглощала встреча.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 51,
    text:
      `
        Я найду тебя, когда это потребуется.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    beforeBegin: whiteFlash,
    speaker: 'Девушка',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Dark_Street.jpg')
  },

  {
    id: 52,
    text:
      `
        «Да, конечно. Ничего необычного, просто наткнулась на парочку. Ну, с кем не бывает?»
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    beforeBegin: whiteFlash,
    speaker: 'Ники ',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 53,
    text:
      `
        «Очнись, вы же, вероятно, больше не встретитесь, а если и встретитесь, то что? Ничего».
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 54,
    text:
      `
        Завтра у меня зачет, и надо было подготовиться к нему, а не думать о произошедшем, путаясь в ложных мыслях и несбыточных надеждах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 55,
    text:
      `
        Направляясь домой с пар, я услышала, что за мной идут, и, обернувшись, увидела ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 56,
    text:
      `
        Волосы девушки развевались на ветру, и, взглянув в миловидное лицо, я поняла, что она моя ровесница, но то, как она себя несла, выдавало в ней уверенность и раскованность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 57,
    text:
      `
        Она красиво уложила волосы рукой, улыбнулась мне и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 58,
    text:
      `
        Ну вот, видишь, я тебя нашла, как и говорила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 59,
    text:
      `
        Понимаю, что наше знакомство началось не очень удачно, но давай попробуем сначала. Я — Лина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 60,
    text:
      `
        Правильно говорят: «Бойся своих желаний», и сейчас я впала в ступор, игнорируя идущих на нас людей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 61,
    text:
      `
        Девушка предложила отойти, и, сделав несколько шагов в сторону, я…
      `,
    buttons: [
      {
        text: 'Поприветствовала ее',
        goTo: 62
      },
      {
        text: 'Припомнила вчерашнее',
        goTo: 64
      },
      {
        text: 'Проигнорировала ее',
        goTo: 69
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 62,
    text:
      `
        Привет, Лина. Знаешь, я бы с радостью поболтала, но завтра зачет. Мне не до ваших игр сейчас.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Ники',
    stats: [{ story: EStoriesEn.OTV, value: +1, category: 'Person', id: 'Lina', silent: true }],
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 63,
    text:
      `
        Я пошла вперед, оставляя девушку позади, ощущая упущенный шанс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 64,
    text:
      `
        Ты серьезно думаешь, что после того, что вы учудили, я стану с тобой общаться?
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    stats: [
      { story: EStoriesEn.OTV, value: -2, category: 'Person', id: 'Lina', silent: true }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 65,
    text:
      `
        Мы не думали, что кто-то подслушает нас.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 66,
    text:
      `
        Я понимаю — ты испугалась, но для этого я здесь, чтобы поговорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 67,
    text:
      `
        Нет. Мне это не интересно.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 68,
    text:
      `
        Я пошла вперед, оставляя девушку позади, ощущая упущенный шанс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 69,
    text:
      `
        Я пошла вперед, оставляя девушку позади, ощущая упущенный шанс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    stats: [
      { story: EStoriesEn.OTV, value: -1, category: 'Person', id: 'Lina', silent: true }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 70,
    text:
      `
        И тебе совсем не интересно, кто ты?
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 71,
    text:
      `
        Эти слова заставили меня остановиться, я обернулась к ней и ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 72,
    text:
      `
        Я студентка. Кем я ещё могу быть?
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 73,
    text:
      `
        Лина подошла, поравнялась со мной и тихо сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 74,
    text:
      `
        Наверное, ты одна из нас, но мы, обычно, знаем о существовании своих вне Клана. Как бы мне выразиться помягче…
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 75,
    text:
      `
        «Клана?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 76,
    text:
      `
        Ты не совсем человек, раз не поддаешься внушению. И, честно, вчера я и Алекс были этим несколько удивлены. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 77,
    text:
      `
        Предположим, что вчерашняя выходка не была ролевой игрой, и ты говоришь правду, то внушение не действует на развитую волю…
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 78,
    text:
      `
        Я не договорила, брюнетка меня прервала:
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 79,
    text:
      `
        Упусти общеизвестные факты из того, чему учат в институте. Мы стоим выше людей, живём гораздо дольше и почти не болеем. Мы обладаем огромной силой и разумом.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 80,
    text:
      `
        К тому же, мы очень красивы. И мне интересно, что ты знаешь о себе? Почему учишься здесь? Где выросла?
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 81,
    text:
      `
        Меня пугали ее вопросы, касательно прошлого, и ответила уклончиво:
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 82,
    text:
      `
        Я родилась, и живу тут все время. Очевидно, что ты ошиблась.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 83,
    text:
      `
        Не было никакого желания рассказывать первой встречной девушке свою историю, а она, похоже, не собиралась сдаваться. Лина взяла меня за руки и сказала так, будто мы с ней давно знакомы: 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 84,
    text:
      `
        Да ладно тебе, неужели ты никогда не ощущала, что здесь чужая? Что не вписываешься сюда? Ты мечтала о чем-то большем? 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 85,
    text:
      `
        Тебе будет скучно просто закончить учебу, работать, завести детей и потом наслаждаться слабостью и немощностью?
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 86,
    text:
      `
        Она рассказала то, что не знал никто. Девушка за минуту выдала все терзающие меня мысли о будущем.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 87,
    text:
      `
        Я посмотрела на нее, на наши сцепленные руки, которые почти что обжигали. В глазах девушки горел огонь. Живой огонь. Страсть к жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 88,
    text:
      `
        А мой огонь потух давно, и сейчас брюнетка вновь его разжигала. Она была права, и, если Лина и дурила меня, то это получалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 89,
    text:
      `
        Ты права, и все мое нутро хочет узнать больше, но разум говорит мне, что надо идти домой и готовиться к зачёту. А все это детские сказки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 90,
    text:
      `
        Детские мечты, которым не суждено исполниться.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 91,
    text:
      `
        Девушка сконфуженно улыбнулась, и спокойно ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 92,
    text:
      `
        Хорошо, Ники, я не буду настаивать, но я знаю, что у нас есть общие черты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 93,
    text:
      `
        Любознательность. Ты пошла на психолога, чтобы узнать себя? Свое видение жизни? 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 94,
    text:
      `
        Люди тебе не помогут, ведь их знания — это лишь верхушка айсберга. Настоящие знания у нас. Если ты считаешь, что я лишь играю, то соглашайся. Пойдем со мной, ты ничем не рискуешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 95,
    text:
      `
        Она смотрела с детской наивностью. Время тянулось слишком долго и, увидев в моих глазах сомнения, она сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 96,
    text:
      `
        Я дам тебе свой номер, позвони мне, когда будешь готова. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 97,
    text:
      `
        Оставаться с нами или нет — это твой выбор. Хотя бы подумай над возможностями, что откроются перед тобой. О смысле своей жизни. Держи.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: 'Лина',
    imageFront: require('../../../../Images/OTV/Persons/Lina_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 98,
    text:
      `
        Она вручила мне листочек с номером, и собралась уходить. Мне не хотелось прощаться с ней вот так, и я сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    stats: [{ story: EStoriesEn.OTV, value: 1, category: 'Item', id: 'Lina_Number' }],
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 99,
    text:
      `
        Стой, Лина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 100,
    text:
      `
        Было приятно познакомиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 101,
    text:
      `
        Девушка улыбнулась и скрылась за зданием. Я посмотрела на листочек с номером, благоухающий дорогим парфюмом, манящим неповторимым шлейфом.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 102,
    text:
      `
        «Совсем как она». 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 103,
    text:
      `
        Я осталась одна со столь маленькой долей информации, что открылась мне, и, решив повременить с возвращением домой, направилась в парк.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/University.jpg')
  },

  {
    id: 104,
    text:
      `
        Завтрашний зачет уже не имел смысла: я могла узнать правду о своих родителях и о самой себе. Я всегда гадала, что случилось с ними? Ведь выросла в приемной семье.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 105,
    text:
      `
        И родители никогда не скрывали этого факта, за что я благодарна. Они растили меня как свою дочь, и когда настало время, все рассказали.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 106,
    text:
      `
        Я чувствовала пустоту, одиночество, никто не мог понять моего стремления отыскать правду. Но теперь появилась надежда.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 107,
    text:
      `
        Я медленно проходила по парку, любуясь на темное осеннее небо, на траву, которая потеряла все жизненные краски, на деревья, что лишились разноцветного одеяния и теперь стояли, словно тени, ожидавшие прихода зимы.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 108,
    text:
      `
        Птицы давно улетели в теплые края, река текла тихо, будто боялась разбудить солнце, уходящее на покой. Лишь изредка вдалеке мелькали люди, что торопились домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 109,
    text:
      `
         И свет фонарей еле-еле освещал пустые дорожки, которые покрывали сброшенные листья. Весь мир будто замер в ожидании зимы.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 110,
    text:
      `
        Прохладный ветер немного растрепал мои волосы, но это было неважно.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 111,
    text:
      `
        Я не торопилась домой — в этой тишине на природе я ощущала себя гораздо комфортнее, чем в четырех стенах за подготовкой к зачету.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 112,
    text:
      `
        Впереди я увидела знакомый силуэт. Он сидел на скамейке, смотря туда, где солнце опускалось за горизонт.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 113,
    text:
      `
        Вначале хотела пройти мимо, но затем поняла, как по-детски это будет выглядеть, поэтому, когда мы поравнялись, все-таки решила спросить:
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 114,
    text:
      `
        Только не говори, что оказался тут случайно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 115,
    text:
      `
        В прошлый раз мы не успели познакомиться, Ники, верно? Меня зовут Алекс. И вообще-то я искал тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    stats: [
      { story: EStoriesEn.OTV, value: 0, category: 'Person', id: 'Alex' }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 116,
    text:
      `
        Парень встал со скамейки, и я напряглась, снова вспоминая нашу первую встречу.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 117,
    text:
      `
        Я не осознавала резкость сказанных слов, пока он снова не возвысился надо мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 118,
    text:
      `
        В этот раз его лицо было задумчивым, без намека на грубость. Он доброжелательно улыбнулся, создавая непринужденную обстановку, а я поинтересовалась:
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 119,
    text:
      `
        Зачем?
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 120,
    text:
      `
        Хотел поговорить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 121,
    text:
      `
        Пытаясь выглядеть максимально незаинтересованной, хоть это с трудом получалось, я уточнила:
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 122,
    text:
      `
        О чем?
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 123,
    text:
      `
        О тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 124,
    text:
      `
        Каждое слово давалось мне с неким трудом: сердце билось сильнее прежнего, но причина ясна.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 125,
    text:
      `
        «Я слишком волнуюсь, стоит взять себя в руки».
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 126,
    text:
      `
        И что же со мной не так?
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 127,
    text:
      `
        Ты первая из людей, кто не поддался гипнозу. И у меня лишь одно объяснение.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 128,
    text:
      `
        Какое?
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 129,
    text:
      `
        Решив разбавить неловкость момента, парень устремил взгляд вдаль, и, не отводя его, спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 130,
    text:
      `
        Пройдемся?
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 131,
    text:
      `
        Я пошла рядом с ним, ожидая ответы на свои вопросы.
      `,
    buttons: [
      {
        text: 'Посмотреть на Алекса',
        goTo: 132
      },
      {
        text: 'Смотреть вперед',
        goTo: 139
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 132,
    text:
      `
        Я мельком взглянула на парня: падающие тени выгодно подчеркивали его профиль.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    stats: [
      { story: EStoriesEn.OTV, value: +1, category: 'Person', id: 'Alex' }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 133,
    text:
      `
        Мужественное лицо, омраченное парой морщин, возникших от задумчивости, придавали особенного шарма.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 134,
    text:
      `
        Его карие глаза устремились поодаль, не смея смущать прямым взглядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 135,
    text:
      `
        Окружающий мир был приятной декорацией, и не отвлекал от его особенной красоты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 136,
    text:
      `
        Алекс был спокойным, холодным, и, казалось, так и располагал к приятной беседе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 137,
    text:
      `
        «Неужели, я причина его задумчивости?»
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 138,
    text:
      `
        Я заставила себя не смотреть слишком долго и стала озираться то перед собой, то на деревья, продолжая идти в компании парня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 139,
    text:
      `
        Яркий закат ослеплял, и, щурясь от солнца, стала озираться по сторонам, пытаясь избежать взгляда парня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 140,
    text:
      `
        Словно почувствовав напряжение, Алекс сказал, успокоив меня:
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 141,
    text:
      `
        Ты нервничаешь. Вчера я мог грубо обойтись, за что мне следует извиниться.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 142,
    text:
      `
        Моему терпению приходил конец, настолько я была заинтригована происходящим, и, пытаясь ускорить разговор, ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    music: require('../../../../Audio/OTV/Secret.mp3'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 143,
    text:
      `
        Извинения приняты. А теперь мне нужен ответ.
      `,
    buttons: [
      {
        text: 'Кто вы такие?',
        goTo: 144,
        func: () => {
          scenarioManager.changeSceneButtonStatus(143, 0, false)
          scenarioManager.manageDialog(143, [0, 1, 2], [3])
        }
      },
      {
        text: 'Какие ваши преимущества?',
        goTo: 152,
        func: () => {
          scenarioManager.changeSceneButtonStatus(143, 1, false)
          scenarioManager.manageDialog(143, [0, 1, 2], [3])
        }
      },
      {
        text: 'Что касается меня?',
        goTo: 154,
        func: () => {
          scenarioManager.changeSceneButtonStatus(143, 2, false)
          scenarioManager.manageDialog(143, [0, 1, 2], [3])
        }
      },
      {
        text: 'Продолжить',
        goTo: 157,
        isActive: false
      }],
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(143)
    },
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 144,
    text:
      `
        Алекс улыбнулся уголками губ, словно его порадовал мой вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 145,
    text:
      `
        Тогда придется начать издалека. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 146,
    text:
      `
        Мы называем себя Кланом Святого Грааля. И он имеет очень древнюю историю. Я не любитель долгих повествований, поэтому скажу кратко.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 147,
    text:
      `
        Давно шла война, самые влиятельные представители двух Кланов заключили союз, что способствовало созданию мира и равновесия.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 148,
    text:
      `
        Рассказывая историю, парень то и дело смотрел на меня, изучая реакцию.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 149,
    text:
      `
        Каждый из Кланов обладал своими значимыми преимуществами: у одних были сильнее развиты ментальные силы, у других — физические.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 150,
    text:
      `
        Когда мы объединились, то каждый поделился частью своей силы с другим. Этот союз породил равновесие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 151,
    text:
      `
        Прошла тысяча лет с того древнего союза, но мы еще помним и чтим память тех, кто помог нам избежать войны на многие века вперед. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(143, 151)
    },
    speaker: 'Алекс пролог',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 152,
    text:
      `
        Как я понимаю, ваши преимущества перед людьми — это физическая сила и внушение? 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 153,
    text:
      `
        Все верно.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(143, 153)
    },
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 154,
    text:
      `
        Ты не человек, иначе я бы смог тебе внушить забыть разговор. Значит что ты — одна из нас. Но как так вышло, я понятия не имею. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 155,
    text:
      `
        Обычно наши не расходятся, и вчера я не был готов к подобной встрече. Твоё появление…
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 156,
    text:
      `
        Ввело меня в недоумение.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(143, 156)
    },
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 157,
    text:
      `
        Я размышляла о той информации, что крутилась в голове, и, обдумав, ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 158,
    text:
      `
        Это слишком для меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    music: require('../../../../Audio/OTV/Ambient.mp3'),
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 159,
    text:
      `
        Алекс улыбнулся, склонив голову вперед, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 160,
    text:
      `
         Никогда не думал, что кто-то из нас может спокойно жить за пределами Клана. Вся наша жизнь направлена на развитие и поддержание способностей, без которых мы теряем смысл к существованию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 161,
    text:
      `
        Скажи, каково это, жить не своей жизнью? 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 162,
    text:
      `
        Я подумала, и поток слов, исходящий из моей души, было уже не остановить:
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 163,
    text:
      `
        Всю жизнь я спрашивала себя, что со мной не так? Почему мне мало того, чем я живу? Где моя жизнь? Я будто жила не своей, не полной жизнью.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 164,
    text:
      `
        Я не могла насладиться ее вкусом, все быстро становилось пресным. Тогда я начала копаться в себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 165,
    text:
      `
        Что мне надо для полноценной жизни? Ответ так и не приходил в голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 166,
    text:
      `
        Но по ночам снились странные сны, где будто «оживала», где была истинная я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 167,
    text:
      `
        И только вчера, когда ты в толпе задел меня, я будто опять очутилась во сне. И, правда, не знаю, почему пошла за тобой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 168,
    text:
      `
        Я излила душу Алексу, парню, которого знала так мало и, испытав чувство стыда, взглянула на него, сказав:
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 169,
    text:
      `
        Извини, я… слишком разоткровенничалась. А мы ведь даже незнакомы.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 170,
    text:
      `
        Я думаю, что это далеко не последняя наша встреча, Ники. Тебе всегда есть место в Клане. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 171,
    text:
      `
        Я не стану уговаривать, но уверен, что ты найдешь ответы если не на все, то на большую часть своих вопросов.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 172,
    text:
      `
        Я задумывалась над перспективой начать жизнь сначала, меня это пугало, но я чувствовала, что этот шанс нельзя упускать.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 173,
    text:
      `
        Да, думаю, ты меня убедил. Я должна больше узнать о себе. Глупо будет проигнорировать этот жест судьбы…
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 174,
    text:
      `
        Следующий вопрос явился моментально, и, не задумываясь, я спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 175,
    text:
      `
        Ты говорил, что у всех есть преимущества, но почему я никогда не чувствовала себя сильной? 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 176,
    text:
      `
        Видишь, тебе уже интересно. Академия может ответить на многие твои вопросы. Пойдем.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 177,
    text:
      `
        Все произошло слишком быстро: парень остановился передо мной, и, продолжая идти, я чуть не врезалась в него, и уперлась руками в его грудь.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 178,
    text:
      `
        Алекс быстро взял меня под руки, не позволив споткнуться и упасть. Совершенно пораженная, я ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 179,
    text:
      `
        Ух, ты, вот это скорость…
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 180,
    text:
      `
        Удивившись, я быстро сделала шаг назад, увеличивая дистанцию между нами, и тут же смутилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 181,
    text:
      `
        Не привык к реакции людей. Все нормально? 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 182,
    text:
      `
        Да. Так вот о чем ты говорил, подразумевая физическую силу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 183,
    text:
      `
        Но если я одна из вас, то почему у меня нет сил? Звучит как бред.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 184,
    text:
      `
        Парень немного улыбнулся уголками губ и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 185,
    text:
      `
        Мы много тренируемся, и способности открываются преимущественно после особого вмешательства. Это лишь символически, не переживай. Называется «Посвящение».
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 186,
    text:
      `
        Что-то вроде посвящения в первокурсники у обычных людей.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 187,
    text:
      `
        Я почти ничего не поняла, но все же, чтобы не ударить в грязь лицом, ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 188,
    text:
      `
        Понятно.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 189,
    text:
      `
        Поежившись от порыва холодного ветра, я посмотрела время на телефоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 190,
    text:
      `
        Мне пора домой. Завтра у меня зачет, надо подготовиться. Тем более уже вечереет.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 191,
    text:
      `
        Отговорка вышла не сильно убедительной, но я хотела обдумать все, что узнала. Компания Алекса мне нравилась, но он каким-то образом будто воздействовал на принятие итогового решения.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 192,
    text:
      `
        Иначе как объяснить тот факт, что я согласилась узнать больше про Клан?
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 193,
    text:
      `
        Алекс понимающе кивнул, и, не задерживая меня, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 194,
    text:
      `
        Я провожу тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 195,
    text:
      `
        Какое-то время мы шли молча, и эта тишина давила тяжким грузом. Я не знала, о чем еще можно поговорить, а парень, ощущая напряжение, остановился, и, посмотрев мне в глаза, спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 196,
    text:
      `
        Я понимаю, ты боишься, что весь твой привычный мир рухнет, но зачем продолжать жить старой жизнью, если перед тобой открыты новые двери? 
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 197,
    text:
      `
        С завтрашнего дня ты могла бы быть с нами, стать частью нашего Клана, почему тебе важен какой-то зачет? 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 198,
    text:
      `
        Он поможет спасти твою жизнь? Поможет справиться с проблемами?  
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 199,
    text:
      `
        Я не стала останавливаться, лишь замедлила шаг. Он поравнялся, и я, не глядя на него, ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 200,
    text:
      `
        Он поможет приемным родителям не разочароваться во мне. Они всю жизнь дарили столько любви, и я хочу стать кем-то, известным психологом, например.  Сделать это ради них. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 201,
    text:
      `
        Разве они будут рады твоим мучениям? Твоей лжи самой себе? Разве каждый родитель не желает своему ребенку счастья и того, чтобы он реализовал себя?
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 202,
    text:
      `
        Все трудно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 203,
    text:
      `
        Решив сменить тему и узнать Алекса получше, я спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 204,
    text:
      `
        Расскажи о своих родителях. Какими они хотят видеть тебя? Кем хотят, чтобы ты был? 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 205,
    text:
      `
        С детства мне твердили, что я должен защищать сестру и не подвести семью, должен много чего изучить, исследовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 300,
    text:
      `
        У тебя есть и сестра?
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 206,
    text:
      `
        Есть, и ты с ней уже знакома. Сходства не уловила?
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 207,
    text:
      `
        Я долго гадала, кем приходились они друг-другу и в один миг все стало ясно.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 208,
    text:
      `
        Что?! Лина твоя сестра? Она не сказала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    stats: [{ story: EStoriesEn.OTV, value: 0, category: 'Person', id: 'Lina' }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 209,
    text:
      `
        Парень продолжил свой рассказ, смотря перед собой:
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 210,
    text:
      `
        Усердные тренировки, углубленные занятия, особые поручения. Помогаю тем, кто в этом нуждается. И да, слежу за сестрой, чтобы она не лезла в неприятности.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 211,
    text:
      `
        Как все серьезно, от тебя многого ждут. И как, твои родители гордятся тем, что видят?
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 212,
    text:
      `
        Он сменил улыбку на серьезное выражение, глаза его стали пустыми, а тон голоса заметно охладел.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 213,
    text:
      `
        Если бы я знал. Их убили, когда мы с Линой были детьми. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 214,
    text:
      `
        Пожалев о заданном вопросе, я прошептала:
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 215,
    text:
      `
        Алекс, я не знала, мне жаль…
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_Streetwear.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 216,
    text:
      `
        Ничего. Я найду того, кто это сделал и … подвергну соответствующему наказанию. Его-то мы вчера и искали.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 217,
    text:
      `
        Я поклялся, что никогда не прощу себя, если не найду убийц и не уничтожу их жизнь, как они уничтожили жизнь двоих ничем не повинных детей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: 'Алекс',
    imageFront: require('../../../../Images/OTV/Persons/Alex_Prologue.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 218,
    text:
      `
        Остаток пути до моего дома мы провели в молчании: не хотела ухудшить ситуацию своими вопросами. Лишь когда мы оказались у подъезда, я поблагодарила его и зашла внутрь.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Park_Dawn.jpg')
  },

  {
    id: 219,
    text:
      `
        Переодевшись в домашнюю одежду, я налила чай, и, опустившись в кресло, задумалась:
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 220,
    text:
      `
        «Похоже, мне действительно интересно узнать больше. Как повезло, что я познакомилась с Линой и Алексом в столь непростых обстоятельствах».
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    message: 'Стат Наследие — героиня чтит традиции, силу семьи, и идет по их пути несмотря ни на что. Сила крови и родственная связь для нее все',
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 221,
    text:
      `
        Сделав глоток горячего чая, я задумалась:
      `,
    buttons: [
      {
        text: 'Об Алексе',
        goTo: 222
      },
      {
        text: 'О родителях',
        goTo: 228
      },
      {
        text: 'О своей жизни',
        goTo: 232
      }],
    message: 'Стат Трансформация — верит в прогресс, такая героиня готова идти на некоторые уступки ради сохранения баланса. Для нее имеет большее значение настоящее, нежели прошлое',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 222,
    text:
      `
        «Мне очень симпатичен Алекс, но буду ли я интересна ему? Мы ведь из разных миров». 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    stats: [
      { story: EStoriesEn.OTV, value: +1, category: 'Person', id: 'Alex' }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 223,
    text:
      `
        Внутренний голос шептал, что теперь мы будем в одном мире, и на одно препятствие станет меньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 224,
    text:
      `
        «А если у него кто-то есть?»
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 225,
    text:
      `
        Отгоняя меланхоличные мысли, перевела внимание на другой момент.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 226,
    text:
      `
        «Сейчас его цель понятна — найти убийц родителей. И стоит ли вообще к нему пытаться проявить теплые чувства?»
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 227,
    text:
      `
        «Или все с треском провалится?»
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 228,
    text:
      `
        Рано было задумываться наперед, но все же, есть мысли, которые тревожили меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    stats: [
      { story: EStoriesEn.OTV, value: +1, category: 'Effect', id: 'Hereditary' }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 229,
    text:
      `
        «Как отреагируют родители на то, что я брошу универ, если стану частью Клана?»
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 230,
    text:
      `
        «Смогу ли я совмещать? Или мне придется врать моим близким?»
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 231,
    text:
      `
        «Неужели, придется разочаровать их? Ведь они так гордятся моими успехами».
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 232,
    text:
      `
        Оглядев пустую квартиру, стало грустно. Вся моя жизнь проходила за учебой, и я почти никуда не выбиралась одна.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    stats: [
      { story: EStoriesEn.OTV, value: 1, category: 'Effect', id: 'Transformation' }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 233,
    text:
      `
        Друзей тоже не было, но я поддерживала хорошие отношения с однокурсницей — Эмили. Изредка мы встречались, гуляли вместе, на этом все.
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 234,
    text:
      `
        Каждый раз, ловя себя на одиночестве, я обещала, что все обязательно будет по-другому. Но ничего не менялось.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 235,
    text:
      `
        До сих пор.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 236,
    text:
      `
        Знакомые подшучивали, говоря, что мне стоит снизить планку ожиданий, но я не могла. Верила, должен быть человек, с которым будет комфортно.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 237,
    text:
      `
        «Стоило раньше осознать, что одиночество — мой осознанный выбор, но иногда я же от этого и страдаю».
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speaker: 'Ники',
    imageFront: require('../../../../Images/OTV/Persons/Nicki_TShirt.png'),
    imageBorder: require('../../../../Images/OTV/UI/Border.png'),
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  },

  {
    id: 238,
    text:
      `
        С благодарностью принимая все изменения в своей жизни, я легла спать, предвкушая, что же принесет завтрашний день.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('OTV', 'Глава 1', 'Часть 2', '0')
        }
      }],
    achievement: { story: EStoriesEn.OTV, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/OTV/Backgrounds/Livingroom_Evening.jpg')
  }
])
