import { achievementsManager, saveEndProgress, scenarioManager, statsManager, timer } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { beginMiniGameMemory } from '../../../../Components/MiniGameMemory/MiniGameMemory'
import { redFlash } from '../../../../Components/Slide/Slide'

scenarioManager.addScenario({ storyName: EStoriesEn.ROR, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
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
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) < 100
        },
        goTo: 1
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) >= 100
        },
        goTo: 75
      }
    ]
  },

  {
    id: 1,
    text:
      `
        «Десять часов вечера... часы уже пробили, но никого и близко не видать».
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    music: require('../../../../Audio/ROR/City.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 2,
    text:
      `
        Доктор Мортимер настоял на том, чтобы мы пришли заранее. Как он заявил, пунктуальность в данном деле была превыше всего. Но к нашему сожалению, ни Отто, ни его «дружок» пока так и не явились.
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    message: 'Вы заплатили Отто сто крон и отправились к продовольственному складу',
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 3,
    text:
      `
        «Плакали, похоже, мои денежки».
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 4,
    text:
      `
        Я нервно начал перебирать пальцами, не обращая внимания на доктора. Под маской всё равно было не разобрать, что у него на уме.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 5,
    text:
      `
        «Оправдан ли риск? Не совершена ли непоправимая ошибка? И почему только док так спокоен?»
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 6,
    text:
      `
        Оставалось только ждать. Сначала я дал товарищу Отто десять минут, потом еще пять, а затем...
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 7,
    text:
      `
        Затем стражник не соизволил появиться. Вместо него пришел тот, с кем, по всей видимости, и планировалось организовать встречу. Однако хоть как-то разглядеть его было проблематично. На этой улице не зажигались фонари, и что-то мне подсказывало — Отто неспроста выбрал это место. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageFront: require('../../../../Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 8,
    text:
      `
        Под рукой всегда был охотничий нож. Я не исключал, что стражник мог решить обхитрить меня: подослать убийцу, замести следы сделки. Этот город умеет вытворять вещи и похуже, коварнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 9,
    text:
      `
        Доктор продолжал сохранять ледяное спокойствие, которое постепенно начало передаваться мне. Во всяком случае, кто-то правда пришел, да и один он вряд ли нападет сразу на двоих. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 10,
    text:
      `
        — Добрый вечер, господа. Прошу прощения. Меня... задержали.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageFront: require('../../../../Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 11,
    text:
      `
        После этих слов фигура тихо усмехнулась и отряхнула верхнюю одежду. Почему-то от этого смешка мне стало не по себе. Чувство усилилось, когда незнакомец потянулся рукой к заднему карману.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 12,
    text:
      `
        Я был готов выхватить оружие, но вовремя остановился. Как выяснилось, наш новый знакомый всего лишь собирался отдать нам две маленьких бумажки.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageFront: require('../../../../Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 13,
    text:
      `
        Я не понимал причину такой конспирации. Обычно вопрос о побеге из города решался простым диалогом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 14,
    text:
      `
        «Он ведет себя так вызывающе, будто шпика из себя строит. Или мне правда довелось наткнуться на шпиона Его императорского величества?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    message: 'Шпик — синоним слова «осведомитель». Работник тайных служб, шпион',
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 15,
    text:
      `
        Человек Отто протянул нам два конверта. Чувствовалась качественная бумага, а закрытая печать только подчеркивала, что незнакомец явно был вхож в ряды знати. 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageFront: require('../../../../Images/ROR/Items/Envelope.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 16,
    text:
      `
        Я уже было собирался раскрыть свой, отдавая другой Мортимеру, но на мой жест темная фигура запротестовала.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 17,
    text:
      `
        — Нет-нет... при всем уважении... но второй конверт не для господина. Приглашение для другого рода пар. Ну, вы меня понимаете.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageFront: require('../../../../Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 18,
    text:
      `
        В голосе этого типа звучало ехидство. Мортимер возражать не стал и протянул мне конверт обратно.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 19,
    text:
      `
        Края письма были украшены витиеватым узором, шрифт был искусным, подобный можно встретить в монастырских книгах. Писала твердая рука, но медленно, выводя каждую букву. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageFront: require('../../../../Images/ROR/Objects/Opened_Letter.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 20,
    text:
      `
        «Дайте же нам просто свалить из города... К чему весь этот цирк?»
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 21,
    text:
      `
        Наконец, я приступил к самому чтению:
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 22,
    text:
      `
        <i>«Братство получило о вас лестные отзывы. Мы желаем видеть вас на наших встречах. Вход — таверна «Дорога в забвение», начало: 22:00. Приходите только с тем, с кем вы делите ваши утехи. Не подведите наших ожиданий. Не подведите собственные желания».
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageFront: require('../../../../Images/ROR/Objects/Opened_Letter.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 23,
    text:
      `
        Я всеми силами старался сдерживать эмоции при прочтении этого «шедевра». С каждым новым открытием вся эта ситуация все меньше походила на план побега.
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 24,
    text:
      `
        «Что еще за братство? Какие желания? Отто решил так надо мной посмеяться? Надеюсь, эта сволочь еще на своем посту. Не побоюсь выбить из него деньги прямо перед его сослуживцами».
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 25,
    text:
      `
        И только я собирался вежливо распрощаться с этим человеком в черном, как вдруг в дело вмешался Мортимер.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    stats: [
      { story: EStoriesEn.ROR, value: +1, category: 'Item', id: 'Letter01' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 26,
    text:
      `
        Чумной доктор вышел вперед, после чего учтиво поклонился незнакомцу.
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 27,
    text:
      `
        — Благодарим вас, милейший. Будьте уверены, мой господин прибудет вовремя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 28,
    text:
      `
        По всей видимости, данный ответ устроил посланника. Тот театрально поклонился и скрылся обратно во тьму. Напоследок он бросил фразу:
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 29,
    text:
      `
        — Не подведите собственные желания.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageFront: require('../../../../Images/ROR/Persons/Figure_Hood.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 30,
    text:
      `
        Проводив его взглядом, я скрестил руки, повернулся к Мортимеру, который со вздохом опустил голову и тихо проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 31,
    text:
      `
        — Заранее предвосхищая ваш вопрос, господин Гарнер, я считаю, что было бы неразумно упускать на данный момент единственную возможность разобраться в происходящем.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 32,
    text:
      `
        — Чего? Вам не кажется, что нас зовут на собрание каких-то сумасшедших похотливых чудаков?
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 33,
    text:
      `
        — Я придерживаюсь такого же мнения. Откровенно говоря, беседа с таинственным джентльменом наводит меня на еще одни занимательные мысли...
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 34,
    text:
      `
        — Дайте угадаю, мы зря потратили сто крон?
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 35,
    text:
      `
        — Нет... напротив. Это помогло сложить несколько событий воедино и укрепить мою теорию. Нужно проверить одно место.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 36,
    text:
      `
        После этих слов Мортимер направился в ту же сторону, куда ушел незнакомец. Я решил обогнать доктора и встал прямо перед длинным носом его птичьей маски. 
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 37,
    text:
      `
        — Ну уж нет, док. Давайте начистоту. Что тут творится? Я не собираюсь ходить за вами хвостиком и делать вид, будто я ваш ассистент. У вас для этого есть этот... как его...
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 38,
    text:
      `
        — Дитрих.
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 39,
    text:
      `
        — Да. Именно этот козел.
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 40,
    text:
      `
        — Господин Гарнер, я понимаю ваше беспокойство. И я его разделяю. Но вы не отдаете себе отчет в том, что перед нами возможность, которой надо пользоваться, если мы хотим покинуть город.
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 41,
    text:
      `
        — Может, вы поделитесь вашими подозрениями и перестанете говорить загадками?
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 42,
    text:
      `
        — Я должен подтвердить свои умозаключения. Это недалеко. Прошу. Мы с вами в одной лодке. Мне нет смысла делать то, что не было бы обращено на нашу общую пользу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 43,
    text:
      `
        Я устало потер переносицу. Слова доктора звучали правдоподобно. Определенно. Однако от этого мне легче не становилось. События отказывались складываться в единую картину, и решение, которое мне подсказывал голос разума — довериться Мортимеру. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 44,
    text:
      `
        Кивнув, я проговорил: <p>— Хорошо. И куда мы направимся, доктор? 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 45,
    text:
      `
        — В морг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Warehouse.jpg')
  },

  {
    id: 46,
    text:
      `
        «Как же мне везет на такое».
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 47,
    text:
      `
        Спешным шагом мы подошли к небольшому зданию, ранее принадлежащему церкви. С началом эпидемии чумы сестры милосердия оказывали тут помощь нуждающимся, но вскоре сами стали заложницами болезни и завсегдатаями этого места.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 48,
    text:
      `
        Теперь здесь работали коллеги доктора Мортимера. Чумные доктора. Что ж, по крайней мере у меня не возникло сомнений, что нас пропустят.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 49,
    text:
      `
        Однако вид здоровенного детины, который перегородил нам путь у самой двери, вполне четко давал понять, что всё пройдет не так гладко, как я рассчитывал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 50,
    text:
      `
        И в самом деле, лишь только мы оказались прямо перед его лицом, он вытянул правую руку, приказывая остановиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 51,
    text:
      `
        — В столь поздний час не велено никого пускать, уважаемый. Приходите завтра. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 52,
    text:
      `
        Разумеется, обращался он именно к Мортимеру. Я посмотрел на чумного доктора, пытаясь понять, как нам решить данную проблему. Но даже сквозь его маску я вполне четко понял — ученый сам растерялся.
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 400,
    text:
      `
        Охранник продолжал стоять с невозмутимым лицом. Внимательно осмотрев его пудовые кулаки, стало очевидным, что надавить на него не получиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 53,
    text:
      `
        Но тут, пользуясь непонятным мне самому наитием, я прокашлялся и проговорил:
      `,
    buttons: [
      {
        text: 'Мы здесь по поручению коменданта гарнизона',
        goTo: 54
      },
      {
        text: 'Вызвали доктора из столицы, чтобы осмотреть тела',
        goTo: 63
      },
      {
        text: 'Не подведите свои желания',
        goTo: 69
      }],
    message: 'Мир, где живут герои — опасен. Порой, Генрих может получать ранения. На это могут повлиять как ваши выборы, так и сюжетная надобность',
    stats: [
      { story: EStoriesEn.ROR, value: 100, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 54,
    text:
      `
        Охранник удивленно приподнял бровь, после чего нахмурился. Он внимательно изучал меня своими уродскими глазами, словно выбирая женщину на вечер.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 55,
    text:
      `
        Затем бугай слабо улыбнулся уголками губ и спросил:<p>— Фамилия его какая? 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 56,
    text:
      `
        Разумеется, фамилию я не знал. А даже если бы и знал, то называть фамилию Отто, человека, который решился мне помочь — не в моих принципах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 57,
    text:
      `
        Пришлось импровизировать и неловко спросить:<p>— Неужели ты сам не знаешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 58
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 58,
    text:
      `
        — Валите отсюда, пока по тыкве не получили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 59,
    text:
      `
        Я уже собирался тактически отступить и забыть, как страшный сон планы доктора о прогулке по моргу, но тут в дело вмешался сам Мортимер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 60,
    text:
      `
        — Не подведите свои желания, сэр, — тихо произнес он. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 61,
    text:
      `
        Охранник изрядно побледнел и поклонившись так, что мне пришлось сделать пару шагов назад, нервно проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 62,
    text:
      `
        — Ч-что же вы сразу не сказали. Проходите, господин. И запомните, меня зовут Эмиль Стерч, очень давно служу на благо братства.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 63,
    text:
      `
        Охранник смерил меня недоверчивым взглядом. Сейчас он напоминал мне отца, когда я пытался убедить того, что это именно сестра разбила банку с соленьями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 64,
    text:
      `
        Фыркнув своим жирным носом, бугай проворчал:<p>— Мне никаких распоряжений не поступало. Не заговаривай мне зубы, приятель. Повторяю: в столь поздний час не велено никого пускать. Если продолжите тратить мое время, придется воспользоваться силушкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 65,
    text:
      `
        Я уже собирался тактически отступить и забыть, как страшный сон планы доктора о прогулке по моргу, но тут в дело вмешался сам Мортимер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 66,
    text:
      `
        — Не подведите свои желания, сэр, — тихо произнес доктор.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 67,
    text:
      `
        Охранник изрядно побледнел и поклонившись так, что мне пришлось сделать пару шагов назад, нервно проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 68,
    text:
      `
        — Ч-что же вы сразу не сказали. Проходите, господин. И запомните, меня зовут Эмиль Стерч, очень давно служу на благо братства.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 69,
    text:
      `
        Мортимер резко повернул ко мне длинный клюв своей маски. Теперь пришел его черед пребывать в шоке от поведения собеседника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    stats: [{ story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Mortimer' }],
    achievement: { story: EStoriesEn.ROR, name: 'NoMortimerHelp' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 70,
    text:
      `
        Но вот на охранника мои слова произвели совсем другой эффект. Он изрядно побледнел и поклонившись так, что мне пришлось сделать пару шагов назад, нервно проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    message: 'Вы впечатлили Мортимера своей сообразительностью',
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 71,
    text:
      `
        — Ч-что же вы сразу не сказали. Проходите, господин. И запомните, меня зовут Эмиль Стерч, очень давно служу на благо братства.
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Images/ROR/Persons/Emil.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 73,
    text:
      `
        Мы дождались, когда бугай освободит нам проход. Он даже услужливо приоткрыл дверь, жестом приглашая нас пройти под темные своды часовни. 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 74,
    text:
      `
        Мортимер никак не комментировал происходящее, лишь молча воспользовался теперь уже радушным приемом.
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 75,
    text:
      `
        «И как он собирается это сдвигать?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    music: require('../../../../Audio/ROR/City.mp3'),
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 76,
    text:
      `
        Дорога до тайного места, о котором рассказывал доктор Мортимер, не заняла слишком много времени, ведь для своего возраста, он двигался достаточно бодро.
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    message: 'Вы не заплатили Отто сто крон и последовали за доктором Мортимером',
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 77,
    text:
      `
        Правда, оставалась небольшая загвоздка. Люк нужно было как-то сдвинуть. А самое непонятное во всем происходящем, мне показалось, что старик собирается сделать это голыми руками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 78
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 78,
    text:
      `
        — Мэтр, я надеюсь, у вас есть план? 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 79,
    text:
      `
        — Планирую попасть в стоки под городом. Я же вам говорил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 80,
    text:
      `
        — При всем уважении, но... колодец-то заблокирован. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 81,
    text:
      `
        — Да, я заметил, — усмехнулся Мортимер, — но у любой двери есть ключ. Даже у такой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 82,
    text:
      `
        Сказать, что доктор меня заинтриговал — это означало ничего не сказать. Я не сводил глаз с закрытого люка, пытаясь найти в нем хотя бы углубление, которое походило на замочную скважину.
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 83,
    text:
      `
        Но все оказалось несколько прозаичнее. Мортимер объяснил, что нужно всего лишь нажать на плиты в правильной последовательности. Тогда заветная дверь и откроется.
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    message: 'После этого слайда следует мини-игра «память». Сначала в определенном порядке подсвечиваются элементы, после нажмите на эти элементы в том же порядке. После трех проигрышей игра начнется заново и взаимоотношения с определенным персонажем ухудшатся..',
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 84,
    text: '',
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    beforeBegin: () => {
      beginMiniGameMemory({
        beginningPathAmount: 3,
        lives: 3,
        roundsInARowToWin: 3,
        bestAction: () => {
          achievementsManager.unlock(EStoriesEn.ROR, 'BestMiniGame')
        },
        failAction: () => {
          statsManager.change({ story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Mortimer' })
        },
        endgameAction: () => {
          scenarioManager.beginScene(85)
        }
      })
    },
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 85,
    text:
      `
        Теперь путь вниз был открыт, а мне оставалось только подивиться осведомленности доктора. Тот же в свою очередь театрально отвел руку в сторону и слабо поклонился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 86,
    text:
      `
        — Не хотелось бы испортить костюм, но похоже выбора у нас нет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 87,
    text:
      `
        — Так, нет, подождите, док. Как вы узнали? 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 88,
    text:
      `
        — А? Ну, под городом собраны все нечистоты, сомневаюсь, что мне удастся сохранить одежду в чистоте.
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 89,
    text:
      `
        — Да я не об этом. О том замке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 90,
    text:
      `
        — М, понимаю. У меня есть некая тяга к изучению истории. И об этом факте я прочитал в одном крайне занятном фолианте. По легенде его составил архитектор этого славного города. Быть может, мы обсудим детали уже внизу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 91,
    text:
      `
        Я немного поежился, но все же решил с ним согласиться. Аргументы Мортимера меня нисколько не убедили, но мне не хотелось просто так стоять перед некогда запечатанным проходом у всех на виду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 92,
    text:
      `
        На улице народу почти не было, но всегда найдется пара крыс, жаждущих наживы.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Stone_Hatch.jpg')
  },

  {
    id: 93,
    text:
      `
        Ни для кого не станет открытием, насколько омерзительной может быть вонь в стоках под городом. Судьба берегла меня от посещения такого рода мест, как видно не зря. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 94,
    text:
      `
        Оказавшись здесь единожды в жизни, я твердо решил, что хочу немедленно покинуть канализацию и больше сюда не возвращаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 95,
    text:
      `
        Доктору в этом плане было легче. Запах чеснока, исходящий от него самого, наверняка перебивал ему вонь результатов человеческой жизнедеятельности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 96,
    text:
      `
        Хотя в душной маске подолгу не побродишь. Тем не менее сам Мортимер отнюдь не жаловался.
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 97,
    text:
      `
        Мы шагали по каменистой кладке, а по левую руку от нас располагалась стена со странными мутными образованиями, которые струились через щели. По центру шел поток зеленоватой воды, источник наиболее мерзких ароматов.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 98,
    text:
      `
        По ту сторону тоннеля также была возможность пройти, но я не видел способа, как до туда добраться. Как и в целом не понимал, куда мы держим путь.
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 99,
    text:
      `
        — Док... а зачем мы, собственно, здесь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 100,
    text:
      `
        — Я бы хотел ознакомиться с телом погибшего.  
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 101,
    text:
      `
        — Вы уверены, что оно находится в коллекторе? Я-то думал, мы ищем способ выбраться из города с помощью стоков. Как мертвый чиновник способствует этому?
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 102,
    text:
      `
        — Выход наружу есть... хотя я его еще не открыл. Но вы же прекрасно понимаете, что без моих инструментов и вашей телеги — нам не светит преодолеть долгое путешествие. Да и не стоит бросать на произвол судьбы остальных. 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 103,
    text:
      `
        — Отвечая на ваш первый вопрос, я склонен считать местом захоронения знатных особ традиционное кладбище. Эти же каналы приведут нас прямиком в морг. Обязан предупредить, путь туда будет... да вы и сами все видите.
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 104,
    text:
      `
        — Как заботливо, — с иронией проговорил я, стараясь не думать о подступающей тошноте. — Но при чем тут морг? Зачем нам вообще осматривать тело? Вы серьезно хотите помочь расследованию?
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 105,
    text:
      `
        — Нет... как я уже говорил, у меня есть кое-какие опасения относительно происходящего. Я хочу ускорить это дело, — Мортимер внимательно осматривал окружение. — Да и не советую слишком много говорить. Думаю, вы и так прекрасно понимаете, какого рода тут могут быть заболевания.
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 106,
    text:
      `
        Посчитав совет врача слишком хорошим, чтобы им пренебрегать, я постарался как можно меньше дышать. От вони это полностью не избавляло, но хотя бы появилась уверенность, что я доживу до окончания пути.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 107,
    text:
      `
        Впрочем, в дальнейшем, я в этом выводе сильно засомневался. 
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization.jpg')
  },

  {
    id: 108,
    text:
      `
        Доктор привел меня к закутку, который был завален всяким мусором: стройматериалами, большими мешками, доверху набитыми остроконечными досками, детскими игрушками, посудой. По всей видимости, люди скидывали в недра города все ненужное, полагая, что это навсегда так и останется забытой помойкой.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 109,
    text:
      `
        Среди этого хлама мелькали и врачебные приборы, вроде использованных шприцов или специальных накидок. Это вполне могло указывать, что мы были близки к моргу.
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 110,
    text:
      `
        Я старался максимально аккуратно наступать на поверхность, чтобы не пораниться и не получить себе проблем на голову.
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 111,
    text:
      `
        Однако полностью избежать этого у меня не вышло. Порезавшись боком об острый край одной из строительных балок, я тихо зашипел от боли, чем и привлек внимание доктора Мортимера. Тот резко повернулся и с беспокойством спросил.
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    beforeBegin: redFlash,
    simple: require('../../../../Audio/ROR/Wound.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 112,
    text:
      `
        — Господин Гарнер? Всё в порядке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 113,
    text:
      `
        — Да, док. Во что-то липкое наступил, — я соврал, чтобы не волновать понапрасну своего спутника.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 114,
    text:
      `
        Он мне явно не поверил, приблизился, изучая через свою маску. Я чувствовал, как доктор испытывает меня, возможно, проверяет. Но расколоть у него так и не вышло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 115,
    text:
      `
        Мортимер отступил, продолжая следовать по маршруту, не говоря ни слова.
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 116,
    text:
      `
        Идя за спиной доктора, я решил аккуратно пощупать место удара. Как и предполагалось. Всего лишь небольшая царапина, хотя и костюм было жалко. Ничего, в телеге была замена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    message: 'Мир, где живут герои — опасен. Порой, Генрих может получать ранения. На это могут повлиять как ваши выборы, так и сюжетная надобность',
    stats: [
      { story: EStoriesEn.ROR, value: 100, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 117,
    text:
      `
        Не хотелось надолго задерживаться здесь. А этим врачам только дай повод, живого до смерти залечат. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 118,
    text:
      `
        Поднявшись по винтовой лестнице, я постепенно начал дышать свободнее. Мерзкие запахи оставались позади, сменяясь уже более приятным ароматом ладана, исходящим от просторного помещения некогда бывшей часовни.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    message: 'Самочувствие Генриха ухудшается на 10%',
    stats: [{ story: EStoriesEn.ROR, value: -10, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Canalization_Trash.jpg')
  },

  {
    id: 119,
    text:
      `
        Ранее в этом месте проводили церковные службы, но с началом эпидемии здание было оборудовано под госпиталь. Мрачные темные коридоры не предвещали ничего хорошего, как и зловещая тишина вокруг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 120,
    text:
      `
        Обстановка внутри в очередной раз напомнила, с каким ужасом столкнулись люди, и к чему все это привело.
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    music: require('../../../../Audio/ROR/Hospital.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 121,
    text:
      `
        Слышались тяжелые вздохи часто ворочившихся на кроватях больных, жалобные стоны, тихие мольбы о помощи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 122,
    text:
      `
        В помещении были потушены практически все светильники, создавая лирическую атмосферу, заставляя невольно сопереживать прокаженным.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 123,
    text:
      `
        Пока я следовал за доктором, то старался держаться подальше от несчастных, ожидающих свой скорый конец. Как бы не было грустно за их потерянные судьбы — меня это не касалось.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 124,
    text:
      `
        Из-за редкого источника света, было трудно ориентироваться, однако мельком я все же заметил одного из больных, который лежал на кушетке во всей «красе».
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 125,
    text:
      `
        Он был явно молод, может, около двадцати лет. Однако, выпавшие на макушке волосы, сереющая кожа, пустой взгляд и прерывистое дыхание делали его похожим скорее на старика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 126,
    text:
      `
        И лишь в некоторых чертах прослеживалась былая юность, которая нещадно уничтожалась болезнью.
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 127,
    text:
      `
        «Жить да жить бы... Хорошо хоть болен он не чумой. С такими симптомами я ранее не встречался».
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 128,
    text:
      `
        Я продолжал держаться подле Мортимера, который прекрасно знал планировку здания. Не перестаю поражаться способностям, а главное хладнокровной уверенности моего компаньона. В какой-то момент я даже задумался: человек ли скрывается под пресловутой маской?
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 129,
    text:
      `
        Я вновь хотел вернуться к вопросам, которые меня мучили. Тем более, было совершенно непонятно, как среди всех этих больных — мы найдем того самого.
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 130,
    text:
      `
        «Эдак мы можем до конца света бродить». 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 131,
    text:
      `
        Однако, учитывая мои предыдущие попытки докопаться до истины, я решил не тревожить доктора и увидеть уже наконец своими глазами, к чему привел этот долгий путь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 132,
    text:
      `
        Чем больше я находился в часовне, тем сильнее внутренне негодовал: почему Мортимер не позаботился о моих мерах предосторожности от чумы? 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 133,
    text:
      `
        «Предполагаю, особо больные содержатся в другом месте».
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Bunkplace.jpg')
  },

  {
    id: 134,
    text:
      `
        По иронии, Мортимер повел меня в соседнюю комнатку, заставляя еще больше поддаться страху. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 135,
    text:
      `
        В ее центре стоял длинный стол, на котором лежало тело, укрытое белым покрывалом. Страшно воняло какими-то медикаментами, в большей степени спиртом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 136,
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
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) < 100
        },
        goTo: 137
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) >= 100
        },
        goTo: 144
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 137,
    text:
      `
        Меня терзали сомнения относительно того, как мы проникли сюда. Тот бугай явно не собирался пропускать нас, пока мы не сказали тот секретный код. Чутье не подвело.
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 138,
    text:
      `
        Но при чем тут некое братство? И почему Мортимера в условиях эпидемии ограничивают в доступе к больным?
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 139,
    text:
      `
        — Док... а почему тот мужик нас не пропускал?
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 140,
    text:
      `
        — Он вполне ясно дал понять, что некое братство не хочет знакомить кого-либо с телом погибшего. Считайте — нам крупно повезло попасть сюда.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 141,
    text:
      `
        — Но вы же доктор... разве у вас нет права свободно ходить по часовне?
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 142,
    text:
      `
        — Я веду частную практику, но разрешение у меня имеется. К сожалению, когда кто-то хочет что-то скрыть, моего положения оказывается недостаточно. К тому же с местными властями у нас сложилось определенное недопонимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 143,
    text:
      `
        Я нахмурился, но решил не допытывать доктора, а сосредоточиться на мертвеце.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 144,
    text:
      `
        И только сейчас меня осенило. Один вопрос все вертелся на языке, но я никак не мог понять, что именно в данной ситуации меня смущает больше всего.
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 145,
    text:
      `
        «Почему столько трудностей? Мы же могли просто войти сюда через парадный вход. Получается, что он не может свободно ходить здесь, когда ему вздумается?»
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 146,
    text:
      `
        — Док. Эй, док, — еле слышно прошептал я, похлопав Мортимера по плечу.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 147,
    text:
      `
        — Да, господин Гарнер? 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 148,
    text:
      `
        — Вы же врач. Зачем мы вообще сейчас прячемся? Разве это не привычное для вас место посещения?
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 149,
    text:
      `
        — Сомневаюсь, что появлению моей персоны будут конкретно рады именно в этой комнате. К тому же у меня возникло некоторое недопонимание с властями города. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 150,
    text:
      `
        — Какого рода недопонимание? Вы как и тот бард рискуете оказаться за решеткой?
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 151,
    text:
      `
        — Оставим этот разговор на следующий раз. У нас есть задача поважнее.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 152,
    text:
      `
        — Эх... ладно. Но что с этим человеком? Зачем он вам нужен? 
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 153,
    text:
      `
        — Судя по тому, что кордон у городских ворот выставили недавно, значит, убийство, как минимум произошло ночью. И соответственно, тело оставили лежать здесь для последующего вскрытия. Как я погляжу, оно еще не было произведено. Прекрасная возможность проявить свои врачебные навыки.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 154,
    text:
      `
        После этих слов доктор расправил свою мантию, где в ее задней части располагался небольшой набор медицинских инструментов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 155,
    text:
      `
        Я помялся некоторое время рядом, но все же шепотом решил уточнить:<p>— Вы и правда привели меня поглазеть на труп? Я до сих пор не вижу связи между бегством из Гласвера и... вскрытием?
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 156,
    text:
      `
        — У меня есть определенные сомнения насчет этого убийства. Я же говорил. Как только я получу нужные ответы, я смогу понять, как нам отсюда сбежать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 157,
    text:
      `
        — Эм... ладно-ладно. Мне что делать? Стоять на страже? 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 158,
    text:
      `
        — Не имеет смысла, я услышу приближение посторонних. Теперь, пожалуйста, создайте для меня тишину.
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 159,
    text:
      `
        В течение следующего получаса Мортимер работал над телом. Движения его были осторожными и медленными. Орудовал он небольшим ножичком, тщательно вымеряя свой следующий надрез.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    simple: require('../../../../Audio/ROR/Cutting.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 160,
    text:
      `
        «Настоящий профессионал. Теперь мне будет гораздо спокойнее путешествовать со своими пассажирами».
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 161,
    text:
      `
        Под конец этой импровизированной операции, он взял немного крови у погибшего, погрузив ее в небольшую колбу, и спрятав в задний карман.
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 162,
    text:
      `
        — А это зачем? — я решил нарушить молчание своим вопросом.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 163,
    text:
      `
        — Последний штрих в нашем маленьком расследовании. Я передам это Дитриху для анализа. Теперь посмотрите... если не брезгуете, — Мортимер указал на покойника, продолжая рассуждения. — Горло перерезано, но смерть наступила не от этого. Жертва была задушена. Скорее всего толстой веревкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 164,
    text:
      `
        — Повешение? Или просто накинули удавку?
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 165,
    text:
      `
        — Скорее второй вариант. Сама шея сломалась бы при повешении. Очевидно, что произведено вмешательство кого-то постороннего. Но мы не должны исключать все варианты, как, например, отравление. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 166,
    text:
      `
        — Могли ли над ним издеваться? Невозможно же внезапно накинуть целую петлю и закрепить ее без сопротивления. Убийца кто-то больно сильный. Мужик этот слабаком не выглядит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 167,
    text:
      `
        — А вот это уже самое интересное. Помимо удушения, следов борьбы на теле не наблюдается.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 168,
    text:
      `
        — Он что, позволял себя душить добровольно? 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 169,
    text:
      `
        — Это самый логичный вывод. Но обратите внимание на еще одну интересную деталь. Руки. Они в синяках, порезах, проглядываются следы от уколов.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 170,
    text:
      `
        — Возможно, жертва под воздействием дурманящих веществ занималась самоистязанием, а затем кто-то перерезал ему горло, чтобы обставить все как простое убийство.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 171,
    text:
      `
        — Неужели все сводится к тому, что целый город закрыли из-за этого хера?
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 172,
    text:
      `
        — Они прикрываются карантином, хотя любой коронер с легкостью определил бы отсутствие насильственной смерти, — Мортимер отошел от тела. — Этот человек некто очень важный. И скорее всего к делу подключена городская верхушка. Как минимум, я бы поостерегся в дальнейшем вступать в контакт со стражей.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    message: 'Коронер — в средние века лицо, проводящее вскрытие погибшего и определяющее причину смерти',
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 173,
    text:
      `
        — Нам не обязательно копать так глубоко. Стоит попытаться отыскать старую-добрую брешь в стене или выйти на других контрабандистов, — проговорил я, пожав плечами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 174,
    text:
      `
        — Мы и так рискуем, задерживаясь в Гласвере. Вернемся к остальным и подумаем в более безопасном месте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 175,
    text:
      `
        «Я должен что-то придумать. В голове, конечно, вертится одна призрачная надежда на сомнительного знакомого. А вот осуществимо ли это?»
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 176,
    text:
      `
        — Ч-что? Кто вы такие?! Вам сюда нельзя!
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageFront: require('../../../../Images/ROR/Persons/Stranger_Scared.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 177,
    text:
      `
        Мы с Мортимером резко обернулись. За нашими разговорами мы и не заметили, как в комнату зашел один из служащих часовни.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 178,
    text:
      `
        «Это вот так док обещал услышать приближение посторонних?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 179,
    text:
      `
        Молодой парень с длинными волосами, доходящими почти до плеч, испуганно наблюдал за нами, поглядывая в сторону тела. В дрожащей руке он сжимал ручку крупного фонаря.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    imageFront: require('../../../../Images/ROR/Persons/Stranger_Scared.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 180,
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
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) < 100
        },
        goTo: 181
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) >= 100
        },
        goTo: 183
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 181,
    text:
      `
        Я закусил губу и осмотрелся. Того бугая, Эмиля, было нигде не видать. Да и чем он мог помочь? Нас ведь застукали рядом со вскрытым трупом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 183,
    text:
      `
        «Простой служащий ведь... может, удасться решить все мирно?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 184,
    text:
      `
        Мортимер, однако, насторожился и не произнес ни слова. Я же выставил руки в примирительном жесте и стал медленно приближаться к незнакомцу.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 185,
    text:
      `
        — Спокойно, мы не хотим пробле...
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 186,
    text:
      `
        Юнец окончания фразы не услышал. Быстро развернувшись, он побежал в сторону комнат с больными.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 187,
    text:
      `
        «Мы рискуем привлечь к себе слишком много внимания. Нужно что-то быстро предпринять».
      `,
    buttons: [
      {
        text: 'Убить незнакомца',
        goTo: 188,
        func: () => {
          timer.stop()
        }
      },
      {
        text: 'Броситься наутек',
        goTo: 205,
        func: () => {
          timer.stop()
        }
      }],
    beforeBegin: () => {
      timer.set(7, () => { scenarioManager.beginScene(205) })
    },
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 188,
    text:
      `
        Нельзя было позволить ему уйти. Труп рано или поздно обнаружат, но хотя бы стражи порядка не получат описания и приметы наших персон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageFront: require('../../../../Images/ROR/Persons/Stranger_Scared.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [{ story: EStoriesEn.ROR, category: 'Choice', id: 'KillStranger', value: +1 }],
    achievement: { story: EStoriesEn.ROR, name: 'KillStranger' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 189,
    text:
      `
        Еще до того как парень выбежал за пределы комнаты, я незамедлительно среагировал и смог успеть с силой схватить его за руку и притянуть к себе. Он издал испуганный крик и выронил свой фонарь, пытаясь защититься от меня всем, чем мог.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 190,
    text:
      `
        В бой вступали острые ногти, отчаяние и нелепое желание жить в столь противоречивом мире.
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageFront: require('../../../../Images/ROR/Persons/Stranger_Scared.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 191,
    text:
      `
        Но все это меркнет, когда твои глаза застилает пелена ненависти и смерти. 
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 192,
    text:
      `
        В легкой для меня схватке, я одним простым движением смог сломать цыплячью шею несчастного. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 193,
    text:
      `
        Я ничего не почувствовал. Будто бы просто выполнил свою работу. То, чем я занимаюсь по сути сопряжено с риском и определенным насилием. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 194,
    text:
      `
        «Одной жертвой больше, одной меньше». 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body.jpg')
  },

  {
    id: 195,
    text:
      `
        Мортимер, в отличие от меня, был весь на иголках. Разбившаяся лампа дала волю огню, который быстро разгорался из-за хиленьких стен часовни и лежавших на полу простыней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    simple: require('../../../../Audio/ROR/Glass.mp3'),
    ambient: require('../../../../Audio/ROR/Fire.mp3'),
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 196,
    text:
      `
        Нельзя было тратить драгоценное время. Здание не спасти, а выход отрезан столпом обжигающего пламени.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 197,
    text:
      `
        «Можно попытаться выбраться через окно, пока мы еще не надышались дымом».
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 198,
    text:
      `
        За стеной огня были слышны испуганные крики пациентов. Мортимер, как будто потеряв остатки самообладания, послушно последовал моим указаниям и побежал за мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 199,
    text:
      `
        Окно не поддавалось, поэтому мне пришлось выбить его силой. Часть осколков полетело мне прямо в лицо, но я спокойно стерпел боль.
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Body_Fire.jpg')
  },

  {
    id: 200,
    text:
      `
        Выпрыгнув на улицу с задней стороны часовни, я заметил, как к парадному входу, стремительно приближается группа стражников. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 201,
    text:
      `
        Я помог Мортимеру благополучно спуститься и мы поспешили покинуть место преступления. Постоянно оборачиваясь, не было заметно преследования, а значит — план сработал.
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    message: 'Самочувствие Генриха ухудшается на 10%',
    stats: [
      { story: EStoriesEn.ROR, value: -10, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 202,
    text:
      `
        — Что мы наделали... нельзя же было так... сколько людей погибло. Неужели вы не могли быть осторожнее? — тихо шептал Мортимер.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 203,
    text:
      `
        — У нас не было выбора, доктор. И смерть этих бедолаг — всего лишь несчастный случай. Давайте. Нужно продолжать бежать к повозке, пока они не поняли, что к чему.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 204,
    text:
      `
        Мортимер нервно и дергано кивнул, хотя было очевидно, что он категорически не согласен с моим сделанным выбором.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    ambient: require('../../../../Audio/Common/Silence.mp3'),
    message: 'Мортимер сильно разочарован вашим решением',
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [{ story: EStoriesEn.ROR, value: -2, category: 'Person', id: 'Mortimer' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel_Fire.jpg')
  },

  {
    id: 205,
    text:
      `
        «К черту этого щенка. Сейчас гораздо важнее, как можно быстрее покинуть здание и не нарваться на стражу. Вряд ли за такое короткое время незнакомец разглядел наши лица».
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 206,
    text:
      `
        Крайне наивное умозаключение, но иного выбора у нас не было.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 207,
    text:
      `
        Долго не думая, я беспардонно схватил доктора за руку и рванул к ближайшему витражному окну. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 208,
    text:
      `
        Окно не поддавалось, поэтому мне пришлось выбить его силой. Часть осколков полетело мне прямо в лицо, но я спокойно стерпел боль.
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 209,
    text:
      `
        Выпрыгнув на улицу с задней стороны часовни, я заметил, как к парадному входу стремительно приближается группа стражников. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 210,
    text:
      `
        Я помог Мортимеру благополучно спуститься и мы поспешили покинуть место преступления. Постоянно оборачиваясь, не было заметно преследования, а значит — план сработал. Потому мы как можно скорее поспешили прочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    message: 'Самочувствие Генриха ухудшается на 10%',
    stats: [
      { story: EStoriesEn.ROR, value: -10, category: 'Effect', id: 'Health' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 211,
    text:
      `
        Доктор стал тяжело дышать, видимо, частные физические нагрузки все же утомили его. Но он терпел. Как и я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Chapel.jpg')
  },

  {
    id: 212,
    text:
      `
        Город мирно дремал, казалось, вовсе не замечая той шумихи, что происходила в одном из его темных участков. А мы лишь проходили мимо, стараясь как можно быстрее вернуться к остальным. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 213
      }],
    music: require('../../../../Audio/ROR/City.mp3'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 213,
    text:
      `
        Мортимер не убирал руки со своего заднего кармана. Он выглядел так, словно его открытие должно было перевернуть устои этого города. Но я не разделял этого энтузиазма. 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 214,
    text:
      `
        Мысленно, я уже пытался расписать план действий. Пускай Мортимер занимается своими исследованиями с тем психованным алкоголиком, меня куда сильнее заботили последствия нашей ночной вылазки. Какой был риск того, что они узнают, где мы остановились? 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 215,
    text:
      `
        Ведь разговор с Отто так или иначе мог выдать наше местоположение. Или по крайне мере навести на личности, которые буянили в городе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 216,
    text:
      `
        «Что потом? Зависит уже от того, что обнаружит доктор. И все же, прежде чем думать о будущем, нужно переговорить с тем бардом. Мне кажется, он знает очень много о происходящем в городе».
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 217,
    text:
      `
        Погруженный в размышления, я на несколько минут перестал различать перед собой дорогу. Просто знал, где находится пункт назначения и шел по инерции.
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 218,
    text:
      `
        Забавно, если бы кто-то захотел напасть на нас — лучшего момента не сыскать. Но все же из душевного равновесия меня выбило нечто иное. 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 219,
    text:
      `
        — Эй, господа! 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    darkSilhouette: true,
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 220,
    text:
      `
        Я резко развернулся и потянулся за ножом, опасаясь за свою жизнь. И сколько за сегодня мне пришлось раз испугаться? Нервы совсем ни к черту. Но передо мной оказался вовсе не представитель закона.
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 221,
    text:
      `
        Это был неказистый, сутулый и худощавый человек, одетый в одежду путешественника. На вид около тридцати лет. Спокойной наружности, с короткими коричневыми волосами, немного взвинченными на висках.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 222,
    text:
      `
        Отчего-то я пришел в неописуемую ярость. Скорее всего дело было в «насыщенном» дне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 223,
    text:
      `
        Да и доктор выглядел напряженно, к тому же ему хотелось поскорее вернуться к своим делам, а не разбираться с сомнительными личностями.
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 224,
    text:
      `
        «Нужно избавиться от этого попрошайки».
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 225,
    text:
      `
        Но я не мог вымолвить ни слова. Они лезли из глотки столь мощным потоком ругательств, что в итоге просто застревали в ней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 226,
    text:
      `
        Смотря на улыбающуюся физиономию незнакомца, я даже не находил в себе силы дать ему по роже за то, что тот подкрался к нам в ночи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 227,
    text:
      `
        — Не желаете ли что-нибудь приобрести? — высоким громким голосом пролепетал человечек.
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 228,
    text:
      `
        — Мужик... ты хоть понимаешь, какой сейчас час? Ты неожиданно появляешься вот так и... 
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 229,
    text:
      `
        — О, прошу прощения. Просто вы так опечалены. Я и решил, что вам пригодятся мои товары. Я Хьюго Эбер! — невозмутимо пролепетал торговец, протянув мне руку в перчатке.
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 230,
    text:
      `
        «Малахольный какой-то... поскорее бы от него свалить. Но... такого и обижать как-то противно. Ладно, подыграю ему, может, потом отвалит». 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 231,
    text:
      `
        Я немного брезгливо посмотрел на его руку. Все же это было выше моих сил. Тем более неизвестно, что это рука могла еще трогать. Демонстративно отвернувшись, я показал свое нежелание контактировать.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 232,
    text:
      `
        Мортимер незаметным движением привлек мое внимание и постучал пальцем по запястью, напоминая, что у нас не так много времени. Возможные преследователи уже могли наступать нам на пятки.
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 233,
    text:
      `
        — Прошу прощения, но мы очень заняты, — отмахнулся я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 234,
    text:
      `
        — О! Надолго я вас не задержу, — незнакомец радушно развел руками, — Сэр! Я просто уверен, что вы обязаны взглянуть на мой ассортимент. Много времени это не отнимет.
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 235,
    text:
      `
        Мужичок скользнул в сторону одного из зданий, где располагалась его маленькая тележка. Беглым взглядом я осмотрел выставленные на продажу товары.
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 236,
    text:
      `
        Сплошная чепуха: всякие амулеты и прочие безделушки вроде защитных оберегов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 237,
    text:
      `
        Я вздохнул и повернулся к Мортимеру, чтобы больше тут не задерживаться, но Хьюго в один момент оказался прямо перед моим лицом. В руках он сжимал черный потертый флакон. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 238,
    text:
      `
        — Вот. Взгляните. У такого статного господина как вы, наверняка нет продуху от поклонниц. Эти духи прямиком с востока станут замечательным подарком для вашей избранницы. Всего каких-то двадцать крон, и этот редчайший экземпляр будет ваш. 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageFront: require('../../../../Images/ROR/Items/Perfume.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 239,
    text:
      `
        Этот тип так настойчиво пихал мне в лицо свой флакон, что мне не терпелось оттолкнуть его, а склянку разбить. Зачем мне эта дрянь? Монашке что ли этой дарить? Хотя... может, потом удастся это перепродать? 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageFront: require('../../../../Images/ROR/Items/Perfume.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 240,
    text:
      `
        «Да и в пути, наверняка будут встречаться красивые девушки, как Марта, но только с этим их будет гораздо проще обольстить. Стоит ли сделка того?»
      `,
    buttons: [
      {
        text: 'Купить духи',
        goTo: 241
      },
      {
        text: 'Не покупать духи',
        goTo: 258
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 241,
    text:
      `
        
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) < 20
        },
        goTo: 251
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Money' }) >= 20
        },
        goTo: 242
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 242,
    text:
      `
        Тяжело вздохнув, я достал кошелек и отсчитал ровно двадцать крон. Монеты со звоном угодили в руки прохвоста. Тот расплылся в хищной улыбке и чуть ли не швырнул мне свои духи.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageFront: require('../../../../Images/ROR/Items/Perfume.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: -20, category: 'Item', id: 'Money' },
      { story: EStoriesEn.ROR, value: +1, category: 'Item', id: 'Perfume' }],
    achievement: { story: EStoriesEn.ROR, name: 'BuyPerfume' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 243,
    text:
      `
        — Вы не прогадали, сэр! Надеюсь, наши пути еще пересекутся! Могу ли я узнать ваше имя для предоставления скидки в следующий раз? 
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 244,
    text:
      `
        — Генрих... — выпалил я, сам не понимая, зачем.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 245,
    text:
      `
        В один момент Хьюго забыл обо мне и спешным шагом ринулся к своей повозке. Я же покачал головой и про себя проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 246,
    text:
      `
        «Надеюсь, что нет».
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 247,
    text:
      `
        Мортимер, наблюдая за этим, только недовольно покачал головой. Ему явно не понравилась такая растрата средств. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 248,
    text:
      `
        Но деньги всегда можно было приобрести. А вот поистине редкие товары добыть гораздо сложнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 249,
    text:
      `
        Я не исключал, что меня вполне могли обмануть. Но и я красивым словом не обделен. Даже сам такой флакон можно было загнать за куда более весомую цену. 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 250,
    text:
      `
        Не теряя больше времени, мы с доктором продолжили наш путь «домой». 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 251,
    text:
      `
        Тяжело вздохнув, я открыл кошель и попытался отсчитать названную сумму — двадцать крон. Но увы, весь наш бюджет оказался сожран прошлыми сделками. Поправив воротник куртки, я хмыкнул и проговорил.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageFront: require('../../../../Images/ROR/Items/Perfume.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 252,
    text:
      `
        — К сожалению, столько у меня не наберется.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 253,
    text:
      `
        — Ох... какая досада, — сокрушенно вздохнул Хьюго.
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 254,
    text:
      `
        — Договоримся?
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 255,
    text:
      `
        — Увы... я предпочитаю вести дела с твердо устоявшимися цифрами... может, наши пути еще пересекутся? А пока... — торговец раздосадованно расставил руки.
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 256,
    text:
      `
        Закатив глаза, я спешно попрощался и направился к Мортимеру. Он встретил меня кивком и мы продолжили путь.
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 258,
    text:
      `
        Однако здравый смысл всё же взял вверх. Нечего тратить деньги на такую дурость. Себя бы прокормить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageFront: require('../../../../Images/ROR/Items/Perfume.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 259,
    text:
      `
        Жестом велев Хьюго остановиться, я аккуратно обошел его и пожал плечами:
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 260,
    text:
      `
        — Извините, стеснены в средствах. Как-нибудь в следующий раз.
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageFront: require('../../../../Images/ROR/Items/Perfume.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 261,
    text:
      `
        Послышался громкий вздох, и торговец отступил назад к своей телеге. Некоторое время он смотрел в пол, но затем снова уставился на меня пронзительным взглядом, улыбнувшись во всю ширь рта. 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 262,
    text:
      `
        — Тогда до следующих встреч, уважаемый! Позвольте узнать ваше имя?
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 263,
    text:
      `
        — Генрих... — выпалил я, сам не понимая, зачем.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 264,
    text:
      `
        Впрочем, Хьюго достаточно быстро потерял ко мне какой-либо интерес. Просто поклонился и вернулся к своим товарам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageFront: require('../../../../Images/ROR/Persons/Hugo.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 265,
    text:
      `
        Мортимер встретил меня кивком, видимо обрадовавшись, что я решил сэкономить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer_Mask.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 266,
    text:
      `
        Больше мы не заостряли внимание на странном торговце, а поспешили продолжить путь «домой».
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night_Carete.jpg')
  },

  {
    id: 268,
    text:
      `
        С горем пополам мы все же добрались до повозки. Немного переведя дух, я на всякий случай осмотрел транспорт на предмет повреждений.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 269,
    text:
      `
        Все было в порядке. Лошади стояли смирно, повернув морды в мою сторону. Остальные встретили нас тревожными взглядами. На их лицах будто бы застыл немой вопрос: «Как все прошло», но я вовремя пресек обсуждение.
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 270,
    text:
      `
        — Я пока переставлю телегу. Потом поговорим. Доктор, делайте, что хотели.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 271,
    text:
      `
        Мортимер коротко кивнул, отправившись внутрь вагончика. Я, в свою очередь, забрался на козлы и отъехал чуть поодаль от прошлого места стоянки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 272,
    text:
      `
        Пришлось преодолеть пару улиц, но это была вынужденная мера для нашей безопасности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 273,
    text:
      `
        «Ведется ли преследование? Эта неопределенность меня доконает. Как и ожидание. Было бы проще, если я знал наверняка, что меня вздернут».
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 274,
    text:
      `
        Наконец, телега оказалась в другой части города, скрытой от посторонних глаз. Ранее тут был один из моих схронов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageFront: require('../../../../Images/ROR/Objects/Carete.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 275,
    text:
      `
        Из-за постоянного расширения города, некоторые улочки становились слишком труднодоступными. А в такое место стражи порядка элементарно не протиснутся со своим жирным брюхом.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 276,
    text:
      `
        Я решил направиться внутрь повозки, чтобы проверить, как идут дела у Мортимера. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Glaswer_Night.jpg')
  },

  {
    id: 277,
    text:
      `
        Он впервые за все время нашего общения снял свою маску. Под ней оказался сухонький старичок, вполне себе с обыкновенным лицом и усталым видом. Я настолько привык видеть его в образе доктора, что мне показалось — так, он даже терял какой-то флер загадочности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 278,
    text:
      `
        Мортимер вовсю что-то обсуждал с Дитрихом. Ассистент времени не терял и принялся смешивать в своих колбах некие растворы, отчего от его рабочего стола стал исходить неприятный запах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    parallax: 'right',
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 279,
    text:
      `
        От него Джоанна недовольно прикрыла руками нос. Выглядела она сонливо, очевидно наш ночной приход разбудил ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/ROR/Persons/Joanne.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 280,
    text:
      `
        Виг смерил меня недовольным взглядом, а затем приобнял сестренку, пытаясь успокоить ее поглаживаниями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 281,
    text:
      `
        Марта смотрела то на доктора, то на меня, пытаясь переварить происходящее. Было видно, что у нее на уме вертелось множество вопросов. Но сейчас она должна находиться рядом с детьми, чтобы они меньше нервничали.
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    parallax: 'right',
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 282,
    text:
      `
        Но вот кто действительно выглядел как не в своей тарелке, так это бард. Юнец вздрагивал от каждого шороха и хаотично перебирал пальцами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 283,
    text:
      `
        То, что доктор и слуга-алкоголик начали проводить некие эксперименты с кровью, явно беспокоили его сильнее всего.
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 284,
    text:
      `
        Я был изрядно замучен сегодняшним днем, поэтому решил начистоту поговорить с пассажиром, который ютился возле сумок доктора. Бард так резко дернулся от моего приближения, что у него перехватило дыхание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 285,
    text:
      `
        «Крысы его дери, этот парень сейчас в обморок свалится».
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 286,
    text:
      `
        Я немного сжалился над несчастным, но допрос откладывать не собирался. Скрестив руки и смерив барда суровым взглядом, произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 287,
    text:
      `
        — Нам надо поговорить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 288,
    text:
      `
        — Здесь? — растерянно проговорил юноша, осмотревшись по сторонам, — и... о чем? 
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 289,
    text:
      `
        — Успокойся. Я просто хочу разобраться в происходящем. Нарушать условия договора — не собираюсь Если ты заплатил за перевозку, я тебя вывезу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 290,
    text:
      `
        — Я... я слушаю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 291,
    text:
      `
        — Во-первых, тогда не было возможности спросить, но... как тебя вообще звать?
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 292,
    text:
      `
        — Джек... Джек Рейнер.
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 293,
    text:
      `
        — Генрих. Генрих Гарнер, — проговорил я, протягивая руку и закрепляя знакомство. Бард ответил на приветствие. — Джек... имя иностранное. Ты с севера?
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 294,
    text:
      `
        — Да. С островов. Но... извините, зачем вам эта информация?
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 295,
    text:
      `
        — Мне всё интересно, как иностранец оказался у нас в Крейсе, в богом забытой стране и в еще более дохлом городе, из которого теперь отчаянно пытается сбежать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 296,
    text:
      `
        — Вы же... вы сказали, что вас это не интересует.
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 297,
    text:
      `
        — Неправильно. Я сказал, что не собираюсь нарушать условия контракта. Но мне важно знать, кого я перевожу, чтобы понимать, какие опасности ждут впереди. 
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 298,
    text:
      `
        —  То, что я не расспросил тебя с самого начала — это моя ошибка. Но теперь я буду ее исправлять. Таков закон чести в моей профессии. Итак, Джек. Почему ты скрываешься? 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 299,
    text:
      `
        
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Person', id: 'Jack' }) >= 1
        },
        goTo: 315
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Person', id: 'Jack' }) < 1
        },
        goTo: 300
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 300,
    text:
      `
        Бард начал часто моргать, на первых порах явно обескураженный моим излишним любопытством. 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 301,
    text:
      `
        Но затем в его глазах блеснул весьма недобрый огонек. То, что сейчас было весьма некстати... чувство собственного достоинства. 
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 302,
    text:
      `
        — Умерьте ваш пыл, господин Гарнер. Я ни в чем не виноват, и вам этого будет достаточно. Никто не имеет право вести себя со мной так высокомерно.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 303,
    text:
      `
        Наглость этого мальчишки вывела меня из себя. Перед глазами в один момент как будто все побелело. Повинуясь внезапной вспышке гнева, я схватил его за шкирку, после чего встряхнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    message: 'Бард помнит вашу жадность и обижается на вас',
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 304,
    text:
      `
        — Может, мы обсудим этот вопрос на улице? Я постараюсь втолковать тебе свою позицию более доходчиво. Но начну здесь. Сейчас в городе происходит какая-то опасная хрень. А ты вероятнее всего в курсе происходящего, убогий, и ответы мне нужно получить сейчас же.
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 305,
    text:
      `
        Разумеется наш спектакль был прекрасно виден и другим пассажирам. Даже Дитрих с Мортимером отвлеклись от своих исследований, пристально наблюдая за ситуацией.  
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 306,
    text:
      `
        Поначалу алхимик выглядел немного растерянным, но затем на его лице блеснула недобрая издевательская ухмылка. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 307,
    text:
      `
        Мортимер не двигался с места, продолжая держать свои эксперименты в руках. Он смотрел на все это с недобрым взглядом и был готов остановить меня, если бы я попытался исполнить свой приговор Джеку.
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 308,
    text:
      `
        Виг прикрывал собой Джоанну, стараясь спрятать ее от любой опасности. Мальчик сильно сжимал кулаки и был вне себя от гнева.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 309,
    text:
      `
        Но ярче всех отреагировала Марта. Она подскочила и направилась ко мне, потянув за рукав. В порыве гнева я хотел оттолкнуть ее, но к счастью, приступ ярости начинал спадать, потому я просто проигнорировал вмешательство монахини.
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 310,
    text:
      `
        — Во имя Всевышнего, господин Гарнер, прекратите немедленно! Разве так поступают благородные господа?
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 311,
    text:
      `
        — Не припомню, когда я таковым стал. Прошу, не препятствуйте. Я стараюсь ради нашего же блага.
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 312,
    text:
      `
        — Не уйду, пока вы немедленно не прекратите это издевательство! 
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 313,
    text:
      `
        — Сэр... я... я всё скажу. Только не бейте! Я понял ошибку... пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 314,
    text:
      `
        Я выдохнул и отпустил барда. Марта посмотрела на меня с презрением и вернулась к детям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    message: 'Ваши отношения с пассажирами изменились ',
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    stats: [
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Martha' },
      { story: EStoriesEn.ROR, value: -2, category: 'Person', id: 'Jack' },
      { story: EStoriesEn.ROR, value: +1, category: 'Person', id: 'Ditrich' },
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Joanne' },
      { story: EStoriesEn.ROR, value: -1, category: 'Person', id: 'Vig' }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 315,
    text:
      `
        Джек выглядел страшно растерянным, но со временем самообладание начало к нему возвращаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 316,
    text:
      `
        Он поднял голову и коротко кивнул. <p>— Я понимаю. Я всё скажу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 317,
    text:
      `
        Юноша взял небольшую паузу, перед тем, как начать свой рассказ. Он в последний раз окинул взглядом собравшихся и неуверенно спросил:<p>— Сэр... а обязательно это делать при всех?
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 318,
    text:
      `
        — У тебя от кого-то здесь есть тайны?
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 319,
    text:
      `
        — Нет, но... ладно. Я вас понял. 
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 320,
    text:
      `
        — Я оказался в Гласвере несколько недель назад. Скажем так, в одном из ранее посещенных городов у меня был крайне приятный опыт общения с достойной дамой... и не слишком приятное знакомство с ее мужем, о котором мне ничего не сказали! Готов вас уверить! 
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 321,
    text:
      `
        В отдалении послышался смешок Дитриха, но Мортимер быстро приструнил его легким толчком локтя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 322,
    text:
      `
        Джек явно смутился от такой реакции, но под моим жестким взглядом не стал противиться и продолжил.
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 323,
    text:
      `
        — Так вот... как вы понимаете, мне нужно было срочно бежать в земли другого сеньора, где меня не смогли бы достать. Гласвер оказался ближайшим городом, подходящим под нужды. Здешний бургомистр, господин Лоренц Ульбрихт, с радостью принял скромного барда под свое крыло.
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 324,
    text:
      `
        — Не знал, что эта свинья — поклонник искусств, — хмыкнул Дитрих.
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 325,
    text:
      `
        Марта в ответ на эти слова ахнула и закрыла уши Джоанне.
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 326,
    text:
      `
        Дитриха снова постигла кара Мортимера. На этот раз удар был более существенен. Алхимик не стал больше препираться и вернулся к делам.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 327,
    text:
      `
        — Он... действительно любил искусство. Устраивал пышные приемы. Я даже начал уставать от их количества, так как моя музыка играла практически на каждом, — продолжил Джек.  — Но... в один момент я стал замечать кое-какие странности. Господин увлекся... странного рода развлечениями.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 328,
    text:
      `
        — Какого рода? — поинтересовался Мортимер.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 329,
    text:
      `
        — Ну... господин принимал некие... не слишком полезные препараты.
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 330,
    text:
      `
        — Ясно. Жирдяй подсел на наркоту, — не успокаивался Дитрих. 
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 331,
    text:
      `
        — В общем... это был только первый тревожный звоночек. Затем во дворце стали появляться странные люди в масках. А господин стал устраивать целые пиршества. Недавно на одном таком бал-маскараде, был убит гость.
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 332,
    text:
      `
        — И как вы догадались — ваш покорный слуга стал свидетелем всего этого. От ужаса у меня даже онемели руки, но через силу пришлось продолжить играть, так как я понимал, что нахожусь на волосок от смерти.
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 333,
    text:
      `
        Марта все так же закрывала руками уши Джоанны. На ее лице отражался ужас и отчаяние. Даже Дитрих оставил свои колкие комментарии при себе.
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 334,
    text:
      `
        — Я не горю желанием рассказывать, что было дальше. Поймите, все они стали будто бы сходить с ума. Разумеется, моя безопасность превыше всего, поэтому я решил улизнуть. Но теперь они закрыли город...
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 335,
    text:
      `
        — Получается, что причина закрытия города: неадекватные аристократы, — подытожил Мортимер. — Но меня еще кое-что смущает... ваш друг, Генрих, говорил, что поначалу убивали всех без разбору, намекая на низшее сословие, а потому власти ничего не предпринимали.
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 336,
    text:
      `
        — Все верно, они просто ловили бездомных, — ответил Джек, — но... затем им этого оказалось мало. 
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 337,
    text:
      `
        Разговор на некоторое время оказался прерван очередным вмешательством Дитриха. Он немного потряс в руке колбу с неким раствором и важно заявил:
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 338,
    text:
      `
        — Красавчик говорит правду. В крови содержится большое количество наркотических и спиртосодержащих веществ. Жертва на момент смерти была просто вусмерть пьяная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 339,
    text:
      `
        Я потер подбородок и задумчиво замычал. В голове начала зарождаться безумная идея. 
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 340,
    text:
      `
        — Джек, как часто проводились эти праздники?
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 341,
    text:
      `
        — На момент, когда я сбежал... каждую ночь. Около десяти часов вечера, если мне не изменяет память.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 342,
    text:
      `
        
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Letter01' }) >= 1
        },
        goTo: 343
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.ROR, category: 'Item', id: 'Letter01' }) <= 0
        },
        goTo: 347
      }
    ],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 343,
    text:
      `
        Мы с Мортимером синхронно посмотрели друг на друга. Вспомнив записку и таинственного незнакомца, много чего стало обретать смысл.
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 344,
    text:
      `
        — Отто знал об этом. Он сознательно дал на них наводку. Неужели наш единственный способ сбежать — связаться с какими-то психами? — произнес я, пребывая в легком замешательстве. — Или же этот сукин сын заманивает нас в ловушку?
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 345,
    text:
      `
        — Да... теперь я ни капли не сомневаюсь в решении воспользоваться их щедрым предложением. Ваш друг явно замешан в происходящем. Возможно, его мотивы вскроются позднее.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 347,
    text:
      `
        — Нам надо попасть туда. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 348
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 348,
    text:
      `
        — Что?! — в унисон прокричали Марта и Джек.
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 349,
    text:
      `
        — Слушайте... город заперт. Пути наружу нет. Эти парни — просто сибариты, упивающиеся наслаждениями и странной наркотической лабудой. Если бы мы смогли втереться к ним в доверие, нас бы выпустили.
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    message: 'Сибарит — термин, обозначающий аристократа, упивающегося роскошной жизнью',
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 350,
    text:
      `
        — Сомневаюсь, что они кого-то выпустят даже если вы с ними подружитесь. К тому же, не забывайте какого рода это мероприятие. Очень высока вероятность попадания под влияние различной дряни, — вздохнул Мортимер.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 351,
    text:
      `
        — Риск есть, но я не вижу другого выхода. Потому что действовать нужно быстро. Доктор, у вас имеются какие-нибудь средства, способные притупить опьянение? 
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 352,
    text:
      `
        — Изготовление такого рода препаратов может занять несколько дней... а вы, как я понимаю, хотите отправиться уже завтрашним вечером? 
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 353,
    text:
      `
        — Да... что ж, тогда придется действовать осторожнее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 354,
    text:
      `
        — И еще кое-что... обычно все приглашенные прибывали с парами, — вставил замечание Джек.
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 355,
    text:
      `
        — Значит, отправлюсь с Мартой, — я посмотрел на монахиню и подмигнул ей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 356,
    text:
      `
        — Что?! Да как вы такое в мыслях могли допустить?! Я служительница церкви, а не какая-то... прости меня господи, потаскуха!
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 357,
    text:
      `
        — Никто вас такой и не считает, но это нужно для побега.
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 358,
    text:
      `
        — Я не смогу отправиться в это царство порока! Вы хоть понимаете, насколько низко предлагать такое? 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 359,
    text:
      `
        — Да. Понимаю. А еще я понимаю, что если мы ничего не предпримем в течение нескольких дней, то нас арестуют и отправят на эти увеселения уже в качестве овечек на забой.
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 360,
    text:
      `
        — Я вынужден согласиться с господином Гарнером. Это наша единственная зацепка. Сделайте это не ради себя, а ради ваших воспитанников.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 361,
    text:
      `
        — Мне понятна ваша логика, но... за такое мне придется сложить с себя сан... это непростительно, — чуть ли не плача проговорила Марта.
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 362,
    text:
      `
        — Это подвиг во имя веры, — сочувственно проговорил Мортимер. 
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 363,
    text:
      `
        — Я... я соглашусь, если только мне не придется участвовать в их оргиях. Упаси меня господь. И чтобы ни одна из этих заблудших душ не смела ко мне прикасаться.
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageFront: require('../../../../Images/ROR/Persons/Martha.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 364,
    text:
      `
        — Я прослежу, чтобы вас никто и пальцем не тронул, — мягко проговорил я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 365,
    text:
      `
        Марта ответила на это удивленным взглядом, а затем стеснительной улыбкой. Она выглядела обеспокоенной, но услышав мою решимость в голосе — немного сбавила напряжение.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 366,
    text:
      `
        Но тут свои пять крон решил вставить старший из воспитанников монашки. Он скрестил руки и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 367,
    text:
      `
        — А наше с Джоанной мнение кого-нибудь интересует? Я против. 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 368,
    text:
      `
        Дитрих разразился в ответ на это мерзким смешком. Как же мне хотелось ударить эту скотину чем-то тяжелым. Впрочем, к пацану я сейчас испытывал схожие ощущения.
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageFront: require('../../../../Images/ROR/Persons/Ditrich.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 369,
    text:
      `
        «Только всё началось налаживаться, и теперь этот щенок встревает». 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 370,
    text:
      `
        Но все же мне удалось взять себя в руки. Я постарался уверить мальчика в надежности этой затеи исключительно правдивыми словами.
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 371,
    text:
      `
        — Виг, я буду защищать Марту. Даю слово, что с ней ничего не случится.
      `,
    buttons: [
      {
        text: '',
        goTo: 510
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 510,
    text:
      `
        Виг на это только сильнее нахмурился и наставил на меня два пальца, как бы демонстрируя, что проследит за этим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageFront: require('../../../../Images/ROR/Persons/Vig.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 372,
    text:
      `
        Я поборол в себе желание одарить его оплеухой и обратился уже к Джеку.
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 373,
    text:
      `
        — Джек. Ты говорил, что гости носили маски?
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 374,
    text:
      `
        — Да... они обставляли это безумие как праздник, называемый бал-маскарад.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageFront: require('../../../../Images/ROR/Persons/Jack.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 375,
    text:
      `
        — Надо будет завтра основательно подготовиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 376,
    text:
      `
        — Вы можете воспользоваться моими запасными масками. Они пока еще не пропахли чесноком, — пожал плечами Мортимер.
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    imageFront: require('../../../../Images/ROR/Persons/Mortimer.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  },

  {
    id: 377,
    text:
      `
        — Что ж... это будет забавно. Эти психи оценят, — я нервно засмеялся. — Пир во время чумы, и к ним приходят никто иные как чумные доктора.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('ROR', 'Глава 1', 'Часть 3', '0')
        }
      }],
    imageFront: require('../../../../Images/ROR/Persons/Henrich_Wounded.png'),
    imageBorder: require('../../../../Images/ROR/UI/Border.png'),
    achievement: { story: EStoriesEn.ROR, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/ROR/Backgrounds/Inside_Carete.jpg')
  }
])

