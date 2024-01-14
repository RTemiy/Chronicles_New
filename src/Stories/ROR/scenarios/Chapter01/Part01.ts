import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { firstChoiceMessage } from '../../../../Utils/TextConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.ROR, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Тучи  уже давно не давали пробиться солнцу. Было тяжело определить, когда день, а когда ночь. В воздухе стоял премерзкий запах: великолепная смесь чеснока, пахучих трав и человеческих выделений.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/ROR/City.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 1,
    text:
      `
        Я пытался держаться подальше от основной части улицы, как и было условлено. Мой взгляд неожиданно зацепился за очередной плакат с призывом молиться за спасение своей души.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageFront: require('../../../../Images/ROR/Objects/Poster.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 2,
    text:
      `
        C него взирал иерарх Бертольд, глава церкви в западных регионах. По сути он контролировал духовную жизнь всей страны... или скорее кто-то хотел, чтобы в это поверили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageFront: require('../../../../Images/ROR/Objects/Poster.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 3,
    text:
      `
        «Хотя что я тут размусоливаю. Дедуля находится одной ногой в могиле уже кучу времени... может, он уже туда запрыгнул отдохнуть?»
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageFront: require('../../../../Images/ROR/Objects/Poster.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 4,
    text:
      `
        Еле сдерживаясь, чтобы не передразнить злобный взгляд старого крикуна, я достал из своей походной сумки немного овощей, чтобы перекусить. Предполагалось заехать за нормальным провиантом в Бэйнхевен. 
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [{ story: EStoriesEn.ROR, value: 0, category: 'Person', id: 'Henrich' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 5,
    text:
      `
        Это маленький городок, который находился на болотах и пока мало как был затронут болезнью. Цены там конские, но всегда была возможность стрясти с моих пассажиров побольше деньжат. В конце концов, от этого зависит их собственное выживание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 6,
    text:
      `
        Потерев помидор о рукав, я получше осмотрел его, поскольку он показался мне слишком мягким. Мои опасения подтвердились. Овощ начал загнивать: на его тыльной стороне появилось черное пятно, не сулящее приятный вкус.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 156,
    text:
      `
        Мысленно я обругал продавца, который клялся в свежести продуктов, а по факту пустил пыль в глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 7,
    text:
      `
        Раздосадованный, я швырнул его на мостовую, после чего решил проверить всю сумку. Помимо мерзкого запаха исходящего от испортившихся продуктов и риска что-нибудь подхватить, на дне обнаружилась довольно крупная дырка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    stats: [{ story: EStoriesEn.ROR, value: +1, category: 'Item', id: 'Bag' }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 8,
    text:
      `
        «Я рискую потерять часть своих вещей. Но и купить новую сейчас не представляется возможности. Как лучше поступить?»
      `,
    buttons: [
      {
        text: 'Вышвырнуть рюкзак',
        goTo: 9
      },
      {
        text: 'Отряхнуть и оставить рюкзак',
        goTo: 11
      }],
    message: firstChoiceMessage,
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 9,
    text:
      `
        Еще не хватало рисковать во время эпидемии. Может, что-то влезет в карманы, может, у попутчиков что-то окажется. Остается только надеяться, что они сами не носят с собой ничего зараженного. Я раскрутил сумку за ремешок, и с силой швырнул к сточной трубе неподалеку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Item', id: 'Bag' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 10,
    text:
      `
        Бросок, однако, вышел неплохой. Даже отсюда было видно, как местные мухи заинтересовались новым экспонатом в своих угодьях. Пусть хоть они порадуются. А я зато остался без нормального перекуса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Item', id: 'Knife' },
      { story: EStoriesEn.ROR, value: +10, category: 'Item', id: 'Sugar' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 11,
    text:
      `
        Эта старушка сослужила мне добрую службу. Ничего такого, что овощи испортились. Сколько они там уже хранились, ей богу?
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }
    ],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'SaveOld' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 150,
    text:
      `
          Что мне, из-за этого лишаться возможности нормально перевозить груз? Ну а то, что пахнет... еще бы. Вытряхну, что оставалось, и всё. Может, потом в ручье сполосну.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }
    ],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'SaveOld' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },
  {
    id: 12,
    text:
      `
        Однако, вопрос с едой все еще остается открытым. И времени посетить таверну не было.  Впрочем, я бы и не рисковал есть или пить что-то в заведениях Гласвера даже в лучшие времена.  
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Item', id: 'Knife' },
      { story: EStoriesEn.ROR, value: +10, category: 'Item', id: 'Sugar' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 151,
    text:
      `
          Удивительно, но гниль из сумки, если так задуматься, выглядела привлекательнее, чем всё в том месте.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }
    ],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'SaveOld' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },
  {
    id: 13,
    text:
      `
        И снова ожидание. Хотя время встречи еще не наступило, я, как всегда, постарался прийти пораньше... эту черту привил мне отец, который порол меня, даже если я опоздаю на пятнадцать минут. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 14,
    text:
      `
        Поэтому я развил в себе такую незаменимую черту как пунктуальность. Вопрос заключался лишь в том, что иногда у меня она переходила все мыслимые границы. И сейчас я пришел за два часа до встречи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 15,
    text:
      `
        Благо, не пришлось их долго ждать. Хотя этот чумной доктор с самого начала торопился, даже не особо обсуждал оплату за перевозку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 152,
    text:
      `
        Мне-то лучше. Такая спешка может указывать на проблемы с законом или церковью... но как будто меня это когда-либо останавливало. Всё равно будут сидеть в вагончике, да помалкивать. Надеюсь...
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 16,
    text:
      `
        Тот в маске птицы, двигался уверенно, но скованно, как будто его ноги страдали неким недугом. Но скорее всего это обычное последствие старости. Наверное, единственные оставшиеся в живых пожилые люди в последнее время — это как раз доктора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 17,
    text:
      `
        О втором спутнике он меня предупреждал. Говорил, что это его ассистент, без него не поедет. Мне-то чего, в телеге место есть, а двойная оплата никогда не будет лишней.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 18,
    text:
      `
        Да и особого доверия этот тип не вызывал. Если старик шагал уверенно и по мере возможности быстро, его компаньон то и дело шатался из стороны в сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 19,
    text:
      `
        При этом он держал склянки с какой-то темной жижей, параллельно пытаясь сохранить равновесие. Еще не хватало, чтобы они всю эту гадость разлили в моем транспорте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 20,
    text:
      `
        Всё стало ясно, когда они подошли ближе.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 21,
    text:
      `
        Если от доктора пахло характерным «ароматом» чеснока и каких-то лечебных трав, то от его спутника несло откровенным спиртом смешанным с помоями.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 22,
    text:
      `
        «Это они так неумело пытались скрыть наличие этого амбре? Крысы их дери.... мой завтрак сейчас полезет наружу. Два бездаря. Но до поры до времени я смогу это терпеть. Ведь ради денег люди и не на такое способны».
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 23,
    text:
      `
         Доктор приблизился, после чего несколько секунд пристально изучал меня, видимо пытаясь убедиться, что с ним разговаривает нужный человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 24,
    text:
      `
        «Как будто я назвал недостаточно приметное место встречи, и здесь кто-то еще стоит с длинными волосами».
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 153,
    text:
      `
        Но на мое счастье, не прошло больше минуты, как эта гигантская птичка заговорила.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 26,
    text:
      `
        — Вы сэр Гарнер? — послышался приглушенный высокий голос из-под маски.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 154,
    text:
      `
        «Ага, так чутье меня не обмануло. Это действительно старик. Дело принимает интересные обороты».
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 26,
    text:
      `
        — Да. Генрих Гарнер. Доктор Мортимер Дракен? — проговорил я, скрестив руки и опершись спиной о стену.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 155,
    text:
      `
       — Именно. Предлагаю обойтись без прелюдий знакомства и перейти сразу к делу. Думаю, наш общий знакомый уже нас представил друг другу и рассказал достаточно о целях поездки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 27,
    text:
      `
         — Кстати о нашем путешествии, простите, но я нигде не вижу средство нашего передвижения. Мне необходимо куда-то сложить вещи.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: 0, category: 'Person', id: 'Mortimer' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 28,
    text:
      `
        — Я оставил ее в другом месте. Привык сначала рассчитываться, а уже потом приступать к делу.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 29,
    text:
      `
        Доктор Дракен не выказал никаких признаков недовольства, но его компаньон раздраженно фыркнул, как будто ему было что сказать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 30,
    text:
      `
        «Явно тяжело с похмелья столько легко бьющихся вещей таскать. Его проблемы».
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 157,
    text:
      `
        Но стоило доктору медленно повернуться в его сторону, тот сразу виновато опустил взгляд и окончательно притих.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 31,
    text:
      `
        — Пересчитывать будете? — уточнил Дракен, постоянно озираясь по сторонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    simple: require('../../../../Sounds/ROR/Money.mp3'),
    imageFront: require('../../../../Images/ROR/Objects/Moneybag.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 161,
    text:
      `
        — На месте пересчитаю, — я принял увесистый мешок с монетами и перевел взгляд на туманный город. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Images/ROR/Objects/Moneybag.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Roadway.jpg')
  },

  {
    id: 32,
    text:
      `
        «Мерзкое поселение, даже в лучшие времена оно снискало не самую добрую славу. А сейчас со всеми этими обшарпанными стенами... как же хочется свалить отсюда побыстрее».
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 33,
    text:
      `
        Позади послышался кашель. Причем сделан он был специально, как будто кто-то из этой парочки хотел привлечь к себе внимание. Кто именно это был, я так и не понял. Да и мне не было разницы. Оплата получена, дальше дело остается за малым.  
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 34,
    text:
      `
        На моем лице невольно проскользнула ехидная улыбка при виде их замешательства. Они горели желанием быстрее отправиться в путь, но все было, видимо, не по их планам.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 35,
    text:
      `
        — Простите, господин Гарнер... можем ли мы выдвигаться? Я же говорил, мне необходимо...
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 158,
    text:
      `
        — Вы не одни тут в путь отправляетесь. Имейте терпение, доктор.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 36,
    text:
      `
        — Что?! — послышался уже другой голос, куда более молодой и хриплый. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 37,
    text:
      `
        Судя по последующему звуку небольшого шлепка, доктор осадил своего помощника вновь. Они принялись о чем-то переговариваться, но я толком ничего не расслышал. Впрочем, и не собирался слушать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 38,
    text:
      `
        Спустя некоторое время доктор всё же заговорил:<p>— Об этом речи не шло, господин Гарнер, — вежливым тоном сказал Дракен.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 39,
    text:
      `
        — А это обязательно? Я перевозчик, не забывайте об этом. У меня могут быть и другие заказы. Не бойтесь, телега очень большая, поместимся. А под навесом вы спокойно можете расположить свои склянки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 40,
    text:
      `
        На этом разговор оборвался, поскольку я заметил своих новых клиентов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 159,
    text:
      `
        «Не слишком уж люблю иметь дела со святошами, но видимо, монастырь раскошелился. Слишком уж хорошо заплатили. Откуда только деньги у этих нищенствующих сестер?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 41,
    text:
      `
        «В старые времена они только и занимались тем, что побирались и говорили, как они бедствуют. Неужели чума им приносит такую прибыль?»
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: 0, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 42,
    text:
      `
        Монашка на деле была весьма недурна собой. Даже поразительно, что в святую обитель принимали рыжих дев. Обычно таких принято считать ведьмами и отправлять на теплую встречу в загробный мир.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 43,
    text:
      `
        Впрочем, ничего в ней не выдавало злобную колдунью, танцующую по ночам вместе с козлоногими демонами. Ее лицо было запуганное и крайне серьезное.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 160,
    text:
      `
        «Наверное она при первом же ругательстве в обморок падает». 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 44,
    text:
      `
        «С ней двое детей. И этот багаж доктора. Придется потесниться. Кого-нибудь можно посадить на козлы. Старшего паренька, например? Такое детям должно нравиться».
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 45,
    text:
      `
        — Да осветит ваш путь божественный свет, господин Гарнер.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 161,
    text:
      `
        — Сестра Марта, верно?
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 162,
    text:
      `
        — Да. А это мои воспитанники, Виг и Джоанна. Еще раз спасибо за вашу помощь.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 163,
    text:
      `
        — Это работа. А за работу принято платить, сестра.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 46,
    text:
      `
        Послышался звон монет, лицо старшего ребенка исказила недовольная гримаса, но в его случае вмешательство монахини не потребовалось, чтобы успокоиться. Видно, что паренек обладал определенной выдержкой, которая местами рушилась из-за подростковой несдержанности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: 0, category: 'Person', id: 'Vig' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 47,
    text:
      `
        Девочка, что шагала рядом с ними, была сильно младше парня. Она предпочитала ютиться позади платья... воспитательницы? Кем эта монахиня им приходится? 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 48,
    text:
      `
        Впрочем, хорошенько рассмотреть малышку мне не представилась возможность. Ее то и дело прикрывал собой рыжий юноша, поглядывая трепетным взглядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 49,
    text:
      `
        «Не то, чтобы они были похожи. Но очевидно, что дороги друг другу, как настоящие брат и сестра». 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 50,
    text:
      `
        Теперь, обладая целыми двумя увесистыми мешочками, я чувствовал, что уже вполне готов выдвигаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 51,
    text:
      `
        «Компания собралась, что надо. Устрашающий старик в маске падальщика. Алкоголик-ассистент. Монашка с двумя детьми... интересно, как быстро они начнут устраивать склоки? Надеюсь, им хватит мозгов ничего не трогать в телеге».
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 52,
    text:
      `
        — Прекрасно. Следуйте за мной, теперь все в сборе, — улыбнулся я, отправляясь в путь.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 53,
    text:
      `
        Дорога до транспорта не заняла слишком много времени. Мои лошади, Араун и Гвин, отчаянно пытались найти траву. Ничего, уже скоро будет возможность попастись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    message: 'Общие денежные средства: 100 крон. Выезд за пределы города стоит 40 крон. Закупка провианта на всю команду: 5 крон',
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +100, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 54,
    text:
      `
        Ночлег стоит провести за городом. В крупных населенных пунктах опаснее из-за болезни, не люблю здесь задерживаться подолгу. Просто заберу клиентов и свалю на свежий воздух.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 55,
    text:
      `
        Конечно, есть риск наткнуться на бандитов, но как будто здесь безопаснее? Не хочу тут подолгу оставаться даже с доктором. Пусть собираются быстрее.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 56,
    text:
      `
        — Ну... вот ваше жилище на следующие несколько недель. Располагайтесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 57,
    text:
      `
        Мортимер, не взглянув на других попутчиков, кивнул своему помощнику, и оба двинулись внутрь вагончика. Если потесниться, может, и поместятся все.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 164,
    text:
      `
        С этой старушкой пришлось провести не одно приключение, а лошадки, хоть и бывают иногда капризные, неоднократно меня выручали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 58,
    text:
      `
        — Рухлядь какая-то, — послышалось в отдалении, но я не сомневался, что голос принадлежал ассистенту Мортимера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 59,
    text:
      `
        Я сталкивался со многими пассажирами, кто не умеет держать себя в руках. Но иногда бывают моменты, когда даже у такого терпеливого человека как я, может иссякнуть терпение.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: 0, category: 'Person', id: 'Ditrich' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 60,
    text:
      `
        «Хочется сказать ему пару ласковых, но... наверно, это будет не лучшая идея, вот так сразу портить отношения с пассажирами?»
      `,
    buttons: [
      {
        text: 'Осадить наглеца',
        goTo: 61
      },
      {
        text: 'Проигнорировать оскорбление',
        goTo: 67
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 61,
    text:
      `
        Этому доктору следовало лучше подбирать персонал. Не слишком уж это здравая идея грубить тому, от кого зависела твоя жизнь на ближайшие несколько дней.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'ThreatDitrich' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 62,
    text:
      `
        Я направился прямиком к этому алкоголику и скрестил руки, стараясь сдерживать себя. Не хотелось бы вовлекать в этот конфликт всех моих клиентов. Стоило поставить на место только этого козла. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 63,
    text:
      `
        — Вас что-то не устраивает, уважаемый? Возможно, вы бы предпочли идти со своими склянками пешочком? Это вполне можно устроить. Впрочем, я сомневаюсь, что спиртное вам в этом поможет. Думаю, первое же падение обернется утратой всех драгоценных колбочек.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 64,
    text:
      `
        Этот наглец просто кипел от злости. Его руки так дрожали, что он, казалось, был готов выронить весь свой груз. Однако в дело быстро вмешался доктор, который чуть ли не за шиворот оттянул ассистента к телеге.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 65,
    text:
      `
        — Прошу прощения за Дитриха, я проведу с ним профилактическую беседу.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 66,
    text:
      `
        Я же только кивнул и направился к козлам. В качестве жеста дурачества я провел рукой по стенке повозки и тихо прошептал:<p>— Как я его, а? В обиду тебя не дам, малышка.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    message: 'Дитрих держит на вас обиду',
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Ditrich' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 67,
    text:
      `
        Я обернулся в сторону помощника и только смерил его злым взглядом. Еще не хватало с его начальником ссориться, подсыпет мне еще что-то в еду, а потом придется мучаться с животом. А то и еще хуже. Ничего, мне еще представится возможность отыграться.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 68,
    text:
      `
        Конфликт подошел к концу, еще не начавшись. Грубиян со своим начальником скрылся в повозке, как и монашка со своими воспитанниками. Мне же оставалось только проверить транспорт. После этого можно было выдвигаться. Начнем с коней.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 69,
    text:
      `
        Я решил посмотреть, как там Гвин. У коня в последнее время настроение ни к черту.<p>«Последним сахарком с ним поделюсь».
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Images/ROR/Objects/Horse.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 70,
    text:
      `
        <i>Черный конь недовольно таращится на вас и шумно фырчит, кивая головой
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageFront: require('../../../../Images/ROR/Objects/Horse.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 71,
    text:
      `
        Вздохнув, я погладил лошадку по шее, прошептав пару успокаивающих фраз. Конечно, ему хреново... а кому нет? Жаль, что и угощение только на один раз осталось.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageFront: require('../../../../Images/ROR/Objects/Horse.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 165,
    text:
      `
        Протянув по кубику сахара обоим, я на некоторое время успокоил коней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageFront: require('../../../../Images/ROR/Objects/Horse.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 72,
    text:
      `
        «Надеюсь, не выдохнутся, пока не доберемся до нормальных лугов. Одно странно, куда они оба все время таращатся?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Images/ROR/Objects/Horse.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: -2, category: 'Item', id: 'Sugar' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 73,
    text:
      `
        Ответ пришел сам собой, когда я обернулся назад. На коней смотрела та маленькая девочка, что пришла вместе с монашкой. Джоанна, кажется.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 166,
    text:
      `
        Она не произнесла ни слова, просто переводила взгляд то на меня, то на лошадей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 74,
    text:
      `
        Я осмотрелся, ее воспитательницы было не видать, но отдаленно мне показалось, что я услышал ее голос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: 0, category: 'Person', id: 'Joanne' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 75,
    text:
      `
        «Спровадить бы девочку подальше, да только с детьми я разговаривать не умею. Но не хотелось, чтобы она слонялась тут без дела».
      `,
    buttons: [
      {
        text: 'Прогнать девочку',
        goTo: 76
      },
      {
        text: 'Дать погладить лошадь',
        goTo: 79
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 76,
    text:
      `
        Я кашлянул, после чего жестом велел девчонке отойти. Помимо назойливости ребенка, уверен, ее сопровождающая сейчас переживает. Не хотелось, чтобы она мне на ухо зудела всю дорогу о том, что я ей не сообщил, где ее малявка ошивалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 77,
    text:
      `
        — Эй, не слышишь, тебя зовут? Давай, не пугай лошадей.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 78,
    text:
      `
        Девчонка дернулась так, как будто я вывел ее из некоего транса. Она испуганно посмотрела на меня и быстро убежала к вагончику, где ее тут же подхватил на руки старший пацан. Он бросил на меня вопросительный взгляд, но затем вздохнул, провожая малышку в повозку.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    message: 'Джоанна вас боится. Марта и Виг признательны вам',
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Joanne' },
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Vig' },
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 79,
    text:
      `
        Может, если дать ей пообщаться с лошадьми, она свалит побыстрее? Я улыбнулся и наклонился к малявке, стараясь выглядеть как можно более дружелюбно.
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'JoannePetHorse' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 167,
    text:
      `
        — Что, лошадки нравятся? — тихо проговорил я.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 80,
    text:
      `
        Девочка как будто вышла из некоего транса, после чего неуверенно посмотрела на меня с мольбой в глазах.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 168,
    text:
      `
        — Хочешь погладить?
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 81,
    text:
      `
        Спустя секундную паузу девочка кивнула, но при этом обернулась, как будто боялась, что ее накажут за это решение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 82,
    text:
      `
        Я же недолго думая, взял малышку на руки и поднес к Арауну, он был куда более спокойным, нежели Гвин. Девочка некоторое время не двигалась, замерев в моих объятиях, но затем все же неуверенно провела рукой по гриве лошади. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageFront: require('../../../../Images/ROR/Objects/Horse.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 83,
    text:
      `
        Конь ответил на это довольным фырчаньем. Я отчетливо увидел, что на лице девочки скользнула улыбка. Она стала смелее в своих действиях, продолжая гладить животное. На ее лице скользнул румянец. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: require('../../../../Images/ROR/Objects/Horse.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 84,
    text:
      `
        «Тем лучше, а то они все такие бледные, что я было подумал, не заражены ли они чумой?»
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 85,
    text:
      `
        — Что вы делаете? — послышался строгий женский голос позади меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 86,
    text:
      `
        Обернувшись, я заметил монахиню, что уперла кулаки в бока. Она смотрела с недовольством скорее на девочку, нежели на меня. Впрочем, говорила она пока только со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 170,
    text:
      `
        — Вы же слышали, я ее звала. А если бы ваша лошадь ее покусала?
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 87,
    text:
      `
        — Ничего бы с ней не случилось. Араун не кусается, — вздохнул я, поставив девочку на каменную кладку.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 88,
    text:
      `
        Та тут же забежала за спину монахини, выглядела она испуганно, но на короткий миг повернувшись в мою сторону, на ее лице проскользнула улыбка. Монахиня же в свою очередь недовольно фыркнула и повела младшую в повозку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    message: 'Джоанна сильнее вам доверяет. Марта разочарована в вашем поведении',
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Joanne' },
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 89,
    text:
      `
        Прошло еще несколько минут, и меня уведомили, что можно было наконец-то отправляться прочь из города. Сев на козлы, я жестом подозвал к себе старшего из воспитанников монахини. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: 0, category: 'Person', id: 'Joanne' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 90,
    text:
      `
        Рыжий паренек резво запрыгнул ко мне, отвернувшись в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 172,
    text:
      `
        Но я же не удержался и поинтересовался: <p>— Ты уже не в первый раз на такой катаешься? 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 91,
    text:
      `
        Парень как будто не слишком был настроен на разговор, от него, так и исходило раздражение.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 173,
    text:
      `
        — Да... ага. И не раз. За дорогой лучше смотрите. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 92,
    text:
      `
        Я ненароком кашлянул от такой наглости, но решил оставить ее без внимания.<p>«Мда, по всей видимости мне придется терпеть не одну наглую рожу здесь». 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 93,
    text:
      `
        Я стегнул лошадей, и наше путешествие уже было готово начаться. Но тут мое внимание привлек один странный субъект.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 94,
    text:
      `
        Ко мне со всех ног несся какой-то молодой парень. За ним не было погони, но выглядел он так, будто лично проиграл все деньги в карты демонам, и сейчас отчаянно пытался найти того, кто оплатит его долг душой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    music: require('../../../../Sounds/ROR/Jack_Theme.mp3'),
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: 0, category: 'Person', id: 'Jack' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 95,
    text:
      `
        Когда наши взгляды пересеклись, он только ускорился и подбежал ближе. Я приподнял бровь и стал слушать.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 174,
    text:
      `
        — Сэр! Молю о помощи! — нервно проголосил юноша. 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 96,
    text:
      `
        Судя по манере его общения, это был какой-то молодой студентик, либо бард. Лютня, которую он носил при себе, давала понять, что верен был второй вариант.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 175,
    text:
      `
        Веселые ребята, что шляются без гроша в кармане по знатным лордам, чтобы спеть одну и ту же надоедливую балладу о верном рыцаре и его храбром сюзерене.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 97,
    text:
      `
        — Что стряслось? — безучастно спросил я.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 176,
    text:
      `
        — Сэр... мне нужно срочно покинуть этот город. Я... я готов заплатить!
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 98,
    text:
      `
        Не в моих привычках было спрашивать, какие именно проблемы с законом возникают у моих собеседников. Особенно в Гласвере. В таких маленьких городках всегда можно перейти дорогу кому-то важному, потому что как ни странно, важными тут являются вообще все. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 99,
    text:
      `
        Но может, парень провинился куда сильнее? И на выезде могут быть проблемы? После того как разразилась эпидемия, всех начали строго проверять.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 100,
    text:
      `
        Заметив скептицизм на моем лице, он показал кошель, где звенели монеты. Потянет на крон пятьдесят, не меньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 177,
    text:
      `
        «А мне сегодня везет». 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 101,
    text:
      `
        «Парень явно из зажиточных... да к тому же это бард, наверняка опять ляпнул что-то не то в местной таверне». 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 102,
    text:
      `
        Помимо языка без костей такие творческие люди привыкли разбрасываться всеми своими деньгами. Спрятать его я смогу, в конце концов, работа контрабандистом меня чему-то научила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 103,
    text:
      `
        Вопрос просто в том, сколько с него взять. Зная таких импульсивных людей, сейчас он готов предложить всё, что у него есть, ну, или большую часть. Только потом осознает и будет жалеть. Но бард же сам виноват, что предложил отдать всё?
      `,
    buttons: [
      {
        text: 'Взять с него обычную плату',
        goTo: 104
      },
      {
        text: 'Взять всю предложенную сумму',
        goTo: 108
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 104,
    text:
      `
        В конце концов, мне стало жалко молодого дурачка. В свое время я проходил через схожие ситуации, и как-то тогда не было приятно, когда с меня пытались содрать втридорога.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 105,
    text:
      `
        — Десять крон за день поездки. Давай деньги и садись в вагончик, — закатил глаза я.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 106,
    text:
      `
        Юноша тут же сложил руки в молитвенном жесте и чуть было не припал на колени, но я смерил его таким недовольным взглядом, чтобы стало понятно — мне нет дела до его театральщины.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 107,
    text:
      `
        — Ох, ваше благородие! Спасибо-спасибо вам! — все же выпалил он, отсчитав необходимое количество монет.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    message: 'Вы получили десять крон. Бард благодарен вам за помощь',
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Jack' },
      { story: EStoriesEn.ROR, value: +10, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 108,
    text:
      `
        Деньги в наше время нужны всем. Нечего испытывать жалость к окружающим, ведь те времена давно прошли. А этот парень еще может принести проблемы. Так что я рискую, значит имею право взять все
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'Thief' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 109,
    text:
      `
        — Ну, давай, — хмыкнул я с ехидной улыбке. Он явно не понял, что я имел в виду, но я внес ясность одним простым словом. — Всё. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 110,
    text:
      `
        — Всё? Но сэр... я... — бард начал лепетать, но я был беспощаден.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 178,
    text:
      `
        — Тебе нужно отсюда сбежать. Мне нужны деньги. Я загружен пассажирами и без тебя. Как ты думаешь, кто без кого может обойтись?
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 111,
    text:
      `
        Немного поколебавшись, юноша чуть ли не швырнул мне на колени свой кошель. С улыбкой я раскрыл его. Действительно, сумма была приличной.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 112,
    text:
      `
        Кивнув новому попутчику, я указал ему взглядом на вагончик. Больше он не посмел посмотреть на меня, а быстро забежал внутрь к остальным путешественникам.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    message: 'Вы получили пятьдесят крон. Барда расстроила ваша жадность',
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Jack' },
      { story: EStoriesEn.ROR, value: +50, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 113,
    text:
      `
        Внутри транспорта послышалась какая-то шумиха, впрочем, она была вполне объяснима. Интересно, не пострадают ли драгоценные склянки дока?
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    music: require('../../../../Sounds/ROR/City.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 178,
    text:
      `
        «Хотя ... какое мне дело. Нужно выбираться из этого города. Бэйнхевен ждет впереди».
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Dirty_Streets.jpg')
  },

  {
    id: 114,
    text:
      `
        «Крысы их дери».
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 115,
    text:
      `
        Разумеется, что-то должно было пойти не так! Около ворот стоят необычно много стражников, которые активно спорят с проезжающими повозками.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 179,
    text:
      `
        «Я заранее подготовил нужную сумму в пятьдесят крон для взятки. Хватит ли этого, чтобы меня пропустили без проблем?»
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 116,
    text:
      `
        Здесь на посту находился один из моих знакомых, стражник по имени Отто. Именно он обещал решить проблемы, что могли возникнуть на выходе из города. Я направился к нему. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 117,
    text:
      `
        Тот явно нервничал и не очень хотел, чтобы разговор проходил перед его сослуживцами. Но начальство было занято ссорой с каким-то жирным купцом, поэтому нам выдался удачный шанс для беседы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 118,
    text:
      `
        Спустившись с козел, я подошел ближе к стражнику. Из вагончика выглянул клюв маски Мортимера. Недолго думая, он выбрался наружу, за ним последовала и монашка. По всей видимости, святоша детей оставила под присмотром барда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 119,
    text:
      `
        Они встали позади меня, а я не смел им препятствовать. Их явно интересовал вопрос, почему мы встали, и они его получат.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 120,
    text:
      `
        — Что происходит, Отто? Еще ничего такого не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 121,
    text:
      `
        — Приказ бургомистра. В городе недавно убили какого-то козла из знати. Хрен его знает, что там да как, но какой-то псих кромсает народ направо и налево. А вдруг сегодня на это обратили внимание. Считают, преступник еще не мог покинуть город, потому всех закрыли.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageFront: require('../../../../Images/ROR/Persons/Otto.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 122,
    text:
      `
        — Во время эпидемии чумы? Замечательное решение.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 180,
    text:
      `
        — Да, мэтр... в общем, никто вас отсюда не выпустит. Даже если предпримите попытку заплатить...
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageFront: require('../../../../Images/ROR/Persons/Otto.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 123,
    text:
      `
        — Вопрос никогда не стоял в возможности. Вопрос всегда стоял в цене.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 181,
    text:
      `
        — Не, Генрих, извини. Не в этот раз... хотя... может, один выход и есть. Сто крон, и мы в расчете. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageFront: require('../../../../Images/ROR/Persons/Otto.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 124,
    text:
      `
        — Крысы тебя дери, — рыкнул я.<p>Монашка, услышав эту фразу, зарделась и опустила взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 125,
    text:
      `
        — Понимаю-понимаю. Но, во-первых, я рискую. Во-вторых, в эту сумму входят услуги одного человека. Он тебе и поможет. Я лишь буду выступать в лице переговорщика, так как тебе он доверять не станет.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageFront: require('../../../../Images/ROR/Persons/Otto.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 126,
    text:
      `
        «Отто меня редко когда подводил. Уже неоднократно я останавливался в Гласвере, и ему удавалось решать проблемы. Истина заключалась в том, что запрашивает он всегда сверх меры. И не всегда было понятно, насколько полезно будут реализованы деньги».
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 127,
    text:
      `
        Как ни крути, он обычный рядовой. И если убили кого-то важного, ничего кардинально он не изменит, даже если у него здесь связи. Но все же это будет лучше, чем топтаться на месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 128,
    text:
      `
        «С другой стороны, и я тоже знаю пару людей, может, они помогут там, где не смог Отто?»
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 129,
    text:
      `
        Оба выбора по-своему рискованны. Терять время в зачумленном городе — смерти подобно, но нет гарантии, что Отто меня просто не кинет на деньги.
      `,
    buttons: [
      {
        text: 'Заплатить Отто сто крон',
        goTo: 131
      },
      {
        text: 'Не платить Отто и вернуться к телеге',
        goTo: 136
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 131,
    text:
      `
        Будет лучше получить хоть какую-то наводку, чем блуждать впотьмах. Да и внимание стражи он может отвлечь. С учетом, что у меня не всё так гладко с пассажирами, да и собственными документами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 132,
    text:
      `
        Деньги есть, но придется раскошелиться. Тайком протянув Отто монеты, я дождался, когда он их подсчитает. После этого на лице задохлика отразилась удовлетворительная улыбка.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageFront: require('../../../../Images/ROR/Objects/Moneybag.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 133,
    text:
      `
        — Приходи сегодня вечером... часов в десять к продовольственному складу. Там я тебя кое-с-кем познакомлю. Этот парень сможет помочь решить все твои проблемы. Пора прощаться. Скоро придет комендант. Удачи, Генрих.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageFront: require('../../../../Images/ROR/Persons/Otto.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 185,
    text:
      `
        Быстро отойдя прочь от стражника, я повел своих клиентов назад, попутно крепко задумавшись о дальнейших перспективах.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 134,
    text:
      `
        «Ситуация была дрянь, да и сумму он заломил немалую... но всё же мне кажется, другой вариант был бы хуже».
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    message: 'Вы потратили сто крон',
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [{ story: EStoriesEn.ROR, value: -100, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 135,
    text:
      `
        — Я пойду с вами, — коротко произнес Мортимер.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 186,
    text:
      `
        — Что? Исключено. Это не ваше дело, доктор.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 187,
    text:
      `
       — Мое... я жил в этом городе и кое-что здесь понимаю. И я абсолютно уверен в надобности проконтролировать данный вопрос.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 136,
    text:
      `
        Я посильнее сжал сумку с монетами. <p>Денег у меня прилично, но эта скотина заломила слишком огромную сумму. Нет, еще не факт, что его способ поможет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 137,
    text:
      `
        «А нам надо протянуть в этом путешествии».
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 138,
    text:
      `
        — Извини, Отто. Сам как-нибудь разберусь.<p>Отто лишь развел руками и тихо проговорил:<p>— Как знаешь. Мое дело предложить.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 139,
    text:
      `
        Я шагал назад в смятении. <p>«Может, не стоило так жадничать? С другой стороны... какие у меня были гарантии?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 140,
    text:
      `
         Вдруг, я заметил на себе взгляд Мортимера. Тот поравнялся рядом и откашлялся, заявив:<p>— Под городом существует водопровод... мы могли бы осмотреть его. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 141,
    text:
      `
        — Там не вылезешь, если только не станешь худой как скелет, — парировал я.<p>— Да. Если не знать нужные ходы. И у меня есть определенные подозрения насчет этого места. Уже давно возникали. Думаю, пришла пора исследовать это место и облегчить стражникам работу.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 142,
    text:
      `
        — Что? Я не нанимался в детективы. <p>— Боюсь, сейчас у нас нет выбора. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  },

  {
    id: 143,
    text:
      `
        Я вздохнул и коротко кивнул, а сам всё думал, смотря на повозку... уж не пригрел ли я среди пассажиров того, кого разыскивает стража? 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ROR', 'Глава 1', 'Часть 2', '0')
        }
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Gates.jpg')
  }
])
