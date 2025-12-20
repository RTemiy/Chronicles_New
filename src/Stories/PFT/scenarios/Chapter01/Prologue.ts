import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash, vhs } from '../../../../Components/Slide/Slide'
import { firstChoiceMessage, inventoryMessage, previousSlideMessage } from '../../../../Utils/textConsts'
scenarioManager.addScenario({ storyName: EStoriesEn.PFT, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
         Нет ничего лучше поездки в музей солнечным осенним днём, когда тебе совершенно некуда торопиться. Хотя можно было бы прибавить к этому чашечку ароматного кофе и вкусную выпечку.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/PFT/Calm_Theme.mp3'),
    /* simple: require('../../../../Sounds/PFT/Tram.mp3'), */
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 1,
    text:
      `
        Хорошее настроение так сильно переполняло Венди, будто она давно не позволяла радости проявиться в своей жизни. Но не теперь.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 2,
    text:
      `
        «Сколько лет я живу в Литл-Роке? Со старших классов школы? И ни разу до сегодняшнего дня не была в Музее изящных искусств Арканзаса».
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 3,
    text:
      `
        Без мужа Венди уже давно нигде не была. Его попытки контролировать все её выходы на улицу лишили радости от посещения любого места в городе.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 4,
    text:
      `
        «Пора написать новые воспоминания!»
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Smile.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 5,
    text:
      `
        Венди без всякого маршрута ходила лабиринтами галереи и наслаждалась. Не сказать, что девушка многое знала о живописи, но рядом с полотнами Ван Гога ощущала забытое умиротворение.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 6,
    text:
      `
        Удивляло соседство портретов дам в напудренных париках из VIII века, религиозных сцен более раннего периода и смелого авангарда среди сюрреалистичных пейзажей последних лет.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 7,
    text:
      `
        Подойдя к стойке с буклетами, Венди не без интереса обнаружила, что прямо сейчас может посетить одно из мероприятий, посвящённых трём темам.
      `,
    buttons: [
      {
        text: 'Необдуманное потребление',
        goTo: 500
      },
      {
        text: 'Художница-феминистка',
        goTo: 501
      },
      {
        text: 'Современный джаз',
        goTo: 502
      }],
    message: firstChoiceMessage,
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 500,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 8, image: require('../../../../Images/PFT/Objects/Installation_Photo.png'), buttonText: 'Продолжить' },
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 8,
    text:
      `
        Необычная инсталляция Тори Таруссо под названием «Парадокс изобилия», хоть и выполнена была в позитивных цветах, но то и дело навевала меланхоличные мысли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/PFT/Objects/Installation_Photo.png'),
    imageBorder: require('../../../../Images/PFT/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 9,
    text:
      `
        «Видеть такое количество повседневных вещей, которые невостребованными оседают на планете, едва оказавшись в наших руках после покупки… Грустно».
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 10,
    text:
      `
        Возле импровизированной продуктовой тележки валялись пластиковые контейнеры для еды, пустые коробки и подпорченные фрукты.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 11,
    text:
      `
        Среди нарисованных на голубой стене птиц, свободных и прекрасных, парили такие же белые, но неуместные в небе в отличии от прекрасных божьих созданий, пластиковые пакеты.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBorder: require('../../../../Images/PFT/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 501,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 208, image: require('../../../../Images/PFT/Objects/Artist_Portray.png'), buttonText: 'Продолжить' },
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 208,
    text:
      `
        Из биографии, строчки которой сопровождали картины соответствующих лет, стало ясно, что еврейская девушка русского происхождения, училась в Китае, а потом стала одной из первых основоположниц американского абстракционизма. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageFront: require('../../../../Images/PFT/Objects/Artist_Portray.png'),
    imageBorder: require('../../../../Images/PFT/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 12,
    text:
      `
        «Удивительная Эсфирь. Дитя мира. Успела развестись в 30-е, когда женщин осуждали даже за мысли о подобном».
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 13,
    text:
      `
        Абстрактный стиль девушку не цеплял, но вызывало уважение, с каким теплом здесь относились к наследию Эсфирь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 14,
    text:
      `
        Овдовев спустя несколько лет после второй свадьбы, художница более, чем за тридцать лет так до конца и не оправилась от потери. Зато прославилась, написав и проиллюстрировав собственную детскую книгу.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 502,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    OKMessage: { goTo: 15, image: require('../../../../Images/PFT/Objects/Vocalist_Photo.png'), buttonText: 'Продолжить' },
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 15,
    text:
      `
        Яркий музыкальный зал контрастировал с представлениями Венди о джазе. Девушка воображала уютное помещение с приглушённым светом, раритетную лакированную мебель…
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/PFT/Objects/Vocalist_Photo.png'),
    imageBorder: require('../../../../Images/PFT/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 16,
    text:
      `
        «Ничего себе! Здесь так ярко. На сцене нет ничего кроме инструментов и музыкантов. Где же певица? Ах, вот же она…»
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Smile.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 17,
    text:
      `
        Мультииструменталистка Кармилла Трумэн в столь же солнечном и лаконичном, как стены зала, жёлтом платье забрала внимание каждого слушателя. А современное звучание привело Венди в полный восторг.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 18,
    text:
      `
        «Кто бы мог подумать в пятидесятые, что Литл-Рок станет таким? Расовые проблемы никуда не делись. Но мир точно стал чуточку теплее».
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 19,
    text:
      `
        Музыкальный квартет не отставал от певицы, оттеняя её смелую манеру исполнения мелодичностью. Сместившийся в минорную сторону, акцент мини-концерта, завершился парой блюзовых композиций.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 20,
    text:
      `
        Венди отошла в сторону, чтобы хорошенько обдумать увиденное и услышанное.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 21,
    text:
      `
        Комната в конце коридора неожиданно привлекла внимание — на контрасте с другими помещениями музея она выглядела безлюдной. К тому же, Венди успела заметить раму на стене внутри.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 22,
    text:
      `
        «Может там разместили что-то особенное? Вероятнее, конечно, что экспозицию только готовят к открытию. Было бы интересно рассмотреть её без мельтешащих групп туристов».
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Awared.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 23,
    text:
      `
        Любопытство пересилило детский страх темноты и Венди быстро пересекла коридор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 24,
    text:
      `
        Пройдя внутрь, девушка решила, что всё-таки ошиблась и зашла в помещения для персонала музея — здесь было мрачно. Будто посетителей совсем не ждали.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/PFT/Backgrounds/Gallery.jpg')
  },

  {
    id: 209,
    text:
      `
        Ей открылась небольшая, как келья, комната без окон с одной единственной картиной на стене. Пахло сыростью.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    music: require('../../../../Sounds/PFT/Stress_Theme.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        Подпись мелким шрифтом возле полотна гласила: «Гипнос в окружении даров». На холсте был изображен молодой человек, прекрасный, каким и должен быть древнегреческий Бог.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room.jpg')
  },

  {
    id: 210,
    text:
      `
        «Похоже его написали углём и чем-то ещё». 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Awared.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        Вокруг мужского силуэта краснели, как кровь, цветы. Венди казалось, что взгляд героя картины направлен сквозь неё.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        Ни признаков веселья или глубокой печали на спокойном лице, но оно цепляло как репей… Венди задумалась, почему нигде не указан художник и всё-таки зачем полотно спрятали от гостей галереи.
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room.jpg')
  },

  {
    id: 310,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    beforeBegin: vhs,
    ambient: require('../../../../Sounds/PFT/ManWhisper.mp3'),
    interruptiveFrame: { goTo: 211, timeMS: 3000 },
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Scary.jpg')
  },

  {
    id: 211,
    text:
      `
        Девушку словно молния ударила, когда глаза молодого человека на миг обратились к ней. Теперь его взгляд не был равнодушным. Гримаса боли исказила прекрасные черты.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Scary.jpg')
  },

  {
    id: 28,
    text:
      `
         «Берегись, дитя».
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speakerR: 'Мужчина с картины',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Ancient_Man.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Scary.jpg')
  },

  {
    id: 29,
    text:
      `
        Голос раздавался будто изнутри самой Венди. Не цветы, а крупные пятна крови алыми слезами скатывались по холсту. Девушка отступила назад и зажмурилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    ambient: require('../../../../Sounds/PFT/FastBreath.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Scary.jpg')
  },

  {
    id: 30,
    text:
      `
        Пару секунд ощущались вечностью. Венди боялась, что ещё шаг и она сорвется в призрачную пропасть позади себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    ambient: require('../../../../Sounds/PFT/FastBreath.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Dark.jpg')
  },

  {
    id: 225,
    text:
      `
        «Вдох — выдох... Это лишь мое бурное воображение».
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Awared.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Dark.jpg')
  },

  {
    id: 31,
    text:
      `
        Венди сжала кулаки и заставила себя взглянуть на картину.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Dark.jpg')
  },

  {
    id: 32,
    text:
      `
         Юный красавец и безучастные маки, как и раньше апатично смотрели в никуда.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    ambient: require('.././../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room.jpg')
  },

  {
    id: 230,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    interruptiveFrame: { goTo: 33 },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  },

  {
    id: 33,
    text:
      `
         Венди поспешила на улицу. После подобных эмоций лёгкая осенняя прохлада пришлась кстати.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    music: require('../../../../Sounds/PFT/Calm_Theme.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 34,
    text:
      `
        Учащённое сердцебиение ещё напоминало о пережитом в галерее. Девушка…
      `,
    buttons: [
      {
        text: 'Ощутила тревогу',
        goTo: 35
      },
      {
        text: 'Заинтересовалась случившимся',
        goTo: 38
      }],
    message: 'Героиня может идти по пути «Эфир» и приспосабливаться к обстоятельствам, погружаясь в свой внутренний мир. Или выбрать «Материю» и идти к поставленной цели, не углубляясь в фантазии.',
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 35,
    text:
      `
        «Такие галлюцинации — не очень хорошо. Уже пора делать МРТ?»
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Matter' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 36,
    text:
      `
         «Что со мной не так? Все люди как люди, а я грежу наяву».
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Awared.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 37,
    text:
      `
         «Ещё и такая жуть привиделась».
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Awared.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 38,
    text:
      `
        «Без этих фантазий моя жизнь была бы скучна».
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Smile.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Effect', id: 'Ether' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 39,
    text:
      `
         «И как убого я живу, если выдумки заменили мне путешествия, работу и всё остальное?»
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 40,
    text:
      `
         «Только привиделось ли мне всё это или было на самом деле?»
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Awared.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 41,
    text:
      `
        Венди по привычке представила, что за ней, защищая, словно разумный организм, тянется росток: покрывает пурпурными цветами окна домов, крадётся следом вдоль стен зданий. Почему-то это всегда успокаивало и воодушевляло.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    message: inventoryMessage,
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 42,
    text:
      `
        Разные фантазии с детства сопровождали Венди, утешали в трудную минуту, отвлекали или даже приводили в замешательство, как случилось в галерее.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 43,
    text:
      `
        Являлся ли странный шёпот потусторонней угрозой? Плодом ярких переживаний последних дней?
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 212,
    text:
      `
        Как бы то ни было, сейчас некогда поддаваться эмоциям. Следовало торопиться домой, чтобы порвать с прежней жизнью. Скоро вернётся Виктор, и она должна сделать, что намеревалась, до его прихода.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 213,
    text:
      `
        В заднем кармане джинсов зазвонил телефон, девушка с радостью подняла трубку.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    simple: require('../../../../Sounds/PFT/Ring.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 44,
    text:
      `
         — Привет, Присцилла!
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 214,
    text:
      `
         Присцилла казалась девушкой-праздником всем тем, с кем соприкасалась. И никогда не унывала: ни после неудачных экзаменов, ни после любовных фиаско.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 45,
    text:
      `
        Лишь Венди знала её тёмную сторону. Присцилла могла быть желчной и меланхоличной. Сказывалось непростое детство приятельницы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 46,
    text:
      `
        Но подруги, что редкость, принимали друг друга настоящими.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 47,
    text:
      `
         — О, кто же отвечает мне таким мелодичным голоском? Роковая красотка, которая готова к завоеванию большого города?
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 48,
    text:
      `
         — Присцилла, брось! Мне бы только себя обеспечить для начала. Никаких грандиозных планов нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 49,
    text:
      `
         — А зачем что-то менять, если не пытаться свернуть горы? Скромно и серо получится само собой.
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 215,
    text:
      `
         Присцилла сделала небольшую паузу, после чего её тон стал серьезным:
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 50,
    text:
      `
         — Я просто хочу знать, что ты не передумала. В издательстве ждут.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 51,
    text:
      `
         — Конечно, не передумала! И вообще... Спасибо за помощь.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 216,
    text:
      `
         — Не за что! Заеду за тобой в пять, как договаривались.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 217,
    text:
      `
         После небольшой прогулки через парк, заваленный ворохом пожухлых, но пока ещё ярких в солнечных лучах, листьев, девушку окутала тишина квартиры.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Museum_Sunny.jpg')
  },

  {
    id: 52,
    text:
      `
        Венди положила ключи на полку и это должно было стать последним неприятным звуком на сегодня. Вещи она собрала ещё утром, осталось проверить документы и дождаться подругу.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 53,
    text:
      `
        Не удержавшись от искушения, Венди выдернула из блокнота лист и, размашистым почерком нацарапав на нём <i>«Прощай!»</i>, с энтузиазмом прикрепила на холодильник.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 226,
    text:
      `
        Виктор обожал Эрл Грей и каждый день требовал, чтобы именно этот напиток ожидал его на столе. Терпкий чай с сильным ароматом едва-едва перебивала сладость булочки, которую Венди купила по пути домой.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 54,
    text:
      `
        Боялась ли она своего мужа? До недавних пор нет. Девушка будто не замечала, что он контролирует все сферы её жизни. После свадьбы молодые супруги часто проводили время вместе.
      `,
    buttons: [
      {
        text: 'Вспомнить приятный момент',
        goTo: 55,
        gift: true
      },
      {
        text: 'Не отвлекаться от десерта',
        goTo: 71
      }],
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Viktor.png'),
    ghostSilhouette: true,
    stats: [
      { story: EStoriesEn.PFT, value: 0, category: 'Person', id: 'Viktor' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 55,
    text:
      `
        Когда молодожёны только съехались, Венди сразу полюбила вид из окна гостиной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    message: 'Около 2 лет назад…',
    music: require('../../../../Sounds/PFT/Viktor_Theme.mp3'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Person', id: 'Viktor' }],
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 56,
    text:
      `
        Столько людей вокруг, но никому до тебя нет дела — суета забирает всё внимание прохожих. Надёжный дом стал убежищем для влюблённых. Островок уюта в прахе чужих амбиций.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 57,
    text:
      `
        Однажды вечером девушка настолько сильно прониклась бескрайним небом над городом и лучами заходящего солнца, блуждающими по стёклам, что на глаза невольно навернулись слёзы.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 58,
    text:
      `
        — Ириска, что с тобой? Всё хорошо?
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Viktor.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 59,
    text:
      `
        — Я в порядке, просто… Здесь так спокойно.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_GreenDress.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 60,
    text:
      `
        — Уф, ты меня даже напугала немного. Что я должен подумать, когда моя красавица чуть ли не рыдает посреди гостиной?
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Viktor_Smile.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 61,
    text:
      `
        Согревая любимую со спины, Виктор стоял так какое-то время, глядя на город. Уверенные объятия мужчины, погасив хрупкий лирический настрой, пробудили желание.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 62,
    text:
      `
        Девушка будто случайно откинула голову назад так, чтобы аромат её волос коснулся Виктора. Почувствовав тёплое дыхание мужчины на своей шее, Венди глубоко и медленно вздохнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 63,
    text:
      `
        Хотелось увлечь Виктора без слов, заставить потерять контроль. Или самообладание начинала терять она сама?
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 64,
    text:
      `
        Дразнящие сильные пальцы крепче сжали девичьи плечи, отчего по телу прокатилась волна мурашек. Виктор определённо был хорошим игроком.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 65,
    text:
      `
        Его влажный поцелуй в шею стёр последнюю попытку притворства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 66,
    text:
      `
         «Я не обольстительница, так легко сдаюсь… Да и какая разница?»
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_GreenDress_Confused.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 67,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/PFT/Cutscenes/WendyAndViktor.mp4'), goTo: 68 },
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 68,
    text:
      `
        Обернувшись к Виктору, девушка прильнула к его губам. Мужчине никогда не требовалось повторять дважды.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 69,
    text:
      `
        Он охотно ответил на ласку, прижимая Венди к панорамному окну… Безоговорочная капитуляция.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 70,
    text:
      `
        Это был тот случай, когда вкус поражения намного слаще победы.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 71,
    text:
      `
        Незамысловатый десерт радовал как никогда, но мысли о прошлом продолжали витать в воздухе.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 72,
    text:
      `
        Венди любила период романтики и страсти, который последовал после свадьбы, сильные руки мужчины и нежность... Тогда было совсем не заметно, как её и без того немногочисленные знакомства свелись к нулю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    beforeBegin: whiteFlash,
    message: 'После свадьбы, год назад. Счастливый брак? ',
    music: require('../../../../Sounds/PFT/Calm_Theme.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 73,
    text:
      `
        А потом Виктор предложил любимой уволиться — ему не хватало внимания девушки с её долгими поездками на работу, которая находилась на другом конце города. Вот тут в жизнь Венди снова ворвалась старая подруга.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 218,
    text:
      `
        За три года до этого Присцилла бросила учёбу и скрылась ото всех. Девушки начали снова общаться после звонка вернувшейся. Странно, но Присцилла удивлялась обычным для Венди вещам.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 219,
    text:
      `
        — Почему Виктору лучше не говорить, что мы встретились прошлым вечером?
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 74,
    text:
      `
         — Твой муж против, что я звоню после семи часов?
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 75,
    text:
      `
        — Из-за чего, говоришь, ты бросила любимую работу?
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 76,
    text:
      `
        Неприятные вопросы наконец обратили на себя внимание. Венди старалась не думать о плохом, ведь муж такой внимательный и заботливый, и все ограничения были для её же блага. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 77,
    text:
      `
        Виктору нужно знать, где она проводит время, для безопасности. Присциллу он сочтёт непостоянной, поэтому Венди какое-то время скрывала подругу. Но уверенность в правоте мужчины медленно таяла.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 78,
    text:
      `
         Это случилось спустя полгода после возвращения в её жизнь Присциллы…
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    music: require('../../../../Sounds/PFT/Stress_Theme.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 79,
    text:
      `
        Сначала девушка снова встретилась с подругой в тот вечер, а Виктор, как обычно, начал отчитывать её по возвращении.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 80,
    text:
      `
        В этот раз не за общение с «какой-то взбалмошной авантюристкой, которая дурно на неё влияет», конечно, нет. Просто заваренный Венди чай сегодня был особенно горьким, а приготовленный утром ужин пришлось подогревать, в гостиной пыль…
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 81,
    text:
      `
        Девушка остановилась на полпути в коридор и резко развернулась к Виктору.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 82,
    text:
      `
        — Не смей. Говорить со мной. В таком тоне.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_GreenDress_Angry.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 83,
    text:
      `
        Венди сначала даже не узнала свой голос. Уверенный, жуткий как шипение. Оказывается, она так умеет. Виктор неровно улыбнулся. Он подошёл ближе и хотел положить руки на хрупкие плечи в покровительственном жесте.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 84,
    text:
      `
        — Я же говорил, что эта Присцилла...
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speakerR: 'Виктор',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Viktor.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 85,
    text:
      `
         — Не трогай меня!
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_GreenDress_Angry.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 86,
    text:
      `
        Девушка с вызовом подалась вперёд и тут же ощутила, как запылала щека. Пощёчина оказалась столь сильной, что непрошенная слеза слабости скатилась по подбородку.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    simple: require('../../../../Sounds/PFT/Slap.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 87,
    text:
      `
        Венди вернула взгляд на Виктора и... Ничего перед собой не увидела. Поток образов поглотил все мысли и чувства.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 88,
    text:
      `
        «Что происходит? Он меня убил?»
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    music: require('../../../../Sounds/PFT/Tale_Theme.mp3'),
    speakerL: 'Венди',
    beforeBegin: vhs,
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_GreenDress.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 89,
    text:
      `
        Ни боли, ни страха. В этом месте у Венди не было ничего — девушка чувствовала, что ещё не принадлежала ему. Но пёстрые обрывки разговоров всё больше цепляли слух.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 90,
    text:
      `
        «Кажется, это... подобие рынка на улице?»
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_GreenDress.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 91,
    text:
      `
        Торговки перекрикивали друг друга, зазывая проходящих мимо. Даже мощёная старым камнем дорога мелькнула под ногами.  
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 92,
    text:
      `
        Вдоль неё, широкой, будто разбивающей поселение надвое, теснились заваленные всякой снедью телеги. Редкий прохожий мог проскочить незамеченным, не распотрошив свой кошель.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Medieval.jpg')
  },

  {
    id: 93,
    text:
      `
        Странное видение позволило Венди подняться над землёй и рассмотреть город, обрамлённый лесами. Парить в небе было совсем не страшно, будто во сне.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Sky_Clouds.jpg')
  },

  {
    id: 94,
    text:
      `
        Вдруг над головой пронеслась какая-то тень, хлопнув крыльями у самого лица девушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Sky_Clouds.jpg')
  },

  {
    id: 95,
    text:
      `
        «Птица?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_GreenDress.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/PFT/Backgrounds/Sky_Clouds.jpg')
  },

  {
    id: 96,
    text:
      `
        Инстинктивно обернувшись прямо в воздухе вслед испарившемуся крылатому созданию, Венди увидела высокую башню, которая неожиданно выбивалась из общего малоэтажного пейзажа средневекового городка.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Sky_Clouds.jpg')
  },

  {
    id: 97,
    text:
      `
        Словно из сказки, высокое здание приковывало взгляд, но местные проходили мимо, давно к нему привыкнув. Не обращали горожане внимания и на девушку, парящую над их головами.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Sky_Clouds.jpg')
  },

  {
    id: 98,
    text:
      `
        Внезапно возникшая то ли тянущая тревога, то ли захлестнувшее предвкушение заставили Венди приземлиться…
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Sky_Clouds.jpg')
  },

  {
    id: 99,
    text:
      `
        … Когда из мира грёз её вернули отчаянные объятия Виктора. Он со слезами на глазах просил прощения. Девушка с недоумением уставилась на мужа, осторожно дотрагиваясь до порозовевшей от удара щеки.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    beforeBegin: whiteFlash,
    music: require('../../../../Sounds/PFT/Stress_Theme.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 100,
    text:
      `
        Другие чувства постепенно вернулись. Боль, обида. Виктор сказал, что после «инцидента», иначе говоря после пощёчины, она будто оцепенела и ни на что не реагировала около четверти часа.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 101,
    text:
      `
        Мужчина выглядел напуганным. Очевидно не своим поступком, а её реакцией. Тогда Венди и решила покинуть мужа.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 102,
    text:
      `
        Неприятные воспоминания вытеснило тревожное чувство, иголкой впившееся под кожу, когда девушка уже расправилась с выпечкой. Рядом с чайником Венди заметила педантично сложенную бумажку.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    message: 'Настоящее. Время уходить.',
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 103,
    text:
      `
        «Откуда всё-таки чай?.. Я ведь впервые не заварила его сегодня».
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Awared.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 104,
    text:
      `
        Эта мысль запоздало всплыла в голове, и рука сама потянулась к записке.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 105,
    text:
      `
         «Привет, детка! Завтрак я готовил сам, надеюсь, Эрл Грей получился в меру крепким, <i>как ты любишь</i>».
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    music: require('.././../../../Sounds/Common/Silence.mp3'),
    stats: [
      { story: EStoriesEn.PFT, value: 1, category: 'Item', id: 'Letter' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 106,
    text:
      `
        Следующие строчки на пару минут расплылись перед глазами из-за нахлынувшей паники. Эта записка всё изменила.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 107,
    text:
      `
        Когда, как и обещала, Присцилла поднялась в квартиру, Венди открыла дверь чуть позже, чем требовалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    music: require('../../../../Sounds/PFT/Stress_Theme.mp3'),
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    stats: [
      { story: EStoriesEn.PFT, value: 0, category: 'Person', id: 'Priscilla' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 108,
    text:
      `
        Яркая блондинка хотела поддержать девушку приветственными объятиями.
      `,
    buttons: [
      {
        text: 'Отстраниться',
        goTo: 109
      },
      {
        text: 'Обнять в ответ',
        goTo: 111
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 109,
    text:
      `
        «Сейчас не время для проявления чувств».
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 110,
    text:
      `
        «Не чувствую необходимости. Надо же, казалось, мы были так близки раньше».
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 111,
    text:
      `
        «Присцилла ехала издалека. Ужасно грубым будет проигнорировать её».
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    stats: [
      { story: EStoriesEn.PFT, value: 1, category: 'Choice', id: 'HugBack' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 112,
    text:
      `
        «Конечно, мы не так близки как раньше. Но мне бы не хотелось разрывать наши узы».
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 113,
    text:
      `
        Подруги молча прошли в гостиную.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 114,
    text:
      `
        — Присцилла, я хочу поговорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Awared.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 115,
    text:
      `
        — Я думала, что мы сразу выдвигаемся, как приеду...
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 116,
    text:
      `
        — Где я буду жить в Финиксе? Это не дает мне покоя.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 117,
    text:
      `
        — Раз тебе это нужно обсудить сейчас, то... Мы ведь обговаривали раньше. Сначала у меня, дальше посмотрим.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 118,
    text:
      `
        — То есть я должна сесть к тебе на шею, а потом съехать, если у тебя вдруг неожиданно поменяются планы?
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 119,
    text:
      `
        Присцилла изо всех сил старалась пропустить намёк мимо ушей.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 120,
    text:
      `
         — Нет. У тебя ведь теперь есть работа. Венди, что-то случилось?
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 121,
    text:
      `
         — Работа, если меня утвердят после встречи, о которой ты договорилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 122,
    text:
      `
         — Да, не вижу в этом проблемы. Ты хороший переводчик.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 123,
    text:
      `
         — Но я долго не практиковалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 124,
    text:
      `
         — Венди, ты переводишь с японского! У меня на работе не кретины, чтобы разбрасываться такими кадрами. Ты способная и успешно доучилась в отличие от меня. Ты чего-то боишься?
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 125,
    text:
      `
        — Ага. Боюсь, что ты снова пропадёшь и мне придётся тащить аренду в Финиксе самой.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 126,
    text:
      `
        Присцилла изменилась в лице. Ей тяжело давался контроль эмоций. Венди струсила? Передумала? Почему она надавила на самое больное? После школы Присцилла действительно сбежала из дома, а позже ... 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 127,
    text:
      `
        Да, в её жизни был неприятный период. Побег от самой себя и проблем стал не лучшим решением. Но теперь Присцилла осела в Финиксе и никуда не собиралась уезжать. Жизнь вошла в мирное русло.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 128,
    text:
      `
        — Зачем ты так... Венди, давай собираться, время не ждёт.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla_Annoyed.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 129,
    text:
      `
         — Тебе не кажется, что мы ещё не закончили? Не стоит строить из себя спасительницу.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Angry.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 130,
    text:
      `
         — Видимо ты хочешь сказать что-то ещё. Продолжай.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 131,
    text:
      `
         — Сколько мы знакомы — ты всегда всё решаешь. Кому, с кем и где лучше. Может не надо делать это за меня?
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 132,
    text:
      `
        Присцилла ядовито усмехнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 133,
    text:
      `
         — Мне казалось, что ты сама хотела свалить отсюда подальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla_Smirk.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 134,
    text:
      `
        Венди демонстративно обвела взглядом чистую гостиную в стиле ар-деко.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 135,
    text:
      `
        — Уйти отсюда? Здесь, в Литл-Роке, у меня есть всё. Хороший дом, любящий муж. А что будет в Финиксе? Долги?
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 136,
    text:
      `
        — Что ты такое говоришь?! Виктор давит на тебя…
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 137,
    text:
      `
        Венди на миг перестала дышать, собираясь сказать следующее:
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 138,
    text:
      `
        — Ты давишь не меньше. Свою жизнь не построила, а мою хочешь спасти? Обойдусь.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Angry.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 139,
    text:
      `
        Темнеющее небо за окном предвещало непогоду. Венди почувствовала недомогание. Весь этот разговор вызывал у неё мерзкий вкус во рту. Или не в перепалке дело?
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 140,
    text:
      `
        В глазах будто бы стало меньше света и девушка присела на диван. Последние капли самообладания и горечь обиды заставили Присциллу задать вопрос:
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 141,
    text:
      `
        — Ты окончательно всё решила?
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speakerR: 'Присцилла',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Priscilla_Annoyed.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 142,
    text:
      `
        — Да. Тебе пора.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 143,
    text:
      `
        Не пытаясь больше переубедить подругу, Присцилла молча вышла за дверь, намереваясь навсегда покинуть её драгоценную квартиру в Литл-Роке. Впереди был долгий путь домой, который займёт почти все выходные.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    simple: require('../../../../Sounds/PFT/DoorSlap.mp3'),
    music: require('.././../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Room.jpg')
  },

  {
    id: 144,
    text:
      `
        Венди захотелось освежить лицо и она поплелась в ванную, покосившись на пару чемоданов в коридоре.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 145,
    text:
      `
        «Кажется, Присцилла их не заметила. Это хорошо».
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 146,
    text:
      `
        Венди знала подругу — в гневе та не видела перед собой ничего. Девушку в очередной раз кольнула совесть за то, как она обошлась с единственным человеком, который был ей близок после смерти родителей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 147,
    text:
      `
        Или с почти единственным. Ведь есть ещё Виктор. В её сердце и мыслях. В прошлом и настоящем.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    music: require('../../../../Sounds/PFT/Stress_Theme.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 148,
    text:
      `
        Ей так хотелось, чтобы его не было в будущем. Ведь Виктор не просто давил, как мягко выразилась Присцилла, он давно управлял жизнью Венди.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 149,
    text:
      `
        Ласковый и нежный, дома он мог быть совершенно другим. Грубым, требовательным, страстным, горячим...
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 150,
    text:
      `
         «Венди, остановись. Этот человек ударил тебя. Если продолжишь в том же духе, сделаешь себе только хуже».
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Eyes.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 151,
    text:
      `
        Решившись сбежать, девушка корила себя за подобные проявления слабости в отношении Виктора. Даже оставить мужа открыто Венди боялась. Не грубой мужской силы, но чего-то более изощрённого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 152,
    text:
      `
        «Присцилла успела уйти, хорошо. Но… Правильно ли я с ней поступила?»
      `,
    buttons: [
      {
        text: 'Да!',
        goTo: 153
      },
      {
        text: 'Нет!',
        goTo: 155
      },
      {
        text: 'Плевать…',
        goTo: 161
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 153,
    text:
      `
        «Какие бы добрые намерения ни были у Присциллы, она перегнула палку со своим давлением! С одним тираном я уже хорошо знакома».
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    stats: [
      { story: EStoriesEn.PFT, value: -1, category: 'Person', id: 'Priscilla' },
      { story: EStoriesEn.PFT, value: 1, category: 'Choice', id: 'SayYes' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 154,
    text:
      `
        «К тому же, это всё для её же блага. Нужно подумать о себе… Как же кружится голова».
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 155,
    text:
      `
        «Слишком жестоко… Задела её за живое».
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Sorry.png'),
    stats: [
      { story: EStoriesEn.PFT, value: +1, category: 'Person', id: 'Priscilla' },
      { story: EStoriesEn.PFT, value: 1, category: 'Choice', id: 'SayNo' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 156,
    text:
      `
        «Но если бы ни это, Присцилла бы докопалась до истины, узнала, что я <i>не могу</i> уехать. Что тогда могло случиться?»
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 157,
    text:
      `
        «Еле стою, о чём я ещё переживаю?»
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 158,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.PFT, category: 'Choice', id: 'HugBack' }) <= 0 && statsManager.get({ story: EStoriesEn.PFT, category: 'Choice', id: 'SayYes' }) >= 1
        },
        goTo: 159
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.PFT, category: 'Choice', id: 'HugBack' }) >= 1 && statsManager.get({ story: EStoriesEn.PFT, category: 'Choice', id: 'SayNo' }) >= 1
        },
        goTo: 160
      },
      {
        condition: () => {
          return true
        },
        goTo: 159
      }
    ],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 159,
    text:
      `
        «Не нужно гнаться по следам того, что уже утрачено, как говорят».
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 160,
    text:
      `
       Вода не принесла облегчения, Венди вернулась в гостиную. Мысли перекатывались в голове как тяжелые камни. После ссоры накрыло опустошение.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    message: 'Вы хотите сохранять связи, несмотря ни на что.',
    achievement: { story: EStoriesEn.PFT, name: 'FriendshipKeeper' },
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 161,
    text:
      `
        «Мне слишком плохо, чтобы анализировать сказанное на эмоциях, тем более из лучших побуждений. Я сделала всё, что могла».
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy.png'),
    stats: [
      { story: EStoriesEn.PFT, value: 1, category: 'Choice', id: 'SayIDontCare' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 162,
    text:
      `
        Вода не принесла облегчения, Венди вернулась в гостиную. Мысли перекатывались в голове как тяжелые камни. После ссоры накрыло опустошение.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 163,
    text:
      `
        Когда в замочной скважине провернулся ключ, Венди резко вскочила со своего места, но все звуки вокруг будто поглотил вакуум. Паркет приблизился к лицу, а голову окутала оглушающая мягкая тьма.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Viktor_Corridor.jpg')
  },

  {
    id: 164,
    text:
      `
        Время от времени Венди ощущала, что её тело хватали то за руки, то за ноги, куда-то переносили. Непривычное странное чувство...
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    music: require('.././../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Dark.jpg')
  },

  {
    id: 165,
    text:
      `
        Придя в сознание, девушка обнаружила себя, лежащей на узкой кровати. Свежее постельное бельё было идеально белым, но неприятно жёстким к лицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    music: require('../../../../Sounds/PFT/Hospital_Theme.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber_Blurred.jpg')
  },

  {
    id: 166,
    text:
      `
        Краем глаза девушка заметила, что на ней новая светлая одежда.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber_Blurred.jpg')
  },

  {
    id: 167,
    text:
      `
        «Виктор переодел меня? Какая я разбитая, ещё и во рту пересохло, голова раскалывается…»
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber_Blurred.jpg')
  },

  {
    id: 168,
    text:
      `
        Венди попыталась понять в какую именно комнату после обморока её перенёс муж.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber_Blurred.jpg')
  },

  {
    id: 169,
    text:
      `
        В том, что в квартиру вернулся именно он перед тем, как она отключилась, девушка не сомневалась. В голову лезла какая-то бессмыслица:
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber_Blurred.jpg')
  },

  {
    id: 170,
    text:
      `
         «Терпеть не могу жёсткое бельё после стирки, поэтому всегда использую кондиционер... Кроме меня здесь некому стирать... Что за?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber_Blurred.jpg')
  },

  {
    id: 171,
    text:
      `
        Венди наконец поняла, что находится где угодно, но не дома. Насторожилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber_Blurred.jpg')
  },

  {
    id: 172,
    text:
      `
        «Ведь совсем недавно я сама хотела уйти, а теперь страшно».
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber_Blurred.jpg')
  },

  {
    id: 173,
    text:
      `
        Светлые пустые стены, окошко, из которого струился надоедливый дневной свет... Венди поморщилась от недолгой рези в глазах. Кажется, в этой комнатке две двери: одна — наружу, другая — в уборную...
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 174,
    text:
      `
        «Для гостиницы слишком просто. Точно, я же свалилась в обморок вчера! Наверное Виктор вызвал скорую или отвёз меня в больницу!»
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 175,
    text:
      `
        Стало как-то неловко перед мужем, ведь Венди хотела уйти, а вместо этого он похоже спас её.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 176,
    text:
      `
        Девушка попыталась приподняться на локтях, но у неё ничего не вышло — руки были крепко пристёгнуты к кровати кожаными ремнями.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 177,
    text:
      `
        Настоящая паника накрыла Венди и она попыталась вырваться. Совсем рядом возникла хрупкая фигурка медсестры.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 178,
    text:
      `
        — Потерпи, милая! Сейчас.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speakerR: 'Медсестра',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Debora.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 179,
    text:
      `
        Уверенный тон и медвежья хватка удивляли. Венди уставилась на девушку, которая сделала ей укол, даже не посмотрев в лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 180,
    text:
      `
        «Ей наплевать...»
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital_Eyes.png'),
    music: require('.././../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Picture_Room_Dark.jpg')
  },

  {
    id: 181,
    text:
      `
        Снова проснувшись, Венди стала понимать, где оказалась. Это злило и ужасало одновременно. В наивной попытке отогнать от себя губительные чувства, девушка зажмурилась.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    music: require('../../../../Sounds/PFT/Stress_Theme.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 182,
    text:
      `
        Венди хотела провалиться в свои фантазии, чтобы стало легче, но вдруг в палате раздался знакомый голос.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 183,
    text:
      `
        — Доброе утро. Выспалась? Если продолжишь буйствовать, то придётся переборщить с психотропными препаратами. Опять. Ты хочешь мыслить ясно?
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 184,
    text:
      `
         «Чёртова Шэрон...»
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 185,
    text:
      `
        Венди прикусила щеку изнутри и отвела взгляд от женщины, которая ждала её реакции.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    stats: [
      { story: EStoriesEn.PFT, value: 0, category: 'Person', id: 'Sharon' }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 186,
    text:
      `
        Шэрон было около сорока пяти, что не мешало ей выглядеть привлекательно. Худые руки, спрятанные в карманы белого халата, пытливый усталый взгляд. Огненная копна волос, тонкие губы.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 187,
    text:
      `
        Если кто-то и ненавидел Венди, то несомненно Шэрон. Впрочем, это чувство теперь было взаимным.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 188,
    text:
      `
        — Даже не поздоровалась... Видимо всё ещё хуже, чем я думала. Ну, что же. Мой долг уведомить тебя о том, что происходит. И помочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 189,
    text:
      `
        Венди могла поклясться, что Шэрон ухмыльнулась, проговаривая последнее слово, хоть и не видела этого. Женщина продолжила более участливым голосом.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 190,
    text:
      `
        — Ты поступила к нам с предварительными диагнозами: дистимия и суицидальная идеация. Суть в том, что ты можешь навредить себе. Поэтому привязана. Как только я пойму, что ты безопасна для себя и других, надобность в ремнях отпадет.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Sharon_Arrogant.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 191,
    text:
      `
        — Соседей в палате нет. Пока медсестры позаботятся о тебе, но рассчитываю, что ты сможешь обслуживать себя сама. Меня больше беспокоят твои фантазии. Виктор сказал, что из-за них ты будто выпадаешь из реальности.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 192,
    text:
      `
        — …
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 193,
    text:
      `
        Шэрон ждала ответа, но Венди не стала доставлять ей такую радость, потому что знала общую черту Пирсов — они терпеть не могли пренебрежения в свой адрес.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 220,
    text:
      `
        — Управлять этим заведением работа поважнее, чем вытирать сопли выскочке вроде тебя. Хотела привлечь внимание Виктора и наглоталась снотворного? Венди, я вижу тебя насквозь!
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 194,
    text:
      `
        — Он почему-то любит тебя. Жалкую пиявку, которая не работает и даже не родила ребёнка! Брат сказал, ты шантажировала его своим уходом. Неблагодарная дрянь! Что тебя могло не устраивать?! 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Sharon.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 195,
    text:
      `
        Главврач поняла, что перешла на личности и затихла, нервно поправляя халат. Обычно она вела себя профессионально, но сейчас не жалела о сказанном.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 196,
    text:
      `
        Внутри Венди бушевала ярость, которая требовала выхода, но из-за лекарств новоявленная пациентка выглядела слишком отстранённой в нынешних обстоятельствах.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 197,
    text:
      `
        Девушка пыталась вникнуть в услышанное.
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 198,
    text:
      `
        «Мой обморок был не случаен... Всё дело в чае! Виктор в него подсыпал снотворное?»
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital_Anger.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 199,
    text:
      `
        «Он ведь откуда-то узнал, что собираюсь сбежать. А когда я потеряла сознание, выдал это за попытку суицида. Ещё и шантаж какой-то придумал».
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 200,
    text:
      `
        «Моя записка на холодильнике подтверждает его слова... Глупая, какая же я глупая!»
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital_Anger.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 201,
    text:
      `
        «Виктор не дал мне просто уйти и упёк сюда... Под крыло своей сестрицы. Шэрон всегда считала, что я не достойна его — нет тюремщика лучше. Эта фурия ни за что мне не поверит».
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital_Alert.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 202,
    text:
      `
        Венди вспомнила безразличие медсестры, ставившей накануне укол.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 203,
    text:
      `
        «Здесь везде её подчинённые... Мне вообще никто не поверит. Я теперь для них умалишённая».
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speakerL: 'Венди',
    fullscreenObjectL: require('../../../../Images/PFT/Persons/Wendy_Hospital.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 204,
    text:
      `
        Сейчас в руках Шэрон была возможность сделать жизнь Венди ещё хуже. Тишина в палате стоила обеим неимоверных усилий.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 205,
    text:
      `
        Не дождавшись ответа, Шэрон направилась к выходу из палаты со словами:
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 206,
    text:
      `
         — Добро пожаловать, в «Психиатрическую клинику святого Вита»!
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speakerR: 'Шэрон',
    fullscreenObjectR: require('../../../../Images/PFT/Persons/Sharon_Arrogant.png'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 207,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/PFT/Cutscenes/OnTheBed.mp4'), goTo: 300 },
    music: require('.././../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/PFT/Backgrounds/Chamber.jpg')
  },

  {
    id: 300,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      setTimeout(() => {
        saveEndProgress('PFT', 'Глава 1', 'Часть 1', '0')
      }, 5000)
    },
    achievement: { story: EStoriesEn.PFT, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/UI/background_black.jpg')
  }
])
