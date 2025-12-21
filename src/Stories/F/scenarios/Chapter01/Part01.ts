import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'
import { firstChoiceMessage, inventoryMessage, previousSlideMessage } from '../../../../Utils/textConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.F, chapterName: 'Спешл', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Холодный ветер щипал задубевшую кожу лица и нещадно трепал волосы, периодически закрывая обзор.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/F/Theme_Dramatic.mp3'),
    ambient: require('../../../../Sounds/UL/Wind.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 1,
    text:
      `
        Обледеневшие пальцы впивались в чугунный поручень мостовой ограды. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 2,
    text:
      `
        Я ощущал себя потерянным, совершенно разбитым, и точка кипения словно бы достигла своего апогея.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 3,
    text:
      `
        Как так вышло, что вся моя жизнь, со всеми её хитросплетениями, неожиданными поворотами, взяла и застыла?
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 4,
    text:
      `
        Остановилась где-то между горечью и равнодушием? 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 5,
    text:
      `
        Замерла, утопив меня в злостной стагнации?
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 6,
    text:
      `
        «Я в тупике».
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 7,
    text:
      `
        Какое действие следует предпринять первым, чтобы начать бороться с последствиями?
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 8,
    text:
      `
        Осознать. И я осознал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 9,
    text:
      `
        И сейчас, казалось бы, появилась возможность совершить выбор, способный привести к изменениям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 10,
    text:
      `
        Стать хозяином собственной жизни, обрести власть над неумолимой тоской. 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 11,
    text:
      `
        Но сказать всегда проще, чем сделать. И в этом-то вся загвоздка.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 12,
    text:
      `
        «Как поступил бы отец, окажись на моем месте? И почему именно его фигура маячит перед глазами?»
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 13,
    text:
      `
        Внутренне я сдерживался, чтобы не закричать назло обстоятельствам.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 14,
    text:
      `
        «Всему виной усталость, накопившаяся за эти дни. Необходимо как следует выспаться».
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 15,
    text:
      `
        Я отвлекся от волнующих мыслей и сфокусировался на Неве. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 16,
    text:
      `
        Река мирно спала, укрытая тонкой корочкой льда, и ничто её не тревожило: ни  снующие по мостовой толпы, ни застывший в воздухе флёр наступающих праздников.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 17,
    text:
      `
        Сделав несколько глубоких успокаивающих вдохов, покрепче сжал в руках деревянный предмет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 600
      }],
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 600,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 18, image: require('../../../../Images/F/Items/Closed_Box.png'), buttonText: 'Рассмотреть' },
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 18,
    text:
      `
        «Ну и что в тебе такого особенного, помимо мелодии?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 19,
    text:
      `
        Руки предательски затряслись. Пережитый стресс точно снежный ком накрывал лавиной, загоняя в ловушку сомнений.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 20,
    text:
      `
        «Господи, это просто шкатулка!»
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat_Closed.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 21,
    text:
      `
        Но ведь вместе с этой шкатулкой мне обещали счастье?
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    message: firstChoiceMessage,
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 22,
    text:
      `
        «Произошедшее — проверка? Неужели мне следует…»
      `,
    buttons: [
      {
        text: 'Сдаться',
        goTo: 23
      },
      {
        text: 'Бороться',
        goTo: 27
      }],
    message: 'Философия счастья — избегать иллюзии, философия депрессии — погружаться в неё. В действительности всё просто: ты либо принимаешь реальность, либо позволяешь себе раствориться в мечтах.',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 23,
    text:
      `
        «К черту!»
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 24,
    text:
      `
        Судьба никогда не была благосклонна. Она лишь раз за разом уничтожала крупицы надежды на светлое будущее.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 25,
    text:
      `
        «И что должно стать моим мотиватором для борьбы с этим сплошным недоразумением?»
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    message: 'Усталость шепчет: хватит сражаться, просто отдохни. ',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: -1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 26,
    text:
      `
        «Я устал…»
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 27,
    text:
      `
        «Боже правый, Костя. Хватит себя жалеть!»
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 28,
    text:
      `
        Судьба никогда не была ко мне благосклонна. Но и не лишала ярких моментов, что дарили надежду на светлое будущее.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 29,
    text:
      `
        «Я справлюсь!»
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    message: 'Становись сильнее обстоятельств, чтобы счастье стало твоим постоянным спутником.  ',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 30,
    text:
      `
        «Взять себя в руки и сделать финальный выбор».
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 31,
    text:
      `
        Раздражаясь на собственные тревоги, нелепые опасения, я сместил металлический замок в сторону и резким движением откинул изящную крышку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    message: inventoryMessage,
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 32,
    text:
      `
        Шкатулка в руках неожиданно засветилась, а перед глазами точно в калейдоскопе замелькали недавно пережитые мною события.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    simple: require('../../../../Sounds/F/MagicBox.mp3'),
    imageFront: require('../../../../Images/F/Objects/Opened_Glowing_Box.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 33,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 34 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 34,
    text:
      `
        — Кость, просил же переделать отчёт к утру. Время уже сколько?
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    beforeBegin: whiteFlash,
    message: 'Несколько дней назад…',
    music: require('../../../../Sounds/F/Theme_Daily.mp3'),
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Images/F/Persons/Eugene.png'),
    ambient: require('.././../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 35,
    text:
      `
        Офисная жизнь была пропитана суетой, в которую я раз за разом погружался на протяжении пяти лет.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 36,
    text:
      `
        «Каждый день одно и то же. Что сейчас-то не так?»
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 37,
    text:
      `
        Бросив беглый взгляд на начальника, не упустившего возможности в очередной раз отчитать меня перед коллегами, ответил равнодушным тоном:
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 38,
    text:
      `
        — Так я давно уже всё отправил на Вашу почту.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 39,
    text:
      `
        — Не заговаривай мне зубы. Я бы не стоял тут, будь отчёты на месте.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 40,
    text:
      `
        — Но…
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 41,
    text:
      `
        — Сколько еще давать шансов? Думал, мы в прошлый раз обо всём с тобой договорились.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 42,
    text:
      `
        Тяжело вздохнув, я залез в компьютер, проверять отправленные сообщения.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 43,
    text:
      `
        «Господи, дай мне сил. Всё это сплошная бессмыслица. Любое моё возражение будет расцениваться как угроза, и Евгений Владимирович совсем потеряет голову».
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 44,
    text:
      `
        — Будешь отрабатывать, значит. Делай что хочешь, но документы нужны в срочном порядке.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 45,
    text:
      `
        Послышалось цоканье каблуков. К своему рабочему месту неторопливо прошла Валерия, моя коллега. Лёгкая и приятная в общении, она была всецело отдана своей должности.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 46,
    text:
      `
        — О, Лерочка! На секунду, будьте добры.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Images/F/Persons/Eugene_Smirk.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 47,
    text:
      `
        Валерия бросила сочувствующий взгляд в мою сторону, облокотившись поясницей о стол.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 48,
    text:
      `
        — Да, Евгений Владимирович?
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 49,
    text:
      `
        — Этот бездарь опять не закончил в срок. Как наш самый ценный сотрудник, проведи с ним разъяснительную беседу и проконтролируй выполнение задачи.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Images/F/Persons/Eugene_Smirk.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 50,
    text:
      `
        Взгляд начальника не стеснялся скользить по изгибам Леры. Впрочем, девушка его полностью игнорировала.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 51,
    text:
      `
        — Евгений Владимирович, обойдемся без оскорблений. Костя, не волнуйся, сейчас со всем разберемся.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 52,
    text:
      `
        — Лерочка, да я не…
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speakerR: 'Евгений Владимирович',
    fullscreenObjectR: require('../../../../Images/F/Persons/Eugene.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 53,
    text:
      `
        Я встал и пошел вслед за девушкой, оставляя начальника позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 54,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 55 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 55,
    text:
      `
        — Два латте, пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 56,
    text:
      `
        Она сделала заказ и молча оплатила.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 57,
    text:
      `
        — Спасибо! Чуть позже скину тебе на карту. Телефон не взял.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 58,
    text:
      `
        — Прекрати. Помнится, ты мне не так давно булочку покупал. Считай, в расчете. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office_Smile.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 59,
    text:
      `
        — Надеюсь, горячий кофе приведет твои мысли в порядок. О, кажется столик освободился!
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 60,
    text:
      `
        Я кивнул, улыбнувшись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageFront: require('../../../../Images/F/Objects/Coffe.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 61,
    text:
      `
        Мне была приятна ее компания. С Лерой всегда было о чём поговорить, обсудить волнующие вопросы. Коллега неизменно поддерживала и подставляла своё плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 62,
    text:
      `
        Девушка села и, закинув ногу на ногу, заговорила шёпотом:
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 63,
    text:
      `
        — Я добьюсь его увольнения. Просто дисциплинарная свинья. Позорит своим существованием наше агентство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 64,
    text:
      `
        Откинувшись на спинку стула, она заговорила обычным голосом:
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 65,
    text:
      `
        — Что на этот раз произошло?
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 66,
    text:
      `
        — Докопался за не предоставленный отчет по бюджетам на предстоящий год. Вот только я сверил все данные сегодня утром и даже нажал кнопку отправить.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 67,
    text:
      `
        Сдержать злую иронию не получилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 68,
    text:
      `
        Валерия сочувственно улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 69,
    text:
      `
        — Кость, была ведь рассылка на всех, что почта работает с перебоями. Скорее всего, письмо не дошло.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 70,
    text:
      `
        Я устало прикрыл глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 71,
    text:
      `
        — Знаешь же, что в случае с ним всегда лучше молчать, чем вступать в бестолковый спор. Только хуже бы сделал. Проще отработать.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 72,
    text:
      `
        Девушка вздохнула. Немного поразмыслив, промолвила:
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 73,
    text:
      `
        — Понимаю, тебе нелегко. Но как можно терпеть такое отношение? Знаешь же, что он не прав, и всё равно жертвуешь своим личным временем в угоду несправедливости.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 74,
    text:
      `
        Эти слова обожгли. Ударили прямо в центр мужского эго. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 75,
    text:
      `
        А что тут скажешь? Она права. Нормальные люди пошли бы качать права и отстаивать собственные границы…
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 76,
    text:
      `
        Я поспешил оправдаться:
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 77,
    text:
      `
        — Опасаюсь последствий. Не просто найти работу с таким окладом в условиях рыночного кризиса. А семью кормить надо.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 78,
    text:
      `
        — Твои опасения не беспочвенны, но так тоже не может вечно продолжаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 79,
    text:
      `
        Сделав глоток кофе, девушка вдруг спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 80,
    text:
      `
        — А супруга тебе никак финансово не помогает?
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 81,
    text:
      `
        — Перестала работать после рождения сына. Да и в целом… она изменилась. Если раньше глаза горели работой, какими-то хобби, то теперь ей стало всё равнодушно. Порой с трудом удаётся разглядеть в жене свою Иру.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 82,
    text:
      `
        Лера задумчиво вскинула брови, не спуская глаз со стаканчика. Затем осторожно предположила:
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 83,
    text:
      `
        — Есть разные обстоятельства, влияющие на нас. Возможно, вам следует поговорить и обсудить это. И, прости мне мою откровенность, но…
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 84,
    text:
      `
        — Грустно об этом слышать. Я бы так жить не смогла.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 85,
    text:
      `
        Казалось, эта тема чем-то задела Леру.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 86,
    text:
      `
        «Стоит ли уточнить?»
      `,
    buttons: [
      {
        text: 'О чем ты?',
        goTo: 87
      },
      {
        text: 'Промолчать',
        goTo: 130
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 87,
    text:
      `
        Лера подняла на меня полный удивления взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 88,
    text:
      `
        — Мы с тобой редко касаемся тем личной жизни. С чего вдруг решил полюбопытствовать?
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 89,
    text:
      `
        Переменчивость настроения и лёгкая озадачённость девушки лишь подогрели мой интерес.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 90,
    text:
      `
        — Знакомы не первый день. Поддерживаем друг друга по рабочим моментам. Извини, если сую нос не в своё дело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 91,
    text:
      `
        Стало неловко. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 92,
    text:
      `
        Лера, уловив моё замешательство, тут же запротестовала:
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 93,
    text:
      `
        — Да не за что извиняться! Всё в порядке, Кость, правда.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 94,
    text:
      `
        Поправив очки, девушка сжала пальцами бумажный стаканчик.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 95,
    text:
      `
        — Я просто всегда в движении. Работа, фитнес, разнообразные тренинги… 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 96,
    text:
      `
        — Мне сложно принять тот факт, что существуют женщины, которые застывают, полностью замыкаются, и внешний мир для них останавливается.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 97,
    text:
      `
        — И аргументируют они своё поведение рождением ребенка, будто это клеймо или приговор…
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 98,
    text:
      `
        По ощущениям, я проглотил горсть песка. Иначе объяснить собственное состояние не получится — язык прилип к нёбу, а грудь сдавило от стыда и сочувствия одновременно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 99,
    text:
      `
        Потому что я, как мне казалось всегда, знал свою супругу. Любил её. Уважал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 100,
    text:
      `
        Я видел её каждый день, и чувствовал, что дело не в лени и глупости. Всё сильно  сложнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 101,
    text:
      `
        И также неплохо знал Леру. Она сейчас говорила мне эти слова не с целью унизить Иру и возвысить себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 102,
    text:
      `
        Коллега действительно не разделяла подобной позиции, потому что никогда не была на месте моей жены. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 103,
    text:
      `
        Я намеревался прояснить ситуацию:
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 104,
    text:
      `
        — Но ведь материнство — тоже работа. Отнимает много времени. Не всем людям дано быстро перестроиться и найти баланс.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 105,
    text:
      `
        К моему облегчению, Валерия согласно кивнула и даже чуть-чуть улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 106,
    text:
      `
        — Безусловно. Это меня и пугает.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 107,
    text:
      `
        Диалог плавно сошёл на нет. Я задумчиво отхлебнул уже остывший латте.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: require('../../../../Images/F/Objects/Coffe.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 108,
    text:
      `
        Материнство и карьера… 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 109,
    text:
      `
        Несомненно, это чудовищно тяжело совмещать. Поэтому никогда не упрекал супругу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 110,
    text:
      `
        Но только ли в сыне дело? Не утратила ли она интерес к жизни в целом…?
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 111,
    text:
      `
        Незаметно скользнул взглядом по лицу коллеги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 112,
    text:
      `
        Я знал, что Лера старше меня. Девушке точно за тридцать, хотя выглядит очень свежо и ухожено.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 113,
    text:
      `
        «Но возраст у женщин спрашивать… неэтично? По правде говоря, попросту рискуешь остаться без головы».
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 114,
    text:
      `
        — Хочется верить, что баланс существует, и все эти разговоры об успешных многодетных мамочках-бизнесвумен — не пустой звук.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 115,
    text:
      `
        Лера заметно напряглась, резко звякнув каблуком о кафельный пол. Тут же смутилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 116,
    text:
      `
        «Хм, ведёшь себя странно… Будто не так уж и далека от подобных бед. И с чего вдруг мне стало это интересно…»
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 117,
    text:
      `
        — Можно последний вопрос?
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 118,
    text:
      `
        Девушка молча кивнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 119,
    text:
      `
        —  Почему тебя это так заботит? Я бы даже сказал, нервирует…
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 120,
    text:
      `
        Взгляд напротив внезапно потух, пальцы, лежащие на столешнице, вцепились друг в друга, сплетаясь в замок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 121,
    text:
      `
        На секунду показалось, что коллега сейчас пошлёт меня куда подальше или просто уйдёт.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 122,
    text:
      `
        Но вместо этого она вдруг холодно улыбнулась и с нажимом пропела:
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 123,
    text:
      `
        — Ты слышал, как однажды бедной любопытной Варваре нос на базаре оторвали? Не все вопросы уместны, и не на все нам следует знать ответ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 124,
    text:
      `
        — Хватит с нас личного на сегодня.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 125,
    text:
      `
        Я кивнул, отчего-то смутившись. «Личное».
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 126,
    text:
      `
        «Она права, я как всегда: лезу, куда не просят. Болван».
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 127,
    text:
      `
        Но резкость собеседницы только провоцировала любопытство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 128,
    text:
      `
        «Кто знает, быть может мы вернёмся к этой теме однажды».
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 129,
    text:
      `
        — И да, Константин. Если что, всё в порядке. Это приятно — просто поговорить. Не об отчётах. О жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    message: 'Ваши вопросы взволновали Леру. Остаток дня она проведёт за размышлениями.',
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Valeria' }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 130,
    text:
      `
        «Всё-таки это слишком личное. Не хочу беспокоить».
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 131,
    text:
      `
        — Ладно, давай вернёмся к работе.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    stats: [
      { story: EStoriesEn.F, value: 0, category: 'Person', id: 'Valeria' }],
    imageBack: require('../../../../Images/F/Backgrounds/Office_Cafe.jpg')
  },

  {
    id: 132,
    text:
      `
        Остаток дня в офисе Лера провела за моим столом, помогая разгребать завал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 133,
    text:
      `
        И хотя у неё были свои задачи, она настояла на том, чтобы помочь объяснить некоторые тонкости.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 134,
    text:
      `
        «Широчайшей души человек!»
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 135,
    text:
      `
        Перед тем, как разойтись, девушка вдруг спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 136,
    text:
      `
        — Уже объявили дату новогоднего корпоратива. Ты же идёшь?
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speakerR: 'Валерия',
    fullscreenObjectR: require('../../../../Images/F/Persons/Valeria_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 137,
    text:
      `
        На мгновение я задумался. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 138,
    text:
      `
        — Если не будет никаких других планов.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 139,
    text:
      `
        По правде говоря, желания посетить мероприятие не было никакого.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 140,
    text:
      `
        «Не каждая пьяная морда в этом змеином клубке доставляет мне интерес… И в итоге ни повеселиться, ни расслабиться».
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 141,
    text:
      `
        Я специально ответил уклончиво, в надежде избежать лишних вопросов.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 142,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 143 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 143,
    text:
      `
        Город встретил меня прохладой. Уже смеркалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 144,
    text:
      `
         Неторопливо шагая домой, я поглядывал по сторонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 145,
    text:
      `
        Огибая крыльцо цветочного магазина, на мгновение задумался: а не порадовать ли жену?
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 146,
    text:
      `
        Вспыхнувшая инициатива погасла тут же.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 147,
    text:
      `
        «Нет… Опять будет ругаться, что зря деньги потратил».
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 148,
    text:
      `
        Ссутулившись и спрятав ладони в карманах пальто, я заметил впереди совсем юную девушку. Она активно жестикулировала руками и что-то скандировала. Увидев меня, вдруг крикнула:
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    music: require('../../../../Sounds/F/Theme_Witch.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 149,
    text:
      `
        — Мужчина! Это то, что вам нужно! Не проходите мимо!
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 150,
    text:
      `
        Нахмурившись, я мельком огляделся, убеждаясь: обращалась она ко мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 151,
    text:
      `
        — Простите…?
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 152,
    text:
      `
        Девушка резво подбежала, скользя уггами по декабрьской наледи, и едва не влетела в меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 153,
    text:
      `
        Я резко вытащил руки из карманов, готовый ловить, но она вовремя затормозила и буквально впихнула листовку с рекламой в мою ладонь.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 154,
    text:
      `
        — Не хмурьтесь, а то будут морщины. Читайте скорее!
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 155,
    text:
      `
        Скептически поджав губы, я развернул листовку.
      `,
    buttons: [
      {
        text: '',
        goTo: 603
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 603,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 156, buttonText: 'Развернуть', image: require('../../../../Images/F/Items/Flyer.png') },
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 156,
    text:
      `
        <i> Приглашаем на новогоднюю ярмарку чудес!</i> 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    simple: require('../../../../Sounds/F/Paper.mp3'),
    imageFront: require('../../../../Images/F/Items/Flyer.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 157,
    text:
      `
        <i>В нашем шатре вы сможете приобрести уникальные музыкальные шкатулки ручной работы, готовые даровать истинное счастье.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: require('../../../../Images/F/Items/Flyer.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 158,
    text:
      `
        <i> Всё в ваших руках!</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: require('../../../../Images/F/Items/Flyer.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 159,
    text:
      `
        Я улыбнулся и, не желая расстраивать девушку, убрал брошюрку в карман.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Item', id: 'Flyer' }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 160,
    text:
      `
        «Чего только не придумают, лишь бы продать товар».
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 161,
    text:
      `
        Развернувшись в сторону дома, почувствовал, как незнакомка вдруг схватила меня за локоть.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 162,
    text:
      `
        — Если не придёте, многое упустите.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 163,
    text:
      `
        Я поднял на неё глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 164,
    text:
      `
        Девушка мило улыбалась, продолжая удерживать мою руку. Я утомлённо вздохнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 165,
    text:
      `
        Не было настроения спорить. И хотя подобная навязчивость вызвала волну раздражения, постарался ответить сдержанно:
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 166,
    text:
      `
        — Не интересуют подобного рода товары.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 167,
    text:
      `
        Рекламщица не растерялась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 168,
    text:
      `
        —  Хорошо, допустим, Вас — нет. Но, может, кого-то другого?
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 169,
    text:
      `
        Я в недоумении вскинул брови.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 170,
    text:
      `
        Она продолжала настаивать:
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 171,
    text:
      `
        — Подарите счастье своим близким.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 172,
    text:
      `
        «Да что за… Хотя…»
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 173,
    text:
      `
        Девушка уже отпустила мой локоть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 174,
    text:
      `
        «Если так задуматься, в её словах есть смысл. Скоро праздники, а я не озаботился покупкой подарков. Может быть, эта безделушка порадует сына?»
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 175,
    text:
      `
        — Чьего производства ваши шкатулки?
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 176,
    text:
      `
        Незнакомка просияла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 177,
    text:
      `
        — Так и знала, что не ошиблась в Вас! 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 178,
    text:
      `
        — Моя бабушка делает их сама. Ручная работа. Каждый образец уникален!
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 179,
    text:
      `
        Я задумчиво протянул: 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 180,
    text:
      `
        — Даже так… Вероятно, они стоят бешеных денег.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 181,
    text:
      `
        — Отнюдь! Бабушка делает больше для души. Плата символическая.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 182,
    text:
      `
        Я улыбнулся наивности, с какой женщины подходили к развитию своего бизнеса.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 183,
    text:
      `
        — Так денег не заработаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 610
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 610,
    text:
      `
        — А вы считаете, счастье только в деньгах?
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 184,
    text:
      `
        — Счастье — в принципе очень субъективное понятие.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 185,
    text:
      `
        — Разумеется! Считайте, что Вам улыбнулась возможность рассмотреть этот вопрос с разных сторон.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 186,
    text:
      `
        Она снова перешла в наступление. И я вновь ощутил раздражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 187,
    text:
      `
        — Послушайте…
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 188,
    text:
      `
        «Да какой толк объяснять ей что-либо? Совсем юная, никакого жизненного опыта… Подобными чаще движут одни лишь хихоньки-хахоньки. Она вполне симпатичная, способна завлечь других бедолаг иными способами».
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 189,
    text:
      `
        День складывался странно. Недоразумение в офисе, теперь какое-то разводилово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 190,
    text:
      `
        Чтобы меня больше не трогали, отмахнулся и, сдавшись, кивнул:
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 191,
    text:
      `
        — Ваша взяла. Приду.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 192,
    text:
      `
        Девушка мило улыбнулась и, попрощавшись, отбежала от меня в поисках других жертв.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 193,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 194 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 194,
    text:
      `
        — Ириш, я дома!
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    music: require('../../../../Sounds/F/Theme_Daily.mp3'),
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 195,
    text:
      `
        Квартира встретила меня ароматами запечённого мяса.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 196,
    text:
      `
        Убрав верхнюю одежду в шкаф и разувшись, увидел, как из спальни вышла Ирина
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 197,
    text:
      `
        — Потрясающий запах, аж слюнки текут. Что у нас на ужин?
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 198,
    text:
      `
        Хмурая, с кричащей усталостью на лице. Тёмные круги под глазами, растрёпанный вид.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 199,
    text:
      `
        В руках она держала термометр.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 200,
    text:
      `
        — Марк заболел. Температура не сбивается. Не знаю, что делать. Может, скорую вызвать?
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 201,
    text:
      `
        Моё настроение провалилось, по ощущениям, к самому ядру Земли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 202,
    text:
      `
        — Давай успокоимся для начала.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Livingroom.jpg')
  },

  {
    id: 203,
    text:
      `
        Марк тяжело дышал, лёжа на спине в нашей спальне. Я приложил руку ко лбу сына. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 204,
    text:
      `
        — …
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speakerR: 'Марк',
    fullscreenObjectR: require('../../../../Images/F/Persons/Mark_Closed.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 205,
    text:
      `
        — Принеси холодное полотенце. Ты же давала ему жаропонижающее? Скоро подействует.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 206,
    text:
      `
        Ирина нервным жестом откинула упавшую на глаза прядь.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 207,
    text:
      `
        — Может, всё-таки скорую?
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 208,
    text:
      `
        — Ир, давай не будем спорить. Понаблюдаем за его состоянием ещё какое-то время. Если лучше не станет, конечно, вызовем.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 209,
    text:
      `
        Спустя полчаса сели ужинать. Я даже не переоделся — сил не было абсолютно.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 210,
    text:
      `
        Состояние Марка стабилизировалось, и он уснул; мы с женой остались наедине.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 211,
    text:
      `
        Ирина не ела. Её взгляд был пустым.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 212,
    text:
      `
        Внезапно она шлёпнула ладошкой по спинке стула и дрожащим голосом прошипела:
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 213,
    text:
      `
        — Да когда же это закончится…
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 214,
    text:
      `
        Подавив вздох, я отложил столовые приборы. Поднял вопросительный взгляд на жену.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 215,
    text:
      `
        — Полоса неудач. Кредиты. Одно на одно. Когда же мы будем счастливы…
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 216,
    text:
      `
        Её слова как удар под дых. В глазах защипало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 217,
    text:
      `
        Чувство вины накрыло новой волной — давящей, утягивающей на самое дно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 218,
    text:
      `
        И уставший, измотанный вид некогда яркой женщины стал для меня последней каплей.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 219,
    text:
      `
        Я молча поднялся из-за стола. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 220,
    text:
      `
        Подошёл к супруге, стоящей лицом к окну. Обхватил за плечи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 221,
    text:
      `
        — Любимая, всё будет хорошо. Марк обязательно поправится.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 222,
    text:
      `
        Не сказать, что наша жизнь напоминала сказку. Скорее, стандартный формат постсоветских родителей, бесконечно натыкающихся на трудности, в которых не видать ни конца, ни края.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 223,
    text:
      `
        Я попытался аккуратно развернуть её лицом к себе, чтобы обнять, но девушка вдруг резко отшатнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 224,
    text:
      `
        — Не трогай меня!
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 225,
    text:
      `
        «Не одно, так другое. Чёрт, но я ведь тоже не железный! Как мне лучше поступить?»
      `,
    buttons: [
      {
        text: 'Попробовать успокоить',
        goTo: 226
      },
      {
        text: 'Вспылить',
        goTo: 275
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 226,
    text:
      `
        «Мы — семья. Ей тоже непросто. Надо взять себя в руки».
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    stats: [
      { story: EStoriesEn.F, value: 1, category: 'Choice', id: 'TryToCalm' }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 227,
    text:
      `
        — Ириш, послушай меня. Нам обоим сейчас нелегко. Но давай посмотрим на это с другой стороны. Скоро новый год и…
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 228,
    text:
      `
        Ирина резко перебила:
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 229,
    text:
      `
        — И — что? Что дальше-то? Снова эта удушливая рутина?!
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 230,
    text:
      `
        Она бросила взгляд на небрежно висевшее на краю спинки кухонное полотенце и, казалось, разозлилась ещё сильнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 231,
    text:
      `
        Стащив несчастную ткань, Ира швырнула её на столешницу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 232,
    text:
      `
        — Господи, бардак на бардаке! Что в доме, что в жизни. У меня больше нет сил справляться со всем этим…
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 233,
    text:
      `
        Казалось, жена продолжала скатываться в пучину отчаяния. Это был буквально вопль о помощи, только сдавленным, горьким шёпотом.
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 234,
    text:
      `
        Я понял, о чём она. Словно посмотрел в зеркало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 235,
    text:
      `
        Неужели я выгляжу столь же разбитым? Разрушенным, рассыпанным на осколки? 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 236,
    text:
      `
        Но у меня хотя бы есть жизнь за стенами квартиры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 237,
    text:
      `
        Есть коллеги, знакомые, пусть и большинство из них — редкостные болваны.
      `,
    buttons: [
      {
        text: '',
        goTo: 611
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 611,
    text:
      `
        А у Ирины что? Ежедневная стирка, готовка, уборка, занятия  с сыном и его сопровождение в сад и на тренировку. А после — сон, из которого не хочется возвращаться в суровую реальность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 238,
    text:
      `
        На её месте я бы уже давно спятил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 239,
    text:
      `
        Взгляд вернулся к супруге. Я молчал, изучая её. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 240,
    text:
      `
        Глаза стеклянные, руки обхватывают предплечья. Поза «защиты». Не от меня — от обстоятельств. 
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 241,
    text:
      `
        Захотелось обнять. Прижать крепче. Разделить тягости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 242,
    text:
      `
        — Любимая, я с тобой. Прости меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 243,
    text:
      `
        Я осторожно шагнул ближе, и Ирина не отстранилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 244,
    text:
      `
        Позволила скользнуть руками по её талии, огладить спину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 245,
    text:
      `
        Я поцеловал её в волосы, вдыхая родной, мягкий запах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 246,
    text:
      `
        Жена уткнулась лицом мне в грудь и сдавленно прохрипела: 
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 247,
    text:
      `
        — И ты прости за сцену. Я просто бесконечно устала от всего этого. И когда ситуация начала обостряться, ты будто специально исчез.  
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 248,
    text:
      `
        — Мы не проводим время втроём, как раньше. Про нас с тобой вообще молчу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 249,
    text:
      `
        Я вздохнул, запрокинув голову назад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 250,
    text:
      `
        «Понимаю, в последнее время частенько пропадаю на работе. Но это ведь для общего блага…»
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 251,
    text:
      `
        — А вчера я получила очередной отказ по работе. Видите ли, засиделась в декрете, а им нужны сотрудники с активной жизненной позицией…
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 252,
    text:
      `
        Я тут же отстранился, с любопытством всматриваясь в родное лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 253,
    text:
      `
        — И давно ты ищешь работу? Почему мне не сказала?
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 254,
    text:
      `
        Девушка пожала плечами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 255,
    text:
      `
        — А смысл? Если возьмут — скажу, а просто так пустословить-то зачем.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 256,
    text:
      `
        Я тяжело вздохнул, выпуская Ирину из кольца рук. Слёзы на её щеках ещё не высохли, но подбородок уже не дрожал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 257,
    text:
      `
        — Извини, что всё так, но разорваться пока не получается. Мне тоже сложно, порой просто невыносимо, но я не хочу грузить тебя дополнительно.  
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 258,
    text:
      `
        — Делаю всё от меня зависящее, чтобы мы ни в чем не нуждались. Понимаю: справляюсь не очень…
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 259,
    text:
      `
        Ирина меня перебила:
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 260,
    text:
      `
        — Кость, дело не в этом! Твоё состояние и моё… Иногда, чтобы всё наладилось, достаточно просто поговорить. Действия подтянутся следом.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 261,
    text:
      `
        — Потому что я, например, не замечала, как тебе плохо, а ты тем временем упорно игнорировал моё состояние. Я правда… мне…
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 262,
    text:
      `
        Её глаза вновь стали заполняться слезами, тело пробило легкой дрожью. Прижав руку ко рту, она прохрипела:
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 263,
    text:
      `
        — Извини. Веду себя как истеричка, хотя понимаю, что мы в одной лодке.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 264,
    text:
      `
        Она первая подошла ко мне, нуждаясь в поддержке.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 265,
    text:
      `
        — Нам просто нужна разрядка. Как только Марк поправится, поедем в центр, погуляем на площади. Посмотрим салюты.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 266,
    text:
      `
        — Потом отвезём его к бабушке. Свожу тебя на каток, поужинаем, и дальше уже вся квартира в нашем распоряжении…
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 267,
    text:
      `
        Я почувствовал, как Ира немного расслабилась в моих руках. Но тревога на её лице угасла не полностью.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 268,
    text:
      `
        — Отложим этот разговор. Главное, чтобы Маркуша поправился.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 269,
    text:
      `
        Я ощутил лёгкое разочарование. С каждым годом Ирина словно всё больше растворялась в нашем ребёнке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 270,
    text:
      `
        И, разумеется, я любил Марка больше всего на свете. 
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 271,
    text:
      `
        Но всё же… 
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 272,
    text:
      `
        «А как же мы?»
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 273,
    text:
      `
        — В любом случае спасибо за то, что не повёлся на поводу у эмоций и позволил мне высказаться. Приятно ощутить себя наконец услышанной.
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 274,
    text:
      `
        — Благодаря такой реакции я понимаю, как не права, и впредь постараюсь лучше контролировать чувства.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    message: 'Ирина оценила вашу сдержанность.',
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Irina' }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 275,
    text:
      `
        «Да как же меня всё достало! Кто я для неё, в конце-то концов?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 276,
    text:
      `
        — Что опять не так? В чём моя вина? Чем опять недовольна?
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 277,
    text:
      `
        Её глаза заполонила печальная мгла. И притаившаяся враждебность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 278,
    text:
      `
        Я сразу понял, что последующие слова Ирины принимать за чистую монету не следует — это будет не правда, а бурный эмоциональный всплеск. 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 279,
    text:
      `
        — Что не так?! 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 280,
    text:
      `
        Девушка резко выдохнула, из глаз её брызнули слёзы.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 281,
    text:
      `
        Громкий шёпот отскакивал от стен, ударяя меня по ушам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 282,
    text:
      `
        — Каждый божий день всё одно и то же! Мы будто стоим на месте! Замерли! Умерли…
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 283,
    text:
      `
        Она закрыла лицо руками, заглушая свои слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 284,
    text:
      `
        — Я просто бесконечно устала. И ты как всегда этого не замечаешь. Нет, ты даже не хочешь этого замечать! У тебя своя правда, у меня своя…
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 285,
    text:
      `
        — Ты можешь конкретно сказать, что я не так делаю? Моя вина в том, что работаю сутками, заботясь о наполненном холодильнике и оплате счетов?
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 286,
    text:
      `
        — Ты думаешь, счастье лишь в этом? В деньгах?!
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 287,
    text:
      `
        «Заладили… Сегодня все будут учить меня этому проклятому счастью?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 288,
    text:
      `
        Я с шумом выдохнул, закатывая глаза от абсурдности обвинений. Она серьёзно?
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 289,
    text:
      `
        — Ир, тебе уже давно не 18, чтобы так инфантильно рассуждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 290,
    text:
      `
        Она возмущённо ахнула и моментально от меня отвернулась, пряча новый поток, хлынувший по щекам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 291,
    text:
      `
        — Зато шляться по барам с коллегами — не инфантилизм! Да?! Это ты считаешь зрелым поведением?!
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 292,
    text:
      `
        — Забить на всё, что происходит с твоей семьей, лишь бы только бедный Костенька отдохнул!
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 293,
    text:
      `
        — Я не…
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 294,
    text:
      `
        — Давай еще отрицать начни. Или считаешь, тебе одному тяжело?
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 295,
    text:
      `
        — Да я ненавижу себя за то, во что превратила собственную жизнь! 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    message: 'Ирина не чувствует с вашей стороны желания двигаться дальше вместе.',
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    stats: [
      { story: EStoriesEn.F, value: -1, category: 'Person', id: 'Irina' }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 296,
    text:
      `
        Переведя дыхание, она добавила ледяным тоном:
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 297,
    text:
      `
        — Закончим на этом.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 298,
    text:
      `
        Опустившись на стул, я задумался:
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 299,
    text:
      `
        «Господи, как так вышло, что наши отношения превратились в <b>это</b>?»
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Kitchen.jpg')
  },

  {
    id: 300,
    text:
      `
        Я перенёс Марка в его комнату и, вернувшись в спальню, устало опустился на простыни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 301,
    text:
      `
        Ирина лежала относительно рядом. Но мы были порознь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 302,
    text:
      `
        Я чувствовал её запах, желание прикоснуться боролось с зудящей обидой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 303,
    text:
      `
        Между нами словно барьер возвели — холодный и крепкий, дотронуться до которого с целью разрушить — равносильно отморозить себе ладони.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Flat_Bedroom.jpg')
  },

  {
    id: 304,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 305 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 305,
    text:
      `
        Спустя несколько серых будней меня настигла суббота. И, невзирая на то, что работать в выходной я желанием не горел, Евгений Владимирович вновь доказал — слов на ветер он не бросает.
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 306,
    text:
      `
        За оплошность с почтой пришлось платить личным временем.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 307,
    text:
      `
        Офис казался мне полумёртвым. Знакомых коллег встретить не удалось, поэтому работу я закончил относительно быстро. Благо, её оказалось мало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Office.jpg')
  },

  {
    id: 308,
    text:
      `
        Выйдя на улицу, я машинально потянулся к правому карману джинсов за фантомной пачкой сигарет.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 309,
    text:
      `
        Накопившийся стресс грозил меня уничтожить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 310,
    text:
      `
        Пальцы нащупали пустоту, я ощутил досаду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 311,
    text:
      `
        «Ты же бросил, идиот!»
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Office.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 312,
    text:
      `
        Да, я бросил. И считал это маленькой, но всё же победой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 313,
    text:
      `
        Бросил ради собственного здоровья. Ради семьи. Ради сына. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 314,
    text:
      `
        А по факту? Мне следовало признать, что без никотина едва справляюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 315,
    text:
      `
        «Накуриться, напиться и отрубиться».
      `,
    buttons: [
      {
        text: 'Как жалко звучит',
        goTo: 316
      },
      {
        text: 'Хотя бы на сутки',
        goTo: 325
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 316,
    text:
      `
        «Так и в алкаша превратиться недолго».
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 317,
    text:
      `
        Я брезгливо поморщился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 318,
    text:
      `
        Как бы тяжело ни было, я всегда знал, кем быть не хочу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 319,
    text:
      `
        Мысли потекли в другом направлении.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 320,
    text:
      `
        «Невзирая на сложности, я жив и здоров. У меня есть семья, родители». 
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 321,
    text:
      `
        «Да, мой начальник — совершенный кретин, но ведь он не является основой жизни, чтобы существенно влиять на неё и ставить крест?»
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    achievement: { story: EStoriesEn.F, name: 'GoHigh' },
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 322,
    text:
      `
        Подобные размышления странным образом воздействовали на меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 323,
    text:
      `
        «И в следующий раз, когда Евгений Владимирович вновь попытается прилюдно меня унизить, я не стану молчать!»
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    message: 'Хорошие мысли — маленький шаг к обретению счастья. ',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 324,
    text:
      `
        И, быть может, это одна из возможных решений моих проблем — перестать позволять другим себя обесценивать, чтобы в последующем научиться ценить себя самому?
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 325,
    text:
      `
        Отключиться от мира и поджидающих на каждом углу проблем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 326,
    text:
      `
        «Кажется, я не справляюсь…»
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    message: 'Чем глубже яма, тем меньше света.',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: -1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 327,
    text:
      `
        Признание самому себе. И последующая за ним тяжесть от тревог и страхов перед грядущим будущим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 328,
    text:
      `
        Ветер ударил в спину, сбивая шаг. Мешая идти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    ambient: require('../../../../Sounds/UL/Wind.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 329,
    text:
      `
        Я мысленно хмыкнул, поёжившись от пробравшегося за шиворот холода.
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 330,
    text:
      `
        «Даже погода сбивает с пути домой…»
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 331,
    text:
      `
        Я вспомнил недавний конфликт с женой и поморщился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 332,
    text:
      `
        Домой идти расхотелось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 333,
    text:
      `
        Убрав руки в карман пальто, я ссутулился и хотел было уже прыгнуть в автобус, как вдруг нащупал в глубине ткани какой-то листок. Вытащил его на поверхность.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 334,
    text:
      `
        Перед глазами, точно в насмешку, пестрит разноцветными буквами жизнерадостный постер с привлекательными словами:
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 335,
    text:
      `
        <i>В нашем шатре вы сможете приобрести уникальные музыкальные шкатулки ручной работы, готовые даровать истинное счастье.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageFront: require('../../../../Images/F/Items/Flyer.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 336,
    text:
      `
        <i> Всё в ваших руках!</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageFront: require('../../../../Images/F/Items/Flyer.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 337,
    text:
      `
        Я ненадолго замер посреди остановки, изучая информацию. Автобус уже уехал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 338,
    text:
      `
        «Рождественская ярмарка на Манежной площади…»
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 339,
    text:
      `
        Я удивлённо вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 340,
    text:
      `
        «Да это ж буквально в двух остановках отсюда!»
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 341,
    text:
      `
        Недолго думая, развернулся и поспешил в нужном направлении пешком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 342,
    text:
      `
        Внезапно возникший энтузиазм задушил внутренний скептик. 
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 343,
    text:
      `
        «Ну и зачем ты туда помчался? За счастьем? Пф…»
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 344,
    text:
      `
        Буквально подбегая к площади, я мысленно оправдывался перед собой же. 
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 345,
    text:
      `
        «Я просто хочу купить Маркушке шкатулку!»
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Stop_Evening.jpg')
  },

  {
    id: 346,
    text:
      `
        «Так, ну и где их искать?»
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    music: require('../../../../Sounds/F/Theme_JingleBells.mp3'),
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 347,
    text:
      `
        К моему удивлению и разочарованию, в листовке никакой информации о номере павильона или хотя бы названия не оказалось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 348,
    text:
      `
        Я уже трижды успел окрестить себя идиотом и, гуляя вдоль украшенных магазинчиков с новогодним ассортиментом, подумывал разворачиваться в сторону дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 349,
    text:
      `
        Играла новогодняя музыка, площадь переполнял праздничный гул. И мне казалось, что всё это напускное, ненастоящее.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 350,
    text:
      `
        Может, я был…
      `,
    buttons: [
      {
        text: 'Прав',
        goTo: 351
      },
      {
        text: 'Не прав',
        goTo: 362
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 351,
    text:
      `
        «Каждый год всё одинаковое, совершенно ничего не меняется. Как повторение одного и того же может быть чем-то особенным?»
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 352,
    text:
      `
        Сердце сжалось от собственных пессимистичных мыслей. Неужели я стал настолько черствым, что простые радости перестали наполнять сердце?
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 353,
    text:
      `
        Раньше с энтузиазмом рвался купить живую ёлку, чтобы как можно скорее украсить её с семьёй.
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 354,
    text:
      `
        Вспомнилось, как совсем маленький Марк разбил игрушку под ель ценой в несколько тысяч рублей, и как после этого злилась Ира.
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 355,
    text:
      `
        «Но быстро оттаяла, потому что нет ничего дороже улыбки сына». 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 356,
    text:
      `
        А сейчас всё стало таким безликим. Пустым…
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 357,
    text:
      `
        «Может, так проявляет себя кризис среднего возраста? Мы начинаем плевать на традиции, больше уходим в себя». 
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 358,
    text:
      `
        Сложно сказать наверняка, в чём причина таких изменений.
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 359,
    text:
      `
        Однако, продолжая смотреть на раздражающе яркие огоньки гирлянд, чувствуя ароматный запах глинтвейна и мандаринов, я замечал — душа больше не тянется к этому празднику. 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 360,
    text:
      `
        К радостным мелочам этой жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 361,
    text:
      `
        «А вот просто поспать без лишней суеты… звучит поистине сладко». 
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    message: 'Новогодний звон колокольчиков более не трогает ваше сердце.',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: -1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 362,
    text:
      `
        Дух новогоднего авантюризма ещё теплился где-то на задворках уставшего сердца.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 363,
    text:
      `
        «И пусть я давно не верю в Деда Мороза, но как можно не порадоваться красной икорке с шампанским…»
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 364,
    text:
      `
        «Отказаться навернуть тазик оливье? Это восьмой смертный грех…»
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 365,
    text:
      `
        Нередко рутина пытается поглотить простые радости жизни, лишая в том числе и традиций.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 366,
    text:
      `
        «А мы ведь с Ирой каждый год покупали живую елку. Украшали её всей семьей».
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 367,
    text:
      `
        «В этом году вопрос даже не поднимался. Жена обмолвилась разве что о том, чтобы вытащить искусственную ёлку, годами пылящуюся на антресоли».
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 368,
    text:
      `
        Но праздник на то и праздник, очередной способ порадовать близких. 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 369,
    text:
      `
        Я задумался о собственной решимости, в сердце вспыхнула жажда сделать любимым сюрприз, способный вернуть в наш дом покой и тихое счастье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 370,
    text:
      `
        Скользя взглядом по согревающим огонькам намотанных на уличные ели гирлянд, чувствуя ароматный запах глинтвейна и мандаринов, я почувствовал это — пробуждение. Душа захотела пуститься в пляс от осознания — ещё не всё потеряно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 371,
    text:
      `
        «Я обязательно что-нибудь придумаю».
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    message: 'Новогодний звон колокольчиков трогает ваше сердце.',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Effect', id: 'PersonalGrowth' }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 372,
    text:
      `
        Щёки жгло от мороза, ветер усиливался. Толпы постепенно редели, разбредаясь по тёплым домам.
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 373,
    text:
      `
        Двигаться вдоль манящих ассортиментом и ароматами лавок с каждой минутой становилось всё легче.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 374,
    text:
      `
        В самом конце Манежной площади, где разноцветные огоньки обрывали своё мерцание, я обратил внимание на странный шатёр. 
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market.jpg')
  },

  {
    id: 375,
    text:
      `
        Он отличался от остальных, поскольку напоминал цирковой, и стоял в полутьме, в отдалении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Near_Tent.jpg')
  },

  {
    id: 376,
    text:
      `
        Людей вокруг не было, но ткань у входа оставалась чуть приоткрыта. Изнутри переливами колокольчиков звенела мягкая, едва уловимая слухом мелодия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Near_Tent.jpg')
  },

  {
    id: 377,
    text:
      `
        «Антуражненько».
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    simple: require('../../../../Sounds/F/JingleBells.mp3'),
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Near_Tent.jpg')
  },

  {
    id: 378,
    text:
      `
        Ноги будто сами потянули меня к несчастной палатке.
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Near_Tent.jpg')
  },

  {
    id: 379,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 380 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 380,
    text:
      `
        Оказавшись внутри, я первым делом обратил внимание на температуру — гораздо теплее, невзирая на то, что стен у шатра как таковых не было: только натянутая на металлическую конструкцию ткань, укрывающая от ветра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    music: require('../../../../Sounds/F/Theme_Witch.mp3'),
    ambient: require('.././../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 381,
    text:
      `
        «Что-то вроде зимней палатки? В принципе, сюда несложно установить портативную печь или пушку. Скорее всего, она где-то за стойкой».
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 382,
    text:
      `
        Странно пахло: аромат трав мешался с какими-то специями. Приятный, но, как по мне — чересчур резкий.
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 383,
    text:
      `
        — Здрав будь, милок. С наступающим!
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    speakerR: 'Старушка ',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 384,
    text:
      `
        Я резко повернул голову на звук. 
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 385,
    text:
      `
        Из тёмного угла, точно в западных фильмах, вобравших в себя все клише мира, медленно выплывала старушка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 386,
    text:
      `
        Сгорбленная, судя по виду чудовищно древняя, но дружелюбная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 387,
    text:
      `
        Натянув на лицо улыбку, я поздоровался: 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 388,
    text:
      `
        — Добрый вечер. Благодарю, и Вас с наступающим! 
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 389,
    text:
      `
        Откуда-то снизу послышался глухой стук, а после — шипение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 390,
    text:
      `
        Не успел я осознать произошедшее, как из-под прилавка выскочила девушка, морщась и потирая ушибленную макушку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 391,
    text:
      `
        — Проклятье! Всякий раз забываю, что эти стеллажи значительно ниже наших домашних…
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Skirt.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 392,
    text:
      `
        Бабка неожиданно громко рявкнула: 
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 393,
    text:
      `
        — Побойся Бога! Раскидывается она тут проклятиями, мерзавка…
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 394,
    text:
      `
        Покачав головой, старуха выхватила из её рук футляр для очков.
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 395,
    text:
      `
        — Спасибо, что нашла. Боже милостивый, как оно под столом оказалось-то?
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 396,
    text:
      `
        Я сконфуженно улыбнулся, до сих пор оставаясь молчаливым наблюдателем донельзя забавной сцены. 
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 397,
    text:
      `
        Девушка неожиданно воскликнула: 
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 398,
    text:
      `
        — А я же Вас знаю! 
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Skirt.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 399,
    text:
      `
        Она выбежала из-за стеллажа с каким-то листочком и махнула им перед моими глазами, очаровательно улыбнувшись.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 400,
    text:
      `
        — Вы тот хмурый мужчина! Я дала Вам это. Помните? 
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Skirt.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 401,
    text:
      `
        Я разглядел на рекламке знакомый текст. Медленно в голове прояснилось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    imageFront: require('../../../../Images/F/Items/Flyer.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 402,
    text:
      `
        — Мужчина! Это то, что вам нужно! Не проходите мимо!
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    beforeBegin: whiteFlash,
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 403,
    text:
      `
        — Простите…?
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 404,
    text:
      `
        Девушка резво подбежала, скользя уггами по декабрьской наледи, и едва не влетела в меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 405,
    text:
      `
        — Не хмурьтесь, а то будут морщины. Читайте скорее!
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    speakerR: 'Девушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Coat_Smile.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Evening.jpg')
  },

  {
    id: 406,
    text:
      `
        — Точно. Девушка без тормозов.
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    beforeBegin: whiteFlash,
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 407,
    text:
      `
        Я убрал упавшие на лоб пряди волос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 408,
    text:
      `
        Казалось, ничто не способно удивить меня ещё больше, но вечер решил иначе, продолжая неустанно подбрасывать неординарных личностей и события.
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 409,
    text:
      `
        Незнакомка заливисто хохотнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 410,
    text:
      `
        — Я Алиса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Skirt.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 411,
    text:
      `
        — Хм…
      `,
    buttons: [
      {
        text: 'Константин',
        goTo: 412
      },
      {
        text: 'Приятно познакомиться',
        goTo: 421
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 412,
    text:
      `
        — Рад знакомству.
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 413,
    text:
      `
        Я приветливо улыбнулся, скользнув по собеседнице ненавязчивым взглядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 414,
    text:
      `
        Яркая. Слишком. Можно даже сказать, эксцентричная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 415,
    text:
      `
        Но симпатичная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 416,
    text:
      `
        Забавная причёска и образ выдавали совсем юный возраст. 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 417,
    text:
      `
        «На вид лет двадцать, не больше».
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 418,
    text:
      `
        Алиса позволила себе изучить меня тоже, и я слегка ухмыльнулся, заметив это. Заглянул в яркие, отливающие изумрудом глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 419,
    text:
      `
        Девушка тут же смутилась, опустила ресницы.
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 420,
    text:
      `
        Я вдруг ощутил себя лет на десять моложе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    message: 'Приятное чувство, верно?',
    stats: [
      { story: EStoriesEn.F, value: +1, category: 'Person', id: 'Alice' }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 421,
    text:
      `
        — И что, даже не представитесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Skirt.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 422,
    text:
      `
        Девушка хитро прищурилась, не спуская с меня лисьих, не по-детски коварных глаз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 423,
    text:
      `
        Я ощутил в груди странное чувство. Намёк на тревогу?
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 424,
    text:
      `
        «Бред собачий. Дело не в ней. Я просто по жизни на нервах».
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    message: 'Странно. К чему бы это?.. ',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 425,
    text:
      `
        Алиса вернулась за прилавок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    stats: [
      { story: EStoriesEn.F, value: 0, category: 'Person', id: 'Alice' }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 426,
    text:
      `
        Картинно раскинула руки, стараясь охватить жестом весь представленный ассортимент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 427,
    text:
      `
        — Выбирайте! 
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Skirt.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 428,
    text:
      `
        Приближаясь к витрине, я вдруг почувствовал, как сердцебиение участилось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 429,
    text:
      `
        «Надо пропить курс успокоительных, иначе такими темпами до нового года попросту не доживу». 
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 430,
    text:
      `
        — Алиса, всё это — не то. 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 431,
    text:
      `
        Скрипучий голос старухи раздался над самым ухом, и я испуганно отшатнулся, чуть не упав. Повернулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 432,
    text:
      `
        В руках бабка держала завёрнутый в лёгкую ткань предмет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 433,
    text:
      `
        Она растянула беззубый рот в широкой улыбке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 434,
    text:
      `
        — Ты ведь за счастьем пришёл?
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 435,
    text:
      `
        Из-за прилавка раздался встревоженный девичий голос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 436,
    text:
      `
        — Бабушка! Может, лучше не стоит…
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    speakerR: 'Алиса',
    fullscreenObjectR: require('../../../../Images/F/Persons/Alice_Skirt.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 437,
    text:
      `
        — Молчи, девочка! 
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 438,
    text:
      `
        Старуха обратила пристальный взор на меня. Пояснила:
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 439,
    text:
      `
        — Алиса надеялась оставить её у себя. Но вижу: тебе нужнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 440,
    text:
      `
        Я нахмурился, неуверенно бормоча:
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 441,
    text:
      `
        — Да не то чтобы… просто планировал сделать подарок сыну. Могу выбрать любую другую. 
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 442,
    text:
      `
        Бабка снова загадочно улыбнулась, медленно качнув головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 443,
    text:
      `
        — Нет, я ж говорю: <i>тебе</i> нужнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 444,
    text:
      `
        Она вложила мне в руки красивый резной предмет с замочком по центру. Накрыла ладони своими сухими, вынуждая сжать шкатулку покрепче.
      `,
    buttons: [
      {
        text: '',
        goTo: 615
      }],
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 615,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 445, image: require('../../../../Images/F/Items/Closed_Box.png'), buttonText: 'Взять' },
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 445,
    text:
      `
        — Счастьем не делятся. Выйдешь за площадь, откроешь сам, в тишине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    speakerR: 'Старушка',
    stats: [{ story: EStoriesEn.F, value: +1, category: 'Item', id: 'Box' }],
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 446,
    text:
      `
        И настойчиво подтолкнула меня в сторону улицы.
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 447,
    text:
      `
        Опомниться удалось только у выхода. Развернувшись, я нашёл глазами старуху: та провожала взглядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 448,
    text:
      `
        — Прошу прощения, но я ведь даже не заплатил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 449,
    text:
      `
        Бабка, хитро прищурившись, едва заметно кивнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 450,
    text:
      `
        — Ступай себе с миром. Порадуй дитя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 451,
    text:
      `
        — Ещё заплатишь…
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    speakerR: 'Старушка',
    fullscreenObjectR: require('../../../../Images/F/Persons/Witch.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 452,
    text:
      `
        Последнюю фразу пробубнила себе под нос, и я не до конца уверен: она действительно это сказала, или мне просто послышалось?
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 453,
    text:
      `
        Не прощаясь, владелица лавки прошаркала за прилавок, а после — скрылась в тени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 454,
    text:
      `
        Пробрало странное ощущение неправильности происходящего, и я бросил растерянный взгляд на Алису. 
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 455,
    text:
      `
        Девушка, сжимая в руке шарф, избегала смотреть мне в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 456,
    text:
      `
        «Всё чуднее и чуднее…»
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 457,
    text:
      `
        Я уж было планировал настоять на том, чтобы разобраться с ценой шкатулки, но телефон в кармане пальто громко звякнул, оповестив о сообщении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    simple: require('../../../../Sounds/F/PhoneAlert.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 458,
    text:
      `
        Перехватив подарок одной рукой, другой я достал мобильник и принялся читать сообщение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 459,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    smartphone: { goTo: 460, chatId: 'FPart01Irina' },
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 460,
    text:
      `
        Подобные сообщения от Ирины всегда вызывали неконтролируемую тревогу.
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 461,
    text:
      `
        «Что у них там опять стряслось…»
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 462,
    text:
      `
        — Сейчас позвоню и вернусь.
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 463,
    text:
      `
        Развернувшись в сторону прилавка, я замер, не сумев никого разглядеть. Все словно по щелчку пальцев испарились.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 464,
    text:
      `
        — Э-э… ау?
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 465,
    text:
      `
        «Ушли домой? И ничего не сказали? Что за бред…».
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 466,
    text:
      `
        Побродив по шатру и убедившись, что внутри никого, я неуверенно вышел на улицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Inside_Tent.jpg')
  },

  {
    id: 467,
    text:
      `
        Ярмарку уже успели свернуть, и, кроме уличного освещения, площадь больше ничего не подсвечивало. Задорные огоньки погасли.
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    music: require('../../../../Sounds/F/Theme_JingleBells.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market_Empty.jpg')
  },

  {
    id: 468,
    text:
      `
        Те немногие торгаши, проработавшие до талого, шустро сгружали непроданные товары в грузовые машины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market_Empty.jpg')
  },

  {
    id: 469,
    text:
      `
        Обойдя шатёр, я так и не сумел отыскать ни Алису, ни загадочную старуху. Решил попробовать наведаться завтра, ждать на морозе не было никакого желания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market_Empty.jpg')
  },

  {
    id: 470,
    text:
      `
        Дело шло к ночи, силы медленно иссякали. Настала пора возвращаться домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market_Empty.jpg')
  },

  {
    id: 471,
    text:
      `
        Сообщение от жены не шло из головы, но позвонить не рискнул. Боялся услышать очередные упрёки. Решил: будет лучше, если поговорим с глазу на глаз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market_Empty.jpg')
  },

  {
    id: 472,
    text:
      `
        Прижав шкатулку покрепче к груди, пешком двинулся в сторону родного района, желая проветрить голову и привести мысли в порядок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Christmas_Market_Empty.jpg')
  },

  {
    id: 473,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 474 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 474,
    text:
      `
        Река мирно спала, укрытая тонкой корочкой льда, и ничто её не тревожило: ни  снующие по мостовой толпы, ни застывший в воздухе флёр наступающих праздников.
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/F/Theme_Dramatic.mp3'),
    ambient: require('../../../../Sounds/UL/Wind.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 475,
    text:
      `
        Сделав несколько глубоких успокаивающих вдохов, я покрепче сжал в руках деревянный предмет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 476
      }],
    imageFront: require('../../../../Images/F/Items/Closed_Box.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 476,
    text:
      `
        «Ну и что в тебе такого особенного, помимо мелодии?»
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 477,
    text:
      `
        Руки предательски затряслись. Пережитый стресс, точно снежный ком, накрывал лавиной, загоняя в ловушку сомнений.
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 478,
    text:
      `
        «Господи, это просто шкатулка!»
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat_Closed.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 479,
    text:
      `
        Но ведь вместе с этой шкатулкой мне обещали счастье?
      `,
    buttons: [
      {
        text: '',
        goTo: 480
      }],
    imageFront: require('../../../../Images/F/Items/Closed_Box.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 480,
    text:
      `
        Раздражаясь на собственные тревоги и нелепые опасения, я сместил металлический замок в сторону и резким движением откинул изящную крышку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    simple: require('../../../../Sounds/F/MagicBox-Open.mp3'),
    imageFront: require('../../../../Images/F/Objects/Opened_Empty_Box.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 481,
    text:
      `
      Я улыбнулся — в детстве у мамы была похожая вещь, только из её шкатулки выплывала грациозная балерина, раскручивающаяся вокруг своей оси.
 
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    music: require('../../../../Sounds/F/Theme_JingleBells.mp3'),
    imageFront: require('../../../../Images/F/Objects/Opened_Empty_Box.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 482,
    text:
      `
        Изнутри потянулся ненавязчивый, медленный перезвон — точно ветер затрепал колокольчики в такт снежинкам, растягивая мягкие звуки.
      `,
    buttons: [
      {
        text: '',
        goTo: 620
      }],
    simple: require('../../../../Sounds/F/MagicBox.mp3'),
    imageFront: require('../../../../Images/F/Objects/Opened_Empty_Box.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 620,
    text:
      `
        Шкатулка в руках неожиданно засветилась, а перед глазами точно в калейдоскопе замелькали недавно пережитые мною события.
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    imageFront: require('../../../../Images/F/Objects/Opened_Glowing_Box.png'),
    imageBorder: require('../../../../Images/F/UI/Border.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 483,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { goTo: 484, video: require('../../../../Images/F/Cutscenes/OpenBox.mp4') },
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 484,
    text:
      `
        «Какого… что за фокусы?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 485,
    text:
      `
        Я проморгался. Перед глазами рябью и вспышками мелькали обрывки жизни, и даже когда закрыл глаза — ничего не закончилось, словно картинки выбили на внутренней стороне век. 
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 486,
    text:
      `
        С координацией возникли проблемы, голова закружилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 487,
    text:
      `
        Я медленно осел прямо на тротуаре, не выпуская погасший предмет из рук. 
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 488,
    text:
      `
        Сквозь пелену утекающего сознания заметил странную вещь — дно шкатулки нагрелось, а свечение испарилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 489,
    text:
      `
        В голове зазвенело.
      `,
    buttons: [
      {
        text: '',
        goTo: 490
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 490,
    text:
      `
        «Я спятил…»
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 491,
    text:
      `
        Мимо прошёл прохожий, следом — ещё один. Косые взгляды исподтишка и желание пройти побыстрее — приняли за уличного пьяницу?
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 492,
    text:
      `
        Неловко поднявшись, я отряхнул пальто от налипшего снега. Осмотрелся.
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 493,
    text:
      `
        Сердце ухало отголосками в горле, ладони дрожали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 494,
    text:
      `
        Совершенно дезориентированный, кое-как добрёл до дома и очнулся только, когда за спиной хлопнула общая дверь парадной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 700
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Neva.jpg')
  },

  {
    id: 700,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 495 },
    simple: require('../../../../Sounds/F/Door_Closed.mp3'),
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 495,
    text:
      `
        Ноги заплетались, не слушались. Дотащившись до квартиры, достал из кармана ключ.
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    music: require('../../../../Sounds/F/Theme_Dramatic.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 496,
    text:
      `
        Ключ вошел в скважину, но никак не хотел проворачиваться. Когда я попытался его вытащить, с той стороны двери щёлкнул замок. Дверь распахнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 497
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 497,
    text:
      `
        Передо мной возник незнакомый мужчина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 498,
    text:
      `
        — Вы кто? Что здесь делаете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    speakerR: 'Мужик',
    fullscreenObjectR: require('../../../../Images/F/Persons/Guy.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 499,
    text:
      `
        Его взгляд был недобрым, брови тяжёлыми. Он заглянул за дверь и, заметив  торчащий в замочной скважине ключ, обратился ко мне ещё раз:
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 500,
    text:
      `
        — Что всё это значит?
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    speakerR: 'Мужик',
    fullscreenObjectR: require('../../../../Images/F/Persons/Guy.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 501,
    text:
      `
        Эта ситуация меня уничтожила. Ощущая, как проваливаюсь в истерику, я взглянул на номер квартиры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 502,
    text:
      `
        «27. Это моя…»
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 503,
    text:
      `
        Изнутри послышался детский, а следом — и женский хохот, и голос <b><i>МОЕЙ</i></b> жены: 
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 504,
    text:
      `
        «Саш, что там такое? Ты чего застрял?»
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    speakerR: 'Ирина? ',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina_Brandnew.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 505,
    text:
      `
        А следом — голос <b><i>МОЕГО</i></b> сына:
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 506,
    text:
      `
        «Па-а-ап, иди сюда! Теперь твой ход!»
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    speakerR: 'Марк?',
    fullscreenObjectR: require('../../../../Images/F/Persons/Mark.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 507,
    text:
      `
        Мужчина повернул голову, крикнул за дверь:
      `,
    buttons: [
      {
        text: '',
        goTo: 508
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 508,
    text:
      `
        — Секунду, родные!
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    speakerR: 'Саша',
    fullscreenObjectR: require('../../../../Images/F/Persons/Guy.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 509,
    text:
      `
        «Саш? Пап? Родные? Что происходит…?»
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 510,
    text:
      `
        Я сплю — вне всяких сомнений. Нужно себя ущипнуть: тут же проснусь, а рядом, на соседней части кровати, окажется сонная Ира. Я ей всё расскажу, и мы вместе посмеёмся с ситуации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 511,
    text:
      `
        — Мужчина, Вы язык проглотили?!
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    speakerR: 'Саша',
    fullscreenObjectR: require('../../../../Images/F/Persons/Guy.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 512,
    text:
      `
        Незнакомец шагнул ближе ко мне в попытке привлечь внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 513,
    text:
      `
        На коже чуть выше запястья проступили красные пятна, которые спустя время обрастут синевой — агрессивные щипки проснуться не помогли. А это значило лишь одно…
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 514,
    text:
      `
        «Я не сплю».
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 515,
    text:
      `
        Решился на ответ:
      `,
    buttons: [
      {
        text: '',
        goTo: 516
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 516,
    text:
      `
        — Я… 
      `,
    buttons: [
      {
        text: '',
        goTo: 517
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 517,
    text:
      `
        «Тут живу».
      `,
    buttons: [
      {
        text: '',
        goTo: 518
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 518,
    text:
      `
        — Кажется, перепутал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 519
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 519,
    text:
      `
        Заметив моё состояние, незнакомец смягчился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 520,
    text:
      `
        — У Вас всё в порядке? Может, помощь какая нужна? 
      `,
    buttons: [
      {
        text: '',
        goTo: 521
      }],
    speakerR: 'Саша',
    fullscreenObjectR: require('../../../../Images/F/Persons/Guy.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 521,
    text:
      `
        За дверью вновь раздались крики и смех, следом — шаги. Дверь распахнулась шире. Из квартиры высунулась…
      `,
    buttons: [
      {
        text: '',
        goTo: 522
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 522,
    text:
      `
        — Сашуль, что такое? Здравствуйте…
      `,
    buttons: [
      {
        text: '',
        goTo: 523
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina_Brandnew.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 523,
    text:
      `
        Она растерянно улыбнулась, заметив меня. Сердце вздрогнуло, замерло на секунды, чтобы после понестись как сумасшедшее. В груди всё сжалось, воздуха хватать перестало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 524
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 524,
    text:
      `
        Мне стало сложно дышать. Кажется, так начинается инсульт…
      `,
    buttons: [
      {
        text: '',
        goTo: 525
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 525,
    text:
      `
        На меня уставились красивые, <i>светящиеся глаза</i> женщины, которая видела во мне незнакомца.
      `,
    buttons: [
      {
        text: '',
        goTo: 526
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 526,
    text:
      `
        И оттого казалась бесконечно счастливой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 527
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 527,
    text:
      `
        Рядом  с другим. Не со мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 528
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 528,
    text:
      `
        Держась из последних сил, я прокашлялся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 529
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 529,
    text:
      `
        — Простите, я не туда попал…
      `,
    buttons: [
      {
        text: '',
        goTo: 530
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 530,
    text:
      `
        Выдавил из себя неловкую, едва уловимую улыбку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 531
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 531,
    text:
      `
        — Я пойду… до свидания.
      `,
    buttons: [
      {
        text: '',
        goTo: 532
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 532,
    text:
      `
        С трудом удерживая спину, я прошаркал к лестничной клетке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 533
      }],
    simple: require('../../../../Sounds/F/Footsteps.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 533,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'TryToCalm' }) >= 1
        },
        goTo: 534
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.F, category: 'Choice', id: 'TryToCalm' }) <= 0
        },
        goTo: 539
      }
    ],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 534,
    text:
      `
        — Мужчина, постойте!
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina_Brandnew.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 535,
    text:
      `
        Сердце споткнулось, я резко повернул голову на знакомый голос. Вопросительно посмотрел на родную… незнакомку?
      `,
    buttons: [
      {
        text: '',
        goTo: 536
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 536,
    text:
      `
        — Вы неважно выглядите. Вам точно не нужна помощь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 537
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina_Brandnew.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 537,
    text:
      `
        Ответить не получилось — горло сдавило комом. Ситуация, запредельная в своей карикатурности, продолжала съедать изнутри, но желания смеяться не возникло ни на секунду.
      `,
    buttons: [
      {
        text: '',
        goTo: 538
      }],
    message: 'Невзирая на странные обстоятельства, Ирина переживает за вас. ',
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 538,
    text:
      `
        Я молча качнул головой и, не задерживаясь, побежал по лестнице вниз, не понимая, как мне быть дальше и что вообще происходит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 539
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 539,
    text:
      `
        Последнее, что услышал, было:
      `,
    buttons: [
      {
        text: '',
        goTo: 540
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 540,
    text:
      `
        — Какой-то он странный… грустный очень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 541
      }],
    speakerR: 'Ирина',
    fullscreenObjectR: require('../../../../Images/F/Persons/Irina_Brandnew.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 541,
    text:
      `
        — Давай, милая, заходи, Марк уже нас заждался.
      `,
    buttons: [
      {
        text: '',
        goTo: 542
      }],
    speakerR: 'Саша',
    fullscreenObjectR: require('../../../../Images/F/Persons/Guy.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/F/Backgrounds/Stairway.jpg')
  },

  {
    id: 542,
    text:
      `
        — Что это было?
      `,
    buttons: [
      {
        text: '',
        goTo: 543
      }],
    music: require('../../../../Sounds/F/Theme_Tragic.mp3'),
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 543,
    text:
      `
        Ледяной ветер ударил в лицо снежным пухом, трагично подвыла вьюга.
      `,
    buttons: [
      {
        text: '',
        goTo: 544
      }],
    ambient: require('../../../../Sounds/F/Wind_Powerfull.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 544,
    text:
      `
        Я сидел на скамейке около дома, в котором живу… — жил? — и отчуждённым взглядом сверлил телефон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 545
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 545,
    text:
      `
        Три контакта — матери, сотового оператора и службы спасения, внесённой в телефонную книгу по умолчанию. И ничего больше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 546
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 546,
    text:
      `
        Ни одной фотографии сына, ни одного рабочего чата и приложения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 547,
    text:
      `
        Телефон — кирпич. Пустой, безжизненный и… мёртвый? 
      `,
    buttons: [
      {
        text: '',
        goTo: 548
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 548,
    text:
      `
        «Точно! Что, если…»
      `,
    buttons: [
      {
        text: '',
        goTo: 549
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 549,
    text:
      `
        Может, я просто умер? Как во всех этих фильмах, где…
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 550,
    text:
      `
        «Чушь собачья!»
      `,
    buttons: [
      {
        text: '',
        goTo: 551
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 551,
    text:
      `
        На страх навалилась злость, следом — отчаяние.
      `,
    buttons: [
      {
        text: '',
        goTo: 552
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 552,
    text:
      `
        ! Начало условия: Личностный рост отрицательный
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.F, category: 'Effect', id: 'PersonalGrowth' }) < 0
        },
        goTo: 553
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.F, category: 'Effect', id: 'PersonalGrowth' }) >= 0
        },
        goTo: 560
      }
    ],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 553,
    text:
      `
        «Я схожу с ума… схожу с ума…»
      `,
    buttons: [
      {
        text: '',
        goTo: 554
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 554,
    text:
      `
        Я видел перед собой свою жену. Но выглядела она совершенно иначе, с абсолютно чужими глазами и мимикой.
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 555,
    text:
      `
        Что, если я оказался в ловушке собственной беспомощности?
      `,
    buttons: [
      {
        text: '',
        goTo: 556
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 556,
    text:
      `
        «Да кто я такой…»
      `,
    buttons: [
      {
        text: '',
        goTo: 557
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 557,
    text:
      `
        Это моя вина. Я — ничтожество, погубившее жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 558
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 558,
    text:
      `
        Ничего не хочется. Только лишь захлебнуться в море отчаяния, чтобы всё побыстрее закончилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 559
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 559,
    text:
      `
        «Слабак».
      `,
    buttons: [
      {
        text: '',
        goTo: 560
      }],
    message: 'Проваливаясь в бездну собственного отчаяния, вы расстаётесь с надеждой.',
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    achievement: { story: EStoriesEn.F, name: 'GoDarkDeep' },
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 560,
    text:
      `
        Ноги сами понесли меня в неизвестность. В руке сигарета.
      `,
    buttons: [
      {
        text: '',
        goTo: 561
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 561,
    text:
      `
        Сам не понял, откуда она взялась, но забитые дымом лёгкие помогали разуму не развалиться окончательно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 562
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Street_Near_Home.jpg')
  },

  {
    id: 562,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 563 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 563,
    text:
      `
        Я очутился у церкви в квартале от дома. Как? Для чего? 
      `,
    buttons: [
      {
        text: '',
        goTo: 564
      }],
    simple: require('../../../../Sounds/F/ChurchBells.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 564,
    text:
      `
        Дорога прямая, ведущая — если не сворачивать в закоулки, неизбежно упрёшься в литые врата перед храмом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 565
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 565,
    text:
      `
        Бьющий в виски громогласный звон повторился. Спину укусили мурашки, волосы на руках зашевелились. 
      `,
    buttons: [
      {
        text: '',
        goTo: 566
      }],
    simple: require('../../../../Sounds/F/ChurchBells.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 566,
    text:
      `
        Всё происходящее неимоверно пугало, и моё появление здесь в момент службы стало невозможно воспринимать как стечение обстоятельств, банальную закономерность.
      `,
    buttons: [
      {
        text: '',
        goTo: 567
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 567,
    text:
      `
        Тут было нужно иное, громкое слово…
      `,
    buttons: [
      {
        text: '',
        goTo: 568
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 568,
    text:
      `
        «Судьбоносно».
      `,
    buttons: [
      {
        text: '',
        goTo: 569
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 569,
    text:
      `
        Я глубоко затянулся в последний раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 570
      }],
    simple: require('../../../../Sounds/F/Inhale.mp3'),
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 570,
    text:
      `
        Бросив окурок в урну за забором божьей обители, уверенно вошёл на территорию.
      `,
    buttons: [
      {
        text: '',
        goTo: 571
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 571,
    text:
      `
        У самой двери слегка помедлил… Невзирая на крест, висящий на шее, подобные места посещал крайне редко. 
      `,
    buttons: [
      {
        text: '',
        goTo: 572
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 572,
    text:
      `
        Руки продолжали сжимать шкатулку, и едва взгляд коснулся резного предмета, меня прошибло запоздалое и очевидное осознание: я вдруг всё  вспомнил! 
      `,
    buttons: [
      {
        text: '',
        goTo: 573
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 573,
    text:
      `
        «Бабка в шатре бормотала что-то про плату!»
      `,
    buttons: [
      {
        text: '',
        goTo: 574
      }],
    speakerL: 'Константин',
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 574,
    text:
      `
        Я резко крутанулся на крыльце, так и не переступив порог церкви. Едва не врезался в прихожанина, неслышно оказавшегося за моей спиной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 575
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 575,
    text:
      `
        Неловко извинившись перед испуганным дедушкой, поскальзываясь на каменных лестницах, бросился на остановку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 576
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 576,
    text:
      `
        Неожиданно свет в конце тоннеля замаячил перед глазами — в осколках изувеченной реальности я отыскал отражение ключа, способного привести к разгадке:
      `,
    buttons: [
      {
        text: '',
        goTo: 577
      }],
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  },

  {
    id: 577,
    text:
      `
        «Что со мной, чёрт возьми, произошло?!»
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('F', 'Спешл', 'Часть 2', '0')
        }
      }],
    speakerL: 'Константин',
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    fullscreenObjectL: require('../../../../Images/F/Persons/Konstantin_Coat.png'),
    achievement: { story: EStoriesEn.F, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/F/Backgrounds/Orthodox_Church.jpg')
  }
])
