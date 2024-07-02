import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { whiteFlash } from '../../../../Components/Slide/Slide'
import { askedAmount, choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.Immortals, chapterName: 'Глава 1', partName: 'Часть 2', code: '0' }, [
  {
    id: 0,
    text:
      `
        Большое количество громких звуков заставило меня прийти в себя и попытаться открыть глаза. 
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    message: '<i> Нью-Йорк 1885 год',
    music: require('../../../../Sounds/Immortals/NY.mp3'),
    ambient: require('../../../../Sounds/Immortals/NY_Humble.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 1,
    text:
      `
        Череда ярких вспышек, перетекающих в головокружение, не давали мне окончательно сосредоточиться на происходящем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    beforeBegin: whiteFlash,
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 2,
    text:
      `
        Незнакомое окружение проступало сквозь затуманенное сознание. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 3,
    text:
      `
        Одетые во фраки мужчины, с причудливыми тростями в руках. Лошади, тянущие за собой кареты. Невиданные мною ранее здания, которые были увешаны завлекающими вывесками. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 4,
    text:
      `
        Впереди, на крыше одного из домов, развевался американский флаг, а внизу суетились люди, как и всегда спешащие по своим делам.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 5,
    text:
      `
        Возникало ощущение, что я чудесным образом попала в прошлое. Однако я не была историком или прилежной ученицей, чтобы точно определить эпоху.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 6,
    text:
      `
        «Машин нет, старомодная одежда... Наверно это XIX или XX век». 
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 7,
    text:
      `
        Я неспешно подошла к одному магазину, судя по всему торгующему ювелирными изделиями, где всматриваясь в стеклянную витрину, я увидела свое отражение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 8,
    text:
      `
        Это была я? Мои каштановые волосы, лицо... Но некоторые черты все же отличались. Например, форма глаз или бровей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 9,
    text:
      `
        В остальном, девушка была моей копией. Словно я нашла двойника, здесь, в другом времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 10,
    text:
      `
        Я бездумно смотрела вперед: щипая себя за руки, хлопая по щекам... Ощущения были реальными, но я все равно подсознательно отрицала происходящее.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 11,
    text:
      `
        «Как такое может быть правдой?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 12,
    text:
      `
        Меня немного трясло, поэтому я облокотилась о небольшую колонну рядом с одним из зданий, в надежде, что чувствуя опору состояние улучшится.
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 13,
    text:
      `
        Через некоторое время ко мне подошел мужчина.
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 14,
    text:
      `
        Он был худой, с забавными усами и задорной улыбкой. Идеально ровная спина, гордо поднятая голова. Серый костюм подчеркивал фигуру и намекал на не самое последнее положение в обществе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 15,
    text:
      `
        Его радушный вид вмиг померк при взгляде на меня и он обеспокоенно спросил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 16,
    text:
      `
        — Катарина, что случилось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 17,
    text:
      `
        Я не смогла ничего выдавить из себя. Затуманенным взглядом я смотрела на мужчину, которого узнала. Именно про него я писала эссе, заданное профессором Нэйтаном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 18,
    text:
      `
        — Ты — Никола Тесла!
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [{ value: 0, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 19,
    text:
      `
        Я сказала это быстро, неосознанно, практически тыча ему в лицо пальцем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 20,
    text:
      `
        Взгляд цеплялся за живую легенду, будто только что сошедшую со страниц моего учебника. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 21,
    text:
      `
        — Катарина, конечно, это я. Тебе плохо? Ты совсем побледнела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 22,
    text:
      `
        Сон был настолько реален, что я чувствовала его прикосновение. Он дрожащими руками держал меня за плечи, продолжая повторять: 
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 23,
    text:
      `
        — Давай дойдем до доктора... Это всего в нескольких кварталах отсюда. Если необходимо, я найму экипаж! 
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 24,
    text:
      `
        Мне нужно было что-то придумать, чтобы оправдать свое поведение. Но стоило ли так стараться, если это все равно сон и мои выборы нереальны? 
      `,
    buttons: [
      {
        text: 'Отнестись серьезно',
        goTo: 25
      },
      {
        text: 'Не верить в происходящее',
        goTo: 100
      },
      {
        text: 'Убежать',
        goTo: 146
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 25,
    text:
      `
        Я решительно взглянула в его голубые глаза, которые выглядели уставшими и чрезмерно озадаченными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    stats: [{ category: 'Choice', id: 'TakeSerious', value: +1 }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 26,
    text:
      `
        — Все в порядке, просто голова закружилась, — я подыгрывала этому спектаклю моего подсознания.  
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 27,
    text:
      `
        — Но врач недалеко, — Тесла начал суетливо осматривать карманы. — Мы немедленно должны отправить телеграмму Роберту о твоем самочувствии. Он просил приглядывать за тобой в его отсутствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    message: 'Никола вам сочувствует',
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [{ story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 28,
    text:
      `
        — Нет-нет, в этом нет необходимости, я абсолютно здорова, — я могла лишь выдать глупую улыбку, надеясь, что Тесла поверит в этот фарс. 
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 29,
    text:
      `
        Он действительно отступил. По его манере поведения было сложно судить, о чем он думает.
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 30,
    text:
      `
        Однако благодаря написанному мною эссе, я понимала, что несмотря на затворнический образ жизни великого ученого — Тесла был эмпатом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    message: 'Эмпат — это человек, который способен сопереживать другим',
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 31,
    text:
      `
        — Катарина, — Никола предложил мне опереться о его локоть. — Если все хорошо, мы еще можем встретиться с Редьярдом Киплингом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 32,
    text:
      `
        — Помнишь, я говорил тебе о нем за ланчем и его стоящих внимания произведениях. Мы немного опаздываем, но думаю, он поймет и простит нашу бестактность. 
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 33,
    text:
      `
        Меня немного лихорадило, но двигаться самостоятельно понемногу получалось. Я...
      `,
    buttons: [
      {
        text: 'Приняла помощь Николы',
        goTo: 34
      },
      {
        text: 'Справилась сама',
        goTo: 36
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 34,
    text:
      `
        Мне была приятна забота такого великого человека, хоть он сам еще и не знал своего блестящего будущего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 35,
    text:
      `
        Я нашла поддержку Николы, чем вызвала его улыбку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    message: 'Никола рад поддержать подругу',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 36,
    text:
      `
        Осознавая всю нереальность происходящего, мне, однако, было трудно решиться поступить именно таким образом.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 37,
    text:
      `
        Да и не настолько я себя плохо чувствовала, чтобы просить поддержку Теслы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 38,
    text:
      `
        Я вежливо отказала ученому. Все еще обеспокоенный Никола кивнул и спокойно остался стоять рядом со мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 39,
    text:
      `
        Мы неспешно двинулись по старинным улочкам Америки. Молча, сосредоточенно. Я погрузилась в свои мысли, параллельно любуясь красивыми видами города. 
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 40,
    text:
      `
        Тишину прервал Тесла, который выглядел возбужденно. Ему не терпелось чем-то поделиться со мной:
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 41,
    text:
      `
        — Знаешь, скажу тебе по секрету, я нашел клуб, в котором в скором времени пройдет игра в домино... 
      `,
    buttons: [
      {
        text: '',
        goTo: 42
      }],
    message: 'Вы услышали интересную информацию, которая может поменять развитие истории',
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 42,
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
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) >= 4
        },
        goTo: 43
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) < 4
        },
        goTo: 64
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 43,
    text:
      `
        Я попыталась вспомнить отрывки из его биографии. По моей памяти, Тесла был азартным игроком, который мог проиграть все, что можно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 44,
    text:
      `
        Остаться голым и при этом все равно продолжать играть. Однако мне, казалось, что его страсть должна уже пройти к этому моменту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 45,
    text:
      `
        Все его время обязано быть посвящено науке и великим открытиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 46,
    text:
      `
        «Что-то тут не так... Но я же его близкий человек, точно не невеста, таковых у него не было».
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 47,
    text:
      `
        «Раз он позволяет такие фамильярности — я могу попытаться наставить Николу на верный путь. Послушает ли он меня? Попробую расспросить его». 
      `,
    buttons: [
      {
        text: 'Разве ты не перестал играть?',
        goTo: 48,
        gift: true,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(47, 0, getChoice(0))
          scenarioManager.changeSceneButtonStatus(47, 4, true)
          if (askedAmount(4)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Никола, а как же работа?',
        goTo: 54,
        func: () => {
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(47, 1, getChoice(1))
          scenarioManager.changeSceneButtonStatus(47, 4, true)
          if (askedAmount(4)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Что это за клуб?',
        goTo: 58,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(47, 2, getChoice(2))
          scenarioManager.changeSceneButtonStatus(47, 4, true)
          if (askedAmount(4)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Кто-нибудь составит тебе компанию?',
        goTo: 62,
        func: () => {
          choiceDone(3)
          scenarioManager.changeSceneButtonStatus(47, 3, getChoice(3))
          scenarioManager.changeSceneButtonStatus(47, 4, true)
          if (askedAmount(4)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
          }
        }
      },
      {
        text: 'Завершить диалог',
        goTo: 78,
        isActive: false
      }],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(47)
    },
    message: 'Ваши знания помогли вам узнать больше об эпохе и открыли дополнительный выбор',
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 48,
    text:
      `
        Тесла выглядел озадаченно, вопрос явно застал его врасплох. 
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'KnowledgeIsTheBest' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 49,
    text:
      `
        — Около года я не связывал свою жизнь с играми. Но в нынешней ситуации мне необходимы деньги. Ведь в работе все складывается не самым лучшим образом, ты знаешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 50,
    text:
      `
        «Неужели это уже произошло? Тесла поругался с Эдисоном?»
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 51,
    text:
      `
        — Но это не выход! Сколько раз ты уже проигрывал все, — я попыталась надавить на самое больное. — Это иллюзия, ты не зарабатываешь, а лишь только тратишь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    message: 'Тесла может прислушаться к вам в будущем',
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [{ story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 52,
    text:
      `
        — Я осознаю риск. Спасибо, что беспокоишься. Когда в моей жизни все будет стабильно, клянусь, избавлюсь от этой привычки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 53
      }],
    message: 'Вы можете помочь Николе преодолеть зависимость и изменить ход истории',
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [{ story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'SupportNicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 53,
    text:
      `
        «Слова настоящего игромана».
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(47)
      scenarioManager.manageDialog(47, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(47, 53)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 54,
    text:
      `
        — А что с ней может быть? Я работаю, как честный трудящийся, на заводе. Провожу исследования и предлагаю свои наработки для улучшения нашей производительности.
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 55,
    text:
      `
        — Так ведь этот досуг очень отвлекает... и, к тому же, сокращает твой доход, — я не оставляла попыток достучаться до мужчины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 56,
    text:
      `
        Тесла усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 57,
    text:
      `
        — Мой доход, как ты выразилась, сокращает мистер Томас Эдисон своими задержками. Сейчас я вижу только один источник заработка. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(47)
      scenarioManager.manageDialog(47, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(47, 57)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 58,
    text:
      `
        — В Гринвич-виллидж недавно открылся клуб для людей с достатком. Меня пригласили за мой скромный вклад в науку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 59,
    text:
      `
        — То есть ставки будут высоки? 
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 60,
    text:
      `
        Никола нервно замотал головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 61,
    text:
      `
        — Все, как обычно, нет нужды волноваться. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(47)
      scenarioManager.manageDialog(47, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(47, 61)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 62,
    text:
      `
        — Ты знаешь, что нет. В нашем окружении никто больше не промышляет таким видом деятельности. Разве что Роберт иногда не прочь перекинуться в карты, но дальше этого он никогда не заходит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 63,
    text:
      `
        «Да кто такой этот Роберт? Судя по рассказам Теслы, это может быть один из друзей ученого. Как он связан с Катариной? Но не могу же я спросить напрямую».
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(47)
      scenarioManager.manageDialog(47, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(47, 63)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 64,
    text:
      `
        Я попыталась вспомнить отрывки из его биографии. По моей памяти, Тесла был азартным игроком, который мог проиграть все, что можно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 65,
    text:
      `
        Остаться голым и при этом все равно продолжать играть. Однако мне, казалось, что его страсть должна уже пройти к этому моменту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 66,
    text:
      `
        Все его время обязано быть посвящено науке и великим открытиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 67,
    text:
      `
        «Я плохо помню его историю жизни, надо было лучше готовиться к паре... Все равно попробую расспросить его».
      `,
    buttons: [
      {
        text: 'Никола, а как же работа?',
        goTo: 68,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(67, 0, getChoice(0))
          scenarioManager.changeSceneButtonStatus(67, 3, true)
          if (askedAmount(3)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
          }
        }
      },
      {
        text: 'Что это за клуб?',
        goTo: 72,
        func: () => {
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(67, 1, getChoice(1))
          scenarioManager.changeSceneButtonStatus(67, 3, true)
          if (askedAmount(3)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
          }
        }
      },
      {
        text: 'Кто-нибудь составит тебе компанию?',
        goTo: 76,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(67, 2, getChoice(2))
          scenarioManager.changeSceneButtonStatus(67, 3, true)
          if (askedAmount(3)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
          }
        }
      },
      {
        text: 'Завершить диалог',
        goTo: 78,
        isActive: false
      }],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(67)
    },
    message: 'Ваши знания не помогли вам узнать больше об эпохе и не открыли дополнительный выбор',
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 68,
    text:
      `
        — А что с ней может быть? Я работаю, как честный трудящийся, на заводе. Провожу исследования и предлагаю свои наработки для улучшения нашей производительности.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 69,
    text:
      `
        — Так ведь этот досуг очень отвлекает... и, к тому же, сокращает твой доход, — я не оставляла попыток достучаться до мужчины. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 70,
    text:
      `
        Тесла усмехнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 71,
    text:
      `
        — Мой доход, как ты выразилась, сокращает мистер Томас Эдисон своими задержками. Сейчас я вижу только один источник заработка. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(67)
      scenarioManager.manageDialog(67, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(67, 71)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 72,
    text:
      `
        — В Гринвич-виллидж недавно открылся клуб для людей с достатком. Меня пригласили за мой скромный вклад в науку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 73,
    text:
      `
        — То есть ставки будут высоки? 
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 74,
    text:
      `
        Никола нервно замотал головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 75,
    text:
      `
        — Все, как обычно, нет нужды волноваться. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(67)
      scenarioManager.manageDialog(67, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(67, 75)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 76,
    text:
      `
        — Ты знаешь, что нет. В нашем окружении никто больше не промышляет таким видом деятельности. Разве что Роберт иногда не прочь перекинуться в карты, но дальше этого он никогда не заходит. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 77,
    text:
      `
        «Да кто такой этот Роберт? Судя по рассказам Теслы, это может быть один из друзей ученого. Как он связан с Катариной? Но не могу же я спросить напрямую».
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(67)
      scenarioManager.manageDialog(67, [0, 1, 2], [3])
      scenarioManager.copySceneButtons(67, 77)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 78,
    text:
      `
        За непринужденной беседой, я и не заметила, как мы дошли до места назначения. Это было небольшое двухэтажное здание. Тесла галантно открыл мне дверь, пропуская вперед. 
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 79,
    text:
      `
        В нос сразу ударил тяжелый запах чего-то протухшего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 80,
    text:
      `
        К горлу невольно подступила тошнота, которую я попыталась подавить, прикрыв нос ладонью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 81,
    text:
      `
        Видимо Тесла заметил это и проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 82,
    text:
      `
        — Надо было все же наведаться к доктору...
      `,
    buttons: [
      {
        text: '',
        goTo: 83
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 83,
    text:
      `
        — Ты разве не чувствуешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 84,
    text:
      `
        Никола развел плечами и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 85,
    text:
      `
        — Здесь всегда чисто и ухоженно. Я слышу только аромат свежести, не более. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 86,
    text:
      `
        Это было странно. Может, действительно из-за того, что я во сне, мои органы чувств работали со сбоями? 
      `,
    buttons: [
      {
        text: '',
        goTo: 87
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 87,
    text:
      `
        Деваться было некуда, мы продолжили идти в квартиру к великому писателю. 
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 88,
    text:
      `
        Поднявшись несколько пролетов по лестнице, Никола остановился перед дверью и постучал. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    simple: require('../../../../Sounds/Immortals/Knock.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 89,
    text:
      `
        Нам открыла милого вида пожилая женщина, жестом приглашая зайти внутрь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Entry.jpg')
  },

  {
    id: 90,
    text:
      `
        Я не рассматривала убранство квартиры. Все мое внимание было приковано к старушке, которая вела себя странно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 91
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 91,
    text:
      `
        Неестественно резкие движения, нехарактерные для ее возраста, голова откинута назад, изо рта проглядывались желто-черные зубы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 92,
    text:
      `
        Я взглянула в ее большие карие глаза. Вместо привычного блеска жизни, в них отражались лишь тоска и ярость.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 93,
    text:
      `
        В ту же секунду они загорелись алым цветом, на вид безобидная женщина полностью развернулась ко мне и стала выкручивать свои руки, снимать с себя плоть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    music: require('../../../../Sounds/Immortals/Monster.mp3'),
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 94,
    text:
      `
        Ее кожа приобрела серый оттенок, а лицо исказила гримаса ужаса. Аккуратно уложенные седые волосы исчезли, оставляя лишь голую макушку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 95,
    text:
      `
        Я попятилась и уперлась в стену. Существо подошло ко мне и, взяв меня за руку, прошипело:
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 96,
    text:
      `
        — Мы нашли тебя... И везде найдем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 97
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    achievement: { story: EStoriesEn.Immortals, name: 'Unknown' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 97,
    text:
      `
         Мельком я увидела, как на моем запястье появилось черное пятно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 98,
    text:
      `
        Слишком много потрясений, мой мозг отказывался воспринимать происходящее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 99
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 99,
    text:
      `
        Отдаленно я слышала, как Никола что-то кричит, но мне не суждено было узнать, что именно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Old_Lady_Flat.jpg')
  },

  {
    id: 100,
    text:
      `
        Я решительно взглянула в его голубые глаза, которые выглядели уставшими и чрезмерно озадаченными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    stats: [{ story: EStoriesEn.Immortals, category: 'Choice', id: 'DontBelieve', value: +1 }],
    music: require('../../../../Sounds/Immortals/NY.mp3'),
    ambient: require('../../../../Sounds/Immortals/NY_Humble.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 101,
    text:
      `
        — Это же все не может быть реальностью, — я нервно усмехнулась. — Ты не великий изобретатель, а я не какая-то там Катарина. 
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 102,
    text:
      `
        Тесла немного смутился, но быстро взял себя в руки и проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 103,
    text:
      `
        — Что ты такое говоришь? Может, у тебя солнечный удар? Ты меня не убедила, я настаиваю на докторе! 
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 104,
    text:
      `
        — Я — $Имя Игрока$, — было забавно наблюдать за его реакцией. Он явно выглядел растеряно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 105,
    text:
      `
         — Что за имя такое... Катарина, ты репетируешь? Но ты вроде говорила, что больше не хочешь играть в спектаклях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 106
      }],
    message: 'Вы шокировали Теслу',
    achievement: { story: EStoriesEn.Immortals, name: 'Shock' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 106,
    text:
      `
        «Если все не по настоящему, я же могу делать все, что захочу?»
      `,
    buttons: [
      {
        text: 'Обнять Теслу',
        goTo: 107
      },
      {
        text: 'Поцеловать Николу в щечку',
        goTo: 112
      },
      {
        text: 'Рассказать про будущее',
        goTo: 117
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 107,
    text:
      `
        «Великий ученый стоит прямо передо мной, почему бы мне не взять и не обнять его?»
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 108,
    text:
      `
        Я резко подступилась к Николе и тепло обняла его. Крепко-крепко. Не ожидая от меня такого, он лишь стоял, словно статуя, не понимая, как реагировать на этот выпад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 109,
    text:
      `
        — Катарина, — он был очень смущен, — что происходит? 
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    message: 'Тесла приятно удивлен ',
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 110,
    text:
      `
        — Это же просто объятие, почему ты так удивился?
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 111,
    text:
      `
        — Что скажет Роберт?
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 112,
    text:
      `
        «Великий ученый стоит прямо передо мной, почему бы мне не взять и не поцеловать его в щечку?»
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 113,
    text:
      `
        Я резко подступилась к Николе  и чмокнула его в щеку. Не ожидая от меня такого, он лишь стоял, словно статуя, не понимая, как реагировать на этот выпад. 
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 114,
    text:
      `
        — Катарина, — он был немного зол. — Что происходит? 
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    message: 'Тесла не оценил ваш порыв',
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 115,
    text:
      `
        — Это же просто поцелуй, почему ты так удивился?
      `,
    buttons: [
      {
        text: '',
        goTo: 116
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 116,
    text:
      `
        — Что скажет Роберт? 
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 117,
    text:
      `
        Мне захотелось посмотреть, что будет, когда Никола узнает о своих открытиях и своей значимости в будущем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 118,
    text:
      `
        — Пройдет не так много времени и ты приобретешь известность, а имя твое прогремит на весь мир, благодаря сделанным открытиям.
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 119,
    text:
      `
        — Катарина... 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    message: 'Тесла думает, что вы поддерживаете его деятельность ',
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 120,
    text:
      `
        — Я знал, что ты восхищаешься моим стремлением изменить мир, но к чему столько...
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 121,
    text:
      `
        — Потому что это правда! — я перебила Николу. — «Дуэль» с Эдисоном закончится твоей победой.
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 122,
    text:
      `
        — Что скажет Роберт, услышав, как ты меня нахваливаешь...
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 123,
    text:
      `
        Я не стала тянуть и ходить вокруг да около. 
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 124,
    text:
      `
        — Да кто такой этот Роберт?
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 125,
    text:
      `
        На этот раз голос Николы звучал жёстче.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 126,
    text:
      `
        — Прекрати этот спектакль, не думаю, что твой муж оценит такую постановку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 127,
    text:
      `
        Он взял меня за руку и потянул в сторону улочек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 128,
    text:
      `
        — Отложим визит к Редьярду Киплингу, идем сразу к доктору!
      `,
    buttons: [
      {
        text: '',
        goTo: 129
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png')
  },

  {
    id: 129,
    text:
      `
        Насколько же это были реальные ощущения. Его пальцы оставляли небольшие вмятины на моих руках. Я была словно в тисках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 130
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 130,
    text:
      `
        Тесла двигался быстро, как будто бы опаздывал куда-то. Местами я пыталась с ним заговорить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 131,
    text:
      `
        Но он не оценил моей игры, поэтому не поведал ни о своей жизни, ни о его проблемах с Эдисоном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    message: 'По другому пути героиня могла узнать больше о личности Николы',
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 132,
    text:
      `
        А я лишь про себя думала, насколько все это будет абсурдно, если окажется правдой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 133,
    text:
      `
        Петляя по старым американским улочкам, Никола вскоре привел меня в больницу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 134,
    text:
      `
        Зайдя внутрь, в нос сразу ударил запах лекарств и чего-то протухшего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 135,
    text:
      `
        Когда мы вошли в кабинет, Тесла обменялся любезностями с доктором и пожал ему руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 136,
    text:
      `
        Тот выглядел как обычный доброжелательный мужчина, исправно выполняющий свою работу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 137,
    text:
      `
        — Доктор, пожалуйста, у этой женщины случился солнечный удар! Осмотрите ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 138,
    text:
      `
        Он кивнул. Подойдя ко мне, грубо схватил за запястье и начал измерять пульс. Его прикосновения были холодными и болезненными, а выражение лица выражало абсолютное спокойствие и сосредоточение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 139
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 139,
    text:
      `
        Я взглянула в его большие карие глаза. Вместо привычного блеска жизни, в них отражалась лишь тоска и ярость.
      `,
    buttons: [
      {
        text: '',
        goTo: 140
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 140,
    text:
      `
        В ту же секунду они загорелись алым цветом, на вид обычный мужчина стал выкручивать свои руки, снимать с себя плоть. Его кожа посерела, а лицо исказила гримаса ужаса.
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    music: require('../../../../Sounds/Immortals/Monster.mp3'),
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 141,
    text:
      `
        Я попятилась и уперлась в стену. Существо подошло ко мне, взяло меня за руку и прошептало:
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 142,
    text:
      `
        — Мы нашли тебя... И везде найдем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    achievement: { story: EStoriesEn.Immortals, name: 'Unknown' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 143,
    text:
      `
         Мельком я увидела, как на моем запястье появилось черное пятно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 144,
    text:
      `
        Слишком много потрясений, мой мозг отказывался воспринимать происходящее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 145,
    text:
      `
        Отдаленно я слышала, как Никола что-то кричит, но мне не суждено было узнать, что именно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 146,
    text:
      `
        «Не может быть! Я просто убегу! Что-нибудь произойдет и получится проснуться!»
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    music: require('../../../../Sounds/Immortals/NY.mp3'),
    ambient: require('../../../../Sounds/Immortals/NY_Humble.mp3'),
    stats: [{ story: EStoriesEn.Immortals, category: 'Choice', id: 'RunAwayFromNicola', value: +1 }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 147,
    text:
      `
        Рванув в сторону оживленной улицы, мне периодически приходилось оглядываться, оценивая удалось ли скрыться от растерянного Теслы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'CrazyGirl' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 148,
    text:
      `
        Я лавировала между потоком, ища укрытие, которое избавило бы меня от назойливости Николы.
      `,
    buttons: [
      {
        text: '',
        goTo: 149
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 149,
    text:
      `
        Впереди была толпа протестующих, которая скандировала привычные для того времени лозунги: поднять зарплату, сократить время рабочих часов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 150
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 150,
    text:
      `
        Я решила бежать: 
      `,
    buttons: [
      {
        text: 'В переулок',
        goTo: 151
      },
      {
        text: 'Прямо по улице',
        goTo: 179
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 151,
    text:
      `
        «Это может быть мой шанс оторваться!»
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    stats: [{ story: EStoriesEn.Immortals, category: 'Choice', id: 'TurnToSide', value: 1 }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 152,
    text:
      `
        Я завернула в ближайшую темную улочку и остановилась, чтобы перевести дыхание.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets_Dark.jpg')
  },

  {
    id: 153,
    text:
      `
        Я дотронулась до кирпичного здания, почувствовав холод — отпрянула, не веря, что так отчетливо могут передаваться ощущения во сне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets_Dark.jpg')
  },

  {
    id: 154,
    text:
      `
        Все было настолько реалистично, что я на секунду допустила мысль об ошибках в своих суждениях относительно происходящего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets_Dark.jpg')
  },

  {
    id: 155,
    text:
      `
        Мне стало не по себе, но я должна была собраться и бежать дальше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets_Dark.jpg')
  },

  {
    id: 156,
    text:
      `
        Я вышла на параллельную улицу, дивясь новым красотам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 157,
    text:
      `
        Я шла по вымощенной дорожке словно призрак, не имея цели, и настолько погрузилась в себя, что не заметила, как на меня несется карета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 158,
    text:
      `
        В последний момент чьи-то руки схватили меня, отталкивая в сторону. Это оказался Никола, который выглядел рассерженно и явно был уставшим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 159,
    text:
      `
        — Катарина, да что с тобой?! Прекрати этот спектакль, возможно, ты получила солнечный удар или еще чего... Пойдем к доктору!
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 160,
    text:
      `
        Он взял меня за руку и потянул в сторону улочек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 161
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 161,
    text:
      `
        — Отложим визит к Редьярду Киплингу, идем сразу в больницу!
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    message: 'Тесла недоволен вашим поведением',
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Nicola' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885.jpg')
  },

  {
    id: 162,
    text:
      `
        Насколько же это были реальные ощущения. Его пальцы оставляли небольшие вмятины на моих руках. Я была словно в тисках. 
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 163,
    text:
      `
        Тесла двигался быстро, как будто бы опаздывал куда-то. Я пыталась с ним заговорить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 164
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 164,
    text:
      `
        Но он не оценил моей игры, поэтому не поведал ни о своей жизни, ни о его проблемах с Эдисоном. 
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    message: 'По другому пути героиня могла узнать больше о личности Николы',
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 165,
    text:
      `
        А я лишь про себя думала, насколько все это будет абсурдно, если окажется правдой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 166,
    text:
      `
        Петляя по старым американским улочкам, Никола вскоре привел меня в больницу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 167,
    text:
      `
        Зайдя внутрь, в нос сразу ударил запах лекарств и чего-то протухшего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 168,
    text:
      `
        Когда мы вошли в кабинет, Тесла обменялся любезностями с доктором и пожал ему руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 169,
    text:
      `
        Тот выглядел как обычный доброжелательный мужчина, исправно выполняющий свою работу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 170,
    text:
      `
        — Доктор, пожалуйста, у этой женщины случился солнечный удар! Осмотрите ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Nicola.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 171,
    text:
      `
        Он кивнул. Подойдя ко мне, грубо схватил за запястье и начал измерять пульс. Его прикосновения были холодными и болезненными, а выражение лица выражало абсолютное спокойствие и сосредоточение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 172,
    text:
      `
        Я взглянула в его большие карие глаза. Вместо привычного блеска жизни, в них отражалась лишь тоска и ярость.
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 173,
    text:
      `
        В ту же секунду они загорелись алым цветом, на вид обычный мужчина стал выкручивать свои руки, снимать с себя плоть. Его кожа посерела, а лицо исказила гримаса ужаса.
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    music: require('../../../../Sounds/Immortals/Monster.mp3'),
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 174,
    text:
      `
        Я попятилась и уперлась в стену. Существо подошло ко мне, взяло меня за руку и прошептало:
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 175,
    text:
      `
        — Мы нашли тебя... И везде найдем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    achievement: { story: EStoriesEn.Immortals, name: 'Unknown' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 176,
    text:
      `
         Мельком я увидела, как на моем запястье появилось черное пятно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 177,
    text:
      `
        Слишком много потрясений, мой мозг отказывался воспринимать происходящее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 178,
    text:
      `
        Отдаленно я слышала, как Никола что-то кричит, но мне не суждено было узнать, что именно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Hospital.jpg')
  },

  {
    id: 179,
    text:
      `
        Порывы ветра развивали мои волосы, я бежала вперед, не обращая внимание на происходящее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    ambient: require('../../../../Sounds/Common/Silence.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 180,
    text:
      `
        Сейчас я наслаждалась мимолетным спокойствием и вскоре потеряла Теслу из виду.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Streets.jpg')
  },

  {
    id: 181,
    text:
      `
        Мое внимание привлекла небольшая книжная лавка, около которой крутилось несколько детей.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 182,
    text:
      `
        Будучи одетыми не в самую чистую одежду, они протягивали свои маленькие ручонки прохожим, в надежде заполучить пару заветных монеток. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 183,
    text:
      `
        Увидев меня, они тут же подбежали и со всех сторон стали жалобно поглядывать, приговаривая:
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 184,
    text:
      `
        — Тетя, дайте на хлебушек, пожалуйста! 
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 185,
    text:
      `
        Я растерялась. Осмотрев свои карманы, мне удалось найти деньги, которые я протянула нуждающимся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 186,
    text:
      `
        «Мелочь, но мне кажется я сделала доброе дело!»
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 187,
    text:
      `
        Из лавки вышел недовольный работник. На вид радушный, пухлый мужчина средних лет грозно прогнал попрошаек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 188,
    text:
      `
        — Чертовы дети, отпугивают покупателей! — он быстро перевел взгляд на меня, его губы растянулись в ехидную улыбку. — Мисс, вы хотели что-то приобрести? 
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 189,
    text:
      `
        Мне стало не по себе от резкой перемены его настроения, поэтому я вежливо отказалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 190,
    text:
      `
        — Ну, что вы... — мужчина легонько взял меня за плечи и подтолкнул в лавку. — У меня есть для вас эксклюзивное предложение!
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Outside.jpg')
  },

  {
    id: 191,
    text:
      `
        Мне все же пришлось заглянуть внутрь. Его настойчивость пугала, тем не менее, я решила не поддаваться паранойе и просто насладиться литературой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 192,
    text:
      `
        Но меня настигло разочарование. 
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 193,
    text:
      `
        Вместо знакомого запаха книг, в нос ударила вонь от чего-то тухлого. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 194,
    text:
      `
        Меня начало тошнить, но я старалась подавить эти порывы и сохранять спокойствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 195,
    text:
      `
        — Все в порядке? — работник достал несколько книг с полок и протянул мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 196,
    text:
      `
        — Да, просто тяжелый день. 
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 197,
    text:
      `
        — Понимаю. Эти бесконечные забастовки, голодающие, невозможность себя реализовать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 198,
    text:
      `
        Я удивилась, услышав эти странные откровения. Видимо, человеку очень хотелось высказаться, да и я была не против больше узнать об этом времени. 
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 199,
    text:
      `
        — Но у вас же есть стабильная работа и вы не выглядите как нуждающийся человек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Katarina.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 200,
    text:
      `
        — Думаете, так было всегда? Вам легко говорить: красивая женщина, которая всегда найдет себе достойную партию — вы не жили в хаосе и не знаете и половины о жизни в трущобах. 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 201,
    text:
      `
        — Но теперь все изменится, — мужчина надвигался на меня. — Вот ты и попалась... 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 202,
    text:
      `
        Я начала инстинктивно отходить назад. Руки стали влажными, а моим разумом завладел страх. Страх за свою жизнь.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 203,
    text:
      `
        Он начал преображаться. Его язык неестественно удлинился, прошелся по моей шее и щекам, оставляя сгустки слюней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    music: require('../../../../Sounds/Immortals/Monster.mp3'),
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 204,
    text:
      `
        Его кожа стала серой. Вместо привычных карих глаз на меня смотрели ярко-красные зрачки. Он начал сильно сжимать мою руку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    achievement: { story: EStoriesEn.Immortals, name: 'Unknown' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 205,
    text:
      `
        Мельком я увидела, как на моем запястье стало проявляться черное пятно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 206
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 206,
    text:
      `
        Слишком много потрясений, мой мозг отказывался воспринимать происходящее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 207,
    text:
      `
        Отдаленно я слышала лишь хрипение этой твари, а затем уже привычная темнота накрыла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/NY_1885_Bookstore_Inside.jpg')
  },

  {
    id: 208,
    text:
      `
        Я открыла глаза и увидела знакомые стены студенческого медпункта. Я лежала на кушетке: тело ломило, голова гудела.
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    music: require('../../../../Sounds/Immortals/Nowadays.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 500,
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
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Scarlett' }) >= 0
        },
        goTo: 209
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Scarlett' }) < 0
        },
        goTo: 213
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 209,
    text:
      `
        Увидев, что я очнулась, Скарлетт крепко обняла меня. 
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 210,
    text:
      `
        — Как же ты всех перепугала! Ты в порядке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    message: 'Вы со Скарлетт друзья, она за вас переживала ',
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 211,
    text:
      `
        — Да, — горло немного болело, поэтому я говорила шепотом. — Долго я была в отключке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 212,
    text:
      `
        — Где-то минут сорок... 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 213,
    text:
      `
        Увидев, что я очнулась, к кровати подошла Скарлетт и спросила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 214,
    text:
      `
        — Как ты? Все хорошо?
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    message: 'Ты не очень близка со Скарлетт, но она все равно переживала за тебя',
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 215,
    text:
      `
        — Да, — горло немного болело, поэтому я говорила шепотом. — Долго я была в отключке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 216,
    text:
      `
        — Где-то минут сорок... 
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 217,
    text:
      `
        Головокружение и тошнота накатывали волной. Я оставила попытки присесть на кровать. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 218
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 218,
    text:
      `
        Помимо Скарлетт в палате стояли еще двое. Профессор Нэйтан обеспокоенно смотрел на меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 219,
    text:
      `
        Рядом с ним стоял мой одногруппник и брат профессора — Леон. Он выглядел хмуро и растерянно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 220,
    text:
      `
        Заметив, что я пришла в себя, парень подошел ко мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 221,
    text:
      `
        — $Имя Игрока$, любишь же ты устраивать выкрутасы... 
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 222,
    text:
      `
        В последнее время нам не выпадал шанс нормально пообщаться. К сожалению, у обстоятельств было свое мнение на этот счет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 223,
    text:
      `
        Тем не менее Леон всегда был расположен ко мне: относился с теплотой и заботой. Иногда даже выступал в качестве героя, спасая из различных передряг. 
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 224,
    text:
      `
        Я сказала:
      `,
    buttons: [
      {
        text: 'Леон, что ты тут делаешь?',
        goTo: 225
      },
      {
        text: 'Профессор, простите, что сорвала пару...',
        goTo: 227
      },
      {
        text: 'Скарлетт, спасибо, что ты рядом...',
        goTo: 229
      },
      {
        text: 'Ох, что же это было...',
        goTo: 231
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 225,
    text:
      `
        — Я успел поймать тебя перед самым падением. Повезло, что я такой ловкий!
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    message: 'Леон волновался за вас ',
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 226,
    text:
      `
        — Спасибо тебе. Не знаю... Все произошло так быстро...
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 227,
    text:
      `
        Нэйтан недовольно покачал головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 228,
    text:
      `
        — Забудь, сейчас не об этом надо думать. Самое главное — ты пришла в себя и твоей жизни ничего не угрожает. 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    message: 'Вы прилежная и ответственная ученица',
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 229,
    text:
      `
        Девушка улыбнулась и проговорила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 230,
    text:
      `
        — Самое главное, что ты в порядке. Сейчас ни о чем другом переживать не надо. 
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    message: 'Скарлетт рада помочь',
    imageFront: require('../../../../Images/Immortals/Persons/Scarlett.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 231,
    text:
      `
        Присутствующие обеспокоенно переглянулись. Было заметно — каждый переживает за меня.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 232,
    text:
      `
        Профессор решил сказать: 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 233,
    text:
      `
        — Врач осмотрел тебя и заключил, что это переутомление, поэтому скорую вызывать не стали. Но твое состояние оставляет желать лучшего. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 234,
    text:
      `
        — У тебя есть кто-нибудь, кто бы мог отвезти тебя домой? 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 235,
    text:
      `
        Рядом с кушеткой стояла тумбочка, на которой лежал мой телефон. Я несколько раз набрала номер отца, так как последнее время он был не так занят на работе как мама. 
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 236,
    text:
      `
        Но ответом были только длинные гудки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    simple: require('../../../../Sounds/Immortals/Beep_Long.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 237,
    text:
      `
        Мне предложил помощь:
      `,
    buttons: [
      {
        text: 'Нэйтан',
        goTo: 238
      },
      {
        text: 'Леон',
        goTo: 302
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 238,
    text:
      `
        Нэйтан вздохнул и проговорил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 239,
    text:
      `
        — Дай мне десять минут, я отвезу тебя домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 240,
    text:
      `
        Я немного смущенно взглянула на него и благодарно кивнула. Остальные покинули медпункт и у меня осталось немного времени, чтобы собраться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 241,
    text:
      `
        Я медленно подошла к рюкзаку, проверяя все ли вещи на месте. Ключи и учебные принадлежности, документы — все было при мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 242,
    text:
      `
        С большим трудом, но я подошла к раковине, чтобы умыться и привести себя в порядок. Я мыла руки, как вдруг заметила то самое черное пятно из своего сна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 243,
    text:
      `
        Я почувствовала слабость и снова вернулась на кушетку.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 244,
    text:
      `
        «Так все-таки я действительно перенеслась во времени?! Тесла... Монстр. Что же это?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 245,
    text:
      `
        Я терла свою руку как могла: мылом, спиртом — но все было нипочем.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 246,
    text:
      `
        «Как же так...»
      `,
    buttons: [
      {
        text: '',
        goTo: 247
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 247,
    text:
      `
        Тело покрылось мурашками от осознания того, что все произошедшее, действительно имело место быть. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 248,
    text:
      `
        Мое обеспокоенное лицо увидел Нэйтан, который успел вернуться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 249,
    text:
      `
        — $Имя Игрока$, совсем плохо? Давай поедем в больницу... 
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 250,
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
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'DontBelieve' }) === 1
        },
        goTo: 251
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TurnToSide' }) === 1
        },
        goTo: 251
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TakeSerious' }) === 1
        },
        goTo: 254
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'RunAwayFromNicola' }) === 1 && statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TurnToSide' }) === 0
        },
        goTo: 254
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 251,
    text:
      `
        При упоминании больницы, я невольно вспомнила то существо и меня передернуло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 252,
    text:
      `
        «Хватит с меня больниц!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 253,
    text:
      `
        — Все хорошо, просто отвезите меня домой, пожалуйста. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 254,
    text:
      `
        Сейчас мне меньше всего хотелось ехать в больницу. После всех тех потрясений, нет ничего лучше горячего чая и теплого пледа дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 255,
    text:
      `
        — Все хорошо, просто отвезите меня домой, пожалуйста. 
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 256,
    text:
      `
        Нэйтан кивнул. Он помог мне подняться и:
      `,
    buttons: [
      {
        text: 'Приобнял за талию',
        goTo: 257
      },
      {
        text: 'Придержал за локоть',
        goTo: 265
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 257,
    text:
      `
        Его поддержка помогала мне не упасть. Я чувствовала, как его руки крепко держали меня, направляя, не давая оступиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    music: require('../../../../Sounds/Immortals/Neitan.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 258,
    text:
      `
        Коридоры университета пустовали, так как шли занятия, поэтому мы избежали лишних взглядов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    message: 'Ваше сердце пропустило удар ',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 259,
    text:
      `
        — Профессор, разве у вас нет больше пар сегодня? 
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 260,
    text:
      `
        — Нет, сегодня на вечер у меня, видимо, другие дела, — Нэйтан хитро улыбнулся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 261,
    text:
      `
        Я смутилась, понимая, что это вряд ли относится ко мне, но сердце застучало быстрее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 262,
    text:
      `
        «Профессор помогает своей ученице в трудной ситуации. Казалось бы, ничего необычного...»
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 263,
    text:
      `
        Однако невольно вспоминались самые разнообразные сцены из романтических фильмов на подобную тематику. Я почувствовала, как кровь приливает к лицу.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 264,
    text:
      `
        Нэйтан довел меня до своей машины и помог сесть на переднее сидение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 265,
    text:
      `
        Нэйтан галантно держал меня под руку, не давая оступиться. Его поддержка была как никогда кстати, учитывая, мою слабость. И я была благодарна ему за это. 
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 266,
    text:
      `
        Коридоры университета пустовали, так как шли занятия, поэтому мы избежали лишних взглядов. 
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 267,
    text:
      `
        — Профессор, разве у вас нет больше пар сегодня? 
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 268,
    text:
      `
        — Нет, сегодня у меня сокращенный день, — Нэйтан улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 269,
    text:
      `
        Повезло, что профессор оказался таким чутким. Он довел меня до своей машины и помог сесть на переднее сидение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 270,
    text:
      `
        Я назвала ему свой адрес и он медленно тронулся, выезжая на дорогу. Заиграла легкая мелодия, располагая ко сну.
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 271,
    text:
      `
        Тишину прервал Нэйтан, который решил спросить: 
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 272,
    text:
      `
        — Чем же ты таким занимаешься, что теряешь сознание на моих парах? 
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 273,
    text:
      `
        «Да так, всего лишь, видимо, путешествую во времени...»
      `,
    buttons: [
      {
        text: '',
        goTo: 274
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 274,
    text:
      `
        — В последнее время много работаю. К тому же, я стараюсь не отлынивать от учебы.
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 275,
    text:
      `
        
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'WakeUp' }) >= 1
        },
        goTo: 276
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'WakeUp' }) <= 0
        },
        goTo: 282
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 276,
    text:
      `
        Профессор удовлетворительно кивнул. 
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 277,
    text:
      `
        — Ты и правда подтянула успеваемость, молодец! Я мельком ознакомился с твоим эссе по Николе Тесле. Там есть интересные мысли... Кстати, почему ты выбрала именно его среди множества великих ученых? 
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 278,
    text:
      `
        Вспомнив сегодняшнее столкновение с Теслой, я задумалась. Неужели сама судьба решила подшутить надо мной? 
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 279,
    text:
      `
        — Я знаю, что это может немного банально, но я хотела подсветить что-то новое. Еще с раннего детства родители рассказывали о необычных деятелях и их открытиях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 280,
    text:
      `
        — Но люди так редко делают акценты на самой личности, что в своей работе мне хотелось отразить его человечность.
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 281,
    text:
      `
        — Похвально... — Нэйтан вдруг о чем-то задумался. 
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 282,
    text:
      `
        Профессор недовольно покачал головой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 283,
    text:
      `
        — Я понимаю, работа, но твои оценки оставляют желать лучшего. Я мельком ознакомился с цифровым вариантом твоего эссе по Николе Тесле. Тем не менее мне нужен бумажный оригинал, чтобы выставить оценку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 284,
    text:
      `
        — Там есть несколько интересных мыслей, но в целом — слабовато. Кстати, почему ты выбрала именно его среди множества великих ученых? 
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 285,
    text:
      `
        Вспомнив сегодняшнее столкновение с Теслой, я задумалась. Неужели сама судьба решила подшутить надо мной? 
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 286,
    text:
      `
        — Я знаю, что это может немного банально, но я хотела подсветить что-то новое. Еще с раннего детства родители рассказывали о необычных деятелях и их открытиях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 287
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 287,
    text:
      `
        — Но люди так редко делают акценты на самой личности, что в своей работе мне хотелось отразить его человечность.
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 288,
    text:
      `
        — Значит, тебе нужно было более тщательно изучить материал, — Нэйтан вдруг замолчал и о чем-то задумался. 
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 289,
    text:
      `
        — Профессор, все в порядке? 
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 290,
    text:
      `
        — Да, прости... — он словно вышел из транса и снова как ни в чем не бывало посмотрел на меня. — Погрузился в воспоминания о прошлом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 291
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 291,
    text:
      `
        — Встречали Теслу лично? — я рассмеялась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 292,
    text:
      `
        — Очень остроумно. Всего лишь прекрасные студенческие годы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 293,
    text:
      `
        Мы еще немного поговорили, а затем, он подвез меня прямо к дому. Я снова увидела привычную зеленую лужайку, спокойную и умиротворенную обстановку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 294,
    text:
      `
        В соседнем доме горел свет. Значит Шерил уже вернулась. И как бы в подтверждение моих мыслей, она резко выбежала из дома, с грохотом захлопнув входную дверь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 295,
    text:
      `
        Даже из окна машины я видела, что она была подавлена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 296,
    text:
      `
        «Почему она не на занятиях?»
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 297,
    text:
      `
        — Спасибо большое, профессор, я пойду.
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 298,
    text:
      `
        — Давай я помогу тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 299,
    text:
      `
        — Не стоит, я и так вас задержала. К тому же, там моя подруга, она мне поможет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 300,
    text:
      `
        — Хорошо. И мне было не сложно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 301,
    text:
      `
        Он вышел из машины, открыл мне дверь, помогая подняться. Я еще раз поблагодарила Нэйтана и немного пошатываясь направилась к Шерил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 302,
    text:
      `
        Леон вздохнул и проговорил:
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    stats: [{ story: EStoriesEn.Immortals, category: 'Choice', id: 'HelpFromLeon', value: +1 }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 303,
    text:
      `
        — Дай мне десять минут, я провожу тебя домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 304,
    text:
      `
        — Возьми мою машину, — Нэйтан передал ключи Леону. — У меня все равно на вечер были дела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Neitan.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 305,
    text:
      `
        Я смущенно посмотрела на братьев и благодарно кивнула. Остальные покинули медпункт и у меня осталось немного времени, чтобы собраться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 306,
    text:
      `
        Я медленно подошла к рюкзаку, проверяя все ли вещи на месте. Ключи и учебные принадлежности, документы — все было при мне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 307,
    text:
      `
        С большим трудом, но я подошла к раковине, чтобы умыться и привести себя в порядок. Я мыла руки, как вдруг заметила то самое черное пятно из своего сна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 308,
    text:
      `
        Я почувствовала слабость и снова вернулась на кушетку.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 309,
    text:
      `
        «Так все-таки я действительно перенеслась во времени?! Тесла... Монстр. Что же это?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 310,
    text:
      `
        Я терла свою руку как могла: мылом, спиртом — но все было нипочем.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 311,
    text:
      `
        «Как же так...»
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 312,
    text:
      `
        Тело покрылось мурашками от осознания того, что все произошедшее, действительно имело место быть.
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 313,
    text:
      `
        Мое обеспокоенное лицо увидел Леон, который успел вернуться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 314,
    text:
      `
        — $Имя Игрока$, совсем плохо? Давай поедем в больницу... 
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 315,
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
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'DontBelieve' }) === 1
        },
        goTo: 316
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TurnToSide' }) === 1
        },
        goTo: 316
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TakeSerious' }) === 1
        },
        goTo: 319
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'RunAwayFromNicola' }) === 1 && statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TurnToSide' }) === 0
        },
        goTo: 319
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 316,
    text:
      `
        При упоминании больницы, я невольно вспомнила то существо и меня передернуло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Monster.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 317,
    text:
      `
        «Хватит с меня больниц!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 318,
    text:
      `
        — Все хорошо, просто отвезите меня домой, пожалуйста. 
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 319,
    text:
      `
        Сейчас мне меньше всего хотелось ехать в больницу. После всех тех потрясений, нет ничего лучше горячего чая и теплого пледа дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 320,
    text:
      `
        — Все хорошо, просто отвезите меня домой, пожалуйста.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 321,
    text:
      `
        Леон помог мне подняться и:
      `,
    buttons: [
      {
        text: 'Дал руку, чтобы опереться',
        goTo: 322
      },
      {
        text: 'Шел рядом и поддерживал',
        goTo: 329
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Med.jpg')
  },

  {
    id: 322,
    text:
      `
        Я схватилась за его руку, и мы двинулись по пустующим коридорам университета. 
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    music: require('../../../../Sounds/Immortals/Leon.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 323,
    text:
      `
        Мне была приятна забота Леона, в равной степени, как и неожиданна. 
      `,
    buttons: [
      {
        text: '',
        goTo: 324
      }],
    message: 'Леон рад вам помочь ',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 324,
    text:
      `
        Раньше я часто проводила время в компании Скарлетт, Леона и еще нескольких друзей. Но со временем у них появилось больше других дел и всем стало не до этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 325,
    text:
      `
        Леон был молчалив. Казалось, все его мысли были заняты чем-то другим. Он обратил внимание на мое обеспокоенное лицо, нежно улыбнулся.
      `,
    buttons: [
      {
        text: '',
        goTo: 326
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 326,
    text:
      `
        Несколько раз легонько постучал по моей макушке как бы говоря: «Все хорошо, не волнуйся!»
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 327,
    text:
      `
        Его поддержка служила мне верной и крепкой опорой. Сердце невольно застучало, словно, я была героиней романа, которыми частенько увлекалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 328,
    text:
      `
        Сегодня я почувствовала, что между нами снова нет никаких недомолвок и с ним так же легко, как в старые добрые времена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 329,
    text:
      `
        Мы шли довольно близко к друг другу. Леон был готов в любой момент поймать меня, если эпизод с потерей сознания повторится. 
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 330,
    text:
      `
        Раньше я часто проводила время в компании Скарлетт, Леона и еще нескольких друзей. Но со временем у них появилось больше других дел и всем стало не до этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 331,
    text:
      `
        Мы дошли до машины профессора Нэйтана. Леон открыл мне дверь и мы сели внутрь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/University_Corridor.jpg')
  },

  {
    id: 332,
    text:
      `
        Он включил заводную рок композицию и достал пачку сигарет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 333
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 333,
    text:
      `
        — Будешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 334,
    text:
      `
        В моей жизни присутствовало много зависимостей, и курение было одной из них. Я решила:
      `,
    buttons: [
      {
        text: 'Покурить',
        goTo: 335
      },
      {
        text: 'Не брать сигарету',
        goTo: 340
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 335,
    text:
      `
        Кто как ни Леон понимал меня. Ведь еще в начале нашей студенческой жизни, мы вместе решили побаловаться этой отравой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    stats: [
      { story: EStoriesEn.Immortals, category: 'Choice', id: 'TakeCigarette', value: +1 },
      { story: EStoriesEn.Immortals, category: 'Effect', id: 'Addiction', value: +1 }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 336,
    text:
      `
        А далее, как и полагается, наступила зависимость.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 337,
    text:
      `
        Закурив довольно крепкие сигареты, я медленно выдохнула клуб дыма и по телу растеклось приятное тепло и спокойствие.
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 338,
    text:
      `
        — Я думал, ты бросила, — сказал Леон, делая очередную затяжку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 339,
    text:
      `
        — Я тоже, — обреченно улыбнувшись сказала я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 340,
    text:
      `
        Я тактично отказалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 341,
    text:
      `
        — Рад, что ты в итоге отказалась от вредного убийцы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 342,
    text:
      `
        — Не сказала бы... Скорее боюсь, как бы мне не стало хуже.
      `,
    buttons: [
      {
        text: '',
        goTo: 343
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 343,
    text:
      `
        Мы поехали. Стиль вождения Леона был довольно грубым, он не церемонился с зеваками и хорошо маневрировал среди потока машин. 
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 344,
    text:
      `
        — Что с тобой было? 
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 345,
    text:
      `
        — Переутомление. В последнее время я много работаю и учеба... 
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 346,
    text:
      `
        — Нужно же беречь себя. Когда это ты стала так стремиться к покорению вершин, — с лёгким задором в голосе сказал парень.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 347,
    text:
      `
        — Да, знаешь, просто в последнее время мне нужно было себя куда-то девать. — я отвела взгляд на пролетающие мимо нас пейзажи за окном. — В следующий раз непременно постараюсь так не усердствовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 348,
    text:
      `
        Мы давно не общались с Леоном. Я решила спросить у него:
      `,
    buttons: [
      {
        text: 'Как твои дела?',
        goTo: 349,
        func: () => {
          scenarioManager.changeSceneButtonStatus(348, 0, false)
          scenarioManager.manageDialog(348, [0, 1, 2], [3])
        }
      },
      {
        text: 'Как твои отношения с Нэйтаном?',
        goTo: 355,
        func: () => {
          scenarioManager.changeSceneButtonStatus(348, 1, false)
          scenarioManager.manageDialog(348, [0, 1, 2], [3])
        }
      },
      {
        text: 'Где-нибудь работаешь?',
        goTo: 358,
        func: () => {
          scenarioManager.changeSceneButtonStatus(348, 2, false)
          scenarioManager.manageDialog(348, [0, 1, 2], [3])
        }
      },
      {
        text: 'Продолжить',
        goTo: 367,
        isActive: false
      }],
    beforeBegin: () => {
      scenarioManager.resetSceneButtons(348)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 349,
    text:
      `
        Леон усмехнулся и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 350,
    text:
      `
        — Спасибо, что интересуешься. Все в порядке, в последнее время тоже стараюсь больше заниматься и думать о будущем. Окончание универа не за горами.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 351,
    text:
      `
        В его словах чувствовалась сдержанность, но я привыкла, Леон всегда был таким. 
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 352,
    text:
      `
        Не делился своими переживаниями больше, чем это необходимо для поддержания беседы и общего настроения.  
      `,
    buttons: [
      {
        text: '',
        goTo: 353
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 353,
    text:
      `
        Однако он был прекрасным слушателем, который всегда понимал, как правильно поставить мозги на место, когда они явно не хотели трезво мыслить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 354,
    text:
      `
        Благодаря этой черте, он был завсегдатаем во многих компаниях. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(348, 354)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 355,
    text:
      `
        — Ничего не поменялось. Брат продолжает строить из себя взрослого и командовать.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 356,
    text:
      `
        Насколько я знала, их родители погибли довольно давно и Нэйтан взял ответственность за брата. Когда мы общались, Леон рассказывал, что профессор частенько перебарщивал с этим. 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 357,
    text:
      `
        Он не особо любил вдаваться в подробности их отношений, но было очевидно — они любят друг друга, просто каждый по-своему. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(348, 357)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 358,
    text:
      `
        — Нет, недавно уволился из одного магазинчика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 359,
    text:
      `
        — Ого, а какого? Может быть я даже заходила к вам.
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 360,
    text:
      `
        — Все-то вам интересно, девушка, — не отрывая взгляд от дороги сказал Леон.
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 361,
    text:
      `
        — Мы же столько не общались, конечно, я хочу знать, все ли у тебя в порядке. 
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 362,
    text:
      `
        — Лучше побеспокойся за себя, а то вон, каждый день будешь падать в обмороки, а мне потом спасай! 
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 363,
    text:
      `
        Стало немного обидно от того, что он совсем не хотел делиться со мной хотя бы крохами своей повседневной жизни и неожиданно для себя я выпалила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 364,
    text:
      `
        — Вот и спасай! А может я специально падаю в обмороки, чтобы ты хоть иногда со мной разговаривал... Злодейский план у меня такой!
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 365,
    text:
      `
        Леон опешил от такого неожиданного признания и впервые прямо взглянул на меня:
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 366,
    text:
      `
        — Твое здоровье важнее чем эти глупости, дурочка! 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.copySceneButtons(348, 366)
    },
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 367,
    text:
      `
        Мы еще немного поговорили, а затем, он подвез меня прямо к дому. Я снова увидела привычную зеленую лужайку, спокойную и умиротворенную обстановку. 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 368,
    text:
      `
        В соседнем доме горел свет. Значит Шерил уже вернулась. И как бы в подтверждение моих мыслей, она резко выбежала из дома, с грохотом захлопнув входную дверь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 369,
    text:
      `
        Даже из окна машины я видела, что она была подавлена. 
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 370,
    text:
      `
        «Почему она не на занятиях?»
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 371,
    text:
      `
        — Спасибо большое, Леон, я пойду.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 372,
    text:
      `
        — Давай я помогу тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 373,
    text:
      `
        — Не стоит, я и так тебя задержала. К тому же, там моя подруга, она мне поможет. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 374,
    text:
      `
        — Хорошо. И мне было не сложно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Leon.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 375,
    text:
      `
        Он вышел из машины, открыл мне дверь, помогая подняться. Я еще раз поблагодарила Леона и немного пошатываясь направилась к Шерил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Neitan_Car.jpg')
  },

  {
    id: 376,
    text:
      `
        Шерил была удивлена так же как я. 
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    music: require('../../../../Sounds/Immortals/Cheryl.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 377,
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
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Cheryl' }) >= 1
        },
        goTo: 378
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Person', id: 'Cheryl' }) <= -1
        },
        goTo: 380
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 378,
    text:
      `
        Она была рада меня видеть. Шерил обеспокоенно посмотрела на меня и спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 379,
    text:
      `
        — $Имя Игрока$, что случилось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 380,
    text:
      `
        Она была не очень мне рада. Видимо из-за утренней переписки. Однако, на ее лице все равно отразилось беспокойство. 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 381,
    text:
      `
        — $Имя Игрока$, что случилось? 
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 382,
    text:
      `
        — Если я тебе расскажу, ты все равно не поверишь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 383,
    text:
      `
        — Я не думаю, что меня будет сложно удивить, учитывая, насколько насыщенно протекает моя жизнь, — она натянула рукав своей футболки, чтобы скрыть синяки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 384,
    text:
      `
        Я вздохнула и решила перевести тему:
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 385,
    text:
      `
        — Поможешь дойти до комнаты? Очень хочу наконец-то прилечь!
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 386,
    text:
      `
        — Ты ещё спрашиваешь, идем, — я взяла ее под руку. — Кстати, а что это был за парень? 
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 387,
    text:
      `
        — Да так, один неравнодушный... — я немного смутилась, но быстро взяла себя в руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_House.jpg')
  },

  {
    id: 388,
    text:
      `
         Через некоторое время я уже лежала на кровати, а на моей тумбочке стоял горячий чай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 389
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 389,
    text:
      `
        — Рассказывай! — Шерил расположилась рядом со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: 0, category: 'Person', id: 'Cheryl' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 390,
    text:
      `
        Говорить правду было бессмысленно или нет? Это же Шерил, она одна из моих самых близких друзей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 391,
    text:
      `
        Но даже этот факт не поможет мне убедить человека поверить в мою невероятную историю. 
      `,
    buttons: [
      {
        text: 'Я рассказала правду',
        goTo: 392
      },
      {
        text: 'Я предпочла скрыть правду',
        goTo: 396
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 392,
    text:
      `
        В красочных деталях мною было описано путешествие в прошлое и встреча с Теслой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 393
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Cheryl' },
      { story: EStoriesEn.Immortals, value: +1, category: 'Choice', id: 'TellCherylTheTruth' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 393,
    text:
      `
        На лице Шерил я видела неподдельный интерес. Когда я закончила рассказ, подруга проговорила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 394
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'WantToBelieve' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 394,
    text:
      `
        — Это потрясающе, никогда не думала, что история может быть таким интересным предметом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    message: 'Шерил заинтересовалась историей',
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 395,
    text:
      `
        Я не удивилась, что Шерил не поверила мне. Но зато мне стало легче от того, что я смогла выговориться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 396,
    text:
      `
        Я рассказала ту же байку про переутомление. 
      `,
    buttons: [
      {
        text: '',
        goTo: 397
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 397,
    text:
      `
        Шерил почувствовала, что здесь что-то не так, ухмыльнулась, и не стала продолжать разговор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    message: 'Шерил ощущает вашу неискренность ',
    imageFront: require('../../../../Images/Immortals/Persons/Cheryl.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Cheryl' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 398,
    text:
      `
        Через час подруга ушла, так как ей нужно было успеть в магазин до возвращения отчима домой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    music: require('../../../../Sounds/Immortals/Nowadays.mp3'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 399,
    text:
      `
        Я осталась наедине со своими мыслями. Усталость от путешествия дала о себе знать, и я не заметила, как уснула. 
      `,
    buttons: [
      {
        text: '',
        goTo: 400
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 400,
    text:
      `
        Ближе к вечеру меня разбудила мама, которая пришла с работы и решила узнать о моем самочувствии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 401
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 401,
    text:
      `
        — $Имя Игрока$, ты заболела? Что случилось? — голос мамы был уставшим, но беспокойным. Я знаю, что она много работает, но у нее всегда находится время, чтобы поговорить со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 402,
    text:
      `
        — Да, немного лихорадит, принесешь мне чай? Ужинать сегодня не буду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 403,
    text:
      `
        Она подошла и приложила губы к моему лбу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 404,
    text:
      `
        — Температуры вроде бы нет, но принесу градусник на всякий случай. 
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 405,
    text:
      `
        Я закатила глаза, но кивнула. Мама всегда меня чрезмерно опекала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 406,
    text:
      `
        На удивление, у меня и правда оказалась небольшая температура. После этого мама дала мне лекарство, принесла напиток и спустилась вниз готовить ужин. 
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 407,
    text:
      `
        Оставшись в одиночестве, я взглянула на метку и меня снова поразило осознание, что все было правдой. В голову пришла лишь одна мысль:
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 408,
    text:
      `
        «Мне надо убедиться на сто процентов».
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 409,
    text:
      `
        Я дотянулась до телефона и начала гуглить про Катарину, Теслу и ту эпоху. Мне попалась монография одного историка, который анализировал мемуары Николы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },
  // @MARK
  {
    id: 410,
    text:
      `
        
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TakeSerious' }) >= 1
        },
        goTo: 411
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'DontBelieve' }) >= 1
        },
        goTo: 415
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TurnToSide' }) >= 1
        },
        goTo: 415
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'RunAwayFromNicola' }) >= 1 && statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TurnToSide' }) <= 0
        },
        goTo: 419
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 411,
    text:
      `
        В книге были описаны следующие мысли Теслы:
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 412,
    text:
      `
        <i>«Катарина вела себя немного странно. Мы собирались навестить Киплинга, который заинтересовал меня своим творчеством, но Катарина выглядела озадаченной». 
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 413,
    text:
      `
        <i>«Словно, впервые слышит об этой встрече, да и меня видит впервые. После, мы немного пообщались о моем досуге и двинулись в сторону квартиры писателя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 414,
    text:
      `
        <i>«Нас встретила очаровательная пожилая дама и гостеприимно предложила войти в дом. Но Катарина резко побледнела и потеряла сознание...»
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 415,
    text:
      `
        В книге были описаны следующие мысли Теслы:
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 416,
    text:
      `
        <i>«Катарина вела себя немного странно. Словно для нее все это было спектаклем, а она играла в нем главную роль». 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 417,
    text:
      `
        <i>«Я не знал, как на это реагировать. Вместо визита к Киплингу, я все же настоял на походе в больницу, искренне переживая за ее самочувствие». 
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 418,
    text:
      `
        <i>«Увидев врача, Катарина побледнела и потеряла сознание...»
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 419,
    text:
      `
        В книге были описаны следующие мысли Теслы:
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 420,
    text:
      `
        <i>«Катарина вела себя немного странно. Она ни с того, ни с сего убежала от меня в неизвестном направлении». 
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 421,
    text:
      `
        <i>«Я изрядно попотел, чтобы отыскать ее. В конце концов в одной из книжных лавок я обнаружил ее без сознания...»
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Mobile_Post.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 422,
    text:
      `
        Я убрала телефон и меня затрясло. Я окончательно поняла, что мои действия оказали влияние на настоящее. Это звучало абсурдно, но сам Тесла был моим проводником в моменты прошлого. 
      `,
    buttons: [
      {
        text: 'Продолжить',
        gift: true,
        goTo: 423
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 423,
    text:
      `
        В глубине души я все еще надеялась, что это лишь игра воображения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    stats: [{ category: 'Choice', id: 'TwoChoices', value: 2 }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 424,
    text:
      `
        Спать совсем не хотелось, но и засиживаться долго нельзя. Организму нужен отдых. Перед сном я все-таки решила чем-нибудь заняться. 
      `,
    buttons: [
      {
        text: 'Спуститься к родителям',
        goTo: 425
      },
      {
        text: 'Позаниматься',
        goTo: 445
      },
      {
        text: 'Написать кому-нибудь',
        goTo: 447
      }],
    message: 'Вы можете выбрать только 2 действия',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 425,
    text:
      `
        Несмотря на свое самочувствие, я все же хотела провести время с родителями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Choice', id: 'TwoChoices' },
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'SpendTimeWithFamily' }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 426,
    text:
      `
        Тем более, что у них сейчас не все гладко в отношениях. Уверена — проведённое вместе время укрепит нашу семью.
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 427,
    text:
      `
        Спустившись вниз я обнаружила, что мама моет посуду с довольно задумчивым видом, а папа сидит в кресле и без особо интереса пялится в телевизор. 
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 428,
    text:
      `
        Первым меня увидел отец, который подошел ко мне, спросил про самочувствие и усадил на диван. Мама закончила с посудой и присоединилась к нам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 429,
    text:
      `
        — Тебе лучше отдохнуть, — сказала мама. 
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 430,
    text:
      `
        — Все в порядке. Просто мы давно не проводили время вместе. Мне этого очень не хватает... 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    imageFront: () => { return wardrobe.getCurrentClothesImage(EStoriesEn.Immortals, 'Hero') },
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 431,
    text:
      `
        Отец грустно вздохнул и выдавил из себя улыбку:
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 432,
    text:
      `
        — Чем бы тебе хотелось заняться? 
      `,
    buttons: [
      {
        text: 'Поиграем в настолку',
        goTo: 433
      },
      {
        text: 'Просто поговорим о жизни',
        goTo: 436
      },
      {
        text: 'Посмотрим фильм',
        goTo: 442
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 433,
    text:
      `
        Отец достал из шкафчика игру, где надо скупать улицы и сделать своих оппонентов банкротами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Nonopoly.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 434,
    text:
      `
        Мы прекрасно провели время, смеясь и веселясь. Я не видела на лицах своих родителей какой-то грусти. Напротив, они даже обнимали друг друга, забыв на время о разногласиях. 
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Nonopoly.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 435,
    text:
      `
        Думаю, в этот вечер мы вернулись в прошлое, когда вокруг все было идеально. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Ваша семья становится крепче',
    imageFront: require('../../../../Images/Immortals/Objects/Nonopoly.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Family' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 436,
    text:
      `
        Мы несколько часов разговаривали о всяких мелочах. Мама с папой попивали вино и, казалось, были умиротворенными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 437,
    text:
      `
        Они с интересом слушали мой рассказ о сегодняшнем инциденте. Я упомянула о Скарлетт. 
      `,
    buttons: [
      {
        text: '',
        goTo: 438
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 438,
    text:
      `
        Мама тут же выдала идею о девчачьей посиделке, не забыв и про Шерил, к которой всегда тепло относилась. Она даже предложила вместе что-нибудь приготовить.
      `,
    buttons: [
      {
        text: '',
        goTo: 439
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 439,
    text:
      `
        Папа тоже воодушевился идеей и предложил пригласить Леона, дабы разбавить женский коллектив, ведь мы всегда хорошо ладили. 
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 440,
    text:
      `
        Ну, а я была рада, что семья поддерживает меня и хочет быть ближе к моим друзьям. 
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 441,
    text:
      `
        Беззаботно разговаривая, я почувствовала, что в этот вечер мы будто бы вернулись в прошлое, когда вокруг все было идеально. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Ваша семья становится крепче',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Family' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 442,
    text:
      `
        Мы выбрали классическую французскую комедию про двух, казалось бы, совершенно разных людей, которые через долгий и сложный путь смогли стать друзьями. 
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 443,
    text:
      `
        Нам было хорошо и спокойно вместе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 444,
    text:
      `
        Мама с папой пили вино и были счастливы. Думаю, в этот вечер мы вернулись в прошлое, когда вокруг все было идеально. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Ваша семья становится крепче',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Family' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Livingroom.jpg')
  },

  {
    id: 445,
    text:
      `
        Как бы мне не было лень, но я должна взять себя в руки и подтянуть учебу. Тем более, что придется пропустить несколько дней. 
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Choice', id: 'TwoChoices' },
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'SpendTimeHomework' }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 446,
    text:
      `
        Я принялась выполнять домашнюю работу и читать лекции. Вечер получился продуктивным.
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Вы прилежная ученица',
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Effect', id: 'Study' }],
    afterAll: () => {
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Effect', id: 'Study' }) > 5 && statsManager.change({ story: EStoriesEn.Immortals, value: -1, category: 'Effect', id: 'Study' })
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 447,
    text:
      `
        Хотелось закончить этот день приятным общением. 
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Choice', id: 'TwoChoices' }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 448,
    text:
      `
        Я написала: 
      `,
    buttons: [
      {
        text: 'Леону',
        goTo: 450
      },
      {
        text: 'Нэйтану',
        goTo: 456
      },
      {
        text: 'Скарлетт',
        goTo: 461
      },
      {
        text: 'Шерил',
        goTo: 475
      }],
    beforeBegin: () => {
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'WriteLeon' }) >= 1 && scenarioManager.changeSceneButtonStatus(448, 0, false)
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'WriteNeitan' }) >= 1 && scenarioManager.changeSceneButtonStatus(448, 1, false)
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'WriteScarlett' }) >= 1 && scenarioManager.changeSceneButtonStatus(448, 2, false)
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'WriteCheryl' }) >= 1 && scenarioManager.changeSceneButtonStatus(448, 3, false)
    },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 450,
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
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'HelpFromLeon' }) >= 1
        },
        goTo: 451
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'HelpFromLeon' }) <= 0
        },
        goTo: 452
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 451,
    text:
      `
        Я решила написать Леону и еще раз поблагодарить его за помощь. Он ответил в ту же секунду стикером в виде собачки, которая показывает язык. 
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'WriteLeon' }
    ],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 452,
    text:
      `
        Я решила написать Леону. Увидев его сегодня, я вспомнила как мы классно зависали раньше и как я скучаю по тем беззаботным временам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'WriteLeon' }
    ],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 453,
    text:
      `
        Мы переписывались о всяком. Он упомянул, что хочет купить подержанный мотоцикл и в ближайшее время съехать от брата. 
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 454,
    text:
      `
        Не забыли и вспомнить «молодость». Леон предложил как-нибудь встретиться и повторить вечер воспоминаний. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Леон рад был поговорить с вами',
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Leon' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 456,
    text:
      `
       
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'HelpFromLeon' }) >= 1
        },
        goTo: 458
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'HelpFromLeon' }) <= 0
        },
        goTo: 457
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 457,
    text:
      `
        Я решила написать Нэйтану и еще раз поблагодарить его за помощь. Он ответил не сразу. В своем сообщении он интересовался моим самочувствием. 
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'WriteNeitan' }
    ],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 458,
    text:
      `
        Я решила написать Нэйтану. Он как и все беспокоился о моем состояние. Мне была приятна его чуткость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'WriteNeitan' }
    ],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 459,
    text:
      `
        Мы переписывались об учебе по большей части. Нэйтан не упустил возможности еще раз напомнить, что мне стоит прикладывать больше усилий. 
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 460,
    text:
      `
        Он пожелал мне спокойной ночи, велел отдыхать и заниматься из дома. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Нэйтан рад вас наставлять',
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Chat.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Neitan' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 461,
    text:
      `
        Я решила созвониться со Скарлетт по видеосвязи. Мы давно не общались и, в какой-то степени, я скучала по нашим разговорам. 
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'WriteScarlett' }
    ],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 462,
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
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'GoBus' }) >= 1
        },
        goTo: 463
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'GoBus' }) <= 0
        },
        goTo: 473
      }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 463,
    text:
      `
        Она поведала мне немного о своих проблемах с мамой. У них не сходились интересы. Родные девушки не могли представить свою дочь в роли историка.
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 464,
    text:
      `
        — Ты представляешь, $Имя Игрока$, я заявила, что хочу работать в архивах, а она все снова про свой бизнес. Плевать ей на мои желания! 
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 465,
    text:
      `
        — А отец? 
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 466,
    text:
      `
        — Ушел рано, у него собеседование. 
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 467,
    text:
      `
        — Есть шансы, что он устроится на работу? 
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 468,
    text:
      `
        — Не знаю. Хоть папа и всегда меня поддерживал, но сейчас он больше походит на зомби, чем на человека. Мама в конец достала его пилить. 
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 469,
    text:
      `
        Я была мало посвящена в семейные проблемы подруги. Скарлетт была довольно закрытым человеком. А может она просто боялась показаться уязвимой.
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 470,
    text:
      `
        Мне же...
      `,
    buttons: [
      {
        text: 'Были понятны ее чувства',
        goTo: 471
      },
      {
        text: 'Было все равно',
        goTo: 472
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 471,
    text:
      `
        Семья — это важно, но каждый вправе жить и делать выбор, опираясь на свои желания. Понемногу, но Скарлетт открывалась мне и я хотела быть на ее стороне. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Скарлетт дорожит вашей дружбой',
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 472,
    text:
      `
        Каждый жил своей жизнью. Нужно было фокусироваться на своих проблемах, а не лезть в чужие. У Скарлетт была возможность не усложнять себе жизнь, она же выбрала иной путь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Вы со Скарлетт не такие уж и близкие подруги',
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: -1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 473,
    text:
      `
        Как моя подруга она всегда знала, какие слова нужно сказать, чтобы я чувствовала себя лучше. 
      `,
    buttons: [
      {
        text: '',
        goTo: 474
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 474,
    text:
      `
        Мне было необходимо выговориться о своих тревогах за последние дни, опуская, разумеется, момент с перемещением.
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Скарлетт чудесно провела время',
    imageFront: require('../../../../Images/Immortals/Objects/Phone_Video.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [
      { story: EStoriesEn.Immortals, value: +1, category: 'Person', id: 'Scarlett' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 475,
    text:
      `
        Шерил довольно быстро ответила. 
      `,
    buttons: [
      {
        text: '',
        goTo: 476
      }],
    stats: [
      { story: EStoriesEn.Immortals, value: 1, category: 'Choice', id: 'WriteCheryl' }
    ],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 476,
    text:
      `
        Мы договорились немного поиграть в совместную компьютерную игру, где надо было исследовать мир за анимешных героев, открывать и прокачивать различных персонажей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 477
      }],
    imageFront: require('../../../../Images/Immortals/Objects/Computergame.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 477,
    text:
      `
        Это было отличной идеей, мы обе погрузились в мир без насущных проблем, которых было много у каждой из нас, и отдохнули. 
      `,
    buttons: [
      {
        text: '',
        goTo: 509
      }],
    message: 'Шерил всегда рада вашей компании ',
    imageFront: require('../../../../Images/Immortals/Objects/Computergame.png'),
    imageBorder: require('../../../../Images/Immortals/UI/Border.png'),
    stats: [{ value: +1, category: 'Person', id: 'Cheryl' }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 478,
    text:
      `
        Окончательно вымотавшись, я обессилено упала на кровать. Но выспаться мне сегодня было не суждено. 
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('Immortals', 'Глава 1', 'Часть 3', '0')
        }
      }],
    achievement: { story: EStoriesEn.Immortals, name: 'Chapter01Part02Completed' },
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 509,
    text:
      `
        Условие
      `,
    buttons: [
      {
        text: ''
      }],
    condition: [{
      condition: () => {
        return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TwoChoices' }) < 1
      },
      goTo: 478
    },
    {
      condition: () => {
        return statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'TwoChoices' }) > 0
      },
      goTo: 510
    }],
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  },

  {
    id: 510,
    text:
      `
        Чем бы я ещё хотела заняться?
      `,
    buttons: [
      {
        text: 'Спуститься к родителям',
        goTo: 425
      },
      {
        text: 'Позаниматься',
        goTo: 445
      },
      {
        text: 'Написать кому-нибудь',
        goTo: 447
      }],
    beforeBegin: () => {
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'SpendTimeWithFamily' }) >= 1 && scenarioManager.changeSceneButtonStatus(510, 0, false)
      statsManager.get({ story: EStoriesEn.Immortals, category: 'Choice', id: 'SpendTimeHomework' }) >= 1 && scenarioManager.changeSceneButtonStatus(510, 1, false)
    },
    message: 'У вас осталось 1 действие',
    imageBack: require('../../../../Images/Immortals/Backgrounds/Hero_Room.jpg')
  }
])
