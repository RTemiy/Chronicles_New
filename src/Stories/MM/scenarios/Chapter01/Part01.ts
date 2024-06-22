import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.MM, chapterName: 'Глава 1', partName: 'Часть 1', code: '0' }, [
  {
    id: 0,
    text:
      `
        — ...должна была обыскать дом, проверить ценности, бумаги, удостоверения, затем сразу же звонить в полицию.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    ambient: require('../../../../Sounds/MM/Clock_Ticking.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 1,
    text:
      `
        Руки девушки нервно сжимали одежду. Ее голос слегка дрогнул, Марго до боли прикусила губу, буквально отрезвляя себя. Она чувствовала себя провинившимся перед родителями ребенком, нарушившим давно заученные правила.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 2,
    text:
      `
        — Почему не поступила так? Будь ты в опасной ситуации, сразу же бы растерялась. Не положено...
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Артур Нильсен ',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 3,
    text:
      `
        — Пройдешь физическую и психологическую подготовку, начинай завтра же. Параллельно с делом.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 4,
    text:
      `
        — Есть, сэр. Я могу идти?
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 5,
    text:
      `
        — Свободна.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 6,
    text:
      `
        Марго почти не дышала. И дело было совсем не в том, что ее отчитал начальник, а в том, что она корила себя раз за разом за совершенный проступок.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 7,
    text:
      `
        — <i> Где были твои мозги? И ты еще называешь себя профессиональным детективом?
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 8,
    text:
      `
        Когда девушка вставала из-за стула, взгляд ее случайно зацепился за стопку бумаг на столе мистера Нильсена. Почерк был уж очень похож на почерк письма незнакомца.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 9,
    text:
      `
        — <i> Бред... Полнейший бред. Потом я начну подозревать всех вокруг? Видеть преступника в Дилане?
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 10,
    text:
      `
        Освобождаясь от мысленных упреков, уже начинавших ей казаться безумной мантрой, детектив мотнула головой. Затем обратилась к Артуру.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 11,
    text:
      `
        — Мы нашли Джонатана Брауна. Порядочный человек, его история вполне складная. Будем проверять алиби, допрашивать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 12,
    text:
      `
        Начальник стоял к девушке спиной, медленно вдыхая дым сигареты. Марго никогда не могла понять, что творилось в голове мистера Нильсена.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 13,
    text:
      `
        Думал ли он о мертвом теле, об уликах, о письме? Может в его голове было блаженное умиротворение, граничащее с предвкушением от новой тайны?
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 14,
    text:
      `
        Или же он бездумно взирал на просторы Лондона, а голова была свободна от тяжелых размышлений? 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 15,
    text:
      `
        Мужчина медленно повернул к ней голову, седая прядь упала на его лицо. Он потушил сигарету о пепельницу, слегка улыбнувшись, кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 16,
    text:
      `
        — Работай, Марго. О каждом действии сообщай мне. Дело мутное, что-то подсказывает мне, провозимся мы с ним долго.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 17,
    text:
      `
        Ничего не ответив, девушка вышла из кабинета. Прислонилась к холодной двери, глубоко вздохнула, прикрыв в глаза. Ночь, проведенная в парке, а затем домашняя бессонница в изнуряющих мыслях, давала о себе знать.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Corridor.jpg')
  },

  {
    id: 18,
    text:
      `
        — <i> Не смей расслабляться.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Corridor.jpg')
  },

  {
    id: 19,
    text:
      `
        Переходя на бег, детектив помчалась в кабинет...
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Corridor.jpg')
  },

  {
    id: 20,
    text:
      `
        Сырая почва под ногами, ярко светящая луна, будто бы безмолвный свидетель, следящий за каждым действием, тихие звуки сверчков, старающиеся заглушить внутреннюю агонию.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    beforeBegin: whiteFlash,
    message: '11 часов ранее...',
    music: require('../../../../Sounds/MM/Sad_Stress.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 21,
    text:
      `
        — <i> Молодец... Самое время подумать о природе.
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 22,
    text:
      `
        Девушка ступала по шуршащим листьям и чувствовала себя в этот момент искусной охотницей, преследующей свою жертву. Ловко, бесстрашно, неумолимо.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 23,
    text:
      `
        Шаг за шагом компания продвигалась вперед. Трое полицейских и Дилан — вполне привычная команда для Маргариты. Она не раз участвовала в подобных вылазках, но сейчас ощущала особое напряжение.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 24,
    text:
      `
        — <i> И как только они согласились на это?
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Маргарита',
    parallax: 'left',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 25,
    text:
      `
        Девушка снова задавала себе мысленный вопрос, ища на него ответ. Уговоры полицейских, переходящие в мольбу, при которых даже Дилан немного посмеивался, компромисс, к которому им удалось наконец прийти...
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 26,
    text:
      `
        — Давайте так, я буду впереди, вы сзади. Подстрахуете при случае.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 27,
    text:
      `
        Видимо поняв, что с девушкой бесполезно спорить, полицейские махнули рукой, как бы говоря: «Хорошо, твоя взяла». Марго улыбнулась своим мыслям.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 28,
    text:
      `
        — <i> Все же не зря я так дотошно изучала психологию на курсе. Смогла убедить угрюмых мужчин...
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 29,
    text:
      `
        Прижимая пистолет к груди, она резко оборачивалась из стороны в сторону, следила за ситуацией, пытаясь как можно лучше видеть обстановку вокруг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 30,
    text:
      `
        Иногда принимала какого-то бездомного, шатающегося из стороны в сторону, за предполагаемого убийцу, но быстро сбрасывала это наваждение.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 31,
    text:
      `
        Вряд ли преступник ждал их на месте встречи, вряд ли вообще где-то было мертвое тело. Письмо могло запросто оказаться неудачным розыгрышем, шуткой больного человека. Такое на практике уже происходило.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 32,
    text:
      `
        — <i> Ну же, осталось совсем немного...
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 33,
    text:
      `
        Впереди показался небольшой могильный крест. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 34,
    text:
      `
        — <i> Деревянный... Видно, что самодельный, как будто кто-то уж очень спешил.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Objects/Wooden_Cross.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 35,
    text:
      `
        Полицейские двинулись вперед, начав окружать участок земли. Рядом с травой что-то ярко блеснуло. При лунном освещении украшение выделялась особенно примечательно, броско.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 36,
    text:
      `
        — Это то, о чем я думаю?
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Item', id: 'Earring' }],
    message: 'Новая улика добавлена в инвентарь',
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 37,
    text:
      `
        Напарник шепнул прямо рядом с ухом девушки. Марго поежилась, ответила так же тихо.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 38,
    text:
      `
        — Боюсь, что да.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 39,
    text:
      `
        Девушка нахмурилась, ругая себя за проявленную беспечность.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 40,
    text:
      `
        — <i> А завтра что? Вместо потерянной сережки забудешь закрыть дверь в квартире?
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 41,
    text:
      `
        Полицейские резко заговорили, уверенно и громко чеканя приказ, от которого детектив невольно вздрогнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 42,
    text:
      `
        — Ничего не трогать. Оставаться на местах, сейчас вызовем подкрепление, оцепим участок. Будем копать в этом месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Mike' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 43,
    text:
      `
        — Главное не мешайтесь. Особенно ты.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 44,
    text:
      `
        Марго обиженно отвела взгляд в сторону. Поняла, что обращался мужчина явно к ней. Ища хоть какую-то поддержку, девушка отыскала рукой...
      `,
    buttons: [
      {
        text: 'Руку Дилана',
        goTo: 45
      },
      {
        text: 'Медальон на шее',
        goTo: 53
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 45,
    text:
      `
        Напарник не ожидал такого прикосновения, его зрачки расширились, лицо слегка вытянулось, изрядно удивившись. Но уже в следующую секунду взгляд потеплел.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    message: 'Дилан рад быть рядом',
    music: require('../../../../Sounds/MM/Romantic.mp3'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Dylan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 46,
    text:
      `
        Он притянул девушку к себе, обвивая руками ее дрожащие плечи, закрывая и защищая от всего внешнего мира.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 47,
    text:
      `
        — Все будет хорошо, Марго. Не забывай, ты у нас самая сильная.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 48,
    text:
      `
        Уголки губ детектива дрогнули. Она уткнулась лицом в грудь Дилана, ощущая его приятное тепло, уверенность, легкие нотки ненавязчивого парфюма и дождя...
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 49,
    text:
      `
        Костюм Дилана будто пропах самим Лондоном — от него также веяло свежестью и свободой. Немного отстранившись от мужчины, Маргарита против своей воли задержалась взглядом на мужской щетине.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 50,
    text:
      `
        — <i> Такой родной, но в то же время незнакомый.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    message: 'Ледяное сердце Маргариты может оттаять!',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 200,
    text:
      `
        —<i> Красивая... Сейчас ты так близко, но так далеко.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 51,
    text:
      `
        Умей они читать мысли друг друга, точно бы рассмеялись от такого совпадения...
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 52,
    text:
      `
        Смутившись своим мыслям, девушка первая разорвала зрительный и физический контакт. Их короткую идиллию, возникшую в столь неправильном и странном месте, нарушил голос полицейского.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 53,
    text:
      `
        Холодный металл приятно обжег кожу, мгновенно приводя в чувство. В голове Маргариты появились теплые, родные образы: вот она на кухне пьет чай вместе с сестрой, попутно рассказывая о планах на будущий год.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    music: require('../../../../Sounds/MM/Sad_Stress.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 54,
    text:
      `
        Вот она впервые приезжает в Лондон, восхищенно смотрит на просторы города, глаза слезятся от радости и новых, прежде невиданных ощущений.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 55,
    text:
      `
        Вот ее берут в детективный отдел, личная жизнь буквально крутиться вокруг работы, но ее это более чем устраивает. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 56,
    text:
      `
        Кажется, что не нужно ничего: семьи, любви, отношений, только дайте взамен одно – дела, расследования, преступления...
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 57,
    text:
      `
        Образы мысленно уходят, перед Марго предстает действительность в не самом приглядном свете. Тишину нарушает звонкий голос полицейского.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 58,
    text:
      `
        — Пятый, прием. Вызывай криминалистов. Адрес: северная часть городского парка на Мэтток Лэйн, рядом с кафе «У Полсон». Мы около театрального памятника. Как услышали, прием.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    music: require('../../../../Sounds/MM/Sad_Stress.mp3'),
    simple: require('../../../../Sounds/MM/Radio.mp3'),
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 59,
    text:
      `
        — Понял вас, ждем.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    speaker: 'Майк ',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 60,
    text:
      `
        Марго огляделась вокруг, на мгновении она забыла, что находится на месте возможного преступления. Быстро взяв себя в руки, она наконец оценила вид, который открылся ей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 61,
    text:
      `
        Возникло жуткое чувство. Полицейские вытаскивали тело мужчины из-под земли. Глядя на труп, Марго захотела сбежать из парка, неважно куда, важнее стало само желание не видеть разложившееся тело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 62,
    text:
      `
        Рука предполагаемого убитого свисала вниз, раскачиваясь в воздухе, а все вокруг словно пропиталось запахом смерти. В груди девушки разверзлась пропасть, которую, казалось, ничем нельзя было заполнить.
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 63,
    text:
      `
        — <i> Я ведь даже не знаю его, почему же реагирую так остро?
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 64,
    text:
      `
        Даже во время первых стажировок на должности детектива Марго ни разу не испытывала подобных эмоций. Она всегда стойко выносила встречи с изуродованными телами убитых, окровавленными трупами.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 65,
    text:
      `
        Держалась смело и уверенно при допросах безумных, жестоких убийц. Можно сказать, даже слегка равнодушно...
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 66,
    text:
      `
        Взгляд детектива упал на шею мужчины. Глубокий порез, остатки спекшейся крови вокруг. Глазами девушка вновь отыскала безжизненно посиневшую руку убитого, торчащие вены.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 67,
    text:
      `
        Стало нестерпимо больно, эта боль из моральной преобразилась в физическую: защемило где-то под ребрами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 68,
    text:
      `
        — <i> Кто ты? Почему тебя убили? Что почувствуют твои родные, узнав о потере?
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 69,
    text:
      `
        — <i> Почему я вообще думаю об этом?
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 70,
    text:
      `
        Тяжелый смрад окутал Маргариту, проникая под кожу, заполняя все пространство вокруг. К горлу как нельзя кстати подкатила тошнота, она резко прижала руку к губам и, отвернувшись, побежала к ближайшим кустам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 71,
    text:
      `
        — Что-то она сегодня впечатлительная. Впервые вижу ее такой. Беременная что ли?
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 72,
    text:
      `
        Дилан недовольно поморщился.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 73,
    text:
      `
        — Держал бы язык за зубами, Майк.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 74,
    text:
      `
        Напарник посмотрел вслед за детективом. Покачал головой, мысленно пытаясь хоть как-то поддержать девушку. Вновь задал себе немой вопрос, ответ на который совершенно не знал.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 75,
    text:
      `
        — <i> Что с тобой, Марго? Неужели это все из-за того письма?
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 76,
    text:
      `
        Через пару секунд после небольшой передышки детектив вернулась к команде. Лицо ее вновь стало бесстрастным, ничего не выражало минутной слабости. Голову девушки заполонили лишь бесконечные ругательства.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 77,
    text:
      `
        — <i> Черт, черт, черт... Потеряла контроль.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 78,
    text:
      `
        Казалось, она старательно скрывала проявленную ранее уязвимость, считая, что не имеет право проявлять подобные эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 79,
    text:
      `
        Майк отвел взгляд в сторону и решился ничего не комментировать. Дилан, стоявший рядом, лишь украдкой поглядывал на Марго.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 80,
    text:
      `
        Спустя несколько минут к парку подъехало 2 машины. Вокруг тела сновали десятки полицейских и криминалистов. Девушка подошла к Майку, в руках она вертела травинку, сорванную поблизости. Играясь с ней, тщательно старалась унять нервную дрожь в пальцах.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 81,
    text:
      `
        — Слушай, я ведь отдала тебе письмо. Ты его еще не читал?
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Маргарита ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 82,
    text:
      `
        — Прости, нет, не успел.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 83,
    text:
      `
        — Не страшно... Хотела сообщить, что на месте преступления есть моя сережка.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speaker: 'Маргарита ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 84,
    text:
      `
        Показав рукой на скопление людей, девушка продолжила.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 85,
    text:
      `
        — Вон, ее сейчас упаковывают. Я понятия не имею, как она здесь вообще могла оказаться. И нет ни малейшей зацепки, кто бы мог проникнуть в мою квартиру, знать обо мне личную информацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Маргарита ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 86,
    text:
      `
        — Я приду в участок для дачи показаний, могу хоть сейчас.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    speaker: 'Маргарита ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 87,
    text:
      `
        Майк стушевался, небрежно махнув рукой. Хоть и эта новость заметно удивила его, ответил он весьма спокойным образом.
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 88,
    text:
      `
        — Все в порядке, Марго. Лучше займись тем, что у тебя, итак, хорошо получается.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 89,
    text:
      `
        Легкий прищур, улыбка коснулась губ полицейского.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 90,
    text:
      `
        — Найди подонка-убийцу, восстанови справедливость. О показаниях не переживай.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 91,
    text:
      `
        — Просто на этой неделе постарайся написать отчет о деле, упомяни о письме, может вспомнишь какие-то странности, возможно слежку за тобой... Передай Артуру, он уже направит к нам.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 92,
    text:
      `
        На этот короткий миг Марго почувствовала облегчение. Выбросила из рук потрепанную травинку, восстановила дыхание. Про себя довольно отметила.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 93,
    text:
      `
        — <i> Ну хоть с этим не придется возиться...
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Маргарита ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 94,
    text:
      `
        — Держи, нам еще здесь целый день проводить.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    beforeBegin: whiteFlash,
    message: '11 часов утра. Кабинет рядом с допросной',
    music: require('../../../../Sounds/MM/Fast.mp3'),
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 95,
    text:
      `
        На стол мужчина аккуратно поставил кофе. Смотря прямо в экран компьютера и не отводя от монитора взгляд, Маргарита машинально произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 96,
    text:
      `
        — Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 97,
    text:
      `
        — Что успела найти?
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 98,
    text:
      `
        — Джонатан Браун, 33 года, не женат. Работает в банке, директором. Производит приятное впечатление, красив, богат.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 99,
    text:
      `
        — Я так понимаю, для женской аудитории?
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 100,
    text:
      `
        — Именно. Ему приписывают романы с дочерью мэра и губернатора... Впрочем, это желтая пресса, здесь можно написать что угодно.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 101,
    text:
      `
        — А из полезного для нас удалось что-нибудь найти?
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 102,
    text:
      `
        Медленно развернувшись к напарнику лицом, девушка исподлобья взглянула на Дилана.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 201,
    text:
      `
        — Обижаешь... Для нас примечательно то, что с отцом у них были явно прохладные отношения. У них почти нет совместных фотографий. А еще на момент убийства Джонатан был здесь, в Илинге.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 103,
    text:
      `
        — Работа?
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 104,
    text:
      `
        — Да, заключал контракт. Кстати, есть одна неточная информация, нужно с ней разобраться. Полгода назад Джонатан Браун был замечен в мошенничестве, в итоге дело дошло до суда. Но позже его замяли, отозвав иск.
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 105,
    text:
      `
        Дилан с явной усмешкой воскликнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 106,
    text:
      `
        — Это хорошо. Будем копать.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 107,
    text:
      `
        Детектив, скрестив руки у груди, пристально посмотрела на комнату для допросов. Поправила бейджик, откинула волосы на плечи, прикрыла глаза — одним словом собралась духом.
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 108,
    text:
      `
        — Ну что, начинаем? Нехорошо заставлять гостя ждать. Особенно такого занятого.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 109,
    text:
      `
        — По старой схеме, давай.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 110,
    text:
      `
        Мужчина пошел в допросную, прикрыв за собой дверь. Марго вновь уставилась на монитор, на котором было несколько кадров с камер наблюдения.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 111,
    text:
      `
        Надела наушники, и в этот же миг все внешнее перестало иметь значение. Перед глазами было только происходящее в комнате.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 203,
    text:
      `
        Ставшая для девушки абсолютно избитая рутина — будто бы становясь невольным третьим участником разговора, она принялась наблюдать.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 112,
    text:
      `
        — Добрый день, мистер Браун. Дилан Чейз, детективный отдел расследований Илинга.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    message: 'Допросная комната',
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 113,
    text:
      `
        Дилан пожал руку сидящему напротив мужчине. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 114,
    text:
      `
        Маргарита же начала оценивать подозреваемого: небрежные иссиня-черные волосы, острые скулы, щетина, зоркие глаза, прямой взгляд, крепкое телосложение, мощные руки... белая футболка.
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 115,
    text:
      `
        — <i> Мистер Браун, вы даже не пришли в официальном костюме. Так... а это что у нас?
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 116,
    text:
      `
        Девушка обратила внимание на татуировку, частично скрытую под тканью, но все же заметную.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 117,
    text:
      `
        — <i> Последствия бурной юности, акт неповиновения отцу, выражение свободы?
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 118,
    text:
      `
        Свои размышление ей пришлось отложить, тщательно сконцентрироваться на происходящем в комнате.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 119,
    text:
      `
        — В первую очередь, примите мои соболезнования. Вы уже успели опознать тело вашего отца, наверняка заметили порезы... 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 120,
    text:
      `
        Джонатан молчал, изучая пристальным взглядом своего собеседника. Дилан продолжил.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 121,
    text:
      `
        — Это убийство, в свою очередь хочу заверить, что мы работаем над делом и постараемся как можно скорее вычислить виновника преступления.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 122,
    text:
      `
        Джонатан пожал плечами.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 123,
    text:
      `
        — Мне сказать спасибо?
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 124,
    text:
      `
        Дилан открыто усмехнулся в ответ.
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 125,
    text:
      `
        — Не стоит, это наша работа. Мне необходимы сведения: где вы находились 14, 15 и 16 сентября. Желательно по часам и было бы весьма неплохо если есть кто-то, кто сможет подтвердить ваши слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 126,
    text:
      `
        — Забавно... Три часа назад я узнаю, что мой отец мертв, а после меня допрашивает юнец? Что, черт возьми, происходит? Меня в чем-то обвиняют, детектив?
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 127,
    text:
      `
        Глубокий вздох... На щеке Дилана начинает пульсировать вена, напарник Марго закатывает рукава пиджака. На лице от гнева играют желваки, он буквально прожигает взглядом Джонатана.
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 128,
    text:
      `
        Резким движением Дилан хватает Джонатана за край футболки, прижимает к себе. Злостное исступление, не терпящее выражение с большой примесью отвращения застывает на лице детектива — он не старается скрыть свои истинные эмоции, не избегает их.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 129,
    text:
      `
        — <i> Прекрасно, шоу начинается...
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 130,
    text:
      `
        — <i> Выглядит он так, будто наконец настиг бедную жертву и сейчас растерзает ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 131,
    text:
      `
        Детектив сплевывает на пол, откидывая от себя мужчину. Джонатан, на удивление, держится весьма спокойно и равнодушно.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 132,
    text:
      `
        — У меня есть полномочия держать тебя здесь хоть целые сутки, пока не соизволишь рассказать, где был все эти дни, сынок богатенького папаши.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 133,
    text:
      `
        Кажется, последняя уничижительная фраза, прозвучавшая Диланом, все же заставляет каменное лицо Джонатана впервые проявить хоть какие-то эмоции. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 134,
    text:
      `
        Верхняя губа вздрагивает от упоминания отца, будто этот факт является для него неприятным, омерзительным.
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 135,
    text:
      `
        Руки Джонатана сжимаются в кулаки.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 136,
    text:
      `
        — Не думай, что меня будет заботить то, что близкий тебе человек умер.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 137,
    text:
      `
        Еще пара секунд и мужчины бросятся друг на друга. Мысленно Маргарита быстро решает, что нужно сделать.
      `,
    buttons: [
      {
        text: 'Ворваться в кабинет',
        goTo: 138
      },
      {
        text: 'Вызвать подкрепление, чтобы разнять их',
        goTo: 147
      }],
    message: 'Сейчас у вас есть возможность получить важный стат — нить расследования. Данный стат отвечает за то, насколько успешно Маргарита будет проявлять себя в следствии. Высокий уровень нити расследования также скажется и на уважении окружающих людей.',
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 138,
    text:
      `
        — <i> Ну что ж, пришла моя очередь. А Дилан молодец, теперь мне будет проще успокоить Джонатана и втереться к нему в доверие.
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Investigation' }],
    achievement: { story: EStoriesEn.MM, name: 'DetectiveActress' },
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 139,
    text:
      `
        Дверь в допросную с шумом открывается. Марго, стоя на пороге, буравит взглядом своего напарника.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 140,
    text:
      `
        — Отставить, что здесь происходит? Дилан, дальше я сама.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 141,
    text:
      `
        Дилан идет к выходу, успевает кивнуть Марго и подмигнуть ей. Покидая комнату, он напоследок бросает неприязненный взгляд на подозреваемого.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 142,
    text:
      `
        — Приношу свои извинения за неподобающее поведение коллеги, это было проявлением некомпетентности с нашей стороны. Меня зовут Маргарита, я старший детектив.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 143,
    text:
      `
        — Я бы хотела, чтобы мы начали заново, чтобы наше общение прошло в приятной и комфортной для вас обстановке. Хотите воды, чаю, может быть кофе? 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 144,
    text:
      `
        Девушка улыбается и протягивает мужчине руку, которую он нехотя пожимает. Джонатан игнорирует вопрос Маргариты, вместо этого вальяжно откидывается на спинку стула и начинает громко аплодировать.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 145,
    text:
      `
        — Неплохо, весьма неплохо.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Jonathan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 146,
    text:
      `
        Марго подозрительно косится на мужчину, явно не понимая такой резкой смены настроения.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 147,
    text:
      `
        —  <i> Нужно сделать хоть что-то, пока они не устроили тут драку...
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Effect', id: 'Investigation' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 148,
    text:
      `
        Рука детектива находит телефон, быстрым движением девушка ищет номера своих коллег, но останавливается передумав.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 149,
    text:
      `
        — <i> Что я делаю? У нас же был план...
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 150,
    text:
      `
        Не успевает она сделать хоть одно действие, как из допросной выходит разъяренный Дилан.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 151,
    text:
      `
        — Какого хрена, Марго?
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: -1, category: 'Person', id: 'Dylan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 152,
    text:
      `
        — Прости, прости, растерялась.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 153,
    text:
      `
        — Беги к нему, быстрее. Нужно чтобы его злость не прошла...
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 154,
    text:
      `
        Маргарита успевает кивнуть, забегая в комнату к Джонатану.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 155,
    text:
      `
        —  Приношу свои извинения за неподобающее поведение коллеги, это было проявлением некомпетентности с нашей стороны. Меня зовут Маргарита, я старший детектив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 156,
    text:
      `
        Выровняв дыхание, слегка отдышавшись, продолжает свою речь.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 157,
    text:
      `
        — Я бы хотела, чтобы мы начали заново, чтобы наше общение прошло в приятной и комфортной для вас обстановке. Хотите воды, чаю, может быть кофе? 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 158,
    text:
      `
        Девушка улыбается и протягивает мужчине руку, которую он нехотя пожимает. Джонатан игнорирует вопрос Маргариты, вместо этого вальяжно откидывается на спинку стула и начинает громко аплодировать.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 159,
    text:
      `
        — Неплохо, весьма неплохо. Только вы опоздали, нужно было чуть раньше, Маргарита.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Jonathan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 160,
    text:
      `
        Марго подозрительно коситься на мужчину, явно не понимая такой резкой смены настроения и его последнего замечания.
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 161,
    text:
      `
        — О чем вы, мистер Браун?
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 162,
    text:
      `
        — Сценка, которую вы тут устроили. Хороший и плохой коп? Весьма недурно...
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    music: require('../../../../Sounds/MM/Jonathan.mp3'),
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 163,
    text:
      `
        — И много дурачков попадаются на подобную авантюру?
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 164,
    text:
      `
        Он обводит рукой помещение, палец останавливается направленным на девушку.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 165,
    text:
      `
        — А детектив ли вы вообще, мисс? Может это тоже часть спектакля?
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 166,
    text:
      `
        Маргарита переставляет стул ближе к Джонатану, садится в опасной близости от него. Приближается вперед, наклоняет голову, дыханием касаясь губ мужчины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 167,
    text:
      `
        Но в этом жесте нет и крупицы интимного, лишь холодная расчетливость Марго. Глаза напротив исследуют ее, впрочем, она сама дает ему на это время.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 168,
    text:
      `
        — Я буду судьей, присяжным, палачом, если хотите. Отвечайте на мои вопросы, мистер Браун, и будет нам всем счастье.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 169,
    text:
      `
        Ее голос становится серьезнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 170,
    text:
      `
        — Мне правда жаль, что вам приходится проходить через это... Вашего отца, Томаса Брауна убили предположительно 5 дней назад.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 171,
    text:
      `
        — Мы хотим сузить круг подозреваемых, поэтому прошу вас, расскажите, что делали в Илинге и где были в тех числах, о которых спрашивал ранее мой коллега.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 172,
    text:
      `
        Марго опускает руку на стул, чтобы отодвинуться от Джонатана, но он резким движением перехватывает ее, не давая девушке отступить.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 173,
    text:
      `
        — Нет, нет, нет... Вы же очень смелая, да Марго? Можно я буду вас называть подобным образом?
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 174,
    text:
      `
        Маргарита съеживается под взглядом Джонатана. Теперь ей с ужасом начинает казаться, будто он способен заглядывать в самую душу.
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 175,
    text:
      `
        — Мне бы этого не хотелось. Так меня называют лишь близкие люди.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 176,
    text:
      `
        — Что ж, ваше право... Я отвечу на эти вопросы, дорогой детектив. Только сперва мне хотелось бы прояснить важную деталь...
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 177,
    text:
      `
        — Как с убийством моего отца связаны вы?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('MM', 'Глава 1', 'Часть 2', '0')
        }
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    achievement: { story: EStoriesEn.MM, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  }
])
