import { miniGameMemory, saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index';
import { EStoriesEn } from '../../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.TDP, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'StayPut' }) >= 1
        },
        goTo: 1
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'HideWagon' }) >= 1
        },
        goTo: 9
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'AskForHelp' }) >= 1
        },
        goTo: 17
      }
    ],
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 1,
    text:
      `
        Пока еще есть время, мы с Мортимером решили прогуляться до главной площади, попутно делясь друг с другом мыслями. Неизвестность пугала, но необходимо собраться с силами и быть готовыми ко всему.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    music: require('../../../../Media/Audio/TDP/Music/Glaswer.mp3'),
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 2,
    text:
      `
        У меня и до этого возникали трудности с выходом из города, но этот раз — что-то новое. Еще ни разу не поднималась такая шумиха. Да и такого количества стражи у ворот я не припоминаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 3,
    text:
      `
        — Произошло убийство… Ага, как же.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speakerL: 'Генрих ',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 4,
    text:
      `
        Я тихо выругался, но Мортимер, похоже, не услышал этого. Видимо, думал о чем-то своем.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 5,
    text:
      `
        В подобных городах такие убийства не редкость. Но устраивать переполох, да еще и в разгар чумы... Даже когда убили заместителя главы стражи так сильно не дергались.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 6,
    text:
      `
        Мортимер предположил, что тут скорей дело не в том, кого убили, а кто или как это сделал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 7,
    text:
      `
        Он думает, что, осмотрев погибшего, картина станет яснее. Только вот где именно находится тело — никто не говорил.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 8,
    text:
      `
        Проведя всю дорогу в размышлениях, мы не успели заметить, как уже добрались до площади.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 9,
    text:
      `
        Пока еще есть время, мы с Мортимером решили прогуляться до главной площади, попутно делясь друг с другом мыслями. Неизвестность пугала, но необходимо собраться с силами и быть готовыми ко всему.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    music: require('../../../../Media/Audio/TDP/Music/Glaswer.mp3'),
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 10,
    text:
      `
        У меня и до этого возникали трудности с выходом из города, но этот раз — что-то новое. Еще ни разу не поднималась такая шумиха. Да и такого количества стражи у ворот я не припоминаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 11,
    text:
      `
        — Произошло убийство… Ага, как же.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speakerL: 'Генрих ',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 12,
    text:
      `
        Я тихо выругался, но Мортимер, похоже, не услышал этого. Видимо, думал о чем-то своем.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 13,
    text:
      `
        В подобных городах такие убийства не редкость. Но устраивать переполох, да еще и в разгар чумы... Даже когда убили заместителя главы стражи так сильно не дергались.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 14,
    text:
      `
        Мортимер предположил, что тут скорей дело не в том, кого убили, а кто или как это сделал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 15,
    text:
      `
        Он думает, что, осмотрев погибшего, картина станет яснее. Только вот где именно находится тело — никто не говорил.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 16,
    text:
      `
        Проведя всю дорогу в размышлениях, мы не успели заметить, как уже добрались до площади.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 17,
    text:
      `
        Пока еще есть время, мы с Мортимером решили прогуляться до главной площади, попутно делясь друг с другом мыслями. Неизвестность пугала, но необходимо собраться с силами и быть готовыми ко всему.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    music: require('../../../../Media/Audio/TDP/Music/Glaswer.mp3'),
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 18,
    text:
      `
        У меня и до этого возникали трудности с выходом из города, но этот раз — что-то новое. Еще ни разу не поднималась такая шумиха. Да и такого количества стражи у ворот я не припоминаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 19,
    text:
      `
        — Произошло убийство… Ага, как же.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speakerL: 'Генрих ',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 20,
    text:
      `
        Я тихо выругался, но Мортимер, похоже, не услышал этого. Видимо, думал о чем-то своем.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 21,
    text:
      `
        В подобных городах такие убийства не редкость. Но устраивать переполох, да еще и в разгар чумы... Даже когда убили заместителя главы стражи так сильно не дергались.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 22,
    text:
      `
        Мортимер предположил, что тут скорей дело не в том, кого убили, а кто или как это сделал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 23,
    text:
      `
        Он думает, что, осмотрев погибшего, картина станет яснее. Только вот где именно находится тело — никто не говорил.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 24,
    text:
      `
        Проведя всю дорогу в размышлениях, мы не успели заметить, как уже добрались до площади.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 25,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'Pay' }) <= 0
        },
        goTo: 126
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'Pay' }) >= 1
        },
        goTo: 26
      }
    ],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 26,
    text:
      `
        — Генрих, прежде чем отправиться к месту встречи, я бы хотел обсудить наши дальнейшие действия.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 27,
    text:
      `
         <p>— Можем ли мы доверять Отто и каков шанс, что он действительно поможет?
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 28,
    text:
      `
        — Доверие, вопрос спорный, особенно когда речь идет о нем. Но, он ни раз помогал мне с разрешением проблем. А за отсутствием других вариантов, особо выбирать не приходится.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 29,
    text:
      `
        — Другими словами, ты готов пойти на сделку, невзирая на последствия? Я видел множество подобных ему людей, они готовы предложить все, лишь бы наполнить свой карман.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 30,
    text:
      `
         <p>— Мы уже подписались на это, а проблемы я привык решать по мере их поступления. Что бы не случилось, нам необходимо убраться из города как можно скорее.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 31,
    text:
      `
         <p>— Понимаю. В таком случае, нужно выдвигаться, пока есть время, не лишним будет разведать обстановку на месте.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 32,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 33 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 33,
    text:
      `
        Мортимер настоял на том, чтобы мы пришли заранее. Он усмехнулся, сказав, что пунктуальность в данном деле превыше всего.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 34,
    text:
      `
        Но увы, ни Отто, ни его знакомый так и не явились.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 35,
    text:
      `
        В голове начали всплывать слова доктора о доверии и самой ситуации в целом.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 36,
    text:
      `
        «Оправдан ли риск? Не совершил ли я непоправимую ошибку, так легко согласившись на встречу? Вдруг из-за моего решения теперь все оказались под ударом?»
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 37,
    text:
      `
        Но вопросов было больше, чем ответов. Оставалось только ждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 38,
    text:
      `
        Прошло пять минут. Потом еще пять. И еще…
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 39,
    text:
      `
        Я уже начал терять счет времени, потраченного на ожидание, но тут мое внимание привлекла фигура человека, медленно идущего к нам.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 40,
    text:
      `
         При таком тусклом освещении было не разобрать кто это. Не понятно, девушка или мужчина. Никаких выделяющихся элементов одежды, отличительных знаков.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Unknown.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 41,
    text:
      `
        Из-за нарастающего сомнения и дурных мыслей, я не мог исключить вариант, что стражник решил просто убрать меня, а затем замести следы сделки. Люди в этом городе способны вытворять вещи и похуже.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 42,
    text:
      `
        Доктор продолжал сохранять ледяное спокойствие, которое постепенно начало передаваться и мне. В любом случае, кто-то правда пришел, да и один он вряд ли станет нападать сразу на двоих.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 43,
    text:
      `
        — Добрый вечер, господа. Прошу прощения. Меня немного задержали.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Unknown.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 44,
    text:
      `
        Фигура тихо усмехнулась, отряхнув верхнюю одежду. Почему-то от этого стало не по себе. Чувство усилилось, когда он потянулся рукой к внутреннему карману накидки.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 45,
    text:
      `
        Я уже был готов схватиться за кинжал, который решил прихватить с собой на всякий случай, но вовремя остановился.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 46,
    text:
      `
        Незнакомец всего лишь достал два небольших конверта, которые медленно протянул мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 47,
    text:
      `
        Я не понимал причину такой конспирации. Обычно вопрос о побеге из города решался простым диалогом или подкупом нужных людей. Видимо ситуация и правда слишком серьезная.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 48,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 49, image: require('../../../../Media/Images/TDP/Items/Envelope.png'), buttonText: 'Забрать' },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 49,
    text:
      `
        Хоть и с опаской, но пришлось взять. Чувствовалась качественная бумага, а печать с гербом только подчеркивала, что незнакомец явно был вхож в ряды знати или же как-то с ней связан.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 50,
    text:
      `
        Видя замешательство Мортимера, я решил передать второй конверт ему, но стоило мне только повернуться, как незнакомец меня остановил.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 51,
    text:
      `
         <p>— Простите, но при всем уважении…  второй конверт не для господина. Приглашение для другого рода пар. Ну, думаю, Вы понимаете.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Unknown.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 52,
    text:
      `
        В таком случае оставалось лишь согласиться. Убрав второй конверт в карман, я решил открыть свой и узнать, что там написано. Судя по поведению незнакомца, он ждал именно этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 53,
    text:
      `
        Края письма украшены узором. Было заметно — писала твердая рука, медленно, но уверенно выводя каждую букву. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 54,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 55, image: require('../../../../Media/Images/TDP/Items/Letter.png'), buttonText: 'Прочитать' },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 55,
    text:
      `
        <i>Уважаемый Генрих Гарнер. До нас дошли очень интересные слухи, касаемо Вашей персоны, и весьма лестные. Мы желаем видеть Вас на нашей следующей встрече.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 56,
    text:
      `
        <i>Завтра в 22:00 Вас будут ожидать у таверны напротив здания городского суда. Приходите вместе с вашей избранницей.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 57,
    text:
      `
        <i>И помните, мы возлагаем на вас большие надежды, не подведите наших ожиданий.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 58,
    text:
      `
        <i>Не подведите собственные желания.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 59,
    text:
      `
        «Что еще за слухи? Какие желания? Отто решил надо мной посмеяться? Мы выбраться пытаемся, а он меня на ужин зовет? Тоже мне, шутник нашелся».
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 60,
    text:
      `
        И только я собирался распрощаться с этим человеком в черном, как вдруг в дело вмешался Мортимер.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Item', id: 'Letter' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 61,
    text:
      `
        — Благодарим Вас, милейший. Будьте уверены, мой господин прибудет вовремя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 62,
    text:
      `
        По всей видимости, данный ответ устроил незнакомца. Он театрально поклонился и скрылся обратно во тьму. Напоследок он бросил фразу:
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 63,
    text:
      `
        — Не подведите собственные желания.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Unknown.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 64,
    text:
      `
        Проводив его взглядом, я скрестил руки, повернулся к Мортимеру, который со вздохом опустил голову и тихо проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 65,
    text:
      `
        — Заранее отвечая ваш вопрос, господин Гарнер, я считаю, что было бы неразумно упускать на данный момент единственную возможность разобраться в происходящем.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 66,
    text:
      `
        — Серьезно? Вам не кажется, что идти на пир во время чумы идеей, мягко скажем, сомнительной?
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 67,
    text:
      `
        — И это — когда мы пытаемся выбраться из города, а не заводить дружбу с  кучкой повернутых аристократов!
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 68,
    text:
      `
        — Я придерживаюсь такого же мнения. Но как и сказал, считаю, что в нашем случае нужно пользоваться любой возможностью.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 69,
    text:
      `
        — Откровенно говоря, беседа с таинственным джентльменом навела меня на одну весьма занимательную мысль…
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 70,
    text:
      `
        — Дайте угадаю, мы впустую потратили последние деньги?
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 71,
    text:
      `
        — Нет… напротив. Это помогло сложить несколько последних событий воедино и лишь укрепило мою теорию. Но нам нужно проверить одно место.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 72,
    text:
      `
        После этих слов Мортимер направился в ту же сторону, куда ушел незнакомец, жестом руки зовя вслед за собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 73,
    text:
      `
        Только вот в отличие от доктора, у меня после этой встречи лишь прибавилось вопросов. Поэтому я решил обогнать его и встал прямо перед ним, лишая возможности себя обойти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 74,
    text:
      `
        — Ну уж нет, док. Давайте начистоту. Что тут творится? Я не собираюсь ходить за вами хвостиком и делать вид, будто я ваш ассистент. У вас для этого есть этот… как его…
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 75,
    text:
      `
        — Дитрих.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 76,
    text:
      `
        — Да, он самый, алкаш хренов.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 77,
    text:
      `
        — Господин Гарнер, я понимаю ваше беспокойство. Но вы все еще не понимаете, что перед нами возможность, которой надо пользоваться, если мы хотим покинуть город.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 78,
    text:
      `
        — Ну, раз тут только я ничего не понимаю, может, вы тогда поделитесь своими идеями и перестанете наконец говорить загадками?
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 79,
    text:
      `
        — Для начала, я должен подтвердить свои умозаключения. Это недалеко. Прошу, дайте шанс, и вы сами все поймете. Мне нет смысла делать то, что могло бы принести вред вам или кому-либо из наших попутчиков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 80,
    text:
      `
        Вздохнув от безысходности, я устало потер переносицу. Слова доктора звучали правдоподобно, и не были лишены логики. Однако от этого мне легче не становилось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 81,
    text:
      `
        События отказывались складываться в единую картину, и единственное решение, которое мне в данной ситуации приходило на ум — довериться Мортимеру.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 82,
    text:
      `
        — Хорошо. И куда мы направимся, доктор? 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 83,
    text:
      `
        — В морг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 84,
    text:
      `
        Выдохнув, он достал из-под плаща свою маску и бросив на меня беглый взгляд, неспешно пошел вперед.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 85,
    text:
      `
        — Потрясающе… И почему я не удивлен.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Warehouses_Night.jpg')
  },

  {
    id: 86,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 87 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 87,
    text:
      `
        Атмосферу не передать словами. С виду, это обычная часовня, ранее принадлежащая местной церкви. Но при одном взгляде на нее, все тело начинало знобить, а волосы вставали дыбом.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 88,
    text:
      `
        Она словно кричала — беги отсюда пока можешь и не оглядывайся.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 89,
    text:
      `
        С началом эпидемии здесь начали собирать больных в крайних стадиях. И за недолгое время лечебница стала моргом. Все, кто попадал в стены здания, уже навечно оставался их заложником.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 90,
    text:
      `
        «Забавно, что именно сюда док решил наведаться. Он как никто должен понимать всю опасность. Мне кажется, это самое зараженное место в городе».
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 91,
    text:
      `
        Пройдя от заржавевших ворот по небольшой тропинке, мы вышли к площадке, в центре которой находился давно пересохший фонтан в окружении пустых, поросших мхом лавочек.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Metal_Gates_Squeak.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 92,
    text:
      `
        Просто так зайти внутрь у нас все равно бы не вышло. Пройдя еще несколько шагов, в глаза бросилась огромная фигура, спускающаяся к нам по главной лестнице.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    message: 'Этот мир крайне опасен. Во время путешествия Генрих может получить ранения — как из‑за ваших решений, так и по ходу развития сюжета.',
    stats: [
      { story: EStoriesEn.TDP, value: 100, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 93,
    text:
      `
        — В столь поздний час не велено никого пускать, уважаемый. Приходите завтра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speakerR: 'Охранник',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Emil.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 94,
    text:
      `
        Разумеется, обращался он именно к Мортимеру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 95,
    text:
      `
        Я посмотрел на него, пытаясь понять, как нам действовать дальше. Но даже сквозь его маску я вполне четко понял — док и сам растерялся.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 96,
    text:
      `Охранник продолжал стоять с невозмутимым лицом. Но испытывать его терпение не было желания. Да и надавить на такую тушу явно не выйдет.
      `,
    buttons: [
      {
        text: 'Мы здесь по поручению коменданта',
        goTo: 97,
        func: () => { timer.stop() }
      },
      {
        text: 'Мы здесь по поручению церкви',
        goTo: 109,
        func: () => { timer.stop() }
      },
      {
        text: 'Не подведите свои желания',
        goTo: 118,
        func: () => { timer.stop() }
      }],
    beforeBegin: () => {
      timer.set(10, () => { scenarioManager.beginScene(109) })
    },
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 97,
    text:
      `
        Он удивленно приподнял бровь, после чего нахмурился. Переключив свое внимание с дока и внимательно изучив меня своими маленькими глазенками, бугай слабо улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 98,
    text:
      `
        — А фамилия у него какая? 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speakerR: 'Охранник',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Emil.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 99,
    text:
      `
        Разумеется, я не знал. А называть фамилию Отто, сейчас максимально глупо, так как эту скотину здесь знают абсолютно все, кто хоть раз был у городских ворот.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 100,
    text:
      `
        — Неужели не знаешь фамилию своего командира? И как тебе тогда вообще доверили охрану целого здания?
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 101,
    text:
      `
        — А ну-ка давайте валите отсюда, пока оба еще при памяти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speakerR: 'Охранник',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Emil.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 102,
    text:
      `
        «М-да уж, импровизатор из меня так себе. Походу, сделал только хуже».
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 103,
    text:
      `
        Я уже собирался развернуться и последовать совету амбала, но тут вовремя проснулся Мортимер, тихо произнеся всего одну фразу.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 104,
    text:
      `
        — Не подведите свои желания, сэр.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 105,
    text:
      `
        Охранник изрядно побледнел и поклонившись так, что мне пришлось сделать пару шагов назад, он дрожащим голосом ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 106,
    text:
      `
        — Ч-что же вы сразу не сказали. Проходите, господин. Меня зовут Эмиль, и я очень давно служу на благо братства. Прошу прощения за грубость.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speakerR: 'Эмиль',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Emil.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 107,
    text:
      `
        Не смотря на свои размеры, Эмиль быстро взбежал по лестнице. Он даже услужливо приоткрыл дверь, жестом приглашая нас, словно дворецкий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 108,
    text:
      `
        Мортимер никак не комментировал происходящее, лишь молча воспользовался предложением пройти внутрь.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 109,
    text:
      `
        Охранник смерил меня недоверчивым взглядом — точь‑в‑точь как отец, когда я уверял его, что мамину фарфоровую вазу разбила сестра.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 110,
    text:
      `
        — Мне никаких распоряжений не поступало. Не заговаривай зубы, приятель, надурить не выйдет.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speakerR: 'Охранник',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Emil.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 111,
    text:
      `
        — Повторяю: в столь поздний час не велено никого пускать. Если продолжите тратить мое время, то силой вышвырну вас отсюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speakerR: 'Охранник',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Emil.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 112,
    text:
      `
        Я уже собирался развернуться и последовать совету амбала, но тут вовремя проснулся Мортимер, тихо произнеся всего одну фразу.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 113,
    text:
      `
        — Не подведите свои желания, сэр.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 114,
    text:
      `
        Охранник изрядно побледнел и поклонившись так, что мне пришлось сделать пару шагов назад, дрожащим голосом ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 115,
    text:
      `
        — Ч-что же вы сразу не сказали. Проходите, господин. Меня зовут Эмиль, и я очень давно служу на благо братства. Прошу прощения за грубость.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speakerR: 'Эмиль',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Emil.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 116,
    text:
      `
        Не смотря на свои размеры, Эмиль быстро взбежал по лестнице. Он даже услужливо приоткрыл дверь, жестом приглашая нас, словно дворецкий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 117,
    text:
      `
        Мортимер никак не комментировал происходящее, лишь молча воспользовался предложением пройти внутрь.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 118,
    text:
      `
        Услышав это, Мортимер резко повернул ко мне длинный клюв своей маски. Он явно не ожидал подобных слов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    message: 'Вы впечатлили Мортимера своей сообразительностью.',
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Mortimer' }],
    achievement: { story: EStoriesEn.TDP, name: 'ChapelNoHelp' },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 119,
    text:
      `
        Но вот на охранника фраза произвела совсем другой эффект. Он изрядно побледнел и изменился в лице.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 120,
    text:
      `
        Поклонившись так, что мне от неожиданности пришлось сделать пару шагов назад, здоровяк нервно проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 121,
    text:
      `
        — Ч-что же вы сразу не сказали. Проходите, господин. Меня зовут Эмиль, и я очень давно служу на благо братства. Прошу прощения за грубость.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speakerR: 'Эмиль',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Emil.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 122,
    text:
      `
        Не смотря на свои размеры, Эмиль быстро взбежал по лестнице. Он даже услужливо приоткрыл дверь, жестом приглашая нас, словно дворецкий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 123,
    text:
      `
        Мортимер никак не комментировал происходящее, лишь молча воспользовался предложением пройти внутрь.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 124,
    text:
      `
        Но перед тем, как зайти, он достал из своей поясной сумки длинный марлевый бинт, пропитанный ужасно пахнущими маслами с чесноком и протянул его мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 125,
    text:
      `
        — Что-ж, спасибо за заботу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Band.mp3'),
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 126,
    text:
      `
        — Генрих, прежде чем мы отправимся к месту встречи, я бы хотел обсудить с тобой наши дальнейшие действия.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 127,
    text:
      `
        — На самом деле план предельно прост. Но для начала нам необходимо попасть в канализацию, проходящую под городом.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 128,
    text:
      `
        — К нашему с вами счастью, есть одно место, где сделать это достаточно просто. К тому же, оно скрыто от посторонних глаз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 129,
    text:
      `
        — Допустим, попадем мы туда, а дальше что? Вряд-ли вы хотите там наблюдать за крысами и наслаждаться ароматами сточных вод.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 130,
    text:
      `
        — Не волнуйтесь, сэр Гарнер, просто доверьтесь мне. Когда мы будем на месте, вы сами все поймете. А сейчас, предлагаю продолжить путь.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 131,
    text:
      `
        Дорога до места, о котором рассказывал Мортимер, не заняла слишком много времени. Не смотря на свой возраст, двигался он достаточно бодро.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Central_Square_Evening.jpg')
  },

  {
    id: 132,
    text:
      `
        Пройдя через несколько узеньких улочек мы уперлись в тупик. Среди куч мусора, док указал на массивный люк, находящийся в центре.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 133,
    text:
      `
        Правда, была небольшая загвоздка: люк нужно сдвинуть. Мне даже показалось, что он собирается сделать это голыми руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 134,
    text:
      `
        — При всем уважении, но… люк, похоже, тут закрыт намертво.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 135,
    text:
      `
        — Да, я заметил, но у любой двери есть ключ. Даже у такой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 136,
    text:
      `
        Сказать, что док меня заинтриговал — это означало ничего не сказать. Я осмотрел закрытый люк вдоль и поперек, пытаясь найти в нем хотя бы углубление, которое походило на замочную скважину.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 137,
    text:
      `
        Но все оказалось несколько прозаичнее. Мортимер показал, что тут есть несколько нажимных плиток. Нужно всего лишь нажать на них в правильной последовательности. Тогда проход и откроется.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    message: 'Далее последует мини-игра. В игре три раунда. Сначала в определенном порядке будут подсвечиваться элементы. Ваша задача нажать на них в том же порядке.',
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 138,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 139 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 139,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => { miniGameMemory.startNew(3, 3, () => { scenarioManager.beginScene(140) }, () => { scenarioManager.beginScene(600) }, () => { scenarioManager.beginScene(600) }, [require('../../../../Media/Images/TDP/UI/MiniGameMemory/Tile01.png'), require('../../../../Media/Images/TDP/UI/MiniGameMemory/Tile02.png'), require('../../../../Media/Images/TDP/UI/MiniGameMemory/Tile03.png'), require('../../../../Media/Images/TDP/UI/MiniGameMemory/Tile04.png')], require('../../../../Media/Images/TDP/UI/MiniGameMemory/BG.jpg')) },
    imageBack: require('../../../../Media/Images/TDP/UI/MiniGameMemory/BG.jpg')
  },

  {
    id: 140,
    text:
      `
        Нажав на последнюю плиту, послышался характерный щелчок, дающий понять, что замок открыт. С небольшой задержкой люк приоткрылся, позволив просунуть под него руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    achievement: { story: EStoriesEn.TDP, name: 'MiniGameExpert' },
    simple: require('../../../../Media/Audio/TDP/Sounds/LockSound.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 600,
    text:
      `
        Нажав на последнюю плиту, послышался характерный щелчок, дающий понять, что замок открыт. С небольшой задержкой люк приоткрылся, позволив просунуть под него руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/LockSound.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 141,
    text:
      `
        — И все-таки не могу не спросить. Как вы вообще узнали про этот вход? Да и откуда известно, как работает механизм?
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 142,
    text:
      `
        — Хм, откуда, спрашиваете… У меня есть некая тяга к изучению истории тех мест, где мне приходится работать. Считайте это моим хобби.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 143,
    text:
      `
        — Подобные проходы на самом деле не редкость. Они создавались для разных целей: от черных ходов для значимых зданий, до тайников городской знати. 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 144,
    text:
      `
        — В больших городах они зачастую служат путем отступления из города, и именно за этим мы сюда, в частности, и пришли.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 145,
    text:
      `
        — В частности? 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 146,
    text:
      `
        — Вы слишком нетерпеливы, сэр Гарнер. Потерпите немного и сами все увидите. А сейчас предлагаю все же спуститься.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 147,
    text:
      `
        Я немного поежился, но все же решил с ним согласиться. Аргументы Мортимера нисколько не убедили, но мне не хотелось просто так стоять перед некогда запечатанным проходом у всех на виду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Corner.jpg')
  },

  {
    id: 148,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/HatchOpen.mp3'),
    interruptiveFrame: { goTo: 149 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 149,
    text:
      `
        Ни для кого не станет открытием, насколько омерзительной может быть вонь в стоках под городом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    ambient: require('../../../../Media/Audio/TDP/Ambient/Canalisation.mp3'),
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 150,
    text:
      `
        Еще давно, когда я оказался здесь впервые, твердо решил, что больше не хочу сюда не возвращаться. Ни за какие деньги. Но сложившаяся ситуация вынудила снова прочувствовать все прелести этого места.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 151,
    text:
      `
        Стоило только зайти внутрь, как док сразу же нацепил птичью маску. Из нас двоих ему сейчас было гораздо легче. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 152,
    text:
      `
        Запах чеснока, исходящий от его клюва, наверняка перебивал вонь результатов человеческой жизнедеятельности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 153,
    text:
      `
        Мы шли по каменистой кладке, а по левую руку от нас располагалась стена со странными мутными образованиями, которые струились через щели. По центру шел поток зеленоватой воды, источник наиболее мерзких ароматов.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 154,
    text:
      `
        По ту сторону тоннеля также была возможность пройти, но я не видел способа, как до туда добраться. Как и в целом не понимал, цель нашего пребывания тут.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 155,
    text:
      `
        — И все же, зачем мы, собственно, сюда спустились? 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 156,
    text:
      `
        — Я бы хотел ознакомиться с телом погибшего. Но прямым путем к нему не попасть.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 157,
    text:
      `
        — Вы уверены, что оно находится в коллекторе? Я-то думал, мы ищем способ выбраться из города с помощью стоков. Как мертвец поспособствует этому?
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 158,
    text:
      `
        — Выход из города тут есть… Хотя мы до него еще не дошли. Но вы же прекрасно понимаете, что без моих инструментов и вашей телеги — нам не светит преодолеть долгое путешествие. Да и не стоит забывать про остальных. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 159,
    text:
      `
        — Что-то вы явно не договариваете, док. Сначала невнятные цели в канализации, которые нам якобы помогут бежать, теперь же идем препарировать труп. 
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 160,
    text:
      `
        В воздухе повисло нагнетающее обстановку молчание. Мортимер шел, полностью отдавшись своим мыслям, не обращая на меня абсолютно никакого внимания. Словно он тут один.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 161,
    text:
      `
        — Отвечая на ваш вопрос, я склонен считать местом наших поисков местную часовню, после начала эпидемии переделанную в морг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 162,
    text:
      `
        — А эти каналы приведут нас прямиком туда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 163,
    text:
      `
        — Заранее предупрежу, место, скажем так, довольно опасное. К сожалению, маска у меня с собой всего одна, поэтому, прошу, закройте этим свой нос и рот.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 164,
    text:
      `
        Мортимер достал из своей поясной сумки длинный марлевый бинт, пропитанный ужасно пахнущими маслами и чесноком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 165,
    text:
      `
        — Как заботливо… Но при чем тут морг? Зачем вообще осматривать тело? Или Вы серьезно хотите помочь расследованию, думая, что это решит проблему и нас выпустят?
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Band.mp3'),
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 166,
    text:
      `
        — Нет… как я уже говорил, у меня есть кое-какие опасения относительно происходящего.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 167,
    text:
      `
        — Да и не советую слишком много говорить. Думаю, вы и так прекрасно понимаете, какого рода тут могут быть заболевания. А тратить время на ваше лечение, уж извините, для нас непозволительная роскошь.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 168,
    text:
      `
        Посчитав совет врача слишком хорошим, чтобы им пренебрегать, я постарался как можно меньше дышать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 169,
    text:
      `
        От вони это полностью не избавляло, но повязка хотя бы вселяла хоть какую-то уверенность, что доживу до выхода.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Canalisation.jpg')
  },

  {
    id: 170,
    text:
      `
        Вскоре мы свернули с основного коридора в боковой тоннель, который был завален разного рода мусором: стройматериалами, большими мешками, посудой и тухлыми продуктами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 171,
    text:
      `
        Среди этого хлама мелькали и врачебные приборы, вроде использованных шприцов или специальных накидок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 172,
    text:
      `
        По мере нашего продвижения их становилось все больше, давая понять, что мы приближаемся к нашей цели.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 173,
    text:
      `
        Я старался максимально аккуратно наступать на поверхность, чтобы не пораниться и не получить себе проблем на голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 174,
    text:
      `
        Однако полностью избежать этого у меня не вышло. Я напоролся боком об острый край одной из строительных балок и, тихо зашипел от боли, чем привлек внимание доктора.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Wound.mp3'),
    effect: 'Красная вспышка',
    stats: [
      { story: EStoriesEn.TDP, value: 100, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 175,
    text:
      `
        — Господин Гарнер? Все в порядке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    message: 'Этот мир крайне опасен. Во время путешествия Генрих может получить ранения — как из‑за ваших решений, так и по ходу развития сюжета.',
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    stats: [
      { story: EStoriesEn.TDP, value: -5, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 176,
    text:
      `
        — Да, в норме. Во что-то липкое наступил и чуть не упал.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 177,
    text:
      `
        Он явно не поверил, и приблизился, чтобы узнать в чем дело. Я чувствовал, как доктор разглядывает меня сквозь маску. Пришлось сдерживать боль, не показывая ни намека на травму. 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 178,
    text:
      `
        Вскоре, идя за спиной доктора, я решил аккуратно ощупать место удара. Как и предполагалось, всего лишь небольшая царапина, хотя за новый порванный костюм было немного обидно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 179,
    text:
      `
        Дойдя до конца тоннеля, перед нами предстала каменная винтовая лестница, от которой веяло ветерком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 180,
    text:
      `
        Это могло значить лишь одно — она ведет на поверхность.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 181,
    text:
      `
        Поднимаясь по ней, я постепенно начал дышать свободнее. Мерзкие запахи оставались позади, сменяясь уже более приятным ароматом ладана, исходящим от просторного помещения некогда бывшей часовни.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 182,
    text:
      `
        Ранее в этом месте проводили церковные службы, но с началом эпидемии здание было оборудовано под госпиталь. Мрачные темные коридоры не предвещали ничего хорошего, как и зловещая тишина вокруг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Side_Tunnel.jpg')
  },

  {
    id: 183,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 184 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 184,
    text:
      `
        Обстановка внутри в очередной раз напомнила, с каким ужасом столкнулись жители этого города, и к чему все это привело.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    music: require('../../../../Media/Audio/TDP/Music/Chapel.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 185,
    text:
      `
        Слышались тяжелые вздохи часто ворочавшихся на кроватях больных, жалобные стоны, тихие мольбы о помощи.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 186,
    text:
      `
        В помещении были потушены практически все светильники. Большая часть света исходила от свечей, расставленных по всему залу.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 187,
    text:
      `
        Пока я молча следовал за доктором, старался как можно меньше обращать внимание на больных. Как бы не было грустно — меня это не касалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 188,
    text:
      `
        Странным казалось и то, что на такое огромное количество пациентов, я не увидел ни одного врача или хотя-бы наблюдающего. Словно все находившиеся здесь были оставлены наедине со своей болью и страхами.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 189,
    text:
      `
        Из-за редкого источника света, было трудно ориентироваться, однако мельком я все же заметил одного из больных, который лежал на кушетке во всей «красе».
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 190,
    text:
      `
        Он был достаточно молод, может, лет тридцати, максимум тридцати пяти. Однако, выпавшие на макушке волосы, сереющая кожа, пустой взгляд и прерывистое дыхание делали его похожим скорее на старика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 191,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { goTo: 192, video: require('../../../../Media/Images/TDP/Cutscenes/SickMan.mp4') },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 192,
    text:
      `
        «М-да…  По неведомой иронии судьбы, именно он предстал на смертном одре… Что не говори, а жаль его, мог прожить вполне достойную жизнь».
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 193,
    text:
      `
        Я продолжал держаться рядом с Мортимером, который откуда-то прекрасно знал планировку здания. Не перестаю поражаться способностям, а главное хладнокровной уверенности доктора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 194,
    text:
      `
        Хотелось снова вернуться к вопросам, которые меня мучили. Тем более, было совершенно непонятно, как среди всех этих больных — мы найдем того самого.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 195,
    text:
      `
        «Предполагаю, что тела умерших держат в другом месте». 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 196,
    text:
      `
        Но стоило мне только подумать об этом, как Мортимер остановился и молча указал на закрытую дверь, ведущую в соседнюю комнату. 
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 197,
    text:
      `
        Я перевел взгляд на Мортимера и одобрительно кивнул, после чего он осторожно открыл ее, и мы зашли внутрь.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/DoorOpen.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Inside.jpg')
  },

  {
    id: 198,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 199 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 199,
    text:
      `
        В центре комнаты стоял длинный стол, на котором лежало тело, укрытое белым покрывалом. Страшно воняло какими-то медикаментами, в большей степени спиртом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 200,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'Pay' }) <= 0
        },
        goTo: 209
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'Pay' }) >= 1
        },
        goTo: 201
      }
    ],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 201,
    text:
      `
        «Меня терзают смутные сомнения относительно того, как мы проникли сюда. Тот бугай явно не собирался пропускать нас, пока мы не сказали тот секретный код. Чутье не подвело, но как бы оно не аукнулось потом».
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 202,
    text:
      `
        Сейчас мне не давал покоя лишь один вопрос: при чем тут некое братство? И почему Мортимера в условиях эпидемии ограничивают в доступе к больным?
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 203,
    text:
      `
        — Док… а почему тот мужик не хотел тебя пропускать? Ты же все-таки врач, а не какой-то бродяга в поисках ночлежки.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 204,
    text:
      `
        — Он вполне ясно дал понять, что это так называемое «Братство» не хочет знакомить кого-либо с телом погибшего. Считайте — нам крупно повезло попасть сюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 205,
    text:
      `
        — Но вы же доктор… разве у вас нет права свободно ходить в подобные места?
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 206,
    text:
      `
        — Я веду частную практику, но разрешение, конечно, имеется. К сожалению, когда кто-то хочет что-то скрыть, моего положения оказывается недостаточно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 207,
    text:
      `
        — К тому же с местными властями у нас сложилось определенное недопонимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 208,
    text:
      `
        Меня такой ответ не совсем устроил, но я решил не допытывать доктора, а сосредоточиться на загадочном мертвеце.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 209,
    text:
      `
        И только сейчас меня осенило. Один вопрос все вертелся на языке, но я никак не мог понять, что именно в данной ситуации смущает больше всего.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 210,
    text:
      `
        «Почему столько трудностей? Мы же могли просто войти сюда через парадный вход. Получается, он не может свободно ходить здесь?»
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 211,
    text:
      `
        Стараясь не поднимать шум, я легонько похлопал Мортимера по плечу, чтобы обратить внимание на себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 212,
    text:
      `
        — Эй, док.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 213,
    text:
      `
        — Да, господин Гарнер? 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 214,
    text:
      `
        — Вы же врач. К чему такая скрытность? Разве это не привычное для вас место посещения?
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 215,
    text:
      `
        — Сомневаюсь, что появлению неизвестного доктора будут рады именно в этой комнате. К тому же у меня возникло некоторое недопонимание с властями города. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 216,
    text:
      `
        — Какого рода недопонимание? Вы, как и тот бард сделали что-то неугодное и теперь вынуждены скрываться?
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 217,
    text:
      `
        — Нет, пожалуй, не на столько. Давайте отложим разговоры на следующий раз. У нас есть задача поважнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 218,
    text:
      `
        — Эх… ладно. Но что с этим человеком? Чем он вас так сильно заинтересовал? 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 219,
    text:
      `
        — Судя по тому, что стражу у городских ворот выставили недавно, убийство, могло произойти недавно. И соответственно, тело оставили лежать здесь для последующего вскрытия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 220,
    text:
      `
        — И как я погляжу, оно еще не было произведено. Прекрасная возможность проявить свои врачебные навыки.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 221,
    text:
      `
        После этих слов доктор расстегнул свою мантию, доставая из-за спины небольшой набор медицинских инструментов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Shroud.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 222,
    text:
      `
        — Вы и правда привели меня поглазеть на труп? Я до сих пор не вижу связи между бегством из… и… вскрытием?
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 223,
    text:
      `
        — У меня есть определенные сомнения насчет этого убийства. Я же говорил. Как только получу нужные ответы, то смогу придумать варианты побега.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 224,
    text:
      `
        — Ладно-ладно, понял. Но мне то что делать? Стоять на страже, ассистировать, молиться за упокой души его бренной? 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 225,
    text:
      `
        — Это все не имеет смысла, я услышу приближение посторонних, да и помочь у вас вряд ли хватит навыков. А теперь, пожалуйста, создайте тишину.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 226,
    text:
      `
        В течение следующего получаса Мортимер работал над телом. Движения его были осторожными и медленными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 227,
    text:
      `
        Он орудовал небольшим скальпелем, тщательно продумывая свой следующий надрез. 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Scalpel.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 228,
    text:
      `
        «Настоящий профессионал. Теперь мне будет гораздо спокойнее путешествовать с таким доктором в пассажирах».
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 229,
    text:
      `
        Под конец импровизированной операции, он взял немного крови у погибшего, погрузив ее в небольшую колбу, и спрятав в задний карман.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 230,
    text:
      `
        — А это зачем? 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 231,
    text:
      `
        — Последний штрих в нашем маленьком расследовании. Можете сами посмотреть, если не брезгуете конечно.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 232,
    text:
      `
        Мортимер указал на покойника, продолжая рассуждения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 233,
    text:
      `
        — Горло перерезано, но смерть наступила не от этого. Жертва была задушена. Скорее всего толстой веревкой или широким жгутом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 234,
    text:
      `
        — Порез слишком точный. Видно, что сделан был уже после смерти. А вот следы от веревки вызывают вопросы.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 235,
    text:
      `
        — Повесили? Или просто решили накинуть удавку?
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 236,
    text:
      `
        — Скорее второй вариант. Сама шея сломалась бы при повешении. Очевидно, что произведено вмешательство кого-то постороннего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 237,
    text:
      `
        — Но мы не можем исключать и другие варианты, например, как отравление… или болезнь... 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 238,
    text:
      `
        — Могли ли над ним издеваться? Нельзя же внезапно накинуть петлю и закрепить ее без сопротивления. Убийца кто-то больно сильный. Мужик этот слабаком не выглядит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 239,
    text:
      `
        — А вот это уже самое интересное. Помимо удушения, следов борьбы на теле не наблюдается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 240,
    text:
      `
        — Погодите док, вы хотите сказать, что он позволял себя душить добровольно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 241,
    text:
      `
        — Это самый логичный вывод. Но обратите внимание на еще одну интересную деталь. Руки. Они в синяках и порезах, проглядываются следы от уколов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 242,
    text:
      `
        — Возможно, жертва под воздействием дурманящих веществ занималась самоистязанием и перестаралась.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 243,
    text:
      `
        — А затем кто-то перерезал ему горло, чтобы обставить все как убийство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 244,
    text:
      `
        — Неужели все сводится к тому, что целый город закрыли из-за этого хера? Не проще ли было просто обставить все как самоубийство?
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 245,
    text:
      `
        — Они хоть и прикрываются карантином, но любой хирург с легкостью определит отсутствие насильственной смерти. А такие забавы только очернили бы знать.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 246,
    text:
      `
        — Этот человек некто очень важный. И скорее всего к делу подключена городская верхушка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 247,
    text:
      `
        — Как минимум, я бы поостерегся в дальнейшем вступать в тесный контакт со стражей. Включая Отто.
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 248,
    text:
      `
        — Но нам же не обязательно копать так глубоко. Стоит попытаться отыскать старую-добрую брешь в стене или выйти на местное подполье. Не может быть такого, что у нас нет других вариантов.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 249,
    text:
      `
        — Мы и так рискуем, задерживаясь в Гласвере. Вернемся к остальным и подумаем о дальнейших действиях, в более безопасном месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 250,
    text:
      `
        — Ч-что? Кто вы такие?! Вам сюда нельзя!
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Healer_Scared.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 251,
    text:
      `
        Мы с Мортимером резко обернулись. За разговором не заметили, как в комнату зашел один из служащих часовни. От неожиданности он обронил кувшин с водой.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/BrokenVase.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 252,
    text:
      `
        «Это вот так док обещал услышать приближение посторонних?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band_Puzzled.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 253,
    text:
      `
        Молодой парень с длинными светлыми волосами, испуганно поглядывал то нас, то на тело. В дрожащей руке он сжимал ручку крупного фонаря.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Healer_Scared.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 254,
    text:
      `
        «Простой служащий… может, удасться решить все мирно?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 255,
    text:
      `
        Мортимер, однако, насторожился и не произнес ни слова. Я же выставил руки в примирительном жесте и стал медленно приближаться к незнакомцу.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 256,
    text:
      `
        — Спокойно, мы не хотим пробле…
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 257,
    text:
      `
        Юнец окончания фразы не услышал. Быстро развернувшись, он побежал в сторону выхода.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 258,
    text:
      `
        «Мы рискуем привлечь слишком много внимания. Нужно что-то быстро предпринять».
      `,
    buttons: [
      {
        text: 'Убить незнакомца',
        goTo: 259,
        func: () => { timer.stop() }
      },
      {
        text: 'Броситься наутек',
        goTo: 277,
        func: () => { timer.stop() }
      }],
    beforeBegin: () => {
      timer.set(10, () => { scenarioManager.beginScene(277) })
    },
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 259,
    text:
      `
        Нельзя было позволить ему уйти. Труп рано или поздно обнаружат, но хотя бы наши рожи не будут красоваться на плакатах розыска. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    stats: [
      { story: EStoriesEn.TDP, value: 1, category: 'Choice', id: 'KillHealer' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 260,
    text:
      `
        Я быстрым движением вытащил свой клинок и с силой метнул его в спину пацана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Knife.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 261,
    text:
      `
        Не успев отбежать далеко от комнаты, он издал испуганный крик и упал на пол, выронив свой фонарь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 262,
    text:
      `
        Быстро сократив расстояние между нами, я накинулся на него и вытащил клинок из спины. Корчась от боли, он пытался сопротивляться, прикрывая одной рукой голову и шею, а второй вцепился в руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Healer_Scared.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 263,
    text:
      `
        Но, к его несчастью, мы с ним были в разных весовых категориях. И мне не составило труда пробить оборону мальчишки.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 264,
    text:
      `
        Свободной рукой я перехватил клинок и резко дернул его в сторону. От такого движения он на момент ослабил хватку и приоткрыл голову. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 265,
    text:
      `
        Я, быстрым и точным движением, воткнул кинжал в нижнюю часть челюсти, мгновенно оборвав его попытки сопротивления, равно, как и жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/KnokcingDown.mp3'),
    achievement: { story: EStoriesEn.TDP, name: 'KillChapel' },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 266,
    text:
      `
        Работа контрабандиста всегда была сопряжена с риском и определенным насилием. И не понаслышке знаю, как вести себя в подобных ситуациях.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 267,
    text:
      `
        Мортимер, в отличие от меня, был весь на иголках. Разбившаяся лампа дала волю огню, который быстро разгорался из-за рассохшихся стен часовни и лежавших на полу простыней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    ambient: require('../../../../Media/Audio/TDP/Ambient/Fire.mp3'),
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 268,
    text:
      `
        «Можно попытаться выбраться через окно, пока мы еще не надышались дымом».
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 269,
    text:
      `
        За стеной огня были слышны испуганные крики пациентов. Я рванул в сторону ближайшего окна. Мортимер, как будто потеряв остатки самообладания, смиренно посмотрел на меня и побежал следом.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 270,
    text:
      `
        Окно никак не получалось открыть. Решив не терять времени, я схватил ближайший стул и с размаху выбил стекло вместе с рамой.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/BrokenGlass.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 271,
    text:
      `
        Выпрыгнув на улицу с задней стороны часовни, заметил, как к парадному входу, стремительно приближается группа стражников. 
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 272,
    text:
      `
        Я помог Мортимеру спуститься, и мы поспешили покинуть место преступления, то и дело оглядываясь — нет ли погони. К счастью, нас не заметили.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 273,
    text:
      `
        — Что мы наделали… Сколько людей погибло. Неужели не было другого выхода?
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    message: 'Мортимер сильно разочарован вашим решением. ',
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    stats: [
      { story: EStoriesEn.TDP, value: -2, category: 'Person', id: 'Mortimer' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 274,
    text:
      `
        — У нас не было выбора, доктор. И смерть этих бедолаг — всего лишь несчастный случай. Им и так оставалось недолго. 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 275,
    text:
      `
        — Сейчас нужно как можно быстрее вернуться к повозке, пока они не поняли, что к чему.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 276,
    text:
      `
        Кивок Мортимера выглядел нервным и каким‑то рваным, будто он заставил себя согласиться. Легкое подрагивание пальцев выдавало категорическое несогласие с моим решением.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 277,
    text:
      `
        «К черту этого щенка. Сейчас гораздо важнее, как можно быстрее покинуть здание и не нарваться на стражу. Вряд ли за такое короткое время незнакомец разглядел нас».
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 278,
    text:
      `
        Спасало лишь то, что лиц не было полностью видно из-за маски и повязки.
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 279,
    text:
      `
        Долго не думая, я беспардонно схватил доктора за руку и рванул к ближайшему витражному окну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 280,
    text:
      `
        Окно никак не получалось открыть. Решив не терять времени, я схватил ближайший стул и с размаху выбил стекло вместе с рамой.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/BrokenGlass.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 281,
    text:
      `
        Выпрыгнув на улицу с задней стороны часовни, заметил, как к парадному входу, стремительно приближается группа стражников. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 282,
    text:
      `
        Я помог Мортимеру спуститься, и мы поспешили покинуть место преступления, то и дело оглядываясь — нет ли погони. К счастью, нас не заметили.
      `,
    buttons: [
      {
        text: '',
        goTo: 605
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 605,
    text:
      `
        — Сейчас нужно как можно быстрее вернуться к повозке, пока они не поняли, что к чему.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Band.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Chapel.jpg')
  },

  {
    id: 283,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 284 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 284,
    text:
      `
        Наконец-то можно было снять маски и дышать нормально. После смеси запахов чеснока и гнили, даже воздух Гласвера казался необычайно свежим и чистым. 
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Band.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 285,
    text:
      `
        Город мирно дремал, казалось, вовсе не замечая той шумихи, что происходила в одном из его темных участков.
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 286,
    text:
      `
        «Черт-черт! Да как это все понимать…»
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 287,
    text:
      `
        Руки предательски дрожали после пережитого. Сердце колотилось, а воздух вокруг сгустился от напряжения.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 288,
    text:
      `
        Мортимер не отрывал руки от поясной сумки. Его походка, сосредоточенный взгляд — все выдавало, насколько ценна эта улика. Казалось, он верил: в ней скрыт ключ к разгадке.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 289,
    text:
      `
        «Пускай док занимается своими исследованиями с тем психованным алкоголиком, а меня сейчас куда сильнее заботили последствия нашей ночной вылазки. Каков шанс, что они узнают, кто мы такие или где остановились?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 290,
    text:
      `
        «Ведь разговор с Отто так или иначе мог выдать наше местоположение. Или по крайне мере навести на личностей, активно интересующихся обстановкой города».
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 291,
    text:
      `
        Он из тех людей, у которых чем тяжелее карман, тем развязнее язык. Готов и мать родную продать, главное заплати.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 292,
    text:
      `
        Я изо всех сил сжал кулаки — ногти глубоко впились в кожу. Боль пронзила тело и встряхнула разум, заставив собраться и продолжить обдумывать ситуацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 293,
    text:
      `
        «Но что делать дальше? Сидеть и смиренно ждать, что обнаружит доктор? Прежде чем думать о будущем, нужно попробовать поговорить с бардом. Мне кажется, он должен что-то знать о происходящем в городе».
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 294,
    text:
      `
        «Его взволнованное поведение и внезапное появление — одна из немногих ниточек, ведущих к распутыванию этого клубка».
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 295,
    text:
      `
        Погруженный в размышления, я на несколько минут перестал различать перед собой дорогу. Просто знал, где находится пункт назначения и шел по инерции.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 296,
    text:
      `
        Забавно, ведь если бы кто-то захотел напасть на нас — лучшего момента не сыскать. Однако из душевного равновесия меня выбило нечто иное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 297,
    text:
      `
        — Эй, господа! 
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    music: require('../../../../Media/Audio/TDP/Music/Hugo.mp3'),
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 298,
    text:
      `
        Я резко развернулся и потянулся за кинжалом, подумав, что нас все же раскрыли. Но, к счастью, голос принадлежал не стражнику.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 299,
    text:
      `
        Это был достаточно худощавый невысокий человек, с ехидной ухмылкой, одетый в одежду типичного путешественника. На вид около лет тридцати. 
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 300,
    text:
      `
        Но учитывая последние события, он вызывал слишком много опасений. И абсолютно никакого доверия. Особенно при таком незаметном появлении.
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 301,
    text:
      `
        Да и доктор выглядел напряженно, к тому же ему наверняка не терпелось вернуться к своему исследованию, а не разбираться с сомнительными личностями.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 302,
    text:
      `
        «Нужно как можно быстрее от него избавиться, пока еще сильнее не влипли».
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 303,
    text:
      `
        — Не желаете ли что-нибудь приобрести? 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 304,
    text:
      `
        — Мужик… ты хоть понимаешь, какой сейчас час? Что тебе от нас нужно?
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 305,
    text:
      `
        — О, прошу прощения. Просто вы были так сильно чем-то взволнованы. Вот и решил, что вам пригодятся мои товары. 
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 306,
    text:
      `
        Он учтиво поклонился и протянул свою руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 307,
    text:
      `
        — К слову, можете звать меня Хьюго! Я, своего рода, торговец, кхм… редкостями…
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    speakerR: 'Хьюго',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 308,
    text:
      `
        «Малахольный какой-то… Поскорее бы от него свалить. Но, такого и обижать как-то даже стыдно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 309,
    text:
      `
        Я демонстративно отвернулся, показывая нежелание контактировать. Что-то в нем сильно настораживало и отталкивало.
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 310,
    text:
      `
        Мортимер незаметным движением привлек мое внимание и постучал пальцем по запястью, напоминая об ограниченном времени. К тому же, факт погони исключать было нельзя.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 311,
    text:
      `
        — Извиняй, но мы торопимся, нам сейчас не до покупок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 312,
    text:
      `
        — О! Надолго вас не задержу, Сэр! Я просто уверен, что вы обязаны взглянуть на мой ассортимент. Много времени это не отнимет.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speakerR: 'Хьюго',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets.jpg')
  },

  {
    id: 313,
    text:
      `
        Мужичок скользнул в сторону и кивком указал на маленькую тележку. Беглым взглядом я осмотрел выставленные на продажу товары.
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 314,
    text:
      `
        «Предсказуемо. Сплошная чепуха: всякие амулеты, обереги и прочие безделушки».
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 315,
    text:
      `
        Я вздохнул и повернулся к Мортимеру, чтобы больше тут не задерживаться, но Хьюго в один момент оказался прямо перед моим лицом. В руках он сжимал черный потертый флакон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 316,
    text:
      `
        — Вот. Взгляните. Эти духи прямиком с востока станут замечательным подарком для вашей избранницы.
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speakerR: 'Хьюго',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 317,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 318, image: require('../../../../Media/Images/TDP/Items/Poiton.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 318,
    text:
      `
        — Всего каких-то десять крон, и этот редчайший экземпляр будет ваш. От их запаха никто не сможет устоять.
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    speaker: 'Хьюго',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 319,
    text:
      `
        Он так настойчиво пихал мне в лицо флакон, что хотелось оттолкнуть его, а склянку разбить. Зачем эта дрянь? Монашке дарить? Хотя… может, потом удастся перепродать? Вдруг и правда редкость.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 320,
    text:
      `
        «Идея, конечно, заманчивая… Но стоит ли оно того?»
      `,
    buttons: [
      {
        text: 'Купить',
        goTo: 321
      },
      {
        text: 'Не покупать',
        goTo: 329
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 321,
    text:
      `
        Тяжело вздохнув, я достал кошелек и отсчитал десять крон. Монеты со звоном улетели в его скромный мешочек. Торгаш расплылся в хищной улыбке и чуть ли не швырнул мне свои духи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Coins.mp3'),
    stats: [
      { story: EStoriesEn.TDP, value: -10, category: 'Item', id: 'Money' },
      { story: EStoriesEn.TDP, value: +1, category: 'Item', id: 'Poiton' }],
    achievement: { story: EStoriesEn.TDP, name: 'MarthaPresent' },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 322,
    text:
      `
        — Вы не прогадали, сэр! Надеюсь, наши пути еще пересекутся! Могу ли я узнать ваше имя для предоставления скидки в следующий раз? 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speakerR: 'Хьюго',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 323,
    text:
      `
        Не знаю, что на меня нашло, но я без каких-либо раздумий ответил.
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 324,
    text:
      `
        — Генрих… 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 325,
    text:
      `
        В этот момент Хьюго уже забыл обо мне и спешным шагом ринулся к своей повозке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 326,
    text:
      `
        Мортимер, наблюдая за этим, только недовольно покачал головой. Ему явно не понравилась такая растрата средств. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 327,
    text:
      `
        Но деньги всегда можно было приобрести. А вот поистине редкие товары добыть гораздо сложнее. Будем надеяться, что оно того стоило.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 328,
    text:
      `
        Не теряя больше времени, мы с доктором продолжили наш путь дальше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 329,
    text:
      `
        Однако здравый смысл всё же взял вверх. Нечего тратить деньги на такую дурость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 330,
    text:
      `
        — Извините, но мы стеснены в средствах. Как-нибудь в следующий раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 331,
    text:
      `
        Торговец отступил назад к своей телеге. Некоторое время он смотрел в пол, но затем снова уставился на меня пронзительным взглядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 332,
    text:
      `
        — Тогда до следующих встреч, уважаемый! Позвольте узнать ваше имя?
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    speakerR: 'Хьюго',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Hugo.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 333,
    text:
      `
        Не знаю, что на меня нашло, но я без каких-либо раздумий ответил.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 334,
    text:
      `
        — Генрих… 
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 335,
    text:
      `
        Впрочем, Хьюго достаточно быстро потерял ко мне какой-либо интерес. Просто поклонился и вернулся к своим товарам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 336,
    text:
      `
        Мортимер встретил меня кивком, видимо обрадовавшись, что я решил сэкономить. Не теряя больше времени, мы с доктором продолжили наш путь дальше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 337,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'StayPut' }) >= 1
        },
        goTo: 338
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'HideWagon' }) >= 1
        },
        goTo: 601
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'AskForHelp' }) >= 1
        },
        goTo: 602
      }
    ],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Night_Streets_2.jpg')
  },

  {
    id: 338,
    text:
      `
        И вот, спустя немного времени, мы добрались до места нашего отдыха. Немного переведя дух, я на всякий случай осмотрел повозку на предмет повреждений или кражи.
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    music: require('../../../../Media/Audio/TDP/Music/Glaswer.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 339,
    text:
      `
        Все было в порядке. Лошади стояли смирно, повернув морды в мою сторону. Видимо, услышав копошение, к нам вышли остальные.
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 340,
    text:
      `
        Они встретили нас тревожными взглядами, а на лицах застыл немой вопрос: как же все прошло.
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 341,
    text:
      `
        — Нам нужно покинуть это место. Обсудим все по приезду. Залезайте.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 342,
    text:
      `
        «Нужно проверить, ведется ли преследование? Эта неопределенность не дает покоя. Как и ожидание».
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Thinking.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/City_Gates_Closed_Evening.jpg')
  },

  {
    id: 601,
    text:
      `
        И вот, спустя немного времени, мы добрались до места нашего отдыха. Немного переведя дух, я на всякий случай осмотрел повозку на предмет повреждений или кражи.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    music: require('../../../../Media/Audio/TDP/Music/Glaswer.mp3'),
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Thinking.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 343,
    text:
      `
        Все было в порядке. Лошади стояли смирно, повернув морды в мою сторону. Видимо, услышав копошение, к нам вышли остальные.
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 344,
    text:
      `
        Они встретили нас тревожными взглядами, а на лицах застыл немой вопрос: как же все прошло.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 345,
    text:
      `
        — Нам нужно покинуть это место. Обсудим все по приезду. Залезайте.
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 346,
    text:
      `
        «Нужно проверить, ведется ли преследование? Эта неопределенность не дает покоя. Как и ожидание». 
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Thinking.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_02_Evening.jpg')
  },

  {
    id: 602,
    text:
      `
        И вот, спустя немного времени, мы добрались до места нашего отдыха. Немного переведя дух, я на всякий случай осмотрел повозку на предмет повреждений или кражи.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    music: require('../../../../Media/Audio/TDP/Music/Glaswer.mp3'),
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Thinking.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 347,
    text:
      `
        Все было в порядке. Лошади стояли смирно, повернув морды в мою сторону. Видимо, услышав копошение, к нам вышли остальные.
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 348,
    text:
      `
        Они встретили нас тревожными взглядами, а на лицах застыл немой вопрос: как же все прошло.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 349,
    text:
      `
        — Нам нужно покинуть это место. Обсудим все по приезду. Залезайте.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 350,
    text:
      `
        «Нужно проверить, ведется ли преследование? Эта неопределенность не дает покоя. Как и ожидание». 
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Thinking.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Glaswer_Street_Evening.jpg')
  },

  {
    id: 351,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 352 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 352,
    text:
      `
        Стараясь не привлекать лишнего внимания и делая большие круги по дороге, мы добрались до южной части города, скрытой от посторонних глаз. Раньше это место использовали проезжающие торговцы для временного хранения товаров. 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 353,
    text:
      `
        Но из-за постоянного расширения Гласвера, некоторые улочки становились слишком труднодоступными, и большая часть грузовых телег просто перестала в них помещаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 354,
    text:
      `
        Поэтому, со временем эта область стала практически заброшенной. Жилых домов тут нет, да и бродягам нечем поживиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 355,
    text:
      `
        «Для временного убежища, вполне себе».
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 356,
    text:
      `
        Здесь было место, где спрятать повозку, импровизированное стойло для лошадей и небольшое подвальное помещение со всем необходимым для двух-трех дней ночлега.
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 357,
    text:
      `
        Перед тем, как сообщить всем о прибытии, я проверил состояние маскировки, а заодно попытался прислушаться, в надежде услышать чье-то присутствие. Но к счастью, мы были здесь одни.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 358,
    text:
      `
        Теперь можно выдохнуть спокойно, по крайней мере сейчас. Нужно проверить как там Мортимер и остальные. 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 359,
    text:
      `
        Док был так поглощен своим исследованием, что начал анализ в дороге.
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 360,
    text:
      `
        Когда я приоткрыл шторку, Мортимер что-то обсуждал с Дитрихом. Ассистент времени не терял и принялся смешивать в своих колбах некие растворы, отчего от них исходил неприятный запах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 361,
    text:
      `
        От него Джоанна недовольно прикрыла руками нос. Выглядела она сонливо, очевидно наш ночной приход разбудил ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Joanne.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 362,
    text:
      `
        Виг первый заметил меня и смерил недовольным взглядом, а затем приобнял сестренку, пытаясь успокоить поглаживаниями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Vig.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 363,
    text:
      `
        Марта смотрела то на доктора, то на меня, пытаясь переварить происходящее. Было видно, что у нее на уме вертелось множество вопросов. Но сейчас она должна находиться рядом с детьми, чтобы они меньше нервничали.
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 364,
    text:
      `
        Но вот кто действительно выглядел как не в своей тарелке, так это бард. Джек вздрагивал от каждого шороха и хаотично перебирал пальцами. А эксперименты доктора с кровью, явно беспокоили его сильнее всего.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 365,
    text:
      `
        Я был изрядно вымотан, поэтому решил начистоту поговорить с ним. Бард так резко дернулся от моего приближения, что у него перехватило дыхание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 366,
    text:
      `
        Похлопав его по ноге, чтобы привлечь внимание, я кивком показал в сторону выхода.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 367,
    text:
      `
        — Нам надо поговорить. Вылезай.
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 368,
    text:
      `
        — Что? Сейчас? И… о чем? 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 369,
    text:
      `
        — Успокойся. Просто хочу разобраться в происходящем. Нарушать условия договора — не собираюсь. Если ты заплатил за перевозку, я тебя вывезу, не переживай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Inside_Wagon.jpg')
  },

  {
    id: 370,
    text:
      `
        Джек немного успокоился и смиренно вылез из повозки.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 371,
    text:
      `
        — Я… я слушаю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 372,
    text:
      `
        — Во-первых, не сочти за грубость, но тебя зовут Джек, да? Просто в такой суматохе сложно запоминать новые имена.
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 373,
    text:
      `
        — Да, Джек… Джек Рейнер.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 374,
    text:
      `
        —Джек… имя иностранное. Ты с севера?
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Thinking.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 375,
    text:
      `
        — Да. С островов. Но… извините, зачем вам эта информация?
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 376,
    text:
      `
        — Мне всё интересно, как иностранец оказался у нас в богом забытой стране, да еще и в самом прогнившем во всех смыслах городе, из которого теперь отчаянно пытается сбежать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 377,
    text:
      `
        — Вы же… вы сказали, что вас это не интересует.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 378,
    text:
      `
        — Не совсем так. Я сказал, что не собираюсь нарушать условия контракта. Но мне важно знать, кого я перевожу, чтобы понимать, какие опасности ждут впереди. 
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 379,
    text:
      `
        —  То, что я не расспросил тебя с самого начала, ошибка. Но теперь нам с тобой нужно это исправлять. Итак, Джек. Почему ты скрываешься? 
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 380,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Person', id: 'Jack' }) >= 1
        },
        goTo: 394
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Person', id: 'Jack' }) <= 0
        },
        goTo: 381
      }
    ],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 381,
    text:
      `
        — Умерьте пыл, господин Гарнер. Я ни в чем не виноват, и вам этого будет достаточно. Никто не имеет право вести себя так высокомерно.
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 382,
    text:
      `
        После этих слов на меня нахлынул неконтролируемый прилив ярости. Я быстро сократил между нами расстояние и схватил за рубаху, слегка приподняв его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 383,
    text:
      `
        «Ударить разок по зубам, сразу станет разговорчивее…»
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 384,
    text:
      `
        — Сейчас в городе происходит какая-то опасная хрень. А ты вероятнее всего в курсе происходящего, если вообще не причастен к этому. Поэтому ответы мне нужно получить сейчас же! 
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    message: 'Бард помнит вашу жадность и обижается.',
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Annoyed.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 385,
    text:
      `
        Разумеется, наш спектакль был прекрасно слышен и другим пассажирам. Даже Дитрих с Мортимером отвлеклись от своих исследований, пристально наблюдая за ситуацией.  
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 386,
    text:
      `
        Доктор не двигался с места, продолжая держать пробирки в руках. Он смотрел на все это с недобрым взглядом и был готов остановить меня, если бы я попытался применить силу.
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 387,
    text:
      `
        Виг прикрывал собой Джоанну, стараясь спрятать ее от любой опасности. Мальчик сильно сжимал кулаки, в его глазах читалась неприкрытая ненависть.
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Vig_Angry.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 388,
    text:
      `
        Но ярче всех отреагировала Марта. Она выскочила из повозки и направилась ко мне, схватив за рукав. В порыве гнева я хотел оттолкнуть ее, но успел вовремя одуматься.
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha_Scared.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 389,
    text:
      `
        — Во имя Всевышнего, господин Гарнер, прекратите немедленно! Разве так поступают благородные господа?
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha_Scared.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 390,
    text:
      `
        — Не припомню, когда я таковым стал. Марта, прошу, не вмешивайтесь. Я стараюсь ради нашего же блага. Есть веские причины полагать, что он скрывает важную информацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Annoyed.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 391,
    text:
      `
        — Нет, я не уйду, пока вы немедленно не прекратите это издевательство! 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 392,
    text:
      `
        — Сэр… я… я все скажу. Только перестаньте, вы пугаете детей! Я понял ошибку… пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 393,
    text:
      `
        Я выдохнул и ослабил хватку, выпустив из рук барда. Марта посмотрела на меня с презрением и вернулась к детям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    message: 'Ваши отношения с пассажирами изменились.',
    stats: [
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Martha' },
      { story: EStoriesEn.TDP, value: -2, category: 'Person', id: 'Jack' },
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Ditrich' },
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Joanne' },
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Vig' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 394,
    text:
      `
        Джек выглядел страшно растерянным, но со временем самообладание начало к нему возвращаться. Он поднял голову и коротко кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 395,
    text:
      `
        — Я понимаю, и все скажу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 396,
    text:
      `
        Юноша взял небольшую паузу перед тем, как начать свой рассказ, словно собираясь с мыслями.
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 397,
    text:
      `
        — Я оказался в Гласвере несколько недель назад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 398,
    text:
      `
        — Скажем так, в одном из ранее посещенных городов у меня был крайне приятный опыт общения с прекрасной дамой… И при этом не слишком приятное знакомство с ее мужем, о котором мне ничего не сообщили! 
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 399,
    text:
      `
        В отдалении послышался смешок Дитриха, но Мортимер быстро приструнил его легким толчком локтя.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 400,
    text:
      `
        Джек явно смутился от такой реакции, но под моим жестким взглядом не стал противиться и продолжил.
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 401,
    text:
      `
        — Так вот… как вы понимаете, мне нужно было срочно бежать. Гласвер оказался ближайшим городом, подходящим для временного укрытия.
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 402,
    text:
      `
        — Здешний лорд, господин Ульбрихт, с радостью принял такого скромного барда под свое крыло.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 403,
    text:
      `
        Но тут снова из повозки послышался прокуренный голос Дитриха.
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 404,
    text:
      `
        — Не знал, что эта свинья — поклонник искусств.
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 405,
    text:
      `
        Дитриха снова постигла кара Мортимера. На этот раз удар был более существенен. Алхимик не стал больше препираться и вернулся к делам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/Slap.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 406,
    text:
      `
        — Он… действительно любит искусство. Постоянно устраивает пышные приемы. Я даже начал уставать от их количества, так как выступать мне приходилось на каждом из них.
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 407,
    text:
      `
         — Но… в один момент я стал замечать кое-какие странности. Господин увлекся… странного рода развлечениями.
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 408,
    text:
      `
        — Какого рода? 
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 409,
    text:
      `
        К нашему разговору подключился уже Мортимер, неспешно вылезающий из повозки.
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 410,
    text:
      `
        — Ну понимаете, он принимал некие… не слишком полезные препараты.
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 411,
    text:
      `
        — Хах, ясно. Жирдяй подсел на наркоту. Ничего удивительного.
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 412,
    text:
      `
        — Затем, во дворце стали появляться странные люди в масках. А господин устраивал еще более грандиозные пиршества. И как раз недавно, на одном таком, был убит гость.
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 413,
    text:
      `
        — И как вы догадались, я подневольно стал свидетелем этого инцидента. От ужаса у меня даже онемели руки, но через силу пришлось продолжить играть, так как понимал, что нахожусь на волосок от смерти.
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 414,
    text:
      `
        Марта закрывала уши Джоанны. На ее лице отражался ужас и отчаяние. Даже Дитрих оставил колкие комментарии при себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha_Scared.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 415,
    text:
      `
        — Не горю желанием рассказывать дальнейшие события. Поймите, все они стали будто сходить с ума. Разумеется, я дал деру при первой же возможности. Но теперь город закрыт…
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 416,
    text:
      `
        — Получается, что причина закрытия города кроется в неадекватности местной аристократии. Но меня еще кое-что смущает… 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 417,
    text:
      `
        — Полагаю, по началу они убивали всех без разбора. Никто не будет предпринимать каких-либо мер, когда пропадают люди из низшего сословия.
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 418,
    text:
      `
        — Все верно, они просто ловили бездомных, но затем им этого оказалось мало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 419,
    text:
      `
        Разговор на некоторое время оказался прерван очередным вмешательством Дитриха. Он немного потряс в руке колбу с неким раствором и важно заявил:
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 420,
    text:
      `
        — Красавчик говорит правду. Я уже сейчас могу сказать, что в крови содержится большое количество наркотических и спиртосодержащих веществ. Жертва на момент смерти была просто вусмерть накачена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 421,
    text:
      `
        Я потер подбородок и задумчиво замычал. В голове начала зарождаться безумная идея. 
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 422,
    text:
      `
        — Джек, как часто проводились праздники?
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Thinking.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 423,
    text:
      `
        — До моего побега… каждую ночь. Около десяти часов вечера, если я правильно помню.
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 424,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Item', id: 'Letter' }) >= 1
        },
        goTo: 425
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Item', id: 'Letter' }) <= 0
        },
        goTo: 429
      }
    ],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 425,
    text:
      `
        Мы с Мортимером синхронно посмотрели друг на друга. Вспомнив записку и таинственного незнакомца, много чего стало обретать смысл.
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 426,
    text:
      `
        — Отто знал об этом. Он сознательно дал на них наводку. Неужели наш единственный способ сбежать — связаться с какими-то психами? 
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 427,
    text:
      `
        «Или же этот сукин сын заманивает нас в ловушку?»
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech_Thinking.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 428,
    text:
      `
        — Да… теперь я ни капли не сомневаюсь в решении воспользоваться их щедрым предложением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 429,
    text:
      `
        — Нам надо попасть туда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 430,
    text:
      `
        Что?! 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 431,
    text:
      `
        — Слушайте… город заперт. Пути наружу нет. Эти парни — просто очередные психи, упивающиеся наслаждениями и странной наркотической лабудой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 432,
    text:
      `
        — Если бы мы смогли втереться к ним в доверие, то появился бы шанс покинуть город. Или у вас имеются другие предложения?
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 433,
    text:
      `
        — Сомневаюсь, что они кого-то выпустят даже будь вы лучшими друзьями. К тому же, не забывайте, какого рода это мероприятие. Очень высока вероятность ловушки или чего похуже.
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 434,
    text:
      `
        — Риск есть, но я не вижу другого выхода. А действовать нужно быстро. Доктор, у вас имеются какие-нибудь средства, способные притупить опьянение? 
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 435,
    text:
      `
        — Изготовление такого рода препаратов занимает несколько дней… а вы, как я понимаю, все-таки хотите отправиться уже завтрашним вечером? 
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 436,
    text:
      `
        — Да… что ж, тогда придется действовать осторожнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 437,
    text:
      `
        — И еще кое-что, раз вы настроены пойти. Там обычно все приглашенные прибывали с парами.
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 438,
    text:
      `
        — Значит, отправлюсь с Мартой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 439,
    text:
      `
        — Что?! Да как вы такое в мыслях могли допустить?! Я служительница церкви, а не какая-то… падшая на грехи блудница!
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 440,
    text:
      `
        — Никто вас такой и не считает, но иначе туда не попасть.
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 441,
    text:
      `
        — Я не смогу отправиться в это царство порока! Вы хоть понимаете, насколько низко предлагать подобное? 
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 442,
    text:
      `
        — Да. Понимаю. А еще я понимаю, что если мы ничего не предпримем в течение нескольких дней, то нас арестуют и отправят на увеселения уже в качестве овечек на забой.
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 443,
    text:
      `
        — Я вынужден согласиться с господином Гарнером. Других зацепок все равно нет. Если не ради нас, то сделайте ради ваших воспитанников.
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 444,
    text:
      `
        — Ваша логика понятна, но… за такое мне придется сложить с себя сан, а это непростительно....
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 445,
    text:
      `
        — Это подвиг во имя веры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 446,
    text:
      `
        — Я… я соглашусь, если только не придется участвовать в чем-то… непристойном. И чтобы ни одна из этих заблудших душ не смела ко мне и пальцем прикоснуться.
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 447,
    text:
      `
        — Я прослежу, чтобы вы оставались в безопасности, даю слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 448,
    text:
      `
        Марта ответила на это удивленным взглядом, а затем стеснительной улыбкой. Она выглядела обеспокоенной, но услышав мою решимость в голосе — немного сбавила напряжение.
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 449,
    text:
      `
        Но тут свое мнение озвучил старший из воспитанников. 
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 450,
    text:
      `
        — А наше с Джоанной мнение кого-нибудь интересует? Я против. 
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    speakerR: 'Виг',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Vig.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 451,
    text:
      `
        Дитрих разразился в ответ мерзким смешком. Как же мне хотелось ударить эту скотину чем-то тяжелым. Впрочем, к пацану я сейчас испытывал схожие ощущения.
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 452,
    text:
      `
        «Только все начало налаживаться, и теперь этот щенок встревает». 
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 453,
    text:
      `
        Но мне удалось взять себя в руки. Я постарался уверить мальчика в надежности затеи исключительно правдивыми словами.
      `,
    buttons: [
      {
        text: '',
        goTo: 1000
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 1000,
    text:
      `
        — Может я не выгляжу, как образец доблестного рыцаря, но с кучкой пьяных идиотов уж разберусь.
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 454,
    text:
      `
        Но на это он только сильнее нахмурился и наставил на меня два пальца, как бы демонстрируя, что проследит за выполнением обещания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    speakerR: 'Виг',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Vig.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 455,
    text:
      `
        Я поборол желание одарить его оплеухой и обратился уже к Джеку.
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 456,
    text:
      `
        — Джек. Ты говорил, что-то про маскарад. Значит, нам нужны будут костюмы?
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 457,
    text:
      `
        — Да… они обставляли это безумие как праздник, называемый бал-маскарад.
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 458,
    text:
      `
        — Надо будет завтра основательно подготовиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 459,
    text:
      `
        — Вы можете воспользоваться моими запасными масками. Они пока еще не пропахли чесноком, но это всяко лучше, чем ничего.
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 460,
    text:
      `
        — Что-ж, ладно, о деталях подумаем на свежую голову. Все достаточно измотаны. Прошу, следуйте за мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 461,
    text:
      `
        Я дождался пока Мортимер соберет свою полевую лабораторию, и неспешным шагом отправился ко входу в подвал.
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Docks_Evening.jpg')
  },

  {
    id: 462,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 463 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 463,
    text:
      `
        Зайдя внутрь, нас встретил небольшого размера зал, в котором находился стол, диван и пара стеллажей. Также, в отдельной комнате была небольшая спальня и кабинет.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 464,
    text:
      `
        Жестом я показал Мортимеру на кабинет, в котором он может разложиться и не спеша продолжить свое исследование. Дитрих без лишних слов последовал за ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 465,
    text:
      `
        Джек, осматриваясь по сторонам, аккуратно присел на край дивана.
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 466,
    text:
      `
        — Дети, похоже, сильно устали, в той комнате находится кровать. Марта, предлагаю вам с воспитанниками лечь там.
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 467,
    text:
      `
        Девушка явно сомневалась, не решаясь пройти дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 468,
    text:
      `
        — Поверьте, беспокоится не о чем. Постельное белье новое, спокойно располагайтесь и отдыхайте.
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 469,
    text:
      `
        — Но… если вы не против… А где же тогда разместиться Вам? Все-таки мы здесь гости…
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 470,
    text:
      `
        — После такого насыщенного дня и полученного объема информации, я в эту ночь точно не смогу сомкнуть глаз… в худшем случае, постелю себе на полу, ничего страшного.
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 471,
    text:
      `
        Марта одобрительно кивнула и проведя детей в комнату, осторожно закрыла дверь.
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 472,
    text:
      `
        Осмотрев помещение, я устроился на другом краю дивана и погрузился в размышления. Сначала мысли были четкими, потом начали путаться, образы расплывались… Не заметил момента, когда раздумья плавно перетекли в сон.
      `,
    buttons: [
      {
        text: '',
        goTo: 473
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
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
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 474,
    text:
      `
        Передо мной раскинулся удивительный мир: легкий, едва уловимый поток воздуха окутывал, даря приятное тепло и умиротворение.
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    music: require('../../../../Media/Audio/TDP/Music/HenriechDream01.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 475,
    text:
      `
        Я не сомневался, что это сон, но просыпаться не хотелось. Стоило лишь открыть глаза — и несправедливая реальность снова обернется тесной клеткой, лишающей воздуха и надежды.
      `,
    buttons: [
      {
        text: '',
        goTo: 476
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 476,
    text:
      `
        «Решения… Выборы… Нелегко быть лидером и принимать последствия».
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 477,
    text:
      `
        Ответственность давила невидимым грузом. Каждое новое событие вгрызалось в душу, оставляя глубокие раны.
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 478,
    text:
      `
        — Разве ты не всегда был таким?
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 479,
    text:
      `
        Нежный, мелодичный голос заставил резко обернуться. По сердцу прошлась ноющая тоска, когда увидел знакомую фигуру.
      `,
    buttons: [
      {
        text: '',
        goTo: 480
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 480,
    text:
      `
        — Всегда, Селена, всегда…
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 481,
    text:
      `
        Девушка улыбнулась и осторожно коснулась моей руки. Ее пальцы были осязаемыми, живыми.
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 482,
    text:
      `
        В памяти всплывали обрывки упущенного детства, едва различимые, будто тени на стене. Они прятались за пеленой потускневших воспоминаний, но сейчас вдруг стали четче.
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 483,
    text:
      `
        «Я слышу звонкий смех, который когда‑то был частью меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    simple: require('../../../../Media/Audio/TDP/Sounds/LittleGirlLaugh.mp3'),
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 484,
    text:
      `
        — Почему ты здесь? Селена, которую я знал, умерла много лет назад…
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 485,
    text:
      `
        Я не чувствовал ни сожалений, ни боли — все это осталось далеко позади, в прошлом, которое давно было пережито и оплакано. Теперь оно смотрело на меня тихими, мирными глазами Селены.
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 486,
    text:
      `
        — Глупый братец, разве ты не видишь, как запутался в себе?
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    speakerR: 'Селена',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 487,
    text:
      `
        — Я иду к намеченным целям и добиваюсь их, несмотря на препятствия. Так было всегда.
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 488,
    text:
      `
        Девушка закатила глаза. Она на мгновение прижала указательный палец к области сердца, проверяя, бьется ли оно.
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 489,
    text:
      `
        — Ты тонешь во мраке приближающейся бури.
      `,
    buttons: [
      {
        text: '',
        goTo: 490
      }],
    speakerR: 'Селена',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 490,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'KillHealer' }) >= 1
        },
        goTo: 491
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'KillHealer' }) <= 0
        },
        goTo: 501
      }
    ],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 491,
    text:
      `
        — Чем провинился этот парнишка?
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    speakerR: 'Селена',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 492,
    text:
      `
        Призрачные очертания служащего часовни возникли передо мной. Выражение леденящего страха навсегда застыло на молодых чертах лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Healer_Scared.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 493,
    text:
      `
        — Ты лишил его жизни… Разве это было действительно необходимо?
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    speakerR: 'Селена',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 494,
    text:
      `
        Собственное подсознание загоняло в ловушку. Взгляд метался между покойным и сестрой.
      `,
    buttons: [
      {
        text: '',
        goTo: 495
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 495,
    text:
      `
        — Я сделал необходимое действие, чтобы защитить остальных.
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 496,
    text:
      `
        — Скорее, ты выбрал самый удобный для себя выход, не задумываясь о последствиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 497
      }],
    speakerR: 'Селена',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 497,
    text:
      `
        — Кем ты станешь, убивая всех без разбору?
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    speakerR: 'Селена',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 498,
    text:
      `
        — И чем будешь отличаться от прогнившей аристократии?
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    speakerR: 'Селена',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 499,
    text:
      `
        Фразы Селены проникали под кожу, как невидимые шипы, заставляя внутренний мир дрожать и колебаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 500,
    text:
      `
        — Это просто случайность. Я действовал согласно инстинктам.
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 501,
    text:
      `
        Она отступила на шаг, и вдруг ее плечи затряслись в беззвучном рыдании, а пальцы судорожно сжались.
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 502,
    text:
      `
        — Я боюсь за тебя Генрих…
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    speakerR: 'Селена',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Selena.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 503,
    text:
      `
        Уверенность, казавшаяся незыблемой, начала рушиться под натиском хрупкой одинокой фигуры того, кто когда‑то был мне ближе всех на свете.
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 504,
    text:
      `
        Внезапно возникшее изображение задрожало, покрылось помехами и начало рассыпаться на фрагменты, обнажая за собой иные реальности.
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    effect: 'VHS',
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 505,
    text:
      `
        Селена растворилась в мерцающем свете. Справа заиграли блики, складываясь в образы цветущих садов и ясного неба, а слева разверзлась тьма — густая, вязкая, поглощающая все вокруг.
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 506,
    text:
      `
        «Опять эти чертовы выборы? Пойду на…»
      `,
    buttons: [
      {
        text: 'Светлую сторону',
        goTo: 507
      },
      {
        text: 'Темную сторону',
        goTo: 536
      }],
    message: 'По ходу повествования вы не раз будете сталкиваться со сложными моральными выборами, от которых будет меняться отношение героя к окружающим вещам.',
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dream_Henriech.jpg')
  },

  {
    id: 507,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 508 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 508,
    text:
      `
        Солнечные лучи рассыпались по зеркальной глади небольшого озера. Сад казался до боли реальным. Сладкие ароматы незнакомых цветов кружили голову, пробуждая давно забытые ощущения.
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    music: require('../../../../Media/Audio/TDP/Music/LightSide.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 509,
    text:
      `
        — Генрих?
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 510,
    text:
      `
        В глазах Марты читалась неподдельная тревога. Она внимательно смотрела на меня и, уловив мое замешательство, улыбнулась — тепло и ободряюще.
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 511,
    text:
      `
        — Я знала, что в вас осталась человечность…
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 512,
    text:
      `
        — Хотелось бы в это верить.
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    message: 'Генрих желает быть ближе к хорошим поступкам.',
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 513,
    text:
      `
        — Впереди долгий путь, где каждый шаг будет проверять на прочность. Ужас и страх будут пытаться сломить вас, но вы должны сохранить достоинство.
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 514,
    text:
      `
        Уверенным движением, она взяла мою руку, переплетая пальцы.
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 515,
    text:
      `
        «И пусть это все не по настоящему, но я хочу…»
      `,
    buttons: [
      {
        text: 'Отстраниться',
        goTo: 516
      },
      {
        text: 'Принять тепло',
        goTo: 520
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 516,
    text:
      `
        «Подобная близость ни к чему хорошему не приведет».
      `,
    buttons: [
      {
        text: '',
        goTo: 517
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 517,
    text:
      `
        Я отступил на несколько шагов, намеренно отводя взгляд от Марты. Заставляя себя сосредоточиться на окружающем пейзаже.
      `,
    buttons: [
      {
        text: '',
        goTo: 518
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 518,
    text:
      `
        Девушка не показала разочарования — лишь едва заметно пожала плечами.
      `,
    buttons: [
      {
        text: '',
        goTo: 519
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 519,
    text:
      `
        — Ваше право.
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 520,
    text:
      `
        «Почему сегодня все иначе? Почему она меня манит так сильно?»
      `,
    buttons: [
      {
        text: '',
        goTo: 521
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 521,
    text:
      `
        Я сделал шаг вперед, сокращая расстояние между нами. Оказался настолько близко, что мог видеть трепет ее ресниц и легкий румянец на щеках.
      `,
    buttons: [
      {
        text: '',
        goTo: 522
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 522,
    text:
      `
        Рука невольно потянулась к волосам, бережно заправляя рыжую прядь за ухо. В следующий миг, мои объятия сжимали изящное тело, чувствуя, как напряжение растворяется.
      `,
    buttons: [
      {
        text: '',
        goTo: 523
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 523,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/TDP/Cutscenes/Martha_Hug.mp4'), goTo: 524 },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 524,
    text:
      `
        Ее запах — легкий, цветочный — мгновенно завладел сознанием. Окружающие проблемы более перестали существовать, оставляя лишь два хрупких силуэта в этом иллюзорном мире.
      `,
    buttons: [
      {
        text: '',
        goTo: 525
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 525,
    text:
      `
        — Марта, я…
      `,
    buttons: [
      {
        text: '',
        goTo: 526
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 526,
    text:
      `
        Пальцы девушки скользнули по моим губам, щетине на подбородке. Она не хотела ничего слышать, только лишь отдаться полностью этому несуществующему видению.
      `,
    buttons: [
      {
        text: '',
        goTo: 527
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 527,
    text:
      `
        — Разве все это имеет смысл? Мы проснемся незнакомцами, которые пытаются выжить.
      `,
    buttons: [
      {
        text: '',
        goTo: 528
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 528,
    text:
      `
        Девушка не отстранилась, она продолжала держаться за образовавшуюся близость.
      `,
    buttons: [
      {
        text: '',
        goTo: 529
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 529,
    text:
      `
        — В ваших же силах это изменить.
      `,
    buttons: [
      {
        text: '',
        goTo: 530
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 530,
    text:
      `
        Горькая усмешка скользнула по губам. Я слегка отступил, чтобы лучше разглядеть ее лицо, но наши пальцы по‑прежнему были переплетены, не желая отпускать друг друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 531
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 531,
    text:
      `
        — А вы полны загадок…
      `,
    buttons: [
      {
        text: '',
        goTo: 532
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 532,
    text:
      `
        — Вы знаете обо мне лишь малую часть. Я способна удивить гораздо сильнее, чем вы думаете.
      `,
    buttons: [
      {
        text: '',
        goTo: 533
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 533,
    text:
      `
        Марта положила мне руку на щеку и нежно произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 534
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 534,
    text:
      `
        — Я в вас верю.
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    message: 'Даже в несуществующем мире, девушка хочет доверять вам больше.',
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Martha.png'),
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Martha' }],
    achievement: { story: EStoriesEn.TDP, name: 'NurseGarden' },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 535,
    text:
      `
        Мир вокруг еще хранил очертания видения, но вдруг я почувствовал, как чьи‑то пальцы с силой вцепились в мое плечо, настойчиво возвращая в реальность.
      `,
    buttons: [
      {
        text: '',
        goTo: 557
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Gardens_Blooming.jpg')
  },

  {
    id: 536,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 537 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 537,
    text:
      `
        Темное измерение открылось передо мной во всей своей пугающей мощи: массивные водопады низвергались в бездонные пропасти, а воздух был пропитан ощущением чего‑то неизъяснимо зловещего.
      `,
    buttons: [
      {
        text: '',
        goTo: 538
      }],
    music: require('../../../../Media/Audio/TDP/Music/DarkSide.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 538,
    text:
      `
        Едва уловимое дуновение ветра, холодное, как дыхание могилы, вызывало внутреннюю леденящую дрожь.
      `,
    buttons: [
      {
        text: '',
        goTo: 539
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 539,
    text:
      `
        Я жаждал вернуться в реальный мир, где тьма имела границы, где она была частью жизни, а не ее сутью.
      `,
    buttons: [
      {
        text: '',
        goTo: 540
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 540,
    text:
      `
        Но вдруг мой взгляд зацепился за одинокий камень, на котором, скрючившись, сидела фигура одного из моих попутчиков.
      `,
    buttons: [
      {
        text: '',
        goTo: 541
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 541,
    text:
      `
        «И почему я не удивлен?»
      `,
    buttons: [
      {
        text: '',
        goTo: 542
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 542,
    text:
      `
        Дитрих запрокинул голову, ухмыляясь черному, как смоль, небу.
      `,
    buttons: [
      {
        text: '',
        goTo: 543
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 543,
    text:
      `
        В руках он сжимал бутылку, с которой не расставался и в настоящем мире.
      `,
    buttons: [
      {
        text: '',
        goTo: 544
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 544,
    text:
      `
        — Господин Гарнер, собственной персоной!
      `,
    buttons: [
      {
        text: '',
        goTo: 545
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 545,
    text:
      `
        Мужчина натянул любезную улыбку и пригласил к нему присоединиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 546
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 546,
    text:
      `
        — Бухаешь даже во сне?
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 547,
    text:
      `
        Дитрих ничего не ответил, переводя взгляд обратно на мрачный пейзаж.
      `,
    buttons: [
      {
        text: '',
        goTo: 548
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 548,
    text:
      `
        — Забавно видеть, как вы осознаете свою сущность и не противитесь внутренним, кхм, демонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 549
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 549,
    text:
      `
        — Я просто реалист.
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    message: 'Генрих желает быть ближе к плохим поступкам.',
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 550,
    text:
      `
        Мерзкий, хриплый смех алхимика разорвал гнетущую тишину этого места.
      `,
    buttons: [
      {
        text: '',
        goTo: 551
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 551,
    text:
      `
        — Вы такой же, как и я. Потерянный, сбившийся с пути.
      `,
    buttons: [
      {
        text: '',
        goTo: 552
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 552,
    text:
      `
        — Только и остается, что слиться с тьмой внутри себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 553
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 553,
    text:
      `
        После долгого глотка спиртного, мужчина внимательно посмотрел на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 554
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 554,
    text:
      `
        — Осторожнее, Генрих.
      `,
    buttons: [
      {
        text: '',
        goTo: 555
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 555,
    text:
      `
        — Вы можете сопротивляться, но судьбу вам не изменить.
      `,
    buttons: [
      {
        text: '',
        goTo: 556
      }],
    message: 'Даже в несуществующем мире, Дитрих доволен вашим сделанным выбором.',
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Ditrich.png'),
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Ditrich' }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 556,
    text:
      `
        Мир вокруг еще хранил очертания видения, но вдруг я почувствовал, как чьи‑то пальцы с силой вцепились в мое плечо, настойчиво возвращая в реальность.
      `,
    buttons: [
      {
        text: '',
        goTo: 557
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Dark_Waterfalls.jpg')
  },

  {
    id: 557,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 558 },
    imageBack: require('../../../../Media/Images/UI/background_black.jpg')
  },

  {
    id: 558,
    text:
      `
        Голова гудела после тяжелого сна, собирая мысли воедино. Я резко очнулся и внимательно осмотрел помещение, оценивая возможные опасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 559
      }],
    music: require('../../../../Media/Audio/TDP/Music/Glaswer.mp3'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 559,
    text:
      `
        Передо мной, слегка покачиваясь, стоял сонный Джек. Его пальцы нервно теребили ворот рубашки, а взгляд метался по стенам подвала.
      `,
    buttons: [
      {
        text: '',
        goTo: 560
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 560,
    text:
      `
        — Что случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 561
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 561,
    text:
      `
        Бард сбивчиво проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 562
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 562,
    text:
      `
        — Снаружи кто-то есть… 
      `,
    buttons: [
      {
        text: '',
        goTo: 563
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Media/Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 563,
    text:
      `
        Я тихо выругался про себя, лихорадочно оглядываясь по сторонам в поисках своего кинжала.
      `,
    buttons: [
      {
        text: '',
        goTo: 564
      }],
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  },

  {
    id: 564,
    text:
      `
        «Кто бы это ни был, им лучше убраться, пока я не вышел наружу».
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('TDP', 'Глава 1', 'Часть 3', '0')
        }
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Media/Images/TDP/Persons/Henriech.png'),
    achievement: { story: EStoriesEn.TDP, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Media/Images/TDP/Backgrounds/Basment_Henriech.jpg')
  }
])
