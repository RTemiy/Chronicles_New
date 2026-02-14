import { saveEndProgress, scenarioManager, statsManager, wardrobe } from '../../../../index'
import { EStoriesEn } from '../../../../Utils/EStoriesNames'
import { askedAmount, choiceDone, getChoice, resetChoices } from '../../../../Functions/5Choices'

scenarioManager.addScenario({ storyName: EStoriesEn.FOF, chapterName: 'Глава 1', partName: 'Часть 7', code: '0' }, [
  {
    id: 0,
    text:
      `
        Сегодня был выходной, а поэтому лучший торговый центр города «Victoria Mall» был забит людьми. Сюда стекались из всех районов, лишь бы хорошо провести время.
      `,
    buttons: [
      {
        text: '',
        goTo: 1
      }],
    music: require('../../../../Media/Audio/FOF/Main.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 1,
    text:
      `
        Оно и понятно. В этом ТЦ кипела жизнь: здесь же были расположены отличные бутики, где я прежде любила обновлять гардероб, а также различные кафе, развлекательные клубы и салоны красоты.
      `,
    buttons: [
      {
        text: '',
        goTo: 2
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 2,
    text:
      `
        Как говорила тетя за одним из ужинов, над проектом «Victoria Mall» работали лучшие архитекторы, вдохнувшие жизнь в свое творение: три этажа, соединенные стеклянным лифтом и такими же лестницами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 3
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 3,
    text:
      `
        Стеклянный потолок в солнечную погоду освещал всю территорию, играя бликами на идеально отполированных витринах. Настоящие растения, оплетающие высокие колонны, протягивались от самого потолка и едва ли касались пола. 
      `,
    buttons: [
      {
        text: '',
        goTo: 4
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 4,
    text:
      `
        Как я и сказала — лучший ТЦ. От этого особенно в выходные дни здесь было не протолкнуться, но меня это мало интересовало. Большинство проводили время на первом этаже.
      `,
    buttons: [
      {
        text: '',
        goTo: 5
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 5,
    text:
      `
        Администрация магазина хорошо постаралась разделить слои людей невидимой рукой: подавляющая часть общества не заходила в бутики на втором и третьем этажах — не было возможности позволить себе брендовые вещи.
      `,
    buttons: [
      {
        text: '',
        goTo: 6
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 6,
    text:
      `
        И я, как заядлый шопоголик, проводила свое время исключительно на верхних этажах.
      `,
    buttons: [
      {
        text: '',
        goTo: 7
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 7,
    text:
      `
        Предвкушая отличное времяпрепровождение, я почти забыла, что для того, что бы попасть к лифту, лестнице или хотя бы эскалатору, было необходимо пройти через всю толпу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 8
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 8,
    text:
      `
        Здесь смешались все запахи мира: от дешевой еды, быстрорастворимого кофе до парфюма.
      `,
    buttons: [
      {
        text: '',
        goTo: 9
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 9,
    text:
      `
        «Который трудно было таковым назвать. Сочетание несочетаемых ингредиентов, разлитые по безвкусным стекляшкам. Аж тошнит».
      `,
    buttons: [
      {
        text: '',
        goTo: 10
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 10,
    text:
      `
        Многие парочки ходили за ручку, обмениваясь кокетливыми взглядами, не стесняясь вызывающе вести себя на публике.
      `,
    buttons: [
      {
        text: '',
        goTo: 11
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 11,
    text:
      `
        Где-то недалеко кричали дети, которых молодые мамочки за руки вытягивали из магазинов. От этого их вопли становились еще громче и настойчивее.
      `,
    buttons: [
      {
        text: '',
        goTo: 12
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 12,
    text:
      `
        Закатив глаза, я раздраженно провела взглядом по неугомонному ребенку и посмотрела на Криса. Тот разделял мое настроение и, продолжая идти, недовольно произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 13
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 13,
    text:
      `
        Вечно орут, чего-то хотят. Да и родители бестолковые, ничего сделать не могут. Мерзость. 
      `,
    buttons: [
      {
        text: '',
        goTo: 14
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 14,
    text:
      `
        Я пришел сюда отдохнуть, хорошо провести время, а не выслушивать это.
      `,
    buttons: [
      {
        text: '',
        goTo: 15
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 15,
    text:
      `
        Не любишь детей?
      `,
    buttons: [
      {
        text: '',
        goTo: 16
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 16,
    text:
      `
        Парень шел, поглядывая по сторонам и закатывая глаза на очередную истерику.
      `,
    buttons: [
      {
        text: '',
        goTo: 17
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 17,
    text:
      `
        Ненавижу.
      `,
    buttons: [
      {
        text: '',
        goTo: 18
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 18,
    text:
      `
        Еще не люблю бестолковых родителей, которые ничему не могут научить свое чадо. А потом удивляются, почему дети вырастают отбросами общества.
      `,
    buttons: [
      {
        text: '',
        goTo: 19
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 19,
    text:
      `
        Недовольный взгляд Кристофера зацепился за ребенка, который протягивал руки к витрине, показывая маме огромного слоника.
      `,
    buttons: [
      {
        text: '',
        goTo: 20
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 20,
    text:
      `
        Да и в моем мире их тоже хватает. Люди везде одинаковые. 
      `,
    buttons: [
      {
        text: '',
        goTo: 21
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 21,
    text:
      `
        Вот поэтому я и не люблю детей. Они вечно дурачатся и не умеют быть серьезными. 
      `,
    buttons: [
      {
        text: '',
        goTo: 22
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 22,
    text:
      `
        Кого-то это напоминает.
      `,
    buttons: [
      {
        text: '',
        goTo: 23
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 23,
    text:
      `
        Парень перевел взгляд на меня, и, усмехнувшись, выдал:
      `,
    buttons: [
      {
        text: '',
        goTo: 24
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 24,
    text:
      `
        Знаешь, ты мне определенно нравишься. Говоришь то, что думаешь. В обоих мирах это большая редкость.
      `,
    buttons: [
      {
        text: '',
        goTo: 25
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 25,
    text:
      `
        Пошли наверх. Уверен, там в разы меньше этого сброда.
      `,
    buttons: [
      {
        text: '',
        goTo: 26
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 26,
    text:
      `
        Мы поднялись на второй этаж. Здесь почти не было слышно постороннего шума, лишь играла спокойная мелодия, располагающая делать покупки в удовольствие. 
      `,
    buttons: [
      {
        text: '',
        goTo: 27
      }],
    music: require('../../../../Media/Audio/FOF/Main.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 27,
    text:
      `
        Пускай редкие прохожие и мельтешили перед глазами, но мало кто из них вообще заходил в магазины. Они лишь угрюмо смотрели на цены через витрины, и, возмущаясь, быстро уходили прочь.
      `,
    buttons: [
      {
        text: '',
        goTo: 28
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 28,
    text:
      `
        Решив прояснить пару моментов, я остановила странника у одного из бутиков. Парень держал руки в карманах, равнодушно поглядывая по сторонам.
      `,
    buttons: [
      {
        text: '',
        goTo: 29
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 29,
    text:
      `
        Крис, я должна спросить…
      `,
    buttons: [
      {
        text: '',
        goTo: 30
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 30,
    text:
      `
        Я не знала, как подобрать нужные слова. Ведь до этого момента не позволяла никакому парню оплачивать мои покупки.
      `,
    buttons: [
      {
        text: '',
        goTo: 31
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 31,
    text:
      `
        И сейчас просто не понимала, на что могла рассчитывать. Плюс мне было неловко.
      `,
    buttons: [
      {
        text: '',
        goTo: 32
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 32,
    text:
      `
        Парень, увидев мои терзания, легко усмехнулся, и тут же спокойно выдал:
      `,
    buttons: [
      {
        text: '',
        goTo: 33
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 33,
    text:
      `
        Серьезно? Я думал ты будешь более резкая, что ли. Думал, что все и так понятно по тем подаренным банкам, которые тебе принес. 
      `,
    buttons: [
      {
        text: '',
        goTo: 34
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 34,
    text:
      `
        Под «подаренными банками» ты подразумеваешь один из лучших салонных уходов для тела и волос?
      `,
    buttons: [
      {
        text: '',
        goTo: 35
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 35,
    text:
      `
        Именно.
      `,
    buttons: [
      {
        text: '',
        goTo: 36
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 36,
    text:
      `
        Странник довольно усмехнулся. Я не стала спорить, лишь закатила глаза.
      `,
    buttons: [
      {
        text: '',
        goTo: 37
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 37,
    text:
      `
        Можешь выбирать все, что понравится. Я умею быть щедрым.
      `,
    buttons: [
      {
        text: '',
        goTo: 38
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 38,
    text:
      `
        И почему это? С чего бы тебе помогать мне?
      `,
    buttons: [
      {
        text: '',
        goTo: 39
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 39,
    text:
      `
        Странник остановился у стены, и, облокотившись о нее, с вызовом бросил:
      `,
    buttons: [
      {
        text: '',
        goTo: 40
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 40,
    text:
      `
        Попробуешь угадать?
      `,
    buttons: [
      {
        text: '',
        goTo: 41
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 41,
    text:
      `
        …
      `,
    buttons: [
      {
        text: 'Я тебе нравлюсь?',
        goTo: 42
      },
      {
        text: 'Ищешь выгоду',
        goTo: 58
      },
      {
        text: 'Пытаешься сблизиться?',
        goTo: 42
      },
      {
        text: 'Весело проводишь время?',
        goTo: 53
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 42,
    text:
      `
        Пытаешься узнать меня? Может быть потому, что …
      `,
    buttons: [
      {
        text: '',
        goTo: 43
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 43,
    text:
      `
        Я резко замолчала, тут же пожалев, что выпалила первые попавшиеся слова. 
      `,
    buttons: [
      {
        text: '',
        goTo: 44
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 44,
    text:
      `
        Я не умею читать мысли, Эби. Продолжай.
      `,
    buttons: [
      {
        text: '',
        goTo: 45
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 45,
    text:
      `
        Может, причина в том, что ты хочешь… дружить? 
      `,
    buttons: [
      {
        text: '',
        goTo: 46
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 46,
    text:
      `
        Прозвучало это довольно ужасно, и, скрывая раскрасневшееся лицо, уставилась на один из бутиков, в упор рассматривая безликий манекен в платье.
      `,
    buttons: [
      {
        text: '',
        goTo: 47
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 47,
    text:
      `
        Парень не сдержал усмешку, позволив себе рассмеяться над моими словами. Странник встряхнул головой, испытывающе глядя на меня. Трудно было понять, хотел ли он унизить или подбодрить.
      `,
    buttons: [
      {
        text: '',
        goTo: 48
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 48,
    text:
      `
        А я же, в свою очередь, пыталась избегать его хитрого взгляда.
      `,
    buttons: [
      {
        text: '',
        goTo: 49
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 49,
    text:
      `
        «Она ведь школьница. И чего ты ожидал? Стоит пару раз поступить хорошо, как она уже интересуется. Или влюбляется?»
      `,
    buttons: [
      {
        text: '',
        goTo: 50
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 50,
    text:
      `
        Пытаясь быть помягче, парень сложил руки на груди, отвечая:
      `,
    buttons: [
      {
        text: '',
        goTo: 51
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 51,
    text:
      `
        Милая Эби. У меня нет друзей, и, тем более, нет привычки ухаживать за девушками. Обычно мы знакомимся, проводим вместе одну ночь и расходимся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 52
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 52,
    text:
      `
        Может твоя мордашка и довольно красивая, но дело тут точно не в тебе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 53,
    text:
      `
        Ты, наверное один из тех, кто получает удовольствие от жизни, от каждого момента. 
      `,
    buttons: [
      {
        text: '',
        goTo: 54
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 54,
    text:
      `
        Не без тени сарказма парень, проходя мимо очередного магазина, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 55
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 55,
    text:
      `
        Да, особенно если это касается траты кучи денег. Меня это таааак расслабляет. Неужели я похож на мецената? 
      `,
    buttons: [
      {
        text: '',
        goTo: 56
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 56,
    text:
      `
        Отвечать не требовалась. Я шла молча, закусив губу от досады. 
      `,
    buttons: [
      {
        text: '',
        goTo: 57
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 57,
    text:
      `
        Поэтому нет, ты прогадала.
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 58,
    text:
      `
        Только я не могу понять, какую. Ведь ты ничего не просишь взамен.
      `,
    buttons: [
      {
        text: '',
        goTo: 59
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 59,
    text:
      `
        Кристофер легко улыбнулся, испытывающе вглядываясь в лицо.  
      `,
    buttons: [
      {
        text: '',
        goTo: 60
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 60,
    text:
      `
        «А она недурна. Знает, о чем говорит».
      `,
    buttons: [
      {
        text: '',
        goTo: 61
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 61,
    text:
      `
        Парень не давал подсказок, но ответ крутился на языке. Стоило лишь подумать.
      `,
    buttons: [
      {
        text: '',
        goTo: 62
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 62,
    text:
      `
        «Безусловная забота — не то, что характеризует Кристофера. Тогда, где подвох?»
      `,
    buttons: [
      {
        text: '',
        goTo: 63
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 63,
    text:
      `
        «Кому еще выгодно, чтобы обо мне заботились?»
      `,
    buttons: [
      {
        text: '',
        goTo: 64
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 64,
    text:
      `
        Причесывая волосы от внезапного дуновения кондиционера, я с ужасом осознала, что несколько волосков намертво закрутились вокруг цепочки.
      `,
    buttons: [
      {
        text: '',
        goTo: 65
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 65,
    text:
      `
        Крепко перехватив прядку волос, я аккуратно потянула ее, другой рукой держась за цепочку. Больно не было, но осознание произошедшего прогремело как гром среди ясного неба. 
      `,
    buttons: [
      {
        text: '',
        goTo: 66
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 66,
    text:
      `
        Ты помогаешь мне из-за Ника. Это он тебя попросил, да?
      `,
    buttons: [
      {
        text: '',
        goTo: 67
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 67,
    text:
      `
        Сердце ускорило ритм, пока смутный образ призрака стоял перед глазами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 68
      }],
    imageFront: require('../../../../Media/Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 68,
    text:
      `
        Он словно что-то говорил, но я не могла услышать его шепота. Взывал к моей душе, к сердцу, но кулон блокировал все сигналы.
      `,
    buttons: [
      {
        text: '',
        goTo: 69
      }],
    imageFront: require('../../../../Media/Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 69,
    text:
      `
        Рука потянулась к цепочке, и, погладив пальцами теплый металл, почувствовала укор совести. 
      `,
    buttons: [
      {
        text: '',
        goTo: 70
      }],
    imageFront: require('../../../../Media/Images/FOF/Persons/Nick.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    ghostSilhouette: true,
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 70,
    text:
      `
        «А если он переживает? Не может связаться? Что, если Ник напуган? Наверное мы зря затеяли это».
      `,
    buttons: [
      {
        text: '',
        goTo: 71
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Nick' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 71,
    text:
      `
        А ты молодец. Да, дело именно в нем. Но такие, как он не просят. Ник поставил условие: помочь тебе с комфортом принять новое тело. 
      `,
    buttons: [
      {
        text: '',
        goTo: 72
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 72,
    text:
      `
        Задумавшись, я немного прошла вперед, и, все еще перебирая пальцами кулон, спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 73
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 73,
    text:
      `
        И ты не мог отказать?
      `,
    buttons: [
      {
        text: '',
        goTo: 74
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 74,
    text:
      `
        Порой забываю, что ты не из моего мира, и приходится все объяснять.
      `,
    buttons: [
      {
        text: '',
        goTo: 75
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 75,
    text:
      `
        Уж поверь, иметь такого опытного мага как Ник в должниках очень выгодно. И траты на тебя — это ничто по сравнению с тем, что может дать Ник. В этом и есть моя выгода. 
      `,
    buttons: [
      {
        text: '',
        goTo: 76
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 76,
    text:
      `
        Если хочешь, могу немного посвятить в курс дела. Должна ведь ты хоть что-то знать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 77
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 77,
    text:
      `
        Странник молчал, но я чувствовала, что эта тема его тяготила. Чтобы подтолкнуть к ответам, я спросила:
      `,
    buttons: [
      {
        text: 'Насколько силен Ник?',
        goTo: 78,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(77, 0, getChoice(0))
        }
      },
      {
        text: 'Ты боишься его?',
        goTo: 83,
        func: () => {
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(77, 1, getChoice(1))
        }
      },
      {
        text: 'Зачем дал кулон?',
        goTo: 87,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(77, 2, getChoice(2))
        }
      },
      {
        text: 'Ты слабее Ника?',
        goTo: 91,
        func: () => {
          choiceDone(3)
          scenarioManager.changeSceneButtonStatus(77, 3, getChoice(3))
        }
      },
      {
        text: 'Вопросов нет',
        goTo: 97
      }
    ],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(77)
    },
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 78,
    text:
      `
        А сама-то как думаешь? Часто ли у вас происходят случаи с замещением души? Или, может, астральные проекции каждый день видишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 79
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 79,
    text:
      `
        Я лишь отрицательно покачала головой, пока в душе рос страх. Странник чутко почуял неладное, и пояснил:
      `,
    buttons: [
      {
        text: '',
        goTo: 80
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 80,
    text:
      `
        Вот настолько он и силен, что при необходимости смог сделать невообразимое. Душа человека из этого мира, тело ведьмы из нашего… Это же поразительно.
      `,
    buttons: [
      {
        text: '',
        goTo: 81
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 81,
    text:
      `
        Мне бы не хотелось пугать тебя и рассказывать страшилки. В конце концов, когда придет время, ты сама с ним встретишься. 
      `,
    buttons: [
      {
        text: '',
        goTo: 82
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 82,
    text:
      `
        Тогда сможете поговорить. Я не хочу быть посыльным между вами.
      `,
    buttons: [
      {
        text: ''
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg'),
    beforeBegin: () => {
      scenarioManager.loadChoices(77)
      scenarioManager.copySceneButtons(77, 82)
    }
  },

  {
    id: 83,
    text:
      `
        Он может тебе что-то сделать? Ранить? Навредить?
      `,
    buttons: [
      {
        text: '',
        goTo: 84
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 84,
    text:
      `
        Ник, конечно, очень сильный маг, но бояться его… это слишком. Он ведь не уничтожает взглядом. 
      `,
    buttons: [
      {
        text: '',
        goTo: 85
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 85,
    text:
      `
        Пока не перейдешь ему дорогу или не нарушишь планы. И, как видишь, я успел вмешаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 86
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 86,
    text:
      `
        Кристофер указал на кулон, который я автоматически сжала на груди в ладони. 
      `,
    buttons: [
      {
        text: ''
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg'),
    beforeBegin: () => {
      scenarioManager.loadChoices(77)
      scenarioManager.copySceneButtons(77, 86)
    }
  },

  {
    id: 87,
    text:
      `
        Если знал, что Ника это разозлит, зачем рисковал?
      `,
    buttons: [
      {
        text: '',
        goTo: 88
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 88,
    text:
      `
        Ты выглядела расстроенной в тот вечер. Хотел помочь справиться со всем навалившемся без посторонней помощи. 
      `,
    buttons: [
      {
        text: '',
        goTo: 89
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 89,
    text:
      `
        Ты нарушил его планы для того, чтобы помочь мне? И не боишься последствий?
      `,
    buttons: [
      {
        text: '',
        goTo: 90
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 90,
    text:
      `
        Странник молчал, а у меня появился новый вопрос.
      `,
    buttons: [
      {
        text: ''
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg'),
    beforeBegin: () => {
      scenarioManager.loadChoices(77)
      scenarioManager.copySceneButtons(77, 90)
    }
  },

  {
    id: 91,
    text:
      `
        Ты категорична. Как можно сравнивать нас? 
      `,
    buttons: [
      {
        text: '',
        goTo: 92
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 92,
    text:
      `
        Мое изумленное лицо дало понять, что стоит быть конкретнее. Ведь еще пару дней назад я и слыхом не слыхивала про другой мир, магию и все в этом роде.
      `,
    buttons: [
      {
        text: '',
        goTo: 93
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 93,
    text:
      `
        Маг — проводник сил. Странник — тоже. Вот только разница в том, что маг может использовать свою силу в более обширных случаях, а я — только на перемещение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 94
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 94,
    text:
      `
        Зато здесь он не сможет воздействовать на меня — астральное тело не позволит использовать все силы. Потому что все силы мага, странника, ведьмы, колдуна заключаются именно здесь.
      `,
    buttons: [
      {
        text: '',
        goTo: 95
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 95,
    text:
      `
        Кристофер указал на меня, легко коснувшись груди в районе сердца. Он тут же убрал руку, продолжив:
      `,
    buttons: [
      {
        text: '',
        goTo: 96
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 96,
    text:
      `
        Но в моем мире, не обладая собственной магией, тягаться с колдуном себе дороже. 
      `,
    buttons: [
      {
        text: ''
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg'),
    beforeBegin: () => {
      scenarioManager.loadChoices(77)
      scenarioManager.copySceneButtons(77, 96)
    }
  },

  {
    id: 97,
    text:
      `
        Видимо сейчас я не могла придумать новых вопросов: голова была забита услышанным.
      `,
    buttons: [
      {
        text: '',
        goTo: 98
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 98,
    text:
      `
        Отлично. Надеюсь, наша беседа была поучительной и тебе есть над чем подумать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 100
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Power' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 100,
    text:
      `
        Отвлеклись и хватит. В конце концов мы здесь по делу.
      `,
    buttons: [
      {
        text: '',
        goTo: 101
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 101,
    text:
      `
        Заглянув в один из лучших бутиков, мы продолжили беседовать, проходя вдоль рядов с одеждой.
      `,
    buttons: [
      {
        text: '',
        goTo: 102
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 102,
    text:
      `
        Понимая, что совсем ничего не знала о парне, я решила затронуть самую умиротворенную часть жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 103
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 103,
    text:
      `
        Расскажешь о своем детстве?
      `,
    buttons: [
      {
        text: '',
        goTo: 104
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 104,
    text:
      `
        А чего тебя вдруг заинтересовала эта тема?
      `,
    buttons: [
      {
        text: '',
        goTo: 105
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 105,
    text:
      `
        Перебирая несколько вешалок и детально рассматривая наряды, я ответила:
      `,
    buttons: [
      {
        text: 'Хочу узнать тебя получше',
        goTo: 106,
        gift: true
      },
      {
        text: 'Пришлось кстати',
        goTo: 164
      },
      {
        text: 'Проехали',
        goTo: 206
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 106,
    text:
      `
        По воле судьбы мы живем вместе. Хотела получше узнать того, с кем провожу время.
      `,
    buttons: [
      {
        text: '',
        goTo: 107
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 107,
    text:
      `
        Парень нахмурился, затем удивился. Сощурив глаза и, что-то обдумывая, ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 108
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 108,
    text:
      `
        Справедливо.
      `,
    buttons: [
      {
        text: '',
        goTo: 109
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 109,
    text:
      `
        Давай так. Я отвечу только на три вопроса. Что именно ты хочешь знать?
      `,
    buttons: [
      {
        text: '',
        goTo: 110
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 110,
    text:
      `
        Без вот этих всяких игр ты никак не можешь, да?
      `,
    buttons: [
      {
        text: '',
        goTo: 111
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 111,
    text:
      `
        Парень усмехнулся, и, протянув мне один наряд, с довольным голосом произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 112
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 112,
    text:
      `
        Ты только что потратила один вопрос на ерунду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 113
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 113,
    text:
      `
        Но это не игра, Эби. В жизни никогда ничего не дается даром, запомни. И я тебя к этому готовлю.
      `,
    buttons: [
      {
        text: '',
        goTo: 114
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 114,
    text:
      `
        Кристофер был на своей волне. Он загадочно говорил, но в его словах была истина, и я как никто другой об этом знала. Стоило только прислушаться…
      `,
    buttons: [
      {
        text: '',
        goTo: 115
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 115,
    text:
      `
        «Что же мне спросить?»
      `,
    buttons: [
      {
        text: 'Расскажи о своей семье',
        goTo: 116,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(115, 0, getChoice(0))
          if (askedAmount(2)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
            scenarioManager.changeSceneButtonStatus(115, 4, true)
          }
        }
      },
      {
        text: 'Каким ребенком ты был',
        goTo: 130,
        func: () => {
          choiceDone(1)
          scenarioManager.changeSceneButtonStatus(115, 1, getChoice(1))
          if (askedAmount(2)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
            scenarioManager.changeSceneButtonStatus(115, 4, true)
          }
        }
      },
      {
        text: 'Кем ты мечтал стать',
        goTo: 140,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(115, 2, getChoice(2))
          if (askedAmount(2)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
            scenarioManager.changeSceneButtonStatus(115, 4, true)
          }
        }
      },
      {
        text: 'Как тебя воспитывали?',
        goTo: 150,
        func: () => {
          choiceDone(3)
          scenarioManager.changeSceneButtonStatus(115, 3, getChoice(3))
          if (askedAmount(2)) {
            choiceDone(0)
            choiceDone(1)
            choiceDone(2)
            choiceDone(3)
            scenarioManager.changeSceneButtonStatus(115, 4, true)
          }
        }
      },
      {
        text: 'Далее',
        goTo: 161,
        isActive: false
      }],
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(115)
    },
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 116,
    text:
      `
        Какие у тебя родители, например? Есть братья, сестры?
      `,
    buttons: [
      {
        text: '',
        goTo: 117
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 117,
    text:
      `
        Боковым зрением я уловила, что Кристофер замер и глубоко выдохнул. Я развернулась, чтобы видеть его эмоции.
      `,
    buttons: [
      {
        text: '',
        goTo: 118
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 118,
    text:
      `
        Парень вернул на лицо непринужденную ухмылку и, пройдя взглядом по витрине, ответил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 119
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 119,
    text:
      `
        У меня есть только мать. Она человек. 
      `,
    buttons: [
      {
        text: '',
        goTo: 120
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 120,
    text:
      `
        Кристофер резко замолчал. Мы проходили между стеллажей в полном молчании, и, задержав взгляд на одном из нарядов, я остановилась вслед за парнем. 
      `,
    buttons: [
      {
        text: '',
        goTo: 121
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 121,
    text:
      `
        Крис не сразу продолжил, и я видела, что эта пауза была ему нужна. И, вновь возвращаясь к теме, он дополнил:
      `,
    buttons: [
      {
        text: '',
        goTo: 122
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 122,
    text:
      `
        Мама никогда не хотела путешествовать. Даже не очень обрадовалась, узнав, что способностями я пошел в отца.
      `,
    buttons: [
      {
        text: '',
        goTo: 123
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 123,
    text:
      `
        Я слушала странника, и, хоть с каждым его ответом появлялось еще больше вопросов, но, переборов свое любопытство, промолчала, пытаясь не отпугнуть своими расспросами.
      `,
    buttons: [
      {
        text: '',
        goTo: 124
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 124,
    text:
      `
        Он тоже странник. Отец ушел, когда я был маленьким. Мама трудно пережила разрыв, а я не мог огорчать ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 125
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 125,
    text:
      `
        Конечно, я искал его. Вначале для того, чтобы узнать. Узнать и его, и себя. А потом я вырос. Хотелось взглянуть в глаза тому подонку, который смог оставить женщину со своим ребенком.
      `,
    buttons: [
      {
        text: '',
        goTo: 126
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 126,
    text:
      `
        Взгляд Кристофера уперся в полку с аксессуарами, и, подав мне один из наборов, закончил: 
      `,
    buttons: [
      {
        text: '',
        goTo: 127
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 127,
    text:
      `
        Я так его и не нашел. И не знаю, где он и что с ним. 
      `,
    buttons: [
      {
        text: '',
        goTo: 128
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 128,
    text:
      `
        Потом я вырос. И осознал, что он мне не нужен. Нам не нужен. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(115)
      scenarioManager.manageDialog(115, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(115, 128)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 130,
    text:
      `
        Интересно, о чем думал, как себя вел?
      `,
    buttons: [
      {
        text: '',
        goTo: 131
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 131,
    text:
      `
        Парень устало провел взглядом по витрине с бижутерией, вручил мне несколько украшений.
      `,
    buttons: [
      {
        text: '',
        goTo: 132
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 132,
    text:
      `
        Любопытным. Особенно когда узнал, что я способен странствовать между двумя мирами.
      `,
    buttons: [
      {
        text: '',
        goTo: 133
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 133,
    text:
      `
        Думал, весь этот мир будто из области фантастики. В моем воображении живо представлялись роботы, заменяющие труд человека. 
      `,
    buttons: [
      {
        text: '',
        goTo: 134
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 134,
    text:
      `
        Прочие странники, которых не так много, между прочим, рассказывали об огромных птицах, летающих в небе — так называли самолеты. И автомобили их тоже поражали. 
      `,
    buttons: [
      {
        text: '',
        goTo: 135
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 135,
    text:
      `
        Я видела, каким воодушевленным был парень, рассказывая о некогда своих ожиданиях.
      `,
    buttons: [
      {
        text: '',
        goTo: 136
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 136,
    text:
      `
        И даже немного разочаровался, когда попал сюда. Нет, конечно, в плане прогресса твой мир далеко шагнул вперед, но я ожидал чего-то более продвинутого.
      `,
    buttons: [
      {
        text: '',
        goTo: 137
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 137,
    text:
      `
        Как себя помню, всегда искал приключения. Видимо, это заложено в моей крови — странствовать. Потому что если бы меня заставили выбрать один из миров — я бы не смог. 
      `,
    buttons: [
      {
        text: '',
        goTo: 138
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 138,
    text:
      `
        Хотя твой мир мне определенно ближе. Здесь кипит жизнь. Хаос. И мне это нравится.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(115)
      scenarioManager.manageDialog(115, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(115, 138)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 140,
    text:
      `
        Не знаю, кем становятся в твоем мире, есть ли профессии и прочее…
      `,
    buttons: [
      {
        text: '',
        goTo: 141
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 141,
    text:
      `
        Парень с интересом глянул на меня и ответил, вручив красивый наряд: 
      `,
    buttons: [
      {
        text: '',
        goTo: 142
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 142,
    text:
      `
        В моем мире особенно ценятся странники. Ведь многим людям интересно узнать о другом мире. Вот так и развилось ремесло. 
      `,
    buttons: [
      {
        text: '',
        goTo: 143
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 143,
    text:
      `
        Странники продают свои знания людям, и это дорого ценится. Некоторые заказывают небольшие сувениры. Этим я и промышляю.
      `,
    buttons: [
      {
        text: '',
        goTo: 144
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 144,
    text:
      `
        Парень изучил два представленных на витрине наряда, и, посмотрев на меня, сказал: 
      `,
    buttons: [
      {
        text: '',
        goTo: 145
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 145,
    text:
      `
        Тебе это подойдет. Примерь. Я умею видеть красоту. 
      `,
    buttons: [
      {
        text: '',
        goTo: 146
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 146,
    text:
      `
        Мы прошли к консультанту, спросили тот же самый образ, как и на витрине, и, пока девушка искала его, Кристофер вернулся к теме.
      `,
    buttons: [
      {
        text: '',
        goTo: 147
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 147,
    text:
      `
        Всегда хотел жить на два мира, так и получилось. 
      `,
    buttons: [
      {
        text: '',
        goTo: 148
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 148,
    text:
      `
        Видимо, одной жизни мне мало. И сейчас я довольствуюсь тем, что имею. 
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(115)
      scenarioManager.manageDialog(115, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(115, 148)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 150,
    text:
      `
        Наверное забавно, когда ты постоянно можешь перемещаться из одного мира в другой. А если проказничал, избегал ли наказаний? Это ведь удобно.
      `,
    buttons: [
      {
        text: '',
        goTo: 151
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 151,
    text:
      `
        Я почти не смотрела на парня, перебирая варианты блузок. В моей голове уже сложился образ, но как он будет выглядеть на мне, на новой мне, еще предстояло увидеть.
      `,
    buttons: [
      {
        text: '',
        goTo: 152
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 152,
    text:
      `
        Скажем так, меня не распускали, но и пристально не следили. Поэтому я научился хитрости. Можно все, лишь бы не заметили.
      `,
    buttons: [
      {
        text: '',
        goTo: 153
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 153,
    text:
      `
        На перемещения затрачивается очень много сил. Скорее исключение, когда ребенок способен переместиться в другой мир. Но подросток, подкрепленный необузданными эмоциями, может.
      `,
    buttons: [
      {
        text: '',
        goTo: 154
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 154,
    text:
      `
        Кристофер вспомнил веселые времена из детства и даже улыбнулся. В его взгляде даже промелькнули озорные огоньки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 155
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 155,
    text:
      `
        Был такой случай. Мне тогда едва ли исполнилось десять. Я сильно вспылил, и на какое-то время переместился. 
      `,
    buttons: [
      {
        text: '',
        goTo: 156
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 156,
    text:
      `
        Пытался быть как можно дальше от дома. Так оно и получилось.
      `,
    buttons: [
      {
        text: '',
        goTo: 157
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 157,
    text:
      `
        Мне нравилось то, что здесь я мог быть самим собой. Никто меня не знал, и это давало преимущества. 
      `,
    buttons: [
      {
        text: '',
        goTo: 158
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 158,
    text:
      `
        И лишь потом стало не по себе. Другие люди. Другой город. Чужие ценности. 
      `,
    buttons: [
      {
        text: '',
        goTo: 159
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 159,
    text:
      `
        В тот раз я и понял, что хочу странствовать. Начал осознанно изучать перемещения, и, даже, подготовил универсальный наряд, чтобы не выделяться из толпы.
      `,
    buttons: [
      {
        text: '',
        goTo: 160
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 160,
    text:
      `
        С этими словами парень вручил мне выбранную им юбку. Оценив и ткань и фасон, я, на удивление, приняла ее от странника.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(115)
      scenarioManager.manageDialog(115, [0, 1, 2, 3], [4])
      scenarioManager.copySceneButtons(115, 160)
    },
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 161,
    text:
      `
        Ну что, узнала меня лучше?
      `,
    buttons: [
      {
        text: '',
        goTo: 162
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 162,
    text:
      `
        Парень отвел взгляд в сторону, пока я смотрела на него, пытаясь угадать, что происходит в мыслях странника.
      `,
    buttons: [
      {
        text: '',
        goTo: 163
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 163,
    text:
      `
        «Так странно видеть его с этой стороны. Но, наверное, я слишком рано сделала неверные выводы о нем».
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    message: 'Ты узнала Кристофера лучше',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    stats: [
      { story: EStoriesEn.FOF, value: +2, category: 'Person', id: 'Christopher' }],
    achievement: { story: EStoriesEn.FOF, name: 'ChrisPast' },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 164,
    text:
      `
        Решила, что ходить по магазинам веселее, когда можно поболтать.
      `,
    buttons: [
      {
        text: '',
        goTo: 165
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 165,
    text:
      `
        Парень остановился у одной из вешалок, и, нахмурив лицо, с наездом произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 166
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 166,
    text:
      `
        И выбрала не совсем удачную тему для обычной беседы, не находишь?
      `,
    buttons: [
      {
        text: '',
        goTo: 167
      }],
    music: require('../../../../Media/Audio/FOF/Sad.mp3'),
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 167,
    text:
      `
        Удивившись резким словам, я развернулась, и, всматриваясь в лицо странника, истерически усмехнулась, пытаясь понять его реакцию.
      `,
    buttons: [
      {
        text: '',
        goTo: 168
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 168,
    text:
      `
        Я же не прошу выкладывать свои тайны, решила начать с чего-то далекого, не залезая в душу.
      `,
    buttons: [
      {
        text: '',
        goTo: 169
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 169,
    text:
      `
        Но именно своим легким, порой безрассудным отношением делаешь только хуже.
      `,
    buttons: [
      {
        text: '',
        goTo: 170
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 170,
    text:
      `
        И если ты купалась в лучах родительской любви и капризах, и в их жизни была маленьким ангелочком, которого любят только за то, что он есть, это не значит, что так жили все.
      `,
    buttons: [
      {
        text: '',
        goTo: 171
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 171,
    text:
      `
        Не у всех детство вызывает только приятные и беззаботные воспоминания.
      `,
    buttons: [
      {
        text: '',
        goTo: 172
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 172,
    text:
      `
        Да что с тобой такое?!
      `,
    buttons: [
      {
        text: '',
        goTo: 173
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 173,
    text:
      `
        Я не собиралась сдерживать эмоции, бушевавшие во мне, и, пытаясь доказать свою правоту в этом вопросе, высказала:
      `,
    buttons: [
      {
        text: '',
        goTo: 174
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 174,
    text:
      `
        Да что ты можешь знать о других, если сам ничего не понимаешь?!
      `,
    buttons: [
      {
        text: '',
        goTo: 175
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 175,
    text:
      `
        Кристофер, казалось, хотел что-то добавить, но, не позволив ему сказать, меня понесло:
      `,
    buttons: [
      {
        text: '',
        goTo: 176
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 176,
    text:
      `
        Пыталась зайти издалека, посмотреть на причину твоей ненависти, ведь там, внизу, ты чуть ли ни с презрением смотрел на всех детей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 177
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 177,
    text:
      `
        Лицо Криса обретало ноты принятия и расслабления. Гнев сменился пониманием. Но я не была готова так просто забыть упреки в свой адрес.
      `,
    buttons: [
      {
        text: '',
        goTo: 178
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 178,
    text:
      `
        Если ты боишься говорить о своем детстве и думаешь, что тебе было тяжелее, то увы. И если ты хоть что-то можешь рассказать о своей семье, то я не могу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 179
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 179,
    text:
      `
        Потому что мне нечего рассказывать.
      `,
    buttons: [
      {
        text: '',
        goTo: 180
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 180,
    text:
      `
        Потому что моих родителей давно нет. Они мертвы.
      `,
    buttons: [
      {
        text: '',
        goTo: 181
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 181,
    text:
      `
        Ураган эмоций бушевал внутри. Кровь закипала, а все тяжести разом обрушились на мои плечи. Был не лучший момент и я не смогла продолжать выбирать одежду.
      `,
    buttons: [
      {
        text: '',
        goTo: 182
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 182,
    text:
      `
        Миловидная девушка-консультант быстро подошла к нам, в попытках узнать, в чем дело. Я оставила ее без ответа, удалившись из бутика. 
      `,
    buttons: [
      {
        text: '',
        goTo: 183
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 183,
    text:
      `
        Парень очаровательно улыбнулся, и, со всей уверенностью непринужденно ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 184
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 184,
    text:
      `
        Не обращайте внимания. Трудная выдалась неделька. Мы ненадолго отлучимся, и позже вернемся.
      `,
    buttons: [
      {
        text: '',
        goTo: 185
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 185,
    text:
      `
        Увидев неподалеку скамейку, я направилась туда, и, ненадолго присев, закрыла лицо руками.
      `,
    buttons: [
      {
        text: '',
        goTo: 186
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 186,
    text:
      `
        Нахлынувшие страхи, боль, потери разом захлестнули мое сердце, выбивая из равновесия. Дрожь разносилась по всему телу, и я не могла ее успокоить.
      `,
    buttons: [
      {
        text: '',
        goTo: 187
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 187,
    text:
      `
        Увидев перед собой ботинки, принадлежавшие Крису, я отвернулась.
      `,
    buttons: [
      {
        text: '',
        goTo: 188
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 188,
    text:
      `
        Парень сел рядом, соблюдая некую дистанцию. Сцепив руки в замок, он опустил голову, и, нервно постукивая ногой, просто молчал.
      `,
    buttons: [
      {
        text: '',
        goTo: 189
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 189,
    text:
      `
        Немногочисленные посетители, выходившие из бутиков со своими покупками, провожали нас взглядом. Наверное со стороны казалось, что мы утомились и решили отдохнуть.
      `,
    buttons: [
      {
        text: '',
        goTo: 190
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 190,
    text:
      `
        Но наши позы и язык тела говорили больше, чем любые из догадок. 
      `,
    buttons: [
      {
        text: '',
        goTo: 191
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 191,
    text:
      `
        Парень устал ожидать, и, посмотрев поверх меня, тихо произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 192
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 192,
    text:
      `
        У меня есть только мать. Отец бросил нас, когда я появился на свет. Видимо, такая ноша была ему не по силам.
      `,
    buttons: [
      {
        text: '',
        goTo: 193
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 193,
    text:
      `
        Я пытался искать его, но в двух мирах это все равно, что искать иголку в стоге сена. А потом бросил. 
      `,
    buttons: [
      {
        text: '',
        goTo: 194
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 194,
    text:
      `
        Кристофер сжимал край скамейки, отчего костяшки на его руках побелели. Подняв взгляд на странника, я ожидала увидеть издевку, усмешки. Все, кроме боли, поглотившей его лицо.
      `,
    buttons: [
      {
        text: '',
        goTo: 195
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 195,
    text:
      `
        Такой урод как он не заслужил знать, что он кому-то важен. Он не имеет права быть нужным. Таких отцов не ищут. 
      `,
    buttons: [
      {
        text: '',
        goTo: 196
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 196,
    text:
      `
        Именно поэтому тема детства - не самая лучшая тема для беседы. Но не мне одному это знать.
      `,
    buttons: [
      {
        text: '',
        goTo: 197
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 197,
    text:
      `
        Продолжая изучать странника, я увидела в нем отражение себя. Он просто слышал и понимал мою боль как свою. 
      `,
    buttons: [
      {
        text: '',
        goTo: 198
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 198,
    text:
      `
        Я не привыкла извиняться, потому что обычно была права, но не сейчас. Осознание этого резало по гордости, словно опускало на колени, но я не сдавалась.
      `,
    buttons: [
      {
        text: '',
        goTo: 199
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 199,
    text:
      `
        «Крис легко признает слабость, но от этого он не становится слабым. Даже наоборот». 
      `,
    buttons: [
      {
        text: '',
        goTo: 200
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 200,
    text:
      `
        Почувствовав наше единение, я ответила: 
      `,
    buttons: [
      {
        text: '',
        goTo: 201
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 201,
    text:
      `
        Прости, я не знала. 
      `,
    buttons: [
      {
        text: '',
        goTo: 202
      }],
    message: 'Вы открыли друг другу свои уязвимые места',
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' }],
    achievement: { story: EStoriesEn.FOF, name: 'AboutWorries' },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 202,
    text:
      `
        Кристофер с печальной улыбкой взглянул на меня, и, встав, бодро кивнул в сторону бутика.
      `,
    buttons: [
      {
        text: '',
        goTo: 203
      }],
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 203,
    text:
      `
        Раз мы наговорились от души, то можем идти. Ты так ничего и не выбрала.
      `,
    buttons: [
      {
        text: '',
        goTo: 204
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'right',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg'),
    music: require('../../../../Media/Audio/FOF/Main.mp3')
  },

  {
    id: 204,
    text:
      `
        Благодарно улыбнувшись, я последовала вперед, где нас заждалась девушка-консультант. 
      `,
    buttons: [
      {
        text: '',
        goTo: 205
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 205,
    text:
      `
        Отказавшись от помощи работницы магазина, я отложила парочку нарядов. Кристофер, на пару минут исчезнувший из вида, принес несколько вещей, которые он выбрал на свой вкус и вручил мне в руки. 
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 206,
    text:
      `
        Я буду благодарна, если мы не будем отвлекаться на посторонние темы, ведь выбор наряда для меня — важен.
      `,
    buttons: [
      {
        text: '',
        goTo: 207
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 207,
    text:
      `
        Предпочитаешь прогуливаться в тишине?
      `,
    buttons: [
      {
        text: '',
        goTo: 208
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 208,
    text:
      `
        Проштудировав несколько вешалок и детально рассматривая наряды, я подчеркнула:
      `,
    buttons: [
      {
        text: '',
        goTo: 209
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 209,
    text:
      `
        Моя одежда — отражение меня, и сейчас я как никогда нуждаюсь в том, чтобы чувствовать себя Кассандрой, а не Эбигейл.
      `,
    buttons: [
      {
        text: '',
        goTo: 210
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 210,
    text:
      `
        И выбор наряда поможет мне в этом. Поэтому нужно сконцентрироваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 211
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 211,
    text:
      `
        Парень усмехнулся моей легкомысленности, но не стал препираться. Он то и дело терялся меж стеллажей, и возвращался всегда с приятным дополнением к образу.
      `,
    buttons: [
      {
        text: '',
        goTo: 212
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 212,
    text:
      `
        Я всецело погрузилась в составление нужного лука у себя в голове, игнорируя происходящее. Странник устало бродил рядом, подсовывая очередную вещицу для примерки.
      `,
    buttons: [
      {
        text: '',
        goTo: 213
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 213,
    text:
      `
        Я примерила все наряды и, выбрав подходящие, отнесла на кассу, где Крис оплатил покупки. Девушка-консультант сияла, пробивая чек, и аккуратно упаковывала мои будущие образы.
      `,
    buttons: [
      {
        text: '',
        goTo: 214
      }],
    parallax: 'left',
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 214,
    text:
      `
        Мы еще прошли по нескольким отделам, и к середине дня у меня в руках было уже несколько пакетов с новой одеждой, аксессуарами и обувью. 
      `,
    buttons: [
      {
        text: '',
        goTo: 215
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 215,
    text:
      `
        Кристофер лениво озирался: было видно, что ему изрядно надоел шоппинг. Но, заприметив салон красоты, парень сам предложил туда зайти.
      `,
    buttons: [
      {
        text: '',
        goTo: 216
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 216,
    text:
      `
        Едва ли увидев нас, стилист тут же оживился и начал красноречиво зазывать внутрь.
      `,
    buttons: [
      {
        text: '',
        goTo: 217
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 217,
    text:
      `
        Парень улыбнулся, сверкая шикарными зубами, и, изогнув брови в предвкушении работы, уточнил:
      `,
    buttons: [
      {
        text: '',
        goTo: 218
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall02.jpg')
  },

  {
    id: 218,
    text:
      `
        Приветствуем вас в нашем салоне красоты. Кого будем приводить в порядок? 
      `,
    buttons: [
      {
        text: '',
        goTo: 219
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 219,
    text:
      `
        Кристофер подтолкнул меня вперед и сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 220
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 220,
    text:
      `
        Ее. 
      `,
    buttons: [
      {
        text: '',
        goTo: 221
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 221,
    text:
      `
        Я, конечно же была рада посетить салон, но то, как грубо вытолкнул меня парень, не осталось незамеченным. Стилист несколько неловко переглянулся с администратором.
      `,
    buttons: [
      {
        text: '',
        goTo: 222
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 222,
    text:
      `
        Мне не оставалось ничего, кроме как проигнорировать эту наглость, натянуто улыбнувшись.
      `,
    buttons: [
      {
        text: '',
        goTo: 223
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 223,
    text:
      `
        «Неужели я настолько ему противна?!»
      `,
    buttons: [
      {
        text: '',
        goTo: 224
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part06') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 224,
    text:
      `
        Сделайте ей что-нибудь красивое. Что поднимет девушке настроение.
      `,
    buttons: [
      {
        text: '',
        goTo: 225
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 225,
    text:
      `
        Пройдемте со мной.
      `,
    buttons: [
      {
        text: '',
        goTo: 226
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 226,
    text:
      `
        Я последовала за ним, а Крис довольно развалился на диване при входе. Парень что-то выискивал в смартфоне, пока я молча недоумевала.
      `,
    buttons: [
      {
        text: '',
        goTo: 227
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 227,
    text:
      `
        Я села в кресло, парень аккуратно расчесал мне волосы, и, разгладив их по спине, подчеркнул:
      `,
    buttons: [
      {
        text: '',
        goTo: 228
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 228,
    text:
      `
        У вас прекрасные волосы. Густые, плотные. О таких мечтают все красавицы. Что будем делать? Нечто особенное? Оставляем цвет? Длину?
      `,
    buttons: [
      {
        text: '',
        goTo: 229
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 229,
    text:
      `
        Грустно взглянув в зеркало, я вспомнила, как посещала салоны, где стилисты поражались качеству моих волос, моего блонда. 
      `,
    buttons: [
      {
        text: '',
        goTo: 230
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 230,
    text:
      `
        Мне так хотелось хоть ненадолго вернуть свой цвет, но я понимала, что это было невозможно: база для осветления слишком темная. 
      `,
    buttons: [
      {
        text: '',
        goTo: 231
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 231,
    text:
      `
        Ну что ты загрустила? Давай я сам сделаю то, что посчитаю нужным. Тебе точно понравится.
      `,
    buttons: [
      {
        text: '',
        goTo: 232
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 232,
    text:
      `
        Никогда бы раньше я не села в кресло парикмахера без четкого руководства, но сейчас и правда не знала, что хотела бы видеть в зеркале помимо себя настоящей. 
      `,
    buttons: [
      {
        text: '',
        goTo: 233
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 233,
    text:
      `
        Возможно, я все еще не видела себя в этом теле, и, пусть я постепенно и привыкала, но моя внешность все еще стояла перед затуманенным взором. 
      `,
    buttons: [
      {
        text: '',
        goTo: 234
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 234,
    text:
      `
        Давай сделаем так. Предложение только для красивых девушек. После того как я закончу с волосами и макияжем, ты сможешь переодеться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 235
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 235,
    text:
      `
        Только не смотри на себя. Оценишь окончательный итог, идет?
      `,
    buttons: [
      {
        text: '',
        goTo: 236
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 236,
    text:
      `
        Вернувшись из размышлений, я лишь кивнула, а мастер начал работу. 
      `,
    buttons: [
      {
        text: '',
        goTo: 237
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 237,
    text:
      `
        Он ловко накинул на меня фартук, и, бережно убрав волосы в сторону, зафиксировал их липучкой. 
      `,
    buttons: [
      {
        text: '',
        goTo: 238
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 238,
    text:
      `
        Парень усердно смешивал краски из различных бутыльков, добавлял ароматное масло и бережно наносил на волосы. 
      `,
    buttons: [
      {
        text: '',
        goTo: 239
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 239,
    text:
      `
        Закрыв глаза, мне удалось расслабиться и довериться профессионалу своего дела, который подпевал себе под нос приятную мелодию.
      `,
    buttons: [
      {
        text: '',
        goTo: 240
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 240,
    text:
      `
        Через несколько часов упорной работы, когда мои волосы были уложены, я ощутила нежное прикосновение кистей к коже.
      `,
    buttons: [
      {
        text: '',
        goTo: 241
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 241,
    text:
      `
        Парень с завидной легкостью смешивал тональные средства, подбирая идеальный оттенок.
      `,
    buttons: [
      {
        text: '',
        goTo: 242
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 242,
    text:
      `
        У тебя отличная кожа. И я сделаю тебя еще прекраснее.
      `,
    buttons: [
      {
        text: '',
        goTo: 243
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 243,
    text:
      `
        Я не видела того, что он делал, но четко следовала его указаниям: закрыть глаза, не моргать, расслабить губы.
      `,
    buttons: [
      {
        text: '',
        goTo: 244
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 244,
    text:
      `
        Закончив с макияжем, стилист вежливо провел меня за ширму, где я переоделась без посторонних глаз.
      `,
    buttons: [
      {
        text: '',
        goTo: 245
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 245,
    text:
      `
        Наконец я смогла насладиться результатом сегодняшних выборов.
      `,
    buttons: [
      {
        text: '',
        goTo: 246
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 246,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    wardrobe: { story: EStoriesEn.FOF, personId: 'Abigeil_Part07', goTo: 247 },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 247,
    text:
      `
        Покрутившись в разные стороны, я оценила внешний вид. И чувствовала себя гораздо лучше, нося подходящую одежду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 248
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 248,
    text:
      `
        Тебе нравится?
      `,
    buttons: [
      {
        text: '',
        goTo: 249
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 249,
    text:
      `
        Нравилось ли мне то, что я вижу? Безусловно.
      `,
    buttons: [
      {
        text: '',
        goTo: 250
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 250,
    text:
      `
        Теперь одежда сидела идеально, и, что немаловажно, я выбирала ее сама, с учетом новой фигуры. Подчеркивая все ее достоинства.
      `,
    buttons: [
      {
        text: '',
        goTo: 251
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 251,
    text:
      `
        Мой новый внешний вид поражал, и в зеркале напротив себя я видела прекрасную, идеальную девушку.
      `,
    buttons: [
      {
        text: '',
        goTo: 252
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 252,
    text:
      `
        Да! Вы сотворили чудо.
      `,
    buttons: [
      {
        text: '',
        goTo: 253
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 253,
    text:
      `
        Довольный своей работой стилист с улыбкой проводил меня обратно, и воодушевленно пролепетал, обращаясь к Крису:
      `,
    buttons: [
      {
        text: '',
        goTo: 254
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 254,
    text:
      `
        Ну вот, принимайте. Ваша девушка выглядит просто как конфетка. Вам повезло, отлично смотритесь вместе. 
      `,
    buttons: [
      {
        text: '',
        goTo: 255
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 255,
    text:
      `
        И, посмотрев на меня, подмигнул и добавил:
      `,
    buttons: [
      {
        text: '',
        goTo: 256
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 256,
    text:
      `
        Такая леди заслуживает всего наилучшего. Какая осанка, волосы просто шелк, а фигура…
      `,
    buttons: [
      {
        text: '',
        goTo: 257
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 257,
    text:
      `
        Клянусь, будь вы тут одни, я бы точно спросил номерок. С такой красавицей приятно иметь дело.
      `,
    buttons: [
      {
        text: '',
        goTo: 258
      }],
    speaker: 'Стилист',
    imageFront: require('../../../../Media/Images/FOF/Persons/Stylist.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 258,
    text:
      `
        Пытаясь заткнуть стилиста, я лишь проговорила:
      `,
    buttons: [
      {
        text: '',
        goTo: 259
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 259,
    text:
      `
        Он не…
      `,
    buttons: [
      {
        text: '',
        goTo: 260
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 260,
    text:
      `
        Крис одной рукой приобнял меня, отчего я пошатнулась. Я прочистила горло, привлекая к себе внимание, а парень, смотря на мастера, сказал:
      `,
    buttons: [
      {
        text: '',
        goTo: 261
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 261,
    text:
      `
        Обойдемся. 
      `,
    buttons: [
      {
        text: '',
        goTo: 262
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 262,
    text:
      `
        Все мое тело было напряжено, Крис так и не отпускал, пытаясь убедить взбудораженного парнишку ретироваться.
      `,
    buttons: [
      {
        text: '',
        goTo: 263
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 263,
    text:
      `
        Стилист быстро все понял, лучезарно улыбнулся и ушел подготавливать рабочее место к приходу нового клиента.
      `,
    buttons: [
      {
        text: '',
        goTo: 264
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/BeautySaloon.jpg')
  },

  {
    id: 264,
    text:
      `
        Когда мы вышли из салона красоты, я высвободилась из его объятий. Крис выглядел равнодушным, и все его действия были максимально расслабленными, но не мои.
      `,
    buttons: [
      {
        text: '',
        goTo: 265
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 265,
    text:
      `
        Хотелось дать понять ему, что я не одна из тех девушек, которых он клеит в барах, и, остановив его, возмущенно спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 266
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 266,
    text:
      `
        Что это было?
      `,
    buttons: [
      {
        text: '',
        goTo: 267
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 267,
    text:
      `
        Парень будто ни в чем не бывало посмотрел на меня и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 268
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 268,
    text:
      `
        Уверен, он каждую девушку осыпает комплиментами. 
      `,
    buttons: [
      {
        text: '',
        goTo: 269
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 269,
    text:
      `
        Не хватало еще, чтоб такие, как он клеились, отвлекая нас от дел. Или стоило тебя оставить? Может, номерок пойдешь возьмешь? 
      `,
    buttons: [
      {
        text: '',
        goTo: 270
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 270,
    text:
      `
        Только я в сторонке ждать не буду. 
      `,
    buttons: [
      {
        text: '',
        goTo: 271
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 271,
    text:
      `
        Поймав мой хитрый взгляд на себе, парень добавил, недовольно закатив глаза:
      `,
    buttons: [
      {
        text: '',
        goTo: 272
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 272,
    text:
      `
        Ты серьезно? Я решил помочь, а ты не оценила. Вот так и помогай девушкам после этого.
      `,
    buttons: [
      {
        text: '',
        goTo: 273
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 273,
    text:
      `
        Поравнявшись с ним, я сказала:
      `,
    buttons: [
      {
        text: 'Я оценила и благодарна',
        goTo: 274
      },
      {
        text: 'Не влезай в чужие дела',
        goTo: 287
      },
      {
        text: 'Спасибо',
        goTo: 291
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 274,
    text:
      `
        Знаешь, я не привыкла, что парни могут искренне помогать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 275
      }],
    music: require('../../../../Media/Audio/FOF/Christopher.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 275,
    text:
      `
        Кристофер удержал на мне задумчивый взгляд, и я не стала отворачиваться. После сказанных слов между нами что-то изменилось. Мы вели немой диалог, удерживая зрительный контакт.
      `,
    buttons: [
      {
        text: '',
        goTo: 276
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 276,
    text:
      `
        «Он ведь не испытал неудобства. Сам и воспользовался случаем прикоснуться ко мне. Ведь это я».
      `,
    buttons: [
      {
        text: '',
        goTo: 277
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 277,
    text:
      `
        «Преображение сделало ее еще красивее. И то, что такая девушка живет со мной под одной крышей и все еще держит дистанцию — удивляет».
      `,
    buttons: [
      {
        text: '',
        goTo: 278
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 278,
    text:
      `
        «Мои выборы, поведение, речь, поступки и определяют меня. И, неужели, Крис заинтересован?»
      `,
    buttons: [
      {
        text: '',
        goTo: 279
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 279,
    text:
      `
        «Или это я теряю очарование? Или же все дело в том, что она — иная?»
      `,
    buttons: [
      {
        text: '',
        goTo: 280
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 280,
    text:
      `
        «Я чувствую, что он сам хотел. Он первый сделал шаг навстречу».
      `,
    buttons: [
      {
        text: '',
        goTo: 281
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 281,
    text:
      `
        «Она ведь школьница. Чирлидерша. Они обычно очень импульсивны, эгоистичны, грубы. Интересно было бы узнать ее получше. Нет, не Эбигейл, а ее. Кассандру».
      `,
    buttons: [
      {
        text: '',
        goTo: 282
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 282,
    text:
      `
        «Ее сила, моя сила подсказывает мне. Это интуиция?»
      `,
    buttons: [
      {
        text: '',
        goTo: 283
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 283,
    text:
      `
        «Она меняется. Эта девушка знает свои сильные стороны, а тело ведьмы, похоже, подсказывает ей. Интуиция? Или это нечто другое?»
      `,
    buttons: [
      {
        text: '',
        goTo: 284
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 284,
    text:
      `
        «Нет, Кристофер. Меня не так легко одурачить».
      `,
    buttons: [
      {
        text: '',
        goTo: 285
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 285,
    text:
      `
        Одной вспышки хватило, что бы мы оба легко улыбнулись, и, смотря вперед, продолжили идти.
      `,
    buttons: [
      {
        text: '',
        goTo: 286
      }],
    message: 'Вы оба чувствуете, что между вами что-то происходит',
    stats: [
      { story: EStoriesEn.FOF, value: +2, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 286,
    text:
      `
        «Знаешь, Кристофер, я и правда недооценила тебя». 
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 287,
    text:
      `
        Сейчас тот век, где девушка сама может за себя постоять. 
      `,
    buttons: [
      {
        text: '',
        goTo: 288
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 288,
    text:
      `
        Пофиг.
      `,
    buttons: [
      {
        text: '',
        goTo: 289
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 289,
    text:
      `
        Не нужно пытаться быть каким-то рыцарем на белом коне, понятно?
      `,
    buttons: [
      {
        text: '',
        goTo: 290
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 290,
    text:
      `
        Крис ничего не ответил, только недовольно покачал головой, и мы молча пошли вперед.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    message: 'Кристофер хоть и промолчал, но ему очень неприятна твоя реакция',
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 291,
    text:
      `
        Кристофер удержал на мне взгляд, и я не стала отворачиваться. Мы оба легко улыбнулись, и, смотря вперед, продолжили идти.
      `,
    buttons: [
      {
        text: '',
        goTo: 292
      }],
    message: 'Кристофер хоть и промолчал, но ему приятна твоя реакция',
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 292,
    text:
      `
        Неподалеку виднелось кафе, и, остановившись, Крис предложил:
      `,
    buttons: [
      {
        text: '',
        goTo: 293
      }],
    music: require('../../../../Media/Audio/FOF/Main.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 293,
    text:
      `
        Я был бы не прочь перекусить. Что на это скажешь?
      `,
    buttons: [
      {
        text: '',
        goTo: 294
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 294,
    text:
      `
        Давай. Кофе мне точно не помешает.
      `,
    buttons: [
      {
        text: '',
        goTo: 295
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 295,
    text:
      `
        Мы направились прямиком на соблазнительный аромат пончиков и свежезаваренного кофе.
      `,
    buttons: [
      {
        text: '',
        goTo: 296
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 296,
    text:
      `
        Кристофер указал на один из столиков, но я выбрала другой, подальше от прохода. Там мы могли хотя бы насладиться тишиной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 297
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 297,
    text:
      `
        Странник поставил пакеты у стены, и, устало заняв стул, покрутил в руках меню. 
      `,
    buttons: [
      {
        text: '',
        goTo: 298
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 298,
    text:
      `
        Я лишь осмотрелась по сторонам, и, убедившись, что на стуле нет следов грязи от предыдущих посетителей, едва ли села на край.
      `,
    buttons: [
      {
        text: '',
        goTo: 299
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 299,
    text:
      `
        Кристофер лениво посмотрел страницы, и, переведя довольный взгляд на меня, пошутил:
      `,
    buttons: [
      {
        text: '',
        goTo: 300
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 300,
    text:
      `
        Ты что, впервые тут?
      `,
    buttons: [
      {
        text: '',
        goTo: 301
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 301,
    text:
      `
        Увидев на его лице смесь непонимания, я серьезно ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 302
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 302,
    text:
      `
        Мы с тетей обычно предпочитали более приватные заведения для приема пищи.
      `,
    buttons: [
      {
        text: '',
        goTo: 303
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 303,
    text:
      `
        Я не успела погрузиться в воспоминания и начать грустить, как усмешка Криса заставила обратить на него внимание.
      `,
    buttons: [
      {
        text: '',
        goTo: 304
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 304,
    text:
      `
        Развратница. Не знал, что ты бывала там. Да по тебе и не скажешь.
      `,
    buttons: [
      {
        text: '',
        goTo: 305
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 305,
    text:
      `
        Парень весело барабанил пальцами по столу, напряженно пробегая глазами по страницам меню.
      `,
    buttons: [
      {
        text: '',
        goTo: 306
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 306,
    text:
      `
        Что? Ты о чем?
      `,
    buttons: [
      {
        text: '',
        goTo: 307
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 307,
    text:
      `
        Странник даже не отвлекся от изучения представленной еды и напитков, и красноречиво выдал:
      `,
    buttons: [
      {
        text: '',
        goTo: 308
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 308,
    text:
      `
        Девочки на пилонах, дурманящие напитки… Стрип клуб.
      `,
    buttons: [
      {
        text: '',
        goTo: 309
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 309,
    text:
      `
        Мимо проходящие люди захихикали, едва ли услышав наш разговор. Клянусь, я готова была провалиться под землю со стыда, и, пытаясь вывести себя из неловкого положения, подчеркнула:
      `,
    buttons: [
      {
        text: '',
        goTo: 310
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 310,
    text:
      `
        Я имела в виду ресторан.
      `,
    buttons: [
      {
        text: '',
        goTo: 311
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 311,
    text:
      `
        Пока я буравила взглядом странника, тот не выдержал и ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 312
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 312,
    text:
      `
        Я же стебу тебя. Всегда такая напряженная?
      `,
    buttons: [
      {
        text: '',
        goTo: 313
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 313,
    text:
      `
        Не всем же быть такими, как ты.
      `,
    buttons: [
      {
        text: '',
        goTo: 314
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 314,
    text:
      `
        Я даже не посмотрела в меню, и, когда подошел официант, Крис сделал заказ:
      `,
    buttons: [
      {
        text: '',
        goTo: 315
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 315,
    text:
      `
        Большую порцию картошки фри, средняя пицца «пепперони», кусок черничного чизкейка и стакан холодного чая. 
      `,
    buttons: [
      {
        text: '',
        goTo: 316
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 316,
    text:
      `
        А тебе?
      `,
    buttons: [
      {
        text: '',
        goTo: 317
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 317,
    text:
      `
        Латте. 
      `,
    buttons: [
      {
        text: '',
        goTo: 318
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 318,
    text:
      `
        Серьезно? Может, пицца? Пончик? Пирог? Чизкейк?
      `,
    buttons: [
      {
        text: '',
        goTo: 319
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 319,
    text:
      `
        Проигнорировав слова странника, я ответила, обращаясь к официанту:
      `,
    buttons: [
      {
        text: '',
        goTo: 320
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 320,
    text:
      `
        Только латте в среднем стакане, благодарю.
      `,
    buttons: [
      {
        text: '',
        goTo: 321
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 321,
    text:
      `
        Официант записал все в блокнот, и, приняв заказ, удалился.
      `,
    buttons: [
      {
        text: '',
        goTo: 322
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 322,
    text:
      `
        Одним кофе сыт не будешь. В чем дело?
      `,
    buttons: [
      {
        text: '',
        goTo: 323
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 323,
    text:
      `
        …
      `,
    buttons: [
      {
        text: 'Крис, мы теряем время',
        goTo: 324
      },
      {
        text: 'Ты избегаешь обязанностей',
        goTo: 353
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 324,
    text:
      `
        Я благодарна за то, что ты пытаешься как-то меня развлечь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 325
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 325,
    text:
      '',
    buttons: [
      {
        text: ''
      }],
    condition: [
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Shift' }) > statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Constancy' })
        },
        goTo: 326
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Shift' }) === statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Constancy' })
        },
        goTo: 333
      },
      {
        condition: () => {
          return statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Shift' }) < statsManager.get({ story: EStoriesEn.FOF, category: 'Effect', id: 'Constancy' })
        },
        goTo: 343
      }
    ],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 326,
    text:
      `
        Я не хочу задерживаться здесь. Ведь у нас есть дела.
      `,
    buttons: [
      {
        text: '',
        goTo: 327
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 327,
    text:
      `
        Да, я попала в передрягу, и мне страшно от того, что будущее теперь неопределенно. Но по своему желанию я хочу понять ее лучше.
      `,
    buttons: [
      {
        text: '',
        goTo: 328
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 328,
    text:
      `
        Мне интересно узнать ее силы, понять, каково это быть ведьмой.
      `,
    buttons: [
      {
        text: '',
        goTo: 329
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 329,
    text:
      `
        В детстве я часто представляла себе, что, помимо нас, существуют и необычные люди, иные миры. Конечно, с возрастом я перестала об этом думать. Появились более реалистичные мысли и стремления.
      `,
    buttons: [
      {
        text: '',
        goTo: 330
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 330,
    text:
      `
        И спустя столько лет я, наконец, получила ответ на свой вопрос. А еще узнала, что существуют странники, ведьмы, колдуны.
      `,
    buttons: [
      {
        text: '',
        goTo: 331
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 331,
    text:
      `
        Последние слова я прошептала, боясь чужих ушей. Кристофер смотрел с пониманием, легкой улыбкой и каким-то немым вопросом.
      `,
    buttons: [
      {
        text: '',
        goTo: 332
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 332,
    text:
      `
        «Меняется?»
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Shift' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 333,
    text:
      `
        Да, я попала в передрягу, и мне страшно от того, что будущее теперь неопределенно. 
      `,
    buttons: [
      {
        text: '',
        goTo: 334
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 334,
    text:
      `
        Я не знаю, чего хочу больше: вернуться домой к прежней жизни или же узнать больше о твоем мире.
      `,
    buttons: [
      {
        text: '',
        goTo: 335
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 335,
    text:
      `
        «Подумать только! Раньше я точно была уверена в том, кто я такая. А теперь? Кто я? Где настоящая я?»
      `,
    buttons: [
      {
        text: '',
        goTo: 336
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 336,
    text:
      `
        Я чувствую себя другой. Будто метаюсь на краю пропасти, и не знаю, где искать спасения.
      `,
    buttons: [
      {
        text: '',
        goTo: 337
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 337,
    text:
      `
        Ты в раздрае. 
      `,
    buttons: [
      {
        text: '',
        goTo: 338
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 338,
    text:
      `
        Естественно. Пока мое тело лежит в больнице, моя душа живет в чужом теле. И как же тут не быть в раздрае?
      `,
    buttons: [
      {
        text: '',
        goTo: 339
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 339,
    text:
      `
        Парень несколько устало вздохнул, словно объясняя базовую вещь:
      `,
    buttons: [
      {
        text: '',
        goTo: 340
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 340,
    text:
      `
        Стоит быть более определенной, иначе это выльется тебе же боком.
      `,
    buttons: [
      {
        text: '',
        goTo: 341
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 341,
    text:
      `
        Ну, знаешь, когда тела и душа не живут в гармонии, это заканчивается плачевно. Психика первая не выдерживает и начинаешь сходить с ума.
      `,
    buttons: [
      {
        text: '',
        goTo: 342
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 342,
    text:
      `
        Определись, чего хочешь больше. Или хотя бы не позволяй забыть себя. 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -3, category: 'Effect', id: 'Respect' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 343,
    text:
      `
        Я люблю свой мир, но оттягивая неизбежное, лишь продлеваю мучения. 
      `,
    buttons: [
      {
        text: '',
        goTo: 344
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 344,
    text:
      `
        Да, я попала в передрягу, и мне страшно от того, что будущее для меня неопределенно. Но я все еще я. И я хочу закончить с этим. Хочу вернуться домой, к своей жизни.
      `,
    buttons: [
      {
        text: '',
        goTo: 345
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 345,
    text:
      `
        Все, чего я хочу — быть чирлидершей, учиться в школе, весело проводить время.
      `,
    buttons: [
      {
        text: '',
        goTo: 346
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 346,
    text:
      `
        Я надеюсь, когда все это закончится, то я забуду все случившееся как страшный сон.
      `,
    buttons: [
      {
        text: '',
        goTo: 347
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 347,
    text:
      `
        Неужели все настолько плохо?
      `,
    buttons: [
      {
        text: '',
        goTo: 348
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: +1, category: 'Effect', id: 'Constancy' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 348,
    text:
      `
        Парень язвительно усмехнулся, погружаясь в раздумья. 
      `,
    buttons: [
      {
        text: '',
        goTo: 349
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 349,
    text:
      `
        Я просто хочу вернуть свою жизнь. 
      `,
    buttons: [
      {
        text: '',
        goTo: 350
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 350,
    text:
      `
        Кристофер напряженно смотрел в одну точку позади меня. Его внимание было далеко за пределами кафе, и, чтобы вернуть странника сюда, пришлось помахать ему перед лицом.
      `,
    buttons: [
      {
        text: '',
        goTo: 351
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 351,
    text:
      `
        Парень нахмурился, но сконцентрировал внимание на мне.
      `,
    buttons: [
      {
        text: '',
        goTo: 352
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 352,
    text:
      `
        Поэтому, прошу, не тяни. Научи меня магии. 
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 353,
    text:
      `
        Мы могли бы начать тренироваться, но ты не хочешь. И мне неведома причина, почему. 
      `,
    buttons: [
      {
        text: '',
        goTo: 354
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 354,
    text:
      `
        Кристофер напряженно смотрел в одну точку позади меня. Его внимание было далеко за пределами кафе, и, чтобы вернуть странника сюда, пришлось помахать ему перед лицом.
      `,
    buttons: [
      {
        text: '',
        goTo: 355
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 355,
    text:
      `
        Но я больше не хочу терять время.
      `,
    buttons: [
      {
        text: '',
        goTo: 356
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 356,
    text:
      `
        Ты скучная. Но я понял. 
      `,
    buttons: [
      {
        text: '',
        goTo: 357
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 357,
    text:
      `
        Как закончу с обедом, мы сразу же поедем домой и начнем учиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 358
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 358,
    text:
      `
        Через некоторое время официант принес наши блюда, и, пока я медленно пила латте, Кристофер с усердной скоростью опустошал тарелки одну за другой.
      `,
    buttons: [
      {
        text: '',
        goTo: 359
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 359,
    text:
      `
        Пораженная увиденным, я произнесла:
      `,
    buttons: [
      {
        text: '',
        goTo: 360
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 360,
    text:
      `
        И как в тебя столько помещается?
      `,
    buttons: [
      {
        text: '',
        goTo: 361
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 361,
    text:
      `
        Парень усмехнулся, будто ожидал этого вопроса, и абсолютно довольно произнес:
      `,
    buttons: [
      {
        text: '',
        goTo: 362
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 362,
    text:
      `
        Я же странник. Мой метаболизм работает очень хорошо, поэтому быстро теряю калории. И для нормального функционирования мне надо много есть.
      `,
    buttons: [
      {
        text: '',
        goTo: 363
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 363,
    text:
      `
        Когда с трапезой было покончено, парень оставил наличные на столе. Не забыв про пакеты, мы направились к выходу.
      `,
    buttons: [
      {
        text: '',
        goTo: 364
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/MallCafe.jpg')
  },

  {
    id: 364,
    text:
      `
        Я обращала внимание на парочки, которые сидели в кафе и мило беседовали о планах на выходные. Они смеялись, целовались, и обсуждали места для проведения пикника.
      `,
    buttons: [
      {
        text: '',
        goTo: 365
      }],
    music: require('../../../../Media/Audio/FOF/Sad.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 365,
    text:
      `
        Влюбленный парень фоткал свою девушку, не в силах оторвать от нее взгляда. Так, он хотел запечатлеть мгновение с возлюбленной.
      `,
    buttons: [
      {
        text: '',
        goTo: 366
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 366,
    text:
      `
        За другим столиком сидела группа друзей. Они оживленно болтали, пародируя злобную училку, а после — во все горло смеялись, оставляя проблемы позади.
      `,
    buttons: [
      {
        text: '',
        goTo: 367
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 367,
    text:
      `
        Отвернувшись от них и смотря вперед, я не заметила Кристофера, который, похоже, достаточно долго наблюдал за мной. 
      `,
    buttons: [
      {
        text: '',
        goTo: 368
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 368,
    text:
      `
        Только не говори, что завидуешь им, этим нарциссам, которые готовы фоткать зад, лишь бы привлечь к себе внимание?
      `,
    buttons: [
      {
        text: '',
        goTo: 369
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 369,
    text:
      `
        Нет.
      `,
    buttons: [
      {
        text: '',
        goTo: 370
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 370,
    text:
      `
        Тогда чего так на них смотрела? Или знакомых увидела?
      `,
    buttons: [
      {
        text: '',
        goTo: 371
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 371,
    text:
      `
        Нет, не знакомых. Просто они показали мне то, чего я лишена.
      `,
    buttons: [
      {
        text: '',
        goTo: 372
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 372,
    text:
      `
        И чего же?
      `,
    buttons: [
      {
        text: '',
        goTo: 373
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 373,
    text:
      `
        Чего всегда себя лишала, пытаясь держать высокую планку недосягаемости. 
      `,
    buttons: [
      {
        text: '',
        goTo: 374
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 374,
    text:
      `
        И, может я и была на вершине, но никто не мог до меня дотянуться. Я была лидером, но слишком одиноким, чтобы чувствовать себя победителем.
      `,
    buttons: [
      {
        text: '',
        goTo: 375
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 375,
    text:
      `
        «Интересно, а какую жизнь вела она?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 376
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 376,
    text:
      `
        Ты знал ее? Эби?
      `,
    buttons: [
      {
        text: '',
        goTo: 377
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 377,
    text:
      `
        Лично — нет. Но до меня доходили слухи, что маг обучает довольно посредственную ведьму. Это все, что мне известно.
      `,
    buttons: [
      {
        text: '',
        goTo: 378
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 378,
    text:
      `
        «Значит, ты была такой же одинокой, как и я».
      `,
    buttons: [
      {
        text: '',
        goTo: 379
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 379,
    text:
      `
        «Какой была твоя жизнь? И почему произошло так, что тебя нет?»
      `,
    buttons: [
      {
        text: '',
        goTo: 380
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 380,
    text:
      `
        «У тебя были друзья? Семья? Остался ли хоть кто-то, кто дорожил тобой? Кто любил?» 
      `,
    buttons: [
      {
        text: '',
        goTo: 381
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 381,
    text:
      `
        Я погрузилась в размышления, из которых меня вырвал парень. Кристофер изменился в лице, и, взяв меня под локоть, ускорился.
      `,
    buttons: [
      {
        text: '',
        goTo: 382
      }],
    music: require('../../../../Media/Audio/FOF/Stress01.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 382,
    text:
      `
        Эй?!
      `,
    buttons: [
      {
        text: '',
        goTo: 383
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 383,
    text:
      `
        Иди вперед, не задавай вопросов и не оглядывайся.
      `,
    buttons: [
      {
        text: '',
        goTo: 384
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 384,
    text:
      `
        Парень ловко вилял между людьми, пока мое сердце бешено билось, ведь я не знала, от кого и почему мы бежим.
      `,
    buttons: [
      {
        text: '',
        goTo: 385
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 385,
    text:
      `
        Крис, что происходит?
      `,
    buttons: [
      {
        text: '',
        goTo: 386
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 386,
    text:
      `
        Парень не ответил, но я видела, как бегают его глаза по всему торговому центру. Он ускорил шаг, а мне пришлось бежать, чтобы поспевать за ним. 
      `,
    buttons: [
      {
        text: '',
        goTo: 387
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 387,
    text:
      `
        Я едва ли не врезалась в женщину с мороженым, на ходу прося прощения за это недоразумение.
      `,
    buttons: [
      {
        text: '',
        goTo: 388
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 388,
    text:
      `
        Что делать?
      `,
    buttons: [
      {
        text: 'Посмотреть',
        goTo: 389,
        func: () => {
          choiceDone(0)
          scenarioManager.changeSceneButtonStatus(388, 0, getChoice(0))
        }
      },
      {
        text: 'Послушаться',
        goTo: 394
      },
      {
        text: 'Оглянуться',
        goTo: 397,
        func: () => {
          choiceDone(2)
          scenarioManager.changeSceneButtonStatus(388, 2, getChoice(2))
        }
      },
      {
        text: 'Оступиться',
        goTo: 401,
        func: () => {
          choiceDone(3)
          scenarioManager.changeSceneButtonStatus(388, 3, getChoice(3))
        }
      }],
    speaker: 'Эбигейл',
    beforeBegin: () => {
      resetChoices()
      scenarioManager.resetSceneButtons(388)
    },
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 389,
    text:
      `
        «Ничего же не случится, если я просто посмотрю».
      `,
    buttons: [
      {
        text: '',
        goTo: 390
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 390,
    text:
      `
        Безумный марафон продолжался. Крис крепко держал меня за локоть, не позволяя отстать. 
      `,
    buttons: [
      {
        text: '',
        goTo: 391
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 391,
    text:
      `
        Любопытство взяло вверх, и, проигнорировав предостережение парня, я обернулась, осматривая прохожих. 
      `,
    buttons: [
      {
        text: '',
        goTo: 392
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 392,
    text:
      `
        Я же сказал, не смотреть. Что непонятного?
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(388)
      scenarioManager.copySceneButtons(388, 392)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 394,
    text:
      `
        Я решила не искушать судьбу, следовала словам парня, боясь представить, кто так сильно встревожил странника.
      `,
    buttons: [
      {
        text: '',
        goTo: 395
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 395,
    text:
      `
        А, может, не хотела увидеть что-то, что напугает меня. И, сконцентрировавшись на этом страхе, я бежала со всех ног, игнорируя возмущенных прохожих. 
      `,
    buttons: [
      {
        text: '',
        goTo: 406
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 397,
    text:
      `
        Безумный марафон продолжался. Крис крепко держал меня за локоть, не позволяя отстать.
      `,
    buttons: [
      {
        text: '',
        goTo: 398
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 398,
    text:
      `
        Неизвестность пугала, и, решив немного оглянуться через плечо, я чуть не столкнулась с женщиной, так резко возникшей на моем пути.
      `,
    buttons: [
      {
        text: '',
        goTo: 399
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 399,
    text:
      `
        Я же сказал не оглядываться. Что непонятного?
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(388)
      scenarioManager.copySceneButtons(388, 399)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 401,
    text:
      `
        «От кого мы бежим?»
      `,
    buttons: [
      {
        text: '',
        goTo: 402
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 402,
    text:
      `
        Толпа начала мелькать перед испуганным взором. Пытаясь выцепить взглядом что-то необычное, я ненароком сбилась, и, едва ли не упав, выругалась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 403
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 403,
    text:
      `
        «Черт!»
      `,
    buttons: [
      {
        text: '',
        goTo: 404
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 404,
    text:
      `
        Крис поддержал меня, не позволив упасть.
      `,
    buttons: [
      {
        text: '',
        goTo: 405
      }],
    stats: [
      { story: EStoriesEn.FOF, value: -1, category: 'Effect', id: 'Respect' },
      { story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Christopher' }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 405,
    text:
      `
        Черт, Эби.
      `,
    buttons: [
      {
        text: ''
      }],
    beforeBegin: () => {
      scenarioManager.loadChoices(388)
      scenarioManager.copySceneButtons(388, 405)
    },
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Mall01.jpg')
  },

  {
    id: 406,
    text:
      `
        Мы завернули в первый магазин. Кристофер ненадолго замер, а я, переведя дыхание, но все еще напуганная до ужаса, спросила:
      `,
    buttons: [
      {
        text: '',
        goTo: 407
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 407,
    text:
      `
        Кто там, Крис? От кого мы бежали?
      `,
    buttons: [
      {
        text: '',
        goTo: 408
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 408,
    text:
      `
        Парень неуверенно осмотрелся стеклянным взором и испуганно ответил:
      `,
    buttons: [
      {
        text: '',
        goTo: 409
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 409,
    text:
      `
        Возможно, мне просто показалось…
      `,
    buttons: [
      {
        text: '',
        goTo: 410
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 410,
    text:
      `
        Сердце, выпрыгивающее из груди, замедлилось. Лицо скривилось в немом вопросе, и, не утаивая злость, усмехнулась. 
      `,
    buttons: [
      {
        text: '',
        goTo: 411
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 411,
    text:
      `
        Что? Тебе просто показалось? В то время, пока я чуть от страха…
      `,
    buttons: [
      {
        text: '',
        goTo: 412
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 412,
    text:
      `
        Я возмущалась, а парень оставил меня у полки с косметикой и сказал, выходя из магазина:
      `,
    buttons: [
      {
        text: '',
        goTo: 413
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 413,
    text:
      `
        Стой тут. Я скоро.
      `,
    buttons: [
      {
        text: '',
        goTo: 414
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 414,
    text:
      `
        ЧТО ПРОИСХОДИТ?!
      `,
    buttons: [
      {
        text: '',
        goTo: 415
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 415,
    text:
      `
        «Он еще и бросил меня!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 416
      }],
    music: require('../../../../Media/Audio/FOF/Heartbeat.mp3'),
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 416,
    text:
      `
        Я не могла сконцентрироваться: внимание постоянно ускользало. Закрыв глаза, направила все ощущение в район груди, чтобы окончательно усмирить беспокойное сердцебиение. 
      `,
    buttons: [
      {
        text: '',
        goTo: 417
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 417,
    text:
      `
        «Ну, Кристофер!» 
      `,
    buttons: [
      {
        text: '',
        goTo: 418
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 418,
    text:
      `
        Паническая атака захлестнула меня вперемешку с энергией, которая готова была рвануть наружу, словно бомба.
      `,
    buttons: [
      {
        text: '',
        goTo: 419
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 419,
    text:
      `
        «Что это за ощущение?»
      `,
    buttons: [
      {
        text: '',
        goTo: 420
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 420,
    text:
      `
        Сделав пару глубоких вдохов, я решила пройти дальше.
      `,
    buttons: [
      {
        text: '',
        goTo: 421
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 421,
    text:
      `
        Все голоса смешивались в один непонятный гул, то нарастающий, то затихающий, а сердцебиение усиливалось. Я не слышала ничего, и тут же ощущала себя в огромной опасности.
      `,
    buttons: [
      {
        text: '',
        goTo: 422
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 422,
    text:
      `
        «Мы бежали, но от кого?»
      `,
    buttons: [
      {
        text: '',
        goTo: 423
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 423,
    text:
      `
        «Кто мог так сильно напугать странника?»
      `,
    buttons: [
      {
        text: '',
        goTo: 424
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 424,
    text:
      `
        «Я еще не видела, чтобы Крис боялся».
      `,
    buttons: [
      {
        text: '',
        goTo: 425
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 425,
    text:
      `
        «Что тут вообще происходит?»
      `,
    buttons: [
      {
        text: '',
        goTo: 426
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 426,
    text:
      `
        Я не знала, чего ожидать и шла, озираясь по сторонам. Мое внимание было сфокусировано на всем одновременно, и, не заметив, напоролась на девушку, которая выбирала парфюм.
      `,
    buttons: [
      {
        text: '',
        goTo: 427
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 427,
    text:
      `
        К моему счастью, она чудом не выронила два пробника, хотя явно не ожидала того, что кто-то вот так вот столкнется с ней.
      `,
    buttons: [
      {
        text: '',
        goTo: 428
      }],
    music: require('../../../../Media/Audio/FOF/Main.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 428,
    text:
      `
        Удивление быстро сменилось улыбкой, и, тряхнув рыжими волосами, она пошутила:
      `,
    buttons: [
      {
        text: '',
        goTo: 429
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 429,
    text:
      `
        Консультант сказала, что этот парфюм притянет в мою жизнь хорошего человека, но я не ожидала, что это случится так скоро.
      `,
    buttons: [
      {
        text: '',
        goTo: 430
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Media/Images/FOF/Persons/Samantha.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 430,
    text:
      `
        Наверное, это и вправду феромоны. «Сражают наповал», — так тут написано. 
      `,
    buttons: [
      {
        text: '',
        goTo: 431
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Media/Images/FOF/Persons/Samantha.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 431,
    text:
      `
        Наверное, со стороны я выглядела ужасно сбитой с толку, и сейчас не знала, что говорить и как себя вести. 
      `,
    buttons: [
      {
        text: '',
        goTo: 432
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 432,
    text:
      `
        Девушка рассмеялась, видимо, почувствовав мое напряжение. Она уместно сглаживала острые углы, отчего стало немного легче.
      `,
    buttons: [
      {
        text: '',
        goTo: 433
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 433,
    text:
      `
        Лучезарная покупательница держала в обеих руках по парфюму, и, слушая ароматы обоих, никак не могла определиться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 434
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 434,
    text:
      `
        Вы кажетесь тонкой натурой. Не поможете мне выбрать из этих двух? А то разрываюсь.
      `,
    buttons: [
      {
        text: '',
        goTo: 435
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Media/Images/FOF/Persons/Samantha.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 435,
    text:
      `
        Кажется, моя паранойя достигла максимума, и, выдохнув, я…
      `,
    buttons: [
      {
        text: 'Улыбнулась ей',
        goTo: 436
      },
      {
        text: 'Осадила ее',
        goTo: 438
      },
      {
        text: 'Прошла мимо',
        goTo: 439
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 436,
    text:
      `
        Думаю, что каждый человек должен подбирать парфюм исходя из личных предпочтений. Но я бы выбрала вторые.
      `,
    buttons: [
      {
        text: '',
        goTo: 437
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: 1, category: 'Person', id: 'Samantha', silent: true }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 437,
    text:
      `
        Этот бренд и композиция парфюма хорошо бы вам подошли.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 438,
    text:
      `
        Вы думаете, что я выгляжу как консультант? Идите и найдите того, кто должен помогать в выборе.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    stats: [{ story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Samantha', silent: true }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 439,
    text:
      `
        Я не стала тратить время на помощь в выборе парфюма незнакомке.
      `,
    buttons: [
      {
        text: '',
        goTo: 440
      }],
    stats: [{ story: EStoriesEn.FOF, value: -1, category: 'Person', id: 'Samantha', silent: true }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 440,
    text:
      `
        Я поспешила покинуть магазин, но чья-то рука коснулась плеча, заставив подпрыгнуть от страха. К счастью, это был Кристофер. Ситуация меня напугала, доведя нервы до предела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 441
      }],
    music: require('../../../../Media/Audio/FOF/Stress01.mp3'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 441,
    text:
      `
        Сделав пару шагов от него, я восстановила дыхание, чтобы сейчас же высказать все этому страннику.
      `,
    buttons: [
      {
        text: '',
        goTo: 442
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 442,
    text:
      `
        Черт! Какого фига ты так делаешь?!
      `,
    buttons: [
      {
        text: '',
        goTo: 443
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 443,
    text:
      `
        Вначале мы бежим от фиг пойми кого, потом ты бросаешь меня, а потом резко появляешься!
      `,
    buttons: [
      {
        text: '',
        goTo: 444
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 444,
    text:
      `
        Ты до смерти напугал меня!
      `,
    buttons: [
      {
        text: '',
        goTo: 445
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 445,
    text:
      `
        Понимая, как резко я высказалась, прикрыла глаза и, успокоившись, добавила:
      `,
    buttons: [
      {
        text: '',
        goTo: 446
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 446,
    text:
      `
        Что? Что ты узнал?
      `,
    buttons: [
      {
        text: '',
        goTo: 447
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 447,
    text:
      `
        От кого ты бежал?
      `,
    buttons: [
      {
        text: '',
        goTo: 448
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 448,
    text:
      `
        …
      `,
    buttons: [
      {
        text: '',
        goTo: 449
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 449,
    text:
      `
        Крис, что происходит?!
      `,
    buttons: [
      {
        text: '',
        goTo: 450
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 450,
    text:
      `
        От кого мы бежали?
      `,
    buttons: [
      {
        text: '',
        goTo: 451
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 451,
    text:
      `
        …
      `,
    buttons: [
      {
        text: '',
        goTo: 452
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 452,
    text:
      `
        Он молчал. Злился.
      `,
    buttons: [
      {
        text: '',
        goTo: 500
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 500,
    text:
      `
        Пытаясь оправдаться, я несла первое, что приходило в голову:
      `,
    buttons: [
      {
        text: '',
        goTo: 453
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 453,
    text:
      `
        Да, знаю, ты сказал стоять на месте. Я недалеко ушла. Мое сердце колотилось сильно, поэтому прошла вглубь, лишь бы скрыться между витрин.
      `,
    buttons: [
      {
        text: '',
        goTo: 454
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 454,
    text:
      `
        Странник молчал, доводя меня до предела. 
      `,
    buttons: [
      {
        text: '',
        goTo: 455
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 455,
    text:
      `
        Не молчи же!
      `,
    buttons: [
      {
        text: '',
        goTo: 456
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 456,
    text:
      `
        Он ответил. Но то, каким тоном он это произнес, меня поразило. Я еще не видела его таким, и не слышала голоса, похожего на сталь. До сих пор.
      `,
    buttons: [
      {
        text: '',
        goTo: 457
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 457,
    text:
      `
        Что я тебе сказал?
      `,
    buttons: [
      {
        text: '',
        goTo: 458
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 458,
    text:
      `
        Какого хрена ты здесь забыла?
      `,
    buttons: [
      {
        text: '',
        goTo: 459
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 459,
    text:
      `
        Если бы словом можно было ранить, то он бы это и сделал. Ощущая себя униженной, я пыталась оправдаться. 
      `,
    buttons: [
      {
        text: '',
        goTo: 460
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 460,
    text:
      `
        «О, Кристофер, ты пожалеешь, что так грубо ответил мне!»
      `,
    buttons: [
      {
        text: '',
        goTo: 461
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 461,
    text:
      `
        Подняв на него взгляд, полный решимости начать битву, я ответила:
      `,
    buttons: [
      {
        text: '',
        goTo: 462
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 462,
    text:
      `
        Не обязательно так грубить! 
      `,
    buttons: [
      {
        text: '',
        goTo: 463
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 463,
    text:
      `
        Я не позволю вот так обращаться к себе, и пускай ты мне помогаешь. И если в твоем мире не знают, что такое вежливость, то…
      `,
    buttons: [
      {
        text: '',
        goTo: 464
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 464,
    text:
      `
        …
      `,
    buttons: [
      {
        text: '',
        goTo: 465
      }],
    speaker: 'Кристофер',
    imageFront: require('../../../../Media/Images/FOF/Persons/Christopher.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 465,
    text:
      `
        Да что с тобой!?
      `,
    buttons: [
      {
        text: '',
        goTo: 466
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 466,
    text:
      `
        Только сейчас я поняла, что он все это время обращался не ко мне. Немигающим хищным взором парень смотрел мне за спину.
      `,
    buttons: [
      {
        text: '',
        goTo: 467
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 467,
    text:
      `
        Время остановилось. Кристофер замер, окруженный ледяным чувством. На его лице проступила вена от напряжения. Казалось, я слышала, как зубы плотно сжимались до скрипа.
      `,
    buttons: [
      {
        text: '',
        goTo: 468
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 468,
    text:
      `
        Медленно приходило осознание:
      `,
    buttons: [
      {
        text: '',
        goTo: 469
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 469,
    text:
      `
        «За спиной. То, что так напугало его. То, от чего мы бежали. Опасность!»
      `,
    buttons: [
      {
        text: '',
        goTo: 470
      }],
    speaker: 'Эбигейл',
    imageFront: () => { return wardrobe.getCurrentEntityImage(EStoriesEn.FOF, 'Abigeil_Part07') },
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 470,
    text:
      `
        Я словно в замедленной съемке повела головой, развернулась и резко отскочила к парню, чтобы видеть того, к кому он обращался.
      `,
    buttons: [
      {
        text: '',
        goTo: 471
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 471,
    text:
      `
        Еще пару минут назад она выглядела иначе: безобидной покупательницей, невинно выбирающей подходящий парфюм. Но сейчас, ощущая неизвестность и напряженность Криса, я не смела пошевелиться.
      `,
    buttons: [
      {
        text: '',
        goTo: 472
      }],
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  },

  {
    id: 472,
    text:
      `
        Ну привет, Кристофер.
      `,
    buttons: [
      {
        text: '',
        func: () => {
          saveEndProgress('FOF', 'Глава 1', 'Часть 8', '0')
        }
      }],
    speaker: 'Девушка',
    imageFront: require('../../../../Media/Images/FOF/Persons/Samantha.png'),
    imageBorder: require('../../../../Media/Images/FOF/UI/Border.png'),
    achievement: { story: EStoriesEn.FOF, name: 'Chapter01Part07Completed' },
    imageBack: require('../../../../Media/Images/FOF/Backgrounds/Cosmetics.jpg')
  }
])
