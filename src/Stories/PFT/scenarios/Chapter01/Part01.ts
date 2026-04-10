import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { blackFlash, vhs } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.PFT, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Широко распахнутые глаза Венди пытались хоть что-то выхватить в ярком свете операционного светильника.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: 'В истории содержатся сцены жестокости. Мы против любых форм агрессии и насилия. Информация представлена исключительно в художественном контексте. Читайте с осторожностью.',
    music: require('../../../../Media/Audio/PFT/Music/Stress_Theme.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 1,
    text:
      `
        «Где я?»
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 2,
    text:
      `
        Ничего примечательного вокруг — лишь размытые границы небольшой комнаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 3,
    text:
      `
        От соприкосновения затылка с жёстким подголовником пульсирующая головная боль усилилась, будто кожу жгла необработанная антисептиком большая рана. Жар и беспокойство нарастали.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 4,
    text:
      `
        Бесплотные попытки рассмотреть обстановку заставили волосы прилипнуть ко лбу, сдавленному ремнём. Руки и ноги тоже оказались обездвижены на кушетке.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 5,
    text:
      `
        — Что происходит?! Выпустите меня!
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 6,
    text:
      `
        Испуганная девушка прокричала это каким-то чужим сорвавшимся голосом. Казалось, стены крохотной коробки, в которой оказалась пациентка, поглотили звук.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 7,
    text:
      `
        Грубым движением Венди разжали челюсти — во рту оказалась трубка из плотной резины с противным привкусом и резким запахом антисептика. Дышать она не мешала, но ощущалась чуждой, слишком громоздкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 8,
    text:
      `
        Ловкие пальцы незнакомца убрали вездесущие волосы пленницы, освобождая лоб. На висках Венди ощутила холод электродов, с тянущимися от них проводами.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 9,
    text:
      `
        Неизвестный скрывался во мраке изголовья, где нарастал тревожный гул какого-то аппарата. Вдруг через всё естество Венди прошёл разряд тока.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    ambient: require('../../../../Media/Audio/PFT/Ambients/Electricity.mp3'),
    effect: 'Молнии',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 10,
    text:
      `
        Конечности забились в судороге. Боль в затылке не просто померкла — исчезла — столь ничтожной она казалась в сравнении с этой пыткой. Оглушённость сознания сменилась головокружением.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    effect: 'Красная вспышка',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 11,
    text:
      `
        Как только разряд угас, громко втягивая воздух сквозь выступившую во рту слюну, Венди попыталась переждать нахлынувшее исступление.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    effect: 'Молнии',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 12,
    text:
      `
        Следующий удар тока накрыл снова и теперь не только руки и ноги бились в конвульсиях, но и тело грозило выгнуться дугой. В голове помутнело и даже яркий светильник казался чем-то блёклым, нездешним.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    effect: 'Молнии',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 13,
    text:
      `
        Левая рука неестественно выгнулась и хрустнула, высвобождаясь из ремня, — её сейчас же примотали назад, несмотря на торчащую наружу кость.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    effect: 'Красная вспышка',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 14,
    text:
      `
        Хуже этой боли, залитого кровью подлокотника и подступающей тошноты было только ощущение того, что Венди стала терять воспоминания.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    effect: 'Молнии',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 15,
    text:
      `
        «Помогите!»
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    effect: 'Молнии',
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Afraid.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 16,
    text:
      `
        Сильный и на этот раз более долгий разряд словно выключил мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    effect: 'Молнии',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Basement_Store.jpg')
  },

  {
    id: 17,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    effect: 'Молнии',
    interruptiveFrame: { goTo: 18 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/White.jpg')
  },

  {
    id: 18,
    text:
      `
        Пространство вокруг начало рассыпаться. Девушка с ужасом поняла, что не знает, кто она, даже собственного имени.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    effect: 'Молнии',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/White.jpg')
  },

  {
    id: 19,
    text:
      `
        Медленно ломающиеся грудные позвонки — её реальность. Комната и кушетка также виделись не имеющими к Венди отношения вещами.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    effect: 'Молнии',
    simple: require('../../../../Media/Audio/PFT/Sounds/Bones_Crack.mp3'),
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/White.jpg')
  },

  {
    id: 20,
    text:
      `
        Мир схлопнулся до судороги, уничтожающей тело; до разряда тока, стирающего личность в прах. Необъяснимой загадкой казалось девушке, как из-за мучений она не лишилась сознания.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    effect: 'Молнии',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/White.jpg')
  },

  {
    id: 21,
    text:
      `
        Холодный пот выступил на лбу и в момент кульминации боли, Венди с криком открыла глаза. Пытаясь отделаться от кошмара, девушка встала с кровати.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    simple: require('../../../../Media/Audio/PFT/Sounds/Woman_Cry.mp3'),
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Afraid.png'),
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/White.jpg')
  },

  {
    id: 22,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 23 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/White.jpg')
  },

  {
    id: 23,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 24 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 24,
    text:
      `
        В ту же секунду в угол её палаты метнулась и прижалась к стене чья-то тень. Всё ещё трясущимися руками Венди закрыла лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    music: require('../../../../Media/Audio/PFT/Music/Hospital_Theme.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 25,
    text:
      `
        Убедившись, что помнит своё имя и то, как оказалась в «Госпитале святого Вита», пациентка прижала к груди здоровую левую руку и с опаской попыталась выпрямиться, чтобы почувствовать спину.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 26,
    text:
      `
        После нескольких неровных выдохов девушка убедилась, что физически никак не пострадала. Вопреки здравому смыслу поток мыслей игнорировал присутствие чужака в её палате.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    simple: require('../../../../Media/Audio/PFT/Sounds/Quick_Breath.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 27,
    text:
      `
        «Как же надоело тут торчать! Уже недели две, три? Кричать бестолку — связали. Никому нет дела… Начала строить из себя смиренную овечку — тоже игнорируют».
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 28,
    text:
      `
        «Я буду выжидать, лгать — всё, что угодно, но выберусь отсюда. И раз Виктор даже не пришёл посмотреть удалось ли сломать его «ириску»… Я сама тебя найду, сволочь!»
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 29,
    text:
      `
        «Хоть с соседями повезло. Спокойные, иначе некому было бы сокрушаться тут над поломанной поганцем жизнью».
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Eyes.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 30,
    text:
      `
        «Ну, всё-таки и сон! Сам дьявол — добряк, если сравнивать с садистом у изголовья кушетки. Ещё трясёт... В висках покалывает, будто на самом деле были электроды, что за бред…»<p> <p>«Теперь не усну. А жаль, так бы время шло быстрее».
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 31,
    text:
      `
        У стены послышался голос:
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 32,
    text:
      `
        — Ты... Ты меня не обидишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speakerR: 'Рэйн с книгой',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein_Book.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 33,
    text:
      `
        Венди только сейчас в полной мере осознала, что рядом посторонний. Скорее всего пациент потому, что его голос звучал чересчур боязливым, хоть и принадлежал молодому мужчине.
      `,
    buttons: [
      {
        text: 'Это пациент?',
        goTo: 34
      },
      {
        text: 'Это наяву?',
        goTo: 36
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 34,
    text:
      `
        «Здоровые такие вопросы не задают».
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Matter' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 35,
    text:
      `
        «Этот кошмар — всего лишь иллюзия — проекция моих страхов. Мучитель — наверняка отсылка к Виктору».
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 36,
    text:
      `
        «Незнакомец точно не из сна».
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Ether' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 37,
    text:
      `
        «Тот, кто мучил меня в кошмаре, не трясся в углу как кролик. Он удав. Наблюдал, получая удовольствие».
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 38,
    text:
      `
        Пересохшими губами Венди тихо произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 39,
    text:
      `
        — Нет. Я не стану тебя обижать. Как тебя зовут?
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 40,
    text:
      `
        На самый краешек кровати сел парень. Он не спускал осторожных глаз с Венди, прижимая к груди какую-то книгу. Затем, убедившись, что на него не нападают, обиженно уставился в стену и начал немного раскачиваться из стороны в сторону:
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 41,
    text:
      `
        — Здесь не было никого... А теперь ты. Я хотел вместе почитать, а ты кричишь!
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein_Book_Offense.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 42,
    text:
      `
        — Прости, пожалуйста. Мне приснился дурной сон — не хотела кого-то напугать... Но разве врачи разрешают бродить тебе по ночам?
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 43,
    text:
      `
        Парень сбивчиво затараторил:
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 44,
    text:
      `
        — Дебора хочет быть как Злая королева. Но она невнимательная. Дурочка-Дебора оставила ключи. А я забрал. Не выдавай!
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein_Book_Happy.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 45,
    text:
      `
        «Дебора — похоже та медсестра, которая ставила укол, когда я впервые оказалась здесь. Из персонала только она ко мне и заходит».
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 46,
    text:
      `
        «А ещё постоянно околачивается в больнице, будто других медсестёр нет… Выслуживается перед Шэрон? Вот уж этой Деборе точно ничего не скажу».
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 47,
    text:
      `
        — Не выдам. А кто такая Злая Королева?
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 48,
    text:
      `
        — Ты сама знаешь кто.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein_Book.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 49,
    text:
      `
        Парень насупился, они немного помолчали. Ласковее Венди заговорила:
      `,
    buttons: [
      {
        text: 'Люблю читать',
        goTo: 50
      },
      {
        text: 'Может почитаем?',
        goTo: 54
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 50,
    text:
      `
        — И друзей мне здесь тоже не хватает.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Ether' },
      { story: EStoriesEn.PFT, value: 1, category: 'Choice', id: 'LikeReading' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 51,
    text:
      `
        «Не то, чтобы я здесь для этого, но… Плохо быть наедине со своими бедами. Последнего друга я обидела. Прости, Присцилла, так было нужно».
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 52,
    text:
      `
        Через боль Венди заставила себя улыбнуться незнакомцу.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 53,
    text:
      `
        — Да и читать совсем нечего. Что у тебя за книга?
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 54,
    text:
      `
        — Надо же здесь чем-то заняться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Matter' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 55,
    text:
      `
        — Но только не часто. Не хотелось бы попасться кому-то из врачей.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 56,
    text:
      `
        А про себя Венди подумала:
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 57,
    text:
      `
        «Особенно одной рыжей родственнице. А то угостит слоновьей дозой Галоперидола. Обоих».
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 58,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    OKMessage: { goTo: 59, image: require('../../../../Media/Images/PFT/Items/Books_Of_Tales.png'), buttonText: 'Рассмотреть' },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 59,
    text:
      `
        Лицо парня посветлело, он бросил на Венди быстрый взгляд узких глаз и протянул книгу. Немного расслабившись и проведя пальцами по матовой поверхности старого издания, Венди вернулась под одеяло.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 60,
    text:
      `
        «Сказки. Кто бы сомневался... Взрослый парень, а ведёт себя словно мальчик. В глаза избегает смотреть. Интересно, это из-за болезни? Мне здесь точно не место!»
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 61,
    text:
      `
        Но вслух Венди решила подыграть.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 62,
    text:
      `
        — Можно сказать, что из-за сказок я очутилась здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 63,
    text:
      `
        Совсем не заботясь о том, что жест может быть нежелательным, парень ткнул в плечо Венди указательным пальцем.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 64,
    text:
      `
        — Врёшь!
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 65,
    text:
      `
        — Вот и нет. Поверила, глупая, будто смогу сбежать... Муж разрушил эту сказку — упрятал сюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 66,
    text:
      `
        Парень, казалось, задумался. Растерянный вид говорил: ему не чуждо сострадание.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 67,
    text:
      `
        — Наверное твоему мужу было некому читать сказки. Иначе был бы хорошим. Бедный.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 68,
    text:
      `
        Грустный тон ночного гостя задел девушку — она ожидала жалость по отношению к себе, но точно не к мужу-тирану.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 69,
    text:
      `
        — Давай лучше поговорим о другом. Почему ты любишь сказки?
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 70,
    text:
      `
        — Сказки — это истории про людей. Мне нравятся люди…
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 71,
    text:
      `
        Будто спохватившись от своей говорливости, юноша засобирался, выхватив из рук девушки книгу:
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 72,
    text:
      `
        — Спи. Чтобы выздороветь, нужно хорошо кушать и высыпаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein_Book.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 73,
    text:
      `
        — Но мы ведь так и не почитали…
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 74,
    text:
      `
        — Спокойной ночи, друг!
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rein_Book.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 75,
    text:
      `
        Этот тон не терпел возражений, но звучал наивно, будто посетитель копировал кого-то из авторитетных «взрослых». Беспокойный парень, не дожидаясь ответа, тихо закрыл за собой дверь и будто испарился.
      `,
    buttons: [
      {
        text: 'Спокойной ночи!',
        goTo: 76
      },
      {
        text: '<i>Промолчать',
        goTo: 80
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 76,
    text:
      `
        «Всё-таки странно, что его ещё не поймали. Неужели моя комната и коридор не попадают под камеры? Или их вообще нет?»
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    stats: [
      { story: EStoriesEn.PFT, value: 1, category: 'Choice', id: 'GoodNight' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 77,
    text:
      `
        Смесь усталости и надежды заставила Венди судорожно вздохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 78,
    text:
      `
        «Побег. Это слишком рискованно и наивно даже для меня. Для начала попробую убраться отсюда официально. Вдруг получится выйти без диагнозов в медицинской карте?»
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 79,
    text:
      `
        «Звучит ещё наивнее».
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 80,
    text:
      `
        «И у скольких пациентов здесь ещё есть ключи?»
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 81,
    text:
      `
        «Видимо камер нет или они не везде. Иначе парня бы давно уже поймали. Только меня Шэрон держит в ежовых рукавицах? Этот пациент пока не вызывает опасений… А вот его ключи могут пригодиться».
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 82,
    text:
      `
        «Предположим, я украду их или сам отдаст. Парень кажется добрым… Господи, пожалуйста, хоть бы до госпиталя он не был маньяком с бензопилой!»
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 83,
    text:
      `
        «Допустим, что ключи подойдут ко всем дверям и я выйду наружу. Куда потом в таком виде? Кроме Виктора мне не к кому пойти».
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 84,
    text:
      `
        «Даже если просто скроюсь в городе, через полчаса буду снова здесь. Но только привязанная и мультики смотреть в собственной голове».
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 85,
    text:
      `
        «Можно использовать ключи, чтобы достать телефон и всё объяснить Присцилле. Но он наверняка уже разряжен. И станет ли Присцилла меня вообще слушать после всего?»
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 86,
    text:
      `
        «Парень и его способность легко здесь скрываться могут помочь. Но нужно всё продумать. Побег оставлю на самый крайний случай. Если любителя сказок не раскроют, конечно».
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 87,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        goTo: 89,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.PFT, category: 'Choice', id: 'LikeReading' }) <= 0 && statsManager.get({ story: EStoriesEn.PFT, category: 'Choice', id: 'GoodNight' }) <= 0
        }
      },
      {
        goTo: 88,
        condition: () => {
          return statsManager.get({ story: EStoriesEn.PFT, category: 'Choice', id: 'LikeReading' }) >= 1 && statsManager.get({ story: EStoriesEn.PFT, category: 'Choice', id: 'GoodNight' }) >= 1
        }
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 88,
    text:
      `
        «Странный парень».
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 89,
    text:
      `
        «Милый парень. И почему он здесь?»
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    achievement: { story: EStoriesEn.PFT, name: 'Neighborgood' },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 90,
    text:
      `
        Оставшись в одиночестве, Венди натянула одеяло по самые уши. Несмотря на расстроенные чувства и здравую мысль:
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 91,
    text:
      `
        «А вдруг он всё-таки опасен? Так своё имя и не назвал».
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 92,
    text:
      `
        Она уснула, как только коснулась подушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 93,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 94 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 94,
    text:
      `
        Следующий день подарил Венди долгожданные водные процедуры. Унизительным был факт — одну её не оставляли даже в общей душевой.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    ambient: require('../../../../Media/Audio/PFT/Ambients/Shower.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 95,
    text:
      `
        «Как с больной, в самом деле».
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 96,
    text:
      `
        Парочка других пациенток тоже были поблизости: одна из них, помоложе, пряталась в дальнем углу, будто все на неё смотрели, а вторая громко говорила сама с собой, растирая кожу до красноты.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    simple: require('../../../../Media/Audio/PFT/Sounds/Murmle.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 97,
    text:
      `
        Пытаясь абстрагироваться от соседок по несчастью, а также грузной санитарки с натруженными руками и постоянно сдвинутыми на носу бровями, девушка отвернулась к стене.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 98,
    text:
      `
        Выцветшая кафельная плитка наверняка хранила множество трагических историй здешних больных.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 99,
    text:
      `
        Венди опасалась, что её вот-вот заставят пошевеливаться. Ведь вода только-только наконец прогрелась, повалил белый пар. Живительная влага будто давала обещание смыть все беды.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 100,
    text:
      `
        Прикрыв глаза, девушка слушала как капли барабанят по коже и стенам, напоминая удары дождя по куполу зонтика.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 101,
    text:
      `
        «Какая сейчас погода?»
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Eyes.png'),
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 102,
    text:
      `
        Не сказать, что Венди пичкали особенно сильными препаратами, но от лёгких нейролептиков хотелось спать, а дни здесь были почти идентичными друг другу. Сколько их прошло?
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 103,
    text:
      `
        Ни календаря, ни телефона — легко сбиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 104,
    text:
      `
        «Может и здоровые люди сходят с ума в психиатрических клиниках? Но не из-за чужих болезней, а от информационного вакуума».
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 105,
    text:
      `
        «Вероятно уже начались дожди и смыли осеннюю красоту деревьев прямо в грязь...»
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 106,
    text:
      `
        Думать о простых вещах больше не получалось, тревожные мысли то и дело возвращались.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 107,
    text:
      `
        «Что делать? Как Шэрон удаётся проворачивать такое, ко мне ведь даже врача не приставили?! И никто не станет меня искать».
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 108,
    text:
      `
        Меланхоличные размышления прервало ощущение неправильности происходящего.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 109,
    text:
      `
        «Я ничего не слышу».
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 110,
    text:
      `
        Обернувшись, Венди поняла, что густой белый пар плотно обволакивает её одинокую фигуру и ничего не разобрать на расстоянии вытянутой руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 111,
    text:
      `
        В тот же момент девушку резко потянули за волосы и ударили об стену.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    simple: require('../../../../Media/Audio/PFT/Sounds/Body_Slap_Wall.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 112,
    text:
      `
        Напряжённое недоумение быстро сменил гнев. Венди попыталась отползти по холодной поверхности в сторону, хватая полотенце.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    effect: 'Красная вспышка',
    music: require('../../../../Media/Audio/PFT/Music/Stress_Theme.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 113,
    text:
      `
        «Да чёрт возьми! Что на этот раз?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 114,
    text:
      `
        Прикрыв спину кафельной стеной, пациентка попыталась определить источник опасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 115,
    text:
      `
        «Никого. Не может быть!»
      `,
    buttons: [
      {
        text: 'Снова кошмар?',
        goTo: 116
      },
      {
        text: 'Какой-то отморозок?',
        goTo: 125
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 116,
    text:
      `
        «Безумие какое-то. Но ведь не могло всё показаться?! Нос чуть не разбила, мне действительно больно!»
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Alert.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Ether' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 117,
    text:
      `
        «Мучитель из моего сна решил добить? Не вышло током, но с помощью грубой силы надёжнее? Чёрта с два!»
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 118,
    text:
      `
        «Будто опять ощущаю его липкий взгляд… Затаился рядом? Нужно переключить его с агрессии на разговор. Мне нужна передышка».
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 119,
    text:
      `
        — Выходи! Имей смелость смотреть в лицо, если нападаешь. Я знаю, это ты пытал меня во сне! 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 120,
    text:
      `
        Тишина. Осмелев несмотря на дрожащий голос, Венди сдавленно добавила:
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 121,
    text:
      `
        — И там ты прятался… Трус!
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 122,
    text:
      `
        И тут же пожалела о сказанном, получив удар в плечо такой силы, что рухнула на колени.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    simple: require('../../../../Media/Audio/PFT/Sounds/Body_Slap.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 123,
    text:
      `
        «Нет сомнений — это тот садист! И я его разозлила…»
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 124,
    text:
      `
        Готовясь к худшему, Венди прикрыла голову руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 125,
    text:
      `
        «Шэрон подослала ко мне кого-то! Неужели использует агрессивного пациента для своей цели? Беспринципного санитара? Да по ней тюрьма плачет!»
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Alert.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Matter' }],
    achievement: { story: EStoriesEn.PFT, name: 'WarBehaviour' },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 126,
    text:
      `
        «Тут и убить могут, а сестре моего благоверного всё с рук сойдёт!»
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 127,
    text:
      `
        Как затравленный зверь Венди поднялась, опираясь на стену.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 128,
    text:
      `
        «Не встану — добьют».
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 129,
    text:
      `
        Будто повинуясь внезапному порыву ветра, которому неоткуда было взяться в закрытой душевой, резкие колебания плотного пара не остались незамеченными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 130,
    text:
      `
        Кто-то мельтешил прямо перед лицом девушки. Забавлялся запугивая. Но этого «кого-то» не было видно.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 131,
    text:
      `
        «Да что же это? Как?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 132,
    text:
      `
        Венди принялась молотить воздух то рукой, то ногами. Если бы не животный страх в её глазах и хаотичные движения, можно было подумать, что девушка дурачится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 133,
    text:
      `
        Пара неуверенных движений в густом непрозрачном воздухе и её кулак сжала чья-то липкая не то рука, не то конечность. А потом, дёрнув с нечеловеческой силой, заставила упасть на пол.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 134,
    text:
      `
        Смешиваясь с водой на полу, капли крови из свежих ссадин, оставляли тонкие ручейки на плитке.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 135,
    text:
      `
        Если бы ни страх, Венди залюбовалась эстетичным сочетанием красного и розового.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 136,
    text:
      `
        Льдистые капельки мокрого воздуха покрыли тело пациентки, заставив сжаться от холода.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 137,
    text:
      `
        Извиваясь как змеи, воспоминания об ужасах ночи, заполнили душевую. Чтобы позвать на помощь, нужен голос, но он предательски перестал слушаться. Некуда бежать.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 138,
    text:
      `
        Намокшее от воды полотенце Венди прижимала к себе, будто даже в таких обстоятельствах стоило соблюдать приличия. Трусливая идея не вовремя пришла в голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 139,
    text:
      `
        «Что, если моя жизнь оборвётся здесь, на мокром полу сумасшедшего дома?»
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Towel_Scared.png'),
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 140,
    text:
      `
        Венди оцепенела, и, как уже с ней однажды случилось, фантазии обрушились бурным потоком. Вместо того чтобы через пару минут прийти в себя…
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Shower_Steam.jpg')
  },

  {
    id: 141,
    text:
      `
        Девушка обнаружила себя сидящей за столом, на котором стояло блюдце с кристально-чистой водой. Не менее удивительным было отражение Венди:
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    effect: 'VHS',
    music: require('../../../../Media/Audio/PFT/Music/Theme_Medieval.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 142,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.PFT, personId: 'Chapter01_Part01_Dress', goTo: 143 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 143,
    text:
      `
        Немолодая женщина участливо смотрела на Венди. Они обе сидели за столом, поблизости тлел очаг, вокруг располагалась немногочисленная простая мебель.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 144,
    text:
      `
        Солнечные лучи кротко пробивались сквозь небольшое окно в этот бедный, но очень уютный дом.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 145,
    text:
      `
        Бегающие по закопчённым стенам, с развешанными на них пучками душистого укропа, дикие глаза Венди заставили даму заволноваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 146,
    text:
      `
        — Дорогая, что с тобой?
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rosalinda_Involved.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 147,
    text:
      `
        Отложив шитьё на стол, незнакомка протянула руку, чтобы легонько потрясти Венди за плечо. Простенькое и симпатичное платье женщины зашуршало — оно явно было сшито из грубой материи.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 148,
    text:
      `
        Недавняя пациентка «клиники святого Вита» подскочила и бросилась к окну. Здесь её ждала новая проблема: вместо стекла была мутная, но прозрачная плотная ткань, пропитанная чем-то жирным на ощупь.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 149,
    text:
      `
        — Бога ради, Маргарет, не порви! Чем же мы от мошкары будем спасаться?
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rosalinda.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 150,
    text:
      `
        Не сразу сообразив, что незнакомка обращается к ней, девушка подцепила край тонкой ткани и аккуратно, но быстро сдвинула её в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 151,
    text:
      `
        Теплый луч пронзил комнату, открывая для Венди неожиданный вид, заставившей немного податься назад.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 152,
    text:
      `
        Едва заметив движение собственных прядей, которые играючи потянул было ветер в раскрытое окно, девушка увидела ясное голубое небо и небольшой, но шумный городок внизу.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 153,
    text:
      `
        На мощёной мостовой люди занимались каждый своим делом: здесь были горожанки с корзинами, куда-то спешащие; праздный пьяница, вызывающий на бой мальчишек-оборванцев, которые от него, смеясь, убегали…
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 154,
    text:
      `
        «Я не забыла это место».
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 155,
    text:
      `
        Пощёчина Виктора уже приводила её сюда. Теперь же вокруг простирался целый мир.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 156,
    text:
      `
        Венди осторожно взглянула на женщину, всё это время почти со страхом наблюдающую за ней. Та задумчиво произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 157,
    text:
      `
        — Kleine Kinder — kleine Sorgen, große Kinder — große Sorgen… 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    message: '<i>«Маленькие детки — маленькие бедки, а вырастут велики — большие будут»— </i>немецкий аналог русской пословицы.',
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rosalinda.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 158,
    text:
      `
        — Уж не влюбилась ли ты, голубушка моя?
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rosalinda.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 159,
    text:
      `
        «Она принимает меня за кого-то другого. На сон это не похоже, а вот на мою фантазию вполне. Только как вернуться? На меня там напали вообще-то. Надо хоть что-то спросить. Молчать уже не прилично».
      `,
    buttons: [
      {
        text: 'Здесь опасно?',
        goTo: 160
      },
      {
        text: 'Что происходит?',
        goTo: 162
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 160,
    text:
      `
        — С чего ты взяла? Как и во всём Верганенхайте. Не в замке, конечно, живём. Но и не на улице. Всё-таки твой отец <i>ещё</i> уважаемый человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rosalinda_Doubt.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Ether' }],
    achievement: { story: EStoriesEn.PFT, name: 'SafetyFirst' },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 161,
    text:
      `
        «Нужно хотя бы сделать вид, что я понимаю, о чём она говорит. Но толку от этого… Вероятно и здесь мне грозит опасность, поэтому с ответами медлить нельзя».
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 162,
    text:
      `
        Вместо ответа бровь дамы напротив так стремительно поползла вверх, что Венди почувствовала себя крайне неуютно.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Matter' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 163,
    text:
      `
        «Поскорее бы во всём разобраться. А то я так и буду вызывать недоумение и вопросы. Пока до последних не дошло, пора уходить. Нужно осмотреться, подумать. Без посторонних».
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 164,
    text:
      `
        — Всё... в порядке. Просто мне стало душно.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 165,
    text:
      `
        Женщина облегчённо всплеснула руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 166,
    text:
      `
        — Ох, гора с плеч! Я решила, какой-то местный оборванец заморочил тебе голову и вы решили сбежать…
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rosalinda_Happy.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 167,
    text:
      `
        Не найдя, что сказать, Венди молчала.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 168,
    text:
      `
        — Всё вздор! Тебе, доченька, лучше подышать свежим воздухом. Сходи за одно на реку, прополощи воротнички. Чтоб высохнуть к утру успели — заказчица рано придёт.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rosalinda_Happy.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 169,
    text:
      `
        «Доченька?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Puzzled') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 170,
    text:
      `
        Сунув изящную корзинку в руки девушки, «мама» засуетилась возле очага. Венди выскользнула из башни по шаткой винтовой лестнице, которая вела в другие комнаты, очевидно занятые иными жильцами.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 171,
    text:
      `
        Одна дверь на пути была нараспашку, оттуда доносились звуки ротты, топот и смех.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    message: '<i>«Ротта — древний струнный музыкальный инструмент, напоминающий лиру».</i>',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 172,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 173 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace.jpg')
  },

  {
    id: 173,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 174 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 174,
    text:
      `
        На переполненной улице Венди принялась рассматривать диковинные средневековые дома и народ вокруг.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 175,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    cutScene: { video: require('../../../../Media/Images/PFT/Cutscenes/Street.mp4'), goTo: 176 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 176,
    text:
      `
        Башня, откуда вышла девушка, была той самой, которая ей привиделась ранее. Успела Венди рассмотреть и шпиль готического собора в другой стороне города.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 177,
    text:
      `
        Прохожие не спешили отводить глаза, как обычно, а с любопытством смотрели в ответ.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 178,
    text:
      `
        Наконец девушка опомнилась и, вцепившись в корзинку, решила отыскать реку, озеро, пруд — любой водоём. Лишь бы разобраться со всем поскорее.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 179,
    text:
      `
        «Про какой водоём сказала <i>эта</i> женщина?»
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 180,
    text:
      `
        Испещрённая ухабами мостовая, в северном направлении витиевато уходила вниз, а к югу поднималась.
      `,
    buttons: [
      {
        text: 'Пойду на юг',
        goTo: 181
      },
      {
        text: 'Только вниз',
        goTo: 191
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 181,
    text:
      `
        «Обзор будет лучше».
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Matter' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 182,
    text:
      `
        Где север и юг наверняка Венди не знала, но решив по солнцу, что сейчас около шести вечера, поспешила в выбранном направлении.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 183,
    text:
      `
        «Надо хоть что-то принять на веру, чтобы сдвинуться с мёртвой точки».
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 184,
    text:
      `
        Скоро людей заметно поубавилось и булыжники под ногами сменились неширокой грунтовой дорогой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 185,
    text:
      `
        — Привет, подожди меня! Маргарет, куда ты?
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 186,
    text:
      `
        Когда ты находишься в плену собственного больного воображения, меньше всего хочется с кем-то взаимодействовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 187,
    text:
      `
        Сменив направление на сто восемьдесят градусов, девушка поспешила обратно, чуть не выронив корзину на бегу.
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 401,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    ambient: require('../../../../Media/Audio/PFT/Ambients/River_Flow.mp3'),
    interruptiveFrame: { goTo: 189 },
    achievement: { story: EStoriesEn.PFT, name: 'RestForSoul' },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 188,
    text:
      `
        Преследователь оставил позади оживлённую часть города и тоже вышел к реке — слышно было, как под его ногами перекатываются мелкие камешки. Узкая тропа вела вдоль воды в лес и Венди поторопилась скрыться в листве, минуя открытое место.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 189,
    text:
      `
        — Да постой же! Будто оса тебя ужалила, куда несёшься?
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 190,
    text:
      `
        Насмешливый голос был смутно знаком, но Венди уже одно упрямство несло вперёд.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 191,
    text:
      `
        «Возможно там река».
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Ether' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 192,
    text:
      `
        Не забывая любоваться окружающей обстановкой, Венди поспешила в выбранном направлении.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 193,
    text:
      `
        «Скоро стемнеет. Нужно поторопиться».
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 194,
    text:
      `
        Вокруг стало больше деревьев, а затем показалась водная поверхность. Впервые за долгое время, ощутив мимолётный покой, Венди остановилась, глубоко вдохнув тихую свежесть.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    ambient: require('../../../../Media/Audio/PFT/Ambients/River_Flow.mp3'),
    interruptiveFrame: { goTo: 195 },
    achievement: { story: EStoriesEn.PFT, name: 'RestForSoul' },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 195,
    text:
      `
        «Какое мирное убежище ты создала для своего сумасшествия, Венди!»
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Smirk') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 196,
    text:
      `
        В столь живописном месте наверняка назначали тайные свидания. Из зарослей осоки у самой кромки воды вспорхнула пара уток, заставив девушку улыбнуться окружавшей её естественной красоте.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 197,
    text:
      `
        — Маргарет, что ты здесь делаешь? Мать отправила?
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 198,
    text:
      `
        «А вдруг это мучитель из моих кошмаров? Следует по пятам, даже в фантазии смог проникнуть!»
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 199,
    text:
      `
        Не разбирая дороги, Венди бросилась к лесу вдали, надеясь затаиться в листве.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 200,
    text:
      `
        — Куда понеслась? Маргарет, стой!
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 201,
    text:
      `
        Насмешливый голос не казался угрожающим и даже был будто бы смутно знаком, но Венди один страх уже гнал вперёд.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 202,
    text:
      `
        Неожиданно нога девушки соскользнула в сторону, чему виной была грязь — неотъемлемая часть подобных пейзажей, и Венди, как подкошенная, рухнула в гибкую траву.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    ambient: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 203,
    text:
      `
        «Нигде покоя нет, даже в собственной голове. Тем более в ней».
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 204,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    cutScene: { video: require('../../../../Media/Images/PFT/Cutscenes/Dragonfly.mp4'), goTo: 205 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 205,
    text:
      `
        Взглядом Венди проводила стрекозу, пролетавшую над ней. Золотистое солнце почти скрылось, окрашивая крылышки насекомого в радужные цвета.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 206,
    text:
      `
        Но пока было по-летнему светло. Куда-то торопиться уже не имело смысла — преследователь стоял поблизости, Венди его слышала.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 207,
    text:
      `
        Девушка приняла предложенную руку. С удивлением она уставилась на того, кого надеялась не встретить в вымышленном мире.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 208,
    text:
      `
        — Ты как полотно побелела... Маргарет, почему убегала? Я звал тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 209,
    text:
      `
        Венди с ненавистью вырвала похолодевшие пальцы и отодвинулась от Виктора. Единственный муж, впрочем, почти бывший, стоял перед ней как ни в чем ни бывало. Словно не упрятал любимую в психушку.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 210,
    text:
      `
        «Одежда... Хм, Виктор похож на местного. Хотя и я в каком-то платье. Это всё ещё мои фантазии».
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 211,
    text:
      `
        Лицо Виктора между тем становилось всё суровее.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 212,
    text:
      `
        — Тебя кто-то обидел. Идём, сестрёнка. Покажи ублюдка.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 213,
    text:
      `
        С губ девушки сорвался нервный смешок.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 214,
    text:
      `
        — Да, есть тут один…
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Alert') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 215,
    text:
      `
        Виктор было снова попытался взять её за руку, но девушке всё уже порядком надоело.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 216,
    text:
      `
        — Так. Стоп. Ты вообще откуда здесь?! Какая я тебе сестрёнка? Почему Маргарет?!
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Alert') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 217,
    text:
      `
        На лице Виктора отразилось смятение, он хотел подойти ближе, но девушка снова отстранилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 218,
    text:
      `
        — Ты моя сестра, Маргарет! Мы дома, в Верганенхайте. Раскидала тут всё... Что же с тобой произошло?
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz_Astonished.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 219,
    text:
      `
        То и дело тревожно оглядываясь на сестру, Виктор склонился над корзиной и принялся собирать выпавшие воротнички. Элегантная и пёстрая вышивка призывала обратить на себя внимание, но до неё сейчас никому не было дела.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 220,
    text:
      `
        Венди замельтешила перед новоявленным братом, который выглядел так горько, словно находился у постели умирающей.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 221,
    text:
      `
        «Эти фантазии слишком реальны. Как выбраться? Город похож на средневековый. Что я знаю об этом времени? Ранняя смертность, чума, гнилые зубы, инквизиция...»
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 222,
    text:
      `
        Покосившись на «Виктора» и его опрятный внешний вид, Венди решила, что этот мир лишь напоминает средневековье.
      `,
    buttons: [
      {
        text: 'Дело в голове',
        goTo: 223
      },
      {
        text: 'Дело в фантазиях',
        goTo: 229
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 223,
    text:
      `
        «Наверное, я создала стилизацию под историческую эпоху. Пообщаюсь с местными. Для какой-то цели мой мозг их здесь раскидал. Начну с общей информации, вдруг что-то прояснится».
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Matter' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 224,
    text:
      `
        — Что за Верг… Как его там? Какой сейчас год? Что это за страна?
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 225,
    text:
      `
        — Верганенхайт — город, в котором мы с тобой выросли. Ты сегодня… странная. Очень. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 226,
    text:
      `
        Судя по выражению лица «сестрёнки» такой ответ её явно не устроил и ничего не прояснил, поэтому Ганс нехотя отчеканил:
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 227,
    text:
      `
        — Священная Римская империя, герцогство Гессен-Дармштадт. Год 1234 от Рождения Христа, конец витумнуда.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz_Roll.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 228,
    text:
      `
        «Похоже на немецкий язык. Не знаю, откуда ещё мой мозг мог взять эти звуковые сочетания, издевательство какое-то! А год 1234 — курам на смех, будто самый простой пароль. Пароль от моего мозга. Хорошо, что не четыре ноля».
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 229,
    text:
      `
        «Похоже, будто я попала в какую-то балладу. Но раз есть персонажи... NPC, вот! Значит, они что-то знают. Надо узнать про этот мир».
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    message: 'NPC — персонаж видеоигры, который не контролируется игроком, обычно повторяет одни и те же фразы и находится в одном и том же месте',
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Ether' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 230,
    text:
      `
        — У вас есть магия?
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 231,
    text:
      `
        Видимо здесь такие вещи спрашивать было не очень безопасно, раз Виктор осмотрелся вокруг и тихо ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 232,
    text:
      `
        — Наша Священная Римская империя, конечно, борется с колдунами. Люди хотят верить в проклинающих взглядом. Но я не видел ни одного подтверждения существования магии.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 233,
    text:
      `
        «Виктор упоминал, что мы в Верганенхайте, Римская империя… Название города похоже на какое-то известное немецкое слово. Я учила немецкий в начальной школе, но… Не помню!»
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 234,
    text:
      `
        «И почему я не попала в средневековую Японию?! Ведь это моя фантазия! Ни сложной японской мифологии, ни синтоизма, ни сёгунов…»
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 235,
    text:
      `
        — Как тебя зовут, братец?
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Smirk') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 236,
    text:
      `
        — Неужели и это забыла... Ганс. Твой малыш Ганс.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz_Astonished.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 237,
    text:
      `
        Едва не рассмеявшись в его серьёзное лицо, Венди смерила рослого мужчину скептическим взглядом. Раздосадованный «Ганс» смутился.
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 238,
    text:
      `
        — Наша мать так меня называла в детстве. Что последнее ты помнишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speakerR: 'Ганс',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 239,
    text:
      `
        Ласка в его словах заставила Венди оставить враждебность.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 240,
    text:
      `
        «Он искренне волнуется за меня... Нужно назвать вескую причину, почему я ничего здесь не знаю. Но чтобы обошлось без лекарей и кровопускания».
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 241,
    text:
      `
        Между тем, мужчина:
      `,
    buttons: [
      {
        text: 'Сократил дистанцию',
        goTo: 242
      },
      {
        text: 'Топтался на месте',
        goTo: 249
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 242,
    text:
      `
        Наблюдавший за беспокойным лицом сестрицы, Ганс всё-таки взял её руку и прижал к своей груди — туда, где билось сердце. Будто это могло помочь вспомнить…
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    message: 'Виктор или Ганс очень хочет помочь?',
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Person', id: 'Viktor' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 243,
    text:
      `
        Тёплое прикосновение вызвало у девушки ощущение родства, как будто они были всё ещё близкими друг другу людьми.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 244,
    text:
      `
        «Венди. Это ни к чему».
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Alert') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 245,
    text:
      `
        «Слишком больно. Ведь в жизни мне не стоит к нему прикасаться. Он предатель! Убил всё хорошее между нами. Сжечь все чувства к нему! Сжечь прошлое!»
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 246,
    text:
      `
        Несмотря на яростные мысли, Венди затаила дыхание и не спешила разрывать образовавшуюся связь.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 247,
    text:
      `
        «Его кожа, глаза… Это точно Виктор. Из моих воспоминаний или появившийся здесь как-то ещё. Не важно! Он так близко и взволнован. Совсем не похож на жестокое чудовище».
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Confused') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 248,
    text:
      `
        «Может мой муж в этом вымышленном мире… другой? Мягче, добрее. В конце концов здесь мы свободны от прошлого».
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Confused') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 249,
    text:
      `
        Ганс ожидал ответа сестрицы, наблюдая за её беспокойным лицом.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 250,
    text:
      `
        Судорожно размышляя над тем, что можно ответить, не вызвав подозрений, Венди выпалила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 251,
    text:
      `
        — Последнее, что помню... Как женщина шептала, глядя мне в глаза и... Даже уколола чем-то! А потом я оказалась в башне за столом. И ничего больше в голове. Даже имени…
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 252,
    text:
      `
        — Ты намекаешь на... проклятие колдуньи?
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speakerR: 'Ганс',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz_Astonished.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 253,
    text:
      `
        Очевидно, Ганс в эту минуту был полон решимости воевать за честь сестры хоть с целым копьём рыцарей, но весть о мифических ведьмах, в которых он вопреки эпохе не слишком верил, застигла его врасплох.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    message: '<i>Копьё — тактическое формирование рыцарей.</i>',
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 254,
    text:
      `
        «Какая чушь... Кто угодно, но, ведьмы? Что я говорю...»
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 255,
    text:
      `
        Вслух Венди сказала другое:
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 256,
    text:
      `
        — Да, это была ведьма! Она украла мои воспоминания.
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Smirk') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 257,
    text:
      `
        — Но зачем? И кто она?
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speakerR: 'Ганс',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz_Astonished.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 258,
    text:
      `
        — Я не помню лица. Да и мало ли зачем. Может ведьмы так развлекаются?
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 259,
    text:
      `
        — В любом случае нам нужно вернуться домой. Пойдём, сестрица.
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speakerR: 'Ганс',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 260,
    text:
      `
        Позволив Гансу проводить себя в башню, Венди ещё внимательнее присматривалась к городу и лицам, мелькающим вокруг. Уже совсем стемнело.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 261,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 262 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/River.jpg')
  },

  {
    id: 262,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 263 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 263,
    text:
      `
        В комнате с очагом появилась ещё одна фигура: мрачный седовласый мужчина помогал накрывать на стол.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 264,
    text:
      `
        — Отец, ты вернулся!
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speakerR: 'Ганс',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Hanz.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 265,
    text:
      `
        Ганс и мужчина тепло пожали друг другу руки. После того как «брат» поведал про ведьму и потерю памяти, за столом воцарилось молчание. Лишь единственная свеча потрескивала, слабо освещая лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 266,
    text:
      `
        «Отец» о чем-то размышлял, игнорируя вытаращенные глаза «матушки», которые пытались хоть за кого-то зацепиться, чтобы получить решение проблемы. Наконец женщина не выдержала:
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 267,
    text:
      `
        — Да что же это такое! Ведьмы и до нас добрались. Что ты сидишь, Франциск? Нашу дочь прокляли! Нам нужно срочно идти к Мартину. Настоятель наверняка сталкивался с подобным, он же священник!
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    speakerR: 'Незнакомка',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Rosalinda_Doubt.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 268,
    text:
      `
        Её причитания оборвались лаконичным «нет». Спокойный Франциск подошёл к Венди, от чего она подскочила как школьница, и положил руку на плечо, читая в её глазах всё, что хотел узнать.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 269,
    text:
      `
        Морщины, пересекающие его лоб как волны, испытывающий взгляд…
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 270,
    text:
      `
        «Он точно знает, что я вру».
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Puzzled') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 271,
    text:
      `
        Обращаясь к жене, но не отнимая взора от дочери, Франциск сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 272,
    text:
      `
        — Розалинда, утраченная память — это не всегда проделки ведьм. Мы пойдём к <i>твоему</i> отцу Мартину, когда убедимся, что дело в проклятии. Голова цела — ни царапинки…
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speakerR: 'Франциск',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Francisk.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 273,
    text:
      `
        Бережно проведя огрубевшей ладонью по щеке дочери, Франциск отрешённо добавил:
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 274,
    text:
      `
        — Вдруг наша дочь просто чего-то испугалась так, что всё забыла? Нужно дать Маргарет время прийти в себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    speakerR: 'Франциск',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Francisk.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night.jpg')
  },

  {
    id: 275,
    text:
      `
        Этот человек был чужим, но Венди почувствовала его внутреннюю боль. Словно Франциск знал, что существуют такие воспоминания, которые за счастье утратить навсегда.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    music: require('../../../../Media/Audio/Common/Silence.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night_Blurred.jpg')
  },

  {
    id: 276,
    text:
      `
        Даже если просто делаешь вид, что ничего не помнишь. Хотя бы так.
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night_Blurred.jpg')
  },

  {
    id: 277,
    text:
      `
        Вспомнив про своих умерших родителей, Венди смотрела на людей, которым будто взаправду также было не всё равно на то, что с ней происходит.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night_Blurred.jpg')
  },

  {
    id: 278,
    text:
      `
        На чрезмерно опекающую «маму» и внешне холодного, но понимающего «отца». Немые слёзы покатились по щекам.
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night_Blurred.jpg')
  },

  {
    id: 279,
    text:
      `
        «Это всё не по-настоящему! Но папа, мама... Мне вас так не хватает!»
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speakerL: 'Венди',
    fullscreenObjectL: () => { return wardrobe.getCurrentEntityVariationImage(EStoriesEn.PFT, 'Chapter01_Part01_Dress', 'Tears') },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Room_Fireplace_Night_Blurred.jpg')
  },

  {
    id: 280,
    text:
      `
        Обнаружив себя в «госпитале святого Вита» снова, Венди смахнула слёзы. Решительным жестом кто-то развернул лицо девушки на свет.
      `,
    buttons: [
      {
        text: 'Сопротивляться',
        goTo: 281
      },
      {
        text: 'Терпеть',
        goTo: 284
      },
      {
        text: 'Впиться взглядом',
        goTo: 281
      }],
    effect: 'Черная вспышка',
    beforeBegin: () => {
      timer.set(6, () => { scenarioManager.beginScene(284) })
    },
    music: require('../../../../Media/Audio/PFT/Music/Stress_Theme.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 281,
    text:
      `
        Хлестнув по чужим рукам, Венди увидела перед собой незнакомца в белом халате. В его сдержанном образе скользнуло удивление. Он помедлил, но всё-таки извинился:
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    beforeBegin: () => { timer.stop() },
    message: 'Некоторые любят строптивых.',
    stats: [{ story: EStoriesEn.PFT, value: 1, category: 'Person', id: 'Natan', silent: true }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 282,
    text:
      `
        — Прошу прощения, мисс. Не стоило так бесцеремонно пытаться привести вас в чувство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speakerR: 'Незнакомец',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 283,
    text:
      `
        Вопреки вежливым словам, колкий взгляд светлых глаз по-прежнему исследовал пациентку.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 284,
    text:
      `
        Едва пробившийся в палату дневной свет всё равно на миг ослепил. Венди увидела перед собой бесстрастное лицо незнакомца в белом халате. Отпустив девушку, он что-то записал в блокнот.
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    beforeBegin: () => { timer.stop() },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 285,
    text:
      `
        «Какой безучастный и равнодушный. Шэрон подбирает только таких сотрудников?»
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 286,
    text:
      `
        Игнорируя резь в глазах от тусклого дневного света, едва пробившегося в палату, Венди с ненавистью нашла глаза обидчика, но не сбросила его руку со своего лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    beforeBegin: () => { timer.stop() },
    message: 'Иногда в молчании больше силы, чем в кулаках.',
    stats: [{ story: EStoriesEn.PFT, value: 1, category: 'Person', id: 'Natan', silent: true }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 287,
    text:
      `
        «Что тебе от меня нужно?! Я похожа на лабораторную мышь, чтобы так себя вести?»
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 288,
    text:
      `
        Незнакомец в белом халате не стушевался и разорвал зрительный контакт не сразу, слегка скользнув пальцами по шее девушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 289,
    text:
      `
        «Он коснулся меня случайно. Ведь так?»
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Astonished.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 290,
    text:
      `
        — Добрый день, мисс. Вы потеряли сознание в душевой, ударились при падении головой и не приходили в себя. Медсестра отправилась за дежурным врачом — за мной. Доктор Натан Герш, приятно познакомиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    music: require('../../../../Media/Audio/PFT/Music/Hospital_Theme.mp3'),
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 291,
    text:
      `
        Сделав небольшую паузу и не дождавшись ответа на приветствие, психиатр продолжил.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 292,
    text:
      `
        — Моя первая смена в стенах вашего госпиталя и сразу такой интересный случай... С чем вы сюда поступили? Раньше обмороки случались? Головокружение или тошноту ощущаете?
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    speakerR: 'Натан ',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan_Arrogant.png'),
    stats: [
      { story: EStoriesEn.PFT, value: 0, category: 'Person', id: 'Natan' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 293,
    text:
      `
        Вместо ответа Венди вдруг вспомнила:
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 294,
    text:
      `
        «Боже! На мне ведь было только мокрое полотенце!»
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Astonished.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 295,
    text:
      `
        Пока доктор перечислял необходимые из-за травмы головы процедуры, которые следовало пройти, Венди скосила глаза на свою грудь, потом ниже. 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 296,
    text:
      `
        — Не волнуйтесь. Вы надёжно укрыты одеялом. Больше я ничего не увижу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 297,
    text:
      `
        «Больше?! Что он уже успел рассмотреть?»
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 298,
    text:
      `
        — Спасение жизни не терпит подобных пустяков. Так что я не обращаю на наготу никакого внимания.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan_Arrogant.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 299,
    text:
      `
        От чего-то Венди почувствовала досаду.
      `,
    buttons: [
      {
        text: '«Сейчас посмотрим»',
        goTo: 300,
        gift: true
      },
      {
        text: 'Проигнорировать',
        goTo: 311
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 300,
    text:
      `
        «Что я теряю? Хуже моего положения — только оказаться в тюремной лечебнице. Надеюсь, у Шэрон нет таких связей… Но этого сноба так и хочется проучить!»
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    music: require('../../../../Media/Audio/PFT/Music/Theme_Natan.mp3'),
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Smirk.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 301,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    cutScene: { video: require('../../../../Media/Images/PFT/Cutscenes/Naked_Wendy.mp4'), goTo: 302 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 302,
    text:
      `
        Не придавая значения горящим щекам, Венди медленно поднялась с постели и скинула одеяло на пол, не отрывая взгляда от невозмутимого врача.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    stats: [
      { story: EStoriesEn.PFT, value: +2, category: 'Person', id: 'Natan' }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 303,
    text:
      `
        Как назло, Герш смотрел исключительно в глаза. Убедившись, что пациентка больше не предпринимает никаких действий, он спокойно дописал заметки в блокнот.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 304,
    text:
      `
        Затем встал и наклонился за тонким больничным одеялом. Венди заглянула ему через плечо и успела прочитать из написанного только последнее: «нимфомания?»
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 305,
    text:
      `
        «Говоришь, тебе нечего терять? До этого одеяла у тебя было самоуважение…»
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Close_Body.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 306,
    text:
      `
        Тем временем доктор тоже говорил сам с собой:
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 307,
    text:
      `
        «Скучно было в больнице? Вот, пожалуйста. Не смей смотреть куда-то кроме глаз. Ты же профессионал. Возможно, эта девушка серьёзно больна и сама не понимает, что творит... Чёрт!»
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 308,
    text:
      `
        Венди чувствовала себя глупо, поэтому не заметила душевных терзаний доктора.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 309,
    text:
      `
        Между тем, Герш накинул на девушку одеяло и усадил обратно на кровать.
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 310,
    text:
      `
        Венди не сопротивлялась, но смотрела волком.
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 311,
    text:
      `
        «Нашёл чем хвастаться. Не смотрит он».
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Roll.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 312,
    text:
      `
        — Правда на вашем месте одну родинку я бы всё-таки показал онкологу. Но у нас его нет. Сами понимаете — не тот профиль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan_Arrogant.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 313,
    text:
      `
        «У меня совсем мало родинок. Только если он не про ту, что... Чуть ниже спины. Вот ведь!»
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 314,
    text:
      `
        — Обязательно. Как только выйду отсюда. Первым делом. Спасибо за ваш внимательный профессиональный взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 315,
    text:
      `
        Герш едва улыбнулся уголком рта, не отрываясь от бумаг в руках.
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 316,
    text:
      `
        — Это моя работа. Так как ваше самочувствие сейчас?
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan_Smirk.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 317,
    text:
      `
        — Столько вопросов о здоровье. Не нашли мою историю болезни, доктор?
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Smirk.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 318,
    text:
      `
        Ни один мускул не дрогнул на лице Натана Герша.
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 319,
    text:
      `
        Уверенная в собственной правоте девушка уцепилась за лихорадочные мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 320,
    text:
      `
        «Кажется, Герш здесь человек новый. Вдруг ещё не успел замарать руки в делах Шэрон».
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 321,
    text:
      `
        «Если начну вопить о незаконном заточении, то буду для него больной, как и все. Нужно обратить на себя внимание по-другому и доказать, почему мне здесь не место».
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 322,
    text:
      `
        — Лечите меня!
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 323,
    text:
      `
        Быстро погаснувшее недоумение доктора Герша сменилось ухмылкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 324,
    text:
      `
        — Я в больнице, верно? Но до сих пор меня никто не лечил. Только пичкали успокоительными. Посмотрите у главврача медицинскую карту, если она существует, конечно.
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 325,
    text:
      `
        — Неужели вас нужно лечить? Рассуждаете здраво.
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 326,
    text:
      `
        «Не могу понять: он издевается или нет? Пытается оценить мою реакцию?»
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 327,
    text:
      `
        С ядовитой улыбкой Венди ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 328,
    text:
      `
        — Какие ещё могут быть причины моего пребывания здесь? Возможно Шэрон Пирс смогла бы ответить на ваш вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Smirk.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 329,
    text:
      `
        — Считаете, главврач нарочно держит вас здесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan_Arrogant.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 330,
    text:
      `
        «Ну, вот и славно! Сейчас мы договоримся до того, что я точно помешанная, но, как и все психи считаю себя здоровой».
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 331,
    text:
      `
        Венди ничего не ответила и, пока не сделала ещё хуже, отвернулась к стене. Натана Герша даже позабавило это детское проявление обиды.
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 332,
    text:
      `
        — Кстати, мисс, обследование нужно пройти завтра. Возможно, причина ваших обмороков вне психической природы. Стоит исключить некоторые патологии. Теперь отдыхайте!
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    speakerR: 'Натан',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Natan.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 333,
    text:
      `
        Закрыв за собой дверь, доктор ушёл.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    simple: require('../../../../Media/Audio/PFT/Sounds/Close_Chamber.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 334,
    text:
      `
        «И что теперь? Разговор прошёл…»
      `,
    buttons: [
      {
        text: 'Терпимо',
        goTo: 335
      },
      {
        text: 'Безнадёжно',
        goTo: 338
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 335,
    text:
      `
        «Доктор симпатичный, такой завораживающий взгляд... И о чём думаешь, милая Венди, находясь в дурдоме? Правильно — какие глаза у доктора! Вот поэтому ты тут и оказалась!»
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Person', id: 'Natan' }],
    achievement: { story: EStoriesEn.PFT, name: 'Men' },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 336,
    text:
      `
        «Не школьница, а всё ещё привлекают властные мужчины с красивыми глазами…»
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 337,
    text:
      `
        «Но Герш ушёл тихо, пытаясь не потревожить... Может он хотя бы неплохой врач? Всё прошло не так плохо. Но как убедить его, что я нормальная?»
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 338,
    text:
      `
        «Разговор прошёл хуже некуда. Достучаться через предубеждение Герша будет трудно».
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 339,
    text:
      `
        «Как-то ведь этот доктор попал к Шэрон на работу. С ним нужно держать ухо востро. Но вдруг он сможет помочь?»
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Blanket.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 340,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 400 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 400,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 342 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 341,
    text:
      `
         Остаток дня Венди провела, вспоминая башню и тех, кого встретила в воображаемом городе Верганенхайте.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 342,
    text:
      `
        «Ночной любитель сказок наверняка захотел бы послушать мою историю».
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 343,
    text:
      `
        Мысли об этом пациенте, как о добром ребёнке, удивительным образом отгоняли мрак госпиталя, когда Венди смела размышлять о своём будущем.
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 344,
    text:
      `
        Бесцеремонная Дебора ворвалась в палату, видимо спеша по более интересным делам, и оставила скромный ужин.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 345,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.PFT, personId: 'Porridge_Choice', goTo: 346 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 346,
    text:
      `
        Милая сервировка для не слишком аппетитного комка каши, провалившегося в желудок, в который раз заставила девушку задуматься о человеке, пытающемся сделать жизнь больных чуть цивилизованнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 347,
    text:
      `
        «Бюджет явно ограничен. Лишь меня так кормят? Но повар на кухне определённо добряк».
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 348,
    text:
      `
        Но после нехитрой трапезы любитель сказок не пришёл. Не пришёл он и позже, когда в палатах на сестринском посту погасили свет.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 349,
    text:
      `
        Венди даже выглянула за дверь, услышав в коридоре, погрузившемся в болезненный покой, чьи-то шаги. Они разрывали робкую тишину и принадлежали хозяйке госпиталя.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    simple: require('../../../../Media/Audio/PFT/Sounds/Keys_Sheron.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 350,
    text:
      `
        «Злая Королева!»
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 351,
    text:
      `
        Прижавшись к холодной стене палаты, Венди успела скрыться от внимательной Шэрон Пирс, скользнувшей взглядом по коридору.
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Chamber_Night.jpg')
  },

  {
    id: 352,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 353 },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 353,
    text:
      `
        «Никого. Это хорошо».
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 354,
    text:
      `
        Шэрон почти зашла в ординаторскую, когда столкнулась на пороге с Гершем.
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 355,
    text:
      `
        Ещё не до конца пришедший в себя после возвращения в Штаты доктор, заступил на смену и расправлялся со множеством дел одновременно.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 356,
    text:
      `
        После стажировки в Европе в области экспериментальной психиатрии Герш окунулся в рутину обычной клиники для душевнобольных. На первый взгляд, здесь не было особенных случаев, которые требовали его новоприобретённых навыков.
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 357,
    text:
      `
        А вот стандартные клинические картины уже убивали всякую инициативу. И это в первый день. Правда, пациентка с обмороком оказалась любопытной.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 358,
    text:
      `
        — Шэрон... Не думал застать тебя на работе в такой час.
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speakerL: 'Натан',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Natan.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 359,
    text:
      `
        «Просто Шэрон?»
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Astonished.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 360,
    text:
      `
        — Милый Натан, мы же с тобой врачи. Кто, если не мы?
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 361,
    text:
      `
        Хоть Венди не слишком близко знала сестру Виктора, но точно помнила, что никогда раньше не слышала от неё столь медового голоса. От пациентки не ускользнуло нежное касание рыжеволосой женщины к руке Герша.
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 362,
    text:
      `
        Нахмурившись, доктор разглядывал её тонкие пальцы и, затем, медленно высвободился.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 363,
    text:
      `
        — Шэрон, сегодня был тяжёлый день.
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    speakerL: 'Натан',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Natan_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 364,
    text:
      `
        «С чего я решила, что он мне поможет? Похоже, они давние любовники. Наверняка Герш в курсе тёмных дел Шэрон. Какая же я дура.. Никому нельзя верить!»
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 365,
    text:
      `
        — Да, у меня здесь не курорт. И, Герш, раньше ты был ко мне... Нежнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Sharon_Flirt.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 366,
    text:
      `
        — Доктор Пирс, прежние отношения в прошлом. Всё это время мы практически не общались.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speakerL: 'Натан',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Natan_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 367,
    text:
      `
        И добавил как-то зло, глядя в лицо растерянному главврачу.
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 368,
    text:
      `
        — Если бы я хотел быть нежнее, ты бы знала это. Не унижайся, Шэрон.
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speakerL: 'Натан',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Natan_Alert.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 369,
    text:
      `
        Рыжеволосая женщина покачала головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 370,
    text:
      `
        — Жестоко, Герш.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 371,
    text:
      `
        — Раз уж ты здесь, обговорим сразу. Я бы хотел взять ещё одного пациента. А то так можно закопаться в обычных шизофрениках... Без практики, теория мертва — сама знаешь. Не хочу терять приобретённые навыки.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    speakerL: 'Натан',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Natan_Arrogant.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 372,
    text:
      `
        — Наша работа состоит из таких пациентов... Не слишком интересных для науки. И кого берёшь?
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 373,
    text:
      `
        — Пациентку из 307.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    speakerL: 'Натан',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Natan.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 374,
    text:
      `
        Больше обращаясь к самой себе, чем к Гершу, главврач едко спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 375,
    text:
      `
        — Что же в ней такого уникального?
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Sharon_Arrogant.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 376,
    text:
      `
        Удивлённый реакцией обычно выдержанной Шэрон, доктор Герш рассказал о внезапном обмороке и внешней адекватности пациентки. Умолчал лишь о её провокационном поведении.
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 377,
    text:
      `
        — Бери. Надоело с ней возиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Media/Images/PFT/Persons/Sharon_Arrogant.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 378,
    text:
      `
        Развернувшись на каблуках, главврач зашагала в сторону лестницы. Шёпотом, чтобы не беспокоить пациентов, Герш позвал:
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 379,
    text:
      `
        — Шэрон!
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    speakerL: 'Натан',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Natan.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 380,
    text:
      `
        Она развернулась. В лице руководительницы сверкнула эмоция, схожая с надеждой, которая тут же сменилась непроницаемой маской.
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 381,
    text:
      `
        — Ты сама лечила эту девушку? Медсестра, Дебора кажется... Не нашла её карту — мямлила только неразборчиво в ответ. Документы у тебя?
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    speakerL: 'Натан',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Natan_Arrogant.png'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 382,
    text:
      `
        Растерянное лицо Шэрон взбудоражило пациентку и, закрывшись в палате, Венди постаралась скрыть своё присутствие. Доктор Герш бросил беглый взгляд в сторону скрипнувшей двери.
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    simple: require('../../../../Media/Audio/PFT/Sounds/Door_Squeek.mp3'),
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  },

  {
    id: 383,
    text:
      `
        «Никакой карты нет! Ещё не всё потеряно! Я выйду отсюда!»
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('PFT', 'Глава 1', 'Часть 2', '0')
        }
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Media/Images/PFT/Persons/Wendy_Hospital.png'),
    achievement: { story: EStoriesEn.PFT, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Media/Images/PFT/Backgrounds/Hospital_Corridor_Night.jpg')
  }
])
