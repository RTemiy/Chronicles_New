import { saveEndProgress, scenarioManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.MM, chapterName: 'Глава 1', partName: 'Часть 3', code: '0' }, [
  {
    id: 0,
    text:
      `
        — … жестоко убит глава благотворительного фонда «Спасение» — Томас Браун. Тело 58-летнего бизнесмена обнаружили погребенным в парке на Мэтток Лейн.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    speaker: 'Ведущая',
    imageFront: require('../../../../Images/MM/Objects/TV.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 1,
    text:
      `
        — Предположительно смерть наступила в результате глубокого пореза шеи. Следствие возбудило дело, к убийству подключено детективное агентство Артура Нильсена.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    speaker: 'Ведущая',
    imageFront: require('../../../../Images/MM/Objects/TV.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 2,
    text:
      `
        — По всему Лондону скорбят тысячи людей, возлагают цветы у тротуаров и парков, устраиваются мирные шествия вокруг здания «Спасения».
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Ведущая',
    imageFront: require('../../../../Images/MM/Objects/TV.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 3,
    text:
      `
        — Единственный сын погибшего благотворителя — Джонатан Браун отказывается давать интервью. На прощание с человеком, прожившим искреннюю, добрую и честную жизнь, можно прийти уже сегодня.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    speaker: 'Ведущая',
    imageFront: require('../../../../Images/MM/Objects/TV.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 4,
    text:
      `
        — Похороны Томаса Брауна состоятся вечером в 18.00 в районе Илинг.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Ведущая',
    imageFront: require('../../../../Images/MM/Objects/TV.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 5,
    text:
      `
        — Как известно…
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Ведущая',
    imageFront: require('../../../../Images/MM/Objects/TV.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 6,
    text:
      `
        Монотонный голос ведущей начал нервировать Маргариту. Она повела плечами, и без того неся груз ответственности за это дело.
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
        — Выключите ее, пожалуйста. Нового мы все равно не узнаем.
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
        — Тяжелая ночь?
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 9,
    text:
      `
        — Мгм…
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
        Всплыли картины поздней бессонной ночи, рисунка на окне, и чуждых мыслей, что крутились у девушки.
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
        — Сегодня вы отправитесь на похороны.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 12,
    text:
      `
        — Серьезно?
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 13,
    text:
      `
        — Посмотрите, кто пришел. Немного последите, понаблюдаете. Но без самодеятельности.
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
        Мистер Нильсен небрежно потер глаза. Излишне задумчивый, мыслями он был далеко.
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
        — У нас пополнение.
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
        Девушка, не слишком любившая новых людей, грустно вздохнула.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 17,
    text:
      `
        — Стажер?
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 18,
    text:
      `
        Артур едко ухмыльнулся, глядя на детектива.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 19,
    text:
      `
        — Я бы так не сказал, тебе этот человек знаком.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 20,
    text:
      `
        Еще не до конца осознавая причину усмешки начальника, Марго, абсолютно дезориентированная, повторила вслух глупое.
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
        — Знаю?
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 22,
    text:
      `
        Будь у нее чуть больше времени на анализ всех людей, с которыми ей довелось встретиться, она бы скорее всего пришла к одному имени, принадлежавшему человеку, резко и весьма бесцеремонно взорвавшемуся в следующее мгновение в кабинет.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 23,
    text:
      `
        — Бенджамин Маккалоу, офицер ЦРУ из Америки, друзья.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    message: 'ЦРУ — Центральное разведывательное управление США',
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 24,
    text:
      `
        — <i>Только его нам не хватало.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    achievement: { story: EStoriesEn.MM, name: 'PastMeeting' },
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 25,
    text:
      `
        Не показывая свое истинное, весьма неприятное отношение к Бенджамину, Маргарита поднялась со стула и молча протянула руку, натягивая на лицо самую дружелюбную улыбку, на которую только была способна.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 26,
    text:
      `
        — Дилан Чейз, детектив.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 27,
    text:
      `
        Он представился и, так же как и Марго, протянул руку для пожатия. Бенджамин с видимой радостью предвкушения оглянул своих новых коллег.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 28,
    text:
      `
        Но приподнятое настроение быстро сменилось серьезностью, когда взгляд упал на фотографии с места преступления, покоившиеся на столе Артура Нильсена.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 29,
    text:
      `
        — Я успел ознакомиться с делом, обсудим все?
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Benjamin' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 30,
    text:
      `
        Маргарита хотела съязвить офицеру, но вовремя остановила порыв, тем более, что на вопрос Бенджамина ответил мистер Нильсен.
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
        — Конечно, Бенджамин. Оставлю тебя с Маргаритой и Диланом, мне все равно пора на встречу. Надеюсь, вместе вы сработаетесь и принесете достойные результаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    speaker: 'Артур Нильсен',
    imageFront: require('../../../../Images/MM/Persons/Arthur.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 32,
    text:
      `
        Взяв длинный плащ, начальник, сетуя на погоду и тихо бормоча под нос ругательства, вышел из кабинета.
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 33,
    text:
      `
        — Предлагаю перейти в наш с Марго кабинет.
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 34,
    text:
      `
        Буквально кожей ощущая недружественную атмосферу и подмечая взгляды девушки в сторону офицера ЦРУ, Дилан на это время решил побыть мирным связным, старающимся урегулировать все недовольства сторон.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 35,
    text:
      `
        Маргарита молча покинула кабинет мистера Нильсена, оставляя мужчин позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 36,
    text:
      `
        — Придется не сладко.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Boss_Cabinet.jpg')
  },

  {
    id: 37,
    text:
      `
        Только ступив на порог кабинета детективов, Бенджамин в мгновение услышал в свой адрес четкий вопрос, требующий немедленного ответа.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    music: require('../../../../Sounds/MM/Fast.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 38,
    text:
      `
        — Зачем ты здесь?
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 39,
    text:
      `
        Не терпящий шуток, увиливаний, голос Маргариты прозвучал звонко в пустом помещении. Дилан прикрыл дверь, мысленно воздав молитвы.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 40,
    text:
      `
        — <i>Упаси нас от ссор…
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 41,
    text:
      `
        Бенджамин, понимая, что веселый тон в конец разозлит Маргариту, решил ответить предельно честно.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 42,
    text:
      `
        — Я делюсь секретной информацией, знать которую вам не положено, но, чтобы показать мое доверие, я раскрою ее.
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 43,
    text:
      `
        На несколько секунд он замолк, выжидая возможную реакцию со стороны девушки. Хоть мужчина теоретически и вел разговор с двумя детективами, обращал он явно к Марго.
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 44,
    text:
      `
        — Ты ждешь оды в свою честь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 45,
    text:
      `
        — Говори уже… И раз решил делиться такой информацией, значит это в первую очередь выгодно тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 46,
    text:
      `
        Чуть тише девушка добавила.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 47,
    text:
      `
        — Не нужно выставлять себя чертовым героем…
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 48,
    text:
      `
        — Томас Браун был моим завербованным агентом.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 49,
    text:
      `
        Маргарита с сомнением оглядела Бенджамина.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 50,
    text:
      `
        — Что он передавал?
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 51,
    text:
      `
        — Нет, нет, нет… Марго, я итак сказал слишком много.
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 52,
    text:
      `
        — Не смей называть меня так. Для тебя я Маргарита.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 53,
    text:
      `
        Холодно. От этих слов Дилан нахмурился, поправляя волосы, что упали на лоб.
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 54,
    text:
      `
        — <i>Привыкай, скоро она и тебе такое скажет.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 55,
    text:
      `
        — Когда же ты поймешь, что я не желал тебе зла.
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 56,
    text:
      `
        — Правда, Бенни?
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 57,
    text:
      `
        Она знала, как ненавистно ему это сокращение. Но не поиграться с именем не могла, хотела отомстить, насолить, пусть и таким детским способом.
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 58,
    text:
      `
        — Думаешь, что можешь задеть этим прозвищем меня? Смешно…
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 59,
    text:
      `
        Приторно невинный взгляд скользнул по лицу Бенджамина. От него не укрылась ухмылка детектива.
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 60,
    text:
      `
        Одно его появление било по ее самолюбию, задевало попранную гордость. Сейчас представилась возможность высказаться, и Марго решила ее не упускать.
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 61,
    text:
      `
        Если бы Бенджамин не знал ее, то и впрямь мог подумать, что девушка стала более равнодушной к их истории.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 62,
    text:
      `
        — Знаешь, бывает думаю о всех твоих наградах, увешанных по стене, и вспоминаю тебя. В не самом лучшем свете… 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 63,
    text:
      `
        — Хватит. Неужели не понимаешь одну простую вещь? Я ведь тогда только хотел помочь встать тебе на ноги.
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 64,
    text:
      `
        — Унижая меня? В таком случае, ты или безумец, или чертов гений.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 65,
    text:
      `
        — Предпочитаю второй вариант.
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 66,
    text:
      `
        — Поверить не могу, что мы обсуждаем это… Забудь, проехали.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 67,
    text:
      `
        — Прошлое осталось в прошлом. Нет смысла его ворошить.
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 68,
    text:
      `
        Впрочем, в последнее Марго с трудом верила.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 69,
    text:
      `
        — Справедливо. У нас теперь общая задача — найти виновного. Надеюсь, мы сможем работать слаженно во имя общей цели?
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 70,
    text:
      `
        — Не сомневайся в моем профессионализме, Бенни.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 71,
    text:
      `
        И вновь желание задеть, оскорбить собеседника.
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 72,
    text:
      `
        — Прошу, прекращай уже это. Иначе будешь называть меня мистер Маккалоу.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 73,
    text:
      `
        — Ой, простите… Не знала, что мы будем столь формальны.
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 74,
    text:
      `
        Маргарита решила идти до конца, она хотела видеть искры злости, сжимающиеся до белых костяшек руки, повышенные голоса, крики — хоть что-то. Она хотела довести Бенджамина, как когда-то он доводил ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 75,
    text:
      `
        — Впрочем, мистер Маккалоу звучит очень солидно, я бы сказала даже интимно.
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 76,
    text:
      `
        — Долго ты собираешься испытывать его терпение, Марго?
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 77,
    text:
      `
        Дилан решил вклиниться в их диалог, понимая, что основная суть их спора и непонимания звучит между строк, не произносится вслух — неразрешенные обиды в прошлом дают знать о себе в настоящем.
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 78,
    text:
      `
        — Буду бить его же оружием. Почему ему можно было, а мне нельзя?
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 79,
    text:
      `
        Вопрошение было скорее риторическим, поэтому Дилан лишь покачал головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 80,
    text:
      `
        — Ты лишь желаешь завоевать уважение старших, верхушки Лондона. А мне нужны результаты.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 81,
    text:
      `
        — Ты свихнулась? Думаешь, мне нужна гребаная медалька от государства, а на расследование плевать?
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 82,
    text:
      `
        — Раньше ты был такой… Готовый пойти по головам, только бы подняться по службе.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 83,
    text:
      `
        Марго видела, как от негодования подрагивали ресницы Бенджамина. Почему-то эта незначительная деталь напомнила детективу обыденную картину природы: как молодой листок дерева слегка колышется на ветру.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 84,
    text:
      `
        Мужчина был вне себя от бешенства, внешне стараясь сохранить невозмутимую хладнокровность. Сквозь сжатые губы Бен тихо проговорил, так, чтобы последующие слова дошли только до уха девушки.
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 85,
    text:
      `
        — Люди меняются, знаешь об этом? И мне жаль, если в прошлом я так сильно задел твои чувства, что сейчас ты даже не хочешь со мной разговаривать.
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 86,
    text:
      `
        Отвернувшись от нее, он сказал громче.
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 87,
    text:
      `
        — Так мы сможем работать, не препираясь друг с другом?
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 88,
    text:
      `
        Маргарита запоздало поняла, что устроила перепалку на работе. Такое поведение неприемлемо, поэтому, взяв себя в руки, вновь протянула руку для приветствия.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 89,
    text:
      `
        И в этом жесте уже не было манерности и жеманности, лишь желание помириться, пусть и на время расследования.
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 90,
    text:
      `
        — <i>Эмоции зашкаливают, все из-за убийства, недостатка деталей. Я срываюсь на человека, который должен помочь нам.
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 91,
    text:
      `
        — <i>Пора пить успокоительные, если не могу сдержать себя.
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 92,
    text:
      `
        — <i>Неужели меня так ранит прошлое…
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 93,
    text:
      `
        Бенджамин коротко улыбнулся и вместо рукопожатия решил обнять девушку.
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 94,
    text:
      `
        — Ну не настолько…
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 95,
    text:
      `
        Девушка, стиснутая в крепких объятиях, едва могла дышать.
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 96,
    text:
      `
        — Ой, заткнись. Когда еще мы будем обнимать друг друга?
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 97,
    text:
      `
        Дилан впервые за последние минуты спокойно вздохнул, глядя на уморительную сцену, развернувшуюся перед ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 98,
    text:
      `
        — Ну все, я сейчас заплачу.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 99,
    text:
      `
        И вытер несуществующую слезу, катившуюся по щеке. Бенджамин отстранился, а Марго прошла за свой стол.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 100,
    text:
      `
        — С чего бы начать…
      `,
    buttons: [
      {
        text: 'Рассказать подробно',
        goTo: 101,
        gift: true
      },
      {
        text: 'Рассказать в общих чертах',
        goTo: 108
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 101,
    text:
      `
        Монолог вышел долгим, Бенджамин все это время внимательно слушал детектива, не произнося ни слова, лишь изредка делая какие-то пометки в блокноте.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    message: 'Каждая деталь важна',
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Effect', id: 'Investigation' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 102,
    text:
      `
        — Ты как?
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 103,
    text:
      `
        Маргарита не сразу поняла, к чему клонил мужчина.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 104,
    text:
      `
        — В смысле?
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 105,
    text:
      `
        — Письмо этого маньяка в квартире, серьга. Неприятный набор личных вещей, кто-то вторгся к тебе.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 106,
    text:
      `
        Марго пожала плечами.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 107,
    text:
      `
        — Уже свыклась. Я правда абсолютно не знаю, кто бы это мог быть. Мне кажется убийцу искать нужно не обязательно среди моего ближайшего окружения, информацию о моих делах можно найти здесь, в офисе.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 108,
    text:
      `
        — Ты забыла самое важное — убийца вышел на тебя, Марго.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 109,
    text:
      `
        Бенджамин подвинулся поближе.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 110,
    text:
      `
        — Да…
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 111,
    text:
      `
        Дилан решил взять рассказ в свои руки, чтобы дополнить сказанное. Монолог вышел долгим, Бенджамин все это время внимательно слушал детектива, не произнося ни слова, лишь изредка делая какие-то пометки в блокноте.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 112,
    text:
      `
        — Да уж, я знал, что дело запутанное, но, чтобы настолько.
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 113,
    text:
      `
        — Я правда абсолютно не знаю, кто бы это мог быть. Мне кажется убийцу искать нужно не обязательно среди моего ближайшего окружения, информацию о моих делах можно найти здесь, в офисе.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 114,
    text:
      `
        — По сути кто угодно мог прокрасться и узнать все это. А сережка…
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 115,
    text:
      `
        — Что, если она выпала в удачный для убийцы момент и он подобрал ее?
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 116,
    text:
      `
        Девушка зарылась в волосы и топнула ногой.
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 117,
    text:
      `
        — Все не то, не клеится, такое совпадение — полнейший бред.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 118,
    text:
      `
        — Видимо нам и правда придется навещать фотографа.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 119,
    text:
      `
        При упоминании клички серийного убийцы Бенджамин присвистнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 120,
    text:
      `
        — Ну и ну… Не спешите, я смогу подключить несколько людей из ЦРУ, они помогут.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 121,
    text:
      `
        — Если и с этим будет пусто, то будем обращаться к вашему маньячине.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 122,
    text:
      `
        Все замолчали, обдумывая ход дальнейших действий. Марго первая решилась прервать затянувшуюся паузу.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 123,
    text:
      `
        — Сын Томаса Брауна не убийца, но с ним все равно что-то не чисто.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 124,
    text:
      `
        — Не доверяешь ему?
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 125,
    text:
      `
        — Что-то он темнит, в бумагах ни слова о том, кто мог находиться в конфронтации с отцом, хотя уверена таких людей много. Конкурентов у благотворителя было полно, со многими, насколько мне известно, он отказывался сотрудничать.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 126,
    text:
      `
        — За последний год на него было совершено 2 нападения, вы вообще в курсе об этом?
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 127,
    text:
      `
        — Да, как потом выяснилось, то были хулиганы, но ведь это важная деталь…
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 128,
    text:
      `
        — В общем, к чему это я. Я хочу последить за ним.
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 129,
    text:
      `
        Дилан стушевался, Бенджамин, напротив, оживился, заинтересованно слушая детектива.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 130,
    text:
      `
        — Бен, ты сейчас похож на кота, который нашел мышку, чтобы поохотиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 131,
    text:
      `
        — Просто… Это неожиданно, обычно ты не любила этот метод.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 132,
    text:
      `
        — Сейчас слежка не помешает.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 133,
    text:
      `
        — Я бы с удовольствием подсобил, помог, но организация просто не выделит тебе ресурсов. Доказательства должны быть более вескими.
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 134,
    text:
      `
        — Ты думаешь я этого не знаю?
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 135,
    text:
      `
        — Что ты так к нему прицепилась? Мужик, как мужик. Просто немногословный, а с отцом они в прохладных отношениях, вот и он не знает всех подробностей его жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 136,
    text:
      `
        — Затея провальная, на мой счет.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 137,
    text:
      `
        — Хорошо, значит будем просто наблюдать издалека. Сегодня же похороны…
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 138,
    text:
      `
        — Я заеду домой, переоденусь, встретимся уже там, на месте.
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 139
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 139,
    text:
      `
        Пение священника, было первым, что услышала Марго в новом образе.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    music: require('../../../../Sounds/MM/Violin.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 140,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    wardrobe: { story: EStoriesEn.MM, personId: 'Margo_Black_Dress', goTo: 141 },
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 141,
    text:
      `
        — <i>Красиво, мелодично… Жаль, что слышим мы такое лишь при грустных обстоятельствах.
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 142,
    text:
      `
        Вдалеке показался Джонатан.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 143,
    text:
      `
        — <i>Держится отстраненно, но спокойно. Пора, наверное, привыкнуть, к его скудным эмоциям. Лицо, словно нечитаемая книга.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 144,
    text:
      `
        Ветер легко игрался с волосами девушки, солнце спряталось за сгущающимися перистыми облаками — все присутствующие понимали, скоро начнется дождь.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 145,
    text:
      `
        Проститься с Томасом Брауном, кажется, пришел весь Илинг. Черные облачения гостей иногда сливались в одну темную сплошную линию.
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 146,
    text:
      `
        Посередине стоял изысканный деревянный гроб, его неспешно подняли, и несколько мужчин понесли его на плечах к месту захоронения.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 147,
    text:
      `
        Шествие, сопровождаемое тягучим голосом священника, медленно продвигалось вперед. Плеча Маргариты осторожно коснулась рука…
      `,
    buttons: [
      {
        text: 'Бенджамина',
        goTo: 148
      },
      {
        text: 'Дилана',
        goTo: 157
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 148,
    text:
      `
        Девушка не вздрогнула, аккуратно повернула голову назад, беспристрастно встречаясь взглядом с мужчиной.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Benjamin' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 149,
    text:
      `
        — Чудесно выглядишь. Черный тебе к лицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 150,
    text:
      `
        Шепот невесомо коснулся уха Марго.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 151,
    text:
      `
        — Намекаешь, что мне подходит цвет смерти?
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 152,
    text:
      `
        Она увидела, как Бенджамин захотел оправдаться, но поспешила добавить.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 153,
    text:
      `
        — Шучу, расслабься. И… спасибо, за комплимент.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 154,
    text:
      `
        Не ожидая от него ответа, девушка развернулась и продолжила идти в одиночку. Место и обстоятельства не подходили под шутливые или кокетливые беседы.
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 155,
    text:
      `
        — <i>Изменилась. Она изменилась…
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speaker: 'Бенджамин',
    imageFront: require('../../../../Images/MM/Persons/Benjamin.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 157,
    text:
      '',
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    condition: [
      {
        condition: () => {
          return wardrobe.getCurrentClothesImageTitle(EStoriesEn.MM, 'Margo_Black_Dress') === 'Миссис Смит'
        },
        goTo: 158
      },
      {
        condition: () => {
          return wardrobe.getCurrentClothesImageTitle(EStoriesEn.MM, 'Margo_Black_Dress') === 'Холли'
        },
        goTo: 167
      },
      {
        condition: () => {
          return wardrobe.getCurrentClothesImageTitle(EStoriesEn.MM, 'Margo_Black_Dress') === 'Черное лаконичное'
        },
        goTo: 174
      }
    ],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 158,
    text:
      `
        — Миссис Смит, вы чудесны.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Дилан',
    stats: [{ story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Dylan' }],
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 159,
    text:
      `
        Маргарита улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 160,
    text:
      `
        — Не узнаю вас…
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 161,
    text:
      `
        — Простите, забыл представиться. Джон Смит к вашим услугам.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 162,
    text:
      `
        — Скоро по сюжету мы должны будем убивать друг друга, приготовься.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 163,
    text:
      `
        — Не стоит, вы и так ранили меня глубоко в сердце.
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 164,
    text:
      `
        Схватившись за грудь, мужчина карикатурно изобразил мучения. Марго шуточно ударила Дилана в плечо.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 165,
    text:
      `
        Сценка, вдохновленная сюжетом фильма «Мистер и миссис Смит», стала чем-то светлым и добрым в хмурый осенний вечер Илинга.
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 166,
    text:
      `
        Но, развернувшись, девушка продолжила идти в одиночку. Все же место и обстоятельства не подходили под шутливые или кокетливые беседы.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 167,
    text:
      `
        — Холли, вы чудесны.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    speaker: 'Дилан',
    stats: [{ story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Dylan' }],
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 168,
    text:
      `
        Маргарита улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 169,
    text:
      `
        — Не узнаю вас…
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 170,
    text:
      `
        — Что ж, в этой вселенной я, видимо, до безумия влюбленный в Холли Пол.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 171,
    text:
      `
        — Пол… Как хорошо, что вы поселились этажом выше.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 172,
    text:
      `
        Девушка мягко взглянула на Дилана, убирая за ухо выбившуюся прядь волос. Сценка, вдохновленная сюжетом фильма «Завтрак у Тиффани», стала чем-то светлым и добрым в хмурый осенний вечер Илинга.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 173,
    text:
      `
        Но, развернувшись, она продолжила идти в одиночку. Все же место и обстоятельства не подходили под шутливые или кокетливые беседы.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 174,
    text:
      `
        — Могу я сделать комплимент?
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Дилан',
    stats: [{ story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Dylan' }],
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 175,
    text:
      `
        Маргарита улыбнулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 176,
    text:
      `
        — Ничего не имею против этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 177,
    text:
      `
        — Выглядишь чудесно.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 178,
    text:
      `
        Вслух девушка ответила машинальное:
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 179,
    text:
      `
        — Спасибо…
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 180,
    text:
      `
        Дойдя до места погребения, Маргарита и ее спутники с удивлением отметили, что ни Джонатан, никто либо другой, не собирался говорить предсмертную речь.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 181,
    text:
      `
        Гроб начали опускать в землю, священник читал молитвы о душе умершего, заверяя, что там она найдет долгожданный покой и приют.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 182,
    text:
      `
        — <i>Не хотелось бы умирать подобным образом… Почему никто из близких не произнес ни слова?
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 183,
    text:
      `
        — <i>Томас Браун был человеком выдающимся, помогал другим в трудные минуты, основал и поддерживал благотворительный фонд.
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 184,
    text:
      `
        — <i>Отчего нельзя сказать пары фраз? Пары добрых, коротких слов? Неужели он их не достоин…?
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 185,
    text:
      `
        Прерывая моральные домыслы, в которых можно было окончательно заблудиться, Марго попыталась отыскать взглядом:
      `,
    buttons: [
      {
        text: 'Джонатана',
        goTo: 186
      },
      {
        text: 'Часы',
        goTo: 194
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 186,
    text:
      `
        И впервые в душе кольнуло осознание.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    stats: [
      { story: EStoriesEn.MM, value: +1, category: 'Person', id: 'Jonathan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 187,
    text:
      `
        — <i>Он одинок…
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 188,
    text:
      `
        — <i>Не зол, язвителен, упрям, а просто одинок… Все остальное из-за этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 189,
    text:
      `
        Глаза девушки зацепились за губы Джонатана, обычно сложенные в усмешку, сейчас они застыли. И в этой неподвижности ей виделось грустное спокойствие, отрешенность от времени.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 190,
    text:
      `
        В глазах на исказившемся лице мужчины — все та же скрываемая боль увечной души.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 191,
    text:
      `
        Девушка поняла, что уже продолжительное время смотрела в его сторону, поэтому быстро отвела взгляд. Это рваное действие заметил Джонатан.
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 192,
    text:
      `
        — <i>Изучала…
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speaker: 'Джонатан',
    imageFront: require('../../../../Images/MM/Persons/Jonathan_Costume.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 193,
    text:
      `
        Марго переминалась с ноги на ногу, запоздало вспомнив о своем плане.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 194,
    text:
      `
        — <i>Времени осталось не так много.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 195,
    text:
      `
        — <i>Пора.
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 196,
    text:
      `
        Наигранно схватившись за живот, девушка отошла от группы гостей. Ее негромко окликнул Дилан.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 197,
    text:
      `
        — С тобой все хорошо?
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 198,
    text:
      `
        — Живот прихватило, я съезжу домой или в больницу. Оставайтесь с Беном здесь, понаблюдайте.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 199,
    text:
      `
        — Мне и правда плоховато…
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 200,
    text:
      `
        Дилан уверенно кивнул.
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 201,
    text:
      `
        — Конечно, поезжай. Напиши, как приедешь, мы здесь справимся.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  },

  {
    id: 202,
    text:
      `
        Простой, но в то же время дорогой дом Джонатана Брауна, находился в отдалении от центра Илинга. Приятной наружности фасад здания, огромные, темные окна в пол производили хорошее впечатление.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    message: 'Полчаса спустя',
    music: require('../../../../Sounds/MM/Sad_Stress.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 203,
    text:
      `
        — <i>Так вот где ты поживаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 204,
    text:
      `
        Марго искренне не любила вторгаться в границы личной жизни, но сейчас того требовала работа и неумолчное сердце, которое в спешке твердило о тайнах, скрываемых мужчиной.
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 205,
    text:
      `
        — <i>Заранее прости, Джонатан.
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 206,
    text:
      `
        С этими словами детектив ступила на территорию дома, затем тихими шагами прокралась по ухоженному газону к задней двери дома.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 207,
    text:
      `
        Достав отмычку, она принялась взламывать замок.
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 208,
    text:
      `
        — <i>Ну давай же, скорей…
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 209,
    text:
      `
        Через несколько секунд дверь поддалась, впуская в свою обитель непрошенную гостью.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 210,
    text:
      `
        — <i>Мигом установлю камеры и прослушку.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Маргарита',
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.MM, 'Margo_Black_Dress') },
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 211,
    text:
      `
        Ветер не вторил мысленно произнесенным словам Маргариты, порыв холодного воздуха внезапно окутал девушку, словно желал остановить от необдуманных действий.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },

  {
    id: 212,
    text:
      `
        Однако было уже поздно. Нога детектива пересекла частные владения Джонатана…
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('MM', 'Глава 1', 'Часть 4', '0')
        }
      }],
    parallax: 'right',
    achievement: { story: EStoriesEn.MM, name: 'Chapter01Part03Completed' },
    imageBack: require('../../../../Images/MM/Backgrounds/Countryhouse.jpg')
  },
  {
    id: 213,
    text:
      `
        Но, развернувшись, продолжила идти в одиночку. Все же место и обстоятельства не подходили под подобные беседы.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Funeral.jpg')
  }])
