import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { firstChoiceMessage, inventoryMessage, previousSlideMessage } from '../../../../Utils/TextConsts';

scenarioManager.addScenario({ storyName: EStoriesEn.HF, chapterName: 'Глава 1', partName: 'Инструктаж', code: '0' }, [
  {
    id: 0,
    text:
      `
       Выберите сложность:
      `,
    buttons: [
      {
        text: 'Нормально',
        goTo: 1
      },
      {
        text: 'Сложно',
        goTo: 2
      }],
    music: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  },
  {
    id: 1,
    text:
      `
 ...
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    stats: [
      { story: EStoriesEn.HF, value: 0, category: 'Choice', id: 'Difficulty' }],
    music: require('../../../../Sounds/HF/Projector.mp3'),
    simple: require('../../../../Sounds/HF/Slide.mp3'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Earth.jpg')
  },
  {
    id: 2,
    text:
      `
 ...
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    stats: [
      { story: EStoriesEn.HF, value: 1, category: 'Choice', id: 'Difficulty' }],
    ambient: require('../../../../Sounds/HF/Projector.mp3'),
    music: require('../../../../Sounds/HF/Mission.mp3'),
    simple: require('../../../../Sounds/HF/Slide.mp3'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Earth.jpg')
  },
  {
    id: 3,
    text:
      `
      <i>Либо человечество покончит с войной, либо война покончит с человечеством.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: '...',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Earth.jpg')
  },
  {
    id: 4,
    text:
      `
      1970 год 25 июля. Страны востока объединяются и образуют С.Д.С.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    message: 'С.Д.С. — Союз дружественных стран',
    simple: require('../../../../Sounds/HF/Slide.mp3'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Earth.jpg')
  },
  {
    id: 5,
    text:
      `
      В ответ на объединение запад объединяется К.А.С.З.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    message: 'К.А.С.З. — Коалиция Автоматических Стран Запада',
    simple: require('../../../../Sounds/HF/Slide.mp3'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Earth.jpg')
  },
  {
    id: 6,
    text:
      `
      <i>
      <p>— И здесь они нашли нас... 
      <p>— Военные? 
      <p>— Посмотри на него, он летит уничтожать города и людей. 
      <p>— Это враги или наши? 
      <p>— Все они одинаковые.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: '...',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 7,
    text:
      `
      Сэр! У меня ощущение, будто я смотрю какое-то аниме... Давайте уже приступим к инструктажу!
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speaker: '...',
    message: previousSlideMessage,
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 8,
    text:
      `
      Отставить - прерывать воодушевляющую речь!
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 9,
    text:
      `
      Все вы прекрасно знаете, что у каждого из вас будет своё задание в тылу врага.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 10,
    text:
      `
      Но цель у вас всех будет одна — раздобыть как можно больше информации о секретном оружии.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 11,
    text:
      `
      А теперь проведем личный инструктаж.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 12,
    text:
      `
      Всем кроме Фокса свалить!
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 13,
    text:
      `
      Фокс, высадка через 2 дня, ты один из первых. Предупреждаю, будет нелегко.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 14,
    text:
      `
      Мы высадим тебя со стелс самолета недалеко в окрестностях вражеской базы.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Atomic.jpg')
  },
  {
    id: 15,
    text:
      `
      Это джунглевые дебри. Раздобыть еду и дополнительное снаряжение придется прямо там. К сожалению, в твоем рюкзаке будет не так много места, чтобы продержаться все отведенное для миссии время.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    simple: require('../../../../Sounds/HF/Slide.mp3'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 16,
    text:
      `
      Но, как я знаю, тебе не привыкать.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 17,
    text:
      `
      В местных джунглях обитает различная живность. Также есть информация, что местная фауна не скупа на полезные растения и фрукты.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 18,
    text:
      `
      На выбор тебе дается взять с собой:
      <p>- Пистолет с глушителем
      <p>- Аптечку
      <p>- Камуфляжный костюм
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 19,
    text:
      `
      Всё это снаряжение полезно по-своему. <p>Что выберешь?
      `,
    buttons: [
      {
        text: 'Пистолет с глушителем',
        goTo: 20
      },
      {
        text: 'Аптечка',
        goTo: 21
      },
      {
        text: 'Камуфляжный костюм',
        goTo: 22
      }],
    speaker: 'Майор',
    message: firstChoiceMessage,
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 20,
    text:
      `
      Неплохо! Для бесшумного устранения врагов подойдет идеально. <p>И да, не забудь патроны.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Майор',
    stats: [
      { story: EStoriesEn.HF, value: 1, category: 'Item', id: 'PistolSil' },
      { story: EStoriesEn.HF, value: 12, category: 'Item', id: 'Ammo' }],
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 21,
    text:
      `
      Хороший выбор, при ранении все необходимое будет под рукой!
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    stats: [
      { story: EStoriesEn.HF, value: 3, category: 'Item', id: 'Bandage' },
      { story: EStoriesEn.HF, value: 2, category: 'Item', id: 'Morphine' },
      { story: EStoriesEn.HF, value: 1, category: 'Item', id: 'Splint' }],
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 22,
    text:
      `
      Для шпионской миссии самое-то, главное не попасться!
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Майор',
    stats: [
      { story: EStoriesEn.HF, value: 1, category: 'Item', id: 'Camouflage' }],
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 23,
    text:
      `
      В целом на сегодня всё!
      
      <p>Мы начнем подготовку самолета, а уже более подробную информацию передадим тебе по рации когда ты высадишься.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    message: inventoryMessage,
    speaker: 'Майор',
    imageFront: require('../../../../Images/HF/Persons/Major.png'),
    imageBack: require('../../../../Images/HF/Backgrounds/Slide_Jungle.jpg')
  },
  {
    id: 24,
    text:
      `
      `,
    buttons: [
      {
        text: ''
      }],
    music: require('../../../../Sounds/Common/Silence.mp3'),
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg'),
    simple: require('../../../../Sounds/HF/Slide.mp3'),
    smartphone: {chatId: 'HF_01', goTo: 25 }
  },
  {
    id: 25,
    text:
      `
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('HF', 'Глава 1', 'Высадка', '0')
        }
      }],
    achievement: { story: EStoriesEn.HF, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/UL/Backgrounds/Fade.jpg')
  }
])
