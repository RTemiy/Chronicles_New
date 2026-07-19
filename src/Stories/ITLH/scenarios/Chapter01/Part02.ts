import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.ITLH, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Я открыла глаза и вновь увидела неизвестный город. Успокоив свое сердцебиение, решила взглянуть на того, кто дотронулся до плеча.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: '<i> Нью-Йорк 1885 год.',
    music: require('../../../../Media/Audio/ITLH/Music/Theme_NY.mp3'),
    ambient: require('../../../../Media/Audio/ITLH/Ambient/NY_Humble.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 1,
    text:
      `
        Смутно знакомый мужчина беспокойно смотрел на меня. По телу пробежала странная дрожь — словно память пыталась прорваться сквозь забвение.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 2,
    text:
      `
        Идеально ровная спина, гордо поднятая голова. Черный костюм подчеркивал фигуру, намекая на не самое последнее положение в обществе: вероятно, он привык к вниманию и уважению.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 3,
    text:
      `
        — Ты не заболела? Выглядишь очень бледной.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 4,
    text:
      `
        Я пыталась сообразить, что ответить, но слова путались, а в ушах стоял гул.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 5,
    text:
      `
        Но в один момент меня будто прошибло током. Именно про него я писала эссе, заданное профессором Нэйтаном. И я выпалила, не успев даже осознать сказанное:
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 6,
    text:
      `
        — Ты — Никола Тесла!
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 7,
    text:
      `
        Никола отстранился, отпуская мое плечо. Его прежняя обеспокоенность сменилась резким удивлением.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 8,
    text:
      `
        — Конечно, это я. Не понимаю… Что на тебя нашло?
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: 0, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 9,
    text:
      `
        Я не могла подобрать подходящих слов для ответа. Они просто застыли на губах, пока взгляд цеплялся за живую легенду, только что сошедшую со страниц учебника.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 10,
    text:
      `
        — Катарина, твое молчание настораживает. Давай дойдем до доктора… Это всего в нескольких кварталах отсюда. Если необходимо, я найму экипаж! 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 11,
    text:
      `
        Информация с трудом укладывалась в голове. Мой загадочный спутник вполне мог оказаться реальным Николой Теслой, а я действительно попала в прошлое.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 12,
    text:
      `
        И это уже не казалось бредом измученного сознания, ведь все было до боли реалистичным: запахи, прикосновения, собственные чувства и эмоции.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 13,
    text:
      `
        — Катарина?
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 14,
    text:
      `
        Мой задумчивый взгляд окинул ученого с ног до головы. Я лихорадочно пыталась придумать ответ, пока мысли были заняты именем, которое он несколько раз произносил.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 15,
    text:
      `
        «Имя девушки… Катарина. Пусть сейчас я буду называться так, чтобы быть в роли».
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 16,
    text:
      `
        До конца не понимая, где я оказалась: во сне или в чём‑то гораздо более реальном — решила пока придерживаться выбранного сценария. Глубоко вдохнув, постаралась успокоиться и ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 17,
    text:
      `
        — Все в порядке. Должно быть голова закружилась от солнечного удара.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 18,
    text:
      `
        — Извини за странное поведение.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 19,
    text:
      `
        На мгновение показалось, что Тесла поверил моим словам. Но его проницательный взгляд, полный настороженности, говорил об обратном.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 20,
    text:
      `
        — Думаю, Роберт будет не в восторге, услышав о твоем плохом самочувствии.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 21,
    text:
      `
        — Я настоятельно рекомендую посетить врача!
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 22,
    text:
      `
        Никола быстрым, почти нервным взглядом посмотрел на карманные часы, щёлкнул крышкой и едва заметно нахмурился.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Clock_Tick.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 23,
    text:
      `
        — Но уже после встречи с Уильямом, на которую мы, к слову, слегка опаздываем.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 24,
    text:
      `
        — После его долгого путешествия, кажется, вам будет о чем поговорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 25,
    text:
      `
        Мне оставалось только кивнуть и робко последовать за ученым.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 26,
    text:
      `
        «Вот так попала… Как отыграть роль человека, которого я совершенно не знаю?»
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 27,
    text:
      `
        «Это не просто сценка, которую мы придумываем с Шерил для детей. Почти готова поверить в реальность своего непростого положения…»
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 28,
    text:
      `
        Рассеянные рассуждения не давали рационально оценить обстановку. Но, усилием воли взяв себя в руки, сосредоточилась на настоящем.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 29,
    text:
      `
        Я неожиданно обнаружила, что все это время сжимала в руках небольшой кожаный саквояж коричневого оттенка.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 30,
    text:
      `
        «Настолько погрузилась в мысли, что даже не заметила…»
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 31,
    text:
      `
        Пока Никола шел чуть впереди, я тайком заглянула внутрь.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 32,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 33, image: require('../../../../Media/Images/ITLH/Items/Ticket.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 33,
    text:
      `
        «Похоже на билет в театр. Название представления: <i>Хижина дяди Тома</i>».
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Item', id: 'Ticket' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 34,
    text:
      `
        «Незнакомое произведение. Но учитывая веяния Америки, а более нет сомнений, что я именно тут, сюжет мог строиться на проблемах общества или страны в целом».
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 35,
    text:
      `
        «Хотя нельзя исключать и классическую мелодраму, или сатиру, или любой другой жанр. Кто знает вкусы публики этой эпохи?»
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 36,
    text:
      `
        «Судя по виду Теслы, вполне вероятно конец XIX века…»
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 37,
    text:
      `
        Поток мыслей был прерван Николой, который вдруг спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 38,
    text:
      `
        — Ты успела подготовить какой-нибудь подарок ко встрече?
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 39,
    text:
      `
        Дрожащие руки начали исследовать сумку, но не нашли чего-то подходящего. Неуверенным голосом сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 40,
    text:
      `
        — Да как-то времени не было…
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 41,
    text:
      `
        Но Никола понимающе махнул рукой и улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 42,
    text:
      `
        — Уильям не расстроится, не волнуйся. Тем более он так резко вернулся. Сразу организовал встречу. Конечно, у тебя не было времени подготовиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 43,
    text:
      `
        Мы продолжили идти, и лишь тогда, когда Тесла отвернулся, я позволила себе облегченно выдохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 44,
    text:
      `
        «Пока мне везет. Только надолго ли? Что еще есть в этой сумочке…»
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 45,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 46, image: require('../../../../Media/Images/ITLH/Items/Poition.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 46,
    text:
      `
        «Какие-то медикаменты. У Катарины серьезное заболевание или просто таблетки от мигрени?»
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Item', id: 'Poiton' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 47,
    text:
      `
        На дальнейший осмотр времени не осталось, ведь мы подошли к уютному заведению, от которого веяло ароматами свежей выпечки.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/NewYork_1885.jpg')
  },

  {
    id: 48,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 49 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 49,
    text:
      `
        Никола придержал мне дверь, галантно пропуская внутрь. Обыденные запахи привычных блюд современности казались теперь чем-то новым, заставляя желудок невольно заурчать.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 50,
    text:
      `
        «Интересно, а как на вкус?»
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 51,
    text:
      `
        Тесла указал на противоположную сторону кафе, где сидел пожилой мужчина и пил кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 52,
    text:
      `
        Как только он нас увидел, то радостно раскрыл руки, приглашая меня в свои объятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 53,
    text:
      `
        Я неловко приняла их, стараясь вести себя под стать обстоятельствам. На мгновение действительно почувствовала тепло и искреннюю радость от встречи.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 54,
    text:
      `
        — Моя дорогая, Катарина! Как же отрадно снова видеть тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 55,
    text:
      `
        — Кстати, почему сегодня с тобой Никола? Где Роберт?
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 56,
    text:
      `
        «Да кто такой этот Роберт? Тесла уже произносил его имя. Как он связан с Катариной? Но не могу же спросить напрямую…»
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 57,
    text:
      `
        Положение спас Никола. Он отодвинул для меня стул, помогая устроиться за столиком, а затем спокойно ответил на вопрос Уильяма:
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 58,
    text:
      `
        — У него срочная командировка, поэтому попросил меня сопроводить Катарину.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 59,
    text:
      `
        Выражение лица Уильяма слегка помрачнело, но затем он задорно рассмеялся, пытаясь перевести тему на более нейтральный лад.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 60,
    text:
      `
        — Надеюсь, когда-нибудь, он перестанет так много работать и посвятит время семье.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 61,
    text:
      `
        — Он очень упорный и целеустремленный человек. Полагаю, сейчас для него приоритетнее всего карьера.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 62,
    text:
      `
        Уильям отмахнулся и подозвал официанта.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 63,
    text:
      `
        — Что ж, не о нем сейчас речь. Смелее заказывайте вкусности, я плачу.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 64,
    text:
      `
        Когда в мои руки опустилось меню, голова закружилась от выбора.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 65,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.ITLH, personId: 'CafeNy_Chapter01_Part02', goTo: 66 },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 66,
    text:
      `
        Десерт буквально таял во рту от мягкости и свежести ингредиентов.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 67,
    text:
      `
        «Ни в какое сравнение с современной продукцией!»
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 68,
    text:
      `
        Видимо заметив мое довольное выражение лица, Уильям усмехнулся и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 69,
    text:
      `
        — Наконец, вижу твою улыбку. А то ты сегодня какая‑то задумчивая, даже чуть хмурая. Что-то случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 70,
    text:
      `
        Тесла скрестил руки, внимательно наблюдая за моим ответом.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 71,
    text:
      `
        «Настала пора активнее вжиться в роль, иначе они что-то заподозрят. И так… Из-за чего я хмурая?»
      `,
    buttons: [
      {
        text: 'Болит голова',
        goTo: 72
      },
      {
        text: 'Солнечный удар',
        goTo: 84
      },
      {
        text: 'Нет настроения',
        goTo: 95
      }],
    beforeBegin: () => {
      timer.set(10, () => { scenarioManager.beginScene(95) })
    },
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 72,
    text:
      `
        Никола удивленно вскинул бровь и с ноткой недоверия заявил:
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 73,
    text:
      `
        — Но когда мы встретились, ты говорила другое. Твое странное поведение тогда было вызвано солнечным ударом, разве нет?
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 74,
    text:
      `
        Уильям обеспокоенно посмотрел на меня, будто пытаясь прочесть скрытые мысли. Он осторожно накрыл мою руку своей шершавой ладонью.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 75,
    text:
      `
        «На мгновение даже полегчало… Видно, как этот пожилой мужчина заботится о Катарине».
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 76,
    text:
      `
        — Дорогая, ты чего-то не можешь нам сказать? Тебя все же что-то тревожит?
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 77,
    text:
      `
        Моя легенда начала стремительно рушиться, и из‑за этого руки предательски затряслись.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 78,
    text:
      `
        — Я…
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 79,
    text:
      `
        Но в горле застрял невидимый ком — плотный, удушающий. Он мешал выдавить внятные слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 80,
    text:
      `
        Никола недовольно покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 81,
    text:
      `
        — И все же я продолжаю настаивать на походе в больницу. Лучше перестраховаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 82,
    text:
      `
        — Что ж, если Катарина продолжит себя так странно вести, полагаю, будет не лишним сходить провериться. Здоровье — не шутка.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 83,
    text:
      `
        «Соберись, $Имя Игрока$!»
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    message: 'Ваши действия вызывают подозрение у собеседников.',
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Choice', id: 'Suspicion' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 84,
    text:
      `
        Никола одобрительно закивал, немного расслабляя напряженную позу.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 85,
    text:
      `
        — Когда мы встретились, ты говорила то же самое. Неужели голова все еще болит?
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 86,
    text:
      `
        Уильям обеспокоенно посмотрел на меня, будто пытаясь прочесть скрытые мысли. Он осторожно накрыл мою руку своей шершавой ладонью.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 87,
    text:
      `
        «На мгновение даже полегчало… Видно, как этот пожилой мужчина заботится о Катарине».
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 88,
    text:
      `
        — Если ты себя плохо чувствуешь, не стоит об этом молчать. Мы можем встретиться в любой другой день. Я пока не собираюсь покидать город.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 89,
    text:
      `
        Моя рассеянность начала отступать от такого отеческого беспокойства.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 90,
    text:
      `
        «А ведь дома родители постоянно ругаются. Я уже и забыла, что такое проявление подобной нежности со стороны близких». 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 91,
    text:
      `
        Но вслух смело произнесла другое:
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 92,
    text:
      `
        — Мне правда гораздо лучше после десерта. Спасибо!
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 93,
    text:
      `
        Никола и Уильям облегченно переглянулись.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 94,
    text:
      `
        — Очень рад, что такая мелочь смогла не только немного поднять тебе настроение, но и в самом деле улучшить самочувствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    message: 'Ваши действия не вызывают подозрений у собеседников.',
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 95,
    text:
      `
        Никола удивленно вскинул бровь и с ноткой недоверия заявил:
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 96,
    text:
      `
        — Но когда мы встретились, ты говорила другое. Твое странное поведение тогда было вызвано солнечным ударом, разве нет?
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 97,
    text:
      `
        Уильям обеспокоенно посмотрел на меня, будто пытаясь прочесть скрытые мысли. Он осторожно накрыл мою руку своей шершавой ладонью.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 98,
    text:
      `
        «На мгновение даже полегчало… Видно, как этот пожилой мужчина заботится о Катарине».
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 99,
    text:
      `
        — Дорогая, ты чего-то не можешь нам сказать? Тебя все же что-то тревожит?
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 100,
    text:
      `
        Моя легенда начала стремительно рушиться, и из‑за этого руки предательски затряслись.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 101,
    text:
      `
        — Я…
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 102,
    text:
      `
        Но в горле застрял невидимый ком — плотный, удушающий. Он мешал выдавить внятные слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 103,
    text:
      `
        Никола недовольно покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 104,
    text:
      `
        — И все же я продолжаю настаивать на походе в больницу. Лучше перестраховаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 105,
    text:
      `
        — Что ж, если Катарина продолжит себя так странно вести, полагаю, будет не лишним сходить провериться. Здоровье — не шутка.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 106,
    text:
      `
        «Соберись, $Имя Игрока$!»
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    message: 'Ваши действия вызывают подозрение у собеседников.',
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 107,
    text:
      `
        Наша изначальная мирная посиделка закономерно переросла в более интенсивный разговор, затрагивающий разные аспекты жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 108,
    text:
      `
        — Кстати, Уильям. Я все жду рассказов о твоем путешествии в Италию!
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 109,
    text:
      `
        Мужчина немного смущенно улыбнулся, кладя руки на стол и складывая их в замок.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 110,
    text:
      `
        — Исполнил давнюю мечту и побывал во всех ключевых городах страны: Рим, Флоренция, Милан.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 111,
    text:
      `
        — Вдоволь наелся их деликатесов и, разумеется, оценил мастерство производства вина.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 112,
    text:
      `
        Никола одобрительно присвистнул. В его глазах отразилась радость за, видимо, близкого друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 113,
    text:
      `
        — Искренне поздравляю тебя! Я как-то со своей работой ни туда, ни сюда…
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 114,
    text:
      `
        — Брось хандрить! Не раз говорил и буду повторять: это всего лишь временные трудности.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 115,
    text:
      `
        Тесла слегка кивнул, а Уильям перевел взгляд на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 116,
    text:
      `
        — А ты чем занималась, дорогая?
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 117,
    text:
      `
        «Вы же так интересно беседовали между собой… Ох…»
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 118,
    text:
      `
        — Да так… Ходила на днях в…
      `,
    buttons: [
      {
        text: 'Театр',
        goTo: 119
      },
      {
        text: 'Библиотеку',
        goTo: 137
      },
      {
        text: 'Аптеку',
        goTo: 150
      },
      {
        text: 'Музей',
        goTo: 164
      }],
    beforeBegin: () => {
      timer.set(10, () => { scenarioManager.beginScene(164) })
    },
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 119,
    text:
      `
        Выражение лица Уильяма побагровело. Достаточно резким тоном он произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 120,
    text:
      `
        — Сколько раз просил не приближаться к этому месту! Почему ты никогда не слушаешь своего старика?
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Angry.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 121,
    text:
      `
        От внезапной смены обстановки я опешила.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 122,
    text:
      `
        «Что происходит? Почему на такое обыденное развлечение такая бурная реакция?»
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 123,
    text:
      `
        — Неужели ты опять хочешь страдать от депрессии или того хуже…
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Angry.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 124,
    text:
      `
        «Остается только догадываться об окончании фразы, но, судя по тому, как реагирует до этого милый пожилой мужчина — я сказала нечто запретное».
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 125,
    text:
      `
        — Уильям…
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 126,
    text:
      `
        Мужчина громко вздохнул, пытаясь совладать с эмоциями.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 127,
    text:
      `
        — Прошу прощения, я не должен был так резко выражаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 128,
    text:
      `
        От чего-то захотелось поддержать его и сказать довольно нейтральную фразу:
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 129,
    text:
      `
        — Ничего страшного. Все это пережиток прошлого. Не стоит заострять внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 130,
    text:
      `
        Уильям поднял на меня взгляд, полный заботы.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 131,
    text:
      `
        — И все же… Ладно. Ты права. Какой спектакль смотрела?
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 132,
    text:
      `
        Я достала из сумочки билет и протянула мужчине.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 133,
    text:
      `
        — Замечательное произведение о том, насколько ужасным является рабовладение.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 134,
    text:
      `
        — Надеюсь, спектакль пришелся по душе. Слышал о нем только хорошие отзывы, однако сам все никак не дойду.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 135,
    text:
      `
        — Учитывая твои частые разъезды, это неудивительно.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 136,
    text:
      `
        Между нами вновь установилась спокойная атмосфера.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    message: 'Ваши действия не вызывают подозрений у собеседников.',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 137,
    text:
      `
        Уильям удивился, поправил сбившуюся одежду и уточнил:
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 138,
    text:
      `
        — Я не помню, чтобы ты так активно интересовалась чтением.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 139,
    text:
      `
        — Ты искала какую-то конкретную книгу?
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 140,
    text:
      `
        «Кажется, я сказала что-то не то… Что Катарина могла делать в библиотеке?»
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 141,
    text:
      `
        — Я просто прогуливалась, решила заглянуть…
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 142,
    text:
      `
        Но моих собеседников не очень удовлетворил такой ответ.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 143,
    text:
      `
        — Помнится, ты как-то сказала, что считаешь библиотеки самым скучным местом в городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 144,
    text:
      `
        Я сжала руки под столом и натянула улыбку.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 145,
    text:
      `
        — Вот такое было настроение…
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 146,
    text:
      `
        Уильям недовольно покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 147,
    text:
      `
        — Не смешно, Катарина. Будто ты что-то от нас скрываешь, не хочешь поделиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 148,
    text:
      `
        — Мы же все почти семья. Если беспокоишься о чем-то, выслушаем, поможем.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 149,
    text:
      `
        Я вымученно опустила голову, не зная, какие новые оправдания сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    message: 'Ваши действия вызывают подозрение у собеседников.',
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Choice', id: 'Suspicion' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 150,
    text:
      `
        Уильям широко раскрыл глаза и беспокойно спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 151,
    text:
      `
        — Ты все же заболела? Что такое?
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 152,
    text:
      `
        — Неужели снова мучают сильные головные боли?
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 153,
    text:
      `
        Никола присоединился к волнению пожилого мужчины и мягко дополнил:
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 154,
    text:
      `
        — Лучше сразу сказать о таком, чтобы мы приняли меры.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 155,
    text:
      `
        «Так у Катарины действительно не все в порядке со здоровьем… Жаль, что здесь нет современной медицины».
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 156,
    text:
      `
        Я достала из сумочки некие лекарства и протянула Уильяму.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 157,
    text:
      `
        Тот рассмотрел содержимое и облегченно вздохнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 158,
    text:
      `
        — Не пугай так, пожалуйста. Это же просто таблетки для повышения работоспособности.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 159,
    text:
      `
        Видя, как мои неосторожные слова ранили собеседников, я решила сказать нейтральную фразу, чтобы исправить положение:
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 160,
    text:
      `
        — Прошу прощения за неясность. Не хотела вас беспокоить!
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 161,
    text:
      `
        Мужчины тепло улыбнулись.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 162,
    text:
      `
        — Главное, что ты здорова. Остальное не имеет значения.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 163,
    text:
      `
        Между нами вновь установилась спокойная атмосфера.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    message: 'Ваши действия не вызывают подозрений у собеседников.',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 164,
    text:
      `
        Уильям удивился, поправил сбившуюся одежду и уточнил:
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 165,
    text:
      `
        — Я не помню, чтобы ты так активно интересовалась выставками.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 166,
    text:
      `
        — Ты искала какой-то конкретный экспонат или зачем ходила?
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 167,
    text:
      `
        «Кажется, я сказала что-то не то… Что Катарина могла делать в музее?»
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 168,
    text:
      `
        — Я просто прогуливалась, решила заглянуть…
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 169,
    text:
      `
        Но моих собеседников не очень удовлетворил такой ответ.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 170,
    text:
      `
        — Помнится, ты как-то сказала, что считаешь музей самым скучным местом в городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 171,
    text:
      `
        Я сжала руки под столом и натянула улыбку.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 172,
    text:
      `
        — Вот такое было настроение…
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 173,
    text:
      `
        Уильям недовольно покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 174,
    text:
      `
        — Не смешно, Катарина. Будто ты что-то от нас скрываешь, не хочешь поделиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 175,
    text:
      `
        — Мы же все почти семья. Если беспокоишься о чем-то, выслушаем, поможем.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 176,
    text:
      `
        Я вымученно опустила голову, не зная, какие новые оправдания сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    message: 'Ваши действия вызывают подозрение у собеседников.',
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Choice', id: 'Suspicion' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 177,
    text:
      `
        После моего очередного актерского перформанса Уильям вдруг спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 178,
    text:
      `
        — Знаю, Катарина, ты не любишь касаться этой темы… Но все же должен спросить: как у вас с Робертом дела?
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 179,
    text:
      `
        «Роберт… Так кто же он для Катарины? Такой же близкий друг как Никола или Уильям, коллега, нечто большее?»
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 180,
    text:
      `
        «Но почему тогда Катарина не любит о нем говорить?»
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 181,
    text:
      `
        — Между нами все…
      `,
    buttons: [
      {
        text: 'Хорошо',
        goTo: 182
      },
      {
        text: 'Плохо',
        goTo: 195
      },
      {
        text: 'Неопределенно',
        goTo: 206
      }],
    beforeBegin: () => {
      timer.set(10, () => { scenarioManager.beginScene(182) })
    },
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 182,
    text:
      `
        Уильям закатил глаза, устало опуская руку на лоб, словно пытаясь унять нарастающее раздражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 183,
    text:
      `
        — Вот уж врать некрасиво, дорогая моя.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 184,
    text:
      `
        — Я же помню нашу последнюю встречу, твои письма. Вы как кошка с собакой — вечно шипите друг на друга и избегаете малейшего сближения.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 185,
    text:
      `
        Мне оставалось только неловко улыбнуться и развести руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 186,
    text:
      `
        «Как будто уже не имеет значения, что я скажу дальше».
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 187,
    text:
      `
        Но неожиданно я поймала сочувствующий взгляд Николы. В его глазах читалось тихое понимание, будто он знал больше, чем говорил вслух.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 188,
    text:
      `
        — Может быть Катарина имела в виду, что хотелось бы так думать.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 189,
    text:
      `
        — А личное должно оставаться личным.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 190,
    text:
      `
        Уильям утвердительно кивнул, но все равно одарил меня взглядом полным непонимания.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 191,
    text:
      `
        — Я мог неправильно выразиться... Но Катарина... Раньше ты ничего не скрывала от меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 192,
    text:
      `
        Пришлось импровизировать на ходу и сказать не очень приятную фразу:
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 193,
    text:
      `
        — Не хотелось бы сейчас об этом говорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 194,
    text:
      `
        Взгляд Уильяма слегка потух, плечи опустились, но он не стал далее продолжать тему.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    message: 'Ваши действия вызывают подозрение у собеседников.',
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Choice', id: 'Suspicion' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 195,
    text:
      `
        Уильям понимающе кивнул, откинувшись на спинку стула и небрежно закидывая ногу на ногу.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 196,
    text:
      `
        — Спасибо за честность. Ты упоминала в своих письмах, что вы как кошка с собакой — вечно шипите друг на друга и избегаете малейшего сближения.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 197,
    text:
      `
        Я облегченно вздохнула, поправляя подол юбки.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 198,
    text:
      `
        «Возможно, удача не до конца покинула меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 199,
    text:
      `
        Но неожиданно я поймала задумчивый взгляд Николы. В его глазах будто читалось глубокое понимание ситуации Катарины, но он не решался сказать всей правды вслух.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 200,
    text:
      `
        — Роберт — тяжелый человек. Но он не лишен сочувствия и понимания.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 201,
    text:
      `
        — Искренне надеюсь, что ваши отношения наладятся.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 202,
    text:
      `
        Уильям кротко кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 203,
    text:
      `
        — Безусловно, я никогда не желал вам зла… Но все же...
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 204,
    text:
      `
        Он осекся, его пальцы слегка постучали по столу, выдавая внутреннюю борьбу. Но Уильям не стал более продолжать тему.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 205,
    text:
      `
        «Интересно, что же за человек этот Роберт…»
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 206,
    text:
      `
        Уильям закатил глаза, устало опуская руку на лоб, словно пытаясь унять нарастающее раздражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 207,
    text:
      `
        — Вот уж врать некрасиво, дорогая моя.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 208,
    text:
      `
        — Я же помню нашу последнюю встречу, твои письма. Вы как кошка с собакой — вечно шипите друг на друга и избегаете малейшего сближения.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 209,
    text:
      `
        Мне оставалось только неловко улыбнуться и развести руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 210,
    text:
      `
        «Как будто уже не имеет значения, что я скажу дальше».
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 211,
    text:
      `
        Но неожиданно я поймала сочувствующий взгляд Николы. В его глазах читалось тихое понимание, будто он знал больше, чем говорил вслух.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 212,
    text:
      `
        — Может быть Катарина имела в виду, что не желает заострять на этом внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 213,
    text:
      `
        — Ведь личное должно оставаться личным.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 214,
    text:
      `
        Уильям утвердительно кивнул, но все равно одарил меня взглядом полным непонимания.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 215,
    text:
      `
        — Я мог неправильно выразиться… Но Катарина.. Раньше ты ничего не скрывала от меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 216,
    text:
      `
        Пришлось импровизировать на ходу и сказать не очень приятную фразу:
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 217,
    text:
      `
        — Не хотелось бы сейчас об этом говорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 218,
    text:
      `
        Взгляд Уильяма слегка потух, плечи опустились, но он не стал далее продолжать тему.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    message: 'Ваши действия вызывают подозрение у собеседников.',
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Choice', id: 'Suspicion' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 219,
    text:
      `
        Вскоре наша встреча подходила к концу. Уильям встал оплачивать счет, пока Тесла заговорил со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 220,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 221,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Suspicion' }) <= 1
        }
      },
      {
        goTo: 230,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Suspicion' }) >= 2
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 221,
    text:
      `
        — Давай я провожу тебя до дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 222,
    text:
      `
        — Думаю, после сегодняшних событий отдых не помешает.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 223,
    text:
      `
        Я с благодарностью кивнула, окончательно расслабившись и чувствуя, как напряжение последних часов покидает тело.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 224,
    text:
      `
        «Похоже, у меня получилось нормально отыграть свою роль и избежать похода в больницу».
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    message: 'Ваш спектакль удался. Никола и Уильям спокойны за здоровье Катарины.',
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Smile.png'),
    achievement: { story: EStoriesEn.ITLH, name: 'Actress' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 225,
    text:
      `
        Уильям подошел и нежно положил руку мне на плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 226,
    text:
      `
        — Вынужден вас покинуть, работа не ждет.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 227,
    text:
      `
        — Было очень приятно повидаться. Жду в гости на следующей недели!
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 228,
    text:
      `
        — Не перетрудись, Уильям.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 229,
    text:
      `
        На доброй ноте мы разошлись, выйдя с Николой из кафе.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 230,
    text:
      `
        — Теперь я точно настаиваю на походе в больницу.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 231,
    text:
      `
        — Ты сегодня словно не принадлежишь себе. Поэтому, пожалуйста, не спорь и ради всеобщего спокойствия, позволь проводить.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 232,
    text:
      `
        Я с грустью посмотрела на мужчину. Собрав остатки уверенности, слабо кивнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 233,
    text:
      `
        «Похоже, у меня не получилось нормально отыграть свою роль и избежать похода к врачу».
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    message: 'Ваш спектакль не удался. Никола и Уильям беспокоятся за здоровье Катарины.',
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 234,
    text:
      `
        Уильям подошел и тревожно положил руку мне на плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 235,
    text:
      `
        — Очень жаль, дорогая, но я вынужден покинуть вас. Работа не ждет.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 236,
    text:
      `
        — Я зайду проведать тебя в скором времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speakerR: 'Уильям',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 237,
    text:
      `
        — Желаю продуктивного дня, Уильям!
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 238,
    text:
      `
        На слегка гнетущей ноте мы разошлись, выйдя с Николой из кафе.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Cafe_NY.jpg')
  },

  {
    id: 239,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 240 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 240,
    text:
      `
        Свежий воздух отрезвил, успокаивая внутреннюю дрожь после разговоров.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 241,
    text:
      `
        Оставшись наедине с Николой, поймала себя на мысли, что страх начал понемногу отступать, сменяясь робким любопытством.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 242,
    text:
      `
        «Я могла наговорить много чего лишнего, однако Тесла все равно относится ко мне хорошо. Может стоит быть более решительной и поддержать беседу?»
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 243,
    text:
      `
        «В конце концов, я ведь писала про него эссе и частично помню биографию».
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 244,
    text:
      `
        К моему счастью, пока мы шли до места назначения, Никола решил поговорить со мной и поделиться тем, что, по всей видимости, его действительно увлекает.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 245,
    text:
      `
        «Кажется, в его глазах играет живой, почти озорной блеск. Интересно…»
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 246,
    text:
      `
        Но прежде Никола вежливо предложил:
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 247,
    text:
      `
        — Если тебе вдруг тяжело идти или плохо себя чувствуешь, можешь использовать меня как опору.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 248,
    text:
      `
        Он выставил согнутую руку, приглашая схватиться за нее.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 249,
    text:
      `
        — Спасибо, это…
      `,
    buttons: [
      {
        text: 'Хорошее предложение',
        goTo: 250
      },
      {
        text: 'Ни к чему',
        goTo: 266
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 250,
    text:
      `
        Я осторожно дотронулась до его локтя, слегка опираясь на предложенную руку. Тепло его кожи сквозь ткань рукава неожиданно успокоило меня, и мы неспешно двинулись по уютным улочкам прошлого.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 251,
    text:
      `
        «Кто бы мог подумать… Меня держит под руку сам Никола Тесла!»
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 252,
    text:
      `
        «Если это не сон, то я не понимаю своих эмоций… Такой великий, известный человек…»
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 253,
    text:
      `
        Однако на тот момент он не был еще так популярен и едва ли осознавал свое величие.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 254,
    text:
      `
        «Вклад в науку то он уже должен был сделать, но до признания и стабильности должны пройти годы».
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 255,
    text:
      `
        Я отбросила суетные мысли о материальном, полностью сосредоточившись на его профиле. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 256,
    text:
      `
        Гордая линия подбородка, высокий лоб, задумчивый изгиб губ. В этих чертах читалась необычайная сила духа и глубина мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 257,
    text:
      `
        «Нельзя отрицать, что он и собой хорош».
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 258,
    text:
      `
        Видимо заметив пристальный взгляд, Тесла улыбнулся и положил свою ладонь на мое запястье.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 259,
    text:
      `
        — Давно мы с тобой так спокойно не гуляли.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 260,
    text:
      `
        — Я рад, что удалось выбраться и подышать свежим воздухом.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 261,
    text:
      `
        Прикосновение Николы вскоре исчезло, оставляя меня в легком замешательстве.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 262,
    text:
      `
        По телу разливалась приятная дрожь — словно теплый ток пробежал от кончиков пальцев до самого сердца. 
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 263,
    text:
      `
        Неожиданно оказалось, что даже рядом с почти незнакомым человеком можно ощутить такую искреннюю поддержку.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 264,
    text:
      `
        «Помню, как писала о нем то, что вопреки затворническому образу жизни — Тесла был эмпатом».
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    message: 'Эмпат — человек, который способен сопереживать другим.',
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 265,
    text:
      `
        «Здорово осознавать, как нам спокойно может быть рядом друг с другом».
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    message: 'Николе приятно поддержать подругу.',
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 266,
    text:
      `
        — Все в порядке, меня ничего не беспокоит.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 267,
    text:
      `
        Тесла слегка поник, но перестал настаивать. Мы неспешно двинулись по уютным улочкам прошлого.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 268,
    text:
      `
        «Отказалась от простой дружеской поддержки великого ученого!»
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 269,
    text:
      `
        Однако на тот момент он не был еще так популярен и едва ли осознавал свое величие.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 270,
    text:
      `
        «Вклад в науку то он уже должен был сделать, но до признания и стабильности должны пройти годы».
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 271,
    text:
      `
        — Катарина, я все хотел с тобой поделиться. Не знаю, как ты к этому отнесешься…
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 272,
    text:
      `
        — По секрету, но я нашел клуб, где в скором времени пройдет игра в домино!
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    message: 'Вы услышали интересную информацию, способную изменить поведение поведение Николы в прошлом.',
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 273,
    text:
      `
        — Знаю, что ты сейчас хочешь сказать, однако поверь, как раньше не будет.
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 274,
    text:
      `
        — Я основательно подготовлюсь и наконец-то смогу сорвать куш!
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 275,
    text:
      `
        Я слегка растерялась от такого заявления и на мгновение замерла, лихорадочно перебирая в памяти факты из его биографии.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 276,
    text:
      `
        «В воспоминаниях современников не раз упоминалось, что он был азартным игроком — человеком, способным спустить целое состояние за один вечер».
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 277,
    text:
      `
        «Но я думала, его зависимость уже угасла к этому времени. Разве он не должен сосредоточиться на открытиях?»
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 278,
    text:
      `
        «Он поделился с Катариной чем-то сокровенным — это говорило о доверии. Кто же она для Николы? Вряд ли невеста, таковых у него не было».
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 279,
    text:
      `
        «Судя по тому, что я наблюдала сегодня — близкая подруга».
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina_Thinking.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 280,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 281,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Effect', id: 'Knowledge' }) >= 1
        }
      },
      {
        goTo: 312,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Effect', id: 'Knowledge' }) <= 0
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 281,
    text:
      `
        «Раз он так откровенен, попробую поговорить с ним».
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 282,
    text:
      `
        «Может, он прислушается к моим словам?»
      `,
    buttons: [
      {
        text: '<span class="SBC-Yellow">Разве ты не перестал играть?</span>',
        goTo: 283,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(282, 0, getChoice(0))
        }
      },
      {
        text: 'Никола, а как же работа?',
        goTo: 294,
        func: () => {
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(282, 1, getChoice(1))
        }
      },
      {
        text: 'Что это за клуб?',
        goTo: 301,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(282, 2, getChoice(2))
        }
      },
      {
        text: 'Кто-нибудь составит тебе компанию?',
        goTo: 306,
        func: () => {
          choiceDone(3)
          scenarioManager.changeSceneButtonStatus(282, 3, getChoice(3))
        }
      },
      {
        text: 'Далее',
        goTo: 332,
        isActive: false
      }
    ],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(282)
    },
    message: 'Благодаря знаниям об эпохе, вы сможете задать Тесле дополнительный вопрос.',
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 283,
    text:
      `
        Вопрос застиг его врасплох, он театрально вздохнул, раскрывая о себе больше информации.
      `,
    buttons: [
      {
        text: '',
        goTo: 951
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 951,
    text:
      `
        — Как ты помнишь, я около года не связывал жизнь с играми. Но в нынешней ситуации мне необходимы деньги. Ведь в работе все складывается не самым лучшим образом.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 284,
    text:
      `
        И тут до меня стала доходить одна очевидная деталь.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 285,
    text:
      `
        «Стоп… Неужели это уже произошло? Тесла поругался с Эдисоном?»
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 286,
    text:
      `
        Я попыталась сказать до боли банальную фразу, попробовать хотя бы таким образом его отговорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 287,
    text:
      `
        — Но это не выход! Сколько раз ты уже проигрывал все? Не верь иллюзии малого шанса на победу. Ни о каком заработке не может быть и речи, только больше потеряешь…
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 288,
    text:
      `
        Никола смущенно отвернул лицо, стараясь унять внутреннюю дрожь, которая ощущалась через его неуверенную походку.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 289,
    text:
      `
        — Я благодарен за волнение, но все же…
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    message: 'Тесла может прислушаться к вам в будущем.',
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 290,
    text:
      `
        — Риски были взвешены. Когда в моей жизни все будет стабильно, клянусь, избавлюсь от этой привычки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 291,
    text:
      `
        «Слова настоящего игромана».
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 292,
    text:
      `
        Однако несмотря на не согласие Теслы с моими доводами, показалось, что в его глазах мелькнуло сомнение.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 293,
    text:
      `
        «Может, не все потеряно?»
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(282)
      scenarioManager.manageDialog(282, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(282, 293)
    },
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Effect', id: 'Help' }],
    achievement: { story: EStoriesEn.ITLH, name: 'KnowledgePower' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 294,
    text:
      `
        Тесла мрачно опустил взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 295,
    text:
      `
        — А что с ней может быть? Я работаю, как честный трудящийся на заводе. Провожу исследования и предлагаю свои наработки для улучшения производительности систем.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 296,
    text:
      `
        — Так ведь этот досуг отвлекает, к тому же сокращает доход.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 297,
    text:
      `
        Никола усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 298,
    text:
      `
        — Мой доход, как ты выразилась, сокращает мистер Томас Эдисон своими задержками.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 299,
    text:
      `
        — Я не хочу оставаться в щепетильном положении и уж тем более просить больше денег у Роберта.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 300,
    text:
      `
        — Поэтому вижу только один источник заработка.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(282)
      scenarioManager.manageDialog(282, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(282, 300)
    },
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 301,
    text:
      `
        — В Гринвич-виллидж недавно открылось место для людей с достатком. Меня пригласили за мой вклад в науку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 302,
    text:
      `
        От этой мысли я стала опасаться за его состояние еще сильнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 303,
    text:
      `
        — То есть ставки будут высоки? 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 304,
    text:
      `
        Никола нервно замотал головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 305,
    text:
      `
        — Все, как обычно, нет нужды волноваться. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(282)
      scenarioManager.manageDialog(282, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(282, 305)
    },
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 306,
    text:
      `
        — Ты знаешь, что нет. В нашем окружении никто больше не промышляет подобным видом деятельности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 307,
    text:
      `
        — Разве что Роберт иногда не прочь перекинуться в карты, но дальше этого никогда не заходит.
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 308,
    text:
      `
        Я начала теребить край юбки, комкая ткань пальцами. Тесла заметил это и его выражение лица чуть смягчилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 309,
    text:
      `
        — Может все же попробуешь поговорить с ним?
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 310,
    text:
      `
        Тесла выдержал долгую паузу, после чего ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 311,
    text:
      `
        — Я подумаю.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(282)
      scenarioManager.manageDialog(282, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(282, 311)
    },
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 312,
    text:
      `
        «Раз он так откровенен, попробую поговорить с ним».
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 313,
    text:
      `
        «Может, он прислушается к моим словам?»
      `,
    buttons: [
      {
        text: 'Никола, а как же работа?',
        goTo: 314,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(313, 0, getChoice(0))
        }
      },
      {
        text: 'Что это за клуб?',
        goTo: 321,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(313, 1, getChoice(1))
        }
      },
      {
        text: 'Кто-нибудь составит тебе компанию?',
        goTo: 326,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(313, 2, getChoice(2))
        }
      },
      {
        text: 'Далее',
        isActive: false,
        goTo: 332
      }
    ],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(313)
    },
    message: 'Ваших знаний об эпохе недостаточно, чтобы задать Тесле дополнительный вопрос.',
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 314,
    text:
      `
        Тесла мрачно опустил взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 315,
    text:
      `
        — А что с ней может быть? Я работаю, как честный трудящийся на заводе. Провожу исследования и предлагаю свои наработки для улучшения производительности систем.
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 316,
    text:
      `
        — Так ведь этот досуг отвлекает, к тому же сокращает доход.
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 317,
    text:
      `
        Никола усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 318,
    text:
      `
        — Мой доход, как ты выразилась, сокращает мистер Томас Эдисон своими задержками.
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 319,
    text:
      `
        — Я не хочу оставаться в щепетильном положении и уж тем более просить больше денег у Роберта.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 320,
    text:
      `
        — Поэтому вижу только один источник заработка.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(313)
      scenarioManager.manageDialog(313, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(313, 320)
    },
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 321,
    text:
      `
        — В Гринвич-виллидж недавно открылось место для людей с достатком. Меня пригласили за мой вклад в науку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 322,
    text:
      `
        От этой мысли я стала опасаться за его состояние еще сильнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 323,
    text:
      `
        — То есть ставки будут высоки? 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 324,
    text:
      `
        Никола нервно замотал головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 325,
    text:
      `
        — Все, как обычно, нет нужды волноваться. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(313)
      scenarioManager.manageDialog(313, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(313, 325)
    },
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 326,
    text:
      `
        — Ты знаешь, что нет. В нашем окружении никто больше не промышляет подобным видом деятельности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 327,
    text:
      `
        — Разве что Роберт иногда не прочь перекинуться в карты, но дальше этого никогда не заходит.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 328,
    text:
      `
        Я начала теребить край юбки, комкая ткань пальцами. Тесла заметил это и его выражение лица чуть смягчилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 329,
    text:
      `
        — Может все же попробуешь поговорить с ним?
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 330,
    text:
      `
        Тесла выдержал долгую паузу, после чего ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 331,
    text:
      `
        — Я подумаю.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(313)
      scenarioManager.manageDialog(313, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(313, 331)
    },
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 332,
    text:
      `
        За непринужденной беседой время пролетело незаметно. Вскоре мы уже стояли у конечной точки нашего пути.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: 0, category: 'Effect', id: 'Help' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 333,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 335,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Suspicion' }) <= 1
        }
      },
      {
        goTo: 364,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Suspicion' }) >= 2
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Streets_NY.jpg')
  },

  {
    id: 335,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 336 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 336,
    text:
      `
        Неожиданно легкая атмосфера вдруг сменилась тягостным бременем.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Stress.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 337,
    text:
      `
        «Что это за странное чувство? И почему так ужасно пахнет? Как будто протухшие продукты…»
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 338,
    text:
      `
        К горлу невольно подступила тошнота, которую я попыталась подавить, прикрыв нос ладонью.
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 339,
    text:
      `
        — Катарина, ты чего?
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 340,
    text:
      `
        Обеспокоенный взгляд Николы порождал больше вопросов.
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 341,
    text:
      `
        — Ты разве не чувствуешь этот аромат?
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 342,
    text:
      `
        — Здесь всегда чисто и ухоженно. Может, конечно, чем-то с улицы повеяло…
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 343,
    text:
      `
        «Не понимаю… Мне же не кажется! Возможно из-за перемещений во времени органы чувств работают неправильно?»
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 344,
    text:
      `
        Я молча следовала за Николой, подозрительно оглядываясь по сторонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 345,
    text:
      `
        Не покидало тревожное чувство, будто кто‑то следит за мной или вот‑вот выпрыгнет из коридора.
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 346,
    text:
      `
        «Откуда это взялось? Все же было хорошо».
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 347,
    text:
      `
        На встречу нам шла милого вида старушка, которая обменялась любезными приветствиями с Николой.
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Old_Lady.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 348,
    text:
      `
        Но когда она проходила в непосредственной близости от меня, все нутро задрожало, а на лице застыл ужас.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 349,
    text:
      `
        Ее неестественно резкие движения, нехарактерные для преклонного возраста, заставили содрогнуться. Голова старухи была откинута вбок, а изо рта проглядывали желто‑черные зубы.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Old_Lady_Transformation.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 350,
    text:
      `
        Я взглянула в большие карие глаза. Вместо привычного блеска жизни в них отражались лишь тоска и ярость.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Old_Lady_Transformation.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 351,
    text:
      `
        — Н-Никола…
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 352,
    text:
      `
        Но он не слышал, уверенным шагом отдаляясь от меня. Между нами словно возник невидимый барьер.
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 353,
    text:
      `
        — Дитя…
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    speakerR: 'Старуха',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Old_Lady_Transformation.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 354,
    text:
      `
        В ту же секунду глаза старухи загорелись алым цветом. Она медленно, с хрустом развернулась ко мне, и её руки начали извиваться, выворачиваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Peril.mp3'),
    simple: require('../../../../Media/Audio/ITLH/Sounds/Bones_Crack.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 355,
    text:
      `
        Кожа на лице пошла трещинами, обнажая что‑то темное и мерзкое, а затем начала сползать, как старая штукатурка. Седые волосы исчезли, оставляя лишь голую макушку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Monster.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 356,
    text:
      `
        Я попятилась и уперлась в стену. Существо подошло ко мне и, взяв за руку, прошипело:
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 357,
    text:
      `
        — Мы нашли тебя… И везде найдем.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speakerR: 'Монстр',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Monster.png'),
    achievement: { story: EStoriesEn.ITLH, name: 'Monster' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 358,
    text:
      `
        — Ни время, ни пространство не укроют от нашего взора! 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speakerR: 'Монстр',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Monster.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 359,
    text:
      `
        Мельком я увидела, как на моем запястье появилось черное пятно. По коже побежали мурашки, будто сама тьма проникала под кожу.
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 360,
    text:
      `
        Слишком много потрясений обрушилось разом. Мозг отказывался воспринимать происходящее, а реальность стала расплываться.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 361,
    text:
      `
        Отдаленно я слышала, как Никола истошно кричит, но мне не суждено было узнать, что именно.
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 362,
    text:
      `
        В ушах звенел злобный рык, погружая в темную пучину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Monster_Scream.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Robert_Flat_Entrance_NY.jpg')
  },

  {
    id: 364,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 365 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 365,
    text:
      `
        Неожиданно легкая атмосфера вдруг сменилась тягостным бременем.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Stress.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 366,
    text:
      `
        «Что это за странное чувство? И почему так ужасно пахнет? Как будто протухшие продукты…»
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 367,
    text:
      `
        К горлу невольно подступила тошнота, которую я попыталась подавить, прикрыв нос ладонью.
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 368,
    text:
      `
        — Катарина, ты чего?
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 369,
    text:
      `
        Обеспокоенный взгляд Николы порождал больше вопросов.
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 370,
    text:
      `
        — Ты разве не чувствуешь этот аромат?
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 371,
    text:
      `
        — Здесь всегда чисто и ухоженно. Может, конечно, чем-то с улицы повеяло…
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    speakerR: 'Никола Тесла',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 372,
    text:
      `
        «Не понимаю… Мне же не кажется! Возможно из-за перемещений во времени органы чувств работают неправильно?»
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 373,
    text:
      `
        Я молча следовала за Николой, подозрительно оглядываясь по сторонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 374,
    text:
      `
        Не покидало тревожное чувство, будто кто‑то следит за мной или вот‑вот выпрыгнет из коридора.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 375,
    text:
      `
        «Откуда это взялось? Все же было хорошо».
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 376,
    text:
      `
        На встречу нам шел доктор, с которым Никола обменялся любезностями и попросил провести осмотр.
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Doctor.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 377,
    text:
      `
        Но когда он приблизился ко мне вплотную, все нутро задрожало, а на лице застыл ужас.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 378,
    text:
      `
        Его голова была откинута вбок, а изо рта проглядывали желто‑черные зубы. Он грубо схватил меня, начиная измерять пульс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Doctor_Transformation.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 379,
    text:
      `
        Я взглянула в большие карие глаза. Вместо привычного блеска жизни в них отражались лишь тоска и ярость.
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Doctor_Transformation.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 380,
    text:
      `
        — Н-Никола…
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    speakerL: 'Катарина',
    fullscreenObjectL: require('../../../../Media/Images/ITLH/Persons/Katarina.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 381,
    text:
      `
        Но он не слышал, уверенным шагом отдаляясь от меня. Между нами словно возник невидимый барьер.
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 382,
    text:
      `
        — Дитя…
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    speakerR: 'Доктор',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Doctor_Transformation.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 383,
    text:
      `
        В ту же секунду глаза доктора загорелись алым цветом. Он медленно, с хрустом развернулся ко мне, и его руки начали извиваться, выворачиваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Bones_Crack.mp3'),
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Peril.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 384,
    text:
      `
        Кожа на лице пошла трещинами, обнажая что‑то темное и мерзкое, а затем начала сползать, как старая штукатурка.
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Monster.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 385,
    text:
      `
        Я попятилась и уперлась в стену. Существо подошло ко мне и, взяв за руку, прошипело:
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 386,
    text:
      `
        — Мы нашли тебя… И везде найдем.
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    speakerR: 'Монстр',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Monster.png'),
    achievement: { story: EStoriesEn.ITLH, name: 'Monster' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 387,
    text:
      `
        — Ни время, ни пространство не укроют от нашего взора! 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    speakerR: 'Монстр',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Monster.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 388,
    text:
      `
        Мельком я увидела, как на моем запястье появилось черное пятно. По коже побежали ледяные мурашки, будто сама тьма проникала под кожу.
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 389,
    text:
      `
        Слишком много потрясений обрушилось разом. Мозг отказывался воспринимать происходящее, а реальность стала расплываться.
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 390,
    text:
      `
        Отдаленно я слышала, как Никола истошно кричит, но мне не суждено было узнать, что именно.
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 391,
    text:
      `
        В ушах звенел злобный рык, погружая в темную пучину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Monster_Scream.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hospital_NY.jpg')
  },

  {
    id: 392,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 393 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 393,
    text:
      `
        Спертый, затхлый воздух заставил закашляться. Каждый вдох отдавался болью в груди, а глаза слезились.
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    ambient: require('../../../../Media/Audio/ITLH/Ambient/Mystic.mp3'),
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    effect: 'Красная вспышка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 394,
    text:
      `
        Я рухнула в ледяную воду с глухим всплеском, инстинктивно хватаясь за горло, будто это могло помочь восстановить дыхание.
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Water_Splash.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 395,
    text:
      `
        «Я вернулась? Одежда…»
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 396,
    text:
      `
        Руки исследовали тело, стараясь опознать родные изгибы.
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 397,
    text:
      `
        «Да!»
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 398,
    text:
      `
        Обрывки пережитого перемещения во времени не преследовали, оставляя наедине с растущей тревогой.
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 399,
    text:
      `
        Сознание, оставшись один на один с реальностью, отчаянно пыталось найти объяснение происходящему.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 400,
    text:
      `
        «Что это, мать его, было…»
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 401,
    text:
      `
        «Почему я опять здесь? И действительно ли находилась в прошлом?»
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 402,
    text:
      `
        Голова отказывалась о чем-либо рассуждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 403,
    text:
      `
        «Хочу домой».
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 404,
    text:
      `
        Нехотя встала и пошла в неизвестном направлении. Страх парализовывал, но воля заставляла делать шаг за шагом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 405,
    text:
      `
        Этот мир продолжал давить своей атмосферой, но я чувствовала, что если остановлюсь сейчас, мне конец.
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 406,
    text:
      `
        Казалось, проходили минуты, часы, но пейзаж не менялся.
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 407,
    text:
      `
        От монотонности кружилась голова, а разум начинал играть со мной злые шутки, подбрасывая иллюзорные образы движения там, где его не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 408,
    text:
      `
        «Отсюда должен быть выход! В прошлый раз я видела свечение… А что искать сейчас?»
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 409,
    text:
      `
        И будто вселенная услышала мой зов: впереди начало мелькать отражение некой двери.
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 410,
    text:
      `
        Провернув ручку, увидела то, что потрясло до глубины души.
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Stars_Darkness.jpg')
  },

  {
    id: 411,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 412 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 412,
    text:
      `
        В воздухе витали едва уловимые ароматы незнакомых цветов и чего‑то древнего, забытого временем.
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Goddess_Cage.mp3'),
    ambient: require('../../../../Media/Audio/ITLH/Ambient/Ancient_Whisper.mp3'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 413,
    text:
      `
        «Это место…»
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 414,
    text:
      `
        Взгляд взметнулся вверх, завороженный сиянием ветвей — они тянулись в бесконечность, пытаясь коснуться самих звезд.
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 415,
    text:
      `
        Древо пульсировало энергией, разливаясь по воздуху электрическими волнами. Я слышала шепот бесчисленных голосов, доносящихся отовсюду.
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 416,
    text:
      `
        Они шептали что-то на неизвестном языке, пытаясь достучаться до моей души.
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 417,
    text:
      `
        «Я не понимаю…»
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 418,
    text:
      `
        Однако главным центром композиции было вовсе не древо, а скованная девушка, сидящая около его ветвей.
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 419,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/ITLH/Cutscenes/Goddess_Cage.mp4'), goTo: 420 },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 420,
    text:
      `
        Длинные черные волосы струились по песку. Фигура пленницы застыла в безмолвном крике, отражая все одиночество этого мира.
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Evil_Goddess_Eyes.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 421,
    text:
      `
        Ее одежда казалась отголоском давно ушедшей эпохи.
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Evil_Goddess_Eyes.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 422,
    text:
      `
        Я боялась даже шага ступить, чувствуя, как каждый вдох отзывается дрожью в коленях.
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 423,
    text:
      `
        «Кто она? Почему ее тело окружают странные цепи?»
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 424,
    text:
      `
        Девушка оставалась неподвижна. Неизвестно, сколько она так просидела, но ее поза был подобно каменному изваянию.
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 425,
    text:
      `
        Инстинкты подсказывали, что она ничего не сделает, однако уверенности в этом не было абсолютно.
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 426,
    text:
      `
        Подобно немой пленнице, я сама застыла.
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 427,
    text:
      `
        «Раз я не могу подойти ближе, может попробовать заговорить?»
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 428,
    text:
      `
        Собрав немного смелости, я сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 429,
    text:
      `
        — Простите, вы меня слышите? Понимаете?
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 430,
    text:
      `
        Глаза девушки вспыхнули. Два фиолетовых зрачка неожиданно посмотрели на меня. Их оттенок одновременно восхищал своей глубиной и пугал ледяной настойчивостью.
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 431,
    text:
      `
        — …
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    speakerR: 'Пленница',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Evil_Goddess.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 432,
    text:
      `
        Она рванулась ко мне, протянув руку с отчаянием человека, который тонет и хватается за любую соломинку надежды.
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Cage_Moves.mp3'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 433,
    text:
      `
        Девушка продолжала молчать, а я застыла в нерешительности. Неловкая пауза повисла в воздухе, пока мой робкий голос не разорвал ее:
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Evil_Goddess.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 434,
    text:
      `
        — Кто вы? Почему здесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 435,
    text:
      `
        Вопросы оставались без ответа. Я начинала терять терпение, но ничего не могла противопоставить неизведанной силе.
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 436,
    text:
      `
        Атмосфера начала сгущаться, пока мы пожирали друг друга взглядами. Ее взгляд был кинжалом, мой — мольбой об ответах.
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 437,
    text:
      `
        — Освободи меня!
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    speakerR: 'Пленница',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Evil_Goddess.png'),
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 438,
    text:
      `
        Властный, приказной тон эхом отозвался в моих мыслях.
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 439,
    text:
      `
        Я попятилась, чувствуя, как холод ползет по спине, и уперлась в дверь. Но она растворилась, заставляя рухнуть в бездонную пустоту.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    effect: 'Дымка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Goddess_Cage.jpg')
  },

  {
    id: 440,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    interruptiveFrame: { goTo: 441 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 441,
    text:
      `
        Я открыла глаза, пытаясь восстановить дыхание. Пробуждение было резким и непонятным, впрочем, как и все происходящее до.
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_University.mp3'),
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    stats: [
      { story: EStoriesEn.ITLH, value: -100500, category: 'Item', id: 'Ticket' },
      { story: EStoriesEn.ITLH, value: -100500, category: 'Item', id: 'Poiton' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 442,
    text:
      `
        Клубок запутанных мыслей отступал на второй план, когда передо мной предстал знакомый студенческий медпункт.
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 443,
    text:
      `
        «Значит, кошмар закончился? Теперь я наконец-то могу спокойно вздохнуть».
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 444,
    text:
      `
        «Разумеется, ненадолго, ведь впереди будет больше потрясений, но хотя бы сейчас…»
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 445,
    text:
      `
        «Выдохни, $Имя Игрока$!»
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 446,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 447,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Person', id: 'Scarlett' }) >= 1
        }
      },
      {
        goTo: 453,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Suspicion' }) <= 0
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 447,
    text:
      `
        Нежные знакомые прикосновения обняли меня. А затем беспокойный голос произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 448,
    text:
      `
        — Ты в порядке, $Имя Игрока$?
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Sad.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 449,
    text:
      `
        — Господи, если будешь так пугать, я быстрее стану седой…
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Sad.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 450,
    text:
      `
        Она сжимала мою руку, вглядываясь, пытаясь понять, в порядке ли я.
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 451,
    text:
      `
        — Привет, Скар. Все хорошо, вроде отпустило!
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 452,
    text:
      `
        Мне была невероятно приятна и важна поддержка подруги в такие моменты.
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    message: 'Вы со Скарлетт друзья, она переживала.',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 453,
    text:
      `
        Я почувствовала, как чья-то маленькая рука коснулась плеча и слегка сжала.
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 454,
    text:
      `
        — Ты в порядке, $Имя Игрока$?
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 455,
    text:
      `
        — Как это понимать? Заболела и не сказала… Не бережешь себя!
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 456,
    text:
      `
        Легкий укор со стороны подруги заставлял окончательно проснуться и слабо улыбнуться.
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 457,
    text:
      `
        — Да уж… Вроде отпустило!
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 458,
    text:
      `
        И пусть она порой демонстрировала сдержанность и даже холодность, мне было приятно осознавать, что она рядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    message: 'Вы со Скарлетт не очень близки, но она все равно переживала.',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 459,
    text:
      `
        Неожиданные головокружения и тошнота накатывали волной, заставив оставить попытки присесть на кровать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 460,
    text:
      `
        Осмотрев помещение, я с трудом сфокусировала взгляд и заметила, что в медпункте стоят еще двое: профессор Нэйтан и мой одногруппник Леон, брат профессора.
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 461,
    text:
      `
        Заметив, что я пришла в себя, парень подошел ко мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: 0, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 462,
    text:
      `
        — Стоило оставить тебя ненадолго, как уже в обмороки падаешь…
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 463,
    text:
      `
        Его рука небрежно прошлась по моей макушке, взъерошивая волосы.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 464,
    text:
      `
        — Цела? Судя по словам Нэйтана, спала ты где-то минут сорок.
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 465,
    text:
      `
        В последнее время нам не выпадал шанс нормально пообщаться. По всей видимости Леон был занят, занятия не посещал.
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 466,
    text:
      `
        «Зато как всегда выглядит симпатично. Чтобы у него там не случилось — за собой следить любит».
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 467,
    text:
      `
        Он всегда был расположен ко мне. Но его характер порой оставался загадкой: Леон мог быть заботливым и внимательным, а в следующий момент — отстраненным и резким.
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 468,
    text:
      `
        — Необязательно было портить прическу…
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 469,
    text:
      `
        Я буркнула, демонстративно отворачиваясь. Но Леон лишь рассмеялся и спокойно сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 470,
    text:
      `
        — И даже после обморока, она все думает о внешнем виде…
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 471,
    text:
      `
        Вперед вышел профессор Нэйтан, который осмотрел меня с ног до головы.
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 472,
    text:
      `
        — Как самочувствие? Давай я позову медсестру.
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 473,
    text:
      `
        Я отрицательно покачала головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 474,
    text:
      `
        — Все в порядке. Мне уже лучше. Просто хочется поехать домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 475,
    text:
      `
        Хотелось поговорить и на другие темы.
      `,
    buttons: [
      {
        text: 'Леон, как ты здесь оказался?',
        goTo: 476
      },
      {
        text: 'Профессор, простите, что сорвала пару',
        goTo: 485
      },
      {
        text: 'Скарлетт, спасибо за поддержку',
        goTo: 490
      },
      {
        text: 'Ох, голова сама не своя',
        goTo: 496
      }],
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 476,
    text:
      `
        Парень неловко почесал затылок.
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 477,
    text:
      `
        — На самом деле случайно. Мне нужно было поговорить с Нэйтаном, а тут такое…
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 478,
    text:
      `
        — Помог перенести тебя сюда, а дальше оставалось только ждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 479,
    text:
      `
        — Здорово, что ты наконец-то решил показаться…
      `,
    buttons: [
      {
        text: '',
        goTo: 480
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 480,
    text:
      `
        — Видимо, только в обморок и падай, призывая вашу занятую личность.
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 481,
    text:
      `
        Леон улыбнулся и ехидно прищурил глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 482,
    text:
      `
        — Раз есть способности острить, значит, дело идет к поправке!
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 483,
    text:
      `
        Парень легонько сжал мою руку своими цепкими пальцами.
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 484,
    text:
      `
        — Крепись, боец!
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    message: 'Леон искренне беспокоится о вашем самочувствии.',
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 485,
    text:
      `
        Нэйтан удивленно посмотрел на меня, а затем недовольно покачал головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 486,
    text:
      `
        — Не говори глупостей. Мы успеем провести еще ни одну лекцию.
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 487,
    text:
      `
        — Главное, поправляйся скорее.
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 488,
    text:
      `
        Профессор скрестил руки и слегка улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 489,
    text:
      `
        — Будь сильнее обстоятельств!
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    message: 'Даже в таком состоянии, вы думаете об учебе. Нэйтан горд за свою прилежную ученицу.',
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 490,
    text:
      `
        Девушка подошла ближе, легонько ткнув меня в бок.
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 491,
    text:
      `
        — Главное, что все позади. Ты очнулась, а далее уж разберемся.
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 492,
    text:
      `
        — В следующий раз будь внимательнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 493,
    text:
      `
        — От одной мысли, что ты можешь потерять сознание в любом месте…
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 494,
    text:
      `
        Она остановила себя и вновь тепло улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 495
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 495,
    text:
      `
        — Ничего! Все хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    message: 'Скарлетт приятно находиться рядом с вами.',
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 496,
    text:
      `
        Присутствующие переглянулись. Было заметно — каждый переживает за меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 497
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 497,
    text:
      `
        — Разумеется, тебе будет не очень. Хорошо хоть кровь из носа быстро остановилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 498,
    text:
      `
        — К счастью, ее и не очень много было.
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 499,
    text:
      `
        — Я успела поместить голову в правильное положение, поэтому обошлось без осложнений.
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 500,
    text:
      `
        Нэйтан поправил галстук и сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 501,
    text:
      `
        — Медсестра осмотрела тебя и поставила диагноз: переутомление. Скорую вызывать не стали. Но у тебя довольно бледное лицо… Может все же стоит посетить больницу?
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 502,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 503,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Suspicion' }) >= 2
        }
      },
      {
        goTo: 505,
        condition: () => {
          return true
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 503,
    text:
      `
        При упоминании медицинского учреждения все тело покрылось непроизвольными мурашками.
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 504,
    text:
      `
        «Чтобы встретиться с очередным монстром? Ну уж нет, хватит с меня…»
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 505,
    text:
      `
        — Я бы хотела поехать домой. Там отдохну, а далее решу, как лучше поступить.
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 506,
    text:
      `
        Нэйтан сомневался в правильности моих действий, но более спорить не стал.
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 507,
    text:
      `
        — Есть ли кто-нибудь готовый отвезти тебя домой? 
      `,
    buttons: [
      {
        text: '',
        goTo: 508
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 508,
    text:
      `
        Рядом с кушеткой стояла тумбочка, на которой лежал мой телефон. Я несколько раз набрала номер отца — в последнее время он был менее занят на работе, чем мама.
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 509,
    text:
      `
        Но ответом были только длинные гудки.
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Car_Alert.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 510,
    text:
      `
        Леон на секунду задумался, а затем уверенно произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 511,
    text:
      `
        — Я возьму машину Нэйтана и отвезу тебя. Ты не против, братишка?
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 512,
    text:
      `
        Нэйтан удовлетворительно кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 513,
    text:
      `
        — Не против. У меня все равно еще работа. Только обратно привези транспорт в целости и сохранности.
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 514,
    text:
      `
        — Обещаю ездить как паинька, соблюдая все правила дорожного движения!
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 515,
    text:
      `
        На сарказм брата Нэйтан никак не отреагировал, вместо этого обратился ко мне:
      `,
    buttons: [
      {
        text: '',
        goTo: 516
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 516,
    text:
      `
        — Тебе нужно время, чтобы собраться.
      `,
    buttons: [
      {
        text: '',
        goTo: 517
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 517,
    text:
      `
        Скарлетт подхватила высказывание профессора.
      `,
    buttons: [
      {
        text: '',
        goTo: 518
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 518,
    text:
      `
        — Мы подождем снаружи.
      `,
    buttons: [
      {
        text: '',
        goTo: 519
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 519,
    text:
      `
        Я кивнула, погружаясь в свои мысли. Медленно встала, подхватила рюкзак и тщательно проверила, все ли вещи на месте.
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: 0, category: 'Item', id: 'Money' },
      { story: EStoriesEn.ITLH, value: 0, category: 'Item', id: 'Phone' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 520,
    text:
      `
        Преодолевая усталость, подошла к раковине, чтобы освежиться. Я мыла руки, как вдруг заметила черное пятно на запястье.
      `,
    buttons: [
      {
        text: '',
        goTo: 1001
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 1001,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { buttonText: 'Рассмотреть', image: require('../../../../Media/Images/ITLH/Objects/Hand_Mark.png'), goTo: 521 },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 521,
    text:
      `
        «Какого…»
      `,
    buttons: [
      {
        text: '',
        goTo: 522
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 522,
    text:
      `
        Судорожными движениями я попробовала оттереть его: мылом, спиртом — но оно не исчезало.
      `,
    buttons: [
      {
        text: '',
        goTo: 523
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 523,
    text:
      `
        «Пора перестать сомневаться, что я действительно была в прошлом».
      `,
    buttons: [
      {
        text: '',
        goTo: 524
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 524,
    text:
      `
        «Нездоровая история… Как можно поверить в такое?»
      `,
    buttons: [
      {
        text: '',
        goTo: 525
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 525,
    text:
      `
        В порыве раздражения я топнула ногой, решительно направляясь к выходу из комнаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 526
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Foot_Tap.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 526,
    text:
      `
        «Хватит с меня! Просто поеду домой спать. Надоело…»
      `,
    buttons: [
      {
        text: '',
        goTo: 527
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Hospital.jpg')
  },

  {
    id: 527,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 528 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 528,
    text:
      `
        Все ждали снаружи. При виде моей неуверенной походки, с тревогой в глазах, Нэйтан произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 529
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 529,
    text:
      `
        — Давай кто-нибудь проводит тебя до машины. Не стоит перенапрягаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 530
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 530,
    text:
      `
        После этого он передал ключи от машины брату и вместе со всеми вновь обратил на меня внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 531
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 531,
    text:
      `
        Я выбрала…
      `,
    buttons: [
      {
        text: 'Леона',
        goTo: 532
      },
      {
        text: 'Нэйтана',
        goTo: 574
      },
      {
        text: 'Скарлетт',
        goTo: 631
      },
      {
        text: 'Пойти одной',
        goTo: 676
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 532,
    text:
      `
        Нэйтан ушел на занятия, Скарлетт попрощалась, веля по приезде домой как следует отдохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 533
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: 1, category: 'Choice', id: 'HelpFromLeon' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 533,
    text:
      `
        Леон медленно шел со мной по коридору, а затем предложил:
      `,
    buttons: [
      {
        text: '',
        goTo: 534
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Leon.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 534,
    text:
      `
        — Давай помогу, пока ты тут не развалилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 535,
    text:
      `
        И он…
      `,
    buttons: [
      {
        text: 'Приобнял за талию',
        goTo: 536
      },
      {
        text: 'Придержал за локоть',
        goTo: 553
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 536,
    text:
      `
        Крепкая рука парня взяла мою талию, поддерживая равновесие.
      `,
    buttons: [
      {
        text: '',
        goTo: 537
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 537,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/ITLH/Cutscenes/Leon_Help.mp4'), goTo: 538 },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 538,
    text:
      `
        От неожиданного прикосновения вспыхнули щеки, сердце непривычно быстро  забилось. Настолько странным и волнующим оказалось ощущение.
      `,
    buttons: [
      {
        text: '',
        goTo: 539
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 539,
    text:
      `
        — И что даже не пошутишь…?
      `,
    buttons: [
      {
        text: '',
        goTo: 540
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 540,
    text:
      `
        Леон ухмыльнулся, поправляя свободной рукой волосы.
      `,
    buttons: [
      {
        text: '',
        goTo: 541
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 541,
    text:
      `
        — Я по твоему не могу быть серьезным?
      `,
    buttons: [
      {
        text: '',
        goTo: 542
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 542,
    text:
      `
        — Можешь. Просто это на тебя не похоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 543
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 543,
    text:
      `
        — Хм… Давай пошучу про рыцаря на белом коне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 544
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 544,
    text:
      `
        — Как бедная, $Имя Игрока$, изволит едва плестись, не в силах дойти до машины без помощи доблестного Леона…
      `,
    buttons: [
      {
        text: '',
        goTo: 545
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 545,
    text:
      `
        Я легонько ударила его в бок, чуть нахмурившись.
      `,
    buttons: [
      {
        text: '',
        goTo: 546
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 546,
    text:
      `
        — Прекрати!
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 547,
    text:
      `
        — Сама же попросила.
      `,
    buttons: [
      {
        text: '',
        goTo: 548
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 548,
    text:
      `
        Леон всегда был таким. Любил скрывать за стеной юмора свои истинные чувства.
      `,
    buttons: [
      {
        text: '',
        goTo: 549
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 549,
    text:
      `
        Я старалась незаметно поглядывать на парня, пытаясь разгадать намерения.
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 550,
    text:
      `
        Но он тут же заметил мой взгляд и рассмеялся: негромко, чуть смущенно. Смягчив тон произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 551
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 551,
    text:
      `
        — Ладно-ладно. Никакого подвоха нет. Я правда переживаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 552
      }],
    message: 'Слова Леона искренние.',
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 552,
    text:
      `
        — Лучше скажи…
      `,
    buttons: [
      {
        text: '',
        goTo: 559
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 553,
    text:
      `
        Леон аккуратно держал локоть, придавая уверенности походке. Его поддержка была как никогда кстати, учитывая мое слабое состояние.
      `,
    buttons: [
      {
        text: '',
        goTo: 554
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 554,
    text:
      `
        Мы шли рядом, и я поймала себя на мысли, что парень сегодня молчалив и сосредоточен.
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 555,
    text:
      `
        — И что даже не пошутишь…?
      `,
    buttons: [
      {
        text: '',
        goTo: 556
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 556,
    text:
      `
        Леон ухмыльнулся, поправляя свободной рукой волосы.
      `,
    buttons: [
      {
        text: '',
        goTo: 557
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 557,
    text:
      `
        — Я по твоему не могу быть серьезным?
      `,
    buttons: [
      {
        text: '',
        goTo: 558
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 558,
    text:
      `
        — Лучше скажи…
      `,
    buttons: [
      {
        text: '',
        goTo: 559
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 559,
    text:
      `
        — Как это понимать? Ты действительно заболела или что?
      `,
    buttons: [
      {
        text: '',
        goTo: 560
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 560,
    text:
      `
        «Да так, всего лишь, видимо, путешествую во времени…»
      `,
    buttons: [
      {
        text: '',
        goTo: 561
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 561,
    text:
      `
        Но вслух, разумеется, произнесла другое:
      `,
    buttons: [
      {
        text: '',
        goTo: 562
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 562,
    text:
      `
        — В последнее время много работаю. К тому же стараюсь усерднее заниматься.
      `,
    buttons: [
      {
        text: '',
        goTo: 563
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 563,
    text:
      `
        Леон с недоверием посмотрел на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 564
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 564,
    text:
      `
        — Ты далеко не прилежная ученица, какой пытаешься казаться. Особенно перед моим братом.
      `,
    buttons: [
      {
        text: '',
        goTo: 565
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 565,
    text:
      `
        — И уж я никогда не поверю, что дело только в этом.
      `,
    buttons: [
      {
        text: '',
        goTo: 566
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 566,
    text:
      `
        — А первую часть фразы ты пропустил мимо ушей? Говорю же, работа в том числе.
      `,
    buttons: [
      {
        text: '',
        goTo: 567
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 567,
    text:
      `
        — Прекрасно слышал. Не сочти за недоверие, но попахивает обманом.
      `,
    buttons: [
      {
        text: '',
        goTo: 568
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 568,
    text:
      `
        Я рассеянно посмотрела на него.
      `,
    buttons: [
      {
        text: '',
        goTo: 569
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 569,
    text:
      `
        — Тогда что же со мной произошло на твой взгляд?
      `,
    buttons: [
      {
        text: '',
        goTo: 570
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 570,
    text:
      `
        — Какой‑нибудь парень вскружил тебе голову? Или очередная тусовка, на которую ты меня не позвала?
      `,
    buttons: [
      {
        text: '',
        goTo: 571
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 571,
    text:
      `
        — Я знаю разные твои стороны, так что давай не будем притворяться.
      `,
    buttons: [
      {
        text: '',
        goTo: 572
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 572,
    text:
      `
        «Какой же ты дурак, Леон…»
      `,
    buttons: [
      {
        text: '',
        goTo: 573
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 573,
    text:
      `
        Я не стала ничего отвечать. Вскоре мы дошли до выхода из университета и сели в машину Нэйтана.
      `,
    buttons: [
      {
        text: '',
        goTo: 950
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 574,
    text:
      `
        Леон направился к машине, Скарлетт попрощалась, веля по приезде домой как следует отдохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 575
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: 1, category: 'Choice', id: 'HelpFromNeitan' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 575,
    text:
      `
        Профессор начал идти со мной по коридору, а затем предложил:
      `,
    buttons: [
      {
        text: '',
        goTo: 576
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Neitan.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 576,
    text:
      `
        — Я помогу тебе идти увереннее…
      `,
    buttons: [
      {
        text: '',
        goTo: 577
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 577,
    text:
      `
        И он…
      `,
    buttons: [
      {
        text: 'Приобнял за талию',
        goTo: 578
      },
      {
        text: 'Придержал за локоть',
        goTo: 592
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 578,
    text:
      `
        Поддержка Нэйтана помогла, дарила ощущение защищенности. Я чувствовала, как его руки крепко держали, направляя, не давая оступиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 579
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 579,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/ITLH/Cutscenes/Neitan_Help.mp4'), goTo: 580 },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 580,
    text:
      `
        Коридоры университета пустовали, так как скоро должны были начаться занятия, поэтому мы избежали лишних взглядов.
      `,
    buttons: [
      {
        text: '',
        goTo: 581
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 581,
    text:
      `
        Я робко взглянула на него и уточнила:
      `,
    buttons: [
      {
        text: '',
        goTo: 582
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 582,
    text:
      `
        — Это ничего, что вы помогаете мне? Тем более занятия…
      `,
    buttons: [
      {
        text: '',
        goTo: 583
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 583,
    text:
      `
        — Ты слишком много думаешь. Я так решил, значит, все нормально.
      `,
    buttons: [
      {
        text: '',
        goTo: 584
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 584,
    text:
      `
        Я смутилась, сердце застучало быстрее от уверенного тона преподавателя.
      `,
    buttons: [
      {
        text: '',
        goTo: 585
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 585,
    text:
      `
        В голове роились интригующие мысли, переплетаясь с робкими надеждами.
      `,
    buttons: [
      {
        text: '',
        goTo: 586
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 586,
    text:
      `
        «Профессор помогает своей ученице в трудной ситуации. Казалось бы, ничего необычного…»
      `,
    buttons: [
      {
        text: '',
        goTo: 587
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 587,
    text:
      `
        Однако невольно вспоминались самые разнообразные сцены из романтических фильмов на подобную тематику. 
      `,
    buttons: [
      {
        text: '',
        goTo: 588
      }],
    message: 'Ваше сердце пропустило удар. ',
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 588,
    text:
      `
        Нэйтан же шел с невозмутимым лицом. Возникало ощущение, что он выполнял свои стандартные обязанности.
      `,
    buttons: [
      {
        text: '',
        goTo: 589
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 589,
    text:
      `
        «Вряд ли я для него какая-то особенная. Нафантазировала, дура…»
      `,
    buttons: [
      {
        text: '',
        goTo: 590
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 590,
    text:
      `
        Однако быть с ним рядом в такой момент, так или иначе, успокаивало.
      `,
    buttons: [
      {
        text: '',
        goTo: 591
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 591,
    text:
      `
        «Еще чуть-чуть… Не хочу, чтобы коридор заканчивался».
      `,
    buttons: [
      {
        text: '',
        goTo: 597
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 592,
    text:
      `
        Нэйтан аккуратно держал локоть, придавая уверенности походке. Его поддержка была как никогда кстати, учитывая мое слабое состояние.
      `,
    buttons: [
      {
        text: '',
        goTo: 593
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 593,
    text:
      `
        Коридоры университета пустовали, так как скоро должны были начаться занятия, поэтому мы избежали лишних взглядов.
      `,
    buttons: [
      {
        text: '',
        goTo: 594
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 594,
    text:
      `
        Я робко взглянула на него и уточнила:
      `,
    buttons: [
      {
        text: '',
        goTo: 595
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 595,
    text:
      `
        — Это ничего, что вы помогаете мне? Тем более занятия…
      `,
    buttons: [
      {
        text: '',
        goTo: 596
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 596,
    text:
      `
        — Ты слишком много думаешь. Все хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 597
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 597,
    text:
      `
        Нэйтан о чем-то стал размышлять, а затем спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 598
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 598,
    text:
      `
        — Чем же ты таким занимаешься, что теряешь сознание на моих парах? 
      `,
    buttons: [
      {
        text: '',
        goTo: 599
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 599,
    text:
      `
        «Да так, всего лишь, видимо, путешествую во времени…»
      `,
    buttons: [
      {
        text: '',
        goTo: 600
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 600,
    text:
      `
        Но вслух, разумеется, произнесла другое:
      `,
    buttons: [
      {
        text: '',
        goTo: 601
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 601,
    text:
      `
        — В последнее время много работаю. К тому же стараюсь усерднее заниматься.
      `,
    buttons: [
      {
        text: '',
        goTo: 602
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 602,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 603,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'GoSleep' }) <= 0
        }
      },
      {
        goTo: 603,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Library' }) >= 1
        }
      },
      {
        goTo: 612,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Taxi' }) >= 1
        }
      },
      {
        goTo: 612,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Library' }) <= 0
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 603,
    text:
      `
        Профессор одобрительно кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 604
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 604,
    text:
      `
        — Ты и правда подтянула успеваемость, молодец! Мельком ознакомился с твоим эссе по Николе Тесле во время занятия. Там есть интересные мысли… 
      `,
    buttons: [
      {
        text: '',
        goTo: 605
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 605,
    text:
      `
        — Кстати, почему выбрала именно его среди множества великих ученых?
      `,
    buttons: [
      {
        text: '',
        goTo: 606
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 606,
    text:
      `
        Вспомнив сегодняшнее столкновение с Теслой, я удивилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 607
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 607,
    text:
      `
        «Неужели сама судьба решила подшутить надо мной?»  
      `,
    buttons: [
      {
        text: '',
        goTo: 608
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 608,
    text:
      `
        — Я знаю, может звучать немного банально, но я хотела подсветить что-то новое.
      `,
    buttons: [
      {
        text: '',
        goTo: 609
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 609,
    text:
      `
        — Ведь люди так редко делают акценты на самом человеке, что в своей работе хотелось отразить его личностные качества.
      `,
    buttons: [
      {
        text: '',
        goTo: 610
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 610,
    text:
      `
        — Похвально…
      `,
    buttons: [
      {
        text: '',
        goTo: 611
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 611,
    text:
      `
        Задумчивость не покидала его сосредоточенного лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 624
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 612,
    text:
      `
        Профессор недовольно покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 613
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 613,
    text:
      `
        — Понимаю, работа, но твои оценки оставляют желать лучшего. К сегодняшней лекции ты даже не смогла подготовить эссе.
      `,
    buttons: [
      {
        text: '',
        goTo: 614
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Upset.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 614,
    text:
      `
        Я стыдливо опустила взгляд в пол.
      `,
    buttons: [
      {
        text: '',
        goTo: 615
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 615,
    text:
      `
        — Знаю, как это выглядит. Но правда забыла эссе дома. Я писала о Николе Тесле.
      `,
    buttons: [
      {
        text: '',
        goTo: 616
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 616,
    text:
      `
        Вспомнив сегодняшнее столкновение с Теслой, я удивилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 617
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 617,
    text:
      `
        «Неужели сама судьба решила подшутить надо мной?»
      `,
    buttons: [
      {
        text: '',
        goTo: 618
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 618,
    text:
      `
        Профессор устало вздохнул, но все же поинтересовался:
      `,
    buttons: [
      {
        text: '',
        goTo: 619
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 619,
    text:
      `
        — И почему выбрала именно его среди множества великих ученых?
      `,
    buttons: [
      {
        text: '',
        goTo: 620
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 620,
    text:
      `
        — Я знаю, может звучать немного банально, но я хотела подсветить что-то новое.
      `,
    buttons: [
      {
        text: '',
        goTo: 621
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 621,
    text:
      `
        — Ведь люди так редко делают акценты на самом человеке, что в своей работе хотелось отразить его личностные качества.
      `,
    buttons: [
      {
        text: '',
        goTo: 622
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 622,
    text:
      `
        — Похвально…
      `,
    buttons: [
      {
        text: '',
        goTo: 623
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 623,
    text:
      `
        Задумчивость не покидала его сосредоточенного лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 624
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 624,
    text:
      `
        — Профессор…?
      `,
    buttons: [
      {
        text: '',
        goTo: 625
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 625,
    text:
      `
        Нэйтан словно вышел из глубокого транса — его взгляд, только что рассеянно блуждавший где‑то далеко, внезапно сфокусировался на мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 626
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 626,
    text:
      `
        — Да, прости. Задумался о прошлом.
      `,
    buttons: [
      {
        text: '',
        goTo: 627
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 627,
    text:
      `
        Я решила слегка разрядить обстановку и осторожно пошутить.
      `,
    buttons: [
      {
        text: '',
        goTo: 628
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 628,
    text:
      `
        — Встречали Теслу лично?
      `,
    buttons: [
      {
        text: '',
        goTo: 629
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 629,
    text:
      `
        — Остроумно. Ничего такого, просто вспомнил студенческие годы.
      `,
    buttons: [
      {
        text: '',
        goTo: 630
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 630,
    text:
      `
        Вскоре мы дошли до выхода из университета. Попрощавшись, я направилась в машину.
      `,
    buttons: [
      {
        text: '',
        goTo: 950
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 631,
    text:
      `
        Леон направился к машине, Нэйтан попрощался со мной, веля по приезде домой больше отдыхать.
      `,
    buttons: [
      {
        text: '',
        goTo: 632
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: 1, category: 'Choice', id: 'HelpFromScarlett' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 632,
    text:
      `
        Скарлетт медленно шла со мной по коридору, а затем предложила:
      `,
    buttons: [
      {
        text: '',
        goTo: 633
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Scarlett.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 633,
    text:
      `
        — Ты выглядишь очень измотанной, давай помогу.
      `,
    buttons: [
      {
        text: '',
        goTo: 634
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 634,
    text:
      `
        И она…
      `,
    buttons: [
      {
        text: 'Приобняла за талию',
        goTo: 635
      },
      {
        text: 'Придержала за локоть',
        goTo: 647
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 635,
    text:
      `
        Девушка начала смело оказывать поддержку: ее рука уверенно легла на мою поясницу, синхронизируя наши шаги.
      `,
    buttons: [
      {
        text: '',
        goTo: 636
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 636,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/ITLH/Cutscenes/Scarlett_Help.mp4'), goTo: 637 },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 637,
    text:
      `
        Неожиданная помощь с ее стороны заставила щеки слегка покраснеть. В груди защемило от непривычной заботы.
      `,
    buttons: [
      {
        text: '',
        goTo: 638
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 638,
    text:
      `
        Подруга редко показывала свои нежные, уязвимые стороны. Но сейчас в ее взгляде читалась искренняя тревога.
      `,
    buttons: [
      {
        text: '',
        goTo: 639
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 639,
    text:
      `
        — Спасибо, что рядом. И извини за беспокойство.
      `,
    buttons: [
      {
        text: '',
        goTo: 640
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 640,
    text:
      `
        Улыбка замерла на спокойном лице Скарлетт. Она сильнее сжала мою талию и с задором произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 641
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 641,
    text:
      `
        — Давай без драмы. Мы тебя быстро поставим на ноги и забудем о случившемся как о страшном сне.
      `,
    buttons: [
      {
        text: '',
        goTo: 642
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 642,
    text:
      `
        — Завтра уже будешь прыгать и бегать, как ни в чем не бывало!
      `,
    buttons: [
      {
        text: '',
        goTo: 643
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 643,
    text:
      `
        Я робко кивнула, продолжая идти вперед. Взгляд метался между пустым коридором и подругой, которая выглядела сосредоточенной.
      `,
    buttons: [
      {
        text: '',
        goTo: 644
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 644,
    text:
      `
        — И правда, как будешь дома, обязательно ложись спать и ни о чем не думай.
      `,
    buttons: [
      {
        text: '',
        goTo: 645
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 645,
    text:
      `
        — Нет ничего важнее здоровья!
      `,
    buttons: [
      {
        text: '',
        goTo: 646
      }],
    message: 'Скарлетт желает вам только хорошего.',
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    stats: [{ story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 646,
    text:
      `
        — Да, конечно.
      `,
    buttons: [
      {
        text: '',
        goTo: 652
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 647,
    text:
      `
        Скарлетт аккуратно держала локоть, придавая уверенности походке. Ее поддержка была как никогда кстати, учитывая мое слабое состояние.
      `,
    buttons: [
      {
        text: '',
        goTo: 648
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 648,
    text:
      `
        — Спасибо, что рядом. И извини за беспокойство.
      `,
    buttons: [
      {
        text: '',
        goTo: 649
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 649,
    text:
      `
        Улыбка замерла на спокойном лице Скарлетт.
      `,
    buttons: [
      {
        text: '',
        goTo: 650
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 650,
    text:
      `
        — Давай без драмы. Мы тебя быстро поставим на ноги и забудем о случившемся как о страшном сне.
      `,
    buttons: [
      {
        text: '',
        goTo: 651
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 651,
    text:
      `
        — Завтра уже будешь прыгать и бегать, как ни в чем не бывало!
      `,
    buttons: [
      {
        text: '',
        goTo: 652
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 652,
    text:
      `
        — И все же, $Имя Игрока$. Что с тобой случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 653
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 653,
    text:
      `
        «Да так, всего лишь, видимо, путешествую во времени…»
      `,
    buttons: [
      {
        text: '',
        goTo: 654
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 654,
    text:
      `
        Но вслух, разумеется, произнесла другое:
      `,
    buttons: [
      {
        text: '',
        goTo: 655
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 655,
    text:
      `
        — В последнее время много работаю. К тому же стараюсь усерднее заниматься.
      `,
    buttons: [
      {
        text: '',
        goTo: 656
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 656,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 657
      }],
    condition: [
      {
        goTo: 657,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'GoSleep' }) <= 0
        }
      },
      {
        goTo: 657,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Library' }) >= 1
        }
      },
      {
        goTo: 663,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Taxi' }) >= 1
        }
      },
      {
        goTo: 663,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Library' }) <= 0
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 657,
    text:
      `
        Скарлетт одобрительно кивнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 658
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 658,
    text:
      `
        — Твой энтузиазм, конечно, впечатляет. И тот факт, что ты принесла эссе на пару профессора Нэйтана, говорит о дисциплине.
      `,
    buttons: [
      {
        text: '',
        goTo: 659
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 659,
    text:
      `
        — Но если продолжишь так пренебрегать собой…
      `,
    buttons: [
      {
        text: '',
        goTo: 660
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 660,
    text:
      `
        — Ты же не железная!
      `,
    buttons: [
      {
        text: '',
        goTo: 661
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 661,
    text:
      `
        Глаза девушки смотрели на меня с волнением.
      `,
    buttons: [
      {
        text: '',
        goTo: 662
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 662,
    text:
      `
        — В общем, надеюсь, следующего раза не будет.
      `,
    buttons: [
      {
        text: '',
        goTo: 668
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 663,
    text:
      `
        Скарлетт недовольно покачала головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 664
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 664,
    text:
      `
        — Слабо верится, что твое состояние вызвано желанием учиться… Ты даже не принесла эссе к паре профессора Нэйтана.
      `,
    buttons: [
      {
        text: '',
        goTo: 665
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 665,
    text:
      `
        Я опустила голову, чувствуя, как щеки заливает краска стыда.
      `,
    buttons: [
      {
        text: '',
        goTo: 666
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 666,
    text:
      `
        — Честно, забыла его дома. Просто случайность…
      `,
    buttons: [
      {
        text: '',
        goTo: 667
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 667,
    text:
      `
        — У тебя в последнее время много таких случайностей.
      `,
    buttons: [
      {
        text: '',
        goTo: 668
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 668,
    text:
      `
        Я задумалась о своем эссе, которое было посвящено Николе Тесле.
      `,
    buttons: [
      {
        text: '',
        goTo: 669
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 669,
    text:
      `
        «Неужели сама судьба решила подшутить надо мной?»
      `,
    buttons: [
      {
        text: '',
        goTo: 670
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 670,
    text:
      `
        Скарлетт в это время о чем-то усиленно размышляла и вдруг предложила:
      `,
    buttons: [
      {
        text: '',
        goTo: 671
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 671,
    text:
      `
        — На следующей неделе нагрузка по учебе, похоже, будет не такой высокой. Можно собраться, как в старые добрые времена, устроить вечеринку.
      `,
    buttons: [
      {
        text: '',
        goTo: 672
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett_Smirk.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 672,
    text:
      `
        — Хорошая идея. Тем более и Леон вроде объявился.
      `,
    buttons: [
      {
        text: '',
        goTo: 673
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 673,
    text:
      `
        Скарлетт демонстративно закатила глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 674
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 674,
    text:
      `
        — Вот он-то и виновник твоей испорченности!
      `,
    buttons: [
      {
        text: '',
        goTo: 675
      }],
    speakerR: 'Скарлетт',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Scarlett.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 675,
    text:
      `
        Вскоре мы дошли до выхода из университета. Попрощавшись, я направилась в машину.
      `,
    buttons: [
      {
        text: '',
        goTo: 950
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 676,
    text:
      `
        Никто не был против моего решения. Леон направился к машине, Нэйтан на занятия. Скарлетт попрощалась, веля по приезде домой как следует отдохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 677
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: 1, category: 'Choice', id: 'HelpFromNobody' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 677,
    text:
      `
        Оставшись наедине с собой, мысли вернули меня к тем событиям прошлого, в которых я оказалась невольной участницей.
      `,
    buttons: [
      {
        text: '',
        goTo: 678
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 678,
    text:
      `
        На секунду показалось, что рядом со мной неторопливо идет сам Никола Тесла, мягко улыбаясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 679
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Nicola_Smile.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 679,
    text:
      `
        Его рассказы о себе, искренняя поддержка, невольно давали сил двигаться вперед, даже когда ноги подкашивались от усталости.
      `,
    buttons: [
      {
        text: '',
        goTo: 680
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 680,
    text:
      `
        «И все же интересный он человек…»
      `,
    buttons: [
      {
        text: '',
        goTo: 681
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 681,
    text:
      `
        Заворачивая за угол, я вдруг живо представила, как мне навстречу идет Уильям, раскрывая руки для утешительных объятий.
      `,
    buttons: [
      {
        text: '',
        goTo: 682
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 682,
    text:
      `
        Его обаяние и радушие были по‑настоящему заразительными, рассеивая мрачные мысли. А добрые слова внушали веру в мои силы.
      `,
    buttons: [
      {
        text: '',
        goTo: 683
      }],
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/William_Smile.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 683,
    text:
      `
        «Была бы я более уверена в себе, расспросила его как следует о поездке в Италию».
      `,
    buttons: [
      {
        text: '',
        goTo: 684
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 684,
    text:
      `
        Поток воспоминаний постепенно стих, возвращая в настоящее. Я задумалась о своем эссе для пары профессора Нэйтана, которое было посвящено Николе Тесле.
      `,
    buttons: [
      {
        text: '',
        goTo: 685
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 685,
    text:
      `
        «Неужели сама судьба решила подшутить надо мной?»
      `,
    buttons: [
      {
        text: '',
        goTo: 686
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 686,
    text:
      `
        Вскоре я дошла до выхода из университета и направилась к машине.
      `,
    buttons: [
      {
        text: '',
        goTo: 950
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/University_Corridors.jpg')
  },

  {
    id: 950,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 687 },
    ambient: require('../../../../Media/Audio/MM/Engine.mp3'),
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 687,
    text:
      `
        Леон сидел на водительском сиденье, нетерпеливо постукивая по рулю.
      `,
    buttons: [
      {
        text: '',
        goTo: 688
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Leon.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 688,
    text:
      `
        Его взгляд метнулся к пачке сигарет, небрежно брошенной рядом с ручкой переключения скоростей.
      `,
    buttons: [
      {
        text: '',
        goTo: 689
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 689,
    text:
      `
        Он взял оттуда одну и закурил. Дым на мгновение заполнил ухоженный автомобильный салон, прежде чем поток воздуха унес его в открытое окно.
      `,
    buttons: [
      {
        text: '',
        goTo: 690
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Lighter.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 690,
    text:
      `
        — Будешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 691
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 691,
    text:
      `
        — А ничего, что ты куришь в машине брата?
      `,
    buttons: [
      {
        text: '',
        goTo: 692
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 692,
    text:
      `
        Леон отмахнулся, стряхивая пепел в открытое окно.
      `,
    buttons: [
      {
        text: '',
        goTo: 693
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 693,
    text:
      `
        — Успеет выветриться.
      `,
    buttons: [
      {
        text: '',
        goTo: 694
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 694,
    text:
      `
        «Я же вроде бросаю курить…»
      `,
    buttons: [
      {
        text: 'Взять сигарету',
        goTo: 696
      },
      {
        text: 'Отказаться',
        goTo: 707
      }],
    message: 'На протяжении истории вы будете сталкиваться с различными соблазнительными выборами. Чем больше соглашаетесь — тем охотнее героиня будет сама решаться на вредные привычки.',
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 696,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 697, image: require('../../../../Media/Images/ITLH/Objects/Cigarettes.png'), buttonText: 'Покурить' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 697,
    text:
      `
        Легкие наполнились дымом, а тело расслабилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 698
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 698,
    text:
      `
        Я знала, что Леон понимает меня в этом вопросе. Еще в начале нашей студенческой жизни мы вместе впервые попробовали — тогда это казалось бунтарским жестом, способом почувствовать себя взрослее.
      `,
    buttons: [
      {
        text: '',
        goTo: 699
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 699,
    text:
      `
        И хоть ощущение было похоже на самовнушение, глубокий вдох дыма на мгновение снимал напряжение.
      `,
    buttons: [
      {
        text: '',
        goTo: 700
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 700,
    text:
      `
        — Я думал, ты бросила курить.
      `,
    buttons: [
      {
        text: '',
        goTo: 701
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 701,
    text:
      `
        Уголок моего рта дрогнул в обреченной усмешке.
      `,
    buttons: [
      {
        text: '',
        goTo: 702
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 702,
    text:
      `
        — Я тоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 703
      }],
    message: 'Вы становитесь более подверженным вредным привычкам.',
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Effect', id: 'Addiction' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 703,
    text:
      `
        Внимание переключилось на саму пачку сигарет.
      `,
    buttons: [
      {
        text: '',
        goTo: 704
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 704,
    text:
      `
        — Подожди, Леон… Откуда у тебя сигареты из Японии?
      `,
    buttons: [
      {
        text: '',
        goTo: 705
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 705,
    text:
      `
        Парень на секунду закрыл глаза, словно пожалел, что я заметила дизайн пачки.
      `,
    buttons: [
      {
        text: '',
        goTo: 706
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 706,
    text:
      `
        — Знакомая привезла.
      `,
    buttons: [
      {
        text: '',
        goTo: 710
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 707,
    text:
      `
        — Думаю, не самая лучшая идея, учитывая состояние да и желание бросить, в конце концов.
      `,
    buttons: [
      {
        text: '',
        goTo: 708
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 708,
    text:
      `
        Леон понимающе кивнул, пряча пачку из моего поля зрения.
      `,
    buttons: [
      {
        text: '',
        goTo: 709
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 709,
    text:
      `
        — Умница, что устояла. Сама знаешь, эта штука умеет уговаривать.
      `,
    buttons: [
      {
        text: '',
        goTo: 710
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 710,
    text:
      `
        Мы поехали. Стиль вождения Леона был резким и напористым: он уверенно вклинивался в потоки машин, игнорируя возмущенные сигналы соседей по полосе.
      `,
    buttons: [
      {
        text: '',
        goTo: 711
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Car_Goes.mp3'),
    stats: [
      { story: EStoriesEn.ITLH, value: 0, category: 'Effect', id: 'Addiction' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 711,
    text:
      `
        Я решила нарушить тишину и поговорить с парнем, ведь давно не слышала от него новостей.
      `,
    buttons: [
      {
        text: '',
        goTo: 712
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 712,
    text:
      `
        — Леон…
      `,
    buttons: [
      {
        text: 'Как дела?',
        goTo: 713,
        func: () => {
          scenarioManager.changeSceneButtonStatus(712, 0, false)
        }
      },
      {
        text: 'Вы с Нэйтаном также ругаетесь?',
        goTo: 724,
        func: () => {
          scenarioManager.changeSceneButtonStatus(712, 1, false)
        }
      },
      {
        text: 'Все еще работаешь?',
        goTo: 730,
        func: () => {
          scenarioManager.changeSceneButtonStatus(712, 2, false)
        }
      },
      {
        text: 'Далее',
        goTo: 738,
        isActive: false
      }],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(712)
    },
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 713,
    text:
      `
        Самый простой вопрос заставил друга усмехнуться. Не отводя взгляда от дороги, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 714
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 714,
    text:
      `
        — Что ж, как обычно, неплохо. Думаю много о будущем в последнее время, поскольку окончание университета не за горами.
      `,
    buttons: [
      {
        text: '',
        goTo: 715
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 715,
    text:
      `
        — В остальном тихо и спокойно.
      `,
    buttons: [
      {
        text: '',
        goTo: 716
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 716,
    text:
      `
        В словах чувствовалась сдержанность, но я привыкла видеть его таким.
      `,
    buttons: [
      {
        text: '',
        goTo: 717
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 717,
    text:
      `
        Леон редко делился тем, что у него на самом деле творилось в голове. Лишь самым необходимым для поддержания разговора.
      `,
    buttons: [
      {
        text: '',
        goTo: 718
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 718,
    text:
      `
        Я порой ловила себя на мысли, что пытаюсь прочесть его по едва заметным жестам: как он сжимает руль, как отводит взгляд в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 719
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 719,
    text:
      `
        Но у него была и прекрасная черта — отличный слушатель, который всегда понимал и принимал тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 720
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 720,
    text:
      `
        — Как обычно немногословно…
      `,
    buttons: [
      {
        text: '',
        goTo: 721
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 721,
    text:
      `
        — Не переживай. У тебя еще будет время помучить меня вопросами.
      `,
    buttons: [
      {
        text: '',
        goTo: 722
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 722,
    text:
      `
        — Тем более, помнится, я торчу тебе кофе…
      `,
    buttons: [
      {
        text: '',
        goTo: 723
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 723,
    text:
      `
        — Потом сама же устанешь от моего общества.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.manageDialog(712, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(712, 723)
    },
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 724,
    text:
      `
        Леон устало вздохнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 725
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 725,
    text:
      `
        — Ничего не поменялось. Брат продолжает строить из себя взрослого и командовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 726
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 726,
    text:
      `
        — Поэтому, да. Сохраняем стабильность и напряженные отношения.
      `,
    buttons: [
      {
        text: '',
        goTo: 727
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 727,
    text:
      `
        Насколько я знала, их родители погибли, когда они были маленькими. Нэйтан взял ответственность за брата.
      `,
    buttons: [
      {
        text: '',
        goTo: 728
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 728,
    text:
      `
        Однажды, Леон рассказывал, что профессор нередко перебарщивает с контролем.
      `,
    buttons: [
      {
        text: '',
        goTo: 729
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 729,
    text:
      `
        Он не слишком любил вдаваться в подробности их отношений, но было очевидно: они любят друг друга, просто каждый по‑своему.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.manageDialog(712, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(712, 729)
    },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 730,
    text:
      `
        — Не поверишь, но как раз недавно уволили из одного магазинчика…
      `,
    buttons: [
      {
        text: '',
        goTo: 731
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 731,
    text:
      `
        Я удивленно вскинула бровь, ожидая продолжения истории. 
      `,
    buttons: [
      {
        text: '',
        goTo: 732
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 732,
    text:
      `
        — Все-то вам интересно, девушка…
      `,
    buttons: [
      {
        text: '',
        goTo: 733
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 733,
    text:
      `
        — Нужны были срочно деньги, поэтому годилась любая подработка.
      `,
    buttons: [
      {
        text: '',
        goTo: 734
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 734,
    text:
      `
        — Но им не понравилось, как я выставил за дверь одного особенно агрессивного покупателя.
      `,
    buttons: [
      {
        text: '',
        goTo: 735
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 735,
    text:
      `
        — На следующий день, важная мадам позвонила и заявила, что подобный стиль не соответствует корпоративной этике.
      `,
    buttons: [
      {
        text: '',
        goTo: 736
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 736,
    text:
      `
        — Так ты пропадал все это время, потому что работал?
      `,
    buttons: [
      {
        text: '',
        goTo: 737
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 737,
    text:
      `
        — Вроде того.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.manageDialog(712, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(712, 737)
    },
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 738,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 739
      }],
    interruptiveFrame: { goTo: 739 },
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 739,
    text:
      `
        Машина остановилась около моего дома, и я поспешила покинуть ее.
      `,
    buttons: [
      {
        text: '',
        goTo: 740
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 740,
    text:
      `
        «Никогда бы не подумала, что буду так рада видеть эту спокойную и привычную обстановку».
      `,
    buttons: [
      {
        text: '',
        goTo: 741
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 741,
    text:
      `
        — Ты как? Дальше справишься?
      `,
    buttons: [
      {
        text: '',
        goTo: 742
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 742,
    text:
      `
        Я собиралась ответить, как вдруг услышала громкий хлопок входной двери соседнего дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 743
      }],
    simple: require('../../../../Media/Audio/ITLH/Sounds/Door_Slap.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 743,
    text:
      `
        «Шерил?»
      `,
    buttons: [
      {
        text: '',
        goTo: 744
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 744,
    text:
      `
        Девушка явно была на взводе. Но, увидев меня, она заметно расслабилась — плечи опустились, на губах появилась робкая улыбка. Шерил шагнула ближе и поздоровалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 745
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 745,
    text:
      `
        — Ты чего? Что случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 746
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 746,
    text:
      `
        — Да как обычно один придурок мозги выносит. Ничего интересного.
      `,
    buttons: [
      {
        text: '',
        goTo: 747
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 747,
    text:
      `
        Она посмотрела за мою спину, и ее глаза расширились от удивления.
      `,
    buttons: [
      {
        text: '',
        goTo: 748
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 748,
    text:
      `
        — Леон? Давненько тебя не было видно.
      `,
    buttons: [
      {
        text: '',
        goTo: 749
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 749,
    text:
      `
        — Привет, Шер! Как всегда сияешь от счастья.
      `,
    buttons: [
      {
        text: '',
        goTo: 750
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon_Smile.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 750,
    text:
      `
        — Но почему ты… Погодите. $Имя Игрока$, разве занятия уже закончились?
      `,
    buttons: [
      {
        text: '',
        goTo: 751
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 751,
    text:
      `
        Я нервно усмехнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 752
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 752,
    text:
      `
        — Да тут такое дело… Давай пойдем ко мне домой, расскажу.
      `,
    buttons: [
      {
        text: '',
        goTo: 753
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 753,
    text:
      `
        Я обернулась к Леону и сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 754
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 754,
    text:
      `
        — Спасибо большое, что подвез. Не буду тебя больше задерживать.
      `,
    buttons: [
      {
        text: '',
        goTo: 755
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 755,
    text:
      `
        — Береги себя! Спишемся.
      `,
    buttons: [
      {
        text: '',
        goTo: 756
      }],
    speakerR: 'Леон',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Leon.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 756,
    text:
      `
        После этих слов он сел в машину и уехал.
      `,
    buttons: [
      {
        text: '',
        goTo: 757
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/House_Hero.png')
  },

  {
    id: 757,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 758 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 758,
    text:
      `
        Родителей дома еще не было. Мы прошли в комнату, и я устало села на кровать, чувствуя, как ноют мышцы после тяжелого дня.
      `,
    buttons: [
      {
        text: '',
        goTo: 759
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Cheryl.mp3'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 759,
    text:
      `
        Шерил с нетерпением смотрела на меня, поэтому я быстренько рассказала про потеряю сознание на паре профессора Нэйтана.
      `,
    buttons: [
      {
        text: '',
        goTo: 760
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 760,
    text:
      `
        — Ну дела…
      `,
    buttons: [
      {
        text: '',
        goTo: 761
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 761,
    text:
      `
        — Я, конечно, знала, что ты та еще трудяга, но чтоб настолько…
      `,
    buttons: [
      {
        text: '',
        goTo: 762
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 762,
    text:
      `
        — Уж поверь, это еще не самое интересное… Хотя если расскажу, вряд ли поверишь.
      `,
    buttons: [
      {
        text: '',
        goTo: 763
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 763,
    text:
      `
        — Я не думаю, что меня будет сложно удивить, учитывая, насколько насыщенно протекает моя жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 764
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 764,
    text:
      `
        Она невольно потянулась к рукавам свитера, нервно натягивая их на кисти, чтобы получше скрыть синяки.
      `,
    buttons: [
      {
        text: '',
        goTo: 765
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 765,
    text:
      `
        «Ох, дорогая… И почему ты у меня такая упрямая…»
      `,
    buttons: [
      {
        text: '',
        goTo: 766
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 766,
    text:
      `
        — Шерил, он опять…?
      `,
    buttons: [
      {
        text: '',
        goTo: 767
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 767,
    text:
      `
        Девушка резко отвернулась, а затем мрачно опустила глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 768
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 768,
    text:
      `
        — Давай не будем…
      `,
    buttons: [
      {
        text: '',
        goTo: 769
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 769,
    text:
      `
        «И что я могу сказать?»
      `,
    buttons: [
      {
        text: 'Борись',
        goTo: 770
      },
      {
        text: 'Ладно',
        goTo: 778
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 770,
    text:
      `
        — Я не буду просто закрывать глаза, потому что тебе удобна такая позиция.
      `,
    buttons: [
      {
        text: '',
        goTo: 771
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 771,
    text:
      `
        — Сколько можно это терпеть?
      `,
    buttons: [
      {
        text: '',
        goTo: 772
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 772,
    text:
      `
        — Ты хочешь, чтобы на тебе живого места не осталось?
      `,
    buttons: [
      {
        text: '',
        goTo: 773
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 773,
    text:
      `
        Взгляд Шерил мгновенно напрягся, руки затряслись так сильно, что она поспешно сжала их в кулаки.
      `,
    buttons: [
      {
        text: '',
        goTo: 774
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 774,
    text:
      `
        — Жизнь может быть гораздо лучше и спокойнее, если ты начнешь бороться с проблемами, а не убегать от них.
      `,
    buttons: [
      {
        text: '',
        goTo: 775
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 775,
    text:
      `
        — Ты не понимаешь…
      `,
    buttons: [
      {
        text: '',
        goTo: 776
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 776,
    text:
      `
        — Я прекрасно понимаю. И прошу, чтобы ты тоже наконец-то осознала свое положение.
      `,
    buttons: [
      {
        text: '',
        goTo: 777
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 777,
    text:
      `
        Шерил ничего не ответила, опустила голову, пряча за редкими прядями волос накопившееся слезы.
      `,
    buttons: [
      {
        text: '',
        goTo: 782
      }],
    message: 'Шерил обижается на вас за горькую правду.',
    stats: [
      { story: EStoriesEn.ITLH, value: -1, category: 'Person', id: 'Cheryl' }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 778,
    text:
      `
        — Знаю, тебе нелегко.
      `,
    buttons: [
      {
        text: '',
        goTo: 779
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 779,
    text:
      `
        — Просто хотела сказать, что я рядом. Не волнуйся.
      `,
    buttons: [
      {
        text: '',
        goTo: 780
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 780,
    text:
      `
        Взгляд Шерил постепенно смягчился, в нем появилась благодарность, и она осторожно протянула ко мне руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 781
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 781,
    text:
      `
        — Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 782
      }],
    message: 'Вы не углубляетесь в проблемы Шерил и она этому рада.',
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Person', id: 'Cheryl' }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 782,
    text:
      `
        После небольшой паузы обстановка снова стала спокойной, так как я перевела разговор на отвлеченную тему.
      `,
    buttons: [
      {
        text: '',
        goTo: 783
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 783,
    text:
      `
        Но подруга нетерпеливо заерзала на кровати и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 784
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 784,
    text:
      `
        — Так что ты там хотела сказать про интересное событие?
      `,
    buttons: [
      {
        text: '',
        goTo: 785
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 785,
    text:
      `
        «Говорить правду или нет? С одной стороны, Шерил — одна из моих самых близких друзей».
      `,
    buttons: [
      {
        text: '',
        goTo: 786
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 786,
    text:
      `
        «Но даже этот факт не заставит поверить в мою невероятную историю. И я…»
      `,
    buttons: [
      {
        text: 'Рассказала правду',
        goTo: 787
      },
      {
        text: 'Сменила тему',
        goTo: 792
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 787,
    text:
      `
        Я в красочных деталях описала путешествие в прошлое и встречу с Теслой.
      `,
    buttons: [
      {
        text: '',
        goTo: 788
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: 1, category: 'Choice', id: 'TellTruth' }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 788,
    text:
      `
        Я видела на лице Шерил неподдельный интерес. Когда закончила рассказ, подруга проговорила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 789
      }],
    achievement: { story: EStoriesEn.ITLH, name: 'WantBelieve' },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 789,
    text:
      `
        — Это потрясающе, никогда не думала, что история может быть таким интересным предметом.
      `,
    buttons: [
      {
        text: '',
        goTo: 790
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 790,
    text:
      `
        — И то, на какие мысли наводит… Завидую!
      `,
    buttons: [
      {
        text: '',
        goTo: 791
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 791,
    text:
      `
        Я не удивилась, что Шерил не поверила. Но зато стало легче, ведь проговорила вслух пережитые события.
      `,
    buttons: [
      {
        text: '',
        goTo: 794
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 792,
    text:
      `
        Я неловко отмахнулась, стараясь скрыть смущение, и тихо сказала, что это уже не важно.
      `,
    buttons: [
      {
        text: '',
        goTo: 793
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 793,
    text:
      `
        Шерил, похоже, почувствовала, что здесь что‑то не так. Она задумчиво улыбнулась, внимательно посмотрела на меня, но не стала настаивать.
      `,
    buttons: [
      {
        text: '',
        goTo: 794
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 794,
    text:
      `
        — Слушай, не хочу тревожить тебя в таком состоянии, но все же скажу пару слов о нашей волонтерской деятельности.
      `,
    buttons: [
      {
        text: '',
        goTo: 795
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 795,
    text:
      `
        — Как я писала утром, завтра надо будет предоставить Джулии сценарий для сценки.
      `,
    buttons: [
      {
        text: '',
        goTo: 796
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 796,
    text:
      `
        — Это я беру на себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 797
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 797,
    text:
      `
        Я благодарно кивнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 798
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 798,
    text:
      `
        — А вот засранец Хью должен был купить материалы для нашей постановки…
      `,
    buttons: [
      {
        text: '',
        goTo: 799
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 799,
    text:
      `
        — Можешь с ним связаться и проконтролировать вопрос?
      `,
    buttons: [
      {
        text: '',
        goTo: 800
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 800,
    text:
      `
        — Да, конечно. Положись на меня!
      `,
    buttons: [
      {
        text: '',
        goTo: 801
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 801,
    text:
      `
        — Что ж, $Имя Игрока$, мне пора. Нужно еще дойти до магазина и купить продукты для ужина.
      `,
    buttons: [
      {
        text: '',
        goTo: 802
      }],
    speakerR: 'Шерил',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Cheryl.png'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 802,
    text:
      `
        На прощании Шерил крепко меня обняла и ушла.
      `,
    buttons: [
      {
        text: '',
        goTo: 804
      }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 804,
    text:
      `
        Оставшись наедине с собой, я вдруг увидела странный ключ, лежавший на краю кровати.
      `,
    buttons: [
      {
        text: '',
        goTo: 805
      }],
    music: require('../../../../Media/Audio/ITLH/Music/Theme_Nowadays.mp3'),
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 805,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 806, image: require('../../../../Media/Images/ITLH/Items/Cheryl_Key.png'), buttonText: 'Рассмотреть' },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 806,
    text:
      `
        «Хм… Шерил забыла?»
      `,
    buttons: [
      {
        text: '',
        goTo: 807
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 807,
    text:
      `
        «Ладно, разберусь потом. Где там был мой телефон…»
      `,
    buttons: [
      {
        text: '',
        goTo: 808
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01', 'Thinking') },
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Item', id: 'Cheryl_Key' }],
    imageBack: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Room') }
  },

  {
    id: 808,
    text:
      `
        Нехотя поднявшись с кровати, подошла к окну с мобильником в руках.
      `,
    buttons: [
      {
        text: '',
        goTo: 809
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 809,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 810, image: require('../../../../Media/Images/ITLH/Objects/Mobile_Hugh_Call.png'), buttonText: 'Позвонить' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 810,
    text:
      `
        Парень довольно быстро ответил и задорно произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 811
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Window_Morning.jpg')
  },

  {
    id: 811,
    text:
      `
        — $Имя Игрока$! Чем обязан?
      `,
    buttons: [
      {
        text: '',
        goTo: 812
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 812,
    text:
      `
        Я начала расспрашивать его о материалах для сценки.
      `,
    buttons: [
      {
        text: '',
        goTo: 813
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 813,
    text:
      `
        — Шерил пора начать пить успокоительные. Но не волнуйся, все помню и обязательно куплю.
      `,
    buttons: [
      {
        text: '',
        goTo: 814
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 814,
    text:
      `
        — Это наше первое выступление такого рода. Я могу понять ее волнение.
      `,
    buttons: [
      {
        text: '',
        goTo: 815
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 815,
    text:
      `
        — Не спорю, но по-моему она очень утрирует.
      `,
    buttons: [
      {
        text: '',
        goTo: 816
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 816,
    text:
      `
        — Хью… Тебе напомнить, как ты однажды обещал расклеить листовки в университете и потом об этом забыл?
      `,
    buttons: [
      {
        text: '',
        goTo: 817
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 817,
    text:
      `
        Парень нервно усмехнулся и принял свое поражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 818
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 818,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 819,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Library' }) <= 0 && statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Taxi' }) <= 0 && statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'GoSleep' }) >= 1
        }
      },
      {
        goTo: 826,
        condition: () => {
          return true
        }
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 819,
    text:
      `
        И тут я резко вспомнила слова Нэйтана, когда мы беседовали с ним в парке.
      `,
    buttons: [
      {
        text: '',
        goTo: 820
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 820,
    text:
      `
        — Кстати, ты еще общаешься с Хью? Вы, кажется, вместе занимаетесь волонтерством.
      `,
    buttons: [
      {
        text: '',
        goTo: 821
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    ghostSilhouette: true,
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 821,
    text:
      `
        — Он избегает мои пары. Можешь, пожалуйста, напомнить ему, что такими темпами я не допущу его к экзамену.
      `,
    buttons: [
      {
        text: '',
        goTo: 822
      }],
    speakerR: 'Нэйтан',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Neitan.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Park.jpg')
  },

  {
    id: 822,
    text:
      `
        — Хью, тут такое дело… Профессор Нэйтан дал понять, что у тебя могут быть проблемы, если не начнешь ходить на занятия.
      `,
    buttons: [
      {
        text: '',
        goTo: 823
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    effect: 'Белая вспышка',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 823,
    text:
      `
        Парень внимательно меня слушал, изредка вздыхая.
      `,
    buttons: [
      {
        text: '',
        goTo: 824
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 824,
    text:
      `
        — Как заноза в заднице этот профессор, черт…
      `,
    buttons: [
      {
        text: '',
        goTo: 825
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 825,
    text:
      `
        — В любом случае, спасибо, что предупредила. С меня причитается.
      `,
    buttons: [
      {
        text: '',
        goTo: 826
      }],
    speakerR: 'Хью',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Hugh.png'),
    achievement: { story: EStoriesEn.ITLH, name: 'Helper' },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 826,
    text:
      `
        Мы еще немного поговорили о работе, а затем утомленная событиями дня, я легла на кровать и мгновенно уснула.
      `,
    buttons: [
      {
        text: '',
        goTo: 827
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Hugh_Call.jpg')
  },

  {
    id: 827,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 828 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 828,
    text:
      `
        В комнате царил полумрак, когда я проснулась от легких прикосновений.
      `,
    buttons: [
      {
        text: '',
        goTo: 829
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 829,
    text:
      `
        — Ммм?
      `,
    buttons: [
      {
        text: '',
        goTo: 830
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 830,
    text:
      `
        На меня смотрела обеспокоенная мама — похоже, она уже вернулась с работы.
      `,
    buttons: [
      {
        text: '',
        goTo: 831
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 831,
    text:
      `
        — $Имя Игрока$, ты заболела? Что случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 832
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 832,
    text:
      `
        — Да, немного лихорадит… Принесешь чай, пожалуйста? Ужинать сегодня не буду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 833
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part01') },
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 833,
    text:
      `
        Она приложила тыльную сторону ладони к моему лбу.
      `,
    buttons: [
      {
        text: '',
        goTo: 834
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 834,
    text:
      `
        — Температуры вроде нет, но принесу градусник на всякий случай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 835
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 835,
    text:
      `
        — И ты бы хоть переоделась.
      `,
    buttons: [
      {
        text: '',
        goTo: 836
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 836,
    text:
      `
        Я едва заметно закатила глаза — эта чрезмерная опека иногда раздражала. Но все же послушно кивнула, не желая спорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 837
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 837,
    text:
      `
        Когда мама вышла, пришлось нехотя подойти к шкафу и выбрать домашнюю одежду.
      `,
    buttons: [
      {
        text: '',
        goTo: 838
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 838,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.ITLH, personId: 'Hero_Chapter01_Part02', goTo: 839 },
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 839,
    text:
      `
        Градусник показал небольшую температуру. После этого мама дала лекарство, принесла горячий чай и спустилась вниз готовить ужин. 
      `,
    buttons: [
      {
        text: '',
        goTo: 840
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 840,
    text:
      `
        Оставшись в одиночестве, я медленно подняла руку и взглянула на черное пятно на запястье. В голову пришла лишь одна мысль:
      `,
    buttons: [
      {
        text: '',
        goTo: 841
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 841,
    text:
      `
        «Мне надо убедиться на сто процентов».
      `,
    buttons: [
      {
        text: '',
        goTo: 842
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 842,
    text:
      `
        Я дотянулась до телефона и начала гуглить про Катарину, Теслу и ту эпоху. На глаза попалась монография одного историка, который анализировал мемуары Николы.
      `,
    buttons: [
      {
        text: '',
        goTo: 843
      }],
    imageFront: require('../../../../Media/Images/ITLH/Objects/Mobile_News.png'),
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 843,
    text:
      `
        В книге были описаны следующие мысли Теслы: 
      `,
    buttons: [
      {
        text: '',
        goTo: 844
      }],
    imageFront: require('../../../../Media/Images/ITLH/Objects/Mobile_News.png'),
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 844,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 845,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Suspicion' }) <= 1
        }
      },
      {
        goTo: 848,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ITLH, category: 'Choice', id: 'Suspicion' }) >= 2
        }
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 845,
    text:
      `
        <i>«Я как обычно встретился с Катариной ранним утром. Но она вела себя несколько странно».</i> 
      `,
    buttons: [
      {
        text: '',
        goTo: 846
      }],
    imageFront: require('../../../../Media/Images/ITLH/Objects/Mobile_News.png'),
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 846,
    text:
      `
        <i>«Словно видит меня впервые. Встреча с Уильямом прошла неплохо, но меня не отпускало чувство, что моя подруга не принадлежала себе в тот день».</i> 
      `,
    buttons: [
      {
        text: '',
        goTo: 847
      }],
    imageFront: require('../../../../Media/Images/ITLH/Objects/Mobile_News.png'),

    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 847,
    text:
      `
        <i>«Я вызвался проводить ее до дома, где мы немного пообщались с соседкой. Но Катарина резко побледнела и потеряла сознание…»</i> 
      `,
    buttons: [
      {
        text: '',
        goTo: 851
      }],
    imageFront: require('../../../../Media/Images/ITLH/Objects/Mobile_News.png'),

    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 848,
    text:
      `
        <i>«Я как обычно встретился с Катариной ранним утром. Но она вела себя очень странно».</i> 
      `,
    buttons: [
      {
        text: '',
        goTo: 849
      }],
    imageFront: require('../../../../Media/Images/ITLH/Objects/Mobile_News.png'),

    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 849,
    text:
      `
        <i>«Словно видит меня впервые. Встреча с Уильямом прошла довольно нервно, а меня не отпускало чувство, что моя подруга не принадлежала себе в тот день».</i> 
      `,
    buttons: [
      {
        text: '',
        goTo: 850
      }],
    imageFront: require('../../../../Media/Images/ITLH/Objects/Mobile_News.png'),
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 850,
    text:
      `
        <i>«Мы решили, что не будет лишним проверить состояние Катарины и дойти до больницы. Когда врач начал осматривать ее, то Катарина резко побледнела и потеряла сознание…»</i> 
      `,
    buttons: [
      {
        text: '',
        goTo: 851
      }],
    imageFront: require('../../../../Media/Images/ITLH/Objects/Mobile_News.png'),
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 851,
    text:
      `
        Я выронила телефон из рук, чувствуя, как внутри все сжимается от нарастающей тревоги. Читать дальше было невыносимо.
      `,
    buttons: [
      {
        text: '',
        goTo: 852
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 852,
    text:
      `
        «Мои действия действительно оказали влияние на настоящее? Перемещения во времени…»
      `,
    buttons: [
      {
        text: '',
        goTo: 853
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 853,
    text:
      `
        «Столько вопросов, а ответов нет… И я догадываюсь, кто бы мог на них ответить. Да только как достучаться до Проводника?»
      `,
    buttons: [
      {
        text: '',
        goTo: 854
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 854,
    text:
      `
        Сон мгновенно отступил на второй план — все мысли снова и снова возвращались к произошедшим событиям, не давая возможности сконцентрироваться на настоящем.
      `,
    buttons: [
      {
        text: '',
        goTo: 855
      }],
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 855,
    text:
      `
        «Пожалуй, спущусь к родителям. Надо отвлечься, иначе и правда сойду с ума».
      `,
    buttons: [
      {
        text: '',
        goTo: 856
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  },

  {
    id: 856,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 857 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 857,
    text:
      `
        В гостиной сидел папа и отстраненно смотрел телевизор. Мама стояла на кухне с бокалом вина.
      `,
    buttons: [
      {
        text: '',
        goTo: 858
      }],
    ambient: require('../../../../Media/Audio/ITLH/Ambient/TV_Mumble.mp3'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 858,
    text:
      `
        Увидев, как я спускаюсь, мужчина обеспокоенно посмотрел на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 859
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 859,
    text:
      `
        — Все же решила выйти из комнаты. Кушать не надумала?
      `,
    buttons: [
      {
        text: '',
        goTo: 860
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 860,
    text:
      `
        Я отрицательно покачала головой. В это время мама присоединилась к разговору.
      `,
    buttons: [
      {
        text: '',
        goTo: 861
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 861,
    text:
      `
        — Может, все же ляжешь спать?
      `,
    buttons: [
      {
        text: '',
        goTo: 862
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 862,
    text:
      `
        — Хотелось бы побыть с вами.
      `,
    buttons: [
      {
        text: '',
        goTo: 863
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 863,
    text:
      `
        Родители переглянулись, и мама села на противоположную от папы сторону дивана.
      `,
    buttons: [
      {
        text: '',
        goTo: 864
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 864,
    text:
      `
        Я расположилась между ними, чувствуя, как тяжелый слой недосказанности буквально витает в воздухе.
      `,
    buttons: [
      {
        text: '',
        goTo: 865
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 865,
    text:
      `
        Он давил своим присутствием, сгущая и без того напряженную атмосферу.
      `,
    buttons: [
      {
        text: '',
        goTo: 866
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 866,
    text:
      `
        Я вспомнила их утреннюю ссору. Захотелось высказаться, так как это порядком надоело.
      `,
    buttons: [
      {
        text: '',
        goTo: 867
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 867,
    text:
      `
        — Что между вами происходит в последнее время?
      `,
    buttons: [
      {
        text: '',
        goTo: 868
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 868,
    text:
      `
        — Неужели не видите, как постоянно грызетесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 869
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 869,
    text:
      `
        — Честно признаться, я уже устала за этим наблюдать.
      `,
    buttons: [
      {
        text: '',
        goTo: 870
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 870,
    text:
      `
        Отец сжал кулаки, мама вздохнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 871
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 871,
    text:
      `
        — $Имя Игрока$, я не виновата, что твой папа постоянно нападает без причины.
      `,
    buttons: [
      {
        text: '',
        goTo: 872
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 872,
    text:
      `
        — Прям-таки без причины.
      `,
    buttons: [
      {
        text: '',
        goTo: 873
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 873,
    text:
      `
        — Ты специально разбила мою любимую кружку. Делаешь все, чтобы доставить дискомфорт. Так еще и оборачиваешь в свою пользу.
      `,
    buttons: [
      {
        text: '',
        goTo: 874
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 874,
    text:
      `
        Мама усмехнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 875
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 875,
    text:
      `
        — Да, конечно. Будто ты вообще обращаешь хоть какое-то внимание на то, что я делаю для всех нас.
      `,
    buttons: [
      {
        text: '',
        goTo: 876
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 876,
    text:
      `
        — Для тебя все не то и не так, снова и снова…
      `,
    buttons: [
      {
        text: '',
        goTo: 877
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 877,
    text:
      `
        Я с беспокойством переводила взгляд с одного на другого, сердце билось чаще, ладони слегка вспотели.
      `,
    buttons: [
      {
        text: '',
        goTo: 878
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 878,
    text:
      `
        Эмоции зашкаливали, поэтому, не выдержав накалившейся обстановки, сказала на повышенных тонах:
      `,
    buttons: [
      {
        text: '',
        goTo: 879
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 879,
    text:
      `
        — Да сколько можно…
      `,
    buttons: [
      {
        text: '',
        goTo: 880
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 880,
    text:
      `
        И решила занять…
      `,
    buttons: [
      {
        text: 'Сторону папы',
        goTo: 881
      },
      {
        text: 'Сторону мамы',
        goTo: 888
      },
      {
        text: 'Ничью сторону',
        goTo: 895
      }],
    message: 'Ваши действия могут попытаться сплотить семью.',
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 881,
    text:
      `
        — Тебе стоит обратить внимание на свое поведение, мам.
      `,
    buttons: [
      {
        text: '',
        goTo: 882
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 882,
    text:
      `
        — Папа ничего плохого не делает, а ты устраиваешь какие-то непонятные разборки на ровном месте, выставляя его злодеем.
      `,
    buttons: [
      {
        text: '',
        goTo: 883
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 883,
    text:
      `
        Взгляд мамы поник, она встала с дивана и спокойным голосом произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 884
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 884,
    text:
      `
        — Раз в этом доме собак спускают только на меня, пожалуй, не буду смущать вас своим присутствием.
      `,
    buttons: [
      {
        text: '',
        goTo: 885
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 885,
    text:
      `
        Женщина ушла, оставив нас с отцом в напряженной обстановке.
      `,
    buttons: [
      {
        text: '',
        goTo: 886
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 886,
    text:
      `
        Через некоторое время встал и папа.
      `,
    buttons: [
      {
        text: '',
        goTo: 887
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 887,
    text:
      `
        — Спасибо, что остаешься на моей стороне. Я попробую поговорить с ней.
      `,
    buttons: [
      {
        text: '',
        goTo: 902
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 888,
    text:
      `
        — Тебе стоит обратить внимание на свое поведение, пап.
      `,
    buttons: [
      {
        text: '',
        goTo: 889
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 889,
    text:
      `
        — Мама ничего плохого не делает, а ты начинаешь упрекать ее в действиях, которые не несут негативного характера.
      `,
    buttons: [
      {
        text: '',
        goTo: 890
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 890,
    text:
      `
        Взгляд папы поник, он встал с дивана и спокойным голосом произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 891
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 891,
    text:
      `
        — Раз в этом доме собак спускают только на меня, пожалуй, не буду смущать вас своим присутствием.
      `,
    buttons: [
      {
        text: '',
        goTo: 892
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 892,
    text:
      `
        Мужчина ушел, оставив нас с мамой в напряженной обстановке.
      `,
    buttons: [
      {
        text: '',
        goTo: 893
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 893,
    text:
      `
        Через некоторое время встала и мама.
      `,
    buttons: [
      {
        text: '',
        goTo: 894
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 894,
    text:
      `
        — Спасибо, что остаешься на моей стороне. Я попробую поговорить с ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 902
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 895,
    text:
      `
        — Вы оба хороши. Вместо того чтобы искать виноватых, может, стоит задуматься, как это все отражается на мне? На нашей семье?
      `,
    buttons: [
      {
        text: '',
        goTo: 896
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 896,
    text:
      `
        — Вы даже не хотите спокойно сесть и поговорить. Только ругаетесь без остановки.
      `,
    buttons: [
      {
        text: '',
        goTo: 897
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 897,
    text:
      `
        — Не знаю, сходите к психологу. Сделайте хоть что-то, а не просто сотрясайте воздух.
      `,
    buttons: [
      {
        text: '',
        goTo: 898
      }],
    speakerL: '$Имя Игрока$',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.ITLH, 'Hero_Chapter01_Part02') },
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 898,
    text:
      `
        Родители удивленно посмотрели на меня, словно я произнесла что‑то совершенно неожиданное.
      `,
    buttons: [
      {
        text: '',
        goTo: 899
      }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 899,
    text:
      `
        — $Имя Игрока$...
      `,
    buttons: [
      {
        text: '',
        goTo: 900
      }],
    speakerR: 'Мама',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Mother_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 900,
    text:
      `
        — Мы действительно зациклились только на плохом. Прости…
      `,
    buttons: [
      {
        text: '',
        goTo: 901
      }],
    speakerR: 'Папа',
    fullscreenObjectR: require('../../../../Media/Images/ITLH/Persons/Father_Home.png'),
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 901,
    text:
      `
        Напряжение стало почти осязаемым, и мне стало невыносимо находиться рядом с ними, поэтому поспешила уйти.
      `,
    buttons: [
      {
        text: '',
        goTo: 902
      }],
    message: 'Ваши слова заставляют родителей задуматься о своем поведении.',
    stats: [
      { story: EStoriesEn.ITLH, value: +1, category: 'Effect', id: 'Family' }],
    imageBack: require('../../../../Media/Images/ITLH/Backgrounds/Livingroom_Night.jpg')
  },

  {
    id: 902,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 903 },
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 903,
    text:
      `
        Я вернулась в свою комнату. Окончательно вымотавшись, обессиленно упала на кровать. Но выспаться мне сегодня было не суждено. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ITLH', 'Глава 1', 'Часть 3', '0')
        }
      }],
    stats: [
      { story: EStoriesEn.ITLH, value: 0, category: 'Effect', id: 'Family' }],
    achievement: { story: EStoriesEn.ITLH, name: 'Chapter01Part02Completed' },
    imageBack: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.ITLH, 'Hero_Room', 'Night') }
  }
])
