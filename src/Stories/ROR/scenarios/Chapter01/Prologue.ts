import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { previousSlideMessage } from '../../../../Utils/TextConsts'

scenarioManager.addScenario({ storyName: EStoriesEn.ROR, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        <i>Дневник доктора Мортимера Дракена. Не смотреть, не трогать и тем более - Не открывать!
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: 'Дата: 4 октября 1586 года',
    music: require('../../../../Sounds/ROR/Prologue.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Table_Candle.jpg')
  },

  {
    id: 1,
    text:
      `
        Дабы не упустить все детали грядущего исследования, мною было принято решение записывать свои мысли и наблюдения. В данном случае стоит определить, с чего всё начиналось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Images/ROR/Backgrounds/Table_Candle.jpg')
  },

  {
    id: 2,
    text:
      `
        Всё происходило как-то спонтанно. Долгое время в столице даже не представляли, что происходит на окраинах. Но из северных регионов начала приходить информация о загадочном море и голоде. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    message: 'Мор - устар., прост. повальная, массовая смерть, эпидемия',
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Streets.jpg')
  },

  {
    id: 3,
    text:
      `
        Никто не обращал внимания, пока многие деревни просто не вымерли, а в казну не прекратился приток средств. Тогда уже никто не мог игнорировать надвигающуюся беду.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Streets.jpg')
  },

  {
    id: 4,
    text:
      `
        Лишь после того, как была собрана специальная группа чиновников, выяснилось, что жителей поражает некая болезнь. Основные симптомы: высыпание гнойников по всему телу (даже внутри), лихорадка, боль в мышцах и нетипичный белый налет на языке. Как дальше будет протекать эта эпидемия — неизвестно.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Streets.jpg')
  },

  {
    id: 5,
    text:
      `
        Однако часть из посланцев вернулась в столицу, разнося болезнь уже там. Спустя полгода вся страна оказалась охвачена этой заразой, исключая, разве что, восточные провинции, отделенные горной грядой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Streets.jpg')
  },

  {
    id: 6,
    text:
      `
        Меня вызывают к пациентам, которые уже одной ногой в могиле. В целях безопасности я не снимаю маску никогда, кроме приема пищи, и регулярно проветриваю помещение. Но смрад стоит просто жуткий, благо запас чеснока у меня не ограничен.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    message: 'Дата: 6 октября 1586 года.',
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 7,
    text:
      `
        Они просят меня помочь им, но у меня на это нет ни средств, ни возможности. Я понимаю, что им остается жить около часа. Потому я могу только облегчить их страдания.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 8,
    text:
      `
        Лекарство до сих пор не найдено. Старые настойки и травы не помогают. Забавно, что человечество придумало паровые двигатели и выстроило по всей стране фабрики, но понятия не имеет как лечить болезнь, что косит их аки саранча — посевы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 9,
    text:
      `
        Пришлось сегодня выбраться в город за продуктами. Там и в лучшие времена находиться было опасно, а сейчас зловоние улиц практически полностью перебивает вонь от чеснока, хранящегося в маске. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    message: 'Дата: 19 октября 1586 года',
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Streets_Plague.jpg')
  },

  {
    id: 10,
    text:
      `
        Но находятся сумасшедшие, которые ходят по улице полуголые и вопят что-то небесам. Жандармы даже их не разгоняют. Один из них сегодня пытался схватить меня за костюм, крича, чтобы я его благословил. Хорошо, что мне удалось от него оторваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Streets_Plague.jpg')
  },

  {
    id: 11,
    text:
      `
        На центральной площади мне стало ясно, в чем было дело. Проповедник собрал вокруг себя кучу народу, вопя во всеуслышание, что чума — есть ничто иное, как кара за грехи. А они, в свою очередь, произрастают из-за сношения с темными силами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Central_Square.jpg')
  },

  {
    id: 12,
    text:
      `
        Тут же все начали скандировать необходимость охоты за ведьмами. Ведь, разумеется, в таком вопросе всегда должны быть виноватые. Такими темпами поставки трав от знахарей скоро кончатся. Либо их сожгут, либо они сбегут.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Central_Square.jpg')
  },

  {
    id: 13,
    text:
      `
        Концепция происхождения болезни от демонических сил имеет место быть, но пока я к ней настроен скептически. Эпидемии происходили задолго до этого и всегда имели природное происхождение. Однако такими разрушительными они не были никогда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Central_Square.jpg')
  },

  {
    id: 14,
    text:
      `
        Приходили сумасшедшие и пытались разгромить мой дом. Требовали исцеления. Пришлось посылать почтовых голубей в храм, чтобы их разогнали охотники. Не люблю к ним обращаться, но похоже выбора не остается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    message: 'Дата: 30 октября 1586 года',
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 15,
    text:
      `
        Становится очевидно, что оставаться здесь мне не безопасно. Пройдет не так много времени, прежде чем мою маску ворона воспримут как ритуальное одеяние. К тому же меня слишком занимает происхождение этой болезни… эпидемия пошла не из центра. Возможно, мне удастся окольными путями добраться до основных очагов заражения.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 16,
    text:
      `
        Надо подключить старые связи, чтобы мне дали ассистента. А еще нужно найти извозчика. Впрочем, в моей деревне только и говорят о некоем Генрихе, что ошивается в одном из местных кабаков. Судачат, он уже готовится отъезжать. Нужно поторопиться. Надеюсь, алхимик из храма не заставит себя долго ждать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 17,
    text:
      `
        Храм достаточно быстро предоставил мне ассистента. Хорошо, что я не чувствую запахи через маску, а то задохнулся бы от его перегара. Постоянно шатается и сквернословит, но на проверке показал отличные результаты. Поразительно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    message: 'Дата: 1 ноября 1586 года',
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 18,
    text:
      `
        В любом случае, Генрих еще не отъехал, значит, мы можем выдвигаться уже сегодня. Я собрал необходимые вещи, записи буду продолжать уже в дороге. Надо быть осторожным на улицах, в последнее время грызуны совсем обнаглели. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 19,
    text:
      `
        <i>Скверные шутники заявили на днях, что кончается время людей и начинается время крыс. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ROR', 'Глава 1', 'Часть 1', '0')
        }
      }],
    achievement: { name: 'PrologueCompleted', story: EStoriesEn.ROR },
    imageBack: require('../../../../Images/ROR/Backgrounds/Mortimer_Cabinet.jpg')
  }
])
