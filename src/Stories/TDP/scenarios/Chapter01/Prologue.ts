import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { previousSlideMessage } from '../../../../Utils/textConsts';

scenarioManager.addScenario({ storyName: EStoriesEn.TDP, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        Дабы не упустить все детали грядущего расследования, мною было принято решение записывать свои мысли и наблюдения в дневник. В первую очередь стоит определить, с чего всё начиналось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/TDP/Glaswer.mp3'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 1,
    text:
      `
        Всё произошло буквально за считанные месяцы. На юге начали вспыхивать очаги заражения загадочным мором. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    message: previousSlideMessage,
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 2,
    text:
      `
        Множество деревень и мелких провинциальных городов просто вымирали один за другим. Но несмотря на растущее число жертв, в столице не особо торопились предпринимать какие-либо действия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 3,
    text:
      `
        По крайней мере до того момента, пока не начала пустеть имперская казна, а большая часть продуктов, произрастающих на полях, просто исчезла с рыночных прилавков.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 4,
    text:
      `
        Лишь спустя пару месяцев с начала эпидемии, была сформирована исследовательская группа, состоящая из докторов и ученых.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 5,
    text:
      `
        Обнаружили, что причиной всему является ранее неизвестная болезнь, названная чумой, так как часть симптомов и метод распространения схожи.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 6,
    text:
      `
        Удалось выделить и основные симптомы: высыпание гнойников по всему телу, включая внутренние органы, лихорадка, нестерпимая боль в мышцах и нетипичный белый налет на языке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 7,
    text:
      `
        В процессе наблюдений выяснилось, что большая часть зараженных умирала спустя неделю с момента появления первых симптомов. А те, кому удавалось выжить — теряли рассудок, или впадали в неконтролируемую агрессию.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 8,
    text:
      `
        Спустя полгода вся страна оказалась охвачена эпидемией. Была надежда, что могли уцелеть северные провинции, отделенные горной грядой. Однако и оттуда перестали поступать какие-либо известия.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Tablet.jpg')
  },

  {
    id: 9,
    text:
      `
        Меня ежедневно вызывают к пациентам, которые уже одной ногой в могиле. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 10,
    text:
      `
        В целях безопасности приходится постоянно ходить в плотной маске и регулярно проветривать помещение, раз эта зараза разносится по ветру как семена одуванчика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 11,
    text:
      `
        Но смрад стоит просто жуткий, благо к запаху чеснока я уже привык. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    message: 'Чумные доктора использовали чеснок для профилактики заражения чумой, считая, что он губителен для возбудителей болезни и являлся частью защиты от неприятного запаха, исходящего от тел зараженных и трупов.',
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 12,
    text:
      `
        Они просят о помощи, но у меня на это нет ни средств, ни возможности. Понимаю, что им остается жить считанные дни, если не часы. Потому я могу только облегчить их страдания.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 13,
    text:
      `
        Лекарство до сих пор не найдено. Старые настойки и травы не помогают. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 14,
    text:
      `
        Забавно, что человечество придумало паровые двигатели и выстроило по всей стране фабрики, но понятия не имеет, как лечить болезнь, которая косит их как саранча — посевы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 15,
    text:
      `
        Пришлось сегодня выбраться в город за продуктами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Bodies.jpg')
  },

  {
    id: 16,
    text:
      `
        Там и в лучшие времена находиться было не сказать, что приятно, но сейчас зловоние улиц практически полностью перебивает вонь от чеснока, хранящегося в маске. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Bodies.jpg')
  },

  {
    id: 17,
    text:
      `
        И ведь находятся сумасшедшие, которые полуголые ходят по улице и вопят что-то небесам. А городская стража и не думает их разгонять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Bodies.jpg')
  },

  {
    id: 18,
    text:
      `
        Один сегодня пытался схватить меня за костюм, крича, чтобы я его благословил. Хорошо, что удалось от него увернуться.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Bodies.jpg')
  },

  {
    id: 19,
    text:
      `
        На центральной площади мне стало ясно, в чем было дело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Mortimer_Mask.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Central.jpg')
  },

  {
    id: 20,
    text:
      `
        Местный проповедник собрал вокруг себя кучу народу, вопя во всеуслышание, что чума — есть ничто иное, как кара за грехи. А они, в свою очередь, произрастают из-за сношения с темными силами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Central.jpg')
  },

  {
    id: 21,
    text:
      `
        Тут же все начали скандировать необходимость охоты за ведьмами. Ведь, разумеется, в подобных вопросах всегда должны быть виноватые. Либо их сожгут, либо они сбегут.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Central.jpg')
  },

  {
    id: 22,
    text:
      `
        Происхождение болезни от демонических сил имеет место быть, но я пока что настроен к этому скептически. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Central.jpg')
  },

  {
    id: 23,
    text:
      `
        Эпидемии происходили задолго до этого и всегда имели природное происхождение. Однако они никогда не являлись настолько разрушительными. Да и симптомы выглядели попроще.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street_Central.jpg')
  },

  {
    id: 24,
    text:
      `
        Приходили сумасшедшие и пытались разгромить мой дом, требуя исцеления. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 25,
    text:
      `
        Пришлось посылать почтовых голубей в храм, чтобы их разогнали охотники. Хотя я и не сильно люблю к ним обращаться, но похоже выбора уже не остается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 26,
    text:
      `
        Становится очевидно, что оставаться здесь уже не безопасно. Пройдет не так много времени, прежде чем мою маску ворона воспримут как ритуальное одеяние. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 27,
    text:
      `
        К тому же меня слишком занимает происхождение этой болезни… эпидемия пошла не из центра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 28,
    text:
      `
        Возможно, я смогу окольными путями добраться до основных очагов заражения.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 29,
    text:
      `
        Надо подключить старые связи, чтобы мне дали ассистента. А еще нужно найти извозчика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 30,
    text:
      `
        В последнее время только и говорят о некоем Генрихе, что ошивается  сейчас в одном из местных кабаков. 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 31,
    text:
      `
        Говорят, он уже готовится отъезжать. А в данной ситуации это, пожалуй, мой единственный вариант свалить отсюда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    fullscreenObjectL: require('../../../../Images/TDP/Persons/Mortimer.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 32,
    text:
      `
        Надеюсь, что и алхимик не заставит себя долго ждать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 33,
    text:
      `
        К моему удивлению, храм достаточно быстро предоставил мне ассистента. Да и Генрих согласился нас взять с собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 34,
    text:
      `
        Но на этом плюсы заканчивались. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 35,
    text:
      `
        Хорошо, что я не чувствую запахи через маску, а то задохнулся бы от его перегара. 
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 36,
    text:
      `
        Этот Дитрих только и делает, что шатается и сквернословит, но на проверке знаний и умений показал вполне приемлемые результаты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    fullscreenObjectR: require('../../../../Images/TDP/Persons/Ditrich.png'),
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 37,
    text:
      `
        Лучше, чем ничего, хотя другого варианта у меня и нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 38,
    text:
      `
        В любом случае, Генрих ждет нас, поэтому, можно выдвигаться уже сегодня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Mortimer_Cabinet.jpg')
  },

  {
    id: 39,
    text:
      `
        Успев заранее собрать необходимые вещи, мы с Дитрихом направились к назначенному месту встречи, а записи я буду продолжать вести в дороге. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street.jpg')
  },

  {
    id: 40,
    text:
      `
        Нужно скорее выбираться из этого прогнившего насквозь города, а то, кто знает, какие сюрпризы, он еще может преподнести…
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/TDP/Backgrounds/Street.jpg')
  },

  {
    id: 41,
    text:
      `
        <i>Скверные шутники заявили на днях, что кончается время людей и начинается время крыс </i>.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('TDP', 'Глава 1', 'Часть 1', '0')
        }
      }],
    achievement: { story: EStoriesEn.TDP, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/TDP/Backgrounds/Street.jpg')
  }
])
