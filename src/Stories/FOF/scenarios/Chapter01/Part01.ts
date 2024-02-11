import { saveEndProgress, scenarioManager, statsManager, timer } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { blackFlash } from '../../../../Components/Slide/Slide'
import { askedAmount, choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Всепоглощающая тьма сменялась яркими вспышками, пульсирующая боль в голове давила тяжелым грузом. Сколько времени я провела в таком состоянии — мне было неизвестно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg'),
    music: require('../../../../Sounds/FOF/Cardio.mp3')
  },

  {
    id: 1,
    text:
      `
        Все тело болело. Я слышала каждый разговор, но не могла произнести ни слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        «Что со мной происходит?»
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        Как вы смеете держать ее здесь?! Я забираю мою племянницу отсюда сейчас же. Эти условия для нее губительны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    beforeBegin: blackFlash,
    speaker: 'Тетя',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        К сожалению, мы не можем допустить этого. Я понимаю, что вы переживаете, но девушка и так борется за жизнь. Она же находится без сознания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Доктор',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Doctor.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 5,
    text:
      `
        «Что это значит? Неужели я не выживу? Нет, только не это...»
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        Там она будет под наблюдением личных врачей, где ей обеспечат должный уход и внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: 'Тетя',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        «Забери меня отсюда, тетя, прошу...»
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        Она кажется такой слабой. Скоро очнется?
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    darkSilhouette: true,
    beforeBegin: blackFlash,
    speaker: 'Эйприл',
    imageFront: require('../../../../Images/FOF/Persons/April.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 9,
    text:
      `
        «Уж не сомневайся, я точно очнусь и полюбуюсь на твое недовольное выражение лица».
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 10,
    text:
      `
        Я не могу дать гарантий. Ее родственница договаривается с больницей, чтобы перевезти ее в частную клинику.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    darkSilhouette: true,
    speaker: 'Доктор',
    imageFront: require('../../../../Images/FOF/Persons/Doctor.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        «Уж лучше там, чем здесь, в гадюшнике, где лечат всех подряд: от бомжей до алкоголиков».
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        Я видела его очертания. На миг мне даже послышался отголосок его парфюма. Он находился здесь ради меня и это придавало сил.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    darkSilhouette: true,
    beforeBegin: blackFlash,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        Лицо Дерека несколько осунулось, а в глазах больше не отражался тот самый огонь, который разжигал парня изнутри. Он медленно прошелся по палате и, остановившись рядом с цветами, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        Ты хоть понимаешь, что я сейчас чувствую? 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    darkSilhouette: true,
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 340,
    text:
      `

      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) <= 0,
        goTo: 15
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) >= 1,
        goTo: 19
      },
      {
        condition: () => statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Derek' }) >= 3,
        goTo: 23
      }
    ]
  },

  {
    id: 15,
    text:
      `
        Ты уничтожила все, чего я так упорно добивался. Возможно, если ты что-то и осознаешь сейчас, то винишь в этом команду. Но, запомни, Кассандра: рыба гниет с головы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    message: 'Дерек ненавидит тебя и бросил прямо в больнице',
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -2, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -2, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        Ты как лидер — никчемная, ты всех подвела и не смогла элементарно выполнить миллион раз отрепетированный трюк.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        Может, это и к лучшему. Как девушка давно перестала меня привлекать, и как лидер — ты никакая. И я больше не хочу иметь с тобой ничего общего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 18,
    text:
      `
        «Подсознательно я понимала, к чему приведут нас эти отношения, но почему сейчас на душе так паршиво? Чувствую себя униженной».
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        Ты подвела не только меня, но и свою команду. Разве так поступает лидер?
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    message: 'Дерек ничего к тебе не испытывает. Он бросил тебя прямо в больнице',
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Derek' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        Нет. Видимо, ты все время занимала чужое место. Это касается и наших отношений, которые я больше не хочу продолжать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 21,
    text:
      `
        Надеюсь, твоя команда сможет найти себе новую чирлидершу, которая станет их капитаном, способным поддержать моих парней. Прощай, Кассандра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        «Подсознательно я понимала, к чему приведут нас эти отношения, но почему сейчас было неприятно? Я понимаю, что мы не были близки, однако разрывать отношения сейчас — низость с его стороны».
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        Кэсси, я не знаю, что мне сейчас и думать. Мои парни в растерянности, твои девочки — тоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    message: 'Дерек переживает за тебя, он продолжает поддерживать ваши отношения',
    music: require('../../../../Sounds/FOF/Derek.mp3'),
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Derek' }],
    achievement: { story: EStoriesEn.FOF, name: 'CaptainsGirlfriend' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        Как капитан я должен быть рядом с ними и немного прояснить ситуацию, но где взять на это силы?
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        Ты нужна мне, Кассандра. Выздоравливай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Дерек',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        «Как же я рада слышать от него теплые слова. Неужели такой парень как он, потенциальный ловелас, может проявлять нежные чувства?»
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        Ощутив его поцелуй на своей щеке, я поняла, что это не сон.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        Тьма снова поглотила меня, и, лишив сознания, уволокла далеко за пределы этого мира. Никогда прежде мне не приходилось испытывать подобное облегчение, которое сменяется страхом за свою жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    music: require('../../../../Sounds/FOF/Space.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 29,
    text:
      `
        Я блуждала по опустошенному миру, который был лишен света. Холодная вязкая чернота проникала в сознание, и я ни на шутку перепугалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 30,
    text:
      `
        Это сон? 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 31,
    text:
      `
        Проснись, Кассандра, проснись. Ну, же!
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 32,
    text:
      `
        Просыпайся, черт возьми! Эй! 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 33,
    text:
      `
        Осознание тяжелым грузом легло на мою душу. Как бы я ни старалась проснуться — это не давало результата.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 34,
    text:
      `
        Неужели, я умерла? И это мой конец? Где тогда рай? Где ад? Куда я попала?
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 35,
    text:
      `
        Так тупо, я задаю вопросы, в надежде, что кто-то ответит. Но я одна. Совсем одна.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 36,
    text:
      `
        Глаза намокли от слез, и я позволила себе слабость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 37,
    text:
      `
        Непонятный шум в стороне заставил меня обернуться. Ощутив себя слепым и беспомощным существом, я пошла на звук, в надежде хоть что-то узнать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 38,
    text:
      `
        Кто здесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 39,
    text:
      `
        Никто не ответил, но чего я ожидала? Совсем недавно сознание было при мне, а сейчас? 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 40,
    text:
      `
        Где я находилась, и, более важный вопрос, который тревожил меня: неужели я мертва? На этом и закончилась моя жизнь? Так глупо и бестолково?
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 41,
    text:
      `
        Хочешь ли ты жить или готова умереть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 42,
    text:
      `
        Пытаясь найти источник звука, я снова побежала. Это был мой шанс на спасение. Черта с два мне придется проиграть!
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 43,
    text:
      `
        ГДЕ Я? КТО ТЫ? ЧЕГО ТЫ ОТ МЕНЯ ХОЧЕШЬ? 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 44,
    text:
      `
        Паника овладела мной полностью: боясь неизвестности, взгляд метался из стороны в сторону, пытаясь найти того, кто со мной говорил.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 45,
    text:
      `
        В этом хаосе гулом продолжал звучать в моей голове вопрос:
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 46,
    text:
      `
        «Хочешь ли ты жить или готова умереть?»
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 47,
    text:
      `
        Где же оно? Где?
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 48,
    text:
      `
        Не знаю, сколько времени я бесполезно истязала себя, пытаясь найти хоть что-то или кого-то, кто вытащит меня отсюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 49,
    text:
      `
        Когда силы иссякли, ноги сами отказались продолжать поиски. Упав на нечто, напоминающее прохладную гладь реки, я позволила себе испытать все, что накопилось за это время. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    ambient: require('../../../../Sounds/FOF/Cry.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 50,
    text:
      `
        «Так вот он, конец моей жизни? Смерть пришла за мной...»
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 342,
    text:
      `
        Слезы градом полились из моих глаз, и, стекая по щеке, пропадали в неизвестности.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 51,
    text:
      `
        «Готова ли я оставить этот мир, всю его красоту, роскошь?»
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg'),
    ambient: require('../../../../Sounds/Common/Silence.mp3')
  },

  {
    id: 52,
    text:
      `
        «И чтобы меня ждало? Ограниченное пространство и сырая земля с червями? Нет, я не готова к этому».
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 53,
    text:
      `
        Я хочу жить! Я должна жить!
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 54,
    text:
      `
        Частичка надежды все еще теплилась в моей душе. Я верила, что меня ждет хороший исход.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 55,
    text:
      `
        Есть одно условие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 56,
    text:
      `
        У меня есть деньги, я могу заплатить. Сколько угодно, тебе до конца жизни хватит, будешь жить с комфортом, ни в чем себе никогда не откажешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 57,
    text:
      `
        Без умолку распиналась я, в надежде купить свою жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 58,
    text:
      `
        Меня не интересуют твои деньги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 59,
    text:
      `
        Тогда что? Что тебе от меня нужно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 60,
    text:
      `
        Сделка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 61,
    text:
      `
        Что? Какая сделка?
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 62,
    text:
      `
        Ты начнешь новую жизнь. В другом теле.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 63,
    text:
      `
        Его слова эхом отзывались в моей голове.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 64,
    text:
      `
         «Что?! Как это возможно?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 65,
    text:
      `
        Осмотрев себя, поняла, что не могла этого сделать. Не могла оставить свое тело, которое я изнуряла тренировками ради идеального пресса.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 66,
    text:
      `
        «Сколько времени я провела в зале, уделяя внимание каждой мышце? Как долго я качала сексуальную попу, чтобы платье идеально сидело?»
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 67,
    text:
      `
        Мое тело было предметом желания и восхищения каждого парня и мужчины, все меня хотели, и мне это нравилось.
      `,
    buttons: [
      {
        text: 'Вспомнить ощущение собственного превосходства',
        goTo: 344,
        gift: true
      },
      {
        text: 'Не вспоминать',
        goTo: 89
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 344,
    text:
      `
        Я была в зале, выполняла слишком изнуряющие упражнения, а тренер контролировал каждое мое действие и вел подсчет.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    music: require('../../../../Sounds/FOF/Gym.mp3'),
    message: 'Твоя внешкольная деятельность поражает!',
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 68,
    text:
      `
        Давай, Кэсси, еще десять приседаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Дюк',
    imageFront: require('../../../../Images/FOF/Persons/Duke.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 69,
    text:
      `
        Я устала, больше не могу. Мне даже не удалось отдохнуть после предыдущих подходов.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 70,
    text:
      `
        Тренер рассердился и, повысив тон голоса, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 71,
    text:
      `
        Ты тратишь мое время, девочка. Известные люди в очереди встают, чтобы заниматься под моим руководством. А что делаешь ты?
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Дюк',
    imageFront: require('../../../../Images/FOF/Persons/Duke.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 72,
    text:
      `
        Показываешь, какая ты избалованная и капризная девочка, и за огромные суммы, которые выкладывает твоя тетя, не занимаешься, а стонешь о том, как устала?
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Дюк',
    imageFront: require('../../../../Images/FOF/Persons/Duke.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 73,
    text:
      `
        Не разговаривай со мной в таком тоне, Дюк, я не позволю общаться со мной так. Ты лишь тренер, выполняй свою работу.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 74,
    text:
      `
        Мужчина усмехнулся, и, не принимая слова близко к сердцу, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 75,
    text:
      `
        Пойми, спорт делает нас сильнее. И все эти тренировки с девочками — вот пустая трата времени. Что тебе дает чирлидинг? Похотливые взгляды озабоченных подростков?
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Дюк',
    imageFront: require('../../../../Images/FOF/Persons/Duke.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 76,
    text:
      `
        Ты говоришь как моя тетя. Неужели у всех, кому за тридцать — проблемы с восприятием чирлидинга?
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 77,
    text:
      `
        Я не просто чирлидерша, а их капитан. Их лидер, понимаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 78,
    text:
      `
        Моя спортивная подготовка на высшем уровне благодаря упорным тренировкам и растяжке. И я обучаю девушек мастерству танца. Вот ключ к успеху.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 79,
    text:
      `
        Дюк еле сдержал улыбку.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 80,
    text:
      `
        Но твое тело все еще слабое, раз не можешь одолеть силовые тренировки. Ты все еще слаба, Кассандра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Дюк',
    imageFront: require('../../../../Images/FOF/Persons/Duke.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 81,
    text:
      `
        Поправив волосы, я гордо сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 82,
    text:
      `
        Я не грузовая лошадь, чтобы тягать тяжести, тренер.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 83,
    text:
      `
        Мужчина взял в руки небольшие гантели и пояснил:
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 84,
    text:
      `
        Это — необходимый атрибут не для того, чтобы стать качком, а для наращивания мышц. Разве ты не хочешь быть более сексуальной?
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Дюк',
    imageFront: require('../../../../Images/FOF/Persons/Duke.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 85,
    text:
      `
        Когда дело касалось сексуальности, никто не мог превзойти меня. Демонстрируя прекрасную растяжку, я села на шпагат.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 86,
    text:
      `
        Неужели, тренер, я не сексуальна? 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_T-shirt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 87,
    text:
      `
        Тренер ничуть не сконфузился. Ведь через него проходили многие известные люди, от актеров до моделей. И ничто не могло его смутить. Мужчина оценил мой жест и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 88,
    text:
      `
        Если хочешь стать сексуальной, уверенной в себе и красивой, то необходимы силовые упражнения. Накачаешь сочную попу, взгляд будет не оторвать. Или хочешь остаться плоской? 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Дюк',
    imageFront: require('../../../../Images/FOF/Persons/Duke.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Fitness.jpg')
  },

  {
    id: 89,
    text:
      `
        «А какая сейчас к черту разница?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 90,
    text:
      `
        «Воспоминания могли исправить то, что происходило сейчас? Нет, но они могли немного отвлечь меня от происходящего». 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 91,
    text:
      `
        «И сейчас я уж точно не хотела этого делать. Надо было сконцентрироваться на проблеме».
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 93,
    text:
      `
        «Сколько денег и времени я потратила на то, чтобы добиться идеального качества волос, да еще и блонда?»
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Кассандра',
    music: require('../../../../Sounds/FOF/Space.mp3'),
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 94,
    text:
      `
        «А моя кожа? Каждое воскресенье я посещала самого знаменитого косметолога, оставляя у него такие суммы, что бедные удавились бы от зависти». 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 95,
    text:
      `
        Мое тело — идеальное. Цена была слишком высокой.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 96,
    text:
      `
        Я не могу.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 97,
    text:
      `
        Значит, выбираешь смерть?
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    darkSilhouette: true,
    speaker: 'Незнакомец',
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 98,
    text:
      `
        НЕТ! 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 99,
    text:
      `
        Давай я кое-что поясню. Твое тело сражается за жизнь. Сейчас мы можем помочь друг другу, и я вылечу тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 100,
    text:
      `
        Скажи, что согласна, чтобы твоя душа заняла другое тело или продолжишь находиться в коме, пока тело будет угасать.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 101,
    text:
      `
        Слова незнакомца повергли меня в смятение. И я не знала: оставался ли выбор?
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 102,
    text:
      `
        «Хотела ли я оставаться здесь? Нет».
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 103,
    text:
      `
        «Хотела ли я уйти отсюда, но быть в другом теле? Нет. Но третьего варианта не было».
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 104,
    text:
      `
        Смирившись с тем, что меня ожидает, я спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 105,
    text:
      `
        Это больно?
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 106,
    text:
      `
        Нет. Но трудно свыкнуться с мыслью, что ты — больше не ты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 107,
    text:
      `
        «В одно мгновение я потеряю все, чего добивалась годами. Я больше не увижу тетю, не обниму ее. Но это же все временно? И сейчас у меня есть время вспомнить».
      `,
    buttons: [
      {
        text: 'Вспомнить последний ужин с тетей',
        goTo: 108,
        gift: true
      },
      {
        text: 'Не вспоминать',
        goTo: 142
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 108,
    text:
      `
        В тот вечер я немного задержалась, поэтому не успела подойти к назначенному времени в ресторан, который моя тетя любила больше всего.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    music: require('../../../../Sounds/FOF/Whisper.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 109,
    text:
      `
        Мы с девочками тренировались, а Дерек восхищенно зааплодировал, когда я сделала сальто. Стоило нам только закончить тренировку, как капитан вплотную подошел ко мне и прошептал:
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 110,
    text:
      `
        Ты отлично выложилась и смогла меня возбудить, не хочешь расслабиться?
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 111,
    text:
      `
        Опустив взгляд вниз, я увидела, что часть его и правда хотела меня. Его тело источало дикое желание, а глаза помутнели. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 112,
    text:
      `
        Казалось, парень был готов сделать это здесь и сейчас. И с сожалением я произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 113,
    text:
      `
        Я спешу, сегодня ужин с тетей, и я уже опаздываю.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra_Cheerleader.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 114,
    text:
      `
        Долго ли ты планируешь бегать от меня, чирлидерша? Смотри, я скоро просто не смогу терпеть.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Дерек',
    imageFront: require('../../../../Images/FOF/Persons/Derek.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 115,
    text:
      `
        Он ушел, а я, не теряя времени, отправилась в ресторан.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Gym.jpg')
  },

  {
    id: 116,
    text:
      `
        Тетя продолжала ждать меня, недовольно посматривая на часы. Когда я наконец пришла, официант поднес мне меню.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 117,
    text:
      `
        Извини, опоздала.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 118,
    text:
      `
        Я не стала упоминать про то, что мы репетировали трудную связку, ведь ей это было совсем не интересно.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 119,
    text:
      `
        Я отложила важную встречу, чтобы поужинать с тобой, Кассандра. Но, вижу, что ты совсем уж не ценишь мое время.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 120,
    text:
      `
        Я тренировалась, тебе известно...
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 121,
    text:
      `
        Тетя моментально перебила меня, не позволив сказать ни слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 122,
    text:
      `
        Мне известно, ЧЕМ ты занимаешься. Думаешь, я не вижу, ради чего ты остаешься на тренировках?
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 123,
    text:
      `
        Точнее, ради кого остаешься там крутить задницей, как последняя шлюха? И все ради чего? Чтобы поддержать напичканных тестостероном качков?
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 124,
    text:
      `
        Этому ты, как лидер, учишь остальных девушек? Позор, Кассандра.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 125,
    text:
      `
        Гнев во мне закипал, и я не могла больше молчать, но она снова не позволила мне ответить.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 126,
    text:
      `
        Запомни, племянница, если посмеешь забеременеть, то вся твоя жизнь будет разрушена.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 127,
    text:
      `
        Похоже, я совсем избаловала тебя, раз думаешь, что в жизни все будет даваться легко. А ведь время драгоценно. Но о чем тут говорить, если совсем не умеешь ценить его?
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 128,
    text:
      `
        Я растила тебя не для того, чтобы ты крутила задницей перед мальчишками. Думала, что хваткой ты пойдешь в меня, будешь видеть правильный пример в своей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 129,
    text:
      `
        Я не могла больше слушать слова, которые никаким образом не описывали меня, и, откинув меню в сторону, гордо ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 130,
    text:
      `
        Пример чего? Старой и никому не нужной девы? 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 131,
    text:
      `
        Ты всегда погружаешься в работу, и что тебе это дало? Любовь?
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 132,
    text:
      `
        Милая девочка, как же ты ошибаешься. Ты так молода и неопытна. В мире есть куда более важные вещи, чем любовь.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 133,
    text:
      `
        Женщина сделала глоток белого вина, продолжая сверлить меня грозным взглядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 134,
    text:
      `
        Какие важные вещи? Работа? Бизнес? Об этом ты говоришь?
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 135,
    text:
      `
        Ты сама — вот что самое важное в жизни. Когда ты ставишь на первое место поддержку других — ты теряешь себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 136,
    text:
      `
        Так я себя нахожу, тетя. Ты ошиблась. И я всегда ставлю только себя на первое место, ты этому меня научила.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 137,
    text:
      `
        Я не хотела тебя разозлить, милая. Просто вижу в тебе потенциал, который ты сама не в силах увидеть. И хочу помочь тебе направить его в нужное русло.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Тетя',
    imageFront: require('../../../../Images/FOF/Persons/Aunt.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 138,
    text:
      `
        Мы больше не могли ничего сказать друг другу, и, дождавшись блюд, начали ужинать в тишине.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 139,
    text:
      `
        Было очень обидно, что тетя так плохо думала обо мне, и я хоть и злилась, но ...
      `,
    buttons: [
      {
        text: 'Все равно любила ее',
        goTo: 140
      },
      {
        text: 'Не могла простить',
        goTo: 141
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 140,
    text:
      `
        Потому что она осталась единственной из моих родных. Пусть мы и не всегда сходились во мнениях, касательно моего будущего, но я чувствую — тетя по-своему поддерживает меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    message: 'Что бы ни происходило, ты все равно любишь тетю, и она знает это',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Aunt' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 141,
    text:
      `
        «Как я могла забыть унизительные высказывания в мой адрес? Никто не имел права так грубо обзывать меня, и я не могу ее простить».
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    message: 'Возможно, ты не сильно дорожишь тетей, и она тоже чувствует это',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Aunt' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Restaurant.jpg')
  },

  {
    id: 142,
    text:
      `
        Это хоть и трудно признать, но я не хотела вспоминать, во что превратился вечер. Тетя отчитала меня, назвала шлюхой, и все из-за того, что я — чирлидерша.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 143,
    text:
      `
        Было очень обидно, что тетя так плохо думала обо мне, и, хоть она и извинилась, но ее слова надолго останутся в памяти. И пускай она так резко выразилась, но я...
      `,
    buttons: [
      {
        text: 'Все равно любила ее',
        goTo: 144
      },
      {
        text: 'Не могла простить',
        goTo: 145
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 144,
    text:
      `
        Потому что она осталась единственной из моих родных. Пусть мы хоть и не всегда сходились во мнениях, касательно моего будущего.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    message: 'Что бы ни происходило, ты все равно любишь тетю, и она знает это.',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Aunt' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 145,
    text:
      `
        Как я могла забыть унизительные высказывания в мой адрес? Никто не имел права так грубо обзывать меня, и я не смогла ее простить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    message: 'Возможно, ты не сильно дорожишь тетей, и она тоже видит это. ',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Aunt' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 146,
    text:
      `
        Мой разум больше не мог оттягивать неизбежное, мою судьбу, но страх за будущее взял вверх. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    music: require('../../../../Sounds/FOF/Space.mp3'),
    stats: [{ story: EStoriesEn.FOF, value: 0, category: 'Person', id: 'Aunt' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 147,
    text:
      `
        Что меня ждет? 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 148,
    text:
      `
        Тишина была невыносимой: здесь не было ни единого шороха, ни порыва ветра, ни отдаленных голосов, к которым я так привыкла. Абсолютная пустота.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 149,
    text:
      `
        Новая жизнь. Запомни: ты больше не будешь Кассандрой. Ты должна измениться.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 150,
    text:
      `
        Теперь у тебя новое имя — Эбигейл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 151,
    text:
      `
        Старой жизни больше нет — есть только новая жизнь и цель. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 152,
    text:
      `
        Какая цель? 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 153,
    text:
      `
        Все по порядку.  
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 154,
    text:
      `
        Больно. Невыносимо. В горле стоял ком обиды и невысказанных слов, которые сейчас, на грани жизни и смерти, были лишены смысла.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 155,
    text:
      `
        «Но я хотя бы могу узнать больше, тогда я точно буду готова. Или не стоит спрашивать? Иногда так проще жить».
      `,
    buttons: [
      {
        text: 'Узнать, что меня ждет',
        goTo: 156
      },
      {
        text: 'Не задавать вопросов',
        goTo: 177
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 156,
    text:
      `
        Если мне и предстоит жить в другом теле, то, хотя бы, расскажи больше о последствиях этого выбора.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    message: 'Тебе не все равно, что происходит. Незнакомец оценил твою заинтересованность',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick', silent: true }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 157,
    text:
      `
        Хоть я и не видела своего собеседника, но точно ощутила, что мой вопрос оказался уместным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 159,
    text:
      `
        Что конкретно ты хочешь знать? У нас осталось не так много времени, задавай с умом.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 160,
    text:
      `
        «О чем мне стоит спросить?»
      `,
    buttons: [
      {
        text: 'Мое новое тело — красивое?',
        goTo: 161,
        func: () => {
          timer.stop()
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(160, 0, getChoice(0))
          if (askedAmount(3)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Когда я очнусь, то буду одна?',
        goTo: 163,
        func: () => {
          timer.stop()
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(160, 1, getChoice(1))
          if (askedAmount(3)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Где я окажусь? В больнице?',
        goTo: 166,
        func: () => {
          timer.stop()
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(160, 2, getChoice(2))
          if (askedAmount(3)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Что мне надо будет сделать?',
        goTo: 167,
        func: () => {
          timer.stop()
          choiceDone(3)
          scenarioManager.changeSceneButtonStatus(160, 3, getChoice(3))
          if (askedAmount(3)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Продолжить',
        goTo: 170,
        isActive: false
      }],
    beforeBegin: () => {
      timer.set(7, () => {
        scenarioManager.beginScene(161)
        choiceDone(0)
        scenarioManager.changeSceneButtonStatus(160, 0, getChoice(0))
        scenarioManager.manageDialog(160, [0, 1, 2, 3], [4])
      })
      resetChoices()
      scenarioManager.resetSceneButtons(160)
    },
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 161,
    text:
      `
        Незнакомец молчал, и я уже думала, что не получу ответа, но вдруг он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    message: 'Незнакомец считает, что ты задала слишком глупый вопрос и попусту тратишь время',
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick', silent: true }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 162,
    text:
      `
        На вкус и цвет.
      `,
    buttons: [
      {
        text: ''
      }],
    darkSilhouette: true,
    speaker: 'Незнакомец',
    beforeBegin: () => {
      scenarioManager.loadChoices(160)
      scenarioManager.manageDialog(160, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(160, 162)
    },
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 163,
    text:
      `
        Тебе потребуется помощь и еще предстоит узнать, что скрывают тени. В этом мире я буду рядом, но не физически.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    message: 'Незнакомец считает, что ты задала верный вопрос',
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick', silent: true }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 164,
    text:
      `
        «В этом мире? Неужели, есть другой?»
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 165,
    text:
      `
        «Очевидно, раз я сейчас не пойми где».
      `,
    buttons: [
      {
        text: ''
      }],
    speaker: 'Кассандра',
    beforeBegin: () => {
      scenarioManager.loadChoices(160)
      scenarioManager.manageDialog(160, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(160, 165)
    },
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 166,
    text:
      `
        Нет. Ты очнешься в доме моего знакомого. Он любезно предоставил тебе жилье.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(160)
      scenarioManager.manageDialog(160, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(160, 166)
    },
    message: 'Незнакомец считает, что ты задала верный вопрос',
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick', silent: true }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 167,
    text:
      `
        Распорядиться чужой судьбой. И лишь от тебя зависит — справишься или нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    message: 'Незнакомец считает, что ты задала верный вопрос',
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: 1, category: 'Choice', id: 'RightQuestion' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick', silent: true }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 168,
    text:
      `
        «Как подробно. Мне все сразу стало ясно».
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(160)
      scenarioManager.manageDialog(160, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(160, 168)
    },
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 170,
    text:
      `
        «У меня есть еще один интересующий вопрос, но не знаю, стоит ли его задавать? Можно ли мне будет иметь отношения, когда я стану другой?»
      `,
    buttons: [
      {
        text: 'Спросить',
        goTo: 171
      },
      {
        text: 'Не спрашивать',
        goTo: 176
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 171,
    text:
      `
        А что насчет отношений?
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 172,
    text:
      `
        Я же смогу продолжить жить? Встречаться с парнями и прочее?
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    message: 'Незнакомец считает, что ты задала слишком глупый вопрос и попусту тратишь время',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick', silent: true }
    ],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 173,
    text:
      `
        Ты находишься вне времени и пространства, а тебя волнуют парни?
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 174,
    text:
      `
        Я вообще-то девушка, и имею право знать. Так я должна жить или быть в рабстве?
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 175,
    text:
      `
        Он не ответил. Я тоже промолчала.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 176,
    text:
      `
        «Нутро мне подсказывает, что не стоит интересоваться по этому поводу с непонятной сущностью. Оставлю вопрос на потом».
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 177,
    text:
      `
        «Да какая к черту разница, что меня ждет. Все равно — это ад. Мне не интересно знать о будущих пытках заранее».
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    message: 'Тебе все равно, что происходит. Незнакомец разочарован равнодушием к собственной судьбе',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick', silent: true }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 178,
    text:
      `
        Время на исходе. Что ты решила?
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Незнакомец',
    darkSilhouette: true,
    imageFront: require('../../../../Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 179,
    text:
      `
        Если это временно, то я согласна на сделку.
      `,
    buttons: [
      {
        text: 'Это лишь новый опыт',
        goTo: 180
      },
      {
        text: 'Я не смогу принять чужую жизнь',
        goTo: 181
      }],
    message: 'Стат постоянство делает героиню упрямой, прямолинейной. Она не хочет принимать новую жизнь и теряется в том, что для нее неизвестно. Стат перемены делает героиню более гибкой, она легко справляется с поворотами судьбы',
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 180,
    text:
      `
        «Пускай хоть кто угодно попытается убедить меня быть кем-то другим, но я все равно останусь собой. И если надо временно сыграть роль, то я сделаю это».
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 181,
    text:
      `
        «Одно дело выступать, но другое — быть тем, кем я не являюсь. Я не смогу просто стать другой. Мне нравится быть собой».
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 183,
    text:
      `
        Ответа не последовало, и, боясь, что все так и останется, прокричала:
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 184,
    text:
      `
        Я СОГЛАСНА НА СДЕЛКУ!
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'Кассандра',
    imageLeft: require('../../../../Images/FOF/Persons/Cassandra.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 185,
    text:
      `
        Тело перестало слушаться: я ощущала себя в замедленной съемке. Мир поплыл, и, рухнув вниз, я потеряла сознание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 186,
    text:
      `
        Весь мир сжался, стал размытым пятном перед глазами. Я лежала на кровати, а солнечный свет падал на стены, освещая темную комнату.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    beforeBegin: blackFlash,
    simple: require('../../../../Sounds/FOF/Explo.mp3'),
    music: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 187,
    text:
      `
        Тело отзывалось странными ощущениями, и только сейчас я поняла, почему. Вспомнив все, я вскочила с кровати, поспешно осматриваясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 188,
    text:
      `
        Темные волосы ниспадали по плечам, и, ощупав себя, убедилась, что это была не я, точнее, не прежнее тело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 189,
    text:
      `
        На мне была белая ночнушка, еле прикрывающая колени, и уж точно сквозь нее были видны все изгибы.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 190,
    text:
      `
        «Нет. Это был не сон. Все было взаправду. Где я?»
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 191,
    text:
      `
        Нет, нет, это... Невозможно!
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 192,
    text:
      `
        Так вот ты какая.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speaker: '...',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 193,
    text:
      `
        Пребывая в смятении, я даже не увидела постороннего человека в комнате. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 194,
    text:
      `
        Который, до этого момента, сидел в кресле рядом с кроватью. Похоже, его удивила моя реакция, и, нагло усмехнувшись, он сделал шаг ближе.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 195,
    text:
      `
        Я — Кристофер, Крис. Продолжай в том же духе, я лишь хотел посмотреть, правда ли ты такая красотка? 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 196,
    text:
      `
        Когда он хотел сделать еще шаг вперед, я выставила перед собой руки и угрожающе крикнула:
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 197,
    text:
      `
        Не подходи!
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 198,
    text:
      `
        Он остановился с ухмылкой и удивлением, а я подробно его рассмотрела.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 199,
    text:
      `
        Парень выглядел немного старше меня. Карие глаза то и дело блуждали по моему телу, а русые волосы средней длинны вились. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 200,
    text:
      `
        Незнакомец был спортивным, но не перекаченным. Он снова равнодушно прошелся взглядом по моему телу, и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 201,
    text:
      `
        Так ты благодаришь меня за то, что я помог тебе с жилищем на ближайшее время? 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 202,
    text:
      `
        Кристофер смущал меня, и я должна была что-то сделать, чтобы переключить его внимание. Уложив непривычно темные волосы вперед, таким образом скрывая грудь, я...
      `,
    buttons: [
      {
        text: 'Бросила в него книгу',
        goTo: 203
      },
      {
        text: 'Поблагодарила в своей манере',
        goTo: 209
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 203,
    text:
      `
        Осмотрев комнату, я заприметила книгу, лежащую на тумбочке и медленно пошла к ней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    stats: [{ story: EStoriesEn.FOF, category: 'Choice', id: 'ThrowBook', value: 1 }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 204,
    text:
      `
        Парень, похоже, начал догадываться о моих намерениях. Он вытянул руку, и начал недовольно качать головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageFront: require('../../../../Images/FOF/Objects/Book.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 205,
    text:
      `
        Даже не ду...
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 206,
    text:
      `
        Я не дала ему договорить. Без раздумий запустила книгу, с легким испугом ожидая его реакцию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 207,
    text:
      `
        Пострадать он не успел, ведь ловко поймал ее и разочарованно проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 208,
    text:
      `
        Да ты совсем с ума сошла? Ладно, считай, на первый раз прощаю. Понимаю, что ты сейчас чувствуешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 209,
    text:
      `
        «Так, Кассандра, надо держать себя в руках. Сейчас не время строить из себя королеву».
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 210,
    text:
      `
        Я не просила помогать, но спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 212,
    text:
      `
        Я - то представился, а ты? Так и продолжишь молчать, незнакомка? Или мне самому выбрать тебе имя? 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 213,
    text:
      `
        Кристофер явно издевался надо мной, нагло усмехнувшись.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 214,
    text:
      `
        «Что ему ответить?»
      `,
    buttons: [
      {
        text: 'Меня зовут Кассандра, Кэсси',
        goTo: 215
      },
      {
        text: 'Эбигейл — вот мое новое имя',
        goTo: 218
      },
      {
        text: '(Промолчать)',
        goTo: 219
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 215,
    text:
      `
        Должен признаться, мне известно, как тебя на самом деле зовут.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    message: 'Ты должна была лучше слушать, что говорил незнакомец',
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick', silent: true },
      { story: EStoriesEn.FOF, value: 1, category: 'Effect', id: 'Constancy' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 216,
    text:
      `
        Хотел проверить, а ты не подвела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    message: 'Кристоферу понравилось, что ты осмелилась сказать прошлое имя ',
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 217,
    text:
      `
        Назвала свое прошлое имя, несмотря на то, что это больше не ты. И, знаешь, я оценил.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 0, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 218,
    text:
      `
        Должен признаться, мне известно, как тебя зовут. Хотел проверить. И ты не подвела. Назвала свое новое имя, а, значит, мы быстрее сможем поладить. Я оценил.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    message: 'Ты хорошо помнишь слова незнакомца. Кристоферу понравилось, что ты быстро учишься',
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick', silent: true },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 219,
    text:
      `
        Нет, милая, так мы далеко не уедем. Тебе пора принять все произошедшее и понять, что лучше не наживать врагов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    message: 'Кристофер не доволен твоим поведением',
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 220,
    text:
      `
        Характер свой будешь показывать другим. И, к твоему сведению, мне известно, как тебя зовут. Хотел проверить.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 221,
    text:
      `
        Кристофер неестественно улыбнулся и продолжил разговор в другом русле. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 222,
    text:
      `
        Так, значит, ты была человеком?
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 223,
    text:
      `
        Его вопрос удивил меня, и, посмотрев на парня, я растерянно спросила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 224,
    text:
      `
        Была? О чем ты говоришь? Я не понимаю...
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 225,
    text:
      `
        Парень, казалось, ожидал подобной реакции, и, плюхнувшись в кресло, довольно ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 226,
    text:
      `
        Дай-ка угадаю, ты не знала, что попадешь в тело ведьмы?
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 227,
    text:
      `
        «О чем это он говорит? Ведьмы? Какого хрена здесь происходит?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 228,
    text:
      `
        Ладно, разберешься во всем со временем. А пока мы можем поболтать. Или у тебя есть более важные дела? Самокопание, например? 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 229,
    text:
      `
        Его чувство юмора раздражало, и с какой издевкой во взгляде он смотрел на меня — было не описать.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 230,
    text:
      `
        Что скажешь? Упустишь шанс поболтать по душам, ведьмочка?
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 231,
    text:
      `
        «А он не так прост, как кажется, но ведь и я не из робких, в случае чего смогу постоять за себя. Начнет приставать — расцарапаю ему лицо».
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 232,
    text:
      `
        «С другой стороны, разговор может выйти из нужного русла и перейти на личности. Но мне столько всего в новинку, и сейчас есть шанс узнать побольше».
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 233,
    text:
      `
        «Может, лучше избавиться от него и решать все самой? Хочу ли я поговорить с ним?»
      `,
    buttons: [
      {
        text: 'Давай поговорим',
        goTo: 234
      },
      {
        text: 'Выгнать парня',
        goTo: 321
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 234,
    text:
      `
        Парень удобно устроился в кресле, и, закинув ноги на кровать, спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 235,
    text:
      `
        Может, присядешь? Я не кусаюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 236,
    text:
      `
        «Следует ли сесть, и этим показать покорность или продолжать стоять, демонстрируя неуважение?»
      `,
    buttons: [
      {
        text: 'Присесть на край кровати',
        goTo: 237
      },
      {
        text: 'Продолжать стоять',
        goTo: 238
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 237,
    text:
      `
        Умница. Что-то мне кажется, наша беседа принесет немало удовольствия.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 238,
    text:
      `
        Понятно. Что-то мне кажется, наша беседа будет не из приятных.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 240,
    text:
      `
        Я в упор посмотрела на Кристофера, давая понять, что так или иначе расположена к разговору.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 241,
    text:
      `
        Отлично. Может, у тебя есть конкретные вопросы?
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 242,
    text:
      `
        Шутишь? Их слишком много. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 243,
    text:
      `
        Хорошо. Я вкратце объясню, что здесь происходит. Раньше ты была частью только этого мира, а теперь — двух.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 244,
    text:
      `
        Да, Эби, ты же не против, если я буду тебя называть так? А то Эбигейл — слишком длинное имя, пока выговоришь, забудешь, что хотел сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 245,
    text:
      `
        Парень улыбнулся, взглянув на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 246,
    text:
      `
        Не против.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 247,
    text:
      `
        Хоть мы почти и не были знакомы, я быстро поняла, что Кристофер выделяется на фоне моего окружения.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 248,
    text:
      `
        Он не был похож на одного из подростков в моей школы. Парень казался простым, но что-то в нем не давало мне покоя. Что-то точно было не так. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 249,
    text:
      `
        Итак, Эби, существует два мира: один — в котором ты родилась, другой — мой мир. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 250,
    text:
      `
        Так, значит, ты из другого мира?
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 251,
    text:
      `
        Именно. Странник. И я здесь потому что знакомый попросил помочь одной девушке. Смекаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 252,
    text:
      `
        Знакомый? Это...
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 253,
    text:
      `
        Я хотела уточнить, но Крис перебил меня, ответив:
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 254,
    text:
      `
        Знаю, что ты хочешь спросить, но опережу. Два мира не могут взаимодействовать друг с другом, как и их жители. Могут лишь единицы.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 255,
    text:
      `
        И я в их числе, и ты, точнее, твое тело. Именно поэтому твой спаситель не может быть здесь, как я и ты. Вопросы?
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 256,
    text:
      `
        «Про кого стоит узнать больше, пока есть возможность? Кристофер или Спаситель?»
      `,
    buttons: [
      {
        text: 'Кто ты такой?',
        goTo: 257
      },
      {
        text: 'Мой спаситель — кто он?',
        goTo: 278
      },
      {
        text: 'Завершить диалог',
        goTo: 317
      }
    ],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 257,
    text:
      `
        Я тот, кто может перемещаться между мирами. Удобно же — надоел этот мир — кочую в другой.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    message: 'Кристоферу льстит твое решение узнать о нем больше',
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 1, category: 'Choice', id: 'WhoAreYou' },
      { story: EStoriesEn.FOF, value: 1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 258,
    text:
      `
        Парень улыбнулся, и, вскинув брови, добавил:
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 259,
    text:
      `
        Нажил здесь врагов — переместился, и наоборот.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 260,
    text:
      `
        И какой мир больше нравится?
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 261,
    text:
      `
        Везде свои плюсы и минусы, но ты и сама это скоро узнаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 262,
    text:
      `
        Что это значит?
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 263,
    text:
      `
        Кристофер наигранно прикрыл лицо руками и прошептал:
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 264,
    text:
      `
        Спойлер!
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 265,
    text:
      `
        Больше не в силах терпеть эту игру, я подошла к нему и, взглянув в лицо, спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 266,
    text:
      `
        Ты можешь хоть немного понять меня?! Хватит уже издеваться! Или ты сам ничего не знаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 267,
    text:
      `
        Может, ты просто раб, который выполняет свою работу? Которого не посвящают в дела, а?
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 268,
    text:
      `
        Добродушное лицо парня вмиг приобрело суровое выражение: на смену улыбке пришли плотно сомкнутые губы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 269,
    text:
      `
        Крис медленно поднялся на ноги, и сделал шаг вперед, заставив меня отойти от него на пару шагов.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 270,
    text:
      `
        При виде парня, который был значительно выше меня, я словно ощутила себя жертвой под цепким взглядом сокола.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 271,
    text:
      `
        Тяжело сглотнув, мне стало не по себе от осознания возможной грубости сказанных слов. Раньше мне это сходило с рук, но сейчас все было иначе.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 272,
    text:
      `
        Сейчас я говорила не с кучкой глупых девушек, я и не была “королевой”.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 273,
    text:
      `
        Не забывай, что я только предоставил дом. Я вообще не должен отвечать тебе на все эти вопросы и терпеть подобное отношение.
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 274,
    text:
      `
        Надеюсь, это будет тебе уроком, и ты поймешь, что не стоит кусать руку, которая тебя кормит. А то пожалеешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    music: require('../../../../Sounds/FOF/Main.mp3'),
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 275,
    text:
      `
        Я хоть и сказала глупость, но не должна была показать страх, и, подавив его, ответила гордо:
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speaker: 'Эбигейл',
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 276,
    text:
      `
        Поняла.
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 277,
    text:
      `
        Есть еще вопросы?
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 278,
    text:
      `
        Ну да, вы же не успели нормально познакомиться. Ладно. Что ты хочешь о нем узнать?
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    message: 'Незнакомец тоже думает о тебе чаще, чем полагается простому спасителю',
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick', silent: true }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 279,
    text:
      `
        Мне интересно...
      `,
    buttons: [
      {
        text: 'Как его зовут?',
        goTo: 280,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(279, 0, getChoice(0))
          if (askedAmount(4)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Кто он такой?',
        goTo: 281,
        func: () => {
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(279, 0, getChoice(1))
          if (askedAmount(4)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Почему он такой?',
        goTo: 285,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(279, 0, getChoice(1))
          if (askedAmount(4)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Когда мы с ним увидимся?',
        goTo: 292,
        func: () => {
          choiceDone(3)
          scenarioManager.changeSceneButtonStatus(279, 0, getChoice(3))
          if (askedAmount(4)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Далее',
        goTo: 317,
        isActive: false
      }],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(279)
    },
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 280,
    text:
      `
        Не знаю, что тебе даст его имя, но его зовут Ник. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(279)
      scenarioManager.manageDialog(279, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(279, 280)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 281,
    text:
      `
        Маг, очень умелый и сильный, кстати. В нашем мире подобных ему почти нет. Он почти уникален. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 282,
    text:
      `
        Почти.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 283,
    text:
      `
        Почти.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 284,
    text:
      `
        Парень повторил слова, задержав взгляд на моих глазах.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(279)
      scenarioManager.manageDialog(279, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(279, 284)
    },
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 285,
    text:
      `
        Такой — это какой? Ник вообще разный: может быть сильным, жестким, милосердным. Так какого Ника повстречала ты?
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 286,
    text:
      `
        Скорее, он был... Холодным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 287,
    text:
      `
        Парень усмехнулся и довольно ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 288,
    text:
      `
        А как он должен был встречать тебя? С распростертыми объятиями и приглашением на чай? Уж прости, но там, откуда ты пришла, нет печенья.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 289,
    text:
      `
        Я была в коме, на грани жизни и смерти, почему было не проявить больше понимания, а не просто игнорить мои вопросы? 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 290,
    text:
      `
        Я пыталась отыскать понимания в глазах собеседника, но напрасно.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 291,
    text:
      `
        Не драматизируй. Сейчас ты жива, и все, что было раньше — не имеет значения. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(279)
      scenarioManager.manageDialog(279, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(279, 291)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 292,
    text:
      `
        Крис усмехнулся, похоже, обдумывая пришедшую мысль в его голову, и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 293,
    text:
      `
        А что? Неужели, соскучилась?
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 294,
    text:
      `
        «Я еще даже не видела его, но могу ли я что-то чувствовать к тому, кто уничтожил мою жизнь? Или же спас меня от безвременного нахождения в пустоте?»
      `,
    buttons: [
      {
        text: 'Я ненавижу его',
        goTo: 295
      },
      {
        text: 'Я хочу встретиться с ним',
        goTo: 308
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 295,
    text:
      `
        Ты поосторожнее со словами, он же не мальчишка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Nick', silent: true },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 296,
    text:
      `
        А кем мне его считать? Спасителем? Ну уж нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 297,
    text:
      `
        Я скрестила руки на груди, демонстративно отгораживаясь от любого упоминания про этого «вершителя судеб».
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 298,
    text:
      `
        Ты права. Он не спаситель. 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 299,
    text:
      `
        Это же он уронил тебя головой вниз. Последствия, видимо, до сих пор ощущаются, но я не знал, что они передаются душе.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 300,
    text:
      `
        «Опять он за свое. Думает, что я ничего не понимаю?! Надменный ублюдок».
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 301,
    text:
      `
        Да, может, он и не ронял меня, но точно воспользовался моим положением.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 302,
    text:
      `
        Кристофер, как ни в чем не бывало, облокотился о спинку кресла и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 303,
    text:
      `
        Тогда используй ситуацию себе на благо.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 304,
    text:
      `
        Это как?
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 305,
    text:
      `
        Ты совсем не понимаешь, да? Сколько людей хотели бы побывать в другом теле, но одна ты смогла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 306,
    text:
      `
        Ты можешь сопротивляться, а можешь принять это за подарок судьбы, в конце концов, ты или проживешь это время наслаждаясь, или чувствуя себя заключенной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 307,
    text:
      `
        А спасителя скоро увидишь.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(279)
      scenarioManager.manageDialog(279, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(279, 307)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 308,
    text:
      `
        Ты так быстро поняла все, это даже похвально. Думал, начнешь истерить, гадости про Ника говорить, мол, какой он урод, запихнул меня в другое тело и подобное.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick', silent: true },
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 309,
    text:
      `
        А какой выбор у меня остается? 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 310,
    text:
      `
        Я никогда не свыкнусь с этим телом, и ощущаю себя, будто ношу одежду неподходящего размера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 311,
    text:
      `
        Кристофер, как ни в чем не бывало, облокотился о спинку кресла и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 400,
    text:
      `
        Тогда используй ситуацию себе на благо.
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 312,
    text:
      `
        Это как?
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 313,
    text:
      `
        Ты совсем не понимаешь, да? Сколько людей хотели бы побывать в другом теле, но одна ты смогла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 314,
    text:
      `
        Ты можешь сопротивляться, а можешь принять это за подарок судьбы, в конце концов, ты или проживешь это время наслаждаясь, или чувствуя себя заключенной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 315,
    text:
      `
        А спасителя скоро увидишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 316,
    text:
      `
        Есть еще вопросы?
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(279)
      scenarioManager.manageDialog(279, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(279, 316)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 317,
    text:
      `
        У меня нет вопросов.
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 318,
    text:
      `
        Крис закатил глаза, и, встав с кресла, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 319,
    text:
      `
        На этом, пожалуй, и закончим. И, да, с новосельем. Это твой новый дом на ближайшее время. Устраивайся.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 321,
    text:
      `
        Знаешь, я не думаю, что сейчас разговор может привести к чему-то плодотворному. Я должна сама обдумать происходящее.
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 322,
    text:
      `
        Как знаешь, Эби. И, да, с новосельем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 323,
    text:
      `
        Ник дал мне понять, что не стоит навязываться. И на будущее: не стоит проверять границы моего терпения. А в целом, я достаточно лоялен. Так, факты обо мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 324,
    text:
      `
        Кто такой Ник?
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 325,
    text:
      `
        Ну вот, уже задаешь вопросы. Так зовут твоего спасителя. Другой твой спаситель — я. Странник. Кочую по мирам. А ты находишься в теле ведьмы.
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 326,
    text:
      `
        Вот тебе почва для рассуждений. Больше не буду навязываться. Желаю удачно обжиться на новом месте.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 327,
    text:
      `
        Когда он ушел, я начала размышлять о том, что произошло и как такое вообще было возможно? А, главное, как теперь это расхлебывать?
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 329,
    text:
      `
        «Я заключила сделку с существом из другого мира, и теперь находилась в чужом теле, в незнакомом доме, с посторонним парнем, который был странником».
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    music: require('../../../../Sounds/FOF/Stress01.mp3'),
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 330,
    text:
      `
        «Сама же я находилась в теле ведьмы. И что мне теперь делать? Как мне выпутаться из этой ситуации?»
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('FOF', 'Глава 1', 'Часть 1', '0')
        }
      }],
    speaker: 'Эбигейл',
    imageLeft: require('../../../../Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Images/FOF/UI/Border.png'),
    achievement: { story: EStoriesEn.FOF, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/FOF/Backgrounds/Abigail_Room.jpg')
  }
])
