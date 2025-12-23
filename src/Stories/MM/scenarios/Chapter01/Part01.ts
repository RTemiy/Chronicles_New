import { saveEndProgress, scenarioManager, statsManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.MM, chapterName: 'Глава 1', partName: 'Часть 1', code: '1' }, [
  {
    id: 0,
    text:
      `
        — …должна была просмотреть все важные бумаги, ценные вещи, удостоверения. Далее — вызвать полицию.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 1,
    text:
      `
        Голос Маргариты звучал ровно, пока мысленно она громко и страшно ругала себя за ночную несдержанность и поспешность.
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
        <i>«Что за беспечность? Почему именно в этой ситуации я позволила нервам взять верх над собственной компетенцией?»
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Маргарита ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 3,
    text:
      `
        — Молодец, за теорию высший балл. Касаемо практики… Очень плохо, <i>старший</i> детектив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    speaker: 'Артур Нильсен ',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Arthur' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 500,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'CallBoss' }) >= 1
        },
        goTo: 501
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'CallBoss' }) < 1
        },
        goTo: 6
      }],
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 501,
    text:
      `
        — Я видел ночной пропущенный от тебя. Хотя бы хватило ума поделиться произошедшим со мной…
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Артур Нильсен ',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 4,
    text:
      `
        На лице сквозь слои осуждения пробилось лёгкое одобрение, и Маргарита позволила себе на секунду расслабиться. Впрочем, прекращать отчитывать начальник не собирался.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 5,
    text:
      `
        — Жаль, что этот проблеск адекватной оценки ситуации потерялся по пути к дому Чейза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    message: 'Начальство оценило твои порывы. Попытаться стоило.',
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 6,
    text:
      `
        — Мне жуть интересно, кому из Вас двоих в голову пришла эта <i>гениальная мысль</i> — отправиться в парк с лопатами наперевес. Кладмены недоделанные.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 7,
    text:
      `
        Артур не ждал ответа на свой вопрос — отчёт о произошедшем уже лежал у него на столе.
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 8,
    text:
      `
        Этими словами он скорее намеренно втаптывал в грязь профессиональное эго своей подчинённой. 
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
        — Что за истеричная вылазка? У тебя нет прав на ошибки! 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 10,
    text:
      `
        Тон начальника звучал холодно, строго. Осуждающе. <i>Отрезвляюще.
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
        <i>«Чёрт, Нильсен прав. Это  <b>полный</b> провал…»
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
        Артур открыл нижний ящик стола и нервно скинул в него пачку бумаг. Быстро перебрав несколько толстых папок, достал из стопки одну и швырнул перед Маргаритой.
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
        — Пройдёшь проф переподготовку. В конце месяца подтвердишь лично мне физ- и псих-квалификацию. Первую тренировку ставлю на завтра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 14,
    text:
      `
        Смерив меня внимательным, жёстким взглядом, Нильсен кивнул сам себе и добавил бескомпромиссно:
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
        — Позже свяжусь с терапевтом, пусть назначит парочку сессий. Параллельно с работой.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 16,
    text:
      `
        — Есть, сэр. Могу идти?
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 17,
    text:
      `
        Взгляд мужчины вновь скользнул по подчинённой. Помолчав с минуту, Артур нехотя процедил:
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 18,
    text:
      `
        — Свободна.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 19,
    text:
      `
        Поднимаясь из-за стола, Маргарита опустила глаза на оставшиеся листы из той стопки, которую Артур поспешно забрасывал в нижний ящик минутами ранее.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 20,
    text:
      `
        Сама толком не разбирая причины, девушка напряглась. Отдалённо знакомый, размашистый почерк всколыхнул что-то внутри. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 21,
    text:
      `
        Буквы, схожие с теми, что…
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 22,
    text:
      `
        <i>«Были в проклятой записке?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 23,
    text:
      `
        Проморгавшись, детектив едва заметно склонила голову, силясь разглядеть написанное получше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 24,
    text:
      `
        Благо, Артур в этот момент увлечённо набирал сообщение в телефоне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 25,
    text:
      `
        <i>«Фух, нет, не оно — наклон и размер букв отличаются. Но почерк такой знакомый…»
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 26,
    text:
      `
        Маргарита, нехотя отпрянув от рабочего стола Нильсена, задумчиво прикусила губу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 27,
    text:
      `
        <i>«Кажется, это почерк Дилана.»
      `,
    buttons: [
      {
        text: '',
        goTo: 520
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 520,
    text:
      `
        <i>«И, чёрт возьми, в этом нет ничего сверхъестественного — он ведь тут тоже работает!»
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 28,
    text:
      `
        <i>«А я, если начну подозревать всех вокруг, точно до старости не доживу — невроз сожрёт сильно раньше».
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 29,
    text:
      `
        Усмехнувшись одними губами, Маргарита решила обсудить с Артуром ещё одну тему, пока оставалась такая возможность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 30,
    text:
      `
        Лучше закрывать вопросы на берегу, а не ждать, когда начальник ознакомится со всеми бумагами и придёт за ответами сам.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 31,
    text:
      `
        Детектив прочистила горло, ненавязчиво объявляя: я всё ещё здесь. Обратилась к Артуру:
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 32,
    text:
      `
        — У нас есть…
      `,
    buttons: [
      {
        text: 'Подозреваемый',
        goTo: 37
      },
      {
        text: 'Потерпевший',
        goTo: 34
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 34,
    text:
      `
        <i>«Полагаю, крайне неэтично называть подозреваемым того, кто даже тело отца опознать не успел». 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Маргарита',
    stats: [{ story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Instinct' }],
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 35,
    text:
      `
        <i>«И я в лицо не видела этого человека, так что…» 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 37,
    text:
      `
        <i>«Учитывая информацию, которую удалось собрать о сыне убитого, и его странные передвижения между Илингом и Белгравием…»
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Маргарита',
    stats: [{ story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Analyse' }],
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 38,
    text:
      `
        <i>«Пока он остаётся единственным подозреваемым, и я имею право называть вещи своими именами. Вполне профессионально». 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 39,
    text:
      `
        — Сын убитого — Джонатан Браун. В личном досье всё весьма складно: даже штрафов неоплаченных нет. Порядочный человек, но… 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 40,
    text:
      `
        Детектив на секунду запнулась, подбирая слова, и Артур тут же шагнул к девушке ближе, испытывая одним своим яростным взглядом: но — что?
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 41,
    text:
      `
        — Вопрос вызывает поведение. Полное отсутствие принятия каких-либо мер: у нас на руках распечатка всех его звонков за последний месяц. 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 42,
    text:
      `
        — Джонатан не звонил ни лично отцу, ни в полицию. Никуда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 43,
    text:
      `
        — Мне кажется странным тот факт, что пока Томас разлагался в земле неделю, его никто не искал.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 44,
    text:
      `
        — Разумеется, я не стану отрицать факт наличия сложностей во взаимоотношениях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 45,
    text:
      `
        — Тут нужно будет тщательно изучить все варианты, обдумать мотив… Начну по классике — с алиби. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 46,
    text:
      `
        Начальник медленно потянулся к карману серого пиджака. 
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 47,
    text:
      `
        Вытащив сигареты, прошёл к окну. Закурил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 48,
    text:
      `
        В кабинете снова повисла тревожная тишина.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 49,
    text:
      `
        <i>«Чёрт, никогда не могла разобрать, что у Артура в голове. Всегда одно и то же выражение лица».
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 50,
    text:
      `
        Наконец, Артур нарушил молчание.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 51,
    text:
      `
        — Работай, Маргарита. Сообщай о каждом последующем шаге. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 52,
    text:
      `
        — Дело мутное, чувствую, провозимся мы с ним долго.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 53,
    text:
      `
        Молча кивнув, детектив поспешила покинуть затянутый табачным дымом кабинет Артура. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 54,
    text:
      `
        Прислонившись к холодной двери лопатками, Маргарита глубоко вздохнула, потирая глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    ambient: require('.././../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Corridor.jpg')
  },

  {
    id: 55,
    text:
      `
        Ночь, проведённая в парке, давала о себе знать — мысли путались, тело слегка ломило. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Corridor.jpg')
  },

  {
    id: 56,
    text:
      `
        <i>«Не смей расслабляться. Потом отоспишься, время работать!»
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Corridor.jpg')
  },

  {
    id: 57,
    text:
      `
        Переведя дыхание, девушка направилась к себе в кабинет. Следовало многое обдумать.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Corridor.jpg')
  },

  {
    id: 58,
    text:
      `
        Выбежав на улицу, Маргарита подняла лицо к небу — ливня не было, но неприятная морось нервировала, создавая дополнительный дискомфорт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    message: '12 часов назад…',
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 59,
    text:
      `
        На линии уже висел Дилан. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 60,
    text:
      `
        — Что за записка? Пришли фото.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 61,
    text:
      `
        — Я уже выезжаю к тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 62,
    text:
      `
        Направляясь к машине, Маргарита почти физически ощущала, как карман форменного жакета под чёрным пальто прожигает злосчастный кусок бумаги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 63,
    text:
      `
        — Что? Марго, погоди! По регламенту надо бы…
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 64,
    text:
      `
        — Чейз, я прекрасно знаю, что должна делать <i>по регламенту.</i> Но ты не в курсе о содержимом этой клятой бумажки! Откровенная провокация!
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 65,
    text:
      `
        — Взяла с собой?
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 66,
    text:
      `
        В голове девушки как по заказу всплыли слова, выведенные небрежным почерком. 
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 67,
    text:
      `
        Её приговор: <i>«не доверяй никому».
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 68,
    text:
      `
        Сглотнув, детектив ответила ровным голосом:
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 69,
    text:
      `
        — Нет. Не стала лапать слишком сильно, отдам позже на дактилоскопию. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    message: 'Дактилоскопия — метод идентификации человека по отпечаткам пальцев.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/House_Dark_Street.jpg')
  },

  {
    id: 70,
    text:
      `
        Описывая детали дальнейших действий, Маргарита выехала с парковки на проезжую часть.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    ambient: require('../../../../Sounds/MM/Engine.mp3'),
    music: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 71,
    text:
      `
        — Нильсен голову тебе оторвёт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 72,
    text:
      `
        — Ты выходишь? Я в двух кварталах от тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 73,
    text:
      `
        — Если позволишь, оденусь. Погода не располагает к прогулке в трусах.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 74,
    text:
      `
        Маргарита усмехнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 75,
    text:
      `
        Подобный формат общения с Диланом — лёгкий, непринуждённый, всегда разряжал её, успокаивал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 76,
    text:
      `
        Это работало практически без исключений — будь то перестрелка в самом разгаре, вирус с повышенной температурой или разминирование тц. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 77,
    text:
      `
        Дилан <i>всегда</i> разбавлял тревогу собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 78,
    text:
      `
        — Дилан…
      `,
    buttons: [
      {
        text: 'Ты лучший',
        goTo: 79
      },
      {
        text: 'Давай шустрее',
        goTo: 88
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 79,
    text:
      `
        Дилан, отложив телефон с громкой связью на тумбочку, одевался.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Choice', id: 'UATB' }],
    music: require('../../../../Sounds/MM/Romantic.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 81,
    text:
      `
        Заслышав реплику, замер с натянутым на одно плечо рукавом водолазки.
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 82,
    text:
      `
        Голос Маргариты прозвучал мягко и искренне, и в нём проскользнуло неприкрытое откровение. Если бы не ситуация…
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 83,
    text:
      `
        Впрочем, сердце мужчины всё-равно ускорило ритм, споткнувшись о женскую нежность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 84,
    text:
      `
        — Вспомни свои слова, когда в следующий раз будешь на меня орать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 85,
    text:
      `
        Не сообразив сразу, как реагировать, Дилан прибегнул к привычному способу — отшутиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    message: 'Дилан смущён. Этого добивалась?',
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Dylan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 86,
    text:
      `
        Маргарита закатила глаза на слова напарника и поторопила:
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 87,
    text:
      `
        — Давай шустрее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Cringe.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 88,
    text:
      `
        — Выхожу через две минуты. Ты уже подъехала?
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    darkSilhouette: true,
    music: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 89,
    text:
      `
        — Жду на парковке за домом.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 90,
    text:
      `
        Напарник вышел спустя пару минут. Машина сорвалась с места, едва дверца со стороны пассажира захлопнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 91,
    text:
      `
        Пока ждала Дилана, Маргарита успела созвониться со старым знакомым — сотрудником местного полицейского участка по имени Майк.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 92,
    text:
      `
        С его участком напрямую сотрудничало их детективное бюро, и именно Артур Нильсен и Маргарита в частности нередко оказывали содействие местной полиции.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 93,
    text:
      `
        Без особого восторга коп пообещал в течение часа подъехать к месту, о котором условились. Оставалось ждать.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 94,
    text:
      `
        <i>«Чёртов Майк. Я столько неподотчётных зацепок давала их следаку из личных источников. Рисковала карьерой ради чужих премиальных…»
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 95,
    text:
      `
        <i>«Прознай Нильсен о бескорыстной помощи, выпер бы тут же. Полагаю, аргумент: самой лень браться за мелкую ерунду — не проканал бы».
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 96,
    text:
      `
        Маргарита убивала себя на работе не столько за деньги. По большому счёту ею двигал азарт, а надбавка к окладу за безупречно раскрытое дело оставалась приятным бонусом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 97,
    text:
      `
        Делегировать мелочь на полицейских девушка принялась буквально с начала карьеры, тем самым выгрызая себе возможность сосредоточиться на чём-то глобальном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 98,
    text:
      `
        Великолепно хитрила.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 99,
    text:
      `
        Благодаря пробивному характеру и гибкому интеллекту, Маргарита шустро взобралась по карьерной лестнице вверх.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 100,
    text:
      `
        Местным правоохранителям она запомнилась как профи «по особо безнадёжным делам».
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 101,
    text:
      `
        <i>«Вот тебе ещё одно безнадёжное дело. Давай, раскрывай. Хищница, твою мать».
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 102,
    text:
      `
        Маргарита закусила щёку, бросив нервный взгляд в зеркало заднего вида.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 103,
    text:
      `
        Заметив издалека мелькнувший свет фар, детективы переглянулись и синхронно покинули тёплый салон иномарки, ныряя в темноту мрачного парка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Car_Room.jpg')
  },

  {
    id: 104,
    text:
      `
        Холодный ветер агрессивно трепал волосы, потоками заползая за шиворот, и кусал разгорячённую кожу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    ambient: require('../../../../Sounds/MM/Leaves_Wind.mp3'),
    simple: require('../../../../Sounds/MM/Close_Door_Car.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 105,
    text:
      `
        Маргарита недовольно поёжилась, обхватив себя за плечи руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 106,
    text:
      `
        <i>«Чёрт бы меня побрал за самодеятельность. Нильсен ногами кверху подвесит наутро. И Дилана за компанию…»
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 107,
    text:
      `
        Прикусив губу, детектив бросила взгляд на напарника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 108,
    text:
      `
        Дилан неизменно следовал за ней по пятам, и от безоговорочной преданности мужчины в груди потеплело.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 109,
    text:
      `
        Наконец, показались копы — Майк со своим молодым напарником, недавно вступившим на службу.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 110,
    text:
      `
        Являясь зачинщиком «мероприятия», Маргарита жестом велела притормозить, окидывая местность внимательным, цепким взглядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 111,
    text:
      `
        Освещения от неподалёку стоящего фонаря едва хватало, чтобы подсветить широкий, массивный дуб.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 112,
    text:
      `
        Парк был крайне скудно обустроен — ничего грандиозного: лишь тропинки для бегунов и собачников, парочка фонарей вдоль всего маршрута да деревья с кустами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 113,
    text:
      `
        А, ну ещё фонтан, который заполнял водой разве что дождь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 114,
    text:
      `
        Маргарита не раз бродила ночами Бог знает где, выискивая что-то или кого-то, но сегодня всё ощущалось иначе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 115,
    text:
      `
        Напряжение витало в прохладном воздухе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 116,
    text:
      `
        Иллюзия опасности давила на плечи, вынуждая пальцы сжимать рукоять пистолета до дрожи в запястье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 117,
    text:
      `
        Это дело поглотило Марго целиком и полностью, лишив возможности увильнуть, едва записка попала к ней за порог.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 118,
    text:
      `
        <i>«Вдруг это чья-то глупая шутка? Попытка меня встрясти, отвлечь, разрядить. Например…»
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 119,
    text:
      `
        Детектив бросила быстрый взгляд на Дилана. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 120,
    text:
      `
        Мужчина вопросительно вскинул бровь, не теряя концентрации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 121,
    text:
      `
        — Чего смотришь как на призрака? Что дальше-то делаем?
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 122,
    text:
      `
        Маргарита неслышно выдохнула. Мысли потекли в другом направлении. 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 123,
    text:
      `
        <i>«Может ли это быть ловушкой? Вполне…»
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 124,
    text:
      `
        Движения детектива стали осторожнее, взгляд — острее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 125,
    text:
      `
        Вряд ли преступник ждал их на месте встречи. Вряд ли вообще где-то было мёртвое тело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 126,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Analyse' }) > statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Instinct' })
        },
        goTo: 127
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Instinct' }) > statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Analyse' })
        },
        goTo: 129
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Instinct' }) === statsManager.get({ story: EStoriesEn.MM, category: 'Effect', id: 'Analyse' })
        },
        goTo: 130
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 127,
    text:
      `
        <i>«Но я должна всё проверить. Маловероятно, что кто-то рискнёт так тупо шутить. Не со мной».
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    message: 'Ваши прошлые выборы повлияли на сюжет — Маргарита ведёт расследование путём анализирования фактов.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 128,
    text:
      `
        <i>«Все знают, что я так просто им это с рук не спущу. Не поленюсь отыскать шутника».
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 129,
    text:
      `
        <i>«Но необходимо всё хорошенько проверить. Плохое предчувствие не отпускает меня…»
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Маргарита',
    message: 'Ваши прошлые выборы повлияли на сюжет — Маргарита ведёт расследование, опираясь на собственную Интуицию. ',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 130,
    text:
      `
        <i>«Но любой детектив, будь он на моём месте, проверил бы… Пускать всё на самотёк — преступление». 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Маргарита',
    message: 'Ваши прошлые выборы повлияли на сюжет — Маргарита расследует дело, тщательно анализируя каждую мелочь и прислушиваясь к себе.',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 131,
    text:
      `
        — Твою ж…!
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 132,
    text:
      `
        Маргарита замерла, выставив руку с глоком перед собой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    music: require('../../../../Sounds/MM/Saw.mp3'),
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 133,
    text:
      `
        Дилан моментально прижался к девушке, страхуя её со спины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 134,
    text:
      `
        Не обнаружив источник опасности, медленно развернулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 135,
    text:
      `
        Подошедшие копы переглянулись между собой.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 136,
    text:
      `
        Взгляды упали на пугающе странный объект.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 137,
    text:
      `
        Прямо под деревом компания рассмотрела воткнутый в землю могильный крест. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 138,
    text:
      `
        <i>«Самодельный… просто сучки перевязали верёвкой».
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Objects/Wooden_Cross.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 139,
    text:
      `
        <i>«Чёрт, неужели ты правда здесь, Томас Браун?»
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Objects/Wooden_Cross.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 140,
    text:
      `
        Устало массируя переносицу, Маргарита повернулась к мужчинам.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 141,
    text:
      `
        — Майк, вызывай своих. С вероятностью в девяносто процентов тут лежит жмур. 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    message: 'Жмур в полицейском жаргоне — труп, мертвец.',
    ambient: require('../../../../Sounds/MM/Leaves_Wind.mp3'),
    speaker: 'Маргарита',
    music: require('../../../../Sounds/MM/Saw.mp3'),
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 142,
    text:
      `
        Лицо Майка на мгновение вытянулось от изумления, но мужчина быстро взял себя в руки и устало выдохнул:
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 143,
    text:
      `
        — Детектив, какого..? Ты не предупреждала, что мы едем искать чью-то могилу!
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Майк',
    stats: [{ story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Mike' }],
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 144,
    text:
      `
        — Полагал, я тебя ночью в парк тащу нефть качать? Или воздухом подышать?
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Cringe.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 145,
    text:
      `
        Девушка понизила тон, верхняя губа её недовольно дёрнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 146,
    text:
      `
        — Какие-то проблемы? Разве это не часть твоей работы? 
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 147,
    text:
      `
        — Или успел забыть о моей помощи? 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 148,
    text:
      `
        Маргарита ударила не только словами — взглядом, лишив мужчину возможности продолжить спор.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 149,
    text:
      `
        — Пятый, приём. Вызывай криминалистов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    speaker: 'Майк',
    simple: require('../../../../Sounds/MM/Radio.mp3'),
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 150,
    text:
      `
        — Адрес: северная часть городского парка на Мэтток Лэйн, рядом с кафе «У Полсон». Мы на второстепенной дороге возле театрального памятника, позади нас фонтан. 
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: 'Майк',
    simple: require('../../../../Sounds/MM/Radio.mp3'),
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 151,
    text:
      `
        — Как услышали, приём.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Майк ',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 152,
    text:
      `
        — Понял, ждем.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Майк ',
    simple: require('../../../../Sounds/MM/Radio.mp3'),
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 153,
    text:
      `
        Дилан обратил внимание на нервозность своей напарницы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 154,
    text:
      `
        Копы отошли к машине в ожидании подкрепления, Чейз приблизился к девушке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 155,
    text:
      `
        — Ситуация — дрянь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 156,
    text:
      `
        — Чего ты ждал, выезжая посреди ночи в парк по моей просьбе?
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Cringe.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 157,
    text:
      `
        Дилан невесело усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 158,
    text:
      `
        <i>«Колючка. Всегда кусаешься, когда нервничаешь».
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 159,
    text:
      `
        Мужчина положил ладонь на плечо Маргариты. Мягко погладил его, заглядывая в ядовитые, злые глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 160,
    text:
      `
        — Выдохни. Сейчас всё решим. Я рядом, слышишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 161,
    text:
      `
        И Маргарита решила…
      `,
    buttons: [
      {
        text: 'прильнуть к Дилану',
        goTo: 162,
        gift: true
      },
      {
        text: 'улыбнуться',
        goTo: 186
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 162,
    text:
      `
        Сделав маленький шаг, приблизилась к Дилану, пряча лицо на широкой мужской груди. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Choice', id: 'LeanOnDylan' }],
    music: require('../../../../Sounds/MM/Romantic.mp3'),
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 163,
    text:
      `
        Дилан, поначалу слегка растерявшись, стоял, не опуская руки с плеча Маргариты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 164,
    text:
      `
        Это был их первый подобный контакт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 165,
    text:
      `
        Хоть они и были близки. Относительно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 166,
    text:
      `
        Дилан мог свободно закинуть руку ей на плечо, в шутку растрепать волосы или схватить за руку, помогая уносить ноги во время очередного задания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 167,
    text:
      `
        Но обнимать вот так — в тишине мрачного леса, у безымянной могилы… 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 168,
    text:
      `
        Это казалось до жути интимным, переломным моментом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 169,
    text:
      `
        Будто после этой ночи — и подобной поддержки — их отношения больше не останутся на прежнем уровне. Так ощущали оба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 170,
    text:
      `
        И, быть может, они были правы?
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 171,
    text:
      `
        Дилан мягко обвил хрупкую спину, укрывая Маргариту в крепких объятиях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 172,
    text:
      `
        Детектив позволила себе прижаться щекой к мужской груди, ощущая даже сквозь плотную ткань водолазки, как горит его кожа. 
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 173,
    text:
      `
        И как колотится его сердце. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 174,
    text:
      `
        <i>«Спасибо, что рядом. Мне это важно».
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 175,
    text:
      `
        Прикрыв глаза, Маргарита позволила себе раствориться в моменте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 176,
    text:
      `
        Ощутить такое недоступное и оттого желанное чувство — близость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 177,
    text:
      `
        Или отсутствие одиночества? 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 178,
    text:
      `
        Пока сердце Дилана колотилось под женской щекой, Маргарита, напротив, успокаивалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 179,
    text:
      `
        Мысли становились яснее, а в поведение возвращалась присущая девушке рациональность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 180,
    text:
      `
        Заслышав шум со стороны, детектив мягко прервала объятия, прошептав напарнику: 
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 181,
    text:
      `
        — Ты лучший.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    message: 'Кажется, ледяное сердце Маргариты начало потихоньку оттаивать.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Smile.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 182,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'UATB' }) >= 1
        },
        goTo: 510
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.MM, category: 'Choice', id: 'UATB' }) < 1
        },
        goTo: 194
      }],
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 510,
    text:
      `
        — Ещё раз? 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 183,
    text:
      `
        — Осторожнее, детектив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 184,
    text:
      `
        Мужчина хитро прищурился, сдерживая улыбку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 185,
    text:
      `
        — Я могу и привыкнуть. И перестать слушаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    message: 'Дилану с трудом удаётся держать дистанцию.',
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat_Flirt.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Dylan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 186,
    text:
      `
        — Спасибо, Дилан. Что бы я без тебя делала? 
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Smile.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 187,
    text:
      `
        — Ой, даже боюсь представить. Не спрашивай меня о таком! 
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 188,
    text:
      `
        Фыркнув, детектив закатила глаза. Поинтересовалась, не скрывая иронии в голосе:
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 189,
    text:
      `
        — Хочешь сказать, я безответственная? 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Cringe.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 190,
    text:
      `
        — Скорее, мошенница. 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 191,
    text:
      `
        — Нам по правилам нельзя здесь находиться без понятых, начальника местного полицейского участка и разрешения Нильсена, но, увы…
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 192,
    text:
      `
        Дилан вдруг раздосадованно поморщился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 193,
    text:
      `
        — Чёрт, и я ж повёлся на твои уговоры. Вопрос, конечно, кто из нас безответственный… Манипуляторша мелкая! 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 194,
    text:
      `
        Маргарита тихо усмехнулась, переводя взгляд на прибывших копов.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    ambient: require('../../../../Sounds/MM/Leaves_Wind.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 195,
    text:
      `
        Майк в компании своего напарника и приехавших по вызову криминалистов разбрелись по периметру, занявшись оцеплением предполагаемого места преступления.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 196,
    text:
      `
        К Маргарите и Дилану подошёл управляющий местным полицейским участком — мужчина по имени Роджерс.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 197,
    text:
      `
        — Ночи, коллеги. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 198,
    text:
      `
        Маргарита поздоровалась с главным инспектором, переходя сразу к делу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 199,
    text:
      `
        Роджерс отдал подчинённым короткий приказ — копать. Неподалёку от дерева, облокотившись на бортик фонтана, стоял незнакомец. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 200,
    text:
      `
        Копы шустро нашли подходящего человека, которого привлекли в качестве понятого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 201,
    text:
      `
        До выяснения обстоятельств Роджерс не спешил вызывать судмедэксперта, но, заслышав со стороны дерева от криминалиста громкое: «есть!», мистер Марпл отошёл за ленту, попутно хватаясь за телефон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 202,
    text:
      `
        Томясь в ожидании, Маргарита не переставала мерить шагами оцеплённый периметр, изучая влажную почву между памятником и единственно огромным поблизости дубом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 203,
    text:
      `
        Рядом с травой что-то ярко блеснуло. Фонарик в руках зацепился за мелкий предмет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 204,
    text:
      `
        Дилан тут же полез в карман куртки, вытаскивая оттуда пару латексных перчаток. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 205,
    text:
      `
        Бросил на коллегу полный нервного ожидания взгляд.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 206,
    text:
      `
        — Умоляю, скажи, что это не то, о чём я думаю.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 207,
    text:
      `
        Натянув перчатки, мужчина нагнулся за находкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    message: 'Новая улика добавлена в инвентарь.',
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Item', id: 'Earring' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 208,
    text:
      `
        Маргарита, сцепив зубы, покосилась на маленький, серебристый предмет в раскрытой ладони напарника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 209,
    text:
      `
        Глядела волком, будто серёжка — убийца, и не бизнесмена, а её карьеры. Совести. Репутации. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 210,
    text:
      `
        — Погано. 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 211,
    text:
      `
        Одно-единственное слово сквозь зубы. Дилан, прищурившись, покрутил серьгу между указательным и большим пальцами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 212,
    text:
      `
        — Странно.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 213,
    text:
      `
        — Что именно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 214,
    text:
      `
        — Застёжка цела. Не сломана — просто расстёгнута. Как она умудрилась сама расстегнуться?
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 215,
    text:
      `
        Девушка нервно улыбнулась, почесав бровь. Задумалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 216,
    text:
      `
        <i>«Замок ведь и правда надёжный. За все десять лет, что их ношу, ни разу не падали. Но как тогда…?»
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 217,
    text:
      `
        По спине пробежал холодок. Голова заработала, активно выстраивая логическую цепочку.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 218,
    text:
      `
        И то, в каком направлении плыли мысли, крайне напрягло детектива. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 219,
    text:
      `
        <i>«Минувшая неделя пролетела как в перемотке, и дома я себя совершенно не помню. Когда читала в последний раз? А когда ужинала?»
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 220,
    text:
      `
        <i>«Всё, на что меня хватало — это улечься в постель, иногда прямо в форме. Что, если…?»
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 221,
    text:
      `
        Могла ли она забыть задвинуть засов? Уснуть, не заперев дверь? Как-то ведь попала к ней в дом эта чёртова записка! 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 222,
    text:
      `
        Что мешало неизвестному, проникнув в квартиру, войти в её спальню, стащить серьгу и бросить на месте преступления? 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 223,
    text:
      `
        Таким образом привязать Маргариту к делу, лишив возможности передать его в другие руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 224,
    text:
      `
        Вот только зачем и кому всё это нужно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 225,
    text:
      `
        Маргарита прошипела ругательство, меряя землю шагами. Ботинки противно скользили по влажной почве, но девушка не обращала на это внимания. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 226,
    text:
      `
        Со стороны она напоминала загнанного в клетку обозлённого льва. 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 227,
    text:
      `
        — Марго…
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat_Sad.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 228,
    text:
      `
        Негромкий голос напарника вытянул из размышлений, и детектив подняла голову, встречая внимательный, сочувствующий взгляд карих глаз.
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 229,
    text:
      `
        — Нам нужно передать улику на экспертизу.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 230,
    text:
      `
        Маргарита поспешила взять себя в руки. Выдохнув, ответила ровным голосом: 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 231,
    text:
      `
        — Верно. Пошли посмотрим, что там у них. Больно долго возятся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 232,
    text:
      `
        Детективы направились к группе криминалистов, которые, побросав лопаты, негромко общались в сторонке, ожидая прибытия труповозки и судмедэксперта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 233,
    text:
      `
        Перекинувшись с коллегами парой фраз, Маргарита кивком головы подозвала Роджерса. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 234,
    text:
      `
        — Детектив. 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 235,
    text:
      `
        — Инспектор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 236,
    text:
      `
        Девушка протянула Роджерсу упакованную в прозрачный пакетик серьгу. Дилан стоял неподалёку, вслушиваясь в разговор.
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 237,
    text:
      `
        — Полагаю, улика? 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 238,
    text:
      `
        — Именно, сэр. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 240,
    text:
      `
        Дело в том, что…
      `,
    buttons: [
      {
        text: 'Это моё',
        goTo: 241
      },
      {
        text: 'Нашли под деревом',
        goTo: 268
      }],
    message: 'Отношение персонажей к главной героине зависит в том числе от репутации. Высокая — способствует карьерному росту и установлению связей. Низкая — усложняет путь.',
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 241,
    text:
      `
        Брови инспектора взметнулись вверх.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 242,
    text:
      `
        — Поясните? 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 243,
    text:
      `
        Тяжело вздохнув, Маргарита поспешила раскрыть оставшиеся подробности произошедшего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 244,
    text:
      `
        — В записке также был упомянут этот момент. Что на месте преступления я должна буду отыскать серьгу…
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 245,
    text:
      `
        Девушка поделилась своими мыслями касательно проникновения в квартиру и возможной кражи личных вещей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 246,
    text:
      `
        Роджерс поспешил уточнить:
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 247,
    text:
      `
        — Кроме серьги что-то ещё пропало? 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 248,
    text:
      `
        Поджав губы, Маргарита честно призналась: 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 249,
    text:
      `
        — Я не всё успела проверить. Но деньги и документы в порядке. Замок на двери не взломан.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 250,
    text:
      `
        Марпл задумчиво выдохнул, глядя куда-то в сторону.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 251,
    text:
      `
        — Понять не могу, почему Вы оставили записку дома? Это прямая улика! 
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 252,
    text:
      `
        — Прошу прощения, сэр. Утром лично отдам мистеру Нильсену. Не взяла, побоявшись стереть возможные отпечатки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 253,
    text:
      `
        — Сначала хотелось проверить достоверность информации. Вдруг на месте оказалось бы пусто? 
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 254,
    text:
      `
        — Тогда сдала бы в частную лабораторию лично, чтобы выловить юмориста. Не хотелось всё пускать на самотёк…
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 255,
    text:
      `
        Инспектор был хорошо наслышан об этой «акуле расследований». Знал, что Маргарита не раз оказывала содействие ребятам из его участка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 256,
    text:
      `
        Роджерс уважал девушку, и ему вдруг стало по-человечески её жаль. 
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 257,
    text:
      `
        По загадочным обстоятельствам, личная вещь Маргариты, да ещё такая неоднозначная, оказалась на месте преступления. 
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 258,
    text:
      `
        Это серьёзный удар по репутации детектива. 
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 259,
    text:
      `
        Мужчина, понизив тон, заговорил. Голос его обрёл доверительные нотки:
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 260,
    text:
      `
        — Я знаю, каково это — быть под прицелом. Чем выше звание — тем крепче должна быть броня. Ножи в спину летят не только от тех, кого ты сажаешь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 261,
    text:
      `
        — Твои коллеги… не всегда желают тебе добра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 262,
    text:
      `
        — Разберитесь с этим как можно скорее. Уверен, Артур окажет всевозможное содействие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 263,
    text:
      `
        Коснувшись плеча девушки, Роджерс мягко произнёс:
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 264,
    text:
      `
        — И, Маргарита… благодарю за оперативную честность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 265,
    text:
      `
        — Это поможет быстрее составить рапорт и отправить всю необходимую информацию в ваше бюро уже утром.
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    message: 'Твоя честность ещё сыграет свою роль в расследовании.',
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Reputation' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 266,
    text:
      `
        — Уверен, всё закончится наилучшим для Вас образом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    speaker: 'Роджерс',
    imageFront: require('../../../../Images/MM/Persons/Rodgers.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 267,
    text:
      `
        Благодарно улыбнувшись, Маргарита кивнула инспектору. 
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 268,
    text:
      `
        — Мы тщательно изучили местность поблизости. Из улик лишь эта серьга. 
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speaker: 'Маргарита',
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Choice', id: 'FoundUnderTheTree' }],
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 269,
    text:
      `
        Ощущая сковывающее всё тело напряжение, Маргарита старательно пыталась отогнать тревожные мысли. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 270,
    text:
      `
        <i>«Наутро на меня посыплется шквал вопросов. Почему умолчала, не раскрыла все факты на месте?»
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 271,
    text:
      `
        <i>«Но сейчас у меня нет сил мусолить подробности. Отчитаюсь перед своим непосредственным начальником уже завтра».
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 272,
    text:
      `
        Задумчиво кивнув, инспектор забрал прозрачный пакетик с украшением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 273,
    text:
      `
        Сунув улику в карман, пообещал Маргарите отправить результаты экспертизы сразу по готовности.
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 274,
    text:
      `
        Услыхав о прибытии судмедэксперта, Роджерс отправился к специалисту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 275,
    text:
      `
        На земле уже дожидались своего «пассажира» носилки.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 276,
    text:
      `
        Медицинский работник общался с криминалистами, пока двое погрузчиков вытаскивали на поверхность тело убитого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 277,
    text:
      `
        Яма была неглубокой, и спустя несколько минут труп оказался на земле.
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 278,
    text:
      `
        Маргарита ощутила вязкое, тревожное чувство внутри, которое принялось понемногу стягивать желудок, провоцируя тошноту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 279,
    text:
      `
        <i>«Чёрт возьми, почему так не по себе?»
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    music: require('../../../../Sounds/MM/Saw.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 280,
    text:
      `
        После взгляда на тело захотелось сбежать из парка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 281,
    text:
      `
        Активно разлагающийся труп оказался небрежно завёрнут в полиэтилен, из пакета торчала серая кисть с почерневшими пальцами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 282,
    text:
      `
        Погрузчики с разных сторон ухватились за ручки и подняли носилки.
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 283,
    text:
      `
        Рука убитого свесилась вниз, стала мерно покачиваться в воздухе. Разыгравшееся воображение принялось пугать и путать, убивая всякую рациональность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 284,
    text:
      `
        Маргарите почудилось, будто кончики пальцев на руке мертвеца шевельнулись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 285,
    text:
      `
        Казалось, всё вокруг пропиталось запахом смерти, этим убийственным ароматом трупного разложения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 286,
    text:
      `
        <i>«Вонь жуткая. Стошнит сейчас».
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 287,
    text:
      `
        Удушливый смрад окутал Маргариту, принуждая дышать через раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 288,
    text:
      `
        К горлу как нельзя кстати подкатил ком.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 289,
    text:
      `
        Резко прижав к губам пальцы, детектив развернулась и поспешила отойти в сторону, подальше от вони и убийственной ауры смерти.
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 290,
    text:
      `
        — Что это с ней? Неужто испугалась? 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 291,
    text:
      `
        Дилан недовольно поморщился.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 292,
    text:
      `
        — Майк, попробуй лишний раз не разговаривать.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 293,
    text:
      `
        Дилан проводил спину девушки взглядом. Задумчиво вскинул брови, растерянный нетипичным поведением коллеги-начальницы.
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 294,
    text:
      `
        <i>«Что за реакция? Неужто чёртова записка так выбила тебя из колеи?»
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Coat_Sad.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 295,
    text:
      `
        Переведя дыхание, Маргарита поспешила вернуться. К счастью девушки, тело уже погрузили в специализированную машину.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 296,
    text:
      `
        Остаточный аромат щекотал нос, но дышать стало намного легче. 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 297,
    text:
      `
        К детективу подошёл Майк.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 298,
    text:
      `
        — Марпл сообщил, что действуем сообща. Утром нужно будет занести записку к нам или передать с Нильсеном, это прямая улика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 299,
    text:
      `
        — Я в курсе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 300,
    text:
      `
        Маргарита достала из кармана мобильник. Глянула на время.
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 301,
    text:
      `
        — Если здесь закончили, я поехала. Утром ещё рапорт писать.  
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 302,
    text:
      `
        На лице Майка детектив уловила лёгкий прищур. Улыбка коснулась губ полицейского, когда он негромко произнёс:
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 303,
    text:
      `
        — Давай, детектив, действуй. Мне будет очень интересно посмотреть, как ты справишься с этим делом. Я верю в тебя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    speaker: 'Майк',
    imageFront: require('../../../../Images/MM/Persons/Mike.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 304,
    text:
      `
        Маргарита не поняла, что это было: искренняя поддержка или откровенная провокация и способ позлорадствовать над её уязвимым положением? 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 305,
    text:
      `
        <i>«Никому нельзя верить».
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Park.jpg')
  },

  {
    id: 306,
    text:
      `
        — На, подзаправься. Нам тут весь день торчать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    message: '11 часов утра. Кабинет в местном полицейском участке',
    music: require('../../../../Sounds/MM/Stress.mp3'),
    speaker: 'Дилан',
    beforeBegin: whiteFlash,
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 307,
    text:
      `
        Дилан опустил на стол стаканчик с дымящимся кофе. Не отрываясь от монитора, Маргарита произнесла бесцветным голосом:
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 308,
    text:
      `
        — Спасибо.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 309,
    text:
      `
        Мужчина, встав позади, упёрся двумя руками в стол, заключая девушку в импровизированные объятия. Уставившись в экран монитора, выдохнул: 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 310,
    text:
      `
        — Делись, что успела нарыть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 311,
    text:
      `
        Пальцы Маргариты забегали по клавиатуре. 
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 312,
    text:
      `
        Отыскав нужный файл, детектив принялась читать основную информацию, которую удалось найти без привлечения внутренней базы данных PNC.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    message: 'PNC — Police National Computer, Британская база данных криминальных записей, записей о вождении и имуществе.',
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 313,
    text:
      `
        — Джонатан Браун, 33 года, не женат. Работает в банке на должности финансового директора, акционер Лондонской сети коммерческих банков «FinDep». 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 314,
    text:
      `
        — Так, подобная ерунда вне всяких сомнений заинтересует женскую аудиторию…
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 315,
    text:
      `
        — За них рад. За нас пока не особо. Что посущественнее будет?
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 316,
    text:
      `
        — Это то, что первым делом удалось вытащить в Инфо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    message: 'Инфо — в контексте истории самая крупная онлайн-энциклопедия, аналогия Википедии.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 317,
    text:
      `
        — Ему приписывают романы с дочерью мэра и младшей внучкой губернатора… 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 318,
    text:
      `
        Сделав глоток горячего американо, Маргарита смахнула с лица прядь волос и устало выдохнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 319,
    text:
      `
        Услышала, как Дилан наигранно утомлённо вздохнул и, не поворачивая к нему головы, закатила глаза, слегка улыбнувшись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 320,
    text:
      `
        — Так, ладно, сейчас заинтригую тебя.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Cringe.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 321,
    text:
      `
        — Да ты уже. Сгорю от любопытства, если не выясню, с кем кувыркается этот мажорик-банкир. 
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan_Flirt.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 322,
    text:
      `
        — Пока жду допуск к базе, но есть кое-что ещё. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 323,
    text:
      `
        — Для нас примечательно, что с отцом у Джонатана были явно прохладные отношения. Эту тему активно мусолили после скандала, в который угодил сын Томаса.
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 324,
    text:
      `
        — В одном из интервью он весьма категорично высказался о завещании отца. Намекнул, что не собирается использовать семейные активы в дальнейшем. Акции банка — всё, что у него есть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 325,
    text:
      `
        — Совместные фото в сети отсутствуют. Либо я плохо искала. Но если отрыть их так сложно, это о многом говорит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 326,
    text:
      `
        — И ещё нюанс. Младший Браун проживает в центральном Лондоне, на границе Белгравия. Но последние пару недель, со слов соседей, ночи проводил в родовом особняке. Здесь, в Илинге…
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 327,
    text:
      `
        Маргарита многозначительно замолчала, повернув голову к Дилану. Напарник, задумчиво хмыкнув, медленно отстранился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 328,
    text:
      `
        — Причины? Работа?
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 329,
    text:
      `
        Мужчина принялся мерить кабинет шагами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 330,
    text:
      `
        — Да, новый контракт. Кстати, есть ещё одна неточная информация.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 331,
    text:
      `
        — Полгода назад Джонатан Браун едва не угодил в крупный скандал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 332,
    text:
      `
        — Его обвиняли в мошенничестве, и даже дошло до суда. Но позже дело замяли, отозвав иск. Новости вовремя подчистили, и вскоре об этом забыли.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 333,
    text:
      `
        Дилан упал в кресло напротив, заключив с неприкрытым азартом:
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 334,
    text:
      `
        — Это хорошо. Есть куда копать.
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 335,
    text:
      `
        Маргарита задумчиво усмехнулась. Допивая кофе, пристально оглядела допросную за стеклом. Комната всё ещё пустовала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 336,
    text:
      `
        Только…
      `,
    buttons: [
      {
        text: 'я сама с ним пообщаюсь',
        goTo: 337
      },
      {
        text: 'пойдём вместе?',
        goTo: 341
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 337,
    text:
      `
        — Хочу посмотреть его реакцию на себя. На всякий случай.
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 338,
    text:
      `
        Напарник с пониманием кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 339,
    text:
      `
        — Полагаешь, он может быть причастен к записке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 340,
    text:
      `
        — Не уверена... Проверим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    message: 'Твоё рвение к самостоятельности похвально. Недаром главная в вашем дуэте — ты.',
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Reputation' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 341,
    text:
      `
        — Мне будет проще анализировать его, если ты будешь поблизости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 342,
    text:
      `
        — Марго, я итак буду рядом. Прямо за стеклом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 343,
    text:
      `
        Дилан внимательно посмотрел на коллегу. Качнул головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 344,
    text:
      `
        — Не позволяй этим событиям сбить тебя с толку. Действуй. А я прикрою. 
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 345,
    text:
      `
        Маргарита тяжело вздохнула. Немного подумав, неуверенно кивнула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 346,
    text:
      `
        — Да, ты прав. Хорошо.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 347,
    text:
      `
        Детектив, поправив бейдж, встала с кресла, уступая место за монитором Дилану. 
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 348,
    text:
      `
        Дверь в допросную распахнулась. В комнату завели мужчину. 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 349,
    text:
      `
        Бросив взгляд за стекло, Маргарита посмотрела на друга.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 350,
    text:
      `
        — По старой схеме, давай.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 351,
    text:
      `
        Надевая наушники, Дилан ей подмигнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 352,
    text:
      `
        Усмехнувшись, детектив вышла из кабинета, оставляя напарника наблюдать по ту сторону. 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Watchroom.jpg')
  },

  {
    id: 353,
    text:
      `
        Оказавшись в допросной, Маргарита прикрыла за собой дверь и сразу прошла к столу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 354,
    text:
      `
        Глаза девушки впились в человека напротив, пристально изучая. Лицо её оставалось беспристрастным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 355,
    text:
      `
        Мужчина сидел, расслабленно откинувшись на спинку стула. Прямой, острый взгляд — взгляд человека, не привыкшего подчиняться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 356,
    text:
      `
        — Добрый день, мистер Браун.
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 357,
    text:
      `
        Поза, ухмылка, внутренняя уверенность — казалось, будто допрашивать собрались не его, а <i>он.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 358,
    text:
      `
        — Добрее не бывает. 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Jonathan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 359,
    text:
      `
        Низкий, красивый голос, насмешливый тон… Маргарита вмиг осознала, что с ним будет ой как непросто. 
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 360,
    text:
      `
        — Особенно если учесть причину, по которой я здесь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 361,
    text:
      `
        Неприкрытый сарказм, холод. И едва уловимый в воздухе флёр опасности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 362,
    text:
      `
        Подобное чувство вспыхивает в груди, когда смотришь на хищника, запертого в клетке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 363,
    text:
      `
        Осознаёшь, что вред нанести он сейчас не способен. Но опасаешься. Потому что в этой жизни всегда есть место проклятому «а что, если…?»
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 364,
    text:
      `
        Глаза Джонатана скользнули по телу девушки — медленно, изучающе. Задержались на лице Маргариты, бесстрастном и отстранённом.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 365,
    text:
      `
        Опустившись на стул напротив, детектив положила ладони на стол. Заговорила миролюбивым тоном:
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 366,
    text:
      `
        — Мистер Браун, в первую очередь хотелось бы выразить Вам свои соболезнования. 
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 367,
    text:
      `
        Брови мужчины нервно дёрнулись, на лице растянулась насмешливая ухмылка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 368,
    text:
      `
        — А во вторую, полагаю, устроить допрос с пристрастием и выдвинуть обвинения? 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 369,
    text:
      `
        Ножки стула мерзко проскребли по полу, когда Джонатан неожиданно двинулся, вжавшись торсом в столешницу.
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 370,
    text:
      `
        Браун склонился над Маргаритой, жаждая разрушить воздвигнутые ею границы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 371,
    text:
      `
        Границы профессионализма и педантичности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 372,
    text:
      `
        Джонатан не выносил безликих. Обожал срывать с лиц опостылевшие ему маски. 
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 373,
    text:
      `
        Резкие фразы, движения. Отклоняющееся от установленных обществом рамок приличия поведение. Каверзные вопросы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 374,
    text:
      `
        Подобные фокусы помогали всецело читать людей. Их <i>настоящие мотивы и цели.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 375,
    text:
      `
        Это всегда работало безупречно — нервы имели свойство отключать разум, пробуждая инстинкты. 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 376,
    text:
      `
        Не оставалось терпения на любезности, а переход сразу к делу здорово экономил время.
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 377,
    text:
      `
        Маргарита не шелохнулась — лишь едва уловимо зрачки дёрнулись в сторону, где стоявший у двери полицейский одним движением вынул из кобуры пистолет.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 378,
    text:
      `
        — Не нервничайте так, мистер Браун. Мы просто поговорим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 379,
    text:
      `
        — Ну, разумеется. И после Вы меня сразу отпустите? 
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 380,
    text:
      `
        — Всё верно. На Вас нет наручников, мы не намерены удерживать Вас здесь силой после дачи показаний. 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 381,
    text:
      `
        Маргарита закончила спокойным тоном: 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 382,
    text:
      `
        — По крайне мере, решения об ограничении свободы от районного суда нет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 383,
    text:
      `
        — Расслабьтесь. Пока Вам не выдвинули никаких обвинений. 
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 384,
    text:
      `
        Джонатан недовольно сощурился и сжал челюсти на слове «пока». 
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 385,
    text:
      `
        — Но я буду вынуждена просить Вас на период расследования ограничить свои передвижения по стране. 
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 386,
    text:
      `
        — Послушайте, мисс… 
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 387,
    text:
      `
        Запнувшись, мужчина зацепил взглядом бейдж девушки. Произнёс медленно, смакуя каждый слог в длинном имени детектива:
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 388,
    text:
      `
        — <i>Маргарита.
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 389,
    text:
      `
        — Не совсем по-человечески получается. 
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 390,
    text:
      `
        — В моей жизни страшное горе, а Вы вот так сходу — допросная комната, приставленный к двери вооружённый охранник. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 391,
    text:
      `
        — Мало того, оправиться от новостей не успел, так у меня ещё и рабочий день уж третий час как идёт, а сдвигов никаких совершенно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 392,
    text:
      `
        — Поэтому, если Вам нечего мне предъявить, задавайте свои вопросы, и я поехал. Меня ждёт офис и утренний… по всей видимости, уже дневной кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 393,
    text:
      `
        Несмотря на высокомерные слова, Джонатан не звучал как истеричка или безродный хам.
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 394,
    text:
      `
        Своими фразами Браун не плевался ядом из бешенства, а лишь пояснял, как весь этот процесс выглядит для него со стороны. 
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 395,
    text:
      `
        Ведь его не просто вызвали на допрос…
      `,
    buttons: [
      {
        text: '',
        goTo: 396
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 396,
    text:
      `
        Полиция явилась за мужчиной прямо в головной офис банка и увезла для дачи показаний без возможности подъехать самостоятельно в компании адвоката. 
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 397,
    text:
      `
        «Вызывайте своего юридического представителя по телефону, мобильник у вас никто не отбирал», — таким был ответ полицейского на попытку воспротивиться унижению.
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 398,
    text:
      `
        Гордый и сдержанный, Джонатан согласился ехать, не желая устраивать бесполезных скандалов при своих сотрудниках.
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 399,
    text:
      `
        — Прекрасно понимаю Ваше негодование, мистер Браун. Я не займу много времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 400,
    text:
      `
        Джонатан ничего не ответил, лишь поудобнее откинулся на спинку стула, всем своим видом демонстрируя: время пошло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 401,
    text:
      `
        — Для начала опишите пожалуйста во всех подробностях: где, с кем и как Вы проводили время с 16 по 19 сентября. Строго по часам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 402,
    text:
      `
        — Желательно упомянуть тех, кто сможет подтвердить информацию.
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 403,
    text:
      `
        Желваки Джонатана напряглись, а взгляд стал недобрым. Мужчина заговорил, выплёвывая каждое слово:
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 404,
    text:
      `
        — Это начинает походить на допрос подозреваемого. <i>Не потерпевшего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 405,
    text:
      `
        — В таком случае я имею полное право отказаться от дачи показаний до приезда своего адвоката. Я прав?
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 406,
    text:
      `
        Маргарита равнодушно усмехнулась. Ответила беззлобно: 
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 407,
    text:
      `
        — Помнится мне, Вы торопились на работу? А теперь вдруг передумали и решили потянуть время? 
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 408,
    text:
      `
        Детектив слегка перегнулась через стол, понижая голос:
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 409,
    text:
      `
        — У меня есть полномочия держать Вас здесь сутки под предлогом подтверждения алиби. Или до прибытия адвоката.
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 410,
    text:
      `
        Девушка дерзко прищурилась, подытожив: 
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 411,
    text:
      `
        — Можете не беспокоиться, причина найдётся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 412,
    text:
      `
        Джонатан на мгновение замер. Приподнял руку, уперевшись ей в стол, и нервным движением взъерошил волосы, растрепав и без того творческий хаос на голове. 
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 413,
    text:
      `
        Детектив встала, осознавая, что беседа близится к завершению. 
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 414,
    text:
      `
        Скрестив на груди руки, она упёрлась бедром в угол стола и вопросительно вскинула брови, спрашивая одним взглядом: «ну, я пошла?»
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 415,
    text:
      `
        Мужчина, продолжая сидеть, отзеркалил позу своей собеседницы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 416,
    text:
      `
        Маргарита подметила, что Джонатан невероятно хорошо сложен. Скрещенные на груди руки подчеркнули рельеф спортивного тела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 417,
    text:
      `
        Бросилась в глаза ещё одна интересная деталь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 418,
    text:
      `
        Татуировка, рисунок которой оказался частично скрыт под тканью белой футболки.
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 419,
    text:
      `
        <i>«Последствия бурной юности? Акт неповиновения?»
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 420,
    text:
      `
        Отложив размышления, Маргарита собралась прощаться, но мужчина её опередил, усмехнувшись. 
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 421,
    text:
      `
        — И всё-таки я не ошибся в Вас, <i>Маргарита.
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 422,
    text:
      `
        Выдержав короткую паузу, закончил весьма лаконично:
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 423,
    text:
      `
        — Вы натуральная сука. 
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 424,
    text:
      `
        Маргарите пришлось приложить усилия, чтобы не выдать лишних эмоций. 
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 425,
    text:
      `
        Удивление, раздражение, негодование.
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 426,
    text:
      `
        И, чёрт возьми, любопытство?
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 427,
    text:
      `
        <i>«А Вы тот ещё провокатор, мистер Браун».
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Cringe.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 428,
    text:
      `
        Детектив сдержанно усмехнулась, отступив на полшага. Окинула мужчину долгим, задумчивым взглядом.
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 429,
    text:
      `
        — Хм. Однако…
      `,
    buttons: [
      {
        text: 'Смело',
        goTo: 430,
        gift: true
      },
      {
        text: 'Осторожнее, мистер Браун',
        goTo: 458
      }
    ],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 430,
    text:
      `
        — Мне импонирует Ваша прямолинейность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    stats: [
      { story: EStoriesEn.MM, value: 1, category: 'Choice', id: 'DidItBrave' }],
    music: require('../../../../Sounds/MM/Jonathan.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 431,
    text:
      `
        — Импульсивные мужчины — ужасные лгуны. Следствию это всегда на руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 432,
    text:
      `
        Сдув с лица непослушную прядь, Маргарита подцепила пальцами спинку стула и одним резким движением сдвинула его, расположив строго напротив мужчины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 433,
    text:
      `
        Заинтригованный Джонатан развернулся к девушке всем корпусом, гадая, что же эта упрямая мисс намерена предпринять дальше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 434,
    text:
      `
        Границы допустимого она <i>уже</i> переступила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 435,
    text:
      `
        Прямо сейчас. Усевшись непозволительно близко, упёрлась своими коленями в ноги мужчины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 436
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 436,
    text:
      `
        И глядела с тихой, непоколебимой угрозой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 437,
    text:
      `
        Но неоднозначность поведения стражей порядка во время допроса — частая практика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 438,
    text:
      `
        Временами необходимые следствию признания пытаются <i>выбивать</i>, а порой в ход идут шантаж и угрозы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 439,
    text:
      `
        <i>«Давай, дорогуша, удиви меня».
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 440,
    text:
      `
        — Может, Вы и правы, мистер Браун. 
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 441,
    text:
      `
        — Не стану лукавить: порой я и правда веду себя неподобающе…
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 442,
    text:
      `
        Её голос стал холоднее, а взгляд — твёрже. Джонатан отчётливо рассмотрел годы опыта в глазах напротив.
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 443,
    text:
      `
        — И стану кем угодно — судьёй, присяжным, палачом — вопреки правилам, чтобы раскрыть тайну убийства Томаса Брауна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 444,
    text:
      `
        Она перешла на шёпот:
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 445,
    text:
      `
        — Отвечайте на мои вопросы, и будет нам всем счастье.
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 446,
    text:
      `
        Резко отстранившись, Маргарита продолжила серьёзным тоном:
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 447,
    text:
      `
        — Я действительно сожалею, что Вам приходится проходить через всё это… 
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 448,
    text:
      `
        — Вашего отца убили около недели назад. Точную дату и время смерти сообщат позже, когда будут готовы результаты вскрытия. 
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 449,
    text:
      `
        — Я лишь хочу сузить круг подозреваемых. Поэтому <i>очень</i> прошу Вас: расскажите мне, что Вы делали в Илинге с 16 по 19 сентября. 
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 450,
    text:
      `
        Закончив говорить, Маргарита опустила руку на стул, чтобы вернуться на своё место, но мужчина резко схватил её за запястье, не позволяя отстраниться.
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 451,
    text:
      `
        — Нет-нет, не так быстро.
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 452,
    text:
      `
        — Вы сейчас столь виртуозно манипулировали близостью... И, признаюсь, у Вас очень хорошо получилось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    message: 'Джонатан впечатлён и заинтригован. Отличная работа, детектив.',
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Jonathan' },
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Reputation' }],
    achievement: { story: EStoriesEn.MM, name: 'DetectiveActress' },
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 453,
    text:
      `
        — Так нарываетесь на наказание? Сначала обозвали сукой, теперь за руки хватаете…
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form_Annoyed.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 454,
    text:
      `
        — Спешу напомнить, что мы не одни. Одно моё слово и Вас скрутят. 
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 455,
    text:
      `
        В подтверждение сказанного охранник у двери тонко намекнул на своё присутствие, негромко брякнув наручниками.
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 456,
    text:
      `
        Маргарита недовольно дёрнула руку, и Джонатан разжал пальцы, выпуская её запястье. 
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 457,
    text:
      `
        — Что-ж…
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 458,
    text:
      `
        — Не советую дерзить человеку, который расследует убийство Вашего <i>богатого</i> родственника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 459,
    text:
      `
        — Потому что сейчас Ваше нежелание сотрудничать со следствием кажется крайне подозрительным. 
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 460,
    text:
      `
        Девушка театрально задумалась, подмечая, как лицо мужчины багровеет от гнева. 
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 461,
    text:
      `
        Джонатан быстро уловил направление разговора, и его реакция говорила сама за себя — он счёл подобную провокацию низостью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 462,
    text:
      `
        <i>«Ничего личного, Браун. Я лишь куснула в ответ».
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 463,
    text:
      `
        Взяв себя в руки, мужчина дерзко ухмыльнулся, не спуская с детектива прямого, пристального взгляда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 464,
    text:
      `
        Внезапно в его глазах отразился вызов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 465,
    text:
      `
        Отголосок победы, когда игра ещё не окончена, но у тебя в руках осталась последняя карта, и та – козырный туз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 466,
    text:
      `
        Он произнёс с хищным оскалом:
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 467,
    text:
      `
        — Я расскажу Вам всё, детектив. Только вот мне тоже очень хочется уточнить кое-что…
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    music: require('../../../../Sounds/MM/Darkness.mp3'),
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Smirk.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  },

  {
    id: 468,
    text:
      `
        — Как с убийством моего отца связаны Вы?
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('MM', 'Глава 1', 'Часть 2', '1')
        }
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Angry.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    achievement: { story: EStoriesEn.MM, name: 'Chapter01Part01Completed' },
    imageBack: require('../../../../Images/MM/Backgrounds/Interrogation_Room.jpg')
  }
])
