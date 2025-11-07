import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.MM, chapterName: 'Глава 1', partName: 'Часть 2', code: '1' }, [
  {
    id: 0,
    text:
      `
        — Как с убийством моего отца связаны Вы?
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 1,
    text:
      `
        Мужчина театрально надулся, язвительно поцокивая языком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        — Серьга прямо на месте преступления… ц-ц-ц, нехорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        На Маргариту обрушилась оглушительная тишина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        Девушка поймала пальцами край форменного жакета и незаметно стиснула ткань. Лицо её оставалось каменным, лишённым всяких эмоций. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 5,
    text:
      `
        Невзирая на внешнюю собранность, детектив ощутила, как сердце ухнуло в пятки и тут же стремительно подскочило, застревая где-то на уровне горла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        Выдавить из себя что-то стоящее — да и вообще хоть <i>что-то</i> — на миг показалось задачкой со звёздочкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        Гулкое тиканье настенных часов едва не свело Маргариту с ума — она бросила беглый взгляд на зеркало Гезелла, расположенное за спиной Джонатана.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    message: 'Зеркало Гезелла — пуленепробиваемое стекло, полностью отзеркаливающее с одной стороны и просвечивающее с другой.',
    ambient: require('../../../../Sounds/MM/Clock_Ticking.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        Оно было тонированным изнутри — заглядывать сквозь него могли лишь находящиеся по ту сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 9,
    text:
      `
        <i>«Какая дрянь выдала информацию по одной из главных улик? Да ещё кому?! Единственному подозреваемому!»
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 10,
    text:
      `
        В груди Маргариты вспыхнул пожар, обусловленный жгучей яростью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        От давления, манипуляций и глупой утери контроля взыграла паника — так резко и совершенно не вовремя. Она не могла себе этого позволить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        <i>«Дилан наблюдает за нами. Я должна сделать всё, чтобы исключить или подтвердить причастность Джонатана». 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Маргарита',
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        <i>«Позже пересмотрю запись допроса на изучение реакций, попробую разобрать невербалику». 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        <i>«Но сейчас мне следует…»
      `,
    buttons: [
      {
        text: 'Ответить спокойно',
        goTo: 15,
        gift: true
      },
      {
        text: 'Молча изучать',
        goTo: 52
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 15,
    text:
      `
        — Мистер Браун, Вы полны сюрпризов. Поделитесь, откуда информация? 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    music: require('../../../../Sounds/MM/Jonathan.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        Маргарита не спускала цепких, коварных глаз с собеседника, отчаянно жаждая разрушить его броню. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        Вытащить эмоции и мотивы наружу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 18,
    text:
      `
        Узреть, что скрывает этот подозрительный, богатый и непомерно властный мужчина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 782
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 782,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/MM/CutScenes/Margo_Jonathan.mp4'), goTo: 19 },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        <i>«Ты не похож на убийцу. Но, как показывает практика, внешность частенько бывает обманчива…»
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        — Терпеть не могу, когда на мой вопрос отвечают вопросом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 21,
    text:
      `
        — Какое совпадение: я тоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        Маргарита оставалась серьёзной, несмотря на сочащийся из каждого слова сарказм, и Джонатан тихо хмыкнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        <i>«Ну и характер. Истинный детектив…»
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        Ответил вслух: 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        — Тайна следствия для таких, как я — не аргумент. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        — Купили информацию? 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        — Напоминаю, что взяточничество в Королевстве карается крупным штрафом либо лишением свободы на срок до 10 лет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        — Осторожнее, мистер Браун. Ненароком наговорите себе на уголовное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 29,
    text:
      `
        Джонатан закатил глаза, отвечая с видимой неохотой: 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        — Серьга на месте преступления и подозрительная записка. Полагаю, это Вас напрягло не на шутку?
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        Джонатан продолжал свою тактику — изводить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 32,
    text:
      `
        Он занимался тем же, чем сама Маргарита — внимательно, чрезмерно пытливо разглядывал. Разгадывал. Изучал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 33,
    text:
      `
        Не найдя на дне зрачков детектива что-то, что могло бы выдать скрытые намерения и настоящие чувства, мужчина негромко вздохнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 34,
    text:
      `
        Безумно редко успешному бизнесмену попадались нечитаемые персонажи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 35,
    text:
      `
        Внимательность и наблюдательность, с которыми Джонатан подходил к анализу собеседника, помогали в работе.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 36,
    text:
      `
        Он чаще молчал и оценивал напротив смотрящего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 37,
    text:
      `
        Но самому попасть под прицел той, кто, как и он, затаившись, хищно принюхивалась к страху и лжи, испытывая на прочность… 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 38,
    text:
      `
        Это стало для него новым, совершенно особенным и, как ни странно, до одури любопытным опытом… 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 39,
    text:
      `
        Детектив устало вздохнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 40,
    text:
      `
        — Вы снова это делаете, мистер Браун. Закапываете себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 41,
    text:
      `
        — Теперь Ваше алиби волнует меня куда сильнее, чем минутами ранее.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    message: 'И Вы тоже снова делаете это — интригуете бизнесмена.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Reputation' },
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Analyse' },
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Instinct' },
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Jonathan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 42,
    text:
      `
        Джонатан снисходительно улыбнулся, оставаясь при своём мнении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 43,
    text:
      `
        Будучи уверенным в том, что нахождение здесь — всего-лишь вопрос времени, развязно протянул:
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 44,
    text:
      `
        — Собственно, никакого секрета тут нет, <i>Маргарита…
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smile.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 45,
    text:
      `
        — Ваше окружение слишком много болтает. Будь они моими сотрудниками, я бы без раздумий подрезал их языки.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 46,
    text:
      `
        — Крайне масштабная утечка информации получается. Понимаю Ваше негодование и стремление разобраться в этом как можно быстрее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 47,
    text:
      `
        — Сказали «А», говорите «Б». Информация. Откуда она?
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 48,
    text:
      `
        Джонатан коротко хохотнул. Брови его игриво приподнялись.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 49,
    text:
      `
        — Где «Б», мисс, там обычно следует и В, и Г, и дальше алфавит по списку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 50,
    text:
      `
        — Вы на мой главный вопрос не отвечаете. Почему я должен?
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 51,
    text:
      `
        — Потому что в <i>моей</i> власти бросить Вас в камеру при желании. Не в Вашей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 52,
    text:
      `
        Маргарита перевела взгляд на бронированное стекло напротив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 53,
    text:
      `
        Джонатан заметил, как девушка в очередной раз заглянула ему за спину, и обернулся тоже. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 54,
    text:
      `
        В глазах мужчины промелькнуло лёгкое разочарование. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 55,
    text:
      `
        <i>«Ах, вон оно что… Ищешь поддержки по ту сторону».
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 56,
    text:
      `
        <i>«Выходит, переоценил? Всё же Вы — обычная девушка, жаждущая опоры. А шуму-то было…»
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 57,
    text:
      `
        Браун расслабленно выдохнул — напряжение окончательно отпустило его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 58,
    text:
      `
        — Собственно, никакого секрета тут нет, <i>Маргарита…
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 59,
    text:
      `
        — Ваше окружение слишком много болтает. Будь они моими сотрудниками, я бы без раздумий подрезал их языки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 60,
    text:
      `
        — Крайне масштабная утечка информации получается. Понимаю и не осуждаю Вашу нервозность.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    message: 'Осторожнее, детектив. Не дай ему забраться вглубь и разворошить твои слабости.',
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: -1, category: 'Effect', id: 'Reputation' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 61,
    text:
      `
        Маргарита незаметно сглотнула. Задрала подбородок в попытке спасти своё положение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 62,
    text:
      `
        — Сказали «А», говорите «Б». Информация. Откуда она? 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 63,
    text:
      `
        Джонатан коротко хохотнул. Брови его игриво приподнялись.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 64,
    text:
      `
        — Где «Б», мисс, там обычно следует и В, и Г, и дальше алфавит по списку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 65,
    text:
      `
        — Вы на мой главный вопрос не отвечаете. Почему я должен?
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 66,
    text:
      `
        Маргарита с трудом сдержалась, чтобы не выдать своё негодование тяжёлым вздохом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 67,
    text:
      `
        <i>«Вот же!.. строптивый паршивец». 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 68,
    text:
      `
        <i>«Какая бестолочь вздумала обсуждать следствие в присутствии постороннего?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 69,
    text:
      `
        Маргарита почувствовала, как на неё волнами накатывают злость и усталость.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 70,
    text:
      `
        На допросную обрушилось отравляющее воздух молчание, пока Джонатан вновь его не нарушил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 71,
    text:
      `
        Нарочито растягивая звуки, мужчина оглянулся по сторонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 72,
    text:
      `
        — Долго мне сидеть в этой клетке?
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 73,
    text:
      `
        — Столько, сколько потребуется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 74,
    text:
      `
        — Пишите письменный отчёт: где, с кем, со скольки и до скольки были в промежутке с 16 по 19 сентября. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 75,
    text:
      `
        — Ближайшее окружение отца, враги.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 76,
    text:
      `
        — Без этой информации я Вас отсюда не выпущу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 77,
    text:
      `
        Оборвав внимание к собеседнику, Маргарита поднялась со стула.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 78,
    text:
      `
        Демонстративно одёрнув форменный жакет, развернулась на каблуках и покинула допросную, бесшумно прикрыв за собой дверь.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 79,
    text:
      `
        Прижавшись спиной к двери, девушка на мгновение застыла. В её глазах полыхала ярость, умело припрятанная за раздражением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    music: require('../../../../Sounds/MM/Fast.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 80,
    text:
      `
        Маргарита запустила пальцы в копну густых тёмных волос, возвращая себе ясность ума.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 81,
    text:
      `
        — Энергетический вампир.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 82,
    text:
      `
        Дилан плавно подобрался к напарнице, ненавязчиво изучая её состояние. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 83,
    text:
      `
        Не успев вникнуть в сказанное, девушка резко выпалила:
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 84,
    text:
      `
        — Что?!
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 85,
    text:
      `
        — Я про Джонатана. Скользкий типок.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 86,
    text:
      `
        — Всё ок. Немногим сложнее, чем оторванные серийники, с которыми доводилось беседовать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    message: 'Серийники — в полицейском жаргоне серийные убийцы, совершившие серию (чаще от трёх) убийств.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 87,
    text:
      `
        — Тем более, он не замешан в убийстве.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 88,
    text:
      `
        Задумчиво вскинув брови, Дилан с сомнением уточнил:
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 89,
    text:
      `
        — И ты… э-э… поняла это за десять минут разговора, где Браун ничего внятного не сказал толком?
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 90,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Analyse' }) > statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Instinct' })
        },
        goTo: 92
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Analyse' }) < statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Instinct' })
        },
        goTo: 91
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Analyse' }) === statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Instinct' })
        },
        goTo: 93
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 91,
    text:
      `
        — Я уверена в этом. Чувствую, что к убийству отца Джонатан не имеет никакого отношения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    message: 'Ваши выборы сказались на мышлении Маргариты. ',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 92,
    text:
      `
        — Я анализировала его поведение. Жесты, взгляды, динамику слов. Он слегка сбит с толку трагедией, только и всего.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    message: 'Ваши выборы сказались на мышлении Маргариты. ',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 93,
    text:
      `
        — За его пассивной агрессией кроется элементарное замешательство, хоть Браун и пытается это скрыть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    message: 'Ваши выборы сказались на мышлении Маргариты. ',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 94,
    text:
      `
        — Там, где существует растерянность, никогда не бывает контроля. А Джонатан — человек, живущий лишь этим: чёткий график, план на пять лет вперёд… Словом — рутина, гарантирующая порядок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 95,
    text:
      `
        — Посмотрим, что напишет в отчёте. Проверим алиби.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 96,
    text:
      `
        Дилан, помедлив, кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 97,
    text:
      `
        Маргарита посмотрела на часы, висящие на стене.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 98,
    text:
      `
        — Я пошла в кабинет, проветрюсь. Подумаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 99,
    text:
      `
        — Без проблем. Скоро должна прийти информация из участка. С результатами дактилоскопии.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 100,
    text:
      `
        — Может, что и нароем. Мало ли: кто-то бывалый рецидивит от большой тоски по камере?
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 101,
    text:
      `
        Сказано это было с неприкрытой надеждой, и Маргарита невесело усмехнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 102,
    text:
      `
        Интуиция подсказывала, что так просто ей от этого дела не избавиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 103,
    text:
      `
        Не разделяя энтузиазма мужчины, она протянула: 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 104,
    text:
      `
        — Сомневаюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 105,
    text:
      `
        И молча направилась к выходу.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 106,
    text:
      `
        Дилан давно привык к этой стороне Маргариты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 107,
    text:
      `
        Когда ту тяготили мысли, она предпочитала сбежать от всех в тишину.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 108,
    text:
      `
        Хлопнула дверь. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        goTo: 109,
        gift: true
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 109,
    text:
      `
        Дилан устало протёр глаза, приблизился к мониторам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 110,
    text:
      `
        Опустившись в кресло, стал задумчиво наблюдать через экран за мужчиной, который, склонившись над столом, что-то активно писал.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 111,
    text:
      `
        Так пролетело около часа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 112,
    text:
      `
        Дилан не заметил, как начался дождь. На улице вновь разбушевалась гроза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 113,
    text:
      `
        Наконец, Джонатан отложил ручку и устало откинулся на спинку стула.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 114,
    text:
      `
        Чейз оживился.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 115,
    text:
      `
        Поставив на паузу записывающие видео- и аудиоустройства, поднялся со стула и отправился в допросную.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 116,
    text:
      `
        Джонатан сидел на том же злосчастном стуле, задрав голову к потолку. Глаза его были прикрыты.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    music: require('../../../../Sounds/MM/Mysterious.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 117,
    text:
      `
        Посторонние звуки вынудили мужчину отвлечься от тяжёлых мыслей, он резко выпрямился.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 118,
    text:
      `
        Увидев вошедшего, Браун моментально напрягся.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 119,
    text:
      `
        Глядя на то, как Дилан приближается, ехидно заметил:
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 120,
    text:
      `
        — Мало дырок прожёг во мне через стекло? Духу не хватило войти вместе с ней? 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 121,
    text:
      `
        Дилан, не спуская недовольного взгляда с сидящего, сурово парировал:
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 122,
    text:
      `
        — Вам и без меня было весело.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 123,
    text:
      `
        Джонатан грубо отрезал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 124,
    text:
      `
        — Мы так не договаривались.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 125,
    text:
      `
        — Вот именно, что <i>так</i> мы не договаривались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 126,
    text:
      `
        — Какого хера, Джон?!
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 127,
    text:
      `
        На последних словах Дилан повысил голос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 128,
    text:
      `
        Не привыкший к излишней эмоциональности, детектив резко выдохнул в попытке избавиться от охватившего разум гнева. 
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 129,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return (statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'LeanOnDylan' }) >= 1) && (statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'DidItBrave' }) >= 1)
        },
        goTo: 130
      },
      {
        condition: () => {
          return (statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'LeanOnDylan' }) <= 0) && (statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'DidItBrave' }) <= 0)
        },
        goTo: 143
      },
      {
        condition: () => {
          return (statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'LeanOnDylan' }) >= 1) && (statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'DidItBrave' }) <= 0)
        },
        goTo: 143
      },
      {
        condition: () => {
          return (statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'LeanOnDylan' }) <= 0) && (statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'DidItBrave' }) >= 1)
        },
        goTo: 143
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 130,
    text:
      `
        <i>«Этот болван просто взял и сбил её с толку! Представить не могу, что творится в её голове…»
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 131,
    text:
      `
        Дилан с шумом вздохнул, прикрыв на мгновение глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 132,
    text:
      `
        Тревога за Маргариту накрыла внезапно, обнажив истинные эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 133,
    text:
      `
        Злость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 134,
    text:
      `
        Часом ранее, сидя по ту сторону — за стеклом, он наблюдал, как Браун пытается вскрыть личность Марго и забраться вглубь, чтобы разворошить там всё.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 135,
    text:
      `
        Не спокойно изучить, а перевернуть вверх дном, не заботясь о том, какой бардак останется после его вмешательства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 136,
    text:
      `
        Грязные манипуляции, танцы на нервах во имя собственной цели. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 137,
    text:
      `
        И наглая, вопиющая близость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 138,
    text:
      `
        Его руки по краям её бёдер, в попытке удержать стул. И лицо в жалких сантиметрах от её, совсем близко…
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 139,
    text:
      `
        <i>«Говнюк!»
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 140,
    text:
      `
        Стиснув зубы, Дилан постарался прогнать неуместную, глупую ревность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 141,
    text:
      `
        Он знал, что Маргарита не придала этому никакого значения.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 142,
    text:
      `
        <i>«Очередной мутный свидетель, очередной допрос. Вот и всё».
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 143,
    text:
      `
        Запустив пальцы в волосы, Браун вздохнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 144,
    text:
      `
        — Успокойся, я ни слова о тебе не сказал.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 145,
    text:
      `
        — Мы всё ещё работаем вместе.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 146,
    text:
      `
        Дилан недоверчиво фыркнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 147,
    text:
      `
        — Работаем вместе? Серьёзно?
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 148,
    text:
      `
        — Даже после смерти отца, где ты — главный подозреваемый?
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 149,
    text:
      `
        — К чему весь этот фарс? 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 150,
    text:
      `
        Джонатан, утомлённо вздохнув, поднялся на ноги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 151,
    text:
      `
        Подцепив со стола исписанные ровным почерком листы бумаги, протянул их Дилану.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 152,
    text:
      `
        — Ты же не думаешь, что я — убийца? 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 153,
    text:
      `
        — Какая уже к чёрту разница? Если Марго узнает…
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 154,
    text:
      `
        — То что, Ромео? Она не сможет больше доверять тебе? Грустно.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 155,
    text:
      `
        Отметив реакцию собеседника, бизнесмен закатил глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 156,
    text:
      `
        — Она не узнает.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 157,
    text:
      `
        Немного подумав, добавил:
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 158,
    text:
      `
        — По крайней мере, не от меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 159,
    text:
      `
        — Я рассчитываю на тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 160,
    text:
      `
        Ощущая себя невыносимым мерзавцем, Дилан раздажённо поморщился:
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 161,
    text:
      `
        —  Я продолжу сливать инфу до тех пор, пока мне это выгодно.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 162,
    text:
      `
        — Все крысы окажутся перебиты, с тобой или без тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 163,
    text:
      `
        С последней фразой Дилан сжал челюсти, старательно отгоняя от себя мысли, что сам в какой-то степени поступает, как крыса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 164,
    text:
      `
        Втихую, за спиной.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 165,
    text:
      `
        Мужчины смотрели друг на друга с минуту, и мысли их в этот момент были абсолютно идентичными.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 166,
    text:
      `
        Сдавшись первым, детектив безмолвно кивнул. Забрал бумаги с показаниями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 167,
    text:
      `
        Чейз пробежался по строкам, и брови его нахмурились. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    message: 'Новая улика добавлена в Ваш инвентарь. ',
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Item', id: 'Jonathan_Report' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 168,
    text:
      `
        — Что не так?
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 169,
    text:
      `
        — Здесь нет ни слова о врагах мистера Брауна. Или хотя бы тех, с кем он состоял в напряжённых отношениях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 170,
    text:
      `
        — И?
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 171,
    text:
      `
        Дилан, закатив глаза, терпеливо пояснил:
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 172,
    text:
      `
        — Нужны имена. В этом и смысл отчёта. Марго спросит с меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 173,
    text:
      `
        — Даже не думай. Я не собираюсь сдавать прямых конкурентов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 174,
    text:
      `
        Дилан убрал листы в папку, размышляя над тем, как лучше поступить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 175,
    text:
      `
        В конце концов, устало отмахнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 176,
    text:
      `
        — Свободен. Иди уже отсюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 177,
    text:
      `
        — А как же твоя начальница?
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 178,
    text:
      `
        — Справлюсь. И спускайся на лифте. Никаких лестниц. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 179,
    text:
      `
        Неожиданная улыбка украсила суровое, подёрнутое усталостью лицо Джонатана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 180,
    text:
      `
        Мужчина провокационно протянул:
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 181,
    text:
      `
        — Хм, ходить по лестницам — способ Марго поддерживать себя в форме?
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 182,
    text:
      `
        Дилан бросил презрительный взгляд в спину уходящего мужчины.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 183,
    text:
      `
        — Для тебя она Маргарита.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 184,
    text:
      `
        — Кто знает, быть может вскоре она и для тебя станет лишь <i>Маргаритой.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 185,
    text:
      `
        Небрежно растягивая слова, Джонатан выделил имя девушки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 186,
    text:
      `
        Дилан собирался ответить колкостью, но вовремя прикусил язык. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 187,
    text:
      `
        В словах Брауна притаилась не столько язвительная насмешка, сколько обезоруживающая, горькая правда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 188,
    text:
      `
        <i>«Она не поймет. Не простит…»
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sad.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 189,
    text:
      `
        <i>«Скажет, что предал доверие, и будет в этом права».
      `,
    buttons: [
      {
        text: '',
        goTo: 801
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 801,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 802 },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 802,
    text:
      `
        Папка с громким хлопком опустилась на стол. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    message: 'Кабинет рядом с допросной',
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 190,
    text:
      `
        Звукозаписывающее устройство и видеонаблюдение вновь оказались активны.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 191,
    text:
      `
        И всё вроде бы стало как раньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 192,
    text:
      `
        За исключением чувств Дилана.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 193,
    text:
      `
        Детектив, сжирая себя изнутри, упал в кресло, устало массируя пальцами переносицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 194,
    text:
      `
        Как так вышло, что ему — человеку слова, тому, кто совершенно не выносил враньё и гнусные ухищрения, приходится заметать следы и вести свою отвратительную игру? 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 195,
    text:
      `
        Мужчина сдавленно простонал, чувствуя, как сделка с собственной совестью заводит его всё глубже в яму из грязи и лжи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 196,
    text:
      `
        <i>«Я обязательно всё расскажу позже. Она возненавидит меня… и правильно сделает».
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sad.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 197,
    text:
      `
        Под конец рабочего дня начальник в срочном порядке вызвал Маргариту к себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/MM/Calm.mp3'),
    ambient: require('../../../../Sounds/MM/Rain.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 198,
    text:
      `
        — Пришли результаты пальчиков со всех имеющихся улик… 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 199,
    text:
      `
        Мужчина кивком головы указал на рабочий стол, где среди прочих бумаг лежал вскрытый конверт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 200,
    text:
      `
        — А утром ко мне заезжал Роджерс Марпл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 201,
    text:
      `
        Артур бросил на подчинённую ужасно серьёзный взгляд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 202,
    text:
      `
        Затянувшееся молчание не на шутку напрягло Маргариту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 203,
    text:
      `
        — Кхм… что-то не так, сэр?
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 204,
    text:
      `
        Нильсен коротко мотнул головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 205,
    text:
      `
        — Напротив. Инспектор хвалил тебя за оперативную помощь следствию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 206,
    text:
      `
        — Просил не ругать за незапланированную вылазку и самодеятельность. Советовал выписать премию.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 207,
    text:
      `
        Артур сдержанно усмехнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 208,
    text:
      `
        — Делать я этого, разумеется, не стану.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 209,
    text:
      `
        Девушка задумчиво вскинула брови. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 210,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'FoundUnderTheTree' }) >= 1
        },
        goTo: 211
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'FoundUnderTheTree' }) <= 0
        },
        goTo: 233
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 211,
    text:
      `
        — Одного понять не могу… 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 212,
    text:
      `
        — Марпл не знал, чья серьга оказалась на месте преступления.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    message: 'Ваши рабочие отношения с Артуром ухудшились. ',
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: -1, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 213,
    text:
      `
        — В деле она помечена как «предмет не идентифицирован».  В базе данных присвоили код с последующей отправкой на экспертизу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 214,
    text:
      `
        — Полагаю, нет нужды объяснять, чем это может быть чревато. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 215,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'CallBoss' }) >= 1
        },
        goTo: 216
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'CallBoss' }) <= 0
        },
        goTo: 233
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 216,
    text:
      `
        — Маргарита, ты хороший специалист. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 217,
    text:
      `
        — За годы службы у меня ни разу не возникало мыслей, что ты можешь что-то утаить в угоду себе или как-то меня подвести.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 218,
    text:
      `
        — И тот ночной пропущенный не выходит у меня из головы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 219,
    text:
      `
        — Если бы я ответил и вовремя отреагировал, возможно, нам не пришлось бы сейчас составлять дополнительную документацию на отзыв идентификации ключевой улики. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 220,
    text:
      `
        — Я постараюсь сделать всё, чтобы тебя не отстранили от дела, но и ты должна понимать: скрывать такое — ошибка, которая может стоить карьеры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 221,
    text:
      `
        Поджав губы, детектив слушала Артура, ощущая, как паника стискивает горло, перекрывая дыхание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 222,
    text:
      `
        <i>«Ошибка, которая может стоить карьеры…»
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 223,
    text:
      `
        Мысленно повторила Маргарита, жалея, что не владеет возможностью обернуть время вспять и поступить так, как того требовали обстоятельства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 224,
    text:
      `
        Почему ещё никто не додумался изобрести таблетки от паники?
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 225,
    text:
      `
        Стараясь подавить непрошеные эмоции, девушка промолвила, и голос её прозвучал с едва слышимой хрипотцой: 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 226,
    text:
      `
        — Поняла. Больше подобного не повторится.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 227,
    text:
      `
        Артур, помолчав с минуту, наконец, кивнул: 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 228,
    text:
      `
        — Договорились. Не подведи меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 229,
    text:
      `
        — Мне нужна твоя ясная голова и железобетонная логика.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 230,
    text:
      `
        — Я всегда ценил в тебе эту твою удивительную возможность выключать женщину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 231,
    text:
      `
        — Никакой паники на работе, исключительно рациональность. Это огромное преимущество.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 232,
    text:
      `
         <p>— Не пренебрегай им.  
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 233,
    text:
      `
        Опустив взгляд на рабочий стол, Маргарита кивнула на вскрытый конверт:
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 234,
    text:
      `
        — Могу я ознакомиться с результатами экспертизы, сэр?
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 235,
    text:
      `
        — Валяй. 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 236,
    text:
      `
        Начальник, не скрывая усталости, отошёл к окну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 237,
    text:
      `
        Мир вокруг Маргариты погас, и кроме документов в руках не осталось ничего.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 238,
    text:
      `
        Ни сквозняка, резко ворвавшегося в кабинет. Ни барабанящего по карнизу косого ливня. Ни едкого, табачного аромата, исходящего от тлеющей сигареты Нильсена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 239,
    text:
      `
        На дактилоскопической карте отображались смазанные чернилами пятна и много формальных терминов, но девушке хватило одной строки, чтобы сделать выводы.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 240,
    text:
      `
        Неутешительные…
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    message: 'Новая улика добавлена в Ваш инвентарь. ',
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Item', id: 'Fingerprinting' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 241,
    text:
      `
        Отчёт гласил, что на найденной на пороге записке удалось выявить следы, принадлежащие лишь одному человеку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 242,
    text:
      `
        Отпечатки самой Маргариты.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 243,
    text:
      `
        Та же история с серьгой детектива. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 244,
    text:
      `
        И больше ничего.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 245,
    text:
      `
        В заключении указали возможность удаления посторонних следов, так как пальцы самой Маргариты на обоих предметах опознали с трудом, ибо те были сильно смазаны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 246,
    text:
      `
        <i>«Какое же дерьмище…»
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 247,
    text:
      `
        Иных мыслей на эту ситуацию не нашлось.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 248,
    text:
      `
        Задумчивую Маргариту отвлёк тихий скрип рамы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 249,
    text:
      `
        Артур Нильсен, докурив, закрыл в кабинете окно и вернулся в кресло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 250,
    text:
      `
        Расположив локти на столе, мужчина уткнулся подбородком в ладони и вопросительно вскинул брови. 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 251,
    text:
      `
        — Что планируешь делать?
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 252,
    text:
      `
        Маргарита сложила лист и убрала обратно в конверт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 253,
    text:
      `
        — Могу попросить Вас отправить мне результаты на почту? 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 254,
    text:
      `
        Нильсен кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 255,
    text:
      `
        — Я изучу показания Джонатана Брауна и аккуратно наведаюсь на похороны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 256,
    text:
      `
        — Необходимо опросить сотрудников и близких знакомых жертвы, изучить записи с допроса Джонатана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 257,
    text:
      `
        — Также следует запросить проверку документации всех активных бизнесов Томаса, чтобы исключить месть или банальную конкуренцию.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 258,
    text:
      `
        — Ночью я отправила письмо на предоставление записи с камер видеонаблюдения своего дома, чтобы вычислить того, кто подбросил записку, но… 
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 259,
    text:
      `
        — Не знаю, сэр. Ситуация вопиющая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 260,
    text:
      `
        — Если к делу подключат Агенство Национальной безопасности, боюсь, они имеют полное право отстранить меня и включить в список подозреваемых… 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 261,
    text:
      `
        Нильсен оборвал подчинённую на полуслове:
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 262,
    text:
      `
        — Отставить, детектив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 263,
    text:
      `
        — Не беги вперёд паровоза и не спеши хоронить себя раньше времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    speaker: 'Артур Нильсен ',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 264,
    text:
      `
        — Ты передала всю необходимую информацию, остаётся дождаться результатов вскрытия и сверить твоё алиби с фактическим временем убийства.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 265,
    text:
      `
        — И необходимо сегодня же пригласить спецов с лаборатории. Пусть возьмут пальчики со всех дверных ручек в твоей квартире. 
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 266,
    text:
      `
        — А пока… 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 267,
    text:
      `
        Мужчина отвлёкся на монитор. Щёлкнув пару раз мышкой, он развернул экран лицом к девушке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 268,
    text:
      `
        — Слышала о нём? Отморозок, коллекционирующий снимки собственных жертв. 
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 269,
    text:
      `
        Маргарита, устремив взгляд на компьютер, прочитала название личного дела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 270,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/MM/CutScenes/Report.mp4'), goTo: 271 },
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 271,
    text:
      `
        — Фотограф… Я помню его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 272,
    text:
      `
        Девушка посмотрела на начальника в ожидании продолжения.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 273,
    text:
      `
        — Тебе известно, как этому ублюдку удалось избежать депортации с последующим весельем в виде смертельной инъекции? 
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 274,
    text:
      `
        — Нет…
      `,
    buttons: [
      {
        text: 'Расскажите подробнее',
        goTo: 275
      },
      {
        text: 'Расскажите в двух словах',
        goTo: 324
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 275,
    text:
      `
        — Я помню, что это было очень сложное и запутанное дело. Хотелось бы узнать о нём поподробнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speaker: 'Маргарита',
    stats: [{ story: EStoriesEn.MM, value: +1, category: 'Choice', id: 'TellDetailed' }],
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 276,
    text:
      `
        Артур мрачно усмехнулся. Поудобнее устроившись в кресле, он начал рассказ:
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 277,
    text:
      `
        — Тогда слушай…
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    message: 'История из прошлого Артура Нильсена. ',
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 278,
    text:
      `
        — Сегодня утром пришло письмо из департамента Штатов. Они оставляют это дело за Великобританией…
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    beforeBegin: whiteFlash,
    message: 'Пять лет назад.',
    music: require('../../../../Sounds/MM/Mysterious.mp3'),
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 279,
    text:
      `
        Артур тяжело вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 280,
    text:
      `
        — Ро, это… паршиво. Неужели ничего нельзя сделать?
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 281,
    text:
      `
        — Я понимаю твоё негодование, Артур, но, увы. Нас отстраняют. Фотографом займётся полиция при Королевском дворце…
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 282,
    text:
      `
        Роджерс достал сигареты. Раскрыв пачку, протянул другу. Полицейские закурили.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 283,
    text:
      `
        — Видел его последние снимки?
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 284,
    text:
      `
        Нильсен резко кивнул, на секунду зажмурившись.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 285,
    text:
      `
        —Знаешь… думал, что за пятнадцать лет службы видел уже всё, что только возможно, но это…
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 286,
    text:
      `
        Мужчина запнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 287,
    text:
      `
        — Девчонка с последнего фото… ей всего девятнадцать лет! 
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 288,
    text:
      `
        — И эта подпись. «Груба и тщеславна. Улыбайся почаще». 
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 289,
    text:
      `
        Роджерс поморщился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 290,
    text:
      `
        — И что, прям наживую резал? 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 291,
    text:
      `
        Артур, затянувшись поглубже, кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 292,
    text:
      `
        — Он смазал ей нос нашатырем, чтобы не отключилась. Сделал разрезы от губ до ушей, раздел и снимал, пока она истекала кровью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 293,
    text:
      `
        Сигарета в руках Артура задрожала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 294,
    text:
      `
        — У неё на лице не осталось живого места. Кожа на крыльях носа вся выжжена.
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 295,
    text:
      `
        Роджерс удручённо покачал головой. Произнёс с нескрываемой печалью: 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 296,
    text:
      `
        — Бедняжка… досталось ей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 297,
    text:
      `
        — Двенадцать жертв. Предпоследнего парнишку больной ублюдок прибил гвоздями к кресту прямо на городском кладбище…
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 298,
    text:
      `
        — И этот зверь заслуживает просто пожизненного? 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 299,
    text:
      `
        — Я понял, если бы его до конца дней пытали. Но не индивидуальная камера же!
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 300,
    text:
      `
        — Я абсолютно согласен, но он единственный, кому удалось выйти на след тех серийников из Бристоля и Нориджа. Как их там? Честер и…?
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 301,
    text:
      `
        — Аргайл. Джозеф Аргайл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 302,
    text:
      `
        — Точно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 303,
    text:
      `
        — Этого Аргайла искали два года, пока он разбрасывал за собой следом конечности жителей Нориджа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 304,
    text:
      `
        — До сих пор не понимаю, как Фотограф это сделал…
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 305,
    text:
      `
        — Было проведено с десяток тестов. Его интеллект поразил всех королевских учёных, и только по этой причине правительство не желает ссылать гниду на гибель. 
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 306,
    text:
      `
        — Мда уж…
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 307,
    text:
      `
        Роджерс тяжело вздохнул, резюмируя: 
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 308,
    text:
      `
         — Каких Богов нужно благодарить за то, что этот ублюдский гений так глупо попался? С его-то мозгами…
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 309,
    text:
      `
        — Всё-таки есть справедливость в этом мире. 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 310,
    text:
      `
        — Сама судьба не выдержала подобной жестокости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 311,
    text:
      `
        — И что, Королевство действительно хочет привлечь его в качестве персонального Шерлока Холмса? 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speaker: 'Роджерс Марпл',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 312,
    text:
      `
        Артур повёл плечами, не отрывая взгляда от тлеющей сигареты в руке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 313,
    text:
      `
        Мужчины ненадолго замолчали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 314,
    text:
      `
        Нильсен вновь вспомнил снимки жертв, которые изучал неделями, пока собирал документы для передачи в суд, и последний допрос мерзавца.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 315,
    text:
      `
        Его бахвальство и взгляд, полный веры в собственную безнаказанность и правоту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 316,
    text:
      `
        Сбросив окурок в пепельницу, Нильсен поднялся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 317,
    text:
      `
        — Ро, я так не могу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 318,
    text:
      `
        — Я попробую ещё раз переговорить с начальством… 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 319,
    text:
      `
        Товарищ кивнул, с грустью осознавая, что попытки Артура сослать Фотографа в родной Арканзас на смертную казнь, скорее всего, потерпят неудачу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 320,
    text:
      `
        Так и вышло.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 321,
    text:
      `
        Эта ситуация, со всей своей вопиющей несправедливостью и политическим хладнокровием, вынудила мужчину покинуть службу в полиции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 322,
    text:
      `
        Спустя месяц Артур уволился и открыл собственное детективное бюро. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 323,
    text:
      `
        Им двигала личная цель — жить по совести и искать преступников самостоятельно, не пачкаясь о помощь убийц. 
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    achievement: { story: EStoriesEn.MM, name: 'BossPast' },
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 324,
    text:
      `
        — В случае необходимости за дополнительной информацией я обращусь к личному делу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    music: require('../../../../Sounds/MM/Mysterious.mp3'),
    ambient: require('../../../../Sounds/MM/Rain.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 325,
    text:
      `
        Артур понимающе кивнул. Время в их деле — ценный ресурс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 326,
    text:
      `
        — Пять лет назад я служил вместе с Роджерсом в одном подразделении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 327,
    text:
      `
        Лицо Маргариты вытянулось от удивления.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 328,
    text:
      `
        — Мы вели дело Фотографа — знаменитого убийцы, который полтора года кошмарил Лондон страшными снимками на даркнете. 
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 329,
    text:
      `
        — Он мнил себя карателем. Выбирал людей, устраивал за ними слежки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 330,
    text:
      `
        — Каждое убийство было сродни ритуалу. Он до последнего оставлял своих жертв в сознании. 
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 331,
    text:
      `
        — Чтобы сделать снимки и, как он выразился на допросе, «запечатлеть их боль и агонию. Очистить истлевшие души». 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 332,
    text:
      `
        На последних словах мужчина стиснул пальцы в кулак, гневно выплюнув:
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 333,
    text:
      `
        — Зверство.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 334,
    text:
      `
        Маргарита тяжело сглотнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 335,
    text:
      `
        — Фотограф уродовал. Иногда лица, чаще — тела. Композиции его снимков выходили за пределы разумного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 336,
    text:
      `
        — И когда нас с Роджерсом отстранили от этого дела, передав его Королевской полиции, я понял, что это значит.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 337,
    text:
      `
        — Правительство желает оставить мразь при себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 338,
    text:
      `
        — В процессе следствия он помог выйти на двух серийников, за которыми долго гонялись, но всё было безуспешно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 339,
    text:
      `
        — И лишь благодаря ему тех маньяков удалось выловить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 340,
    text:
      `
        — Англия сохранила за собой право не депортировать Фотографа в США, где ему, при всех законах родного штата, грозила смертная казнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 341,
    text:
      `
        — IQ-тесты продемонстрировали наивысшие показатели, каких за последние полвека ещё не фиксировали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 342,
    text:
      `
        — Я не смог смириться с тем, что убийцу буквально уберегли от заслуженной смерти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 343,
    text:
      `
        — Уволился спустя месяц и открыл наше бюро. 
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 344,
    text:
      `
        — Я поклялся себе, что никогда не стану использовать методы, коими не побрезговала наша страна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    ambient: require('../../../../Sounds/MM/Rain.mp3'),
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 345,
    text:
      `
        — Убийцы должны получать по заслугам, а не выступать в роли спасителей.
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 346,
    text:
      `
        — И, к счастью, до сего момента у меня это хорошо получалось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 347,
    text:
      `
        Артур замолчал, и взгляд его, устремлённый на подчинённую, обрёл некую двусмысленность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 348,
    text:
      `
        Маргарита, не сводя глаз с собеседника, задумчиво промолвила:
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 349,
    text:
      `
        — Сэр, я правильно понимаю, что… 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 350,
    text:
      `
        Девушка прочистила горло: 
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 351,
    text:
      `
        — Вы позволяете обратиться к нему за помощью при условии, что вести диалог я буду самостоятельно?
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 352,
    text:
      `
        — Без… вашей помощи? 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 353,
    text:
      `
        Артур вдруг усмехнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 354,
    text:
      `
        Нервным жестом взлохматил поседевшие волосы и процедил, выделяя каждое слово:
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 355,
    text:
      `
        — Боюсь, я не в состоянии, при всём своём опыте, вести конструктивный диалог с подобными… экземплярами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 356,
    text:
      `
        — Честь превыше победы, детектив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 357,
    text:
      `
        Артур тяжело вздохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 358,
    text:
      `
        — Мне бы не хотелось использовать этот вариант, но, боюсь, иного пути в нашем случае может и не найтись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 359,
    text:
      `
        Маргарите удалось разобрать заложенный в слова скрытый смысл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 360,
    text:
      `
        «Я даю тебе эту возможность, чтобы спасти <i>твою</i> репутацию. Вопреки себе». 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 361,
    text:
      `
        И она почувствовала, как её сердце наполняется бесконечной благодарностью к Нильсену. 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 362,
    text:
      `
        Невзирая на всю строгость и требовательность, он всегда стоял горой за своих людей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 363,
    text:
      `
        Даже когда те совершали ошибки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 364,
    text:
      `
        —Сэр.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 365,
    text:
      `
        Маргарита поднялась на ноги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 366,
    text:
      `
        — Я воспользуюсь этим вариантом в случае, если иных не останется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 367,
    text:
      `
        — Спасибо за эту возможность…
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 368,
    text:
      `
        Детектив протянула руку, выражая признательность, и Артур уверенно сжал прохладные женские пальцы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 369,
    text:
      `
        — Надеюсь, всё разрешится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 370,
    text:
      `
        — Я не сомневаюсь в тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 371,
    text:
      `
        Девушка благодарно кивнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 372,
    text:
      `
        Отпустив ладонь детектива, Артур откашлялся, сворачивая откровение.
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 373,
    text:
      `
        — После работы отправляйся в тренажёрный зал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 374,
    text:
      `
        — Завтра должны прийти результаты вскрытия. Продублирую всю информацию на твою почту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 375,
    text:
      `
        — Поняла. Могу идти?
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 376,
    text:
      `
        Нильсен кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 377,
    text:
      `
        — Хорошего вечера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Smile.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 378,
    text:
      `
        Девушка покинула кабинет начальника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 379,
    text:
      `
        Устало опустившись на стул, Маргарита уронила голову на руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    music: require('../../../../Sounds/MM/Saw.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 380,
    text:
      `
        Во рту пересохло, в горло забился липкий, удушливый страх. 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 381,
    text:
      `
        Потерять карьеру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 382,
    text:
      `
        <i>«Я что-то упускаю». 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 383,
    text:
      `
        Как назло, разболелась голова. 
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 384,
    text:
      `
        Массируя пульсирующие виски, детектив поднялась. Достав из гардероба сумочку, вытащила пачку таблеток. 
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 385,
    text:
      `
        За этим занятием её застал Дилан. 
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 386,
    text:
      `
        — Ты как? 
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 387,
    text:
      `
        Чейз прошёл в кабинет, прихватив со стола закрытую бутылку воды. Протянул девушке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 388,
    text:
      `
        Маргарита качнула головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 389,
    text:
      `
        — У меня есть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 390,
    text:
      `
        Вытащив из пакета минеральную воду, она запила обезболивающие таблетки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 391,
    text:
      `
        Пожав плечами, Дилан открутил крышку и сделал глоток, не спуская с коллеги глаз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 392,
    text:
      `
        — Что собираешься делать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 393,
    text:
      `
        Они опустились в кресло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 394,
    text:
      `
        Мужчина толкнул листы, и бумага проскользила по гладкой столешнице прямиком к Маргарите. Девушка тут же взяла их в руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 395,
    text:
      `
        — Думаю просмотреть запись с допроса Джонатана и ехать в зал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 396,
    text:
      `
        Дилан кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 397,
    text:
      `
        — Я тоже планировал. Поедем вместе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 398,
    text:
      `
        Погрузившись в текст, Маргарита отрешённо кивнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 399,
    text:
      `
        Закончив чтение, подняла на напарника бесконечно уставший взгляд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 400,
    text:
      `
        — Тут ничего нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 401,
    text:
      `
        — Там текста на три листа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 402,
    text:
      `
        — Я вижу.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 403,
    text:
      `
        Девушка медленно процедила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 404,
    text:
      `
        — Но это пустышка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 405,
    text:
      `
        — Ни слова о том, что могло бы помочь. Ни имён, ни адресов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 406,
    text:
      `
        Она резко вскочила на ноги. Рванула к окну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 407,
    text:
      `
        — Дилан, он издевается над нами! 
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 408,
    text:
      `
        Напарник медленно двинулся следом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 409,
    text:
      `
        — Марго, он расписал все свои передвижения, и мы сможем подтвердить или опровергнуть каждое слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 410,
    text:
      `
        — Что касается конкурентов… 
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 411,
    text:
      `
        Чейз запнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 412,
    text:
      `
        — Джон…натан наотрез отказался предоставлять имена и контакты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 413,
    text:
      `
        — Сказал, это конфиденциальная информация, утечка которой может стать угрозой его репутации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 414,
    text:
      `
        Маргарита не выдержала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 415,
    text:
      `
        — Дилан, твою мать! Какая нахрен репутация?!
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 416,
    text:
      `
        Она повернулась к мужчине, метая молнии одним своим взглядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 417,
    text:
      `
        — Его отцу перерезали глотку! Убили и закопали в парке, как безродного пса!
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 418,
    text:
      `
        — Да любой на его месте сделал бы всё, чтобы упечь убийцу близкого человека за решётку! А этот… 
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 419,
    text:
      `
        — Он будто намеренно тормозит ход следствия!
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 420,
    text:
      `
        Дилан кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 421,
    text:
      `
        — Согласен, это чертовски странно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 422,
    text:
      `
        Маргарита устало выдохнула, сдув упавшие на глаза волосы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 423,
    text:
      `
        Покачала головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 424,
    text:
      `
        — Завтра по плану выезд в корпорацию Томаса. Опросим сотрудников, сверим алиби Джонатана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 425,
    text:
      `
        — Его отпечатки пока нигде не фигурируют. 
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 426,
    text:
      `
        — Но нам позарез нужно найти орудие убийства, чтобы окончательно вычеркнуть сынишку из списка подозреваемых. 
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 427,
    text:
      `
        Девушка согласно кивнула, постепенно успокаиваясь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 428,
    text:
      `
        — Ты прав, действуем по инструкции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 429,
    text:
      `
        — Завтра приеду пораньше, чтобы проанализировать записи с допроса на свежую голову. 
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 430,
    text:
      `
        — Я чертовски устала и хочу побить грушу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 431,
    text:
      `
        — Ты едешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 432,
    text:
      `
        Дилан незаметно выдохнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 433,
    text:
      `
        <i>«Я всё уладил. Она не должна заметить сбой камер. Боже, помоги мне…»
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 434,
    text:
      `
        Чейз улыбнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 435,
    text:
      `
        — Поехали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 803
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Smile.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 803,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 436 },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 436,
    text:
      `
        Приехав в спортзал, Дилан с Маргаритой разошлись по раздевалкам.
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    message: 'В дальнейшем Маргарита будет надевать на тренировки эту одежду. ',
    music: require('../../../../Sounds/MM/Daily.mp3'),
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 437,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.MM, personId: 'Margo_Sport', goTo: 438 },
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 438,
    text:
      `
        Закончив с одеждой, девушка собрала волосы и вышла в зал.
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 439,
    text:
      `
        <i>«Ни-ко-го. Как обычно. Вот он — вечер пятницы».
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesVariationImage(EStoriesEn.MM, 'Margo_Sport', 'Cringe') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 440,
    text:
      `
        Расстелив коврик в углу, девушка принялась за разминку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 441,
    text:
      `
        — Симпатичные шортики. 
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Flirt.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 443,
    text:
      `
        Дилан, стремительно приближаясь к напарнице, подмигнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 444,
    text:
      `
        Маргарита насмешливо хмыкнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 445,
    text:
      `
        — У тебя тоже. 
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesVariationImage(EStoriesEn.MM, 'Margo_Sport', 'Cringe') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 446,
    text:
      `
        За разговорами разминка пролетела незаметно.
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 447,
    text:
      `
        Исподтишка поглядывая на фигуру девушки, Дилан старался откровенно не пялиться, но взгляд его то и дело возвращался к женским изгибам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 448,
    text:
      `
        Они ненадолго разошлись по тренажёрам, и пока Чейз нагружал бицепс, Маргарита принялась за выпады. 
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 449,
    text:
      `
        Она, как и большинство девушек, чаще отдавала предпочтение «дню ног».
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 450,
    text:
      `
        Закончив с последним подходом, Дилан поймал взгляд Маргариты и кивнул на висящую в другой части зала боксёрскую грушу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 451,
    text:
      `
        Прокричал, чтобы она услышала с расстояния и сквозь льющуюся с колонок музыку:
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 452,
    text:
      `
        — Кажется, кто-то хотел почесать кулачки?
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Flirt.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 453,
    text:
      `
        Сложив гантели на стойку, Маргарита ухмыльнулась. Кивнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 454,
    text:
      `
        — Ну пошли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesVariationImage(EStoriesEn.MM, 'Margo_Sport', 'Cringe') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 455,
    text:
      `
        Надев перчатки, девушка встала в стойку и сделала выпад, целясь в импровизированного соперника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 456,
    text:
      `
        Груша едва качнулась, и Дилан, не выдержав, рассмеялся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 457,
    text:
      `
        — Машина, успокойся. Ты сейчас её уничтожишь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 458,
    text:
      `
        Маргарита раздосадованно поморщилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 459,
    text:
      `
        — Чёрт, что-то я совсем охилела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesVariationImage(EStoriesEn.MM, 'Margo_Sport', 'Cringe') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 460,
    text:
      `
        Успокаивая смех, мужчина отметил:
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 461,
    text:
      `
        — У тебя стойка неправильная. Ты бьёшь рукой, а надо всем корпусом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 462,
    text:
      `
        — Хочешь, помогу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Flirt.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 463,
    text:
      `
        Маргарита задумчиво прикусила губу, уставившись на напарника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 464,
    text:
      `
        <i>«Может, действительно стоит вспомнить? Всё-таки это важно в первую очередь для работы».
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Sport') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 465,
    text:
      `
        Девушка знала азы самообороны, но ей ещё ни разу не приходилось с кем-либо драться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 466,
    text:
      `
        На заданиях её неизменно сопровождали мужчины, и скручивали преступников именно они. 
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 467,
    text:
      `
        Но ситуация, в которую поневоле угодила Маргарита, определённо требовала того, чтобы вспомнить, как обращаться с собственным телом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 468,
    text:
      `
        — Пожалуй, ты прав. Лучше…
      `,
    buttons: [
      {
        text: 'помоги мне',
        goTo: 469
      },
      {
        text: 'просто покажи',
        goTo: 541
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Sport') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 469,
    text:
      `
        Дилан тут же приблизился, останавливаясь позади. 
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    music: require('../../../../Sounds/MM/Romantic.mp3'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 470,
    text:
      `
        Помедлив, он поднял руки и распределил пальцы на женских боках.
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 471,
    text:
      `
        Оба замерли, ощущая, как это касание вызывает определенный отклик в телах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 472,
    text:
      `
        Прочистив горло, Дилан слегка надавил на корпус Маргариты и скомандовал:
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 473,
    text:
      `
        — Согни немного ноги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 474,
    text:
      `
        Девушка подчинилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 475,
    text:
      `
        — Перенеси вес на ведущую ногу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 476
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 476,
    text:
      `
        Отпустив талию, Дилан переместил руки на локти Марго и слегка приподнял их, фиксируя кулаки на уровне лица. 
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 477,
    text:
      `
        Мужчина неосознанно прижался чуть ближе, и его дыхание коснулось шеи, посылая по коже предательские мурашки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 478,
    text:
      `
        В голос Чейза пробралась мягкая хрипотца.
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 479,
    text:
      `
        — Удар должен быть быстрым. Делаешь шаг и бьёшь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 480
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 480,
    text:
      `
        Его пальцы пробежались по предплечьям прежде, чем Дилан нехотя опустил руки, делая шаг назад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 481,
    text:
      `
        — Попробуй. 
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 482,
    text:
      `
        Это касание сбило с толку, и когда Чейз отстранился, Маргарите вдруг отчаянно захотелось податься назад, чтобы вернуть себе тепло чужого тела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 483,
    text:
      `
        <i>«Что за чертовщина?»
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    message: 'Вы начинаете сближаться. ',
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesVariationImage(EStoriesEn.MM, 'Margo_Sport', 'Horny') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Dylan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 484,
    text:
      `
        Опьянённая близостью, девушка сделала резкий выпад, целясь в грушу, и запуталась в собственных ногах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 485,
    text:
      `
        От падения уберегли всё те же руки, которые ловко подхватили за талию, не позволив расшибить лоб о пол. 
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 486,
    text:
      `
        Дилан развернул Маргариту к себе с целью поймать её взгляд и убедиться, что та в порядке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 487,
    text:
      `
        Девушка схватила мужчину за плечи, глаза её широко распахнулись.
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 488,
    text:
      `
        Воздух в пустом тренажёрном зале словно бы схлопнулся, потяжелел.
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 489,
    text:
      `
        Маргарита ощутила, как дыхание участилось, а пульс подскочил, разгоняя кровь.
      `,
    buttons: [
      {
        text: '',
        goTo: 490
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 490,
    text:
      `
        <i>«Это же Дилан! Почему я так странно реагирую на него?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesVariationImage(EStoriesEn.MM, 'Margo_Sport', 'Horny') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 491,
    text:
      `
        <i>«Так и знал, что это плохая идея».
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 492,
    text:
      `
        Испытывая неподконтрольное влечение к напарнице весь последний год совместной работы, Чейз всегда старался держать дистанцию.
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 493,
    text:
      `
        И с каждым разом это давалось ему всё труднее.
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 494,
    text:
      `
        Предлагая помощь, мужчина заведомо знал, что придётся касаться столь желанного тела и не смог отказать себе в этом удовольствии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 495
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 495,
    text:
      `
        В глубине души он надеялся, что Маргарита откажется, и тогда не придётся винить себя в импульсивности, но…
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 496,
    text:
      `
        Она согласилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 497
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 497,
    text:
      `
        И, продолжая держаться за крепкие плечи, не спешила отстраняться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 498,
    text:
      `
        <i>«Мне следует…»
      `,
    buttons: [
      {
        text: 'поцеловать её',
        goTo: 499
      },
      {
        text: 'отстраниться',
        goTo: 533
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 499,
    text:
      `
        Ведомый чувствами, Дилан резко подался вперёд, уничтожая то жалкое расстояние, что всё это время мешало им ступить за черту коллег. 
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    stats: [{ story: EStoriesEn.MM, value: +1, category: 'Choice', id: 'KissHer' }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 500,
    text:
      `
        И она не оттолкнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 501,
    text:
      `
        Прикрыв глаза, Маргарита ответила на поцелуй, чувствуя, как чужие пальцы сжимаются на её талии, с силой впиваясь в кожу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 502,
    text:
      `
        Девушка забросила запястья за шею мужчины, захлопывая капкан. 
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 503,
    text:
      `
        Его язык скользнул внутрь, и Марго сдавленно простонала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 504,
    text:
      `
        Звук её голоса — такого живого, чувственного, сыграл на нервах Дилана подобно свистку рефери.
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 505,
    text:
      `
        Маргарита позволила себе провалиться в эту порочную пропасть, где в самом низу заточенными кинжалами поджидало бесчисленное количество ошибок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 506,
    text:
      `
        Она была согласна напороться на каждую. 
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 507,
    text:
      `
        Ведь именно он — Дилан Чейз, её персональный щит и бессменный напарник, в эту секунду вынуждал кровь кипеть и нестись по венам, пробуждая что-то в груди. 
      `,
    buttons: [
      {
        text: '',
        goTo: 508
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 508,
    text:
      `
        Давно позабытые чувства. Сладостное томление. Головокружительное влечение.  
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 509,
    text:
      `
        Маргарита всё чаще ловила на себе взгляды коллеги.
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 510,
    text:
      `
        Не пошлые и голодные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 511,
    text:
      `
        А задумчивые и болезненные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 512,
    text:
      `
        И эти взгляды привели их туда, где они оказались по итогу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 513,
    text:
      `
        В ловушке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 514,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/MM/CutScenes/Margo_Dylan_Kiss.mp4'), goTo: 515 },
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 515,
    text:
      `
        Отстранившись на миг, Чейз поймал её взгляд. И едва не утонул в нём. 
      `,
    buttons: [
      {
        text: '',
        goTo: 516
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 516,
    text:
      `
        На дне потемневших радужек плескался огонь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 517
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 517,
    text:
      `
        Подтолкнув к стене, мужчина вновь обрушил на чужие губы месяцами копившуюся страсть.
      `,
    buttons: [
      {
        text: '',
        goTo: 518
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 518,
    text:
      `
        Марго вплела свои пальцы в мужские локоны, слегка оттягивая на затылке, и отвечала на поцелуй с тем же рвением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 519
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 519,
    text:
      `
        Когда воздуха перестало хватать, они одновременно разорвали поцелуй, прижимаясь друг к другу лбами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    message: 'Между вами полыхает нешуточное пламя. ',
    parallax: 'left',
    achievement: { story: EStoriesEn.MM, name: 'NoShame' },
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 520,
    text:
      `
        Какое-то время молчали, восстанавливая дыхание.
      `,
    buttons: [
      {
        text: '',
        goTo: 521
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 521,
    text:
      `
        Дилан первым прервал тишину, тихо усмехнувшись:
      `,
    buttons: [
      {
        text: '',
        goTo: 522
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 522,
    text:
      `
        — Ну, как-то так…
      `,
    buttons: [
      {
        text: '',
        goTo: 523
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 523,
    text:
      `
        Марго улыбнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 524
      }],
    music: require('../../../../Sounds/MM/Daily.mp3'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 524,
    text:
      `
        — Паршивый из тебя учитель. 
      `,
    buttons: [
      {
        text: '',
        goTo: 525
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesVariationImage(EStoriesEn.MM, 'Margo_Sport', 'Horny') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 525,
    text:
      `
        Дилан насмешливо вскинул бровь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 526
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 526,
    text:
      `
        Девушка пояснила:
      `,
    buttons: [
      {
        text: '',
        goTo: 527
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 527,
    text:
      `
        — Бить грушу я так и не научилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 528
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesVariationImage(EStoriesEn.MM, 'Margo_Sport', 'Smile') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 528,
    text:
      `
        Они рассмеялись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 529
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 529,
    text:
      `
        — Не страшно. Сейчас исправим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 530
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Flirt.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 530,
    text:
      `
        Поправив волосы и одежду, детективы наконец приступили к обучению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 531
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 531,
    text:
      `
        Дилан скорректировал стойку девушки и даже напомнил парочку приёмов.
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 532,
    text:
      `
        Как заламывать руки со спины, вырубать с локтя и где сдавить шею, чтобы соперник отключился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 533
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 533,
    text:
      `
        Неловко прочистив горло, Дилан нехотя отстранился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 534
      }],
    music: require('../../../../Sounds/MM/Daily.mp3'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 534,
    text:
      `
        <i>«Мне не следует всё усложнять. Итак непросто».
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 535,
    text:
      `
        — Ты в порядке?
      `,
    buttons: [
      {
        text: '',
        goTo: 536
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Sport.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 536,
    text:
      `
        — Да.
      `,
    buttons: [
      {
        text: '',
        goTo: 537
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Sport') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 537,
    text:
      `
        Желая избавиться от неуместных мыслей, Марго качнула головой и, развернувшись к груше, попробовала ударить снова. 
      `,
    buttons: [
      {
        text: '',
        goTo: 538
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 538,
    text:
      `
        Вышло не сразу, но спустя несколько попыток начало получаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 539
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 539,
    text:
      `
        Дилан скорректировал стойку девушки и даже напомнил парочку приёмов.
      `,
    buttons: [
      {
        text: '',
        goTo: 540
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 540,
    text:
      `
        Как заламывать руки со спины, вырубать с локтя и где сдавить шею, чтобы соперник отключился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 541,
    text:
      `
        Дилан с готовностью кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 542
      }],
    music: require('../../../../Sounds/MM/Daily.mp3'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 542,
    text:
      `
        Освободив место, Маргарита отошла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 543
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 543,
    text:
      `
        Чейз продемонстрировал стойку, комментируя каждое своё действие, и Маргарита принялась пробовать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 544
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 544,
    text:
      `
        Вышло не сразу, но спустя несколько попыток начало получаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 545
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 545,
    text:
      `
        Дилан на словах скорректировал стойку девушки и даже напомнил парочку приёмов.
      `,
    buttons: [
      {
        text: '',
        goTo: 546
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 546,
    text:
      `
        Как заламывать руки со спины, вырубать с локтя и где сдавить шею, чтобы соперник отключился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 547,
    text:
      `
        Закончив тренировку, они покинули спортзал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 548
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Gym.jpg')
  },

  {
    id: 548,
    text:
      `
        Приехав домой, Маргарита сдвинула до упора засов и на всякий случай заперла дверь на ключ, оставляя его в замочной скважине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 549
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    ambient: require('../../../../Sounds/MM/Rain.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 549,
    text:
      `
        Разувшись и повесив верхнюю одежду в шкаф, направилась в спальню — переодеваться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    message: 'Вам предстоит выбрать дизайн спальни Марго.',
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 550,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.MM, personId: 'Margo_Room', goTo: 551 },
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 551,
    text:
      `
        Приняв душ и перекусив, Маргарита устало свалилась в кровать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 552
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 552,
    text:
      `
        Достав из тумбочки записную книжку, пролистала пару страниц, изучая своё расписание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 553
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 553,
    text:
      `
        Сделав несколько новых записей, она убрала блокнот. 
      `,
    buttons: [
      {
        text: '',
        goTo: 554
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 554,
    text:
      `
        Кутаясь в одеяло, детектив ворочалась в кровати в попытках найти позу поудобнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 555,
    text:
      `
        Мысли никак не хотели покидать воспалённый разум. 
      `,
    buttons: [
      {
        text: '',
        goTo: 556
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 556,
    text:
      `
        <i>«Если Джонатан продолжит играть в молчанку, придётся действовать радикально».
      `,
    buttons: [
      {
        text: '',
        goTo: 557
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 557,
    text:
      `
        <i>«Завтра нужно будет переговорить с Артуром, чтобы как можно быстрее организовали слежку».
      `,
    buttons: [
      {
        text: '',
        goTo: 558
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 558,
    text:
      `
        Девушка раздражённо фыркнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 559
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 559,
    text:
      `
        <i>«Вот уж не думала, что буду так рваться на работу в субботу».
      `,
    buttons: [
      {
        text: '',
        goTo: 560
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 560,
    text:
      `
        Маргарита попросила руководство позволить им с Диланом подъехать в офис в выходной.
      `,
    buttons: [
      {
        text: '',
        goTo: 561
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 561,
    text:
      `
        Артур не препятствовал. Наоборот, согласился составить детективам компанию и предоставить все ресурсы для расследования. 
      `,
    buttons: [
      {
        text: '',
        goTo: 562
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 562,
    text:
      `
        <i>«Впрочем, ничего удивительного».
      `,
    buttons: [
      {
        text: '',
        goTo: 805
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 805,
    text:
      `
        <i>«Томас Браун не последний человек в Лондоне».
      `,
    buttons: [
      {
        text: '',
        goTo: 563
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 563,
    text:
      `
        <i>«Если мы не будем шевелиться, следствие передадут другим».
      `,
    buttons: [
      {
        text: '',
        goTo: 564
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 564,
    text:
      `
        <i>«И тогда Артур лишится всех лавров от закрытия громкого дела. А меня отстранят…»
      `,
    buttons: [
      {
        text: '',
        goTo: 565
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Eyes.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 565,
    text:
      `
        Обняв подушку, девушка с грустью уставилась в стену. 
      `,
    buttons: [
      {
        text: '',
        goTo: 566
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 566,
    text:
      `
        Тусклый свет ночника мягко подсвечивал комнату, создавая уют. За окном шумела гроза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 567
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 567,
    text:
      `
        <i>«Как ещё город не смыло в Темзу». 
      `,
    buttons: [
      {
        text: '',
        goTo: 568
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 568,
    text:
      `
        Перебравшись в Лондон пять лет назад, Маргарита долго привыкала к его капризной погоде. 
      `,
    buttons: [
      {
        text: '',
        goTo: 569
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 569,
    text:
      `
        Первый год дался особенно тяжело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 570
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 570,
    text:
      `
        Не привыкшая к извечной мороси и суете мегаполиса, девушка часто летала домой в Европу, чтобы отдохнуть от бесконечных дождей и натужной вежливости Королевства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 571
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 571,
    text:
      `
        И только спустя безумно долгие двенадцать месяцев поняла, что бегать нет смысла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 572
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 572,
    text:
      `
        Ты либо принимаешь Англию со всеми недостатками и капризами, либо покидаешь её. 
      `,
    buttons: [
      {
        text: '',
        goTo: 573
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 573,
    text:
      `
        Но, как и всегда, Маргарита отдала предпочтение карьере, нежели собственному комфорту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 574
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 574,
    text:
      `
        И вот, спустя долгие годы, ей удалось не просто привыкнуть, но и всем сердцем полюбить это место. 
      `,
    buttons: [
      {
        text: '',
        goTo: 575
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 575,
    text:
      `
        В особенности район, в котором со временем купила квартиру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 576
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 576,
    text:
      `
        Илинг, буйствующий зеленью, окружённый озёрами, со всей своей богатой историей, что таилась в каждом кирпичике местных зданий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 577
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 577,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'KissHer' }) >= 1
        },
        goTo: 578
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'KissHer' }) <= 0
        },
        goTo: 593
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 578,
    text:
      `
        Внезапно в голову ураганом ворвался Дилан. 
      `,
    buttons: [
      {
        text: '',
        goTo: 579
      }],
    music: require('../../../../Sounds/MM/Romantic.mp3'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 579,
    text:
      `
        Их поцелуй…
      `,
    buttons: [
      {
        text: '',
        goTo: 580
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 580,
    text:
      `
        То, как уверенно и горячо его руки сжимались на талии, пока он своими губами выбивал из лёгких девушки воздух. 
      `,
    buttons: [
      {
        text: '',
        goTo: 581
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 581,
    text:
      `
        <i>«Ну и дела…»
      `,
    buttons: [
      {
        text: '',
        goTo: 582
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 582,
    text:
      `
        <i>«И как мне теперь стоит вести себя с ним?»
      `,
    buttons: [
      {
        text: '',
        goTo: 583
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Shame.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 583,
    text:
      `
        <i>«Делать вид, что ничего не было — несусветная глупость. Нам же не по шестнадцать».
      `,
    buttons: [
      {
        text: '',
        goTo: 584
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Eyes.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 584,
    text:
      `
        <i>«Но иного варианта я просто не вижу».
      `,
    buttons: [
      {
        text: '',
        goTo: 585
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 585,
    text:
      `
        <i>«Чёрт, и наворотили же мы с ним дел…»
      `,
    buttons: [
      {
        text: '',
        goTo: 586
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Shame.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 586,
    text:
      `
        <i>«Будто без этого мало было головняка». 
      `,
    buttons: [
      {
        text: '',
        goTo: 587
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Eyes.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 587,
    text:
      `
        Маргарита со стоном перевернулась на живот, вжимаясь лицом в подушку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 588
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 588,
    text:
      `
        Фантазия упрямо подбрасывала все возможные варианты дальнейшего развития событий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 589
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 589,
    text:
      `
        Щёки покрылись румянцем, когда она вспомнила свои ощущения во время поцелуя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 590
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 590,
    text:
      `
        Как предательски подогнулись ноги, а внизу живота затянуло в ожидании продолжения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 591
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 591,
    text:
      `
        <i>«Продолжения чего?! Угомонись, дурочка!»
      `,
    buttons: [
      {
        text: '',
        goTo: 592
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Shame.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 592,
    text:
      `
        Маргарита легла на спину, устремив взгляд в потолок.
      `,
    buttons: [
      {
        text: '',
        goTo: 593
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 593,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'DidItBrave' }) >= 1
        },
        goTo: 594
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'DidItBrave' }) < 1
        },
        goTo: 610
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 594,
    text:
      `
        Размышления привели детектива к человеку, который спровоцировал всплеск необъяснимых эмоций. 
      `,
    buttons: [
      {
        text: '',
        goTo: 595
      }],
    music: require('../../../../Sounds/MM/Jonathan.mp3'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 595,
    text:
      `
        Раздражение, даже злость. Подозрение. Сомнения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 596
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 596,
    text:
      `
        Интерес. 
      `,
    buttons: [
      {
        text: '',
        goTo: 597
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 597,
    text:
      `
        Вспомнилось, как властно и грубо Джонатан хватал её за запястье, снося тем самым стену, вымощенную из профессионализма и невозмутимости.
      `,
    buttons: [
      {
        text: '',
        goTo: 598
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 598,
    text:
      `
        Как обозвал сукой, смакуя каждую букву, а хищный взгляд, вопреки грязным словам, выражал любопытство и необъяснимое противоречие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 599
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 599,
    text:
      `
        Его низкий, уверенный голос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 600
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 600,
    text:
      `
        Браун смотрел на детектива так, словно бы раздевал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 601
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 601,
    text:
      `
        Снимал не просто одежду — кожу, обнажая по самые кости.
      `,
    buttons: [
      {
        text: '',
        goTo: 602
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 602,
    text:
      `
        Маргарита прекрасно знала таких людей. Даже общалась с подобными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 603
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 603,
    text:
      `
        Окажись Джонатан за решёткой, он не покажет страха. 
      `,
    buttons: [
      {
        text: '',
        goTo: 604
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 604,
    text:
      `
        Сидя на нарах, будет выглядеть словно само правосудие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 605
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 605,
    text:
      `
        Но никак не преступление. 
      `,
    buttons: [
      {
        text: '',
        goTo: 606
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 606,
    text:
      `
        <i>«Какой же Вы в самом деле, мистер Браун?»
      `,
    buttons: [
      {
        text: '',
        goTo: 607
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 607,
    text:
      `
        <i>«Что чувствуете после смерти отца?»
      `,
    buttons: [
      {
        text: '',
        goTo: 608
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Pajamas_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 608,
    text:
      `
        Маргарите отчего-то не верилось в это демонстративное равнодушие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 609
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 609,
    text:
      `
        Не хотелось верить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 610
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 610,
    text:
      `
        Сон настиг девушку незаметно.
      `,
    buttons: [
      {
        text: '',
        goTo: 611
      }],
    imageBack: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Room') }
  },

  {
    id: 611,
    text:
      `
        Сидя в салоне автомобиля, Маргарита вертела в руках телефон, набираясь решимости совершить звонок.
      `,
    buttons: [
      {
        text: '',
        goTo: 612
      }],
    music: require('../../../../Sounds/MM/Mysterious.mp3'),
    ambient: require('../../../../Sounds/MM/Engine.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 612,
    text:
      `
        Дисплей на панели показывал время: девять утра.
      `,
    buttons: [
      {
        text: '',
        goTo: 613
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 613,
    text:
      `
        <i>«Давай, соберись».
      `,
    buttons: [
      {
        text: '',
        goTo: 614
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 614,
    text:
      `
        Голова снова раскалывалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 615
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 615,
    text:
      `
        Отложив телефон, детектив взяла с подстаканника бутылку воды. Вытащила из бардачка таблетки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 616
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 616,
    text:
      `
        <i>«Без этих пилюлей скоро совсем разучусь существовать. Голова как будто лопнет сейчас».
      `,
    buttons: [
      {
        text: '',
        goTo: 617
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 617,
    text:
      `
        Запив лекарство, девушка слегка поморщилась от очередного приступа мигрени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 618
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 618,
    text:
      `
        Несмотря на спокойный сон без кошмаров, проснулась она совершенно разбитой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 619
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 619,
    text:
      `
        Нервное напряжение сказывалось на самочувствии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 620
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 620,
    text:
      `
        Разум одолевали сомнения. Неослабевающая ни на миг тревога. 
      `,
    buttons: [
      {
        text: '',
        goTo: 621
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 621,
    text:
      `
        Порой мысли оказывались настолько противоречивыми, что Маргарите хотелось упиться снотворным и провалиться в небытие на неделю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 622
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 622,
    text:
      `
        Чтобы, проснувшись, узнать: всё кончено. 
      `,
    buttons: [
      {
        text: '',
        goTo: 623
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 623,
    text:
      `
        Преступник найден. 
      `,
    buttons: [
      {
        text: '',
        goTo: 624
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 624,
    text:
      `
        Дело закрыто. 
      `,
    buttons: [
      {
        text: '',
        goTo: 625
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 625,
    text:
      `
        Увы…
      `,
    buttons: [
      {
        text: '',
        goTo: 626
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 626,
    text:
      `
        <i>«Отставить, детектив. Пора работать».
      `,
    buttons: [
      {
        text: '',
        goTo: 627
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 627,
    text:
      `
        Вновь схватившись за телефон, Маргарита набрала номер. Раздались гудки.
      `,
    buttons: [
      {
        text: '',
        goTo: 628
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 628,
    text:
      `
        — Слушаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 629
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 629,
    text:
      `
        От уверенного, резкого голоса девушка вздрогнула: не ожидала, что трубку поднимут так скоро. 
      `,
    buttons: [
      {
        text: '',
        goTo: 630
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 630,
    text:
      `
        — Доброе утро, Мистер Браун. Вас беспокоит агент из детективного бюро Илинга, Маргарита. 
      `,
    buttons: [
      {
        text: '',
        goTo: 631
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 631,
    text:
      `
        На том конце провода раздался какой-то шорох и следом — ответ: 
      `,
    buttons: [
      {
        text: '',
        goTo: 632
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 632,
    text:
      `
        — Маргарита! И Вам доброго утра, мисс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 633
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 633,
    text:
      `
        — Что, уже соскучились?
      `,
    buttons: [
      {
        text: '',
        goTo: 634
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 634,
    text:
      `
        Девушка закатила глаза, сохраняя формальность в интонации: 
      `,
    buttons: [
      {
        text: '',
        goTo: 635
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 635,
    text:
      `
        — Ну разумеется…
      `,
    buttons: [
      {
        text: 'только о Вас и думала',
        goTo: 636
      },
      {
        text: 'у меня же нет других дел',
        goTo: 703
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 636,
    text:
      `
        Из динамика зазвучал негромкий, довольный смех.
      `,
    buttons: [
      {
        text: '',
        goTo: 637
      }],
    music: require('../../../../Sounds/MM/Jonathan.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 637,
    text:
      `
        Детектив удивлённо притихла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 638
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 638,
    text:
      `
        — Вот как. 
      `,
    buttons: [
      {
        text: '',
        goTo: 639
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 639,
    text:
      `
        — Что ж, признаюсь, я тоже думал о Вас. 
      `,
    buttons: [
      {
        text: '',
        goTo: 640
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 640,
    text:
      `
        — Едва ли не весь остаток минувшего дня.
      `,
    buttons: [
      {
        text: '',
        goTo: 641
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 641,
    text:
      `
        Джонатан будто специально замолчал, позволив девушке самой додумать, <i>в каком</i> ключе вспоминал её: как испортившего настроение противного детективе, или же…? 
      `,
    buttons: [
      {
        text: '',
        goTo: 642
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 642,
    text:
      `
        — Хм… 
      `,
    buttons: [
      {
        text: '',
        goTo: 643
      }],
    message: 'Или же…?',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Jonathan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 643,
    text:
      `
        Маргарита зарделась, но виду не подала: 
      `,
    buttons: [
      {
        text: '',
        goTo: 644
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 644,
    text:
      `
        — Надеюсь, Вы думали, как сожалеете о том, что указали в своих показаниях крайне скудную информацию, и жаждали это исправить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 645
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 645,
    text:
      `
        — Надейтесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 646
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 646,
    text:
      `
        Маргарита беззвучно усмехнулась. Она начинала привыкать к его колкостям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 647
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 647,
    text:
      `
        — Но если говорить откровенно…
      `,
    buttons: [
      {
        text: '',
        goTo: 648
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 648,
    text:
      `
        — А вы умеете? 
      `,
    buttons: [
      {
        text: '',
        goTo: 649
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 649,
    text:
      `
        Джонатан хмыкнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 650
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 650,
    text:
      `
        — Я много чего умею.
      `,
    buttons: [
      {
        text: '',
        goTo: 651
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 651,
    text:
      `
        — Не сомневаюсь. Но меня волнует именно это. 
      `,
    buttons: [
      {
        text: '',
        goTo: 652
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 652,
    text:
      `
        — Имена, мистер Браун. 
      `,
    buttons: [
      {
        text: '',
        goTo: 653
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 653,
    text:
      `
        — Ничем не могу помочь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 654
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 654,
    text:
      `
        Мужчина ответил по обыкновению — не скрывая насмешки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 655
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 655,
    text:
      `
        Маргарита решила попробовать зайти с другой стороны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 656
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 656,
    text:
      `
        Она уже поняла, что угрозами и просьбами от мужчины ничего не добиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 657
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 657,
    text:
      `
        Остаётся использовать тяжёлую артиллерию — эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 658
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 658,
    text:
      `
        — Мне бы хотелось встретиться с Вами ещё раз. Не в участке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 659
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 659,
    text:
      `
        — Маргари-ита… 
      `,
    buttons: [
      {
        text: '',
        goTo: 660
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 660,
    text:
      `
        — Держите себя в руках, мистер Браун. Я всего-лишь хочу поступить по-человечески. Потому и звоню.
      `,
    buttons: [
      {
        text: '',
        goTo: 661
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 661,
    text:
      `
        — Позвольте мне присутствовать на похоронах Вашего отца…
      `,
    buttons: [
      {
        text: '',
        goTo: 662
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 662,
    text:
      `
        С последней фразой на Маргариту обрушилась тотальная тишина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 663
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 663,
    text:
      `
        Девушка даже отняла телефон от уха, заподозрив, что звонок просто-напросто оборвали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 664
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 664,
    text:
      `
        Но нет…
      `,
    buttons: [
      {
        text: '',
        goTo: 665
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 665,
    text:
      `
        На дисплее продолжал высвечиваться незнакомый номер с длительностью звонка, секунды которого всё увеличивались, а голоса собеседник так и не подал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 666
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 666,
    text:
      `
        — Кхм… мистер Браун, Вы меня слышите?
      `,
    buttons: [
      {
        text: '',
        goTo: 667
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 667,
    text:
      `
        До детектива донёсся задумчивый, подозрительно тихий голос:
      `,
    buttons: [
      {
        text: '',
        goTo: 668
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 668,
    text:
      `
        — Мисс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 669
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 669,
    text:
      `
        И снова молчание… 
      `,
    buttons: [
      {
        text: '',
        goTo: 670
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 670,
    text:
      `
        Детектив уже подумала сбросить трубку, как Джонатан снова заговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 671
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 671,
    text:
      `
        — А знаете… я, пожалуй, позволю. Это ведь и в моих интересах тоже, верно?
      `,
    buttons: [
      {
        text: '',
        goTo: 672
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 672,
    text:
      `
        Вопрос прозвучал риторически, но Маргарита всё-равно поспешила ответить:
      `,
    buttons: [
      {
        text: '',
        goTo: 673
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 673,
    text:
      `
        — Разумеется, сэр. 
      `,
    buttons: [
      {
        text: '',
        goTo: 674
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 674,
    text:
      `
        — Даю слово: я сделаю всё от меня зависящее, чтобы убийца понёс заслуженное наказание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 675
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 675,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'Reputation' }) >= 2
        },
        goTo: 676
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'Reputation' }) <= 1
        },
        goTo: 692
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 676,
    text:
      `
        — О, я не сомневаюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 677
      }],
    message: 'Благодаря высокой репутации Джонатан решил открыться Вам. ',
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 677,
    text:
      `
        Со следующими словами насмешка покинула голос мужчины, осталась лишь тоскливая, притянутая за уши пустота: 
      `,
    buttons: [
      {
        text: '',
        goTo: 678
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 678,
    text:
      `
        — Едва ли это ему поможет. Отцу, в смысле…
      `,
    buttons: [
      {
        text: '',
        goTo: 679
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 679,
    text:
      `
        Маргарита опешила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 680
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 680,
    text:
      `
        <i>«Вот оно! Ну наконец-то…»
      `,
    buttons: [
      {
        text: '',
        goTo: 681
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 681,
    text:
      `
        Детективу впервые удалось нащупать в этом безукоризненно хладнокровном бизнесмене едва уловимый намёк на скорбь.
      `,
    buttons: [
      {
        text: '',
        goTo: 682
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 682,
    text:
      `
        И — она была в этом почти уверена — боль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 683
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 683,
    text:
      `
        А ещё страх. 
      `,
    buttons: [
      {
        text: '',
        goTo: 684
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 684,
    text:
      `
        Отчаяние и горечь от невозможности посмотреть убийце в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 685
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 685,
    text:
      `
        Быть может, чтобы спросить: почему? Или же проводить глазами из зала суда прямиком в изолятор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 686
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 686,
    text:
      `
        А способен ли Джонатан на убийство? 
      `,
    buttons: [
      {
        text: '',
        goTo: 687
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 687,
    text:
      `
        Во имя мести. 
      `,
    buttons: [
      {
        text: '',
        goTo: 688
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 688,
    text:
      `
        <i>«Спорно… Точно сказать пока не могу».
      `,
    buttons: [
      {
        text: '',
        goTo: 689
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 689,
    text:
      `
        <i>«Но я знаю одно».
      `,
    buttons: [
      {
        text: '',
        goTo: 690
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 690,
    text:
      `
        <i>«Сейчас тебе больно. Но ты скорее удавишься, чем признаешься в этом хотя бы себе».
      `,
    buttons: [
      {
        text: '',
        goTo: 691
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 691,
    text:
      `
        — Вы правы, на положение Вашего отца раскрытие дела, к сожалению, никак не повлияет, но оно повлияет на нас с Вами.
      `,
    buttons: [
      {
        text: '',
        goTo: 703
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 692,
    text:
      `
        — Ну разумеется. Это ведь в первую очередь личный интерес, верно?
      `,
    buttons: [
      {
        text: '',
        goTo: 693
      }],
    message: 'Джонатан не доверяет Вам. ',
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 693,
    text:
      `
        — Это моя работа. Независимо от того, фигурируют в деле мои личные вещи или нет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 694
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 694,
    text:
      `
        Джонатан вдруг усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 695
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 695,
    text:
      `
        — Я всё никак понять не могу, как Вас до сих пор не отстранили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 696
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 696,
    text:
      `
        — Вы не производите впечатление незаменимого сотрудника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 697
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 697,
    text:
      `
        — В чём секрет?
      `,
    buttons: [
      {
        text: '',
        goTo: 698
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 698,
    text:
      `
        — Умоляю, скажите, что дело не в мягкой постели начальства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 699
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 699,
    text:
      `
        Маргарита вздрогнула от отвращения. Её голос похолодел:
      `,
    buttons: [
      {
        text: '',
        goTo: 700
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 700,
    text:
      `
        — Мистер Браун, прикусите язык. И в следующий раз хорошенько подумайте прежде, чем нести подобную чушь.
      `,
    buttons: [
      {
        text: '',
        goTo: 701
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 701,
    text:
      `
        Качнув головой от досады и раздражения, девушка поспешила взять себя в руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 702
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 702,
    text:
      `
        — У нас с Вами общая цель: наказать виновного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 722
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 703,
    text:
      `
        Мужчина насмешливо хмыкнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 704
      }],
    music: require('../../../../Sounds/MM/Mysterious.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 704,
    text:
      `
        — Охотно верю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 705
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 705,
    text:
      `
        Маргарита проигнорировала колкость и поспешила перейти сразу к делу.
      `,
    buttons: [
      {
        text: '',
        goTo: 706
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 706,
    text:
      `
        — Мне бы хотелось встретиться с Вами ещё раз. Не в участке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 707
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 707,
    text:
      `
        — По какому вопросу?
      `,
    buttons: [
      {
        text: '',
        goTo: 708
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 708,
    text:
      `
        — Позвольте мне присутствовать на похоронах Вашего отца.
      `,
    buttons: [
      {
        text: '',
        goTo: 709
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Thinking.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 709,
    text:
      `
        На Маргариту обрушилась абсолютная тишина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 710
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 710,
    text:
      `
        Девушка даже отняла телефон от уха, заподозрив, что звонок просто-напросто оборвали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 711
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 711,
    text:
      `
        Но нет…
      `,
    buttons: [
      {
        text: '',
        goTo: 712
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 712,
    text:
      `
        На дисплее продолжал высвечиваться незнакомый номер с длительностью разговора, секунды которого всё увеличивались, а голоса собеседник так и не подал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 713
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 713,
    text:
      `
        — Кхм… мистер Браун, Вы меня слышите?
      `,
    buttons: [
      {
        text: '',
        goTo: 714
      }],
    speaker: 'Маргарита (задумчивость)',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 714,
    text:
      `
        До детектива донёсся задумчивый, подозрительно тихий голос:
      `,
    buttons: [
      {
        text: '',
        goTo: 715
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 715,
    text:
      `
        — Мисс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 716
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 716,
    text:
      `
        И снова молчание… 
      `,
    buttons: [
      {
        text: '',
        goTo: 717
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 717,
    text:
      `
        Маргарита уже подумывала сбросить трубку, когда Джонатан снова заговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 718
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 718,
    text:
      `
        — А знаете… я, пожалуй, позволю. Это ведь и в моих интересах тоже, верно?
      `,
    buttons: [
      {
        text: '',
        goTo: 719
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 719,
    text:
      `
        Вопрос прозвучал риторически, но Маргарита всё-равно решила ответить:
      `,
    buttons: [
      {
        text: '',
        goTo: 720
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 720,
    text:
      `
        — Разумеется, сэр. 
      `,
    buttons: [
      {
        text: '',
        goTo: 721
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 721,
    text:
      `
        — Даю слово: я сделаю всё от меня зависящее, чтобы убийца понёс заслуженное наказание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 722
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 722,
    text:
      `
        — Не хочу пугать раньше времени, но преступник, если убийство завязано на бизнесе, может нацелиться и на Вас. 
      `,
    buttons: [
      {
        text: '',
        goTo: 723
      }],
    music: require('../../../../Sounds/MM/Mysterious.mp3'),
    ambient: require('../../../../Sounds/MM/Engine.mp3'),
    speaker: 'Маргарита ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 723,
    text:
      `
        — Я оказалась вовлечена в дело против собственной воли, и это ещё одна причина, почему я хочу разделаться с ним побыстрее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 724
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 724,
    text:
      `
        — Поэтому очень прошу Вас: помогите мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 725
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 725,
    text:
      `
        Джонатан устало прикрыл глаза пальцами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 726
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 726,
    text:
      `
        — Как я могу помочь? Я всё написал ещё вчера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 727
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 727,
    text:
      `
        — Имена. Мистер Браун, от Вас мне нужны имена.
      `,
    buttons: [
      {
        text: '',
        goTo: 728
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 728,
    text:
      `
        — Всевозможные конкуренты, контрагенты, юристы, бухгалтеры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 729
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 729,
    text:
      `
        — Тайные связи… 
      `,
    buttons: [
      {
        text: '',
        goTo: 730
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 730,
    text:
      `
        — Например?
      `,
    buttons: [
      {
        text: '',
        goTo: 731
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 731,
    text:
      `
        — Соучастники. Шпионы. Любовницы…
      `,
    buttons: [
      {
        text: '',
        goTo: 732
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 732,
    text:
      `
        — Я понял, мисс.
      `,
    buttons: [
      {
        text: '',
        goTo: 733
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 733,
    text:
      `
        — Похороны послезавтра. Приезжайте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 734
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 734,
    text:
      `
        — Только у меня будет просьба. Оденьтесь… соответствующе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 735
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 735,
    text:
      `
        — Не по форме. 
      `,
    buttons: [
      {
        text: '',
        goTo: 736
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 736,
    text:
      `
        — Я передам папку уже на месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 737
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 737,
    text:
      `
        Мужчина озвучил адрес кладбища на окраине Илинга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 738
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 738,
    text:
      `
        — Благодарю за сотрудничество, мистер Браун. Вы вносите невероятный вклад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 739
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 739,
    text:
      `
        Они попрощались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 740
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 740,
    text:
      `
        Маргарита, задумчиво постучав пальцами по рулю, вздохнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 741
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 741,
    text:
      `
        <i>«С мёртвой точки сдвинулись — уже хорошо».
      `,
    buttons: [
      {
        text: '',
        goTo: 742
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Light_Car_Room.jpg')
  },

  {
    id: 742,
    text:
      `
        Джонатан, отложив телефон, поднялся с кресла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 743
      }],
    music: require('../../../../Sounds/MM/Alone.mp3'),
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 743,
    text:
      `
        Остановившись у окна, мужчина устремил взгляд на город, распростёртый за панорамой, и ослабил галстук дрожащими пальцами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 744
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 744,
    text:
      `
        Полупустая бутылка с виски и смятая фотокарточка на столе предстали символами безмолвного горя.
      `,
    buttons: [
      {
        text: '',
        goTo: 745
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 745,
    text:
      `
        <i>«Финита ля комедия, папа».
      `,
    buttons: [
      {
        text: '',
        goTo: 746
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Costume.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 746,
    text:
      `
        <i>«Наш конфликт закончился совсем не так, как я ожидал».
      `,
    buttons: [
      {
        text: '',
        goTo: 747
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Costume.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 747,
    text:
      `
        Джонатан на мгновение зажмурился, прижимая ладони к лицу, словно собирался расплакаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 748
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 748,
    text:
      `
        Но, простояв так немного, опустил руки, возвращаясь обратно к столу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 749
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 749,
    text:
      `
        Подцепив с поверхности маленькую полароидную карточку, прошептал, не спуская глаз с хмурого мужчины на снимке: 
      `,
    buttons: [
      {
        text: '',
        goTo: 750
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 750,
    text:
      `
        — Я прощаю тебя. И ты прости… 
      `,
    buttons: [
      {
        text: '',
        goTo: 751
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Costume.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 751,
    text:
      `
        Убрав фотографию во внутренний карман пиджака, Браун открутил крышку и приложился к бутылке, стремясь хотя бы на время утопить боль, рвущую душу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 752
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 752,
    text:
      `
        И злость.
      `,
    buttons: [
      {
        text: '',
        goTo: 753
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 753,
    text:
      `
        На себя самого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 754
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 754,
    text:
      `
        На обстоятельства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 755
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 755,
    text:
      `
        На весь мир. 
      `,
    buttons: [
      {
        text: '',
        goTo: 806
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Panorama_Cabinet.jpg')
  },

  {
    id: 806,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 756,
    text:
      `
        Изучая все имеющиеся материалы по делу, Маргарита пыталась составить психологический портрет преступника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 757
      }],
    message: 'Утро следующего дня. ',
    music: require('../../../../Sounds/MM/Saw.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 757,
    text:
      `
        <i>«Итак, на данный момент у нас есть две прямые улики: серьга и записка».
      `,
    buttons: [
      {
        text: '',
        goTo: 758
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 758,
    text:
      `
        <i>«Убийца действует напоказ: брошенный в парке труп известного предпринимателя, привлечение к делу определённого человека — меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 759
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 759,
    text:
      `
        <i>«Чьё внимание ты пытаешься привлечь?»
      `,
    buttons: [
      {
        text: 'Моё?',
        goTo: 760,
        func: () => {
          scenarioManager.changeSceneButtonStatus(759, 0, false)
          scenarioManager.manageDialog(759, [0, 1, 2], [3])
        }
      },
      {
        text: 'Джонатана?',
        goTo: 768,
        func: () => {
          scenarioManager.changeSceneButtonStatus(759, 1, false)
          scenarioManager.manageDialog(759, [0, 1, 2], [3])
        }
      },
      {
        text: 'Общественности?',
        goTo: 773,
        func: () => {
          scenarioManager.changeSceneButtonStatus(759, 2, false)
          scenarioManager.manageDialog(759, [0, 1, 2], [3])
        }
      },
      {
        text: 'Далее',
        goTo: 800,
        isActive: false
      }],
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(759)
    },
    message: 'Можно взять все варианты в любом порядке.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 760,
    text:
      `
        <i>«Убийца выбрал меня не просто так: он знал, что за всю свою карьеру я не провалила ни одного дела».
      `,
    buttons: [
      {
        text: '',
        goTo: 761
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 761,
    text:
      `
        <i>«Что это: стремление вовлечь в свои изощрённые игры? Месть? Желание уничтожить?»
      `,
    buttons: [
      {
        text: '',
        goTo: 762
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 762,
    text:
      `
        <i>«Каким-то образом ему удалось проникнуть в мой дом. Это можно расценивать как угрозу». 
      `,
    buttons: [
      {
        text: '',
        goTo: 763
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 763,
    text:
      `
        <i>«Может, стоит на время перебраться в другое место?»
      `,
    buttons: [
      {
        text: '',
        goTo: 764
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 764,
    text:
      `
        Девушка неуютно поёжилась, представив притаившегося на углу дома маньяка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 765
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 765,
    text:
      `
        <i>«В любом случае нужно быть начеку. Вдруг это месть бывалого или дружков тех, кого упекли за решётку с моей подачи?»
      `,
    buttons: [
      {
        text: '',
        goTo: 766
      }],
    message: 'Любопытные выводы, детектив.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Instinct' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 766,
    text:
      `
        <i>«Но почему выбор пал именно на эту жертву? Ведь можно же было остановиться на ком-то… менее значимом». 
      `,
    buttons: [
      {
        text: '',
        goTo: 767
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 767,
    text:
      `
        Девушка, глубоко задумавшись, постукивала ногтями по лежащим на столе документам. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(759, 767)
    },
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 768,
    text:
      `
        <i>«Это может быть предупреждением: защиты в лице отца больше нет». 
      `,
    buttons: [
      {
        text: '',
        goTo: 769
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 769,
    text:
      `
        <i>«Но за всё это время Брауну не поступало угроз. Если он, конечно, ничего от меня не утаивает». 
      `,
    buttons: [
      {
        text: '',
        goTo: 770
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 770,
    text:
      `
        <i>«Хорошо, что с этого дня за ним организована слежка». 
      `,
    buttons: [
      {
        text: '',
        goTo: 771
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 771,
    text:
      `
        <i>«Стоит ещё раз проанализировать их взаимоотношения с отцом и понять, как убийство Томаса может быть связано с Джонатаном». 
      `,
    buttons: [
      {
        text: '',
        goTo: 772
      }],
    message: 'Логика, детектив. ',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Analyse' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 772,
    text:
      `
        <i>«Пока мне всё это кажется до безумия странным». 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(759, 772)
    },
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 773,
    text:
      `
        <i>«Убить известного человека в попытке вызвать общественный резонанс — история стара как мир». 
      `,
    buttons: [
      {
        text: '',
        goTo: 774
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 774,
    text:
      `
        <i>«Какой-то сумасшедший мнит себя вершителем судеб, стремясь оставить след в истории». 
      `,
    buttons: [
      {
        text: '',
        goTo: 775
      }],
    message: 'Любопытный вывод. ',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 775,
    text:
      `
        <i>«Но при чём тут, в таком случае, я? И как преступнику удалось вырвать бизнесмена из лап охраны?»
      `,
    buttons: [
      {
        text: '',
        goTo: 776
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 776,
    text:
      `
        <i>«Первым делом переговорю сегодня с секьюрити Томаса, чтобы прояснить этот момент»
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(759, 776)
    },
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 800,
    text:
      `
        Поправив волосы, детектив поднялась с кресла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 777
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 777,
    text:
      `
        <i>«Если сегодня не удастся ничего выяснить, придётся прибегнуть к самому худшему из вариантов».
      `,
    buttons: [
      {
        text: '',
        goTo: 778
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 778,
    text:
      `
        Девушка вытащила из кармана пиджака телефон, набрала Майка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 779
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 779,
    text:
      `
        Дождавшись ответа, бегло поздоровалась с полицейским и сходу озвучила причину звонка: 
      `,
    buttons: [
      {
        text: '',
        goTo: 780
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 780,
    text:
      `
        — Можешь уточнить для меня, какие документы необходимы для допуска в Белмарш?
      `,
    buttons: [
      {
        text: '',
        goTo: 781
      }],
    message: 'Белмарш — мужская тюрьма для особо опасных преступников. ',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 781,
    text:
      `
        <i>«Такое ощущение, что чем больше копаюсь в этом, тем больше закапываюсь…»
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('MM', 'Глава 1', 'Часть 3', '1')
        }
      }],
    speaker: 'Маргарита ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    achievement: { story: EStoriesEn.MM, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  }
])
