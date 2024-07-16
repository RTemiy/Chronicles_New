import {
  achievementsManager,
  saveEndProgress,
  scenarioManager,
  statsManager,
  timer,
  wardrobe
} from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.AEP, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        Начиналось то самое время года, которое шло после удушливого лета. Редкие солнечные дни сменялись частыми дождями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: '<i>За 9 месяцев до событий в Колизее',
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 1,
    text:
      `
        Мне нравилось, когда наступала осень, будто бы сама природа хотела, чтобы я еще чаще погружалась в свои раздумья. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 2,
    text:
      `
        Этим мне и приходилось заниматься, лежа на кровати в нашем домике. Жили мы не в центре города, а ближе к окраине, в пригороде Рима. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 3,
    text:
      `
        Лениво скроля ленту в соцсетях, я старалась отвлечься от мысли, что скоро придет моя «любимая» бабушка и снова начнет портить мне настроение.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 4,
    text:
      `
        Моя жизнь складывалась довольно интересным образом. Следует начать с того, что мои родители умерли, когда я была ребенком.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 5,
    text:
      `
        И как в самых лучших драматических сериалах, покойная матушка завещала моей бабушке приглядывать за ее единственной дочуркой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 6,
    text:
      `
        Бабка сдержала слово. Да вот только, любила ли она свою внучку так, как бы хотела ее дочь?
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 7,
    text:
      `
        Ответ неоднозначен. Но все же больше нет, чем да. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 8,
    text:
      `
        Мне постоянно попадало по поводу или без. Она как генерал в юбке. Своим «хлыстом» командовала только так, оставляя на моем теле здоровые синяки. Но я не смела жаловаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 9,
    text:
      `
        Податься было некуда. А тут был кров и вкусная еда. Старушка была все-таки при деньгах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 10,
    text:
      `
        Ее проявление любви отзывалось во мне противоречивыми чувствами, потому что при всем этом негативе — она не требовала от меня много. Только учиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 11,
    text:
      `
        За что я ей была безмерно благодарна. Вследствие ее помощи я смогла окончить школу с отличными оценками и поступить в один из самых престижных университетов Рима, где по большей части учились сливки общества. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 12,
    text:
      `
        Учеба должна начаться через несколько месяцев, а пока завтра надо было явиться в университет, чтобы нам разъяснили будущую программу курса, выдали всякие доступы и уже сейчас мы могли выбрать направление для дополнительных занятий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 13,
    text:
      `
        «Очень интересно будет посмотреть на свою группу...»
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 14,
    text:
  `
        Кстати, если кому интересно, то на любовном фронте все было сухо, как в Сахаре. Тут сложно было держать баланс между учебой и попыткой с кем-то пофлиртовать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 15,
    text:
  `
        Один придурок, конечно, лишил меня девственности, больше по моей глупости, но дальше дело так и не пошло.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 16,
    text:
  `
         Да и бабушка вставляла свои пять копеек. Это нельзя, то нельзя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 17,
    text:
  `
        «И черт с ней. Не сможет же она все время меня контролировать. Оторвусь по полной в университете. Молодость все-таки!»
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 18,
    text:
  `
        Вечером я услышала, что бабушка наконец-то вернулась. Я аккуратно выглянула со второго этажа и услышала, как она с кем-то беседовала, стоя на пороге. До меня долетели обрывки фраз:
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/From_Second_Floor.jpg')
  },

  {
    id: 19,
    text:
  `
        — Ты был сегодня необычайно мил, — ласково говорила пожилая женщина. — Когда сможем повторить?
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/From_Second_Floor.jpg')
  },

  {
    id: 20,
    text:
  `
        — Я позвоню тебе в ближайшее время, — ответил молодой мужской голос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Бабушкина подстилка',
    imageFront: require('../../../../Images/AEP/Persons/Young_Guy.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/From_Second_Floor.jpg')
  },

  {
    id: 21,
    text:
  `
        Послышался характерный чмок, а затем дверь закрылась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/From_Second_Floor.jpg')
  },

  {
    id: 22,
    text:
  `
        — $Имя Игрока$, иди ужинать, я принесла еду из нашего любимого ресторана! 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/From_Second_Floor.jpg')
  },

  {
    id: 23,
    text:
  `
        — Твоего любимого ресторана, — пробубнила я, спускаясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/From_Second_Floor.jpg')
  },

  {
    id: 24,
    text:
  `
        Я помогла разложить посуду на стол и села напротив бабушки, встретившись с ней глазами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 25,
    text:
  `
        «Стоит отдать ей должное. В свои года она выглядит ни чуть не хуже всяких молодых девушек».
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 26,
    text:
  `
        — Ты подготовилась к завтрашнему дню? — уточняла бабушка, пока накладывала нам пасту с креветками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: 0, category: 'Person', id: 'Granny' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 27,
    text:
  `
        — Да. Рюкзак собрала, одежду подготовила. Если вдруг буду опаздывать — закажу такси. Все схвачено. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 28,
    text:
  `
        — Не надо доводить до этого. Помни про дисциплину, — она медленно смаковала вино, характерно оттопырив мизинец. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 29,
    text:
  `
        — И про внешний вид, — презрительный взгляд прошелся по моей одежде. — Даже дома не стоит про это забывать.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 30,
    text:
  `
        — Конечно...
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 31,
    text:
  `
        Не было никакого смысла спорить. Я не встречала еще ни одного человека, кто бы мог что-то возразить этой женщине и остаться с целой психикой.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 32,
    text:
  `
        «Я бы тоже не отказалась выпить. Хотя с другой стороны, алкоголь — это вред, сплошная отрава для организма, да и зачем оно мне надо? Попытать удачу?»
      `,
    buttons: [
      {
        text: 'Попыталась уговорить бабушку',
        goTo: 33
      },
      {
        text: 'Молча продолжила есть',
        goTo: 42
      }],
    message: 'В истории героине придется сталкиваться с моральными выборами. Последствия этого будут показываться через стат — Карма',
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 33,
    text:
  `
        — Ба, а мне немного нальешь? Это же вино, которое ты привезла из Португалии?
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 34,
    text:
  `
        Она посмотрела на меня с нескрываемым удивлением и проговорила:
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 35,
    text:
  `
        — Какая ты смелая. С чего это вдруг я должна тебе налить?
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 36,
    text:
  `
        «Боже. На такой простой вопрос — еще куча вопросов. Заноза в заднице. Попробую аргумент, который точно должен сработать».
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 37,
    text:
  `
        — Ты мне так расхвалила этот напиток, что мне действительно любопытно узнать его на вкус. Тем более, ты как ценитель элитных вин — просто не можешь посоветовать плохого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 38,
    text:
  `
        Бабушка перевела взгляд на бутылку и ехидно улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 39,
    text:
  `
        — Только бокальчик. Не более. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    message: 'Бабушке приятен ваш комплимент',
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Granny' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 40,
    text:
  `
        Я с гордостью приняла свой выигрыш и вкусила терпкий напиток. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 41,
    text:
  `
        «А и правда ничего...»
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    message: 'Вас привлекает перспектива выпить алкоголь',
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 42,
    text:
  `
        «Алкоголь — это плохо, ага. А сама жрет его бутылками. Не хочу с ней ссориться, да и пить без повода — глупая затея. Вдруг еще стану как она — зависимой».
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 43,
    text:
  `
        — Кстати, — бабушка встала из-за стола, убирая грязные тарелки. — Ты уже определилась с дополнительными занятиями? 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 44,
    text:
  `
        — Еще нет. Я, конечно, полистала буклеты, которые они прислали по почте, но решила для начала получше узнать обо всем лично и принять решение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    message: 'Вы не поддались на искушение выпить',
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 45,
    text:
  `
        — Молодец, правильный подход. Торопиться некуда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Бабушка',
    imageFront: require('../../../../Images/AEP/Persons/Granny.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 46,
    text:
  `
        После быстрого ужина со своей родственницей, я вернулась в комнату и еще раз проверила свой рюкзак, чтобы ничего не забыть.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 47,
    text:
  `
        «Положу на всякий случай тетрадь и пару ручек».
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 48,
    text:
  `
        Затем я плюхнулась на кровать и уснула, стараясь заглушить волнение связанное с завтрашним днем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 49,
    text:
  `
        На удивление мне приснился занимательный сон. Некий красивый мужчина, чье лицо было скрыто какой-то дымкой, откровенно танцевал передо мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    music: require('../../../../Sounds/AEP/Ero.mp3'),
    imageFront: require('../../../../Images/AEP/Persons/Naked_Guy.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 50,
    text:
  `
        Я сидела на стуле и робко поглядывала на происходящее. Горячий незнакомец щеголял с голым торсом, заманивая обратить на него внимание каждой частичкой идеального тела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/AEP/Persons/Naked_Guy.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 51,
    text:
  `
        Четкие, страстные движения. Он буквально прижимался ко мне, осыпая лепестками роз, дразнил меня, подзывая указательным пальцем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: require('../../../../Images/AEP/Persons/Naked_Guy.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 52,
    text:
  `
        Но я не могла пошевелиться. Не могла ощутить его тепло, его порыв быть ближе.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 53,
    text:
  `
        Незнакомец не стеснялся вертеть передо мной всеми интересными частями тела, даже несмотря на мое оцепенение. Было видно, что он готов сделать все что угодно, лишь бы только я отдалась ему.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageFront: require('../../../../Images/AEP/Persons/Naked_Guy.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 54,
    text:
  `
        Мужчина медленно потянулся ко мне, зазывая к себе. Его ловкие руки легли на пояс, и, казалось, что ему было тесно в брюках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Images/AEP/Persons/Naked_Guy.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 55,
    text:
  `
        Пока я горела от желания, он начал расстегивать ширинку...
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: require('../../../../Images/AEP/Persons/Naked_Guy.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 56,
    text:
  `
        Назойливый звук пришел откуда его не ждали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    simple: require('../../../../Sounds/AEP/Alarm.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 57,
    text:
  `
        «Нет-нет. Как выключить? Как вернуться?»
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/Fog.jpg')
  },

  {
    id: 58,
    text:
  `
        В растерянности я села на кровать, держась за голову. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    simple: require('../../../../Sounds/Common/Silence.mp3'),
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 59,
    text:
  `
        «Что это, мать твою, было? Это так нехватка секса сказывается или я просто с ума сошла?»
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 60,
    text:
  `
        Я решила отбросить ненужные мысли и попытаться проснуться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 61,
    text:
  `
        «В следующий раз, $Имя Игрока$». 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 62,
    text:
  `
        Перед тем как спуститься, я выбрала подходящую одежду для первого дня учебы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 63,
    text: '',
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    wardrobe: { story: EStoriesEn.AEP, personId: 'AEP_Hero', goTo: 64 },
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 64,
    text:
  `
        Утром бабушка часто уходила на рынок, чтобы купить все самое свежее, поэтому я расслабленно хозяйничала дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 65,
    text:
  `
        На кухне все еще витал запах вчерашней пасты, а на тумбочке стояло несколько пакетов с выпечкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 66,
    text:
  `
        «Ба позаботилась о вкусном завтраке... И как после этого ее не любить?»
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 67,
    text:
  `
        Доставая мягкий сладкий круассан, я уже мысленно представляла его аппетитный вкус. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageFront: require('../../../../Images/AEP/Objects/Crus.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 68,
    text:
  `
        «А с кофе еще лучше».
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Objects/Crus.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 69,
    text:
  `
        Наслаждаясь лакомствами, я окончательно забыла о времени, ведь еда занимала особое место в моей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Images/AEP/Objects/Crus.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 70,
    text:
  `
        Лениво прохаживаясь по дому с круассаном в руках, я вдруг заметила бабушкину пачку сигарет на тумбочке. Подойдя ближе, я увидела несколько тонких сигарет, которые заманчиво торчали из пачки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 71,
    text:
  `
        «Может, взять? Просто побаловаться. Или не курю и начинать не стоит?»
      `,
    buttons: [
      {
        text: 'Взять несколько сигарет',
        goTo: 72
      },
      {
        text: 'Взять целую пачку',
        goTo: 74
      },
      {
        text: 'Отказаться от этой затеи',
        goTo: 76
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Items/Cigarettes.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 72,
    text:
  `
        «Да она даже не заметит. Пачка почти полная, если возьму пару штук — все обойдется».
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    message: 'Курение — зло',
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 73,
    text:
  `
        Аккуратно положив несколько сигарет к себе в рюкзак, я довольная вернулась к своему кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    message: 'Вы получили новый предмет — сигареты',
    stats: [
      { story: EStoriesEn.AEP, value: +2, category: 'Item', id: 'Granny_Cigarettes' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 74,
    text:
  `
        «Да она даже не заметит. Решит, что выкурила или потеряла. Тем более, у нее всегда есть запасная».
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    message: 'Курение — зло, а воровство — еще хуже',
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -2, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 75,
    text:
  `
        Аккуратно положив пачку сигарет к себе в рюкзак, я довольная вернулась к своему кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    message: 'Вы получили новый предмет — сигареты',
    stats: [
      { story: EStoriesEn.AEP, value: +10, category: 'Item', id: 'Granny_Cigarettes' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 76,
    text:
  `
        «Вот еще... Как будто мне больше делать нечего, кроме как воровать у бабушки. Глупости».
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    message: 'Вы не хотите играть с судьбой и поступаете правильно',
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 77,
    text:
  `
        Решив, что мне это было ни к чему, я вернулась к своему кофе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 78,
    text:
  `
        Однако закончить завтрак мне не удалось. Я с ужасом осознала, что время было не на моей стороне.
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 79
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 79,
    text:
  `
        «Как всегда! А ведь хотела как можно раньше приехать в университет. Нужно срочно выбегать из дома и вызывать такси».
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Kitchen.jpg')
  },

  {
    id: 80,
    text:
  `
        На мое счастье водитель приехал довольно быстро. Я села на переднее сиденье, так как мне больше нравилось наблюдать из салона автомобиля именно с этого ракурса.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 81,
    text:
  `
        Мне попался приятный молодой водитель, как по внешности, так и по общению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 82,
    text:
  `
        Я даже не ожидала, что такое может быть, но этот мужчина буквально будоражил меня, заставляя мысли уходить в самые развратные фантазии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 83,
    text:
  `
        «Неужели это все из-за сна? Ну, не могу же я накинуться на первого встречного?»
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 84,
    text:
  `
        Таксист решил скрасить нашу поездку рассказом о себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 85,
    text:
  `
        Я узнала, что его зовут Мигель. Родился в Испании, но его сердце всегда принадлежало Италии. Поэтому он и переехал в нашу славную столицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: 0, category: 'Person', id: 'Miguel' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 86,
    text:
  `
        Я внимательно слушала рассказы о жизни, поглядывая на его привлекательные черты лица. И, черт возьми, было в нем что-то очаровательное и одновременно простое. Он не мог не располагать к себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 87,
    text:
  `
        До начала встречи в университете было какое-то время, поэтому я попыталась свести разговор к чему-то более откровенному. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 88,
    text:
  `
        «Я же могу задержаться? Хоть и хотела приехать раньше, но к чему спешка... Раз уж зарекалась, что университет должен стать началом моей разгульной жизни, так почему бы не начать с простой шалости? Тем более, парень вроде и не против...»
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 89,
    text:
  `
        Я: 
      `,
    buttons: [
      {
        text: 'Соблазнила Мигеля',
        goTo: 90,
        gift: true
      },
      {
        text: 'Не решилась рисковать',
        goTo: 174
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 90,
    text:
  `
        Не придумав ничего лучше, я, разыскивая деньги в сумочке, «случайно» уронила помаду между сиденьем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 91,
    text:
  `
        Мужчина лишь немного повернулся в мою сторону, а я, не теряя времени, нагнулась в сторону водителя, начиная играть свой спектакль.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 92,
    text:
  `
        Мигель немного напрягся, когда я аккуратно положила свою руку ему на колено и начала медленно водить вверх-вниз, постепенно поднимаясь выше и сжимая хватку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 93,
    text:
  `
        Мы как раз остановились на светофоре, когда таксист внимательно посмотрел на меня и спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 94,
    text:
  `
        — Мисс, вы, конечно, очень привлекательная девушка, но к чему это все?
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 95,
    text:
  `
        «Надо было что-то ответить, чтобы продолжить начатое. Он не должен соскочить с крючка!»
      `,
    buttons: [
      {
        text: 'Я просто хотела развлечься',
        goTo: 96,
        func: () => {
          timer.stop()
        }
      },
      {
        text: 'Вы понравились мне с первого взгляда',
        goTo: 100,
        func: () => {
          timer.stop()
        }
      },
      {
        text: 'Мне скучно',
        goTo: 135,
        func: () => {
          timer.stop()
        }
      },
      {
        text: 'Вы очень сексуально смотритесь',
        goTo: 139,
        func: () => {
          timer.stop()
        }
      }],
    beforeBegin: () => {
      timer.set(7, () => {
        scenarioManager.beginScene(96)
      })
    },
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 96,
    text:
  `
        — Простите, но у меня есть достоинство. Если для вас все это забава, поищете мальчика для игр где-нибудь в другом месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 97,
    text:
  `
        «Отлично. Заволновалась и сказала какой-то бред».
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 98,
    text:
  `
        Дальнейшая поездка прошла в неловкой тишине. Я испытала такое унижение, что уже и не могла выносить это, и готова была самостоятельно бежать в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    message: 'Теперь вы неприятны Мигелю. Вряд ли он еще когда-нибудь захочет с вами иметь дело ',
    stats: [
      { story: EStoriesEn.AEP, value: -2, category: 'Person', id: 'Miguel' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 99,
    text:
  `
        Но опаздывать в первый же день мне не хотелось. Когда машина остановилась, я поспешила выйти из такси.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 100,
    text:
  `
        — Да, вы мне очень понравились. Смотря на вас, я вижу сильного мужчину, который берет, что хочет. Так чего же хотите вы?
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 101,
    text:
  `
        Мигель покраснел. Казалось, ответ его очень даже удовлетворил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    music: require('../../../../Sounds/AEP/Ero.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 102,
    text:
  `
        — Вы необычная девушка и безумно мне понравились, — он положил свою руку поверх моей и воспользовавшись остановкой, не стал медлить, а жадно впился в мои губы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 103,
    text:
  `
        Наши языки танцевали, руки елозили, исследуя тела друг друга. От нарастающего возбуждения все дрожало, остатки сознания понемногу покидали разум. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 104,
    text:
  `
        Мы пребывали в жадном нетерпении, были готовы броситься друг на друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 105,
    text:
  `
        Но нас разъединил настойчивый сигнал гудка машины сзади. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    simple: require('../../../../Sounds/AEP/Car_Alarm.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 106,
    text:
  `
        Мигель не хотел меня отпускать, держал за руку, сильно сжимая, показывая, что он мечтает о продолжении.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 107,
    text:
  `
        Его езда стала резкой, нервной. Было видно, как глаза мужчины метались из стороны в сторону, выискивая укромный закуток для уединения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 108,
    text:
  `
        В это время я, не стесняясь, трогала свои интимные места, желая еще больше раззадорить Мигеля. Моя рука сжимала грудь, слегка оголяя верхнюю часть, чтобы она была в его поле видимости.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 109,
    text:
  `
        — Ты меня с ума сведешь, незнакомка, — Мигель сильнее жал на газ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 110,
    text:
  `
        — В этом мы с тобой похожи.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 111,
    text:
  `
        Наконец, таксист свернул в какую-то подворотню, где не было людей. По крайне мере так казалось на первый взгляд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 112,
    text:
  `
        Темная улочка еще больше подталкивала совершить шалость.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 113,
    text:
  `
        «Обратной дороги нет».
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 114,
    text:
  `
        Мигель откинул водительское кресло чуть назад, смело усаживая меня к себе на колени. Страстные поцелуи, его сжимание моей груди. Я громко стонала, показывая, что мне уже очень трудно сдерживаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 115,
    text:
  `
        Но парень не торопился. Он изучал мое тело, постепенно снимая верхнюю одежду, целуя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 116,
    text:
  `
        Когда я осталась в лифчике, он аккуратно стянул его и прошелся языком по соскам, вызывая очередную волну удовольствия по всему телу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 117,
    text:
  `
        — Мигель, я... 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 118,
    text:
  `
        — Тсс... 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 119,
    text:
  `
        Плавными движениями руки парень залез под юбку, аккуратно проводя пальцами по чувствительным местам, изучая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 120,
    text:
  `
        «А-ах, я сейчас сама оседлаю его, если он не поторопится».
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 121,
    text:
  `
        — Ты вся мокрая... Больше не могу заставлять тебя ждать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 122,
    text:
  `
        Расстегнув ширинку, он достал из бардачка презерватив, и, быстро его надев, больше не стал сдерживаться. Он ловко сдвинул мои трусики в сторону и вошел.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 123,
    text:
  `
        Медленно, так, чтобы тело успевало привыкнуть к размеру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 124,
    text:
  `
        Когда Мигель был полностью во мне, отчего-то мы искренне улыбнулись друг другу, смотря прямо в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 125,
    text:
  `
        Последовал еще более горячий поцелуй, вперемешку с грубыми толчками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 126,
    text:
  `
        Мигель двигался быстро, стараясь сжать меня всю в своих объятиях. А я лишь растворялась в этом незабываемом чувстве, держась за мужчину, испуская стоны ему на ухо.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 127,
    text: '',
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/AEP/CutScenes/Taxi.mp4'), goTo: 128 },
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 128,
    text:
  `
        Он закончил довольно скоро. Я была немного разочарована, потому что мне не удалось достигнуть пика удовольствия, однако это был хороший и приятный секс с незнакомцем. То, что мне и хотелось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 129,
    text:
  `
        — Ты великолепна, — проговорил Мигель, приводя себя в порядок. — Никогда бы не подумал, что решусь на такое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 130,
    text:
  `
        — Это было потрясающе, — я смело чмокнула его в щеку, оставляя помаду на его лице. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 131,
    text:
  `
        — Мой номер на визитке, — он протянул мне карточку. — Такси — моя подработка... В общем, я буду рад, если ты мне позвонишь. Хочу обставить все как полагается. Цветы и свидание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 132,
    text:
  `
        Я вежливо взяла карточку, пряча ее в свою сумку. Была ли это случайная связь или у нас могло что-то выйти — еще только предстояло узнать. Пока — пусть все идет своим чередом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Item', id: 'Taxi_Card' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 133,
    text:
  `
        Остаток дороги мы проехали в умиротворенной тишине, поглядывая друг на друга, слегка смущаясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    message: 'Мигель вас определенно запомнит... ',
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' },
      { story: EStoriesEn.AEP, value: +2, category: 'Person', id: 'Miguel' },
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' },
      { story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'SexCounter' }],
    achievement: { story: EStoriesEn.AEP, name: 'SexyTaxi' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 134,
    text:
  `
        Попрощавшись с Мигелем, я зашла в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 135,
    text:
  `
        — Простите, но у меня есть достоинство. Если для вас все это забава, поищете мальчика для игр где-нибудь в другом месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 136,
    text:
  `
        «Отлично. Заволновалась и сказала какой-то бред».
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 137,
    text:
  `
        Дальнейшая поездка прошла в неловкой тишине. Я испытала такое унижение, что уже и  не могла выносить это, и готова была самостоятельно бежать в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    message: 'Теперь вы неприятны Мигелю. Вряд ли он еще когда-нибудь захочет с вами иметь дело ',
    stats: [
      { story: EStoriesEn.AEP, value: -2, category: 'Person', id: 'Miguel' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 138,
    text:
  `
        Но опаздывать в первый же день мне не хотелось. Когда машина остановилась, я поспешила выйти из такси.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 139,
    text:
  `
        — Да, вы мне очень понравились. Смотря на вас, я вижу сильного мужчину, который берет, что хочет. Так чего же хотите вы?
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 140,
    text:
  `
        Мигель покраснел. Казалось, ответ его очень даже удовлетворил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    music: require('../../../../Sounds/AEP/Ero.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 141,
    text:
  `
        — Вы необычная девушка и безумно мне понравились, — он положил свою руку поверх моей и воспользовавшись остановкой, не стал медлить, а жадно впился в мои губы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 142,
    text:
  `
        Наши языки танцевали, руки елозили, исследуя тела друг друга. От нарастающего возбуждения все дрожало, остатки сознания понемногу покидали разум. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 143,
    text:
  `
        Мы пребывали в жадном нетерпении, были готовы броситься друг на друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 144,
    text:
  `
        Но нас разъединил настойчивый сигнал гудка машины сзади. 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    simple: require('../../../../Sounds/AEP/Car_Alarm.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 145,
    text:
  `
        Мигель не хотел меня отпускать, держал за руку, сильно сжимая, показывая, что он мечтает о продолжении.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 146,
    text:
  `
        Его езда стала резкой, нервной. Было видно, как глаза мужчины метались из стороны в сторону, выискивая укромный закуток для уединения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 147,
    text:
  `
        В это время я, не стесняясь, трогала свои интимные места, желая еще больше раззадорить Мигеля. Моя рука сжимала грудь, слегка оголяя верхнюю часть, чтобы она была в его поле видимости.
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 148,
    text:
  `
        — Ты меня с ума сведешь, незнакомка, — Мигель сильнее жал на газ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 149,
    text:
  `
        — В этом мы с тобой похожи.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 150,
    text:
  `
        Наконец, таксист свернул в какую-то подворотню, где не было людей. По крайне мере так казалось на первый взгляд. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 151,
    text:
  `
        Темная улочка еще больше подталкивала совершить шалость.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 152,
    text:
  `
        «Обратной дороги нет».
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 153,
    text:
  `
        Мигель откинул водительское кресло чуть назад, смело усаживая меня к себе на колени. Страстные поцелуи, его сжимание моей груди. Я громко стонала, показывая, что мне уже очень трудно сдерживаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 154,
    text:
  `
        Но парень не торопился. Он изучал мое тело, постепенно снимая верхнюю одежду, целуя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 155,
    text:
  `
        Когда я осталась в лифчике, он аккуратно стянул его и прошелся языком по соскам, вызывая очередную волну удовольствия по всему телу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 156,
    text:
  `
        — Мигель, я... 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 157,
    text:
  `
        — Тсс... 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 158,
    text:
  `
        Плавными движениями руки парень залез под юбку, аккуратно проводя пальцами по чувствительным местам, изучая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 159,
    text:
  `
        «А-ах, я сейчас сама оседлаю его, если он не поторопится».
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 160,
    text:
  `
        — Ты вся мокрая... Больше не могу заставлять тебя ждать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 161,
    text:
  `
        Расстегнув ширинку, он достал из бардачка презерватив, и, быстро его надев, больше не стал сдерживаться. Он ловко сдвинул мои трусики в сторону и вошел.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 162,
    text:
  `
        Медленно, так, чтобы тело успевало привыкнуть к размеру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 163,
    text:
  `
        Когда Мигель был полностью во мне, отчего-то мы искренне улыбнулись друг другу, смотря прямо в глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 164,
    text:
  `
        Последовал еще более горячий поцелуй, вперемешку с грубыми толчками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 165,
    text:
  `
        Мигель двигался быстро, стараясь сжать меня всю в своих объятиях. А я лишь растворялась в этом незабываемом чувстве, держась за мужчину, испуская стоны ему на ухо.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 166,
    text:
  `
        
      `,
    buttons: [
      {
        text: ''
      }],
    cutScene: { video: require('../../../../Images/AEP/CutScenes/Taxi.mp4'), goTo: 167 },
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 167,
    text:
  `
        Он закончил довольно скоро. Я была немного разочарована, потому что мне не удалось достигнуть пика удовольствия,  однако это был хороший и приятный секс с незнакомцем. То, что мне и хотелось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 168,
    text:
  `
        — Ты великолепна, — проговорил Мигель, приводя себя в порядок. — Никогда бы не подумал, что решусь на такое. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 169,
    text:
  `
        — Это было потрясающе, — я смело чмокнула его в щеку, оставляя помаду на его лице. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 170,
    text:
  `
        — Мой номер на визитке, — он протянул мне карточку. — Такси —  моя подработка... В общем, я буду рад, если ты мне позвонишь. Хочу обставить все как полагается. Цветы и свидание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 171,
    text:
  `
        Я вежливо взяла карточку, пряча ее в свою сумку. Была ли это случайная связь или у нас могло что-то выйти — еще только предстояло узнать. Пока — пусть все идет своим чередом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Item', id: 'Taxi_Card' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 172,
    text:
  `
        Остаток дороги мы проехали в умиротворенной тишине, поглядывая друг на друга, слегка смущаясь.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    message: 'Мигель вас определенно запомнит... ',
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' },
      { story: EStoriesEn.AEP, value: +2, category: 'Person', id: 'Miguel' },
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' },
      { story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'SexCounter' }],
    achievement: { story: EStoriesEn.AEP, name: 'SexyTaxi' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 173,
    text:
  `
        Попрощавшись с Мигелем, я зашла в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 174,
    text:
  `
        «Что за глупости? Мы совсем незнакомы. Не хочу я быть из тех девушек, которые бросаются на первых симпатичных встречных».
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 175,
    text:
  `
        Моя нерешительность немного снизила общее настроение. Но, с другой стороны, я была рада, что не согласилась на такую сомнительную авантюру.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    message: 'Вы правильная девочка ',
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 176,
    text:
  `
        Попрощавшись с Мигелем, я зашла в университет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Taxi.jpg')
  },

  {
    id: 177,
    text:
  `
        Интересные орнаменты на стенах, простор и запах дорогого парфюма. Я смело вошла в стены учебного заведения, по большому счету, не ожидая ничего особенного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 178,
    text:
  `
        Я получила то, что всегда хотела. Шанс учиться. Честно и без запрещенных махинаций. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 179,
    text:
  `
        Все, как я и предполагала. Вычурно, шикарно, дорого. Будто бы я, конечно, живу по-другому, но я и не просила такую жизнь. Надо ли оно? Так ли правы те, кто говорит, что счастье в деньгах? 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 180,
    text:
  `
        Я обратила внимание, что на меня косится один довольно симпатичный парень. Под его вульгарным взглядом было очень неуютно, но я не из тех, кого это может напугать, а потому я с вызовом ответила ему. 
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 181,
    text:
  `
        Мы встретились. Невидимые искры полетели, но отнюдь не из-за возникшей симпатии, а скорее желанием превзойти своего оппонента. 
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 182,
    text:
  `
        Наконец, парень сдался и поднял руки, показывая свое поражение. Затем неспешным шагом подошёл ко мне и сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 183,
    text:
  `
        — Сильный соперник, что достоин моего взора, приветствую! 
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Странный парень',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 184,
    text:
  `
        Я засмеялась от настолько идиотской подачи. Тем не менее между нами сложилась вполне себе миролюбивая атмосфера.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 185,
    text:
  `
        — Я — Мэтт. А как тебя зовут? 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 186,
    text:
  `
        Я знала этот тип мужчин. Привлекательные ловеласы, которым важны не чувства, а количество девушек, а уж о качестве можно в принципе забыть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 187,
    text:
  `
        — Меня зовут $Имя Игрока$, приятно познакомиться, — он учтиво взял меня за руку и поцеловал, отчего по телу прошла неприятная дрожь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 188,
    text:
  `
        — Что ж, $Имя Игрока$, поздравляю с поступлением. Тебе повезло со мной столкнуться, ведь этим вечером я организовываю вечеринку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: 0, category: 'Person', id: 'Matt' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 189,
    text:
  `
        — Прикинь, целый поток! Конечно, многие слились, но все равно. Большой пентхаус, много выпивки. Не пожалеешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 190,
    text:
  `
        Разумеется. Часть студенческой жизни будет всецело посвящено вечеринкам. Особенно если речь будет идти о богатеньких ребятах, чьи хотелки покрываются деньгами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 191,
    text:
  `
        Это то, чего я так желаю? Пойти на первую попавшуюся вечеринку? 
      `,
    buttons: [
      {
        text: 'Отказаться',
        goTo: 192
      },
      {
        text: 'Согласиться',
        goTo: 195
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 192,
    text:
  `
        — Спасибо, конечно, но нет, — я смерила его грозным взглядом, заставляя отступить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 193,
    text:
  `
        — Жаль, потому что мне очень хотелось провести время с такой очаровательной девушкой. Разбила сердце, — с излишней драматизацией он отошел в сторону, возвращаясь к своим делам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    message: 'Ваша жестокость расстроила парня',
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Person', id: 'Matt' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 194,
    text:
  `
        Дешево. Конечно, я могла бы на вечеринке обзавестись новыми знакомыми, но совершенно не хотелось принимать приглашение от такого напыщенного индюка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    message: 'Вы не любите рисковать. Может, оно и к лучшему?',
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 195,
    text:
  `
        — Почему нет, — с ухмылкой произнесла я. — Где и когда? 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg'),
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'GoToParty' }]
  },

  {
    id: 196,
    text:
  `
        — Вот это настрой. Я в тебе не ошибся, красотка. Дай мне свой номер телефона и чуть позже получишь всю информацию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    message: 'Мэтт положил на вас глаз',
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Matt' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 197,
    text:
  `
        Обратной дороги не было. Я нехотя продиктовала свой номер и Мэтт ушел, возвращаясь к своим делам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 198,
    text:
  `
        «Не пожалеть бы об этом». 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    message: 'Вы жаждете окунуться в студенческую жизнь. К чему это приведет?',
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 199,
    text:
  `
        После такой увлекательной беседы, у меня совсем не осталось времени. Расспросив неравнодушных студентов, я нашла нужную аудиторию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Uni_Hall.jpg')
  },

  {
    id: 200,
    text:
  `
        Войдя в просторный зал, я неожиданно для себя почувствовала прилив сил. Как бы мне не хотелось развлекаться, я искренне любила учебу и получать новые знания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 201,
    text:
  `
        Училась я на факультете:
      `,
    buttons: [
      {
        text: 'Иностранных языков и литературы',
        goTo: 202
      },
      {
        text: 'Политических наук',
        goTo: 207
      },
      {
        text: 'Инженерного дела и архитектуры',
        goTo: 215
      }],
    message: 'Данное решение определит ход всей истории: в зависимости от факультета вы будете встречать разных персонажей и попадать в ситуации',
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 202,
    text:
  `
        Еще с детства, когда бабушка начала возить меня по странам, я ощутила эту потребность понимать людей на совершенно разных языках. Впоследствии это переросло в любовь к чтению и осознаванию каких-то философских основ.
      `,
    buttons: [
      {
        text: '',
        goTo: 505
      }],
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'UniLanguage' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 505,
    text:
      `
        В лекционный зал зашел преподаватель и воцарилась тишина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 203,
    text:
  `
        Не мешкая, я решила обратиться к информации о нем, что расположена на сайте университета. Зовут Виктор, тридцать два года, профессор литературы, имеет несколько успешных книг, родиной является Россия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 204,
    text:
  `
        «Интересно... А вот холост ли он?»
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 205,
    text:
  `
        Чарующий голос профессора рассказывал о том, как нам следует подготовиться к предстоящей учебе, что должна начаться через несколько месяцев. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    stats: [
      { story: EStoriesEn.AEP, value: 0, category: 'Person', id: 'Viktor' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 206,
    text:
  `
        Из его рекомендаций следовала: специальная литература, а также посещений дополнительных лекций по важным предметам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 207,
    text:
  `
        В лекционный зал зашел преподаватель и воцарилась тишина.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'UniPolitics' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 208,
    text:
  `
        Не мешкая, я решила обратиться к информации о нем, что расположена на сайте университета. Зовут Маттео, пятьдесят лет, профессор права, ранее был активным политическим деятелем, родиной является Италия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    stats: [
      { story: EStoriesEn.AEP, value: 0, category: 'Person', id: 'Matteo' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 209,
    text:
  `
        «О чем я только думаю... Он же мне в дедушки годится. Или я уже настолько отчаялась попробовать все на свете?»
      `,
    buttons: [
      {
        text: 'Рассматривать его как любовный интерес',
        goTo: 210,
        gift: true
      },
      {
        text: 'Только преподаватель',
        goTo: 212
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 210,
    text:
  `
        Про себя я ухмыльнулась, довольствуясь своей решимостью. Кто знает, какие у этого господина скелеты в шкафу?
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'LoveViktor' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 211,
    text:
  `
        «Это вызов для меня. А то, что я хочу — всегда получаю».
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 212,
    text:
  `
        Вроде бы я ещё не сошла с ума, чтобы даже пытаться мутить с тем, кто настолько старше. Что может быть интересным в таких отношениях?
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 213,
    text:
  `
        Хриплый голос профессора рассказывал о том, как нам следует подготовиться к предстоящей учебе, что должна начаться через несколько месяцев. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 214,
    text:
  `
        Из его рекомендаций следовала: специальная литература, а также посещений дополнительных лекций по важным предметам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 215,
    text:
  `
        В лекционный зал вошла преподавательница и воцарилась тишина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg'),
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'UniArchitecture' }]
  },

  {
    id: 216,
    text:
  `
        Не мешкая, я решила обратиться к информации о ней, что расположена на сайте университета. Зовут Изабелла, двадцать семь лет, профессор по архитектуре, является автором нескольких крупных и успешных проектов, родиной является Италия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    stats: [
      { story: EStoriesEn.AEP, value: 0, category: 'Person', id: 'Isabella' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 217,
    text:
  `
        «Какая эффектная женщина. Я даже завидую ее фигуре».
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 218,
    text:
  `
        Властный голос профессора рассказывал о том, как нам следует подготовиться к предстоящей учебе, что должна начаться через несколько месяцев. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 219,
    text:
  `
        Из ее рекомендаций следовало: специальная литература, а также посещений дополнительных лекций по важным предметам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 220,
    text:
  `
        Я полностью сосредоточилась на речи учителя, совершенно игнорируя свое окружение. Записывала важные детали и свои мысли на этот счёт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 221,
    text:
  `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniLanguage' }) >= 1
        },
        goTo: 222
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniPolitics' }) >= 1
        },
        goTo: 264
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'UniArchitecture' }) >= 1
        },
        goTo: 284
      }
    ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 222,
    text:
  `
        «Думаю, стоит задержаться и подойти к преподу за дополнительной литературой. Да. Отличный предлог».
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 223,
    text:
  `
        Несмотря на свое происхождение, Виктор прекрасно владел итальянским. Его манера речи позволяла не только наслаждаться подачей материала, но и отметить его кропотливую работу над собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 224,
    text:
  `
        После окончания пары его буквально облепили студенты, я бы даже сказала вертлявые студентки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 225,
    text:
  `
        Я хотела показаться умнее, поэтому тихонечко встала чуть поодаль, облокачиваясь о стену. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 226,
    text:
  `
        Пытаясь спастись от назойливых поклонниц, он посмотрел, очень удачно, в мою сторону. Я бросила ему сочувственный взгляд, на что получила жест означающий: «спаси меня». 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 227,
    text:
  `
        Я искренне посмеялась и попыталась придумать, как ему помочь.
      `,
    buttons: [
      {
        text: 'Сказать прямо, чтобы отстали',
        goTo: 228
      },
      {
        text: 'Позвонить Виктору и якобы вызвать в деканат',
        goTo: 249
      },
      {
        text: 'Проигнорировать просьбу',
        goTo: 259
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 228,
    text:
  `
        Меня всегда раздражали такие люди, которые не понимают границ дозволенного. Поэтому мне совершенно не хотелось строить из себя леди.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }
    ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 229,
    text:
  `
        Я близко подошла к этим «фанаткам» и громко сказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 230,
    text:
  `
        — Дайте пройти. Вы мешаете своими расспросами людям, которые хотят учиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 231,
    text:
  `
        Студентки выглядели озадаченно. Одна из них, довольно крупного телосложения вышла вперед, закрыв своим тучным телом остальных, и заявила:
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 232,
    text:
  `
        — А мы тоже интересуемся важными вопросами. Ты совсем что ли страх потеряла?
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    speaker: 'Наглая толстушка',
    imageFront: require('../../../../Images/AEP/Persons/Carlotte.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 233,
    text:
  `
        — Тогда почему вы даже не даете профессору выдохнуть? 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 234,
    text:
  `
        — Это не так. Мы как раз интересовались лекцией, верно девочки? — остальные участницы «банды» одновременно кивнули.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speaker: 'Наглая толстушка',
    imageFront: require('../../../../Images/AEP/Persons/Carlotte.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 235,
    text:
  `
        Типичные хабалки. Других слов не подобрать, чтобы описать мое отношение к этим студенткам. Они как склочные женщины, объединяются в один ворох и хотят самоутвердиться за счет унижения других.  
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 236,
    text:
  `
        Я посмотрела на профессора. Тот обреченно вздыхал. Ему явно не нравилась атмосфера происходящего. Спустя несколько секунд молчания, он произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 237,
    text:
  `
        — На сегодня все. Давайте ваши оставшиеся вопросы обсудим на следующей лекции. Мне нужно готовиться к занятиям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 238,
    text:
  `
        — Карлота, пойдем уже, — одна из девушек обращалась к их «лидеру» с мольбой больше не позориться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    speaker: 'Слуга Карлоты',
    imageFront: require('../../../../Images/AEP/Persons/Carlottas_Slave.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 239,
    text:
  `
        — Всего доброго, профессор, — ее тон приобрел легкие нотки негодования, а свой суровый взгляд она обрушила на меня, как бы намекая, что мне в будущем может быть худо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speaker: 'Карлота',
    imageFront: require('../../../../Images/AEP/Persons/Carlotte.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 240,
    text:
  `
        После того как они покинули аудиторию, преподаватель принялся собирать свои материалы в портфель. Попутно он обратился ко мне:
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    message: 'Карлоте не нравится, когда ей мешают',
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Person', id: 'Carlotte' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 241,
    text:
  `
        — Спасибо за помощь! Я растерялся от такого внимания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    message: 'Виктор благодарен вам за помощь ',
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Viktor' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 242,
    text:
  `
        — Я не сделала ничего такого, что вы, — я немного смутилась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 243,
    text:
  `
        — Вы что-то хотели? Или просто сыграли роль доброго полицейского? 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 244,
    text:
  `
        «Рада, что смогла расположить его к себе. Надеюсь, это поможет не только в учебных вопросах, но и в личных».
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 245,
    text:
  `
        — Дополнительная литература. Хотела бы начать более углубленно изучать программу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 246,
    text:
  `
        — Очень приятно видеть ваши стремления к знаниям, — он призадумался. — Прямо сейчас мне трудно ответить. Направьте ваш запрос мне на почту. Обсудим детали там. 
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    speaker: 'Виктор',
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 247,
    text:
  `
        — Спасибо! 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 248,
    text:
  `
        После нашего милого диалога, профессор покинул лекционный зал, оставив меня в гордом одиночестве. Я провела рукой по столам, про себя радуясь, что первый вводный учебный день получился очень даже насыщенным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 249,
    text:
  `
        Это был самый простой путь. На сайте университета указан телефон для связи с преподавателем, поэтому отойдя немного в сторону, я позвонила и объявила о срочном вызове. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 250,
    text:
  `
        Профессор поначалу смутился, но увидев мой заговорческий взгляд, улыбнулся и благодарно кивнул, объявив о своем срочном уходе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    message: 'Виктор благодарен вам за помощь ',
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Viktor' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 251,
    text:
  `
        Я обратила внимание, что довольно крупная девушка, которая больше всего вешалась на преподавателя, томно вздыхала и говорила, как же жаль, что Виктор так скоро покинул их. 
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageFront: require('../../../../Images/AEP/Persons/Carlotte.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 252,
    text:
  `
        Увидев, что я кошусь на нее, она с вызовом подошла и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 253,
    text:
  `
        — Проблемы?
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speaker: 'Наглая толстушка',
    imageFront: require('../../../../Images/AEP/Persons/Carlotte.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 254,
    text:
  `
        — Нет... — немного растерянно проговорила я, не понимая такого внимания к своей персоне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 255,
    text:
  `
        — Смотри мне, — она недовольно фыркнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    speaker: 'Наглая толстушка',
    imageFront: require('../../../../Images/AEP/Persons/Carlotte.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 256,
    text:
  `
        — Карлота, пойдем уже, нам пора, — одна из девушек обращалась к ней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speaker: 'Слуга Карлоты',
    imageFront: require('../../../../Images/AEP/Persons/Carlottas_Slave.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    stats: [
      { story: EStoriesEn.AEP, value: 0, category: 'Person', id: 'Carlotte' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 257,
    text:
  `
        Типичные хабалки. Других слов не подобрать, чтобы описать мое отношение к этим студенткам. Они как склочные женщины, объединяются в один ворох и хотят самоутвердиться за счет унижения других.  
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 258,
    text:
  `
        Когда я осталась в лекционном зале в гордом одиночестве, то провела рукой по столам, про себя радуясь, что первый вводный учебный день получился очень даже насыщенным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 259,
    text:
  `
        Немного поразмыслив, я поняла, что мне совсем не хотелось связываться с этими навязчивыми студентками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 260,
    text:
  `
        Одна из них заметнее других выделялась на фоне. Полная, яркая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageFront: require('../../../../Images/AEP/Persons/Carlotte.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 261,
    text:
  `
        Типичные хабалки. Других слов не подобрать, чтобы описать мое отношение к этим студенткам. Они как склочные женщины, объединяются в один ворох и хотят самоутвердиться за счет унижения других.  
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 262,
    text:
  `
        Виктор так и не смог ничего им противопоставить и покорно слушал их вопросы, изредка пытаясь что-то промямлить в ответ. 
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageFront: require('../../../../Images/AEP/Persons/Viktor.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 263,
    text:
  `
        Я поняла, что мне здесь нечего ловить, поэтому собрав вещи, покинула лекционный зал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 264,
    text:
  `
        «Думаю, стоит задержаться и подойти к преподу за дополнительной литературой».
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 265,
    text:
  `
        Маттео во время лекции активно жестикулировал и говорил на повышенных тонах. Благодаря этому ни один студент не отвлекался от занятия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 266,
    text:
  `
        После окончания пары к нему подошли несколько ребят. Ворчливый профессор неохотно шел на контакт, постоянно ссылаясь на занятость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 267,
    text:
  `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'LoveViktor' }) >= 1
        },
        goTo: 268
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'LoveViktor' }) <= 0
        },
        goTo: 279
      }
    ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 268,
    text:
  `
        Но меня это не беспокоило. Я уверенной походкой подошла к нему, положила руку на парту, немного выпятив самые важные части тела, и улыбнулась, проговаривая:
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    achievement: { story: EStoriesEn.AEP, name: 'ElderLove' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 269,
    text:
  `
        — Профессор, простите, уделите мне немного времени. Я хотела бы посоветоваться с вами по поводу дополнительной литературы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 270,
    text:
  `
        Мне показалось, что жадный взгляд старика проскользнул по моей груди. Но он быстро сделал невозмутимое лицо и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 271,
    text:
  `
        — Что именно вас интересует? 
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 272,
    text:
  `
        — Литература, которая поможет мне углубиться в будущие темы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 273,
    text:
  `
        — Что ж, — он почесал затылок. — Могу посоветовать....
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 274,
    text:
  `
        Он перечислил несколько книг, которые я успешно записала в свой телефон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 275,
    text:
  `
        — На этом все? Я должен готовиться к следующему занятию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 276,
    text:
  `
        — Да, спасибо вам большое! 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 277,
    text:
  `
        Преподаватель мельком посмотрел на мое лицо, ухмыльнулся и покинул аудиторию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    message: 'Маттео обратил на вас внимание ',
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Matteo' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 278,
    text:
  `
        Когда я осталась в лекционном зале в гордом одиночестве, то провела рукой по столам, про себя радуясь, что первый вводный учебный день получился очень даже насыщенным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 279,
    text:
  `
        Но мне было все равно. Самое важное — получить от него информацию хоть о каких-то дополнительных источниках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 280,
    text:
  `
        Подойдя к его столу, я обратилась со своей просьбой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 281,
    text:
  `
        — Извините, я занят. Давайте в другое время, — ворчливо ответил профессор.
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    speaker: 'Маттео',
    imageFront: require('../../../../Images/AEP/Persons/Matteo.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 282,
    text:
  `
        «Мерзкий старикашка. Неужели он не понимает, как для меня это важно. Так сложно что ли пойти навстречу?»
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 283,
    text:
  `
        Я поняла, что мне здесь нечего ловить, поэтому собрав вещи, покинула лекционный зал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 284,
    text:
  `
        «Думаю, стоит задержаться и подойти к преподу за дополнительной литературой».
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 285,
    text:
  `
        Изабелла во время лекции вела себя довольно раскованно, словно это была ее стихия. Она властно пробегала взглядом по каждому из нас, убеждаясь, что все студенты так же увлеченно слушают ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 286,
    text:
  `
        Парни так уж точно не могли оторвать взгляда от преподавательницы, в то время как сама Изабелла будто питалась вниманием к себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 287,
    text:
  `
        Создавалось впечатление, что она в целом ничего не боялась в этой жизни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 288,
    text:
  `
        Занятие прошло на одном дыхании, и, вспомнив о дополнительной литературе, я поспешила задать свой вопрос. 
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 289,
    text:
  `
        Но сразу же после окончания пары преподавательница заявила, что все интересующие нас вопросы мы можем прислать на почту, а у нее срочные дела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: require('../../../../Images/AEP/Persons/Isabella.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 290,
    text:
  `
        Она быстро покинула лекционный зал, оставив студентов перешептываться между собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 291,
    text:
  `
        «Отличное начало. Она же могла задержаться на лишнюю минуту и ничего бы с ней не случилось».
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 292,
    text:
  `
        Я поняла, что мне здесь нечего ловить, поэтому, собрав вещи, покинула лекционный зал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Lection.jpg')
  },

  {
    id: 293,
    text:
  `
        В довольно неплохом расположении духа я вернулась в комнату, где успешно задремала до самого вечера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 294,
    text:
  `
        Когда я проснулась, за окном уже было темно и легкая прохлада доносилась до меня. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 295
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 295,
    text:
  `
        «Вечер обещает быть обычным, если я что-нибудь не придумаю».
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 296,
    text:
  `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'GoToParty' }) >= 1
        },
        goTo: 297
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'GoToParty' }) <= 0
        },
        goTo: 377
      }
    ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 297,
    text:
  `
        Думать долго не пришлось, ведь я вспомнила о приглашении Мэтта на вечеринку. И как вовремя я увидела сообщение от него с адресом.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 298,
    text:
  `
        Выбрав более подходящий наряд, я еще покрутилась у зеркала и покинула комнату, тихонечко проскользнув мимо бабушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 299,
    text:
  `
        Все, как я и предполагала. Громкая музыка, веселые молодые люди. Это была своя, особенная атмосфера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    music: require('../../../../Sounds/AEP/Party.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 300,
    text:
  `
        Видимо Мэтт немного ошибся со временем, так как вечеринка была в самом разгаре и я с трудом могла найти себе какую-либо компанию для нормального времяпровождения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 301,
    text:
  `
        Многие уже были достаточно выпившие, кто-то не стеснялся раздеваться и открыто лезть целоваться к первым встречным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 302,
    text:
  `
        «Ух, ты, прошлая я сказала бы, что мне здесь некомфортно, но новая я оценила это место разврата и тусовок».
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 303,
    text:
  `
        Через некоторое время меня нашел сам виновник торжества. Он тут же обольстительно улыбнулся мне и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 304,
    text:
  `
        — Рад тебя видеть, $Имя Игрока$! Был уверен, что ты все-таки придешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 305,
    text:
  `
        — Мне просто было нечего делать, — равнодушно ответила я, отводя взгляд в сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 306,
    text:
  `
        — Какая ты холодная... Ладно тебе, тут принято веселиться, а ты излишне напряжена. На вот, выпей, — он протянул стакан с алкоголем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 307,
    text:
  `
        «И правда. Зачем еще ходить на вечеринки, если не отрываться? С другой стороны, неужели только это нужно, чтобы нормально провести время?»
      `,
    buttons: [
      {
        text: 'Выпить мало',
        goTo: 308
      },
      {
        text: 'Выпить много',
        goTo: 324
      },
      {
        text: 'Не пить алкоголь',
        goTo: 356
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 308,
    text:
  `
        «Немного для настроения и правда не повредит». 
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: -1, category: 'Effect', id: 'Karma' },
      { story: EStoriesEn.AEP, value: 1, category: 'Choice', id: 'DrinkAtParty' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 309,
    text:
  `
        Я поблагодарила Мэтта за протянутый стакан и отпила немного. Коктейль быстро усвоился, и мы с парнем отошли чуть поодаль, чтобы музыка не мешала нашей беседе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 310,
    text:
  `
        — Как ты попала в университет? 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 311,
    text:
  `
        — Хм, сдала экзамены. Никаких загадок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 312,
    text:
  `
        — Вот так просто? Ты чего-то недоговариваешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 313,
    text:
  `
        — Нет... Не всегда же решают деньги, — я с вызовом посмотрела на парня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 314,
    text:
  `
        — Всегда, — он ухмыльнулся. — Давай не будем играть в эти наивные высказывания. Деньги решают все. Посмотри на это окружение, посмотри на меня и мои достижения. Я бы к своим годам никогда не смог достичь такого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 315,
    text:
  `
        — Но это же не твое. Какой смысл этим гордиться?
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 316,
    text:
  `
        — Потому что это есть. Нет смысла гордиться какими-то мнимыми мечтами или своей решимостью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 317,
    text:
  `
        Его позиция, разумеется, имела право на существование. Не скажу, что поддерживаю это, так как для меня жизнь имеет смысл только в рамках своих достижений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 318,
    text:
  `
        Безусловно, я благодарна бабушке за материальную помощь, но это лишь временные меры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 319,
    text:
  `
        — А ты не промах, — сказал Мэтт. — Я уж подумал, что ты из тех правильных девушек, которые в свободное время готовятся к парам. Но насколько ты смелая?
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 320,
    text:
  `
        Он, не теряя времени, поцеловал меня. Его губы властно завладели моими, лишая разума. Парень положил руки на мои бедра и плавно отстранился.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 321,
    text:
  `
        «Это точно лучший поцелуй в моей жизни. Интересно, многих ли он так...?»
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Matt' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 322,
    text:
  `
        — Что ж, — Мэтт немного размял спину. — Вернусь к гостям. Спасибо за поцелуй. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 323,
    text:
  `
        Парень ушел, оставив меня стоять в растерянности. Немного побыв на вечеринке, я решила вернуться домой, так как мне стало скучно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 324,
    text:
  `
        «Гулять так гулять».  
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speaker: '$Имя Игрока$',
    stats: [{ story: EStoriesEn.AEP, value: 2, category: 'Choice', id: 'DrinkAtParty' }],
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 325,
    text:
  `
        Я поблагодарила Мэтта за протянутый стакан и отпила достаточно много.  Коктейль быстро усвоился, и мы с парнем отошли чуть поодаль, чтобы музыка не мешала нашей беседе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 326,
    text:
  `
        — Как ты попала в университет? 
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 327,
    text:
  `
        — Хм, сдала экзамены. Никаких загадок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 328,
    text:
  `
        — Вот так просто? Ты чего-то недоговариваешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 329,
    text:
  `
        — Я... — от выпитого алкоголя резко закружилась голова, ноги подкосились. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 330,
    text:
  `
        Мэтт быстро сориентировался и поймал меня, прижимая к себе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 331,
    text:
  `
        — Не умеешь ты пить, подруга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 332,
    text:
  `
        — Умею, — буркнула я, потихоньку теряя связь с реальностью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    message: 'Вы предпочитаете отрываться до победного ',
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [{ story: EStoriesEn.AEP, value: -2, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 333,
    text:
  `
        Я посмотрела на Мэтта, ощутила играющую близость между нами. Парень не растерялся, аккуратно положил руку мне на щеку, слегка поглаживая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    music: require('../../../../Sounds/AEP/Ero.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 334,
    text:
  `
        Он будто бы прощупывал почву, пытался понять границы дозволенного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 335,
    text:
  `
        Увидев, что я особо не сопротивляюсь, прижался своим лбом к моему, а затем нежно провел пальцем по моим губам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 336,
    text:
  `
        Невольно я закусила губу, вдыхая аромат страсти, который навис над нами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 337,
    text:
  `
        Мэтт стал смелее. Прижал меня к стенке дома, запустил руку под одежду и стал сжимать мою грудь, попутно проводя своими губами по моему лицу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 338,
    text:
  `
        Через несколько секунд он не выдержал и жадно впился в мои губы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 339,
    text:
  `
        Я полностью растворилась в этом чувстве. Руки легли на его плечи, а голос испускал сладкие стоны, благодаря его ловким пальцам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 340,
    text:
  `
        Мэтт продолжал испытывать меня, возбуждать. Я ощущала это нависшее напряжение, и была не в силах сопротивляться.
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 341,
    text:
  `
        — Так и будем стоять здесь или ты, наконец, отведешь меня к себе?
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 342,
    text:
  `
        В глазах парня заиграли огоньки, и, поддерживая меня, он направлялся к своей комнате.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 343,
    text:
  `
        Закрыв дверь, парень быстро прильнул ко мне, снова и снова разжигая во мне огонь страсти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 344,
    text:
  `
        Мэтт не стал долго ждать, и, достаточно небрежно толкнув меня на кровать, достал из кармана презерватив, и, быстро скинув свою одежду, надел его.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 345,
    text:
  `
        Я мучительно ожидала, пока он заполнит пустоту. Парень резко вошел в меня, заставляя закусить губу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 346,
    text:
  `
        Его грубые толчки заставляли меня стонать, и, совершенно потеряв голову от страсти и выпитого алкоголя, я резко поцарапала его спину.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 347,
    text:
  `
        — Эй, совсем с ума сошла? — спросил Мэтт, продолжая ритмичные движения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt_Naked.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 348,
    text:
  `
        Он обхватил мои руки, и, подняв их над головой, прижал к кровати. 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 349,
    text:
  `
        Показалось, что парень любовался мной. И, грубо укусив за сосок, он ускорился.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 350,
    text: '',
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    cutScene: { video: require('../../../../Images/AEP/CutScenes/Hero_Matt.mp4'), goTo: 351 },
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 351,
    text:
  `
        — Да, да, да... — застонала я, чувствуя, как приближаюсь к концу.
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Brassiere.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 352,
    text:
  `
        Мэтт резко вышел, оставив меня в полной растерянности. Быстро прикрывшись, он сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'SexCounter' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 353,
    text:
  `
        — Тебе пора. Я вызову такси.
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    beforeBegin: () => {
      statsManager.get({ story: EStoriesEn.AEP, category: 'Choice', id: 'SexCounter' }) >= 2 && achievementsManager.unlock(EStoriesEn.AEP, 'ItTakesTwo')
    },
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt_Naked.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 354,
    text:
  `
        Я конечно догадывалась о таких последствиях, но не ожидала, что меня выставят после секса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 355,
    text:
  `
        Одевшись, я буквально выбежала с вечеринки, проклиная этот вечер.
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    message: 'Мэтт доволен, и ваш секс он хорошенько запомнит ',
    stats: [
      { story: EStoriesEn.AEP, value: +2, category: 'Person', id: 'Matt' }],
    achievement: { story: EStoriesEn.AEP, name: 'PartyQueen' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Matt_Room.jpg')
  },

  {
    id: 356,
    text:
  `
        Я поблагодарила Мэтта за протянутый стакан и отказалась. Парень посмотрел на меня с интересом, и, выпив напиток разом, смело спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    music: require('../../../../Sounds/AEP/Party.mp3'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 357,
    text:
  `
        — Так, значит, ты правильная девочка, да?
      `,
    buttons: [
      {
        text: '',
        goTo: 700
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 700,
    text:
      `
        — Я бы так не сказала, просто не хочу забыть этот вечер.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 358,
    text:
  `
        — А есть что-то примечательное? — томно спросил парень, сокращая дистанцию между нами.
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 359,
    text:
  `
        «Оу, что-то мне это не нравится. Но, с другой стороны, Мэтт, кажется, крутым парнем. Готова ли я к такому?»
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 360,
    text:
  `
        К моему удивлению, парень не стал еще больше приближаться, только спросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 361,
    text:
  `
        — Как ты попала в университет? 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 362,
    text:
  `
        — Хм, сдала экзамены. Никаких загадок, — ответила я, чувствуя, каким голодным взглядом пожирал меня Мэтт.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 363,
    text:
  `
        — Вот так просто? Ты чего-то недоговариваешь, подруга. Может, был сексуальный профессор, а? 
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 364,
    text:
  `
        — О, боже, нет, — недовольно фыркнула я, наблюдая за самодовольным лицом парня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 365,
    text:
  `
        — Не всегда же решают деньги. Иногда надо просто подготовиться и сдать экзамены на высший балл.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 366,
    text:
  `
        — Всегда, — он ухмыльнулся. — Давай не будем играть в эти наивные высказывания. Деньги решают все. Посмотри на это окружение, посмотри на меня и мои достижения. Я бы к своим годам никогда не смог бы достичь такого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 367,
    text:
  `
        — Но это же не твое. Какой смысл этим гордиться?
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 368,
    text:
  `
        — Потому что это есть. Нет смысла гордиться какими-то мнимыми мечтами или своей решимостью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 369,
    text:
  `
        Его позиция, разумеется, имела право на существование. Не скажу, что поддерживаю это, так как для меня жизнь имеет смысл только в рамках своих достижений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 370,
    text:
  `
        Безусловно, я благодарна бабушке за материальную помощь, но это лишь временные меры. 
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 371,
    text:
  `
        От моего взгляда не ускользнуло, что парень все это время не сводил с меня взгляда.
      `,
    buttons: [
      {
        text: 'Мэтт мне нравится',
        goTo: 372
      },
      {
        text: 'Мэтт не в моем вкусе',
        goTo: 373
      },
      {
        text: 'Да он кабель',
        goTo: 374
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 372,
    text:
  `
        «Кто знает, возможно, мы сможем поладить и найти общий язык в более подходящем месте. А, может, между нами будет эпический роман? Ведь я чувствовала, какие искры вспыхивают между нами».
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [
      { story: EStoriesEn.AEP, value: +1, category: 'Person', id: 'Matt' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 373,
    text:
  `
        «Как парень — он мне не подходит. Слишком уж он ветреный и непостоянный. Но, может, как друг он будет лучше? Веселый и жизнерадостный — отличное сочетание».
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 374,
    text:
  `
        «Нет, такой типаж парней — точно не для меня. Он занимается сексом со всем, что движется, поэтому стоит постараться не двигаться».
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Party.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [{ story: EStoriesEn.AEP, value: -1, category: 'Person', id: 'Matt' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 375,
    text:
  `
        — Что ж, — Мэтт немного размял спину. — Вернусь к гостям. Спасибо за беседу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speaker: 'Мэтт',
    imageFront: require('../../../../Images/AEP/Persons/Matt.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 376,
    text:
  `
        Парень ушел, оставив меня стоять в растерянности. Немного побыв на вечеринке, я решила вернуться домой, так как мне стало скучно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Penthouse_Party.jpg')
  },

  {
    id: 377,
    text:
  `
        Первый день в университете казался мне очень волнительным. И вроде бы столько всего произошло.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    music: require('../../../../Sounds/AEP/Daily.mp3'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },
  // @MARK
  {
    id: 378,
    text:
  `
        
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Item', id: 'Taxi_Card' }) >= 1
        },
        goTo: 379
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.AEP, category: 'Item', id: 'Taxi_Card' }) <= 0
        },
        goTo: 410
      }
    ],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 379,
    text:
  `
        «Сидеть дома в такой прекрасный вечер вообще не хочется. Возможно, стоит позвонить Мигелю и прояснить ситуацию между нами?»
      `,
    buttons: [
      {
        text: 'Позвонить',
        goTo: 380
      },
      {
        text: 'Не звонить',
        goTo: 407
      }],
    speaker: '$Имя Игрока$',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 380,
    text:
  `
        Я только набрала номер, как он тут же ответил. Его голос заставил меня растеряться, будто ничего между нами и не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Choice', id: 'CallMiguel' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 381,
    text:
  `
        — Слушаю, — повторил он, так и не дождавшись моего слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 382,
    text:
  `
        — Привет, Мигель. Мы с тобой сегодня... — я запнулась, не зная, как представиться и что сказать.
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 383,
    text:
  `
        — А, привет, красавица. Я уж думал, что ты не позвонишь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 384,
    text:
  `
        — Ждал моего звонка?
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 385,
    text:
  `
        — Ждал. Может, встретимся в кафе и поболтаем? Через полчаса устроит?
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 386,
    text:
  `
        — Хорошо. До встречи, Мигель.
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 387,
    text:
  `
        «И что, интересно, мы собираемся обсуждать после того, что было? Или он хочет сказать, что это была ошибка или надеется снова получить меня?»
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 388,
    text:
  `
        Я прибыла в кафе немного раньше, поэтому, сидя за столиком, стала ждать моего спутника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 389,
    text:
  `
        Нервы давали о себе знать, и, то и дело, я проверяла телефон, в попытках скоротать время.
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 390,
    text:
  `
        Но неожиданно его широкая ладонь коснулась моей спины, и, пройдя вперед, он улыбнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 391,
    text:
  `
        Мужчина сел напротив меня и немного смущенно уточнил:
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 392,
    text:
  `
        — Ты даже не сказала свое имя.
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 393,
    text:
  `
        — $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 394,
    text:
  `
        — Приятно познакомиться, $Имя Игрока$. Теперь мы наконец можем начать наше свидание. Оно тебя ни к чему не принуждает. Просто хочу провести с тобой время. Обставить как полагается.
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 395,
    text:
  `
        — Я тоже не против, Мигель.
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 396,
    text:
  `
        Это действительно было похоже на настоящее свидание. Мигель вел себя как джентльмен: ухаживал за мной, говорил приятные вещи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 397,
    text:
  `
        Иногда у меня возникало ощущение, что ему стыдно за произошедшее. Он будто бы хотел извиниться, хотел всем видом показать: он не такой.
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 398,
    text:
  `
        Но что-то сдерживало его. Желание выглядеть круто в моих глазах? 
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 399,
    text:
  `
        Мне не мешало это никак насладиться вечером и его ухаживаниями. И под конец мы:
      `,
    buttons: [
      {
        text: 'Поцеловались',
        goTo: 400
      },
      {
        text: 'Пожелали друг другу всего доброго',
        goTo: 403
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 400,
    text:
  `
        Наши губы снова соединились. И будто бы вспоминая утреннюю встречу, тело невольно задрожала в сладком экстазе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    stats: [
      { story: EStoriesEn.AEP, value: 1, category: 'Person', id: 'Miguel' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 401,
    text:
  `
        Боясь, что это зайдет дальше, я разомкнула поцелуй. 
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 402,
    text:
  `
        Уж очень свежие воспоминания преследовали меня. Мигель не задавал вопросов, но он все понял и поддержал меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 403,
    text:
  `
        — Спасибо тебе за вечер, Мигель!
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 404,
    text:
  `
        — Уже так темно, и мне, пожалуй, пора.
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 405,
    text:
  `
        — Тебя подвезти? Я на машине.
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 406,
    text:
  `
        — Я лучше пройдусь. Спокойной ночи, Мигель.
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 500,
    text:
      `
        — Спокойной ночи, $Имя Игрока$.
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Cafe_Evening.jpg')
  },

  {
    id: 407,
    text:
  `
        Я не стала тревожить Мигеля, и, спустившись вниз, решила поужинать. Приготовила пасту с креветками, и, хоть она получилась не такой, как обычно, приносила бабушка, но мне все равно неплохо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speaker: 'Мигель',
    imageFront: require('../../../../Images/AEP/Persons/Miguel.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 408,
    text:
  `
        Так как других развлечений я не придумала, пришлось поучиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 409,
    text:
  `
        — Да, не о таком вечере я мечтала. Но кого мне винить? Сама виновата. Вот тебе и роль правильной девочки!
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 410,
    text:
  `
        Я спустилась вниз и решила поужинать. Приготовила пасту с креветками, и, хоть она получилась не такой, как обычно приносила бабушка, но мне все равно неплохо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 411,
    text:
  `
        Так как других развлечений я не придумала, пришлось поучиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 412,
    text:
  `
        — Да, не о таком вечере я мечтала. Но кого мне винить? Сама виновата. Вот тебе и роль правильной девочки!
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    speaker: '$Имя Игрока$',

    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.AEP, 'AEP_Hero') },
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    stats: [{ story: EStoriesEn.AEP, value: +1, category: 'Effect', id: 'Karma' }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 413,
    text:
  `
        Когда уже совсем стемнело, я прилегла на кровать, готовясь ко сну.
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 414,
    text:
  `
        — Именно так я представляла себе жизнь, наполненную интересными событиями. Мне нравится!
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    speaker: '$Имя Игрока$',

    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 415,
    text:
  `
        — Если за один день столько всего произошло, что же меня ждет завтра?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('AEP', 'Глава 1', 'Часть 2', '0')
        }
      }],
    speaker: '$Имя Игрока$',
    imageFront: require('../../../../Images/AEP/Persons/Hero_Pajamas.png'),
    imageBorder: require('../../../../Images/AEP/UI/Border.png'),
    achievement: { story: EStoriesEn.AEP, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/AEP/Backgrounds/Hero_Room.jpg')
  }
])
