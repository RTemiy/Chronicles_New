import { saveEndProgress, scenarioManager, statsManager, timer, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'
import { askForInput } from '../../../../Components/TextInput/TextInput';
import { saveData } from '../../../../Functions/localStorageManager';

scenarioManager.addScenario({ storyName: EStoriesEn.UA, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Всепоглощающий голод стал ее верным спутником за последние две недели.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/UA/Fight_Theme.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 1,
    text:
      `
        «Теперь я понимаю, что значит выражение «тепличный цветок».
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 2,
    text:
      `
        Теплицей, конечно, дом Отреченных назвать не поворачивался язык. Но условия там с какой-то стороны были мягче, чем в неприветливых проулках города.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 3,
    text:
      `
        «Еда не появляется по расписанию. Кровать, не протекающий потолок, комфортная температура не берутся из ниоткуда. И... Деньги. Эти шелестящие бумажки добыть сложнее, чем пережить повторно любимое «повышение сложности» Доктора Лагарда».
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 4,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) >= 1
        },
        goTo: 5
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 6
      }
    ],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 5,
    text:
      `
        Она наклонилась, сдергивая с бездыханного тела часы. Прошлась по карманам, вынула мелочь. Из внутреннего отворота потрепанной кожаной куртки достала надтреснутую пластиковую карту.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 6,
    text:
      `
        Она наклонилась, сдергивая с бездыханного тела часы. Потревоженное плечо прострелило болью.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 7,
    text:
      `
        Организм пытался справиться с ранением самостоятельно, но скорость без дополнительной поддержки была слишком низкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 8,
    text:
      `
        Мотнув головой, Солдат прошлась по карманам, вынула мелочь. Из внутреннего отворота потрепанной кожаной куртки достала надтреснутую пластиковую карту.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 9,
    text:
      `
        Осмотрела одежду неудачливого насильника. Окинула взглядом лежащих неподалеку подельников. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    stats: [
      { story: EStoriesEn.UA, value: +30, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 10,
    text:
      `
        После критического взгляда на себя приняла решение переодеться.
      `,
    buttons: [
      {
        text: '',
        goTo: 600
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 600,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.UA, personId: 'UA_Eve', goTo: 11 },
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 11,
    text:
      `
        За две недели выживания на улицах EVE-13C запомнила три вещи: 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 12,
    text:
      `
        «Первое: где находится ломбард. Второе: избегать групп мужчин стоит, даже если ты уверена, что можешь завалить всех разом. И третье: лицо, подаренное Лагардом, причиняет проблемы. Значит, его надо скрывать».
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 13,
    text:
      `
        Солдат бралась за любую работу. Побиралась на помойках, идя на запах хоть и испорченной, но все же еды. Выполняла любое поручение, которое давали, не в силах оценить достойность оплаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 14,
    text:
      `
        «Теперь-то я знаю, что если в день платят меньше семи долларов, то это означает жить впроголодь».
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 15,
    text:
      `
        В новом мире свободы было слишком много лишений и трудностей. Внутри лаборатории их не готовили к тому, чтобы выживать на улицах. Их учили тому, чтобы просто выживать.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 16,
    text:
      `
        «Как оказалось, это разные вещи». 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 17,
    text:
      `
        Ее навыков было достаточно, чтобы не умереть в первый же день после «побега» из дома Отреченных. Но чтобы жить — нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 18,
    text:
      `
        «Никогда бы не подумала, что первый этап модификации будет приносить столько неудобств. Дискомфорта. И отвращения».
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 19,
    text:
      `
        Тот, с кого она минутой ранее сняла все ценное, был одним из многих, кто любил красивых одиноких девушек в темном переулке.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 20,
    text:
      `
        Схватить, придушить, раздеть и изнасиловать.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 21,
    text:
      `
        Действия EVE-13C в ответ были еще более простыми: сломать руку, расшибить голову и наслаждаться звуком хрустящих шейных позвонков.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 22,
    text:
      `
        «Первое и важное правило — никому не доверять».
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 23,
    text:
      `
        Но, к сожалению, этим кровью заученным правилом пришлось пренебречь.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 24,
    text:
      `
        Бабушка Юко, соглашайся, пока мы по-хорошему просим.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Черноволосый парень',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 25,
    text:
      `
        EVE-13C остановилась, как вкопанная, нахмурилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 26,
    text:
      `
        «Голос вроде молодой, но требует от пожилой женщины... такое?»
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 27,
    text:
      `
        Ей еще ни разу на улицах не встречался интерес к старушкам. Всегда оглядывались на нее, даже на людной улице, бабушек игнорировали.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 28,
    text:
      `
        Она прижалась к стене, скрываясь в тени, и выглянула из-за угла. Четверо молодых парней — несколько с разукрашенным синяками лицом — зажали женщину в переулке.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 29,
    text:
      `
        «Прижимает к себе пакет. Шла из магазина?»
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 30,
    text:
      `
        Малолетние нахалы, я у ваших матерей на крестинах была!
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: 'Пожилая женщина',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 31,
    text:
      `
        Бабушка Юко, ну так мы же по-семейному просим. Возьмите нас в долю, а? Ваш ресторанчик уже столько лет стоит, а все без защиты…
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: 'Черноволосый парень',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 32,
    text:
      `
        Наглая ухмылка расчертила лицо белобрысого парня.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 33,
    text:
      `
        Что-то вы свои желтые рты не раскрывали, когда Хиро с Коджи живы были. Ваши матери в вас все человеческое вложить забыли?! Мерзавцы!
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 34,
    text:
      `
        Ну зачем вы так ругаетесь? У нас терпение тоже не бесконечное, а муж ваш с сыном давно червей кормят. Кто же вас защитит после такой дерзости?
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Черноволосый парень',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 35,
    text:
      `
        Остальные парни — явно подпевалы — в унисон противно заржали. Окруженная ими женщина зло блеснула глазами и сильнее прижала к себе пакет. Будто он мог защитить.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 36,
    text:
      `
        EVE-13C не знала, что такое семейные узы. Не понимала, что значит расти у кого-то на глазах. Но чувствовала странное жгущее ощущение внутри. Незнакомое.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 37,
    text:
      `
        «Похоже на первый раз, когда Лагард дал выпить бета-кислоту. Желудок тоже пекло, но не так сильно».
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 38,
    text:
      `
        Девушка не знала названия этому чувству. Незнакомому, не испытанному доселе. Но я подскажу. Название ему — несправедливость.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 39,
    text:
      `
        Сухонькая крошечная старушка. Слабая, беспомощная, но с таким праведным гневом в глазах, огнем злости, трогала что-то у Солдата под самым сердцем.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 40,
    text:
      `
        И неожиданно ее осенило.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 41,
    text:
      `
        «Это я. Если бы не могла защититься, дать отпор и показать место подобным слизнякам».
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 42,
    text:
      `
        Учиться видеть себя со стороны было странно. И очень несвоевременно. Потому что спор продолжался.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 43,
    text:
      `
        Нам уже не смешно, бабушка Юко. Вы либо соглашаетесь, либо четыре недели мучаетесь от перелома ноги и все равно соглашаетесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Черноволосый парень',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 44,
    text:
      `
        Малолетние подонки! Понахватались всякой дряни на улицах и теперь ко мне лезете? Матери своей так же угрожаете?!
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 45,
    text:
      `
        Раздался громкий, тяжелый удар. Тот, кто нависал над старушкой, наотмашь ударил по забитому продуктами пакету. И попал бабушке по рукам.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    simple: require('../../../../Sounds/UA/Hit.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 46,
    text:
      `
        Бутылки и коробки вывалились со всплеском в лужу. Женщина коротко вскрикнула, пошатнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 47,
    text:
      `
        Солдат идентифицировала четыре новые цели.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 48,
    text:
      `
        «Тому, кто ее ударил, сломаю обе руки. Остальным — в крошку распылю челюсть и вырву язык. Может, еще переломать ноги? Да, тогда и ноги».
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    music: require('../../../../Sounds/UA/Fight_Theme.mp3'),
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 49,
    text:
      `
        Подобная горячая мстительность ей не была знакома. Она кипела под горлом, заставляя сердце суматошно биться, разгоняя кровь.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 50,
    text:
      `
        Их было четверо. Подростки, может быть, только-только достигшие совершеннолетия.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 51,
    text:
      `
        EVE-13C замерла, изучая обстановку уже с иной целью.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 52,
    text:
      `
        «Цель №1 – рост сто семьдесят, максимум сто семьдесят пять; стоит в отдалении от основной группы, метров десять. Вес около семидесяти килограмм. Физически слабый, в группе занимает позицию подпевалы и наблюдателя. Приоритет опасности – 3».
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Target_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 53,
    text:
      `
        «Цель №2 – рост сто восемьдесят. Вес примерно семьдесят пять. Подстрекатель, держится на шаг позади от лидера. Физические данные средние. Приоритет опасности – 2».
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Target_2.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 54,
    text:
      `
        «Цель №3 – рост сто шестьдесят пять, вес от пятидесяти пяти до шестидесяти килограмм. Стоит в стороне, почти у самого входа в подворотне – сигнальщик. Непосредственного участия не принимает. Приоритет опасности – 4».
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Target_3.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 55,
    text:
      `
        «Цель №4. Главарь. Рост сто восемьдесят, вес семьдесят пять или восемьдесят килограмм. Выпячивает грудь, явно гордится своим положением. Допускаю знание боя. Приоритет опасности – 1».
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 56,
    text:
      `
        Кого обезвредить первым?
      `,
    buttons: [
      {
        text: 'Начать с Цели №1 (Наблюдатель)',
        goTo: 57
      },
      {
        text: 'Начать с Цели №2 (Подстрекатель)',
        goTo: 60
      },
      {
        text: 'Начать с Цели №3 (Сигнальщик)',
        goTo: 70
      },
      {
        text: 'Начать с Цели №4 (Главарь)',
        goTo: 84
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 57,
    text:
      `
        EVE-13C вылетела из тени пригнувшись. Тараном внеслась в корпус Цели №1, сделав скидку на их разницу в весе. Парень, не ожидая удара в бок, неловко всплеснул руками и, вскрикнув, завалился в лужу.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    stats: [{ story: EStoriesEn.UA, value: 1, category: 'Choice', id: 'ChooseTarget' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 58,
    text:
      `
        «Контрольный в голову, чтоб не мешался».
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 59,
    text:
      `
        Окружение стонущего парнишки уже успело среагировать. Двинулось в сторону на вид хрупкого и немощного Солдата. Пока девушка тремя ударами каблука по голове выключала их знакомого.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 60,
    text:
      `
        >«Слишком близко стоит к Главарю. Который, в свою очередь, находится почти вплотную к старушке. Действовать надо быстро».
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    stats: [{ story: EStoriesEn.UA, value: 2, category: 'Choice', id: 'ChooseTarget' }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 61,
    text:
      `
        Чтобы завалить такого кабана, EVE-13C пришлось взять небольшой разбег.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 62,
    text:
      `
        «Такого одним хуком не вырубить. Надо уронить. Хотя…»
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 63,
    text:
      `
        Цель №2 удачно повернула голову. Оголила часть кожи за воротником с плотными кольцами бинта неизвестного происхождения.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 64,
    text:
      `
        «Что бы там ни было, точно будет больно».
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 65,
    text:
      `
        Кулаки у Солдата были острыми, и она это знала, умело пользуясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 66,
    text:
      `
        Первым ударом, ускоренным достаточной дистанцией, она дала хороший толчок в шею. Высокий парень заверещал, согнулся и схватился за бинт, даже не успев рассмотреть ударившего.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 67,
    text:
      `
        Под прижатыми пальцами ткань алела кровью. Костяшки пальцев EVE-13C болели, словно встретившись с чем-то твердым.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 68,
    text:
      `
        «Имплант. Сломала».
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 69,
    text:
      `
        С довольной ухмылкой Солдат повернулась к остальным, в одну секунду забывшим о старушке.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 70,
    text:
      `
        «Весовая категория у нас одна, проблем возникнуть не должно».
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    stats: [{ story: EStoriesEn.UA, value: 3, category: 'Choice', id: 'ChooseTarget' }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 71,
    text:
      `
        На руку играло то, что Цель стояла в отдалении. Проблем добавляла его нервозность и невозможность подкрасться со спины — мальчишка беспрестанно оборачивался.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 72,
    text:
      `
        «Обезвредить его стоит быстро, без лишнего шума».
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 73,
    text:
      `
        Солдат двинулась вдоль стен, сокрытая тенью, избегая даже блика на луже, пока подбиралась как можно близко к щуплой фигуре.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 74,
    text:
      `
        Способ обезвреживания она выбрала максимально простой. Придушить, пройтись по болевым точкам или просто хорошенько ударить, сразу же отправив в нокаут — самое главное в процессе прикрыть Цели рот.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 75,
    text:
      `
        «Сейчас».
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 76,
    text:
      `
        EVE-13C выпрыгнула из тени. Мальчишка успел обернуться на звук, но времени на дальнейшую реакцию ему не хватило.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 77,
    text:
      `
        Два пальца зажали дергающийся в крике кадык; ладонь обхватила рот, не давая крикам вырваться на волю.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 78,
    text:
      `
        Минута терпения, и обмякшее тело было заботливо уложено в лужу, избегая лишних брызг и всплесков.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 79,
    text:
      `
        «Следующий».
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 80,
    text:
      `
        Она едва шагнула вперед, как из-за спины раздались хрипы сигнальщика.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 81,
    text:
      `
        «Симулянт».
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 82,
    text:
      `
        Цель проявила все свои актерские навыки под эгидой инстинкта выживания. И сыграла перед нападающей в потерю сознания от удушья.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 83,
    text:
      `
        Доделывать работу было поздно. Как и проводить исправление ошибок — на странные звуки отреагировала остальная шайка, обернувшись.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 84,
    text:
      `
        Опасное решение. Но не менее интересное.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    stats: [{ story: EStoriesEn.UA, value: 4, category: 'Choice', id: 'ChooseTarget' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 85,
    text:
      `
        «Быстро не вырубить. Прямое столкновение со стопроцентной вероятностью будет означать затяжную драку».
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 86,
    text:
      `
        «Успею нанести два, максимум три удара, прежде чем присоединятся остальные».
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 87,
    text:
      `
        Солдат замерла в раздумьях, оценке выбранной цели более внимательно.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 88,
    text:
      `
        Как стоит на ногах? Что интуитивно прикрывает? Может быть, какие-то внешние физические повреждения…
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 89,
    text:
      `
        «Ничего. Единственное, судя по форме носа, когда-то был сломан со смещением».
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 90,
    text:
      `
        Знание биологии давало подсказку — кости, однажды сломанные, хорошо ломаются в том же месте. Но эту гипотезу предстояло подтвердить или опровергнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 91,
    text:
      `
        «Используем окружение по-максимуму».
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 92,
    text:
      `
        Хороший разбег в этой ситуации будет залогом успеха.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 93,
    text:
      `
        «Цель №2 выглядит, как хорошая ступенька. До носа Главаря надо еще допрыгнуть».
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 94,
    text:
      `
        Солдат никогда не считала что-либо невыполнимой задачей. Так думать было запрещено.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 95,
    text:
      `
        Именно поэтому разбег, небольшая распрыжка и, оттолкнувшись от предплечья Цели №2, отправила его лицом в сырой асфальт.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 96,
    text:
      `
        Главарь отреагировал на крик поворотом головы, тут же получив в нос с колена. Глухой удар, влажный хруст, Солдат, свалившаяся на парня сверху, мягко приземляется на землю.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 97,
    text:
      `
        А-а-а! Тварь!
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: 'Главарь',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 98,
    text:
      `
        Сдавленный крик из-под прижатых к лицу ладоней, оттуда же бежит кровь.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 99,
    text:
      `
        «Больно, но недостаточно для потери сознания».
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 100,
    text:
      `
        «Оценка обстановки — кольцевое окружение, старушка оттеснена к стене».
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 101,
    text:
      `
        Знание основ боя у Цели подтвердилось. Главарь провалялся секунды три, прежде чем снова оказался на ногах.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    achievement: { story: EStoriesEn.UA, name: 'Brave' },
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 102,
    text:
      `
        Слышь? Ты улицы перепутала? Вали отсюда, пока не разобрали!
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Главарь',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 103,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 1
        },
        goTo: 106
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 2
        },
        goTo: 106
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 3
        },
        goTo: 106
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 4
        },
        goTo: 104
      }
    ],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 104,
    text:
      `
        Главарь гнусавил, погано ухмылялся, слизывая вытекающую с носа кровь.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 105,
    text:
      `
        Удар у тебя хороший. Жаль, мозгов маловато. Одна на четверых? Ну, попробуй. Потом только громко не стони.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Главарь',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 106,
    text:
      `
        Лезть на моих парней не самая лучшая идея. Потому что иначе придется иметь дело со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Главарь',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 107,
    text:
      `
        Милочка, куда же ты…
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 108,
    text:
      `
        Женщина сдавленно простонала и тут же переменилась в лице. Взглядом прожигая спину юнцов, прошипела:
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 109,
    text:
      `
        Не трожьте девочку, обалдуи! Повырываю вам все, что ненужное болтается! И матерям вашим на порог положу, ироды!
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 110,
    text:
      `
        Бабушка Юко, помолчите. С вами мы разберемся позже.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Главарь',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 111,
    text:
      `
        Главарь обернулся, в ответ окатывая старушку презрением.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 112,
    text:
      `
        «Бессмысленная трата времени».
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 113,
    text:
      `
        Она едва сдержалась, чтобы не закатить глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 114,
    text:
      `
        Мне кажется, вам пора. Считаю до трех и жду, пока вы не исчезнете отсюда. Нет — ваши проблемы.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 115,
    text:
      `
        Откуда же ты такая наглая вылезла? Мордашку не боишься попортить?
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Главарь',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 116,
    text:
      `
        Кольцо вокруг EVE-13C медленно сжималось. Она почти чувствовала дыхание себе в спину. Так предсказуемо.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 117,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 1
        },
        goTo: 119
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 2
        },
        goTo: 124
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 3
        },
        goTo: 127
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 4
        },
        goTo: 118
      }
    ],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 118,
    text:
      `
        Твою уже попортила. Если мало, могу помочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 119,
    text:
      `
        В том месте, откуда я пришла, ты бы не протянул и пары секунд.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 120,
    text:
      `
        Дай сначала я.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Images/UA/Persons/Target_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 121,
    text:
      `
        Цель №1 с отпечатком ее подошвы на лице, пошатываясь, сравнялся с Главарем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 122,
    text:
      `
        Мало было? В четвертый раз познакомить со своим каблуком?
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 123,
    text:
      `
        Под каблуком у меня сейчас выть будешь ты, шваль.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Images/UA/Persons/Target_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 124,
    text:
      `
        В том месте, откуда я пришла, ты бы не протянул и пары секунд.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 125,
    text:
      `
        Эта больная сломала мне имплант! Я за него полторы тыщи отвалил! Пусть возмещает. Не деньгами так… телом.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Цель №2',
    imageFront: require('../../../../Images/UA/Persons/Target_2.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 126,
    text:
      `
        От этой ухмылки Солдат с утроенной силой захотела почесать кулаки об его оплывшее лицо. В таком удовольствии себе отказать не получалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 127,
    text:
      `
        В том месте, откуда я пришла, ты бы не протянул и пары секунд.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 128,
    text:
      `
        Братан! Она меня придушить пыталась! Смотри!
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Цель №3',
    imageFront: require('../../../../Images/UA/Persons/Target_3.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 129,
    text:
      `
        Заплаканный? Серьезно?
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 130,
    text:
      `
        Сигнальщик, и вправду перемазанный весь соплями, подбежал к Главарю, показывая красные следы на шее.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 131,
    text:
      `
        «Жалуется как… ребенок».
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 132,
    text:
      `
        Потому что ты долбанная тряпка!
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Главарь',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 133,
    text:
      `
        Тяжелая затрещина заставила сигнальщика опустить голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 134,
    text:
      `
        Кулак отточенным движением прилетел самому ближайшему в скулу. Зазвучал хруст, за ним сдавленный скулеж парня, завалившегося назад от удара в грудь.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 135,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 1
        },
        goTo: 136
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 2
        },
        goTo: 137
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 3
        },
        goTo: 137
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ChooseTarget' }) === 4
        },
        goTo: 137
      }
    ],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 136,
    text:
      `
        В отместку Солдат носком ботинка ударила по перебинтованной шее. Чтобы имплант точно превратился в труху.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 137,
    text:
      `
        Это была Цель №2. С выбитыми зубами, потому что Солдат сдерживаться не собиралась, проходясь тяжелой подошвой ботинка по челюсти.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 138,
    text:
      `
        Остальные едва успели отреагировать, как EVE-13C состыковала подошву ботинка с коленями Цели №1. Ноги выгнуло в неправильную сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 139,
    text:
      `
        «Какой смысл от их окружения?»
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 140,
    text:
      `
        Этот самый смысл обрел обличие металлического прута, просвистевшего над головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 141,
    text:
      `
        Осмелевшая Цель №3 обзавелась вывихом кисти.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 142,
    text:
      `
        Больно! Очень больно!
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Цель №3',
    imageFront: require('../../../../Images/UA/Persons/Target_3.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 143,
    text:
      `
        Так и не высохшие слезы по проторенным дорожкам потекли вновь, пока их хозяин валялся, скорчившись, в луже.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 144,
    text:
      `
        «Еще одного можно пока что оставить без внимания».
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 145,
    text:
      `
        Не на тех полезла, идиотка.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Главарь',
    imageFront: require('../../../../Images/UA/Persons/Target_4.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 146,
    text:
      `
        Моральный дух Главаря не сломился видом сошек, пускающих в лужи пузыри. Он замахнулся с оттяжкой, явно планируя вырубить EVE-13C одним ударом.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 147,
    text:
      `
        Не получилось. Движение воздуха почти хлопком ударило ей под лопатки, заставляя инстинкты реагировать.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 148,
    text:
      `
        Стоит молчать, когда ты наносишь удар со спины.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 149,
    text:
      `
        Солдат не рассчитала силы, всем весом влетая ногами вперед ему в голень. Парень качнулся, будто гибкая ветка, но в итоге все равно переломился.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 150,
    text:
      `
        Осколок окровавленной кости вышел из-под кожи на добрые три пальца. Крик, стон, звук грузно упавшего тела.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 151,
    text:
      `
        Солдат кровожадно ухмыльнулась, упиваясь содрогающимися и пресмыкающимися в грязной луже червями.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 152,
    text:
      `
        Не переставая растягивать губы, она повернулась к Цели №3. Самому щуплому, хилому и явно перепуганному до смерти. Его лицо перекроила гримаса ужаса.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 153,
    text:
      `
        Что тебе сломать? Шею?
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 154,
    text:
      `
        Она шагнула вперед — он с мышиными писком попятился назад.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 155,
    text:
      `
        «Головой об колено. Да, будет хорошо».
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 156,
    text:
      `
        Старушка, до этого молчавшая и благоразумно прижимавшаяся к стене, с усилием схватила Солдата за плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 157,
    text:
      `
        Стой, деточка. Не надо.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 158,
    text:
      `
        EVE-13C резко дернулась, уходя в сторону. Испещренная морщинами ладонь слетела с плеча.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 159,
    text:
      `
        С-с-с-спасибо, Бабушка Юко. Я больше так не буду, обещаю!
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Цель №3',
    imageFront: require('../../../../Images/UA/Persons/Target_3.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 160,
    text:
      `
        Женщина строго нахмурила брови и огрызнулась:
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 161,
    text:
      `
        Чтобы я тебя, и этих идиотов в том числе, в радиусе километра от моего ресторана не видела!
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    music: require('../../../../Sounds/UA/Alert_Theme.mp3'),
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 162,
    text:
      `
        EVE-13C с интересом наблюдала за старушкой, ногой прижимая к земле пытавшегося отползти Главаря.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 163,
    text:
      `
        «Пощада? Для него?»
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 164,
    text:
      `
        Она никогда раньше не оставляла нападавших в живых. Солдат, задумавшись, опустила взгляд. Сильнее надавила ногой на грудину, чтобы извивающаяся под подошвой цель была потише. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 165,
    text:
      `
        Бабушка Юко поцокала языком и покачала головой, рассматривая распластанные, но еще дышащие тела.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 166,
    text:
      `
        Разум Солдата настойчиво талдычил:
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 167,
    text:
      `
        «Недовольна работой. Цели еще живы».
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 168,
    text:
      `
        Отточенным движением девушка вынула из-за пояса заточку. Зачистка пройдет быстро — всего четыре надреза, и будет четыре трупа.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 169,
    text:
      `
        Стоило ей прижать лезвие к горлу, Главарь завыл. Отцепил пальцы от голени EVE-13C, схватился за запястье, отодвигая нож.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 170,
    text:
      `
        Да что же ты делаешь, милочка! Стой! Не убивай этих идиотов!
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 171,
    text:
      `
        Старушка кинулась к ней, перехватила поперек груди, пытаясь оттащить. Снова реакцией тела EVE-13C было желание избежать касания, которое всегда означало удар. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 172,
    text:
      `
        Она откинула бабушку от себя, отчего та упала навзничь.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 173,
    text:
      `
        Вытягивая вперед ладонь, останавливая повернувшуюся к ней с ножом девушку, женщина попросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 174,
    text:
      `
        Стой, подожди, зверек ты дикий. Не трогаю больше, не трогаю. Просто не убивай этих балбесов. С них хватит такого урока.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 175,
    text:
      `
        Солдат еще сильнее нахмурилась. Обернулась, глядя вслед уползающим целям.
      `,
    buttons: [
      {
        text: 'Подчиниться приказу',
        goTo: 176
      },
      {
        text: 'Ослушаться',
        goTo: 184
      }],
    message: 'Один из важных статов для истории: Человечность. В зависимости от его количества героиня будет либо принимать моральные нормы мира за пределами дома Отреченных, либо так и останется верна идеям Солдата',
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 176,
    text:
      `
        «Нельзя».
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Effect', id: 'Humanity' },
      { story: EStoriesEn.UA, value: +1, category: 'Choice', id: 'ObeyCommand' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 177,
    text:
      `
        Она себя одернула.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 178,
    text:
      `
        «Приказ не убивать».
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 179,
    text:
      `
        Но инстинкт и бьющийся в крови адреналин требовали догнать.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 180,
    text:
      `
        «Даже со сломанными костями они представляют угрозу».
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 181,
    text:
      `
        Вот так.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 182,
    text:
      `
        Женщина с кряхтением поднялась и отряхнулась. Наклонилась, собирая выпавшие продукты. Руки у нее при этом дрожали.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 183,
    text:
      `
        Спасибо тебе, милочка, за помощь. Спасла меня от этих неблагодарных.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 184,
    text:
      `
        «Уберу Главаря, и шайка развалится. Следовательно, больше проблем причинять не будут».
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UA, value: -1, category: 'Effect', id: 'Humanity' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 185,
    text:
      `
        По мнению Солдата, это было компромиссом.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 186,
    text:
      `
        «Работа должна быть незаметной. Иначе она испугается».
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 187,
    text:
      `
        Вот так.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 188,
    text:
      `
        Женщина с кряхтением поднялась и отряхнулась. Наклонилась, собирая выпавшие продукты. Руки у нее при этом дрожали.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 189,
    text:
      `
        Спасибо тебе, милочка, за помощь. Спасла меня от этих неблагодарных.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 190,
    text:
      `
        Пожилая женщина двинулась вон из принесшей столько проблем подворотни. Не оборачиваясь, что играло EVE-13C на руку.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 191,
    text:
      `
        Главарь, увидев, что та самая «наглая» девчонка уходит, начал задом уползать, не в силах двинуть сломанной ногой.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 192,
    text:
      `
        Быстрый взгляд на спину Юко, что-то самозабвенно бормочущей, и такой же назад.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 193,
    text:
      `
        «Сейчас».
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 194,
    text:
      `
        Цель №4 выпучила глаза, заметив резкое движение девичьей руки, и завалилась назад, застыв с мертвой гримасой удивления на лице. И торчащей изо лба рукояткой.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 195,
    text:
      `
        «Нож жалко».
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UA, value: -1, category: 'Item', id: 'Neck' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Street.jpg')
  },

  {
    id: 196,
    text:
      `
        «Все еще не понимаю, почему их нельзя убить».
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 197,
    text:
      `
        Потому что они не способны причинить мне много неудобств. И угрозы их про избиение — пустые слова. Молоко еще на губах не обсохло, решили банду сколотить, видишь ли.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 198,
    text:
      `
        Видимо, Солдат произнесла мысль вслух. Либо старушка умела читать мысли.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 199,
    text:
      `
        Ты голодная? Есть хочешь? Пойдем, я тебя накормлю.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 200,
    text:
      `
        Солдат непонимающе склонила голову к плечу. Бросила взгляд на бледную старушку, на ее дрожащие руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 201,
    text:
      `
        Вы меня боитесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 202,
    text:
      `
        Отчего мне тебя бояться? Поваляла ты меня немножко, признаю. Сама виновата, на старости лет решила лезть в драку.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 203,
    text:
      `
        Ты меня спасла. А я уже не в том возрасте, чтобы спокойно подобное перенести. Сердце пошаливает.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 204,
    text:
      `
        Мягко улыбнувшись, женщина пошла дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 205,
    text:
      `
        Позволь одинокой старушке отблагодарить тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 206,
    text:
      `
        Тебе есть куда идти? Где ты живешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 207,
    text:
      `
        EVE-13C покачала головой. Спала она либо на крышах, либо завернувшись в рванину у помойки.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 208,
    text:
      `
        Вижу. Тебе бы помыться. И одежду постирать. Пойдем, пока будешь мыться, я еду приготовлю.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 209,
    text:
      `
        Осторожность требовала развернуться и уйти прочь. Но голод толкал вперед, сам переставлял ноги, привязав Солдата хвостиком к пожилой женщине.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 210,
    text:
      `
        И девушка, перестав сопротивляться, пошла.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 211,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) >= 1
        },
        goTo: 213
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 212
      }
    ],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 212,
    text:
      `
        Потирая плечо, снова разболевшееся, как только запал адреналина прошел.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 213,
    text:
      `
        В кухне ресторана было темно и зубодробительно пахло едой.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    music: require('../../../../Sounds/UA/Calm_Theme.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 214,
    text:
      `
        Солдат сжала челюсти, пытаясь подавить спазм пустого желудка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 215,
    text:
      `
        Прости за беспорядок. Работников всех распугали, и я как белка в колесе. Все на мне — и зал, и кухня, и уборка.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 216,
    text:
      `
        А возраст уже не позволяет со всем управляться.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 217,
    text:
      `
        Она щелкнула светом, скромно улыбнувшись: они стояли на не самой чистой кухне, не самого большого ресторана.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 218,
    text:
      `
        EVE-13C молча окидывала взглядом металлические поверхности, миски, подносы. Всеми силами искала доступ к еде, даже покоящейся в помойном ведре.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 219,
    text:
      `
        Старушка зашуршала пакетами. Солдат гипнотизировала яблоки и полоски колбасы в вакуумной упаковке.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 220,
    text:
      `
        Голод сжимал горло все сильнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 221,
    text:
      `
        Ты чего там застыла, вороненок?
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 222,
    text:
      `
        Видимо, обращение само вклинилось в предложение. Бабушка Юко осеклась.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 223,
    text:
      `
        Прости старую дуру, не хотела тебя обидеть. Как тебя, говоришь, зовут?
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 224,
    text:
      `
        Женщина протягивала простой сэндвич. Словно задабривая голодную, оттого и злую собаку, предложила еще банку газировки.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 225,
    text:
      `
        EVE-13C почти вырвала еду из ее рук. Одним движением затолкала за щеку сэндвич. Начала давиться, глотая, но не прожевывая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageFront: require('../../../../Images/UA/Objects/Sandwitch.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 226,
    text:
      `
        Щелчок жестяной банки — все содержимое потекло в рот, мимо по рукам, на грудь.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageFront: require('../../../../Images/UA/Objects/Can.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 227,
    text:
      `
        Старушка замерла с неподдельным шоком на лице. Она не дышала до тех пор, пока Солдат удовлетворенно не прикрыла глаза, наконец все проглотив.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 228,
    text:
      `
         «Хотя бы живот болеть перестанет. Ненадолго, но еще день, минимум, протяну».
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 229,
    text:
      `
        Маленький сэндвич жалким бумажным корабликом болтался в ее желудке на волнах кисло-сладкой газировки.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 230,
    text:
      `
        Что ж, ты явно очень голодная.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 231,
    text:
      `
        Пока я думаю, чем тебя еще накормить, может, познакомимся? Меня зовут Юко Ямамото. Но все меня зовут бабушкой Юко.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 232,
    text:
      `
        Ты тоже можешь так ко мне обращаться. Тебя мне как звать?
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 233,
    text:
      `
        Солдат, во второй раз все-таки услышав вопрос, встала в стойку смирно.
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 234,
    text:
      `
        Поднятый подбородок, прямая спина, напряженные руки по швам и громкие, чеканные слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 235,
    text:
      `
        Модель: Солдат, группа: тринадцать, позывной: EVE, класс: химическая неуязвимость.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 236,
    text:
      `
        Кажется, пожилая женщина начала понимать, кого привела себе в дом. Простые девушки четырех здоровых лбов обычно не избивают.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 237,
    text:
      `
        EVE… Как еще раз?
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 238,
    text:
      `
        Мой упрощенный позывной: EVE-13C.
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 239,
    text:
      `
        И откуда же ты такая?
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 240,
    text:
      `
        Солдат замялась под прямым взглядом. Эту информацию знать никому нельзя.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 241,
    text:
      `
        «Ликвидировать? Чтобы не задавала лишних вопросов? А зачем я тогда ее спасала?»
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 242,
    text:
      `
        «Или все-таки с уничтожением лаборатории и Дома Отреченных исчезает приказ о неразглашении?»
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 243,
    text:
      `
        «О таком на уроках безопасности не говорили».
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 244,
    text:
      `
        Муки выбора грызли не приученную к самостоятельному принятию решений девушку.  Она вязла и буксовала в плотном сплетении мыслей.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 245,
    text:
      `
        Ты явно голодная. Без крова и нормального жилья. Тебе некуда идти. У тебя даже… нет имени.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 246,
    text:
      `
        Солдат продолжала молчать, не в силах опрокинуть чашу весов в ту или иную сторону. Шестнадцать лет муштры так просто попираться не хотели.
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 247,
    text:
      `
        Я смогу приютить тебя. Покажу, где душ, кровать. Дам работу и еду. Просто…
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 248,
    text:
      `
        Расскажи мне, откуда ты. А я расскажу тебе про себя. Чтобы мы могли доверять друг другу, живя под одной крышей, EVE…
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 249,
    text:
      `
        Бабушка Юко каждый раз запиналась на ее позывном. Солдат же, услышав о душе и кровати, откинула все сомнения о неразглашении.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 250,
    text:
      `
        «Хозяин платит за защиту кровом, едой и деньгами. Солдат в ответ отдает собственное тело и навыки для охраны».
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 251,
    text:
      `
        Как прикажете.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 252,
    text:
      `
        Нет-нет. Стой. Никаких приказов и подобных военных отношений. Ты помогла мне, я в ответ помогаю тебе. Это называется доброта.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 253,
    text:
      `
        Из-за доброты вы согласны стать моим Хозяином? Не из-за моих навыков? Моего качества как Солдата?
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 254,
    text:
      `
        Хозяин? Ками-сама, что же это такое… 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    message: 'Ками-сама — уважительное обращение к богу.',
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 255,
    text:
      `
        Старушка пораженно застыла. Не знала, как реагировать, что говорить и думать.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 256,
    text:
      `
        Давай ты приведешь себя в порядок и потом мы обязательно поговорим. Про Хозяина, про то, откуда ты.
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 257,
    text:
      `
        И над твоим именем подумаем. Хорошо?
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 258,
    text:
      `
        Солдат кивнула, послушно следуя за женщиной по лестнице наверх.
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 259,
    text:
      `
        «Кажется, ей не привычны взаимоотношения Хозяин — Солдат».
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 260,
    text:
      `
        Что казалось странным. Хотя весь мир за пределами Дома Отреченных был неправильным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 261,
    text:
      `
        «Имя. Придумать имя. Чтобы что? Чем мой позывной так плох?».
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speaker: 'EVE-13C',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.UA, 'UA_Eve') },
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 262,
    text:
      `
        Из душа выходила в мрачной задумчивости. Хмурила брови, кусала губы.
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 263,
    text:
      `
        Раздрай в душе грыз ее солнечное сплетение, доставлял дискомфорт.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 264,
    text:
      `
        Зачем мне имя?
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 265,
    text:
      `
        Как зачем?
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 266,
    text:
      `
        Бабушка Юко почти села мимо стула. К вопросу на такую очевидную тему она не была готова.
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 267,
    text:
      `
        Ну, имя это часть тебя. На моей родине очень долгое время существует поверье: как ребенка назовешь, такая судьба и будет его ждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 268,
    text:
      `
        Именно поэтому к выбору имени относятся очень серьезно.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 269,
    text:
      `
        И какое выбрали вам?
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 270,
    text:
      `
        Женщина молча пододвинула тарелки с едой, уже более спокойно относясь к скорости исчезновения содержимого блюд.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 271,
    text:
      `
        Юко состоит из двух иероглифов. «Ю» и «Ко». В переводе означает блестящий ребенок.
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 272,
    text:
      `
        И вы?...
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 273,
    text:
      `
        Насколько я блестящая?
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 274,
    text:
      `
        Женщина по доброму усмехнулась, пряча смешинки в глазах.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 275,
    text:
      `
        Я в одиночку уехала из маленького городка на окраине Японии. Без знания языка приехала сюда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 276,
    text:
      `
        Открыла свой ресторан, который вот уже двадцать лет стоит и все никак не разорится на зависть конкурентам. Нашла прелестного мужа, родила и воспитала отличного сына...
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UA, value: 0, category: 'Person', id: 'Yuko' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 277,
    text:
      `
        Бабушка Юко серела и старела на глазах. Оплывала на стуле, морщины вытягивали кожу и тянули лицо вниз.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 278,
    text:
      `
        Глаза побелели от тяжелых воспоминаний.
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 279,
    text:
      `
        А где они сейчас?
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 280,
    text:
      `
        EVE-13C не понимала таких метаморфоз. С трудом читала незнакомые эмоции с лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 281,
    text:
      `
        Не знала, что такое терять близких, и как отражается скорбь в глазах.
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 282,
    text:
      `
        Умерли. Погибли…
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 283,
    text:
      `
        Солдат сморщилась, вспомнив слова Главаря.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 284,
    text:
      `
        «Кормят червей».
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 285,
    text:
      `
        Ну, не будем о грустном.
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 286,
    text:
      `
        Годы, наползшие на лицо, шелухой опали со встряхнувшейся женщины.
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 287,
    text:
      `
        Давай подумаем о твоем имени. Поверь, и мне, и тебе, будет намного проще. Я как-то не привыкла к цифрам в имени, да и все остальные тоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 288,
    text:
      `
        Но я не знаю значений имен.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 289,
    text:
      `
        Рассказ бабушки Юко впечатлил Солдата. Детская вера в серьезность выбора засела в голове, не желая уходить.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 290,
    text:
      `
        Здесь это не так важно. Ты можешь выбрать любое звучание, которое тебе нравится. Из любого языка или культуры.
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 291,
    text:
      `
        «Знала бы я ещё какие-то имена, кроме позывных Солдат и имен ученых и врачей...»
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 292,
    text:
      `
        Твой, хм, позывной тоже звучит почти как имя. Если отбросить лишние цифры и буквы, то получится Ив.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 293,
    text:
      `
        Как меня будут звать?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          askForInput('Как меня будут звать? ', 'Ив', (value) => {
            scenarioManager.beginScene(294)
            saveData([EStoriesEn.UA, 'Name'], [value])
          })
        }
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 294,
    text:
      `
        Прелестное имя.
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 295,
    text:
      `
        Улыбка старушки затронула что-то в теле Солдата.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 296,
    text:
      `
        «Я больна? Мне нужно обратиться в медблок?»
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 297,
    text:
      `
        Осознание реальности тут же пристукнуло по темечку.<p>«Медблока нет, как и возможности получить квалифицированную помощь».
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 298,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) >= 1
        },
        goTo: 300
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 299
      }
    ],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 299,
    text:
      `
        Железные скобы на плече саднили и ныли с удвоенной силой. Кажется, металл степлерных скоб, не предназначенный для подобных махинаций, начал ржаветь.
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 300,
    text:
      `
        Но все-таки, что это за странное распирающее чувство в груди?
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 301,
    text:
      `
        Солдат нахмурилась. Пошевелила губами, пытаясь скопировать изгиб на морщинистом лице.
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 302,
    text:
      `
        Получалось странно и, судя по реакции старушки, пугающе.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 303,
    text:
      `
        У тебя живот заболел? Конечно, столько еды для такой маленькой тебя, я и не подумала…
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 304,
    text:
      `
        Солдат переубедила засуетившуюся женщину простым мотанием головы. Странное распирающее чувство пропало.
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 305,
    text:
      `
        Ты готова рассказать мне? О том, откуда ты, кто ты... Как оказалась на улице?
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speaker: 'Бабушка Юко ',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 306,
    text:
      `
        На дом Отреченных было совершено нападение. В результате сопротивления нам удалось сбежать. Так я оказалась в Нове.
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 307,
    text:
      `
        Дом отреченных? Что это такое?
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 308,
    text:
      `
        Лаборатория.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 309,
    text:
      `
        И что в этой лаборатории происходило?
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 310,
    text:
      `
        Я и еще несколько десятков человек участвовали в программе «Солдат».
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 311,
    text:
      `
        Ее ответы были скупы, эмоционально нейтральны и только по делу. Выпрямленная спина и руки на коленях — $Имя Игрока$ рапортовала о произошедшем.
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 312,
    text:
      `
        Бабушке Юко, охающей и ахающей, такое явно было не по нраву. Но женщина сдерживалась, видя напряженную позу.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 313,
    text:
      `
        О чем эта программа?
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 314,
    text:
      `
        У меня нет таких данных.
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 315,
    text:
      `
        Что с вами там делали?
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 316,
    text:
      `
        Моя группа относится к классу химической резистентности. Нам прививали невосприимчивость к ядам, кислотам и химическим соединениям.
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 317,
    text:
      `
        Зачем?!
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 318,
    text:
      `
        Я не обладаю такой информацией.
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 319,
    text:
      `
        Но что... Что с вами планировали делать потом?
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 320,
    text:
      `
        Финальным этапом программы является двухступенчатая модификация Солдата. Косметическая и боевая.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 321,
    text:
      `
        Вас готовили к войне?
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 322,
    text:
      `
        Нет. Солдат-13 не боевая единица для подразделений армии. Мы обязаны выступать в роли сопровождения.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 323,
    text:
      `
        Чьего? Президента? Или руководителей корпораций? Кому вообще нужен телохранитель с подобными... дополнениями?
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 324,
    text:
      `
        Солдат пожала плечами. Лагард обещал, что его детища получат нового Хозяина сразу же, как только пройдут второй этап. Но кем были те люди — неизвестно.
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 325,
    text:
      `
        Какой кошмар... Ками-сама что же творится-то... Получается, ты пришла туда добровольно? Или тебя силой принудили?
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 326,
    text:
      `
        Я не знаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 327,
    text:
      `
        Ты не помнишь? Неужели родители способны на такое зверство? Отдать своего ребенка, как подопытного кролика?
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 328,
    text:
      `
        Я не помню.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 329,
    text:
      `
        Что ты не помнишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 330,
    text:
      `
        Я не помню родителей. Я не знаю, где жила. Самое первое воспоминание — дом Отреченных.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 331,
    text:
      `
        Бедный ребёнок... Сколько тебе было лет?
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 332,
    text:
      `
        Не знаю. Может, три. Может, четыре.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 333,
    text:
      `
        А сейчас тебе сколько?
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 334,
    text:
      `
        К модификации допускаются Солдаты в возрасте от девятнадцати лет.
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 335,
    text:
      `
        То есть…
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 336,
    text:
      `
        Когда на дом Отреченных напали, мне исполнилось двадцать.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 337,
    text:
      `
        Старушка не смогла усидеть на месте. Услышанное повергло в шок, заставило злиться, возмущаться. Не понимать.
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 338,
    text:
      `
        Ей было искренне жаль эту девочку. Не знавшую, что такое детство.
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 339,
    text:
      `
        Пропустившую за слоями бетона и издевательств все, что могло сформировать ее саму. Как человека. Как личность.
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 340,
    text:
      `
        $Имя Игрока$, дорогая моя... Это просто ужасно. Мне так тебя жаль, я даже не знаю... Чем тебе помочь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 341,
    text:
      `
        Давай сходим в полицию? Ты расскажешь, что с тобой сделали. Покажешь, откуда сбежала. Надо наказать этих мерзавцев. Такое преступление против человека… Это же звери, а не люди.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 342,
    text:
      `
        Доктор Лагард мертв.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 343,
    text:
      `
        Кто это?
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 344,
    text:
      `
        Мой первый Хозяин.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 345,
    text:
      `
        Истеричный крик ввинтился под потолок.
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 346,
    text:
      `
        Ты хочешь сказать, что какой-то сбрендивший ученый имел в своем подчинении несколько десятков детей. Мучил их, ставил опыты, травил какой-то отравой, и требовал называть себя Хозяин?!
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 347,
    text:
      `
        Подожди, ты назвала меня Хозяином из-за этого?...
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 348,
    text:
      `
        Солдат задумалась. Постулаты были просты и конкретны. До появления на улицах Новы.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 349,
    text:
      `
        К сожалению, происходящее за стенами дома Отреченных отказывалось становиться понятным под универсальной копиркой.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 350,
    text:
      `
        Хозяин — это лицо, к которому приставляется солдат. Первое правило гласит: защищай своего Хозяина, убивай ради своего Хозяина, умирай во имя своего Хозяина.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 351,
    text:
      `
        И сколько таких правил?
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 352,
    text:
      `
        Солдат задумалась. Стоит ли…?
      `,
    buttons: [
      {
        text: 'Ответить',
        goTo: 353
      },
      {
        text: 'Не отвечать',
        goTo: 357
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 353,
    text:
      `
        Три.
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 354,
    text:
      `
        Второе правило: любой приказ Хозяина — закон.
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 355,
    text:
      `
        Как любил говорить Лагард: послушание определяет хорошего Солдата.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 356,
    text:
      `
        Третье: Солдат не имеет права причинять вред своему Хозяину.
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 357,
    text:
      `
        Это… Это, хм… Секретная информация.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 358,
    text:
      `
        Врать Солдат не умела. Хоть это и не было ложью, наоборот, чистейшей правдой. Однако сам факт слетевшей с губ информации неожиданно вызывал недоумение.
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 359,
    text:
      `
        Но почему Хозяин…?
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 360,
    text:
      `
        Бабушка Юко была не в силах переваривать подобную информацию. Здоровый рассудок неожиданно быстро стал изъяном, а не достижением.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 361,
    text:
      `
        Она поднялась, потянулась к верхней полке, доставая оттуда бутылку. Щедро плеснула в рюмку, опрокинула раз, два, поставила перед собой третью.
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 362,
    text:
      `
        Приобретая Солдата, Хозяин обязан предоставлять ему спальное место, еду и оплату. Солдат в ответ предлагает свои навыки и тело.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 363,
    text:
      `
        Тело? $Имя Игрока$, это рабство… А не работа.
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 364,
    text:
      `
        По информации, доступной мне, рабы не получали зарплат.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 365,
    text:
      `
        Вороненок, понимаешь, людей нельзя покупать. Их нельзя воровать, держать взаперти, ставить над ними опыты, а потом продавать. Это противоречит не просто законам, а морали. Всему человеческому!
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 366,
    text:
      `
        Солдат в ответ пожала плечами. Можно, нельзя… Убивать тоже нельзя. Однако минимум десять трупов за две недели скитаний уже лежат на ее плечах.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 367,
    text:
      `
        Бабушка Юко с горестным вздохом протянула рюмку.
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 368,
    text:
      `
        Алкоголь помогает справляться с некоторыми сложными вопросами. Держи.
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 369,
    text:
      `
        Солдат посмотрела на слегка мутную жидкость в низкой и крошечной рюмке.
      `,
    buttons: [
      {
        text: 'Взять стопку',
        goTo: 370
      },
      {
        text: 'Не брать',
        goTo: 373
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 370,
    text:
      `
        Девушка, принюхавшись, опрокинула содержимое в себя. Покатала на языке, пытаясь найти сходство с тем, чем ее поили в доме Отреченных, но не нашла.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 371,
    text:
      `
        Вкусно.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 372,
    text:
      `
        Хорошее сакэ, но слишком крепкое. Так что не налегай.
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 373,
    text:
      `
        Девушка осторожно отставила стопку в сторону, стараясь не расплескать.
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 374,
    text:
      `
        Не нужно.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 375,
    text:
      `
        Почему? Не хочешь? Или боишься, что спою тебя?
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 377,
    text:
      `
        На меня не действует алкоголь.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 378,
    text:
      `
        Как так?
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 379,
    text:
      `
        Это тоже химическое соединение.
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 380,
    text:
      `
        То есть ты не можешь опьянеть?
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 381,
    text:
      `
        Я невосприимчива к органическим или химическим наркотикам. Алкоголю. Ядам нескольких видов. Кислоты, анестетики, все, что может вывести из боя, помешать выполнению задачи.
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 382,
    text:
      `
        Про ампулы с неизвестным седативным препаратом у бандитов решила промолчать из соображений безопасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 383,
    text:
      `
        Разве такое возможно?
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 384,
    text:
      `
        Я не достигла полной резистентности, но доктор Лагард был доволен моими успехами. В результате тестов многих препаратов их введение не изменило ход боя или повлияло, но минимально.
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 385,
    text:
      `
        Касательно алкоголя, моим рекордом было три литра этилового спирта. Залпом. И выбитых десять мишеней из десяти.
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 386,
    text:
      `
        Мучать маленькую девочку и заставлять делать такое…
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 387,
    text:
      `
        Последний тест на этиловый спирт был проведен два года назад. По биологическим показателям я не была девочкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Towel.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 388,
    text:
      `
        Стук стопки о стол был точкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 389,
    text:
      `
        Я рада, что ты спаслась, $Имя Игрока$. Честно. Хотела бы я помочь привлечь к ответственности всех, кто сделал такое с тобой, но раз главный мучитель мертв…
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 390,
    text:
      `
        Еще три порции неизвестного алкоголя. Солдат лениво крутила пустую чашку.
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 391,
    text:
      `
        Что за люди... Как так можно... Детей…
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 392,
    text:
      `
        Я знала, что подобное существует. Но столкнуться с этим…
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 393,
    text:
      `
        Что-то подсказывало Солдату не говорить о последствиях получения резистентности.<p>И вообще замолчать на эту тему.
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 394,
    text:
      `
        Потому что изначально воинственно настроенная бабушка Юко опустила голову, пряча глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 395,
    text:
      `
        Следующее утро встретило EVE-13C не холодом, проевшим кости, а теплом, запахом еды и комфортом.
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 396,
    text:
      `
        Подобное чувство не возникало у Солдата даже в доме Отреченных. Пробуждение обычно было связано с крепатурой, болью от нарывающих язв и порезов или…
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 397,
    text:
      `
        Она открыла глаза от слишком привычного уже писка динамиков. Посетитель появился за отъехавшей в сторону дверью. Доктор Лагард. Ее мучитель, ее Бог, ее Судья.
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/UA/Alert_Theme.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 398,
    text:
      `
        Доброе утро, EVE-13C. Помнишь, что сегодня за день?
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    speaker: 'Доктор Лагард',
    imageFront: require('../../../../Images/UA/Persons/Lagard.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UA, value: 0, category: 'Person', id: 'Lagard' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 399,
    text:
      `
        Он улыбался слишком широко для обычной утренней проверки. Излишне ярко, маслянисто. У Солдата засосало под ложечкой, но она смиренно кивнула и сползла с кровати на пол.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 400,
    text:
      `
        Первое правило дома Отреченных: никогда не возвышаться над Надзирателями и докторами. Только коленопреклоненная поза, взгляд всегда снизу вверх.
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 401,
    text:
      `
        Верный солдат не имеет права смотреть на своего Хозяина свысока. Верный солдат, все равно что верная собака.
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 402,
    text:
      `
        Всего через неделю ты наконец-то станешь идеальной.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    speaker: 'Доктор Лагард',
    imageFront: require('../../../../Images/UA/Persons/Lagard.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 403,
    text:
      `
        Доктор опустил поднос на пол, перешагнул через него, протягивая руку к девичьему лицу. Ладонь прошлась влажным касанием от лба до подбородка.
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 404,
    text:
      `
        Третьего числа мы сделали тебе идеальное лицо, двадцать седьмого сделаем идеальное тело. Подумай, что хочешь первым. Заменить позвоночник или поставить так полюбившиеся тебе клинки?
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    speaker: 'Доктор Лагард',
    imageFront: require('../../../../Images/UA/Persons/Lagard.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 405,
    text:
      `
        Взглядом $Имя Игрока$ уперлась в ботинки Доктора. Вырываться, брыкаться, подавать какие-либо признаки сопротивления было нельзя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 406,
    text:
      `
        Потому что Лагард всегда за непослушание наказывал жестче и изобретательнее, чем Надзиратели.
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 407,
    text:
      `
        Я разрешаю тебе ответить.
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speaker: 'Доктор Лагард',
    imageFront: require('../../../../Images/UA/Persons/Lagard.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 408,
    text:
      `
        Довольная ухмылка не сходила с его губ. Лучшая из созданных им. Самая послушная, верная, смертоносная. Идеальное совершенство.
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 409,
    text:
      `
        Сколько времени можно думать?
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 410,
    text:
      `
        Тебе можно вплоть до самого двадцать седьмого числа. Я слишком люблю тебя, чтобы что-то запрещать.
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    speaker: 'Доктор Лагард',
    imageFront: require('../../../../Images/UA/Persons/Lagard.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 411,
    text:
      `
        Большой палец огладил подбородок, задирая голову вверх. Прошелся по губам, оттянул нижнюю вниз, оголяя зубы.
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 412,
    text:
      `
        Я могу попросить поставить все?
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 413,
    text:
      `
        Доктор Лагард слишком довольно улыбнулся на ее без сомнения наглую просьбу. Жадную.
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 414,
    text:
      `
        Любишь масштаб. Молодец. Раз скоро твой день рождения, я сделаю самый желанный для тебя подарок. Выбери две модификации, какие хочешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    speaker: 'Доктор Лагард',
    imageFront: require('../../../../Images/UA/Persons/Lagard.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 415,
    text:
      `
        Слишком яркие запахи еды вернули из воспоминаний обратно на кухню.
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/UA/Calm_Theme.mp3'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 416,
    text:
      `
        «Завтрак… Настоящий завтрак. Это так странно».
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 417,
    text:
      `
        Да, перед ней стоял завтрак. Не склизкая каша в мутной и исцарапанной металлической посуде. А рис, омлет и…
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 418,
    text:
      `
        «Сладости. Это сладости!»
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 419,
    text:
      `
        Бабушка Юко едва успела обернуться, когда упаковка шоколадного печенья, разорванная с треском, была плотно утрамбована за щеки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 420,
    text:
      `
        Вся.
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 421,
    text:
      `
        $Имя Игрока$, куда же ты так, подавишься…
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 422,
    text:
      `
        Женщина меланхолично проводила взглядом упаковку, закинутую не глядя, но точно в цель мусорного ведра. И подала воды.
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 423,
    text:
      `
        Жизнь с вороненком теперь казалась жизнью с уличным котом.
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 424,
    text:
      `
        Я не знала, какую еду ты предпочитаешь, поэтому сделала классический японский и американский завтрак. Какой хочешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 425,
    text:
      `
        Все!
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 426,
    text:
      `
        От вида стола, заваленного едой, мозг заходился в экстазе. И отказывался даже допускать мысль, что такое количество может не влезть.
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 427,
    text:
      `
        Влезло.
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 428,
    text:
      `
        Сладкое любишь, да?
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 429,
    text:
      `
        Солдат закивала, вразвалочку, как беременная кошка, следуя за посмеивающейся женщиной.
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 430,
    text:
      `
        Тогда, если поможешь с сервировкой этих столов, дам тебе моти. Одну! Не то точно от такого количества поплохеет.
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    message: 'Моти — японский десерт, сделанный из сладкого рисового теста, в которое заворачивают начинку.',
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 431,
    text:
      `
        Что-то еще нужно будет сделать?
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 432,
    text:
      `
        Солдат осмотрела помещение.
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 433,
    text:
      `
        Не так много столов. Всего-то двадцать. И за какую-то неизвестную, но наверняка вкусную моти!
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 434,
    text:
      `
        Думаешь, за каждую выполненную задачу будешь получать по сладкому? Нет, вороненок, всему надо знать меру. В том числе и в обучении.
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 435,
    text:
      `
        Женщина по-доброму рассмеялась.
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 436,
    text:
      `
        Открытие через два часа. За это время надо успеть многое. На кухню пока что тебя не пущу, будешь в зале работать. Официанткой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 437,
    text:
      `
        Принимать заказы, приносить мне, потом подавать их на стол. Подготовка обеденной зоны, напитки, посадка: все это на тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 438,
    text:
      `
        Будем учиться на ходу. Не бойся, буду подсказывать. Начинай с сервировки.
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 439,
    text:
      `
        Бабушка Юко бахнула на стол огромный металлический ящик. С палочками, салфетками, какими-то керамическими плошками, которыми только в голову и кидать.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 440,
    text:
      `
        Что это?...
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 441,
    text:
      `
        Улыбка у женщины была слегка кровожадной, но мягкой. Как в этой старушке уживалось столько противоположностей, сложно было сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 442,
    text:
      `
        Но, вероятно, никто, кроме нее, не оставил бы подле себя подобную неоднозначную личность, как Солдат-13.
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 443,
    text:
      `
        Начнем с места палочек на столе…
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 444,
    text:
      `
        Дом Отреченных учил выживать, терпеть боль и убивать. За все шестнадцать лет девушку ни разу не посещала мысль о работе.
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 445,
    text:
      `
        Бытии обычным человеком.
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 446,
    text:
      `
        Подобные парадигмы и мировоззрения не преподавались ни на уроках безопасности, ни на уроках права.
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 447,
    text:
      `
        $Имя Игрока$ знала, как правильно сопровождать Хозяина. Как оценить обстановку, устранить угрозу, защитить. Даже своим телом.
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 448,
    text:
      `
        Нет, $Имя Игрока$, палочки с другой стороны. Салфетки в салфетницу не комом!
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 449,
    text:
      `
        Бабушка Юко отдавала команды прямо из кухни. Пока Солдат с тяжелым чувством на душе металась в беспомощности.
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 450,
    text:
      `
        «Бантики из салфеток! Цветы! Оригами!»
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 451,
    text:
      `
        Сначала ей нравилась мысль создавать руками, обученными к сворачиванию шеи. Но после первой неудачи желание пропало.
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 452,
    text:
      `
        При встрече гостей надо улыбаться, а не смотреть на них исподлобья.
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 453,
    text:
      `
        Они подумают, что ты их убить хочешь!
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 454,
    text:
      `
        Женщина не злилась. Она узнала предысторию своего вороненка и с матерински теплым сердцем пыталась ее научить жить.
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 455,
    text:
      `
        Из раза в раз забавляясь от столь детских ошибок у взрослой девушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 456,
    text:
      `
        Поднос не грохаем на стол, а медленно ставим.
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 457,
    text:
      `
        Постоянные клиенты терпели обучение по ходу, зная, как хозяйке полюбившегося им ресторана нелегко.
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 458,
    text:
      `
        Пожелай приятного аппетита!
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 459,
    text:
      `
        Итта... Ит-та-да-ки-мас.
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 460,
    text:
      `
        Молодец, но постарайся слитно и без запинок.
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 461,
    text:
      `
        Новый язык казался странным. Все казалось странным. Непривычным. Бурлящим.
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 462,
    text:
      `
        Жизнь вокруг пела. Ноги уставали не от пятичасовых тренировок, а от десятичасовой смены с подносом.
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 463,
    text:
      `
        Руки ныли от тяжелых ящиков с овощами. Голова гудела от миллиона новых правил.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 464,
    text:
      `
        «Рис слева, суп справа, основное блюдо по центру. Палочки острым концом влево».
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 465,
    text:
      `
        Выставляя множество керамических плошек с подноса, Солдат остановилась, заметавшись взглядом по столу.
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 466,
    text:
      `
        «Суп слева или справа?»
      `,
    buttons: [
      {
        text: 'Слева',
        goTo: 469,
        func: () => { timer.stop() }
      },
      {
        text: 'Справа',
        goTo: 467,
        func: () => { timer.stop() }
      }],
    beforeBegin: () => {
      timer.set(6, () => { scenarioManager.beginScene(469) })
    },
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 467,
    text:
      `
        Миска с мисо-супом опустилась с правой стороны стола. Солдат педантично отодвинула ее подальше, чтобы хватило места на плошку с редькой.
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 468,
    text:
      `
        Кивнув себе, девушка удовлетворенно выдохнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 469,
    text:
      `
        Миска с мисо-супом брякнулась совсем рядом с рисом. Взбунтовавшаяся жидкость в тарелке почти попала в соседнюю, заляпав стол.
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 470,
    text:
      `
        «Нет, надо справа».
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 471,
    text:
      `
        На подносе одиноко лежали палочки на подставке.
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 472,
    text:
      `
        «Хиши… Хиси… Ха- что-то там. Неважно. Их куда?»
      `,
    buttons: [
      {
        text: 'Острым концом влево',
        goTo: 473
      },
      {
        text: 'Острым концом вправо',
        goTo: 476
      },
      {
        text: 'Воткнуть в рис',
        goTo: 480
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 473,
    text:
      `
        Солдат аккуратно переместила палочки на стол, стараясь не уронить их на поверхность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 474,
    text:
      `
        «Бабушка Юко, кажется, говорила, почему нельзя, чтобы они задевали стол. Но я помню только то, что это очень страшно и плохо, если так произойдет».
      `,
    buttons: [
      {
        text: '',
        goTo: 475
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 475,
    text:
      `
        Довольная одобрительным кивком посетителя, девушка придвинула палочки поближе и отошла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 476,
    text:
      `
        Солдат аккуратно переместила палочки на стол, стараясь не уронить их на поверхность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 477,
    text:
      `
        «Бабушка Юко, кажется, говорила, почему нельзя, чтобы они задевали стол. Но я помню только то, что это очень страшно и плохо, если так произойдет».
      `,
    buttons: [
      {
        text: '',
        goTo: 478
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 478,
    text:
      `
        Посетитель тяжело вздохнул, с укором во взгляде повернул палочки на сто восемьдесят градусов и отпустил официантку.
      `,
    buttons: [
      {
        text: '',
        goTo: 479
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 479,
    text:
      `
        «Все-таки надо было острым концом влево…»
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 480,
    text:
      `
        Солдат, не колеблясь, схватилась за металлические хаси и с размаху воткнула в глубокую миску с рисом.
      `,
    buttons: [
      {
        text: '',
        goTo: 481
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 481,
    text:
      `
        «Зато точно не упадут и не заденут стол. Не то что ваши неустойчивые подставки».
      `,
    buttons: [
      {
        text: '',
        goTo: 482
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 482,
    text:
      `
        Кажется, бабушка Юко была не согласна с логикой Солдата. Громкий оклик раздался со стороны кухни.
      `,
    buttons: [
      {
        text: '',
        goTo: 483
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 483,
    text:
      `
        $Имя Игрока$!!! Еще раз так сделаешь — оставлю без сладкого!!!
      `,
    buttons: [
      {
        text: '',
        goTo: 484
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    achievement: { story: EStoriesEn.UA, name: 'Japanese' },
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 484,
    text:
      `
        Ужин после рабочего дня вот уже неделю как проходил на пахнущей химией кухне.
      `,
    buttons: [
      {
        text: '',
        goTo: 485
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 485,
    text:
      `
        Хорошая работа, вороненок. Ты растешь. Ты большая умничка.
      `,
    buttons: [
      {
        text: '',
        goTo: 486
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 486,
    text:
      `
        Бабушка Юко нашла в Солдате отдушину после нескольких лет одиночества. Все эмоции, не подаренные близким за столько лет, она дарила с лихвой ей.
      `,
    buttons: [
      {
        text: '',
        goTo: 487
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 487,
    text:
      `
        И девушка млела.
      `,
    buttons: [
      {
        text: '',
        goTo: 488
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 488,
    text:
      `
        Теплая сухая ладонь погладила по голове. Ее так никто еще не касался после Лагарда. И не сравнивать не получалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 489
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 489,
    text:
      `
        «Даже спину хочется расслабить».
      `,
    buttons: [
      {
        text: '',
        goTo: 490
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 490,
    text:
      `
        И улыбаться тоже хотелось. И под сердцем теплело.
      `,
    buttons: [
      {
        text: '',
        goTo: 491
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 491,
    text:
      `
        Старушка искренне дарила свою заботу. А $Имя Игрока$ открыто училась ее получать.<p> <p> <p>Однако в развернувшейся утопии Солдата была ложка дегтя.
      `,
    buttons: [
      {
        text: '',
        goTo: 492
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 492,
    text:
      `
        Какая красавица. Да эта кафешка такими темпами станет моей любимой!
      `,
    buttons: [
      {
        text: '',
        goTo: 493
      }],
    music: require('../../../../Sounds/UA/Alert_Theme.mp3'),
    speaker: 'Наглый посетитель 1',
    imageFront: require('../../../../Images/UA/Persons/Bully_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 493,
    text:
      `
        Шлепок пониже спины проигнорировать не удалось. Как и маслянистые взгляды, ухмылки, вызывающие дрожь в желудке, и наглые, самодовольные морды.
      `,
    buttons: [
      {
        text: '',
        goTo: 494
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 494,
    text:
      `
        Рекомендую прекратить и наслаждаться едой.
      `,
    buttons: [
      {
        text: '',
        goTo: 495
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 495,
    text:
      `
        Ты думаешь, старушка Юко тебя взяла сюда не для привлечения народа, а? Вот хитрая бабка, пытается поднять свою забегаловку со дна, да еще и такими методами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 496
      }],
    speaker: 'Наглый посетитель 1',
    imageFront: require('../../../../Images/UA/Persons/Bully_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 496,
    text:
      `
        Считаю, грех не воспользоваться маркетинговым ходом. А ты?
      `,
    buttons: [
      {
        text: '',
        goTo: 497
      }],
    speaker: 'Наглый посетитель 1',
    imageFront: require('../../../../Images/UA/Persons/Bully_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 497,
    text:
      `
        Он обратился к своему сотрапезнику, который не повременил с гоготом одобрения.
      `,
    buttons: [
      {
        text: '',
        goTo: 498
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 498,
    text:
      `
        Я бы не отказался от пробы. Раз наша карга предлагает тест-драйв.
      `,
    buttons: [
      {
        text: '',
        goTo: 499
      }],
    speaker: 'Наглый посетитель 2',
    imageFront: require('../../../../Images/UA/Persons/Bully_2.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 499,
    text:
      `
        Солдат начала закипать. Оскорбление бабушки Юко, касания без спроса, просто внешний вид… За все просилось почесать им глотку их же зубами.
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 500,
    text:
      `
        Так что стой и подставляй все, чем природа наградила. Тебя сюда явно не за твои способности в сервировке поставили. А в обслуживании кое-чего другого…
      `,
    buttons: [
      {
        text: '',
        goTo: 501
      }],
    speaker: 'Наглый посетитель 1',
    imageFront: require('../../../../Images/UA/Persons/Bully_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 501,
    text:
      `
        «Бабушка Юко говорила не бить клиентов только за то, что они косо посмотрели. Я бью за то, что кто-то вовремя не укоротил ему руки».
      `,
    buttons: [
      {
        text: '',
        goTo: 502
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 502,
    text:
      `
        Простое вычисление сошлось, за знаком равенства встали постулаты, позволяя Солдату защитить честь Хозяйки.
      `,
    buttons: [
      {
        text: '',
        goTo: 503
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 503,
    text:
      `
        Она дождалась, когда рука снова попытается залезть ей под юбку. Осторожно раздвинула ноги шире. Довольный внешней покорностью и, конечно же, хрупкостью девушки, посетитель медленно огладил бедро.
      `,
    buttons: [
      {
        text: '',
        goTo: 504
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 504,
    text:
      `
        «Почему все считают, что если выгляжу на пятьдесят килограмм, то не смогу дать сдачи?»
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 505,
    text:
      `
        Мужчина облизывался, наблюдая за выражением лица официантки. Пальцы двинулись выше, заползая под резинку трусов.<p>Тишина накрыла гудящий ранее зал. Словно все в напряжении наблюдали, как один из посетителей прилюдно засовывает руки под юбку, и ждали.<p>Но чего? Реакции?
      `,
    buttons: [
      {
        text: '',
        goTo: 506
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 506,
    text:
      `
        Солдат уличила момент. Сдвинула ноги рывком, захлопывая капкан. Жертва затрепыхалась, пытаясь вытащить конечность, но было поздно.
      `,
    buttons: [
      {
        text: '',
        goTo: 507
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 507,
    text:
      `
        Соглядатаю в лицо плеснула горячим мисо-супом, который тот попросил приправить двойной порцией остроты. Сверху добавила прицельный бросок миской в голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 508
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 508,
    text:
      `
        Я предупредила.
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 509,
    text:
      `
        Взгляд быстро оценил обстановку. Под оружие подходили только металлические палочки и ее собственное тело.
      `,
    buttons: [
      {
        text: 'Тело',
        goTo: 510
      },
      {
        text: 'Палочки',
        goTo: 516
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 510,
    text:
      `
        Один разворот, рука почти обвивается вокруг бедер. Если довернуть еще, можно и плечо из сустава выдернуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 511
      }],
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Effect', id: 'Butcher' },
      { story: EStoriesEn.UA, value: +1, category: 'Choice', id: 'Body' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 511,
    text:
      `
        Жаль, вывихи лечатся быстро.
      `,
    buttons: [
      {
        text: '',
        goTo: 512
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 512,
    text:
      `
        Придерживая дергающуюся руку, Солдат прицельно ударила локтем. Не получилось. Тогда в ход пошли ноги.
      `,
    buttons: [
      {
        text: '',
        goTo: 513
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 513,
    text:
      `
        А-а-а! Отпусти, больная!
      `,
    buttons: [
      {
        text: '',
        goTo: 514
      }],
    speaker: 'Наглый посетитель',
    imageFront: require('../../../../Images/UA/Persons/Bully_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 514,
    text:
      `
        Выпущенная из захвата конечность была прибита к земле вместе с ее владельцем сначала коленом, потом и ботинком.
      `,
    buttons: [
      {
        text: '',
        goTo: 515
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 515,
    text:
      `
        Упиваясь криками зарвавшегося посетителя, $Имя Игрока$ пару раз попрыгала на вогнутой внутрь лучевой кости.
      `,
    buttons: [
      {
        text: '',
        goTo: 521
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 516,
    text:
      `
        Недостаточно острые, но если добавить скорости и силы, то кожу проткнуть могут запросто.
      `,
    buttons: [
      {
        text: '',
        goTo: 517
      }],
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Effect', id: 'Killer' }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 517,
    text:
      `
        Один разворот, рука почти обвивается вокруг бедер. Цель в захвате попыталась что-то сделать второй рукой, но тут же получила порцией кипятка в лицо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 518
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 518,
    text:
      `
        Металл медленно входил в не очень податливую плоть. Сухожилия и кости мешали, но Солдат не останавливалась, используя свою ладонь как молоток. 
      `,
    buttons: [
      {
        text: '',
        goTo: 519
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 519,
    text:
      `
        Вбивала палочки в предплечье, старательно ударяя в лучевую кость, чтобы урок был запоминающимся.
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 520,
    text:
      `
        Больная дура! Отпусти!
      `,
    buttons: [
      {
        text: '',
        goTo: 521
      }],
    speaker: 'Наглый посетитель',
    imageFront: require('../../../../Images/UA/Persons/Bully_1.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 521,
    text:
      `
        Бабушка Юко прилетела на крики. Осмотрела ползающего и корчащегося посетителя на полу. Посмотрела на другого, трущего покрасневшие глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 522
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 522,
    text:
      `
        Взглянула на ноги Солдата, на которых сдернутые трусы висели у коленок. И закричала.
      `,
    buttons: [
      {
        text: '',
        goTo: 523
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 523,
    text:
      `
        Вы куда пришли, мерзавцы! С борделем улицы перепутали или что?! Вон отсюда, и чтобы я ваши рожи тут не видела!
      `,
    buttons: [
      {
        text: '',
        goTo: 524
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 524,
    text:
      `
        Посетители, по громкости криков понявшие, что дело серьезное и действительно не пиар-ход, выволокли избитых вон. Пока бабушка Юко их собственноручно на судилище не отправила.
      `,
    buttons: [
      {
        text: '',
        goTo: 525
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 525,
    text:
      `
        Вороненок мой, ты цела? Ничего сделать не успели?
      `,
    buttons: [
      {
        text: '',
        goTo: 526
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 526,
    text:
      `
        Женщина быстрым движением вернула одежду в исходное состояние, скинула мусор с осколками в поднос и повела официантку на кухню.
      `,
    buttons: [
      {
        text: '',
        goTo: 527
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Restaurant.jpg')
  },

  {
    id: 527,
    text:
      `
        Ну и представление ты, конечно, посетителям показала. Спасибо, что их головами стол не проломила. Сейчас таких добротных уже не делают.
      `,
    buttons: [
      {
        text: '',
        goTo: 528
      }],
    music: require('../../../../Sounds/UA/Calm_Theme.mp3'),
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 528,
    text:
      `
        Солдат непонимающе наблюдала за продолжающей хлопотать на кухне женщиной.
      `,
    buttons: [
      {
        text: '',
        goTo: 529
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 529,
    text:
      `
        Вы не злитесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 530
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 530,
    text:
      `
        За что? За то, что ты этих идиотов на место поставила? Насмешила!
      `,
    buttons: [
      {
        text: '',
        goTo: 531
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 531,
    text:
      `
        Надо было им еще добавить. Они мне крови много попили. Всех девок перепугали, кто ко мне устраиваться приходил.
      `,
    buttons: [
      {
        text: '',
        goTo: 532
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 532,
    text:
      `
        А что я могла сделать вместе с нашим женским коллективом? Скалкой пригрозить? Дак и не раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 533
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 533,
    text:
      `
        Один итог: все равно приходят. Пугай, не пугай, угрозами разбрасывайся, все равно придут. Когда Коджи с Хиро живы были, все проще было… А сейчас…
      `,
    buttons: [
      {
        text: '',
        goTo: 534
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 534,
    text:
      `
        Женщина махнула рукой, незаметно утирая слезу.
      `,
    buttons: [
      {
        text: '',
        goTo: 535
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 535,
    text:
      `
        Лишь бы не пришли мстить за подбитую гордость. А так, пропащее племя идиотов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 536
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 536,
    text:
      `
        Мне же можно будет их убить?
      `,
    buttons: [
      {
        text: '',
        goTo: 537
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 537,
    text:
      `
        Вопрос, заданный с бытовой интонацией, отчего-то заставил женщину подскочить.
      `,
    buttons: [
      {
        text: '',
        goTo: 538
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 538,
    text:
      `
        $Имя Игрока$, не надо такие вещи говорить! Не уподобляйся им!
      `,
    buttons: [
      {
        text: '',
        goTo: 539
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 539,
    text:
      `
        Но почему? Разве это не нормально: отвечать на физическую агрессию физической агрессией?
      `,
    buttons: [
      {
        text: '',
        goTo: 540
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 540,
    text:
      `
        Если они придут вам навредить, то почему мне нельзя вредить им?
      `,
    buttons: [
      {
        text: '',
        goTo: 541
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 541,
    text:
      `
        Вороненок, насилие всегда порождает насилие. Поколотишь одних, придут другие. Умнее, хитрее, изворотливее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 542
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 542,
    text:
      `
        Повезло, что эти были без оружия. Обычно вся их братия до зубов обвешана. И если придут такие, то тебе уже будет не спастись.
      `,
    buttons: [
      {
        text: '',
        goTo: 543
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 543,
    text:
      `
        Про покоящийся под матрасом пистолет Солдат благоразумно промолчала.
      `,
    buttons: [
      {
        text: '',
        goTo: 544
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 544,
    text:
      `
        «Надо придумать, куда его положить, чтобы незаметно носить с собой. Или лучше нож? В рукав, например».
      `,
    buttons: [
      {
        text: '',
        goTo: 545
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 545,
    text:
      `
        Я не хочу иметь дела с оружием, $Имя Игрока$, понимаешь? Кровь, смерти, все это… Слишком больно. И грязно.
      `,
    buttons: [
      {
        text: '',
        goTo: 546
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 546,
    text:
      `
        Я разрешаю тебе защищаться. Но не разрешаю нападать.
      `,
    buttons: [
      {
        text: '',
        goTo: 547
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 547,
    text:
      `
        Сердце сжималось от вида поникшего Солдата. 
      `,
    buttons: [
      {
        text: '',
        goTo: 548
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 548,
    text:
      `
        Вороненок, тебе больше не нужно выполнять то, чему тебя учили. Ты дома. Ты в безопасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 549
      }],
    speaker: 'Бабушка Юко',
    imageFront: require('../../../../Images/UA/Persons/Yuko.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 549,
    text:
      `
        Сухие ладони обхватили лицо, обдавая теплом, которое лилось прямиком к груди. От согревающего комка хотелось жмуриться, урчать и улыбаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 550
      }],
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  },

  {
    id: 550,
    text:
      `
        Дома… Я дома…
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UA', 'Глава 1', 'Часть 2', '0')
        }
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/UA/Persons/Eve_Waitress.png'),
    imageBorder: require('../../../../Images/UA/UI/Border.png'),
    achievement: { story: EStoriesEn.UA, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/UA/Backgrounds/Kitchen.jpg')
  }
])
