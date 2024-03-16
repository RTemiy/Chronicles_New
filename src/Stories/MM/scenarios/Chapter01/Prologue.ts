import { saveEndProgress, scenarioManager } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'

scenarioManager.addScenario({ storyName: EStoriesEn.MM, chapterName: 'Глава 1', partName: 'Пролог', code: '0' }, [
  {
    id: 0,
    text:
      `
        Лил сильный дождь. Капли бешено стучали по окну, отдавая гулким ритмом в кабинете. Небо заволокло тучами, не было никаких проблесков лучей солнца. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Sounds/MM/Calm.mp3'),
    ambient: require('../../../../Sounds/MM/Rain.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 1,
    text:
      `
        Впрочем, такая погода в Илинге не была удивительным явлением, казалось, к ней привыкали все, кто жил в Лондоне больше месяца.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 2,
    text:
      `
        — Ну что, посчитала уже, сколько их?
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    stats: [
      { story: EStoriesEn.MM, value: 0, category: 'Person', id: 'Dylan' }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 3,
    text:
      `
        Девушка нервно мотнула головой, словно сбрасывая наваждение.
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 4,
    text:
      `
        — О чем ты, Чейз?
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 5,
    text:
      `
        — Птиц на дереве. 
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 6,
    text:
      `
        Маргарита театрально закатила глаза. В ответ на это парень лишь улыбнулся и одновременно с толикой сочувствия взглянул на напарницу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 7,
    text:
      `
        — Что с тобой, Марго? Ты минут 5 не отрываешь своего взгляда от окна. Я, конечно, все понимаю, созерцание красоты города — это весьма занимательно, но ты задала мне вопрос и резко замолчала, впав в этот ступор… Не выспалась? 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 8,
    text:
      `
        — Нет, прости. И еще раз извини, какой вопрос я тебе задавала?
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 9,
    text:
      `
        — Перестань извиняться по каждому поводу, а то ты и впрямь становишься похожей на истинную англичанку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 10,
    text:
      `
        Он приблизился к столу Марго и протянул ей свежий и ароматный кофе. Она благодарно кивнула Дилану.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 11,
    text:
      `
        — Ты спросила меня, не хочу ли я пообедать в ресторане «У Полсон». Даже умоляла меня пойти с тобой.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 12,
    text:
      `
        — Ты все шутки шутишь, Дилан. Нам ведь сегодня сдавать отчет по обыску…
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Form.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 13,
    text:
      `
        — Тебе нужно отдохнуть, в последнюю неделю тебя и на наших встречах не видно и меня ты стала избегать. А как же наши просмотры фильма каждую среду? 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 14,
    text:
      `
        Заметив синие круги под глазами детектива, он решительно двинулся в сторону гардероба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 15,
    text:
      `
        — Нет, так точно не пойдет. Вставай, отказов я не приму.
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 16,
    text:
      `
        Девушка подняла руки в примирительном жесте, как бы говоря: «Конечно, куда я денусь». Напарник подал Марго пальто, затем протянул второй зонт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 17,
    text:
      `
        — Ты точно знал, что я соглашусь на твое предложение?
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 18,
    text:
      `
        — Не совсем, хотя мне и лестно, что ты считаешь, что я весьма убедительный парень, привыкший добиваться своего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 19,
    text:
      `
        — Тогда к чему притащил второй зонт на работу?
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 20,
    text:
      `
        Дилан подмигнул напарнице. Марго начала быстро собирать сумку. Ей искренне не хотелось тратить время, которого и так не было слишком много, на очередные сборы.
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 21,
    text:
      `
        — Я знал, что сегодня будет дождь, и в то же время был убежден, что ты не будешь смотреть прогноз погоды. Решил, что дам его, как ты будешь уходить домой, чтобы не промокла, не заболела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 22,
    text:
      `
        — Что тут сказать… забочусь о нашем лучшем детективе компании. 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Дилан',
    imageFront: require('../../../../Images/MM/Persons/Dylan.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 23,
    text:
      `
        Девушка не раз получала комплименты по поводу результатов своей работы. Второй год подряд она удостаивалась премии лучшего сотрудника отдела расследований. Но слышать похвалу все же было приятно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 24,
    text:
      `
        — Спасибо, Дилан. Даже не знаю, чем же я заслужила такого напарника…
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Detective_Cabinet.jpg')
  },

  {
    id: 25,
    text:
      `
        До кафе детективы шли в тишине. Но это молчание не угнетало, скорее дарило спокойствие. Дилан искоса поглядывал на девушку, отмечая красивые черты ее лица.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    music: require('../../../../Sounds/MM/Romantic.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 26,
    text:
      `
        Он никогда не навязывал своей компании, но в душе был безмерно рад, когда Марго сама предлагала провести время вдвоем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 27,
    text:
      `
        Пока она неотрывно смотрела на людей, витая в своих мыслях, Дилан думал о том, что будь они в других обстоятельствах, работая на менее «простых» работах, то непременно стали бы отличными друзьями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 28,
    text:
      `
        Статус хорошего товарища и напарника был ему приятен, но в глубине души он часто ловил себя на том, что представлял себя и Марго вместе.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 29,
    text:
      `
        Без пошлости, излишней откровенности, а просто пытался вообразить рядом с собой эту смелую и уверенную в себе девушку.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 30,
    text:
      `
        Он дал себе строгое, нерушимое обещание, что никогда не переступит черту коллег, их отношения никогда не выйдут за пределы офиса, если только она сама не сделает первый шаг, не намекнет на возможную близость…
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 31,
    text:
      `
        В кафе «У Полсон» Марго и Дилан провели не больше получаса, заказав себе два небольших ягодных маффина, салата и две чашки чая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 32,
    text:
      `
        Тратить больше времени на обед девушка не хотела, и почти все время, что они там пробыли, изводила парня фразами о том, как много дел им нужно сегодня сделать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/London_Street.jpg')
  },

  {
    id: 33,
    text:
      `
        Дом встретил детектива тьмой и беспощадным одиночеством. Даже от квартиры веяло такой же мрачной атмосферой, как и от самой хозяйки. В последнее время Марго и правда работала без остановки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    message: 'Спустя 6 часов беспрерывной работы…',
    music: require('../../../../Sounds/MM/Stress.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 34,
    text:
      `
        И не то, чтобы ей это не нравилось, скорее изрядно выматывало. Она сама не могла понять, почему на всю неделю стала заложницей трудоголизма. Вспомнив слова Дилана о своей отстраненности, Маргарита покачала головой.
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 35,
    text:
      `
        — И как я могла пропустить турнир по теннису среди коллег. Я ведь весь месяц ждала финала игры.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 36,
    text:
      `
        Бросив ключи на тумбочку, она принялась расшнуровывать сапоги. Взгляд зацепился за небольшой клочок листа на ковре.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 37,
    text:
      `
        — Не припомню, чтобы разбрасывала рабочие бумаги по квартире…
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Маргарита',
    imageFront: require('../../../../Images/MM/Persons/Margo_Coat.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 38,
    text:
      `
        Нагнувшись за ним, девушка подняла лист с пола. Включила свет и пробежалась глазами по написанному. Каждое последующее слово болью отдавалось в голове, а каждая строчка удивляла ее больше предыдущей.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 39,
    text:
      `
        <i>03.09.2012<p>Детектив, пишу вам, потому что знаю, что разобраться с этим делом не сможет никто кроме вас. На вашем счету 125 раскрытых дел, 58 выигранных заседаний суда и не единого промаха. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 40,
    text:
      `
        <i>Вверяю судьбу Томаса Брауна вам, и хочу, чтобы это преступление в скором времени пополнило копилку успешно завершенных расследований. 
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 41,
    text:
      `
        <i> В парке рядом с излюбленным вами кафе «У Полсон» (где вы наверняка сегодня уже вкусно отобедали с Диланом, не так ли?) недалеко от памятника вы найдете вашу же серьгу.
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 42,
    text:
      `
        <i>(Уже неделю вы, Маргарита, проходили с единственной брошью и так и не заметили пропажи), постарайтесь рыть в этом же месте и найдете… 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 43,
    text:
      `
        <i>Нет, к сожалению, не клад, но кое-что не менее занимательное – труп известного бизнесмена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 44,
    text:
      `
        <i>И помните – убийцей может оказаться любой человек, окружающий вас. Не доверяй никому.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 45,
    text:
      `
        <i>Ваш покорный слуга, Т. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Images/MM/Objects/Burnt_Letter.png'),
    imageBorder: require('../../../../Images/MM/UI/Border.png'),
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 46,
    text:
      `
        Непроизвольно рука Маргариты потянулась к уху, и девушка, заметив, что там и правда недостает сережки, попятилась к выходу.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Dark_Entrance.jpg')
  },

  {
    id: 48,
    text:
      `
        Руки детектива дрогнули, ноги подкосились, но она смогла взять себя в руки. Резко выбежав из квартиры, метнулась по лестнице вниз. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    music: require('../../../../Sounds/MM/Fast.mp3'),
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 49,
    text:
      `
        Пальцы быстро перебирали контакты. Остановившись на номере Дилана, девушка без промедлений нажала на дисплей смартфона. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 50,
    text:
      `
        Станет ли Марго пешкой в этой опасной игре, сможет ли она раскрыть еще одно возможное преступление или письмо таинственного незнакомца лишь детская игра больного человека?
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  },

  {
    id: 51,
    text:
      `
        Ответ на этот вопрос девушка не знала, и хоть в ту минуту страх сковал ее тело, в следующую же секунду она была полна решимости раскрыть загадку, встретившуюся на ее пути… 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('MM', 'Глава 1', 'Часть 1', '0')
        }
      }],
    achievement: { story: EStoriesEn.MM, name: 'PrologueCompleted' },
    imageBack: require('../../../../Images/MM/Backgrounds/Flat_Stairs.jpg')
  }
])
