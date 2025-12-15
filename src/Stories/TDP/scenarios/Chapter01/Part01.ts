import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { musicPlayer } from '../../../../Functions/musicPlayer'
import { loadData } from '../../../../Functions/localStorageManager'
import { blackFlash, redFlash, whiteFlash } from '../../../../Components/Slide/Slide'
import { firstChoiceMessage, inventoryMessage, previousSlideMessage } from '../../../../Utils/textConsts';

scenarioManager.addScenario({ storyName: EStoriesEn.TDP, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Тучи уже давно не давали пробиться солнцу. Я даже начал забывать, как выглядит ясное небо. Так еще и в воздухе стоял невыносимый смрад: великолепная смесь чеснока, пахучих лечебных трав, человеческих выделений и гнили.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/TDP/Glaswer.mp3'),
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 1,
    text:
      `
        Ожидая своих нанимателей, я решил держаться подальше от главной улицы, чтоб не привлекать ненужное внимание. В переулке, взгляд невольно зацепился за плакат с призывами местной церкви. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Item', id: 'Bag' }],
    message: previousSlideMessage,
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 2,
    text:
      `
        С него взирал иерарх Бертольд. Правда алчности в нем столько, что хватит на десятерых. Под его началом церковь стала больше сектой, чем храмом божьим.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    message: inventoryMessage,
    imageFront: require('../../../../Images/TDP/Objects/Poster.png'),
    imageBorder: require('../../../../Images/TDP/UI/Border.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 3,
    text:
      `
        В ожидании заказчиков решил немного перекусить. Кто знает, когда в следующий раз представится такая возможность.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 4,
    text:
      `
        По пути надо обязательно заехать в Истал и закупиться продуктами. Так как после него, до ближайшей деревни ехать прилично, и не факт что поездка будет простой.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 5,
    text:
      `
        А учитывая мои запасы, провизии хватит дня на полтора максимум. А покупать продукты в Гласвере — сродни самоубийству.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 6,
    text:
      `
        Это маленький городок, который находится на болотах, поэтому даже до эпидемии, пахло здесь далеко не фиалками. Ни одному нормальному торговцу и в голову не придет ехать сюда развивать бизнес. Поэтому и цены тут конские.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 7,
    text:
      `
        Выйдя из раздумий, решил все-таки сфокусироваться на еде. Развернув сверток и достав кусок хлеба, обнаружил, что он покрылся зеленым пушком.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageFront: require('../../../../Images/TDP/Items/Bread.png'),
    imageBorder: require('../../../../Images/TDP/UI/Border.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 8,
    text:
      `
        Поняв, что мой обед накрылся, швырнул его в сточную канаву, после чего решил проверить все содержимое. Помимо мерзкого запаха, пропитавшего рюкзак насквозь, на дне обнаружилась довольно крупная дырка.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 9,
    text:
      `
        «Я рискую потерять часть своих вещей. Не думаю что в повозке есть запасной. Да и купить новый сейчас нет возможности. Как лучше поступить?»
      `,
    buttons: [
      {
        text: 'Вышвырнуть рюкзак',
        goTo: 10
      },
      {
        text: 'Отряхнуть и оставить рюкзак',
        goTo: 12
      }],
    message: firstChoiceMessage,
    speaker: 'Гених',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 10,
    text:
      `
        Носить с собой этот балласт нет никакого смысла. Возможно получится что-то распихать по карманам. А остальное тогда сложу в повозку.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 11,
    text:
      `
        Долго не раздумывая, раскрутил рюкзак за лямку, и с силой швырнул его в сточную канаву. На него сразу слетелись мухи, да и крысам стало интересно посмотреть, есть ли там что-то съедобное. Ну, хоть кто-то рад такому подарку.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    simple: require('../../../../Sounds/TDP/Water_Splash.mp3'),
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: -1, category: 'Item', id: 'Bag' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 12,
    text:
      `
        С другой стороны, не выбрасывать же рюкзак из-за дырки, которую даже я смогу легко зашить. Подумаешь, продукты испортились. Сам виноват, что не уследил.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 13,
    text:
      `
        Запашок от него стоит далеко не самый приятный. Вытряхну, что осталось, и все. Главное потом его в воде прополоскать. Еще не один год прослужит мне верой и правдой.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    achievement: { story: EStoriesEn.TDP, name: 'KeepBag' },
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 14,
    text:
      `
        Однако, вопрос с едой все еще остается открытым. А времени посетить таверну уже не осталось. Впрочем, я бы не рисковал что-то есть или пить в местных заведениях даже в лучшие времена Гласвера.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 15,
    text:
      `
        Хотя время встречи еще не наступило, я постарался прийти пораньше. Эту привычку вбил в меня отец, который всю жизнь был чересчур пунктуален и точен, требуя того же от остальных.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Item', id: 'Dagger' },
      { story: EStoriesEn.TDP, value: +10, category: 'Item', id: 'Sugar' },
      { story: EStoriesEn.TDP, value: +10, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 16,
    text:
      `
        Благо, не пришлось их долго ждать. Первыми к месту встречи прибыли чумной доктор со своим ассистентом. И это не удивительно, ведь даже в разговоре он сильно спешил, даже о сумме за перевозку спорить не стал.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 17,
    text:
      `
        Такая спешка может указывать на проблемы с законом или церковью. Но меня это никогда не останавливало. Подобные пассажиры всё равно будут сидеть в повозке, да помалкивать.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 18,
    text:
      `
        Доктор двигался вполне уверенно, но немного скованно. Скорее всего это обычное последствие старости. Наверное, единственные оставшиеся в живых пожилые люди в нынешние времена — доктора.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 19,
    text:
      `
        О втором спутнике меня предупредили сразу. Это его ассистент. К тому же, двойная оплата никогда не бывает лишней.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 20,
    text:
      `
        Хотя особого доверия этот тип не вызвал. Если старик шагал уверенно, то этого шатало из стороны в сторону. Правильно мне всегда говорили, не умеешь пить — не пей, а если уж напился, то веди себя прилично.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 21,
    text:
      `
        При этом он еще и умудрялся держать склянки с какой-то темной жижей, параллельно пытаясь сохранить равновесие. Еще не хватало, чтобы они эту гадость разлили в повозке. Наверняка там что-то едкое и пахучее.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 22,
    text:
      `
        Зайдя в переулок, стало понятно, в чем дело. От его спутника несло хорошим таким перегаром. По ощущениям, он дней пять не просыхая вливал в себя все, что имеет в составе алкоголь.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 23,
    text:
      `
        «Хотя пробирки воняли еще хлеще. От обилия таких ароматов я уже чувствую, как мой завтрак сейчас полезет наружу».
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 24,
    text:
      `
        «Остается только надеяться, что этот уникум сможет продержаться без пьянства весь маршрут. Надо будет сказать доктору, чтоб держал его под контролем».
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 25,
    text:
      `
        Доктор приблизился, несколько секунд пристально изучая меня, видимо пытаясь убедиться, что он пришел куда нужно. Как будто я назвал недостаточно приметное место встречи.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 26,
    text:
      `
        Но прошло не больше минуты, как эта гигантская, пропахшая насквозь чесноком птичка, решила наконец заговорить.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 27,
    text:
      `
        — Я так понимаю, это Вы сэр Гарнер?
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 28,
    text:
      `
        «Ага, так чутье меня не обмануло. Судя по достаточно выразительному, хоть и слегка сиплому голосу, это действительно старик, предположительно, лет 60, может 65».
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 29,
    text:
      `
        — Да. Генрих Гарнер, к Вашим услугам. А Вы, стало быть, доктор Мортимер Дракен?
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 30,
    text:
      `
        — Именно. Предлагаю обойтись без прелюдий и перейти сразу к делу. Надеюсь, в письме я рассказал достаточно подробно о целях поездки. Если остались какие-то вопросы, прошу задать их позднее.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 0, category: 'Person', id: 'Mortimer' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 31,
    text:
      `
        — Кстати говоря, мне необходимо куда-то сложить вещи. А где ваша повозка?
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 32,
    text:
      `
        — Я оставил ее в другом месте. Чтобы не привлекать внимания.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 33,
    text:
      `
        Доктор не выказал никаких признаков недовольства или недоверия, но вот его компаньон раздраженно фыркнул, как будто ему есть что сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 34,
    text:
      `
        Но стоило доктору медленно повернуться в его сторону, тот сразу виновато опустил взгляд и окончательно притих. Значит, все же слова Мортимера для него не пустой звук, уже радует.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 35,
    text:
      `
        — Пересчитывать будете?
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    simple: require('../../../../Sounds/TDP/Coins.mp3'),
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 36,
    text:
      `
        — Пересчитаю в повозке, не хочу сейчас тратить на это время.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 37,
    text:
      `
        — Простите, господин Гарнер... можем ли мы выдвигаться?
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 38,
    text:
      `
        — Имейте терпение, доктор. С нами поедет еще несколько человек.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 39,
    text:
      `
        — Что?!
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich_Angry.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 40,
    text:
      `
        Не успев продолжить, Мортимер осадил своего помощника вновь. Они принялись о чем-то переговариваться, но я не стал вслушиваться. Спустя пару минут доктор решил продолжить разговор со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    simple: require('../../../../Sounds/TDP/Slap.mp3'),
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 41,
    text:
      `
        — Об этом речи не шло, господин Гарнер.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 42,
    text:
      `
        — А это было так важно? В письме вы не высказали никаких требований или пожеланий. К тому же, я перевозчик, не забывайте об этом. У меня могут быть и другие заказы.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 43,
    text:
      `
        — Не волнуйтесь, телега очень большая, поместимся.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 44,
    text:
      `
        На этом разговор оборвался, поскольку я заметил своих новых клиентов.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 45,
    text:
      `
        «Не люблю иметь дела со святошами, но монастырь хорошо заплатил. Раньше в церкви только и занимались тем, что побирались, твердя, как они бедствуют. Неужели чума им приносит настолько хорошую прибыль?»
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 46,
    text:
      `
        Поразительно, что в святую обитель приняли рыжую деву. Обычно таких принято считать ведьмами и придавать анафеме, с последующим сожжением на костре.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    message: 'Анафема — это полное отлучение человека от Церкви за тяжкие грехи.',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 47,
    text:
      `
        Впрочем, на злую колдунью она не слишком похожа. Выглядит скромно, стеснительная и пугливая. Монашка как монашка.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 48,
    text:
      `
        «С ней двое детей, о которых меня не предупредили. Похоже, придется потесниться».
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 49,
    text:
      `
        — Да осветит ваш путь божественный свет, господин Гарнер.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 0, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 50,
    text:
      `
        — Сестра Марта, верно?
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 51,
    text:
      `
        — Да. А это мои воспитанники, Виг и Джоанна. Еще раз спасибо за вашу помощь.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 52,
    text:
      `
        — Это работа. А за работу принято платить, сестра.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 53,
    text:
      `
        Послышался звон монет и лицо старшего ребенка исказила недовольная гримаса. Он неохотно вынул мешочек из поясной сумки и протянул мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    simple: require('../../../../Sounds/TDP/Coins.mp3'),
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Vig.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 54,
    text:
      `
        Девочка была сильно младше парня. Она старалась держаться позади Марты, боясь отойти от нее хотя бы на шаг.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Joanne.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 55,
    text:
      `
        «Компания собралась, что надо. Устрашающий старик в маске падальщика. Алкоголик-ассистент. Монашка с двумя детьми... Веселое однако предстоит путешествие».
      `,
    buttons: [
      {
        text: 'Продолжить',
        goTo: 56,
        gift: true
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 56,
    text:
      `
        — Прекрасно, теперь все в сборе. Следуйте за мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_01.png')
  },

  {
    id: 57,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    interruptiveFrame: { goTo: 58 },
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 58,
    text:
      `
        Теперь можно было отправляться в путь. Дорога до повозки не заняла слишком много времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 59,
    text:
      `
        — Ну, что ж... конечно не императорская карета, но это мера временная. Так что располагайтесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 60,
    text:
      `
        Мортимер, не взглянув на других попутчиков, кивнул своему помощнику, и оба полезли внутрь.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 61,
    text:
      `
        — Рухлядь какая-то, она вообще, доедет хоть куда-то?! Тебе за что денег заплатили?!
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speakerR: 'Дитрих',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 0, category: 'Person', id: 'Ditrich' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 62,
    text:
      `
        Я сталкивался со многими пассажирами, которые не умели держать себя в руках. Но иногда бывают моменты, когда и мое терпение может иссякнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 63,
    text:
      `
        «Хочется сказать ему пару ласковых, однако это не лучшая идея, сразу портить отношения. Хотя этот гад явно нарывается».
      `,
    buttons: [
      {
        text: 'Ответить',
        goTo: 64
      },
      {
        text: 'Проигнорировать оскорбление',
        goTo: 70
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 64,
    text:
      `
        Доктору следовало бы лучше подбирать персонал и внимательно следить за ним. Не слишком уж это здраво, грубить тому, от кого зависит твоя жизнь на ближайшие несколько дней.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 1, category: 'Choice', id: 'ResponseDitrich' }],
    achievement: { story: EStoriesEn.TDP, name: 'ResponseDitrich' },
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 65,
    text:
      `
        Не хотелось бы вовлекать в этот конфликт всех присутствующих, но эту скотину явно стоит спустить обратно с небес на землю.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 66,
    text:
      `
        — Тебе чего-то не нравится? Или ты хочешь пойти со своими склянками пешочком? Могу устроить.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 67,
    text:
      `
        Дитрих закипел от злости. Его руки так дрожали, словно готовясь швырнуть весь свой груз мне в лицо. Однако в дело быстро вмешался доктор, который чуть ли не за шиворот оттянул ассистента к телеге.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich_Angry.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 68,
    text:
      `
        — Прошу прощения за Дитриха, я обязательно с ним поговорю.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 69,
    text:
      `
        Я же только кивнул и направился к козлам. Эх, а ведь уже успел представить, как забавно он бы бежал за нами, то и дело спотыкаясь и проклиная все вокруг, кроме своего скудного ума.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    message: 'Дитрих держит на вас обиду.',
    stats: [
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Ditrich' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 70,
    text:
      `
        Я повернулся и молча посмотрел ему в глаза. Еще не хватало с его начальником ссориться. Ничего, мне еще представится возможность отыграться.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 71,
    text:
      `
        Однако, карма все-таки существует. Стоило мне отвернуться от него, как тут же послышался звонкий шлепок. Мортимер в который раз наградил алкаша оплеухой. Ну, и на этом спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    simple: require('../../../../Sounds/TDP/Slap.mp3'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 72,
    text:
      `
        Конфликт подошел к концу, еще не начавшись. Дитрих с Мортимером скрылись в повозке. Монашка с воспитанниками тоже не заставила себя ждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 73,
    text:
      `
        Я решил посмотреть, как там Гвин. У коня в последнее время настроение ни к черту.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: require('../../../../Images/TDP/Persons/Horse_Black.png'),
    imageBorder: require('../../../../Images/TDP/UI/Border.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 74,
    text:
      `
        «Последним сахарком с ним поделюсь».
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speakerL: 'Генрих',
    imageFront: require('../../../../Images/TDP/Persons/Horse_Black.png'),
    imageBorder: require('../../../../Images/TDP/UI/Border.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 75,
    text:
      `
        <i>Черный конь недовольно таращится на вас и шумно фырчит, кивая головой.</i>
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    simple: require('../../../../Sounds/TDP/Horse.mp3'),
    imageFront: require('../../../../Images/TDP/Persons/Horse_Black.png'),
    imageBorder: require('../../../../Images/TDP/UI/Border.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 76,
    text:
      `
        Вздохнув, я погладил лошадь по шее, прошептав пару ласковых фраз. Конечно, ему хреново... а кому нет?
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Images/TDP/Persons/Horse_Black.png'),
    imageBorder: require('../../../../Images/TDP/UI/Border.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 77,
    text:
      `
        Протянув по кубику сахара обоим, я на некоторое время успокоил коней.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    stats: [
      { story: EStoriesEn.TDP, value: -2, category: 'Item', id: 'Sugar' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 78,
    text:
      `
        «Надеюсь, не выдохнутся, пока не доберемся до нормальных лугов. Хоть там нормально поедят».
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 79,
    text:
      `
        Отойдя от лошадей, я обратил внимание, что на них смотрит девочка, которая пришла вместе с монашкой. Джоанна, кажется. Она не произнесла ни слова, просто переводила взгляд то на меня, то на лошадей.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Joanne.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 80,
    text:
      `
        Я осмотрелся, но не заметил присутствие Марты. Обратив внимание на робкий вид девочки, показалось, что она хочет о чем то спросить, но боится.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Joanne.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 0, category: 'Person', id: 'Joanne' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 81,
    text:
      `
        «Спровадить бы Джоанну подальше, да только с детьми я разговаривать не умею. Но и грубить ей, желания нет, а то еще всю дорогу будет от меня шарахаться».
      `,
    buttons: [
      {
        text: 'Прогнать',
        goTo: 82
      },
      {
        text: 'Дать погладить лошадь',
        goTo: 85
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 82,
    text:
      `
        Я кашлянул, после чего жестом велел девчонке отойти. Не хотелось, чтобы мне потом на ухо Марта всю дорогу зудела о том, что я ей не сообщил, где ее малявка ошивалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Joanne.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 83,
    text:
      `
        — Эй, тебя могли потерять. Давай, залезай в повозку и не пугай мне лошадей.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 84,
    text:
      `
        Девчонка дернулась так, как будто я вывел ее из некоего транса. Она испуганно посмотрела на меня и быстро убежала к Марте.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    message: 'Джоанна вас боится. Марта признательна вам.',
    stats: [
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Joanne' },
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 85,
    text:
      `
        Может, если дать пообщаться с лошадьми, ей станет легче? Я улыбнулся и наклонился к Джоанне, стараясь выглядеть как можно более дружелюбно.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    achievement: { story: EStoriesEn.TDP, name: 'Zoo' },
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 86,
    text:
      `
        — Что, лошадки нравятся? Можешь погладить, если хочешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 87,
    text:
      `
        Девочка застыла на несколько секунд, после чего посмотрела на меня и нерешительно кивнула. Но сразу же обернулась, как будто боялась, что ее накажут за это.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Joanne.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 88,
    text:
      `
        Я же недолго думая, взял малышку на руки и поднес к Аруну, он был куда более спокойным, нежели Гвин. Девочка некоторое время не двигалась, но все же провела рукой по гриве лошади.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Images/TDP/Persons/Horse_White.png'),
    imageBorder: require('../../../../Images/TDP/UI/Border.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 89,
    text:
      `
        Стало заметно, что на лице Джоанны появилась улыбка, а движения — смелее.<p>— Что вы делаете?
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    simple: require('../../../../Sounds/TDP/Horse_01.mp3'),
    speakerR: 'Марта',
    imageFront: require('../../../../Images/TDP/Persons/Horse_White.png'),
    imageBorder: require('../../../../Images/TDP/UI/Border.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 90,
    text:
      `
        Обернувшись, я заметил монахиню. Она с волнением смотрела на девочку. Но было понятно, что ее недовольный тон направлен в мою сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 91,
    text:
      `
        — Вы зачем это сделали? А если бы ваша лошадь ее укусила?
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 92,
    text:
      `
        — Ничего бы с ней не случилось. Арун не кусается.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 93,
    text:
      `
        Пришлось опустить девочку на землю. Стоило только коснуться ногами земли, как она тут же забежала за спину монахини. Марта недовольно фыркнула и вернулась в повозку.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    message: 'Джоанна сильнее вам доверяет. Марта разочарована в вашем поведении.',
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Joanne' },
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 94,
    text:
      `
        Прошло несколько минут, и меня окликнули из повозки, дав понять, что можно трогать. Сев на козлы, я жестом подозвал к себе старшего пацана.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 95,
    text:
      `
        Он резво запрыгнул ко мне, отвернувшись в сторону. Всем своим видом показывая нежелание разговаривать.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Vig.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 96,
    text:
      `
        — Ловко ты. Уже доводилось ездить на такой?
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 97,
    text:
      `
        — Да. И не раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speakerR: 'Виг',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Vig.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 0, category: 'Person', id: 'Vig' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 98,
    text:
      `
        — В таком случае, могу по дороге дать поводья, если будет желание.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 99,
    text:
      `
        — Не будет. Займитесь уже делом.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speakerR: 'Виг',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Vig.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 100,
    text:
      `
        «Я по крайней мере попытался. Да и зачем мне это. Но, пацан явно за словом в карман не лезет. Вот бы все попутчики были такими, того и гляди, поездки проходили спокойнее».
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 101,
    text:
      `
        Пересчитав полученные деньги, я убрал их в свой кошель и уже был готов направиться к воротам, но кто-то начал истошно кричать мне в след.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    message: 'В Крейсе используется собственная валюта — Имперская крона. Не забывайте, это очень ценный ресурс, который можно получить не только законным путем. Распоряжайтесь ей с умом и будьте осторожны.',
    stats: [
      { story: EStoriesEn.TDP, value: +200, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 102,
    text:
      `
        К повозке со всех ног несся молодой парень. За ним не было погони, но выглядел так, будто украл какую то ценную вещицу у местного аристократа и пытается, как можно быстрее свинтить с места преступления.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    music: require('../../../../Sounds/TDP/Jack_Theme.mp3'),
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 103,
    text:
      `
        Подбежав ближе, наши взгляды пересеклись. Мне стало любопытно, что же ему нужно.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 104,
    text:
      `
        — Сэр! Молю о помощи!
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 105,
    text:
      `
        — Что стряслось?
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 106,
    text:
      `
        — Сэр... мне нужно срочно покинуть город. Я... я готов заплатить! Сколько пожелаете, умоляю.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 107,
    text:
      `
        Заметив явное недоверие на моем лице, он достал мешочек с монетами. Судя по звуку, там явно около пятидесяти крон, не меньше.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 108,
    text:
      `
        «Паренек похоже бард. Помимо языка без костей, такие привыкли разбрасываться своими деньгами. Помочь то я могу, но чего он натворил, раз так торопится покинуть город?»
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 109,
    text:
      `
        Вопрос лишь в том, сколько с него взять. Сейчас он готов предложить всё, что у него есть, лишь бы получить желаемое. Только потом осознает и будет жалеть. 
      `,
    buttons: [
      {
        text: 'Взять с барда обычную плату',
        goTo: 110
      },
      {
        text: 'Взять всю предложенную сумму',
        goTo: 114
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 110,
    text:
      `
        В конце концов, жалко его. Раньше я часто проходил через подобное. Не особо приятно, когда пытаются нажиться на чужих проблемах.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 1, category: 'Choice', id: 'BardPayNormal' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 111,
    text:
      `
        — Десять крон за день поездки. Давай деньги и запрыгивай в повозку.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 112,
    text:
      `
        — Спасибо Вам огромное! Вы мой спаситель. Меня зовут Джек Рейнер, а вас?
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    message: 'Вы получили десять крон. Бард благодарен вам за помощь.',
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    stats: [
      { story: EStoriesEn.TDP, value: +10, category: 'Item', id: 'Money' },
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Jack' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 113,
    text:
      `
        — Генрих Гарнер.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 114,
    text:
      `
        Деньги в наше время нужны всем. А этот парень еще может принести проблемы. Я рискую, значит имею право взять все.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    achievement: { story: EStoriesEn.TDP, name: 'TakeJacksMoney' },
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 115,
    text:
      `
        — Ну, раз уж сам предложил, то давай... Всё.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 116,
    text:
      `
        — Всё? Но сэр... я...
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speakerR: 'Неизвестный',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack_Puzzled.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 117,
    text:
      `
        — Тебе нужно отсюда сбежать. А я и так уже с пассажирами.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 118,
    text:
      `
        — Ладно, у меня нет на это времени. Вот деньги. И кстати я Джек...
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 119,
    text:
      `
        Немного поколебавшись, юноша швырнул в меня свой кошель. Я указал взглядом на повозку. Он не проронил ни слова, быстро забежав внутрь к остальным.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    message: 'Вы получили девяносто крон. Барда расстроила ваша жадность.',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    stats: [
      { story: EStoriesEn.TDP, value: +90, category: 'Item', id: 'Money' },
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Jack' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 120,
    text:
      `
        «Его за язык никто не тянул. Пускай лучше на себя обижается. Надо сначала думать, а потом говорить».
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 121,
    text:
      `
        Внутри послышалась какая-то шумиха, впрочем, она была вполне объяснима. Интересно, не пострадают ли драгоценные склянки дока? Хотя, какое мне дело. Нужно выбираться из этого города как можно скорее.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    music: require('../../../../Sounds/TDP/Glaswer.mp3'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Streets.png')
  },

  {
    id: 122,
    text:
      `
        «Ну твою ж мать...». 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech_Annoyed.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 123,
    text:
      `
        «Разумеется, что-то должно было пойти не так! Как-то необычайно много стражников, которые собрали целую очередь из выезжающих повозок».
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech_Annoyed.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 124,
    text:
      `
        На посту, как обычно, находился один из моих знакомых, стражник по имени Отто, который уже не раз помогал решать проблемы при выезде из города.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 125,
    text:
      `
        Но сейчас он явно нервничал и вряд-ли хотел, чтобы разговор проходил перед его сослуживцами. Видимо, случилось что-то серьезное.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 126,
    text:
      `
        Спустившись, я направился к Отто. Из повозки выглянул клюв маски Мортимера. Недолго думая, он выбрался наружу, за ним последовала и Марта.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 127,
    text:
      `
        Они встали позади меня и их явно интересовал вопрос, почему мы остановились.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 128,
    text:
      `
        — Что происходит, Отто? Это что-то новенькое.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 129,
    text:
      `
        — Приказ бургомистра. Хрен его знает, что там да как, но какой-то псих кромсает народ направо и налево. Считают, преступник еще в городе, потому всех и закрыли до выяснения обстоятельств.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 130,
    text:
      `
        — Во время эпидемии чумы? Замечательное решение.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 131,
    text:
      `
        — Да, сэр... если коротко, то никто вас отсюда не выпустит. Приказ есть приказ.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 132,
    text:
      `
        — Вопрос никогда не стоял в возможности. Вопрос всегда стоял в цене.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 133,
    text:
      `
        — Не, Генрих, извини. Не в этот раз... хотя... может, один выход все-таки есть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 134,
    text:
      `
        — Ну, и что это за выход? Не томи Отто, мы и так спешим.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 135,
    text:
      `
        — Всего двести крон, и мы в расчете, ничего сложного.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 136,
    text:
      `
        — Всего двести крон?! Да твою ж мать, ты сейчас серьезно?
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech_Annoyed.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 137,
    text:
      `
        — Понимаю-понимаю. Но, я рискую лишиться работы, в лучшем случае. В эту сумму входят услуги одного человека. Он то тебе и поможет.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 138,
    text:
      `
        — Я лишь выступаю как посредник, потому что тебе, просто так доверять точно не станут.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 139,
    text:
      `
        «Как ни крути, Отто обычный рядовой. И если убили кого-то важного, ничего кардинально не изменится, даже если у него здесь связи. Но с другой стороны, стал бы он тогда предлагать нечто подобное?»
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 140,
    text:
      `
        «Оба выбора по-своему рискованны. Терять время в гниющем городе — смерти подобно, но нет гарантии, что Отто меня не обманет».
      `,
    buttons: [
      {
        text: 'Заплатить <span style="color: #ff8b8b">(200 крон)</span>',
        goTo: 141
      },
      {
        text: 'Не платить',
        goTo: 154
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 141,
    text:
      `
        Будет лучше получить хоть какую-то помощь, чем вообще ничего. Деньги есть, но придется раскошелиться. Надеюсь, оно того стоит.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 1, category: 'Choice', id: 'Pay' }],
    achievement: { story: EStoriesEn.TDP, name: 'SpendMoney' },
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 142,
    text:
      `
        Тайком протянув Отто монеты, я дождался, когда он их подсчитает.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    message: 'Вы потратили двести крон. ',
    simple: require('../../../../Sounds/TDP/Coins.mp3'),
    stats: [
      { story: EStoriesEn.TDP, value: -200, category: 'Item', id: 'Money' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 143,
    text:
      `
        — Приходи сегодня в десять вечера к продовольственному складу. Этот человек сможет помочь решить все твои проблемы. Удачи, Генрих.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 144,
    text:
      `
        Быстро отойдя прочь от стражника, я повел своих пассажиров назад, серьёзно задумавшись о правильности своего решения.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 145,
    text:
      `
        «Ситуация дрянь, да и сумму он заломил немалую... но всё же мне кажется — другой вариант был бы хуже».
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 146,
    text:
      `
        Но тут меня одернул Мортимер, как бы намекая отойти поговорить наедине.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 147,
    text:
      `
        — Я пойду с вами.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 148,
    text:
      `
        — Что? Исключено. Это не ваше дело, доктор.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 149,
    text:
      `
        — Мое... я жил в этом городе и кое-что здесь понимаю. И абсолютно уверен — тут явно что-то не так.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 150,
    text:
      `
        — Тем не менее, сейчас вы лишь пассажир, док. Решать проблемы с дорогой — моя задача, но никак не ваша.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 151,
    text:
      `
        — Не согласен. Если с вами на встрече что-то произойдет, это будет уже наша общая проблема.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 152,
    text:
      `
        — К тому же, вы уже отдали наши деньги, которые были уплачены за весь путь следования, так что не обсуждается.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speakerL: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 153,
    text:
      `
        — Ладно, так уж и быть, ваша взяла, док. Но говорить буду я, и даже не смейте встревать.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 154,
    text:
      `
        «Денег у меня сейчас прилично, но эта скотина заломила слишком огромную сумму. И еще не факт, что его способ поможет».
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 155,
    text:
      `
        — Извини, Отто. Все-таки сумма слишком большая. На такое я пойти не могу.
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 156,
    text:
      `
        — Как знаешь. Мое дело предложить.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 157,
    text:
      `
        — И кстати, Генрих, дам тебе совет по старой дружбе — не лезь куда не следует, целее будешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speakerR: 'Отто',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Otto.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 158,
    text:
      `
        «От последней фразы мне стало немного не по себе. Видимо, дело здесь явно не только в убийце. Но тогда в чем же?»
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 159,
    text:
      `
        Я вернулся назад к повозке в полном смятении. Ко мне подошел обеспокоенный Мортимер, кивком показывая желание поговорить наедине.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 160,
    text:
      `
        — Под городом проходит канализация... мы могли бы осмотреться там.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 161,
    text:
      `
        — Там не вылезешь, на всех выходах стоят решетки.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 162,
    text:
      `
        — Да. Если не знать нужные ходы. Плюс у меня есть подозрения насчет этого места. Кто знает, поможет ли оно нам выбраться или даст ответы касаемо происходящего.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 163,
    text:
      `
        — Что? Я не нанимался в детективы.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 164,
    text:
      `
        «Судя по всему, в этом наши взгляды с доком сходятся. Разница лишь в том, что мне нет никакого дела до судьбы Гласвера. Нам бы выбраться отсюда поскорее».
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 165,
    text:
      `
        — Боюсь, сейчас у нас нет выбора. Иначе может стать только хуже.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 166,
    text:
      `
        Вздохнув, я посмотрел на Мортимера и одобрительно кивнул. Окидывая взглядом повозку, меня не покидала одна единственная мысль... уж нет ли среди пассажиров того, кого так разыскивает стража?
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 167,
    text:
      `
        Нужно сказать об этом остальным. Нет никакого смысла скрывать причину задержки. Это избавит от ненужных расспросов и поможет продумать наши дальнейшие действия.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 168,
    text:
      `
        Пока мы с доком разговаривали, из повозки вылез Джек. Переминаясь с ноги на ногу он пристально смотрел то на нас, то по сторонам. Словно боялся кого-то встретить.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 169,
    text:
      `
        Вернувшись к повозке, все они сразу же подошли к нам в ожидании, что мы расскажем подробности разговора со стражей.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 170,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'Pay' }) >= 1
        },
        goTo: 171
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.TDP, category: 'Choice', id: 'Pay' }) <= 0
        },
        goTo: 175
      }
    ],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 171,
    text:
      `
        Я рассказал как прошел разговор, а также упомянул про план Мортимера.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 172,
    text:
      `
        — Но ведь это же может быть опасно! Вы точно уверены, что все будет в порядке и мы сможем покинуть город? Не возникнет ли потом проблем?
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 173,
    text:
      `
        — Уважаемая Марта, прошу вас не волноваться касаемо этого. Мы с Генрихом уже обсудили все риски. Поэтому, на встречу отравимся вдвоем. Как-нибудь, да справимся.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 174,
    text:
      `
        Мортимер улыбнулся Марте. По напряженной позе и голосу, было понятно — он переживает не меньше. А для успокоения остальных и разрядки ситуации, решил держаться более сдержанно. Показывая, что ситуация под контролем.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 175,
    text:
      `
        Я рассказал как прошел разговор, а также упомянул про план Мортимера.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 176,
    text:
      `
        — Но ведь это же может быть опасно! Вы точно уверены, что найдете способ покинуть город? Не будет ли потом у нас проблем?
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 177,
    text:
      `
        — Уважаемая Марта, прошу вас не волноваться касаемо этого. Мы оба понимаем всю серьезность ситуации. Поэтому и идем туда вдвоем.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speakerR: 'Мортимер',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 178,
    text:
      `
        — Не стоит волноваться, мы сходим лишь посмотреть. Ничего серьезного.
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 179,
    text:
      `
        Мортимер улыбнулся Марте. По напряженной позе и голосу, было понятно — он переживает не меньше. А для успокоения остальных и разрядки ситуации, решил держаться более сдержанно. Показывая, что ситуация под контролем.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 180,
    text:
      `
        — Но а что тогда делать нам? Мы же не можем просто остаться здесь, ожидая вашего возвращения. Да и кто знает, как долго вы там пробудете.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 181,
    text:
      `
        «А ведь бард прав. Мы с доком пропадем на несколько часов. Это в лучшем случае. Не стоит также забывать, что с нами женщина и дети. Но как тогда лучше поступить?»
      `,
    buttons: [
      {
        text: 'Остаться на месте',
        goTo: 182
      },
      {
        text: 'Спрятать повозку',
        goTo: 188
      },
      {
        text: 'Попросить помощи',
        goTo: 195
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 182,
    text:
      `
        — У нас сейчас нет никаких других вариантов. Повозку с дороги я уберу, но вам придется остаться тут. В ящике под скамьей есть пара пледов на случай, если станет прохладно.
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 1, category: 'Choice', id: 'StayPut' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 183,
    text:
      `
        — И все? А делать то нам что? А если кто-то подойдет с расспросами, что тогда?
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 184,
    text:
      `
        — Тебе что, десять лет? Или может я твоя нянька? Сам придумай, чем заняться. Залезь в повозку и не высовывайся, тогда никто и не подойдет.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 185,
    text:
      `
        — Но сэр Гарнер… Мы правда не знаем, что может случиться в Ваше отсутствие. Дети очень напуганы. Помогите нам, прошу.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    message: 'Джека не понравилась ваша грубость.. ',
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    stats: [
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Jack' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 186,
    text:
      `
        — К сожалению, ничем не могу помочь. Как я уже сказал, я не нянька. Моя работа довезти вас до пункта назначения. Не просите невозможного. Переждать одну ночь, не так уж и страшно.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 187,
    text:
      `
        «Я всего лишь извозчик. Какое мне дело до их комфорта. Довезти — довезу, как и обещал, но потакать капризам я не намерен».
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    message: 'Марту расстроили ваши слова. Она будет меньше просить вас о помощи. ',
    stats: [
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 188,
    text:
      `
        «Все-таки, оставлять их в таком месте может быть опасно. Но скрыть от лишних глаз я могу попытаться».
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 1, category: 'Choice', id: 'HideWagon' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 189,
    text:
      `
        — Предлагаю вернуться на место встречи. Там не так людно, поэтому вряд ли вас кто то побеспокоит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 190,
    text:
      `
        — Но что нам делать всю ночь? Или предлагаете просто сидеть и ждать?
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 191,
    text:
      `
        — К сожалению, только это и остается. Согласен, далеко не самый приятный вариант, но других увы нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 192,
    text:
      `
        — Сэр Гарнер, а как же дети? Они не подготовлены к таким условиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 193,
    text:
      `
        — Я понимаю, но ситуация играет против нас. В повозке под скамьей есть ящик. В нем лежат пледы, они помогут вам с детьми согреться. Больше мне предложить нечего.
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 194,
    text:
      `
        Это все, что я могу для них сделать. Как хорошо, что я вожу с собой теплые вещи, так как уже ни раз приходилось спать в повозке. Вот и сейчас выручают. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    message: 'Марта и Джек понимают сложность ситуации и принимают ваше решение. ',
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Martha' },
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Jack' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 195,
    text:
      `
        «А ведь если не изменяет память, как-то раз местный трактирщик проиграл мне в карты. Он тогда был изрядно пьян, но обещал помочь в случае чего Остается надеяться, что он помнит про свое обещание». 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: 1, category: 'Choice', id: 'AskForHelp' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 196,
    text:
      `
        — Пожалуй, один вариант есть. Залезайте в повозку, тут не далеко.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 197,
    text:
      `
        Я запрыгнул на козлы, и мы вернулись обратно вглубь города. Хоть это было и давно, но надеюсь что он не успел закрыть свой трактир или, что хуже, помереть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/City_Gates_Closed.png')
  },

  {
    id: 198,
    text:
      `
        К счастью, в заведении горел свет. И даже пахло едой, а не помоями, как в большинстве подобных мест Гласвера.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 199,
    text:
      `
        — Приехали, можно вылезать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 200,
    text:
      `
        — Это что, трактир? Но разве нам хватит денег, чтобы оплатить ночлег на пятерых?
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    speakerR: 'Джек',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Jack.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 201,
    text:
      `
        — Чего ты так переживаешь? Все в порядке, если этот алкаш не пропил себе мозги.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 202,
    text:
      `
        — Сэр Гарнер, вы уверены? 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 203,
    text:
      `
        — Не волнуйтесь. Владелец задолжал мне, да и как я могу оставить вас с детьми спать в повозке целую ночь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 204,
    text:
      `
        — Правда? Не стоило так за нас переживать… Спасибо вам.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speakerR: 'Марта',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 205,
    text:
      `
        — Да не стоит. И вы можете так не фамильярничать, обращайтесь ко мне по имени.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    message: 'Марте очень приятна ваша забота о детях. Она станет больше доверять вам.',
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: +2, category: 'Person', id: 'Martha' },
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Vig' },
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Joanne' },
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Jack' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 206,
    text:
      `
        В трактире никого не было, а вся мебель выглядела ухоженно, словно готовились принять важных гостей. Но не успев толком осмотреться, меня окликнул знакомый голос.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 207,
    text:
      `
        — Да не может такого быть! Неужели это Его Высочество Генрих, мать его, Гарнер! А я уж думал, что ты помер давным давно.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speakerR: 'Трактирщик',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Innkeeper.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 208,
    text:
      `
        — Поверь, я был о тебе того же мнения. Рад что ошибся.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 209,
    text:
      `
        Протерев руки и бросив полотенце на стол, из-за барной стойки вышел владелец этого заведения. Высокий, слегка полноватый мужичок лет тридцати пяти, от которого несло смесью перегара и жаренного мяса.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 210,
    text:
      `
        Подойдя поближе, он явно занервничал и переменился в лице.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 211,
    text:
      `
        — Ой-ой, где же мои манеры. Мадам, прошу простить мою бестактность. Не хотел обидеть ваш слух своей бранью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    speakerR: 'Трактирщик',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Innkeeper.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 212,
    text:
      `
        — Мы — трактирщики, редко удостаиваемся чести видеть столь приятных молодых дам. И таких очаровательных детишек.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speakerR: 'Трактирщик',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Innkeeper.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 213,
    text:
      `
        Марта вроде и хотела что-то сказать, но от неожиданности растерялась. Вцепившись в мою руку, она все крепче прижимала ее к себе, всем видом показывая, что я должен что-то сделать.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 214,
    text:
      `
        «Мягкий аромат духов заставил меня отвлечься от всего происходящего и думать только о ней. А тепло от близости наших тел лишь усиливало чувство. Но это разве нормально? В конце концов она же монахиня».
      `,
    buttons: [
      {
        text: 'Вырваться',
        goTo: 215
      },
      {
        text: '218',
        goTo: 215
      }],
    speakerL: 'Генрих',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Martha.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 215,
    text:
      `
        Все-таки, это неправильно. Церковные обеты строго-настрого запрещают любые виды отношений с мужчинами. Да и я, явно не лучший кандидат.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 216,
    text:
      `
        Я аккуратно вытащил руку из объятий и сделал шаг вперед, скрывая ее из поля зрения трактирщика. Не хватало мне еще слухов, что я монахинь совращаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 217,
    text:
      `
        Марта опустила взгляд и взялась руками за платье. Ее явно это опечалило. Но лучше так, чем потом сожалеть о своем выборе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    message: 'Марта стесняется вас, жалея о своем действии.',
    stats: [
      { story: EStoriesEn.TDP, value: -1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 218,
    text:
      `
        Подобное внимание девушек всегда было моей слабостью. Вот и сейчас не мог этому воспротивиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 219,
    text:
      `
        Ее беспокойное дыхание, маленькая ручка, которая так невинно смотрелась на моем предплечье.
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 220,
    text:
      `
        Однажды в детстве отец прочитал мне сказку про бесстрашную рыжую колдунью, что пересекла полмира в поисках артефакта, способного вернуть к жизни любимого.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 221,
    text:
      `
        Разумеется, подобная литература не котировалось в народе по причине осуждения со стороны церкви и ряда множества политических взглядов.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 222,
    text:
      `
        «До сих пор не понимаю, где отец откопал эту литературу».
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 223,
    text:
      `
        Но та история оставила след в моей душе. Хотя и образ рыжей воинственной девы никак не мог соотноситься с робкой монахиней.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 224,
    text:
      `
        Я улыбнулся Марте и своим мыслям, положив ладонь на ее руку. Перевел внимание обратно на трактирщика.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 225,
    text:
      `
        — Прекращай, мы не тешить твое самолюбие пришли. Есть дело.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    message: 'Марта относится к вам лучше.',
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    stats: [
      { story: EStoriesEn.TDP, value: +1, category: 'Person', id: 'Martha' }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 226,
    text:
      `
        — Ладно, чего это я. Так зачем вы ко мне приперлись тогда?
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    speakerR: 'Трактирщик',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Innkeeper.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 227,
    text:
      `
        — Если ты вдруг забыл, то напоминаю: за тобой есть должок. И сейчас самое время его вернуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 228,
    text:
      `
        — О как! Ну, допустим припоминаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speakerR: 'Трактирщик',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Innkeeper.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 229,
    text:
      `
        — Как погляжу, клиентов сейчас особо нет, а значит что и комнаты свободные имеются. Нам бы ночь переждать, а утром уедем.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 230,
    text:
      `
        Задумавшись, он уставился куда-то в потолок, то и дело почесывая свою бороду. Тяжело вздохнув, его взгляд снова переключился на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Innkeeper.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 231,
    text:
      `
        — Ладно, хрен с тобой. Как говорится — уговор дороже денег. Будет вам комната. Но только на эту ночь, не дольше.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speakerR: 'Трактирщик',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Innkeeper.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 232,
    text:
      `
        — И еще пару одеял дополнительно. А то помню я твои комнаты. От холода умереть можно.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speakerL: 'Генрих',
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 233,
    text:
      `
        — Пф… Да пожалуйста. Но на еду даже не рассчитывайте. Кухня закрыта, продуктов нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speakerR: 'Трактирщик',
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Innkeeper.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 234,
    text:
      `
        Вернувшись за стойку он взял из шкафчика ключ и пошел к лестнице, жестом приглашая за собой. Поднявшись на второй этаж, открыл комнату, отдав ключ Джеку.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern.png')
  },

  {
    id: 235,
    text:
      `
        Помещение оказалось достаточно скромным. Радовало только то, что на кровати могло поместиться больше одного человека.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern_Room.png')
  },

  {
    id: 236,
    text:
      `
        Долго думать не пришлось. Дети с Мартой легли на кровать, а Джек расположился на небольшом диванчике у окна. Мы с Мортимером решили вернуться обратно к повозке, в которой, храпя на пол улицы, спал Дитрих.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Tavern_Room.png')
  },

  {
    id: 237,
    text:
      `
        Сейчас нет времени просто стоять и размышлять, надо действовать, и как можно быстрее. В любой момент наши дела могут стать еще хуже.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('TDP', 'Глава 1', 'Часть 2', '0')
        }
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Henriech.png'),
    achievement: { story: EStoriesEn.TDP, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/TDP/Backgrounds/Glaswer_Street_Evening.png')
  }
])
