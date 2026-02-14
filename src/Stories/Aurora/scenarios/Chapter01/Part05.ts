import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { musicPlayer } from '../../../../Functions/musicPlayer'
import { loadData } from '../../../../Functions/localStorageManager'
import { blackFlash, redFlash, whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.Aurora, chapterName: 'Глава 1', partName: 'Часть 5', code: '0' }, [
  {
    id: 0,
    text:
      `
        В тот день мир был готов рухнуть. Рухнуть под натиском неожиданных трудностей.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Media/Audio/Aurora/Lighthouse.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 1,
    text:
      `
        Я была уверена в своей безопасности. Ведь несмотря на препятствия, под ногами стала ощущаться твердая опора.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 2,
    text:
      `
        И это заслуга не только моих решений, но и близких, готовых в любой момент сорваться и прийти на помощь.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 3,
    text:
      `
        Та безмятежность, которая завладела мной, не должна была ускользнуть или затеряться в пучине сомнений и предубеждений.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 4,
    text:
      `
        Однако поворотный момент случился. И обратной дороги нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 5,
    text:
      `
        Я ударила по столу, выплескивая гнев и бессилие.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    simple: require('../../../../Media/Audio/Aurora/Tablehit.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 6,
    text:
      `
        — Только моя вина… моя…
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Aurora.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 7,
    text:
      `
        Горло саднило. Появилось чувство неутолимой жажды, терзающей изнутри.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 8,
    text:
      `
        Если бы я обладала силами вернуться в прошлое, поступить по-другому, предотвратить беду — ход времени был бы нарушен.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 9,
    text:
      `
        Но самый близкий человек бы не подвергся мукам.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 10,
    text:
      `
        Извечный вопрос: на что мы готовы ради спасения близких? — не стоял более в вопросительной форме.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 11,
    text:
      `
        Потому что когда реальность перед глазами приобретает вид кошмара, ты готов на что угодно. Лишь бы чужое сердце продолжало биться.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/House_Lighthouse_Dawn.jpg')
  },

  {
    id: 12,
    text:
      `
        Холодно. Словно я находилась в…
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    message: '<i> Вы вернулись в воспоминания',
    beforeBegin: whiteFlash,
    music: require('../../../../Media/Audio/Aurora/Dramatic.mp3'),
    ambient: require('../../../../Media/Audio/FOF/Cardio.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        Морге?
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        Нет. Таким мыслям не должно быть места. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 15,
    text:
      `
        Его сердце билось. И я должна сделать все, чтобы он вернулся в сознание.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        Но я могла лишь:
      `,
    buttons: [
      {
        text: 'Плакать ',
        goTo: 17
      },
      {
        text: 'Быть сильной',
        goTo: 23
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        Поддаться эмоциям. Выплеснуть ту боль, которая терзала. Мешала дышать, чувствовать, жить.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    beforeBegin: blackFlash,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 18,
    text:
      `
        И где в итоге мой свет? Почему меня называют лучиком надежды, если вокруг только бессилие?
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    beforeBegin: blackFlash,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        Все, на что я способна — оставаться никчемной и беспомощной, уповая на решение судьбы.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    beforeBegin: blackFlash,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        «Конечно, а может быть по-другому?»
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    beforeBegin: blackFlash,
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 21,
    text:
      `
        «Всю жизнь я надеюсь на чудо. Что ничего делать не надо, ответ даст кто-то другой».
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    beforeBegin: blackFlash,
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        «Это я должна быть на его месте».
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    beforeBegin: blackFlash,
    message: 'Вы не можете быть выше обстоятельств, Аврора падает духом',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: -1, category: 'Effect', id: 'Spirit' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        «Папа всю жизнь боролся за наше будущее».
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        «Я не имею право его подвести».
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        Это напутствие помогло не сдаваться и искать выход. Не отдавать все на откуп судьбы, а строить собственное будущее ради семьи.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        Я верила — светлые и счастливые дни еще впереди.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        Мы вместе соберемся на маяке и еще поделимся теплыми воспоминаниями.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    message: 'Аврора не унывает из-за трудностей, ее дух укрепляется',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Effect', id: 'Spirit' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        Я ненадолго покинула палату, чтобы прийти в себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 29,
    text:
      `
        Но белые стены отнюдь не служили утешением.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 30,
    text:
      `
        Прислонившись, я спустилась на пол, держась за голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 31,
    text:
      `
        Я не помнила, что было после того, как узнала страшную  новость. Как добралась до больницы. Одна лишь черная пелена, а затем ослепляющий свет палаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 32,
    text:
      `
        Я услышала приближающиеся шаги и подняла голову вверх.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 33,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'CallDalia' }) > 0
        },
        goTo: 34
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'CallKaleb' }) > 0 && statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'HelpKaleb' }) > 0
        },
        goTo: 56
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'CallArthur' }) > 0
        },
        goTo: 86
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'CallEzio' }) > 1
        },
        goTo: 100
      }
    ],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 34,
    text:
      `
        Улыбающаяся Далия села рядом со мной и протянула горячий чай.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 35,
    text:
      `
        Я отставила напиток в сторону, не в силах держать что-либо трясущимися руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 36,
    text:
      `
        — Аврора, чем я могу помочь?
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 37,
    text:
      `
        — Ты и без этого сделала достаточно. Я не знаю, как благодарить тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 38,
    text:
      `
        — Можешь отблагодарить меня своей улыбкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 39,
    text:
      `
        К своему удивлению, магия этой девушки заставила уголки губ немного подняться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 40,
    text:
      `
        Присутствие Далии давало мне силы держаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 41,
    text:
      `
        — Что говорят врачи?
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 42,
    text:
      `
        — Сердечный приступ. В его возрасте нужно больше отдыхать, а он на этом проклятом маяке…
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 43,
    text:
      `
        — Тише-тише… — она легонько приобняла меня за плечи. — Главное, что все обошлось.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 44,
    text:
      `
        — А надолго ли? Думаешь, он прекратит работать? Вбил себе идею, что должен зарабатывать и обеспечивать нас. В одиночку.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 45,
    text:
      `
        Мне были чужды эти эмоции. Было противно слушать себя. Но эти потаенные мысли давно зрели в сознании и сейчас вырывались наружу.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 46,
    text:
      `
        — Ему найдут помощника. Все образуется. Он же не маленький мальчик.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 47,
    text:
      `
        — Я хочу забрать его с собой. Хочу избавить от этой темницы.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 48,
    text:
      `
        — Но ты не можешь. И не потому что не любишь, а потому что он сам выбрал эту жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 49,
    text:
      `
        Чувство беспомощности уничтожало меня по кускам. Я закрыла глаза, и, пытаясь свыкнуться с плохими мыслями, спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 50,
    text:
      `
        — Получается, я бессильна?
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 51,
    text:
      `
        — Нет! Конечно, нет. Своим присутствием ты помогаешь ему крепнуть духом. Своей любовью ты защищаешь от невзгод.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 52,
    text:
      `
        — Если бы это уберегло его…
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 53,
    text:
      `
        — Меры предосторожности будут приняты. А ты должна позаботиться и о себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 54,
    text:
      `
        — Не жертвуй тем светлым будущим, которое он открыл для тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dalia.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 55,
    text:
      `
        Она была права. Но подавленное состояние никак не могло принять реальность.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 56,
    text:
      `
        Хмурый парень сел рядом со мной и протянул пончик в упаковке.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 57,
    text:
      `
        Я отложила его в сторону трясущимися руками. Для мыслей о еде нужно было избавиться от горького кома в горле и сосущего чувства пустоты.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 58,
    text:
      `
        — Аврора, понимаю, что мы с тобой не очень близки и, признаться, твой звонок удивил.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 59,
    text:
      `
        — Но я здесь. Скажи, что могу еще сделать?
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 60,
    text:
      `
        — Ты и без этого сделал достаточно. Я не знаю, как благодарить тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 61,
    text:
      `
        — Ничего такого…
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 62,
    text:
      `
        Он был строг к себе. Словно хотел сказать: я не заслуживаю быть рядом. Но его действия говорили совершенно иное.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 63,
    text:
      `
        Присутствие Калеба давало мне силы держаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 64,
    text:
      `
        — Что говорят врачи?
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 65,
    text:
      `
        — Сердечный приступ. В его возрасте нужно больше отдыхать, а он на этом проклятом маяке…
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 66,
    text:
      `
        — Не надо. Не поддавайся этим эмоциям. Иди сюда…
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 67,
    text:
      `
        Он развел руки в стороны, искренне желая поддержать.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 68,
    text:
      `
        Мне захотелось:
      `,
    buttons: [
      {
        text: 'Раствориться в его объятиях',
        goTo: 69,
        gift: true
      },
      {
        text: 'Отстраниться',
        goTo: 84
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 69,
    text:
      `
        Я легла к нему на грудь, ощущая неожиданный холод и спокойствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    stats: [{ story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'GiveAHugKaleb' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 70,
    text:
      `
        Вокруг все замерло, будто бы не существовало никаких проблем.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 71,
    text:
      `
        Есть только он и я в этих пустых, замкнутых коридорах, наполненных радостью выздоровления и горечью потери.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 72,
    text:
      `
        Парень медленно поглаживал мои волосы, прижимая к себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 73,
    text:
      `
        Эти действия не несли никакой скрытый характер. Он просто поддерживал, заставлял держаться назло обстоятельствам.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 74,
    text:
      `
        — Калеб, спасибо…
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 75,
    text:
      `
        — Ты справишься. И твой отец тоже. Вы снова будете вместе.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 76,
    text:
      `
        Его голова опустилась мне на макушку, а руки обхватили талию, окончательно завлекая в свои сети.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 77,
    text:
      `
        Неожиданно для себя я поняла, что хочу открыться ему. Хочу делиться с ним горем и радостью.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 78,
    text:
      `
        Хочу узнать настоящего Калеба.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 79,
    text:
      `
        Он был так близко. Так нежно обнимал, одаривая прекрасным чувством защищенности.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 80,
    text:
      `
        — Я буду рядом несмотря ни на что.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 81,
    text:
      `
        И я верила. Ведь он всегда держит слово. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 82,
    text:
      `
        Калеб оставался для меня загадкой, но неведомые силы подталкивали быть ближе к нему.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 83,
    text:
      `
        Некое чутье, которое тайно говорило со мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    message: 'Калеб открывается Авроре. К чему это приведет?',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Kaleb' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 84,
    text:
      `
        — Калеб, спасибо, но я в порядке.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 85,
    text:
      `
        — Я рад, что тебе лучше. И если что-то еще нужно, ты только скажи.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 86,
    text:
      `
        Обеспокоенный Артур сел рядом со мной и протянул стаканчик с кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 87,
    text:
      `
        Я отставила напиток в сторону, не в силах держать что-либо трясущимися руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 88,
    text:
      `
        — Аврора, что я могу еще сделать?
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 89,
    text:
      `
        — Ты и без этого сделал достаточно. Я не знаю, как благодарить тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 90,
    text:
      `
        — Ничего… главное, что все позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 91,
    text:
      `
        Слова Артура в очередной раз успокаивали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 92,
    text:
      `
        В голову лезли самые разные воспоминания: он был рядом после смерти моей мамы, помогал освоиться в городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 93,
    text:
      `
        Его присутствие давало мне силы держаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 94,
    text:
      `
        — Что говорят врачи?
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 95,
    text:
      `
        — Сердечный приступ. В его возрасте нужно больше отдыхать, а он на этом проклятом маяке…
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 96,
    text:
      `
        — Тише-тише… не надо так говорить. Все будет хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 97,
    text:
      `
        Артур легонько опустил свою руку мне на плечо, вселяя надежду на светлое будущее.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 98,
    text:
      `
        Парню трудно давалось контролировать свои эмоции: бегающие из стороны в сторону глаза, подергивания коленом.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 99,
    text:
      `
        Он переживал так, словно в палате находился его близкий человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 100,
    text:
      `
        Обеспокоенный Артур сел рядом со мной и протянул стаканчик с кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 101,
    text:
      `
        Я отставила напиток в сторону, не в силах держать что-либо трясущимися руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 102,
    text:
      `
        — Аврора, что я могу еще сделать?
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 103,
    text:
      `
        — Ты и без этого сделал достаточно. Я не знаю, как благодарить тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 104,
    text:
      `
        — Ничего… все позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 105,
    text:
      `
        Слова Артура в очередной раз успокаивали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 106,
    text:
      `
        В голову лезли самые разные воспоминания: он был рядом после смерти моей мамы, помогал освоиться в городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 107,
    text:
      `
        Его присутствие давало мне силы держаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 108,
    text:
      `
        — Что говорят врачи?
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 109,
    text:
      `
        — Сердечный приступ. В его возрасте нужно больше отдыхать, а он на этом проклятом маяке…
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 110,
    text:
      `
        — Тише-тише… не надо так говорить. Все будет хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 111,
    text:
      `
        Артур легонько опустил свою руку мне на плечо, вселяя надежду на светлое будущее.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 112,
    text:
      `
        Парню трудно давалось контролировать свои эмоции: бегающие из стороны в сторону глаза, подергивания коленом.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 113,
    text:
      `
        Он переживал так, словно в палате находился его близкий человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 114,
    text:
      `
        — Мне написал Эцио. Он переживает из-за твоего звонка. И ему очень стыдно, что он не смог приехать.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 115,
    text:
      `
        — Обещал загладить вину.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 116,
    text:
      `
        Последняя сказанная фраза была произнесена довольно грустным тоном.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 117,
    text:
      `
        Но я была рада, что Эцио не позабыл обо мне. Хоть его и нет рядом, но он беспокоится и стремится поддержать.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 118,
    text:
      `
        От этого чувства становилось легче.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 119,
    text:
      `
        Доктор остановился около нас спустя мучительно долгое время разделения оглушительной тишины на двоих.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 120,
    text:
      `
        — Аврора, верно? Ваш отец пришел в себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 121,
    text:
      `
        Услышав желаемое, я наконец-то смогла хоть немного выдохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 122,
    text:
      `
        Он был жив… А значит мы еще сможем выпить согревающий чай в нашем уютном домике.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 123,
    text:
      `
        — Доктор, спасибо вам! Скажите, с ним же все будет в порядке?
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 124,
    text:
      `
        — Сейчас его здоровью ничего не угрожает. Мы ждем результаты анализов, но самое худшее позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 125,
    text:
      `
        — Нужен покой и больше отдыха. Наблюдаться у нас будет неделю, может, больше. Вам не о чем переживать.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Guide.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 126,
    text:
      `
        Еще раз поблагодарив врача, я вернулась в палату.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Corridors.jpg')
  },

  {
    id: 127,
    text:
      `
        Папа лежал на спине, чуть приоткрыв глаза и тяжело дыша.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    ambient: require('../../../../Media/Audio/FOF/Cardio.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 128,
    text:
      `
        — Доченька, ну что ты… Все хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 129,
    text:
      `
        Слезы душили, ослепляя, пока я с осторожностью обнимала папу, избегая касаться медицинских аппаратов.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 130,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseWriter' }) > 0
        },
        goTo: 131
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseMusician' }) > 0
        },
        goTo: 135
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Effect', id: 'ChooseArtist' }) > 0
        },
        goTo: 139
      }
    ],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 131,
    text:
      `
        Я обратила внимание, что на тумбочке лежал листок с некогда подаренными стихами.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 132,
    text:
      `
        Проследив за моим взглядом, папа тихо произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 133,
    text:
      `
        — Не могу расстаться с твоим творчеством. Ношу его, перечитываю с любовью. Надеюсь, когда-нибудь ты подаришь еще нечто подобное.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 134,
    text:
      `
        — Конечно, папа…
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 135,
    text:
      `
        Я обратила внимание, что на тумбочке лежал некогда подаренный музыкальный диск.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 136,
    text:
      `
        Проследив за моим взглядом, папа тихо произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 137,
    text:
      `
        — Не могу расстаться с твоим творчеством. Ношу его, перечитываю надпись, которая согревает душу. Надеюсь, когда-нибудь ты подаришь еще нечто подобное.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 138,
    text:
      `
        — Конечно, папа…
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 139,
    text:
      `
        Я обратила внимание, что на тумбочке лежал некогда подаренный рисунок.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 140,
    text:
      `
        Проследив за моим взглядом, папа тихо произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 141,
    text:
      `
        — Не могу расстаться с твоим творчеством. Ношу его, любуюсь, это согревает душу. Надеюсь, когда-нибудь ты подаришь еще нечто подобное.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 142,
    text:
      `
        — Конечно, папа…
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 143,
    text:
      `
        —  Не переживай. Я жив и здоров. Прости, что заставил поволноваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 144,
    text:
      `
        — Папа…
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 145,
    text:
      `
        — Небольшое переутомление. Не знаю, что там тебе эти доктора наговорили, но мне еще жить и жить.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 146,
    text:
      `
        Всегда такой. Никакие слабости не должны становиться для него преградой.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 147,
    text:
      `
        — Это не шутки. Ты же мог…
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 148,
    text:
      `
        — Аврора, послушай. Могло произойти, что угодно. Но я тут. А если бы произошло самое худшее, у тебя есть тот, кто может о тебе позаботиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 149,
    text:
      `
        Безусловно, он говорил об Артуре. А может быть и о моих новых знакомых. Я ведь делилась в письмах о подробностях своей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 150,
    text:
      `
        — Время неумолимо движется вперед. А нам остается только принять этот факт.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 151,
    text:
      `
        — Ты не можешь больше работать. Посмотри, во что это обернулось?
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 152,
    text:
      `
        — Аврора, маяк — моя жизнь. И я не откажусь от него. От тебя прошу лишь понимания.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 153,
    text:
      `
        Как он может быть так спокоен? Как смириться с его замыслами?
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 154,
    text:
      `
        Сердце было готово разорваться от нависших чувств. Обида и горечь осели на языке, пока отец говорил пугающие своим безразличием вещи.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 155,
    text:
      `
        И решила:
      `,
    buttons: [
      {
        text: 'Противостоять',
        goTo: 156
      },
      {
        text: 'Попытаться понять',
        goTo: 163
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 156,
    text:
      `
        «Нельзя. Если так продолжится, я могу его потерять».
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 157,
    text:
      `
        — Папа, давай уедем. Вместе.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 158,
    text:
      `
        — Будем строить наше будущее. Все станет как раньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 159,
    text:
      `
        На его лице проскользнуло разочарование.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 160,
    text:
      `
        — Я знаю, это трудно принять. Но мое решение окончательное. И я не желаю больше возвращаться к этому вопросу.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 161,
    text:
      `
        В груди гулял ледяной ветер, а боль прошлась по сердцу вместе с обидой.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 162,
    text:
      `
        Мои слова сильнее ранили папу, но я не могла держать в себе эти искренние переживания.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    message: 'Отец расстроился из-за сказанных слов',
    stats: [
      { story: EStoriesEn.Aurora, value: -1, category: 'Person', id: 'Dad' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 163,
    text:
      `
        «Упертый, как и всегда. Что еще остается, кроме как смириться?»
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 164,
    text:
      `
        — Я прошу тебя, только не перенапрягайся.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 165,
    text:
      `
        — У меня скоро будет чудесный помощник, не переживай. Возможно, ты даже видела его. Он на испытательном сроке.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 166,
    text:
      `
        Воспоминания о приезде на маяк все еще оставались покрыты пеленой.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 167,
    text:
      `
        — Я рада, что ты не будешь там один.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 168,
    text:
      `
        В глазах отца промелькнула искорка, говорящая о желании не сдаваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 169,
    text:
      `
        — Я никогда не был одинок.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    message: 'Ваша поддержка служит опорой для папы',
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Dad' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 170,
    text:
      `
        — Аврора, тебе пора возвращаться. Совсем скоро должна начаться учеба. Нечего тут рядом с ворчливым стариком находиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 171,
    text:
      `
        — Но как я могу…
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 172,
    text:
      `
        — Так же, как и в тот раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 173,
    text:
      `
        — Вспомни свои мечты, Аврора. Свои стремления. Ты всегда была понимающим ребенком, который переживал все трудности и не жаловался. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    beforeBegin: whiteFlash,
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 174,
    text:
      `
        — Я справлюсь. Моя работа давно превратилась в неотъемлемую часть жизни. И я привык. А тебе пора думать о себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Observation_Night.jpg')
  },

  {
    id: 175,
    text:
      `
        Я помнила. Помнила его наставления и подаренную возможность.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    beforeBegin: whiteFlash,
    ambient: require('../../../../Media/Audio/FOF/Cardio.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 176,
    text:
      `
        — Я буду тебя навещать. И не спорь!
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 177,
    text:
      `
        — И не собирался. Ты вся в маму… Она…
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 178,
    text:
      `
        Он осекся. Хотел что-то сказать, но колебался.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 179,
    text:
      `
        Я:
      `,
    buttons: [
      {
        text: 'Спросила',
        goTo: 180,
        gift: true
      },
      {
        text: 'Не стала тревожить',
        goTo: 213
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 180,
    text:
      `
        — Папа, не держи все в себе. Расскажи.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 181,
    text:
      `
        Я осторожно положила руку на его плечо, пытаясь улыбнуться и подбодрить.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 182,
    text:
      `
        — Это было похоже на счастливый сон…
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 183,
    text:
      `
        Я оказался в неземном месте, окруженный мягкими облаками.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    beforeBegin: whiteFlash,
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    music: require('../../../../Media/Audio/Aurora/Sad.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 184,
    text:
      `
        Признаюсь, казалось — это закономерный конец. И я растворился в этом опьяненном чувстве отдыха и спокойствия.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 185,
    text:
      `
        Но знакомый женский шепот заставил встрепенуться и прийти в себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 186,
    text:
      `
        — Дорогая?
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 187,
    text:
      `
        Я видел вдалеке очертания силуэта. Но делая шаг за шагом, дух оставался недосягаем.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 188,
    text:
      `
        Горькая мысль тут же озарила — это была твоя мама. И уверенность в этом росла с каждой секундой.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 189,
    text:
      `
        Ее тепло, ее сердцебиение. Это не полет фантазии.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 190,
    text:
      `
        Она была далеко, но, клянусь, я смог почувствовать едва уловимое прикосновение.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 191,
    text:
      `
        — Ты здесь… я знаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 192,
    text:
      `
        В сознание отчетливо прозвенело: «Твое время не пришло».
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 193,
    text:
      `
        Я почувствовал, как начинаю сгорать изнутри, как хочу закричать, разрушить это место и забрать ее с собой.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 194,
    text:
      `
        Успокоившись, приняв свое поражение, решил не терять время и рассказал ей о нас.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 195,
    text:
      `
        Как у нас все хорошо, как ты и Артур строите новую жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_White.jpg')
  },

  {
    id: 196,
    text:
      `
        Но окружение стремительно стало меняться. В воздухе повысилась влага, предвещающая дождь.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_Gray.jpg')
  },

  {
    id: 197,
    text:
      `
        — Не плачь. Пожалуйста. Скоро мы вновь воссоединимся.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_Gray.jpg')
  },

  {
    id: 198,
    text:
      `
        Тишина и легкое завывание ветра щекотали кожу. Я почувствовал свое сердцебиение и понял, что скоро очнусь.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_Gray.jpg')
  },

  {
    id: 199,
    text:
      `
        Ее последняя сказанная фраза звучала так:
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_Gray.jpg')
  },

  {
    id: 200,
    text:
      `
        — Найди Яна.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Clouds_Gray.jpg')
  },

  {
    id: 201,
    text:
      `
        Его рассказ словно открыл бездну болезненных воспоминания.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Media/Audio/Aurora/Dramatic.mp3'),
    ambient: require('../../../../Media/Audio/FOF/Cardio.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 202,
    text:
      `
        Мама? Не к ней ли я всегда обращаюсь в моменты сильного отчаяния?
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 203,
    text:
      `
        Она там. В лучшем месте и помогает нам. Неужели мой брат не рядом?
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 204,
    text:
      `
        — Она упомянула Яна. Но почему? Мы столько лет искали его, что давно смирились и приняли их с мамой воссоединение.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 205,
    text:
      `
        — Я тебе не говорил… Но я никогда не прекращал поиски.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 206,
    text:
      `
        В глубине души и моя надежда никогда не умирала. Но как можно найти одного человека в этом огромном мире?
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 207,
    text:
      `
        — И неужели есть какие-то зацепки?
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 208,
    text:
      `
        — Нет. Но я попросил Артура помочь. С его связями дело может сдвинуться с мертвой точки.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 209,
    text:
      `
        Одно ошеломляющее открытие за другим. Мечта увидеть брата была недосягаема и нереальна. Отчего же я все еще хочу верить в ее осуществимость?
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 210,
    text:
      `
        — Я поговорю с ним при удобном случае. Спасибо, что поделился.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 211,
    text:
      `
        Уставшая улыбка отца трогала сердце, заставляя сжиматься от тоски.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 212,
    text:
      `
        Он столько пережил, и я рада, что он смог выговориться.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    message: 'Отец хочет доверять вам',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Dad' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 213,
    text:
      `
        «Он столько пережил. Ему нужен покой».
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    music: require('../../../../Media/Audio/Aurora/Dramatic.mp3'),
    ambient: require('../../../../Media/Audio/FOF/Cardio.mp3'),
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 214,
    text:
      `
        Несмотря на усталость, папа все же нашел в себе силы и произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 215,
    text:
      `
        — Я должен был тебе давно сказать… Прости. Это касается Яна.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 216,
    text:
      `
        Я не верила, что снова слышу это имя. В глубине души моя надежда никогда не умирала. Но как можно найти одного человека в этом огромном мире?
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 217,
    text:
      `
        — Я тебе не говорил… Но я никогда не прекращал поиски.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 218,
    text:
      `
        — И неужели есть какие-то зацепки?
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 219,
    text:
      `
        — Нет. Но я попросил Артура помочь. С его связями дело может сдвинуться с мертвой точки.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 220,
    text:
      `
        Одно ошеломляющее открытие за другим. Мечта увидеть брата была недосягаема и нереальна. Отчего же я все еще хочу верить в ее осуществимость?
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 221,
    text:
      `
        — Я поговорю с ним при удобном случае. Спасибо, что поделился.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 222,
    text:
      `
        Уставшая улыбка отца трогала сердце, заставляя сжиматься от тоски.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 223,
    text:
      `
        — Все, беги! И не смей больше грустить.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Dad_Hospital.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 224,
    text:
      `
        Он был прав. Здесь больше ничего не поделаешь. Он хочет, чтобы я сосредоточилась на своей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 225,
    text:
      `
        Сомнениям нет места. Переживания никуда не ушли, но расстраивать близкого человека не хотелось.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 226,
    text:
      `
        Я еще раз обняла папу и покинула больничную палату.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Hospital_Room.jpg')
  },

  {
    id: 227,
    text:
      `
        Вскоре я была дома, а жизнь продолжала идти своим размеренным чередом.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    music: require('../../../../Media/Audio/Aurora/Stress.mp3'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 228,
    text:
      `
        Все узнали о произошедшем на маяке. И так или иначе пытались поддержать.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 229,
    text:
      `
        Но несколько дней я просто сидела в своей комнате, пытаясь прийти в норму.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 230,
    text:
      `
        Телефон не покидал рук, а голос папы был единственным средством, что не давал сойти с ума.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 231,
    text:
      `
        Никто не беспокоил. Не надоедал. Не спрашивал. Все отнеслись с пониманием и просто дали время.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 232,
    text:
      `
        Помимо болезни отца, я впервые за долгое время услышала имя Яна.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 233,
    text:
      `
        Мне кажется, в тот момент я не придала этому должного значения. Ведь мой любимый брат казался навсегда потерянным.
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 234,
    text:
      `
        И слова папы укрепляли эти мысли. Ведь за столько лет не было зацепок. Хоть малейшего проблеска надежды.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 235,
    text:
      `
        И мне было страшно от этих мыслей, ведь я не хотела вновь ощущать те страдания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 236,
    text:
      `
        Это было эгоистично, но правдиво.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 237,
    text:
      `
        Но я бы возненавидела себя за упущенную возможность.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 238,
    text:
      `
        Мне нужно было прийти в себя, нужно было расспросить Артура и успокоиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 239,
    text:
      `
        Что, если он действительно жив и нуждается в нашей помощи?
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Yan.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 240,
    text:
      `
        Противоречия и раздор накатывали волнами, поэтому самым лучшим лекарством для меня оставался сон, который на мгновение лишал возможности думать над проблемами.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 241,
    text:
      `
        Вскоре мне стало значительно лучше, и я начала вливаться в ритм жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    music: musicPlayer[`AuroraDaily${loadData(['Aurora', 'Daily', 'Music'])}`],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 242,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'GoWork' }) > 0
        },
        goTo: 243
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'GoWork' }) <= 0
        },
        goTo: 255
      }
    ],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Aurora_Room.jpg')
  },

  {
    id: 243,
    text:
      `
        И наконец-то вышла на работу. Мне было стыдно перед Эцио: я только устроилась и сразу же подвела его.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 244,
    text:
      `
        Но добродушный итальянец нисколько не винил, напротив, я чувствовала лишь только поддержку.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 245,
    text:
      `
        После отработанной смены, он попросил задержаться, чтобы поговорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 246,
    text:
      `
        Мы сели за столик, и Эцио спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 247,
    text:
      `
        — Как ты, Аврора?
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 248,
    text:
      `
        — Гораздо лучше, спасибо! Папа идет на поправку, а о большем я и не мечтаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 249,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'CallEzio' }) > 1
        },
        goTo: 250
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'CallEzio' }) <= 1
        },
        goTo: 255
      }
    ],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 250,
    text:
      `
        — Я должен был быть рядом с тобой. Тем более в такой трудный час.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 251,
    text:
      `
        — Ты и был. Я чувствовала твою поддержку. Не злись на себя. В той ситуации не права только я. У всех есть дела и заботы. А я поддалась эмоциям, даже не думая о последствиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 252,
    text:
      `
        Эцио хотел возразить но, вместо этого, просто улыбнулся, поднимая руки вверх.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 253,
    text:
      `
        — Почему же ты такая милая…
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 254,
    text:
      `
        Едва уловимый шепот все равно дошел до моих ушей, вгоняя в краску.
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 255,
    text:
      `
        — Я понимаю, может быть, это все внезапно и ты откажешься… Хочу пригласить в одно интересное место, чтобы поднять тебе настроение.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 256,
    text:
      `
        — Не прямо сейчас, на следующей недельке, когда с работой будет немного полегче.
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 257,
    text:
      `
        Эцио выглядел искренним в своих намерениях.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 258,
    text:
      `
        Он был очень добродушным, честным парнем, который действительно поднимал настроение.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 259,
    text:
      `
        Но в его простоте крылась загадка. Вернее, способность. Способность делать этот мир лучше.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 260,
    text:
      `
        И я решила:
      `,
    buttons: [
      {
        text: 'Согласиться на встречу с Эцио',
        goTo: 261,
        gift: true
      },
      {
        text: 'Соврать о занятости',
        goTo: 266
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 261,
    text:
      `
        Не было причин отказываться. Уверена — эта встреча приведет только к лучшему.
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Choice', id: 'AcceptMeetingEzio' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 262,
    text:
      `
        — Не знаю, что ты придумал. Но почему бы не попробовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 263,
    text:
      `
        — Не сомневался в твоем согласии. Отлично!
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 264,
    text:
      `
        — Договоримся чуть позже.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 265,
    text:
      `
        Итальянец легко ухмыльнулся и не смог сдержать улыбку.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    message: 'Вы осчастливили Эцио своим согласием',
    stats: [
      { story: EStoriesEn.Aurora, value: +1, category: 'Person', id: 'Ezio' }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 266,
    text:
      `
        Мне не хотелось давать ему каких-то ложных надежд.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 267,
    text:
      `
        Я не была уверена в завтрашнем дне, что уж говорить о будущем.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 268,
    text:
      `
        — Эцио, прости, но скоро должна начаться учеба. Я бы не хотела отвлекаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 269,
    text:
      `
        — Да, разумеется… Как я не подумал. Извини за навязчивость. Желаю тебе удачи!
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Ezio.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 270,
    text:
      `
        Он расстроился. Но было видно, что он все равно не собирался сдаваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Bakery.jpg')
  },

  {
    id: 271,
    text:
      `
        С Артуром мы так и не смогли поговорить обо всем. Он был слишком занят на работе.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 272,
    text:
      `
        А когда поздно приходил, то сразу шел спать в комнату, ссылаясь на усталость.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 273,
    text:
      `
        Я помогала, как могла: накрывала на стол, поддерживала уют в доме.
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 274,
    text:
      `
        Хоть какие-то дела отвлекали и не давали утонуть в тяжелых мыслях.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 275,
    text:
      `
        Спустя почти неделю с момента инцидента с папой, Артур сел ко мне на диван и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 276,
    text:
      `
        — Аврора, сегодня тот самый день!
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 277,
    text:
      `
        Я непонимающе посмотрела на него, совершенно не догадываясь об его особенностях.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 278,
    text:
      `
        — Так и знал, что забудешь. Сегодня должны прийти результаты экзамена. Открывай скорее телефон, давай посмотрим.
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 279,
    text:
      `
        Волнения охватили меня. Сейчас решится моя судьба.
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 280,
    text:
      `
        Я судорожно стала перебирать по экрану в поисках заветной информации.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 281,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'CheatExam' }) > 0
        },
        goTo: 282
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Aurora, category: 'Choice', id: 'CheatExam' }) <= 0
        },
        goTo: 286
      }
    ],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 282,
    text:
      `
        Найдя нужный сайт, высветилась оценка «5».
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 283,
    text:
      `
        Меня уколола совесть, ведь это не были мои достижения.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 284,
    text:
      `
        Но все же, я смогла пройти. Пусть первый этап дался таким образом, но дальше я покажу, на что гожусь.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 285,
    text:
      `
        — Отличные результаты! Не сомневался в твоих способностях!
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 286,
    text:
      `
        Найдя нужный сайт, высветилась оценка «4».
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 287,
    text:
      `
        Это было первое мое достижение.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 288,
    text:
      `
        Пусть и не идеальная оценка, но все же она моя.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 289,
    text:
      `
        — Вижу, что ты решила сделать по-своему. В любом случае поздравляю, это хорошие результаты!
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 290,
    text:
      `
        — Артур, спасибо! Без тебя меня бы здесь не было. Не было бы всех этих успехов.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 291,
    text:
      `
        — Я лишь помог и направил. Далее ты принимала решения сама. Так что выше нос.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 292,
    text:
      `
        Мы улыбнулись друг другу. Наконец-то день был мирным и спокойным.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 293,
    text:
      `
        Но кое-что не давало мне покоя и я решилась спросить:
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 294,
    text:
      `
        — Артур, скажи, это правда, что ты ищешь Яна?
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 295,
    text:
      `
        Вопрос застал его в расплох. Парень отвел взгляд, пытаясь подобрать нужные слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 296,
    text:
      `
        — Правда. Я планировал сказать. Но не хотел расстраивать тебя еще больше. Ведь ложные надежды не доводят до добра.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 297,
    text:
      `
        — Понимаю. И не думай, что злюсь. Просто все это так обескураживает…
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 298,
    text:
      `
        — Я пытался что-либо выяснить. Но никаких зацепок нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 299,
    text:
      `
        Я кивнула, так как понимала — это закономерный итог.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 300,
    text:
      `
        — Послушай, не расстраивайся… Вообще-то, у меня для тебя сюрприз.
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 301,
    text:
      `
        Я немного оживилась, с любопытством поглядывая на Артура
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 302,
    text:
      `
        — Нужно же отпраздновать твое поступление. Завтра соберемся с твоими друзьями и отметим.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Arthur.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 303,
    text:
      `
        Я не верила своим ушам. Артур точно знал, как сделать меня по-настоящему счастливой.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Livingroom.jpg')
  },

  {
    id: 304,
    text:
      `
        Я мечтала, чтобы это когда-нибудь случилось. Далия, Калеб, Артур и я встретились, чтобы наконец-то познакомиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 305,
    text:
      `
        Артур извинился перед Далией за тот инцидент и свое резкое поведение. Девушка была не из обидчивых, а поэтому не держала на него зла.
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 306,
    text:
      `
        Калеб с толикой неприязни смотрел на Артура. Впрочем, это было взаимно.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 307,
    text:
      `
        Возможно, каждый хотел казаться лучше, чем он есть. Или просто показать себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 308,
    text:
      `
        Мне пришла СМС от папы, что все хорошо. Я осталась на улице, пока друзья решили зайти в магазин, чтобы купить все необходимое к празднованию поступления.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Arthur_Home_Streets.jpg')
  },

  {
    id: 309,
    text:
      `
        Отойдя в соседний переулок я решила позвонить, но связь так и не позволила это сделать.
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 310,
    text:
      `
        Расстроенная я принялась возвращаться, как вдруг почувствовала сильный рывок за руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 311,
    text:
      `
        Неизвестный мужчина держал меня крепко, прерывая все попытки выбраться.
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    music: require('../../../../Media/Audio/Aurora/Stress.mp3'),
    imageFront: require('../../../../Media/Images/Aurora/Persons/Hoodguy.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 312,
    text:
      `
        — Что вам нужно? Я могу дать деньги… отпустите.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 313,
    text:
      `
        Впервые я ощутила привкус смерти.
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 314,
    text:
      `
        — Если бы мне нужны были деньги, милая…
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Hoodguy.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 315,
    text:
      `
        — Ты что же, до сих пор не понимаешь, что происходит?
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Hoodguy.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 316,
    text:
      `
        — Пожалуйста, мне больно…
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.Aurora, 'Aurora_Part04') },
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 317,
    text:
      `
        — Будет еще больнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Hoodguy.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 318,
    text:
      `
        Боль. Резкая. Тупая.
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 319,
    text:
      `
        Я опустилась на колени, жадно хватая воздух ртом.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 320,
    text:
      `
        Уже не видела фигуру мужчины. Все мысли выбила оглушающая боль. Сбивающая с ног, путающая сознание.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 321,
    text:
      `
        Руки потянулись к неизвестному, острому, холодному. Что-то вонзилось в живот, оставляя красную лужу подо мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 322,
    text:
      `
        Смерть улыбнулась мне в блике ножа. Я смиренно слушала падение кровавых капель на холодный асфальт.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 323,
    text:
      `
        Начало мерещиться разное. К горлу подступил ком и я закашлялась, отхаркивая кровь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 324,
    text:
      `
        Каким-то чудом рядом оказался Калеб. Он нежно обхватил меня своим телом, прижимая, не давая потерять сознание.
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 325,
    text:
      `
        — Аврора, ты меня слышишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageFront: require('../../../../Media/Images/Aurora/Persons/Kaleb.png'),
    imageBorder: require('../../../../Media/Images/Aurora/UI/Border.png'),
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 326,
    text:
      `
        Зрение подводило. Но казалось, что он боролся, испытывал дискомфорт и невыносимую тяжесть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 327,
    text:
      `
        В следующую секунду Калеб укусил свое запястье, прислонил текущую кровь к своим губам, а затем накрыл ими мои.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  },

  {
    id: 328,
    text:
      `
        Мир заиграл новыми яркими красками, растворяясь в эйфории железного привкуса.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Aurora', 'Глава 1', 'Часть 6', '0')
        }
      }],
    achievement: { story: EStoriesEn.Aurora, name: 'Chapter01Part05Completed' },
    imageBack: require('../../../../Media/Images/Aurora/Backgrounds/Streets.jpg')
  }
])
