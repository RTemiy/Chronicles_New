import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'
import { choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Часть 6', code: '0' }, [
  {
    id: 0,
    text:
      `
        Я ощущала непередаваемые ароматы дорогого парфюма для дома, витающие в воздухе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Media/Audio/FOF/Main.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath.jpg')
  },

  {
    id: 1,
    text:
      `
        И сейчас мне было необходимо понежиться в ванне, чтобы прогреть каждую косточку в уставшем теле.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath.jpg')
  },

  {
    id: 2,
    text:
      `
        Включив воду, я нанесла на лицо маску, дабы выжать максимум пользы из сегодняшнего дня.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    ambient: require('../../../../Media/Audio/FOF/Water.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath.jpg')
  },

  {
    id: 3,
    text:
      `
        Погрузив руку в пенную воду, я ощутила приятные мурашки по телу. Когда вода почти достигла краев, быстро скинула домашний халат.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath.jpg')
  },

  {
    id: 4,
    text:
      `
        Я опустилась в ванну, наполненную лепестками свежих роз, и, положив голову на бортик, наслаждалась, закрыв глаза, вдыхая нежный аромат.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 5,
    text:
      `
        Пар окутал всю комнату, пока я медленно успокаивала мысли и чувства, которые одолевали весь день.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 6,
    text:
      `
        Тишину прервал звук капающей воды. И после абсолютного спокойствия это резало слух. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    ambient: require('../../../../Media/Audio/FOF/Droplets.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 7,
    text:
      `
        Открыв глаза, я потянулась к крану, чтобы сильнее закрыть его, но моя рука остановилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 8,
    text:
      `
        Вода окрасилась в красный цвет, и, ощущая некую панику, я взглянула на кран.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    music: require('../../../../Media/Audio/FOF/Nightmare.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 9,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { goTo: 10, video: require('../../../../Media/Images/FOF/CutScenes/Bath.mp4') },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 10,
    text:
      `
        Прямо в воду из него капала кровь.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 11,
    text:
      `
        
       Какого хрена?
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    simple: require('../../../../Media/Audio/FOF/Woman_Cry.mp3'),
    speaker: 'Кассандра',
    imageFront: require('../../../../Media/Images/FOF/Persons/Cassandra_Towel.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 12,
    text:
      `
        Быстро выскочив из ванны, я накинула халат, и, бросившись к телефону, дрожащими руками стала набирать полицию.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 13,
    text:
      `
        Нет!
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    simple: require('../../../../Media/Audio/FOF/Signal.mp3'),
    speaker: 'Кассандра',
    imageFront: require('../../../../Media/Images/FOF/Persons/Cassandra_Towel.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 14,
    text:
      `
        Я снова набрала, и снова не услышала ответа.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    simple: require('../../../../Media/Audio/FOF/Signal.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 15,
    text:
      `
        Пугающие голоса, доносились прямо за моей спиной. Я выронила телефон, и быстро выбежала за дверь, пытаясь скрыться от этого ужаса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    music: require('../../../../Media/Audio/FOF/Whispers.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 16,
    text:
      `
        Это не помогло.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Roses.jpg')
  },

  {
    id: 17,
    text:
      `
        Непонятные звуки окутывали меня с разных сторон. Обезличенные силуэты бесцельно бродили по пустырю, пока я наблюдала все со стороны.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 18,
    text:
      `
        Тени медленно перемещались из угла в угол, растворяясь и появляясь вновь.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 19,
    text:
      `
        Тело не слушалось меня: я хотела бежать подальше, прятаться, но оно упрямо пыталось найти выход во тьме. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 20,
    text:
      `
        Я боялась того, что прячется там, во тьме, но продолжала идти вперед против своей воли.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 21,
    text:
      `
        Почему же не выходит?! Эй!
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Media/Images/FOF/Persons/Cassandra_Towel.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 22,
    text:
      `
        Что вам от меня надо?!
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Кассандра',
    imageFront: require('../../../../Media/Images/FOF/Persons/Cassandra_Towel.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 23,
    text:
      `
        Ведомая непонятной силой, я проходила сквозь тени, каждый раз ощущая ужас от столкновения.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 24,
    text:
      `
        С непонятной уверенностью мое тело пыталось найти свет, ведя заранее проигранную битву:
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 25,
    text:
      `
        «У меня больше нет времени. Прости…»
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Media/Images/FOF/Persons/Abigeil.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 26,
    text:
      `
        Ощутив резкий упадок, отчего-то стало невыносимо больно. Подняв взгляд вверх, я испугалась: длинные бесформенные руки тянулись ко мне прямо из пустоты.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 27,
    text:
      `
        Ну вот ты и моя.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: '…',
    simple: require('../../../../Media/Audio/FOF/Psycho_Laugh.mp3'),
    imageFront: require('../../../../Media/Images/FOF/Persons/Shadow.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 28,
    text:
      `
        Они забирали жизнь, забирали радость, смешивали чувства в непонятный клубок, лишая последних проблесков сознания.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 29,
    text:
      `
        Тьма окутала меня, лишив дыхания.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Darkness.jpg')
  },

  {
    id: 30,
    text:
      `
        Я вскочила, преодолевая дикий страх, и, осмотревшись, поняла, что мои руки прижимали к телу плед.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Media/Audio/FOF/Main.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 31,
    text:
      `
        «Кошмар… Это всего лишь сон…»
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 32,
    text:
      `
        «После вчерашнего этого стоило ожидать».
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 33,
    text:
      `
        Сознание постепенно возвращалось ко мне, хоть этот сон и оставил свой отпечаток — на душе было паршиво.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 34,
    text:
      `
        Я ощущала липкий след призрачных рук, и быстрее хотела принять душ, чтобы избавиться от наваждения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 35,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Choice', id: 'DrinkAtClub' }) >= 1
        },
        goTo: 36
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Choice', id: 'SipAtClub' }) >= 1
        },
        goTo: 58
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Choice', id: 'SipAtClub' }) === 0 && statsManager.get({ story: EStoriesEn.FOF, category: 'Choice', id: 'DrinkAtClub' }) === 0
        },
        goTo: 71
      }
    ],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 36,
    text:
      `
        Моя голова раскалывалась, а солнечный свет резал глаза. Я закрылась пледом с головой, пытаясь немного прийти в чувства.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 37,
    text:
      `
        «Это подождет». 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 38,
    text:
      `
        Услышав шаги Криса, я замерла, притворяясь, что сплю.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 39,
    text:
      `
        «Еще пару минут… Я не готова начинать этот день».
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 40,
    text:
      `
        Крис сдернул с меня плед, заставляя морщиться от ярких лучей.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 41,
    text:
      `
        Доброе утро, соня.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 42,
    text:
      `
        Отвернувшись от парня, я произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 43,
    text:
      `
        Тише ты… голова болит…
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 44,
    text:
      `
        Кристофер как ни в чем не бывало сел на диван рядом со мной. И в любой другой раз я бы придала этому значение. Но сейчас хотелось только покоя.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 45,
    text:
      `
        Парень положил свою руку мне на ногу, и совершенно спокойно сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 46,
    text:
      `
        А, понял. Похмелье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 47,
    text:
      `
        Следующую фразу он произнес с особой издевкой:
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 48,
    text:
      `
        Смотри, как я испортил тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 49,
    text:
      `
        Ммм…
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 50,
    text:
      `
        Приоткрыв глаза, я произнесла отличную мысль, которая промелькнула в моей голове:
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 51,
    text:
      `
        Теперь я понимаю, почему люди забывают о проблемах, когда выпьют. В таком состоянии им просто не до проблем и переживаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 52,
    text:
      `
        Ты ведь тоже пил, а сейчас выглядишь бодрее меня. В чем секрет?
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 53,
    text:
      `
        Крис усмехнулся, несильно хлопнул меня по ноге и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    simple: require('../../../../Media/Audio/FOF/Nick_Giggle.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 54,
    text:
      `
        Ты просто не умеешь пить. Вот свяжешься со мной — научишься. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 55,
    text:
      `
        Может быть мы с тобой даже поладим, и в один прекрасный вечер опробуем все коктейли в баре.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 56,
    text:
      `
        От упоминания алкоголя схватило желудок. И, что бы избежать рвотных позывов, я ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 57,
    text:
      `
        Давай сменим тему, пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 58,
    text:
      `
        На удивление, я проснулась бодрой. И все было бы отлично, но кошмар испортил утренние впечатления.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 59,
    text:
      `
        Услышав шаги Криса, я привстала, наслаждаясь солнечными лучами.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 60,
    text:
      `
        Кристофер как ни в чем не бывало сел на диван рядом со мной. И в любой другой раз я бы придала этому значение. Но сейчас хотелось только покоя.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 61,
    text:
      `
        Парень положил свою руку мне на ногу, и совершенно спокойно сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 62,
    text:
      `
        Доброе утро, соня. Как спалось?
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 63,
    text:
      `
        Доброе. Знаешь, я спала не так плохо, как могло показаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 64,
    text:
      `
        Ты накануне немного выпила, а выпила бы больше, вообще спала бы как младенец.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 65,
    text:
      `
        Ты ведь тоже пил, а сейчас выглядишь бодрее меня. В чем секрет?
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 66,
    text:
      `
        Крис усмехнулся, несильно хлопнул меня по ноге и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    simple: require('../../../../Media/Audio/FOF/Nick_Giggle.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 67,
    text:
      `
        Ты просто не умеешь пить. Вот свяжешься со мной — научишься. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 68,
    text:
      `
        Может быть мы с тобой даже поладим, и в один прекрасный вечер опробуем все коктейли в баре.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 69,
    text:
      `
        Давай сменим тему, пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 71,
    text:
      `
        На удивление, я проснулась бодрой, но переживания о вчерашнем тревожили до сих пор.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 72,
    text:
      `
        Услышав шаги Криса, я привстала, наслаждаясь солнечными лучами.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 73,
    text:
      `
        Кристофер как ни в чем не бывало сел на диван рядом со мной. И в любой другой раз я бы придала этому значение. Но сейчас хотелось только покоя.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 74,
    text:
      `
        Парень положил свою руку мне на ногу, и совершенно спокойно сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 75,
    text:
      `
        Доброе утро, соня. Как спалось?
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 76,
    text:
      `
        Я бы не сказала, что оно доброе. Никак не могла уснуть, а ночью мучилась из-за кошмаров. Это было ужасно.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 77,
    text:
      `
        Стоило выпить, расслабилась бы. Тогда вообще спала бы как младенец.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 78,
    text:
      `
        Ты ведь пил, а сейчас выглядишь бодрее меня. В чем секрет?
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 79,
    text:
      `
        Крис усмехнулся, несильно хлопнул меня по ноге и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    simple: require('../../../../Media/Audio/FOF/Nick_Giggle.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 80,
    text:
      `
        Вот свяжешься со мной — узнаешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 81,
    text:
      `
        Может быть мы с тобой даже поладим, и в один прекрасный вечер опробуем все коктейли в баре.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 82,
    text:
      `
        Давай сменим тему, пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 83,
    text:
      `
        Я встала, и, расхаживая по комнате, подумала:
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 84,
    text:
      `
        «Вот же черт, мы вчера устали и… заснули прямо здесь!»
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 85,
    text:
      `
        «Черт, я не собиралась спать тут».
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 86,
    text:
      `
        Только сейчас мне в голову пришла мысль, которая немного и напугала, и заставила сердце биться чаще:
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 87,
    text:
      `
        «Неужели Крис спал вместе со мной?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 88,
    text:
      `
        Я не знала, как тактичнее это спросить, поэтому стала запинаться:
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 89,
    text:
      `
        Ты… Мы...?
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 90,
    text:
      `
        ?
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 91,
    text:
      `
        Прозвучало это отвратительно, и я лишь взглядом указала на диван, чтобы немного сгладить неловкость.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 92,
    text:
      `
        Парень непонимающим взглядом посмотрел на меня, усмехнулся и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 93,
    text:
      `
        Спали ли мы вместе? Это тебя тревожит?
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 94,
    text:
      `
        Мои щеки горели. Кровь приливала к лицу, и я уверена, что выглядела так, будто…
      `,
    buttons: [
      {
        text: 'Сгораю со стыда',
        goTo: 95
      },
      {
        text: 'Смущена',
        goTo: 102
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 95,
    text:
      `
        «Мне неловко, что я так повела себя». 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 96,
    text:
      `
        «Как я вообще могла уснуть рядом с парнем?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 97,
    text:
      `
        Но после вчерашнего я не могла слишком сильно наседать на себя. В одиночку я бы не справилась с мыслями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 98,
    text:
      `
        Кристофер с интересом наблюдал за мной, пока я ходила по комнате, ведя монолог в голове. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 99,
    text:
      `
        Серьезно относишься к норме шагов за день?
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 100,
    text:
      `
        Нет, просто думаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 101,
    text:
      `
        Он наклонил голову, вглядываясь в мое лицо. Парень наслаждался своим триумфом, пока я впадала в краску.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 102,
    text:
      `
        «Он и правда смог смутить меня? Но почему?»
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    message: 'Похоже, между вами что-то происходит. Или это все мимолетно?',
    music: require('../../../../Media/Audio/FOF/Christopher.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: 2, category: 'Person', id: 'Christopher' }],
    achievement: { story: EStoriesEn.FOF, name: 'BadGuy' },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 103,
    text:
      `
        «Очнись, Кассандра. Кристофер не тот парень, который нужен…»
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 104,
    text:
      `
        «Подумать только! Еще вчера он целовал девушку на моих глазах, а я не обращаю на это внимания».
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 105,
    text:
      `
        «Нет, я не до того низко пала, чтобы так унижаться перед самовлюбленными нахалами и бабниками».
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 106,
    text:
      `
        Я вела монолог в голове, размышляя обо всем, что думаю, пока бесцельно наматывала круги по комнате.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 107,
    text:
      `
        Его голос нарушил внутренние противоречивые чувства. С некоторой усмешкой парень спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 108,
    text:
      `
        Серьезно относишься к норме шагов за день?
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 109,
    text:
      `
        Я даже не слышала вопроса, но его слова заставили поднять глаза и посмотреть на него.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 110,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Media/Images/FOF/CutScenes/Christopher_Couch.mp4'), goTo: 111 },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 111,
    text:
      `
        «Кристофер…»
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 112,
    text:
      `
        Сердце предательски ускорялось, когда я начинала думать о нем.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 113,
    text:
      `
        Сейчас я замечала все: как лежат его волосы, непринужденную позу, пока он сидел на диване.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 114,
    text:
      `
        Было бесполезно отрицать, что Крис — обычный. Он привлекает меня. И, надо признать, его фигура выгодно смотрелась в вещах, которые он носил.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 115,
    text:
      `
        «Он определенно красивый. Парни из школы выглядели иначе, а он… А чего же я хотела? Он ведь не из этого мира. И он не школьник».
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 116,
    text:
      `
        Слишком долго глаза блуждали по нему, и это не осталось незамеченным: Кристофер поймал мой взгляд, и молча удерживал его.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 117,
    text:
      `
        В его глазах отражались озорные огоньки, граничащие с серьезностью. Ощутив слабость перед ним, я поняла, что не выиграю эту битву. Впервые в жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 118,
    text:
      `
        Похоже, я не смогла сдержать пристальный взгляд парня и отчего-то отвела свой. Кристофер улыбнулся одними уголками губ, пока между нами возникла неловкая пауза.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 119,
    text:
      `
        Он наклонил голову, вглядываясь в мое лицо. Парень наслаждался своим триумфом, пока я впадала в краску. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 120,
    text:
      `
        «Она смутилась или мне показалось?»
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 121,
    text:
      `
        Парень быстро принял невозмутимый вид и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    music: require('../../../../Media/Audio/FOF/Main.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 122,
    text:
      `
        Я проснулся среди ночи — спал в неудобной позе. Решил, что кровать будет удобнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 123,
    text:
      `
        Долго думал, стоит ли тебя будить, ведь спать одетой — не очень хорошая идея, но решил не беспокоить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 124,
    text:
      `
        Ты дергалась во сне, и я накрыл пледом и ушел. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg'),
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(125)
    }
  },

  {
    id: 125,
    text:
      `
        «Проявление заботы с его стороны — очень необычно».
      `,
    buttons: [
      {
        text: 'Поблагодарить за плед',
        goTo: 126,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(125, 0, getChoice(0))
        }
      },
      {
        text: 'Идти в душ',
        goTo: 130
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(125)
    },
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 126,
    text:
      `
        Спасибо за то, что накрыл. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    message: 'Тебе приятна забота Кристофера',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 127,
    text:
      `
        Будешь должна.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 128,
    text:
      `
        То есть ты накрыл меня не по доброте душевной?
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 129,
    text:
      `
        Ты меня плохо знаешь. Доброта — это вообще не обо мне. Если заболеешь — придется затянуть с пребыванием здесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 130,
    text:
      `
        Я пойду, приведу себя в порядок.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 131,
    text:
      `
        Рекомендую не снимать кулон. А то вдруг Ник заявится прямо в душе.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 132,
    text:
      `
        Будет неловко…
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 133,
    text:
      `
        Ты так шутишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Club') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 134,
    text:
      `
        В данный момент говорю вполне серьезно. Но если не веришь, то рискни. Потом не кричи, когда Ник начнет любоваться твоими прелестями.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 135,
    text:
      `
        «И ведь здесь есть, на что посмотреть».
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 136,
    text:
      `
        Тряхнув головой, скинув эти мысли, я решила послушаться Криса. Не стала снимать кулон и направилась в ванную.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Guestroom_Morning.jpg')
  },

  {
    id: 137,
    text:
      `
        Я скинула всю одежду и открыла кран. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 138,
    text:
      `
        Встав под душ, я наслаждалась: было приятно ощущать горячий водопад, стекающий по телу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    music: require('../../../../Media/Audio/FOF/Bath.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 139,
    text:
      `
        Когда тело достаточно прогрелось, я стала осматриваться, в надежде найти что-то кроме моющего средства.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 140,
    text:
      `
        «Ведь именно так говорят о парнях. А что еще нужно? Средства “100 в 1” им до конца жизни хватит: и в душ сходить, и автомобиль помыть». 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Media/Images/FOF/Persons/Abigeil_Towel.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 141,
    text:
      `
        На полочке были приготовлены с десяток новых баночек, и я взяла одну из них.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 142,
    text:
      `
        Еще закрытые. Неужели, для меня? 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Media/Images/FOF/Persons/Abigeil_Towel.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 143,
    text:
      `
        Прочитав название бренда, я удивилась:
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 144,
    text:
      `
        «Это же не масс-маркет. Откуда Кристофер вообще знает о подобных брендах? Это дорогой салонный уход». 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speaker: 'Эбигейл',
    imageFront: require('../../../../Media/Images/FOF/Persons/Abigeil_Towel.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 145,
    text:
      `
        Следующие полчаса я провела, ухаживая за телом, лицом и волосами.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 146,
    text:
      `
        Когда настало время выходить, я чувствовала себя прекрасно: мои волосы были гладкими, кожа — мягкой, а тело — шелковым. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    music: require('../../../../Media/Audio/FOF/Main.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Bath_Loft.jpg')
  },

  {
    id: 147,
    text:
      `
        Завернув одно полотенце на теле, другое — на волосах, я вернулась в свою комнату, где стала собираться.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 148,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.FOF, personId: 'Abigeil_Part06', goTo: 149 },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 149,
    text:
      `
        Сейчас я смотрела в зеркало, ощущая странные эмоции. С одной стороны я немного привыкла быть здесь, и прошлая жизнь в моем теле теперь кажется далеким сном.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 150,
    text:
      `
        С другой, я чувствовала себя не на своем месте, и хотела побыстрее вернуться домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 151,
    text:
      `
        Ощущая прилив сил после процедур, я спустилась вниз, чтобы найти парня. Крис что-то мешал в кухне. Увидев меня, он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Abigail_Room.jpg')
  },

  {
    id: 152,
    text:
      `
        Выглядишь гораздо лучше. Значит, я не прогадал с выбором склянок?
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 153,
    text:
      `
        Да, я даже удивлена твоему выбору.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 154,
    text:
      `
        Что? Не думала, что парень может настолько хорошо примечать детали? Ты же девушка. Любишь подобные вещи.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 155,
    text:
      `
        Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 156,
    text:
      `
        Я села напротив парня, завороженно глядя на то, как он виртуозно мешал салат, добавляя в него приправы и соус. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 157,
    text:
      `
        На столе лежали несколько пакетов, которые Крис не удосужился убрать.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 158,
    text:
      `
        Что делаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 159,
    text:
      `
        Проверим твою интуицию. А на что это похоже?
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(160)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 160,
    text:
      `
        Ты определенно…
      `,
    buttons: [
      {
        text: 'Сам готовишь завтрак',
        goTo: 161,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(160, 0, getChoice(0))
        }
      },
      {
        text: 'Решил поучаствовать в шоу «Кухня»',
        goTo: 164,
        func: () => {
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(160, 1, getChoice(1))
        }
      },
      {
        text: 'Устраиваешь беспорядок',
        goTo: 167,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(160, 2, getChoice(2))
        }
      },
      {
        text: 'Распаковываешь готовую еду',
        goTo: 170
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(160)
    },
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 161,
    text:
      `
        Мешаешь салат сам, значит, и готовишь тоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 162,
    text:
      `
        Нет, это точно не по моей части.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 163,
    text:
      `
        Подумай еще.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 164,
    text:
      `
        Только учти, конкуренты там сильные. А с салатом так просто не пройдешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 165,
    text:
      `
        Милая Эби, поверь мне: если я и захочу куда-то попасть, попаду туда без проблем. И конкуренты мне не страшны.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 166,
    text:
      `
        Подумай еще.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 167,
    text:
      `
        Валяются пакеты, несколько чеков — это беспорядок. Угадала?
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 168,
    text:
      `
        Зацикливаешься на мусоре, не замечая подсказок. Не очень хорошая черта для девушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 169,
    text:
      `
        Подумай еще.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 170,
    text:
      `
        Ты не выкинул пакеты, и чеки на столешнице сдали тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 171,
    text:
      `
        Бинго.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 172,
    text:
      `
        Заказал на завтрак. Только вот салат пришлось смешивать. Что хочешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 173,
    text:
      `
        Ого как много всего…
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 174,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.FOF, personId: 'Breakfast', goTo: 180 },
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 180,
    text:
      `
        Мы ели в тишине. В этот момент каждый из нас размышлял о своем. Когда завтрак был окончен, я решила спросить про кулон.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 181,
    text:
      `
        Когда я его сниму, то он сможет почувствовать меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 182,
    text:
      `
        Да. Сейчас тебя скрывает что-то вроде дымки. Он просто не может тебя ощутить и найти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 183,
    text:
      `
        Когда снимешь его, потребуется время, чтобы дымка спала, и вы вновь сможете общаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 184,
    text:
      `
        Парень задержал взгляд на мне, видимо, обдумал пришедшую мысль, и, усмехнувшись, спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 185,
    text:
      `
        Вот что удивительно, почему школьницу начало интересовать это? Решила глубоко изучить тему магии или личный интерес?
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 186,
    text:
      `
        Чего ты так зациклен на этом?
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 187,
    text:
      `
        Просто интересно, а ты не отвечай вопросом на вопрос. Так и?
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 188,
    text:
      `
        Закатив глаза, я ответила:
      `,
    buttons: [
      {
        text: 'Мне интересна тема магии',
        goTo: 189
      },
      {
        text: 'Личный интерес',
        goTo: 191
      },
      {
        text: 'Мне это не интересно',
        goTo: 194
      },
      {
        text: 'Решила поддержать разговор',
        goTo: 197
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 189,
    text:
      `
        А что такого, что мне стало интересно?
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 190,
    text:
      `
        Значит, ты все-таки меняешься. Это любопытно.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 191,
    text:
      `
        Возможно, совсем чуть-чуть есть личный интерес.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 192,
    text:
      `
        Кристофер сдвинул брови, и, отведя взгляд, засмотрелся на вид из окна.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 193,
    text:
      `
        Я сказала что-то не то?
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 194,
    text:
      `
        Не интересует меня все это. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 195,
    text:
      `
        Кристофер окинул взглядом комнату и скучающе ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 196,
    text:
      `
        Тогда зачем спрашивала?
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 197,
    text:
      `
        Спросила, чтобы поддержать разговор.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 198,
    text:
      `
        Парень хмыкнул, а губ коснулась еле заметная улыбка, и я поняла, что ответ его порадовал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 199,
    text:
      `
        Я поднялась и начала медленно ходить из стороны в сторону, от скуки примечая все новые детали интерьера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 200,
    text:
      `
        Вижу, что заключение в четырех стенах лишь тяготит тебя. Да и я засиделся тут.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 201,
    text:
      `
        Поехали, прокатимся. По магазинам пройдемся. Ты же девушка, хоть как-то украсишь комнату. Проще это сделать, имея свои вещи. Не отказывай мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 202,
    text:
      `
        Ладно.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Kitchen_Chris.jpg')
  },

  {
    id: 203,
    text:
      `
        Не теряя времени мы вышли на задний двор, где стоял автомобиль. Увидев такую машину, я непроизвольно вздохнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Backdoor_Car.jpg')
  },

  {
    id: 204,
    text:
      `
        И сколько же она стоит?
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Backdoor_Car.jpg')
  },

  {
    id: 205,
    text:
      `
        Вижу, тебе тоже понравилась моя красотка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Backdoor_Car.jpg')
  },

  {
    id: 206,
    text:
      `
        …<p>
      `,
    buttons: [
      {
        text: 'Да, она великолепная',
        goTo: 207
      },
      {
        text: 'Обычная машина',
        goTo: 209
      },
      {
        text: 'Я не фанатка авто',
        goTo: 210
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Backdoor_Car.jpg')
  },

  {
    id: 207,
    text:
      `
        Притягивает взгляд. И, знаешь, я никогда не была поклонницей автомобилей, но сейчас я кардинально меняю мнение.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    message: 'Кристофер доволен, что ваши взгляды совпадают',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' },
      { story: EStoriesEn.FOF, value: +1, category: 'Choice', id: 'SheIsBeautiful' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Backdoor_Car.jpg')
  },

  {
    id: 208,
    text:
      `
        Возможно, когда я получу права, то обязательно куплю именно ее. Будет напоминанием о тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Backdoor_Car.jpg')
  },

  {
    id: 209,
    text:
      `
        Есть множество красивых автомобилей, и этот ничем не отличается от них. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    message: 'Кристофер огорчен, что ты не разделяешь его интересы',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Backdoor_Car.jpg')
  },

  {
    id: 210,
    text:
      `
        Предпочитаю, чтобы меня подвозили. В городе бешеный ритм, и тратить время на дорогу, а после искать место, где можно припарковаться — не хочется. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Backdoor_Car.jpg')
  },

  {
    id: 211,
    text:
      `
        На удивление, внутри было чисто. Салон выглядел роскошно, а в воздухе витал аромат кожи вперемешку с древесным запахом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 212,
    text:
      `
        Нет, внутри не было никаких ароматизаторов, никаких безделушек, которые так любили большинство людей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 213,
    text:
      `
        И мне нравилось, что сидя рядом с парнем на пассажирском сидении, я ощущала себя спокойно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 214,
    text:
      `
        Ни одна деталь не выбивалась из единого стиля и не тревожила взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 215,
    text:
      `
        Только запах, который так быстро глубоко запал в память. Приятный мужской аромат, не раздражающий мои легкие.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 216,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Christopher' }) >= 9
        },
        goTo: 217
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Person', id: 'Christopher' }) <= 8
        },
        goTo: 222
      }
    ],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 217,
    text:
      `
        «Это его парфюм».
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 218,
    text:
      `
        На мгновение я осознала, что мне уже знаком его аромат, и, более того, я привыкла к нему.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 219,
    text:
      `
        «Один и тот же аромат на людях раскрывается по-разному, и этот парфюм идеально подходит Крису».
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 220,
    text:
      `
        «В последнее время я слишком часто думаю о нем. Уж точно больше, чем полагается».
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 221,
    text:
      `
        «Пора сбавить обороты, пока это не привело ни к чему плохому…»
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 222,
    text:
      `
        Решив скрасить поездку беседой, я спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 300,
    text:
      `
        Знаешь, не думала, что ты мог бы накопить на такую машину. Так как ты смог себе ее позволить?
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 223,
    text:
      `
        Я мухлюю. Очень легко обыгрывать людей в вашем мире. Лотереи, казино… 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 224,
    text:
      `
        Уверен, меня скоро поймают как мошенника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 225,
    text:
      `
        Я рассмеялась, представив, как парень обыгрывает заядлых картежников, забирая все их крупные суммы.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  },

  {
    id: 226,
    text:
      `
        В непринужденной атмосфере мы доехали до нужного места, и, оставив автомобиль на парковке, зашли в торговый центр.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('FOF', 'Глава 1', 'Часть 7', '0')
        }
      }],
    achievement: { story: EStoriesEn.FOF, name: 'Chapter01Part06Completed' },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Car.jpg')
  }
])
