import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { blackFlash, redFlash } from '../../../../Components/Slide/Slide'
import { firstChoiceMessage } from '../../../../Utils/textConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.UA, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        EVE-13C жила, следуя этому постулату. Дралась, терпела эксперименты, жгущие тело, и молча переносила все, что придумывал Доктор Лагард.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: 'Первое правило Солдата: Защищай, убивай, умирай',
    music: require('../../../../Media/Audio/UA/Alert_Theme.mp3'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 1,
    text:
      `
        И на вопрос «почему» она ответит просто: верила.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        Верила в ту идею, которую он в нее вкладывал вместе с очередной ампулой кислоты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    message: 'Нажмите на нижней панели стрелочку, чтобы посмотреть текст предыдущего слайда',
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        «Быть Солдатом — это честь. Быть Возвышенным Солдатом — повод благодарить своего создателя верной службой». 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'EVE-13C',
    stats: [{ story: EStoriesEn.UA, value: 0, category: 'Person', id: 'Eve' }],
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        Дом Отреченных стал ее миром. Местом, за пределы которого она не выходила вот уже шестнадцать лет. Но выйти наружу ей было необходимо для исполнения цели Солдата. Ведь без этого не будет и смысла жить.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 5,
    text:
      `
        «Пятьдесят восемь... Пятьдесят девять... Пять часов восемь минут». 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        В ее комнате не было часов. Здесь вообще не было ничего, кроме кровати, раковины, унитаза и плаката с основными правилами Солдата.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        За металлической дверью звучали сиплые вздохи.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        «Надзиратель Лоуренс. Пересменка у него в шесть утра. На завтрак нас поднимут в семь. Операция в два часа дня. Еще... Девять часов».
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'EVE-13C ',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 9,
    text:
      `
        Девять часов до ее Вознесения. До последнего этапа в становлении Солдатом. Из нее сделают совершенство. Идеального человека, отринувшего слабую плоть и хилые кости.
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 10,
    text:
      `
        «Надо попросить у Лагарда поставить сначала энзоскелет. И клинки. Чтобы после первой модификации быть готовой к работе».
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    message: 'Энзоскелет — имплант, обеспечивающий механическое укрепление позвоночника человека. Обычно применяется в целях снижения нагрузки и увеличения емкости организма для установки дополнительных модификаций и имплантов',
    speaker: 'EVE-13C ',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        Солдат EVE-13C мечтательно вздохнула и подтянула колени к груди, рассматривая руки. Синтетическая кожа была слишком ровной, идеально гладкой, непривычной. Не было родных бугристых шрамов, черных язв, ожогов и гниющих линий порезов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        «Лагард сказал, что моя новая внешность соответствует понятию идеала».
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        Она провела рукой по белым длинным волосам. Тоже новые. Как и замененные глаза, поскольку старые после экспериментов вышли из строя.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 14,
    text:
      `
        Лагард не хотел видеть своего любимого Солдата слепым и беспомощным. Поэтому первый этап модификации EVE-13C прошла раньше остальных.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 15,
    text:
      `
        Вот только полностью оценить всю работу она не могла — зеркал не было, стеклянных поверхностей тоже. А металлическая тарелка, покрытая царапинами и остатками еды, плохо отражала. Скорее искажала.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 16,
    text:
      `
        Утонув в размышлениях о своем будущем, предстоящей работе и, конечно же, знакомстве с внешним миром, Солдат не заметила, как погрузилась в дрему.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 17,
    text:
      `
        Но ненадолго.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 18,
    text:
      `
        Услышав первый хлопок, она подскочила на матрасе.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    stats: [{ story: EStoriesEn.UA, value: 100, category: 'Effect', id: 'Health' }],
    simple: require('../../../../Media/Audio/UA/1Shot.mp3'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 19,
    text:
      `
        «Оружие. Стреляют. Коридор. Трижды».
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    simple: require('../../../../Media/Audio/UA/3Shots.mp3'),
    music: require('../../../../Media/Audio/UA/Fight_Theme.mp3'),
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 20,
    text:
      `
        Мозг обрабатывал внешние раздражители молниеносно. Тело отвечало на них быстрее, чем импульс успевал пробежать по нейронным связям.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 21,
    text:
      `
        EVE-13C одним быстрым движением скатилась с кровати; приняла боевую стойку, задержала дыхание, пытаясь оценить обстановку.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 22,
    text:
      `
        «Еще пять выстрелов. Ближе».
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    simple: require('../../../../Media/Audio/UA/5Shots.mp3'),
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 23,
    text:
      `
        «Ругань. Топот — слышу двоих. Упало тело. Неужели Надзиратель?!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    simple: require('../../../../Media/Audio/UA/BodySounds.mp3'),
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 24,
    text:
      `
        Она оглянулась в поисках хоть какого-то оружия. Инстинкт бойца кричал: против огнестрела с голыми руками идти чистое самоубийство. Даже подготовленному Солдату.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 25,
    text:
      `
        Комната слишком мала, чтобы увернуться. Недостаточно узкая, чтобы за один шаг достать до стены. И чрезвычайно пуста для того, чтобы противостоять человеку с оружием.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 26,
    text:
      `
        Металлическая перекладина неохотно вырывалась из кровати. Голоса остановились напротив двери, и слова теперь были различимы.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 27,
    text:
      `
        Пятерых на этом этаже взяли. Наши сверху зачищают остальных. Здесь еще восемь. Ты там долго?!
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 28,
    text:
      `
        На каждой двери свое собственное шифрование. Нужно подбирать заново. Не гунди под ухо!
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Цель №2',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_02.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 29,
    text:
      `
        «Диверсия? Нападение? Кто эти люди, и зачем им мы?»
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    message: firstChoiceMessage,
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 30,
    text:
      `
        Что делать?
      `,
    buttons: [
      {
        text: 'Подойти к двери',
        goTo: 31
      },
      {
        text: 'Занять выгодную позицию',
        goTo: 38
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 31,
    text:
      `
        Делать свое положение еще более уязвимым означало сдаться без боя.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    stats: [{ story: EStoriesEn.UA, category: 'Choice', id: 'ComeToDoor', value: 1 }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 32,
    text:
      `
        Солдат за один шаг почти прижалась к двери, оставив немного места для маневра. Как только раздался свист пневматики, EVE-13C поняла:
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 33,
    text:
      `
        «Пора».
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 34,
    text:
      `
        Едва в проеме начала виднеться часть тела Цели, Солдат просунула арматуру в образовавшуюся щель. Несколько раз вслепую ударила, ткнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 35,
    text:
      `
        Судя по сопротивлению на том конце — пару раз попала. А если взять в расчет раздавшиеся с той стороны ругань и выкрики — попала больно.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 36,
    text:
      `
        Но это был максимум, на который она была способна в данной ситуации.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 37,
    text:
      `
        Дверь неминуемо открылась, являя из себя тяжело дышащую Цель. Брови сдвинуты к переносице, крылья носа раздуваются — он был явно зол.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 38,
    text:
      `
        Занять выгодную позицию здесь было невозможно. Элементом неожиданности могло послужить только падение с потолка. Но до него не добраться.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 39,
    text:
      `
        «Зацепиться не за что».
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 40,
    text:
      `
        Глубокий вдох, перехватить арматуру, расставить ноги шире. Она готова к бою, даже если на бой это будет мало похоже.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 41,
    text:
      `
        Металлическая дверь со свистом пневматики отъехала в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 42,
    text:
      `
        Арматура холодила руки. Пульс, сначала шедший ровно, внезапно ускорился. Красный флажок, означающий, что сейчас нужно отстаивать свою жизнь. Или быть убитой.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 44,
    text:
      `
        Стоять. Руки за голову. И выброси свою палку! Живо!
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 45,
    text:
      `
        Ее взяли на прицел в ту же секунду. EVE-13C осторожно шагнула назад, чтобы иметь обзор на коридор.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 46,
    text:
      `
        «Двое. Стены в крови. Отверстия от пуль. Надзирателей нет. Где Лагард?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 47,
    text:
      `
        Паника вгрызлась в виски. Первое правило требовало защищать своего Хозяина, убивать ради своего Хозяина, умирать во имя своего Хозяина.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 48,
    text:
      `
        Но без прямого приказа все это не имело никакого смысла. И сейчас нужно защитить именно себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 49,
    text:
      `
        Ты меня слышала?! Железку на землю, сама руки за голову!
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 50,
    text:
      `
        Пуля прошила бетон около напряженных ног, взорвала его серой крошкой пыли. EVE-13C оскалилась, пригнулась ниже, собирая все свое тело в одну тугую пружину.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 51,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ComeToDoor' }) >= 1
        },
        goTo: 52
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'ComeToDoor' }) <= 0
        },
        goTo: 56
      }
    ],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 52,
    text:
      `
        Девушка впилась взглядом в человека с оружием. Нездоровый цвет лица, нервно бегающие глаза, влажный от пота лоб и шея. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 53,
    text:
      `
        «Нервничает. Не знает, что делать при непослушании. Первый раз на подобном задании?»
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 54,
    text:
      `
        Солдат-13 прищурилась и присмотрелась к оружию. Дуло пистолета дрожало, на тыльной стороне ладони горел узкий красный след.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 55,
    text:
      `
        «Правая рука. Видимо, туда попала арматурой».
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 56,
    text:
      `
        Девушка впилась взглядом в человека с оружием. Нездоровый цвет лица, нервно бегающие глаза, влажный от пота лоб и шея. Наверное, так выглядят люди, вышедшие первый раз на задание?
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 57,
    text:
      `
        «Какая-то банда смогла напасть на дом Отреченных? На самое защищенное место, как говорил Лагард? Не верю».
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 58,
    text:
      `
        Но на размышления ей времени не давали.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 59,
    text:
      `
        Терпение у нарушителя спокойствия заканчивалось молниеносно. Еще выстрел — пара сантиметров и отверстие было бы в ее босой ступне.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 60,
    text:
      `
        На землю! Живо!
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 61,
    text:
      `
        «Оптимальным вариантом будет…»
      `,
    buttons: [
      {
        text: 'Подчиниться',
        goTo: 62
      },
      {
        text: 'Сопротивляться',
        goTo: 64
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 62,
    text:
      `
        Девушка с явным нежеланием расцепила пальцы и выпустила арматуру. Не убивают, значит, нужна. А лезть под пули без шанса узнать, что с Лагардом — глупо. Защита Хозяина важнее. Либо отмщение за его смерть.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    stats: [{ story: EStoriesEn.UA, category: 'Choice', id: 'Obey', value: 1 }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 63,
    text:
      `
        Молодец. Будь хорошей и послушной девкой. Может быть, тогда я заберу тебя себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 64,
    text:
      `
        Действовать надо было быстро.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 65,
    text:
      `
        «Разобраться в несколько ударов, пока вторая Цель не пришла на подмогу».
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 66,
    text:
      `
        Солдат метила в дрожащий пистолет. Без него Цель №1 будет беспомощным щенком.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 67,
    text:
      `
        EVE-13C сделала вид, что наклоняется, чтобы положить арматуру на пол. Прожигая взглядом исподлобья неизвестного, пока дуло пистолета опускалось следом за ней.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 68,
    text:
      `
        «Опасно. Только дернусь — сразу пуля в лоб».
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 69,
    text:
      `
        Но время отказывалось ждать. Арматура уже почти коснулась бетона, а положение Цели не менялось.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 70,
    text:
      `
        «Пусть подойдет поближе».
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 71,
    text:
      `
        Солдат положила железку на пол. Начала медленно выпрямляться, держа руки поднятыми, и не спускала глаз с оружия. Сердце вбивалось под глотку, адреналин колол кончики пальцев.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 72,
    text:
      `
        Ногой оттолкни в мою сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 73,
    text:
      `
        «Плохо, но не критично».
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 74,
    text:
      `
        EVE-13C продолжала играть в подчинение. Большим пальцем ноги ткнулась в холодный металл и медленно сдвинула вперед. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 75,
    text:
      `
        Цель №1 нервничала и раздражалась еще больше.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 76,
    text:
      `
        Ты меня слышала? Пни ее подальше, мать твою!
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 77,
    text:
      `
        «Ну пнуть так пнуть, сам попросил».
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 78,
    text:
      `
        Она размахнулась со всей силы. Арматура полетела в сторону неизвестного. Солдат тут же шмыгнула в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 79,
    text:
      `
        Их обучали обезоруживать голыми руками. Первый шаг — отвести оружие от себя. С этим EVE-13C справилась прекрасно, перехватывая ведущую руку и отводя ее в сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 80,
    text:
      `
        Второй шаг — бить по запястью, выворачивать кости, делать что угодно, главное быстро и сильно.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 81,
    text:
      `
        Но именно здесь произошла заминка. Парень вцепился в пистолет сильнее, сжал палец и…
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 82,
    text:
      `
        «Черт».
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    simple: require('../../../../Media/Audio/UA/1Shot.mp3'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 83,
    text:
      `
        Пистолет выстрелил.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 84,
    text:
      `
        Ее зацепило рикошетом. Плечо жгло и пекло, по спине начало бежать. Солдат, игнорируя боль, вцепилась в руку сильнее и впечатала в нее колено. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    stats: [{ story: EStoriesEn.UA, value: -10, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 85,
    text:
      `
        Тварь!
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 86,
    text:
      `
        Он взвыл. Оружие выпало, отлетело в сторону. Однако боль тоже не помешала неизвестному нанести удар.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 87,
    text:
      `
        Увернуться не представлялось возможным. В плотном коконе сплетенных конечностей, прижатые друг к другу они сцепились намертво.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 88,
    text:
      `
        …
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 89,
    text:
      `
        Неизвестный влетел в нее лбом. Толкнул, воспользовался своим преимуществом в весе и тараном потянул к стене. EVE-13C дернулась, вернула ему обратно кулак под ребра, под дых.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 90,
    text:
      `
        Тянулась к лицу, была готова выбивать ему кадык, вынимать пальцами глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 91,
    text:
      `
        Но встретилась со стеной быстрее.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 92,
    text:
      `
        Воздух выбило из легких, тяжелая туша вжала в бетон, почти распластала по ней. Еще один удар по голове, Цель №1 получила пинок промеж ног. Он снова завыл, но рук, схвативших ее, не расцепил.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 93,
    text:
      `
        Ты где?! Эта лабораторная крыса бешеная!
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Цель №1',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_01.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 94,
    text:
      `
        Солдат пнула его еще раз, сильнее. Зубами вцепилась в подставленную шею, пустила ему кровь.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 95,
    text:
      `
        Цель №1 схватил ее за волосы, откинул от себя. Пока EVE-13C летела до противоположной стены, оглянулся в поисках пистолета. Нашел.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 96,
    text:
      `
        «Не успею. Застрелит».
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 98,
    text:
      `
        Ты идиот.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Цель №2',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_02.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 99,
    text:
      `
        Второй голос раздался из глубины коридора. EVE-13C попыталась рассмотреть, но все, что увидела — дуло очередного пистолета. Другой диаметр, другая модель.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 100,
    text:
      `
        Один взмах ресницами и кожу под ребрами обожгло болью.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    simple: require('../../../../Media/Audio/UA/1Shot.mp3'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 101,
    text:
      `
        EVE-13C опустила взгляд вниз, чувствуя, как в голове начинает гудеть. Из ткани рубашки торчала ампула с иглой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 102,
    text:
      `
        «Транквилизатор? Который действует на нас?»
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 103,
    text:
      `
        Он не просто действовал, а действовал быстро. Зрение помутнело, внешние раздражители казались сплошным гулом и белым шумом.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 104,
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
        goTo: 107
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 105
      }
    ],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 105,
    text:
      `
        Ты в нее выстрелил? Сказано же было, не портить товар, идиот!
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Цель №2',
    imageFront: require('../../../../Media/Images/UA/Persons/Bandit_02.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 106,
    text:
      `
        Раздался звук глухого удара и сдавленная ругань.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 107,
    text:
      `
        «Надо сопротивляться. Надо пытаться…».
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 108,
    text:
      `
        Это была последняя мысль, посетившая ускользающее сознание, прежде чем тьма поглотила ее полностью.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    beforeBegin: blackFlash,
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Soldier_Room.jpg')
  },

  {
    id: 109,
    text:
      `
        Солдат поймала свое сознание, рывком окунувшее ее в какофонию голосов и стонов. Мозг опаздывал за телом, вздернувшимся, чтобы поставить свою хозяйку на ноги. Заковало в боевую стойку, приготовило к драке.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    beforeBegin: blackFlash,
    music: require('../../../../Media/Audio/UA/Alert_Theme.mp3'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 110,
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
        goTo: 116
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 111
      }
    ],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 111,
    text:
      `
        Простреленное плечо отозвалось вспышкой боли. Плотная корка крови треснула от удара, заново смачивая ссохшуюся ткань на ране.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    beforeBegin: redFlash,
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 112,
    text:
      `
        Солдат глухо застонала, переворачиваясь с поврежденной части тела. Попыталась осмотреть рану, оценить масштаб повреждений, но кроме бурого пятна на серой ткани не видела ничего.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 113,
    text:
      `
        «Судя по всему, пуля прошла навылет. Пока что опасности нет».
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 114,
    text:
      `
        Дав себе несколько секунд на передышку, EVE-13C осмотрелась.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 116,
    text:
      `
        Не получилось. Сведенные за спиной руки перекроило судорогой. Ноги, будто онемевшие, подогнулись и опрокинули EVE-13C обратно на пол. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 118,
    text:
      `
        «Что происходит?»
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 119,
    text:
      `
        Знакомое окружение неохотно складывалось в ровный, не вращающийся пейзаж. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 120,
    text:
      `
        «Столовая дома Отреченных».
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 121,
    text:
      `
        EVE-13C повернула голову, прижимаясь щекой к полу. Вокруг нее в таком же положении лежали остальные Солдаты. Кто-то вяло шевелился, кто-то злобно зыркал на проходящих мимо похитителей и дергался.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 122,
    text:
      `
        Девушка с тихим шипением выпрямилась, попыталась сесть.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 123,
    text:
      `
        «Получилось».
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 124,
    text:
      `
        Солдат вытянула шею, глазами прошлась по стенам, полу, лежащим телам.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 125,
    text:
      `
        «Хоть какое-то оружие или намек на то, что Лагард жив».
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 126,
    text:
      `
        Пусто. Только небрежно сдвинутые столы, заваленные сверху стулья и ни-че-го, отдаленно напоминающее лезвие. Ей бы освободиться, а там....
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 127,
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
        goTo: 128
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 129
      }
    ],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 128,
    text:
      `
        Эти твари положили троих моих парней! Либо плати за каждую голову сверху, либо…
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    parallax: 'right',
    speaker: 'Раздраженный мужчина',
    imageFront: require('../../../../Media/Images/UA/Persons/Sorax.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 129,
    text:
      `
        Эти твари положили троих моих парней! Одна съехавшая вообще прокусила ему горло! Плати сверху еще, и это не обсуждается!
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'Раздраженный мужчина',
    parallax: 'right',
    imageFront: require('../../../../Media/Images/UA/Persons/Sorax.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 130,
    text:
      `
        Неизвестный брызгал слюной. Кричал так, что вздулись вены на лбу и шее. Потрясая пистолетом, почти кидался на стоящего рядом с ним. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 131
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 131,
    text:
      `
        Более лощеного, с дорогой одеждой и качественным оружием. Он оставался незыблем. Даже не смотрел в сторону пистолета, который был на него направлен.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 132,
    text:
      `
        «Военная выправка. Видимо, заказчик. Четверо рядом с ним — его люди. Держат в кольце, не выпускают других из поля зрения. Охрана».
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 133,
    text:
      `
        Вы были предупреждены обо всех возможных рисках. В том числе касающихся смерти при выполнении заказа.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Заказчик ',
    imageFront: require('../../../../Media/Images/UA/Persons/Orderer.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 134,
    text:
      `
        Обстановка явно уже давно накалилась, но Заказчик даже бровью не повел.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 135,
    text:
      `
        Но ты, хитрая корпоратская задница, не предупредил меня о том, кого мы будем обязаны достать отсюда. Если бы я знал, то цену заломил впятеро, если не вшестеро раз!
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    message: 'Корпораты — работники корпораций, крупных гигантов, приватизировавших все сферы жизни в городах. Их боятся и презирают из-за всеобъемлющей власти, которой невозможно противостоять',
    speaker: 'Раздраженный мужчина',
    imageFront: require('../../../../Media/Images/UA/Persons/Sorax.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 136,
    text:
      `
        Это не мои проблемы, Соракс. И меня ни коим не касается ваша безответственность, как лидера.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Заказчик',
    imageFront: require('../../../../Media/Images/UA/Persons/Orderer.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 137,
    text:
      `
        Так разговаривать со своей секретаршей будешь! Я тебе этих кукол так просто не отдам. Уж точно не за ту цену, которую ты заплатил раньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Соракс',
    imageFront: require('../../../../Media/Images/UA/Persons/Sorax.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 138,
    text:
      `
        Слишком много для такой простой работы.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: 'Заказчик',
    imageFront: require('../../../../Media/Images/UA/Persons/Orderer.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 139,
    text:
      `
        А что ж ты сам тогда в самое пекло не полез, а? Раз работа такая простая?! Если сам зассал, так вываливай свои деньжата, пока голова без лишних дырок.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Соракс',
    imageFront: require('../../../../Media/Images/UA/Persons/Sorax.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 140,
    text:
      `
        Это элитные бойцы, а не проститутки.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Заказчик',
    imageFront: require('../../../../Media/Images/UA/Persons/Orderer.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 141,
    text:
      `
        Под тройной дозой Вайлета у меня даже гусеница от танка ноги раздвинет. Ты меня слышал? Еще восемь нолей на моем счете прибавь, и все они твои.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    message: 'Вайлет — синтетический наркотик, обретший популярность более десяти лет назад. Основным действием является долгоиграющая эйфория',
    speaker: 'Соракс',
    imageFront: require('../../../../Media/Images/UA/Persons/Sorax.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 142,
    text:
      `
        EVE-13C потеряла интерес к разговору мгновенно, когда ощутила касание к своей руке. Холодный металл прошелся по запястью, царапнул кожу и вгрызся в пластик стяжки.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 143,
    text:
      `
        Она осторожно, стараясь не привлечь внимание, повернула голову и скосила глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 144,
    text:
      `
        «ZAYNE-3C. Вот уж не думала, что ты способен на помощь другим».
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA//Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 145,
    text:
      `
        Все были поглощены спором и махающим оружием Сораксом, давая Солдатам шанс на освобождение.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 146,
    text:
      `
        Стяжка тихо хрустнула и отпустила руки. EVE-13C немного расслабила плечи, удобнее развернула кисти, чтобы не выдать себя, но помочь онемевшим рукам обрести чувствительность.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 147,
    text:
      `
        Четверо наших свободны. На четыре, шесть, десять и двенадцать часов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'ZAYNE-3C',
    imageFront: require('../../../../Media/Images/UA/Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 148,
    text:
      `
        Он шептал едва слышно, девушка улавливала слова только по силе касающегося ее уха воздуха. В освобожденные руки легла ребристая рукоять ножа.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 149,
    text:
      `
        Громкий истеричный ор со стороны сгрудившихся людей снова привлек внимание. Солдат повернула голову туда.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    parallax: 'right',
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Item', id: 'Neck' }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 150,
    text:
      `
        Дуло пистолета было направлено аккурат в лоб Заказчика. Рассредоточенные по помещению бандиты вскинули оружие следом.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 151,
    text:
      `
        Либо на моем счету прибавляется восемь нулей, либо в твоей голове появляется новое отверстие, а в Чистилище прибывает на двадцать пять новых кукол.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Соракс',
    parallax: 'right',
    imageFront: require('../../../../Media/Images/UA/Persons/Sorax.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 152,
    text:
      `
        Сопровождение Заказчика синхронно отреагировало на угрозу. Но четверо людей охраны мало что могли сделать против десятерых жадных и отбитых бандитов.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 153,
    text:
      `
        ZAYNE-3C за спиной зашептал:
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 154,
    text:
      `
        Сейчас.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    music: require('../../../../Media/Audio/UA/Fight_Theme.mp3'),
    speaker: 'ZAYNE-3C',
    imageFront: require('../../../../Media/Images/UA/Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 155,
    text:
      `
        Те Солдаты, которых успели освободить, бросились вперёд.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 156,
    text:
      `
        Вооруженные чем попало: от заточек до металлических складных стульев — они крошили черепа лучше, чем разрывные пули девятого калибра.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 157,
    text:
      `
        Как обезвредить цель?
      `,
    buttons: [
      {
        text: 'Избавиться быстро',
        goTo: 158
      },
      {
        text: 'Дать волю эмоциям',
        goTo: 163
      }],
    message: 'Статы Киллер и Мясник влияют на предпочитаемый героиней способ убийства. Киллер связан с быстрыми и тихими обезвреживаниями противника, когда как Мясник с более кровавыми и эмоциональными способами зачистки',
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 158,
    text:
      `
        EVE-13C подлетела к ближайшему противнику, уже подстреленному шальной пулей, и быстрым движением воткнула лезвие в сонную артерию.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Effect', id: 'Killer' }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 159,
    text:
      `
        Цель забулькала, засучила ногами, заваливаясь на Солдата. Бандит пытался что-то сделать, дотянуться до оружия или оттолкнуть нападавшую от себя. Но не успел.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 160,
    text:
      `
        EVE-13C была быстрее. Выхватила из ослабшей руки ствол, засунула за резинку штанов.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 161,
    text:
      `
        Чужая и ее собственная кровь потекла по рукам, когда девушка оттолкнула от себя вяло сопротивляющуюся тушу. Оценила обстановку и начала спешно отходить назад. Все остальные следовали ее примеру.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Item', id: 'Pistol' }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 162,
    text:
      `
        «У них пушки, у нас заточки, кулаки и стулья. Сами себя перестреляют, у них хорошо получается».
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 163,
    text:
      `
        Наметанный глаз сразу же выцепил в раздоре боя знакомого бандита. Цель №1 хваталась за подстреленный бок, с трудом отползая назад от эпицентра.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Effect', id: 'Butcher' }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 164,
    text:
      `
        EVE-13C, с удовольствием наблюдая за расцветающими полосами крови на кафеле, шагнула вперед.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 165,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) >= 1
        },
        goTo: 167
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 166
      }
    ],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 166,
    text:
      `
        Принцип «око за око» трансформировался в доме Отреченных и превратился в «жизнь за рану». Противников нужно добивать, чем Солдат и планировала заняться.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 167,
    text:
      `
        Бандит с трудом дышал. Болевые спазмы сковывали легкие, сквозь плотно сжатые зубы сочилась кровавая слюна.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 168,
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
        goTo: 171
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 170
      }
    ],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 169,
    text:
      `
        Девушка остановилась перед Целью, без промедлений нанося удар по ранению. Парень согнулся, закашлялся, кажется, ругнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 170,
    text:
      `
        В помеченной арматурой руке лежал пистолет. Он попытался им воспользоваться, но EVE-13C реагировала быстрее. Пяткой влетела в слабые кости запястья, придавливая и прокручивая, упивалась сдавленными стонами.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 171,
    text:
      `
        Цель №1 попыталась воспользоваться пистолетом. Солдат коленом прижала руку, всем весом надавливая и слушая треск хилых костей.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 173,
    text:
      `
        Бандит пытался сопротивляться. Но очередной удар в живот, на этот раз острием ножа, заставил прекратить. Взмах. Еще взмах — Солдат метила в печень, петли кишечника, превращая внутренности в решето.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 174,
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
        goTo: 177
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 175
      }
    ],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 175,
    text:
      `
        На сладкое она оставила себе горло. Следы ее зубов покрылись коркой, потемнели, и нарушать их целостность ей не хотелось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 176,
    text:
      `
        Ровная полоса от уха до уха зияла на шее кровавым провалом, располагаясь всего лишь на один палец ниже от ее метки.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 177,
    text:
      `
        Последним было горло. Ярко-красная линия опоясала кожу под кадыком.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 178,
    text:
      `
        Кровавая черта петли разошлась в стороны, извергая из себя теплую жидкость. Руки омыло из артерии, согрело и конечности, и душу.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 180,
    text:
      `
        Бандит гортанно захрипел, медленно переходя в сдавленное бульканье. Кровь толчками выливалась из горла, как бы сильно бандит не пытался зажать его рукой.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 181,
    text:
      `
        «Цель №1 обезврежена».
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 182,
    text:
      `
        Эта мысль вызвала тугое чувство удовольствия в груди. Солдат подобрала пистолет, отточенным движением проверила количество патронов и оглянулась на вакханалию боя.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 183,
    text:
      `
         «Надо отходить назад».
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    stats: [
      { story: EStoriesEn.UA, value: +1, category: 'Item', id: 'Pistol' }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 185,
    text:
      `
        Жалкая горстка элитных бойцов отступала в темноту коридора. Конкуренция между Солдатами брала свое.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 186,
    text:
      `
        Когда они прошли по дорожке из трупов на выход, холодный ночной ветер кусал за лицо. Шестеро Солдат-13 вышли за стены лаборатории и замерли, не зная куда идти.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    music: require('../../../../Media/Audio/UA/Alert_Theme.mp3'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 187,
    text:
      `
        Доктор Лагард мертв.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: 'ZAYNE-3C',
    imageFront: require('../../../../Media/Images/UA/Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 188,
    text:
      `
        ZAYNE-3C повернул голову, бросив малозначительно настолько шокирующую информацию, что у девушки дрогнули колени.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 189,
    text:
      `
        Следом за сбоем Постулатов начало рушиться и все мироустройство, которое Лагард вкладывал здесь в каждого.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 190,
    text:
      `
        «Защищай своего Хозяина, убивай за своего Хозяина, умирай во имя своего Хозяина».
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 191,
    text:
      `
        «Но что делать, если твой Хозяин мертв, и тебя не было рядом, чтобы выполнить приказ?»
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 192,
    text:
      `
        Надо выяснить всю информацию.
      `,
    buttons: [
      {
        text: 'Ты видел его тело?',
        goTo: 193
      },
      {
        text: 'Кто его убил?',
        goTo: 194
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 193,
    text:
      `
        Я видел, как его избивали. Потом оттащили на кухню. Три выстрела и вышло оттуда только двое.
      `,
    buttons: [
      {
        text: 'Ты видел его тело?',
        goTo: 193,
        isActive: false
      },
      {
        text: 'Кто его убил?',
        goTo: 250
      }],
    speaker: 'ZAYNE-3C',
    imageFront: require('../../../../Media/Images/UA/Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 250,
    text:
      `
        Те, кто это сделал, уже мертвы. Лично выпустил им кишки наружу.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'ZAYNE-3C',
    imageFront: require('../../../../Media/Images/UA/Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 194,
    text:
      `
        Те, кто это сделал, уже мертвы. Лично выпустил им кишки наружу.
      `,
    buttons: [
      {
        text: 'Ты видел его тело?',
        goTo: 251
      },
      {
        text: 'Кто его убил?',
        goTo: 193,
        isActive: false
      }],
    speaker: 'ZAYNE-3C',
    imageFront: require('../../../../Media/Images/UA/Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 251,
    text:
      `
        Я видел, как его избивали. Потом оттащили на кухню. Три выстрела и вышло оттуда только двое.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'ZAYNE-3C',
    imageFront: require('../../../../Media/Images/UA/Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 195,
    text:
      `
        Стоящий рядом Солдат словно прочитал ее замешательство. Поморщился, отражая ее душевный раздрай в кривой гримасе, и прижал пальцы к виску.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 196,
    text:
      `
        Я вернул тебе долг за свою жизнь, которую ты однажды сохранила. Дальше каждый сам за себя. Как раньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'ZAYNE-3C',
    imageFront: require('../../../../Media/Images/UA/Persons/Zayne.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 197,
    text:
      `
        И первый шагнул в неприветливую и отпугивающую темноту неизвестного «где-то».
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 198,
    text:
      `
        За спиной начали стонать, раздался звук падающего тела. EVE-13C даже не обернулась, чувствуя металлический осадок у корня языка.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 199,
    text:
      `
        «Раненный солдат — ненужный солдат». 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 252,
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
        goTo: 201
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.UA, category: 'Choice', id: 'Obey' }) <= 0
        },
        goTo: 200
      }
    ],
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 200,
    text:
      `
        «По крайней мере, я пока что могу стоять на ногах. Но с плечом нужно что-то делать».
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speaker: 'EVE-13C',
    imageFront: require('../../../../Media/Images/UA/Persons/Eve.png'),
    imageBorder: require('../../../../Media/Images/UA/UI/Border.png'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },

  {
    id: 201,
    text:
      `
        Она, обхватив себя руками, нырнула в темноту следом за ZAYNE-3C.
       `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  },
  {
    id: 202,
    text:
      `
        И будто по его команде под потолок взвились хлопки выстрелов; воздух наполнился запахом пороха и секунду спустя — смрадом смерти.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    simple: require('../../../../Media/Audio/UA/5Shots.mp3'),
    music: require('../../../../Media/Audio/UA/Fight_Theme.mp3'),
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Canteen.jpg')
  },

  {
    id: 203,
    text:
      `
        Навстречу нежеланной, но навязанной свободе. К границе города, который Лагард называл «Нова».
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('UA', 'Глава 1', 'Часть 1', '0')
        }
      }],
    achievement: { story: EStoriesEn.UA, name: 'PrologueCompleted' },
    imageBack: require('../../../../Media/Images/UA/Backgrounds/Nova_Beginning.jpg')
  }
])
